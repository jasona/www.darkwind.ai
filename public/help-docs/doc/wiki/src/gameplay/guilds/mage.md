# Mage

![The Magi](images/mage.jpg)

Peering into the Dark Wind, Magi learn to read and alter the patterns beneath
the visible world. Heat has structure; distance can be folded; memory leaves a
pristine copy behind the mind. Death, light, and even an interrupted moment can
be written down if the Mage is patient enough. Those observations accumulate
in a leather-bound spellbook, and the field is where they become more than
theory.

In the guild's older vocabulary, *gramarye* is the art and a spell made real is
a *working*. Cantrips, charms, and malisons describe the temper of particular
workings rather than separate advancement tracks.

Mage is intended to feel useful immediately. Mana Shard and Missile are steady
first-page attacks, while Analyze, Detect, and Blaze give a new member reasons
to open the spellbook outside combat. Detect reads active conditions and verbs
registered by the current room. Some magical clues can expand a verb into
exact syntax when it needs an argument; at Arcane 4 Detect also reveals
concealed exits. Level-appropriate fighting supplies Mage guild XP, or GXP.
Useful field casting awards 10 GXP for a utility working or 20 for a combat
working, at most once per working every thirty seconds, so varied play
advances Arcane without rewarding empty repetition. Indexed workings end at
Arcane 15, but prestige study can continue to rank 1000.

## Learning the spellbook

A working develops its own history alongside Arcane. Its first useful casts
move it from Copied to Practiced, then onward through Fluent, Inscribed, and
Instinctive. The progression is compact enough to understand at a glance, but
the consequences accumulate naturally: costs fall, rune sockets open, and
automatic casting becomes quicker.

| Mastery | Useful casts | What changes |
| --- | ---: | --- |
| Copied | 0 | The working can be cast normally |
| Practiced | 50 | First rune socket and barrage access |
| Fluent | 150 | Better efficiency and a faster barrage |
| Inscribed | 250 | Second rune socket and further efficiency |
| Instinctive | 1,000 | Best ordinary cost and barrage efficiency |

The first rune socket makes a familiar page personal. Ashkenazy may push it
toward raw force, Talek toward cold and Chilled, or Ravidel toward fire and
Burning. By the time the second socket opens, two Magi can carry the same
working and use it rather differently. Talek, Ravidel, Arcanarton, and Bodach
each add ten percent to the primary hit and merge their damage types into that
hit. Trivlian converts the working's native type to evil and acid while
preserving any other rune types on the page.

## Workings and combat

| Arcane | Workings |
| ---: | --- |
| 1 | Analyze, Blaze, Detect, Mana Shard, Missile |
| 2 | Find, Illuminate |
| 3 | Fireball, Recollection |
| 4 | Icestorm, Insane, Investiture |
| 5 | Teleport; James rune |
| 6 | Armor, Echoform, Mage Eye |
| 7 | Bolt, Mana Barrier |
| 8 | Levitate, Stasis |
| 9 | Invisibility, Mage Unlock, Necrosis |
| 10 | Phase |
| 11 | Gate, Glassstorm |
| 12 | Inferno |
| 13 | Powerup |
| 14 | Wrath |
| 15 | Singularity, Touch |

The combat pages are meant to form sentences rather than sit as isolated
buttons. Fireball and Inferno leave Burning behind. Icestorm brings Chilled,
and Stasis resolves a few seconds after casting with cold damage and Freezing.
Glassstorm hangs written panes in the air before breaking them across nearby
enemies and applying Exposed. Once the room is carrying enough hostile
conditions, Singularity consumes them and gains fifteen percent damage from
each, up to seventy-five percent. A group that brings its own statuses can help
write the same ending.

Mana Barrier is the first sustained defensive conversion: for its duration,
each damaging hit has a chance to consume SP instead of HP after armor,
resistance, and shields. The chance rises with true Arcane rank on a
diminishing curve, while Mana Barrier mastery reduces the SP cost of absorbed
damage through its named tiers. Costs round up, and a partial reserve absorbs
only the part it can pay for. `battlemage` reports the exact current chance and
efficiency.

Phase moves a body partly outside the physical world. While phased, a Mage
cannot handle ordinary items, but can still collect coins and profession
reagents; the broader interaction restriction remains part of its defensive
tradeoff.

Echoform waits beside the Mage's thoughts and copies the next direct offensive
working for a thirty-five percent echo two seconds later. Its cooldown is one
minute. Recollection is the
quieter signature spell. After a vulnerable four-second weave it restores all
missing SP at the cost of ten percent maximum health. Its private timer begins
at ten minutes. Recollection mastery removes one minute at Practiced, two at
Fluent, three at Inscribed, and four at Instinctive; wielded FOCUS and worn
AURA equipment each remove another minute, with a five-minute floor.

Delayed workings require commitment. Movement by the Mage or a chosen target
tears the unfinished geometry loose, and another working cannot begin until the
pending one resolves. The delay is visible through the normal buff/status
display, making the risk legible to both the caster and the group.

