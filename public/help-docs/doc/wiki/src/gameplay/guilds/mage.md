# Mage

![The Magi](images/mage.jpg)

Work in progress: Mage is being built toward this design, and current game
behavior differs in places.

Mages study the Dark Wind: the hidden force that binds matter, memory, light,
distance, heat, death, and spellwork. A Mage carries that study in the
spellbook, then proves it by casting under fire, burning ash into ink, and
teaching old formulae to behave.

## In Play

A Mage works from page to field and back again.

- Cast spells in real situations
- Improve Arcane through research and field use
- Master individual spells through repeated useful casting
- Set a mastered combat spell to barrage
- Collect ash from spell kills and corpse burning
- Turn ash into ink for spellbook research and rune work

## Arcane

Arcane measures magical understanding. It opens thresholds and stays with the
character.

Arcane rises through:

- Level-appropriate Mage spellcasting
- Detecting, analyzing, finding, or solving magical problems
- Recovering fragments, grimoires, and research notes
- Closing magical anomalies
- Identifying strange effects for other players
- Teaching or assisting apprentices
- Mage quests and guild research tasks
- Spell kills that create ash events

Practice counts when the magic matters.

| Threshold | Opens |
| --- | --- |
| First Script | Detect, Analyze, Illuminate, Mana Shard, Missile |
| Stable Hand | Mage Mark, basic spellbook research, common ink use |
| Ember Lens | Fireball, Icestorm, Insane, first rune primer |
| Lesser Pattern | Armor, Mage Eye, early barrage setup |
| Folded Page | Bolt, Mage Unlock, remembered locations |
| Mirror Step | Levitate, Blink, Invisibility, first rare rune tasks |
| Crucible Script | Phase, Gate, Inferno, ink refinement |
| Deep Formula | Powerup, Wrath, two-rune research |
| Black Equation | Familiar rites, advanced ash effects, forbidden formulae |
| Archmagi | Touch, rare rune mastery, major discoveries |

## Spell Mastery And Barrage

Every spell tracks its own mastery.

| Mastery | Unlocks | Barrage |
| --- | --- | --- |
| Copied | The spell is written in the spellbook | None |
| Practiced | Lower fumble chance, small SP discount, first rune slot | None |
| Fluent | Stronger rune effect, better casting speed | Every 5 rounds, reduced SP |
| Inscribed | Second rune slot, larger SP discount | Every 4 rounds, very low SP |
| Instinctive | Best cost reduction, special ash interaction | Every 3 rounds, 0 SP for basic form |

Manual casts are stronger and flexible. Barrage casts are efficient and
automatic.

`barrage` prepares one mastered combat spell to fire automatically every few
combat rounds.

Barrage rules:

- The spell has Fluent mastery or better
- The spell is combat-safe
- Barrage uses a lighter version of the spell
- Manual casts still cost SP and remain stronger
- Silence, concentration breaks, antimagic, and some disables stop barrage

Common barrage forms include Mana Shard, Missile, emberburst Fireball,
freezing-shard Icestorm, and lesser Bolt.

## Runes

Runes are named modifications discovered by earlier Magi. A rune changes how a
spell behaves.

| Rune | Tradition | Common effect |
| --- | --- | --- |
| Ashkenazy | Exaltation | More raw power |
| Falx | Alacrity | Faster casting and better barrage cadence |
| Marsellus | Augmentation | Secondary force and battlemage reinforcement |
| Mezari | Amity | Ally magic and sympathetic spell behavior |
| Saloman | Bastion | Shields, protection, spellwarding |
| Talek | Boreal | Cold, precision, chill, slowed targets |
| Arcanarton | Entropy | Decay, blight, instability, strange costs |
| Bodach | Demise | Fear, death, life siphon, grave ash |
| Ravidel | Igneous | Fire, burn, eruption, heat signatures |

Runes open through Arcane, research, quests, discoveries, and rare inks.
Practiced spells hold one rune. Inscribed spells hold two.

### Rune Grammar

Runes are the Mage's customization. Two Mages can know the same spell and make
it behave differently by changing the runes written beside it.

| Rune | What it adds |
| --- | --- |
| Ashkenazy | Bigger result, wider reach, stronger raw casting |
| Falx | Faster cast, cleaner barrage, shorter recovery |
| Marsellus | Secondary force, echo hit, reinforced impact |
| Mezari | Ally-safe shaping, shared benefit, sympathetic target link |
| Saloman | Wards, resistance, safer failure, held ground |
| Talek | Cold, precision, slowed movement, clean lines |
| Arcanarton | Decay, blight, instability, strange costs |
| Bodach | Fear, death, life siphon, grave ash, spirits |
| Ravidel | Fire, burn, eruption, heat signatures |

### Rune Binding

Runes are copied into the spellbook before they touch a spell. The Mage studies
the rune, prepares the ink, binds it to a known spell, and tests the result in
real casting.

| Binding Step | Work |
| --- | --- |
| Copy | Adds the rune pattern to the book |
| Prime | Prepares ink, ash, and spell notes |
| Bind | Places the rune into a spell slot |
| Test | Casts the spell where the result matters |
| Refine | Improves cost, timing, side effect, or barrage behavior |

## Spells

### Analyze

Read the structure of an object, creature, spell, room effect, or strange piece
of magic. Analyze can reveal value, origin, curses, combat odds, and the
residue left by magical creation.

- Arcane Needed: 1
- Syntax: `analyze <object|target>`
- Rune augments
  - **Ashkenazy**: Reads deeper structure and hidden layers
  - **Falx**: Shortens repeat checks
  - **Marsellus**: Finds force traces, impacts, and old ruptures
  - **Mezari**: Reads ally-linked effects and sympathetic bonds
  - **Saloman**: Identifies wards, shields, and protected thresholds
  - **Talek**: Clarifies exact weaknesses
  - **Arcanarton**: Finds decay, instability, and failing enchantments
  - **Bodach**: Finds death traces, spirits, and grave residue
  - **Ravidel**: Finds heat, burn history, and ash signatures

### Detect

Force evil, secrets, and hidden room details to show themselves. Detect begins
as a way to read danger in nearby creatures, then grows into a sharper room
inspection spell.

- Arcane Needed: 1
- Syntax: `detect`
- Rune augments
  - **Ashkenazy**: Widens the sweep
  - **Falx**: Pulses more often for a short time
  - **Marsellus**: Detects force and movement traces
  - **Mezari**: Finds allied magic and party-safe links
  - **Saloman**: Finds wards and sanctuaries
  - **Talek**: Sharpens direction
  - **Arcanarton**: Finds unstable or corrupted magic
  - **Bodach**: Finds spirits, corpses, and grave magic
  - **Ravidel**: Finds fire, heat, and fresh ash

### Illuminate

