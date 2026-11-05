'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import type { Group } from 'three';

// The artwork is authored for the curved cup in UV space, rather than applying a
// rectangular photograph to a cylinder. One centered front logo avoids the
// repeated/cut-off lettering visible in the earlier model.
function makeSleeveTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 896;
  const c = canvas.getContext('2d');
  if (!c) throw new Error('Canvas texture unavailable');
  c.fillStyle = '#174431';
  c.fillRect(0, 0, 2048, 896);
  for (let i = 0; i < 5500; i++) {
    const x = (i * 61.17) % 2048;
    const y = (i * 127.61) % 896;
    c.fillStyle = i % 3 === 0 ? 'rgba(255,255,255,.038)' : 'rgba(0,0,0,.026)';
    c.fillRect(x, y, 2, 2);
  }
  c.strokeStyle = '#d8bc84';
  c.lineWidth = 5;
  [55, 838].forEach(y => {
    c.beginPath(); c.moveTo(0, y); c.lineTo(2048, y); c.stroke();
  });
  // Center the wordmark on the front-facing half of the circumference.
  // A smaller mark is repeated opposite the primary one for real 3D rotation.
  for (const cx of [1024, 0, 2048]) {
    c.textAlign = 'center';
    c.fillStyle = '#dfc28c';
    c.font = 'normal 75px Georgia';
    c.fillText('✳', cx, 240);
    c.fillStyle = '#fff9e9';
    c.font = 'bold 128px Georgia';
    c.fillText('EARTH BEEN', cx, 402);
    c.fillStyle = '#e9d8ae';
    c.font = 'bold 37px Arial';
    c.fillText('S P E C I A L I T Y   C O F F E E', cx, 487);
    c.strokeStyle = 'rgba(227,203,160,.7)';
    c.lineWidth = 2;
    c.beginPath(); c.moveTo(cx - 155, 549); c.lineTo(cx + 155, 549); c.stroke();
    c.fillStyle = '#e1c898';
    c.font = '29px Georgia';
    c.fillText('L O N D O N', cx, 617);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function makePaperBump(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const c = canvas.getContext('2d')!;
  const img = c.createImageData(512,512);
  for (let i = 0; i < img.data.length; i += 4) {
    const x = (i / 4) % 512;
    const y = Math.floor(i / (4 * 512));
    const grain = 215 + 18 * Math.sin(x * 2.97 + y * 7.13) * Math.sin(x * 4.67 - y * 2.17);
    img.data[i] = img.data[i+1] = img.data[i+2] = grain;
    img.data[i+3] = 255;
  }
  c.putImageData(img,0,0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2,2);
  return tex;
}

function CoffeeBean({ position, rotation, size=1 }: {
  position:[number,number,number]; rotation:[number,number,number]; size?:number;
}) {
  const seam = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(-.08,-.235,.177),
    new THREE.Vector3(.035,-.095,.218),
    new THREE.Vector3(-.018,.045,.232),
    new THREE.Vector3(.071,.175,.190),
    new THREE.Vector3(.035,.245,.16)
  ]), []);
  return <group position={position} rotation={rotation} scale={size}>
    <mesh castShadow scale={[.82,1.15,.48]}>
      <sphereGeometry args={[.29,36,30]}/>
      <meshPhysicalMaterial color="#542b17" roughness={.3} metalness={.035} clearcoat={.30} clearcoatRoughness={.4}/>
    </mesh>
    <mesh scale={[1,1,1.03]}>
      <tubeGeometry args={[seam,32,.018,8,false]}/>
      <meshStandardMaterial color="#ad7542" roughness={.68}/>
    </mesh>
  </group>;
}

