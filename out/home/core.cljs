(ns home.core)

(def $ window.$)

(enable-console-print!)

(defn nodelist-to-seq
  "convert a nodelist to sequence"
  [nodelist]
  (map #(.item nodelist %)
           (range nodelist.length)))

(defn get-href
  "get the href from the child of el"
  [el]
  (.attr (.children ($ el) 0) "href"))

(defn set-active!
  "makes a node .active"
  [el]
  (let [$el ($ el)]
    (.addClass $el "active")))

(defn unset-active!
  "remove a node's .active"
  [el]
  (let [$el ($ el)]
    (.removeClass $el "active")))

(def nav-links
  (nodelist-to-seq
    (js/document.querySelectorAll ".nav li")))

(defn set-active-nav!
  "set the active nav element on the navbar"
  []
  (let [route js/window.location.hash]
    (doseq [el nav-links]
      (let [href (get-href el)]
        (if
          (or (= href route)
              (and
                (= href "#")
                (= route "")))
          (set-active! el)
          (unset-active! el))))))

(set! js/window.onhashchange set-active-nav!)

(set-active-nav!)
