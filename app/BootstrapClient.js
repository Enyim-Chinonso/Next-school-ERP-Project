"use client";

// @ts-ignore
import("bootstrap/dist/js/bootstrap.bundle.min.js");
import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}

