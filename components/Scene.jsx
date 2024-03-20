"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
export default function Scene() {
  return (
    <Canvas orthographic style={{ background: "black" }} camera={{ position: [0, 0, 1], zoom: 800 }}>
      <Model />
      <directionalLight intensity={3} position={[0, 0.1, 1]} />
      <Environment preset="city" />
    </Canvas>
  );
}