function Cup({ scrollProgress, reducedMotion }:{ scrollProgress:number; reducedMotion:boolean }) {
  const cup = useRef<Group>(null!);
  const sleeve = useMemo(makeSleeveTexture,[]);
  const paperBump = useMemo(makePaperBump,[]);
  const bodyProfile = useMemo(() => [
    new THREE.Vector2(.675,-1.25), new THREE.Vector2(.71,-1.23),
    new THREE.Vector2(.735,-1.10), new THREE.Vector2(.77,-.86),
    new THREE.Vector2(.835,-.42), new THREE.Vector2(.90,.18),
    new THREE.Vector2(.965,.82), new THREE.Vector2(.988,1.12)
  ],[]);
  useEffect(() => () => { sleeve.dispose(); paperBump.dispose(); },[sleeve,paperBump]);
  useFrame((state, delta) => {
    if (!cup.current) return;
    const px = reducedMotion ? 0 : state.pointer.x;
    const py = reducedMotion ? 0 : state.pointer.y;
    cup.current.rotation.y = THREE.MathUtils.damp(cup.current.rotation.y, -.18 + px * .10 + scrollProgress*.42, 2.2,delta);
    cup.current.rotation.z = THREE.MathUtils.damp(cup.current.rotation.z, -.105 + py*.035 - scrollProgress*.13, 2.2,delta);
    cup.current.rotation.x = THREE.MathUtils.damp(cup.current.rotation.x, -.06 - py*.09, 2.2,delta);
    cup.current.position.y = THREE.MathUtils.damp(cup.current.position.y, -.07 - scrollProgress*.16,2,delta);
  });
  return <group ref={cup} position={[0,-.07,0]} rotation={[-.06,-.18,-.105]} scale={1.14}>
    {/* Actual tapered 3D lathed body with subtle, touchable paper grain. */}
    <mesh castShadow receiveShadow>
      <latheGeometry args={[bodyProfile,128]}/>
      <meshPhysicalMaterial color="#f1e5ce" roughness={.78} bumpMap={paperBump} bumpScale={.018} clearcoat={.045}/>
    </mesh>
    <mesh position={[0,-1.251,0]} receiveShadow>
      <cylinderGeometry args={[.681,.675,.025,128]}/>
      <meshStandardMaterial color="#c8b59b" roughness={.92}/>
    </mesh>
    {/* Independent sleeve, mapped once to each side of the real cylinder. */}
    <mesh position={[0,-.15,0]} rotation={[0,Math.PI,0]} castShadow receiveShadow>
      <cylinderGeometry args={[.928,.834,.81,128,1,true]}/>
      <meshPhysicalMaterial map={sleeve} roughness={.76} clearcoat={.045} side={THREE.DoubleSide}/>
    </mesh>
    {[.263,-.56].map((y,i)=><mesh key={i} position={[0,y,0]} rotation={[Math.PI/2,0,0]}>
      <torusGeometry args={[i===0?.93:.835,.010,10,128]}/>
      <meshStandardMaterial color="#ad986e" roughness={.8}/>
    </mesh>)}
    {/* Double stepped molded fibre lid, raised rolled edge and sipper detail. */}
    <mesh position={[0,1.128,0]} castShadow>
      <cylinderGeometry args={[1.045,.987,.145,128]}/>
      <meshPhysicalMaterial color="#dfd1b8" roughness={.62} clearcoat={.10}/>
    </mesh>
    <mesh position={[0,1.231,0]} castShadow>
      <cylinderGeometry args={[1.074,1.04,.115,128]}/>
      <meshPhysicalMaterial color="#f3e9d4" roughness={.58} clearcoat={.10}/>
    </mesh>
    <mesh position={[0,1.288,0]} rotation={[Math.PI/2,0,0]} castShadow>
      <torusGeometry args={[1.033,.049,16,128]}/>
      <meshPhysicalMaterial color="#fff1d9" roughness={.53}/>
    </mesh>
    <mesh position={[0,1.288,0]}>
      <cylinderGeometry args={[.976,.976,.022,128]}/>
      <meshStandardMaterial color="#e7dcc7" roughness={.71}/>
    </mesh>
    <mesh position={[0,1.315,.43]} rotation={[0,0,0]}>
      <boxGeometry args={[.43,.036,.16]}/>
      <meshStandardMaterial color="#bbaa90" roughness={.68}/>
    </mesh>
    <mesh position={[0,1.337,.435]}>
      <boxGeometry args={[.28,.009,.073]}/>
      <meshStandardMaterial color="#463d32" roughness={.92}/>
    </mesh>
    {/* Gentle highlights contour the smooth rim rather than a flat plastic disc. */}
    <mesh position={[0,1.173,0]} rotation={[Math.PI/2,0,0]}>
      <torusGeometry args={[1.02,.014,10,128]}/>
      <meshStandardMaterial color="#bbaa8d" roughness={.78}/>
    </mesh>
  </group>;
}

export default function CoffeeCupModel({ scrollProgress=0, reducedMotion=false }:{
  scrollProgress?:number; reducedMotion?:boolean;
}) {
  return <>
    <ambientLight intensity={.86} color="#fff6e6"/>
    <hemisphereLight args={["#fff1d8","#183a28",1.65]}/>
    <directionalLight position={[-3.5,5,6]} intensity={3.35} color="#fff0d3" castShadow shadow-mapSize={[1024,1024]} shadow-bias={-.0002}/>
    <directionalLight position={[3.2,2,-3]} intensity={2.4} color="#d0e7d1"/>
    <spotLight position={[2,5,3]} intensity={26} angle={.54} penumbra={.9} distance={14} color="#fff1d7"/>
    <Float speed={reducedMotion?0:1.05} rotationIntensity={0} floatIntensity={reducedMotion?0:.11}>
      <Cup scrollProgress={scrollProgress} reducedMotion={reducedMotion}/>
    </Float>
    <CoffeeBean position={[-1.82,.86,-.45]} rotation={[-.18,.3,.9]} size={.76}/>
    <CoffeeBean position={[1.78,-.72,.22]} rotation={[.1,-.45,-.75]} size={.65}/>
    <CoffeeBean position={[-1.65,-1.35,-.6]} rotation={[.2,.3,-.5]} size={.56}/>
    <ContactShadows position={[0,-1.9,0]} opacity={.27} scale={5} blur={2.8} far={3.5} color="#06150e"/>
  </>;
}
