"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense, useEffect, useRef, useState, Component } from "react";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";

// Check if WebGL is available before rendering Canvas
function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    if (gl) {
      // Explicitly lose context to free it immediately
      const ext = gl.getExtension("WEBGL_lose_context");
      if (ext) ext.loseContext();
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

// Fallback component when WebGL isn't available
function WebGLFallback() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <img
        src="/logo.png"
        alt="Genero Logo"
        style={{
          maxWidth: "60%",
          maxHeight: "60%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

// Error boundary to catch Three.js runtime crashes
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn("WebGL Error Boundary caught:", error.message);
  }

  render() {
    if (this.state.hasError) {
      return <WebGLFallback />;
    }
    return this.props.children;
  }
}

const SceneContent = () => {
  const glRef = useRef(null);

  useEffect(() => {
    return () => {
      if (glRef.current) {
        try {
          glRef.current.dispose();
          glRef.current.forceContextLoss();
        } catch (e) {
          console.warn("Error disposing WebGL context:", e);
        }
        glRef.current = null;
      }
    };
  }, []);

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      gl={{
        antialias: false,
        alpha: false,
        preserveDrawingBuffer: false,
        powerPreference: "default",
        failIfMajorPerformanceCaveat: false,
      }}
      dpr={[1, 1.5]}
      camera={{ position: [2, 0, 10], fov: 50 }}
      onCreated={({ gl }) => {
        gl.setClearColor("black");
        glRef.current = gl;
      }}
    >
      <EffectComposer>
        <Fluid fluidColor="rgb(255, 200, 0)" />
      </EffectComposer>
      <ambientLight intensity={1.5} />
      <Suspense fallback={null}>
        <Model />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minDistance={10}
          maxDistance={10}
          target={[0, 0, 0]}
        />
      </Suspense>
    </Canvas>
  );
};

const Scene = () => {
  const [supported, setSupported] = useState(null);

  useEffect(() => {
    setSupported(isWebGLAvailable());
  }, []);

  // Still loading check
  if (supported === null) return null;

  // WebGL not available — show fallback
  if (!supported) return <WebGLFallback />;

  // WebGL available — render with error boundary as safety net
  return (
    <WebGLErrorBoundary>
      <SceneContent />
    </WebGLErrorBoundary>
  );
};

export default Scene;
