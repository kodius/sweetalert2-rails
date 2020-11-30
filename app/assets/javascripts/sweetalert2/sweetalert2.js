!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Sweetalert2 = t());
})(this, function () {
    "use strict";
    var q =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  },
        s = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        },
        o = (function () {
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                }
            }
            return function (e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), e;
            };
        })(),
        r =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
            },
        i = function e(t, n, o) {
            null === t && (t = Function.prototype);
            var r = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, o);
            }
            if ("value" in r) return r.value;
            var a = r.get;
            return void 0 !== a ? a.call(o) : void 0;
        },
        a = function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        },
        u = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        },
        M = function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e))
                return (function (e, t) {
                    var n = [],
                        o = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                    } catch (e) {
                        (r = !0), (i = e);
                    } finally {
                        try {
                            !o && s.return && s.return();
                        } finally {
                            if (r) throw i;
                        }
                    }
                    return n;
                })(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
        t = "SweetAlert2:",
        n = function (e) {
            return Array.prototype.slice.call(e);
        },
        x = function (e) {
            console.warn(t + " " + e);
        },
        I = function (e) {
            console.error(t + " " + e);
        },
        c = [],
        l = function (e) {
            -1 === c.indexOf(e) && (c.push(e), x(e));
        },
        H = function (e) {
            return "function" == typeof e ? e() : e;
        },
        R = function (e) {
            return "object" === (void 0 === e ? "undefined" : q(e)) && "function" == typeof e.then;
        },
        e = Object.freeze({ cancel: "cancel", backdrop: "overlay", close: "close", esc: "esc", timer: "timer" }),
        d = function (e) {
            var t = {};
            for (var n in e) t[e[n]] = "swal2-" + e[n];
            return t;
        },
        D = d([
            "container",
            "shown",
            "height-auto",
            "iosfix",
            "popup",
            "modal",
            "no-backdrop",
            "toast",
            "toast-shown",
            "toast-column",
            "fade",
            "show",
            "hide",
            "noanimation",
            "close",
            "title",
            "header",
            "content",
            "actions",
            "confirm",
            "cancel",
            "footer",
            "icon",
            "icon-text",
            "image",
            "input",
            "file",
            "range",
            "select",
            "radio",
            "checkbox",
            "label",
            "textarea",
            "inputerror",
            "validationerror",
            "progresssteps",
            "activeprogressstep",
            "progresscircle",
            "progressline",
            "loading",
            "styled",
            "top",
            "top-start",
            "top-end",
            "top-left",
            "top-right",
            "center",
            "center-start",
            "center-end",
            "center-left",
            "center-right",
            "bottom",
            "bottom-start",
            "bottom-end",
            "bottom-left",
            "bottom-right",
            "grow-row",
            "grow-column",
            "grow-fullscreen",
        ]),
        B = d(["success", "warning", "info", "question", "error"]),
        p = { previousBodyPadding: null },
        f = function (e, t) {
            return !!e.classList && e.classList.contains(t);
        },
        N = function (e) {
            if ((e.focus(), "file" !== e.type)) {
                var t = e.value;
                (e.value = ""), (e.value = t);
            }
        },
        m = function (e, t, n) {
            e &&
                t &&
                ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
                t.forEach(function (t) {
                    e.forEach
                        ? e.forEach(function (e) {
                              n ? e.classList.add(t) : e.classList.remove(t);
                          })
                        : n
                        ? e.classList.add(t)
                        : e.classList.remove(t);
                }));
        },
        W = function (e, t) {
            m(e, t, !0);
        },
        A = function (e, t) {
            m(e, t, !1);
        },
        z = function (e, t) {
            for (var n = 0; n < e.childNodes.length; n++) if (f(e.childNodes[n], t)) return e.childNodes[n];
        },
        U = function (e) {
            (e.style.opacity = ""), (e.style.display = e.id === D.content ? "block" : "flex");
        },
        F = function (e) {
            (e.style.opacity = ""), (e.style.display = "none");
        },
        K = function (e) {
            return e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        },
        S = function (e, t) {
            e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(t);
        },
        P = function () {
            return document.body.querySelector("." + D.container);
        },
        h = function (e) {
            var t = P();
            return t ? t.querySelector("." + e) : null;
        },
        E = function () {
            return h(D.popup);
        },
        O = function () {
            var e = E();
            return n(e.querySelectorAll("." + D.icon));
        },
        L = function () {
            return h(D.title);
        },
        Z = function () {
            return h(D.content);
        },
        Q = function () {
            return h(D.image);
        },
        g = function () {
            return h(D.progresssteps);
        },
        Y = function () {
            return h(D.confirm);
        },
        $ = function () {
            return h(D.cancel);
        },
        J = function () {
            return h(D.actions);
        },
        X = function () {
            return h(D.footer);
        },
        G = function () {
            return h(D.close);
        },
        ee = function () {
            var e = n(E().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (e, t) {
                    return (e = parseInt(e.getAttribute("tabindex"))), (t = parseInt(t.getAttribute("tabindex"))) < e ? 1 : e < t ? -1 : 0;
                }),
                t = n(
                    E().querySelectorAll(
                        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]'
                    )
                );
            return (function (e) {
                for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t;
            })(e.concat(t));
        },
        v = function () {
            return !document.body.classList.contains(D["toast-shown"]);
        },
        y = function () {
            return document.body.classList.contains(D["toast-shown"]);
        },
        b = function () {
            return "undefined" == typeof window || "undefined" == typeof document;
        },
        w = (
            '\n <div aria-labelledby="' +
            D.title +
            '" aria-describedby="' +
            D.content +
            '" class="' +
            D.popup +
            '" tabindex="-1">\n   <div class="' +
            D.header +
            '">\n     <ul class="' +
            D.progresssteps +
            '"></ul>\n     <div class="' +
            D.icon +
            " " +
            B.error +
            '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="' +
            D.icon +
            " " +
            B.question +
            '">\n       <span class="' +
            D["icon-text"] +
            '">?</span>\n      </div>\n     <div class="' +
            D.icon +
            " " +
            B.warning +
            '">\n       <span class="' +
            D["icon-text"] +
            '">!</span>\n      </div>\n     <div class="' +
            D.icon +
            " " +
            B.info +
            '">\n       <span class="' +
            D["icon-text"] +
            '">i</span>\n      </div>\n     <div class="' +
            D.icon +
            " " +
            B.success +
            '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="' +
            D.image +
            '" />\n     <h2 class="' +
            D.title +
            '" id="' +
            D.title +
            '"></h2>\n     <button type="button" class="' +
            D.close +
            '">×</button>\n   </div>\n   <div class="' +
            D.content +
            '">\n     <div id="' +
            D.content +
            '"></div>\n     <input class="' +
            D.input +
            '" />\n     <input type="file" class="' +
            D.file +
            '" />\n     <div class="' +
            D.range +
            '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="' +
            D.select +
            '"></select>\n     <div class="' +
            D.radio +
            '"></div>\n     <label for="' +
            D.checkbox +
            '" class="' +
            D.checkbox +
            '">\n       <input type="checkbox" />\n     </label>\n     <textarea class="' +
            D.textarea +
            '"></textarea>\n     <div class="' +
            D.validationerror +
            '" id="' +
            D.validationerror +
            '"></div>\n   </div>\n   <div class="' +
            D.actions +
            '">\n     <button type="button" class="' +
            D.confirm +
            '">OK</button>\n     <button type="button" class="' +
            D.cancel +
            '">Cancel</button>\n   </div>\n   <div class="' +
            D.footer +
            '">\n   </div>\n </div>\n'
        ).replace(/(^|\n)\s*/g, ""),
        te = function (e) {
            var t = P();
            if ((t && (t.parentNode.removeChild(t), A([document.documentElement, document.body], [D["no-backdrop"], D["toast-shown"], D["has-column"]])), !b())) {
                var n = document.createElement("div");
                (n.className = D.container), (n.innerHTML = w), ("string" == typeof e.target ? document.querySelector(e.target) : e.target).appendChild(n);
                var o = E(),
                    r = Z(),
                    i = z(r, D.input),
                    a = z(r, D.file),
                    s = r.querySelector("." + D.range + " input"),
                    u = r.querySelector("." + D.range + " output"),
                    c = z(r, D.select),
                    l = r.querySelector("." + D.checkbox + " input"),
                    d = z(r, D.textarea);
                o.setAttribute("role", e.toast ? "alert" : "dialog"), o.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || o.setAttribute("aria-modal", "true");
                var p = void 0,
                    f = function (e) {
                        Ae.isVisible() && p !== e.target.value && Ae.resetValidationError(), (p = e.target.value);
                    };
                return (
                    (i.oninput = f),
                    (a.onchange = f),
                    (c.onchange = f),
                    (l.onchange = f),
                    (d.oninput = f),
                    (s.oninput = function (e) {
                        f(e), (u.value = s.value);
                    }),
                    (s.onchange = function (e) {
                        f(e), (s.nextSibling.value = s.value);
                    }),
                    o
                );
            }
            I("SweetAlert2 requires document to initialize");
        },
        ne = function (e, t) {
            if (!e) return F(t);
            if ("object" === (void 0 === e ? "undefined" : q(e)))
                if (((t.innerHTML = ""), 0 in e)) for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
                else t.appendChild(e.cloneNode(!0));
            else e && (t.innerHTML = e);
            U(t);
        },
        C = (function () {
            if (b()) return !1;
            var e = document.createElement("div"),
                t = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };
            for (var n in t) if (t.hasOwnProperty(n) && void 0 !== e.style[n]) return t[n];
            return !1;
        })(),
        oe = function (r) {
            var i = g(),
                a = parseInt(null === r.currentProgressStep ? Ae.getQueueStep() : r.currentProgressStep, 10);
            r.progressSteps && r.progressSteps.length
                ? (U(i),
                  (function (e) {
                      for (; e.firstChild; ) e.removeChild(e.firstChild);
                  })(i),
                  a >= r.progressSteps.length && x("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),
                  r.progressSteps.forEach(function (e, t) {
                      var n = document.createElement("li");
                      if ((W(n, D.progresscircle), (n.innerHTML = e), t === a && W(n, D.activeprogressstep), i.appendChild(n), t !== r.progressSteps.length - 1)) {
                          var o = document.createElement("li");
                          W(o, D.progressline), r.progressStepsDistance && (o.style.width = r.progressStepsDistance), i.appendChild(o);
                      }
                  }))
                : F(i);
        },
        k = function () {
            null === p.previousBodyPadding &&
                document.body.scrollHeight > window.innerHeight &&
                ((p.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"))),
                (document.body.style.paddingRight =
                    p.previousBodyPadding +
                    (function () {
                        if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
                        var e = document.createElement("div");
                        (e.style.width = "50px"), (e.style.height = "50px"), (e.style.overflow = "scroll"), document.body.appendChild(e);
                        var t = e.offsetWidth - e.clientWidth;
                        return document.body.removeChild(e), t;
                    })() +
                    "px"));
        },
        re = {},
        T = function (e, n) {
            var o = P(),
                t = E();
            if (t) {
                null !== e && "function" == typeof e && e(t), A(t, D.show), W(t, D.hide);
                var r = function () {
                    var e, t;
                    y() ||
                        ((e = window.scrollX),
                        (t = window.scrollY),
                        (re.restoreFocusTimeout = setTimeout(function () {
                            re.previousActiveElement && re.previousActiveElement.focus && (re.previousActiveElement.focus(), (re.previousActiveElement = null));
                        }, 100)),
                        void 0 !== e && void 0 !== t && window.scrollTo(e, t),
                        re.keydownTarget.removeEventListener("keydown", re.keydownHandler, { capture: re.keydownListenerCapture }),
                        (re.keydownHandlerAdded = !1)),
                        o.parentNode && o.parentNode.removeChild(o),
                        A([document.documentElement, document.body], [D.shown, D["height-auto"], D["no-backdrop"], D["toast-shown"], D["toast-column"]]),
                        v() &&
                            (null !== p.previousBodyPadding && ((document.body.style.paddingRight = p.previousBodyPadding), (p.previousBodyPadding = null)),
                            (function () {
                                if (f(document.body, D.iosfix)) {
                                    var e = parseInt(document.body.style.top, 10);
                                    A(document.body, D.iosfix), (document.body.style.top = ""), (document.body.scrollTop = -1 * e);
                                }
                            })()),
                        null !== n &&
                            "function" == typeof n &&
                            setTimeout(function () {
                                n();
                            });
                };
                C && !f(t, D.noanimation)
                    ? t.addEventListener(C, function e() {
                          t.removeEventListener(C, e), f(t, D.hide) && r();
                      })
                    : r();
            }
        };
    function j(e) {
        var t = function e() {
            for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            if (!(this instanceof e)) return new (Function.prototype.bind.apply(e, [null].concat(n)))();
            Object.getPrototypeOf(e).apply(this, n);
        };
        return (t.prototype = r(Object.create(e.prototype), { constructor: t })), "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e), t;
    }
    var ie = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            type: null,
            toast: !1,
            customClass: "",
            target: "body",
            backdrop: !0,
            animation: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: null,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: null,
            confirmButtonClass: null,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: null,
            cancelButtonClass: null,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonAriaLabel: "Close this dialog",
            showLoaderOnConfirm: !1,
            imageUrl: null,
            imageWidth: null,
            imageHeight: null,
            imageAlt: "",
            imageClass: null,
            timer: null,
            width: null,
            padding: null,
            background: null,
            input: null,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputClass: null,
            inputAttributes: {},
            inputValidator: null,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: null,
            progressStepsDistance: null,
            onBeforeOpen: null,
            onAfterClose: null,
            onOpen: null,
            onClose: null,
            useRejections: !1,
            expectRejections: !1,
        },
        _ = ["useRejections", "expectRejections"],
        V = function (e) {
            return ie.hasOwnProperty(e) || "extraParams" === e;
        },
        ae = function (e) {
            return -1 !== _.indexOf(e);
        },
        se = function (e) {
            for (var t in e) V(t) || x('Unknown parameter "' + t + '"'), ae(t) && l('The parameter "' + t + '" is deprecated and will be removed in the next major release.');
        },
        ue =
            '"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',
        ce = {};
    var le = [],
        de = function () {
            var e = E();
            e || Ae(""), (e = E());
            var t = J(),
                n = Y(),
                o = $();
            U(t), U(n), W([e, t], D.loading), (n.disabled = !0), (o.disabled = !0), e.setAttribute("data-loading", !0), e.setAttribute("aria-busy", !0), e.focus();
        },
        pe = Object.freeze({
            isValidParameter: V,
            isDeprecatedParameter: ae,
            argsToParams: function (n) {
                var o = {};
                switch (q(n[0])) {
                    case "string":
                        ["title", "html", "type"].forEach(function (e, t) {
                            switch (q(n[t])) {
                                case "string":
                                    o[e] = n[t];
                                    break;
                                case "undefined":
                                    break;
                                default:
                                    I("Unexpected type of " + e + '! Expected "string", got ' + q(n[t]));
                            }
                        });
                        break;
                    case "object":
                        r(o, n[0]);
                        break;
                    default:
                        return I('Unexpected type of argument! Expected "string" or "object", got ' + q(n[0])), !1;
                }
                return o;
            },
            adaptInputValidator: function (n) {
                return function (e, t) {
                    return n.call(this, e, t).then(
                        function () {},
                        function (e) {
                            return e;
                        }
                    );
                };
            },
            close: T,
            closePopup: T,
            closeModal: T,
            closeToast: T,
            isVisible: function () {
                return !!E();
            },
            clickConfirm: function () {
                return Y().click();
            },
            clickCancel: function () {
                return $().click();
            },
            getPopup: E,
            getTitle: L,
            getContent: Z,
            getImage: Q,
            getIcons: O,
            getButtonsWrapper: function () {
                return l("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"), h(D.actions);
            },
            getActions: J,
            getConfirmButton: Y,
            getCancelButton: $,
            getFooter: X,
            isLoading: function () {
                return E().hasAttribute("data-loading");
            },
            fire: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new (Function.prototype.bind.apply(this, [null].concat(t)))();
            },
            mixin: function (n) {
                return j(
                    (function (e) {
                        function t() {
                            return s(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                        }
                        return (
                            a(t, e),
                            o(t, [
                                {
                                    key: "_main",
                                    value: function (e) {
                                        return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_main", this).call(this, r({}, n, e));
                                    },
                                },
                            ]),
                            t
                        );
                    })(this)
                );
            },
            queue: function (e) {
                var i = this;
                le = e;
                var a = function () {
                        (le = []), document.body.removeAttribute("data-swal2-queue-step");
                    },
                    s = [];
                return new Promise(function (r, e) {
                    !(function t(n, o) {
                        n < le.length
                            ? (document.body.setAttribute("data-swal2-queue-step", n),
                              i(le[n]).then(function (e) {
                                  void 0 !== e.value ? (s.push(e.value), t(n + 1, o)) : (a(), r({ dismiss: e.dismiss }));
                              }))
                            : (a(), r({ value: s }));
                    })(0);
                });
            },
            getQueueStep: function () {
                return document.body.getAttribute("data-swal2-queue-step");
            },
            insertQueueStep: function (e, t) {
                return t && t < le.length ? le.splice(t, 0, e) : le.push(e);
            },
            deleteQueueStep: function (e) {
                void 0 !== le[e] && le.splice(e, 1);
            },
            showLoading: de,
            enableLoading: de,
            getTimerLeft: function () {
                return re.timeout && re.timeout.getTimerLeft();
            },
        }),
        fe =
            "function" == typeof Symbol
                ? Symbol
                : (function () {
                      var t = 0;
                      function e(e) {
                          return "__" + e + "_" + Math.floor(1e9 * Math.random()) + "_" + ++t + "__";
                      }
                      return (e.iterator = e("Symbol.iterator")), e;
                  })(),
        me =
            "function" == typeof WeakMap
                ? WeakMap
                : (function (n, o, t) {
                      function e() {
                          o(this, n, { value: fe("WeakMap") });
                      }
                      return (
                          (e.prototype = {
                              delete: function (e) {
                                  delete e[this[n]];
                              },
                              get: function (e) {
                                  return e[this[n]];
                              },
                              has: function (e) {
                                  return t.call(e, this[n]);
                              },
                              set: function (e, t) {
                                  o(e, this[n], { configurable: !0, value: t });
                              },
                          }),
                          e
                      );
                  })(fe("WeakMap"), Object.defineProperty, {}.hasOwnProperty),
        he = { promise: new me(), innerParams: new me(), domCache: new me() };
    function ge() {
        var e = he.innerParams.get(this),
            t = he.domCache.get(this);
        e.showConfirmButton || (F(t.confirmButton), e.showCancelButton || F(t.actions)),
            A([t.popup, t.actions], D.loading),
            t.popup.removeAttribute("aria-busy"),
            t.popup.removeAttribute("data-loading"),
            (t.confirmButton.disabled = !1),
            (t.cancelButton.disabled = !1);
    }
    var ve = function e(t, n) {
            var o, r, i;
            s(this, e);
            var a = n;
            (this.start = function () {
                (i = !0), (r = new Date()), (o = setTimeout(t, a));
            }),
                (this.stop = function () {
                    (i = !1), clearTimeout(o), (a -= new Date() - r);
                }),
                (this.getTimerLeft = function () {
                    return i && (this.stop(), this.start()), a;
                }),
                (this.getStateRunning = function () {
                    return i;
                }),
                this.start();
        },
        ye = {
            email: function (e, t) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.reject(t && t.validationMessage ? t.validationMessage : "Invalid email address");
            },
            url: function (e, t) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e) ? Promise.resolve() : Promise.reject(t && t.validationMessage ? t.validationMessage : "Invalid URL");
            },
        };
    var be = function (e) {
        var t = P(),
            n = E();
        null !== e.onBeforeOpen && "function" == typeof e.onBeforeOpen && e.onBeforeOpen(n),
            e.animation ? (W(n, D.show), W(t, D.fade), A(n, D.hide)) : A(n, D.fade),
            U(n),
            (t.style.overflowY = "hidden"),
            C && !f(n, D.noanimation)
                ? n.addEventListener(C, function e() {
                      n.removeEventListener(C, e), (t.style.overflowY = "auto");
                  })
                : (t.style.overflowY = "auto"),
            W([document.documentElement, document.body, t], D.shown),
            e.heightAuto && e.backdrop && !e.toast && W([document.documentElement, document.body], D["height-auto"]),
            v() &&
                (k(),
                (function () {
                    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !f(document.body, D.iosfix)) {
                        var e = document.body.scrollTop;
                        (document.body.style.top = -1 * e + "px"), W(document.body, D.iosfix);
                    }
                })()),
            y() || re.previousActiveElement || (re.previousActiveElement = document.activeElement),
            null !== e.onOpen &&
                "function" == typeof e.onOpen &&
                setTimeout(function () {
                    e.onOpen(n);
                });
    };
    var we = Object.freeze({
            hideLoading: ge,
            disableLoading: ge,
            getInput: function (e) {
                var t = he.innerParams.get(this),
                    n = he.domCache.get(this);
                if (!(e = e || t.input)) return null;
                switch (e) {
                    case "select":
                    case "textarea":
                    case "file":
                        return z(n.content, D[e]);
                    case "checkbox":
                        return n.popup.querySelector("." + D.checkbox + " input");
                    case "radio":
                        return n.popup.querySelector("." + D.radio + " input:checked") || n.popup.querySelector("." + D.radio + " input:first-child");
                    case "range":
                        return n.popup.querySelector("." + D.range + " input");
                    default:
                        return z(n.content, D.input);
                }
            },
            enableButtons: function () {
                var e = he.domCache.get(this);
                (e.confirmButton.disabled = !1), (e.cancelButton.disabled = !1);
            },
            disableButtons: function () {
                var e = he.domCache.get(this);
                (e.confirmButton.disabled = !0), (e.cancelButton.disabled = !0);
            },
            enableConfirmButton: function () {
                he.domCache.get(this).confirmButton.disabled = !1;
            },
            disableConfirmButton: function () {
                he.domCache.get(this).confirmButton.disabled = !0;
            },
            enableInput: function () {
                var e = this.getInput();
                if (!e) return !1;
                if ("radio" === e.type) for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) t[n].disabled = !1;
                else e.disabled = !1;
            },
            disableInput: function () {
                var e = this.getInput();
                if (!e) return !1;
                if (e && "radio" === e.type) for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) t[n].disabled = !0;
                else e.disabled = !0;
            },
            showValidationError: function (e) {
                var t = he.domCache.get(this);
                t.validationError.innerHTML = e;
                var n = window.getComputedStyle(t.popup);
                (t.validationError.style.marginLeft = "-" + n.getPropertyValue("padding-left")), (t.validationError.style.marginRight = "-" + n.getPropertyValue("padding-right")), U(t.validationError);
                var o = this.getInput();
                o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", D.validationerror), N(o), W(o, D.inputerror));
            },
            resetValidationError: function () {
                var e = he.domCache.get(this);
                e.validationError && F(e.validationError);
                var t = this.getInput();
                t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), A(t, D.inputerror));
            },
            getProgressSteps: function () {
                return he.innerParams.get(this).progressSteps;
            },
            setProgressSteps: function (e) {
                var t = he.innerParams.get(this),
                    n = r({}, t, { progressSteps: e });
                he.innerParams.set(this, n), oe(n);
            },
            showProgressSteps: function () {
                var e = he.domCache.get(this);
                U(e.progressSteps);
            },
            hideProgressSteps: function () {
                var e = he.domCache.get(this);
                F(e.progressSteps);
            },
            _main: function (e) {
                var T = this;
                se(e);
                var j = r({}, ie, e);
                !(function (t) {
                    t.inputValidator ||
                        Object.keys(ye).forEach(function (e) {
                            t.input === e && (t.inputValidator = t.expectRejections ? ye[e] : Ae.adaptInputValidator(ye[e]));
                        }),
                        (!t.target || ("string" == typeof t.target && !document.querySelector(t.target)) || ("string" != typeof t.target && !t.target.appendChild)) &&
                            (x('Target parameter is not valid, defaulting to "body"'), (t.target = "body"));
                    var e = void 0,
                        n = E(),
                        o = "string" == typeof t.target ? document.querySelector(t.target) : t.target;
                    (e = n && o && n.parentNode !== o.parentNode ? te(t) : n || te(t)),
                        t.width && (e.style.width = "number" == typeof t.width ? t.width + "px" : t.width),
                        t.padding && (e.style.padding = "number" == typeof t.padding ? t.padding + "px" : t.padding),
                        t.background && (e.style.background = t.background);
                    for (var r = window.getComputedStyle(e).getPropertyValue("background-color"), i = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), a = 0; a < i.length; a++) i[a].style.backgroundColor = r;
                    var s = P(),
                        u = L(),
                        c = Z().querySelector("#" + D.content),
                        l = J(),
                        d = Y(),
                        p = $(),
                        f = G(),
                        m = X();
                    if (
                        (t.titleText ? (u.innerText = t.titleText) : t.title && ("string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), ne(t.title, u)),
                        "string" == typeof t.backdrop ? (P().style.background = t.backdrop) : t.backdrop || W([document.documentElement, document.body], D["no-backdrop"]),
                        t.html ? ne(t.html, c) : t.text ? ((c.textContent = t.text), U(c)) : F(c),
                        t.position in D ? W(s, D[t.position]) : (x('The "position" parameter is not valid, defaulting to "center"'), W(s, D.center)),
                        t.grow && "string" == typeof t.grow)
                    ) {
                        var h = "grow-" + t.grow;
                        h in D && W(s, D[h]);
                    }
                    "function" == typeof t.animation && (t.animation = t.animation.call()),
                        t.showCloseButton ? (f.setAttribute("aria-label", t.closeButtonAriaLabel), U(f)) : F(f),
                        (e.className = D.popup),
                        t.toast ? (W([document.documentElement, document.body], D["toast-shown"]), W(e, D.toast)) : W(e, D.modal),
                        t.customClass && W(e, t.customClass),
                        oe(t);
                    for (var g = O(), v = 0; v < g.length; v++) F(g[v]);
                    if (t.type) {
                        var y = !1;
                        for (var b in B)
                            if (t.type === b) {
                                y = !0;
                                break;
                            }
                        if (!y) return I("Unknown alert type: " + t.type);
                        var w = e.querySelector("." + D.icon + "." + B[t.type]);
                        U(w), t.animation && W(w, "swal2-animate-" + t.type + "-icon");
                    }
                    var C = Q();
                    if (
                        (t.imageUrl
                            ? (C.setAttribute("src", t.imageUrl),
                              C.setAttribute("alt", t.imageAlt),
                              U(C),
                              t.imageWidth ? C.setAttribute("width", t.imageWidth) : C.removeAttribute("width"),
                              t.imageHeight ? C.setAttribute("height", t.imageHeight) : C.removeAttribute("height"),
                              (C.className = D.image),
                              t.imageClass && W(C, t.imageClass))
                            : F(C),
                        t.showCancelButton ? (p.style.display = "inline-block") : F(p),
                        t.showConfirmButton ? S(d, "display") : F(d),
                        t.showConfirmButton || t.showCancelButton ? U(l) : F(l),
                        (d.innerHTML = t.confirmButtonText),
                        (p.innerHTML = t.cancelButtonText),
                        d.setAttribute("aria-label", t.confirmButtonAriaLabel),
                        p.setAttribute("aria-label", t.cancelButtonAriaLabel),
                        (d.className = D.confirm),
                        W(d, t.confirmButtonClass),
                        (p.className = D.cancel),
                        W(p, t.cancelButtonClass),
                        t.buttonsStyling)
                    ) {
                        W([d, p], D.styled), t.confirmButtonColor && (d.style.backgroundColor = t.confirmButtonColor), t.cancelButtonColor && (p.style.backgroundColor = t.cancelButtonColor);
                        var k = window.getComputedStyle(d).getPropertyValue("background-color");
                        (d.style.borderLeftColor = k), (d.style.borderRightColor = k);
                    } else A([d, p], D.styled), (d.style.backgroundColor = d.style.borderLeftColor = d.style.borderRightColor = ""), (p.style.backgroundColor = p.style.borderLeftColor = p.style.borderRightColor = "");
                    ne(t.footer, m),
                        !0 === t.animation ? A(e, D.noanimation) : W(e, D.noanimation),
                        t.showLoaderOnConfirm &&
                            !t.preConfirm &&
                            x("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
                })(j),
                    Object.freeze(j),
                    he.innerParams.set(this, j),
                    re.timeout && (re.timeout.stop(), delete re.timeout),
                    clearTimeout(re.restoreFocusTimeout);
                var _ = { popup: E(), container: P(), content: Z(), actions: J(), confirmButton: Y(), cancelButton: $(), closeButton: G(), validationError: h(D.validationerror), progressSteps: g() };
                he.domCache.set(this, _);
                var V = this.constructor;
                return new Promise(function (t, n) {
                    var o = function (e) {
                            V.closePopup(j.onClose, j.onAfterClose), j.useRejections ? t(e) : t({ value: e });
                        },
                        c = function (e) {
                            V.closePopup(j.onClose, j.onAfterClose), j.useRejections ? n(e) : t({ dismiss: e });
                        },
                        l = function (e) {
                            V.closePopup(j.onClose, j.onAfterClose), n(e);
                        };
                    j.timer &&
                        (re.timeout = new ve(function () {
                            c("timer"), delete re.timeout;
                        }, j.timer)),
                        j.input &&
                            setTimeout(function () {
                                var e = T.getInput();
                                e && N(e);
                            }, 0);
                    for (
                        var d = function (t) {
                                if ((j.showLoaderOnConfirm && V.showLoading(), j.preConfirm)) {
                                    T.resetValidationError();
                                    var e = Promise.resolve().then(function () {
                                        return j.preConfirm(t, j.extraParams);
                                    });
                                    j.expectRejections
                                        ? e.then(
                                              function (e) {
                                                  return o(e || t);
                                              },
                                              function (e) {
                                                  T.hideLoading(), e && T.showValidationError(e);
                                              }
                                          )
                                        : e.then(
                                              function (e) {
                                                  K(_.validationError) || !1 === e ? T.hideLoading() : o(e || t);
                                              },
                                              function (e) {
                                                  return l(e);
                                              }
                                          );
                                } else o(t);
                            },
                            e = function (e) {
                                var t = e || window.event,
                                    n = t.target || t.srcElement,
                                    o = _.confirmButton,
                                    r = _.cancelButton,
                                    i = o && (o === n || o.contains(n)),
                                    a = r && (r === n || r.contains(n));
                                switch (t.type) {
                                    case "click":
                                        if (i && V.isVisible())
                                            if ((T.disableButtons(), j.input)) {
                                                var s = (function () {
                                                    var e = T.getInput();
                                                    if (!e) return null;
                                                    switch (j.input) {
                                                        case "checkbox":
                                                            return e.checked ? 1 : 0;
                                                        case "radio":
                                                            return e.checked ? e.value : null;
                                                        case "file":
                                                            return e.files.length ? e.files[0] : null;
                                                        default:
                                                            return j.inputAutoTrim ? e.value.trim() : e.value;
                                                    }
                                                })();
                                                if (j.inputValidator) {
                                                    T.disableInput();
                                                    var u = Promise.resolve().then(function () {
                                                        return j.inputValidator(s, j.extraParams);
                                                    });
                                                    j.expectRejections
                                                        ? u.then(
                                                              function () {
                                                                  T.enableButtons(), T.enableInput(), d(s);
                                                              },
                                                              function (e) {
                                                                  T.enableButtons(), T.enableInput(), e && T.showValidationError(e);
                                                              }
                                                          )
                                                        : u.then(
                                                              function (e) {
                                                                  T.enableButtons(), T.enableInput(), e ? T.showValidationError(e) : d(s);
                                                              },
                                                              function (e) {
                                                                  return l(e);
                                                              }
                                                          );
                                                } else d(s);
                                            } else d(!0);
                                        else a && V.isVisible() && (T.disableButtons(), c(V.DismissReason.cancel));
                                }
                            },
                            r = _.popup.querySelectorAll("button"),
                            i = 0;
                        i < r.length;
                        i++
                    )
                        (r[i].onclick = e), (r[i].onmouseover = e), (r[i].onmouseout = e), (r[i].onmousedown = e);
                    if (
                        ((_.closeButton.onclick = function () {
                            c(V.DismissReason.close);
                        }),
                        j.toast)
                    )
                        _.popup.onclick = function (e) {
                            j.showConfirmButton || j.showCancelButton || j.showCloseButton || j.input || c(V.DismissReason.close);
                        };
                    else {
                        var a = !1;
                        (_.popup.onmousedown = function () {
                            _.container.onmouseup = function (e) {
                                (_.container.onmouseup = void 0), e.target === _.container && (a = !0);
                            };
                        }),
                            (_.container.onmousedown = function () {
                                _.popup.onmouseup = function (e) {
                                    (_.popup.onmouseup = void 0), (e.target === _.popup || _.popup.contains(e.target)) && (a = !0);
                                };
                            }),
                            (_.container.onclick = function (e) {
                                a ? (a = !1) : e.target === _.container && H(j.allowOutsideClick) && c(V.DismissReason.backdrop);
                            });
                    }
                    j.reverseButtons ? _.confirmButton.parentNode.insertBefore(_.cancelButton, _.confirmButton) : _.confirmButton.parentNode.insertBefore(_.confirmButton, _.cancelButton);
                    var s = function (e, t) {
                        for (var n = ee(j.focusCancel), o = 0; o < n.length; o++) {
                            (e += t) === n.length ? (e = 0) : -1 === e && (e = n.length - 1);
                            var r = n[e];
                            if (K(r)) return r.focus();
                        }
                        _.popup.focus();
                    };
                    re.keydownHandlerAdded && (re.keydownTarget.removeEventListener("keydown", re.keydownHandler, { capture: re.keydownListenerCapture }), (re.keydownHandlerAdded = !1)),
                        j.toast ||
                            ((re.keydownHandler = function (e) {
                                return (function (e, t) {
                                    if ((t.stopKeydownPropagation && e.stopPropagation(), "Enter" !== e.key || e.isComposing))
                                        if ("Tab" === e.key) {
                                            for (var n = e.target || e.srcElement, o = ee(t.focusCancel), r = -1, i = 0; i < o.length; i++)
                                                if (n === o[i]) {
                                                    r = i;
                                                    break;
                                                }
                                            e.shiftKey ? s(r, -1) : s(r, 1), e.stopPropagation(), e.preventDefault();
                                        } else
                                            -1 !== ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(e.key)
                                                ? document.activeElement === _.confirmButton && K(_.cancelButton)
                                                    ? _.cancelButton.focus()
                                                    : document.activeElement === _.cancelButton && K(_.confirmButton) && _.confirmButton.focus()
                                                : ("Escape" !== e.key && "Esc" !== e.key) || !0 !== H(t.allowEscapeKey) || c(V.DismissReason.esc);
                                    else if (e.target && T.getInput() && e.target.outerHTML === T.getInput().outerHTML) {
                                        if (-1 !== ["textarea", "file"].indexOf(t.input)) return;
                                        V.clickConfirm(), e.preventDefault();
                                    }
                                })(e, j);
                            }),
                            (re.keydownTarget = j.keydownListenerCapture ? window : _.popup),
                            (re.keydownListenerCapture = j.keydownListenerCapture),
                            re.keydownTarget.addEventListener("keydown", re.keydownHandler, { capture: re.keydownListenerCapture }),
                            (re.keydownHandlerAdded = !0)),
                        T.enableButtons(),
                        T.hideLoading(),
                        T.resetValidationError(),
                        (j.input || j.footer || j.showCloseButton) && W(document.body, D["toast-column"]);
                    for (var u = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], p = void 0, f = 0; f < u.length; f++) {
                        var m = D[u[f]],
                            h = z(_.content, m);
                        if ((p = T.getInput(u[f]))) {
                            for (var g in p.attributes)
                                if (p.attributes.hasOwnProperty(g)) {
                                    var v = p.attributes[g].name;
                                    "type" !== v && "value" !== v && p.removeAttribute(v);
                                }
                            for (var y in j.inputAttributes) p.setAttribute(y, j.inputAttributes[y]);
                        }
                        (h.className = m), j.inputClass && W(h, j.inputClass), F(h);
                    }
                    var b = void 0;
                    switch (j.input) {
                        case "text":
                        case "email":
                        case "password":
                        case "number":
                        case "tel":
                        case "url":
                            ((p = z(_.content, D.input)).value = j.inputValue), (p.placeholder = j.inputPlaceholder), (p.type = j.input), U(p);
                            break;
                        case "file":
                            ((p = z(_.content, D.file)).placeholder = j.inputPlaceholder), (p.type = j.input), U(p);
                            break;
                        case "range":
                            var w = z(_.content, D.range),
                                C = w.querySelector("input"),
                                k = w.querySelector("output");
                            (C.value = j.inputValue), (C.type = j.input), (k.value = j.inputValue), U(w);
                            break;
                        case "select":
                            var x = z(_.content, D.select);
                            if (((x.innerHTML = ""), j.inputPlaceholder)) {
                                var B = document.createElement("option");
                                (B.innerHTML = j.inputPlaceholder), (B.value = ""), (B.disabled = !0), (B.selected = !0), x.appendChild(B);
                            }
                            b = function (e) {
                                e.forEach(function (e) {
                                    var t = M(e, 2),
                                        n = t[0],
                                        o = t[1],
                                        r = document.createElement("option");
                                    (r.value = n), (r.innerHTML = o), j.inputValue.toString() === n.toString() && (r.selected = !0), x.appendChild(r);
                                }),
                                    U(x),
                                    x.focus();
                            };
                            break;
                        case "radio":
                            var A = z(_.content, D.radio);
                            (A.innerHTML = ""),
                                (b = function (e) {
                                    e.forEach(function (e) {
                                        var t = M(e, 2),
                                            n = t[0],
                                            o = t[1],
                                            r = document.createElement("input"),
                                            i = document.createElement("label");
                                        (r.type = "radio"), (r.name = D.radio), (r.value = n), j.inputValue.toString() === n.toString() && (r.checked = !0);
                                        var a = document.createElement("span");
                                        (a.innerHTML = o), (a.className = D.label), i.appendChild(r), i.appendChild(a), A.appendChild(i);
                                    }),
                                        U(A);
                                    var t = A.querySelectorAll("input");
                                    t.length && t[0].focus();
                                });
                            break;
                        case "checkbox":
                            var S = z(_.content, D.checkbox),
                                P = T.getInput("checkbox");
                            (P.type = "checkbox"), (P.value = 1), (P.id = D.checkbox), (P.checked = Boolean(j.inputValue));
                            var E = S.getElementsByTagName("span");
                            E.length && S.removeChild(E[0]), ((E = document.createElement("span")).className = D.label), (E.innerHTML = j.inputPlaceholder), S.appendChild(E), U(S);
                            break;
                        case "textarea":
                            var O = z(_.content, D.textarea);
                            (O.value = j.inputValue), (O.placeholder = j.inputPlaceholder), U(O);
                            break;
                        case null:
                            break;
                        default:
                            I('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + j.input + '"');
                    }
                    if ("select" === j.input || "radio" === j.input) {
                        var L = function (e) {
                            return b(
                                ((t = e),
                                (n = []),
                                "undefined" != typeof Map && t instanceof Map
                                    ? t.forEach(function (e, t) {
                                          n.push([t, e]);
                                      })
                                    : Object.keys(t).forEach(function (e) {
                                          n.push([e, t[e]]);
                                      }),
                                n)
                            );
                            var t, n;
                        };
                        R(j.inputOptions)
                            ? (V.showLoading(),
                              j.inputOptions.then(function (e) {
                                  T.hideLoading(), L(e);
                              }))
                            : "object" === q(j.inputOptions)
                            ? L(j.inputOptions)
                            : I("Unexpected type of inputOptions! Expected object, Map or Promise, got " + q(j.inputOptions));
                    } else
                        -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(j.input) &&
                            R(j.inputValue) &&
                            (V.showLoading(),
                            F(p),
                            j.inputValue
                                .then(function (e) {
                                    (p.value = "number" === j.input ? parseFloat(e) || 0 : e + ""), U(p), p.focus(), T.hideLoading();
                                })
                                .catch(function (e) {
                                    I("Error in inputValue promise: " + e), (p.value = ""), U(p), p.focus(), T.hideLoading();
                                }));
                    be(j),
                        j.toast ||
                            (H(j.allowEnterKey)
                                ? j.focusCancel && K(_.cancelButton)
                                    ? _.cancelButton.focus()
                                    : j.focusConfirm && K(_.confirmButton)
                                    ? _.confirmButton.focus()
                                    : s(-1, 1)
                                : document.activeElement && document.activeElement.blur()),
                        (_.container.scrollTop = 0);
                });
            },
        }),
        Ce = void 0;
    function ke() {
        if ("undefined" != typeof window) {
            "undefined" == typeof Promise &&
                I("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (void 0 === t[0]) return I("SweetAlert2 expects at least 1 attribute!"), !1;
            Ce = this;
            var o = Object.freeze(this.constructor.argsToParams(t));
            Object.defineProperties(this, { params: { value: o, writable: !1, enumerable: !0 } });
            var r = this._main(this.params);
            he.promise.set(this, r);
        }
    }
    (ke.prototype.then = function (e, t) {
        return he.promise.get(this).then(e, t);
    }),
        (ke.prototype.catch = function (e) {
            return he.promise.get(this).catch(e);
        }),
        (ke.prototype.finally = function (e) {
            return he.promise.get(this).finally(e);
        }),
        r(ke.prototype, we),
        r(ke, pe),
        Object.keys(we).forEach(function (t) {
            ke[t] = function () {
                var e;
                if (Ce) return (e = Ce)[t].apply(e, arguments);
            };
        }),
        (ke.DismissReason = e),
        (ke.noop = function () {}),
        (ke.version = "7.25.6");
    var xe,
        Be,
        Ae = j(
            ((xe = ke),
            (Be = (function (e) {
                function t() {
                    return s(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                }
                return (
                    a(t, xe),
                    o(
                        t,
                        [
                            {
                                key: "_main",
                                value: function (e) {
                                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_main", this).call(this, r({}, ce, e));
                                },
                            },
                        ],
                        [
                            {
                                key: "setDefaults",
                                value: function (t) {
                                    if ((l(ue), !t || "object" !== (void 0 === t ? "undefined" : q(t)))) throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");
                                    se(t),
                                        Object.keys(t).forEach(function (e) {
                                            xe.isValidParameter(e) && (ce[e] = t[e]);
                                        });
                                },
                            },
                            {
                                key: "resetDefaults",
                                value: function () {
                                    l(ue), (ce = {});
                                },
                            },
                        ]
                    ),
                    t
                );
            })()),
            "undefined" != typeof window && "object" === q(window._swalDefaults) && Be.setDefaults(window._swalDefaults),
            Be)
        );
    return (Ae.default = Ae);
}),
    "undefined" != typeof window && window.Sweetalert2 && (window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2);
