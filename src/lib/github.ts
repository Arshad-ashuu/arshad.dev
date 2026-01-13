const GITHUB_USER = "Arshad-ashuu";

export async function getPortfolioProjects() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 }, // ISR
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub repos");
  }

  const repos = await res.json();

  // ONLY repos marked with topic `portfolio`
  return repos.filter((repo: any) =>
    repo.topics?.includes("portfolio")
  );
}
