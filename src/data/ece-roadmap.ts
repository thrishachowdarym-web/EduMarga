import type { RoadmapStep } from "./web-development-roadmap";

export const eceRoadmap: RoadmapStep[] = [
  {
    id: "electronic-devices",
    emoji: "📟",
    title: "Electronic Devices & Circuits",
    tagline: "Master semiconductor physics, diodes, BJTs, and MOSFETs.",
    topics: [
      "Semiconductor energy bands & carrier transport",
      "P-N junction diode characteristics & applications",
      "BJT & MOSFET biasing, small-signal models",
      "Operational Amplifiers (Op-Amps) & feedback",
      "Frequency response of amplifiers",
    ],
    resources: [
      { label: "Book — Microelectronic Circuits by Adel S. Sedra & Kenneth C. Smith", url: "https://www.google.co.in/books/edition/Microelectronic_Circuits/Wld7QgAACAAJ" },
      { label: "All About Circuits — Semiconductors", url: "https://www.allaboutcircuits.com/textbook/semistors/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Analog Electronics Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PLDFFB0F9BDC2D1231" },
    ],
    practice: [
      { label: "Op-Amp Practice Worksheets", url: "https://www.allaboutcircuits.com/worksheets/operational-amplifiers-op-amps/" },
    ],
    compiler: { label: "LTspice / Online Circuit Simulator", url: "https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html" },
    projects: ["Design of a regulated 5V DC power supply", "BJT small-signal common emitter amplifier design"],
  },
  {
    id: "digital-system-design",
    emoji: "💡",
    title: "Digital System Design",
    tagline: "Design combinational & sequential digital circuits using HDL.",
    topics: [
      "Boolean algebra & logic gates",
      "Karnaugh maps & Quine-McCluskey minimization",
      "Flip-flops, registers & counters",
      "Finite State Machines (Mealy & Moore)",
      "Verilog / VHDL syntax and synthesis",
    ],
    resources: [
      { label: "Book — Digital Design by M. Morris Mano", url: "https://www.google.co.in/books/edition/Digital_Design/bF48AQAAIAAJ" },
      { label: "FPGA Tutorials & Verilog Guide", url: "https://www.fpga4student.com/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Digital Circuits Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PLB01F524A69C45507" },
    ],
    practice: [
      { label: "HDL Practice Exercises — HDLBits", url: "https://hdlbits.01xz.net/wiki/Main_Page" },
    ],
    compiler: { label: "EDA Playground (Online Verilog Compiler)", url: "https://www.edaplayground.com/" },
    projects: ["4-bit CLA Adder design in Verilog", "Traffic light controller using FSM"],
  },
  {
    id: "signals-systems",
    emoji: "📈",
    title: "Signals & Systems",
    tagline: "Analyze continuous & discrete signals using mathematical transforms.",
    topics: [
      "LTI systems, convolution and impulse response",
      "Fourier Series & Fourier Transform (CTFT, DTFT)",
      "Laplace Transform & Region of Convergence (ROC)",
      "Z-Transform & pole-zero analysis",
      "Sampling theorem & Nyquist rate",
    ],
    resources: [
      { label: "Book — Signals and Systems by Oppenheim & Willsky", url: "https://www.google.co.in/books/edition/Signals_and_Systems/b51XAAAAMAAJ" },
      { label: "DSP Related Learning Portal", url: "https://www.dsprelated.com/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Signals & Systems Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PL74816EA" },
    ],
    practice: [
      { label: "Laplace & Z-Transform Practice", url: "https://www.tutorialspoint.com/signals_and_systems/" },
    ],
    compiler: { label: "Python/Jupyter Notebooks (via Google Colab)", url: "https://colab.research.google.com/" },
    projects: ["Audio signal filtering using Python SciPy", "Sampling & Aliasing simulation model"],
  },
  {
    id: "vlsi-design",
    emoji: "🔌",
    title: "VLSI Design & Technology",
    tagline: "Design CMOS integrated circuits and layout designs.",
    topics: [
      "CMOS inverter VTC & delay analysis",
      "Combinational CMOS logic (NAND, NOR, Transmission Gates)",
      "MOSFET fabrication process & layout rules",
      "ASIC & FPGA design flows",
      "Static Timing Analysis (STA) & timing constraints",
    ],
    resources: [
      { label: "Book — CMOS VLSI Design by Neil Weste & David Harris", url: "https://www.google.co.in/books/edition/CMOS_VLSI_Design/JntFAQAAIAAJ" },
      { label: "VLSI Academy Resources", url: "https://www.vlsisystemdesign.com/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "VLSI Design Course — YouTube", url: "https://www.youtube.com/playlist?list=PL4F32A3E090F16C5A" },
    ],
    practice: [
      { label: "Static Timing Analysis Quizzes", url: "https://www.vlsi-expert.com/" },
    ],
    compiler: { label: "EDA Playground (Cadence/Synopsys online tools)", url: "https://www.edaplayground.com/" },
    projects: ["CMOS Inverter layout design and DRC check", "Design and synthesis of an 8-bit ALU"],
  },
  {
    id: "embedded-systems-iot",
    emoji: "🤖",
    title: "Embedded Systems & IoT",
    tagline: "Program microcontrollers (Arduino, STM32) and link them to IoT platforms.",
    topics: [
      "8051, AVR, ARM Cortex-M architecture",
      "GPIO, Timers, Interrupts & ADC programming",
      "Communication protocols (UART, SPI, I2C, CAN)",
      "Real-Time Operating Systems (RTOS) basics",
      "ESP32 and Cloud IoT protocols (MQTT, HTTP)",
    ],
    resources: [
      { label: "Book — Embedded Systems by Raj Kamal", url: "https://www.google.co.in/books/edition/Embedded_Systems/l_wVBAAAQBAJ" },
      { label: "Arduino Official Docs & Reference", url: "https://www.arduino.cc/reference/en/" },
      { label: "W3Schools — Tech Learning & Tutorials", url: "https://www.w3schools.com" },
    ],
    videos: [
      { label: "Embedded Systems Lectures — YouTube", url: "https://www.youtube.com/playlist?list=PL024A69C45507" },
    ],
    practice: [
      { label: "ESP32 programming interactive labs", url: "https://wokwi.com/" },
    ],
    compiler: { label: "Wokwi (Online Arduino/ESP32 Simulator)", url: "https://wokwi.com" },
    projects: ["Smart Home Automation using ESP32 & MQTT", "RTOS-based task scheduler for sensory data collection"],
  },
];
