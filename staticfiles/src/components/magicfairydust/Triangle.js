// import { createRoot } from 'react-dom/client'
// import React, { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// // 
// // import { OrbitControls } from "@react-three/drei";
// import { BufferAttribute } from "three";
// import { mergeBufferGeometries } from 'three/addons/utils/BufferGeometryUtils.js';


// function Triangle({ delay }) {
//   const ref = useRef()

//   useFrame(({ clock }) => {
//     const t = clock.elapsedTime * (0.5 + delay * 0.1)
//     ref.current.rotation.z = t
//     ref.current.position.y = Math.sin(t * 2) * 2
//     ref.current.scale.setScalar(Math.cos(t * 2) * 0.25 + 1)
//   })

//   return (
//     <mesh ref={ref}>
//       <BufferAttribute attach="geometry" {...mergeBufferGeometries.mergeVertices(new THREE.TriangleBufferGeometry(3, 3))} />
//       <meshBasicMaterial attach="material" wireframe color="white" />
//     </mesh>
//   )
// }

// function TriangleCanvas() {
//   return (
//     <Canvas>
//       {[...Array(10)].map((_, i) => <Triangle key={i} delay={i} />)}
//     </Canvas>
//   )
// }

// export default TriangleCanvas
