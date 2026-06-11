# Thief

Work in progress: Thief is being built toward this design, and current game
behavior differs in places.

Thieves turn information, access, timing, and opportunity into power. They case
rooms, scout exits, steal coins, lift objects, plant evidence, trap paths,
follow marks, hide in plain sight, poison blades, and strike when the target is
already compromised.

## In Play

Thieves care about the thing everybody else forgot to guard: the purse, the
door, the evidence, the exit, the witness, the back.

- Case the target or room
- Scout exits and escape routes
- Steal, palm, pick, plant, trap, or shadow
- Let Heat rise only as far as the job is worth
- Enter combat with poison, marks, position, and dirty tricks
- Leave with the money, item, secret, or body

### Jobs

Jobs are the Thief's real work.

| Job | Use |
| --- | --- |
| Roll Corpse | Finds hidden coins and valuables on a corpse |
| Money | Checks a target's carried coin |
| Case | Studies inventory, value, and physical threat |
| Scout | Looks into nearby rooms before entering |
| Silent | Leaves without showing the direction |
| Shadow | Follows a target quietly |
| Hide | Vanishes into shadow for a limited time |
| Palm | Picks up items without open notice |
| Pick | Steals an object from a target |
| Pilfer | Attempts broader item theft from a target |
| Peek | Looks into a target's container |
| Plant | Places an item on a target |
| Conceal | Hides an item from view |
| Break In | Forces access through a chosen direction |
| Trap Room | Prepares a room trap |
| Tripwire | Sets an alarm watched by guild apprentices |
| Contacts | Pays local informants for player information |
| Fast Talk | Talks a room out of combat |

### Heat

Heat is the cost of being sloppy. Witnessed theft, repeated targets, botched
jobs, public violence, and obvious escapes raise Heat. Clean escapes, time,
contacts, and quieter work lower it.

### Marks

Marks are prepared advantages from casing, shadowing, scouting, planting,
trapping, or studying habits.

| Mark | Built By | Payoff |
| --- | --- | --- |
| Target mark | Case, shadow, money, contacts | Better theft, strike timing, and escape choices |
| Room mark | Scout, trap, tripwire, silent movement | Safer entry, better ambushes, cleaner retreats |
| Container mark | Peek, pick, conceal | Better object theft |
| Evidence mark | Plant, palm, conceal | Frame jobs and misdirection |
| Blood mark | Poison, shadowstep, quick strike | Stronger bleeds and combat setups |

### Dirty Fighting

Thief combat is unfair by design. The guild uses openings, bleeds, stuns,
movement denial, poison, and prepared strikes.

| Trick | Use |
| --- | --- |
| Quick Strike | Early slash that opens or worsens a wound |
| Shadowstep | Fast shadowed strike with a deeper bleed |
| Trick | Dirty fighting tactic during battle |
| Critical Hit | Focuses on a stronger critical wound |
| Clever Strike | Uses dexterity, wit, and strength for a better cut |
| Sucker Punch | Punishes a weakness in the target's defense |
| Circle | Moves behind the target for a back cut |
| Disembowel | Heavy upfront cut followed by a large bleed |
| Tendon Strike | Attempts to stop movement through the hamstring |
| Back Stab | High-end strike from hiding against an exposed back |
| Poison Edge | Applies a poison packet to a weapon |

## Advancement

Thieves advance through jobs, clean escapes, marks, contacts, traps, risky
theft, and prepared violence.

| Rank | Opens |
| --- | --- |
| Lookout | Roll corpse, quick strike, cant, guild communication |
| Pickpocket | Steal coins, money, basic poison access |
| Scout | Scout, shadowstep, tripwire |
| Quickfinger | Palm, squint, silent movement |
| Cutpurse | Contacts, trick, case |
| Burglar | Critical hit, conceal, unhide, plant |
| Shadow | Pick, trap room, shadow, hide |
| Knifeworker | Peek, circle, fast talk |
| Fixer | Break in, disembowel, tendon strike |
| Master Thief | Back stab, tactics, succor, assassin strike |

## Job Commands

| Command | Use |
| --- | --- |
| `thelp` | Opens Thief help |
| `tpowers`, `tskills`, `treport` | Shows Thief powers |
| `thieves` | Lists active Thieves |
| `ttell`, `thist`, `cant <message>` | Uses Thief communication |
| `tnews`, `gtitle` | Reads news or sets a guild title |
| `roll corpse`, `money <target>`, `case <target>` | Starts basic jobs |
| `contacts` | Pays informants for information |
| `scout <direction>`, `silent <direction>` | Reads or leaves rooms quietly |
| `shadow <target>`, `hide <on|off>` | Follows or hides |
| `palm <item>`, `pick <item> from <target>` | Lifts items |
| `tsteal <target>`, `steal <target>` | Steals coins |
| `peek <container> on <target>` | Looks inside a container |
| `plant <item> on <target>` | Plants an item |
| `conceal <item>`, `unhide <item>` | Hides or reveals an item |
| `tripwire`, `trap`, `breakin <direction>` | Prepares access or alarms |
| `fasttalk` | Attempts to stop combat |
| `poison <type>` | Applies poison to a weapon |
| `qstrike`, `shadowstep`, `trick` | Starts dirty combat |
| `crit`, `cstrike`, `spunch` | Uses mid-fight precision attacks |
| `circle`, `disem`, `tstrike`, `stab` | Uses high-risk finishing attacks |
