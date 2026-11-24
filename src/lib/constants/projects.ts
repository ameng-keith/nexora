export type Project = {
  name: string;
  imgSrc: string;
  category?: string;
  tagline?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Nexora Core",
    category: "Infrastructure",
    tagline: "High-performance intelligent infrastructure engine for modern cloud environments.",
    imgSrc: "/projects/work-1.jpg",
    link: "https://github.com/ameng-keith/nexora",
  },
  {
    name: "Project Nova (WIP)",
    category: "AI & Agents",
    tagline: "Autonomous multi-agent orchestration framework currently under active development.",
    imgSrc: "/projects/work-2.jpg",
    link: "https://github.com/ameng-keith/nexora",
  },
  {
    name: "Aura Intelligence",
    category: "Generative UI",
    tagline: "Ethereal real-time generative UI and design system powered by deep learning.",
    imgSrc: "/projects/work-3.jpg",
    link: "https://github.com/ameng-keith/nexora",
  },
  {
    name: "Singularity Lab",
    category: "Quantum Research",
    tagline: "Astrophysical deep compute simulations exploring cosmic event horizon physics.",
    imgSrc: "/avatar-eht.png",
    link: "https://github.com/ameng-keith/nexora",
  },
  {
    name: "Cyber Horizon",
    category: "Decentralized",
    tagline: "Next-generation privacy-preserving data protocol and distributed security grid.",
    imgSrc: "/projects/work-4.jpg",
    link: "https://github.com/ameng-keith/nexora",
  },
];
