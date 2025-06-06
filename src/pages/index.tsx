import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import TitleScreen from "@/components/TitleScreen";
import { CardProcess } from "@/components/CardProcess";
import { LightComponent } from "@/components/LightComponent";
import { Moon } from "@/components/three/Moon";
import { relative } from "path";
const inter = Inter({ subsets: ["latin"] });
// hook size screen
import useScreenSize from "../hooks/useScreenSize";
import { useEffect, useState } from "react";
import { MoonimizeCardProject, MoonimizeContainerProject } from "@/components/MoonimizeCardProject";
import { MoonimizeContainerService } from "@/components/MoonimizeCardService";

export default function Home() {
  const screenWidth = useScreenSize().width;
  const [firstTitleSize, setFirstTitleSize] = useState("0px")
  const [secondTitileSize, setSecondTitleSize] = useState("0px")

  useEffect(() => {
    if (screenWidth > 670) {
      setFirstTitleSize("110px")
      setSecondTitleSize("140px")
    } else {
      setFirstTitleSize("4rem")
      setSecondTitleSize("4rem")
    }
  });


  return (
    <div style={{ position: "relative", top: 0, width: "100%", minHeight: "100vh" }}>
      <Moon />
      <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <TitleScreen
          firstTitle={"MOONIMIZE"}
          secondTitle={"Collectif"}
          display={"flex"}
          marginTop={"0%"}
          marginBottom={"0%"}
          colorFirstTitle={"white"}
          colorSecondTitle={"#1ACAD5"}
          customSize={true}
          sizeSecondTitle={secondTitileSize}
          sizeFirstTitle={firstTitleSize}
          textAlign={"center"}
          paddingLeft={"0"}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", height: "auto", paddingTop: "20px", paddingBottom: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", height: "14vh" }}>
          <TitleScreen firstTitle={"SERVICES"}
            secondTitle={"Ce que l'on sait faire"}
            display={"block"}
            marginTop={"0%"}
            marginBottom={"0%"}
            colorFirstTitle={"white"}
            colorSecondTitle={"#1ACAD5"}
            textAlign={""}
            paddingLeft={"8%"}
          />
        </div>
        <MoonimizeContainerService />
      </div>
      <div className={styles.divServices}>
        <div className={styles.divProcess}>
          <div style={{ display: "flex", flexDirection: "column", height: "20vh" }}>
            <TitleScreen firstTitle={"PROCESS"}
              secondTitle={"Comment ça marche ?"}
              display={"block"}
              marginTop={"0%"}
              marginBottom={"0%"}
              colorFirstTitle={"white"}
              colorSecondTitle={"#1ACAD5"}
              textAlign={""}
              paddingLeft={"8%"}
            />
          </div>
          <CardProcess number={"001"} title={"Découverte"} description={"Nous nous entretenons avec vous afin de comprendre vos enjeux et vos besoins."} positionNumber={"right"} />
          <LightComponent position={'right'} />
          <CardProcess number={"002"} title={"Analyse"} description={"Nous étudions votre projet et définissons les technos les plus appropriées pour le réaliser."} positionNumber={"left"} />
          <LightComponent position={'left'} />
          <CardProcess number={"003"} title={"Maquettage"} description={"Dans le cas où vous n’avez pas de maquette à fournir, notre designer peut se charger de mettre en forme vos idées."} positionNumber={"right"} />
          <LightComponent position={'right'} />
          <CardProcess number={"004"} title={"Plannification"} description={"Nous découpons le projet en plusieurs sous projet pour les intégrer au sein d’un calendrier qui sera partagé au client."} positionNumber={"left"} />
          <LightComponent position={'left'} />
          <CardProcess number={"005"} title={"Développement"} description={"Dans le cas où vous n’avez pas de maquette à fournir, notre designer peut se charger de mettre en forme vos idées."} positionNumber={"right"} />
          <LightComponent position={'right'} />
          <CardProcess number={"006"} title={"Livraison"} description={"Nous découpons le projet en plusieurs sous projet pour les intégrer au sein d’un calendrier qui sera partagé au client."} positionNumber={"left"} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", height: "auto", paddingTop: "50px", paddingBottom: "50px" }}>
        <div style={{ display: "flex", flexDirection: "column", height: "14vh" }}>
          <TitleScreen firstTitle={"RÉALISATION"}
            secondTitle={"Nos étoiles"}
            display={"block"}
            marginTop={"0%"}
            marginBottom={"0%"}
            colorFirstTitle={"white"}
            colorSecondTitle={"#1ACAD5"}
            textAlign={""}
            paddingLeft={"8%"}
          />
        </div>
        <MoonimizeContainerProject />
      </div>
    </div>
  );
}