"undefined" != typeof document &&
    (function (e, t) {
        var n = e.createElement("style");
        n.setAttribute('nonce', gon.style_nonce)
        if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)) n.styleSheet.disabled || (n.styleSheet.cssText = t);
        else
            try {
                n.innerHTML = t;
            } catch (e) {
                n.innerText = t;
            }
    })(
        document,
        "@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown.swal2-toast-column>.swal2-container>.swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-shown.swal2-toast-column>.swal2-container>.swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em}body.swal2-toast-shown.swal2-toast-column>.swal2-container>.swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-shown.swal2-toast-column>.swal2-container>.swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-shown.swal2-toast-column>.swal2-container>.swal2-toast .swal2-validationerror{font-size:1em}body.swal2-toast-shown>.swal2-container{position:fixed;background-color:transparent}body.swal2-toast-shown>.swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown>.swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown>.swal2-container.swal2-top-end,body.swal2-toast-shown>.swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown>.swal2-container.swal2-top-left,body.swal2-toast-shown>.swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown>.swal2-container.swal2-center-left,body.swal2-toast-shown>.swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown>.swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown>.swal2-container.swal2-center-end,body.swal2-toast-shown>.swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown>.swal2-container.swal2-bottom-left,body.swal2-toast-shown>.swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown>.swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown>.swal2-container.swal2-bottom-end,body.swal2-toast-shown>.swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:.3125em .3125em 0}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{align-items:center;justify-content:center;margin:1.25em auto 0}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:0 .3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:.75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validationerror{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validationerror::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}[dir=rtl] .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"
    );
