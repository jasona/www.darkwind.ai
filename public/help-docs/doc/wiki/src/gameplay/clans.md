# Clans

Clans are player organizations outside the guild system. They provide social identity, shared space, clan channels, shared coffers, and optional warfare.

## What Clans Provide

- Clan channel
- Clan headquarters
- Shared item and equipment storage
- Shared coin coffers
- Custom clan emote
- Clan rankings and reputation
- Optional clan warfare

Clans are social first. A clan can remain peaceful if its leader never agrees to war.

## Creating A Clan

Creating a clan costs 1,000,000 coins. Clan dues cost 200,000 coins every 28 days and are deducted from the leader's bank account.

Clans are formed at the Clan Registrar office. The registrar gives the final in-game instructions.

## Ranks

Clans have two ranks:

- Leader
- Member

There is one leader. Everyone else is a member.

## Public Clan Commands

| Command | Use |
| --- | --- |
| `clans` | List clans |
| `claninfo <clan>` | Show information about a clan |
| `who <clan>` | Show online members of a clan |
| `wclan` | Show online clan members by reputation |
| `wclan leader` | Show online clan leaders |
| `cwar <#>` | Show a finished war |
| `cwar list` | List saved war records |

## Member Commands

| Command | Use |
| --- | --- |
| `cl <message>` | Speak on clan channel |
| `ecl <message>` | Emote on clan channel |
| `clhist` | Show clan channel history |
| `clwho` | Show online clanmates |
| `cstat` | Show clan statistics |
| `clleave` | Leave the clan |
| `clemote` | Use the clan emote |
| `cvote` | Vote on a clan issue |
| `checkclan` | Check for unread clan board messages |

## Headquarters Commands

| Command | Use |
| --- | --- |
| `cdeposit <coins>` | Deposit coins into clan coffers |
| `cwithdraw <coins>` | Withdraw coins from clan coffers |
| `cbalance` | Show clan coffers |

## Leader Commands

| Command | Use |
| --- | --- |
| `leadercmds` | Show leader commands |
| `cinitiate` | Add a player |
| `cdismiss` | Remove a player |
| `cdeclare` | Ask another clan leader to start a war |
| `changedesc` | Change a headquarters room description |
| `cdescribe` | Change clan info |
| `caddissue` | Add a vote issue |
| `cdelissue` | Remove a vote issue |
| `ctithe` | Set automatic clan tithe |

## Clan War

Clan wars begin only when both leaders agree. Wars last a set duration, with a minimum of 3 days.

During war:

- Members cannot join or leave the clans involved
- Kills against the enemy clan award points
- Normal PK status is ignored
- Non-PK members can kill and be killed by the enemy clan
- `cstat` shows ongoing war status
- `cwar` shows saved war records after the war

Low-risk clan wars do not use normal death penalties. High-risk clan wars treat deaths like PK.

