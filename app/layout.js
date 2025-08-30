import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import BootstrapClient from "./BootstrapClient";

export const metadata = {
  title: "School ERP",
  description: "Modern ERP for schools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Load Bootstrap JS on the client so collapse/toggler works */}
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
