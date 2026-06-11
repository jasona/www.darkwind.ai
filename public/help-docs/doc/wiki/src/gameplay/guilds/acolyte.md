# Acolyte

Work in progress: Acolyte is being built toward this design, and current game
behavior differs in places.

Acolytes serve a divine patron. They heal, curse, bless, bargain, cleanse,
resurrect, read omens, walk pilgrimages, consecrate ground, and protect allies
through faith.

## In Play

Every Acolyte has a patron and a vocation.

Daily service looks like this:

- Serve a patron through prayer, taboo, offering, and rite
- Build Devotion through service, pilgrimages, trials, and prayer use
- Use shared prayers in the patron's style
- Unlock patron rites and vocation training at Devotion thresholds
- Read omens, follow portents, and keep shrine work active

Patron choice remains until the character leaves the guild. Vocation shapes
play without replacing the patron.

## Patrons

| Patron | Power | Training | Taboos |
| --- | --- | --- | --- |
| Mitra | Light, mercy, truth, cleansing, resurrection | Healing, holy wards, undead repulsion, warhorses, paladin training | Cruelty, corruption, dishonor, hostile bargains |
| Set | Chaos, ambition, shadow, bargains, curses | Dark pacts, leeching, fear, fragility, anti-paladin training | Weakness, broken bargains, wasted power, betrayal of Set |
| Gaea | Stewardship, renewal, purification, sacred law | Blight cleansing, living wards, rain, stone, roots, no metal | Metal armor, unnatural corruption, severance from the living cycle |
| Luna | Moonlight, dreams, silence, hidden roads | Night protection, dream omens, quiet travel, moonlit healing | Profaned sanctuary, betrayed hidden roads, abuse of the hunted |

## Vocations

| Vocation | Work | Training |
| --- | --- | --- |
| Ministry | Healing and service | Best healing, best resurrection, strongest shrine and pilgrimage work |
| Doctrine | Divine casting | Stronger curses, seals, judgments, combat omens, and offensive prayers |
| Oath | Martial service | Shields, weapons, armor, auras, smites, rushes, and divine weapon seals |

## Devotion

Devotion measures service to the patron and mastery of Acolyte rites. It opens
thresholds and stays with the character.

Devotion rises through shrine prayer, tithes, offerings, pilgrimages,
patron quests, healing, cleansing, resurrection, consecration, marked enemies,
taboo keeping, prayer use in combat, and patron or vocation trials.

### Devotion Ranks

| Rank | Title | Shared unlocks |
| --- | --- | --- |
| 1 | Listener | Patron symbol, `mend`, `bless`, `ward`, omen insight |
| 2 | Devotee | `cleanse`, shrine offerings, first vocation training |
| 3 | Keeper | `consecrate`, pilgrimage bonuses, first patron rite |
| 4 | Vessel | `guiding strike`, mail training, stronger patron channel |
| 5 | Seer | `commune`, clearer portents, first resurrection training |
| 6 | Oracle | `rebuke`, improved shrine rites, second vocation training |
| 7 | Exemplar | `sanctuary`, stronger wards, patron trial rite |
| 8 | Herald | Resurrection mastery, advanced armor training, major vocation rite |
| 9 | Radiant | Plate Vow or equivalent capstone training, major patron aura |
| 10 | Avatar | Patron capstone, strongest omen reading, highest resurrection aftermath |

### Patron Rites

| Rank | Mitra | Set | Gaea | Luna |
| --- | --- | --- | --- | --- |
| 1 | Spark of Mercy | Whispered Bargain | Seed-Breath | Moonlit Murmur |
| 2 | Lesser Blessing | Blood Price | Clean Water | Silver Hush |
| 3 | Holy Light | Chaos Bolt | Rooted Sanctuary | Dream Omen |
| 4 | Seal of Warding | Dreadspike | Thorn Aegis | Quiet Step |
| 5 | Truthsense | Fragility | Blight Purge | Reflection Rite |
| 6 | Repel Undead | Leech | Rain Blessing | Tide of Mercy |
| 7 | Angelic Intercession | Anathema | Living Aegis | Silver Veil |
| 8 | Warhorse | Shadow Step | Earthmeld | Hidden Road |
| 9 | Sunray | Dark Pact | Stone Oath | Moonlit Vigil |
| 10 | Radiant Avatar | Dread Avatar | Verdant Avatar | Lunar Avatar |

