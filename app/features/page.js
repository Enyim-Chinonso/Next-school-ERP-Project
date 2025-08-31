export default function FeaturesPage() {
  return (
    <div className="container py-5">
      {/* Page Heading */}
      <h1 className="text-center mb-5 fw-bold">Our ERP Features</h1>

      {/* Bootstrap Grid for Features */}
      <div className="row g-4">
        
        {/* Feature 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Student Management</h5>
              <p className="card-text">
                Manage student profiles, grades, attendance, and progress reports with ease.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Teacher Management</h5>
              <p className="card-text">
                Organize teacher profiles, schedules, and performance tracking efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Parent Portal</h5>
              <p className="card-text">
                Allow parents to track student performance, attendance, and communicate with teachers.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Admin Dashboard</h5>
              <p className="card-text">
                Centralized control for managing school operations, staff, and system settings.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Attendance Tracking</h5>
              <p className="card-text">
                Track and manage attendance for students and teachers in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 6 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Fees & Payments</h5>
              <p className="card-text">
                Manage school fees, invoices, receipts, and online payment integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
