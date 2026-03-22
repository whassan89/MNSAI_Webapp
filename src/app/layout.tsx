import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MNSAI (SMC-Private) Limited | Audit, Accounting, Advisory, Tax & ERP",
  description:
    "MNSAI (SMC-Private) Limited is a professional CA firm based in Lahore offering Audit, Accounting, Advisory, Tax and ERP services.",
  keywords:
    "CA firm Lahore, audit firm Pakistan, tax advisory Lahore, accounting firm, ERP consultants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
