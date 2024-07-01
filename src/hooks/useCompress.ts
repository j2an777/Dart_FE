import imageCompression from 'browser-image-compression';

export const compressImage = async (imageFile: File) => {
  const options = {
    maxSizeMB: 0.8,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  };
  try {
    const compressedFile = await imageCompression(imageFile, options);
    return compressedFile;
  } catch (error) {
    console.error(error);
  }
};

export const isValidImageType = (file: File) => {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
  return validTypes.includes(file.type);
};

export const blobToFile = (blob: Blob, fileName: string): File => {
  const file = new File([blob], fileName, { type: blob.type, lastModified: Date.now() });
  return file;
};