"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import { Suspense } from "react";
import helvetiker from "three/examples/fonts/helvetiker_regular.typeface.json";

export default function ThreeDText() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas camera={{ position: [0, 2, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <Text3D
            font={helvetiker}
            // font="/fonts/helvetiker_regular.typeface.json" // put file in /public/fonts
            size={1.2}
            height={0.4}
            bevelEnabled
            bevelSize={0.03}
            bevelThickness={0.03}
            curveSegments={12}
          >
            Senior Frontend Developer
            <meshStandardMaterial
              color="#4fc3ff"
              metalness={0.6}
              roughness={0.3}
            />
          </Text3D>
        </Suspense>

        <OrbitControls enableDamping />
      </Canvas>
    </div>
  );
}
