import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Molly Raik | Full-Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Full-stack developer portfolio for Molly Raik"
        />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
