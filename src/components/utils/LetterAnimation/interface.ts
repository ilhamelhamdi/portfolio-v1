export interface LetterAnimationProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  onAnimationEnd?: () => void;
  withUnderline?: boolean;
}
