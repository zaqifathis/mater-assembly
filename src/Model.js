/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({
  handleClick,
  handlePointerOver,
  handlePointerOut,
  handlePointerMissed,
  color,
  highlight,
  selectedStrip,
  selectedColor,
}) {
  const { nodes, materials } = useGLTF("/mater_newBlob.glb");

  const highlightedStrip = (
    highlight,
    selectedStrip,
    selectedColor,
    stripName,
    stripColor
  ) => {
    if (highlight) {
      if (checkSelectedStrip(selectedStrip, stripName)) {
        return selectedColor;
      } else {
        return stripColor;
      }
    } else {
      return stripColor;
    }
  };

  const checkSelectedStrip = (selectedStrip, stripName) => {
    if (`strip${selectedStrip}` == stripName) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <group
      dispose={null}
      onPointerOver={(event) => handlePointerOver(event)}
      onPointerOut={(event) => handlePointerOut(event)}
      onPointerMissed={() => handlePointerMissed()}
      onClick={(event) => handleClick(event)}
    >
      <mesh
        name="base"
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={materials.diffuse_0}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip0"
        castShadow
        receiveShadow
        geometry={nodes.strip0.geometry}
        material={materials.strip0}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip0",
          color.items.strip0
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip1"
        castShadow
        receiveShadow
        geometry={nodes.strip1.geometry}
        material={materials.strip1}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip1",
          color.items.strip1
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip2"
        castShadow
        receiveShadow
        geometry={nodes.strip2.geometry}
        material={materials.strip2}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip2",
          color.items.strip2
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip3"
        castShadow
        receiveShadow
        geometry={nodes.strip3.geometry}
        material={materials.strip3}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip3",
          color.items.strip3
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip4"
        castShadow
        receiveShadow
        geometry={nodes.strip4.geometry}
        material={materials.strip4}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip4",
          color.items.strip4
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip4"
        castShadow
        receiveShadow
        geometry={nodes.strip4.geometry}
        material={materials.strip4}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip4",
          color.items.strip4
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip5"
        castShadow
        receiveShadow
        geometry={nodes.strip5.geometry}
        material={materials.strip5}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip5",
          color.items.strip5
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip6"
        castShadow
        receiveShadow
        geometry={nodes.strip6.geometry}
        material={materials.strip6}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip6",
          color.items.strip6
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip7"
        castShadow
        receiveShadow
        geometry={nodes.strip7.geometry}
        material={materials.strip7}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip7",
          color.items.strip7
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip8"
        castShadow
        receiveShadow
        geometry={nodes.strip8.geometry}
        material={materials.strip8}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip8",
          color.items.strip8
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip9"
        castShadow
        receiveShadow
        geometry={nodes.strip9.geometry}
        material={materials.strip9}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip9",
          color.items.strip9
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip10"
        castShadow
        receiveShadow
        geometry={nodes.strip10.geometry}
        material={materials.strip10}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip10",
          color.items.strip10
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip11"
        castShadow
        receiveShadow
        geometry={nodes.strip11.geometry}
        material={materials.strip11}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip11",
          color.items.strip11
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip12"
        castShadow
        receiveShadow
        geometry={nodes.strip12.geometry}
        material={materials.strip12}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip12",
          color.items.strip12
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip13"
        castShadow
        receiveShadow
        geometry={nodes.strip13.geometry}
        material={materials.strip13}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip13",
          color.items.strip13
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip14"
        castShadow
        receiveShadow
        geometry={nodes.strip14.geometry}
        material={materials.strip14}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip14",
          color.items.strip14
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip15"
        castShadow
        receiveShadow
        geometry={nodes.strip15.geometry}
        material={materials.strip15}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip15",
          color.items.strip15
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip16"
        castShadow
        receiveShadow
        geometry={nodes.strip16.geometry}
        material={materials.strip16}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip16",
          color.items.strip16
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip17"
        castShadow
        receiveShadow
        geometry={nodes.strip17.geometry}
        material={materials.strip17}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip17",
          color.items.strip17
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip18"
        castShadow
        receiveShadow
        geometry={nodes.strip18.geometry}
        material={materials.strip18}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip18",
          color.items.strip18
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip19"
        castShadow
        receiveShadow
        geometry={nodes.strip19.geometry}
        material={materials.strip19}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip19",
          color.items.strip19
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip20"
        castShadow
        receiveShadow
        geometry={nodes.strip20.geometry}
        material={materials.strip20}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip20",
          color.items.strip20
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip21"
        castShadow
        receiveShadow
        geometry={nodes.strip21.geometry}
        material={materials.strip21}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip21",
          color.items.strip21
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip22"
        castShadow
        receiveShadow
        geometry={nodes.strip22.geometry}
        material={materials.strip22}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip22",
          color.items.strip22
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip23"
        castShadow
        receiveShadow
        geometry={nodes.strip23.geometry}
        material={materials.strip23}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip23",
          color.items.strip23
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip24"
        castShadow
        receiveShadow
        geometry={nodes.strip24.geometry}
        material={materials.strip24}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip24",
          color.items.strip24
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip25"
        castShadow
        receiveShadow
        geometry={nodes.strip25.geometry}
        material={materials.strip25}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip25",
          color.items.strip25
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
      <mesh
        name="strip26"
        castShadow
        receiveShadow
        geometry={nodes.strip26.geometry}
        material={materials.strip26}
        material-color={highlightedStrip(
          highlight,
          selectedStrip,
          selectedColor,
          "strip26",
          color.items.strip26
        )}
        //rotation={[Math.PI / 2, 0, 10]}
      />
    </group>
  );
}

