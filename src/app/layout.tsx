import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MNSAI (SMC-Private) Limited | Virtual CFO · Financial Modeling · IFRS Advisory · Tax Consulting",
  description:
    "MNSAI is a specialist CA advisory firm in Lahore delivering Virtual CFO services, Financial Modeling, IFRS Advisory, and Tax & Business Consulting to businesses across Pakistan.",
  keywords:
    "Virtual CFO Pakistan, financial modeling Lahore, IFRS advisory Pakistan, tax consulting Lahore, CA firm Pakistan, business consulting Lahore, financial modeling firm, IFRS reporting Pakistan",
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
        <main className="pt-20 md:pt-[132px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
