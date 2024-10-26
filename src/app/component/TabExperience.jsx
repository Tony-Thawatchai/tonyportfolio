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
            <p className=" text-base sm:text-xl">Full Stack Developer</p>
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
          <TabsTrigger value="ManagingDirector" className="tabBtn grow w-full">
            <p className="text-base sm:text-xl">Managing Director</p>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sandman" className="grow md:mt-0">
          <Card>
            <CardHeader className="px-0 pt-0">
              <CardTitle>Full Stack Developer</CardTitle>
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
                    Developing the financial data software in PHP using a job
                    scheduler to efficiently gather third-party data, creating
                    Restful API endpoint, and building a module to display those
                    data, resulting in a $1800/year reduction in API cost.
                  </li>
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Optimizing the company&apos;s proprietary real-time stock
                    price application by using CRON job to efficiently ingest
                    third-party data to 65+ MySQL databases using webhooks,
                    resulting in a 30% cost reduction and 50% page load
                    performance.
                  </li>
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Building a health check dashboard for shareholder
                    relationship automated software by consolidating separated
                    processes into a unified service, resulting in 0 client
                    complaints.
                  </li>
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Optimizing SEO for clients&apos; websites by implementing best
                    practices in meta tags and keywords and monitoring them
                    using Google Search Console, resulting in Avg. Position of
                    1.0.
                  </li>
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Developing the instant checkout, credits system, and payment
                    features for the company&apos;s new product for High-rise
                    buildings using MVC pattern and integrating Stripe API,
                    resulting in 3 new building signups with roughly 1,500
                    units.
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
                    Translated design into responsive and interactive web pages
                    using HTML, CSS, Javascript, and WordPress, resulting in 80%
                    of clients being repeat clients.
                  </li>
                  <li>
                    <FaArrowRight
                      fill="var(--secondary-color)"
                      style={{ display: "inline-block" }}
                    />{" "}
                    Client list: Zab Zaab Thai Restaurant,{" "}
                    <a
                      className="linkUnderline"
                      href="https://zabzaabthai.com"
                      target="_blank"
                    >
                      zabzaabthai.com
                    </a>{" "}
                    , Sawasdee Thai Restaurant{" "}
                    <a
                      className="linkUnderline"
                      href="https://sawasdeethairestaurant.com/"
                      target="_blank"
                    >
                      sawasdeethairestaurant.com
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
        <TabsContent value="ManagingDirector" className="grow md:mt-0">
          <Card>
            <CardHeader className="px-0 pt-0">
              <CardTitle>Managing Director</CardTitle>
              <CardDescription>
                WHY NOT Social Enterprise, Oct 2011 - Aug 2022, Bangkok,
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
                    Managed advertising campaigns with innovative,
                    efficiency-driven strategies, achieving an average profit
                    margin of 22%. 
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
