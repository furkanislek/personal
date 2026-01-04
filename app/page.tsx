import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import Timeline from "@/components/Timeline";

export default function Page() {
  return (
    <div className="scroll-smooth px-8 xl:px-[15%] 2xl:px-[20%]">
      <Navbar />
      <main className="w-full">
        <Home />
        <Timeline />
        <Projects />
        <Contacts />
      </main>
    </div>
  );
}
