export type GuildRole =
  | "Melee"
  | "Caster"
  | "Support"
  | "Stealth"
  | "Shapeshifter"
  | "Hybrid"
  | "Survival";

export type MaturityStat = {
  value: string;
  label: string;
  detail: string;
};

export type GameLoop = {
  title: string;
  short: string;
  detail: string;
  icon: string;
};

export type GuildFeature = {
  label: string;
  value: string;
};

export type Guild = {
  name: string;
  roles: GuildRole[];
  image?: string;
  pitch: string;
  style: string;
  features: GuildFeature[];
  mechanics?: string[];
  commands?: string[];
  progression?: string;
};

export type Region = {
  name: string;
  image: string;
  areaCount: number;
  levelRange: string;
  tone: string;
  highlights: string[];
  overview?: string;
  routes?: string[];
  notableAreas?: AreaSpotlight[];
};

export type AreaSpotlight = {
  name: string;
  levels: string;
  region: string;
  summary: string;
  whyGo: string;
  watchFor: string;
};

export type Race = {
  name: string;
  image: string;
  origin: string;
  note: string;
};

export type SystemFeature = {
  title: string;
  eyebrow: string;
  detail: string;
  points: string[];
  commands?: string[];
  mechanics?: string[];
};

export type LoreBeat = {
  title: string;
  image: string;
  era: string;
  detail: string;
};

export type God = {
  name: string;
  image: string;
  domain: string;
  detail: string;
};

export const imagePath = (name: string) => `/images/${name}.jpg`;

export const maturityStats: MaturityStat[] = [
  {
    value: "1992",
    label: "living world",
    detail: "A long-running MUD with decades of systems, lore, and player history.",
  },
  {
    value: "189",
    label: "cataloged areas",
    detail: "A large world map spanning Geshtai, Dailos, and legacy continents.",
  },
  {
    value: "16",
    label: "guild paths",
    detail: "Highlighted live guilds with distinct playstyles, resources, commands, and progression.",
  },
  {
    value: "17",
    label: "playable peoples",
    detail: "From humans and elves to ogres, northmen, kereians, and stranger bloodlines.",
  },
];

export const gameLoops: GameLoop[] = [
  {
    title: "Adventure and combat",
    short: "Explore areas, fight upward, chase bosses, and build around your guild.",
    detail:
      "DarkWind is still a command-driven fantasy RPG at its core: rooms, monsters, loot, skills, danger, and player knowledge.",
    icon: "swords",
  },
  {
    title: "Guild identity",
    short: "Every serious character is shaped by guild mechanics, not just a class name.",
    detail:
      "Bards sustain songs, Druids manage nwyfre and companions, Monks build chi, Rangers work terrain, and many guilds carry their own economies and rituals.",
    icon: "crown",
  },
  {
    title: "World discovery",
    short: "Find areas, attune wayshards, learn travel routes, and read the world itself.",
    detail:
      "The area catalog and waypoint systems are being built around player-facing geography instead of raw directory paths.",
    icon: "compass",
  },
  {
    title: "Professions",
    short: "Gather reagents, craft gear, improve items, run work orders, and feed the economy.",
    detail:
      "Professions are a parallel progression loop with inlays, polish, workers, tailoring, smithing, alchemy, and broader reagent use.",
    icon: "hammer",
  },
  {
    title: "Daily momentum",
    short: "Log in, collect daily streak rewards, earn achievements, and build long-term account progress.",
    detail:
      "Daily rewards and account-linked systems are designed to reward returning players without forcing every alt into the same routine.",
    icon: "sparkles",
  },
  {
    title: "Eternal Dungeons",
    short: "Challenge-driven dungeon runs with scaling structure and separate progression hooks.",
    detail:
      "Eternal Dungeons v2 is moving toward more varied objectives, leaderboards, and runs that feel different from simply killing one final boss.",
    icon: "skull",
  },
];