Necrosis is a true decay working: a smaller blackleaf impact leaves a short
heartbeat-driven disease behind to keep damaging the target. Room-wide workings
gain thirty percent total damage for each additional hostile target, up to
twice their one-target total, before dividing that force among the room.

## Overchannel

At Arcane 8, a Mage may use `overchannel 5` to add five percent of maximum SP
to every manually cast damaging working. Arcane 16 opens `overchannel 10`, and
Arcane 32 opens `overchannel 20`. Arcane 500 opens `overchannel 25`, while
Arcane 1000 opens `overchannel 30`. The added SP is not reduced by mastery or
Mezari. Instead, it becomes additional spell power before the individual
working applies its damage shape.

The setting lasts for the current play session and may be released with
`overchannel off`. It does not affect utility magic, barrage, or automatic
echoes. Resisted and interrupted workings still consume the committed power.
The Mage monitor and guild vitals show both the selected percentage and the
current added SP.

Overchannel power uses the committed SP, effective Arcane, and half the integer
cube root of true Arcane. That last term deliberately improves the SP-to-damage
exchange at prestige ranks without restoring linear spell scaling.

Ordinary spell power and resistance penetration use full Arcane through rank
32, then gain only the square root of further ranks. Arcane 500 therefore acts
like effective rank 53 and Arcane 1000 like effective rank 63. Automatic
barrage uses the same diminished scaling.

## Battlemage resonance

Barrage lets Mana Shard, Missile, Fireball, Icestorm, or Bolt cast a lighter
copy of itself beside ordinary combat. A Practiced working can be prepared with
`barrage <working>` and continues to improve as its automatic casts land. Its
cadence rises from every four combat rounds at Practiced to every three at
Fluent and every two at Inscribed. Mastery lowers its SP cost, Falx can quicken
the rhythm, and Instinctive barrage costs nothing. Two rounds is the ordinary
cadence floor; Falx cannot turn an already two-round barrage into a one-round
barrage.

At Arcane 16, a real wielded FOCUS replaces that floor with a harsher bargain:
the page fires every round and produces two to six complete barrages based on
the weapon's WC and item level. It never scales from ordinary weapon swings.
Instead, the Mage loses one swing below player level 50 and another at every
50-level threshold, reaching six at level 250. Investiture cannot enable this
mode. `battlemage` presents the combined weapon rating as a short Weave Power
bar, with equivalent numeric progress for screen readers.

The lighter copies still keep their identities. Missile lands as a two-bolt
volley. Fireball hits harder than Mana Shard and leaves a light Burning effect.
Icestorm divides its damage among nearby hostile targets and Chills survivors.
Bolt concentrates the heaviest single-target barrage impact. When cast
manually, it is an independent, stronger-scaling lightning spell and no longer
reads the prepared barrage's damage type. Concentration blocks pause barrage
without erasing its prepared page or accumulated cadence; it resumes when the
block lifts. Silence and paralysis still collapse the preparation.

Wielding a FOCUS brings that playstyle forward. Any known barrage working may
be prepared while it is still Copied, its automatic casts cost no SP, and the
weapon improves both cadence and damage. Worn AURA equipment completes the
battlemage resonance, adding another improvement to each. A freshly Copied
working therefore fires every four rounds with FOCUS alone or every three with
both pieces; practice soon brings the fully resonant cadence to its floor of
two rounds. The Mage still makes ordinary weapon attacks and may still choose
manual workings, so the result feels like weapon-and-spell combat rather than a
caster waiting between commands.

`battlemage` reports the current equipment resonance, prepared page, cadence,
SP cost, and Recollection timer. `barrage off` releases the prepared working.

The same battlemage premise extends to shields. Magi may use small and medium
shields of any composition, as well as the lightweight wood-and-natural shield
made by Fighters. Large conventional shields and tower shields remain too
restrictive for working magic.

Investiture opens at Arcane 4 and lets a Mage borrow one missing half of the
style. `investiture focus` writes temporary FOCUS resonance over an ordinary
wielded weapon, while `investiture aura` draws an AURA around the caster. The
working is bound to the chosen weapon and goes dormant if that weapon is no
longer wielded. Because only one Investiture can be sustained, it completes a
real FOCUS or AURA rather than conjuring full resonance by itself.

## Runes and the old Isle

Six rune patterns belong to ordinary Arcane instruction. Five others wait for
the spellbook to witness a feat or discovery.

