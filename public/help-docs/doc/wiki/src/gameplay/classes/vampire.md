# Vampire

Vampire is an open remort class. Remort level 1 characters without another
class may accept the permanent Embrace at the First Grave beneath Stoker's
church. Vampire is a supernatural nature rather than a guild, so it composes
with the character's guild and survives future remorts.

The First Grave remains a public join threshold. Embraced characters can
descend into the Crimson Covenant, a safe seven-room sanctuary containing a
social hall, a coffin vault, a Blood Sorcery chapel, a bloodline court, and a
hall devoted to Chronicle and Blood Memories. The sanctuary is not a blood
bank and does not bypass Hunger, Exposure, daylight, costs, or cooldowns.

## Hunt, Feed, Spend, Hide

Vampires use a 100-point Vitae pool that neither regenerates nor decays.
Feeding restores Vitae and establishes one active prey-derived blood profile;
discipline powers spend Vitae. Remaining Vitae determines Hunger: Sated,
Stirring, Ravenous, or Frenzy.

Prey yields Martial, Predatory, Mystic, Noble, Vital, or Feral / Profane blood
at Common, Potent, Exceptional, or Mythic quality. Feeding methods trade
speed, harm, yield, and regional Exposure. Players, player corpses, bloodless
creatures, protected NPCs, and unearned shared-combat prey are invalid.

Witnesses matter. Careful feeding can leave no durable evidence when nobody
notices, while obvious, deep, lethal, or witnessed feeding raises Exposure.
Feeding on Dawnward's sanctified ground leaves especially persistent evidence.
Exposure is regional and has four tiers: Quiet (0-9), Whispers (10-39),
Suspected (40-74), and Hunted (75-100). Quiet time, coffin rest, and the
Nameless mask can unwind a trail; holy evidence decays more slowly. Fallows
witnesses can report local rumors, while Hunted Vampires risk recognition by
Dawnward sentinels and pursuit by blood hunters.

## Disciplines and Bloodlines

Vampires permanently learn disciplines as their Vampire GXP crosses milestone
thresholds, but prepare only three at a coffin, the First Grave, the Covenant's
Red Chapel, or an approved Vespercourt anchor. The final First Night milestone
adds a fourth slot. Celerity, Potence, and Fortitude provide bounded
cross-guild combat behavior; Auspex,
Obfuscate, Presence, Protean, Animalism, and Blood Sorcery provide sensing,
concealment, predatory forms, and blood rites. Dominate opens at Night Court
(or one milestone earlier for House Vesper), while Oblivion opens only at
First Night.

The fixed power catalog contains 56 mastery-gated powers across those eleven
disciplines. Use `discipline list` for unlocks and costs, then
`discipline <power> [target]` to invoke one. Every power uses the same Vitae,
individual cooldown, shared major-power cooldown, target-safety, boss,
Exposure, and cleanup contracts. The catalog scales bounded effects from Blood
Mastery, active blood profile and quality, Hunger, night, and bloodline without
raising maximum Vitae or replacing the need to feed. The original `mend`,
`boil`, `mist`, `obfuscate`, `awe`, `claws`, `animalism`, and `familiar`
invocations remain available for compatibility.

Attuned Blood Sorcery also supports prepared rituals. Use `ritual list`,
`ritual prepare <name>`, and `ritual invoke <name> [target]`. Preparation costs
Vitae, requires an open ritual slot and an approved Vampire anchor, and persists
through logout and remort. Ward of the Threshold, Sanguine Compass, Seal of
Quiet Earth, Draught of False Life, and Hunter's Malediction each consume one
prepared use when invoked. Milestones increase ritual capacity, with an
additional bounded slot for Bloodwrights.

Blood Mastery continues growing beyond those unlock milestones. Three quarters
of its bounded scale comes from permanent Vampire GXP, while the final quarter
grows with remorts through R1000. It strengthens discipline effects, passive
attunements, feeding yield, haven and Torpor recovery, and the Night Familiar.
Maximum Vitae remains fixed at 100, and mastery never removes Hunger or the
class's sunlight, fire, and holy weaknesses.

At the Bloodline Rite, choose House Vesper, The Nameless, The Bloodwrights,
The Red Hunt, or The Graveborn. Each changes feeding rules and consequences.
Bloodwrights can vault up to three blood profiles, which degrade when recalled.
`bloodsense memories` lists the significant boss prey permanently remembered
in a Vampire's vitae. Four curated resonances have behavioral rewards: Lady
Vesper strengthens Awe and court recognition; Lord Blackbriar lets Obfuscate
defeat one careful-feeding witness; Nhal Serev identifies bloodless prey; and
Vaelkor identifies deep-feed and drain windows. Significant participation in
defeating a curated boss can preserve its memory even when the boss itself is
bloodless. Vespercourt acknowledges those memories and the Vampire's chosen
bloodline. Moonwold werewolves are ancestral rivals, granting both sides a
small offensive edge against the other inside their caverns.

## Night, Sun, Haven, and Torpor

Open daylight burns a Vampire, with dawn and twilight less severe than full
day. Indoors, underground rooms, and canopy are shade. Sunlight, fire, and holy
damage remain permanent weaknesses; poison and disease are strongly resisted.
At each transition into dawn, full day, twilight, or night, the Blood sends one
thematic warning across the Vampire channel to every online Vampire, including
those currently sheltered from the visible sky.

A coffin may be bound at the First Grave, the Covenant's Vault of Sealed
Earth, or Vespercourt crypt. Resting there restores wounds, steadies low Vitae
toward 75 without lowering a higher pool, and reduces regional Exposure; it is
not a full refill. Once per reboot, a non-hardcore Vampire death becomes Torpor
at the bound coffin with health recovery that grows from one hit point toward
ten percent as Blood Mastery increases; later deaths follow the normal death
and resurrection flow.

Use `help vampire`, `vampire abilities`, and `vscore` in game for exact current
commands and status. New Vampires can use `vamphelp start`; `vamphelp commands`
opens a compact topic tree, while any Vampire command or catalog power name can
be requested directly. `vampwho` opens the Crimson Ledger of visible active
Vampires, showing only name, level, bloodline, and current activity without
revealing location. `vamprepair` is an explicit recovery command that safely
refreshes the live Covenant soul, autoload, registered command paths, runtime
hooks, resource registration, and client status while preserving Vampire
progression and the exact current Vitae amount. It never refills Vitae. Normal
Vampires do not need it outside an update or damaged installation.
