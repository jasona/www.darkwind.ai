# Berserker

Berserker is an independent combat guild built around Fury, Frenzy, Madness,
Vex training, and permanent scars.

Berserkers turn pain, fear, and bad odds into weaponized fury. They feed
violence until it becomes a machine: build Fury, break into Frenzy, and keep
Madness from taking the wheel.

## In Play

Berserker starts simple.

- Fight and kill to build Fury
- Fury crests into Frenzy
- Frenzy tears through the enemy
- Vent, crash, recover, and start again

Mastery means riding Frenzy instead of ending it. Kills and heavy hits keep
Fury moving. Staying in Frenzy builds Madness. Madness makes Frenzy stronger,
opens harder effects, and raises the cost of losing control. A strong Berserker
keeps Madness high enough to matter and low enough to survive.

### Fury

Fury is the fuel. It rises from combat and falls when the Berserker
vents, crashes, waits too long, or loses the chain of violence.

It can be tracked on the monitor bar if enabled (`bstatus fury on`) and ranges
from 0 to 100.

Fury rises from:

- Taking damage
- Landing heavy hits
- Killing enemies
- Being outnumbered
- Suffering a status condition
- Berserker skills

When Fury crests, Berserker Frenzy opens.

Automatic Frenzy performs five attacks, two seconds apart, and drains the
entire Fury bar. Fury generation is suppressed until the barrage ends.
The Berserker monitor shows the remaining Frenzy pulses and time, and reports
when the Frenzy ends.

### Frenzy

Frenzy is the Berserker's signature state and is available once Fury reaches
its maximum. Initially, this presents as a barrage of attacks that happen
automatically. This drains Fury, and prevents new Fury from being generated
for a short duration.

Berserkers learn to hold onto Frenzy and release it by choice. This is Directed
Frenzy.

While using Directed Frenzy mode, a Berserker who holds maximum Fury for too
long gains Madness.

Directed Frenzy is unlocked through the Momentum Vex branch. Use
`frenzymode directed`, `frenzymode automatic`, and `frenzymode release` to
control it.

### Madness

Madness is a measure of a Berserker that has given in to their rage. With
Fury at its maximum, any additional Fury is tracked toward Madness, with
each additional 100 Fury gained granting one level of Madness (up to 5).

It can be tracked on the monitor bar if enabled (`bstatus madness on`).

Madness falls when:

- The Berserker uses `vent`
- Frenzy ends naturally
- The Berserker leaves combat and remains calm
- Certain guild skills spend Madness
- Certain supernatural or alchemical effects soothe rage

Madness rises when:

- Fury would be gained while already at maximum Fury
- The Berserker scores a killing blow during Directed Frenzy
- The Berserker takes a large single hit while at maximum Fury
- The Berserker is stunned, paralyzed, feared, poisoned, or otherwise impaired
- The Berserker remains at maximum Fury without venting

The effects of each level are cumulative unless otherwise noted.

#### Madness Level 0

- `vent`: At the cost of SP, the Berserker dumps all Fury and Madness
- No passive Madness benefits or checks

#### Madness Level 1

- The Berserker gains minor passive damage resistance against weapon damage
- Berserker guild skills no longer consume Fury
- The Berserker occasionally suffers a Concentration block
- Dropping out of Madness gives a temporary stat penalty

#### Madness Level 2

- The Berserker cannot flee while actively fighting; normal movement returns
  when combat ends
- Berserker abilities remain usable while this no-flee restriction is active
- Weapon damage resistance improves
- Critical hit damage bonus
- `vent` cost increases and reserves some SP

#### Madness Level 3

- The Berserker occasionally resists stun and paralysis effects
- Weapon damage resistance improves
- Chance to answer a weapon hit with one targeted main-hand or unarmed attack
  without changing combat targets
- `vent` has a real failure chance

#### Madness Level 4

- Critical hit damage bonus
- Each main-hand attack has a 15% chance to gain at least one extra swing, a
  4% chance to gain at least two, a 1% chance to gain at least three, and a
  0.25% chance to gain four. One roll selects the whole long-tail result
- Momentum mastery improves every tier of that swing distribution; Madness 5
  raises the baseline chances to 20%, 6%, 2%, and 0.5%
- High chance to lash out and attack random targets

#### Madness Level 5

Upon reaching Madness level 5, the Berserker loses control.

At this stage:

- Weapon damage resistance improves
- Higher chance to resist stun and paralysis effects
- The Berserker remains `Exposed`
- Outside combat, the Berserker suffers 2% of maximum health as blunt damage
  every 10 seconds until Madness falls below 5. A sufficiently strong Black
  Scar reduces or suppresses this damage
- Attacks can apply `Exposed`

## Scars

When Berserkers meet certain conditions, they receive a permanent mark
on their body. They record what the Berserker survived and change
what the Berserker becomes.

| Scar Type | Earned By |
| --- | --- |
| Blood Scar | Killing while badly wounded |
| Iron Scar | Surviving stuns, knockdowns, or heavy hits |
| Packbreaker Scar | Winning while outnumbered |
| Frenzy Scar | Holding Frenzy through multiple kills |
| Black Scar | Reaching max Madness |

Scars are permanent once earned. Training Flare allows one scar at a time to
be activated for 60 seconds, increasing to 75 seconds at higher rank:

The full-strength duration appears as **Flared Scar** in the `buffs` display.
At sufficient Defiance mastery, its residual benefit continues quietly until
the Flare cooldown ends.

- Blood heals 8% of damage dealt at full scar strength, capped at 5% of
  maximum health per hit. Blood mastery 30 raises those values to 10% and 7%
