/* init_scroll.c */
/* redone by Alarian@DarkWind 11-6-94 */
 
/* This object will autoload and cannot be dropped. The wizard holding it */
/* must actually destruct it to get rid of it. This to prevent him from   */
/* losing information he badly needs in the beginning.                    */
 
#include <mudlib.h>
inherit TREASURE;
int hush_up;
 
 
void reset(int arg) {
 if (arg) return;
  ::reset(arg);
  set_name("scroll");
  set_short("Scroll");
  set_long("\
The scroll is held rolled up with an blue and yellow band tied\n\
around its middle. On the band the text 'READ ME!' is written\n\
in golden letters.\n");
  hush_up = 0;
}
 
/*
 * Function name: get
 * Description:   Gettable.
 */
 
void init() {
 ::init();
  add_action("read_rules", "rules");
  add_action("read_scroll", "read");
  add_action("hush", "quit");
}
 
drop() {
  if(!hush_up) write("Don't drop the scroll, it contains valuable information!\n");
  return 1;
}
 
get() { return 1; }
query_auto_load() { return "doc/examples/init_scroll:"; }
hush() { hush_up = 1; return 0; }
 
int read_scroll(string str) {
  if (str == "scroll") {
    log_file("examples.scroll", capitalize(this_player()->query_real_name()) + " has read the scroll. " + ctime(time()) + "\n");
    more("/doc/examples/init_text");
    return 1;
  }
  if (str == "rules") {
    log_file("examples.scroll", capitalize(this_player()->query_real_name()) + " has read the RULES. " + ctime(time()) + "\n");
    more("/doc/examples/rules");
    return 1;
  }
  if (str == "basics") {
    log_file("examples.scroll", capitalize(this_player()->query_real_name()) + " has read the basics. " + ctime(time()) + "\n");
    more("/doc/examples/basics");
    return 1;
  }
  return 0;
}
