import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export const metadata = {
  title: "Tony Saengthamchai",
  description:
    "Tony Saengthamchai Full Stack Developer based in Vancouver, Canada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
