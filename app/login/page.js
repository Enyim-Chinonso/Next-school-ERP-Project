// "use client";

// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function LoginPage() {
//   const [role, setRole] = useState("superadmin");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Selected Role:", role);
//     // TODO: Redirect to role dashboard here
//   };

//   return (
//     <div
//       className="d-flex align-items-center justify-content-center vh-100"
//       style={{ background: "#f0f0f0" }}
//     >
//       <div
//         className="card shadow-lg p-4"
//         style={{ width: "100%", maxWidth: "400px", borderRadius: "15px" }}
//       >
//         <h3 className="text-center fw-bold mb-4">School ERP Login</h3>

//         <form onSubmit={handleSubmit}>
//           {/* Role Selection */}
//           <div className="mb-4">
//             <label className="form-label fw-semibold">Select Role</label>
//             <select
//               className="form-select"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//             >
//               <option value="superadmin">Super Admin</option>
//               <option value="admin">Admin</option>
//               <option value="teacher">Teacher</option>
//               <option value="student">Student</option>
//               <option value="parent">Parent</option>
//             </select>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="btn btn-warning w-100 fw-bold"
//             style={{ borderRadius: "10px" }}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";

// export default function LoginPage() {
//   const [role, setRole] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login submitted", { role });
//     // 🔑 Here you’ll connect API/auth logic later
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
//         <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
//           School ERP Login
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Email or User ID */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email or User ID
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Email or User ID"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Role Selection */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Select Role
//             </label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">-- Choose Role --</option>
//               <option value="superadmin">Super Admin</option>
//               <option value="admin">Admin</option>
//               <option value="teacher">Teacher</option>
//               <option value="student">Student</option>
//               <option value="parent">Parent</option>
//             </select>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted", { role });
    // 🔑 Auth logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Login to your School ERP account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email or User ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email or User ID
            </label>
            <input
              type="text"
              placeholder="Enter your email or ID"
              className="w-full px-4 py-2.5 border rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2.5 border rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2.5 border rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">-- Choose Role --</option>
              <option value="superadmin">Super Admin</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Extras */}
        <div className="flex justify-between items-center mt-5 text-sm text-gray-600">
          <a href="#" className="hover:text-blue-600">
            Forgot Password?
          </a>
          <a href="#" className="hover:text-blue-600">
            Need Help?
          </a>
        </div>
      </div>
    </div>
  );
}
