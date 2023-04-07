import * as Three from "three"
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber'
import { DirectionalLight, PointLight } from "three"

export const Moon = ({ children, refObject, setColor, lightColor, color, ...props }: any) => {
    // This reference will give us direct access to the mesh
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (refObject.current.rotation.y -= delta / 2))
    // Return view, these are regular three.js elements expressed in JSX
    let texture = useLoader(Three.TextureLoader, 'assets/moonmap4k.jpg')
    let bump = useLoader(Three.TextureLoader, 'assets/moonbump4k.jpg')

    return (
        <mesh
            {...props}
            ref={refObject}
            scale={active ? 3 : 2}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
            reveiveShadow={true}
            castShadow={true}
            layers={0}>
            {children}
            <meshPhongMaterial roughness={5} metalness={0} map={texture} bumpMap={bump} bumpScale={0.005} toneMapped={false}/>
        </mesh>
    )
}

export const RotatingLight = () => {
    const groupRef = useRef();
    const lightRef = useRef();
    const meshRef = useRef();
    const [rotationSpeed, setRotationSpeed] = useState(10);
    const [distance, setDistance] = useState(10);
    const [rotation, setRotation] = useState(0);
    const [color, setColor] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(rotation => rotation + 0.002);
        }, rotationSpeed);
        return () => clearInterval(interval);
    }, []);

    useFrame((state) => {
        groupRef.current.rotation.y = rotation;
        lightRef.current.position.x = distance * Math.sin(rotation) - 180;
        lightRef.current.position.z = distance * Math.cos(rotation);
    });

    return (
        <group ref={groupRef}>
            <directionalLight ref={lightRef} color={color ? 0x1acad5 : 0xffffff} intensity={1} power={5} shadow={{
                mapSize: { width: 2048, height: 2048 },
                receive: true,
                radius: 10,
                cast: true
            }} />
            <Moon refObject={meshRef} color={[1.5, 1.5, 1.5]} setColor={setColor} lightColor={color} position={[0, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
            </Moon>
        </group>
    )
};

export default RotatingLight;
