/*! jQuery Easing v1.3
 * http://gsgd.co.uk/sandbox/jquery/easing/
 */
(jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, i, r) {
      return jQuery.easing[jQuery.easing.def](e, t, n, i, r);
    },
    easeInQuad: function (e, t, n, i, r) {
      return i * (t /= r) * t + n;
    },
    easeOutQuad: function (e, t, n, i, r) {
      return -i * (t /= r) * (t - 2) + n;
    },
    easeInOutQuad: function (e, t, n, i, r) {
      return (t /= r / 2) < 1
        ? (i / 2) * t * t + n
        : (-i / 2) * (--t * (t - 2) - 1) + n;
    },
    easeInCubic: function (e, t, n, i, r) {
      return i * (t /= r) * t * t + n;
    },
    easeOutCubic: function (e, t, n, i, r) {
      return i * ((t = t / r - 1) * t * t + 1) + n;
    },
    easeInOutCubic: function (e, t, n, i, r) {
      return (t /= r / 2) < 1
        ? (i / 2) * t * t * t + n
        : (i / 2) * ((t -= 2) * t * t + 2) + n;
    },
    easeInQuart: function (e, t, n, i, r) {
      return i * (t /= r) * t * t * t + n;
    },
    easeOutQuart: function (e, t, n, i, r) {
      return -i * ((t = t / r - 1) * t * t * t - 1) + n;
    },
    easeInOutQuart: function (e, t, n, i, r) {
      return (t /= r / 2) < 1
        ? (i / 2) * t * t * t * t + n
        : (-i / 2) * ((t -= 2) * t * t * t - 2) + n;
    },
    easeInQuint: function (e, t, n, i, r) {
      return i * (t /= r) * t * t * t * t + n;
    },
    easeOutQuint: function (e, t, n, i, r) {
      return i * ((t = t / r - 1) * t * t * t * t + 1) + n;
    },
    easeInOutQuint: function (e, t, n, i, r) {
      return (t /= r / 2) < 1
        ? (i / 2) * t * t * t * t * t + n
        : (i / 2) * ((t -= 2) * t * t * t * t + 2) + n;
    },
    easeInSine: function (e, t, n, i, r) {
      return -i * Math.cos((t / r) * (Math.PI / 2)) + i + n;
    },
    easeOutSine: function (e, t, n, i, r) {
      return i * Math.sin((t / r) * (Math.PI / 2)) + n;
    },
    easeInOutSine: function (e, t, n, i, r) {
      return (-i / 2) * (Math.cos((Math.PI * t) / r) - 1) + n;
    },
    easeInExpo: function (e, t, n, i, r) {
      return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n;
    },
    easeOutExpo: function (e, t, n, i, r) {
      return t == r ? n + i : i * (1 - Math.pow(2, (-10 * t) / r)) + n;
    },
    easeInOutExpo: function (e, t, n, i, r) {
      return 0 == t
        ? n
        : t == r
        ? n + i
        : (t /= r / 2) < 1
        ? (i / 2) * Math.pow(2, 10 * (t - 1)) + n
        : (i / 2) * (2 - Math.pow(2, -10 * --t)) + n;
    },
    easeInCirc: function (e, t, n, i, r) {
      return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n;
    },
    easeOutCirc: function (e, t, n, i, r) {
      return i * Math.sqrt(1 - (t = t / r - 1) * t) + n;
    },
    easeInOutCirc: function (e, t, n, i, r) {
      return (t /= r / 2) < 1
        ? (-i / 2) * (Math.sqrt(1 - t * t) - 1) + n
        : (i / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + n;
    },
    easeInElastic: function (e, t, n, i, r) {
      var o = 1.70158,
        a = 0,
        s = i;
      return 0 == t
        ? n
        : 1 == (t /= r)
        ? n + i
        : (a || (a = 0.3 * r),
          s < Math.abs(i)
            ? ((s = i), (o = a / 4))
            : (o = (a / (2 * Math.PI)) * Math.asin(i / s)),
          -s *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * r - o) * (2 * Math.PI)) / a) +
            n);
    },
    easeOutElastic: function (e, t, n, i, r) {
      var o = 1.70158,
        a = 0,
        s = i;
      return 0 == t
        ? n
        : 1 == (t /= r)
        ? n + i
        : (a || (a = 0.3 * r),
          s < Math.abs(i)
            ? ((s = i), (o = a / 4))
            : (o = (a / (2 * Math.PI)) * Math.asin(i / s)),
          s *
            Math.pow(2, -10 * t) *
            Math.sin(((t * r - o) * (2 * Math.PI)) / a) +
            i +
            n);
    },
    easeInOutElastic: function (e, t, n, i, r) {
      var o = 1.70158,
        a = 0,
        s = i;
      return 0 == t
        ? n
        : 2 == (t /= r / 2)
        ? n + i
        : (a || (a = r * (0.3 * 1.5)),
          s < Math.abs(i)
            ? ((s = i), (o = a / 4))
            : (o = (a / (2 * Math.PI)) * Math.asin(i / s)),
          1 > t
            ? s *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t * r - o) * (2 * Math.PI)) / a) *
                -0.5 +
              n
            : s *
                Math.pow(2, -10 * (t -= 1)) *
                Math.sin(((t * r - o) * (2 * Math.PI)) / a) *
                0.5 +
              i +
              n);
    },
    easeInBack: function (e, t, n, i, r, o) {
      return (
        null == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n
      );
    },
    easeOutBack: function (e, t, n, i, r, o) {
      return (
        null == o && (o = 1.70158),
        i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
      );
    },
    easeInOutBack: function (e, t, n, i, r, o) {
      return (
        null == o && (o = 1.70158),
        (t /= r / 2) < 1
          ? (i / 2) * (t * t * ((1 + (o *= 1.525)) * t - o)) + n
          : (i / 2) * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + n
      );
    },
    easeInBounce: function (e, t, n, i, r) {
      return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n;
    },
    easeOutBounce: function (e, t, n, i, r) {
      return (t /= r) < 1 / 2.75
        ? i * (7.5625 * t * t) + n
        : 2 / 2.75 > t
        ? i * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + n
        : 2.5 / 2.75 > t
        ? i * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + n
        : i * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + n;
    },
    easeInOutBounce: function (e, t, n, i, r) {
      return r / 2 > t
        ? 0.5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n
        : 0.5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) +
            0.5 * i +
            n;
    },
  }),
  (function (e, t) {
    function n() {
      var e = m.elements;
      return "string" == typeof e ? e.split(" ") : e;
    }
    function i(e) {
      var t = p[e[d]];
      return t || ((t = {}), f++, (e[d] = f), (p[f] = t)), t;
    }
    function r(e, n, r) {
      return (
        n || (n = t),
        l
          ? n.createElement(e)
          : (r || (r = i(n)),
            !(o = r.cache[e]
              ? r.cache[e].cloneNode()
              : h.test(e)
              ? (r.cache[e] = r.createElem(e)).cloneNode()
              : r.createElem(e)).canHaveChildren ||
            c.test(e) ||
            o.tagUrn
              ? o
              : r.frag.appendChild(o))
      );
      var o;
    }
    function o(e, t) {
      t.cache ||
        ((t.cache = {}),
        (t.createElem = e.createElement),
        (t.createFrag = e.createDocumentFragment),
        (t.frag = t.createFrag())),
        (e.createElement = function (n) {
          return m.shivMethods ? r(n, e, t) : t.createElem(n);
        }),
        (e.createDocumentFragment = Function(
          "h,f",
          "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
            n()
              .join()
              .replace(/[\w\-:]+/g, function (e) {
                return (
                  t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                );
              }) +
            ");return n}"
        )(m, t.frag));
    }
    function a(e) {
      e || (e = t);
      var n = i(e);
      return (
        !m.shivCSS ||
          s ||
          n.hasCSS ||
          (n.hasCSS = !!(function (e, t) {
            var n = e.createElement("p"),
              i = e.getElementsByTagName("head")[0] || e.documentElement;
            return (
              (n.innerHTML =
                "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>"),
              i.insertBefore(n.lastChild, i.firstChild)
            );
          })(e)),
        l || o(e, n),
        e
      );
    }
    var s,
      l,
      u = e.html5 || {},
      c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      h =
        /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      d = "_html5shiv",
      f = 0,
      p = {};
    !(function () {
      try {
        var e = t.createElement("a");
        (e.innerHTML = "<xyz></xyz>"),
          (s = "hidden" in e),
          (l =
            1 == e.childNodes.length ||
            (function () {
              t.createElement("a");
              var e = t.createDocumentFragment();
              return (
                void 0 === e.cloneNode ||
                void 0 === e.createDocumentFragment ||
                void 0 === e.createElement
              );
            })());
      } catch (e) {
        (s = !0), (l = !0);
      }
    })();
    var m = {
      elements:
        u.elements ||
        "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
      version: "3.7.3",
      shivCSS: !1 !== u.shivCSS,
      supportsUnknownElements: l,
      shivMethods: !1 !== u.shivMethods,
      type: "default",
      shivDocument: a,
      createElement: r,
      createDocumentFragment: function (e, r) {
        if ((e || (e = t), l)) return e.createDocumentFragment();
        for (
          var o = (r = r || i(e)).frag.cloneNode(),
            a = 0,
            s = n(),
            u = s.length;
          u > a;
          a++
        )
          o.createElement(s[a]);
        return o;
      },
      addElements: function (e, t) {
        var n = m.elements;
        "string" != typeof n && (n = n.join(" ")),
          "string" != typeof e && (e = e.join(" ")),
          (m.elements = n + " " + e),
          a(t);
      },
    };
    (e.html5 = m),
      a(t),
      "object" == typeof module && module.exports && (module.exports = m);
  })("undefined" != typeof window ? window : this, document),
  /*! Respond.js v1.3.0
   * (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs
   */
  (function (e) {
    "use strict";
    function t() {
      w(!0);
    }
    var n = {};
    if (
      ((e.respond = n),
      (n.update = function () {}),
      (n.mediaQueriesSupported =
        e.matchMedia && e.matchMedia("only all").matches),
      !n.mediaQueriesSupported)
    ) {
      var i,
        r,
        o,
        a = e.document,
        s = a.documentElement,
        l = [],
        u = [],
        c = [],
        h = {},
        d = a.getElementsByTagName("head")[0] || s,
        f = a.getElementsByTagName("base")[0],
        p = d.getElementsByTagName("link"),
        m = [],
        v = function () {
          for (var t = 0; p.length > t; t++) {
            var n = p[t],
              i = n.href,
              r = n.media,
              o = n.rel && "stylesheet" === n.rel.toLowerCase();
            i &&
              o &&
              !h[i] &&
              (n.styleSheet && n.styleSheet.rawCssText
                ? (y(n.styleSheet.rawCssText, i, r), (h[i] = !0))
                : ((!/^([a-zA-Z:]*\/\/)/.test(i) && !f) ||
                    i.replace(RegExp.$1, "").split("/")[0] ===
                      e.location.host) &&
                  m.push({ href: i, media: r }));
          }
          g();
        },
        g = function () {
          if (m.length) {
            var t = m.shift();
            C(t.href, function (n) {
              y(n, t.href, t.media),
                (h[t.href] = !0),
                e.setTimeout(function () {
                  g();
                }, 0);
            });
          }
        },
        y = function (e, t, n) {
          var i = e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),
            r = (i && i.length) || 0,
            o = function (e) {
              return e.replace(
                /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
                "$1" + t + "$2$3"
              );
            },
            a = !r && n;
          (t = t.substring(0, t.lastIndexOf("/"))).length && (t += "/"),
            a && (r = 1);
          for (var s = 0; r > s; s++) {
            var c, h, d, f;
            a
              ? ((c = n), u.push(o(e)))
              : ((c = i[s].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1),
                u.push(RegExp.$2 && o(RegExp.$2))),
              (f = (d = c.split(",")).length);
            for (var p = 0; f > p; p++)
              (h = d[p]),
                l.push({
                  media:
                    (h.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) &&
                      RegExp.$2) ||
                    "all",
                  rules: u.length - 1,
                  hasquery: h.indexOf("(") > -1,
                  minw:
                    h.match(
                      /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/
                    ) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                  maxw:
                    h.match(
                      /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/
                    ) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                });
          }
          w();
        },
        b = function () {
          var e,
            t = a.createElement("div"),
            n = a.body,
            i = !1;
          return (
            (t.style.cssText = "position:absolute;font-size:1em;width:1em"),
            n || ((n = i = a.createElement("body")).style.background = "none"),
            n.appendChild(t),
            s.insertBefore(n, s.firstChild),
            (e = t.offsetWidth),
            i ? s.removeChild(n) : n.removeChild(t),
            (o = parseFloat(e))
          );
        },
        w = function (t) {
          var n = "clientWidth",
            h = s[n],
            f = ("CSS1Compat" === a.compatMode && h) || a.body[n] || h,
            m = {},
            v = p[p.length - 1],
            g = new Date().getTime();
          if (t && i && 30 > g - i)
            return e.clearTimeout(r), void (r = e.setTimeout(w, 30));
          for (var y in ((i = g), l))
            if (l.hasOwnProperty(y)) {
              var C = l[y],
                k = C.minw,
                E = C.maxw,
                x = null === k,
                S = null === E;
              k && (k = parseFloat(k) * (k.indexOf("em") > -1 ? o || b() : 1)),
                E &&
                  (E = parseFloat(E) * (E.indexOf("em") > -1 ? o || b() : 1)),
                (C.hasquery &&
                  ((x && S) || !(x || f >= k) || !(S || E >= f))) ||
                  (m[C.media] || (m[C.media] = []),
                  m[C.media].push(u[C.rules]));
            }
          for (var T in c)
            c.hasOwnProperty(T) &&
              c[T] &&
              c[T].parentNode === d &&
              d.removeChild(c[T]);
          for (var M in m)
            if (m.hasOwnProperty(M)) {
              var I = a.createElement("style"),
                O = m[M].join("\n");
              (I.type = "text/css"),
                (I.media = M),
                d.insertBefore(I, v.nextSibling),
                I.styleSheet
                  ? (I.styleSheet.cssText = O)
                  : I.appendChild(a.createTextNode(O)),
                c.push(I);
            }
        },
        C = function (e, t) {
          var n = k();
          n &&
            (n.open("GET", e, !0),
            (n.onreadystatechange = function () {
              4 !== n.readyState ||
                (200 !== n.status && 304 !== n.status) ||
                t(n.responseText);
            }),
            4 !== n.readyState && n.send(null));
        },
        k = (function () {
          var t = !1;
          try {
            t = new e.XMLHttpRequest();
          } catch (n) {
            t = new e.ActiveXObject("Microsoft.XMLHTTP");
          }
          return function () {
            return t;
          };
        })();
      v(),
        (n.update = v),
        e.addEventListener
          ? e.addEventListener("resize", t, !1)
          : e.attachEvent && e.attachEvent("onresize", t);
    }
  })(this),
  (function (e) {
    var t = e(window),
      n = t.height();
    t.resize(function () {
      n = t.height();
    }),
      (e.fn.parallax = function (i, r, o) {
        var a,
          s = e(this);
        function l() {
          var o = t.scrollTop();
          s.each(function () {
            var t = e(this),
              l = t.offset().top;
            l + a(t) < o ||
              l > o + n ||
              s.css(
                "backgroundPosition",
                i + " " + Math.round((l - o) * r) + "px"
              );
          });
        }
        s.each(function () {
          s.offset().top;
        }),
          (a = o
            ? function (e) {
                return e.outerHeight(!0);
              }
            : function (e) {
                return e.height();
              }),
          (arguments.length < 1 || null === i) && (i = "50%"),
          (arguments.length < 2 || null === r) && (r = 0.1),
          (arguments.length < 3 || null === o) && (o = !0),
          t.bind("scroll", l).resize(l),
          l();
      });
  })(jQuery),
  /*! FitVids 1.1
   * Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
   * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
   * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
   */
  (function (e) {
    "use strict";
    e.fn.fitVids = function (t) {
      var n = { customSelector: null },
        i = document.createElement("div"),
        r =
          document.getElementsByTagName("base")[0] ||
          document.getElementsByTagName("script")[0];
      return (
        (i.className = "fit-vids-style"),
        (i.innerHTML =
          "Â­<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>"),
        r.parentNode.insertBefore(i, r),
        t && e.extend(n, t),
        this.each(function () {
          var t = [
            "iframe[src*='player.vimeo.com']",
            "iframe[src*='www.youtube.com']",
            "iframe[src*='www.youtube-nocookie.com']",
            "iframe[src*='www.kickstarter.com']",
            "object",
            "embed",
          ];
          n.customSelector && t.push(n.customSelector),
            e(this)
              .find(t.join(","))
              .each(function () {
                var t = e(this);
                if (
                  !(
                    ("embed" === this.tagName.toLowerCase() &&
                      t.parent("object").length) ||
                    t.parent(".fluid-width-video-wrapper").length
                  )
                ) {
                  var n =
                    ("object" === this.tagName.toLowerCase() ||
                    (t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)))
                      ? parseInt(t.attr("height"), 10)
                      : t.height()) /
                    (isNaN(parseInt(t.attr("width"), 10))
                      ? t.width()
                      : parseInt(t.attr("width"), 10));
                  if (!t.attr("id")) {
                    var i = "fitvid" + Math.floor(999999 * Math.random());
                    t.attr("id", i);
                  }
                  t
                    .wrap('<div class="fluid-width-video-wrapper"></div>')
                    .parent(".fluid-width-video-wrapper")
                    .css("padding-top", 100 * n + "%"),
                    t.removeAttr("height").removeAttr("width");
                }
              });
        })
      );
    };
  })(jQuery),
  /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
  window.matchMedia ||
    (window.matchMedia = (function () {
      "use strict";
      var e = window.styleMedia || window.media;
      if (!e) {
        var t,
          n = document.createElement("style"),
          i = document.getElementsByTagName("script")[0];
        (n.type = "text/css"),
          (n.id = "matchmediajs-test"),
          i.parentNode.insertBefore(n, i),
          (t =
            ("getComputedStyle" in window &&
              window.getComputedStyle(n, null)) ||
            n.currentStyle),
          (e = {
            matchMedium: function (e) {
              var i = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
              return (
                n.styleSheet ? (n.styleSheet.cssText = i) : (n.textContent = i),
                "1px" === t.width
              );
            },
          });
      }
      return function (t) {
        return { matches: e.matchMedium(t || "all"), media: t || "all" };
      };
    })()),
  (function (e) {
    (e.fn.appear = function (t, n) {
      var i = e.extend({ data: void 0, one: !0, accX: 0, accY: 0 }, n);
      return this.each(function () {
        var n = e(this);
        if (((n.appeared = !1), t)) {
          var r = e(window),
            o = function () {
              if (n.is(":visible")) {
                var e = r.scrollLeft(),
                  t = r.scrollTop(),
                  o = n.offset(),
                  a = o.left,
                  s = o.top,
                  l = i.accX,
                  u = i.accY,
                  c = n.height(),
                  h = r.height(),
                  d = n.width(),
                  f = r.width();
                s + c + u >= t &&
                t + h + u >= s &&
                a + d + l >= e &&
                e + f + l >= a
                  ? n.appeared || n.trigger("appear", i.data)
                  : (n.appeared = !1);
              } else n.appeared = !1;
            },
            a = function () {
              if (((n.appeared = !0), i.one)) {
                r.unbind("scroll", o);
                var a = e.inArray(o, e.fn.appear.checks);
                a >= 0 && e.fn.appear.checks.splice(a, 1);
              }
              t.apply(this, arguments);
            };
          i.one ? n.one("appear", i.data, a) : n.bind("appear", i.data, a),
            r.scroll(o),
            e.fn.appear.checks.push(o),
            o();
        } else n.trigger("appear", i.data);
      });
    }),
      e.extend(e.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function () {
          var t = e.fn.appear.checks.length;
          if (t > 0) for (; t--; ) e.fn.appear.checks[t]();
        },
        run: function () {
          e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout),
            (e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20));
        },
      }),
      e.each(
        [
          "append",
          "prepend",
          "after",
          "before",
          "attr",
          "removeAttr",
          "addClass",
          "removeClass",
          "toggleClass",
          "remove",
          "css",
          "show",
          "hide",
        ],
        function (t, n) {
          var i = e.fn[n];
          i &&
            (e.fn[n] = function () {
              var t = i.apply(this, arguments);
              return e.fn.appear.run(), t;
            });
        }
      );
  })(jQuery),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(0, function (e) {
    var t = function (e, t) {
        var n,
          i = document.createElement("canvas");
        e.appendChild(i),
          "object" == typeof G_vmlCanvasManager &&
            G_vmlCanvasManager.initElement(i);
        var r = i.getContext("2d");
        i.width = i.height = t.size;
        var o = 1;
        window.devicePixelRatio > 1 &&
          ((o = window.devicePixelRatio),
          (i.style.width = i.style.height = [t.size, "px"].join("")),
          (i.width = i.height = t.size * o),
          r.scale(o, o)),
          r.translate(t.size / 2, t.size / 2),
          r.rotate((t.rotate / 180 - 0.5) * Math.PI);
        var a = (t.size - t.lineWidth) / 2;
        t.scaleColor && t.scaleLength && (a -= t.scaleLength + 2),
          (Date.now =
            Date.now ||
            function () {
              return +new Date();
            });
        var s = function (e, t, n) {
            var i = 0 >= (n = Math.min(Math.max(-1, n || 0), 1));
            r.beginPath(),
              r.arc(0, 0, a, 0, 2 * Math.PI * n, i),
              (r.strokeStyle = e),
              (r.lineWidth = t),
              r.stroke();
          },
          l =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (e) {
              window.setTimeout(e, 1e3 / 60);
            },
          u = function () {
            t.scaleColor &&
              (function () {
                var e, n;
                (r.lineWidth = 1), (r.fillStyle = t.scaleColor), r.save();
                for (var i = 24; i > 0; --i)
                  i % 6 == 0
                    ? ((n = t.scaleLength), (e = 0))
                    : ((n = 0.6 * t.scaleLength), (e = t.scaleLength - n)),
                    r.fillRect(-t.size / 2 + e, 0, n, 1),
                    r.rotate(Math.PI / 12);
                r.restore();
              })(),
              t.trackColor && s(t.trackColor, t.trackWidth || t.lineWidth, 1);
          };
        (this.getCanvas = function () {
          return i;
        }),
          (this.getCtx = function () {
            return r;
          }),
          (this.clear = function () {
            r.clearRect(t.size / -2, t.size / -2, t.size, t.size);
          }),
          (this.draw = function (e) {
            var i;
            t.scaleColor || t.trackColor
              ? r.getImageData && r.putImageData
                ? n
                  ? r.putImageData(n, 0, 0)
                  : (u(), (n = r.getImageData(0, 0, t.size * o, t.size * o)))
                : (this.clear(), u())
              : this.clear(),
              (r.lineCap = t.lineCap),
              (i =
                "function" == typeof t.barColor ? t.barColor(e) : t.barColor),
              s(i, t.lineWidth, e / 100);
          }.bind(this)),
          (this.animate = function (e, n) {
            var i = Date.now();
            t.onStart(e, n);
            var r = function () {
              var o = Math.min(Date.now() - i, t.animate.duration),
                a = t.easing(this, o, e, n - e, t.animate.duration);
              this.draw(a),
                t.onStep(e, n, a),
                o >= t.animate.duration ? t.onStop(e, n) : l(r);
            }.bind(this);
            l(r);
          }.bind(this));
      },
      n = function (e, n) {
        var i = {
          barColor: "#ef1e25",
          trackColor: "#f9f9f9",
          scaleColor: "#dfe0e0",
          scaleLength: 5,
          lineCap: "round",
          lineWidth: 3,
          trackWidth: void 0,
          size: 110,
          rotate: 0,
          animate: { duration: 1e3, enabled: !0 },
          easing: function (e, t, n, i, r) {
            return 1 > (t /= r / 2)
              ? (i / 2) * t * t + n
              : (-i / 2) * (--t * (t - 2) - 1) + n;
          },
          onStart: function (e, t) {},
          onStep: function (e, t, n) {},
          onStop: function (e, t) {},
        };
        if (void 0 !== t) i.renderer = t;
        else {
          if ("undefined" == typeof SVGRenderer)
            throw new Error(
              "Please load either the SVG- or the CanvasRenderer"
            );
          i.renderer = SVGRenderer;
        }
        var r = {},
          o = 0,
          a = function () {
            for (var t in ((this.el = e), (this.options = r), i))
              i.hasOwnProperty(t) &&
                ((r[t] = n && void 0 !== n[t] ? n[t] : i[t]),
                "function" == typeof r[t] && (r[t] = r[t].bind(this)));
            "string" == typeof r.easing &&
            "undefined" != typeof jQuery &&
            jQuery.isFunction(jQuery.easing[r.easing])
              ? (r.easing = jQuery.easing[r.easing])
              : (r.easing = i.easing),
              "number" == typeof r.animate &&
                (r.animate = { duration: r.animate, enabled: !0 }),
              "boolean" != typeof r.animate ||
                r.animate ||
                (r.animate = { duration: 1e3, enabled: r.animate }),
              (this.renderer = new r.renderer(e, r)),
              this.renderer.draw(o),
              e.dataset && e.dataset.percent
                ? this.update(parseFloat(e.dataset.percent))
                : e.getAttribute &&
                  e.getAttribute("data-percent") &&
                  this.update(parseFloat(e.getAttribute("data-percent")));
          }.bind(this);
        (this.update = function (e) {
          return (
            (e = parseFloat(e)),
            r.animate.enabled
              ? this.renderer.animate(o, e)
              : this.renderer.draw(e),
            (o = e),
            this
          );
        }.bind(this)),
          (this.disableAnimation = function () {
            return (r.animate.enabled = !1), this;
          }),
          (this.enableAnimation = function () {
            return (r.animate.enabled = !0), this;
          }),
          a();
      };
    e.fn.easyPieChart = function (t) {
      return this.each(function () {
        var i;
        e.data(this, "easyPieChart") ||
          ((i = e.extend({}, t, e(this).data())),
          e.data(this, "easyPieChart", new n(this, i)));
      });
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", t)
      : "object" == typeof module && module.exports
      ? (module.exports = t())
      : (e.EvEmitter = t());
  })("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return (
      (t.on = function (e, t) {
        if (e && t) {
          var n = (this._events = this._events || {}),
            i = (n[e] = n[e] || []);
          return -1 == i.indexOf(t) && i.push(t), this;
        }
      }),
      (t.once = function (e, t) {
        if (e && t) {
          this.on(e, t);
          var n = (this._onceEvents = this._onceEvents || {});
          return ((n[e] = n[e] || {})[t] = !0), this;
        }
      }),
      (t.off = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
          var i = n.indexOf(t);
          return -1 != i && n.splice(i, 1), this;
        }
      }),
      (t.emitEvent = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
          var i = 0,
            r = n[i];
          t = t || [];
          for (var o = this._onceEvents && this._onceEvents[e]; r; ) {
            var a = o && o[r];
            a && (this.off(e, r), delete o[r]),
              r.apply(this, t),
              (r = n[(i += a ? 0 : 1)]);
          }
          return this;
        }
      }),
      (t.allOff = t.removeAllListeners =
        function () {
          delete this._events, delete this._onceEvents;
        }),
      e
    );
  }),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (n) {
          return t(e, n);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function n(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function i(e, t, r) {
      return this instanceof i
        ? ("string" == typeof e && (e = document.querySelectorAll(e)),
          (this.elements = (function (e) {
            var t = [];
            if (Array.isArray(e)) t = e;
            else if ("number" == typeof e.length)
              for (var n = 0; n < e.length; n++) t.push(e[n]);
            else t.push(e);
            return t;
          })(e)),
          (this.options = n({}, this.options)),
          "function" == typeof t ? (r = t) : n(this.options, t),
          r && this.on("always", r),
          this.getImages(),
          a && (this.jqDeferred = new a.Deferred()),
          void setTimeout(
            function () {
              this.check();
            }.bind(this)
          ))
        : new i(e, t, r);
    }
    function r(e) {
      this.img = e;
    }
    function o(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var a = e.jQuery,
      s = e.console;
    (i.prototype = Object.create(t.prototype)),
      (i.prototype.options = {}),
      (i.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (i.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && l[t]) {
          for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
            var r = n[i];
            this.addImage(r);
          }
          if ("string" == typeof this.options.background) {
            var o = e.querySelectorAll(this.options.background);
            for (i = 0; i < o.length; i++) {
              var a = o[i];
              this.addElementBackgroundImages(a);
            }
          }
        }
      });
    var l = { 1: !0, 9: !0, 11: !0 };
    return (
      (i.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage);
            null !== i;

          ) {
            var r = i && i[2];
            r && this.addBackground(r, e), (i = n.exec(t.backgroundImage));
          }
      }),
      (i.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (i.prototype.addBackground = function (e, t) {
        var n = new o(e, t);
        this.images.push(n);
      }),
      (i.prototype.check = function () {
        function e(e, n, i) {
          setTimeout(function () {
            t.progress(e, n, i);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (i.prototype.progress = function (e, t, n) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && s && s.log("progress: " + n, e, t);
      }),
      (i.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        return this.getIsImageComplete()
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (o.prototype = Object.create(r.prototype)),
      (o.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (o.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (o.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (i.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) &&
          ((a = t).fn.imagesLoaded = function (e, t) {
            return new i(this, e, t).jqDeferred.promise(a(this));
          });
      }),
      i.makeJQueryPlugin(),
      i
    );
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = function (t, n) {
          return (
            void 0 === n &&
              (n =
                "undefined" != typeof window
                  ? require("jquery")
                  : require("jquery")(t)),
            e(n),
            n
          );
        })
      : e(jQuery);
  })(function (e) {
    "use strict";
    var t,
      n = "drawsvg",
      i = {
        duration: 1e3,
        stagger: 200,
        easing: "swing",
        reverse: !1,
        callback: e.noop,
      },
      r =
        (((t = function (t, r) {
          var o = this,
            a = e.extend(i, r);
          (o.$elm = e(t)),
            o.$elm.is("svg") &&
              ((o.options = a),
              (o.$paths = o.$elm.find("path")),
              (o.totalDuration = a.duration + a.stagger * o.$paths.length),
              (o.duration = a.duration / o.totalDuration),
              o.$paths.each(function (e, t) {
                var n = t.getTotalLength();
                (t.pathLen = n),
                  (t.delay = (a.stagger * e) / o.totalDuration),
                  (t.style.strokeDasharray = [n, n].join(" ")),
                  (t.style.strokeDashoffset = n);
              }),
              o.$elm.attr("class", function (e, t) {
                return [t, n + "-initialized"].join(" ");
              }));
        }).prototype.getVal = function (t, n) {
          return 1 - e.easing[n](t, t, 0, 1, 1);
        }),
        (t.prototype.progress = function (e) {
          var t = this,
            n = t.options,
            i = t.duration;
          t.$paths.each(function (r, o) {
            var a = o.style;
            if (1 === e) a.strokeDashoffset = 0;
            else if (0 === e) a.strokeDashoffset = o.pathLen + "px";
            else if (e >= o.delay && e <= i + o.delay) {
              var s = (e - o.delay) / i;
              a.strokeDashoffset =
                t.getVal(s, n.easing) * o.pathLen * (n.reverse ? -1 : 1) + "px";
            }
          });
        }),
        (t.prototype.animate = function () {
          var t = this;
          t.$elm.attr("class", function (e, t) {
            return [t, n + "-animating"].join(" ");
          }),
            e({ len: 0 }).animate(
              { len: 1 },
              {
                easing: "linear",
                duration: t.totalDuration,
                step: function (e, n) {
                  t.progress.call(t, e / n.end);
                },
                complete: function () {
                  t.options.callback.call(this),
                    t.$elm.attr("class", function (e, t) {
                      return t.replace(n + "-animating", "");
                    });
                },
              }
            );
        }),
        t);
    e.fn[n] = function (t, i) {
      return this.each(function () {
        var o = e.data(this, n);
        o && "" + t === t && o[t] ? o[t](i) : e.data(this, n, new r(this, t));
      });
    };
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("simpleParallax", [], t)
      : "object" == typeof exports
      ? (exports.simpleParallax = t())
      : (e.simpleParallax = t());
  })(window, function () {
    return (function (e) {
      var t = {};
      function n(i) {
        if (t[i]) return t[i].exports;
        var r = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
      }
      return (
        (n.m = e),
        (n.c = t),
        (n.d = function (e, t, i) {
          n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (n.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
          if ((1 & t && (e = n(e)), 8 & t)) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var i = Object.create(null);
          if (
            (n.r(i),
            Object.defineProperty(i, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var r in e)
              n.d(
                i,
                r,
                function (t) {
                  return e[t];
                }.bind(null, r)
              );
          return i;
        }),
        (n.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 0))
      );
    })([
      function (e, t, n) {
        "use strict";
        n.r(t);
        var i = new ((function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.positions = { top: 0, bottom: 0, height: 0 });
            }
            var t;
            return (
              (t = [
                {
                  key: "setViewportTop",
                  value: function (e) {
                    return (
                      (this.positions.top = e
                        ? e.scrollTop
                        : window.pageYOffset),
                      this.positions
                    );
                  },
                },
                {
                  key: "setViewportBottom",
                  value: function () {
                    return (
                      (this.positions.bottom =
                        this.positions.top + this.positions.height),
                      this.positions
                    );
                  },
                },
                {
                  key: "setViewportAll",
                  value: function (e) {
                    return (
                      (this.positions.top = e
                        ? e.scrollTop
                        : window.pageYOffset),
                      (this.positions.height = e
                        ? e.clientHeight
                        : document.documentElement.clientHeight),
                      (this.positions.bottom =
                        this.positions.top + this.positions.height),
                      this.positions
                    );
                  },
                },
              ]) &&
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                })(e.prototype, t),
              e
            );
          })())(),
          r = function (e) {
            return NodeList.prototype.isPrototypeOf(e) ||
              HTMLCollection.prototype.isPrototypeOf(e)
              ? Array.from(e)
              : "string" == typeof e || e instanceof String
              ? document.querySelectorAll(e)
              : [e];
          },
          o = (function () {
            for (
              var e,
                t =
                  "transform webkitTransform mozTransform oTransform msTransform".split(
                    " "
                  ),
                n = 0;
              void 0 === e;

            )
              (e =
                void 0 !== document.createElement("div").style[t[n]]
                  ? t[n]
                  : void 0),
                (n += 1);
            return e;
          })();
        var a = (function () {
          function e(t, n) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.element = t),
              (this.elementContainer = t),
              (this.settings = n),
              (this.isVisible = !0),
              (this.isInit = !1),
              (this.oldTranslateValue = -1),
              (this.init = this.init.bind(this)),
              (function (e) {
                return !(
                  !e ||
                  !e.complete ||
                  (void 0 !== e.naturalWidth && 0 === e.naturalWidth)
                );
              })(t)
                ? this.init()
                : this.element.addEventListener("load", this.init);
          }
          var t;
          return (
            (t = [
              {
                key: "init",
                value: function () {
                  var e = this;
                  this.isInit ||
                    this.element.closest(".simpleParallax") ||
                    (!1 === this.settings.overflow &&
                      this.wrapElement(this.element),
                    this.setTransformCSS(),
                    this.getElementOffset(),
                    this.intersectionObserver(),
                    this.getTranslateValue(),
                    this.animate(),
                    this.settings.delay > 0 &&
                      setTimeout(function () {
                        e.setTransitionCSS();
                      }, 10),
                    (this.isInit = !0));
                },
              },
              {
                key: "wrapElement",
                value: function () {
                  var e = this.element.closest("picture") || this.element,
                    t = document.createElement("div");
                  t.classList.add("simpleParallax"),
                    (t.style.overflow = "hidden"),
                    e.parentNode.insertBefore(t, e),
                    t.appendChild(e),
                    (this.elementContainer = t);
                },
              },
              {
                key: "unWrapElement",
                value: function () {
                  var e = this.elementContainer;
                  e.replaceWith.apply(
                    e,
                    (function (e) {
                      return (
                        (function (e) {
                          if (Array.isArray(e)) {
                            for (
                              var t = 0, n = new Array(e.length);
                              t < e.length;
                              t++
                            )
                              n[t] = e[t];
                            return n;
                          }
                        })(e) ||
                        (function (e) {
                          if (
                            Symbol.iterator in Object(e) ||
                            "[object Arguments]" ===
                              Object.prototype.toString.call(e)
                          )
                            return Array.from(e);
                        })(e) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance"
                          );
                        })()
                      );
                    })(e.childNodes)
                  );
                },
              },
              {
                key: "setTransformCSS",
                value: function () {
                  !1 === this.settings.overflow &&
                    (this.element.style[o] = "scale(".concat(
                      this.settings.scale,
                      ")"
                    )),
                    (this.element.style.willChange = "transform");
                },
              },
              {
                key: "setTransitionCSS",
                value: function () {
                  this.element.style.transition = "transform "
                    .concat(this.settings.delay, "s ")
                    .concat(this.settings.transition);
                },
              },
              {
                key: "unSetStyle",
                value: function () {
                  (this.element.style.willChange = ""),
                    (this.element.style[o] = ""),
                    (this.element.style.transition = "");
                },
              },
              {
                key: "getElementOffset",
                value: function () {
                  var e = this.elementContainer.getBoundingClientRect();
                  if (
                    ((this.elementHeight = e.height),
                    (this.elementTop = e.top + i.positions.top),
                    this.settings.customContainer)
                  ) {
                    var t =
                      this.settings.customContainer.getBoundingClientRect();
                    this.elementTop = e.top - t.top + i.positions.top;
                  }
                  this.elementBottom = this.elementHeight + this.elementTop;
                },
              },
              {
                key: "buildThresholdList",
                value: function () {
                  for (var e = [], t = 1; t <= this.elementHeight; t++) {
                    var n = t / this.elementHeight;
                    e.push(n);
                  }
                  return e;
                },
              },
              {
                key: "intersectionObserver",
                value: function () {
                  var e = { root: null, threshold: this.buildThresholdList() };
                  (this.observer = new IntersectionObserver(
                    this.intersectionObserverCallback.bind(this),
                    e
                  )),
                    this.observer.observe(this.element);
                },
              },
              {
                key: "intersectionObserverCallback",
                value: function (e) {
                  for (var t = e.length - 1; t >= 0; t--)
                    e[t].isIntersecting
                      ? (this.isVisible = !0)
                      : (this.isVisible = !1);
                },
              },
              {
                key: "checkIfVisible",
                value: function () {
                  return (
                    this.elementBottom > i.positions.top &&
                    this.elementTop < i.positions.bottom
                  );
                },
              },
              {
                key: "getRangeMax",
                value: function () {
                  var e = this.element.clientHeight;
                  this.rangeMax = e * this.settings.scale - e;
                },
              },
              {
                key: "getTranslateValue",
                value: function () {
                  var e = (
                    (i.positions.bottom - this.elementTop) /
                    ((i.positions.height + this.elementHeight) / 100)
                  ).toFixed(1);
                  return (
                    (e = Math.min(100, Math.max(0, e))),
                    0 !== this.settings.maxTransition &&
                      e > this.settings.maxTransition &&
                      (e = this.settings.maxTransition),
                    this.oldPercentage !== e &&
                      (this.rangeMax || this.getRangeMax(),
                      (this.translateValue = (
                        (e / 100) * this.rangeMax -
                        this.rangeMax / 2
                      ).toFixed(0)),
                      this.oldTranslateValue !== this.translateValue &&
                        ((this.oldPercentage = e),
                        (this.oldTranslateValue = this.translateValue),
                        !0))
                  );
                },
              },
              {
                key: "animate",
                value: function () {
                  var e,
                    t = 0,
                    n = 0;
                  (this.settings.orientation.includes("left") ||
                    this.settings.orientation.includes("right")) &&
                    (n = "".concat(
                      this.settings.orientation.includes("left")
                        ? -1 * this.translateValue
                        : this.translateValue,
                      "px"
                    )),
                    (this.settings.orientation.includes("up") ||
                      this.settings.orientation.includes("down")) &&
                      (t = "".concat(
                        this.settings.orientation.includes("up")
                          ? -1 * this.translateValue
                          : this.translateValue,
                        "px"
                      )),
                    (e =
                      !1 === this.settings.overflow
                        ? "translate3d("
                            .concat(n, ", ")
                            .concat(t, ", 0) scale(")
                            .concat(this.settings.scale, ")")
                        : "translate3d(".concat(n, ", ").concat(t, ", 0)")),
                    (this.element.style[o] = e);
                },
              },
            ]) &&
              (function (e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              })(e.prototype, t),
            e
          );
        })();
        function s(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++)
                  n[t] = e[t];
                return n;
              }
            })(e) ||
            (function (e) {
              if (
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
                return Array.from(e);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance"
              );
            })()
          );
        }
        n.d(t, "default", function () {
          return p;
        });
        var l,
          u,
          c,
          h = !0,
          d = !1,
          f = [],
          p = (function () {
            function e(t, n) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                t &&
                  ((this.elements = r(t)),
                  (this.defaults = {
                    delay: 0.4,
                    orientation: "up",
                    scale: 1.3,
                    overflow: !1,
                    transition: "cubic-bezier(0,0,0,1)",
                    customContainer: !1,
                    maxTransition: 0,
                  }),
                  (this.settings = Object.assign(this.defaults, n)),
                  "IntersectionObserver" in window || (h = !1),
                  this.settings.customContainer &&
                    (console.log(r(this.settings.customContainer)[0]),
                    (this.customContainer = r(
                      this.settings.customContainer
                    )[0])),
                  (this.lastPosition = -1),
                  (this.resizeIsDone = this.resizeIsDone.bind(this)),
                  (this.handleResize = this.handleResize.bind(this)),
                  (this.proceedRequestAnimationFrame =
                    this.proceedRequestAnimationFrame.bind(this)),
                  this.init());
            }
            var t;
            return (
              (t = [
                {
                  key: "init",
                  value: function () {
                    var e = this;
                    i.setViewportAll(this.customContainer),
                      (f = [].concat(
                        s(
                          this.elements.map(function (t) {
                            return new a(t, e.settings);
                          })
                        ),
                        s(f)
                      )),
                      (l = f.length),
                      d ||
                        (this.proceedRequestAnimationFrame(),
                        window.addEventListener("resize", this.resizeIsDone),
                        (d = !0));
                  },
                },
                {
                  key: "resizeIsDone",
                  value: function () {
                    clearTimeout(c), (c = setTimeout(this.handleResize, 500));
                  },
                },
                {
                  key: "handleResize",
                  value: function () {
                    i.setViewportAll(this.customContainer);
                    for (var e = l - 1; e >= 0; e--)
                      f[e].getElementOffset(), f[e].getRangeMax();
                    this.lastPosition = -1;
                  },
                },
                {
                  key: "proceedRequestAnimationFrame",
                  value: function () {
                    if (
                      (i.setViewportTop(this.customContainer),
                      this.lastPosition !== i.positions.top)
                    ) {
                      i.setViewportBottom();
                      for (var e = l - 1; e >= 0; e--)
                        this.proceedElement(f[e]);
                      (u = window.requestAnimationFrame(
                        this.proceedRequestAnimationFrame
                      )),
                        (this.lastPosition = i.positions.top);
                    } else
                      u = window.requestAnimationFrame(
                        this.proceedRequestAnimationFrame
                      );
                  },
                },
                {
                  key: "proceedElement",
                  value: function (e) {
                    (!h || this.customContainer
                      ? e.checkIfVisible()
                      : e.isVisible) &&
                      e.getTranslateValue() &&
                      e.animate();
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var e = this,
                      t = [];
                    f = f.filter(function (n) {
                      return e.elements.includes(n.element)
                        ? (t.push(n), !1)
                        : n;
                    });
                    for (var n = t.length - 1; n >= 0; n--)
                      t[n].unSetStyle(),
                        !1 === this.settings.overflow && t[n].unWrapElement();
                    (l = f.length) ||
                      (window.cancelAnimationFrame(u),
                      window.removeEventListener("resize", this.handleResize));
                  },
                },
              ]) &&
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                      (i.configurable = !0),
                      "value" in i && (i.writable = !0),
                      Object.defineProperty(e, i.key, i);
                  }
                })(e.prototype, t),
              e
            );
          })();
      },
    ]).default;
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : (e.Splitting = t());
  })(this, function () {
    "use strict";
    var e = document,
      t = e.createTextNode.bind(e);
    function n(e, t, n) {
      e.style.setProperty(t, n);
    }
    function i(e, t) {
      return e.appendChild(t);
    }
    function r(t, n, r, o) {
      var a = e.createElement("span");
      return (
        n && (a.className = n),
        r && (!o && a.setAttribute("data-" + n, r), (a.textContent = r)),
        (t && i(t, a)) || a
      );
    }
    function o(e, t) {
      return e.getAttribute("data-" + t);
    }
    function a(t, n) {
      return t && 0 != t.length
        ? t.nodeName
          ? [t]
          : [].slice.call(t[0].nodeName ? t : (n || e).querySelectorAll(t))
        : [];
    }
    function s(e) {
      for (var t = []; e--; ) t[e] = [];
      return t;
    }
    function l(e, t) {
      e && e.some(t);
    }
    function u(e) {
      return function (t) {
        return e[t];
      };
    }
    var c = {};
    function h(e, t, n, i) {
      return { by: e, depends: t, key: n, split: i };
    }
    function d(e) {
      c[e.by] = e;
    }
    function f(e, n, o, s, u) {
      e.normalize();
      var c = [],
        h = document.createDocumentFragment();
      s && c.push(e.previousSibling);
      var d = [];
      return (
        a(e.childNodes).some(function (e) {
          if (!e.tagName || e.hasChildNodes()) {
            if (e.childNodes && e.childNodes.length)
              return d.push(e), void c.push.apply(c, f(e, n, o, s, u));
            var i = e.wholeText || "",
              a = i.trim();
            a.length &&
              (" " === i[0] && d.push(t(" ")),
              l(a.split(o), function (e, t) {
                t && u && d.push(r(h, "whitespace", " ", u));
                var i = r(h, n, e);
                c.push(i), d.push(i);
              }),
              " " === i[i.length - 1] && d.push(t(" ")));
          } else d.push(e);
        }),
        l(d, function (e) {
          i(h, e);
        }),
        (e.innerHTML = ""),
        i(e, h),
        c
      );
    }
    var p = "words",
      m = h(p, 0, "word", function (e) {
        return f(e, "word", /\s+/, 0, 1);
      }),
      v = "chars",
      g = h(v, [p], "char", function (e, t, n) {
        var i = [];
        return (
          l(n[p], function (e, n) {
            i.push.apply(i, f(e, "char", "", t.whitespace && n));
          }),
          i
        );
      });
    function y(e) {
      var t = (e = e || {}).key;
      return a(e.target || "[data-splitting]").map(function (i) {
        var r = i["Ă°Å¸ÂÅ’"];
        if (!e.force && r) return r;
        r = i["Ă°Å¸ÂÅ’"] = { el: i };
        var a = (function (e) {
            return (function e(t, n, i) {
              var r = i.indexOf(t);
              if (-1 == r)
                i.unshift(t),
                  l(c[t].depends, function (n) {
                    e(n, t, i);
                  });
              else {
                var o = i.indexOf(n);
                i.splice(r, 1), i.splice(o, 0, t);
              }
              return i;
            })(e, 0, []).map(u(c));
          })(e.by || o(i, "splitting") || v),
          s = (function (e, t) {
            for (var n in t) e[n] = t[n];
            return e;
          })({}, e);
        return (
          l(a, function (e) {
            if (e.split) {
              var o = e.by,
                a = (t ? "-" + t : "") + e.key,
                u = e.split(i, s, r);
              a &&
                ((c = i),
                (f = (d = "--" + a) + "-index"),
                l((h = u), function (e, t) {
                  Array.isArray(e)
                    ? l(e, function (e) {
                        n(e, f, t);
                      })
                    : n(e, f, t);
                }),
                n(c, d + "-total", h.length)),
                (r[o] = u),
                i.classList.add(o);
            }
            var c, h, d, f;
          }),
          i.classList.add("splitting"),
          r
        );
      });
    }
    function b(e, t, n) {
      var i = a(t.matching || e.children, e),
        r = {};
      return (
        l(i, function (e) {
          var t = Math.round(e[n]);
          (r[t] || (r[t] = [])).push(e);
        }),
        Object.keys(r).map(Number).sort(w).map(u(r))
      );
    }
    function w(e, t) {
      return e - t;
    }
    (y.html = function (e) {
      var t = ((e = e || {}).target = r());
      return (t.innerHTML = e.content), y(e), t.outerHTML;
    }),
      (y.add = d);
    var C = h("lines", [p], "line", function (e, t, n) {
        return b(e, { matching: n[p] }, "offsetTop");
      }),
      k = h("items", 0, "item", function (e, t) {
        return a(t.matching || e.children, e);
      }),
      E = h("rows", 0, "row", function (e, t) {
        return b(e, t, "offsetTop");
      }),
      x = h("cols", 0, "col", function (e, t) {
        return b(e, t, "offsetLeft");
      }),
      S = h("grid", ["rows", "cols"]),
      T = "layout",
      M = h(T, 0, 0, function (e, t) {
        var s = (t.rows = +(t.rows || o(e, "rows") || 1)),
          l = (t.columns = +(t.columns || o(e, "columns") || 1));
        if (
          ((t.image = t.image || o(e, "image") || e.currentSrc || e.src),
          t.image)
        ) {
          var u = a("img", e)[0];
          t.image = u && (u.currentSrc || u.src);
        }
        t.image && n(e, "background-image", "url(" + t.image + ")");
        for (var c = s * l, h = [], d = r(0, "cell-grid"); c--; ) {
          var f = r(d, "cell");
          r(f, "cell-inner"), h.push(f);
        }
        return i(e, d), h;
      }),
      I = h("cellRows", [T], "row", function (e, t, n) {
        var i = t.rows,
          r = s(i);
        return (
          l(n[T], function (e, t, n) {
            r[Math.floor(t / (n.length / i))].push(e);
          }),
          r
        );
      }),
      O = h("cellColumns", [T], "col", function (e, t, n) {
        var i = t.columns,
          r = s(i);
        return (
          l(n[T], function (e, t) {
            r[t % i].push(e);
          }),
          r
        );
      }),
      A = h("cells", ["cellRows", "cellColumns"], "cell", function (e, t, n) {
        return n[T];
      });
    return d(m), d(g), d(C), d(k), d(E), d(x), d(S), d(M), d(I), d(O), d(A), y;
  }),
  (function (e) {
    "use strict";
    function t(t) {
      return t.is('[type="checkbox"]')
        ? t.prop("checked")
        : t.is('[type="radio"]')
        ? !!e('[name="' + t.attr("name") + '"]:checked').length
        : t.val();
    }
    var n = function (i, r) {
      (this.options = r),
        (this.validators = e.extend({}, n.VALIDATORS, r.custom)),
        (this.$element = e(i)),
        (this.$btn = e('button[type="submit"], input[type="submit"]')
          .filter('[form="' + this.$element.attr("id") + '"]')
          .add(
            this.$element.find('input[type="submit"], button[type="submit"]')
          )),
        this.update(),
        this.$element.on(
          "input.bs.validator change.bs.validator focusout.bs.validator",
          e.proxy(this.onInput, this)
        ),
        this.$element.on("submit.bs.validator", e.proxy(this.onSubmit, this)),
        this.$element.on("reset.bs.validator", e.proxy(this.reset, this)),
        this.$element.find("[data-match]").each(function () {
          var n = e(this),
            i = n.data("match");
          e(i).on("input.bs.validator", function (e) {
            t(n) && n.trigger("input.bs.validator");
          });
        }),
        this.$inputs
          .filter(function () {
            return t(e(this));
          })
          .trigger("focusout"),
        this.$element.attr("novalidate", !0),
        this.toggleSubmit();
    };
    function i(t) {
      return this.each(function () {
        var i = e(this),
          r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
          o = i.data("bs.validator");
        (o || "destroy" != t) &&
          (o || i.data("bs.validator", (o = new n(this, r))),
          "string" == typeof t && o[t]());
      });
    }
    (n.VERSION = "0.11.5"),
      (n.INPUT_SELECTOR =
        ':input:not([type="hidden"], [type="submit"], [type="reset"], button)'),
      (n.FOCUS_OFFSET = 20),
      (n.DEFAULTS = {
        delay: 500,
        html: !1,
        disable: !0,
        focus: !0,
        custom: {},
        errors: { match: "Does not match", minlength: "Not long enough" },
        feedback: { success: "glyphicon-ok", error: "glyphicon-remove" },
      }),
      (n.VALIDATORS = {
        native: function (e) {
          var t = e[0];
          if (t.checkValidity)
            return (
              !t.checkValidity() &&
              !t.validity.valid &&
              (t.validationMessage || "error!")
            );
        },
        match: function (t) {
          var i = t.data("match");
          return t.val() !== e(i).val() && n.DEFAULTS.errors.match;
        },
        minlength: function (e) {
          var t = e.data("minlength");
          return e.val().length < t && n.DEFAULTS.errors.minlength;
        },
      }),
      (n.prototype.update = function () {
        return (
          (this.$inputs = this.$element
            .find(n.INPUT_SELECTOR)
            .add(this.$element.find('[data-validate="true"]'))
            .not(this.$element.find('[data-validate="false"]'))),
          this
        );
      }),
      (n.prototype.onInput = function (t) {
        var n = this,
          i = e(t.target),
          r = "focusout" !== t.type;
        this.$inputs.is(i) &&
          this.validateInput(i, r).done(function () {
            n.toggleSubmit();
          });
      }),
      (n.prototype.validateInput = function (n, i) {
        t(n);
        var r = n.data("bs.validator.errors");
        n.is('[type="radio"]') &&
          (n = this.$element.find('input[name="' + n.attr("name") + '"]'));
        var o = e.Event("validate.bs.validator", { relatedTarget: n[0] });
        if ((this.$element.trigger(o), !o.isDefaultPrevented())) {
          var a = this;
          return this.runValidators(n).done(function (t) {
            n.data("bs.validator.errors", t),
              t.length
                ? i
                  ? a.defer(n, a.showErrors)
                  : a.showErrors(n)
                : a.clearErrors(n),
              (r && t.toString() === r.toString()) ||
                ((o = t.length
                  ? e.Event("invalid.bs.validator", {
                      relatedTarget: n[0],
                      detail: t,
                    })
                  : e.Event("valid.bs.validator", {
                      relatedTarget: n[0],
                      detail: r,
                    })),
                a.$element.trigger(o)),
              a.toggleSubmit(),
              a.$element.trigger(
                e.Event("validated.bs.validator", { relatedTarget: n[0] })
              );
          });
        }
      }),
      (n.prototype.runValidators = function (n) {
        var i = [],
          r = e.Deferred();
        function o(e) {
          return (
            (function (e) {
              return n.data(e + "-error");
            })(e) ||
            ((t = n[0].validity).typeMismatch
              ? n.data("type-error")
              : t.patternMismatch
              ? n.data("pattern-error")
              : t.stepMismatch
              ? n.data("step-error")
              : t.rangeOverflow
              ? n.data("max-error")
              : t.rangeUnderflow
              ? n.data("min-error")
              : t.valueMissing
              ? n.data("required-error")
              : null) ||
            n.data("error")
          );
          var t;
        }
        return (
          n.data("bs.validator.deferred") &&
            n.data("bs.validator.deferred").reject(),
          n.data("bs.validator.deferred", r),
          e.each(
            this.validators,
            e.proxy(function (e, r) {
              var a = null;
              (t(n) || n.attr("required")) &&
                (n.data(e) || "native" == e) &&
                (a = r.call(this, n)) &&
                ((a = o(e) || a), !~i.indexOf(a) && i.push(a));
            }, this)
          ),
          !i.length && t(n) && n.data("remote")
            ? this.defer(n, function () {
                var a = {};
                (a[n.attr("name")] = t(n)),
                  e
                    .get(n.data("remote"), a)
                    .fail(function (e, t, n) {
                      i.push(o("remote") || n);
                    })
                    .always(function () {
                      r.resolve(i);
                    });
              })
            : r.resolve(i),
          r.promise()
        );
      }),
      (n.prototype.validate = function () {
        var t = this;
        return (
          e
            .when(
              this.$inputs.map(function (n) {
                return t.validateInput(e(this), !1);
              })
            )
            .then(function () {
              t.toggleSubmit(), t.focusError();
            }),
          this
        );
      }),
      (n.prototype.focusError = function () {
        if (this.options.focus) {
          var t = this.$element.find(".has-error:first :input");
          0 !== t.length &&
            (e("html, body").animate(
              { scrollTop: t.offset().top - n.FOCUS_OFFSET },
              250
            ),
            t.focus());
        }
      }),
      (n.prototype.showErrors = function (t) {
        var n = this.options.html ? "html" : "text",
          i = t.data("bs.validator.errors"),
          r = t.closest(".form-group"),
          o = r.find(".help-block.with-errors"),
          a = r.find(".form-control-feedback");
        i.length &&
          ((i = e("<ul/>")
            .addClass("list-unstyled")
            .append(
              e.map(i, function (t) {
                return e("<li/>")[n](t);
              })
            )),
          void 0 === o.data("bs.validator.originalContent") &&
            o.data("bs.validator.originalContent", o.html()),
          o.empty().append(i),
          r.addClass("has-error has-danger"),
          r.hasClass("has-feedback") &&
            a.removeClass(this.options.feedback.success) &&
            a.addClass(this.options.feedback.error) &&
            r.removeClass("has-success"));
      }),
      (n.prototype.clearErrors = function (e) {
        var n = e.closest(".form-group"),
          i = n.find(".help-block.with-errors"),
          r = n.find(".form-control-feedback");
        i.html(i.data("bs.validator.originalContent")),
          n.removeClass("has-error has-danger has-success"),
          n.hasClass("has-feedback") &&
            r.removeClass(this.options.feedback.error) &&
            r.removeClass(this.options.feedback.success) &&
            t(e) &&
            r.addClass(this.options.feedback.success) &&
            n.addClass("has-success");
      }),
      (n.prototype.hasErrors = function () {
        return !!this.$inputs.filter(function () {
          return !!(e(this).data("bs.validator.errors") || []).length;
        }).length;
      }),
      (n.prototype.isIncomplete = function () {
        return !!this.$inputs.filter("[required]").filter(function () {
          var n = t(e(this));
          return !("string" == typeof n ? e.trim(n) : n);
        }).length;
      }),
      (n.prototype.onSubmit = function (e) {
        this.validate(),
          (this.isIncomplete() || this.hasErrors()) && e.preventDefault();
      }),
      (n.prototype.toggleSubmit = function () {
        this.options.disable &&
          this.$btn.toggleClass(
            "disabled",
            this.isIncomplete() || this.hasErrors()
          );
      }),
      (n.prototype.defer = function (t, n) {
        if (((n = e.proxy(n, this, t)), !this.options.delay)) return n();
        window.clearTimeout(t.data("bs.validator.timeout")),
          t.data(
            "bs.validator.timeout",
            window.setTimeout(n, this.options.delay)
          );
      }),
      (n.prototype.reset = function () {
        return (
          this.$element
            .find(".form-control-feedback")
            .removeClass(this.options.feedback.error)
            .removeClass(this.options.feedback.success),
          this.$inputs
            .removeData(["bs.validator.errors", "bs.validator.deferred"])
            .each(function () {
              var t = e(this),
                n = t.data("bs.validator.timeout");
              window.clearTimeout(n) && t.removeData("bs.validator.timeout");
            }),
          this.$element.find(".help-block.with-errors").each(function () {
            var t = e(this),
              n = t.data("bs.validator.originalContent");
            t.removeData("bs.validator.originalContent").html(n);
          }),
          this.$btn.removeClass("disabled"),
          this.$element
            .find(".has-error, .has-danger, .has-success")
            .removeClass("has-error has-danger has-success"),
          this
        );
      }),
      (n.prototype.destroy = function () {
        return (
          this.reset(),
          this.$element
            .removeAttr("novalidate")
            .removeData("bs.validator")
            .off(".bs.validator"),
          this.$inputs.off(".bs.validator"),
          (this.options = null),
          (this.validators = null),
          (this.$element = null),
          (this.$btn = null),
          this
        );
      });
    var r = e.fn.validator;
    (e.fn.validator = i),
      (e.fn.validator.Constructor = n),
      (e.fn.validator.noConflict = function () {
        return (e.fn.validator = r), this;
      }),
      e(window).on("load", function () {
        e('form[data-toggle="validator"]').each(function () {
          var t = e(this);
          i.call(t, t.data());
        });
      });
  })(jQuery),
  (function (e, t) {
    if ("function" == typeof define && define.amd)
      define(["module", "exports"], t);
    else if ("undefined" != typeof exports) t(module, exports);
    else {
      var n = { exports: {} };
      t(n, n.exports), (e.WOW = n.exports);
    }
  })(this, function (e, t) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
      return t.indexOf(e) >= 0;
    }
    function r(e, t, n) {
      null != e.addEventListener
        ? e.addEventListener(t, n, !1)
        : null != e.attachEvent
        ? e.attachEvent("on" + t, n)
        : (e[t] = n);
    }
    function o(e, t, n) {
      null != e.removeEventListener
        ? e.removeEventListener(t, n, !1)
        : null != e.detachEvent
        ? e.detachEvent("on" + t, n)
        : delete e[t];
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a,
      s,
      l = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      u =
        window.WeakMap ||
        window.MozWeakMap ||
        (function () {
          function e() {
            n(this, e), (this.keys = []), (this.values = []);
          }
          return (
            l(e, [
              {
                key: "get",
                value: function (e) {
                  for (var t = 0; t < this.keys.length; t++)
                    if (this.keys[t] === e) return this.values[t];
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  for (var n = 0; n < this.keys.length; n++)
                    if (this.keys[n] === e) return (this.values[n] = t), this;
                  return this.keys.push(e), this.values.push(t), this;
                },
              },
            ]),
            e
          );
        })(),
      c =
        window.MutationObserver ||
        window.WebkitMutationObserver ||
        window.MozMutationObserver ||
        ((s = a =
          (function () {
            function e() {
              n(this, e),
                "undefined" != typeof console &&
                  null !== console &&
                  (console.warn(
                    "MutationObserver is not supported by your browser."
                  ),
                  console.warn(
                    "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                  ));
            }
            return l(e, [{ key: "observe", value: function () {} }]), e;
          })()),
        (a.notSupported = !0),
        s),
      h =
        window.getComputedStyle ||
        function (e) {
          var t = /(\-([a-z]){1})/g;
          return {
            getPropertyValue: function (n) {
              "float" === n && (n = "styleFloat"),
                t.test(n) &&
                  n.replace(t, function (e, t) {
                    return t.toUpperCase();
                  });
              var i = e.currentStyle;
              return (null != i ? i[n] : void 0) || null;
            },
          };
        },
      d = (function () {
        function e() {
          var t =
            arguments.length <= 0 || void 0 === arguments[0]
              ? {}
              : arguments[0];
          n(this, e),
            (this.defaults = {
              boxClass: "wow",
              animateClass: "animated",
              offset: 0,
              mobile: !0,
              live: !0,
              callback: null,
              scrollContainer: null,
              resetAnimation: !0,
            }),
            (this.animate =
              "requestAnimationFrame" in window
                ? function (e) {
                    return window.requestAnimationFrame(e);
                  }
                : function (e) {
                    return e();
                  }),
            (this.vendors = ["moz", "webkit"]),
            (this.start = this.start.bind(this)),
            (this.resetAnimation = this.resetAnimation.bind(this)),
            (this.scrollHandler = this.scrollHandler.bind(this)),
            (this.scrollCallback = this.scrollCallback.bind(this)),
            (this.scrolled = !0),
            (this.config = (function (e, t) {
              for (var n in t)
                if (null == e[n]) {
                  var i = t[n];
                  e[n] = i;
                }
              return e;
            })(t, this.defaults)),
            null != t.scrollContainer &&
              (this.config.scrollContainer = document.querySelector(
                t.scrollContainer
              )),
            (this.animationNameCache = new u()),
            (this.wowEvent = (function (e) {
              var t =
                  !(arguments.length <= 1 || void 0 === arguments[1]) &&
                  arguments[1],
                n =
                  !(arguments.length <= 2 || void 0 === arguments[2]) &&
                  arguments[2],
                i =
                  arguments.length <= 3 || void 0 === arguments[3]
                    ? null
                    : arguments[3],
                r = void 0;
              return (
                null != document.createEvent
                  ? (r = document.createEvent("CustomEvent")).initCustomEvent(
                      e,
                      t,
                      n,
                      i
                    )
                  : null != document.createEventObject
                  ? ((r = document.createEventObject()).eventType = e)
                  : (r.eventName = e),
                r
              );
            })(this.config.boxClass));
        }
        return (
          l(e, [
            {
              key: "init",
              value: function () {
                (this.element = window.document.documentElement),
                  i(document.readyState, ["interactive", "complete"])
                    ? this.start()
                    : r(document, "DOMContentLoaded", this.start),
                  (this.finished = []);
              },
            },
            {
              key: "start",
              value: function () {
                var e = this;
                if (
                  ((this.stopped = !1),
                  (this.boxes = [].slice.call(
                    this.element.querySelectorAll("." + this.config.boxClass)
                  )),
                  (this.all = this.boxes.slice(0)),
                  this.boxes.length)
                )
                  if (this.disabled()) this.resetStyle();
                  else
                    for (var t = 0; t < this.boxes.length; t++) {
                      var n = this.boxes[t];
                      this.applyStyle(n, !0);
                    }
                if (
                  (this.disabled() ||
                    (r(
                      this.config.scrollContainer || window,
                      "scroll",
                      this.scrollHandler
                    ),
                    r(window, "resize", this.scrollHandler),
                    (this.interval = setInterval(this.scrollCallback, 50))),
                  this.config.live)
                ) {
                  var i = new c(function (t) {
                    for (var n = 0; n < t.length; n++)
                      for (var i = t[n], r = 0; r < i.addedNodes.length; r++) {
                        var o = i.addedNodes[r];
                        e.doSync(o);
                      }
                  });
                  i.observe(document.body, { childList: !0, subtree: !0 });
                }
              },
            },
            {
              key: "stop",
              value: function () {
                (this.stopped = !0),
                  o(
                    this.config.scrollContainer || window,
                    "scroll",
                    this.scrollHandler
                  ),
                  o(window, "resize", this.scrollHandler),
                  null != this.interval && clearInterval(this.interval);
              },
            },
            {
              key: "sync",
              value: function () {
                c.notSupported && this.doSync(this.element);
              },
            },
            {
              key: "doSync",
              value: function (e) {
                if ((null != e || (e = this.element), 1 === e.nodeType))
                  for (
                    var t = (e = e.parentNode || e).querySelectorAll(
                        "." + this.config.boxClass
                      ),
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    var r = t[n];
                    i(r, this.all) ||
                      (this.boxes.push(r),
                      this.all.push(r),
                      this.stopped || this.disabled()
                        ? this.resetStyle()
                        : this.applyStyle(r, !0),
                      (this.scrolled = !0));
                  }
              },
            },
            {
              key: "show",
              value: function (e) {
                return (
                  this.applyStyle(e),
                  (e.className = e.className + " " + this.config.animateClass),
                  null != this.config.callback && this.config.callback(e),
                  (function (e, t) {
                    null != e.dispatchEvent
                      ? e.dispatchEvent(t)
                      : t in (null != e)
                      ? e[t]()
                      : "on" + t in (null != e) && e["on" + t]();
                  })(e, this.wowEvent),
                  this.config.resetAnimation &&
                    (r(e, "animationend", this.resetAnimation),
                    r(e, "oanimationend", this.resetAnimation),
                    r(e, "webkitAnimationEnd", this.resetAnimation),
                    r(e, "MSAnimationEnd", this.resetAnimation)),
                  e
                );
              },
            },
            {
              key: "applyStyle",
              value: function (e, t) {
                var n = this,
                  i = e.getAttribute("data-wow-duration"),
                  r = e.getAttribute("data-wow-delay"),
                  o = e.getAttribute("data-wow-iteration");
                return this.animate(function () {
                  return n.customStyle(e, t, i, r, o);
                });
              },
            },
            {
              key: "resetStyle",
              value: function () {
                for (var e = 0; e < this.boxes.length; e++)
                  this.boxes[e].style.visibility = "visible";
              },
            },
            {
              key: "resetAnimation",
              value: function (e) {
                if (e.type.toLowerCase().indexOf("animationend") >= 0) {
                  var t = e.target || e.srcElement;
                  t.className = t.className
                    .replace(this.config.animateClass, "")
                    .trim();
                }
              },
            },
            {
              key: "customStyle",
              value: function (e, t, n, i, r) {
                return (
                  t && this.cacheAnimationName(e),
                  (e.style.visibility = t ? "hidden" : "visible"),
                  n && this.vendorSet(e.style, { animationDuration: n }),
                  i && this.vendorSet(e.style, { animationDelay: i }),
                  r && this.vendorSet(e.style, { animationIterationCount: r }),
                  this.vendorSet(e.style, {
                    animationName: t ? "none" : this.cachedAnimationName(e),
                  }),
                  e
                );
              },
            },
            {
              key: "vendorSet",
              value: function (e, t) {
                for (var n in t)
                  if (t.hasOwnProperty(n)) {
                    var i = t[n];
                    e["" + n] = i;
                    for (var r = 0; r < this.vendors.length; r++)
                      e[
                        "" +
                          this.vendors[r] +
                          n.charAt(0).toUpperCase() +
                          n.substr(1)
                      ] = i;
                  }
              },
            },
            {
              key: "vendorCSS",
              value: function (e, t) {
                for (
                  var n = h(e), i = n.getPropertyCSSValue(t), r = 0;
                  r < this.vendors.length;
                  r++
                ) {
                  var o = this.vendors[r];
                  i = i || n.getPropertyCSSValue("-" + o + "-" + t);
                }
                return i;
              },
            },
            {
              key: "animationName",
              value: function (e) {
                var t = void 0;
                try {
                  t = this.vendorCSS(e, "animation-name").cssText;
                } catch (n) {
                  t = h(e).getPropertyValue("animation-name");
                }
                return "none" === t ? "" : t;
              },
            },
            {
              key: "cacheAnimationName",
              value: function (e) {
                return this.animationNameCache.set(e, this.animationName(e));
              },
            },
            {
              key: "cachedAnimationName",
              value: function (e) {
                return this.animationNameCache.get(e);
              },
            },
            {
              key: "scrollHandler",
              value: function () {
                this.scrolled = !0;
              },
            },
            {
              key: "scrollCallback",
              value: function () {
                if (this.scrolled) {
                  this.scrolled = !1;
                  for (var e = [], t = 0; t < this.boxes.length; t++) {
                    var n = this.boxes[t];
                    if (n) {
                      if (this.isVisible(n)) {
                        this.show(n);
                        continue;
                      }
                      e.push(n);
                    }
                  }
                  (this.boxes = e),
                    this.boxes.length || this.config.live || this.stop();
                }
              },
            },
            {
              key: "offsetTop",
              value: function (e) {
                for (; void 0 === e.offsetTop; ) e = e.parentNode;
                for (var t = e.offsetTop; e.offsetParent; )
                  t += (e = e.offsetParent).offsetTop;
                return t;
              },
            },
            {
              key: "isVisible",
              value: function (e) {
                var t = e.getAttribute("data-wow-offset") || this.config.offset,
                  n =
                    (this.config.scrollContainer &&
                      this.config.scrollContainer.scrollTop) ||
                    window.pageYOffset,
                  i =
                    n +
                    Math.min(
                      this.element.clientHeight,
                      "innerHeight" in window
                        ? window.innerHeight
                        : document.documentElement.clientHeight
                    ) -
                    t,
                  r = this.offsetTop(e),
                  o = r + e.clientHeight;
                return i >= r && o >= n;
              },
            },
            {
              key: "disabled",
              value: function () {
                return (
                  !this.config.mobile &&
                  (function (e) {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      e
                    );
                  })(navigator.userAgent)
                );
              },
            },
          ]),
          e
        );
      })();
    (t.default = d), (e.exports = t.default);
  }),
  (function (e) {
    e.fn.YouTubePopUp = function (t) {
      var n = e.extend({ autoplay: 1 }, t);
      e(this).on("click", function (t) {
        var i = e(this).attr("href");
        if (i.match(/(youtube.com)/))
          var r = "v=",
            o = 1;
        (i.match(/(youtu.be)/) || i.match(/(vimeo.com\/)+[0-9]/)) &&
          ((r = "http://innovationplans.com/"), (o = 3)),
          i.match(/(vimeo.com\/)+[a-zA-Z]/) &&
            ((r = "http://innovationplans.com/"), (o = 5));
        var a = i.split(r)[o].replace(/(&)+(.*)/, "");
        if (i.match(/(youtu.be)/) || i.match(/(youtube.com)/))
          var s =
            "https://www.youtube.com/embed/" + a + "?autoplay=" + n.autoplay;
        (i.match(/(vimeo.com\/)+[0-9]/) || i.match(/(vimeo.com\/)+[a-zA-Z]/)) &&
          (s =
            "https://player.vimeo.com/video/" + a + "?autoplay=" + n.autoplay),
          e("body").append(
            '<div class="YouTubePopUp-Wrap YouTubePopUp-animation"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="' +
              s +
              '" allowfullscreen></iframe></div></div>'
          ),
          e(".YouTubePopUp-Wrap").hasClass("YouTubePopUp-animation") &&
            setTimeout(function () {
              e(".YouTubePopUp-Wrap").removeClass("YouTubePopUp-animation");
            }, 600),
          e(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function () {
            e(".YouTubePopUp-Wrap")
              .addClass("YouTubePopUp-Hide")
              .delay(515)
              .queue(function () {
                e(this).remove();
              });
          }),
          t.preventDefault();
      }),
        e(document).keyup(function (t) {
          27 == t.keyCode &&
            e(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click();
        });
    };
  })(jQuery);
