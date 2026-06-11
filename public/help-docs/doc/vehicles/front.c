 
#include <mudlib.h>
inherit VEHICLE_ROOM;
 
void reset(int arg) {
  ::reset(arg);
  if (arg) return;
  add_exit("leave","none");
  add_exit("back","back");
  set_short("The front room of Hayden's great test vehicle.");
  set_long("\
You are in the front room of Hayden's great test vehicle.\n");
  set_room_name("front");
}
 
void init() {
  ::init();
  add_action("leave_func","leave");
  add_action("move_func","float");
  add_action("move_func","f");
  add_action("look_outside_func","peer");
}
 
