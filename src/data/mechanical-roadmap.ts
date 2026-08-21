import type { RoadmapStep } from "./web-development-roadmap";

export const mechanicalRoadmap: RoadmapStep[] = [
  {
    id: "engineering-graphics",
    emoji: "📐",
    title: "Engineering Graphics & Design",
    tagline: "Learn to visualize and communicate design specifications.",
    topics: [
      "Orthographic projections",
      "Isometric views",
      "Sectioning of solids",
      "CAD software basics (AutoCAD)",
      "Dimensioning standards",
    ],
    resources: [
      { label: "Book — Engineering Drawing by N.D. Bhatt", url: "https://www.google.co.in/books/edition/Engineering_Drawing/hO46AQAAIAAJ" },
      { label: "AutoCAD Official Learning Portal", url: "https://knowledge.autodesk.com/support/autocad/learn" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Engineering Drawing Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PLsgHvx3LK6s31zO3JjO4vG5xO4K-rXk7q" },
    ],
    practice: [
      { label: "Qcad Learning Exercises", url: "https://www.qcad.org/en/tutorial-working-with-qcad" },
    ],
    compiler: { label: "Online 3D Viewer / CAD Viewer", url: "https://3dviewer.net/" },
    projects: ["3D assembly drawing of a screw jack", "Orthographic drawing of a machine block"],
  },
  {
    id: "thermodynamics",
    emoji: "🔥",
    title: "Thermodynamics & Thermal Sciences",
    tagline: "Understand energy, heat transfer, and work conversion principles.",
    topics: [
      "First & Second Laws of Thermodynamics",
      "Entropy and availability",
      "Gas power cycles (Otto, Diesel, Rankine)",
      "IC Engines and refrigeration cycles",
      "Steam tables & Mollier charts",
    ],
    resources: [
      { label: "Book — Engineering Thermodynamics by P.K. Nag", url: "https://www.google.co.in/books/edition/Engineering_Thermodynamics/H4RQDwAAQBAJ" },
      { label: "Thermodynamics Interactive eBook", url: "https://www.learnthermo.com/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Thermodynamics Lectures by Prof. S.K. Som — YouTube", url: "https://www.youtube.com/playlist?list=PLD78BC00F174B16EA" },
    ],
    practice: [
      { label: "Thermo Solver & Interactive Practice", url: "https://www.thermofluids.net/" },
    ],
    compiler: { label: "Online Steam Tables Calculator", url: "https://www.steamtablesonline.com/" },
    projects: ["Efficiency analysis of a diesel cycle", "Thermal model of a refrigeration unit"],
  },
  {
    id: "strength-of-materials",
    emoji: "🔩",
    title: "Strength of Materials",
    tagline: "Analyze stress, strain, and structural integrity of components.",
    topics: [
      "Stress & strain behavior",
      "Shear force & bending moment diagrams",
      "Torsion of shafts",
      "Deflection of beams",
      "Mohr's circle & principal stresses",
    ],
    resources: [
      { label: "Book — Strength of Materials by S. Ramamrutham", url: "https://www.google.co.in/books/edition/Strength_of_Materials/L2xRAAAACAAJ" },
      { label: "Structural Analysis Interactive Tools", url: "https://skyciv.com/free-structural-design-software/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Strength of Materials Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PLD0CE0CD49DDE2E78" },
    ],
    practice: [
      { label: "Beams & Columns Solvers", url: "https://mathalino.com/reviewer/strength-materials" },
    ],
    compiler: { label: "SkyCiv Free Beam Calculator", url: "https://skyciv.com/free-beam-calculator/" },
    projects: ["Design & analysis of a cantilever beam", "Stress analysis of a hollow shaft under torsion"],
  },
  {
    id: "fluid-mechanics",
    emoji: "💧",
    title: "Fluid Mechanics & Machinery",
    tagline: "Master fluid behavior, pipe flow, and turbomachinery systems.",
    topics: [
      "Fluid properties & pressure measurement",
      "Bernoulli's equation & applications",
      "Flow through pipes (Darcy-Weisbach)",
      "Boundary layer theory",
      "Pelton, Francis turbines & Centrifugal pumps",
    ],
    resources: [
      { label: "Book — Fluid Mechanics by Frank M. White", url: "https://www.google.co.in/books/edition/Fluid_Mechanics/7fUeAQAAIAAJ" },
      { label: "Fluid Mechanics Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/category/physics/work-energy-and-power" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Fluid Mechanics Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PL3A5E5B631C2D437F" },
    ],
    practice: [
      { label: "Pipe Friction Loss Calculator", url: "https://www.calctool.org/fluid-mechanics/pipe-friction" },
    ],
    compiler: { label: "SimScale Cloud CFD Simulation", url: "https://www.simscale.com/" },
    projects: ["CFD simulation of flow over a cylinder", "Design analysis of a centrifugal pump impeller"],
  },
  {
    id: "design-machine-elements",
    emoji: "⚙️",
    title: "Design of Machine Elements",
    tagline: "Design real mechanical components using failure theories.",
    topics: [
      "Theories of failure",
      "Design of shafts, keys & couplings",
      "Welded, bolted & riveted joints",
      "Design of springs, gears & bearings",
      "Fatigue & stress concentration",
    ],
    resources: [
      { label: "Book — Design of Machine Elements by V.B. Bhandari", url: "https://www.google.co.in/books/edition/Design_of_Machine_Elements/Zz5vDwAAQBAJ" },
      { label: "Shigley's Mechanical Engineering Design Guide", url: "https://www.mheducation.com" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Design of Machine Elements Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PLDFFB0F9BDC2D1231" },
    ],
    practice: [
      { label: "Mechanical Design Formula References", url: "https://www.engineersedge.com/" },
    ],
    compiler: { label: "Gears & Shafts Interactive Design Tools", url: "https://www.machinedesign.com/" },
    projects: ["Design of a spur gearbox", "Stress analysis of a bolted flange joint"],
  },
  {
    id: "cad-fea",
    emoji: "💻",
    title: "CAD/CAM & Finite Element Analysis (FEA)",
    tagline: "Master 3D modeling and structural simulation software.",
    topics: [
      "Solid modeling (SolidWorks / Fusion 360)",
      "FEA meshing & boundary conditions",
      "Structural, thermal, and modal analysis",
      "CNC programming & G-codes / M-codes",
      "Additive manufacturing (3D Printing)",
    ],
    resources: [
      { label: "SolidWorks Official Tutorials", url: "http://www.solidworks.com/" },
      { label: "Ansys Learning Forum", url: "https://forum.ansys.com/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Fusion 360 Complete Walkthrough — YouTube", url: "https://www.youtube.com/playlist?list=PLrOFa8sDv6jcp8E3ayuf3-iFDrK8YmYh5" },
    ],
    practice: [
      { label: "SolidWorks CSWA Exam Prep Guide", url: "https://www.my.solidworks.com/" },
    ],
    compiler: { label: "Onshape Cloud 3D CAD Editor", url: "https://www.onshape.com/" },
    projects: ["3D modeling of a drone frame", "Static structural analysis of a crane bracket using ANSYS"],
  },
];
