import React, { useRef, useState, useEffect } from 'react'
import { extend } from '@react-three/fiber'
import { UnrealBloomPass } from 'three-stdlib'
extend({ UnrealBloomPass })

export const Star = ({ children, color, ...props }: any) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    return (
        <mesh
            {...props}
            scale={0.02}
            ref={mesh}>
            {children}
            {/* Now, in order to get selective bloom we simply crank colors out of
          their natural spectrum. Where colors are normally defined between 0 - 1 we push them
          way out of range, into a higher defintion (HDR). What previously was [1, 1, 1] now could
          for instance be [10, 10, 10]. This requires that toneMapping is off, or it clamps to 1 */}
            <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
    )
}
export const StarComponent = (props : any) => {
    const { position } = props
    const [shining, setShining] = useState(Math.floor(Math.random() * (5 - 0 + 1) + 6))
    const [bloom, setBloom] = useState(0)
    const [shiningPlus, setShiningPlus] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setBloom(bloom => bloom + 1)
        }, 100)
    }, [])

    useEffect(() => {
        if (shiningPlus === true) {
            setShining(shining => shining - 0.01)
        }
        else {
            setShining(shining => shining + 0.01)
        }
    }, [bloom])

    useEffect(() => {
        if (shining >= 6) {
            setShiningPlus(true)
        }
        if (shining <= 0.5) {
            setShiningPlus(false)
        }
    }, [shining])
    useEffect(() => {
        //console.log(shining)
    }, [shining])
    return (
        <Star color={[shining, shining, shining]} position={position}>
            <sphereGeometry args={[2, 20,20]} />
        </Star>
    )
}
