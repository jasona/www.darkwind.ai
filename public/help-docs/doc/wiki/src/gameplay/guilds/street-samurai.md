# Street Samurai

Street Samurai are cybernetic combat specialists whose Cortex OS links
signature implants into a single combat platform. Their play rhythm is built
around earning guild experience through Darkwind's shared battle progression,
creating and spending Edge, controlling Heat, and keeping their hardware in
fighting condition.

## Joining

The public Street Samurai contract office is near Moongate Plaza. Joining
automatically installs the required prototype-grade Cortex OS. A restricted exit
from the office leads members and wizards to Rin Kade's guild clinic.
Street Samurai and Ninja are compatible multi-guild choices in either join
order, subject to the normal level and membership limits.

New members do not need to run `samrepair`. That command exists only to recover
an older or corrupted installation at a staffed clinic.

Run `samhelp start` for a first-deployment checklist and first combat loop.
`dashboard` is the main diagnostic surface, `samskills` shows routine unlocks
and required hardware readiness, and `samhelp <routine>` explains a command's
intended use and interactions.

## Contracts

Primary means Street Samurai is the character's main guild. Secondary means
another guild is primary while Street Samurai remains active. Both can use the
guild normally. Inactive means equipped gear currently conflicts with guild
restrictions, temporarily pausing firmware, battle GXP, maintenance automation,
resources, and the guild strain contribution. Leaving is separate and removes
membership while permanently destroying installed Street Samurai signature
implants. Unrelated cyberware remains installed.

## Progression

Street Samurai have 16 guild levels and 200 Cortex Ranks. They earn GXP from
combat and boss victories recognized by shared battle progression; skill use
does not award GXP. Cortex Rank advances Guild Level through CR16, after which
Guild Level remains fixed while Cortex Rank continues. `samxp` and `gscore`
show both tracks, while `samskills` lists every firmware unlock.

Cortex throughput improves at post-GL16 milestones with diminishing gains all
the way through CR200. It scales routine output without replacing hardware
grade or maintenance effectiveness. Armor Weave, Predictive Sight, Overclock,
Zero Signal, and the Ronin-sama Kernel all benefit from that continued growth.
`dashboard` shows the current value.

At CR200, the Cortex grants final bladeware authorization. A member with an
installed Monofilament Spur can use `cyberblade` to deploy the Ronin Edge for a
limited time. It occupies the primary weapon channel, scales with Cortex
throughput plus hardware grade and condition, and periodically executes Cortex
Sever. Threat Scan and a badly wounded target improve that execution route;
the first damaging Sever against each opponent generates Edge. Use
`cyberblade retract` to collapse it early.

Signature hardware unlocks with its paired firmware. Hardware grades unlock at
these guild levels:

| Grade | Guild level |
| --- | ---: |
| Prototype | 1 |
| Street | 7 |
| Military | 10 |
| Ghost | 13 |

Higher grades improve paired firmware output, resist physical wear more
effectively, and consume more strain. Grade does not replace maintenance.

## Edge And Heat

Edge represents positioning and openings. Snap Cut is the dependable early
source, while later routines create, spend, or refund it in different ways.
Second Spur can raise the current maximum. The combat monitor, `samstatus`, and
`dashboard` report the current capacity.

Most active routines automatically route one available Edge into a stronger
version of their normal damage, duration, shielding, healing, or control effect.
Their base effects remain available at zero Edge. Specialized routines such as
Monowire, Predictive Sight, Ghoststep, and Chrome Tempest have more deliberate
Edge interactions.

Smart Smoke is personal, room-local cover that can be deployed before combat.
It strongly disrupts ranged attacks aimed at the Street Samurai and offers
only modest protection in melee. Edge adds a real cover point and extends the
deployment.

Jammer Field is group-oriented battlefield control. While the Street Samurai
remains in the room, it tracks hostiles fighting the operator or nearby party
members, suppresses their outgoing damage regardless of which ally they
attack, and periodically desynchronizes one attack swing. Edge strengthens the
suppression, accelerates its pulse, and extends the field. Jammer Node provides
reserved SP bandwidth instead of duplicating Signal Shroud's passive dodge.

Ghoststep is an in-fight repositioning routine. It preserves the primary
engagement, sheds secondary combat pressure and hunts, and briefly arms the
Reflex Lattice against the next incoming attack sequence. Its optional
follow-up can route up to two Edge into the primary target, with the full route
producing an armour-piercing cut.

Zero Signal is the dedicated escape and concealment routine. It ends current
combat and hunts, rejects tracking and scrying locks for a short period, and
uses Ghost Circuit grade to determine how many attempts to reacquire combat can
be masked. Continued Cortex progression expands that masking capacity. Routing
Edge adds another masked attempt and extends the window.

Heat represents thermal load. The combat monitor identifies clean, redline,
overheat, and lockout states. Redline can push some offensive firmware harder,
but reaching the current thermal ceiling causes lockout until the Cortex cools.
Cold Signal improves thermal control.

### Cold Signal

