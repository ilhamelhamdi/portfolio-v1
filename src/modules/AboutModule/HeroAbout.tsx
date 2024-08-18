"use client";

import Image from "next/image";
import Link from "next/link";
import profileImage from "../../../public/assets/images/profile.png";
import TiltCard from "@/components/utils/TiltCard";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export const HeroAbout: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline()
      .fromTo(
        headlineRef.current,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
      )
      .fromTo(
        paragraphRef.current,
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" },
        "-=0.2"
      )
      .fromTo(
        imageRef.current,
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" },
        "-=0.2"
      );
  }, []);
  return (
    <section className="relative h-screen container max-w-screen-lg mx-auto px-8 lg:px-4  flex flex-col justify-center items-center sm:items-start">
      <h1
        ref={headlineRef}
        className="w-full font-bold text-headline text-dark-blue dark:text-salmon tracking-wider z-10"
      >
        Hello!
      </h1>
      <p
        ref={paragraphRef}
        className="mb-10 sm:mb-0 text-body-big dark:text-white sm:w-[60%] tracking-wide z-10"
      >
        My name is{" "}
        <span className="font-bold dark:text-rose">Ilham Abdillah Alhamdi</span>
        , but you can call me{" "}
        <span className="font-bold dark:text-rose">Hamdi</span>. I&apos;m an
        undergraduate Computer Science student at{" "}
        <Link href="https://ui.ac.id/" className="font-bold  dark:text-rose">
          University of Indonesia
        </Link>
        .
      </p>
      <TiltCard className="sm:absolute sm:my-auto sm:right-0 sm:mr-8 lg:mr-0 px-8 w-[320px] md:w-[400px] lg:w-[480px]">
        <div
          ref={imageRef}
          className="bg-cream dark:bg-dark-blue shadow-[inset_0_20px_40px_-10px_rgba(0,0,0,0.2)] rounded overflow-clip filter"
        >
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
};
