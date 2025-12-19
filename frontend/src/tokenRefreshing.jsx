import { useEffect } from "react";

function isTokenExpired(token) {
  if (!token) return true;

  const payload = JSON.parse(atob(token.split(".")[1]));
  const expiry = payload.exp * 1000; // JWT exp jest w sekundach

  return Date.now() > expiry;
}


export function useTokenRefresher(token, setToken) {
  useEffect(() => {
    const interval = setInterval(async () => {
      // sprawdź czy access token wygasł
      if (isTokenExpired(token)) {
        console.log("Access token expired — refreshing...");

        try {
          const res = await fetch("http://localhost:5001/refresh", {
            method: "POST",
            credentials: "include", // bardzo ważne! wysyła cookie z refresh tokenem
          });

          if (!res.ok) throw new Error("Refresh failed");

          const data = await res.json();

          setToken(data.accessToken);
          console.log("Token refreshed!");

        } catch (err) {
          console.error("Refresh error:", err);
        }
      }
    }, 30 * 1000); // sprawdzamy co 30 sekund — wystarczy

    return () => clearInterval(interval);
  }, [token, setToken]);
}