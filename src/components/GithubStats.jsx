import Image from "next/image"

const languageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Go: "#00ADD8",
  Shell: "#89e051",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Java: "#b07219"
}

export default async function GithubStats() {
  const res = await fetch("https://api.github.com/users/jphdevsf/repos?sort=pushed", {
    next: { revalidate: 3600 }
  })

  if (!res.ok) return <div>Unable to load repos.</div>

  const repos = await res.json()
  const {
    owner: { avatar_url }
  } = repos[0]

  return (
    <div className="mt-8 px-4 lg-px-0 max-w-[1440px] mx-auto">
      <h3 className="text-xl font-semibold mb-4">
        <Image
          src={avatar_url}
          alt="avatar picture of Jacob Hernandez"
          width={50}
          height={50}
          className="inline"
        />{" "}
        GitHub Public Repositories
      </h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {repos.map(repo => (
          <li
            key={repo.id}
            className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 transition"
          >
            <a
              href={repo.html_url}
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              {repo.name}
            </a>

            {repo.description && <p className="text-sm text-gray-600 mt-1">{repo.description}</p>}

            <div className="flex items-center gap-3 mt-3">
              {repo.language && (
                <span className="flex items-center gap-1 text-sm text-gray-700">
                  {" "}
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: languageColors[repo.language] || "#ccc" }}
                  />{" "}
                  {repo.language}{" "}
                </span>
              )}

              <span className="text-xs text-gray-500">
                Updated {new Date(repo.pushed_at).toLocaleDateString()}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
