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
      className={`${header ? "headerOn" : "headerOff"} ${nav ? "navOn " : ""} `}
    >
      <div className=" mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between xl:max-w-[1300px]">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            onClick={() => {
              setNav(false);
            }}
          >
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
          className={`mainNav ${
            nav
              ? "max-h-max py-8 px-4 xl:py-0 xl:px-0 mt-6 bg-[--background]"
              : "max-h-0 xl:max-h-max"
          } flex flex-col w-full  xl:w-fit
           'xl:bg-white' 
           gap-y-6 overflow-hidden font-bold bg-tertiary rounded-2xl
           xl:font-medium xl:flex-row xl:gap-x-8 xl:h-max  xl:pb-0 transition-all duration-150 text-center xl:text-left xl:items-center
           text-base xl:text-base xl:normal-case xl:mt-0 `}
        >
          <Link href={"/projects/"} onClick={()=>{setNav(!nav)}} className="cursor-pointer py-5 hover:bg-tertiary-hover 
            'xl:hover:bg-white'
            hover:font-bold hover:text-[var(--secondary-color)]
            transition-all duration-150 ease-in rounded-lg">Projects</Link>
          {/* <LinkScroll
            className="cursor-pointer py-5 hover:bg-tertiary-hover 
            'xl:hover:bg-white'
            hover:font-bold hover:text-[var(--secondary-color)]
             transition-all duration-150 ease-in rounded-lg"
            to="projects"
            activeClass="active"
            smooth={false}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Projects
          </LinkScroll> */}
          <Link
             href={`/experiences`}
            onClick={() => {
              setNav(!nav);
            }}
            className="cursor-pointer py-5 hover:bg-tertiary-hover 
            'xl:hover:bg-white'
            hover:font-bold hover:text-[var(--secondary-color)]
            transition-all duration-150 ease-in rounded-lg"
          >
            Experiences
          </Link>
          {/* <LinkScroll
            className="cursor-pointer py-5 hover:bg-tertiary-hover 
            'xl:hover:bg-white'
            hover:font-bold hover:text-[var(--secondary-color)]
             transition-all duration-150 ease-in rounded-lg"
            to="experiences"
            activeClass="active"
            smooth={false}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Experiences
          </LinkScroll> */}
          {/* <LinkScroll
            className="cursor-pointer py-5 hover:bg-tertiary-hover 
            'xl:hover:bg-white'
            hover:font-bold hover:text-[var(--secondary-color)]
             transition-all duration-150 ease-in rounded-lg"
            to="connect"
            activeClass="active"
            // smooth={desktopMode}
            smooth={false}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Connect
          </LinkScroll> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
