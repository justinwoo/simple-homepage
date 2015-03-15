(require 'cljs.closure)

(cljs.closure/build
  "src"
  {:main 'home.core
   :output-to "out/main.js"})
