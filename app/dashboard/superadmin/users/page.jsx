// // /app/dashboard/superadmin/users/page.jsx
// "use client";
// import React from "react";
// // import useGsapAnimations from "@/hooks/useGsapAnimations";

// import useGsapAnimations from "../../hooks/useGsapAnimations";

// export default function UsersPage() {
//   useGsapAnimations();

//   const users = [
//     { name: "John Doe", role: "Admin", status: "Active" },
//     { name: "Jane Smith", role: "Teacher", status: "Inactive" },
//   ];

//   return (
//     <>
//       <section className="mb-4 dash-animate d-flex justify-content-between">
//         <h1 className="h4">Users</h1>
//         <button className="btn btn-warning">+ Add User</button>
//       </section>

//       <section className="card shadow-sm p-3 dash-animate">
//         <h3 className="h6 mb-3">All Users</h3>
//         <div className="table-responsive">
//           <table className="table table-hover table-sm">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Role</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((u) => (
//                 <tr key={u.name}>
//                   <td>{u.name}</td>
//                   <td>{u.role}</td>
//                   <td>
//                     <span
//                       className={`badge ${
//                         u.status === "Active"
//                           ? "bg-success"
//                           : "bg-secondary"
//                       }`}
//                     >
//                       {u.status}
//                     </span>
//                   </td>
//                   <td>
//                     <button className="btn btn-sm btn-outline-warning me-2">
//                       Edit
//                     </button>
//                     <button className="btn btn-sm btn-outline-danger">
//                       Remove
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


export default function UsersPage() {
  useGsapAnimations();

  const users = [
    { name: "John Doe", role: "Admin", status: "Active" },
    { name: "Jane Smith", role: "Teacher", status: "Inactive" },
  ];

  return (
    <>
      {/* Header */}
      <section className="mb-4 dash-animate d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">Users</h1>
        <button className="btn btn-warning">+ Add User</button>
      </section>

      {/* Users Table */}
      <section className="card shadow-sm dash-animate">
        <div className="card-body">
          <h3 className="h6 mb-3">All Users</h3>
          <div className="table-responsive">
            <table className="table table-hover table-sm align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.name}>
                    <td>{u.name}</td>
                    <td>{u.role}</td>
                    <td>
                      <span
                        className={`badge ${
                          u.status === "Active"
                            ? "bg-success"
                            : "bg-secondary"
                        }`}
                      >
                        {u.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        Remove
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