Call controlled mage-light into the room. The light can expose hidden detail,
steady frightened allies, and make magical writing easier to read.

- Arcane Needed: 1
- Syntax: `illuminate`
- Rune augments
  - **Ashkenazy**: Brightens the light significantly
  - **Falx**: Quickens casting
  - **Marsellus**: Creates hard-edged light that reveals force barriers
  - **Mezari**: Shares a softer light with allies
  - **Saloman**: Creates steady ward-light
  - **Talek**: Creates cold, clear light that improves inspection
  - **Arcanarton**: Reveals rot and hidden decay
  - **Bodach**: Reveals spirits and grave marks
  - **Ravidel**: Burns away shadow and leaves a warm glow

### Mana Shard

Summon a fragment of pure, raw magical energy and hurl it toward a target. As
one of the most basic principles of magic, Mana Shard is elegant, direct, and
reliable. As the Mage grows, the shard grows brighter, faster, and sharper.

- Arcane Needed: 1
- Syntax: `mshard <target>`
- Barrage: yes
- Rune augments
  - **Ashkenazy**: Increases damage significantly
  - **Falx**: Improves barrage cadence and chance to overcome resistance
  - **Marsellus**: Adds a second shard and a chance to sunder
  - **Mezari**: Restores SP if the spell is resisted
  - **Saloman**: Shields the Mage for part of the damage dealt
  - **Talek**: Adds a high chance to chill
  - **Arcanarton**: Adds a chance to enfeeble
  - **Bodach**: Increases damage with a chance to instantly kill weaker enemies
  - **Ravidel**: Adds a high chance to burn

### Missile

Conjure several bolts of pure magical energy and hurl them with unerring
accuracy. Missile sits at the front of the spellbook for a reason: simple,
quick, and still useful after flashier pages open.

- Arcane Needed: 1
- Syntax: `missile <target>` or `magic <target>`
- Barrage: yes
- Rune augments
  - **Ashkenazy**: Increases damage
  - **Falx**: Increases speed and lowers recovery
  - **Marsellus**: Adds impact and a chance to stagger
  - **Mezari**: Curves around allies
  - **Saloman**: Weakens the target's next magical retaliation
  - **Talek**: Improves accuracy and critical hit chance
  - **Arcanarton**: Cracks defenses
  - **Bodach**: Rattles courage and can frighten weaker targets
  - **Ravidel**: Leaves sparks and a small burn chance

### Mage Mark

Place a personal magical mark on a target, place, or trace. Mage Mark gives the
spellbook something to remember and gives later spells a cleaner way to find
their work.

- Arcane Needed: 2
- Syntax: `mmark <target>`
- Rune augments
  - **Ashkenazy**: Makes the mark stronger and harder to erase
  - **Falx**: Marks faster
  - **Marsellus**: Marks force trails
  - **Mezari**: Shares the mark with allies
  - **Saloman**: Protects the mark
  - **Talek**: Makes the mark precise
  - **Arcanarton**: Corrupts the mark and weakens the target slightly
  - **Bodach**: Marks blood, spirit, or grave traces
  - **Ravidel**: Marks heat and ash

### Blaze

Blaze is a spell mostly for show. The Mage chants, sketches symbols in the air,
fills the room with smoke and sulfur, then launches through an exit like a
shooting star. The landing is all thunder, smoke, flashing light, and the Mage
straightening their clothes like nothing odd happened.

- Arcane Needed: 1
- Syntax: `blaze <direction>`
- Rune augments
  - **Ashkenazy**: Makes the launch brighter, louder, and harder to interrupt
  - **Falx**: Shortens the chant and launch delay significantly
  - **Marsellus**: Adds a delayed shockwave at departure or landing
  - **Mezari**: Carries party members with the Mage
  - **Saloman**: Creates a brief elemental shield on landing
  - **Talek**: Replaces flame with cold sparks and white vapor
  - **Arcanarton**: Leaves unstable scorch-script where the Mage lands
  - **Bodach**: Adds a chance to fear weaker enemies
  - **Ravidel**: Turns the passage into a hotter, redder streak

### Find

Find the room around a living target anywhere in the world. Strong targets can
feel the scrying brush against them, so careless searching can announce the
Mage's interest.

- Arcane Needed: 2
- Syntax: `find <target>`
- Rune augments
  - **Ashkenazy**: Extends range
  - **Falx**: Refreshes faster
  - **Marsellus**: Follows force scars and violent motion
  - **Mezari**: Follows known allies cleanly
  - **Saloman**: Follows protected marks
  - **Talek**: Gives cleaner direction
  - **Arcanarton**: Follows decay and unstable traces
  - **Bodach**: Follows blood, spirits, or grave traces
  - **Ravidel**: Follows heat marks

### Fireball

Find the page marked FIREBALL, meditate on consuming heat, speak the old words,
and loose a bright sphere from the fingers. Fireball is simple enough to learn
early and violent enough to stay useful for a long time.

- Arcane Needed: 3
- Syntax: `fireball <target>`
- Barrage: yes
- Rune augments
  - **Ashkenazy**: Increases blast damage and radius
  - **Falx**: Improves barrage form and recovery
  - **Marsellus**: Adds a shockwave
  - **Mezari**: Shapes the blast around allies
  - **Saloman**: Reduces backdraft and self-harm
  - **Talek**: Turns the spell into frostfire
  - **Arcanarton**: Leaves unstable ash and a weakening residue
  - **Bodach**: Leaves grave ash and a fear pulse
  - **Ravidel**: Increases burn chance and burn duration

### Icestorm

Hurl a frozen barrage of ice shards through the area. Icestorm punishes groups,
breaks pursuit, and turns the room into a brief lesson in sharp edges.

- Arcane Needed: 4
- Syntax: `icestorm`
- Barrage: yes
- Rune augments
  - **Ashkenazy**: Increases storm size
  - **Falx**: Improves barrage form
  - **Marsellus**: Adds hard impact to the ice
  - **Mezari**: Opens safe lanes for allies
  - **Saloman**: Protects the caster from cold backlash
  - **Talek**: Deepens chill and slow effects
  - **Arcanarton**: Makes targets brittle and rotted
  - **Bodach**: Chills spirits and frightened targets harder
  - **Ravidel**: Creates a steam burst on impact

### Frost Lens

Shape cold into a focusing lens. Frost Lens turns sight, spell aim, and distant
force into something sharper and crueler.

- Arcane Needed: 5
- Syntax: `frost lens <target>`
- Rune augments
  - **Ashkenazy**: Magnifies the lens
  - **Falx**: Quickens focus
  - **Marsellus**: Turns the lens into force focus
  - **Mezari**: Lets allies cast through it
  - **Saloman**: Stabilizes the lens
  - **Talek**: Sharpens the lens significantly
  - **Arcanarton**: Cracks the image and exposes instability
  - **Bodach**: Reveals ghosts through the lens
  - **Ravidel**: Turns the lens into heat mirage

