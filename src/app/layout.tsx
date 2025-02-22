import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <Header/>
          <main className="flex-1 pt-20">{children}</main>
          <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
