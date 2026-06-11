# Buffs And Curses

Buffs, debuffs, curses, and lingering conditions change your character temporarily.

## Buff Commands

| Command | Use |
| --- | --- |
| `buffs` | List active buffs and visible debuffs |
| `clearbuff` | Remove one current buff |
| `clearbuff all` | Remove all removable buffs |

Not every buff is visible to the system.

## Debuffs

Debuffs include curses, hexes, poisons, diseases, and other hostile effects.

Debuffs appear under their own header in `buffs`. They cannot be removed with `clearbuff`.

Debuffs end through:

- Time
- Cures
- Dispels
- Guild abilities
- Potions or other consumables
- Special room or NPC services

See [Status Effects](status_effects.md) for common debuffs.

## Cursed Items

Cursed items cannot be removed by normal methods.

To remove a cursed item:

1. Go to Plum in the church
2. Use `uncurse <object>`
3. Pay 5,000 coins per item

Some Acolyte-style or Cleric-style abilities can also remove curses.

## Reading Buffs

Good habits:

- Check `buffs` after a hard fight
- Check `buffs` before assuming a command is broken
- Clear old friendly buffs before testing new ones
- Treat hidden or repeated debuffs as part of the enemy's danger
- Carry cures before exploring disease, poison, curse, or hex-heavy areas

