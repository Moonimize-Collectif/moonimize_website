import * as Three from "three"
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber'
import { DirectionalLight, PointLight } from "three"

function Moon({ children, refObject, color, ...props }) {
    // This reference will give us direct access to the mesh
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (refObject.current.rotation.y -= delta /2))
    // Return view, these are regular three.js elements expressed in JSX
    let texture = useLoader(Three.TextureLoader, 'assets/moon_texture_8k.png')

    return (
        <mesh
            {...props}
            ref={refObject}
            scale={active ? 3 : 2}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            {children}
            <meshStandardMaterial color={color} map={texture} toneMapped={false} />
        </mesh>
    )
}

const RotatingLight = () => {
    const groupRef = useRef();
    const lightRef = useRef();
    const meshRef = useRef();
    const [rotationSpeed, setRotationSpeed] = useState(10);
    const [distance, setDistance] = useState(10);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(rotation => rotation + 0.002);
        }, rotationSpeed);
        return () => clearInterval(interval);
    }, []);

    useFrame((state) => {
        groupRef.current.rotation.y = rotation;
        lightRef.current.position.x = distance  * Math.sin(rotation) - 180;
        lightRef.current.position.z = distance * Math.cos(rotation);
    });

    return (
        <group ref={groupRef}>
            <directionalLight ref={lightRef} color={0x1acad5} intensity={1} power={14} shadow={{mapSize:{ width: 2048, height: 2048 },
                    receive: true,
                    radius: 10,
                    cast: true}}/>
            <Moon refObject={meshRef} color={[1, 1, 1]} position={[0, 0, 0]}>
                <sphereGeometry args={[1, 200, 200]} />
            </Moon>
        </group>
    )
};

export default RotatingLight;
