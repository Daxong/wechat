var FO; 
!function(e) {
    var t; 
    !function(e) {
        var t; 
        !function(e) {
            function t(e, t) {
                return Array(Math.max(t - String(e).length + 1, 0)).join("0") + e
            }
            function r(e, t) {
                var r, n, o, i = "",
                a = t.length;
                for (r = 0; r < e.length; r++) o = e.charAt(r),
                n = t.indexOf(o),
                n >= 0 && (o = t.charAt((n + a / 2) % a)),
                i += o;
                return i
            }
            function n(e) {
                return r(e, "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~")
            }
            function o(e) {
                var t, r, n, o = 0;
                if (0 == e.length) return o;
                for (t = 0, n = e.length; t < n; t++) r = e.charCodeAt(t),
                o = (o << 5) - o + r,
                o |= 0;
                return o
            }
            function i(e) {
                for (var t = "",
                r = 0; r < e; r++) {
                    var n = Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                    t += n
                }
                return t.substr(0, e)
            }
            function a() {
                for (var e = [], t = "0123456789ABCDEF", r = 0; r < 36; r++) e[r] = Math.floor(16 * Math.random());
                e[14] = 4,
                e[19] = 3 & e[19] | 8;
                for (var r = 0; r < 36; r++) e[r] = t[e[r]];
                return e[8] = e[13] = e[18] = e[23] = "-",
                e.join("")
            }
            function u(e, t) {
                if (e == t) return ! 0;
                if ("object" != typeof e && "object" != typeof t) return e == t;
                var r = Object.getOwnPropertyNames(e),
                n = Object.getOwnPropertyNames(t);
                if (r.length != n.length) return ! 1;
                for (var o = 0; o < r.length; o++) {
                    var i = r[o];
                    if (!u(e[i], t[i])) return ! 1
                }
                return ! 0
            }
            function s(e, t) {
                return 0 === e.length ? t.length: 0 === t.length ? e.length: Math.min(s(e.substr(1), t) + 1, s(t.substr(1), e) + 1, s(e.substr(1), t.substr(1)) + (e[0] !== t[0] ? 1 : 0))
            }
            function c(e, t) {
                if (0 === e.length) return t.length;
                if (0 === t.length) return e.length;
                var r, n = [];
                for (r = 0; r <= t.length; r++) n[r] = [r];
                var o;
                for (o = 0; o <= e.length; o++) n[0][o] = o;
                for (r = 1; r <= t.length; r++) for (o = 1; o <= e.length; o++) t.charAt(r - 1) == e.charAt(o - 1) ? n[r][o] = n[r - 1][o - 1] : n[r][o] = Math.min(n[r - 1][o - 1] + 1, Math.min(n[r][o - 1] + 1, n[r - 1][o] + 1));
                return n[t.length][e.length]
            }
            function l(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                var n = arguments;
                return e.replace(/{(\d+)}/g,
                function(e, t) {
                    var r = parseInt(t) + 1;
                    if ("undefined" == typeof n[r]) throw Error("Failed matching format group " + e);
                    return n[r].toString()
                })
            }
            function f(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                return e.replace(/{(\w+)}/g,
                function(e, r) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        if (r in o) return o[r]
                    }
                    throw Error("Failed matching format group " + e)
                })
            }
            function p(e, t) {
                e.addEventListener ? e.addEventListener("message", t, !1) : e.attachEvent && e.attachEvent("onmessage", t)
            }
            e.zeroPad = t,
            e.rot47 = n,
            e.stringHash = o,
            e.generateGuid = i,
            e.generateUUID = a,
            e.isEquivalent = u,
            e.levenshteinDistance = s,
            e.getEditDistance = c,
            e.stringFormat = l,
            e.namedStringFormat = f,
            e.attachPostMessageHandler = p,
            e.HOUR_SECONDS = 3600,
            e.DAY_SECONDS = 24 * e.HOUR_SECONDS,
            e.WEEK_SECONDS = 7 * e.DAY_SECONDS,
            e.MONTH_SECONDS = 30 * e.DAY_SECONDS
        } (t = e.Common || (e.Common = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; 
!function(e) {
    var t; 
    !function(e) {
        var t; 
        !function(e) {
            var t = function() {
                function e(e) {
                    this._domain = null,
                    this._domain = e
                }
                return e.prototype.externalJsRoot = function() {
                    return "//pstatic" + this.domain() + "/fl"
                },
                e.prototype.domain = function() {
                    return this._domain
                },
                e.prototype.innerResourcesRoot = function() {
                    return this.rootUrl() + "/Extras"
                },
                e.prototype.outerResourcesRoot = function() {
                    return "//pstatic" + this.domain() + "/nwp/External"
                },
                e.prototype.iframeStoreSrc = function() {
                    return this.rootUrl() + "/Store.html"
                },
                e.prototype.videoIframeSrc = function() {
                    return this.rootUrl() + "/VideoIframe.html"
                },
                e.prototype.notifyRoot = function() {
                    return this.apiRoot()
                },
                e.prototype.rootUrl = function() {
                    return "//pstatic" + this.domain() + "/nwp/v0_0_1109/release"
                },
                e.prototype.apiRoot = function() {
                    return "//app" + this.domain()
                },
                e.prototype.staticFilesRoot = function() {
                    return "//pstatic" + this.domain() + "/staticFiles"
                },
                e.prototype.dynamicContentRoot = function() {
                    return "//jsgnr" + this.domain()
                },
                e.prototype.cachedApiRoot = function() {
                    return "//capp" + this.domain()
                },
                e.prototype.blackWhiteListRoot = function() {
                    return "//cwbl" + this.domain()
                },
                e.prototype.whitelistsRoot = function() {
                    return "//wl" + this.domain()
                },
                e.prototype.shortCacheRoot = function() {
                    return "//istatic" + this.domain()
                },
                e.prototype.longCacheRoot = function() {
                    return "//pstatic" + this.domain()
                },
                e
            } ();
            e.Paths = t
        } (t = e.Context || (e.Context = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; 
!function(e) {
    var t; 
    !function(e) {
        function t(e) {
            return r.flag(e)
        }
        e.flag = t;
        var r = function() {
            function e() {}
            return e.initOverrides = function(t) {
                e.overrides = t
            },
            e.flag = function(t) {
                return t.getValue(e.overrides)
            },
            e.createflag = function(e, t, r) {
                var n = "FO_" + e.toUpperCase(),
                o = "fo_" + e.toLowerCase();
                return {
                    key: e,
                    defaultValue: t,
                    getValue: function(e) {
                        return n in window ? window[n] : o in window ? window[o] : e ? r(e, t) : t
                    }
                }
            },
            e.createStringFlag = function(t, r) {
                return e.createflag(t, r,
                function(e) {
                    return e.value(t, r)
                })
            },
            e.createFloatFlag = function(t, r) {
                return e.createflag(t, r,
                function(e) {
                    return e.floatValue(t, r)
                })
            },
            e.createBoolFlag = function(t, r) {
                return e.createflag(t, r,
                function(e) {
                    return e.boolValue(t, r)
                })
            },
            e.INIMG = {
                PROVIDER: e.createStringFlag("inimg.provider", "demo"),
                INIMG_HIDE_DELAY: e.createFloatFlag("inimg.hide_delay", 1e4)
            },
            e.INTEXT = {
                EXT: e.createBoolFlag("intxt.ext", !0),
                INTEXT_LIMIT: e.createFloatFlag("intext_limit", 6),
                NORM_NLP_RATIO: e.createFloatFlag("intext.nlp-norm-ratio", 1),
                COL_VISIBLE_ONLY: e.createBoolFlag("intext.collect-visible-visible", !0),
                RPL_VISIBLE_ONLY: e.createBoolFlag("intext.replace-visible-visible", !0),
                RPL_MAX_ELEMENTS: e.createFloatFlag("intext.replace-max-count", 6),
                P_DISABLE: e.createBoolFlag("intext.ispdiabled", !0),
                B_DISABLE: e.createBoolFlag("intext.isbdiabled", !0),
                BBM_DISABLE: e.createBoolFlag("intext.isbbmdisabled", !1),
                BBS_DISABLE: e.createBoolFlag("intext.isbbsdisabled", !1)
            },
            e.CALLBACK = {
                CALLBACK_FUNCTION_NAME: e.createStringFlag("callback.fname", "extCallback")
            },
            e.ENCODE_URL = {
                ENCODE_CLICK_URL: e.createBoolFlag("encode-click-url", !1)
            },
            e.CLASSIFICATION = {
                ALLWAYS_CLASSIFY: e.createBoolFlag("classify.allways-classified", !1),
                CLASSIFY_PAGE: e.createBoolFlag("classify.page", !1)
            },
            e.DP_MOTHERFUCKERS = {
                MADEUP_FACTOR: e.createFloatFlag("madeup.factor", 3)
            },
            e.STANDOWN = {
                SHOULD_STANDOWN: e.createBoolFlag("should.standown", !1)
            },
            e.SERP = {
                SAFE_DISTANCE: e.createFloatFlag("serp.safe-distance", 0),
                LOCAL_INTERVAL: e.createFloatFlag("serp.local-interval", 36e5),
                GLOBAL_INTERVAL: e.createFloatFlag("serp.global-interval", 864e5)
            },
            e.GlobalFlags = {
                FULL_DAY: e.createFloatFlag("globalflags.full-day", 864e5),
                ONE_HOUR: e.createFloatFlag("globalflags.one-hour", 36e5)
            },
            e.Runtime = {
                CLEAN_FNS: e.createBoolFlag("runtime.clean-fns", !0),
                DEBUG: e.createBoolFlag("debug", !1)
            },
            e.GA = {
                GA_NOTIFY: e.createBoolFlag("ga.notify", !1)
            },
            e.Scrape = {
                USE_PB: e.createBoolFlag("scrape.usepb", !0),
                USE_SCHEMA: e.createBoolFlag("scrape.useschema", !0),
                USE_OPENGRAPH: e.createBoolFlag("scrape.useog", !0),
                USE_REGSCRAPE: e.createBoolFlag("scrape.usescrape", !0),
                USE_RETARGET: e.createBoolFlag("scrape.usert", !0)
            },
            e.ProductBoxes = {
                SKIP_IMAGES_NOT_IN_VIEWPORT: e.createBoolFlag("pb.skip-images-not-in-viewport", !0),
                SKIP_IGNOREABLE_ELEMENTS: e.createBoolFlag("pb.skip-ignoreable", !0)
            },
            e.Retargeting = {
                OLDALGO: e.createBoolFlag("retarget.oldalgo", !0),
                WEIGHT_TYPE: e.createFloatFlag("retarget-weights.type", 2),
                WEIGHT_AGE: e.createFloatFlag("retarget-weights.age", 2),
                WEIGHT_PAGEMATCH: e.createFloatFlag("retarget-weights.page-match", 2),
                WEIGHT_WORDREPEAT: e.createFloatFlag("retarget-weights.word-repeat", 2)
            },
            e.Deals = {
                USE_FAKE_DATA: e.createBoolFlag("deals.use-fake-data", !1),
                OPEN_ON_CURRENT_WINDOW_GEO: e.createStringFlag("deals.open-on-current-window", null),
                SHOW_SHOPPING_BUDDY: e.createBoolFlag("deals.show-shopping-buddy", !1),
                KEEP_CLOSE_BOTTOM_ON_SCREEN: e.createBoolFlag("deals.bottom-always-shown", !1)
            },
            e.Content = {
                VER_RATIO: e.createFloatFlag("content.verratio", 1),
                CAD_RATIO: e.createFloatFlag("content.cadratio", 1),
                NUM_OF_DEALS: e.createFloatFlag("content.num-of-deals", 5),
                PROVIDER: e.createStringFlag("content.provider", "cad"),
                VERFALLBACK: e.createBoolFlag("content.verfallback", !1),
                DIG_RATIO: e.createFloatFlag("content.digratio", 0),
                SLIDER_VER: e.createFloatFlag("content.ver", 0),
                USE_WEBSOCKET: e.createBoolFlag("content.use-web-socket", !1)
            },
            e.View = {
                PROTECT_EVENTS: e.createBoolFlag("view.protect-events", !1),
                PROTECT_DOM: e.createBoolFlag("view.protect-dom", !1),
                DIV_SLIDER: e.createBoolFlag("slider.usediv", !1)
            },
            e.Display = {
                SKIN: e.createStringFlag("display.skin", null)
            },
            e.overrides = null,
            e
        } ();
        e.Flags = r
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; 
!function(e) {
    var t; 
    !function(e) {
        var t; 
        !function(e) {
            var t = function() {
                function e(e) {
                    this.resolvedOverrides = {},
                    e.params() && e.params().flags && (e.params().flags.base.value && this.resolveAndApplyOverrides(e, e.params().flags.base.value, "base"), e.params().flags.specific.value && this.resolveAndApplyOverrides(e, e.params().flags.specific.value, "specific"))
                }
                return e.prototype.resolveAndApplyOverrides = function(e, t, r) {
                    for (var n = 0; n < t.length; n++) for (var o = t[n], i = r + "." + o.name, a = Math.random(), u = 0, s = 0; s < o.variants.length; s++) {
                        var c = o.variants[s];
                        if (u += c.odds, u > a) {
                            for (var l = i + "." + c.name,
                            f = 0; f < c.values.length; f++) this.resolvedOverrides[c.values[f].name] = {
                                value: c.values[f].val,
                                origin: l
                            },
                            o.flag && c.flagValue && e.pushNotificationParam(o.flag, c.flagValue);
                            break
                        }
                    }
                },
                e.prototype.contains = function(e) {
                    return e in this.resolvedOverrides
                },
                e.prototype.value = function(e, t) {
                    return void 0 === t && (t = null),
                    e in this.resolvedOverrides ? this.resolvedOverrides[e].value: t
                },
                e.prototype.floatValue = function(e, t) {
                    return void 0 === t && (t = null),
                    e in this.resolvedOverrides ? parseFloat(this.resolvedOverrides[e].value) : t
                },
                e.prototype.intValue = function(e, t) {
                    return void 0 === t && (t = null),
                    e in this.resolvedOverrides ? parseInt(this.resolvedOverrides[e].value) : t
                },
                e.prototype.boolValue = function(e, t) {
                    return void 0 === t && (t = null),
                    !!this.intValue(e, t ? 1 : 0)
                },
                e.prototype.forceSet = function(e, t) {
                    this.resolvedOverrides[e] = {
                        value: t,
                        origin: "manually forced"
                    }
                },
                e.prototype.describe = function() {
                    var e = [];
                    for (var t in this.resolvedOverrides) {
                        var r = this.resolvedOverrides[t];
                        e.push(t + ": " + r.value + " (" + r.origin + ")")
                    }
                    return e.join("\n")
                },
                e
            } ();
            e.Overrides = t
        } (t = e.Context || (e.Context = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; 
!function(e) {
    var t; 
    !function(e) {
        var t; 
        !function(e) {
            var t = function() {
                function e() {}
                return e.resolveReportingProduct = function(e, t) {
                    return "gpp" == e && "rsy" == t ? "rs": "pp" == e && "rs-dual" == t ? "rs": "pp" == e && "rsif" == t ? "rs": "pp" == e && "rsalt" == t ? "rs": "pp" == e && "rsx" == t ? "rs": "pp" == e && "rsy" == t ? "rs": "pp" == e && "rbary" == t ? "rbar": "pp" == e && "bs-dual" == t ? "bs": "pp" == e && "bsif" == t ? "rs": "pp" == e && "bsx" == t ? "bs": "pp" == e && "bsy" == t ? "bs": "pp" == e && "tsx" == t ? "ts": "pp" == e && "tsy" == t ? "ts": "pp" == e && "tb-dual" == t ? "tb": "pp" == e && "tbx" == t ? "tb": "pp" == e && "tby" == t ? "tb": "sk" == e && "sbx" == t ? "sb": "sk" == e && "sby" == t ? "sb": "imgdeals" == e && "gbx" == t ? "gb": "imgdeals" == e && "gby" == t ? "gb": "sp" == e && "serp" == t ? "serp": "universal-banner" == e ? "ub": "rb" == e ? "rb": "gb" == e ? "gb": "cpn" == e ? "cpn": "ppm" == e ? "rs": e + "_" + t
                },
                e
            } ();
            e.Reporting = t
        } (t = e.Logger || (e.Logger = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; !
function(e) {
    var t; !
    function(e) {
        var t; !
        function(t) {
            var r = function() {
                function r() {}
                return r.notify = function(e, t, n, o, i) {
                    void 0 === n && (n = {}),
                    void 0 === o && (o = 1),
                    void 0 === i && (i = !0);
                    var a = t.key,
                    u = t.subtype;
                    return u && (n.subtype = u),
                    r.notifyX(e, a, n, o, i)
                },
                r.notifyX = function(e, n, o, i, a) {
                    void 0 === o && (o = {}),
                    void 0 === i && (i = 1),
                    void 0 === a && (a = !0),
                    t.log("Notifying " + n + (o.subtype ? "." + o.subtype: ""));
                    try {
                        var u = r.determineShouldNotify(e, n, o, i);
                        if (!u) return ! 1;
                        var s = r.resolveUrl(e, n, o, a);
                        return (new Image).src = s,
                        !0
                    } catch(c) {
                        return ! 1
                    }
                },
                r.determineShouldNotify = function(t, r, n, o) {
                    var i = [];
                    "subtype" in n && (i.push("notifyrate." + r + "." + n.subtype + "_" + document.location.hostname), i.push("notifyrate." + r + "." + n.subtype)),
                    i.push("notifyrate." + r + "_" + document.location.hostname),
                    i.push("notifyrate." + r);
                    var a = e.Col.of(i).first(function(e) {
                        return t.overrides().contains(e)
                    }),
                    u = a ? t.overrides().floatValue(a, o) : o,
                    s = Math.random() < u;
                    return s
                },
                r.resolveUrl = function(e, t, n, o) {
                    void 0 === n && (n = {}),
                    void 0 === o && (o = !0);
                    var i = r.resolveParamaters(e, n, o),
                    a = "";
                    for (var u in i) a.length > 0 && (a += "&"),
                    a += u + "=" + encodeURIComponent(i[u]);
                    var s = e.paths().notifyRoot() + "/a/" + t + "/logo.png?" + a;
                    return s
                },
                r.resolveParamaters = function(e, r, n) {
                    void 0 === r && (r = {}),
                    void 0 === n && (n = !0);
                    var o = e.notificationParams(),
                    i = {};
                    if (n) for (var a in o) i[a] = o[a];
                    for (var a in r) i[a] = r[a];
                    if ("t" in i || (i.t = (new Date).getTime() + ""), i.pr && i.w) {
                        var u = t.Reporting.resolveReportingProduct(i.pr, i.w);
                        u && (i.rp = u)
                    }
                    return i
                },
                r.notifyGenericUrl = function(e, t, r, n) {
                    void 0 === t && (t = {}),
                    void 0 === r && (r = null),
                    void 0 === n && (n = !1);
                    try {
                        if (t) {
                            e.indexOf("?") == -1 && (e += "?");
                            for (var o in t) {
                                var i = t[o] + "";
                                e = e + "&" + o + "=" + encodeURIComponent(i)
                            }
                        }
                        return (new Image).src = e,
                        "1"
                    } catch(a) {
                        return null
                    }
                },
                r.INJECTION = {
                    key: "inj"
                },
                r.INIT = {
                    key: "init"
                },
                r.USER = {
                    key: "usr"
                },
                r.NO_SHOW = {
                    key: "noshow"
                },
                r.IMPRESSION = {
                    key: "wo"
                },
                r.HOVER = {
                    key: "ho"
                },
                r.CLICK = {
                    key: "c"
                },
                r.EXCEPTION = {
                    key: "exception"
                },
                r.SUSPEND = {
                    key: "ps"
                },
                r.GENERIC = {
                    key: "generic"
                },
                r.GENERIC_STANDOWN = {
                    key: "generic",
                    subtype: "standown"
                },
                r.GENERIC_SERP_MARKER = {
                    key: "generic",
                    subtype: "sd_marker"
                },
                r.GENERIC_UPTIME = {
                    key: "generic",
                    subtype: "uptime"
                },
                r.GENERIC_PAGE_RIBBBONS = {
                    key: "generic",
                    subtype: "pageribbons"
                },
                r.GENERIC_VDOINJ = {
                    key: "generic",
                    subtype: "vdoinj"
                },
                r.GENERIC_VDOSETUP = {
                    key: "generic",
                    subtype: "vdosetup"
                },
                r.GENERIC_VDOWLMISS = {
                    key: "generic",
                    subtype: "vdowlmiss"
                },
                r.GENERIC_ADIMP = {
                    key: "generic",
                    subtype: "adimp"
                },
                r.GENERIC_ADEND = {
                    key: "generic",
                    subtype: "adend"
                },
                r.GENERIC_RIBBON_INIT = {
                    key: "generic",
                    subtype: "ribbon_init"
                },
                r
            } ();
            t.Analytics = r
        } (t = e.Logger || (e.Logger = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; !
function(e) {
    var t; !
    function(e) {
        var t; !
        function(e) {
            function t(e) {
                e = e || {
                    guess: !0
                };
                var t = e.e || null,
                n = !!e.guess,
                o = e.mode || null,
                i = new r,
                a = i.run(t, o);
                return n ? i.guessAnonymousFunctions(a) : a
            }
            e.printStackTrace = t;
            var r = function() {
                function e() {
                    this.sourceCache = {}
                }
                return e.prototype.run = function(e, t) {
                    return e = e || this.createException(),
                    t = t || this.mode(e),
                    "other" === t ? this.other(arguments.callee) : this[t](e)
                },
                e.prototype.createException = function() {
                    try {
                        this.undef()
                    } catch(e) {
                        return e
                    }
                },
                e.prototype.mode = function(e) {
                    return e.arguments && e.stack ? "chrome": e.stack && e.sourceURL ? "safari": e.stack && e.number ? "ie": e.stack && e.fileName ? "firefox": e.message && e["opera#sourceloc"] ? e.stacktrace ? e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? "opera9": "opera10a": "opera9": e.message && e.stack && e.stacktrace ? e.stacktrace.indexOf("called from line") < 0 ? "opera10b": "opera11": e.stack && !e.fileName ? "chrome": "other"
                },
                e.prototype.instrumentFunction = function(e, r, n) {
                    e = e || window;
                    var o = e[r];
                    e[r] = function() {
                        return n.call(this, t().slice(4)),
                        e[r]._instrumented.apply(this, arguments)
                    },
                    e[r]._instrumented = o
                },
                e.prototype.deinstrumentFunction = function(e, t) {
                    e[t].constructor === Function && e[t]._instrumented && e[t]._instrumented.constructor === Function && (e[t] = e[t]._instrumented)
                },
                e.prototype.chrome = function(e) {
                    return (e.stack + "\n").replace(/^[\s\S]+?\s+at\s+/, " at ").replace(/^\s+(at eval )?at\s+/gm, "").replace(/^([^\(]+?)([\n$])/gm, "{anonymous}() ($1)$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, "{anonymous}() ($1)").replace(/^(.+) \((.+)\)$/gm, "$1@$2").split("\n").slice(0, -1)
                },
                e.prototype.safari = function(e) {
                    return e.stack.replace(/\[native code\]\n/m, "").replace(/^(?=\w+Error\:).*$\n/m, "").replace(/^@/gm, "{anonymous}()@").split("\n")
                },
                e.prototype.ie = function(e) {
                    return e.stack.replace(/^\s*at\s+(.*)$/gm, "$1").replace(/^Anonymous function\s+/gm, "{anonymous}() ").replace(/^(.+)\s+\((.+)\)$/gm, "$1@$2").split("\n").slice(1)
                },
                e.prototype.firefox = function(e) {
                    return e.stack.replace(/(?:\n@:0)?\s+$/m, "").replace(/^(?:\((\S*)\))?@/gm, "{anonymous}($1)@").split("\n")
                },
                e.prototype.opera11 = function(e) {
                    for (var t = "{anonymous}",
                    r = /^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/,
                    n = e.stacktrace.split("\n"), o = [], i = 0, a = n.length; i < a; i += 2) {
                        var u = r.exec(n[i]);
                        if (u) {
                            var s = u[4] + ":" + u[1] + ":" + u[2],
                            c = u[3] || "global code";
                            c = c.replace(/<anonymous function: (\S+)>/, "$1").replace(/<anonymous function>/, t),
                            o.push(c + "@" + s + " -- " + n[i + 1].replace(/^\s+/, ""))
                        }
                    }
                    return o
                },
                e.prototype.opera10b = function(e) {
                    for (var t = /^(.*)@(.+):(\d+)$/,
                    r = e.stacktrace.split("\n"), n = [], o = 0, i = r.length; o < i; o++) {
                        var a = t.exec(r[o]);
                        if (a) {
                            var u = a[1] ? a[1] + "()": "global code";
                            n.push(u + "@" + a[2] + ":" + a[3])
                        }
                    }
                    return n
                },
                e.prototype.opera10a = function(e) {
                    for (var t = "{anonymous}",
                    r = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                    n = e.stacktrace.split("\n"), o = [], i = 0, a = n.length; i < a; i += 2) {
                        var u = r.exec(n[i]);
                        if (u) {
                            var s = u[3] || t;
                            o.push(s + "()@" + u[2] + ":" + u[1] + " -- " + n[i + 1].replace(/^\s+/, ""))
                        }
                    }
                    return o
                },
                e.prototype.opera9 = function(e) {
                    for (var t = "{anonymous}",
                    r = /Line (\d+).*script (?:in )?(\S+)/i,
                    n = e.message.split("\n"), o = [], i = 2, a = n.length; i < a; i += 2) {
                        var u = r.exec(n[i]);
                        u && o.push(t + "()@" + u[2] + ":" + u[1] + " -- " + n[i + 1].replace(/^\s+/, ""))
                    }
                    return o
                },
                e.prototype.other = function(e) {
                    for (var t, r, n = "{anonymous}",
                    o = /function(?:\s+([\w$]+))?\s*\(/,
                    i = [], a = 10, u = Array.prototype.slice; e && i.length < a;) {
                        t = o.test(e.toString()) ? RegExp.$1 || n: n;
                        try {
                            r = u.call(e.arguments || [])
                        } catch(s) {
                            r = ["Cannot access arguments: " + s]
                        }
                        i[i.length] = t + "(" + this.stringifyArguments(r) + ")";
                        try {
                            e = e.caller
                        } catch(s) {
                            i[i.length] = "Cannot access caller: " + s;
                            break
                        }
                    }
                    return i
                },
                e.prototype.stringifyArguments = function(e) {
                    for (var t = [], r = Array.prototype.slice, n = 0; n < e.length; ++n) {
                        var o = e[n];
                        void 0 === o ? t[n] = "undefined": null === o ? t[n] = "null": o.constructor && (o.constructor === Array ? o.length < 3 ? t[n] = "[" + this.stringifyArguments(o) + "]": t[n] = "[" + this.stringifyArguments(r.call(o, 0, 1)) + "..." + this.stringifyArguments(r.call(o, -1)) + "]": o.constructor === Object ? t[n] = "#object": o.constructor === Function ? t[n] = "#function": o.constructor === String ? t[n] = '"' + o + '"': o.constructor === Number ? t[n] = o: t[n] = "?")
                    }
                    return t.join(",")
                },
                e.prototype.ajax = function(e) {
                    var t = this.createXMLHTTPObject();
                    if (t) try {
                        return t.open("GET", e, !1),
                        t.send(null),
                        t.responseText
                    } catch(r) {}
                    return ""
                },
                e.prototype.createXMLHTTPObject = function() {
                    for (var e, t = [function() {
                        return new XMLHttpRequest
                    },
                    function() {
                        return new ActiveXObject("Msxml2.XMLHTTP")
                    },
                    function() {
                        return new ActiveXObject("Msxml3.XMLHTTP")
                    },
                    function() {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    }], r = 0; r < t.length; r++) try {
                        return e = t[r](),
                        this.createXMLHTTPObject = t[r],
                        e
                    } catch(n) {}
                },
                e.prototype.isSameDomain = function(e) {
                    return "undefined" != typeof location && e.indexOf(location.hostname) !== -1
                },
                e.prototype.getSource = function(e) {
                    return []
                },
                e.prototype.guessAnonymousFunctions = function(e) {
                    for (var t = 0; t < e.length; ++t) {
                        var r = /\{anonymous\}\(.*\)@(.*)/,
                        n = /^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/,
                        o = e[t],
                        i = r.exec(o);
                        if (i) {
                            var a = n.exec(i[1]);
                            if (a) {
                                var u = a[1],
                                s = a[2],
                                c = a[3] || 0;
                                if (u && this.isSameDomain(u) && s) {
                                    var l = this.guessAnonymousFunction(u, s, c);
                                    e[t] = o.replace("{anonymous}", l)
                                }
                            }
                        }
                    }
                    return e
                },
                e.prototype.guessAnonymousFunction = function(e, t, r) {
                    var n;
                    try {
                        n = this.findFunctionName(this.getSource(e), t)
                    } catch(o) {
                        n = "getSource failed with url: " + e + ", exception: " + o.toString()
                    }
                    return n
                },
                e.prototype.findFunctionName = function(e, t) {
                    for (var r, n, o, i = /function\s+([^(]*?)\s*\(([^)]*)\)/,
                    a = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/,
                    u = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/,
                    s = "",
                    c = Math.min(t, 20), l = 0; l < c; ++l) if (r = e[t - l - 1], o = r.indexOf("//"), o >= 0 && (r = r.substr(0, o)), r) {
                        if (s = r + s, n = a.exec(s), n && n[1]) return n[1];
                        if (n = i.exec(s), n && n[1]) return n[1];
                        if (n = u.exec(s), n && n[1]) return n[1]
                    }
                    return "(?)"
                },
                e
            } ()
        } (t = e.Common || (e.Common = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; !
function(e) {
    var t; !
    function(e) {
        var t; !
        function(t) {
            function r(e) {
                void 0 === e && (e = !1),
                t.logToConsole = e,
                console.log && (t.log = console.log.bind(console), t.info = console.info ? console.info.bind(console) : console.log.bind(console), t.warn = console.warn ? console.warn.bind(console) : console.log.bind(console), t.error = console.error ? console.error.bind(console) : console.log.bind(console), t.time = console.time ? console.time.bind(console) : console.log.bind(console), t.timeEnd = console.timeEnd ? console.timeEnd.bind(console) : console.log.bind(console))
            }
            function n(e) {
                t.logContext = e,
                r(e.isDebugMode()),
                window.FO_NATIVE_DEBUG || (t.log = o, t.info = i, t.warn = a, t.error = u, t.time = s, t.timeEnd = c)
            }
            function o(e) {
                l(d.LOG, e)
            }
            function i(e) {
                l(d.INFO, e)
            }
            function a(e) {
                l(d.WARN, e)
            }
            function u(e, r) {
                void 0 === r && (r = t.logContext),
                l(d.ERROR, e, r)
            }
            function s(e) {
                try {
                    t.logToConsole && console.time && console.time(e),
                    t.log("TIMER_START: " + e)
                } catch(r) {}
            }
            function c(e) {
                try {
                    if (t.logToConsole && console.timeEnd && console.timeEnd(e), t.logstack) for (var r = 0; r < t.logstack.length; r++) {
                        var n = t.logstack[r];
                        if (n.msg == "TIMER_START: " + e) {
                            var o = Date.now() - n.time;
                            return t.log("TIMER END: " + e + "(" + o + "ms elapsed)"),
                            o
                        }
                    }
                } catch(i) {}
            }
            function l(e, r, n) {
                void 0 === n && (n = t.logContext);
                try {
                    var o = f();
                    if (t.logToConsole) {
                        var i = m[e];
                        i || (i = function(e) {
                            return console.log(e)
                        });
                        var a = "FO - " + (o ? r + " @ " + o: r);
                        i(a)
                    }
                    t.logstack || (t.logstack = []);
                    var u = {
                        time: Date.now(),
                        level: e,
                        msg: r,
                        source: o
                    };
                    t.logstack.push(u),
                    u.level >= t.callHomeLevel && p(t.logstack, u, n)
                } catch(s) {}
            }
            function f() {
                try {
                    var t = e.Common.printStackTrace(),
                    r = t[6],
                    n = r.match(/^[^@]*/)[0];
                    return "{anonymous}()" == n ? null: n
                } catch(o) {
                    return null
                }
            }
            function p(e, r, n) {
                try {
                    var o = {
                        ex: r.msg,
                        caller: r.source
                    };
                    t.Analytics.notify(n, t.Analytics.EXCEPTION, o, 0)
                } catch(i) {}
            }
            function h() {
                g(t.logstack)
            }
            function g(e) {
                try {
                    if (e) for (var t = 0; t < e.length; t++) {
                        var r = e[t];
                        r.level == d.DEBUG && console.debug(r.msg),
                        r.level == d.LOG && console.log(r.msg),
                        r.level == d.INFO && console.info(r.msg),
                        r.level == d.WARN && console.warn(r.msg),
                        r.level == d.ERROR && console.error(r.msg)
                    }
                } catch(n) {}
            }
            function v(e, r, n) {
                window.setTimeout(function() {
                    for (var n = 0; n < t.logstack.length; n++) {
                        var o = t.logstack[n],
                        i = r(o, t.logstack);
                        if (i) return
                    }
                    t.error("Failure on EXPECT " + e)
                },
                n)
            } !
            function(e) {
                e[e.FATAL = 5e4] = "FATAL",
                e[e.ERROR = 4e4] = "ERROR",
                e[e.WARN = 3e4] = "WARN",
                e[e.INFO = 2e4] = "INFO",
                e[e.LOG = 15e3] = "LOG",
                e[e.DEBUG = 1e4] = "DEBUG",
                e[e.TRACE = 5e3] = "TRACE"
            } (t.LogLevel || (t.LogLevel = {}));
            var d = t.LogLevel,
            m = {
                1e4: function(e) {
                    return console.debug(e)
                },
                15e3: function(e) {
                    return console.log(e)
                },
                2e4: function(e) {
                    return console.info(e)
                },
                3e4: function(e) {
                    return console.warn(e)
                },
                4e4: function(e) {
                    return console.error(e)
                }
            };
            t.callHomeLevel = d.ERROR,
            t.initializeWithoutContext = r,
            t.initialize = n,
            r( !! window.FO_NATIVE_DEBUG),
            t.flushToConsole = h,
            t.expect = v
        } (t = e.Logger || (e.Logger = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; !
function(e) {
    var t; !
    function(e) {
        var t; !
        function(e) {
            var t = function() {
                function t(t, r, n, o) {
                    void 0 === o && (o = null),
                    this._isDebugMode = !1,
                    this.extraParams = {},
                    this.extraParams = {},
                    this._paths = t,
                    this._params = r,
                    this._host = window.location.host,
                    this._isDebugMode = this.determineIsDebugMode(),
                    this._overrides = o ? o: new e.Overrides(this);
                    for (var i in n) this.extraParams[i] = n[i]
                }
                return t.prototype.paths = function() {
                    return this._paths
                },
                t.prototype.params = function() {
                    return this._params
                },
                t.prototype.host = function() {
                    return this._host
                },
                t.prototype.isDebugMode = function() {
                    return this._isDebugMode
                },
                t.prototype.overrides = function() {
                    return this._overrides
                },
                t.prototype.determineIsDebugMode = function() {
                    return !! window.FO_DEBUG
                },
                t.prototype.pushNotificationParam = function(e, t) {
                    this.extraParams[e] = t
                },
                t.prototype.notificationParams = function() {
                    var e = {
                        hn: this.host(),
                        partid: this.params() ? this.params().partnerCode: "",
                        subid: this.params() ? this.params().subId: "",
                        v: "0_0_1109",
                        fam: "nwp",
                        dmn: this.paths().domain(),
                        safepassage: "1"
                    };
                    for (var t in this.extraParams) e[t] = this.extraParams[t];
                    return e
                },
                t
            } ();
            e.BootstrapContext = t
        } (t = e.Context || (e.Context = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; !
function(e) {
    var t; !
    function(e) {
        function t() {
            return (new Date).getTime()
        }
        function r(e) {
            var t = Object.prototype.toString;
            return "[object Array]" == t.call(e)
        }
        function n(t, r) {
            var n = [],
            o = n.concat(t);
            e.Col.of(o).each(r)
        }
        e.now = t,
        e.isArray = r,
        e.forItemOrMany = n
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var __extends = this && this.__extends ||
function(e, t) {
    function r() {
        this.constructor = e
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
},
FO; !
function(e) {
    var t; !
    function(t) {
        var r = function() {
            function e() {}
            return e.from = function(t, r) {
                var n = new e;
                return n.first = t,
                n.second = r,
                n
            },
            e
        } ();
        t.Pair = r,
        function(e) {
            e[e.CONTINUE = 0] = "CONTINUE",
            e[e.BREAK_NODE = 1] = "BREAK_NODE",
            e[e.BREAK_ALL = 2] = "BREAK_ALL"
        } (t.RecursionFlow || (t.RecursionFlow = {}));
        var n = t.RecursionFlow,
        o = function() {
            function t(e) {
                this.source = null,
                this.source = e
            }
            return t.of = function(e) {
                return new t(e)
            },
            t.fromSelector = function(r) {
                return t.ofJQueryElements(e.$(r))
            },
            t.ofJQueryElements = function(e) {
                for (var r = [], n = 0; n < e.length; n++) r.push(e.get(n));
                return new t(r)
            },
            t.ofElements = function(e) {
                for (var r = [], n = 0; n < e.length; n++) r.push(e.item(n));
                return new t(r)
            },
            t.ofNodes = function(e) {
                for (var r = [], n = 0; n < e.length; n++) r.push(e.item(n));
                return new t(r)
            },
            t.empty = function() {
                return new t([])
            },
            t.ofInts = function(e, r) {
                for (var n = [], o = 0; o < r; o++) n.push(e + o);
                return new t(n)
            },
            t.prototype.unique = function() {
                var e = {};
                return new t(this.source.filter(function(t) {
                    var r = "" + t;
                    return ! e.hasOwnProperty(r) && (e[r] = !0)
                }))
            },
            t.prototype.length = function() {
                return this.source.length
            },
            t.prototype.getItem = function(e) {
                return this.source[e]
            },
            t.prototype.each = function(e) {
                i.each(this.source, e)
            },
            t.prototype.select = function(e) {
                return t.of(i.select(this.source, e))
            },
            t.prototype.filterSelect = function(e) {
                return t.of(i.filterSelect(this.source, e))
            },
            t.prototype.slice = function(e, r) {
                for (var n = [], o = e; o < r; o++) n.push(this.source[o]);
                return new t(n)
            },
            t.prototype.stableSort = function(e) {
                function r(e, t) {
                    if (null == e) return [];
                    if (e.length < 2) return e;
                    null == t && (t = n);
                    var i, a, u;
                    return i = ~~ (e.length / 2),
                    a = r(e.slice(0, i), t),
                    u = r(e.slice(i, e.length), t),
                    o(a, u, t)
                }
                function n(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                }
                function o(e, t, r) {
                    for (var n = []; e.length && t.length;) r(e[0], t[0]) <= 0 ? n.push(e.shift()) : n.push(t.shift());
                    return e.length && n.push.apply(n, e),
                    t.length && n.push.apply(n, t),
                    n
                }
                var i = r(this.source, e);
                return t.of(i)
            },
            t.prototype.sort = function(e) {
                var r = this.source.slice(0);
                return r.sort(e),
                t.of(r)
            },
            t.prototype.orderBy = function(e) {
                return this.sort(function(t, r) {
                    return e(t) - e(r)
                })
            },
            t.prototype.orderByDesc = function(e) {
                return this.sort(function(t, r) {
                    return e(r) - e(t)
                })
            },
            t.prototype.where = function(e) {
                return t.of(i.where(this.source, e))
            },
            t.prototype.skip = function(e) {
                if (e >= this.source.length) return new t([]);
                var r = this.source.slice(e);
                return t.of(r)
            },
            t.prototype.take = function(e) {
                var r = this.source.slice(0, e);
                return t.of(r)
            },
            t.prototype.firstOrValue = function(e) {
                return this.source.length ? this.source[0] : e
            },
            t.prototype.first = function(e, t) {
                void 0 === t && (t = null);
                for (var r = 0; r < this.source.length; r++) if (e(this.source[r])) return this.source[r];
                return t
            },
            t.prototype.count = function(e) {
                return i.count(this.source, e)
            },
            t.prototype.any = function(e) {
                return i.any(this.source, e)
            },
            t.prototype.all = function(e) {
                return i.all(this.source, e)
            },
            t.prototype.mergeCol = function(e) {
                var r = this.source.concat(e.source);
                return t.of(r)
            },
            t.prototype.merge = function(e) {
                var r = this.source.concat(e);
                return t.of(r)
            },
            t.prototype.normalize = function(e, t, r, n) {
                if (void 0 === r && (r = 0), void 0 === n && (n = 1), 0 != this.length()) {
                    var o = e(this.minBy(e)),
                    i = e(this.maxBy(e));
                    this.each(function(a) {
                        var u = e(a),
                        s = i > o ? (u - o) / (i - o) : n - r / 2;
                        t(a, s)
                    })
                }
            },
            t.prototype.distinct = function(e) {
                return t.of(i.distinct(this.source, e))
            },
            t.prototype.sum = function(e) {
                return i.aggregate(this.source, 0,
                function(t, r) {
                    return r + e(t)
                })
            },
            t.prototype.avg = function(e) {
                return this.sum(e) / this.source.length
            },
            t.prototype.maxBy = function(e) {
                return i.maxBy(this.source, e)
            },
            t.prototype.minBy = function(e) {
                return this.maxBy(function(t) {
                    return - e(t)
                })
            },
            t.prototype.stringJoin = function(e) {
                return this.source.join(e)
            },
            t.prototype.groupBy = function(e) {
                var t = i.orderedGroupByString(this.source, e);
                return t
            },
            t.prototype.selectTopAndCloseEnough = function(e, t) {
                void 0 === t && (t = .8);
                var r = e(this.maxBy(e));
                return this.where(function(n) {
                    return e(n) / r > t
                })
            },
            t.prototype.multiOrderBy = function(e) {
                for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                for (var i = [this.source], a = 0; a < n.length; a++) {
                    for (var u = n[a], s = [], c = 0; c < i.length; c++) {
                        var l = i[c],
                        f = t.of(l).select(function(e) {
                            return r.from(e, u(e))
                        }).orderBy(function(e) {
                            return e.second
                        }),
                        p = [],
                        h = null;
                        f.each(function(t) {
                            null != h && h / t.second >= e ? p.push(t.first) : (p.length && s.push(p), p = [t.first], h = t.second)
                        }),
                        p.length && s.push(p)
                    }
                    i = s
                }
                return t.of(i).selectMany(function(e) {
                    return e
                })
            },
            t.prototype.selectMany = function(e) {
                var r = [];
                return this.each(function(t) {
                    return r = r.concat(e(t))
                }),
                t.of(r)
            },
            t.prototype.selectFirst = function(e, t) {
                void 0 === t && (t = function(e) {
                    return !! e
                });
                for (var r = 0; r < this.source.length; r++) {
                    var n = e(this.source[r]);
                    if (t(n)) return n
                }
                return null
            },
            t.prototype.toMap = function(e, t) {
                var r = this.select(function(r, n) {
                    return {
                        key: e(r, n),
                        value: t(r, n)
                    }
                });
                return new a(r.toArray())
            },
            t.prototype.toHashmap = function(e) {
                return i.toHashmap(this.source, e)
            },
            t.prototype.toHashmap2 = function(e, t) {
                return i.toHashmap2(this.source, e, t)
            },
            t.prototype.toArray = function() {
                return this.source
            },
            t.prototype.append = function(e) {
                return this.source[this.source.length] = e,
                this
            },
            t
        } ();
        t.Col = o;
        var i = function() {
            function e() {}
            return e.count = function(e, t) {
                for (var r = 0,
                n = 0; n < e.length; n++) t(e[n]) && r++;
                return r
            },
            e.any = function(e, t) {
                for (var r = 0; r < e.length; r++) if (t(e[r])) return ! 0;
                return ! 1
            },
            e.all = function(e, t) {
                for (var r = 0; r < e.length; r++) if (!t(e[r])) return ! 1;
                return ! 0
            },
            e.each = function(e, t) {
                for (var r = 0; r < e.length; r++) t(e[r], r)
            },
            e.hashEach = function(e, t) {
                for (var r in e) e.hasOwnProperty(r) && t(r, e[r])
            },
            e.hashFirst = function(e, t) {
                for (var r in e) if (e.hasOwnProperty(r) && t(r, e[r])) return e[r]
            },
            e.rand = function(e, t) {
                function r(e) {
                    for (var t, r, n = e.length; n;) r = Math.floor(Math.random() * n--),
                    t = e[n],
                    e[n] = e[r],
                    e[r] = t;
                    return e
                }
                for (var n = [], o = 0; o < e.length; o++) {
                    var i = t(e[o], o);
                    n.push(i)
                }
                return r(n)
            },
            e.select = function(e, t) {
                for (var r = [], n = 0; n < e.length; n++) {
                    var o = t(e[n], n);
                    r.push(o)
                }
                return r
            },
            e.where = function(e, t) {
                for (var r = [], n = 0; n < e.length; n++) {
                    var o = t(e[n]);
                    o && r.push(e[n])
                }
                return r
            },
            e.filterSelect = function(e, t) {
                for (var r = [], n = 0; n < e.length; n++) {
                    var o = t(e[n], n);
                    null != o && r.push(o)
                }
                return r
            },
            e.flatMap = function(e) {
                for (var t = [], r = 0; r < e.length; r++) t = t.concat(e[r]);
                return t
            },
            e.distinct = function(e, t) {
                for (var r = {},
                n = [], o = 0; o < e.length; o++) {
                    var i = e[o],
                    a = t(i);
                    a in r || (r[t(i)] = !0, n.push(i))
                }
                return n
            },
            e.exclude = function(e, t) {
                for (var r = [], n = 0; n < e.length; n++) {
                    for (var o = !1,
                    i = 0; i < t.length; n++) if (e[n].toLowerCase() == t[i].toLowerCase()) {
                        o = !0;
                        break
                    }
                    o || r.push(e[n])
                }
                return r
            },
            e.contains = function(e, t) {
                for (var r = 0; r < e.length; r++) if (e[r].toLowerCase() == t.toLowerCase()) return ! 0;
                return ! 1
            },
            e.groupByString = function(e, t) {
                for (var r = {},
                n = 0; n < e.length; n++) {
                    var o = e[n],
                    i = t(o);
                    i in r || (r[i] = []),
                    r[i].push(o)
                }
                return r
            },
            e.orderedGroupByString = function(e, t) {
                for (var r = {},
                n = [], o = 0; o < e.length; o++) {
                    var i = e[o],
                    u = t(i);
                    u in r || (n.push({
                        key: u,
                        value: []
                    }), r[u] = n.length - 1);
                    var s = r[u];
                    n[s].value.push(i)
                }
                return new a(n)
            },
            e.hashSelect = function(e, t) {
                var r = {};
                for (var n in e) e.hasOwnProperty(n) && (r[n] = t(e[n]));
                return r
            },
            e.aggregate = function(e, t, r) {
                for (var n = t,
                o = 0; o < e.length; o++) n = r(e[o], n);
                return n
            },
            e.hashAggregate = function(e, t, r) {
                var n = t;
                for (var o in e) if (e.hasOwnProperty(o)) {
                    var i = e[o];
                    n = r(o, i, n)
                }
                return n
            },
            e.sum = function(t, r) {
                return e.aggregate(t, 0,
                function(e, t) {
                    return t + r(e)
                })
            },
            e.hashSum = function(t, r) {
                return e.hashAggregate(t, 0,
                function(e, t, n) {
                    return n + r(e, t)
                })
            },
            e.values = function(e) {
                var t = [];
                for (var r in e) e.hasOwnProperty(r) && t.push(e[r]);
                return t
            },
            e.numValues = function(e) {
                var t = [];
                for (var r in e) e.hasOwnProperty(r) && t.push(e[r]);
                return t
            },
            e.maxBy = function(e, t) {
                for (var r = null,
                n = null,
                o = 0; o < e.length; o++) {
                    var i = t(e[o]); (null == r || i > r) && (r = i, n = e[o])
                }
                return n
            },
            e.intersect = function(e, t) {
                for (var r = [], n = 0; n < e.length; n++) for (var o = 0; o < t.length; o++) if (e[n] == t[o]) {
                    r.push(e[n]);
                    break
                }
                return r
            },
            e.getKeys = function(e) {
                var t = [];
                for (var r in e) e.hasOwnProperty(r) && t.push(r);
                return t
            },
            e.toArray = function(e, t) {
                var r = [];
                for (var n in e) if (e.hasOwnProperty(n)) {
                    var o = e[n],
                    i = t(n, o);
                    r.push(i)
                }
                return r
            },
            e.valuesCol = function(e) {
                var t = [];
                for (var r in e) e.hasOwnProperty(r) && t.push(e[r]);
                return o.of(t)
            },
            e.toHashmap = function(t, r) {
                return e.toHashmap2(t, r,
                function(e) {
                    return e
                })
            },
            e.toHashmap2 = function(e, t, r) {
                for (var n = {},
                o = 0; o < e.length; o++) {
                    var i = e[o],
                    a = r(i),
                    u = t(i);
                    n[u] = a
                }
                return n
            },
            e.join = function(e, t, r) {
                for (var n = [], o = 0; o < e.length; o++) for (var i = e[o], a = 0; a < t.length; a++) {
                    var u = t[a],
                    s = r(i, u);
                    null != s && n.push(s)
                }
                return n
            },
            e.joinByString = function(e, t, r, n) {
                for (var i = {},
                a = [], u = 0; u < e.length; u++) {
                    var s = r(e[u]);
                    i[s] = e[u]
                }
                for (var u = 0; u < t.length; u++) {
                    var s = n(t[u]);
                    s in i && a.push({
                        first: i[s],
                        second: t[u]
                    })
                }
                return o.of(a)
            },
            e.overrideHashMerge = function(t, r) {
                return e.hashMerge(t, r, e.secondOverridesHashMergeDefaultConflictFn)
            },
            e.hashMerge = function(t, r, n) {
                void 0 === n && (n = e.hashMergeDefaultConflictFn);
                var o = {};
                return e.hashEach(t,
                function(e, t) {
                    return o[e] = t
                }),
                e.hashEach(r,
                function(e, t) {
                    e in o ? o[e] = n(e, o[e], t) : o[e] = t
                }),
                o
            },
            e.secondOverridesHashMergeDefaultConflictFn = function(e, t, r) {
                return r
            },
            e.hashMergeDefaultConflictFn = function(e, t, r) {
                throw new Error("Conflict on hash merge. Key: " + e + ". First: " + t + ". Second: " + r)
            },
            e.recurseElements = function(t, r, o) {
                void 0 === o && (o = null);
                var i = r(t, o);
                if (i == n.BREAK_NODE || i == n.BREAK_ALL) return i;
                for (var a = 0; a < t.children.length; a++) {
                    var u = t.children.item(a),
                    s = e.recurseElements(u, r);
                    if (s == n.BREAK_ALL) return n.BREAK_ALL
                }
                return i
            },
            e.recurseNodes = function(t, r, o) {
                void 0 === o && (o = null);
                var i = r(t, o);
                if (i == n.BREAK_NODE || i == n.BREAK_ALL) return i;
                for (var a = 0; a < t.childNodes.length; a++) {
                    var u = t.childNodes.item(a),
                    s = e.recurseNodes(u, r);
                    if (s == n.BREAK_ALL) return n.BREAK_ALL
                }
                return i
            },
            e.repeatString = function(e, t) {
                for (var r = [], n = 0; n < t; n++) r.push(e);
                return r
            },
            e.recurseSelectElements = function(t, r, o, i) {
                var a = r(t),
                u = a[0],
                s = a[1];
                if (u == n.CONTINUE) for (var c = 0; c < t.children.length; c++) {
                    var l = t.children.item(c);
                    if (!i || !i.containsKey(l.localName.toLowerCase())) {
                        var f = e.recurseSelectElements(l, r, o, i),
                        p = f[0],
                        h = f[1];
                        if (s = o(t, s, h), p == n.BREAK_ALL) {
                            u = n.BREAK_ALL;
                            break
                        }
                    }
                }
                return [u, s]
            },
            e.recurseSelect = function(t, r) {
                var n = [];
                return o.ofElements(t.children).each(function(t) {
                    var o = r(t),
                    i = e.recurseSelect(t, r);
                    if (o) {
                        var a = new u(o, i);
                        n.push(a)
                    } else n = n.concat(i)
                }),
                n
            },
            e.recurseSelectElements2 = function(t, r, o) {
                var i = r(t),
                a = i[0],
                u = i[1],
                s = [];
                if (a == n.CONTINUE) for (var c = 0; c < t.children.length; c++) {
                    var l = t.children.item(c),
                    f = e.recurseSelectElements2(l, r, o),
                    p = f[0];
                    if (null != f[1] && s.push(f[1]), p == n.BREAK_ALL) {
                        a = n.BREAK_ALL;
                        break
                    }
                }
                var h = null == u && 0 == s.length ? null: o(u, s);
                return [a, h]
            },
            e
        } ();
        t.StaticCol = i;
        var a = function(e) {
            function t(t) {
                e.call(this, t)
            }
            return __extends(t, e),
            t.ofHash = function(e) {
                var r = [];
                for (var n in e) e.hasOwnProperty(n) && r.push({
                    key: n,
                    value: e[n]
                });
                return new t(r)
            },
            t.ofUrlString = function(e) {
                return t.ofHashString(e, "&", "=",
                function(e) {
                    return decodeURIComponent(e)
                })
            },
            t.ofHashString = function(e, r, n, i) {
                var a = o.of(e.split(r)),
                u = a.select(function(e) {
                    var t = e.split(n),
                    r = t[0],
                    o = t[1],
                    a = i(o);
                    return {
                        key: r,
                        value: a
                    }
                }).toArray();
                return new t(u)
            },
            t.emptyMap = function() {
                return t.ofHash({})
            },
            t.prototype.get = function(e) {
                var t = this.first(function(t) {
                    return t.key == e
                });
                return t ? t.value: null
            },
            t.prototype.containsKey = function(e) {
                var t = this.first(function(t) {
                    return t.key == e
                });
                return !! t
            },
            t.prototype.keys = function() {
                return this.select(function(e) {
                    return e.key
                })
            },
            t.prototype.values = function() {
                return this.select(function(e) {
                    return e.value
                })
            },
            t.prototype.selectValues = function(e) {
                var r = this.select(function(t) {
                    return {
                        key: t.key,
                        value: e(t)
                    }
                });
                return new t(r.toArray())
            },
            t.prototype.add = function(e, t) {
                return this.append({
                    key: e,
                    value: t
                }),
                this
            },
            t.prototype.toHash = function() {
                var e = {};
                return this.each(function(t) {
                    return e[t.key] = t.value
                }),
                e
            },
            t
        } (o);
        t.Map = a;
        var u = function() {
            function e(e, t) {
                void 0 === t && (t = []),
                this.children = [],
                this.value = e,
                this.children = t
            }
            return e.prototype.each = function(e) {
                e(this.value),
                o.of(this.children).each(function(t) {
                    return t.each(e)
                })
            },
            e.prototype.select = function(e) {
                return o.of(this.selectArray(e))
            },
            e.prototype.selectArray = function(e) {
                var t = e(this.value),
                r = o.of(this.children).selectMany(function(t) {
                    return t.selectArray(e)
                }).toArray();
                return [t].concat(r)
            },
            e.prototype.dump = function(e) {
                void 0 === e && (e = 0),
                console.log(i.repeatString("  ", e), this.value),
                o.of(this.children).each(function(t) {
                    return t.dump(e + 1)
                })
            },
            e.prototype.toString = function(e) {
                void 0 === e && (e = 0);
                var t = o.of(this.children).select(function(t) {
                    return t.toString(e + 1)
                }).toArray().join("\n"),
                r = i.repeatString("  ", e) + this.value.toString();
                return r + t
            },
            e
        } ();
        t.TreeNode = u
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; !
function(e) {
    var t; !
    function(t) {
        function r(e, t) {
            return {
                name: e,
                value: t
            }
        }
        function n(e, t) {
            return t.then(function(t) {
                return r(e, t)
            })
        }
        function o(e, r) {
            void 0 === r && (r = 0);
            var n = t.Map.ofHash(e),
            o = n.toHashmap2(function(e) {
                return e.key
            },
            function(e) {
                return ! 0
            }),
            i = {},
            a = t.defer();
            return 0 == n.length() && a.resolve({}),
            r > 0 && setTimeout(function() {
                if (a.getStatus() == t.Status.Unfulfilled) {
                    var e = t.StaticCol.getKeys(o).join(", ");
                    a.reject({
                        message: "Timed out after " + r + ": " + e
                    })
                }
            },
            r),
            n.each(function(e) {
                e.value.done(function(r) {
                    i[e.key] = r,
                    delete o[e.key],
                    0 == t.StaticCol.getKeys(o).length && a.getStatus() == t.Status.Unfulfilled && a.resolve(i)
                }).fail(function(r) {
                    a.getStatus() == t.Status.Unfulfilled && a.reject({
                        message: e.key + ": " + r.message
                    })
                })
            }),
            a.promise()
        }
        function i(e, t) {
            void 0 === t && (t = !1);
            var r = [];
            for (var n in e) {
                var o = s(n, e[n]);
                r.push(o)
            }
            return u(r, t)
        }
        function a(e, t) {
            void 0 === t && (t = !1);
            var r = [];
            for (var n in e) {
                var o = s(n, e[n]);
                r.push(o)
            }
            return u(r, t)
        }
        function u(e, r) {
            void 0 === r && (r = !1);
            var n = t.defer(),
            o = e.length,
            i = {};
            if (0 == o) return n.resolve({}),
            n.promise();
            for (var a = 0; a < e.length; a++) {
                var u = e[a];
                u.done(function(e) {
                    i[e.name] = e.value,
                    t.StaticCol.getKeys(i).length == o && n.resolve(i)
                }).fail(function(e) {
                    if (r) {
                        t.Logger.warn("Continuing ofter inner error: " + e.message);
                        var o = "" + Math.random();
                        i[o] = null
                    } else n.getStatus() !== t.Status.Rejected && n.reject(e)
                })
            }
            return n.promise()
        }
        function s(e, t) {
            return t.then(function(t) {
                return {
                    name: e,
                    value: t
                }
            })
        }
        function c(r, n, o, i) {
            void 0 === n && (n = 2e4),
            void 0 === o && (o = !1),
            void 0 === i && (i = "text");
            var a = t.defer(),
            u = {
                dataType: i,
                timeout: n
            };
            return o && (u.xhrFields = {
                withCredentials: !0
            }),
            e.$.ajax(r, u).done(function(e) {
                a.resolve(e)
            }).fail(function(e, n, o) {
                var i = o && o.message || "error" != n && n || e.status || e.responseText || "generic error";
                t.Logger.warn("First level error on jqGet '" + r + "': " + i),
                a.reject({
                    message: i
                })
            }),
            a.promise()
        }
        function l(e, r, n) {
            void 0 === n && (n = 2e4);
            var o = t.defer();
            if ("WebSocket" in window) {
                var i = new WebSocket(r);
                i.onmessage = function(e) {
                    o.resolve(e.data)
                },
                i.onopen = function() {
                    0 == e.indexOf("//") && (e = "http:" + e),
                    i.send(e)
                },
                setTimeout(function() {
                    o.getStatus() == t.Status.Unfulfilled && o.reject({
                        message: "WebSocket request " + e + " timed out after " + n + "ms"
                    })
                },
                n)
            } else o.reject({
                message: "no WebSockets"
            });
            return o.promise()
        }
        t.toNamed = r,
        t.toNamedPromise = n,
        t.namedWhenX = o,
        t.namedWhen3 = i,
        t.namedWhen2 = a,
        t.namedWhen = u,
        t.namePromise = s,
        t.jqGetPromise = c,
        t.webSocketPromise = l
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; !
function(e) {
    var t; !
    function(e) {
        function t() {
            return new L
        }
        function r(e) {
            return t().resolve(e).promise()
        }
        function n(e) {
            return t().reject(e).promise()
        }
        function o(e, r) {
            var n = t(),
            o = new Array;
            return i(o, n, e, r),
            n.promise()
        }
        function i(e, t, r, n) {
            var o = r(n);
            if (!o) return void t.resolve(e);
            for (; o.next && o.promise.getStatus() == b.Resolved;) if (e.push(o.promise.getResult()), o = r(o.next), !o) return void t.resolve(e);
            o.promise.done(function(n) {
                e.push(n),
                o.next ? i(e, t, r, o.next) : t.resolve(e)
            }).fail(function(e) {
                t.reject(e)
            })
        }
        function a(e) {
            return s(function() {
                return ! 0
            },
            Number.MAX_VALUE, e, !1)
        }
        function u(e, r) {
            void 0 === r && (r = Number.MAX_VALUE);
            var n = t(),
            o = !1;
            return window.setTimeout(function() {
                o || (o = !0, n.reject({
                    message: "Timed out after " + r
                }))
            }),
            e(function(e) {
                o || (o = !0, n.resolve(e))
            }),
            n.promise()
        }
        function s(e, r, n, o) {
            void 0 === r && (r = 0),
            void 0 === n && (n = 500),
            void 0 === o && (o = !0);
            var i = t(),
            a = Date.now(),
            u = function() {
                var t = Date.now() - a;
                if (r > 0 && t >= r) clearInterval(s),
                i.reject(Error("Timed out after " + t));
                else {
                    var n = e();
                    "undefined" != typeof n && null != n && (clearInterval(s), i.resolve(n))
                }
            },
            s = setInterval(u, n);
            return o && u(),
            i.promise()
        }
        function c() {
            for (var e = [], r = 0; r < arguments.length; r++) e[r - 0] = arguments[r];
            var n = t();
            if (!e.length) return n.resolve([]),
            n.promise();
            for (var o = 0,
            i = [], a = 0; a < e.length; a++) {
                var u = e[a];
                u.done(function(t) {
                    i.push(t),
                    ++o,
                    o === e.length && n.getStatus() !== b.Rejected && n.resolve(i)
                }).fail(function(e) {
                    n.getStatus() !== b.Rejected && n.reject(e)
                })
            }
            return n.promise()
        }
        function l(r, n) {
            void 0 === n && (n = !1);
            var o = t();
            if (!r.length) return o.resolve([]),
            o.promise();
            for (var i = 0,
            a = [], u = 0; u < r.length; u++) {
                var s = r[u];
                s.done(function(e) {
                    a.push(e),
                    ++i,
                    i === r.length && o.getStatus() !== b.Rejected && o.resolve(a)
                }).fail(function(t) {
                    n ? (e.Logger.warn("Continuing after inner error: " + t.message), ++i) : o.getStatus() !== b.Rejected && o.reject(t)
                })
            }
            return o.promise()
        }
        function f(e, r, n, o, i, a) {
            void 0 === a && (a = 6e4);
            var u = t(),
            s = (new Date).getTime(),
            c = null,
            l = 0,
            f = setInterval(function() {
                var t = (new Date).getTime();
                if (t - s >= a) clearInterval(f),
                u.reject({
                    message: "Timed out after " + (t - s)
                });
                else try {
                    var o = e();
                    o == c ? t - s >= i && (clearInterval(f), u.resolve(o)) : r(o) && (n(o), c = o, l = t)
                } catch(p) {
                    u.reject(p)
                }
            },
            o);
            return u.promise()
        }
        function p(e, t, o, i, u) {
            if (void 0 === i && (i = 2), void 0 === u && (u = 0), u && u > o) return n({
                message: "Exponential interval timed out"
            });
            var s = a(o).then(function() {
                var n = e(),
                a = t(n);
                return a ? r(n) : p(e, t, o * i, i)
            });
            return s
        }
        function h(e, r, n, o) {
            void 0 === n && (n = function(e) {
                return ! 1
            }),
            void 0 === o && (o = 2);
            var i, a = t(),
            u = r;
            try {
                var s;
                s = function() {
                    var t = e();
                    u *= o,
                    n(t) ? a.resolve(t) : i = setTimeout(s, u)
                },
                i = setTimeout(s, r)
            } catch(c) {
                a.reject(c)
            }
            return a.promise()
        }
        function g(e, t, r) {
            void 0 === r && (r = 100);
            var n;
            window.addEventListener(t,
            function() {
                clearTimeout(n),
                n = setTimeout(e, r)
            })
        }
        function v(e, r) {
            void 0 === r && (r = 0);
            var n = t(),
            o = null,
            i = !1;
            r > 0 && (o = setTimeout(function() {
                i || (i = !0, n.reject({
                    message: "Timedout after " + r
                }))
            },
            r));
            var a = function(e) {
                i || (i = !0, clearTimeout(o), n.resolve(e))
            };
            try {
                e(a)
            } catch(u) {
                i || (i = !0, clearTimeout(o), n.reject(u))
            }
            return n.promise()
        }
        function d(e, r, n) {
            void 0 === n && (n = null);
            var o = t();
            return e.done(function(e) {
                return o.getStatus() == b.Unfulfilled && o.resolve(e)
            }),
            e.fail(function(e) {
                return o.getStatus() == b.Unfulfilled && o.reject(e)
            }),
            setTimeout(function() {
                o.getStatus() == b.Unfulfilled && (null == n ? o.reject({
                    message: "Timed out after " + r
                }) : o.resolve(n))
            },
            r),
            o.promise()
        }
        function m(t, n) {
            void 0 === n && (n = function(e) {
                return !! e
            });
            var o = r(null);
            return e.Col.of(t).each(function(e) {
                o = o.then(function(t) {
                    return n(t) ? r(t) : e()
                })
            }),
            o
        }
        function y(e, t, n) {
            void 0 === t && (t = function(e) {
                return ! 0
            }),
            void 0 === n && (n = null);
            for (var o = r(null), i = 0; i < e.length; i++) {
                var a = S(e[i], t, i + 1, n);
                o = o.alwaysThen(a)
            }
            return o
        }
        function S(t, n, o, i) {
            void 0 === i && (i = null);
            var a = function(o, a, u) {
                return ! u && null != a && n(a.value) ? r(a) : (i && e.Logger.time(i + "." + t.name), t.value(o).then(function(r) {
                    return i && e.Logger.timeEnd(i + "." + t.name),
                    {
                        name: t.name,
                        value: r
                    }
                }))
            };
            return w(a, o)
        }
        function _(e, t) {
            return function() {
                return e(t)
            }
        }
        function E(e, t) {
            return function(r) {
                return e(t, r)
            }
        }
        function w(e, t) {
            return function(r, n) {
                return e(t, r, n)
            }
        }
        function O(e, t) {
            return function(r, n, o) {
                return e(t, r, n, o)
            }
        }
        function F(e, t) {
            void 0 === t && (t = 1);
            for (var r = n({
                message: "initial state"
            }), o = 0; o < t; o++) r = r.alwaysThen(R(e, o));
            return r
        }
        function R(e, t) {
            return void 0 === t && (t = 1),
            function(n, o) {
                return o ? e(t) : r(n)
            }
        }
        function A(e) {
            return function() {
                return C(e())
            }
        }
        function C(e) {
            return new D(e)
        }
        function I(e, r) {
            var n = t();
            return T(n, e(), r),
            n.promise()
        }
        function T(e, t, r) {
            t.advance().done(function(n) {
                return n ? (r(t.current), void T(e, t, r)) : void e.resolve({})
            }).fail(function(t) {
                return e.reject(t)
            })
        }
        function N(e) {
            return "undefined" == typeof e
        }
        e.defer = t,
        e.resolve = r,
        e.reject = n,
        e.unfold = o,
        function(e) {
            e[e.Unfulfilled = 0] = "Unfulfilled",
            e[e.Rejected = 1] = "Rejected",
            e[e.Resolved = 2] = "Resolved"
        } (e.Status || (e.Status = {}));
        var b = e.Status;
        e.wait = a,
        e.waitForEvent = u,
        e.waitFor = s,
        e.when = c,
        e.typedWhen = l,
        e.waitForStable = f,
        e.setExponentialInterval2 = p,
        e.setExponentialInterval = h,
        e.stableAddEventListener = g,
        e.promiseFromCallback = v,
        e.withTimeout = d,
        e.waterfall = m,
        e.namedWaterfall = y,
        e.lambda1 = _,
        e.lambda2 = E,
        e.lambda3 = w,
        e.lambda4 = O,
        e.retryPromise = F;
        var k = function() {
            function t(e) {
                this.deferred = e
            }
            return t.prototype.getStatus = function() {
                return this.deferred.getStatus()
            },
            t.prototype.getResult = function() {
                return this.deferred.getResult()
            },
            t.prototype.getError = function() {
                return this.deferred.getError()
            },
            t.prototype.done = function(e) {
                return this.deferred.done(e),
                this
            },
            t.prototype.fail = function(e) {
                return this.deferred.fail(e),
                this
            },
            t.prototype.always = function(e) {
                return this.deferred.always(e),
                this
            },
            t.prototype.alwaysThen = function(e) {
                return this.deferred.alwaysThen(e)
            },
            t.prototype.then = function(e) {
                return this.deferred.then(e)
            },
            t.prototype.logPassthrough = function(t) {
                return this.then(function(r) {
                    return "string" == typeof r || r instanceof String ? e.Logger.log(t + ": " + r) : e.Logger.log(t + ": " + JSON3.stringify(r)),
                    r
                })
            },
            t
        } (),
        L = function() {
            function r() {
                this._resolved = function(e) {},
                this._rejected = function(e) {},
                this._status = b.Unfulfilled,
                this._error = {
                    message: ""
                },
                this._promise = new k(this)
            }
            return r.prototype.promise = function() {
                return this._promise
            },
            r.prototype.getStatus = function() {
                return this._status
            },
            r.prototype.getResult = function() {
                if (this._status != b.Resolved) throw new Error("Promise: result not available");
                return this._result
            },
            r.prototype.getError = function() {
                if (this._status != b.Rejected) throw new Error("Promise: rejection reason not available");
                return this._error
            },
            r.prototype.thenOld = function(e) {
                var r = t();
                return this.done(function(t) {
                    var n = e(t);
                    if (n && "function" == typeof n.done && n.deferred) {
                        var o = n;
                        return o.done(function(e) {
                            return r.resolve(e)
                        }).fail(function(e) {
                            return r.reject(e)
                        }),
                        o
                    }
                    r.resolve(n)
                }).fail(function(e) {
                    return r.reject(e)
                }),
                r.promise()
            },
            r.prototype.then = function(r) {
                var n = t();
                return this.done(function(t) {
                    var o = null;
                    try {
                        o = r(t)
                    } catch(i) {
                        return window.FO_NATIVE_DEBUG && console.warn(i),
                        e.Logger.warn("First level error: " + i.message + " @ " + r),
                        void n.reject(i)
                    }
                    if (o && "function" == typeof o.done && o.deferred) {
                        var a = o;
                        return a.done(function(e) {
                            return n.resolve(e)
                        }).fail(function(e) {
                            return n.reject(e)
                        }),
                        a
                    }
                    n.resolve(o)
                }).fail(function(e) {
                    return n.reject(e)
                }),
                n.promise()
            },
            r.prototype.alwaysThen = function(r) {
                var n = t(),
                o = function(t, o) {
                    var i = null;
                    try {
                        i = r(t, o)
                    } catch(a) {
                        return e.Logger.warn("First level error: " + a.message + " @ " + r),
                        void n.reject(a)
                    }
                    if (i && "function" == typeof i.done && i.deferred) {
                        var u = i;
                        return u.done(function(e) {
                            return n.resolve(e)
                        }).fail(function(e) {
                            return n.reject(e)
                        }),
                        u
                    }
                    n.resolve(i)
                };
                return this.done(function(e) {
                    return o(e, null)
                }).fail(function(e) {
                    return o(null, e)
                }),
                n.promise()
            },
            r.prototype.done = function(e) {
                if (this.getStatus() === b.Resolved) return e(this._result),
                this;
                if (this.getStatus() !== b.Unfulfilled) return this;
                var t = this._resolved;
                return this._resolved = function(r) {
                    t(r),
                    e(r)
                },
                this
            },
            r.prototype.fail = function(e) {
                if (this.getStatus() === b.Rejected) return e(this._error),
                this;
                if (this.getStatus() !== b.Unfulfilled) return this;
                var t = this._rejected;
                return this._rejected = function(r) {
                    t(r),
                    e(r)
                },
                this
            },
            r.prototype.always = function(e) {
                return this.done(function(t) {
                    return e(t)
                }).fail(function(t) {
                    return e(null, t)
                }),
                this
            },
            r.prototype.resolve = function(e) {
                if (this._status !== b.Unfulfilled) throw new Error("tried to resolve a fulfilled promise");
                return this._result = e,
                this._status = b.Resolved,
                this._resolved(e),
                this.detach(),
                this
            },
            r.prototype.reject = function(e) {
                if (this._status !== b.Unfulfilled) throw new Error("tried to reject a fulfilled promise");
                return this._error = e,
                this._status = b.Rejected,
                this._rejected(e),
                this.detach(),
                this
            },
            r.prototype.detach = function() {
                this._resolved = function(e) {},
                this._rejected = function(e) {}
            },
            r
        } ();
        e.generator = A,
        e.iterator = C;
        var D = function() {
            function e(e) {
                this.f = e,
                this.current = void 0
            }
            return e.prototype.advance = function() {
                var e = this,
                t = this.f();
                return t.then(function(t) {
                    return ! N(t) && (e.current = t, !0)
                })
            },
            e
        } ();
        e.each = I,
        e.isUndefined = N
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; !
function(e) {
    var t; !
    function(e) {
        var t; !
        function(t) {
            var r = function() {
                function t(e, t, r) {
                    this.iframe = e,
                    this.favoriteMerchants = t,
                    this.context = r
                }
                return t.fromAsyncStorePromise = function(r, n) {
                    return r.retrieve(t.FAVORITE_MERCHANTS_LOCALS_KEY).alwaysThen(function(o, i) {
                        if (i) return e.Logger.warn("Failed getting real favoriteMerchant - ignoring favorite merchants: " + (i && i.message)),
                        null;
                        try {
                            var a;
                            return a = null != o && "" != o ? new e.Map(o.source) : e.Map.emptyMap(),
                            new t(r, a, n)
                        } catch(u) {
                            e.Logger.error("favorite merchant stuff: [" + (u && u.message) + "]")
                        }
                    })
                },
                t.prototype.saveMerchant = function(t) {
                    try {
                        this.favoriteMerchants && (this.favoriteMerchants.containsKey(t) || this.favoriteMerchants.add(t, {
                            counter: 0,
                            lastModified: 0
                        }), this.favoriteMerchants.get(t).counter++, this.favoriteMerchants.get(t).lastModified = (new Date).getTime(), this.storeFavoriteMerchants(this.favoriteMerchants))
                    } catch(r) {
                        e.Logger.error("favorite merchant error: [" + (r && r.message) + "] in saveMerchant")
                    }
                },
                t.prototype.updateCookies = function() {
                    if (this.favoriteMerchants) {
                        var e = (new Date).getTime() - this.context.overrides().intValue("favoriteMerchantMaxTime", 2592e3);
                        this.favoriteMerchants = this.favoriteMerchants.where(function(t) {
                            return t.value.lastModified > e
                        }),
                        this.storeFavoriteMerchants(this.favoriteMerchants);
                        var r = this.favoriteMerchants.orderByDesc(function(e) {
                            return e.value.counter
                        }),
                        n = r.take(this.context.overrides().intValue("topFavoriteMerchants", 3)),
                        o = n.select(function(e) {
                            return e.key
                        });
                        this.iframe.postRequest("storeCookie", !1, t.FAVORITE_MERCHANTS_COOKIE_KEY, o.toArray())
                    }
                },
                t.prototype.storeFavoriteMerchants = function(e) {
                    this.iframe.store(t.FAVORITE_MERCHANTS_LOCALS_KEY, e)
                },
                t.FAVORITE_MERCHANTS_LOCALS_KEY = "merchants",
                t.FAVORITE_MERCHANTS_COOKIE_KEY = "favm",
                t
            } ();
            t.FavoriteMerchants = r
        } (t = e.Common || (e.Common = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; !
function(e) {
    var t; !
    function(e) {
        var t; !
        function(t) {
            var r = function() {
                function t() {}
                return t.getCookie = function(e) {
                    for (var t = e + "=",
                    r = document.cookie.split(";"), n = 0; n < r.length; n++) {
                        for (var o = r[n];
                        " " == o.charAt(0);) o = o.substring(1);
                        if (o.indexOf(t) != -1) return o.substring(t.length, o.length)
                    }
                    return ""
                },
                t.setCookie = function(e, t, r, n) {
                    var o = "";
                    r && (new Date((new Date).getTime() + 24 * r * 60 * 60 * 1e3).toUTCString(), o = "; expires=" + new Date((new Date).getTime() + 24 * r * 60 * 60 * 1e3).toUTCString());
                    var i = "";
                    n && (i = "; domain=" + n),
                    document.cookie = e + "=" + t + o + "; path=/" + i
                },
                t.setBackendClickCookie = function(t, r) {
                    void 0 === r && (r = {});
                    try {
                        var n = t.paths().notifyRoot() + "/c/clk/logo.png",
                        o = t.paths().domain();
                        if (n += "?", n = n + "&domain=" + encodeURIComponent(o), r) for (var i in r) {
                            var a = r[i] + "";
                            n = n + "&" + i + "=" + encodeURIComponent(a)
                        }
                        e.Logger.Analytics.notifyGenericUrl(n)
                    } catch(u) {}
                },
                t.serverSetCookie = function(t, r, n) {
                    var o = "//" + n + "/cookie/set?type=json&action=appand";
                    e.Logger.Analytics.notifyGenericUrl(o, {
                        key: t,
                        value: r,
                        t: (new Date).getTime().toString()
                    })
                },
                t
            } ();
            t.CookieUtils = r
        } (t = e.Common || (e.Common = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; !
function(e) {
    var t; !
    function(t) {
        var r; !
        function(r) {
            var n = function() {
                function n() {}
                return n.storeImpressionKeywords = function(e, t, r) {
                    void 0 === r && (r = ""),
                    n.storeKeywords(e, t, n.RT_IMPRESSIONS_KEY, r)
                },
                n.storeClickKeywords = function(e, t, o) {
                    void 0 === o && (o = "");
                    var i = n.storeKeywords(e, t, n.RT_CLICKS_KEY, o);
                    r.CookieUtils.setBackendClickCookie(e, {
                        clk: i
                    })
                },
                n.storeKeywords = function(e, n, o, i) {
                    var a = localStorage.getItem(o),
                    u = a ? JSON3.parse(a) : [],
                    s = {
                        keywords: n.split(" "),
                        when: (new Date).getTime()
                    };
                    return "api-product-boxes" != i && "api-schema" !== i && "api-og" !== i || r.CookieUtils.serverSetCookie(o, JSON3.stringify(s), e.paths().apiRoot()),
                    u.push(s),
                    u = t.Col.of(u).orderBy(function(e) {
                        return e.when
                    }).take(10).toArray(),
                    a = JSON3.stringify(u),
                    localStorage.setItem(o, a),
                    a
                },
                n.storeClickKeywordsToCookie = function(e, t, r) {
                    n.storeKeywordsToCookie(e, t, n.RT_CLICKS_KEY, r)
                },
                n.storeImpressionKeywordsToCookie = function(e, t, r) {
                    n.storeKeywordsToCookie(e, t, n.RT_IMPRESSIONS_KEY, r)
                },
                n.storeKeywordsToCookie = function(e, n, o, i) {
                    var a, u = r.CookieUtils.getCookie(o);
                    try {
                        u = u ? decodeURIComponent(u) : "",
                        a = u ? JSON3.parse(u) : []
                    } catch(s) {
                        t.Logger.warn("error in Json.Parse on " + u),
                        a = []
                    }
                    a.push({
                        keywords: n.split(" "),
                        when: (new Date).getTime()
                    }),
                    a = t.Col.of(a).orderBy(function(e) {
                        return e.when
                    }).take(10).toArray(),
                    u = JSON3.stringify(a),
                    r.CookieUtils.setCookie(o, u, 365, i)
                },
                n.getRetargetingKeywordsFromLocalStorage = function(e) {
                    var t = n.readRecentKewwordsFromSource(n.RT_IMPRESSIONS_KEY),
                    r = n.readRecentKewwordsFromSource(n.RT_CLICKS_KEY);
                    return n.getRetargetingKeywords(e, t, r)
                },
                n.getRetargetingKeywordsFromCookie = function(e) {
                    var t = n.readRecentKewwordsFromCookieSource(n.RT_IMPRESSIONS_KEY),
                    r = n.readRecentKewwordsFromCookieSource(n.RT_CLICKS_KEY);
                    return n.getRetargetingKeywords(e, t, r)
                },
                n.readRecentKewwordsFromSource = function(e) {
                    var r = ((new Date).getTime(), localStorage.getItem(e)),
                    n = r ? JSON3.parse(r) : [];
                    return t.Col.of(n).orderByDesc(function(e) {
                        return e.when
                    })
                },
                n.readRecentKewwordsFromCookieSource = function(e) {
                    var n = ((new Date).getTime(), r.CookieUtils.getCookie(e)),
                    o = n ? JSON3.parse(n) : [];
                    return t.Col.of(o).orderByDesc(function(e) {
                        return e.when
                    })
                },
                n.getRetargetingKeywords = function(e, r, o) {
                    var i = t.flag(t.Flags.Retargeting.OLDALGO);
                    return i ? n.getRetargetingKeywords_OldAlgo(e, r, o) : n.getRetargetingKeywords_new(e, r, o)
                },
                n.getRetargetingKeywords_new = function(n, o, i) {
                    var a = t.flag(t.Flags.Retargeting.WEIGHT_TYPE),
                    u = t.flag(t.Flags.Retargeting.WEIGHT_AGE),
                    s = t.flag(t.Flags.Retargeting.WEIGHT_PAGEMATCH),
                    c = t.flag(t.Flags.Retargeting.WEIGHT_WORDREPEAT),
                    l = o.select(function(e) {
                        return {
                            keywords: e.keywords,
                            when: e.when,
                            typeScore: 0,
                            ageScore: null,
                            repeatScore: null,
                            matchScore: null,
                            normTypeScore: null,
                            normAgeScore: null,
                            normRepeatScore: null,
                            normMatchScore: null,
                            totalScore: null
                        }
                    }),
                    f = i.select(function(e) {
                        return {
                            keywords: e.keywords,
                            when: e.when,
                            typeScore: 1,
                            ageScore: null,
                            repeatScore: null,
                            matchScore: null,
                            normTypeScore: null,
                            normAgeScore: null,
                            normRepeatScore: null,
                            normMatchScore: null,
                            totalScore: null
                        }
                    }),
                    p = l.mergeCol(f);
                    if (0 == p.length()) return [];
                    var h = p.minBy(function(e) {
                        return e.when
                    }).when,
                    g = p.selectMany(function(e) {
                        return e.keywords
                    }).groupBy(function(e) {
                        return e
                    }).toHashmap2(function(e) {
                        return e.key
                    },
                    function(e) {
                        return e.value.length
                    }),
                    v = e.$("body").text(),
                    d = t.StaticCol.aggregate(v.split(/\W+/gi), {},
                    function(e, t) {
                        return e.length > 0 && (t[e] = e in t ? t[e] + 1 : 1),
                        t
                    });
                    p.each(function(e) {
                        e.ageScore = (e.when - h) / (1e3 * r.DAY_SECONDS),
                        e.repeatScore = t.StaticCol.sum(e.keywords,
                        function(e) {
                            return g[e]
                        }),
                        e.matchScore = t.StaticCol.sum(e.keywords,
                        function(e) {
                            return e in d ? d[e] : 0
                        })
                    }),
                    p.normalize(function(e) {
                        return e.ageScore
                    },
                    function(e, t) {
                        return e.normAgeScore = t
                    }),
                    p.normalize(function(e) {
                        return e.typeScore
                    },
                    function(e, t) {
                        return e.normTypeScore = t
                    }),
                    p.normalize(function(e) {
                        return e.repeatScore
                    },
                    function(e, t) {
                        return e.normRepeatScore = t
                    }),
                    p.normalize(function(e) {
                        return e.matchScore
                    },
                    function(e, t) {
                        return e.normMatchScore = t
                    }),
                    p.each(function(e) {
                        e.totalScore = e.normTypeScore * a + e.normAgeScore * u + e.normRepeatScore * c + e.normMatchScore * s
                    });
                    var m = p.orderByDesc(function(e) {
                        return e.totalScore
                    }).firstOrValue(null);
                    return m.keywords
                },
                n.getRetargetingKeywords_OldAlgo = function(e, r, o) {
                    var i = {};
                    r.each(function(e) {
                        t.Col.of(e.keywords).each(function(e) {
                            i[e] = i[e] ? i[e] += 1 : 1
                        })
                    }),
                    o.each(function(e) {
                        t.Col.of(e.keywords).each(function(e) {
                            i[e] = i[e] ? i[e] += 2 : 2
                        })
                    });
                    var a = r.select(function(e, r) {
                        var o = t.StaticCol.sum(e.keywords,
                        function(e) {
                            return i[e]
                        }),
                        a = o * (n.POSITION_WEIGHT + r);
                        return {
                            keywords: e.keywords,
                            score: a
                        }
                    }),
                    u = o.select(function(e, r) {
                        var o = t.StaticCol.sum(e.keywords,
                        function(e) {
                            return i[e]
                        }),
                        a = o * (n.POSITION_WEIGHT + r);
                        return {
                            keywords: e.keywords,
                            score: a
                        }
                    }),
                    s = {
                        keywords: [],
                        score: 0
                    },
                    c = a.orderByDesc(function(e) {
                        return e.score
                    }).firstOrValue(s),
                    l = u.orderByDesc(function(e) {
                        return e.score
                    }).firstOrValue(s);
                    return c.score > l.score ? c.keywords: l.keywords
                },
                n.RT_CLICKS_KEY = "fo-rt-clk",
                n.RT_IMPRESSIONS_KEY = "fo-rt-imp",
                n.POSITION_WEIGHT = 8,
                n
            } ();
            r.Retargeting = n
        } (r = t.Common || (t.Common = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; !
function(e) {
    var t; !
    function(e) {
        var t; !
        function(t) {
            var r = function() {
                function t(e) {
                    this.userSettings = e
                }
                return t.prototype.isSuspended = function(r) {
                    var n = this.userSettings.retrive(t.SUSPENDED_KEY),
                    o = (new Date).getTime();
                    if (n && r in n && "timestamp" in n[r]) {
                        var i = n[r].timestamp;
                        return i == -1 || i > o
                    }
                    if (n) if (r in n && "timestamp" in n[r]) {
                        var i = n[r].timestamp;
                        e.Logger.log("Suspension found, but expired on " + new Date(i).toUTCString())
                    } else e.Logger.log("Suspension id " + r + " not in suspension map");
                    else e.Logger.log("No suspension map found");
                    return ! 1
                },
                t.prototype.shouldAutoAppear = function(e) {
                    var r = this.userSettings.retrive(t.SUSPENDED_KEY);
                    return ! (r && e in r && "autoAppear" in r[e] && 0 == r[e].autoAppear)
                },
                t.prototype.suspend = function(r, n) {
                    var o = this.userSettings.retrive(t.SUSPENDED_KEY);
                    null == o && (o = {});
                    var i = (new Date).getTime(),
                    a = i + n;
                    o[r] || (o[r] = {}),
                    o[r].timestamp = a,
                    e.Logger.log("Suspended " + r + " until " + new Date(a).toUTCString()),
                    this.userSettings.store(t.SUSPENDED_KEY, o)
                },
                t.SUSPENDED_KEY = "suspended",
                t
            } ();
            t.DefaultSuspender = r
        } (t = e.Common || (e.Common = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; !
function(e) {
    var t; !
    function(e) {
        var t; !
        function(t) {
            var r = function() {
                function t() {}
                return t.prototype.setItem = function(r, n, o) {
                    if ("userSettings" == n) {
                        var i = JSON.parse(o),
                        a = r.getItem("fouhid"),
                        u = e.Common.DefaultSuspender.SUSPENDED_KEY;
                        if ("uuid" in i) {
                            var s = i.uuid;
                            if (a && s != a) throw Error("UUID and legacy UUID mismatch");
                            r.setItem("fouhid", s)
                        }
                        if (u in i) for (var c = 0; c < t.suspendIds.length; c++) {
                            var l = t.suspendIds[c].nwp,
                            f = t.suspendIds[c].old;
                            if (l in i[u]) {
                                var p = i[u][l],
                                h = r.getItem(a + "_" + f) ? JSON.parse(r.getItem(a + "_" + f)) : null;
                                h || (h = {}),
                                "autoAppear" in p && (h.autoAppear = p.autoAppear),
                                "timestamp" in p && (h.timestamp = p.timestamp),
                                e.Logger.log("Replacing legacy " + JSON.stringify(h) + " with " + JSON.stringify(p)),
                                r.setItem(a + "_" + f, JSON.stringify(h))
                            }
                        }
                    }
                },
                t.prototype.getItem = function(r, n) {
                    if ("userSettings" == n) {
                        var o = r.getItem("userSettings") ? JSON.parse(r.getItem("userSettings")) : {},
                        i = e.Common.DefaultSuspender.SUSPENDED_KEY,
                        a = r.getItem("fouhid");
                        a && (o.uuid = a);
                        for (var u = 0; u < t.suspendIds.length; u++) {
                            var s = t.suspendIds[u].nwp,
                            c = t.suspendIds[u].old,
                            l = r.getItem(a + "_" + c) ? JSON.parse(r.getItem(a + "_" + c)) : null,
                            f = l && "timestamp" in l ? l.timestamp: null;
                            f && (o[i] || (o[i] = {}), o[i][s] || (o[i][s] = {}), o[i][s].timestamp = f);
                            var p = l && "autoAppear" in l ? 0 == l.autoAppear: null;
                            p && (o[i] || (o[i] = {}), o[i][s] || (o[i][s] = {}), o[i][s].autoAppear = !p)
                        }
                        var h = !0;
                        for (var g in o) {
                            h = !1;
                            break
                        }
                        return h ? null: (e.Logger.log("Returning " + JSON.stringify(o) + " for legacy considerations"), o)
                    }
                    return null
                },
                t.suspendIds = [{
                    nwp: "RIGHT_PANEL",
                    old: "foss"
                },
                {
                    nwp: "BOTTOM_PANEL",
                    old: "fobs"
                },
                {
                    nwp: "MAIN_TABLE",
                    old: "fomt"
                },
                {
                    nwp: "IMAGE_RIGHT",
                    old: "forb"
                },
                {
                    nwp: "IMAGE_INNER",
                    old: "fogb"
                }],
                t
            } ();
            t.LegacyTranslationTable = r
        } (t = e.Extras || (e.Extras = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));
var FO; !
function(e) {
    var t; !
    function(e) {
        var t; !
        function(t) {
            var r = function() {
                function r() {}
                return r.context = function() {
                    return this._context
                },
                r.initializeContext = function(t) {
                    this._context = new e.Context.BootstrapContext(new e.Context.Paths(t), null, {},
                    null)
                },
                r.attachHandlers = function(t) {
                    r.initializeContext(t),
                    e.Logger.initialize(this.context());
                    try {
                        e.Common.attachPostMessageHandler(window, r.handleWindowMessage),
                        e.Logger.log("IFrame reciever up and running")
                    } catch(n) {
                        e.Logger.error("Failed attaching handlers")
                    }
                },
                r.handleWindowMessage = function(t) {
                    var n = null;
                    try {
                        n = JSON.parse(t.data)
                    } catch(o) {
                        return
                    }
                    try {
                        var i;
                        "retrieveAll" == n.type ? (i = r.retrieveAll(), t.source.postMessage(JSON.stringify({
                            id: n.id,
                            value: i
                        }), t.origin)) : "retrieve" == n.type ? (i = r.retireve(n.key), t.source.postMessage(JSON.stringify({
                            id: n.id,
                            value: i
                        }), t.origin)) : "retrieveOrSet" == n.type ? (i = r.retrieveOrSet(n.key, n.value), t.source.postMessage(JSON.stringify({
                            id: n.id,
                            value: i
                        }), t.origin)) : "store" == n.type ? r.store(n.key, n.value) : "storeAll" == n.type ? r.storeAll(n.value) : "storeCookie" == n.type ? r.storeCookie(n.key, n.value) : e.Logger.warn("Unrecognized request " + t.data)
                    } catch(o) {
                        e.Logger.error("IFrameReciever error: " + o && o.message)
                    }
                },
                r.retrieveAll = function() {
                    throw Error("Unsupported")
                },
                r.retrieveOrSet = function(e, t) {
                    var n = r.retireve(e);
                    return n ? n: (this.store(e, t), t)
                },
                r.retireve = function(e) {
                    var t = r.trans.getItem(localStorage, e);
                    return t ? t: JSON.parse(localStorage.getItem(e))
                },
                r.store = function(e, t) {
                    localStorage.setItem(e, JSON.stringify(t)),
                    r.trans.setItem(localStorage, e, JSON.stringify(t))
                },
                r.storeCookie = function(t, r) {
                    e.Common.CookieUtils.setCookie(t, r, 30, this._context.paths().domain())
                },
                r.storeAll = function(e) {
                    throw Error("Unsupported")
                },
                r.trans = new t.LegacyTranslationTable,
                r
            } ();
            t.IFrameStoreReciever = r,
            window.JSON3 = JSON;
            var n = document.location.host.match(/\..*$/)[0];
            r.attachHandlers(n)
        } (t = e.Extras || (e.Extras = {}))
    } (t = e.Shared_0_0_1109 || (e.Shared_0_0_1109 = {}))
} (FO || (FO = {}));