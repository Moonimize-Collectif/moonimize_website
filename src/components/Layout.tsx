// components/layout.js
import { Navbar } from './Navbar';
import styles from '@/styles/Layout.module.css';
import {BackgroundLine} from '@/components/BackgroundLine'
import {Footer} from "@/components/Footer";
import {ThreeBackground} from "@/pages/three/BackgroundThreeJS";

export default function Layout({ children }:any) {
  return (
    
    <div className={styles.layout}>
        <ThreeBackground/>
        <BackgroundLine></BackgroundLine>
      <Navbar />
      <main style={{width: "100%", height:"100%", position: "relative"}} >{children}</main>
    </div>
  )
}