'use client'
import { Canvas, } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Environment, Html, Loader, OrbitControls, useGLTF, useProgress } from "@react-three/drei"
import {Model} from "./Self";
import "../../css/intro.css"

const ModelComponent = () => {

    return <Model />
}

const Light = () => {


    return <>
        <ambientLight intensity={0.1} />
        <directionalLight position={[40, 10, 5]} intensity={0.2} />
        <directionalLight
            castShadow
            position={[10, 420, 100]}
            intensity={1.3}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={10}
            shadow-camera-left={-30}
            shadow-camera-right={10}
            shadow-camera-top={40}
            shadow-camera-bottom={-10}
        />
        <spotLight intensity={0.5} position={[90, 100, 50]} castShadow />
    </>
}

function Box(props: any) {

    return (
        <mesh {...props} recieveShadow={true} castShadow>
            <boxGeometry />
            <meshPhysicalMaterial color={"green"} />
        </mesh>
    );
}
export default function Intro() {







    return (
        < >
            <Canvas style={{position:"fixed"}}
                shadows dpr={[20, 1]}
                camera={{ position: [30, 10, -2], fov: 20 }} >
                <Light />

                <Suspense fallback={
                    <Html>{null}</Html>

                }>
                    <>

                        <ModelComponent/>
                        {/* <OrbitControls /> */}
                    </>

                </Suspense>


            </Canvas>
            <Loader />
        </>)
}
