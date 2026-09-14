// image: null uses the gradient placeholder tile until a real screenshot exists
const SHOW_LIMIT = 18;

const PROJECTS = [
  {
    id: "navindoor-voice-module",
    name: "NavIndoor Voice Module",
    tagline: "Offline speech-driven room search, EN/IT",
    description:
      "The offline, multilingual speech-driven semantic input module behind NavIndoor's search. Spoken queries are cleaned and normalized, then matched against a 243-room repository using phonetic correction and fuzzy matching, resolving in 8.0ms on consumer mobile hardware with 92% top-candidate accuracy across 150 test queries. Published as a first-author paper at ACM ICMI 2026.",
    tags: ["Research", "AI/LLM"],
    stack: "Flutter",
    status: "ACM ICMI 2026",
    image: "assets/projects/navindoor-voicemodule.png",
    thumbnail: "assets/projects/navindoor-voicemodule-thumb.png",
    initial: "N",
    awards: [],
    links: [
      { label: "Read the thesis ↗", url: "assets/ceylan-thesis.pdf" },
      { label: "View on ACM DL ↗", url: "https://doi.org/10.1145/3776591.3832512" },
    ],
  },
  {
    id: "navindoor-website",
    name: "NavIndoor Website",
    tagline: "Public site for Sapienza's indoor wayfinding research",
    description:
      "The public-facing bilingual (EN/IT) marketing site for NavIndoor, the Gamification Lab's campus indoor-navigation project. Built to introduce the app and the underlying research, including the offline, multilingual speech-driven search module, to students and visitors.",
    tags: ["Research", "Full-Stack"],
    stack: "Astro",
    status: "In development",
    image: "assets/projects/navindoor-website.png",
    thumbnail: "assets/projects/navindoor-website-thumb.png",
    initial: "N",
    awards: [],
    links: [],
  },
  {
    id: "musiccoincity",
    name: "MusiCoinCity",
    tagline: "Music-and-place discovery for the Eco-friendly track",
    description: "Built for TRON Hackathon Season 4's Eco-friendly track, connecting music discovery to physical places.",
    tags: ["Web3"],
    stack: "TRON blockchain",
    status: "TRON S4",
    image: "assets/projects/musicoincity.png",
    thumbnail: "assets/projects/musicoincity-thumb.png",
    initial: "M",
    awards: ["2nd Place ($15,000, Judges) and 3rd Place ($4,000, Community), TRON S4"],
    links: [
      { label: "Source ↗", url: "https://github.com/gokhancey/MusiCoinCity" },
      { label: "Forum post ↗", url: "https://forum.trondao.org/t/musicoincity-myriad-places-exclusive-sounds/17266" },
      { label: "Demo ↗", url: "https://www.youtube.com/watch?v=ANK0Eddk_Ko" },
    ],
  },
  {
    id: "metavotepoll",
    name: "MetaVotePoll",
    tagline: "Voting platform concept for the Ecosystem track",
    description: "A modern voting platform concept built for TRON Hackathon Season 3's Ecosystem track.",
    tags: ["Web3"],
    stack: "TRON blockchain",
    status: "TRON S3",
    image: "assets/projects/metavotepoll.png",
    thumbnail: "assets/projects/metavotepoll-thumb.png",
    initial: "M",
    awards: ["3rd Place ($8,000, Community) and 3rd Place ($10,000, Judges), TRON S3"],
    links: [
      { label: "Forum post ↗", url: "https://forum.trondao.org/t/raph-strategy-your-modern-voting-platform/11022" },
      { label: "Demo ↗", url: "https://www.youtube.com/watch?v=4iAkU2jn5HQ" },
    ],
  },
  {
    id: "natureforetold",
    name: "Nature Foretold",
    tagline: "Ecosystem-track build, later adapted for Meta Quest II",
    description:
      "Built for TRON Hackathon Season 3's Ecosystem track, then adapted for Meta Quest II and entered into the Intertech Metaverse Hackathon.",
    tags: ["Web3"],
    stack: "TRON blockchain",
    status: "TRON S3",
    image: "assets/projects/natureforetold.png",
    thumbnail: "assets/projects/natureforetold-thumb.png",
    initial: "N",
    awards: [
      "2nd Place ($9,000, Community) and 5th Place ($5,000, Judges), TRON S3",
      "Winner, Intertech Metaverse Hackathon (prize: Meta Quest 2 VR)",
    ],
    links: [
      { label: "Hackathon page ↗", url: "https://devpost.com/software/nature-foretold" },
    ],
  },
  {
    id: "questarcade",
    name: "QuestArcade",
    tagline: "Casual arcade build for the GameFi track",
    description: "A casual arcade game built for TRON Hackathon Season 6's GameFi track.",
    tags: ["Web3"],
    stack: "TRON blockchain",
    status: "TRON S6",
    image: null,
    initial: "Q",
    awards: ["Engagement Prize ($5,000, Special Mention), TRON S6"],
    links: [
      { label: "Forum post ↗", url: "https://forum.trondao.org/t/questarcade-relaxing-and-more-relaxing-is-just-a-click-away/23696" },
    ],
  },
  {
    id: "auroraqua",
    name: "AurorAqua",
    tagline: "A survey that turns your habits into a water footprint",
    description:
      "Walks users through a short survey to calculate their personal water footprint, then shows a symbolic before-and-after of how everyday habits add up. Users can optionally connect a wallet and send BTT proportional to their footprint to support water-conservation organizations. Built for TRON Hackathon Season 4's Eco-friendly track.",
    tags: ["Web3"],
    stack: "JavaScript, BitTorrent Chain",
    status: "TRON S4",
    image: "assets/projects/auroraqua.png",
    thumbnail: "assets/projects/auroraqua-thumb.png",
    initial: "A",
    awards: ["2nd Place ($5,000, Community), TRON S4"],
    links: [
      { label: "Hackathon page ↗", url: "https://dorahacks.io/buidl/5179" },
      { label: "Demo ↗", url: "https://youtu.be/bpSQrcxO8lc" },
      { label: "Forum post ↗", url: "https://forum.trondao.org/t/auroraqua-save-water-today/17328" },
    ],
  },
  {
    id: "tronpixels",
    name: "TronPixels",
    tagline: "A shared pixel-art canvas, stored permanently on-chain",
    description:
      "A decentralized canvas where anyone can draw pixel art and submit it to the BitTorrent Chain, where it's stored immutably alongside the creator's wallet address and timestamp. A separate Upvote contract lets the community vote on favorites. Built for TRON Hackathon Season 7's Artistry track.",
    tags: ["Web3"],
    stack: "Solidity, BitTorrent Chain",
    status: "TRON S7",
    image: "assets/projects/tronpixels.png",
    thumbnail: "assets/projects/tronpixels-thumb.png",
    initial: "P",
    awards: ["3rd Place ($5,000, Community), TRON S7"],
    links: [
      { label: "Source ↗", url: "https://github.com/TronPixels/TronPixels" },
      { label: "Hackathon page ↗", url: "https://devpost.com/software/tronpixels" },
      { label: "Demo ↗", url: "https://youtu.be/YTk-nzvotZQ" },
      { label: "Forum post ↗", url: "https://forum.trondao.org/t/tronpixels-no-limits-just-pixels/27560" },
    ],
  },
  {
    id: "triton",
    name: "Triton",
    tagline: "Crypto quiz for the Web3 track",
    description: "A crypto quiz platform built for TRON Hackathon Season 5's Web3 track.",
    tags: ["Web3"],
    stack: "TRON blockchain",
    status: "TRON S5",
    image: "assets/projects/triton.png",
    thumbnail: "assets/projects/triton-thumb.png",
    initial: "T",
    awards: ["Determination Prize ($4,500, Judges), TRON S5"],
    links: [
      { label: "Demo ↗", url: "https://youtu.be/5mlrMHrT4Dw" },
      { label: "Hackathon page ↗", url: "https://hackatrons5.hackerearth.com/challenges/hackathon/hackatron-s5/dashboard/f1e565d/submission/published/triton-2/submission/triton-2/" },
      { label: "Forum post ↗", url: "https://forum.trondao.org/t/triton-join-us-take-the-crypto-quiz-win-a-victory/19975" },
    ],
  },
  {
    id: "dreamverser",
    name: "DreamVerser",
    tagline: "Artistry-track build",
    description: "Built for TRON Hackathon Season 5's Artistry track.",
    tags: ["Web3"],
    stack: "TRON blockchain",
    status: "TRON S5",
    image: null,
    initial: "D",
    awards: ["5th Place ($3,000, Community), TRON S5"],
    links: [
      { label: "Forum post ↗", url: "https://forum.trondao.org/t/dreamverser-spread-your-dreams-to-the-world-via-tron/20080" },
    ],
  },
  {
    id: "idletron",
    name: "IdleTron",
    tagline: "An idle clicker where you build a fortune on-chain",
    description:
      "A decentralized idle game on the BitTorrent Chain: collect coins, upgrade assets, and climb a global leaderboard. Built for TRON Hackathon Season 7's Artistry track.",
    tags: ["Web3"],
    stack: "JavaScript, BitTorrent Chain",
    status: "TRON S7",
    image: "assets/projects/idletron.png",
    thumbnail: "assets/projects/idletron-thumb.png",
    initial: "I",
    awards: ["5th Place ($3,000, Community), TRON S7"],
    links: [
      { label: "Source ↗", url: "https://github.com/GabriKaste/IdleTron" },
      { label: "Demo ↗", url: "https://youtu.be/-SvspL3jhvA" },
      { label: "Forum post ↗", url: "https://forum.trondao.org/t/idletron-train-risk-free-trade-on-chain/32515" },
    ],
  },
  {
    id: "seikit",
    name: "SeiKit",
    tagline: "Voice-driven ambient mixer, saved on-chain",
    description:
      "A voice-driven ambient mixer that saves your sound scenes on the Sei EVM testnet. Speak, and it switches GIF scenes, stacks up to six loops, and writes or loads your mix directly on-chain. Each wallet gets three save slots.",
    tags: ["Web3", "AI/LLM"],
    stack: "Vite, Web Audio API",
    status: "Testnet",
    image: "assets/projects/seikit.png",
    thumbnail: "assets/projects/seikit-thumb.png",
    initial: "K",
    awards: [],
    links: [
      { label: "Website ↗", url: "https://seikitapp.com" },
      { label: "Source ↗", url: "https://github.com/SeiKitApp/SeiKitApp" },
      { label: "Demo ↗", url: "https://youtu.be/OGs72C_argM" },
    ],
  },
  {
    id: "codexa",
    name: "Codexa",
    tagline: "Evidence-based answers over your own documents",
    description:
      "Built to make AI answers reliable by grounding them in real data instead of guesses. Codexa connects Elasticsearch with Google Gemini: upload PDFs or text, it indexes them, retrieves context, and returns a verified, evidence-based answer instead of a hallucination.",
    tags: ["AI/LLM", "Full-Stack"],
    stack: "Vue, Elasticsearch, Gemini",
    status: "In development",
    image: null,
    initial: "C",
    awards: [],
    links: [{ label: "Website ↗", url: "https://thecodexa.com" }],
  },
  {
    id: "iwas",
    name: "IWAS",
    tagline: "A permanent wall of marks, stored on Walrus",
    description:
      "A wall where people leave a permanent mark: written text or a drawing, stored forever on the Walrus decentralized network and indexed by a Sui smart contract so anyone can see it. Claude reads each mark to identify the emotion behind it, and MemWal keeps that semantic memory searchable across sessions. Built with Lorenzo Porcelli.",
    tags: ["Web3", "AI/LLM"],
    stack: "React, Sui, Walrus, Claude API",
    status: "Testnet",
    image: "assets/projects/iwas.png",
    thumbnail: "assets/projects/iwas-thumb.png",
    initial: "I",
    awards: [],
    links: [
      { label: "Live site ↗", url: "https://iwas.app/" },
      { label: "Source ↗", url: "https://github.com/GokhanCey/iwas" },
      { label: "Demo ↗", url: "https://www.youtube.com/watch?v=oxmX_fY8QaI" },
    ],
  },
  {
    id: "ecoledger",
    name: "EcoLedger",
    tagline: "Local PDF-to-Excel converter for Italian accountants",
    description:
      "A desktop app that converts Italian bank statement PDFs (Intesa Sanpaolo, UniCredit, BancoBPM, and more) into clean, audit-ready Excel files. Built for a Business & CS course: everything runs locally on the accountant's own machine, so client data never touches a server. Shipped with a full business model canvas alongside the build.",
    tags: ["Full-Stack"],
    stack: "Electron, Node.js",
    status: "Desktop App",
    image: "assets/projects/ecoledger.png",
    thumbnail: "assets/projects/ecoledger-thumb.png",
    initial: "E",
    awards: [],
    links: [{ label: "Source ↗", url: "https://github.com/GokhanCey/EcoLedger" }],
  },
  {
    id: "roomtab",
    name: "RoomTab",
    tagline: "An AI fairness engine for splitting shared costs",
    description:
      "Handles the messy, real-life parts of splitting a bill: the roommate who arrived late, the vegan who skipped the steak, the one who pays nothing. Gemini 2.0 Flash reads the situation to extract context, then a deterministic settlement engine does the actual math, keeping the two separated so the numbers never hallucinate. Every decision is logged to Opik for full observability.",
    tags: ["AI/LLM", "Full-Stack"],
    stack: "Next.js, Gemini 2.0 Flash, Opik",
    status: "Prototype",
    image: "assets/projects/roomtab.png",
    thumbnail: "assets/projects/roomtab-thumb.png",
    initial: "R",
    awards: [],
    links: [
      { label: "Live site ↗", url: "https://room-tab.vercel.app/" },
      { label: "Source ↗", url: "https://github.com/GokhanCey/RoomTab" },
      { label: "Demo ↗", url: "https://youtu.be/DkIFt4YB28s" },
    ],
  },
  {
    id: "eterna",
    name: "Eterna",
    tagline: "Autonomous AI agents that live on-chain, not on a server",
    description:
      "A platform for AI personalities that persist on the Amadeus consensus layer instead of a rented server: every inference is treated as a transaction, and an agent's memory is stored permanently on Arweave so it keeps existing even if the original app disappears. Built for the Amadeus Genesis Hack, pairing a working today-prototype with a simulation of the network's future on-chain inference (uPoW).",
    tags: ["Web3", "AI/LLM"],
    stack: "Next.js, Amadeus, Arweave",
    status: "Amadeus Genesis Hack",
    image: "assets/projects/eterna.png",
    thumbnail: "assets/projects/eterna-thumb.png",
    initial: "E",
    awards: ["Winner, Amadeus Genesis Hack ($15,000)"],
    links: [
      { label: "Live site ↗", url: "https://eterna-rust.vercel.app" },
      { label: "Source ↗", url: "https://github.com/GokhanCey/Eterna" },
      { label: "Demo ↗", url: "https://youtu.be/ZAbGLFOoDc8" },
      { label: "Hackathon page ↗", url: "https://taikai.network/amadeus/hackathons/amadeus/projects/cmjk7okli00opgpl2tkfm15ts/idea" },
    ],
  },
  {
    id: "pixelafrica",
    name: "PixelAfrica",
    tagline: "Tracking donated blood from collection to transfusion",
    description:
      "A blood-donation traceability system built on Hedera Hashgraph: every bag gets registered, tracked through transit, and verified at the hospital, with each step written to the Hedera Consensus Service and pulled back through Mirror Node APIs. No backend database, wallet-based role authentication via HashConnect, and a public page for anyone to verify a bag's full history by QR or ID.",
    tags: ["Web3"],
    stack: "Hedera Hashgraph, HashConnect",
    status: "Prototype",
    image: "assets/projects/pixelafrica.png",
    thumbnail: "assets/projects/pixelafrica-thumb.png",
    initial: "P",
    awards: [],
    links: [
      { label: "Live site ↗", url: "https://pixel-africa.vercel.app" },
      { label: "Source ↗", url: "https://github.com/GokhanCey/pixel-africa" },
      { label: "Demo ↗", url: "https://youtu.be/7joHzZael3o" },
    ],
  },
  {
    id: "somnia-arcade",
    name: "Somnia Arcade",
    tagline: "On-chain arcade with live participation",
    description:
      "A fast, fully on-chain mini-game platform built for the Somnia Testnet. Every move, revealing tiles, cashing out, is recorded on-chain, with fairness enforced through a commit-reveal randomness model using future block data.",
    tags: ["Web3"],
    stack: "JavaScript, Web3 SDKs",
    status: "Testnet",
    image: "assets/projects/somniaarcade.png",
    thumbnail: "assets/projects/somniaarcade-thumb.png",
    initial: "S",
    awards: ["2nd Prize, Somnia Mini Games Hackathon"],
    links: [
      { label: "Source ↗", url: "https://github.com/GokhanCey/SomniaArcade" },
      { label: "Hackathon page ↗", url: "https://dorahacks.io/buidl/29985" },
      { label: "Demo ↗", url: "https://www.youtube.com/watch?v=CUiuyEotrM4" },
    ],
  },
];