- Iron increases weapon and control resistance
- Packbreaker improves combat performance while outnumbered
- Frenzy adds one pulse to the barrage, or two while fully flared, without
  increasing total Fury drain
- Black reduces Madness 5's out-of-combat self-damage and suppresses it at
  full strength

## Vex Training

Berserker uses an independent, uncapped **Berserker Rank**. Its normal guild
level remains at 1 for membership and dual-guild compatibility, so Berserker
progression does not consume another guild's advancement allowance.

Rank starts at 1 and grants one Vex per Rank. XP required for the next Rank is:

`250 + (3 * current Berserker Rank * current Berserker Rank)`

Berserker XP is awarded automatically for meaningful NPC kills while
Berserker is the active guild. The Berserker must land the killing blow or be
listed among the killers after dealing at least 10% of the victim's maximum
health. Pets, players, and zero-XP NPCs award none. Rewards taper for enemies
more than five levels below the Berserker and reach zero at fifteen levels
below. The standard player kill tracker scales awards when too many recent
kills come from the same area, encouraging varied hunting without eventually
stopping combat XP altogether. Bosses are exempt from this variety scaling.

The Darkwind trainer also supports
`convert berserker <normal-xp|next>` outside combat. The conversion rate begins
at `1000 + (2 * Berserker Rank * Berserker Rank)` normal XP per Berserker XP.
`bstatus` shows the current rate.

The 19 core nodes each have five ranks, making a 95-Vex core journey:

| Blood | Momentum | Defiance |
| --- | --- | --- |
| Enrage | Batter | Shrug |
| Rend | Chain Violence | Thick Hide |
| Deep Wounds | Stomp | Repress |
| Rupture | Demoralizing Shout | Scar Attunement |
| Blood Price | Directed Frenzy | Iron Will |
| Primal Strike | Relentless | Flare |
|  | Roar |  |

Nodes in each column must be learned from top to bottom. A node cannot exceed
the rank of its predecessor. Use `vex tree`, `vex info <node>`, and
`vex train <node>` to inspect and raise them.

Completing every node in a branch unlocks `vex mastery <branch>`. Branch
mastery is uncapped:

- Mastery 1-10 grants 1% branch strength per point
- Mastery 11-20 grants 0.5% per point
- Mastery 21-30 grants 0.25% per point
- Mastery above 30 grants prestige rather than additional combat power
- Milestone effects unlock at mastery 10, 20, and 30

Blood mastery improves Blood skills and wounds, Momentum mastery improves
Momentum skills and Frenzy, and Defiance mastery improves healing, control
breaks, resistance, and scar use.

Thick Hide's listed 2-10% weapon resistance is its full-health baseline before
mastery while Mad. The bonus grows as health falls and reaches twice the
listed value at 25% health or lower.

Use `retrain vex confirm` at the trainer outside combat to refund all core and
mastery Vex for an escalating fee. Rank, XP, scars, and preferences remain;
current rage and active scar state are cleared.

## Abilities

| Ability | Use |
| --- | --- |
| Vent | Spends SP to clear Fury and Madness outside combat |
| Incite | Creates a visible timed effect that drains 2 SP and grants 4 Fury per heartbeat while fighting |
| Wildrage | Grants the main weapon a temporary chaos-damage proc for three minutes plus six seconds per level, capped at ten minutes |
| Heave / Sheave | Heave converts weapon weight and Constitution into damage with a chance to break the weapon; Sheave uses a worn shield for slightly less damage without damaging it |
| Enrage | Spend 8% maximum HP to gain Fury and attack; rank 3 lowers the cost to 6%, and Blood Price rank 3 makes its Fury bonus unconditional |
| Rend | Savage weapon strike that applies Bleeding; its final rank can deepen existing Bleeding |
| Batter | Quick hit that grows stronger when chained |
| Rupture | Consumes Bleeding strength and remaining duration for burst damage |
| Shrug | Breaks entanglement or stun, with better odds at high Madness |
| Stomp | Slams the ground to disrupt a target; at Madness 3+, it automatically spends one Madness for a Chaos DoT |
| Demoralizing Shout | Domain-wide battle cry that briefly weakens nearby enemies |
| Roar | Applies Exposed to a target; rank 5 affects and engages every valid enemy in the room |
| Primal Strike | Spends one Madness and adds Strength to its damage; later ranks increase damage, shorten its cooldown, and can apply Exposed for fourteen seconds |
| Flare | Spends HP to wake a scar and gain its benefit |
| Repress | Burns Madness for quick healing and a random drawback |

## Fury Commands

| Command | Use |
| --- | --- |
| `berserk`, `ber`, `eberserk`, `eber` | Speaks on the Berserker channel |
| `berserkers`, `bers`, `berks` | Get a list of current Berserkers online |
| `bhist` | Reviews recent Berserker channel history |

## Armour

Berserkers may wear light, medium, or heavy armour, including shields, in any
material. Individual items can still enforce their own level, race, size, or
slot restrictions. Use `berhelp armour` in game for the concise version.

## Utility Commands

| Command | Use |
| --- | --- |
| `berskills [available]` | Lists ability commands, costs, cooldowns, and Vex training |
| `bstatus` | Shows Rank/XP, Vex, Fury, Madness, Frenzy, Incite, Batter chain, conversion rate, and monitor settings |
| `bstatus fury\|madness on\|off` | Controls Fury or Madness monitor output |
| `frenzymode automatic\|directed\|release` | Controls Frenzy behavior |
| `vex tree\|info\|train\|mastery` | Reviews or trains Vex nodes and mastery |
| `scars` | Lists permanent and active scars |
