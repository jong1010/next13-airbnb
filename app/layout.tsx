import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar"
import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen title="Test" actionLabel="Submit" />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
