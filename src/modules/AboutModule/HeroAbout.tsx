import Image from "next/image";
import Link from "next/link";
import profileImage from "../../../public/assets/images/profile.png";
import TiltCard from "@/components/common/TiltCard";

export const HeroAbout: React.FC = () => (
  <section className="relative h-screen container mx-auto max-w-screen-lg flex flex-col justify-center ">
    <h1 className="font-bold text-[160px] text-dark-blue dark:text-salmon tracking-wider z-10 w-fit">
      Hello!
    </h1>
    <p className="text-[32px] dark:text-white w-[60%] tracking-wide z-10">
      My name is{" "}
      <span className="font-bold dark:text-rose">Ilham Abdillah Alhamdi</span>,
      but you can call me{" "}
      <span className="font-bold dark:text-rose">Hamdi</span>. I&apos;m an
      undergraduate Computer Science student at{" "}
      <Link href="https://ui.ac.id/" className="font-bold  dark:text-rose">
        University of Indonesia
      </Link>
      .
    </p>
    <TiltCard className="absolute my-auto right-0">
      <div className="bg-cream dark:bg-dark-blue shadow-[inset_0_20px_40px_-10px_rgba(0,0,0,0.2)] rounded overflow-clip filter">
        <Image
          src={profileImage}
          height={500}
          width={500}
          alt="Hamdi's profile image"
        />
      </div>
    </TiltCard>
  </section>
);
