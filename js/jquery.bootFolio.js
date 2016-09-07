(function (e) {
    if (!e.fn) {
        e.fn = new Object
    }
    e.fn.bootFolio = function (t) {
        var n = this;
        n.data("fn.bootFolio", n);
        n.init = function () {
            n.options = e.extend({}, e.fn.bootFolio.defaultOptions, t)
        };
        n.bootFolio = function (t) {
            function u() {
                function t() {
                    var t = 0;
                    while (t < c) {
                        if (a >= 1) {
                            e(f).eq(a * t + 0).css({top: u * t + 0 + "px", left: i * 0 + "px"});
                            if (a >= 2) {
                                e(f).eq(a * t + 1).css({top: u * t + 0 + "px", left: i * 1 + "px"});
                                if (a >= 3) {
                                    e(f).eq(a * t + 2).css({top: u * t + 0 + "px", left: i * 2 + "px"});
                                    if (a >= 4) {
                                        e(f).eq(a * t + 3).css({top: u * t + 0 + "px", left: i * 3 + "px"});
                                        if (a >= 5) {
                                            e(f).eq(a * t + 4).css({top: u * t + 0 + "px", left: i * 4 + "px"});
                                            if (a >= 6) {
                                                e(f).eq(a * t + 5).css({top: u * t + 0 + "px", left: i * 5 + "px"})
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        t++
                    }
                    e(o).css("position", "absolute")
                }

                var r = e(s).width();
                var i = e(o).outerWidth(true);
                var u = e(o).outerHeight(true);
                var a = Math.round(r / i);
                var f = n.find(".items li.un-" + n.options.bfAnimation);
                var l = e(f).size();
                var c = Math.ceil(l / a);
                n.addClass(n.options.bfSpace);
                e(s).css("height", c * u + "px");
                e(o).css("position", "inherit");
                t()
            }

            var r = n.find(".filter");
            var i = n.find(".filter li a");
            var s = n.find(".items");
            var o = n.find(".items li");
            e(o).removeClass(n.options.bfAnimation).addClass("un-" + n.options.bfAnimation).css("opacity", "1");
            e(s).addClass(n.options.bfLayout).addClass(n.options.bfHover).addClass(n.options.bfSpace);
            e(".bf").addClass(n.options.bfFullWidth);
            e(".bf .items .caption").css("background", n.options.bfCaptioncolor);
            e(".bf .items .caption").css("color", n.options.bfTextcolor);
            e(".bf .items .caption").css("text-align", n.options.bfTextalign);
            e(r).css("text-align", n.options.bfNavalign);
            u();
            e(i).click(function () {
                e(this).addClass("active");
                e(i).not(this).removeClass("active");
                var t = e(this).data("cat");
                var r = n.find(".items li." + t);
                e(r).removeClass(n.options.bfAnimation).addClass("un-" + n.options.bfAnimation).css("opacity", "1");
                e(o).not(r).removeClass("un-" + n.options.bfAnimation).addClass(n.options.bfAnimation).css("opacity", "0");
                if (t == "all") {
                    e(o).removeClass(n.options.bfAnimation).addClass("un-" + n.options.bfAnimation).css("opacity", "1")
                }
                u();
                return false
            });
            e(".bf .items, .bf .items li").css({
                "-webkit-transition-duration": +n.options.bfAniDuration / 1e3 + "s",
                "-moz-transition-duration": +n.options.bfAniDuration / 1e3 + "s",
                "-o-transition-duration": +n.options.bfAniDuration / 1e3 + "s",
                "transition-duration": +n.options.bfAniDuration / 1e3 + "s"
            });
            e(".bf .items img, .bf .items .caption, .bf .items .bf-single-item").css({
                "-webkit-transition-duration": +n.options.bfAniDuration / 1e3 + "s",
                "-moz-transition-duration": +n.options.bfAniDuration / 1e3 + "s",
                "-o-transition-duration": +n.options.bfAniDuration / 1e3 + "s",
                "transition-duration": +n.options.bfAniDuration / 1e3 + "s"
            });
            setInterval(function () {
                u()
            }, 500)
        };
        n.init();
        n.bootFolio()
    };
    e.fn.bootFolio.defaultOptions = {
        bfLayout: "bflayhover",
        bfFullWidth: "full-width",
        bfHover: "bfhover162",
        bfAnimation: "scale",
        bfSpace: "nospace",
        bfAniDuration: 500,
        bfCaptioncolor: "#072B4B",
        bfTextcolor: "#ffffff",
        bfTextalign: "center",
        bfNavalign: "center"
    };
    e.fn.fn_bootFolio = function (t) {
        return this.each(function () {
            new e.fn.bootFolio(this, t)
        })
    }
})(jQuery)