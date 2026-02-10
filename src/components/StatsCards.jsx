import { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

// --- LEETCODE CARD ---
export function LeetCodeCard({ username }) {
  const [stats, setStats] = useState(null);

  useEffect(() => {
  // Use your resume handle: surabhiver123
  fetch(`https://leetcode-api-faisalshohag.vercel.app/surabhiver123`) 
    .then(res => res.json())
    .then(data => {
      // Mapping the data from this alternative API
      setStats({
        totalSolved: data.totalSolved,
        easySolved: data.easySolved,
        mediumSolved: data.mediumSolved,
        hardSolved: data.hardSolved
      });
    })
    .catch(err => console.error("LeetCode API Error:", err));
}, []);

  if (!stats) return <div className="animate-pulse bg-slate-800 h-full rounded-3xl" />;

  return (
    <div className="p-6 bg-[#2c2c2c] border border-yellow-500/20 rounded-3xl h-full flex flex-col justify-between">
      <div>
        <h3 className="text-yellow-500 font-bold flex items-center gap-2">
          <span className="text-2xl">L</span> LeetCode
        </h3>
        <p className="text-3xl font-bold text-white mt-2">{stats.totalSolved}</p>
        <p className="text-xs text-slate-400">Solved across all difficulties</p>
      </div>
      <div className="flex justify-between text-[10px] mt-4">
        <span className="text-emerald-400">Easy: {stats.easySolved}</span>
        <span className="text-yellow-400">Med: {stats.mediumSolved}</span>
        <span className="text-red-400">Hard: {stats.hardSolved}</span>
      </div>
    </div>
  );
}

// --- GITHUB CALENDAR CARD ---
export function GitHubStatsCard({ username }) {
  return (
    <div className="p-6 bg-[#0d1117] border border-white/10 rounded-3xl h-full flex flex-col justify-center">
      <h3 className="text-white font-bold mb-4 flex items-center gap-2">
         GitHub Activity
      </h3>
      <div className="flex justify-center" data-testid="github-calendar">
        <GitHubCalendar 
          username={username} 
          blockSize={12} 
          blockMargin={4} 
          fontSize={12}
          colorScheme="dark" // Forces dark mode text colors
          theme={{
            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
          }}
          labels={{
            totalCount: "{{count}} contributions in the last year",
          }}
        />
      </div>
    </div>
  );
}