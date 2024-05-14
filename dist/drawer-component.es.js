import * as b from "react";
import ct, { forwardRef as Ts, useContext as Ss, Children as Os, isValidElement as Fr, cloneElement as zr, useState as kn } from "react";
import * as _s from "react-dom";
import $r from "react-dom";
function Rs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function St(e) {
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
var Yn = { exports: {} }, cr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Do;
function ws() {
  if (Do)
    return cr;
  Do = 1;
  var e = ct, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var f, m = {}, p = null, E = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (E = c.ref);
    for (f in c)
      n.call(c, f) && !i.hasOwnProperty(f) && (m[f] = c[f]);
    if (l && l.defaultProps)
      for (f in c = l.defaultProps, c)
        m[f] === void 0 && (m[f] = c[f]);
    return { $$typeof: t, type: l, key: p, ref: E, props: m, _owner: o.current };
  }
  return cr.Fragment = r, cr.jsx = s, cr.jsxs = s, cr;
}
var ur = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function Cs() {
  return Lo || (Lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ct, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), y = Symbol.iterator, h = "@@iterator";
    function v(d) {
      if (d === null || typeof d != "object")
        return null;
      var R = y && d[y] || d[h];
      return typeof R == "function" ? R : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(d) {
      {
        for (var R = arguments.length, j = new Array(R > 1 ? R - 1 : 0), ne = 1; ne < R; ne++)
          j[ne - 1] = arguments[ne];
        S("error", d, j);
      }
    }
    function S(d, R, j) {
      {
        var ne = _.ReactDebugCurrentFrame, Q = ne.getStackAddendum();
        Q !== "" && (R += "%s", j = j.concat([Q]));
        var ae = j.map(function(ce) {
          return String(ce);
        });
        ae.unshift("Warning: " + R), Function.prototype.apply.call(console[d], console, ae);
      }
    }
    var w = !1, g = !1, I = !1, C = !1, oe = !1, ie;
    ie = Symbol.for("react.module.reference");
    function W(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === i || oe || d === o || d === u || d === f || C || d === E || w || g || I || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === m || d.$$typeof === s || d.$$typeof === l || d.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === ie || d.getModuleId !== void 0));
    }
    function F(d, R, j) {
      var ne = d.displayName;
      if (ne)
        return ne;
      var Q = R.displayName || R.name || "";
      return Q !== "" ? j + "(" + Q + ")" : j;
    }
    function ee(d) {
      return d.displayName || "Context";
    }
    function Y(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
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
          case l:
            var R = d;
            return ee(R) + ".Consumer";
          case s:
            var j = d;
            return ee(j._context) + ".Provider";
          case c:
            return F(d, d.render, "ForwardRef");
          case m:
            var ne = d.displayName || null;
            return ne !== null ? ne : Y(d.type) || "Memo";
          case p: {
            var Q = d, ae = Q._payload, ce = Q._init;
            try {
              return Y(ce(ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, H = 0, B, z, A, me, O, M, te;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function D() {
      {
        if (H === 0) {
          B = console.log, z = console.info, A = console.warn, me = console.error, O = console.group, M = console.groupCollapsed, te = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: K,
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
        H++;
      }
    }
    function J() {
      {
        if (H--, H === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, d, {
              value: B
            }),
            info: L({}, d, {
              value: z
            }),
            warn: L({}, d, {
              value: A
            }),
            error: L({}, d, {
              value: me
            }),
            group: L({}, d, {
              value: O
            }),
            groupCollapsed: L({}, d, {
              value: M
            }),
            groupEnd: L({}, d, {
              value: te
            })
          });
        }
        H < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = _.ReactCurrentDispatcher, G;
    function Z(d, R, j) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (Q) {
            var ne = Q.stack.trim().match(/\n( *(at )?)/);
            G = ne && ne[1] || "";
          }
        return `
` + G + d;
      }
    }
    var X = !1, re;
    {
      var Oe = typeof WeakMap == "function" ? WeakMap : Map;
      re = new Oe();
    }
    function N(d, R) {
      if (!d || X)
        return "";
      {
        var j = re.get(d);
        if (j !== void 0)
          return j;
      }
      var ne;
      X = !0;
      var Q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ae;
      ae = q.current, q.current = null, D();
      try {
        if (R) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (xt) {
              ne = xt;
            }
            Reflect.construct(d, [], ce);
          } else {
            try {
              ce.call();
            } catch (xt) {
              ne = xt;
            }
            d.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            ne = xt;
          }
          d();
        }
      } catch (xt) {
        if (xt && ne && typeof xt.stack == "string") {
          for (var se = xt.stack.split(`
`), _e = ne.stack.split(`
`), je = se.length - 1, Ie = _e.length - 1; je >= 1 && Ie >= 0 && se[je] !== _e[Ie]; )
            Ie--;
          for (; je >= 1 && Ie >= 0; je--, Ie--)
            if (se[je] !== _e[Ie]) {
              if (je !== 1 || Ie !== 1)
                do
                  if (je--, Ie--, Ie < 0 || se[je] !== _e[Ie]) {
                    var Ze = `
` + se[je].replace(" at new ", " at ");
                    return d.displayName && Ze.includes("<anonymous>") && (Ze = Ze.replace("<anonymous>", d.displayName)), typeof d == "function" && re.set(d, Ze), Ze;
                  }
                while (je >= 1 && Ie >= 0);
              break;
            }
        }
      } finally {
        X = !1, q.current = ae, J(), Error.prepareStackTrace = Q;
      }
      var zt = d ? d.displayName || d.name : "", Io = zt ? Z(zt) : "";
      return typeof d == "function" && re.set(d, Io), Io;
    }
    function pe(d, R, j) {
      return N(d, !1);
    }
    function P(d) {
      var R = d.prototype;
      return !!(R && R.isReactComponent);
    }
    function fe(d, R, j) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return N(d, P(d));
      if (typeof d == "string")
        return Z(d);
      switch (d) {
        case u:
          return Z("Suspense");
        case f:
          return Z("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case c:
            return pe(d.render);
          case m:
            return fe(d.type, R, j);
          case p: {
            var ne = d, Q = ne._payload, ae = ne._init;
            try {
              return fe(ae(Q), R, j);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, Ve = {}, Fe = _.ReactDebugCurrentFrame;
    function dt(d) {
      if (d) {
        var R = d._owner, j = fe(d.type, d._source, R ? R.type : null);
        Fe.setExtraStackFrame(j);
      } else
        Fe.setExtraStackFrame(null);
    }
    function ke(d, R, j, ne, Q) {
      {
        var ae = Function.call.bind(Ce);
        for (var ce in d)
          if (ae(d, ce)) {
            var se = void 0;
            try {
              if (typeof d[ce] != "function") {
                var _e = Error((ne || "React class") + ": " + j + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _e.name = "Invariant Violation", _e;
              }
              se = d[ce](R, ce, ne, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (je) {
              se = je;
            }
            se && !(se instanceof Error) && (dt(Q), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", j, ce, typeof se), dt(null)), se instanceof Error && !(se.message in Ve) && (Ve[se.message] = !0, dt(Q), k("Failed %s type: %s", j, se.message), dt(null));
          }
      }
    }
    var Xe = Array.isArray;
    function bt(d) {
      return Xe(d);
    }
    function kt(d) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, j = R && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return j;
      }
    }
    function pt(d) {
      try {
        return st(d), !1;
      } catch {
        return !0;
      }
    }
    function st(d) {
      return "" + d;
    }
    function _t(d) {
      if (pt(d))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kt(d)), st(d);
    }
    var Be = _.ReactCurrentOwner, $ = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, T, U, le;
    le = {};
    function de(d) {
      if (Ce.call(d, "ref")) {
        var R = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function ue(d) {
      if (Ce.call(d, "key")) {
        var R = Object.getOwnPropertyDescriptor(d, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function Ye(d, R) {
      if (typeof d.ref == "string" && Be.current && R && Be.current.stateNode !== R) {
        var j = Y(Be.current.type);
        le[j] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(Be.current.type), d.ref), le[j] = !0);
      }
    }
    function Je(d, R) {
      {
        var j = function() {
          T || (T = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        j.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: j,
          configurable: !0
        });
      }
    }
    function he(d, R) {
      {
        var j = function() {
          U || (U = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        j.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: j,
          configurable: !0
        });
      }
    }
    var Ue = function(d, R, j, ne, Q, ae, ce) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: R,
        ref: j,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: ae
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function Rt(d, R, j, ne, Q) {
      {
        var ae, ce = {}, se = null, _e = null;
        j !== void 0 && (_t(j), se = "" + j), ue(R) && (_t(R.key), se = "" + R.key), de(R) && (_e = R.ref, Ye(R, Q));
        for (ae in R)
          Ce.call(R, ae) && !$.hasOwnProperty(ae) && (ce[ae] = R[ae]);
        if (d && d.defaultProps) {
          var je = d.defaultProps;
          for (ae in je)
            ce[ae] === void 0 && (ce[ae] = je[ae]);
        }
        if (se || _e) {
          var Ie = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          se && Je(ce, Ie), _e && he(ce, Ie);
        }
        return Ue(d, se, _e, Q, ne, Be.current, ce);
      }
    }
    var Lt = _.ReactCurrentOwner, or = _.ReactDebugCurrentFrame;
    function Et(d) {
      if (d) {
        var R = d._owner, j = fe(d.type, d._source, R ? R.type : null);
        or.setExtraStackFrame(j);
      } else
        or.setExtraStackFrame(null);
    }
    var $t;
    $t = !1;
    function Nt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function ir() {
      {
        if (Lt.current) {
          var d = Y(Lt.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function ar(d) {
      {
        if (d !== void 0) {
          var R = d.fileName.replace(/^.*[\\\/]/, ""), j = d.lineNumber;
          return `

Check your code at ` + R + ":" + j + ".";
        }
        return "";
      }
    }
    var Pr = {};
    function sr(d) {
      {
        var R = ir();
        if (!R) {
          var j = typeof d == "string" ? d : d.displayName || d.name;
          j && (R = `

Check the top-level render call using <` + j + ">.");
        }
        return R;
      }
    }
    function Vt(d, R) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var j = sr(R);
        if (Pr[j])
          return;
        Pr[j] = !0;
        var ne = "";
        d && d._owner && d._owner !== Lt.current && (ne = " It was passed a child from " + Y(d._owner.type) + "."), Et(d), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, ne), Et(null);
      }
    }
    function Ft(d, R) {
      {
        if (typeof d != "object")
          return;
        if (bt(d))
          for (var j = 0; j < d.length; j++) {
            var ne = d[j];
            Nt(ne) && Vt(ne, R);
          }
        else if (Nt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var Q = v(d);
          if (typeof Q == "function" && Q !== d.entries)
            for (var ae = Q.call(d), ce; !(ce = ae.next()).done; )
              Nt(ce.value) && Vt(ce.value, R);
        }
      }
    }
    function _n(d) {
      {
        var R = d.type;
        if (R == null || typeof R == "string")
          return;
        var j;
        if (typeof R == "function")
          j = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === m))
          j = R.propTypes;
        else
          return;
        if (j) {
          var ne = Y(R);
          ke(j, d.props, "prop", ne, d);
        } else if (R.PropTypes !== void 0 && !$t) {
          $t = !0;
          var Q = Y(R);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Q || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rn(d) {
      {
        for (var R = Object.keys(d.props), j = 0; j < R.length; j++) {
          var ne = R[j];
          if (ne !== "children" && ne !== "key") {
            Et(d), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), Et(null);
            break;
          }
        }
        d.ref !== null && (Et(d), k("Invalid attribute `ref` supplied to `React.Fragment`."), Et(null));
      }
    }
    function kr(d, R, j, ne, Q, ae) {
      {
        var ce = W(d);
        if (!ce) {
          var se = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = ar(Q);
          _e ? se += _e : se += ir();
          var je;
          d === null ? je = "null" : bt(d) ? je = "array" : d !== void 0 && d.$$typeof === t ? (je = "<" + (Y(d.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : je = typeof d, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", je, se);
        }
        var Ie = Rt(d, R, j, Q, ae);
        if (Ie == null)
          return Ie;
        if (ce) {
          var Ze = R.children;
          if (Ze !== void 0)
            if (ne)
              if (bt(Ze)) {
                for (var zt = 0; zt < Ze.length; zt++)
                  Ft(Ze[zt], d);
                Object.freeze && Object.freeze(Ze);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ft(Ze, d);
        }
        return d === n ? Rn(Ie) : _n(Ie), Ie;
      }
    }
    function wn(d, R, j) {
      return kr(d, R, j, !0);
    }
    function Cn(d, R, j) {
      return kr(d, R, j, !1);
    }
    var Pn = Cn, lr = wn;
    ur.Fragment = n, ur.jsx = Pn, ur.jsxs = lr;
  }()), ur;
}
process.env.NODE_ENV === "production" ? Yn.exports = ws() : Yn.exports = Cs();
var V = Yn.exports;
const Ps = {
  black: "#000",
  white: "#fff"
}, yr = Ps, ks = {
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
}, Bt = ks, $s = {
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
}, Ut = $s, Ns = {
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
}, Wt = Ns, js = {
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
}, Yt = js, As = {
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
}, qt = As, Ms = {
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
}, fr = Ms, Is = {
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
}, Ds = Is;
function br(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: br
}, Symbol.toStringTag, { value: "Module" })), so = "$$material";
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
function Re(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Qi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Vs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fs = /* @__PURE__ */ Qi(
  function(e) {
    return Vs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function zs(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Bs(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Us = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Bs(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = zs(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (l) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', l);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), ze = "-ms-", Hr = "-moz-", ve = "-webkit-", lo = "comm", co = "rule", uo = "decl", Ws = "@import", ea = "@keyframes", Ys = "@layer", qs = Math.abs, nn = String.fromCharCode, Hs = Object.assign;
function Ks(e, t) {
  return Le(e, 0) ^ 45 ? (((t << 2 ^ Le(e, 0)) << 2 ^ Le(e, 1)) << 2 ^ Le(e, 2)) << 2 ^ Le(e, 3) : 0;
}
function ta(e) {
  return e.trim();
}
function Gs(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ge(e, t, r) {
  return e.replace(t, r);
}
function qn(e, t) {
  return e.indexOf(t);
}
function Le(e, t) {
  return e.charCodeAt(t) | 0;
}
function Er(e, t, r) {
  return e.slice(t, r);
}
function ht(e) {
  return e.length;
}
function fo(e) {
  return e.length;
}
function Nr(e, t) {
  return t.push(e), e;
}
function Xs(e, t) {
  return e.map(t).join("");
}
var on = 1, Zt = 1, ra = 0, We = 0, De = 0, er = "";
function an(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: on, column: Zt, length: s, return: "" };
}
function dr(e, t) {
  return Hs(an("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Js() {
  return De;
}
function Zs() {
  return De = We > 0 ? Le(er, --We) : 0, Zt--, De === 10 && (Zt = 1, on--), De;
}
function He() {
  return De = We < ra ? Le(er, We++) : 0, Zt++, De === 10 && (Zt = 1, on++), De;
}
function gt() {
  return Le(er, We);
}
function Br() {
  return We;
}
function Or(e, t) {
  return Er(er, e, t);
}
function xr(e) {
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
function na(e) {
  return on = Zt = 1, ra = ht(er = e), We = 0, [];
}
function oa(e) {
  return er = "", e;
}
function Ur(e) {
  return ta(Or(We - 1, Hn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qs(e) {
  for (; (De = gt()) && De < 33; )
    He();
  return xr(e) > 2 || xr(De) > 3 ? "" : " ";
}
function el(e, t) {
  for (; --t && He() && !(De < 48 || De > 102 || De > 57 && De < 65 || De > 70 && De < 97); )
    ;
  return Or(e, Br() + (t < 6 && gt() == 32 && He() == 32));
}
function Hn(e) {
  for (; He(); )
    switch (De) {
      case e:
        return We;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Hn(De);
        break;
      case 40:
        e === 41 && Hn(e);
        break;
      case 92:
        He();
        break;
    }
  return We;
}
function tl(e, t) {
  for (; He() && e + De !== 47 + 10; )
    if (e + De === 42 + 42 && gt() === 47)
      break;
  return "/*" + Or(t, We - 1) + "*" + nn(e === 47 ? e : He());
}
function rl(e) {
  for (; !xr(gt()); )
    He();
  return Or(e, We);
}
function nl(e) {
  return oa(Wr("", null, null, null, [""], e = na(e), 0, [0], e));
}
function Wr(e, t, r, n, o, i, s, l, c) {
  for (var u = 0, f = 0, m = s, p = 0, E = 0, y = 0, h = 1, v = 1, _ = 1, k = 0, S = "", w = o, g = i, I = n, C = S; v; )
    switch (y = k, k = He()) {
      case 40:
        if (y != 108 && Le(C, m - 1) == 58) {
          qn(C += ge(Ur(k), "&", "&\f"), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Ur(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Qs(y);
        break;
      case 92:
        C += el(Br() - 1, 7);
        continue;
      case 47:
        switch (gt()) {
          case 42:
          case 47:
            Nr(ol(tl(He(), Br()), t, r), c);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * h:
        l[u++] = ht(C) * _;
      case 125 * h:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            v = 0;
          case 59 + f:
            _ == -1 && (C = ge(C, /\f/g, "")), E > 0 && ht(C) - m && Nr(E > 32 ? Fo(C + ";", n, r, m - 1) : Fo(ge(C, " ", "") + ";", n, r, m - 2), c);
            break;
          case 59:
            C += ";";
          default:
            if (Nr(I = Vo(C, t, r, u, f, o, l, S, w = [], g = [], m), i), k === 123)
              if (f === 0)
                Wr(C, t, I, I, w, i, m, l, g);
              else
                switch (p === 99 && Le(C, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Wr(e, I, I, n && Nr(Vo(e, I, I, 0, 0, o, l, S, o, w = [], m), g), o, g, m, l, n ? w : g);
                    break;
                  default:
                    Wr(C, I, I, I, [""], g, 0, l, g);
                }
        }
        u = f = E = 0, h = _ = 1, S = C = "", m = s;
        break;
      case 58:
        m = 1 + ht(C), E = y;
      default:
        if (h < 1) {
          if (k == 123)
            --h;
          else if (k == 125 && h++ == 0 && Zs() == 125)
            continue;
        }
        switch (C += nn(k), k * h) {
          case 38:
            _ = f > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            l[u++] = (ht(C) - 1) * _, _ = 1;
            break;
          case 64:
            gt() === 45 && (C += Ur(He())), p = gt(), f = m = ht(S = C += rl(Br())), k++;
            break;
          case 45:
            y === 45 && ht(C) == 2 && (h = 0);
        }
    }
  return i;
}
function Vo(e, t, r, n, o, i, s, l, c, u, f) {
  for (var m = o - 1, p = o === 0 ? i : [""], E = fo(p), y = 0, h = 0, v = 0; y < n; ++y)
    for (var _ = 0, k = Er(e, m + 1, m = qs(h = s[y])), S = e; _ < E; ++_)
      (S = ta(h > 0 ? p[_] + " " + k : ge(k, /&\f/g, p[_]))) && (c[v++] = S);
  return an(e, t, r, o === 0 ? co : l, c, u, f);
}
function ol(e, t, r) {
  return an(e, t, r, lo, nn(Js()), Er(e, 2, -2), 0);
}
function Fo(e, t, r, n) {
  return an(e, t, r, uo, Er(e, 0, n), Er(e, n + 1, -1), n);
}
function Xt(e, t) {
  for (var r = "", n = fo(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function il(e, t, r, n) {
  switch (e.type) {
    case Ys:
      if (e.children.length)
        break;
    case Ws:
    case uo:
      return e.return = e.return || e.value;
    case lo:
      return "";
    case ea:
      return e.return = e.value + "{" + Xt(e.children, n) + "}";
    case co:
      e.value = e.props.join(",");
  }
  return ht(r = Xt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function al(e) {
  var t = fo(e);
  return function(r, n, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](r, n, o, i) || "";
    return s;
  };
}
function sl(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ll = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = gt(), o === 38 && i === 12 && (r[n] = 1), !xr(i); )
    He();
  return Or(t, We);
}, cl = function(t, r) {
  var n = -1, o = 44;
  do
    switch (xr(o)) {
      case 0:
        o === 38 && gt() === 12 && (r[n] = 1), t[n] += ll(We - 1, r, n);
        break;
      case 2:
        t[n] += Ur(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = gt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += nn(o);
    }
  while (o = He());
  return t;
}, ul = function(t, r) {
  return oa(cl(na(t), r));
}, zo = /* @__PURE__ */ new WeakMap(), fl = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !zo.get(n)) && !o) {
      zo.set(t, !0);
      for (var i = [], s = ul(r, i), l = n.props, c = 0, u = 0; c < s.length; c++)
        for (var f = 0; f < l.length; f++, u++)
          t.props[u] = i[c] ? s[c].replace(/&\f/g, l[f]) : l[f] + " " + s[c];
    }
  }
}, dl = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, pl = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", ml = function(t) {
  return t.type === "comm" && t.children.indexOf(pl) > -1;
}, hl = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var i = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!r.parent, l = s ? r.parent.children : (
          // global rule at the root level
          o
        ), c = l.length - 1; c >= 0; c--) {
          var u = l[c];
          if (u.line < r.line)
            break;
          if (u.column < r.column) {
            if (ml(u))
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
}, ia = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, vl = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!ia(r[n]))
      return !0;
  return !1;
}, Bo = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, gl = function(t, r, n) {
  ia(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Bo(t)) : vl(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Bo(t)));
};
function aa(e, t) {
  switch (Ks(e, t)) {
    case 5103:
      return ve + "print-" + e + e;
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
      return ve + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ve + e + Hr + e + ze + e + e;
    case 6828:
    case 4268:
      return ve + e + ze + e + e;
    case 6165:
      return ve + e + ze + "flex-" + e + e;
    case 5187:
      return ve + e + ge(e, /(\w+).+(:[^]+)/, ve + "box-$1$2" + ze + "flex-$1$2") + e;
    case 5443:
      return ve + e + ze + "flex-item-" + ge(e, /flex-|-self/, "") + e;
    case 4675:
      return ve + e + ze + "flex-line-pack" + ge(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ve + e + ze + ge(e, "shrink", "negative") + e;
    case 5292:
      return ve + e + ze + ge(e, "basis", "preferred-size") + e;
    case 6060:
      return ve + "box-" + ge(e, "-grow", "") + ve + e + ze + ge(e, "grow", "positive") + e;
    case 4554:
      return ve + ge(e, /([^-])(transform)/g, "$1" + ve + "$2") + e;
    case 6187:
      return ge(ge(ge(e, /(zoom-|grab)/, ve + "$1"), /(image-set)/, ve + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ge(e, /(image-set\([^]*)/, ve + "$1$`$1");
    case 4968:
      return ge(ge(e, /(.+:)(flex-)?(.*)/, ve + "box-pack:$3" + ze + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ve + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ge(e, /(.+)-inline(.+)/, ve + "$1$2") + e;
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
      if (ht(e) - 1 - t > 6)
        switch (Le(e, t + 1)) {
          case 109:
            if (Le(e, t + 4) !== 45)
              break;
          case 102:
            return ge(e, /(.+:)(.+)-([^]+)/, "$1" + ve + "$2-$3$1" + Hr + (Le(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~qn(e, "stretch") ? aa(ge(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Le(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Le(e, ht(e) - 3 - (~qn(e, "!important") && 10))) {
        case 107:
          return ge(e, ":", ":" + ve) + e;
        case 101:
          return ge(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ve + (Le(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ve + "$2$3$1" + ze + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Le(e, t + 11)) {
        case 114:
          return ve + e + ze + ge(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ve + e + ze + ge(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ve + e + ze + ge(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ve + e + ze + e + e;
  }
  return e;
}
var yl = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case uo:
        t.return = aa(t.value, t.length);
        break;
      case ea:
        return Xt([dr(t, {
          value: ge(t.value, "@", "@" + ve)
        })], o);
      case co:
        if (t.length)
          return Xs(t.props, function(i) {
            switch (Gs(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Xt([dr(t, {
                  props: [ge(i, /:(read-\w+)/, ":" + Hr + "$1")]
                })], o);
              case "::placeholder":
                return Xt([dr(t, {
                  props: [ge(i, /:(plac\w+)/, ":" + ve + "input-$1")]
                }), dr(t, {
                  props: [ge(i, /:(plac\w+)/, ":" + Hr + "$1")]
                }), dr(t, {
                  props: [ge(i, /:(plac\w+)/, ze + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, bl = [yl], sa = function(t) {
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
  var o = t.stylisPlugins || bl;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(h) {
      for (var v = h.getAttribute("data-emotion").split(" "), _ = 1; _ < v.length; _++)
        i[v[_]] = !0;
      l.push(h);
    }
  );
  var c, u = [fl, dl];
  process.env.NODE_ENV !== "production" && u.push(hl({
    get compat() {
      return y.compat;
    }
  }), gl);
  {
    var f, m = [il, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? f.insert(h.return) : h.value && h.type !== lo && f.insert(h.value + "{}"));
    } : sl(function(h) {
      f.insert(h);
    })], p = al(u.concat(o, m)), E = function(v) {
      return Xt(nl(v), p);
    };
    c = function(v, _, k, S) {
      f = k, process.env.NODE_ENV !== "production" && _.map !== void 0 && (f = {
        insert: function(g) {
          k.insert(g + _.map);
        }
      }), E(v ? v + "{" + _.styles + "}" : _.styles), S && (y.inserted[_.name] = !0);
    };
  }
  var y = {
    key: r,
    sheet: new Us({
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
    insert: c
  };
  return y.sheet.hydrate(l), y;
}, jr = { exports: {} }, be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uo;
function El() {
  if (Uo)
    return be;
  Uo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function S(g) {
    if (typeof g == "object" && g !== null) {
      var I = g.$$typeof;
      switch (I) {
        case t:
          switch (g = g.type, g) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case m:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case f:
                case y:
                case E:
                case s:
                  return g;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function w(g) {
    return S(g) === u;
  }
  return be.AsyncMode = c, be.ConcurrentMode = u, be.ContextConsumer = l, be.ContextProvider = s, be.Element = t, be.ForwardRef = f, be.Fragment = n, be.Lazy = y, be.Memo = E, be.Portal = r, be.Profiler = i, be.StrictMode = o, be.Suspense = m, be.isAsyncMode = function(g) {
    return w(g) || S(g) === c;
  }, be.isConcurrentMode = w, be.isContextConsumer = function(g) {
    return S(g) === l;
  }, be.isContextProvider = function(g) {
    return S(g) === s;
  }, be.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, be.isForwardRef = function(g) {
    return S(g) === f;
  }, be.isFragment = function(g) {
    return S(g) === n;
  }, be.isLazy = function(g) {
    return S(g) === y;
  }, be.isMemo = function(g) {
    return S(g) === E;
  }, be.isPortal = function(g) {
    return S(g) === r;
  }, be.isProfiler = function(g) {
    return S(g) === i;
  }, be.isStrictMode = function(g) {
    return S(g) === o;
  }, be.isSuspense = function(g) {
    return S(g) === m;
  }, be.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === m || g === p || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === E || g.$$typeof === s || g.$$typeof === l || g.$$typeof === f || g.$$typeof === v || g.$$typeof === _ || g.$$typeof === k || g.$$typeof === h);
  }, be.typeOf = S, be;
}
var Ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wo;
function xl() {
  return Wo || (Wo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function S(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === n || N === u || N === i || N === o || N === m || N === p || typeof N == "object" && N !== null && (N.$$typeof === y || N.$$typeof === E || N.$$typeof === s || N.$$typeof === l || N.$$typeof === f || N.$$typeof === v || N.$$typeof === _ || N.$$typeof === k || N.$$typeof === h);
    }
    function w(N) {
      if (typeof N == "object" && N !== null) {
        var pe = N.$$typeof;
        switch (pe) {
          case t:
            var P = N.type;
            switch (P) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case m:
                return P;
              default:
                var fe = P && P.$$typeof;
                switch (fe) {
                  case l:
                  case f:
                  case y:
                  case E:
                  case s:
                    return fe;
                  default:
                    return pe;
                }
            }
          case r:
            return pe;
        }
      }
    }
    var g = c, I = u, C = l, oe = s, ie = t, W = f, F = n, ee = y, Y = E, L = r, H = i, B = o, z = m, A = !1;
    function me(N) {
      return A || (A = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(N) || w(N) === c;
    }
    function O(N) {
      return w(N) === u;
    }
    function M(N) {
      return w(N) === l;
    }
    function te(N) {
      return w(N) === s;
    }
    function K(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function D(N) {
      return w(N) === f;
    }
    function J(N) {
      return w(N) === n;
    }
    function q(N) {
      return w(N) === y;
    }
    function G(N) {
      return w(N) === E;
    }
    function Z(N) {
      return w(N) === r;
    }
    function X(N) {
      return w(N) === i;
    }
    function re(N) {
      return w(N) === o;
    }
    function Oe(N) {
      return w(N) === m;
    }
    Ee.AsyncMode = g, Ee.ConcurrentMode = I, Ee.ContextConsumer = C, Ee.ContextProvider = oe, Ee.Element = ie, Ee.ForwardRef = W, Ee.Fragment = F, Ee.Lazy = ee, Ee.Memo = Y, Ee.Portal = L, Ee.Profiler = H, Ee.StrictMode = B, Ee.Suspense = z, Ee.isAsyncMode = me, Ee.isConcurrentMode = O, Ee.isContextConsumer = M, Ee.isContextProvider = te, Ee.isElement = K, Ee.isForwardRef = D, Ee.isFragment = J, Ee.isLazy = q, Ee.isMemo = G, Ee.isPortal = Z, Ee.isProfiler = X, Ee.isStrictMode = re, Ee.isSuspense = Oe, Ee.isValidElementType = S, Ee.typeOf = w;
  }()), Ee;
}
var Yo;
function po() {
  return Yo || (Yo = 1, process.env.NODE_ENV === "production" ? jr.exports = El() : jr.exports = xl()), jr.exports;
}
var la = po(), Tl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Sl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ca = {};
ca[la.ForwardRef] = Tl;
ca[la.Memo] = Sl;
var Ol = !0;
function mo(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var sn = function(t, r, n) {
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
  Ol === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, ln = function(t, r, n) {
  sn(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function _l(e) {
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
var Rl = {
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
}, qo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, wl = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Cl = /[A-Z]|^ms/g, ua = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ho = function(t) {
  return t.charCodeAt(1) === 45;
}, Ho = function(t) {
  return t != null && typeof t != "boolean";
}, $n = /* @__PURE__ */ Qi(function(e) {
  return ho(e) ? e : e.replace(Cl, "-$&").toLowerCase();
}), Kr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ua, function(n, o, i) {
          return lt = {
            name: o,
            styles: i,
            next: lt
          }, o;
        });
  }
  return Rl[t] !== 1 && !ho(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var Pl = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, kl = ["normal", "none", "initial", "inherit", "unset"], $l = Kr, Nl = /^-ms-/, jl = /-(.)/g, Ko = {};
  Kr = function(t, r) {
    if (t === "content" && (typeof r != "string" || kl.indexOf(r) === -1 && !Pl.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = $l(t, r);
    return n !== "" && !ho(t) && t.indexOf("-") !== -1 && Ko[t] === void 0 && (Ko[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(Nl, "ms-").replace(jl, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var fa = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Tr(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(fa);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return lt = {
          name: r.name,
          styles: r.styles,
          next: lt
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            lt = {
              name: n.name,
              styles: n.styles,
              next: lt
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return Al(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = lt, s = r(e);
        return lt = i, Tr(e, t, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [], c = r.replace(ua, function(f, m, p) {
          var E = "animation" + l.length;
          return l.push("const " + E + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + E + "}";
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
function Al(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Tr(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : Ho(s) && (n += $n(i) + ":" + Kr(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(fa);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            Ho(s[l]) && (n += $n(i) + ":" + Kr(i, s[l]) + ";");
        else {
          var c = Tr(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += $n(i) + ":" + c + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(wl), n += i + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
var Go = /label:\s*([^\s;\n{]+)\s*(;|$)/g, da;
process.env.NODE_ENV !== "production" && (da = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var lt, Qt = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  lt = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (o = !1, i += Tr(n, r, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(qo), i += s[0]);
  for (var l = 1; l < t.length; l++)
    i += Tr(n, r, t[l]), o && (process.env.NODE_ENV !== "production" && s[l] === void 0 && console.error(qo), i += s[l]);
  var c;
  process.env.NODE_ENV !== "production" && (i = i.replace(da, function(p) {
    return c = p, "";
  })), Go.lastIndex = 0;
  for (var u = "", f; (f = Go.exec(i)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    f[1];
  var m = _l(i) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: m,
    styles: i,
    map: c,
    next: lt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: m,
    styles: i,
    next: lt
  };
}, Ml = function(t) {
  return t();
}, pa = b["useInsertionEffect"] ? b["useInsertionEffect"] : !1, vo = pa || Ml, Xo = pa || b.useLayoutEffect, Il = {}.hasOwnProperty, go = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ sa({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (go.displayName = "EmotionCacheContext");
var Dl = go.Provider, cn = function(t) {
  return /* @__PURE__ */ Ts(function(r, n) {
    var o = Ss(go);
    return t(r, o, n);
  });
}, Dt = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Dt.displayName = "EmotionThemeContext");
var Jo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Zo = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Ll = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return sn(r, n, o), vo(function() {
    return ln(r, n, o);
  }), null;
}, Vl = /* @__PURE__ */ cn(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Jo], i = [n], s = "";
  typeof e.className == "string" ? s = mo(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = Qt(i, void 0, b.useContext(Dt));
  if (process.env.NODE_ENV !== "production" && l.name.indexOf("-") === -1) {
    var c = e[Zo];
    c && (l = Qt([l, "label:" + c + ";"]));
  }
  s += t.key + "-" + l.name;
  var u = {};
  for (var f in e)
    Il.call(e, f) && f !== "css" && f !== Jo && (process.env.NODE_ENV === "production" || f !== Zo) && (u[f] = e[f]);
  return u.ref = r, u.className = s, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Ll, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ b.createElement(o, u));
});
process.env.NODE_ENV !== "production" && (Vl.displayName = "EmotionCssPropInternal");
var Nn = { exports: {} }, Qo;
function ma() {
  return Qo || (Qo = 1, function(e) {
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
  }(Nn)), Nn.exports;
}
ma();
var Fl = {
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
}, ei = !1, ha = /* @__PURE__ */ cn(function(e, t) {
  process.env.NODE_ENV !== "production" && !ei && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), ei = !0);
  var r = e.styles, n = Qt([r], void 0, b.useContext(Dt)), o = b.useRef();
  return Xo(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", i), s.hydrate([c])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), Xo(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && ln(t, n.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (ha.displayName = "EmotionGlobal");
function va() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Qt(t);
}
var un = function() {
  var t = va.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, zl = function e(t) {
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
            for (var l in i)
              i[l] && l && (s && (s += " "), s += l);
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
function Bl(e, t, r) {
  var n = [], o = mo(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var Ul = function(t) {
  var r = t.cache, n = t.serializedArr;
  return vo(function() {
    for (var o = 0; o < n.length; o++)
      ln(r, n[o], !1);
  }), null;
}, Wl = /* @__PURE__ */ cn(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, f = new Array(u), m = 0; m < u; m++)
      f[m] = arguments[m];
    var p = Qt(f, t.registered);
    return n.push(p), sn(t, p, !1), t.key + "-" + p.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, f = new Array(u), m = 0; m < u; m++)
      f[m] = arguments[m];
    return Bl(t.registered, o, zl(f));
  }, s = {
    css: o,
    cx: i,
    theme: b.useContext(Dt)
  }, l = e.children(s);
  return r = !0, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Ul, {
    cache: t,
    serializedArr: n
  }), l);
});
process.env.NODE_ENV !== "production" && (Wl.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var ti = !0, Yl = typeof jest < "u" || typeof vi < "u";
  if (ti && !Yl) {
    var ri = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : ti ? window : global
    ), ni = "__EMOTION_REACT_" + Fl.version.split(".")[0] + "__";
    ri[ni] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), ri[ni] = !0;
  }
}
var ql = Fs, Hl = function(t) {
  return t !== "theme";
}, oi = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? ql : Hl;
}, ii = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, ai = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Kl = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return sn(r, n, o), vo(function() {
    return ln(r, n, o);
  }), null;
}, Gl = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var l = ii(t, r, n), c = l || oi(o), u = !c("as");
  return function() {
    var f = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      m.push.apply(m, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(ai), m.push(f[0][0]);
      for (var p = f.length, E = 1; E < p; E++)
        process.env.NODE_ENV !== "production" && f[0][E] === void 0 && console.error(ai), m.push(f[E], f[0][E]);
    }
    var y = cn(function(h, v, _) {
      var k = u && h.as || o, S = "", w = [], g = h;
      if (h.theme == null) {
        g = {};
        for (var I in h)
          g[I] = h[I];
        g.theme = b.useContext(Dt);
      }
      typeof h.className == "string" ? S = mo(v.registered, w, h.className) : h.className != null && (S = h.className + " ");
      var C = Qt(m.concat(w), v.registered, g);
      S += v.key + "-" + C.name, s !== void 0 && (S += " " + s);
      var oe = u && l === void 0 ? oi(k) : c, ie = {};
      for (var W in h)
        u && W === "as" || // $FlowFixMe
        oe(W) && (ie[W] = h[W]);
      return ie.className = S, ie.ref = _, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Kl, {
        cache: v,
        serialized: C,
        isStringTag: typeof k == "string"
      }), /* @__PURE__ */ b.createElement(k, ie));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = m, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), y.withComponent = function(h, v) {
      return e(h, x({}, r, v, {
        shouldForwardProp: ii(y, v, !0)
      })).apply(void 0, m);
    }, y;
  };
}, Xl = [
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
], Kn = Gl.bind();
Xl.forEach(function(e) {
  Kn[e] = Kn(e);
});
var Gn = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var jn, si;
function Jl() {
  if (si)
    return jn;
  si = 1;
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
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        u[f] = f;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return jn = o() ? Object.assign : function(i, s) {
    for (var l, c = n(i), u, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var m in l)
        t.call(l, m) && (c[m] = l[m]);
      if (e) {
        u = e(l);
        for (var p = 0; p < u.length; p++)
          r.call(l, u[p]) && (c[u[p]] = l[u[p]]);
      }
    }
    return c;
  }, jn;
}
var An, li;
function yo() {
  if (li)
    return An;
  li = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return An = e, An;
}
var Mn, ci;
function ga() {
  return ci || (ci = 1, Mn = Function.call.bind(Object.prototype.hasOwnProperty)), Mn;
}
var In, ui;
function Zl() {
  if (ui)
    return In;
  ui = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = yo(), r = {}, n = ga();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var m;
          try {
            if (typeof i[f] != "function") {
              var p = Error(
                (c || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            m = i[f](s, f, c, l, null, t);
          } catch (y) {
            m = y;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var E = u ? u() : "";
            e(
              "Failed " + l + " type: " + m.message + (E ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, In = o, In;
}
var Dn, fi;
function Ql() {
  if (fi)
    return Dn;
  fi = 1;
  var e = po(), t = Jl(), r = yo(), n = ga(), o = Zl(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Dn = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(O) {
      var M = O && (u && O[u] || O[f]);
      if (typeof M == "function")
        return M;
    }
    var p = "<<anonymous>>", E = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: k(),
      arrayOf: S,
      element: w(),
      elementType: g(),
      instanceOf: I,
      node: W(),
      objectOf: oe,
      oneOf: C,
      oneOfType: ie,
      shape: ee,
      exact: Y
    };
    function y(O, M) {
      return O === M ? O !== 0 || 1 / O === 1 / M : O !== O && M !== M;
    }
    function h(O, M) {
      this.message = O, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function v(O) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, te = 0;
      function K(J, q, G, Z, X, re, Oe) {
        if (Z = Z || p, re = re || G, Oe !== r) {
          if (c) {
            var N = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw N.name = "Invariant Violation", N;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = Z + ":" + G;
            !M[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            te < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + re + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[pe] = !0, te++);
          }
        }
        return q[G] == null ? J ? q[G] === null ? new h("The " + X + " `" + re + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new h("The " + X + " `" + re + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : O(q, G, Z, X, re);
      }
      var D = K.bind(null, !1);
      return D.isRequired = K.bind(null, !0), D;
    }
    function _(O) {
      function M(te, K, D, J, q, G) {
        var Z = te[K], X = B(Z);
        if (X !== O) {
          var re = z(Z);
          return new h(
            "Invalid " + J + " `" + q + "` of type " + ("`" + re + "` supplied to `" + D + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return v(M);
    }
    function k() {
      return v(s);
    }
    function S(O) {
      function M(te, K, D, J, q) {
        if (typeof O != "function")
          return new h("Property `" + q + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var G = te[K];
        if (!Array.isArray(G)) {
          var Z = B(G);
          return new h("Invalid " + J + " `" + q + "` of type " + ("`" + Z + "` supplied to `" + D + "`, expected an array."));
        }
        for (var X = 0; X < G.length; X++) {
          var re = O(G, X, D, J, q + "[" + X + "]", r);
          if (re instanceof Error)
            return re;
        }
        return null;
      }
      return v(M);
    }
    function w() {
      function O(M, te, K, D, J) {
        var q = M[te];
        if (!l(q)) {
          var G = B(q);
          return new h("Invalid " + D + " `" + J + "` of type " + ("`" + G + "` supplied to `" + K + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(O);
    }
    function g() {
      function O(M, te, K, D, J) {
        var q = M[te];
        if (!e.isValidElementType(q)) {
          var G = B(q);
          return new h("Invalid " + D + " `" + J + "` of type " + ("`" + G + "` supplied to `" + K + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(O);
    }
    function I(O) {
      function M(te, K, D, J, q) {
        if (!(te[K] instanceof O)) {
          var G = O.name || p, Z = me(te[K]);
          return new h("Invalid " + J + " `" + q + "` of type " + ("`" + Z + "` supplied to `" + D + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return v(M);
    }
    function C(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function M(te, K, D, J, q) {
        for (var G = te[K], Z = 0; Z < O.length; Z++)
          if (y(G, O[Z]))
            return null;
        var X = JSON.stringify(O, function(Oe, N) {
          var pe = z(N);
          return pe === "symbol" ? String(N) : N;
        });
        return new h("Invalid " + J + " `" + q + "` of value `" + String(G) + "` " + ("supplied to `" + D + "`, expected one of " + X + "."));
      }
      return v(M);
    }
    function oe(O) {
      function M(te, K, D, J, q) {
        if (typeof O != "function")
          return new h("Property `" + q + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var G = te[K], Z = B(G);
        if (Z !== "object")
          return new h("Invalid " + J + " `" + q + "` of type " + ("`" + Z + "` supplied to `" + D + "`, expected an object."));
        for (var X in G)
          if (n(G, X)) {
            var re = O(G, X, D, J, q + "." + X, r);
            if (re instanceof Error)
              return re;
          }
        return null;
      }
      return v(M);
    }
    function ie(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var M = 0; M < O.length; M++) {
        var te = O[M];
        if (typeof te != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + A(te) + " at index " + M + "."
          ), s;
      }
      function K(D, J, q, G, Z) {
        for (var X = [], re = 0; re < O.length; re++) {
          var Oe = O[re], N = Oe(D, J, q, G, Z, r);
          if (N == null)
            return null;
          N.data && n(N.data, "expectedType") && X.push(N.data.expectedType);
        }
        var pe = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new h("Invalid " + G + " `" + Z + "` supplied to " + ("`" + q + "`" + pe + "."));
      }
      return v(K);
    }
    function W() {
      function O(M, te, K, D, J) {
        return L(M[te]) ? null : new h("Invalid " + D + " `" + J + "` supplied to " + ("`" + K + "`, expected a ReactNode."));
      }
      return v(O);
    }
    function F(O, M, te, K, D) {
      return new h(
        (O || "React class") + ": " + M + " type `" + te + "." + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function ee(O) {
      function M(te, K, D, J, q) {
        var G = te[K], Z = B(G);
        if (Z !== "object")
          return new h("Invalid " + J + " `" + q + "` of type `" + Z + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var X in O) {
          var re = O[X];
          if (typeof re != "function")
            return F(D, J, q, X, z(re));
          var Oe = re(G, X, D, J, q + "." + X, r);
          if (Oe)
            return Oe;
        }
        return null;
      }
      return v(M);
    }
    function Y(O) {
      function M(te, K, D, J, q) {
        var G = te[K], Z = B(G);
        if (Z !== "object")
          return new h("Invalid " + J + " `" + q + "` of type `" + Z + "` " + ("supplied to `" + D + "`, expected `object`."));
        var X = t({}, te[K], O);
        for (var re in X) {
          var Oe = O[re];
          if (n(O, re) && typeof Oe != "function")
            return F(D, J, q, re, z(Oe));
          if (!Oe)
            return new h(
              "Invalid " + J + " `" + q + "` key `" + re + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(te[K], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var N = Oe(G, re, D, J, q + "." + re, r);
          if (N)
            return N;
        }
        return null;
      }
      return v(M);
    }
    function L(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(L);
          if (O === null || l(O))
            return !0;
          var M = m(O);
          if (M) {
            var te = M.call(O), K;
            if (M !== O.entries) {
              for (; !(K = te.next()).done; )
                if (!L(K.value))
                  return !1;
            } else
              for (; !(K = te.next()).done; ) {
                var D = K.value;
                if (D && !L(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function H(O, M) {
      return O === "symbol" ? !0 : M ? M["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && M instanceof Symbol : !1;
    }
    function B(O) {
      var M = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : H(M, O) ? "symbol" : M;
    }
    function z(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var M = B(O);
      if (M === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return M;
    }
    function A(O) {
      var M = z(O);
      switch (M) {
        case "array":
        case "object":
          return "an " + M;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + M;
        default:
          return M;
      }
    }
    function me(O) {
      return !O.constructor || !O.constructor.name ? p : O.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, Dn;
}
var Ln, di;
function ec() {
  if (di)
    return Ln;
  di = 1;
  var e = yo();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ln = function() {
    function n(s, l, c, u, f, m) {
      if (m !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
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
  }, Ln;
}
if (process.env.NODE_ENV !== "production") {
  var tc = po(), rc = !0;
  Gn.exports = Ql()(tc.isElement, rc);
} else
  Gn.exports = ec()();
var nc = Gn.exports;
const a = /* @__PURE__ */ Rs(nc);
let Xn;
typeof document == "object" && (Xn = sa({
  key: "css",
  prepend: !0
}));
function ya(e) {
  const {
    injectFirst: t,
    children: r
  } = e;
  return t && Xn ? /* @__PURE__ */ V.jsx(Dl, {
    value: Xn,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (ya.propTypes = {
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
function oc(e) {
  return e == null || Object.keys(e).length === 0;
}
function ba(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(oc(o) ? r : o) : t;
  return /* @__PURE__ */ V.jsx(ha, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (ba.propTypes = {
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
function ic(e, t) {
  const r = Kn(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const ac = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: ba,
  StyledEngineProvider: ya,
  ThemeContext: Dt,
  css: va,
  default: ic,
  internal_processStyles: ac,
  keyframes: un
}, Symbol.toStringTag, { value: "Module" }));
function wt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ea(e) {
  if (!wt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Ea(e[r]);
  }), t;
}
function yt(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? x({}, e) : e;
  return wt(e) && wt(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (wt(t[o]) && o in e && wt(e[o]) ? n[o] = yt(e[o], t[o], r) : r.clone ? n[o] = wt(t[o]) ? Ea(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
const lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yt,
  isPlainObject: wt
}, Symbol.toStringTag, { value: "Module" })), cc = ["values", "unit", "step"], uc = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => x({}, r, {
    [n.key]: n.val
  }), {});
};
function xa(e) {
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
  } = e, o = Re(e, cc), i = uc(t), s = Object.keys(i);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - n / 100}${r})`;
  }
  function u(p, E) {
    const y = s.indexOf(E);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : E) - n / 100}${r})`;
  }
  function f(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : l(p);
  }
  function m(p) {
    const E = s.indexOf(p);
    return E === 0 ? l(s[1]) : E === s.length - 1 ? c(s[E]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return x({
    keys: s,
    values: i,
    up: l,
    down: c,
    between: u,
    only: f,
    not: m,
    unit: r
  }, o);
}
const fc = {
  borderRadius: 4
}, dc = fc, pc = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.string, a.object, a.array]) : {}, Pt = pc;
function mr(e, t) {
  return t ? yt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const bo = {
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
}, pi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${bo[e]}px)`
};
function Tt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || pi;
    return t.reduce((s, l, c) => (s[i.up(i.keys[c])] = r(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || pi;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(i.values || bo).indexOf(l) !== -1) {
        const c = i.up(l);
        s[c] = r(t[l], l);
      } else {
        const c = l;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return r(t);
}
function mc(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function hc(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Se(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : br(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Se
}, Symbol.toStringTag, { value: "Module" }));
function fn(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Gr(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = fn(e, r) || n, t && (o = t(o, n, e)), o;
}
function Ae(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, u = fn(c, n) || {};
    return Tt(s, l, (m) => {
      let p = Gr(u, o, m);
      return m === p && typeof m == "string" && (p = Gr(u, o, `${t}${m === "default" ? "" : Se(m)}`, m)), r === !1 ? p : {
        [r]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Pt
  } : {}, i.filterProps = [t], i;
}
function gc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const yc = {
  m: "margin",
  p: "padding"
}, bc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, mi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ec = gc((e) => {
  if (e.length > 2)
    if (mi[e])
      e = mi[e];
    else
      return [e];
  const [t, r] = e.split(""), n = yc[t], o = bc[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), dn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], pn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], xc = [...dn, ...pn];
function _r(e, t, r, n) {
  var o;
  const i = (o = fn(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ta(e) {
  return _r(e, "spacing", 8, "spacing");
}
function Rr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Tc(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Rr(t, r), n), {});
}
function Sc(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = Ec(r), i = Tc(o, n), s = e[r];
  return Tt(e, s, i);
}
function Sa(e, t) {
  const r = Ta(e.theme);
  return Object.keys(e).map((n) => Sc(e, t, n, r)).reduce(mr, {});
}
function $e(e) {
  return Sa(e, dn);
}
$e.propTypes = process.env.NODE_ENV !== "production" ? dn.reduce((e, t) => (e[t] = Pt, e), {}) : {};
$e.filterProps = dn;
function Ne(e) {
  return Sa(e, pn);
}
Ne.propTypes = process.env.NODE_ENV !== "production" ? pn.reduce((e, t) => (e[t] = Pt, e), {}) : {};
Ne.filterProps = pn;
process.env.NODE_ENV !== "production" && xc.reduce((e, t) => (e[t] = Pt, e), {});
function Oc(e = 8) {
  if (e.mui)
    return e;
  const t = Ta({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function mn(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? mr(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function tt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ot(e, t) {
  return Ae({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const _c = ot("border", tt), Rc = ot("borderTop", tt), wc = ot("borderRight", tt), Cc = ot("borderBottom", tt), Pc = ot("borderLeft", tt), kc = ot("borderColor"), $c = ot("borderTopColor"), Nc = ot("borderRightColor"), jc = ot("borderBottomColor"), Ac = ot("borderLeftColor"), Mc = ot("outline", tt), Ic = ot("outlineColor"), hn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = _r(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Rr(t, n)
    });
    return Tt(e, e.borderRadius, r);
  }
  return null;
};
hn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Pt
} : {};
hn.filterProps = ["borderRadius"];
mn(_c, Rc, wc, Cc, Pc, kc, $c, Nc, jc, Ac, hn, Mc, Ic);
const vn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = _r(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Rr(t, n)
    });
    return Tt(e, e.gap, r);
  }
  return null;
};
vn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Pt
} : {};
vn.filterProps = ["gap"];
const gn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = _r(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Rr(t, n)
    });
    return Tt(e, e.columnGap, r);
  }
  return null;
};
gn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Pt
} : {};
gn.filterProps = ["columnGap"];
const yn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = _r(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Rr(t, n)
    });
    return Tt(e, e.rowGap, r);
  }
  return null;
};
yn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Pt
} : {};
yn.filterProps = ["rowGap"];
const Dc = Ae({
  prop: "gridColumn"
}), Lc = Ae({
  prop: "gridRow"
}), Vc = Ae({
  prop: "gridAutoFlow"
}), Fc = Ae({
  prop: "gridAutoColumns"
}), zc = Ae({
  prop: "gridAutoRows"
}), Bc = Ae({
  prop: "gridTemplateColumns"
}), Uc = Ae({
  prop: "gridTemplateRows"
}), Wc = Ae({
  prop: "gridTemplateAreas"
}), Yc = Ae({
  prop: "gridArea"
});
mn(vn, gn, yn, Dc, Lc, Vc, Fc, zc, Bc, Uc, Wc, Yc);
function Jt(e, t) {
  return t === "grey" ? t : e;
}
const qc = Ae({
  prop: "color",
  themeKey: "palette",
  transform: Jt
}), Hc = Ae({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Jt
}), Kc = Ae({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Jt
});
mn(qc, Hc, Kc);
function qe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Gc = Ae({
  prop: "width",
  transform: qe
}), Eo = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || bo[r];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: qe(r)
      };
    };
    return Tt(e, e.maxWidth, t);
  }
  return null;
};
Eo.filterProps = ["maxWidth"];
const Xc = Ae({
  prop: "minWidth",
  transform: qe
}), Jc = Ae({
  prop: "height",
  transform: qe
}), Zc = Ae({
  prop: "maxHeight",
  transform: qe
}), Qc = Ae({
  prop: "minHeight",
  transform: qe
});
Ae({
  prop: "size",
  cssProperty: "width",
  transform: qe
});
Ae({
  prop: "size",
  cssProperty: "height",
  transform: qe
});
const eu = Ae({
  prop: "boxSizing"
});
mn(Gc, Eo, Xc, Jc, Zc, Qc, eu);
const tu = {
  // borders
  border: {
    themeKey: "borders",
    transform: tt
  },
  borderTop: {
    themeKey: "borders",
    transform: tt
  },
  borderRight: {
    themeKey: "borders",
    transform: tt
  },
  borderBottom: {
    themeKey: "borders",
    transform: tt
  },
  borderLeft: {
    themeKey: "borders",
    transform: tt
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
    transform: tt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: hn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Jt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Jt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Jt
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
    style: vn
  },
  rowGap: {
    style: yn
  },
  columnGap: {
    style: gn
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
    transform: qe
  },
  maxWidth: {
    style: Eo
  },
  minWidth: {
    transform: qe
  },
  height: {
    transform: qe
  },
  maxHeight: {
    transform: qe
  },
  minHeight: {
    transform: qe
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
}, wr = tu;
function ru(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function nu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Oa() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, l = i[r];
    if (!l)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: u,
      transform: f,
      style: m
    } = l;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const p = fn(o, u) || {};
    return m ? m(s) : Tt(s, n, (y) => {
      let h = Gr(p, f, y);
      return y === h && typeof y == "string" && (h = Gr(p, f, `${r}${y === "default" ? "" : Se(y)}`, y)), c === !1 ? h : {
        [c]: h
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
    const s = (n = i.unstable_sxConfig) != null ? n : wr;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const f = mc(i.breakpoints), m = Object.keys(f);
      let p = f;
      return Object.keys(u).forEach((E) => {
        const y = nu(u[E], i);
        if (y != null)
          if (typeof y == "object")
            if (s[E])
              p = mr(p, e(E, y, i, s));
            else {
              const h = Tt({
                theme: i
              }, y, (v) => ({
                [E]: v
              }));
              ru(h, y) ? p[E] = t({
                sx: y,
                theme: i
              }) : p = mr(p, h);
            }
          else
            p = mr(p, e(E, y, i, s));
      }), hc(m, p);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const _a = Oa();
_a.filterProps = ["sx"];
const xo = _a;
function Ra(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const ou = ["breakpoints", "palette", "spacing", "shape"];
function To(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = Re(e, ou), l = xa(r), c = Oc(o);
  let u = yt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: x({
      mode: "light"
    }, n),
    spacing: c,
    shape: x({}, dc, i)
  }, s);
  return u.applyStyles = Ra, u = t.reduce((f, m) => yt(f, m), u), u.unstable_sxConfig = x({}, wr, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(m) {
    return xo({
      sx: m,
      theme: this
    });
  }, u;
}
const iu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: To,
  private_createBreakpoints: xa,
  unstable_applyStyles: Ra
}, Symbol.toStringTag, { value: "Module" }));
function au(e) {
  return Object.keys(e).length === 0;
}
function su(e = null) {
  const t = b.useContext(Dt);
  return !t || au(t) ? e : t;
}
const lu = To();
function wa(e = lu) {
  return su(e);
}
const cu = ["sx"], uu = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : wr;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function Ca(e) {
  const {
    sx: t
  } = e, r = Re(e, cu), {
    systemProps: n,
    otherProps: o
  } = uu(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...s) => {
    const l = t(...s);
    return wt(l) ? x({}, n, l) : n;
  } : i = x({}, n, t), x({}, o, {
    sx: i
  });
}
const fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xo,
  extendSxProp: Ca,
  unstable_createStyleFunctionSx: Oa,
  unstable_defaultSxConfig: wr
}, Symbol.toStringTag, { value: "Module" })), hi = (e) => e, du = () => {
  let e = hi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = hi;
    }
  };
}, pu = du(), Pa = pu;
function ka(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = ka(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function ye() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = ka(e)) && (n && (n += " "), n += t);
  return n;
}
const mu = {
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
function Ge(e, t, r = "Mui") {
  const n = mu[t];
  return n ? `${r}-${n}` : `${Pa.generate(e)}-${t}`;
}
function it(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Ge(e, o, r);
  }), n;
}
var Jn = { exports: {} }, xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gi;
function hu() {
  if (gi)
    return xe;
  gi = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function h(v) {
    if (typeof v == "object" && v !== null) {
      var _ = v.$$typeof;
      switch (_) {
        case e:
          switch (v = v.type, v) {
            case r:
            case o:
            case n:
            case u:
            case f:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case s:
                case c:
                case p:
                case m:
                case i:
                  return v;
                default:
                  return _;
              }
          }
        case t:
          return _;
      }
    }
  }
  return xe.ContextConsumer = s, xe.ContextProvider = i, xe.Element = e, xe.ForwardRef = c, xe.Fragment = r, xe.Lazy = p, xe.Memo = m, xe.Portal = t, xe.Profiler = o, xe.StrictMode = n, xe.Suspense = u, xe.SuspenseList = f, xe.isAsyncMode = function() {
    return !1;
  }, xe.isConcurrentMode = function() {
    return !1;
  }, xe.isContextConsumer = function(v) {
    return h(v) === s;
  }, xe.isContextProvider = function(v) {
    return h(v) === i;
  }, xe.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, xe.isForwardRef = function(v) {
    return h(v) === c;
  }, xe.isFragment = function(v) {
    return h(v) === r;
  }, xe.isLazy = function(v) {
    return h(v) === p;
  }, xe.isMemo = function(v) {
    return h(v) === m;
  }, xe.isPortal = function(v) {
    return h(v) === t;
  }, xe.isProfiler = function(v) {
    return h(v) === o;
  }, xe.isStrictMode = function(v) {
    return h(v) === n;
  }, xe.isSuspense = function(v) {
    return h(v) === u;
  }, xe.isSuspenseList = function(v) {
    return h(v) === f;
  }, xe.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === o || v === n || v === u || v === f || v === E || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === m || v.$$typeof === i || v.$$typeof === s || v.$$typeof === c || v.$$typeof === y || v.getModuleId !== void 0);
  }, xe.typeOf = h, xe;
}
var Te = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi;
function vu() {
  return yi || (yi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), y = !1, h = !1, v = !1, _ = !1, k = !1, S;
    S = Symbol.for("react.module.reference");
    function w(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === r || P === o || k || P === n || P === u || P === f || _ || P === E || y || h || v || typeof P == "object" && P !== null && (P.$$typeof === p || P.$$typeof === m || P.$$typeof === i || P.$$typeof === s || P.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === S || P.getModuleId !== void 0));
    }
    function g(P) {
      if (typeof P == "object" && P !== null) {
        var fe = P.$$typeof;
        switch (fe) {
          case e:
            var Ce = P.type;
            switch (Ce) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return Ce;
              default:
                var Ve = Ce && Ce.$$typeof;
                switch (Ve) {
                  case l:
                  case s:
                  case c:
                  case p:
                  case m:
                  case i:
                    return Ve;
                  default:
                    return fe;
                }
            }
          case t:
            return fe;
        }
      }
    }
    var I = s, C = i, oe = e, ie = c, W = r, F = p, ee = m, Y = t, L = o, H = n, B = u, z = f, A = !1, me = !1;
    function O(P) {
      return A || (A = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function M(P) {
      return me || (me = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(P) {
      return g(P) === s;
    }
    function K(P) {
      return g(P) === i;
    }
    function D(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function J(P) {
      return g(P) === c;
    }
    function q(P) {
      return g(P) === r;
    }
    function G(P) {
      return g(P) === p;
    }
    function Z(P) {
      return g(P) === m;
    }
    function X(P) {
      return g(P) === t;
    }
    function re(P) {
      return g(P) === o;
    }
    function Oe(P) {
      return g(P) === n;
    }
    function N(P) {
      return g(P) === u;
    }
    function pe(P) {
      return g(P) === f;
    }
    Te.ContextConsumer = I, Te.ContextProvider = C, Te.Element = oe, Te.ForwardRef = ie, Te.Fragment = W, Te.Lazy = F, Te.Memo = ee, Te.Portal = Y, Te.Profiler = L, Te.StrictMode = H, Te.Suspense = B, Te.SuspenseList = z, Te.isAsyncMode = O, Te.isConcurrentMode = M, Te.isContextConsumer = te, Te.isContextProvider = K, Te.isElement = D, Te.isForwardRef = J, Te.isFragment = q, Te.isLazy = G, Te.isMemo = Z, Te.isPortal = X, Te.isProfiler = re, Te.isStrictMode = Oe, Te.isSuspense = N, Te.isSuspenseList = pe, Te.isValidElementType = w, Te.typeOf = g;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Jn.exports = hu() : Jn.exports = vu();
var bi = Jn.exports;
const gu = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function $a(e) {
  const t = `${e}`.match(gu);
  return t && t[1] || "";
}
function Na(e, t = "") {
  return e.displayName || e.name || $a(e) || t;
}
function Ei(e, t, r) {
  const n = Na(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function yu(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Na(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case bi.ForwardRef:
          return Ei(e, e.render, "ForwardRef");
        case bi.Memo:
          return Ei(e, e.type, "memo");
        default:
          return;
      }
  }
}
const bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yu,
  getFunctionName: $a
}, Symbol.toStringTag, { value: "Module" }));
function ja(e, t) {
  const r = x({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = x({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = x({}, i), Object.keys(o).forEach((s) => {
        r[n][s] = ja(o[s], i[s]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function Eu(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : ja(t.components[r].defaultProps, n);
}
function xu({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = wa(r);
  return n && (o = o[n] || o), Eu({
    theme: o,
    name: t,
    props: e
  });
}
const Tu = typeof window < "u" ? b.useLayoutEffect : b.useEffect, Sr = Tu;
function Kt(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const Su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kt
}, Symbol.toStringTag, { value: "Module" }));
function Ct(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Ou(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Aa(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = i.type;
  return typeof c == "function" && !Ou(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ma = Ct(a.element, Aa);
Ma.isRequired = Ct(a.element.isRequired, Aa);
const bn = Ma;
function _u(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ru(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !_u(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const wu = Ct(a.elementType, Ru), Cu = "exact-prop: ​";
function Ia(e) {
  return process.env.NODE_ENV === "production" ? e : x({}, e, {
    [Cu]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function So(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const Pu = a.oneOfType([a.func, a.object]), ku = Pu;
function Zn(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function Da(e, t = 166) {
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
function $u(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, o, i, s) => {
    const l = o || "<<anonymous>>", c = s || n;
    return typeof r[n] < "u" ? new Error(`The ${i} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function Nu(e, t) {
  var r, n;
  return /* @__PURE__ */ b.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (r = e.type.muiName) != null ? r : (n = e.type) == null || (n = n._payload) == null || (n = n.value) == null ? void 0 : n.muiName
  ) !== -1;
}
function Ke(e) {
  return e && e.ownerDocument || document;
}
function tr(e) {
  return Ke(e).defaultView || window;
}
function ju(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? x({}, t.propTypes) : null;
  return (o) => (i, s, l, c, u, ...f) => {
    const m = u || s, p = r == null ? void 0 : r[m];
    if (p) {
      const E = p(i, s, l, c, u, ...f);
      if (E)
        return E;
    }
    return typeof i[s] < "u" && !i[o] ? new Error(`The prop \`${m}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function Xr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let xi = 0;
function Au(e) {
  const [t, r] = b.useState(e), n = e || t;
  return b.useEffect(() => {
    t == null && (xi += 1, r(`mui-${xi}`));
  }, [t]), n;
}
const Ti = b["useId".toString()];
function Mu(e) {
  if (Ti !== void 0) {
    const t = Ti();
    return e ?? t;
  }
  return Au(e);
}
function Iu(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function La({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = b.useRef(e !== void 0), [i, s] = b.useState(t), l = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    b.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: u
    } = b.useRef(t);
    b.useEffect(() => {
      !o && u !== t && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = b.useCallback((u) => {
    o || s(u);
  }, []);
  return [l, c];
}
function vt(e) {
  const t = b.useRef(e);
  return Sr(() => {
    t.current = e;
  }), b.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function ut(...e) {
  return b.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Xr(r, t);
    });
  }, e);
}
const Si = {};
function Du(e, t) {
  const r = b.useRef(Si);
  return r.current === Si && (r.current = e(t)), r;
}
const Lu = [];
function Vu(e) {
  b.useEffect(e, Lu);
}
class En {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new En();
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
function Fu() {
  const e = Du(En.create).current;
  return Vu(e.disposeEffect), e;
}
let xn = !0, Qn = !1;
const zu = new En(), Bu = {
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
function Uu(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && Bu[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Wu(e) {
  e.metaKey || e.altKey || e.ctrlKey || (xn = !0);
}
function Vn() {
  xn = !1;
}
function Yu() {
  this.visibilityState === "hidden" && Qn && (xn = !0);
}
function qu(e) {
  e.addEventListener("keydown", Wu, !0), e.addEventListener("mousedown", Vn, !0), e.addEventListener("pointerdown", Vn, !0), e.addEventListener("touchstart", Vn, !0), e.addEventListener("visibilitychange", Yu, !0);
}
function Hu(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return xn || Uu(t);
}
function Oo() {
  const e = b.useCallback((o) => {
    o != null && qu(o.ownerDocument);
  }, []), t = b.useRef(!1);
  function r() {
    return t.current ? (Qn = !0, zu.start(100, () => {
      Qn = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return Hu(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function Ku(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const Gu = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
}, Xu = Gu;
function Ju(e) {
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
function Zu(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Qu = Number.isInteger || Zu;
function Va(e, t, r, n) {
  const o = e[t];
  if (o == null || !Qu(o)) {
    const i = Ju(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${i}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Fa(e, t, ...r) {
  return e[t] === void 0 ? null : Va(e, t, ...r);
}
function eo() {
  return null;
}
Fa.isRequired = Va;
eo.isRequired = eo;
const za = process.env.NODE_ENV === "production" ? eo : Fa;
function ft(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const l = t(s);
          l !== "" && i.push(l), r && r[s] && i.push(r[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const ef = /* @__PURE__ */ b.createContext();
process.env.NODE_ENV !== "production" && (a.node, a.bool);
const Ba = () => {
  const e = b.useContext(ef);
  return e ?? !1;
};
function tf(e, t) {
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
var Me = {}, Ua = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Ua);
var Tn = Ua.exports;
const rf = /* @__PURE__ */ St(Ls), nf = /* @__PURE__ */ St(Su);
var Wa = Tn;
Object.defineProperty(Me, "__esModule", {
  value: !0
});
var It = Me.alpha = Ka;
Me.blend = mf;
Me.colorChannel = void 0;
var to = Me.darken = Ro;
Me.decomposeColor = nt;
Me.emphasize = pf;
var Oi = Me.getContrastRatio = cf;
Me.getLuminance = Jr;
Me.hexToRgb = Ya;
Me.hslToRgb = Ha;
var ro = Me.lighten = wo;
Me.private_safeAlpha = uf;
Me.private_safeColorChannel = void 0;
Me.private_safeDarken = ff;
Me.private_safeEmphasize = Ga;
Me.private_safeLighten = df;
Me.recomposeColor = rr;
Me.rgbToHex = lf;
var _i = Wa(rf), of = Wa(nf);
function _o(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, of.default)(e, t, r);
}
function Ya(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function af(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function nt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return nt(Ya(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, _i.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, _i.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const qa = (e) => {
  const t = nt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
Me.colorChannel = qa;
const sf = (e, t) => {
  try {
    return qa(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
Me.private_safeColorChannel = sf;
function rr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function lf(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = nt(e);
  return `#${t.map((r, n) => af(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function Ha(e) {
  e = nt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (u, f = (u + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), rr({
    type: l,
    values: c
  });
}
function Jr(e) {
  e = nt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? nt(Ha(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function cf(e, t) {
  const r = Jr(e), n = Jr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ka(e, t) {
  return e = nt(e), t = _o(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, rr(e);
}
function uf(e, t, r) {
  try {
    return Ka(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ro(e, t) {
  if (e = nt(e), t = _o(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return rr(e);
}
function ff(e, t, r) {
  try {
    return Ro(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function wo(e, t) {
  if (e = nt(e), t = _o(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return rr(e);
}
function df(e, t, r) {
  try {
    return wo(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function pf(e, t = 0.15) {
  return Jr(e) > 0.5 ? Ro(e, t) : wo(e, t);
}
function Ga(e, t, r) {
  try {
    return Ga(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function mf(e, t, r, n = 1) {
  const o = (c, u) => Math.round((c ** (1 / n) * (1 - r) + u ** (1 / n) * r) ** n), i = nt(e), s = nt(t), l = [o(i.values[0], s.values[0]), o(i.values[1], s.values[1]), o(i.values[2], s.values[2])];
  return rr({
    type: "rgb",
    values: l
  });
}
const hf = ["mode", "contrastThreshold", "tonalOffset"], Ri = {
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
    paper: yr.white,
    default: yr.white
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
}, Fn = {
  text: {
    primary: yr.white,
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
    active: yr.white,
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
function wi(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = ro(e.main, o) : t === "dark" && (e.dark = to(e.main, i)));
}
function vf(e = "light") {
  return e === "dark" ? {
    main: Wt[200],
    light: Wt[50],
    dark: Wt[400]
  } : {
    main: Wt[700],
    light: Wt[400],
    dark: Wt[800]
  };
}
function gf(e = "light") {
  return e === "dark" ? {
    main: Ut[200],
    light: Ut[50],
    dark: Ut[400]
  } : {
    main: Ut[500],
    light: Ut[300],
    dark: Ut[700]
  };
}
function yf(e = "light") {
  return e === "dark" ? {
    main: Bt[500],
    light: Bt[300],
    dark: Bt[700]
  } : {
    main: Bt[700],
    light: Bt[400],
    dark: Bt[800]
  };
}
function bf(e = "light") {
  return e === "dark" ? {
    main: Yt[400],
    light: Yt[300],
    dark: Yt[700]
  } : {
    main: Yt[700],
    light: Yt[500],
    dark: Yt[900]
  };
}
function Ef(e = "light") {
  return e === "dark" ? {
    main: qt[400],
    light: qt[300],
    dark: qt[700]
  } : {
    main: qt[800],
    light: qt[500],
    dark: qt[900]
  };
}
function xf(e = "light") {
  return e === "dark" ? {
    main: fr[400],
    light: fr[300],
    dark: fr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: fr[500],
    dark: fr[900]
  };
}
function Tf(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = Re(e, hf), i = e.primary || vf(t), s = e.secondary || gf(t), l = e.error || yf(t), c = e.info || bf(t), u = e.success || Ef(t), f = e.warning || xf(t);
  function m(h) {
    const v = Oi(h, Fn.text.primary) >= r ? Fn.text.primary : Ri.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const _ = Oi(h, v);
      _ < 3 && console.error([`MUI: The contrast ratio of ${_}:1 for ${v} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const p = ({
    color: h,
    name: v,
    mainShade: _ = 500,
    lightShade: k = 300,
    darkShade: S = 700
  }) => {
    if (h = x({}, h), !h.main && h[_] && (h.main = h[_]), !h.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${_}\` property.` : br(11, v ? ` (${v})` : "", _));
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
} });` : br(12, v ? ` (${v})` : "", JSON.stringify(h.main)));
    return wi(h, "light", k, n), wi(h, "dark", S, n), h.contrastText || (h.contrastText = m(h.main)), h;
  }, E = {
    dark: Fn,
    light: Ri
  };
  return process.env.NODE_ENV !== "production" && (E[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), yt(x({
    // A collection of common colors.
    common: x({}, yr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Ds,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, E[t]), o);
}
const Sf = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Of(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ci = {
  textTransform: "uppercase"
}, Pi = '"Roboto", "Helvetica", "Arial", sans-serif';
function _f(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Pi,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: m
  } = r, p = Re(r, Sf);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const E = o / 14, y = m || ((_) => `${_ / u * E}rem`), h = (_, k, S, w, g) => x({
    fontFamily: n,
    fontWeight: _,
    fontSize: y(k),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S
  }, n === Pi ? {
    letterSpacing: `${Of(w / k)}em`
  } : {}, g, f), v = {
    h1: h(i, 96, 1.167, -1.5),
    h2: h(i, 60, 1.2, -0.5),
    h3: h(s, 48, 1.167, 0),
    h4: h(s, 34, 1.235, 0.25),
    h5: h(s, 24, 1.334, 0),
    h6: h(l, 20, 1.6, 0.15),
    subtitle1: h(s, 16, 1.75, 0.15),
    subtitle2: h(l, 14, 1.57, 0.1),
    body1: h(s, 16, 1.5, 0.15),
    body2: h(s, 14, 1.43, 0.15),
    button: h(l, 14, 1.75, 0.4, Ci),
    caption: h(s, 12, 1.66, 0.4),
    overline: h(s, 12, 2.66, 1, Ci),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return yt(x({
    htmlFontSize: u,
    pxToRem: y,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: c
  }, v), p, {
    clone: !1
    // No need to clone deep
  });
}
const Rf = 0.2, wf = 0.14, Cf = 0.12;
function we(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Rf})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${wf})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Cf})`].join(",");
}
const Pf = ["none", we(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), we(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), we(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), we(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), we(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), we(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), we(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), we(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), we(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), we(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), we(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), we(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), we(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), we(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), we(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), we(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), we(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), we(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), we(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), we(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), we(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), we(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), we(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), we(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], kf = Pf, $f = ["duration", "easing", "delay"], Nf = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, jf = {
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
function ki(e) {
  return `${Math.round(e)}ms`;
}
function Af(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Mf(e) {
  const t = x({}, Nf, e.easing), r = x({}, jf, e.duration);
  return x({
    getAutoHeightDuration: Af,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = i, u = Re(i, $f);
      if (process.env.NODE_ENV !== "production") {
        const f = (p) => typeof p == "string", m = (p) => !isNaN(parseFloat(p));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(l) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : ki(s)} ${l} ${typeof c == "string" ? c : ki(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const If = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Df = If, Lf = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Vf(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = Re(e, Lf);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : br(18));
  const l = Tf(n), c = To(e);
  let u = yt(c, {
    mixins: tf(c.breakpoints, r),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: kf.slice(),
    typography: _f(l, i),
    transitions: Mf(o),
    zIndex: x({}, Df)
  });
  if (u = yt(u, s), u = t.reduce((f, m) => yt(f, m), u), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (p, E) => {
      let y;
      for (y in p) {
        const h = p[y];
        if (f.indexOf(y) !== -1 && Object.keys(h).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Ge("", y);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: h
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[y] = {};
        }
      }
    };
    Object.keys(u.components).forEach((p) => {
      const E = u.components[p].styleOverrides;
      E && p.indexOf("Mui") === 0 && m(E, p);
    });
  }
  return u.unstable_sxConfig = x({}, wr, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(m) {
    return xo({
      sx: m,
      theme: this
    });
  }, u;
}
const Ff = Vf(), Co = Ff;
function Sn() {
  const e = wa(Co);
  return process.env.NODE_ENV !== "production" && b.useDebugValue(e), e[so] || e;
}
function at({
  props: e,
  name: t
}) {
  return xu({
    props: e,
    name: t,
    defaultTheme: Co,
    themeId: so
  });
}
var Cr = {}, zn = { exports: {} }, $i;
function zf() {
  return $i || ($i = 1, function(e) {
    function t(r, n) {
      if (r == null)
        return {};
      var o = {}, i = Object.keys(r), s, l;
      for (l = 0; l < i.length; l++)
        s = i[l], !(n.indexOf(s) >= 0) && (o[s] = r[s]);
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(zn)), zn.exports;
}
const Bf = /* @__PURE__ */ St(sc), Uf = /* @__PURE__ */ St(lc), Wf = /* @__PURE__ */ St(vc), Yf = /* @__PURE__ */ St(bu), qf = /* @__PURE__ */ St(iu), Hf = /* @__PURE__ */ St(fu);
var nr = Tn;
Object.defineProperty(Cr, "__esModule", {
  value: !0
});
var Kf = Cr.default = ld;
Cr.shouldForwardProp = Yr;
Cr.systemDefaultTheme = void 0;
var Qe = nr(ma()), no = nr(zf()), Ni = nd(Bf), Gf = Uf, Xf = nr(Wf), Jf = nr(Yf), Zf = nr(qf), Qf = nr(Hf);
const ed = ["ownerState"], td = ["variants"], rd = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Xa(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Xa = function(n) {
    return n ? r : t;
  })(e);
}
function nd(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Xa(t);
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
function od(e) {
  return Object.keys(e).length === 0;
}
function id(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Yr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ad = Cr.systemDefaultTheme = (0, Zf.default)(), ji = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ar({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return od(t) ? e : t[r] || t;
}
function sd(e) {
  return e ? (t, r) => r[e] : null;
}
function qr(e, t) {
  let {
    ownerState: r
  } = t, n = (0, no.default)(t, ed);
  const o = typeof e == "function" ? e((0, Qe.default)({
    ownerState: r
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => qr(i, (0, Qe.default)({
      ownerState: r
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let l = (0, no.default)(o, td);
    return i.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props((0, Qe.default)({
        ownerState: r
      }, n, r)) : Object.keys(c.props).forEach((f) => {
        (r == null ? void 0 : r[f]) !== c.props[f] && n[f] !== c.props[f] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style((0, Qe.default)({
        ownerState: r
      }, n, r)) : c.style));
    }), l;
  }
  return o;
}
function ld(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = ad,
    rootShouldForwardProp: n = Yr,
    slotShouldForwardProp: o = Yr
  } = e, i = (s) => (0, Qf.default)((0, Qe.default)({}, s, {
    theme: Ar((0, Qe.default)({}, s, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, l = {}) => {
    (0, Ni.internal_processStyles)(s, (g) => g.filter((I) => !(I != null && I.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: f,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = sd(ji(u))
    } = l, E = (0, no.default)(l, rd), y = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), h = m || !1;
    let v;
    process.env.NODE_ENV !== "production" && c && (v = `${c}-${ji(u || "Root")}`);
    let _ = Yr;
    u === "Root" || u === "root" ? _ = n : u ? _ = o : id(s) && (_ = void 0);
    const k = (0, Ni.default)(s, (0, Qe.default)({
      shouldForwardProp: _,
      label: v
    }, E)), S = (g) => typeof g == "function" && g.__emotion_real !== g || (0, Gf.isPlainObject)(g) ? (I) => qr(g, (0, Qe.default)({}, I, {
      theme: Ar({
        theme: I.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : g, w = (g, ...I) => {
      let C = S(g);
      const oe = I ? I.map(S) : [];
      c && p && oe.push((F) => {
        const ee = Ar((0, Qe.default)({}, F, {
          defaultTheme: r,
          themeId: t
        }));
        if (!ee.components || !ee.components[c] || !ee.components[c].styleOverrides)
          return null;
        const Y = ee.components[c].styleOverrides, L = {};
        return Object.entries(Y).forEach(([H, B]) => {
          L[H] = qr(B, (0, Qe.default)({}, F, {
            theme: ee
          }));
        }), p(F, L);
      }), c && !y && oe.push((F) => {
        var ee;
        const Y = Ar((0, Qe.default)({}, F, {
          defaultTheme: r,
          themeId: t
        })), L = Y == null || (ee = Y.components) == null || (ee = ee[c]) == null ? void 0 : ee.variants;
        return qr({
          variants: L
        }, (0, Qe.default)({}, F, {
          theme: Y
        }));
      }), h || oe.push(i);
      const ie = oe.length - I.length;
      if (Array.isArray(g) && ie > 0) {
        const F = new Array(ie).fill("");
        C = [...g, ...F], C.raw = [...g.raw, ...F];
      }
      const W = k(C, ...oe);
      if (process.env.NODE_ENV !== "production") {
        let F;
        c && (F = `${c}${(0, Xf.default)(u || "")}`), F === void 0 && (F = `Styled(${(0, Jf.default)(s)})`), W.displayName = F;
      }
      return s.muiName && (W.muiName = s.muiName), W;
    };
    return k.withConfig && (w.withConfig = k.withConfig), w;
  };
}
function Po(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const cd = (e) => Po(e) && e !== "classes", Ja = cd, ud = Kf({
  themeId: so,
  defaultTheme: Co,
  rootShouldForwardProp: Ja
}), Pe = ud, fd = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, Ai = fd;
function dd(e) {
  return Ge("MuiSvgIcon", e);
}
it("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const pd = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], md = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Se(t)}`, `fontSize${Se(r)}`]
  };
  return ft(o, dd, n);
}, hd = Pe("svg", {
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
  var r, n, o, i, s, l, c, u, f, m, p, E, y;
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
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (f = u.pxToRem) == null ? void 0 : f.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (m = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? m : {
      action: (E = (e.vars || e).palette) == null || (E = E.action) == null ? void 0 : E.active,
      disabled: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.disabled,
      inherit: void 0
    }[t.color]
  };
}), ko = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: m,
    viewBox: p = "0 0 24 24"
  } = n, E = Re(n, pd), y = /* @__PURE__ */ b.isValidElement(o) && o.type === "svg", h = x({}, n, {
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: p,
    hasSvgAsChild: y
  }), v = {};
  f || (v.viewBox = p);
  const _ = md(h);
  return /* @__PURE__ */ V.jsxs(hd, x({
    as: l,
    className: ye(_.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: r
  }, v, E, y && o.props, {
    ownerState: h,
    children: [y ? o.props.children : o, m ? /* @__PURE__ */ V.jsx("title", {
      children: m
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ko.propTypes = {
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
ko.muiName = "SvgIcon";
const Mi = ko;
function vd(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ V.jsx(Mi, x({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Mi.muiName, /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(r));
}
const gd = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), Pa.configure(e);
  }
}, yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: Se,
  createChainedFunction: Zn,
  createSvgIcon: vd,
  debounce: Da,
  deprecatedPropType: $u,
  isMuiElement: Nu,
  ownerDocument: Ke,
  ownerWindow: tr,
  requirePropFactory: ju,
  setRef: Xr,
  unstable_ClassNameGenerator: gd,
  unstable_useEnhancedEffect: Sr,
  unstable_useId: Mu,
  unsupportedProp: Iu,
  useControlled: La,
  useEventCallback: vt,
  useForkRef: ut,
  useIsFocusVisible: Oo
}, Symbol.toStringTag, { value: "Module" }));
function bd(e) {
  return at;
}
function oo(e, t) {
  return oo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, oo(e, t);
}
function Za(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, oo(e, t);
}
const Ii = {
  disabled: !1
};
var Ed = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.shape({
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
const Zr = ct.createContext(null);
var xd = function(t) {
  return t.scrollTop;
}, pr = "unmounted", jt = "exited", At = "entering", Gt = "entered", io = "exiting", Ot = /* @__PURE__ */ function(e) {
  Za(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = o, l = s && !s.isMounting ? n.enter : n.appear, c;
    return i.appearStatus = null, n.in ? l ? (c = jt, i.appearStatus = At) : c = Gt : n.unmountOnExit || n.mountOnEnter ? c = pr : c = jt, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === pr ? {
      status: jt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== At && s !== Gt && (i = At) : (s === At || s === Gt) && (i = io);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, i, s, l;
    return i = s = l = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, l = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: l
    };
  }, r.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === At) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : $r.findDOMNode(this);
          s && xd(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === jt && this.setState({
        status: pr
      });
  }, r.performEnter = function(o) {
    var i = this, s = this.props.enter, l = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [l] : [$r.findDOMNode(this), l], u = c[0], f = c[1], m = this.getTimeouts(), p = l ? m.appear : m.enter;
    if (!o && !s || Ii.disabled) {
      this.safeSetState({
        status: Gt
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, f), this.safeSetState({
      status: At
    }, function() {
      i.props.onEntering(u, f), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: Gt
        }, function() {
          i.props.onEntered(u, f);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : $r.findDOMNode(this);
    if (!i || Ii.disabled) {
      this.safeSetState({
        status: jt
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: io
    }, function() {
      o.props.onExiting(l), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: jt
        }, function() {
          o.props.onExited(l);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, r.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, i.nextCallback = null, o(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : $r.findDOMNode(this), l = o == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = c[0], f = c[1];
      this.props.addEndListener(u, f);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === pr)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = Re(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ct.createElement(Zr.Provider, {
        value: null
      }, typeof s == "function" ? s(o, l) : ct.cloneElement(ct.Children.only(s), l))
    );
  }, t;
}(ct.Component);
Ot.contextType = Zr;
Ot.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var r = Ed;
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
function Ht() {
}
Ot.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ht,
  onEntering: Ht,
  onEntered: Ht,
  onExit: Ht,
  onExiting: Ht,
  onExited: Ht
};
Ot.UNMOUNTED = pr;
Ot.EXITED = jt;
Ot.ENTERING = At;
Ot.ENTERED = Gt;
Ot.EXITING = io;
const Qa = Ot;
function Td(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $o(e, t) {
  var r = function(i) {
    return t && Fr(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Os.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Sd(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, l = {};
  for (var c in t) {
    if (n[c])
      for (s = 0; s < n[c].length; s++) {
        var u = n[c][s];
        l[n[c][s]] = r(u);
      }
    l[c] = r(c);
  }
  for (s = 0; s < o.length; s++)
    l[o[s]] = r(o[s]);
  return l;
}
function Mt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Od(e, t) {
  return $o(e.children, function(r) {
    return zr(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Mt(r, "appear", e),
      enter: Mt(r, "enter", e),
      exit: Mt(r, "exit", e)
    });
  });
}
function _d(e, t, r) {
  var n = $o(e.children), o = Sd(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (Fr(s)) {
      var l = i in t, c = i in n, u = t[i], f = Fr(u) && !u.props.in;
      c && (!l || f) ? o[i] = zr(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: Mt(s, "exit", e),
        enter: Mt(s, "enter", e)
      }) : !c && l && !f ? o[i] = zr(s, {
        in: !1
      }) : c && l && Fr(u) && (o[i] = zr(s, {
        onExited: r.bind(null, s),
        in: u.props.in,
        exit: Mt(s, "exit", e),
        enter: Mt(s, "enter", e)
      }));
    }
  }), o;
}
var Rd = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, wd = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, No = /* @__PURE__ */ function(e) {
  Za(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(Td(i));
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
    var s = i.children, l = i.handleExited, c = i.firstRender;
    return {
      children: c ? Od(o, l) : _d(o, s, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = $o(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var c = x({}, l.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, l = Re(o, ["component", "childFactory"]), c = this.state.contextValue, u = Rd(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ ct.createElement(Zr.Provider, {
      value: c
    }, u) : /* @__PURE__ */ ct.createElement(Zr.Provider, {
      value: c
    }, /* @__PURE__ */ ct.createElement(i, l, u));
  }, t;
}(ct.Component);
No.propTypes = process.env.NODE_ENV !== "production" ? {
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
No.defaultProps = wd;
const Cd = No, es = (e) => e.scrollTop;
function Qr(e, t) {
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
function Pd(e) {
  return Ge("MuiPaper", e);
}
it("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const kd = ["className", "component", "elevation", "square", "variant"], $d = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, i = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return ft(i, Pd, o);
}, Nd = Pe("div", {
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
    backgroundImage: `linear-gradient(${It("#fff", Ai(t.elevation))}, ${It("#fff", Ai(t.elevation))})`
  }, e.vars && {
    backgroundImage: (r = e.vars.overlays) == null ? void 0 : r[t.elevation]
  }));
}), ts = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: s = 1,
    square: l = !1,
    variant: c = "elevation"
  } = n, u = Re(n, kd), f = x({}, n, {
    component: i,
    elevation: s,
    square: l,
    variant: c
  }), m = $d(f);
  return process.env.NODE_ENV !== "production" && Sn().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ V.jsx(Nd, x({
    as: i,
    ownerState: f,
    className: ye(m.root, o),
    ref: r
  }, u));
});
process.env.NODE_ENV !== "production" && (ts.propTypes = {
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
  elevation: Ct(za, (e) => {
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
const jd = ts;
function hr(e) {
  return typeof e == "string";
}
function Ad(e, t, r) {
  return e === void 0 || hr(e) ? t : x({}, t, {
    ownerState: x({}, t.ownerState, r)
  });
}
function Md(e, t, r = (n, o) => n === o) {
  return e.length === t.length && e.every((n, o) => r(n, t[o]));
}
function vr(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Id(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Di(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Dd(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const E = ye(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), y = x({}, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), h = x({}, r, o, n);
    return E.length > 0 && (h.className = E), Object.keys(y).length > 0 && (h.style = y), {
      props: h,
      internalRef: void 0
    };
  }
  const s = vr(x({}, o, n)), l = Di(n), c = Di(o), u = t(s), f = ye(u == null ? void 0 : u.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), m = x({}, u == null ? void 0 : u.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), p = x({}, u, r, c, l);
  return f.length > 0 && (p.className = f), Object.keys(m).length > 0 && (p.style = m), {
    props: p,
    internalRef: u.ref
  };
}
const Ld = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function mt(e) {
  var t;
  const {
    elementType: r,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, s = Re(e, Ld), l = i ? {} : Id(n, o), {
    props: c,
    internalRef: u
  } = Dd(x({}, s, {
    externalSlotProps: l
  })), f = ut(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Ad(r, x({}, c, {
    ref: f
  }), o);
}
function rs(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: l,
    onExited: c,
    timeout: u
  } = e, [f, m] = b.useState(!1), p = ye(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), E = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, y = ye(r.child, f && r.childLeaving, n && r.childPulsate);
  return !l && !f && m(!0), b.useEffect(() => {
    if (!l && c != null) {
      const h = setTimeout(c, u);
      return () => {
        clearTimeout(h);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ V.jsx("span", {
    className: p,
    style: E,
    children: /* @__PURE__ */ V.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (rs.propTypes = {
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
const Vd = it("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), et = Vd, Fd = ["center", "classes", "className"];
let On = (e) => e, Li, Vi, Fi, zi;
const ao = 550, zd = 80, Bd = un(Li || (Li = On`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Ud = un(Vi || (Vi = On`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Wd = un(Fi || (Fi = On`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Yd = Pe("span", {
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
}), qd = Pe(rs, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(zi || (zi = On`
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
`), et.rippleVisible, Bd, ao, ({
  theme: e
}) => e.transitions.easing.easeInOut, et.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, et.child, et.childLeaving, Ud, ao, ({
  theme: e
}) => e.transitions.easing.easeInOut, et.childPulsate, Wd, ({
  theme: e
}) => e.transitions.easing.easeInOut), ns = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = n, l = Re(n, Fd), [c, u] = b.useState([]), f = b.useRef(0), m = b.useRef(null);
  b.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [c]);
  const p = b.useRef(!1), E = Fu(), y = b.useRef(null), h = b.useRef(null), v = b.useCallback((w) => {
    const {
      pulsate: g,
      rippleX: I,
      rippleY: C,
      rippleSize: oe,
      cb: ie
    } = w;
    u((W) => [...W, /* @__PURE__ */ V.jsx(qd, {
      classes: {
        ripple: ye(i.ripple, et.ripple),
        rippleVisible: ye(i.rippleVisible, et.rippleVisible),
        ripplePulsate: ye(i.ripplePulsate, et.ripplePulsate),
        child: ye(i.child, et.child),
        childLeaving: ye(i.childLeaving, et.childLeaving),
        childPulsate: ye(i.childPulsate, et.childPulsate)
      },
      timeout: ao,
      pulsate: g,
      rippleX: I,
      rippleY: C,
      rippleSize: oe
    }, f.current)]), f.current += 1, m.current = ie;
  }, [i]), _ = b.useCallback((w = {}, g = {}, I = () => {
  }) => {
    const {
      pulsate: C = !1,
      center: oe = o || g.pulsate,
      fakeElement: ie = !1
      // For test purposes
    } = g;
    if ((w == null ? void 0 : w.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (w == null ? void 0 : w.type) === "touchstart" && (p.current = !0);
    const W = ie ? null : h.current, F = W ? W.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let ee, Y, L;
    if (oe || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      ee = Math.round(F.width / 2), Y = Math.round(F.height / 2);
    else {
      const {
        clientX: H,
        clientY: B
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      ee = Math.round(H - F.left), Y = Math.round(B - F.top);
    }
    if (oe)
      L = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const H = Math.max(Math.abs((W ? W.clientWidth : 0) - ee), ee) * 2 + 2, B = Math.max(Math.abs((W ? W.clientHeight : 0) - Y), Y) * 2 + 2;
      L = Math.sqrt(H ** 2 + B ** 2);
    }
    w != null && w.touches ? y.current === null && (y.current = () => {
      v({
        pulsate: C,
        rippleX: ee,
        rippleY: Y,
        rippleSize: L,
        cb: I
      });
    }, E.start(zd, () => {
      y.current && (y.current(), y.current = null);
    })) : v({
      pulsate: C,
      rippleX: ee,
      rippleY: Y,
      rippleSize: L,
      cb: I
    });
  }, [o, v, E]), k = b.useCallback(() => {
    _({}, {
      pulsate: !0
    });
  }, [_]), S = b.useCallback((w, g) => {
    if (E.clear(), (w == null ? void 0 : w.type) === "touchend" && y.current) {
      y.current(), y.current = null, E.start(0, () => {
        S(w, g);
      });
      return;
    }
    y.current = null, u((I) => I.length > 0 ? I.slice(1) : I), m.current = g;
  }, [E]);
  return b.useImperativeHandle(r, () => ({
    pulsate: k,
    start: _,
    stop: S
  }), [k, _, S]), /* @__PURE__ */ V.jsx(Yd, x({
    className: ye(et.root, i.root, s),
    ref: h
  }, l, {
    children: /* @__PURE__ */ V.jsx(Cd, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (ns.propTypes = {
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
const Hd = ns;
function Kd(e) {
  return Ge("MuiButtonBase", e);
}
const Gd = it("MuiButtonBase", ["root", "disabled", "focusVisible"]), Xd = Gd, Jd = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Zd = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = ft({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Kd, o);
  return r && n && (s.root += ` ${n}`), s;
}, Qd = Pe("button", {
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
  [`&.${Xd.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), os = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: m = !1,
    focusRipple: p = !1,
    LinkComponent: E = "a",
    onBlur: y,
    onClick: h,
    onContextMenu: v,
    onDragLeave: _,
    onFocus: k,
    onFocusVisible: S,
    onKeyDown: w,
    onKeyUp: g,
    onMouseDown: I,
    onMouseLeave: C,
    onMouseUp: oe,
    onTouchEnd: ie,
    onTouchMove: W,
    onTouchStart: F,
    tabIndex: ee = 0,
    TouchRippleProps: Y,
    touchRippleRef: L,
    type: H
  } = n, B = Re(n, Jd), z = b.useRef(null), A = b.useRef(null), me = ut(A, L), {
    isFocusVisibleRef: O,
    onFocus: M,
    onBlur: te,
    ref: K
  } = Oo(), [D, J] = b.useState(!1);
  u && D && J(!1), b.useImperativeHandle(o, () => ({
    focusVisible: () => {
      J(!0), z.current.focus();
    }
  }), []);
  const [q, G] = b.useState(!1);
  b.useEffect(() => {
    G(!0);
  }, []);
  const Z = q && !f && !u;
  b.useEffect(() => {
    D && p && !f && q && A.current.pulsate();
  }, [f, p, D, q]);
  function X(T, U, le = m) {
    return vt((de) => (U && U(de), !le && A.current && A.current[T](de), !0));
  }
  const re = X("start", I), Oe = X("stop", v), N = X("stop", _), pe = X("stop", oe), P = X("stop", (T) => {
    D && T.preventDefault(), C && C(T);
  }), fe = X("start", F), Ce = X("stop", ie), Ve = X("stop", W), Fe = X("stop", (T) => {
    te(T), O.current === !1 && J(!1), y && y(T);
  }, !1), dt = vt((T) => {
    z.current || (z.current = T.currentTarget), M(T), O.current === !0 && (J(!0), S && S(T)), k && k(T);
  }), ke = () => {
    const T = z.current;
    return c && c !== "button" && !(T.tagName === "A" && T.href);
  }, Xe = b.useRef(!1), bt = vt((T) => {
    p && !Xe.current && D && A.current && T.key === " " && (Xe.current = !0, A.current.stop(T, () => {
      A.current.start(T);
    })), T.target === T.currentTarget && ke() && T.key === " " && T.preventDefault(), w && w(T), T.target === T.currentTarget && ke() && T.key === "Enter" && !u && (T.preventDefault(), h && h(T));
  }), kt = vt((T) => {
    p && T.key === " " && A.current && D && !T.defaultPrevented && (Xe.current = !1, A.current.stop(T, () => {
      A.current.pulsate(T);
    })), g && g(T), h && T.target === T.currentTarget && ke() && T.key === " " && !T.defaultPrevented && h(T);
  });
  let pt = c;
  pt === "button" && (B.href || B.to) && (pt = E);
  const st = {};
  pt === "button" ? (st.type = H === void 0 ? "button" : H, st.disabled = u) : (!B.href && !B.to && (st.role = "button"), u && (st["aria-disabled"] = u));
  const _t = ut(r, K, z);
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    Z && !A.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [Z]);
  const Be = x({}, n, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: m,
    focusRipple: p,
    tabIndex: ee,
    focusVisible: D
  }), $ = Zd(Be);
  return /* @__PURE__ */ V.jsxs(Qd, x({
    as: pt,
    className: ye($.root, l),
    ownerState: Be,
    onBlur: Fe,
    onClick: h,
    onContextMenu: Oe,
    onFocus: dt,
    onKeyDown: bt,
    onKeyUp: kt,
    onMouseDown: re,
    onMouseLeave: P,
    onMouseUp: pe,
    onDragLeave: N,
    onTouchEnd: Ce,
    onTouchMove: Ve,
    onTouchStart: fe,
    ref: _t,
    tabIndex: u ? -1 : ee,
    type: H
  }, st, B, {
    children: [s, Z ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ V.jsx(Hd, x({
        ref: me,
        center: i
      }, Y))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (os.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ku,
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
  component: wu,
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
const ep = os;
function tp(e) {
  return Ge("MuiIconButton", e);
}
const rp = it("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), np = rp, op = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], ip = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, s = {
    root: ["root", r && "disabled", n !== "default" && `color${Se(n)}`, o && `edge${Se(o)}`, `size${Se(i)}`]
  };
  return ft(s, tp, t);
}, ap = Pe(ep, {
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : It(e.palette.action.active, e.palette.action.hoverOpacity),
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
      backgroundColor: e.vars ? `rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : It(n.main, e.palette.action.hoverOpacity)
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
    [`&.${np.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), is = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: f = "medium"
  } = n, m = Re(n, op), p = x({}, n, {
    edge: o,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: f
  }), E = ip(p);
  return /* @__PURE__ */ V.jsx(ap, x({
    className: ye(E.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: r
  }, m, {
    ownerState: p,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (is.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Ct(a.node, (e) => b.Children.toArray(e.children).some((r) => /* @__PURE__ */ b.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const Bi = is;
function sp(e) {
  return Ge("MuiTypography", e);
}
it("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const lp = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], cp = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: s
  } = e, l = {
    root: ["root", i, e.align !== "inherit" && `align${Se(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return ft(l, sp, s);
}, up = Pe("span", {
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
})), Ui = {
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
}, fp = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, dp = (e) => fp[e] || e, as = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiTypography"
  }), o = dp(n.color), i = Ca(x({}, n, {
    color: o
  })), {
    align: s = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: f = !1,
    paragraph: m = !1,
    variant: p = "body1",
    variantMapping: E = Ui
  } = i, y = Re(i, lp), h = x({}, i, {
    align: s,
    color: o,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: f,
    paragraph: m,
    variant: p,
    variantMapping: E
  }), v = c || (m ? "p" : E[p] || Ui[p]) || "span", _ = cp(h);
  return /* @__PURE__ */ V.jsx(up, x({
    as: v,
    ref: r,
    ownerState: h,
    className: ye(_.root, l)
  }, y));
});
process.env.NODE_ENV !== "production" && (as.propTypes = {
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
const Bn = as, pp = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function mp(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function hp(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function vp(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || hp(e));
}
function gp(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(pp)).forEach((n, o) => {
    const i = mp(n);
    i === -1 || !vp(n) || (i === 0 ? t.push(n) : r.push({
      documentOrder: o,
      tabIndex: i,
      node: n
    }));
  }), r.sort((n, o) => n.tabIndex === o.tabIndex ? n.documentOrder - o.documentOrder : n.tabIndex - o.tabIndex).map((n) => n.node).concat(t);
}
function yp() {
  return !0;
}
function en(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = gp,
    isEnabled: s = yp,
    open: l
  } = e, c = b.useRef(!1), u = b.useRef(null), f = b.useRef(null), m = b.useRef(null), p = b.useRef(null), E = b.useRef(!1), y = b.useRef(null), h = ut(t.ref, y), v = b.useRef(null);
  b.useEffect(() => {
    !l || !y.current || (E.current = !r);
  }, [r, l]), b.useEffect(() => {
    if (!l || !y.current)
      return;
    const S = Ke(y.current);
    return y.current.contains(S.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), E.current && y.current.focus()), () => {
      o || (m.current && m.current.focus && (c.current = !0, m.current.focus()), m.current = null);
    };
  }, [l]), b.useEffect(() => {
    if (!l || !y.current)
      return;
    const S = Ke(y.current), w = (C) => {
      v.current = C, !(n || !s() || C.key !== "Tab") && S.activeElement === y.current && C.shiftKey && (c.current = !0, f.current && f.current.focus());
    }, g = () => {
      const C = y.current;
      if (C === null)
        return;
      if (!S.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (C.contains(S.activeElement) || n && S.activeElement !== u.current && S.activeElement !== f.current)
        return;
      if (S.activeElement !== p.current)
        p.current = null;
      else if (p.current !== null)
        return;
      if (!E.current)
        return;
      let oe = [];
      if ((S.activeElement === u.current || S.activeElement === f.current) && (oe = i(y.current)), oe.length > 0) {
        var ie, W;
        const F = !!((ie = v.current) != null && ie.shiftKey && ((W = v.current) == null ? void 0 : W.key) === "Tab"), ee = oe[0], Y = oe[oe.length - 1];
        typeof ee != "string" && typeof Y != "string" && (F ? Y.focus() : ee.focus());
      } else
        C.focus();
    };
    S.addEventListener("focusin", g), S.addEventListener("keydown", w, !0);
    const I = setInterval(() => {
      S.activeElement && S.activeElement.tagName === "BODY" && g();
    }, 50);
    return () => {
      clearInterval(I), S.removeEventListener("focusin", g), S.removeEventListener("keydown", w, !0);
    };
  }, [r, n, o, s, l, i]);
  const _ = (S) => {
    m.current === null && (m.current = S.relatedTarget), E.current = !0, p.current = S.target;
    const w = t.props.onFocus;
    w && w(S);
  }, k = (S) => {
    m.current === null && (m.current = S.relatedTarget), E.current = !0;
  };
  return /* @__PURE__ */ V.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ V.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: k,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ b.cloneElement(t, {
      ref: h,
      onFocus: _
    }), /* @__PURE__ */ V.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: k,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (en.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: bn,
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
process.env.NODE_ENV !== "production" && (en["propTypes"] = Ia(en.propTypes));
function bp(e) {
  return typeof e == "function" ? e() : e;
}
const tn = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = b.useState(null), c = ut(/* @__PURE__ */ b.isValidElement(n) ? n.ref : null, r);
  if (Sr(() => {
    i || l(bp(o) || document.body);
  }, [o, i]), Sr(() => {
    if (s && !i)
      return Xr(r, s), () => {
        Xr(r, null);
      };
  }, [r, s, i]), i) {
    if (/* @__PURE__ */ b.isValidElement(n)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ b.cloneElement(n, u);
    }
    return /* @__PURE__ */ V.jsx(b.Fragment, {
      children: n
    });
  }
  return /* @__PURE__ */ V.jsx(b.Fragment, {
    children: s && /* @__PURE__ */ _s.createPortal(n, s)
  });
});
process.env.NODE_ENV !== "production" && (tn.propTypes = {
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
  container: a.oneOfType([So, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool
});
process.env.NODE_ENV !== "production" && (tn["propTypes"] = Ia(tn.propTypes));
function Ep(e) {
  const t = Ke(e);
  return t.body === e ? tr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function gr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Wi(e) {
  return parseInt(tr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function xp(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function Yi(e, t, r, n, o) {
  const i = [t, r, ...n];
  [].forEach.call(e.children, (s) => {
    const l = i.indexOf(s) === -1, c = !xp(s);
    l && c && gr(s, o);
  });
}
function Un(e, t) {
  let r = -1;
  return e.some((n, o) => t(n) ? (r = o, !0) : !1), r;
}
function Tp(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (Ep(n)) {
      const s = Ku(Ke(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${Wi(n) + s}px`;
      const l = Ke(n).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        r.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${Wi(c) + s}px`;
      });
    }
    let i;
    if (n.parentNode instanceof DocumentFragment)
      i = Ke(n).body;
    else {
      const s = n.parentElement, l = tr(n);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : n;
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
      property: l
    }) => {
      i ? s.style.setProperty(l, i) : s.style.removeProperty(l);
    });
  };
}
function Sp(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class Op {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && gr(t.modalRef, !1);
    const o = Sp(r);
    Yi(r, t.mount, t.modalRef, o, !0);
    const i = Un(this.containers, (s) => s.container === r);
    return i !== -1 ? (this.containers[i].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: o
    }), n);
  }
  mount(t, r) {
    const n = Un(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[n];
    o.restore || (o.restore = Tp(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const o = Un(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(n, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && gr(t.modalRef, r), Yi(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && gr(s.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function _p(e) {
  return typeof e == "function" ? e() : e;
}
function Rp(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const wp = new Op();
function Cp(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = wp,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: f,
    rootRef: m
  } = e, p = b.useRef({}), E = b.useRef(null), y = b.useRef(null), h = ut(y, m), [v, _] = b.useState(!f), k = Rp(c);
  let S = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (S = !1);
  const w = () => Ke(E.current), g = () => (p.current.modalRef = y.current, p.current.mount = E.current, p.current), I = () => {
    o.mount(g(), {
      disableScrollLock: n
    }), y.current && (y.current.scrollTop = 0);
  }, C = vt(() => {
    const B = _p(t) || w().body;
    o.add(g(), B), y.current && I();
  }), oe = b.useCallback(() => o.isTopModal(g()), [o]), ie = vt((B) => {
    E.current = B, B && (f && oe() ? I() : y.current && gr(y.current, S));
  }), W = b.useCallback(() => {
    o.remove(g(), S);
  }, [S, o]);
  b.useEffect(() => () => {
    W();
  }, [W]), b.useEffect(() => {
    f ? C() : (!k || !i) && W();
  }, [f, W, k, i, C]);
  const F = (B) => (z) => {
    var A;
    (A = B.onKeyDown) == null || A.call(B, z), !(z.key !== "Escape" || z.which === 229 || // Wait until IME is settled.
    !oe()) && (r || (z.stopPropagation(), u && u(z, "escapeKeyDown")));
  }, ee = (B) => (z) => {
    var A;
    (A = B.onClick) == null || A.call(B, z), z.target === z.currentTarget && u && u(z, "backdropClick");
  };
  return {
    getRootProps: (B = {}) => {
      const z = vr(e);
      delete z.onTransitionEnter, delete z.onTransitionExited;
      const A = x({}, z, B);
      return x({
        role: "presentation"
      }, A, {
        onKeyDown: F(A),
        ref: h
      });
    },
    getBackdropProps: (B = {}) => {
      const z = B;
      return x({
        "aria-hidden": !0
      }, z, {
        onClick: ee(z),
        open: f
      });
    },
    getTransitionProps: () => {
      const B = () => {
        _(!1), s && s();
      }, z = () => {
        _(!0), l && l(), i && W();
      };
      return {
        onEnter: Zn(B, c == null ? void 0 : c.props.onEnter),
        onExited: Zn(z, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: h,
    portalRef: ie,
    isTopModal: oe,
    exited: v,
    hasTransition: k
  };
}
const Pp = 2;
function ss(e, t) {
  return e - t;
}
function qi(e, t) {
  var r;
  const {
    index: n
  } = (r = e.reduce((o, i, s) => {
    const l = Math.abs(t - i);
    return o === null || l < o.distance || l === o.distance ? {
      distance: l,
      index: s
    } : o;
  }, null)) != null ? r : {};
  return n;
}
function Mr(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const r = e;
    for (let n = 0; n < r.changedTouches.length; n += 1) {
      const o = r.changedTouches[n];
      if (o.identifier === t.current)
        return {
          x: o.clientX,
          y: o.clientY
        };
    }
    return !1;
  }
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function rn(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function kp(e, t, r) {
  return (r - t) * e + t;
}
function $p(e) {
  if (Math.abs(e) < 1) {
    const r = e.toExponential().split("e-"), n = r[0].split(".")[1];
    return (n ? n.length : 0) + parseInt(r[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function Np(e, t, r) {
  const n = Math.round((e - r) / t) * t + r;
  return Number(n.toFixed($p(t)));
}
function Hi({
  values: e,
  newValue: t,
  index: r
}) {
  const n = e.slice();
  return n[r] = t, n.sort(ss);
}
function Ir({
  sliderRef: e,
  activeIndex: t,
  setActive: r
}) {
  var n, o;
  const i = Ke(e.current);
  if (!((n = e.current) != null && n.contains(i.activeElement)) || Number(i == null || (o = i.activeElement) == null ? void 0 : o.getAttribute("data-index")) !== t) {
    var s;
    (s = e.current) == null || s.querySelector(`[type="range"][data-index="${t}"]`).focus();
  }
  r && r(t);
}
function Dr(e, t) {
  return typeof e == "number" && typeof t == "number" ? e === t : typeof e == "object" && typeof t == "object" ? Md(e, t) : !1;
}
const jp = {
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
}, Ap = (e) => e;
let Lr;
function Ki() {
  return Lr === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? Lr = CSS.supports("touch-action", "none") : Lr = !0), Lr;
}
function Mp(e) {
  const {
    "aria-labelledby": t,
    defaultValue: r,
    disabled: n = !1,
    disableSwap: o = !1,
    isRtl: i = !1,
    marks: s = !1,
    max: l = 100,
    min: c = 0,
    name: u,
    onChange: f,
    onChangeCommitted: m,
    orientation: p = "horizontal",
    rootRef: E,
    scale: y = Ap,
    step: h = 1,
    shiftStep: v = 10,
    tabIndex: _,
    value: k
  } = e, S = b.useRef(), [w, g] = b.useState(-1), [I, C] = b.useState(-1), [oe, ie] = b.useState(!1), W = b.useRef(0), [F, ee] = La({
    controlled: k,
    default: r ?? c,
    name: "Slider"
  }), Y = f && (($, T, U) => {
    const le = $.nativeEvent || $, de = new le.constructor(le.type, le);
    Object.defineProperty(de, "target", {
      writable: !0,
      value: {
        value: T,
        name: u
      }
    }), f(de, T, U);
  }), L = Array.isArray(F);
  let H = L ? F.slice().sort(ss) : [F];
  H = H.map(($) => $ == null ? c : Kt($, c, l));
  const B = s === !0 && h !== null ? [...Array(Math.floor((l - c) / h) + 1)].map(($, T) => ({
    value: c + h * T
  })) : s || [], z = B.map(($) => $.value), {
    isFocusVisibleRef: A,
    onBlur: me,
    onFocus: O,
    ref: M
  } = Oo(), [te, K] = b.useState(-1), D = b.useRef(), J = ut(M, D), q = ut(E, J), G = ($) => (T) => {
    var U;
    const le = Number(T.currentTarget.getAttribute("data-index"));
    O(T), A.current === !0 && K(le), C(le), $ == null || (U = $.onFocus) == null || U.call($, T);
  }, Z = ($) => (T) => {
    var U;
    me(T), A.current === !1 && K(-1), C(-1), $ == null || (U = $.onBlur) == null || U.call($, T);
  }, X = ($, T) => {
    const U = Number($.currentTarget.getAttribute("data-index")), le = H[U], de = z.indexOf(le);
    let ue = T;
    if (B && h == null) {
      const Ye = z[z.length - 1];
      ue > Ye ? ue = Ye : ue < z[0] ? ue = z[0] : ue = ue < le ? z[de - 1] : z[de + 1];
    }
    if (ue = Kt(ue, c, l), L) {
      o && (ue = Kt(ue, H[U - 1] || -1 / 0, H[U + 1] || 1 / 0));
      const Ye = ue;
      ue = Hi({
        values: H,
        newValue: ue,
        index: U
      });
      let Je = U;
      o || (Je = ue.indexOf(Ye)), Ir({
        sliderRef: D,
        activeIndex: Je
      });
    }
    ee(ue), K(U), Y && !Dr(ue, F) && Y($, ue, U), m && m($, ue);
  }, re = ($) => (T) => {
    var U;
    if (h !== null) {
      const le = Number(T.currentTarget.getAttribute("data-index")), de = H[le];
      let ue = null;
      (T.key === "ArrowLeft" || T.key === "ArrowDown") && T.shiftKey || T.key === "PageDown" ? ue = Math.max(de - v, c) : ((T.key === "ArrowRight" || T.key === "ArrowUp") && T.shiftKey || T.key === "PageUp") && (ue = Math.min(de + v, l)), ue !== null && (X(T, ue), T.preventDefault());
    }
    $ == null || (U = $.onKeyDown) == null || U.call($, T);
  };
  Sr(() => {
    if (n && D.current.contains(document.activeElement)) {
      var $;
      ($ = document.activeElement) == null || $.blur();
    }
  }, [n]), n && w !== -1 && g(-1), n && te !== -1 && K(-1);
  const Oe = ($) => (T) => {
    var U;
    (U = $.onChange) == null || U.call($, T), X(T, T.target.valueAsNumber);
  }, N = b.useRef();
  let pe = p;
  i && p === "horizontal" && (pe += "-reverse");
  const P = ({
    finger: $,
    move: T = !1
  }) => {
    const {
      current: U
    } = D, {
      width: le,
      height: de,
      bottom: ue,
      left: Ye
    } = U.getBoundingClientRect();
    let Je;
    pe.indexOf("vertical") === 0 ? Je = (ue - $.y) / de : Je = ($.x - Ye) / le, pe.indexOf("-reverse") !== -1 && (Je = 1 - Je);
    let he;
    if (he = kp(Je, c, l), h)
      he = Np(he, h, c);
    else {
      const Rt = qi(z, he);
      he = z[Rt];
    }
    he = Kt(he, c, l);
    let Ue = 0;
    if (L) {
      T ? Ue = N.current : Ue = qi(H, he), o && (he = Kt(he, H[Ue - 1] || -1 / 0, H[Ue + 1] || 1 / 0));
      const Rt = he;
      he = Hi({
        values: H,
        newValue: he,
        index: Ue
      }), o && T || (Ue = he.indexOf(Rt), N.current = Ue);
    }
    return {
      newValue: he,
      activeIndex: Ue
    };
  }, fe = vt(($) => {
    const T = Mr($, S);
    if (!T)
      return;
    if (W.current += 1, $.type === "mousemove" && $.buttons === 0) {
      Ce($);
      return;
    }
    const {
      newValue: U,
      activeIndex: le
    } = P({
      finger: T,
      move: !0
    });
    Ir({
      sliderRef: D,
      activeIndex: le,
      setActive: g
    }), ee(U), !oe && W.current > Pp && ie(!0), Y && !Dr(U, F) && Y($, U, le);
  }), Ce = vt(($) => {
    const T = Mr($, S);
    if (ie(!1), !T)
      return;
    const {
      newValue: U
    } = P({
      finger: T,
      move: !0
    });
    g(-1), $.type === "touchend" && C(-1), m && m($, U), S.current = void 0, Fe();
  }), Ve = vt(($) => {
    if (n)
      return;
    Ki() || $.preventDefault();
    const T = $.changedTouches[0];
    T != null && (S.current = T.identifier);
    const U = Mr($, S);
    if (U !== !1) {
      const {
        newValue: de,
        activeIndex: ue
      } = P({
        finger: U
      });
      Ir({
        sliderRef: D,
        activeIndex: ue,
        setActive: g
      }), ee(de), Y && !Dr(de, F) && Y($, de, ue);
    }
    W.current = 0;
    const le = Ke(D.current);
    le.addEventListener("touchmove", fe, {
      passive: !0
    }), le.addEventListener("touchend", Ce, {
      passive: !0
    });
  }), Fe = b.useCallback(() => {
    const $ = Ke(D.current);
    $.removeEventListener("mousemove", fe), $.removeEventListener("mouseup", Ce), $.removeEventListener("touchmove", fe), $.removeEventListener("touchend", Ce);
  }, [Ce, fe]);
  b.useEffect(() => {
    const {
      current: $
    } = D;
    return $.addEventListener("touchstart", Ve, {
      passive: Ki()
    }), () => {
      $.removeEventListener("touchstart", Ve), Fe();
    };
  }, [Fe, Ve]), b.useEffect(() => {
    n && Fe();
  }, [n, Fe]);
  const dt = ($) => (T) => {
    var U;
    if ((U = $.onMouseDown) == null || U.call($, T), n || T.defaultPrevented || T.button !== 0)
      return;
    T.preventDefault();
    const le = Mr(T, S);
    if (le !== !1) {
      const {
        newValue: ue,
        activeIndex: Ye
      } = P({
        finger: le
      });
      Ir({
        sliderRef: D,
        activeIndex: Ye,
        setActive: g
      }), ee(ue), Y && !Dr(ue, F) && Y(T, ue, Ye);
    }
    W.current = 0;
    const de = Ke(D.current);
    de.addEventListener("mousemove", fe, {
      passive: !0
    }), de.addEventListener("mouseup", Ce);
  }, ke = rn(L ? H[0] : c, c, l), Xe = rn(H[H.length - 1], c, l) - ke, bt = ($ = {}) => {
    const T = vr($), U = {
      onMouseDown: dt(T || {})
    }, le = x({}, T, U);
    return x({}, $, {
      ref: q
    }, le);
  }, kt = ($) => (T) => {
    var U;
    (U = $.onMouseOver) == null || U.call($, T);
    const le = Number(T.currentTarget.getAttribute("data-index"));
    C(le);
  }, pt = ($) => (T) => {
    var U;
    (U = $.onMouseLeave) == null || U.call($, T), C(-1);
  };
  return {
    active: w,
    axis: pe,
    axisProps: jp,
    dragging: oe,
    focusedThumbIndex: te,
    getHiddenInputProps: ($ = {}) => {
      var T;
      const U = vr($), le = {
        onChange: Oe(U || {}),
        onFocus: G(U || {}),
        onBlur: Z(U || {}),
        onKeyDown: re(U || {})
      }, de = x({}, U, le);
      return x({
        tabIndex: _,
        "aria-labelledby": t,
        "aria-orientation": p,
        "aria-valuemax": y(l),
        "aria-valuemin": y(c),
        name: u,
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step === null && e.marks ? "any" : (T = e.step) != null ? T : void 0,
        disabled: n
      }, $, de, {
        style: x({}, Xu, {
          direction: i ? "rtl" : "ltr",
          // So that VoiceOver's focus indicator matches the thumb's dimensions
          width: "100%",
          height: "100%"
        })
      });
    },
    getRootProps: bt,
    getThumbProps: ($ = {}) => {
      const T = vr($), U = {
        onMouseOver: kt(T || {}),
        onMouseLeave: pt(T || {})
      };
      return x({}, $, T, U);
    },
    marks: B,
    open: I,
    range: L,
    rootRef: q,
    trackLeap: Xe,
    trackOffset: ke,
    values: H,
    getThumbStyle: ($) => ({
      // So the non active thumb doesn't show its label on hover.
      pointerEvents: w !== -1 && w !== $ ? "none" : void 0
    })
  };
}
const Ip = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Dp = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, ls = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Sn(), o = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: f,
    onEntered: m,
    onEntering: p,
    onExit: E,
    onExited: y,
    onExiting: h,
    style: v,
    timeout: _ = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: k = Qa
  } = t, S = Re(t, Ip), w = b.useRef(null), g = ut(w, l.ref, r), I = (L) => (H) => {
    if (L) {
      const B = w.current;
      H === void 0 ? L(B) : L(B, H);
    }
  }, C = I(p), oe = I((L, H) => {
    es(L);
    const B = Qr({
      style: v,
      timeout: _,
      easing: c
    }, {
      mode: "enter"
    });
    L.style.webkitTransition = n.transitions.create("opacity", B), L.style.transition = n.transitions.create("opacity", B), f && f(L, H);
  }), ie = I(m), W = I(h), F = I((L) => {
    const H = Qr({
      style: v,
      timeout: _,
      easing: c
    }, {
      mode: "exit"
    });
    L.style.webkitTransition = n.transitions.create("opacity", H), L.style.transition = n.transitions.create("opacity", H), E && E(L);
  }), ee = I(y), Y = (L) => {
    i && i(w.current, L);
  };
  return /* @__PURE__ */ V.jsx(k, x({
    appear: s,
    in: u,
    nodeRef: w,
    onEnter: oe,
    onEntered: ie,
    onEntering: C,
    onExit: F,
    onExited: ee,
    onExiting: W,
    addEndListener: Y,
    timeout: _
  }, S, {
    children: (L, H) => /* @__PURE__ */ b.cloneElement(l, x({
      style: x({
        opacity: 0,
        visibility: L === "exited" && !u ? "hidden" : void 0
      }, Dp[L], v, l.props.style),
      ref: g
    }, H))
  }));
});
process.env.NODE_ENV !== "production" && (ls.propTypes = {
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
  children: bn.isRequired,
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
const Lp = ls;
function Vp(e) {
  return Ge("MuiBackdrop", e);
}
it("MuiBackdrop", ["root", "invisible"]);
const Fp = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], zp = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return ft({
    root: ["root", r && "invisible"]
  }, Vp, t);
}, Bp = Pe("div", {
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
})), cs = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o, i;
  const s = at({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: f = {},
    componentsProps: m = {},
    invisible: p = !1,
    open: E,
    slotProps: y = {},
    slots: h = {},
    TransitionComponent: v = Lp,
    transitionDuration: _
  } = s, k = Re(s, Fp), S = x({}, s, {
    component: u,
    invisible: p
  }), w = zp(S), g = (n = y.root) != null ? n : m.root;
  return /* @__PURE__ */ V.jsx(v, x({
    in: E,
    timeout: _
  }, k, {
    children: /* @__PURE__ */ V.jsx(Bp, x({
      "aria-hidden": !0
    }, g, {
      as: (o = (i = h.root) != null ? i : f.Root) != null ? o : u,
      className: ye(w.root, c, g == null ? void 0 : g.className),
      ownerState: x({}, S, g == null ? void 0 : g.ownerState),
      classes: w,
      ref: r,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (cs.propTypes = {
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
const Up = cs;
function Wp(e) {
  return Ge("MuiModal", e);
}
it("MuiModal", ["root", "hidden", "backdrop"]);
const Yp = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], qp = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return ft({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, Wp, n);
}, Hp = Pe("div", {
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
})), Kp = Pe(Up, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), us = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o, i, s, l, c;
  const u = at({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: f = Kp,
    BackdropProps: m,
    className: p,
    closeAfterTransition: E = !1,
    children: y,
    container: h,
    component: v,
    components: _ = {},
    componentsProps: k = {},
    disableAutoFocus: S = !1,
    disableEnforceFocus: w = !1,
    disableEscapeKeyDown: g = !1,
    disablePortal: I = !1,
    disableRestoreFocus: C = !1,
    disableScrollLock: oe = !1,
    hideBackdrop: ie = !1,
    keepMounted: W = !1,
    onBackdropClick: F,
    open: ee,
    slotProps: Y,
    slots: L
    // eslint-disable-next-line react/prop-types
  } = u, H = Re(u, Yp), B = x({}, u, {
    closeAfterTransition: E,
    disableAutoFocus: S,
    disableEnforceFocus: w,
    disableEscapeKeyDown: g,
    disablePortal: I,
    disableRestoreFocus: C,
    disableScrollLock: oe,
    hideBackdrop: ie,
    keepMounted: W
  }), {
    getRootProps: z,
    getBackdropProps: A,
    getTransitionProps: me,
    portalRef: O,
    isTopModal: M,
    exited: te,
    hasTransition: K
  } = Cp(x({}, B, {
    rootRef: r
  })), D = x({}, B, {
    exited: te
  }), J = qp(D), q = {};
  if (y.props.tabIndex === void 0 && (q.tabIndex = "-1"), K) {
    const {
      onEnter: pe,
      onExited: P
    } = me();
    q.onEnter = pe, q.onExited = P;
  }
  const G = (n = (o = L == null ? void 0 : L.root) != null ? o : _.Root) != null ? n : Hp, Z = (i = (s = L == null ? void 0 : L.backdrop) != null ? s : _.Backdrop) != null ? i : f, X = (l = Y == null ? void 0 : Y.root) != null ? l : k.root, re = (c = Y == null ? void 0 : Y.backdrop) != null ? c : k.backdrop, Oe = mt({
    elementType: G,
    externalSlotProps: X,
    externalForwardedProps: H,
    getSlotProps: z,
    additionalProps: {
      ref: r,
      as: v
    },
    ownerState: D,
    className: ye(p, X == null ? void 0 : X.className, J == null ? void 0 : J.root, !D.open && D.exited && (J == null ? void 0 : J.hidden))
  }), N = mt({
    elementType: Z,
    externalSlotProps: re,
    additionalProps: m,
    getSlotProps: (pe) => A(x({}, pe, {
      onClick: (P) => {
        F && F(P), pe != null && pe.onClick && pe.onClick(P);
      }
    })),
    className: ye(re == null ? void 0 : re.className, m == null ? void 0 : m.className, J == null ? void 0 : J.backdrop),
    ownerState: D
  });
  return !W && !ee && (!K || te) ? null : /* @__PURE__ */ V.jsx(tn, {
    ref: O,
    container: h,
    disablePortal: I,
    children: /* @__PURE__ */ V.jsxs(G, x({}, Oe, {
      children: [!ie && f ? /* @__PURE__ */ V.jsx(Z, x({}, N)) : null, /* @__PURE__ */ V.jsx(en, {
        disableEnforceFocus: w,
        disableAutoFocus: S,
        disableRestoreFocus: C,
        isEnabled: M,
        open: ee,
        children: /* @__PURE__ */ b.cloneElement(y, q)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (us.propTypes = {
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
  children: bn.isRequired,
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
  container: a.oneOfType([So, a.func]),
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
const Gp = us;
function Xp(e) {
  return Ge("MuiDivider", e);
}
it("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
const Jp = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], Zp = (e) => {
  const {
    absolute: t,
    children: r,
    classes: n,
    flexItem: o,
    light: i,
    orientation: s,
    textAlign: l,
    variant: c
  } = e;
  return ft({
    root: ["root", t && "absolute", c, i && "light", s === "vertical" && "vertical", o && "flexItem", r && "withChildren", r && s === "vertical" && "withChildrenVertical", l === "right" && s !== "vertical" && "textAlignRight", l === "left" && s !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", s === "vertical" && "wrapperVertical"]
  }, Xp, n);
}, Qp = Pe("div", {
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
  borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : It(e.palette.divider, 0.08)
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
})), em = Pe("span", {
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
})), jo = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: o = !1,
    children: i,
    className: s,
    component: l = i ? "div" : "hr",
    flexItem: c = !1,
    light: u = !1,
    orientation: f = "horizontal",
    role: m = l !== "hr" ? "separator" : void 0,
    textAlign: p = "center",
    variant: E = "fullWidth"
  } = n, y = Re(n, Jp), h = x({}, n, {
    absolute: o,
    component: l,
    flexItem: c,
    light: u,
    orientation: f,
    role: m,
    textAlign: p,
    variant: E
  }), v = Zp(h);
  return /* @__PURE__ */ V.jsx(Qp, x({
    as: l,
    className: ye(v.root, s),
    role: m,
    ref: r,
    ownerState: h
  }, y, {
    children: i ? /* @__PURE__ */ V.jsx(em, {
      className: v.wrapper,
      ownerState: h,
      children: i
    }) : null
  }));
});
jo.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (jo.propTypes = {
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
const tm = jo, rm = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function nm(e, t, r) {
  const n = t.getBoundingClientRect(), o = r && r.getBoundingClientRect(), i = tr(t);
  let s;
  if (t.fakeTransform)
    s = t.fakeTransform;
  else {
    const u = i.getComputedStyle(t);
    s = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let l = 0, c = 0;
  if (s && s !== "none" && typeof s == "string") {
    const u = s.split("(")[1].split(")")[0].split(",");
    l = parseInt(u[4], 10), c = parseInt(u[5], 10);
  }
  return e === "left" ? o ? `translateX(${o.right + l - n.left}px)` : `translateX(${i.innerWidth + l - n.left}px)` : e === "right" ? o ? `translateX(-${n.right - o.left - l}px)` : `translateX(-${n.left + n.width - l}px)` : e === "up" ? o ? `translateY(${o.bottom + c - n.top}px)` : `translateY(${i.innerHeight + c - n.top}px)` : o ? `translateY(-${n.top - o.top + n.height - c}px)` : `translateY(-${n.top + n.height - c}px)`;
}
function fs(e) {
  return typeof e == "function" ? e() : e;
}
function Vr(e, t, r) {
  const n = fs(r), o = nm(e, t, n);
  o && (t.style.webkitTransform = o, t.style.transform = o);
}
const ds = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = Sn(), o = {
    enter: n.transitions.easing.easeOut,
    exit: n.transitions.easing.sharp
  }, i = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: l = !0,
    children: c,
    container: u,
    direction: f = "down",
    easing: m = o,
    in: p,
    onEnter: E,
    onEntered: y,
    onEntering: h,
    onExit: v,
    onExited: _,
    onExiting: k,
    style: S,
    timeout: w = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: g = Qa
  } = t, I = Re(t, rm), C = b.useRef(null), oe = ut(c.ref, C, r), ie = (A) => (me) => {
    A && (me === void 0 ? A(C.current) : A(C.current, me));
  }, W = ie((A, me) => {
    Vr(f, A, u), es(A), E && E(A, me);
  }), F = ie((A, me) => {
    const O = Qr({
      timeout: w,
      style: S,
      easing: m
    }, {
      mode: "enter"
    });
    A.style.webkitTransition = n.transitions.create("-webkit-transform", x({}, O)), A.style.transition = n.transitions.create("transform", x({}, O)), A.style.webkitTransform = "none", A.style.transform = "none", h && h(A, me);
  }), ee = ie(y), Y = ie(k), L = ie((A) => {
    const me = Qr({
      timeout: w,
      style: S,
      easing: m
    }, {
      mode: "exit"
    });
    A.style.webkitTransition = n.transitions.create("-webkit-transform", me), A.style.transition = n.transitions.create("transform", me), Vr(f, A, u), v && v(A);
  }), H = ie((A) => {
    A.style.webkitTransition = "", A.style.transition = "", _ && _(A);
  }), B = (A) => {
    s && s(C.current, A);
  }, z = b.useCallback(() => {
    C.current && Vr(f, C.current, u);
  }, [f, u]);
  return b.useEffect(() => {
    if (p || f === "down" || f === "right")
      return;
    const A = Da(() => {
      C.current && Vr(f, C.current, u);
    }), me = tr(C.current);
    return me.addEventListener("resize", A), () => {
      A.clear(), me.removeEventListener("resize", A);
    };
  }, [f, p, u]), b.useEffect(() => {
    p || z();
  }, [p, z]), /* @__PURE__ */ V.jsx(g, x({
    nodeRef: C,
    onEnter: W,
    onEntered: ee,
    onEntering: F,
    onExit: L,
    onExited: H,
    onExiting: Y,
    addEndListener: B,
    appear: l,
    in: p,
    timeout: w
  }, I, {
    children: (A, me) => /* @__PURE__ */ b.cloneElement(c, x({
      ref: oe,
      style: x({
        visibility: A === "exited" && !p ? "hidden" : void 0
      }, S, c.props.style)
    }, me))
  }));
});
process.env.NODE_ENV !== "production" && (ds.propTypes = {
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
  children: bn.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Ct(a.oneOfType([So, a.func]), (e) => {
    if (e.open) {
      const t = fs(e.container);
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
const om = ds;
function im(e) {
  return Ge("MuiDrawer", e);
}
it("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const am = ["BackdropProps"], sm = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], ps = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, (r.variant === "permanent" || r.variant === "persistent") && t.docked, t.modal];
}, lm = (e) => {
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
  return ft(o, im, t);
}, cm = Pe(Gp, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: ps
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), Gi = Pe("div", {
  shouldForwardProp: Ja,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: ps
})({
  flex: "0 0 auto"
}), um = Pe(jd, {
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
})), ms = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function fm(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function dm({
  direction: e
}, t) {
  return e === "rtl" && fm(t) ? ms[t] : t;
}
const hs = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiDrawer"
  }), o = Sn(), i = Ba(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    BackdropProps: c,
    children: u,
    className: f,
    elevation: m = 16,
    hideBackdrop: p = !1,
    ModalProps: {
      BackdropProps: E
    } = {},
    onClose: y,
    open: h = !1,
    PaperProps: v = {},
    SlideProps: _,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: k = om,
    transitionDuration: S = s,
    variant: w = "temporary"
  } = n, g = Re(n.ModalProps, am), I = Re(n, sm), C = b.useRef(!1);
  b.useEffect(() => {
    C.current = !0;
  }, []);
  const oe = dm({
    direction: i ? "rtl" : "ltr"
  }, l), W = x({}, n, {
    anchor: l,
    elevation: m,
    open: h,
    variant: w
  }, I), F = lm(W), ee = /* @__PURE__ */ V.jsx(um, x({
    elevation: w === "temporary" ? m : 0,
    square: !0
  }, v, {
    className: ye(F.paper, v.className),
    ownerState: W,
    children: u
  }));
  if (w === "permanent")
    return /* @__PURE__ */ V.jsx(Gi, x({
      className: ye(F.root, F.docked, f),
      ownerState: W,
      ref: r
    }, I, {
      children: ee
    }));
  const Y = /* @__PURE__ */ V.jsx(k, x({
    in: h,
    direction: ms[oe],
    timeout: S,
    appear: C.current
  }, _, {
    children: ee
  }));
  return w === "persistent" ? /* @__PURE__ */ V.jsx(Gi, x({
    className: ye(F.root, F.docked, f),
    ownerState: W,
    ref: r
  }, I, {
    children: Y
  })) : /* @__PURE__ */ V.jsx(cm, x({
    BackdropProps: x({}, c, E, {
      transitionDuration: S
    }),
    className: ye(F.root, F.modal, f),
    open: h,
    ownerState: W,
    onClose: y,
    hideBackdrop: p,
    ref: r
  }, I, g, {
    children: Y
  }));
});
process.env.NODE_ENV !== "production" && (hs.propTypes = {
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
  elevation: za,
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
const pm = hs, mm = (e) => !e || !hr(e), hm = mm;
function vm(e) {
  return Ge("MuiSlider", e);
}
const gm = it("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]), rt = gm, ym = (e) => {
  const {
    open: t
  } = e;
  return {
    offset: ye(t && rt.valueLabelOpen),
    circle: rt.valueLabelCircle,
    label: rt.valueLabelLabel
  };
};
function vs(e) {
  const {
    children: t,
    className: r,
    value: n
  } = e, o = ym(e);
  return t ? /* @__PURE__ */ b.cloneElement(t, {
    className: ye(t.props.className)
  }, /* @__PURE__ */ V.jsxs(b.Fragment, {
    children: [t.props.children, /* @__PURE__ */ V.jsx("span", {
      className: ye(o.offset, r),
      "aria-hidden": !0,
      children: /* @__PURE__ */ V.jsx("span", {
        className: o.circle,
        children: /* @__PURE__ */ V.jsx("span", {
          className: o.label,
          children: n
        })
      })
    })]
  })) : null;
}
process.env.NODE_ENV !== "production" && (vs.propTypes = {
  children: a.element.isRequired,
  className: a.string,
  value: a.node
});
const bm = ["aria-label", "aria-valuetext", "aria-labelledby", "component", "components", "componentsProps", "color", "classes", "className", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "shiftStep", "size", "step", "scale", "slotProps", "slots", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat"], Em = bd();
function Xi(e) {
  return e;
}
const xm = Pe("span", {
  name: "MuiSlider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[`color${Se(r.color)}`], r.size !== "medium" && t[`size${Se(r.size)}`], r.marked && t.marked, r.orientation === "vertical" && t.vertical, r.track === "inverted" && t.trackInverted, r.track === !1 && t.trackFalse];
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
    [`&.${rt.disabled}`]: {
      pointerEvents: "none",
      cursor: "default",
      color: (e.vars || e).palette.grey[400]
    },
    [`&.${rt.dragging}`]: {
      [`& .${rt.thumb}, & .${rt.track}`]: {
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
}), Tm = Pe("span", {
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
}), Sm = Pe("span", {
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
      style: x({}, e.vars ? {
        backgroundColor: e.vars.palette.Slider[`${r}Track`],
        borderColor: e.vars.palette.Slider[`${r}Track`]
      } : x({
        backgroundColor: ro(e.palette[r].main, 0.62),
        borderColor: ro(e.palette[r].main, 0.62)
      }, e.applyStyles("dark", {
        backgroundColor: to(e.palette[r].main, 0.5)
      }), e.applyStyles("dark", {
        borderColor: to(e.palette[r].main, 0.5)
      })))
    }))]
  };
}), Om = Pe("span", {
  name: "MuiSlider",
  slot: "Thumb",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.thumb, t[`thumbColor${Se(r.color)}`], r.size !== "medium" && t[`thumbSize${Se(r.size)}`]];
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
    [`&.${rt.disabled}`]: {
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
        [`&:hover, &.${rt.focusVisible}`]: x({}, e.vars ? {
          boxShadow: `0px 0px 0px 8px rgba(${e.vars.palette[r].mainChannel} / 0.16)`
        } : {
          boxShadow: `0px 0px 0px 8px ${It(e.palette[r].main, 0.16)}`
        }, {
          "@media (hover: none)": {
            boxShadow: "none"
          }
        }),
        [`&.${rt.active}`]: x({}, e.vars ? {
          boxShadow: `0px 0px 0px 14px rgba(${e.vars.palette[r].mainChannel} / 0.16)}`
        } : {
          boxShadow: `0px 0px 0px 14px ${It(e.palette[r].main, 0.16)}`
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
}), _m = Pe(vs, {
  name: "MuiSlider",
  slot: "ValueLabel",
  overridesResolver: (e, t) => t.valueLabel
})(({
  theme: e
}) => x({
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
      [`&.${rt.valueLabelOpen}`]: {
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
      [`&.${rt.valueLabelOpen}`]: {
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
})), Rm = Pe("span", {
  name: "MuiSlider",
  slot: "Mark",
  shouldForwardProp: (e) => Po(e) && e !== "markActive",
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
})), wm = Pe("span", {
  name: "MuiSlider",
  slot: "MarkLabel",
  shouldForwardProp: (e) => Po(e) && e !== "markLabelActive",
  overridesResolver: (e, t) => t.markLabel
})(({
  theme: e
}) => x({}, e.typography.body2, {
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
})), Cm = (e) => {
  const {
    disabled: t,
    dragging: r,
    marked: n,
    orientation: o,
    track: i,
    classes: s,
    color: l,
    size: c
  } = e, u = {
    root: ["root", t && "disabled", r && "dragging", n && "marked", o === "vertical" && "vertical", i === "inverted" && "trackInverted", i === !1 && "trackFalse", l && `color${Se(l)}`, c && `size${Se(c)}`],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", t && "disabled", c && `thumbSize${Se(c)}`, l && `thumbColor${Se(l)}`],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return ft(u, vm, s);
}, Pm = ({
  children: e
}) => e, gs = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o, i, s, l, c, u, f, m, p, E, y, h, v, _, k, S, w, g, I, C, oe, ie, W;
  const F = Em({
    props: t,
    name: "MuiSlider"
  }), ee = Ba(), {
    "aria-label": Y,
    "aria-valuetext": L,
    "aria-labelledby": H,
    // eslint-disable-next-line react/prop-types
    component: B = "span",
    components: z = {},
    componentsProps: A = {},
    color: me = "primary",
    classes: O,
    className: M,
    disableSwap: te = !1,
    disabled: K = !1,
    getAriaLabel: D,
    getAriaValueText: J,
    marks: q = !1,
    max: G = 100,
    min: Z = 0,
    orientation: X = "horizontal",
    shiftStep: re = 10,
    size: Oe = "medium",
    step: N = 1,
    scale: pe = Xi,
    slotProps: P,
    slots: fe,
    track: Ce = "normal",
    valueLabelDisplay: Ve = "off",
    valueLabelFormat: Fe = Xi
  } = F, dt = Re(F, bm), ke = x({}, F, {
    isRtl: ee,
    max: G,
    min: Z,
    classes: O,
    disabled: K,
    disableSwap: te,
    orientation: X,
    marks: q,
    color: me,
    size: Oe,
    step: N,
    shiftStep: re,
    scale: pe,
    track: Ce,
    valueLabelDisplay: Ve,
    valueLabelFormat: Fe
  }), {
    axisProps: Xe,
    getRootProps: bt,
    getHiddenInputProps: kt,
    getThumbProps: pt,
    open: st,
    active: _t,
    axis: Be,
    focusedThumbIndex: $,
    range: T,
    dragging: U,
    marks: le,
    values: de,
    trackOffset: ue,
    trackLeap: Ye,
    getThumbStyle: Je
  } = Mp(x({}, ke, {
    rootRef: r
  }));
  ke.marked = le.length > 0 && le.some((Q) => Q.label), ke.dragging = U, ke.focusedThumbIndex = $;
  const he = Cm(ke), Ue = (n = (o = fe == null ? void 0 : fe.root) != null ? o : z.Root) != null ? n : xm, Rt = (i = (s = fe == null ? void 0 : fe.rail) != null ? s : z.Rail) != null ? i : Tm, Lt = (l = (c = fe == null ? void 0 : fe.track) != null ? c : z.Track) != null ? l : Sm, or = (u = (f = fe == null ? void 0 : fe.thumb) != null ? f : z.Thumb) != null ? u : Om, Et = (m = (p = fe == null ? void 0 : fe.valueLabel) != null ? p : z.ValueLabel) != null ? m : _m, $t = (E = (y = fe == null ? void 0 : fe.mark) != null ? y : z.Mark) != null ? E : Rm, Nt = (h = (v = fe == null ? void 0 : fe.markLabel) != null ? v : z.MarkLabel) != null ? h : wm, ir = (_ = (k = fe == null ? void 0 : fe.input) != null ? k : z.Input) != null ? _ : "input", ar = (S = P == null ? void 0 : P.root) != null ? S : A.root, Pr = (w = P == null ? void 0 : P.rail) != null ? w : A.rail, sr = (g = P == null ? void 0 : P.track) != null ? g : A.track, Vt = (I = P == null ? void 0 : P.thumb) != null ? I : A.thumb, Ft = (C = P == null ? void 0 : P.valueLabel) != null ? C : A.valueLabel, _n = (oe = P == null ? void 0 : P.mark) != null ? oe : A.mark, Rn = (ie = P == null ? void 0 : P.markLabel) != null ? ie : A.markLabel, kr = (W = P == null ? void 0 : P.input) != null ? W : A.input, wn = mt({
    elementType: Ue,
    getSlotProps: bt,
    externalSlotProps: ar,
    externalForwardedProps: dt,
    additionalProps: x({}, hm(Ue) && {
      as: B
    }),
    ownerState: x({}, ke, ar == null ? void 0 : ar.ownerState),
    className: [he.root, M]
  }), Cn = mt({
    elementType: Rt,
    externalSlotProps: Pr,
    ownerState: ke,
    className: he.rail
  }), Pn = mt({
    elementType: Lt,
    externalSlotProps: sr,
    additionalProps: {
      style: x({}, Xe[Be].offset(ue), Xe[Be].leap(Ye))
    },
    ownerState: x({}, ke, sr == null ? void 0 : sr.ownerState),
    className: he.track
  }), lr = mt({
    elementType: or,
    getSlotProps: pt,
    externalSlotProps: Vt,
    ownerState: x({}, ke, Vt == null ? void 0 : Vt.ownerState),
    className: he.thumb
  }), d = mt({
    elementType: Et,
    externalSlotProps: Ft,
    ownerState: x({}, ke, Ft == null ? void 0 : Ft.ownerState),
    className: he.valueLabel
  }), R = mt({
    elementType: $t,
    externalSlotProps: _n,
    ownerState: ke,
    className: he.mark
  }), j = mt({
    elementType: Nt,
    externalSlotProps: Rn,
    ownerState: ke,
    className: he.markLabel
  }), ne = mt({
    elementType: ir,
    getSlotProps: kt,
    externalSlotProps: kr,
    ownerState: ke
  });
  return /* @__PURE__ */ V.jsxs(Ue, x({}, wn, {
    children: [/* @__PURE__ */ V.jsx(Rt, x({}, Cn)), /* @__PURE__ */ V.jsx(Lt, x({}, Pn)), le.filter((Q) => Q.value >= Z && Q.value <= G).map((Q, ae) => {
      const ce = rn(Q.value, Z, G), se = Xe[Be].offset(ce);
      let _e;
      return Ce === !1 ? _e = de.indexOf(Q.value) !== -1 : _e = Ce === "normal" && (T ? Q.value >= de[0] && Q.value <= de[de.length - 1] : Q.value <= de[0]) || Ce === "inverted" && (T ? Q.value <= de[0] || Q.value >= de[de.length - 1] : Q.value >= de[0]), /* @__PURE__ */ V.jsxs(b.Fragment, {
        children: [/* @__PURE__ */ V.jsx($t, x({
          "data-index": ae
        }, R, !hr($t) && {
          markActive: _e
        }, {
          style: x({}, se, R.style),
          className: ye(R.className, _e && he.markActive)
        })), Q.label != null ? /* @__PURE__ */ V.jsx(Nt, x({
          "aria-hidden": !0,
          "data-index": ae
        }, j, !hr(Nt) && {
          markLabelActive: _e
        }, {
          style: x({}, se, j.style),
          className: ye(he.markLabel, j.className, _e && he.markLabelActive),
          children: Q.label
        })) : null]
      }, ae);
    }), de.map((Q, ae) => {
      const ce = rn(Q, Z, G), se = Xe[Be].offset(ce), _e = Ve === "off" ? Pm : Et;
      return (
        /* TODO v6: Change component structure. It will help in avoiding the complicated React.cloneElement API added in SliderValueLabel component. Should be: Thumb -> Input, ValueLabel. Follow Joy UI's Slider structure. */
        /* @__PURE__ */ V.jsx(_e, x({}, !hr(_e) && {
          valueLabelFormat: Fe,
          valueLabelDisplay: Ve,
          value: typeof Fe == "function" ? Fe(pe(Q), ae) : Fe,
          index: ae,
          open: st === ae || _t === ae || Ve === "on",
          disabled: K
        }, d, {
          children: /* @__PURE__ */ V.jsx(or, x({
            "data-index": ae
          }, lr, {
            className: ye(he.thumb, lr.className, _t === ae && he.active, $ === ae && he.focusVisible),
            style: x({}, se, Je(ae), lr.style),
            children: /* @__PURE__ */ V.jsx(ir, x({
              "data-index": ae,
              "aria-label": D ? D(ae) : Y,
              "aria-valuenow": pe(Q),
              "aria-labelledby": H,
              "aria-valuetext": J ? J(pe(Q), ae) : L,
              value: de[ae]
            }, ne))
          }))
        }), ae)
      );
    })]
  }));
});
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The label of the slider.
   */
  "aria-label": Ct(a.string, (e) => Array.isArray(e.value || e.defaultValue) && e["aria-label"] != null ? new Error("MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.") : null),
  /**
   * The id of the element containing a label for the slider.
   */
  "aria-labelledby": a.string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  "aria-valuetext": Ct(a.string, (e) => Array.isArray(e.value || e.defaultValue) && e["aria-valuetext"] != null ? new Error("MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.") : null),
  /**
   * @ignore
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
   * @default 'primary'
   */
  color: a.oneOfType([a.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   *
   * @default {}
   */
  components: a.shape({
    Input: a.elementType,
    Mark: a.elementType,
    MarkLabel: a.elementType,
    Rail: a.elementType,
    Root: a.elementType,
    Thumb: a.elementType,
    Track: a.elementType,
    ValueLabel: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   *
   * @default {}
   */
  componentsProps: a.shape({
    input: a.oneOfType([a.func, a.object]),
    mark: a.oneOfType([a.func, a.object]),
    markLabel: a.oneOfType([a.func, a.object]),
    rail: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object]),
    thumb: a.oneOfType([a.func, a.object]),
    track: a.oneOfType([a.func, a.object]),
    valueLabel: a.oneOfType([a.func, a.shape({
      children: a.element,
      className: a.string,
      open: a.bool,
      style: a.object,
      value: a.number,
      valueLabelDisplay: a.oneOf(["auto", "off", "on"])
    })])
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: a.oneOfType([a.arrayOf(a.number), a.number]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap: a.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   * This is important for screen reader users.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: a.func,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: a.func,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: a.oneOfType([a.arrayOf(a.shape({
    label: a.node,
    value: a.number.isRequired
  })), a.bool]),
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: a.number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: a.number,
  /**
   * Name attribute of the hidden `input` element.
   */
  name: a.string,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange: a.func,
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: a.func,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: a.oneOf(["horizontal", "vertical"]),
  /**
   * A transformation function, to change the scale of the slider.
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  scale: a.func,
  /**
   * The granularity with which the slider can step through values when using Page Up/Page Down or Shift + Arrow Up/Arrow Down.
   * @default 10
   */
  shiftStep: a.number,
  /**
   * The size of the slider.
   * @default 'medium'
   */
  size: a.oneOfType([a.oneOf(["small", "medium"]), a.string]),
  /**
   * The props used for each slot inside the Slider.
   * @default {}
   */
  slotProps: a.shape({
    input: a.oneOfType([a.func, a.object]),
    mark: a.oneOfType([a.func, a.object]),
    markLabel: a.oneOfType([a.func, a.object]),
    rail: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object]),
    thumb: a.oneOfType([a.func, a.object]),
    track: a.oneOfType([a.func, a.object]),
    valueLabel: a.oneOfType([a.func, a.shape({
      children: a.element,
      className: a.string,
      open: a.bool,
      style: a.object,
      value: a.number,
      valueLabelDisplay: a.oneOf(["auto", "off", "on"])
    })])
  }),
  /**
   * The components used for each slot inside the Slider.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    input: a.elementType,
    mark: a.elementType,
    markLabel: a.elementType,
    rail: a.elementType,
    root: a.elementType,
    thumb: a.elementType,
    track: a.elementType,
    valueLabel: a.elementType
  }),
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: a.number,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex: a.number,
  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: a.oneOf(["inverted", "normal", !1]),
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: a.oneOfType([a.arrayOf(a.number), a.number]),
  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   * @default 'off'
   */
  valueLabelDisplay: a.oneOf(["auto", "off", "on"]),
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
  valueLabelFormat: a.oneOfType([a.func, a.string])
});
const Ji = gs;
function km(e) {
  return Ge("MuiToolbar", e);
}
it("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const $m = ["className", "component", "disableGutters", "variant"], Nm = (e) => {
  const {
    classes: t,
    disableGutters: r,
    variant: n
  } = e;
  return ft({
    root: ["root", !r && "gutters", n]
  }, km, t);
}, jm = Pe("div", {
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
}) => t.variant === "regular" && e.mixins.toolbar), ys = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiToolbar"
  }), {
    className: o,
    component: i = "div",
    disableGutters: s = !1,
    variant: l = "regular"
  } = n, c = Re(n, $m), u = x({}, n, {
    component: i,
    disableGutters: s,
    variant: l
  }), f = Nm(u);
  return /* @__PURE__ */ V.jsx(jm, x({
    as: i,
    className: ye(f.root, o),
    ref: r,
    ownerState: u
  }, c));
});
process.env.NODE_ENV !== "production" && (ys.propTypes = {
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
const Am = ys;
var Ao = {}, Wn = {};
const Mm = /* @__PURE__ */ St(yd);
var Zi;
function bs() {
  return Zi || (Zi = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = Mm;
  }(Wn)), Wn;
}
var Im = Tn;
Object.defineProperty(Ao, "__esModule", {
  value: !0
});
var Es = Ao.default = void 0, Dm = Im(bs()), Lm = V;
Es = Ao.default = (0, Dm.default)(/* @__PURE__ */ (0, Lm.jsx)("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu");
var Mo = {}, Vm = Tn;
Object.defineProperty(Mo, "__esModule", {
  value: !0
});
var xs = Mo.default = void 0, Fm = Vm(bs()), zm = V;
xs = Mo.default = (0, Fm.default)(/* @__PURE__ */ (0, zm.jsx)("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "ChevronRight");
const Wm = ({ helios: e }) => {
  const [t, r] = kn(!1), [n, o] = kn(50), [i, s] = kn(50), l = () => {
    r(!0);
  }, c = () => {
    r(!1);
  }, u = (m, p) => {
    if (o(p), console.log("helios instance from drawercomponent", e), e) {
      const E = Math.pow(10, p / 100);
      e.nodesGlobalSizeScale(E), e.render();
    }
  }, f = (m, p) => {
    s(p), e && (e.edgesGlobalOpacityScale(p / 100), e.render());
  };
  return /* @__PURE__ */ V.jsxs("div", { children: [
    /* @__PURE__ */ V.jsxs(
      pm,
      {
        variant: "persistent",
        anchor: "right",
        open: t,
        children: [
          /* @__PURE__ */ V.jsxs(Am, { sx: { backgroundColor: "primary.main" }, children: [
            /* @__PURE__ */ V.jsx(Bn, { variant: "h6", noWrap: !0, sx: { flexGrow: 1 }, children: "Settings" }),
            /* @__PURE__ */ V.jsx(Bi, { onClick: c, children: /* @__PURE__ */ V.jsx(xs, {}) })
          ] }),
          /* @__PURE__ */ V.jsx(tm, {}),
          /* @__PURE__ */ V.jsx(Bn, { variant: "body1", children: "Size" }),
          /* @__PURE__ */ V.jsx(
            Ji,
            {
              value: n,
              onChange: u,
              min: 0,
              max: 100,
              "aria-labelledby": "size-slider"
            }
          ),
          /* @__PURE__ */ V.jsx(Bn, { variant: "body1", children: "Edges" }),
          /* @__PURE__ */ V.jsx(
            Ji,
            {
              value: i,
              onChange: f,
              min: 0,
              max: 100,
              "aria-labelledby": "edges-slider"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ V.jsx(Bi, { onClick: l, size: "large", sx: { position: "absolute", top: 10, right: 10 }, children: /* @__PURE__ */ V.jsx(Es, {}) })
  ] });
};
export {
  Wm as default
};
