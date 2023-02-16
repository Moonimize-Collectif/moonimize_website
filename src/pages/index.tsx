import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import TitleScreen from "@/components/TitleScreen";
import { Moon } from "@/components/three/Moon";
import { relative } from "path";
import { CardProcess } from "@/components/CardProcess";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{ position: "relative", top: 0, width: "100%", minHeight: "100vh" }}>
      <Moon />
        <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <TitleScreen
            firstTitle={"MOONIMIZE"}
            secondTitle={"Collectif"}
            marginTop={"0"}
            marginBottom={"0%"}
            colorFirstTitle={"white"}
            colorSecondTitle={"#1ACAD5"}
            sizeSecondTitle={"140px"}
            sizeFirstTitle={"120px"}
            textAlign={"center"}
            paddingLeft={"0"}
            />
        </div>
        <div>
            <CardProcess number={"001"} title={""} description={""} positionNumber={"right"} />
            <CardProcess number={"002"} title={""} description={""} positionNumber={""} />
            <CardProcess number={"003"} title={""} description={""} positionNumber={"right"} />
            <CardProcess number={"004"} title={""} description={""} positionNumber={""} />
            <CardProcess number={"005"} title={""} description={""} positionNumber={"right"} />
            <CardProcess number={"006"} title={""} description={""} positionNumber={""} />
        </div>
        
    </div>
  );
}
