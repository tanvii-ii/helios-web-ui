import * as E from "react";
import We, { forwardRef as ta, useContext as ra, Children as na, isValidElement as fr, cloneElement as dr, useState as oa } from "react";
import * as ia from "react-dom";
import ir from "react-dom";
function sa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function tt(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var sr = { exports: {} }, Ft = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function aa() {
  if (co)
    return Ft;
  co = 1;
  var e = We, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, u) {
    var f, p = {}, m = null, b = null;
    u !== void 0 && (m = "" + u), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (b = l.ref);
    for (f in l)
      n.call(l, f) && !i.hasOwnProperty(f) && (p[f] = l[f]);
    if (c && c.defaultProps)
      for (f in l = c.defaultProps, l)
        p[f] === void 0 && (p[f] = l[f]);
    return { $$typeof: t, type: c, key: m, ref: b, props: p, _owner: o.current };
  }
  return Ft.Fragment = r, Ft.jsx = s, Ft.jsxs = s, Ft;
}
var Vt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function ca() {
  return lo || (lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = We, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function g(d) {
      if (d === null || typeof d != "object")
        return null;
      var O = v && d[v] || d[h];
      return typeof O == "function" ? O : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(d) {
      {
        for (var O = arguments.length, $ = new Array(O > 1 ? O - 1 : 0), H = 1; H < O; H++)
          $[H - 1] = arguments[H];
        _("error", d, $);
      }
    }
    function _(d, O, $) {
      {
        var H = R.ReactDebugCurrentFrame, ie = H.getStackAddendum();
        ie !== "" && (O += "%s", $ = $.concat([ie]));
        var pe = $.map(function(oe) {
          return String(oe);
        });
        pe.unshift("Warning: " + O), Function.prototype.apply.call(console[d], console, pe);
      }
    }
    var S = !1, y = !1, k = !1, C = !1, ee = !1, te;
    te = Symbol.for("react.module.reference");
    function L(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === i || ee || d === o || d === u || d === f || C || d === b || S || y || k || typeof d == "object" && d !== null && (d.$$typeof === m || d.$$typeof === p || d.$$typeof === s || d.$$typeof === c || d.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === te || d.getModuleId !== void 0));
    }
    function V(d, O, $) {
      var H = d.displayName;
      if (H)
        return H;
      var ie = O.displayName || O.name || "";
      return ie !== "" ? $ + "(" + ie + ")" : $;
    }
    function J(d) {
      return d.displayName || "Context";
    }
    function W(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            var O = d;
            return J(O) + ".Consumer";
          case s:
            var $ = d;
            return J($._context) + ".Provider";
          case l:
            return V(d, d.render, "ForwardRef");
          case p:
            var H = d.displayName || null;
            return H !== null ? H : W(d.type) || "Memo";
          case m: {
            var ie = d, pe = ie._payload, oe = ie._init;
            try {
              return W(oe(pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, re = 0, D, Z, j, de, T, N, G;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function M() {
      {
        if (re === 0) {
          D = console.log, Z = console.info, j = console.warn, de = console.error, T = console.group, N = console.groupCollapsed, G = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        re++;
      }
    }
    function z() {
      {
        if (re--, re === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, d, {
              value: D
            }),
            info: I({}, d, {
              value: Z
            }),
            warn: I({}, d, {
              value: j
            }),
            error: I({}, d, {
              value: de
            }),
            group: I({}, d, {
              value: T
            }),
            groupCollapsed: I({}, d, {
              value: N
            }),
            groupEnd: I({}, d, {
              value: G
            })
          });
        }
        re < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = R.ReactCurrentDispatcher, U;
    function Y(d, O, $) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (ie) {
            var H = ie.stack.trim().match(/\n( *(at )?)/);
            U = H && H[1] || "";
          }
        return `
` + U + d;
      }
    }
    var B = !1, K;
    {
      var ye = typeof WeakMap == "function" ? WeakMap : Map;
      K = new ye();
    }
    function P(d, O) {
      if (!d || B)
        return "";
      {
        var $ = K.get(d);
        if ($ !== void 0)
          return $;
      }
      var H;
      B = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pe;
      pe = F.current, F.current = null, M();
      try {
        if (O) {
          var oe = function() {
            throw Error();
          };
          if (Object.defineProperty(oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(oe, []);
            } catch (Je) {
              H = Je;
            }
            Reflect.construct(d, [], oe);
          } else {
            try {
              oe.call();
            } catch (Je) {
              H = Je;
            }
            d.call(oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Je) {
            H = Je;
          }
          d();
        }
      } catch (Je) {
        if (Je && H && typeof Je.stack == "string") {
          for (var ne = Je.stack.split(`
`), $e = H.stack.split(`
`), xe = ne.length - 1, _e = $e.length - 1; xe >= 1 && _e >= 0 && ne[xe] !== $e[_e]; )
            _e--;
          for (; xe >= 1 && _e >= 0; xe--, _e--)
            if (ne[xe] !== $e[_e]) {
              if (xe !== 1 || _e !== 1)
                do
                  if (xe--, _e--, _e < 0 || ne[xe] !== $e[_e]) {
                    var Me = `
` + ne[xe].replace(" at new ", " at ");
                    return d.displayName && Me.includes("<anonymous>") && (Me = Me.replace("<anonymous>", d.displayName)), typeof d == "function" && K.set(d, Me), Me;
                  }
                while (xe >= 1 && _e >= 0);
              break;
            }
        }
      } finally {
        B = !1, F.current = pe, z(), Error.prepareStackTrace = ie;
      }
      var gt = d ? d.displayName || d.name : "", ao = gt ? Y(gt) : "";
      return typeof d == "function" && K.set(d, ao), ao;
    }
    function ve(d, O, $) {
      return P(d, !1);
    }
    function A(d) {
      var O = d.prototype;
      return !!(O && O.isReactComponent);
    }
    function ke(d, O, $) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return P(d, A(d));
      if (typeof d == "string")
        return Y(d);
      switch (d) {
        case u:
          return Y("Suspense");
        case f:
          return Y("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            return ve(d.render);
          case p:
            return ke(d.type, O, $);
          case m: {
            var H = d, ie = H._payload, pe = H._init;
            try {
              return ke(pe(ie), O, $);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, at = {}, rr = R.ReactDebugCurrentFrame;
    function pt(d) {
      if (d) {
        var O = d._owner, $ = ke(d.type, d._source, O ? O.type : null);
        rr.setExtraStackFrame($);
      } else
        rr.setExtraStackFrame(null);
    }
    function jt(d, O, $, H, ie) {
      {
        var pe = Function.call.bind(ze);
        for (var oe in d)
          if (pe(d, oe)) {
            var ne = void 0;
            try {
              if (typeof d[oe] != "function") {
                var $e = Error((H || "React class") + ": " + $ + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $e.name = "Invariant Violation", $e;
              }
              ne = d[oe](O, oe, H, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (xe) {
              ne = xe;
            }
            ne && !(ne instanceof Error) && (pt(ie), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", $, oe, typeof ne), pt(null)), ne instanceof Error && !(ne.message in at) && (at[ne.message] = !0, pt(ie), w("Failed %s type: %s", $, ne.message), pt(null));
          }
      }
    }
    var At = Array.isArray;
    function Mt(d) {
      return At(d);
    }
    function Kr(d) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, $ = O && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return $;
      }
    }
    function mt(d) {
      try {
        return nt(d), !1;
      } catch {
        return !0;
      }
    }
    function nt(d) {
      return "" + d;
    }
    function nr(d) {
      if (mt(d))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kr(d)), nt(d);
    }
    var ot = R.ReactCurrentOwner, Xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Q, It, Dt;
    Dt = {};
    function or(d) {
      if (ze.call(d, "ref")) {
        var O = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function eo(d) {
      if (ze.call(d, "key")) {
        var O = Object.getOwnPropertyDescriptor(d, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function zs(d, O) {
      if (typeof d.ref == "string" && ot.current && O && ot.current.stateNode !== O) {
        var $ = W(ot.current.type);
        Dt[$] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', W(ot.current.type), d.ref), Dt[$] = !0);
      }
    }
    function Us(d, O) {
      {
        var $ = function() {
          Q || (Q = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        $.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: $,
          configurable: !0
        });
      }
    }
    function Ws(d, O) {
      {
        var $ = function() {
          It || (It = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        $.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: $,
          configurable: !0
        });
      }
    }
    var qs = function(d, O, $, H, ie, pe, oe) {
      var ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: O,
        ref: $,
        props: oe,
        // Record the component responsible for creating this element.
        _owner: pe
      };
      return ne._store = {}, Object.defineProperty(ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.defineProperty(ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
    };
    function Ys(d, O, $, H, ie) {
      {
        var pe, oe = {}, ne = null, $e = null;
        $ !== void 0 && (nr($), ne = "" + $), eo(O) && (nr(O.key), ne = "" + O.key), or(O) && ($e = O.ref, zs(O, ie));
        for (pe in O)
          ze.call(O, pe) && !Xr.hasOwnProperty(pe) && (oe[pe] = O[pe]);
        if (d && d.defaultProps) {
          var xe = d.defaultProps;
          for (pe in xe)
            oe[pe] === void 0 && (oe[pe] = xe[pe]);
        }
        if (ne || $e) {
          var _e = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          ne && Us(oe, _e), $e && Ws(oe, _e);
        }
        return qs(d, ne, $e, ie, H, ot.current, oe);
      }
    }
    var Jr = R.ReactCurrentOwner, to = R.ReactDebugCurrentFrame;
    function ht(d) {
      if (d) {
        var O = d._owner, $ = ke(d.type, d._source, O ? O.type : null);
        to.setExtraStackFrame($);
      } else
        to.setExtraStackFrame(null);
    }
    var Zr;
    Zr = !1;
    function Qr(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function ro() {
      {
        if (Jr.current) {
          var d = W(Jr.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Hs(d) {
      {
        if (d !== void 0) {
          var O = d.fileName.replace(/^.*[\\\/]/, ""), $ = d.lineNumber;
          return `

Check your code at ` + O + ":" + $ + ".";
        }
        return "";
      }
    }
    var no = {};
    function Gs(d) {
      {
        var O = ro();
        if (!O) {
          var $ = typeof d == "string" ? d : d.displayName || d.name;
          $ && (O = `

Check the top-level render call using <` + $ + ">.");
        }
        return O;
      }
    }
    function oo(d, O) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var $ = Gs(O);
        if (no[$])
          return;
        no[$] = !0;
        var H = "";
        d && d._owner && d._owner !== Jr.current && (H = " It was passed a child from " + W(d._owner.type) + "."), ht(d), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, H), ht(null);
      }
    }
    function io(d, O) {
      {
        if (typeof d != "object")
          return;
        if (Mt(d))
          for (var $ = 0; $ < d.length; $++) {
            var H = d[$];
            Qr(H) && oo(H, O);
          }
        else if (Qr(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var ie = g(d);
          if (typeof ie == "function" && ie !== d.entries)
            for (var pe = ie.call(d), oe; !(oe = pe.next()).done; )
              Qr(oe.value) && oo(oe.value, O);
        }
      }
    }
    function Ks(d) {
      {
        var O = d.type;
        if (O == null || typeof O == "string")
          return;
        var $;
        if (typeof O == "function")
          $ = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === p))
          $ = O.propTypes;
        else
          return;
        if ($) {
          var H = W(O);
          jt($, d.props, "prop", H, d);
        } else if (O.PropTypes !== void 0 && !Zr) {
          Zr = !0;
          var ie = W(O);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xs(d) {
      {
        for (var O = Object.keys(d.props), $ = 0; $ < O.length; $++) {
          var H = O[$];
          if (H !== "children" && H !== "key") {
            ht(d), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), ht(null);
            break;
          }
        }
        d.ref !== null && (ht(d), w("Invalid attribute `ref` supplied to `React.Fragment`."), ht(null));
      }
    }
    function so(d, O, $, H, ie, pe) {
      {
        var oe = L(d);
        if (!oe) {
          var ne = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $e = Hs(ie);
          $e ? ne += $e : ne += ro();
          var xe;
          d === null ? xe = "null" : Mt(d) ? xe = "array" : d !== void 0 && d.$$typeof === t ? (xe = "<" + (W(d.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof d, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, ne);
        }
        var _e = Ys(d, O, $, ie, pe);
        if (_e == null)
          return _e;
        if (oe) {
          var Me = O.children;
          if (Me !== void 0)
            if (H)
              if (Mt(Me)) {
                for (var gt = 0; gt < Me.length; gt++)
                  io(Me[gt], d);
                Object.freeze && Object.freeze(Me);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              io(Me, d);
        }
        return d === n ? Xs(_e) : Ks(_e), _e;
      }
    }
    function Js(d, O, $) {
      return so(d, O, $, !0);
    }
    function Zs(d, O, $) {
      return so(d, O, $, !1);
    }
    var Qs = Zs, ea = Js;
    Vt.Fragment = n, Vt.jsx = Qs, Vt.jsxs = ea;
  }()), Vt;
}
var uo;
function wn() {
  return uo || (uo = 1, process.env.NODE_ENV === "production" ? sr.exports = aa() : sr.exports = ca()), sr.exports;
}
var X = wn();
const la = {
  black: "#000",
  white: "#fff"
}, qt = la, ua = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, vt = ua, fa = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, yt = fa, da = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, bt = da, pa = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Et = pa, ma = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, xt = ma, ha = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Lt = ha, ga = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, va = ga;
function Yt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const ya = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yt
}, Symbol.toStringTag, { value: "Module" })), Cn = "$$material";
function x() {
  return x = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, x.apply(this, arguments);
}
function ge(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Ti(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ba = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ea = /* @__PURE__ */ Ti(
  function(e) {
    return ba.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function xa(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ta(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ra = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ta(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = xa(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', c);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Ce = "-ms-", yr = "-moz-", se = "-webkit-", Pn = "comm", $n = "rule", Nn = "decl", _a = "@import", Ri = "@keyframes", Oa = "@layer", Sa = Math.abs, Cr = String.fromCharCode, wa = Object.assign;
function Ca(e, t) {
  return we(e, 0) ^ 45 ? (((t << 2 ^ we(e, 0)) << 2 ^ we(e, 1)) << 2 ^ we(e, 2)) << 2 ^ we(e, 3) : 0;
}
function _i(e) {
  return e.trim();
}
function Pa(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ae(e, t, r) {
  return e.replace(t, r);
}
function mn(e, t) {
  return e.indexOf(t);
}
function we(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ht(e, t, r) {
  return e.slice(t, r);
}
function He(e) {
  return e.length;
}
function kn(e) {
  return e.length;
}
function ar(e, t) {
  return t.push(e), e;
}
function $a(e, t) {
  return e.map(t).join("");
}
var Pr = 1, St = 1, Oi = 0, Ne = 0, Oe = 0, Ct = "";
function $r(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Pr, column: St, length: s, return: "" };
}
function Bt(e, t) {
  return wa($r("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Na() {
  return Oe;
}
function ka() {
  return Oe = Ne > 0 ? we(Ct, --Ne) : 0, St--, Oe === 10 && (St = 1, Pr--), Oe;
}
function Ae() {
  return Oe = Ne < Oi ? we(Ct, Ne++) : 0, St++, Oe === 10 && (St = 1, Pr++), Oe;
}
function Ge() {
  return we(Ct, Ne);
}
function pr() {
  return Ne;
}
function Jt(e, t) {
  return Ht(Ct, e, t);
}
function Gt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Si(e) {
  return Pr = St = 1, Oi = He(Ct = e), Ne = 0, [];
}
function wi(e) {
  return Ct = "", e;
}
function mr(e) {
  return _i(Jt(Ne - 1, hn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ja(e) {
  for (; (Oe = Ge()) && Oe < 33; )
    Ae();
  return Gt(e) > 2 || Gt(Oe) > 3 ? "" : " ";
}
function Aa(e, t) {
  for (; --t && Ae() && !(Oe < 48 || Oe > 102 || Oe > 57 && Oe < 65 || Oe > 70 && Oe < 97); )
    ;
  return Jt(e, pr() + (t < 6 && Ge() == 32 && Ae() == 32));
}
function hn(e) {
  for (; Ae(); )
    switch (Oe) {
      case e:
        return Ne;
      case 34:
      case 39:
        e !== 34 && e !== 39 && hn(Oe);
        break;
      case 40:
        e === 41 && hn(e);
        break;
      case 92:
        Ae();
        break;
    }
  return Ne;
}
function Ma(e, t) {
  for (; Ae() && e + Oe !== 47 + 10; )
    if (e + Oe === 42 + 42 && Ge() === 47)
      break;
  return "/*" + Jt(t, Ne - 1) + "*" + Cr(e === 47 ? e : Ae());
}
function Ia(e) {
  for (; !Gt(Ge()); )
    Ae();
  return Jt(e, Ne);
}
function Da(e) {
  return wi(hr("", null, null, null, [""], e = Si(e), 0, [0], e));
}
function hr(e, t, r, n, o, i, s, c, l) {
  for (var u = 0, f = 0, p = s, m = 0, b = 0, v = 0, h = 1, g = 1, R = 1, w = 0, _ = "", S = o, y = i, k = n, C = _; g; )
    switch (v = w, w = Ae()) {
      case 40:
        if (v != 108 && we(C, p - 1) == 58) {
          mn(C += ae(mr(w), "&", "&\f"), "&\f") != -1 && (R = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += mr(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += ja(v);
        break;
      case 92:
        C += Aa(pr() - 1, 7);
        continue;
      case 47:
        switch (Ge()) {
          case 42:
          case 47:
            ar(Fa(Ma(Ae(), pr()), t, r), l);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * h:
        c[u++] = He(C) * R;
      case 125 * h:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            g = 0;
          case 59 + f:
            R == -1 && (C = ae(C, /\f/g, "")), b > 0 && He(C) - p && ar(b > 32 ? po(C + ";", n, r, p - 1) : po(ae(C, " ", "") + ";", n, r, p - 2), l);
            break;
          case 59:
            C += ";";
          default:
            if (ar(k = fo(C, t, r, u, f, o, c, _, S = [], y = [], p), i), w === 123)
              if (f === 0)
                hr(C, t, k, k, S, i, p, c, y);
              else
                switch (m === 99 && we(C, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    hr(e, k, k, n && ar(fo(e, k, k, 0, 0, o, c, _, o, S = [], p), y), o, y, p, c, n ? S : y);
                    break;
                  default:
                    hr(C, k, k, k, [""], y, 0, c, y);
                }
        }
        u = f = b = 0, h = R = 1, _ = C = "", p = s;
        break;
      case 58:
        p = 1 + He(C), b = v;
      default:
        if (h < 1) {
          if (w == 123)
            --h;
          else if (w == 125 && h++ == 0 && ka() == 125)
            continue;
        }
        switch (C += Cr(w), w * h) {
          case 38:
            R = f > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            c[u++] = (He(C) - 1) * R, R = 1;
            break;
          case 64:
            Ge() === 45 && (C += mr(Ae())), m = Ge(), f = p = He(_ = C += Ia(pr())), w++;
            break;
          case 45:
            v === 45 && He(C) == 2 && (h = 0);
        }
    }
  return i;
}
function fo(e, t, r, n, o, i, s, c, l, u, f) {
  for (var p = o - 1, m = o === 0 ? i : [""], b = kn(m), v = 0, h = 0, g = 0; v < n; ++v)
    for (var R = 0, w = Ht(e, p + 1, p = Sa(h = s[v])), _ = e; R < b; ++R)
      (_ = _i(h > 0 ? m[R] + " " + w : ae(w, /&\f/g, m[R]))) && (l[g++] = _);
  return $r(e, t, r, o === 0 ? $n : c, l, u, f);
}
function Fa(e, t, r) {
  return $r(e, t, r, Pn, Cr(Na()), Ht(e, 2, -2), 0);
}
function po(e, t, r, n) {
  return $r(e, t, r, Nn, Ht(e, 0, n), Ht(e, n + 1, -1), n);
}
function _t(e, t) {
  for (var r = "", n = kn(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Va(e, t, r, n) {
  switch (e.type) {
    case Oa:
      if (e.children.length)
        break;
    case _a:
    case Nn:
      return e.return = e.return || e.value;
    case Pn:
      return "";
    case Ri:
      return e.return = e.value + "{" + _t(e.children, n) + "}";
    case $n:
      e.value = e.props.join(",");
  }
  return He(r = _t(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function La(e) {
  var t = kn(e);
  return function(r, n, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](r, n, o, i) || "";
    return s;
  };
}
function Ba(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var za = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ge(), o === 38 && i === 12 && (r[n] = 1), !Gt(i); )
    Ae();
  return Jt(t, Ne);
}, Ua = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Gt(o)) {
      case 0:
        o === 38 && Ge() === 12 && (r[n] = 1), t[n] += za(Ne - 1, r, n);
        break;
      case 2:
        t[n] += mr(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ge() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Cr(o);
    }
  while (o = Ae());
  return t;
}, Wa = function(t, r) {
  return wi(Ua(Si(t), r));
}, mo = /* @__PURE__ */ new WeakMap(), qa = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !mo.get(n)) && !o) {
      mo.set(t, !0);
      for (var i = [], s = Wa(r, i), c = n.props, l = 0, u = 0; l < s.length; l++)
        for (var f = 0; f < c.length; f++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, c[f]) : c[f] + " " + s[l];
    }
  }
}, Ya = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, Ha = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Ga = function(t) {
  return t.type === "comm" && t.children.indexOf(Ha) > -1;
}, Ka = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var i = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!r.parent, c = s ? r.parent.children : (
          // global rule at the root level
          o
        ), l = c.length - 1; l >= 0; l--) {
          var u = c[l];
          if (u.line < r.line)
            break;
          if (u.column < r.column) {
            if (Ga(u))
              return;
            break;
          }
        }
        i.forEach(function(f) {
          console.error('The pseudo class "' + f + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + f.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Ci = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Xa = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Ci(r[n]))
      return !0;
  return !1;
}, ho = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Ja = function(t, r, n) {
  Ci(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), ho(t)) : Xa(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), ho(t)));
};
function Pi(e, t) {
  switch (Ca(e, t)) {
    case 5103:
      return se + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return se + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + e + yr + e + Ce + e + e;
    case 6828:
    case 4268:
      return se + e + Ce + e + e;
    case 6165:
      return se + e + Ce + "flex-" + e + e;
    case 5187:
      return se + e + ae(e, /(\w+).+(:[^]+)/, se + "box-$1$2" + Ce + "flex-$1$2") + e;
    case 5443:
      return se + e + Ce + "flex-item-" + ae(e, /flex-|-self/, "") + e;
    case 4675:
      return se + e + Ce + "flex-line-pack" + ae(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return se + e + Ce + ae(e, "shrink", "negative") + e;
    case 5292:
      return se + e + Ce + ae(e, "basis", "preferred-size") + e;
    case 6060:
      return se + "box-" + ae(e, "-grow", "") + se + e + Ce + ae(e, "grow", "positive") + e;
    case 4554:
      return se + ae(e, /([^-])(transform)/g, "$1" + se + "$2") + e;
    case 6187:
      return ae(ae(ae(e, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ae(e, /(image-set\([^]*)/, se + "$1$`$1");
    case 4968:
      return ae(ae(e, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + Ce + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + se + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ae(e, /(.+)-inline(.+)/, se + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (He(e) - 1 - t > 6)
        switch (we(e, t + 1)) {
          case 109:
            if (we(e, t + 4) !== 45)
              break;
          case 102:
            return ae(e, /(.+:)(.+)-([^]+)/, "$1" + se + "$2-$3$1" + yr + (we(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~mn(e, "stretch") ? Pi(ae(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (we(e, t + 1) !== 115)
        break;
    case 6444:
      switch (we(e, He(e) - 3 - (~mn(e, "!important") && 10))) {
        case 107:
          return ae(e, ":", ":" + se) + e;
        case 101:
          return ae(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + se + (we(e, 14) === 45 ? "inline-" : "") + "box$3$1" + se + "$2$3$1" + Ce + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (we(e, t + 11)) {
        case 114:
          return se + e + Ce + ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return se + e + Ce + ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return se + e + Ce + ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return se + e + Ce + e + e;
  }
  return e;
}
var Za = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Nn:
        t.return = Pi(t.value, t.length);
        break;
      case Ri:
        return _t([Bt(t, {
          value: ae(t.value, "@", "@" + se)
        })], o);
      case $n:
        if (t.length)
          return $a(t.props, function(i) {
            switch (Pa(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return _t([Bt(t, {
                  props: [ae(i, /:(read-\w+)/, ":" + yr + "$1")]
                })], o);
              case "::placeholder":
                return _t([Bt(t, {
                  props: [ae(i, /:(plac\w+)/, ":" + se + "input-$1")]
                }), Bt(t, {
                  props: [ae(i, /:(plac\w+)/, ":" + yr + "$1")]
                }), Bt(t, {
                  props: [ae(i, /:(plac\w+)/, Ce + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Qa = [Za], $i = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(h) {
      var g = h.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Qa;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, s, c = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(h) {
      for (var g = h.getAttribute("data-emotion").split(" "), R = 1; R < g.length; R++)
        i[g[R]] = !0;
      c.push(h);
    }
  );
  var l, u = [qa, Ya];
  process.env.NODE_ENV !== "production" && u.push(Ka({
    get compat() {
      return v.compat;
    }
  }), Ja);
  {
    var f, p = [Va, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? f.insert(h.return) : h.value && h.type !== Pn && f.insert(h.value + "{}"));
    } : Ba(function(h) {
      f.insert(h);
    })], m = La(u.concat(o, p)), b = function(g) {
      return _t(Da(g), m);
    };
    l = function(g, R, w, _) {
      f = w, process.env.NODE_ENV !== "production" && R.map !== void 0 && (f = {
        insert: function(y) {
          w.insert(y + R.map);
        }
      }), b(g ? g + "{" + R.styles + "}" : R.styles), _ && (v.inserted[R.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new Ra({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return v.sheet.hydrate(c), v;
}, cr = { exports: {} }, ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go;
function ec() {
  if (go)
    return ce;
  go = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function _(y) {
    if (typeof y == "object" && y !== null) {
      var k = y.$$typeof;
      switch (k) {
        case t:
          switch (y = y.type, y) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case f:
                case v:
                case b:
                case s:
                  return y;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  function S(y) {
    return _(y) === u;
  }
  return ce.AsyncMode = l, ce.ConcurrentMode = u, ce.ContextConsumer = c, ce.ContextProvider = s, ce.Element = t, ce.ForwardRef = f, ce.Fragment = n, ce.Lazy = v, ce.Memo = b, ce.Portal = r, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = p, ce.isAsyncMode = function(y) {
    return S(y) || _(y) === l;
  }, ce.isConcurrentMode = S, ce.isContextConsumer = function(y) {
    return _(y) === c;
  }, ce.isContextProvider = function(y) {
    return _(y) === s;
  }, ce.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, ce.isForwardRef = function(y) {
    return _(y) === f;
  }, ce.isFragment = function(y) {
    return _(y) === n;
  }, ce.isLazy = function(y) {
    return _(y) === v;
  }, ce.isMemo = function(y) {
    return _(y) === b;
  }, ce.isPortal = function(y) {
    return _(y) === r;
  }, ce.isProfiler = function(y) {
    return _(y) === i;
  }, ce.isStrictMode = function(y) {
    return _(y) === o;
  }, ce.isSuspense = function(y) {
    return _(y) === p;
  }, ce.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === u || y === i || y === o || y === p || y === m || typeof y == "object" && y !== null && (y.$$typeof === v || y.$$typeof === b || y.$$typeof === s || y.$$typeof === c || y.$$typeof === f || y.$$typeof === g || y.$$typeof === R || y.$$typeof === w || y.$$typeof === h);
  }, ce.typeOf = _, ce;
}
var le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vo;
function tc() {
  return vo || (vo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function _(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === u || P === i || P === o || P === p || P === m || typeof P == "object" && P !== null && (P.$$typeof === v || P.$$typeof === b || P.$$typeof === s || P.$$typeof === c || P.$$typeof === f || P.$$typeof === g || P.$$typeof === R || P.$$typeof === w || P.$$typeof === h);
    }
    function S(P) {
      if (typeof P == "object" && P !== null) {
        var ve = P.$$typeof;
        switch (ve) {
          case t:
            var A = P.type;
            switch (A) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case p:
                return A;
              default:
                var ke = A && A.$$typeof;
                switch (ke) {
                  case c:
                  case f:
                  case v:
                  case b:
                  case s:
                    return ke;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var y = l, k = u, C = c, ee = s, te = t, L = f, V = n, J = v, W = b, I = r, re = i, D = o, Z = p, j = !1;
    function de(P) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(P) || S(P) === l;
    }
    function T(P) {
      return S(P) === u;
    }
    function N(P) {
      return S(P) === c;
    }
    function G(P) {
      return S(P) === s;
    }
    function q(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function M(P) {
      return S(P) === f;
    }
    function z(P) {
      return S(P) === n;
    }
    function F(P) {
      return S(P) === v;
    }
    function U(P) {
      return S(P) === b;
    }
    function Y(P) {
      return S(P) === r;
    }
    function B(P) {
      return S(P) === i;
    }
    function K(P) {
      return S(P) === o;
    }
    function ye(P) {
      return S(P) === p;
    }
    le.AsyncMode = y, le.ConcurrentMode = k, le.ContextConsumer = C, le.ContextProvider = ee, le.Element = te, le.ForwardRef = L, le.Fragment = V, le.Lazy = J, le.Memo = W, le.Portal = I, le.Profiler = re, le.StrictMode = D, le.Suspense = Z, le.isAsyncMode = de, le.isConcurrentMode = T, le.isContextConsumer = N, le.isContextProvider = G, le.isElement = q, le.isForwardRef = M, le.isFragment = z, le.isLazy = F, le.isMemo = U, le.isPortal = Y, le.isProfiler = B, le.isStrictMode = K, le.isSuspense = ye, le.isValidElementType = _, le.typeOf = S;
  }()), le;
}
var yo;
function jn() {
  return yo || (yo = 1, process.env.NODE_ENV === "production" ? cr.exports = ec() : cr.exports = tc()), cr.exports;
}
var Ni = jn(), rc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, nc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ki = {};
ki[Ni.ForwardRef] = rc;
ki[Ni.Memo] = nc;
var oc = !0;
function An(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Nr = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  oc === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, kr = function(t, r, n) {
  Nr(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function ic(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var sc = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, bo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, ac = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", cc = /[A-Z]|^ms/g, ji = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Mn = function(t) {
  return t.charCodeAt(1) === 45;
}, Eo = function(t) {
  return t != null && typeof t != "boolean";
}, en = /* @__PURE__ */ Ti(function(e) {
  return Mn(e) ? e : e.replace(cc, "-$&").toLowerCase();
}), br = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ji, function(n, o, i) {
          return Ue = {
            name: o,
            styles: i,
            next: Ue
          }, o;
        });
  }
  return sc[t] !== 1 && !Mn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var lc = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, uc = ["normal", "none", "initial", "inherit", "unset"], fc = br, dc = /^-ms-/, pc = /-(.)/g, xo = {};
  br = function(t, r) {
    if (t === "content" && (typeof r != "string" || uc.indexOf(r) === -1 && !lc.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = fc(t, r);
    return n !== "" && !Mn(t) && t.indexOf("-") !== -1 && xo[t] === void 0 && (xo[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(dc, "ms-").replace(pc, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var Ai = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Kt(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Ai);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Ue = {
          name: r.name,
          styles: r.styles,
          next: Ue
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Ue = {
              name: n.name,
              styles: n.styles,
              next: Ue
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return mc(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ue, s = r(e);
        return Ue = i, Kt(e, t, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], l = r.replace(ji, function(f, p, m) {
          var b = "animation" + c.length;
          return c.push("const " + b + " = keyframes`" + m.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + b + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + l + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var u = t[r];
  return u !== void 0 ? u : r;
}
function mc(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Kt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : Eo(s) && (n += en(i) + ":" + br(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Ai);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            Eo(s[c]) && (n += en(i) + ":" + br(i, s[c]) + ";");
        else {
          var l = Kt(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += en(i) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(ac), n += i + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var To = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Mi;
process.env.NODE_ENV !== "production" && (Mi = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Ue, wt = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Ue = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (o = !1, i += Kt(n, r, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(bo), i += s[0]);
  for (var c = 1; c < t.length; c++)
    i += Kt(n, r, t[c]), o && (process.env.NODE_ENV !== "production" && s[c] === void 0 && console.error(bo), i += s[c]);
  var l;
  process.env.NODE_ENV !== "production" && (i = i.replace(Mi, function(m) {
    return l = m, "";
  })), To.lastIndex = 0;
  for (var u = "", f; (f = To.exec(i)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    f[1];
  var p = ic(i) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: p,
    styles: i,
    map: l,
    next: Ue,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: p,
    styles: i,
    next: Ue
  };
}, hc = function(t) {
  return t();
}, Ii = E["useInsertionEffect"] ? E["useInsertionEffect"] : !1, In = Ii || hc, Ro = Ii || E.useLayoutEffect, gc = {}.hasOwnProperty, Dn = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ $i({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Dn.displayName = "EmotionCacheContext");
var vc = Dn.Provider, jr = function(t) {
  return /* @__PURE__ */ ta(function(r, n) {
    var o = ra(Dn);
    return t(r, o, n);
  });
}, dt = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (dt.displayName = "EmotionThemeContext");
var _o = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Oo = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", yc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Nr(r, n, o), In(function() {
    return kr(r, n, o);
  }), null;
}, bc = /* @__PURE__ */ jr(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[_o], i = [n], s = "";
  typeof e.className == "string" ? s = An(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var c = wt(i, void 0, E.useContext(dt));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var l = e[Oo];
    l && (c = wt([c, "label:" + l + ";"]));
  }
  s += t.key + "-" + c.name;
  var u = {};
  for (var f in e)
    gc.call(e, f) && f !== "css" && f !== _o && (process.env.NODE_ENV === "production" || f !== Oo) && (u[f] = e[f]);
  return u.ref = r, u.className = s, /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(yc, {
    cache: t,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ E.createElement(o, u));
});
process.env.NODE_ENV !== "production" && (bc.displayName = "EmotionCssPropInternal");
var tn = { exports: {} }, So;
function Di() {
  return So || (So = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var i in o)
            Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
        }
        return r;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(tn)), tn.exports;
}
Di();
var Ec = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, wo = !1, Fi = /* @__PURE__ */ jr(function(e, t) {
  process.env.NODE_ENV !== "production" && !wo && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), wo = !0);
  var r = e.styles, n = wt([r], void 0, E.useContext(dt)), o = E.useRef();
  return Ro(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), c = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (c = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, c], function() {
      s.flush();
    };
  }, [t]), Ro(function() {
    var i = o.current, s = i[0], c = i[1];
    if (c) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && kr(t, n.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (Fi.displayName = "EmotionGlobal");
function Vi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return wt(t);
}
var Ar = function() {
  var t = Vi.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, xc = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var i = t[n];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var c in i)
              i[c] && c && (s && (s += " "), s += c);
          }
          break;
        }
        default:
          s = i;
      }
      s && (o && (o += " "), o += s);
    }
  }
  return o;
};
function Tc(e, t, r) {
  var n = [], o = An(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var Rc = function(t) {
  var r = t.cache, n = t.serializedArr;
  return In(function() {
    for (var o = 0; o < n.length; o++)
      kr(r, n[o], !1);
  }), null;
}, _c = /* @__PURE__ */ jr(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, f = new Array(u), p = 0; p < u; p++)
      f[p] = arguments[p];
    var m = wt(f, t.registered);
    return n.push(m), Nr(t, m, !1), t.key + "-" + m.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, f = new Array(u), p = 0; p < u; p++)
      f[p] = arguments[p];
    return Tc(t.registered, o, xc(f));
  }, s = {
    css: o,
    cx: i,
    theme: E.useContext(dt)
  }, c = e.children(s);
  return r = !0, /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Rc, {
    cache: t,
    serializedArr: n
  }), c);
});
process.env.NODE_ENV !== "production" && (_c.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Co = !0, Oc = typeof jest < "u" || typeof vi < "u";
  if (Co && !Oc) {
    var Po = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Co ? window : global
    ), $o = "__EMOTION_REACT_" + Ec.version.split(".")[0] + "__";
    Po[$o] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Po[$o] = !0;
  }
}
var Sc = Ea, wc = function(t) {
  return t !== "theme";
}, No = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Sc : wc;
}, ko = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, jo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Cc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Nr(r, n, o), In(function() {
    return kr(r, n, o);
  }), null;
}, Pc = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var c = ko(t, r, n), l = c || No(o), u = !l("as");
  return function() {
    var f = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      p.push.apply(p, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(jo), p.push(f[0][0]);
      for (var m = f.length, b = 1; b < m; b++)
        process.env.NODE_ENV !== "production" && f[0][b] === void 0 && console.error(jo), p.push(f[b], f[0][b]);
    }
    var v = jr(function(h, g, R) {
      var w = u && h.as || o, _ = "", S = [], y = h;
      if (h.theme == null) {
        y = {};
        for (var k in h)
          y[k] = h[k];
        y.theme = E.useContext(dt);
      }
      typeof h.className == "string" ? _ = An(g.registered, S, h.className) : h.className != null && (_ = h.className + " ");
      var C = wt(p.concat(S), g.registered, y);
      _ += g.key + "-" + C.name, s !== void 0 && (_ += " " + s);
      var ee = u && c === void 0 ? No(w) : l, te = {};
      for (var L in h)
        u && L === "as" || // $FlowFixMe
        ee(L) && (te[L] = h[L]);
      return te.className = _, te.ref = R, /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Cc, {
        cache: g,
        serialized: C,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ E.createElement(w, te));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = p, v.__emotion_forwardProp = c, Object.defineProperty(v, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), v.withComponent = function(h, g) {
      return e(h, x({}, r, g, {
        shouldForwardProp: ko(v, g, !0)
      })).apply(void 0, p);
    }, v;
  };
}, $c = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], gn = Pc.bind();
$c.forEach(function(e) {
  gn[e] = gn(e);
});
var vn = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var rn, Ao;
function Nc() {
  if (Ao)
    return rn;
  Ao = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return rn = o() ? Object.assign : function(i, s) {
    for (var c, l = n(i), u, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var p in c)
        t.call(c, p) && (l[p] = c[p]);
      if (e) {
        u = e(c);
        for (var m = 0; m < u.length; m++)
          r.call(c, u[m]) && (l[u[m]] = c[u[m]]);
      }
    }
    return l;
  }, rn;
}
var nn, Mo;
function Fn() {
  if (Mo)
    return nn;
  Mo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return nn = e, nn;
}
var on, Io;
function Li() {
  return Io || (Io = 1, on = Function.call.bind(Object.prototype.hasOwnProperty)), on;
}
var sn, Do;
function kc() {
  if (Do)
    return sn;
  Do = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Fn(), r = {}, n = Li();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, c, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var p;
          try {
            if (typeof i[f] != "function") {
              var m = Error(
                (l || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = i[f](s, f, l, c, null, t);
          } catch (v) {
            p = v;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var b = u ? u() : "";
            e(
              "Failed " + c + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, sn = o, sn;
}
var an, Fo;
function jc() {
  if (Fo)
    return an;
  Fo = 1;
  var e = jn(), t = Nc(), r = Fn(), n = Li(), o = kc(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return an = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(T) {
      var N = T && (u && T[u] || T[f]);
      if (typeof N == "function")
        return N;
    }
    var m = "<<anonymous>>", b = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: w(),
      arrayOf: _,
      element: S(),
      elementType: y(),
      instanceOf: k,
      node: L(),
      objectOf: ee,
      oneOf: C,
      oneOfType: te,
      shape: J,
      exact: W
    };
    function v(T, N) {
      return T === N ? T !== 0 || 1 / T === 1 / N : T !== T && N !== N;
    }
    function h(T, N) {
      this.message = T, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function g(T) {
      if (process.env.NODE_ENV !== "production")
        var N = {}, G = 0;
      function q(z, F, U, Y, B, K, ye) {
        if (Y = Y || m, K = K || U, ye !== r) {
          if (l) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = Y + ":" + U;
            !N[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            G < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[ve] = !0, G++);
          }
        }
        return F[U] == null ? z ? F[U] === null ? new h("The " + B + " `" + K + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new h("The " + B + " `" + K + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : T(F, U, Y, B, K);
      }
      var M = q.bind(null, !1);
      return M.isRequired = q.bind(null, !0), M;
    }
    function R(T) {
      function N(G, q, M, z, F, U) {
        var Y = G[q], B = D(Y);
        if (B !== T) {
          var K = Z(Y);
          return new h(
            "Invalid " + z + " `" + F + "` of type " + ("`" + K + "` supplied to `" + M + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return g(N);
    }
    function w() {
      return g(s);
    }
    function _(T) {
      function N(G, q, M, z, F) {
        if (typeof T != "function")
          return new h("Property `" + F + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var U = G[q];
        if (!Array.isArray(U)) {
          var Y = D(U);
          return new h("Invalid " + z + " `" + F + "` of type " + ("`" + Y + "` supplied to `" + M + "`, expected an array."));
        }
        for (var B = 0; B < U.length; B++) {
          var K = T(U, B, M, z, F + "[" + B + "]", r);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return g(N);
    }
    function S() {
      function T(N, G, q, M, z) {
        var F = N[G];
        if (!c(F)) {
          var U = D(F);
          return new h("Invalid " + M + " `" + z + "` of type " + ("`" + U + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(T);
    }
    function y() {
      function T(N, G, q, M, z) {
        var F = N[G];
        if (!e.isValidElementType(F)) {
          var U = D(F);
          return new h("Invalid " + M + " `" + z + "` of type " + ("`" + U + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(T);
    }
    function k(T) {
      function N(G, q, M, z, F) {
        if (!(G[q] instanceof T)) {
          var U = T.name || m, Y = de(G[q]);
          return new h("Invalid " + z + " `" + F + "` of type " + ("`" + Y + "` supplied to `" + M + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return g(N);
    }
    function C(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function N(G, q, M, z, F) {
        for (var U = G[q], Y = 0; Y < T.length; Y++)
          if (v(U, T[Y]))
            return null;
        var B = JSON.stringify(T, function(ye, P) {
          var ve = Z(P);
          return ve === "symbol" ? String(P) : P;
        });
        return new h("Invalid " + z + " `" + F + "` of value `" + String(U) + "` " + ("supplied to `" + M + "`, expected one of " + B + "."));
      }
      return g(N);
    }
    function ee(T) {
      function N(G, q, M, z, F) {
        if (typeof T != "function")
          return new h("Property `" + F + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var U = G[q], Y = D(U);
        if (Y !== "object")
          return new h("Invalid " + z + " `" + F + "` of type " + ("`" + Y + "` supplied to `" + M + "`, expected an object."));
        for (var B in U)
          if (n(U, B)) {
            var K = T(U, B, M, z, F + "." + B, r);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return g(N);
    }
    function te(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var N = 0; N < T.length; N++) {
        var G = T[N];
        if (typeof G != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + j(G) + " at index " + N + "."
          ), s;
      }
      function q(M, z, F, U, Y) {
        for (var B = [], K = 0; K < T.length; K++) {
          var ye = T[K], P = ye(M, z, F, U, Y, r);
          if (P == null)
            return null;
          P.data && n(P.data, "expectedType") && B.push(P.data.expectedType);
        }
        var ve = B.length > 0 ? ", expected one of type [" + B.join(", ") + "]" : "";
        return new h("Invalid " + U + " `" + Y + "` supplied to " + ("`" + F + "`" + ve + "."));
      }
      return g(q);
    }
    function L() {
      function T(N, G, q, M, z) {
        return I(N[G]) ? null : new h("Invalid " + M + " `" + z + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return g(T);
    }
    function V(T, N, G, q, M) {
      return new h(
        (T || "React class") + ": " + N + " type `" + G + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function J(T) {
      function N(G, q, M, z, F) {
        var U = G[q], Y = D(U);
        if (Y !== "object")
          return new h("Invalid " + z + " `" + F + "` of type `" + Y + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var B in T) {
          var K = T[B];
          if (typeof K != "function")
            return V(M, z, F, B, Z(K));
          var ye = K(U, B, M, z, F + "." + B, r);
          if (ye)
            return ye;
        }
        return null;
      }
      return g(N);
    }
    function W(T) {
      function N(G, q, M, z, F) {
        var U = G[q], Y = D(U);
        if (Y !== "object")
          return new h("Invalid " + z + " `" + F + "` of type `" + Y + "` " + ("supplied to `" + M + "`, expected `object`."));
        var B = t({}, G[q], T);
        for (var K in B) {
          var ye = T[K];
          if (n(T, K) && typeof ye != "function")
            return V(M, z, F, K, Z(ye));
          if (!ye)
            return new h(
              "Invalid " + z + " `" + F + "` key `" + K + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(G[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var P = ye(U, K, M, z, F + "." + K, r);
          if (P)
            return P;
        }
        return null;
      }
      return g(N);
    }
    function I(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(I);
          if (T === null || c(T))
            return !0;
          var N = p(T);
          if (N) {
            var G = N.call(T), q;
            if (N !== T.entries) {
              for (; !(q = G.next()).done; )
                if (!I(q.value))
                  return !1;
            } else
              for (; !(q = G.next()).done; ) {
                var M = q.value;
                if (M && !I(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(T, N) {
      return T === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function D(T) {
      var N = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : re(N, T) ? "symbol" : N;
    }
    function Z(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var N = D(T);
      if (N === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function j(T) {
      var N = Z(T);
      switch (N) {
        case "array":
        case "object":
          return "an " + N;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + N;
        default:
          return N;
      }
    }
    function de(T) {
      return !T.constructor || !T.constructor.name ? m : T.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, an;
}
var cn, Vo;
function Ac() {
  if (Vo)
    return cn;
  Vo = 1;
  var e = Fn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, cn = function() {
    function n(s, c, l, u, f, p) {
      if (p !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, cn;
}
if (process.env.NODE_ENV !== "production") {
  var Mc = jn(), Ic = !0;
  vn.exports = jc()(Mc.isElement, Ic);
} else
  vn.exports = Ac()();
var Dc = vn.exports;
const a = /* @__PURE__ */ sa(Dc);
let yn;
typeof document == "object" && (yn = $i({
  key: "css",
  prepend: !0
}));
function Bi(e) {
  const {
    injectFirst: t,
    children: r
  } = e;
  return t && yn ? /* @__PURE__ */ X.jsx(vc, {
    value: yn,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (Bi.propTypes = {
  /**
   * Your component tree.
   */
  children: a.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: a.bool
});
function Fc(e) {
  return e == null || Object.keys(e).length === 0;
}
function zi(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(Fc(o) ? r : o) : t;
  return /* @__PURE__ */ X.jsx(Fi, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (zi.propTypes = {
  defaultTheme: a.object,
  styles: a.oneOfType([a.array, a.string, a.object, a.func])
});
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Vc(e, t) {
  const r = gn(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Lc = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: zi,
  StyledEngineProvider: Bi,
  ThemeContext: dt,
  css: Vi,
  default: Vc,
  internal_processStyles: Lc,
  keyframes: Ar
}, Symbol.toStringTag, { value: "Module" }));
function it(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ui(e) {
  if (!it(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Ui(e[r]);
  }), t;
}
function Ke(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? x({}, e) : e;
  return it(e) && it(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (it(t[o]) && o in e && it(e[o]) ? n[o] = Ke(e[o], t[o], r) : r.clone ? n[o] = it(t[o]) ? Ui(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
const zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ke,
  isPlainObject: it
}, Symbol.toStringTag, { value: "Module" })), Uc = ["values", "unit", "step"], Wc = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => x({}, r, {
    [n.key]: n.val
  }), {});
};
function Wi(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = ge(e, Uc), i = Wc(t), s = Object.keys(i);
  function c(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function l(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function u(m, b) {
    const v = s.indexOf(b);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(v !== -1 && typeof t[s[v]] == "number" ? t[s[v]] : b) - n / 100}${r})`;
  }
  function f(m) {
    return s.indexOf(m) + 1 < s.length ? u(m, s[s.indexOf(m) + 1]) : c(m);
  }
  function p(m) {
    const b = s.indexOf(m);
    return b === 0 ? c(s[1]) : b === s.length - 1 ? l(s[b]) : u(m, s[s.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return x({
    keys: s,
    values: i,
    up: c,
    down: l,
    between: u,
    only: f,
    not: p,
    unit: r
  }, o);
}
const qc = {
  borderRadius: 4
}, Yc = qc, Hc = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.string, a.object, a.array]) : {}, st = Hc;
function Ut(e, t) {
  return t ? Ke(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Vn = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Lo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Vn[e]}px)`
};
function Qe(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Lo;
    return t.reduce((s, c, l) => (s[i.up(i.keys[l])] = r(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Lo;
    return Object.keys(t).reduce((s, c) => {
      if (Object.keys(i.values || Vn).indexOf(c) !== -1) {
        const l = i.up(c);
        s[l] = r(t[c], c);
      } else {
        const l = c;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return r(t);
}
function Gc(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Kc(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Se(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Yt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Xc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Se
}, Symbol.toStringTag, { value: "Module" }));
function Mr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Er(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Mr(e, r) || n, t && (o = t(o, n, e)), o;
}
function Te(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const c = s[t], l = s.theme, u = Mr(l, n) || {};
    return Qe(s, c, (p) => {
      let m = Er(u, o, p);
      return p === m && typeof p == "string" && (m = Er(u, o, `${t}${p === "default" ? "" : Se(p)}`, p)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: st
  } : {}, i.filterProps = [t], i;
}
function Jc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Zc = {
  m: "margin",
  p: "padding"
}, Qc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Bo = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, el = Jc((e) => {
  if (e.length > 2)
    if (Bo[e])
      e = Bo[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Zc[t], o = Qc[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Ir = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Dr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], tl = [...Ir, ...Dr];
function Zt(e, t, r, n) {
  var o;
  const i = (o = Mr(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function qi(e) {
  return Zt(e, "spacing", 8, "spacing");
}
function Qt(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function rl(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Qt(t, r), n), {});
}
function nl(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = el(r), i = rl(o, n), s = e[r];
  return Qe(e, s, i);
}
function Yi(e, t) {
  const r = qi(e.theme);
  return Object.keys(e).map((n) => nl(e, t, n, r)).reduce(Ut, {});
}
function be(e) {
  return Yi(e, Ir);
}
be.propTypes = process.env.NODE_ENV !== "production" ? Ir.reduce((e, t) => (e[t] = st, e), {}) : {};
be.filterProps = Ir;
function Ee(e) {
  return Yi(e, Dr);
}
Ee.propTypes = process.env.NODE_ENV !== "production" ? Dr.reduce((e, t) => (e[t] = st, e), {}) : {};
Ee.filterProps = Dr;
process.env.NODE_ENV !== "production" && tl.reduce((e, t) => (e[t] = st, e), {});
function ol(e = 8) {
  if (e.mui)
    return e;
  const t = qi({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function Fr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Ut(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Fe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Le(e, t) {
  return Te({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const il = Le("border", Fe), sl = Le("borderTop", Fe), al = Le("borderRight", Fe), cl = Le("borderBottom", Fe), ll = Le("borderLeft", Fe), ul = Le("borderColor"), fl = Le("borderTopColor"), dl = Le("borderRightColor"), pl = Le("borderBottomColor"), ml = Le("borderLeftColor"), hl = Le("outline", Fe), gl = Le("outlineColor"), Vr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Zt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Qt(t, n)
    });
    return Qe(e, e.borderRadius, r);
  }
  return null;
};
Vr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: st
} : {};
Vr.filterProps = ["borderRadius"];
Fr(il, sl, al, cl, ll, ul, fl, dl, pl, ml, Vr, hl, gl);
const Lr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Zt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Qt(t, n)
    });
    return Qe(e, e.gap, r);
  }
  return null;
};
Lr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: st
} : {};
Lr.filterProps = ["gap"];
const Br = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Zt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Qt(t, n)
    });
    return Qe(e, e.columnGap, r);
  }
  return null;
};
Br.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: st
} : {};
Br.filterProps = ["columnGap"];
const zr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Zt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Qt(t, n)
    });
    return Qe(e, e.rowGap, r);
  }
  return null;
};
zr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: st
} : {};
zr.filterProps = ["rowGap"];
const vl = Te({
  prop: "gridColumn"
}), yl = Te({
  prop: "gridRow"
}), bl = Te({
  prop: "gridAutoFlow"
}), El = Te({
  prop: "gridAutoColumns"
}), xl = Te({
  prop: "gridAutoRows"
}), Tl = Te({
  prop: "gridTemplateColumns"
}), Rl = Te({
  prop: "gridTemplateRows"
}), _l = Te({
  prop: "gridTemplateAreas"
}), Ol = Te({
  prop: "gridArea"
});
Fr(Lr, Br, zr, vl, yl, bl, El, xl, Tl, Rl, _l, Ol);
function Ot(e, t) {
  return t === "grey" ? t : e;
}
const Sl = Te({
  prop: "color",
  themeKey: "palette",
  transform: Ot
}), wl = Te({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ot
}), Cl = Te({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ot
});
Fr(Sl, wl, Cl);
function je(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Pl = Te({
  prop: "width",
  transform: je
}), Ln = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || Vn[r];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: je(r)
      };
    };
    return Qe(e, e.maxWidth, t);
  }
  return null;
};
Ln.filterProps = ["maxWidth"];
const $l = Te({
  prop: "minWidth",
  transform: je
}), Nl = Te({
  prop: "height",
  transform: je
}), kl = Te({
  prop: "maxHeight",
  transform: je
}), jl = Te({
  prop: "minHeight",
  transform: je
});
Te({
  prop: "size",
  cssProperty: "width",
  transform: je
});
Te({
  prop: "size",
  cssProperty: "height",
  transform: je
});
const Al = Te({
  prop: "boxSizing"
});
Fr(Pl, Ln, $l, Nl, kl, jl, Al);
const Ml = {
  // borders
  border: {
    themeKey: "borders",
    transform: Fe
  },
  borderTop: {
    themeKey: "borders",
    transform: Fe
  },
  borderRight: {
    themeKey: "borders",
    transform: Fe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Fe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Fe
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Fe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Vr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ot
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ot
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ot
  },
  // spacing
  p: {
    style: Ee
  },
  pt: {
    style: Ee
  },
  pr: {
    style: Ee
  },
  pb: {
    style: Ee
  },
  pl: {
    style: Ee
  },
  px: {
    style: Ee
  },
  py: {
    style: Ee
  },
  padding: {
    style: Ee
  },
  paddingTop: {
    style: Ee
  },
  paddingRight: {
    style: Ee
  },
  paddingBottom: {
    style: Ee
  },
  paddingLeft: {
    style: Ee
  },
  paddingX: {
    style: Ee
  },
  paddingY: {
    style: Ee
  },
  paddingInline: {
    style: Ee
  },
  paddingInlineStart: {
    style: Ee
  },
  paddingInlineEnd: {
    style: Ee
  },
  paddingBlock: {
    style: Ee
  },
  paddingBlockStart: {
    style: Ee
  },
  paddingBlockEnd: {
    style: Ee
  },
  m: {
    style: be
  },
  mt: {
    style: be
  },
  mr: {
    style: be
  },
  mb: {
    style: be
  },
  ml: {
    style: be
  },
  mx: {
    style: be
  },
  my: {
    style: be
  },
  margin: {
    style: be
  },
  marginTop: {
    style: be
  },
  marginRight: {
    style: be
  },
  marginBottom: {
    style: be
  },
  marginLeft: {
    style: be
  },
  marginX: {
    style: be
  },
  marginY: {
    style: be
  },
  marginInline: {
    style: be
  },
  marginInlineStart: {
    style: be
  },
  marginInlineEnd: {
    style: be
  },
  marginBlock: {
    style: be
  },
  marginBlockStart: {
    style: be
  },
  marginBlockEnd: {
    style: be
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Lr
  },
  rowGap: {
    style: zr
  },
  columnGap: {
    style: Br
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: je
  },
  maxWidth: {
    style: Ln
  },
  minWidth: {
    transform: je
  },
  height: {
    transform: je
  },
  maxHeight: {
    transform: je
  },
  minHeight: {
    transform: je
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, er = Ml;
function Il(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Dl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hi() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: u,
      transform: f,
      style: p
    } = c;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = Mr(o, u) || {};
    return p ? p(s) : Qe(s, n, (v) => {
      let h = Er(m, f, v);
      return v === h && typeof v == "string" && (h = Er(m, f, `${r}${v === "default" ? "" : Se(v)}`, v)), l === !1 ? h : {
        [l]: h
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = r || {};
    if (!o)
      return null;
    const s = (n = i.unstable_sxConfig) != null ? n : er;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(i);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const f = Gc(i.breakpoints), p = Object.keys(f);
      let m = f;
      return Object.keys(u).forEach((b) => {
        const v = Dl(u[b], i);
        if (v != null)
          if (typeof v == "object")
            if (s[b])
              m = Ut(m, e(b, v, i, s));
            else {
              const h = Qe({
                theme: i
              }, v, (g) => ({
                [b]: g
              }));
              Il(h, v) ? m[b] = t({
                sx: v,
                theme: i
              }) : m = Ut(m, h);
            }
          else
            m = Ut(m, e(b, v, i, s));
      }), Kc(p, m);
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return t;
}
const Gi = Hi();
Gi.filterProps = ["sx"];
const Bn = Gi;
function Ki(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const Fl = ["breakpoints", "palette", "spacing", "shape"];
function zn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = ge(e, Fl), c = Wi(r), l = ol(o);
  let u = Ke({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: x({
      mode: "light"
    }, n),
    spacing: l,
    shape: x({}, Yc, i)
  }, s);
  return u.applyStyles = Ki, u = t.reduce((f, p) => Ke(f, p), u), u.unstable_sxConfig = x({}, er, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return Bn({
      sx: p,
      theme: this
    });
  }, u;
}
const Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zn,
  private_createBreakpoints: Wi,
  unstable_applyStyles: Ki
}, Symbol.toStringTag, { value: "Module" }));
function Ll(e) {
  return Object.keys(e).length === 0;
}
function Bl(e = null) {
  const t = E.useContext(dt);
  return !t || Ll(t) ? e : t;
}
const zl = zn();
function Xi(e = zl) {
  return Bl(e);
}
const Ul = ["sx"], Wl = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : er;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function Ji(e) {
  const {
    sx: t
  } = e, r = ge(e, Ul), {
    systemProps: n,
    otherProps: o
  } = Wl(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...s) => {
    const c = t(...s);
    return it(c) ? x({}, n, c) : n;
  } : i = x({}, n, t), x({}, o, {
    sx: i
  });
}
const ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bn,
  extendSxProp: Ji,
  unstable_createStyleFunctionSx: Hi,
  unstable_defaultSxConfig: er
}, Symbol.toStringTag, { value: "Module" })), zo = (e) => e, Yl = () => {
  let e = zo;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = zo;
    }
  };
}, Hl = Yl(), Zi = Hl;
function Qi(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Qi(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function me() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Qi(e)) && (n && (n += " "), n += t);
  return n;
}
const Gl = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Be(e, t, r = "Mui") {
  const n = Gl[t];
  return n ? `${r}-${n}` : `${Zi.generate(e)}-${t}`;
}
function qe(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Be(e, o, r);
  }), n;
}
var bn = { exports: {} }, ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uo;
function Kl() {
  if (Uo)
    return ue;
  Uo = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function h(g) {
    if (typeof g == "object" && g !== null) {
      var R = g.$$typeof;
      switch (R) {
        case e:
          switch (g = g.type, g) {
            case r:
            case o:
            case n:
            case u:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case s:
                case l:
                case m:
                case p:
                case i:
                  return g;
                default:
                  return R;
              }
          }
        case t:
          return R;
      }
    }
  }
  return ue.ContextConsumer = s, ue.ContextProvider = i, ue.Element = e, ue.ForwardRef = l, ue.Fragment = r, ue.Lazy = m, ue.Memo = p, ue.Portal = t, ue.Profiler = o, ue.StrictMode = n, ue.Suspense = u, ue.SuspenseList = f, ue.isAsyncMode = function() {
    return !1;
  }, ue.isConcurrentMode = function() {
    return !1;
  }, ue.isContextConsumer = function(g) {
    return h(g) === s;
  }, ue.isContextProvider = function(g) {
    return h(g) === i;
  }, ue.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, ue.isForwardRef = function(g) {
    return h(g) === l;
  }, ue.isFragment = function(g) {
    return h(g) === r;
  }, ue.isLazy = function(g) {
    return h(g) === m;
  }, ue.isMemo = function(g) {
    return h(g) === p;
  }, ue.isPortal = function(g) {
    return h(g) === t;
  }, ue.isProfiler = function(g) {
    return h(g) === o;
  }, ue.isStrictMode = function(g) {
    return h(g) === n;
  }, ue.isSuspense = function(g) {
    return h(g) === u;
  }, ue.isSuspenseList = function(g) {
    return h(g) === f;
  }, ue.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === u || g === f || g === b || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === p || g.$$typeof === i || g.$$typeof === s || g.$$typeof === l || g.$$typeof === v || g.getModuleId !== void 0);
  }, ue.typeOf = h, ue;
}
var fe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wo;
function Xl() {
  return Wo || (Wo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), v = !1, h = !1, g = !1, R = !1, w = !1, _;
    _ = Symbol.for("react.module.reference");
    function S(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === o || w || A === n || A === u || A === f || R || A === b || v || h || g || typeof A == "object" && A !== null && (A.$$typeof === m || A.$$typeof === p || A.$$typeof === i || A.$$typeof === s || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === _ || A.getModuleId !== void 0));
    }
    function y(A) {
      if (typeof A == "object" && A !== null) {
        var ke = A.$$typeof;
        switch (ke) {
          case e:
            var ze = A.type;
            switch (ze) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return ze;
              default:
                var at = ze && ze.$$typeof;
                switch (at) {
                  case c:
                  case s:
                  case l:
                  case m:
                  case p:
                  case i:
                    return at;
                  default:
                    return ke;
                }
            }
          case t:
            return ke;
        }
      }
    }
    var k = s, C = i, ee = e, te = l, L = r, V = m, J = p, W = t, I = o, re = n, D = u, Z = f, j = !1, de = !1;
    function T(A) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function N(A) {
      return de || (de = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(A) {
      return y(A) === s;
    }
    function q(A) {
      return y(A) === i;
    }
    function M(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function z(A) {
      return y(A) === l;
    }
    function F(A) {
      return y(A) === r;
    }
    function U(A) {
      return y(A) === m;
    }
    function Y(A) {
      return y(A) === p;
    }
    function B(A) {
      return y(A) === t;
    }
    function K(A) {
      return y(A) === o;
    }
    function ye(A) {
      return y(A) === n;
    }
    function P(A) {
      return y(A) === u;
    }
    function ve(A) {
      return y(A) === f;
    }
    fe.ContextConsumer = k, fe.ContextProvider = C, fe.Element = ee, fe.ForwardRef = te, fe.Fragment = L, fe.Lazy = V, fe.Memo = J, fe.Portal = W, fe.Profiler = I, fe.StrictMode = re, fe.Suspense = D, fe.SuspenseList = Z, fe.isAsyncMode = T, fe.isConcurrentMode = N, fe.isContextConsumer = G, fe.isContextProvider = q, fe.isElement = M, fe.isForwardRef = z, fe.isFragment = F, fe.isLazy = U, fe.isMemo = Y, fe.isPortal = B, fe.isProfiler = K, fe.isStrictMode = ye, fe.isSuspense = P, fe.isSuspenseList = ve, fe.isValidElementType = S, fe.typeOf = y;
  }()), fe;
}
process.env.NODE_ENV === "production" ? bn.exports = Kl() : bn.exports = Xl();
var qo = bn.exports;
const Jl = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function es(e) {
  const t = `${e}`.match(Jl);
  return t && t[1] || "";
}
function ts(e, t = "") {
  return e.displayName || e.name || es(e) || t;
}
function Yo(e, t, r) {
  const n = ts(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Zl(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ts(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case qo.ForwardRef:
          return Yo(e, e.render, "ForwardRef");
        case qo.Memo:
          return Yo(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zl,
  getFunctionName: es
}, Symbol.toStringTag, { value: "Module" }));
function rs(e, t) {
  const r = x({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = x({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = x({}, i), Object.keys(o).forEach((s) => {
        r[n][s] = rs(o[s], i[s]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function eu(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : rs(t.components[r].defaultProps, n);
}
function tu({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = Xi(r);
  return n && (o = o[n] || o), eu({
    theme: o,
    name: t,
    props: e
  });
}
const ru = typeof window < "u" ? E.useLayoutEffect : E.useEffect, xr = ru;
function nu(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nu
}, Symbol.toStringTag, { value: "Module" }));
function Pt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function iu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ns(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = i.type;
  return typeof l == "function" && !iu(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const os = Pt(a.element, ns);
os.isRequired = Pt(a.element.isRequired, ns);
const Ur = os;
function su(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function au(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !su(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const cu = Pt(a.elementType, au), lu = "exact-prop: ​";
function is(e) {
  return process.env.NODE_ENV === "production" ? e : x({}, e, {
    [lu]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Un(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const uu = a.oneOfType([a.func, a.object]), fu = uu;
function En(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function ss(e, t = 166) {
  let r;
  function n(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(r), r = setTimeout(i, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function du(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, o, i, s) => {
    const c = o || "<<anonymous>>", l = s || n;
    return typeof r[n] < "u" ? new Error(`The ${i} \`${l}\` of \`${c}\` is deprecated. ${t}`) : null;
  };
}
function pu(e, t) {
  var r, n;
  return /* @__PURE__ */ E.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (r = e.type.muiName) != null ? r : (n = e.type) == null || (n = n._payload) == null || (n = n.value) == null ? void 0 : n.muiName
  ) !== -1;
}
function Ze(e) {
  return e && e.ownerDocument || document;
}
function $t(e) {
  return Ze(e).defaultView || window;
}
function mu(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? x({}, t.propTypes) : null;
  return (o) => (i, s, c, l, u, ...f) => {
    const p = u || s, m = r == null ? void 0 : r[p];
    if (m) {
      const b = m(i, s, c, l, u, ...f);
      if (b)
        return b;
    }
    return typeof i[s] < "u" && !i[o] ? new Error(`The prop \`${p}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function Tr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Ho = 0;
function hu(e) {
  const [t, r] = E.useState(e), n = e || t;
  return E.useEffect(() => {
    t == null && (Ho += 1, r(`mui-${Ho}`));
  }, [t]), n;
}
const Go = E["useId".toString()];
function gu(e) {
  if (Go !== void 0) {
    const t = Go();
    return e ?? t;
  }
  return hu(e);
}
function vu(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function yu({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = E.useRef(e !== void 0), [i, s] = E.useState(t), c = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    E.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = E.useRef(t);
    E.useEffect(() => {
      !o && u !== t && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const l = E.useCallback((u) => {
    o || s(u);
  }, []);
  return [c, l];
}
function ut(e) {
  const t = E.useRef(e);
  return xr(() => {
    t.current = e;
  }), E.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function et(...e) {
  return E.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Tr(r, t);
    });
  }, e);
}
const Ko = {};
function bu(e, t) {
  const r = E.useRef(Ko);
  return r.current === Ko && (r.current = e(t)), r;
}
const Eu = [];
function xu(e) {
  E.useEffect(e, Eu);
}
class Wr {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Wr();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Tu() {
  const e = bu(Wr.create).current;
  return xu(e.disposeEffect), e;
}
let qr = !0, xn = !1;
const Ru = new Wr(), _u = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Ou(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && _u[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Su(e) {
  e.metaKey || e.altKey || e.ctrlKey || (qr = !0);
}
function ln() {
  qr = !1;
}
function wu() {
  this.visibilityState === "hidden" && xn && (qr = !0);
}
function Cu(e) {
  e.addEventListener("keydown", Su, !0), e.addEventListener("mousedown", ln, !0), e.addEventListener("pointerdown", ln, !0), e.addEventListener("touchstart", ln, !0), e.addEventListener("visibilitychange", wu, !0);
}
function Pu(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return qr || Ou(t);
}
function as() {
  const e = E.useCallback((o) => {
    o != null && Cu(o.ownerDocument);
  }, []), t = E.useRef(!1);
  function r() {
    return t.current ? (xn = !0, Ru.start(100, () => {
      xn = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return Pu(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function $u(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Nu(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function ku(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const ju = Number.isInteger || ku;
function cs(e, t, r, n) {
  const o = e[t];
  if (o == null || !ju(o)) {
    const i = Nu(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${i}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function ls(e, t, ...r) {
  return e[t] === void 0 ? null : cs(e, t, ...r);
}
function Tn() {
  return null;
}
ls.isRequired = cs;
Tn.isRequired = Tn;
const us = process.env.NODE_ENV === "production" ? Tn : ls;
function Xe(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const c = t(s);
          c !== "" && i.push(c), r && r[s] && i.push(r[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const Au = /* @__PURE__ */ E.createContext();
process.env.NODE_ENV !== "production" && (a.node, a.bool);
const Mu = () => {
  const e = E.useContext(Au);
  return e ?? !1;
};
function Iu(e, t) {
  return x({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var Re = {}, fs = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(fs);
var Yr = fs.exports;
const Du = /* @__PURE__ */ tt(ya), Fu = /* @__PURE__ */ tt(ou);
var ds = Yr;
Object.defineProperty(Re, "__esModule", {
  value: !0
});
var Xt = Re.alpha = gs;
Re.blend = Xu;
Re.colorChannel = void 0;
var Vu = Re.darken = qn;
Re.decomposeColor = Ve;
Re.emphasize = Ku;
var Xo = Re.getContrastRatio = qu;
Re.getLuminance = Rr;
Re.hexToRgb = ps;
Re.hslToRgb = hs;
var Lu = Re.lighten = Yn;
Re.private_safeAlpha = Yu;
Re.private_safeColorChannel = void 0;
Re.private_safeDarken = Hu;
Re.private_safeEmphasize = vs;
Re.private_safeLighten = Gu;
Re.recomposeColor = Nt;
Re.rgbToHex = Wu;
var Jo = ds(Du), Bu = ds(Fu);
function Wn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, Bu.default)(e, t, r);
}
function ps(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function zu(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Ve(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ve(ps(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Jo.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Jo.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const ms = (e) => {
  const t = Ve(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
Re.colorChannel = ms;
const Uu = (e, t) => {
  try {
    return ms(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
Re.private_safeColorChannel = Uu;
function Nt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Wu(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Ve(e);
  return `#${t.map((r, n) => zu(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function hs(e) {
  e = Ve(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (u, f = (u + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let c = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), Nt({
    type: c,
    values: l
  });
}
function Rr(e) {
  e = Ve(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ve(hs(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function qu(e, t) {
  const r = Rr(e), n = Rr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function gs(e, t) {
  return e = Ve(e), t = Wn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Nt(e);
}
function Yu(e, t, r) {
  try {
    return gs(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function qn(e, t) {
  if (e = Ve(e), t = Wn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Nt(e);
}
function Hu(e, t, r) {
  try {
    return qn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Yn(e, t) {
  if (e = Ve(e), t = Wn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Nt(e);
}
function Gu(e, t, r) {
  try {
    return Yn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ku(e, t = 0.15) {
  return Rr(e) > 0.5 ? qn(e, t) : Yn(e, t);
}
function vs(e, t, r) {
  try {
    return vs(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Xu(e, t, r, n = 1) {
  const o = (l, u) => Math.round((l ** (1 / n) * (1 - r) + u ** (1 / n) * r) ** n), i = Ve(e), s = Ve(t), c = [o(i.values[0], s.values[0]), o(i.values[1], s.values[1]), o(i.values[2], s.values[2])];
  return Nt({
    type: "rgb",
    values: c
  });
}
const Ju = ["mode", "contrastThreshold", "tonalOffset"], Zo = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: qt.white,
    default: qt.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, un = {
  text: {
    primary: qt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: qt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Qo(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Lu(e.main, o) : t === "dark" && (e.dark = Vu(e.main, i)));
}
function Zu(e = "light") {
  return e === "dark" ? {
    main: bt[200],
    light: bt[50],
    dark: bt[400]
  } : {
    main: bt[700],
    light: bt[400],
    dark: bt[800]
  };
}
function Qu(e = "light") {
  return e === "dark" ? {
    main: yt[200],
    light: yt[50],
    dark: yt[400]
  } : {
    main: yt[500],
    light: yt[300],
    dark: yt[700]
  };
}
function ef(e = "light") {
  return e === "dark" ? {
    main: vt[500],
    light: vt[300],
    dark: vt[700]
  } : {
    main: vt[700],
    light: vt[400],
    dark: vt[800]
  };
}
function tf(e = "light") {
  return e === "dark" ? {
    main: Et[400],
    light: Et[300],
    dark: Et[700]
  } : {
    main: Et[700],
    light: Et[500],
    dark: Et[900]
  };
}
function rf(e = "light") {
  return e === "dark" ? {
    main: xt[400],
    light: xt[300],
    dark: xt[700]
  } : {
    main: xt[800],
    light: xt[500],
    dark: xt[900]
  };
}
function nf(e = "light") {
  return e === "dark" ? {
    main: Lt[400],
    light: Lt[300],
    dark: Lt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Lt[500],
    dark: Lt[900]
  };
}
function of(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = ge(e, Ju), i = e.primary || Zu(t), s = e.secondary || Qu(t), c = e.error || ef(t), l = e.info || tf(t), u = e.success || rf(t), f = e.warning || nf(t);
  function p(h) {
    const g = Xo(h, un.text.primary) >= r ? un.text.primary : Zo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = Xo(h, g);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${g} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return g;
  }
  const m = ({
    color: h,
    name: g,
    mainShade: R = 500,
    lightShade: w = 300,
    darkShade: _ = 700
  }) => {
    if (h = x({}, h), !h.main && h[R] && (h.main = h[R]), !h.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : Yt(11, g ? ` (${g})` : "", R));
    if (typeof h.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(h.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Yt(12, g ? ` (${g})` : "", JSON.stringify(h.main)));
    return Qo(h, "light", w, n), Qo(h, "dark", _, n), h.contrastText || (h.contrastText = p(h.main)), h;
  }, b = {
    dark: un,
    light: Zo
  };
  return process.env.NODE_ENV !== "production" && (b[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ke(x({
    // A collection of common colors.
    common: x({}, qt),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: va,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, b[t]), o);
}
const sf = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function af(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ei = {
  textTransform: "uppercase"
}, ti = '"Roboto", "Helvetica", "Arial", sans-serif';
function cf(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = ti,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: p
  } = r, m = ge(r, sf);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, v = p || ((R) => `${R / u * b}rem`), h = (R, w, _, S, y) => x({
    fontFamily: n,
    fontWeight: R,
    fontSize: v(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: _
  }, n === ti ? {
    letterSpacing: `${af(S / w)}em`
  } : {}, y, f), g = {
    h1: h(i, 96, 1.167, -1.5),
    h2: h(i, 60, 1.2, -0.5),
    h3: h(s, 48, 1.167, 0),
    h4: h(s, 34, 1.235, 0.25),
    h5: h(s, 24, 1.334, 0),
    h6: h(c, 20, 1.6, 0.15),
    subtitle1: h(s, 16, 1.75, 0.15),
    subtitle2: h(c, 14, 1.57, 0.1),
    body1: h(s, 16, 1.5, 0.15),
    body2: h(s, 14, 1.43, 0.15),
    button: h(c, 14, 1.75, 0.4, ei),
    caption: h(s, 12, 1.66, 0.4),
    overline: h(s, 12, 2.66, 1, ei),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ke(x({
    htmlFontSize: u,
    pxToRem: v,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: c,
    fontWeightBold: l
  }, g), m, {
    clone: !1
    // No need to clone deep
  });
}
const lf = 0.2, uf = 0.14, ff = 0.12;
function he(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${lf})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${uf})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ff})`].join(",");
}
const df = ["none", he(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), he(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), he(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), he(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), he(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), he(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), he(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), he(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), he(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), he(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), he(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), he(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), he(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), he(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), he(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), he(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), he(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), he(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), he(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), he(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), he(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), he(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), he(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), he(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], pf = df, mf = ["duration", "easing", "delay"], hf = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, gf = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ri(e) {
  return `${Math.round(e)}ms`;
}
function vf(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function yf(e) {
  const t = x({}, hf, e.easing), r = x({}, gf, e.duration);
  return x({
    getAutoHeightDuration: vf,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0
      } = i, u = ge(i, mf);
      if (process.env.NODE_ENV !== "production") {
        const f = (m) => typeof m == "string", p = (m) => !isNaN(parseFloat(m));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(c) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : ri(s)} ${c} ${typeof l == "string" ? l : ri(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const bf = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Ef = bf, xf = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Tf(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = ge(e, xf);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Yt(18));
  const c = of(n), l = zn(e);
  let u = Ke(l, {
    mixins: Iu(l.breakpoints, r),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: pf.slice(),
    typography: cf(c, i),
    transitions: yf(o),
    zIndex: x({}, Ef)
  });
  if (u = Ke(u, s), u = t.reduce((f, p) => Ke(f, p), u), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (m, b) => {
      let v;
      for (v in m) {
        const h = m[v];
        if (f.indexOf(v) !== -1 && Object.keys(h).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const g = Be("", v);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${v}\` internal state.`, "You can not override it like this: ", JSON.stringify(m, null, 2), "", `Instead, you need to use the '&.${g}' syntax:`, JSON.stringify({
              root: {
                [`&.${g}`]: h
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          m[v] = {};
        }
      }
    };
    Object.keys(u.components).forEach((m) => {
      const b = u.components[m].styleOverrides;
      b && m.indexOf("Mui") === 0 && p(b, m);
    });
  }
  return u.unstable_sxConfig = x({}, er, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return Bn({
      sx: p,
      theme: this
    });
  }, u;
}
const Rf = Tf(), Hn = Rf;
function Hr() {
  const e = Xi(Hn);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[Cn] || e;
}
function Ye({
  props: e,
  name: t
}) {
  return tu({
    props: e,
    name: t,
    defaultTheme: Hn,
    themeId: Cn
  });
}
var tr = {}, fn = { exports: {} }, ni;
function _f() {
  return ni || (ni = 1, function(e) {
    function t(r, n) {
      if (r == null)
        return {};
      var o = {}, i = Object.keys(r), s, c;
      for (c = 0; c < i.length; c++)
        s = i[c], !(n.indexOf(s) >= 0) && (o[s] = r[s]);
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(fn)), fn.exports;
}
const Of = /* @__PURE__ */ tt(Bc), Sf = /* @__PURE__ */ tt(zc), wf = /* @__PURE__ */ tt(Xc), Cf = /* @__PURE__ */ tt(Ql), Pf = /* @__PURE__ */ tt(Vl), $f = /* @__PURE__ */ tt(ql);
var kt = Yr;
Object.defineProperty(tr, "__esModule", {
  value: !0
});
var Nf = tr.default = qf;
tr.shouldForwardProp = gr;
tr.systemDefaultTheme = void 0;
var Ie = kt(Di()), Rn = kt(_f()), oi = Lf(Of), kf = Sf, jf = kt(wf), Af = kt(Cf), Mf = kt(Pf), If = kt($f);
const Df = ["ownerState"], Ff = ["variants"], Vf = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function ys(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (ys = function(n) {
    return n ? r : t;
  })(e);
}
function Lf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = ys(t);
  if (r && r.has(e))
    return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
function Bf(e) {
  return Object.keys(e).length === 0;
}
function zf(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function gr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Uf = tr.systemDefaultTheme = (0, Mf.default)(), ii = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function lr({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return Bf(t) ? e : t[r] || t;
}
function Wf(e) {
  return e ? (t, r) => r[e] : null;
}
function vr(e, t) {
  let {
    ownerState: r
  } = t, n = (0, Rn.default)(t, Df);
  const o = typeof e == "function" ? e((0, Ie.default)({
    ownerState: r
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => vr(i, (0, Ie.default)({
      ownerState: r
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let c = (0, Rn.default)(o, Ff);
    return i.forEach((l) => {
      let u = !0;
      typeof l.props == "function" ? u = l.props((0, Ie.default)({
        ownerState: r
      }, n, r)) : Object.keys(l.props).forEach((f) => {
        (r == null ? void 0 : r[f]) !== l.props[f] && n[f] !== l.props[f] && (u = !1);
      }), u && (Array.isArray(c) || (c = [c]), c.push(typeof l.style == "function" ? l.style((0, Ie.default)({
        ownerState: r
      }, n, r)) : l.style));
    }), c;
  }
  return o;
}
function qf(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Uf,
    rootShouldForwardProp: n = gr,
    slotShouldForwardProp: o = gr
  } = e, i = (s) => (0, If.default)((0, Ie.default)({}, s, {
    theme: lr((0, Ie.default)({}, s, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, c = {}) => {
    (0, oi.internal_processStyles)(s, (y) => y.filter((k) => !(k != null && k.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: f,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = Wf(ii(u))
    } = c, b = (0, Rn.default)(c, Vf), v = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), h = p || !1;
    let g;
    process.env.NODE_ENV !== "production" && l && (g = `${l}-${ii(u || "Root")}`);
    let R = gr;
    u === "Root" || u === "root" ? R = n : u ? R = o : zf(s) && (R = void 0);
    const w = (0, oi.default)(s, (0, Ie.default)({
      shouldForwardProp: R,
      label: g
    }, b)), _ = (y) => typeof y == "function" && y.__emotion_real !== y || (0, kf.isPlainObject)(y) ? (k) => vr(y, (0, Ie.default)({}, k, {
      theme: lr({
        theme: k.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : y, S = (y, ...k) => {
      let C = _(y);
      const ee = k ? k.map(_) : [];
      l && m && ee.push((V) => {
        const J = lr((0, Ie.default)({}, V, {
          defaultTheme: r,
          themeId: t
        }));
        if (!J.components || !J.components[l] || !J.components[l].styleOverrides)
          return null;
        const W = J.components[l].styleOverrides, I = {};
        return Object.entries(W).forEach(([re, D]) => {
          I[re] = vr(D, (0, Ie.default)({}, V, {
            theme: J
          }));
        }), m(V, I);
      }), l && !v && ee.push((V) => {
        var J;
        const W = lr((0, Ie.default)({}, V, {
          defaultTheme: r,
          themeId: t
        })), I = W == null || (J = W.components) == null || (J = J[l]) == null ? void 0 : J.variants;
        return vr({
          variants: I
        }, (0, Ie.default)({}, V, {
          theme: W
        }));
      }), h || ee.push(i);
      const te = ee.length - k.length;
      if (Array.isArray(y) && te > 0) {
        const V = new Array(te).fill("");
        C = [...y, ...V], C.raw = [...y.raw, ...V];
      }
      const L = w(C, ...ee);
      if (process.env.NODE_ENV !== "production") {
        let V;
        l && (V = `${l}${(0, jf.default)(u || "")}`), V === void 0 && (V = `Styled(${(0, Af.default)(s)})`), L.displayName = V;
      }
      return s.muiName && (L.muiName = s.muiName), L;
    };
    return w.withConfig && (S.withConfig = w.withConfig), S;
  };
}
function Yf(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Hf = (e) => Yf(e) && e !== "classes", bs = Hf, Gf = Nf({
  themeId: Cn,
  defaultTheme: Hn,
  rootShouldForwardProp: bs
}), Pe = Gf, Kf = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, si = Kf;
function Xf(e) {
  return Be("MuiSvgIcon", e);
}
qe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Jf = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Zf = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Se(t)}`, `fontSize${Se(r)}`]
  };
  return Xe(o, Xf, n);
}, Qf = Pe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Se(r.color)}`], t[`fontSize${Se(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, i, s, c, l, u, f, p, m, b, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (l = c.pxToRem) == null ? void 0 : l.call(c, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (f = u.pxToRem) == null ? void 0 : f.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (m = (e.vars || e).palette) == null || (m = m[t.color]) == null ? void 0 : m.main) != null ? p : {
      action: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.active,
      disabled: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.disabled,
      inherit: void 0
    }[t.color]
  };
}), Gn = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: p,
    viewBox: m = "0 0 24 24"
  } = n, b = ge(n, Jf), v = /* @__PURE__ */ E.isValidElement(o) && o.type === "svg", h = x({}, n, {
    color: s,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: m,
    hasSvgAsChild: v
  }), g = {};
  f || (g.viewBox = m);
  const R = Zf(h);
  return /* @__PURE__ */ X.jsxs(Qf, x({
    as: c,
    className: me(R.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r
  }, g, b, v && o.props, {
    ownerState: h,
    children: [v ? o.props.children : o, p ? /* @__PURE__ */ X.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Gn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: a.oneOfType([a.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: a.oneOfType([a.oneOf(["inherit", "large", "medium", "small"]), a.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: a.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: a.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: a.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: a.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: a.string
});
Gn.muiName = "SvgIcon";
const ai = Gn;
function ed(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ X.jsx(ai, x({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = ai.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(r));
}
const td = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), Zi.configure(e);
  }
}, rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: Se,
  createChainedFunction: En,
  createSvgIcon: ed,
  debounce: ss,
  deprecatedPropType: du,
  isMuiElement: pu,
  ownerDocument: Ze,
  ownerWindow: $t,
  requirePropFactory: mu,
  setRef: Tr,
  unstable_ClassNameGenerator: td,
  unstable_useEnhancedEffect: xr,
  unstable_useId: gu,
  unsupportedProp: vu,
  useControlled: yu,
  useEventCallback: ut,
  useForkRef: et,
  useIsFocusVisible: as
}, Symbol.toStringTag, { value: "Module" }));
function _n(e, t) {
  return _n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, _n(e, t);
}
function Es(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _n(e, t);
}
const ci = {
  disabled: !1
};
var nd = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.shape({
  enter: a.number,
  exit: a.number,
  appear: a.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && a.oneOfType([a.string, a.shape({
  enter: a.string,
  exit: a.string,
  active: a.string
}), a.shape({
  enter: a.string,
  enterDone: a.string,
  enterActive: a.string,
  exit: a.string,
  exitDone: a.string,
  exitActive: a.string
})]);
const _r = We.createContext(null);
var od = function(t) {
  return t.scrollTop;
}, zt = "unmounted", ct = "exited", lt = "entering", Rt = "entered", On = "exiting", rt = /* @__PURE__ */ function(e) {
  Es(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = o, c = s && !s.isMounting ? n.enter : n.appear, l;
    return i.appearStatus = null, n.in ? c ? (l = ct, i.appearStatus = lt) : l = Rt : n.unmountOnExit || n.mountOnEnter ? l = zt : l = ct, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === zt ? {
      status: ct
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== lt && s !== Rt && (i = lt) : (s === lt || s === Rt) && (i = On);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, i, s, c;
    return i = s = c = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, c = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: c
    };
  }, r.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === lt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : ir.findDOMNode(this);
          s && od(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === ct && this.setState({
        status: zt
      });
  }, r.performEnter = function(o) {
    var i = this, s = this.props.enter, c = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [c] : [ir.findDOMNode(this), c], u = l[0], f = l[1], p = this.getTimeouts(), m = c ? p.appear : p.enter;
    if (!o && !s || ci.disabled) {
      this.safeSetState({
        status: Rt
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: lt
    }, function() {
      i.props.onEntering(u, f), i.onTransitionEnd(m, function() {
        i.safeSetState({
          status: Rt
        }, function() {
          i.props.onEntered(u, f);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), c = this.props.nodeRef ? void 0 : ir.findDOMNode(this);
    if (!i || ci.disabled) {
      this.safeSetState({
        status: ct
      }, function() {
        o.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: On
    }, function() {
      o.props.onExiting(c), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: ct
        }, function() {
          o.props.onExited(c);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, r.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(c) {
      s && (s = !1, i.nextCallback = null, o(c));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : ir.findDOMNode(this), c = o == null && !this.props.addEndListener;
    if (!s || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = l[0], f = l[1];
      this.props.addEndListener(u, f);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === zt)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = ge(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ We.createElement(_r.Provider, {
        value: null
      }, typeof s == "function" ? s(o, c) : We.cloneElement(We.Children.only(s), c))
    );
  }, t;
}(We.Component);
rt.contextType = _r;
rt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: a.shape({
    current: typeof Element > "u" ? a.any : function(e, t, r, n, o, i) {
      var s = e[t];
      return a.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: a.oneOfType([a.func.isRequired, a.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: a.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: a.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: a.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: a.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: a.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: a.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = nd;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      o[i - 1] = arguments[i];
    return r.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: a.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: a.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: a.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: a.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: a.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: a.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: a.func
} : {};
function Tt() {
}
rt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Tt,
  onEntering: Tt,
  onEntered: Tt,
  onExit: Tt,
  onExiting: Tt,
  onExited: Tt
};
rt.UNMOUNTED = zt;
rt.EXITED = ct;
rt.ENTERING = lt;
rt.ENTERED = Rt;
rt.EXITING = On;
const xs = rt;
function id(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Kn(e, t) {
  var r = function(i) {
    return t && fr(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && na.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function sd(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, c = {};
  for (var l in t) {
    if (n[l])
      for (s = 0; s < n[l].length; s++) {
        var u = n[l][s];
        c[n[l][s]] = r(u);
      }
    c[l] = r(l);
  }
  for (s = 0; s < o.length; s++)
    c[o[s]] = r(o[s]);
  return c;
}
function ft(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function ad(e, t) {
  return Kn(e.children, function(r) {
    return dr(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: ft(r, "appear", e),
      enter: ft(r, "enter", e),
      exit: ft(r, "exit", e)
    });
  });
}
function cd(e, t, r) {
  var n = Kn(e.children), o = sd(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (fr(s)) {
      var c = i in t, l = i in n, u = t[i], f = fr(u) && !u.props.in;
      l && (!c || f) ? o[i] = dr(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: ft(s, "exit", e),
        enter: ft(s, "enter", e)
      }) : !l && c && !f ? o[i] = dr(s, {
        in: !1
      }) : l && c && fr(u) && (o[i] = dr(s, {
        onExited: r.bind(null, s),
        in: u.props.in,
        exit: ft(s, "exit", e),
        enter: ft(s, "enter", e)
      }));
    }
  }), o;
}
var ld = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, ud = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Xn = /* @__PURE__ */ function(e) {
  Es(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(id(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, c = i.handleExited, l = i.firstRender;
    return {
      children: l ? ad(o, c) : cd(o, s, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = Kn(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = x({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, c = ge(o, ["component", "childFactory"]), l = this.state.contextValue, u = ld(this.state.children).map(s);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ We.createElement(_r.Provider, {
      value: l
    }, u) : /* @__PURE__ */ We.createElement(_r.Provider, {
      value: l
    }, /* @__PURE__ */ We.createElement(i, c, u));
  }, t;
}(We.Component);
Xn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: a.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: a.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: a.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: a.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: a.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: a.func
} : {};
Xn.defaultProps = ud;
const fd = Xn, Ts = (e) => e.scrollTop;
function Or(e, t) {
  var r, n;
  const {
    timeout: o,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: (r = s.transitionDuration) != null ? r : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (n = s.transitionTimingFunction) != null ? n : typeof i == "object" ? i[t.mode] : i,
    delay: s.transitionDelay
  };
}
function dd(e) {
  return Be("MuiPaper", e);
}
qe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const pd = ["className", "component", "elevation", "square", "variant"], md = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, i = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return Xe(i, dd, o);
}, hd = Pe("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r;
  return x({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && x({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Xt("#fff", si(t.elevation))}, ${Xt("#fff", si(t.elevation))})`
  }, e.vars && {
    backgroundImage: (r = e.vars.overlays) == null ? void 0 : r[t.elevation]
  }));
}), Rs = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: s = 1,
    square: c = !1,
    variant: l = "elevation"
  } = n, u = ge(n, pd), f = x({}, n, {
    component: i,
    elevation: s,
    square: c,
    variant: l
  }), p = md(f);
  return process.env.NODE_ENV !== "production" && Hr().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ X.jsx(hd, x({
    as: i,
    ownerState: f,
    className: me(p.root, o),
    ref: r
  }, u));
});
process.env.NODE_ENV !== "production" && (Rs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Pt(us, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: a.oneOfType([a.oneOf(["elevation", "outlined"]), a.string])
});
const gd = Rs;
function vd(e) {
  return typeof e == "string";
}
function yd(e, t, r) {
  return e === void 0 || vd(e) ? t : x({}, t, {
    ownerState: x({}, t.ownerState, r)
  });
}
function _s(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function bd(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function li(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Ed(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const b = me(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), v = x({}, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), h = x({}, r, o, n);
    return b.length > 0 && (h.className = b), Object.keys(v).length > 0 && (h.style = v), {
      props: h,
      internalRef: void 0
    };
  }
  const s = _s(x({}, o, n)), c = li(n), l = li(o), u = t(s), f = me(u == null ? void 0 : u.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), p = x({}, u == null ? void 0 : u.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), m = x({}, u, r, l, c);
  return f.length > 0 && (m.className = f), Object.keys(p).length > 0 && (m.style = p), {
    props: m,
    internalRef: u.ref
  };
}
const xd = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function ui(e) {
  var t;
  const {
    elementType: r,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, s = ge(e, xd), c = i ? {} : bd(n, o), {
    props: l,
    internalRef: u
  } = Ed(x({}, s, {
    externalSlotProps: c
  })), f = et(u, c == null ? void 0 : c.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return yd(r, x({}, l, {
    ref: f
  }), o);
}
function Os(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: c,
    onExited: l,
    timeout: u
  } = e, [f, p] = E.useState(!1), m = me(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), b = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, v = me(r.child, f && r.childLeaving, n && r.childPulsate);
  return !c && !f && p(!0), E.useEffect(() => {
    if (!c && l != null) {
      const h = setTimeout(l, u);
      return () => {
        clearTimeout(h);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ X.jsx("span", {
    className: m,
    style: b,
    children: /* @__PURE__ */ X.jsx("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (Os.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object.isRequired,
  className: a.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: a.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: a.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: a.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: a.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: a.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: a.number,
  /**
   * exit delay
   */
  timeout: a.number.isRequired
});
const Td = qe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), De = Td, Rd = ["center", "classes", "className"];
let Gr = (e) => e, fi, di, pi, mi;
const Sn = 550, _d = 80, Od = Ar(fi || (fi = Gr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Sd = Ar(di || (di = Gr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), wd = Ar(pi || (pi = Gr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Cd = Pe("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Pd = Pe(Os, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(mi || (mi = Gr`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), De.rippleVisible, Od, Sn, ({
  theme: e
}) => e.transitions.easing.easeInOut, De.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, De.child, De.childLeaving, Sd, Sn, ({
  theme: e
}) => e.transitions.easing.easeInOut, De.childPulsate, wd, ({
  theme: e
}) => e.transitions.easing.easeInOut), Ss = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = n, c = ge(n, Rd), [l, u] = E.useState([]), f = E.useRef(0), p = E.useRef(null);
  E.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [l]);
  const m = E.useRef(!1), b = Tu(), v = E.useRef(null), h = E.useRef(null), g = E.useCallback((S) => {
    const {
      pulsate: y,
      rippleX: k,
      rippleY: C,
      rippleSize: ee,
      cb: te
    } = S;
    u((L) => [...L, /* @__PURE__ */ X.jsx(Pd, {
      classes: {
        ripple: me(i.ripple, De.ripple),
        rippleVisible: me(i.rippleVisible, De.rippleVisible),
        ripplePulsate: me(i.ripplePulsate, De.ripplePulsate),
        child: me(i.child, De.child),
        childLeaving: me(i.childLeaving, De.childLeaving),
        childPulsate: me(i.childPulsate, De.childPulsate)
      },
      timeout: Sn,
      pulsate: y,
      rippleX: k,
      rippleY: C,
      rippleSize: ee
    }, f.current)]), f.current += 1, p.current = te;
  }, [i]), R = E.useCallback((S = {}, y = {}, k = () => {
  }) => {
    const {
      pulsate: C = !1,
      center: ee = o || y.pulsate,
      fakeElement: te = !1
      // For test purposes
    } = y;
    if ((S == null ? void 0 : S.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (S == null ? void 0 : S.type) === "touchstart" && (m.current = !0);
    const L = te ? null : h.current, V = L ? L.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let J, W, I;
    if (ee || S === void 0 || S.clientX === 0 && S.clientY === 0 || !S.clientX && !S.touches)
      J = Math.round(V.width / 2), W = Math.round(V.height / 2);
    else {
      const {
        clientX: re,
        clientY: D
      } = S.touches && S.touches.length > 0 ? S.touches[0] : S;
      J = Math.round(re - V.left), W = Math.round(D - V.top);
    }
    if (ee)
      I = Math.sqrt((2 * V.width ** 2 + V.height ** 2) / 3), I % 2 === 0 && (I += 1);
    else {
      const re = Math.max(Math.abs((L ? L.clientWidth : 0) - J), J) * 2 + 2, D = Math.max(Math.abs((L ? L.clientHeight : 0) - W), W) * 2 + 2;
      I = Math.sqrt(re ** 2 + D ** 2);
    }
    S != null && S.touches ? v.current === null && (v.current = () => {
      g({
        pulsate: C,
        rippleX: J,
        rippleY: W,
        rippleSize: I,
        cb: k
      });
    }, b.start(_d, () => {
      v.current && (v.current(), v.current = null);
    })) : g({
      pulsate: C,
      rippleX: J,
      rippleY: W,
      rippleSize: I,
      cb: k
    });
  }, [o, g, b]), w = E.useCallback(() => {
    R({}, {
      pulsate: !0
    });
  }, [R]), _ = E.useCallback((S, y) => {
    if (b.clear(), (S == null ? void 0 : S.type) === "touchend" && v.current) {
      v.current(), v.current = null, b.start(0, () => {
        _(S, y);
      });
      return;
    }
    v.current = null, u((k) => k.length > 0 ? k.slice(1) : k), p.current = y;
  }, [b]);
  return E.useImperativeHandle(r, () => ({
    pulsate: w,
    start: R,
    stop: _
  }), [w, R, _]), /* @__PURE__ */ X.jsx(Cd, x({
    className: me(De.root, i.root, s),
    ref: h
  }, c, {
    children: /* @__PURE__ */ X.jsx(fd, {
      component: null,
      exit: !0,
      children: l
    })
  }));
});
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: a.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string
});
const $d = Ss;
function Nd(e) {
  return Be("MuiButtonBase", e);
}
const kd = qe("MuiButtonBase", ["root", "disabled", "focusVisible"]), jd = kd, Ad = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Md = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = Xe({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Nd, o);
  return r && n && (s.root += ` ${n}`), s;
}, Id = Pe("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${jd.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ws = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: c,
    component: l = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: p = !1,
    focusRipple: m = !1,
    LinkComponent: b = "a",
    onBlur: v,
    onClick: h,
    onContextMenu: g,
    onDragLeave: R,
    onFocus: w,
    onFocusVisible: _,
    onKeyDown: S,
    onKeyUp: y,
    onMouseDown: k,
    onMouseLeave: C,
    onMouseUp: ee,
    onTouchEnd: te,
    onTouchMove: L,
    onTouchStart: V,
    tabIndex: J = 0,
    TouchRippleProps: W,
    touchRippleRef: I,
    type: re
  } = n, D = ge(n, Ad), Z = E.useRef(null), j = E.useRef(null), de = et(j, I), {
    isFocusVisibleRef: T,
    onFocus: N,
    onBlur: G,
    ref: q
  } = as(), [M, z] = E.useState(!1);
  u && M && z(!1), E.useImperativeHandle(o, () => ({
    focusVisible: () => {
      z(!0), Z.current.focus();
    }
  }), []);
  const [F, U] = E.useState(!1);
  E.useEffect(() => {
    U(!0);
  }, []);
  const Y = F && !f && !u;
  E.useEffect(() => {
    M && m && !f && F && j.current.pulsate();
  }, [f, m, M, F]);
  function B(Q, It, Dt = p) {
    return ut((or) => (It && It(or), !Dt && j.current && j.current[Q](or), !0));
  }
  const K = B("start", k), ye = B("stop", g), P = B("stop", R), ve = B("stop", ee), A = B("stop", (Q) => {
    M && Q.preventDefault(), C && C(Q);
  }), ke = B("start", V), ze = B("stop", te), at = B("stop", L), rr = B("stop", (Q) => {
    G(Q), T.current === !1 && z(!1), v && v(Q);
  }, !1), pt = ut((Q) => {
    Z.current || (Z.current = Q.currentTarget), N(Q), T.current === !0 && (z(!0), _ && _(Q)), w && w(Q);
  }), jt = () => {
    const Q = Z.current;
    return l && l !== "button" && !(Q.tagName === "A" && Q.href);
  }, At = E.useRef(!1), Mt = ut((Q) => {
    m && !At.current && M && j.current && Q.key === " " && (At.current = !0, j.current.stop(Q, () => {
      j.current.start(Q);
    })), Q.target === Q.currentTarget && jt() && Q.key === " " && Q.preventDefault(), S && S(Q), Q.target === Q.currentTarget && jt() && Q.key === "Enter" && !u && (Q.preventDefault(), h && h(Q));
  }), Kr = ut((Q) => {
    m && Q.key === " " && j.current && M && !Q.defaultPrevented && (At.current = !1, j.current.stop(Q, () => {
      j.current.pulsate(Q);
    })), y && y(Q), h && Q.target === Q.currentTarget && jt() && Q.key === " " && !Q.defaultPrevented && h(Q);
  });
  let mt = l;
  mt === "button" && (D.href || D.to) && (mt = b);
  const nt = {};
  mt === "button" ? (nt.type = re === void 0 ? "button" : re, nt.disabled = u) : (!D.href && !D.to && (nt.role = "button"), u && (nt["aria-disabled"] = u));
  const nr = et(r, q, Z);
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    Y && !j.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [Y]);
  const ot = x({}, n, {
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: p,
    focusRipple: m,
    tabIndex: J,
    focusVisible: M
  }), Xr = Md(ot);
  return /* @__PURE__ */ X.jsxs(Id, x({
    as: mt,
    className: me(Xr.root, c),
    ownerState: ot,
    onBlur: rr,
    onClick: h,
    onContextMenu: ye,
    onFocus: pt,
    onKeyDown: Mt,
    onKeyUp: Kr,
    onMouseDown: K,
    onMouseLeave: A,
    onMouseUp: ve,
    onDragLeave: P,
    onTouchEnd: ze,
    onTouchMove: at,
    onTouchStart: ke,
    ref: nr,
    tabIndex: u ? -1 : J,
    type: re
  }, nt, D, {
    children: [s, Y ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ X.jsx($d, x({
        ref: de,
        center: i
      }, W))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ws.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: fu,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: a.bool,
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: cu,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: a.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: a.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: a.string,
  /**
   * @ignore
   */
  href: a.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: a.elementType,
  /**
   * @ignore
   */
  onBlur: a.func,
  /**
   * @ignore
   */
  onClick: a.func,
  /**
   * @ignore
   */
  onContextMenu: a.func,
  /**
   * @ignore
   */
  onDragLeave: a.func,
  /**
   * @ignore
   */
  onFocus: a.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: a.func,
  /**
   * @ignore
   */
  onKeyDown: a.func,
  /**
   * @ignore
   */
  onKeyUp: a.func,
  /**
   * @ignore
   */
  onMouseDown: a.func,
  /**
   * @ignore
   */
  onMouseLeave: a.func,
  /**
   * @ignore
   */
  onMouseUp: a.func,
  /**
   * @ignore
   */
  onTouchEnd: a.func,
  /**
   * @ignore
   */
  onTouchMove: a.func,
  /**
   * @ignore
   */
  onTouchStart: a.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @default 0
   */
  tabIndex: a.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: a.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: a.oneOfType([a.func, a.shape({
    current: a.shape({
      pulsate: a.func.isRequired,
      start: a.func.isRequired,
      stop: a.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: a.oneOfType([a.oneOf(["button", "reset", "submit"]), a.string])
});
const Dd = ws;
function Fd(e) {
  return Be("MuiIconButton", e);
}
const Vd = qe("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Ld = Vd, Bd = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], zd = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, s = {
    root: ["root", r && "disabled", n !== "default" && `color${Se(n)}`, o && `edge${Se(o)}`, `size${Se(i)}`]
  };
  return Xe(s, Fd, t);
}, Ud = Pe(Dd, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${Se(r.color)}`], r.edge && t[`edge${Se(r.edge)}`], t[`size${Se(r.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Xt(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var r;
  const n = (r = (e.vars || e).palette) == null ? void 0 : r[t.color];
  return x({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && x({
    color: n == null ? void 0 : n.main
  }, !t.disableRipple && {
    "&:hover": x({}, n && {
      backgroundColor: e.vars ? `rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Xt(n.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${Ld.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Cs = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: f = "medium"
  } = n, p = ge(n, Bd), m = x({}, n, {
    edge: o,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    size: f
  }), b = zd(m);
  return /* @__PURE__ */ X.jsx(Ud, x({
    className: me(b.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: r
  }, p, {
    ownerState: m,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (Cs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Pt(a.node, (e) => E.Children.toArray(e.children).some((r) => /* @__PURE__ */ E.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: a.oneOfType([a.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: a.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: a.oneOfType([a.oneOf(["small", "medium", "large"]), a.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const hi = Cs;
function Wd(e) {
  return Be("MuiTypography", e);
}
qe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const qd = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Yd = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: s
  } = e, c = {
    root: ["root", i, e.align !== "inherit" && `align${Se(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return Xe(c, Wd, s);
}, Hd = Pe("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${Se(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), gi = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Gd = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Kd = (e) => Gd[e] || e, Ps = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiTypography"
  }), o = Kd(n.color), i = Ji(x({}, n, {
    color: o
  })), {
    align: s = "inherit",
    className: c,
    component: l,
    gutterBottom: u = !1,
    noWrap: f = !1,
    paragraph: p = !1,
    variant: m = "body1",
    variantMapping: b = gi
  } = i, v = ge(i, qd), h = x({}, i, {
    align: s,
    color: o,
    className: c,
    component: l,
    gutterBottom: u,
    noWrap: f,
    paragraph: p,
    variant: m,
    variantMapping: b
  }), g = l || (p ? "p" : b[m] || gi[m]) || "span", R = Yd(h);
  return /* @__PURE__ */ X.jsx(Hd, x({
    as: g,
    ref: r,
    ownerState: h,
    className: me(R.root, c)
  }, v));
});
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: a.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: a.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: a.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: a.oneOfType([a.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), a.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: a.object
});
const Xd = Ps, Jd = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Zd(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Qd(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function ep(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Qd(e));
}
function tp(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(Jd)).forEach((n, o) => {
    const i = Zd(n);
    i === -1 || !ep(n) || (i === 0 ? t.push(n) : r.push({
      documentOrder: o,
      tabIndex: i,
      node: n
    }));
  }), r.sort((n, o) => n.tabIndex === o.tabIndex ? n.documentOrder - o.documentOrder : n.tabIndex - o.tabIndex).map((n) => n.node).concat(t);
}
function rp() {
  return !0;
}
function Sr(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = tp,
    isEnabled: s = rp,
    open: c
  } = e, l = E.useRef(!1), u = E.useRef(null), f = E.useRef(null), p = E.useRef(null), m = E.useRef(null), b = E.useRef(!1), v = E.useRef(null), h = et(t.ref, v), g = E.useRef(null);
  E.useEffect(() => {
    !c || !v.current || (b.current = !r);
  }, [r, c]), E.useEffect(() => {
    if (!c || !v.current)
      return;
    const _ = Ze(v.current);
    return v.current.contains(_.activeElement) || (v.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), v.current.setAttribute("tabIndex", "-1")), b.current && v.current.focus()), () => {
      o || (p.current && p.current.focus && (l.current = !0, p.current.focus()), p.current = null);
    };
  }, [c]), E.useEffect(() => {
    if (!c || !v.current)
      return;
    const _ = Ze(v.current), S = (C) => {
      g.current = C, !(n || !s() || C.key !== "Tab") && _.activeElement === v.current && C.shiftKey && (l.current = !0, f.current && f.current.focus());
    }, y = () => {
      const C = v.current;
      if (C === null)
        return;
      if (!_.hasFocus() || !s() || l.current) {
        l.current = !1;
        return;
      }
      if (C.contains(_.activeElement) || n && _.activeElement !== u.current && _.activeElement !== f.current)
        return;
      if (_.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!b.current)
        return;
      let ee = [];
      if ((_.activeElement === u.current || _.activeElement === f.current) && (ee = i(v.current)), ee.length > 0) {
        var te, L;
        const V = !!((te = g.current) != null && te.shiftKey && ((L = g.current) == null ? void 0 : L.key) === "Tab"), J = ee[0], W = ee[ee.length - 1];
        typeof J != "string" && typeof W != "string" && (V ? W.focus() : J.focus());
      } else
        C.focus();
    };
    _.addEventListener("focusin", y), _.addEventListener("keydown", S, !0);
    const k = setInterval(() => {
      _.activeElement && _.activeElement.tagName === "BODY" && y();
    }, 50);
    return () => {
      clearInterval(k), _.removeEventListener("focusin", y), _.removeEventListener("keydown", S, !0);
    };
  }, [r, n, o, s, c, i]);
  const R = (_) => {
    p.current === null && (p.current = _.relatedTarget), b.current = !0, m.current = _.target;
    const S = t.props.onFocus;
    S && S(_);
  }, w = (_) => {
    p.current === null && (p.current = _.relatedTarget), b.current = !0;
  };
  return /* @__PURE__ */ X.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ X.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: h,
      onFocus: R
    }), /* @__PURE__ */ X.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: w,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Sr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Ur,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: a.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: a.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: a.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: a.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: a.func,
  /**
   * If `true`, focus is locked.
   */
  open: a.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Sr["propTypes"] = is(Sr.propTypes));
function np(e) {
  return typeof e == "function" ? e() : e;
}
const wr = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [s, c] = E.useState(null), l = et(/* @__PURE__ */ E.isValidElement(n) ? n.ref : null, r);
  if (xr(() => {
    i || c(np(o) || document.body);
  }, [o, i]), xr(() => {
    if (s && !i)
      return Tr(r, s), () => {
        Tr(r, null);
      };
  }, [r, s, i]), i) {
    if (/* @__PURE__ */ E.isValidElement(n)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ E.cloneElement(n, u);
    }
    return /* @__PURE__ */ X.jsx(E.Fragment, {
      children: n
    });
  }
  return /* @__PURE__ */ X.jsx(E.Fragment, {
    children: s && /* @__PURE__ */ ia.createPortal(n, s)
  });
});
process.env.NODE_ENV !== "production" && (wr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: a.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([Un, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool
});
process.env.NODE_ENV !== "production" && (wr["propTypes"] = is(wr.propTypes));
function op(e) {
  const t = Ze(e);
  return t.body === e ? $t(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Wt(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function yi(e) {
  return parseInt($t(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function ip(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function bi(e, t, r, n, o) {
  const i = [t, r, ...n];
  [].forEach.call(e.children, (s) => {
    const c = i.indexOf(s) === -1, l = !ip(s);
    c && l && Wt(s, o);
  });
}
function dn(e, t) {
  let r = -1;
  return e.some((n, o) => t(n) ? (r = o, !0) : !1), r;
}
function sp(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (op(n)) {
      const s = $u(Ze(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${yi(n) + s}px`;
      const c = Ze(n).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        r.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${yi(l) + s}px`;
      });
    }
    let i;
    if (n.parentNode instanceof DocumentFragment)
      i = Ze(n).body;
    else {
      const s = n.parentElement, c = $t(n);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && c.getComputedStyle(s).overflowY === "scroll" ? s : n;
    }
    r.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    r.forEach(({
      value: i,
      el: s,
      property: c
    }) => {
      i ? s.style.setProperty(c, i) : s.style.removeProperty(c);
    });
  };
}
function ap(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class cp {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && Wt(t.modalRef, !1);
    const o = ap(r);
    bi(r, t.mount, t.modalRef, o, !0);
    const i = dn(this.containers, (s) => s.container === r);
    return i !== -1 ? (this.containers[i].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: o
    }), n);
  }
  mount(t, r) {
    const n = dn(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[n];
    o.restore || (o.restore = sp(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const o = dn(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(n, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Wt(t.modalRef, r), bi(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Wt(s.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function lp(e) {
  return typeof e == "function" ? e() : e;
}
function up(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const fp = new cp();
function dp(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = fp,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: c,
    children: l,
    onClose: u,
    open: f,
    rootRef: p
  } = e, m = E.useRef({}), b = E.useRef(null), v = E.useRef(null), h = et(v, p), [g, R] = E.useState(!f), w = up(l);
  let _ = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (_ = !1);
  const S = () => Ze(b.current), y = () => (m.current.modalRef = v.current, m.current.mount = b.current, m.current), k = () => {
    o.mount(y(), {
      disableScrollLock: n
    }), v.current && (v.current.scrollTop = 0);
  }, C = ut(() => {
    const D = lp(t) || S().body;
    o.add(y(), D), v.current && k();
  }), ee = E.useCallback(() => o.isTopModal(y()), [o]), te = ut((D) => {
    b.current = D, D && (f && ee() ? k() : v.current && Wt(v.current, _));
  }), L = E.useCallback(() => {
    o.remove(y(), _);
  }, [_, o]);
  E.useEffect(() => () => {
    L();
  }, [L]), E.useEffect(() => {
    f ? C() : (!w || !i) && L();
  }, [f, L, w, i, C]);
  const V = (D) => (Z) => {
    var j;
    (j = D.onKeyDown) == null || j.call(D, Z), !(Z.key !== "Escape" || Z.which === 229 || // Wait until IME is settled.
    !ee()) && (r || (Z.stopPropagation(), u && u(Z, "escapeKeyDown")));
  }, J = (D) => (Z) => {
    var j;
    (j = D.onClick) == null || j.call(D, Z), Z.target === Z.currentTarget && u && u(Z, "backdropClick");
  };
  return {
    getRootProps: (D = {}) => {
      const Z = _s(e);
      delete Z.onTransitionEnter, delete Z.onTransitionExited;
      const j = x({}, Z, D);
      return x({
        role: "presentation"
      }, j, {
        onKeyDown: V(j),
        ref: h
      });
    },
    getBackdropProps: (D = {}) => {
      const Z = D;
      return x({
        "aria-hidden": !0
      }, Z, {
        onClick: J(Z),
        open: f
      });
    },
    getTransitionProps: () => {
      const D = () => {
        R(!1), s && s();
      }, Z = () => {
        R(!0), c && c(), i && L();
      };
      return {
        onEnter: En(D, l == null ? void 0 : l.props.onEnter),
        onExited: En(Z, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: h,
    portalRef: te,
    isTopModal: ee,
    exited: g,
    hasTransition: w
  };
}
const pp = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], mp = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, $s = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Hr(), o = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: c,
    easing: l,
    in: u,
    onEnter: f,
    onEntered: p,
    onEntering: m,
    onExit: b,
    onExited: v,
    onExiting: h,
    style: g,
    timeout: R = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = xs
  } = t, _ = ge(t, pp), S = E.useRef(null), y = et(S, c.ref, r), k = (I) => (re) => {
    if (I) {
      const D = S.current;
      re === void 0 ? I(D) : I(D, re);
    }
  }, C = k(m), ee = k((I, re) => {
    Ts(I);
    const D = Or({
      style: g,
      timeout: R,
      easing: l
    }, {
      mode: "enter"
    });
    I.style.webkitTransition = n.transitions.create("opacity", D), I.style.transition = n.transitions.create("opacity", D), f && f(I, re);
  }), te = k(p), L = k(h), V = k((I) => {
    const re = Or({
      style: g,
      timeout: R,
      easing: l
    }, {
      mode: "exit"
    });
    I.style.webkitTransition = n.transitions.create("opacity", re), I.style.transition = n.transitions.create("opacity", re), b && b(I);
  }), J = k(v), W = (I) => {
    i && i(S.current, I);
  };
  return /* @__PURE__ */ X.jsx(w, x({
    appear: s,
    in: u,
    nodeRef: S,
    onEnter: ee,
    onEntered: te,
    onEntering: C,
    onExit: V,
    onExited: J,
    onExiting: L,
    addEndListener: W,
    timeout: R
  }, _, {
    children: (I, re) => /* @__PURE__ */ E.cloneElement(c, x({
      style: x({
        opacity: 0,
        visibility: I === "exited" && !u ? "hidden" : void 0
      }, mp[I], g, c.props.style),
      ref: y
    }, re))
  }));
});
process.env.NODE_ENV !== "production" && ($s.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: a.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: a.bool,
  /**
   * A single child content element.
   */
  children: Ur.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: a.oneOfType([a.shape({
    enter: a.string,
    exit: a.string
  }), a.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: a.bool,
  /**
   * @ignore
   */
  onEnter: a.func,
  /**
   * @ignore
   */
  onEntered: a.func,
  /**
   * @ignore
   */
  onEntering: a.func,
  /**
   * @ignore
   */
  onExit: a.func,
  /**
   * @ignore
   */
  onExited: a.func,
  /**
   * @ignore
   */
  onExiting: a.func,
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: a.oneOfType([a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
const hp = $s;
function gp(e) {
  return Be("MuiBackdrop", e);
}
qe("MuiBackdrop", ["root", "invisible"]);
const vp = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], yp = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return Xe({
    root: ["root", r && "invisible"]
  }, gp, t);
}, bp = Pe("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => x({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), Ns = /* @__PURE__ */ E.forwardRef(function(t, r) {
  var n, o, i;
  const s = Ye({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: c,
    className: l,
    component: u = "div",
    components: f = {},
    componentsProps: p = {},
    invisible: m = !1,
    open: b,
    slotProps: v = {},
    slots: h = {},
    TransitionComponent: g = hp,
    transitionDuration: R
  } = s, w = ge(s, vp), _ = x({}, s, {
    component: u,
    invisible: m
  }), S = yp(_), y = (n = v.root) != null ? n : p.root;
  return /* @__PURE__ */ X.jsx(g, x({
    in: b,
    timeout: R
  }, w, {
    children: /* @__PURE__ */ X.jsx(bp, x({
      "aria-hidden": !0
    }, y, {
      as: (o = (i = h.root) != null ? i : f.Root) != null ? o : u,
      className: me(S.root, l, y == null ? void 0 : y.className),
      ownerState: x({}, _, y == null ? void 0 : y.ownerState),
      classes: S,
      ref: r,
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ns.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: a.shape({
    Root: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: a.shape({
    root: a.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: a.bool,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: a.shape({
    root: a.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: a.shape({
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: a.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: a.oneOfType([a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
const Ep = Ns;
function xp(e) {
  return Be("MuiModal", e);
}
qe("MuiModal", ["root", "hidden", "backdrop"]);
const Tp = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Rp = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return Xe({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, xp, n);
}, _p = Pe("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Op = Pe(Ep, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), ks = /* @__PURE__ */ E.forwardRef(function(t, r) {
  var n, o, i, s, c, l;
  const u = Ye({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: f = Op,
    BackdropProps: p,
    className: m,
    closeAfterTransition: b = !1,
    children: v,
    container: h,
    component: g,
    components: R = {},
    componentsProps: w = {},
    disableAutoFocus: _ = !1,
    disableEnforceFocus: S = !1,
    disableEscapeKeyDown: y = !1,
    disablePortal: k = !1,
    disableRestoreFocus: C = !1,
    disableScrollLock: ee = !1,
    hideBackdrop: te = !1,
    keepMounted: L = !1,
    onBackdropClick: V,
    open: J,
    slotProps: W,
    slots: I
    // eslint-disable-next-line react/prop-types
  } = u, re = ge(u, Tp), D = x({}, u, {
    closeAfterTransition: b,
    disableAutoFocus: _,
    disableEnforceFocus: S,
    disableEscapeKeyDown: y,
    disablePortal: k,
    disableRestoreFocus: C,
    disableScrollLock: ee,
    hideBackdrop: te,
    keepMounted: L
  }), {
    getRootProps: Z,
    getBackdropProps: j,
    getTransitionProps: de,
    portalRef: T,
    isTopModal: N,
    exited: G,
    hasTransition: q
  } = dp(x({}, D, {
    rootRef: r
  })), M = x({}, D, {
    exited: G
  }), z = Rp(M), F = {};
  if (v.props.tabIndex === void 0 && (F.tabIndex = "-1"), q) {
    const {
      onEnter: ve,
      onExited: A
    } = de();
    F.onEnter = ve, F.onExited = A;
  }
  const U = (n = (o = I == null ? void 0 : I.root) != null ? o : R.Root) != null ? n : _p, Y = (i = (s = I == null ? void 0 : I.backdrop) != null ? s : R.Backdrop) != null ? i : f, B = (c = W == null ? void 0 : W.root) != null ? c : w.root, K = (l = W == null ? void 0 : W.backdrop) != null ? l : w.backdrop, ye = ui({
    elementType: U,
    externalSlotProps: B,
    externalForwardedProps: re,
    getSlotProps: Z,
    additionalProps: {
      ref: r,
      as: g
    },
    ownerState: M,
    className: me(m, B == null ? void 0 : B.className, z == null ? void 0 : z.root, !M.open && M.exited && (z == null ? void 0 : z.hidden))
  }), P = ui({
    elementType: Y,
    externalSlotProps: K,
    additionalProps: p,
    getSlotProps: (ve) => j(x({}, ve, {
      onClick: (A) => {
        V && V(A), ve != null && ve.onClick && ve.onClick(A);
      }
    })),
    className: me(K == null ? void 0 : K.className, p == null ? void 0 : p.className, z == null ? void 0 : z.backdrop),
    ownerState: M
  });
  return !L && !J && (!q || G) ? null : /* @__PURE__ */ X.jsx(wr, {
    ref: T,
    container: h,
    disablePortal: k,
    children: /* @__PURE__ */ X.jsxs(U, x({}, ye, {
      children: [!te && f ? /* @__PURE__ */ X.jsx(Y, x({}, P)) : null, /* @__PURE__ */ X.jsx(Sr, {
        disableEnforceFocus: S,
        disableAutoFocus: _,
        disableRestoreFocus: C,
        isEnabled: N,
        open: J,
        children: /* @__PURE__ */ E.cloneElement(v, F)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (ks.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: a.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: a.object,
  /**
   * A single child content element.
   */
  children: Ur.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: a.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: a.shape({
    Backdrop: a.elementType,
    Root: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: a.shape({
    backdrop: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([Un, a.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: a.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: a.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: a.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: a.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: a.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: a.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: a.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: a.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: a.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: a.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: a.func,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: a.shape({
    backdrop: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    backdrop: a.elementType,
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
const Sp = ks;
function wp(e) {
  return Be("MuiDivider", e);
}
qe("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
const Cp = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], Pp = (e) => {
  const {
    absolute: t,
    children: r,
    classes: n,
    flexItem: o,
    light: i,
    orientation: s,
    textAlign: c,
    variant: l
  } = e;
  return Xe({
    root: ["root", t && "absolute", l, i && "light", s === "vertical" && "vertical", o && "flexItem", r && "withChildren", r && s === "vertical" && "withChildrenVertical", c === "right" && s !== "vertical" && "textAlignRight", c === "left" && s !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", s === "vertical" && "wrapperVertical"]
  }, wp, n);
}, $p = Pe("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.absolute && t.absolute, t[r.variant], r.light && t.light, r.orientation === "vertical" && t.vertical, r.flexItem && t.flexItem, r.children && t.withChildren, r.children && r.orientation === "vertical" && t.withChildrenVertical, r.textAlign === "right" && r.orientation !== "vertical" && t.textAlignRight, r.textAlign === "left" && r.orientation !== "vertical" && t.textAlignLeft];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (e.vars || e).palette.divider,
  borderBottomWidth: "thin"
}, t.absolute && {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%"
}, t.light && {
  borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : Xt(e.palette.divider, 0.08)
}, t.variant === "inset" && {
  marginLeft: 72
}, t.variant === "middle" && t.orientation === "horizontal" && {
  marginLeft: e.spacing(2),
  marginRight: e.spacing(2)
}, t.variant === "middle" && t.orientation === "vertical" && {
  marginTop: e.spacing(1),
  marginBottom: e.spacing(1)
}, t.orientation === "vertical" && {
  height: "100%",
  borderBottomWidth: 0,
  borderRightWidth: "thin"
}, t.flexItem && {
  alignSelf: "stretch",
  height: "auto"
}), ({
  ownerState: e
}) => x({}, e.children && {
  display: "flex",
  whiteSpace: "nowrap",
  textAlign: "center",
  border: 0,
  "&::before, &::after": {
    content: '""',
    alignSelf: "center"
  }
}), ({
  theme: e,
  ownerState: t
}) => x({}, t.children && t.orientation !== "vertical" && {
  "&::before, &::after": {
    width: "100%",
    borderTop: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  theme: e,
  ownerState: t
}) => x({}, t.children && t.orientation === "vertical" && {
  flexDirection: "column",
  "&::before, &::after": {
    height: "100%",
    borderLeft: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  ownerState: e
}) => x({}, e.textAlign === "right" && e.orientation !== "vertical" && {
  "&::before": {
    width: "90%"
  },
  "&::after": {
    width: "10%"
  }
}, e.textAlign === "left" && e.orientation !== "vertical" && {
  "&::before": {
    width: "10%"
  },
  "&::after": {
    width: "90%"
  }
})), Np = Pe("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.wrapper, r.orientation === "vertical" && t.wrapperVertical];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`
}, t.orientation === "vertical" && {
  paddingTop: `calc(${e.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${e.spacing(1)} * 1.2)`
})), Jn = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: o = !1,
    children: i,
    className: s,
    component: c = i ? "div" : "hr",
    flexItem: l = !1,
    light: u = !1,
    orientation: f = "horizontal",
    role: p = c !== "hr" ? "separator" : void 0,
    textAlign: m = "center",
    variant: b = "fullWidth"
  } = n, v = ge(n, Cp), h = x({}, n, {
    absolute: o,
    component: c,
    flexItem: l,
    light: u,
    orientation: f,
    role: p,
    textAlign: m,
    variant: b
  }), g = Pp(h);
  return /* @__PURE__ */ X.jsx($p, x({
    as: c,
    className: me(g.root, s),
    role: p,
    ref: r,
    ownerState: h
  }, v, {
    children: i ? /* @__PURE__ */ X.jsx(Np, {
      className: g.wrapper,
      ownerState: h,
      children: i
    }) : null
  }));
});
Jn.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (Jn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: a.bool,
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: a.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   * @deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)
   */
  light: a.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: a.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: a.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: a.oneOf(["center", "left", "right"]),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: a.oneOfType([a.oneOf(["fullWidth", "inset", "middle"]), a.string])
});
const kp = Jn, jp = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Ap(e, t, r) {
  const n = t.getBoundingClientRect(), o = r && r.getBoundingClientRect(), i = $t(t);
  let s;
  if (t.fakeTransform)
    s = t.fakeTransform;
  else {
    const u = i.getComputedStyle(t);
    s = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let c = 0, l = 0;
  if (s && s !== "none" && typeof s == "string") {
    const u = s.split("(")[1].split(")")[0].split(",");
    c = parseInt(u[4], 10), l = parseInt(u[5], 10);
  }
  return e === "left" ? o ? `translateX(${o.right + c - n.left}px)` : `translateX(${i.innerWidth + c - n.left}px)` : e === "right" ? o ? `translateX(-${n.right - o.left - c}px)` : `translateX(-${n.left + n.width - c}px)` : e === "up" ? o ? `translateY(${o.bottom + l - n.top}px)` : `translateY(${i.innerHeight + l - n.top}px)` : o ? `translateY(-${n.top - o.top + n.height - l}px)` : `translateY(-${n.top + n.height - l}px)`;
}
function js(e) {
  return typeof e == "function" ? e() : e;
}
function ur(e, t, r) {
  const n = js(r), o = Ap(e, t, n);
  o && (t.style.webkitTransform = o, t.style.transform = o);
}
const As = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Hr(), o = {
    enter: n.transitions.easing.easeOut,
    exit: n.transitions.easing.sharp
  }, i = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: c = !0,
    children: l,
    container: u,
    direction: f = "down",
    easing: p = o,
    in: m,
    onEnter: b,
    onEntered: v,
    onEntering: h,
    onExit: g,
    onExited: R,
    onExiting: w,
    style: _,
    timeout: S = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = xs
  } = t, k = ge(t, jp), C = E.useRef(null), ee = et(l.ref, C, r), te = (j) => (de) => {
    j && (de === void 0 ? j(C.current) : j(C.current, de));
  }, L = te((j, de) => {
    ur(f, j, u), Ts(j), b && b(j, de);
  }), V = te((j, de) => {
    const T = Or({
      timeout: S,
      style: _,
      easing: p
    }, {
      mode: "enter"
    });
    j.style.webkitTransition = n.transitions.create("-webkit-transform", x({}, T)), j.style.transition = n.transitions.create("transform", x({}, T)), j.style.webkitTransform = "none", j.style.transform = "none", h && h(j, de);
  }), J = te(v), W = te(w), I = te((j) => {
    const de = Or({
      timeout: S,
      style: _,
      easing: p
    }, {
      mode: "exit"
    });
    j.style.webkitTransition = n.transitions.create("-webkit-transform", de), j.style.transition = n.transitions.create("transform", de), ur(f, j, u), g && g(j);
  }), re = te((j) => {
    j.style.webkitTransition = "", j.style.transition = "", R && R(j);
  }), D = (j) => {
    s && s(C.current, j);
  }, Z = E.useCallback(() => {
    C.current && ur(f, C.current, u);
  }, [f, u]);
  return E.useEffect(() => {
    if (m || f === "down" || f === "right")
      return;
    const j = ss(() => {
      C.current && ur(f, C.current, u);
    }), de = $t(C.current);
    return de.addEventListener("resize", j), () => {
      j.clear(), de.removeEventListener("resize", j);
    };
  }, [f, m, u]), E.useEffect(() => {
    m || Z();
  }, [m, Z]), /* @__PURE__ */ X.jsx(y, x({
    nodeRef: C,
    onEnter: L,
    onEntered: J,
    onEntering: V,
    onExit: I,
    onExited: re,
    onExiting: W,
    addEndListener: D,
    appear: c,
    in: m,
    timeout: S
  }, k, {
    children: (j, de) => /* @__PURE__ */ E.cloneElement(l, x({
      ref: ee,
      style: x({
        visibility: j === "exited" && !m ? "hidden" : void 0
      }, _, l.props.style)
    }, de))
  }));
});
process.env.NODE_ENV !== "production" && (As.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: a.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: a.bool,
  /**
   * A single child content element.
   */
  children: Ur.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Pt(a.oneOfType([Un, a.func]), (e) => {
    if (e.open) {
      const t = js(e.container);
      if (t && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: a.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: a.oneOfType([a.shape({
    enter: a.string,
    exit: a.string
  }), a.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: a.bool,
  /**
   * @ignore
   */
  onEnter: a.func,
  /**
   * @ignore
   */
  onEntered: a.func,
  /**
   * @ignore
   */
  onEntering: a.func,
  /**
   * @ignore
   */
  onExit: a.func,
  /**
   * @ignore
   */
  onExited: a.func,
  /**
   * @ignore
   */
  onExiting: a.func,
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: a.oneOfType([a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
const Mp = As;
function Ip(e) {
  return Be("MuiDrawer", e);
}
qe("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const Dp = ["BackdropProps"], Fp = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], Ms = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, (r.variant === "permanent" || r.variant === "persistent") && t.docked, t.modal];
}, Vp = (e) => {
  const {
    classes: t,
    anchor: r,
    variant: n
  } = e, o = {
    root: ["root"],
    docked: [(n === "permanent" || n === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${Se(r)}`, n !== "temporary" && `paperAnchorDocked${Se(r)}`]
  };
  return Xe(o, Ip, t);
}, Lp = Pe(Sp, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Ms
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), Ei = Pe("div", {
  shouldForwardProp: bs,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Ms
})({
  flex: "0 0 auto"
}), Bp = Pe(gd, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.paper, t[`paperAnchor${Se(r.anchor)}`], r.variant !== "temporary" && t[`paperAnchorDocked${Se(r.anchor)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0
}, t.anchor === "left" && {
  left: 0
}, t.anchor === "top" && {
  top: 0,
  left: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "right" && {
  right: 0
}, t.anchor === "bottom" && {
  top: "auto",
  left: 0,
  bottom: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "left" && t.variant !== "temporary" && {
  borderRight: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "top" && t.variant !== "temporary" && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "right" && t.variant !== "temporary" && {
  borderLeft: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "bottom" && t.variant !== "temporary" && {
  borderTop: `1px solid ${(e.vars || e).palette.divider}`
})), Is = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function zp(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function Up({
  direction: e
}, t) {
  return e === "rtl" && zp(t) ? Is[t] : t;
}
const Ds = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiDrawer"
  }), o = Hr(), i = Mu(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    anchor: c = "left",
    BackdropProps: l,
    children: u,
    className: f,
    elevation: p = 16,
    hideBackdrop: m = !1,
    ModalProps: {
      BackdropProps: b
    } = {},
    onClose: v,
    open: h = !1,
    PaperProps: g = {},
    SlideProps: R,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = Mp,
    transitionDuration: _ = s,
    variant: S = "temporary"
  } = n, y = ge(n.ModalProps, Dp), k = ge(n, Fp), C = E.useRef(!1);
  E.useEffect(() => {
    C.current = !0;
  }, []);
  const ee = Up({
    direction: i ? "rtl" : "ltr"
  }, c), L = x({}, n, {
    anchor: c,
    elevation: p,
    open: h,
    variant: S
  }, k), V = Vp(L), J = /* @__PURE__ */ X.jsx(Bp, x({
    elevation: S === "temporary" ? p : 0,
    square: !0
  }, g, {
    className: me(V.paper, g.className),
    ownerState: L,
    children: u
  }));
  if (S === "permanent")
    return /* @__PURE__ */ X.jsx(Ei, x({
      className: me(V.root, V.docked, f),
      ownerState: L,
      ref: r
    }, k, {
      children: J
    }));
  const W = /* @__PURE__ */ X.jsx(w, x({
    in: h,
    direction: Is[ee],
    timeout: _,
    appear: C.current
  }, R, {
    children: J
  }));
  return S === "persistent" ? /* @__PURE__ */ X.jsx(Ei, x({
    className: me(V.root, V.docked, f),
    ownerState: L,
    ref: r
  }, k, {
    children: W
  })) : /* @__PURE__ */ X.jsx(Lp, x({
    BackdropProps: x({}, l, b, {
      transitionDuration: _
    }),
    className: me(V.root, V.modal, f),
    open: h,
    ownerState: L,
    onClose: v,
    hideBackdrop: m,
    ref: r
  }, k, y, {
    children: W
  }));
});
process.env.NODE_ENV !== "production" && (Ds.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: a.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: a.object,
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: us,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: a.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: a.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: a.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: a.bool,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: a.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: a.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: a.oneOfType([a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: a.oneOf(["permanent", "persistent", "temporary"])
});
const Wp = Ds;
function qp(e) {
  return Be("MuiToolbar", e);
}
qe("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const Yp = ["className", "component", "disableGutters", "variant"], Hp = (e) => {
  const {
    classes: t,
    disableGutters: r,
    variant: n
  } = e;
  return Xe({
    root: ["root", !r && "gutters", n]
  }, qp, t);
}, Gp = Pe("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disableGutters && t.gutters, t[r.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  position: "relative",
  display: "flex",
  alignItems: "center"
}, !t.disableGutters && {
  paddingLeft: e.spacing(2),
  paddingRight: e.spacing(2),
  [e.breakpoints.up("sm")]: {
    paddingLeft: e.spacing(3),
    paddingRight: e.spacing(3)
  }
}, t.variant === "dense" && {
  minHeight: 48
}), ({
  theme: e,
  ownerState: t
}) => t.variant === "regular" && e.mixins.toolbar), Fs = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiToolbar"
  }), {
    className: o,
    component: i = "div",
    disableGutters: s = !1,
    variant: c = "regular"
  } = n, l = ge(n, Yp), u = x({}, n, {
    component: i,
    disableGutters: s,
    variant: c
  }), f = Hp(u);
  return /* @__PURE__ */ X.jsx(Gp, x({
    as: i,
    className: me(f.root, o),
    ref: r,
    ownerState: u
  }, l));
});
process.env.NODE_ENV !== "production" && (Fs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: a.oneOfType([a.oneOf(["dense", "regular"]), a.string])
});
const Kp = Fs;
var Zn = {}, pn = {};
const Xp = /* @__PURE__ */ tt(rd);
var xi;
function Vs() {
  return xi || (xi = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = Xp;
  }(pn)), pn;
}
var Jp = Yr;
Object.defineProperty(Zn, "__esModule", {
  value: !0
});
var Ls = Zn.default = void 0, Zp = Jp(Vs()), Qp = wn();
Ls = Zn.default = (0, Zp.default)(/* @__PURE__ */ (0, Qp.jsx)("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu");
var Qn = {}, em = Yr;
Object.defineProperty(Qn, "__esModule", {
  value: !0
});
var Bs = Qn.default = void 0, tm = em(Vs()), rm = wn();
Bs = Qn.default = (0, tm.default)(/* @__PURE__ */ (0, rm.jsx)("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "ChevronRight");
const im = () => {
  const [e, t] = oa(!1), r = () => {
    t(!0);
  }, n = () => {
    t(!1);
  };
  return /* @__PURE__ */ X.jsxs("div", { children: [
    /* @__PURE__ */ X.jsxs(
      Wp,
      {
        variant: "persistent",
        anchor: "right",
        open: e,
        children: [
          /* @__PURE__ */ X.jsxs(Kp, { sx: { backgroundColor: "primary.main" }, children: [
            /* @__PURE__ */ X.jsx(Xd, { variant: "h6", noWrap: !0, sx: { flexGrow: 1 }, children: "Settings" }),
            /* @__PURE__ */ X.jsx(hi, { onClick: n, children: /* @__PURE__ */ X.jsx(Bs, {}) })
          ] }),
          /* @__PURE__ */ X.jsx(kp, {})
        ]
      }
    ),
    /* @__PURE__ */ X.jsx(hi, { onClick: r, size: "large", sx: { position: "absolute", top: 10, right: 10 }, children: /* @__PURE__ */ X.jsx(Ls, {}) })
  ] });
};
export {
  im as default
};
