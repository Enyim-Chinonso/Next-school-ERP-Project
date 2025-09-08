// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import BootstrapClient from "./BootstrapClient";
// import LenisProvider from "./components/LenisProvider";

//  export const metadata = {
//    title: "School ERP",
//    description: "Modern ERP for schools",
//  };

//  export default function RootLayout({ children }) {
//    return (
//       <html lang="en" data-scroll-behavior="smooth">
//        <body>
//         <Navbar />
//          {/* Load Bootstrap JS on the client so collapse/toggler works */}  
//          <BootstrapClient />
//         {/* Enable smooth scrolling across the whole app */}
//         <LenisProvider>{children}</LenisProvider>
//        </body>
//      </html>
//    );
//  }




// app/layout.js
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./globals.css";

// import Navbar from "./components/Navbar";
// import ClientProviders from "./components/ClientProviders";

// export const metadata = {
//   title: "School ERP",
//   description: "Modern ERP for schools",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         {/* Top Navbar (server-safe) */}
//         <Navbar />
//         {/* <BootstrapClient /> */}


//         {/* All client-side only features (Bootstrap JS, Lenis, GSAP) */}
//         <ClientProviders>{children}</ClientProviders>
//       </body>
//     </html>
//   );
// }




// app/layout.js
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css"; // 
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import ClientProviders from "./components/ClientProviders";

// export const metadata = {
//   title: "School ERP",
//   description: "Modern ERP for schools",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" data-scroll-behavior="smooth">
//       <body>
//         <Navbar />
//         {/* ✅ All client-side only code goes inside ClientProviders */}
//         <ClientProviders>{children}</ClientProviders>
//       </body>
//     </html>
//   );
// }


// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/css/bootstrap.min.css"; // ✅ CSS only
// import "./globals.css";

// import Navbar from "./components/Navbar";
// import ClientProviders from "./components/ClientProviders";
// import BootstrapClient from "./components/BootstrapClient"; // our safe loader

// export const metadata = {
//   title: "School ERP",
//   description: "Modern ERP for schools",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" data-scroll-behavior="smooth">
//       <body>
//         <Navbar />
//         {/* ✅ Only loads on the client */}
//         <BootstrapClient />
//         <ClientProviders>{children}</ClientProviders>
//       </body>
//     </html>
//   );
// }


import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ CSS only
import "./globals.css";

import Navbar from "./components/Navbar";
import ClientProviders from "./components/ClientProviders";
import BootstrapClient from "./BootstrapClient"; // ✅ now it will be found

export const metadata = {
  title: "School ERP",
  description: "Modern ERP for schools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        {/* ✅ Bootstrap JS loads only in the browser */}
        <BootstrapClient />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
