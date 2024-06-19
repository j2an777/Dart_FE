import { GalleryData } from "@/types/gallery";
import { GalleryRotate } from "../components";
import { GalleryGrid, GalleryScroll, GallerySlide } from "../components/galleryTemplate";

interface SelectTemplateProps {
  template: string;
  galleryData: GalleryData;
}

const SelectTemplate = ({ template, galleryData }: SelectTemplateProps) => {
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
