"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";

export default function TeacherLayout({ children }) {
  return (
    <DashboardLayout role="teacher" pageTitle="Teacher Dashboard">
      {children}
    </DashboardLayout>
  );
}
