#include <mudlib.h>
inherit VEHICLE;
 
void reset(int arg) {
  if (arg) return;
  ::reset(arg);
  set_short("a testing vehicle");
  set_name("A Big Testing Vehicle");
  set_alias("vehicle");
  set_alias("tester");
  set_long("\
The testing vehicle is odd looking.  It is very small, the size of a pea.\n");
  set_listen(1);
  set_rooms_path("/players/hayden/vehicles/");
  set_addition_path("/players/hayden/vehicles/");
  add_addition("standard.c");
  set_arrival("The vehicle arrives!\n");
  set_departure("The vehicle departs");
  set_max_players(2);
  set_bad_terrain("city");
  set_bad_terrain("inside");
  init_vehicle();
  return;
}
 
void init() {
  ::init();
  add_action("enter_func","enter");
}
