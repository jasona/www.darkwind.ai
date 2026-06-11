 
#include <mudlib.h>
inherit VEHICLE_ROOM;
 
void reset(int arg) {
  if (arg) return;
  ::reset(arg);
  add_exit("front","front");
  add_exit("secret","secret");
  set_short("The back room of Hayden's great test vehicle.");
  set_long("\
You are in the back room of Hayden's great test vehicle.\n");
  set_room_name("back");
  return;
}
 
