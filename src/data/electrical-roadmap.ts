import type { RoadmapStep } from "./web-development-roadmap";

export const electricalRoadmap: RoadmapStep[] = [
  {
    id: "network-analysis",
    emoji: "⚡",
    title: "Network Analysis & Circuits",
    tagline: "Master KVL, KCL, mesh, and nodal analysis for AC/DC networks.",
    topics: [
      "Thevenin & Norton Theorems",
      "Superposition & Maximum Power Transfer",
      "Transient response of RL, RC, RLC circuits",
      "Two-port networks",
      "Sinusoidal steady-state analysis",
    ],
    resources: [
      { label: "Book — Fundamentals of Electric Circuits by Alexander & Sadiku", url: "https://www.google.co.in/books/edition/Fundamentals_of_Electric_Circuits/qg5YAAAAMAAJ" },
      { label: "All About Circuits — Lessons", url: "https://www.allaboutcircuits.com/textbook/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Electric Circuits Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PLB01F524A69C45507" },
    ],
    practice: [
      { label: "Circuit Practice Problems", url: "https://www.allaboutcircuits.com/worksheets/" },
    ],
    compiler: { label: "Falstad Circuit Simulator", url: "https://www.falstad.com/circuit/" },
    projects: ["Simulating transient response of an RLC circuit", "Passive bandpass filter design & simulation"],
  },
  {
    id: "electrical-machines",
    emoji: "⚙️",
    title: "Electrical Machines",
    tagline: "Understand DC/AC motors, alternators, and transformers.",
    topics: [
      "Single-phase and three-phase transformers",
      "DC generators & motors (characteristics & speed control)",
      "Three-phase induction motors",
      "Synchronous machines (alternators)",
      "Special machines (stepper, brushless DC motors)",
    ],
    resources: [
      { label: "Book — Electrical Machinery by P.S. Bimbhra", url: "https://www.google.co.in/books/edition/Electrical_Machinery/k2v_tgAACAAJ" },
      { label: "Electrical4U — Learn Machines", url: "https://www.electrical4u.com/electrical-machines/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Electrical Machines Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PLDCEF83995BEAA86B" },
    ],
    practice: [
      { label: "Motor Performance Calculators", url: "https://www.engineeringtoolbox.com/electric-motors-t_30.html" },
    ],
    compiler: { label: "MATLAB/Simulink Online (via trial/student account)", url: "https://matlab.mathworks.com/" },
    projects: ["Speed control of a DC shunt motor using PWM", "Equivalent circuit parameter determination of a transformer"],
  },
  {
    id: "power-systems",
    emoji: "🏭",
    title: "Power Systems",
    tagline: "Master power generation, transmission, distribution, and protection.",
    topics: [
      "Transmission line parameters & models",
      "Load flow analysis (Gauss-Seidel, Newton-Raphson)",
      "Symmetrical & unsymmetrical fault analysis",
      "Power system stability & load frequency control",
      "Circuit breakers & relays",
    ],
    resources: [
      { label: "Book — Modern Power System Analysis by D.P. Kothari & I.J. Nagrath", url: "https://www.google.co.in/books/edition/Modern_Power_System_Analysis/7tU8BAAAQBAJ" },
      { label: "Power Systems Engineering Portal", url: "https://www.electrical-engineering-portal.com/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Power System Analysis Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PL80C8F6E2BC9B7B6C" },
    ],
    practice: [
      { label: "Load Flow Solvers & Analysis Worksheets", url: "https://www.powerworld.com/training" },
    ],
    compiler: { label: "ETAP Online Trial (Power System Analysis)", url: "https://etap.com/" },
    projects: ["Simulating a 3-bus load flow system using Python/MATLAB", "Design of a distance relay protection system"],
  },
  {
    id: "control-systems",
    emoji: "🎛️",
    title: "Control Systems",
    tagline: "Understand system stability, feedback loop design, and PID controller tuning.",
    topics: [
      "Transfer functions & Block diagram reduction",
      "Time-response analysis (First & Second order)",
      "Routh-Hurwitz & Root Locus techniques",
      "Bode plots, Nyquist stability criteria",
      "PID controllers & state space analysis",
    ],
    resources: [
      { label: "Book — Control Systems Engineering by I.J. Nagrath & M. Gopal", url: "https://www.google.co.in/books/edition/Control_Systems_Engineering/oK4_cgAACAAJ" },
      { label: "Control Tutorials for MATLAB & Simulink", url: "https://ctms.engin.umich.edu/CTMS/index.php?aux=Home" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Control Systems Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PLD4036DF36F3D3B16" },
    ],
    practice: [
      { label: "Control Engineering Problems — MyPhysicsLab style", url: "https://www.controlmanuals.com/" },
    ],
    compiler: { label: "Octave-Online (runs MATLAB code)", url: "https://octave-online.net/" },
    projects: ["Design and simulation of a cruise control system", "Tuning a PID controller for an inverted pendulum"],
  },
  {
    id: "power-electronics",
    emoji: "🔋",
    title: "Power Electronics",
    tagline: "Design energy-efficient converter topologies and motor drives.",
    topics: [
      "Power semiconductor devices (SCR, MOSFET, IGBT)",
      "Controlled rectifiers (AC to DC)",
      "Buck, Boost & Buck-Boost converters (DC to DC)",
      "Inverters (DC to AC) & PWM strategies",
      "Variable frequency drives (VFD) for AC motors",
    ],
    resources: [
      { label: "Book — Power Electronics by M.H. Rashid", url: "https://www.google.co.in/books/edition/Power_Electronics/uRj0p_Pq5fEC" },
      { label: "Power Electronics Interactive Applets", url: "http://www.plexim.com/academy" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Power Electronics Course — YouTube", url: "https://www.youtube.com/playlist?list=PLA5B1854291B745DF" },
    ],
    practice: [
      { label: "PLECS Simulation Exercises", url: "https://www.plexim.com/download/plecs_standalone" },
    ],
    compiler: { label: "Tinkercad Circuits Simulator", url: "https://www.tinkercad.com/circuits" },
    projects: ["Simulation of a Buck-Boost converter", "Microcontroller-based PWM speed control of a BLDC motor"],
  },
];
