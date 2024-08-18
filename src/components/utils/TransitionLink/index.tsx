"use client";

import { PageTrasitionContext } from "@/contexts/PageTransitionContext";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  children,
  className,
  onClick,
}) => {
  const router = useRouter();
  const { isTransitioning, setTransitioning } =
    useContext(PageTrasitionContext);

  const sleep = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setTransitioning(true);
    await sleep(200);
    onClick?.(e);
    router.push(href.toString());
  };

  return (
    <Link href={href} className={className} onClick={handleTransition}>
      {children}
    </Link>
  );
};
