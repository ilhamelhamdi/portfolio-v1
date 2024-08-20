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
    type: "image" | "video";
    src: string;
    height: number;
    width: number;
    alt: string;
  }[];
}