const TRON_AWARDS = [
  { name: "Nature Foretold", place: "2nd + 5th Place · $14,000" },
  { name: "MetaVotePoll", place: "3rd Place ×2 · $18,000" },
  { name: "AurorAqua", place: "2nd Place · $5,000" },
  { name: "MusiCoinCity", place: "2nd + 3rd Place · $19,000" },
  { name: "DreamVerser", place: "5th Place · $3,000" },
  { name: "Triton", place: "Determination Prize · $4,500" },
  { name: "QuestArcade", place: "Engagement Prize · $5,000" },
  { name: "TronPixels", place: "3rd Place · $5,000" },
  { name: "IdleTron", place: "5th Place · $3,000" },
];

const OTHER_AWARDS = [
  { name: "Eterna, Amadeus Genesis Hack", place: "Winner · $15,000" },
  { name: "Intertech Metaverse Hackathon", place: "Winner · Meta Quest 2 VR" },
  { name: "HSBC Engagement Challenge", place: "2nd (National)" },
  { name: "Arçelik Innovation Challenge", place: "3rd Place · $1,000" },
  { name: "Hack4MMO", place: "2nd Place · $1,000" },
  { name: "KFC Ideathon", place: "2nd Place" },
  { name: "Malware Arena", place: "3rd Place · $1,500" },
];

