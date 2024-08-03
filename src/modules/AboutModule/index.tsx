import { DetailAbout } from "./DetailAbout";
import { HeroAbout } from "./HeroAbout";

export const AboutModule: React.FC = () => {
  return (
    <main>
      <HeroAbout />
      <DetailAbout />
    </main>
  );
};
