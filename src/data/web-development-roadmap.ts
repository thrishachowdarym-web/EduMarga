export type RoadmapStep = {
  id: string;
  emoji: string;
  title: string;
  tagline: string;
  topics: string[];
  resources: { label: string; url: string }[];
  videos: { label: string; url: string }[];
  practice: { label: string; url: string }[];
  compiler: { label: string; url: string };
  projects: string[];
};

export const webDevelopmentRoadmap: RoadmapStep[] = [
  {
    id: "html",
    emoji: "📄",
    title: "HTML",
    tagline: "Structure of every web page.",
    topics: ["Semantic tags", "Forms & inputs", "Tables & media", "Accessibility basics", "SEO meta tags"],
    resources: [
      { label: "MDN — HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
      { label: "web.dev — Learn HTML", url: "https://web.dev/learn/html" },
    ],
    videos: [{ label: "HTML Full Course — freeCodeCamp", url: "https://www.youtube.com/watch?v=pQN-pnXPaVg" }],
    practice: [{ label: "freeCodeCamp Responsive Web Design", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" }],
    compiler: { label: "CodePen", url: "https://codepen.io/pen/" },
    projects: ["Personal portfolio skeleton", "College event landing page", "Resume in semantic HTML"],
  },
  {
    id: "css",
    emoji: "🎨",
    title: "CSS",
    tagline: "Styling, layout and responsiveness.",
    topics: ["Box model", "Flexbox & Grid", "Responsive media queries", "Transitions & animations", "Tailwind CSS basics"],
    resources: [
      { label: "MDN — CSS", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS" },
      { label: "CSS-Tricks Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
    ],
    videos: [{ label: "CSS Full Course — freeCodeCamp", url: "https://www.youtube.com/watch?v=OXGznpKZ_sA" }],
    practice: [{ label: "Flexbox Froggy", url: "https://flexboxfroggy.com/" }, { label: "CSS Grid Garden", url: "https://cssgridgarden.com/" }],
    compiler: { label: "CodePen", url: "https://codepen.io/pen/" },
    projects: ["Responsive pricing page", "Glassmorphism dashboard UI", "Animated product card grid"],
  },
  {
    id: "javascript",
    emoji: "⚡",
    title: "JavaScript",
    tagline: "Bring interactivity and logic to the browser.",
    topics: ["ES6+ syntax", "DOM manipulation", "Async/await & fetch", "Array & object methods", "Error handling"],
    resources: [
      { label: "javascript.info", url: "https://javascript.info/" },
      { label: "MDN — JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    ],
    videos: [{ label: "JavaScript Course — freeCodeCamp", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg" }],
    practice: [{ label: "Exercism JavaScript Track", url: "https://exercism.org/tracks/javascript" }],
    compiler: { label: "JSFiddle", url: "https://jsfiddle.net/" },
    projects: ["Quiz app", "Weather app using a public API", "To-do list with localStorage"],
  },
  {
    id: "git-github",
    emoji: "🔧",
    title: "Git & GitHub",
    tagline: "Version control and collaboration.",
    topics: ["Commits & branches", "Merge vs rebase", "Pull requests", "Resolving conflicts", "GitHub Actions basics"],
    resources: [
      { label: "Pro Git Book (free)", url: "https://git-scm.com/book/en/v2" },
      { label: "GitHub Skills", url: "https://skills.github.com/" },
    ],
    videos: [{ label: "Git & GitHub Crash Course", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" }],
    practice: [{ label: "Learn Git Branching", url: "https://learngitbranching.js.org/" }],
    compiler: { label: "GitHub Codespaces", url: "https://github.com/codespaces" },
    projects: ["Open-source first PR", "Deploy portfolio on GitHub Pages", "Team project with branch workflow"],
  },
  {
    id: "react",
    emoji: "⚛️",
    title: "React",
    tagline: "Component-driven modern frontend.",
    topics: ["Components & props", "State & hooks", "Routing", "Data fetching", "Performance basics"],
    resources: [
      { label: "React Official Docs", url: "https://react.dev/learn" },
      { label: "TanStack Router Docs", url: "https://tanstack.com/router/latest" },
    ],
    videos: [{ label: "React Course — freeCodeCamp", url: "https://www.youtube.com/watch?v=bMknfKXIFA8" }],
    practice: [{ label: "React Challenges — Frontend Mentor", url: "https://www.frontendmentor.io/challenges" }],
    compiler: { label: "StackBlitz React", url: "https://stackblitz.com/fork/react" },
    projects: ["Movie search app", "Kanban board", "College notes sharing app"],
  },
  {
    id: "backend",
    emoji: "🛠️",
    title: "Backend",
    tagline: "APIs, auth and server-side logic.",
    topics: ["REST API design", "Node.js / Express or FastAPI", "Authentication & JWT", "Validation", "Error & logging"],
    resources: [
      { label: "FastAPI Docs", url: "https://fastapi.tiangolo.com/" },
      { label: "Node.js Guides", url: "https://nodejs.org/en/learn" },
    ],
    videos: [{ label: "Backend Development Course", url: "https://www.youtube.com/watch?v=Oe421EPjeBE" }],
    practice: [{ label: "Backend Projects — roadmap.sh", url: "https://roadmap.sh/backend/projects" }],
    compiler: { label: "Replit", url: "https://replit.com/~" },
    projects: ["Auth API with JWT", "URL shortener service", "File upload API"],
  },
  {
    id: "database",
    emoji: "🗄️",
    title: "Database",
    tagline: "Store, query and model your data.",
    topics: ["SQL fundamentals", "Schema design & normalization", "Indexes & joins", "PostgreSQL / MongoDB", "ORMs"],
    resources: [
      { label: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" },
      { label: "MongoDB University", url: "https://learn.mongodb.com/" },
    ],
    videos: [{ label: "SQL Full Course — freeCodeCamp", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" }],
    practice: [{ label: "SQLZoo", url: "https://sqlzoo.net/" }, { label: "LeetCode Database", url: "https://leetcode.com/studyplan/top-sql-50/" }],
    compiler: { label: "DB Fiddle", url: "https://www.db-fiddle.com/" },
    projects: ["Library management schema", "Analytics queries on sample data", "Blog DB with relations"],
  },
  {
    id: "full-stack-projects",
    emoji: "🚀",
    title: "Full-Stack Projects",
    tagline: "Ship end-to-end applications.",
    topics: ["Frontend + API integration", "Deployment & CI", "Environment config", "Testing", "Performance & security"],
    resources: [
      { label: "roadmap.sh — Full Stack", url: "https://roadmap.sh/full-stack" },
      { label: "The Odin Project", url: "https://www.theodinproject.com/" },
    ],
    videos: [{ label: "Full Stack App Build", url: "https://www.youtube.com/watch?v=mrHNSanmqQ4" }],
    practice: [{ label: "App Ideas Collection", url: "https://github.com/florinpop17/app-ideas" }],
    compiler: { label: "StackBlitz", url: "https://stackblitz.com/" },
    projects: ["LearnPath-style dashboard", "E-commerce with payments", "Real-time chat app"],
  },
  {
    id: "internship",
    emoji: "💼",
    title: "Internship",
    tagline: "Get real industry experience.",
    topics: ["Resume & portfolio polish", "LinkedIn presence", "Cold outreach", "Open-source contributions", "Work etiquette"],
    resources: [
      { label: "Internshala", url: "https://internshala.com/" },
      { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
    ],
    videos: [{ label: "How to Get an Internship", url: "https://www.youtube.com/watch?v=Tt08KmFfIYQ" }],
    practice: [{ label: "Good First Issues", url: "https://goodfirstissue.dev/" }],
    compiler: { label: "GitHub Codespaces", url: "https://github.com/codespaces" },
    projects: ["1-page portfolio site", "Case study write-up of a project", "Open-source contribution log"],
  },
  {
    id: "interview-preparation",
    emoji: "🎯",
    title: "Interview Preparation",
    tagline: "Crack DSA, system design and HR rounds.",
    topics: ["DSA patterns", "Time & space complexity", "System design basics", "Core CS subjects", "HR & behavioral"],
    resources: [
      { label: "NeetCode 150", url: "https://neetcode.io/practice" },
      { label: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
    ],
    videos: [{ label: "DSA Course — freeCodeCamp", url: "https://www.youtube.com/watch?v=8hly31xKli0" }],
    practice: [{ label: "LeetCode", url: "https://leetcode.com/problemset/" }, { label: "HackerRank", url: "https://www.hackerrank.com/" }],
    compiler: { label: "Programiz Online Compiler", url: "https://www.programiz.com/online-compiler/" },
    projects: ["Mock interview log", "DSA revision sheet", "Design doc for a scalable app"],
  },
];
