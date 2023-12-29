// import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700", "900"],
// });

export const metadata = {
  title: "Tony Saengthamchai",
  description:
    "Tony Saengthamchai Full Stack Developer based in Vancouver, Canada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      // className={roboto.className}
// className="dark"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
