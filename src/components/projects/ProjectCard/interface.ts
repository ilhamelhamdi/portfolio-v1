import { Project } from "@/models/project"
import { StaticImageData } from "next/image"

export interface ProjectCardProps {
  project: Project
  isOdd: boolean
  className?: string
}