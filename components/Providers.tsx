"use client";

import { useMounted } from "@/lib/hooks/use-mounted";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Providers({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();

  return (
    <>
      {children}
      {mounted && (
        <ToastContainer position="bottom-right" closeOnClick pauseOnHover />
      )}
    </>
  );
}