export const featuredGuilds: Guild[] = [
  {
    name: "Bard",
    roles: ["Support", "Hybrid"],
    image: "guild-bard",
    pitch:
      "A rebuilt performance guild built around instruments, songs, harmonies, archetypes, and room-moving musical fields.",
    style: "Conduct the fight, layer pressure, and turn Charisma into real battlefield control.",
    features: [
      { label: "Core", value: "Performance" },
      { label: "Identity", value: "Archetypes" },
      { label: "Discovery", value: "Harmonies" },
    ],
    commands: ["bscore", "bmon", "instrument <name>", "specialize <archetype>", "pulsebeat", "apexchord", "echoburst"],
    progression:
      "Performance is a 0-100 momentum meter. Charisma improves gains, song-field strength, duration, and hidden harmony rewards. Archetypes unlock at guild level 10.",
    mechanics: [
      "Battle songs create song fields that follow the Bard from room to room and pulse effects while active.",
      "Song forms include Rhythm, Melody, Harmony, Dissonance, Crescendo, and Finale.",
      "Apex Chord requires high Performance; Finale songs such as Echo Burst and Battlefield Silence spend an active Crescendo.",
      "More than twenty hidden song-form sequences can resolve into discoverable harmonies.",
      "Instruments change behavior: flute unlocks Whisper Canticle, chimes unlock Mirror Refrain, violin strengthens dread and reputation songs, drums/horn/war harp push battle support.",
      "Archetypes include War Conductor, Shadow Minstrel, Skald, Virtuoso, and Doom Singer.",
    ],
  },
  {
    name: "Druid",
    roles: ["Support", "Shapeshifter", "Hybrid"],
    image: "guild-druid",
    pitch:
      "A nature guild with nwyfre currents, groves, rituals, companions, vines, skyblades, and living resource management.",
    style: "Balance elemental bars, shape the battlefield, and let the wild grow with you.",
    features: [
      { label: "Resource", value: "Nwyfre" },
      { label: "Allies", value: "Companions" },
      { label: "Combat", value: "Vines" },
    ],
    commands: ["nwyfre", "nwyfre moons", "nwyfre ritual <name>", "ritual stop <name>", "companions", "companions summon <animal>", "vines <mode>"],
    progression:
      "Druid invocations spend nwyfre instead of spell points. Companions level from battle participation, and Living Vines unlock modes through training and guild level.",
    mechanics: [
      "Nwyfre has four vessels: Tellurian for earth/body/grove, Daloan for turmoil/flame/savagery, Marken for healing/renewal, and Tekali for knowledge/frost/sight/wind.",
      "Moon phases and world location alter regeneration and costs. Darkwind favors Tellurian, while Dailos, Markas, and Tekal favor their matching currents.",
      "Rituals can restore, convert, expand, or reduce the cost of currents. Long-running rituals such as Verdant Refrain remain active until stopped.",
      "Companions unlock by guild level: jaguar 5, wolf 9, boar 13, stag 17, bear 21, lion 25.",
      "Companion summons consume nwyfre plus profession materials and use a preparation timer that breaks if the Druid moves or enters combat.",
      "Living Vines begins at guild level 3. Lash is first; venom, barbs, and snare unlock through training or guild levels 8, 14, and 20.",
    ],
  },
  {
    name: "Dragon",
    roles: ["Shapeshifter", "Melee"],
    image: "guild-dragon",
    pitch:
      "A mythic transformation guild built around draconic will, claws, breath, scales, fear, flight, and lair identity.",
    style: "Become the monster in the room: declare, transform, breathe, fly, and make enemies deal with your size.",
    features: [
      { label: "Form", value: "Dragon" },
      { label: "Power", value: "Breath" },
      { label: "Mobility", value: "Flight" },
    ],
    commands: ["dragonhelp", "dtransform", "breathe", "dfly", "lair", "dscales"],
    progression:
      "Dragon is a live guild with source under /guilds/dragon and commands under /cmds/guilds/dragon.",
    mechanics: [
      "The command set includes claws, fear, breath, flight, lair, loot, scales, stomps, spikes, and will-based tools.",
      "It reads as a high-fantasy physical-caster hybrid rather than a conventional spellbook guild.",
    ],
  },
  {
    name: "Fighter",
    roles: ["Melee"],
    image: "guild-fighter",
    pitch:
      "The direct martial baseline: weapon pressure, balance, defense, rushes, tactical calls, and heavy physical verbs.",
    style: "Win with positioning, toughness, weapon skill, and clean combat fundamentals.",
    features: [
      { label: "Role", value: "Weapon master" },
      { label: "Tempo", value: "Balance" },
      { label: "Combat", value: "Direct pressure" },
    ],
    commands: ["fhelp", "fstats", "fbalance", "fdefend", "fcharge", "cleave"],
    progression:
      "Fighter remains the central martial guild path and also backs several legacy martial variants in the daemon.",
    mechanics: [
      "The command list includes bash, cleave, disarm, defend, charge, rush, rage, surge, and inspection tools.",
      "Fighter is the clean contrast point for more specialized martial guilds such as Monk, Ranger, and Swashbuckler.",
    ],
  },
  {
    name: "Ranger",
    roles: ["Survival", "Hybrid"],
    image: "guild-ranger",
    pitch:
      "A wilderness guild with domains, camp craft, traps, tea, poultices, nets, bows, and terrain-aware travel.",
    style: "Prepare the field, live off the land, and bring practical answers to dangerous roads.",
    features: [
      { label: "Terrain", value: "Domains" },
      { label: "Craft", value: "Survival tools" },
      { label: "Travel", value: "Trailblaze" },
    ],
    commands: ["skilltree", "learn", "learn cost <skill>", "check <terrain>", "make fish trap", "set fish trap", "camp cook fish stew", "guide <player>"],
    progression:
      "Ranger skills are learned from a tree using slots and experience. Terrain affinity changes costs, cooldowns, damage, and whether some skills work.",
    mechanics: [
      "The skill tree branches into Survival, Cartography, Hunting, Husbandry, Attack, and Archery.",
      "Primary terrain gives the strongest bonuses; secondary terrain gives smaller bonuses.",
      "Craft flow includes harvesting wood and rocks, foraging herbs, skinning corpses, making rope/tools/torches, mining, carving bows, and preparing arrows.",
      "Fish traps are crafted from binding fiber and kindling, then set in river, lake, sea, beach, swamp, or underwater terrain.",
      "Camp cooking can use fish catches for fish stew or hunter feast.",
      "Guide lets a Ranger lead another player through terrain and grant a dodge bonus while they stay together.",
    ],
  },
  {
    name: "Ninja",
    roles: ["Stealth", "Melee"],
    image: "guild-ninja",
    pitch:
      "A precision guild of marks, bare-handed discipline, shadow movement, and lethal focused training.",
    style: "Study targets, manage risk, and exploit windows instead of standing still trading blows.",
    features: [
      { label: "Path", value: "Marks" },
      { label: "Style", value: "Unarmed" },
      { label: "Role", value: "Assassin" },
    ],
    commands: ["nhelp abilities", "nhelp marks", "nscore", "nmon", "nswitch"],
    progression:
      "Ninjas progress through guild marks and disciplined combat training. Several abilities are intentionally gated by guild level and mark completion.",
    mechanics: [
      "The guild is built around assassination fantasy: marks, stealth pressure, and bare-handed or specialized weapon discipline.",
      "Ninja abilities use guild-specific success checks instead of generic spellcasting.",
      "The renamed nswitch command avoids conflict with the broader account switch command.",
      "Recent balance work raised practical success rates so trained skills should fail less often.",
    ],
  },
  {
    name: "Garou",
    roles: ["Shapeshifter", "Melee"],
    image: "guild-garou",
    pitch:
      "A werewolf path tied to Gaea, rage, forms, natural weapons, and the tension between human and beast.",
    style: "Shift shape, tear into combat, and respect the tradeoffs of each form.",
    features: [
      { label: "Power", value: "Rage" },
      { label: "Forms", value: "Wolf and Crinos" },
      { label: "Theme", value: "Gaea" },
    ],
    commands: ["ghelp basics", "ghelp equipment", "ghelp dedication"],
    progression:
      "Garou choose how to use man, crinos, and wolf forms, then dedicate themselves toward an aspect of Gaea's nature.",
    mechanics: [
      "Man form can wear and wield traditional equipment and communicates normally.",
      "Crinos is the classic werewolf shape: stronger natural attacks and defenses, limited armor, and rough speech.",
      "Wolf form is the dominant fighting form with the strongest natural combat access, but can carry only one item and cannot shop normally.",
      "Using equipment Gaea shuns can suppress Garou abilities.",
      "Garou and Druids are thematically linked through Gaea, nature, and balance.",
    ],
  },
  {
    name: "Monk",
    roles: ["Melee", "Support"],
    image: "guild-monk",
    pitch:
      "A disciplined martial guild centered on chi, stance-like routes, restraint, training, and physical mastery.",
    style: "Build momentum through clean combat rhythm and measured defensive control.",
    features: [
      { label: "Resource", value: "Chi" },
      { label: "Method", value: "Routes" },
      { label: "Role", value: "Martial control" },
    ],
    commands: ["mskills", "mcombo", "chiburst", "chifocus", "chiblast", "chitransfer"],
    progression:
      "Monks build around chi and technique flow. Their command list separates roles such as utility, burst, flow, and combo payoffs.",
    mechanics: [
      "mskills shows trained techniques and live costs; mcombo shows combo state, legal follow-ups, and route examples.",
      "Chi Burst, Chi Focus, Chi Blast, and Chi Transfer are explicit chi tools in the command set.",
      "Some techniques record style resonance, then collapse that momentum into fresh payoffs or regained chi.",
      "The guild rewards sequencing rather than only repeating the biggest hit available.",
    ],
  },
  {
    name: "Mage",
    roles: ["Caster"],
    image: "guild-mage",
    pitch:
      "A classic spellcasting guild with arcane mobility, combat magic, spell knowledge, and explosive offense.",
    style: "Solve problems through preparation, spell selection, and carefully timed power.",
    features: [
      { label: "Combat", value: "Arcane bursts" },
      { label: "Utility", value: "Travel magic" },
      { label: "Role", value: "Scholar" },
    ],
    commands: ["mhelp", "spells", "cast <spell>"],
    progression:
      "Mage remains the classic arcane path: spell knowledge, preparation, utility, and direct magical pressure.",
    mechanics: [
      "Mage powers are closer to traditional spellcasting than the newer resource-heavy guilds.",
      "The guild offers a familiar caster identity for players who want damage, mobility, and magical problem-solving.",
      "Mage is a good contrast to newer guilds: less about visible alternate bars and more about spell choice, timing, and utility.",
    ],
  },
  {
    name: "Necromancer",
    roles: ["Caster", "Support"],
    image: "guild-necromancer",
    pitch:
      "A dark path of death magic, followers, spirit pressure, and resourceful control over the battlefield.",
    style: "Win through attrition, preparation, and powers that feel dangerous to use.",
    features: [
      { label: "Theme", value: "Death" },
      { label: "Allies", value: "Undead" },
      { label: "Role", value: "Attrition" },
    ],
    commands: ["necskills", "nraise", "nrdead"],
    progression:
      "Necromancers use death magic, undead pressure, and morally weighted actions that can affect reputation.",
    mechanics: [
      "Raising the dead is hooked into the reputation system and can mark the player as darker or more feared.",
      "Necromancer play leans into attrition, followers, and the cost of using forbidden tools.",
      "Several powers use guild-specific spell commands rather than generic combat verbs.",
    ],
  },
  {
    name: "Paladin",
    roles: ["Melee", "Support"],
    image: "guild-paladin",
    pitch:
      "A holy martial guild built around courage, devotion, consecration, favor, smiting, seals, warhorse identity, and protective presence.",
    style: "Stand in the open, bind faith to steel, and make protection part of the attack plan.",
    features: [
      { label: "Power", value: "Faith" },
      { label: "Role", value: "Holy defender" },
      { label: "Ally", value: "Warhorse" },
    ],
    commands: ["palhelp", "palskills", "devote", "smite", "seal", "warhorse"],
    progression:
      "Paladin is a live guild with source under /guilds/paladin and commands under /cmds/guilds/paladin.",
    mechanics: [
      "The command surface includes courage, devote, divine favor, evoke, holy presence, javelin, repel, retribution, rush, sanctify, seal, smite, and warhorse.",
      "It shares divine space with Mitra and Priest paths but plays as a front-line holy combatant.",
    ],
  },
  {
    name: "Priest",
    roles: ["Support", "Caster"],
    image: "guild-priest",
    pitch:
      "A divine caster path with its own prayer soul, spell commands, emotes, and support identity separate from the Mitra cleric lineage.",
    style: "Work through ritual, prayer, and protective magic rather than weapon-first doctrine.",
    features: [
      { label: "Power", value: "Prayer" },
      { label: "Role", value: "Divine caster" },
      { label: "Support", value: "Blessings" },
    ],
    commands: ["priest spells", "priest emotes"],
    progression:
      "Priest is present in the live guild daemon and maps to /guilds/priest plus /cmds/guilds/priest.",
    mechanics: [
      "The command paths are split into spells, emotes, and other support commands.",
      "It should be shown as a distinct divine guild rather than collapsed into the existing Cleric of Mitra card.",
    ],
  },
  {
    name: "Swashbuckler",
    roles: ["Melee", "Hybrid"],
    image: "guild-swashbuckler",
    pitch:
      "A flashy martial guild with finesse, timing, weapon flair, and momentum-based combat identity.",
    style: "Fight with style, build openings, and turn confidence into pressure.",
    features: [
      { label: "Resource", value: "Finesse" },
      { label: "Tempo", value: "Momentum" },
      { label: "Role", value: "Duelist" },
    ],
    commands: ["sbhelp finesse", "sbhelp styles", "cstrike", "calledshot", "riposte", "parry"],
    progression:
      "A Swashbuckler starts with 1 finesse and gains one more per guild level, then runs styles whose total finesse cost must fit that pool.",
    mechanics: [
      "Finesse is a style budget, not a mana bar.",
      "Low-level Swashbucklers combine cheaper styles such as cstrike, calledshot, slash, riposte, ospin, sdodge, and parry.",
      "Higher guild levels can afford heavier style combinations such as sdance, impale, tblades, flourish, and flurry.",
      "The guild is about active style loadouts and dueling tempo.",
    ],
  },
  {
    name: "Thief",
    roles: ["Stealth"],
    image: "guild-thief",
    pitch:
      "A shadow economy guild of stealth, opportunity, misdirection, and tools that reward player cunning.",
    style: "Control the terms of engagement before the fight ever begins.",
    features: [
      { label: "Method", value: "Stealth" },
      { label: "Economy", value: "Opportunity" },
      { label: "Role", value: "Operator" },
    ],
    commands: ["case", "shadow", "pilfer", "tsteal", "poison"],
    progression:
      "Thief rewards preparation, marks, stealth, theft, and opportunity. Some actions have reputation consequences.",
    mechanics: [
      "Case reads a potential mark and can expose useful inventory information.",
      "Shadow lets a Thief tail a mark quietly.",
      "Pilfer and steal actions can affect reputation through crime records.",
      "Poisoning weapons is also wired into reputation events.",
    ],
  },
  {
    name: "Cleric of Mitra",
    roles: ["Support", "Caster"],
    image: "guild-cleric",
    pitch:
      "A divine path of prayers, blessings, healing, hammers, faith mechanics, and service to higher powers.",
    style: "Stabilize allies, punish enemies, and make belief mechanically visible.",
    features: [
      { label: "Power", value: "Faith" },
      { label: "Combat", value: "Hammers" },
      { label: "Role", value: "Healer" },
    ],
    commands: ["chelp", "prayers", "tithe", "patron"],
    progression:
      "Divine guilds sit close to the reputation and patron systems. Faithful actions can matter beyond a single combat round.",
    mechanics: [
      "Public deeds can tug divine omen cycles toward Mitra, Gaea, or Set depending on meaning.",
      "Holy Hour can make matching deeds carry farther.",
      "Cleric-style paths mix healing, blessings, weapon identity, and religious obligations.",
    ],
  },
  {
    name: "Psionicist",
    roles: ["Caster", "Hybrid"],
    image: "guild-psionicist",
    pitch:
      "A mental discipline guild built around unseen force, psychic control, and strange pressure from within.",
    style: "Approach combat through willpower, focus, and effects that feel unlike ordinary magic.",
    features: [
      { label: "Power", value: "Mind" },
      { label: "Flavor", value: "Psychic" },
      { label: "Role", value: "Control" },
    ],
    commands: ["psihelp", "bpowers", "psychic reserve", "psychic splice"],
    progression:
      "Psionicists grow through psychic powers and reserves rather than a purely physical combat kit.",
    mechanics: [
      "Documented powers include Psychic Lash, Psychic Reserve, Psychic Splice, Timeshift, Banish, and other mind-focused tools.",
      "Psychic Reserve stores additional SP and cannot simply be forgotten once learned.",
      "The guild's flavor is mental pressure, control, and unusual utility rather than elemental spellcasting.",
    ],
  },
];

