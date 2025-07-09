import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import { Astronaut } from "../components/Astronaut";
import { Float, Environment, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space" id="home">
      <HeroText />
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-96 h-96 bg-gradient-to-r from-aqua via-mint to-royal rounded-full blur-3xl animate-pulse"></div>
      </div>
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas 
          camera={{ position: [0, 0, 3], fov: 50 }}
          style={{ background: 'transparent' }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={[1, 2]}
        >
          <Suspense fallback={<Loader />}>
            {/* Enhanced Lighting */}
            <ambientLight intensity={0.8} />
            <directionalLight 
              position={[5, 5, 5]} 
              intensity={1.2} 
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <spotLight 
              position={[0, 10, 0]} 
              intensity={0.5} 
              angle={0.3} 
              penumbra={1}
            />
            
            {/* Environment for better reflections */}
            <Environment preset="sunset" />
            
            <Float 
              speed={2} 
              rotationIntensity={0.3} 
              floatIntensity={0.3}
              floatingRange={[-0.1, 0.1]}
            >
              <Astronaut
                scale={isMobile ? 0.8 : 1.2}
                position={[1, 0, 0]}
              />
            </Float>
            
            <Rig />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              enableRotate={true}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 6, state.mouse.y / 6, 3],
      0.3,
      delta
    );
  });
}

export default Hero;
