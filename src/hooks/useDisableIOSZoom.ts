import { useEffect } from "react";

export const useDisableIOSZoom = () => {
  useEffect(() => {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const meta = document.querySelector("meta[name=viewport]");
    const originalContent = meta?.getAttribute("content");

    if (isIOS && meta) {
      meta.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      );
    }

    return () => {
      if (meta && originalContent) {
        meta.setAttribute("content", originalContent);
      }
    };
  }, []);
};