### Lightning Net

Throw a net of living lightning across the target's movement. Lightning Net is
for stopping runners, breaking rhythm, and making the room feel smaller.

- Arcane Needed: 6
- Syntax: `lightning net <target>`
- Rune augments
  - **Ashkenazy**: Widens the net
  - **Falx**: Snaps faster
  - **Marsellus**: Adds a force snare
  - **Mezari**: Leaves ally gaps
  - **Saloman**: Grounds backlash
  - **Talek**: Freezes joints
  - **Arcanarton**: Makes the net unstable
  - **Bodach**: Terrifies trapped targets
  - **Ravidel**: Arcs fire along the net

### Stormglass

Read turbulence in the Dark Wind through a glassy storm-pattern. Stormglass is
forecast, warning, and omen without prayer: less cloudwatching, more watching
the spellbook sweat.

- Arcane Needed: 6
- Syntax: `stormglass`
- Rune augments
  - **Ashkenazy**: Shows wider turbulence
  - **Falx**: Updates faster
  - **Marsellus**: Reads force fronts
  - **Mezari**: Shares readings with allies
  - **Saloman**: Predicts dangerous magic
  - **Talek**: Clarifies cold lines and force snaps
  - **Arcanarton**: Shows broken spellfronts
  - **Bodach**: Shows grave-fronts
  - **Ravidel**: Shows heat fronts

### Insane

Strike the target's pattern until thought begins to fold. Insane is ugly magic:
confusion, panic, obsession, and a brief failure to trust what the senses say.

- Arcane Needed: 4
- Syntax: `insane <target>`
- Rune augments
  - **Ashkenazy**: Strengthens confusion
  - **Falx**: Takes hold faster
  - **Marsellus**: Adds a force migraine
  - **Mezari**: Softens the effect around allies
  - **Saloman**: Reduces rebound on the caster
  - **Talek**: Creates a precise obsession or repeated mistake
  - **Arcanarton**: Breaks judgment and worsens failure chance
  - **Bodach**: Adds dread
  - **Ravidel**: Adds fever and heat shimmer

### Teleport

Fold distance around a remembered place. Teleport rewards preparation: a Mage
who keeps careful locations in the spellbook travels farther and lands cleaner.

- Arcane Needed: 5
- Syntax: `tport <remember|list|forget|#>`
- Rune augments
  - **Ashkenazy**: Extends range
  - **Falx**: Lowers delay
  - **Marsellus**: Resists shove-off and force disruption
  - **Mezari**: Can pull a linked ally
  - **Saloman**: Makes arrival safer
  - **Talek**: Improves exact landing
  - **Arcanarton**: Reaches broken or unstable places
  - **Bodach**: Follows grave marks
  - **Ravidel**: Follows heat marks

### Barrage

Prepare quick spells in the book and keep them ready for combat. Barrage starts
with simple attack types such as fireball, lightning, and icestorm, then grows
into mastered spell patterns that repeat during battle without spending the full
cost of a manual cast every round.

- Arcane Needed: 5
- Syntax: `mbarrage <attack type|mastered spell|off>`
- Rune augments
  - **Ashkenazy**: Strengthens each repeat
  - **Falx**: Improves cadence significantly
  - **Marsellus**: Adds an echo hit
  - **Mezari**: Makes barrage safer around allies
  - **Saloman**: Stabilizes concentration
  - **Talek**: Improves target choice
  - **Arcanarton**: Adds unstable surges
  - **Bodach**: Adds fear or siphon notes
  - **Ravidel**: Adds burning repeats

### Mage Eye

Send sight down a nearby direction. Mage Eye is scouting through spellwork: a
thin thread of perception pressed through doors, roads, and danger.

- Arcane Needed: 6
- Syntax: `meye <direction>`
- Rune augments
  - **Ashkenazy**: Sees farther
  - **Falx**: Moves faster
  - **Marsellus**: Sees force barriers
  - **Mezari**: Shares sight with allies
  - **Saloman**: Resists disruption
  - **Talek**: Sharpens detail
  - **Arcanarton**: Sees decay
  - **Bodach**: Sees dead things and spirits
  - **Ravidel**: Sees heat

### Armor

Lace the fingers together, imagine tiny luminescent spiders spinning a
prismatic web, then fold that web around the body as a protective aura. Armor
adds temporary Armor Class and Magical Protection.

- Arcane Needed: 6
- Syntax: `armor`
- Rune augments
  - **Ashkenazy**: Increases armor value
  - **Falx**: Lowers cast time
  - **Marsellus**: Adds force padding
  - **Mezari**: Spreads a smaller ward to allies
  - **Saloman**: Hardens the ward significantly
  - **Talek**: Adds cold resistance
  - **Arcanarton**: Punishes attackers with decay
  - **Bodach**: Resists fear and death effects
  - **Ravidel**: Adds fire resistance

### Bolt

Point a finger and channel the current barrage into one direct arc. Bolt hits
harder than the repeating barrage because the Mage gathers the loose pattern and
drives it on purpose.

- Arcane Needed: 7
- Syntax: `bolt <target>`
- Requires: active `mbarrage`
- Rune augments
  - **Ashkenazy**: Increases damage
  - **Falx**: Lowers recovery after the focused bolt
  - **Marsellus**: Adds knockback and a chance to sunder
  - **Mezari**: Preserves the prepared barrage after the bolt
  - **Saloman**: Leaves a brief self-ward
  - **Talek**: Turns the arc cold and improves accuracy
  - **Arcanarton**: Destabilizes armor and resistance
  - **Bodach**: Adds a grave shock against weakened enemies
  - **Ravidel**: Turns the arc into a burning lance

### Levitate

Convince gravity to loosen its hand. Levitate surrounds the Mage with weak
sparks, builds them into a flickering vortex, and lifts the body from the
ground.

- Arcane Needed: 8
- Syntax: `levitate`
- Rune augments
  - **Ashkenazy**: Lifts heavier targets
  - **Falx**: Starts faster
  - **Marsellus**: Pushes or steadies the target
  - **Mezari**: Lifts allies cleanly
  - **Saloman**: Prevents falling backlash
  - **Talek**: Gives fine control
  - **Arcanarton**: Creates unstable floating with odd drift
  - **Bodach**: Gives ghostly drift
  - **Ravidel**: Adds heat lift

### Mage Unlock

Touch a locked threshold with spellwork and convince it to stop being stubborn.
Mage Unlock works on mundane locks first, then stranger doors as Arcane grows.

- Arcane Needed: 9
- Syntax: `munlock <direction>`
- Rune augments
  - **Ashkenazy**: Opens stronger locks
  - **Falx**: Works faster
  - **Marsellus**: Breaks force locks
  - **Mezari**: Spares friendly wards
  - **Saloman**: Handles warded doors
  - **Talek**: Finds exact tumblers
  - **Arcanarton**: Corrodes locks
  - **Bodach**: Opens grave locks
  - **Ravidel**: Heats metal

