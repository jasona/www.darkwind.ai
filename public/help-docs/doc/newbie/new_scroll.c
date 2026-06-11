#include <mudlib.h>
inherit TREASURE;
 
reset(arg) {
  ::reset(arg);
  if(arg) return;
 
  set_id("wood");
  set_alias("scroll");
  set_short("A scroll");
  set_long("A scroll with 'read scroll' written on the outside of it.\n");
  set_value(0);
  set_weight(0);
  set_type("scroll");
}
 
init() {
  ::init();
  add_action("read","read");
  add_action("drop","drop");
}
 
read(str) {
  if (str == "scroll") {
    more("/doc/newbie/newbie_scroll");
    return 1;
  }
}
 
drop(str) {
  if (str == "scroll") {
    write("\
As the piece of parchment falls from your fingers, it suddenly crumbles\n\
into pieces and is carried off by the wind.\n");
    say("\
As "+ this_player()->query_name() + " drops a scroll, the scroll\n\
falls into pieces and is carried away by the wind.\n");
    destruct(this_object());
    return 1;
  }
}

