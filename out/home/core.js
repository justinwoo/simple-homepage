// Compiled by ClojureScript 0.0-3058 {}
goog.provide('home.core');
goog.require('cljs.core');
home.core.$ = window.$;
cljs.core.enable_console_print_BANG_.call(null);
/**
 * convert a nodelist to sequence
 */
home.core.nodelist_to_seq = (function home$core$nodelist_to_seq(nodelist){
return cljs.core.map.call(null,(function (p1__456_SHARP_){
return nodelist.item(p1__456_SHARP_);
}),cljs.core.range.call(null,nodelist.length));
});
/**
 * get the href from the child of el
 */
home.core.get_href = (function home$core$get_href(el){
return home.core.$.call(null,el).children((0)).attr("href");
});
/**
 * makes a node .active
 */
home.core.set_active_BANG_ = (function home$core$set_active_BANG_(el){
var $el = home.core.$.call(null,el);
return $el.addClass("active");
});
/**
 * remove a node's .active
 */
home.core.unset_active_BANG_ = (function home$core$unset_active_BANG_(el){
var $el = home.core.$.call(null,el);
return $el.removeClass("active");
});
home.core.nav_links = home.core.nodelist_to_seq.call(null,document.querySelectorAll(".nav li"));
/**
 * set the active nav element on the navbar
 */
home.core.set_active_nav_BANG_ = (function home$core$set_active_nav_BANG_(){
var route = window.location.hash;
var seq__461 = cljs.core.seq.call(null,home.core.nav_links);
var chunk__462 = null;
var count__463 = (0);
var i__464 = (0);
while(true){
if((i__464 < count__463)){
var el = cljs.core._nth.call(null,chunk__462,i__464);
var href_465 = home.core.get_href.call(null,el);
if((cljs.core._EQ_.call(null,href_465,route)) || ((cljs.core._EQ_.call(null,href_465,"#")) && (cljs.core._EQ_.call(null,route,"")))){
home.core.set_active_BANG_.call(null,el);
} else {
home.core.unset_active_BANG_.call(null,el);
}

var G__466 = seq__461;
var G__467 = chunk__462;
var G__468 = count__463;
var G__469 = (i__464 + (1));
seq__461 = G__466;
chunk__462 = G__467;
count__463 = G__468;
i__464 = G__469;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__461);
if(temp__4126__auto__){
var seq__461__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__461__$1)){
var c__3469__auto__ = cljs.core.chunk_first.call(null,seq__461__$1);
var G__470 = cljs.core.chunk_rest.call(null,seq__461__$1);
var G__471 = c__3469__auto__;
var G__472 = cljs.core.count.call(null,c__3469__auto__);
var G__473 = (0);
seq__461 = G__470;
chunk__462 = G__471;
count__463 = G__472;
i__464 = G__473;
continue;
} else {
var el = cljs.core.first.call(null,seq__461__$1);
var href_474 = home.core.get_href.call(null,el);
if((cljs.core._EQ_.call(null,href_474,route)) || ((cljs.core._EQ_.call(null,href_474,"#")) && (cljs.core._EQ_.call(null,route,"")))){
home.core.set_active_BANG_.call(null,el);
} else {
home.core.unset_active_BANG_.call(null,el);
}

var G__475 = cljs.core.next.call(null,seq__461__$1);
var G__476 = null;
var G__477 = (0);
var G__478 = (0);
seq__461 = G__475;
chunk__462 = G__476;
count__463 = G__477;
i__464 = G__478;
continue;
}
} else {
return null;
}
}
break;
}
});
window.onhashchange = home.core.set_active_nav_BANG_;
home.core.set_active_nav_BANG_.call(null);

//# sourceMappingURL=core.js.map