### Phase

Let the body slip partly out of agreement with the room. Phase can carry a Mage
through a dangerous moment, a hostile body, or a place where matter is arguing.

- Arcane Needed: 10
- Syntax: `phase <target>`
- Rune augments
  - **Ashkenazy**: Lengthens phase
  - **Falx**: Improves timing
  - **Marsellus**: Phases through force locks
  - **Mezari**: Pulls an ally briefly
  - **Saloman**: Leaves a warded return point
  - **Talek**: Exits more precisely
  - **Arcanarton**: Slips through broken spaces
  - **Bodach**: Phases through grave-shadow
  - **Ravidel**: Leaves heat shimmer

### Gate

Open a passage between here and there. Gate is heavier than teleportation and
more public, but it can move things that ordinary travel refuses to carry.

- Arcane Needed: 11
- Syntax: `gate <item> to <person>`
- Rune augments
  - **Ashkenazy**: Holds longer
  - **Falx**: Opens faster
  - **Marsellus**: Strengthens passage
  - **Mezari**: Improves ally passage
  - **Saloman**: Protects both sides
  - **Talek**: Anchors precisely
  - **Arcanarton**: Opens through broken thresholds
  - **Bodach**: Opens through grave marks
  - **Ravidel**: Opens through heat marks

### Inferno

Release fire too large to be polite. Inferno is the Mage letting the room learn
what heat remembers.

- Arcane Needed: 12
- Syntax: `inferno`
- Rune augments
  - **Ashkenazy**: Enlarges the firestorm
  - **Falx**: Lowers recovery
  - **Marsellus**: Adds concussive heat
  - **Mezari**: Preserves allies at the edge
  - **Saloman**: Shields the caster
  - **Talek**: Creates steam and cracking ice
  - **Arcanarton**: Leaves unstable ash
  - **Bodach**: Leaves death-touched ash
  - **Ravidel**: Makes the fire hungry

### Powerup

Trade physical reserves for magical power. Powerup is the desperate page a Mage
opens when the spellbook still has work to do and the body has HP left to burn.

- Arcane Needed: 13
- Syntax: `powerup <hp>`
- Rune augments
  - **Ashkenazy**: Improves spell power
  - **Falx**: Improves casting rhythm
  - **Marsellus**: Improves force spells
  - **Mezari**: Shares a lesser boost
  - **Saloman**: Reduces risk
  - **Talek**: Improves accuracy
  - **Arcanarton**: Trades safety for a higher peak
  - **Bodach**: Powers death formulae
  - **Ravidel**: Powers fire formulae

### Wrath

Shape anger into spellwork and let it answer the target. Wrath is punishment,
force, and a little bit of old Mage arrogance.

- Arcane Needed: 14
- Syntax: `wrath <target>`
- Rune augments
  - **Ashkenazy**: Widens punishment
  - **Falx**: Shortens recovery
  - **Marsellus**: Adds force shock
  - **Mezari**: Shields allies from splash
  - **Saloman**: Punishes hostile magic
  - **Talek**: Freezes openings
  - **Arcanarton**: Rots defenses
  - **Bodach**: Adds fear
  - **Ravidel**: Adds eruption

### Touch

Use the body as a lightning conduit, burn through the pain, and discharge the
whole attack through one hand. Touch is harsh magic for drastic situations: it
can tear through resistance, but the Mage pays for it in blood as well as SP.

- Arcane Needed: 15
- Syntax: `touch <target>`
- Rune augments
  - **Ashkenazy**: Makes the discharge devastating
  - **Falx**: Reduces the channel time and self-burn
  - **Marsellus**: Adds a thunderclap impact
  - **Mezari**: Returns SP when the target resists
  - **Saloman**: Shields the Mage from part of the feedback
  - **Talek**: Turns the lightning white-cold and precise
  - **Arcanarton**: Makes the conduit unstable and enfeebling
  - **Bodach**: Adds a death-surge against weaker enemies
  - **Ravidel**: Turns the arc into heat lightning and ash

### Spellward

Raise a ward against hostile spellwork. Spellward is the formal answer to the
question every Mage eventually asks: what happens when the other caster is
faster?

- Arcane Needed: 4
- Syntax: `spellward`
- Rune augments
  - **Ashkenazy**: Strengthens the ward
  - **Falx**: Refreshes faster
  - **Marsellus**: Catches force spells
  - **Mezari**: Links warded allies
  - **Saloman**: Improves spell blocking significantly
  - **Talek**: Blocks cold and precision magic
  - **Arcanarton**: Catches unstable magic
  - **Bodach**: Catches death magic
  - **Ravidel**: Catches fire magic

### Negate

Unmake an active magical effect. Negate is less dramatic than a fireball and
far more satisfying when the target was relying on the effect to survive.

- Arcane Needed: 5
- Syntax: `negate <target>`
- Rune augments
  - **Ashkenazy**: Strips stronger effects
  - **Falx**: Casts faster
  - **Marsellus**: Breaks force effects
  - **Mezari**: Spares allied effects
  - **Saloman**: Strips wards cleanly
  - **Talek**: Targets exact effects
  - **Arcanarton**: Unravels unstable effects
  - **Bodach**: Breaks fear and death effects
  - **Ravidel**: Burns away fire effects

### Blink

Move through a short fold in space. Blink is quick, rude, and useful for Magi
who prefer a different spot than the one the weapon just landed in.

- Arcane Needed: 6
- Syntax: `blink`
- Rune augments
  - **Ashkenazy**: Increases distance
  - **Falx**: Improves recovery
  - **Marsellus**: Adds force displacement
  - **Mezari**: Avoids ally collision
  - **Saloman**: Leaves a warded afterimage
  - **Talek**: Lands cleaner
  - **Arcanarton**: Blinks unpredictably farther
  - **Bodach**: Leaves a fear-shadow
  - **Ravidel**: Leaves heat shimmer

### Invisibility

Gather the light around a target, fold it thin, and hide the body behind a
wavering veil. Invisibility is strongest outside combat, when the Mage has time
to settle the pattern cleanly.

- Arcane Needed: 9
- Syntax: `invis <target>`
- Rune augments
  - **Ashkenazy**: Lasts longer
  - **Falx**: Fades faster
  - **Marsellus**: Hides motion and force traces
  - **Mezari**: Softens ally notice
  - **Saloman**: Resists reveal magic
  - **Talek**: Sharpens quiet edges
  - **Arcanarton**: Flickers unpredictably
  - **Bodach**: Looks ghostly under spirit sight
  - **Ravidel**: Leaves heat haze

### Cloak

