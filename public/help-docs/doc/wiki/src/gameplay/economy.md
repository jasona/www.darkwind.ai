# Economy

DarkWind's economy is built from coins, banks, player markets, auctions, professions, corpse ash, and player-owned businesses. Most players interact with it by banking money, buying from shops, selling useful gear, gathering profession materials, burning corpses into ash, and visiting player-run pubs and inns.

## Quick Start

- Keep spare coins in the bank
- Use the market for player-priced goods
- Use auctions for valuable one-off items
- Use [professions](professions.md) to gather, craft, and supply other players
- Visit pubs and inns for healing food and drink
- Burn corpses into ash and process that ash for coin
- Check business listings before bidding on a pub or inn

See [DarkWind City Services](city-services.md) for the beginner bank, shop, donation, and inn loop.

## Money And Banks

Coins carried on your character are convenient, but banks keep money safer and power several economy systems.

Banked money is used for item auctions, business bids, and multichar account sharing. Auction bids place a temporary lien on banked coins until the auction ends or another player outbids you.

Money on your character and in the bank persists through reboot. Bank storage and multichar banking are covered in [Multichars](multichars.md).

## Markets

The world market is a player-driven listing system. Sellers set their own prices, and buyers browse the available goods.

Items are listed from city markets, usually near a main shop. Buyers can purchase from market rooms, and high-level players gain remote market buying through [leveling](leveling.md).

Useful market commands:

| Command | Use |
| --- | --- |
| `marketcmds` | Show available market commands |
| `marketsell item for <cost>` | List an item for sale |
| `marketlist` | Show items for sale |
| `marketshow #` | Inspect a listed item |
| `marketbuy #` | Buy a listed item |
| `marketmylist` | Show your active listings this boot |
| `marketmysales` | Show your market sales this boot |

## Item Auctions

Item auctions are global, system-managed auctions for valuable items. Only one item auction runs at a time.

Useful auction commands:

| Command | Use |
| --- | --- |
| `auction <what> <starting bid> [extra info]` | Start an item auction |
| `auctioninfo` | Inspect the active auction |
| `bid <amount>` | Bid a specific amount |
| `bid up` | Bid the next valid amount |
| `auctionhelp` | Show auction rules |
| `stopauction` | Stop your auction before any bids are placed |

Auction rules:

- Starting bid begins at 1,000 coins or more
- Later bids increase by at least 250 coins
- The auctioneer keeps 10% of the starting bid
- Your bid is secured by a bank lien
- Cash on hand is not counted for item auction bids
- Worn, wielded, kept, temporary, living, and no-drop items are not valid auction goods
- Auctions with no bids expire after a short time

## Business Auctions

Pubs, inns, and similar establishments are handled through business auctions. These auctions use `Bid` with a capital `B`, which is separate from the normal item auction command.

Useful business commands:

| Command | Use |
| --- | --- |
| `buslist` | Show known businesses and their codes |
| `binfo <code>` | Show ownership info for a business |
| `Bid <code> <amount>` | Place a bid on a business |
| `Register` | Hear new business bid announcements |
| `Unregister` | Stop hearing business bid announcements |

Business auction notes:

- Bids are made with your primary character
- Bids are backed by banked coins and coins carried on you
- The current bid must be raised by about 100,000 coins
- A bank lien secures the bid until the auction ends or another player outbids you
- Business listings are worth reading before placing a bid

## Lottery

The DarkWind lottery is a raffle-style coin sink with a shared prize pot. Players buy tickets for the active drawing, and each ticket adds another chance to win.

Useful lottery commands:

| Command | Use |
| --- | --- |
| `buy ticket` | Buy one ticket |
| `buy <number> tickets` | Buy several tickets |
| `viewdetails` | Show the current pot, ticket count, and time remaining |
| `viewhistory [#]` | Show past lottery winners |

Lottery notes:

- Tickets cost 1,000 coins each
- Each player can buy up to 75 tickets per drawing
- Tickets are bought with coins carried on you
- The prize pot grows as players buy tickets
- Drawings run every 12 hours, with warnings before a winner is chosen
- Drawings without a winner roll their prize forward

## Player-Owned Pubs And Inns

Player-owned pubs and inns are part shop, part healing stop, and part long-term business project. Owners set the name, description, menu, pricing, staff, and operating status.

Pubs sell drinks, jugs, and kegs. Inns sell servings, snacks, and meals. Menu items restore HP, SP, or both, with higher healing values costing more.

Customer commands:

| Command | Use |
| --- | --- |
| `menu` | View the menu |
| `menu usable` | Show items you can use |
| `buy <number>` | Buy from the menu |
| `order <number>` | Order from the menu |
| `refill <container> with <number>` | Refill a container at a pub |
| `suggest <level> <hp> <sp>` | Send a menu suggestion to the owner |
| `topash` | Show ash-related standings where available |

Owner commands:

