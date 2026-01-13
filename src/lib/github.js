const BASE_URL = "https://api.github.com";
const GITHUB_USER = "Arshad-ashuu";

export async function fetchPortfolioRepos(token) {
  const res = await fetch(
    `${BASE_URL}/users/${GITHUB_USER}/repos?per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json"
      }
    }
  );
  const allRepos = await res.json();

  return allRepos.filter(repo =>
    repo.topics?.includes("portfolio")
  );
}
