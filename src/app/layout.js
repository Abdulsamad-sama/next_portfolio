import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "./../components/sessionProvider/authprovider";

const roboto = Roboto({ subsets: ["latin"] });

//#53c2ab
export const metadata = {
  title: "Abdulsamad",
  description: "hamzat abdulsamad eniola portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-screen ${roboto.className}`}>
        <ThemeProvider>
          <AuthProvider>
            <div className=" px-[2rem] flex justify-between flex-col min-h-screen max-w-[1366px]">
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
