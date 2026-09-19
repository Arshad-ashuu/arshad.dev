import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Arshad",
  initials: "MA",
  url: "https://arshad-dev.vercel.app/",
  location: "Pune, India",
  locationLink: "#",
  description:
    "Cloud Solution Architect at Microsoft. Full-stack background, now building on Azure, IaC, and AI systems.",
  summary:
    "I'm a Cloud Solution Architect working with customers on Azure, infrastructure as code, and AI platform adoption. I started out as a full-stack developer building web and mobile products with the MERN stack and React Native, and that engineering background still shapes how I approach architecture. These days most of my time goes into Terraform and Bicep, landing zones, AKS, CI/CD with GitHub Actions and Azure DevOps, and hands-on work with Azure AI Foundry, GitHub Copilot, and agentic workflows. I like automating the boring parts, documenting what I build so others can repeat it, and turning messy environments into scalable, well-governed ones.",
  avatarUrl: "",
  skills: [
    "Azure",
    "Terraform",
    "Bicep",
    "Docker",
    "GitHub Actions",
    "Jenkins",
    "PowerShell",
    "Python",
    "Azure AI Foundry",
    "GitHub Copilot",
    "React.Js",
    "React Native",
    "MongoDB",
    "PostgreSQL",
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
        url: "https://x.com/Arshad_1_0",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mohammadarshad01474@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Bhavan's Vivekananda College",
      href: "https://www.bhavansvc.ac.in/",
      degree: "Bachelor's Degree of Computer Application (B.C.A)",
      logoUrl: "",
      start: "2022",
      end: "2025",
    },
    {
      school: "Geetanjali Junior College",
      href: "#",
      degree: "Bi.P.C",
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
        "A platform to create music with virtual instruments — invite friends to rooms, chat, record, and publish tracks.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "Firebase",
        "TailwindCSS",
        "Socket.IO",
        "Tone.js",
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
        "Programming language detector — trained and compared multiple models to identify languages from code snippets. IEEE project and research paper.",
      technologies: [
        "Python",
        "Machine Learning",
        "GitHub Gist",
        "Flask",
        "TailwindCSS",
        "HTML",
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
        "A video sharing mobile application built with React Native and Appwrite.",
      technologies: ["React Native", "Appwrite", "Appwrite Auth"],
      links: [
        {
          type: "App",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#",
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
        "Built MusicLab — a platform to create music with virtual instruments, collaborate in rooms, chat, record, and publish tracks.",

      image: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
  Achivements: [
    {
      title: "Fusion Tech Co-ordinator",
      dates: "2024 - 2025",
      location: "Bhavan's Vivekananda College",
      description:
        "Head Coordinator of the Fusion Tech Club at Bhavan's Vivekananda College.",
      image: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "National Science Day 2024",
      dates: "2024",
      location: "Bhavan's Vivekananda College",
      description:
        "Secured first place in the Android app development contest conducted by my university — built a cake ordering app and a news app.",
      image: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "National Science Day 2023",
      dates: "2023",
      location: "Bhavan's Vivekananda College",
      description:
        "Secured second place in the Android app development contest conducted by my university — built a simple video sharing app.",
      image: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
