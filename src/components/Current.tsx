import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Castle,
  Compass,
  Crown,
  Globe2,
  Hammer,
  Map,
  Monitor,
  Moon,
  Search,
  Shield,
  Skull,
  Sparkles,
  Swords,
  Terminal,
} from "lucide-react";
import {
  featuredGuilds,
  gameLoops,
  gods,
  imagePath,
  loreTimeline,
  maturityStats,
  races,
  systems,
  worldRegions,
  type GuildRole,
  type Region,
} from "../data/darkwindSnapshot";

type PageKey = "home" | "about" | "world" | "guilds" | "systems" | "races" | "start";

const pagePaths: Record<PageKey, string> = {
  home: "/",
  about: "/about",
  world: "/world",
  guilds: "/guilds",
  systems: "/systems",
  races: "/races",
  start: "/start",
};

const navItems: Array<[string, PageKey]> = [
  ["About", "about"],
  ["World", "world"],
  ["Guilds", "guilds"],
  ["Systems", "systems"],
  ["Races", "races"],
  ["Start", "start"],
];

const roles: Array<"All" | GuildRole> = [
  "All",
  "Melee",
  "Caster",
  "Support",
  "Stealth",
  "Shapeshifter",
  "Hybrid",
  "Survival",
];

const iconMap = {
  swords: Swords,
  crown: Crown,
  compass: Compass,
  hammer: Hammer,
  sparkles: Sparkles,
  skull: Skull,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

function normalizePath(pathname: string): PageKey {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/lore") return "about";
  const found = Object.entries(pagePaths).find(([, path]) => path === clean);
  return (found?.[0] as PageKey) || "home";
}

function sectionKicker(children: string) {
  return (
    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase text-[#d6a94b]">
      <span className="h-px w-8 bg-[#d6a94b]" />
      {children}
    </div>
  );
}

function Shell({ children, page, setPage }: { children: React.ReactNode; page: PageKey; setPage: (page: PageKey) => void }) {
  return (
    <main className="min-h-screen bg-[#07090b] text-[#f0eadb]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=IBM+Plex+Mono:wght@500;600&family=Spectral:wght@400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Spectral', Georgia, serif; background: #07090b; }
        .font-display { font-family: 'Cinzel', Georgia, serif; }
        .font-rune { font-family: 'IBM Plex Mono', monospace; }
        .grain {
          background-image:
            radial-gradient(circle at 20% 10%, rgba(214, 169, 75, 0.14), transparent 28rem),
            radial-gradient(circle at 80% 30%, rgba(98, 168, 199, 0.12), transparent 24rem),
            linear-gradient(180deg, #07090b 0%, #0d1116 46%, #08090b 100%);
        }
        .panel {
          background: linear-gradient(180deg, rgba(24, 30, 36, 0.86), rgba(10, 13, 16, 0.92));
          border: 1px solid rgba(222, 198, 146, 0.18);
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
          border-radius: 8px;
        }
      `}</style>
      <TopNav page={page} setPage={setPage} />
      {children}
      <Footer setPage={setPage} />
    </main>
  );
}

function go(page: PageKey, setPage: (page: PageKey) => void) {
  const path = pagePaths[page];
  window.history.pushState({ page }, "", path);
  setPage(page);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function PageLink({
  page,
  setPage,
  children,
  className,
}: {
  page: PageKey;
  setPage: (page: PageKey) => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={pagePaths[page]}
      onClick={(event) => {
        event.preventDefault();
        go(page, setPage);
      }}
      className={className}
    >
      {children}
    </a>
  );
}

function TopNav({ page, setPage }: { page: PageKey; setPage: (page: PageKey) => void }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#07090b]/84 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <PageLink page="home" setPage={setPage} className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded border border-[#d6a94b]/45 bg-[#d6a94b]/10">
            <Castle className="h-5 w-5 text-[#d6a94b]" />
          </span>
          <span className="font-display text-lg font-semibold text-white">DarkWind</span>
        </PageLink>
        <nav className="hidden items-center gap-5 text-sm text-[#d5d0c2] lg:flex">
          {navItems.map(([label, key]) => (
            <PageLink
              key={key}
              page={key}
              setPage={setPage}
              className={`transition hover:text-white ${page === key ? "text-[#d6a94b]" : ""}`}
            >
              {label}
            </PageLink>
          ))}
        </nav>
        <a
          href="https://play.darkwind.ai/"
          className="inline-flex items-center gap-2 rounded border border-[#d6a94b]/55 bg-[#d6a94b] px-3 py-2 text-sm font-bold text-[#18100a] transition hover:bg-[#f0c761]"
        >
          Play
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero({ setPage }: { setPage: (page: PageKey) => void }) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <img src={imagePath("hero-castle-gate")} alt="DarkWind castle gate" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050607] via-[#06080a]/82 to-[#050607]/35" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07090b] to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-3 rounded border border-white/15 bg-black/35 px-3 py-2 text-sm text-[#d7d0be] backdrop-blur">
            <Moon className="h-4 w-4 text-[#9bbcf7]" />
            A living fantasy MUD with modern browser play
          </div>
          <h1 className="font-display text-6xl font-bold leading-[0.95] text-white sm:text-7xl lg:text-8xl">DarkWind</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#e2dccb] sm:text-2xl">
            A decades-old command-driven RPG with deep guild mechanics, explorable continents, professions,
            divine pressure, reputation, and a browser client built for modern play.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://play.darkwind.ai/"
              className="inline-flex items-center justify-center gap-2 rounded border border-[#d6a94b] bg-[#d6a94b] px-5 py-3 font-bold text-[#15100a] transition hover:bg-[#f1c965]"
            >
              <Terminal className="h-5 w-5" />
              Play in browser
            </a>
            <PageLink
              page="world"
              setPage={setPage}
              className="inline-flex items-center justify-center gap-2 rounded border border-white/20 bg-white/8 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/14"
            >
              <Map className="h-5 w-5" />
              Explore the world
            </PageLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HomePage({ setPage }: { setPage: (page: PageKey) => void }) {
  return (
    <>
      <Hero setPage={setPage} />
      <section className="grain py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 md:grid-cols-4">
            {maturityStats.map((stat) => (
              <motion.div key={stat.label} {...fadeUp} className="panel p-5">
                <div className="font-rune text-3xl font-semibold text-[#d6a94b]">{stat.value}</div>
                <div className="mt-2 font-display text-lg text-white">{stat.label}</div>
                <p className="mt-2 text-sm leading-6 text-[#bbb4a4]">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#080b0f] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl">
            {sectionKicker("Old world")}
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              The world is still living in the shadow of divine intervention.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#c8bfad]">
              DarkWind's present is shaped by the Cataclysm, the Race Wars, and the active pressure of
              Mitra, Gaea, and Set. The gods are not decorative lore: reputation, divine omens, guild
              identity, holy hours, patron strain, and even how NPCs react can all trace back to the old
              conflict between mercy, wild balance, and shadowed ambition.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {loreTimeline.map((beat) => (
              <motion.article key={beat.title} {...fadeUp} className="panel overflow-hidden">
                <img src={imagePath(beat.image)} alt={beat.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <div className="text-sm uppercase text-[#d6a94b]">{beat.era}</div>
                  <h3 className="mt-1 font-display text-2xl text-white">{beat.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#c8bfad]">{beat.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0c1015] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl">
            {sectionKicker("Explore")}
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Follow the thread that catches your eye.
            </h2>
          </motion.div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              ["About", "about", "The Cataclysm, Race Wars, active gods, and why reputation matters.", BookOpen],
              ["World and Areas", "world", "Geshtai, Dailos, regions, wayshards, level ranges, and notable destinations.", Map],
              ["Guilds", "guilds", "Commands, resources, unlocks, and playstyle details for the major guild paths.", Crown],
              ["Systems", "systems", "Professions, reputation, waypoints, Eternal Dungeons, dailies, achievements, and Darkflow.", Hammer],
              ["Races", "races", "Playable heritages with origin flavor and identity hooks.", Globe2],
              ["Getting Started", "start", "A practical first-session route through city services, commands, guilds, and survival habits.", Compass],
            ].map(([title, key, copy, Icon]) => {
              const LucideIcon = Icon as typeof Map;
              return (
                <PageLink key={key as string} page={key as PageKey} setPage={setPage} className="panel block p-6 transition hover:border-[#d6a94b]/60">
                  <LucideIcon className="h-7 w-7 text-[#d6a94b]" />
                  <h3 className="mt-5 font-display text-2xl text-white">{title as string}</h3>
                  <p className="mt-3 text-base leading-7 text-[#c8bfad]">{copy as string}</p>
                </PageLink>
              );
            })}
          </div>
        </div>
      </section>
      <GameLoopPreview />
    </>
  );
}

function GameLoopPreview() {
  return (
    <section className="bg-[#0c1015] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-3xl">
          {sectionKicker("Core loops")}
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            A command RPG with more than combat.
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {gameLoops.map((loop) => {
            const Icon = iconMap[loop.icon as keyof typeof iconMap] || Sparkles;
            return (
              <motion.article key={loop.title} {...fadeUp} className="panel p-6">
                <Icon className="h-7 w-7 text-[#d6a94b]" />
                <h3 className="mt-5 font-display text-2xl text-white">{loop.title}</h3>
                <p className="mt-3 text-lg leading-7 text-[#ddd3bd]">{loop.short}</p>
                <p className="mt-4 text-sm leading-6 text-[#aaa294]">{loop.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PageHero({
  kicker,
  title,
  copy,
  image,
}: {
  kicker: string;
  title: string;
  copy: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 opacity-38">
        <img src={imagePath(image)} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090b]/80 via-[#07090b]/92 to-[#07090b]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-4xl">
          {sectionKicker(kicker)}
          <h1 className="font-display text-5xl font-semibold leading-tight text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[#d8cfbd]">{copy}</p>
        </motion.div>
      </div>
    </section>
  );
}

function WorldPage() {
  const [activeRegion, setActiveRegion] = useState<Region>(worldRegions[1] || worldRegions[0]);

  return (
    <>
      <PageHero
        kicker="World and areas"
        title="Geshtai, Dailos, and the roads between danger."
        copy="DarkWind is organized around player-facing worlds and regions: Geshtai's old continents, Dailos's newer wetlands, city hubs, remote islands, underworld routes, and wayshards that turn discovery into future travel."
        image="world-map"
      />
      <section className="bg-[#080b0f] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {worldRegions.map((region) => (
              <button
                key={region.name}
                onClick={() => setActiveRegion(region)}
                className={`rounded border p-4 text-left transition ${
                  activeRegion.name === region.name
                    ? "border-[#d6a94b] bg-[#d6a94b]/12"
                    : "border-white/10 bg-white/5 hover:border-white/25"
                }`}
              >
                <div className="font-display text-lg text-white">{region.name}</div>
                <div className="mt-1 text-sm text-[#aaa294]">{region.areaCount} areas, levels {region.levelRange}</div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="grain py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div {...fadeUp} className="panel overflow-hidden">
            <img src={imagePath(activeRegion.image)} alt={activeRegion.name} className="h-80 w-full object-cover" />
            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-4xl text-white">{activeRegion.name}</h2>
                <span className="font-rune rounded border border-[#d6a94b]/35 px-3 py-1 text-sm text-[#d6a94b]">
                  {activeRegion.areaCount} areas
                </span>
              </div>
              <p className="mt-4 text-lg leading-8 text-[#ddd3bd]">{activeRegion.overview || activeRegion.tone}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {activeRegion.highlights.map((highlight) => (
                  <span key={highlight} className="rounded border border-white/12 bg-white/6 px-3 py-1 text-sm text-[#cfc6b2]">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-4">
            <div className="panel p-6">
              <h3 className="font-display text-2xl text-white">How this region plays</h3>
              <p className="mt-3 text-lg leading-8 text-[#c8bfad]">{activeRegion.tone}</p>
              <div className="mt-5 space-y-3">
                {(activeRegion.routes || []).map((route) => (
                  <div key={route} className="flex gap-3 rounded border border-white/10 bg-white/5 p-3 text-sm leading-6 text-[#d8cfbd]">
                    <Compass className="mt-1 h-4 w-4 shrink-0 text-[#d6a94b]" />
                    {route}
                  </div>
                ))}
              </div>
            </div>
            <div className="panel p-6">
              <h3 className="font-display text-2xl text-white">Catalog context</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <Metric label="Areas" value={String(activeRegion.areaCount)} />
                <Metric label="Levels" value={activeRegion.levelRange} />
                <Metric label="Type" value={activeRegion.name === "Dailos" ? "Planet" : "Region"} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-[#0c1015] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl">
            {sectionKicker("Notable areas")}
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Places worth understanding before you walk in.
            </h2>
          </motion.div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {(activeRegion.notableAreas || []).map((area) => (
              <motion.article key={area.name} {...fadeUp} className="panel p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="text-sm uppercase text-[#d6a94b]">{area.region}</div>
                    <h3 className="mt-1 font-display text-2xl text-white">{area.name}</h3>
                  </div>
                  <span className="rounded border border-white/12 bg-white/5 px-3 py-1 text-sm text-[#d8cfbd]">
                    {area.levels}
                  </span>
                </div>
                <p className="mt-4 text-lg leading-8 text-[#ddd3bd]">{area.summary}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Fact title="Why go" copy={area.whyGo} icon={<Sparkles className="h-4 w-4" />} />
                  <Fact title="Watch for" copy={area.watchFor} icon={<Skull className="h-4 w-4" />} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-white/10 bg-black/18 p-4">
      <div className="text-xs uppercase text-[#8d8577]">{label}</div>
      <div className="mt-1 font-rune text-lg text-white">{value}</div>
    </div>
  );
}

function Fact({ title, copy, icon }: { title: string; copy: string; icon: React.ReactNode }) {
  return (
    <div className="rounded border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-[#d6a94b]">
        {icon}
        {title}
      </div>
      <p className="mt-2 text-sm leading-6 text-[#c8bfad]">{copy}</p>
    </div>
  );
}

function GuildsPage() {
  const [role, setRole] = useState<"All" | GuildRole>("All");
  const [query, setQuery] = useState("");
  const filteredGuilds = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return featuredGuilds.filter((guild) => {
      const matchesRole = role === "All" || guild.roles.includes(role);
      const matchesQuery =
        !needle ||
        guild.name.toLowerCase().includes(needle) ||
        guild.pitch.toLowerCase().includes(needle) ||
        guild.style.toLowerCase().includes(needle);
      return matchesRole && matchesQuery;
    });
  }, [query, role]);

  return (
    <>
      <PageHero
        kicker="Guilds"
        title="Guilds are the game's real character engines."
        copy="The strongest guilds do not just give combat verbs. They add resources, monitors, followers, rituals, style budgets, terrain rules, hidden sequences, and advancement choices that change how a character thinks."
        image="guild-bard"
      />
      <section className="bg-[#080b0f] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="panel p-4">
            <label className="flex items-center gap-3 rounded border border-white/10 bg-black/25 px-3 py-2">
              <Search className="h-5 w-5 text-[#d6a94b]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search guilds, roles, or mechanics"
                className="w-full bg-transparent text-white outline-none placeholder:text-[#827b6f]"
              />
            </label>
            <div className="mt-3 flex flex-wrap gap-2">
              {roles.map((option) => (
                <button
                  key={option}
                  onClick={() => setRole(option)}
                  className={`rounded border px-3 py-2 text-sm font-semibold transition ${
                    role === option
                      ? "border-[#d6a94b] bg-[#d6a94b] text-[#15100a]"
                      : "border-white/12 bg-white/5 text-[#d7d0be] hover:border-white/30"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="grain py-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {filteredGuilds.map((guild) => (
            <motion.article key={guild.name} {...fadeUp} className="panel overflow-hidden">
              <div className="grid gap-0 md:grid-cols-[0.82fr_1.18fr]">
                <img src={imagePath(guild.image)} alt={guild.name} className="h-full min-h-72 w-full object-cover" />
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="font-display text-3xl text-white">{guild.name}</h2>
                    <div className="flex flex-wrap gap-2">
                      {guild.roles.map((guildRole) => (
                        <span key={guildRole} className="rounded border border-[#d6a94b]/35 px-2 py-1 text-xs text-[#d6a94b]">
                          {guildRole}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-lg leading-8 text-[#ddd3bd]">{guild.pitch}</p>
                  <p className="mt-4 text-base leading-7 text-[#bdb5a5]">{guild.style}</p>
                  {guild.progression && (
                    <p className="mt-4 rounded border border-[#d6a94b]/25 bg-[#d6a94b]/8 p-3 text-sm leading-6 text-[#ead9b7]">
                      {guild.progression}
                    </p>
                  )}
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {guild.features.map((feature) => (
                      <div key={feature.label} className="rounded border border-white/10 bg-black/18 p-3">
                        <div className="text-xs uppercase text-[#8d8577]">{feature.label}</div>
                        <div className="mt-1 text-sm font-semibold text-white">{feature.value}</div>
                      </div>
                    ))}
                  </div>
                  {guild.commands && (
                    <div className="mt-5">
                      <div className="text-xs uppercase text-[#d6a94b]">Commands to recognize</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {guild.commands.map((command) => (
                          <span key={command} className="font-rune rounded border border-white/10 bg-black/25 px-2 py-1 text-xs text-[#d8cfbd]">
                            {command}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {guild.mechanics && (
                    <ul className="mt-5 space-y-2">
                      {guild.mechanics.map((mechanic) => (
                        <li key={mechanic} className="flex gap-2 text-sm leading-6 text-[#c8bfad]">
                          <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#d6a94b]" />
                          {mechanic}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}

function SystemsPage() {
  const icons = [Hammer, Award, Map, Monitor, Shield, Skull];
  return (
    <>
      <PageHero
        kicker="Systems"
        title="The mature loops that make DarkWind sticky."
        copy="Combat is only one layer. The current game tracks professions, saved reagents, reputation signs, waypoints, daily streaks, achievements, generated dungeon runs, divine pressure, and browser-client state."
        image="lore-divine-intervention"
      />
      <section className="grain py-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {systems.map((system, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article key={system.title} {...fadeUp} className="panel p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-[#d6a94b]/35 bg-[#d6a94b]/10">
                    <Icon className="h-6 w-6 text-[#d6a94b]" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold uppercase text-[#d6a94b]">{system.eyebrow}</div>
                    <h2 className="mt-1 font-display text-3xl text-white">{system.title}</h2>
                    <p className="mt-3 leading-7 text-[#c8bfad]">{system.detail}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {system.points.map((point) => (
                    <div key={point} className="rounded border border-white/10 bg-white/5 p-3 text-sm leading-6 text-[#d8cfbd]">
                      {point}
                    </div>
                  ))}
                </div>
                {system.commands && (
                  <div className="mt-5">
                    <div className="text-xs uppercase text-[#d6a94b]">Useful commands</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {system.commands.map((command) => (
                        <span key={command} className="font-rune rounded border border-white/10 bg-black/25 px-2 py-1 text-xs text-[#d8cfbd]">
                          {command}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {system.mechanics && (
                  <ul className="mt-5 space-y-2">
                    {system.mechanics.map((mechanic) => (
                      <li key={mechanic} className="flex gap-2 text-sm leading-6 text-[#c8bfad]">
                        <Compass className="mt-1 h-4 w-4 shrink-0 text-[#d6a94b]" />
                        {mechanic}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.article>
            );
          })}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="A world shaped by catastrophe, race memory, and gods."
        copy="DarkWind's lore is not just background text. The gods, old wars, and broken world pressure guild identity, reputation, divine systems, and area tone."
        image="lore-cataclysm"
      />
      <section className="bg-[#080b0f] py-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {loreTimeline.map((beat) => (
            <motion.article key={beat.title} {...fadeUp} className="panel overflow-hidden">
              <img src={imagePath(beat.image)} alt={beat.title} className="h-60 w-full object-cover" />
              <div className="p-5">
                <div className="text-sm uppercase text-[#d6a94b]">{beat.era}</div>
                <h2 className="mt-1 font-display text-2xl text-white">{beat.title}</h2>
                <p className="mt-3 leading-7 text-[#c8bfad]">{beat.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <section className="grain py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sectionKicker("Pantheon")}
          <div className="grid gap-4 lg:grid-cols-3">
            {gods.map((god) => (
              <motion.article key={god.name} {...fadeUp} className="panel overflow-hidden">
                <img src={imagePath(god.image)} alt={god.name} className="h-80 w-full object-cover object-top" />
                <div className="p-5">
                  <h2 className="font-display text-3xl text-white">{god.name}</h2>
                  <div className="mt-2 text-sm uppercase text-[#d6a94b]">{god.domain}</div>
                  <p className="mt-3 leading-7 text-[#c8bfad]">{god.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function RacesPage() {
  return (
    <>
      <PageHero
        kicker="Playable peoples"
        title="Seventeen heritages, each with a place in the world."
        copy="Character identity starts before guild choice. Heritage influences fantasy, culture, and how a player imagines moving through the old conflicts of Geshtai and beyond."
        image="race-human"
      />
      <section className="grain py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8 xl:grid-cols-6">
          {races.map((race) => (
            <motion.article key={race.name} {...fadeUp} className="group overflow-hidden rounded border border-white/10 bg-white/5">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={imagePath(race.image)} alt={race.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3">
                <h2 className="font-display text-base text-white">{race.name}</h2>
                <p className="mt-1 text-xs text-[#d6a94b]">{race.origin}</p>
                <p className="mt-2 text-xs leading-5 text-[#b6ad9c]">{race.note}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}

function StartPage() {
  return (
    <>
      <PageHero
        kicker="Getting started"
        title="A practical first-session path."
        copy="DarkWind is old and deep, so the best first experience is to learn the core loop, pick a guild direction, and use the browser client panes instead of trying to memorize everything."
        image="hero-castle-gate"
      />
      <section className="grain py-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["1", "Create and orient", "Use the browser client, read the room, find city services, and learn the prompt, score, inventory, and help habits."],
            ["2", "Try nearby areas", "Stay near Darkwind City at first. Early areas teach combat pacing, looting, retreating, and reading descriptions."],
            ["3", "Choose a guild", "Pick based on mechanics: Bard performance, Druid nwyfre, Monk chi, Ranger survival, Ninja marks, or a classic path."],
            ["4", "Learn systems slowly", "Professions, reputation, wayshards, daily rewards, and divine systems are long-term layers, not day-one chores."],
            ["5", "Ask players", "DarkWind is intentionally mysterious. Player knowledge is part of the game loop, and social channels matter."],
            ["6", "Return tomorrow", "Daily streaks, guild training, crafting, exploration, and area discovery reward repeated play."],
          ].map(([step, title, copy]) => (
            <motion.article key={step} {...fadeUp} className="panel p-6">
              <div className="font-rune text-3xl text-[#d6a94b]">{step}</div>
              <h2 className="mt-4 font-display text-2xl text-white">{title}</h2>
              <p className="mt-3 leading-7 text-[#c8bfad]">{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>
      <section className="bg-[#0c1015] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div {...fadeUp}>
            {sectionKicker("Client")}
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Browser play is the recommended first route.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#d8cfbd]">
              Darkflow gives new players a modern terminal with panels, maps, truecolor, sound hooks, GMCP
              vitals, guild panes, and notifications while preserving traditional MUD play.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://play.darkwind.ai/"
                className="inline-flex items-center justify-center gap-2 rounded border border-[#d6a94b] bg-[#d6a94b] px-5 py-3 font-bold text-[#15100a] transition hover:bg-[#f1c965]"
              >
                <Monitor className="h-5 w-5" />
                Open Darkflow
              </a>
              <a
                href="telnet://darkwind.ai:4242"
                className="inline-flex items-center justify-center gap-2 rounded border border-white/20 bg-white/8 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/14"
              >
                <Terminal className="h-5 w-5" />
                Telnet
              </a>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="panel p-5">
            <div className="rounded border border-white/10 bg-black/60 p-4 font-rune text-sm leading-7 text-[#d7d0be]">
              <div className="text-[#d6a94b]">Connected to DarkWind</div>
              <div className="mt-4 text-[#8bd3ff]">You stand before the gates of Darkwind.</div>
              <div>Obvious exits: north, south, east, west</div>
              <div className="mt-3 text-[#f2e98f]">A wayshard hums with quiet blue fire.</div>
              <div className="text-[#8effad]">A bard tunes a lute nearby.</div>
              <div className="mt-5 text-[#d6a94b]">&gt; look</div>
              <div>The city smells of rain, iron, horse leather, and old magic.</div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Footer({ setPage }: { setPage: (page: PageKey) => void }) {
  return (
    <footer className="border-t border-white/10 bg-[#060708] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="font-display text-2xl text-white">DarkWind</div>
          <p className="mt-2 text-sm text-[#aaa294]">A living MUD for players who still like mystery.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-[#d7d0be]">
          {navItems.map(([label, key]) => (
            <PageLink key={key} page={key} setPage={setPage} className="rounded border border-white/10 px-3 py-2 hover:border-white/25">
              {label}
            </PageLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

function PageBody({ page, setPage }: { page: PageKey; setPage: (page: PageKey) => void }) {
  switch (page) {
    case "world":
      return <WorldPage />;
    case "guilds":
      return <GuildsPage />;
    case "systems":
      return <SystemsPage />;
    case "about":
      return <AboutPage />;
    case "races":
      return <RacesPage />;
    case "start":
      return <StartPage />;
    default:
      return <HomePage setPage={setPage} />;
  }
}

export default function Current() {
  const [page, setPage] = useState<PageKey>(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPage(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <Shell page={page} setPage={setPage}>
      <PageBody page={page} setPage={setPage} />
    </Shell>
  );
}
