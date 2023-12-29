import React from 'react'

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
    <Tabs defaultValue="sandman" className="w-full bg-background flex flex-col gap-4 sm:flex-row">
        <TabsList className=" sm:basis-1/4 items-start justify-between h-full  sm:flex-col tabList ">
          <TabsTrigger value="sandman" className="tabBtn grow w-full">
            <p className=' text-base sm:text-xl'>Web Developer</p> 
          </TabsTrigger>
          <TabsTrigger value="Teacher Assistant" className="tabBtn grow w-full">
           <p className='text-base sm:text-xl'>Teacher Assistant</p>
          </TabsTrigger>
          <TabsTrigger value="Freelance" className="tabBtn grow w-full">
            <p className='text-base sm:text-xl '>Freelance Developer</p> 
          </TabsTrigger>
          <TabsTrigger value="ProjectManager" className="tabBtn grow w-full">
           <p className='text-base sm:text-xl'>Project Manager</p>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sandman" className="grow md:mt-0">
          <Card>
          <CardHeader className="px-0 pt-0">
              <CardTitle>Web Developer</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1 text-xl ">
              <ul className='flex flex-col gap-2'>
                    <li><FaArrowRight fill='var(--secondary-color)' style={{display:'inline-block'}}/> a;sdfj</li>
                    <li><FaArrowRight fill='var(--secondary-color)' style={{display:'inline-block'}}/> a;sdfj</li>
                    <li><FaArrowRight fill='var(--secondary-color)' style={{display:'inline-block'}}/> a;sdfj</li>

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
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 ">
              <div className="space-y-1 text-xl">
              <ul className='flex flex-col gap-2'>
                    <li><FaArrowRight fill='var(--secondary-color)' style={{display:'inline-block'}}/> a;sdfj</li>
                    <li><FaArrowRight fill='var(--secondary-color)' style={{display:'inline-block'}}/> a;sdfj</li>
                    <li><FaArrowRight fill='var(--secondary-color)' style={{display:'inline-block'}}/> a;sdfj</li>

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
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1 text-xl">
              <ul className='flex flex-col gap-2'>
                    <li><FaArrowRight fill='var(--secondary-color)' style={{display:'inline-block'}}/> a;sdfj</li>
                    <li><FaArrowRight fill='var(--secondary-color)' style={{display:'inline-block'}}/> a;sdfj</li>
                    <li><FaArrowRight fill='var(--secondary-color)' style={{display:'inline-block'}}/> a;sdfj</li>

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
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1 text-xl">
              <ul className='flex flex-col gap-2'>
                    <li><FaArrowRight fill='var(--secondary-color)' style={{display:'inline-block'}}/> a;sdfj</li>
                    <li><FaArrowRight fill='var(--secondary-color)' style={{display:'inline-block'}}/> a;sdfj</li>
                    <li><FaArrowRight fill='var(--secondary-color)' style={{display:'inline-block'}}/> a;sdfj</li>

                </ul>
              </div>
              
            </CardContent>
            {/* <CardFooter>
              <Button>Save password</Button>
            </CardFooter> */}
          </Card>
        </TabsContent>
      </Tabs>
  )
}

export default TabExperience
