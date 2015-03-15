// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__103_107 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__104_108 = null;
var count__105_109 = (0);
var i__106_110 = (0);
while(true){
if((i__106_110 < count__105_109)){
var f_111 = cljs.core._nth.call(null,chunk__104_108,i__106_110);
cljs.core.println.call(null,"  ",f_111);

var G__112 = seq__103_107;
var G__113 = chunk__104_108;
var G__114 = count__105_109;
var G__115 = (i__106_110 + (1));
seq__103_107 = G__112;
chunk__104_108 = G__113;
count__105_109 = G__114;
i__106_110 = G__115;
continue;
} else {
var temp__4126__auto___116 = cljs.core.seq.call(null,seq__103_107);
if(temp__4126__auto___116){
var seq__103_117__$1 = temp__4126__auto___116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__103_117__$1)){
var c__3469__auto___118 = cljs.core.chunk_first.call(null,seq__103_117__$1);
var G__119 = cljs.core.chunk_rest.call(null,seq__103_117__$1);
var G__120 = c__3469__auto___118;
var G__121 = cljs.core.count.call(null,c__3469__auto___118);
var G__122 = (0);
seq__103_107 = G__119;
chunk__104_108 = G__120;
count__105_109 = G__121;
i__106_110 = G__122;
continue;
} else {
var f_123 = cljs.core.first.call(null,seq__103_117__$1);
cljs.core.println.call(null,"  ",f_123);

var G__124 = cljs.core.next.call(null,seq__103_117__$1);
var G__125 = null;
var G__126 = (0);
var G__127 = (0);
seq__103_107 = G__124;
chunk__104_108 = G__125;
count__105_109 = G__126;
i__106_110 = G__127;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__3102__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3102__auto__)){
return or__3102__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map