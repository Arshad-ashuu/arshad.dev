import React from "react";
import { Github, ExternalLink } from "lucide-react";

export function mapRepoToProject(repo: any) {
  return {
    title: repo.name,
    description: repo.description ?? "No description provided",
    href: repo.html_url,

    technologies:
      repo.topics?.filter((t: string) => t !== "portfolio") ?? [],

    image: `/projects/${repo.name}.png`,
    video: undefined,

    links: [
      {
        icon: <Github className="h-4 w-4" />,
        type: "GitHub",
        href: repo.html_url,
      },
      repo.homepage
        ? {
            icon: <ExternalLink className="h-4 w-4" />,
            type: "Live",
            href: repo.homepage,
          }
        : null,
    ].filter(Boolean),
  };
}
