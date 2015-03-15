(ns home.core)

(def $ window.$)

(enable-console-print!)

(defn nodelist-to-seq
  "convert a nodelist to sequence NOW"
  [nodelist]
  (map #(.item nodelist %)
           (range nodelist.length)))

(defn scream-your-innerText
  "makes a node scream its innertext"
  [el]
  (println el.innerText))

(defn set-active
  "makes a node .active"
  [el]
  (let [$el ($ el)]
    (.addClass $el "active")))

(defn unset-active
  "remove a node's .active"
  [el]
  (let [$el ($ el)]
    (.removeClass $el "active")))

(def nav-links
  (nodelist-to-seq
    (js/document.querySelectorAll ".nav li")))

(doseq [el nav-links]
  (do (scream-your-innerText el)
      (set-active el)))
