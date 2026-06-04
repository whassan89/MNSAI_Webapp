import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mnsai.com"),
  title: "MNSAI (SMC-Private) Limited | Virtual CFO · Financial Modeling · IFRS Advisory · Tax Consulting",
  description:
    "MNSAI is a specialist CA advisory firm delivering Virtual CFO services, Financial Modeling, IFRS Advisory, and Tax & Business Consulting to businesses across Pakistan and beyond.",
  keywords:
    "Virtual CFO Pakistan, financial modeling Pakistan, IFRS advisory Pakistan, tax consulting Pakistan, CA firm Pakistan, business consulting Pakistan, financial modeling firm, IFRS reporting Pakistan",
  openGraph: {
    type: "website",
    url: "https://mnsai.com",
    siteName: "MNSAI (SMC-Private) Limited",
    title: "MNSAI (SMC-Private) Limited | Virtual CFO · IFRS Advisory · Financial Modeling",
    description:
      "Specialist CA advisory firm based in Pakistan — Virtual CFO, Financial Modeling, IFRS Advisory, and Tax Consulting for businesses across Pakistan and UAE.",
    images: [
      {
        url: "/images/mnsai-GREEN.png",
        width: 3151,
        height: 1175,
        alt: "MNSAI (SMC-Private) Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MNSAI (SMC-Private) Limited | Virtual CFO · IFRS Advisory · Financial Modeling",
    description:
      "Specialist CA advisory firm based in Pakistan — Virtual CFO, Financial Modeling, IFRS Advisory, and Tax Consulting for businesses across Pakistan and UAE.",
    images: ["/images/mnsai-GREEN.png"],
  },
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
