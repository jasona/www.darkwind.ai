# Fighter

Work in progress: Fighter is being built toward this design, and current game
behavior differs in places.

Fighters are trained combatants. They own weapons, armor, shields, positioning,
endurance, discipline, and the practical art of keeping a battle from falling
apart.

## In Play

Fighter owns the hard middle: stand, strike, guard, recover, and keep other
people alive.

- Consider the enemy
- Choose the weapon and shield that fit the fight
- Turn on the defensive techniques worth paying for
- Use bash, disarm, charge, cleave, or defend at the right moment
- Surge when endurance runs low
- Call an armsman or guild help when the line starts to break

### Endurance

Endurance is the Fighter's tactical reserve. Defensive toggles and hard
maneuvers spend it when they matter. Combat bars can show endurance and active
techniques.

### Defensive Techniques

| Technique | Use |
| --- | --- |
| Feint | Reduces the impact of dangerous hits |
| Guts | Absorbs pain through endurance |
| Shieldblock | Uses a large or huge shield to block hits |
| Counter | Turns a would-be hit back on the attacker |
| Defend | Pulls attacks off an ally |
| Surge | Restores endurance faster for a short time |

### Weapons And Armor

Fighter uses almost every weapon family. The guild rewards matching weapon to
maneuver.

| Family | Use |
| --- | --- |
| Blunt | Bash, stuns, shield work, hard targets |
| Edged | Hack, cleave, sustained melee |
| Piercing | Thrust, weak-point attacks, precise openings |
| Polearm | Reach, heavy swings, battlefield control |
| Two-handed | Large damage swings and killing blows |
| Shield | Defend, shieldblock, rush, ally protection |
| Unarmed | Punch and desperate fallback work |

Weapon inspection reads balance, quality, and use. Armor inspection reads
coverage, protection, warmth, and fit. Balance improves a suitable weapon.

### Maneuvers

| Maneuver | Use |
| --- | --- |
| Punch | Basic direct strike |
| Kick | Wild strike with knockdown force |
| Shield Rush | Rushes a target with shield force |
| Bash | Heavy head strike with a chance to reduce combat efficiency |
| Hack | Edged attack without mercy |
| Thrust | Piercing attack at a weak spot |
| Disarm | Knocks one or more weapons loose |
| Charge | Attempts to drive a target into another room |
| Cleave | Heavy slashing blow with a large weapon |
| Frenzy | Focused burst of repeated attacks |
| Frenzy! | Dangerous room-wide attack burst |
| Behead | Takes a trophy from a corpse |

### Armsmen

| Feature | Use |
| --- | --- |
| Armsman | Recruited fighting companion who answers the Fighter's call |
| Assist call | Broadcasts a call for help during a difficult fight |
| Lost call | Broadcasts location when the Fighter is lost |
| Motto | Public declaration visible to other Fighters |
| Career stats | Tracks damage, kills, and session performance |
| Tapestry | Guild memory of active Fighters and past service |
| Trophy heads | Visible proof of kills and martial bravado |

## Advancement

Fighters advance through drills, endurance practice, weapon use, ally defense,
inspection, armsman service, and hard fights.

| Rank | Opens |
| --- | --- |
| Recruit | Feint, shieldblock, consider, punch, guild stats |
| Shieldbearer | Defend, make shield, make torch, shield rush |
| Tested Blade | Guts, fighter grunts, first endurance discipline |
| Armsman | Balance weapon, kick, recruit armsman |
| Veteran | Weapon inspection, armsman call |
| Sergeant | Thrust, disarm, armor inspection |
| Banner Guard | Hack, behead trophies, better field presence |
| Captain | Charge, counter, formation work |
| Weaponmaster | Frenzy, rage weapon, surge, cleave |
| Battlelord | Veteran armsmen, advanced drills, command presence |

## Fighter Commands

| Command | Use |
| --- | --- |
| `fhelp` | Opens Fighter help |
| `fs`, `fskills` | Shows Fighter skills |
| `fstats`, `ftimers` | Shows stats or recovery timers |
| `fwho` | Lists active Fighters |
| `fchat`, `efchat`, `fhist` | Uses the Fighter channel |
| `declare <text>` | Sets a Fighter motto |
| `fassist`, `flost` | Calls for help or location aid |
| `fcall` | Calls the Fighter's armsman |
| `ftoggle <skill> <on|off>` | Toggles counter, feint, guts, or shieldblock |
| `fconsider <target>` | Compares the Fighter against a target |
| `winspect <weapon>`, `ainspect <armor>` | Studies equipment |
| `fbalance <weapon>` | Balances a suitable weapon |
| `make shield`, `make torch` | Creates field gear |
| `fdefend <ally>` | Defends an ally from attackers |
| `disarm <target>`, `fcharge <target>` | Controls weapons or position |
| `bash`, `fhack`, `thrust`, `cleave` | Uses weapon attacks |
| `fpunch`, `fkick`, `frush` | Uses body and shield attacks |
| `frenzy`, `frenzy!`, `fsurge` | Uses burst aggression or recovery |
| `fbehead <corpse>` | Takes a trophy head |
