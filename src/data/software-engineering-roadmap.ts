import type { RoadmapStep } from "./web-development-roadmap";

export const softwareEngineeringRoadmap: RoadmapStep[] = [
  {
    id: "programming-fundamentals",
    emoji: "💻",
    title: "Programming Fundamentals",
    tagline: "Learn the core language syntax and Object-Oriented programming.",
    topics: [
      "C / C++ basics",
      "Python or Java syntax",
      "Variables, data types, loops, functions",
      "Object-Oriented Programming (Classes, Inheritance, Polymorphism, Encapsulation)",
      "Exception Handling & memory management",
    ],
    resources: [
      { label: "W3Schools — Java Tutorial", url: "https://www.w3schools.com/java/" },
      { label: "W3Schools — Python Tutorial", url: "https://www.w3schools.com/python/" },
      { label: "GeeksforGeeks — C++ Programming Language", url: "https://www.geeksforgeeks.org/c-plus-plus/" },
    ],
    videos: [
      { label: "C++ Full Course for Beginners — YouTube", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
      { label: "Java Full Course — YouTube", url: "https://www.youtube.com/watch?v=A74TOX803D0" },
    ],
    practice: [
      { label: "HackerRank — Programming Tracks", url: "https://www.hackerrank.com/domains/cpp" },
    ],
    compiler: { label: "Online GDB Compiler", url: "https://www.onlinegdb.com/" },
    projects: ["Command-line Student Management System", "Text-based RPG game in Java", "Simple calculator app in Python"],
  },
  {
    id: "dsa",
    emoji: "⚡",
    title: "Data Structures & Algorithms",
    tagline: "Master memory organization and efficient problem-solving.",
    topics: [
      "Arrays & Strings",
      "Linked Lists, Stacks & Queues",
      "Trees (Binary, BST, AVL) & Graphs",
      "Sorting & Searching (Binary Search, Quick Sort, Merge Sort)",
      "Recursion & Dynamic Programming",
    ],
    resources: [
      { label: "GeeksforGeeks — Data Structures", url: "https://www.geeksforgeeks.org/data-structures/" },
      { label: "W3Schools — DSA Guide", url: "https://www.w3schools.com/dsa/" },
    ],
    videos: [
      { label: "Data Structures & Algorithms Course — YouTube", url: "https://www.youtube.com/watch?v=RBSGKlAboiM" },
    ],
    practice: [
      { label: "LeetCode — Problem Set", url: "https://leetcode.com/problemset/all/" },
      { label: "CodeChef — Learn & Practice", url: "https://www.codechef.com/practice" },
    ],
    compiler: { label: "LeetCode Playground", url: "https://leetcode.com/playground/" },
    projects: ["Solving 100+ LeetCode problems", "Implementing custom HashMap and Graph classes", "Maze solving simulator"],
  },
  {
    id: "cs-fundamentals",
    emoji: "📖",
    title: "Computer Science Fundamentals",
    tagline: "Understand systems programming, networking, and databases.",
    topics: [
      "DBMS (SQL, Normalization, Transactions & ACID)",
      "Operating Systems (Process, Threads, Scheduling, Memory Management)",
      "Computer Networks (OSI Model, TCP/IP, DNS, HTTP/S)",
      "Computer Architecture (CPU design, Registers, Cache hierarchy)",
      "Software Engineering principles",
    ],
    resources: [
      { label: "W3Schools — SQL Tutorial", url: "https://www.w3schools.com/sql/" },
      { label: "GeeksforGeeks — Operating Systems", url: "https://www.geeksforgeeks.org/operating-systems/" },
    ],
    videos: [
      { label: "DBMS Full Course — YouTube", url: "https://www.youtube.com/watch?v=3EJOMjEyhy4" },
      { label: "Computer Networks Course — YouTube", url: "https://www.youtube.com/watch?v=IPvYjXCsTg8" },
    ],
    practice: [
      { label: "SQLZoo — Interactive SQL Practice", url: "https://sqlzoo.net/" },
    ],
    compiler: { label: "SQL Fiddle", url: "http://sqlfiddle.com/" },
    projects: ["Design a database schema for an e-commerce platform", "Simulation of OS Process Scheduling algorithms"],
  },
  {
    id: "version-control",
    emoji: "🔧",
    title: "Version Control",
    tagline: "Track changes, collaborate, and deploy using Git and GitHub.",
    topics: [
      "Git Basics (init, add, commit, push, pull)",
      "Branching and Merging strategies",
      "Pull Requests & Code Reviews",
      "Resolving Merge Conflicts",
      "GitHub Collaboration workflow",
    ],
    resources: [
      { label: "Pro Git Book (Free)", url: "https://git-scm.com/book/en/v2" },
      { label: "W3Schools — Git Tutorial", url: "https://www.w3schools.com/git/" },
    ],
    videos: [
      { label: "Git and GitHub Complete Course — YouTube", url: "https://www.youtube.com/watch?v=apGV9Ad7XY0" },
    ],
    practice: [
      { label: "Learn Git Branching (Interactive)", url: "https://learngitbranching.js.org/" },
    ],
    compiler: { label: "GitHub Codespaces", url: "https://github.com/codespaces" },
    projects: ["Open-source contributions on GitHub", "Setting up a Git workflow for a team project"],
  },
  {
    id: "software-development",
    emoji: "📐",
    title: "Software Development Lifecycle",
    tagline: "Adopt professional methodologies, design patterns, and SOLID principles.",
    topics: [
      "SDLC (Waterfall, Agile, Scrum methodologies)",
      "Requirements Analysis & System Analysis",
      "Design Patterns (Singleton, Factory, Observer, MVC)",
      "Writing Clean Code & code style guides",
      "SOLID Principles of Object-Oriented Design",
    ],
    resources: [
      { label: "Refactoring.Guru — Design Patterns", url: "https://refactoring.guru/design-patterns" },
      { label: "GeeksforGeeks — SOLID Principles", url: "https://www.geeksforgeeks.org/solid-principles-in-solid-design/" },
    ],
    videos: [
      { label: "Design Patterns Course — YouTube", url: "https://www.youtube.com/watch?v=v9ejT8FO-7I" },
      { label: "SOLID Principles in 10 Minutes — YouTube", url: "https://www.youtube.com/watch?v=pTB30aXS77k" },
    ],
    practice: [
      { label: "Clean Code Exercises", url: "https://github.com/diaspora/clean-code-smells-and-heuristics" },
    ],
    compiler: { label: "Visual Studio Code for Web", url: "https://vscode.dev/" },
    projects: ["Refactoring a legacy codebase to follow SOLID principles", "Implement patterns in a weather application"],
  },
  {
    id: "backend-dev",
    emoji: "⚙️",
    title: "Backend Development",
    tagline: "Build scalable server-side systems, REST APIs, and database models.",
    topics: [
      "REST API design principles",
      "Authentication & Authorization (JWT, OAuth2, Sessions)",
      "SQL vs NoSQL Databases (PostgreSQL, MongoDB)",
      "API Integration & Webhooks",
      "Server-side programming (Node.js/Express, Spring Boot, or Django)",
    ],
    resources: [
      { label: "W3Schools — Node.js Tutorial", url: "https://www.w3schools.com/nodejs/" },
      { label: "FastAPI Documentation", url: "https://fastapi.tiangolo.com/" },
    ],
    videos: [
      { label: "Backend Development Course — YouTube", url: "https://www.youtube.com/watch?v=jBzwzrDvZ18" },
    ],
    practice: [
      { label: "Postman API Bootcamp", url: "https://bootcamp.postman.com/" },
    ],
    compiler: { label: "StackBlitz Node.js Starter", url: "https://stackblitz.com/fork/node" },
    projects: ["Task Management REST API with JWT Auth", "E-commerce backend service with SQL database integration"],
  },
  {
    id: "testing-debugging",
    emoji: "🧪",
    title: "Testing & Debugging",
    tagline: "Assure software quality through manual testing and test automation.",
    topics: [
      "Unit Testing (JUnit, Jest, or PyTest)",
      "Integration Testing & API testing",
      "System Testing & Regression Testing",
      "Debugging techniques, logs, and breakpoints",
      "Test Automation basics (Selenium, Playwright)",
    ],
    resources: [
      { label: "Jest Documentation", url: "https://jestjs.io/" },
      { label: "Guru99 — Software Testing Guide", url: "https://www.guru99.com/software-testing.html" },
    ],
    videos: [
      { label: "Unit Testing & Jest Tutorial — YouTube", url: "https://www.youtube.com/watch?v=IPiUDhNqy58" },
    ],
    practice: [
      { label: "Selenium Practice Site", url: "http://www.automationpractice.pl/index.php" },
    ],
    compiler: { label: "Replit Workspace", url: "https://replit.com/" },
    projects: ["Write unit test suite with 90%+ coverage", "Automate UI tests for a shopping cart using Playwright"],
  },
  {
    id: "devops-deployment",
    emoji: "🚀",
    title: "DevOps & Deployment",
    tagline: "Automate build pipelines and deploy containerized services to the cloud.",
    topics: [
      "Linux command line basics & scripting",
      "CI/CD pipelines (GitHub Actions, Jenkins)",
      "Docker containerization (Dockerfiles, Docker Compose)",
      "Cloud platforms basics (AWS, Azure, or GCP)",
      "Deployment & App monitoring (Prometheus, Grafana)",
    ],
    resources: [
      { label: "Docker Official Guides", url: "https://docs.docker.com/get-started/" },
      { label: "W3Schools — Linux Commands", url: "https://www.w3schools.com/linux/" },
    ],
    videos: [
      { label: "Docker & Kubernetes Full Course — YouTube", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" },
      { label: "DevOps Beginner Course — YouTube", url: "https://www.youtube.com/watch?v=hQcFE0RD0cQ" },
    ],
    practice: [
      { label: "Play with Docker (Interactive)", url: "https://labs.play-with-docker.com/" },
    ],
    compiler: { label: "Play with Docker Playground", url: "https://labs.play-with-docker.com/" },
    projects: ["Dockerizing a full-stack app and deploying to AWS EC2", "Configure GitHub Actions pipeline for automated builds"],
  },
  {
    id: "system-design",
    emoji: "🏗️",
    title: "System Design",
    tagline: "Architect robust, scalable, and high-performance microservice backends.",
    topics: [
      "Low-Level Design (LLD) & Class Diagrams",
      "High-Level Design (HLD) & Architecture Diagrams",
      "Scalability (Vertical vs Horizontal), Load Balancing",
      "Caching strategies (Redis, Memcached)",
      "Microservices architecture vs Monoliths",
    ],
    resources: [
      { label: "System Design Primer (GitHub)", url: "https://github.com/donnemartin/system-design-primer" },
      { label: "ByteByteGo — System Design Articles", url: "https://bytebytego.com/" },
    ],
    videos: [
      { label: "System Design Course — YouTube", url: "https://www.youtube.com/watch?v=i53Gi_K39mc" },
    ],
    practice: [
      { label: "System Design Fight Club Problems", url: "https://www.youtube.com/@SystemDesignFightClub" },
    ],
    compiler: { label: "Eraser.io (Draw Architecture Diagrams)", url: "https://www.eraser.io/" },
    projects: ["Design high-level architecture for a WhatsApp clone", "Design a rate limiter class (LLD)"],
  },
  {
    id: "interview-prep",
    emoji: "🎓",
    title: "Projects & Interview Prep",
    tagline: "Showcase your skills and ace the technical engineering rounds.",
    topics: [
      "Building a solid GitHub portfolio of real projects",
      "ATS-friendly resume preparation & LinkedIn profile",
      "Coding interview practice (DSA & Algorithms)",
      "System Design interview walkthroughs",
      "Mock interviews & behavioral questions (STAR method)",
    ],
    resources: [
      { label: "Tech Interview Handbook", url: "https://www.techinterviewhandbook.org/" },
      { label: "W3Schools — Career Advice & Prep", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Software Engineer Mock Interview — YouTube", url: "https://www.youtube.com/watch?v=bB8FMy1k1W0" },
    ],
    practice: [
      { label: "Pramp — Free Mock Interviews", url: "https://www.pramp.com/" },
    ],
    compiler: { label: "Interviewing.io Mock Practice", url: "https://interviewing.io/" },
    projects: ["Building a portfolio website", "Polishing 3 major projects with clear GitHub Readmes"],
  },
];
