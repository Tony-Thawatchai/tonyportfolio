"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// component
import Loader from "./component/Loader";
import Layouthome from "./layout/Layouthome";
import SectionFooter from "./component/SectionFooter";

export default function Home() {
  const [pageLoad, setpageLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setpageLoad(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return pageLoad ? (
    <Loader />
  ) : (
    <>
      <main className="flex  flex-col items-center justify-between py-16 pt-24 px-5  xl:px-8">
        {/* <Link href="/contact">contact</Link> */}
        <Layouthome />

        {/* <secion id='projects'>
     <h1  className="text-6xl font-bold text-center">projects</h1>
     </secion> */}
      </main>
      <footer>
        <SectionFooter />
      </footer>
    </>
  );
}
