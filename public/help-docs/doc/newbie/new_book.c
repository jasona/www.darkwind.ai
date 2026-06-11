// Cleaned up by Rodney - 8-Sep-1997

#include <mudlib.h>
inherit TREASURE;

#define NEWBIE_DIR "/doc/newbie/"
#define GUILD_DIR  "/doc/guild/"
#define WIZARD_DIR "/doc/wizard/"
 
#define VALID_GUILD ({\
"bard",\
"charlatan",\
"clericmitra",\
"druid",\
"fighter",\
"garou",\
"lunar",\
"mage",\
"morpher",\
"necro",\
"ninja",\
"psionicist",\
"set",\
"swashbuckler",\
"thief",\
})
 
void reset(int arg) {
  ::reset(arg);
  if (arg)
    return;
  set_id("tome");
  set_short("Newbies' Tome of Adventuring");
  set_long("\
This tome contains all the information needed to get a new player\n\
started on DarkWind.  For more information, \"read tome\".\n");
  set_value(0);
  set_weight(1);
  set_type("book");
}
 
status get() { return 0; }
 
void init() {
  ::init();
  add_action("read","read");
  add_action("information","checkout");
}
 
int read(string str) {
  if (!str) {
    notify_fail("Read what?\n");
    return(0);
  }
  switch(str) {
    case "tome":
      write("\
Welcome to DarkWind.  This guide should help you get started here\n\
as well as give you an idea about just what we are.  The book is\n\
divided into chapters depending on your desired topic.  The current\n\
chapters are:\n\n\
   1.  Theme of DarkWind.\n\
   2.  History of the Land.\n\
   3.  Combat.\n\
   4.  Healing.\n\
   5.  Map of the City of Darkwind.\n\
   6.  Guilds.\n\
   7.  Races.\n\
   8.  Weapon Specialization.\n\
   9.  Weapons and Armours.\n\
   10. Defending DarkWind from Hostle Invasions.\n\
   11. Shops/Stores/Inns/etc in Darkwind.\n\
   12. Player Killing.\n\
   13. Life Beyond Level 20.\n\
   14. Nobles and Rulers of DarkWind.\n\
   15. Wizardhood on DarkWind.\n\n\
To read a particular chapter, just \"read chapter <#>\"\n");
      break;
    case "chapter 1"  : more(NEWBIE_DIR + "theme");     break;
    case "chapter 2"  : more(NEWBIE_DIR + "history");   break;
    case "chapter 3"  : more(NEWBIE_DIR + "combat");    break;
    case "chapter 4"  : more(NEWBIE_DIR + "healing");   break;
    case "chapter 5"  : more(WIZARD_DIR + "city");      break;
    case "chapter 6"  :
      write(wrap("These guilds are currently open: " + 
english_list(VALID_GUILD) + ".\n"));
      more(NEWBIE_DIR + "guilds");
      break;
    case "chapter 7"  : more(NEWBIE_DIR + "races");     break;
    case "chapter 8"  : more(NEWBIE_DIR + "special");   break;
    case "chapter 9"  : more(NEWBIE_DIR + "weap_arm");  break;
    case "chapter 10" : more(NEWBIE_DIR + "invasion");  break;
    case "chapter 11" : more(NEWBIE_DIR + "shop_inn");  break;
    case "chapter 12" : more(NEWBIE_DIR + "pk");        break;
    case "chapter 13" : more(NEWBIE_DIR + "past_20");   break;
    case "chapter 14" : more(NEWBIE_DIR + "nobles");    break;
    case "chapter 15" : more(NEWBIE_DIR + "wizardhd");  break;
    default: notify_fail("That is not a valid chapter of the tome.\n"); return(0);
  }
  return(1);
}
 
int information(string str) {
  if (!str) {
    notify_fail("Which guild do you wish to find out more about?\n");
    return 0;
  }
  str = lower_case(str);
  if (str == "cleric_set" || str == "clericset" ||
      str == "priestsofset" || str == "priests of set") {
    str = "set";
  }
  if (member_array(str, VALID_GUILD) == -1) {
    notify_fail("That is not an existing guild.\n");
    return 0;
  } else {
    more(GUILD_DIR + str + "/intro");
    say(capitalize(this_player()->query_name()) + "\
 reads the page about the "+ str + " guild.\n");
  }
  return 1;
}
