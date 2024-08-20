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
    <footer className="w-full container mx-auto max-w-screen-lg py-4 lg:py-10 px-6 sm:px-8 mb-[10vh] tracking-wider">
      <span className="scroll-reveal block text-button text-dark-blue dark:text-salmon">
        Want to start a Project?
      </span>
      <Link
        href="mailto:ilham.abdillah.alhamdi@gmail.com"
        target="__blank"
        className="block text-[40px] min-[480px]:text-[64px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-bold text-tosca dark:text-rose mb-4"
      >
        <LetterAnimation
          text="Contact Me"
          withUnderline={true}
          className="after:bg-tosca dark:after:bg-rose"
        />
      </Link>
      <div className="flex gap-x-2 sm:gap-x-8 text-body font-medium text-dark-blue dark:text-rose fill-dark-blue dark:fill-rose">
        {CONTACTS.map((contact) => (
          <ContactLink key={contact.link} {...contact} />
        ))}
      </div>
    </footer>
  );
};
