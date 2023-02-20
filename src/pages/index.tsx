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
import useScreenSize from "../hooks/useScreenSize";

export default function Home() {
    const screenWidth = useScreenSize().width;

  return (
    <div style={{ position: "relative", top: 0, width: "100%", minHeight: "100vh" }}>
      <Moon />
      <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        {screenWidth > 670 ?

        
        <TitleScreen
          firstTitle={"MOONIMIZE"}
          secondTitle={"Collectif"}
          display={"flex"}
          marginTop={"0%"}
          marginBottom={"0%"}
          colorFirstTitle={"white"}
          colorSecondTitle={"#1ACAD5"}
          sizeSecondTitle={"140px"}
          sizeFirstTitle={"120px"}
          textAlign={"center"}
          paddingLeft={"0"}
        />
        :
        <TitleScreen
          firstTitle={"MOONIMIZE"}
          secondTitle={"Collectif"}
          display={"flex"}
          marginTop={"0%"}
          marginBottom={"0%"}
          colorFirstTitle={"white"}
          colorSecondTitle={"#1ACAD5"}
          sizeSecondTitle={"110px"}
          sizeFirstTitle={"88px"}
          textAlign={"center"}
          paddingLeft={"0"}
          />
        }
      </div>
      <div style={{ backgroundColor: "#2d2d2d", display: "flex", height: "200vh", flexDirection: "column" }}>
        <TitleScreen  firstTitle={"PROCESS"}
          secondTitle={"Comment ça marche ?"}
          display={"block"}
          marginTop={"0%"}
          marginBottom={"0%"}
          colorFirstTitle={"white"}
          colorSecondTitle={"#1ACAD5"}
          sizeSecondTitle={"46px"}
          sizeFirstTitle={"44px"}
          textAlign={""}
          paddingLeft={"8%"}/>
        <CardProcess number={"001"} title={"Découverte"} description={"Nous nous entretenons avec vous afin de comprendre vos enjeux et vos besoins."} positionNumber={"right"}/>
        <LightComponent position={'right'}/>
        <CardProcess number={"002"} title={"Analyse"} description={"Nous étudions votre projet et définissons les technos les plus appropriées pour le réaliser."} positionNumber={"left"}/>
        <LightComponent position={'left'}/>
        <CardProcess number={"003"} title={"Maquettage"} description={"Dans le cas où vous n’avez pas de maquette à fournir, notre designer peut se charger de mettre en forme vos idées."} positionNumber={"right"}/>
        <LightComponent position={'right'}/>
        <CardProcess number={"004"} title={"Plannification"} description={"Nous découpons le projet en plusieurs sous projet pour les intégrer au sein d’un calendrier qui sera partagé au client."} positionNumber={"left"}/>
        <LightComponent position={'left'}/>
        <CardProcess number={"005"} title={"Développement"} description={"Dans le cas où vous n’avez pas de maquette à fournir, notre designer peut se charger de mettre en forme vos idées."} positionNumber={"right"}/>
        <LightComponent position={'right'}/>
        <CardProcess number={"006"} title={"Livraison"} description={"Nous découpons le projet en plusieurs sous projet pour les intégrer au sein d’un calendrier qui sera partagé au client."} positionNumber={"left"}/>
      </div>
    </div>
  );
}