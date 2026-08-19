# Combat

Combat is how most adventurers earn experience, coins, equipment, and reputation. It is dangerous by design, especially when exploring a new area.

## Starting A Fight

| Command | Use |
| --- | --- |
| `kill <target>` | Attack a target |
| `assist <player>` | Join another player's fight |
| `consider <target>` | Estimate danger where available |
| `assess <target>` | Compare the target's experience to yours |
| `scry <target>` | Newbie tool for judging some enemies |
| `stop` | Stop hunting a fleeing player |

Some enemies are aggressive and attack when you enter. Watch room text and leave quickly if the area feels too strong.

Strength and Dexterity increase attack speed with diminishing returns at high
values. Heavy armour trades avoidance for absorb class. Absorb class provides
both reliable physical damage reduction and a chance to negate a landed blow;
armour-piercing attacks halve the reliable reduction.

## Watching Your Health

| Command | Use |
| --- | --- |
| `.` | Quick HP/SP display |
| `monitor` or `mon` | Toggle HP/SP monitoring |
| `set monitor bar` | Show HP/SP as bars |
| `combatbrief` | Adjust combat text |
| `combatbrief visual` | Toggle Darkflow's visual Combat pane |

Use monitoring before you need it. It is much easier to leave a bad fight when you see your health falling.

Visual combat replaces routine weapon-swing lines only while a compatible
Darkflow Combat pane is visible and ready. Ability activations, warnings,
fleeing, death, rewards, and other important prose remain in the terminal.
If the pane is closed, collapsed, reconnecting, or unsupported, normal combat
text resumes automatically.

## Wimpy

Wimpy makes your character run when HP drops below a percent you choose.

| Command | Use |
| --- | --- |
| `wimpy <percent>` | Set the HP percent for fleeing |
| `wimpycmd <direction>` | Set the direction to flee |

Use a full direction for `wimpycmd`, such as `south`, not `s`. The direction has to be a valid exit from the room. If it is wrong, wimpy still fires, but you may flee into something worse.

## New Adventurer Combat Commands

New adventurers have a few extra commands.

| Command | Use |
| --- | --- |
| `nheal` | Restore a small amount of HP |
| `ncot` | Return to Center of Town |
| `nbolt` | Make a magical attack that rewards Intelligence |
| `npunch` | Make a simple attack |
| `nkick` | Make a simple attack |
| `aheal` | Level 6–49 version of `nheal` |
| `abolt` | Level 6–49 version of `nbolt` |
| `apunch` | Level 6–49 version of `npunch` |
| `akick` | Level 6–49 version of `nkick` |

The `n*` forms serve levels 1–5. Their `a*` adventurer forms remain available
from levels 6 through 49, giving players time to learn guild mechanics before
the introductory powers fall away.

During combat, characters through level 20 may occasionally feel the Dark
Wind restore some SP. The chance and amount both taper as level increases.

## Healing

Common recovery methods:

- Sit after a fight
- Eat food for a one-time heal
- Drink alcohol for healing and faster regeneration while intoxicated
- Use potions
- Ask a healer or guildmate
- Visit player-owned pubs and inns

Food and drink have level requirements and fullness limits. See [Economy](economy.md) for pubs, inns, and corpse ash.

At level 45 and above, [Wrathful Avatar](mechanics/avatar.md) becomes an important burst-combat tool.

## Loot

After a kill:

- `get all from corpse`
- Check useful gear before selling
- Burn the corpse with a corpse burner if you are collecting ash
- Donate unwanted gear that helps new players
- Sell ordinary loot at shops

Avoid taking loot or kills from another active player. See [Rules](rules.md).
