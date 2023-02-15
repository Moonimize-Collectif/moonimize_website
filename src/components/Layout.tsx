// components/layout.js
import { Navbar } from './Navbar';
// import Footer from './footer'
import styles from '@/styles/Layout.module.css';

export default function Layout({ children }:any) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main style={{width: "100%", height:"100%", position:"relative"}}>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}