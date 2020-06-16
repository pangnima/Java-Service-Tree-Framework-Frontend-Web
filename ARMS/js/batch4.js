WRMCB = function (e) {
    var c = console;
    if (c && c.log && c.error) {
        c.log('Error running batched script.');
        c.error(e);
    }
}
;
try {
    /* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:impl', location = 'internal/browser-metrics-aa-beacon/impl.js' */
    !function (n, t) {
        var r = {}, e = {}, o = {}, i = {}, u = {};
        u = function (n, t, r, e, o, i, u, c, a, s, f, d, h, l, m, p, v, y) {
            Object.defineProperty(n, "__esModule", {value: !0});
            var E = r.addReportMarshaller;
            return E(o), E(e), E(i), E(u), E(c), E(a), E(s), E(f), E(d), E(h), E(l), E(m), E(p), E(v), E(y), t.subscribe(function (n) {
                r.beacon(n.report)
            }), n
        }(u, window["browser-metrics"], t, function (n, t) {
            function r(n) {
                return t(n.apdex)
            }

            return function (n) {
                if (r(n)) return {apdex: "" + n.apdex}
            }
        }(0, r = function (n) {
            return "number" == typeof n
        }), function (n, t, r, e) {
            return function (n) {
                var o = {};
                return Object.keys(n).forEach(function (i) {
                    var u = n[i];
                    (r(u) || t(u) || e(u) || null === u) && (o[i] = u)
                }), o
            }
        }(0, function (n) {
            return "boolean" == typeof n
        }, r, e = function (n) {
            return "string" == typeof n
        }), function (n, t, r) {
            function e(n) {
                return r(n.firstPaint)
            }

            return function (n) {
                if (e(n)) return {firstPaint: t(n.firstPaint)}
            }
        }(0, o = function (n) {
            return "" + Math.floor(n)
        }, r), function (n) {
            function t(n) {
                return "boolean" == typeof n.isInitial
            }

            return function (n) {
                if (t(n)) return {isInitial: "" + n.isInitial}
            }
        }(), function (n, t) {
            function r(n) {
                return t(n.journeyId)
            }

            return function (n) {
                if (r(n)) return {journeyId: n.journeyId}
            }
        }(0, e), function (n, t) {
            function r(n) {
                return t(n.key)
            }

            return function (n) {
                if (r(n)) return {key: n.key}
            }
        }(0, e), function (n, t) {
            function r(n) {
                return t(n.navigationType)
            }

            return function (n) {
                if (r(n)) return {navigationType: "" + n.navigationType}
            }
        }(0, r), function (n, t, r) {
            function e(n) {
                return r(n.readyForUser)
            }

            return function (n) {
                if (e(n)) return {readyForUser: t(n.readyForUser)}
            }
        }(0, o, r), function (n, t) {
            function r(n) {
                return t(n.redirectCount)
            }

            return function (n) {
                if (r(n)) return {redirectCount: "" + n.redirectCount}
            }
        }(0, r), function (n, t, r) {
            function e(n) {
                return r(n.resourceLoadedEnd)
            }

            return function (n) {
                if (e(n)) return {resourceLoadedEnd: t(n.resourceLoadedEnd)}
            }
        }(0, o, r), function (n, t, r) {
            function e(n) {
                return Array.isArray(n.resourceTiming)
            }

            function o(n) {
                return (n = Math.floor(n || 0)) > 0 ? i(n) : ""
            }

            function i(n) {
                return n.toString(36)
            }

            function u(n) {
                return [c[n.initiatorType] || a, o(n.startTime), o(n.responseEnd), o(n.responseStart), o(n.requestStart), o(n.connectEnd), o(n.secureConnectionStart), o(n.connectStart), o(n.domainLookupEnd), o(n.domainLookupStart), o(n.redirectEnd), o(n.redirectStart)].join(",").replace(/,+$/, "")
            }

            var c = {other: 0, img: 1, link: 2, script: 3, css: 4, xmlhttprequest: 5}, a = -1;
            return function (n) {
                if (e(n)) {
                    var o = new r;
                    return n.resourceTiming.forEach(function (n) {
                        var r = t.cleanUrl(n.name);
                        o.add(r || "��", u(n))
                    }), {resourceTiming: JSON.stringify(o.condensed().toTrieObject())}
                }
            }
        }(0, t, function (n, t) {
            function r(n) {
                return Object.keys(n).length
            }

            return function () {
                function n() {
                    this.children = {}, this.values = []
                }

                return n.prototype.add = function (t, r) {
                    0 == t.length ? this.values.push(r) : (this.children.hasOwnProperty(t[0]) || (this.children[t[0]] = new n), this.children[t[0]].add(t.substr(1), r))
                }, n.prototype.toTrieObject = function () {
                    var n = {};
                    return t(this.children, function (t, r) {
                        n[t] = r.toTrieObject()
                    }), 0 === this.values.length ? n : 0 === r(this.children) ? this.values : [n, this.values]
                }, n.prototype.condensed = function () {
                    var e = new n;
                    return e.values = this.values.concat(), t(this.children, function (n, o) {
                        var i = o.condensed();
                        0 === i.values.length && 1 === r(i.children) ? t(i.children, function (t, r) {
                            e.children[n + t] = r
                        }) : e.children[n] = i
                    }), e
                }, n
            }()
        }(0, i = function (n, t) {
            Object.keys(n).forEach(function (r) {
                t(r, n[r])
            })
        })), function (n, t, r) {
            function e(n) {
                return r(n.threshold)
            }

            return function (n) {
                if (e(n)) return {threshold: t(n.threshold)}
            }
        }(0, o, r), function (n, t, r) {
            var e = "unloadEventStart,unloadEventEnd,redirectStart,redirectEnd,fetchStart,domainLookupStart,domainLookupEnd,connectStart,connectEnd,secureConnectionStart,requestStart,responseStart,responseEnd,domLoading,domInteractive,domContentLoadedEventStart,domContentLoadedEventEnd,domComplete,loadEventStart,loadEventEnd".split(",");
            return function (n) {
                var o = {};
                return e.forEach(function (e) {
                    r(n[e]) && (o[e] = t(n[e]))
                }), o
            }
        }(0, o, r), function (n, t) {
            function r(n) {
                return t(n.userAgent)
            }

            return function (n) {
                if (r(n)) return {userAgent: n.userAgent}
            }
        }(0, e), function (n, t) {
            function r(n) {
                return "object" == typeof n.marks
            }

            return function (n) {
                if (r(n)) {
                    var e = {}, o = {marks: {}, measures: {}};
                    return n.marks.forEach(function (n) {
                        o.marks[n.name] = o.marks[n.name] || [], o.marks[n.name].push(Math.floor(n.time))
                    }), t(o.marks, function (n, t) {
                        e["mark." + n] = JSON.stringify(t)
                    }), n.measures.forEach(function (n) {
                        o.measures[n.name] = o.measures[n.name] || [], o.measures[n.name].push([Math.floor(n.startTime), Math.floor(n.duration)])
                    }), t(o.measures, function (n, t) {
                        e["measure." + n] = JSON.stringify(t)
                    }), e.userTimingRaw = JSON.stringify({marks: o.marks, measures: o.measures}), e
                }
            }
        }(0, i))
    }(0, window["browser-metrics-aa-beacon"]);
} catch (e) {
    WRMCB(e)
}
;
;
try {
    /* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:impl', location = 'impl.js' */
    window["browser-metrics-plugin"].install(function (t) {
        require(["internal/browser-metrics", "internal/browser-metrics-aa-beacon"], function (n, r) {
            var e = {}, i = {};
            i = function (t, n, r, e, i, o, u, a, c) {
                Object.defineProperty(t, "__esModule", {value: !0});
                var s = n.addReporter, f = r.addReportMarshaller, l = r.addUrlCleaner;
                return s(e), f(i), f(o), l(u), l(a), l(c), t
            }(i, n, r, function (t, n, r) {
                var e = /^(?:https?:)?\/\/[^\.]+\.cloudfront\.net\/p\/([^\/]+)\/main\.js$/,
                    i = /^(?:https?:)?\/\/aes-artifacts--cdn\.[^\.]+\.atlassian\.io\/hashed\/([^\/]+)\/.+\.js$/,
                    o = function () {
                        var t = r.Deferred();
                        return r(function () {
                            var r = [];
                            Array.prototype.slice.call(n.document.getElementsByTagName("script") || []).forEach(function (t) {
                                var n = t.getAttribute("src"), o = n && (n.match(i) || n.match(e));
                                if (o && o.length > 1) {
                                    var u = o[1];
                                    r.push({name: u, async: t.async})
                                }
                            }), t.resolve(r)
                        }), t.promise()
                    }().pipe(function (t) {
                        return {experiments: t}
                    });
                return function () {
                    return o
                }
            }(0, e = window, function (t, n) {
                var r;
                try {
                    r = n.require("jquery")
                } catch (t) {
                    r = n.jQuery
                }
                return r
            }(0, e)), function (t) {
                return function (t) {
                    if (function (t) {
                        return Array.isArray(t.experiments)
                    }(t)) return {
                        experiments: JSON.stringify(t.experiments.map(function (t) {
                            return [t.name, t.async ? 1 : 0]
                        }))
                    }
                }
            }(), function (t) {
                function n(t) {
                    var n = t.toLowerCase().replace(/[;,()+]/g, "");
                    return function (t) {
                        return !!t.match(/^[0-9.,_%\-]+$/)
                    }(n) || -1 !== r.indexOf(n) ? t : ""
                }

                var r = ["android", "applewebkit", "baiduspider", "bingbot", "build", "chrome", "compatible", "edge", "electron", "explorer", "firefox", "gecko", "googlebot", "iemobile", "intel", "ipad", "iphone", "khtml", "konqueror", "like", "linux", "mac", "macintosh", "maxthon", "microsoft", "mini", "mobi", "mobile", "mozilla", "msie", "mwendo", "nt", "opera", "opr", "os", "phone", "playstation", "presto", "rv", "safari", "samsung", "thunderbird", "trident", "ubuntu", "ucbrowser", "unix", "version", "vivo", "win", "win64", "windows", "wow64", "x", "x11", "x64", "x86", "x86_64", "xbox"];
                return function (t) {
                    if (t.userAgent) return {
                        userAgent: function (t) {
                            var r = /[\s\/:]/g, e = t.match(r);
                            return null === e ? n(t) : t.split(r).map(n).reduce(function (t, n) {
                                return t + e.shift() + n
                            })
                        }(t.userAgent)
                    }
                }
            }(), function (t, n, r) {
                var e = /^https:\/\/[^.]+\.cloudfront.net\/[^\/]+(\/wiki)?\/s\//g;
                return function (t) {
                    return t.match(e) ? (t = n(t), t = r(t)) : ""
                }
            }(0, function (t, n) {
                var r = /([&?][^&=]+)(=?)([^&#]*)/g;
                return function (t) {
                    return t.replace(r, function (t, r, e, i) {
                        return r + e + (n(i) ? i : "��")
                    })
                }
            }(0, function (t) {
                var n = /^(true|false|\d+)$/gi;
                return function (t) {
                    return !!t.match(n)
                }
            }()), function (t) {
                var n = /(\/s\/).+(\/_\/)/;
                return function (t) {
                    return t.replace(n, function (t, n, r) {
                        return n + "��" + r
                    })
                }
            }()), function (t) {
                var n = /^https:\/\/d2kryfvs3op226\.cloudfront\.net\/[a-f0-9]+\.[a-z]+$/g;
                return function (t) {
                    return t.match(n) ? t : ""
                }
            }(), function (t) {
                var n = /^https:\/\/[^\/]+\.atl-paas.net\//g;
                return function (t) {
                    return t.match(n) ? t : ""
                }
            }()), t()
        })
    }), define("internal/browser-metrics-plugin/collector", function () {
        return {
            install: function () {
                !function () {
                    var t, n, r, e, i, o, u, a, c, s, f, l, d, p, h, m, v, g, y, _, w, b, x, E, T, S, A, k, j, I;
                    t = function () {
                        return function (t) {
                            return {
                                isInitial: "isInitial" in t && t.isInitial,
                                start: t.timestamp,
                                end: null,
                                key: t.key,
                                threshold: t.threshold,
                                reporters: t.reporters
                            }
                        }
                    }(), r = function (t) {
                        return function (n) {
                            var r, e = t(n), i = n.threshold, o = 4 * n.threshold;
                            return r = e.readyForUser <= i ? 1 : e.readyForUser <= o ? .5 : 0, {apdex: r}
                        }
                    }(n = function () {
                        return function (t) {
                            return {readyForUser: t.end - t.start}
                        }
                    }()), function () {
                        "use strict";

                        function t(t) {
                            return "function" == typeof t
                        }

                        function n() {
                        }

                        function r() {
                            for (var t = 0; t < g; t += 2) {
                                (0, x[t])(x[t + 1]), x[t] = void 0, x[t + 1] = void 0
                            }
                            g = 0
                        }

                        function i() {
                        }

                        function o(n, r) {
                            n === r ? a(n, new TypeError("You cannot resolve a promise with itself")) : function (t) {
                                return "function" == typeof t || "object" == typeof t && null !== t
                            }(r) ? function (n, r) {
                                if (r.constructor === n.constructor) !function (t, n) {
                                    n._state === T ? u(t, n._result) : t._state === S ? a(t, n._result) : c(n, void 0, function (n) {
                                        o(t, n)
                                    }, function (n) {
                                        a(t, n)
                                    })
                                }(n, r); else {
                                    var e = function (t) {
                                        try {
                                            return t.then
                                        } catch (t) {
                                            return A.error = t, A
                                        }
                                    }(r);
                                    e === A ? a(n, A.error) : void 0 === e ? u(n, r) : t(e) ? function (t, n, r) {
                                        y(function (t) {
                                            var e = !1, i = function (t, n, r, e) {
                                                try {
                                                    t.call(n, r, e)
                                                } catch (t) {
                                                    return t
                                                }
                                            }(r, n, function (r) {
                                                e || (e = !0, n !== r ? o(t, r) : u(t, r))
                                            }, function (n) {
                                                e || (e = !0, a(t, n))
                                            }, t._label);
                                            !e && i && (e = !0, a(t, i))
                                        }, t)
                                    }(n, r, e) : u(n, r)
                                }
                            }(n, r) : u(n, r)
                        }

                        function u(t, n) {
                            t._state === E && (t._result = n, t._state = T, 0 === t._subscribers.length || y(s, t))
                        }

                        function a(t, n) {
                            t._state === E && (t._state = S, t._result = n, y(function (t) {
                                t._onerror && t._onerror(t._result), s(t)
                            }, t))
                        }

                        function c(t, n, r, e) {
                            var i = t._subscribers, o = i.length;
                            t._onerror = null, i[o] = n, i[o + T] = r, i[o + S] = e, 0 === o && t._state && y(s, t)
                        }

                        function s(t) {
                            var n = t._subscribers, r = t._state;
                            if (0 !== n.length) {
                                for (var e, i, o = t._result, u = 0; u < n.length; u += 3) e = n[u], i = n[u + r], e ? l(r, e, i, o) : i(o);
                                t._subscribers.length = 0
                            }
                        }

                        function f() {
                            this.error = null
                        }

                        function l(n, r, e, i) {
                            var c, s, f, l, d = t(e);
                            if (d) {
                                if ((c = function (t, n) {
                                    try {
                                        return t(n)
                                    } catch (t) {
                                        return k.error = t, k
                                    }
                                }(e, i)) === k ? (l = !0, s = c.error, c = null) : f = !0, r === c) return void a(r, new TypeError("A promises callback cannot return that same promise."))
                            } else c = i, f = !0;
                            r._state !== E || (d && f ? o(r, c) : l ? a(r, s) : n === T ? u(r, c) : n === S && a(r, c))
                        }

                        function d(t, n, r, e) {
                            this._instanceConstructor = t, this.promise = new t(i, e), this._abortOnReject = r, this._validateInput(n) ? (this._input = n, this.length = n.length, this._remaining = n.length, this._init(), 0 === this.length ? u(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && u(this.promise, this._result))) : a(this.promise, this._validationError())
                        }

                        function p(n, r) {
                            this._id = I++, this._label = r, this._state = void 0, this._result = void 0, this._subscribers = [], i !== n && (t(n) || function () {
                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                            }(), this instanceof p || function () {
                                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                            }(), function (t, n) {
                                try {
                                    n(function (n) {
                                        o(t, n)
                                    }, function (n) {
                                        a(t, n)
                                    })
                                } catch (n) {
                                    a(t, n)
                                }
                            }(this, n))
                        }

                        var h, m, v = h = Array.isArray ? Array.isArray : function (t) {
                                return "[object Array]" === Object.prototype.toString.call(t)
                            }, g = (Date.now, Object.create, 0), y = function (t, n) {
                                x[g] = t, x[g + 1] = n, 2 === (g += 2) && m()
                            }, _ = "undefined" != typeof window ? window : {},
                            w = _.MutationObserver || _.WebKitMutationObserver,
                            b = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                            x = new Array(1e3);
                        m = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? function () {
                            process.nextTick(r)
                        } : w ? function () {
                            var t = 0, n = new w(r), e = document.createTextNode("");
                            return n.observe(e, {characterData: !0}), function () {
                                e.data = t = ++t % 2
                            }
                        }() : b ? function () {
                            var t = new MessageChannel;
                            return t.port1.onmessage = r, function () {
                                t.port2.postMessage(0)
                            }
                        }() : function () {
                            setTimeout(r, 1)
                        };
                        var E = void 0, T = 1, S = 2, A = new f, k = new f;
                        d.prototype._validateInput = function (t) {
                            return v(t)
                        }, d.prototype._validationError = function () {
                            return new Error("Array Methods must be provided an Array")
                        }, d.prototype._init = function () {
                            this._result = new Array(this.length)
                        };
                        var j = d;
                        d.prototype._enumerate = function () {
                            for (var t = this.length, n = this.promise, r = this._input, e = 0; n._state === E && e < t; e++) this._eachEntry(r[e], e)
                        }, d.prototype._eachEntry = function (t, n) {
                            var r = this._instanceConstructor;
                            !function (t) {
                                return "object" == typeof t && null !== t
                            }(t) ? (this._remaining--, this._result[n] = this._makeResult(T, n, t)) : t.constructor === r && t._state !== E ? (t._onerror = null, this._settledAt(t._state, n, t._result)) : this._willSettleAt(r.resolve(t), n)
                        }, d.prototype._settledAt = function (t, n, r) {
                            var e = this.promise;
                            e._state === E && (this._remaining--, this._abortOnReject && t === S ? a(e, r) : this._result[n] = this._makeResult(t, n, r)), 0 === this._remaining && u(e, this._result)
                        }, d.prototype._makeResult = function (t, n, r) {
                            return r
                        }, d.prototype._willSettleAt = function (t, n) {
                            var r = this;
                            c(t, void 0, function (t) {
                                r._settledAt(T, n, t)
                            }, function (t) {
                                r._settledAt(S, n, t)
                            })
                        };
                        var I = 0, P = p;
                        p.all = function (t, n) {
                            return new j(this, t, !0, n).promise
                        }, p.race = function (t, n) {
                            var r = new this(i, n);
                            if (!v(t)) return a(r, new TypeError("You must pass an array to race.")), r;
                            for (var e = t.length, u = 0; r._state === E && u < e; u++) c(this.resolve(t[u]), void 0, function (t) {
                                o(r, t)
                            }, function (t) {
                                a(r, t)
                            });
                            return r
                        }, p.resolve = function (t, n) {
                            if (t && "object" == typeof t && t.constructor === this) return t;
                            var r = new this(i, n);
                            return o(r, t), r
                        }, p.reject = function (t, n) {
                            var r = new this(i, n);
                            return a(r, t), r
                        }, p.prototype = {
                            constructor: p, then: function (t, n, r) {
                                var e = this._state;
                                if (e === T && !t || e === S && !n) return this;
                                this._onerror = null;
                                var o = new this.constructor(i, r), u = this._result;
                                if (e) {
                                    var a = arguments[e - 1];
                                    y(function () {
                                        l(e, o, a, u)
                                    })
                                } else c(this, o, t, n);
                                return o
                            }, catch: function (t, n) {
                                return this.then(null, t, n)
                            }
                        };
                        var C = {
                            Promise: P, polyfill: function () {
                                var n;
                                "Promise" in (n = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self) && "resolve" in n.Promise && "reject" in n.Promise && "all" in n.Promise && "race" in n.Promise && function () {
                                    var r;
                                    return new n.Promise(function (t) {
                                        r = t
                                    }), t(r)
                                }() || (n.Promise = P)
                            }
                        };
                        e = C
                    }.call(this), c = function (t, n, r, e) {
                        function i() {
                            return u && u.loadTimes
                        }

                        function o() {
                            return void 0 !== a.msFirstPaint
                        }

                        if (n) {
                            var u = e.chrome, a = n.timing;
                            return function (n) {
                                return n.isInitial ? (e.top === e.self && (i() || o()) ? t(function () {
                                    return i() && u.loadTimes().firstPaintTime > 0 ? 1e3 * u.loadTimes().firstPaintTime - a.navigationStart : o() && a.msFirstPaint > 0 ? a.msFirstPaint - a.navigationStart : void 0
                                }, 250) : r.reject("The browser does not have a first paint metric")).then(function (t) {
                                    return {firstPaint: t}
                                }, function () {
                                    return {}
                                }) : {}
                            }
                        }
                    }(o = function (t) {
                        return function (n, r) {
                            return new t(function (t) {
                                function e() {
                                    var r = n();
                                    void 0 !== r && (clearInterval(i), t(r))
                                }

                                var i;
                                i = setInterval(e, r), e()
                            })
                        }
                    }(i = e.Promise), a = (u = window).performance, i, u), s = function (t) {
                        return {isInitial: t.isInitial}
                    }, f = function (t, n) {
                        var r = "browser-metrics-journey";
                        return function () {
                            return void 0 === n.sessionStorage ? t.reject("sessionStorage is required to produce a report for this transition.") : (null === n.sessionStorage.getItem(r) && n.sessionStorage.setItem(r, "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                                var r = 16 * n.Math.random() | 0;
                                return ("x" === t ? r : 3 & r | 8).toString(16)
                            })), t.resolve({journeyId: n.sessionStorage.getItem(r)}))
                        }
                    }(i, u), l = function () {
                        return function (t) {
                            return {key: t.key}
                        }
                    }(), p = function (t, n) {
                        return function (r) {
                            var e = {};
                            return r.isInitial && n() && (e.navigationType = t.performance.navigation.type), e
                        }
                    }(u, d = function (t) {
                        return function () {
                            return t.performance && t.performance.navigation && t.performance.timing && void 0 !== t.performance.timing.navigationStart
                        }
                    }(u)), h = function (t, n, r) {
                        return function (e) {
                            var i = {};
                            if (e.isInitial) {
                                if (!n()) return t.reject("The navigation timing API is required to produce a report for this transition.");
                                void 0 !== r.performance.navigation.redirectCount && (i.redirectCount = r.performance.navigation.redirectCount)
                            }
                            return t.resolve(i)
                        }
                    }(i, d, u), m = function (t) {
                        return function (n) {
                            var r = t.document.createElement("a");
                            return r.href = n, r.href
                        }
                    }(u), g = function (t, n) {
                        return function (r) {
                            var e = n.onresourcetimingbufferfull || function () {
                            };
                            t(n.addEventListener) ? n.addEventListener("resourcetimingbufferfull", r) : n.onresourcetimingbufferfull = function () {
                                r(), e()
                            }
                        }
                    }(v = function (t) {
                        return "function" == typeof t
                    }, a), y = function (t, n) {
                        return function () {
                            return n && t(n.getEntriesByType)
                        }
                    }(v, a), x = function (t) {
                        return function (n) {
                            return n.isInitial ? t().then(function (t) {
                                return 0 === t.length ? {resourceLoadedEnd: null} : {
                                    resourceLoadedEnd: t.map(function (t) {
                                        return t.responseEnd
                                    }).reduce(function (t, n) {
                                        return Math.max(t, n)
                                    })
                                }
                            }) : {}
                        }
                    }(b = function (t, n, r, e) {
                        return function () {
                            var i = function () {
                                var n = e.document.querySelectorAll("script[src][async]");
                                return Array.prototype.map.call(n, function (n) {
                                    return t(n.src)
                                })
                            }();
                            return r().then(function (t) {
                                return n().filter(function (t) {
                                    return "link" === t.initiatorType || "script" === t.initiatorType
                                }).filter(function (n) {
                                    return n.responseEnd < t.domContentLoadedEventStart
                                }).filter(function (t) {
                                    return "script" !== t.initiatorType || -1 === i.indexOf(t.name)
                                })
                            })
                        }
                    }(m, _ = function (t, n, r, e) {
                        function i() {
                            return r.getEntriesByType("resource").filter(function (t) {
                                return "img" !== t.initiatorType
                            })
                        }

                        function o() {
                            t(r.clearResourceTimings) && (u = i(), r.clearResourceTimings())
                        }

                        var u = [];
                        return y() ? (o(), n(o), function () {
                            return u.concat(i())
                        }) : function () {
                            return []
                        }
                    }(v, g, a), w = function (t, n, r, e) {
                        if (e) {
                            var i, o = e.timing,
                                u = "unloadEventStart,unloadEventEnd,redirectStart,redirectEnd,fetchStart,domainLookupStart,domainLookupEnd,connectStart,connectEnd,secureConnectionStart,requestStart,responseStart,responseEnd,domLoading,domInteractive,domContentLoadedEventStart,domContentLoadedEventEnd,domComplete,loadEventStart,loadEventEnd".split(",");
                            return function () {
                                return r() ? (void 0 === i && (i = t(function () {
                                    var t = {};
                                    if (o.loadEventEnd > 0) return u.forEach(function (n) {
                                        var r = o[n];
                                        r > 0 && (t[n] = r - o.navigationStart)
                                    }), t
                                }, 250)), i) : n.reject("The navigation timing API is required to produce a report for this transition.")
                            }
                        }
                    }(o, i, d, a), u)), E = function (t) {
                        return function (n) {
                            return n.isInitial ? t().then(function (t) {
                                if (0 === t.length) return {resourceLoadedStart: null};
                                var n = t.map(function (t) {
                                    return t.startTime
                                });
                                return {resourceLoadedStart: Math.min.apply(Math, n)}
                            }) : {}
                        }
                    }(b), T = function (t, n) {
                        var r = "duration,initiatorType,name".split(","),
                            e = "startTime,connectEnd,connectStart,domainLookupEnd,domainLookupStart,fetchStart,redirectEnd,redirectStart,requestStart,responseEnd,responseStart,secureConnectionStart".split(",");
                        return function (i) {
                            return t() ? {
                                resourceTiming: n().filter(function (t) {
                                    var n = t.responseEnd;
                                    return n >= i.start && n <= i.end && t.startTime >= i.start
                                }).map(function (t) {
                                    var n = {};
                                    return r.forEach(function (r) {
                                        n[r] = t[r]
                                    }), e.forEach(function (r) {
                                        n[r] = t[r] > 0 ? t[r] - i.start : 0
                                    }), n
                                })
                            } : {}
                        }
                    }(y, _), S = function () {
                        return function (t) {
                            return {threshold: t.threshold}
                        }
                    }(), A = function (t) {
                        return function (n) {
                            return n.isInitial ? t() : {}
                        }
                    }(w), k = function (t) {
                        return function () {
                            return {userAgent: t.navigator.userAgent}
                        }
                    }(u), j = function (t, n) {
                        return function (r) {
                            if (!n || !t(n.getEntriesByType)) return {};
                            var e = n.getEntriesByType("mark").filter(function (t) {
                                return t.startTime >= r.start && t.startTime <= r.end
                            }), i = n.getEntriesByType("measure").filter(function (t) {
                                return t.startTime >= r.start && t.startTime + t.duration <= r.end
                            });
                            return {
                                marks: e.map(function (t) {
                                    return {name: t.name, time: t.startTime - r.start}
                                }), measures: i.map(function (t) {
                                    return {name: t.name, startTime: t.startTime - r.start, duration: t.duration}
                                })
                            }
                        }
                    }(v, a), function (t, n, r) {
                        if (a) {
                            var e = new t;
                            n.delegateTo(e)
                        }
                    }(function (t, n, r) {
                        return function () {
                            var e, i = [], o = [];
                            return function (u) {
                                u.start ? function (n) {
                                    e = new t(n)
                                }(u.start) : u.end ? function (t) {
                                    e && e.key === t.key && (e.end = t.timestamp, r(e).then(function (t) {
                                        o.push(t), i.forEach(function (n) {
                                            n({report: t})
                                        })
                                    }), e = null)
                                }(u.end) : u.addReporter ? function (t) {
                                    n.add(t)
                                }(u.addReporter) : u.subscribe && function (t) {
                                    o.forEach(function (n) {
                                        t({report: n})
                                    }), i.push(t)
                                }(u.subscribe)
                            }
                        }
                    }(t, I = function (t, e, i, o, u, a, d, m, v, g, y, _, w, b, I) {
                        var P = [r, c, s, f, l, p, n, h, x, E, T, S, A, k, j];
                        return {
                            get: function () {
                                return P.concat()
                            }, add: function (t) {
                                P.push(t)
                            }
                        }
                    }(), function (t, n, r, e, i, o) {
                        return function (t) {
                            var e = t.reporters, u = o.get().concat(e).map(function (n) {
                                var e;
                                try {
                                    e = n(t)
                                } catch (t) {
                                    i(t), e = {}
                                }
                                return function (t) {
                                    return function (t) {
                                        return r.all([t]).then(function (t) {
                                            return t[0]
                                        })
                                    }(t).then(null, function () {
                                        return {}
                                    })
                                }(e)
                            });
                            return r.all(u).then(function (t) {
                                return n.apply(void 0, t)
                            })
                        }
                    }(0, function () {
                        var t = Object.prototype.hasOwnProperty;
                        return function () {
                            for (var n, r, e = {}, i = 0, o = arguments.length; i < o; i++) {
                                n = arguments[i];
                                for (r in n) t.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        }
                    }(), i, 0, function (t) {
                        return function (n) {
                            (t.console.error || t.console.log).call(t.console, n.stack || n)
                        }
                    }(u), I)), u["browser-metrics"])
                }()
            }
        }
    });
} catch (e) {
    WRMCB(e)
}
;
;
try {
    /* module-key = 'com.atlassian.jira.plugins.jira-browser-metrics:contrib', location = 'contrib.js' */
    window["browser-metrics-plugin"].install(function (e) {
        require(["internal/browser-metrics", "internal/browser-metrics-aa-beacon", "jquery"], function (r, n, t) {
            var i, o = {}, a = {}, s = {}, u = {}, c = {}, d = {}, f = {}, p = {}, l = {}, m = {}, b = {}, v = {},
                R = {}, w = {}, y = {};
            o = function (e) {
                e.window = (0, eval)("window");
                return e
            }(o), a = function (e, r) {
                function n() {
                    if (!t) {
                        var e = "com.atlassian.jira.plugins.jira-browser-metrics:contrib.scm-commit-id",
                            n = r.window.WRM.data.claim(e);
                        t = n ? {applicationHash: n} : {}
                    }
                    return t
                }

                e.applicationHashReporter = n;
                var t;
                return e
            }(a, o), s = function (e) {
                function r(e) {
                    return "string" == typeof e.applicationHash
                }

                function n(e) {
                    if (r(e)) return {applicationHash: e.applicationHash}
                }

                return e.applicationHashReportMarshaller = n, e
            }(s), u = function (e, r) {
                function n(e) {
                    return e.isInitial ? t.promise() : {}
                }

                e.applicationVersionReporter = n;
                var t = r.Deferred();
                return r(function () {
                    var e = {}, n = r("meta[name=application-name]").data("version");
                    n && (e.applicationHash = n), t.resolve(e)
                }), e
            }(u, t), c = function (e) {
                function r(e) {
                    return "string" == typeof e.applicationVersion
                }

                function n(e) {
                    if (r(e)) return {applicationVersion: e.applicationVersion}
                }

                return e.applicationVersionReportMarshaller = n, e
            }(c), d = function (e, r) {
                function n(e) {
                    return "" + Number(e) === e
                }

                function t(e) {
                    return e.isInitial ? i.promise() : {}
                }

                e.serverDurationReporter = t;
                var i = r.Deferred();
                return r(function () {
                    var e = {}, t = r("#jira_request_timing_info").find("[title=jira\\.request\\.server\\.time]").val();
                    t && n(t) && (e.serverDuration = Number(t));
                    var o = r("#jira_request_timing_info").find("[title=jira\\.request\\.server\\.head\\.time]").val();
                    o && n(o) && (e.serverHeadDuration = Number(o)), i.resolve(e)
                }), e
            }(d, t), f = function (e) {
                function r(e) {
                    return "number" == typeof e.serverDuration
                }

                function n(e) {
                    if (r(e)) return {
                        serverDuration: "" + e.serverDuration,
                        serverHeadDuration: "" + e.serverHeadDuration
                    }
                }

                return e.serverDurationReportMarshaller = n, e
            }(f), p = function (e, r) {
                function n(e) {
                    return e && e.__esModule ? e : {"default": e}
                }

                function t(e) {
                    return o.promise()
                }

                e.networkConnectionReporter = t;
                var i = n(r), o = i["default"].Deferred();
                return (0, i["default"])(function () {
                    var e = {}, r = window.navigator.connection;
                    r && (e.effectiveType = r.effectiveType, e.downlink = Number(r.downlink), e.rtt = Number(r.rtt)), o.resolve(e)
                }), e
            }(p, t), l = function (e) {
                function r(e) {
                    return "undefined" != typeof e.effectiveType && "number" == typeof e.downlink && "number" == typeof e.rtt
                }

                function n(e) {
                    if (r(e)) return {
                        connectionEffectiveType: e.effectiveType,
                        connectionDownlink: e.downlink,
                        connectionRTT: e.rtt
                    }
                }

                return e.networkConnectionReportMarshaller = n, e
            }(l), m = function (e, r) {
                function n(e) {
                    return "" + Number(e) === e
                }

                function t(e) {
                    return e.isInitial ? i.promise() : {}
                }

                e.databaseDurationReporter = t;
                var i = r.Deferred();
                return r(function () {
                    var e = {}, t = "#jira_request_timing_info",
                        o = r(t).find("[title=db\\.reads\\.time\\.in\\.ms]").val(),
                        a = r(t).find("[title=db\\.conns\\.time\\.in\\.ms]").val(),
                        s = r(t).find("[title=db\\.reads\\.count]").val(),
                        u = r(t).find("[title=head\\.db\\.reads\\.count]").val();
                    o && n(o) && (e.dbReadsTimeInMs = Number(o)), a && n(a) && (e.dbConnsTimeInMs = Number(a)), s && n(s) && (e.dbReadsCount = Number(s)), u && n(u) && (e.dbReadsHeadCount = Number(u)), i.resolve(e)
                }), e
            }(m, t), b = function (e) {
                function r(e) {
                    return "number" == typeof e.dbReadsTimeInMs || "number" == typeof e.dbConnsTimeInMs || "number" == typeof e.dbReadsCount || "number" == typeof e.dbReadsHeadCount
                }

                function n(e) {
                    if (r(e)) {
                        var n = {
                            dbReadsTimeInMs: "" + (e.dbReadsTimeInMs || ""),
                            dbConnsTimeInMs: "" + (e.dbConnsTimeInMs || "")
                        };
                        return e.dbReadsCount && (n.dbReadsCount = e.dbReadsCount), e.dbReadsHeadCount && (n.dbReadsHeadCount = e.dbReadsHeadCount), n
                    }
                }

                return e.databaseDurationReportMarshaller = n, e
            }(b), v = function (e, r) {
                function n(e) {
                    if (e.isInitial) {
                        var n = r.window.WRM.data.claim(t), i = n ? {correlationId: n} : {};
                        return i
                    }
                    return {}
                }

                e.correlationIdReporter = n;
                var t = "jira.request.correlation-id";
                return e
            }(v, o), R = function (e) {
                function r(e) {
                    return "string" == typeof e.correlationId
                }

                function n(e) {
                    if (r(e)) return {correlationId: e.correlationId}
                }

                return e.correlationIdReportMarshaller = n, e
            }(R), w = function (e, r) {
                function n(e) {
                    var n = {};
                    if (r.window.performance && r.window.performance.getEntriesByName && e.isInitial) {
                        var t = r.window.performance.getEntriesByName("mark_fully_visible"),
                            i = r.window.performance.getEntriesByName("mark_fully_loaded");
                        if (t && t.length > 0 && i && i.length > 0) {
                            var o = t[0].startTime;
                            n.deferScriptsStart = o;
                            var a = i[0].startTime;
                            n.deferScriptsEnd = a;
                            var s = 0, u = r.window.performance.getEntriesByName("defer_scripts_clicks");
                            u && u.forEach(function (e) {
                                var r = e.startTime;
                                r >= o && r <= a && s++
                            }), n.deferScriptsClicks = s;
                            var c = 0, d = r.window.performance.getEntriesByName("defer_scripts_keydowns");
                            d && d.forEach(function (e) {
                                var r = e.startTime;
                                r >= o && r <= a && c++
                            }), n.deferScriptsKeydowns = c
                        }
                    }
                    return n
                }

                return e.deferScriptsReporter = n, e
            }(w, o), y = function (e) {
                function r(e) {
                    var r = {};
                    return "number" == typeof e.deferScriptsStart && (r.deferScriptsStart = Math.floor(e.deferScriptsStart)), "number" == typeof e.deferScriptsEnd && (r.deferScriptsEnd = Math.floor(e.deferScriptsEnd)), "number" == typeof e.deferScriptsClicks && (r.deferScriptsClicks = Math.floor(e.deferScriptsClicks)), "number" == typeof e.deferScriptsKeydowns && (r.deferScriptsKeydowns = Math.floor(e.deferScriptsKeydowns)), r
                }

                return e.deferScriptsMarshaller = r, e
            }(y), i = function (e, r, n, t, i, o, a, s, u, c, d, f, p, l, m, b) {
                var v = m.addReporter, R = b.addReportMarshaller;
                v(e.applicationHashReporter), v(n.applicationVersionReporter), v(u.databaseDurationReporter), v(i.serverDurationReporter), v(a.networkConnectionReporter), v(d.correlationIdReporter), v(p.deferScriptsReporter), R(r.applicationHashReportMarshaller), R(t.applicationVersionReportMarshaller), R(c.databaseDurationReportMarshaller), R(o.serverDurationReportMarshaller), R(s.networkConnectionReportMarshaller), R(f.correlationIdReportMarshaller), R(l.deferScriptsMarshaller), m.subscribe(function (e) {
                    var r = document.getElementById("browser-metrics-report");
                    null == r && (r = document.createElement("div"), r.id = "browser-metrics-report", r.style.display = "none", document.body.appendChild(r)), r.textContent = JSON.stringify(e)
                })
            }(a, s, u, c, d, f, p, l, m, b, v, R, w, y, r, n), e()
        })
    });
} catch (e) {
    WRMCB(e)
}
;