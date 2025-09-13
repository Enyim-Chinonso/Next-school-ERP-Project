"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import bootstrap bundle only in the browser
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        console.log("✅ Bootstrap JS loaded on client");
      })
      .catch((err) => console.error("Bootstrap load error:", err));
  }, []);

  return null; // Nothing to render
}
