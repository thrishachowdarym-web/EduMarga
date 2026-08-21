import type { RoadmapStep } from "./web-development-roadmap";

export const civilRoadmap: RoadmapStep[] = [
  {
    id: "engineering-mechanics-surveying",
    emoji: "🏗️",
    title: "Engineering Mechanics & Surveying",
    tagline: "Learn the fundamentals of statics, forces, and geographical measurements.",
    topics: [
      "Coplanar & non-coplanar force systems",
      "Centroid and Moment of Inertia",
      "Linear and angular measurements",
      "Levelling and contouring",
      "Total Station & GPS technologies",
    ],
    resources: [
      { label: "Book — Engineering Mechanics by S.S. Bhavikatti", url: "https://www.google.co.in/books/edition/Engineering_Mechanics/7fUeAQAAIAAJ" },
      { label: "Surveying Basics — Lectures and Materials", url: "https://www.civilengineeringportal.com/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Engineering Mechanics Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PLDFFB0F9BDC2D1231" },
    ],
    practice: [
      { label: "Statics Practice Problems", url: "https://mathalino.com/reviewer/engineering-mechanics" },
    ],
    compiler: { label: "Online Coordinate Geometry / Map Tool", url: "https://www.google.com/earth/" },
    projects: ["Thematic mapping of a college zone using Total Station", "Force vector equilibrium calculator app"],
  },
  {
    id: "structural-analysis",
    emoji: "🌉",
    title: "Structural Analysis",
    tagline: "Master beam deflection, truss analysis, and structural stiffness.",
    topics: [
      "Statically determinate and indeterminate structures",
      "Slope deflection & Moment distribution methods",
      "Influence Line Diagrams (ILD) for beams",
      "Energy theorems (Castigliano's theorem)",
      "Stiffness & flexibility matrix methods",
    ],
    resources: [
      { label: "Book — Structural Analysis by R.C. Hibbeler", url: "https://www.google.co.in/books/edition/Structural_Analysis/JntFAQAAIAAJ" },
      { label: "SkyCiv Learning Center", url: "https://skyciv.com/learning-center/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Structural Analysis Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PLD80C8F6E2BC9B7B6C" },
    ],
    practice: [
      { label: "Truss solver & Analysis exercises", url: "https://skyciv.com/free-truss-calculator/" },
    ],
    compiler: { label: "SkyCiv Free Truss Calculator", url: "https://skyciv.com/free-truss-calculator/" },
    projects: ["Analysis of a 2D pin-jointed truss", "Stiffness matrix analysis of a portal frame"],
  },
  {
    id: "concrete-steel-design",
    emoji: "🏢",
    title: "RCC & Steel Structure Design",
    tagline: "Design load-bearing concrete and structural steel elements.",
    topics: [
      "Limit State Design vs Working Stress Method",
      "Design of beams, slabs, and columns (RCC)",
      "Prestressed concrete basics",
      "Design of tension & compression members (Steel)",
      "Welded & bolted steel connections",
    ],
    resources: [
      { label: "Book — Limit State Design of Reinforced Concrete by P.C. Varghese", url: "https://www.google.co.in/books/edition/Limit_State_Design_of_Reinforced_Concret/S-48AQAAIAAJ" },
      { label: "IS 456:2000 (Plain & Reinforced Concrete Code)", url: "https://www.bis.gov.in" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Design of Reinforced Concrete Structures — YouTube", url: "https://www.youtube.com/playlist?list=PLDCEF83995BEAA86B" },
    ],
    practice: [
      { label: "Reinforcement Bar (Rebar) Calculators", url: "https://www.engineersedge.com" },
    ],
    compiler: { label: "SkyCiv Structural Design Tool", url: "https://skyciv.com/" },
    projects: ["Complete structural design of a G+2 residential building", "Design of a steel roof truss joint connection"],
  },
  {
    id: "geotechnical-engineering",
    emoji: "⛰️",
    title: "Geotechnical Engineering",
    tagline: "Understand soil mechanics, bearing capacity, and foundation design.",
    topics: [
      "Index properties & soil classification",
      "Permeability & effective stress",
      "Compaction & consolidation behavior",
      "Shear strength of soils (Mohr-Coulomb)",
      "Shallow & deep foundations (bearing capacity)",
    ],
    resources: [
      { label: "Book — Soil Mechanics & Foundation Engineering by K.R. Arora", url: "https://www.google.co.in/books/edition/Soil_Mechanics_And_Foundation_Engineerin/qg5YAAAAMAAJ" },
      { label: "USACE Geotechnical Engineering Manuals", url: "https://www.usace.army.mil/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Geotechnical Engineering Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PLB01F524A69C45507" },
    ],
    practice: [
      { label: "Soil Phase Diagram Calculators", url: "https://www.geotechdata.info/" },
    ],
    compiler: { label: "Geotechdata Soil Mechanics Solver", url: "https://www.geotechdata.info/soil-properties/" },
    projects: ["Settlement calculation for a shallow footing", "Stability analysis of a soil retaining wall"],
  },
  {
    id: "transportation-water-resources",
    emoji: "🛣️",
    title: "Transportation & Water Resources",
    tagline: "Design highway alignments and irrigation engineering channels.",
    topics: [
      "Geometric design of highways (SSD, OSD, Superelevation)",
      "Pavement design (Flexible & Rigid)",
      "Hydrological cycle & runoff estimations",
      "Gravity dams, spillways, and canals",
      "Water treatment plants & waste management",
    ],
    resources: [
      { label: "Book — Highway Engineering by Khanna & Justo", url: "https://www.google.co.in/books/edition/Highway_Engineering/k2v_tgAACAAJ" },
      { label: "USGS Water Science School", url: "https://www.usgs.gov/special-topics/water-science-school" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Transportation Engineering Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PL3A5E5B631C2D437F" },
    ],
    practice: [
      { label: "Highway Curve Geometry Calculator", url: "https://www.calctool.org/civil-engineering/" },
    ],
    compiler: { label: "EPANET / EPA Storm Water Simulator", url: "https://www.epa.gov/water-research/epanet" },
    projects: ["Hydraulic design of an irrigation canal", "Geometric design layout of a highway intersection"],
  },
];
