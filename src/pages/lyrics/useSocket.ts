import { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { getPhoneFromCookie } from "../../storage";

const UR_BASE = "wss://sagatibamusicapi.zapto.org:5001";
// const UR_BASE = "ws://localhost:5001";

export const useWebSocket = (task_id: number | undefined) => {
  const [message, setMessage] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);
  const reconnectInterval = useRef<number | undefined>(undefined);

  const phone = getPhoneFromCookie();

  useEffect(() => {
    if (!task_id) return;

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
        console.log("Mensagem recebida:", data);
        setMessage(data);

        console.log(
          "Desconectando do WebSocket após receber 'audio_response'."
        );
        socketRef.current?.disconnect();
      });

      socketRef.current.on("message", (message_received) => {
        console.log("Mensagem recebida:", message_received);
      });

      socketRef.current.on("error_message", (error_message_received) => {
        console.log("Mensagem de erro recebida:", error_message_received);
      });

      socketRef.current.on("disconnect", () => {
        console.warn("WebSocket desconectado.");
        setIsConnected(false);
      });

      socketRef.current.on("connect_error", (error) => {
        console.error("Erro na conexão WebSocket:", error);
        attemptReconnect();
      });
    };

    const attemptReconnect = () => {
      if (!reconnectInterval.current) {
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
  }, [task_id]);

  return { message, isConnected };
};
