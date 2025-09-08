// import DashboardLayout from "@/components/DashboardLayout";
import DashboardLayout from "../../components/DashboardLayout";

const superAdminMenu = [
  { href: "/dashboard/super-admin", label: "Overview", icon: "bi-speedometer2" },
  { href: "/dashboard/super-admin/schools", label: "Schools", icon: "bi-building" },
  { href: "/dashboard/super-admin/admins", label: "Admins", icon: "bi-shield-lock" },
  { href: "/dashboard/super-admin/reports", label: "Reports", icon: "bi-graph-up" },
  { href: "/dashboard/super-admin/settings", label: "Settings", icon: "bi-gear" },
];

export default function SuperAdminDashboard() {
  return (
    <DashboardLayout menu={superAdminMenu}>
      <h1 className="fw-bold">Super Admin Dashboard</h1>
      <p className="text-muted">Manage schools, admins, and system-wide settings.</p>

      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card shadow-sm p-3 text-center">
            <h5>Schools</h5>
            <p className="fs-4 fw-bold">120+</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm p-3 text-center">
            <h5>Admins</h5>
            <p className="fs-4 fw-bold">45</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
