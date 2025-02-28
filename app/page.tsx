import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puertas blindadas",
  description: "This is Home for Puertas blindadas",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />

      <AboutSectionOne />
      <AboutSectionTwo />

      <Blog />
      <Contact />
    </>
  );
}
