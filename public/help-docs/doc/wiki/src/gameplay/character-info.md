# Character Info

These commands show information about your character, other players, and personal notes.

## Score

| Command | Use |
| --- | --- |
| `score` | Show abbreviated character information |
| `sc` | Show a more detailed score |

Score shows important character details:

- Level
- Experience
- Guild points
- Coins carried
- Coins in the bank
- HP and max HP
- SP and max SP
- Stats
- Age
- Wrathful Avatar charge where available

## Finger

| Command | Use |
| --- | --- |
| `finger <player>` | Show public information about a player |
| `finger -text <player>` | Force text output |

Finger works even when the player is offline. Darkflow clients can open a GUI modal by default; use `finger -text` for a text version.

## Who And Laston

| Command | Use |
| --- | --- |
| `who` | Show who is online |
| `who <filter>` | Show a filtered online list |
| `laston <player>` | Show when a player last logged on |

Useful `who` filters include `new`, `ghost`, `pk`, `hero`, `legend`, `level <#>`, guild names, clades, and clan names.

## Personal Notes

Every adventurer carries a personal notebook.

| Command | Use |
| --- | --- |
| `pnote` | Read your notes |
| `pnote a- <text>` | Add a note |
| `pnote d- <number>` | Delete a note |

Use notes for quest hints, routes, prices, rare spawns, recipes, and reminders.

## Announcements

DarkWind announcements are official staff notices.

| Command | Use |
| --- | --- |
| `checkannounce` | Show unread announcement count |
| `announcehist` | Show recent announcements |

The web client also has an Announcements interface with read and unread status.

## Metaphysician

The Metaphysician helps high-level adventurers improve beyond ordinary training.

The Metaphysician can raise:

- Constitution
- Strength
- Intelligence
- Dexterity
- Wisdom
- Charisma
- HP
- SP

Requirements and limits:

- Requires level 90
- Primary stats can receive 100 total metaphysical increases
- HP and SP do not use that same primary-stat limit
- HP and SP increase by 2 to 7 per metaphysical raise
- Cost rises as your stats grow

