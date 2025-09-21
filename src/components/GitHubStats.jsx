// components/GitHubStats.jsx

export default function GitHubStats() {
  const githubUsername = "harshini0804"; // <-- IMPORTANT: Replace with your username

  return (
    <section id="github" className="bg-gray-900 text-white py-20 px-4">
      <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
        My GitHub Activity
      </h2>
      
      {/* Use a flex container to arrange the cards */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        
        {/* Overall Stats Card */}
        <img 
          src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=catppuccin_latte&count_private=true`} 
          alt="My GitHub Stats"
          className="max-w-full sm:max-w-md rounded-lg shadow-lg"
        />
        
        {/* Top Languages Card */}
        <img 
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=catppuccin_latte`}
          alt="My Top Languages"
          className="max-w-full sm:max-w-md rounded-lg shadow-lg"
        />
        
        {/* Contribution Streak Card */}
        <img 
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=catppuccin_latte`}
          alt="My Contribution Streak"
          className="max-w-full sm:max-w-md rounded-lg shadow-lg"
        />
        
      </div>
    </section>
  );
}