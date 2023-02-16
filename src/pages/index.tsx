import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import TitleScreen from "@/components/TitleScreen";
import { Moon } from "@/components/three/Moon";
import { relative } from "path";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{ position: "relative", top: 0, width: "100%", minHeight: "100vh" }}>
      <Moon />
      <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <TitleScreen
          firstTitle={"MOONIMIZE"}
          secondTitle={"Collectif"}
          marginTop={"20%"}
          marginBottom={"0%"}
          colorFirstTitle={"white"}
          colorSecondTitle={"#1ACAD5"}
          sizeSecondTitle={"140px"}
          sizeFirstTitle={"120px"}
          textAlign={"center"}
          paddingLeft={"0"}
        />
      </div>
      <div style={{ backgroundColor: "#2d2d2d" }}>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
        <h2>Bonjour</h2>
      </div>
    </div>
  );
}
