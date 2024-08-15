import Link from "next/link";
import { ContactLinkProps } from "./interface";
import { ArrowLink } from "@/icons/ArrowLink";
import { LetterAnimation } from "@/components/utils/LetterAnimation";

export const ContactLink: React.FC<ContactLinkProps> = (props) => (
  <Link href={props.link} target="__blank" className={"flex items-center gap-x-2 " + props.className}>
    <ArrowLink className="fill-inherit" />
    <LetterAnimation text={props.title} withUnderline className="after:bg-black dark:after:bg-white"/>
  </Link>
);
