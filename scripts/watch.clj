(require 'cljs.closure)

(cljs.closure/watch "src"
  {:main 'home.core
   :output-to "out/main.js"})
