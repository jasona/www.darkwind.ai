import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sword,
  Shield,
  Skull,
  Leaf,
  Music,
  Eye,
  Zap,
  Wind,
  Compass,
  Anchor,
  Store,
  Crosshair,
  Dog,
  Castle,
  Users,
  UtensilsCrossed,
  Map,
  Sparkles,
  ChevronDown,
  Globe,
  Terminal,
  Monitor,
  Smartphone,
  Crown,
  Flame,
  Snowflake,
  Sun,
  Moon,
  Mountain,
  Waves,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const IMG = "/images";

/* ─── Google Fonts ─── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
    :root {
      --navy: #0d1117;
      --charcoal: #161b22;
      --gold: #d4a843;
      --gold-light: #e8c564;
      --gold-dim: #a68532;
      --blue: #58a6ff;
      --red: #f85149;
      --green: #238636;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      background: var(--navy);
      font-family: 'DM Sans', sans-serif;
      color: #c9d1d9;
      overflow-x: hidden;
    }
    .font-cinzel { font-family: 'Cinzel', serif; }
    .font-body { font-family: 'DM Sans', sans-serif; }
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

    @keyframes fogDrift {
      0% { transform: translateX(-10%) translateY(0); opacity: 0.3; }
      50% { transform: translateX(5%) translateY(-8px); opacity: 0.6; }
      100% { transform: translateX(-10%) translateY(0); opacity: 0.3; }
    }
    @keyframes fogDrift2 {
      0% { transform: translateX(10%) translateY(0); opacity: 0.2; }
      50% { transform: translateX(-5%) translateY(-12px); opacity: 0.5; }
      100% { transform: translateX(10%) translateY(0); opacity: 0.2; }
    }
    @keyframes particleFloat {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      50% { transform: translateY(-120px) translateX(30px); }
    }
    @keyframes swirlRotate {
      0% { transform: rotate(0deg) scale(1); opacity: 0.08; }
      50% { transform: rotate(180deg) scale(1.1); opacity: 0.15; }
      100% { transform: rotate(360deg) scale(1); opacity: 0.08; }
    }
    @keyframes glowPulse {
      0%, 100% { text-shadow: 0 0 20px rgba(212,168,67,0.4), 0 0 60px rgba(212,168,67,0.2); }
      50% { text-shadow: 0 0 30px rgba(212,168,67,0.6), 0 0 80px rgba(212,168,67,0.3), 0 0 120px rgba(212,168,67,0.1); }
    }
    .glow-text { animation: glowPulse 3s ease-in-out infinite; }
  `}</style>
);

/* ─── Fog Divider ─── */
const FogDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className={`relative w-full h-24 md:h-32 overflow-hidden ${flip ? "rotate-180" : ""}`}>
    <div
      className="absolute bottom-0 left-0 w-[120%] h-20"
      style={{
        background: `radial-gradient(ellipse at 30% 100%, rgba(212,168,67,0.06) 0%, transparent 60%),
                     radial-gradient(ellipse at 70% 100%, rgba(88,166,255,0.04) 0%, transparent 60%)`,
        animation: "fogDrift 12s ease-in-out infinite",
      }}
    />
    <div
      className="absolute bottom-0 left-0 w-[130%] h-16"
      style={{
        background: `radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.04) 0%, transparent 70%)`,
        animation: "fogDrift2 15s ease-in-out infinite",
      }}
    />
  </div>
);

/* ─── Particle System ─── */
const Particles = ({ count = 20 }: { count?: number }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 3 + 1 + "px",
          height: Math.random() * 3 + 1 + "px",
          left: Math.random() * 100 + "%",
          bottom: Math.random() * 30 + "%",
          background: i % 3 === 0 ? "rgba(212,168,67,0.6)" : "rgba(200,200,200,0.3)",
          animation: `particleFloat ${Math.random() * 8 + 6}s ease-in-out ${Math.random() * 5}s infinite`,
        }}
      />
    ))}
  </div>
);

/* ─── Section Wrapper ─── */
const Section = ({
  id,
  children,
  className = "",
  bg = "bg-navy",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  bg?: string;
}) => (
  <section id={id} className={`relative ${className}`} style={{ background: bg === "bg-navy" ? "var(--navy)" : "var(--charcoal)" }}>
    {children}
  </section>
);

/* ─── Data ─── */
const NAV_LINKS = [
  { label: "Lore", href: "#lore" },
  { label: "World", href: "#world" },
  { label: "Races", href: "#races" },
  { label: "Guilds", href: "#guilds" },
  { label: "Features", href: "#features" },
  { label: "Gods", href: "#gods" },
];

