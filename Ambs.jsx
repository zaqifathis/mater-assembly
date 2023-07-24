/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 ./public/ambs.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ambs.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.diag1.geometry} material={materials['diffuse_0.001']} />
      <mesh geometry={nodes.diag2.geometry} material={materials['diffuse_0.001']} />
      <mesh geometry={nodes.horizontal.geometry} material={materials['diffuse_0.001']} />
      <mesh geometry={nodes.vertical.geometry} material={materials['diffuse_0.001']} />
    </group>
  )
}

useGLTF.preload('/ambs.glb')