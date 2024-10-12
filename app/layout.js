import localFont from "next/font/local";
import "bootstrap-material-design/dist/css/bootstrap-material-design.css";

import TopNav from '@/components/TopNav';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