const CONTINENTS = [
  { name: "Darkwind Mainland", desc: "Cosmopolitan hub of trade, politics, and intrigue", races: ["Human", "Half-Elf", "Dwarf"], icon: Crown, img: "continent-mainland" },
  { name: "Hyperborea", desc: "Frozen tundra of glacial peaks and Viking longships", races: ["Northman", "Frost Giant", "Troll"], icon: Snowflake, img: "continent-hyperborea" },
  { name: "Souvrael", desc: "Scorching deserts, sandstone temples, and hidden oases", races: ["Drow", "Halfling", "Centaur"], icon: Sun, img: "continent-souvrael" },
  { name: "The Underworld", desc: "Bioluminescent caverns and fungal forests below the earth", races: ["Goblin", "Dark Elf"], icon: Moon, img: "continent-underworld" },
  { name: "Kerei", desc: "Mountain monasteries, cherry blossoms, and ancient pagodas", races: ["Kereian", "Ogre"], icon: Mountain, img: "continent-kerei" },
  { name: "The Islands", desc: "Volcanic archipelago of jagged cliffs and lava flows", races: ["Islander", "Lizardman"], icon: Flame, img: "continent-islands" },
  { name: "Wayfare", desc: "Colorful caravans, rolling hills, and festival lanterns", races: ["Gnome", "Faerie"], icon: Waves, img: "continent-wayfare" },
];

const RACES = [
  { name: "Human", origin: "Mainland", desc: "Versatile and ambitious, the most common race across the realm", group: "Mainland", img: "race-human" },
  { name: "Half-Elf", origin: "Mainland", desc: "Born of two worlds, gifted with grace and adaptability", group: "Mainland", img: "race-half-elf" },
  { name: "Dwarf", origin: "Mainland", desc: "Stout miners and master smiths who delve deep beneath the mountains", group: "Mainland", img: "race-dwarf" },
  { name: "Elf", origin: "Mainland", desc: "Ancient and ageless, keepers of forgotten arcane knowledge", group: "Mainland", img: "race-elf" },
  { name: "Halfling", origin: "Mainland", desc: "Quick-footed tricksters with an uncanny knack for survival", group: "Mainland", img: "race-halfling" },
  { name: "Gnome", origin: "Mainland", desc: "Clever tinkerers and illusionists, small in stature but vast in cunning", group: "Mainland", img: "race-gnome" },
  { name: "Northman", origin: "Hyperborea", desc: "Hardy warriors of the frozen wastes, born to the axe and shield", group: "Hyperborea", img: "race-northman" },
  { name: "Troll", origin: "Hyperborea", desc: "Regenerating brutes feared across the tundra for their savagery", group: "Hyperborea", img: "race-troll" },
  { name: "Ogre", origin: "Hyperborea", desc: "Towering berserkers whose strength is matched only by their hunger", group: "Hyperborea", img: "race-ogre" },
  { name: "Frost Giant", origin: "Hyperborea", desc: "Ancient colossi of ice who remember the world before the Dark Wind", group: "Hyperborea", img: "race-frost-giant" },
  { name: "Centaur", origin: "Hyperborea", desc: "Noble horsekind who roam the frozen steppes in thundering herds", group: "Hyperborea", img: "race-centaur" },
  { name: "Drow", origin: "Souvrael", desc: "Dark-skinned desert mystics wielding sand magic and ancient rites", group: "Souvrael", img: "race-drow" },
  { name: "Lizardman", origin: "Souvrael", desc: "Cold-blooded warriors at home in the scorching dunes and swamps", group: "Souvrael", img: "race-lizardman" },
  { name: "Kereian", origin: "Kerei", desc: "Disciplined monks and samurai from the eastern mountain kingdoms", group: "Souvrael", img: "race-kereian" },
  { name: "Goblin", origin: "Underworld", desc: "Cunning scavengers of the deep, experts in poison and trapcraft", group: "Underworld", img: "race-goblin" },
  { name: "Dark Elf", origin: "Underworld", desc: "Exiled elves twisted by centuries in the lightless caverns below", group: "Underworld", img: "race-dark-elf" },
  { name: "Blancmange", origin: "Unknown", desc: "An amorphous race of sentient beings, now extinct — lost to the Dark Wind", group: "Extinct", img: "race-blancmange" },
];

