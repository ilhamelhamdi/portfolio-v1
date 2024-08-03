import Link from "next/link";
import { ContactLinkProps } from "./interface";
import { ArrowLink } from "@/icons/ArrowLink";

export const ContactLink: React.FC<ContactLinkProps> = (props) => (
  <Link href={props.link} className="flex items-center gap-x-2">
    <ArrowLink className="fill-inherit" />
    <span>{props.title}</span>
  </Link>
);
