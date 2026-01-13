export function mapRepoToProject(repo: any): {
  title: string;
  description: string;
  href: string;
  technologies: string[];
  image?: string;
  video?: string;
  links?: {
    title: string;
    href: string;
  }[];
} {
  return {
    title: repo.name,
    description: repo.description ?? "No description provided",
    href: repo.html_url,
    technologies: repo.topics?.filter(
      (t: string) => t !== "portfolio"
    ) ?? [],
    image: `/projects/${repo.name}.png`,
    video: undefined,
    links: [
      { title: "GitHub", href: repo.html_url },
      repo.homepage && { title: "Live", href: repo.homepage },
    ].filter(Boolean),
  };
}
