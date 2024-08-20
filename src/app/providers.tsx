/* eslint-disable react/display-name */
import { ThemeProvider } from "@/contexts";
import { MenuOpenProvider } from "@/contexts/MenuOpenContext";
import { PageTransitionProvider } from "@/contexts/PageTransitionContext";
import ScrollRevealProvider from "@/hooks/scrollReveal/ScrollRevealProvider";
import { ReactNode } from "react";

type ProviderComponent = React.FC<{ children: ReactNode }>;

const compose = (providers: ProviderComponent[]) =>
  providers.reduce((Prev, Curr) => ({ children }) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
  ));

export const Providers = compose([
  ThemeProvider,
  MenuOpenProvider,
  PageTransitionProvider,
  ScrollRevealProvider,
]);
