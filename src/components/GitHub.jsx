import { useState, useEffect } from "react";

function Github() {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = "abhishekguptaji"; // 🔹 Replace with your GitHub username

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user details first
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userJson = await userResponse.json();
        setUserData(userJson);

        // Fetch all public repositories dynamically
        const repoResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${userJson.public_repos}`
        );
        const repoJson = await repoResponse.json();
        setRepos(repoJson);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading GitHub Data...
      </div>
    );

  if (!userData)
    return <div className="text-center text-red-500 mt-10">Failed to load data.</div>;

  return (
    <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT: Profile Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <img
          src={userData.avatar_url}
          alt={userData.name}
          className="rounded-full mx-auto mb-4 border-4 border-gray-200 w-48 h-48"
        />
        <h2 className="text-3xl font-semibold">{userData.name}</h2>
        <p className="text-gray-600">@{userData.login}</p>
        {userData.bio && <p className="text-gray-500 mt-2">{userData.bio}</p>}

        <div className="flex justify-center gap-6 mt-4 text-gray-700">
          <span>Followers: <b>{userData.followers}</b></span>
          <span>Following: <b>{userData.following}</b></span>
          <span>Repos: <b>{userData.public_repos}</b></span>
        </div>

        <a
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition"
        >
          View GitHub Profile
        </a>

        {/* Personal Introduction */}
        <div className="mt-8 text-left text-gray-700 leading-relaxed">
          <p>👋 Hello everyone! My name is <b>Abhishek Gupta</b>, and I am currently in my final year of B.Tech in Computer Science and Engineering at <b>Greater Noida Institute of Technology</b>.</p>

          <p className="mt-3">
            🌱 I am expanding my expertise in <b>Software Development</b>, <b>Machine Learning</b>, and <b>Database Management</b>, with a focus on building scalable and intelligent solutions.
          </p>

          <p className="mt-3">
            👯 I’m looking for opportunities to collaborate on software development projects where I can contribute and grow.
          </p>

          <p className="mt-3">
            📫 Reach me at: <a href="mailto:abhishekgupta1864@gmail.com" className="text-blue-600 underline">abhishekgupta1864@gmail.com</a>
          </p>
        </div>
      </div>

      {/* RIGHT: Repository Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center md:text-left">
          Latest Repositories
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition"
            >
              <h4 className="text-lg font-bold text-gray-800 mb-1">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {repo.name}
                </a>
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                {repo.description || "No description provided."}
              </p>
              <div className="flex justify-between text-sm text-gray-700">
                <span> Star: {repo.stargazers_count || 0 }</span>
               
                <span>Tech: {repo.language || "N/A"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Github;
