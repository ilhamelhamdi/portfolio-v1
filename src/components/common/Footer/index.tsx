import Link from "next/link";
import { ContactLinkProps } from "./ContactLink/interface";
import { ContactLink } from "./ContactLink";
import { LetterAnimation } from "../../utils/LetterAnimation";

const CONTACTS: ContactLinkProps[] = [
  {
    title: "Github",
    link: "https://www.github.com/ilhamelhamdi",
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/ilham-abdillah/",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/ilham_elhamdi",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto max-w-screen-lg py-10">
      <span className="scroll-reveal text-[48px] text-dark-blue dark:text-salmon">
        Want to start a Project?
      </span>
      <Link
        href="mailto:ilham.abdillah.alhamdi@gmail.com"
        target="__blank"
        className="text-[120px] font-bold text-tosca dark:text-rose"
      >
        <LetterAnimation
          text="Contact Me"
          withUnderline={true}
          className="after:bg-tosca dark:after:bg-rose"
        />
      </Link>
      <div className="flex gap-x-8 text-[24px] font-medium text-dark-blue dark:text-rose fill-dark-blue dark:fill-rose">
        {CONTACTS.map((contact) => (
          <ContactLink
            key={contact.link}
            {...contact}
            className="scroll-reveal"
          />
        ))}
      </div>
    </footer>
  );
};
