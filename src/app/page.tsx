import Image from "next/image";
import Header from "@/app/components/Header"
import Sidebar from "@/app/components/SideBar"
import HomePage from "@/app/components/Home"
import Footer from "@/app/components/Footer"
export default function Home() {
  return (
    <>
    <div className="w-full h-full flex justify-center items-center flex-col">
      <Header />
      <div className="flex justify-center items-start w-full">
        <Sidebar />
        <HomePage />
      </div>
      <Footer />
    </div>
    </>
  );
}
