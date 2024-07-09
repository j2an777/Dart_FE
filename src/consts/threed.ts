import defaultItem from '@/assets/images/galleryDefault.png';

export interface ImageData {
  position: [number, number, number];
  rotation: [number, number, number];
  url: string;
  title: string;
}

const positions: [number, number, number][] = [
  [0, 0, 1.5],
  [-0.8, 0, -0.6],
  [0.8, 0, -0.6],
  [-1.75, 0, 0.25],
  [-2.15, 0, 1.5],
  [-2, 0, 2.75],
  [1.75, 0, 0.25],
  [2.15, 0, 1.5],
  [2, 0, 2.75]
];

const rotations: [number, number, number][] = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, Math.PI / 2.5, 0],
  [0, Math.PI / 2.5, 0],
  [0, Math.PI / 2.5, 0],
  [0, -Math.PI / 2.5, 0],
  [0, -Math.PI / 2.5, 0],
  [0, -Math.PI / 2.5, 0]
];

export const createThreeImages = (images: { image: string, imageTitle: string }[]): ImageData[] => {
  const result = images.map((img, index) => ({
    position: positions[index % positions.length],
    rotation: rotations[index % rotations.length],
    url: img.image,
    title: img.imageTitle
  }));
  
  while (result.length < 9) {
    result.push({
      position: positions[result.length % positions.length],
      rotation: rotations[result.length % rotations.length],
      url: defaultItem,
      title: '정보 없음'
    });
  }

  return result;
};