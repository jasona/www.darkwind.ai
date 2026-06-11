 
#include <mudlib.h>
inherit VEHICLE_ROOM;
 
void reset(int arg) {
  if (arg) return;
  ::reset(arg);
  add_exit("back","back");
  set_short("The secret room of Hayden's great test vehicle.");
  set_long("\
You are in the secret room of Hayden's great test vehicle.\n");
  set_room_name("secret");
  return;
}
 
