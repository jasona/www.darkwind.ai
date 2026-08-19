# Ninja

Ninja are disciplined assassins built around stealth, disabling strikes,
bare-handed combat, and short technique combos.

Joining requires level 5 and at least 10 unmodified Dexterity.
Ninja and Street Samurai are compatible multi-guild choices in either join
order, subject to the normal level and membership limits.

## Progression

Ninja have two independent progression tracks:

- Guild level rises only when Yagyu accepts proof of a newly completed unique
  assassination mark. Marks do not cost experience or guild XP. There are 50
  marks and guild level 50 is final.
- Ninja rank rises every 250 guild XP (GXP). Each rank after rank 1 grants one
  training session. Rank does not change guild level.

Qualifying combat kills use the shared guild-kill award system. Battle GXP
tapers for NPCs more than five levels below the Ninja and reaches zero at
fifteen levels below. A fully validated Ninja skill attempt awards 2 GXP,
whether its reliability roll
succeeds or fails, subject to per-skill pacing. Resolving a three-piece combo
awards another 10 GXP.

## Reliability and Training

Unlocked trainable skills start at 70% reliability. `practice <skill>` spends
one available session to add 5%, up to 100%. Failed reliability rolls charge
one fifth of the evaluated SP cost and do not consume required items, start the
normal cooldown, or add a combo piece.

`nskills` displays guild level, marks, Ninja rank, residual GXP, available
sessions, and each skill's reliability.

`gscore ninja` also reports whether `nswitch` is currently using bare hands
or ordinary weapons, including the screen-reader presentation.

## Marks

Ask Yagyu in the Kerei guildhouse to `accept challenge`. Kill the assigned
target yourself, use `bloody` to mark the kunai with that exact target's
corpse, and give the kunai back to Yagyu. Suggested target level influences
assignment selection but is not an advancement gate.

Every assignment permits one free `reroll challenge`. The replacement is a
different incomplete mark; the rejected mark remains eligible later. Use
`list challenge` to review the active assignment and completion count.

## Combos and Pummel

Successful offensive techniques add pieces to the wraps. Three recent pieces
resolve during combat, producing a specialized result for recognized
combinations or a general burst otherwise. Pieces expire after a short time.

Pummel applies a stacking physical vulnerability. Its duration is
`min(90, 30 + 2 * guild level)` seconds and it can end early after its extra
damage budget is exhausted.

## Common Commands

| Command | Use |
| --- | --- |
| `ninhelp` | Opens in-game Ninja help |
| `nskills` | Shows abilities and both progression tracks |
| `practice <skill>` | Spends a training session for 5% reliability |
| `ninja`, `ninjas`, `ninhist` | Guild channel and history |
| `nfocus`, `nmed`, `nmark`, `ntrack` | Setup and target study |
| `fade`, `nmelt`, `nshroud`, `onmitsu` | Concealment and escape |
| `blind`, `cripple`, `kekomi`, `pummel`, `tsubo`, `tsuki` | Combat control |
| `shuriken`, `heartstop`, `dimmak` | Ranged and finishing attacks |