export const worldRegions: Region[] = [
  {
    name: "Geshtai",
    image: "continent-mainland",
    areaCount: 171,
    levelRange: "1-150+",
    tone: "The starting planet and the center of the old world.",
    highlights: ["Darkwind City", "Hyperborea", "Souvrael", "Kerei", "Talamh Darag", "Underworld"],
    overview:
      "Geshtai is the old heart of DarkWind: the city, the primary continents, many classic guild halls, and the majority of the legacy area catalog. New players begin here, but the planet also contains dangerous high-level pockets, hidden routes, and old faction history.",
    routes: ["Darkwind City is the usual social and travel hub.", "Roads, wayshards, guild transport, and ships gradually open the world.", "Many regions still reward old-fashioned room-by-room exploration."],
  },
  {
    name: "Darkwind",
    image: "world-map",
    areaCount: 69,
    levelRange: "1-100+",
    tone: "The city, roads, old farms, abbeys, guild halls, and dangerous places nearest home.",
    highlights: ["City streets", "Newbie routes", "Guild anchors", "Classic areas"],
    overview:
      "Darkwind is both a city and a launch point. It holds the first safe routines a new player learns, but also older dungeons, temples, ships, haunted places, and guild identity scattered through nearby roads.",
    routes: ["Start with the city, newbie routes, bank, donation room, shops, and guild references.", "Look for wayshards around public landmarks.", "Expect a wide level spread because many old areas branch from the city footprint."],
    notableAreas: [
      {
        name: "Darkwind City",
        levels: "social / mixed",
        region: "Geshtai / Darkwind",
        summary: "The practical heart of the game: shops, services, guild access, traffic, rumors, and returning players.",
        whyGo: "Orient yourself, bank coins, buy essentials, meet players, and branch into early routes.",
        watchFor: "City reputation and faction behavior can matter more than a new player expects.",
      },
      {
        name: "the Abbey of Saint Dominic",
        levels: "2-34",
        region: "Geshtai / Darkwind",
        summary: "A classic nearby adventuring area with religious overtones and a broad enough level range to teach caution.",
        whyGo: "Good early example of how DarkWind areas are not always a single flat difficulty.",
        watchFor: "Room descriptions and exits matter; do not assume every branch is beginner-safe.",
      },
      {
        name: "an old farm",
        levels: "1-8",
        region: "Geshtai / Darkwind",
        summary: "A low-level rural area that fits the old-world starting fantasy.",
        whyGo: "Useful for early combat rhythm, loot habits, and learning when to retreat.",
        watchFor: "Even simple places can contain surprises if you stop reading closely.",
      },
      {
        name: "the Four Dragon Temple",
        levels: "varied",
        region: "Geshtai / Darkwind",
        summary: "A temple-linked area with stronger lore flavor than a simple monster route.",
        whyGo: "Introduces the sense that factions, temples, and guild stories overlap.",
        watchFor: "Names and room tone often hint at danger before mechanics do.",
      },
    ],
  },
  {
    name: "Hyperborea",
    image: "continent-hyperborea",
    areaCount: 26,
    levelRange: "5-110+",
    tone: "Northern cold, old castles, hard roads, and wilderness with teeth.",
    highlights: ["Ravenloft", "Frozen roads", "Highland threats", "Ranger routes"],
    overview:
      "Hyperborea is a northern continent of cold roads, old powers, isolated settlements, and punishing wilderness. It reads like a place where survival and local knowledge matter.",
    routes: ["Expect travel friction and scattered threats.", "Ranger-flavored play fits naturally here.", "The continent has several famous old areas that players recognize by reputation."],
    notableAreas: [
      {
        name: "Ravenloft",
        levels: "unknown / dangerous",
        region: "Geshtai / Hyperborea",
        summary: "A gothic old-area touchstone with castle horror energy and a reputation larger than its catalog metadata.",
        whyGo: "For atmosphere, danger, and the feeling of stepping into a classic DarkWind landmark.",
        watchFor: "Unknown level data should be treated as a warning, not an invitation.",
      },
      {
        name: "the realm of Asgard",
        levels: "varied",
        region: "Geshtai / Hyperborea",
        summary: "A mythic northern destination that connects the region to godlike and heroic imagery.",
        whyGo: "Strong thematic contrast against city adventuring.",
        watchFor: "Mythic names usually imply larger consequences and tougher enemies.",
      },
      {
        name: "the Viking Village",
        levels: "low-mid",
        region: "Geshtai / Hyperborea",
        summary: "A settlement area that reinforces the cold frontier tone of the continent.",
        whyGo: "Good place to understand Hyperborea as a lived-in region, not just a monster map.",
        watchFor: "Village areas can mix safe-looking rooms with aggressive locals.",
      },
      {
        name: "the Four Dragon Castle",
        levels: "mid-high",
        region: "Geshtai / Hyperborea",
        summary: "A castle-linked area that pushes the continent toward older, harder fantasy adventure.",
        whyGo: "For players who want castles, hierarchy, and old-school area design.",
        watchFor: "Castles tend to branch vertically and punish careless mapping.",
      },
    ],
  },
  {
    name: "Souvrael",
    image: "continent-souvrael",
    areaCount: 20,
    levelRange: "6-90+",
    tone: "Sun-baked trade, mines, temples, paladin outposts, and desert trouble.",
    highlights: ["Gold mines", "Carnival", "Paladin Outpost", "Four Dragons"],
    overview:
      "Souvrael is heat, trade, mineral wealth, outposts, old temples, and strange public places. It has a strong sense of travel between civilization, desert, and hazard.",
    routes: ["The gold mines are a recognizable activity anchor.", "The Carnival and Paladin Outpost are player-facing waypoint landmarks.", "Desert routes reward navigation and preparation."],
    notableAreas: [
      {
        name: "the gold mines",
        levels: "6-30",
        region: "Geshtai / Souvrael",
        summary: "A practical, memorable area where resource fantasy and adventuring overlap.",
        whyGo: "Useful early-to-mid destination and an easy mental landmark for Souvrael.",
        watchFor: "Mine areas often compress visibility and make retreat paths matter.",
      },
      {
        name: "the Carnival",
        levels: "varied",
        region: "Geshtai / Souvrael",
        summary: "A public landmark with a very different tone from mines and temples.",
        whyGo: "Shows DarkWind's range: social weirdness and danger can share space.",
        watchFor: "Carnivals in fantasy worlds rarely mean everything is harmless.",
      },
      {
        name: "the Paladin Outpost",
        levels: "mixed",
        region: "Geshtai / Souvrael",
        summary: "A divine-military landmark and a natural orientation point for lawful or holy themes.",
        whyGo: "Good region marker for players following divine guild stories.",
        watchFor: "Reputation and guild identity can change how places like this feel.",
      },
      {
        name: "the crystalline caverns",
        levels: "mid",
        region: "Geshtai / Souvrael",
        summary: "A mineral-rich cavern area with a stronger exploration mood.",
        whyGo: "Fits players who like caves, resources, and environment-led area flavor.",
        watchFor: "Cavern routes can become confusing if you are not mapping exits.",
      },
    ],
  },
  {
    name: "Kerei",
    image: "continent-kerei",
    areaCount: 20,
    levelRange: "1-90+",
    tone: "Eastern roads, fortresses, shrines, goblin trouble, and disciplined old powers.",
    highlights: ["Odako", "Goblin lairs", "Oriental temples", "Fortress politics"],
    overview:
      "Kerei has a distinct eastern identity: roads through Odako, temples, fortresses, goblin pressure, and the feeling of older schools of discipline and conflict.",
    routes: ["The road through Odako is a natural travel spine.", "Temple and fortress areas set the regional tone.", "Several waypoints make Kerei useful once discovered."],
    notableAreas: [
      {
        name: "the road through Odako",
        levels: "travel / mixed",
        region: "Geshtai / Kerei",
        summary: "A connector route that helps Kerei feel like a coherent region instead of unrelated rooms.",
        whyGo: "Use it to orient around the continent and find nearby points of interest.",
        watchFor: "Roads are not automatically safe just because they are roads.",
      },
      {
        name: "the goblin lair",
        levels: "low-mid",
        region: "Geshtai / Kerei",
        summary: "A direct threat area that gives Kerei some rougher frontier pressure.",
        whyGo: "Straightforward combat identity with regional flavor.",
        watchFor: "Group density can matter more than single enemy strength.",
      },
      {
        name: "an oriental temple",
        levels: "mid",
        region: "Geshtai / Kerei",
        summary: "A temple destination tied to the continent's disciplined and spiritual side.",
        whyGo: "Good example of how Kerei's theme differs from Darkwind City.",
        watchFor: "Temple areas often hide rules in descriptions.",
      },
      {
        name: "the tower of Xu Wenlong",
        levels: "unknown / high caution",
        region: "Geshtai / Kerei",
        summary: "A named tower that feels like a personal seat of power rather than generic ruins.",
        whyGo: "For players chasing named landmarks and dangerous reputation.",
        watchFor: "Unknown metadata should be approached conservatively.",
      },
    ],
  },
  {
    name: "Dailos",
    image: "continent-wayfare",
    areaCount: 18,
    levelRange: "15-100+",
    tone: "A newer planet with its own geography, hazards, and expanding catalog of places.",
    highlights: ["Lantern Fen", "New planetary routes", "Wayshards", "Modern area data"],
    overview:
      "Dailos is a newer, better-cataloged planetary region. It is especially useful for showing what future DarkWind geography can become: clearer area data, stronger regional identity, and intentional waypoint support.",
    routes: ["Lantern Fen is a named attuned landmark.", "Bog and fen names establish a strong environmental identity.", "Dailos can grow without inheriting every old-world directory compromise."],
    notableAreas: [
      {
        name: "Lantern Fen",
        levels: "31-35",
        region: "Dailos / Dailos",
        summary: "A wetland waypoint area with a clear level band and strong visual identity.",
        whyGo: "Excellent example of modern area catalog data working the way players expect.",
        watchFor: "Fen areas tend to imply poor visibility, water hazards, and ambush pressure.",
      },
      {
        name: "Black Sap Grove",
        levels: "mid",
        region: "Dailos / Dailos",
        summary: "A grove area with a corrupted-natural tone that sits well beside Druid and wilderness themes.",
        whyGo: "For players who want newer worldbuilding and darker natural spaces.",
        watchFor: "Names like black sap usually mean the environment itself is part of the danger.",
      },
      {
        name: "Corpse Lily Bog",
        levels: "mid",
        region: "Dailos / Dailos",
        summary: "A bog with a vivid identity and the sort of name players remember.",
        whyGo: "Strong atmospheric destination for players who like distinctive areas.",
        watchFor: "Expect poison, rot, or status-pressure themes from the fiction.",
      },
      {
        name: "Croaker Pools East",
        levels: "mid",
        region: "Dailos / Dailos",
        summary: "Part of a connected wetland cluster that suggests regional route design.",
        whyGo: "Good for seeing how multiple related areas can make a region feel continuous.",
        watchFor: "Clustered areas can create difficulty jumps across simple-looking exits.",
      },
    ],
  },
  {
    name: "Islands",
    image: "continent-islands",
    areaCount: 9,
    levelRange: "10-100+",
    tone: "Ocean travel, remote settlements, volcano stories, and places that feel far from the city.",
    highlights: ["Volcano Isle", "Vadir", "Sea routes", "Island NPCs"],
    overview:
      "The Islands are remote by nature: sky, sea, volcanoes, floating keeps, old settlements, and travel that feels intentionally detached from the mainland.",
    routes: ["Ships and sea routes matter thematically here.", "Volcano Isle and Vadir are strong anchors.", "Remote areas often have more self-contained stories."],
    notableAreas: [
      {
        name: "Volcano Isle",
        levels: "mid-high",
        region: "Geshtai / Islands",
        summary: "A dramatic island region built around heat, isolation, and obvious environmental danger.",
        whyGo: "For a stronger sense of expedition than city-adjacent adventuring.",
        watchFor: "Volcanic areas often punish unprepared movement and weak defenses.",
      },
      {
        name: "Vadir",
        levels: "mixed",
        region: "Geshtai / Islands",
        summary: "A world within the island catalog with named NPCs and a clearer settlement identity.",
        whyGo: "Good example of island content that is more than a beach route.",
        watchFor: "Local factions and NPC levels can vary sharply.",
      },
      {
        name: "the floating keep of Lord Barlowe",
        levels: "high caution",
        region: "Geshtai / Islands",
        summary: "A remote noble stronghold with strong adventure-fantasy imagery.",
        whyGo: "For players drawn to named lords, keeps, and isolated high-risk places.",
        watchFor: "Keeps are rarely linear and often hide stronger interior threats.",
      },
      {
        name: "Aeris Sanctorum",
        levels: "varied",
        region: "Geshtai / Islands",
        summary: "A named sanctuary-like place that gives the island catalog a more mystical edge.",
        whyGo: "For lore texture and a change from purely physical hazards.",
        watchFor: "Sanctuary names can be deceptive in DarkWind.",
      },
    ],
  },
  {
    name: "Underworld",
    image: "continent-underworld",
    areaCount: 10,
    levelRange: "25-150+",
    tone: "Lower roads, strange powers, and places where the world feels thinner and crueler.",
    highlights: ["Deep areas", "High danger", "Rare enemies", "Dark lore"],
    overview:
      "The Underworld is the lower, darker counterpart to the surface regions. It is built for players who want the game to feel more hostile, old, and strange.",
    routes: ["Treat it as a higher-risk region unless you know exactly where you are going.", "Caves and strongholds make mapping important.", "The area mix supports both classic monster pressure and darker lore."],
    notableAreas: [
      {
        name: "the Dwarven Caves",
        levels: "mixed",
        region: "Geshtai / Underworld",
        summary: "A subterranean area with old stone, crafted history, and danger below the surface.",
        whyGo: "For players who like cave networks and older fantasy dungeon structures.",
        watchFor: "Cave depth and branching can strand careless explorers.",
      },
      {
        name: "the Goblin Stronghold",
        levels: "mid-high",
        region: "Geshtai / Underworld",
        summary: "A fortified enemy area that implies organization rather than random wildlife.",
        whyGo: "For direct opposition, stronger combat pacing, and factional flavor.",
        watchFor: "Strongholds can overwhelm players through density and reinforcements.",
      },
      {
        name: "Arathia Caves",
        levels: "mixed",
        region: "Geshtai / Underworld",
        summary: "A named cave system with enough identity to stand apart from generic underground routes.",
        whyGo: "For old-school exploration with a stronger proper-noun hook.",
        watchFor: "Named cave systems usually deserve more caution than their entrances suggest.",
      },
      {
        name: "demon plain",
        levels: "high caution",
        region: "Geshtai / Underworld",
        summary: "A bluntly dangerous destination whose name tells you exactly what sort of place it is.",
        whyGo: "For players who want darker, harsher enemy fantasy.",
        watchFor: "Demonic areas are not forgiving test grounds.",
      },
    ],
  },
];