useGLTF.preload("/mater_newBlob.glb");

// return (
//   <group
//     dispose={null}
//     onPointerOver={(event) => handlePointerOver(event)}
//     onPointerOut={(event) => handlePointerOut(event)}
//     onPointerMissed={() => handlePointerMissed()}
//     onClick={(event) => handleClick(event)}
//   >
//     <mesh
//       name="strip3"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip3.geometry}
//       material={materials.strip3}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip3",
//         color.items.strip3
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip2"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip2.geometry}
//       material={materials.strip2}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip2",
//         color.items.strip2
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip0"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip0.geometry}
//       material={materials.strip0}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip0",
//         color.items.strip0
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip1"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip1.geometry}
//       material={materials.strip1}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip1",
//         color.items.strip1
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip4"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip4.geometry}
//       material={materials.strip4}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip4",
//         color.items.strip4
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip7"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip7.geometry}
//       material={materials.strip7}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip7",
//         color.items.strip7
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip6"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip6.geometry}
//       material={materials.strip6}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip6",
//         color.items.strip6
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip5"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip5.geometry}
//       material={materials.strip5}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip5",
//         color.items.strip5
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip8"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip8.geometry}
//       material={materials.strip8}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip8",
//         color.items.strip8
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip10"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip10.geometry}
//       material={materials.strip10}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip10",
//         color.items.strip10
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip11"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip11.geometry}
//       material={materials.strip11}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip11",
//         color.items.strip11
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip9"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip9.geometry}
//       material={materials.strip9}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip9",
//         color.items.strip9
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip12"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip12.geometry}
//       material={materials.strip12}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip12",
//         color.items.strip12
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip14"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip14.geometry}
//       material={materials.strip14}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip14",
//         color.items.strip14
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip15"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip15.geometry}
//       material={materials.strip15}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip15",
//         color.items.strip15
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip13"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip13.geometry}
//       material={materials.strip13}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip13",
//         color.items.strip13
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip16"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip16.geometry}
//       material={materials.strip16}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip16",
//         color.items.strip16
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip19"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip19.geometry}
//       material={materials.strip19}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip19",
//         color.items.strip19
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip17"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip17.geometry}
//       material={materials.strip17}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip17",
//         color.items.strip17
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip21"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip21.geometry}
//       material={materials.strip21}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip21",
//         color.items.strip21
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip18"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip18.geometry}
//       material={materials.strip18}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip18",
//         color.items.strip18
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip22"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip22.geometry}
//       material={materials.strip22}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip22",
//         color.items.strip22
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip24"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip24.geometry}
//       material={materials.strip24}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip24",
//         color.items.strip24
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip20"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip20.geometry}
//       material={materials.strip20}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip20",
//         color.items.strip20
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip27"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip27.geometry}
//       material={materials.strip27}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip27",
//         color.items.strip27
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip29"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip29.geometry}
//       material={materials.strip29}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip29",
//         color.items.strip29
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip25"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip25.geometry}
//       material={materials.strip25}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip25",
//         color.items.strip25
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip36"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip36.geometry}
//       material={materials.strip36}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip36",
//         color.items.strip36
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip33"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip33.geometry}
//       material={materials.strip33}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip33",
//         color.items.strip33
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip23"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip23.geometry}
//       material={materials.strip23}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip23",
//         color.items.strip23
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip31"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip31.geometry}
//       material={materials.strip31}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip31",
//         color.items.strip31
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip40"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip40.geometry}
//       material={materials.strip40}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip40",
//         color.items.strip40
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip26"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip26.geometry}
//       material={materials.strip26}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip26",
//         color.items.strip26
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip35"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip35.geometry}
//       material={materials.strip35}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip35",
//         color.items.strip35
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip47"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip47.geometry}
//       material={materials.strip47}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip47",
//         color.items.strip47
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip28"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip28.geometry}
//       material={materials.strip28}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip28",
//         color.items.strip28
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip43"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip43.geometry}
//       material={materials.strip43}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip43",
//         color.items.strip43
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip30"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip30.geometry}
//       material={materials.strip30}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip30",
//         color.items.strip30
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip49"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip49.geometry}
//       material={materials.strip49}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip49",
//         color.items.strip49
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip34"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip34.geometry}
//       material={materials.strip34}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip34",
//         color.items.strip34
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip46"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip46.geometry}
//       material={materials.strip46}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip46",
//         color.items.strip46
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip32"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip32.geometry}
//       material={materials.strip32}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip32",
//         color.items.strip32
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip53"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip53.geometry}
//       material={materials.strip53}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip53",
//         color.items.strip53
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip38"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip38.geometry}
//       material={materials.strip38}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip38",
//         color.items.strip38
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip51"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip51.geometry}
//       material={materials.strip51}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip51",
//         color.items.strip51
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip39"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip39.geometry}
//       material={materials.strip39}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip39",
//         color.items.strip39
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip37"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip37.geometry}
//       material={materials.strip37}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip37",
//         color.items.strip37
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip56"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip56.geometry}
//       material={materials.strip56}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip56",
//         color.items.strip56
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip45"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip45.geometry}
//       material={materials.strip45}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip45",
//         color.items.strip45
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip41"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip41.geometry}
//       material={materials.strip41}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip41",
//         color.items.strip41
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip48"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip48.geometry}
//       material={materials.strip48}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip48",
//         color.items.strip48
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip50"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip50.geometry}
//       material={materials.strip50}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip50",
//         color.items.strip50
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip42"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip42.geometry}
//       material={materials.strip42}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip42",
//         color.items.strip42
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip54"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip54.geometry}
//       material={materials.strip54}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip54",
//         color.items.strip54
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip44"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip44.geometry}
//       material={materials.strip44}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip44",
//         color.items.strip44
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip52"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip52.geometry}
//       material={materials.strip52}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip52",
//         color.items.strip52
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip55"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip55.geometry}
//       material={materials.strip55}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip55",
//         color.items.strip55
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//     <mesh
//       name="strip57"
//       castShadow
//       receiveShadow
//       geometry={nodes.strip57.geometry}
//       material={materials.strip57}
//       material-color={highlightedStrip(
//         highlight,
//         selectedStrip,
//         selectedColor,
//         "strip57",
//         color.items.strip57
//       )}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//   </group>
// );
// }
