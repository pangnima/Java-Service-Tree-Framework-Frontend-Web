WRMCB = function (e) {
    var c = console;
    if (c && c.log && c.error) {
        c.log('Error running batched script.');
        c.error(e);
    }
}
;
try {
    /* module-key = 'jira.webresources:calendar-lib', location = '/includes/lib/calendar/Calendar.js' */
    Calendar = function (e, t, a, n, r) {
        if (this.activeDiv = null, this.currentDateEl = null, this.getDateStatus = null, this.getDateToolTip = null, this.getDateText = null, this.timeout = null, this.onSelected = n || null, this.onClose = r || null, this.dragging = !1, this.hidden = !1, this.minYear = 1970, this.maxYear = 2050, this.dateFormat = Calendar._TT.DEF_DATE_FORMAT, this.ttDateFormat = Calendar._TT.TT_DATE_FORMAT, this.isPopup = !0, this.weekNumbers = !0, this.firstDayOfWeek = "number" == typeof e ? e : Calendar._FD, this.showsOtherMonths = !1, this.dateStr = t, this.todayDateStr = a, this.ar_days = null, this.showsTime = !1, this.time24 = !0, this.yearStep = 2, this.hiliteToday = !0, this.multiple = null, this.table = null, this.element = null, this.tbody = null, this.firstdayname = null, this.monthsCombo = null, this.yearsCombo = null, this.hilitedMonth = null, this.activeMonth = null, this.hilitedYear = null, this.activeYear = null, this.dateClicked = !1, void 0 === Calendar._SDN) {
            void 0 === Calendar._SDN_len && (Calendar._SDN_len = 3);
            for (var l = new Array, i = 8; i > 0;) l[--i] = Calendar._DN[i].substr(0, Calendar._SDN_len);
            Calendar._SDN = l, void 0 === Calendar._SMN_len && (Calendar._SMN_len = 3), l = new Array;
            for (var i = 12; i > 0;) l[--i] = Calendar._MN[i].substr(0, Calendar._SMN_len);
            Calendar._SMN = l
        }
    }, Calendar._C = null, Calendar.is_ie = /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent), Calendar.is_ie5 = Calendar.is_ie && /msie 5\.0/i.test(navigator.userAgent), Calendar.is_ie6 = Calendar.is_ie && /msie 6\.0/i.test(navigator.userAgent), Calendar.is_opera = /opera/i.test(navigator.userAgent), Calendar.is_khtml = /Konqueror|Safari|KHTML/i.test(navigator.userAgent), Calendar.getAbsolutePos = function (e) {
        var t = jQuery(e).offset();
        return t.x = t.left, t.y = t.top, t
    }, Calendar.isRelated = function (e, t) {
        var a = t.relatedTarget;
        if (!a) {
            var n = t.type;
            "mouseover" == n ? a = t.fromElement : "mouseout" == n && (a = t.toElement)
        }
        for (; a;) {
            if (a == e) return !0;
            a = a.parentNode
        }
        return !1
    }, Calendar.removeClass = function (e, t) {
        if (e && e.className) {
            for (var a = e.className.split(" "), n = new Array, r = a.length; r > 0;) a[--r] != t && (n[n.length] = a[r]);
            e.className = n.join(" ")
        }
    }, Calendar.addClass = function (e, t) {
        Calendar.removeClass(e, t), e.className += " " + t
    }, Calendar.getElement = function (e) {
        for (var t = e.currentTarget; 1 !== t.nodeType || /^div$/i.test(t.tagName);) t = t.parentNode;
        return t
    }, Calendar.getTargetElement = function (e) {
        for (var t = e.target; 1 !== t.nodeType;) t = t.parentNode;
        return t
    }, Calendar.stopEvent = function (e) {
        return e || (e = window.event), e.stopPropagation ? (e.preventDefault(), e.stopPropagation()) : (e.cancelBubble = !0, e.returnValue = !1), !1
    }, Calendar.addEvent = function (e, t, a) {
        e.attachEvent ? e.attachEvent("on" + t, a) : e.addEventListener ? e.addEventListener(t, a, !0) : e["on" + t] = a
    }, Calendar.removeEvent = function (e, t, a) {
        e.detachEvent ? e.detachEvent("on" + t, a) : e.removeEventListener ? e.removeEventListener(t, a, !0) : e["on" + t] = null
    }, Calendar.createElement = function (e, t) {
        var a = null;
        return a = document.createElementNS ? document.createElementNS("http://www.w3.org/1999/xhtml", e) : document.createElement(e), void 0 !== t && t.appendChild(a), a
    }, Calendar._add_evs = function (el) {
        with (Calendar) addEvent(el, "mouseover", dayMouseOver), addEvent(el, "mousedown", dayMouseDown), addEvent(el, "mouseout", dayMouseOut), is_ie && (addEvent(el, "dblclick", dayMouseDblClick), el.setAttribute("unselectable", !0))
    }, Calendar.findMonth = function (e) {
        return void 0 !== e.month ? e : void 0 !== e.parentNode.month ? e.parentNode : null
    }, Calendar.findYear = function (e) {
        return void 0 !== e.year ? e : void 0 !== e.parentNode.year ? e.parentNode : null
    }, Calendar.showMonthsCombo = function () {
        var e = Calendar._C;
        if (!e) return !1;
        var e = e, t = e.activeDiv, a = e.monthsCombo;
        e.hilitedMonth && Calendar.removeClass(e.hilitedMonth, "hilite"), e.activeMonth && Calendar.removeClass(e.activeMonth, "active");
        var n = e.monthsCombo.getElementsByTagName("div")[e.date.getMonth()];
        Calendar.addClass(n, "active"), e.activeMonth = n;
        var r = a.style;
        if (r.display = "block", t.navtype < 0) r.left = t.offsetLeft + "px"; else {
            var l = a.offsetWidth;
            void 0 === l && (l = 50), r.left = t.offsetLeft + t.offsetWidth - l + "px"
        }
        r.top = t.offsetTop + t.offsetHeight + "px"
    }, Calendar.showYearsCombo = function (e) {
        var t = Calendar._C;
        if (!t) return !1;
        var t = t, a = t.activeDiv, n = t.yearsCombo;
        t.hilitedYear && Calendar.removeClass(t.hilitedYear, "hilite"), t.activeYear && Calendar.removeClass(t.activeYear, "active"), t.activeYear = null;
        for (var r = t.date.getFullYear() + (e ? 1 : -1), l = n.firstChild, i = !1, s = 12; s > 0; --s) r >= t.minYear && r <= t.maxYear ? (l.innerHTML = r, l.year = r, l.style.display = "block", i = !0) : l.style.display = "none", l = l.nextSibling, r += e ? t.yearStep : -t.yearStep;
        if (i) {
            var o = n.style;
            if (o.display = "block", a.navtype < 0) o.left = a.offsetLeft + "px"; else {
                var d = n.offsetWidth;
                void 0 === d && (d = 50), o.left = a.offsetLeft + a.offsetWidth - d + "px"
            }
            o.top = a.offsetTop + a.offsetHeight + "px"
        }
    }, Calendar.tableMouseUp = function (ev) {
        var cal = Calendar._C;
        if (!cal) return !1;
        cal.timeout && clearTimeout(cal.timeout);
        var el = cal.activeDiv;
        if (!el) return !1;
        var target = Calendar.getTargetElement(ev);
        ev || (ev = window.event), Calendar.removeClass(el, "active"), target != el && target.parentNode != el || Calendar.cellClick(el, ev);
        var mon = Calendar.findMonth(target), date = null;
        if (mon) date = new Date(cal.date), mon.month != date.getMonth() && (date.setMonth(mon.month), cal.setDate(date), cal.dateClicked = !1, cal.callHandler()); else {
            var year = Calendar.findYear(target);
            year && (date = new Date(cal.date), year.year != date.getFullYear() && (date.setFullYear(year.year), cal.setDate(date), cal.dateClicked = !1, cal.callHandler()))
        }
        with (Calendar) return removeEvent(document, "mouseup", tableMouseUp), removeEvent(document, "mouseover", tableMouseOver), removeEvent(document, "mousemove", tableMouseOver), cal._hideCombos(), _C = null, stopEvent(ev)
    }, Calendar.tableMouseOver = function (e) {
        var t = Calendar._C;
        if (t) {
            var a = t.activeDiv, n = Calendar.getTargetElement(e);
            if (n == a || n.parentNode == a ? (Calendar.addClass(a, "hilite active"), Calendar.addClass(a.parentNode, "rowhilite")) : ((void 0 === a.navtype || 50 != a.navtype && (0 == a.navtype || Math.abs(a.navtype) > 2)) && Calendar.removeClass(a, "active"), Calendar.removeClass(a, "hilite"), Calendar.removeClass(a.parentNode, "rowhilite")), e || (e = window.event), 50 == a.navtype && n != a) {
                var r, l = Calendar.getAbsolutePos(a), i = a.offsetWidth, s = e.clientX, o = !0;
                s > l.x + i ? (r = s - l.x - i, o = !1) : r = l.x - s, r < 0 && (r = 0);
                for (var d = a._range, h = a._current, u = Math.floor(r / 10) % d.length, c = d.length; --c >= 0 && d[c] != h;) ;
                for (; u-- > 0;) o ? --c < 0 && (c = d.length - 1) : ++c >= d.length && (c = 0);
                var m = d[c];
                a.innerHTML = m, t.onUpdateTime()
            }
            var C = Calendar.findMonth(n);
            if (C) C.month != t.date.getMonth() ? (t.hilitedMonth && Calendar.removeClass(t.hilitedMonth, "hilite"), Calendar.addClass(C, "hilite"), t.hilitedMonth = C) : t.hilitedMonth && Calendar.removeClass(t.hilitedMonth, "hilite"); else {
                t.hilitedMonth && Calendar.removeClass(t.hilitedMonth, "hilite");
                var p = Calendar.findYear(n);
                p && p.year != t.date.getFullYear() ? (t.hilitedYear && Calendar.removeClass(t.hilitedYear, "hilite"), Calendar.addClass(p, "hilite"), t.hilitedYear = p) : t.hilitedYear && Calendar.removeClass(t.hilitedYear, "hilite")
            }
            return Calendar.stopEvent(e)
        }
    }, Calendar.tableMouseDown = function (e) {
        if (Calendar.getTargetElement(e) == Calendar.getElement(e)) return Calendar.stopEvent(e)
    }, Calendar.calDragIt = function (e) {
        var t = Calendar._C;
        if (!t || !t.dragging) return !1;
        var a, n;
        Calendar.is_ie ? (n = window.event.clientY + document.body.scrollTop, a = window.event.clientX + document.body.scrollLeft) : (a = e.pageX, n = e.pageY);
        var r = t.element.style;
        return r.left = a - t.xOffs + "px", r.top = n - t.yOffs + "px", Calendar.stopEvent(e)
    }, Calendar.calDragEnd = function (ev) {
        var cal = Calendar._C;
        if (!cal) return !1;
        with (cal.dragging = !1, Calendar) removeEvent(document, "mousemove", calDragIt), removeEvent(document, "mouseup", calDragEnd), tableMouseUp(ev)
    }, Calendar.dayMouseDown = function (ev) {
        var el = Calendar.getElement(ev);
        if (el.disabled) return !1;
        var cal = el.calendar;
        if (cal.activeDiv = el, Calendar._C = cal, 300 != el.navtype) with (Calendar) 50 == el.navtype ? (el._current = el.innerHTML, addEvent(document, "mousemove", tableMouseOver)) : addEvent(document, Calendar.is_ie5 ? "mousemove" : "mouseover", tableMouseOver), addClass(el, "hilite active"), addEvent(document, "mouseup", tableMouseUp); else cal.isPopup && cal._dragStart(ev);
        return -1 == el.navtype || 1 == el.navtype ? (cal.timeout && clearTimeout(cal.timeout), cal.timeout = setTimeout("Calendar.showMonthsCombo()", 250)) : -2 == el.navtype || 2 == el.navtype ? (cal.timeout && clearTimeout(cal.timeout), cal.timeout = setTimeout(el.navtype > 0 ? "Calendar.showYearsCombo(true)" : "Calendar.showYearsCombo(false)", 250)) : cal.timeout = null, Calendar.stopEvent(ev)
    }, Calendar.dayMouseDblClick = function (e) {
        Calendar.cellClick(Calendar.getElement(e), e || window.event), Calendar.is_ie && document.selection.empty()
    }, Calendar.dayMouseOver = function (e) {
        var t = Calendar.getElement(e);
        return !(Calendar.isRelated(t, e) || Calendar._C || t.disabled) && (t.ttip && ("_" == t.ttip.substr(0, 1) && (t.ttip = t.caldate.print(t.calendar.ttDateFormat) + t.ttip.substr(1)), t.calendar.tooltips.innerHTML = t.ttip), 300 != t.navtype && (Calendar.addClass(t, "hilite"), t.caldate && Calendar.addClass(t.parentNode, "rowhilite")), Calendar.stopEvent(e))
    }, Calendar.dayMouseOut = function (ev) {
        with (Calendar) {
            var el = getElement(ev);
            return !(isRelated(el, ev) || _C || el.disabled) && (removeClass(el, "hilite"), el.caldate && removeClass(el.parentNode, "rowhilite"), el.calendar && (el.calendar.tooltips.innerHTML = _TT.SEL_DATE), stopEvent(ev))
        }
    }, Calendar.cellClick = function (e, t) {
        function a(e) {
            var t = i.getDate(), a = i.getMonthDays(e);
            t > a && i.setDate(a), i.setMonth(e)
        }

        var n = e.calendar, r = !1, l = !1, i = null;
        if (void 0 === e.navtype) {
            n.currentDateEl && (Calendar.removeClass(n.currentDateEl, "selected"), Calendar.addClass(e, "selected"), (r = n.currentDateEl == e) || (n.currentDateEl = e)), n.date.setDateOnly(e.caldate), i = n.date;
            var s = !(n.dateClicked = !e.otherMonth);
            s || n.currentDateEl ? l = !e.disabled : n._toggleMultipleDate(new Date(i)), s && n._init(n.firstDayOfWeek, i)
        } else {
            if (200 == e.navtype) return Calendar.removeClass(e, "hilite"), void n.callCloseHandler();
            i = new Date(n.date), 0 == e.navtype && (n.todayDateStr ? i = new Date(n.todayDateStr) : i.setDateOnly(new Date)), n.dateClicked = !1;
            var o = i.getFullYear(), d = i.getMonth();
            switch (e.navtype) {
                case 400:
                    Calendar.removeClass(e, "hilite");
                    var h = Calendar._TT.ABOUT;
                    return void 0 !== h ? h += n.showsTime ? Calendar._TT.ABOUT_TIME : "" : h = 'Help and about box text is not translated into this language.\nIf you know this language and you feel generous please update\nthe corresponding file in "lang" subdir to match calendar-en.js\nand send it back to <mihai_bazon@yahoo.com> to get it into the distribution  ;-)\n\nThank you!\nhttp://dynarch.com/mishoo/calendar.epl\n', void alert(h);
                case-2:
                    o > n.minYear && i.setFullYear(o - 1);
                    break;
                case-1:
                    d > 0 ? a(d - 1) : o-- > n.minYear && (i.setFullYear(o), a(11));
                    break;
                case 1:
                    d < 11 ? a(d + 1) : o < n.maxYear && (i.setFullYear(o + 1), a(0));
                    break;
                case 2:
                    o < n.maxYear && i.setFullYear(o + 1);
                    break;
                case 100:
                    return void n.setFirstDayOfWeek(e.fdow);
                case 50:
                    for (var u = e._range, c = e.innerHTML, m = u.length; --m >= 0 && u[m] != c;) ;
                    t && t.shiftKey ? --m < 0 && (m = u.length - 1) : ++m >= u.length && (m = 0);
                    var C = u[m];
                    return e.innerHTML = C, void n.onUpdateTime();
                case 0:
                    if ("function" == typeof n.getDateStatus && n.getDateStatus(i, i.getFullYear(), i.getMonth(), i.getDate())) return !1
            }
            i.equalsTo(n.date) ? 0 == e.navtype && (l = r = !0) : (n.setDate(i), l = !0)
        }
        l && t && n.callHandler(), r && (Calendar.removeClass(e, "hilite"), t && n.callCloseHandler())
    }, Calendar.prototype.create = function (e) {
        var t = null;
        e ? (t = e, this.isPopup = !1) : (t = document.getElementsByTagName("body")[0], this.isPopup = !0), this.dateStr && (this.date = new Date(this.dateStr)), this.date && !isNaN(this.date) || (this.date = new Date);
        var a = Calendar.createElement("table");
        this.table = a, a.cellSpacing = 0, a.cellPadding = 0, a.calendar = this, Calendar.addEvent(a, "mousedown", Calendar.tableMouseDown);
        var n = Calendar.createElement("div");
        this.element = n, n.className = "calendar", this.isPopup && (n.style.position = "absolute", n.style.display = "none"), n.appendChild(a);
        var r = Calendar.createElement("thead", a), l = null, i = null, s = this, o = function (e, t, a) {
            return l = Calendar.createElement("td", i), l.colSpan = t, l.className = "button", 0 != a && Math.abs(a) <= 2 && (l.className += " nav"), Calendar._add_evs(l), l.calendar = s, l.navtype = a, l.innerHTML = "<div unselectable='on'>" + e + "</div>", l
        };
        i = Calendar.createElement("tr", r);
        var d = 6;
        this.isPopup && --d, this.weekNumbers && ++d, o("?", 1, 400).ttip = Calendar._TT.INFO, this.title = o("", d, 300), this.title.className = "title", this.isPopup && (this.title.ttip = Calendar._TT.DRAG_TO_MOVE, this.title.style.cursor = "move", o("&#x00d7;", 1, 200).ttip = Calendar._TT.CLOSE), i = Calendar.createElement("tr", r), i.className = "headrow", this._nav_py = o("&#x00ab;", 1, -2), this._nav_py.ttip = Calendar._TT.PREV_YEAR, this._nav_pm = o("&#x2039;", 1, -1), this._nav_pm.ttip = Calendar._TT.PREV_MONTH, this._nav_now = o(Calendar._TT.TODAY, this.weekNumbers ? 4 : 3, 0), this._nav_now.ttip = Calendar._TT.GO_TODAY, this._nav_nm = o("&#x203a;", 1, 1), this._nav_nm.ttip = Calendar._TT.NEXT_MONTH, this._nav_ny = o("&#x00bb;", 1, 2), this._nav_ny.ttip = Calendar._TT.NEXT_YEAR, i = Calendar.createElement("tr", r), i.className = "daynames", this.weekNumbers && (l = Calendar.createElement("th", i), l.className = "name wn", l.innerHTML = Calendar._TT.WK, l.setAttribute("scope", "col"));
        for (var h = 7; h > 0; --h) l = Calendar.createElement("th", i), l.setAttribute("scope", "col"), h || (l.navtype = 100, l.calendar = this, Calendar._add_evs(l));
        this.firstdayname = this.weekNumbers ? i.firstChild.nextSibling : i.firstChild, this._displayWeekdays();
        var u = Calendar.createElement("tbody", a);
        for (this.tbody = u, h = 6; h > 0; --h) {
            i = Calendar.createElement("tr", u), this.weekNumbers && (l = Calendar.createElement("td", i));
            for (var c = 7; c > 0; --c) l = Calendar.createElement("td", i), l.calendar = this, Calendar._add_evs(l)
        }
        this.showsTime ? (i = Calendar.createElement("tr", u), i.className = "time", l = Calendar.createElement("td", i), l.className = "time", l.colSpan = 2, l.innerHTML = Calendar._TT.TIME || "&nbsp;", l = Calendar.createElement("td", i), l.className = "time", l.colSpan = this.weekNumbers ? 4 : 3, function () {
            function e(e, t, a, n) {
                var r = Calendar.createElement("span", l);
                if (r.className = e, r.innerHTML = t, r.calendar = s, r.ttip = Calendar._TT.TIME_PART, r.navtype = 50, r._range = [], "number" != typeof a) r._range = a; else for (var i = a; i <= n; ++i) {
                    var o;
                    o = i < 10 && n >= 10 ? "0" + i : "" + i, r._range[r._range.length] = o
                }
                return Calendar._add_evs(r), r
            }

            var t = s.date.getHours(), a = s.date.getMinutes(), n = !s.time24, r = t > 12;
            n && r && (t -= 12);
            var o = e("hour", t, n ? 1 : 0, n ? 12 : 23), d = Calendar.createElement("span", l);
            d.innerHTML = ":", d.className = "colon";
            var h = e("minute", a, 0, 59), u = null;
            l = Calendar.createElement("td", i), l.className = "time", l.colSpan = 2, n ? u = e("ampm", r ? Calendar._TT.PM : Calendar._TT.AM, [Calendar._TT.am, Calendar._TT.pm]) : l.innerHTML = "&nbsp;", s.onSetTime = function () {
                var e, t = this.date.getHours(), a = this.date.getMinutes();
                n && (e = t >= 12, e && (t -= 12), 0 == t && (t = 12), u.innerHTML = e ? Calendar._TT.pm : Calendar._TT.am), o.innerHTML = t < 10 ? "0" + t : t, h.innerHTML = a < 10 ? "0" + a : a
            }, s.onUpdateTime = function () {
                var e = this.date, t = parseInt(o.innerHTML, 10);
                n && (new RegExp(Calendar._TT.pm, "i").test(u.innerHTML) && t < 12 ? t += 12 : new RegExp(Calendar._TT.am, "i").test(u.innerHTML) && 12 == t && (t = 0));
                var a = e.getDate(), r = e.getMonth(), l = e.getFullYear();
                e.setHours(t), e.setMinutes(parseInt(h.innerHTML, 10)), e.setFullYear(l), e.setMonth(r), e.setDate(a), this.dateClicked = !1, this.callHandler()
            }
        }()) : this.onSetTime = this.onUpdateTime = function () {
        };
        var m = Calendar.createElement("tfoot", a);
        for (i = Calendar.createElement("tr", m), i.className = "footrow", l = o(Calendar._TT.SEL_DATE, this.weekNumbers ? 8 : 7, 300), l.className = "ttip", this.isPopup && (l.ttip = Calendar._TT.DRAG_TO_MOVE, l.style.cursor = "move"), this.tooltips = l, n = Calendar.createElement("div", this.element), this.monthsCombo = n, n.className = "combo", h = 0; h < Calendar._MN.length; ++h) {
            var C = Calendar.createElement("div");
            C.className = Calendar.is_ie ? "label-IEfix" : "label", C.month = h, C.innerHTML = Calendar._SMN[h], n.appendChild(C)
        }
        for (n = Calendar.createElement("div", this.element), this.yearsCombo = n, n.className = "combo", h = 12; h > 0; --h) {
            var p = Calendar.createElement("div");
            p.className = Calendar.is_ie ? "label-IEfix" : "label", n.appendChild(p)
        }
        this._init(this.firstDayOfWeek, this.date), t.appendChild(this.element), Calendar.addEvent(this.element, "mousedown", function (e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        })
    }, Calendar._upkeyEvent = function (e) {
        27 === e.keyCode && window.setTimeout(function () {
            var e = window._dynarch_popupCalendar;
            if (!e || e.multiple) return !1;
            e.callCloseHandler()
        }, 0)
    }, Calendar._keyEvent = function (e) {
        function t() {
            u = r.currentDateEl;
            var e = u.pos;
            o = 15 & e, d = e >> 4, h = r.ar_days[d][o]
        }

        function a() {
            var e = new Date(r.date);
            e.setDate(e.getDate() - c), r.setDate(e)
        }

        function n() {
            var e = new Date(r.date);
            e.setDate(e.getDate() + c), r.setDate(e)
        }

        var r = window._dynarch_popupCalendar;
        if (!r || r.multiple) return !1;
        var l = Calendar.is_ie || "keydown" == e.type, i = e.keyCode;
        if (e.ctrlKey) switch (i) {
            case 37:
                l && Calendar.cellClick(r._nav_pm);
                break;
            case 38:
                l && Calendar.cellClick(r._nav_py);
                break;
            case 39:
                l && Calendar.cellClick(r._nav_nm);
                break;
            case 40:
                l && Calendar.cellClick(r._nav_ny)
        } else switch (i) {
            case 32:
                Calendar.cellClick(r._nav_now);
                break;
            case 37:
            case 38:
            case 39:
            case 40:
                if (l) {
                    var s, o, d, h, u, c;
                    for (s = 37 == i || 38 == i, c = 37 == i || 39 == i ? 1 : 7, t(); ;) {
                        switch (i) {
                            case 37:
                                if (!(--o >= 0)) {
                                    o = 6, i = 38;
                                    continue
                                }
                                h = r.ar_days[d][o];
                                break;
                            case 38:
                                --d >= 0 ? h = r.ar_days[d][o] : (a(), t());
                                break;
                            case 39:
                                if (!(++o < 7)) {
                                    o = 0, i = 40;
                                    continue
                                }
                                h = r.ar_days[d][o];
                                break;
                            case 40:
                                ++d < r.ar_days.length ? h = r.ar_days[d][o] : (n(), t())
                        }
                        break
                    }
                    h && (h.disabled ? s ? a() : n() : Calendar.cellClick(h))
                }
                break;
            case 13:
                l && Calendar.cellClick(r.currentDateEl, e)
        }
        return Calendar.stopEvent(e)
    }, Calendar.prototype._init = function (e, t) {
        var a = new Date(t);
        a.setHours(13);
        var n = new Date, r = n.getFullYear(), l = n.getMonth(), i = n.getDate();
        this.table.style.visibility = "hidden";
        var s = a.getFullYear();
        s < this.minYear ? (s = this.minYear, a.setFullYear(s)) : s > this.maxYear && (s = this.maxYear, a.setFullYear(s)), this.firstDayOfWeek = e;
        var o = a.getMonth(), d = a.getDate();
        a.getMonthDays();
        a.setDate(1);
        var h = (a.getDay() - this.firstDayOfWeek) % 7;
        h < 0 && (h += 7), a.setDate(-h), a.setDate(a.getDate() + 1);
        for (var u = this.tbody.firstChild, c = (Calendar._SMN[o], this.ar_days = new Array), m = Calendar._TT.WEEKEND, C = this.multiple ? this.datesCells = {} : null, p = 0; p < 6; ++p, u = u.nextSibling) {
            var v = u.firstChild;
            if (this.weekNumbers) {
                v.className = "day wn";
                var f = a;
                0 == o && 0 == p && 0 == Date.useISO8601WeekNumbers && (f = new Date(s, o, 1)), v.innerHTML = f.getWeekNumber(this.firstDayOfWeek), v = v.nextSibling
            }
            u.className = "daysrow";
            for (var y, g = !1, _ = c[p] = [], D = 0; D < 7; ++D, v = v.nextSibling, a.setDate(y + 1)) {
                y = a.getDate();
                var b = a.getDay();
                v.className = "day day-" + y, v.pos = p << 4 | D, _[D] = v;
                var T = a.getMonth() == o;
                if (T) v.otherMonth = !1, g = !0; else {
                    if (!this.showsOtherMonths) {
                        v.className = "emptycell", v.innerHTML = "&nbsp;", v.disabled = !0;
                        continue
                    }
                    v.className += " othermonth", v.otherMonth = !0
                }
                if (v.disabled = !1, v.innerHTML = this.getDateText ? this.getDateText(a, y) : y, C && (C[a.print("%Y%m%d")] = v), this.getDateStatus) {
                    var w = this.getDateStatus(a, s, o, y);
                    if (this.getDateToolTip) {
                        var M = this.getDateToolTip(a, s, o, y);
                        M && (v.title = M)
                    }
                    !0 === w ? (v.className += " disabled", v.disabled = !0) : (/disabled/i.test(w) && (v.disabled = !0), v.className += " " + w)
                }
                v.disabled || (v.caldate = new Date(a), v.ttip = "_", !this.multiple && T && y == d && this.hiliteToday && (v.className += " selected", this.currentDateEl = v), a.getFullYear() == r && a.getMonth() == l && y == i && (v.className += " today", v.ttip += Calendar._TT.PART_TODAY), -1 != m.indexOf(b.toString()) && (v.className += v.otherMonth ? " oweekend" : " weekend"))
            }
            g || this.showsOtherMonths || (u.className = "emptyrow")
        }
        this.date = new Date(t), this.onSetTime(), this.title.innerHTML = Calendar._MN[o] + ", " + s, this.table.style.visibility = "visible", this._initMultipleDates()
    }, Calendar.prototype._initMultipleDates = function () {
        if (this.multiple) for (var e in this.multiple) {
            var t = this.datesCells[e], a = this.multiple[e];
            a && (t && (t.className += " selected"))
        }
    }, Calendar.prototype._toggleMultipleDate = function (e) {
        if (this.multiple) {
            var t = e.print("%Y%m%d"), a = this.datesCells[t];
            if (a) {
                this.multiple[t] ? (Calendar.removeClass(a, "selected"), delete this.multiple[t]) : (Calendar.addClass(a, "selected"), this.multiple[t] = e)
            }
        }
    }, Calendar.prototype.setDateToolTipHandler = function (e) {
        this.getDateToolTip = e
    }, Calendar.prototype.setDate = function (e) {
        e.equalsTo(this.date) || this._init(this.firstDayOfWeek, e)
    }, Calendar.prototype.refresh = function () {
        this._init(this.firstDayOfWeek, this.date)
    }, Calendar.prototype.setFirstDayOfWeek = function (e) {
        this._init(e, this.date), this._displayWeekdays()
    }, Calendar.prototype.setDateStatusHandler = Calendar.prototype.setDisabledHandler = function (e) {
        this.getDateStatus = e
    }, Calendar.prototype.setRange = function (e, t) {
        this.minYear = e, this.maxYear = t
    }, Calendar.prototype.callHandler = function () {
        this.onSelected && this.onSelected(this, this.date.print(this.dateFormat))
    }, Calendar.prototype.callCloseHandler = function () {
        this.onClose && this.onClose(this)
    }, Calendar.prototype.destroy = function () {
        this.element.parentNode.removeChild(this.element), Calendar._C = null, window._dynarch_popupCalendar = null
    }, Calendar.prototype.reparent = function (e) {
        var t = this.element;
        t.parentNode.removeChild(t), e.appendChild(t)
    }, Calendar._checkCalendar = function (e) {
        var t = window._dynarch_popupCalendar;
        if (!t) return !1;
        for (var a = Calendar.is_ie ? Calendar.getElement(e) : Calendar.getTargetElement(e); null != a && a != t.element; a = a.parentNode) ;
        return null == a ? (window._dynarch_popupCalendar.callCloseHandler(), Calendar.stopEvent(e)) : void 0
    }, Calendar.prototype.show = function () {
        if (!this.params.inputField.disabled) {
            for (var e = this.table.getElementsByTagName("tr"), t = e.length; t > 0;) {
                var a = e[--t];
                Calendar.removeClass(a, "rowhilite");
                for (var n = a.getElementsByTagName("td"), r = n.length; r > 0;) {
                    var l = n[--r];
                    Calendar.removeClass(l, "hilite"), Calendar.removeClass(l, "active")
                }
            }
            Calendar.current = this, this.element.style.display = "block", this.element.className += " active", this.hidden = !1, this.isPopup && (window._dynarch_popupCalendar = this, Calendar.addEvent(document, "keyup", Calendar._upkeyEvent), Calendar.addEvent(document, "keydown", Calendar._keyEvent), Calendar.addEvent(document, "mousedown", Calendar._checkCalendar))
        }
    }, Calendar.prototype.hide = function () {
        this.isPopup && (Calendar.removeEvent(document, "keyup", Calendar._upkeyEvent), Calendar.removeEvent(document, "keydown", Calendar._keyEvent), Calendar.removeEvent(document, "mousedown", Calendar._checkCalendar)), Calendar.current = null, this.element.style.display = "none", this.element.className = this.element.className.replace(/active/gi, ""), this.hidden = !0
    }, Calendar.prototype.showAt = function (e, t) {
        var a = this.element.style;
        a.left = e + "px", a.top = t + "px", this.show()
    }, Calendar.prototype.showAtElement = function (e, t) {
        function a(e) {
            e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0);
            var t = document.createElement("div"), a = t.style;
            a.position = "absolute", a.right = a.bottom = a.width = a.height = "0px", document.body.appendChild(t);
            var n = Calendar.getAbsolutePos(t);
            document.body.removeChild(t), n.y += jQuery(window).scrollTop(), n.x += jQuery(window).scrollLeft();
            var r = e.x + e.width - n.x;
            r > 0 && (e.x -= r), (r = e.y + e.height - n.y) > 0 && (e.y -= r)
        }

        var n = this, r = Calendar.getAbsolutePos(e);
        if (!t || "string" != typeof t) return this.showAt(r.x, r.y + e.offsetHeight), !0;
        this.element.style.display = "block", Calendar.continuation_for_the_khtml_browser = function () {
            var l = jQuery(n.element).outerWidth(), i = jQuery(n.element).outerHeight();
            n.element.style.display = "none";
            var s = t.substr(0, 1), o = "l";
            switch (t.length > 1 && (o = t.substr(1, 1)), s) {
                case"T":
                    r.y -= i;
                    break;
                case"B":
                    r.y += jQuery(e).outerHeight();
                    break;
                case"C":
                    r.y += (jQuery(e).outerHeight() - i) / 2;
                    break;
                case"t":
                    r.y += jQuery(e).outerHeight() - i
            }
            switch (o) {
                case"L":
                    r.x -= l;
                    break;
                case"R":
                    r.x += jQuery(e).outerWidth();
                    break;
                case"C":
                    r.x += (jQuery(e).outerWidth() - l) / 2;
                    break;
                case"l":
                    r.x += jQuery(e).outerWidth() - l
            }
            r.width = l, r.height = i + 40, n.monthsCombo.style.display = "none", a(r), n.showAt(r.x, r.y)
        }, Calendar.continuation_for_the_khtml_browser()
    }, Calendar.prototype.setDateFormat = function (e) {
        this.dateFormat = e
    }, Calendar.prototype.setTtDateFormat = function (e) {
        this.ttDateFormat = e
    }, Calendar.prototype.parseDate = function (e, t) {
        t || (t = this.dateFormat), this.setDate(Date.parseDate(e, t))
    }, Calendar.prototype._displayWeekdays = function () {
        for (var e = this.firstDayOfWeek, t = this.firstdayname, a = Calendar._TT.WEEKEND, n = 0; n < 7; ++n) {
            t.className = "day name";
            var r = (n + e) % 7;
            n && (t.ttip = Calendar._TT.DAY_FIRST.replace("%s", Calendar._DN[r]), t.navtype = 100, t.calendar = this, t.fdow = r, Calendar._add_evs(t)), -1 != a.indexOf(r.toString()) && Calendar.addClass(t, "weekend"), t.innerHTML = Calendar._SDN[(n + e) % 7], t = t.nextSibling
        }
    }, Calendar.prototype._hideCombos = function () {
        this.monthsCombo.style.display = "none", this.yearsCombo.style.display = "none"
    }, Calendar.prototype._dragStart = function (ev) {
        if (!this.dragging) {
            this.dragging = !0;
            var posX, posY;
            Calendar.is_ie ? (posY = window.event.clientY + document.body.scrollTop, posX = window.event.clientX + document.body.scrollLeft) : (posY = ev.clientY + window.scrollY, posX = ev.clientX + window.scrollX);
            var st = this.element.style;
            with (this.xOffs = posX - parseInt(st.left), this.yOffs = posY - parseInt(st.top), Calendar) addEvent(document, "mousemove", calDragIt), addEvent(document, "mouseup", calDragEnd)
        }
    }, Date._MD = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), Date.SECOND = 1e3, Date.MINUTE = 60 * Date.SECOND, Date.HOUR = 60 * Date.MINUTE, Date.DAY = 24 * Date.HOUR, Date.WEEK = 7 * Date.DAY, Date._multisplit = function (e, t) {
        if (null == e) return null;
        null == t && (t = "");
        var a = [], n = e.length, r = "", l = !1;
        for (i = 0; i < n; i++) {
            var s = e.charAt(i);
            -1 == t.indexOf(s) ? (l = !0, r += s) : l && (a[a.length] = r, r = "", l = !1)
        }
        return r.length > 0 && (a[a.length] = r), 0 == a.length && (a[a.length] = ""), a
    }, Date._parseNonDateFormatChars = function (e) {
        var t = "", a = e.length;
        for (i = 0; i < a; i++) {
            var n = e.charAt(i);
            if ("%" == n) {
                var r = "";
                if (i + 1 < a && (r = e.charAt(i + 1)), i += 1, r.length > 0 && -1 != "aAbBCdeHIJklmMnpPRSstUWVuwyY%".indexOf(r)) continue;
                -1 == t.indexOf(n) && (t += n), r.length > 0 && -1 == t.indexOf(r) && (t += r)
            } else -1 == t.indexOf(n) && (t += n)
        }
        return t
    }, Date.splitDate = function (e, t) {
        var a = (new Date, 0), n = -1, r = 0, l = Date._parseNonDateFormatChars(t), i = Date._multisplit(e, l),
            s = t.match(/%./g), o = 0, d = 0, h = 0, u = 0;
        for (o = 0; o < i.length; ++o) if (i[o]) switch (s[o]) {
            case"%d":
            case"%e":
                r = Number(i[o]);
                break;
            case"%m":
                n = Number(i[o]) - 1;
                break;
            case"%Y":
            case"%y":
                a = Number(i[o]), a < 100 && (a += a > 29 ? 1900 : 2e3);
                break;
            case"%b":
            case"%B":
                var c = i[o].toLowerCase(), m = !1;
                if ("%b" == s[o]) for (d = 0; d < 12; ++d) if (Calendar._SMN[d].substr(0, c.length).toLowerCase() == c) {
                    n = d, m = !0;
                    break
                }
                if (!m) for (d = 0; d < 12; ++d) if (Calendar._MN[d].substr(0, c.length).toLowerCase() == c) {
                    n = d;
                    break
                }
                break;
            case"%H":
            case"%I":
            case"%k":
            case"%l":
                h = Number(i[o]);
                break;
            case"%P":
            case"%p":
                /pm/i.test(i[o]) && h < 12 ? h += 12 : /am/i.test(i[o]) && h >= 12 && (h -= 12);
                break;
            case"%M":
                u = Number(i[o]);
                break;
            case"%R":
                var C = i[o], p = C.indexOf(":"), v = C.substring(0, p), f = -1 == p ? 0 : C.substring(p + 1);
                h = Number(v), u = Number(f)
        }
        return {parts: i, year: a, month: n, day: r, hour: h, minute: u}
    }, Date.parseDate = function (e, t) {
        var a = new Date, n = Date.splitDate(e, t), r = n.parts, l = n.year, i = n.month, s = n.day, o = n.hour,
            d = n.minute, h = 0, u = 0;
        if (isNaN(l) && (l = a.getFullYear()), isNaN(i) && (i = a.getMonth()), isNaN(s) && (s = a.getDate()), isNaN(o) && (o = a.getHours()), isNaN(d) && (d = a.getMinutes()), 0 != l && -1 != i && 0 != s) return new Date(l, i, s, o, d, 0);
        for (l = 0, i = -1, s = 0, h = 0; h < r.length; ++h) if (-1 != r[h].search(/[a-zA-Z]+/)) {
            var c = -1;
            for (u = 0; u < 12; ++u) if (Calendar._MN[u].substr(0, r[h].length).toLowerCase() == r[h].toLowerCase()) {
                c = u;
                break
            }
            -1 != c && (-1 != i && (s = i + 1), i = c)
        } else Number(r[h]) <= 12 && -1 == i ? i = r[h] - 1 : Number(r[h]) > 31 && 0 == l ? (l = Number(r[h])) < 100 && (l += l > 29 ? 1900 : 2e3) : 0 == s && (s = r[h]);
        return 0 == l && (l = a.getFullYear()), -1 != i && 0 != s ? new Date(l, i, s, o, d, 0) : a
    }, Date.prototype.getMonthDays = function (e) {
        var t = this.getFullYear();
        return void 0 === e && (e = this.getMonth()), 0 != t % 4 || 0 == t % 100 && 0 != t % 400 || 1 != e ? Date._MD[e] : 29
    }, Date.prototype.getDayOfYear = function () {
        var e = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 13, 0, 0),
            t = new Date(this.getFullYear(), 0, 0, 13, 0, 0), a = e - t;
        return Math.floor(a / Date.DAY)
    }, Date.prototype.getWeekNumber = function (e) {
        return Date.useISO8601WeekNumbers ? this.getISO8601WeekNumber() : this.getSimpleWeekNumber(e)
    }, Date.prototype.getISO8601WeekNumber = function () {
        function e(e, t, a) {
            return y = e, m = t, t < 3 && (y -= 1), t < 3 && (m += 12), Math.floor(365.25 * y) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor(30.6 * (m + 1)) + a - 62
        }

        return function (t) {
            return year = t.getFullYear(), month = t.getMonth(), day = t.getDate(), wday = t.getDay(), weekday = (wday + 6) % 7 + 1, isoyear = year, d0 = e(year, 1, 0), weekday0 = (d0 + 4) % 7 + 1, d = e(year, month + 1, day), isoweeknr = Math.floor((d - d0 + weekday0 + 6) / 7) - Math.floor((weekday0 + 3) / 7), 11 == month && day - weekday > 27 && (isoweeknr = 1, isoyear += 1), 0 == month && weekday - day > 3 && (d0 = e(year - 1, 1, 0), weekday0 = (d0 + 4) % 7 + 1, isoweeknr = Math.floor((d - d0 + weekday0 + 6) / 7) - Math.floor((weekday0 + 3) / 7), isoyear -= 1), isoweeknr
        }(this)
    }, Date.prototype.getSimpleWeekNumber = function (e) {
        return function (e, t, a) {
            var n, r = e.getFullYear(), l = new Date(r, 0, 1);
            return n = Math.round((e - l) / 864e5), null != t && (n -= (7 + t - l.getDay()) % 7), null != a && (n += a), [r, 1 + n / 7 | 0, 1 + (7 + n) % 7]
        }(this, e || 6, 6)[1]
    }, Date.prototype.equalsTo = function (e) {
        return this.getFullYear() == e.getFullYear() && this.getMonth() == e.getMonth() && this.getDate() == e.getDate() && this.getHours() == e.getHours() && this.getMinutes() == e.getMinutes()
    }, Date.prototype.setDateOnly = function (e) {
        var t = new Date(e);
        this.setDate(1), this.setFullYear(t.getFullYear()), this.setMonth(t.getMonth()), this.setDate(t.getDate())
    }, Date.prototype.print = function (e) {
        var t = this.getMonth(), a = this.getDate(), n = this.getFullYear(), r = this.getWeekNumber(),
            l = this.getDay(), i = {}, s = this.getHours(), o = s >= 12, d = o ? s - 12 : s, h = this.getDayOfYear();
        0 == d && (d = 12);
        var u = this.getMinutes(), c = this.getSeconds();
        i["%a"] = Calendar._SDN[l], i["%A"] = Calendar._DN[l], i["%b"] = Calendar._SMN[t], i["%B"] = Calendar._MN[t], i["%C"] = 1 + Math.floor(n / 100), i["%d"] = a < 10 ? "0" + a : a, i["%e"] = a, i["%H"] = s < 10 ? "0" + s : s, i["%I"] = d < 10 ? "0" + d : d, i["%j"] = h < 100 ? h < 10 ? "00" + h : "0" + h : h, i["%k"] = s, i["%l"] = d, i["%m"] = t < 9 ? "0" + (1 + t) : 1 + t, i["%M"] = u < 10 ? "0" + u : u, i["%n"] = "\n", i["%p"] = o ? Calendar._TT.PM : Calendar._TT.AM, i["%P"] = o ? Calendar._TT.PM : Calendar._TT.AM, i["%R"] = i["%k"] + ":" + i["%M"], i["%s"] = Math.floor(this.getTime() / 1e3), i["%S"] = c < 10 ? "0" + c : c, i["%t"] = "\t", i["%U"] = i["%W"] = i["%V"] = r < 10 ? "0" + r : r, i["%u"] = l + 1, i["%w"] = l, i["%y"] = ("" + n).slice(-2), i["%Y"] = n, i["%%"] = "%";
        var m = /%./g;
        if (!Calendar.is_ie5 && !Calendar.is_khtml) return e.replace(m, function (e) {
            return i[e] || e
        });
        for (var C = e.match(m), p = 0; p < C.length; p++) {
            var v = i[C[p]];
            v && (m = new RegExp(C[p], "g"), e = e.replace(m, v))
        }
        return e
    }, Date.prototype.__msh_oldSetFullYear = Date.prototype.setFullYear, Date.prototype.setFullYear = function () {
        var e = new Date(this);
        e.__msh_oldSetFullYear.apply(this, arguments), e.getMonth() != this.getMonth() && this.setDate(28), this.__msh_oldSetFullYear.apply(this, arguments)
    }, window._dynarch_popupCalendar = null;
} catch (e) {
    WRMCB(e)
}
;
;
try {
    /* module-key = 'jira.webresources:calendar-lib', location = '/includes/lib/calendar/Calendar.setup.js' */
    !function (e, t) {
        Calendar.setup = function (a) {
            function n(e, t) {
                void 0 === a[e] && (a[e] = t)
            }

            function l(t) {
                var a = t.params, n = t.dateClicked || a.electric;
                n && a.inputField && (a.inputField.value = t.date.print(a.ifFormat), e(a.inputField).change()), n && a.displayArea && (a.displayArea.innerHTML = t.date.print(a.daFormat)), n && "function" == typeof a.onUpdate && a.onUpdate(t), n && a.flat && "function" == typeof a.flatCallback && a.flatCallback(t), "true" === a.singleClick ? a.singleClick = !0 : "false" === a.singleClick && (a.singleClick = !1), n && a.singleClick && t.dateClicked && t.callCloseHandler()
            }

            function i() {
                if (!0 === Calendar._UNSUPPORTED) return void alert("The JIRA Calendar does not currently support your language.");
                var e = a.inputField || a.displayArea, t = a.inputField ? a.ifFormat : a.daFormat, n = !1,
                    i = window.calendar;
                if (i && i.hide(), e && (e.value || e.innerHTML) && (a.date = Date.parseDate(e.value || e.innerHTML, t)), i && a.cache ? (a.date && i.setDate(a.date), i.hide()) : (window.calendar = i = new Calendar(a.firstDay, a.date, a.todayDate, a.onSelect || l, a.onClose || function (e) {
                    e.hide()
                }), i.showsTime = a.showsTime, i.time24 = "24" == a.timeFormat, i.weekNumbers = a.weekNumbers, Date.useISO8601WeekNumbers = a.useISO8601WeekNumbers, a.useISO8601WeekNumbers && (i.firstDayOfWeek = 1), n = !0), a.multiple) {
                    i.multiple = {};
                    for (var r = a.multiple.length; --r >= 0;) {
                        var u = a.multiple[r], o = u.print("%Y%m%d");
                        i.multiple[o] = u
                    }
                }
                return i.showsOtherMonths = a.showOthers, i.yearStep = a.step, i.setRange(a.range[0], a.range[1]), i.params = a, i.setDateStatusHandler(a.dateStatusFunc), i.getDateText = a.dateText, i.setDateFormat(t), n && i.create(), i.refresh(), a.position ? i.showAt(a.position[0], a.position[1]) : i.showAtElement(a.button || a.displayArea || a.inputField, a.align), !1
            }

            a = a || {}, n("inputField", null), n("context", null), n("displayArea", null), n("button", null), n("eventName", "click"), n("ifFormat", "%Y/%m/%d"), n("daFormat", "%Y/%m/%d"), n("singleClick", !0), n("disableFunc", null), n("dateStatusFunc", a.disableFunc), n("dateText", null), n("firstDay", null), n("align", "Br"), n("range", [1900, 2999]), n("weekNumbers", !0), n("useISO8601WeekNumbers", !1), n("flat", null), n("flatCallback", null), n("onSelect", null), n("onClose", null), n("onUpdate", null), n("date", null), n("todayDate", null), n("showsTime", !1), n("timeFormat", "24"), n("electric", !0), n("step", 1), n("position", null), n("cache", !1), n("showOthers", !1), n("multiple", null);
            var r, u, o = ["context", "inputField", "button", "displayArea"];
            for (r in o) u = o[r], a[u] instanceof e && (a[u] = a[u][0]);
            var s = ["inputField", "displayArea", "button"];
            for (r in s) if (u = s[r], "string" == typeof a[u]) {
                var d = "#" + e.escapeSelector(a[u]), p = e(a.context || document.body).find(d);
                a[u] = p[0]
            }
            if (!(a.flat || a.multiple || a.inputField || a.displayArea || a.button)) return t.log("Calendar.setup:\n  Nothing to setup (no fields found).  Please check your code"), !1;
            if (a.firstDay && null !== a.firstDay && (a.firstDay = +a.firstDay), null != a.flat) {
                if ("string" == typeof a.flat && (a.flat = document.getElementById(a.flat)), !a.flat) return t.log("Calendar.setup:\n  Flat specified but can't find parent."), !1;
                var c = new Calendar(a.firstDay, a.date, a.todayDate, a.onSelect || l);
                return c.showsOtherMonths = a.showOthers, c.showsTime = a.showsTime, c.time24 = "24" == a.timeFormat, c.params = a, c.weekNumbers = a.weekNumbers, c.setRange(a.range[0], a.range[1]), c.setDateStatusHandler(a.dateStatusFunc), c.getDateText = a.dateText, a.ifFormat && c.setDateFormat(a.ifFormat), a.inputField && "string" == typeof a.inputField.value && c.parseDate(a.inputField.value), c.create(a.flat), c.show(), !1
            }
            var f = a.button || a.displayArea || a.inputField;
            return e(f).bind(a.eventName, function (e) {
                e.preventDefault(), i()
            }), a.inputField && function () {
                var t = e(a.inputField);
                a.button && e(a.button).mousedown(function (e) {
                    e.preventDefault(), !t.is(":focus") && t.is(":enabled") && t.focus()
                }), t.keydown(function (e) {
                    var t = window.calendar;
                    40 === e.keyCode && (t && !t.hidden || setTimeout(function () {
                        i()
                    }, 1))
                })
            }(), c
        }
    }(require("jquery"), require("jira/util/logger"));
} catch (e) {
    WRMCB(e)
}
;