const GUILDS = [
  { name: "Fighter", type: "Melee", abilities: ["Cleave", "Shield Wall", "Battle Cry", "Riposte"], color: "#dc2626", icon: Sword, img: "guild-fighter" },
  { name: "Thief", type: "Stealth", abilities: ["Backstab", "Pickpocket", "Shadow Step", "Disarm Trap"], color: "#6b7280", icon: Eye, img: "guild-thief" },
  { name: "Mage", type: "Caster", abilities: ["Fireball", "Teleport", "Arcane Shield", "Meteor"], color: "#3b82f6", icon: Sparkles, img: "guild-mage" },
  { name: "Cleric", type: "Support", abilities: ["Heal", "Sanctuary", "Holy Smite", "Resurrect"], color: "#eab308", icon: Shield, img: "guild-cleric" },
  { name: "Necromancer", type: "Caster", abilities: ["Raise Dead", "Soul Drain", "Bone Armor", "Death Coil"], color: "#7c3aed", icon: Skull, img: "guild-necromancer" },
  { name: "Druid", type: "Shapeshifter", abilities: ["Wild Shape", "Entangle", "Nature's Wrath", "Regrowth"], color: "#16a34a", icon: Leaf, img: "guild-druid" },
  { name: "Bard", type: "Support", abilities: ["War Song", "Lullaby", "Inspire", "Discord"], color: "#ec4899", icon: Music, img: "guild-bard" },
  { name: "Ninja", type: "Stealth", abilities: ["Shuriken", "Vanish", "Assassinate", "Smoke Bomb"], color: "#475569", icon: Wind, img: "guild-ninja" },
  { name: "Garou", type: "Shapeshifter", abilities: ["Wolf Form", "Howl", "Frenzy", "Pack Bond"], color: "#92400e", icon: Dog, img: "guild-garou" },
  { name: "Psionicist", type: "Caster", abilities: ["Mind Blast", "Telekinesis", "Psychic Shield", "Dominate"], color: "#06b6d4", icon: Zap, img: "guild-psionicist" },
  { name: "Charlatan", type: "Stealth", abilities: ["Disguise", "Con", "Misdirect", "Forgery"], color: "#d97706", icon: Users, img: "guild-charlatan" },
  { name: "Swashbuckler", type: "Melee", abilities: ["Lunge", "Parry", "Flourish", "Riposte"], color: "#b91c1c", icon: Compass, img: "guild-swashbuckler" },
];

const FEATURES = [
  { title: "Naval Exploration", desc: "Sail between continents on carracks, galleys, and catamarans", icon: Anchor, span: "md:col-span-2" },
  { title: "Player Economy", desc: "Own pubs, trade at auctions, build your fortune", icon: Store, span: "" },
  { title: "Deep Combat", desc: "Critical strikes, damage types, armor absorption, and guild-specific combat styles", icon: Crosshair, span: "" },
  { title: "Pets & Mounts", desc: "Tame animals, summon familiars, stable your companions", icon: Dog, span: "md:col-span-2" },
  { title: "Clan Warfare", desc: "Build citadels, wage PvP in designated zones, rise in the ranks", icon: Castle, span: "" },
  { title: "27 Unique Classes", desc: "From Fighters to Charlatans, Samurai to Werewolves", icon: Users, span: "" },
  { title: "Food & Drink", desc: "Heal at taverns, brew poisons, feast before battle", icon: UtensilsCrossed, span: "" },
  { title: "Seven Continents", desc: "From frozen Hyperborea to the volcanic Islands", icon: Map, span: "md:col-span-2" },
];

