# Basic Commands

DarkWind is played by typing commands. Most commands are short verb phrases: `look`, `get sword`, `say hello`, `kill rat`, `wear armor`, `wield sword`

## Looking Around

| Command | Use |
| --- | --- |
| `look` or `l` | Look at the room |
| `look <thing>` | Look at something in the room or your inventory |
| `examine <thing>` or `exa <thing>` | Examine something more closely |
| `gl` | Glance at the room |
| `inventory` or `i` | Show what you are carrying |
| `who` | Show who is online |
| `finger <player>` | Show public information about a player |

Room descriptions often contain nouns you can inspect. If a room mentions a statue, sign, trail, table, corpse, altar, or doorway, try looking at it.

## Moving

Most movement uses compass directions.

| Long | Short |
| --- | --- |
| `north` | `n` |
| `south` | `s` |
| `east` | `e` |
| `west` | `w` |
| `northeast` | `ne` |
| `northwest` | `nw` |
| `southeast` | `se` |
| `southwest` | `sw` |
| `up` | `u` |
| `down` | `d` |

Some rooms have special exits such as `enter`, `climb`, `portal`, `knock door`, or `exit`. Room text usually hints at these.

## Items

| Command | Use |
| --- | --- |
| `get <item>` | Pick up an item |
| `get all` | Pick up everything you can carry |
| `get all from corpse` | Loot a corpse |
| `put <item> in <container>` | Put an item into something |
| `give <item> to <player>` | Give an item to another character |
| `drop <item>` | Drop an item |
| `keep <item>` | Mark an item as kept |
| `unkeep <item>` | Remove kept status |
| `wear <armor>` | Wear armor or clothing |
| `wield <weapon>` | Wield a weapon |
| `equip` | Wear and wield available equipment |
| `weight` | Check carried weight |

If there are several similar objects, add a number: `look corpse 2`, `get sword 3`, `sell knife 2`

## Combat

| Command | Use |
| --- | --- |
| `kill <target>` | Start fighting |
| `assist <player>` | Help another player fight their target |
| `.` | Show a quick HP/SP report |
| `monitor` or `mon` | Toggle HP/SP monitoring |
| `wimpy <percent>` | Run when your HP drops below that percent |
| `wimpycmd <direction>` | Set the direction used by wimpy |
| `consider <target>` | Judge a target where available |

New adventurers also have `nheal`, `ncot`, `npunch`, and `nkick`.

## Help

The in-game help system is large and useful.

| Command | Use |
| --- | --- |
| `help` | Show help overview |
| `help <topic>` | Read a topic |
| `help <section> <topic>` | Read a topic inside a help section |
| `help list` | Show help sections |
| `help list <section>` | Show topics in a section |
| `help all` | Show all help topics |
| `commands` | Show general commands |

## Aliases

Aliases shorten commands you use often.

| Command | Use |
| --- | --- |
| `alias list` | Show saved aliases |
| `alias <name> <command>` | Create an alias |
| `alias <name>` | Show an alias |
| `alias remove <name>` | Remove an alias |
| `talias <short> <player>` | Create a tell alias for a player |
| `talias list` | Show tell aliases |

Examples:

- `alias ga get all`
- `alias la look at`
- `talias bob bobert`

Some commands cannot be aliased, including `get`, `drop`, `equip`, `wear`, `wield`, `take`, and `unwield`.

