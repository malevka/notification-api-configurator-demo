"use client";
import { useEffect } from "react";

const ServiceWorkerSetup = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js").catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
    }
  }, []);
  return null;
};

export default ServiceWorkerSetup;
