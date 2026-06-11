# Swashbuckler

Work in progress: Swashbuckler is being built toward this design, and current
game behavior differs in places.

Dashing rogues, gallant courtiers, outlaw kings, pirates, kensai, duelists,
and dockside troublemakers all find a home in the Swashbucklers. They trust
quick feet, light armor, a ready blade, a better insult, and the kind of nerve
that turns a bad room into a story.

## In Play

A Swashbuckler is at home in courts, taverns, alleys, ships, forts, and any
place where someone important thinks they are safe. The guild fights in the
open, usually with a jest on the tongue and a blade already moving.

A Swashbuckler steals the room. The guild wins by making the fight public,
personal, flamboyant, and just a little haunted.

- Choose a proper blade
- Start one or more techniques
- Build Flair by holding the fight, landing criticals, and wielding named weapons
- Spend Flair on quick pressure or a decisive push
- Challenge, charm, parley, skulk, or toss a doubloon when the room turns ugly
- Steal attention with a flourish, insult, named blade, or ghostly echo
- Name the weapon that survives long enough to deserve it

## Blades

Many Swashbuckler powers require a blade: knives, daggers, rapiers, sabres,
cutlasses, short swords, katanas, and other light or one-handed swords. A good
blade is more than a damage number. It has weight, balance, edge, story, and
the right sort of arrogance in the hand.

`sevaluate` reads a weapon without making it magical. It tells the Swashbuckler
what the blade is good for, whether it suits slashing or thrusting, and whether
it has oddities worth noticing.

## Finesse

Finesse measures how much blade work a Swashbuckler can keep alive at once. A
young Swashbuckler handles one technique. A seasoned one layers styles until
the fight looks unfair.

Technique strain comes from:

- Technique weight
- Blade type
- Armor weight
- Current tempo
- Charm and reputation
- Multiple offensive techniques
- Multiple defensive techniques

Too much strain makes the dance ugly. A good Swashbuckler knows when to add
another flourish and when to stop before the feet get tangled.

## Flair

Flair is the visible part of Swashbuckler skill: the glove slap, the impossible
bow, the lucky coin, the cutting joke, the named blade held high while someone
bleeds on the floor. In combat, it is also a spendable momentum resource.

Flair starts at zero, decays outside combat, and caps at `10 + CHR/10`. Each
active combat round offers a chance to gain Flair. Wielding a named weapon
provides an additional opportunity, and Flourish improves both chances. A
critical hit grants one Flair, at most once per combat round.

Flair spenders currently include:

| Skill | Guild level | Cost | Effect |
| --- | ---: | ---: | --- |
| `slip <foe>` | 3 | 2 Flair, no SP | Makes a quick strike with a slashing or piercing main-hand weapon; uses a micro damage timer |
| `press <foe>` | 8 | 8 Flair, no SP | Makes an immediate attack round with no timer; the target must be the Swashbuckler's current opponent and still answering that Swashbuckler's challenge |

## Techniques

Techniques are blade styles. Some trigger when the right moment appears. Others
pull effort every round. They can be started and stopped with `starttech` and
`stoptech`.

| Technique | What it does |
| --- | --- |
| Parry | Deflects the force of incoming blows |
| Slash | Trades refinement for direct power |
| Dodge | Lets footwork carry the Swashbuckler out of danger |
| Offensive Spin | Hides true attacks behind spinning steel |
| Called Shot | Finds weak places in armor and guard |
| Disarm | Relieves an enemy of a weapon |
| Riposte | Answers an incoming blow with a quick strike |
| Critical Strikes | Drives the blade deeper when a clean opening appears |
| Weapon Break | Catches a weapon and ruins it with a sharp twist |
| Phantom Strikes | Calls fallen brethren to lash through the enemy's defense |
| Impale | Follows through with deep piercing wounds |
| Flurry | Uses speed to steal extra swings from small openings |
| Flourish | Mesmerizes with beautiful, dangerous blade work |
| Thousand Blades | Buries the real attack inside false ones |
| Dance of Death | Turns mind, body, blade, charm, and speed into one motion |

The Dance of Death is the guild's legendary end point. The Swashbuckler becomes
one with the blade in the heat of the fight until the motion looks almost
effortless.

## Phantom Brethren

The Order keeps company with its dead. Old duelists, drowned pirates, vanished
kensai, and nameless bladesmen linger around the guild's flashiest work. They
answer best when a Swashbuckler fights with a named weapon, holds the center of
the room, or risks everything on a beautiful mistake.

The ghostly side stays concrete. `phantom` calls fallen brethren into the
attack. Black Flag Bravado leans harder into drowned pirates and haunted
boarding work. Named weapons and the Dance of Death give those echoes style
and timing while `phantom` remains the main ghostly technique.

## Tricks

