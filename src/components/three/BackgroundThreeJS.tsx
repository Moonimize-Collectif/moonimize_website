import * as Three from "three"
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber'
import { Effects } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import { StarComponent } from './Star'
import styles from '@/styles/BackgroundThreeJS.module.css'
extend({ UnrealBloomPass })


function Box(props: any) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function randomCoordinates() {
  let z = Math.floor(Math.random() * (200 - 10 + 1) + 100)
  //let x = Math.floor(Math.random() * 60) + -30
  //let x = Math.random() >= 0.5 ? Math.random() * (-(8.1 + (z * 0.158)) - (0 + (z * 0.158)) + 1) + (0 + (z * 0.158)) : Math.random() * ((8.1 + (z * 0.158)) - (0 + (z * 0.158)) + 1) + (0 + (z * 0.158));
  /* let y = x > 1 + (z * 0.158 / 2) ?
     Math.random() >= 0.5 ? Math.random() * (-(8 / 2 + (z * 0.158 / 2)) - (0 + (z * 0.158 / 2)) + 1) + (0 + (z * 0.158 / 2)) : Math.random() * ((8 / 2 + (z * 0.158 / 2)) - (0 + (z * 0.158 / 2)) + 1) + (0 + (z * 0.158 / 2))
     : Math.random() >= 0.5 ? Math.random() * (-(8 / 2 + (z * 0.158 / 2)) - (1 + (z * 0.158 / 2)) + 1) + (1 + (z * 0.158 / 2)) : Math.random() * ((8 / 2 + (z * 0.158 / 2)) - (1 + (z * 0.158 / 2)) + 1) + (1 + (z * 0.158 / 2));*/
  let minX = (-(8.1 + (z * 0.158)) - (0 + (z * 0.158)) + 1) + (0 + (z * 0.158))
  let maxX = ((8.1 + (z * 0.158)) - (0 + (z * 0.158)) + 1) + (0 + (z * 0.158))
  let minY = (-(8 / 2 + (z * 0.158 / 2)) - (0 + (z * 0.158 / 2)) + 1) + (0 + (z * 0.158 / 2))
  let maxY = ((8 / 2 + (z * 0.158 / 2)) - (0 + (z * 0.158 / 2)) + 1) + (0 + (z * 0.158 / 2))
  let x = Math.floor(Math.random() * (maxX + 30) + (minX) - 2)
  let y = Math.floor(Math.random() * (maxY + 20) + (minY) - 2)
  return [x, y, z]
}

function Stars(maxStars: Number) {
  let stars = []
  for (let i = 0; i < maxStars; i++) {
    stars.push({ coordinates: randomCoordinates() })
  }
  return stars
}

const Sphere = () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[1, 100, 100]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

export const ThreeBackground = () => {
  const [time, setTime] = useState(0)
  const [maxStars, setMaxStars] = useState(200)
  const [stars, setStars] = useState([])

  useEffect(() => {
    let test: { coordinates: number[] }[] = []
    for (let i = 0; i < maxStars; i++) {
      test.push({ coordinates: randomCoordinates() })
    }
    setStars(stars => test)
    setInterval(() => {
      setTime(time => time + 1)
    }, 100)
  }, [])

  return (
    <div className={styles.ThreeContainer}>
      <div className={styles.StarDiv}>
        <Canvas camera={{ zoom: 1, fov: 10, near: 0.01, far: 1000, position: [0, 0, -45] }}>
          <Effects disableGamma>
            <unrealBloomPass threshold={1} strength={3} radius={1} />
          </Effects>
          {stars.map((star, index) => {
            return <StarComponent key={index} position={star.coordinates} />
          })
          }
        </Canvas>
      </div>
    </div>
  )
}