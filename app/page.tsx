import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Popularresort from "./components/Popularresort";
import Expereince from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Popularresort />
      <Expereince />
    
    </>
  );
}
