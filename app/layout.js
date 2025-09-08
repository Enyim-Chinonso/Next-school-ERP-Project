import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ CSS only
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