/* ─── MAIN COMPONENT ─── */
export default function DarkwindLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const raceScrollRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["lore", "world", "races", "guilds", "features", "gods", "play"];
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollRaces = (dir: number) => {
    raceScrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const typeBadgeColor = (type: string) => {
    switch (type) {
      case "Melee": return "bg-red-900/60 text-red-300";
      case "Caster": return "bg-blue-900/60 text-blue-300";
      case "Stealth": return "bg-gray-800/80 text-gray-300";
      case "Support": return "bg-yellow-900/60 text-yellow-300";
      case "Shapeshifter": return "bg-green-900/60 text-green-300";
      default: return "bg-gray-800 text-gray-300";
    }
  };

  return (
    <>
      <FontLoader />

      {/* ═══════ STICKY NAV ═══════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(13,17,23,0.92)" : "rgba(13,17,23,0.3)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
          borderBottom: scrolled ? "1px solid rgba(212,168,67,0.15)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#" className="font-cinzel text-xl font-bold tracking-widest" style={{ color: "var(--gold)" }}>
            DARKWIND
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm tracking-wide transition-colors duration-300"
                style={{
                  color: activeSection === link.href.slice(1) ? "var(--gold)" : "rgba(201,209,217,0.7)",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="https://play.darkwind.ai"
            className="font-body text-sm font-semibold px-5 py-2 rounded transition-all duration-300 hover:brightness-110"
            style={{ background: "var(--green)", color: "#fff" }}
          >
            Play Now
          </a>
        </div>
      </nav>

      {/* ═══════ 1. HERO ═══════ */}
      <div ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={`${IMG}/hero-castle-gate.jpg`}
            alt="A towering stone fortress at dusk with torchlit cobblestone path"
            className="w-full h-[120%] object-cover"
          />
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0" style={{
            background: `
              linear-gradient(180deg, rgba(13,17,23,0.3) 0%, rgba(13,17,23,0.1) 30%, rgba(13,17,23,0.4) 60%, rgba(13,17,23,0.95) 100%),
              radial-gradient(ellipse at center, transparent 30%, rgba(13,17,23,0.5) 100%)
            `,
          }} />
        </motion.div>

        <Particles count={25} />

        <div className="absolute bottom-0 left-0 w-[120%] h-40 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 40% 100%, rgba(13,17,23,0.9) 0%, transparent 70%)",
          animation: "fogDrift 10s ease-in-out infinite",
        }} />
        <div className="absolute bottom-0 left-0 w-[130%] h-32 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 60% 100%, rgba(22,27,34,0.8) 0%, transparent 60%)",
          animation: "fogDrift2 13s ease-in-out infinite",
        }} />

        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(13,17,23,0.6) 100%)",
        }} />

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1
            className="font-cinzel text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em] glow-text"
            style={{ color: "var(--gold)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            DARKWIND
          </motion.h1>
          <motion.p
            className="font-cinzel text-base sm:text-lg md:text-xl tracking-[0.2em] mt-4 uppercase"
            style={{ color: "rgba(212,168,67,0.7)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            A World Reborn From Darkness — Since 1992
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://play.darkwind.ai"
              className="font-body font-semibold text-base px-8 py-3 rounded transition-all duration-300 hover:brightness-110 hover:scale-105"
              style={{ background: "var(--green)", color: "#fff" }}
            >
              Play Now
            </a>
            <a
              href="#lore"
              className="font-body font-semibold text-base px-8 py-3 rounded border transition-all duration-300 hover:bg-white/5"
              style={{ borderColor: "rgba(212,168,67,0.5)", color: "var(--gold)" }}
            >
              Learn More
            </a>
          </motion.div>
          <motion.div
            className="absolute bottom-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={28} style={{ color: "rgba(212,168,67,0.5)" }} />
          </motion.div>
        </motion.div>
      </div>

      {/* ═══════ 2. LORE ═══════ */}
      <FogDivider />
      <Section id="lore" bg="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16 pt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider" style={{ color: "var(--gold)" }}>
              The Dark Wind
            </h2>
            <div className="w-24 h-0.5 mx-auto mt-4" style={{ background: "linear-gradient(90deg, transparent, var(--gold-dim), transparent)" }} />
          </motion.div>
        </div>

        {/* Panel 1 — The Cataclysm */}
        <motion.div
          className="relative min-h-[50vh] flex items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0">
            <img
              src={`${IMG}/lore-cataclysm.jpg`}
              alt="Apocalyptic supernatural cataclysm destroying a medieval city"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(180deg, rgba(13,17,23,0.5) 0%, rgba(13,17,23,0.3) 40%, rgba(13,17,23,0.6) 100%)",
            }} />
            <div className="absolute inset-0" style={{
              background: "radial-gradient(ellipse at center, transparent 20%, rgba(13,17,23,0.7) 100%)",
            }} />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center">
            <p className="font-cinzel text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "var(--red)" }}>
              The Cataclysm
            </p>
            <p className="font-body text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ color: "rgba(201,209,217,0.85)" }}>
              1,800 years ago, an unliving force of pure malice swept across the world.
              <span className="block mt-3" style={{ color: "rgba(201,209,217,0.6)" }}>
                Cities fell. Nations were erased. All history before this moment was lost.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Panel 2 — Divine Intervention */}
        <motion.div
          className="relative min-h-[50vh] flex items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0">
            <img
              src={`${IMG}/lore-divine-intervention.jpg`}
              alt="Three divine figures descending upon a war-torn battlefield"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(180deg, rgba(13,17,23,0.5) 0%, rgba(13,17,23,0.25) 40%, rgba(13,17,23,0.6) 100%)",
            }} />
            <div className="absolute inset-0" style={{
              background: "radial-gradient(ellipse at center, transparent 20%, rgba(13,17,23,0.65) 100%)",
            }} />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center">
            <p className="font-cinzel text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold-dim)" }}>
              Divine Intervention
            </p>
            <p className="font-body text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ color: "rgba(201,209,217,0.85)" }}>
              The survivors tore themselves apart in the Race Wars that followed. Until three gods descended —
              <span className="font-semibold" style={{ color: "#7cb87c" }}> Gaea</span>,
              <span className="font-semibold" style={{ color: "var(--gold-light)" }}> Mitra</span>, and
              <span className="font-semibold" style={{ color: "#a070d0" }}> Set</span> —
              to end the bloodshed and forge a fragile peace.
            </p>
          </div>
        </motion.div>

        {/* Panel 3 — The Founding */}
        <motion.div
          className="relative min-h-[50vh] flex items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0">
            <img
              src={`${IMG}/lore-founding.jpg`}
              alt="Radiant coastal bay at sunrise with the first stones of Darkwind City"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0" style={{
              background: "linear-gradient(180deg, rgba(13,17,23,0.4) 0%, rgba(13,17,23,0.2) 40%, rgba(13,17,23,0.6) 100%)",
            }} />
            <div className="absolute inset-0" style={{
              background: "radial-gradient(ellipse at center, transparent 20%, rgba(13,17,23,0.6) 100%)",
            }} />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center">
            <p className="font-cinzel text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>
              The Founding
            </p>
            <p className="font-body text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ color: "rgba(201,209,217,0.85)" }}>
              From the ashes, the Immortals built a city open to all races.
              <span className="block mt-3 font-cinzel text-2xl md:text-3xl font-semibold" style={{ color: "var(--gold)" }}>
                They named it Darkwind.
              </span>
            </p>
          </div>
        </motion.div>
      </Section>

      {/* ═══════ 3. WORLD MAP ═══════ */}
      <FogDivider />
      <Section id="world" bg="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider" style={{ color: "var(--gold)" }}>
              Seven Continents
            </h2>
            <p className="font-body text-base mt-4" style={{ color: "rgba(201,209,217,0.6)" }}>
              A world vast and varied — each land holds its own dangers and wonders
            </p>
            <div className="w-24 h-0.5 mx-auto mt-4" style={{ background: "linear-gradient(90deg, transparent, var(--gold-dim), transparent)" }} />
          </motion.div>

          {/* World Map */}
          <motion.div
            className="relative w-full max-w-4xl mx-auto mb-16 rounded overflow-hidden"
            style={{ aspectRatio: "16/9" }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={`${IMG}/world-map.jpg`}
              alt="Hand-drawn dark fantasy world map of the seven continents"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0" style={{
              background: "radial-gradient(ellipse at center, transparent 40%, rgba(13,17,23,0.5) 100%)",
            }} />
            <div className="absolute inset-0 border border-amber-900/20 rounded" />
          </motion.div>

          {/* Continent Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {CONTINENTS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.name}
                  className="group relative rounded overflow-hidden cursor-pointer"
                  style={{ background: "var(--navy)", border: "1px solid rgba(212,168,67,0.1)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={`${IMG}/${c.img}.jpg`}
                      alt={`${c.name} landscape`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0" style={{
                      background: "linear-gradient(180deg, transparent 30%, rgba(13,17,23,0.9) 100%)",
                    }} />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={18} style={{ color: "var(--gold-dim)" }} />
                      <h3 className="font-cinzel text-sm font-semibold tracking-wide" style={{ color: "var(--gold-light)" }}>
                        {c.name}
                      </h3>
                    </div>
                    <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "rgba(201,209,217,0.6)" }}>
                      {c.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.races.map((r) => (
                        <span
                          key={r}
                          className="font-body text-xs px-2 py-0.5 rounded-sm"
                          style={{ background: "rgba(212,168,67,0.1)", color: "rgba(212,168,67,0.7)" }}
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,168,67,0.06), transparent 70%)" }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ═══════ 4. RACES ═══════ */}
      <FogDivider />
      <Section id="races" bg="bg-navy">
        <div className="py-24 md:py-32">
          <motion.div
            className="text-center mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider" style={{ color: "var(--gold)" }}>
              Choose Your Heritage
            </h2>
            <p className="font-body text-base mt-4" style={{ color: "rgba(201,209,217,0.6)" }}>
              17 races shaped by the lands they call home
            </p>
            <div className="w-24 h-0.5 mx-auto mt-4" style={{ background: "linear-gradient(90deg, transparent, var(--gold-dim), transparent)" }} />
          </motion.div>

          <div className="relative max-w-[100vw]">
            <button
              onClick={() => scrollRaces(-1)}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full transition-colors"
              style={{ background: "rgba(13,17,23,0.8)", border: "1px solid rgba(212,168,67,0.3)" }}
            >
              <ChevronLeft size={20} style={{ color: "var(--gold)" }} />
            </button>
            <button
              onClick={() => scrollRaces(1)}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full transition-colors"
              style={{ background: "rgba(13,17,23,0.8)", border: "1px solid rgba(212,168,67,0.3)" }}
            >
              <ChevronRight size={20} style={{ color: "var(--gold)" }} />
            </button>

            <div
              ref={raceScrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-16 pb-4"
            >
              {RACES.map((race, i) => {
                const isExtinct = race.group === "Extinct";
                return (
                  <motion.div
                    key={race.name}
                    className="flex-shrink-0 w-56 rounded overflow-hidden relative"
                    style={{
                      background: "var(--navy)",
                      border: isExtinct
                        ? "1px solid rgba(100,100,100,0.3)"
                        : "1px solid rgba(212,168,67,0.1)",
                      filter: isExtinct ? "grayscale(0.8)" : "none",
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div className="w-full h-56 relative overflow-hidden">
                      <img
                        src={`${IMG}/${race.img}.jpg`}
                        alt={`${race.name} portrait`}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                      <div className="absolute inset-0" style={{
                        background: "linear-gradient(180deg, transparent 50%, rgba(13,17,23,0.8) 100%)",
                      }} />
                      {isExtinct && (
                        <>
                          <div className="absolute inset-0" style={{
                            background: `
                              linear-gradient(45deg, transparent 30%, rgba(100,100,100,0.25) 30.5%, transparent 31%),
                              linear-gradient(-30deg, transparent 40%, rgba(100,100,100,0.2) 40.5%, transparent 41%),
                              linear-gradient(60deg, transparent 60%, rgba(80,80,80,0.15) 60.5%, transparent 61%)
                            `,
                          }} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-cinzel text-xs tracking-[0.3em] uppercase px-3 py-1 rounded-sm"
                              style={{ background: "rgba(0,0,0,0.7)", color: "rgba(248,81,73,0.8)", border: "1px solid rgba(248,81,73,0.3)" }}>
                              Extinct
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="p-4">
                      <h3
                        className="font-cinzel text-sm font-semibold tracking-wider"
                        style={{ color: isExtinct ? "rgba(150,150,150,0.6)" : "var(--gold)" }}
                      >
                        {race.name}
                      </h3>
                      <span
                        className="inline-block font-body text-[10px] tracking-wide uppercase mt-1 px-2 py-0.5 rounded-sm"
                        style={{
                          background: "rgba(88,166,255,0.1)",
                          color: isExtinct ? "rgba(150,150,150,0.4)" : "rgba(88,166,255,0.7)",
                        }}
                      >
                        {race.origin}
                      </span>
                      <p className="font-body text-xs mt-2 leading-relaxed" style={{
                        color: isExtinct ? "rgba(150,150,150,0.4)" : "rgba(201,209,217,0.5)",
                      }}>
                        {race.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════ 5. GUILDS ═══════ */}
      <FogDivider />
      <Section id="guilds" bg="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider" style={{ color: "var(--gold)" }}>
              Master Your Path
            </h2>
            <p className="font-body text-base mt-4" style={{ color: "rgba(201,209,217,0.6)" }}>
              12 guilds, each with a unique combat philosophy and playstyle
            </p>
            <div className="w-24 h-0.5 mx-auto mt-4" style={{ background: "linear-gradient(90deg, transparent, var(--gold-dim), transparent)" }} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {GUILDS.map((guild, i) => {
              return (
                <motion.div
                  key={guild.name}
                  className="group relative rounded overflow-hidden"
                  style={{
                    background: "rgba(13,17,23,0.6)",
                    borderLeft: `3px solid ${guild.color}`,
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    borderRight: "1px solid rgba(255,255,255,0.05)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-full h-40 relative overflow-hidden">
                    <img
                      src={`${IMG}/${guild.img}.jpg`}
                      alt={`${guild.name} class illustration`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0" style={{
                      background: `linear-gradient(180deg, transparent 30%, rgba(13,17,23,0.85) 100%)`,
                    }} />
                    {/* Color tint overlay */}
                    <div className="absolute inset-0 opacity-20" style={{
                      background: `linear-gradient(135deg, ${guild.color}40, transparent)`,
                    }} />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-cinzel text-sm font-semibold tracking-wider" style={{ color: "var(--gold)" }}>
                        {guild.name}
                      </h3>
                      <span className={`font-body text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-sm ${typeBadgeColor(guild.type)}`}>
                        {guild.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {guild.abilities.map((a) => (
                        <span
                          key={a}
                          className="font-body text-[10px] px-2 py-0.5 rounded-sm"
                          style={{
                            background: `${guild.color}15`,
                            color: `${guild.color}bb`,
                            border: `1px solid ${guild.color}25`,
                          }}
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 0% 50%, ${guild.color}10, transparent 70%)` }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ═══════ 6. FEATURES ═══════ */}
      <FogDivider />
      <Section id="features" bg="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider" style={{ color: "var(--gold)" }}>
              A Living World
            </h2>
            <p className="font-body text-base mt-4" style={{ color: "rgba(201,209,217,0.6)" }}>
              More than a game — a persistent realm with deep systems
            </p>
            <div className="w-24 h-0.5 mx-auto mt-4" style={{ background: "linear-gradient(90deg, transparent, var(--gold-dim), transparent)" }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  className={`group relative rounded overflow-hidden p-6 ${f.span}`}
                  style={{
                    background: "rgba(22,27,34,0.8)",
                    border: "1px solid rgba(212,168,67,0.08)",
                  }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ borderColor: "rgba(212,168,67,0.2)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded flex items-center justify-center"
                      style={{ background: "rgba(212,168,67,0.08)" }}
                    >
                      <Icon size={22} style={{ color: "var(--gold-dim)" }} />
                    </div>
                    <div>
                      <h3 className="font-cinzel text-sm font-semibold tracking-wider mb-1.5" style={{ color: "var(--gold-light)" }}>
                        {f.title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(201,209,217,0.55)" }}>
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ═══════ 7. GODS ═══════ */}
      <FogDivider />
      <Section id="gods" bg="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider" style={{ color: "var(--gold)" }}>
              Three Powers Shape the World
            </h2>
            <div className="w-24 h-0.5 mx-auto mt-4" style={{ background: "linear-gradient(90deg, transparent, var(--gold-dim), transparent)" }} />
          </motion.div>

          {/* Triptych */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
            {/* Mitra */}
            <motion.div
              className="relative rounded overflow-hidden"
              style={{ border: "1px solid rgba(212,168,67,0.15)" }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-72 md:h-96 overflow-hidden">
                <img
                  src={`${IMG}/god-mitra.jpg`}
                  alt="Mitra, Goddess of Goodness — golden radiance and divine light"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 40%, rgba(13,17,23,0.7) 100%)",
                }} />
              </div>
              <div className="p-6 text-center" style={{ background: "rgba(13,17,23,0.6)" }}>
                <h3 className="font-cinzel text-xl font-bold tracking-wider mb-2" style={{ color: "var(--gold-light)" }}>
                  Mitra
                </h3>
                <p className="font-cinzel text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(212,168,67,0.5)" }}>
                  Goddess of Goodness
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(201,209,217,0.6)" }}>
                  She guides through priests and champions. Her light pushes back the lingering darkness, offering redemption to those who seek it.
                </p>
              </div>
            </motion.div>

            {/* Gaea (center, larger) */}
            <motion.div
              className="relative rounded overflow-hidden md:-mt-4 md:mb-[-16px]"
              style={{ border: "1px solid rgba(100,180,80,0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="relative w-full h-72 md:h-[420px] overflow-hidden">
                <img
                  src={`${IMG}/god-gaea.jpg`}
                  alt="Gaea, the Earth Mother — roots and vines, emerald energy"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 40%, rgba(13,17,23,0.7) 100%)",
                }} />
              </div>
              <div className="p-6 text-center" style={{ background: "rgba(13,17,23,0.6)" }}>
                <h3 className="font-cinzel text-2xl font-bold tracking-wider mb-2" style={{ color: "#7cb87c" }}>
                  Gaea
                </h3>
                <p className="font-cinzel text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(100,180,80,0.6)" }}>
                  The Earth Mother
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(201,209,217,0.6)" }}>
                  She restored the broken world and created the Immortals. The land itself bends to her will — roots, rivers, and stone are her instruments.
                </p>
              </div>
            </motion.div>

            {/* Set */}
            <motion.div
              className="relative rounded overflow-hidden"
              style={{ border: "1px solid rgba(120,50,180,0.15)" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full h-72 md:h-96 overflow-hidden">
                <img
                  src={`${IMG}/god-set.jpg`}
                  alt="Set, God of Chaos — dark purple chaos energy and serpentine motifs"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, transparent 40%, rgba(13,17,23,0.7) 100%)",
                }} />
              </div>
              <div className="p-6 text-center" style={{ background: "rgba(13,17,23,0.6)" }}>
                <h3 className="font-cinzel text-xl font-bold tracking-wider mb-2" style={{ color: "#a070d0" }}>
                  Set
                </h3>
                <p className="font-cinzel text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(120,50,180,0.6)" }}>
                  God of Chaos
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(201,209,217,0.6)" }}>
                  He offers power to those bold enough to seize it. Through corruption and ambition, his influence spreads like venom through the world.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="font-cinzel text-center text-sm sm:text-base tracking-[0.1em] mt-12"
            style={{ color: "rgba(201,209,217,0.4)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            The gods cannot directly intervene. Their war for influence is fought through <span style={{ color: "var(--gold)" }}>you</span>.
          </motion.p>
        </div>
      </Section>

      {/* ═══════ 8. PLAY NOW CTA ═══════ */}
      <FogDivider />
      <Section id="play" bg="bg-navy">
        <div className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style={{
              background: "radial-gradient(circle, rgba(212,168,67,0.04), transparent 70%)",
              animation: "swirlRotate 20s linear infinite",
            }} />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full" style={{
              background: "radial-gradient(circle, rgba(88,166,255,0.03), transparent 70%)",
              animation: "swirlRotate 25s linear infinite reverse",
            }} />
          </div>

          <Particles count={15} />

          <motion.div
            className="relative z-10 max-w-2xl mx-auto text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider glow-text" style={{ color: "var(--gold)" }}>
              The Realm Awaits
            </h2>
            <p className="font-body text-base sm:text-lg mt-6 leading-relaxed" style={{ color: "rgba(201,209,217,0.6)" }}>
              Darkwind has been running continuously since 1992. Join thousands of adventurers who have shaped this world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="https://play.darkwind.ai"
                className="font-body font-semibold text-base px-10 py-4 rounded transition-all duration-300 hover:brightness-110 hover:scale-105 flex items-center justify-center gap-2"
                style={{ background: "var(--green)", color: "#fff" }}
              >
                <Monitor size={18} />
                Play in Browser
              </a>
              <button
                className="font-body font-semibold text-base px-10 py-4 rounded transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2"
                style={{ border: "1px solid rgba(88,166,255,0.4)", color: "var(--blue)" }}
                onClick={() => {
                  alert("Connect via telnet:\n\nHost: darkwind.ai\nPort: 4000\n\nExample: telnet darkwind.ai 4000");
                }}
              >
                <Terminal size={18} />
                Connect via Telnet
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                { label: "Free to Play", icon: Sparkles },
                { label: "No Download Required", icon: Globe },
                { label: "Cross-Platform", icon: Smartphone },
              ].map(({ label, icon: BadgeIcon }) => (
                <div key={label} className="flex items-center gap-2">
                  <BadgeIcon size={14} style={{ color: "var(--gold-dim)" }} />
                  <span className="font-body text-xs tracking-wide uppercase" style={{ color: "rgba(201,209,217,0.4)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════ 9. FOOTER ═══════ */}
      <footer style={{ background: "#0a0d12", borderTop: "1px solid rgba(212,168,67,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-cinzel text-xl font-bold tracking-[0.15em]" style={{ color: "var(--gold)" }}>
                DARKWIND
              </h3>
              <p className="font-body text-xs mt-1" style={{ color: "rgba(201,209,217,0.3)" }}>
                A world reborn from darkness since 1992
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-xs tracking-wide transition-colors hover:text-amber-400"
                  style={{ color: "rgba(201,209,217,0.4)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://play.darkwind.ai"
                className="font-body text-xs tracking-wide transition-colors hover:text-amber-400"
                style={{ color: "rgba(201,209,217,0.4)" }}
              >
                Play Now
              </a>
            </div>

            <div className="flex gap-4">
              {["Discord", "Reddit", "Wiki"].map((s) => (
                <span
                  key={s}
                  className="font-body text-[10px] tracking-wide uppercase px-3 py-1 rounded-sm cursor-pointer transition-colors hover:border-amber-700"
                  style={{ border: "1px solid rgba(201,209,217,0.15)", color: "rgba(201,209,217,0.3)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 text-center" style={{ borderTop: "1px solid rgba(201,209,217,0.06)" }}>
            <p className="font-body text-[10px]" style={{ color: "rgba(201,209,217,0.2)" }}>
              Darkwind — A world reborn from darkness since 1992. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
