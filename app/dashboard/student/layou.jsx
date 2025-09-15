// "use client";
// import React from "react";
// import DashboardLayout from "@/components/DashboardLayout";

// export default function StudentLayout({ children }) {
//   return (
//     <DashboardLayout role="student" pageTitle="Student Dashboard">
//       {children}
//     </DashboardLayout>
//   );
// }






"use client";
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";

export default function StudentLayout({ children }) {
  return (
    <DashboardLayout role="student" pageTitle="Student Dashboard">
      {children}
    </DashboardLayout>
  );
}
