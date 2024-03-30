import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants.js";

// TABS
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaArrowRight } from "react-icons/fa";

function TabExperience() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Tabs
        defaultValue="sandman"
        className="w-full bg-background flex flex-col gap-4 sm:flex-row "
      >
        <TabsList className=" sm:basis-1/4 items-start justify-between   sm:flex-col tabList shrink-0 ">
          <TabsTrigger value="sandman" className="tabBtn grow w-full">
            <p className=" text-base sm:text-xl">Web Developer</p>
          </TabsTrigger>
          <TabsTrigger value="Teacher Assistant" className="tabBtn grow w-full">
            <p className="text-base sm:text-xl">Teacher Assistant</p>
          </TabsTrigger>
          <TabsTrigger value="Freelance" className="tabBtn grow w-full">
            <p className="text-base sm:text-xl ">Freelance Developer</p>
          </TabsTrigger>
          <TabsTrigger value="ProjectManager" className="tabBtn grow w-full">
            <p className="text-base sm:text-xl">Project Manager</p>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sandman" className="grow md:mt-0">
          <Card>
            <CardHeader className="px-0 pt-0">
              <CardTitle>Web Developer</CardTitle>
              <CardDescription>
                Sandman Media Inc., Jan 2024 - current, Vancouver, BC
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1 text-xl ">
                <ul className="flex flex-col gap-2">
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Optimize the company&apos;s proprietary applications to
                    improve database traffic, API cost, and loading performance
                    by at least 30%, 50%, and 50%.
                  </li>
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Developing and maintaining 10 PHP applications used within
                    the content management system that save company costs by
                    $2,500/year and reduce application error by at least 25%.
                  </li>
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Overseeing the database upgrading for 50+ websites.
                  </li>
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Maintaining the client&apos;s website by responding to
                    tickets within the 8-hour timeline.
                  </li>
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Developing instant exchange, credits, and payment features
                    for Parking.Exchange, a company&apos;s new product for
                    High-rise buildings, resulted in 3 new building signups with
                    roughly 1,500 users.
                  </li>
                </ul>
              </div>
            </CardContent>
            {/* <CardFooter>
              <Button>Save changes</Button>
            </CardFooter> */}
          </Card>
        </TabsContent>
        <TabsContent value="Teacher Assistant" className="grow md:mt-0">
          <Card>
            <CardHeader className="px-0 pt-0">
              <CardTitle>Teacher Assistant</CardTitle>
              <CardDescription>
                Langara College, May 2023 - Dec 2023, Vancouver, BC
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 ">
              <div className="space-y-1 text-xl">
                <ul className="flex flex-col gap-2">
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Examined assignments from 51 web development students per
                    week in WordPress, Java, and Advanced Javascript courses by
                    grading student work and providing feedback.
                  </li>
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Organized weekly Arduino workshops by researching ideas for
                    projects, writing C++ code, and facilitating the event,
                    resulting in 100% event capacity.
                  </li>
                </ul>
              </div>
            </CardContent>
            {/* <CardFooter>
              <Button>Save password</Button>
            </CardFooter> */}
          </Card>
        </TabsContent>
        <TabsContent value="Freelance" className="grow md:mt-0">
          <Card>
            <CardHeader className="px-0 pt-0">
              <CardTitle>Web Developer</CardTitle>
              <CardDescription>
                Freelance, Apr 2020 - Dec 2023, Vancouver, BC
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1 text-xl">
                <ul className="flex flex-col gap-2">
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Created and customized a WordPress theme to deliver a
                    beautiful, responsive website, resulting in 80% of clients
                    being repeat clients.
                  </li>
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Client list: WHAT IF - Event organizer company,{" "}
                    <a
                      className="linkUnderline"
                      href="https://www.whatif.co.th"
                    >
                      www.whatif.co.th
                    </a>{" "}
                    , Social Enterprise Thailand Association{" "}
                    <a
                      className="linkUnderline"
                      href="https://www.sethailand.org"
                    >
                      www.sethailand.org
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
            {/* <CardFooter>
              <Button>Save changes</Button>
            </CardFooter> */}
          </Card>
        </TabsContent>
        <TabsContent value="ProjectManager" className="grow md:mt-0">
          <Card>
            <CardHeader className="px-0 pt-0">
              <CardTitle>Project Manager</CardTitle>
              <CardDescription>
                Fair Finance Thailand Organization, Contract Part-time, Bangkok,
                Thailand
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1 text-xl">
                <ul className="flex flex-col gap-2">
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Supervised a web application project for a Thai bank&apos;s
                    COVID-19 relief policy calculator by interviewing users to
                    create user flow, designing a UX wireframe, and
                    collaborating between the bank and developer, resulting in a
                    successful launch within just 4 weeks timeline.
                  </li>
                </ul>
              </div>
            </CardContent>
            {/* <CardFooter>
              <Button>Save password</Button>
            </CardFooter> */}
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

export default TabExperience;
