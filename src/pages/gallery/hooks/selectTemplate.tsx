import { GalleryData } from "@/types/gallery";
import { GalleryRotate } from "../components";
import { GalleryGrid, GalleryScroll, GallerySlide } from "../components/galleryTemplate";
import Mobile from "../components/galleryTemplate/mobile";
import { useEffect, useState } from "react";

interface SelectTemplateProps {
  template: string;
  galleryData: GalleryData;
}

const SelectTemplate = ({ template, galleryData }: SelectTemplateProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  if (isMobile) {
    return <Mobile galleryData={galleryData} />;
  }
  
  switch (template) {
    case "one":
      return <GalleryRotate galleryData={galleryData} />;
    case "two":
      return <GallerySlide galleryData={galleryData} />;
    case "three":
      return <GalleryGrid galleryData={galleryData} />;
    case "four":
      return <GalleryScroll galleryData={galleryData} />;
    default:
      return <div>Invalid template</div>;
  }
}

export default SelectTemplate;
