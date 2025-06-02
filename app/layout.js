import { Inika, Montserrat } from "next/font/google";
import "./globals.css";

const inika = Inika({
  variable: "--font-inika",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Carachalet Corse : Hébergement atypique entre mer et montagne",
  description: "Logement insolite pour de superbes vacances en haute-corse ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inika.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
