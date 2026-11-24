import { Heart } from "lucide-react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`text-center py-8 w-full mt-4 ${className}`}>
      <div className="flex items-center justify-center gap-2 text-xs text-foreground/30 hover:text-foreground transition-colors duration-300">
        <span>Crafted with</span>
        <Heart size={12} className="text-amber-500/60 hover:text-amber-400 fill-current transition-colors duration-300" />
        <span>by</span>
        <a 
          href="https://github.com/ameng-keith/nexora"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors duration-300 hover:underline font-medium"
        >
          Nexora Lab (枢光)
        </a>
      </div>
    </footer>
  );
}
