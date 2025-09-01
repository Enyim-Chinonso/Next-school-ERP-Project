import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import BootstrapClient from "./BootstrapClient";
import LenisProvider from "./components/LenisProvider";

 export const metadata = {
   title: "School ERP",
   description: "Modern ERP for schools",
 };

 export default function RootLayout({ children }) {
   return (
      <html lang="en">
       <body>
        <Navbar />
         {/* Load Bootstrap JS on the client so collapse/toggler works */}  
         <BootstrapClient />
        {/* Enable smooth scrolling across the whole app */}
        <LenisProvider>{children}</LenisProvider>
       </body>
     </html>
   );
 }


