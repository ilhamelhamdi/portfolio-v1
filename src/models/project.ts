import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  images: [
    {
      src: string | StaticImageData;
      height: number;
      width: number;
      alt: string;
    }
  ];
}