export const races: Race[] = [
  { name: "Human", image: "race-human", origin: "Geshtai", note: "Flexible, familiar, and woven into nearly every city story." },
  { name: "Elf", image: "race-elf", origin: "Old forests", note: "Graceful bloodlines tied to magic, memory, and ancient conflict." },
  { name: "Half-Elf", image: "race-half-elf", origin: "Between peoples", note: "Adaptable outsiders who often understand more than one world." },
  { name: "Drow", image: "race-drow", origin: "Deep places", note: "Dangerous, elegant, and marked by the shadows below." },
  { name: "Dark Elf", image: "race-dark-elf", origin: "Fallen courts", note: "A darker branch of elven history with its own edge." },
  { name: "Dwarf", image: "race-dwarf", origin: "Stone halls", note: "Hardy, practical, and naturally at home around metal and mountain." },
  { name: "Gnome", image: "race-gnome", origin: "Hidden enclaves", note: "Clever, strange, and often underestimated until it is too late." },
  { name: "Halfling", image: "race-halfling", origin: "Quiet roads", note: "Small, quick, and excellent at surviving larger people's mistakes." },
  { name: "Goblin", image: "race-goblin", origin: "Rough warrens", note: "Scrappy survivors with a talent for trouble and improvisation." },
  { name: "Ogre", image: "race-ogre", origin: "Wild borders", note: "Huge, blunt, and hard to ignore in a fight." },
  { name: "Troll", image: "race-troll", origin: "Old wilds", note: "Regenerative, brutal, and tied to the rougher edges of the world." },
  { name: "Northman", image: "race-northman", origin: "Hyperborea", note: "Cold-born and hard-tested by northern roads." },
  { name: "Frost Giant", image: "race-frost-giant", origin: "Frozen heights", note: "A towering bloodline with the weight of winter behind it." },
  { name: "Centaur", image: "race-centaur", origin: "Open plains", note: "Swift, proud, and visibly different from city-born peoples." },
  { name: "Lizardman", image: "race-lizardman", origin: "Warm wetlands", note: "Scaled, patient, and tied to older instincts." },
  { name: "Kereian", image: "race-kereian", origin: "Kerei", note: "A people shaped by the eastern continent's culture and dangers." },
  { name: "Blancmange", image: "race-blancmange", origin: "Strange origins", note: "One of DarkWind's weirder reminders that the world is not generic." },
];

