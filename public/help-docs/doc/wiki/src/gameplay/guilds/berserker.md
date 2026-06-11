# Berserker

Work in progress: Berserker is being built toward this design, and current game
behavior differs in places.

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
- Bard incitement

When Fury crests, Berserker Frenzy opens.

### Frenzy

Frenzy is the Berserker's signature state and is available once Fury reaches
its maximum. Initially, this presents as a barrage of attacks that happen
automatically. This drains Fury, and prevents new Fury from being generated
for a short duration.

Berserkers learn to hold onto Frenzy and release it by choice. This is Directed
Frenzy.

While using Directed Frenzy mode, a Berserker who holds maximum Fury for too
long gains Madness.

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
- Certain priestly, bardic, or alchemical effects soothe rage

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

- The Berserker can no longer flee from battle
- Weapon damage resistance improves
- Critical hit damage bonus
- `vent` cost increases and reserves some SP

#### Madness Level 3

- The Berserker occasionally resists stun and paralysis effects
- Weapon damage resistance improves
- Chance to lash out and counterattack
- `vent` has a real failure chance

#### Madness Level 4

- Critical hit damage bonus
- Chance to increase the number of swings per attack
- High chance to lash out and attack random targets

#### Madness Level 5

Upon reaching Madness level 5, the Berserker loses control.

At this stage:

- Weapon damage resistance improves
- Higher chance to resist stun and paralysis effects
- The Berserker suffers damage outside combat
- The Berserker suffers the `Exposed` status
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

## Abilities

| Ability | Use |
| --- | --- |
| Enrage | Spend HP to gain Fury and make a small attack in combat |
| Rend | Savage weapon strike with a chance to open a bleeding wound |
| Batter | Quick hit that grows stronger when chained |
| Rupture | Tears existing wounds and punishes stacked conditions |
| Shrug | Breaks entanglement or stun, with better odds at high Madness |
| Stomp | Slams the ground to disrupt a target |
| Roar | Rips away positive effects from a target |
| Primal Strike | Releases a Madness-powered strike |
| Flare | Spends HP to wake a scar and gain its benefit |
| Repress | Burns Madness for quick healing and a random drawback |

## Fury Commands

| Command | Use |
| --- | --- |
| `berserk`, `ber`, `eberserk`, `eber` | Speaks on the Berserker channel |
| `berserkers`, `berks` | Get a list of current Berserkers online |
| `bhist` | Reviews recent Berserker channel history |