| Command | Use |
| --- | --- |
| `owners` | Show owner commands inside the business |
| `balance` | Show the business account |
| `deposit <amount>` | Add coins to the business account |
| `withdraw <amount>` | Remove coins from the business account |
| `open` | Open the business |
| `close` | Close the business |
| `setbusname <name>` | Rename the business |
| `setdesc` | Edit the business description |
| `add`, `delete`, `insert`, `moveitem` | Manage menu items |
| `setname`, `setmessage`, `sethp`, `setsp`, `setstrength`, `setmargin` | Tune menu items |
| `hire` | Change the server |
| `associate <player>` | Give another player associate access |
| `associates` | List associates |
| `sales` | Show sales reports |
| `expenses` | Show expense reports |
| `automail <days>` | Mail expense reports on a schedule |
| `topsales` | Show top customers |
| `checkash` | Check ash stock where available |

Owning a business means keeping the account funded, keeping the menu useful, watching sales, and adjusting prices. Rent, staff, and menu choices all affect profit.

Standard pub and inn menus support fare through Epic (level 200). Strength is
three halves of the intended consumer level, up to 300, and each use may heal
up to ten times its strength: 3,000 HP and 3,000 SP at the ceiling. Drinks,
servings, kegs, jugs, meals, and snacks use the same scale.

Business owners also receive a ceremonial owner key with owner-channel commands:

| Command | Use |
| --- | --- |
| `ownchat <message>` | Speak to other business owners |
| `eownchat <message>` | Emote on the owner channel |
| `ownhist` | Read owner channel history |
| `ownerlist` | List business owners |
| `ownhelp` | Show owner help |

## Corpse Ash

Corpse ash is a small economy of its own. A corpse burner stores ash from burned corpses, and ash processors pay coin for the ash you bring in.

Getting started:

- Find an ash processor
- `press button` or `push button` to receive a corpse burner
- Carry the burner while adventuring
- Use `set autosell on` if you want it to transmit ordinary sellable loot from
  NPC corpses directly to Taylor
- Or use `set autorefine on` to convert ordinary refinery-eligible NPC
  equipment directly into saved profession materials without carrying it
  back to town
- Use `burn corpse` or `burn all corpse` after fights
- Use `set autoburn on` to run `burn corpse` after your other automatic corpse
  processing finishes. Anything still inside the corpse will be destroyed.
- Use `check burner` to see stored ash
- Return to an ash processor and use `process all ash`

Ash commands:

| Command | Use |
| --- | --- |
| `burn corpse` | Burn one corpse into ash |
| `burn all corpse` | Burn all valid corpses in the room |
| `check burner` | Show stored grey, red, and blue ash |
| `set autoburn on` | Burn a corpse after other automatic corpse processing |
| `set autoburn off` | Stop automatically burning corpses |
| `set autosell on` | Automatically sell ordinary sellable loot from your kills |
| `set autosell off` | Stop automatically selling equipment |
| `set autorefine on` | Automatically convert eligible NPC equipment into profession materials |
| `set autorefine off` | Stop automatically refining equipment |
| `process all ash` | Sell all stored ash |
| `process <amount> <color> ash` | Sell a specific amount |
| `process all <color> ash` | Sell all ash of one color |
| `cinis` | Return to a nearby Adventurers' Guild after a cooldown |

Ash color comes from where the corpse was made. Grey ash is common around Darkwind. Red and blue ash come from other parts of the world and pay according to the current ash rates.

Autosell uses Taylor's normal appraisal, including your Charisma and your
reputation in his lawful market, then deducts a 10% handling charge. The
transmitted equipment enters Taylor's normal shop stock. Magical, unique,
limited, customized, scripted, cursed, kept, unsellable, and container items
are left behind for you to inspect or loot normally. Keys are always left in
the corpse so they can be collected onto your keyring.

Autosell and autorefine are mutually exclusive; enabling either option turns
the other off. Autorefine uses the same yields as the Refinery, requires no
corpse burner, and permanently consumes every ordinary refinery-eligible
equipment drop before autoloot runs. It leaves behind the same magical,
unique, limited, customized, scripted, cursed, kept, unsellable, and
container items that autosell protects. Leave autorefine off if you want to
inspect drops.

## Professions And Crafted Goods

[Professions](professions.md) are a major part of the player economy. Gathering professions bring in raw resources, manufacturing professions turn those resources into usable goods, and fishing creates meals for later use.

Economy uses for professions:

- Gather herbs, ore, hides, cloth, fish, and reagents
- Craft armor, potions, bags, food, and utility goods
- Sell materials to other crafters
- List finished goods on the market
- Auction rare or high-value crafted items
- Supply guildmates, clans, and player businesses

## Everyday Spending

Not every economy interaction is a major trade. Small spending adds up over a character's life.

Common money uses:

- Shop purchases
- Repairs and replacement gear
- Food, drink, and healing goods
- Profession tools and materials
- Market purchases
- Auction bids
- Business bids
- Travel services
- Storage and bank use
- Donations, tips, and player-to-player trades
