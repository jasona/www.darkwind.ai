# Bard

Work in progress: Bard is being built toward this design, and current game
behavior differs in places.

Bards turn attention into power. Songs, stories, rumors, morale, reputation,
old lore, loyal fans, and enchanted instruments all become tools in the hands
of a practiced performer.

## In Play

Bards walk into a room and change what the room believes.

- Learn songs, chants, tricks, and stories
- Perform in rooms where the audience matters
- Keep a lute, drum, fiddle, flute, blade, or fan in the act
- Build Renown through useful performances, public deeds, and lore work
- Open stronger performances and deeper legends

### Renown

Renown is the Bard's public memory. It rises through active performances,
combat rallying, panic or fear soothing, useful lore, composed material, and
witnessed public deeds.

Renown opens new songs and tricks and stays with the character.

| Threshold | Opens |
| --- | --- |
| Local Name | Basic songs, lore, soothe, simple tricks |
| Known Voice | Chants, rally, perform, audience hooks |
| Troubadour | Legends, muse, stronger morale effects |
| Court Favorite | Reputation play, public counters, sharper satire |
| Master Bard | Great performances, group-defining songs, rare lore |

### Acts

Every Bard learns the same guild, but the act gives the Bard a favorite way to
hold the room.

| Act | Work |
| --- | --- |
| Motley | Jokes, insults, tumbling, misdirection, false weakness, and cruel timing |
| Virtuoso | Stronger songs, animated instruments, combat rhythm, and grand performances |
| Lorekeeper | Lore, legends, omens, old names, memory, and protective stories |

An act is a polished habit. A Bard can retrain the act when the old material
goes stale.

### Repertoire

Repertoire grows through study, travel, discovered stories, composing, and
guild training.

| Material | Use |
| --- | --- |
| Morale songs | Steady groups and resist fear |
| Chants | Push battle tempo |
| Hymns | Take longer and pay off harder |
| Dirges | Rattle enemies and undead |
| Satire and villain songs | Turn attention against a target |
| Lore and legend | Answer practical questions about the world |

### Chorus Companions

Bards can keep parts of the song moving while their hands are busy. A chorus
companion is an animated instrument, loyal fan, or enchanted weapon that follows
the Bard and carries a melody, rhythm, or refrain.

The old fan fits here: a devotee drawn in by performance who cheers, distracts,
carries gossip, and helps the Bard stay public. Singing weapons fit here too:
the blade remembers the song and cuts in time with it.

| Companion | Use |
| --- | --- |
| Fan | Cheers, distracts, carries rumor, and makes public work easier |
| Lute | Keeps a melody running for morale, charm, or healing songs |
| Drum | Holds rhythm for chants, rally, incite, and battle tempo |
| Fiddle | Sharpens quick songs, dancing tricks, and sudden reversals |
| Flute | Carries soothe, sleep, animal, and quiet-road music |
| Singing Blade | Keeps a weapon-song alive and fights beside the Bard for short bursts |

A Bard can keep one lead companion active. Higher Renown opens backup parts
that sustain a weaker refrain while the Bard performs something else.

Chorus companions take cues from the Bard:

- `carry` keeps a chosen melody going at reduced strength
- `answer` repeats the last performance as an echo
- `guard` turns the companion toward defense, distraction, or body-blocking
- `solo` lets the companion take a brief featured action
- `dismiss` ends the act cleanly

Virtuosos get the most from animated instruments. Motleys use companions for
misdirection and embarrassment. Lorekeepers use them to hold protective or
memory-heavy refrains.

### Audience

Audience changes performance strength, Renown gain, morale recovery, enemy
hesitation, and tricks such as distraction or misdirection.

### Performances

| Performance | Use |
| --- | --- |
| Rally | Restores morale and helps allies resist fear |
| Soothe | Calms aggression and reduces panic |
| Hymn | Slow song with stronger group payoff |
| Chant | Fast rhythm for combat |
| Dirge | Fear, hesitation, and anti-undead work |
| Satire | Public ridicule against one target |
| Legend | Reveals history, weakness, or old context |
| Refrain | Lets a companion carry part of a song |
| Crescendo | Turns a sustained song into a stronger finish |

### Tricks

| Trick | Use |
| --- | --- |
| Ventriloquism | Misdirection and thrown sound |
| Play Dead | Emergency deception |
| Distract | Breaks focus or creates an opening |
| Juggle | Builds attention before a performance |
| Compose | Adds personal material to the repertoire |
| Lore | Identifies history, creators, rumors, and useful context |
| Legend | Calls deeper lore tied to named places, people, and artifacts |
| Incite | Pushes battle rage and works especially well with Berserkers |
| Singing Sword | Resonates a weapon or briefly wakes it into the chorus |

## Advancement

Bards advance through Renown, repertoire, composed material, public deeds,
audience work, lore discoveries, and companions that survive enough songs to
earn a name.

| Rank | Opens |
| --- | --- |
| Street Voice | Bard channel, basic lore, knife tricks, simple songs |
| Fochlucan | Play dead, scroll work, coin tricks |
| Rhymer | Distract, perform, first audience hooks |
| MacFuirmidh | Fan companion, juggling, drinking tricks |
| Doss | Fame, defame, speech tricks |
| Lyrist | Soothe, spellsong, defensive spin |
| Canaith | Hero, villain, hymn, flute crafting |
| Troubadour | Act training, incite, restoration of reputation |
| Sonateer | Compose, sanctuary, taunt |
| Cli | Ventriloquism, fire-eating, impress |
| Anstruth | Muse, stronger chorus companions |
| Muse | Chant, brew, sustained refrains |
| Racaraide | Hum, Otto's dance, shout |
| Ollamh | Rally, singing weapons, companion echoes |
| Magna Alumnae | Wail, grand chorus, masterwork performance |

## Stage Commands

| Command | Use |
| --- | --- |
| `bard`, `bards` | Speaks on the Bard channel or lists Bards |
| `bardhist`, `bgmhist` | Reviews recent Bard channel history |
| `perform` | Begins a performance |
| `rally` | Steadies allies |
| `soothe` | Calms a room or target |
| `hymn`, `chant` | Starts a longer song or faster combat chant |
| `lore`, `legend` | Reads practical history or deeper named lore |
| `compose` | Creates or refines personal material |
| `distract`, `juggle`, `playdead` | Uses stagecraft tricks |
| `vent` | Misdirects speech or sound |
| `incite` | Pushes a target toward battle rage |
| `fame` | Reviews public reputation |
| `Sing <name>` | Draws a loyal fan into the act |
| `ssing <weapon>` | Resonates a weapon with song |
| `chorus` | Reviews active companion, refrain, and act |
| `tune <instrument>` | Prepares an instrument as the lead companion |
| `carry`, `answer`, `guard`, `solo`, `dismiss` | Directs a chorus companion |
