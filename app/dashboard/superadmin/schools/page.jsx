// // /app/dashboard/superadmin/schools/page.jsx
// "use client";
// import React from "react";
// import DashboardLayout from "../../../components/DashboardLayout";
// import useGsapAnimations from "../../../hooks/useGsapAnimations";

// export default function SchoolsPage() {
//   useGsapAnimations();

//   const schools = [
//     { name: "Bright Future Academy", location: "Abuja", students: 420 },
//     { name: "Greenfield High", location: "Lagos", students: 310 },
//   ];

//   return (
//     <DashboardLayout role="superadmin">
//       <section className="mb-4 dash-animate">
//         <h1 className="h4">Schools Management</h1>
//         <button className="btn btn-warning">+ Add School</button>
//       </section>

//       <section className="card shadow-sm p-3 dash-animate">
//         <h3 className="h6 mb-3">Registered Schools</h3>
//         <div className="table-responsive">
//           <table className="table table-sm">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Location</th>
//                 <th>Students</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {schools.map((s) => (
//                 <tr key={s.name}>
//                   <td>{s.name}</td>
//                   <td>{s.location}</td>
//                   <td>{s.students}</td>
//                   <td>
//                     <button className="btn btn-sm btn-outline-warning me-2">
//                       Manage
//                     </button>
//                     <button className="btn btn-sm btn-outline-danger">
//                       Disable
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </DashboardLayout>
//   );
// }


// "use client";
// import React from "react";
// // import useGsapAnimations from "@/hooks/useGsapAnimations";

// import useGsapAnimations from "../../hooks/useGsapAnimations";

// export default function SchoolsPage() {
//   useGsapAnimations();

//   const schools = [
//     { name: "Bright Future Academy", location: "Abuja", students: 420 },
//     { name: "Greenfield High", location: "Lagos", students: 310 },
//   ];

//   return (
//     <>
//       <section className="mb-4 dash-animate">
//         <h1 className="h4">Schools Management</h1>
//         <button className="btn btn-warning">+ Add School</button>
//       </section>

//       <section className="card shadow-sm p-3 dash-animate">
//         <h3 className="h6 mb-3">Registered Schools</h3>
//         <div className="table-responsive">
//           <table className="table table-sm">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Location</th>
//                 <th>Students</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {schools.map((s) => (
//                 <tr key={s.name}>
//                   <td>{s.name}</td>
//                   <td>{s.location}</td>
//                   <td>{s.students}</td>
//                   <td>
//                     <button className="btn btn-sm btn-outline-warning me-2">
//                       Manage
//                     </button>
//                     <button className="btn btn-sm btn-outline-danger">
//                       Disable
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   );
// }





"use client";
import React from "react";
// import useGsapAnimations from "../../../hooks/useGsapAnimations";
import useGsapAnimations from "@/hooks/useGsapAnimations";


export default function SchoolsPage() {
  useGsapAnimations();

  const schools = [
    { name: "Bright Future Academy", location: "Abuja", students: 420 },
    { name: "Greenfield High", location: "Lagos", students: 310 },
  ];

  return (
    <>
      {/* Header */}
      <section className="mb-4 dash-animate d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">Schools Management</h1>
        <button className="btn btn-warning">+ Add School</button>
      </section>

      {/* Schools Table */}
      <section className="card shadow-sm dash-animate">
        <div className="card-body">
          <h3 className="h6 mb-3">Registered Schools</h3>
          <div className="table-responsive">
            <table className="table table-hover table-sm align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Students</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {schools.map((s) => (
                  <tr key={s.name}>
                    <td>{s.name}</td>
                    <td>{s.location}</td>
                    <td>{s.students}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        Manage
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        Disable
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
