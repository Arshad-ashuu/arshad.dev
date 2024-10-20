import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Arshad",
  initials: "MA",
  url: "https://arshad-dev.vercel.app/",
  location: "Hyderabed",
  locationLink: "#",
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
    "SQL",
    "PostGreSQL",
    "Express.js",
    "socket.io",
    "React Native",
    "Python",
    "Go",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/Achivements", icon: NotebookIcon, label: "Achivements" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "mohammadarshad01474@gmail.com",
    tel: "+91 9346108603",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Arshad-ashuu",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammad-arshad-b47b60294",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Arshad_1_0 ",
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
      href: "https://www.bhavansvc.ac.in/",
      degree: "Bachelor's Degree of Computer Application (B.C.A)",
      logoUrl: "",
      start: "2022",
      end: "2025",
    },
    {
      school: "Geetanjali Junior collge",
      href: "#",
      degree: "Bi.p.c",
      logoUrl: "",
      start: "2020",
      end: "2022",
    },
    {
      school: "Mahathi Vidya Niketan High School",
      href: "#",
      degree: "S.S.C",
      logoUrl: "",
      start: "2019",
      end: "2020",
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
      href: "#",
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
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Drop",
      href: "#",

      active: true,
      description:
        "Developed a video sharing Native application to share videos.",
      technologies: ["React Native", "Appwrite", "Appwrite Auth"],
      links: [
        {
          type: "App",
          href: "#",
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
   
  ],
  hackathons: [
    {
      title: "UpSkill Mafia",
      dates: "May 1 - 15th, 2024",
      location: "Delhi",
      description:
        "MusicLab a Platform to create music using virtual instruments ,invite friends to rooms,chat ,Publish music and record music.",

      image: "",
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
      image: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "National Science Day 2024",
      dates: "2024",
      location: "Bhavans Vivkananda college",
      description:
        "secured first place in android app development counducted by my University developed cake order app and news app",
      image: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "National Science Day 2023",
      dates: "2023",
      location: "Bhavans Vivkananda college",
      description:
        "secured second place in android app development counducted by my University developed simple video sharing app",
      image: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
