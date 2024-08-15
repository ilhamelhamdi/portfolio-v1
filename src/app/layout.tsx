import { Layout } from "@/components";
import "../../public/styles/globals.css";
import { Providers } from "./providers";

import type { Metadata } from "next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Suspense } from "react";

gsap.registerPlugin(ScrollTrigger);

export const metadata: Metadata = {
  title: "Ilham Abdillah Alhamdi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
