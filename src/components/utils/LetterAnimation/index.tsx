"use client";

import { useEffect, useRef } from "react";
import { LetterAnimationProps } from "./interface";
import classNames from "classnames";
import gsap from "gsap";

export const LetterAnimation: React.FC<LetterAnimationProps> = (props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isIntersected = useRef(false);

  function animateIn() {
    gsap.fromTo(
      wrapperRef.current!.querySelectorAll("span"),
      { y: "2em" },
      {
        y: "1em",
        duration: props.duration || 0.5,
        delay: props.delay || 0,
        stagger: 0.05,
        ease: "expo.out",
      }
    );
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (isIntersected.current) return;
        animateIn();
        isIntersected.current = true;
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(wrapperRef.current!);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let tween = gsap.fromTo(
      wrapperRef.current!.querySelectorAll("span"),
      { y: "1em" },
      {
        y: 0,
        duration: props.duration || 0.5,
        stagger: 0.05,
        ease: "expo.inOut",
      }
    );
    tween.pause();

    const mouseEnterHandler = () => {
      tween.play();
    };

    const mouseLeaveHandler = () => {
      tween.reverse();
    };

    wrapperRef.current!.addEventListener("mouseenter", mouseEnterHandler);
    wrapperRef.current!.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      tween.revert();
      if (!wrapperRef.current) return;
      wrapperRef.current!.removeEventListener("mouseenter", mouseEnterHandler);
      wrapperRef.current!.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }, []);

  return (
    <span
      ref={wrapperRef}
      className={classNames(
        `inline-block overflow-hidden relative leading-none ${props.className}`,
        {
          "after:content-[''] after:absolute after:w-full after:scale-x-[0] after:h-[2px] after:bottom-0 after:left-0 after:origin-bottom-right after:transition-transform after:duration-500 after:hover:scale-x-100 after:hover:origin-bottom-left":
            props.withUnderline,
        }
      )}
    >
      {props.text.split("").map((letter, index) => (
        <span
          key={index}
          data-letter={letter}
          className={`inline-block whitespace-pre-wrap relative translate-y-[2em] before:content-[attr(data-letter)] before:block before:absolute before:translate-y-[-1em]`}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};