Wrap the Mage or an ally in a quieter pattern. Cloak is less perfect than
invisibility but easier to use while moving, preparing, or helping another.

- Arcane Needed: 6
- Syntax: `cloak <target>`
- Rune augments
  - **Ashkenazy**: Strengthens concealment
  - **Falx**: Slips on faster
  - **Marsellus**: Hides force traces
  - **Mezari**: Cloaks an ally more cleanly
  - **Saloman**: Protects against detection
  - **Talek**: Cleans outlines
  - **Arcanarton**: Blurs with static
  - **Bodach**: Blurs with grave-shadow
  - **Ravidel**: Blurs with shimmer

### Portable Hole

Open a small impossible pocket and put things where they have no business
fitting. Portable Hole is convenience, storage, and a minor insult to geometry.

- Arcane Needed: 7
- Syntax: `portable hole`
- Rune augments
  - **Ashkenazy**: Holds more
  - **Falx**: Opens faster
  - **Marsellus**: Stabilizes weight
  - **Mezari**: Shares access with allies
  - **Saloman**: Protects contents
  - **Talek**: Organizes contents cleanly
  - **Arcanarton**: Stores unstable scraps
  - **Bodach**: Stores grave goods safely
  - **Ravidel**: Stores hot ash safely

### Enhance

Rewrite a small part of the body for a short time. Enhance turns thought,
strength, speed, or endurance into a cleaner pattern.

- Arcane Needed: 7
- Syntax: `enhance <target>`
- Rune augments
  - **Ashkenazy**: Raises the bonus
  - **Falx**: Starts faster
  - **Marsellus**: Favors strength and force
  - **Mezari**: Shares a lesser version
  - **Saloman**: Makes the spell safer
  - **Talek**: Favors dexterity and accuracy
  - **Arcanarton**: Trades stability for a higher peak
  - **Bodach**: Favors endurance through dread
  - **Ravidel**: Favors heat and aggression

### Sever Pattern

Cut a magical thread. Sever Pattern handles bindings, links, conjurations, and
spells that survive because no one has found the string yet.

- Arcane Needed: 8
- Syntax: `sever pattern <target>`
- Rune augments
  - **Ashkenazy**: Cuts deeper
  - **Falx**: Cuts faster
  - **Marsellus**: Severs force links
  - **Mezari**: Spares allies
  - **Saloman**: Cuts hostile magic cleanly
  - **Talek**: Cuts exact threads
  - **Arcanarton**: Unravels unstable patterns
  - **Bodach**: Severs spirit threads
  - **Ravidel**: Cauterizes the cut

### Rune Primer

Study a rune until the spellbook begins to understand its handwriting. Rune
Primer is how a Mage turns a found mark into usable work.

- Arcane Needed: 3
- Syntax: `rune primer <rune>`
- Rune augments
  - **Ashkenazy**: Teaches power runes faster
  - **Falx**: Teaches cadence runes faster
  - **Marsellus**: Teaches force runes faster
  - **Mezari**: Teaches sympathetic runes faster
  - **Saloman**: Teaches ward runes faster
  - **Talek**: Teaches precision runes faster
  - **Arcanarton**: Teaches entropy runes faster
  - **Bodach**: Teaches demise runes faster
  - **Ravidel**: Teaches fire runes faster

### Rune Transfer

Move a rune from one prepared spell to another. Rune Transfer saves good ink
from bad decisions and lets a Mage reshape the book before a different hunt.

- Arcane Needed: 6
- Syntax: `rune transfer <rune> from <spell> to <spell>`
- Rune augments
  - **Ashkenazy**: Preserves power
  - **Falx**: Preserves cadence
  - **Marsellus**: Preserves force echoes
  - **Mezari**: Preserves ally links
  - **Saloman**: Preserves wards
  - **Talek**: Preserves precision
  - **Arcanarton**: Risks useful mutation
  - **Bodach**: Risks grave tint
  - **Ravidel**: Risks burn tint

### Summon Familiar

Call a small helper from the Mage's own pattern. A familiar is a living note in
the margin of the spellbook.

- Arcane Needed: 9
- Syntax: `summon familiar`
- Rune augments
  - **Ashkenazy**: Makes the familiar sturdier
  - **Falx**: Makes the familiar quicker
  - **Marsellus**: Gives force bite
  - **Mezari**: Improves ally errands
  - **Saloman**: Improves guarding
  - **Talek**: Improves scouting
  - **Arcanarton**: Makes it strange and unstable
  - **Bodach**: Makes it grave-touched
  - **Ravidel**: Gives ember temper

### Transfer Familiar

Move a prepared charge, mark, or small spell through the familiar. Transfer
Familiar lets the Mage work at a distance through a trusted living note.

- Arcane Needed: 9
- Syntax: `transfer familiar <effect>`
- Rune augments
  - **Ashkenazy**: Transfers more
  - **Falx**: Transfers faster
  - **Marsellus**: Transfers force charge
  - **Mezari**: Transfers through allies
  - **Saloman**: Transfers safely
  - **Talek**: Transfers precisely
  - **Arcanarton**: Mutates the transfer
  - **Bodach**: Transfers grave charge
  - **Ravidel**: Transfers heat

### Unleash Familiar

Send the familiar into a brief, direct action. A familiar can bite, distract,
carry a rune, echo a spell, or do the small impossible thing a Mage cannot
reach in time.

- Arcane Needed: 9
- Syntax: `unleash familiar <target>`
- Rune augments
  - **Ashkenazy**: Strengthens the action
  - **Falx**: Speeds the action
  - **Marsellus**: Adds a force strike
  - **Mezari**: Protects allies
  - **Saloman**: Makes the familiar defensive
  - **Talek**: Makes the action precise
  - **Arcanarton**: Makes the action erratic and stronger
  - **Bodach**: Adds fear
  - **Ravidel**: Adds burn

### Recall Familiar

Pull the familiar back into reach. Recall Familiar is part safety line, part
apology, and part reminder that a Mage's notes belong in the book.

- Arcane Needed: 9
- Syntax: `recall familiar`
- Rune augments
  - **Ashkenazy**: Recalls from farther away
  - **Falx**: Recalls faster
  - **Marsellus**: Recalls through force interference
  - **Mezari**: Recalls through ally links
  - **Saloman**: Recalls safely
  - **Talek**: Recalls exactly
  - **Arcanarton**: Recalls from broken places
  - **Bodach**: Recalls from graves
  - **Ravidel**: Recalls through heat marks

### Bind Dead Familiar

Keep a familiar moving after death. This is forbidden work, useful and
unsettling, and the spellbook writes the page in a different hand afterward.

