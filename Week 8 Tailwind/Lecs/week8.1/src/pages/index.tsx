import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCards from "@/components/VideoCards";
import VideoGrid from "@/components/VideoGrid";
import Appbar from "@/components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <Appbar></Appbar>
    <VideoGrid></VideoGrid>
   </div>
  );
}
