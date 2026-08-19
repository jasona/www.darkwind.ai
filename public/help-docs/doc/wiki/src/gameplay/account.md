# Account And Session

This page covers the commands that keep your character, login, tutorial, and
play session in order.

## Tutorial

The tutorial teaches the first layer of play: looking, examining, moving,
inventory, channels, Erga's equipment, wearing and wielding gear, newbie combat,
score, and a first newbie quest.

| Command | Use |
| --- | --- |
| `tutorial` | Show the current tutorial objective or status |
| `tutorial status` | Show your current tutorial progress |
| `tutorial continue` | Begin the objective shown in the current lesson |
| `tutorial hint` | Get a hint for the current tutorial step |
| `tutorial skip` | Stop the tutorial for this character |
| `tutorial restart` | Restart the tutorial from the beginning |

Darkflow opens the tutorial automatically in a non-blocking hover. Other
clients and screenreader mode receive the same complete tutorial in terminal
text, controlled by the commands above.

The tutorial is useful even for players familiar with other MUDs, because it
teaches DarkWind-specific city locations and commands.

## Saving And Quitting

| Command | Use |
| --- | --- |
| `save` | Save your character |
| `quit` | Save and leave the game |
| `uptime` | Check current uptime and reboot estimates |

Your character saves automatically when you quit. Many carried, worn, and
wielded items save with your character, but some items never save: donated gear,
broken gear, food, drinks, unique items, items inside containers, and items
directly marked as temporary.

Guild storage, shop storage, boats, helpers, ponies, and temporary followers do
not preserve everything across reboot. Keep important coin in the bank and check
[Equipment](mechanics/equipment.md) for item saving rules.

## Password

| Command | Use |
| --- | --- |
| `password <old password>` | Change your password |
| `password <none>` | Set a password when the character currently has a blank password |

After entering the command, the game prompts for the new password twice.

Passwords must be 8 to 16 printable characters long. Spaces are allowed, and
all characters are significant. Accounts using the older password format are
prompted once at login to choose a replacement password.

Use a password that is not your character name, not a common word, and not reused
from another site. Shared or guessed passwords can compromise every registered
character on the account.

## Switching Characters

Registered multichars can be reached without fully disconnecting.

| Command | Use |
| --- | --- |
| `switch` | List registered characters available to switch to |
| `switch <character>` | Switch to that registered character |

Only one registered character can be active at a time. When you switch, the
current body is parked linkdead, and inventory and equipment stay with that body.
Client-side aliases, triggers, highlights, and chat scrollback remain with your
client.

You cannot switch while in combat or during the attack-quit cooldown. Parked
characters idle out after a while, so return to them before relying on anything
time-sensitive.

See [Multichars](multichars.md) for the rules, unlocks, shared banking, and
social visibility settings tied to registered characters.

## Reboots

DarkWind reboots periodically for memory cleanup, code updates, and once-per-boot
world resets. Unscheduled reboots happen during crashes or emergency maintenance.

Before a reboot:

- Save with `save`
- Bank extra coin
- Finish active purchases, auctions, quests, and risky fights
- Retrieve anything important from temporary storage
- Expect helpers, ponies, summons, temporary guild storage, and some placed items to vanish

Money on your character, bank balances, registered character data, and many
carried or equipped items survive normal quitting and reboot.