- Arcane Needed: 10
- Syntax: `bind dead familiar`
- Rune augments
  - **Ashkenazy**: Strengthens the binding
  - **Falx**: Makes it responsive
  - **Marsellus**: Gives bone force
  - **Mezari**: Keeps loyalty
  - **Saloman**: Contains backlash
  - **Talek**: Sharpens commands
  - **Arcanarton**: Blights the body
  - **Bodach**: Anchors undeath
  - **Ravidel**: Leaves ember eyes

### Prepare Ink

Turn ash, reagent, and patience into spellbook ink. Prepare Ink is where the
Mage decides what kind of research the next page deserves.

- Arcane Needed: 4
- Syntax: `prepare ink <ash>`
- Rune augments
  - **Ashkenazy**: Improves yield
  - **Falx**: Speeds preparation
  - **Marsellus**: Makes force ink
  - **Mezari**: Makes sympathetic ink
  - **Saloman**: Makes ward ink
  - **Talek**: Makes precise ink
  - **Arcanarton**: Makes blight ink
  - **Bodach**: Makes graveblack ink
  - **Ravidel**: Makes vermilion ink

### Transcribe Spell

Copy a spell into the book by hand, ink, and memory. Transcription is where the
spell becomes the Mage's spell rather than borrowed noise.

- Arcane Needed: 2
- Syntax: `transcribe <spell>`
- Rune augments
  - **Ashkenazy**: Improves raw notes
  - **Falx**: Makes cleaner shorthand
  - **Marsellus**: Preserves force diagrams
  - **Mezari**: Preserves ally clauses
  - **Saloman**: Preserves safeguards
  - **Talek**: Preserves exact measures
  - **Arcanarton**: Preserves unstable variants
  - **Bodach**: Preserves grave clauses
  - **Ravidel**: Preserves fire clauses

### Bind Rune

Place a copied rune into a spell socket. Binding is the moment where research
stops being theory and starts changing the spell in the hand.

- Arcane Needed: 3
- Syntax: `bind <rune> to <spell>`
- Rune augments
  - **Ashkenazy**: Strengthens binding
  - **Falx**: Reduces binding time
  - **Marsellus**: Reinforces the socket
  - **Mezari**: Links the socket
  - **Saloman**: Protects the socket
  - **Talek**: Aligns the socket
  - **Arcanarton**: Warps the socket
  - **Bodach**: Darkens the socket
  - **Ravidel**: Heats the socket

### Unbind Rune

Remove a rune from a spell without wasting everything that made it valuable.
Unbinding is delicate work, especially with forbidden marks.

- Arcane Needed: 3
- Syntax: `unbind <rune> from <spell>`
- Rune augments
  - **Ashkenazy**: Keeps residue useful
  - **Falx**: Unbinds faster
  - **Marsellus**: Prevents force snap
  - **Mezari**: Preserves friendly links
  - **Saloman**: Prevents backlash
  - **Talek**: Removes cleanly
  - **Arcanarton**: Extracts unstable residue
  - **Bodach**: Extracts grave residue
  - **Ravidel**: Extracts ember residue

### Copy Formula

Copy a found formula into the spellbook. Formulae are stranger than spells:
half instruction, half argument with the Dark Wind.

- Arcane Needed: 5
- Syntax: `copy formula <formula>`
- Rune augments
  - **Ashkenazy**: Copies stronger formulae
  - **Falx**: Copies faster
  - **Marsellus**: Copies force diagrams
  - **Mezari**: Copies sympathetic clauses
  - **Saloman**: Copies safeguards
  - **Talek**: Copies exact values
  - **Arcanarton**: Copies entropy formulae
  - **Bodach**: Copies demise formulae
  - **Ravidel**: Copies igneous formulae

### Awaken Page

Wake a prepared spellbook page. An awakened page remembers, complains, answers
simple research questions, and helps familiars behave like part of the book.

- Arcane Needed: 9
- Syntax: `awaken page <spell>`
- Rune augments
  - **Ashkenazy**: Wakes a louder page
  - **Falx**: Wakes a faster page
  - **Marsellus**: Wakes a forceful page
  - **Mezari**: Wakes a helpful page
  - **Saloman**: Wakes a cautious page
  - **Talek**: Wakes a precise page
  - **Arcanarton**: Wakes a strange page
  - **Bodach**: Wakes a grave page
  - **Ravidel**: Wakes a hot-tempered page

### Rebind Barrage

Rewrite the automatic casting pattern for a mastered spell. Rebind Barrage lets
the Mage change what repeats, how often it repeats, and what rune rides along.

- Arcane Needed: 6
- Syntax: `rebind barrage <spell>`
- Rune augments
  - **Ashkenazy**: Strengthens barrage
  - **Falx**: Improves cadence
  - **Marsellus**: Adds force echo
  - **Mezari**: Makes it safer near allies
  - **Saloman**: Stabilizes concentration
  - **Talek**: Improves target choice
  - **Arcanarton**: Adds unstable surges
  - **Bodach**: Adds fear or siphon
  - **Ravidel**: Adds burning repeats

### Necrosis

Put death into living tissue and let the body remember the grave. Necrosis is
one of the first forbidden formulae most Magi regret understanding.

- Arcane Needed: 9
- Syntax: `necrosis <target>`
- Rune augments
  - **Ashkenazy**: Deepens rot
  - **Falx**: Spreads faster
  - **Marsellus**: Ruptures tissue
  - **Mezari**: Avoids allies
  - **Saloman**: Contains backlash
  - **Talek**: Targets a weak point
  - **Arcanarton**: Empowers decay
  - **Bodach**: Adds death weight
  - **Ravidel**: Cauterizes into black ash

### Wrack

Twist pain through the target's nerves and joints. Wrack is cruel, precise, and
very much the kind of spell the guild pretends only the careful study.

- Arcane Needed: 9
- Syntax: `wrack <target>`
- Rune augments
  - **Ashkenazy**: Increases pain
  - **Falx**: Strikes nerves faster
  - **Marsellus**: Adds force spasm
  - **Mezari**: Spares linked allies
  - **Saloman**: Guards the caster
  - **Talek**: Targets joints
  - **Arcanarton**: Breaks coordination
  - **Bodach**: Adds dread
  - **Ravidel**: Adds fever

### Pox

Write sickness into the body. Pox is smaller than plague, easier to hide, and
worse than it looks.

- Arcane Needed: 9
- Syntax: `pox <target>`
- Rune augments
  - **Ashkenazy**: Strengthens disease
  - **Falx**: Accelerates onset
  - **Marsellus**: Adds weakness
  - **Mezari**: Shapes contagion away from allies
  - **Saloman**: Contains spread
  - **Talek**: Targets exact symptoms
  - **Arcanarton**: Mutates the pox
  - **Bodach**: Makes it grave-cold
  - **Ravidel**: Makes it burning

### Plague

Write sickness into the room as a spreading formula. Plague is forbidden
because it stops being a single target problem and starts becoming an event.

