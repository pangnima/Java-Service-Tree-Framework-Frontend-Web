WRMCB = function (e) {
    var c = console;
    if (c && c.log && c.error) {
        c.log('Error running batched script.');
        c.error(e);
    }
}
;
try {
    /* module-key = 'jira.webresources:bigpipe-js', location = '/includes/jira/common/bigpipe.js' */
    define("jira/bigpipe/element", ["jquery", "wrm/data", "jira/skate", "jira/util/logger"], function (e, r, t, n) {
        return t("big-pipe", {
            attached: function (i) {
                function a() {
                    var e = new CustomEvent("success");
                    i.dispatchEvent(e)
                }

                function o(e, r) {
                    var t = new CustomEvent("error");
                    t.data = {event: e, signature: r}, i.dispatchEvent(t)
                }

                function d(e, r) {
                    p("error"), o(e, r)
                }

                function p(e) {
                    "performance" in window && performance.mark && performance.mark(c + e)
                }

                var s = i.getAttribute("data-id");
                if (null === s) return n.error("No data-id attribute provided for tag <big-pipe/> for element:", i), void d({
                    name: "NoPipeIdError",
                    message: "Unable to render element. Element does not contain a pipe id.",
                    element: i
                }, "no.pipe.id");
                var c = "bigPipe." + s + ".";
                p("start");
                var u = r.claim(s);
                u ? function (r) {
                    try {
                        var o = e(r);
                        e(i).replaceWith(o).each(function () {
                            t.init(this)
                        }), p("end"), a()
                    } catch (e) {
                        n.error("Error while parsing html: " + e), d(e, "parsing")
                    }
                }(u) : d({name: "NoDataError", message: "BigPipe response is empty."}, "no.data")
            }, detached: function () {
            }, type: t.type.ELEMENT, resolvedAttribute: "resolved", unresolvedAttribute: "unresolved"
        })
    });
} catch (e) {
    WRMCB(e)
}
;