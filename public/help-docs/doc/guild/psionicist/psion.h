#include <mudlib.h>
#include <types.h>
#include <guildd.h>
#include <daemons.h>
 
#define GCMDS                       "/cmds/guilds/psion"   /* BINS Directory */
#define GEMOTES                     "/cmds/guilds/psion/emotes"
#define ME                          this_player()
#define MYNAME                      ME->query_name()
#define ALIGN                       ME->query_alignment()
#define STR                         ME->query_str()
#define DEX                         ME->query_dex()
#define CON                         ME->query_con()
#define CHR                         ME->query_chr()
#define INT                         ME->query_int()
#define WIS                         ME->query_wis()
#define LEVEL                       ME->query_level()
#define GHOST                       ME->query_ghost()
#define SP                          ME->query_spell_points()
#define POSS                        ME->query_possessive()   /* his/her/its */
#define OBJECTIVE                   ME->query_objective()    /* it/him/her  */
#define PRONOUN                     ME->query_pronoun()      /* it/he/she   */
#define ATTACKING                   ME->query_attack()
#define PKILL                       ME->query_pkill()
#define CAP(str)                    capitalize(str)
#define ENV(ob)                     environment(ob)
#define PSIDOCS                     "/doc/guild/psionicist/"
#define PSIOBJECTS                  "/guilds/psion/objects/"
#define PSIROOMS                    "/guilds/psion/rooms/"
#define SOUL                        present("psionicist_object",ME)
#define GLEVEL                      SOUL->get_gl()
#define DO_LIMIT(x)                 SOUL->set_limit(x)
#define DO_CAST(str)                SOUL->cast_time(str)
#define RSP(x)                      SOUL->do_restore(x)
#define FAIL(str)                   write("|RKB"+str);\
        return 1;

#define CAST_CHECK                  if (!present("casting_ob",ME)) {\
          return 0; } else {\
          if (SOUL->query_pid() != present("casting_ob",ME)->query_pid()) return 0;\
          destruct(present("casting_ob",ME));\
        }
#define GHOST_CHECK             if(GHOST) {\
          FAIL("You cannot use your powers while you are a ghost.\n");\
        }
#define NO_KILL_CHECK          if (ENV(ME)->query_no_kill()) {\
          FAIL("Attacks may not be made here.\n");\
        }
#define RESIST_CHECK(ob)            if ((random(100)+1) < ob->query_psi_resistance()) {\
          FAIL(CAP(ob->query_name())+" has resisted the attack!\n");\
        }
#define PRESENT_CHECK(str)          if (!present(str)) {\
          FAIL(CAP(str)+" is not here.\n");\
        }
#define PK_CHECK(ob)\
  if ((!ME->query_pkill() && !ob->query_npc()) || (!ob->query_pkill()\
                          && !ob->query_npc())) {\
  FAIL("That is against playerkilling restrictions!\n");\
        }
#define G_LEVEL_CHECK(x)            if (GLEVEL < x) {\
          FAIL("You are not skilled enough to do that yet.\n");\
        }
#define SP_CHECK(x)                 if (SP < x) {\
          FAIL("You don't have enough spell points for that.\n");\
        }
#define TIME_CHECK                  if (SOUL->query_limit() > time()) {\
          FAIL("You need more time to collect your thoughts.\n");\
        }
#define ME_CHECK(ob)                    if (ob == ME) {\
          FAIL("You don't really want to do that to yourself.\n");\
        }
#define WIZ_CHECK(ob)               if (ob->query_level() >= APPRENTICE) {\
          if(LEVEL < APPRENTICE) {\
FAIL("You can't do that to a wizard!\n");\
        }\
        }
#define LIVING_CHECK(ob)                if (!living(ob)) {\
          FAIL(CAP(ob->query_name()) + " isn't even alive!\n");\
        }
#define SOUL_CHECK                      if(!SOUL) {\
          FAIL("You have lost your diadem!  Go get another!\n");\
        }
#define POWER_CHECK(str)                 if(!(SOUL->has_power(str))) {\
          FAIL("You have not learned that power yet.\n");\
          SOUL->do_enhanced();\
          SOUL->do_limited();\
          SOUL->set_current(str);\
          SOUL->do_splice();\
        } else if (ME->query_inactive("Psionicist")) {\
          FAIL("You don't have the use of your Psionicist powers right now.\n");\
        }
 
#define POWERS ([\
"Guild Chat"        :       1;       0;         0,\
"Dual Mind"         :       4;       4;         0,\
"Hypnotize"         :       1;       1;         2,\
"Psionic Blast"     :       5;       3;        15,\
"Suggestion"        :       2;       2;         5,\
"Precognition"      :       2;       2;         5,\
"Clairvoyance"      :       2;       1;         0,\
"Clairaudience"     :       2;       2;         0,\
"Enhance"           :       3;       2;         0,\
"Limit"             :       3;       2;         0,\
"Pyrokinesis"       :       1;       2;        10,\
"Probe"             :      11;       4;        10,\
"Mental Beacon"     :      14;       4;        20,\
"Mental Blow"       :       3;       2;         8,\
"Ultrablast"        :      18;       7;        20,\
"Brainwave"         :       8;       3;        15,\
"Mindlink"          :       1;       1;         0,\
"Teleport"          :       5;       4;         3,\
"Animate Weapon"    :      15;       4;         8,\
"Increase Density"  :       5;       3;         20,\
"Inertial Barrier"  :       6;       3;         5,\
"Rejuvenation"      :       2;       4;         0,\
"Adrenaline Control":       5;       2;         5,\
"Damage Absorption" :       3;       3;         5,\
"Displace"          :      13;       4;         12,\
"Double Pain"       :       9;       2;         8,\
"Lend Health"       :       2;       2;         5,\
"Banish"            :      17;       6;         8,\
"Dream Reality"     :      15;    3;    20,\
"Timeshift"         :      15;    4;     5,\
"Awe"               :       2;       1;         5,\
"Alter Aura"        :       3;       1;         3,\
"Psychic Reserve"   :       7;       1;         5,\
"Judge"             :       3;       2;        5,\
"Obscure"           :      13;       3;         5,\
"Teleport Object"   :       3;       3;         5,\
"Create Image"      :       6;       1;        10,\
"Combat Teleport"   :       1;       1;         3,\
"Crystalize"        :       2;       2;        10,\
"Power Mastery"     :      12;       3;         0,\
"Blindness"         :       4;       1;         5,\
"Reduce Weight"     :       4;       2;        20,\
"Psychic Crush"     :      16;       5;        10,\
"Telekinetic Storm" :       7;       3;        10,\
"Inflict Pain"      :      12;       2;         8,\
"Ectoplasmic Form"  :       5;       2;        30,\
"Repulsion Field"   :      13;       4;        10,\
"Project Thought"   :       2;       2;         0,\
"Thought Shield"    :       8;       2;         5,\
"Recall"            :       1;       1;         0,\
"Enlighten"         :       1;       2;        0,\
"Grand Master Chat" :      18;       1;         0,\
"Psychometry"       :       3;       2;        10,\
"Emotion Control"   :      10;       3;         5,\
"Clear Mind"        :       3;       2;         5,\
"Telepathic Strike" :       8;       3;        30,\
"Psionic Prodigy"   :       1;       3;         0,\
"Imprint"           :       1;      1;         0,\
"Channel"           :       3;       2;         5,\
"Psionic Profile"   :       3;       1;         0,\
"Psychic Splice"    :      10;       4;        10,\
])
 
