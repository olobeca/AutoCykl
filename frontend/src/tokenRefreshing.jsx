import { useEffect } from "react";

function isTokenExpired(token) {
  if (!token || typeof token !== 'string') return true;

  try {
    // Sprawdzaj czy token ma format JWT (3 części oddzielone kropkami)
    const parts = token.split(".");
    if (parts.length !== 3) return true;

    const payload = JSON.parse(atob(parts[1]));
    if (!payload.exp) return true;
    
    const expiry = payload.exp * 1000; // JWT exp jest w sekundach
    return Date.now() > expiry;
  } catch (err) {
    console.error("Token parsing error:", err);
    return true;
  }
}


export function useTokenRefresher(token, setToken) {
  useEffect(() => {
    const interval = setInterval(async () => {
      // sprawdź czy access token wygasł
      if (isTokenExpired(token)) {
        console.log("Access token expired — refreshing...");

        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}/refresh`, {
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