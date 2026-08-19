# Travel

DarkWind is built around routes, ferries, roads, portals, flight, ships, and recall tools. Center of Town is the usual navigation anchor in Darkwind City.

## Everyday Movement

Use compass directions to move: `n`, `s`, `e`, `w`, `ne`, `nw`, `se`, `sw`, `u`, `d`

Special exits appear in room text. Try commands like `enter`, `exit`, `climb`, `portal`, `knock door`, or `read sign` when the room hints at them.

## Finding Places

| Command | Use |
| --- | --- |
| `where` | Show your current domain and area information |
| `areas <domain>` | List areas in a domain with rough level ranges |
| `uptime` | Show reboot timing |
| `time` | Show game time |
| `date` | Show game date |

`areas` is a guide, not a guarantee. Variable-level areas can shift based on the first player they meet.

See [Areas](areas.md) for area-list usage and early hunting suggestions.

## Returning To Safety

| Command | Use |
| --- | --- |
| `recall` | Return to Center of Town with a cooldown |
| `ncot` / `acot` | Level 1–5 / level 6–49 return to Center of Town |
| `ndomain` / `adomain` | Return to an Adventurers' Guild through level 49 |
| `gocot` | Ghost or bugged-room return |
| `cinis` | Corpse burner return to a nearby Adventurers' Guild |

Teleportation does not work everywhere. Some rooms block recall-style movement.

Recall notes:

- `recall` has a 15-minute cooldown after a successful use
- `recall` cannot be used from Center of Town
- `recall` cannot be used in rooms that block teleportation
- Levels 1–5 use `ncot`; levels 6–49 use `acot`
- `gocot` is for ghosts and bugged-room recovery

## Ferries

Ferries connect major domains. Ferry tickets are free for level 5 and under and cost 85 coins for everyone else.

Known ferry routes:

| Ferry | Route |
| --- | --- |
| M.S.S Fairweather | DarkWind to Souvrael and back |
| Pequod | Hyperborea to DarkWind and back |
| Oshimara Maru | Souvrael to Odako province in Kerei and back |
| Island Skipper | DarkWind to Isle of Dwork, Volcano Isle, and back |

Buy a ticket near the docks, board when the ferry arrives, and keep the ticket until it is collected.

## Ships

Players can own ships. Ship types include cogs, galleys, catamarans, and carracks.
At a ship shop, use `inquire <ship name>` to learn where a registered ship is
currently docked and who owns it. Ship names must be one word.

Common ship commands:

| Command | Use |
| --- | --- |
| `orders` | Show ship commands available in the current ship room |
| `push off` | Leave the dock |
| `dock` | Dock the ship |
| `sail <direction>` | Sail |
| `peer` | Look outside the ship |
| `hoist` | Raise sails |
| `furl` | Lower sails |
| `permit <player>` | Allow boarding |
| `forbid <player>` | Remove boarding permission |
| `promote <player>` | Promote a passenger to captain |
| `demote <player>` | Demote a captain |
| `disembark` | Leave the ship |
| `yell <message>` | Shout outside the ship |

Ships persist through reboot. Equipment stored on ships does not.

## Environmental Hazards

Different domains demand different preparation.

- Souvrael is a desert; carry water
- Hyperborea is freezing; bring warm protection
- Kerei has disease-bearing jungle hazards
- Underworld routes are dangerous and easy to overcommit to
- Ocean swimming is deadly away from protected bays

Ask locals, use `areas`, and turn back early when an area starts hitting too hard.
