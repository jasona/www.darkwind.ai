# Communication

DarkWind is a social game. Most help, trading, parties, guild support, and rescue work begins by talking to someone.

## Basic Speech

| Command | Use |
| --- | --- |
| `say <message>` | Speak to people in the same room |
| `' <message>` | Short form of `say` |
| `tell <player> <message>` | Send a private message |
| `reply <message>` | Reply to the last tell |
| `replyto <player>` | Set who `reply` targets |
| `whisper <player> <message>` | Whisper in the same room |
| `shout <message>` | Speak over a public line |
| `converse` | Enter a conversation mode |

## Newbie Channel

New players can use the newbie channel to ask questions.

| Command | Use |
| --- | --- |
| `newbie <message>` | Speak on the newbie channel |
| `enewbie <message>` | Emote on the newbie channel |
| `tune newbie off` | Stop listening to newbie |
| `tune newbie on` | Listen to newbie again |

The newbie channel is for new-player help. Levels 6 through 20 appear with a
`(Newer)` tag; more experienced players appear as `(Helper)`. Broader gameplay
discussion belongs on `game`; off-topic social chat belongs on `gossip`.

## Channels

Channels connect players across the world. Guilds, clans, parties, and special groups have their own lines.

| Command | Use |
| --- | --- |
| `game <message>` | Discuss Darkwind gameplay, builds, areas, mechanics, and events |
| `egame <message>` | Emote on the game channel |
| `game :<emote>` | Use a channel soul emote on game |
| `gamehist [lines]` | Read recent game-channel history |
| `gossip <message>` | Off-topic social chat |
| `egossip <message>` | Emote on gossip |
| `gossiphist [lines]` | Read recent gossip history |
| `chanhist <channel> [lines]` | Read recent history for any channel you can access |

Common channel patterns:

- `<channel> <message>` to speak
- `e<channel> <message>` to emote
- `<channel>hist` to read recent history where available
- `chanhist <channel> [lines]` to read any channel history you can access
- `tune <channel> off` to stop hearing a channel
- `tune <channel> on` to hear it again

## Conversation Mode

`converse` keeps you in conversation mode until you type `**`.

This is useful for longer room conversations where repeatedly typing `say` gets annoying.

## Mail

Mudmail is useful when the other player is offline.

| Command | Use |
| --- | --- |
| `mail` | Open your mail reader |
| `checkmail` | Check for new mail |
| `readmail` | Enter the mail system |
| `closemail` | Close your mail reader |
| `mail <player>` | Send mail when your reader is loaded |

Inside the mail prompt, `?` shows available mail commands.

## Language

Some characters speak languages other than yours. If your speech is not understood, use:

`set language common`

Useful language and social commands:

| Command | Use |
| --- | --- |
| `set language <language>` | Change spoken language |
| `say in <language> <message>` | Speak in a known language |
| `rsay <message>` | Speak in your racial language |
| `csay <message>` | Speak in common |
| `ignore <player>` | Ignore a player |
| `ignore list` | Show ignored players |
| `unignore <player>` | Stop ignoring a player |
| `virginears` | Toggle profanity filtering |
| `away <message>` | Mark yourself away where available |

## Emotes And Feelings

Emotes are nonspoken social actions.

| Command | Use |
| --- | --- |
| `feelings` | List standard feelings |
| `feelings <prefix>` | List feelings beginning with a prefix |
| `feelings guild [<guild>] [<prefix>]` | List accessible guild feelings |
| `semote <feeling>` | Preview an emote |
| `emotelist` | List emotes where available |
| `emoteapropos <text>` | Search emotes where available |
| `emoteapropos guild [<guild>] <text>` | Search accessible guild emotes |
| `random [<player>]` | Invoke a random available global or guild emote |

Guild emotes use the normal targeting and perspective system but can only be
invoked by active members of their guild. Guild channel commands that support
colon emotes can use them directly, such as `samchat :<emote>`. Leaving a guild
or deactivating its abilities immediately removes access to its emotes.

## Away Messages

Use `away <message>` to mark yourself AFK. The message is sent automatically to players who send you tells.

Type `away` with no message to return.

## Newspaper

The DarkWind Times is the official newspaper. It prints player gossip and world notes, and is sold at the editor's office on the east side of town.

Freelance articles can be posted on the journalism board at the editor's office.

## Good Habits

- Ask questions early
- Use tells for direct help
- Keep quest spoilers off public channels
- Use party, clan, and guild channels for group coordination
- Report bugs instead of arguing about them on public lines
- Respect `ignore`; do not work around it with another channel or character
