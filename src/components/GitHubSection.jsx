import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi';

const GITHUB_USERNAME = 'amansinha11-dev';
const STATS_THEME = 'tokyonight';

const GitHubSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const reposRef = useRef(null);
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  // Fetch live GitHub data
  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6&type=public`
          ),
        ]);
        if (userRes.ok) {
          setProfile(await userRes.json());
        } else {
          setFetchError(true);
        }
        if (reposRes.ok) {
          const data = await reposRes.json();
          setRepos(data.filter((r) => !r.fork).slice(0, 6));
        } else {
          setFetchError(true);
        }
      } catch {
        setFetchError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchGitHub();
  }, []);

  // GSAP scroll animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const triggers = [];

    const t1 = gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    if (t1.scrollTrigger) triggers.push(t1.scrollTrigger);

    const t2 = gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60, filter: 'blur(8px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    if (t2.scrollTrigger) triggers.push(t2.scrollTrigger);

    const t3 = gsap.fromTo(
      reposRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    if (t3.scrollTrigger) triggers.push(t3.scrollTrigger);

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="github"
      className="relative w-full min-h-screen overflow-hidden bg-black py-20"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-violet-400 to-purple-500 rounded-full opacity-30 animate-pulse"
              style={{
                width: `${1 + (i % 4)}px`,
                height: `${1 + (i % 4)}px`,
                top: `${(i * 8) % 100}%`,
                left: `${(i * 13) % 100}%`,
                animationDelay: `${(i * 0.4) % 3}s`,
              }}
            />
          ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array(48)
            .fill(null)
            .map((_, idx) => (
              <div key={idx} className="border border-gray-400/20" />
            ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-14" ref={titleRef}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiGithub className="w-10 h-10 text-violet-400" />
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent tracking-wider">
              GitHub
            </h2>
          </div>
          {profile && (
            <p className="text-gray-400 text-lg">
              <span className="text-violet-400 font-semibold">{profile.public_repos}</span> public repos
              &nbsp;·&nbsp;
              <span className="text-violet-400 font-semibold">{profile.followers}</span> followers
              &nbsp;·&nbsp;
              <span className="text-violet-400 font-semibold">{profile.following}</span> following
            </p>
          )}
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-700 mx-auto rounded-full mt-4" />
        </div>

        {/* Live stat cards */}
        <div
          ref={cardsRef}
          className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mb-14"
        >
          {/* Stats card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-gray-900/80 rounded-2xl p-1 overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=${STATS_THEME}&hide_border=true&count_private=true&bg_color=0d1117&title_color=a78bfa&icon_color=7c3aed&text_color=c4b5fd`}
                alt="GitHub Stats"
                className="rounded-xl w-full max-w-xs sm:max-w-sm"
                loading="lazy"
              />
            </div>
          </div>

          {/* Streak card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-gray-900/80 rounded-2xl p-1 overflow-hidden">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=${STATS_THEME}&hide_border=true&background=0d1117&ring=7c3aed&fire=a78bfa&currStreakLabel=c4b5fd`}
                alt="GitHub Streak"
                className="rounded-xl w-full max-w-xs sm:max-w-sm"
                loading="lazy"
              />
            </div>
          </div>

          {/* Top languages card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500" />
            <div className="relative bg-gray-900/80 rounded-2xl p-1 overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=${STATS_THEME}&hide_border=true&bg_color=0d1117&title_color=a78bfa&text_color=c4b5fd`}
                alt="Top Languages"
                className="rounded-xl w-full max-w-xs sm:max-w-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Live repositories */}
        <div ref={reposRef}>
          <h3 className="text-2xl font-bold text-gray-200 text-center mb-8">
            Latest Repositories
          </h3>

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="w-10 h-10 border-4 border-violet-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : fetchError && repos.length === 0 ? (
            <p className="text-center text-gray-400">
              Unable to load GitHub data. Visit{' '}
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline"
              >
                github.com/{GITHUB_USERNAME}
              </a>{' '}
              to see the repositories.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between p-5 bg-gray-900/60 border border-violet-500/10 rounded-2xl hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
                >
                  {/* Glow on hover */}
                  <div className="absolute -inset-px bg-gradient-to-r from-violet-600/10 to-purple-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-gray-100 group-hover:text-violet-400 transition-colors duration-300 truncate text-sm">
                        {repo.name}
                      </h4>
                      <FiExternalLink className="w-4 h-4 text-gray-500 group-hover:text-violet-400 flex-shrink-0 transition-colors duration-300 mt-0.5" />
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 min-h-[2.5rem]">
                      {repo.description || 'No description provided.'}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-xs text-gray-400">
                        <span className="w-2.5 h-2.5 rounded-full bg-violet-500 inline-block" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <FiStar className="w-3.5 h-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <FiGitBranch className="w-3.5 h-3.5" />
                      {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* View all link */}
          <div className="text-center mt-10">
            <a
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-700 rounded-xl text-white font-semibold shadow-lg hover:from-violet-700 hover:to-purple-800 transition duration-300"
            >
              <FiGithub className="w-5 h-5" />
              View All on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-600 to-transparent opacity-50" />
    </section>
  );
};

export default GitHubSection;
