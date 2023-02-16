import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import TitleScreen from '@/components/TitleScreen'
import { CardProcess } from '@/components/CardProcess'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{width: "100vw"}}>
      <div style={{ width: "100%", position: "absolute", top: "36%", display:"block"}}>
        <TitleScreen firstTitle={"MOONIMIZE"} secondTitle={"Collectif"} marginTop={"0"} marginBottom={"0"}
          colorFirstTitle={"white"} colorSecondTitle={"#1ACAD5"} sizeSecondTitle={"140px"} sizeFirstTitle={"120px"} textAlign={"center"} paddingLeft={"0"} />
      </div>
      <div style={{marginTop:"100vh"}}>
        <TitleScreen firstTitle={"NOS SERVICES"} secondTitle={"Ce que l'on sait faire"} marginTop={"0"} marginBottom={"0"}
          colorFirstTitle={"black"} colorSecondTitle={"#1ACAD5"} sizeSecondTitle={"50px"} sizeFirstTitle={"60px"} textAlign={""} paddingLeft={"3%"} />
        <div>
            <TitleScreen firstTitle={"PROCESS"} secondTitle={"comment ça marche ?"} marginTop={"10%"} marginBottom={"3%"}
            colorFirstTitle={"black"} colorSecondTitle={"#1ACAD5"} sizeSecondTitle={"50px"} sizeFirstTitle={"60px"} textAlign={""} paddingLeft={"3%"} />
            <CardProcess number={"001"} title={"titre"} description={"une description"} positionNumber='right'/>
            <CardProcess number={"002"} title={"titre"} description={"une description"}/>
            <CardProcess number={"003"} title={"titre"} description={"une description"} positionNumber='right'/>
            <CardProcess number={"004"} title={"titre"} description={"une description"}/>
            <CardProcess number={"005"} title={"titre"} description={"une description"} positionNumber='right'/>
            <CardProcess number={"006"} title={"titre"} description={"une description"}/>
        </div>
        
      </div>
    </div>
  )
}