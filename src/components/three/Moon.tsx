import * as Three from "three";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber";
import { UnrealBloomPass } from "three-stdlib";
import styles from "@/styles/Moon.module.css";
import { RotatingLight } from "./RotatingLight";
extend({ UnrealBloomPass });

export const Moon = () => {
  return (
    <Canvas
      style={{width: "100%",height: "100vh",position: "absolute",top: 0,left: 0,zIndex: -1}}
      camera={{
        zoom: 1,
        fov: 10,
        near: 0.01,
        far: 1000,
        position: [0, 0, -45],
      }}>
      <RotatingLight />
    </Canvas>
  );
};