export const systems: SystemFeature[] = [
  {
    title: "Professions with real item work",
    eyebrow: "Craft, gather, improve",
    detail:
      "Gathering, reagents, tailoring, smithing, alchemy, inlays, polish, work orders, and workers create a secondary economy around useful objects.",
    points: ["Profession reagents feed guild powers", "Crafted items can become personalized gear", "Work orders give non-combat goals"],
    commands: ["professions guide", "gather herbs", "mine ore", "skin corpse", "bait hook", "fish", "reagents search <item>", "inlay <item> with <shard>"],
    mechanics: [
      "Gathering professions are Herbalism, Mining, Skinning, and Fishing.",
      "Crafting professions include Alchemy, Leatherworking, Smithing, Tailoring, and Refining.",
      "The profession building is 4e, n from Center of Town and contains tools, craft rooms, workers, the work order board, and services.",
      "Work orders can reward coins, experience, profession practice, shards, or recipe cards.",
      "Druids can use their silver sickle as a gardening spade, mining pick, and skinning knife.",
    ],
  },
  {
    title: "Reputation and renown",
    eyebrow: "The world remembers",
    detail:
      "Reputation is intentionally a little mysterious, but actions can affect how people and places talk about you.",
    points: ["City and faction consequences", "Player-visible hints", "Room and NPC behavior hooks"],
    commands: ["reputation"],
    mechanics: [
      "Public labels are Hero, Adventurer, and Villain.",
      "Guild membership alone does not decide reputation.",
      "Quests, divine offerings, praise, slander, resurrection, theft, desecration, mercy, terror, honor, faith, nature, crime, secrecy, blood, service, and notoriety can all matter.",
      "Reputation deliberately does not expose exact weights or thresholds.",
      "Deeds with divine meaning can tug omen cycles toward Mitra, Gaea, or Set.",
    ],
  },
  {
    title: "Wayshards and area catalog",
    eyebrow: "Travel with context",
    detail:
      "The world is being cataloged into player-facing planets and regions, with waypoints that let discovery become future movement.",
    points: ["Attune shards as you find them", "Browse areas by region and level", "Fast travel can grow from exploration"],
    commands: ["areas", "areas <world or region>", "areas level <number>", "areas search <word>", "areas info <number>", "waypoints", "travel <area>"],
    mechanics: [
      "Areas are grouped by player-facing world and region, such as Geshtai / Darkwind or Dailos / Dailos.",
      "areas search can match area name, tag, note, world, or region.",
      "Level ranges are rough guides based on cataloged monster levels and can be misleading for bosses, puzzles, or variable-level creatures.",
      "Wayshards are discovered by touching them, then shown as attuned waypoints when travel is available.",
    ],
  },
  {
    title: "Guild vitals and live client panes",
    eyebrow: "Modern browser play",
    detail:
      "Darkflow presents GMCP-driven panes for vitals, guild mechanics, sky state, maps, notifications, and richer terminal play.",
    points: ["Browser client with panels", "ANSI effects and true color", "Mention notifications and scrollback tools"],
    commands: ["play.darkwind.ai", "truecolor", "ansieffects"],
    mechanics: [
      "Vitals include health, spell points, stamina, percent to next level, weight, and encumbrance.",
      "Guild Vitals are separate from normal vitals so resources such as chi, nwyfre, finesse, javelin charge, and Bard performance can have their own pane.",
      "The browser client supports truecolor, expanded ANSI effects, sound hooks, sky state, notifications, and terminal scrollback behavior.",
      "Mention alerts use @playername and can jump back to the mention; Escape returns the terminal to present.",
    ],
  },
  {
    title: "Divine and mythic pressure",
    eyebrow: "Gods, omens, avatars",
    detail:
      "Mitra, Gaea, and Set are not just lore names. Divine systems, avatar powers, bosses, and omens make the pantheon matter.",
    points: ["God-touched identities", "Boss loot and rare consumables", "Faith and alignment hooks"],
    commands: ["patron", "tithe", "reputation"],
    mechanics: [
      "Deeds can carry divine meaning: mercy and service toward Mitra, nature and restoration toward Gaea, fear or shadowed ambition toward Set.",
      "Holy Hour can make matching deeds matter more.",
      "Patron strain can briefly slow divine favor when reputation pulls against a vow.",
      "Avatar rewards and rare boss loot are being balanced so they are powerful without becoming permanent uptime.",
    ],
  },
  {
    title: "Daily rewards",
    eyebrow: "Return rhythm",
    detail:
      "Daily rewards are based on a rolling lockout and claim window, not the calendar date, and registered multies share the same streak.",
    points: ["30 minutes active before claiming", "24 hour lockout after claim", "24 hour claim window"],
    commands: ["daily"],
    mechanics: [
      "After claiming, the next reward is locked for 24 hours.",
      "Once unlocked, the player has a full 24 hour window to claim before the streak resets.",
      "The character who runs daily receives the items, but the streak is shared across registered multies.",
      "A player can shift the claim time naturally because the lockout is based on the time of the last claim.",
    ],
  },
  {
    title: "Achievements and titles",
    eyebrow: "Permanent milestones",
    detail:
      "Achievements track combat, exploration, social activity, economy, quests, and guild-specific milestones, with title rewards that can be equipped separately from normal titles.",
    points: ["Bronze through Mythic tiers", "Achievement titles", "Top 50 leaderboard"],
    commands: ["achievements", "achievements titles", "atitle", "leaderboard"],
    mechanics: [
      "Each achievement line has named tiers: Bronze, Silver, Gold, Platinum, and Mythic.",
      "Progress is driven by tracked game stats and is generally permanent once earned.",
      "Unlocked achievement titles can be equipped independently.",
      "The leaderboard ranks total achievement tiers and shows completed achievement lines.",
    ],
  },
  {
    title: "Eternal Dungeons",
    eyebrow: "Repeatable challenge",
    detail:
      "The dungeon system gives players a repeatable challenge loop, with v2 work focused on more interesting objectives and leaderboards.",
    points: ["Separate run identity", "Scaling encounters", "Objectives beyond final-boss kills"],
    commands: ["eternal enter [floor]", "eternal status", "eternal leave", "eternal rejoin", "eternal leaderboard [v2|legacy]", "eternal choose <1-3>"],
    mechanics: [
      "Runs are private instances for a solo player or small group.",
      "Generated floors have objectives, affixes, and route choices.",
      "Routes can be safe, elite, boss, or unstable; riskier routes pay more Eternal Shards and make the next floor more dangerous.",
      "Recover relic and cleanse shrine objectives appear before the final leader and require reading room descriptions.",
      "Checkpoints unlock every five floors. Solo and group checkpoints are tracked separately.",
      "V2 and legacy leaderboards are separate because the rules are different.",
    ],
  },
];

