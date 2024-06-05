import { galleryData } from "@/types/gallery";

const fetchGalleryData = async (): Promise<galleryData> => {
    const response = await fetch('/api/galleries');
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    return response.json();
};

export default fetchGalleryData;