import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  year: string;
  github?: string;
  demo?: string;
  role?: string;
  collaborator?: {
    name: string;
    github: string;
  }[];
  images: {
    src: string | StaticImageData;
    height: number;
    width: number;
    alt: string;
  }[];
}