| Rune | Tradition | Effect | How it opens |
| --- | --- | --- | --- |
| Ashkenazy | Exaltation | Stronger raw spell power | Arcane 3 |
| Falx | Alacrity | 20% shorter manual cooldowns and faster barrage cadence | Arcane 3 |
| Saloman | Bastion | A small SP return | Arcane 4 |
| Talek | Boreal | Cold damage and Chilled | Arcane 4 |
| James | Whimsy | Playful Mage Eye and Teleport manifestations | Arcane 5 |
| Marsellus | Augmentation | A chance of a force echo | Arcane 5 and three Fluent workings |
| Mezari | Amity | 10% lower spell-point cost | Arcane 6 and one Inscribed working |
| Ravidel | Igneous | Fire damage and Burning | Arcane 6 and fifty useful fire casts |
| Rodney | Continuance | 25–50% longer buffs and control effects | Arcane 7 |
| Aiken | Severance | Half normal armor absorption on damaging workings | Arcane 8 |
| Arcanarton | Entropy | Chaos, disease, and unstable force | Arcane 9 and the broken theorem |
| Bodach | Demise | Death magic and life siphoning | Arcane 9 and the silence beneath the Isle |
| Trivlian | Putrefaction | Converts damaging workings to evil and acid | Arcane 9, Bodach or Arcanarton, and the green attic grimoire |

Saloman's damaging return is capped at one quarter of the manual working's
discounted ordinary cost. Utility workings return ten percent of discounted
base cost. Automatic barrage impacts do not generate SP.

Rodney is deliberately narrower than an elemental rune: it can only be bound
to a duration-bearing buff or control working. It adds twenty-five percent
through two minutes, thirty-five percent over two minutes, and fifty percent
over five minutes. It extends Insane and Wrath concentration blocks, Stasis
Freezing, and Bodach Powerup, but cannot lengthen Burning. Rune
bindings also alter visible spell language: Talek can turn Fireball into blue
coldfire, while forbidden runes make Bolt's lightning black and coruscating
and Ravidel can push it toward plasma.

Aiken is restricted to damaging workings and uses the mudlib's established
armor-piercing path. It halves armor-derived absorption while preserving
elemental resistance, intrinsic constitution/willpower reduction, shields, and
Mana Barrier. Burning can accumulate to fifty times an NPC target's level, but
the cap against a player remains one times that player's level.

James's Rune of Whimsy is mechanically harmless: Mage Eye may become a tiny
teapot, bespectacled gecko, or similarly serious scout, while Teleport writes
its paired portals in irresponsible colors. Trivlian's rune pulses green and
replaces a damaging working's native type with evil and acid. Its grimoire
opens in the Darkwind Mage attic only after Bodach or Arcanarton is known.

The spellbook rejects bindings that have no effect on a page. `runes <rune>`
lists compatible workings and `spellbook <working>` lists compatible runes.
Falx and James can annotate every page; Saloman and Mezari fit SP-costing
workings; Rodney fits duration-bearing buffs and controls; damage runes fit
damaging workings. Bodach and Arcanarton retain their unusual non-damage
exceptions on Insane, and Bodach also changes Powerup.

When Bodach is bound to Powerup, the one-shot conversion becomes a visible
fifteen-pulse buff. Each pulse spends the chosen HP amount without crossing a
ten-HP reserve and restores three times that amount as SP. Touch has a
fourteen-second base cooldown.

The Isle of the Magi lies south of Darkwind, still scarred by the war that
separated Mage and Necromancer lore. At Arcane 9, a Mage can attune to the
surviving Focus Point and enter the buried portion of Arcanarton's broken
tower. A fused palimpsest and a violet fracture preserve more of the old
argument than the official history admits. Bodach's page waits elsewhere,
beneath the disused well, after the Wyrm's breath no longer overwhelms the
quieter voices there. These discoveries remain in the spellbook permanently.

## Long study and useful commands

Arcane study continues to rank 1000, while spell and guild-level unlocks
remain capped at 15. Rank costs rise quadratically per step beyond the early
early table, making 1000 vastly more expensive than 500. Long study opens
Silverline, Ember Script, Aurora Hand, and the Void Palimpsest; this progress
is cumulative.

Prestige also opens combat-neutral auras selected with `mageaura`: Living Ink
at 100, Prismatic Script at 250, Astral Geometry at 500, Paradox Echo at 750,
and The Dark Wind at 1000. Prismatic Script changes color as it circles its
Mage.

The spellbook watches active cooldowns once per heartbeat. Its Grand Revision
chance is 1 in 10,000 at low ranks, 25 in 10,000 at Arcane 500, and 100 in
10,000 at Arcane 1000. A success clears all spell timers together.

Most of the guild can be navigated through a small set of commands. `research`
or `mstudy` describes Arcane progress and the next page. `spellbook` follows
mastery, rune sockets, equipment resonance, and the prepared barrage, while
`spells` is the working index. `runes`, `inscribe`, and `unbind` manage the
customization pages. `battlemage` explains the current weapon-and-AURA setup.
`overchannel` reports or changes the additional maximum-SP commitment.
`mageaura` lists and selects prestige cosmetics.
Teleport answers to both `tport` and `teleport`; `dw`, `hyper`, `souv`, and
`vi` abbreviate Darkwind, Hyperborea, Souvrael, and Volcano Isle.
Guild conversation uses `mage <message>`—with `m` and `ma` as aliases—and
`magi` lists visible members.
