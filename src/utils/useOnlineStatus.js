import { useState, useEffect } from "react";

export const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine); // Use navigator.onLine for initial value

  useEffect(() => {
    const handleOffline = () => setOnlineStatus(false);
    const handleOnline = () => setOnlineStatus(true);

    // Add event listeners for online and offline events
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Cleanup listeners when component unmounts
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return onlineStatus;
};
