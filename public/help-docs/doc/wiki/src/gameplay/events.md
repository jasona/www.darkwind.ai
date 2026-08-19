# Events And Challenges

DarkWind has world events and repeatable challenge systems that sit outside ordinary hunting.

## Invasions

Invasions are dangerous attacks on Darkwind City and other important places. A siren announces them, and the world broadcasts updates while they unfold.

During an invasion:

- Invaders can attack players
- Shops, banks, inns, pubs, and citizens can be targeted
- Destroyed services take time to recover
- Invaders may block routes or rush objectives
- Only one invasion runs at a time

Low-level players are safest outside the city until the all-clear sounds.

## Arena

The arena allows structured player duels.

Arena basics:

- `challenge <player>` starts a challenge
- `accept` accepts a challenge within the time limit
- The challenger pays an entry fee based on both player levels
- The loser does not suffer a normal death
- Both players lose SP spent during the fight
- `forfeit` leaves a battle from the arena floor
- `arenabattle` tunes into arena battles from elsewhere

Arena safety removes many common battle problems, but the arena is still used at the player's risk. Do not bring gear you are unwilling to risk.

## Eternal Dungeon

The Eternal Dungeon is an instanced endless dungeon for solo players or small groups.

| Command | Use |
| --- | --- |
| `eternal enter [floor]` | Enter the dungeon |
| `eternal status` | Show run and checkpoint status |
| `eternal shop` | List shard purchases, including crafting supplies |
| `eternal buy <item>` | Buy an item with Eternal Shards |
| `eternal leave` | Leave the run |
| `eternal rejoin` | Rejoin a run |
| `eternal leaderboard` | Show rankings |

How a run works:

1. Enter the dungeon
2. Clear the floor
3. Defeat the floor leader
4. Use the portal to advance
5. Continue until the run wipes

Deaths inside the Eternal Dungeon are not normal deaths. Failed runs return players safely and award based on progress.

Checkpoints unlock every 5 floors. Solo checkpoints belong to the player. Group checkpoints belong to the exact party composition.

Leader and boss kills leave personal reward chests. Premium treasure dims
from gilded to plain and then shard-cache rewards as a tier is repeated in
one day. Crafting supply is separate: gilded and plain chests guarantee
ember materials, caches retain a smaller material chance, and recipe cards
use tier-specific pools with protection against long dry streaks. Materials
and cards can also be purchased from `eternal shop` at fixed shard prices.

## Bosses

Boss encounters are larger fights with stronger enemies, special mechanics, and better rewards.

Many bosses use visible tiers: `T1`, `T2`, `T3`, `T4`, and `T5`. Higher tiers generally mean more health, more pressure, more mechanics, and better reward expectations.

Useful habits:

- Read room and enemy text
- Bring a party when the fight looks built for one
- Carry food, drink, and recovery items
- Use `assist` cleanly
- Watch for special attacks
- Retreat before the party collapses

Boss-kill announcements go to the Events channel. A character is eligible for
an announcement only on their first kill of that particular boss during a
reboot; repeat kills by that character remain quiet. A few bosses may
explicitly opt into mocking much higher-level killers, but ordinary boss
announcements do not shame players for being overlevel.

If a boss later defeats a character who has already defeated that boss during
the same reboot, the boss's Events-channel taunt remains quiet as well.

## Daily Rewards

Daily rewards are claimed with `daily`. See [Achievements](achievements.md) for reward timing.
