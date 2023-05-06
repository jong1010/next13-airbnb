import { Inter } from "next/font/google"

export const metadat = {
  title: "Airbnb",
  description: "Airbnb clone"
}

const font = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
