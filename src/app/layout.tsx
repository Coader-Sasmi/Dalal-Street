import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEBI Registered Research Recommendations | Dalal Street",
  description: "Stay informed with SEBI Registered Research Recommendations from Dalal Street to make smarter investment decisions with confidence.Transform your business with Netsqure. We are your trusted partner in navigating the digital landscape, offering expert guidance and exceptional services to help you thrive in the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className="overflow-x-hidden">
      <body className="">
        <Header />
        <main className="overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
