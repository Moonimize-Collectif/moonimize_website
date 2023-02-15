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
    <div style={{ width: "100vw", minHeight: "100%" }}>
      <Moon />
      <div style={{ width: "100vw", height: "100vh", top: 0 }}>
        <div style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h2 style={{ fontSize: 154, top: "5%", color: "#1ACAD5", position: "relative" }}>Collectif</h2>
            <h1 style={{ fontSize: 154, top: "-5%", position: "relative" }}>Moonimize</h1>
        </div>
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
        <TitleScreen
          firstTitle={"MOONIMIZE"}
          secondTitle={"Collectif"}
          marginTop={"0"}
          marginBottom={"0"}
          colorFirstTitle={"white"}
          colorSecondTitle={"#1ACAD5"}
          sizeSecondTitle={"140px"}
          sizeFirstTitle={"120px"}
          textAlign={"center"}
          paddingLeft={"0"}
        />
      </div>
      {/* <div style={{ marginTop: "150%" }}>
        <TitleScreen
          firstTitle={"NOS SERVICES"}
          secondTitle={"Ce que l'on sait faire"}
          marginTop={"0"}
          marginBottom={"0"}
          colorFirstTitle={"black"}
          colorSecondTitle={"#1ACAD5"}
          sizeSecondTitle={"50px"}
          sizeFirstTitle={"60px"}
          textAlign={""}
          paddingLeft={"3%"}
        />
        <TitleScreen
          firstTitle={"NOS SERVICES"}
          secondTitle={"Ce que l'on sait faire"}
          marginTop={"0"}
          marginBottom={"0"}
          colorFirstTitle={"black"}
          colorSecondTitle={"#1ACAD5"}
          sizeSecondTitle={"50px"}
          sizeFirstTitle={"60px"}
          textAlign={""}
          paddingLeft={"3%"}
        /> */}
      </div>
    </div>
  );
}
