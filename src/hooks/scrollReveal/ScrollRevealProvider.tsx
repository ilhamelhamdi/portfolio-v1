"use client";

import React from "react";
import useScrollReveal from "./useScrollReveal";

interface ScrollRevealProviderProps {
  children: React.ReactNode;
}

const ScrollRevealProvider: React.FC<ScrollRevealProviderProps> = ({
  children,
}) => {
  useScrollReveal();

  return <>{children}</>;
};

export default ScrollRevealProvider;
