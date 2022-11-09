/*!
 * Chart.js v2.9.0
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(function () {
        try {
            return require("moment")
        } catch (t) {
        }
    }()) : "function" == typeof define && define.amd ? define(["require"], function (t) {
        return e(function () {
            try {
                return t("moment")
            } catch (t) {
            }
        }())
    }) : (t = t || self).Chart = e(t.moment)
}(this, function (t) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var e = {
        rgb2hsl: i, rgb2hsv: n, rgb2hwb: a, rgb2cmyk: o, rgb2keyword: s, rgb2xyz: l, rgb2lab: u, rgb2lch: function (t) {
            return x(u(t))
        }, hsl2rgb: d, hsl2hsv: function (t) {
            var e = t[0], i = t[1] / 100, n = t[2] / 100;
            if (0 === n) return [0, 0, 0];
            return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)]
        }, hsl2hwb: function (t) {
            return a(d(t))
        }, hsl2cmyk: function (t) {
            return o(d(t))
        }, hsl2keyword: function (t) {
            return s(d(t))
        }, hsv2rgb: h, hsv2hsl: function (t) {
            var e, i, n = t[0], a = t[1] / 100, r = t[2] / 100;
            return e = a * r, [n, 100 * (e = (e /= (i = (2 - a) * r) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
        }, hsv2hwb: function (t) {
            return a(h(t))
        }, hsv2cmyk: function (t) {
            return o(h(t))
        }, hsv2keyword: function (t) {
            return s(h(t))
        }, hwb2rgb: c, hwb2hsl: function (t) {
            return i(c(t))
        }, hwb2hsv: function (t) {
            return n(c(t))
        }, hwb2cmyk: function (t) {
            return o(c(t))
        }, hwb2keyword: function (t) {
            return s(c(t))
        }, cmyk2rgb: f, cmyk2hsl: function (t) {
            return i(f(t))
        }, cmyk2hsv: function (t) {
            return n(f(t))
        }, cmyk2hwb: function (t) {
            return a(f(t))
        }, cmyk2keyword: function (t) {
            return s(f(t))
        }, keyword2rgb: k, keyword2hsl: function (t) {
            return i(k(t))
        }, keyword2hsv: function (t) {
            return n(k(t))
        }, keyword2hwb: function (t) {
            return a(k(t))
        }, keyword2cmyk: function (t) {
            return o(k(t))
        }, keyword2lab: function (t) {
            return u(k(t))
        }, keyword2xyz: function (t) {
            return l(k(t))
        }, xyz2rgb: p, xyz2lab: m, xyz2lch: function (t) {
            return x(m(t))
        }, lab2xyz: v, lab2rgb: y, lab2lch: x, lch2lab: _, lch2xyz: function (t) {
            return v(_(t))
        }, lch2rgb: function (t) {
            return y(_(t))
        }
    };

    function i(t) {
        var e, i, n = t[0] / 255, a = t[1] / 255, r = t[2] / 255, o = Math.min(n, a, r), s = Math.max(n, a, r),
            l = s - o;
        return s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (o + s) / 2, [e, 100 * (s == o ? 0 : i <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * i]
    }

    function n(t) {
        var e, i, n = t[0], a = t[1], r = t[2], o = Math.min(n, a, r), s = Math.max(n, a, r), l = s - o;
        return i = 0 == s ? 0 : l / s * 1e3 / 10, s == o ? e = 0 : n == s ? e = (a - r) / l : a == s ? e = 2 + (r - n) / l : r == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
    }

    function a(t) {
        var e = t[0], n = t[1], a = t[2];
        return [i(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(n, a)))]
    }

    function o(t) {
        var e, i = t[0] / 255, n = t[1] / 255, a = t[2] / 255;
        return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e]
    }

    function s(t) {
        return M[JSON.stringify(t)]
    }

    function l(t) {
        var e = t[0] / 255, i = t[1] / 255, n = t[2] / 255;
        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
    }

    function u(t) {
        var e = l(t), i = e[0], n = e[1], a = e[2];
        return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
    }

    function d(t) {
        var e, i, n, a, r, o = t[0] / 360, s = t[1] / 100, l = t[2] / 100;
        if (0 == s) return [r = 255 * l, r, r];
        e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
        for (var u = 0; u < 3; u++) (n = o + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, r = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[u] = 255 * r;
        return a
    }

    function h(t) {
        var e = t[0] / 60, i = t[1] / 100, n = t[2] / 100, a = Math.floor(e) % 6, r = e - Math.floor(e),
            o = 255 * n * (1 - i), s = 255 * n * (1 - i * r), l = 255 * n * (1 - i * (1 - r));
        n *= 255;
        switch (a) {
            case 0:
                return [n, l, o];
            case 1:
                return [s, n, o];
            case 2:
                return [o, n, l];
            case 3:
                return [o, s, n];
            case 4:
                return [l, o, n];
            case 5:
                return [n, o, s]
        }
    }

    function c(t) {
        var e, i, n, a, o = t[0] / 360, s = t[1] / 100, l = t[2] / 100, u = s + l;
        switch (u > 1 && (s /= u, l /= u), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {
            default:
            case 6:
            case 0:
                r = i, g = a, b = s;
                break;
            case 1:
                r = a, g = i, b = s;
                break;
            case 2:
                r = s, g = i, b = a;
                break;
            case 3:
                r = s, g = a, b = i;
                break;
            case 4:
                r = a, g = s, b = i;
                break;
            case 5:
                r = i, g = s, b = a
        }
        return [255 * r, 255 * g, 255 * b]
    }

    function f(t) {
        var e = t[0] / 100, i = t[1] / 100, n = t[2] / 100, a = t[3] / 100;
        return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))]
    }

    function p(t) {
        var e, i, n, a = t[0] / 100, r = t[1] / 100, o = t[2] / 100;
        return i = -.9689 * a + 1.8758 * r + .0415 * o, n = .0557 * a + -.204 * r + 1.057 * o, e = (e = 3.2406 * a + -1.5372 * r + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
    }

    function m(t) {
        var e = t[0], i = t[1], n = t[2];
        return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
    }

    function v(t) {
        var e, i, n, a, r = t[0], o = t[1], s = t[2];
        return r <= 8 ? a = (i = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((r + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (o / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)]
    }

    function x(t) {
        var e, i = t[0], n = t[1], a = t[2];
        return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e]
    }

    function y(t) {
        return p(v(t))
    }

    function _(t) {
        var e, i = t[0], n = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
    }

    function k(t) {
        return w[t]
    }

    var w = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }, M = {};
    for (var S in w) M[JSON.stringify(w[S])] = S;
    var C = function () {
        return new I
    };
    for (var P in e) {
        C[P + "Raw"] = function (t) {
            return function (i) {
                return "number" == typeof i && (i = Array.prototype.slice.call(arguments)), e[t](i)
            }
        }(P);
        var A = /(\w+)2(\w+)/.exec(P), D = A[1], T = A[2];
        (C[D] = C[D] || {})[T] = C[P] = function (t) {
            return function (i) {
                "number" == typeof i && (i = Array.prototype.slice.call(arguments));
                var n = e[t](i);
                if ("string" == typeof n || void 0 === n) return n;
                for (var a = 0; a < n.length; a++) n[a] = Math.round(n[a]);
                return n
            }
        }(P)
    }
    var I = function () {
        this.convs = {}
    };
    I.prototype.routeSpace = function (t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
    }, I.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this
    }, I.prototype.getValues = function (t) {
        var e = this.convs[t];
        if (!e) {
            var i = this.space, n = this.convs[i];
            e = C[i][t](n), this.convs[t] = e
        }
        return e
    }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        I.prototype[t] = function (e) {
            return this.routeSpace(t, arguments)
        }
    });
    var F = C, L = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }, O = {
        getRgba: R, getHsla: z, getRgb: function (t) {
            var e = R(t);
            return e && e.slice(0, 3)
        }, getHsl: function (t) {
            var e = z(t);
            return e && e.slice(0, 3)
        }, getHwb: N, getAlpha: function (t) {
            var e = R(t);
            if (e) return e[3];
            if (e = z(t)) return e[3];
            if (e = N(t)) return e[3]
        }, hexString: function (t, e) {
            e = void 0 !== e && 3 === t.length ? e : t[3];
            return "#" + H(t[0]) + H(t[1]) + H(t[2]) + (e >= 0 && e < 1 ? H(Math.round(255 * e)) : "")
        }, rgbString: function (t, e) {
            if (e < 1 || t[3] && t[3] < 1) return B(t, e);
            return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
        }, rgbaString: B, percentString: function (t, e) {
            if (e < 1 || t[3] && t[3] < 1) return E(t, e);
            var i = Math.round(t[0] / 255 * 100), n = Math.round(t[1] / 255 * 100), a = Math.round(t[2] / 255 * 100);
            return "rgb(" + i + "%, " + n + "%, " + a + "%)"
        }, percentaString: E, hslString: function (t, e) {
            if (e < 1 || t[3] && t[3] < 1) return W(t, e);
            return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
        }, hslaString: W, hwbString: function (t, e) {
            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
            return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
        }, keyword: function (t) {
            return j[t.slice(0, 3)]
        }
    };

    function R(t) {
        if (t) {
            var e = [0, 0, 0], i = 1, n = t.match(/^#([a-fA-F0-9]{3,4})$/i), a = "";
            if (n) {
                a = (n = n[1])[3];
                for (var r = 0; r < e.length; r++) e[r] = parseInt(n[r] + n[r], 16);
                a && (i = Math.round(parseInt(a + a, 16) / 255 * 100) / 100)
            } else if (n = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                a = n[2], n = n[1];
                for (r = 0; r < e.length; r++) e[r] = parseInt(n.slice(2 * r, 2 * r + 2), 16);
                a && (i = Math.round(parseInt(a, 16) / 255 * 100) / 100)
            } else if (n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (r = 0; r < e.length; r++) e[r] = parseInt(n[r + 1]);
                i = parseFloat(n[4])
            } else if (n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (r = 0; r < e.length; r++) e[r] = Math.round(2.55 * parseFloat(n[r + 1]));
                i = parseFloat(n[4])
            } else if (n = t.match(/(\w+)/)) {
                if ("transparent" == n[1]) return [0, 0, 0, 0];
                if (!(e = L[n[1]])) return
            }
            for (r = 0; r < e.length; r++) e[r] = V(e[r], 0, 255);
            return i = i || 0 == i ? V(i, 0, 1) : 1, e[3] = i, e
        }
    }

    function z(t) {
        if (t) {
            var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var i = parseFloat(e[4]);
                return [V(parseInt(e[1]), 0, 360), V(parseFloat(e[2]), 0, 100), V(parseFloat(e[3]), 0, 100), V(isNaN(i) ? 1 : i, 0, 1)]
            }
        }
    }

    function N(t) {
        if (t) {
            var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var i = parseFloat(e[4]);
                return [V(parseInt(e[1]), 0, 360), V(parseFloat(e[2]), 0, 100), V(parseFloat(e[3]), 0, 100), V(isNaN(i) ? 1 : i, 0, 1)]
            }
        }
    }

    function B(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
    }

    function E(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
    }

    function W(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
    }

    function V(t, e, i) {
        return Math.min(Math.max(e, t), i)
    }

    function H(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
    }

    var j = {};
    for (var q in L) j[L[q]] = q;
    var U = function (t) {
        return t instanceof U ? t : this instanceof U ? (this.valid = !1, this.values = {
            rgb: [0, 0, 0],
            hsl: [0, 0, 0],
            hsv: [0, 0, 0],
            hwb: [0, 0, 0],
            cmyk: [0, 0, 0, 0],
            alpha: 1
        }, void ("string" == typeof t ? (e = O.getRgba(t)) ? this.setValues("rgb", e) : (e = O.getHsla(t)) ? this.setValues("hsl", e) : (e = O.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new U(t);
        var e
    };
    U.prototype = {
        isValid: function () {
            return this.valid
        }, rgb: function () {
            return this.setSpace("rgb", arguments)
        }, hsl: function () {
            return this.setSpace("hsl", arguments)
        }, hsv: function () {
            return this.setSpace("hsv", arguments)
        }, hwb: function () {
            return this.setSpace("hwb", arguments)
        }, cmyk: function () {
            return this.setSpace("cmyk", arguments)
        }, rgbArray: function () {
            return this.values.rgb
        }, hslArray: function () {
            return this.values.hsl
        }, hsvArray: function () {
            return this.values.hsv
        }, hwbArray: function () {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
        }, cmykArray: function () {
            return this.values.cmyk
        }, rgbaArray: function () {
            var t = this.values;
            return t.rgb.concat([t.alpha])
        }, hslaArray: function () {
            var t = this.values;
            return t.hsl.concat([t.alpha])
        }, alpha: function (t) {
            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
        }, red: function (t) {
            return this.setChannel("rgb", 0, t)
        }, green: function (t) {
            return this.setChannel("rgb", 1, t)
        }, blue: function (t) {
            return this.setChannel("rgb", 2, t)
        }, hue: function (t) {
            return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
        }, saturation: function (t) {
            return this.setChannel("hsl", 1, t)
        }, lightness: function (t) {
            return this.setChannel("hsl", 2, t)
        }, saturationv: function (t) {
            return this.setChannel("hsv", 1, t)
        }, whiteness: function (t) {
            return this.setChannel("hwb", 1, t)
        }, blackness: function (t) {
            return this.setChannel("hwb", 2, t)
        }, value: function (t) {
            return this.setChannel("hsv", 2, t)
        }, cyan: function (t) {
            return this.setChannel("cmyk", 0, t)
        }, magenta: function (t) {
            return this.setChannel("cmyk", 1, t)
        }, yellow: function (t) {
            return this.setChannel("cmyk", 2, t)
        }, black: function (t) {
            return this.setChannel("cmyk", 3, t)
        }, hexString: function () {
            return O.hexString(this.values.rgb)
        }, rgbString: function () {
            return O.rgbString(this.values.rgb, this.values.alpha)
        }, rgbaString: function () {
            return O.rgbaString(this.values.rgb, this.values.alpha)
        }, percentString: function () {
            return O.percentString(this.values.rgb, this.values.alpha)
        }, hslString: function () {
            return O.hslString(this.values.hsl, this.values.alpha)
        }, hslaString: function () {
            return O.hslaString(this.values.hsl, this.values.alpha)
        }, hwbString: function () {
            return O.hwbString(this.values.hwb, this.values.alpha)
        }, keyword: function () {
            return O.keyword(this.values.rgb, this.values.alpha)
        }, rgbNumber: function () {
            var t = this.values.rgb;
            return t[0] << 16 | t[1] << 8 | t[2]
        }, luminosity: function () {
            for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                var n = t[i] / 255;
                e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        }, contrast: function (t) {
            var e = this.luminosity(), i = t.luminosity();
            return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
        }, level: function (t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
        }, dark: function () {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
        }, light: function () {
            return !this.dark()
        }, negate: function () {
            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this
        }, lighten: function (t) {
            var e = this.values.hsl;
            return e[2] += e[2] * t, this.setValues("hsl", e), this
        }, darken: function (t) {
            var e = this.values.hsl;
            return e[2] -= e[2] * t, this.setValues("hsl", e), this
        }, saturate: function (t) {
            var e = this.values.hsl;
            return e[1] += e[1] * t, this.setValues("hsl", e), this
        }, desaturate: function (t) {
            var e = this.values.hsl;
            return e[1] -= e[1] * t, this.setValues("hsl", e), this
        }, whiten: function (t) {
            var e = this.values.hwb;
            return e[1] += e[1] * t, this.setValues("hwb", e), this
        }, blacken: function (t) {
            var e = this.values.hwb;
            return e[2] += e[2] * t, this.setValues("hwb", e), this
        }, greyscale: function () {
            var t = this.values.rgb, e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return this.setValues("rgb", [e, e, e]), this
        }, clearer: function (t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this
        }, opaquer: function (t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this
        }, rotate: function (t) {
            var e = this.values.hsl, i = (e[0] + t) % 360;
            return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
        }, mix: function (t, e) {
            var i = t, n = void 0 === e ? .5 : e, a = 2 * n - 1, r = this.alpha() - i.alpha(),
                o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2, s = 1 - o;
            return this.rgb(o * this.red() + s * i.red(), o * this.green() + s * i.green(), o * this.blue() + s * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n))
        }, toJSON: function () {
            return this.rgb()
        }, clone: function () {
            var t, e, i = new U, n = this.values, a = i.values;
            for (var r in n) n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
            return i
        }
    }, U.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
    }, U.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
    }, U.prototype.getValues = function (t) {
        for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
        return 1 !== e.alpha && (i.a = e.alpha), i
    }, U.prototype.setValues = function (t, e) {
        var i, n, a = this.values, r = this.spaces, o = this.maxes, s = 1;
        if (this.valid = !0, "alpha" === t) s = e; else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length]; else if (void 0 !== e[t.charAt(0)]) {
            for (i = 0; i < t.length; i++) a[t][i] = e[t.charAt(i)];
            s = e.a
        } else if (void 0 !== e[r[t][0]]) {
            var l = r[t];
            for (i = 0; i < t.length; i++) a[t][i] = e[l[i]];
            s = e.alpha
        }
        if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;
        for (i = 0; i < t.length; i++) n = Math.max(0, Math.min(o[t][i], a[t][i])), a[t][i] = Math.round(n);
        for (var u in r) u !== t && (a[u] = F[t][u](a[t]));
        return !0
    }, U.prototype.setSpace = function (t, e) {
        var i = e[0];
        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
    }, U.prototype.setChannel = function (t, e, i) {
        var n = this.values[t];
        return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this)
    }, "undefined" != typeof window && (window.Color = U);
    var Y, G = U, X = {
        noop: function () {
        }, uid: (Y = 0, function () {
            return Y++
        }), isNullOrUndef: function (t) {
            return null == t
        }, isArray: function (t) {
            if (Array.isArray && Array.isArray(t)) return !0;
            var e = Object.prototype.toString.call(t);
            return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
        }, isObject: function (t) {
            return null !== t && "[object Object]" === Object.prototype.toString.call(t)
        }, isFinite: function (t) {
            return ("number" == typeof t || t instanceof Number) && isFinite(t)
        }, valueOrDefault: function (t, e) {
            return void 0 === t ? e : t
        }, valueAtIndexOrDefault: function (t, e, i) {
            return X.valueOrDefault(X.isArray(t) ? t[e] : t, i)
        }, callback: function (t, e, i) {
            if (t && "function" == typeof t.call) return t.apply(i, e)
        }, each: function (t, e, i, n) {
            var a, r, o;
            if (X.isArray(t)) if (r = t.length, n) for (a = r - 1; a >= 0; a--) e.call(i, t[a], a); else for (a = 0; a < r; a++) e.call(i, t[a], a); else if (X.isObject(t)) for (r = (o = Object.keys(t)).length, a = 0; a < r; a++) e.call(i, t[o[a]], o[a])
        }, arrayEquals: function (t, e) {
            var i, n, a, r;
            if (!t || !e || t.length !== e.length) return !1;
            for (i = 0, n = t.length; i < n; ++i) if (a = t[i], r = e[i], a instanceof Array && r instanceof Array) {
                if (!X.arrayEquals(a, r)) return !1
            } else if (a !== r) return !1;
            return !0
        }, clone: function (t) {
            if (X.isArray(t)) return t.map(X.clone);
            if (X.isObject(t)) {
                for (var e = {}, i = Object.keys(t), n = i.length, a = 0; a < n; ++a) e[i[a]] = X.clone(t[i[a]]);
                return e
            }
            return t
        }, _merger: function (t, e, i, n) {
            var a = e[t], r = i[t];
            X.isObject(a) && X.isObject(r) ? X.merge(a, r, n) : e[t] = X.clone(r)
        }, _mergerIf: function (t, e, i) {
            var n = e[t], a = i[t];
            X.isObject(n) && X.isObject(a) ? X.mergeIf(n, a) : e.hasOwnProperty(t) || (e[t] = X.clone(a))
        }, merge: function (t, e, i) {
            var n, a, r, o, s, l = X.isArray(e) ? e : [e], u = l.length;
            if (!X.isObject(t)) return t;
            for (n = (i = i || {}).merger || X._merger, a = 0; a < u; ++a) if (e = l[a], X.isObject(e)) for (s = 0, o = (r = Object.keys(e)).length; s < o; ++s) n(r[s], t, e, i);
            return t
        }, mergeIf: function (t, e) {
            return X.merge(t, e, {merger: X._mergerIf})
        }, extend: Object.assign || function (t) {
            return X.merge(t, [].slice.call(arguments, 1), {
                merger: function (t, e, i) {
                    e[t] = i[t]
                }
            })
        }, inherits: function (t) {
            var e = this, i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                return e.apply(this, arguments)
            }, n = function () {
                this.constructor = i
            };
            return n.prototype = e.prototype, i.prototype = new n, i.extend = X.inherits, t && X.extend(i.prototype, t), i.__super__ = e.prototype, i
        }, _deprecated: function (t, e, i, n) {
            void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + n + '" instead')
        }
    }, K = X;
    X.callCallback = X.callback, X.indexOf = function (t, e, i) {
        return Array.prototype.indexOf.call(t, e, i)
    }, X.getValueOrDefault = X.valueOrDefault, X.getValueAtIndexOrDefault = X.valueAtIndexOrDefault;
    var Z = {
        linear: function (t) {
            return t
        }, easeInQuad: function (t) {
            return t * t
        }, easeOutQuad: function (t) {
            return -t * (t - 2)
        }, easeInOutQuad: function (t) {
            return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }, easeInCubic: function (t) {
            return t * t * t
        }, easeOutCubic: function (t) {
            return (t -= 1) * t * t + 1
        }, easeInOutCubic: function (t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }, easeInQuart: function (t) {
            return t * t * t * t
        }, easeOutQuart: function (t) {
            return -((t -= 1) * t * t * t - 1)
        }, easeInOutQuart: function (t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }, easeInQuint: function (t) {
            return t * t * t * t * t
        }, easeOutQuint: function (t) {
            return (t -= 1) * t * t * t * t + 1
        }, easeInOutQuint: function (t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }, easeInSine: function (t) {
            return 1 - Math.cos(t * (Math.PI / 2))
        }, easeOutSine: function (t) {
            return Math.sin(t * (Math.PI / 2))
        }, easeInOutSine: function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        }, easeInExpo: function (t) {
            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
        }, easeOutExpo: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        }, easeInOutExpo: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
        }, easeInCirc: function (t) {
            return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
        }, easeOutCirc: function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }, easeInOutCirc: function (t) {
            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, easeInElastic: function (t) {
            var e = 1.70158, i = 0, n = 1;
            return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
        }, easeOutElastic: function (t) {
            var e = 1.70158, i = 0, n = 1;
            return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
        }, easeInOutElastic: function (t) {
            var e = 1.70158, i = 0, n = 1;
            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
        }, easeInBack: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, easeOutBack: function (t) {
            var e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1
        }, easeInOutBack: function (t) {
            var e = 1.70158;
            return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
        }, easeInBounce: function (t) {
            return 1 - Z.easeOutBounce(1 - t)
        }, easeOutBounce: function (t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, easeInOutBounce: function (t) {
            return t < .5 ? .5 * Z.easeInBounce(2 * t) : .5 * Z.easeOutBounce(2 * t - 1) + .5
        }
    }, $ = {effects: Z};
    K.easingEffects = Z;
    var J = Math.PI, Q = J / 180, tt = 2 * J, et = J / 2, it = J / 4, nt = 2 * J / 3, at = {
        clear: function (t) {
            t.ctx.clearRect(0, 0, t.width, t.height)
        }, roundedRect: function (t, e, i, n, a, r) {
            if (r) {
                var o = Math.min(r, a / 2, n / 2), s = e + o, l = i + o, u = e + n - o, d = i + a - o;
                t.moveTo(e, l), s < u && l < d ? (t.arc(s, l, o, -J, -et), t.arc(u, l, o, -et, 0), t.arc(u, d, o, 0, et), t.arc(s, d, o, et, J)) : s < u ? (t.moveTo(s, i), t.arc(u, l, o, -et, et), t.arc(s, l, o, et, J + et)) : l < d ? (t.arc(s, l, o, -J, 0), t.arc(s, d, o, 0, J)) : t.arc(s, l, o, -J, J), t.closePath(), t.moveTo(e, i)
            } else t.rect(e, i, n, a)
        }, drawPoint: function (t, e, i, n, a, r) {
            var o, s, l, u, d, h = (r || 0) * Q;
            if (e && "object" == typeof e && ("[object HTMLImageElement]" === (o = e.toString()) || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(n, a), t.rotate(h), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore();
            if (!(isNaN(i) || i <= 0)) {
                switch (t.beginPath(), e) {
                    default:
                        t.arc(n, a, i, 0, tt), t.closePath();
                        break;
                    case"triangle":
                        t.moveTo(n + Math.sin(h) * i, a - Math.cos(h) * i), h += nt, t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i), h += nt, t.lineTo(n + Math.sin(h) * i, a - Math.cos(h) * i), t.closePath();
                        break;
                    case"rectRounded":
                        u = i - (d = .516 * i), s = Math.cos(h + it) * u, l = Math.sin(h + it) * u, t.arc(n - s, a - l, d, h - J, h - et), t.arc(n + l, a - s, d, h - et, h), t.arc(n + s, a + l, d, h, h + et), t.arc(n - l, a + s, d, h + et, h + J), t.closePath();
                        break;
                    case"rect":
                        if (!r) {
                            u = Math.SQRT1_2 * i, t.rect(n - u, a - u, 2 * u, 2 * u);
                            break
                        }
                        h += it;
                    case"rectRot":
                        s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + l, a - s), t.lineTo(n + s, a + l), t.lineTo(n - l, a + s), t.closePath();
                        break;
                    case"crossRot":
                        h += it;
                    case"cross":
                        s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n + l, a - s), t.lineTo(n - l, a + s);
                        break;
                    case"star":
                        s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n + l, a - s), t.lineTo(n - l, a + s), h += it, s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n + l, a - s), t.lineTo(n - l, a + s);
                        break;
                    case"line":
                        s = Math.cos(h) * i, l = Math.sin(h) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l);
                        break;
                    case"dash":
                        t.moveTo(n, a), t.lineTo(n + Math.cos(h) * i, a + Math.sin(h) * i)
                }
                t.fill(), t.stroke()
            }
        }, _isPointInArea: function (t, e) {
            return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6
        }, clipArea: function (t, e) {
            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
        }, unclipArea: function (t) {
            t.restore()
        }, lineTo: function (t, e, i, n) {
            var a = i.steppedLine;
            if (a) {
                if ("middle" === a) {
                    var r = (e.x + i.x) / 2;
                    t.lineTo(r, n ? i.y : e.y), t.lineTo(r, n ? e.y : i.y)
                } else "after" === a && !n || "after" !== a && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
                t.lineTo(i.x, i.y)
            } else i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
        }
    }, rt = at;
    K.clear = at.clear, K.drawRoundedRectangle = function (t) {
        t.beginPath(), at.roundedRect.apply(at, arguments)
    };
    var ot = {
        _set: function (t, e) {
            return K.merge(this[t] || (this[t] = {}), e)
        }
    };
    ot._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: !0
    });
    var st = ot, lt = K.valueOrDefault;
    var ut = {
        toLineHeight: function (t, e) {
            var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
            if (!i || "normal" === i[1]) return 1.2 * e;
            switch (t = +i[2], i[3]) {
                case"px":
                    return t;
                case"%":
                    t /= 100
            }
            return e * t
        }, toPadding: function (t) {
            var e, i, n, a;
            return K.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, a = +t.left || 0) : e = i = n = a = +t || 0, {
                top: e,
                right: i,
                bottom: n,
                left: a,
                height: e + n,
                width: a + i
            }
        }, _parseFont: function (t) {
            var e = st.global, i = lt(t.fontSize, e.defaultFontSize), n = {
                family: lt(t.fontFamily, e.defaultFontFamily),
                lineHeight: K.options.toLineHeight(lt(t.lineHeight, e.defaultLineHeight), i),
                size: i,
                style: lt(t.fontStyle, e.defaultFontStyle),
                weight: null,
                string: ""
            };
            return n.string = function (t) {
                return !t || K.isNullOrUndef(t.size) || K.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
            }(n), n
        }, resolve: function (t, e, i, n) {
            var a, r, o, s = !0;
            for (a = 0, r = t.length; a < r; ++a) if (void 0 !== (o = t[a]) && (void 0 !== e && "function" == typeof o && (o = o(e), s = !1), void 0 !== i && K.isArray(o) && (o = o[i], s = !1), void 0 !== o)) return n && !s && (n.cacheable = !1), o
        }
    }, dt = {
        _factorize: function (t) {
            var e, i = [], n = Math.sqrt(t);
            for (e = 1; e < n; e++) t % e == 0 && (i.push(e), i.push(t / e));
            return n === (0 | n) && i.push(n), i.sort(function (t, e) {
                return t - e
            }).pop(), i
        }, log10: Math.log10 || function (t) {
            var e = Math.log(t) * Math.LOG10E, i = Math.round(e);
            return t === Math.pow(10, i) ? i : e
        }
    }, ht = dt;
    K.log10 = dt.log10;
    var ct = K, ft = $, gt = rt, pt = ut, mt = ht, vt = {
        getRtlAdapter: function (t, e, i) {
            return t ? function (t, e) {
                return {
                    x: function (i) {
                        return t + t + e - i
                    }, setWidth: function (t) {
                        e = t
                    }, textAlign: function (t) {
                        return "center" === t ? t : "right" === t ? "left" : "right"
                    }, xPlus: function (t, e) {
                        return t - e
                    }, leftForLtr: function (t, e) {
                        return t - e
                    }
                }
            }(e, i) : {
                x: function (t) {
                    return t
                }, setWidth: function (t) {
                }, textAlign: function (t) {
                    return t
                }, xPlus: function (t, e) {
                    return t + e
                }, leftForLtr: function (t, e) {
                    return t
                }
            }
        }, overrideTextDirection: function (t, e) {
            var i, n;
            "ltr" !== e && "rtl" !== e || (n = [(i = t.canvas.style).getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = n)
        }, restoreTextDirection: function (t) {
            var e = t.prevTextDirection;
            void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
        }
    };
    ct.easing = ft, ct.canvas = gt, ct.options = pt, ct.math = mt, ct.rtl = vt;
    var bt = function (t) {
        ct.extend(this, t), this.initialize.apply(this, arguments)
    };
    ct.extend(bt.prototype, {
        _type: void 0, initialize: function () {
            this.hidden = !1
        }, pivot: function () {
            var t = this;
            return t._view || (t._view = ct.extend({}, t._model)), t._start = {}, t
        }, transition: function (t) {
            var e = this, i = e._model, n = e._start, a = e._view;
            return i && 1 !== t ? (a || (a = e._view = {}), n || (n = e._start = {}), function (t, e, i, n) {
                var a, r, o, s, l, u, d, h, c, f = Object.keys(i);
                for (a = 0, r = f.length; a < r; ++a) if (u = i[o = f[a]], e.hasOwnProperty(o) || (e[o] = u), (s = e[o]) !== u && "_" !== o[0]) {
                    if (t.hasOwnProperty(o) || (t[o] = s), (d = typeof u) === typeof (l = t[o])) if ("string" === d) {
                        if ((h = G(l)).valid && (c = G(u)).valid) {
                            e[o] = c.mix(h, n).rgbString();
                            continue
                        }
                    } else if (ct.isFinite(l) && ct.isFinite(u)) {
                        e[o] = l + (u - l) * n;
                        continue
                    }
                    e[o] = u
                }
            }(n, a, i, t), e) : (e._view = ct.extend({}, i), e._start = null, e)
        }, tooltipPosition: function () {
            return {x: this._model.x, y: this._model.y}
        }, hasValue: function () {
            return ct.isNumber(this._model.x) && ct.isNumber(this._model.y)
        }
    }), bt.extend = ct.inherits;
    var xt = bt, yt = xt.extend({
        chart: null,
        currentStep: 0,
        numSteps: 60,
        easing: "",
        render: null,
        onAnimationProgress: null,
        onAnimationComplete: null
    }), _t = yt;
    Object.defineProperty(yt.prototype, "animationObject", {
        get: function () {
            return this
        }
    }), Object.defineProperty(yt.prototype, "chartInstance", {
        get: function () {
            return this.chart
        }, set: function (t) {
            this.chart = t
        }
    }), st._set("global", {
        animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: ct.noop,
            onComplete: ct.noop
        }
    });
    var kt = {
        animations: [], request: null, addAnimation: function (t, e, i, n) {
            var a, r, o = this.animations;
            for (e.chart = t, e.startTime = Date.now(), e.duration = i, n || (t.animating = !0), a = 0, r = o.length; a < r; ++a) if (o[a].chart === t) return void (o[a] = e);
            o.push(e), 1 === o.length && this.requestAnimationFrame()
        }, cancelAnimation: function (t) {
            var e = ct.findIndex(this.animations, function (e) {
                return e.chart === t
            });
            -1 !== e && (this.animations.splice(e, 1), t.animating = !1)
        }, requestAnimationFrame: function () {
            var t = this;
            null === t.request && (t.request = ct.requestAnimFrame.call(window, function () {
                t.request = null, t.startDigest()
            }))
        }, startDigest: function () {
            this.advance(), this.animations.length > 0 && this.requestAnimationFrame()
        }, advance: function () {
            for (var t, e, i, n, a = this.animations, r = 0; r < a.length;) e = (t = a[r]).chart, i = t.numSteps, n = Math.floor((Date.now() - t.startTime) / t.duration * i) + 1, t.currentStep = Math.min(n, i), ct.callback(t.render, [e, t], e), ct.callback(t.onAnimationProgress, [t], e), t.currentStep >= i ? (ct.callback(t.onAnimationComplete, [t], e), e.animating = !1, a.splice(r, 1)) : ++r
        }
    }, wt = ct.options.resolve, Mt = ["push", "pop", "shift", "splice", "unshift"];

    function St(t, e) {
        var i = t._chartjs;
        if (i) {
            var n = i.listeners, a = n.indexOf(e);
            -1 !== a && n.splice(a, 1), n.length > 0 || (Mt.forEach(function (e) {
                delete t[e]
            }), delete t._chartjs)
        }
    }

    var Ct = function (t, e) {
        this.initialize(t, e)
    };
    ct.extend(Ct.prototype, {
        datasetElementType: null,
        dataElementType: null,
        _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
        initialize: function (t, e) {
            var i = this;
            i.chart = t, i.index = e, i.linkScales(), i.addElements(), i._type = i.getMeta().type
        },
        updateIndex: function (t) {
            this.index = t
        },
        linkScales: function () {
            var t = this.getMeta(), e = this.chart, i = e.scales, n = this.getDataset(), a = e.options.scales;
            null !== t.xAxisID && t.xAxisID in i && !n.xAxisID || (t.xAxisID = n.xAxisID || a.xAxes[0].id), null !== t.yAxisID && t.yAxisID in i && !n.yAxisID || (t.yAxisID = n.yAxisID || a.yAxes[0].id)
        },
        getDataset: function () {
            return this.chart.data.datasets[this.index]
        },
        getMeta: function () {
            return this.chart.getDatasetMeta(this.index)
        },
        getScaleForId: function (t) {
            return this.chart.scales[t]
        },
        _getValueScaleId: function () {
            return this.getMeta().yAxisID
        },
        _getIndexScaleId: function () {
            return this.getMeta().xAxisID
        },
        _getValueScale: function () {
            return this.getScaleForId(this._getValueScaleId())
        },
        _getIndexScale: function () {
            return this.getScaleForId(this._getIndexScaleId())
        },
        reset: function () {
            this._update(!0)
        },
        destroy: function () {
            this._data && St(this._data, this)
        },
        createMetaDataset: function () {
            var t = this.datasetElementType;
            return t && new t({_chart: this.chart, _datasetIndex: this.index})
        },
        createMetaData: function (t) {
            var e = this.dataElementType;
            return e && new e({_chart: this.chart, _datasetIndex: this.index, _index: t})
        },
        addElements: function () {
            var t, e, i = this.getMeta(), n = this.getDataset().data || [], a = i.data;
            for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
            i.dataset = i.dataset || this.createMetaDataset()
        },
        addElementAndReset: function (t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
        },
        buildOrUpdateElements: function () {
            var t, e, i = this, n = i.getDataset(), a = n.data || (n.data = []);
            i._data !== a && (i._data && St(i._data, i), a && Object.isExtensible(a) && (e = i, (t = a)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: {listeners: [e]}
            }), Mt.forEach(function (e) {
                var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1), n = t[e];
                Object.defineProperty(t, e, {
                    configurable: !0, enumerable: !1, value: function () {
                        var e = Array.prototype.slice.call(arguments), a = n.apply(this, e);
                        return ct.each(t._chartjs.listeners, function (t) {
                            "function" == typeof t[i] && t[i].apply(t, e)
                        }), a
                    }
                })
            }))), i._data = a), i.resyncElements()
        },
        _configure: function () {
            this._config = ct.merge({}, [this.chart.options.datasets[this._type], this.getDataset()], {
                merger: function (t, e, i) {
                    "_meta" !== t && "data" !== t && ct._merger(t, e, i)
                }
            })
        },
        _update: function (t) {
            this._configure(), this._cachedDataOpts = null, this.update(t)
        },
        update: ct.noop,
        transition: function (t) {
            for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
            e.dataset && e.dataset.transition(t)
        },
        draw: function () {
            var t = this.getMeta(), e = t.data || [], i = e.length, n = 0;
            for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
        },
        getStyle: function (t) {
            var e, i = this.getMeta(), n = i.dataset;
            return this._configure(), n && void 0 === t ? e = this._resolveDatasetElementOptions(n || {}) : (t = t || 0, e = this._resolveDataElementOptions(i.data[t] || {}, t)), !1 !== e.fill && null !== e.fill || (e.backgroundColor = "rgba(0,0,0,0)"), e
        },
        _resolveDatasetElementOptions: function (t, e) {
            var i, n, a, r, o = this, s = o.chart, l = o._config, u = t.custom || {},
                d = s.options.elements[o.datasetElementType.prototype._type] || {}, h = o._datasetElementOptions,
                c = {}, f = {chart: s, dataset: o.getDataset(), datasetIndex: o.index, hover: e};
            for (i = 0, n = h.length; i < n; ++i) a = h[i], r = e ? "hover" + a.charAt(0).toUpperCase() + a.slice(1) : a, c[a] = wt([u[r], l[r], d[r]], f);
            return c
        },
        _resolveDataElementOptions: function (t, e) {
            var i = this, n = t && t.custom, a = i._cachedDataOpts;
            if (a && !n) return a;
            var r, o, s, l, u = i.chart, d = i._config, h = u.options.elements[i.dataElementType.prototype._type] || {},
                c = i._dataElementOptions, f = {},
                g = {chart: u, dataIndex: e, dataset: i.getDataset(), datasetIndex: i.index}, p = {cacheable: !n};
            if (n = n || {}, ct.isArray(c)) for (o = 0, s = c.length; o < s; ++o) f[l = c[o]] = wt([n[l], d[l], h[l]], g, e, p); else for (o = 0, s = (r = Object.keys(c)).length; o < s; ++o) f[l = r[o]] = wt([n[l], d[c[l]], d[l], h[l]], g, e, p);
            return p.cacheable && (i._cachedDataOpts = Object.freeze(f)), f
        },
        removeHoverStyle: function (t) {
            ct.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
        },
        setHoverStyle: function (t) {
            var e = this.chart.data.datasets[t._datasetIndex], i = t._index, n = t.custom || {}, a = t._model,
                r = ct.getHoverColor;
            t.$previousStyle = {
                backgroundColor: a.backgroundColor,
                borderColor: a.borderColor,
                borderWidth: a.borderWidth
            }, a.backgroundColor = wt([n.hoverBackgroundColor, e.hoverBackgroundColor, r(a.backgroundColor)], void 0, i), a.borderColor = wt([n.hoverBorderColor, e.hoverBorderColor, r(a.borderColor)], void 0, i), a.borderWidth = wt([n.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth], void 0, i)
        },
        _removeDatasetHoverStyle: function () {
            var t = this.getMeta().dataset;
            t && this.removeHoverStyle(t)
        },
        _setDatasetHoverStyle: function () {
            var t, e, i, n, a, r, o = this.getMeta().dataset, s = {};
            if (o) {
                for (r = o._model, a = this._resolveDatasetElementOptions(o, !0), t = 0, e = (n = Object.keys(a)).length; t < e; ++t) s[i = n[t]] = r[i], r[i] = a[i];
                o.$previousStyle = s
            }
        },
        resyncElements: function () {
            var t = this.getMeta(), e = this.getDataset().data, i = t.data.length, n = e.length;
            n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i)
        },
        insertElements: function (t, e) {
            for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
        },
        onDataPush: function () {
            var t = arguments.length;
            this.insertElements(this.getDataset().data.length - t, t)
        },
        onDataPop: function () {
            this.getMeta().data.pop()
        },
        onDataShift: function () {
            this.getMeta().data.shift()
        },
        onDataSplice: function (t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
        },
        onDataUnshift: function () {
            this.insertElements(0, arguments.length)
        }
    }), Ct.extend = ct.inherits;
    var Pt = Ct, At = 2 * Math.PI;

    function Dt(t, e) {
        var i = e.startAngle, n = e.endAngle, a = e.pixelMargin, r = a / e.outerRadius, o = e.x, s = e.y;
        t.beginPath(), t.arc(o, s, e.outerRadius, i - r, n + r), e.innerRadius > a ? (r = a / e.innerRadius, t.arc(o, s, e.innerRadius - a, n + r, i - r, !0)) : t.arc(o, s, a, n + Math.PI / 2, i - Math.PI / 2), t.closePath(), t.clip()
    }

    function Tt(t, e, i) {
        var n = "inner" === e.borderAlign;
        n ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), i.fullCircles && function (t, e, i, n) {
            var a, r = i.endAngle;
            for (n && (i.endAngle = i.startAngle + At, Dt(t, i), i.endAngle = r, i.endAngle === i.startAngle && i.fullCircles && (i.endAngle += At, i.fullCircles--)), t.beginPath(), t.arc(i.x, i.y, i.innerRadius, i.startAngle + At, i.startAngle, !0), a = 0; a < i.fullCircles; ++a) t.stroke();
            for (t.beginPath(), t.arc(i.x, i.y, e.outerRadius, i.startAngle, i.startAngle + At), a = 0; a < i.fullCircles; ++a) t.stroke()
        }(t, e, i, n), n && Dt(t, i), t.beginPath(), t.arc(i.x, i.y, e.outerRadius, i.startAngle, i.endAngle), t.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0), t.closePath(), t.stroke()
    }

    st._set("global", {
        elements: {
            arc: {
                backgroundColor: st.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2,
                borderAlign: "center"
            }
        }
    });
    var It = xt.extend({
        _type: "arc", inLabelRange: function (t) {
            var e = this._view;
            return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
        }, inRange: function (t, e) {
            var i = this._view;
            if (i) {
                for (var n = ct.getAngleFromPoint(i, {
                    x: t,
                    y: e
                }), a = n.angle, r = n.distance, o = i.startAngle, s = i.endAngle; s < o;) s += At;
                for (; a > s;) a -= At;
                for (; a < o;) a += At;
                var l = a >= o && a <= s, u = r >= i.innerRadius && r <= i.outerRadius;
                return l && u
            }
            return !1
        }, getCenterPoint: function () {
            var t = this._view, e = (t.startAngle + t.endAngle) / 2, i = (t.innerRadius + t.outerRadius) / 2;
            return {x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i}
        }, getArea: function () {
            var t = this._view;
            return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
        }, tooltipPosition: function () {
            var t = this._view, e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
            return {x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i}
        }, draw: function () {
            var t, e = this._chart.ctx, i = this._view, n = "inner" === i.borderAlign ? .33 : 0, a = {
                x: i.x,
                y: i.y,
                innerRadius: i.innerRadius,
                outerRadius: Math.max(i.outerRadius - n, 0),
                pixelMargin: n,
                startAngle: i.startAngle,
                endAngle: i.endAngle,
                fullCircles: Math.floor(i.circumference / At)
            };
            if (e.save(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, a.fullCircles) {
                for (a.endAngle = a.startAngle + At, e.beginPath(), e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), t = 0; t < a.fullCircles; ++t) e.fill();
                a.endAngle = a.startAngle + i.circumference % At
            }
            e.beginPath(), e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), e.fill(), i.borderWidth && Tt(e, i, a), e.restore()
        }
    }), Ft = ct.valueOrDefault, Lt = st.global.defaultColor;
    st._set("global", {
        elements: {
            line: {
                tension: .4,
                backgroundColor: Lt,
                borderWidth: 3,
                borderColor: Lt,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0
            }
        }
    });
    var Ot = xt.extend({
        _type: "line", draw: function () {
            var t, e, i, n = this, a = n._view, r = n._chart.ctx, o = a.spanGaps, s = n._children.slice(),
                l = st.global, u = l.elements.line, d = -1, h = n._loop;
            if (s.length) {
                if (n._loop) {
                    for (t = 0; t < s.length; ++t) if (e = ct.previousItem(s, t), !s[t]._view.skip && e._view.skip) {
                        s = s.slice(t).concat(s.slice(0, t)), h = o;
                        break
                    }
                    h && s.push(s[0])
                }
                for (r.save(), r.lineCap = a.borderCapStyle || u.borderCapStyle, r.setLineDash && r.setLineDash(a.borderDash || u.borderDash), r.lineDashOffset = Ft(a.borderDashOffset, u.borderDashOffset), r.lineJoin = a.borderJoinStyle || u.borderJoinStyle, r.lineWidth = Ft(a.borderWidth, u.borderWidth), r.strokeStyle = a.borderColor || l.defaultColor, r.beginPath(), (i = s[0]._view).skip || (r.moveTo(i.x, i.y), d = 0), t = 1; t < s.length; ++t) i = s[t]._view, e = -1 === d ? ct.previousItem(s, t) : s[d], i.skip || (d !== t - 1 && !o || -1 === d ? r.moveTo(i.x, i.y) : ct.canvas.lineTo(r, e._view, i), d = t);
                h && r.closePath(), r.stroke(), r.restore()
            }
        }
    }), Rt = ct.valueOrDefault, zt = st.global.defaultColor;

    function Nt(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
    }

    st._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: zt,
                borderColor: zt,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    });
    var Bt = xt.extend({
        _type: "point", inRange: function (t, e) {
            var i = this._view;
            return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
        }, inLabelRange: Nt, inXRange: Nt, inYRange: function (t) {
            var e = this._view;
            return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
        }, getCenterPoint: function () {
            var t = this._view;
            return {x: t.x, y: t.y}
        }, getArea: function () {
            return Math.PI * Math.pow(this._view.radius, 2)
        }, tooltipPosition: function () {
            var t = this._view;
            return {x: t.x, y: t.y, padding: t.radius + t.borderWidth}
        }, draw: function (t) {
            var e = this._view, i = this._chart.ctx, n = e.pointStyle, a = e.rotation, r = e.radius, o = e.x, s = e.y,
                l = st.global, u = l.defaultColor;
            e.skip || (void 0 === t || ct.canvas._isPointInArea(e, t)) && (i.strokeStyle = e.borderColor || u, i.lineWidth = Rt(e.borderWidth, l.elements.point.borderWidth), i.fillStyle = e.backgroundColor || u, ct.canvas.drawPoint(i, n, r, o, s, a))
        }
    }), Et = st.global.defaultColor;

    function Wt(t) {
        return t && void 0 !== t.width
    }

    function Vt(t) {
        var e, i, n, a, r;
        return Wt(t) ? (r = t.width / 2, e = t.x - r, i = t.x + r, n = Math.min(t.y, t.base), a = Math.max(t.y, t.base)) : (r = t.height / 2, e = Math.min(t.x, t.base), i = Math.max(t.x, t.base), n = t.y - r, a = t.y + r), {
            left: e,
            top: n,
            right: i,
            bottom: a
        }
    }

    function Ht(t, e, i) {
        return t === e ? i : t === i ? e : t
    }

    function jt(t, e, i) {
        var n, a, r, o, s = t.borderWidth, l = function (t) {
            var e = t.borderSkipped, i = {};
            return e ? (t.horizontal ? t.base > t.x && (e = Ht(e, "left", "right")) : t.base < t.y && (e = Ht(e, "bottom", "top")), i[e] = !0, i) : i
        }(t);
        return ct.isObject(s) ? (n = +s.top || 0, a = +s.right || 0, r = +s.bottom || 0, o = +s.left || 0) : n = a = r = o = +s || 0, {
            t: l.top || n < 0 ? 0 : n > i ? i : n,
            r: l.right || a < 0 ? 0 : a > e ? e : a,
            b: l.bottom || r < 0 ? 0 : r > i ? i : r,
            l: l.left || o < 0 ? 0 : o > e ? e : o
        }
    }

    function qt(t, e, i) {
        var n = null === e, a = null === i, r = !(!t || n && a) && Vt(t);
        return r && (n || e >= r.left && e <= r.right) && (a || i >= r.top && i <= r.bottom)
    }

    st._set("global", {
        elements: {
            rectangle: {
                backgroundColor: Et,
                borderColor: Et,
                borderSkipped: "bottom",
                borderWidth: 0
            }
        }
    });
    var Ut = xt.extend({
        _type: "rectangle", draw: function () {
            var t = this._chart.ctx, e = this._view, i = function (t) {
                var e = Vt(t), i = e.right - e.left, n = e.bottom - e.top, a = jt(t, i / 2, n / 2);
                return {
                    outer: {x: e.left, y: e.top, w: i, h: n},
                    inner: {x: e.left + a.l, y: e.top + a.t, w: i - a.l - a.r, h: n - a.t - a.b}
                }
            }(e), n = i.outer, a = i.inner;
            t.fillStyle = e.backgroundColor, t.fillRect(n.x, n.y, n.w, n.h), n.w === a.w && n.h === a.h || (t.save(), t.beginPath(), t.rect(n.x, n.y, n.w, n.h), t.clip(), t.fillStyle = e.borderColor, t.rect(a.x, a.y, a.w, a.h), t.fill("evenodd"), t.restore())
        }, height: function () {
            var t = this._view;
            return t.base - t.y
        }, inRange: function (t, e) {
            return qt(this._view, t, e)
        }, inLabelRange: function (t, e) {
            var i = this._view;
            return Wt(i) ? qt(i, t, null) : qt(i, null, e)
        }, inXRange: function (t) {
            return qt(this._view, t, null)
        }, inYRange: function (t) {
            return qt(this._view, null, t)
        }, getCenterPoint: function () {
            var t, e, i = this._view;
            return Wt(i) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {x: t, y: e}
        }, getArea: function () {
            var t = this._view;
            return Wt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
        }, tooltipPosition: function () {
            var t = this._view;
            return {x: t.x, y: t.y}
        }
    }), Yt = {}, Gt = It, Xt = Ot, Kt = Bt, Zt = Ut;
    Yt.Arc = Gt, Yt.Line = Xt, Yt.Point = Kt, Yt.Rectangle = Zt;
    var $t = ct._deprecated, Jt = ct.valueOrDefault;

    function Qt(t, e, i) {
        var n, a, r = i.barThickness, o = e.stackCount, s = e.pixels[t], l = ct.isNullOrUndef(r) ? function (t, e) {
            var i, n, a, r, o = t._length;
            for (a = 1, r = e.length; a < r; ++a) o = Math.min(o, Math.abs(e[a] - e[a - 1]));
            for (a = 0, r = t.getTicks().length; a < r; ++a) n = t.getPixelForTick(a), o = a > 0 ? Math.min(o, Math.abs(n - i)) : o, i = n;
            return o
        }(e.scale, e.pixels) : -1;
        return ct.isNullOrUndef(r) ? (n = l * i.categoryPercentage, a = i.barPercentage) : (n = r * o, a = 1), {
            chunk: n / o,
            ratio: a,
            start: s - n / 2
        }
    }

    st._set("bar", {
        hover: {mode: "label"},
        scales: {xAxes: [{type: "category", offset: !0, gridLines: {offsetGridLines: !0}}], yAxes: [{type: "linear"}]}
    }), st._set("global", {datasets: {bar: {categoryPercentage: .8, barPercentage: .9}}});
    var te = Pt.extend({
        dataElementType: Yt.Rectangle,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
        initialize: function () {
            var t, e, i = this;
            Pt.prototype.initialize.apply(i, arguments), (t = i.getMeta()).stack = i.getDataset().stack, t.bar = !0, e = i._getIndexScale().options, $t("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), $t("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), $t("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), $t("bar chart", i._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), $t("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
        },
        update: function (t) {
            var e, i, n = this.getMeta().data;
            for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
        },
        updateElement: function (t, e, i) {
            var n = this, a = n.getMeta(), r = n.getDataset(), o = n._resolveDataElementOptions(t, e);
            t._xScale = n.getScaleForId(a.xAxisID), t._yScale = n.getScaleForId(a.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
                backgroundColor: o.backgroundColor,
                borderColor: o.borderColor,
                borderSkipped: o.borderSkipped,
                borderWidth: o.borderWidth,
                datasetLabel: r.label,
                label: n.chart.data.labels[e]
            }, ct.isArray(r.data[e]) && (t._model.borderSkipped = null), n._updateElementGeometry(t, e, i, o), t.pivot()
        },
        _updateElementGeometry: function (t, e, i, n) {
            var a = this, r = t._model, o = a._getValueScale(), s = o.getBasePixel(), l = o.isHorizontal(),
                u = a._ruler || a.getRuler(), d = a.calculateBarValuePixels(a.index, e, n),
                h = a.calculateBarIndexPixels(a.index, e, u, n);
            r.horizontal = l, r.base = i ? s : d.base, r.x = l ? i ? s : d.head : h.center, r.y = l ? h.center : i ? s : d.head, r.height = l ? h.size : void 0, r.width = l ? void 0 : h.size
        },
        _getStacks: function (t) {
            var e, i, n = this._getIndexScale(), a = n._getMatchingVisibleMetas(this._type), r = n.options.stacked,
                o = a.length, s = [];
            for (e = 0; e < o && (i = a[e], (!1 === r || -1 === s.indexOf(i.stack) || void 0 === r && void 0 === i.stack) && s.push(i.stack), i.index !== t); ++e) ;
            return s
        },
        getStackCount: function () {
            return this._getStacks().length
        },
        getStackIndex: function (t, e) {
            var i = this._getStacks(t), n = void 0 !== e ? i.indexOf(e) : -1;
            return -1 === n ? i.length - 1 : n
        },
        getRuler: function () {
            var t, e, i = this._getIndexScale(), n = [];
            for (t = 0, e = this.getMeta().data.length; t < e; ++t) n.push(i.getPixelForValue(null, t, this.index));
            return {pixels: n, start: i._startPixel, end: i._endPixel, stackCount: this.getStackCount(), scale: i}
        },
        calculateBarValuePixels: function (t, e, i) {
            var n, a, r, o, s, l, u, d = this.chart, h = this._getValueScale(), c = h.isHorizontal(),
                f = d.data.datasets, g = h._getMatchingVisibleMetas(this._type), p = h._parseValue(f[t].data[e]),
                m = i.minBarLength, v = h.options.stacked, b = this.getMeta().stack,
                x = void 0 === p.start ? 0 : p.max >= 0 && p.min >= 0 ? p.min : p.max,
                y = void 0 === p.start ? p.end : p.max >= 0 && p.min >= 0 ? p.max - p.min : p.min - p.max, _ = g.length;
            if (v || void 0 === v && void 0 !== b) for (n = 0; n < _ && (a = g[n]).index !== t; ++n) a.stack === b && (r = void 0 === (u = h._parseValue(f[a.index].data[e])).start ? u.end : u.min >= 0 && u.max >= 0 ? u.max : u.min, (p.min < 0 && r < 0 || p.max >= 0 && r > 0) && (x += r));
            return o = h.getPixelForValue(x), l = (s = h.getPixelForValue(x + y)) - o, void 0 !== m && Math.abs(l) < m && (l = m, s = y >= 0 && !c || y < 0 && c ? o - m : o + m), {
                size: l,
                base: o,
                head: s,
                center: s + l / 2
            }
        },
        calculateBarIndexPixels: function (t, e, i, n) {
            var a = "flex" === n.barThickness ? function (t, e, i) {
                    var n, a = e.pixels, r = a[t], o = t > 0 ? a[t - 1] : null, s = t < a.length - 1 ? a[t + 1] : null,
                        l = i.categoryPercentage;
                    return null === o && (o = r - (null === s ? e.end - e.start : s - r)), null === s && (s = r + r - o), n = r - (r - Math.min(o, s)) / 2 * l, {
                        chunk: Math.abs(s - o) / 2 * l / e.stackCount,
                        ratio: i.barPercentage,
                        start: n
                    }
                }(e, i, n) : Qt(e, i, n), r = this.getStackIndex(t, this.getMeta().stack),
                o = a.start + a.chunk * r + a.chunk / 2, s = Math.min(Jt(n.maxBarThickness, 1 / 0), a.chunk * a.ratio);
            return {base: o - s / 2, head: o + s / 2, center: o, size: s}
        },
        draw: function () {
            var t = this.chart, e = this._getValueScale(), i = this.getMeta().data, n = this.getDataset(), a = i.length,
                r = 0;
            for (ct.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) {
                var o = e._parseValue(n.data[r]);
                isNaN(o.min) || isNaN(o.max) || i[r].draw()
            }
            ct.canvas.unclipArea(t.ctx)
        },
        _resolveDataElementOptions: function () {
            var t = this, e = ct.extend({}, Pt.prototype._resolveDataElementOptions.apply(t, arguments)),
                i = t._getIndexScale().options, n = t._getValueScale().options;
            return e.barPercentage = Jt(i.barPercentage, e.barPercentage), e.barThickness = Jt(i.barThickness, e.barThickness), e.categoryPercentage = Jt(i.categoryPercentage, e.categoryPercentage), e.maxBarThickness = Jt(i.maxBarThickness, e.maxBarThickness), e.minBarLength = Jt(n.minBarLength, e.minBarLength), e
        }
    }), ee = ct.valueOrDefault, ie = ct.options.resolve;
    st._set("bubble", {
        hover: {mode: "single"},
        scales: {
            xAxes: [{type: "linear", position: "bottom", id: "x-axis-0"}],
            yAxes: [{type: "linear", position: "left", id: "y-axis-0"}]
        },
        tooltips: {
            callbacks: {
                title: function () {
                    return ""
                }, label: function (t, e) {
                    var i = e.datasets[t.datasetIndex].label || "", n = e.datasets[t.datasetIndex].data[t.index];
                    return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                }
            }
        }
    });
    var ne = Pt.extend({
        dataElementType: Yt.Point,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
        update: function (t) {
            var e = this, i = e.getMeta().data;
            ct.each(i, function (i, n) {
                e.updateElement(i, n, t)
            })
        },
        updateElement: function (t, e, i) {
            var n = this, a = n.getMeta(), r = t.custom || {}, o = n.getScaleForId(a.xAxisID),
                s = n.getScaleForId(a.yAxisID), l = n._resolveDataElementOptions(t, e), u = n.getDataset().data[e],
                d = n.index,
                h = i ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof u ? u : NaN, e, d),
                c = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);
            t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                hitRadius: l.hitRadius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                radius: i ? 0 : l.radius,
                skip: r.skip || isNaN(h) || isNaN(c),
                x: h,
                y: c
            }, t.pivot()
        },
        setHoverStyle: function (t) {
            var e = t._model, i = t._options, n = ct.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius
            }, e.backgroundColor = ee(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = ee(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = ee(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
        },
        _resolveDataElementOptions: function (t, e) {
            var i = this, n = i.chart, a = i.getDataset(), r = t.custom || {}, o = a.data[e] || {},
                s = Pt.prototype._resolveDataElementOptions.apply(i, arguments),
                l = {chart: n, dataIndex: e, dataset: a, datasetIndex: i.index};
            return i._cachedDataOpts === s && (s = ct.extend({}, s)), s.radius = ie([r.radius, o.r, i._config.radius, n.options.elements.point.radius], l, e), s
        }
    }), ae = ct.valueOrDefault, re = Math.PI, oe = 2 * re, se = re / 2;
    st._set("doughnut", {
        animation: {animateRotate: !0, animateScale: !1}, hover: {mode: "single"}, legendCallback: function (t) {
            var e, i, n, a = document.createElement("ul"), r = t.data, o = r.datasets, s = r.labels;
            if (a.setAttribute("class", t.id + "-legend"), o.length) for (e = 0, i = o[0].data.length; e < i; ++e) (n = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && n.appendChild(document.createTextNode(s[e]));
            return a.outerHTML
        }, legend: {
            labels: {
                generateLabels: function (t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                        var a = t.getDatasetMeta(0), r = a.controller.getStyle(n);
                        return {
                            text: i,
                            fillStyle: r.backgroundColor,
                            strokeStyle: r.borderColor,
                            lineWidth: r.borderWidth,
                            hidden: isNaN(e.datasets[0].data[n]) || a.data[n].hidden,
                            index: n
                        }
                    }) : []
                }
            }, onClick: function (t, e) {
                var i, n, a, r = e.index, o = this.chart;
                for (i = 0, n = (o.data.datasets || []).length; i < n; ++i) (a = o.getDatasetMeta(i)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
                o.update()
            }
        }, cutoutPercentage: 50, rotation: -se, circumference: oe, tooltips: {
            callbacks: {
                title: function () {
                    return ""
                }, label: function (t, e) {
                    var i = e.labels[t.index], n = ": " + e.datasets[t.datasetIndex].data[t.index];
                    return ct.isArray(i) ? (i = i.slice())[0] += n : i += n, i
                }
            }
        }
    });
    var le = Pt.extend({
        dataElementType: Yt.Arc,
        linkScales: ct.noop,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
        getRingIndex: function (t) {
            for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
            return e
        },
        update: function (t) {
            var e, i, n, a, r = this, o = r.chart, s = o.chartArea, l = o.options, u = 1, d = 1, h = 0, c = 0,
                f = r.getMeta(), g = f.data, p = l.cutoutPercentage / 100 || 0, m = l.circumference,
                v = r._getRingWeight(r.index);
            if (m < oe) {
                var b = l.rotation % oe, x = (b += b >= re ? -oe : b < -re ? oe : 0) + m, y = Math.cos(b),
                    _ = Math.sin(b), k = Math.cos(x), w = Math.sin(x), M = b <= 0 && x >= 0 || x >= oe,
                    S = b <= se && x >= se || x >= oe + se, C = b <= -se && x >= -se || x >= re + se,
                    P = b === -re || x >= re ? -1 : Math.min(y, y * p, k, k * p),
                    A = C ? -1 : Math.min(_, _ * p, w, w * p), D = M ? 1 : Math.max(y, y * p, k, k * p),
                    T = S ? 1 : Math.max(_, _ * p, w, w * p);
                u = (D - P) / 2, d = (T - A) / 2, h = -(D + P) / 2, c = -(T + A) / 2
            }
            for (n = 0, a = g.length; n < a; ++n) g[n]._options = r._resolveDataElementOptions(g[n], n);
            for (o.borderWidth = r.getMaxBorderWidth(), e = (s.right - s.left - o.borderWidth) / u, i = (s.bottom - s.top - o.borderWidth) / d, o.outerRadius = Math.max(Math.min(e, i) / 2, 0), o.innerRadius = Math.max(o.outerRadius * p, 0), o.radiusLength = (o.outerRadius - o.innerRadius) / (r._getVisibleDatasetWeightTotal() || 1), o.offsetX = h * o.outerRadius, o.offsetY = c * o.outerRadius, f.total = r.calculateTotal(), r.outerRadius = o.outerRadius - o.radiusLength * r._getRingWeightOffset(r.index), r.innerRadius = Math.max(r.outerRadius - o.radiusLength * v, 0), n = 0, a = g.length; n < a; ++n) r.updateElement(g[n], n, t)
        },
        updateElement: function (t, e, i) {
            var n = this, a = n.chart, r = a.chartArea, o = a.options, s = o.animation, l = (r.left + r.right) / 2,
                u = (r.top + r.bottom) / 2, d = o.rotation, h = o.rotation, c = n.getDataset(),
                f = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(c.data[e]) * (o.circumference / oe),
                g = i && s.animateScale ? 0 : n.innerRadius, p = i && s.animateScale ? 0 : n.outerRadius,
                m = t._options || {};
            ct.extend(t, {
                _datasetIndex: n.index,
                _index: e,
                _model: {
                    backgroundColor: m.backgroundColor,
                    borderColor: m.borderColor,
                    borderWidth: m.borderWidth,
                    borderAlign: m.borderAlign,
                    x: l + a.offsetX,
                    y: u + a.offsetY,
                    startAngle: d,
                    endAngle: h,
                    circumference: f,
                    outerRadius: p,
                    innerRadius: g,
                    label: ct.valueAtIndexOrDefault(c.label, e, a.data.labels[e])
                }
            });
            var v = t._model;
            i && s.animateRotate || (v.startAngle = 0 === e ? o.rotation : n.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot()
        },
        calculateTotal: function () {
            var t, e = this.getDataset(), i = this.getMeta(), n = 0;
            return ct.each(i.data, function (i, a) {
                t = e.data[a], isNaN(t) || i.hidden || (n += Math.abs(t))
            }), n
        },
        calculateCircumference: function (t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? oe * (Math.abs(t) / e) : 0
        },
        getMaxBorderWidth: function (t) {
            var e, i, n, a, r, o, s, l, u = 0, d = this.chart;
            if (!t) for (e = 0, i = d.data.datasets.length; e < i; ++e) if (d.isDatasetVisible(e)) {
                t = (n = d.getDatasetMeta(e)).data, e !== this.index && (r = n.controller);
                break
            }
            if (!t) return 0;
            for (e = 0, i = t.length; e < i; ++e) a = t[e], r ? (r._configure(), o = r._resolveDataElementOptions(a, e)) : o = a._options, "inner" !== o.borderAlign && (s = o.borderWidth, u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u);
            return u
        },
        setHoverStyle: function (t) {
            var e = t._model, i = t._options, n = ct.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = ae(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = ae(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = ae(i.hoverBorderWidth, i.borderWidth)
        },
        _getRingWeightOffset: function (t) {
            for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
            return e
        },
        _getRingWeight: function (t) {
            return Math.max(ae(this.chart.data.datasets[t].weight, 1), 0)
        },
        _getVisibleDatasetWeightTotal: function () {
            return this._getRingWeightOffset(this.chart.data.datasets.length)
        }
    });
    st._set("horizontalBar", {
        hover: {mode: "index", axis: "y"},
        scales: {
            xAxes: [{type: "linear", position: "bottom"}],
            yAxes: [{
                type: "category",
                position: "left",
                categoryPercentage: .8,
                barPercentage: .9,
                offset: !0,
                gridLines: {offsetGridLines: !0}
            }]
        },
        elements: {rectangle: {borderSkipped: "left"}},
        tooltips: {mode: "index", axis: "y"}
    });
    var ue = te.extend({
        _getValueScaleId: function () {
            return this.getMeta().xAxisID
        }, _getIndexScaleId: function () {
            return this.getMeta().yAxisID
        }
    }), de = ct.valueOrDefault, he = ct.options.resolve, ce = ct.canvas._isPointInArea;
    st._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {mode: "label"},
        scales: {xAxes: [{type: "category", id: "x-axis-0"}], yAxes: [{type: "linear", id: "y-axis-0"}]}
    });
    var fe = Pt.extend({
        datasetElementType: Yt.Line,
        dataElementType: Yt.Point,
        _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
        _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation"
        },
        update: function (t) {
            var e, i, n = this, a = n.getMeta(), r = a.dataset, o = a.data || [], s = n.chart.options, l = n._config,
                u = n._showLine = de(l.showLine, s.showLines);
            for (n._xScale = n.getScaleForId(a.xAxisID), n._yScale = n.getScaleForId(a.yAxisID), u && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = n._yScale, r._datasetIndex = n.index, r._children = o, r._model = n._resolveDatasetElementOptions(r), r.pivot()), e = 0, i = o.length; e < i; ++e) n.updateElement(o[e], e, t);
            for (u && 0 !== r._model.tension && n.updateBezierControlPoints(), e = 0, i = o.length; e < i; ++e) o[e].pivot()
        },
        updateElement: function (t, e, i) {
            var n, a, r = this, o = r.getMeta(), s = t.custom || {}, l = r.getDataset(), u = r.index, d = l.data[e],
                h = r._xScale, c = r._yScale, f = o.dataset._model, g = r._resolveDataElementOptions(t, e);
            n = h.getPixelForValue("object" == typeof d ? d : NaN, e, u), a = i ? c.getBasePixel() : r.calculatePointY(d, e, u), t._xScale = h, t._yScale = c, t._options = g, t._datasetIndex = u, t._index = e, t._model = {
                x: n,
                y: a,
                skip: s.skip || isNaN(n) || isNaN(a),
                radius: g.radius,
                pointStyle: g.pointStyle,
                rotation: g.rotation,
                backgroundColor: g.backgroundColor,
                borderColor: g.borderColor,
                borderWidth: g.borderWidth,
                tension: de(s.tension, f ? f.tension : 0),
                steppedLine: !!f && f.steppedLine,
                hitRadius: g.hitRadius
            }
        },
        _resolveDatasetElementOptions: function (t) {
            var e = this, i = e._config, n = t.custom || {}, a = e.chart.options, r = a.elements.line,
                o = Pt.prototype._resolveDatasetElementOptions.apply(e, arguments);
            return o.spanGaps = de(i.spanGaps, a.spanGaps), o.tension = de(i.lineTension, r.tension), o.steppedLine = he([n.steppedLine, i.steppedLine, r.stepped]), o
        },
        calculatePointY: function (t, e, i) {
            var n, a, r, o, s = this.chart, l = this._yScale, u = 0, d = 0, h = +l.getRightValue(t),
                c = s._getSortedVisibleDatasetMetas(), f = c.length;
            if (l.options.stacked) {
                for (n = 0; n < f && (r = c[n]).index !== i; ++n) a = s.data.datasets[r.index], "line" === r.type && r.yAxisID === l.id && ((o = +l.getRightValue(a.data[e])) < 0 ? d += o || 0 : u += o || 0);
                if (h < 0) return l.getPixelForValue(d + h)
            }
            return l.getPixelForValue(u + h)
        },
        updateBezierControlPoints: function () {
            var t, e, i, n, a = this.chart, r = this.getMeta(), o = r.dataset._model, s = a.chartArea, l = r.data || [];

            function u(t, e, i) {
                return Math.max(Math.min(t, i), e)
            }

            if (o.spanGaps && (l = l.filter(function (t) {
                return !t._model.skip
            })), "monotone" === o.cubicInterpolationMode) ct.splineCurveMonotone(l); else for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, n = ct.splineCurve(ct.previousItem(l, t)._model, i, ct.nextItem(l, t)._model, o.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
            if (a.options.elements.line.capBezierPoints) for (t = 0, e = l.length; t < e; ++t) i = l[t]._model, ce(i, s) && (t > 0 && ce(l[t - 1]._model, s) && (i.controlPointPreviousX = u(i.controlPointPreviousX, s.left, s.right), i.controlPointPreviousY = u(i.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && ce(l[t + 1]._model, s) && (i.controlPointNextX = u(i.controlPointNextX, s.left, s.right), i.controlPointNextY = u(i.controlPointNextY, s.top, s.bottom)))
        },
        draw: function () {
            var t, e = this.chart, i = this.getMeta(), n = i.data || [], a = e.chartArea, r = 0, o = n.length;
            for (this._showLine && (t = (i.dataset._model.borderWidth || 0) / 2, ct.canvas.clipArea(e.ctx, {
                left: a.left - t,
                right: a.right + t,
                top: a.top - t,
                bottom: a.bottom + t
            }), i.dataset.draw(), ct.canvas.unclipArea(e.ctx)); r < o; ++r) n[r].draw(a)
        },
        setHoverStyle: function (t) {
            var e = t._model, i = t._options, n = ct.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius
            }, e.backgroundColor = de(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = de(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = de(i.hoverBorderWidth, i.borderWidth), e.radius = de(i.hoverRadius, i.radius)
        }
    }), ge = ct.options.resolve;
    st._set("polarArea", {
        scale: {
            type: "radialLinear",
            angleLines: {display: !1},
            gridLines: {circular: !0},
            pointLabels: {display: !1},
            ticks: {beginAtZero: !0}
        }, animation: {animateRotate: !0, animateScale: !0}, startAngle: -.5 * Math.PI, legendCallback: function (t) {
            var e, i, n, a = document.createElement("ul"), r = t.data, o = r.datasets, s = r.labels;
            if (a.setAttribute("class", t.id + "-legend"), o.length) for (e = 0, i = o[0].data.length; e < i; ++e) (n = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && n.appendChild(document.createTextNode(s[e]));
            return a.outerHTML
        }, legend: {
            labels: {
                generateLabels: function (t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                        var a = t.getDatasetMeta(0), r = a.controller.getStyle(n);
                        return {
                            text: i,
                            fillStyle: r.backgroundColor,
                            strokeStyle: r.borderColor,
                            lineWidth: r.borderWidth,
                            hidden: isNaN(e.datasets[0].data[n]) || a.data[n].hidden,
                            index: n
                        }
                    }) : []
                }
            }, onClick: function (t, e) {
                var i, n, a, r = e.index, o = this.chart;
                for (i = 0, n = (o.data.datasets || []).length; i < n; ++i) (a = o.getDatasetMeta(i)).data[r].hidden = !a.data[r].hidden;
                o.update()
            }
        }, tooltips: {
            callbacks: {
                title: function () {
                    return ""
                }, label: function (t, e) {
                    return e.labels[t.index] + ": " + t.yLabel
                }
            }
        }
    });
    var pe = Pt.extend({
        dataElementType: Yt.Arc,
        linkScales: ct.noop,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
        _getIndexScaleId: function () {
            return this.chart.scale.id
        },
        _getValueScaleId: function () {
            return this.chart.scale.id
        },
        update: function (t) {
            var e, i, n, a = this, r = a.getDataset(), o = a.getMeta(), s = a.chart.options.startAngle || 0,
                l = a._starts = [], u = a._angles = [], d = o.data;
            for (a._updateRadius(), o.count = a.countVisibleElements(), e = 0, i = r.data.length; e < i; e++) l[e] = s, n = a._computeAngle(e), u[e] = n, s += n;
            for (e = 0, i = d.length; e < i; ++e) d[e]._options = a._resolveDataElementOptions(d[e], e), a.updateElement(d[e], e, t)
        },
        _updateRadius: function () {
            var t = this, e = t.chart, i = e.chartArea, n = e.options, a = Math.min(i.right - i.left, i.bottom - i.top);
            e.outerRadius = Math.max(a / 2, 0), e.innerRadius = Math.max(n.cutoutPercentage ? e.outerRadius / 100 * n.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
        },
        updateElement: function (t, e, i) {
            var n = this, a = n.chart, r = n.getDataset(), o = a.options, s = o.animation, l = a.scale,
                u = a.data.labels, d = l.xCenter, h = l.yCenter, c = o.startAngle,
                f = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e]), g = n._starts[e],
                p = g + (t.hidden ? 0 : n._angles[e]),
                m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e]), v = t._options || {};
            ct.extend(t, {
                _datasetIndex: n.index,
                _index: e,
                _scale: l,
                _model: {
                    backgroundColor: v.backgroundColor,
                    borderColor: v.borderColor,
                    borderWidth: v.borderWidth,
                    borderAlign: v.borderAlign,
                    x: d,
                    y: h,
                    innerRadius: 0,
                    outerRadius: i ? m : f,
                    startAngle: i && s.animateRotate ? c : g,
                    endAngle: i && s.animateRotate ? c : p,
                    label: ct.valueAtIndexOrDefault(u, e, u[e])
                }
            }), t.pivot()
        },
        countVisibleElements: function () {
            var t = this.getDataset(), e = this.getMeta(), i = 0;
            return ct.each(e.data, function (e, n) {
                isNaN(t.data[n]) || e.hidden || i++
            }), i
        },
        setHoverStyle: function (t) {
            var e = t._model, i = t._options, n = ct.getHoverColor, a = ct.valueOrDefault;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = a(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = a(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = a(i.hoverBorderWidth, i.borderWidth)
        },
        _computeAngle: function (t) {
            var e = this, i = this.getMeta().count, n = e.getDataset(), a = e.getMeta();
            if (isNaN(n.data[t]) || a.data[t].hidden) return 0;
            var r = {chart: e.chart, dataIndex: t, dataset: n, datasetIndex: e.index};
            return ge([e.chart.options.elements.arc.angle, 2 * Math.PI / i], r, t)
        }
    });
    st._set("pie", ct.clone(st.doughnut)), st._set("pie", {cutoutPercentage: 0});
    var me = le, ve = ct.valueOrDefault;
    st._set("radar", {spanGaps: !1, scale: {type: "radialLinear"}, elements: {line: {tension: 0}}});
    var be = Pt.extend({
        datasetElementType: Yt.Line,
        dataElementType: Yt.Point,
        linkScales: ct.noop,
        _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
        _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation"
        },
        _getIndexScaleId: function () {
            return this.chart.scale.id
        },
        _getValueScaleId: function () {
            return this.chart.scale.id
        },
        update: function (t) {
            var e, i, n = this, a = n.getMeta(), r = a.dataset, o = a.data || [], s = n.chart.scale, l = n._config;
            for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = n.index, r._children = o, r._loop = !0, r._model = n._resolveDatasetElementOptions(r), r.pivot(), e = 0, i = o.length; e < i; ++e) n.updateElement(o[e], e, t);
            for (n.updateBezierControlPoints(), e = 0, i = o.length; e < i; ++e) o[e].pivot()
        },
        updateElement: function (t, e, i) {
            var n = this, a = t.custom || {}, r = n.getDataset(), o = n.chart.scale,
                s = o.getPointPositionForValue(e, r.data[e]), l = n._resolveDataElementOptions(t, e),
                u = n.getMeta().dataset._model, d = i ? o.xCenter : s.x, h = i ? o.yCenter : s.y;
            t._scale = o, t._options = l, t._datasetIndex = n.index, t._index = e, t._model = {
                x: d,
                y: h,
                skip: a.skip || isNaN(d) || isNaN(h),
                radius: l.radius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                tension: ve(a.tension, u ? u.tension : 0),
                hitRadius: l.hitRadius
            }
        },
        _resolveDatasetElementOptions: function () {
            var t = this, e = t._config, i = t.chart.options,
                n = Pt.prototype._resolveDatasetElementOptions.apply(t, arguments);
            return n.spanGaps = ve(e.spanGaps, i.spanGaps), n.tension = ve(e.lineTension, i.elements.line.tension), n
        },
        updateBezierControlPoints: function () {
            var t, e, i, n, a = this.getMeta(), r = this.chart.chartArea, o = a.data || [];

            function s(t, e, i) {
                return Math.max(Math.min(t, i), e)
            }

            for (a.dataset._model.spanGaps && (o = o.filter(function (t) {
                return !t._model.skip
            })), t = 0, e = o.length; t < e; ++t) i = o[t]._model, n = ct.splineCurve(ct.previousItem(o, t, !0)._model, i, ct.nextItem(o, t, !0)._model, i.tension), i.controlPointPreviousX = s(n.previous.x, r.left, r.right), i.controlPointPreviousY = s(n.previous.y, r.top, r.bottom), i.controlPointNextX = s(n.next.x, r.left, r.right), i.controlPointNextY = s(n.next.y, r.top, r.bottom)
        },
        setHoverStyle: function (t) {
            var e = t._model, i = t._options, n = ct.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius
            }, e.backgroundColor = ve(i.hoverBackgroundColor, n(i.backgroundColor)), e.borderColor = ve(i.hoverBorderColor, n(i.borderColor)), e.borderWidth = ve(i.hoverBorderWidth, i.borderWidth), e.radius = ve(i.hoverRadius, i.radius)
        }
    });
    st._set("scatter", {
        hover: {mode: "single"},
        scales: {
            xAxes: [{id: "x-axis-1", type: "linear", position: "bottom"}],
            yAxes: [{id: "y-axis-1", type: "linear", position: "left"}]
        },
        tooltips: {
            callbacks: {
                title: function () {
                    return ""
                }, label: function (t) {
                    return "(" + t.xLabel + ", " + t.yLabel + ")"
                }
            }
        }
    }), st._set("global", {datasets: {scatter: {showLine: !1}}});
    var xe = {
        bar: te,
        bubble: ne,
        doughnut: le,
        horizontalBar: ue,
        line: fe,
        polarArea: pe,
        pie: me,
        radar: be,
        scatter: fe
    };

    function ye(t, e) {
        return t.native ? {x: t.x, y: t.y} : ct.getRelativePosition(t, e)
    }

    function _e(t, e) {
        var i, n, a, r, o, s, l = t._getSortedVisibleDatasetMetas();
        for (n = 0, r = l.length; n < r; ++n) for (a = 0, o = (i = l[n].data).length; a < o; ++a) (s = i[a])._view.skip || e(s)
    }

    function ke(t, e) {
        var i = [];
        return _e(t, function (t) {
            t.inRange(e.x, e.y) && i.push(t)
        }), i
    }

    function we(t, e, i, n) {
        var a = Number.POSITIVE_INFINITY, r = [];
        return _e(t, function (t) {
            if (!i || t.inRange(e.x, e.y)) {
                var o = t.getCenterPoint(), s = n(e, o);
                s < a ? (r = [t], a = s) : s === a && r.push(t)
            }
        }), r
    }

    function Me(t) {
        var e = -1 !== t.indexOf("x"), i = -1 !== t.indexOf("y");
        return function (t, n) {
            var a = e ? Math.abs(t.x - n.x) : 0, r = i ? Math.abs(t.y - n.y) : 0;
            return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2))
        }
    }

    function Se(t, e, i) {
        var n = ye(e, t);
        i.axis = i.axis || "x";
        var a = Me(i.axis), r = i.intersect ? ke(t, n) : we(t, n, !1, a), o = [];
        return r.length ? (t._getSortedVisibleDatasetMetas().forEach(function (t) {
            var e = t.data[r[0]._index];
            e && !e._view.skip && o.push(e)
        }), o) : []
    }

    var Ce = {
        modes: {
            single: function (t, e) {
                var i = ye(e, t), n = [];
                return _e(t, function (t) {
                    if (t.inRange(i.x, i.y)) return n.push(t), n
                }), n.slice(0, 1)
            }, label: Se, index: Se, dataset: function (t, e, i) {
                var n = ye(e, t);
                i.axis = i.axis || "xy";
                var a = Me(i.axis), r = i.intersect ? ke(t, n) : we(t, n, !1, a);
                return r.length > 0 && (r = t.getDatasetMeta(r[0]._datasetIndex).data), r
            }, "x-axis": function (t, e) {
                return Se(t, e, {intersect: !1})
            }, point: function (t, e) {
                return ke(t, ye(e, t))
            }, nearest: function (t, e, i) {
                var n = ye(e, t);
                i.axis = i.axis || "xy";
                var a = Me(i.axis);
                return we(t, n, i.intersect, a)
            }, x: function (t, e, i) {
                var n = ye(e, t), a = [], r = !1;
                return _e(t, function (t) {
                    t.inXRange(n.x) && a.push(t), t.inRange(n.x, n.y) && (r = !0)
                }), i.intersect && !r && (a = []), a
            }, y: function (t, e, i) {
                var n = ye(e, t), a = [], r = !1;
                return _e(t, function (t) {
                    t.inYRange(n.y) && a.push(t), t.inRange(n.x, n.y) && (r = !0)
                }), i.intersect && !r && (a = []), a
            }
        }
    }, Pe = ct.extend;

    function Ae(t, e) {
        return ct.where(t, function (t) {
            return t.pos === e
        })
    }

    function De(t, e) {
        return t.sort(function (t, i) {
            var n = e ? i : t, a = e ? t : i;
            return n.weight === a.weight ? n.index - a.index : n.weight - a.weight
        })
    }

    function Te(t, e, i, n) {
        return Math.max(t[i], e[i]) + Math.max(t[n], e[n])
    }

    function Ie(t, e, i) {
        var n, a, r = i.box, o = t.maxPadding;
        if (i.size && (t[i.pos] -= i.size), i.size = i.horizontal ? r.height : r.width, t[i.pos] += i.size, r.getPadding) {
            var s = r.getPadding();
            o.top = Math.max(o.top, s.top), o.left = Math.max(o.left, s.left), o.bottom = Math.max(o.bottom, s.bottom), o.right = Math.max(o.right, s.right)
        }
        if (n = e.outerWidth - Te(o, t, "left", "right"), a = e.outerHeight - Te(o, t, "top", "bottom"), n !== t.w || a !== t.h) return t.w = n, t.h = a, i.horizontal ? n !== t.w : a !== t.h
    }

    function Fe(t, e) {
        var i = e.maxPadding;

        function n(t) {
            var n = {left: 0, top: 0, right: 0, bottom: 0};
            return t.forEach(function (t) {
                n[t] = Math.max(e[t], i[t])
            }), n
        }

        return n(t ? ["left", "right"] : ["top", "bottom"])
    }

    function Le(t, e, i) {
        var n, a, r, o, s, l, u = [];
        for (n = 0, a = t.length; n < a; ++n) (o = (r = t[n]).box).update(r.width || e.w, r.height || e.h, Fe(r.horizontal, e)), Ie(e, i, r) && (l = !0, u.length && (s = !0)), o.fullWidth || u.push(r);
        return s && Le(u, e, i) || l
    }

    function Oe(t, e, i) {
        var n, a, r, o, s = i.padding, l = e.x, u = e.y;
        for (n = 0, a = t.length; n < a; ++n) o = (r = t[n]).box, r.horizontal ? (o.left = o.fullWidth ? s.left : e.left, o.right = o.fullWidth ? i.outerWidth - s.right : e.left + e.w, o.top = u, o.bottom = u + o.height, o.width = o.right - o.left, u = o.bottom) : (o.left = l, o.right = l + o.width, o.top = e.top, o.bottom = e.top + e.h, o.height = o.bottom - o.top, l = o.right);
        e.x = l, e.y = u
    }

    st._set("global", {layout: {padding: {top: 0, right: 0, bottom: 0, left: 0}}});
    var Re = {
        defaults: {}, addBox: function (t, e) {
            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () {
                return [{
                    z: 0, draw: function () {
                        e.draw.apply(e, arguments)
                    }
                }]
            }, t.boxes.push(e)
        }, removeBox: function (t, e) {
            var i = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== i && t.boxes.splice(i, 1)
        }, configure: function (t, e, i) {
            for (var n, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r; ++o) n = a[o], i.hasOwnProperty(n) && (e[n] = i[n])
        }, update: function (t, e, i) {
            if (t) {
                var n = t.options.layout || {}, a = ct.options.toPadding(n.padding), r = e - a.width, o = i - a.height,
                    s = function (t) {
                        var e = function (t) {
                                var e, i, n, a = [];
                                for (e = 0, i = (t || []).length; e < i; ++e) n = t[e], a.push({
                                    index: e,
                                    box: n,
                                    pos: n.position,
                                    horizontal: n.isHorizontal(),
                                    weight: n.weight
                                });
                                return a
                            }(t), i = De(Ae(e, "left"), !0), n = De(Ae(e, "right")), a = De(Ae(e, "top"), !0),
                            r = De(Ae(e, "bottom"));
                        return {
                            leftAndTop: i.concat(a),
                            rightAndBottom: n.concat(r),
                            chartArea: Ae(e, "chartArea"),
                            vertical: i.concat(n),
                            horizontal: a.concat(r)
                        }
                    }(t.boxes), l = s.vertical, u = s.horizontal, d = Object.freeze({
                        outerWidth: e,
                        outerHeight: i,
                        padding: a,
                        availableWidth: r,
                        vBoxMaxWidth: r / 2 / l.length,
                        hBoxMaxHeight: o / 2
                    }), h = Pe({maxPadding: Pe({}, a), w: r, h: o, x: a.left, y: a.top}, a);
                !function (t, e) {
                    var i, n, a;
                    for (i = 0, n = t.length; i < n; ++i) (a = t[i]).width = a.horizontal ? a.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, a.height = a.horizontal && e.hBoxMaxHeight
                }(l.concat(u), d), Le(l, h, d), Le(u, h, d) && Le(l, h, d), function (t) {
                    var e = t.maxPadding;

                    function i(i) {
                        var n = Math.max(e[i] - t[i], 0);
                        return t[i] += n, n
                    }

                    t.y += i("top"), t.x += i("left"), i("right"), i("bottom")
                }(h), Oe(s.leftAndTop, h, d), h.x += h.w, h.y += h.h, Oe(s.rightAndBottom, h, d), t.chartArea = {
                    left: h.left,
                    top: h.top,
                    right: h.left + h.w,
                    bottom: h.top + h.h
                }, ct.each(s.chartArea, function (e) {
                    var i = e.box;
                    Pe(i, t.chartArea), i.update(h.w, h.h)
                })
            }
        }
    };
    var ze,
        Ne = (ze = Object.freeze({default: "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"})) && ze.default || ze,
        Be = "$chartjs", Ee = "chartjs-size-monitor", We = "chartjs-render-monitor", Ve = "chartjs-render-animation",
        He = ["animationstart", "webkitAnimationStart"], je = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        };

    function qe(t, e) {
        var i = ct.getStyle(t, e), n = i && i.match(/^(\d+)(\.\d+)?px$/);
        return n ? Number(n[1]) : void 0
    }

    var Ue = !!function () {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function () {
                    t = !0
                }
            });
            window.addEventListener("e", null, e)
        } catch (t) {
        }
        return t
    }() && {passive: !0};

    function Ye(t, e, i) {
        t.addEventListener(e, i, Ue)
    }

    function Ge(t, e, i) {
        t.removeEventListener(e, i, Ue)
    }

    function Xe(t, e, i, n, a) {
        return {type: t, chart: e, native: a || null, x: void 0 !== i ? i : null, y: void 0 !== n ? n : null}
    }

    function Ke(t) {
        var e = document.createElement("div");
        return e.className = t || "", e
    }

    function Ze(t, e, i) {
        var n, a, r, o, s = t[Be] || (t[Be] = {}), l = s.resizer = function (t) {
            var e = Ke(Ee), i = Ke(Ee + "-expand"), n = Ke(Ee + "-shrink");
            i.appendChild(Ke()), n.appendChild(Ke()), e.appendChild(i), e.appendChild(n), e._reset = function () {
                i.scrollLeft = 1e6, i.scrollTop = 1e6, n.scrollLeft = 1e6, n.scrollTop = 1e6
            };
            var a = function () {
                e._reset(), t()
            };
            return Ye(i, "scroll", a.bind(i, "expand")), Ye(n, "scroll", a.bind(n, "shrink")), e
        }((n = function () {
            if (s.resizer) {
                var n = i.options.maintainAspectRatio && t.parentNode, a = n ? n.clientWidth : 0;
                e(Xe("resize", i)), n && n.clientWidth < a && i.canvas && e(Xe("resize", i))
            }
        }, r = !1, o = [], function () {
            o = Array.prototype.slice.call(arguments), a = a || this, r || (r = !0, ct.requestAnimFrame.call(window, function () {
                r = !1, n.apply(a, o)
            }))
        }));
        !function (t, e) {
            var i = t[Be] || (t[Be] = {}), n = i.renderProxy = function (t) {
                t.animationName === Ve && e()
            };
            ct.each(He, function (e) {
                Ye(t, e, n)
            }), i.reflow = !!t.offsetParent, t.classList.add(We)
        }(t, function () {
            if (s.resizer) {
                var e = t.parentNode;
                e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset()
            }
        })
    }

    function $e(t) {
        var e = t[Be] || {}, i = e.resizer;
        delete e.resizer, function (t) {
            var e = t[Be] || {}, i = e.renderProxy;
            i && (ct.each(He, function (e) {
                Ge(t, e, i)
            }), delete e.renderProxy), t.classList.remove(We)
        }(t), i && i.parentNode && i.parentNode.removeChild(i)
    }

    var Je = {
        disableCSSInjection: !1,
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        _ensureLoaded: function (t) {
            if (!this.disableCSSInjection) {
                var e = t.getRootNode();
                !function (t, e) {
                    var i = t[Be] || (t[Be] = {});
                    if (!i.containsStyles) {
                        i.containsStyles = !0, e = "/* Chart.js */\n" + e;
                        var n = document.createElement("style");
                        n.setAttribute("type", "text/css"), n.appendChild(document.createTextNode(e)), t.appendChild(n)
                    }
                }(e.host ? e : document.head, Ne)
            }
        },
        acquireContext: function (t, e) {
            "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
            var i = t && t.getContext && t.getContext("2d");
            return i && i.canvas === t ? (this._ensureLoaded(t), function (t, e) {
                var i = t.style, n = t.getAttribute("height"), a = t.getAttribute("width");
                if (t[Be] = {
                    initial: {
                        height: n,
                        width: a,
                        style: {display: i.display, height: i.height, width: i.width}
                    }
                }, i.display = i.display || "block", null === a || "" === a) {
                    var r = qe(t, "width");
                    void 0 !== r && (t.width = r)
                }
                if (null === n || "" === n) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2); else {
                    var o = qe(t, "height");
                    void 0 !== r && (t.height = o)
                }
            }(t, e), i) : null
        },
        releaseContext: function (t) {
            var e = t.canvas;
            if (e[Be]) {
                var i = e[Be].initial;
                ["height", "width"].forEach(function (t) {
                    var n = i[t];
                    ct.isNullOrUndef(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
                }), ct.each(i.style || {}, function (t, i) {
                    e.style[i] = t
                }), e.width = e.width, delete e[Be]
            }
        },
        addEventListener: function (t, e, i) {
            var n = t.canvas;
            if ("resize" !== e) {
                var a = i[Be] || (i[Be] = {});
                Ye(n, e, (a.proxies || (a.proxies = {}))[t.id + "_" + e] = function (e) {
                    i(function (t, e) {
                        var i = je[t.type] || t.type, n = ct.getRelativePosition(t, e);
                        return Xe(i, e, n.x, n.y, t)
                    }(e, t))
                })
            } else Ze(n, i, t)
        },
        removeEventListener: function (t, e, i) {
            var n = t.canvas;
            if ("resize" !== e) {
                var a = ((i[Be] || {}).proxies || {})[t.id + "_" + e];
                a && Ge(n, e, a)
            } else $e(n)
        }
    };
    ct.addEvent = Ye, ct.removeEvent = Ge;
    var Qe = Je._enabled ? Je : {
        acquireContext: function (t) {
            return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
        }
    }, ti = ct.extend({
        initialize: function () {
        }, acquireContext: function () {
        }, releaseContext: function () {
        }, addEventListener: function () {
        }, removeEventListener: function () {
        }
    }, Qe);
    st._set("global", {plugins: {}});
    var ei = {
        _plugins: [], _cacheId: 0, register: function (t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
                -1 === e.indexOf(t) && e.push(t)
            }), this._cacheId++
        }, unregister: function (t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
                var i = e.indexOf(t);
                -1 !== i && e.splice(i, 1)
            }), this._cacheId++
        }, clear: function () {
            this._plugins = [], this._cacheId++
        }, count: function () {
            return this._plugins.length
        }, getAll: function () {
            return this._plugins
        }, notify: function (t, e, i) {
            var n, a, r, o, s, l = this.descriptors(t), u = l.length;
            for (n = 0; n < u; ++n) if ("function" == typeof (s = (r = (a = l[n]).plugin)[e]) && ((o = [t].concat(i || [])).push(a.options), !1 === s.apply(r, o))) return !1;
            return !0
        }, descriptors: function (t) {
            var e = t.$plugins || (t.$plugins = {});
            if (e.id === this._cacheId) return e.descriptors;
            var i = [], n = [], a = t && t.config || {}, r = a.options && a.options.plugins || {};
            return this._plugins.concat(a.plugins || []).forEach(function (t) {
                if (-1 === i.indexOf(t)) {
                    var e = t.id, a = r[e];
                    !1 !== a && (!0 === a && (a = ct.clone(st.global.plugins[e])), i.push(t), n.push({
                        plugin: t,
                        options: a || {}
                    }))
                }
            }), e.descriptors = n, e.id = this._cacheId, n
        }, _invalidate: function (t) {
            delete t.$plugins
        }
    }, ii = {
        constructors: {}, defaults: {}, registerScaleType: function (t, e, i) {
            this.constructors[t] = e, this.defaults[t] = ct.clone(i)
        }, getScaleConstructor: function (t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
        }, getScaleDefaults: function (t) {
            return this.defaults.hasOwnProperty(t) ? ct.merge({}, [st.scale, this.defaults[t]]) : {}
        }, updateScaleDefaults: function (t, e) {
            this.defaults.hasOwnProperty(t) && (this.defaults[t] = ct.extend(this.defaults[t], e))
        }, addScalesToLayout: function (t) {
            ct.each(t.scales, function (e) {
                e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, Re.addBox(t, e)
            })
        }
    }, ni = ct.valueOrDefault, ai = ct.rtl.getRtlAdapter;
    st._set("global", {
        tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
                beforeTitle: ct.noop, title: function (t, e) {
                    var i = "", n = e.labels, a = n ? n.length : 0;
                    if (t.length > 0) {
                        var r = t[0];
                        r.label ? i = r.label : r.xLabel ? i = r.xLabel : a > 0 && r.index < a && (i = n[r.index])
                    }
                    return i
                }, afterTitle: ct.noop, beforeBody: ct.noop, beforeLabel: ct.noop, label: function (t, e) {
                    var i = e.datasets[t.datasetIndex].label || "";
                    return i && (i += ": "), ct.isNullOrUndef(t.value) ? i += t.yLabel : i += t.value, i
                }, labelColor: function (t, e) {
                    var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                    return {borderColor: i.borderColor, backgroundColor: i.backgroundColor}
                }, labelTextColor: function () {
                    return this._options.bodyFontColor
                }, afterLabel: ct.noop, afterBody: ct.noop, beforeFooter: ct.noop, footer: ct.noop, afterFooter: ct.noop
            }
        }
    });
    var ri = {
        average: function (t) {
            if (!t.length) return !1;
            var e, i, n = 0, a = 0, r = 0;
            for (e = 0, i = t.length; e < i; ++e) {
                var o = t[e];
                if (o && o.hasValue()) {
                    var s = o.tooltipPosition();
                    n += s.x, a += s.y, ++r
                }
            }
            return {x: n / r, y: a / r}
        }, nearest: function (t, e) {
            var i, n, a, r = e.x, o = e.y, s = Number.POSITIVE_INFINITY;
            for (i = 0, n = t.length; i < n; ++i) {
                var l = t[i];
                if (l && l.hasValue()) {
                    var u = l.getCenterPoint(), d = ct.distanceBetweenPoints(e, u);
                    d < s && (s = d, a = l)
                }
            }
            if (a) {
                var h = a.tooltipPosition();
                r = h.x, o = h.y
            }
            return {x: r, y: o}
        }
    };

    function oi(t, e) {
        return e && (ct.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function si(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
    }

    function li(t) {
        var e = st.global;
        return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            rtl: t.rtl,
            textDirection: t.textDirection,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: ni(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: ni(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: ni(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: ni(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: ni(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: ni(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: ni(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: ni(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: ni(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
        }
    }

    function ui(t, e) {
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding
    }

    function di(t) {
        return oi([], si(t))
    }

    var hi = xt.extend({
        initialize: function () {
            this._model = li(this._options), this._lastActive = []
        }, getTitle: function () {
            var t = this, e = t._options, i = e.callbacks, n = i.beforeTitle.apply(t, arguments),
                a = i.title.apply(t, arguments), r = i.afterTitle.apply(t, arguments), o = [];
            return o = oi(o, si(n)), o = oi(o, si(a)), o = oi(o, si(r))
        }, getBeforeBody: function () {
            return di(this._options.callbacks.beforeBody.apply(this, arguments))
        }, getBody: function (t, e) {
            var i = this, n = i._options.callbacks, a = [];
            return ct.each(t, function (t) {
                var r = {before: [], lines: [], after: []};
                oi(r.before, si(n.beforeLabel.call(i, t, e))), oi(r.lines, n.label.call(i, t, e)), oi(r.after, si(n.afterLabel.call(i, t, e))), a.push(r)
            }), a
        }, getAfterBody: function () {
            return di(this._options.callbacks.afterBody.apply(this, arguments))
        }, getFooter: function () {
            var t = this, e = t._options.callbacks, i = e.beforeFooter.apply(t, arguments),
                n = e.footer.apply(t, arguments), a = e.afterFooter.apply(t, arguments), r = [];
            return r = oi(r, si(i)), r = oi(r, si(n)), r = oi(r, si(a))
        }, update: function (t) {
            var e, i, n, a, r, o, s, l, u, d, h = this, c = h._options, f = h._model, g = h._model = li(c),
                p = h._active, m = h._data, v = {xAlign: f.xAlign, yAlign: f.yAlign}, b = {x: f.x, y: f.y},
                x = {width: f.width, height: f.height}, y = {x: f.caretX, y: f.caretY};
            if (p.length) {
                g.opacity = 1;
                var _ = [], k = [];
                y = ri[c.position].call(h, p, h._eventPosition);
                var w = [];
                for (e = 0, i = p.length; e < i; ++e) w.push((n = p[e], a = void 0, r = void 0, o = void 0, s = void 0, l = void 0, u = void 0, d = void 0, a = n._xScale, r = n._yScale || n._scale, o = n._index, s = n._datasetIndex, l = n._chart.getDatasetMeta(s).controller, u = l._getIndexScale(), d = l._getValueScale(), {
                    xLabel: a ? a.getLabelForIndex(o, s) : "",
                    yLabel: r ? r.getLabelForIndex(o, s) : "",
                    label: u ? "" + u.getLabelForIndex(o, s) : "",
                    value: d ? "" + d.getLabelForIndex(o, s) : "",
                    index: o,
                    datasetIndex: s,
                    x: n._model.x,
                    y: n._model.y
                }));
                c.filter && (w = w.filter(function (t) {
                    return c.filter(t, m)
                })), c.itemSort && (w = w.sort(function (t, e) {
                    return c.itemSort(t, e, m)
                })), ct.each(w, function (t) {
                    _.push(c.callbacks.labelColor.call(h, t, h._chart)), k.push(c.callbacks.labelTextColor.call(h, t, h._chart))
                }), g.title = h.getTitle(w, m), g.beforeBody = h.getBeforeBody(w, m), g.body = h.getBody(w, m), g.afterBody = h.getAfterBody(w, m), g.footer = h.getFooter(w, m), g.x = y.x, g.y = y.y, g.caretPadding = c.caretPadding, g.labelColors = _, g.labelTextColors = k, g.dataPoints = w, x = function (t, e) {
                    var i = t._chart.ctx, n = 2 * e.yPadding, a = 0, r = e.body, o = r.reduce(function (t, e) {
                        return t + e.before.length + e.lines.length + e.after.length
                    }, 0);
                    o += e.beforeBody.length + e.afterBody.length;
                    var s = e.title.length, l = e.footer.length, u = e.titleFontSize, d = e.bodyFontSize,
                        h = e.footerFontSize;
                    n += s * u, n += s ? (s - 1) * e.titleSpacing : 0, n += s ? e.titleMarginBottom : 0, n += o * d, n += o ? (o - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * h, n += l ? (l - 1) * e.footerSpacing : 0;
                    var c = 0, f = function (t) {
                        a = Math.max(a, i.measureText(t).width + c)
                    };
                    return i.font = ct.fontString(u, e._titleFontStyle, e._titleFontFamily), ct.each(e.title, f), i.font = ct.fontString(d, e._bodyFontStyle, e._bodyFontFamily), ct.each(e.beforeBody.concat(e.afterBody), f), c = e.displayColors ? d + 2 : 0, ct.each(r, function (t) {
                        ct.each(t.before, f), ct.each(t.lines, f), ct.each(t.after, f)
                    }), c = 0, i.font = ct.fontString(h, e._footerFontStyle, e._footerFontFamily), ct.each(e.footer, f), {
                        width: a += 2 * e.xPadding,
                        height: n
                    }
                }(this, g), b = function (t, e, i, n) {
                    var a = t.x, r = t.y, o = t.caretSize, s = t.caretPadding, l = t.cornerRadius, u = i.xAlign,
                        d = i.yAlign, h = o + s, c = l + s;
                    return "right" === u ? a -= e.width : "center" === u && ((a -= e.width / 2) + e.width > n.width && (a = n.width - e.width), a < 0 && (a = 0)), "top" === d ? r += h : r -= "bottom" === d ? e.height + h : e.height / 2, "center" === d ? "left" === u ? a += h : "right" === u && (a -= h) : "left" === u ? a -= c : "right" === u && (a += c), {
                        x: a,
                        y: r
                    }
                }(g, x, v = function (t, e) {
                    var i, n, a, r, o, s = t._model, l = t._chart, u = t._chart.chartArea, d = "center", h = "center";
                    s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
                    var c = (u.left + u.right) / 2, f = (u.top + u.bottom) / 2;
                    "center" === h ? (i = function (t) {
                        return t <= c
                    }, n = function (t) {
                        return t > c
                    }) : (i = function (t) {
                        return t <= e.width / 2
                    }, n = function (t) {
                        return t >= l.width - e.width / 2
                    }), a = function (t) {
                        return t + e.width + s.caretSize + s.caretPadding > l.width
                    }, r = function (t) {
                        return t - e.width - s.caretSize - s.caretPadding < 0
                    }, o = function (t) {
                        return t <= f ? "top" : "bottom"
                    }, i(s.x) ? (d = "left", a(s.x) && (d = "center", h = o(s.y))) : n(s.x) && (d = "right", r(s.x) && (d = "center", h = o(s.y)));
                    var g = t._options;
                    return {xAlign: g.xAlign ? g.xAlign : d, yAlign: g.yAlign ? g.yAlign : h}
                }(this, x), h._chart)
            } else g.opacity = 0;
            return g.xAlign = v.xAlign, g.yAlign = v.yAlign, g.x = b.x, g.y = b.y, g.width = x.width, g.height = x.height, g.caretX = y.x, g.caretY = y.y, h._model = g, t && c.custom && c.custom.call(h, g), h
        }, drawCaret: function (t, e) {
            var i = this._chart.ctx, n = this._view, a = this.getCaretPosition(t, e, n);
            i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3)
        }, getCaretPosition: function (t, e, i) {
            var n, a, r, o, s, l, u = i.caretSize, d = i.cornerRadius, h = i.xAlign, c = i.yAlign, f = t.x, g = t.y,
                p = e.width, m = e.height;
            if ("center" === c) s = g + m / 2, "left" === h ? (a = (n = f) - u, r = n, o = s + u, l = s - u) : (a = (n = f + p) + u, r = n, o = s - u, l = s + u); else if ("left" === h ? (n = (a = f + d + u) - u, r = a + u) : "right" === h ? (n = (a = f + p - d - u) - u, r = a + u) : (n = (a = i.caretX) - u, r = a + u), "top" === c) s = (o = g) - u, l = o; else {
                s = (o = g + m) + u, l = o;
                var v = r;
                r = n, n = v
            }
            return {x1: n, x2: a, x3: r, y1: o, y2: s, y3: l}
        }, drawTitle: function (t, e, i) {
            var n, a, r, o = e.title, s = o.length;
            if (s) {
                var l = ai(e.rtl, e.x, e.width);
                for (t.x = ui(e, e._titleAlign), i.textAlign = l.textAlign(e._titleAlign), i.textBaseline = "middle", n = e.titleFontSize, a = e.titleSpacing, i.fillStyle = e.titleFontColor, i.font = ct.fontString(n, e._titleFontStyle, e._titleFontFamily), r = 0; r < s; ++r) i.fillText(o[r], l.x(t.x), t.y + n / 2), t.y += n + a, r + 1 === s && (t.y += e.titleMarginBottom - a)
            }
        }, drawBody: function (t, e, i) {
            var n, a, r, o, s, l, u, d, h = e.bodyFontSize, c = e.bodySpacing, f = e._bodyAlign, g = e.body,
                p = e.displayColors, m = 0, v = p ? ui(e, "left") : 0, b = ai(e.rtl, e.x, e.width), x = function (e) {
                    i.fillText(e, b.x(t.x + m), t.y + h / 2), t.y += h + c
                }, y = b.textAlign(f);
            for (i.textAlign = f, i.textBaseline = "middle", i.font = ct.fontString(h, e._bodyFontStyle, e._bodyFontFamily), t.x = ui(e, y), i.fillStyle = e.bodyFontColor, ct.each(e.beforeBody, x), m = p && "right" !== y ? "center" === f ? h / 2 + 1 : h + 2 : 0, s = 0, u = g.length; s < u; ++s) {
                for (n = g[s], a = e.labelTextColors[s], r = e.labelColors[s], i.fillStyle = a, ct.each(n.before, x), l = 0, d = (o = n.lines).length; l < d; ++l) {
                    if (p) {
                        var _ = b.x(v);
                        i.fillStyle = e.legendColorBackground, i.fillRect(b.leftForLtr(_, h), t.y, h, h), i.lineWidth = 1, i.strokeStyle = r.borderColor, i.strokeRect(b.leftForLtr(_, h), t.y, h, h), i.fillStyle = r.backgroundColor, i.fillRect(b.leftForLtr(b.xPlus(_, 1), h - 2), t.y + 1, h - 2, h - 2), i.fillStyle = a
                    }
                    x(o[l])
                }
                ct.each(n.after, x)
            }
            m = 0, ct.each(e.afterBody, x), t.y -= c
        }, drawFooter: function (t, e, i) {
            var n, a, r = e.footer, o = r.length;
            if (o) {
                var s = ai(e.rtl, e.x, e.width);
                for (t.x = ui(e, e._footerAlign), t.y += e.footerMarginTop, i.textAlign = s.textAlign(e._footerAlign), i.textBaseline = "middle", n = e.footerFontSize, i.fillStyle = e.footerFontColor, i.font = ct.fontString(n, e._footerFontStyle, e._footerFontFamily), a = 0; a < o; ++a) i.fillText(r[a], s.x(t.x), t.y + n / 2), t.y += n + e.footerSpacing
            }
        }, drawBackground: function (t, e, i, n) {
            i.fillStyle = e.backgroundColor, i.strokeStyle = e.borderColor, i.lineWidth = e.borderWidth;
            var a = e.xAlign, r = e.yAlign, o = t.x, s = t.y, l = n.width, u = n.height, d = e.cornerRadius;
            i.beginPath(), i.moveTo(o + d, s), "top" === r && this.drawCaret(t, n), i.lineTo(o + l - d, s), i.quadraticCurveTo(o + l, s, o + l, s + d), "center" === r && "right" === a && this.drawCaret(t, n), i.lineTo(o + l, s + u - d), i.quadraticCurveTo(o + l, s + u, o + l - d, s + u), "bottom" === r && this.drawCaret(t, n), i.lineTo(o + d, s + u), i.quadraticCurveTo(o, s + u, o, s + u - d), "center" === r && "left" === a && this.drawCaret(t, n), i.lineTo(o, s + d), i.quadraticCurveTo(o, s, o + d, s), i.closePath(), i.fill(), e.borderWidth > 0 && i.stroke()
        }, draw: function () {
            var t = this._chart.ctx, e = this._view;
            if (0 !== e.opacity) {
                var i = {width: e.width, height: e.height}, n = {x: e.x, y: e.y},
                    a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                    r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                this._options.enabled && r && (t.save(), t.globalAlpha = a, this.drawBackground(n, e, t, i), n.y += e.yPadding, ct.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(n, e, t), this.drawBody(n, e, t), this.drawFooter(n, e, t), ct.rtl.restoreTextDirection(t, e.textDirection), t.restore())
            }
        }, handleEvent: function (t) {
            var e, i = this, n = i._options;
            return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : (i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), n.reverse && i._active.reverse()), (e = !ct.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
                x: t.x,
                y: t.y
            }, i.update(!0), i.pivot())), e
        }
    }), ci = ri, fi = hi;
    fi.positioners = ci;
    var gi = ct.valueOrDefault;

    function pi() {
        return ct.merge({}, [].slice.call(arguments), {
            merger: function (t, e, i, n) {
                if ("xAxes" === t || "yAxes" === t) {
                    var a, r, o, s = i[t].length;
                    for (e[t] || (e[t] = []), a = 0; a < s; ++a) o = i[t][a], r = gi(o.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || o.type && o.type !== e[t][a].type ? ct.merge(e[t][a], [ii.getScaleDefaults(r), o]) : ct.merge(e[t][a], o)
                } else ct._merger(t, e, i, n)
            }
        })
    }

    function mi() {
        return ct.merge({}, [].slice.call(arguments), {
            merger: function (t, e, i, n) {
                var a = e[t] || {}, r = i[t];
                "scales" === t ? e[t] = pi(a, r) : "scale" === t ? e[t] = ct.merge(a, [ii.getScaleDefaults(r.type), r]) : ct._merger(t, e, i, n)
            }
        })
    }

    function vi(t) {
        var e = t.options;
        ct.each(t.scales, function (e) {
            Re.removeBox(t, e)
        }), e = mi(st.global, st[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize()
    }

    function bi(t, e, i) {
        var n, a = function (t) {
            return t.id === n
        };
        do {
            n = e + i++
        } while (ct.findIndex(t, a) >= 0);
        return n
    }

    function xi(t) {
        return "top" === t || "bottom" === t
    }

    function yi(t, e) {
        return function (i, n) {
            return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t]
        }
    }

    st._set("global", {
        elements: {},
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {onHover: null, mode: "nearest", intersect: !0, animationDuration: 400},
        onClick: null,
        maintainAspectRatio: !0,
        responsive: !0,
        responsiveAnimationDuration: 0
    });
    var _i = function (t, e) {
        return this.construct(t, e), this
    };
    ct.extend(_i.prototype, {
        construct: function (t, e) {
            var i = this;
            e = function (t) {
                var e = (t = t || {}).data = t.data || {};
                return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = mi(st.global, st[t.type], t.options || {}), t
            }(e);
            var n = ti.acquireContext(t, e), a = n && n.canvas, r = a && a.height, o = a && a.width;
            i.id = ct.uid(), i.ctx = n, i.canvas = a, i.config = e, i.width = o, i.height = r, i.aspectRatio = r ? o / r : null, i.options = e.options, i._bufferedRender = !1, i._layers = [], i.chart = i, i.controller = i, _i.instances[i.id] = i, Object.defineProperty(i, "data", {
                get: function () {
                    return i.config.data
                }, set: function (t) {
                    i.config.data = t
                }
            }), n && a ? (i.initialize(), i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        }, initialize: function () {
            var t = this;
            return ei.notify(t, "beforeInit"), ct.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), ei.notify(t, "afterInit"), t
        }, clear: function () {
            return ct.canvas.clear(this), this
        }, stop: function () {
            return kt.cancelAnimation(this), this
        }, resize: function (t) {
            var e = this, i = e.options, n = e.canvas, a = i.maintainAspectRatio && e.aspectRatio || null,
                r = Math.max(0, Math.floor(ct.getMaximumWidth(n))),
                o = Math.max(0, Math.floor(a ? r / a : ct.getMaximumHeight(n)));
            if ((e.width !== r || e.height !== o) && (n.width = e.width = r, n.height = e.height = o, n.style.width = r + "px", n.style.height = o + "px", ct.retinaScale(e, i.devicePixelRatio), !t)) {
                var s = {width: r, height: o};
                ei.notify(e, "resize", [s]), i.onResize && i.onResize(e, s), e.stop(), e.update({duration: i.responsiveAnimationDuration})
            }
        }, ensureScalesHaveIDs: function () {
            var t = this.options, e = t.scales || {}, i = t.scale;
            ct.each(e.xAxes, function (t, i) {
                t.id || (t.id = bi(e.xAxes, "x-axis-", i))
            }), ct.each(e.yAxes, function (t, i) {
                t.id || (t.id = bi(e.yAxes, "y-axis-", i))
            }), i && (i.id = i.id || "scale")
        }, buildOrUpdateScales: function () {
            var t = this, e = t.options, i = t.scales || {}, n = [], a = Object.keys(i).reduce(function (t, e) {
                return t[e] = !1, t
            }, {});
            e.scales && (n = n.concat((e.scales.xAxes || []).map(function (t) {
                return {options: t, dtype: "category", dposition: "bottom"}
            }), (e.scales.yAxes || []).map(function (t) {
                return {options: t, dtype: "linear", dposition: "left"}
            }))), e.scale && n.push({
                options: e.scale,
                dtype: "radialLinear",
                isDefault: !0,
                dposition: "chartArea"
            }), ct.each(n, function (e) {
                var n = e.options, r = n.id, o = gi(n.type, e.dtype);
                xi(n.position) !== xi(e.dposition) && (n.position = e.dposition), a[r] = !0;
                var s = null;
                if (r in i && i[r].type === o) (s = i[r]).options = n, s.ctx = t.ctx, s.chart = t; else {
                    var l = ii.getScaleConstructor(o);
                    if (!l) return;
                    s = new l({id: r, type: o, options: n, ctx: t.ctx, chart: t}), i[s.id] = s
                }
                s.mergeTicksOptions(), e.isDefault && (t.scale = s)
            }), ct.each(a, function (t, e) {
                t || delete i[e]
            }), t.scales = i, ii.addScalesToLayout(this)
        }, buildOrUpdateControllers: function () {
            var t, e, i = this, n = [], a = i.data.datasets;
            for (t = 0, e = a.length; t < e; t++) {
                var r = a[t], o = i.getDatasetMeta(t), s = r.type || i.config.type;
                if (o.type && o.type !== s && (i.destroyDatasetMeta(t), o = i.getDatasetMeta(t)), o.type = s, o.order = r.order || 0, o.index = t, o.controller) o.controller.updateIndex(t), o.controller.linkScales(); else {
                    var l = xe[o.type];
                    if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');
                    o.controller = new l(i, t), n.push(o.controller)
                }
            }
            return n
        }, resetElements: function () {
            var t = this;
            ct.each(t.data.datasets, function (e, i) {
                t.getDatasetMeta(i).controller.reset()
            }, t)
        }, reset: function () {
            this.resetElements(), this.tooltip.initialize()
        }, update: function (t) {
            var e, i, n = this;
            if (t && "object" == typeof t || (t = {
                duration: t,
                lazy: arguments[1]
            }), vi(n), ei._invalidate(n), !1 !== ei.notify(n, "beforeUpdate")) {
                n.tooltip._data = n.data;
                var a = n.buildOrUpdateControllers();
                for (e = 0, i = n.data.datasets.length; e < i; e++) n.getDatasetMeta(e).controller.buildOrUpdateElements();
                n.updateLayout(), n.options.animation && n.options.animation.duration && ct.each(a, function (t) {
                    t.reset()
                }), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], ei.notify(n, "afterUpdate"), n._layers.sort(yi("z", "_idx")), n._bufferedRender ? n._bufferedRequest = {
                    duration: t.duration,
                    easing: t.easing,
                    lazy: t.lazy
                } : n.render(t)
            }
        }, updateLayout: function () {
            var t = this;
            !1 !== ei.notify(t, "beforeLayout") && (Re.update(this, this.width, this.height), t._layers = [], ct.each(t.boxes, function (e) {
                e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers())
            }, t), t._layers.forEach(function (t, e) {
                t._idx = e
            }), ei.notify(t, "afterScaleUpdate"), ei.notify(t, "afterLayout"))
        }, updateDatasets: function () {
            if (!1 !== ei.notify(this, "beforeDatasetsUpdate")) {
                for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                ei.notify(this, "afterDatasetsUpdate")
            }
        }, updateDataset: function (t) {
            var e = this.getDatasetMeta(t), i = {meta: e, index: t};
            !1 !== ei.notify(this, "beforeDatasetUpdate", [i]) && (e.controller._update(), ei.notify(this, "afterDatasetUpdate", [i]))
        }, render: function (t) {
            var e = this;
            t && "object" == typeof t || (t = {duration: t, lazy: arguments[1]});
            var i = e.options.animation, n = gi(t.duration, i && i.duration), a = t.lazy;
            if (!1 !== ei.notify(e, "beforeRender")) {
                var r = function (t) {
                    ei.notify(e, "afterRender"), ct.callback(i && i.onComplete, [t], e)
                };
                if (i && n) {
                    var o = new _t({
                        numSteps: n / 16.66, easing: t.easing || i.easing, render: function (t, e) {
                            var i = ct.easing.effects[e.easing], n = e.currentStep, a = n / e.numSteps;
                            t.draw(i(a), a, n)
                        }, onAnimationProgress: i.onProgress, onAnimationComplete: r
                    });
                    kt.addAnimation(e, o, n, a)
                } else e.draw(), r(new _t({numSteps: 0, chart: e}));
                return e
            }
        }, draw: function (t) {
            var e, i, n = this;
            if (n.clear(), ct.isNullOrUndef(t) && (t = 1), n.transition(t), !(n.width <= 0 || n.height <= 0) && !1 !== ei.notify(n, "beforeDraw", [t])) {
                for (i = n._layers, e = 0; e < i.length && i[e].z <= 0; ++e) i[e].draw(n.chartArea);
                for (n.drawDatasets(t); e < i.length; ++e) i[e].draw(n.chartArea);
                n._drawTooltip(t), ei.notify(n, "afterDraw", [t])
            }
        }, transition: function (t) {
            for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            this.tooltip.transition(t)
        }, _getSortedDatasetMetas: function (t) {
            var e, i, n = [];
            for (e = 0, i = (this.data.datasets || []).length; e < i; ++e) t && !this.isDatasetVisible(e) || n.push(this.getDatasetMeta(e));
            return n.sort(yi("order", "index")), n
        }, _getSortedVisibleDatasetMetas: function () {
            return this._getSortedDatasetMetas(!0)
        }, drawDatasets: function (t) {
            var e, i;
            if (!1 !== ei.notify(this, "beforeDatasetsDraw", [t])) {
                for (i = (e = this._getSortedVisibleDatasetMetas()).length - 1; i >= 0; --i) this.drawDataset(e[i], t);
                ei.notify(this, "afterDatasetsDraw", [t])
            }
        }, drawDataset: function (t, e) {
            var i = {meta: t, index: t.index, easingValue: e};
            !1 !== ei.notify(this, "beforeDatasetDraw", [i]) && (t.controller.draw(e), ei.notify(this, "afterDatasetDraw", [i]))
        }, _drawTooltip: function (t) {
            var e = this.tooltip, i = {tooltip: e, easingValue: t};
            !1 !== ei.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), ei.notify(this, "afterTooltipDraw", [i]))
        }, getElementAtEvent: function (t) {
            return Ce.modes.single(this, t)
        }, getElementsAtEvent: function (t) {
            return Ce.modes.label(this, t, {intersect: !0})
        }, getElementsAtXAxis: function (t) {
            return Ce.modes["x-axis"](this, t, {intersect: !0})
        }, getElementsAtEventForMode: function (t, e, i) {
            var n = Ce.modes[e];
            return "function" == typeof n ? n(this, t, i) : []
        }, getDatasetAtEvent: function (t) {
            return Ce.modes.dataset(this, t, {intersect: !0})
        }, getDatasetMeta: function (t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var i = e._meta[this.id];
            return i || (i = e._meta[this.id] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: e.order || 0,
                index: t
            }), i
        }, getVisibleDatasetCount: function () {
            for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
            return t
        }, isDatasetVisible: function (t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
        }, generateLegend: function () {
            return this.options.legendCallback(this)
        }, destroyDatasetMeta: function (t) {
            var e = this.id, i = this.data.datasets[t], n = i._meta && i._meta[e];
            n && (n.controller.destroy(), delete i._meta[e])
        }, destroy: function () {
            var t, e, i = this, n = i.canvas;
            for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);
            n && (i.unbindEvents(), ct.canvas.clear(i), ti.releaseContext(i.ctx), i.canvas = null, i.ctx = null), ei.notify(i, "destroy"), delete _i.instances[i.id]
        }, toBase64Image: function () {
            return this.canvas.toDataURL.apply(this.canvas, arguments)
        }, initToolTip: function () {
            var t = this;
            t.tooltip = new fi({_chart: t, _chartInstance: t, _data: t.data, _options: t.options.tooltips}, t)
        }, bindEvents: function () {
            var t = this, e = t._listeners = {}, i = function () {
                t.eventHandler.apply(t, arguments)
            };
            ct.each(t.options.events, function (n) {
                ti.addEventListener(t, n, i), e[n] = i
            }), t.options.responsive && (i = function () {
                t.resize()
            }, ti.addEventListener(t, "resize", i), e.resize = i)
        }, unbindEvents: function () {
            var t = this, e = t._listeners;
            e && (delete t._listeners, ct.each(e, function (e, i) {
                ti.removeEventListener(t, i, e)
            }))
        }, updateHoverStyle: function (t, e, i) {
            var n, a, r, o = i ? "set" : "remove";
            for (a = 0, r = t.length; a < r; ++a) (n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[o + "HoverStyle"](n);
            "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + o + "DatasetHoverStyle"]()
        }, eventHandler: function (t) {
            var e = this, i = e.tooltip;
            if (!1 !== ei.notify(e, "beforeEvent", [t])) {
                e._bufferedRender = !0, e._bufferedRequest = null;
                var n = e.handleEvent(t);
                i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), ei.notify(e, "afterEvent", [t]);
                var a = e._bufferedRequest;
                return a ? e.render(a) : n && !e.animating && (e.stop(), e.render({
                    duration: e.options.hover.animationDuration,
                    lazy: !0
                })), e._bufferedRender = !1, e._bufferedRequest = null, e
            }
        }, handleEvent: function (t) {
            var e, i = this, n = i.options || {}, a = n.hover;
            return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, a.mode, a), ct.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, a.mode, !1), i.active.length && a.mode && i.updateHoverStyle(i.active, a.mode, !0), e = !ct.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
        }
    }), _i.instances = {};
    var ki = _i;
    _i.Controller = _i, _i.types = {}, ct.configMerge = mi, ct.scaleMerge = pi;

    function wi() {
        throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
    }

    function Mi(t) {
        this.options = t || {}
    }

    ct.extend(Mi.prototype, {
        formats: wi,
        parse: wi,
        format: wi,
        add: wi,
        diff: wi,
        startOf: wi,
        endOf: wi,
        _create: function (t) {
            return t
        }
    }), Mi.override = function (t) {
        ct.extend(Mi.prototype, t)
    };
    var Si = {_date: Mi}, Ci = {
        formatters: {
            values: function (t) {
                return ct.isArray(t) ? t : "" + t
            }, linear: function (t, e, i) {
                var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
                var a = ct.log10(Math.abs(n)), r = "";
                if (0 !== t) if (Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
                    var o = ct.log10(Math.abs(t)), s = Math.floor(o) - Math.floor(a);
                    s = Math.max(Math.min(s, 20), 0), r = t.toExponential(s)
                } else {
                    var l = -1 * Math.floor(a);
                    l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l)
                } else r = "0";
                return r
            }, logarithmic: function (t, e, i) {
                var n = t / Math.pow(10, Math.floor(ct.log10(t)));
                return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === e || e === i.length - 1 ? t.toExponential() : ""
            }
        }
    }, Pi = ct.isArray, Ai = ct.isNullOrUndef, Di = ct.valueOrDefault, Ti = ct.valueAtIndexOrDefault;

    function Ii(t, e, i) {
        var n, a = t.getTicks().length, r = Math.min(e, a - 1), o = t.getPixelForTick(r), s = t._startPixel,
            l = t._endPixel;
        if (!(i && (n = 1 === a ? Math.max(o - s, l - o) : 0 === e ? (t.getPixelForTick(1) - o) / 2 : (o - t.getPixelForTick(r - 1)) / 2, (o += r < e ? n : -n) < s - 1e-6 || o > l + 1e-6))) return o
    }

    function Fi(t, e, i, n) {
        var a, r, o, s, l, u, d, h, c, f, g, p, m, v = i.length, b = [], x = [], y = [];
        for (a = 0; a < v; ++a) {
            if (s = i[a].label, l = i[a].major ? e.major : e.minor, t.font = u = l.string, d = n[u] = n[u] || {
                data: {},
                gc: []
            }, h = l.lineHeight, c = f = 0, Ai(s) || Pi(s)) {
                if (Pi(s)) for (r = 0, o = s.length; r < o; ++r) g = s[r], Ai(g) || Pi(g) || (c = ct.measureText(t, d.data, d.gc, c, g), f += h)
            } else c = ct.measureText(t, d.data, d.gc, c, s), f = h;
            b.push(c), x.push(f), y.push(h / 2)
        }

        function _(t) {
            return {width: b[t] || 0, height: x[t] || 0, offset: y[t] || 0}
        }

        return function (t, e) {
            ct.each(t, function (t) {
                var i, n = t.gc, a = n.length / 2;
                if (a > e) {
                    for (i = 0; i < a; ++i) delete t.data[n[i]];
                    n.splice(0, a)
                }
            })
        }(n, v), p = b.indexOf(Math.max.apply(null, b)), m = x.indexOf(Math.max.apply(null, x)), {
            first: _(0),
            last: _(v - 1),
            widest: _(p),
            highest: _(m)
        }
    }

    function Li(t) {
        return t.drawTicks ? t.tickMarkLength : 0
    }

    function Oi(t) {
        var e, i;
        return t.display ? (e = ct.options._parseFont(t), i = ct.options.toPadding(t.padding), e.lineHeight + i.height) : 0
    }

    function Ri(t, e) {
        return ct.extend(ct.options._parseFont({
            fontFamily: Di(e.fontFamily, t.fontFamily),
            fontSize: Di(e.fontSize, t.fontSize),
            fontStyle: Di(e.fontStyle, t.fontStyle),
            lineHeight: Di(e.lineHeight, t.lineHeight)
        }), {color: ct.options.resolve([e.fontColor, t.fontColor, st.global.defaultFontColor])})
    }

    function zi(t) {
        var e = Ri(t, t.minor);
        return {minor: e, major: t.major.enabled ? Ri(t, t.major) : e}
    }

    function Ni(t) {
        var e, i, n, a = [];
        for (i = 0, n = t.length; i < n; ++i) void 0 !== (e = t[i])._index && a.push(e);
        return a
    }

    function Bi(t, e, i, n) {
        var a, r, o, s, l = Di(i, 0), u = Math.min(Di(n, t.length), t.length), d = 0;
        for (e = Math.ceil(e), n && (e = (a = n - i) / Math.floor(a / e)), s = l; s < 0;) d++, s = Math.round(l + d * e);
        for (r = Math.max(l, 0); r < u; r++) o = t[r], r === s ? (o._index = r, d++, s = Math.round(l + d * e)) : delete o.label
    }

    st._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
        },
        scaleLabel: {display: !1, labelString: "", padding: {top: 4, bottom: 4}},
        ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: Ci.formatters.values,
            minor: {},
            major: {}
        }
    });
    var Ei = xt.extend({
        zeroLineIndex: 0,
        getPadding: function () {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0
            }
        },
        getTicks: function () {
            return this._ticks
        },
        _getLabels: function () {
            var t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
        },
        mergeTicksOptions: function () {
        },
        beforeUpdate: function () {
            ct.callback(this.options.beforeUpdate, [this])
        },
        update: function (t, e, i) {
            var n, a, r, o, s, l = this, u = l.options.ticks, d = u.sampleSize;
            if (l.beforeUpdate(), l.maxWidth = t, l.maxHeight = e, l.margins = ct.extend({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, i), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), o = l.buildTicks() || [], (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks) for (o = [], n = 0, a = l.ticks.length; n < a; ++n) o.push({
                value: l.ticks[n],
                major: !1
            });
            return l._ticks = o, s = d < o.length, r = l._convertTicksToLabels(s ? function (t, e) {
                for (var i = [], n = t.length / e, a = 0, r = t.length; a < r; a += n) i.push(t[Math.floor(a)]);
                return i
            }(o, d) : o), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = u.display && (u.autoSkip || "auto" === u.source) ? l._autoSkip(o) : o, s && (r = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = r, l.afterUpdate(), l.minSize
        },
        _configure: function () {
            var t, e, i = this, n = i.options.ticks.reverse;
            i.isHorizontal() ? (t = i.left, e = i.right) : (t = i.top, e = i.bottom, n = !n), i._startPixel = t, i._endPixel = e, i._reversePixels = n, i._length = e - t
        },
        afterUpdate: function () {
            ct.callback(this.options.afterUpdate, [this])
        },
        beforeSetDimensions: function () {
            ct.callback(this.options.beforeSetDimensions, [this])
        },
        setDimensions: function () {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
        },
        afterSetDimensions: function () {
            ct.callback(this.options.afterSetDimensions, [this])
        },
        beforeDataLimits: function () {
            ct.callback(this.options.beforeDataLimits, [this])
        },
        determineDataLimits: ct.noop,
        afterDataLimits: function () {
            ct.callback(this.options.afterDataLimits, [this])
        },
        beforeBuildTicks: function () {
            ct.callback(this.options.beforeBuildTicks, [this])
        },
        buildTicks: ct.noop,
        afterBuildTicks: function (t) {
            var e = this;
            return Pi(t) && t.length ? ct.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = ct.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t)
        },
        beforeTickToLabelConversion: function () {
            ct.callback(this.options.beforeTickToLabelConversion, [this])
        },
        convertTicksToLabels: function () {
            var t = this.options.ticks;
            this.ticks = this.ticks.map(t.userCallback || t.callback, this)
        },
        afterTickToLabelConversion: function () {
            ct.callback(this.options.afterTickToLabelConversion, [this])
        },
        beforeCalculateTickRotation: function () {
            ct.callback(this.options.beforeCalculateTickRotation, [this])
        },
        calculateTickRotation: function () {
            var t, e, i, n, a, r, o, s = this, l = s.options, u = l.ticks, d = s.getTicks().length,
                h = u.minRotation || 0, c = u.maxRotation, f = h;
            !s._isVisible() || !u.display || h >= c || d <= 1 || !s.isHorizontal() ? s.labelRotation = h : (e = (t = s._getLabelSizes()).widest.width, i = t.highest.height - t.highest.offset, n = Math.min(s.maxWidth, s.chart.width - e), e + 6 > (a = l.offset ? s.maxWidth / d : n / (d - 1)) && (a = n / (d - (l.offset ? .5 : 1)), r = s.maxHeight - Li(l.gridLines) - u.padding - Oi(l.scaleLabel), o = Math.sqrt(e * e + i * i), f = ct.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / a, 1)), Math.asin(Math.min(r / o, 1)) - Math.asin(i / o))), f = Math.max(h, Math.min(c, f))), s.labelRotation = f)
        },
        afterCalculateTickRotation: function () {
            ct.callback(this.options.afterCalculateTickRotation, [this])
        },
        beforeFit: function () {
            ct.callback(this.options.beforeFit, [this])
        },
        fit: function () {
            var t = this, e = t.minSize = {width: 0, height: 0}, i = t.chart, n = t.options, a = n.ticks,
                r = n.scaleLabel, o = n.gridLines, s = t._isVisible(), l = "bottom" === n.position,
                u = t.isHorizontal();
            if (u ? e.width = t.maxWidth : s && (e.width = Li(o) + Oi(r)), u ? s && (e.height = Li(o) + Oi(r)) : e.height = t.maxHeight, a.display && s) {
                var d = zi(a), h = t._getLabelSizes(), c = h.first, f = h.last, g = h.widest, p = h.highest,
                    m = .4 * d.minor.lineHeight, v = a.padding;
                if (u) {
                    var b = 0 !== t.labelRotation, x = ct.toRadians(t.labelRotation), y = Math.cos(x), _ = Math.sin(x),
                        k = _ * g.width + y * (p.height - (b ? p.offset : 0)) + (b ? 0 : m);
                    e.height = Math.min(t.maxHeight, e.height + k + v);
                    var w, M, S = t.getPixelForTick(0) - t.left,
                        C = t.right - t.getPixelForTick(t.getTicks().length - 1);
                    b ? (w = l ? y * c.width + _ * c.offset : _ * (c.height - c.offset), M = l ? _ * (f.height - f.offset) : y * f.width + _ * f.offset) : (w = c.width / 2, M = f.width / 2), t.paddingLeft = Math.max((w - S) * t.width / (t.width - S), 0) + 3, t.paddingRight = Math.max((M - C) * t.width / (t.width - C), 0) + 3
                } else {
                    var P = a.mirror ? 0 : g.width + v + m;
                    e.width = Math.min(t.maxWidth, e.width + P), t.paddingTop = c.height / 2, t.paddingBottom = f.height / 2
                }
            }
            t.handleMargins(), u ? (t.width = t._length = i.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = i.height - t.margins.top - t.margins.bottom)
        },
        handleMargins: function () {
            var t = this;
            t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom))
        },
        afterFit: function () {
            ct.callback(this.options.afterFit, [this])
        },
        isHorizontal: function () {
            var t = this.options.position;
            return "top" === t || "bottom" === t
        },
        isFullWidth: function () {
            return this.options.fullWidth
        },
        getRightValue: function (t) {
            if (Ai(t)) return NaN;
            if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
            if (t) if (this.isHorizontal()) {
                if (void 0 !== t.x) return this.getRightValue(t.x)
            } else if (void 0 !== t.y) return this.getRightValue(t.y);
            return t
        },
        _convertTicksToLabels: function (t) {
            var e, i, n, a = this;
            for (a.ticks = t.map(function (t) {
                return t.value
            }), a.beforeTickToLabelConversion(), e = a.convertTicksToLabels(t) || a.ticks, a.afterTickToLabelConversion(), i = 0, n = t.length; i < n; ++i) t[i].label = e[i];
            return e
        },
        _getLabelSizes: function () {
            var t = this, e = t._labelSizes;
            return e || (t._labelSizes = e = Fi(t.ctx, zi(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e
        },
        _parseValue: function (t) {
            var e, i, n, a;
            return Pi(t) ? (e = +this.getRightValue(t[0]), i = +this.getRightValue(t[1]), n = Math.min(e, i), a = Math.max(e, i)) : (e = void 0, i = t = +this.getRightValue(t), n = t, a = t), {
                min: n,
                max: a,
                start: e,
                end: i
            }
        },
        _getScaleLabel: function (t) {
            var e = this._parseValue(t);
            return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t)
        },
        getLabelForIndex: ct.noop,
        getPixelForValue: ct.noop,
        getValueForPixel: ct.noop,
        getPixelForTick: function (t) {
            var e = this.options.offset, i = this._ticks.length, n = 1 / Math.max(i - (e ? 0 : 1), 1);
            return t < 0 || t > i - 1 ? null : this.getPixelForDecimal(t * n + (e ? n / 2 : 0))
        },
        getPixelForDecimal: function (t) {
            return this._reversePixels && (t = 1 - t), this._startPixel + t * this._length
        },
        getDecimalForPixel: function (t) {
            var e = (t - this._startPixel) / this._length;
            return Math.min(1, Math.max(0, this._reversePixels ? 1 - e : e))
        },
        getBasePixel: function () {
            return this.getPixelForValue(this.getBaseValue())
        },
        getBaseValue: function () {
            var t = this.min, e = this.max;
            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
        },
        _autoSkip: function (t) {
            var e, i, n, a, r = this.options.ticks, o = this._length, s = r.maxTicksLimit || o / this._tickSize() + 1,
                l = r.major.enabled ? function (t) {
                    var e, i, n = [];
                    for (e = 0, i = t.length; e < i; e++) t[e].major && n.push(e);
                    return n
                }(t) : [], u = l.length, d = l[0], h = l[u - 1];
            if (u > s) return function (t, e, i) {
                var n, a, r = 0, o = e[0];
                for (i = Math.ceil(i), n = 0; n < t.length; n++) a = t[n], n === o ? (a._index = n, o = e[++r * i]) : delete a.label
            }(t, l, u / s), Ni(t);
            if (n = function (t, e, i, n) {
                var a, r, o, s, l = function (t) {
                    var e, i, n = t.length;
                    if (n < 2) return !1;
                    for (i = t[0], e = 1; e < n; ++e) if (t[e] - t[e - 1] !== i) return !1;
                    return i
                }(t), u = (e.length - 1) / n;
                if (!l) return Math.max(u, 1);
                for (o = 0, s = (a = ct.math._factorize(l)).length - 1; o < s; o++) if ((r = a[o]) > u) return r;
                return Math.max(u, 1)
            }(l, t, 0, s), u > 0) {
                for (e = 0, i = u - 1; e < i; e++) Bi(t, n, l[e], l[e + 1]);
                return a = u > 1 ? (h - d) / (u - 1) : null, Bi(t, n, ct.isNullOrUndef(a) ? 0 : d - a, d), Bi(t, n, h, ct.isNullOrUndef(a) ? t.length : h + a), Ni(t)
            }
            return Bi(t, n), Ni(t)
        },
        _tickSize: function () {
            var t = this.options.ticks, e = ct.toRadians(this.labelRotation), i = Math.abs(Math.cos(e)),
                n = Math.abs(Math.sin(e)), a = this._getLabelSizes(), r = t.autoSkipPadding || 0,
                o = a ? a.widest.width + r : 0, s = a ? a.highest.height + r : 0;
            return this.isHorizontal() ? s * i > o * n ? o / i : s / n : s * n < o * i ? s / i : o / n
        },
        _isVisible: function () {
            var t, e, i, n = this.chart, a = this.options.display;
            if ("auto" !== a) return !!a;
            for (t = 0, e = n.data.datasets.length; t < e; ++t) if (n.isDatasetVisible(t) && ((i = n.getDatasetMeta(t)).xAxisID === this.id || i.yAxisID === this.id)) return !0;
            return !1
        },
        _computeGridLineItems: function (t) {
            var e, i, n, a, r, o, s, l, u, d, h, c, f, g, p, m, v, b = this, x = b.chart, y = b.options,
                _ = y.gridLines, k = y.position, w = _.offsetGridLines, M = b.isHorizontal(), S = b._ticksToDraw,
                C = S.length + (w ? 1 : 0), P = Li(_), A = [], D = _.drawBorder ? Ti(_.lineWidth, 0, 0) : 0, T = D / 2,
                I = ct._alignPixel, F = function (t) {
                    return I(x, t, D)
                };
            for ("top" === k ? (e = F(b.bottom), s = b.bottom - P, u = e - T, h = F(t.top) + T, f = t.bottom) : "bottom" === k ? (e = F(b.top), h = t.top, f = F(t.bottom) - T, s = e + T, u = b.top + P) : "left" === k ? (e = F(b.right), o = b.right - P, l = e - T, d = F(t.left) + T, c = t.right) : (e = F(b.left), d = t.left, c = F(t.right) - T, o = e + T, l = b.left + P), i = 0; i < C; ++i) n = S[i] || {}, Ai(n.label) && i < S.length || (i === b.zeroLineIndex && y.offset === w ? (g = _.zeroLineWidth, p = _.zeroLineColor, m = _.zeroLineBorderDash || [], v = _.zeroLineBorderDashOffset || 0) : (g = Ti(_.lineWidth, i, 1), p = Ti(_.color, i, "rgba(0,0,0,0.1)"), m = _.borderDash || [], v = _.borderDashOffset || 0), void 0 !== (a = Ii(b, n._index || i, w)) && (r = I(x, a, g), M ? o = l = d = c = r : s = u = h = f = r, A.push({
                tx1: o,
                ty1: s,
                tx2: l,
                ty2: u,
                x1: d,
                y1: h,
                x2: c,
                y2: f,
                width: g,
                color: p,
                borderDash: m,
                borderDashOffset: v
            })));
            return A.ticksLength = C, A.borderValue = e, A
        },
        _computeLabelItems: function () {
            var t, e, i, n, a, r, o, s, l, u, d, h, c = this, f = c.options, g = f.ticks, p = f.position, m = g.mirror,
                v = c.isHorizontal(), b = c._ticksToDraw, x = zi(g), y = g.padding, _ = Li(f.gridLines),
                k = -ct.toRadians(c.labelRotation), w = [];
            for ("top" === p ? (r = c.bottom - _ - y, o = k ? "left" : "center") : "bottom" === p ? (r = c.top + _ + y, o = k ? "right" : "center") : "left" === p ? (a = c.right - (m ? 0 : _) - y, o = m ? "left" : "right") : (a = c.left + (m ? 0 : _) + y, o = m ? "right" : "left"), t = 0, e = b.length; t < e; ++t) n = (i = b[t]).label, Ai(n) || (s = c.getPixelForTick(i._index || t) + g.labelOffset, u = (l = i.major ? x.major : x.minor).lineHeight, d = Pi(n) ? n.length : 1, v ? (a = s, h = "top" === p ? ((k ? 1 : .5) - d) * u : (k ? 0 : .5) * u) : (r = s, h = (1 - d) * u / 2), w.push({
                x: a,
                y: r,
                rotation: k,
                label: n,
                font: l,
                textOffset: h,
                textAlign: o
            }));
            return w
        },
        _drawGrid: function (t) {
            var e = this, i = e.options.gridLines;
            if (i.display) {
                var n, a, r, o, s, l = e.ctx, u = e.chart, d = ct._alignPixel,
                    h = i.drawBorder ? Ti(i.lineWidth, 0, 0) : 0,
                    c = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
                for (r = 0, o = c.length; r < o; ++r) n = (s = c[r]).width, a = s.color, n && a && (l.save(), l.lineWidth = n, l.strokeStyle = a, l.setLineDash && (l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset), l.beginPath(), i.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)), i.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)), l.stroke(), l.restore());
                if (h) {
                    var f, g, p, m, v = h, b = Ti(i.lineWidth, c.ticksLength - 1, 1), x = c.borderValue;
                    e.isHorizontal() ? (f = d(u, e.left, v) - v / 2, g = d(u, e.right, b) + b / 2, p = m = x) : (p = d(u, e.top, v) - v / 2, m = d(u, e.bottom, b) + b / 2, f = g = x), l.lineWidth = h, l.strokeStyle = Ti(i.color, 0), l.beginPath(), l.moveTo(f, p), l.lineTo(g, m), l.stroke()
                }
            }
        },
        _drawLabels: function () {
            var t = this;
            if (t.options.ticks.display) {
                var e, i, n, a, r, o, s, l, u = t.ctx, d = t._labelItems || (t._labelItems = t._computeLabelItems());
                for (e = 0, n = d.length; e < n; ++e) {
                    if (o = (r = d[e]).font, u.save(), u.translate(r.x, r.y), u.rotate(r.rotation), u.font = o.string, u.fillStyle = o.color, u.textBaseline = "middle", u.textAlign = r.textAlign, s = r.label, l = r.textOffset, Pi(s)) for (i = 0, a = s.length; i < a; ++i) u.fillText("" + s[i], 0, l), l += o.lineHeight; else u.fillText(s, 0, l);
                    u.restore()
                }
            }
        },
        _drawTitle: function () {
            var t = this, e = t.ctx, i = t.options, n = i.scaleLabel;
            if (n.display) {
                var a, r, o = Di(n.fontColor, st.global.defaultFontColor), s = ct.options._parseFont(n),
                    l = ct.options.toPadding(n.padding), u = s.lineHeight / 2, d = i.position, h = 0;
                if (t.isHorizontal()) a = t.left + t.width / 2, r = "bottom" === d ? t.bottom - u - l.bottom : t.top + u + l.top; else {
                    var c = "left" === d;
                    a = c ? t.left + u + l.top : t.right - u - l.top, r = t.top + t.height / 2, h = c ? -.5 * Math.PI : .5 * Math.PI
                }
                e.save(), e.translate(a, r), e.rotate(h), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = o, e.font = s.string, e.fillText(n.labelString, 0, 0), e.restore()
            }
        },
        draw: function (t) {
            this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels())
        },
        _layers: function () {
            var t = this, e = t.options, i = e.ticks && e.ticks.z || 0, n = e.gridLines && e.gridLines.z || 0;
            return t._isVisible() && i !== n && t.draw === t._draw ? [{
                z: n, draw: function () {
                    t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments)
                }
            }, {
                z: i, draw: function () {
                    t._drawLabels.apply(t, arguments)
                }
            }] : [{
                z: i, draw: function () {
                    t.draw.apply(t, arguments)
                }
            }]
        },
        _getMatchingVisibleMetas: function (t) {
            var e = this, i = e.isHorizontal();
            return e.chart._getSortedVisibleDatasetMetas().filter(function (n) {
                return (!t || n.type === t) && (i ? n.xAxisID === e.id : n.yAxisID === e.id)
            })
        }
    });
    Ei.prototype._draw = Ei.prototype.draw;
    var Wi = Ei, Vi = ct.isNullOrUndef, Hi = Wi.extend({
        determineDataLimits: function () {
            var t, e = this, i = e._getLabels(), n = e.options.ticks, a = n.min, r = n.max, o = 0, s = i.length - 1;
            void 0 !== a && (t = i.indexOf(a)) >= 0 && (o = t), void 0 !== r && (t = i.indexOf(r)) >= 0 && (s = t), e.minIndex = o, e.maxIndex = s, e.min = i[o], e.max = i[s]
        }, buildTicks: function () {
            var t = this._getLabels(), e = this.minIndex, i = this.maxIndex;
            this.ticks = 0 === e && i === t.length - 1 ? t : t.slice(e, i + 1)
        }, getLabelForIndex: function (t, e) {
            var i = this.chart;
            return i.getDatasetMeta(e).controller._getValueScaleId() === this.id ? this.getRightValue(i.data.datasets[e].data[t]) : this._getLabels()[t]
        }, _configure: function () {
            var t = this, e = t.options.offset, i = t.ticks;
            Wi.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), i && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(i.length - (e ? 0 : 1), 1))
        }, getPixelForValue: function (t, e, i) {
            var n, a, r, o = this;
            return Vi(e) || Vi(i) || (t = o.chart.data.datasets[i].data[e]), Vi(t) || (n = o.isHorizontal() ? t.x : t.y), (void 0 !== n || void 0 !== t && isNaN(e)) && (a = o._getLabels(), t = ct.valueOrDefault(n, t), e = -1 !== (r = a.indexOf(t)) ? r : e, isNaN(e) && (e = t)), o.getPixelForDecimal((e - o._startValue) / o._valueRange)
        }, getPixelForTick: function (t) {
            var e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex)
        }, getValueForPixel: function (t) {
            var e = Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
            return Math.min(Math.max(e, 0), this.ticks.length - 1)
        }, getBasePixel: function () {
            return this.bottom
        }
    }), ji = {position: "bottom"};
    Hi._defaults = ji;
    var qi = ct.noop, Ui = ct.isNullOrUndef;
    var Yi = Wi.extend({
        getRightValue: function (t) {
            return "string" == typeof t ? +t : Wi.prototype.getRightValue.call(this, t)
        }, handleTickRangeOptions: function () {
            var t = this, e = t.options.ticks;
            if (e.beginAtZero) {
                var i = ct.sign(t.min), n = ct.sign(t.max);
                i < 0 && n < 0 ? t.max = 0 : i > 0 && n > 0 && (t.min = 0)
            }
            var a = void 0 !== e.min || void 0 !== e.suggestedMin, r = void 0 !== e.max || void 0 !== e.suggestedMax;
            void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== r && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
        }, getTickLimit: function () {
            var t, e = this.options.ticks, i = e.stepSize, n = e.maxTicksLimit;
            return i ? t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1 : (t = this._computeTickLimit(), n = n || 11), n && (t = Math.min(n, t)), t
        }, _computeTickLimit: function () {
            return Number.POSITIVE_INFINITY
        }, handleDirectionalChanges: qi, buildTicks: function () {
            var t = this, e = t.options.ticks, i = t.getTickLimit(), n = {
                maxTicks: i = Math.max(2, i),
                min: e.min,
                max: e.max,
                precision: e.precision,
                stepSize: ct.valueOrDefault(e.fixedStepSize, e.stepSize)
            }, a = t.ticks = function (t, e) {
                var i, n, a, r, o = [], s = t.stepSize, l = s || 1, u = t.maxTicks - 1, d = t.min, h = t.max,
                    c = t.precision, f = e.min, g = e.max, p = ct.niceNum((g - f) / u / l) * l;
                if (p < 1e-14 && Ui(d) && Ui(h)) return [f, g];
                (r = Math.ceil(g / p) - Math.floor(f / p)) > u && (p = ct.niceNum(r * p / u / l) * l), s || Ui(c) ? i = Math.pow(10, ct._decimalPlaces(p)) : (i = Math.pow(10, c), p = Math.ceil(p * i) / i), n = Math.floor(f / p) * p, a = Math.ceil(g / p) * p, s && (!Ui(d) && ct.almostWhole(d / p, p / 1e3) && (n = d), !Ui(h) && ct.almostWhole(h / p, p / 1e3) && (a = h)), r = (a - n) / p, r = ct.almostEquals(r, Math.round(r), p / 1e3) ? Math.round(r) : Math.ceil(r), n = Math.round(n * i) / i, a = Math.round(a * i) / i, o.push(Ui(d) ? n : d);
                for (var m = 1; m < r; ++m) o.push(Math.round((n + m * p) * i) / i);
                return o.push(Ui(h) ? a : h), o
            }(n, t);
            t.handleDirectionalChanges(), t.max = ct.max(a), t.min = ct.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
        }, convertTicksToLabels: function () {
            var t = this;
            t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), Wi.prototype.convertTicksToLabels.call(t)
        }, _configure: function () {
            var t, e = this, i = e.getTicks(), n = e.min, a = e.max;
            Wi.prototype._configure.call(e), e.options.offset && i.length && (n -= t = (a - n) / Math.max(i.length - 1, 1) / 2, a += t), e._startValue = n, e._endValue = a, e._valueRange = a - n
        }
    }), Gi = {position: "left", ticks: {callback: Ci.formatters.linear}};

    function Xi(t, e, i, n) {
        var a, r, o = t.options, s = function (t, e, i) {
            var n = [i.type, void 0 === e && void 0 === i.stack ? i.index : "", i.stack].join(".");
            return void 0 === t[n] && (t[n] = {pos: [], neg: []}), t[n]
        }(e, o.stacked, i), l = s.pos, u = s.neg, d = n.length;
        for (a = 0; a < d; ++a) r = t._parseValue(n[a]), isNaN(r.min) || isNaN(r.max) || i.data[a].hidden || (l[a] = l[a] || 0, u[a] = u[a] || 0, o.relativePoints ? l[a] = 100 : r.min < 0 || r.max < 0 ? u[a] += r.min : l[a] += r.max)
    }

    function Ki(t, e, i) {
        var n, a, r = i.length;
        for (n = 0; n < r; ++n) a = t._parseValue(i[n]), isNaN(a.min) || isNaN(a.max) || e.data[n].hidden || (t.min = Math.min(t.min, a.min), t.max = Math.max(t.max, a.max))
    }

    var Zi = Yi.extend({
        determineDataLimits: function () {
            var t, e, i, n, a = this, r = a.options, o = a.chart.data.datasets, s = a._getMatchingVisibleMetas(),
                l = r.stacked, u = {}, d = s.length;
            if (a.min = Number.POSITIVE_INFINITY, a.max = Number.NEGATIVE_INFINITY, void 0 === l) for (t = 0; !l && t < d; ++t) l = void 0 !== (e = s[t]).stack;
            for (t = 0; t < d; ++t) i = o[(e = s[t]).index].data, l ? Xi(a, u, e, i) : Ki(a, e, i);
            ct.each(u, function (t) {
                n = t.pos.concat(t.neg), a.min = Math.min(a.min, ct.min(n)), a.max = Math.max(a.max, ct.max(n))
            }), a.min = ct.isFinite(a.min) && !isNaN(a.min) ? a.min : 0, a.max = ct.isFinite(a.max) && !isNaN(a.max) ? a.max : 1, a.handleTickRangeOptions()
        }, _computeTickLimit: function () {
            var t;
            return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = ct.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight))
        }, handleDirectionalChanges: function () {
            this.isHorizontal() || this.ticks.reverse()
        }, getLabelForIndex: function (t, e) {
            return this._getScaleLabel(this.chart.data.datasets[e].data[t])
        }, getPixelForValue: function (t) {
            return this.getPixelForDecimal((+this.getRightValue(t) - this._startValue) / this._valueRange)
        }, getValueForPixel: function (t) {
            return this._startValue + this.getDecimalForPixel(t) * this._valueRange
        }, getPixelForTick: function (t) {
            var e = this.ticksAsNumbers;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
        }
    }), $i = Gi;
    Zi._defaults = $i;
    var Ji = ct.valueOrDefault, Qi = ct.math.log10;
    var tn = {position: "left", ticks: {callback: Ci.formatters.logarithmic}};

    function en(t, e) {
        return ct.isFinite(t) && t >= 0 ? t : e
    }

    var nn = Wi.extend({
        determineDataLimits: function () {
            var t, e, i, n, a, r, o = this, s = o.options, l = o.chart, u = l.data.datasets, d = o.isHorizontal();

            function h(t) {
                return d ? t.xAxisID === o.id : t.yAxisID === o.id
            }

            o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, o.minNotZero = Number.POSITIVE_INFINITY;
            var c = s.stacked;
            if (void 0 === c) for (t = 0; t < u.length; t++) if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e) && void 0 !== e.stack) {
                c = !0;
                break
            }
            if (s.stacked || c) {
                var f = {};
                for (t = 0; t < u.length; t++) {
                    var g = [(e = l.getDatasetMeta(t)).type, void 0 === s.stacked && void 0 === e.stack ? t : "", e.stack].join(".");
                    if (l.isDatasetVisible(t) && h(e)) for (void 0 === f[g] && (f[g] = []), a = 0, r = (n = u[t].data).length; a < r; a++) {
                        var p = f[g];
                        i = o._parseValue(n[a]), isNaN(i.min) || isNaN(i.max) || e.data[a].hidden || i.min < 0 || i.max < 0 || (p[a] = p[a] || 0, p[a] += i.max)
                    }
                }
                ct.each(f, function (t) {
                    if (t.length > 0) {
                        var e = ct.min(t), i = ct.max(t);
                        o.min = Math.min(o.min, e), o.max = Math.max(o.max, i)
                    }
                })
            } else for (t = 0; t < u.length; t++) if (e = l.getDatasetMeta(t), l.isDatasetVisible(t) && h(e)) for (a = 0, r = (n = u[t].data).length; a < r; a++) i = o._parseValue(n[a]), isNaN(i.min) || isNaN(i.max) || e.data[a].hidden || i.min < 0 || i.max < 0 || (o.min = Math.min(i.min, o.min), o.max = Math.max(i.max, o.max), 0 !== i.min && (o.minNotZero = Math.min(i.min, o.minNotZero)));
            o.min = ct.isFinite(o.min) ? o.min : null, o.max = ct.isFinite(o.max) ? o.max : null, o.minNotZero = ct.isFinite(o.minNotZero) ? o.minNotZero : null, this.handleTickRangeOptions()
        }, handleTickRangeOptions: function () {
            var t = this, e = t.options.ticks;
            t.min = en(e.min, t.min), t.max = en(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(Qi(t.min)) - 1), t.max = Math.pow(10, Math.floor(Qi(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(Qi(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(Qi(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(Qi(t.max))) : t.minNotZero = 1)
        }, buildTicks: function () {
            var t = this, e = t.options.ticks, i = !t.isHorizontal(), n = {min: en(e.min), max: en(e.max)},
                a = t.ticks = function (t, e) {
                    var i, n, a = [], r = Ji(t.min, Math.pow(10, Math.floor(Qi(e.min)))), o = Math.floor(Qi(e.max)),
                        s = Math.ceil(e.max / Math.pow(10, o));
                    0 === r ? (i = Math.floor(Qi(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), a.push(r), r = n * Math.pow(10, i)) : (i = Math.floor(Qi(r)), n = Math.floor(r / Math.pow(10, i)));
                    var l = i < 0 ? Math.pow(10, Math.abs(i)) : 1;
                    do {
                        a.push(r), 10 === ++n && (n = 1, l = ++i >= 0 ? 1 : l), r = Math.round(n * Math.pow(10, i) * l) / l
                    } while (i < o || i === o && n < s);
                    var u = Ji(t.max, r);
                    return a.push(u), a
                }(n, t);
            t.max = ct.max(a), t.min = ct.min(a), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && a.reverse()
        }, convertTicksToLabels: function () {
            this.tickValues = this.ticks.slice(), Wi.prototype.convertTicksToLabels.call(this)
        }, getLabelForIndex: function (t, e) {
            return this._getScaleLabel(this.chart.data.datasets[e].data[t])
        }, getPixelForTick: function (t) {
            var e = this.tickValues;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
        }, _getFirstTickValue: function (t) {
            var e = Math.floor(Qi(t));
            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
        }, _configure: function () {
            var t = this, e = t.min, i = 0;
            Wi.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), i = Ji(t.options.ticks.fontSize, st.global.defaultFontSize) / t._length), t._startValue = Qi(e), t._valueOffset = i, t._valueRange = (Qi(t.max) - Qi(e)) / (1 - i)
        }, getPixelForValue: function (t) {
            var e = this, i = 0;
            return (t = +e.getRightValue(t)) > e.min && t > 0 && (i = (Qi(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(i)
        }, getValueForPixel: function (t) {
            var e = this, i = e.getDecimalForPixel(t);
            return 0 === i && 0 === e.min ? 0 : Math.pow(10, e._startValue + (i - e._valueOffset) * e._valueRange)
        }
    }), an = tn;
    nn._defaults = an;
    var rn = ct.valueOrDefault, on = ct.valueAtIndexOrDefault, sn = ct.options.resolve, ln = {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {display: !0, color: "rgba(0,0,0,0.1)", lineWidth: 1, borderDash: [], borderDashOffset: 0},
        gridLines: {circular: !1},
        ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: Ci.formatters.linear
        },
        pointLabels: {
            display: !0, fontSize: 10, callback: function (t) {
                return t
            }
        }
    };

    function un(t) {
        var e = t.ticks;
        return e.display && t.display ? rn(e.fontSize, st.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
    }

    function dn(t, e, i, n, a) {
        return t === n || t === a ? {start: e - i / 2, end: e + i / 2} : t < n || t > a ? {
            start: e - i,
            end: e
        } : {start: e, end: e + i}
    }

    function hn(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
    }

    function cn(t, e, i, n) {
        var a, r, o = i.y + n / 2;
        if (ct.isArray(e)) for (a = 0, r = e.length; a < r; ++a) t.fillText(e[a], i.x, o), o += n; else t.fillText(e, i.x, o)
    }

    function fn(t, e, i) {
        90 === t || 270 === t ? i.y -= e.h / 2 : (t > 270 || t < 90) && (i.y -= e.h)
    }

    function gn(t) {
        return ct.isNumber(t) ? t : 0
    }

    var pn = Yi.extend({
        setDimensions: function () {
            var t = this;
            t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = un(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
        }, determineDataLimits: function () {
            var t = this, e = t.chart, i = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
            ct.each(e.data.datasets, function (a, r) {
                if (e.isDatasetVisible(r)) {
                    var o = e.getDatasetMeta(r);
                    ct.each(a.data, function (e, a) {
                        var r = +t.getRightValue(e);
                        isNaN(r) || o.data[a].hidden || (i = Math.min(r, i), n = Math.max(r, n))
                    })
                }
            }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions()
        }, _computeTickLimit: function () {
            return Math.ceil(this.drawingArea / un(this.options))
        }, convertTicksToLabels: function () {
            var t = this;
            Yi.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(function () {
                var e = ct.callback(t.options.pointLabels.callback, arguments, t);
                return e || 0 === e ? e : ""
            })
        }, getLabelForIndex: function (t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t])
        }, fit: function () {
            var t = this.options;
            t.display && t.pointLabels.display ? function (t) {
                var e, i, n, a = ct.options._parseFont(t.options.pointLabels),
                    r = {l: 0, r: t.width, t: 0, b: t.height - t.paddingTop}, o = {};
                t.ctx.font = a.string, t._pointLabelSizes = [];
                var s, l, u, d = t.chart.data.labels.length;
                for (e = 0; e < d; e++) {
                    n = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = a.lineHeight, u = t.pointLabels[e], i = ct.isArray(u) ? {
                        w: ct.longestText(s, s.font, u),
                        h: u.length * l
                    } : {w: s.measureText(u).width, h: l}, t._pointLabelSizes[e] = i;
                    var h = t.getIndexAngle(e), c = ct.toDegrees(h) % 360, f = dn(c, n.x, i.w, 0, 180),
                        g = dn(c, n.y, i.h, 90, 270);
                    f.start < r.l && (r.l = f.start, o.l = h), f.end > r.r && (r.r = f.end, o.r = h), g.start < r.t && (r.t = g.start, o.t = h), g.end > r.b && (r.b = g.end, o.b = h)
                }
                t.setReductions(t.drawingArea, r, o)
            }(this) : this.setCenterPoint(0, 0, 0, 0)
        }, setReductions: function (t, e, i) {
            var n = this, a = e.l / Math.sin(i.l), r = Math.max(e.r - n.width, 0) / Math.sin(i.r),
                o = -e.t / Math.cos(i.t), s = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
            a = gn(a), r = gn(r), o = gn(o), s = gn(s), n.drawingArea = Math.min(Math.floor(t - (a + r) / 2), Math.floor(t - (o + s) / 2)), n.setCenterPoint(a, r, o, s)
        }, setCenterPoint: function (t, e, i, n) {
            var a = this, r = a.width - e - a.drawingArea, o = t + a.drawingArea, s = i + a.drawingArea,
                l = a.height - a.paddingTop - n - a.drawingArea;
            a.xCenter = Math.floor((o + r) / 2 + a.left), a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop)
        }, getIndexAngle: function (t) {
            var e = this.chart, i = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360;
            return (i < 0 ? i + 360 : i) * Math.PI * 2 / 360
        }, getDistanceFromCenterForValue: function (t) {
            var e = this;
            if (ct.isNullOrUndef(t)) return NaN;
            var i = e.drawingArea / (e.max - e.min);
            return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
        }, getPointPosition: function (t, e) {
            var i = this.getIndexAngle(t) - Math.PI / 2;
            return {x: Math.cos(i) * e + this.xCenter, y: Math.sin(i) * e + this.yCenter}
        }, getPointPositionForValue: function (t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
        }, getBasePosition: function (t) {
            var e = this.min, i = this.max;
            return this.getPointPositionForValue(t || 0, this.beginAtZero ? 0 : e < 0 && i < 0 ? i : e > 0 && i > 0 ? e : 0)
        }, _drawGrid: function () {
            var t, e, i, n = this, a = n.ctx, r = n.options, o = r.gridLines, s = r.angleLines,
                l = rn(s.lineWidth, o.lineWidth), u = rn(s.color, o.color);
            if (r.pointLabels.display && function (t) {
                var e = t.ctx, i = t.options, n = i.pointLabels, a = un(i),
                    r = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max), o = ct.options._parseFont(n);
                e.save(), e.font = o.string, e.textBaseline = "middle";
                for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
                    var l = 0 === s ? a / 2 : 0, u = t.getPointPosition(s, r + l + 5),
                        d = on(n.fontColor, s, st.global.defaultFontColor);
                    e.fillStyle = d;
                    var h = t.getIndexAngle(s), c = ct.toDegrees(h);
                    e.textAlign = hn(c), fn(c, t._pointLabelSizes[s], u), cn(e, t.pointLabels[s], u, o.lineHeight)
                }
                e.restore()
            }(n), o.display && ct.each(n.ticks, function (t, i) {
                0 !== i && (e = n.getDistanceFromCenterForValue(n.ticksAsNumbers[i]), function (t, e, i, n) {
                    var a, r = t.ctx, o = e.circular, s = t.chart.data.labels.length, l = on(e.color, n - 1),
                        u = on(e.lineWidth, n - 1);
                    if ((o || s) && l && u) {
                        if (r.save(), r.strokeStyle = l, r.lineWidth = u, r.setLineDash && (r.setLineDash(e.borderDash || []), r.lineDashOffset = e.borderDashOffset || 0), r.beginPath(), o) r.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI); else {
                            a = t.getPointPosition(0, i), r.moveTo(a.x, a.y);
                            for (var d = 1; d < s; d++) a = t.getPointPosition(d, i), r.lineTo(a.x, a.y)
                        }
                        r.closePath(), r.stroke(), r.restore()
                    }
                }(n, o, e, i))
            }), s.display && l && u) {
                for (a.save(), a.lineWidth = l, a.strokeStyle = u, a.setLineDash && (a.setLineDash(sn([s.borderDash, o.borderDash, []])), a.lineDashOffset = sn([s.borderDashOffset, o.borderDashOffset, 0])), t = n.chart.data.labels.length - 1; t >= 0; t--) e = n.getDistanceFromCenterForValue(r.ticks.reverse ? n.min : n.max), i = n.getPointPosition(t, e), a.beginPath(), a.moveTo(n.xCenter, n.yCenter), a.lineTo(i.x, i.y), a.stroke();
                a.restore()
            }
        }, _drawLabels: function () {
            var t = this, e = t.ctx, i = t.options.ticks;
            if (i.display) {
                var n, a, r = t.getIndexAngle(0), o = ct.options._parseFont(i),
                    s = rn(i.fontColor, st.global.defaultFontColor);
                e.save(), e.font = o.string, e.translate(t.xCenter, t.yCenter), e.rotate(r), e.textAlign = "center", e.textBaseline = "middle", ct.each(t.ticks, function (r, l) {
                    (0 !== l || i.reverse) && (n = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]), i.showLabelBackdrop && (a = e.measureText(r).width, e.fillStyle = i.backdropColor, e.fillRect(-a / 2 - i.backdropPaddingX, -n - o.size / 2 - i.backdropPaddingY, a + 2 * i.backdropPaddingX, o.size + 2 * i.backdropPaddingY)), e.fillStyle = s, e.fillText(r, 0, -n))
                }), e.restore()
            }
        }, _drawTitle: ct.noop
    }), mn = ln;
    pn._defaults = mn;
    var vn = ct._deprecated, bn = ct.options.resolve, xn = ct.valueOrDefault,
        yn = Number.MIN_SAFE_INTEGER || -9007199254740991, _n = Number.MAX_SAFE_INTEGER || 9007199254740991, kn = {
            millisecond: {common: !0, size: 1, steps: 1e3},
            second: {common: !0, size: 1e3, steps: 60},
            minute: {common: !0, size: 6e4, steps: 60},
            hour: {common: !0, size: 36e5, steps: 24},
            day: {common: !0, size: 864e5, steps: 30},
            week: {common: !1, size: 6048e5, steps: 4},
            month: {common: !0, size: 2628e6, steps: 12},
            quarter: {common: !1, size: 7884e6, steps: 4},
            year: {common: !0, size: 3154e7}
        }, wn = Object.keys(kn);

    function Mn(t, e) {
        return t - e
    }

    function Sn(t) {
        return ct.valueOrDefault(t.time.min, t.ticks.min)
    }

    function Cn(t) {
        return ct.valueOrDefault(t.time.max, t.ticks.max)
    }

    function Pn(t, e, i, n) {
        var a = function (t, e, i) {
                for (var n, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s;) {
                    if (a = t[(n = o + s >> 1) - 1] || null, r = t[n], !a) return {lo: null, hi: r};
                    if (r[e] < i) o = n + 1; else {
                        if (!(a[e] > i)) return {lo: a, hi: r};
                        s = n - 1
                    }
                }
                return {lo: r, hi: null}
            }(t, e, i), r = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0], o = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
            s = o[e] - r[e], l = s ? (i - r[e]) / s : 0, u = (o[n] - r[n]) * l;
        return r[n] + u
    }

    function An(t, e) {
        var i = t._adapter, n = t.options.time, a = n.parser, r = a || n.format, o = e;
        return "function" == typeof a && (o = a(o)), ct.isFinite(o) || (o = "string" == typeof r ? i.parse(o, r) : i.parse(o)), null !== o ? +o : (a || "function" != typeof r || (o = r(e), ct.isFinite(o) || (o = i.parse(o))), o)
    }

    function Dn(t, e) {
        if (ct.isNullOrUndef(e)) return null;
        var i = t.options.time, n = An(t, t.getRightValue(e));
        return null === n ? n : (i.round && (n = +t._adapter.startOf(n, i.round)), n)
    }

    function Tn(t, e, i, n) {
        var a, r, o, s = wn.length;
        for (a = wn.indexOf(t); a < s - 1; ++a) if (o = (r = kn[wn[a]]).steps ? r.steps : _n, r.common && Math.ceil((i - e) / (o * r.size)) <= n) return wn[a];
        return wn[s - 1]
    }

    function In(t, e, i) {
        var n, a, r = [], o = {}, s = e.length;
        for (n = 0; n < s; ++n) o[a = e[n]] = n, r.push({value: a, major: !1});
        return 0 !== s && i ? function (t, e, i, n) {
            var a, r, o = t._adapter, s = +o.startOf(e[0].value, n), l = e[e.length - 1].value;
            for (a = s; a <= l; a = +o.add(a, 1, n)) (r = i[a]) >= 0 && (e[r].major = !0);
            return e
        }(t, r, o, i) : r
    }

    var Fn = Wi.extend({
        initialize: function () {
            this.mergeTicksOptions(), Wi.prototype.initialize.call(this)
        }, update: function () {
            var t = this, e = t.options, i = e.time || (e.time = {}), n = t._adapter = new Si._date(e.adapters.date);
            return vn("time scale", i.format, "time.format", "time.parser"), vn("time scale", i.min, "time.min", "ticks.min"), vn("time scale", i.max, "time.max", "ticks.max"), ct.mergeIf(i.displayFormats, n.formats()), Wi.prototype.update.apply(t, arguments)
        }, getRightValue: function (t) {
            return t && void 0 !== t.t && (t = t.t), Wi.prototype.getRightValue.call(this, t)
        }, determineDataLimits: function () {
            var t, e, i, n, a, r, o, s = this, l = s.chart, u = s._adapter, d = s.options, h = d.time.unit || "day",
                c = _n, f = yn, g = [], p = [], m = [], v = s._getLabels();
            for (t = 0, i = v.length; t < i; ++t) m.push(Dn(s, v[t]));
            for (t = 0, i = (l.data.datasets || []).length; t < i; ++t) if (l.isDatasetVisible(t)) if (a = l.data.datasets[t].data, ct.isObject(a[0])) for (p[t] = [], e = 0, n = a.length; e < n; ++e) r = Dn(s, a[e]), g.push(r), p[t][e] = r; else p[t] = m.slice(0), o || (g = g.concat(m), o = !0); else p[t] = [];
            m.length && (c = Math.min(c, m[0]), f = Math.max(f, m[m.length - 1])), g.length && (g = i > 1 ? function (t) {
                var e, i, n, a = {}, r = [];
                for (e = 0, i = t.length; e < i; ++e) a[n = t[e]] || (a[n] = !0, r.push(n));
                return r
            }(g).sort(Mn) : g.sort(Mn), c = Math.min(c, g[0]), f = Math.max(f, g[g.length - 1])), c = Dn(s, Sn(d)) || c, f = Dn(s, Cn(d)) || f, c = c === _n ? +u.startOf(Date.now(), h) : c, f = f === yn ? +u.endOf(Date.now(), h) + 1 : f, s.min = Math.min(c, f), s.max = Math.max(c + 1, f), s._table = [], s._timestamps = {
                data: g,
                datasets: p,
                labels: m
            }
        }, buildTicks: function () {
            var t, e, i, n = this, a = n.min, r = n.max, o = n.options, s = o.ticks, l = o.time, u = n._timestamps,
                d = [], h = n.getLabelCapacity(a), c = s.source, f = o.distribution;
            for (u = "data" === c || "auto" === c && "series" === f ? u.data : "labels" === c ? u.labels : function (t, e, i, n) {
                var a, r = t._adapter, o = t.options, s = o.time, l = s.unit || Tn(s.minUnit, e, i, n),
                    u = bn([s.stepSize, s.unitStepSize, 1]), d = "week" === l && s.isoWeekday, h = e, c = [];
                if (d && (h = +r.startOf(h, "isoWeek", d)), h = +r.startOf(h, d ? "day" : l), r.diff(i, e, l) > 1e5 * u) throw e + " and " + i + " are too far apart with stepSize of " + u + " " + l;
                for (a = h; a < i; a = +r.add(a, u, l)) c.push(a);
                return a !== i && "ticks" !== o.bounds || c.push(a), c
            }(n, a, r, h), "ticks" === o.bounds && u.length && (a = u[0], r = u[u.length - 1]), a = Dn(n, Sn(o)) || a, r = Dn(n, Cn(o)) || r, t = 0, e = u.length; t < e; ++t) (i = u[t]) >= a && i <= r && d.push(i);
            return n.min = a, n.max = r, n._unit = l.unit || (s.autoSkip ? Tn(l.minUnit, n.min, n.max, h) : function (t, e, i, n, a) {
                var r, o;
                for (r = wn.length - 1; r >= wn.indexOf(i); r--) if (o = wn[r], kn[o].common && t._adapter.diff(a, n, o) >= e - 1) return o;
                return wn[i ? wn.indexOf(i) : 0]
            }(n, d.length, l.minUnit, n.min, n.max)), n._majorUnit = s.major.enabled && "year" !== n._unit ? function (t) {
                for (var e = wn.indexOf(t) + 1, i = wn.length; e < i; ++e) if (kn[wn[e]].common) return wn[e]
            }(n._unit) : void 0, n._table = function (t, e, i, n) {
                if ("linear" === n || !t.length) return [{time: e, pos: 0}, {time: i, pos: 1}];
                var a, r, o, s, l, u = [], d = [e];
                for (a = 0, r = t.length; a < r; ++a) (s = t[a]) > e && s < i && d.push(s);
                for (d.push(i), a = 0, r = d.length; a < r; ++a) l = d[a + 1], o = d[a - 1], s = d[a], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({
                    time: s,
                    pos: a / (r - 1)
                });
                return u
            }(n._timestamps.data, a, r, f), n._offsets = function (t, e, i, n, a) {
                var r, o, s = 0, l = 0;
                return a.offset && e.length && (r = Pn(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - r : (Pn(t, "time", e[1], "pos") - r) / 2, o = Pn(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? o : (o - Pn(t, "time", e[e.length - 2], "pos")) / 2), {
                    start: s,
                    end: l,
                    factor: 1 / (s + 1 + l)
                }
            }(n._table, d, 0, 0, o), s.reverse && d.reverse(), In(n, d, n._majorUnit)
        }, getLabelForIndex: function (t, e) {
            var i = this, n = i._adapter, a = i.chart.data, r = i.options.time,
                o = a.labels && t < a.labels.length ? a.labels[t] : "", s = a.datasets[e].data[t];
            return ct.isObject(s) && (o = i.getRightValue(s)), r.tooltipFormat ? n.format(An(i, o), r.tooltipFormat) : "string" == typeof o ? o : n.format(An(i, o), r.displayFormats.datetime)
        }, tickFormatFunction: function (t, e, i, n) {
            var a = this._adapter, r = this.options, o = r.time.displayFormats, s = o[this._unit], l = this._majorUnit,
                u = o[l], d = i[e], h = r.ticks, c = l && u && d && d.major, f = a.format(t, n || (c ? u : s)),
                g = c ? h.major : h.minor, p = bn([g.callback, g.userCallback, h.callback, h.userCallback]);
            return p ? p(f, e, i) : f
        }, convertTicksToLabels: function (t) {
            var e, i, n = [];
            for (e = 0, i = t.length; e < i; ++e) n.push(this.tickFormatFunction(t[e].value, e, t));
            return n
        }, getPixelForOffset: function (t) {
            var e = this._offsets, i = Pn(this._table, "time", t, "pos");
            return this.getPixelForDecimal((e.start + i) * e.factor)
        }, getPixelForValue: function (t, e, i) {
            var n = null;
            if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = Dn(this, t)), null !== n) return this.getPixelForOffset(n)
        }, getPixelForTick: function (t) {
            var e = this.getTicks();
            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
        }, getValueForPixel: function (t) {
            var e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end,
                n = Pn(this._table, "pos", i, "time");
            return this._adapter._create(n)
        }, _getLabelSize: function (t) {
            var e = this.options.ticks, i = this.ctx.measureText(t).width,
                n = ct.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation), a = Math.cos(n), r = Math.sin(n),
                o = xn(e.fontSize, st.global.defaultFontSize);
            return {w: i * a + o * r, h: i * r + o * a}
        }, getLabelWidth: function (t) {
            return this._getLabelSize(t).w
        }, getLabelCapacity: function (t) {
            var e = this, i = e.options.time, n = i.displayFormats, a = n[i.unit] || n.millisecond,
                r = e.tickFormatFunction(t, 0, In(e, [t], e._majorUnit), a), o = e._getLabelSize(r),
                s = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h);
            return e.options.offset && s--, s > 0 ? s : 1
        }
    }), Ln = {
        position: "bottom",
        distribution: "linear",
        bounds: "data",
        adapters: {},
        time: {
            parser: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {}
        },
        ticks: {autoSkip: !1, source: "auto", major: {enabled: !1}}
    };
    Fn._defaults = Ln;
    var On = {category: Hi, linear: Zi, logarithmic: nn, radialLinear: pn, time: Fn}, Rn = {
        datetime: "MMM D, YYYY, h:mm:ss a",
        millisecond: "h:mm:ss.SSS a",
        second: "h:mm:ss a",
        minute: "h:mm a",
        hour: "hA",
        day: "MMM D",
        week: "ll",
        month: "MMM YYYY",
        quarter: "[Q]Q - YYYY",
        year: "YYYY"
    };
    Si._date.override("function" == typeof t ? {
        _id: "moment", formats: function () {
            return Rn
        }, parse: function (e, i) {
            return "string" == typeof e && "string" == typeof i ? e = t(e, i) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null
        }, format: function (e, i) {
            return t(e).format(i)
        }, add: function (e, i, n) {
            return t(e).add(i, n).valueOf()
        }, diff: function (e, i, n) {
            return t(e).diff(t(i), n)
        }, startOf: function (e, i, n) {
            return e = t(e), "isoWeek" === i ? e.isoWeekday(n).valueOf() : e.startOf(i).valueOf()
        }, endOf: function (e, i) {
            return t(e).endOf(i).valueOf()
        }, _create: function (e) {
            return t(e)
        }
    } : {}), st._set("global", {plugins: {filler: {propagate: !0}}});
    var zn = {
        dataset: function (t) {
            var e = t.fill, i = t.chart, n = i.getDatasetMeta(e),
                a = n && i.isDatasetVisible(e) && n.dataset._children || [], r = a.length || 0;
            return r ? function (t, e) {
                return e < r && a[e]._view || null
            } : null
        }, boundary: function (t) {
            var e = t.boundary, i = e ? e.x : null, n = e ? e.y : null;
            return ct.isArray(e) ? function (t, i) {
                return e[i]
            } : function (t) {
                return {x: null === i ? t.x : i, y: null === n ? t.y : n}
            }
        }
    };

    function Nn(t, e, i) {
        var n, a = t._model || {}, r = a.fill;
        if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;
        if (!0 === r) return "origin";
        if (n = parseFloat(r, 10), isFinite(n) && Math.floor(n) === n) return "-" !== r[0] && "+" !== r[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;
        switch (r) {
            case"bottom":
                return "start";
            case"top":
                return "end";
            case"zero":
                return "origin";
            case"origin":
            case"start":
            case"end":
                return r;
            default:
                return !1
        }
    }

    function Bn(t) {
        return (t.el._scale || {}).getPointPositionForValue ? function (t) {
            var e, i, n, a, r, o = t.el._scale, s = o.options, l = o.chart.data.labels.length, u = t.fill, d = [];
            if (!l) return null;
            for (e = s.ticks.reverse ? o.max : o.min, i = s.ticks.reverse ? o.min : o.max, n = o.getPointPositionForValue(0, e), a = 0; a < l; ++a) r = "start" === u || "end" === u ? o.getPointPositionForValue(a, "start" === u ? e : i) : o.getBasePosition(a), s.gridLines.circular && (r.cx = n.x, r.cy = n.y, r.angle = o.getIndexAngle(a) - Math.PI / 2), d.push(r);
            return d
        }(t) : function (t) {
            var e, i = t.el._model || {}, n = t.el._scale || {}, a = t.fill, r = null;
            if (isFinite(a)) return null;
            if ("start" === a ? r = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? r = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? r = i.scaleZero : n.getBasePixel && (r = n.getBasePixel()), null != r) {
                if (void 0 !== r.x && void 0 !== r.y) return r;
                if (ct.isFinite(r)) return {x: (e = n.isHorizontal()) ? r : null, y: e ? null : r}
            }
            return null
        }(t)
    }

    function En(t, e, i) {
        var n, a = t[e].fill, r = [e];
        if (!i) return a;
        for (; !1 !== a && -1 === r.indexOf(a);) {
            if (!isFinite(a)) return a;
            if (!(n = t[a])) return !1;
            if (n.visible) return a;
            r.push(a), a = n.fill
        }
        return !1
    }

    function Wn(t) {
        var e = t.fill, i = "dataset";
        return !1 === e ? null : (isFinite(e) || (i = "boundary"), zn[i](t))
    }

    function Vn(t) {
        return t && !t.skip
    }

    function Hn(t, e, i, n, a) {
        var r, o, s, l;
        if (n && a) {
            for (t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) ct.canvas.lineTo(t, e[r - 1], e[r]);
            if (void 0 === i[0].angle) for (t.lineTo(i[a - 1].x, i[a - 1].y), r = a - 1; r > 0; --r) ct.canvas.lineTo(t, i[r], i[r - 1], !0); else for (o = i[0].cx, s = i[0].cy, l = Math.sqrt(Math.pow(i[0].x - o, 2) + Math.pow(i[0].y - s, 2)), r = a - 1; r > 0; --r) t.arc(o, s, l, i[r].angle, i[r - 1].angle, !0)
        }
    }

    function jn(t, e, i, n, a, r) {
        var o, s, l, u, d, h, c, f, g = e.length, p = n.spanGaps, m = [], v = [], b = 0, x = 0;
        for (t.beginPath(), o = 0, s = g; o < s; ++o) d = i(u = e[l = o % g]._view, l, n), h = Vn(u), c = Vn(d), r && void 0 === f && h && (s = g + (f = o + 1)), h && c ? (b = m.push(u), x = v.push(d)) : b && x && (p ? (h && m.push(u), c && v.push(d)) : (Hn(t, m, v, b, x), b = x = 0, m = [], v = []));
        Hn(t, m, v, b, x), t.closePath(), t.fillStyle = a, t.fill()
    }

    var qn = {
        id: "filler", afterDatasetsUpdate: function (t, e) {
            var i, n, a, r, o = (t.data.datasets || []).length, s = e.propagate, l = [];
            for (n = 0; n < o; ++n) r = null, (a = (i = t.getDatasetMeta(n)).dataset) && a._model && a instanceof Yt.Line && (r = {
                visible: t.isDatasetVisible(n),
                fill: Nn(a, n, o),
                chart: t,
                el: a
            }), i.$filler = r, l.push(r);
            for (n = 0; n < o; ++n) (r = l[n]) && (r.fill = En(l, n, s), r.boundary = Bn(r), r.mapper = Wn(r))
        }, beforeDatasetsDraw: function (t) {
            var e, i, n, a, r, o, s, l = t._getSortedVisibleDatasetMetas(), u = t.ctx;
            for (i = l.length - 1; i >= 0; --i) (e = l[i].$filler) && e.visible && (a = (n = e.el)._view, r = n._children || [], o = e.mapper, s = a.backgroundColor || st.global.defaultColor, o && s && r.length && (ct.canvas.clipArea(u, t.chartArea), jn(u, r, o, a, s, n._loop), ct.canvas.unclipArea(u)))
        }
    }, Un = ct.rtl.getRtlAdapter, Yn = ct.noop, Gn = ct.valueOrDefault;

    function Xn(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
    }

    st._set("global", {
        legend: {
            display: !0,
            position: "top",
            align: "center",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function (t, e) {
                var i = e.datasetIndex, n = this.chart, a = n.getDatasetMeta(i);
                a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update()
            },
            onHover: null,
            onLeave: null,
            labels: {
                boxWidth: 40, padding: 10, generateLabels: function (t) {
                    var e = t.data.datasets, i = t.options.legend || {}, n = i.labels && i.labels.usePointStyle;
                    return t._getSortedDatasetMetas().map(function (i, a) {
                        var r = i.controller.getStyle(n ? 0 : void 0);
                        return {
                            text: e[i.index].label,
                            fillStyle: r.backgroundColor,
                            hidden: !t.isDatasetVisible(a),
                            lineCap: r.borderCapStyle,
                            lineDash: r.borderDash,
                            lineDashOffset: r.borderDashOffset,
                            lineJoin: r.borderJoinStyle,
                            lineWidth: r.borderWidth,
                            strokeStyle: r.borderColor,
                            pointStyle: r.pointStyle,
                            rotation: r.rotation,
                            datasetIndex: a
                        }
                    }, this)
                }
            }
        }, legendCallback: function (t) {
            var e, i, n, a = document.createElement("ul"), r = t.data.datasets;
            for (a.setAttribute("class", t.id + "-legend"), e = 0, i = r.length; e < i; e++) (n = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = r[e].backgroundColor, r[e].label && n.appendChild(document.createTextNode(r[e].label));
            return a.outerHTML
        }
    });
    var Kn = xt.extend({
        initialize: function (t) {
            ct.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1
        }, beforeUpdate: Yn, update: function (t, e, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
        }, afterUpdate: Yn, beforeSetDimensions: Yn, setDimensions: function () {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        }, afterSetDimensions: Yn, beforeBuildLabels: Yn, buildLabels: function () {
            var t = this, e = t.options.labels || {}, i = ct.callback(e.generateLabels, [t.chart], t) || [];
            e.filter && (i = i.filter(function (i) {
                return e.filter(i, t.chart.data)
            })), t.options.reverse && i.reverse(), t.legendItems = i
        }, afterBuildLabels: Yn, beforeFit: Yn, fit: function () {
            var t = this, e = t.options, i = e.labels, n = e.display, a = t.ctx, r = ct.options._parseFont(i),
                o = r.size, s = t.legendHitBoxes = [], l = t.minSize, u = t.isHorizontal();
            if (u ? (l.width = t.maxWidth, l.height = n ? 10 : 0) : (l.width = n ? 10 : 0, l.height = t.maxHeight), n) {
                if (a.font = r.string, u) {
                    var d = t.lineWidths = [0], h = 0;
                    a.textAlign = "left", a.textBaseline = "middle", ct.each(t.legendItems, function (t, e) {
                        var n = Xn(i, o) + o / 2 + a.measureText(t.text).width;
                        (0 === e || d[d.length - 1] + n + 2 * i.padding > l.width) && (h += o + i.padding, d[d.length - (e > 0 ? 0 : 1)] = 0), s[e] = {
                            left: 0,
                            top: 0,
                            width: n,
                            height: o
                        }, d[d.length - 1] += n + i.padding
                    }), l.height += h
                } else {
                    var c = i.padding, f = t.columnWidths = [], g = t.columnHeights = [], p = i.padding, m = 0, v = 0;
                    ct.each(t.legendItems, function (t, e) {
                        var n = Xn(i, o) + o / 2 + a.measureText(t.text).width;
                        e > 0 && v + o + 2 * c > l.height && (p += m + i.padding, f.push(m), g.push(v), m = 0, v = 0), m = Math.max(m, n), v += o + c, s[e] = {
                            left: 0,
                            top: 0,
                            width: n,
                            height: o
                        }
                    }), p += m, f.push(m), g.push(v), l.width += p
                }
                t.width = l.width, t.height = l.height
            } else t.width = l.width = t.height = l.height = 0
        }, afterFit: Yn, isHorizontal: function () {
            return "top" === this.options.position || "bottom" === this.options.position
        }, draw: function () {
            var t = this, e = t.options, i = e.labels, n = st.global, a = n.defaultColor, r = n.elements.line,
                o = t.height, s = t.columnHeights, l = t.width, u = t.lineWidths;
            if (e.display) {
                var d, h = Un(e.rtl, t.left, t.minSize.width), c = t.ctx, f = Gn(i.fontColor, n.defaultFontColor),
                    g = ct.options._parseFont(i), p = g.size;
                c.textAlign = h.textAlign("left"), c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = g.string;
                var m = Xn(i, p), v = t.legendHitBoxes, b = function (t, n) {
                    switch (e.align) {
                        case"start":
                            return i.padding;
                        case"end":
                            return t - n;
                        default:
                            return (t - n + i.padding) / 2
                    }
                }, x = t.isHorizontal();
                d = x ? {x: t.left + b(l, u[0]), y: t.top + i.padding, line: 0} : {
                    x: t.left + i.padding,
                    y: t.top + b(o, s[0]),
                    line: 0
                }, ct.rtl.overrideTextDirection(t.ctx, e.textDirection);
                var y = p + i.padding;
                ct.each(t.legendItems, function (e, n) {
                    var f = c.measureText(e.text).width, g = m + p / 2 + f, _ = d.x, k = d.y;
                    h.setWidth(t.minSize.width), x ? n > 0 && _ + g + i.padding > t.left + t.minSize.width && (k = d.y += y, d.line++, _ = d.x = t.left + b(l, u[d.line])) : n > 0 && k + y > t.top + t.minSize.height && (_ = d.x = _ + t.columnWidths[d.line] + i.padding, d.line++, k = d.y = t.top + b(o, s[d.line]));
                    var w = h.x(_);
                    !function (t, e, n) {
                        if (!(isNaN(m) || m <= 0)) {
                            c.save();
                            var o = Gn(n.lineWidth, r.borderWidth);
                            if (c.fillStyle = Gn(n.fillStyle, a), c.lineCap = Gn(n.lineCap, r.borderCapStyle), c.lineDashOffset = Gn(n.lineDashOffset, r.borderDashOffset), c.lineJoin = Gn(n.lineJoin, r.borderJoinStyle), c.lineWidth = o, c.strokeStyle = Gn(n.strokeStyle, a), c.setLineDash && c.setLineDash(Gn(n.lineDash, r.borderDash)), i && i.usePointStyle) {
                                var s = m * Math.SQRT2 / 2, l = h.xPlus(t, m / 2), u = e + p / 2;
                                ct.canvas.drawPoint(c, n.pointStyle, s, l, u, n.rotation)
                            } else c.fillRect(h.leftForLtr(t, m), e, m, p), 0 !== o && c.strokeRect(h.leftForLtr(t, m), e, m, p);
                            c.restore()
                        }
                    }(w, k, e), v[n].left = h.leftForLtr(w, v[n].width), v[n].top = k, function (t, e, i, n) {
                        var a = p / 2, r = h.xPlus(t, m + a), o = e + a;
                        c.fillText(i.text, r, o), i.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(r, o), c.lineTo(h.xPlus(r, n), o), c.stroke())
                    }(w, k, e, f), x ? d.x += g + i.padding : d.y += y
                }), ct.rtl.restoreTextDirection(t.ctx, e.textDirection)
            }
        }, _getLegendItemAt: function (t, e) {
            var i, n, a, r = this;
            if (t >= r.left && t <= r.right && e >= r.top && e <= r.bottom) for (a = r.legendHitBoxes, i = 0; i < a.length; ++i) if (t >= (n = a[i]).left && t <= n.left + n.width && e >= n.top && e <= n.top + n.height) return r.legendItems[i];
            return null
        }, handleEvent: function (t) {
            var e, i = this, n = i.options, a = "mouseup" === t.type ? "click" : t.type;
            if ("mousemove" === a) {
                if (!n.onHover && !n.onLeave) return
            } else {
                if ("click" !== a) return;
                if (!n.onClick) return
            }
            e = i._getLegendItemAt(t.x, t.y), "click" === a ? e && n.onClick && n.onClick.call(i, t.native, e) : (n.onLeave && e !== i._hoveredItem && (i._hoveredItem && n.onLeave.call(i, t.native, i._hoveredItem), i._hoveredItem = e), n.onHover && e && n.onHover.call(i, t.native, e))
        }
    });

    function Zn(t, e) {
        var i = new Kn({ctx: t.ctx, options: e, chart: t});
        Re.configure(t, i, e), Re.addBox(t, i), t.legend = i
    }

    var $n = {
        id: "legend", _element: Kn, beforeInit: function (t) {
            var e = t.options.legend;
            e && Zn(t, e)
        }, beforeUpdate: function (t) {
            var e = t.options.legend, i = t.legend;
            e ? (ct.mergeIf(e, st.global.legend), i ? (Re.configure(t, i, e), i.options = e) : Zn(t, e)) : i && (Re.removeBox(t, i), delete t.legend)
        }, afterEvent: function (t, e) {
            var i = t.legend;
            i && i.handleEvent(e)
        }
    }, Jn = ct.noop;
    st._set("global", {
        title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        }
    });
    var Qn = xt.extend({
        initialize: function (t) {
            ct.extend(this, t), this.legendHitBoxes = []
        },
        beforeUpdate: Jn,
        update: function (t, e, i) {
            var n = this;
            return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
        },
        afterUpdate: Jn,
        beforeSetDimensions: Jn,
        setDimensions: function () {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: Jn,
        beforeBuildLabels: Jn,
        buildLabels: Jn,
        afterBuildLabels: Jn,
        beforeFit: Jn,
        fit: function () {
            var t, e = this, i = e.options, n = e.minSize = {}, a = e.isHorizontal();
            i.display ? (t = (ct.isArray(i.text) ? i.text.length : 1) * ct.options._parseFont(i).lineHeight + 2 * i.padding, e.width = n.width = a ? e.maxWidth : t, e.height = n.height = a ? t : e.maxHeight) : e.width = n.width = e.height = n.height = 0
        },
        afterFit: Jn,
        isHorizontal: function () {
            var t = this.options.position;
            return "top" === t || "bottom" === t
        },
        draw: function () {
            var t = this, e = t.ctx, i = t.options;
            if (i.display) {
                var n, a, r, o = ct.options._parseFont(i), s = o.lineHeight, l = s / 2 + i.padding, u = 0, d = t.top,
                    h = t.left, c = t.bottom, f = t.right;
                e.fillStyle = ct.valueOrDefault(i.fontColor, st.global.defaultFontColor), e.font = o.string, t.isHorizontal() ? (a = h + (f - h) / 2, r = d + l, n = f - h) : (a = "left" === i.position ? h + l : f - l, r = d + (c - d) / 2, n = c - d, u = Math.PI * ("left" === i.position ? -.5 : .5)), e.save(), e.translate(a, r), e.rotate(u), e.textAlign = "center", e.textBaseline = "middle";
                var g = i.text;
                if (ct.isArray(g)) for (var p = 0, m = 0; m < g.length; ++m) e.fillText(g[m], 0, p, n), p += s; else e.fillText(g, 0, 0, n);
                e.restore()
            }
        }
    });

    function ta(t, e) {
        var i = new Qn({ctx: t.ctx, options: e, chart: t});
        Re.configure(t, i, e), Re.addBox(t, i), t.titleBlock = i
    }

    var ea = {}, ia = qn, na = $n, aa = {
        id: "title", _element: Qn, beforeInit: function (t) {
            var e = t.options.title;
            e && ta(t, e)
        }, beforeUpdate: function (t) {
            var e = t.options.title, i = t.titleBlock;
            e ? (ct.mergeIf(e, st.global.title), i ? (Re.configure(t, i, e), i.options = e) : ta(t, e)) : i && (Re.removeBox(t, i), delete t.titleBlock)
        }
    };
    for (var ra in ea.filler = ia, ea.legend = na, ea.title = aa, ki.helpers = ct, function () {
        function t(t, e, i) {
            var n;
            return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
        }

        function e(t) {
            return null != t && "none" !== t
        }

        function i(i, n, a) {
            var r = document.defaultView, o = ct._getParentNode(i), s = r.getComputedStyle(i)[n],
                l = r.getComputedStyle(o)[n], u = e(s), d = e(l), h = Number.POSITIVE_INFINITY;
            return u || d ? Math.min(u ? t(s, i, a) : h, d ? t(l, o, a) : h) : "none"
        }

        ct.where = function (t, e) {
            if (ct.isArray(t) && Array.prototype.filter) return t.filter(e);
            var i = [];
            return ct.each(t, function (t) {
                e(t) && i.push(t)
            }), i
        }, ct.findIndex = Array.prototype.findIndex ? function (t, e, i) {
            return t.findIndex(e, i)
        } : function (t, e, i) {
            i = void 0 === i ? t : i;
            for (var n = 0, a = t.length; n < a; ++n) if (e.call(i, t[n], n, t)) return n;
            return -1
        }, ct.findNextWhere = function (t, e, i) {
            ct.isNullOrUndef(i) && (i = -1);
            for (var n = i + 1; n < t.length; n++) {
                var a = t[n];
                if (e(a)) return a
            }
        }, ct.findPreviousWhere = function (t, e, i) {
            ct.isNullOrUndef(i) && (i = t.length);
            for (var n = i - 1; n >= 0; n--) {
                var a = t[n];
                if (e(a)) return a
            }
        }, ct.isNumber = function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, ct.almostEquals = function (t, e, i) {
            return Math.abs(t - e) < i
        }, ct.almostWhole = function (t, e) {
            var i = Math.round(t);
            return i - e <= t && i + e >= t
        }, ct.max = function (t) {
            return t.reduce(function (t, e) {
                return isNaN(e) ? t : Math.max(t, e)
            }, Number.NEGATIVE_INFINITY)
        }, ct.min = function (t) {
            return t.reduce(function (t, e) {
                return isNaN(e) ? t : Math.min(t, e)
            }, Number.POSITIVE_INFINITY)
        }, ct.sign = Math.sign ? function (t) {
            return Math.sign(t)
        } : function (t) {
            return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
        }, ct.toRadians = function (t) {
            return t * (Math.PI / 180)
        }, ct.toDegrees = function (t) {
            return t * (180 / Math.PI)
        }, ct._decimalPlaces = function (t) {
            if (ct.isFinite(t)) {
                for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
                return i
            }
        }, ct.getAngleFromPoint = function (t, e) {
            var i = e.x - t.x, n = e.y - t.y, a = Math.sqrt(i * i + n * n), r = Math.atan2(n, i);
            return r < -.5 * Math.PI && (r += 2 * Math.PI), {angle: r, distance: a}
        }, ct.distanceBetweenPoints = function (t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }, ct.aliasPixel = function (t) {
            return t % 2 == 0 ? 0 : .5
        }, ct._alignPixel = function (t, e, i) {
            var n = t.currentDevicePixelRatio, a = i / 2;
            return Math.round((e - a) * n) / n + a
        }, ct.splineCurve = function (t, e, i, n) {
            var a = t.skip ? e : t, r = e, o = i.skip ? e : i,
                s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
                l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)), u = s / (s + l), d = l / (s + l),
                h = n * (u = isNaN(u) ? 0 : u), c = n * (d = isNaN(d) ? 0 : d);
            return {
                previous: {x: r.x - h * (o.x - a.x), y: r.y - h * (o.y - a.y)},
                next: {x: r.x + c * (o.x - a.x), y: r.y + c * (o.y - a.y)}
            }
        }, ct.EPSILON = Number.EPSILON || 1e-14, ct.splineCurveMonotone = function (t) {
            var e, i, n, a, r, o, s, l, u, d = (t || []).map(function (t) {
                return {model: t._model, deltaK: 0, mK: 0}
            }), h = d.length;
            for (e = 0; e < h; ++e) if (!(n = d[e]).model.skip) {
                if (i = e > 0 ? d[e - 1] : null, (a = e < h - 1 ? d[e + 1] : null) && !a.model.skip) {
                    var c = a.model.x - n.model.x;
                    n.deltaK = 0 !== c ? (a.model.y - n.model.y) / c : 0
                }
                !i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
            }
            for (e = 0; e < h - 1; ++e) n = d[e], a = d[e + 1], n.model.skip || a.model.skip || (ct.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (r = n.mK / n.deltaK, o = a.mK / n.deltaK, (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), n.mK = r * s * n.deltaK, a.mK = o * s * n.deltaK)));
            for (e = 0; e < h; ++e) (n = d[e]).model.skip || (i = e > 0 ? d[e - 1] : null, a = e < h - 1 ? d[e + 1] : null, i && !i.model.skip && (u = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - u, n.model.controlPointPreviousY = n.model.y - u * n.mK), a && !a.model.skip && (u = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + u, n.model.controlPointNextY = n.model.y + u * n.mK))
        }, ct.nextItem = function (t, e, i) {
            return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
        }, ct.previousItem = function (t, e, i) {
            return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
        }, ct.niceNum = function (t, e) {
            var i = Math.floor(ct.log10(t)), n = t / Math.pow(10, i);
            return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
        }, ct.requestAnimFrame = "undefined" == typeof window ? function (t) {
            t()
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            return window.setTimeout(t, 1e3 / 60)
        }, ct.getRelativePosition = function (t, e) {
            var i, n, a = t.originalEvent || t, r = t.target || t.srcElement, o = r.getBoundingClientRect(),
                s = a.touches;
            s && s.length > 0 ? (i = s[0].clientX, n = s[0].clientY) : (i = a.clientX, n = a.clientY);
            var l = parseFloat(ct.getStyle(r, "padding-left")), u = parseFloat(ct.getStyle(r, "padding-top")),
                d = parseFloat(ct.getStyle(r, "padding-right")), h = parseFloat(ct.getStyle(r, "padding-bottom")),
                c = o.right - o.left - l - d, f = o.bottom - o.top - u - h;
            return {
                x: i = Math.round((i - o.left - l) / c * r.width / e.currentDevicePixelRatio),
                y: n = Math.round((n - o.top - u) / f * r.height / e.currentDevicePixelRatio)
            }
        }, ct.getConstraintWidth = function (t) {
            return i(t, "max-width", "clientWidth")
        }, ct.getConstraintHeight = function (t) {
            return i(t, "max-height", "clientHeight")
        }, ct._calculatePadding = function (t, e, i) {
            return (e = ct.getStyle(t, e)).indexOf("%") > -1 ? i * parseInt(e, 10) / 100 : parseInt(e, 10)
        }, ct._getParentNode = function (t) {
            var e = t.parentNode;
            return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
        }, ct.getMaximumWidth = function (t) {
            var e = ct._getParentNode(t);
            if (!e) return t.clientWidth;
            var i = e.clientWidth,
                n = i - ct._calculatePadding(e, "padding-left", i) - ct._calculatePadding(e, "padding-right", i),
                a = ct.getConstraintWidth(t);
            return isNaN(a) ? n : Math.min(n, a)
        }, ct.getMaximumHeight = function (t) {
            var e = ct._getParentNode(t);
            if (!e) return t.clientHeight;
            var i = e.clientHeight,
                n = i - ct._calculatePadding(e, "padding-top", i) - ct._calculatePadding(e, "padding-bottom", i),
                a = ct.getConstraintHeight(t);
            return isNaN(a) ? n : Math.min(n, a)
        }, ct.getStyle = function (t, e) {
            return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
        }, ct.retinaScale = function (t, e) {
            var i = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
            if (1 !== i) {
                var n = t.canvas, a = t.height, r = t.width;
                n.height = a * i, n.width = r * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = r + "px")
            }
        }, ct.fontString = function (t, e, i) {
            return e + " " + t + "px " + i
        }, ct.longestText = function (t, e, i, n) {
            var a = (n = n || {}).data = n.data || {}, r = n.garbageCollect = n.garbageCollect || [];
            n.font !== e && (a = n.data = {}, r = n.garbageCollect = [], n.font = e), t.font = e;
            var o, s, l, u, d, h = 0, c = i.length;
            for (o = 0; o < c; o++) if (null != (u = i[o]) && !0 !== ct.isArray(u)) h = ct.measureText(t, a, r, h, u); else if (ct.isArray(u)) for (s = 0, l = u.length; s < l; s++) null == (d = u[s]) || ct.isArray(d) || (h = ct.measureText(t, a, r, h, d));
            var f = r.length / 2;
            if (f > i.length) {
                for (o = 0; o < f; o++) delete a[r[o]];
                r.splice(0, f)
            }
            return h
        }, ct.measureText = function (t, e, i, n, a) {
            var r = e[a];
            return r || (r = e[a] = t.measureText(a).width, i.push(a)), r > n && (n = r), n
        }, ct.numberOfLabelLines = function (t) {
            var e = 1;
            return ct.each(t, function (t) {
                ct.isArray(t) && t.length > e && (e = t.length)
            }), e
        }, ct.color = G ? function (t) {
            return t instanceof CanvasGradient && (t = st.global.defaultColor), G(t)
        } : function (t) {
            return console.error("Color.js not found!"), t
        }, ct.getHoverColor = function (t) {
            return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : ct.color(t).saturate(.5).darken(.1).rgbString()
        }
    }(), ki._adapters = Si, ki.Animation = _t, ki.animationService = kt, ki.controllers = xe, ki.DatasetController = Pt, ki.defaults = st, ki.Element = xt, ki.elements = Yt, ki.Interaction = Ce, ki.layouts = Re, ki.platform = ti, ki.plugins = ei, ki.Scale = Wi, ki.scaleService = ii, ki.Ticks = Ci, ki.Tooltip = fi, ki.helpers.each(On, function (t, e) {
        ki.scaleService.registerScaleType(e, t, t._defaults)
    }), ea) ea.hasOwnProperty(ra) && ki.plugins.register(ea[ra]);
    ki.platform.initialize();
    var oa = ki;
    return "undefined" != typeof window && (window.Chart = ki), ki.Chart = ki, ki.Legend = ea.legend._element, ki.Title = ea.title._element, ki.pluginService = ki.plugins, ki.PluginBase = ki.Element.extend({}), ki.canvasHelpers = ki.helpers.canvas, ki.layoutService = ki.layouts, ki.LinearScaleBase = Yi, ki.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function (t) {
        ki[t] = function (e, i) {
            return new ki(e, ki.helpers.merge(i || {}, {type: t.charAt(0).toLowerCase() + t.slice(1)}))
        }
    }), oa
});
