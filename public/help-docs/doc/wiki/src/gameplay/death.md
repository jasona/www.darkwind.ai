# Death And Recovery

Death is part of DarkWind, but it is forgiving. It costs a little, never a lot.

## What Happens

When you die, you become a ghost and your spirit is whisked to the church of
the continent or planet you died on. Your corpse - holding all of your
belongings and gold - travels with you, tucked into your inventory. There is
no corpse run, and nobody can loot you.

At level 5 and under:

- Death has no penalty at all

Above level 5:

- You lose 10% of your experience on hand
- Nothing else is lost: no stats, no levels, no gear

## Returning To Life

At the church you have two choices:

1. `pray` - resurrect yourself; the experience loss stands
2. Have another player resurrect you with a guild ability - this restores
   the lost experience

Once alive, take your equipment back out of your corpse (`get all from
corpse`, `get coins from corpse`). The emptied corpse rots away on its own.

If you log out before unpacking your corpse, it is stored safely and can be
recovered with `claim corpse` at the temple.

Ghosts can use `gocot` if trapped or unable to reach a church.

## Death Avengement

Avenging a death pays a bounty and makes the victim whole.

| Command | Use |
| --- | --- |
| `askavenge <player>` | Ask a player in the room to avenge you |
| `avengeinfo` | Show avengement status |

The avenger earns a bounty of experience and coins scaled by the toughness of
the killer - mightier killers pay far better. On success the victim's 10%
experience loss is also restored (unless a resurrection already refunded it).

Avengement rules:

- You have 30 real-time minutes from death
- The avenger must kill the enemy that killed you
- Neither player can log off during the attempt
- Only one avenger can be assigned per death
- One avenger can only avenge one player at a time
- If the killer dies before the avenger succeeds, the avengement ends

## Avoiding Death

- Use `monitor`
- Set `wimpy`
- Carry food and drink
- Keep coins in the bank
- Learn nearby exits
- Use `areas <domain>` to choose level-appropriate places
- Leave when enemies hit too hard
- Ask the newbie channel or guildmates before pushing deeper