function renderFilters() {
  const bar = document.getElementById("filterBar");
  const tags = Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort();
  tags.forEach((tag) => {
    const btn = document.createElement("button");
    btn.className = "filter-chip";
    btn.dataset.filter = tag;
    btn.textContent = tag;
    bar.appendChild(btn);
  });

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    bar.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("is-active"));
    btn.classList.add("is-active");
    applyFilter(btn.dataset.filter);
  });
}

function projectMedia(project, isModal) {
  if (project.image) {
    const src = isModal ? project.image : project.thumbnail || project.image;
    return `<img src="${src}" alt="${project.name} screenshot" />`;
  }
  const hue = hashHue(project.id);
  return `<div class="project-media-mono" style="background: linear-gradient(135deg, hsl(${hue} 45% 22%), hsl(${hue + 40} 40% 14%))">${project.initial}${
    isModal ? "" : `<span class="project-status">${project.status}</span>`
  }</div>`;
}

function hashHue(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return Math.abs(hash) % 360;
}

function projectCardHTML(p) {
  return `
    <article class="project-card" data-tags="${p.tags.join(",")}" data-id="${p.id}">
      <div class="project-media">${projectMedia(p, false)}</div>
      <div class="project-body">
        <div class="project-tags">${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}</div>
        <h3>${p.name}</h3>
        <p>${p.tagline}</p>
        ${p.awards.length ? `<div class="project-award">🏆 ${p.awards[0].split("(")[0].trim()}</div>` : ""}
        <div class="project-hint">View details →</div>
      </div>
    </article>`;
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const overflow = PROJECTS.length > SHOW_LIMIT;

  const visible = overflow ? PROJECTS.slice(0, SHOW_LIMIT) : PROJECTS;
  const hidden = overflow ? PROJECTS.slice(SHOW_LIMIT) : [];

  grid.innerHTML = visible.map(projectCardHTML).join("");
  showMoreBtn.hidden = !overflow;
  showMoreBtn.textContent = `Show all ${PROJECTS.length} projects`;

  grid.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });

  showMoreBtn.addEventListener("click", () => {
    grid.insertAdjacentHTML("beforeend", hidden.map(projectCardHTML).join(""));
    grid.querySelectorAll(".project-card:not([data-bound])").forEach((card) => {
      card.setAttribute("data-bound", "1");
      card.addEventListener("click", () => openModal(card.dataset.id));
    });
    showMoreBtn.hidden = true;
  });
}

