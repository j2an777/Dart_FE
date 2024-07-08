import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei';
import { easing } from 'maath';
import getUuid from 'uuid-by-string';
import * as S from './styles';
import { GalleryData, GalleryDataProps, GalleryImages } from '@/types/gallery';
import { createThreeImages } from '@/consts/threed';
import { CircleLoader, GalleryDetailPortal, Icon } from '@/components';
import { galleryDetailStore } from '@/stores/modal';

const GOLDENRATIO = 1.61803398875;

const GalleryThreed = ({ galleryData }: GalleryDataProps) => {
  const [page, setPage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { open } = galleryDetailStore();
  const itemsPerPage = 9;

  const threeImagesData = createThreeImages(galleryData.images);
  const pageCount = Math.ceil(threeImagesData.length / itemsPerPage);

  const currentImages = threeImagesData.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  const onHandleChange = (name: string) => {
    if (name === 'previous') {
      setPage((prevPage) => (prevPage + 1) % pageCount);
    } else {
      setPage((prevPage) => (prevPage - 1 + pageCount) % pageCount);
    }
  }

  useEffect(() => {
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => {
      setIsLoaded(true);
    };

    const loader = new THREE.TextureLoader(loadingManager);
    currentImages.forEach((img) => {
      loader.load(img.url);
    });
  }, [currentImages]);

  if (!isLoaded) return <CircleLoader />;

  return (
    <S.Container>
      <Canvas dpr={[1, 10]} camera={{ fov: 70, position: [0, 2, 25] }} style={{ background: 'transparent' }}>
        <group position={[0, -0.5, 0]}>
          <Frames images={currentImages} galleryData={galleryData} openDetail={open} />
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={80}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505"
              metalness={0.5}
              mirror={1}
            />
          </mesh>
        </group>
        <Environment preset="city" />
      </Canvas>
      <S.BtnBlock>
        <S.Btn className='previous' onClick={() => onHandleChange('previous')}><Icon value='leftArrow' size={50} color='white'/></S.Btn>
        <S.Btn className='next' onClick={() => onHandleChange('next')}><Icon value='rightArrow' size={50} color='white'/></S.Btn>
      </S.BtnBlock>
      <GalleryDetailPortal />
    </S.Container>
  )
}

export default GalleryThreed;

interface ImageData {
  position: [number, number, number];
  rotation: [number, number, number];
  url: string;
  title: string;
}

function Frames({ images, galleryData, openDetail, q = new THREE.Quaternion(), p = new THREE.Vector3() }: { images: ImageData[], galleryData: GalleryData, openDetail: (gallery: GalleryImages) => void, q?: THREE.Quaternion, p?: THREE.Vector3 }) {
  const ref = useRef<THREE.Group>(null);
  const clicked = useRef<THREE.Object3D | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (ref.current && activeImage) {
      const found = ref.current.getObjectByName(activeImage);
      if (found && found.parent) {
        found.parent.updateWorldMatrix(true, true);
        found.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
        found.parent.getWorldQuaternion(q);
        clicked.current = found;
      } else {
        p.set(0, 0, 5.5); // 초기 로드 시 더 멀리 이동
        q.identity();
        clicked.current = null;
      }
    } else {
      p.set(0, 0, 5.5); // 초기 로드 시 더 멀리 이동
      q.identity();
    }
  }, [activeImage, p, q]);

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const clickedObjectName = e.object.name;
        if (activeImage === clickedObjectName) {
          setActiveImage(null);
        } else {
          setActiveImage(clickedObjectName);
        }
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        const clickedObjectName = e.object.name;
        const clickedImage = galleryData.images.find(img => getUuid(img.image) === clickedObjectName);
        if (clickedImage) {
          openDetail(clickedImage);
        }
      }}
      onPointerMissed={() => setActiveImage(null)}>
      {images.map((props) => <Frame key={props.url} {...props} />)}
    </group>
  );
}

interface CustomMaterial extends THREE.MeshBasicMaterial {
  zoom: number;
}

function Frame({ url, title, ...props }: { url: string, title: string, position: [number, number, number], rotation: [number, number, number] }) {
  const image = useRef<THREE.Mesh>(null);
  const frame = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = getUuid(url);
  const isActive = false; // 활성 상태를 별도로 관리하지 않음

  useCursor(hovered);

  useFrame((state, dt) => {
    if (image.current && frame.current) {
      const material = image.current.material as CustomMaterial;

      material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;

      const frameMaterial = frame.current.material as THREE.MeshBasicMaterial;
      easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.9 : 1), 0.9 * (!isActive && hovered ? 0.95 : 1), 1], 0.1, dt);
      easing.dampC(frameMaterial.color, hovered ? 'white' : 'white', 0.1, dt);
    }
  });

  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text maxWidth={0.3} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.045}>
        {title}
      </Text>
    </group>
  );
}