### Vocation Training

| Rank | Ministry | Doctrine | Oath |
| --- | --- | --- | --- |
| 1 | Better `mend` | Better `omens` | Basic shield prayer |
| 2 | Better `cleanse` | Minor judgment | Weapon blessing |
| 3 | Stronger offerings | First curse or binding | Guarded stance |
| 4 | Group healing rite | Stronger offensive prayer | Mail training |
| 5 | Resurrection preparation | Portent blessing | Shield rush |
| 6 | Strong shrine prayer | Stronger `rebuke` | Divine weapon seal |
| 7 | Group sanctuary | Major curse or seal | Front-line aura |
| 8 | Resurrection mastery | Major omen rite | Heavy armor training |
| 9 | Mass cleansing | Patron judgment | Plate Vow |
| 10 | Miracle of return | Divine sentence | Avatar's oath |

## Omens And Pilgrimage

| Practice | Acolyte edge |
| --- | --- |
| Omens | Clearer prophetic language and patron warnings |
| Portents | Short tactical blessings, especially for Doctrine and Luna |
| Pilgrimage | Devotion, favor, and temporary patron rites |
| Shrines | Prayer refreshes minor rites or strengthens consecrated ground |
| Tithes | Aligned offerings grant Devotion |
| Holy Hour | Patron prayers strengthen and taboos tighten |
| Marked enemies | Defeating them grants Devotion and moves the omen cycle |

## Sigils

| Sigil | Use |
| --- | --- |
| Faith | Reduces Acolyte prayer costs |
| Consecrated | Strengthens prayers cast on consecrated ground |
| Protection | Reduces incoming damage |
| Warding | Improves shield strength received |
| Mercy | Improves healing received and given |
| Bargained | Reduces immediate costs while reserving a future price |
| Rooted | Reduces forced movement and knockdown |
| Moonlit | Improves quiet recovery and omen clarity at night |
| Pilgrim | Improves shrine and pilgrimage rewards |
| Martyr | Reduces ally damage while increasing personal strain |

## Shared Prayers

All patrons use the same common prayer list. Patron choice changes messaging,
damage type, side effects, taboos, and secondary bonuses.

| Prayer | Use |
| --- | --- |
| Mend | Heal over time or close wounds |
| Bless | Short blessing |
| Ward | Defensive shield |
| Cleanse | Remove affliction |
| Consecrate | Mark room or ground |
| Guiding Strike | Weapon or attack prayer |
| Rebuke | Push back hostile force |
| Commune | Ask for guidance |
| Sanctuary | Protect or stabilize |
| Resurrect | Return the fallen |

## Resurrection

Resurrection returns the fallen, helps recover the corpse, stabilizes the target
after death, and gives a chance to restore lost level progress.

| Patron | Aftermath |
| --- | --- |
| Mitra | Protective shield, brief courage, cleansing light |
| Set | Chance to recover some lost experience, with debt or bargain weight |
| Gaea | Regeneration, poison or disease cleansing, temporary bond to soil or water |
| Luna | Quiet movement, dream clarity, protection from immediate pursuit |

## Shrine Commands

| Command | Use |
| --- | --- |
| `acolyte`, `acolytes`, `ahist` | Uses Acolyte communication |
| `prayers` | Lists available prayers and rites |
| `patron` | Shows patron, taboos, favor, and rites |
| `vocation` | Shows Ministry, Doctrine, or Oath training |
| `devote` | Reviews Devotion rank, vows, debt, and thresholds |
| `offer` | Makes offerings or fulfills bargains |
| `consecrate` | Prepares ground for stronger rites |
| `omens`, `portents` | Reads the current divine balance |
| `pilgrimage` | Shows Acolyte pilgrimage guidance |
| `pray at shrine` | Prays at a shrine in the room |
| `tithe <amount> at shrine` | Tithes at a shrine in the room |
