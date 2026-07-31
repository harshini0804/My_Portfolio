export default function GitHubStats() {
  const githubUsername = "harshini0804";

  return (
    <section id="github" className="bg-gray-900 text-white py-20 px-4 sm:px-6">
      <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
        My GitHub Activity
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8">
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=catppuccin_latte`}
          alt="My Top Languages"
          className="w-full max-w-xs sm:max-w-sm rounded-lg shadow-lg"
        />
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=catppuccin_latte`}
          alt="My Contribution Streak"
          className="w-full max-w-xs sm:max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
