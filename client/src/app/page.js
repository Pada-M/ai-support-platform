"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5050/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Failed to connect ❌"));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center text-3xl font-bold">
      {status}
    </main>
  );
}
