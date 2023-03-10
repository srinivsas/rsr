import { useEffect, useState } from "react";

const useIsOnline = () => {
  const [isOnline, setIsOnLine] = useState(true);

  const handleOnline = () => {
    setIsOnLine(true);
  };
  const handleOffline = () => {
    setIsOnLine(false);
  };
  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};

export default useIsOnline;