Swashbucklers are duelists. Style counts. So does leaving a room before anyone
notices, buying luck with coin, insulting a foe into standing still, and talking
a brawl into a truce.

| Trick | What it does |
| --- | --- |
| Challenge | Insults a foe into staying for the fight |
| Charm | Draws every eye in the room and sharpens presence |
| Parley | Negotiates a truce in the room |
| Skulk | Enters or leaves a room unnoticed |
| Doubloon | Offers coin for a lucky defensive charm |
| Slip | Spends a little Flair for a quick weapon strike |
| Press | Spends heavy Flair to attack a challenged current foe |
| Flank | Sidesteps into extra blade work |
| Thrust | Finishes a wounded foe with precise force |
| Wound | Opens a cut that keeps bleeding |
| Sap | Drains dexterity through a ghostly blade cut |
| Stagger | Turns unsteady movement into a brief reset |

Some of the guild's theater is practical. Some of it is simply necessary. A
dramatic bow, a glove slap, a carved initial, a lucky coin, and a weapon juggled
while waiting all belong to the same tradition.

## Named Weapons

Naming a weapon begins as style. It becomes history when the blade survives
duels, escapes, wounds, insults, impossible victories, humiliations, and
recoveries. The name makes the weapon personal.

Named blades can remember:

- Notable opponents
- Favorite techniques
- Public challenges
- Parley victories
- Broken weapons
- Lost duels
- Recoveries after embarrassment

## Bravados

Bravado is a polished flavor of trouble. A Swashbuckler learns a Bravado from a
branch, keeps one polished at a time, and can retrain when another kind of
trouble calls louder.

Each Bravado gives one signature trick and nudges a small set of existing
techniques. The core guild stays the same: blades, Finesse, tricks, named
weapons, and nerve.

| Bravado | Learned from | Signature |
| --- | --- | --- |
| Candlelight | Darkwind Order | Charm, challenge, or skulk can open a cleaner first cut |
| Spirit Mask | Kerei Kensai | Phantom and flourish can leave a short bad-luck mark |
| Firedance | Souvrael Desert Legion | A prepared blade can catch fire for short burning work |
| Buckler | Hyperborean Cave | Buckler work improves parry, riposte, and shield-side counters |
| Black Flag | Haunted coasts and the Fallows | Phantom attacks gain drowned-pirate bite during flurry or boarding-style attacks |

## Advancement

Swashbucklers advance through Finesse, technique mastery, duels, daring
escapes, public victories, blade work, and a reputation that can survive being
seen.

| Rank | Opens |
| --- | --- |
| Novice Fencer | Parry, skulk, slice, name weapon, evaluate weapon |
| Mischievous Scoundrel | Slash, sharpen, candle, early roguish work |
| Merry Outlaw | Dodge, offensive spin, slip, better Finesse |
| Daring Desperado | Challenge, charm, first public tricks |
| Courtly Adventurer | Called shot, Swashbuckler call, better teamwork |
| Thrillseeking Explorer | Disarm, insult, locate Swashbucklers |
| Infamous Soldier of Fortune | Riposte, trouser-cutting humiliation |
| Dashing Courtier | Parley, press, thrust, cleaner duel control |
| Beguiling Rogue | Critical strikes, weapon break |
| Famed Swashbuckler | Phantom strikes, impale, doubloon |
| Legendary Duellist | Flurry, wound, chosen weapon |
| Paragon of Swashbucklers | Flourish, thousand blades, sap, inspire |
| Blademaster | Dance of Death, Bravado mastery, blademaster line, legendary style |

## Deck Commands

| Command | Use |
| --- | --- |
| `sb`, `esb`, `swash`, `eswash` | Speaks or emotes on the Swashbuckler channel |
| `sbhist` | Reviews recent Swashbuckler channel history |
| `swashies`, `swho`, `sbwho` | Lists active Swashbucklers |
| `sbskills`, `sbhelp` | Shows skills or help |
| `starttech <technique>` | Starts a blade technique |
| `stoptech [technique]` | Stops one technique or all techniques |
| `challenge <foe>` | Challenges a foe to stay and fight |
| `charm`, `parley`, `skulk <direction>` | Uses social or escape tools |
| `sevaluate <weapon>` | Studies a weapon |
| `sbsharpen <weapon>` | Improves a suitable blade |
| `nameweapon <weapon> to <name>` | Names a weapon |
| `bravado` | Reviews or trains the active Bravado |
| `doubloon` | Creates a lucky defensive charm from coins |
| `slip <foe>`, `press <foe>` | Spends Flair for immediate blade pressure |
| `sbflank <foe>`, `sthrust <foe>` | Uses position or thrust attacks |
| `wound <foe>`, `ssap <foe>`, `stagger` | Uses dirty blade work |
