import * as E from "react";
import dt, { forwardRef as rl, useContext as nl, Children as ol, isValidElement as Yr, cloneElement as Hr, useState as Wt, useEffect as il } from "react";
import * as sl from "react-dom";
import Ir from "react-dom";
function al(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ot(e) {
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
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var io = { exports: {} }, fr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qo;
function ll() {
  if (Qo)
    return fr;
  Qo = 1;
  var e = dt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var d, p = {}, m = null, x = null;
    u !== void 0 && (m = "" + u), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (x = c.ref);
    for (d in c)
      n.call(c, d) && !s.hasOwnProperty(d) && (p[d] = c[d]);
    if (l && l.defaultProps)
      for (d in c = l.defaultProps, c)
        p[d] === void 0 && (p[d] = c[d]);
    return { $$typeof: t, type: l, key: m, ref: x, props: p, _owner: i.current };
  }
  return fr.Fragment = r, fr.jsx = a, fr.jsxs = a, fr;
}
var pr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ei;
function cl() {
  return ei || (ei = 1, process.env.NODE_ENV !== "production" && function() {
    var e = dt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), y = Symbol.iterator, h = "@@iterator";
    function v(f) {
      if (f === null || typeof f != "object")
        return null;
      var k = y && f[y] || f[h];
      return typeof k == "function" ? k : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(f) {
      {
        for (var k = arguments.length, L = new Array(k > 1 ? k - 1 : 0), ie = 1; ie < k; ie++)
          L[ie - 1] = arguments[ie];
        O("error", f, L);
      }
    }
    function O(f, k, L) {
      {
        var ie = S.ReactDebugCurrentFrame, re = ie.getStackAddendum();
        re !== "" && (k += "%s", L = L.concat([re]));
        var se = L.map(function(ue) {
          return String(ue);
        });
        se.unshift("Warning: " + k), Function.prototype.apply.call(console[f], console, se);
      }
    }
    var R = !1, g = !1, P = !1, T = !1, z = !1, G;
    G = Symbol.for("react.module.reference");
    function U(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === n || f === s || z || f === i || f === u || f === d || T || f === x || R || g || P || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === p || f.$$typeof === a || f.$$typeof === l || f.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === G || f.getModuleId !== void 0));
    }
    function N(f, k, L) {
      var ie = f.displayName;
      if (ie)
        return ie;
      var re = k.displayName || k.name || "";
      return re !== "" ? L + "(" + re + ")" : L;
    }
    function W(f) {
      return f.displayName || "Context";
    }
    function F(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            var k = f;
            return W(k) + ".Consumer";
          case a:
            var L = f;
            return W(L._context) + ".Provider";
          case c:
            return N(f, f.render, "ForwardRef");
          case p:
            var ie = f.displayName || null;
            return ie !== null ? ie : F(f.type) || "Memo";
          case m: {
            var re = f, se = re._payload, ue = re._init;
            try {
              return F(ue(se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, Y = 0, H, q, D, ae, _, V, ne;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function B() {
      {
        if (Y === 0) {
          H = console.log, q = console.info, D = console.warn, ae = console.error, _ = console.group, V = console.groupCollapsed, ne = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: J,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        Y++;
      }
    }
    function ee() {
      {
        if (Y--, Y === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, f, {
              value: H
            }),
            info: I({}, f, {
              value: q
            }),
            warn: I({}, f, {
              value: D
            }),
            error: I({}, f, {
              value: ae
            }),
            group: I({}, f, {
              value: _
            }),
            groupCollapsed: I({}, f, {
              value: V
            }),
            groupEnd: I({}, f, {
              value: ne
            })
          });
        }
        Y < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = S.ReactCurrentDispatcher, Z;
    function te(f, k, L) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (re) {
            var ie = re.stack.trim().match(/\n( *(at )?)/);
            Z = ie && ie[1] || "";
          }
        return `
` + Z + f;
      }
    }
    var Q = !1, oe;
    {
      var Ce = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new Ce();
    }
    function A(f, k) {
      if (!f || Q)
        return "";
      {
        var L = oe.get(f);
        if (L !== void 0)
          return L;
      }
      var ie;
      Q = !0;
      var re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var se;
      se = X.current, X.current = null, B();
      try {
        if (k) {
          var ue = function() {
            throw Error();
          };
          if (Object.defineProperty(ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ue, []);
            } catch (Tt) {
              ie = Tt;
            }
            Reflect.construct(f, [], ue);
          } else {
            try {
              ue.call();
            } catch (Tt) {
              ie = Tt;
            }
            f.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Tt) {
            ie = Tt;
          }
          f();
        }
      } catch (Tt) {
        if (Tt && ie && typeof Tt.stack == "string") {
          for (var le = Tt.stack.split(`
`), _e = ie.stack.split(`
`), je = le.length - 1, Ie = _e.length - 1; je >= 1 && Ie >= 0 && le[je] !== _e[Ie]; )
            Ie--;
          for (; je >= 1 && Ie >= 0; je--, Ie--)
            if (le[je] !== _e[Ie]) {
              if (je !== 1 || Ie !== 1)
                do
                  if (je--, Ie--, Ie < 0 || le[je] !== _e[Ie]) {
                    var tt = `
` + le[je].replace(" at new ", " at ");
                    return f.displayName && tt.includes("<anonymous>") && (tt = tt.replace("<anonymous>", f.displayName)), typeof f == "function" && oe.set(f, tt), tt;
                  }
                while (je >= 1 && Ie >= 0);
              break;
            }
        }
      } finally {
        Q = !1, X.current = se, ee(), Error.prepareStackTrace = re;
      }
      var Ut = f ? f.displayName || f.name : "", Zo = Ut ? te(Ut) : "";
      return typeof f == "function" && oe.set(f, Zo), Zo;
    }
    function ve(f, k, L) {
      return A(f, !1);
    }
    function j(f) {
      var k = f.prototype;
      return !!(k && k.isReactComponent);
    }
    function me(f, k, L) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return A(f, j(f));
      if (typeof f == "string")
        return te(f);
      switch (f) {
        case u:
          return te("Suspense");
        case d:
          return te("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            return ve(f.render);
          case p:
            return me(f.type, k, L);
          case m: {
            var ie = f, re = ie._payload, se = ie._init;
            try {
              return me(se(re), k, L);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, Ve = {}, Be = S.ReactDebugCurrentFrame;
    function mt(f) {
      if (f) {
        var k = f._owner, L = me(f.type, f._source, k ? k.type : null);
        Be.setExtraStackFrame(L);
      } else
        Be.setExtraStackFrame(null);
    }
    function Pe(f, k, L, ie, re) {
      {
        var se = Function.call.bind(ke);
        for (var ue in f)
          if (se(f, ue)) {
            var le = void 0;
            try {
              if (typeof f[ue] != "function") {
                var _e = Error((ie || "React class") + ": " + L + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _e.name = "Invariant Violation", _e;
              }
              le = f[ue](k, ue, ie, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (je) {
              le = je;
            }
            le && !(le instanceof Error) && (mt(re), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", L, ue, typeof le), mt(null)), le instanceof Error && !(le.message in Ve) && (Ve[le.message] = !0, mt(re), w("Failed %s type: %s", L, le.message), mt(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Et(f) {
      return Qe(f);
    }
    function Nt(f) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, L = k && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return L;
      }
    }
    function ht(f) {
      try {
        return ct(f), !1;
      } catch {
        return !0;
      }
    }
    function ct(f) {
      return "" + f;
    }
    function Ct(f) {
      if (ht(f))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nt(f)), ct(f);
    }
    var Ye = S.ReactCurrentOwner, M = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, C, K, ce;
    ce = {};
    function he(f) {
      if (ke.call(f, "ref")) {
        var k = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function fe(f) {
      if (ke.call(f, "key")) {
        var k = Object.getOwnPropertyDescriptor(f, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Ke(f, k) {
      if (typeof f.ref == "string" && Ye.current && k && Ye.current.stateNode !== k) {
        var L = F(Ye.current.type);
        ce[L] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(Ye.current.type), f.ref), ce[L] = !0);
      }
    }
    function et(f, k) {
      {
        var L = function() {
          C || (C = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        L.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function be(f, k) {
      {
        var L = function() {
          K || (K = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        L.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var He = function(f, k, L, ie, re, se, ue) {
      var le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: k,
        ref: L,
        props: ue,
        // Record the component responsible for creating this element.
        _owner: se
      };
      return le._store = {}, Object.defineProperty(le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.freeze && (Object.freeze(le.props), Object.freeze(le)), le;
    };
    function _t(f, k, L, ie, re) {
      {
        var se, ue = {}, le = null, _e = null;
        L !== void 0 && (Ct(L), le = "" + L), fe(k) && (Ct(k.key), le = "" + k.key), he(k) && (_e = k.ref, Ke(k, re));
        for (se in k)
          ke.call(k, se) && !M.hasOwnProperty(se) && (ue[se] = k[se]);
        if (f && f.defaultProps) {
          var je = f.defaultProps;
          for (se in je)
            ue[se] === void 0 && (ue[se] = je[se]);
        }
        if (le || _e) {
          var Ie = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          le && et(ue, Ie), _e && be(ue, Ie);
        }
        return He(f, le, _e, re, ie, Ye.current, ue);
      }
    }
    var Vt = S.ReactCurrentOwner, ar = S.ReactDebugCurrentFrame;
    function xt(f) {
      if (f) {
        var k = f._owner, L = me(f.type, f._source, k ? k.type : null);
        ar.setExtraStackFrame(L);
      } else
        ar.setExtraStackFrame(null);
    }
    var jt;
    jt = !1;
    function Mt(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function lr() {
      {
        if (Vt.current) {
          var f = F(Vt.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function cr(f) {
      {
        if (f !== void 0) {
          var k = f.fileName.replace(/^.*[\\\/]/, ""), L = f.lineNumber;
          return `

Check your code at ` + k + ":" + L + ".";
        }
        return "";
      }
    }
    var Mr = {};
    function ur(f) {
      {
        var k = lr();
        if (!k) {
          var L = typeof f == "string" ? f : f.displayName || f.name;
          L && (k = `

Check the top-level render call using <` + L + ">.");
        }
        return k;
      }
    }
    function Bt(f, k) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var L = ur(k);
        if (Mr[L])
          return;
        Mr[L] = !0;
        var ie = "";
        f && f._owner && f._owner !== Vt.current && (ie = " It was passed a child from " + F(f._owner.type) + "."), xt(f), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, ie), xt(null);
      }
    }
    function zt(f, k) {
      {
        if (typeof f != "object")
          return;
        if (Et(f))
          for (var L = 0; L < f.length; L++) {
            var ie = f[L];
            Mt(ie) && Bt(ie, k);
          }
        else if (Mt(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var re = v(f);
          if (typeof re == "function" && re !== f.entries)
            for (var se = re.call(f), ue; !(ue = se.next()).done; )
              Mt(ue.value) && Bt(ue.value, k);
        }
      }
    }
    function In(f) {
      {
        var k = f.type;
        if (k == null || typeof k == "string")
          return;
        var L;
        if (typeof k == "function")
          L = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === p))
          L = k.propTypes;
        else
          return;
        if (L) {
          var ie = F(k);
          Pe(L, f.props, "prop", ie, f);
        } else if (k.PropTypes !== void 0 && !jt) {
          jt = !0;
          var re = F(k);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dn(f) {
      {
        for (var k = Object.keys(f.props), L = 0; L < k.length; L++) {
          var ie = k[L];
          if (ie !== "children" && ie !== "key") {
            xt(f), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), xt(null);
            break;
          }
        }
        f.ref !== null && (xt(f), w("Invalid attribute `ref` supplied to `React.Fragment`."), xt(null));
      }
    }
    function Ar(f, k, L, ie, re, se) {
      {
        var ue = U(f);
        if (!ue) {
          var le = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = cr(re);
          _e ? le += _e : le += lr();
          var je;
          f === null ? je = "null" : Et(f) ? je = "array" : f !== void 0 && f.$$typeof === t ? (je = "<" + (F(f.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : je = typeof f, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", je, le);
        }
        var Ie = _t(f, k, L, re, se);
        if (Ie == null)
          return Ie;
        if (ue) {
          var tt = k.children;
          if (tt !== void 0)
            if (ie)
              if (Et(tt)) {
                for (var Ut = 0; Ut < tt.length; Ut++)
                  zt(tt[Ut], f);
                Object.freeze && Object.freeze(tt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zt(tt, f);
        }
        return f === n ? Dn(Ie) : In(Ie), Ie;
      }
    }
    function Ln(f, k, L) {
      return Ar(f, k, L, !0);
    }
    function Fn(f, k, L) {
      return Ar(f, k, L, !1);
    }
    var Vn = Fn, dr = Ln;
    pr.Fragment = n, pr.jsx = Vn, pr.jsxs = dr;
  }()), pr;
}
process.env.NODE_ENV === "production" ? io.exports = ll() : io.exports = cl();
var $ = io.exports;
const ul = {
  black: "#000",
  white: "#fff"
}, Tr = ul, dl = {
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
}, qt = dl, fl = {
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
}, Yt = fl, pl = {
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
}, Ht = pl, ml = {
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
}, Gt = ml, hl = {
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
}, Kt = hl, vl = {
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
}, mr = vl, gl = {
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
}, yl = gl;
function Sr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sr
}, Symbol.toStringTag, { value: "Module" })), xo = "$$material";
function b() {
  return b = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, b.apply(this, arguments);
}
function ge(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function xs(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var El = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xl = /* @__PURE__ */ xs(
  function(e) {
    return El.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Tl(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Sl(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ol = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(i) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, s), n.tags.push(i);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Sl(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var s = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      s && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !s;
    }
    if (this.isSpeedy) {
      var a = Tl(i);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch (l) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', l);
      }
    } else
      i.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), ze = "-ms-", tn = "-moz-", Ee = "-webkit-", To = "comm", So = "rule", Oo = "decl", Rl = "@import", Ts = "@keyframes", Cl = "@layer", _l = Math.abs, pn = String.fromCharCode, wl = Object.assign;
function kl(e, t) {
  return Fe(e, 0) ^ 45 ? (((t << 2 ^ Fe(e, 0)) << 2 ^ Fe(e, 1)) << 2 ^ Fe(e, 2)) << 2 ^ Fe(e, 3) : 0;
}
function Ss(e) {
  return e.trim();
}
function Pl(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function xe(e, t, r) {
  return e.replace(t, r);
}
function so(e, t) {
  return e.indexOf(t);
}
function Fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Or(e, t, r) {
  return e.slice(t, r);
}
function gt(e) {
  return e.length;
}
function Ro(e) {
  return e.length;
}
function Dr(e, t) {
  return t.push(e), e;
}
function $l(e, t) {
  return e.map(t).join("");
}
var mn = 1, tr = 1, Os = 0, Ge = 0, De = 0, nr = "";
function hn(e, t, r, n, i, s, a) {
  return { value: e, root: t, parent: r, type: n, props: i, children: s, line: mn, column: tr, length: a, return: "" };
}
function hr(e, t) {
  return wl(hn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Nl() {
  return De;
}
function jl() {
  return De = Ge > 0 ? Fe(nr, --Ge) : 0, tr--, De === 10 && (tr = 1, mn--), De;
}
function Je() {
  return De = Ge < Os ? Fe(nr, Ge++) : 0, tr++, De === 10 && (tr = 1, mn++), De;
}
function bt() {
  return Fe(nr, Ge);
}
function Gr() {
  return Ge;
}
function wr(e, t) {
  return Or(nr, e, t);
}
function Rr(e) {
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
function Rs(e) {
  return mn = tr = 1, Os = gt(nr = e), Ge = 0, [];
}
function Cs(e) {
  return nr = "", e;
}
function Kr(e) {
  return Ss(wr(Ge - 1, ao(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ml(e) {
  for (; (De = bt()) && De < 33; )
    Je();
  return Rr(e) > 2 || Rr(De) > 3 ? "" : " ";
}
function Al(e, t) {
  for (; --t && Je() && !(De < 48 || De > 102 || De > 57 && De < 65 || De > 70 && De < 97); )
    ;
  return wr(e, Gr() + (t < 6 && bt() == 32 && Je() == 32));
}
function ao(e) {
  for (; Je(); )
    switch (De) {
      case e:
        return Ge;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ao(De);
        break;
      case 40:
        e === 41 && ao(e);
        break;
      case 92:
        Je();
        break;
    }
  return Ge;
}
function Il(e, t) {
  for (; Je() && e + De !== 47 + 10; )
    if (e + De === 42 + 42 && bt() === 47)
      break;
  return "/*" + wr(t, Ge - 1) + "*" + pn(e === 47 ? e : Je());
}
function Dl(e) {
  for (; !Rr(bt()); )
    Je();
  return wr(e, Ge);
}
function Ll(e) {
  return Cs(Xr("", null, null, null, [""], e = Rs(e), 0, [0], e));
}
function Xr(e, t, r, n, i, s, a, l, c) {
  for (var u = 0, d = 0, p = a, m = 0, x = 0, y = 0, h = 1, v = 1, S = 1, w = 0, O = "", R = i, g = s, P = n, T = O; v; )
    switch (y = w, w = Je()) {
      case 40:
        if (y != 108 && Fe(T, p - 1) == 58) {
          so(T += xe(Kr(w), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Kr(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Ml(y);
        break;
      case 92:
        T += Al(Gr() - 1, 7);
        continue;
      case 47:
        switch (bt()) {
          case 42:
          case 47:
            Dr(Fl(Il(Je(), Gr()), t, r), c);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * h:
        l[u++] = gt(T) * S;
      case 125 * h:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            v = 0;
          case 59 + d:
            S == -1 && (T = xe(T, /\f/g, "")), x > 0 && gt(T) - p && Dr(x > 32 ? ri(T + ";", n, r, p - 1) : ri(xe(T, " ", "") + ";", n, r, p - 2), c);
            break;
          case 59:
            T += ";";
          default:
            if (Dr(P = ti(T, t, r, u, d, i, l, O, R = [], g = [], p), s), w === 123)
              if (d === 0)
                Xr(T, t, P, P, R, s, p, l, g);
              else
                switch (m === 99 && Fe(T, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xr(e, P, P, n && Dr(ti(e, P, P, 0, 0, i, l, O, i, R = [], p), g), i, g, p, l, n ? R : g);
                    break;
                  default:
                    Xr(T, P, P, P, [""], g, 0, l, g);
                }
        }
        u = d = x = 0, h = S = 1, O = T = "", p = a;
        break;
      case 58:
        p = 1 + gt(T), x = y;
      default:
        if (h < 1) {
          if (w == 123)
            --h;
          else if (w == 125 && h++ == 0 && jl() == 125)
            continue;
        }
        switch (T += pn(w), w * h) {
          case 38:
            S = d > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[u++] = (gt(T) - 1) * S, S = 1;
            break;
          case 64:
            bt() === 45 && (T += Kr(Je())), m = bt(), d = p = gt(O = T += Dl(Gr())), w++;
            break;
          case 45:
            y === 45 && gt(T) == 2 && (h = 0);
        }
    }
  return s;
}
function ti(e, t, r, n, i, s, a, l, c, u, d) {
  for (var p = i - 1, m = i === 0 ? s : [""], x = Ro(m), y = 0, h = 0, v = 0; y < n; ++y)
    for (var S = 0, w = Or(e, p + 1, p = _l(h = a[y])), O = e; S < x; ++S)
      (O = Ss(h > 0 ? m[S] + " " + w : xe(w, /&\f/g, m[S]))) && (c[v++] = O);
  return hn(e, t, r, i === 0 ? So : l, c, u, d);
}
function Fl(e, t, r) {
  return hn(e, t, r, To, pn(Nl()), Or(e, 2, -2), 0);
}
function ri(e, t, r, n) {
  return hn(e, t, r, Oo, Or(e, 0, n), Or(e, n + 1, -1), n);
}
function Qt(e, t) {
  for (var r = "", n = Ro(e), i = 0; i < n; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function Vl(e, t, r, n) {
  switch (e.type) {
    case Cl:
      if (e.children.length)
        break;
    case Rl:
    case Oo:
      return e.return = e.return || e.value;
    case To:
      return "";
    case Ts:
      return e.return = e.value + "{" + Qt(e.children, n) + "}";
    case So:
      e.value = e.props.join(",");
  }
  return gt(r = Qt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Bl(e) {
  var t = Ro(e);
  return function(r, n, i, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](r, n, i, s) || "";
    return a;
  };
}
function zl(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ul = function(t, r, n) {
  for (var i = 0, s = 0; i = s, s = bt(), i === 38 && s === 12 && (r[n] = 1), !Rr(s); )
    Je();
  return wr(t, Ge);
}, Wl = function(t, r) {
  var n = -1, i = 44;
  do
    switch (Rr(i)) {
      case 0:
        i === 38 && bt() === 12 && (r[n] = 1), t[n] += Ul(Ge - 1, r, n);
        break;
      case 2:
        t[n] += Kr(i);
        break;
      case 4:
        if (i === 44) {
          t[++n] = bt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += pn(i);
    }
  while (i = Je());
  return t;
}, ql = function(t, r) {
  return Cs(Wl(Rs(t), r));
}, ni = /* @__PURE__ */ new WeakMap(), Yl = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !ni.get(n)) && !i) {
      ni.set(t, !0);
      for (var s = [], a = ql(r, s), l = n.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, Hl = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, Gl = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Kl = function(t) {
  return t.type === "comm" && t.children.indexOf(Gl) > -1;
}, Xl = function(t) {
  return function(r, n, i) {
    if (!(r.type !== "rule" || t.compat)) {
      var s = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (s) {
        for (var a = !!r.parent, l = a ? r.parent.children : (
          // global rule at the root level
          i
        ), c = l.length - 1; c >= 0; c--) {
          var u = l[c];
          if (u.line < r.line)
            break;
          if (u.column < r.column) {
            if (Kl(u))
              return;
            break;
          }
        }
        s.forEach(function(d) {
          console.error('The pseudo class "' + d + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + d.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, _s = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Jl = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!_s(r[n]))
      return !0;
  return !1;
}, oi = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Zl = function(t, r, n) {
  _s(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), oi(t)) : Jl(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), oi(t)));
};
function ws(e, t) {
  switch (kl(e, t)) {
    case 5103:
      return Ee + "print-" + e + e;
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
      return Ee + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ee + e + tn + e + ze + e + e;
    case 6828:
    case 4268:
      return Ee + e + ze + e + e;
    case 6165:
      return Ee + e + ze + "flex-" + e + e;
    case 5187:
      return Ee + e + xe(e, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + ze + "flex-$1$2") + e;
    case 5443:
      return Ee + e + ze + "flex-item-" + xe(e, /flex-|-self/, "") + e;
    case 4675:
      return Ee + e + ze + "flex-line-pack" + xe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ee + e + ze + xe(e, "shrink", "negative") + e;
    case 5292:
      return Ee + e + ze + xe(e, "basis", "preferred-size") + e;
    case 6060:
      return Ee + "box-" + xe(e, "-grow", "") + Ee + e + ze + xe(e, "grow", "positive") + e;
    case 4554:
      return Ee + xe(e, /([^-])(transform)/g, "$1" + Ee + "$2") + e;
    case 6187:
      return xe(xe(xe(e, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return xe(e, /(image-set\([^]*)/, Ee + "$1$`$1");
    case 4968:
      return xe(xe(e, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + ze + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ee + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return xe(e, /(.+)-inline(.+)/, Ee + "$1$2") + e;
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
      if (gt(e) - 1 - t > 6)
        switch (Fe(e, t + 1)) {
          case 109:
            if (Fe(e, t + 4) !== 45)
              break;
          case 102:
            return xe(e, /(.+:)(.+)-([^]+)/, "$1" + Ee + "$2-$3$1" + tn + (Fe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~so(e, "stretch") ? ws(xe(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Fe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Fe(e, gt(e) - 3 - (~so(e, "!important") && 10))) {
        case 107:
          return xe(e, ":", ":" + Ee) + e;
        case 101:
          return xe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ee + (Fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ee + "$2$3$1" + ze + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Fe(e, t + 11)) {
        case 114:
          return Ee + e + ze + xe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ee + e + ze + xe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ee + e + ze + xe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ee + e + ze + e + e;
  }
  return e;
}
var Ql = function(t, r, n, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Oo:
        t.return = ws(t.value, t.length);
        break;
      case Ts:
        return Qt([hr(t, {
          value: xe(t.value, "@", "@" + Ee)
        })], i);
      case So:
        if (t.length)
          return $l(t.props, function(s) {
            switch (Pl(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Qt([hr(t, {
                  props: [xe(s, /:(read-\w+)/, ":" + tn + "$1")]
                })], i);
              case "::placeholder":
                return Qt([hr(t, {
                  props: [xe(s, /:(plac\w+)/, ":" + Ee + "input-$1")]
                }), hr(t, {
                  props: [xe(s, /:(plac\w+)/, ":" + tn + "$1")]
                }), hr(t, {
                  props: [xe(s, /:(plac\w+)/, ze + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, ec = [Ql], ks = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(h) {
      var v = h.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || ec;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var s = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(h) {
      for (var v = h.getAttribute("data-emotion").split(" "), S = 1; S < v.length; S++)
        s[v[S]] = !0;
      l.push(h);
    }
  );
  var c, u = [Yl, Hl];
  process.env.NODE_ENV !== "production" && u.push(Xl({
    get compat() {
      return y.compat;
    }
  }), Zl);
  {
    var d, p = [Vl, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? d.insert(h.return) : h.value && h.type !== To && d.insert(h.value + "{}"));
    } : zl(function(h) {
      d.insert(h);
    })], m = Bl(u.concat(i, p)), x = function(v) {
      return Qt(Ll(v), m);
    };
    c = function(v, S, w, O) {
      d = w, process.env.NODE_ENV !== "production" && S.map !== void 0 && (d = {
        insert: function(g) {
          w.insert(g + S.map);
        }
      }), x(v ? v + "{" + S.styles + "}" : S.styles), O && (y.inserted[S.name] = !0);
    };
  }
  var y = {
    key: r,
    sheet: new Ol({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: c
  };
  return y.sheet.hydrate(l), y;
}, Lr = { exports: {} }, Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ii;
function tc() {
  if (ii)
    return Te;
  ii = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function O(g) {
    if (typeof g == "object" && g !== null) {
      var P = g.$$typeof;
      switch (P) {
        case t:
          switch (g = g.type, g) {
            case c:
            case u:
            case n:
            case s:
            case i:
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case d:
                case y:
                case x:
                case a:
                  return g;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  function R(g) {
    return O(g) === u;
  }
  return Te.AsyncMode = c, Te.ConcurrentMode = u, Te.ContextConsumer = l, Te.ContextProvider = a, Te.Element = t, Te.ForwardRef = d, Te.Fragment = n, Te.Lazy = y, Te.Memo = x, Te.Portal = r, Te.Profiler = s, Te.StrictMode = i, Te.Suspense = p, Te.isAsyncMode = function(g) {
    return R(g) || O(g) === c;
  }, Te.isConcurrentMode = R, Te.isContextConsumer = function(g) {
    return O(g) === l;
  }, Te.isContextProvider = function(g) {
    return O(g) === a;
  }, Te.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, Te.isForwardRef = function(g) {
    return O(g) === d;
  }, Te.isFragment = function(g) {
    return O(g) === n;
  }, Te.isLazy = function(g) {
    return O(g) === y;
  }, Te.isMemo = function(g) {
    return O(g) === x;
  }, Te.isPortal = function(g) {
    return O(g) === r;
  }, Te.isProfiler = function(g) {
    return O(g) === s;
  }, Te.isStrictMode = function(g) {
    return O(g) === i;
  }, Te.isSuspense = function(g) {
    return O(g) === p;
  }, Te.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === s || g === i || g === p || g === m || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === x || g.$$typeof === a || g.$$typeof === l || g.$$typeof === d || g.$$typeof === v || g.$$typeof === S || g.$$typeof === w || g.$$typeof === h);
  }, Te.typeOf = O, Te;
}
var Se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var si;
function rc() {
  return si || (si = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function O(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === n || A === u || A === s || A === i || A === p || A === m || typeof A == "object" && A !== null && (A.$$typeof === y || A.$$typeof === x || A.$$typeof === a || A.$$typeof === l || A.$$typeof === d || A.$$typeof === v || A.$$typeof === S || A.$$typeof === w || A.$$typeof === h);
    }
    function R(A) {
      if (typeof A == "object" && A !== null) {
        var ve = A.$$typeof;
        switch (ve) {
          case t:
            var j = A.type;
            switch (j) {
              case c:
              case u:
              case n:
              case s:
              case i:
              case p:
                return j;
              default:
                var me = j && j.$$typeof;
                switch (me) {
                  case l:
                  case d:
                  case y:
                  case x:
                  case a:
                    return me;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var g = c, P = u, T = l, z = a, G = t, U = d, N = n, W = y, F = x, I = r, Y = s, H = i, q = p, D = !1;
    function ae(A) {
      return D || (D = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(A) || R(A) === c;
    }
    function _(A) {
      return R(A) === u;
    }
    function V(A) {
      return R(A) === l;
    }
    function ne(A) {
      return R(A) === a;
    }
    function J(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function B(A) {
      return R(A) === d;
    }
    function ee(A) {
      return R(A) === n;
    }
    function X(A) {
      return R(A) === y;
    }
    function Z(A) {
      return R(A) === x;
    }
    function te(A) {
      return R(A) === r;
    }
    function Q(A) {
      return R(A) === s;
    }
    function oe(A) {
      return R(A) === i;
    }
    function Ce(A) {
      return R(A) === p;
    }
    Se.AsyncMode = g, Se.ConcurrentMode = P, Se.ContextConsumer = T, Se.ContextProvider = z, Se.Element = G, Se.ForwardRef = U, Se.Fragment = N, Se.Lazy = W, Se.Memo = F, Se.Portal = I, Se.Profiler = Y, Se.StrictMode = H, Se.Suspense = q, Se.isAsyncMode = ae, Se.isConcurrentMode = _, Se.isContextConsumer = V, Se.isContextProvider = ne, Se.isElement = J, Se.isForwardRef = B, Se.isFragment = ee, Se.isLazy = X, Se.isMemo = Z, Se.isPortal = te, Se.isProfiler = Q, Se.isStrictMode = oe, Se.isSuspense = Ce, Se.isValidElementType = O, Se.typeOf = R;
  }()), Se;
}
var ai;
function Co() {
  return ai || (ai = 1, process.env.NODE_ENV === "production" ? Lr.exports = tc() : Lr.exports = rc()), Lr.exports;
}
var Ps = Co(), nc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, oc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, $s = {};
$s[Ps.ForwardRef] = nc;
$s[Ps.Memo] = oc;
var ic = !0;
function _o(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : n += i + " ";
  }), n;
}
var vn = function(t, r, n) {
  var i = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ic === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, gn = function(t, r, n) {
  vn(t, r, n);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = r;
    do
      t.insert(r === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function sc(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
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
var ac = {
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
}, li = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, lc = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", cc = /[A-Z]|^ms/g, Ns = /_EMO_([^_]+?)_([^]*?)_EMO_/g, wo = function(t) {
  return t.charCodeAt(1) === 45;
}, ci = function(t) {
  return t != null && typeof t != "boolean";
}, Bn = /* @__PURE__ */ xs(function(e) {
  return wo(e) ? e : e.replace(cc, "-$&").toLowerCase();
}), rn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Ns, function(n, i, s) {
          return ut = {
            name: i,
            styles: s,
            next: ut
          }, i;
        });
  }
  return ac[t] !== 1 && !wo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var uc = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, dc = ["normal", "none", "initial", "inherit", "unset"], fc = rn, pc = /^-ms-/, mc = /-(.)/g, ui = {};
  rn = function(t, r) {
    if (t === "content" && (typeof r != "string" || dc.indexOf(r) === -1 && !uc.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = fc(t, r);
    return n !== "" && !wo(t) && t.indexOf("-") !== -1 && ui[t] === void 0 && (ui[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(pc, "ms-").replace(mc, function(i, s) {
      return s.toUpperCase();
    }) + "?")), n;
  };
}
var js = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Cr(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(js);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return ut = {
          name: r.name,
          styles: r.styles,
          next: ut
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            ut = {
              name: n.name,
              styles: n.styles,
              next: ut
            }, n = n.next;
        var i = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (i += r.map), i;
      }
      return hc(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var s = ut, a = r(e);
        return ut = s, Cr(e, t, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [], c = r.replace(Ns, function(d, p, m) {
          var x = "animation" + l.length;
          return l.push("const " + x + " = keyframes`" + m.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + x + "}";
        });
        l.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(l, ["`" + c + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + c + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var u = t[r];
  return u !== void 0 ? u : r;
}
function hc(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      n += Cr(e, t, r[i]) + ";";
  else
    for (var s in r) {
      var a = r[s];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += s + "{" + t[a] + "}" : ci(a) && (n += Bn(s) + ":" + rn(s, a) + ";");
      else {
        if (s === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(js);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            ci(a[l]) && (n += Bn(s) + ":" + rn(s, a[l]) + ";");
        else {
          var c = Cr(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              n += Bn(s) + ":" + c + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && s === "undefined" && console.error(lc), n += s + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
var di = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ms;
process.env.NODE_ENV !== "production" && (Ms = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var ut, rr = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0, s = "";
  ut = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (i = !1, s += Cr(n, r, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(li), s += a[0]);
  for (var l = 1; l < t.length; l++)
    s += Cr(n, r, t[l]), i && (process.env.NODE_ENV !== "production" && a[l] === void 0 && console.error(li), s += a[l]);
  var c;
  process.env.NODE_ENV !== "production" && (s = s.replace(Ms, function(m) {
    return c = m, "";
  })), di.lastIndex = 0;
  for (var u = "", d; (d = di.exec(s)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    d[1];
  var p = sc(s) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: p,
    styles: s,
    map: c,
    next: ut,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: p,
    styles: s,
    next: ut
  };
}, vc = function(t) {
  return t();
}, As = E["useInsertionEffect"] ? E["useInsertionEffect"] : !1, ko = As || vc, fi = As || E.useLayoutEffect, gc = {}.hasOwnProperty, Po = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ks({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Po.displayName = "EmotionCacheContext");
var yc = Po.Provider, yn = function(t) {
  return /* @__PURE__ */ rl(function(r, n) {
    var i = nl(Po);
    return t(r, i, n);
  });
}, Ft = /* @__PURE__ */ E.createContext({});
process.env.NODE_ENV !== "production" && (Ft.displayName = "EmotionThemeContext");
var pi = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", mi = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", bc = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return vn(r, n, i), ko(function() {
    return gn(r, n, i);
  }), null;
}, Ec = /* @__PURE__ */ yn(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var i = e[pi], s = [n], a = "";
  typeof e.className == "string" ? a = _o(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var l = rr(s, void 0, E.useContext(Ft));
  if (process.env.NODE_ENV !== "production" && l.name.indexOf("-") === -1) {
    var c = e[mi];
    c && (l = rr([l, "label:" + c + ";"]));
  }
  a += t.key + "-" + l.name;
  var u = {};
  for (var d in e)
    gc.call(e, d) && d !== "css" && d !== pi && (process.env.NODE_ENV === "production" || d !== mi) && (u[d] = e[d]);
  return u.ref = r, u.className = a, /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(bc, {
    cache: t,
    serialized: l,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ E.createElement(i, u));
});
process.env.NODE_ENV !== "production" && (Ec.displayName = "EmotionCssPropInternal");
var zn = { exports: {} }, hi;
function Is() {
  return hi || (hi = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
          var i = arguments[n];
          for (var s in i)
            Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
        }
        return r;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(zn)), zn.exports;
}
Is();
var xc = {
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
}, gi = !1, Ds = /* @__PURE__ */ yn(function(e, t) {
  process.env.NODE_ENV !== "production" && !gi && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), gi = !0);
  var r = e.styles, n = rr([r], void 0, E.useContext(Ft)), i = E.useRef();
  return fi(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), i.current = [a, l], function() {
      a.flush();
    };
  }, [t]), fi(function() {
    var s = i.current, a = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (n.next !== void 0 && gn(t, n.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (Ds.displayName = "EmotionGlobal");
function Ls() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return rr(t);
}
var bn = function() {
  var t = Ls.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Tc = function e(t) {
  for (var r = t.length, n = 0, i = ""; n < r; n++) {
    var s = t[n];
    if (s != null) {
      var a = void 0;
      switch (typeof s) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(s))
            a = e(s);
          else {
            process.env.NODE_ENV !== "production" && s.styles !== void 0 && s.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
            for (var l in s)
              s[l] && l && (a && (a += " "), a += l);
          }
          break;
        }
        default:
          a = s;
      }
      a && (i && (i += " "), i += a);
    }
  }
  return i;
};
function Sc(e, t, r) {
  var n = [], i = _o(e, n, r);
  return n.length < 2 ? r : i + t(n);
}
var Oc = function(t) {
  var r = t.cache, n = t.serializedArr;
  return ko(function() {
    for (var i = 0; i < n.length; i++)
      gn(r, n[i], !1);
  }), null;
}, Rc = /* @__PURE__ */ yn(function(e, t) {
  var r = !1, n = [], i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, d = new Array(u), p = 0; p < u; p++)
      d[p] = arguments[p];
    var m = rr(d, t.registered);
    return n.push(m), vn(t, m, !1), t.key + "-" + m.name;
  }, s = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, d = new Array(u), p = 0; p < u; p++)
      d[p] = arguments[p];
    return Sc(t.registered, i, Tc(d));
  }, a = {
    css: i,
    cx: s,
    theme: E.useContext(Ft)
  }, l = e.children(a);
  return r = !0, /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Oc, {
    cache: t,
    serializedArr: n
  }), l);
});
process.env.NODE_ENV !== "production" && (Rc.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var yi = !0, Cc = typeof jest < "u" || typeof vi < "u";
  if (yi && !Cc) {
    var bi = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : yi ? window : global
    ), Ei = "__EMOTION_REACT_" + xc.version.split(".")[0] + "__";
    bi[Ei] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), bi[Ei] = !0;
  }
}
var _c = xl, wc = function(t) {
  return t !== "theme";
}, xi = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? _c : wc;
}, Ti = function(t, r, n) {
  var i;
  if (r) {
    var s = r.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
}, Si = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, kc = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return vn(r, n, i), ko(function() {
    return gn(r, n, i);
  }), null;
}, Pc = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, i = n && t.__emotion_base || t, s, a;
  r !== void 0 && (s = r.label, a = r.target);
  var l = Ti(t, r, n), c = l || xi(i), u = !c("as");
  return function() {
    var d = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && p.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      process.env.NODE_ENV !== "production" && d[0][0] === void 0 && console.error(Si), p.push(d[0][0]);
      for (var m = d.length, x = 1; x < m; x++)
        process.env.NODE_ENV !== "production" && d[0][x] === void 0 && console.error(Si), p.push(d[x], d[0][x]);
    }
    var y = yn(function(h, v, S) {
      var w = u && h.as || i, O = "", R = [], g = h;
      if (h.theme == null) {
        g = {};
        for (var P in h)
          g[P] = h[P];
        g.theme = E.useContext(Ft);
      }
      typeof h.className == "string" ? O = _o(v.registered, R, h.className) : h.className != null && (O = h.className + " ");
      var T = rr(p.concat(R), v.registered, g);
      O += v.key + "-" + T.name, a !== void 0 && (O += " " + a);
      var z = u && l === void 0 ? xi(w) : c, G = {};
      for (var U in h)
        u && U === "as" || // $FlowFixMe
        z(U) && (G[U] = h[U]);
      return G.className = O, G.ref = S, /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(kc, {
        cache: v,
        serialized: T,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ E.createElement(w, G));
    });
    return y.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = p, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), y.withComponent = function(h, v) {
      return e(h, b({}, r, v, {
        shouldForwardProp: Ti(y, v, !0)
      })).apply(void 0, p);
    }, y;
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
], lo = Pc.bind();
$c.forEach(function(e) {
  lo[e] = lo(e);
});
var co = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Un, Oi;
function Nc() {
  if (Oi)
    return Un;
  Oi = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Un = i() ? Object.assign : function(s, a) {
    for (var l, c = n(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        u = e(l);
        for (var m = 0; m < u.length; m++)
          r.call(l, u[m]) && (c[u[m]] = l[u[m]]);
      }
    }
    return c;
  }, Un;
}
var Wn, Ri;
function $o() {
  if (Ri)
    return Wn;
  Ri = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wn = e, Wn;
}
var qn, Ci;
function Fs() {
  return Ci || (Ci = 1, qn = Function.call.bind(Object.prototype.hasOwnProperty)), qn;
}
var Yn, _i;
function jc() {
  if (_i)
    return Yn;
  _i = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = $o(), r = {}, n = Fs();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (n(s, d)) {
          var p;
          try {
            if (typeof s[d] != "function") {
              var m = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = s[d](a, d, c, l, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var x = u ? u() : "";
            e(
              "Failed " + l + " type: " + p.message + (x ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Yn = i, Yn;
}
var Hn, wi;
function Mc() {
  if (wi)
    return Hn;
  wi = 1;
  var e = Co(), t = Nc(), r = $o(), n = Fs(), i = jc(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Hn = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(_) {
      var V = _ && (u && _[u] || _[d]);
      if (typeof V == "function")
        return V;
    }
    var m = "<<anonymous>>", x = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: w(),
      arrayOf: O,
      element: R(),
      elementType: g(),
      instanceOf: P,
      node: U(),
      objectOf: z,
      oneOf: T,
      oneOfType: G,
      shape: W,
      exact: F
    };
    function y(_, V) {
      return _ === V ? _ !== 0 || 1 / _ === 1 / V : _ !== _ && V !== V;
    }
    function h(_, V) {
      this.message = _, this.data = V && typeof V == "object" ? V : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function v(_) {
      if (process.env.NODE_ENV !== "production")
        var V = {}, ne = 0;
      function J(ee, X, Z, te, Q, oe, Ce) {
        if (te = te || m, oe = oe || Z, Ce !== r) {
          if (c) {
            var A = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw A.name = "Invariant Violation", A;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = te + ":" + Z;
            !V[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            ne < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + oe + "` prop on `" + te + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), V[ve] = !0, ne++);
          }
        }
        return X[Z] == null ? ee ? X[Z] === null ? new h("The " + Q + " `" + oe + "` is marked as required " + ("in `" + te + "`, but its value is `null`.")) : new h("The " + Q + " `" + oe + "` is marked as required in " + ("`" + te + "`, but its value is `undefined`.")) : null : _(X, Z, te, Q, oe);
      }
      var B = J.bind(null, !1);
      return B.isRequired = J.bind(null, !0), B;
    }
    function S(_) {
      function V(ne, J, B, ee, X, Z) {
        var te = ne[J], Q = H(te);
        if (Q !== _) {
          var oe = q(te);
          return new h(
            "Invalid " + ee + " `" + X + "` of type " + ("`" + oe + "` supplied to `" + B + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return v(V);
    }
    function w() {
      return v(a);
    }
    function O(_) {
      function V(ne, J, B, ee, X) {
        if (typeof _ != "function")
          return new h("Property `" + X + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var Z = ne[J];
        if (!Array.isArray(Z)) {
          var te = H(Z);
          return new h("Invalid " + ee + " `" + X + "` of type " + ("`" + te + "` supplied to `" + B + "`, expected an array."));
        }
        for (var Q = 0; Q < Z.length; Q++) {
          var oe = _(Z, Q, B, ee, X + "[" + Q + "]", r);
          if (oe instanceof Error)
            return oe;
        }
        return null;
      }
      return v(V);
    }
    function R() {
      function _(V, ne, J, B, ee) {
        var X = V[ne];
        if (!l(X)) {
          var Z = H(X);
          return new h("Invalid " + B + " `" + ee + "` of type " + ("`" + Z + "` supplied to `" + J + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(_);
    }
    function g() {
      function _(V, ne, J, B, ee) {
        var X = V[ne];
        if (!e.isValidElementType(X)) {
          var Z = H(X);
          return new h("Invalid " + B + " `" + ee + "` of type " + ("`" + Z + "` supplied to `" + J + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(_);
    }
    function P(_) {
      function V(ne, J, B, ee, X) {
        if (!(ne[J] instanceof _)) {
          var Z = _.name || m, te = ae(ne[J]);
          return new h("Invalid " + ee + " `" + X + "` of type " + ("`" + te + "` supplied to `" + B + "`, expected ") + ("instance of `" + Z + "`."));
        }
        return null;
      }
      return v(V);
    }
    function T(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function V(ne, J, B, ee, X) {
        for (var Z = ne[J], te = 0; te < _.length; te++)
          if (y(Z, _[te]))
            return null;
        var Q = JSON.stringify(_, function(Ce, A) {
          var ve = q(A);
          return ve === "symbol" ? String(A) : A;
        });
        return new h("Invalid " + ee + " `" + X + "` of value `" + String(Z) + "` " + ("supplied to `" + B + "`, expected one of " + Q + "."));
      }
      return v(V);
    }
    function z(_) {
      function V(ne, J, B, ee, X) {
        if (typeof _ != "function")
          return new h("Property `" + X + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var Z = ne[J], te = H(Z);
        if (te !== "object")
          return new h("Invalid " + ee + " `" + X + "` of type " + ("`" + te + "` supplied to `" + B + "`, expected an object."));
        for (var Q in Z)
          if (n(Z, Q)) {
            var oe = _(Z, Q, B, ee, X + "." + Q, r);
            if (oe instanceof Error)
              return oe;
          }
        return null;
      }
      return v(V);
    }
    function G(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var V = 0; V < _.length; V++) {
        var ne = _[V];
        if (typeof ne != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + D(ne) + " at index " + V + "."
          ), a;
      }
      function J(B, ee, X, Z, te) {
        for (var Q = [], oe = 0; oe < _.length; oe++) {
          var Ce = _[oe], A = Ce(B, ee, X, Z, te, r);
          if (A == null)
            return null;
          A.data && n(A.data, "expectedType") && Q.push(A.data.expectedType);
        }
        var ve = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new h("Invalid " + Z + " `" + te + "` supplied to " + ("`" + X + "`" + ve + "."));
      }
      return v(J);
    }
    function U() {
      function _(V, ne, J, B, ee) {
        return I(V[ne]) ? null : new h("Invalid " + B + " `" + ee + "` supplied to " + ("`" + J + "`, expected a ReactNode."));
      }
      return v(_);
    }
    function N(_, V, ne, J, B) {
      return new h(
        (_ || "React class") + ": " + V + " type `" + ne + "." + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function W(_) {
      function V(ne, J, B, ee, X) {
        var Z = ne[J], te = H(Z);
        if (te !== "object")
          return new h("Invalid " + ee + " `" + X + "` of type `" + te + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var Q in _) {
          var oe = _[Q];
          if (typeof oe != "function")
            return N(B, ee, X, Q, q(oe));
          var Ce = oe(Z, Q, B, ee, X + "." + Q, r);
          if (Ce)
            return Ce;
        }
        return null;
      }
      return v(V);
    }
    function F(_) {
      function V(ne, J, B, ee, X) {
        var Z = ne[J], te = H(Z);
        if (te !== "object")
          return new h("Invalid " + ee + " `" + X + "` of type `" + te + "` " + ("supplied to `" + B + "`, expected `object`."));
        var Q = t({}, ne[J], _);
        for (var oe in Q) {
          var Ce = _[oe];
          if (n(_, oe) && typeof Ce != "function")
            return N(B, ee, X, oe, q(Ce));
          if (!Ce)
            return new h(
              "Invalid " + ee + " `" + X + "` key `" + oe + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(ne[J], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var A = Ce(Z, oe, B, ee, X + "." + oe, r);
          if (A)
            return A;
        }
        return null;
      }
      return v(V);
    }
    function I(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(I);
          if (_ === null || l(_))
            return !0;
          var V = p(_);
          if (V) {
            var ne = V.call(_), J;
            if (V !== _.entries) {
              for (; !(J = ne.next()).done; )
                if (!I(J.value))
                  return !1;
            } else
              for (; !(J = ne.next()).done; ) {
                var B = J.value;
                if (B && !I(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Y(_, V) {
      return _ === "symbol" ? !0 : V ? V["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && V instanceof Symbol : !1;
    }
    function H(_) {
      var V = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : Y(V, _) ? "symbol" : V;
    }
    function q(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var V = H(_);
      if (V === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return V;
    }
    function D(_) {
      var V = q(_);
      switch (V) {
        case "array":
        case "object":
          return "an " + V;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + V;
        default:
          return V;
      }
    }
    function ae(_) {
      return !_.constructor || !_.constructor.name ? m : _.constructor.name;
    }
    return x.checkPropTypes = i, x.resetWarningCache = i.resetWarningCache, x.PropTypes = x, x;
  }, Hn;
}
var Gn, ki;
function Ac() {
  if (ki)
    return Gn;
  ki = 1;
  var e = $o();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Gn = function() {
    function n(a, l, c, u, d, p) {
      if (p !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Gn;
}
if (process.env.NODE_ENV !== "production") {
  var Ic = Co(), Dc = !0;
  co.exports = Mc()(Ic.isElement, Dc);
} else
  co.exports = Ac()();
var Lc = co.exports;
const o = /* @__PURE__ */ al(Lc);
let uo;
typeof document == "object" && (uo = ks({
  key: "css",
  prepend: !0
}));
function Vs(e) {
  const {
    injectFirst: t,
    children: r
  } = e;
  return t && uo ? /* @__PURE__ */ $.jsx(yc, {
    value: uo,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (Vs.propTypes = {
  /**
   * Your component tree.
   */
  children: o.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: o.bool
});
function Fc(e) {
  return e == null || Object.keys(e).length === 0;
}
function Bs(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (i) => t(Fc(i) ? r : i) : t;
  return /* @__PURE__ */ $.jsx(Ds, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (Bs.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function zs(e, t) {
  const r = lo(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Us = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Bs,
  StyledEngineProvider: Vs,
  ThemeContext: Ft,
  css: Ls,
  default: zs,
  internal_processStyles: Us,
  keyframes: bn
}, Symbol.toStringTag, { value: "Module" }));
function St(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ws(e) {
  if (!St(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Ws(e[r]);
  }), t;
}
function st(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? b({}, e) : e;
  return St(e) && St(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (St(t[i]) && i in e && St(e[i]) ? n[i] = st(e[i], t[i], r) : r.clone ? n[i] = St(t[i]) ? Ws(t[i]) : t[i] : n[i] = t[i]);
  }), n;
}
const Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: st,
  isPlainObject: St
}, Symbol.toStringTag, { value: "Module" })), zc = ["values", "unit", "step"], Uc = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => b({}, r, {
    [n.key]: n.val
  }), {});
};
function qs(e) {
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
  } = e, i = ge(e, zc), s = Uc(t), a = Object.keys(s);
  function l(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function c(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function u(m, x) {
    const y = a.indexOf(x);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : x) - n / 100}${r})`;
  }
  function d(m) {
    return a.indexOf(m) + 1 < a.length ? u(m, a[a.indexOf(m) + 1]) : l(m);
  }
  function p(m) {
    const x = a.indexOf(m);
    return x === 0 ? l(a[1]) : x === a.length - 1 ? c(a[x]) : u(m, a[a.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return b({
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: p,
    unit: r
  }, i);
}
const Wc = {
  borderRadius: 4
}, qc = Wc, Yc = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {}, $t = Yc;
function yr(e, t) {
  return t ? st(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const No = {
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
}, Pi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${No[e]}px)`
};
function ft(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || Pi;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = r(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || Pi;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(s.values || No).indexOf(l) !== -1) {
        const c = s.up(l);
        a[c] = r(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Ys(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, i) => {
    const s = e.up(i);
    return n[s] = {}, n;
  }, {})) || {};
}
function Hs(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function Hc(e, ...t) {
  const r = Ys(e), n = [r, ...t].reduce((i, s) => st(i, s), {});
  return Hs(Object.keys(r), n);
}
function Gc(e, t) {
  if (typeof e != "object")
    return {};
  const r = {}, n = Object.keys(t);
  return Array.isArray(e) ? n.forEach((i, s) => {
    s < e.length && (r[i] = !0);
  }) : n.forEach((i) => {
    e[i] != null && (r[i] = !0);
  }), r;
}
function Kn({
  values: e,
  breakpoints: t,
  base: r
}) {
  const n = r || Gc(e, t), i = Object.keys(n);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function de(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Sr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: de
}, Symbol.toStringTag, { value: "Module" }));
function En(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function nn(e, t, r, n = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || n : i = En(e, r) || n, t && (i = t(i, n, e)), i;
}
function Me(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = En(c, n) || {};
    return ft(a, l, (p) => {
      let m = nn(u, i, p);
      return p === m && typeof p == "string" && (m = nn(u, i, `${t}${p === "default" ? "" : de(p)}`, p)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: $t
  } : {}, s.filterProps = [t], s;
}
function Xc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Jc = {
  m: "margin",
  p: "padding"
}, Zc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, $i = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Qc = Xc((e) => {
  if (e.length > 2)
    if ($i[e])
      e = $i[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Jc[t], i = Zc[r] || "";
  return Array.isArray(i) ? i.map((s) => n + s) : [n + i];
}), xn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Tn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], eu = [...xn, ...Tn];
function kr(e, t, r, n) {
  var i;
  const s = (i = En(e, t, !1)) != null ? i : r;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function jo(e) {
  return kr(e, "spacing", 8, "spacing");
}
function Lt(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function tu(e, t) {
  return (r) => e.reduce((n, i) => (n[i] = Lt(t, r), n), {});
}
function ru(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const i = Qc(r), s = tu(i, n), a = e[r];
  return ft(e, a, s);
}
function Gs(e, t) {
  const r = jo(e.theme);
  return Object.keys(e).map((n) => ru(e, t, n, r)).reduce(yr, {});
}
function $e(e) {
  return Gs(e, xn);
}
$e.propTypes = process.env.NODE_ENV !== "production" ? xn.reduce((e, t) => (e[t] = $t, e), {}) : {};
$e.filterProps = xn;
function Ne(e) {
  return Gs(e, Tn);
}
Ne.propTypes = process.env.NODE_ENV !== "production" ? Tn.reduce((e, t) => (e[t] = $t, e), {}) : {};
Ne.filterProps = Tn;
process.env.NODE_ENV !== "production" && eu.reduce((e, t) => (e[t] = $t, e), {});
function nu(e = 8) {
  if (e.mui)
    return e;
  const t = jo({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Sn(...e) {
  const t = e.reduce((n, i) => (i.filterProps.forEach((s) => {
    n[s] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, s) => t[s] ? yr(i, t[s](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function ot(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function lt(e, t) {
  return Me({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ou = lt("border", ot), iu = lt("borderTop", ot), su = lt("borderRight", ot), au = lt("borderBottom", ot), lu = lt("borderLeft", ot), cu = lt("borderColor"), uu = lt("borderTopColor"), du = lt("borderRightColor"), fu = lt("borderBottomColor"), pu = lt("borderLeftColor"), mu = lt("outline", ot), hu = lt("outlineColor"), On = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = kr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Lt(t, n)
    });
    return ft(e, e.borderRadius, r);
  }
  return null;
};
On.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: $t
} : {};
On.filterProps = ["borderRadius"];
Sn(ou, iu, su, au, lu, cu, uu, du, fu, pu, On, mu, hu);
const Rn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = kr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Lt(t, n)
    });
    return ft(e, e.gap, r);
  }
  return null;
};
Rn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: $t
} : {};
Rn.filterProps = ["gap"];
const Cn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = kr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Lt(t, n)
    });
    return ft(e, e.columnGap, r);
  }
  return null;
};
Cn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: $t
} : {};
Cn.filterProps = ["columnGap"];
const _n = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = kr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Lt(t, n)
    });
    return ft(e, e.rowGap, r);
  }
  return null;
};
_n.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: $t
} : {};
_n.filterProps = ["rowGap"];
const vu = Me({
  prop: "gridColumn"
}), gu = Me({
  prop: "gridRow"
}), yu = Me({
  prop: "gridAutoFlow"
}), bu = Me({
  prop: "gridAutoColumns"
}), Eu = Me({
  prop: "gridAutoRows"
}), xu = Me({
  prop: "gridTemplateColumns"
}), Tu = Me({
  prop: "gridTemplateRows"
}), Su = Me({
  prop: "gridTemplateAreas"
}), Ou = Me({
  prop: "gridArea"
});
Sn(Rn, Cn, _n, vu, gu, yu, bu, Eu, xu, Tu, Su, Ou);
function er(e, t) {
  return t === "grey" ? t : e;
}
const Ru = Me({
  prop: "color",
  themeKey: "palette",
  transform: er
}), Cu = Me({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: er
}), _u = Me({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: er
});
Sn(Ru, Cu, _u);
function Xe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const wu = Me({
  prop: "width",
  transform: Xe
}), Mo = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, i;
      const s = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || No[r];
      return s ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: Xe(r)
      };
    };
    return ft(e, e.maxWidth, t);
  }
  return null;
};
Mo.filterProps = ["maxWidth"];
const ku = Me({
  prop: "minWidth",
  transform: Xe
}), Pu = Me({
  prop: "height",
  transform: Xe
}), $u = Me({
  prop: "maxHeight",
  transform: Xe
}), Nu = Me({
  prop: "minHeight",
  transform: Xe
});
Me({
  prop: "size",
  cssProperty: "width",
  transform: Xe
});
Me({
  prop: "size",
  cssProperty: "height",
  transform: Xe
});
const ju = Me({
  prop: "boxSizing"
});
Sn(wu, Mo, ku, Pu, $u, Nu, ju);
const Mu = {
  // borders
  border: {
    themeKey: "borders",
    transform: ot
  },
  borderTop: {
    themeKey: "borders",
    transform: ot
  },
  borderRight: {
    themeKey: "borders",
    transform: ot
  },
  borderBottom: {
    themeKey: "borders",
    transform: ot
  },
  borderLeft: {
    themeKey: "borders",
    transform: ot
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
    transform: ot
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: On
  },
  // palette
  color: {
    themeKey: "palette",
    transform: er
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: er
  },
  backgroundColor: {
    themeKey: "palette",
    transform: er
  },
  // spacing
  p: {
    style: Ne
  },
  pt: {
    style: Ne
  },
  pr: {
    style: Ne
  },
  pb: {
    style: Ne
  },
  pl: {
    style: Ne
  },
  px: {
    style: Ne
  },
  py: {
    style: Ne
  },
  padding: {
    style: Ne
  },
  paddingTop: {
    style: Ne
  },
  paddingRight: {
    style: Ne
  },
  paddingBottom: {
    style: Ne
  },
  paddingLeft: {
    style: Ne
  },
  paddingX: {
    style: Ne
  },
  paddingY: {
    style: Ne
  },
  paddingInline: {
    style: Ne
  },
  paddingInlineStart: {
    style: Ne
  },
  paddingInlineEnd: {
    style: Ne
  },
  paddingBlock: {
    style: Ne
  },
  paddingBlockStart: {
    style: Ne
  },
  paddingBlockEnd: {
    style: Ne
  },
  m: {
    style: $e
  },
  mt: {
    style: $e
  },
  mr: {
    style: $e
  },
  mb: {
    style: $e
  },
  ml: {
    style: $e
  },
  mx: {
    style: $e
  },
  my: {
    style: $e
  },
  margin: {
    style: $e
  },
  marginTop: {
    style: $e
  },
  marginRight: {
    style: $e
  },
  marginBottom: {
    style: $e
  },
  marginLeft: {
    style: $e
  },
  marginX: {
    style: $e
  },
  marginY: {
    style: $e
  },
  marginInline: {
    style: $e
  },
  marginInlineStart: {
    style: $e
  },
  marginInlineEnd: {
    style: $e
  },
  marginBlock: {
    style: $e
  },
  marginBlockStart: {
    style: $e
  },
  marginBlockEnd: {
    style: $e
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
    style: Rn
  },
  rowGap: {
    style: _n
  },
  columnGap: {
    style: Cn
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
    transform: Xe
  },
  maxWidth: {
    style: Mo
  },
  minWidth: {
    transform: Xe
  },
  height: {
    transform: Xe
  },
  maxHeight: {
    transform: Xe
  },
  minHeight: {
    transform: Xe
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
}, Pr = Mu;
function Au(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Iu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ks() {
  function e(r, n, i, s) {
    const a = {
      [r]: n,
      theme: i
    }, l = s[r];
    if (!l)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: u,
      transform: d,
      style: p
    } = l;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = En(i, u) || {};
    return p ? p(a) : ft(a, n, (y) => {
      let h = nn(m, d, y);
      return y === h && typeof y == "string" && (h = nn(m, d, `${r}${y === "default" ? "" : de(y)}`, y)), c === !1 ? h : {
        [c]: h
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: i,
      theme: s = {}
    } = r || {};
    if (!i)
      return null;
    const a = (n = s.unstable_sxConfig) != null ? n : Pr;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(s);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Ys(s.breakpoints), p = Object.keys(d);
      let m = d;
      return Object.keys(u).forEach((x) => {
        const y = Iu(u[x], s);
        if (y != null)
          if (typeof y == "object")
            if (a[x])
              m = yr(m, e(x, y, s, a));
            else {
              const h = ft({
                theme: s
              }, y, (v) => ({
                [x]: v
              }));
              Au(h, y) ? m[x] = t({
                sx: y,
                theme: s
              }) : m = yr(m, h);
            }
          else
            m = yr(m, e(x, y, s, a));
      }), Hs(p, m);
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return t;
}
const Xs = Ks();
Xs.filterProps = ["sx"];
const wn = Xs;
function Js(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const Du = ["breakpoints", "palette", "spacing", "shape"];
function $r(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: s = {}
  } = e, a = ge(e, Du), l = qs(r), c = nu(i);
  let u = st({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: b({
      mode: "light"
    }, n),
    spacing: c,
    shape: b({}, qc, s)
  }, a);
  return u.applyStyles = Js, u = t.reduce((d, p) => st(d, p), u), u.unstable_sxConfig = b({}, Pr, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(p) {
    return wn({
      sx: p,
      theme: this
    });
  }, u;
}
const Lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $r,
  private_createBreakpoints: qs,
  unstable_applyStyles: Js
}, Symbol.toStringTag, { value: "Module" }));
function Fu(e) {
  return Object.keys(e).length === 0;
}
function Vu(e = null) {
  const t = E.useContext(Ft);
  return !t || Fu(t) ? e : t;
}
const Bu = $r();
function Zs(e = Bu) {
  return Vu(e);
}
const zu = ["sx"], Uu = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : Pr;
  return Object.keys(e).forEach((s) => {
    i[s] ? n.systemProps[s] = e[s] : n.otherProps[s] = e[s];
  }), n;
};
function Ao(e) {
  const {
    sx: t
  } = e, r = ge(e, zu), {
    systemProps: n,
    otherProps: i
  } = Uu(r);
  let s;
  return Array.isArray(t) ? s = [n, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return St(l) ? b({}, n, l) : n;
  } : s = b({}, n, t), b({}, i, {
    sx: s
  });
}
const Wu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wn,
  extendSxProp: Ao,
  unstable_createStyleFunctionSx: Ks,
  unstable_defaultSxConfig: Pr
}, Symbol.toStringTag, { value: "Module" })), Ni = (e) => e, qu = () => {
  let e = Ni;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ni;
    }
  };
}, Yu = qu(), Qs = Yu;
function ea(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (r = ea(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function pe() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
    (e = arguments[r]) && (t = ea(e)) && (n && (n += " "), n += t);
  return n;
}
const Hu = {
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
function Le(e, t, r = "Mui") {
  const n = Hu[t];
  return n ? `${r}-${n}` : `${Qs.generate(e)}-${t}`;
}
function Ue(e, t, r = "Mui") {
  const n = {};
  return t.forEach((i) => {
    n[i] = Le(e, i, r);
  }), n;
}
var fo = { exports: {} }, Oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ji;
function Gu() {
  if (ji)
    return Oe;
  ji = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function h(v) {
    if (typeof v == "object" && v !== null) {
      var S = v.$$typeof;
      switch (S) {
        case e:
          switch (v = v.type, v) {
            case r:
            case i:
            case n:
            case u:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case a:
                case c:
                case m:
                case p:
                case s:
                  return v;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return Oe.ContextConsumer = a, Oe.ContextProvider = s, Oe.Element = e, Oe.ForwardRef = c, Oe.Fragment = r, Oe.Lazy = m, Oe.Memo = p, Oe.Portal = t, Oe.Profiler = i, Oe.StrictMode = n, Oe.Suspense = u, Oe.SuspenseList = d, Oe.isAsyncMode = function() {
    return !1;
  }, Oe.isConcurrentMode = function() {
    return !1;
  }, Oe.isContextConsumer = function(v) {
    return h(v) === a;
  }, Oe.isContextProvider = function(v) {
    return h(v) === s;
  }, Oe.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, Oe.isForwardRef = function(v) {
    return h(v) === c;
  }, Oe.isFragment = function(v) {
    return h(v) === r;
  }, Oe.isLazy = function(v) {
    return h(v) === m;
  }, Oe.isMemo = function(v) {
    return h(v) === p;
  }, Oe.isPortal = function(v) {
    return h(v) === t;
  }, Oe.isProfiler = function(v) {
    return h(v) === i;
  }, Oe.isStrictMode = function(v) {
    return h(v) === n;
  }, Oe.isSuspense = function(v) {
    return h(v) === u;
  }, Oe.isSuspenseList = function(v) {
    return h(v) === d;
  }, Oe.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === i || v === n || v === u || v === d || v === x || typeof v == "object" && v !== null && (v.$$typeof === m || v.$$typeof === p || v.$$typeof === s || v.$$typeof === a || v.$$typeof === c || v.$$typeof === y || v.getModuleId !== void 0);
  }, Oe.typeOf = h, Oe;
}
var Re = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mi;
function Ku() {
  return Mi || (Mi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), y = !1, h = !1, v = !1, S = !1, w = !1, O;
    O = Symbol.for("react.module.reference");
    function R(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === r || j === i || w || j === n || j === u || j === d || S || j === x || y || h || v || typeof j == "object" && j !== null && (j.$$typeof === m || j.$$typeof === p || j.$$typeof === s || j.$$typeof === a || j.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === O || j.getModuleId !== void 0));
    }
    function g(j) {
      if (typeof j == "object" && j !== null) {
        var me = j.$$typeof;
        switch (me) {
          case e:
            var ke = j.type;
            switch (ke) {
              case r:
              case i:
              case n:
              case u:
              case d:
                return ke;
              default:
                var Ve = ke && ke.$$typeof;
                switch (Ve) {
                  case l:
                  case a:
                  case c:
                  case m:
                  case p:
                  case s:
                    return Ve;
                  default:
                    return me;
                }
            }
          case t:
            return me;
        }
      }
    }
    var P = a, T = s, z = e, G = c, U = r, N = m, W = p, F = t, I = i, Y = n, H = u, q = d, D = !1, ae = !1;
    function _(j) {
      return D || (D = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(j) {
      return ae || (ae = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ne(j) {
      return g(j) === a;
    }
    function J(j) {
      return g(j) === s;
    }
    function B(j) {
      return typeof j == "object" && j !== null && j.$$typeof === e;
    }
    function ee(j) {
      return g(j) === c;
    }
    function X(j) {
      return g(j) === r;
    }
    function Z(j) {
      return g(j) === m;
    }
    function te(j) {
      return g(j) === p;
    }
    function Q(j) {
      return g(j) === t;
    }
    function oe(j) {
      return g(j) === i;
    }
    function Ce(j) {
      return g(j) === n;
    }
    function A(j) {
      return g(j) === u;
    }
    function ve(j) {
      return g(j) === d;
    }
    Re.ContextConsumer = P, Re.ContextProvider = T, Re.Element = z, Re.ForwardRef = G, Re.Fragment = U, Re.Lazy = N, Re.Memo = W, Re.Portal = F, Re.Profiler = I, Re.StrictMode = Y, Re.Suspense = H, Re.SuspenseList = q, Re.isAsyncMode = _, Re.isConcurrentMode = V, Re.isContextConsumer = ne, Re.isContextProvider = J, Re.isElement = B, Re.isForwardRef = ee, Re.isFragment = X, Re.isLazy = Z, Re.isMemo = te, Re.isPortal = Q, Re.isProfiler = oe, Re.isStrictMode = Ce, Re.isSuspense = A, Re.isSuspenseList = ve, Re.isValidElementType = R, Re.typeOf = g;
  }()), Re;
}
process.env.NODE_ENV === "production" ? fo.exports = Gu() : fo.exports = Ku();
var Ai = fo.exports;
const Xu = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function ta(e) {
  const t = `${e}`.match(Xu);
  return t && t[1] || "";
}
function ra(e, t = "") {
  return e.displayName || e.name || ta(e) || t;
}
function Ii(e, t, r) {
  const n = ra(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function na(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ra(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ai.ForwardRef:
          return Ii(e, e.render, "ForwardRef");
        case Ai.Memo:
          return Ii(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: na,
  getFunctionName: ta
}, Symbol.toStringTag, { value: "Module" })), Zu = ["ownerState"], Qu = ["variants"], ed = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function td(e) {
  return Object.keys(e).length === 0;
}
function rd(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Xn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const nd = $r(), Di = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Fr({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return td(t) ? e : t[r] || t;
}
function od(e) {
  return e ? (t, r) => r[e] : null;
}
function Jr(e, t) {
  let {
    ownerState: r
  } = t, n = ge(t, Zu);
  const i = typeof e == "function" ? e(b({
    ownerState: r
  }, n)) : e;
  if (Array.isArray(i))
    return i.flatMap((s) => Jr(s, b({
      ownerState: r
    }, n)));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: s = []
    } = i;
    let l = ge(i, Qu);
    return s.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props(b({
        ownerState: r
      }, n, r)) : Object.keys(c.props).forEach((d) => {
        (r == null ? void 0 : r[d]) !== c.props[d] && n[d] !== c.props[d] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style(b({
        ownerState: r
      }, n, r)) : c.style));
    }), l;
  }
  return i;
}
function id(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = nd,
    rootShouldForwardProp: n = Xn,
    slotShouldForwardProp: i = Xn
  } = e, s = (a) => wn(b({}, a, {
    theme: Fr(b({}, a, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (a, l = {}) => {
    Us(a, (g) => g.filter((P) => !(P != null && P.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = od(Di(u))
    } = l, x = ge(l, ed), y = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), h = p || !1;
    let v;
    process.env.NODE_ENV !== "production" && c && (v = `${c}-${Di(u || "Root")}`);
    let S = Xn;
    u === "Root" || u === "root" ? S = n : u ? S = i : rd(a) && (S = void 0);
    const w = zs(a, b({
      shouldForwardProp: S,
      label: v
    }, x)), O = (g) => typeof g == "function" && g.__emotion_real !== g || St(g) ? (P) => Jr(g, b({}, P, {
      theme: Fr({
        theme: P.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : g, R = (g, ...P) => {
      let T = O(g);
      const z = P ? P.map(O) : [];
      c && m && z.push((N) => {
        const W = Fr(b({}, N, {
          defaultTheme: r,
          themeId: t
        }));
        if (!W.components || !W.components[c] || !W.components[c].styleOverrides)
          return null;
        const F = W.components[c].styleOverrides, I = {};
        return Object.entries(F).forEach(([Y, H]) => {
          I[Y] = Jr(H, b({}, N, {
            theme: W
          }));
        }), m(N, I);
      }), c && !y && z.push((N) => {
        var W;
        const F = Fr(b({}, N, {
          defaultTheme: r,
          themeId: t
        })), I = F == null || (W = F.components) == null || (W = W[c]) == null ? void 0 : W.variants;
        return Jr({
          variants: I
        }, b({}, N, {
          theme: F
        }));
      }), h || z.push(s);
      const G = z.length - P.length;
      if (Array.isArray(g) && G > 0) {
        const N = new Array(G).fill("");
        T = [...g, ...N], T.raw = [...g.raw, ...N];
      }
      const U = w(T, ...z);
      if (process.env.NODE_ENV !== "production") {
        let N;
        c && (N = `${c}${de(u || "")}`), N === void 0 && (N = `Styled(${na(a)})`), U.displayName = N;
      }
      return a.muiName && (U.muiName = a.muiName), U;
    };
    return w.withConfig && (R.withConfig = w.withConfig), R;
  };
}
const sd = id(), ad = sd;
function oa(e, t) {
  const r = b({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = b({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[n] || {}, s = t[n];
      r[n] = {}, !s || !Object.keys(s) ? r[n] = i : !i || !Object.keys(i) ? r[n] = s : (r[n] = b({}, s), Object.keys(i).forEach((a) => {
        r[n][a] = oa(i[a], s[a]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function ld(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : oa(t.components[r].defaultProps, n);
}
function ia({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let i = Zs(r);
  return n && (i = i[n] || i), ld({
    theme: i,
    name: t,
    props: e
  });
}
const cd = typeof window < "u" ? E.useLayoutEffect : E.useEffect, _r = cd;
function Jt(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const ud = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jt
}, Symbol.toStringTag, { value: "Module" }));
function kt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function dd(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function sa(e, t, r, n, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !dd(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const aa = kt(o.element, sa);
aa.isRequired = kt(o.element.isRequired, sa);
const kn = aa;
function fd(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function pd(e, t, r, n, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !fd(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const md = kt(o.elementType, pd), hd = "exact-prop: ​";
function la(e) {
  return process.env.NODE_ENV === "production" ? e : b({}, e, {
    [hd]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Io(e, t, r, n, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const vd = o.oneOfType([o.func, o.object]), Pn = vd;
function on(...e) {
  return e.reduce((t, r) => r == null ? t : function(...i) {
    t.apply(this, i), r.apply(this, i);
  }, () => {
  });
}
function ca(e, t = 166) {
  let r;
  function n(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(r), r = setTimeout(s, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function gd(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, i, s, a) => {
    const l = i || "<<anonymous>>", c = a || n;
    return typeof r[n] < "u" ? new Error(`The ${s} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function Zr(e, t) {
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
function or(e) {
  return Ze(e).defaultView || window;
}
function yd(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? b({}, t.propTypes) : null;
  return (i) => (s, a, l, c, u, ...d) => {
    const p = u || a, m = r == null ? void 0 : r[p];
    if (m) {
      const x = m(s, a, l, c, u, ...d);
      if (x)
        return x;
    }
    return typeof s[a] < "u" && !s[i] ? new Error(`The prop \`${p}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
function sn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Li = 0;
function bd(e) {
  const [t, r] = E.useState(e), n = e || t;
  return E.useEffect(() => {
    t == null && (Li += 1, r(`mui-${Li}`));
  }, [t]), n;
}
const Fi = E["useId".toString()];
function Ed(e) {
  if (Fi !== void 0) {
    const t = Fi();
    return e ?? t;
  }
  return bd(e);
}
function xd(e, t, r, n, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
function Do({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: i
  } = E.useRef(e !== void 0), [s, a] = E.useState(t), l = i ? e : s;
  if (process.env.NODE_ENV !== "production") {
    E.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${n} state of ${r} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = E.useRef(t);
    E.useEffect(() => {
      !i && u !== t && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = E.useCallback((u) => {
    i || a(u);
  }, []);
  return [l, c];
}
function yt(e) {
  const t = E.useRef(e);
  return _r(() => {
    t.current = e;
  }), E.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function pt(...e) {
  return E.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      sn(r, t);
    });
  }, e);
}
const Vi = {};
function Td(e, t) {
  const r = E.useRef(Vi);
  return r.current === Vi && (r.current = e(t)), r;
}
const Sd = [];
function Od(e) {
  E.useEffect(e, Sd);
}
class $n {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new $n();
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
function Rd() {
  const e = Td($n.create).current;
  return Od(e.disposeEffect), e;
}
let Nn = !0, po = !1;
const Cd = new $n(), _d = {
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
function wd(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && _d[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function kd(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Nn = !0);
}
function Jn() {
  Nn = !1;
}
function Pd() {
  this.visibilityState === "hidden" && po && (Nn = !0);
}
function $d(e) {
  e.addEventListener("keydown", kd, !0), e.addEventListener("mousedown", Jn, !0), e.addEventListener("pointerdown", Jn, !0), e.addEventListener("touchstart", Jn, !0), e.addEventListener("visibilitychange", Pd, !0);
}
function Nd(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Nn || wd(t);
}
function Lo() {
  const e = E.useCallback((i) => {
    i != null && $d(i.ownerDocument);
  }, []), t = E.useRef(!1);
  function r() {
    return t.current ? (po = !0, Cd.start(100, () => {
      po = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(i) {
    return Nd(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function jd(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const Md = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
}, Ad = Md;
function Id(e) {
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
function Dd(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Ld = Number.isInteger || Dd;
function ua(e, t, r, n) {
  const i = e[t];
  if (i == null || !Ld(i)) {
    const s = Id(i);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${s}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function da(e, t, ...r) {
  return e[t] === void 0 ? null : ua(e, t, ...r);
}
function mo() {
  return null;
}
da.isRequired = ua;
mo.isRequired = mo;
const fa = process.env.NODE_ENV === "production" ? mo : da;
function We(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      n[i] = e[i].reduce((s, a) => {
        if (a) {
          const l = t(a);
          l !== "" && s.push(l), r && r[a] && s.push(r[a]);
        }
        return s;
      }, []).join(" ");
    }
  ), n;
}
const Fd = /* @__PURE__ */ E.createContext();
process.env.NODE_ENV !== "production" && (o.node, o.bool);
const pa = () => {
  const e = E.useContext(Fd);
  return e ?? !1;
}, Vd = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], Bd = $r(), zd = ad("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function Ud(e) {
  return ia({
    props: e,
    name: "MuiStack",
    defaultTheme: Bd
  });
}
function Wd(e, t) {
  const r = E.Children.toArray(e).filter(Boolean);
  return r.reduce((n, i, s) => (n.push(i), s < r.length - 1 && n.push(/* @__PURE__ */ E.cloneElement(t, {
    key: `separator-${s}`
  })), n), []);
}
const qd = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Yd = ({
  ownerState: e,
  theme: t
}) => {
  let r = b({
    display: "flex",
    flexDirection: "column"
  }, ft({
    theme: t
  }, Kn({
    values: e.direction,
    breakpoints: t.breakpoints.values
  }), (n) => ({
    flexDirection: n
  })));
  if (e.spacing) {
    const n = jo(t), i = Object.keys(t.breakpoints.values).reduce((c, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (c[u] = !0), c), {}), s = Kn({
      values: e.direction,
      base: i
    }), a = Kn({
      values: e.spacing,
      base: i
    });
    typeof s == "object" && Object.keys(s).forEach((c, u, d) => {
      if (!s[c]) {
        const m = u > 0 ? s[d[u - 1]] : "column";
        s[c] = m;
      }
    }), r = st(r, ft({
      theme: t
    }, a, (c, u) => e.useFlexGap ? {
      gap: Lt(n, c)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${qd(u ? s[u] : e.direction)}`]: Lt(n, c)
      }
    }));
  }
  return r = Hc(t.breakpoints, r), r;
};
function Hd(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = zd,
    useThemeProps: r = Ud,
    componentName: n = "MuiStack"
  } = e, i = () => We({
    root: ["root"]
  }, (c) => Le(n, c), {}), s = t(Yd), a = /* @__PURE__ */ E.forwardRef(function(c, u) {
    const d = r(c), p = Ao(d), {
      component: m = "div",
      direction: x = "column",
      spacing: y = 0,
      divider: h,
      children: v,
      className: S,
      useFlexGap: w = !1
    } = p, O = ge(p, Vd), R = {
      direction: x,
      spacing: y,
      useFlexGap: w
    }, g = i();
    return /* @__PURE__ */ $.jsx(s, b({
      as: m,
      ownerState: R,
      ref: u,
      className: pe(g.root, S)
    }, O, {
      children: h ? Wd(v, h) : v
    }));
  });
  return process.env.NODE_ENV !== "production" && (a.propTypes = {
    children: o.node,
    direction: o.oneOfType([o.oneOf(["column-reverse", "column", "row-reverse", "row"]), o.arrayOf(o.oneOf(["column-reverse", "column", "row-reverse", "row"])), o.object]),
    divider: o.node,
    spacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
    sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
  }), a;
}
function Gd(e, t) {
  return b({
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
var Ae = {}, ma = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(ma);
var jn = ma.exports;
const Kd = /* @__PURE__ */ Ot(bl), Xd = /* @__PURE__ */ Ot(ud);
var ha = jn;
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
var Pt = Ae.alpha = ba;
Ae.blend = af;
Ae.colorChannel = void 0;
var ho = Ae.darken = Vo;
Ae.decomposeColor = at;
Ae.emphasize = sf;
var Bi = Ae.getContrastRatio = tf;
Ae.getLuminance = an;
Ae.hexToRgb = va;
Ae.hslToRgb = ya;
var vo = Ae.lighten = Bo;
Ae.private_safeAlpha = rf;
Ae.private_safeColorChannel = void 0;
Ae.private_safeDarken = nf;
Ae.private_safeEmphasize = Ea;
Ae.private_safeLighten = of;
Ae.recomposeColor = ir;
Ae.rgbToHex = ef;
var zi = ha(Kd), Jd = ha(Xd);
function Fo(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, Jd.default)(e, t, r);
}
function va(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Zd(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function at(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return at(va(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, zi.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, zi.default)(10, i));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
const ga = (e) => {
  const t = at(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
Ae.colorChannel = ga;
const Qd = (e, t) => {
  try {
    return ga(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
Ae.private_safeColorChannel = Qd;
function ir(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function ef(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = at(e);
  return `#${t.map((r, n) => Zd(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function ya(e) {
  e = at(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, i = t[2] / 100, s = n * Math.min(i, 1 - i), a = (u, d = (u + r / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), ir({
    type: l,
    values: c
  });
}
function an(e) {
  e = at(e);
  let t = e.type === "hsl" || e.type === "hsla" ? at(ya(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function tf(e, t) {
  const r = an(e), n = an(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function ba(e, t) {
  return e = at(e), t = Fo(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ir(e);
}
function rf(e, t, r) {
  try {
    return ba(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Vo(e, t) {
  if (e = at(e), t = Fo(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return ir(e);
}
function nf(e, t, r) {
  try {
    return Vo(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Bo(e, t) {
  if (e = at(e), t = Fo(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return ir(e);
}
function of(e, t, r) {
  try {
    return Bo(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function sf(e, t = 0.15) {
  return an(e) > 0.5 ? Vo(e, t) : Bo(e, t);
}
function Ea(e, t, r) {
  try {
    return Ea(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function af(e, t, r, n = 1) {
  const i = (c, u) => Math.round((c ** (1 / n) * (1 - r) + u ** (1 / n) * r) ** n), s = at(e), a = at(t), l = [i(s.values[0], a.values[0]), i(s.values[1], a.values[1]), i(s.values[2], a.values[2])];
  return ir({
    type: "rgb",
    values: l
  });
}
const lf = ["mode", "contrastThreshold", "tonalOffset"], Ui = {
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
    paper: Tr.white,
    default: Tr.white
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
}, Zn = {
  text: {
    primary: Tr.white,
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
    active: Tr.white,
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
function Wi(e, t, r, n) {
  const i = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = vo(e.main, i) : t === "dark" && (e.dark = ho(e.main, s)));
}
function cf(e = "light") {
  return e === "dark" ? {
    main: Ht[200],
    light: Ht[50],
    dark: Ht[400]
  } : {
    main: Ht[700],
    light: Ht[400],
    dark: Ht[800]
  };
}
function uf(e = "light") {
  return e === "dark" ? {
    main: Yt[200],
    light: Yt[50],
    dark: Yt[400]
  } : {
    main: Yt[500],
    light: Yt[300],
    dark: Yt[700]
  };
}
function df(e = "light") {
  return e === "dark" ? {
    main: qt[500],
    light: qt[300],
    dark: qt[700]
  } : {
    main: qt[700],
    light: qt[400],
    dark: qt[800]
  };
}
function ff(e = "light") {
  return e === "dark" ? {
    main: Gt[400],
    light: Gt[300],
    dark: Gt[700]
  } : {
    main: Gt[700],
    light: Gt[500],
    dark: Gt[900]
  };
}
function pf(e = "light") {
  return e === "dark" ? {
    main: Kt[400],
    light: Kt[300],
    dark: Kt[700]
  } : {
    main: Kt[800],
    light: Kt[500],
    dark: Kt[900]
  };
}
function mf(e = "light") {
  return e === "dark" ? {
    main: mr[400],
    light: mr[300],
    dark: mr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: mr[500],
    dark: mr[900]
  };
}
function hf(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, i = ge(e, lf), s = e.primary || cf(t), a = e.secondary || uf(t), l = e.error || df(t), c = e.info || ff(t), u = e.success || pf(t), d = e.warning || mf(t);
  function p(h) {
    const v = Bi(h, Zn.text.primary) >= r ? Zn.text.primary : Ui.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = Bi(h, v);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${v} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const m = ({
    color: h,
    name: v,
    mainShade: S = 500,
    lightShade: w = 300,
    darkShade: O = 700
  }) => {
    if (h = b({}, h), !h.main && h[S] && (h.main = h[S]), !h.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : Sr(11, v ? ` (${v})` : "", S));
    if (typeof h.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(h.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Sr(12, v ? ` (${v})` : "", JSON.stringify(h.main)));
    return Wi(h, "light", w, n), Wi(h, "dark", O, n), h.contrastText || (h.contrastText = p(h.main)), h;
  }, x = {
    dark: Zn,
    light: Ui
  };
  return process.env.NODE_ENV !== "production" && (x[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), st(b({
    // A collection of common colors.
    common: b({}, Tr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: yl,
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
  }, x[t]), i);
}
const vf = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function gf(e) {
  return Math.round(e * 1e5) / 1e5;
}
const qi = {
  textTransform: "uppercase"
}, Yi = '"Roboto", "Helvetica", "Arial", sans-serif';
function yf(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Yi,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p
  } = r, m = ge(r, vf);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const x = i / 14, y = p || ((S) => `${S / u * x}rem`), h = (S, w, O, R, g) => b({
    fontFamily: n,
    fontWeight: S,
    fontSize: y(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O
  }, n === Yi ? {
    letterSpacing: `${gf(R / w)}em`
  } : {}, g, d), v = {
    h1: h(s, 96, 1.167, -1.5),
    h2: h(s, 60, 1.2, -0.5),
    h3: h(a, 48, 1.167, 0),
    h4: h(a, 34, 1.235, 0.25),
    h5: h(a, 24, 1.334, 0),
    h6: h(l, 20, 1.6, 0.15),
    subtitle1: h(a, 16, 1.75, 0.15),
    subtitle2: h(l, 14, 1.57, 0.1),
    body1: h(a, 16, 1.5, 0.15),
    body2: h(a, 14, 1.43, 0.15),
    button: h(l, 14, 1.75, 0.4, qi),
    caption: h(a, 12, 1.66, 0.4),
    overline: h(a, 12, 2.66, 1, qi),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return st(b({
    htmlFontSize: u,
    pxToRem: y,
    fontFamily: n,
    fontSize: i,
    fontWeightLight: s,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c
  }, v), m, {
    clone: !1
    // No need to clone deep
  });
}
const bf = 0.2, Ef = 0.14, xf = 0.12;
function we(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${bf})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ef})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${xf})`].join(",");
}
const Tf = ["none", we(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), we(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), we(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), we(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), we(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), we(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), we(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), we(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), we(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), we(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), we(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), we(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), we(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), we(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), we(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), we(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), we(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), we(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), we(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), we(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), we(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), we(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), we(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), we(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Sf = Tf, Of = ["duration", "easing", "delay"], Rf = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Cf = {
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
function Hi(e) {
  return `${Math.round(e)}ms`;
}
function _f(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function wf(e) {
  const t = b({}, Rf, e.easing), r = b({}, Cf, e.duration);
  return b({
    getAutoHeightDuration: _f,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = r.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = s, u = ge(s, Of);
      if (process.env.NODE_ENV !== "production") {
        const d = (m) => typeof m == "string", p = (m) => !isNaN(parseFloat(m));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : Hi(a)} ${l} ${typeof c == "string" ? c : Hi(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const kf = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Pf = kf, $f = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Nf(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: i = {},
    typography: s = {}
  } = e, a = ge(e, $f);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Sr(18));
  const l = hf(n), c = $r(e);
  let u = st(c, {
    mixins: Gd(c.breakpoints, r),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Sf.slice(),
    typography: yf(l, s),
    transitions: wf(i),
    zIndex: b({}, Pf)
  });
  if (u = st(u, a), u = t.reduce((d, p) => st(d, p), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (m, x) => {
      let y;
      for (y in m) {
        const h = m[y];
        if (d.indexOf(y) !== -1 && Object.keys(h).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Le("", y);
            console.error([`MUI: The \`${x}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(m, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: h
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          m[y] = {};
        }
      }
    };
    Object.keys(u.components).forEach((m) => {
      const x = u.components[m].styleOverrides;
      x && m.indexOf("Mui") === 0 && p(x, m);
    });
  }
  return u.unstable_sxConfig = b({}, Pr, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(p) {
    return wn({
      sx: p,
      theme: this
    });
  }, u;
}
const jf = Nf(), zo = jf;
function Mn() {
  const e = Zs(zo);
  return process.env.NODE_ENV !== "production" && E.useDebugValue(e), e[xo] || e;
}
function qe({
  props: e,
  name: t
}) {
  return ia({
    props: e,
    name: t,
    defaultTheme: zo,
    themeId: xo
  });
}
var Nr = {}, Qn = { exports: {} }, Gi;
function Mf() {
  return Gi || (Gi = 1, function(e) {
    function t(r, n) {
      if (r == null)
        return {};
      var i = {}, s = Object.keys(r), a, l;
      for (l = 0; l < s.length; l++)
        a = s[l], !(n.indexOf(a) >= 0) && (i[a] = r[a]);
      return i;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Qn)), Qn.exports;
}
const Af = /* @__PURE__ */ Ot(Vc), If = /* @__PURE__ */ Ot(Bc), Df = /* @__PURE__ */ Ot(Kc), Lf = /* @__PURE__ */ Ot(Ju), Ff = /* @__PURE__ */ Ot(Lu), Vf = /* @__PURE__ */ Ot(Wu);
var sr = jn;
Object.defineProperty(Nr, "__esModule", {
  value: !0
});
var Bf = Nr.default = tp;
Nr.shouldForwardProp = Qr;
Nr.systemDefaultTheme = void 0;
var rt = sr(Is()), go = sr(Mf()), Ki = Xf(Af), zf = If, Uf = sr(Df), Wf = sr(Lf), qf = sr(Ff), Yf = sr(Vf);
const Hf = ["ownerState"], Gf = ["variants"], Kf = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function xa(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (xa = function(n) {
    return n ? r : t;
  })(e);
}
function Xf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = xa(t);
  if (r && r.has(e))
    return r.get(e);
  var n = { __proto__: null }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var a = i ? Object.getOwnPropertyDescriptor(e, s) : null;
      a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = e[s];
    }
  return n.default = e, r && r.set(e, n), n;
}
function Jf(e) {
  return Object.keys(e).length === 0;
}
function Zf(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Qr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Qf = Nr.systemDefaultTheme = (0, qf.default)(), Xi = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Vr({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return Jf(t) ? e : t[r] || t;
}
function ep(e) {
  return e ? (t, r) => r[e] : null;
}
function en(e, t) {
  let {
    ownerState: r
  } = t, n = (0, go.default)(t, Hf);
  const i = typeof e == "function" ? e((0, rt.default)({
    ownerState: r
  }, n)) : e;
  if (Array.isArray(i))
    return i.flatMap((s) => en(s, (0, rt.default)({
      ownerState: r
    }, n)));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: s = []
    } = i;
    let l = (0, go.default)(i, Gf);
    return s.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props((0, rt.default)({
        ownerState: r
      }, n, r)) : Object.keys(c.props).forEach((d) => {
        (r == null ? void 0 : r[d]) !== c.props[d] && n[d] !== c.props[d] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style((0, rt.default)({
        ownerState: r
      }, n, r)) : c.style));
    }), l;
  }
  return i;
}
function tp(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Qf,
    rootShouldForwardProp: n = Qr,
    slotShouldForwardProp: i = Qr
  } = e, s = (a) => (0, Yf.default)((0, rt.default)({}, a, {
    theme: Vr((0, rt.default)({}, a, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (a, l = {}) => {
    (0, Ki.internal_processStyles)(a, (g) => g.filter((P) => !(P != null && P.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = ep(Xi(u))
    } = l, x = (0, go.default)(l, Kf), y = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), h = p || !1;
    let v;
    process.env.NODE_ENV !== "production" && c && (v = `${c}-${Xi(u || "Root")}`);
    let S = Qr;
    u === "Root" || u === "root" ? S = n : u ? S = i : Zf(a) && (S = void 0);
    const w = (0, Ki.default)(a, (0, rt.default)({
      shouldForwardProp: S,
      label: v
    }, x)), O = (g) => typeof g == "function" && g.__emotion_real !== g || (0, zf.isPlainObject)(g) ? (P) => en(g, (0, rt.default)({}, P, {
      theme: Vr({
        theme: P.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : g, R = (g, ...P) => {
      let T = O(g);
      const z = P ? P.map(O) : [];
      c && m && z.push((N) => {
        const W = Vr((0, rt.default)({}, N, {
          defaultTheme: r,
          themeId: t
        }));
        if (!W.components || !W.components[c] || !W.components[c].styleOverrides)
          return null;
        const F = W.components[c].styleOverrides, I = {};
        return Object.entries(F).forEach(([Y, H]) => {
          I[Y] = en(H, (0, rt.default)({}, N, {
            theme: W
          }));
        }), m(N, I);
      }), c && !y && z.push((N) => {
        var W;
        const F = Vr((0, rt.default)({}, N, {
          defaultTheme: r,
          themeId: t
        })), I = F == null || (W = F.components) == null || (W = W[c]) == null ? void 0 : W.variants;
        return en({
          variants: I
        }, (0, rt.default)({}, N, {
          theme: F
        }));
      }), h || z.push(s);
      const G = z.length - P.length;
      if (Array.isArray(g) && G > 0) {
        const N = new Array(G).fill("");
        T = [...g, ...N], T.raw = [...g.raw, ...N];
      }
      const U = w(T, ...z);
      if (process.env.NODE_ENV !== "production") {
        let N;
        c && (N = `${c}${(0, Uf.default)(u || "")}`), N === void 0 && (N = `Styled(${(0, Wf.default)(a)})`), U.displayName = N;
      }
      return a.muiName && (U.muiName = a.muiName), U;
    };
    return w.withConfig && (R.withConfig = w.withConfig), R;
  };
}
function Uo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const rp = (e) => Uo(e) && e !== "classes", jr = rp, np = Bf({
  themeId: xo,
  defaultTheme: zo,
  rootShouldForwardProp: jr
}), ye = np, op = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, Ji = op;
function ip(e) {
  return Le("MuiSvgIcon", e);
}
Ue("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const sp = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], ap = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, i = {
    root: ["root", t !== "inherit" && `color${de(t)}`, `fontSize${de(r)}`]
  };
  return We(i, ip, n);
}, lp = ye("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${de(r.color)}`], t[`fontSize${de(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, i, s, a, l, c, u, d, p, m, x, y;
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
      duration: (i = e.transitions) == null || (i = i.duration) == null ? void 0 : i.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((s = e.typography) == null || (a = s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (m = (e.vars || e).palette) == null || (m = m[t.color]) == null ? void 0 : m.main) != null ? p : {
      action: (x = (e.vars || e).palette) == null || (x = x.action) == null ? void 0 : x.active,
      disabled: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.disabled,
      inherit: void 0
    }[t.color]
  };
}), Wo = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: p,
    viewBox: m = "0 0 24 24"
  } = n, x = ge(n, sp), y = /* @__PURE__ */ E.isValidElement(i) && i.type === "svg", h = b({}, n, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: m,
    hasSvgAsChild: y
  }), v = {};
  d || (v.viewBox = m);
  const S = ap(h);
  return /* @__PURE__ */ $.jsxs(lp, b({
    as: l,
    className: pe(S.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r
  }, v, x, y && i.props, {
    ownerState: h,
    children: [y ? i.props.children : i, p ? /* @__PURE__ */ $.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Wo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
Wo.muiName = "SvgIcon";
const Zi = Wo;
function qo(e, t) {
  function r(n, i) {
    return /* @__PURE__ */ $.jsx(Zi, b({
      "data-testid": `${t}Icon`,
      ref: i
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Zi.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(r));
}
const cp = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), Qs.configure(e);
  }
}, up = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: de,
  createChainedFunction: on,
  createSvgIcon: qo,
  debounce: ca,
  deprecatedPropType: gd,
  isMuiElement: Zr,
  ownerDocument: Ze,
  ownerWindow: or,
  requirePropFactory: yd,
  setRef: sn,
  unstable_ClassNameGenerator: cp,
  unstable_useEnhancedEffect: _r,
  unstable_useId: Ed,
  unsupportedProp: xd,
  useControlled: Do,
  useEventCallback: yt,
  useForkRef: pt,
  useIsFocusVisible: Lo
}, Symbol.toStringTag, { value: "Module" }));
function dp(e) {
  return qe;
}
function yo(e, t) {
  return yo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, yo(e, t);
}
function Ta(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, yo(e, t);
}
const Qi = {
  disabled: !1
};
var fp = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
  enter: o.number,
  exit: o.number,
  appear: o.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && o.oneOfType([o.string, o.shape({
  enter: o.string,
  exit: o.string,
  active: o.string
}), o.shape({
  enter: o.string,
  enterDone: o.string,
  enterActive: o.string,
  exit: o.string,
  exitDone: o.string,
  exitActive: o.string
})]);
const ln = dt.createContext(null);
var pp = function(t) {
  return t.scrollTop;
}, vr = "unmounted", At = "exited", It = "entering", Zt = "entered", bo = "exiting", Rt = /* @__PURE__ */ function(e) {
  Ta(t, e);
  function t(n, i) {
    var s;
    s = e.call(this, n, i) || this;
    var a = i, l = a && !a.isMounting ? n.enter : n.appear, c;
    return s.appearStatus = null, n.in ? l ? (c = At, s.appearStatus = It) : c = Zt : n.unmountOnExit || n.mountOnEnter ? c = vr : c = At, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === vr ? {
      status: At
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== It && a !== Zt && (s = It) : (a === It || a === Zt) && (s = bo);
    }
    this.updateStatus(!1, s);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var i = this.props.timeout, s, a, l;
    return s = a = l = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, r.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === It) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Ir.findDOMNode(this);
          a && pp(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === At && this.setState({
        status: vr
      });
  }, r.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [Ir.findDOMNode(this), l], u = c[0], d = c[1], p = this.getTimeouts(), m = l ? p.appear : p.enter;
    if (!i && !a || Qi.disabled) {
      this.safeSetState({
        status: Zt
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: It
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(m, function() {
        s.safeSetState({
          status: Zt
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, r.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : Ir.findDOMNode(this);
    if (!s || Qi.disabled) {
      this.safeSetState({
        status: At
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: bo
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: At
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, r.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Ir.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, r.render = function() {
    var i = this.state.status;
    if (i === vr)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = ge(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ dt.createElement(ln.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : dt.cloneElement(dt.Children.only(a), l))
    );
  }, t;
}(dt.Component);
Rt.contextType = ln;
Rt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: o.shape({
    current: typeof Element > "u" ? o.any : function(e, t, r, n, i, s) {
      var a = e[t];
      return o.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, n, i, s);
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
  children: o.oneOfType([o.func.isRequired, o.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: o.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: o.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: o.bool,
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
  appear: o.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: o.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: o.bool,
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
    var r = fp;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      i[s - 1] = arguments[s];
    return r.apply(void 0, [t].concat(i));
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
  addEndListener: o.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: o.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: o.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: o.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: o.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: o.func
} : {};
function Xt() {
}
Rt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Xt,
  onEntering: Xt,
  onEntered: Xt,
  onExit: Xt,
  onExiting: Xt,
  onExited: Xt
};
Rt.UNMOUNTED = vr;
Rt.EXITED = At;
Rt.ENTERING = It;
Rt.ENTERED = Zt;
Rt.EXITING = bo;
const Sa = Rt;
function mp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yo(e, t) {
  var r = function(s) {
    return t && Yr(s) ? t(s) : s;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ol.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    n[i.key] = r(i);
  }), n;
}
function hp(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (n[s] = i, i = []) : i.push(s);
  var a, l = {};
  for (var c in t) {
    if (n[c])
      for (a = 0; a < n[c].length; a++) {
        var u = n[c][a];
        l[n[c][a]] = r(u);
      }
    l[c] = r(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = r(i[a]);
  return l;
}
function Dt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function vp(e, t) {
  return Yo(e.children, function(r) {
    return Hr(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Dt(r, "appear", e),
      enter: Dt(r, "enter", e),
      exit: Dt(r, "exit", e)
    });
  });
}
function gp(e, t, r) {
  var n = Yo(e.children), i = hp(t, n);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (Yr(a)) {
      var l = s in t, c = s in n, u = t[s], d = Yr(u) && !u.props.in;
      c && (!l || d) ? i[s] = Hr(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Dt(a, "exit", e),
        enter: Dt(a, "enter", e)
      }) : !c && l && !d ? i[s] = Hr(a, {
        in: !1
      }) : c && l && Yr(u) && (i[s] = Hr(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: Dt(a, "exit", e),
        enter: Dt(a, "enter", e)
      }));
    }
  }), i;
}
var yp = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, bp = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ho = /* @__PURE__ */ function(e) {
  Ta(t, e);
  function t(n, i) {
    var s;
    s = e.call(this, n, i) || this;
    var a = s.handleExited.bind(mp(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
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
  }, t.getDerivedStateFromProps = function(i, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? vp(i, l) : gp(i, a, l),
      firstRender: !1
    };
  }, r.handleExited = function(i, s) {
    var a = Yo(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = b({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = ge(i, ["component", "childFactory"]), c = this.state.contextValue, u = yp(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ dt.createElement(ln.Provider, {
      value: c
    }, u) : /* @__PURE__ */ dt.createElement(ln.Provider, {
      value: c
    }, /* @__PURE__ */ dt.createElement(s, l, u));
  }, t;
}(dt.Component);
Ho.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: o.any,
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
  children: o.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: o.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: o.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: o.bool,
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
  childFactory: o.func
} : {};
Ho.defaultProps = bp;
const Ep = Ho, Oa = (e) => e.scrollTop;
function cn(e, t) {
  var r, n;
  const {
    timeout: i,
    easing: s,
    style: a = {}
  } = e;
  return {
    duration: (r = a.transitionDuration) != null ? r : typeof i == "number" ? i : i[t.mode] || 0,
    easing: (n = a.transitionTimingFunction) != null ? n : typeof s == "object" ? s[t.mode] : s,
    delay: a.transitionDelay
  };
}
function xp(e) {
  return Le("MuiPaper", e);
}
Ue("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Tp = ["className", "component", "elevation", "square", "variant"], Sp = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: i
  } = e, s = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return We(s, xp, i);
}, Op = ye("div", {
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
  return b({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && b({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Pt("#fff", Ji(t.elevation))}, ${Pt("#fff", Ji(t.elevation))})`
  }, e.vars && {
    backgroundImage: (r = e.vars.overlays) == null ? void 0 : r[t.elevation]
  }));
}), Ra = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = n, u = ge(n, Tp), d = b({}, n, {
    component: s,
    elevation: a,
    square: l,
    variant: c
  }), p = Sp(d);
  return process.env.NODE_ENV !== "production" && Mn().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ $.jsx(Op, b({
    as: s,
    ownerState: d,
    className: pe(p.root, i),
    ref: r
  }, u));
});
process.env.NODE_ENV !== "production" && (Ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: kt(fa, (e) => {
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
  square: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: o.oneOfType([o.oneOf(["elevation", "outlined"]), o.string])
});
const Rp = Ra;
function br(e) {
  return typeof e == "string";
}
function Cp(e, t, r) {
  return e === void 0 || br(e) ? t : b({}, t, {
    ownerState: b({}, t.ownerState, r)
  });
}
function _p(e, t, r = (n, i) => n === i) {
  return e.length === t.length && e.every((n, i) => r(n, t[i]));
}
function Er(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function wp(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function es(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function kp(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const x = pe(r == null ? void 0 : r.className, s, i == null ? void 0 : i.className, n == null ? void 0 : n.className), y = b({}, r == null ? void 0 : r.style, i == null ? void 0 : i.style, n == null ? void 0 : n.style), h = b({}, r, i, n);
    return x.length > 0 && (h.className = x), Object.keys(y).length > 0 && (h.style = y), {
      props: h,
      internalRef: void 0
    };
  }
  const a = Er(b({}, i, n)), l = es(n), c = es(i), u = t(a), d = pe(u == null ? void 0 : u.className, r == null ? void 0 : r.className, s, i == null ? void 0 : i.className, n == null ? void 0 : n.className), p = b({}, u == null ? void 0 : u.style, r == null ? void 0 : r.style, i == null ? void 0 : i.style, n == null ? void 0 : n.style), m = b({}, u, r, c, l);
  return d.length > 0 && (m.className = d), Object.keys(p).length > 0 && (m.style = p), {
    props: m,
    internalRef: u.ref
  };
}
const Pp = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function vt(e) {
  var t;
  const {
    elementType: r,
    externalSlotProps: n,
    ownerState: i,
    skipResolvingSlotProps: s = !1
  } = e, a = ge(e, Pp), l = s ? {} : wp(n, i), {
    props: c,
    internalRef: u
  } = kp(b({}, a, {
    externalSlotProps: l
  })), d = pt(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Cp(r, b({}, c, {
    ref: d
  }), i);
}
function Ca(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, p] = E.useState(!1), m = pe(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, y = pe(r.child, d && r.childLeaving, n && r.childPulsate);
  return !l && !d && p(!0), E.useEffect(() => {
    if (!l && c != null) {
      const h = setTimeout(c, u);
      return () => {
        clearTimeout(h);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ $.jsx("span", {
    className: m,
    style: x,
    children: /* @__PURE__ */ $.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (Ca.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object.isRequired,
  className: o.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: o.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: o.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: o.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: o.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: o.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: o.number,
  /**
   * exit delay
   */
  timeout: o.number.isRequired
});
const $p = Ue("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), nt = $p, Np = ["center", "classes", "className"];
let An = (e) => e, ts, rs, ns, os;
const Eo = 550, jp = 80, Mp = bn(ts || (ts = An`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Ap = bn(rs || (rs = An`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Ip = bn(ns || (ns = An`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Dp = ye("span", {
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
}), Lp = ye(Ca, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(os || (os = An`
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
`), nt.rippleVisible, Mp, Eo, ({
  theme: e
}) => e.transitions.easing.easeInOut, nt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, nt.child, nt.childLeaving, Ap, Eo, ({
  theme: e
}) => e.transitions.easing.easeInOut, nt.childPulsate, Ip, ({
  theme: e
}) => e.transitions.easing.easeInOut), _a = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a
  } = n, l = ge(n, Np), [c, u] = E.useState([]), d = E.useRef(0), p = E.useRef(null);
  E.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const m = E.useRef(!1), x = Rd(), y = E.useRef(null), h = E.useRef(null), v = E.useCallback((R) => {
    const {
      pulsate: g,
      rippleX: P,
      rippleY: T,
      rippleSize: z,
      cb: G
    } = R;
    u((U) => [...U, /* @__PURE__ */ $.jsx(Lp, {
      classes: {
        ripple: pe(s.ripple, nt.ripple),
        rippleVisible: pe(s.rippleVisible, nt.rippleVisible),
        ripplePulsate: pe(s.ripplePulsate, nt.ripplePulsate),
        child: pe(s.child, nt.child),
        childLeaving: pe(s.childLeaving, nt.childLeaving),
        childPulsate: pe(s.childPulsate, nt.childPulsate)
      },
      timeout: Eo,
      pulsate: g,
      rippleX: P,
      rippleY: T,
      rippleSize: z
    }, d.current)]), d.current += 1, p.current = G;
  }, [s]), S = E.useCallback((R = {}, g = {}, P = () => {
  }) => {
    const {
      pulsate: T = !1,
      center: z = i || g.pulsate,
      fakeElement: G = !1
      // For test purposes
    } = g;
    if ((R == null ? void 0 : R.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (R == null ? void 0 : R.type) === "touchstart" && (m.current = !0);
    const U = G ? null : h.current, N = U ? U.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let W, F, I;
    if (z || R === void 0 || R.clientX === 0 && R.clientY === 0 || !R.clientX && !R.touches)
      W = Math.round(N.width / 2), F = Math.round(N.height / 2);
    else {
      const {
        clientX: Y,
        clientY: H
      } = R.touches && R.touches.length > 0 ? R.touches[0] : R;
      W = Math.round(Y - N.left), F = Math.round(H - N.top);
    }
    if (z)
      I = Math.sqrt((2 * N.width ** 2 + N.height ** 2) / 3), I % 2 === 0 && (I += 1);
    else {
      const Y = Math.max(Math.abs((U ? U.clientWidth : 0) - W), W) * 2 + 2, H = Math.max(Math.abs((U ? U.clientHeight : 0) - F), F) * 2 + 2;
      I = Math.sqrt(Y ** 2 + H ** 2);
    }
    R != null && R.touches ? y.current === null && (y.current = () => {
      v({
        pulsate: T,
        rippleX: W,
        rippleY: F,
        rippleSize: I,
        cb: P
      });
    }, x.start(jp, () => {
      y.current && (y.current(), y.current = null);
    })) : v({
      pulsate: T,
      rippleX: W,
      rippleY: F,
      rippleSize: I,
      cb: P
    });
  }, [i, v, x]), w = E.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), O = E.useCallback((R, g) => {
    if (x.clear(), (R == null ? void 0 : R.type) === "touchend" && y.current) {
      y.current(), y.current = null, x.start(0, () => {
        O(R, g);
      });
      return;
    }
    y.current = null, u((P) => P.length > 0 ? P.slice(1) : P), p.current = g;
  }, [x]);
  return E.useImperativeHandle(r, () => ({
    pulsate: w,
    start: S,
    stop: O
  }), [w, S, O]), /* @__PURE__ */ $.jsx(Dp, b({
    className: pe(nt.root, s.root, a),
    ref: h
  }, l, {
    children: /* @__PURE__ */ $.jsx(Ep, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (_a.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string
});
const Fp = _a;
function Vp(e) {
  return Le("MuiButtonBase", e);
}
const Bp = Ue("MuiButtonBase", ["root", "disabled", "focusVisible"]), zp = Bp, Up = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Wp = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: i
  } = e, a = We({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Vp, i);
  return r && n && (a.root += ` ${n}`), a;
}, qp = ye("button", {
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
  [`&.${zp.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), wa = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: m = !1,
    LinkComponent: x = "a",
    onBlur: y,
    onClick: h,
    onContextMenu: v,
    onDragLeave: S,
    onFocus: w,
    onFocusVisible: O,
    onKeyDown: R,
    onKeyUp: g,
    onMouseDown: P,
    onMouseLeave: T,
    onMouseUp: z,
    onTouchEnd: G,
    onTouchMove: U,
    onTouchStart: N,
    tabIndex: W = 0,
    TouchRippleProps: F,
    touchRippleRef: I,
    type: Y
  } = n, H = ge(n, Up), q = E.useRef(null), D = E.useRef(null), ae = pt(D, I), {
    isFocusVisibleRef: _,
    onFocus: V,
    onBlur: ne,
    ref: J
  } = Lo(), [B, ee] = E.useState(!1);
  u && B && ee(!1), E.useImperativeHandle(i, () => ({
    focusVisible: () => {
      ee(!0), q.current.focus();
    }
  }), []);
  const [X, Z] = E.useState(!1);
  E.useEffect(() => {
    Z(!0);
  }, []);
  const te = X && !d && !u;
  E.useEffect(() => {
    B && m && !d && X && D.current.pulsate();
  }, [d, m, B, X]);
  function Q(C, K, ce = p) {
    return yt((he) => (K && K(he), !ce && D.current && D.current[C](he), !0));
  }
  const oe = Q("start", P), Ce = Q("stop", v), A = Q("stop", S), ve = Q("stop", z), j = Q("stop", (C) => {
    B && C.preventDefault(), T && T(C);
  }), me = Q("start", N), ke = Q("stop", G), Ve = Q("stop", U), Be = Q("stop", (C) => {
    ne(C), _.current === !1 && ee(!1), y && y(C);
  }, !1), mt = yt((C) => {
    q.current || (q.current = C.currentTarget), V(C), _.current === !0 && (ee(!0), O && O(C)), w && w(C);
  }), Pe = () => {
    const C = q.current;
    return c && c !== "button" && !(C.tagName === "A" && C.href);
  }, Qe = E.useRef(!1), Et = yt((C) => {
    m && !Qe.current && B && D.current && C.key === " " && (Qe.current = !0, D.current.stop(C, () => {
      D.current.start(C);
    })), C.target === C.currentTarget && Pe() && C.key === " " && C.preventDefault(), R && R(C), C.target === C.currentTarget && Pe() && C.key === "Enter" && !u && (C.preventDefault(), h && h(C));
  }), Nt = yt((C) => {
    m && C.key === " " && D.current && B && !C.defaultPrevented && (Qe.current = !1, D.current.stop(C, () => {
      D.current.pulsate(C);
    })), g && g(C), h && C.target === C.currentTarget && Pe() && C.key === " " && !C.defaultPrevented && h(C);
  });
  let ht = c;
  ht === "button" && (H.href || H.to) && (ht = x);
  const ct = {};
  ht === "button" ? (ct.type = Y === void 0 ? "button" : Y, ct.disabled = u) : (!H.href && !H.to && (ct.role = "button"), u && (ct["aria-disabled"] = u));
  const Ct = pt(r, J, q);
  process.env.NODE_ENV !== "production" && E.useEffect(() => {
    te && !D.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [te]);
  const Ye = b({}, n, {
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: m,
    tabIndex: W,
    focusVisible: B
  }), M = Wp(Ye);
  return /* @__PURE__ */ $.jsxs(qp, b({
    as: ht,
    className: pe(M.root, l),
    ownerState: Ye,
    onBlur: Be,
    onClick: h,
    onContextMenu: Ce,
    onFocus: mt,
    onKeyDown: Et,
    onKeyUp: Nt,
    onMouseDown: oe,
    onMouseLeave: j,
    onMouseUp: ve,
    onDragLeave: A,
    onTouchEnd: ke,
    onTouchMove: Ve,
    onTouchStart: me,
    ref: Ct,
    tabIndex: u ? -1 : W,
    type: Y
  }, ct, H, {
    children: [a, te ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ $.jsx(Fp, b({
        ref: ae,
        center: s
      }, F))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (wa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Pn,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: md,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
const ka = wa;
function Yp(e) {
  return Le("MuiIconButton", e);
}
const Hp = Ue("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Gp = Hp, Kp = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Xp = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: i,
    size: s
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${de(n)}`, i && `edge${de(i)}`, `size${de(s)}`]
  };
  return We(a, Yp, t);
}, Jp = ye(ka, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${de(r.color)}`], r.edge && t[`edge${de(r.edge)}`], t[`size${de(r.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Pt(e.palette.action.active, e.palette.action.hoverOpacity),
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
  return b({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && b({
    color: n == null ? void 0 : n.main
  }, !t.disableRipple && {
    "&:hover": b({}, n && {
      backgroundColor: e.vars ? `rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Pt(n.main, e.palette.action.hoverOpacity)
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
    [`&.${Gp.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), Pa = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: s,
    className: a,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = n, p = ge(n, Kp), m = b({}, n, {
    edge: i,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), x = Xp(m);
  return /* @__PURE__ */ $.jsx(Jp, b({
    className: pe(x.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: r
  }, p, {
    ownerState: m,
    children: s
  }));
});
process.env.NODE_ENV !== "production" && (Pa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: kt(o.node, (e) => E.Children.toArray(e.children).some((r) => /* @__PURE__ */ E.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const is = Pa;
function Zp(e) {
  return Le("MuiTypography", e);
}
Ue("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Qp = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], em = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${de(t)}`, r && "gutterBottom", n && "noWrap", i && "paragraph"]
  };
  return We(l, Zp, a);
}, tm = ye("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${de(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
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
})), ss = {
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
}, rm = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, nm = (e) => rm[e] || e, $a = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiTypography"
  }), i = nm(n.color), s = Ao(b({}, n, {
    color: i
  })), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: p = !1,
    variant: m = "body1",
    variantMapping: x = ss
  } = s, y = ge(s, Qp), h = b({}, s, {
    align: a,
    color: i,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: d,
    paragraph: p,
    variant: m,
    variantMapping: x
  }), v = c || (p ? "p" : x[m] || ss[m]) || "span", S = em(h);
  return /* @__PURE__ */ $.jsx(tm, b({
    as: v,
    ref: r,
    ownerState: h,
    className: pe(S.root, l)
  }, y));
});
process.env.NODE_ENV !== "production" && ($a.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: o.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: o.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: o.oneOfType([o.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), o.string]),
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
  variantMapping: o.object
});
const wt = $a, om = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function im(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function sm(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function am(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || sm(e));
}
function lm(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(om)).forEach((n, i) => {
    const s = im(n);
    s === -1 || !am(n) || (s === 0 ? t.push(n) : r.push({
      documentOrder: i,
      tabIndex: s,
      node: n
    }));
  }), r.sort((n, i) => n.tabIndex === i.tabIndex ? n.documentOrder - i.documentOrder : n.tabIndex - i.tabIndex).map((n) => n.node).concat(t);
}
function cm() {
  return !0;
}
function un(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = lm,
    isEnabled: a = cm,
    open: l
  } = e, c = E.useRef(!1), u = E.useRef(null), d = E.useRef(null), p = E.useRef(null), m = E.useRef(null), x = E.useRef(!1), y = E.useRef(null), h = pt(t.ref, y), v = E.useRef(null);
  E.useEffect(() => {
    !l || !y.current || (x.current = !r);
  }, [r, l]), E.useEffect(() => {
    if (!l || !y.current)
      return;
    const O = Ze(y.current);
    return y.current.contains(O.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), x.current && y.current.focus()), () => {
      i || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), E.useEffect(() => {
    if (!l || !y.current)
      return;
    const O = Ze(y.current), R = (T) => {
      v.current = T, !(n || !a() || T.key !== "Tab") && O.activeElement === y.current && T.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, g = () => {
      const T = y.current;
      if (T === null)
        return;
      if (!O.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (T.contains(O.activeElement) || n && O.activeElement !== u.current && O.activeElement !== d.current)
        return;
      if (O.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!x.current)
        return;
      let z = [];
      if ((O.activeElement === u.current || O.activeElement === d.current) && (z = s(y.current)), z.length > 0) {
        var G, U;
        const N = !!((G = v.current) != null && G.shiftKey && ((U = v.current) == null ? void 0 : U.key) === "Tab"), W = z[0], F = z[z.length - 1];
        typeof W != "string" && typeof F != "string" && (N ? F.focus() : W.focus());
      } else
        T.focus();
    };
    O.addEventListener("focusin", g), O.addEventListener("keydown", R, !0);
    const P = setInterval(() => {
      O.activeElement && O.activeElement.tagName === "BODY" && g();
    }, 50);
    return () => {
      clearInterval(P), O.removeEventListener("focusin", g), O.removeEventListener("keydown", R, !0);
    };
  }, [r, n, i, a, l, s]);
  const S = (O) => {
    p.current === null && (p.current = O.relatedTarget), x.current = !0, m.current = O.target;
    const R = t.props.onFocus;
    R && R(O);
  }, w = (O) => {
    p.current === null && (p.current = O.relatedTarget), x.current = !0;
  };
  return /* @__PURE__ */ $.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ $.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: h,
      onFocus: S
    }), /* @__PURE__ */ $.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: w,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (un.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: kn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: o.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: o.func,
  /**
   * If `true`, focus is locked.
   */
  open: o.bool.isRequired
});
process.env.NODE_ENV !== "production" && (un["propTypes"] = la(un.propTypes));
function um(e) {
  return typeof e == "function" ? e() : e;
}
const dn = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    children: n,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = E.useState(null), c = pt(/* @__PURE__ */ E.isValidElement(n) ? n.ref : null, r);
  if (_r(() => {
    s || l(um(i) || document.body);
  }, [i, s]), _r(() => {
    if (a && !s)
      return sn(r, a), () => {
        sn(r, null);
      };
  }, [r, a, s]), s) {
    if (/* @__PURE__ */ E.isValidElement(n)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ E.cloneElement(n, u);
    }
    return /* @__PURE__ */ $.jsx(E.Fragment, {
      children: n
    });
  }
  return /* @__PURE__ */ $.jsx(E.Fragment, {
    children: a && /* @__PURE__ */ sl.createPortal(n, a)
  });
});
process.env.NODE_ENV !== "production" && (dn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: o.node,
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
  container: o.oneOfType([Io, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (dn["propTypes"] = la(dn.propTypes));
function dm(e) {
  const t = Ze(e);
  return t.body === e ? or(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function xr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function as(e) {
  return parseInt(or(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function fm(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function ls(e, t, r, n, i) {
  const s = [t, r, ...n];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !fm(a);
    l && c && xr(a, i);
  });
}
function eo(e, t) {
  let r = -1;
  return e.some((n, i) => t(n) ? (r = i, !0) : !1), r;
}
function pm(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (dm(n)) {
      const a = jd(Ze(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${as(n) + a}px`;
      const l = Ze(n).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        r.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${as(c) + a}px`;
      });
    }
    let s;
    if (n.parentNode instanceof DocumentFragment)
      s = Ze(n).body;
    else {
      const a = n.parentElement, l = or(n);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : n;
    }
    r.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    r.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function mm(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class hm {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && xr(t.modalRef, !1);
    const i = mm(r);
    ls(r, t.mount, t.modalRef, i, !0);
    const s = eo(this.containers, (a) => a.container === r);
    return s !== -1 ? (this.containers[s].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: i
    }), n);
  }
  mount(t, r) {
    const n = eo(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[n];
    i.restore || (i.restore = pm(i, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const i = eo(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(n, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && xr(t.modalRef, r), ls(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && xr(a.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function vm(e) {
  return typeof e == "function" ? e() : e;
}
function gm(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ym = new hm();
function bm(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = ym,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: p
  } = e, m = E.useRef({}), x = E.useRef(null), y = E.useRef(null), h = pt(y, p), [v, S] = E.useState(!d), w = gm(c);
  let O = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (O = !1);
  const R = () => Ze(x.current), g = () => (m.current.modalRef = y.current, m.current.mount = x.current, m.current), P = () => {
    i.mount(g(), {
      disableScrollLock: n
    }), y.current && (y.current.scrollTop = 0);
  }, T = yt(() => {
    const H = vm(t) || R().body;
    i.add(g(), H), y.current && P();
  }), z = E.useCallback(() => i.isTopModal(g()), [i]), G = yt((H) => {
    x.current = H, H && (d && z() ? P() : y.current && xr(y.current, O));
  }), U = E.useCallback(() => {
    i.remove(g(), O);
  }, [O, i]);
  E.useEffect(() => () => {
    U();
  }, [U]), E.useEffect(() => {
    d ? T() : (!w || !s) && U();
  }, [d, U, w, s, T]);
  const N = (H) => (q) => {
    var D;
    (D = H.onKeyDown) == null || D.call(H, q), !(q.key !== "Escape" || q.which === 229 || // Wait until IME is settled.
    !z()) && (r || (q.stopPropagation(), u && u(q, "escapeKeyDown")));
  }, W = (H) => (q) => {
    var D;
    (D = H.onClick) == null || D.call(H, q), q.target === q.currentTarget && u && u(q, "backdropClick");
  };
  return {
    getRootProps: (H = {}) => {
      const q = Er(e);
      delete q.onTransitionEnter, delete q.onTransitionExited;
      const D = b({}, q, H);
      return b({
        role: "presentation"
      }, D, {
        onKeyDown: N(D),
        ref: h
      });
    },
    getBackdropProps: (H = {}) => {
      const q = H;
      return b({
        "aria-hidden": !0
      }, q, {
        onClick: W(q),
        open: d
      });
    },
    getTransitionProps: () => {
      const H = () => {
        S(!1), a && a();
      }, q = () => {
        S(!0), l && l(), s && U();
      };
      return {
        onEnter: on(H, c == null ? void 0 : c.props.onEnter),
        onExited: on(q, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: h,
    portalRef: G,
    isTopModal: z,
    exited: v,
    hasTransition: w
  };
}
const Em = 2;
function Na(e, t) {
  return e - t;
}
function cs(e, t) {
  var r;
  const {
    index: n
  } = (r = e.reduce((i, s, a) => {
    const l = Math.abs(t - s);
    return i === null || l < i.distance || l === i.distance ? {
      distance: l,
      index: a
    } : i;
  }, null)) != null ? r : {};
  return n;
}
function Br(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const r = e;
    for (let n = 0; n < r.changedTouches.length; n += 1) {
      const i = r.changedTouches[n];
      if (i.identifier === t.current)
        return {
          x: i.clientX,
          y: i.clientY
        };
    }
    return !1;
  }
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function fn(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function xm(e, t, r) {
  return (r - t) * e + t;
}
function Tm(e) {
  if (Math.abs(e) < 1) {
    const r = e.toExponential().split("e-"), n = r[0].split(".")[1];
    return (n ? n.length : 0) + parseInt(r[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function Sm(e, t, r) {
  const n = Math.round((e - r) / t) * t + r;
  return Number(n.toFixed(Tm(t)));
}
function us({
  values: e,
  newValue: t,
  index: r
}) {
  const n = e.slice();
  return n[r] = t, n.sort(Na);
}
function zr({
  sliderRef: e,
  activeIndex: t,
  setActive: r
}) {
  var n, i;
  const s = Ze(e.current);
  if (!((n = e.current) != null && n.contains(s.activeElement)) || Number(s == null || (i = s.activeElement) == null ? void 0 : i.getAttribute("data-index")) !== t) {
    var a;
    (a = e.current) == null || a.querySelector(`[type="range"][data-index="${t}"]`).focus();
  }
  r && r(t);
}
function Ur(e, t) {
  return typeof e == "number" && typeof t == "number" ? e === t : typeof e == "object" && typeof t == "object" ? _p(e, t) : !1;
}
const Om = {
  horizontal: {
    offset: (e) => ({
      left: `${e}%`
    }),
    leap: (e) => ({
      width: `${e}%`
    })
  },
  "horizontal-reverse": {
    offset: (e) => ({
      right: `${e}%`
    }),
    leap: (e) => ({
      width: `${e}%`
    })
  },
  vertical: {
    offset: (e) => ({
      bottom: `${e}%`
    }),
    leap: (e) => ({
      height: `${e}%`
    })
  }
}, Rm = (e) => e;
let Wr;
function ds() {
  return Wr === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? Wr = CSS.supports("touch-action", "none") : Wr = !0), Wr;
}
function Cm(e) {
  const {
    "aria-labelledby": t,
    defaultValue: r,
    disabled: n = !1,
    disableSwap: i = !1,
    isRtl: s = !1,
    marks: a = !1,
    max: l = 100,
    min: c = 0,
    name: u,
    onChange: d,
    onChangeCommitted: p,
    orientation: m = "horizontal",
    rootRef: x,
    scale: y = Rm,
    step: h = 1,
    shiftStep: v = 10,
    tabIndex: S,
    value: w
  } = e, O = E.useRef(), [R, g] = E.useState(-1), [P, T] = E.useState(-1), [z, G] = E.useState(!1), U = E.useRef(0), [N, W] = Do({
    controlled: w,
    default: r ?? c,
    name: "Slider"
  }), F = d && ((M, C, K) => {
    const ce = M.nativeEvent || M, he = new ce.constructor(ce.type, ce);
    Object.defineProperty(he, "target", {
      writable: !0,
      value: {
        value: C,
        name: u
      }
    }), d(he, C, K);
  }), I = Array.isArray(N);
  let Y = I ? N.slice().sort(Na) : [N];
  Y = Y.map((M) => M == null ? c : Jt(M, c, l));
  const H = a === !0 && h !== null ? [...Array(Math.floor((l - c) / h) + 1)].map((M, C) => ({
    value: c + h * C
  })) : a || [], q = H.map((M) => M.value), {
    isFocusVisibleRef: D,
    onBlur: ae,
    onFocus: _,
    ref: V
  } = Lo(), [ne, J] = E.useState(-1), B = E.useRef(), ee = pt(V, B), X = pt(x, ee), Z = (M) => (C) => {
    var K;
    const ce = Number(C.currentTarget.getAttribute("data-index"));
    _(C), D.current === !0 && J(ce), T(ce), M == null || (K = M.onFocus) == null || K.call(M, C);
  }, te = (M) => (C) => {
    var K;
    ae(C), D.current === !1 && J(-1), T(-1), M == null || (K = M.onBlur) == null || K.call(M, C);
  }, Q = (M, C) => {
    const K = Number(M.currentTarget.getAttribute("data-index")), ce = Y[K], he = q.indexOf(ce);
    let fe = C;
    if (H && h == null) {
      const Ke = q[q.length - 1];
      fe > Ke ? fe = Ke : fe < q[0] ? fe = q[0] : fe = fe < ce ? q[he - 1] : q[he + 1];
    }
    if (fe = Jt(fe, c, l), I) {
      i && (fe = Jt(fe, Y[K - 1] || -1 / 0, Y[K + 1] || 1 / 0));
      const Ke = fe;
      fe = us({
        values: Y,
        newValue: fe,
        index: K
      });
      let et = K;
      i || (et = fe.indexOf(Ke)), zr({
        sliderRef: B,
        activeIndex: et
      });
    }
    W(fe), J(K), F && !Ur(fe, N) && F(M, fe, K), p && p(M, fe);
  }, oe = (M) => (C) => {
    var K;
    if (h !== null) {
      const ce = Number(C.currentTarget.getAttribute("data-index")), he = Y[ce];
      let fe = null;
      (C.key === "ArrowLeft" || C.key === "ArrowDown") && C.shiftKey || C.key === "PageDown" ? fe = Math.max(he - v, c) : ((C.key === "ArrowRight" || C.key === "ArrowUp") && C.shiftKey || C.key === "PageUp") && (fe = Math.min(he + v, l)), fe !== null && (Q(C, fe), C.preventDefault());
    }
    M == null || (K = M.onKeyDown) == null || K.call(M, C);
  };
  _r(() => {
    if (n && B.current.contains(document.activeElement)) {
      var M;
      (M = document.activeElement) == null || M.blur();
    }
  }, [n]), n && R !== -1 && g(-1), n && ne !== -1 && J(-1);
  const Ce = (M) => (C) => {
    var K;
    (K = M.onChange) == null || K.call(M, C), Q(C, C.target.valueAsNumber);
  }, A = E.useRef();
  let ve = m;
  s && m === "horizontal" && (ve += "-reverse");
  const j = ({
    finger: M,
    move: C = !1
  }) => {
    const {
      current: K
    } = B, {
      width: ce,
      height: he,
      bottom: fe,
      left: Ke
    } = K.getBoundingClientRect();
    let et;
    ve.indexOf("vertical") === 0 ? et = (fe - M.y) / he : et = (M.x - Ke) / ce, ve.indexOf("-reverse") !== -1 && (et = 1 - et);
    let be;
    if (be = xm(et, c, l), h)
      be = Sm(be, h, c);
    else {
      const _t = cs(q, be);
      be = q[_t];
    }
    be = Jt(be, c, l);
    let He = 0;
    if (I) {
      C ? He = A.current : He = cs(Y, be), i && (be = Jt(be, Y[He - 1] || -1 / 0, Y[He + 1] || 1 / 0));
      const _t = be;
      be = us({
        values: Y,
        newValue: be,
        index: He
      }), i && C || (He = be.indexOf(_t), A.current = He);
    }
    return {
      newValue: be,
      activeIndex: He
    };
  }, me = yt((M) => {
    const C = Br(M, O);
    if (!C)
      return;
    if (U.current += 1, M.type === "mousemove" && M.buttons === 0) {
      ke(M);
      return;
    }
    const {
      newValue: K,
      activeIndex: ce
    } = j({
      finger: C,
      move: !0
    });
    zr({
      sliderRef: B,
      activeIndex: ce,
      setActive: g
    }), W(K), !z && U.current > Em && G(!0), F && !Ur(K, N) && F(M, K, ce);
  }), ke = yt((M) => {
    const C = Br(M, O);
    if (G(!1), !C)
      return;
    const {
      newValue: K
    } = j({
      finger: C,
      move: !0
    });
    g(-1), M.type === "touchend" && T(-1), p && p(M, K), O.current = void 0, Be();
  }), Ve = yt((M) => {
    if (n)
      return;
    ds() || M.preventDefault();
    const C = M.changedTouches[0];
    C != null && (O.current = C.identifier);
    const K = Br(M, O);
    if (K !== !1) {
      const {
        newValue: he,
        activeIndex: fe
      } = j({
        finger: K
      });
      zr({
        sliderRef: B,
        activeIndex: fe,
        setActive: g
      }), W(he), F && !Ur(he, N) && F(M, he, fe);
    }
    U.current = 0;
    const ce = Ze(B.current);
    ce.addEventListener("touchmove", me, {
      passive: !0
    }), ce.addEventListener("touchend", ke, {
      passive: !0
    });
  }), Be = E.useCallback(() => {
    const M = Ze(B.current);
    M.removeEventListener("mousemove", me), M.removeEventListener("mouseup", ke), M.removeEventListener("touchmove", me), M.removeEventListener("touchend", ke);
  }, [ke, me]);
  E.useEffect(() => {
    const {
      current: M
    } = B;
    return M.addEventListener("touchstart", Ve, {
      passive: ds()
    }), () => {
      M.removeEventListener("touchstart", Ve), Be();
    };
  }, [Be, Ve]), E.useEffect(() => {
    n && Be();
  }, [n, Be]);
  const mt = (M) => (C) => {
    var K;
    if ((K = M.onMouseDown) == null || K.call(M, C), n || C.defaultPrevented || C.button !== 0)
      return;
    C.preventDefault();
    const ce = Br(C, O);
    if (ce !== !1) {
      const {
        newValue: fe,
        activeIndex: Ke
      } = j({
        finger: ce
      });
      zr({
        sliderRef: B,
        activeIndex: Ke,
        setActive: g
      }), W(fe), F && !Ur(fe, N) && F(C, fe, Ke);
    }
    U.current = 0;
    const he = Ze(B.current);
    he.addEventListener("mousemove", me, {
      passive: !0
    }), he.addEventListener("mouseup", ke);
  }, Pe = fn(I ? Y[0] : c, c, l), Qe = fn(Y[Y.length - 1], c, l) - Pe, Et = (M = {}) => {
    const C = Er(M), K = {
      onMouseDown: mt(C || {})
    }, ce = b({}, C, K);
    return b({}, M, {
      ref: X
    }, ce);
  }, Nt = (M) => (C) => {
    var K;
    (K = M.onMouseOver) == null || K.call(M, C);
    const ce = Number(C.currentTarget.getAttribute("data-index"));
    T(ce);
  }, ht = (M) => (C) => {
    var K;
    (K = M.onMouseLeave) == null || K.call(M, C), T(-1);
  };
  return {
    active: R,
    axis: ve,
    axisProps: Om,
    dragging: z,
    focusedThumbIndex: ne,
    getHiddenInputProps: (M = {}) => {
      var C;
      const K = Er(M), ce = {
        onChange: Ce(K || {}),
        onFocus: Z(K || {}),
        onBlur: te(K || {}),
        onKeyDown: oe(K || {})
      }, he = b({}, K, ce);
      return b({
        tabIndex: S,
        "aria-labelledby": t,
        "aria-orientation": m,
        "aria-valuemax": y(l),
        "aria-valuemin": y(c),
        name: u,
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step === null && e.marks ? "any" : (C = e.step) != null ? C : void 0,
        disabled: n
      }, M, he, {
        style: b({}, Ad, {
          direction: s ? "rtl" : "ltr",
          // So that VoiceOver's focus indicator matches the thumb's dimensions
          width: "100%",
          height: "100%"
        })
      });
    },
    getRootProps: Et,
    getThumbProps: (M = {}) => {
      const C = Er(M), K = {
        onMouseOver: Nt(C || {}),
        onMouseLeave: ht(C || {})
      };
      return b({}, M, C, K);
    },
    marks: H,
    open: P,
    range: I,
    rootRef: X,
    trackLeap: Qe,
    trackOffset: Pe,
    values: Y,
    getThumbStyle: (M) => ({
      // So the non active thumb doesn't show its label on hover.
      pointerEvents: R !== -1 && R !== M ? "none" : void 0
    })
  };
}
function _m({
  props: e,
  states: t,
  muiFormControl: r
}) {
  return t.reduce((n, i) => (n[i] = e[i], r && typeof e[i] > "u" && (n[i] = r[i]), n), {});
}
const ja = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (ja.displayName = "FormControlContext");
const Ma = ja;
function Aa() {
  return E.useContext(Ma);
}
function fs(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function ps(e, t = !1) {
  return e && (fs(e.value) && e.value !== "" || t && fs(e.defaultValue) && e.defaultValue !== "");
}
function wm(e) {
  return e.startAdornment;
}
const km = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Pm = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ia = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Mn(), i = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: p,
    onEntering: m,
    onExit: x,
    onExited: y,
    onExiting: h,
    style: v,
    timeout: S = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = Sa
  } = t, O = ge(t, km), R = E.useRef(null), g = pt(R, l.ref, r), P = (I) => (Y) => {
    if (I) {
      const H = R.current;
      Y === void 0 ? I(H) : I(H, Y);
    }
  }, T = P(m), z = P((I, Y) => {
    Oa(I);
    const H = cn({
      style: v,
      timeout: S,
      easing: c
    }, {
      mode: "enter"
    });
    I.style.webkitTransition = n.transitions.create("opacity", H), I.style.transition = n.transitions.create("opacity", H), d && d(I, Y);
  }), G = P(p), U = P(h), N = P((I) => {
    const Y = cn({
      style: v,
      timeout: S,
      easing: c
    }, {
      mode: "exit"
    });
    I.style.webkitTransition = n.transitions.create("opacity", Y), I.style.transition = n.transitions.create("opacity", Y), x && x(I);
  }), W = P(y), F = (I) => {
    s && s(R.current, I);
  };
  return /* @__PURE__ */ $.jsx(w, b({
    appear: a,
    in: u,
    nodeRef: R,
    onEnter: z,
    onEntered: G,
    onEntering: T,
    onExit: N,
    onExited: W,
    onExiting: U,
    addEndListener: F,
    timeout: S
  }, O, {
    children: (I, Y) => /* @__PURE__ */ E.cloneElement(l, b({
      style: b({
        opacity: 0,
        visibility: I === "exited" && !u ? "hidden" : void 0
      }, Pm[I], v, l.props.style),
      ref: g
    }, Y))
  }));
});
process.env.NODE_ENV !== "production" && (Ia.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: kn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const $m = Ia;
function Nm(e) {
  return Le("MuiBackdrop", e);
}
Ue("MuiBackdrop", ["root", "invisible"]);
const jm = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Mm = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return We({
    root: ["root", r && "invisible"]
  }, Nm, t);
}, Am = ye("div", {
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
}) => b({
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
})), Da = /* @__PURE__ */ E.forwardRef(function(t, r) {
  var n, i, s;
  const a = qe({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: p = {},
    invisible: m = !1,
    open: x,
    slotProps: y = {},
    slots: h = {},
    TransitionComponent: v = $m,
    transitionDuration: S
  } = a, w = ge(a, jm), O = b({}, a, {
    component: u,
    invisible: m
  }), R = Mm(O), g = (n = y.root) != null ? n : p.root;
  return /* @__PURE__ */ $.jsx(v, b({
    in: x,
    timeout: S
  }, w, {
    children: /* @__PURE__ */ $.jsx(Am, b({
      "aria-hidden": !0
    }, g, {
      as: (i = (s = h.root) != null ? s : d.Root) != null ? i : u,
      className: pe(R.root, c, g == null ? void 0 : g.className),
      ownerState: b({}, O, g == null ? void 0 : g.ownerState),
      classes: R,
      ref: r,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Da.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
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
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: o.bool,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const Im = Da;
function Dm(e) {
  return Le("PrivateSwitchBase", e);
}
Ue("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Lm = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"], Fm = (e) => {
  const {
    classes: t,
    checked: r,
    disabled: n,
    edge: i
  } = e, s = {
    root: ["root", r && "checked", n && "disabled", i && `edge${de(i)}`],
    input: ["input"]
  };
  return We(s, Dm, t);
}, Vm = ye(ka)(({
  ownerState: e
}) => b({
  padding: 9,
  borderRadius: "50%"
}, e.edge === "start" && {
  marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
  marginRight: e.size === "small" ? -3 : -12
})), Bm = ye("input", {
  shouldForwardProp: jr
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), La = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    autoFocus: n,
    checked: i,
    checkedIcon: s,
    className: a,
    defaultChecked: l,
    disabled: c,
    disableFocusRipple: u = !1,
    edge: d = !1,
    icon: p,
    id: m,
    inputProps: x,
    inputRef: y,
    name: h,
    onBlur: v,
    onChange: S,
    onFocus: w,
    readOnly: O,
    required: R = !1,
    tabIndex: g,
    type: P,
    value: T
  } = t, z = ge(t, Lm), [G, U] = Do({
    controlled: i,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), N = Aa(), W = (ae) => {
    w && w(ae), N && N.onFocus && N.onFocus(ae);
  }, F = (ae) => {
    v && v(ae), N && N.onBlur && N.onBlur(ae);
  }, I = (ae) => {
    if (ae.nativeEvent.defaultPrevented)
      return;
    const _ = ae.target.checked;
    U(_), S && S(ae, _);
  };
  let Y = c;
  N && typeof Y > "u" && (Y = N.disabled);
  const H = P === "checkbox" || P === "radio", q = b({}, t, {
    checked: G,
    disabled: Y,
    disableFocusRipple: u,
    edge: d
  }), D = Fm(q);
  return /* @__PURE__ */ $.jsxs(Vm, b({
    component: "span",
    className: pe(D.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: Y,
    tabIndex: null,
    role: void 0,
    onFocus: W,
    onBlur: F,
    ownerState: q,
    ref: r
  }, z, {
    children: [/* @__PURE__ */ $.jsx(Bm, b({
      autoFocus: n,
      checked: i,
      defaultChecked: l,
      className: D.input,
      disabled: Y,
      id: H ? m : void 0,
      name: h,
      onChange: I,
      readOnly: O,
      ref: y,
      required: R,
      ownerState: q,
      tabIndex: g,
      type: P
    }, P === "checkbox" && T === void 0 ? {} : {
      value: T
    }, x)), G ? s : p]
  }));
});
process.env.NODE_ENV !== "production" && (La.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: o.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * @ignore
   */
  defaultChecked: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: o.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Pn,
  /*
   * @ignore
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * The input component prop `type`.
   */
  type: o.string.isRequired,
  /**
   * The value of the component.
   */
  value: o.any
});
const zm = La;
function Um(e) {
  return Le("MuiModal", e);
}
Ue("MuiModal", ["root", "hidden", "backdrop"]);
const Wm = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], qm = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return We({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, Um, n);
}, Ym = ye("div", {
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
}) => b({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Hm = ye(Im, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Fa = /* @__PURE__ */ E.forwardRef(function(t, r) {
  var n, i, s, a, l, c;
  const u = qe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = Hm,
    BackdropProps: p,
    className: m,
    closeAfterTransition: x = !1,
    children: y,
    container: h,
    component: v,
    components: S = {},
    componentsProps: w = {},
    disableAutoFocus: O = !1,
    disableEnforceFocus: R = !1,
    disableEscapeKeyDown: g = !1,
    disablePortal: P = !1,
    disableRestoreFocus: T = !1,
    disableScrollLock: z = !1,
    hideBackdrop: G = !1,
    keepMounted: U = !1,
    onBackdropClick: N,
    open: W,
    slotProps: F,
    slots: I
    // eslint-disable-next-line react/prop-types
  } = u, Y = ge(u, Wm), H = b({}, u, {
    closeAfterTransition: x,
    disableAutoFocus: O,
    disableEnforceFocus: R,
    disableEscapeKeyDown: g,
    disablePortal: P,
    disableRestoreFocus: T,
    disableScrollLock: z,
    hideBackdrop: G,
    keepMounted: U
  }), {
    getRootProps: q,
    getBackdropProps: D,
    getTransitionProps: ae,
    portalRef: _,
    isTopModal: V,
    exited: ne,
    hasTransition: J
  } = bm(b({}, H, {
    rootRef: r
  })), B = b({}, H, {
    exited: ne
  }), ee = qm(B), X = {};
  if (y.props.tabIndex === void 0 && (X.tabIndex = "-1"), J) {
    const {
      onEnter: ve,
      onExited: j
    } = ae();
    X.onEnter = ve, X.onExited = j;
  }
  const Z = (n = (i = I == null ? void 0 : I.root) != null ? i : S.Root) != null ? n : Ym, te = (s = (a = I == null ? void 0 : I.backdrop) != null ? a : S.Backdrop) != null ? s : d, Q = (l = F == null ? void 0 : F.root) != null ? l : w.root, oe = (c = F == null ? void 0 : F.backdrop) != null ? c : w.backdrop, Ce = vt({
    elementType: Z,
    externalSlotProps: Q,
    externalForwardedProps: Y,
    getSlotProps: q,
    additionalProps: {
      ref: r,
      as: v
    },
    ownerState: B,
    className: pe(m, Q == null ? void 0 : Q.className, ee == null ? void 0 : ee.root, !B.open && B.exited && (ee == null ? void 0 : ee.hidden))
  }), A = vt({
    elementType: te,
    externalSlotProps: oe,
    additionalProps: p,
    getSlotProps: (ve) => D(b({}, ve, {
      onClick: (j) => {
        N && N(j), ve != null && ve.onClick && ve.onClick(j);
      }
    })),
    className: pe(oe == null ? void 0 : oe.className, p == null ? void 0 : p.className, ee == null ? void 0 : ee.backdrop),
    ownerState: B
  });
  return !U && !W && (!J || ne) ? null : /* @__PURE__ */ $.jsx(dn, {
    ref: _,
    container: h,
    disablePortal: P,
    children: /* @__PURE__ */ $.jsxs(Z, b({}, Ce, {
      children: [!G && d ? /* @__PURE__ */ $.jsx(te, b({}, A)) : null, /* @__PURE__ */ $.jsx(un, {
        disableEnforceFocus: R,
        disableAutoFocus: O,
        disableRestoreFocus: T,
        isEnabled: V,
        open: W,
        children: /* @__PURE__ */ E.cloneElement(y, X)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Fa.propTypes = {
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
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * A single child content element.
   */
  children: kn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Backdrop: o.elementType,
    Root: o.elementType
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
  componentsProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
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
  container: o.oneOfType([Io, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: o.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Gm = Fa;
function Km(e) {
  return Le("MuiDivider", e);
}
Ue("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
const Xm = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], Jm = (e) => {
  const {
    absolute: t,
    children: r,
    classes: n,
    flexItem: i,
    light: s,
    orientation: a,
    textAlign: l,
    variant: c
  } = e;
  return We({
    root: ["root", t && "absolute", c, s && "light", a === "vertical" && "vertical", i && "flexItem", r && "withChildren", r && a === "vertical" && "withChildrenVertical", l === "right" && a !== "vertical" && "textAlignRight", l === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, Km, n);
}, Zm = ye("div", {
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
}) => b({
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
  borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : Pt(e.palette.divider, 0.08)
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
}) => b({}, e.children && {
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
}) => b({}, t.children && t.orientation !== "vertical" && {
  "&::before, &::after": {
    width: "100%",
    borderTop: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  theme: e,
  ownerState: t
}) => b({}, t.children && t.orientation === "vertical" && {
  flexDirection: "column",
  "&::before, &::after": {
    height: "100%",
    borderLeft: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  ownerState: e
}) => b({}, e.textAlign === "right" && e.orientation !== "vertical" && {
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
})), Qm = ye("span", {
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
}) => b({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`
}, t.orientation === "vertical" && {
  paddingTop: `calc(${e.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${e.spacing(1)} * 1.2)`
})), Go = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: i = !1,
    children: s,
    className: a,
    component: l = s ? "div" : "hr",
    flexItem: c = !1,
    light: u = !1,
    orientation: d = "horizontal",
    role: p = l !== "hr" ? "separator" : void 0,
    textAlign: m = "center",
    variant: x = "fullWidth"
  } = n, y = ge(n, Xm), h = b({}, n, {
    absolute: i,
    component: l,
    flexItem: c,
    light: u,
    orientation: d,
    role: p,
    textAlign: m,
    variant: x
  }), v = Jm(h);
  return /* @__PURE__ */ $.jsx(Zm, b({
    as: l,
    className: pe(v.root, a),
    role: p,
    ref: r,
    ownerState: h
  }, y, {
    children: s ? /* @__PURE__ */ $.jsx(Qm, {
      className: v.wrapper,
      ownerState: h,
      children: s
    }) : null
  }));
});
Go.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (Go.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: o.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   * @deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)
   */
  light: o.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: o.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: o.oneOf(["center", "left", "right"]),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: o.oneOfType([o.oneOf(["fullWidth", "inset", "middle"]), o.string])
});
const eh = Go, th = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function rh(e, t, r) {
  const n = t.getBoundingClientRect(), i = r && r.getBoundingClientRect(), s = or(t);
  let a;
  if (t.fakeTransform)
    a = t.fakeTransform;
  else {
    const u = s.getComputedStyle(t);
    a = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let l = 0, c = 0;
  if (a && a !== "none" && typeof a == "string") {
    const u = a.split("(")[1].split(")")[0].split(",");
    l = parseInt(u[4], 10), c = parseInt(u[5], 10);
  }
  return e === "left" ? i ? `translateX(${i.right + l - n.left}px)` : `translateX(${s.innerWidth + l - n.left}px)` : e === "right" ? i ? `translateX(-${n.right - i.left - l}px)` : `translateX(-${n.left + n.width - l}px)` : e === "up" ? i ? `translateY(${i.bottom + c - n.top}px)` : `translateY(${s.innerHeight + c - n.top}px)` : i ? `translateY(-${n.top - i.top + n.height - c}px)` : `translateY(-${n.top + n.height - c}px)`;
}
function Va(e) {
  return typeof e == "function" ? e() : e;
}
function qr(e, t, r) {
  const n = Va(r), i = rh(e, t, n);
  i && (t.style.webkitTransform = i, t.style.transform = i);
}
const Ba = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = Mn(), i = {
    enter: n.transitions.easing.easeOut,
    exit: n.transitions.easing.sharp
  }, s = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: l = !0,
    children: c,
    container: u,
    direction: d = "down",
    easing: p = i,
    in: m,
    onEnter: x,
    onEntered: y,
    onEntering: h,
    onExit: v,
    onExited: S,
    onExiting: w,
    style: O,
    timeout: R = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: g = Sa
  } = t, P = ge(t, th), T = E.useRef(null), z = pt(c.ref, T, r), G = (D) => (ae) => {
    D && (ae === void 0 ? D(T.current) : D(T.current, ae));
  }, U = G((D, ae) => {
    qr(d, D, u), Oa(D), x && x(D, ae);
  }), N = G((D, ae) => {
    const _ = cn({
      timeout: R,
      style: O,
      easing: p
    }, {
      mode: "enter"
    });
    D.style.webkitTransition = n.transitions.create("-webkit-transform", b({}, _)), D.style.transition = n.transitions.create("transform", b({}, _)), D.style.webkitTransform = "none", D.style.transform = "none", h && h(D, ae);
  }), W = G(y), F = G(w), I = G((D) => {
    const ae = cn({
      timeout: R,
      style: O,
      easing: p
    }, {
      mode: "exit"
    });
    D.style.webkitTransition = n.transitions.create("-webkit-transform", ae), D.style.transition = n.transitions.create("transform", ae), qr(d, D, u), v && v(D);
  }), Y = G((D) => {
    D.style.webkitTransition = "", D.style.transition = "", S && S(D);
  }), H = (D) => {
    a && a(T.current, D);
  }, q = E.useCallback(() => {
    T.current && qr(d, T.current, u);
  }, [d, u]);
  return E.useEffect(() => {
    if (m || d === "down" || d === "right")
      return;
    const D = ca(() => {
      T.current && qr(d, T.current, u);
    }), ae = or(T.current);
    return ae.addEventListener("resize", D), () => {
      D.clear(), ae.removeEventListener("resize", D);
    };
  }, [d, m, u]), E.useEffect(() => {
    m || q();
  }, [m, q]), /* @__PURE__ */ $.jsx(g, b({
    nodeRef: T,
    onEnter: U,
    onEntered: W,
    onEntering: N,
    onExit: I,
    onExited: Y,
    onExiting: F,
    addEndListener: H,
    appear: l,
    in: m,
    timeout: R
  }, P, {
    children: (D, ae) => /* @__PURE__ */ E.cloneElement(c, b({
      ref: z,
      style: b({
        visibility: D === "exited" && !m ? "hidden" : void 0
      }, O, c.props.style)
    }, ae))
  }));
});
process.env.NODE_ENV !== "production" && (Ba.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: kn.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: kt(o.oneOfType([Io, o.func]), (e) => {
    if (e.open) {
      const t = Va(e.container);
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
  direction: o.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const nh = Ba;
function oh(e) {
  return Le("MuiDrawer", e);
}
Ue("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const ih = ["BackdropProps"], sh = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], za = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, (r.variant === "permanent" || r.variant === "persistent") && t.docked, t.modal];
}, ah = (e) => {
  const {
    classes: t,
    anchor: r,
    variant: n
  } = e, i = {
    root: ["root"],
    docked: [(n === "permanent" || n === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${de(r)}`, n !== "temporary" && `paperAnchorDocked${de(r)}`]
  };
  return We(i, oh, t);
}, lh = ye(Gm, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: za
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), ms = ye("div", {
  shouldForwardProp: jr,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: za
})({
  flex: "0 0 auto"
}), ch = ye(Rp, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.paper, t[`paperAnchor${de(r.anchor)}`], r.variant !== "temporary" && t[`paperAnchorDocked${de(r.anchor)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
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
})), Ua = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function uh(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function dh({
  direction: e
}, t) {
  return e === "rtl" && uh(t) ? Ua[t] : t;
}
const Wa = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiDrawer"
  }), i = Mn(), s = pa(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    BackdropProps: c,
    children: u,
    className: d,
    elevation: p = 16,
    hideBackdrop: m = !1,
    ModalProps: {
      BackdropProps: x
    } = {},
    onClose: y,
    open: h = !1,
    PaperProps: v = {},
    SlideProps: S,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = nh,
    transitionDuration: O = a,
    variant: R = "temporary"
  } = n, g = ge(n.ModalProps, ih), P = ge(n, sh), T = E.useRef(!1);
  E.useEffect(() => {
    T.current = !0;
  }, []);
  const z = dh({
    direction: s ? "rtl" : "ltr"
  }, l), U = b({}, n, {
    anchor: l,
    elevation: p,
    open: h,
    variant: R
  }, P), N = ah(U), W = /* @__PURE__ */ $.jsx(ch, b({
    elevation: R === "temporary" ? p : 0,
    square: !0
  }, v, {
    className: pe(N.paper, v.className),
    ownerState: U,
    children: u
  }));
  if (R === "permanent")
    return /* @__PURE__ */ $.jsx(ms, b({
      className: pe(N.root, N.docked, d),
      ownerState: U,
      ref: r
    }, P, {
      children: W
    }));
  const F = /* @__PURE__ */ $.jsx(w, b({
    in: h,
    direction: Ua[z],
    timeout: O,
    appear: T.current
  }, S, {
    children: W
  }));
  return R === "persistent" ? /* @__PURE__ */ $.jsx(ms, b({
    className: pe(N.root, N.docked, d),
    ownerState: U,
    ref: r
  }, P, {
    children: F
  })) : /* @__PURE__ */ $.jsx(lh, b({
    BackdropProps: b({}, c, x, {
      transitionDuration: O
    }),
    className: pe(N.root, N.modal, d),
    open: h,
    ownerState: U,
    onClose: y,
    hideBackdrop: m,
    ref: r
  }, P, g, {
    children: F
  }));
});
process.env.NODE_ENV !== "production" && (Wa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: o.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: o.object,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: fa,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: o.bool,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: o.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: o.oneOf(["permanent", "persistent", "temporary"])
});
const fh = Wa;
function ph(e) {
  return Le("MuiFormControl", e);
}
Ue("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const mh = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], hh = (e) => {
  const {
    classes: t,
    margin: r,
    fullWidth: n
  } = e, i = {
    root: ["root", r !== "none" && `margin${de(r)}`, n && "fullWidth"]
  };
  return We(i, ph, t);
}, vh = ye("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => b({}, t.root, t[`margin${de(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => b({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), qa = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: s,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: p = !1,
    hiddenLabel: m = !1,
    margin: x = "none",
    required: y = !1,
    size: h = "medium",
    variant: v = "outlined"
  } = n, S = ge(n, mh), w = b({}, n, {
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: p,
    hiddenLabel: m,
    margin: x,
    required: y,
    size: h,
    variant: v
  }), O = hh(w), [R, g] = E.useState(() => {
    let F = !1;
    return i && E.Children.forEach(i, (I) => {
      if (!Zr(I, ["Input", "Select"]))
        return;
      const Y = Zr(I, ["Select"]) ? I.props.input : I;
      Y && wm(Y.props) && (F = !0);
    }), F;
  }), [P, T] = E.useState(() => {
    let F = !1;
    return i && E.Children.forEach(i, (I) => {
      Zr(I, ["Input", "Select"]) && (ps(I.props, !0) || ps(I.props.inputProps, !0)) && (F = !0);
    }), F;
  }), [z, G] = E.useState(!1);
  c && z && G(!1);
  const U = d !== void 0 && !c ? d : z;
  let N;
  if (process.env.NODE_ENV !== "production") {
    const F = E.useRef(!1);
    N = () => (F.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), F.current = !0, () => {
      F.current = !1;
    });
  }
  const W = E.useMemo(() => ({
    adornedStart: R,
    setAdornedStart: g,
    color: a,
    disabled: c,
    error: u,
    filled: P,
    focused: U,
    fullWidth: p,
    hiddenLabel: m,
    size: h,
    onBlur: () => {
      G(!1);
    },
    onEmpty: () => {
      T(!1);
    },
    onFilled: () => {
      T(!0);
    },
    onFocus: () => {
      G(!0);
    },
    registerEffect: N,
    required: y,
    variant: v
  }), [R, a, c, u, P, U, p, m, N, y, h, v]);
  return /* @__PURE__ */ $.jsx(Ma.Provider, {
    value: W,
    children: /* @__PURE__ */ $.jsx(vh, b({
      as: l,
      ownerState: w,
      className: pe(O.root, s),
      ref: r
    }, S, {
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (qa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const to = qa, Ya = Hd({
  createStyledComponent: ye("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => qe({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (Ya.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: o.oneOfType([o.oneOf(["column-reverse", "column", "row-reverse", "row"]), o.arrayOf(o.oneOf(["column-reverse", "column", "row-reverse", "row"])), o.object]),
  /**
   * Add an element between each child.
   */
  divider: o.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: o.bool
});
const gh = Ya;
function yh(e) {
  return Le("MuiFormControlLabel", e);
}
const bh = Ue("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), gr = bh, Eh = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"], xh = (e) => {
  const {
    classes: t,
    disabled: r,
    labelPlacement: n,
    error: i,
    required: s
  } = e, a = {
    root: ["root", r && "disabled", `labelPlacement${de(n)}`, i && "error", s && "required"],
    label: ["label", r && "disabled"],
    asterisk: ["asterisk", i && "error"]
  };
  return We(a, yh, t);
}, Th = ye("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${gr.label}`]: t.label
    }, t.root, t[`labelPlacement${de(r.labelPlacement)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${gr.disabled}`]: {
    cursor: "default"
  }
}, t.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, t.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, t.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  [`& .${gr.label}`]: {
    [`&.${gr.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  }
})), Sh = ye("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${gr.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Ha = /* @__PURE__ */ E.forwardRef(function(t, r) {
  var n, i;
  const s = qe({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    className: a,
    componentsProps: l = {},
    control: c,
    disabled: u,
    disableTypography: d,
    label: p,
    labelPlacement: m = "end",
    required: x,
    slotProps: y = {}
  } = s, h = ge(s, Eh), v = Aa(), S = (n = u ?? c.props.disabled) != null ? n : v == null ? void 0 : v.disabled, w = x ?? c.props.required, O = {
    disabled: S,
    required: w
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((G) => {
    typeof c.props[G] > "u" && typeof s[G] < "u" && (O[G] = s[G]);
  });
  const R = _m({
    props: s,
    muiFormControl: v,
    states: ["error"]
  }), g = b({}, s, {
    disabled: S,
    labelPlacement: m,
    required: w,
    error: R.error
  }), P = xh(g), T = (i = y.typography) != null ? i : l.typography;
  let z = p;
  return z != null && z.type !== wt && !d && (z = /* @__PURE__ */ $.jsx(wt, b({
    component: "span"
  }, T, {
    className: pe(P.label, T == null ? void 0 : T.className),
    children: z
  }))), /* @__PURE__ */ $.jsxs(Th, b({
    className: pe(P.root, a),
    ownerState: g,
    ref: r
  }, h, {
    children: [/* @__PURE__ */ E.cloneElement(c, O), w ? /* @__PURE__ */ $.jsxs(gh, {
      display: "block",
      children: [z, /* @__PURE__ */ $.jsxs(Sh, {
        ownerState: g,
        "aria-hidden": !0,
        className: P.asterisk,
        children: [" ", "*"]
      })]
    }) : z]
  }));
});
process.env.NODE_ENV !== "production" && (Ha.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component appears selected.
   */
  checked: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: o.shape({
    typography: o.object
  }),
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: o.element.isRequired,
  /**
   * If `true`, the control is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: o.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Pn,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: o.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: o.oneOf(["bottom", "end", "start", "top"]),
  /**
   * @ignore
   */
  name: o.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    typography: o.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the component.
   */
  value: o.any
});
const ro = Ha, Oh = qo(/* @__PURE__ */ $.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked"), Rh = qo(/* @__PURE__ */ $.jsx("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked"), Ch = ye("span", {
  shouldForwardProp: jr
})({
  position: "relative",
  display: "flex"
}), _h = ye(Oh)({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), wh = ye(Rh)(({
  theme: e,
  ownerState: t
}) => b({
  left: 0,
  position: "absolute",
  transform: "scale(0)",
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeIn,
    duration: e.transitions.duration.shortest
  })
}, t.checked && {
  transform: "scale(1)",
  transition: e.transitions.create("transform", {
    easing: e.transitions.easing.easeOut,
    duration: e.transitions.duration.shortest
  })
}));
function Ko(e) {
  const {
    checked: t = !1,
    classes: r = {},
    fontSize: n
  } = e, i = b({}, e, {
    checked: t
  });
  return /* @__PURE__ */ $.jsxs(Ch, {
    className: r.root,
    ownerState: i,
    children: [/* @__PURE__ */ $.jsx(_h, {
      fontSize: n,
      className: r.background,
      ownerState: i
    }), /* @__PURE__ */ $.jsx(wh, {
      fontSize: n,
      className: r.dot,
      ownerState: i
    })]
  });
}
process.env.NODE_ENV !== "production" && (Ko.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: o.oneOf(["small", "medium"])
});
const Ga = /* @__PURE__ */ E.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ga.displayName = "RadioGroupContext");
const kh = Ga;
function Ph() {
  return E.useContext(kh);
}
function $h(e) {
  return Le("MuiRadio", e);
}
const Nh = Ue("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), hs = Nh, jh = ["checked", "checkedIcon", "color", "icon", "name", "onChange", "size", "className"], Mh = (e) => {
  const {
    classes: t,
    color: r,
    size: n
  } = e, i = {
    root: ["root", `color${de(r)}`, n !== "medium" && `size${de(n)}`]
  };
  return b({}, t, We(i, $h, t));
}, Ah = ye(zm, {
  shouldForwardProp: (e) => jr(e) || e === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.size !== "medium" && t[`size${de(r.size)}`], t[`color${de(r.color)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => b({
  color: (e.vars || e).palette.text.secondary
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${t.color === "default" ? e.vars.palette.action.activeChannel : e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Pt(t.color === "default" ? e.palette.action.active : e.palette[t.color].main, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.color !== "default" && {
  [`&.${hs.checked}`]: {
    color: (e.vars || e).palette[t.color].main
  }
}, {
  [`&.${hs.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  }
}));
function Ih(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const vs = /* @__PURE__ */ $.jsx(Ko, {
  checked: !0
}), gs = /* @__PURE__ */ $.jsx(Ko, {}), Ka = /* @__PURE__ */ E.forwardRef(function(t, r) {
  var n, i;
  const s = qe({
    props: t,
    name: "MuiRadio"
  }), {
    checked: a,
    checkedIcon: l = vs,
    color: c = "primary",
    icon: u = gs,
    name: d,
    onChange: p,
    size: m = "medium",
    className: x
  } = s, y = ge(s, jh), h = b({}, s, {
    color: c,
    size: m
  }), v = Mh(h), S = Ph();
  let w = a;
  const O = on(p, S && S.onChange);
  let R = d;
  return S && (typeof w > "u" && (w = Ih(S.value, s.value)), typeof R > "u" && (R = S.name)), /* @__PURE__ */ $.jsx(Ah, b({
    type: "radio",
    icon: /* @__PURE__ */ E.cloneElement(u, {
      fontSize: (n = gs.props.fontSize) != null ? n : m
    }),
    checkedIcon: /* @__PURE__ */ E.cloneElement(l, {
      fontSize: (i = vs.props.fontSize) != null ? i : m
    }),
    ownerState: h,
    classes: v,
    name: R,
    checked: w,
    onChange: O,
    ref: r,
    className: pe(v.root, x)
  }, y));
});
process.env.NODE_ENV !== "production" && (Ka.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * The icon to display when the component is checked.
   * @default <RadioButtonIcon checked />
   */
  checkedIcon: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <RadioButtonIcon />
   */
  icon: o.node,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Pn,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: o.any
});
const no = Ka, Dh = (e) => !e || !br(e), Lh = Dh;
function Fh(e) {
  return Le("MuiSlider", e);
}
const Vh = Ue("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]), it = Vh, Bh = (e) => {
  const {
    open: t
  } = e;
  return {
    offset: pe(t && it.valueLabelOpen),
    circle: it.valueLabelCircle,
    label: it.valueLabelLabel
  };
};
function Xa(e) {
  const {
    children: t,
    className: r,
    value: n
  } = e, i = Bh(e);
  return t ? /* @__PURE__ */ E.cloneElement(t, {
    className: pe(t.props.className)
  }, /* @__PURE__ */ $.jsxs(E.Fragment, {
    children: [t.props.children, /* @__PURE__ */ $.jsx("span", {
      className: pe(i.offset, r),
      "aria-hidden": !0,
      children: /* @__PURE__ */ $.jsx("span", {
        className: i.circle,
        children: /* @__PURE__ */ $.jsx("span", {
          className: i.label,
          children: n
        })
      })
    })]
  })) : null;
}
process.env.NODE_ENV !== "production" && (Xa.propTypes = {
  children: o.element.isRequired,
  className: o.string,
  value: o.node
});
const zh = ["aria-label", "aria-valuetext", "aria-labelledby", "component", "components", "componentsProps", "color", "classes", "className", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "shiftStep", "size", "step", "scale", "slotProps", "slots", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat"], Uh = dp();
function ys(e) {
  return e;
}
const Wh = ye("span", {
  name: "MuiSlider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[`color${de(r.color)}`], r.size !== "medium" && t[`size${de(r.size)}`], r.marked && t.marked, r.orientation === "vertical" && t.vertical, r.track === "inverted" && t.trackInverted, r.track === !1 && t.trackFalse];
  }
})(({
  theme: e
}) => {
  var t;
  return {
    borderRadius: 12,
    boxSizing: "content-box",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    touchAction: "none",
    WebkitTapHighlightColor: "transparent",
    "@media print": {
      colorAdjust: "exact"
    },
    [`&.${it.disabled}`]: {
      pointerEvents: "none",
      cursor: "default",
      color: (e.vars || e).palette.grey[400]
    },
    [`&.${it.dragging}`]: {
      [`& .${it.thumb}, & .${it.track}`]: {
        transition: "none"
      }
    },
    variants: [...Object.keys(((t = e.vars) != null ? t : e).palette).filter((r) => {
      var n;
      return ((n = e.vars) != null ? n : e).palette[r].main;
    }).map((r) => ({
      props: {
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main
      }
    })), {
      props: {
        orientation: "horizontal"
      },
      style: {
        height: 4,
        width: "100%",
        padding: "13px 0",
        // The primary input mechanism of the device includes a pointing device of limited accuracy.
        "@media (pointer: coarse)": {
          // Reach 42px touch target, about ~8mm on screen.
          padding: "20px 0"
        }
      }
    }, {
      props: {
        orientation: "horizontal",
        size: "small"
      },
      style: {
        height: 2
      }
    }, {
      props: {
        orientation: "horizontal",
        marked: !0
      },
      style: {
        marginBottom: 20
      }
    }, {
      props: {
        orientation: "vertical"
      },
      style: {
        height: "100%",
        width: 4,
        padding: "0 13px",
        // The primary input mechanism of the device includes a pointing device of limited accuracy.
        "@media (pointer: coarse)": {
          // Reach 42px touch target, about ~8mm on screen.
          padding: "0 20px"
        }
      }
    }, {
      props: {
        orientation: "vertical",
        size: "small"
      },
      style: {
        width: 2
      }
    }, {
      props: {
        orientation: "vertical",
        marked: !0
      },
      style: {
        marginRight: 44
      }
    }]
  };
}), qh = ye("span", {
  name: "MuiSlider",
  slot: "Rail",
  overridesResolver: (e, t) => t.rail
})({
  display: "block",
  position: "absolute",
  borderRadius: "inherit",
  backgroundColor: "currentColor",
  opacity: 0.38,
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "100%",
      height: "inherit",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      width: "inherit",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }, {
    props: {
      track: "inverted"
    },
    style: {
      opacity: 1
    }
  }]
}), Yh = ye("span", {
  name: "MuiSlider",
  slot: "Track",
  overridesResolver: (e, t) => t.track
})(({
  theme: e
}) => {
  var t;
  return {
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    border: "1px solid currentColor",
    backgroundColor: "currentColor",
    transition: e.transitions.create(["left", "width", "bottom", "height"], {
      duration: e.transitions.duration.shortest
    }),
    variants: [{
      props: {
        size: "small"
      },
      style: {
        border: "none"
      }
    }, {
      props: {
        orientation: "horizontal"
      },
      style: {
        height: "inherit",
        top: "50%",
        transform: "translateY(-50%)"
      }
    }, {
      props: {
        orientation: "vertical"
      },
      style: {
        width: "inherit",
        left: "50%",
        transform: "translateX(-50%)"
      }
    }, {
      props: {
        track: !1
      },
      style: {
        display: "none"
      }
    }, ...Object.keys(((t = e.vars) != null ? t : e).palette).filter((r) => {
      var n;
      return ((n = e.vars) != null ? n : e).palette[r].main;
    }).map((r) => ({
      props: {
        color: r,
        track: "inverted"
      },
      style: b({}, e.vars ? {
        backgroundColor: e.vars.palette.Slider[`${r}Track`],
        borderColor: e.vars.palette.Slider[`${r}Track`]
      } : b({
        backgroundColor: vo(e.palette[r].main, 0.62),
        borderColor: vo(e.palette[r].main, 0.62)
      }, e.applyStyles("dark", {
        backgroundColor: ho(e.palette[r].main, 0.5)
      }), e.applyStyles("dark", {
        borderColor: ho(e.palette[r].main, 0.5)
      })))
    }))]
  };
}), Hh = ye("span", {
  name: "MuiSlider",
  slot: "Thumb",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.thumb, t[`thumbColor${de(r.color)}`], r.size !== "medium" && t[`thumbSize${de(r.size)}`]];
  }
})(({
  theme: e
}) => {
  var t;
  return {
    position: "absolute",
    width: 20,
    height: 20,
    boxSizing: "border-box",
    borderRadius: "50%",
    outline: 0,
    backgroundColor: "currentColor",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: e.transitions.create(["box-shadow", "left", "bottom"], {
      duration: e.transitions.duration.shortest
    }),
    "&::before": {
      position: "absolute",
      content: '""',
      borderRadius: "inherit",
      width: "100%",
      height: "100%",
      boxShadow: (e.vars || e).shadows[2]
    },
    "&::after": {
      position: "absolute",
      content: '""',
      borderRadius: "50%",
      // 42px is the hit target
      width: 42,
      height: 42,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    [`&.${it.disabled}`]: {
      "&:hover": {
        boxShadow: "none"
      }
    },
    variants: [...Object.keys(((t = e.vars) != null ? t : e).palette).filter((r) => {
      var n;
      return ((n = e.vars) != null ? n : e).palette[r].main;
    }).map((r) => ({
      props: {
        color: r
      },
      style: {
        [`&:hover, &.${it.focusVisible}`]: b({}, e.vars ? {
          boxShadow: `0px 0px 0px 8px rgba(${e.vars.palette[r].mainChannel} / 0.16)`
        } : {
          boxShadow: `0px 0px 0px 8px ${Pt(e.palette[r].main, 0.16)}`
        }, {
          "@media (hover: none)": {
            boxShadow: "none"
          }
        }),
        [`&.${it.active}`]: b({}, e.vars ? {
          boxShadow: `0px 0px 0px 14px rgba(${e.vars.palette[r].mainChannel} / 0.16)}`
        } : {
          boxShadow: `0px 0px 0px 14px ${Pt(e.palette[r].main, 0.16)}`
        })
      }
    })), {
      props: {
        size: "small"
      },
      style: {
        width: 12,
        height: 12,
        "&::before": {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        orientation: "horizontal"
      },
      style: {
        top: "50%",
        transform: "translate(-50%, -50%)"
      }
    }, {
      props: {
        orientation: "vertical"
      },
      style: {
        left: "50%",
        transform: "translate(-50%, 50%)"
      }
    }]
  };
}), Gh = ye(Xa, {
  name: "MuiSlider",
  slot: "ValueLabel",
  overridesResolver: (e, t) => t.valueLabel
})(({
  theme: e
}) => b({
  zIndex: 1,
  whiteSpace: "nowrap"
}, e.typography.body2, {
  fontWeight: 500,
  transition: e.transitions.create(["transform"], {
    duration: e.transitions.duration.shortest
  }),
  position: "absolute",
  backgroundColor: (e.vars || e).palette.grey[600],
  borderRadius: 2,
  color: (e.vars || e).palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem 0.75rem",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      transform: "translateY(-100%) scale(0)",
      top: "-10px",
      transformOrigin: "bottom center",
      "&::before": {
        position: "absolute",
        content: '""',
        width: 8,
        height: 8,
        transform: "translate(-50%, 50%) rotate(45deg)",
        backgroundColor: "inherit",
        bottom: 0,
        left: "50%"
      },
      [`&.${it.valueLabelOpen}`]: {
        transform: "translateY(-100%) scale(1)"
      }
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      transform: "translateY(-50%) scale(0)",
      right: "30px",
      top: "50%",
      transformOrigin: "right center",
      "&::before": {
        position: "absolute",
        content: '""',
        width: 8,
        height: 8,
        transform: "translate(-50%, -50%) rotate(45deg)",
        backgroundColor: "inherit",
        right: -8,
        top: "50%"
      },
      [`&.${it.valueLabelOpen}`]: {
        transform: "translateY(-50%) scale(1)"
      }
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      fontSize: e.typography.pxToRem(12),
      padding: "0.25rem 0.5rem"
    }
  }, {
    props: {
      orientation: "vertical",
      size: "small"
    },
    style: {
      right: "20px"
    }
  }]
})), Kh = ye("span", {
  name: "MuiSlider",
  slot: "Mark",
  shouldForwardProp: (e) => Uo(e) && e !== "markActive",
  overridesResolver: (e, t) => {
    const {
      markActive: r
    } = e;
    return [t.mark, r && t.markActive];
  }
})(({
  theme: e
}) => ({
  position: "absolute",
  width: 2,
  height: 2,
  borderRadius: 1,
  backgroundColor: "currentColor",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      top: "50%",
      transform: "translate(-1px, -50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      left: "50%",
      transform: "translate(-50%, 1px)"
    }
  }, {
    props: {
      markActive: !0
    },
    style: {
      backgroundColor: (e.vars || e).palette.background.paper,
      opacity: 0.8
    }
  }]
})), Xh = ye("span", {
  name: "MuiSlider",
  slot: "MarkLabel",
  shouldForwardProp: (e) => Uo(e) && e !== "markLabelActive",
  overridesResolver: (e, t) => t.markLabel
})(({
  theme: e
}) => b({}, e.typography.body2, {
  color: (e.vars || e).palette.text.secondary,
  position: "absolute",
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      top: 30,
      transform: "translateX(-50%)",
      "@media (pointer: coarse)": {
        top: 40
      }
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      left: 36,
      transform: "translateY(50%)",
      "@media (pointer: coarse)": {
        left: 44
      }
    }
  }, {
    props: {
      markLabelActive: !0
    },
    style: {
      color: (e.vars || e).palette.text.primary
    }
  }]
})), Jh = (e) => {
  const {
    disabled: t,
    dragging: r,
    marked: n,
    orientation: i,
    track: s,
    classes: a,
    color: l,
    size: c
  } = e, u = {
    root: ["root", t && "disabled", r && "dragging", n && "marked", i === "vertical" && "vertical", s === "inverted" && "trackInverted", s === !1 && "trackFalse", l && `color${de(l)}`, c && `size${de(c)}`],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", t && "disabled", c && `thumbSize${de(c)}`, l && `thumbColor${de(l)}`],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return We(u, Fh, a);
}, Zh = ({
  children: e
}) => e, Ja = /* @__PURE__ */ E.forwardRef(function(t, r) {
  var n, i, s, a, l, c, u, d, p, m, x, y, h, v, S, w, O, R, g, P, T, z, G, U;
  const N = Uh({
    props: t,
    name: "MuiSlider"
  }), W = pa(), {
    "aria-label": F,
    "aria-valuetext": I,
    "aria-labelledby": Y,
    // eslint-disable-next-line react/prop-types
    component: H = "span",
    components: q = {},
    componentsProps: D = {},
    color: ae = "primary",
    classes: _,
    className: V,
    disableSwap: ne = !1,
    disabled: J = !1,
    getAriaLabel: B,
    getAriaValueText: ee,
    marks: X = !1,
    max: Z = 100,
    min: te = 0,
    orientation: Q = "horizontal",
    shiftStep: oe = 10,
    size: Ce = "medium",
    step: A = 1,
    scale: ve = ys,
    slotProps: j,
    slots: me,
    track: ke = "normal",
    valueLabelDisplay: Ve = "off",
    valueLabelFormat: Be = ys
  } = N, mt = ge(N, zh), Pe = b({}, N, {
    isRtl: W,
    max: Z,
    min: te,
    classes: _,
    disabled: J,
    disableSwap: ne,
    orientation: Q,
    marks: X,
    color: ae,
    size: Ce,
    step: A,
    shiftStep: oe,
    scale: ve,
    track: ke,
    valueLabelDisplay: Ve,
    valueLabelFormat: Be
  }), {
    axisProps: Qe,
    getRootProps: Et,
    getHiddenInputProps: Nt,
    getThumbProps: ht,
    open: ct,
    active: Ct,
    axis: Ye,
    focusedThumbIndex: M,
    range: C,
    dragging: K,
    marks: ce,
    values: he,
    trackOffset: fe,
    trackLeap: Ke,
    getThumbStyle: et
  } = Cm(b({}, Pe, {
    rootRef: r
  }));
  Pe.marked = ce.length > 0 && ce.some((re) => re.label), Pe.dragging = K, Pe.focusedThumbIndex = M;
  const be = Jh(Pe), He = (n = (i = me == null ? void 0 : me.root) != null ? i : q.Root) != null ? n : Wh, _t = (s = (a = me == null ? void 0 : me.rail) != null ? a : q.Rail) != null ? s : qh, Vt = (l = (c = me == null ? void 0 : me.track) != null ? c : q.Track) != null ? l : Yh, ar = (u = (d = me == null ? void 0 : me.thumb) != null ? d : q.Thumb) != null ? u : Hh, xt = (p = (m = me == null ? void 0 : me.valueLabel) != null ? m : q.ValueLabel) != null ? p : Gh, jt = (x = (y = me == null ? void 0 : me.mark) != null ? y : q.Mark) != null ? x : Kh, Mt = (h = (v = me == null ? void 0 : me.markLabel) != null ? v : q.MarkLabel) != null ? h : Xh, lr = (S = (w = me == null ? void 0 : me.input) != null ? w : q.Input) != null ? S : "input", cr = (O = j == null ? void 0 : j.root) != null ? O : D.root, Mr = (R = j == null ? void 0 : j.rail) != null ? R : D.rail, ur = (g = j == null ? void 0 : j.track) != null ? g : D.track, Bt = (P = j == null ? void 0 : j.thumb) != null ? P : D.thumb, zt = (T = j == null ? void 0 : j.valueLabel) != null ? T : D.valueLabel, In = (z = j == null ? void 0 : j.mark) != null ? z : D.mark, Dn = (G = j == null ? void 0 : j.markLabel) != null ? G : D.markLabel, Ar = (U = j == null ? void 0 : j.input) != null ? U : D.input, Ln = vt({
    elementType: He,
    getSlotProps: Et,
    externalSlotProps: cr,
    externalForwardedProps: mt,
    additionalProps: b({}, Lh(He) && {
      as: H
    }),
    ownerState: b({}, Pe, cr == null ? void 0 : cr.ownerState),
    className: [be.root, V]
  }), Fn = vt({
    elementType: _t,
    externalSlotProps: Mr,
    ownerState: Pe,
    className: be.rail
  }), Vn = vt({
    elementType: Vt,
    externalSlotProps: ur,
    additionalProps: {
      style: b({}, Qe[Ye].offset(fe), Qe[Ye].leap(Ke))
    },
    ownerState: b({}, Pe, ur == null ? void 0 : ur.ownerState),
    className: be.track
  }), dr = vt({
    elementType: ar,
    getSlotProps: ht,
    externalSlotProps: Bt,
    ownerState: b({}, Pe, Bt == null ? void 0 : Bt.ownerState),
    className: be.thumb
  }), f = vt({
    elementType: xt,
    externalSlotProps: zt,
    ownerState: b({}, Pe, zt == null ? void 0 : zt.ownerState),
    className: be.valueLabel
  }), k = vt({
    elementType: jt,
    externalSlotProps: In,
    ownerState: Pe,
    className: be.mark
  }), L = vt({
    elementType: Mt,
    externalSlotProps: Dn,
    ownerState: Pe,
    className: be.markLabel
  }), ie = vt({
    elementType: lr,
    getSlotProps: Nt,
    externalSlotProps: Ar,
    ownerState: Pe
  });
  return /* @__PURE__ */ $.jsxs(He, b({}, Ln, {
    children: [/* @__PURE__ */ $.jsx(_t, b({}, Fn)), /* @__PURE__ */ $.jsx(Vt, b({}, Vn)), ce.filter((re) => re.value >= te && re.value <= Z).map((re, se) => {
      const ue = fn(re.value, te, Z), le = Qe[Ye].offset(ue);
      let _e;
      return ke === !1 ? _e = he.indexOf(re.value) !== -1 : _e = ke === "normal" && (C ? re.value >= he[0] && re.value <= he[he.length - 1] : re.value <= he[0]) || ke === "inverted" && (C ? re.value <= he[0] || re.value >= he[he.length - 1] : re.value >= he[0]), /* @__PURE__ */ $.jsxs(E.Fragment, {
        children: [/* @__PURE__ */ $.jsx(jt, b({
          "data-index": se
        }, k, !br(jt) && {
          markActive: _e
        }, {
          style: b({}, le, k.style),
          className: pe(k.className, _e && be.markActive)
        })), re.label != null ? /* @__PURE__ */ $.jsx(Mt, b({
          "aria-hidden": !0,
          "data-index": se
        }, L, !br(Mt) && {
          markLabelActive: _e
        }, {
          style: b({}, le, L.style),
          className: pe(be.markLabel, L.className, _e && be.markLabelActive),
          children: re.label
        })) : null]
      }, se);
    }), he.map((re, se) => {
      const ue = fn(re, te, Z), le = Qe[Ye].offset(ue), _e = Ve === "off" ? Zh : xt;
      return (
        /* TODO v6: Change component structure. It will help in avoiding the complicated React.cloneElement API added in SliderValueLabel component. Should be: Thumb -> Input, ValueLabel. Follow Joy UI's Slider structure. */
        /* @__PURE__ */ $.jsx(_e, b({}, !br(_e) && {
          valueLabelFormat: Be,
          valueLabelDisplay: Ve,
          value: typeof Be == "function" ? Be(ve(re), se) : Be,
          index: se,
          open: ct === se || Ct === se || Ve === "on",
          disabled: J
        }, f, {
          children: /* @__PURE__ */ $.jsx(ar, b({
            "data-index": se
          }, dr, {
            className: pe(be.thumb, dr.className, Ct === se && be.active, M === se && be.focusVisible),
            style: b({}, le, et(se), dr.style),
            children: /* @__PURE__ */ $.jsx(lr, b({
              "data-index": se,
              "aria-label": B ? B(se) : F,
              "aria-valuenow": ve(re),
              "aria-labelledby": Y,
              "aria-valuetext": ee ? ee(ve(re), se) : I,
              value: he[se]
            }, ie))
          }))
        }), se)
      );
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Ja.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The label of the slider.
   */
  "aria-label": kt(o.string, (e) => Array.isArray(e.value || e.defaultValue) && e["aria-label"] != null ? new Error("MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.") : null),
  /**
   * The id of the element containing a label for the slider.
   */
  "aria-labelledby": o.string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  "aria-valuetext": kt(o.string, (e) => Array.isArray(e.value || e.defaultValue) && e["aria-valuetext"] != null ? new Error("MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.") : null),
  /**
   * @ignore
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Mark: o.elementType,
    MarkLabel: o.elementType,
    Rail: o.elementType,
    Root: o.elementType,
    Thumb: o.elementType,
    Track: o.elementType,
    ValueLabel: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.oneOfType([o.func, o.object]),
    mark: o.oneOfType([o.func, o.object]),
    markLabel: o.oneOfType([o.func, o.object]),
    rail: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object]),
    thumb: o.oneOfType([o.func, o.object]),
    track: o.oneOfType([o.func, o.object]),
    valueLabel: o.oneOfType([o.func, o.shape({
      children: o.element,
      className: o.string,
      open: o.bool,
      style: o.object,
      value: o.number,
      valueLabelDisplay: o.oneOf(["auto", "off", "on"])
    })])
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.oneOfType([o.arrayOf(o.number), o.number]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap: o.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   * This is important for screen reader users.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: o.func,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: o.func,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: o.oneOfType([o.arrayOf(o.shape({
    label: o.node,
    value: o.number.isRequired
  })), o.bool]),
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: o.number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: o.number,
  /**
   * Name attribute of the hidden `input` element.
   */
  name: o.string,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange: o.func,
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: o.func,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: o.oneOf(["horizontal", "vertical"]),
  /**
   * A transformation function, to change the scale of the slider.
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  scale: o.func,
  /**
   * The granularity with which the slider can step through values when using Page Up/Page Down or Shift + Arrow Up/Arrow Down.
   * @default 10
   */
  shiftStep: o.number,
  /**
   * The size of the slider.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium"]), o.string]),
  /**
   * The props used for each slot inside the Slider.
   * @default {}
   */
  slotProps: o.shape({
    input: o.oneOfType([o.func, o.object]),
    mark: o.oneOfType([o.func, o.object]),
    markLabel: o.oneOfType([o.func, o.object]),
    rail: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object]),
    thumb: o.oneOfType([o.func, o.object]),
    track: o.oneOfType([o.func, o.object]),
    valueLabel: o.oneOfType([o.func, o.shape({
      children: o.element,
      className: o.string,
      open: o.bool,
      style: o.object,
      value: o.number,
      valueLabelDisplay: o.oneOf(["auto", "off", "on"])
    })])
  }),
  /**
   * The components used for each slot inside the Slider.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    mark: o.elementType,
    markLabel: o.elementType,
    rail: o.elementType,
    root: o.elementType,
    thumb: o.elementType,
    track: o.elementType,
    valueLabel: o.elementType
  }),
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: o.number,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex: o.number,
  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: o.oneOf(["inverted", "normal", !1]),
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: o.oneOfType([o.arrayOf(o.number), o.number]),
  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   * @default 'off'
   */
  valueLabelDisplay: o.oneOf(["auto", "off", "on"]),
  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  valueLabelFormat: o.oneOfType([o.func, o.string])
});
const bs = Ja;
function Qh(e) {
  return Le("MuiToolbar", e);
}
Ue("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const ev = ["className", "component", "disableGutters", "variant"], tv = (e) => {
  const {
    classes: t,
    disableGutters: r,
    variant: n
  } = e;
  return We({
    root: ["root", !r && "gutters", n]
  }, Qh, t);
}, rv = ye("div", {
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
}) => b({
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
}) => t.variant === "regular" && e.mixins.toolbar), Za = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiToolbar"
  }), {
    className: i,
    component: s = "div",
    disableGutters: a = !1,
    variant: l = "regular"
  } = n, c = ge(n, ev), u = b({}, n, {
    component: s,
    disableGutters: a,
    variant: l
  }), d = tv(u);
  return /* @__PURE__ */ $.jsx(rv, b({
    as: s,
    className: pe(d.root, i),
    ref: r,
    ownerState: u
  }, c));
});
process.env.NODE_ENV !== "production" && (Za.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: o.oneOfType([o.oneOf(["dense", "regular"]), o.string])
});
const nv = Za;
var Xo = {}, oo = {};
const ov = /* @__PURE__ */ Ot(up);
var Es;
function Qa() {
  return Es || (Es = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = ov;
  }(oo)), oo;
}
var iv = jn;
Object.defineProperty(Xo, "__esModule", {
  value: !0
});
var el = Xo.default = void 0, sv = iv(Qa()), av = $;
el = Xo.default = (0, sv.default)(/* @__PURE__ */ (0, av.jsx)("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu");
var Jo = {}, lv = jn;
Object.defineProperty(Jo, "__esModule", {
  value: !0
});
var tl = Jo.default = void 0, cv = lv(Qa()), uv = $;
tl = Jo.default = (0, cv.default)(/* @__PURE__ */ (0, uv.jsx)("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "ChevronRight");
const pv = ({ helios: e }) => {
  const [t, r] = Wt(!1), [n, i] = Wt(50), [s, a] = Wt(50), [l, c] = Wt("white"), [u, d] = Wt("normal"), [p, m] = Wt("flat"), x = (T) => {
    c(T.target.value);
  }, y = (T) => {
    d(T.target.value);
  }, h = (T) => {
    m(T.target.value);
  }, v = [
    { value: "white", label: "White" },
    { value: "dark", label: "Dark" }
  ], S = [
    { value: "normal", label: "Normal" },
    { value: "additive", label: "Additive" }
    // Only applicable with dark background
  ], w = [
    { value: "flat", label: "Flat" },
    { value: "shaded", label: "Shaded" }
  ], O = () => {
    r(!0);
  }, R = () => {
    r(!1);
  }, g = (T, z) => {
    if (i(z), e) {
      const G = Math.pow(10, z / 100);
      e.nodesGlobalSizeScale(G), e.render();
    }
  }, P = (T, z) => {
    a(z), e && (e.edgesGlobalOpacityScale(z / 100), e.render());
  };
  return il(() => {
    if (e) {
      const T = {
        white: [255, 255, 255, 1],
        dark: [0, 0, 0, 1]
      };
      e.backgroundColor(T[l]);
      const z = u === "additive" && l === "dark";
      e.additiveBlending(z), e.shadedNodes(p === "shaded"), e.render();
    }
  }, [l, u, p, e]), /* @__PURE__ */ $.jsxs("div", { children: [
    /* @__PURE__ */ $.jsxs(
      fh,
      {
        variant: "persistent",
        anchor: "right",
        open: t,
        children: [
          /* @__PURE__ */ $.jsxs(nv, { sx: { backgroundColor: "primary.main" }, children: [
            /* @__PURE__ */ $.jsx(wt, { variant: "h6", noWrap: !0, sx: { flexGrow: 1 }, children: "Settings" }),
            /* @__PURE__ */ $.jsx(is, { onClick: R, children: /* @__PURE__ */ $.jsx(tl, {}) })
          ] }),
          /* @__PURE__ */ $.jsx(eh, {}),
          /* @__PURE__ */ $.jsx(wt, { variant: "body1", children: "Size" }),
          /* @__PURE__ */ $.jsx(
            bs,
            {
              value: n,
              onChange: g,
              min: 0,
              max: 100,
              "aria-labelledby": "size-slider"
            }
          ),
          /* @__PURE__ */ $.jsx(wt, { variant: "body1", children: "Edges" }),
          /* @__PURE__ */ $.jsx(
            bs,
            {
              value: s,
              onChange: P,
              min: 0,
              max: 100,
              "aria-labelledby": "edges-slider"
            }
          ),
          /* @__PURE__ */ $.jsx(wt, { variant: "body1", children: "Background Mode" }),
          /* @__PURE__ */ $.jsx(to, { children: v.map((T) => /* @__PURE__ */ $.jsx(
            ro,
            {
              control: /* @__PURE__ */ $.jsx(no, { checked: l === T.value }),
              label: T.value,
              value: T.value,
              onChange: x
            },
            T.value
          )) }),
          /* @__PURE__ */ $.jsx(wt, { variant: "body1", children: "Blending Mode" }),
          /* @__PURE__ */ $.jsx(to, { children: S.map((T) => /* @__PURE__ */ $.jsx(
            ro,
            {
              control: /* @__PURE__ */ $.jsx(
                no,
                {
                  checked: u === T.value,
                  disabled: l !== "dark"
                }
              ),
              label: T.value,
              value: T.value,
              onChange: y
            },
            T.value
          )) }),
          /* @__PURE__ */ $.jsx(wt, { variant: "body1", children: "Nodes Mode" }),
          /* @__PURE__ */ $.jsx(to, { children: w.map((T) => /* @__PURE__ */ $.jsx(
            ro,
            {
              control: /* @__PURE__ */ $.jsx(no, { checked: p === T.value }),
              label: T.value,
              value: T.value,
              onChange: h
            },
            T.value
          )) })
        ]
      }
    ),
    /* @__PURE__ */ $.jsx(is, { onClick: O, size: "large", sx: { position: "absolute", top: 10, right: 10 }, children: /* @__PURE__ */ $.jsx(el, {}) })
  ] });
};
export {
  pv as default
};
