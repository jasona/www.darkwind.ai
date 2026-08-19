# Status Effects

Status effects are temporary conditions that change combat, movement, or
ability recovery. Use `buffs` to see visible effects and their remaining
time. Hostile effects appear under **Debuffs** and cannot be removed with
`clearbuff`.

## Damage And Combat Effects

| Effect | What It Does |
| --- | --- |
| Burning X | Deals X fire damage each heartbeat, then halves X. Burning ends after its 1-stack tick and cannot exceed the affected living's level. |
| Bleeding X | Adds X damage to incoming melee hits before defenses. Moving has a 25% chance to tear the wound open for X slash damage. Bleeding cannot exceed one-fifth of the affected living's level, with a minimum cap of 5. |
| Chilled | Reduces swings by 10% and adds 1 second to newly incurred standard ability cooldowns. A second application promotes Chilled to Freezing. |
| Freezing | Reduces swings by 20% and adds 2 seconds to newly incurred standard ability cooldowns. |
| Exposed | Adds 5 percentage points to incoming critical-hit chance. |
| Sundered X | Lowers armour class by X. Sundered stacks to 3; a new application refreshes the remaining duration. |

Burning, Bleeding, and Sundered show their current X value in `buffs`.
Durations for Bleeding, Chilled, Freezing, Exposed, and Sundered depend on the
ability or creature
that applied them. Reapplying a timed effect never shortens its remaining
duration.

Burning and cold effects can exist together. Fire does not automatically
remove Chilled or Freezing, and cold does not automatically extinguish
Burning.

## Standard Control Effects

These older effects use Darkwind's standard action-block system. Their exact
duration and which commands they prevent depend on their source.

| Effect | What It Does |
| --- | --- |
| Blindness | Reduces melee accuracy and dodging. Many sight-dependent commands also fail. |
| Distracted | Reduces melee accuracy, dodging, absorption, and swing rate. Many spells and abilities require concentration. |
| Paralyzed | Prevents attacks and treats both arms and legs as disabled. |
| Entangled Arms | Prevents normal attacks. |
| Entangled Legs | Reduces melee accuracy and dodging. |
| Silenced | Prevents commands that require speech. |
| Impaired Movement | Prevents normal room exits. |
| Deafened | Prevents or limits commands that require hearing. |

Poison, disease, curses, guild effects, and named monster abilities may also
appear under Debuffs. Their behavior is defined by the effect that applied
them rather than by one universal poison or disease rule.

## Lifecycle And Recovery

Status durations use Darkwind's two-second heartbeat. They continue while a
linkdead body remains in the world, pause when the player object is absent,
and resume when that saved character is restored. Death clears these status
effects.

The `Chilled` and `Freezing` words shown by Hyperborea's warmth meter describe
environmental temperature. That meter is separate from the combat debuffs
documented here.

To recover from a hostile status:

- Use a cure, guild ability, consumable, or service that names the effect
- Leave combat when movement is available
- Check `buffs` to confirm the effect ended
- Remember that `clearbuff` removes friendly buffs, not debuffs

See [Buffs And Curses](buffs-and-curses.md) for the related commands.
