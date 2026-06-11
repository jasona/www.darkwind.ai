# Divine Patronage

DarkWind's divine system tracks the influence of Mitra, Gaea, and Set across the world. Player actions can push the omen cycle toward one god, and personal patronage lets a character pledge to one of them.

## The Gods

| God | Theme |
| --- | --- |
| Mitra | Fellowship, service, protection, mercy, light, and holy order |
| Gaea | Endurance, nature, restoration, balance, and living cycles |
| Set | Shadow, pressure, ambition, fear, secrets, and domination |

## Commands

| Command | Use |
| --- | --- |
| `omens` | Read the current world omen |
| `portents` | Alias for `omens` |
| `patron` | Read your patronage |
| `patron gods` | Learn about the gods |
| `patron pledge <mitra|gaea|set>` | Pledge to a patron |
| `patron renounce` | Break your current pledge |
| `patron favor` | Read your broad favor standing |
| `patron pilgrimage start` | Begin a pilgrimage |
| `patron pilgrimage status` | Check pilgrimage progress |
| `tithe <amount> to <god>` | Offer coins toward a god |
| `tithe <amount> at shrine` | Tithe at the shrine in your room |
| `pray at shrine` | Pray at the shrine in your room |
| `meter` | Check Wrathful Avatar charge |
| `score` | Check Wrathful Avatar charge |

## Omens

Omens describe the public divine state of the world. They do not show raw pressure numbers.

| State | Meaning |
| --- | --- |
| Ascendant | One god has enough pressure to lead the others |
| Godless | No god has enough pressure to rule the cycle |
| Eclipse | Set has dragged a temporary shadow across the cycle |
| Holy Hour | A god's hour is active and patron blessings strengthen |

Shrines, tithes, pilgrimages, marked enemies, rare events, and reputation-bearing deeds all feed the cycle.

## Patronage

A patron pledge affects Wrathful Avatar charge for heroes and above. Patron rank rises as you earn favor.

See [Wrathful Avatar](avatar.md) for the combat power itself.

Favor comes from:

- Tithes
- Shrine prayer
- Pilgrimages
- Marked enemies
- Deeds that match your patron
- Reputation shifts with clear divine meaning

The exact numbers are hidden. `patron favor` describes the broad standing.

## Patron Differences

| Patron | Blessing Pattern |
| --- | --- |
| Mitra | Rewards fellowship and gains extra charge near other Mitra followers |
| Gaea | Rewards endurance and grows stronger as HP drops |
| Set | Rewards shadow and pressure; ascendant Set can penalize good non-Set followers |

Renouncing a patron creates a temporary debt that slows Wrathful Avatar charge.

## Shrines

Shrines make patronage visible in the world.

Known shrines:

| God | Shrine |
| --- | --- |
| Mitra | Temple of Mitra in DarkWind City |
| Gaea | Rose garden near the chapel |
| Set | Black altar in the temple of Qazaash |

At a shrine, use `pray at shrine`, `tithe <amount> at shrine`, or `look shrine`.

## Pilgrimage

After pledging to a patron, use `patron pilgrimage start` to begin a pilgrimage. Visit divine shrines before the omen-thread grows cold.

Completing a pilgrimage earns patron favor and ties the character more closely to the divine cycle.

## Tithes

Tithes offer coins to a god and push divine pressure.

Valid forms:

- `tithe <amount> to <mitra|gaea|set>`
- `tithe <mitra|gaea|set> <amount>`
- `tithe <amount> at shrine`

Tithes also tug alignment and ethics toward the god honored.
