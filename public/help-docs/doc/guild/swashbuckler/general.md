Swashbuckler Guild Information

Welcome to the Swashbucklers' guild.

There are several commands you should be aware of:

  Use *'sb <text>'* or *'esb <text>'* to speak on the guild line.

  Use *'swho'*, *'sbwho'*, or *'swashies'* commands to view the Swashbucklers that are online.

Many of a Swashbuckler's attack powers work only with 'blades'.  
This includes any knife or dagger, as well as all one-handed
swords, sabres, rapiers, etc.  If you find a weapon which you
think fits this category, but which does not allow use of powers,
please inform your guild coder, or use the bug command to report it.

Swashbuckler Rank is earned through guild XP (GXP), including qualifying
combat kills, sustained active combat, and triggered techniques. Rank is
open-ended. It produces an ability Tier using
*1 + floor(2 * sqrt(rank - 1))*; Tier replaces the old manual guild-level
advancement and unlocks abilities automatically.

Flow is the baseline combat rhythm meter. It rises by 5 during each eligible
combat heartbeat and caps at 100. When combat ends, Flow holds for six seconds
before falling by 10 per heartbeat. Flow discounts triggered technique SP
costs by as much as 50%. Full Flow gives each eligible combat round a 5%
chance to steal one guaranteed weapon hit. At Tier 15 and full Flow, the rare
passive Dance of Death can also make the next paid technique free.

Flair is a spendable combat momentum resource. It starts at zero, builds during
combat, and decays outside combat. Critical hits and wielding a weapon named
with *'nameweapon'* can generate additional Flair. Use *'sbhelp flair'* for
details.

Being unable to flee does not prevent in-room combat maneuvers such as Slip,
Press, Wound, Sap, Thrust, or Flank. Entanglement and paralysis still prevent
the physical maneuvers they obstruct. Skulk actually leaves the room and
therefore remains unavailable while movement or fleeing is blocked.

A one-line summary of the various blade styles is available under
'sbhelp techniques'.  Information about recent changes to the guild is
available on the guild board and under 'sbhelp new'.

'sbskills' lists abilities, Tier and SP requirements, Rank, GXP, Flow, Flair,
Finesse, and active-technique information.

Good and evil have no effect on Swashbucklers' skill costs.
