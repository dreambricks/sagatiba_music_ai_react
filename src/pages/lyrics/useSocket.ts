import { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { useSession } from "../../context/sessionContext";

const UR_BASE = "wss://sagatibamusicapi.zapto.org";

export const useWebSocket = (task_id: number | undefined) => {
  const { user } = useSession();

  const [message, setMessage] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [hasReceivedAudio, setHasReceivedAudio] = useState(false);
  const socketRef = useRef<Socket | null>(null);
  const reconnectInterval = useRef<number | undefined>(undefined);
  const forceReconnectInterval = useRef<number | undefined>(undefined);
  const intervalRef = useRef<number | null>(null);

  const phone = user?.phone ?? "";

  const connectWebSocket = () => {
    console.log("Conectando ao WebSocket...");

    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
    }

    socketRef.current = io(UR_BASE, {
      transports: ["websocket"],
      secure: true,
    });

    socketRef.current.on("connect", () => {
      console.log("Conectado ao WebSocket.");
      setIsConnected(true);
      socketRef.current?.emit("request_audio_url", { task_id, phone });
    });

    socketRef.current.on("audio_response", (data) => {
      if (data.task_id === task_id) {
        console.log("Mensagem recebida:", data);
        setMessage(data);
        setHasReceivedAudio(true);

        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        console.log(
          "Desconectando do WebSocket após receber 'audio_response'."
        );
        socketRef.current?.disconnect();

        if (reconnectInterval.current) {
          clearInterval(reconnectInterval.current);
          reconnectInterval.current = undefined;
        }

        if (forceReconnectInterval.current) {
          clearInterval(forceReconnectInterval.current);
          forceReconnectInterval.current = undefined;
        }
      }
    });

    socketRef.current.on("disconnect", () => {
      console.warn("WebSocket desconectado.");
      setIsConnected(false);
    });

    socketRef.current.on("connect_error", () => {
      console.error("Erro na conexão WebSocket.");
      attemptReconnect();
    });
  };

  const attemptReconnect = () => {
    if (!reconnectInterval.current && !hasReceivedAudio) {
      reconnectInterval.current = setInterval(() => {
        if (!isConnected) {
          console.log("Tentando reconectar ao WebSocket...");
          connectWebSocket();
        } else {
          clearInterval(reconnectInterval.current);
          reconnectInterval.current = undefined;
        }
      }, 10000);
    }
  };

  const forceReconnect = () => {
    if (!forceReconnectInterval.current) {
      forceReconnectInterval.current = setInterval(() => {
        console.log("Forçando reconexão do WebSocket...");
        connectWebSocket();
      }, 25000);
    }
  };

  useEffect(() => {
    if (!task_id || hasReceivedAudio) return;

    connectWebSocket();
    forceReconnect();

    return () => {
      if (socketRef.current) {
        console.log("Fechando conexão WebSocket...");
        socketRef.current.disconnect();
      }
      if (reconnectInterval.current) {
        clearInterval(reconnectInterval.current);
      }
      if (forceReconnectInterval.current) {
        clearInterval(forceReconnectInterval.current);
      }
    };
  }, [task_id, hasReceivedAudio]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (forceReconnectInterval.current) {
        clearInterval(forceReconnectInterval.current);
      }
    };
  }, []);

  return { message, isConnected, forceReconnect };
};
