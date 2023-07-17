import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Show-Cars",
  description: "Get Access to World Best Collections",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
