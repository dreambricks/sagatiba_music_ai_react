import { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { getPhoneFromCookie } from "../../storage";

const UR_BASE = "wss://sagatibamusicapi.zapto.org";

export const useWebSocket = (task_id: number | undefined) => {
  const [message, setMessage] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [hasReceivedAudio, setHasReceivedAudio] = useState(false);
  const socketRef = useRef<Socket | null>(null);
  const reconnectInterval = useRef<number | undefined>(undefined);
  const intervalRef = useRef<number | null>(null);

  const phone = getPhoneFromCookie();

  useEffect(() => {
    if (!task_id || hasReceivedAudio) return;

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
        // startPooling();
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

    // const startPooling = () => {
    //   intervalRef.current = setInterval(() => {
    //     socketRef.current?.emit("request_audio_url", { task_id, phone });
    //   }, 5000);
    // };

    connectWebSocket();

    return () => {
      if (socketRef.current) {
        console.log("Fechando conexão WebSocket...");
        socketRef.current.disconnect();
      }
      if (reconnectInterval.current) {
        clearInterval(reconnectInterval.current);
      }
    };
  }, [task_id, hasReceivedAudio]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return { message, isConnected };
};
