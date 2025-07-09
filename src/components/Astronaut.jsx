// src/Astronaut.jsx

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring } from "motion/react";

export function Astronaut(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/tenhun_falling_spaceman_fanart.glb");
  const { actions } = useAnimations(animations, group);

  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);

  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });

  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={props.scale || 5}
      position={props.position || [0, -2, 0]}
      rotation={props.rotation || [0, 0, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");