- Arcane Needed: 10
- Syntax: `plague`
- Rune augments
  - **Ashkenazy**: Widens sickness
  - **Falx**: Speeds spread
  - **Marsellus**: Adds body shock
  - **Mezari**: Creates ally gaps
  - **Saloman**: Contains the room
  - **Talek**: Makes symptoms precise
  - **Arcanarton**: Empowers blight
  - **Bodach**: Empowers death
  - **Ravidel**: Burns into ash fever

### Bone Shield

Raise a defensive shell from prepared remains. Bone Shield is crude in material
and elegant in geometry.

- Arcane Needed: 10
- Syntax: `bone shield`
- Rune augments
  - **Ashkenazy**: Thickens bone
  - **Falx**: Raises it faster
  - **Marsellus**: Adds force ribs
  - **Mezari**: Guards an ally
  - **Saloman**: Stabilizes the shield
  - **Talek**: Shapes clean plates
  - **Arcanarton**: Uses rotten bone
  - **Bodach**: Uses grave bone
  - **Ravidel**: Uses charred bone

### Death Shroud

Wrap the Mage in grave-shadow. Death Shroud conceals, frightens, and makes the
living hesitate before touching what looks halfway gone already.

- Arcane Needed: 10
- Syntax: `death shroud`
- Rune augments
  - **Ashkenazy**: Deepens concealment
  - **Falx**: Wraps faster
  - **Marsellus**: Muffles force traces
  - **Mezari**: Hides allies lightly
  - **Saloman**: Contains the shroud
  - **Talek**: Gives clean edges
  - **Arcanarton**: Makes it flicker
  - **Bodach**: Empowers fear
  - **Ravidel**: Smokes at the edge

### Grave Eye

Look through death. Grave Eye can watch through remains, marked corpses, and
places where the dead left enough of themselves to notice.

- Arcane Needed: 10
- Syntax: `grave eye <target>`
- Rune augments
  - **Ashkenazy**: Sees farther
  - **Falx**: Scans faster
  - **Marsellus**: Sees force around remains
  - **Mezari**: Shares the view
  - **Saloman**: Protects the eye
  - **Talek**: Sharpens detail
  - **Arcanarton**: Sees rot
  - **Bodach**: Sees spirits
  - **Ravidel**: Sees heat in corpses

### Blood Locate

Follow blood through distance, violence, and old wounds. Blood Locate is ugly
tracking, but it works when cleaner magic loses the trail.

- Arcane Needed: 10
- Syntax: `blood locate <target>`
- Rune augments
  - **Ashkenazy**: Extends range
  - **Falx**: Updates faster
  - **Marsellus**: Follows violent motion
  - **Mezari**: Follows known ally blood safely
  - **Saloman**: Protects the reading
  - **Talek**: Sharpens direction
  - **Arcanarton**: Follows sick blood
  - **Bodach**: Follows dead blood
  - **Ravidel**: Follows hot blood

### Grave Lock

Seal a door, container, or corpse-bound threshold with grave logic. Grave Lock
opens for what it knows and punishes strangers.

- Arcane Needed: 10
- Syntax: `grave lock <target>`
- Rune augments
  - **Ashkenazy**: Strengthens the lock
  - **Falx**: Sets it faster
  - **Marsellus**: Adds force bars
  - **Mezari**: Allows allies through
  - **Saloman**: Wards the lock
  - **Talek**: Keys exact names
  - **Arcanarton**: Makes the lock unstable
  - **Bodach**: Keys it to the dead
  - **Ravidel**: Burns intruders

### Magic Mouth

Leave a spell to speak later. Magic Mouth is message, trap, warning, insult,
and haunted punchline, depending on the Mage.

- Arcane Needed: 10
- Syntax: `magic mouth <message>`
- Rune augments
  - **Ashkenazy**: Speaks louder
  - **Falx**: Triggers faster
  - **Marsellus**: Carries force in the voice
  - **Mezari**: Keys to allies
  - **Saloman**: Protects the message
  - **Talek**: Makes wording exact
  - **Arcanarton**: Garbles enemies
  - **Bodach**: Whispers like the dead
  - **Ravidel**: Speaks in heat-hiss

### Reclaim

Pull value back from a failed corpse rite. Reclaim is how careful Magi admit a
grave experiment went poorly without wasting the whole mistake.

- Arcane Needed: 10
- Syntax: `reclaim <corpse|rite>`
- Rune augments
  - **Ashkenazy**: Recovers more
  - **Falx**: Recovers faster
  - **Marsellus**: Recovers force residue
  - **Mezari**: Preserves loyal bindings
  - **Saloman**: Prevents backlash
  - **Talek**: Recovers cleanly
  - **Arcanarton**: Recovers blight
  - **Bodach**: Recovers grave ash
  - **Ravidel**: Recovers ember ash

### Raise Servant

Bind the dead into a useful servant. The servant can fight, carry, scout, or
stand where the Mage wants a body between danger and the spellbook.

- Arcane Needed: 10
- Syntax: `raise servant <corpse>`
- Rune augments
  - **Ashkenazy**: Strengthens the servant
  - **Falx**: Makes it quicker
  - **Marsellus**: Adds force bones
  - **Mezari**: Improves obedience
  - **Saloman**: Contains rebellion
  - **Talek**: Sharpens commands
  - **Arcanarton**: Makes a blighted servant
  - **Bodach**: Anchors the dead
  - **Ravidel**: Makes a charred servant

### March Of The Damned

Raise several dead things into motion and point them at a problem. March of the
Damned is never quiet and never mistaken for respectable magic.

- Arcane Needed: 10
- Syntax: `march of the damned`
- Rune augments
  - **Ashkenazy**: Raises stronger dead
  - **Falx**: Makes them move faster
  - **Marsellus**: Adds crushing force
  - **Mezari**: Protects allies
  - **Saloman**: Holds formation
  - **Talek**: Improves command
  - **Arcanarton**: Blights the march
  - **Bodach**: Empowers the dead
  - **Ravidel**: Leaves burning footprints

### Doom

Write an ending onto the target and wait for the page to catch up. Doom is
forbidden because it treats the future like a corpse.

- Arcane Needed: 10
- Syntax: `doom <target>`
- Rune augments
  - **Ashkenazy**: Increases final harm
  - **Falx**: Hastens doom
  - **Marsellus**: Adds force collapse
  - **Mezari**: Spares allies
  - **Saloman**: Protects the caster
  - **Talek**: Keys the doom precisely
  - **Arcanarton**: Makes failure spread
  - **Bodach**: Adds death sentence
  - **Ravidel**: Ends in ash

### Soulbond

Bind a soul, servant, familiar, or marked ally to a formula. Soulbond is useful,
dangerous, and hard to explain to anyone who asks sensible questions.