function applyFilter(filter) {
  document.querySelectorAll(".project-card").forEach((card) => {
    const tags = card.dataset.tags.split(",");
    const show = filter === "all" || tags.includes(filter);
    card.style.display = show ? "" : "none";
  });
}

function renderAwards() {
  document.getElementById("tronAwards").innerHTML = TRON_AWARDS.map(
    (a) => `<li><span class="award-name">${a.name}</span><span class="award-place">${a.place}</span></li>`
  ).join("");
  document.getElementById("otherAwards").innerHTML = OTHER_AWARDS.map(
    (a) => `<li><span class="award-name">${a.name}</span><span class="award-place">${a.place}</span></li>`
  ).join("");
}

const backdrop = document.getElementById("modalBackdrop");

function openModal(id) {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return;

  document.getElementById("modalMedia").innerHTML = projectMedia(project, true);
  document.getElementById("modalTags").innerHTML = project.tags
    .map((t) => `<span class="project-tag">${t}</span>`)
    .join("");
  document.getElementById("modalTitle").textContent = project.name;
  document.getElementById("modalDescription").textContent = project.description;
  document.getElementById("modalAwards").innerHTML = project.awards.length
    ? `<h4>Awards</h4><ul>${project.awards.map((a) => `<li>🏆 ${a}</li>`).join("")}</ul>`
    : "";
  document.getElementById("modalLinks").innerHTML =
    project.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener" class="btn btn-sm btn-primary">${l.label}</a>`).join("") ||
    `<span style="color:var(--text-faint); font-size:14px;">No public link yet.</span>`;

  backdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  backdrop.classList.remove("is-open");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
});

const burger = document.getElementById("navBurger");
burger.addEventListener("click", () => header.classList.toggle("is-open"));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      header.classList.remove("is-open");
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const themeToggle = document.getElementById("themeToggle");
const stored = (() => {
  try {
    return localStorage.getItem("gc-theme");
  } catch {
    return null;
  }
})();
if (stored) document.documentElement.setAttribute("data-theme", stored);

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("gc-theme", next);
  } catch {}
});

const glow = document.getElementById("cursorGlow");
const canHover = window.matchMedia("(hover: hover)").matches;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (canHover && !reducedMotion) {
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
    glow.classList.add("is-active");
  });
  document.addEventListener("mouseleave", () => glow.classList.remove("is-active"));
}

const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reducedMotion) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1200;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statEls = document.querySelectorAll(".stat-num[data-count]");
if ("IntersectionObserver" in window && !reducedMotion) {
  const statIo = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statIo.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  statEls.forEach((el) => statIo.observe(el));
} else {
  statEls.forEach((el) => (el.textContent = el.dataset.count));
}

renderFilters();
renderProjects();
renderAwards();
