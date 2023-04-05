import * as Three from "three";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber";
import { UnrealBloomPass } from "three-stdlib";
import styles from "@/styles/Moon.module.css";
import { RotatingLight } from "./RotatingLight";
extend({ UnrealBloomPass });

function handleScrollChange(event) {
  const canvas = document.querySelector("canvas");
  const scroll = event.target.scrollTop;
  console.log(scroll);
  const zoom = 1 + scroll / 1000;
  canvas.style.transform = `scale(${zoom})`;
}


export const Moon = () => {
  return (
    <Canvas onScroll={handleScrollChange} style={{width: "100%",height: "100vh",position: "absolute",top: 0,left: 0,zIndex: -1}} camera={{ zoom: 1, fov: 10,near: 0.01, far: 1000, position: [0, 0, -45]}}>
      <RotatingLight isRotating={true}/>
    </Canvas>
  );
};
