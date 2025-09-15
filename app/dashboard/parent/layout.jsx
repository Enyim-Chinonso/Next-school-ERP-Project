"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";

export default function ParentLayout({ children }) {
  return (
    <DashboardLayout role="parent" pageTitle="Parent Dashboard">
      {children}
    </DashboardLayout>
  );
}
