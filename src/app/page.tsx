import Image from "next/image";
import Header from "@/app/components/Header"
import Sidebar from "@/app/components/SideBar"
import HomePage from "@/app/components/Home"
export default function Home() {
  return (
    <>
    <div className="w-full h-full overflow-hidden flex justify-center items-center flex-col">
      <Header />
      <div className="flex justify-center items-center w-full h-full">
        <Sidebar />
        <HomePage />
      </div>
    </div>
    </>
  );
}
