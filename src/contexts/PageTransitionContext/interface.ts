export interface PageTransitionContextInter {
  isTransitioning: boolean;
  setTransitioning: (isTransitioning: boolean) => void;
}

export interface PageTransitionProviderProps {
  children: React.ReactNode;
}