export const loreTimeline: LoreBeat[] = [
  {
    title: "The Cataclysm",
    image: "lore-cataclysm",
    era: "The wound",
    detail:
      "The old world was broken by catastrophe, leaving geography, politics, and faith permanently scarred.",
  },
  {
    title: "The Race Wars",
    image: "lore-founding",
    era: "The fracture",
    detail:
      "The peoples of the world carry history in the form of suspicion, myth, old alliances, and blood-deep memory.",
  },
  {
    title: "Divine Intervention",
    image: "lore-divine-intervention",
    era: "The answer",
    detail:
      "Mitra, Gaea, and Set remain active pressures in the setting, shaping guilds, powers, and player reputation.",
  },
];

export const gods: God[] = [
  {
    name: "Mitra",
    image: "god-mitra",
    domain: "Order, light, protection",
    detail: "A divine force tied to duty, judgment, and the power to stand between civilization and ruin.",
  },
  {
    name: "Gaea",
    image: "god-gaea",
    domain: "Wild growth, life, fury",
    detail: "The living world made sacred: groves, beasts, storms, roots, and the cost of imbalance.",
  },
  {
    name: "Set",
    image: "god-set",
    domain: "Shadow, hunger, ambition",
    detail: "A darker god whose influence is felt in temptation, secrecy, and the price of power.",
  },
];
