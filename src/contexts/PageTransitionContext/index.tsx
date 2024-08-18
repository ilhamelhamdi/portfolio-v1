"use client";

import { createContext, useState } from "react";
import {
  PageTransitionContextInter,
  PageTransitionProviderProps,
} from "./interface";

const initialPageTransition: PageTransitionContextInter = {
  isTransitioning: false,
  setTransitioning: (isTransitioning: boolean) => {},
};

export const PageTrasitionContext = createContext<PageTransitionContextInter>(
  initialPageTransition
);

export const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({
  children,
}) => {
  const [isTransitioning, setTransitioning] = useState<boolean>(false);
  return (
    <PageTrasitionContext.Provider
      value={{ isTransitioning, setTransitioning }}
    >
      {children}
    </PageTrasitionContext.Provider>
  );
};
