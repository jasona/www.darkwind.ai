# Remort

Work in progress: Remort is a planned system and does not match current game
behavior.

Remort is late-game rebirth. A Mythic character gives up their current level
and begins again at level 1 with a permanent change carried into the next life.

Remort is not a prestige badge. It is a choice to make the next version of the
character stranger, deeper, and more specialized.

## Core Loop

1. Reach [Mythic](../leveling.md)
2. Discover a [Shrine of Creation](shrines-of-creation.md)
3. Meet the shrine's offering or trial
4. Choose a boon
5. Remort into a new level 1 life
6. Level again with the new boon active

## What Resets

| Character Piece | Remort Result |
| --- | --- |
| Level | Reset to 1 |
| XP on hand | Lost |
| Temporary buffs | Removed |
| Active short-term effects | Removed |
| Normal level-based power | Rebuilt through leveling |
| Shrine trial progress | Consumed when the boon is taken |
| Guild membership | Become guildless, like a normal level 1 player |

## What Carries Forward

The following are kept unless the remort boon says otherwise:

  - Name and history
  - Gold and banked money
  - Boats and major ownership
  - Trait progress
  - Profession progress
  - Learned long-term unlocks
  - Creation Marks
  - Chosen remort boons
  - Classes

## Creation Marks

Every remort leaves a Creation Mark on the character. Creation Marks record
which shrine changed the soul and what the character carried back from it.

Creation Marks matter for:

- Unlocking later shrine choices
- Qualifying for classes
- Opening exotic clades
- Strengthening shrine-related traits
- Changing future remort costs
- Giving omens and portents more personal weight

Examples:

| Creation Mark | Source |
| --- | --- |
| Esper | Psionicist shrine |
| Wyrmseed | Dragon shrine |
| Clockwound | Tekal shrine |
| Grave-touched | Bodachian Fallows shrine |
| Ash-crowned | Ashad shrine |
| Moonlit | Markas or Luna shrine |

## Remort Weight

Remort makes the next climb harder. Each boon adds Remort Weight, which raises
the XP needed to level.

| Boon Scale | XP Cost Increase |
| --- | --- |
| Minor boon | +25% to +50% |
| Standard boon | +50% |
| Major boon | +75% |
| Class unlock | +75% to +100% |
| Mythic body or rare clade | +75% to +100% |

Remort Weight is part cost, part pacing. A character with several powerful
marks levels more slowly, but carries more permanent options through each life.

## Boon Types

| Boon Type | What It Changes |
| --- | --- |
| Class | Opens a remort-scale path such as Artificer, Dragon, Morpher, or Psionicist |
| Clade | Opens an exotic body or ancestry |
| Meta trait | Improves a long-term trait that persists across lives |
| Shrine sigil | Adds a persistent shrine-linked effect |
| Domain affinity | Ties the character to a region, moon, element, or story |
| Memory | Preserves a narrow piece of progress through rebirth |
| Burden | Adds a drawback in exchange for a stronger boon |

These might be combined based on the shrine

## Classes

Classes are the largest remort choices. A guild teaches what a character does.
A class changes what a character is.

Confirmed class targets:

- [Artificer](../classes/artificer.md)
- [Dragon](../classes/dragon.md)
- [Morpher](../classes/morpher.md)
- [Psionicist](../classes/psionicist.md)

Candidate class:

- [Vampire](../classes/vampire.md)

A character can unlock many class options over multiple lives.
Multiple classes can be active at a time, though they may have
skills and abilities that clash.

## Exotic Clades

Some shrines open clades outside the normal Halls of Races. These choices are
larger than a normal reincarnation because they change the kind of body the
character can return with.

Examples include:

- Ashborn from Ashad
- Gearborn from Tekal
- Markasi from Markas
- Dailosi from Dailos
- Rimebound from Dramasa
- Cinderkin from Iglantu
- Sporekin from Lerquird
- Fallowsworn from the Bodachian Fallows
- Tideborn from Virodia
- Lotuskin from Kerei
- Serpentblood from Souvrael
- Stormtouched from Hyperborea

See [Clades](../clades.md) for the larger clade roster.

## Player Commands

These commands are planned for the system.

| Command | Use |
| --- | --- |
| `remort` | Shows current remort status, marks, weight, and available choices |
| `remort choose <boon>` | Selects a shrine boon after meeting requirements |
| `marks` | Shows Creation Marks |
| `shrine` | Reads the current shrine |
| `offer <thing> to shrine` | Gives an offering to the shrine |
| `attune shrine` | Begins shrine attunement |

## Guardrails

- Remort never deletes the character
- Remort never erases money or major ownership
- Remort rewards new play patterns more than raw stat inflation
- Remort choices are visible before the final confirmation
- Powerful boons carry clear costs
