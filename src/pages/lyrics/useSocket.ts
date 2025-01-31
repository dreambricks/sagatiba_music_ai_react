import { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

const UR_BASE = "ws://54.232.87.120";

export const useWebSocket = (task_id: number | undefined) => {
  const [message, setMessage] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);
  const reconnectInterval = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!task_id) return; // Só conecta se houver um task_id

    const connectWebSocket = () => {
      console.log("Conectando ao WebSocket...");
      socketRef.current = io(UR_BASE, { transports: ["websocket"] });

      socketRef.current.on("connect", () => {
        console.log("Conectado ao WebSocket.");
        setIsConnected(true);
        socketRef.current?.emit("request_audio_url", { task_id });
      });

      socketRef.current.on("message", (data) => {
        console.log("Mensagem recebida:", data);
        setMessage(data);
      });

      socketRef.current.on("disconnect", () => {
        console.warn("WebSocket desconectado.");
        setIsConnected(false);
        attemptReconnect();
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
