import Image from "next/image";
import {Navbar} from "@/app/components/"

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex  flex-col items-center p-24">
      <span className="text-5xl">Home</span>
    </main>
    </>
  );
}
