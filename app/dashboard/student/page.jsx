// "use client";
// import React from "react";
// import useGsapAnimations from "@/hooks/useGsapAnimations";

// export default function StudentOverviewPage() {
//   useGsapAnimations();

//   const stats = [
//     { label: "Enrolled Courses", value: 6, color: "primary" },
//     { label: "Assignments Due", value: 3, color: "warning" },
//     { label: "Attendance Rate", value: "94%", color: "success" },
//   ];

//   const upcoming = [
//     { course: "Mathematics", date: "2025-09-18", time: "09:00 AM" },
//     { course: "Biology", date: "2025-09-19", time: "11:00 AM" },
//   ];

//   return (
//     <>
//       {/* Header */}
//       <section className="mb-4 dash-animate d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
//         <div>
//           <h1 className="h4 mb-1">Welcome back</h1>
//           <p className="text-muted small">Here’s a quick snapshot of your current semester.</p>
//         </div>
//         <div className="d-flex gap-2">
//           <button className="btn btn-outline-primary">View Schedule</button>
//           <button className="btn btn-primary">Submit Assignment</button>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="row g-3 mb-4">
//         {stats.map((s) => (
//           <div key={s.label} className="col-12 col-md-4 dash-animate">
//             <div className="card shadow-sm h-100">
//               <div className="card-body d-flex justify-content-between align-items-center">
//                 <div>
//                   <div className="text-muted small">{s.label}</div>
//                   <div className="h4 fw-bold mt-1">{s.value}</div>
//                 </div>
//                 <span className={`badge bg-${s.color} rounded-pill p-3`} style={{ fontSize: "0.9rem" }}>●</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Upcoming */}
//       <section className="card shadow-sm dash-animate">
//         <div className="card-body">
//           <h3 className="h6 mb-3">Upcoming Sessions</h3>
//           <div className="list-group">
//             {upcoming.map((u, i) => (
//               <div key={i} className="list-group-item d-flex justify-content-between align-items-center">
//                 <div>
//                   <div className="fw-semibold">{u.course}</div>
//                   <div className="small text-muted">{u.date} • {u.time}</div>
//                 </div>
//                 <div>
//                   <button className="btn btn-sm btn-outline-primary">Details</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




"use client";
import React from "react";
import useGsapAnimations from "@/hooks/useGsapAnimations";

export default function StudentOverviewPage() {
  useGsapAnimations();

  const stats = [
    { label: "Enrolled Courses", value: 6, color: "primary" },
    { label: "Assignments Due", value: 3, color: "warning" },
    { label: "Attendance Rate", value: "94%", color: "success" },
  ];

  const upcoming = [
    { course: "Mathematics", date: "2025-09-18", time: "09:00 AM" },
    { course: "Biology", date: "2025-09-19", time: "11:00 AM" },
  ];

  return (
    <>
      {/* Header */}
      <section className="mb-4 dash-animate d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
        <div>
          <h1 className="h4 mb-1">Welcome back</h1>
          <p className="text-muted small">
            Here’s a quick snapshot of your current semester.
          </p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary">View Schedule</button>
          <button className="btn btn-primary">Submit Assignment</button>
        </div>
      </section>

      {/* Stats */}
      <section className="row g-3 mb-4">
        {stats.map((s) => (
          <div key={s.label} className="col-12 col-md-4 dash-animate">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">{s.label}</div>
                  <div className="h4 fw-bold mt-1">{s.value}</div>
                </div>
                <span
                  className={`badge bg-${s.color} rounded-pill p-3`}
                  style={{ fontSize: "0.9rem" }}
                >
                  ●
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Upcoming */}
      <section className="card shadow-sm dash-animate">
        <div className="card-body">
          <h3 className="h6 mb-3">Upcoming Sessions</h3>
          <div className="list-group">
            {upcoming.map((u, i) => (
              <div
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <div className="fw-semibold">{u.course}</div>
                  <div className="small text-muted">
                    {u.date} • {u.time}
                  </div>
                </div>
                <div>
                  <button className="btn btn-sm btn-outline-primary">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
