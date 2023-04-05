import * as Three from "three";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber";
import { UnrealBloomPass } from "three-stdlib";
import { Moon } from "./Moon";
import RotatingLight from "./RotatingLight";

extend({ UnrealBloomPass });

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


const Sphere = ({ position }) => {
  const meshRef = useRef();
  const angleRef = useRef(0);
  const angleRefY = useRef(0);
  const angleRefZ = useRef(0);
  const radius = 5;
  const height = 50;
  const speed = 0.01;
  const [shouldChangeY, setShouldChangeY] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (event) => {
    setMouse({ x: event.clientX, y: event.clientY });
  };

  useFrame(async ({ camera }, delta, state) => {
    const obj = meshRef.current;

    // faire tourner la sphère autour de l'axe vertical
    let x = radius * Math.cos(angleRef.current);
    let y = (-height / (2 * Math.PI)) * angleRefY.current;
    let z = radius * Math.sin(angleRef.current);
    if (shouldChangeY) {
      angleRefY.current = -0.5;
      setShouldChangeY(false);
    }
    //console.log("z : ",z ,"y : ",y, "", "x : ",x)
    obj.position.x = x
    obj.position.y = y
    //obj.position.z = z - 10
    if (obj.position.y < -5) {
      setShouldChangeY(true);
    }
    //console.log("z : ",obj.position.z ,"y : ",obj.position.y, "", "x : ",obj.position.x)
    angleRef.current += 0.004;
    angleRefY.current += 0.001;
    angleRefZ.current += 0.001;
    // déplacer la sphère vers le bas lentement
    //await sleep(1000)
    // Vérifier si la sphère est hors écran
  });

  return (
    <mesh position={position} ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="white" opacity={1} toneMapped={false} />
    </mesh>
  );
};

function calculateMousePosition(isMouseDown, mouse, camera, meshRef) {
  if (isMouseDown) {
    const mesh = meshRef.current;

    const raycaster = new Three.Raycaster();
    const mouseVector = new Three.Vector2(
      (mouse.x / window.innerWidth) * 2 - 1,
      -(mouse.y / window.innerHeight) * 2 + 1
    );
    raycaster.setFromCamera(mouseVector, camera);

    const intersects = raycaster.intersectObjects([mesh]);

    if (intersects.length > 0) {
      mesh.position.x = intersects[0].point.x;
      mesh.position.y = intersects[0].point.y;
      //mesh.position.z = intersects[0].point.z;
    }
  }
}

export const Services = ({ }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [currentYPosition, setCurrentYPosition] = useState(0);

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return { width, height };
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    function handleScroll() {
      setCurrentYPosition(window.scrollY);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    setWindowDimensions(getWindowDimensions());

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("currentYPosition : ", currentYPosition);
  }, [currentYPosition]);

  return (
    <Canvas style={{ width: "100%", height: "100vh", position: "absolute", top: 0, left: 0, zIndex: -1 }} camera={{ zoom: 1, fov: 10, near: 0.01, far: 1000, position: [0, 0, -45] }}>
      <Sphere position={[1, 0, 0]} />
      {/*       <RotatingLight isRotating={true} />
 */}    </Canvas>
  );
};