try {
    window.performance.mark("async-atlassian-navigation.js:eval-start")
} catch (e) {
}
(window.webpackJsonp = window.webpackJsonp || []).push([["async-atlassian-navigation"], {
    "./src/packages/common-legacy-do-not-add-anything-new/src/engagement/coordination-client.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return v
        }));
        var r = n("./node_modules/react/index.js"), a = n.n(r), o = n("./node_modules/@atlassiansox/engagekit/dist/esm/coordination/coordination-client.js"), i = n("./node_modules/@atlassiansox/engagekit/dist/esm/coordination/coordination.js"), s = n("./src/packages/common-legacy-do-not-add-anything-new/src/util/get-tenant-context/index.js");

        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function u(e, t) {
            if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
        }

        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function d(e, t) {
            return (d = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
        }

        function f(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)return !1;
                if (Reflect.construct.sham)return !1;
                if ("function" == typeof Proxy)return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = p(e);
                if (t) {
                    var a = p(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else n = r.apply(this, arguments);
                return m(this, n)
            }
        }

        function m(e, t) {
            return !t || "object" !== c(t) && "function" != typeof t ? function (e) {
                if (void 0 === e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function p(e) {
            return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        var v = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }(n, e);
            var t = f(n);

            function n() {
                var e;
                u(this, n);
                for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)a[o] = arguments[o];
                return (e = t.call.apply(t, [this].concat(a))).client = null, e
            }

            return function (e, t, n) {
                t && l(e.prototype, t), n && l(e, n)
            }(n, [{
                key: "UNSAFE_componentWillMount", value: function () {
                    var e = Object(s.c)().cloudId;
                    this.client = new o.a(e, "/gateway/api")
                }
            }, {
                key: "render", value: function () {
                    var e = this.props.messageId;
                    return (a.a.createElement(i.a, {client: this.client, messageId: e}, this.props.children))
                }
            }]), n
        }(r.Component);
        v.displayName = "CoordinationClient"
    },
    "./src/packages/common-legacy-do-not-add-anything-new/src/util/location.js": function (e, t, n) {
        "use strict";
        t.a = function () {
            if ("undefined" != typeof window)return window.location
        }
    },
    "./src/packages/growth/onboarding/onboarding-nudges/src/async.js": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return r.b
        })), n.d(t, "c", (function () {
            return i
        })), n.d(t, "a", (function () {
            return h
        }));
        var r = n("./src/packages/growth/onboarding/onboarding-nudges/src/common/ui/onboarding-nudge/index.js"), a = n("./node_modules/react-async-component/commonjs/index.js"), o = function () {
            return n.e("async-jira-software-quickstart-nudges").then(n.bind(null, "./src/packages/growth/onboarding/onboarding-nudges/src/common/ui/quickstart-nudge/main.js")).then((function (e) {
                return e.QuickStartNudge
            }))
        }, i = Object(a.asyncComponent)({
            resolve: function () {
                return o()
            }, LoadingComponent: function (e) {
                return e.children
            }
        }), s = (Object(a.asyncComponent)({
            resolve: function () {
                return o()
            }
        }), n("./node_modules/react/index.js")), c = n.n(s), u = n("./src/packages/platform/observability/errors-handling/src/utils/fire-error-analytics.js"), l = n("./src/packages/growth/onboarding/state-initializer/src/index.js"), d = n("./src/packages/platform/observability/product-analytics-bridge/src/index.js");

        function f(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function m(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var p = function () {
            var e = {};
            return {
                shouldNudge: function (t, n) {
                    return null !== n && void 0 !== e[n] && e[n].nudgeId === t
                }, findCardToNudge: function (t, n, r, a, o) {
                    if (null !== n) {
                        e[n] || (e[n] = function () {
                            return {loading: !1, initialized: !1}
                        }());
                        var i = e[n];
                        if (!i.loading && !i.initialized)try {
                            i.loading = !0;
                            var s = window.innerWidth, c = window.innerHeight, u = f(t.reduce((function (e, t) {
                                var n = t.id, r = t.key, a = window["card-".concat(r)];
                                if (a) {
                                    var o = a.getBoundingClientRect(), i = o.left, u = o.top, l = o.width, d = o.height;
                                    if (i + l > s || u + d > c)return e;
                                    var f = Math.sqrt(Math.pow(i, 2) + Math.pow(u, 2));
                                    e.push({id: n, distance: f, top: u, width: l})
                                }
                                return e
                            }), []).sort((function (e, t) {
                                return e.distance - t.distance
                            })).filter((function (e, t, n) {
                                return e.distance < n[0].distance + n[0].width
                            })).sort((function (e, t) {
                                return e.top - t.top
                            })), 1)[0];
                            u ? (i.nudgeId = u.id, r()) : a()
                        } catch (e) {
                            o(e, {error: e.message})
                        } finally {
                            i.loading = !1, i.initialized = !0
                        }
                    }
                }
            }
        }(), v = p.shouldNudge, g = p.findCardToNudge;

        function b(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var h = function (e) {
            var t = e.issues, n = e.id, a = e.children, o = Object(d.w)().createAnalyticsEvent, i = b(Object(s.useState)(function (e) {
                return Array.isArray(e) && e[0] && e[0].projectId || null
            }(t)), 1)[0], f = Object(s.useCallback)((function () {
                return Object(d.t)(o({}), "".concat(l.a.ISSUE_NUDGE, " foundCard"))
            }), [o]), m = Object(s.useCallback)((function () {
                return Object(d.t)(o({}), "".concat(l.a.ISSUE_NUDGE, " foundNoCard"))
            }), [o]), p = Object(s.useCallback)((function (e, t) {
                return Object(u.a)({
                    meta: {
                        id: "".concat(l.a.ISSUE_NUDGE, ".cardLookup"),
                        packageName: "jiraSoftwareOnboardingNudges"
                    }, event: o({}), error: e, attributes: t
                })
            }), [o]);
            return Object(s.useEffect)((function () {
                g(t, i, f, m, p)
            }), []), v(n, i) ? c.a.createElement(r.a, {
                experience: l.c.ISSUE_NUDGE,
                content: "Click an issue to see more details.",
                hideDelay: 0
            }, a) : a
        };
        h.displayName = "JswIssueNudge"
    },
    "./src/packages/navigation-apps/about-jira-modal/async.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return a
        }));
        var r = n("./node_modules/react-async-component/commonjs/index.js"), a = Object(r.asyncComponent)({
            resolve: function () {
                return n.e("async-about-jira-modal").then(n.bind(null, "./src/packages/navigation-apps/about-jira-modal/src/ui/main.js")).then((function (e) {
                    return e.default
                }))
            }
        })
    },
    "./src/packages/navigation-apps/atlassian-navigation/src/common/ui/menu/error/assets/generic-error.svg": function (e, t, n) {
        e.exports = n.p + "assets/generic-error.389d585006ab09f4921cb35154a49a41.8.svg"
    },
    "./src/packages/navigation-apps/atlassian-navigation/src/common/utils/index.js": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return a
        })), n.d(t, "c", (function () {
            return o
        })), n.d(t, "a", (function () {
            return i
        }));
        var r = n("./src/packages/platform/controllers/tenant-context/src/index.js"), a = function () {
            return "prod" === Object(r.i)() ? "https://id.atlassian.com/manage-profile/profile-and-visibility" : "https://id.stg.internal.atlassian.com/manage-profile/profile-and-visibility"
        }, o = function () {
            var e = Object(r.h)(), t = Object(r.e)();
            return "".concat(e, "/jira/people/").concat(t || "")
        }, i = function (e) {
            return e && e.length > 0 ? {id: String(e[0].id), type: e[0].type} : {id: void 0, type: void 0}
        }
    },
    "./src/packages/navigation-apps/atlassian-navigation/src/common/utils/test-id.js": function (e, t, n) {
        "use strict";
        function r(e) {
            return function (e) {
                    if (Array.isArray(e))return a(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))return Array.from(e)
                }(e) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        n.d(t, "a", (function () {
            return s
        })), n.d(t, "b", (function () {
            return c
        }));
        var o = "atlassian-navigation-", i = function (e) {
            return null != e && "" !== e
        }, s = function (e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)n[a - 1] = arguments[a];
            return [e].concat(r(n.filter(Boolean))).join("--").toLowerCase()
        }, c = function (e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)n[r - 1] = arguments[r];
            return s.apply(void 0, [o + (i(e) ? "-".concat(e) : "")].concat(n))
        }
    },
    "./src/packages/navigation-apps/atlassian-navigation/src/controllers/from-spotlight-tour/main.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return a
        }));
        var r = n("./src/packages/platform/controllers/switch/src/index.js"), a = Object(r.a)("spotlight").useSwitch
    },
    "./src/packages/navigation-apps/atlassian-navigation/src/controllers/navigation-item-analytics/main.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return i
        }));
        var r = n("./node_modules/react/index.js"), a = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/controllers/overflow/index.js"), o = n("./src/packages/platform/observability/product-analytics-bridge/src/index.js"), i = function (e) {
            var t = e.navigationItemId, n = e.useAnalyticsEvents, i = void 0 === n ? o.w : n, s = e.fireUIAnalytics, c = void 0 === s ? o.u : s, u = e.useOverflowStatus, l = void 0 === u ? a.c : u, d = e.useCallback, f = void 0 === d ? r.useCallback : d, m = l().isVisible, p = i().createAnalyticsEvent;
            return f((function () {
                var e = p({action: "clicked", actionSubject: "navigationItem"});
                c(e, t, {isInMore: !m, navigationLayer: "global"})
            }), [p, c, m, t])
        }
    },
    "./src/packages/navigation-apps/atlassian-navigation/src/controllers/top-menus/main.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return o
        }));
        var r = n("./src/packages/platform/controllers/switch/src/index.js"), a = Object(r.a)("atlassian-navigation-top-menus"), o = (a.SwitchContainer, a.useSwitch)
    },
    "./src/packages/navigation-apps/atlassian-navigation/src/feature-flags.js": function (e, t, n) {
        "use strict";
        n.d(t, "g", (function () {
            return a
        })), n.d(t, "c", (function () {
            return o
        })), n.d(t, "b", (function () {
            return i
        })), n.d(t, "k", (function () {
            return s
        })), n.d(t, "d", (function () {
            return c
        })), n.d(t, "h", (function () {
            return u
        })), n.d(t, "f", (function () {
            return l
        })), n.d(t, "j", (function () {
            return d
        })), n.d(t, "e", (function () {
            return f
        })), n.d(t, "l", (function () {
            return m
        })), n.d(t, "a", (function () {
            return p
        })), n.d(t, "i", (function () {
            return v
        }));
        var r = n("./src/packages/common-legacy-do-not-add-anything-new/src/util/get-feature-flag-value.js"), a = function () {
            return Object(r.b)("endeavour.jira.nav.feedback-group-id", !1)
        }, o = function () {
            return Object(r.b)("marketplace.emcee.native.spa.enable", !1)
        }, i = function () {
            return Object(r.b)("enduser-emcee-discover", !1)
        }, s = function () {
            return Object(r.b)("endeavour-spotlight-tour-fix-enable", !1)
        }, c = function () {
            return Object(r.b)("endeavour.experience.use.platform.tracker", !1)
        }, u = function () {
            return Object(r.b)("endeavour-nav-v-3-notification-fix", !1)
        }, l = function () {
            return "experiment" === Object(r.c)("jsw-onboarding-phase-3-quickstart", "not-enrolled", ["control", "not-enrolled", "experiment"])
        }, d = function () {
            return Object(r.b)("endeavour.nav-v3.use.project.permission.error.boundary", !1)
        }, f = function () {
            return Object(r.b)("endeavour.filters-directory.pretty-url", !1)
        }, m = function () {
            return Object(r.b)("endeavour.nav-v3.use.timeout.error.boundary", !1)
        }, p = function () {
            return Object(r.b)("jfp.perf.defer-batch-js", !1)
        }, v = function () {
            return Object(r.b)("endeavour.nav.v3.on-navigate-event-disabled", !1)
        }
    },
    "./src/packages/navigation-apps/atlassian-navigation/src/index.js": function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "default", (function () {
            return Ac
        })), n.d(t, "APP_SWITCHER_SPOTLIGHT_KEY", (function () {
            return y.b
        }));
        var r = n("./node_modules/react/index.js"), a = n.n(r), o = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/components/AtlassianNavigation/index.js"), i = n("./src/packages/platform/services/favorites-store/src/index.js"), s = n("./src/packages/platform/controllers/intl/src/index.js"), c = n("./src/packages/platform/services/navigation-v3-rollout/src/index.js"), u = n("./src/packages/portfolio/services/plans-item-visibility/src/index.js"), l = n("./src/packages/platform/observability/product-analytics-bridge/src/index.js"), d = n("./src/packages/platform/services/recents-store/src/index.js"), f = n("./src/packages/platform/controllers/spa-state/src/index.js"), m = n("./src/packages/platform/controllers/tenant-context/src/index.js"), p = n("./src/packages/navigation-apps/atlassian-navigation/src/common/utils/test-id.js"), v = n("./node_modules/@atlaskit/router/dist/esm/controllers/hooks/router-store/index.js"), g = n("./src/packages/common-legacy-do-not-add-anything-new/src/experience-tracking/viewing/index.js"), b = n("./src/packages/platform/ui/jira-experience-tracker/src/ui/experience-success/main.js"), y = n("./src/packages/navigation-apps/atlassian-navigation/src/common/constants.js");

        function h(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return j(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function j(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var O = function (e) {
            var t = e.children;
            return (a.a.createElement(a.a.Fragment, null, t))
        }, I = function (e) {
            var t = e.children, n = e.useRouter, r = void 0 === n ? v.a : n, o = e.ViewExperienceSuccessTracker, i = void 0 === o ? g.c : o, s = e.ExperienceSuccess, c = void 0 === s ? b.a : s, u = h(r(), 1)[0].route, l = u && u.isRedirect ? O : i;
            return a.a.createElement(l, {
                location: "atlassian-navigation-main",
                parentProviders: null,
                failureEventAttributes: null
            }, t, a.a.createElement(c, {experience: y.i}))
        };
        I.displayName = "NavigationSuccessTracker";
        var S = n("./src/packages/navigation-apps/atlassian-navigation/src/controllers/theme/main.js"), E = n("./node_modules/react-sweet-state/lib/esm/index.js"), w = n("./src/packages/platform/utils/types/src/index.js"), k = n("./src/packages/platform/services/nav-item-service/src/index.js");

        function A(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function x(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? A(Object(n), !0).forEach((function (t) {
                    P(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function P(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function M(e) {
            return function (e) {
                    if (Array.isArray(e))return F(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))return Array.from(e)
                }(e) || T(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function C(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || T(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function T(e, t) {
            if (e) {
                if ("string" == typeof e)return F(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? F(e, t) : void 0
            }
        }

        function F(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        function N(e, t, n, r, a, o, i) {
            try {
                var s = e[o](i), c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, a)
        }

        function _(e) {
            return function () {
                var t = this, n = arguments;
                return new Promise((function (r, a) {
                    var o = e.apply(t, n);

                    function i(e) {
                        N(o, r, a, i, s, "next", e)
                    }

                    function s(e) {
                        N(o, r, a, i, s, "throw", e)
                    }

                    i(void 0)
                }))
            }
        }

        var D = function () {
            return function () {
                var e = _(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, s, c, u, l, d, f, m;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)switch (e.prev = e.next) {
                            case 0:
                                if (n = t.setState, r = t.getState, a = r(), o = a.fetchAddons, i = a.fetchPortfolioItem, s = a.baseUrl, a.isFetching) {
                                    e.next = 19;
                                    break
                                }
                                return e.prev = 3, c = Promise.all([o(s), i(s)]), n({
                                    isFetching: !0,
                                    fetchError: null,
                                    promise: c
                                }), e.next = 8, c;
                            case 8:
                                u = e.sent, l = C(u, 2), d = l[0], f = l[1], m = f ? [f].concat(M(d)) : d, n({
                                    items: m,
                                    hasFetchedOnce: !0,
                                    hasSuccessOnce: !0,
                                    isFetching: !1,
                                    fetchError: null,
                                    promise: null
                                }), e.next = 19;
                                break;
                            case 16:
                                e.prev = 16, e.t0 = e.catch(3), n(x(x({}, r()), {}, {
                                    fetchError: e.t0,
                                    hasFetchedOnce: !0,
                                    isFetching: !1,
                                    promise: null
                                }));
                            case 19:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[3, 16]])
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()
        }, R = {
            load: function () {
                return function () {
                    var e = _(regeneratorRuntime.mark((function e(t) {
                        var n, r;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;)switch (e.prev = e.next) {
                                case 0:
                                    return n = t.dispatch, r = n(D()), e.next = 4, r;
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, setFavourite: function (e, t) {
                return function () {
                    var n = _(regeneratorRuntime.mark((function n(r) {
                        var a, o, i, s, c, u, l, d;
                        return regeneratorRuntime.wrap((function (n) {
                            for (; ;)switch (n.prev = n.next) {
                                case 0:
                                    if (a = r.setState, o = r.getState, i = o(), s = i.items, c = i.addToFavorite, u = i.baseUrl, l = i.removeFromFavorite, d = x(x({}, e), {}, {favourite: !0}), !t) {
                                        n.next = 9;
                                        break
                                    }
                                    return a({items: [d].concat(M(s))}), n.next = 7, c(u, d);
                                case 7:
                                    n.next = 12;
                                    break;
                                case 9:
                                    return a({
                                        items: s.filter((function (t) {
                                            return t.id !== e.id
                                        }))
                                    }), n.next = 12, l(u, e);
                                case 12:
                                case"end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function (e) {
                        return n.apply(this, arguments)
                    }
                }()
            }
        }, U = function (e) {
            var t = {
                baseUrl: Object(w.toBaseUrl)(""),
                fetchAddons: e.fetchAddons,
                fetchPortfolioItem: e.fetchPortfolioItem,
                addToFavorite: e.addToFavorite,
                removeFromFavorite: e.removeFromFavorite,
                hasFetchedOnce: !1,
                hasSuccessOnce: !1,
                items: [],
                fetchError: null,
                promise: null,
                isFetching: !1
            }, n = Object(E.c)({
                name: "addon-store",
                actions: R,
                initialState: t
            }), r = Object(E.a)(n, {
                onInit: function () {
                    return function (e, t) {
                        e.setState({
                            baseUrl: Object(w.toBaseUrl)(t.baseUrl),
                            fetchAddons: t.fetchAddons,
                            fetchPortfolioItem: t.fetchPortfolioItem,
                            addToFavorite: t.addToFavorite,
                            removeFromFavorite: t.removeFromFavorite
                        })
                    }
                }
            }), a = Object(E.a)(n, {
                onInit: function () {
                    return function (e, t) {
                        e.setState(t)
                    }
                }
            }), o = function (e) {
                var t = e.items, n = e.hasFetchedOnce, r = e.fetchError, a = e.promise;
                return {
                    items: t,
                    hasFetchedOnce: n,
                    hasSuccessOnce: e.hasSuccessOnce,
                    fetchError: r,
                    promise: a,
                    isFetching: e.isFetching
                }
            };
            return {
                AddonSubscriber: Object(E.d)(n, {displayName: "AddonSubscriber", selector: o}),
                useAddonActions: Object(E.b)(n, {selector: o}),
                useAddon: Object(E.b)(n, {selector: o}),
                AddonTestContainer: a,
                AddonContainer: r
            }
        }({
            fetchAddons: k.a, fetchPortfolioItem: k.d, addToFavorite: function () {
                return new Promise((function () {
                    return null
                }))
            }, removeFromFavorite: function () {
                return new Promise((function () {
                    return null
                }))
            }
        }).useAddon, B = n("./src/packages/platform/ui/jira-experience-tracker/src/ui/experience-start/main.js"), L = n("./node_modules/lodash/noop.js"), V = n.n(L), H = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/controllers/overflow/index.js"), J = n("./node_modules/@atlaskit/popup/dist/esm/index.js"), $ = n("./src/packages/common-legacy-do-not-add-anything-new/src/util/component-with-condition.js"), G = n("./src/packages/navigation-apps/atlassian-navigation/src/controllers/from-spotlight-tour/main.js"), W = n("./src/packages/navigation-apps/atlassian-navigation/src/controllers/top-menus/main.js"), q = n("./src/packages/navigation-apps/atlassian-navigation/src/feature-flags.js"), z = n("./node_modules/@atlaskit/menu/dist/esm/components/item/button-item.js"), Y = n("./node_modules/@atlaskit/router/dist/esm/ui/link/index.js");

        function K(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Q(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Q(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var X = function (e) {
            var t = K(Object(v.a)(), 1)[0];
            return !(!t.route || !t.route.navigation) && t.route.navigation.menuId === e
        }, Z = n("./src/packages/navigation-apps/atlassian-navigation/src/controllers/navigation-item-analytics/main.js"), ee = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/components/PrimaryButton/index.js");

        function te(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ne(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? te(Object(n), !0).forEach((function (t) {
                    re(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function re(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var ae = Object(r.forwardRef)((function (e, t) {
            var n = ne(ne({}, e), {}, {ref: t});
            return (a.a.createElement(ee.a, n))
        })), oe = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/components/PrimaryDropdownButton/index.js");

        function ie(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function se(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ie(Object(n), !0).forEach((function (t) {
                    ce(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ie(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function ce(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var ue = Object(r.forwardRef)((function (e, t) {
            var n = se(se({}, e), {}, {ref: t});
            return (a.a.createElement(oe.a, n))
        })), le = n("./node_modules/styled-components/dist/styled-components.browser.es.js"), de = n("./node_modules/@atlaskit/menu/dist/esm/components/item/link-item.js"), fe = Object(le.default)(de.a)(["&:focus,&:hover,&:active{color:inherit;text-decoration:inherit;}"]), me = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.href, n = e.target, a = e.onClick, o = e.useRouterActions, i = void 0 === o ? v.b : o, s = e.useCallback, c = void 0 === s ? r.useCallback : s, u = i(), l = u.push;
            return c((function (e) {
                a && a(e), e.ctrlKey || e.metaKey || e.defaultPrevented || "_blank" === n || (e.preventDefault(), l(t))
            }), [l, t, n, a])
        };

        function pe() {
            return (pe = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        function ve(e, t) {
            if (null == e)return {};
            var n, r, a = function (e, t) {
                if (null == e)return {};
                var n, r, a = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        var ge = function (e) {
            var t = e.href, n = e.target, r = e.onClick, o = e.useNavigate, i = void 0 === o ? me : o, s = e.LinkComponent, c = void 0 === s ? fe : s, u = ve(e, ["href", "target", "onClick", "useNavigate", "LinkComponent"]), l = i({
                href: t,
                onClick: r,
                target: n
            });
            return a.a.createElement(c, pe({
                href: t,
                target: n,
                rel: "_blank" === n ? "noopener noreferrer" : "",
                onClick: l
            }, u))
        };
        ge.displayName = "LinkItem";
        var be = n("./node_modules/@atlaskit/icon--current/glyph/chevron-right.js"), ye = n.n(be), he = n("./src/packages/common-legacy-do-not-add-anything-new/src/styles/index.js"), je = le.default.span(["opacity:0.5;margin-right:-", "px;"], 2 * he.f), Oe = function () {
            return a.a.createElement(je, null, a.a.createElement(ye.a, {label: ""}))
        };

        function Ie() {
            return (Ie = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        function Se(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Ee(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ee(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Ee(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        function we(e, t) {
            if (null == e)return {};
            var n, r, a = function (e, t) {
                if (null == e)return {};
                var n, r, a = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        Oe.displayName = "ChevronRightIcon";
        var ke = Object(r.forwardRef)((function (e, t) {
            var n = e.ButtonItem, o = void 0 === n ? z.a : n, i = e.ChevronRightIcon, s = void 0 === i ? Oe : i, c = e.Link, u = void 0 === c ? Y.a : c, l = e.LinkItem, d = void 0 === l ? ge : l, f = e.PrimaryButton, m = void 0 === f ? ae : f, v = e.PrimaryDropdownButton, g = void 0 === v ? ue : v, b = e.href, y = e.menuId, h = e.navigationItemId, j = e.useMenuHighlighted, O = void 0 === j ? X : j, I = e.useNavigationItemAnalytics, S = void 0 === I ? Z.a : I, E = e.useOverflowStatus, w = void 0 === E ? H.c : E, k = e.useTopMenus, A = void 0 === k ? W.a : k, x = e.onBeforeMenuOpen, P = void 0 === x ? function () {
            } : x, M = we(e, ["ButtonItem", "ChevronRightIcon", "Link", "LinkItem", "PrimaryButton", "PrimaryDropdownButton", "href", "menuId", "navigationItemId", "useMenuHighlighted", "useNavigationItemAnalytics", "useOverflowStatus", "useTopMenus", "onBeforeMenuOpen"]), C = Se(A(y), 2), T = C[0], F = C[1], N = F.off, _ = F.toggle, D = w().isVisible, R = O(y), U = S({navigationItemId: h}), B = Object(r.useCallback)((function () {
                U(), T || P(), _()
            }), [T, P, _, U]);
            Object(r.useEffect)((function () {
                return N
            }), [N]);
            var L = Object(p.b)("primary-actions", y, "menu-trigger");
            return D ? null != b ? a.a.createElement(m, Ie({}, M, {
                component: u,
                href: b,
                isHighlighted: R,
                onClick: B,
                ref: t,
                testId: L,
                type: "a"
            })) : a.a.createElement(g, Ie({}, M, {
                isHighlighted: R,
                isSelected: T,
                onClick: B,
                ref: t,
                testId: L
            })) : null != b ? a.a.createElement(d, Ie({}, M, {
                href: b,
                onClick: B,
                testId: L
            })) : a.a.createElement("span", {ref: t}, a.a.createElement(o, Ie({}, M, {
                iconAfter: a.a.createElement(s, null),
                isSelected: T,
                onClick: B,
                testId: L
            })))
        })), Ae = function (e) {
            return e.stopPropagation()
        };

        function xe() {
            return (xe = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        function Pe(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Me(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Me(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Me(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var Ce = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.c), Te = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.e), Fe = function (e) {
            var t = e.AkPopup, n = void 0 === t ? J.a : t, o = e.Menu, i = e.MenuTrigger, s = void 0 === i ? ke : i, c = e.children, u = e.menuId, l = e.navigationItemId, d = e.stopPropagation, f = void 0 === d ? Ae : d, m = e.useOverflowStatus, v = void 0 === m ? H.c : m, g = e.useFromSpotlightTour, b = void 0 === g ? G.a : g, y = e.useTopMenus, h = void 0 === y ? W.a : y, j = e.ViewExperienceTrackingProvider, O = void 0 === j ? Te : j, I = e.ViewExperienceSuccessTracker, S = void 0 === I ? Ce : I, E = e.onBeforeMenuOpen, w = void 0 === E ? function () {
            } : E, k = Pe(h(u), 2), A = k[0], x = k[1].off, P = Pe(b("spotlight"), 1)[0], M = v().isVisible, C = Object(r.useCallback)((function (e) {
                return a.a.createElement(s, xe({}, e, {onBeforeMenuOpen: w, menuId: u, navigationItemId: l}), c)
            }), [c, u, l, w]), T = Object(p.b)("primary-actions", u, "menu-popup"), F = Object(r.useCallback)((function (e) {
                return a.a.createElement(O, {
                    application: null,
                    analyticsSource: "atlassian-navigation",
                    experience: "viewAtlassianNavigationMenu",
                    experienceId: u,
                    edition: null
                }, a.a.createElement("span", {onClick: f, "data-testid": T}, a.a.createElement(S, {
                    location: T,
                    parentProviders: null,
                    failureEventAttributes: null
                }, a.a.createElement(o, xe({}, e, {testIdPrefix: T}), c))))
            }), [c, f, T, u]);
            return a.a.createElement(n, {
                isOpen: A,
                onClose: Object(q.k)() && P ? V.a : x,
                content: F,
                offset: M ? void 0 : "12px -11px",
                placement: M ? "bottom-start" : "right-start",
                trigger: C
            })
        };
        Fe.displayName = "Popup";
        var Ne = n("./node_modules/@atlaskit/menu/dist/esm/components/section/section.js"), _e = n("./src/packages/platform/utils/standard-errors/src/common/utils/authentication-error/main.js");

        function De(e) {
            return (De = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Re(e, t) {
            if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
        }

        function Ue(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Be(e, t) {
            return (Be = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
        }

        function Le(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)return !1;
                if (Reflect.construct.sham)return !1;
                if ("function" == typeof Proxy)return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = He(e);
                if (t) {
                    var a = He(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else n = r.apply(this, arguments);
                return Ve(this, n)
            }
        }

        function Ve(e, t) {
            return !t || "object" !== De(t) && "function" != typeof t ? function (e) {
                if (void 0 === e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function He(e) {
            return (He = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        var Je = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Be(e, t)
            }(n, e);
            var t = Le(n);

            function n() {
                var e;
                Re(this, n);
                for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)a[o] = arguments[o];
                return (e = t.call.apply(t, [this].concat(a))).state = {caughtError: null}, e
            }

            return function (e, t, n) {
                t && Ue(e.prototype, t), n && Ue(e, n)
            }(n, [{
                key: "componentDidCatch", value: function (e, t) {
                    if (!(e instanceof _e.a))throw e;
                    this.setState({caughtError: {error: e, info: t}})
                }
            }, {
                key: "render", value: function () {
                    var e = this.state.caughtError, t = this.props, n = t.children, r = t.render;
                    return e ? r() : n
                }
            }]), n
        }(r.Component);
        Je.displayName = "AuthenticationErrorBoundary";
        var $e = n("./src/packages/platform/ui/error-boundary/src/main.js"), Ge = n("./src/packages/platform/ui/jira-experience-tracker/src/ui/experience-fail/main.js"), We = n("./node_modules/react-intl/lib/index.es.js"), qe = Object(We.defineMessages)({
            info: {
                id: "atlassian-navigation.common.menu.info.info",
                defaultMessage: "info"
            }
        }), ze = le.default.div(["margin:0 auto;width:", "px;display:flex;text-align:center;flex-direction:column;"], 40 * he.f), Ye = le.default.img(["display:block;padding:20px 0 16px 0;width:", "px;height:", ";margin:0 auto;max-width:100%;"], (function (e) {
            return e.useSmallImage ? 12 * he.f : 20 * he.f
        }), (function (e) {
            return null != e.imgHeight ? "".concat(e.imgHeight, "px") : "auto"
        })), Ke = le.default.div(["display:block;padding:0 20px 20px 20px;"]), Qe = function (e) {
            var t = e.ImgWrapper, n = void 0 === t ? Ye : t, r = e.TextWrapper, o = void 0 === r ? Ke : r, i = e.ViewWrapper, c = void 0 === i ? ze : i, u = e.imgAltText, l = e.imgHeight, d = e.imgSrc, f = e.text, m = e.useIntl, p = void 0 === m ? s.b : m, v = e.useSmallImage, g = void 0 !== v && v, b = e.testId, y = p().formatMessage;
            return a.a.createElement(c, {"data-testid": b}, a.a.createElement(n, {
                alt: u || y(qe.info),
                imgHeight: l,
                src: d,
                useSmallImage: g
            }), a.a.createElement(o, null, f))
        };
        Qe.displayName = "MenuInfo";
        var Xe = n("./src/packages/navigation-apps/atlassian-navigation/src/common/ui/menu/error/assets/generic-error.svg"), Ze = n.n(Xe), et = Object(We.defineMessages)({
            errorHeading: {
                id: "atlassian-navigation.common.menu.error.error-heading",
                defaultMessage: "Something went wrong"
            },
            errorBody: {
                id: "atlassian-navigation.common.menu.error.error-body",
                defaultMessage: "Try refreshing or navigating to another page."
            },
            errorImg: {
                id: "atlassian-navigation.common.menu.error.error-img",
                defaultMessage: "An image showing that an error has occurred"
            }
        }), tt = le.default.div(["padding:0 ", "px;"], 3 * he.f), nt = le.default.strong(["display:block;margin-bottom:", "px;"], he.f), rt = function (e) {
            var t = e.Heading, n = void 0 === t ? nt : t, r = e.MenuInfo, o = void 0 === r ? Qe : r, i = e.TextWrapper, c = void 0 === i ? tt : i, u = e.testIdPrefix, l = e.useIntl, d = (void 0 === l ? s.b : l)().formatMessage, f = a.a.createElement(c, null, a.a.createElement(n, null, d(et.errorHeading)), a.a.createElement("div", null, d(et.errorBody)));
            return a.a.createElement(o, {
                imgAltText: d(et.errorImg),
                imgSrc: Ze.a,
                testId: Object(p.a)(u, "error"),
                text: f,
                useIntl: s.b,
                useSmallImage: !0
            })
        };
        rt.displayName = "MenuError";
        var at = n("./node_modules/@atlaskit/menu/dist/esm/components/section/menu-group.js"), ot = "calc(100vh - ".concat(25 * he.f, "px)"), it = Object(le.css)(["& a{[data-is-favourite='false'] button{opacity:0;}&:focus [data-is-favourite='false'] button,& [data-is-favourite='false'] button:focus{opacity:1;}&:hover [data-is-favourite='false'] button{opacity:1;}}"]), st = le.default.div(["min-width:", "px;max-width:", "px;", ""], (function (e) {
            return e.isWide ? 40 * he.f : 29.25 * he.f
        }), 100 * he.f, it), ct = function (e) {
            var t = e.children, n = e.isWide, r = void 0 !== n && n;
            return (a.a.createElement(st, {isWide: r}, a.a.createElement(at.a, {maxHeight: ot}, t)))
        };
        ct.displayName = "MenuLayout";
        var ut = n("./node_modules/@atlaskit/menu/dist/esm/components/item/skeleton-heading-item.js"), lt = n("./node_modules/@atlaskit/menu/dist/esm/components/item/skeleton-item.js"), dt = function (e) {
            var t = e.SkeletonHeadingItem, n = void 0 === t ? ut.a : t, r = e.SkeletonItem, o = void 0 === r ? lt.a : r, i = e.testIdPrefix;
            return (a.a.createElement("span", {"data-testid": Object(p.a)(i, "skeleton")}, a.a.createElement(n, null), a.a.createElement(o, {
                hasIcon: !0,
                width: "62.5%"
            }), a.a.createElement(o, {hasIcon: !0, width: "50%"}), a.a.createElement(o, {
                hasIcon: !0,
                width: "62.5%"
            }), a.a.createElement(o, {hasIcon: !0, width: "50%"})))
        };
        dt.displayName = "MenuSkeletonContent";
        var ft = function (e) {
            var t = e.SkeletonItem, n = void 0 === t ? lt.a : t, r = e.testIdPrefix;
            return (a.a.createElement("span", {"data-testid": Object(p.a)(r, "skeleton")}, a.a.createElement(n, {width: "50%"}), a.a.createElement(n, {width: "50%"})))
        };
        ft.displayName = "MenuSkeletonFooter";
        var mt = n("./src/packages/navigation-apps/atlassian-navigation/src/ui/addons/menu/content/empty/assets/apps-empty.svg"), pt = n.n(mt), vt = Object(We.defineMessages)({
            emptyText: {
                id: "atlassian-navigation.addons.menu.content.empty.empty-text",
                defaultMessage: "Make the most of your Atlassian products by extending them with apps."
            },
            learnMore: {id: "atlassian-navigation.addons.menu.content.empty.learn-more", defaultMessage: "Learn more"},
            emptyImg: {
                id: "atlassian-navigation.addons.menu.content.empty.empty-img",
                defaultMessage: "An image showing that the apps dropdown menu is empty"
            }
        }), gt = function (e) {
            var t = e.useIntl, n = void 0 === t ? s.b : t, r = e.MenuInfo, o = void 0 === r ? Qe : r, i = e.testIdPrefix, c = n().formatMessage, u = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", null, a.a.createElement("p", null, c(vt.emptyText))), a.a.createElement("div", null, a.a.createElement("a", {
                href: "https://confluence.atlassian.com/adminjiracloud/managing-apps-776830283.html#Managingapps-Aboutapps",
                target: "_blank",
                rel: "noopener noreferrer"
            }, c(vt.learnMore))));
            return a.a.createElement(o, {
                imgAltText: c(vt.emptyImg),
                imgSrc: pt.a,
                testId: Object(p.a)(i, "empty"),
                text: u,
                useIntl: s.b
            })
        };
        gt.displayName = "Empty";
        var bt = n("./node_modules/@atlaskit/icon--current/glyph/addon.js"), yt = n.n(bt), ht = n("./node_modules/@atlaskit/icon--current/glyph/portfolio.js"), jt = n.n(ht), Ot = n("./node_modules/@atlaskit/menu/dist/esm/components/item/custom-item.js");

        function It(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function St(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? It(Object(n), !0).forEach((function (t) {
                    Et(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : It(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Et(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function wt(e, t) {
            if (null == e)return {};
            var n, r, a = function (e, t) {
                if (null == e)return {};
                var n, r, a = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        function kt(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return At(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return At(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function At(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var xt = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.analytics, n = e.fireUIAnalytics, r = void 0 === n ? l.u : n, a = e.onClick, o = e.useAnalyticsEvents, i = void 0 === o ? l.w : o, s = e.useOverflowStatus, c = void 0 === s ? H.c : s, u = e.useTopMenus, d = void 0 === u ? W.a : u, f = d(), m = kt(f, 2), p = m[1].off, v = c(), g = v.isVisible, b = v.closeOverflowMenu, y = i(), h = y.createAnalyticsEvent, j = t.actionSubjectId, O = wt(t, ["actionSubjectId"]);
            return function (e) {
                var t = h({action: "clicked", actionSubject: "navigationMenuItem"});
                r(t, j, St(St({}, O), {}, {isInMore: !g})), a && a(e), e.ctrlKey || e.metaKey || (p(), b())
            }
        };

        function Pt(e) {
            return function (e) {
                    if (Array.isArray(e))return Mt(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))return Array.from(e)
                }(e) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Mt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mt(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Mt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        function Ct() {
            return (Ct = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        function Tt(e, t) {
            if (null == e)return {};
            var n, r, a = function (e, t) {
                if (null == e)return {};
                var n, r, a = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        var Ft = function (e) {
            var t = e.ButtonItem, n = void 0 === t ? z.a : t, o = e.Component, i = e.CustomItem, s = void 0 === i ? Ot.a : i, c = e.LinkItem, u = void 0 === c ? ge : c, l = e.analytics, d = e.href, f = void 0 === d ? void 0 : d, m = e.onClick, p = e.target, v = void 0 === p ? void 0 : p, g = e.useOnClick, b = void 0 === g ? xt : g, y = Tt(e, ["ButtonItem", "Component", "CustomItem", "LinkItem", "analytics", "href", "onClick", "target", "useOnClick"]), h = b({
                onClick: m,
                analytics: l
            }), j = Object(r.useCallback)((function (e) {
                return o ? a.a.createElement(o, Ct({}, y, e, {href: f, target: v, onClick: h})) : null
            }), [o, f, v, h].concat(Pt(Object.values(y))));
            return o ? a.a.createElement(s, Ct({component: j}, y)) : f ? a.a.createElement(u, Ct({
                href: f,
                target: v,
                onClick: h
            }, y)) : a.a.createElement(n, Ct({onClick: h}, y))
        }, Nt = n("./node_modules/@atlaskit/theme/index.js"), _t = Nt.colors.N500, Dt = le.default.span(["display:inline-block;height:", "px;width:", "px;margin:", "px;"], 2.5 * he.f, 2.5 * he.f, .25 * he.f), Rt = function (e) {
            return "svg" === e.split(/\#|\?/)[0].split(".").pop().trim()
        }, Ut = function (e) {
            var t = e.url, n = e.checkForSvg, r = void 0 === n ? Rt : n;
            return (a.a.createElement(Dt, null, a.a.createElement("svg", {viewBox: "0 0 20 20"}, a.a.createElement("defs", null, a.a.createElement("filter", {id: "changeFillColor"}, a.a.createElement("feColorMatrix", {
                type: "matrix",
                values: "0.08, 0, 0, 0, 0, 0, 0.1, 0, 0, 0, 0, 0,0.2, 0, 0, 0, 0, 0, 1, 0"
            }))), a.a.createElement("image", {
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                xlinkHref: t,
                width: "20",
                height: "20",
                x: "0",
                y: "0",
                filter: r(t) ? "url(#changeFillColor)" : ""
            }))))
        };

        function Bt(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Lt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lt(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Lt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        Ut.displayName = "IconCustom";
        var Vt = function (e) {
            var t = e.Icon, n = void 0 === t ? yt.a : t, r = e.IconCustom, o = void 0 === r ? Ut : r, i = e.IconPortfolio, s = void 0 === i ? jt.a : i, c = e.MenuItem, u = void 0 === c ? Ft : c, l = e.testIdPrefix, d = e.useAddon, f = Bt((void 0 === d ? U : d)(), 1)[0].items, m = Object(p.a)(l, "items");
            return a.a.createElement("span", {"data-testid": m}, f.filter((function (e) {
                return e.id !== y.a.DISCOVER
            })).map((function (e, t) {
                return a.a.createElement(u, {
                    analytics: {
                        actionSubjectId: "appsNavigationMenuItem",
                        menuItemId: e.id,
                        menuItemType: "apps",
                        position: t
                    },
                    iconBefore: e.id === y.a.PORTFOLIO && a.a.createElement(s, {
                        primaryColor: _t,
                        label: e.title
                    }) || null != e.avatarUrl && a.a.createElement(o, {url: e.avatarUrl}) || a.a.createElement(n, {
                        primaryColor: _t,
                        label: e.title
                    }),
                    href: e.url,
                    key: e.id,
                    className: e.className,
                    testId: Object(p.a)(m, "item-".concat(t))
                }, e.title)
            })))
        };

        function Ht(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Jt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jt(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Jt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        Vt.displayName = "Items";
        var $t = function (e) {
            var t = e.Empty, n = void 0 === t ? gt : t, o = e.Items, i = void 0 === o ? Vt : o, s = e.useAddon, c = void 0 === s ? U : s, u = e.testIdPrefix, l = e.useExperienceSuccess, d = void 0 === l ? b.b : l, f = Ht(c(), 1)[0], m = f.items, p = f.fetchError, v = f.promise, g = f.hasFetchedOnce, h = f.hasSuccessOnce, j = f.isFetching, O = d({experience: y.j});
            if (p && !h)throw p;
            if (j && !g)throw v;
            return Object(r.useEffect)((function () {
                h && Object(q.d)() && O()
            }), [h, O]), m.filter((function (e) {
                return e.id !== y.a.DISCOVER
            })).length > 0 ? a.a.createElement(i, {testIdPrefix: u}) : a.a.createElement(n, {testIdPrefix: u})
        }, Gt = Object(We.defineMessages)({
            findApps: {
                id: "atlassian-navigation.addons.menu.footer.find-apps",
                defaultMessage: "Find new apps"
            },
            manageApps: {id: "atlassian-navigation.addons.menu.footer.manage-apps", defaultMessage: "Manage your apps"},
            appRequests: {id: "atlassian-navigation.addons.menu.footer.app-requests", defaultMessage: "App requests"}
        });

        function Wt(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return qt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qt(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function qt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var zt = function (e) {
            var t = e.MenuItem, n = void 0 === t ? Ft : t, r = e.onUpdateIsFooterVisible, o = e.testIdPrefix, i = e.useAddon, c = void 0 === i ? U : i, u = e.useIntl, l = void 0 === u ? s.b : u, d = e.useTenantContext, f = void 0 === d ? m.q : d, v = l().formatMessage, g = f(), b = g.baseUrl, h = g.isAdmin, j = g.isSiteAdmin, O = Wt(c(), 1)[0], I = O.promise, S = O.hasFetchedOnce, E = O.items;
            if (I && !S)throw I;
            var w = (E.find((function (e) {
                return e.id === y.a.DISCOVER
            })) || {}).url, k = 0;
            w || h || j || r && r(!1);
            var A = Object(p.a)(o, "items");
            return (a.a.createElement("span", {"data-testid": A}, w && a.a.createElement(n, {
                    analytics: {
                        actionSubjectId: "appsNavigationMenuItem",
                        isAdmin: Boolean(j),
                        menuItemId: "newApps",
                        menuItemType: "action",
                        position: k++
                    },
                    href: Object(q.c)() ? "".concat(b, "/jira/marketplace") : "".concat(b).concat(w),
                    testId: Object(p.a)(A, "item-find-new-apps")
                }, v(Gt.findApps)), (h || j) && a.a.createElement(n, {
                    analytics: {
                        actionSubjectId: "appsNavigationMenuItem",
                        isAdmin: j,
                        menuItemId: "manageApps",
                        menuItemType: "action",
                        position: k++
                    }, href: "".concat(b, "/plugins/servlet/upm"), testId: Object(p.a)(A, "item-manage-apps")
                }, v(Gt.manageApps)), Object(q.b)() && j && a.a.createElement(n, {
                    analytics: {
                        actionSubjectId: "appsNavigationMenuItem",
                        isAdmin: j,
                        menuItemId: "appRequests",
                        menuItemType: "action",
                        position: k++
                    },
                    href: "".concat(b, "/plugins/servlet/ac/com.atlassian.jira.emcee/app-requests"),
                    testId: Object(p.a)(A, "item-app-requests")
                }, v(Gt.appRequests))))
        };

        function Yt(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Kt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kt(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Kt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        zt.displayName = "Footer";
        var Qt = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.c), Xt = function (e) {
            var t = e.AuthenticationErrorBoundary, n = void 0 === t ? Je : t, o = e.Content, i = void 0 === o ? $t : o, s = e.Error, c = void 0 === s ? rt : s, u = e.ErrorBoundary, l = void 0 === u ? $e.a : u, d = e.Footer, f = void 0 === d ? zt : d, m = e.Layout, v = void 0 === m ? ct : m, g = e.Section, b = void 0 === g ? Ne.a : g, h = e.SkeletonContent, j = void 0 === h ? dt : h, O = e.SkeletonFooter, I = void 0 === O ? ft : O, S = e.ViewExperienceSuccessTracker, E = void 0 === S ? Qt : S, w = e.testIdPrefix, k = e.useExperienceFail, A = void 0 === k ? Ge.a : k, x = Yt(Object(r.useState)(!0), 2), P = x[0], M = x[1], C = P ? b : r.Fragment, T = A({experience: y.j}), F = Object(p.a)(w, "content"), N = Object(p.a)(w, "footer"), _ = Object(r.useCallback)((function () {
                return a.a.createElement(c, {testIdPrefix: F})
            }), [F]);
            return a.a.createElement(v, {isWide: !0}, a.a.createElement(b, {
                isScrollable: !0,
                testId: F
            }, a.a.createElement(l, {
                id: y.e.ADDONS,
                packageName: y.l,
                render: _,
                withExperienceTracker: !0,
                extraEventData: {id: y.e.ADDONS},
                onError: Object(q.d)() ? T : V.a
            }, a.a.createElement(n, {render: _}, a.a.createElement(r.Suspense, {fallback: a.a.createElement(j, {testIdPrefix: F})}, a.a.createElement(E, {
                location: F,
                failureEventAttributes: null,
                parentProviders: null
            }, a.a.createElement(i, {testIdPrefix: F})))))), a.a.createElement(C, {
                hasSeparator: !0,
                testId: N
            }, a.a.createElement(r.Suspense, {fallback: a.a.createElement(I, {testIdPrefix: N})}, a.a.createElement(E, {
                location: N,
                failureEventAttributes: null,
                parentProviders: null
            }, a.a.createElement(f, {onUpdateIsFooterVisible: M, testIdPrefix: N})))))
        };
        Xt.displayName = "Menu";
        var Zt = Object(We.defineMessages)({apps: {id: "atlassian-navigation.addons.apps", defaultMessage: "Apps"}});

        function en(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return tn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tn(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function tn(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var nn = function (e) {
            var t = e.ContextualAnalyticsData, n = void 0 === t ? l.b : t, o = e.Menu, i = void 0 === o ? Xt : o, c = e.Popup, u = void 0 === c ? Fe : c, d = e.useAddon, f = void 0 === d ? U : d, m = e.useExperienceStart, p = void 0 === m ? B.b : m, v = e.useIntl, g = void 0 === v ? s.b : v, b = en(f(), 2), h = b[0].hasSuccessOnce, j = b[1].load, O = g().formatMessage, I = p({
                experience: y.j,
                experienceId: y.h.ADDONS,
                analyticsSource: "atlassian-navigation"
            }), S = Object(r.useCallback)((function () {
                Object(q.d)() && I(), j()
            }), [j, I]);
            Object(r.useEffect)((function () {
                return h || j(), function () {
                }
            }), [h, j]);
            var E = Object(r.useMemo)((function () {
                return {isEmbeddedMarketplaceEnabledForEndUsers: Object(q.b)()}
            }), []);
            return (a.a.createElement(n, {attributes: E}, a.a.createElement(u, {
                menuId: y.e.ADDONS,
                navigationItemId: y.h.ADDONS,
                Menu: i,
                onBeforeMenuOpen: S
            }, O(Zt.apps))))
        };
        nn.displayName = "Addons";
        var rn = n("./node_modules/react-async-component/commonjs/index.js"), an = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/components/AppSwitcher/index.js"), on = function (e) {
            var t = e.onOpen;
            return a.a.createElement(an.a, {onClick: t})
        };
        on.displayName = "AppSwitcherLight";
        var sn = Object(rn.asyncComponent)({
            resolve: function () {
                return n.e("async-atlassian-navigation-app-switcher").then(n.bind(null, "./src/packages/navigation-apps/atlassian-navigation-switcher-integration/src/main.js"))
            }, LoadingComponent: on
        });

        function cn(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return un(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return un(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function un(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var ln = function (e) {
            var t = e.AppSwitcherIntegration, n = void 0 === t ? sn : t, o = e.useTopMenus, i = void 0 === o ? W.a : o, s = e.useNavigationItemAnalytics, c = void 0 === s ? Z.a : s, u = cn(i(y.e.APP_SWITCHER), 2), l = u[0], d = u[1], f = d.on, m = d.off, p = c({navigationItemId: y.h.APP_SWITCHER}), v = Object(r.useCallback)((function () {
                f(), p()
            }), [f, p]);
            return a.a.createElement(n, {isOpen: l, onOpen: v, onClose: m})
        };
        ln.displayName = "AppSwitcher";
        var dn = n("./src/packages/platform/legacy/create-issue-legacy/src/index.js"), fn = n("./src/packages/growth/onboarding/onboarding-nudges/src/async.js"), mn = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/components/Create/index.js"), pn = function (e) {
            return a.a.createElement(mn.a, e)
        };
        pn.displayName = "Create";
        var vn = n("./src/packages/platform/observability/is-batch-js-loaded/src/index.js");

        function gn(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return bn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bn(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function bn(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var yn = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.w, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.useCallback, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vn.b, o = e(), i = o.createAnalyticsEvent, s = a(), c = gn(s, 1), u = c[0].isLoaded;
            return n((function () {
                var e = i({});
                t(e, "legacyComponent triggered", "globalIssueCreate", {isBatchJsLoaded: u})
            }), [i, t, u])
        }, hn = Object(We.defineMessages)({
            create: {
                id: "atlassian-navigation.create.create",
                defaultMessage: "Create"
            }
        }), jn = Object(p.b)("create"), On = function (e) {
            var t = e.AkCreate, n = void 0 === t ? pn : t, o = e.NudgeTooltip, i = void 0 === o ? fn.c : o, c = e.onCreateClick, u = void 0 === c ? dn.a : c, l = e.useIntl, d = void 0 === l ? s.b : l, f = e.useNavigationItemAnalytics, m = void 0 === f ? Z.a : f, p = e.useCreateButtonAnalytics, v = void 0 === p ? yn : p, g = d().formatMessage, b = m({navigationItemId: y.h.CREATE}), h = v(), j = Object(r.useCallback)((function () {
                u(), b(), Object(q.a)() && h()
            }), [u, b, h]);
            if (Object(q.f)()) {
                return a.a.createElement(i, {item: "create"}, a.a.createElement(n, {
                    onClick: j,
                    text: g(hn.create),
                    testId: jn
                }))
            }
            return (a.a.createElement(n, {onClick: j, text: g(hn.create), testId: jn}))
        };
        On.displayName = "Create";
        var In = n("./node_modules/lodash/get.js"), Sn = n.n(In), En = n("./src/packages/platform/ui/favouriting/favourite-change-provider/src/index.js");

        function wn(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return kn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kn(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function kn(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        function An(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function xn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? An(Object(n), !0).forEach((function (t) {
                    Pn(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : An(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Pn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Mn = function (e, t, n) {
            var r = function (e) {
                var t = Sn()(n, e.id);
                return t ? xn(xn({}, e), {}, {favourite: t.value}) : e
            }, a = t ? t.map(r) : [], o = e ? e.map(r) : [], i = a.map((function (e) {
                return e.id
            }));
            return {
                favoriteItems: a, recentItems: o.filter((function (e) {
                    return !i.includes(e.id)
                }))
            }
        }, Cn = function () {
            var e = Object(r.useContext)(En.e), t = e.changeFavourite, n = e.items.dashboards, a = wn(Object(d.d)(), 1)[0], o = wn(Object(i.d)(), 1)[0], s = Object(r.useMemo)((function () {
                return Mn(a.items, o.items, n)
            }), [a.items, o.items, n]), c = s.favoriteItems, u = s.recentItems;
            return {changeFavourite: t, changedItems: n, favoriteItems: c, recentItems: u}
        }, Tn = function () {
            var e = Object(r.useContext)(En.e), t = e.changeFavourite, n = e.items.filters, a = wn(Object(d.e)(), 1)[0], o = wn(Object(i.e)(), 1)[0], s = Object(r.useMemo)((function () {
                return Mn(a.items, o.items, n)
            }), [a.items, o.items, n]), c = s.favoriteItems, u = s.recentItems;
            return {changeFavourite: t, changedItems: n, favoriteItems: c, recentItems: u}
        }, Fn = function () {
            var e = Object(r.useContext)(En.e), t = e.changeFavourite, n = e.items.projects, a = wn(Object(d.f)(), 1)[0], o = wn(Object(i.f)(), 1)[0], s = Object(r.useMemo)((function () {
                return Mn(a.items, o.items, n)
            }), [a.items, o.items, n]), c = s.favoriteItems, u = s.recentItems;
            return {changeFavourite: t, changedItems: n, favoriteItems: c, recentItems: u}
        }, Nn = n("./src/packages/navigation-apps/atlassian-navigation/src/ui/dashboards/menu/empty/assets/dashboards-empty.svg"), _n = n.n(Nn), Dn = Object(We.defineMessages)({
            emptyText: {
                id: "atlassian-navigation.dashboards.menu.empty.empty-text",
                defaultMessage: "Create a dashboard to track the status of your projects."
            },
            learnMore: {id: "atlassian-navigation.dashboards.menu.empty.learn-more", defaultMessage: "Learn more"},
            emptyImg: {
                id: "atlassian-navigation.dashboards.menu.empty.empty-img",
                defaultMessage: "An image showing that the apps dropdown menu is empty"
            }
        });

        function Rn(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Un(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Un(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Un(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var Bn = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.c), Ln = function (e) {
            var t = e.MenuInfo, n = void 0 === t ? Qe : t, o = e.ViewExperienceSuccessTracker, c = void 0 === o ? Bn : o, u = e.children, l = e.testIdPrefix, f = e.useExperienceSuccess, v = void 0 === f ? b.b : f, g = e.useFavorite, h = void 0 === g ? i.d : g, j = e.useIntl, O = void 0 === j ? s.b : j, I = e.useIsAnonymous, S = void 0 === I ? m.k : I, E = e.useItems, w = void 0 === E ? Cn : E, k = e.useRecent, A = void 0 === k ? d.d : k, x = O().formatMessage, P = S(), M = v({experience: y.j}), C = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", null, a.a.createElement("p", null, x(Dn.emptyText))), a.a.createElement("div", null, a.a.createElement("a", {
                href: "https://confluence.atlassian.com/jiracorecloud/configuring-dashboards-765593585.html",
                target: "_blank",
                rel: "noopener noreferrer"
            }, x(Dn.learnMore)))), T = Rn(h(), 1)[0], F = T.hasSuccessOnce, N = T.isFetching, _ = T.fetchError, D = Rn(A(), 1)[0], R = D.hasSuccessOnce, U = D.isFetching, B = D.fetchError, L = w(), V = L.favoriteItems, H = L.recentItems, J = V.length || H.length || N && !F || U && !R || _ || B, $ = P;
            Object(r.useEffect)((function () {
                var e = F && R;
                Object(q.d)() && e && M()
            }), [F, R, M]);
            var G = Object(p.a)(l, "empty");
            return J && !$ ? u : a.a.createElement(c, {
                location: G,
                parentProviders: null,
                failureEventAttributes: null
            }, a.a.createElement(n, {imgAltText: x(Dn.emptyImg), imgSrc: _n.a, testId: G, text: C, useIntl: s.b}))
        }, Vn = n("./node_modules/@atlaskit/icon--current/glyph/dashboard.js"), Hn = n.n(Vn), Jn = n("./node_modules/@atlaskit/menu/dist/esm/components/item/heading-item.js"), $n = n("./src/packages/platform/ui/favouriting/favourite-button-stateless/src/index.js");

        function Gn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Wn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var qn = function (e) {
            var t = e.ContextualAnalyticsData, n = void 0 === t ? l.b : t, o = e.FavouriteButtonStateless, i = void 0 === o ? $n.b : o, s = e.beforeEntityId, c = void 0 === s ? void 0 : s, u = e.beforeEntityType, d = void 0 === u ? void 0 : u, f = e.fireTrackAnalytics, m = void 0 === f ? l.t : f, p = e.id, v = e.isFavourite, g = e.isPending, b = e.menuItemType, y = e.onChangeFavourite, h = e.type, j = e.useAnalyticsEvents, O = void 0 === j ? l.w : j, I = e.useOverflowStatus, S = (void 0 === I ? H.c : I)().isVisible, E = O().createAnalyticsEvent, w = Object(r.useMemo)((function () {
                return {isInMore: !S, menuType: h, menuItemType: b}
            }), [S, b, h]), k = Object(r.useCallback)((function () {
                y(function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Gn(Object(n), !0).forEach((function (t) {
                            Wn(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gn(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({id: p, value: !v, type: h}, null != c && null != d ? {beforeEntity: {id: c, type: d}} : void 0));
                var e = h.slice(0, h.length - 1), t = v ? "unstarred" : "starred", n = "".concat(e, " ").concat(t), r = E({});
                m(r, n, p)
            }), [c, d, E, m, p, v, y, h]);
            return a.a.createElement(n, {attributes: w}, a.a.createElement(i, {
                isSmall: !0,
                isShownInList: !0,
                isFavourite: v,
                pending: g,
                onClick: k
            }))
        };
        qn.displayName = "FavouriteButton";
        var zn = n("./node_modules/@atlaskit/icon--current/glyph/open.js"), Yn = n.n(zn), Kn = Object(We.defineMessages)({
            viewAllStarred: {
                id: "atlassian-navigation.common.menu.view-all.view-all-starred",
                defaultMessage: "View all starred"
            }
        }), Qn = le.default.div(["a,a:hover,a:active,a:focus{color:", ";text-decoration:none;}"], Nt.colors.B400), Xn = function (e) {
            var t = e.children, n = e.className, r = e["data-testid"], o = e.href, i = e.onClick, s = e.tabIndex, c = e.target;
            return (a.a.createElement(Qn, null, a.a.createElement(Y.a, {
                className: n,
                "data-testid": r,
                href: o,
                onClick: i,
                tabIndex: s,
                target: c
            }, t)))
        };

        function Zn() {
            return (Zn = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        function er(e, t) {
            if (null == e)return {};
            var n, r, a = function (e, t) {
                if (null == e)return {};
                var n, r, a = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        Xn.displayName = "Link";
        var tr = function (e) {
            var t = e.Icon, n = void 0 === t ? Yn.a : t, r = e.Link, o = void 0 === r ? Xn : r, i = e.MenuItem, c = void 0 === i ? Ft : i, u = e.href, l = e.useIntl, d = void 0 === l ? s.b : l, f = er(e, ["Icon", "Link", "MenuItem", "href", "useIntl"]), m = d().formatMessage;
            return a.a.createElement(c, Zn({}, f, {
                Component: o,
                href: u,
                iconAfter: a.a.createElement(n, {label: m(Kn.viewAllStarred)})
            }), m(Kn.viewAllStarred))
        };
        tr.displayName = "MenuItemViewAll";
        var nr = Object(We.defineMessages)({
            starred: {
                id: "atlassian-navigation.dashboards.menu.favorite-content.starred",
                defaultMessage: "Starred"
            }
        }), rr = function (e) {
            var t = e.FavouriteButton, n = void 0 === t ? qn : t, o = e.HeadingItem, i = void 0 === o ? Jn.a : o, c = e.MenuItem, u = void 0 === c ? Ft : c, l = e.MenuItemViewAll, d = void 0 === l ? tr : l, f = e.testIdPrefix, v = e.useBaseUrl, g = void 0 === v ? m.h : v, b = e.useIntl, h = void 0 === b ? s.b : b, j = e.useItems, O = void 0 === j ? Cn : j, I = h().formatMessage, S = g(), E = O(), w = E.favoriteItems, k = E.changeFavourite, A = E.changedItems, x = Object(r.useMemo)((function () {
                return w.slice(0, y.c)
            }), [w]), P = Object(p.a)(f, "items-starred");
            return w.length > 0 ? a.a.createElement("span", {"data-testid": P}, a.a.createElement(i, {testId: Object(p.a)(P, "heading")}, I(nr.starred)), x.map((function (e, t) {
                var r = e.url, o = e.id, i = e.favourite, s = e.metadata, c = A[o.toString()], l = !(!c || !c.pending) && c.pending;
                return a.a.createElement(u, {
                    analytics: {
                        actionSubjectId: "dashboardsNavigationMenuItem",
                        menuItemId: o,
                        menuItemType: "starred",
                        position: t,
                        starred: Boolean(i)
                    },
                    description: s,
                    iconBefore: a.a.createElement(Hn.a, {label: "dashboard"}),
                    href: r,
                    key: o,
                    iconAfter: a.a.createElement(n, {
                        id: String(o),
                        isFavourite: Boolean(i),
                        isPending: l,
                        menuItemType: "starred",
                        onChangeFavourite: k,
                        type: En.b
                    }),
                    testId: Object(p.a)(P, "item-".concat(t))
                }, e.title)
            })), w.length >= y.c && a.a.createElement(d, {
                    analytics: {
                        actionSubjectId: "dashboardsNavigationMenuItem",
                        menuItemId: "viewAll",
                        position: y.c
                    },
                    href: "".concat(S, "/secure/ConfigurePortalPages!default.jspa?name="),
                    testId: Object(p.a)(P, "item-view-all")
                })) : null
        }, ar = n("./src/packages/platform/controllers/switch-modals/src/index.js"), or = Object(We.defineMessages)({
            createButton: {
                id: "atlassian-navigation.dashboards.menu.footer.create-button.create-button",
                defaultMessage: "Create dashboard"
            },
            notAllowed: {
                id: "atlassian-navigation.dashboards.menu.footer.create-button.not-allowed",
                defaultMessage: "You must be logged in to create dashboards"
            }
        });

        function ir(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return sr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sr(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function sr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var cr = function (e) {
            var t = e.MenuItem, n = void 0 === t ? Ft : t, r = e.testId, o = e.useIntl, i = void 0 === o ? s.b : o, c = e.useSwitchModals, u = void 0 === c ? ar.a : c, l = i().formatMessage, d = ir(u(y.f.DASHBOARD_CREATE), 2)[1].on;
            return a.a.createElement(n, {
                analytics: {
                    actionSubjectId: "dashboardsNavigationMenuItem",
                    menuItemId: "create",
                    menuItemType: "action",
                    position: 1
                }, onClick: d, testId: r
            }, l(or.createButton))
        };
        cr.displayName = "CreateButton";
        var ur = Object(We.defineMessages)({
            viewAll: {
                id: "atlassian-navigation.dashboards.menu.footer.view-all",
                defaultMessage: "View all dashboards"
            }
        }), lr = function (e) {
            var t = e.CreateButton, n = void 0 === t ? cr : t, r = e.MenuItem, o = void 0 === r ? Ft : r, i = e.testIdPrefix, c = e.useBaseUrl, u = void 0 === c ? m.h : c, l = e.useIntl, d = void 0 === l ? s.b : l, f = e.useIsAnonymous, v = void 0 === f ? m.k : f, g = d().formatMessage, b = u(), y = v(), h = Object(p.a)(i, "items");
            return a.a.createElement("span", {"data-testid": h}, a.a.createElement(o, {
                analytics: {
                    actionSubjectId: "dashboardsNavigationMenuItem",
                    menuItemId: "viewAll",
                    menuItemType: "action",
                    position: 0
                },
                href: "".concat(b, "/secure/ConfigurePortalPages!default.jspa?name="),
                testId: Object(p.a)(h, "item-view-all")
            }, g(ur.viewAll)), !y && a.a.createElement(n, {testId: Object(p.a)(h, "item-create")}))
        };

        function dr(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return fr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fr(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function fr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        lr.displayName = "Footer";
        var mr = function (e) {
            var t = e.useProvider, n = e.shouldThrowError, r = void 0 !== n && n, a = dr(t(), 1)[0], o = (a = void 0 === a ? {} : a).fetchError, i = a.isFetching, s = void 0 !== i && i, c = a.promise, u = a.hasSuccessOnce, l = void 0 !== u && u;
            if (null != o && r && !l)throw o;
            if (s && !l)throw c;
            return null
        }, pr = function (e) {
            var t = e.LoadStatusCommon, n = void 0 === t ? mr : t, r = e.shouldThrowError, o = void 0 !== r && r, s = e.useFavorite, c = void 0 === s ? i.d : s, u = e.useRecent, l = void 0 === u ? d.d : u;
            return (a.a.createElement(a.a.Fragment, null, a.a.createElement(n, {
                shouldThrowError: o,
                useProvider: c
            }), a.a.createElement(n, {shouldThrowError: o, useProvider: l})))
        }, vr = n("./src/packages/navigation-apps/atlassian-navigation/src/common/utils/index.js"), gr = Object(We.defineMessages)({
            recent: {
                id: "atlassian-navigation.dashboards.menu.recent-content.recent",
                defaultMessage: "Recent"
            },
            viewAll: {
                id: "atlassian-navigation.dashboards.menu.recent-content.view-all",
                defaultMessage: "View all recent"
            }
        }), br = function (e) {
            var t = e.FavouriteButton, n = void 0 === t ? qn : t, o = e.HeadingItem, i = void 0 === o ? Jn.a : o, c = e.MenuItem, u = void 0 === c ? Ft : c, l = e.testIdPrefix, d = e.useIntl, f = void 0 === d ? s.b : d, m = e.useItems, v = void 0 === m ? Cn : m, g = f().formatMessage, b = v(), h = b.recentItems, j = b.favoriteItems, O = b.changeFavourite, I = b.changedItems, S = Object(r.useMemo)((function () {
                return h.slice(0, y.d)
            }), [h]), E = Object(p.a)(l, "items-recent");
            return h.length > 0 ? a.a.createElement("span", {"data-testid": E}, a.a.createElement(i, {testId: Object(p.a)(E, "heading")}, g(gr.recent)), S.map((function (e, t) {
                var r = e.url, o = e.id, i = e.favourite, s = e.metadata, c = I[e.id.toString()], l = !(!c || !c.pending) && c.pending, d = Object(vr.a)(j), f = d.id, m = d.type;
                return a.a.createElement(u, {
                    analytics: {
                        actionSubjectId: "dashboardsNavigationMenuItem",
                        menuItemId: o,
                        menuItemType: "recent",
                        position: t,
                        starred: Boolean(i)
                    },
                    description: s,
                    iconBefore: a.a.createElement(Hn.a, {label: ""}),
                    href: r,
                    key: o,
                    iconAfter: a.a.createElement(n, {
                        beforeEntityId: f,
                        beforeEntityType: m,
                        id: String(o),
                        isFavourite: Boolean(i),
                        isPending: l,
                        menuItemType: "recent",
                        onChangeFavourite: O,
                        type: En.b
                    }),
                    testId: Object(p.a)(E, "item-".concat(t))
                }, e.title)
            }))) : null
        };

        function yr(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return hr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hr(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function hr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var jr = Object($.a)(q.d, (function (e) {
            var t = e.children;
            return (a.a.createElement(a.a.Fragment, null, t))
        }), g.c), Or = function (e) {
            var t = e.AuthenticationErrorBoundary, n = void 0 === t ? Je : t, o = e.Empty, s = void 0 === o ? Ln : o, c = e.Error, u = void 0 === c ? rt : c, l = e.ErrorBoundary, d = void 0 === l ? $e.a : l, f = e.FavoriteContent, m = void 0 === f ? rr : f, v = e.Footer, g = void 0 === v ? lr : v, b = e.Layout, h = void 0 === b ? ct : b, j = e.LoadStatus, O = void 0 === j ? pr : j, I = e.RecentContent, S = void 0 === I ? br : I, E = e.Section, w = void 0 === E ? Ne.a : E, k = e.SkeletonContent, A = void 0 === k ? dt : k, x = e.SkeletonFooter, P = void 0 === x ? ft : x, M = e.ViewExperienceSuccessTracker, C = void 0 === M ? jr : M, T = e.testIdPrefix, F = e.useExperienceFail, N = void 0 === F ? Ge.a : F, _ = e.useFavorite, D = yr((void 0 === _ ? i.d : _)(), 2)[1].loadFavoriteDashboards, R = N({experience: y.j});
            Object(r.useEffect)((function () {
                return function () {
                    D(y.c)
                }
            }), [D]);
            var U = Object(p.a)(T, "content"), B = Object(p.a)(T, "footer"), L = Object(r.useCallback)((function () {
                return a.a.createElement(u, {testIdPrefix: U})
            }), [U]);
            return a.a.createElement(h, {isWide: !0}, a.a.createElement(w, {isScrollable: !0}, a.a.createElement(d, {
                id: y.e.DASHBOARDS,
                packageName: y.l,
                render: L,
                withExperienceTracker: !0,
                extraEventData: {id: y.e.DASHBOARDS},
                onError: Object(q.d)() ? R : V.a
            }, a.a.createElement(n, {render: L}, a.a.createElement(s, {testIdPrefix: U}, a.a.createElement(r.Suspense, {fallback: a.a.createElement(A, {testIdPrefix: U})}, a.a.createElement(C, {
                location: U,
                failureEventAttributes: null,
                parentProviders: null
            }, a.a.createElement(O, {shouldThrowError: !0}), a.a.createElement(m, {testIdPrefix: U}), a.a.createElement(S, {testIdPrefix: U}))))))), a.a.createElement(w, {hasSeparator: !0}, a.a.createElement(r.Suspense, {fallback: a.a.createElement(P, {testIdPrefix: B})}, a.a.createElement(C, {
                location: B,
                failureEventAttributes: null,
                parentProviders: null
            }, a.a.createElement(O, null), a.a.createElement(g, {testIdPrefix: B})))))
        };
        Or.displayName = "Menu";
        var Ir = Object(We.defineMessages)({
            dashboards: {
                id: "atlassian-navigation.dashboards.dashboards",
                defaultMessage: "Dashboards"
            }
        });

        function Sr(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Er(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Er(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Er(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var wr = function (e) {
            var t = e.Menu, n = void 0 === t ? Or : t, o = e.Popup, c = void 0 === o ? Fe : o, u = e.useExperienceStart, l = void 0 === u ? B.b : u, f = e.useFavorite, m = void 0 === f ? i.d : f, p = e.useIntl, v = void 0 === p ? s.b : p, g = e.useRecent, b = void 0 === g ? d.d : g, h = v().formatMessage, j = Sr(m(), 2), O = j[0].hasFetchedOnce, I = j[1].loadFavoriteDashboards, S = Sr(b(), 2)[1].loadRecentDashboards, E = l({
                experience: y.j,
                experienceId: y.h.DASHBOARDS,
                analyticsSource: "atlassian-navigation"
            }), w = Object(r.useCallback)((function () {
                Object(q.d)() && E(), S(y.d), O || I(y.c)
            }), [O, I, S, E]);
            return a.a.createElement(c, {
                menuId: y.e.DASHBOARDS,
                navigationItemId: y.h.DASHBOARDS,
                Menu: n,
                onBeforeMenuOpen: w
            }, h(Ir.dashboards))
        };
        wr.displayName = "Dashboards";
        var kr = n("./src/packages/navigation-apps/atlassian-navigation/src/ui/filters/menu/empty/assets/filter-empty.svg"), Ar = n.n(kr), xr = Object(We.defineMessages)({
            emptyText: {
                id: "atlassian-navigation.filters.menu.empty.empty-text",
                defaultMessage: "Search for issues across all projects and save them as filters."
            },
            learnMore: {id: "atlassian-navigation.filters.menu.empty.learn-more", defaultMessage: "Learn more"},
            emptyImg: {
                id: "atlassian-navigation.filters.menu.empty.empty-img",
                defaultMessage: "An image showing that the apps dropdown menu is empty"
            }
        });

        function Pr(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Mr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Mr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var Cr = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.c), Tr = function (e) {
            var t = e.MenuInfo, n = void 0 === t ? Qe : t, o = e.ViewExperienceSuccessTracker, c = void 0 === o ? Cr : o, u = e.children, l = e.testIdPrefix, f = e.useExperienceSuccess, v = void 0 === f ? b.b : f, g = e.useFavorite, h = void 0 === g ? i.e : g, j = e.useIntl, O = void 0 === j ? s.b : j, I = e.useIsAnonymous, S = void 0 === I ? m.k : I, E = e.useItems, w = void 0 === E ? Tn : E, k = e.useRecent, A = void 0 === k ? d.e : k, x = O().formatMessage, P = S(), M = v({experience: y.j}), C = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", null, a.a.createElement("p", null, x(xr.emptyText))), a.a.createElement("div", null, a.a.createElement("a", {
                href: "https://confluence.atlassian.com/jirasoftwarecloud/searching-for-issues-764478280.html#Searchingforissues-SearchallofJira",
                target: "_blank",
                rel: "noopener noreferrer"
            }, x(xr.learnMore)))), T = Pr(h(), 1)[0], F = T.isFetching, N = T.hasSuccessOnce, _ = T.fetchError, D = Pr(A(), 1)[0], R = D.isFetching, U = D.hasSuccessOnce, B = D.fetchError, L = w(), V = L.favoriteItems, H = L.recentItems, J = V.length || H.length || F && !N || R && !U || _ || B, $ = P;
            Object(r.useEffect)((function () {
                var e = N && U;
                Object(q.d)() && e && M()
            }), [N, U, M]);
            var G = Object(p.a)(l, "empty");
            return J && !$ ? u : a.a.createElement(c, {
                location: G,
                parentProviders: null,
                failureEventAttributes: null
            }, a.a.createElement(n, {imgAltText: x(xr.emptyImg), imgSrc: Ar.a, testId: G, text: C, useIntl: s.b}))
        }, Fr = n("./node_modules/@atlaskit/icon--current/glyph/filter.js"), Nr = n.n(Fr), _r = Object(We.defineMessages)({
            starred: {
                id: "atlassian-navigation.filters.menu.favorite-content.starred",
                defaultMessage: "Starred"
            }
        }), Dr = function (e) {
            var t = e.FavouriteButton, n = void 0 === t ? qn : t, o = e.HeadingItem, i = void 0 === o ? Jn.a : o, c = e.MenuItem, u = void 0 === c ? Ft : c, l = e.MenuItemViewAll, d = void 0 === l ? tr : l, f = e.testIdPrefix, v = e.useBaseUrl, g = void 0 === v ? m.h : v, b = e.useIntl, h = void 0 === b ? s.b : b, j = e.useItems, O = void 0 === j ? Tn : j, I = h().formatMessage, S = g(), E = O(), w = E.favoriteItems, k = E.changeFavourite, A = E.changedItems, x = Object(r.useMemo)((function () {
                return w.slice(0, y.c)
            }), [w]), P = Object(p.a)(f, "items-starred");
            return w.length > 0 ? a.a.createElement("span", {"data-testid": P}, a.a.createElement(i, {testId: Object(p.a)(P, "heading")}, I(_r.starred)), x.map((function (e, t) {
                var r = e.url, o = e.id, i = e.favourite, s = A[e.id.toString()], c = !(!s || !s.pending) && s.pending;
                return a.a.createElement(u, {
                    analytics: {
                        actionSubjectId: "filtersNavigationMenuItem",
                        menuItemId: o,
                        menuItemType: "starred",
                        position: t,
                        starred: Boolean(i)
                    },
                    iconBefore: a.a.createElement(Nr.a, {label: ""}),
                    href: r,
                    key: o,
                    iconAfter: a.a.createElement(n, {
                        id: String(o),
                        isFavourite: Boolean(i),
                        isPending: c,
                        menuItemType: "starred",
                        onChangeFavourite: k,
                        type: En.c
                    }),
                    testId: Object(p.a)(P, "item-".concat(t))
                }, e.title)
            })), w.length >= y.c && a.a.createElement(d, {
                    analytics: {
                        actionSubjectId: "filtersNavigationMenuItem",
                        menuItemId: "viewAll",
                        position: y.c
                    },
                    href: Object(q.e)() ? "".concat(S, "/jira/filters?searchName=&Search=Search&filterView=search") : "".concat(S, "/secure/ManageFilters.jspa?searchName=&Search=Search&filterView=search"),
                    testId: Object(p.a)(P, "item-view-all")
                })) : null
        }, Rr = Object(We.defineMessages)({
            advancedIssueSearch: {
                id: "atlassian-navigation.filters.menu.footer.advanced-issue-search",
                defaultMessage: "Advanced issue search"
            }, viewAll: {id: "atlassian-navigation.filters.menu.footer.view-all", defaultMessage: "View all filters"}
        }), Ur = function (e) {
            var t = e.MenuItem, n = void 0 === t ? Ft : t, r = e.useIntl, o = void 0 === r ? s.b : r, i = e.testIdPrefix, c = e.useBaseUrl, u = void 0 === c ? m.h : c, l = o().formatMessage, d = u(), f = Object(p.a)(i, "items");
            return a.a.createElement("span", {"data-testid": f}, a.a.createElement(n, {
                analytics: {
                    actionSubjectId: "filtersNavigationMenuItem",
                    menuItemId: "viewAll",
                    menuItemType: "action",
                    position: 0
                },
                href: Object(q.e)() ? "".concat(d, "/jira/filters?searchName=&Search=Search&filterView=search") : "".concat(d, "/secure/ManageFilters.jspa?searchName=&Search=Search&filterView=search"),
                testId: Object(p.a)(f, "item-view-all")
            }, l(Rr.viewAll)), a.a.createElement(n, {
                analytics: {
                    actionSubjectId: "filtersNavigationMenuItem",
                    menuItemId: "create",
                    menuItemType: "action",
                    position: 1
                }, href: "".concat(d, "/issues/?jql=order+by+created+DESC"), testId: Object(p.a)(f, "item-create")
            }, l(Rr.advancedIssueSearch)))
        };
        Ur.displayName = "Footer";
        var Br = function (e) {
            var t = e.LoadStatusCommon, n = void 0 === t ? mr : t, r = e.shouldThrowError, o = void 0 !== r && r, s = e.useFavorite, c = void 0 === s ? i.e : s, u = e.useRecent, l = void 0 === u ? d.e : u;
            return (a.a.createElement(a.a.Fragment, null, a.a.createElement(n, {
                shouldThrowError: o,
                useProvider: c
            }), a.a.createElement(n, {shouldThrowError: o, useProvider: l})))
        }, Lr = Object(We.defineMessages)({
            recent: {
                id: "atlassian-navigation.filters.menu.recent-content.recent",
                defaultMessage: "Recent"
            }
        }), Vr = function (e) {
            var t = e.FavouriteButton, n = void 0 === t ? qn : t, o = e.HeadingItem, i = void 0 === o ? Jn.a : o, c = e.MenuItem, u = void 0 === c ? Ft : c, l = e.testIdPrefix, d = e.useIntl, f = void 0 === d ? s.b : d, m = e.useItems, v = void 0 === m ? Tn : m, g = f().formatMessage, b = v(), h = b.recentItems, j = b.favoriteItems, O = b.changeFavourite, I = b.changedItems, S = Object(r.useMemo)((function () {
                return h.slice(0, y.d)
            }), [h]), E = Object(p.a)(l, "items-recent");
            return h.length > 0 ? a.a.createElement("span", {"data-testid": E}, a.a.createElement(i, {testId: Object(p.a)(E, "heading")}, g(Lr.recent)), S.map((function (e, t) {
                var r = e.url, o = e.id, i = e.favourite, s = I[e.id.toString()], c = !(!s || !s.pending) && s.pending, l = Object(vr.a)(j), d = l.id, f = l.type;
                return a.a.createElement(u, {
                    analytics: {
                        actionSubjectId: "filtersNavigationMenuItem",
                        menuItemId: o,
                        menuItemType: "recent",
                        position: t,
                        starred: Boolean(i)
                    },
                    iconBefore: a.a.createElement(Nr.a, {label: ""}),
                    href: r,
                    key: o,
                    iconAfter: a.a.createElement(n, {
                        beforeEntityId: d,
                        beforeEntityType: f,
                        id: String(o),
                        isFavourite: Boolean(i),
                        isPending: c,
                        menuItemType: "recent",
                        onChangeFavourite: O,
                        type: En.c
                    }),
                    testId: Object(p.a)(E, "item-".concat(t))
                }, e.title)
            }))) : null
        };

        function Hr(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Jr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jr(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Jr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var $r = {id: y.e.FILTERS}, Gr = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.c), Wr = function (e) {
            var t = e.AuthenticationErrorBoundary, n = void 0 === t ? Je : t, o = e.Empty, s = void 0 === o ? Tr : o, c = e.Error, u = void 0 === c ? rt : c, l = e.ErrorBoundary, d = void 0 === l ? $e.a : l, f = e.FavoriteContent, m = void 0 === f ? Dr : f, v = e.Footer, g = void 0 === v ? Ur : v, b = e.Layout, h = void 0 === b ? ct : b, j = e.LoadStatus, O = void 0 === j ? Br : j, I = e.RecentContent, S = void 0 === I ? Vr : I, E = e.Section, w = void 0 === E ? Ne.a : E, k = e.SkeletonContent, A = void 0 === k ? dt : k, x = e.SkeletonFooter, P = void 0 === x ? ft : x, M = e.ViewExperienceSuccessTracker, C = void 0 === M ? Gr : M, T = e.testIdPrefix, F = e.useExperienceFail, N = void 0 === F ? Ge.a : F, _ = e.useFavorite, D = Hr((void 0 === _ ? i.e : _)(), 2)[1].loadFavoriteFilters, R = N({experience: y.j});
            Object(r.useEffect)((function () {
                return function () {
                    D(y.c)
                }
            }), [D]);
            var U = Object(p.a)(T, "content"), B = Object(p.a)(T, "footer"), L = Object(r.useCallback)((function () {
                return a.a.createElement(u, {testIdPrefix: U})
            }), [U]);
            return a.a.createElement(h, {isWide: !0}, a.a.createElement(w, {isScrollable: !0}, a.a.createElement(d, {
                id: y.e.FILTERS,
                packageName: y.l,
                render: L,
                withExperienceTracker: !0,
                extraEventData: $r,
                onError: Object(q.d)() ? R : V.a
            }, a.a.createElement(n, {render: L}, a.a.createElement(s, {testIdPrefix: U}, a.a.createElement(r.Suspense, {fallback: a.a.createElement(A, {testIdPrefix: U})}, a.a.createElement(C, {
                location: U,
                failureEventAttributes: null,
                parentProviders: null
            }, a.a.createElement(O, {shouldThrowError: !0}), a.a.createElement(m, {testIdPrefix: U}), a.a.createElement(S, {testIdPrefix: U}))))))), a.a.createElement(w, {hasSeparator: !0}, a.a.createElement(r.Suspense, {fallback: a.a.createElement(P, {testIdPrefix: B})}, a.a.createElement(C, {
                location: B,
                failureEventAttributes: null,
                parentProviders: null
            }, a.a.createElement(O, null), a.a.createElement(g, {testIdPrefix: B})))))
        };
        Wr.displayName = "Menu";
        var qr = Object(We.defineMessages)({
            filters: {
                id: "atlassian-navigation.filters.filters",
                defaultMessage: "Filters"
            }
        });

        function zr(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Yr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yr(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Yr(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var Kr = function (e) {
            var t = e.Menu, n = void 0 === t ? Wr : t, o = e.Popup, c = void 0 === o ? Fe : o, u = e.useExperienceStart, l = void 0 === u ? B.b : u, f = e.useFavorite, m = void 0 === f ? i.e : f, p = e.useIntl, v = void 0 === p ? s.b : p, g = e.useRecent, b = void 0 === g ? d.e : g, h = v().formatMessage, j = zr(m(), 2), O = j[0].hasFetchedOnce, I = j[1].loadFavoriteFilters, S = zr(b(), 2)[1].loadRecentFilters, E = l({
                experience: y.j,
                experienceId: y.h.FILTERS,
                analyticsSource: "atlassian-navigation"
            }), w = Object(r.useCallback)((function () {
                Object(q.d)() && E(), S(y.d), O || I(y.c)
            }), [O, I, S, E]);
            return a.a.createElement(c, {
                menuId: y.e.FILTERS,
                navigationItemId: y.h.FILTERS,
                Menu: n,
                onBeforeMenuOpen: w
            }, h(qr.filters))
        };
        Kr.displayName = "Filters";
        var Qr = n("./src/packages/common-legacy-do-not-add-anything-new/src/util/browser.js"), Xr = n("./src/packages/platform/ui/help-panel/src/index.js"), Zr = n("./src/packages/platform/services/help-panel/src/index.js"), ea = n("./src/packages/navigation-next/src/feature-flags.js"), ta = n("./src/packages/platform/controllers/right-side-panel/src/index.js"), na = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/components/Help/index.js");

        function ra(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function aa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ra(Object(n), !0).forEach((function (t) {
                    oa(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ra(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function oa(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var ia = Object(r.forwardRef)((function (e, t) {
            var n = aa(aa({}, e), {}, {ref: t});
            return (a.a.createElement(na.a, n))
        })), sa = Object(We.defineMessages)({
            headingHelp: {
                id: "atlassian-navigation.help.menu.heading-help",
                defaultMessage: "Help"
            },
            headingLegal: {id: "atlassian-navigation.help.menu.heading-legal", defaultMessage: "Legal"},
            atlassianCommunity: {
                id: "atlassian-navigation.help.menu.atlassian-community",
                defaultMessage: "Atlassian Community"
            },
            atlassianDocumentation: {
                id: "atlassian-navigation.help.menu.atlassian-documentation",
                defaultMessage: "Atlassian Documentation"
            },
            whatsNew: {id: "atlassian-navigation.help.menu.whats-new", defaultMessage: "What's New"},
            privacyPolicy: {id: "atlassian-navigation.help.menu.privacy-policy", defaultMessage: "Privacy policy"},
            termsOfUse: {id: "atlassian-navigation.help.menu.terms-of-use", defaultMessage: "Terms of use"},
            getMobile: {id: "atlassian-navigation.help.menu.get-mobile", defaultMessage: "Get Jira Mobile"},
            aboutJira: {id: "atlassian-navigation.help.menu.about-jira", defaultMessage: "About Jira"},
            keyboardShortcuts: {
                id: "atlassian-navigation.help.menu.keyboard-shortcuts",
                defaultMessage: "Keyboard shortcuts"
            }
        });

        function ca(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return ua(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ua(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function ua(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var la = {
            software: "https://confluence.atlassian.com/jirasoftwarecloud/",
            serviceDesk: "https://confluence.atlassian.com/servicedeskcloud/",
            core: "https://confluence.atlassian.com/jiracorecloud/",
            jira: "https://confluence.atlassian.com/alldoc/"
        }, da = function (e) {
            var t = e.HeadingItem, n = void 0 === t ? Jn.a : t, r = e.Layout, o = void 0 === r ? ct : r, i = e.MenuItem, c = void 0 === i ? Ft : i, u = e.Section, l = void 0 === u ? Ne.a : u, d = e.testIdPrefix, f = e.useIntl, v = void 0 === f ? s.b : f, g = e.useIsAnonymous, b = void 0 === g ? m.k : g, h = e.useProductName, j = void 0 === h ? m.o : h, O = e.useSwitchModals, I = void 0 === O ? ar.a : O, S = v().formatMessage, E = b(), w = ca(j(), 1)[0].data.productName, k = ca(I(y.f.JIRA_MOBILE), 2)[1].on, A = ca(I(y.f.ABOUT_JIRA), 2)[1].on, x = ca(I(y.f.KEYBOARD_SHORTCUTS), 2)[1].on, P = 0, M = Object(p.a)(d, "menu-popup");
            return a.a.createElement("span", {"data-testid": M}, a.a.createElement(o, null, a.a.createElement(l, null, a.a.createElement(n, {testId: Object(p.a)(M, "help", "heading")}, S(sa.headingHelp)), a.a.createElement(c, {
                analytics: {
                    actionSubjectId: "helpNavigationMenuItem",
                    menuItemId: "atlassian-documentation",
                    menuItemType: "help",
                    position: P++
                }, href: la[w], target: "_blank", testId: Object(p.a)(M, "help", "item-atlassian-documentation")
            }, S(sa.atlassianDocumentation)), a.a.createElement(c, {
                analytics: {
                    actionSubjectId: "helpNavigationMenuItem",
                    menuItemId: "atlassian-community",
                    menuItemType: "help",
                    position: P++
                },
                href: "https://community.atlassian.com",
                target: "_blank",
                testId: Object(p.a)(M, "help", "item-atlassian-community")
            }, S(sa.atlassianCommunity)), a.a.createElement(c, {
                analytics: {
                    actionSubjectId: "helpNavigationMenuItem",
                    menuItemId: "whats-new",
                    menuItemType: "help",
                    position: P++
                },
                href: "https://confluence.atlassian.com/pages/viewrecentblogposts.action?key=Cloud",
                target: "_blank",
                testId: Object(p.a)(M, "help", "item-whats-new")
            }, S(sa.whatsNew)), !E && a.a.createElement(c, {
                    analytics: {
                        actionSubjectId: "helpNavigationMenuItem",
                        menuItemId: "get-mobile",
                        menuItemType: "help",
                        position: P++
                    }, onClick: k, testId: Object(p.a)(M, "help", "item-get-mobile")
                }, S(sa.getMobile)), a.a.createElement(c, {
                analytics: {
                    actionSubjectId: "helpNavigationMenuItem",
                    menuItemId: "keyboard-shortcuts",
                    menuItemType: "help",
                    position: P++
                }, onClick: x, testId: Object(p.a)(M, "help", "item-keyboard-shortcuts")
            }, S(sa.keyboardShortcuts)), a.a.createElement(c, {
                analytics: {
                    actionSubjectId: "helpNavigationMenuItem",
                    menuItemId: "about-jira",
                    menuItemType: "help",
                    position: P++
                }, onClick: A, testId: Object(p.a)(M, "help", "item-about-jira")
            }, S(sa.aboutJira)), a.a.createElement(n, {testId: Object(p.a)(M, "legal", "heading")}, S(sa.headingLegal)), a.a.createElement(c, {
                analytics: {
                    actionSubjectId: "helpNavigationMenuItem",
                    menuItemId: "terms-of-use",
                    menuItemType: "legal",
                    position: 0
                },
                href: "https://www.atlassian.com/legal/customer-agreement",
                target: "_blank",
                testId: Object(p.a)(M, "legal", "item-terms-of-use")
            }, S(sa.termsOfUse)), a.a.createElement(c, {
                analytics: {
                    actionSubjectId: "helpNavigationMenuItem",
                    menuItemId: "privacy-policy",
                    menuItemType: "legal",
                    position: 1
                },
                href: "https://www.atlassian.com/legal/privacy-policy",
                target: "_blank",
                testId: Object(p.a)(M, "legal", "item-privacy-policy")
            }, S(sa.privacyPolicy)))))
        };
        da.displayName = "Menu";
        var fa = Object(We.defineMessages)({
            tooltip: {
                id: "atlassian-navigation.help.tooltip",
                defaultMessage: "Help"
            }
        });

        function ma() {
            return (ma = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        function pa(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return va(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return va(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function va(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var ga = function (e) {
            var t = e.Menu, n = void 0 === t ? da : t, o = e.Popup, i = void 0 === o ? J.a : o, c = e.Trigger, u = void 0 === c ? ia : c, l = e.useIntl, d = void 0 === l ? s.b : l, f = e.useTopMenus, m = void 0 === f ? W.a : f, v = e.useHelpPanelActions, b = void 0 === v ? Zr.c : v, h = e.useRightSidePanel, j = void 0 === h ? ta.c : h, O = e.useNavigationItemAnalytics, I = void 0 === O ? Z.a : O, S = e.ViewExperienceTrackingProvider, E = void 0 === S ? g.e : S, w = e.ViewExperienceSuccessTracker, k = void 0 === w ? g.c : w, A = d().formatMessage, x = pa(m(y.e.HELP), 2), P = x[0], M = x[1], C = M.toggle, T = M.off, F = pa(j(), 2), N = F[0].isOpen, _ = F[1], D = _.closeRightSidePanel, R = _.openRightSidePanel, U = pa(b(), 2)[1].setArticleId, B = I({navigationItemId: y.h.HELP}), L = Object(p.b)("secondary-actions", "help"), V = Object(r.useCallback)((function () {
                return a.a.createElement(E, {
                    application: null,
                    analyticsSource: "atlassian-navigation",
                    experience: "viewAtlassianNavigationMenu",
                    experienceId: y.h.HELP,
                    edition: null
                }, a.a.createElement(k, {
                    location: Object(p.a)(L, "menu-popup"),
                    parentProviders: null,
                    failureEventAttributes: null
                }, a.a.createElement(n, {testIdPrefix: L})))
            }), [L]), H = Object(ea.p)() && Object(ea.q)() && !Object(Qr.d)() && __SPA__, $ = Object(r.useCallback)((function () {
                H ? (U(""), N ? D() : R(Xr.b)) : C(), B()
            }), [D, H, N, R, U, C, B]), G = Object(r.useCallback)((function (e) {
                return a.a.createElement("span", {"data-testid": Object(p.a)(L, "menu-trigger")}, a.a.createElement(u, ma({}, e, {
                    isSelected: P,
                    onClick: $,
                    tooltip: A(fa.tooltip)
                })))
            }), [P, $, A, L]);
            return H ? a.a.createElement(G, {
                "aria-expanded": !1,
                "aria-haspopup": !H
            }) : a.a.createElement(i, {content: V, placement: "bottom-end", isOpen: P, onClose: T, trigger: G})
        };
        ga.displayName = "Help";
        var ba = n("./src/packages/platform/services/nav-item-service/src/services/create-project-permisson/index.js");

        function ya(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return ha(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ha(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function ha(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var ja = function (e) {
            var t = e.useBaseUrl, n = void 0 === t ? m.h : t, a = e.useCreateProjectPermissionActions, o = void 0 === a ? ba.b : a, s = e.useFavoriteActions, c = void 0 === s ? i.c : s, u = e.usePageLoadedSubscriber, l = void 0 === u ? f.q : u, p = e.useRecentActions, v = void 0 === p ? d.c : p, g = n(), b = ya(v(), 2)[1].loadRecentAll, y = ya(c(), 2)[1].loadFavoriteAll, h = ya(o(), 2)[1].fetchCreateProjectPermission, j = Object(r.useRef)(!1), O = ya(l(), 1)[0].hasLoaded, I = ya(Object(r.useState)(!1), 2), S = I[0], E = I[1];
            return Object(r.useEffect)((function () {
                !O && !S || j.current || (b(d.a), y(i.a), h(g), j.current = !0)
            }), [g, O, S, j, b, y, h]), Object(r.useEffect)((function () {
                var e = null;
                return O || (e = setTimeout((function () {
                    return E(!0)
                }), 1e4)), function () {
                    return clearTimeout(e)
                }
            }), [O, E]), null
        }, Oa = n("./src/packages/global-pages/directories/dashboards-directory-v2/create-dashboard-modal/async.js"), Ia = le.default.div(["position:absolute;"]), Sa = function (e, t) {
            window.location.assign("".concat(e, "/secure/Dashboard.jspa?selectPageId=").concat(t))
        };

        function Ea(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return wa(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wa(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function wa(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var ka = function (e) {
            var t = e.Absolute, n = void 0 === t ? Ia : t, o = e.CreateDashboardModal, i = void 0 === o ? Oa.a : o, s = e.navigateToDashboard, c = void 0 === s ? Sa : s, u = e.useBaseUrl, l = void 0 === u ? m.h : u, d = e.useIsAnonymous, f = void 0 === d ? m.k : d, p = e.useSwitchModals, v = void 0 === p ? ar.a : p, g = l(), b = f(), h = Ea(v(y.f.DASHBOARD_CREATE), 2), j = h[0], O = h[1].off, I = Object(r.useCallback)((function (e, t) {
                var n = t.id;
                c(g, n), O()
            }), [g, O, c]);
            return b ? null : j ? a.a.createElement(n, null, a.a.createElement(i, {onSuccess: I, onCancel: O})) : null
        }, Aa = n("./src/packages/navigation-apps/about-jira-modal/async.js"), xa = n("./src/packages/navigation-apps/get-jira-mobile-modal/async.js");

        function Pa(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Ma(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ma(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Ma(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var Ca = Object(rn.asyncComponent)({
            resolve: function () {
                return n.e("async-keyboard-shortcuts-dialog").then(n.bind(null, "./src/packages/common-legacy-do-not-add-anything-new/src/components/keyboard-shortcuts-dialog/index.js"))
            }
        }), Ta = function (e) {
            var t = e.AboutJiraModal, n = void 0 === t ? Aa.a : t, r = e.Absolute, o = void 0 === r ? Ia : r, i = e.GetJiraMobileModal, s = void 0 === i ? xa.a : i, c = e.KeyboardShortcutsDialog, u = void 0 === c ? Ca : c, l = e.useApplicationPermissions, d = void 0 === l ? m.f : l, f = e.useSwitchModals, p = void 0 === f ? ar.a : f, v = Pa(p(y.f.ABOUT_JIRA), 2), g = v[0], b = v[1].off, h = Pa(p(y.f.JIRA_MOBILE), 2), j = h[0], O = h[1].off, I = Pa(p(y.f.KEYBOARD_SHORTCUTS), 2), S = I[0], E = I[1].off, w = d().applicationPermissions;
            return a.a.createElement(o, null, g && a.a.createElement(n, {onClose: b}), j && a.a.createElement(s, {onClose: O}), S && a.a.createElement(u, {
                    isOpen: !0,
                    onDialogDismissed: E,
                    applicationPermissionData: w
                }))
        };

        function Fa(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Na(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Na(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Na(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        Ta.displayName = "Help";
        var _a = Object(rn.asyncComponent)({
            resolve: function () {
                return n.e("navigation-next.global-navigation.components.keyboard-shortcuts").then(n.bind(null, "./src/packages/navigation-next/src/global-navigation/components/keyboard-shortcuts/index.js"))
            }
        }), Da = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.Shortcuts, n = void 0 === t ? _a : t, o = e.onCreateClick, i = void 0 === o ? dn.a : o, s = e.useBaseUrl, c = void 0 === s ? m.h : s, u = e.useTopMenus, l = void 0 === u ? W.a : u, d = c(), f = l(y.e.SEARCH), p = Fa(f, 2), v = p[1].on, g = Object(r.useCallback)((function () {
                return requestAnimationFrame((function () {
                    v()
                }))
            }), [v]);
            return a.a.createElement(n, {baseUrl: d, showIssueCreate: i, showSearch: g})
        };
        Da.displayName = "KeyboardShortcuts";
        var Ra = n("./src/packages/common-legacy-do-not-add-anything-new/src/util/op-triggers/on-mount/index.js");

        function Ua(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Ba(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ba(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Ba(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var La = Object(rn.asyncComponent)({
            resolve: function () {
                return n.e("async-project-create-drawer-wrapper").then(n.bind(null, "./src/packages/navigation-apps/project-create-drawer/src/index.js")).then((function (e) {
                    return e.Consumer
                }))
            }, LoadingComponent: function (e) {
                return (0, e.children)({methods: {open: null, setOnCloseCallback: null}})
            }
        }), Va = function (e) {
            var t = e.OpTrigger, n = void 0 === t ? Ra.a : t, r = e.ProjectCreateDrawerConsumer, o = void 0 === r ? La : r, i = e.useSwitchModals, s = Ua((void 0 === i ? ar.a : i)(y.f.PROJECT_CREATE), 2), c = s[0], u = s[1].off;
            return c ? a.a.createElement(o, null, (function (e) {
                var t = e.methods, r = t.open, o = t.setOnCloseCallback;
                return r && o ? a.a.createElement(a.a.Fragment, null, a.a.createElement(n, {
                    op: r,
                    args: [{source: "navigationNext"}]
                }), a.a.createElement(n, {op: o, args: [u]})) : null
            })) : null
        }, Ha = function (e) {
            var t = e.Dashboards, n = void 0 === t ? ka : t, r = e.Help, o = void 0 === r ? Ta : r, i = e.KeyboardShortcuts, s = void 0 === i ? Da : i, c = e.Projects, u = void 0 === c ? Va : c;
            return (a.a.createElement(a.a.Fragment, null, a.a.createElement(s, null), a.a.createElement(o, null), a.a.createElement(u, null), a.a.createElement(n, null)))
        }, Ja = Object(We.defineMessages)({
            topNav: {
                id: "atlassian-navigation.top-nav",
                defaultMessage: "Primary Navigation"
            }, more: {id: "atlassian-navigation.more", defaultMessage: "More"}
        }), $a = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/components/Notifications/index.js");

        function Ga(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Wa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ga(Object(n), !0).forEach((function (t) {
                    qa(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ga(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function qa(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var za = Object(r.forwardRef)((function (e, t) {
            var n = Wa(Wa({}, e), {}, {ref: t});
            return (a.a.createElement($a.a, n))
        })), Ya = Object(We.defineMessages)({
            tooltip: {
                id: "atlassian-navigation.notifications.tooltip",
                defaultMessage: "Notifications"
            }
        });

        function Ka() {
            return (Ka = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        function Qa(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Xa(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xa(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Xa(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var Za = Object(rn.asyncComponent)({
            resolve: function () {
                return n.e("atlassian-navigation.async-notification-badge").then(n.bind(null, "./src/packages/navigation-apps/atlassian-navigation/src/ui/notifications/badge/index.js")).then((function (e) {
                    return e.Badge
                }))
            }
        }), eo = Object(rn.asyncComponent)({
            resolve: function () {
                return n.e("atlassian-navigation.async-notification-menu").then(n.bind(null, "./src/packages/navigation-apps/atlassian-navigation/src/ui/notifications/menu/index.js")).then((function (e) {
                    return e.Menu
                }))
            }
        }), to = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.c), no = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.e), ro = function (e) {
            var t = e.Badge, n = void 0 === t ? Za : t, o = e.Icon, i = void 0 === o ? za : o, c = e.Menu, u = void 0 === c ? eo : c, l = e.Popup, d = void 0 === l ? J.a : l, f = e.ViewExperienceSuccessTracker, v = void 0 === f ? to : f, g = e.ViewExperienceTrackingProvider, b = void 0 === g ? no : g, h = e.useExperienceStart, j = void 0 === h ? B.b : h, O = e.useIntl, I = void 0 === O ? s.b : O, S = e.useIsAnonymous, E = void 0 === S ? m.k : S, w = e.useNavigationItemAnalytics, k = void 0 === w ? Z.a : w, A = e.useTopMenus, x = void 0 === A ? W.a : A, P = Object(p.b)("secondary-actions", "notifications"), M = I().formatMessage, C = E(), T = Qa(Object(r.useState)(!1), 2), F = T[0], N = T[1], _ = Qa(x(y.e.NOTIFICATIONS), 2), D = _[0], R = _[1], U = R.toggle, L = R.off, V = k({navigationItemId: y.h.NOTIFICATIONS}), H = j({
                experience: y.j,
                experienceId: y.h.NOTIFICATIONS,
                analyticsSource: "atlassian-navigation"
            }), $ = Object(r.useCallback)((function () {
                Object(q.d)() && H(), U(), V(), Object(q.h)() && N(!0)
            }), [H, U, V]), G = Object(r.useCallback)((function (e) {
                var t = e.scheduleUpdate;
                return (a.a.createElement(b, {
                    application: null,
                    analyticsSource: "atlassian-navigation",
                    experience: "viewAtlassianNavigationMenu",
                    experienceId: y.h.NOTIFICATIONS,
                    edition: null
                }, a.a.createElement(v, {
                    location: Object(p.a)(P, "menu-popup"),
                    parentProviders: null,
                    failureEventAttributes: null
                }, a.a.createElement(u, {scheduleUpdate: t, testIdPrefix: P}))))
            }), [P]), z = Object(r.useCallback)((function () {
                return a.a.createElement(n, {testIdPrefix: P, isNotificationCleared: F, setIsNotificationCleared: N})
            }), [F, P]), Y = (Object(r.useCallback)((function () {
                return null
            }), []), Object(r.useCallback)((function (e) {
                return a.a.createElement("span", {"data-testid": Object(p.a)(P, "menu-trigger")}, a.a.createElement(i, Ka({}, e, {
                    badge: z,
                    isSelected: D,
                    onClick: $,
                    tooltip: M(Ya.tooltip)
                })))
            }), [z, D, $, M, P]));
            return C ? null : a.a.createElement(d, {
                content: G,
                isOpen: D,
                onClose: L,
                placement: "bottom-start",
                trigger: Y
            })
        };
        ro.displayName = "Notifications";
        var ao = n("./node_modules/@atlaskit/onboarding/dist/esm/components/SpotlightManager.js"), oo = n("./src/packages/common-legacy-do-not-add-anything-new/src/engagement/coordination-client.js"), io = Object(rn.asyncComponent)({
            resolve: function () {
                return n.e("async-onboarding-tour").then(n.bind(null, "./src/packages/navigation-apps/atlassian-navigation/src/ui/onboarding/onboarding-tour/main.js")).then((function (e) {
                    return e.OnboardingTour
                }))
            }
        }), so = function (e) {
            var t = e.children, n = e.SpotlightManager, r = void 0 === n ? ao.c : n, o = e.CoordinationClient, i = void 0 === o ? oo.a : o, s = e.OnboardingTour, c = void 0 === s ? io : s;
            return (a.a.createElement(r, null, a.a.createElement(i, {messageId: y.k}, a.a.createElement(c, null)), t))
        };
        so.displayName = "NavigationOnboarding", so.displayName = "NavigationOnboarding";
        var co = Object(We.defineMessages)({
            title: {
                id: "atlassian-navigation.people.title",
                defaultMessage: "People"
            }
        }), uo = function (e) {
            var t = e.MenuTrigger, n = void 0 === t ? ke : t, r = e.NudgeTooltip, o = void 0 === r ? fn.c : r, i = e.useBaseUrl, c = void 0 === i ? m.h : i, u = e.useIntl, l = void 0 === u ? s.b : u, d = e.useIsAnonymous, f = void 0 === d ? m.k : d, p = c(), v = f(), g = l().formatMessage;
            if (v)return null;
            if (Object(q.f)()) {
                return a.a.createElement(o, {item: "people"}, a.a.createElement(n, {
                    href: "".concat(p, "/jira/people"),
                    menuId: y.e.PEOPLE,
                    navigationItemId: y.h.PEOPLE
                }, g(co.title)))
            }
            return (a.a.createElement(n, {
                href: "".concat(p, "/jira/people"),
                menuId: y.e.PEOPLE,
                navigationItemId: y.h.PEOPLE
            }, g(co.title)))
        };

        function lo(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function fo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? lo(Object(n), !0).forEach((function (t) {
                    mo(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lo(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function mo(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function po(e, t, n, r, a, o, i) {
            try {
                var s = e[o](i), c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, a)
        }

        function vo(e) {
            return function () {
                var t = this, n = arguments;
                return new Promise((function (r, a) {
                    var o = e.apply(t, n);

                    function i(e) {
                        po(o, r, a, i, s, "next", e)
                    }

                    function s(e) {
                        po(o, r, a, i, s, "throw", e)
                    }

                    i(void 0)
                }))
            }
        }

        uo.displayName = "People";
        var go = function () {
            return function () {
                var e = vo(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, o, i, s, c;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)switch (e.prev = e.next) {
                            case 0:
                                if (n = t.setState, r = t.getState, a = r(), o = a.fetchPlansItems, i = a.baseUrl, a.isFetching) {
                                    e.next = 15;
                                    break
                                }
                                return e.prev = 3, s = o(i), n({
                                    isFetching: !0,
                                    fetchError: null,
                                    promise: s
                                }), e.next = 8, s;
                            case 8:
                                c = e.sent, n({
                                    items: c,
                                    hasFetchedOnce: !0,
                                    hasSuccessOnce: !0,
                                    isFetching: !1,
                                    fetchError: null,
                                    promise: null
                                }), e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(3), n(fo(fo({}, r()), {}, {
                                    fetchError: e.t0,
                                    hasFetchedOnce: !0,
                                    isFetching: !1,
                                    promise: null
                                }));
                            case 15:
                            case"end":
                                return e.stop()
                        }
                    }), e, null, [[3, 12]])
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()
        }, bo = {
            load: function () {
                return function () {
                    var e = vo(regeneratorRuntime.mark((function e(t) {
                        var n, r;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;)switch (e.prev = e.next) {
                                case 0:
                                    return n = t.dispatch, r = n(go()), e.next = 4, r;
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }
        }, yo = function (e) {
            var t = e.storeName, n = void 0 === t ? "plans-item-store" : t, r = e.fetchPlansItems, a = {
                baseUrl: Object(w.toBaseUrl)(""),
                fetchPlansItems: r,
                hasFetchedOnce: !1,
                hasSuccessOnce: !1,
                items: null,
                fetchError: null,
                promise: null,
                isFetching: !1
            }, o = Object(E.c)({name: n, actions: bo, initialState: a});
            return {
                usePlansItems: Object(E.b)(o, {
                    selector: function (e) {
                        var t = e.items, n = e.hasFetchedOnce, r = e.fetchError, a = e.promise;
                        return {
                            items: t,
                            hasFetchedOnce: n,
                            hasSuccessOnce: e.hasSuccessOnce,
                            fetchError: r,
                            promise: a,
                            isFetching: e.isFetching
                        }
                    }
                })
            }
        }({fetchPlansItems: k.c}).usePlansItems, ho = function (e) {
            var t = e.MenuItemCommon, n = void 0 === t ? Ft : t, r = e.id, o = e.url, i = e.title, s = e.isVisible, c = e.testIdPrefix;
            return s && a.a.createElement(n, {
                    analytics: {
                        actionSubjectId: "plansNavigationMenuItem",
                        menuItemId: r,
                        menuItemType: "action"
                    }, href: o, key: r, testId: Object(p.a)(c, "item-".concat(r))
                }, i)
        }, jo = Object(We.defineMessages)({
            manageTeams: {
                id: "atlassian-navigation.plans.menu.action-footer.manage-teams",
                defaultMessage: "View shared teams"
            },
            managePlans: {
                id: "atlassian-navigation.plans.menu.action-footer.manage-plans",
                defaultMessage: "View all plans"
            },
            createPlan: {id: "atlassian-navigation.plans.menu.action-footer.create-plan", defaultMessage: "Create plan"}
        });

        function Oo() {
            return (Oo = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        function Io(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return So(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return So(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function So(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var Eo = function (e) {
            var t = e.Section, n = void 0 === t ? Ne.a : t, r = e.MenuItem, o = void 0 === r ? ho : r, i = e.useIntl, c = void 0 === i ? s.b : i, u = e.usePlansItems, l = void 0 === u ? yo : u, d = e.testIdPrefix, f = c().formatMessage, m = Io(l(), 1)[0].items, v = Object(p.a)(d, "action-footer");
            if (!m || !m.links)return null;
            var g = m.links, b = g.manageTeams, y = g.managePlans, h = g.createPlan;
            return (b.isVisible || y.isVisible || h.isVisible) && a.a.createElement(n, {
                    hasSeparator: !0,
                    testId: v
                }, a.a.createElement(o, Oo({}, g.manageTeams, {
                    title: f(jo.manageTeams),
                    testIdPrefix: d
                })), a.a.createElement(o, Oo({}, g.managePlans, {
                    title: f(jo.managePlans),
                    testIdPrefix: d
                })), a.a.createElement(o, Oo({}, g.createPlan, {title: f(jo.createPlan), testIdPrefix: d})))
        }, wo = Object(We.defineMessages)({
            settings: {
                id: "atlassian-navigation.plans.menu.admin-footer.settings",
                defaultMessage: "Settings"
            }
        });

        function ko(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Ao(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ao(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Ao(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var xo = function (e) {
            var t = e.Section, n = void 0 === t ? Ne.a : t, r = e.MenuItem, o = void 0 === r ? Ft : r, i = e.useIntl, c = void 0 === i ? s.b : i, u = e.usePlansItems, l = void 0 === u ? yo : u, d = e.testIdPrefix, f = c().formatMessage, m = ko(l(), 1)[0].items, v = Object(p.a)(d, "admin-footer");
            if (!m || !m.links)return null;
            var g = m.links.settings, b = g.id, y = g.url;
            return g.isVisible && a.a.createElement(n, {
                    hasSeparator: !0,
                    testId: v
                }, a.a.createElement(o, {
                    analytics: {
                        actionSubjectId: "plansNavigationMenuItem",
                        menuItemId: b,
                        menuItemType: "action"
                    }, href: y, key: b, testId: Object(p.a)(v, "item-".concat(b))
                }, f(wo.settings)))
        }, Po = n("./src/packages/navigation-apps/atlassian-navigation/src/ui/plans/menu/content/empty/assets/recent-plans-empty.svg"), Mo = n.n(Po), Co = Object(We.defineMessages)({
            emptyText: {
                id: "atlassian-navigation.plans.menu.content.empty.empty-text",
                defaultMessage: "Use Advanced Roadmaps to see the work of multiple teams and projects in Jira Software, in an always-up-to-date plan."
            }, learnMore: {id: "atlassian-navigation.plans.menu.content.empty.learn-more", defaultMessage: "Learn more"}
        }), To = function (e) {
            var t = e.MenuInfo, n = void 0 === t ? Qe : t, r = e.useIntl, o = void 0 === r ? s.b : r, i = e.testIdPrefix, c = o().formatMessage, u = a.a.createElement(a.a.Fragment, null, a.a.createElement("p", null, c(Co.emptyText)), a.a.createElement("a", {
                href: "https://confluence.atlassian.com/jiraportfoliocloud",
                target: "_blank",
                rel: "noopener noreferrer"
            }, c(Co.learnMore)));
            return a.a.createElement(n, {
                imgAltText: "",
                imgSrc: Mo.a,
                testId: Object(p.a)(i, "empty"),
                text: u,
                useIntl: s.b
            })
        };
        To.displayName = "Empty";
        var Fo = Object(We.defineMessages)({
            recent: {
                id: "atlassian-navigation.plans.menu.content.recent",
                defaultMessage: "Recent"
            },
            untitledPlan: {id: "atlassian-navigation.plans.menu.content.untitled-plan", defaultMessage: "Untitled plan"}
        });

        function No(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return _o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _o(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function _o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var Do = function (e) {
            var t = e.Empty, n = void 0 === t ? To : t, r = e.Section, o = void 0 === r ? Ne.a : r, i = e.HeadingItem, c = void 0 === i ? Jn.a : i, u = e.MenuItem, l = void 0 === u ? Ft : u, d = e.useIntl, f = void 0 === d ? s.b : d, m = e.usePlansItems, v = void 0 === m ? yo : m, g = e.testIdPrefix, b = f().formatMessage, y = No(v(), 1)[0].items, h = Object(p.a)(g, "items");
            return y && 0 !== y.recent.length ? a.a.createElement(o, {
                isScrollable: !0,
                testId: h
            }, a.a.createElement(c, {testId: Object(p.a)(g, "heading")}, b(Fo.recent)), y.recent.map((function (e, t) {
                return a.a.createElement(l, {
                    analytics: {
                        actionSubjectId: "plansNavigationMenuItem",
                        menuItemId: e.id,
                        menuItemType: "recent",
                        position: t
                    }, href: e.url, key: e.id, testId: Object(p.a)(g, "item-".concat(t))
                }, e.title || b(Fo.untitledPlan))
            }))) : a.a.createElement(n, {testIdPrefix: Object(p.a)(g, "empty")})
        };
        Do.displayName = "Content";
        var Ro = function (e) {
            var t = e.LoadStatusCommon, n = void 0 === t ? mr : t, r = e.usePlansItems, o = void 0 === r ? yo : r, i = e.shouldThrowError, s = void 0 !== i && i;
            return (a.a.createElement(n, {shouldThrowError: s, useProvider: o}))
        };
        Ro.displayName = "LoadStatus";
        var Uo = function (e) {
            var t = e.ActionFooter, n = void 0 === t ? Eo : t, o = e.AdminFooter, i = void 0 === o ? xo : o, s = e.Content, c = void 0 === s ? Do : s, u = e.Error, l = void 0 === u ? rt : u, d = e.ErrorBoundary, f = void 0 === d ? $e.a : d, m = e.Layout, v = void 0 === m ? ct : m, b = e.LoadStatus, h = void 0 === b ? Ro : b, j = e.Section, O = void 0 === j ? Ne.a : j, I = e.SkeletonContent, S = void 0 === I ? dt : I, E = e.SkeletonFooter, w = void 0 === E ? ft : E, k = e.ViewExperienceSuccessTracker, A = void 0 === k ? g.c : k, x = e.testIdPrefix, P = Object(p.a)(x, "content"), M = Object(p.a)(x, "action-footer"), C = Object(p.a)(x, "admin-footer"), T = Object(r.useCallback)((function () {
                return a.a.createElement(l, {testIdPrefix: P})
            }), [P]), F = a.a.createElement(a.a.Fragment, null, a.a.createElement(O, null, a.a.createElement(S, {testIdPrefix: P})), a.a.createElement(O, {hasSeparator: !0}, a.a.createElement(w, {testIdPrefix: P})));
            return a.a.createElement(v, {isWide: !0}, a.a.createElement(f, {
                id: y.e.PLANS,
                packageName: y.l,
                render: T,
                withExperienceTracker: !0,
                extraEventData: {id: y.e.PLANS}
            }, a.a.createElement(r.Suspense, {fallback: F}, a.a.createElement(A, {
                location: P,
                failureEventAttributes: null,
                parentProviders: null
            }, a.a.createElement(h, {shouldThrowError: !0}), a.a.createElement(c, {testIdPrefix: P}), a.a.createElement(n, {testIdPrefix: M}), a.a.createElement(i, {testIdPrefix: C})))))
        };
        Uo.displayName = "Menu";
        var Bo = n("./node_modules/@atlassiansox/engagekit/dist/esm/spotlight/index.js"), Lo = n("./node_modules/@atlaskit/onboarding/dist/esm/components/SpotlightTarget.js"), Vo = n("./src/packages/platform/controllers/global/theme/src/index.js"), Ho = le.default.div(["background-color:", ";height:", ";margin-top:", " !important;padding-top:", ";"], (function (e) {
            var t = e.backgroundColor;
            return null == t ? Nt.colors.N0 : t
        }), (function (e) {
            return e.height
        }), (function (e) {
            var t = e.marginTop;
            return void 0 === t ? "0" : t
        }), (function (e) {
            var t = e.paddingTop;
            return void 0 === t ? "0" : t
        }));

        function Jo() {
            return (Jo = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        function $o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Go(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? $o(Object(n), !0).forEach((function (t) {
                    Wo(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $o(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Wo(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function qo(e, t) {
            if (null == e)return {};
            var n, r, a = function (e, t) {
                if (null == e)return {};
                var n, r, a = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        function zo(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Yo(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yo(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Yo(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var Ko = {hasSpotlightShown: !1, hasSpotlightDone: !1}, Qo = Object(r.forwardRef)((function (e, t) {
            var n = e.SpotlightManager, o = void 0 === n ? ao.c : n, i = e.SpotlightTarget, s = void 0 === i ? Lo.a : i, c = e.EngagementSpotlight, u = void 0 === c ? Bo.a : c, l = e.TriggerWrapper, d = void 0 === l ? Ho : l, f = e.useTheme, m = void 0 === f ? Vo.c : f, p = e.useOverflowStatus, v = void 0 === p ? H.c : p, g = qo(e, ["SpotlightManager", "SpotlightTarget", "EngagementSpotlight", "TriggerWrapper", "useTheme", "useOverflowStatus"]), b = function (e) {
                var t = e.useTheme, n = e.useOverflowStatus, a = Object(r.useRef)(null), o = zo(Object(r.useState)(0), 2), i = o[0], s = o[1], c = zo(t(), 1)[0].navigationTheme, u = !n().isVisible;
                Object(r.useLayoutEffect)((function () {
                    a.current && s(a.current.getBoundingClientRect().height)
                }), [a]);
                var l = u ? null : c.backgroundColor, d = 0 === i ? "100%" : "".concat(i, "px"), f = u ? "".concat(6, "px") : "0";
                return {ref: a, height: d, backgroundColor: l, marginSize: f}
            }({useTheme: m, useOverflowStatus: v}), y = function () {
                var e = zo(Object(r.useState)(!1), 2), t = e[0], n = e[1];
                return Object(r.useLayoutEffect)((function () {
                    var e = setTimeout((function () {
                        return n(!0)
                    }), 100);
                    return function () {
                        return clearTimeout(e)
                    }
                }), []), t
            }();
            !function (e) {
                var t = (0, e.useOverflowStatus)(), n = t.isVisible, a = t.openOverflowMenu, o = !n;
                Object(r.useLayoutEffect)((function () {
                    return function () {
                        var e = null != document.querySelector('[data-uid="'.concat("plans-spotlight-target-wrapper", '"]'));
                        Ko.hasSpotlightShown = Ko.hasSpotlightShown || e, o && Ko.hasSpotlightShown && !Ko.hasSpotlightDone && a(), Ko.hasSpotlightShown && !e && (Ko.hasSpotlightDone = !0)
                    }
                }), [o, a])
            }({useOverflowStatus: v});
            var h = Go(Go({}, g), {}, {useOverflowStatus: e.useOverflowStatus});
            return (a.a.createElement(d, {
                height: b.height,
                backgroundColor: b.backgroundColor,
                paddingTop: b.marginSize
            }, a.a.createElement(o, null, a.a.createElement(s, {name: "nav-advanced-roadmaps-plans-spotlight"}, a.a.createElement(d, {
                "data-uid": "plans-spotlight-target-wrapper",
                innerRef: b.ref,
                height: b.height,
                backgroundColor: b.backgroundColor,
                marginTop: "-".concat(b.marginSize)
            }, a.a.createElement(ke, Jo({ref: t}, h)))), y && a.a.createElement(u, {engagementId: "nav-advanced-roadmaps-plans-spotlight"}))))
        }));

        function Xo() {
            return (Xo = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        var Zo = Object(r.forwardRef)((function (e, t) {
            return a.a.createElement(Qo, Xo({}, e, {ref: t}))
        })), ei = Object(We.defineMessages)({plans: {id: "atlassian-navigation.plans.plans", defaultMessage: "Plans"}});

        function ti() {
            return (ti = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        function ni(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return ri(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ri(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function ri(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var ai = function (e) {
            var t = e.Menu, n = void 0 === t ? Uo : t, o = e.MenuTrigger, i = void 0 === o ? Zo : o, c = e.Popup, u = void 0 === c ? Fe : c, l = e.usePlansItems, d = void 0 === l ? yo : l, f = e.useIntl, m = void 0 === f ? s.b : f, p = ni(d(), 2), v = p[0].hasSuccessOnce, g = p[1].load, b = m().formatMessage;
            Object(r.useEffect)((function () {
                !v && g()
            }), [v, g]);
            var h = Object(r.useCallback)((function () {
                g()
            }), [g]), j = Object(r.forwardRef)((function (e, t) {
                return a.a.createElement(i, ti({}, e, {ref: t}))
            }));
            return a.a.createElement(u, {
                menuId: y.e.PLANS,
                navigationItemId: y.h.PLANS,
                Menu: n,
                MenuTrigger: j,
                onBeforeMenuOpen: h
            }, b(ei.plans))
        };
        ai.displayName = "Plans";
        var oi = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/components/ProductHome/custom-product-home.js"), ii = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/components/ProductHome/product-home.js"), si = n("./node_modules/@atlaskit/logo/dist/esm/JiraCoreLogo/Icon.js"), ci = n("./node_modules/@atlaskit/logo/dist/esm/JiraCoreLogo/Logo.js"), ui = n("./node_modules/@atlaskit/logo/dist/esm/JiraLogo/Icon.js"), li = n("./node_modules/@atlaskit/logo/dist/esm/JiraLogo/Logo.js"), di = n("./node_modules/@atlaskit/logo/dist/esm/JiraServiceDeskLogo/Icon.js"), fi = n("./node_modules/@atlaskit/logo/dist/esm/JiraServiceDeskLogo/Logo.js"), mi = n("./node_modules/@atlaskit/logo/dist/esm/JiraSoftwareLogo/Icon.js"), pi = n("./node_modules/@atlaskit/logo/dist/esm/JiraSoftwareLogo/Logo.js"), vi = n("./src/packages/navigation-next/src/baskets/meta/index.js"), gi = n("./src/packages/navigation-next/src/providers/custom-logo-provider/index.js");

        function bi(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return yi(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yi(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function yi(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var hi = {
            core: {icon: si.a, logo: ci.a},
            jira: {icon: ui.a, logo: li.a},
            serviceDesk: {icon: di.a, logo: fi.a},
            software: {icon: mi.a, logo: pi.a}
        }, ji = Object(p.b)("product-home-"), Oi = function (e) {
            var t = e.AkCustomProductHome, n = void 0 === t ? oi.a : t, o = e.AkProductHome, i = void 0 === o ? ii.a : o, s = e.useBaseUrl, c = void 0 === s ? m.h : s, u = e.useCustomLogo, l = void 0 === u ? gi.b : u, d = e.useNavigationItemAnalytics, f = void 0 === d ? Z.a : d, p = e.useProductName, g = void 0 === p ? m.o : p, b = e.useRouterActions, h = void 0 === b ? v.b : b, j = e.useSiteTitle, O = void 0 === j ? vi.c : j, I = c(), S = l().data.logoUrl, E = bi(g(), 1)[0].data.productName, w = bi(O(), 1)[0].data, k = w && w.shouldShow && w.value || void 0, A = f({navigationItemId: y.h.LOGO}), x = h().push, P = "".concat(I, "/jira"), M = Object(r.useCallback)((function (e) {
                A(), e.ctrlKey || e.metaKey || (e.preventDefault(), x(P))
            }), [A, x, P]);
            return S ? a.a.createElement(n, {
                iconUrl: S,
                logoUrl: S,
                href: P,
                onClick: M,
                siteTitle: k,
                testId: ji
            }) : a.a.createElement(i, {
                icon: hi[E].icon,
                logo: hi[E].logo,
                href: P,
                onClick: M,
                siteTitle: k,
                testId: ji
            })
        };
        Oi.displayName = "ProductHome";
        var Ii = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/components/Profile/index.js"), Si = n("./node_modules/@atlaskit/avatar--current/components/Avatar.js"), Ei = n("./src/packages/navigation-next/src/providers/current-user-provider/index.js"), wi = n("./src/packages/platform/utils/fetch/src/index.js");

        function ki(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Ai(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ai(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Ai(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var xi = function (e) {
            var t = ki(Object(f.s)(), 1)[0].isReady, n = Object(m.h)(), a = ki(Object(r.useState)(null), 2), o = a[0], i = a[1], s = e || t;
            return Object(r.useEffect)((function () {
                if (s && !o) {
                    i({});
                    var e = "".concat(n, "/rest/greenhopper/1.0/rapidviews/recent?maxResults=1&userBoard=true");
                    Object(wi.g)(e).then((function (e) {
                        var t = ki(e.views, 1)[0];
                        t && i(t)
                    })).catch((function () {
                    }))
                }
            }), [s, o, i, n]), o && o.id || null
        }, Pi = n("./src/packages/platform/controllers/unified-feedback/src/index.js");

        function Mi(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Ci(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Mi(Object(n), !0).forEach((function (t) {
                    Ti(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mi(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Ti(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Fi(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Ni(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ni(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Ni(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var _i = function (e) {
            var t = e.MenuItem, n = void 0 === t ? Ft : t, o = e.analytics, i = e.children, s = e.isNavigationFeedback, u = void 0 !== s && s, l = e.testId, d = e.useNavV3RolloutServiceAnalyticsData, f = void 0 === d ? c.e : d, m = e.useUnifiedFeedback, p = Fi((void 0 === m ? Pi.c : m)(), 2)[1].openFeedbackDialog, v = f(), g = Object(r.useMemo)((function () {
                return Ci(Ci({}, v), {}, {type: "navV3GiveFeedback"})
            }), [v]), b = Object(r.useCallback)((function () {
                p(u ? {
                    embeddableKey: "a3c23e75-1db9-4aa0-90af-56f35b75acb2",
                    feedbackGroupId: Object(q.g)() ? "jira-nav3" : void 0,
                    requestTypeId: "251",
                    isNavigationFeedback: !1,
                    isNavigationV3OptOutFeedback: !1,
                    isServicedeskFeedback: !1,
                    isSimplifiedProject: !1,
                    isSoftwareFeedback: !1,
                    isBentoFeedback: !1,
                    analyticsAttributes: g
                } : {
                    embeddableKey: "82faf4d9-819a-449e-9b4c-97017940002e",
                    requestTypeId: "112",
                    isNavigationFeedback: !1,
                    isNavigationV3OptOutFeedback: !1,
                    isServicedeskFeedback: !1,
                    isSimplifiedProject: !1,
                    isSoftwareFeedback: !1,
                    isBentoFeedback: !1
                })
            }), [g, u, p]);
            return a.a.createElement(n, {analytics: o, onClick: b, testId: l}, i)
        };
        _i.displayName = "FeedbackItem";
        var Di = Object(We.defineMessages)({
            giveFeedback: {
                id: "atlassian-navigation.profile.menu.give-feedback",
                defaultMessage: "Give us feedback"
            },
            yourBoards: {id: "atlassian-navigation.profile.menu.your-boards", defaultMessage: "Your boards"},
            personalSettings: {
                id: "atlassian-navigation.profile.menu.personal-settings",
                defaultMessage: "Personal settings"
            },
            logout: {id: "atlassian-navigation.profile.menu.logout", defaultMessage: "Log out"},
            jira: {id: "atlassian-navigation.profile.menu.jira", defaultMessage: "Jira"}
        }), Ri = n("./src/packages/platform/ui/feedback/feedback-dialog-base/src/model/types.js"), Ui = Object(We.defineMessages)({
            optOut: {
                id: "atlassian-navigation.profile.menu.nav-onboarding.opt-out",
                defaultMessage: "Turn off the New Navigation"
            },
            navigationFeedback: {
                id: "atlassian-navigation.profile.menu.nav-onboarding.navigation-feedback",
                defaultMessage: "Navigation feedback"
            },
            onBoarding: {
                id: "atlassian-navigation.profile.menu.nav-onboarding.on-boarding",
                defaultMessage: "New Navigation"
            }
        });

        function Bi(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Li(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Bi(Object(n), !0).forEach((function (t) {
                    Vi(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bi(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Vi(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Hi(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Ji(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ji(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Ji(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var $i = function (e) {
            var t = e.FeedbackItem, n = void 0 === t ? _i : t, o = e.HeadingItem, i = void 0 === o ? Jn.a : o, u = e.MenuItem, d = void 0 === u ? Ft : u, f = e.testIdPrefix, m = e.useAnalyticsEvents, v = void 0 === m ? l.w : m, g = e.useIntl, b = void 0 === g ? s.b : g, y = e.useNavV3RolloutService, h = void 0 === y ? c.d : y, j = e.useNavV3RolloutServiceAnalyticsData, O = void 0 === j ? c.e : j, I = e.useUnifiedFeedback, S = Hi((void 0 === I ? Pi.c : I)(), 2)[1].openFeedbackDialog, E = b().formatMessage, w = Hi(h(), 2), k = w[0], A = w[1], x = O(), P = Object(r.useMemo)((function () {
                return Li(Li({}, x), {}, {type: "navV3OptOut", "opt-in": !1})
            }), [x]), M = v().createAnalyticsEvent, C = 0, T = Object(p.a)(f, "new-nav");
            return a.a.createElement("span", {"data-testid": T}, a.a.createElement(i, {testId: Object(p.a)(T, "heading")}, E(Ui.onBoarding)), k.isOptInOutEnabled ? a.a.createElement(d, {
                analytics: {
                    actionSubjectId: "profileNavigationMenuItem",
                    menuItemId: "turn-off",
                    menuItemType: "newNav",
                    position: C++
                }, onClick: function () {
                    var e = M({}), t = Object(q.g)() ? "jira-nav3-opt-out" : void 0, n = Object(q.g)() ? [{
                        key: Ri.a.OPT_OUT,
                        value: "Yes"
                    }] : [];
                    S({
                        additionalFeedbackEntries: n,
                        feedbackGroupId: t,
                        isNavigationFeedback: !1,
                        isNavigationV3OptOutFeedback: !0,
                        isServicedeskFeedback: !1,
                        isSimplifiedProject: !1,
                        isSoftwareFeedback: !1,
                        isBentoFeedback: !1,
                        analyticsAttributes: P,
                        onClose: function () {
                            A.optOut(e, P)
                        }
                    })
                }, testId: Object(p.a)(T, "item-opt-out")
            }, E(Ui.optOut)) : null, a.a.createElement(n, {
                isNavigationFeedback: !0,
                analytics: {
                    actionSubjectId: "profileNavigationMenuItem",
                    menuItemId: "feedback",
                    menuItemType: "newNav",
                    position: C++
                },
                testId: Object(p.a)(T, "item-feedback")
            }, E(Ui.navigationFeedback)))
        };
        $i.displayName = "NavOnBoarding";
        var Gi = n("./src/packages/growth/jsw-onboarding-checklist/src/services/index.js"), Wi = Object(We.defineMessages)({
            openQuickStart: {
                id: "atlassian-navigation.profile.menu.onboarding-quick-start.open-quick-start",
                defaultMessage: "Open Quickstart"
            }
        }), qi = function (e) {
            var t = e.MenuItem, n = e.useShouldShowOpenMenuItem, r = e.useIntl, o = e.useAnalyticsEvents, i = e.fireUIAnalytics, s = r().formatMessage, c = o().createAnalyticsEvent, u = n(), l = u.shouldShow, d = u.setIsDismissed;
            return l ? a.a.createElement(t, {
                analytics: {
                    actionSubjectId: "profileNavigationMenuItem",
                    menuItemId: "open-quick-start",
                    menuItemType: "jira",
                    position: 1
                }, onClick: function () {
                    var e = c({});
                    i(e, "button open", {actionSubjectId: "nuxOnboardingQuickStartDismissButton"}), d(!1)
                }
            }, s(Wi.openQuickStart)) : null
        };
        qi.displayName = "RenderMenuItem";
        var zi = function (e) {
            var t = e.MenuItem, n = void 0 === t ? Ft : t, r = e.JswOnboardingContainer, o = void 0 === r ? Gi.a : r, i = e.useShouldShowOpenMenuItem, c = void 0 === i ? Gi.f : i, u = e.useTenantContext, d = void 0 === u ? m.q : u, f = e.useIntl, p = void 0 === f ? s.b : f, v = e.useAnalyticsEvents, g = void 0 === v ? l.w : v, b = e.fireUIAnalytics, y = void 0 === b ? l.u : b, h = d(), j = h.atlassianAccountId, O = h.baseUrl;
            if (!j)return null;
            var I = {MenuItem: n, useShouldShowOpenMenuItem: c, useIntl: p, useAnalyticsEvents: g, fireUIAnalytics: y};
            return (a.a.createElement(o, {isGlobal: !0, accountId: j, baseUrl: O}, a.a.createElement(qi, I)))
        };
        zi.displayName = "OpenOnboardingQuickStartMenuItem";
        var Yi = n("./node_modules/@atlaskit/icon--current/glyph/shortcut.js"), Ki = n.n(Yi), Qi = n("./src/packages/navigation-next/src/baskets/navigation/index.js");

        function Xi(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Zi(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zi(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Zi(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var es = function (e) {
            var t = e.MenuItem, n = void 0 === t ? Ft : t, o = e.startPosition, i = e.testIdPrefix, s = e.useSidebar, c = Xi((void 0 === s ? Qi.u : s)({useCurrentType: !0}), 2), u = c[0], l = u.data, d = u.loading, f = u.error, m = c[1].fetch;
            Object(r.useEffect)((function () {
                l || d || f || m()
            }), [l, f, m, d]);
            var v = l ? Sn()(l, "global.profile.items", []).filter((function (e) {
                return !["view_profile", "log_out"].includes(e.id)
            })) : [];
            return v.length ? a.a.createElement(a.a.Fragment, null, v.map((function (e, t) {
                return a.a.createElement(n, {
                    analytics: {
                        actionSubjectId: "profileNavigationMenuItem",
                        menuItemId: e.id,
                        menuItemType: "personal",
                        position: o + t
                    }, className: e.styleClass, href: e.url, key: e.url, testId: Object(p.a)(i, "item-addon-".concat(t))
                }, e.name)
            }))) : null
        }, ts = Object(We.defineMessages)({
            profile: {
                id: "atlassian-navigation.profile.menu.user-settings.profile",
                defaultMessage: "Profile"
            },
            accountSettings: {
                id: "atlassian-navigation.profile.menu.user-settings.account-settings",
                defaultMessage: "Account settings"
            }
        }), ns = function (e) {
            var t = e.ExtraItems, n = void 0 === t ? es : t, r = e.HeadingItem, o = void 0 === r ? Jn.a : r, i = e.MenuItem, c = void 0 === i ? Ft : i, u = e.ShortcutIcon, l = void 0 === u ? Ki.a : u, d = e.testIdPrefix, f = e.useAtlassianPersonalSettingsLink, m = void 0 === f ? vr.b : f, v = e.useIntl, g = void 0 === v ? s.b : v, b = e.useJiraPersonalSettingsLink, y = void 0 === b ? vr.c : b, h = e.userFullname, j = void 0 === h ? "" : h, O = g().formatMessage, I = y(), S = m(), E = Object(p.a)(d, "personal");
            return a.a.createElement("span", {"data-testid": E}, a.a.createElement(o, {testId: Object(p.a)(E, "heading")}, j), a.a.createElement(c, {
                analytics: {
                    actionSubjectId: "profileNavigationMenuItem",
                    menuItemId: "profile",
                    menuItemType: "personal",
                    position: 0
                }, href: I, testId: Object(p.a)(E, "item-profile")
            }, O(ts.profile)), a.a.createElement(c, {
                analytics: {
                    actionSubjectId: "profileNavigationMenuItem",
                    menuItemId: "account-settings",
                    menuItemType: "personal",
                    position: 1
                },
                href: S,
                target: "_blank",
                iconAfter: a.a.createElement(l, {size: "small", primaryColor: Nt.colors.N100, label: ""}),
                testId: Object(p.a)(E, "item-account-settings")
            }, O(ts.accountSettings)), a.a.createElement(n, {startPosition: 2, testIdPrefix: E}))
        };
        ns.displayName = "UserSettings";
        var rs = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.c), as = function (e) {
            var t = e.FeedbackItem, n = void 0 === t ? _i : t, o = e.HeadingItem, i = void 0 === o ? Jn.a : o, c = e.Layout, u = void 0 === c ? ct : c, l = e.MenuItem, d = void 0 === l ? Ft : l, f = e.NavOnBoarding, v = void 0 === f ? $i : f, g = e.OpenOnboardingQuickStartMenuItem, h = void 0 === g ? zi : g, j = e.Section, O = void 0 === j ? Ne.a : j, I = e.UserSettings, S = void 0 === I ? ns : I, E = e.testIdPrefix, w = e.useBaseUrl, k = void 0 === w ? m.h : w, A = e.useCurrentUser, x = void 0 === A ? Ei.b : A, P = e.useIntl, M = void 0 === P ? s.b : P, C = e.userBoardId, T = e.ViewExperienceSuccessTracker, F = void 0 === T ? rs : T, N = e.useExperienceSuccess, _ = void 0 === N ? b.b : N, D = k(), R = M().formatMessage, U = _({experience: y.j}), B = x().data.user;
            Object(r.useEffect)((function () {
                Object(q.d)() && U()
            }), [U]);
            var L = Object(p.a)(E, "menu-popup"), V = Object(p.a)(L, "content"), H = Object(p.a)(L, "footer");
            return a.a.createElement("span", {"data-testid": L}, a.a.createElement(u, null, a.a.createElement(F, {
                location: V,
                parentProviders: null,
                failureEventAttributes: null
            }, a.a.createElement(O, {testId: V}, a.a.createElement(v, {testIdPrefix: V}), Object(q.f)() && a.a.createElement(h, null), a.a.createElement("span", {"data-testid": Object(p.a)(V, "jira")}, a.a.createElement(i, {testId: Object(p.a)(V, "jira", "heading")}, R(Di.jira)), a.a.createElement(n, {
                analytics: {
                    actionSubjectId: "profileNavigationMenuItem",
                    menuItemId: "feedback",
                    menuItemType: "jira",
                    position: 0
                }, testId: Object(p.a)(V, "jira", "item-feedback")
            }, R(Di.giveFeedback)), null !== C && a.a.createElement(d, {
                    analytics: {
                        actionSubjectId: "profileNavigationMenuItem",
                        menuItemId: "your-boards",
                        menuItemType: "jira",
                        position: 1
                    },
                    href: "".concat(D, "/secure/RapidBoard.jspa?rapidView=").concat(String(C)),
                    testId: Object(p.a)(V, "jira", "item-your-boards")
                }, R(Di.yourBoards)), a.a.createElement(d, {
                analytics: {
                    actionSubjectId: "profileNavigationMenuItem",
                    menuItemId: "personal-settings",
                    menuItemType: "jira",
                    position: null !== C ? 2 : 1
                },
                href: "".concat(D, "/secure/ViewPersonalSettings.jspa"),
                testId: Object(p.a)(V, "jira", "item-personal-settings")
            }, R(Di.personalSettings))), a.a.createElement(S, {
                userFullname: B.userFullname,
                testIdPrefix: V
            }))), a.a.createElement(F, {
                location: H,
                parentProviders: null,
                failureEventAttributes: null
            }, a.a.createElement(O, {
                hasSeparator: !0,
                testId: H
            }, a.a.createElement("span", {"data-testid": Object(p.a)(H, "items")}, a.a.createElement(d, {
                analytics: {
                    actionSubjectId: "profileNavigationMenuItem",
                    menuItemId: "logout",
                    menuItemType: "action",
                    position: 0
                }, href: "".concat(D, "/logout"), testId: Object(p.a)(H, "items", "item-log-out")
            }, R(Di.logout)))))))
        };
        as.displayName = "Menu";
        var os = Object(We.defineMessages)({
            tooltip: {
                id: "atlassian-navigation.profile.tooltip",
                defaultMessage: "Your profile and settings"
            }
        });

        function is() {
            return (is = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        function ss(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return cs(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cs(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function cs(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var us = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.c), ls = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.e), ds = function (e) {
            var t = e.AkProfile, n = void 0 === t ? Ii.a : t, o = e.Avatar, i = void 0 === o ? Si.a : o, c = e.Menu, u = void 0 === c ? as : c, l = e.Popup, d = void 0 === l ? J.a : l, f = e.SpotlightTarget, m = void 0 === f ? Lo.a : f, v = e.ViewExperienceSuccessTracker, g = void 0 === v ? us : v, b = e.ViewExperienceTrackingProvider, h = void 0 === b ? ls : b, j = e.useCurrentUser, O = void 0 === j ? Ei.b : j, I = e.useExperienceStart, S = void 0 === I ? B.b : I, E = e.useIntl, w = void 0 === E ? s.b : E, k = e.useNavigationItemAnalytics, A = void 0 === k ? Z.a : k, x = e.useTopMenus, P = void 0 === x ? W.a : x, M = e.useUserBoardId, C = void 0 === M ? xi : M, T = w().formatMessage, F = ss(P(y.e.PROFILE), 2), N = F[0], _ = F[1], D = _.toggle, R = _.off, U = A({navigationItemId: y.h.PROFILE}), L = S({
                experience: y.j,
                experienceId: y.h.PROFILE,
                analyticsSource: "atlassian-navigation"
            }), V = Object(r.useCallback)((function () {
                Object(q.d)() && L(), D(), U()
            }), [L, D, U]), H = C(N), $ = Object(p.b)("secondary-actions", "profile"), G = O().data.user, z = Object(r.useCallback)((function () {
                return a.a.createElement(h, {
                    application: null,
                    analyticsSource: "atlassian-navigation",
                    experience: "viewAtlassianNavigationMenu",
                    experienceId: y.h.PROFILE,
                    edition: null
                }, a.a.createElement(g, {
                    location: Object(p.a)($, "menu-popup"),
                    parentProviders: null,
                    failureEventAttributes: null
                }, a.a.createElement(u, {userBoardId: H, testIdPrefix: $})))
            }), [H, $]), Y = Object(r.useCallback)((function (e) {
                return a.a.createElement("span", {"data-testid": Object(p.a)($, "menu-trigger")}, a.a.createElement(n, is({}, e, {
                    icon: a.a.createElement(m, {name: y.m}, a.a.createElement(i, {
                        src: G.avatarUrls ? G.avatarUrls["48x48"] : void 0,
                        size: "small",
                        borderColor: "transparent"
                    })), isSelected: N, onClick: V, tooltip: T(os.tooltip)
                })))
            }), [T, N, V, $, G]);
            return G.isAnonymous ? null : a.a.createElement(d, {
                content: z,
                isOpen: N,
                onClose: R,
                placement: "bottom-end",
                trigger: Y
            })
        };
        ds.displayName = "Profile";
        var fs = n("./src/packages/platform/services/refs-store/src/index.js"), ms = n("./src/packages/navigation-apps/atlassian-navigation/src/ui/projects/menu/empty/assets/project-empty.svg"), ps = n.n(ms), vs = Object(We.defineMessages)({
            emptyText: {
                id: "atlassian-navigation.projects.menu.empty.empty-text",
                defaultMessage: "Make the most of your Atlassian products by extending them with projects."
            },
            learnMore: {id: "atlassian-navigation.projects.menu.empty.learn-more", defaultMessage: "Learn more"},
            emptyImg: {
                id: "atlassian-navigation.projects.menu.empty.empty-img",
                defaultMessage: "An image showing that the projects dropdown menu is empty"
            }
        });

        function gs(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return bs(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bs(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function bs(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var ys = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.c), hs = function (e) {
            var t = e.MenuInfo, n = void 0 === t ? Qe : t, o = e.ViewExperienceSuccessTracker, c = void 0 === o ? ys : o, u = e.children, l = e.testIdPrefix, f = e.useExperienceSuccess, v = void 0 === f ? b.b : f, g = e.useFavorite, h = void 0 === g ? i.f : g, j = e.useIntl, O = void 0 === j ? s.b : j, I = e.useIsAnonymous, S = void 0 === I ? m.k : I, E = e.useItems, w = void 0 === E ? Fn : E, k = e.useRecent, A = void 0 === k ? d.f : k, x = O().formatMessage, P = S(), M = v({experience: y.j}), C = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", null, a.a.createElement("p", null, x(vs.emptyText))), a.a.createElement("div", null, a.a.createElement("a", {
                href: "https://confluence.atlassian.com/adminjiracloud/creating-editing-deleting-and-hiding-projects-844500729.html",
                target: "_blank",
                rel: "noopener noreferrer"
            }, x(vs.learnMore)))), T = gs(h(), 1)[0], F = T.isFetching, N = T.hasSuccessOnce, _ = T.fetchError, D = gs(A(), 1)[0], R = D.isFetching, U = D.hasSuccessOnce, B = D.fetchError, L = w(), V = L.favoriteItems, H = L.recentItems, J = V.length || H.length || F && !N || R && !U || _ || B, $ = P, G = Object(p.a)(l, "empty");
            return Object(r.useEffect)((function () {
                var e = N && U;
                Object(q.d)() && e && M()
            }), [N, U, M]), J && !$ ? u : a.a.createElement(c, {
                location: G,
                parentProviders: null,
                failureEventAttributes: null
            }, a.a.createElement(n, {
                imgAltText: x(vs.emptyImg),
                imgSrc: ps.a,
                imgHeight: 138,
                testId: G,
                text: C,
                useIntl: s.b
            }))
        }, js = Object(We.defineMessages)({
            starred: {
                id: "atlassian-navigation.projects.menu.favorite-content.starred",
                defaultMessage: "Starred"
            }
        }), Os = function (e) {
            var t = e.Avatar, n = void 0 === t ? Si.a : t, o = e.FavouriteButton, i = void 0 === o ? qn : o, c = e.HeadingItem, u = void 0 === c ? Jn.a : c, l = e.MenuItem, d = void 0 === l ? Ft : l, f = e.MenuItemViewAll, v = void 0 === f ? tr : f, g = e.testIdPrefix, b = e.useBaseUrl, h = void 0 === b ? m.h : b, j = e.useIntl, O = void 0 === j ? s.b : j, I = e.useItems, S = void 0 === I ? Fn : I, E = O().formatMessage, w = h(), k = S(), A = k.favoriteItems, x = k.changeFavourite, P = k.changedItems, M = Object(r.useMemo)((function () {
                return A.slice(0, y.c)
            }), [A]), C = Object(p.a)(g, "items-starred");
            return A.length > 0 ? a.a.createElement("span", {"data-testid": C}, a.a.createElement(u, {testId: Object(p.a)(C, "heading")}, E(js.starred)), M.map((function (e, t) {
                var r = e.url, o = e.id, s = e.favourite, c = e.metadata, u = P[e.id.toString()], l = !(!u || !u.pending) && u.pending;
                return a.a.createElement(d, {
                    analytics: {
                        actionSubjectId: "projectsNavigationMenuItem",
                        menuItemId: o,
                        menuItemType: "starred",
                        position: t,
                        starred: Boolean(s)
                    },
                    description: c,
                    iconBefore: a.a.createElement(n, {
                        appearance: "square",
                        size: "small",
                        borderColor: "transparent",
                        src: e.avatarUrl
                    }),
                    href: r,
                    key: o,
                    iconAfter: a.a.createElement(i, {
                        id: String(o),
                        isFavourite: Boolean(s),
                        isPending: l,
                        menuItemType: "starred",
                        onChangeFavourite: x,
                        type: En.i
                    }),
                    testId: Object(p.a)(C, "item-".concat(t))
                }, e.title)
            })), A.length >= y.c && a.a.createElement(v, {
                    analytics: {
                        actionSubjectId: "projectsNavigationMenuItem",
                        menuItemId: "viewAll",
                        position: y.c
                    }, href: "".concat(w, "/projects"), testId: Object(p.a)(C, "item-view-all")
                })) : null
        }, Is = Object(We.defineMessages)({
            createProject: {
                id: "atlassian-navigation.projects.menu.footer.create-project",
                defaultMessage: "Create project"
            }, viewAll: {id: "atlassian-navigation.projects.menu.footer.view-all", defaultMessage: "View all projects"}
        });

        function Ss(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Es(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Es(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Es(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var ws = function (e) {
            var t = e.MenuItem, n = void 0 === t ? Ft : t, r = e.testIdPrefix, o = e.useBaseUrl, i = void 0 === o ? m.h : o, c = e.useCreateProjectPermission, u = void 0 === c ? ba.a : c, l = e.useIntl, d = void 0 === l ? s.b : l, f = e.useIsAnonymous, v = void 0 === f ? m.k : f, g = e.useSwitchModals, b = void 0 === g ? ar.a : g, h = d().formatMessage, j = i(), O = v(), I = Ss(b(y.f.PROJECT_CREATE), 2)[1].on, S = Ss(u(), 1)[0].canCreateProject, E = Object(p.a)(r, "items");
            return a.a.createElement("span", {"data-testid": E}, a.a.createElement(n, {
                analytics: {
                    actionSubjectId: "projectsNavigationMenuItem",
                    menuItemId: "viewAll",
                    menuItemType: "action",
                    position: 0
                }, href: "".concat(j, "/projects"), testId: Object(p.a)(E, "item-view-all")
            }, h(Is.viewAll)), !O && S && a.a.createElement(n, {
                    analytics: {
                        actionSubjectId: "projectsNavigationMenuItem",
                        menuItemId: "create",
                        menuItemType: "action",
                        position: 1
                    }, onClick: I, testId: Object(p.a)(E, "item-create")
                }, h(Is.createProject)))
        };
        ws.displayName = "Footer";
        var ks = function (e) {
            var t = e.LoadStatusCommon, n = void 0 === t ? mr : t, r = e.shouldThrowError, o = void 0 !== r && r, s = e.useCreateProjectPermission, c = void 0 === s ? ba.a : s, u = e.useFavorite, l = void 0 === u ? i.f : u, f = e.useRecent, m = void 0 === f ? d.f : f;
            return (a.a.createElement(a.a.Fragment, null, a.a.createElement(n, {
                shouldThrowError: o,
                useProvider: c
            }), a.a.createElement(n, {shouldThrowError: o, useProvider: l}), a.a.createElement(n, {
                shouldThrowError: o,
                useProvider: m
            })))
        }, As = Object(We.defineMessages)({
            recent: {
                id: "atlassian-navigation.projects.menu.recent-content.recent",
                defaultMessage: "Recent"
            }
        }), xs = function (e) {
            var t = e.Avatar, n = void 0 === t ? Si.a : t, o = e.FavouriteButton, i = void 0 === o ? qn : o, c = e.HeadingItem, u = void 0 === c ? Jn.a : c, l = e.MenuItem, d = void 0 === l ? Ft : l, f = e.testIdPrefix, m = e.useIntl, v = void 0 === m ? s.b : m, g = e.useItems, b = void 0 === g ? Fn : g, h = v().formatMessage, j = b(), O = j.recentItems, I = j.favoriteItems, S = j.changeFavourite, E = j.changedItems, w = Object(r.useMemo)((function () {
                return O.slice(0, y.d)
            }), [O]), k = Object(p.a)(f, "items-recent");
            return O.length > 0 ? a.a.createElement("span", {"data-testid": k}, a.a.createElement(u, {testId: Object(p.a)(k, "heading")}, h(As.recent)), w.map((function (e, t) {
                var r = e.url, o = e.id, s = e.favourite, c = e.metadata, u = E[e.id.toString()], l = !(!u || !u.pending) && u.pending, f = Object(vr.a)(I), m = f.id, v = f.type;
                return a.a.createElement(d, {
                    analytics: {
                        actionSubjectId: "projectsNavigationMenuItem",
                        menuItemId: o,
                        menuItemType: "recent",
                        position: t,
                        starred: Boolean(s)
                    },
                    description: c,
                    iconBefore: a.a.createElement(n, {
                        appearance: "square",
                        size: "small",
                        borderColor: "transparent",
                        src: e.avatarUrl
                    }),
                    href: r,
                    key: o,
                    iconAfter: a.a.createElement(i, {
                        beforeEntityId: m,
                        beforeEntityType: v,
                        id: String(o),
                        isFavourite: Boolean(s),
                        isPending: l,
                        menuItemType: "recent",
                        onChangeFavourite: S,
                        type: En.i
                    }),
                    testId: Object(p.a)(k, "item-".concat(t))
                }, e.title)
            }))) : null
        };

        function Ps(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Ms(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ms(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Ms(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var Cs = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.c), Ts = function (e) {
            var t = e.AuthenticationErrorBoundary, n = void 0 === t ? Je : t, o = e.Empty, s = void 0 === o ? hs : o, c = e.Error, u = void 0 === c ? rt : c, l = e.ErrorBoundary, d = void 0 === l ? $e.a : l, f = e.FavoriteContent, v = void 0 === f ? Os : f, g = e.Footer, b = void 0 === g ? ws : g, h = e.Layout, j = void 0 === h ? ct : h, O = e.LoadStatus, I = void 0 === O ? ks : O, S = e.RecentContent, E = void 0 === S ? xs : S, w = e.Section, k = void 0 === w ? Ne.a : w, A = e.SkeletonContent, x = void 0 === A ? dt : A, P = e.SkeletonFooter, M = void 0 === P ? ft : P, C = e.SpotlightTarget, T = void 0 === C ? Lo.a : C, F = e.ViewExperienceSuccessTracker, N = void 0 === F ? Cs : F, _ = e.testIdPrefix, D = e.useBaseUrl, R = void 0 === D ? m.h : D, U = e.useCreateProjectPermission, B = void 0 === U ? ba.a : U, L = e.useExperienceFail, H = void 0 === L ? Ge.a : L, J = e.useFavorite, $ = void 0 === J ? i.f : J, G = R(), W = Ps($(), 2)[1].loadFavoriteProjects, z = Ps(B(), 2), Y = z[0], K = Y.hasFetchedOnce, Q = Y.isFetching, X = z[1].fetchCreateProjectPermission, Z = H({experience: y.j});
            Object(r.useEffect)((function () {
                return function () {
                    W(y.c)
                }
            }), [W]), Object(r.useEffect)((function () {
                K || Q || X(G)
            }), [G, K, Q, X]);
            var ee = Object(p.a)(_, "content"), te = Object(p.a)(_, "footer"), ne = Object(r.useCallback)((function () {
                return a.a.createElement(u, {testIdPrefix: ee})
            }), [ee]);
            return a.a.createElement(T, {name: y.n}, a.a.createElement(j, {isWide: !0}, a.a.createElement(k, {isScrollable: !0}, a.a.createElement(d, {
                id: y.e.PROJECTS,
                packageName: y.l,
                render: ne,
                withExperienceTracker: !0,
                extraEventData: {id: y.e.PROJECTS},
                onError: Object(q.d)() ? Z : V.a
            }, a.a.createElement(n, {render: ne}, a.a.createElement(s, {testIdPrefix: ee}, a.a.createElement(r.Suspense, {fallback: a.a.createElement(x, {testIdPrefix: ee})}, a.a.createElement(N, {
                location: ee,
                failureEventAttributes: null,
                parentProviders: null
            }, a.a.createElement(I, {shouldThrowError: !0}), a.a.createElement(v, {testIdPrefix: ee}), a.a.createElement(E, {testIdPrefix: ee}))))))), a.a.createElement(k, {hasSeparator: !0}, a.a.createElement(r.Suspense, {fallback: a.a.createElement(M, {testIdPrefix: te})}, a.a.createElement(N, {
                location: te,
                failureEventAttributes: null,
                parentProviders: null
            }, a.a.createElement(I, null), a.a.createElement(b, {testIdPrefix: te}))))))
        };
        Ts.displayName = "Menu";
        var Fs = Object(We.defineMessages)({
            projects: {
                id: "atlassian-navigation.projects.projects",
                defaultMessage: "Projects"
            }
        }), Ns = le.default.div(["> *{height:100%;}"]);

        function _s(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return Ds(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ds(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function Ds(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var Rs = function (e) {
            var t = e.Menu, n = void 0 === t ? Ts : t, o = e.Popup, c = void 0 === o ? Fe : o, u = e.Wrapper, l = void 0 === u ? Ns : u, f = e.useExperienceStart, m = void 0 === f ? B.b : f, p = e.useFavorite, v = void 0 === p ? i.f : p, g = e.useGlobalRefStoreActions, b = void 0 === g ? fs.b : g, h = e.useIntl, j = void 0 === h ? s.b : h, O = e.useRecent, I = void 0 === O ? d.f : O, S = j().formatMessage, E = _s(b(), 2)[1].register, w = _s(v(), 2), k = w[0].hasFetchedOnce, A = w[1].loadFavoriteProjects, x = _s(I(), 2)[1].loadRecentProjects, P = m({
                experience: y.j,
                experienceId: y.h.PROJECTS,
                analyticsSource: "atlassian-navigation"
            }), M = Object(r.useCallback)((function () {
                Object(q.d)() && P(), x(y.d), k || A(y.c)
            }), [k, A, x, P]), C = Object(r.useCallback)((function (e) {
                var t = e && e.firstChild, n = t && t.firstChild, r = n && n.firstChild;
                E("NAVIGATION_".concat(y.e.PROJECTS), r || n || t || e)
            }), [E]);
            return a.a.createElement(l, {innerRef: C}, a.a.createElement(c, {
                menuId: y.e.PROJECTS,
                navigationItemId: y.h.PROJECTS,
                Menu: n,
                onBeforeMenuOpen: M
            }, S(Fs.projects)))
        };
        Rs.displayName = "Projects";
        var Us = n("./node_modules/@atlassian/product-search-dialog/dist/esm/common/product-search-input/product-search-input-skeleton.js"), Bs = function (e) {
            var t = e.ProductSearchInputSkeleton, n = void 0 === t ? Us.a : t, r = e.useTheme, o = (void 0 === r ? S.a : r)();
            return a.a.createElement(n, {theme: o && o.mode && o.mode.search})
        };

        function Ls(e, t, n, r, a, o, i) {
            try {
                var s = e[o](i), c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, a)
        }

        Bs.displayName = "Skeleton";
        var Vs = Object(rn.asyncComponent)({
            resolve: function () {
                var e = function (e) {
                    return function () {
                        var t = this, n = arguments;
                        return new Promise((function (r, a) {
                            var o = e.apply(t, n);

                            function i(e) {
                                Ls(o, r, a, i, s, "next", e)
                            }

                            function s(e) {
                                Ls(o, r, a, i, s, "throw", e)
                            }

                            i(void 0)
                        }))
                    }
                }(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;)switch (e.prev = e.next) {
                            case 0:
                                return e.next = 3, n.e("async-atlassian-navigation-search").then(n.bind(null, "./src/packages/navigation-apps/atlassian-navigation/src/ui/search/main.js"));
                            case 3:
                                return e.abrupt("return", e.sent.Search);
                            case 4:
                                return e.abrupt("return", Bs);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), LoadingComponent: Bs
        }), Hs = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/components/Settings/index.js");

        function Js(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function $s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Js(Object(n), !0).forEach((function (t) {
                    Gs(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Js(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Gs(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Ws = Object(r.forwardRef)((function (e, t) {
            var n = $s($s({}, e), {}, {ref: t});
            return (a.a.createElement(Hs.a, n))
        })), qs = n("./src/packages/navigation-apps/global-settings-home/src/index.js"), zs = function (e) {
            var t = e.HeadingItem, n = void 0 === t ? Jn.a : t, r = e.MenuItem, o = void 0 === r ? Ft : r, i = e.Section, c = void 0 === i ? Ne.a : i, u = e.messages, l = void 0 === u ? qs.f : u, d = e.settingsDrawerItems, f = e.testIdPrefix, m = e.useIntl, v = (void 0 === m ? s.b : m)().formatMessage;
            return a.a.createElement(a.a.Fragment, null, d.map((function (e) {
                return a.a.createElement(c, {
                    key: e.id,
                    testId: Object(p.a)(f, e.id)
                }, a.a.createElement(n, {testId: Object(p.a)(f, e.id, "heading")}, v(l[e.id])), e.items && e.items.map((function (t, n) {
                        return null === t.href || void 0 === t.href || null === t.text || void 0 === t.text ? null : a.a.createElement(o, {
                            analytics: {
                                actionSubjectId: "settingsNavigationMenuItem",
                                menuItemId: t.id,
                                menuItemType: "site-admin" === e.id ? "adminSettings" : "jiraSettings",
                                position: n
                            },
                            key: t.id,
                            iconBefore: t.before ? a.a.createElement(t.before, null) : null,
                            iconAfter: t.after ? a.a.createElement(t.after, {isHover: !0}) : null,
                            href: t.href,
                            target: t.target,
                            testId: Object(p.a)(f, e.id, "item-".concat(t.id)),
                            description: l[t.id] ? v(l[t.id]) : void 0
                        }, t.text || "")
                    })))
            })))
        }, Ys = Object(We.defineMessages)({
            settings: {
                id: "atlassian-navigation.settings.menu.settings",
                defaultMessage: "Settings"
            }
        }), Ks = n("./node_modules/@atlaskit/icon--current/glyph/emoji/atlassian.js"), Qs = n.n(Ks), Xs = n("./node_modules/@atlaskit/icon--current/glyph/person-circle.js"), Zs = n.n(Xs), ec = Object(We.defineMessages)({
            accountSettings: {
                id: "atlassian-navigation.settings.menu.personal.account-settings",
                defaultMessage: "Atlassian account settings"
            },
            accountSettingsDescription: {
                id: "atlassian-navigation.settings.menu.personal.account-settings-description",
                defaultMessage: "Manage your language, time zone, and other profile information."
            },
            personalJiraSettings: {
                id: "atlassian-navigation.settings.menu.personal.personal-jira-settings",
                defaultMessage: "Personal Jira settings"
            },
            personalJiraSettingsDescription: {
                id: "atlassian-navigation.settings.menu.personal.personal-jira-settings-description",
                defaultMessage: "Manage your email notifications and other Jira settings."
            }
        }), tc = function (e) {
            var t = e.AtlassianIcon, n = void 0 === t ? Qs.a : t, r = e.HeadingItem, o = void 0 === r ? Jn.a : r, i = e.IconWrapper, c = void 0 === i ? qs.a : i, u = e.MenuItem, l = void 0 === u ? Ft : u, d = e.PersonCircleIcon, f = void 0 === d ? Zs.a : d, v = e.Section, g = void 0 === v ? Ne.a : v, b = e.ShortcutIcon, y = void 0 === b ? Ki.a : b, h = e.testIdPrefix, j = e.useAtlassianPersonalSettingsLink, O = void 0 === j ? vr.b : j, I = e.useBaseUrl, S = void 0 === I ? m.h : I, E = e.useIntl, w = void 0 === E ? s.b : E, k = O(), A = w().formatMessage, x = S(), P = Object(p.a)(h, "personal-settings");
            return a.a.createElement(g, {testId: P}, a.a.createElement(o, {testId: Object(p.a)(P, "heading")}, A(qs.f[qs.b.PERSONAL])), a.a.createElement(l, {
                analytics: {
                    actionSubjectId: "settingsNavigationMenuItem",
                    menuItemId: "account-settings",
                    menuItemType: "personalSettings",
                    position: 0
                },
                href: k,
                target: "_blank",
                iconBefore: a.a.createElement(c, null, a.a.createElement(n, {size: "small", primaryColor: "#FFFFFF"})),
                iconAfter: a.a.createElement(y, {size: "small", label: ""}),
                description: A(ec.accountSettingsDescription),
                testId: Object(p.a)(P, "item-account-settings")
            }, A(ec.accountSettings)), a.a.createElement(l, {
                analytics: {
                    actionSubjectId: "settingsNavigationMenuItem",
                    menuItemId: "personal-jira-settings",
                    menuItemType: "personalSettings",
                    position: 1
                },
                iconBefore: a.a.createElement(c, null, a.a.createElement(f, {
                    size: "small",
                    primaryColor: "#FFFFFF",
                    label: ""
                })),
                href: "".concat(x, "/secure/ViewPersonalSettings.jspa"),
                description: A(ec.personalJiraSettingsDescription),
                testId: Object(p.a)(P, "item-personal-jira-settings")
            }, A(ec.personalJiraSettings)))
        };
        tc.displayName = "Personal";
        var nc = le.default.h3(["padding:", "px ", "px ", "px ", "px;"], 3 * he.f, 3 * he.f, he.f, 2.5 * he.f), rc = Object(We.defineMessages)({
            noAdminPermissionMessage: {
                id: "atlassian-navigation.settings.menu.warning.no-admin-permission-message",
                defaultMessage: "You do not have access to Jira settings or Atlassian admin, {contact} to grant you access."
            },
            noAdminPermissionMessageContact: {
                id: "atlassian-navigation.settings.menu.warning.no-admin-permission-message-contact",
                defaultMessage: "contact your Jira admin"
            }
        }), ac = le.default.div(["padding:", "px 20px ", "px 20px;"], he.f, 20 - he.f), oc = le.default.p(["max-width:", "px;background-color:", ";border-radius:", ";padding:", "px;"], 50 * he.f, Nt.colors.Y50, he.a, 2 * he.f), ic = function (e) {
            var t = e.children;
            return (a.a.createElement(ac, null, a.a.createElement(oc, null, t)))
        };

        function sc() {
            return (sc = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        ic.displayName = "Wrapper";
        var cc = function (e) {
            var t = e.FormattedMessage, n = void 0 === t ? We.FormattedMessage : t, r = e.Link, o = void 0 === r ? Y.a : r, i = e.Section, c = void 0 === i ? Ne.a : i, u = e.Wrapper, l = void 0 === u ? ic : u, d = e.testIdPrefix, f = e.useBaseUrl, v = void 0 === f ? m.h : f, g = e.useIntl, b = (void 0 === g ? s.b : g)().formatMessage, y = v(), h = Object(p.a)(d, "warning");
            return a.a.createElement(c, {testId: h}, a.a.createElement(l, null, a.a.createElement(n, sc({}, rc.noAdminPermissionMessage, {values: {contact: a.a.createElement(o, {href: "".concat(y, "/secure/ContactAdministrators!default.jspa")}, b(rc.noAdminPermissionMessageContact))}}))))
        };
        cc.displayName = "Warning";
        var uc = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.c), lc = function (e) {
            var t = e.Home, n = void 0 === t ? zs : t, o = e.Layout, i = void 0 === o ? ct : o, c = e.Personal, u = void 0 === c ? tc : c, l = e.Section, d = void 0 === l ? Ne.a : l, f = e.SettingsTitle, v = void 0 === f ? nc : f, g = e.ViewExperienceSuccessTracker, h = void 0 === g ? uc : g, j = e.Warning, O = void 0 === j ? cc : j, I = e.getNavV3GlobalSettingsItems, S = void 0 === I ? qs.d : I, E = e.testIdPrefix, w = e.useApplicationPermissions, k = void 0 === w ? m.f : w, A = e.useExperienceSuccess, x = void 0 === A ? b.b : A, P = e.useIntl, M = void 0 === P ? s.b : P, C = e.useTenantContext, T = void 0 === C ? m.q : C, F = M().formatMessage, N = T(), _ = N.baseUrl, D = N.isAdmin, R = N.isSiteAdmin, U = function (e) {
                var t = qs.b.SITE_ADMIN, n = qs.b.SYSTEM_ADMIN;
                return e.filter((function (e) {
                    return e.id === t || e.id === n
                }))
            }(S(_, F, k().applicationPermissions, {isAdmin: D, isSiteAdmin: R})), B = x({experience: y.j});
            Object(r.useEffect)((function () {
                Object(q.d)() && B()
            }), [B]);
            var L = Object(p.a)(E, "menu-popup"), V = Object(p.a)(L, "header");
            return a.a.createElement("span", {"data-testid": L}, a.a.createElement(i, {isWide: !0}, a.a.createElement(d, null, a.a.createElement(v, {"data-testid": V}, F(Ys.settings)), a.a.createElement(h, {
                location: L,
                parentProviders: null,
                failureEventAttributes: null
            }, U.length > 0 && a.a.createElement(n, {
                    settingsDrawerItems: U,
                    testIdPrefix: L
                }), a.a.createElement(u, {testIdPrefix: L}), 0 === U.length && a.a.createElement(O, {testIdPrefix: L})))))
        };

        function dc() {
            return (dc = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
        }

        function fc(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return mc(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mc(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function mc(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        lc.displayName = "Menu";
        var pc = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.c), vc = Object($.a)(q.d, (function (e) {
            return e.children
        }), g.e), gc = function (e) {
            var t = e.Icon, n = void 0 === t ? Ws : t, o = e.Menu, i = void 0 === o ? lc : o, c = e.Popup, u = void 0 === c ? J.a : c, l = e.ViewExperienceSuccessTracker, d = void 0 === l ? pc : l, f = e.ViewExperienceTrackingProvider, v = void 0 === f ? vc : f, g = e.useExperienceStart, b = void 0 === g ? B.b : g, h = e.useIntl, j = void 0 === h ? s.b : h, O = e.useIsAnonymous, I = void 0 === O ? m.k : O, S = e.useNavigationItemAnalytics, E = void 0 === S ? Z.a : S, w = e.useTopMenus, k = fc((void 0 === w ? W.a : w)(y.e.SETTINGS), 2), A = k[0], x = k[1], P = x.toggle, M = x.off, C = E({navigationItemId: y.h.SETTINGS}), T = b({
                experience: y.j,
                experienceId: y.h.SETTINGS,
                analyticsSource: "atlassian-navigation"
            }), F = Object(r.useCallback)((function () {
                Object(q.d)() && T(), P(), C()
            }), [T, P, C]), N = j().formatMessage, _ = I(), D = Object(p.b)("secondary-actions", "settings"), R = Object(r.useCallback)((function () {
                return a.a.createElement(v, {
                    application: null,
                    analyticsSource: "atlassian-navigation",
                    experience: "viewAtlassianNavigationMenu",
                    experienceId: y.h.SETTINGS,
                    edition: null
                }, a.a.createElement(d, {
                    location: Object(p.a)(D, "menu-popup"),
                    parentProviders: null,
                    failureEventAttributes: null
                }, a.a.createElement(i, {testIdPrefix: D})))
            }), [D]), U = Object(r.useCallback)((function (e) {
                return a.a.createElement("span", {"data-testid": Object(p.a)(D, "menu-trigger")}, a.a.createElement(n, dc({}, e, {
                    onClick: F,
                    tooltip: N(Ys.settings),
                    isSelected: A
                })))
            }), [N, A, F, D]);
            return _ ? null : a.a.createElement(u, {
                isOpen: A,
                content: R,
                onClose: M,
                placement: "bottom-end",
                trigger: U
            })
        };
        gc.displayName = "Settings";
        var bc = n("./node_modules/@atlaskit/atlassian-navigation/dist/esm/components/SignIn/index.js"), yc = Object(We.defineMessages)({
            signIn: {
                id: "atlassian-navigation.sign-in.sign-in",
                defaultMessage: "Sign in"
            }
        }), hc = n("./src/packages/common-legacy-do-not-add-anything-new/src/util/location.js"), jc = function () {
            var e = (Object(hc.a)() || {}).href, t = void 0 === e ? null : e;
            if (t && !t.includes("login.jsp")) {
                var n = encodeURIComponent(t);
                return "os_destination=".concat(n)
            }
            return ""
        }, Oc = function (e) {
            var t = e.AkSignIn, n = void 0 === t ? bc.a : t, r = e.Link, o = void 0 === r ? Y.a : r, i = e.useBaseUrl, c = void 0 === i ? m.h : i, u = e.useDestinationParam, l = void 0 === u ? jc : u, d = e.useIntl, f = void 0 === d ? s.b : d, p = e.useNavigationItemAnalytics, v = void 0 === p ? Z.a : p, g = e.useIsAnonymous, b = void 0 === g ? m.k : g, h = c(), j = l(), O = b(), I = f().formatMessage, S = v({navigationItemId: y.h.SIGN_IN});
            return O ? a.a.createElement(o, {
                href: "".concat(h, "/login.jsp?").concat(j),
                onClick: S
            }, a.a.createElement(n, {tooltip: I(yc.signIn)})) : null
        };
        Oc.displayName = "SignIn";
        var Ic = Object(We.defineMessages)({
            title: {
                id: "atlassian-navigation.your-work.title",
                defaultMessage: "Your work"
            }
        }), Sc = function (e) {
            var t = e.MenuTrigger, n = void 0 === t ? ke : t, r = e.useBaseUrl, o = void 0 === r ? m.h : r, i = e.useIntl, c = void 0 === i ? s.b : i, u = e.useIsAnonymous, l = void 0 === u ? m.k : u, d = o(), f = l(), p = c().formatMessage;
            return f ? null : a.a.createElement(n, {
                href: "".concat(d, "/jira/your-work"),
                menuId: y.e.HOME,
                navigationItemId: y.h.HOME
            }, p(Ic.title))
        };

        function Ec(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return wc(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wc(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function wc(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var kc = Object(p.b)(), Ac = function (e) {
            var t = e.Addons, n = void 0 === t ? nn : t, p = e.AkAtlassianNavigation, v = void 0 === p ? o.a : p, g = e.AppSwitcher, b = void 0 === g ? ln : g, y = e.ContextualAnalyticsData, h = void 0 === y ? l.b : y, j = e.Create, O = void 0 === j ? On : j, E = e.Dashboards, w = void 0 === E ? wr : E, k = e.FavoritesContainer, A = void 0 === k ? i.b : k, x = e.Filters, P = void 0 === x ? Kr : x, M = e.Help, C = void 0 === M ? ga : M, T = e.InitialDataLoader, F = void 0 === T ? ja : T, N = e.Integrations, _ = void 0 === N ? Ha : N, D = e.NavigationOnboarding, R = void 0 === D ? so : D, U = e.NavigationRfuReporter, B = void 0 === U ? f.b : U, L = e.Notifications, V = void 0 === L ? ro : L, H = e.People, J = void 0 === H ? uo : H, $ = e.Plans, G = void 0 === $ ? ai : $, W = e.ProductHome, q = void 0 === W ? Oi : W, z = e.Profile, Y = void 0 === z ? ds : z, K = e.Projects, Q = void 0 === K ? Rs : K, X = e.RecentsContainer, Z = void 0 === X ? d.b : X, ee = e.Search, te = void 0 === ee ? Vs : ee, ne = e.Settings, re = void 0 === ne ? gc : ne, ae = e.SignIn, oe = void 0 === ae ? Oc : ae, ie = e.useBaseUrl, se = void 0 === ie ? m.h : ie, ce = e.useIntl, ue = void 0 === ce ? s.b : ce, le = e.useNavV3RolloutServiceAnalyticsData, de = void 0 === le ? c.e : le, fe = e.useTheme, me = void 0 === fe ? S.a : fe, pe = e.YourWork, ve = void 0 === pe ? Sc : pe, ge = e.useNavV3RolloutService, be = void 0 === ge ? c.d : ge, ye = e.useNavigationPlansVisibility, he = void 0 === ye ? u.b : ye, je = e.NavigationSuccessTracker, Oe = void 0 === je ? I : je, Ie = me(), Se = ue().formatMessage, Ee = se(), we = de(), ke = Ec(be(), 1)[0], Ae = Ec(he(), 1)[0], xe = ke.isOnboardingEnabled ? R : r.Fragment;
            return a.a.createElement(Oe, null, a.a.createElement(h, {attributes: we}, a.a.createElement(Z, {
                isGlobal: !0,
                baseUrl: Ee
            }, a.a.createElement(A, {
                isGlobal: !0,
                baseUrl: Ee
            }, a.a.createElement(xe, null, a.a.createElement(v, {
                primaryItems: [a.a.createElement(ve, null), a.a.createElement(Q, null), a.a.createElement(P, null), a.a.createElement(w, null), a.a.createElement(J, null), Ae && a.a.createElement(G, null), a.a.createElement(n, null)],
                label: Se(Ja.topNav),
                moreLabel: Se(Ja.more),
                renderAppSwitcher: b,
                renderCreate: O,
                renderHelp: C,
                renderNotifications: V,
                renderProductHome: q,
                renderProfile: Y,
                renderSearch: te,
                renderSettings: re,
                renderSignIn: oe,
                theme: Ie,
                testId: kc
            }), a.a.createElement(a.a.Fragment, null, a.a.createElement(F, null), a.a.createElement(_, null), a.a.createElement(B, {source: f.o})))))))
        };
        Ac.displayName = "AtlassianNavigation"
    },
    "./src/packages/navigation-apps/atlassian-navigation/src/ui/addons/menu/content/empty/assets/apps-empty.svg": function (e, t, n) {
        e.exports = n.p + "assets/apps-empty.8f786b583b8c2a148c8569bf0c175352.8.svg"
    },
    "./src/packages/navigation-apps/atlassian-navigation/src/ui/dashboards/menu/empty/assets/dashboards-empty.svg": function (e, t, n) {
        e.exports = n.p + "assets/dashboards-empty.2b263070a45bd9d555f7b9c92e2aa2ad.8.svg"
    },
    "./src/packages/navigation-apps/atlassian-navigation/src/ui/filters/menu/empty/assets/filter-empty.svg": function (e, t, n) {
        e.exports = n.p + "assets/filter-empty.04ba859f449f30e5d2be12173d5988e5.8.svg"
    },
    "./src/packages/navigation-apps/atlassian-navigation/src/ui/plans/menu/content/empty/assets/recent-plans-empty.svg": function (e, t, n) {
        e.exports = n.p + "assets/recent-plans-empty.5530a6abff38c06be19bcbed4548497c.8.svg"
    },
    "./src/packages/navigation-apps/atlassian-navigation/src/ui/projects/menu/empty/assets/project-empty.svg": function (e, t, n) {
        e.exports = n.p + "assets/project-empty.6a5845710cd0a65e471c2984376268f2.8.svg"
    },
    "./src/packages/navigation-apps/get-jira-mobile-modal/async.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return a
        }));
        var r = n("./node_modules/react-async-component/commonjs/index.js"), a = Object(r.asyncComponent)({
            resolve: function () {
                return n.e("async-get-jira-mobile-modal").then(n.bind(null, "./src/packages/navigation-apps/get-jira-mobile-modal/src/ui/main.js"))
            }
        })
    },
    "./src/packages/navigation-apps/global-settings-home/src/index.js": function (e, t, n) {
        "use strict";
        n.d(t, "f", (function () {
            return B
        })), n.d(t, "b", (function () {
            return k
        })), n.d(t, "a", (function () {
            return J
        })), n.d(t, "e", (function () {
            return pe
        })), n.d(t, "c", (function () {
            return ve
        })), n.d(t, "d", (function () {
            return ge
        }));
        var r, a = n("./node_modules/react/index.js"), o = n.n(a), i = n("./node_modules/@atlaskit/icon--current/glyph/activity.js"), s = n.n(i), c = n("./node_modules/@atlaskit/icon--current/glyph/addon.js"), u = n.n(c), l = n("./node_modules/@atlaskit/icon--current/glyph/billing.js"), d = n.n(l), f = n("./node_modules/@atlaskit/icon--current/glyph/discover-filled.js"), m = n.n(f), p = n("./node_modules/@atlaskit/icon--current/glyph/folder.js"), v = n.n(p), g = n("./node_modules/@atlaskit/icon--current/glyph/issues.js"), b = n.n(g), y = n("./node_modules/@atlaskit/icon--current/glyph/people-group.js"), h = n.n(y), j = n("./node_modules/@atlaskit/icon--current/glyph/screen.js"), O = n.n(j), I = n("./node_modules/@atlaskit/icon--current/glyph/shortcut.js"), S = n.n(I), E = n("./src/packages/navigation-next/src/common/constants.js"), w = n("./src/packages/navigation-next/src/feature-flags.js"), k = {
            SETTINGS_TITLE: "settings-title",
            SITE_ADMIN: "site-admin",
            SYSTEM_ADMIN: "system-admin",
            TRUSTED_USER: "trusted-user",
            PERSONAL: "personal-settings"
        }, A = "admin-system-menu", x = "admin-applications-menu", P = "admin-project-menu", M = "admin-issues-menu", C = "admin-plugins-menu", T = "admin-manage-project-menu", F = "user-management-section", N = "admin-billing-section", _ = "trusted-admin-user-management-section", D = "discover-applications-section", R = n("./node_modules/react-intl/lib/index.es.js");

        function U(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var B = Object(R.defineMessages)((U(r = {
            settings: {
                id: "navigation-next.navigation-views.root.common.settings",
                defaultMessage: "Jira settings"
            },
            system: {id: "navigation-next.navigation-views.root.global-settings.home.system", defaultMessage: "System"},
            applications: {
                id: "navigation-next.navigation-views.root.global-settings.home.applications",
                defaultMessage: "Products"
            },
            projects: {
                id: "navigation-next.navigation-views.root.global-settings.home.projects",
                defaultMessage: "Projects"
            },
            issues: {id: "navigation-next.navigation-views.root.global-settings.home.issues", defaultMessage: "Issues"},
            addons: {id: "navigation-next.navigation-views.root.global-settings.home.addons", defaultMessage: "Apps"},
            recommendations: {
                id: "navigation-next.navigation-views.root.global-settings.home.recommendations",
                defaultMessage: "Recommendations"
            },
            userManagement: {
                id: "navigation-next.navigation-views.root.global-settings.home.user-management",
                defaultMessage: "User management"
            },
            billing: {
                id: "navigation-next.navigation-views.root.global-settings.home.billing",
                defaultMessage: "Billing"
            },
            discoverApplications: {
                id: "navigation-next.navigation-views.root.global-settings.home.discover-applications",
                defaultMessage: "Discover applications"
            }
        }, k.SITE_ADMIN, {
            id: "navigation-apps.settings-drawer.section.site-admin",
            defaultMessage: "Atlassian admin"
        }), U(r, k.SYSTEM_ADMIN, {
            id: "navigation-apps.settings-drawer.section.system-admin",
            defaultMessage: "Jira settings"
        }), U(r, k.TRUSTED_USER, {
            id: "navigation-apps.settings-drawer.section.trusted-user",
            defaultMessage: "Atlassian admin"
        }), U(r, k.PERSONAL, {
            id: "navigation-apps.settings-drawer.section.personal-settings",
            defaultMessage: "Personal settings"
        }), U(r, A, {
            id: "navigation-apps.settings-drawer.section.item.admin-system-menu",
            defaultMessage: "Manage your general configuration, global permissions, look and feel and more."
        }), U(r, x, {
            id: "navigation-apps.settings-drawer.section.item.admin-applications-menu",
            defaultMessage: "Manage your Jira products' settings and integrations."
        }), U(r, P, {
            id: "navigation-apps.settings-drawer.section.item.admin-project-menu",
            defaultMessage: "Manage your project categories."
        }), U(r, T, {
            id: "navigation-apps.settings-drawer.section.item.admin-manage-project-menu",
            defaultMessage: "Manage your project settings, categories, and more."
        }), U(r, M, {
            id: "navigation-apps.settings-drawer.section.item.admin-issues-menu",
            defaultMessage: "Configure your issue types, workflows, screens, custom fields and more."
        }), U(r, C, {
            id: "navigation-apps.settings-drawer.section.item.admin-plugins-menu",
            defaultMessage: "Add and manage Jira Marketplace apps."
        }), U(r, F, {
            id: "navigation-apps.settings-drawer.section.item.user-management-section",
            defaultMessage: "Add users, groups, and manage access requests."
        }), U(r, N, {
            id: "navigation-apps.settings-drawer.section.item.admin-billing-section",
            defaultMessage: "Update your billing details, manage your subscriptions and more."
        }), U(r, _, {
            id: "navigation-apps.settings-drawer.section.item.trusted-admin-user-management-section",
            defaultMessage: "Invite users to your site."
        }), U(r, D, {
            id: "navigation-apps.settings-drawer.section.item.discover-applications-section",
            defaultMessage: "Try more Atlassian products."
        }), r)), L = n("./node_modules/styled-components/dist/styled-components.browser.es.js"), V = n("./node_modules/@atlaskit/theme/index.js"), H = n("./src/packages/common-legacy-do-not-add-anything-new/src/styles/index.js"), J = L.default.div(["display:inline-block;background:", ";height:", "px;width:", "px;border-radius:3px;padding:3px;box-sizing:border-box;text-align:center;"], (function (e) {
            return e.dark ? V.colors.N800 : V.colors.B200
        }), 3 * H.f, 3 * H.f), $ = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return "".concat(e, "/admin/users?referrerName=JIRA&referrerUrl=").concat(encodeURIComponent("".concat(e, "/secure/Dashboard.jspa")))
        }, G = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return "".concat(e, "/admin/billing/overview?referrerName=JIRA&referrerUrl=").concat(encodeURIComponent("".concat(e, "/secure/Dashboard.jspa")))
        }, W = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return "".concat(e, "/trusted-admin/users/invite")
        }, q = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return "".concat(e, "/trusted-admin/billing/addapplication")
        }, z = function (e) {
            return {id: k.SETTINGS_TITLE, type: E.a.SECTION_HEADING, text: e(B.settings)}
        }, Y = function (e, t) {
            return t.hasSoftwareAccess ? "".concat(e, "/secure/SoftwareConfig.jspa?decorator=admin") : t.hasServiceDeskAccess ? "".concat(e, "/secure/admin/SDConfiguration.jspa") : "".concat(e, "/plugins/servlet/applinks/listApplicationLinks")
        }, K = function () {
            return o.a.createElement(O.a, null)
        };
        K.displayName = "renderScreenIcon";
        var Q = function () {
            return o.a.createElement(s.a, null)
        };
        Q.displayName = "renderActivityIcon";
        var X = function () {
            return o.a.createElement(v.a, null)
        };
        X.displayName = "renderFolderIcon";
        var Z = function () {
            return o.a.createElement(b.a, null)
        };
        Z.displayName = "renderIssuesIcon";
        var ee = function () {
            return o.a.createElement(u.a, null)
        };
        ee.displayName = "renderAddonIcon";
        var te = function () {
            return o.a.createElement(h.a, null)
        };
        te.displayName = "renderPeopleGroupIcon";
        var ne = function () {
            return o.a.createElement(d.a, null)
        };
        ne.displayName = "renderBillingIcon";
        var re = function () {
            return o.a.createElement(m.a, null)
        };
        re.displayName = "renderDiscoverFilledIcon";
        var ae = function () {
            return o.a.createElement(J, null, o.a.createElement(O.a, {
                label: "",
                size: "small",
                primaryColor: "#FFFFFF"
            }))
        };
        ae.displayName = "renderNav3ScreenIcon";
        var oe = function () {
            return o.a.createElement(J, null, o.a.createElement(s.a, {
                label: "",
                size: "small",
                primaryColor: "#FFFFFF"
            }))
        };
        oe.displayName = "renderNav3ActivityIcon";
        var ie = function () {
            return o.a.createElement(J, null, o.a.createElement(v.a, {
                label: "",
                size: "small",
                primaryColor: "#FFFFFF"
            }))
        };
        ie.displayName = "renderNav3FolderIcon";
        var se = function () {
            return o.a.createElement(J, null, o.a.createElement(b.a, {
                label: "",
                size: "small",
                primaryColor: "#FFFFFF"
            }))
        };
        se.displayName = "renderNav3IssuesIcon";
        var ce = function () {
            return o.a.createElement(J, null, o.a.createElement(u.a, {
                label: "",
                size: "small",
                primaryColor: "#FFFFFF"
            }))
        };
        ce.displayName = "renderNav3AddonIcon";
        var ue = function () {
            return o.a.createElement(J, {dark: !0}, o.a.createElement(h.a, {
                label: "",
                size: "small",
                primaryColor: "#FFFFFF"
            }))
        };
        ue.displayName = "renderNav3PeopleGroupIcon";
        var le = function () {
            return o.a.createElement(J, {dark: !0}, o.a.createElement(d.a, {
                label: "",
                size: "small",
                primaryColor: "#FFFFFF"
            }))
        };
        le.displayName = "renderNav3BillingIcon";
        var de = function () {
            return o.a.createElement(J, null, o.a.createElement(m.a, {
                label: "",
                size: "small",
                primaryColor: "#FFFFFF"
            }))
        };
        de.displayName = "renderNav3DiscoverFilledIcon";
        var fe = function (e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return {
                id: k.SYSTEM_ADMIN,
                type: "Group",
                hasSeparator: !0,
                items: [{
                    goTo: "root/global-settings/system",
                    id: A,
                    legacyId: "admin_system_menu",
                    href: "".concat(e, "/secure/admin/ViewApplicationProperties.jspa"),
                    text: t(B.system),
                    type: "Item",
                    before: r ? ae : K
                }, {
                    goTo: "root/global-settings/applications",
                    id: x,
                    legacyId: "admin_applications_menu",
                    href: Y(e, n),
                    text: t(B.applications),
                    type: "Item",
                    before: r ? oe : Q
                }, {
                    goTo: "root/global-settings/projects",
                    id: Object(w.I)() ? T : P,
                    legacyId: "admin_project_menu",
                    href: Object(w.I)() ? "".concat(e, "/secure/project/ViewProjects.jspa") : "".concat(e, "/secure/admin/projectcategories/ViewProjectCategories!default.jspa"),
                    text: t(B.projects),
                    type: "Item",
                    before: r ? ie : X
                }, {
                    goTo: "root/global-settings/issues",
                    id: M,
                    legacyId: "admin_issues_menu",
                    href: "".concat(e, "/secure/admin/ViewIssueTypes.jspa"),
                    text: t(B.issues),
                    type: "Item",
                    before: r ? se : Z
                }, {
                    goTo: "root/global-settings/addons",
                    id: C,
                    legacyId: "admin_plugins_menu",
                    href: Object(w.j)() ? "".concat(e, "/jira/marketplace") : "".concat(e, "/plugins/servlet/upm/marketplace?source=side_nav_find_new_addons"),
                    text: t(B.addons),
                    type: "Item",
                    before: r ? ce : ee
                }]
            }
        }, me = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return {
                id: k.SITE_ADMIN,
                type: "Group",
                hasSeparator: !1,
                items: [{
                    id: F,
                    legacyId: "user_management_section",
                    href: $(e),
                    text: t(B.userManagement),
                    type: "Item",
                    before: n ? ue : te,
                    after: function () {
                        return o.a.createElement(S.a, {size: "small"})
                    },
                    target: "_blank"
                }, {
                    id: N,
                    legacyId: "admin_billing_section",
                    href: G(e),
                    text: t(B.billing),
                    type: "Item",
                    before: n ? le : ne,
                    after: function () {
                        return o.a.createElement(S.a, {size: "small"})
                    },
                    target: "_blank"
                }]
            }
        }, pe = function (e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a = [];
            return n.canAddProducts && a.push({
                id: _,
                href: W(e),
                text: t(B.userManagement),
                type: "Item",
                before: r ? ue : te,
                after: function () {
                    return o.a.createElement(S.a, {size: "small"})
                },
                target: "_blank"
            }), n.canInviteUsers && a.push({
                id: D,
                href: q(e),
                text: t(B.discoverApplications),
                type: "Item",
                before: r ? de : re,
                after: function () {
                    return o.a.createElement(S.a, {size: "small"})
                },
                target: "_blank"
            }), a.length ? {id: k.TRUSTED_USER, type: "Group", hasSeparator: !1, items: a} : void 0
        }, ve = function (e, t, n, r) {
            var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = [z(t)];
            if (r.isAdmin && o.push(fe(e, t, n, a)), r.isSiteAdmin) {
                var i = me(e, t, a);
                a ? o.unshift(i) : o.push(i)
            }
            return o
        }, ge = function (e, t, n, r) {
            return ve(e, t, n, r, !0)
        }
    },
    "./src/packages/platform/controllers/switch-modals/src/index.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return o
        }));
        var r = n("./src/packages/platform/controllers/switch/src/index.js"), a = Object(r.a)("jira-switch-modals"), o = (a.SwitchContainer, a.useSwitch)
    },
    "./src/packages/platform/controllers/switch/src/index.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return s
        }));
        var r = n("./node_modules/react/index.js"), a = n("./node_modules/react-sweet-state/lib/esm/index.js");

        function o(e, t) {
            return function (e) {
                    if (Array.isArray(e))return e
                }(e) || function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))return;
                    var n = [], r = !0, a = !1, o = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (a)throw o
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e)return;
                    if ("string" == typeof e)return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }

        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
            return r
        }

        var s = function (e) {
            var t = {
                on: function (e) {
                    return function (t) {
                        return (0, t.setState)({active: e})
                    }
                }, off: function (e) {
                    return function (t) {
                        var n = t.setState;
                        (0, t.getState)().active !== e && void 0 !== e || n({active: void 0})
                    }
                }, toggle: function (e) {
                    return function (n) {
                        var r = n.getState, a = n.dispatch;
                        r().active === e ? a(t.off(e)) : a(t.on(e))
                    }
                }
            }, n = {active: void 0}, i = Object(a.c)({
                name: e,
                initialState: n,
                actions: t
            }), s = Object(a.a)(i), c = Object(a.b)(i, {
                selector: function (e, t) {
                    return e.active === t
                }
            });
            return {
                SwitchContainer: s, useSwitch: function (e) {
                    var t = o(c(e), 2), n = t[0], a = t[1], i = a.on, s = a.off, u = a.toggle;
                    return [n, {
                        on: Object(r.useCallback)((function () {
                            return i(e)
                        }), [i, e]), off: Object(r.useCallback)((function () {
                            return s(e)
                        }), [e, s]), toggle: Object(r.useCallback)((function () {
                            return u(e)
                        }), [u, e])
                    }]
                }
            }
        }
    },
    "./src/packages/platform/legacy/create-issue-legacy/src/index.js": function (e, t, n) {
        "use strict";
        var r = n("./src/packages/common-legacy-do-not-add-anything-new/src/bridge/index.js");
        n("./src/packages/common-legacy-do-not-add-anything-new/src/util/deferred-globals.js");
        t.a = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.timeout, n = e.tentatives;
            return Object(r.a)({name: "quick-edit/init/create-dialogs", timeout: t, tentatives: n}).then((function (e) {
                return e.showCreateDialog({})
            }))
        }
    },
    "./src/packages/platform/observability/is-batch-js-loaded/src/index.js": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return o
        })), n.d(t, "a", (function () {
            return i
        }));
        var r = n("./node_modules/react-sweet-state/lib/esm/index.js"), a = Object(r.c)({
            initialState: {isLoaded: !1},
            actions: {
                setLoaded: function () {
                    return function (e) {
                        var t = e.setState;
                        (0, e.getState)().isLoaded || t({isLoaded: !0})
                    }
                }
            },
            name: "is-batch-js-loaded"
        }), o = Object(r.b)(a), i = Object(r.d)(a)
    },
    "./src/packages/platform/services/favorites-store/src/index.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return s
        })), n.d(t, "c", (function () {
            return y
        })), n.d(t, "d", (function () {
            return h
        })), n.d(t, "f", (function () {
            return j
        })), n.d(t, "e", (function () {
            return O
        })), n.d(t, "b", (function () {
            return I
        }));
        var r, a = n("./node_modules/react-sweet-state/lib/esm/index.js"), o = n("./src/packages/platform/services/nav-item-service/src/index.js"), i = n("./src/packages/platform/services/nav-item-service/src/constants.js"), s = 15;

        function c(e, t, n, r, a, o, i) {
            try {
                var s = e[o](i), c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, a)
        }

        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function (t) {
                    d(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var f = {
            items: null,
            isFetching: !1,
            fetchError: null,
            promise: null,
            hasFetchedOnce: !1,
            hasSuccessOnce: !1
        }, m = (d(r = {}, i.b, l({}, f)), d(r, i.c, l({}, f)), d(r, i.e, l({}, f)), r), p = function (e) {
            return e.reduce((function (e, t) {
                return "favourite-filters" === t.id && (e[i.c] = t.items), "favourite-dashboards" === t.id && (e[i.b] = t.items), "favourite-projects" === t.id && (e[i.e] = t.items), e
            }), {})
        }, v = function (e, t) {
            return function () {
                var n = function (e) {
                    return function () {
                        var t = this, n = arguments;
                        return new Promise((function (r, a) {
                            var o = e.apply(t, n);

                            function i(e) {
                                c(o, r, a, i, s, "next", e)
                            }

                            function s(e) {
                                c(o, r, a, i, s, "throw", e)
                            }

                            i(void 0)
                        }))
                    }
                }(regeneratorRuntime.mark((function n(r, a) {
                    var i, s, c, u, d, f, m, v, g, b;
                    return regeneratorRuntime.wrap((function (n) {
                        for (; ;)switch (n.prev = n.next) {
                            case 0:
                                if (i = r.setState, s = r.getState, c = a.baseUrl, !(u = t.filter((function (e) {
                                        return !s()[e].isFetching
                                    }))).length) {
                                    n.next = 20;
                                    break
                                }
                                return n.prev = 4, d = Object(o.b)(c, {
                                    count: e,
                                    types: u
                                }), f = u.reduce((function (e, t) {
                                    return e[t] = l(l({}, s()[t]), {}, {
                                        isFetching: !0,
                                        fetchError: null,
                                        promise: d
                                    }), e
                                }), {}), i(f), n.next = 10, d;
                            case 10:
                                m = n.sent, v = p(m), g = u.reduce((function (e, t) {
                                    return e[t] = {
                                        items: v[t],
                                        isFetching: !1,
                                        promise: null,
                                        fetchError: null,
                                        hasFetchedOnce: !0,
                                        hasSuccessOnce: !0
                                    }, e
                                }), {}), i(g), n.next = 20;
                                break;
                            case 16:
                                n.prev = 16, n.t0 = n.catch(4), b = u.reduce((function (e, t) {
                                    return e[t] = l(l({}, s()[t]), {}, {
                                        isFetching: !1,
                                        promise: null,
                                        fetchError: n.t0,
                                        hasFetchedOnce: !0
                                    }), e
                                }), {}), i(b);
                            case 20:
                            case"end":
                                return n.stop()
                        }
                    }), n, null, [[4, 16]])
                })));
                return function (e, t) {
                    return n.apply(this, arguments)
                }
            }()
        }, g = {
            loadFavoriteAll: function (e) {
                return v(e, [i.b, i.e, i.c])
            }, loadFavoriteProjects: function (e) {
                return v(e, [i.e])
            }, loadFavoriteDashboards: function (e) {
                return v(e, [i.b])
            }, loadFavoriteFilters: function (e) {
                return v(e, [i.c])
            }
        }, b = Object(a.c)({
            name: "navigation-favourite-store",
            actions: g,
            initialState: m
        }), y = Object(a.b)(b, {selector: null}), h = Object(a.b)(b, {
            selector: function (e) {
                return e[i.b]
            }
        }), j = Object(a.b)(b, {
            selector: function (e) {
                return e[i.e]
            }
        }), O = Object(a.b)(b, {
            selector: function (e) {
                return e[i.c]
            }
        }), I = Object(a.a)(b)
    },
    "./src/packages/platform/services/nav-item-service/src/constants.js": function (e, t, n) {
        "use strict";
        n.d(t, "e", (function () {
            return r
        })), n.d(t, "c", (function () {
            return a
        })), n.d(t, "b", (function () {
            return o
        })), n.d(t, "a", (function () {
            return i
        })), n.d(t, "d", (function () {
            return s
        }));
        var r = "projects", a = "filters", o = "dashboards", i = "addons", s = "plans"
    },
    "./src/packages/platform/services/nav-item-service/src/index.js": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return g
        })), n.d(t, "e", (function () {
            return j
        })), n.d(t, "a", (function () {
            return E
        })), n.d(t, "d", (function () {
            return T
        })), n.d(t, "c", (function () {
            return D
        }));
        var r = n("./node_modules/lodash/fromPairs.js"), a = n.n(r), o = n("./node_modules/query-string/index.js"), i = n("./src/packages/platform/utils/standard-errors/src/common/utils/authentication-error/main.js"), s = n("./src/packages/platform/services/nav-item-service/src/constants.js");

        function c(e, t, n, r, a, o, i) {
            try {
                var s = e[o](i), c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, a)
        }

        function u(e) {
            return function () {
                var t = this, n = arguments;
                return new Promise((function (r, a) {
                    var o = e.apply(t, n);

                    function i(e) {
                        c(o, r, a, i, s, "next", e)
                    }

                    function s(e) {
                        c(o, r, a, i, s, "throw", e)
                    }

                    i(void 0)
                }))
            }
        }

        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function (t) {
                    f(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function m(e, t) {
            if (null == e)return {};
            var n, r, a = function (e, t) {
                if (null == e)return {};
                var n, r, a = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        var p = function (e) {
            throw e
        }, v = function (e) {
            var t = e.items;
            return d(d({}, m(e, ["items"])), {}, {
                items: t.filter(Boolean).map((function (e) {
                    return d(d({}, e), {}, {type: "".concat(e.type, "s")})
                }))
            })
        }, g = function () {
            var e = u(regeneratorRuntime.mark((function e(t, n) {
                var r, c, u, l, d, f, m, g;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;)switch (e.prev = e.next) {
                        case 0:
                            return r = n.count, c = n.types, u = void 0 === c ? [s.e, s.b, s.c] : c, l = Object(o.stringify)(a()(u.map((function (e) {
                                return [e, r]
                            })))), d = "".concat(t, "/rest/internal/2/favourites?").concat(l), e.prev = 3, e.next = 6, fetch(d);
                        case 6:
                            if ((f = e.sent).ok) {
                                e.next = 12;
                                break
                            }
                            if (401 !== (m = f.status)) {
                                e.next = 11;
                                break
                            }
                            return e.abrupt("return", p(new i.a("".concat(m))));
                        case 11:
                            return e.abrupt("return", p(new Error(m)));
                        case 12:
                            return e.next = 14, f.json();
                        case 14:
                            return g = e.sent, e.abrupt("return", g.map(v));
                        case 18:
                            return e.prev = 18, e.t0 = e.catch(3), e.abrupt("return", p(e.t0));
                        case 21:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[3, 18]])
            })));
            return function (t, n) {
                return e.apply(this, arguments)
            }
        }();

        function b(e, t, n, r, a, o, i) {
            try {
                var s = e[o](i), c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, a)
        }

        var y = function (e) {
            throw e
        }, h = function (e) {
            var t = e.counts;
            return Object.keys(t).reduce((function (e, n) {
                return e.push("".concat(n, "=").concat(t[n])), e
            }), []).join(",")
        }, j = function () {
            var e = function (e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            b(o, r, a, i, s, "next", e)
                        }

                        function s(e) {
                            b(o, r, a, i, s, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }(regeneratorRuntime.mark((function e(t, n) {
                var r, a, s, c, u;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;)switch (e.prev = e.next) {
                        case 0:
                            return r = n.counts, a = "".concat(t).concat("/rest/internal/2/productsearch/search", "?").concat(Object(o.stringify)({
                                counts: h({counts: r}),
                                type: Object.keys(r).join(",")
                            })), e.prev = 2, e.next = 5, fetch(a);
                        case 5:
                            if ((s = e.sent).ok) {
                                e.next = 11;
                                break
                            }
                            if (401 !== (c = s.status)) {
                                e.next = 10;
                                break
                            }
                            return e.abrupt("return", y(new i.a("".concat(c))));
                        case 10:
                            return e.abrupt("return", y(new Error(c)));
                        case 11:
                            return u = s.json(), e.abrupt("return", u);
                        case 15:
                            return e.prev = 15, e.t0 = e.catch(2), e.abrupt("return", y(e.t0));
                        case 18:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[2, 15]])
            })));
            return function (t, n) {
                return e.apply(this, arguments)
            }
        }(), O = n("./src/packages/platform/utils/types/src/index.js");

        function I(e, t, n, r, a, o, i) {
            try {
                var s = e[o](i), c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, a)
        }

        var S = function (e) {
            throw e
        }, E = function () {
            var e = function (e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            I(o, r, a, i, s, "next", e)
                        }

                        function s(e) {
                            I(o, r, a, i, s, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }(regeneratorRuntime.mark((function e() {
                var t, n, r, a, o, c = arguments;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;)switch (e.prev = e.next) {
                        case 0:
                            return t = c.length > 0 && void 0 !== c[0] ? c[0] : Object(O.toBaseUrl)(""), n = "".concat(t, "/rest/navigation/3/global/addons"), e.prev = 2, e.next = 5, fetch(n);
                        case 5:
                            if ((r = e.sent).ok) {
                                e.next = 11;
                                break
                            }
                            if (401 !== (a = r.status)) {
                                e.next = 10;
                                break
                            }
                            return e.abrupt("return", S(new i.a("".concat(a))));
                        case 10:
                            return e.abrupt("return", S(new Error(a)));
                        case 11:
                            return e.next = 13, r.json();
                        case 13:
                            return o = e.sent, e.abrupt("return", o.items.map((function (e) {
                                return {
                                    id: e.id,
                                    title: e.name,
                                    avatarUrl: e.iconUrl,
                                    type: s.a,
                                    url: e.url,
                                    className: e.styleClass
                                }
                            })));
                        case 17:
                            return e.prev = 17, e.t0 = e.catch(2), e.abrupt("return", S(e.t0));
                        case 20:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[2, 17]])
            })));
            return function () {
                return e.apply(this, arguments)
            }
        }(), w = n("./src/packages/common-legacy-do-not-add-anything-new/src/util/index.js"), k = function () {
            return Object(w.c)("com.atlassian.rm.jpo.navigation.portfolio-dropdown", !1)
        };

        function A(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function x(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? A(Object(n), !0).forEach((function (t) {
                    P(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function P(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function M(e, t, n, r, a, o, i) {
            try {
                var s = e[o](i), c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, a)
        }

        var C = {id: "com.atlassian.jpo:jpo-wi-main", title: "Portfolio", type: s.a}, T = function () {
            var e = function (e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            M(o, r, a, i, s, "next", e)
                        }

                        function s(e) {
                            M(o, r, a, i, s, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }(regeneratorRuntime.mark((function e() {
                var t, n, r, a, o = arguments;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;)switch (e.prev = e.next) {
                        case 0:
                            if (t = o.length > 0 && void 0 !== o[0] ? o[0] : Object(O.toBaseUrl)(""), n = "".concat(t, "/rest/jpo/1.0/navigation"), !k()) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return", void 0);
                        case 4:
                            return e.prev = 4, e.next = 7, fetch(n);
                        case 7:
                            if (!(r = e.sent).ok) {
                                e.next = 14;
                                break
                            }
                            return e.next = 11, r.json();
                        case 11:
                            if (!(a = e.sent).isVisible) {
                                e.next = 14;
                                break
                            }
                            return e.abrupt("return", x(x({}, C), {}, {url: a.redirectUrl}));
                        case 14:
                            return e.abrupt("return", void 0);
                        case 17:
                            return e.prev = 17, e.t0 = e.catch(4), e.abrupt("return", void 0);
                        case 20:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[4, 17]])
            })));
            return function () {
                return e.apply(this, arguments)
            }
        }();

        function F(e, t, n, r, a, o, i) {
            try {
                var s = e[o](i), c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, a)
        }

        var N = function (e) {
            throw e
        }, _ = function (e) {
            var t = e.isVisible, n = e.staticLinks, r = e.recentPlans;
            return {
                isVisible: t, recent: (void 0 === r ? [] : r).map((function (e) {
                    var t = e.planId, n = e.scenarioId, r = e.title, a = e.url;
                    return {id: "".concat(t, "|").concat(n), title: r || "", url: a, type: s.d}
                })), links: n
            }
        }, D = function () {
            var e = function (e) {
                return function () {
                    var t = this, n = arguments;
                    return new Promise((function (r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            F(o, r, a, i, s, "next", e)
                        }

                        function s(e) {
                            F(o, r, a, i, s, "throw", e)
                        }

                        i(void 0)
                    }))
                }
            }(regeneratorRuntime.mark((function e() {
                var t, n, r, a, o = arguments;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;)switch (e.prev = e.next) {
                        case 0:
                            return t = o.length > 0 && void 0 !== o[0] ? o[0] : Object(O.toBaseUrl)(""), n = "".concat(t, "/rest/jpo/1.0/navigation"), e.prev = 2, e.next = 5, fetch(n);
                        case 5:
                            if (!(r = e.sent).ok) {
                                e.next = 11;
                                break
                            }
                            return e.next = 9, r.json();
                        case 9:
                            return a = e.sent, e.abrupt("return", _(a));
                        case 11:
                            return e.abrupt("return", N(new Error(r.status)));
                        case 14:
                            return e.prev = 14, e.t0 = e.catch(2), e.abrupt("return", N(e.t0));
                        case 17:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[2, 14]])
            })));
            return function () {
                return e.apply(this, arguments)
            }
        }();
        n("./src/packages/platform/utils/fetch/src/index.js")
    },
    "./src/packages/platform/services/nav-item-service/src/services/create-project-permisson/index.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return p
        })), n.d(t, "b", (function () {
            return v
        }));
        var r = n("./node_modules/react-sweet-state/lib/esm/index.js"), a = n("./src/packages/platform/utils/fetch/src/index.js");

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function (t) {
                    s(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function c(e, t, n, r, a, o, i) {
            try {
                var s = e[o](i), c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, a)
        }

        function u(e) {
            return function () {
                var t = this, n = arguments;
                return new Promise((function (r, a) {
                    var o = e.apply(t, n);

                    function i(e) {
                        c(o, r, a, i, s, "next", e)
                    }

                    function s(e) {
                        c(o, r, a, i, s, "throw", e)
                    }

                    i(void 0)
                }))
            }
        }

        var l = function () {
            var e = u(regeneratorRuntime.mark((function e(t) {
                var n, r;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;)switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(t, "/rest/internal/2/projectpermissions"), e.next = 3, Object(a.c)(n);
                        case 3:
                            return r = e.sent, e.abrupt("return", r);
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), d = function (e) {
            return function () {
                var t = u(regeneratorRuntime.mark((function t(n) {
                    var r, a, o, s;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;)switch (t.prev = t.next) {
                            case 0:
                                if (r = n.setState, a = n.getState, o = a(), o.isFetching) {
                                    t.next = 13;
                                    break
                                }
                                return t.prev = 3, t.next = 6, l(e);
                            case 6:
                                s = t.sent, r(i(i({}, s), {}, {
                                    isFetching: !1,
                                    fetchError: null,
                                    hasFetchedOnce: !0,
                                    hasSuccessOnce: !0
                                })), t.next = 13;
                                break;
                            case 10:
                                t.prev = 10, t.t0 = t.catch(3), r({
                                    canCreateProject: !1,
                                    canCreateClassicProject: !1,
                                    canCreateNextGenProject: !1,
                                    isFetching: !1,
                                    fetchError: t.t0,
                                    hasFetchedOnce: !0
                                });
                            case 13:
                            case"end":
                                return t.stop()
                        }
                    }), t, null, [[3, 10]])
                })));
                return function (e) {
                    return t.apply(this, arguments)
                }
            }()
        }, f = {
            fetchCreateProjectPermission: function (e) {
                return function () {
                    var t = u(regeneratorRuntime.mark((function t(n) {
                        var r, a, o;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;)switch (t.prev = t.next) {
                                case 0:
                                    r = n.setState, a = n.dispatch, o = a(d(e)), r({isFetching: !0, promise: o});
                                case 3:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }()
            }
        }, m = Object(r.c)({
            name: "create-project-permissions",
            initialState: {
                canCreateProject: !1,
                canCreateClassicProject: !1,
                canCreateNextGenProject: !1,
                isFetching: !1,
                fetchError: null,
                promise: null,
                hasFetchedOnce: !1,
                hasSuccessOnce: !1
            },
            actions: f
        }), p = (Object(r.a)(m), Object(r.b)(m)), v = Object(r.b)(m, {selector: null})
    },
    "./src/packages/platform/services/recents-store/src/index.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return s
        })), n.d(t, "c", (function () {
            return h
        })), n.d(t, "d", (function () {
            return j
        })), n.d(t, "f", (function () {
            return O
        })), n.d(t, "e", (function () {
            return I
        })), n.d(t, "b", (function () {
            return S
        }));
        var r, a = n("./node_modules/react-sweet-state/lib/esm/index.js"), o = n("./src/packages/platform/services/nav-item-service/src/index.js"), i = n("./src/packages/platform/services/nav-item-service/src/constants.js"), s = 5;

        function c(e, t, n, r, a, o, i) {
            try {
                var s = e[o](i), c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, a)
        }

        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function (t) {
                    d(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var f = {
            items: null,
            isFetching: !1,
            fetchError: null,
            promise: null,
            hasFetchedOnce: !1,
            hasSuccessOnce: !1
        }, m = (d(r = {}, i.b, l({}, f)), d(r, i.c, l({}, f)), d(r, i.e, l({}, f)), r), p = function (e) {
            return e.reduce((function (e, t) {
                return "quick-search-filters" === t.id && (e[i.c] = t.items), "quick-search-dashboards" === t.id && (e[i.b] = t.items), "quick-search-projects" === t.id && (e[i.e] = t.items), e
            }), {})
        }, v = function (e, t) {
            return t.reduce((function (t, n) {
                return t[n] = e, t
            }), {})
        }, g = function (e, t) {
            return function () {
                var n = function (e) {
                    return function () {
                        var t = this, n = arguments;
                        return new Promise((function (r, a) {
                            var o = e.apply(t, n);

                            function i(e) {
                                c(o, r, a, i, s, "next", e)
                            }

                            function s(e) {
                                c(o, r, a, i, s, "throw", e)
                            }

                            i(void 0)
                        }))
                    }
                }(regeneratorRuntime.mark((function n(r, a) {
                    var i, s, c, u, d, f, m, g, b, y;
                    return regeneratorRuntime.wrap((function (n) {
                        for (; ;)switch (n.prev = n.next) {
                            case 0:
                                if (i = r.setState, s = r.getState, c = a.baseUrl, !(u = t.filter((function (e) {
                                        return !s()[e].isFetching
                                    }))).length) {
                                    n.next = 20;
                                    break
                                }
                                return n.prev = 4, d = Object(o.e)(c, {counts: v(e, u)}), f = u.reduce((function (e, t) {
                                    return e[t] = l(l({}, s()[t]), {}, {
                                        isFetching: !0,
                                        fetchError: null,
                                        promise: d
                                    }), e
                                }), {}), i(f), n.next = 10, d;
                            case 10:
                                m = n.sent, g = p(m), b = u.reduce((function (e, t) {
                                    return e[t] = {
                                        items: g[t],
                                        isFetching: !1,
                                        promise: null,
                                        fetchError: null,
                                        hasFetchedOnce: !0,
                                        hasSuccessOnce: !0
                                    }, e
                                }), {}), i(b), n.next = 20;
                                break;
                            case 16:
                                n.prev = 16, n.t0 = n.catch(4), y = u.reduce((function (e, t) {
                                    return e[t] = l(l({}, s()[t]), {}, {
                                        isFetching: !1,
                                        promise: null,
                                        fetchError: n.t0,
                                        hasFetchedOnce: !0
                                    }), e
                                }), {}), i(y);
                            case 20:
                            case"end":
                                return n.stop()
                        }
                    }), n, null, [[4, 16]])
                })));
                return function (e, t) {
                    return n.apply(this, arguments)
                }
            }()
        }, b = {
            loadRecentAll: function (e) {
                return g(e, [i.b, i.e, i.c])
            }, loadRecentProjects: function (e) {
                return g(e, [i.e])
            }, loadRecentDashboards: function (e) {
                return g(e, [i.b])
            }, loadRecentFilters: function (e) {
                return g(e, [i.c])
            }
        }, y = Object(a.c)({
            name: "navigation-recents-store",
            actions: b,
            initialState: m
        }), h = Object(a.b)(y, {selector: null}), j = Object(a.b)(y, {
            selector: function (e) {
                return e[i.b]
            }
        }), O = Object(a.b)(y, {
            selector: function (e) {
                return e[i.e]
            }
        }), I = Object(a.b)(y, {
            selector: function (e) {
                return e[i.c]
            }
        }), S = Object(a.a)(y)
    },
    "./src/packages/platform/ui/favouriting/favourite-button-stateless/src/index.js": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return J
        })), n.d(t, "a", (function () {
            return x
        }));
        var r = n("./node_modules/react/index.js"), a = n.n(r), o = n("./node_modules/react-intl/lib/index.es.js"), i = n("./node_modules/lodash/flow.js"), s = n.n(i), c = n("./node_modules/lodash/noop.js"), u = n.n(c), l = n("./node_modules/@atlaskit/button--current/components/Button.js"), d = n("./node_modules/@atlaskit/icon--current/glyph/star.js"), f = n.n(d), m = n("./node_modules/@atlaskit/icon--current/glyph/star-filled.js"), p = n.n(m), v = n("./node_modules/@atlaskit/tooltip/components/Tooltip.js"), g = n("./src/packages/platform/observability/analytics-web-react/src/index.js"), b = Object(o.defineMessages)({
            starButton: {
                id: "platform.ui.favouriting.favourite-button-stateless.star-button",
                defaultMessage: "Star"
            },
            unstarButton: {
                id: "platform.ui.favouriting.favourite-button-stateless.unstar-button",
                defaultMessage: "Unstar"
            }
        }), y = n("./node_modules/styled-components/dist/styled-components.browser.es.js"), h = n("./node_modules/@atlaskit/theme/index.js"), j = n("./src/packages/common-legacy-do-not-add-anything-new/src/styles/index.js"), O = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = e ? 3 : 4, n = "".concat(j.f * t, "px"), r = n;
            return Object(y.css)(["width:", ";height:", ";"], r, n)
        }, I = h.colors.Y300, S = h.colors.N500, E = h.colors.Y200, w = h.colors.N200, k = h.colors.N40, A = h.colors.N500, x = y.default.span(["display:inline-block;"]), P = y.default.span(["display:flex;", ""], (function (e) {
            return O(e.isSmall)
        })), M = function (e) {
            return Object(y.css)(["display:flex;align-items:center;justify-content:center;", ""], O(e))
        }, C = Object(y.css)(["svg{border-radius:50%;animation:energyPop ", "s ease;animation-fill-mode:forwards;will-change:transform;}@keyframes energyPop{0%{color:#253858;background-color:transparent;transform:scale3d(0.5,0.5,0.5);}20%{color:#fffae6;background-color:rgba(255,171,0,0.2);transform:scale3d(1,1,1);}80%{background-color:transparent;transform:scale3d(1.2,1.2,1.2);}100%{background-color:transparent;color:currentColor;transform:none;}}"], .5), T = Object(y.css)(["", ";"], (function (e) {
            return e.isAnimating ? C : null
        })), F = y.default.span(["", " ", ";&:hover{", ";}", ";"], (function (e) {
            return M(e.isSmall)
        }), (function (e) {
            return "color: ".concat(e.isFavourite ? I : S)
        }), (function (e) {
            return "color: ".concat(e.isFavourite ? E : w)
        }), T), N = y.default.span(["", " ", ";&:hover{", ";}", ";"], (function (e) {
            return M(e.isSmall)
        }), (function (e) {
            return "color: ".concat(e.isFavourite ? I : k)
        }), (function (e) {
            return "color: ".concat(e.isFavourite ? E : A)
        }), T);

        function _(e) {
            return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function D(e, t) {
            if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
        }

        function R(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function U(e, t) {
            return (U = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
        }

        function B(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)return !1;
                if (Reflect.construct.sham)return !1;
                if ("function" == typeof Proxy)return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = V(e);
                if (t) {
                    var a = V(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else n = r.apply(this, arguments);
                return L(this, n)
            }
        }

        function L(e, t) {
            return !t || "object" !== _(t) && "function" != typeof t ? function (e) {
                if (void 0 === e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function V(e) {
            return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        var H = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && U(e, t)
            }(n, e);
            var t = B(n);

            function n() {
                var e;
                D(this, n);
                for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)a[o] = arguments[o];
                return (e = t.call.apply(t, [this].concat(a))).state = {isAnimating: !1}, e.onBtnClickWrapper = function (e) {
                    e.stopPropagation(), e.preventDefault()
                }, e.onClick = function (t, n) {
                    e.props.onClick(n)
                }, e
            }

            return function (e, t, n) {
                t && R(e.prototype, t), n && R(e, n)
            }(n, [{
                key: "componentDidUpdate", value: function (e) {
                    !e.pending && this.props.pending && (this.onAnimationStart(), this.onSettingAnimationEnd())
                }
            }, {
                key: "onAnimationStart", value: function () {
                    this.setState({isAnimating: !this.state.isAnimating})
                }
            }, {
                key: "onSettingAnimationEnd", value: function () {
                    var e = this;
                    setTimeout((function () {
                        e.setState({isAnimating: !1})
                    }), 1e3)
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.isFavourite, n = e.isShownInList, r = e.isSmall, o = e.hideTooltip, i = e.pending, s = e.intl.formatMessage, c = this.state.isAnimating;
                    if (void 0 === t)return a.a.createElement(P, {
                        "data-test-id": "favouriting.favourite-button-stateless.skeleton",
                        isSmall: r
                    });
                    var d = n ? N : F, m = n ? "".concat("favouriting.favourite-button-stateless.icon-wrapper", "-list") : "favouriting.favourite-button-stateless.icon-wrapper", g = r ? {size: "small"} : {}, y = a.a.createElement(d, {
                        isFavourite: t,
                        isAnimating: c,
                        "data-test-id": m,
                        isSmall: r
                    }, t ? a.a.createElement(p.a, g) : a.a.createElement(f.a, g)), h = s(t ? b.unstarButton : b.starButton);
                    return a.a.createElement(x, {
                        role: "presentation",
                        onClick: this.onBtnClickWrapper,
                        onKeyPress: this.onBtnClickWrapper,
                        "data-is-favourite": t
                    }, a.a.createElement(v.a, {
                        content: !o && h,
                        hideTooltipOnClick: !0,
                        position: "bottom"
                    }, a.a.createElement(l.b, {
                        appearance: n ? "subtle-link" : "subtle",
                        spacing: "none",
                        "aria-label": h,
                        onClick: i ? u.a : this.onClick
                    }, y)))
                }
            }]), n
        }(r.Component);
        H.defaultProps = {
            isFavourite: void 0,
            isShownInList: !1,
            isSmall: !1,
            hideTooltip: !1,
            onClick: u.a
        }, H.displayName = "FavouriteButtonStateless";
        var J = s()(Object(g.r)({
            onClick: function () {
                return {name: "star"}
            }
        }), o.injectIntl)(H)
    },
    "./src/packages/platform/ui/feedback/feedback-dialog-base/src/model/types.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        }));
        var r = Object.freeze({
            SOURCE_PROJECT_TYPE: "source-project-type",
            TARGET_PROJECT_TYPE: "target-project-type",
            OPT_OUT: "Opt-out",
            REASON: "reason",
            FEELING: "feeling",
            IS_ADMIN: "is-admin",
            IS_PROJECT_SETTINGS: "is-project-settings",
            IS_JSD_EVALUATOR: "is-jsd-evaluator",
            IS_SIMPLIFIED_PROJECT: "is-simplified-project",
            SUPPORTED_PROJECT_TYPES: "supported-project-types",
            FEEDBACK_COLLECTOR_LOCATION: "feedback-collector-location",
            FEEDBACK_COLLECTOR_ID: "feedback-collector-id",
            FEEDBACK_EMBEDDABLE_KEY: "feedback-embeddable-key",
            JSD_DW_COHORT: "jsd-dw-cohort",
            JSD_DW_EAP_STATE: "jsd-dw-eap-state",
            LOCATION: "Location",
            REFERER: "Referer",
            USER_AGENT: "User-Agent",
            SCREEN_RESOLUTION: "Screen Resolution",
            SOURCE: "Source",
            SUB_PRODUCT: "Sub-product",
            JSD_ITSM_ENABLED: "jsd-itsm-enabled"
        })
    },
    "./src/packages/platform/utils/standard-errors/src/common/utils/authentication-error/main.js": function (e, t, n) {
        "use strict";
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function a(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? function (e) {
                if (void 0 === e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function o(e) {
            var t = "function" == typeof Map ? new Map : void 0;
            return (o = function (e) {
                if (null === e || !function (e) {
                        return -1 !== Function.toString.call(e).indexOf("[native code]")
                    }(e))return e;
                if ("function" != typeof e)throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e))return t.get(e);
                    t.set(e, n)
                }
                function n() {
                    return i(e, arguments, u(this).constructor)
                }

                return n.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), c(n, e)
            })(e)
        }

        function i(e, t, n) {
            return (i = s() ? Reflect.construct : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r));
                return n && c(a, n.prototype), a
            }).apply(null, arguments)
        }

        function s() {
            if ("undefined" == typeof Reflect || !Reflect.construct)return !1;
            if (Reflect.construct.sham)return !1;
            if ("function" == typeof Proxy)return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }

        function c(e, t) {
            return (c = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
        }

        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        n.d(t, "a", (function () {
            return l
        }));
        var l = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }(n, e);
            var t = function (e) {
                var t = s();
                return function () {
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }(n);

            function n(e) {
                var r;
                return function (e, t) {
                    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
                }(this, n), (r = t.call(this, e)).name = "AuthenticationError", r
            }

            return n
        }(o(Error))
    }
}]);
try {
    window.__jsEvalStop("async-atlassian-navigation.js")
} catch (e) {
}
//# sourceMappingURL=https://statlas.prod.atl-paas.net/jira-frontend-source-maps/assets/async-atlassian-navigation.7ce5bf3da7a1e07291c6.8.js.map