- Arcane Needed: 10
- Syntax: `soulbond <target>`
- Rune augments
  - **Ashkenazy**: Strengthens bond
  - **Falx**: Quickens response
  - **Marsellus**: Adds force tether
  - **Mezari**: Improves loyalty
  - **Saloman**: Protects both sides
  - **Talek**: Defines terms
  - **Arcanarton**: Makes the bond volatile
  - **Bodach**: Binds through death
  - **Ravidel**: Binds through ember oath

### Raise Dead

Attempt the most dangerous grave formula: returning the fallen. Raise Dead is
never casual magic. The page remembers every name written into it.

- Arcane Needed: 10
- Syntax: `raise dead <target>`
- Rune augments
  - **Ashkenazy**: Improves return strength
  - **Falx**: Shortens rite time
  - **Marsellus**: Steadies the body
  - **Mezari**: Protects the restored ally
  - **Saloman**: Reduces backlash
  - **Talek**: Restores cleaner memory
  - **Arcanarton**: Returns with instability
  - **Bodach**: Improves grave return
  - **Ravidel**: Returns with ember warmth

## Ash And Ink

Spell kills can leave ash directly. Corpse burners still turn bodies into ash.
Mages buy ink in the guild or provide ash to change cost, color, and formula
access.

| Ash | Source pattern | Mage use |
| --- | --- | --- |
| Grey | Darkwind and common corpses | Stable ink, common spell pages, barrage research |
| Red | Fire deaths, Souvrael, Underworld, Talamh Darag | Fire, volatile runes |
| Blue | Frost deaths, Kerei, Hyperborea | Frost, clarity, distance, travel magic |

Spell deaths interact with ash:

- Mage spell damage can create an ash burst on death
- Ash bursts leave a collectible pile in the room
- Fire, frost, force, and rune-modified spells influence ash color
- Burning a corpse killed by Mage spellwork can create bonus ash
- Protected corpses keep their normal protections

| Ink | Built from | Research use |
| --- | --- | --- |
| Sable Ink | Grey ash | Common transcription and spellbook pages |
| Vermilion Ink | Red ash | Fire, Ravidel, volatile spells |
| Cerulean Ink | Blue ash | Frost, travel, Talek, precision spells |
| Fulminant Ink | Force or lightning ash | Bolt, Wrath, barrage, Marsellus work |
| Graveblack Ink | Death-touched ash | Bodach, Arcanarton, high-risk formulae |

### Research Work

Mage research is practical guild work: field casting, ash turning, rune
copying, anomaly notes, and pages tested under danger.

| Work | Opens |
| --- | --- |
| Field casting | Spell mastery, ash events, barrage familiarity |
| Guild study | Spell pages, formulae, ink recipes, copied runes |
| Anomaly work | Arcane, rare notes, strange spell behavior |
| Teaching | Apprentice progress, cleaner spell notes, guild standing |
| Ash turning | Ink, rune binding, forbidden formulae |

## Forbidden Studies

The old Necromancer arts become a locked door inside the Mage guild. Bodach and
Arcanarton formulae, graveblack ink, and forbidden discoveries open it.

| Branch | Root rune | Use |
| --- | --- | --- |
| Bodach | Demise | Death, fear, spirits, grave ash, soul weight |
| Arcanarton | Entropy | Blight, rot, failure, decay, unstable formulae |

Forbidden study brings corpse rites, grave wards, bone shields, death shrouds,
curses, blight, grave scouting, blood locating, bound dead servants, and rare
raise-dead work.

### Grave Work

Forbidden study keeps its own tools.

| Tool | Use |
| --- | --- |
| Grave Rune | Holds Bodach or Arcanarton charge for a short extra effect |
| Bound Servant | Raises a dead helper for combat, carrying, or scouting |
| Grave Eye | Watches through a dead thing or marked remains |
| Bone Ward | Turns remains into a defensive shell |
| Blight Formula | Lets decay change a living spell |
| Reclaim | Pulls value back from a failed corpse rite |

## Spellbook

The spellbook tracks known spells, mastery, rune sockets, barrage, inks,
research, familiar bond, remembered locations, ash notes, and forbidden pages.

Spellbooks can also wake.

| Page State | Use |
| --- | --- |
| Quiet | Normal spell storage |
| Annotated | Better spell mastery notes |
| Runed | Holds a copied rune pattern |
| Inked | Reduces a matching research cost |
| Awakened | Answers simple research questions and improves familiar work |
| Blackleaf | Holds forbidden Bodach or Arcanarton formulae |

## Familiars And Pages

Familiars are living notes from the spellbook: small, strange helpers that
carry a piece of the Mage's pattern. They scout, hold minor runes, carry
messages, echo simple spellwork, and warn when the Dark Wind bends wrong.

Awakened pages and familiars answer one another. A page holds the formula. The
familiar tests it in the world.

| Bond | Use |
| --- | --- |
| Scout | Sends the familiar through a nearby space |
| Echo | Repeats a minor prepared spell effect |
| Hold Rune | Carries a copied rune for a short task |
| Warn | Reacts to anomalies, hostile magic, or grave work |
| Bind Dead Familiar | Uses forbidden formulae to keep a dead familiar moving |

## Mage Sigils

| Sigil | Use |
| --- | --- |
| Arcane | Reduces Mage spell costs and improves spell mastery gain |
| Runed | Strengthens rune effects |
| Resonant | Reduces cost of repeating related spells |
| Ashen | Improves ash-burst chance and bonus ash from burns |
| Inked | Reduces ink costs for spellbook work |
| Gravebound | Opens Bodach formulae and bound dead familiar work |
| Blightbound | Opens Arcanarton formulae and rot effects |
| Focused | Reduces channel interruption and fumble chance |
| Spellward | Reduces incoming magical damage |
| Barraging | Marks an active automatic barrage stance |
| Bookbound | Improves familiar, spellbook, and awakened page work |
| Blackleaf | Marks a forbidden page or grave formula |

## Guild Commands

| Command | Use |
| --- | --- |
| `mage`, `magi`, `mhist` | Uses Mage communication |
| `spells` | Lists known spells |
| `spellbook` | Shows mastery, runes, barrage, and research notes |
| `research` | Shows Arcane thresholds and available research |
| `runes` | Shows known rune patterns |
| `inscribe` | Places a rune into a spell |
| `barrage` | Configures automatic barrage casting |
| `study` | Conducts guild research with inks and fragments |
| `ash` | Shows carried ash and guild ink requirements |
| `ink` | Purchases or prepares ink in the Mage guild |
| `formula` | Shows discovered secret formulae |
| `black` | Conducts forbidden research after discovery |
| `analyze`, `detect` | Inspects magical structure or nearby magic |
| `bind`, `unbind`, `prime` | Handles rune binding |
| `awaken page` | Wakes a prepared spellbook page |
| `familiar` | Reviews familiar bond and active familiar work |
