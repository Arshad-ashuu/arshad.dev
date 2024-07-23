import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Arshad",
  initials: "MA",
  url: "https://dillion.io",
  location: "Hyderabed",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "fullstack developer. I love building things .",
  summary:
    "Fullstack developer with experience MERN Stack and React Native , I love contributing to open source pojects and communities Currently persuing BCA from Bhavans Vivekananda college.",
  avatarUrl: "",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Mongodb",
    "Express.js",
    "socket.io",
    "React Native",
    "Python",
    "Go",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Bhavans Vivekananda college",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Application (B.C.A)",
      logoUrl: "",
      start: "2022",
      end: "2025",
    },
    {
      school: "Geetanjali Junior collge",
      href: "https://wlu.ca",
      degree: "Bi.p.c",
      logoUrl: "",
      start: "2022",
      end: "2020",
    },
    {
      school: "Mahathi Vidya Niketan High School",
      href: "",
      degree: "S.S.C",
      logoUrl: "",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "MusicLab",
      href: "https://musiclab.onrender.com",
      active: true,
      description:
        "MusicLab a Platform to create music using virtual instruments ,invite friends to rooms,chat ,Publish music and record music.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Typescript",
        "MongoDb",
        "Firebase",
        "TailwindCSS",
        "socket.io",
        "tone.js",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://musiclab.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/djhqjeifo/video/upload/v1721677512/Untitled_video_-_Made_with_Clipchamp_1_oqqhka.mp4",
    },
    {
      title: "Poland",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Program Language detector trained differemt models to detect variours languages using code snippets [ IEEE project & Research paper].",
      technologies: [
        "Python",
        "Machine Learning",
        "Github Gist",
        "Flask",
        "TailwindCSS",
        "html",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Drop",
      href: "https://llm.report",

      active: true,
      description:
        "Developed a video sharing Native application to share videos.",
      technologies: ["React Native", "Appwrite", "Appwrite Auth"],
      links: [
        {
          type: "App",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/poland.png",
      video: "",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "UpSkill Mafia",
      dates: "May 1 - 15th, 2024",
      location: "Delhi",
      description:
        "MusicLab a Platform to create music using virtual instruments ,invite friends to rooms,chat ,Publish music and record music.",

      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
  Achivements: [
    {
      title: "Fusion Tech Co-ordinator",
      dates: "2024 - 2025",
      location: "Bhavans Vivkananda college",
      description:
        "Head Coordinator of Fusion Tech Club of Bhavans Vivkananda college ",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
