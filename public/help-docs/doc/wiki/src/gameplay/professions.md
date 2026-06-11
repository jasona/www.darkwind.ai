# Professions

Professions are [traits](traits.md) used for gathering, crafting, and supplying other players. They give every character a way to participate in the economy beyond killing monsters.

DarkWind has eight professions.

## Commands

| Command | Use |
| --- | --- |
| `professions` | Show profession skill levels |
| `traits` | Show all known traits |
| `reagents` | Show known reagents |

Profession tools can be bought from the profession building in town. Most transformed forms do not need profession tools.

Not every reagent drop appears in `reagents`.

The profession building is also where workers, refining, and several crafting stations live.

## Gathering Professions

| Profession | Command | Use |
| --- | --- | --- |
| Herbalism | `gather herbs` | Gather herbs from terrain for alchemy and other recipes |
| Mining | `mine ore` | Mine ore for smithing and manufacturing |
| Skinning | `skin corpse` | Harvest hides for leatherworking |

Gathering professions are tied to terrain and what you kill. Different domains provide different materials.

Gathering professions can always skill up, though the chance gets lower as the skill rises. Higher skill also improves gathering yield.

## Manufacturing Professions

| Profession | Use |
| --- | --- |
| Alchemy | Create potions, mixtures, and other reagent-based goods |
| Leatherworking | Create leather armor, bags, and hide goods |
| Smithing | Create metal armor and other forged goods |
| Tailoring | Create clothing, padded armor, cloth bags, bandages, and poultices |

Manufacturing uses gathered resources and reagents dropped by NPCs.

Manufacturing skillups depend on the tier of item being made. Crafting far below your current skill eventually stops improving the profession until the final tier.

## Crafting Tiers

Many crafted goods follow the same broad tier structure.

| Tier | Level To Use | Skill To Craft | Skill Cap From Crafting |
| --- | --- | --- | --- |
| 1 | 0 | 0 | 100 |
| 2 | 20 | 60 | 200 |
| 3 | 45 | 100 | 500 |
| 4 | 65 | 200 | 1,000 |

## Alchemy

Alchemy creates potions. Most potions boost stats, heal, restore, or support adventuring.

Potion categories include:

- Avatar Charge
- Charisma
- Constitution
- Detox
- Dexterity
- Digestion
- HP regeneration
- Intelligence
- SP regeneration
- Strength
- Wisdom

Garou are restricted from using regeneration potions.

## Leatherworking

Leatherworking turns hides into leather armor and related goods.

Important rules:

- `skin corpse` gathers hides
- 5 hides convert into 1 leather
- Hide and studded armor can be crafted
- Boots, chests, legs, and helmets can be made
- Cow armor starts at level 0
- Bear armor starts at level 20
- Reptile armor starts at level 45
- Dragon armor starts at level 65
- Added bindings or metal studs add extra effects

Leather and stud effects:

| Material | Effect |
| --- | --- |
| Bear | Intelligence |
| Cow | Fire resistance |
| Deer | Wisdom |
| Dragon | Strength |
| Elephant | Charisma |
| Goat | Disease resistance |
| Horse | Poison resistance |
| Mammal | Lightning resistance |
| Reptile | Constitution |
| Wolf | Dexterity |
| Yeti | Cold resistance |

## Smithing

Smithing turns ore into bars and bars into armor.

Important rules:

- `mine ore` gathers ore
- 5 ore convert into 1 bar
- Bronze bars use 4 copper ore and 1 tin ore
- Steel bars use 4 iron ore and 1 mithril ore
- Banded, chain, plate, and scale armor can be crafted
- Boots, chestplates, helmets, and legplates can be made
- Bronze armor starts at level 0
- Iron armor starts at level 20
- Steel armor starts at level 45
- Adamantite armor starts at level 65
- Inlays add extra effects

Metal effects:

| Metal | Effect |
| --- | --- |
| Adamantite | Strength |
| Bronze | Fire resistance |
| Copper | Disease resistance |
| Gold | Charisma |
| Iron | Poison resistance |
| Lead | Cold resistance |
| Mithril | Wisdom |
| Platinum | Intelligence |
| Silver | Dexterity |
| Steel | Constitution |
| Tin | Lightning resistance |

## Tailoring

Tailoring turns cloth into bolts, then bolts into clothing and padded armor.

Tailors can craft:

- Boots
- Breeches
- Cloaks
- Doublets
- Hoods
- Robes

Cloth tiers:

| Cloth | Level |
| --- | --- |
| Cotton | 0 |
| Silk | 20 |
| Emberweave | 45 |
| Lunar Cloth | 45 |
| Sun Cloth | 45 |
| Mage Fibre | 65 |

Shard effects:

| Shard | Effect |
| --- | --- |
| Amber | Poison resistance |
| Bloodstone | Disease resistance |
| Beryl | Strength |
| Garnet | Wisdom |
| Jade | Intelligence |
| Moonstone | Cold resistance |
| Onyx | Constitution |
| Pearl | Charisma |
| Sapphire | Dexterity |
| Sunstone | Fire resistance |
| Topaz | Lightning resistance |

## Refining

Refining breaks equipment back down into base materials.

| Command | Use |
| --- | --- |
| `refine` | Recover base materials |
| `refine verbose` | Show each item and what was recovered |

Refining notes:

- Metal equipment refines into base metals
- Leather equipment refines into Cow Leather
- Cloth equipment refines into Cotton Bolts
- Some equipment cannot be refined
- Material loss is normal
- Identifying an item can show whether it refines into anything

## Fishing

Fishing is a stand-alone profession. It gives players a quieter way to gather food for later adventures.

Fishing needs a fishing pole, bait, and a suitable fishing spot. During fishing, line tension matters. Better skill makes catches easier and improves the fish you bring in.

## Workers

Workers gather profession materials while you adventure.

| Command | Use |
| --- | --- |
| `hire` | Hire a worker in the profession building |
| `workers` | List your active workers |
| `fire <number>` | Fire a worker |

Worker notes:

- Workers cost 1,000 to 5,000 coins per trip
- Higher pay improves expected results
- Workers draw funds from your bank
- Repeating workers go out every 15 minutes
- Workers take a break close to reboot
- Ghost, linkdead, or relogged characters do not receive materials from active worker trips
- Each player starts with 1 worker per profession
- Hero, Legend, and Epic add more worker capacity
- Reaching 500 and 1,000 in a profession adds more worker capacity
- Current maximum is 6 workers per profession

## Economy Uses

Professions feed directly into [Economy](economy.md).

- Sell raw materials to other players
- Craft useful gear
- Stock markets with finished goods
- Auction rare crafted items
- Supply guildmates and clans
- Fill work orders when that system arrives
- Support player-owned businesses

## Guild And Class Hooks

Some guild and class designs build on professions directly. Druid uses harvesting and nature work as part of guild life. Mage research can use purchased inks, reagents, and ash-derived materials. Future class systems can treat profession mastery as a path into specialized crafting and support play.
