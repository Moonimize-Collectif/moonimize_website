import * as Three from "three"
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber'
import { Effects } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import StarComponent from './Star'
extend({ UnrealBloomPass })


function Box(props) {
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

function Moon({children, color, ...props }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.y += delta / 3))
  // Return view, these are regular three.js elements expressed in JSX
  let texture = useLoader(Three.TextureLoader, 'assets/moon_texture_8k.png')

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 3 : 2}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      {children}
      <meshStandardMaterial color={color} map={texture} toneMapped={false} />
    </mesh>
  )
}

function randomCoordinates() {
  let z = Math.floor(Math.random() * (250 - 10 + 1) + 10)
  //let x = Math.floor(Math.random() * 60) + -30
  let x = Math.random() >= 0.5 ? Math.random() * (-(8.1 + (z*0.158) ) - (0 + (z*0.158))  + 1) +(0 + (z*0.158)) : Math.random() * ((8.1 + (z*0.158) ) - (0 + (z*0.158)) + 1) + (0 + (z*0.158));
  let y = x > 1+(z*0.158/2)? 
  Math.random() >= 0.5 ? Math.random() * (-(8/2 + (z*0.158/2) ) -(0 + (z*0.158/2))  + 1) +(0 + (z*0.158/2)) : Math.random() * ((8 /2 + (z*0.158 /2) ) - (0+ (z*0.158/2)) + 1) + (0 + (z*0.158/2))
  :Math.random() >= 0.5 ? Math.random() * (-(8/2 + (z*0.158/2) ) -(1 + (z*0.158/2))  + 1) +(1 + (z*0.158/2)) : Math.random() * ((8 /2 + (z*0.158 /2) ) - (1+ (z*0.158/2)) + 1) + (1 + (z*0.158/2));
  //let y = Math.floor(Math.random() * 30) + -15
  return [x, y, z]
}

function Stars(maxStars: Number) {
  let stars = []
  for (let i = 0; i < maxStars; i++) {
    stars.push({coordinates: randomCoordinates()})
  }
  return stars
}

export default function background_landing_page() {
  const [positionX, setPositionX] = useState(0)
  const [positionY, setPositionY] = useState(0)
  const [positionZ, setPositionZ] = useState(-40)
  const [time, setTime] = useState(0)
  const [plus, setPlus] = useState(true)
  const [plusY, setPlusY] = useState(true)
  const [plusZ, setPlusZ] = useState(true)
  const [maxStars, setMaxStars] = useState(200)
  const [stars, setStars] = useState([])
  
  useEffect(() => {
    let test: { coordinates: number[] }[] = []
    for (let i = 0; i < maxStars; i++) {
      test.push({coordinates: randomCoordinates()})
    }
    console.log(test.length)
    setStars(stars => test)
    setInterval(() => {
      setTime(time => time + 1)
    }, 100)
  }, [])

  useEffect(() => {
    if (plus) {
      setPositionX(positionX => positionX + 0.02)
    } else {
      setPositionX(positionX => positionX - 0.02)
    }
    if (plusY) {
      setPositionY(positionY => positionY + 0.02)
    }
    else {
      setPositionY(positionY => positionY - 0.02)
    }
    if (plusZ) {
      setPositionZ(positionZ => positionZ + 0.02)
    }
    else {
      setPositionZ(positionZ => positionZ - 0.02)
    }
   
  }, [time])

  useEffect(() => {
    if (positionX > 20) {
      setPlus(plus => false)
    }
    else if (positionX < -20) {
      setPlus(plus => true)
    }
    if (positionY > 40) {
      setPlusY(plusY => false)
    }
    else if (positionY < -40) {
      setPlusY(plusY => true)
    }
    if (positionZ > 50) {
      setPlusZ(plusZ => false)
    }
    else if (positionZ < -40) {
      setPlusZ(plusZ => true)
    }
  }, [positionX, positionY, positionZ])


  useEffect(() => {
    //console.log(plusY, plus)
  }, [plus, plusY])

  return (
    <Canvas camera={{ zoom: 1, fov: 10, near: 0.01, far: 1000, position: [0, 0, -45] }}>
      <pointLight position={[positionX, positionY, positionZ]} color={0x1acad5} intensity={20} power={10}/>
      <Moon color={[-1, -1, -1]} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 200,200]} />
      </Moon>
     <Effects disableGamma>
        <unrealBloomPass threshold={1} strength={2} radius={2} />
      </Effects>
      {/* <StarComponent position={[0, 4, 0]} /> */}
      {stars.map((star, index) => {
        return <StarComponent key={index} position={star.coordinates} />
      })
      }
    </Canvas>
  )
}