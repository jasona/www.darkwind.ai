SHELL=/bin/sh
MAKE=make

TAR=gtar
TAROPTS=cvzf
TARDEST=/usr/local/tar/games/lpmud/driver-docs-3.2.1@133-
#TARDATE=19-Sep-94
TARDATE=`date +%y-%m-%d`
TARSUFFIX=.tar.gz
TARFILES=docs/Makefile docs/README docs/TODO docs/man2tex.awk \
	docs/3.2vs3.2.1 docs/LPC docs/applied docs/concepts docs/driver \
	docs/efun docs/master

default:
	@echo make tar

tar:
	$(TAR) $(TAROPTS) $(TARDEST)$(TARDATE)$(TARSUFFIX) $(TARFILES)