Cold Signal is passive firmware provided by the torso-mounted Thermal Exchange
Manifold, formerly called the Coolant System. It automatically vents part of
larger firmware Heat bursts and gives the Cortex more room to operate in
redline before entering overheat. It does not eliminate Heat or increase
maximum Heat. Hardware grade and maintenance condition affect its performance.
Run `samhelp cold signal` for the in-game guide.

## Offensive Firmware

Street Samurai gain attacks throughout the contract rather than receiving all
of their direct offense at intake. Photon Lance unlocks at GL4 as precise
single-target energy fire from the Photon Targeting Suite. An active Threat
Scan improves its calibration without consuming the lock. A damaging beam
generates one Edge.

Micro-Missile Swarm unlocks at GL8 through the left-shoulder Dorsal Tempest
Driver. Its compact salvo always strikes the selected foe first and can spread
only to other opponents already attacking the Street Samurai. A salvo that
damages at least one target generates one Edge. Thermal Purge unlocks at GL11
through the Thermal Exchange Manifold, projecting a high-Heat flame cone and
leaving the selected foe burning briefly. Its emergency
`thermalpurge vent` mode immediately clears all Heat, even during lockout, at
the cost of severe integrity wear to the Cortex OS and manifold.

The three routines require no ammunition and do not require Edge. Available
Edge can amplify their output. Their SP and Heat costs, hardware readiness, and
exact operational guidance are available through `samskills` and
`samhelp <routine>`.

## Hardware And Prices

Every routine requires one or more Street Samurai signature implants. Rin Kade
and Othra Veyr list each implant's level, family, internal location, strain,
grade, and exact cost. No single signature implant costs more than 100,000
coins at Rin's guild clinic. Active members receive covered installation,
extraction, and signature repairs from Rin; hardware purchases still cost
coins.

Installed implants consume strain capacity and can conflict by internal
location. `implants` lists all internal equipment, `cyberware` shows the current
internal layout and strain capacity, and `dashboard` reports Street Samurai
implant load and condition.

The Street Samurai contract adds natural strain capacity as Guild Level
advances. A Ronin-sama at Guild Level 16 and remort one or higher retains at
least the 87 capacity required for a complete Ghost-grade signature loadout.
Character level, cyber affinity, and remort progress can raise that capacity
further toward the universal 240 maximum at remort 50. Use `cyberware` for the
current total before buying or installing another implant.

## Maintenance

Maintenance is exclusive to Street Samurai signature hardware. Taking damage
can damage implant integrity, and firmware use adds fragmentation. Warnings
begin before output is affected. Below 50% integrity or above 50%
fragmentation, paired firmware is weakened but never rendered useless.

Use `defrag`, `patch`, `purge`, and `reboot` for the problem shown by
`dashboard`. `logs` shows recent maintenance events. Rin Kade can fully repair
signature hardware for active members, while a Repair Coprocessor provides
limited automatic stabilization.

Othra uses public installation and extraction rates based on implant strain.
His dialogue always shows the exact fee and asks for confirmation before a
procedure.

## Commands

| Command | Purpose |
| --- | --- |
| `dashboard` | Firmware version, Cortex OS, implants, integrity, state, and alerts |
| `samstatus` | Compact resource and hardware status |
| `samxp` | Guild Level, Cortex Rank, and next GXP requirement |
| `samskills` | Firmware routines and current readiness |
| `samspam [verbose|brief|off]` | Implant activation message detail |
| `samsignature [profile]` | Select room-visible arrival and departure firmware |
| `samhelp <topic>` | Guild system or routine documentation and guidance |
| `implants` | Installed cyberware and internal equipment |
| `samwho` | Online Street Samurai and current guild system status |
| `samchat <message>` | Members-only Street Samurai Cortex network chat |
| `samhist [lines]` | Recent Cortex network transmissions |
| `photonlance <foe>` | Precise scan-calibrated energy attack |
| `microswarm <foe>` | Dorsal hostile-only missile swarm |
| `thermalpurge <foe>` | High-Heat flame cone and brief burn |
| `thermalpurge vent` | Emergency full Heat dump with severe hardware wear |
| `cyberblade [retract]` | Deploy or retract the CR200 Ronin Edge |
| `defrag <process>` | Reduce fragmentation |
| `patch <process>` | Apply a queued patch |
| `purge <process>` | Remove an ICE intrusion |
| `reboot <process>` | Clear a runtime fault |
| `logs [process]` | Review maintenance history |

The Cortex network is members-only. Normal messages, channel emotes, media
shares, and history are not broadcast to nonmembers or external bridges. Use
`color street_samurai` to customize how Cortex network traffic is displayed.

## Leaving

Leaving removes the contract, guild resources, strain bonus, active firmware,
automation, and every installed Street Samurai signature implant. Signature
hardware is permanently destroyed rather than extracted, refunded, or salvaged;
unrelated cyberware and uninstalled carried hardware are unaffected. Rejoining
uses normal enrollment and installs a fresh intake Cortex OS.
