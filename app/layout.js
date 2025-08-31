import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import BootstrapClient from "./BootstrapClient";

 export const metadata = {
   title: "School ERP",
   description: "Modern ERP for schools",
 };

 export default function RootLayout({ children }) {
   return (
     <html lang="en"  data-scroll-behavior="smooth">
       <body>
        <Navbar />
         {/* Load Bootstrap JS on the client so collapse/toggler works */}  
         <BootstrapClient />
         {children}
       </body>
     </html>
   );
 }


// import "bootstrap/dist/css/bootstrap.min.css";
// import "./globals.css";
// import BootstrapClient from "./BootstrapClient";
// import Navbar from "./components/Navbar";

// export const metadata = {
//   title: "Next.js School ERP",
//   description: "School ERP system built with Next.js and Bootstrap",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <main>{children}</main>
//         <BootstrapClient />
//       </body>
//     </html>
//   );
// }
