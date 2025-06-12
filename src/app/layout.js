import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "./../components/sessionProvider/authprovider";

const roboto = Roboto({ subsets: ["latin"] });

//#53c2ab
export const metadata = {
  title: "Abdulsamad Hamzat | Software Engineer & Web Developer",
  description:
    "Software engineer specializing in building modern web apps with React, Node.js, and Python. View my projects and get in touch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-screen ${roboto.className}`}>
        <ThemeProvider>
          <AuthProvider>
            <div className="px-7 flex justify-between flex-col min-h-screen mx-auto max-w-9xl">
              <Header />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
