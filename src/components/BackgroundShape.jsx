import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function AnimatedShape() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <torusKnotGeometry args={[1.2, 0.4, 100, 16]} />
      <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

export default function BackgroundShape() {
  return (
    <div className="absolute inset-0 z-0 opacity-30" 
         style={{ 
           pointerEvents: 'auto',
           userSelect: 'none',
           WebkitUserSelect: 'none'
         }}>
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        style={{ 
          pointerEvents: 'auto',
          userSelect: 'none',
          WebkitUserSelect: 'none'
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <AnimatedShape />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
}