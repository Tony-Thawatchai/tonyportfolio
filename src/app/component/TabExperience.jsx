import React from "react";

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
                  Maintaining the client&apos;s website by responding to tickets in a
                  timely manner.
                </li>
                <li>
                  <FaArrowRight
                    fill="var(--secondary-color)"
                    style={{ display: "inline-block" }}
                  />{" "}
                  Creating new websites with custom features based on new
                  clients&apos; requirements.
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
              Langara College, May 2023 - Jan 2024, Vancouver, BC
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
                  Examining assignments from 51 web development students per
                  week in WordPress, Java, Advance Javascript courses by
                  comparing student work with grading criteria, providing
                  feedback on how they can improve, resulting in 100% on-time
                  submission.
                </li>
                <li>
                  <FaArrowRight
                    fill="var(--secondary-color)"
                    style={{ display: "inline-block" }}
                  />{" "}
                  rganizing workshops about Arduino weekly by researching the
                  topic, writing code, and facilitating the event, resulting in
                  100% event capacity.
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
                  Interview users about their business needs and design a great
                  user experience website, resulting in 80% of the clients being
                  repeat clients.
                </li>
                <li>
                  <FaArrowRight
                    fill="var(--secondary-color)"
                    style={{ display: "inline-block" }}
                  />{" "}
                  Create and customize a WordPress theme to deliver a beautiful,
                  responsive website, resulting in 100% client satisfaction.
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
            Fair Finance Thailand Organization, Contract Part-time, Bangkok, Thailand
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1 text-xl">
              <ul className="flex flex-col gap-2">
                <li>
                  <FaArrowRight
                    fill="var(--secondary-color)"
                    style={{ display: "inline-block" }}
                  /> Supervised a web application project for a Thai bank&apos;s COVID-19 relief policy calculator by interviewing users to create user flow, designing a UX wireframe, and collaborating between the bank and developer, resulting in a successful launch within just 4 weeks timeline.
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
  );
}

export default TabExperience;
