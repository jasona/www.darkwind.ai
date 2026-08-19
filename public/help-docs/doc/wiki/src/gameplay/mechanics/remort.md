# Remort

Remort is late-game rebirth. A level 250 (Mythic) character may give up their
level and begin again at level 1, keeping a permanent remort level that grows
by one with every rebirth. Each remort level earns a boon point, spent on
permanent bonuses that persist through every future life.

Remort is always optional. A character can stay at level 250 forever.

## Core Loop

1. Reach level 250 (Mythic)
2. Type `remort` to review exactly what resets and what carries forward
3. Type `remort confirm` to be reborn at level 1
4. Spend the new boon point with `remort choose <boon>`
5. Climb again — remort players level automatically as they earn experience
6. Repeat, growing permanently stronger each cycle

## What Resets

| Character Piece | Remort Result |
| --- | --- |
| Level | Reset to 1 |
| XP on hand | Lost |
| Base stats | Reset to 1, rebuilt with stat raises |
| Guild membership | Become guildless, like a normal level 1 player |
| Intoxication and hunger | Cleared |

## What Carries Forward

- Name and history
- Gold and banked money
- Inventory, boats, and major ownership
- Remort level and lifetime remort count
- Boon points and every chosen boon
- Account progress, achievements, quest history

## The Remort Climb

Remort players advance differently from first-life characters:

- **Automatic leveling.** No advancement costs at guild halls. The moment a
  remort player has enough experience, they gain the level.
- **Stat raises.** 6 spendable raises per level, spent with `advance` at any
  guild hall. Each stat is capped at 3 x current level (hard cap 300).
- **No death penalty to stats.** Remort players do not lose stats when they
  die.
- **The remort tax.** Remort climbs use a variation of the same base experience curve as a
  first-life character. Each remort level adds 2% to that cost, so a soul on
  its tenth remort needs 20% more experience per level. This is the
  pacing counterweight to permanently stacking boons.

## Boon Points And Boons

Every remort level earns one boon point. Points are spent through
`remort boons` / `remort choose <boon>` on permanent, rank-based bonuses:

| Boon | Effect Per Rank | Max Ranks | Cost | Requires |
| --- | --- | --- | --- | --- |
| Boon of Vitality | +2% maximum HP | 10 | 1 | Remort 1 |
| Boon of Spirit | +2% maximum SP | 10 | 1 | Remort 1 |
| Boon of Might | +2 Strength | 10 | 1 | Remort 1 |
| Boon of Grace | +2 Dexterity | 10 | 1 | Remort 1 |
| Boon of Endurance | +2 Constitution | 10 | 1 | Remort 1 |
| Boon of Intellect | +2 Intelligence | 10 | 1 | Remort 1 |
| Boon of Insight | +2 Wisdom | 10 | 1 | Remort 1 |
| Boon of Presence | +2 Charisma | 10 | 1 | Remort 1 |
| Soul Memory | +5% experience gained | 5 | 1 | Remort 1 |
| Mythic Vitality | +5% maximum HP | 3 | 2 | Remort 5 |
| Mythic Spirit | +5% maximum SP | 3 | 2 | Remort 5 |

When choosing boons:

- **Every boon has a limit.** Maximum ranks keep each choice meaningful
  without allowing one bonus to grow forever.
- **Boons stack outside normal caps.** Stat boons add on top of trained
  stats, like meta bonuses, and are not limited by the level-based stat cap.
- **Later lives open stronger choices.** Mythic boons become available at
  remort 5.
- **Choices are permanent.** Review a boon carefully before confirming it.

## Where Remort Matters

Remort level is more than a bonus total. The world can recognize the depth of
a character's soul through:

- Guilds that require a minimum remort level to join
- Skills, commands, or equipment that only serve souls of a certain depth
- Areas, quests, or NPC dialogue that respond to lifetime remorts

## Player Commands

| Command | Use |
| --- | --- |
| `remort` | Shows remort status, boon points, and eligibility |
| `remort boons` | Lists all boons with ranks, costs, and requirements |
| `remort boon <name>` | Shows the details of one boon |
| `remort choose <name>` | Spends a boon point on a rank |
| `remort confirm` | Executes the remort at level 250 |
| `marks` | Shows the boons marked on your soul |
| `score` | Includes remort level and available boon points |

In-game help: `help remort` and `help boons`.

## Guardrails

- Remort never deletes the character
- Remort never erases money, inventory, or major ownership
- Only the player themselves can confirm their remort or spend their points
- Immortals, ghosts, characters in combat, and transformed characters cannot
  remort
- The full consequences are shown before the final confirmation
