CLJS_START=java -cp cljs.jar:src clojure.main

build:
	$(CLJS_START) scripts/build.clj

watch:
	$(CLJS_START) scripts/watch.clj

repl:
	rlwrap $(CLJS_START) scripts/repl.clj

cljsrepl:
	$(CLJS_START)

install:
	wget https://github.com/clojure/clojurescript/releases/download/r3058/cljs.jar
