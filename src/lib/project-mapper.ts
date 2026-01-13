export function mapRepoToProject(repo: any) {
  return {
    title: repo.name,
    description: repo.description ?? "No description provided",
    href: repo.html_url,

    technologies: repo.topics.filter(
      (t: string) => t !== "portfolio"
    ),

    image: `/projects/${repo.name}.png`, // optional
    video: undefined,

    links: [
      {
        title: "GitHub",
        href: repo.html_url,
      },
      repo.homepage && {
        title: "Live",
        href: repo.homepage,
      },
    ].filter(Boolean),
  };
}
