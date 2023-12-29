"use client";

// react
import { useContext, useEffect, useState } from "react";

// next image
import Image from "next/image";

// react scroll
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";

// svgs
// import LogoDesktop from "../../public/assets/logo desktop.svg";
// import LogoMobile from "../../public/assets/logo mobile.svg";
import Logo from "../../../public/logo/Logo.svg";

// icons
import { BiX } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
// import Dropdown from "./Dropdown";

// proposal
// import proposal from "../../public/assets/proposal/learnium_proposal.pdf";

const Navbar = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  // const [desktopMode, setDesktopMode] = useState(false);

  // const desktopMode = useMediaQuery({
  //   query: "(min-width: 1300px)",
  // });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setDesktopMode(window.innerWidth >= 1300);
  //   };
  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   // Cleanup on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      // header
      setHeader(window.scrollY > 40);
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // transition animation for header
    <header
      className={`${
        header ? " bg-inherit shadow-md py-4 " : "bg-transparent shadow-none py-4 "
        // header ? "shadow-md py-4 " : "bg-transparent shadow-none py-4 "
      } 
      fixed right-0 left-0  
      mx-auto z-20 xl:px-8 px-5
      //  'bg-white'
        transition-all duration-300`}
    >
      <div className=" mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between xl:max-w-[1300px]">
        {/* logo */}
        <div className="flex justify-between items-center">
          {/* logo */}
          {/* <Link
            to="/"
            // smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          > */}
          <Link href="/">
            <Image
              src={Logo}
              width={77}
              height={40}
              alt="logo"
              className="logo"
            />
          </Link>
          {/* </Link> */}

          {/* nav open menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <IoMdMenu className="text-4xl " />
            )}
          </div>
        </div>

        {/* nav */}
        <nav
          className={`${
            nav
              ? "max-h-max py-8 px-4 xl:py-0 xl:px-0 mt-6 "
              : "max-h-0 xl:max-h-max"
          } flex flex-col w-full  xl:w-fit
           'xl:bg-white' 
           gap-y-6 overflow-hidden font-bold bg-tertiary rounded-2xl
           xl:font-medium xl:flex-row xl:gap-x-8 xl:h-max  xl:pb-0 transition-all duration-150 text-center xl:text-left xl:items-center
           text-base xl:text-base xl:normal-case xl:mt-0 `}
        >
          <Link href={"/projects/"} className="cursor-pointer py-5 hover:bg-tertiary-hover 
            'xl:hover:bg-white'
            hover:font-bold hover:text-[var(--secondary-color)]
            transition-all duration-150 ease-in rounded-lg">Projects</Link>
          {/* <LinkScroll
            className="cursor-pointer navEl py-5 hover:bg-tertiary-hover 
            'xl:hover:bg-white'
            hover:font-bold hover:text-[var(--secondary-color)]
            transition-all duration-150 ease-in rounded-lg"
            to="projects"
            activeClass="active"
            // smooth={desktopMode}
            smooth={false}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Projects
          </LinkScroll> */}
          <LinkScroll
            className="cursor-pointer py-5 hover:bg-tertiary-hover 
            'xl:hover:bg-white'
            hover:font-bold hover:text-[var(--secondary-color)]
             transition-all duration-150 ease-in rounded-lg"
            to="aboutus"
            activeClass="active"
            // smooth={desktopMode}
            smooth={false}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Experiences
          </LinkScroll>
          <LinkScroll
            className="cursor-pointer py-5 hover:bg-tertiary-hover 
            'xl:hover:bg-white'
            hover:font-bold hover:text-[var(--secondary-color)]
             transition-all duration-150 ease-in rounded-lg"
            to="aboutus"
            activeClass="active"
            // smooth={desktopMode}
            smooth={false}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Contact
          </LinkScroll>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
