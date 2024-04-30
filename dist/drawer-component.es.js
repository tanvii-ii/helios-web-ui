import * as b from "react";
import ct, { forwardRef as xs, useContext as Ts, Children as Ss, isValidElement as Fr, cloneElement as zr, useState as Mo } from "react";
import * as Os from "react-dom";
import $r from "react-dom";
function _s(e) {
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
var Un = { exports: {} }, cr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Io;
function Rs() {
  if (Io)
    return cr;
  Io = 1;
  var e = ct, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, u) {
    var f, p = {}, m = null, x = null;
    u !== void 0 && (m = "" + u), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (x = c.ref);
    for (f in c)
      n.call(c, f) && !i.hasOwnProperty(f) && (p[f] = c[f]);
    if (l && l.defaultProps)
      for (f in c = l.defaultProps, c)
        p[f] === void 0 && (p[f] = c[f]);
    return { $$typeof: t, type: l, key: m, ref: x, props: p, _owner: o.current };
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
var Do;
function ws() {
  return Do || (Do = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ct, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), y = Symbol.iterator, h = "@@iterator";
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
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === i || oe || d === o || d === u || d === f || C || d === x || w || g || I || typeof d == "object" && d !== null && (d.$$typeof === m || d.$$typeof === p || d.$$typeof === s || d.$$typeof === l || d.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === ie || d.getModuleId !== void 0));
    }
    function V(d, R, j) {
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
            return V(d, d.render, "ForwardRef");
          case p:
            var ne = d.displayName || null;
            return ne !== null ? ne : Y(d.type) || "Memo";
          case m: {
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
    var L = Object.assign, H = 0, B, F, A, me, O, M, te;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function D() {
      {
        if (H === 0) {
          B = console.log, F = console.info, A = console.warn, me = console.error, O = console.group, M = console.groupCollapsed, te = console.groupEnd;
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
              value: F
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
      var zt = d ? d.displayName || d.name : "", Ao = zt ? Z(zt) : "";
      return typeof d == "function" && re.set(d, Ao), Ao;
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
          case p:
            return fe(d.type, R, j);
          case m: {
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
        R.$$typeof === p))
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
process.env.NODE_ENV === "production" ? Un.exports = Rs() : Un.exports = ws();
var z = Un.exports;
const Cs = {
  black: "#000",
  white: "#fff"
}, yr = Cs, Ps = {
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
}, Bt = Ps, ks = {
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
}, Ut = ks, $s = {
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
}, Wt = $s, Ns = {
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
}, Yt = Ns, js = {
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
}, qt = js, As = {
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
}, fr = As, Ms = {
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
}, Is = Ms;
function br(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: br
}, Symbol.toStringTag, { value: "Module" })), io = "$$material";
function E() {
  return E = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, E.apply(this, arguments);
}
function Re(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Zi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ls = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Vs = /* @__PURE__ */ Zi(
  function(e) {
    return Ls.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Fs(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function zs(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Bs = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(zs(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = Fs(o);
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
}(), ze = "-ms-", Hr = "-moz-", ve = "-webkit-", ao = "comm", so = "rule", lo = "decl", Us = "@import", Qi = "@keyframes", Ws = "@layer", Ys = Math.abs, nn = String.fromCharCode, qs = Object.assign;
function Hs(e, t) {
  return Le(e, 0) ^ 45 ? (((t << 2 ^ Le(e, 0)) << 2 ^ Le(e, 1)) << 2 ^ Le(e, 2)) << 2 ^ Le(e, 3) : 0;
}
function ea(e) {
  return e.trim();
}
function Ks(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ge(e, t, r) {
  return e.replace(t, r);
}
function Wn(e, t) {
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
function co(e) {
  return e.length;
}
function Nr(e, t) {
  return t.push(e), e;
}
function Gs(e, t) {
  return e.map(t).join("");
}
var on = 1, Zt = 1, ta = 0, We = 0, De = 0, er = "";
function an(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: on, column: Zt, length: s, return: "" };
}
function dr(e, t) {
  return qs(an("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Xs() {
  return De;
}
function Js() {
  return De = We > 0 ? Le(er, --We) : 0, Zt--, De === 10 && (Zt = 1, on--), De;
}
function He() {
  return De = We < ta ? Le(er, We++) : 0, Zt++, De === 10 && (Zt = 1, on++), De;
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
function ra(e) {
  return on = Zt = 1, ta = ht(er = e), We = 0, [];
}
function na(e) {
  return er = "", e;
}
function Ur(e) {
  return ea(Or(We - 1, Yn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Zs(e) {
  for (; (De = gt()) && De < 33; )
    He();
  return xr(e) > 2 || xr(De) > 3 ? "" : " ";
}
function Qs(e, t) {
  for (; --t && He() && !(De < 48 || De > 102 || De > 57 && De < 65 || De > 70 && De < 97); )
    ;
  return Or(e, Br() + (t < 6 && gt() == 32 && He() == 32));
}
function Yn(e) {
  for (; He(); )
    switch (De) {
      case e:
        return We;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yn(De);
        break;
      case 40:
        e === 41 && Yn(e);
        break;
      case 92:
        He();
        break;
    }
  return We;
}
function el(e, t) {
  for (; He() && e + De !== 47 + 10; )
    if (e + De === 42 + 42 && gt() === 47)
      break;
  return "/*" + Or(t, We - 1) + "*" + nn(e === 47 ? e : He());
}
function tl(e) {
  for (; !xr(gt()); )
    He();
  return Or(e, We);
}
function rl(e) {
  return na(Wr("", null, null, null, [""], e = ra(e), 0, [0], e));
}
function Wr(e, t, r, n, o, i, s, l, c) {
  for (var u = 0, f = 0, p = s, m = 0, x = 0, y = 0, h = 1, v = 1, _ = 1, k = 0, S = "", w = o, g = i, I = n, C = S; v; )
    switch (y = k, k = He()) {
      case 40:
        if (y != 108 && Le(C, p - 1) == 58) {
          Wn(C += ge(Ur(k), "&", "&\f"), "&\f") != -1 && (_ = -1);
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
        C += Zs(y);
        break;
      case 92:
        C += Qs(Br() - 1, 7);
        continue;
      case 47:
        switch (gt()) {
          case 42:
          case 47:
            Nr(nl(el(He(), Br()), t, r), c);
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
            _ == -1 && (C = ge(C, /\f/g, "")), x > 0 && ht(C) - p && Nr(x > 32 ? Vo(C + ";", n, r, p - 1) : Vo(ge(C, " ", "") + ";", n, r, p - 2), c);
            break;
          case 59:
            C += ";";
          default:
            if (Nr(I = Lo(C, t, r, u, f, o, l, S, w = [], g = [], p), i), k === 123)
              if (f === 0)
                Wr(C, t, I, I, w, i, p, l, g);
              else
                switch (m === 99 && Le(C, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Wr(e, I, I, n && Nr(Lo(e, I, I, 0, 0, o, l, S, o, w = [], p), g), o, g, p, l, n ? w : g);
                    break;
                  default:
                    Wr(C, I, I, I, [""], g, 0, l, g);
                }
        }
        u = f = x = 0, h = _ = 1, S = C = "", p = s;
        break;
      case 58:
        p = 1 + ht(C), x = y;
      default:
        if (h < 1) {
          if (k == 123)
            --h;
          else if (k == 125 && h++ == 0 && Js() == 125)
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
            gt() === 45 && (C += Ur(He())), m = gt(), f = p = ht(S = C += tl(Br())), k++;
            break;
          case 45:
            y === 45 && ht(C) == 2 && (h = 0);
        }
    }
  return i;
}
function Lo(e, t, r, n, o, i, s, l, c, u, f) {
  for (var p = o - 1, m = o === 0 ? i : [""], x = co(m), y = 0, h = 0, v = 0; y < n; ++y)
    for (var _ = 0, k = Er(e, p + 1, p = Ys(h = s[y])), S = e; _ < x; ++_)
      (S = ea(h > 0 ? m[_] + " " + k : ge(k, /&\f/g, m[_]))) && (c[v++] = S);
  return an(e, t, r, o === 0 ? so : l, c, u, f);
}
function nl(e, t, r) {
  return an(e, t, r, ao, nn(Xs()), Er(e, 2, -2), 0);
}
function Vo(e, t, r, n) {
  return an(e, t, r, lo, Er(e, 0, n), Er(e, n + 1, -1), n);
}
function Xt(e, t) {
  for (var r = "", n = co(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function ol(e, t, r, n) {
  switch (e.type) {
    case Ws:
      if (e.children.length)
        break;
    case Us:
    case lo:
      return e.return = e.return || e.value;
    case ao:
      return "";
    case Qi:
      return e.return = e.value + "{" + Xt(e.children, n) + "}";
    case so:
      e.value = e.props.join(",");
  }
  return ht(r = Xt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function il(e) {
  var t = co(e);
  return function(r, n, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](r, n, o, i) || "";
    return s;
  };
}
function al(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var sl = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = gt(), o === 38 && i === 12 && (r[n] = 1), !xr(i); )
    He();
  return Or(t, We);
}, ll = function(t, r) {
  var n = -1, o = 44;
  do
    switch (xr(o)) {
      case 0:
        o === 38 && gt() === 12 && (r[n] = 1), t[n] += sl(We - 1, r, n);
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
}, cl = function(t, r) {
  return na(ll(ra(t), r));
}, Fo = /* @__PURE__ */ new WeakMap(), ul = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Fo.get(n)) && !o) {
      Fo.set(t, !0);
      for (var i = [], s = cl(r, i), l = n.props, c = 0, u = 0; c < s.length; c++)
        for (var f = 0; f < l.length; f++, u++)
          t.props[u] = i[c] ? s[c].replace(/&\f/g, l[f]) : l[f] + " " + s[c];
    }
  }
}, fl = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, dl = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", pl = function(t) {
  return t.type === "comm" && t.children.indexOf(dl) > -1;
}, ml = function(t) {
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
            if (pl(u))
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
}, oa = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, hl = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!oa(r[n]))
      return !0;
  return !1;
}, zo = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, vl = function(t, r, n) {
  oa(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), zo(t)) : hl(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), zo(t)));
};
function ia(e, t) {
  switch (Hs(e, t)) {
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
            return ~Wn(e, "stretch") ? ia(ge(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Le(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Le(e, ht(e) - 3 - (~Wn(e, "!important") && 10))) {
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
var gl = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case lo:
        t.return = ia(t.value, t.length);
        break;
      case Qi:
        return Xt([dr(t, {
          value: ge(t.value, "@", "@" + ve)
        })], o);
      case so:
        if (t.length)
          return Gs(t.props, function(i) {
            switch (Ks(i, /(::plac\w+|:read-\w+)/)) {
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
}, yl = [gl], aa = function(t) {
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
  var o = t.stylisPlugins || yl;
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
  var c, u = [ul, fl];
  process.env.NODE_ENV !== "production" && u.push(ml({
    get compat() {
      return y.compat;
    }
  }), vl);
  {
    var f, p = [ol, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? f.insert(h.return) : h.value && h.type !== ao && f.insert(h.value + "{}"));
    } : al(function(h) {
      f.insert(h);
    })], m = il(u.concat(o, p)), x = function(v) {
      return Xt(rl(v), m);
    };
    c = function(v, _, k, S) {
      f = k, process.env.NODE_ENV !== "production" && _.map !== void 0 && (f = {
        insert: function(g) {
          k.insert(g + _.map);
        }
      }), x(v ? v + "{" + _.styles + "}" : _.styles), S && (y.inserted[_.name] = !0);
    };
  }
  var y = {
    key: r,
    sheet: new Bs({
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
var Bo;
function bl() {
  if (Bo)
    return be;
  Bo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
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
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case f:
                case y:
                case x:
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
  return be.AsyncMode = c, be.ConcurrentMode = u, be.ContextConsumer = l, be.ContextProvider = s, be.Element = t, be.ForwardRef = f, be.Fragment = n, be.Lazy = y, be.Memo = x, be.Portal = r, be.Profiler = i, be.StrictMode = o, be.Suspense = p, be.isAsyncMode = function(g) {
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
    return S(g) === x;
  }, be.isPortal = function(g) {
    return S(g) === r;
  }, be.isProfiler = function(g) {
    return S(g) === i;
  }, be.isStrictMode = function(g) {
    return S(g) === o;
  }, be.isSuspense = function(g) {
    return S(g) === p;
  }, be.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === p || g === m || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === x || g.$$typeof === s || g.$$typeof === l || g.$$typeof === f || g.$$typeof === v || g.$$typeof === _ || g.$$typeof === k || g.$$typeof === h);
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
var Uo;
function El() {
  return Uo || (Uo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function S(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === n || N === u || N === i || N === o || N === p || N === m || typeof N == "object" && N !== null && (N.$$typeof === y || N.$$typeof === x || N.$$typeof === s || N.$$typeof === l || N.$$typeof === f || N.$$typeof === v || N.$$typeof === _ || N.$$typeof === k || N.$$typeof === h);
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
              case p:
                return P;
              default:
                var fe = P && P.$$typeof;
                switch (fe) {
                  case l:
                  case f:
                  case y:
                  case x:
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
    var g = c, I = u, C = l, oe = s, ie = t, W = f, V = n, ee = y, Y = x, L = r, H = i, B = o, F = p, A = !1;
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
      return w(N) === x;
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
      return w(N) === p;
    }
    Ee.AsyncMode = g, Ee.ConcurrentMode = I, Ee.ContextConsumer = C, Ee.ContextProvider = oe, Ee.Element = ie, Ee.ForwardRef = W, Ee.Fragment = V, Ee.Lazy = ee, Ee.Memo = Y, Ee.Portal = L, Ee.Profiler = H, Ee.StrictMode = B, Ee.Suspense = F, Ee.isAsyncMode = me, Ee.isConcurrentMode = O, Ee.isContextConsumer = M, Ee.isContextProvider = te, Ee.isElement = K, Ee.isForwardRef = D, Ee.isFragment = J, Ee.isLazy = q, Ee.isMemo = G, Ee.isPortal = Z, Ee.isProfiler = X, Ee.isStrictMode = re, Ee.isSuspense = Oe, Ee.isValidElementType = S, Ee.typeOf = w;
  }()), Ee;
}
var Wo;
function uo() {
  return Wo || (Wo = 1, process.env.NODE_ENV === "production" ? jr.exports = bl() : jr.exports = El()), jr.exports;
}
var sa = uo(), xl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Tl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, la = {};
la[sa.ForwardRef] = xl;
la[sa.Memo] = Tl;
var Sl = !0;
function fo(e, t, r) {
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
  Sl === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
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
function Ol(e) {
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
var _l = {
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
}, Yo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Rl = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", wl = /[A-Z]|^ms/g, ca = /_EMO_([^_]+?)_([^]*?)_EMO_/g, po = function(t) {
  return t.charCodeAt(1) === 45;
}, qo = function(t) {
  return t != null && typeof t != "boolean";
}, kn = /* @__PURE__ */ Zi(function(e) {
  return po(e) ? e : e.replace(wl, "-$&").toLowerCase();
}), Kr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ca, function(n, o, i) {
          return lt = {
            name: o,
            styles: i,
            next: lt
          }, o;
        });
  }
  return _l[t] !== 1 && !po(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var Cl = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Pl = ["normal", "none", "initial", "inherit", "unset"], kl = Kr, $l = /^-ms-/, Nl = /-(.)/g, Ho = {};
  Kr = function(t, r) {
    if (t === "content" && (typeof r != "string" || Pl.indexOf(r) === -1 && !Cl.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = kl(t, r);
    return n !== "" && !po(t) && t.indexOf("-") !== -1 && Ho[t] === void 0 && (Ho[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace($l, "ms-").replace(Nl, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var ua = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Tr(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(ua);
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
      return jl(e, t, r);
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
        var l = [], c = r.replace(ca, function(f, p, m) {
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
function jl(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Tr(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : qo(s) && (n += kn(i) + ":" + Kr(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(ua);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var l = 0; l < s.length; l++)
            qo(s[l]) && (n += kn(i) + ":" + Kr(i, s[l]) + ";");
        else {
          var c = Tr(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += kn(i) + ":" + c + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Rl), n += i + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
var Ko = /label:\s*([^\s;\n{]+)\s*(;|$)/g, fa;
process.env.NODE_ENV !== "production" && (fa = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var lt, Qt = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  lt = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (o = !1, i += Tr(n, r, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(Yo), i += s[0]);
  for (var l = 1; l < t.length; l++)
    i += Tr(n, r, t[l]), o && (process.env.NODE_ENV !== "production" && s[l] === void 0 && console.error(Yo), i += s[l]);
  var c;
  process.env.NODE_ENV !== "production" && (i = i.replace(fa, function(m) {
    return c = m, "";
  })), Ko.lastIndex = 0;
  for (var u = "", f; (f = Ko.exec(i)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    f[1];
  var p = Ol(i) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: p,
    styles: i,
    map: c,
    next: lt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: p,
    styles: i,
    next: lt
  };
}, Al = function(t) {
  return t();
}, da = b["useInsertionEffect"] ? b["useInsertionEffect"] : !1, mo = da || Al, Go = da || b.useLayoutEffect, Ml = {}.hasOwnProperty, ho = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ aa({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (ho.displayName = "EmotionCacheContext");
var Il = ho.Provider, cn = function(t) {
  return /* @__PURE__ */ xs(function(r, n) {
    var o = Ts(ho);
    return t(r, o, n);
  });
}, Dt = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Dt.displayName = "EmotionThemeContext");
var Xo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Jo = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Dl = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return sn(r, n, o), mo(function() {
    return ln(r, n, o);
  }), null;
}, Ll = /* @__PURE__ */ cn(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Xo], i = [n], s = "";
  typeof e.className == "string" ? s = fo(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = Qt(i, void 0, b.useContext(Dt));
  if (process.env.NODE_ENV !== "production" && l.name.indexOf("-") === -1) {
    var c = e[Jo];
    c && (l = Qt([l, "label:" + c + ";"]));
  }
  s += t.key + "-" + l.name;
  var u = {};
  for (var f in e)
    Ml.call(e, f) && f !== "css" && f !== Xo && (process.env.NODE_ENV === "production" || f !== Jo) && (u[f] = e[f]);
  return u.ref = r, u.className = s, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Dl, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ b.createElement(o, u));
});
process.env.NODE_ENV !== "production" && (Ll.displayName = "EmotionCssPropInternal");
var $n = { exports: {} }, Zo;
function pa() {
  return Zo || (Zo = 1, function(e) {
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
  }($n)), $n.exports;
}
pa();
var Vl = {
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
}, Qo = !1, ma = /* @__PURE__ */ cn(function(e, t) {
  process.env.NODE_ENV !== "production" && !Qo && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Qo = !0);
  var r = e.styles, n = Qt([r], void 0, b.useContext(Dt)), o = b.useRef();
  return Go(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", i), s.hydrate([c])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), Go(function() {
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
process.env.NODE_ENV !== "production" && (ma.displayName = "EmotionGlobal");
function ha() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Qt(t);
}
var un = function() {
  var t = ha.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Fl = function e(t) {
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
function zl(e, t, r) {
  var n = [], o = fo(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var Bl = function(t) {
  var r = t.cache, n = t.serializedArr;
  return mo(function() {
    for (var o = 0; o < n.length; o++)
      ln(r, n[o], !1);
  }), null;
}, Ul = /* @__PURE__ */ cn(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, f = new Array(u), p = 0; p < u; p++)
      f[p] = arguments[p];
    var m = Qt(f, t.registered);
    return n.push(m), sn(t, m, !1), t.key + "-" + m.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, f = new Array(u), p = 0; p < u; p++)
      f[p] = arguments[p];
    return zl(t.registered, o, Fl(f));
  }, s = {
    css: o,
    cx: i,
    theme: b.useContext(Dt)
  }, l = e.children(s);
  return r = !0, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Bl, {
    cache: t,
    serializedArr: n
  }), l);
});
process.env.NODE_ENV !== "production" && (Ul.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var ei = !0, Wl = typeof jest < "u" || typeof vi < "u";
  if (ei && !Wl) {
    var ti = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : ei ? window : global
    ), ri = "__EMOTION_REACT_" + Vl.version.split(".")[0] + "__";
    ti[ri] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), ti[ri] = !0;
  }
}
var Yl = Vs, ql = function(t) {
  return t !== "theme";
}, ni = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Yl : ql;
}, oi = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, ii = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Hl = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return sn(r, n, o), mo(function() {
    return ln(r, n, o);
  }), null;
}, Kl = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var l = oi(t, r, n), c = l || ni(o), u = !c("as");
  return function() {
    var f = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      p.push.apply(p, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(ii), p.push(f[0][0]);
      for (var m = f.length, x = 1; x < m; x++)
        process.env.NODE_ENV !== "production" && f[0][x] === void 0 && console.error(ii), p.push(f[x], f[0][x]);
    }
    var y = cn(function(h, v, _) {
      var k = u && h.as || o, S = "", w = [], g = h;
      if (h.theme == null) {
        g = {};
        for (var I in h)
          g[I] = h[I];
        g.theme = b.useContext(Dt);
      }
      typeof h.className == "string" ? S = fo(v.registered, w, h.className) : h.className != null && (S = h.className + " ");
      var C = Qt(p.concat(w), v.registered, g);
      S += v.key + "-" + C.name, s !== void 0 && (S += " " + s);
      var oe = u && l === void 0 ? ni(k) : c, ie = {};
      for (var W in h)
        u && W === "as" || // $FlowFixMe
        oe(W) && (ie[W] = h[W]);
      return ie.className = S, ie.ref = _, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Hl, {
        cache: v,
        serialized: C,
        isStringTag: typeof k == "string"
      }), /* @__PURE__ */ b.createElement(k, ie));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = p, y.__emotion_forwardProp = l, Object.defineProperty(y, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), y.withComponent = function(h, v) {
      return e(h, E({}, r, v, {
        shouldForwardProp: oi(y, v, !0)
      })).apply(void 0, p);
    }, y;
  };
}, Gl = [
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
], qn = Kl.bind();
Gl.forEach(function(e) {
  qn[e] = qn(e);
});
var Hn = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Nn, ai;
function Xl() {
  if (ai)
    return Nn;
  ai = 1;
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
  return Nn = o() ? Object.assign : function(i, s) {
    for (var l, c = n(i), u, f = 1; f < arguments.length; f++) {
      l = Object(arguments[f]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        u = e(l);
        for (var m = 0; m < u.length; m++)
          r.call(l, u[m]) && (c[u[m]] = l[u[m]]);
      }
    }
    return c;
  }, Nn;
}
var jn, si;
function vo() {
  if (si)
    return jn;
  si = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jn = e, jn;
}
var An, li;
function va() {
  return li || (li = 1, An = Function.call.bind(Object.prototype.hasOwnProperty)), An;
}
var Mn, ci;
function Jl() {
  if (ci)
    return Mn;
  ci = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = vo(), r = {}, n = va();
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
          var p;
          try {
            if (typeof i[f] != "function") {
              var m = Error(
                (c || "React class") + ": " + l + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = i[f](s, f, c, l, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Mn = o, Mn;
}
var In, ui;
function Zl() {
  if (ui)
    return In;
  ui = 1;
  var e = uo(), t = Xl(), r = vo(), n = va(), o = Jl(), i = function() {
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
  return In = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(O) {
      var M = O && (u && O[u] || O[f]);
      if (typeof M == "function")
        return M;
    }
    var m = "<<anonymous>>", x = {
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
        if (Z = Z || m, re = re || G, Oe !== r) {
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
          var re = F(Z);
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
          var G = O.name || m, Z = me(te[K]);
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
          var pe = F(N);
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
    function V(O, M, te, K, D) {
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
            return V(D, J, q, X, F(re));
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
            return V(D, J, q, re, F(Oe));
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
          var M = p(O);
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
    function F(O) {
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
      var M = F(O);
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
      return !O.constructor || !O.constructor.name ? m : O.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, In;
}
var Dn, fi;
function Ql() {
  if (fi)
    return Dn;
  fi = 1;
  var e = vo();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Dn = function() {
    function n(s, l, c, u, f, p) {
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
  }, Dn;
}
if (process.env.NODE_ENV !== "production") {
  var ec = uo(), tc = !0;
  Hn.exports = Zl()(ec.isElement, tc);
} else
  Hn.exports = Ql()();
var rc = Hn.exports;
const a = /* @__PURE__ */ _s(rc);
let Kn;
typeof document == "object" && (Kn = aa({
  key: "css",
  prepend: !0
}));
function ga(e) {
  const {
    injectFirst: t,
    children: r
  } = e;
  return t && Kn ? /* @__PURE__ */ z.jsx(Il, {
    value: Kn,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (ga.propTypes = {
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
function nc(e) {
  return e == null || Object.keys(e).length === 0;
}
function ya(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(nc(o) ? r : o) : t;
  return /* @__PURE__ */ z.jsx(ma, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (ya.propTypes = {
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
function oc(e, t) {
  const r = qn(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const ic = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: ya,
  StyledEngineProvider: ga,
  ThemeContext: Dt,
  css: ha,
  default: oc,
  internal_processStyles: ic,
  keyframes: un
}, Symbol.toStringTag, { value: "Module" }));
function wt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ba(e) {
  if (!wt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = ba(e[r]);
  }), t;
}
function yt(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? E({}, e) : e;
  return wt(e) && wt(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (wt(t[o]) && o in e && wt(e[o]) ? n[o] = yt(e[o], t[o], r) : r.clone ? n[o] = wt(t[o]) ? ba(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
const sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yt,
  isPlainObject: wt
}, Symbol.toStringTag, { value: "Module" })), lc = ["values", "unit", "step"], cc = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => E({}, r, {
    [n.key]: n.val
  }), {});
};
function Ea(e) {
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
  } = e, o = Re(e, lc), i = cc(t), s = Object.keys(i);
  function l(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function c(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function u(m, x) {
    const y = s.indexOf(x);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : x) - n / 100}${r})`;
  }
  function f(m) {
    return s.indexOf(m) + 1 < s.length ? u(m, s[s.indexOf(m) + 1]) : l(m);
  }
  function p(m) {
    const x = s.indexOf(m);
    return x === 0 ? l(s[1]) : x === s.length - 1 ? c(s[x]) : u(m, s[s.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return E({
    keys: s,
    values: i,
    up: l,
    down: c,
    between: u,
    only: f,
    not: p,
    unit: r
  }, o);
}
const uc = {
  borderRadius: 4
}, fc = uc, dc = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.string, a.object, a.array]) : {}, Pt = dc;
function mr(e, t) {
  return t ? yt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const go = {
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
}, di = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${go[e]}px)`
};
function Tt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || di;
    return t.reduce((s, l, c) => (s[i.up(i.keys[c])] = r(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || di;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(i.values || go).indexOf(l) !== -1) {
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
function pc(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function mc(e, t) {
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
const hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    return Tt(s, l, (p) => {
      let m = Gr(u, o, p);
      return p === m && typeof p == "string" && (m = Gr(u, o, `${t}${p === "default" ? "" : Se(p)}`, p)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Pt
  } : {}, i.filterProps = [t], i;
}
function vc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const gc = {
  m: "margin",
  p: "padding"
}, yc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, pi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, bc = vc((e) => {
  if (e.length > 2)
    if (pi[e])
      e = pi[e];
    else
      return [e];
  const [t, r] = e.split(""), n = gc[t], o = yc[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), dn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], pn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ec = [...dn, ...pn];
function _r(e, t, r, n) {
  var o;
  const i = (o = fn(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function xa(e) {
  return _r(e, "spacing", 8, "spacing");
}
function Rr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function xc(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Rr(t, r), n), {});
}
function Tc(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = bc(r), i = xc(o, n), s = e[r];
  return Tt(e, s, i);
}
function Ta(e, t) {
  const r = xa(e.theme);
  return Object.keys(e).map((n) => Tc(e, t, n, r)).reduce(mr, {});
}
function $e(e) {
  return Ta(e, dn);
}
$e.propTypes = process.env.NODE_ENV !== "production" ? dn.reduce((e, t) => (e[t] = Pt, e), {}) : {};
$e.filterProps = dn;
function Ne(e) {
  return Ta(e, pn);
}
Ne.propTypes = process.env.NODE_ENV !== "production" ? pn.reduce((e, t) => (e[t] = Pt, e), {}) : {};
Ne.filterProps = pn;
process.env.NODE_ENV !== "production" && Ec.reduce((e, t) => (e[t] = Pt, e), {});
function Sc(e = 8) {
  if (e.mui)
    return e;
  const t = xa({
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
const Oc = ot("border", tt), _c = ot("borderTop", tt), Rc = ot("borderRight", tt), wc = ot("borderBottom", tt), Cc = ot("borderLeft", tt), Pc = ot("borderColor"), kc = ot("borderTopColor"), $c = ot("borderRightColor"), Nc = ot("borderBottomColor"), jc = ot("borderLeftColor"), Ac = ot("outline", tt), Mc = ot("outlineColor"), hn = (e) => {
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
mn(Oc, _c, Rc, wc, Cc, Pc, kc, $c, Nc, jc, hn, Ac, Mc);
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
const Ic = Ae({
  prop: "gridColumn"
}), Dc = Ae({
  prop: "gridRow"
}), Lc = Ae({
  prop: "gridAutoFlow"
}), Vc = Ae({
  prop: "gridAutoColumns"
}), Fc = Ae({
  prop: "gridAutoRows"
}), zc = Ae({
  prop: "gridTemplateColumns"
}), Bc = Ae({
  prop: "gridTemplateRows"
}), Uc = Ae({
  prop: "gridTemplateAreas"
}), Wc = Ae({
  prop: "gridArea"
});
mn(vn, gn, yn, Ic, Dc, Lc, Vc, Fc, zc, Bc, Uc, Wc);
function Jt(e, t) {
  return t === "grey" ? t : e;
}
const Yc = Ae({
  prop: "color",
  themeKey: "palette",
  transform: Jt
}), qc = Ae({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Jt
}), Hc = Ae({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Jt
});
mn(Yc, qc, Hc);
function qe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Kc = Ae({
  prop: "width",
  transform: qe
}), yo = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || go[r];
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
yo.filterProps = ["maxWidth"];
const Gc = Ae({
  prop: "minWidth",
  transform: qe
}), Xc = Ae({
  prop: "height",
  transform: qe
}), Jc = Ae({
  prop: "maxHeight",
  transform: qe
}), Zc = Ae({
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
const Qc = Ae({
  prop: "boxSizing"
});
mn(Kc, yo, Gc, Xc, Jc, Zc, Qc);
const eu = {
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
    style: yo
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
}, wr = eu;
function tu(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function ru(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sa() {
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
      style: p
    } = l;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = fn(o, u) || {};
    return p ? p(s) : Tt(s, n, (y) => {
      let h = Gr(m, f, y);
      return y === h && typeof y == "string" && (h = Gr(m, f, `${r}${y === "default" ? "" : Se(y)}`, y)), c === !1 ? h : {
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
      const f = pc(i.breakpoints), p = Object.keys(f);
      let m = f;
      return Object.keys(u).forEach((x) => {
        const y = ru(u[x], i);
        if (y != null)
          if (typeof y == "object")
            if (s[x])
              m = mr(m, e(x, y, i, s));
            else {
              const h = Tt({
                theme: i
              }, y, (v) => ({
                [x]: v
              }));
              tu(h, y) ? m[x] = t({
                sx: y,
                theme: i
              }) : m = mr(m, h);
            }
          else
            m = mr(m, e(x, y, i, s));
      }), mc(p, m);
    }
    return Array.isArray(o) ? o.map(l) : l(o);
  }
  return t;
}
const Oa = Sa();
Oa.filterProps = ["sx"];
const bo = Oa;
function _a(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const nu = ["breakpoints", "palette", "spacing", "shape"];
function Eo(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = Re(e, nu), l = Ea(r), c = Sc(o);
  let u = yt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: E({
      mode: "light"
    }, n),
    spacing: c,
    shape: E({}, fc, i)
  }, s);
  return u.applyStyles = _a, u = t.reduce((f, p) => yt(f, p), u), u.unstable_sxConfig = E({}, wr, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return bo({
      sx: p,
      theme: this
    });
  }, u;
}
const ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eo,
  private_createBreakpoints: Ea,
  unstable_applyStyles: _a
}, Symbol.toStringTag, { value: "Module" }));
function iu(e) {
  return Object.keys(e).length === 0;
}
function au(e = null) {
  const t = b.useContext(Dt);
  return !t || iu(t) ? e : t;
}
const su = Eo();
function Ra(e = su) {
  return au(e);
}
const lu = ["sx"], cu = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : wr;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function wa(e) {
  const {
    sx: t
  } = e, r = Re(e, lu), {
    systemProps: n,
    otherProps: o
  } = cu(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...s) => {
    const l = t(...s);
    return wt(l) ? E({}, n, l) : n;
  } : i = E({}, n, t), E({}, o, {
    sx: i
  });
}
const uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bo,
  extendSxProp: wa,
  unstable_createStyleFunctionSx: Sa,
  unstable_defaultSxConfig: wr
}, Symbol.toStringTag, { value: "Module" })), mi = (e) => e, fu = () => {
  let e = mi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = mi;
    }
  };
}, du = fu(), Ca = du;
function Pa(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Pa(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function ye() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Pa(e)) && (n && (n += " "), n += t);
  return n;
}
const pu = {
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
  const n = pu[t];
  return n ? `${r}-${n}` : `${Ca.generate(e)}-${t}`;
}
function it(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Ge(e, o, r);
  }), n;
}
var Gn = { exports: {} }, xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hi;
function mu() {
  if (hi)
    return xe;
  hi = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), y;
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
                case m:
                case p:
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
  return xe.ContextConsumer = s, xe.ContextProvider = i, xe.Element = e, xe.ForwardRef = c, xe.Fragment = r, xe.Lazy = m, xe.Memo = p, xe.Portal = t, xe.Profiler = o, xe.StrictMode = n, xe.Suspense = u, xe.SuspenseList = f, xe.isAsyncMode = function() {
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
    return h(v) === m;
  }, xe.isMemo = function(v) {
    return h(v) === p;
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
    return typeof v == "string" || typeof v == "function" || v === r || v === o || v === n || v === u || v === f || v === x || typeof v == "object" && v !== null && (v.$$typeof === m || v.$$typeof === p || v.$$typeof === i || v.$$typeof === s || v.$$typeof === c || v.$$typeof === y || v.getModuleId !== void 0);
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
var gi;
function hu() {
  return gi || (gi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), y = !1, h = !1, v = !1, _ = !1, k = !1, S;
    S = Symbol.for("react.module.reference");
    function w(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === r || P === o || k || P === n || P === u || P === f || _ || P === x || y || h || v || typeof P == "object" && P !== null && (P.$$typeof === m || P.$$typeof === p || P.$$typeof === i || P.$$typeof === s || P.$$typeof === c || // This needs to include all possible module reference object
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
                  case m:
                  case p:
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
    var I = s, C = i, oe = e, ie = c, W = r, V = m, ee = p, Y = t, L = o, H = n, B = u, F = f, A = !1, me = !1;
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
      return g(P) === m;
    }
    function Z(P) {
      return g(P) === p;
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
    Te.ContextConsumer = I, Te.ContextProvider = C, Te.Element = oe, Te.ForwardRef = ie, Te.Fragment = W, Te.Lazy = V, Te.Memo = ee, Te.Portal = Y, Te.Profiler = L, Te.StrictMode = H, Te.Suspense = B, Te.SuspenseList = F, Te.isAsyncMode = O, Te.isConcurrentMode = M, Te.isContextConsumer = te, Te.isContextProvider = K, Te.isElement = D, Te.isForwardRef = J, Te.isFragment = q, Te.isLazy = G, Te.isMemo = Z, Te.isPortal = X, Te.isProfiler = re, Te.isStrictMode = Oe, Te.isSuspense = N, Te.isSuspenseList = pe, Te.isValidElementType = w, Te.typeOf = g;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Gn.exports = mu() : Gn.exports = hu();
var yi = Gn.exports;
const vu = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function ka(e) {
  const t = `${e}`.match(vu);
  return t && t[1] || "";
}
function $a(e, t = "") {
  return e.displayName || e.name || ka(e) || t;
}
function bi(e, t, r) {
  const n = $a(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function gu(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return $a(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case yi.ForwardRef:
          return bi(e, e.render, "ForwardRef");
        case yi.Memo:
          return bi(e, e.type, "memo");
        default:
          return;
      }
  }
}
const yu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gu,
  getFunctionName: ka
}, Symbol.toStringTag, { value: "Module" }));
function Na(e, t) {
  const r = E({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = E({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = E({}, i), Object.keys(o).forEach((s) => {
        r[n][s] = Na(o[s], i[s]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function bu(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Na(t.components[r].defaultProps, n);
}
function Eu({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = Ra(r);
  return n && (o = o[n] || o), bu({
    theme: o,
    name: t,
    props: e
  });
}
const xu = typeof window < "u" ? b.useLayoutEffect : b.useEffect, Sr = xu;
function Kt(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const Tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kt
}, Symbol.toStringTag, { value: "Module" }));
function Ct(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Su(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ja(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = i.type;
  return typeof c == "function" && !Su(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Aa = Ct(a.element, ja);
Aa.isRequired = Ct(a.element.isRequired, ja);
const bn = Aa;
function Ou(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function _u(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !Ou(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ru = Ct(a.elementType, _u), wu = "exact-prop: ​";
function Ma(e) {
  return process.env.NODE_ENV === "production" ? e : E({}, e, {
    [wu]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function xo(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const Cu = a.oneOfType([a.func, a.object]), Pu = Cu;
function Xn(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function Ia(e, t = 166) {
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
function ku(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, o, i, s) => {
    const l = o || "<<anonymous>>", c = s || n;
    return typeof r[n] < "u" ? new Error(`The ${i} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function $u(e, t) {
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
function Nu(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? E({}, t.propTypes) : null;
  return (o) => (i, s, l, c, u, ...f) => {
    const p = u || s, m = r == null ? void 0 : r[p];
    if (m) {
      const x = m(i, s, l, c, u, ...f);
      if (x)
        return x;
    }
    return typeof i[s] < "u" && !i[o] ? new Error(`The prop \`${p}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function Xr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Ei = 0;
function ju(e) {
  const [t, r] = b.useState(e), n = e || t;
  return b.useEffect(() => {
    t == null && (Ei += 1, r(`mui-${Ei}`));
  }, [t]), n;
}
const xi = b["useId".toString()];
function Au(e) {
  if (xi !== void 0) {
    const t = xi();
    return e ?? t;
  }
  return ju(e);
}
function Mu(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function Da({
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
const Ti = {};
function Iu(e, t) {
  const r = b.useRef(Ti);
  return r.current === Ti && (r.current = e(t)), r;
}
const Du = [];
function Lu(e) {
  b.useEffect(e, Du);
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
function Vu() {
  const e = Iu(En.create).current;
  return Lu(e.disposeEffect), e;
}
let xn = !0, Jn = !1;
const Fu = new En(), zu = {
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
function Bu(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && zu[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Uu(e) {
  e.metaKey || e.altKey || e.ctrlKey || (xn = !0);
}
function Ln() {
  xn = !1;
}
function Wu() {
  this.visibilityState === "hidden" && Jn && (xn = !0);
}
function Yu(e) {
  e.addEventListener("keydown", Uu, !0), e.addEventListener("mousedown", Ln, !0), e.addEventListener("pointerdown", Ln, !0), e.addEventListener("touchstart", Ln, !0), e.addEventListener("visibilitychange", Wu, !0);
}
function qu(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return xn || Bu(t);
}
function To() {
  const e = b.useCallback((o) => {
    o != null && Yu(o.ownerDocument);
  }, []), t = b.useRef(!1);
  function r() {
    return t.current ? (Jn = !0, Fu.start(100, () => {
      Jn = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return qu(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function Hu(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const Ku = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
}, Gu = Ku;
function Xu(e) {
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
function Ju(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Zu = Number.isInteger || Ju;
function La(e, t, r, n) {
  const o = e[t];
  if (o == null || !Zu(o)) {
    const i = Xu(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${i}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Va(e, t, ...r) {
  return e[t] === void 0 ? null : La(e, t, ...r);
}
function Zn() {
  return null;
}
Va.isRequired = La;
Zn.isRequired = Zn;
const Fa = process.env.NODE_ENV === "production" ? Zn : Va;
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
const Qu = /* @__PURE__ */ b.createContext();
process.env.NODE_ENV !== "production" && (a.node, a.bool);
const za = () => {
  const e = b.useContext(Qu);
  return e ?? !1;
};
function ef(e, t) {
  return E({
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
var Me = {}, Ba = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Ba);
var Tn = Ba.exports;
const tf = /* @__PURE__ */ St(Ds), rf = /* @__PURE__ */ St(Tu);
var Ua = Tn;
Object.defineProperty(Me, "__esModule", {
  value: !0
});
var It = Me.alpha = Ha;
Me.blend = pf;
Me.colorChannel = void 0;
var Qn = Me.darken = Oo;
Me.decomposeColor = nt;
Me.emphasize = df;
var Si = Me.getContrastRatio = lf;
Me.getLuminance = Jr;
Me.hexToRgb = Wa;
Me.hslToRgb = qa;
var eo = Me.lighten = _o;
Me.private_safeAlpha = cf;
Me.private_safeColorChannel = void 0;
Me.private_safeDarken = uf;
Me.private_safeEmphasize = Ka;
Me.private_safeLighten = ff;
Me.recomposeColor = rr;
Me.rgbToHex = sf;
var Oi = Ua(tf), nf = Ua(rf);
function So(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, nf.default)(e, t, r);
}
function Wa(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function of(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function nt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return nt(Wa(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Oi.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Oi.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Ya = (e) => {
  const t = nt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
Me.colorChannel = Ya;
const af = (e, t) => {
  try {
    return Ya(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
Me.private_safeColorChannel = af;
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
function sf(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = nt(e);
  return `#${t.map((r, n) => of(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function qa(e) {
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
  let t = e.type === "hsl" || e.type === "hsla" ? nt(qa(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function lf(e, t) {
  const r = Jr(e), n = Jr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ha(e, t) {
  return e = nt(e), t = So(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, rr(e);
}
function cf(e, t, r) {
  try {
    return Ha(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Oo(e, t) {
  if (e = nt(e), t = So(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return rr(e);
}
function uf(e, t, r) {
  try {
    return Oo(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function _o(e, t) {
  if (e = nt(e), t = So(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return rr(e);
}
function ff(e, t, r) {
  try {
    return _o(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function df(e, t = 0.15) {
  return Jr(e) > 0.5 ? Oo(e, t) : _o(e, t);
}
function Ka(e, t, r) {
  try {
    return Ka(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function pf(e, t, r, n = 1) {
  const o = (c, u) => Math.round((c ** (1 / n) * (1 - r) + u ** (1 / n) * r) ** n), i = nt(e), s = nt(t), l = [o(i.values[0], s.values[0]), o(i.values[1], s.values[1]), o(i.values[2], s.values[2])];
  return rr({
    type: "rgb",
    values: l
  });
}
const mf = ["mode", "contrastThreshold", "tonalOffset"], _i = {
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
}, Vn = {
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
function Ri(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = eo(e.main, o) : t === "dark" && (e.dark = Qn(e.main, i)));
}
function hf(e = "light") {
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
function vf(e = "light") {
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
function gf(e = "light") {
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
function yf(e = "light") {
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
function bf(e = "light") {
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
function Ef(e = "light") {
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
function xf(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = Re(e, mf), i = e.primary || hf(t), s = e.secondary || vf(t), l = e.error || gf(t), c = e.info || yf(t), u = e.success || bf(t), f = e.warning || Ef(t);
  function p(h) {
    const v = Si(h, Vn.text.primary) >= r ? Vn.text.primary : _i.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const _ = Si(h, v);
      _ < 3 && console.error([`MUI: The contrast ratio of ${_}:1 for ${v} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const m = ({
    color: h,
    name: v,
    mainShade: _ = 500,
    lightShade: k = 300,
    darkShade: S = 700
  }) => {
    if (h = E({}, h), !h.main && h[_] && (h.main = h[_]), !h.hasOwnProperty("main"))
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
    return Ri(h, "light", k, n), Ri(h, "dark", S, n), h.contrastText || (h.contrastText = p(h.main)), h;
  }, x = {
    dark: Vn,
    light: _i
  };
  return process.env.NODE_ENV !== "production" && (x[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), yt(E({
    // A collection of common colors.
    common: E({}, yr),
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
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: f,
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
    grey: Is,
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
  }, x[t]), o);
}
const Tf = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Sf(e) {
  return Math.round(e * 1e5) / 1e5;
}
const wi = {
  textTransform: "uppercase"
}, Ci = '"Roboto", "Helvetica", "Arial", sans-serif';
function Of(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Ci,
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
    pxToRem: p
  } = r, m = Re(r, Tf);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const x = o / 14, y = p || ((_) => `${_ / u * x}rem`), h = (_, k, S, w, g) => E({
    fontFamily: n,
    fontWeight: _,
    fontSize: y(k),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S
  }, n === Ci ? {
    letterSpacing: `${Sf(w / k)}em`
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
    button: h(l, 14, 1.75, 0.4, wi),
    caption: h(s, 12, 1.66, 0.4),
    overline: h(s, 12, 2.66, 1, wi),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return yt(E({
    htmlFontSize: u,
    pxToRem: y,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: c
  }, v), m, {
    clone: !1
    // No need to clone deep
  });
}
const _f = 0.2, Rf = 0.14, wf = 0.12;
function we(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${_f})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Rf})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${wf})`].join(",");
}
const Cf = ["none", we(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), we(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), we(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), we(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), we(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), we(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), we(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), we(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), we(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), we(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), we(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), we(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), we(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), we(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), we(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), we(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), we(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), we(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), we(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), we(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), we(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), we(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), we(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), we(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Pf = Cf, kf = ["duration", "easing", "delay"], $f = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Nf = {
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
function Pi(e) {
  return `${Math.round(e)}ms`;
}
function jf(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Af(e) {
  const t = E({}, $f, e.easing), r = E({}, Nf, e.duration);
  return E({
    getAutoHeightDuration: jf,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = i, u = Re(i, kf);
      if (process.env.NODE_ENV !== "production") {
        const f = (m) => typeof m == "string", p = (m) => !isNaN(parseFloat(m));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !f(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : Pi(s)} ${l} ${typeof c == "string" ? c : Pi(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const Mf = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, If = Mf, Df = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Lf(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = Re(e, Df);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : br(18));
  const l = xf(n), c = Eo(e);
  let u = yt(c, {
    mixins: ef(c.breakpoints, r),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Pf.slice(),
    typography: Of(l, i),
    transitions: Af(o),
    zIndex: E({}, If)
  });
  if (u = yt(u, s), u = t.reduce((f, p) => yt(f, p), u), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (m, x) => {
      let y;
      for (y in m) {
        const h = m[y];
        if (f.indexOf(y) !== -1 && Object.keys(h).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Ge("", y);
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
  return u.unstable_sxConfig = E({}, wr, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return bo({
      sx: p,
      theme: this
    });
  }, u;
}
const Vf = Lf(), Ro = Vf;
function Sn() {
  const e = Ra(Ro);
  return process.env.NODE_ENV !== "production" && b.useDebugValue(e), e[io] || e;
}
function at({
  props: e,
  name: t
}) {
  return Eu({
    props: e,
    name: t,
    defaultTheme: Ro,
    themeId: io
  });
}
var Cr = {}, Fn = { exports: {} }, ki;
function Ff() {
  return ki || (ki = 1, function(e) {
    function t(r, n) {
      if (r == null)
        return {};
      var o = {}, i = Object.keys(r), s, l;
      for (l = 0; l < i.length; l++)
        s = i[l], !(n.indexOf(s) >= 0) && (o[s] = r[s]);
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Fn)), Fn.exports;
}
const zf = /* @__PURE__ */ St(ac), Bf = /* @__PURE__ */ St(sc), Uf = /* @__PURE__ */ St(hc), Wf = /* @__PURE__ */ St(yu), Yf = /* @__PURE__ */ St(ou), qf = /* @__PURE__ */ St(uu);
var nr = Tn;
Object.defineProperty(Cr, "__esModule", {
  value: !0
});
var Hf = Cr.default = sd;
Cr.shouldForwardProp = Yr;
Cr.systemDefaultTheme = void 0;
var Qe = nr(pa()), to = nr(Ff()), $i = rd(zf), Kf = Bf, Gf = nr(Uf), Xf = nr(Wf), Jf = nr(Yf), Zf = nr(qf);
const Qf = ["ownerState"], ed = ["variants"], td = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Ga(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Ga = function(n) {
    return n ? r : t;
  })(e);
}
function rd(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Ga(t);
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
function nd(e) {
  return Object.keys(e).length === 0;
}
function od(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Yr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const id = Cr.systemDefaultTheme = (0, Jf.default)(), Ni = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ar({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return nd(t) ? e : t[r] || t;
}
function ad(e) {
  return e ? (t, r) => r[e] : null;
}
function qr(e, t) {
  let {
    ownerState: r
  } = t, n = (0, to.default)(t, Qf);
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
    let l = (0, to.default)(o, ed);
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
function sd(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = id,
    rootShouldForwardProp: n = Yr,
    slotShouldForwardProp: o = Yr
  } = e, i = (s) => (0, Zf.default)((0, Qe.default)({}, s, {
    theme: Ar((0, Qe.default)({}, s, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, l = {}) => {
    (0, $i.internal_processStyles)(s, (g) => g.filter((I) => !(I != null && I.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: f,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = ad(Ni(u))
    } = l, x = (0, to.default)(l, td), y = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), h = p || !1;
    let v;
    process.env.NODE_ENV !== "production" && c && (v = `${c}-${Ni(u || "Root")}`);
    let _ = Yr;
    u === "Root" || u === "root" ? _ = n : u ? _ = o : od(s) && (_ = void 0);
    const k = (0, $i.default)(s, (0, Qe.default)({
      shouldForwardProp: _,
      label: v
    }, x)), S = (g) => typeof g == "function" && g.__emotion_real !== g || (0, Kf.isPlainObject)(g) ? (I) => qr(g, (0, Qe.default)({}, I, {
      theme: Ar({
        theme: I.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : g, w = (g, ...I) => {
      let C = S(g);
      const oe = I ? I.map(S) : [];
      c && m && oe.push((V) => {
        const ee = Ar((0, Qe.default)({}, V, {
          defaultTheme: r,
          themeId: t
        }));
        if (!ee.components || !ee.components[c] || !ee.components[c].styleOverrides)
          return null;
        const Y = ee.components[c].styleOverrides, L = {};
        return Object.entries(Y).forEach(([H, B]) => {
          L[H] = qr(B, (0, Qe.default)({}, V, {
            theme: ee
          }));
        }), m(V, L);
      }), c && !y && oe.push((V) => {
        var ee;
        const Y = Ar((0, Qe.default)({}, V, {
          defaultTheme: r,
          themeId: t
        })), L = Y == null || (ee = Y.components) == null || (ee = ee[c]) == null ? void 0 : ee.variants;
        return qr({
          variants: L
        }, (0, Qe.default)({}, V, {
          theme: Y
        }));
      }), h || oe.push(i);
      const ie = oe.length - I.length;
      if (Array.isArray(g) && ie > 0) {
        const V = new Array(ie).fill("");
        C = [...g, ...V], C.raw = [...g.raw, ...V];
      }
      const W = k(C, ...oe);
      if (process.env.NODE_ENV !== "production") {
        let V;
        c && (V = `${c}${(0, Gf.default)(u || "")}`), V === void 0 && (V = `Styled(${(0, Xf.default)(s)})`), W.displayName = V;
      }
      return s.muiName && (W.muiName = s.muiName), W;
    };
    return k.withConfig && (w.withConfig = k.withConfig), w;
  };
}
function wo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ld = (e) => wo(e) && e !== "classes", Xa = ld, cd = Hf({
  themeId: io,
  defaultTheme: Ro,
  rootShouldForwardProp: Xa
}), Pe = cd, ud = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, ji = ud;
function fd(e) {
  return Ge("MuiSvgIcon", e);
}
it("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const dd = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], pd = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Se(t)}`, `fontSize${Se(r)}`]
  };
  return ft(o, fd, n);
}, md = Pe("svg", {
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
  var r, n, o, i, s, l, c, u, f, p, m, x, y;
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
    color: (p = (m = (e.vars || e).palette) == null || (m = m[t.color]) == null ? void 0 : m.main) != null ? p : {
      action: (x = (e.vars || e).palette) == null || (x = x.action) == null ? void 0 : x.active,
      disabled: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.disabled,
      inherit: void 0
    }[t.color]
  };
}), Co = /* @__PURE__ */ b.forwardRef(function(t, r) {
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
    titleAccess: p,
    viewBox: m = "0 0 24 24"
  } = n, x = Re(n, dd), y = /* @__PURE__ */ b.isValidElement(o) && o.type === "svg", h = E({}, n, {
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: m,
    hasSvgAsChild: y
  }), v = {};
  f || (v.viewBox = m);
  const _ = pd(h);
  return /* @__PURE__ */ z.jsxs(md, E({
    as: l,
    className: ye(_.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r
  }, v, x, y && o.props, {
    ownerState: h,
    children: [y ? o.props.children : o, p ? /* @__PURE__ */ z.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Co.propTypes = {
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
Co.muiName = "SvgIcon";
const Ai = Co;
function hd(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ z.jsx(Ai, E({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Ai.muiName, /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(r));
}
const vd = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), Ca.configure(e);
  }
}, gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: Se,
  createChainedFunction: Xn,
  createSvgIcon: hd,
  debounce: Ia,
  deprecatedPropType: ku,
  isMuiElement: $u,
  ownerDocument: Ke,
  ownerWindow: tr,
  requirePropFactory: Nu,
  setRef: Xr,
  unstable_ClassNameGenerator: vd,
  unstable_useEnhancedEffect: Sr,
  unstable_useId: Au,
  unsupportedProp: Mu,
  useControlled: Da,
  useEventCallback: vt,
  useForkRef: ut,
  useIsFocusVisible: To
}, Symbol.toStringTag, { value: "Module" }));
function yd(e) {
  return at;
}
function ro(e, t) {
  return ro = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ro(e, t);
}
function Ja(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ro(e, t);
}
const Mi = {
  disabled: !1
};
var bd = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.shape({
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
var Ed = function(t) {
  return t.scrollTop;
}, pr = "unmounted", jt = "exited", At = "entering", Gt = "entered", no = "exiting", Ot = /* @__PURE__ */ function(e) {
  Ja(t, e);
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
      this.props.in ? s !== At && s !== Gt && (i = At) : (s === At || s === Gt) && (i = no);
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
          s && Ed(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === jt && this.setState({
        status: pr
      });
  }, r.performEnter = function(o) {
    var i = this, s = this.props.enter, l = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [l] : [$r.findDOMNode(this), l], u = c[0], f = c[1], p = this.getTimeouts(), m = l ? p.appear : p.enter;
    if (!o && !s || Mi.disabled) {
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
      i.props.onEntering(u, f), i.onTransitionEnd(m, function() {
        i.safeSetState({
          status: Gt
        }, function() {
          i.props.onEntered(u, f);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : $r.findDOMNode(this);
    if (!i || Mi.disabled) {
      this.safeSetState({
        status: jt
      }, function() {
        o.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: no
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
    var r = bd;
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
Ot.EXITING = no;
const Za = Ot;
function xd(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Po(e, t) {
  var r = function(i) {
    return t && Fr(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Ss.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Td(e, t) {
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
function Sd(e, t) {
  return Po(e.children, function(r) {
    return zr(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Mt(r, "appear", e),
      enter: Mt(r, "enter", e),
      exit: Mt(r, "exit", e)
    });
  });
}
function Od(e, t, r) {
  var n = Po(e.children), o = Td(t, n);
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
var _d = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Rd = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ko = /* @__PURE__ */ function(e) {
  Ja(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(xd(i));
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
      children: c ? Sd(o, l) : Od(o, s, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = Po(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var c = E({}, l.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, l = Re(o, ["component", "childFactory"]), c = this.state.contextValue, u = _d(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ ct.createElement(Zr.Provider, {
      value: c
    }, u) : /* @__PURE__ */ ct.createElement(Zr.Provider, {
      value: c
    }, /* @__PURE__ */ ct.createElement(i, l, u));
  }, t;
}(ct.Component);
ko.propTypes = process.env.NODE_ENV !== "production" ? {
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
ko.defaultProps = Rd;
const wd = ko, Qa = (e) => e.scrollTop;
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
function Cd(e) {
  return Ge("MuiPaper", e);
}
it("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Pd = ["className", "component", "elevation", "square", "variant"], kd = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, i = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return ft(i, Cd, o);
}, $d = Pe("div", {
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
  return E({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && E({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${It("#fff", ji(t.elevation))}, ${It("#fff", ji(t.elevation))})`
  }, e.vars && {
    backgroundImage: (r = e.vars.overlays) == null ? void 0 : r[t.elevation]
  }));
}), es = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: s = 1,
    square: l = !1,
    variant: c = "elevation"
  } = n, u = Re(n, Pd), f = E({}, n, {
    component: i,
    elevation: s,
    square: l,
    variant: c
  }), p = kd(f);
  return process.env.NODE_ENV !== "production" && Sn().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ z.jsx($d, E({
    as: i,
    ownerState: f,
    className: ye(p.root, o),
    ref: r
  }, u));
});
process.env.NODE_ENV !== "production" && (es.propTypes = {
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
  elevation: Ct(Fa, (e) => {
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
const Nd = es;
function hr(e) {
  return typeof e == "string";
}
function jd(e, t, r) {
  return e === void 0 || hr(e) ? t : E({}, t, {
    ownerState: E({}, t.ownerState, r)
  });
}
function Ad(e, t, r = (n, o) => n === o) {
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
function Md(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Ii(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Id(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const x = ye(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), y = E({}, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), h = E({}, r, o, n);
    return x.length > 0 && (h.className = x), Object.keys(y).length > 0 && (h.style = y), {
      props: h,
      internalRef: void 0
    };
  }
  const s = vr(E({}, o, n)), l = Ii(n), c = Ii(o), u = t(s), f = ye(u == null ? void 0 : u.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), p = E({}, u == null ? void 0 : u.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), m = E({}, u, r, c, l);
  return f.length > 0 && (m.className = f), Object.keys(p).length > 0 && (m.style = p), {
    props: m,
    internalRef: u.ref
  };
}
const Dd = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function mt(e) {
  var t;
  const {
    elementType: r,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, s = Re(e, Dd), l = i ? {} : Md(n, o), {
    props: c,
    internalRef: u
  } = Id(E({}, s, {
    externalSlotProps: l
  })), f = ut(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return jd(r, E({}, c, {
    ref: f
  }), o);
}
function ts(e) {
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
  } = e, [f, p] = b.useState(!1), m = ye(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, y = ye(r.child, f && r.childLeaving, n && r.childPulsate);
  return !l && !f && p(!0), b.useEffect(() => {
    if (!l && c != null) {
      const h = setTimeout(c, u);
      return () => {
        clearTimeout(h);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ z.jsx("span", {
    className: m,
    style: x,
    children: /* @__PURE__ */ z.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (ts.propTypes = {
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
const Ld = it("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), et = Ld, Vd = ["center", "classes", "className"];
let On = (e) => e, Di, Li, Vi, Fi;
const oo = 550, Fd = 80, zd = un(Di || (Di = On`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Bd = un(Li || (Li = On`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Ud = un(Vi || (Vi = On`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Wd = Pe("span", {
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
}), Yd = Pe(ts, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Fi || (Fi = On`
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
`), et.rippleVisible, zd, oo, ({
  theme: e
}) => e.transitions.easing.easeInOut, et.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, et.child, et.childLeaving, Bd, oo, ({
  theme: e
}) => e.transitions.easing.easeInOut, et.childPulsate, Ud, ({
  theme: e
}) => e.transitions.easing.easeInOut), rs = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = n, l = Re(n, Vd), [c, u] = b.useState([]), f = b.useRef(0), p = b.useRef(null);
  b.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const m = b.useRef(!1), x = Vu(), y = b.useRef(null), h = b.useRef(null), v = b.useCallback((w) => {
    const {
      pulsate: g,
      rippleX: I,
      rippleY: C,
      rippleSize: oe,
      cb: ie
    } = w;
    u((W) => [...W, /* @__PURE__ */ z.jsx(Yd, {
      classes: {
        ripple: ye(i.ripple, et.ripple),
        rippleVisible: ye(i.rippleVisible, et.rippleVisible),
        ripplePulsate: ye(i.ripplePulsate, et.ripplePulsate),
        child: ye(i.child, et.child),
        childLeaving: ye(i.childLeaving, et.childLeaving),
        childPulsate: ye(i.childPulsate, et.childPulsate)
      },
      timeout: oo,
      pulsate: g,
      rippleX: I,
      rippleY: C,
      rippleSize: oe
    }, f.current)]), f.current += 1, p.current = ie;
  }, [i]), _ = b.useCallback((w = {}, g = {}, I = () => {
  }) => {
    const {
      pulsate: C = !1,
      center: oe = o || g.pulsate,
      fakeElement: ie = !1
      // For test purposes
    } = g;
    if ((w == null ? void 0 : w.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (w == null ? void 0 : w.type) === "touchstart" && (m.current = !0);
    const W = ie ? null : h.current, V = W ? W.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let ee, Y, L;
    if (oe || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      ee = Math.round(V.width / 2), Y = Math.round(V.height / 2);
    else {
      const {
        clientX: H,
        clientY: B
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      ee = Math.round(H - V.left), Y = Math.round(B - V.top);
    }
    if (oe)
      L = Math.sqrt((2 * V.width ** 2 + V.height ** 2) / 3), L % 2 === 0 && (L += 1);
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
    }, x.start(Fd, () => {
      y.current && (y.current(), y.current = null);
    })) : v({
      pulsate: C,
      rippleX: ee,
      rippleY: Y,
      rippleSize: L,
      cb: I
    });
  }, [o, v, x]), k = b.useCallback(() => {
    _({}, {
      pulsate: !0
    });
  }, [_]), S = b.useCallback((w, g) => {
    if (x.clear(), (w == null ? void 0 : w.type) === "touchend" && y.current) {
      y.current(), y.current = null, x.start(0, () => {
        S(w, g);
      });
      return;
    }
    y.current = null, u((I) => I.length > 0 ? I.slice(1) : I), p.current = g;
  }, [x]);
  return b.useImperativeHandle(r, () => ({
    pulsate: k,
    start: _,
    stop: S
  }), [k, _, S]), /* @__PURE__ */ z.jsx(Wd, E({
    className: ye(et.root, i.root, s),
    ref: h
  }, l, {
    children: /* @__PURE__ */ z.jsx(wd, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (rs.propTypes = {
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
const qd = rs;
function Hd(e) {
  return Ge("MuiButtonBase", e);
}
const Kd = it("MuiButtonBase", ["root", "disabled", "focusVisible"]), Gd = Kd, Xd = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Jd = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = ft({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Hd, o);
  return r && n && (s.root += ` ${n}`), s;
}, Zd = Pe("button", {
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
  [`&.${Gd.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ns = /* @__PURE__ */ b.forwardRef(function(t, r) {
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
    disableTouchRipple: p = !1,
    focusRipple: m = !1,
    LinkComponent: x = "a",
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
    onTouchStart: V,
    tabIndex: ee = 0,
    TouchRippleProps: Y,
    touchRippleRef: L,
    type: H
  } = n, B = Re(n, Xd), F = b.useRef(null), A = b.useRef(null), me = ut(A, L), {
    isFocusVisibleRef: O,
    onFocus: M,
    onBlur: te,
    ref: K
  } = To(), [D, J] = b.useState(!1);
  u && D && J(!1), b.useImperativeHandle(o, () => ({
    focusVisible: () => {
      J(!0), F.current.focus();
    }
  }), []);
  const [q, G] = b.useState(!1);
  b.useEffect(() => {
    G(!0);
  }, []);
  const Z = q && !f && !u;
  b.useEffect(() => {
    D && m && !f && q && A.current.pulsate();
  }, [f, m, D, q]);
  function X(T, U, le = p) {
    return vt((de) => (U && U(de), !le && A.current && A.current[T](de), !0));
  }
  const re = X("start", I), Oe = X("stop", v), N = X("stop", _), pe = X("stop", oe), P = X("stop", (T) => {
    D && T.preventDefault(), C && C(T);
  }), fe = X("start", V), Ce = X("stop", ie), Ve = X("stop", W), Fe = X("stop", (T) => {
    te(T), O.current === !1 && J(!1), y && y(T);
  }, !1), dt = vt((T) => {
    F.current || (F.current = T.currentTarget), M(T), O.current === !0 && (J(!0), S && S(T)), k && k(T);
  }), ke = () => {
    const T = F.current;
    return c && c !== "button" && !(T.tagName === "A" && T.href);
  }, Xe = b.useRef(!1), bt = vt((T) => {
    m && !Xe.current && D && A.current && T.key === " " && (Xe.current = !0, A.current.stop(T, () => {
      A.current.start(T);
    })), T.target === T.currentTarget && ke() && T.key === " " && T.preventDefault(), w && w(T), T.target === T.currentTarget && ke() && T.key === "Enter" && !u && (T.preventDefault(), h && h(T));
  }), kt = vt((T) => {
    m && T.key === " " && A.current && D && !T.defaultPrevented && (Xe.current = !1, A.current.stop(T, () => {
      A.current.pulsate(T);
    })), g && g(T), h && T.target === T.currentTarget && ke() && T.key === " " && !T.defaultPrevented && h(T);
  });
  let pt = c;
  pt === "button" && (B.href || B.to) && (pt = x);
  const st = {};
  pt === "button" ? (st.type = H === void 0 ? "button" : H, st.disabled = u) : (!B.href && !B.to && (st.role = "button"), u && (st["aria-disabled"] = u));
  const _t = ut(r, K, F);
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    Z && !A.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [Z]);
  const Be = E({}, n, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: p,
    focusRipple: m,
    tabIndex: ee,
    focusVisible: D
  }), $ = Jd(Be);
  return /* @__PURE__ */ z.jsxs(Zd, E({
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
      /* @__PURE__ */ z.jsx(qd, E({
        ref: me,
        center: i
      }, Y))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ns.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Pu,
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
  component: Ru,
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
const Qd = ns;
function ep(e) {
  return Ge("MuiIconButton", e);
}
const tp = it("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), rp = tp, np = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], op = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, s = {
    root: ["root", r && "disabled", n !== "default" && `color${Se(n)}`, o && `edge${Se(o)}`, `size${Se(i)}`]
  };
  return ft(s, ep, t);
}, ip = Pe(Qd, {
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
}) => E({
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
  return E({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && E({
    color: n == null ? void 0 : n.main
  }, !t.disableRipple && {
    "&:hover": E({}, n && {
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
    [`&.${rp.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), os = /* @__PURE__ */ b.forwardRef(function(t, r) {
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
  } = n, p = Re(n, np), m = E({}, n, {
    edge: o,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: f
  }), x = op(m);
  return /* @__PURE__ */ z.jsx(ip, E({
    className: ye(x.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: r
  }, p, {
    ownerState: m,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (os.propTypes = {
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
const zi = os;
function ap(e) {
  return Ge("MuiTypography", e);
}
it("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const sp = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], lp = (e) => {
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
  return ft(l, ap, s);
}, cp = Pe("span", {
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
}) => E({
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
})), Bi = {
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
}, up = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, fp = (e) => up[e] || e, is = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiTypography"
  }), o = fp(n.color), i = wa(E({}, n, {
    color: o
  })), {
    align: s = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: f = !1,
    paragraph: p = !1,
    variant: m = "body1",
    variantMapping: x = Bi
  } = i, y = Re(i, sp), h = E({}, i, {
    align: s,
    color: o,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: f,
    paragraph: p,
    variant: m,
    variantMapping: x
  }), v = c || (p ? "p" : x[m] || Bi[m]) || "span", _ = lp(h);
  return /* @__PURE__ */ z.jsx(cp, E({
    as: v,
    ref: r,
    ownerState: h,
    className: ye(_.root, l)
  }, y));
});
process.env.NODE_ENV !== "production" && (is.propTypes = {
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
const Ui = is, dp = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function pp(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function mp(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function hp(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || mp(e));
}
function vp(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(dp)).forEach((n, o) => {
    const i = pp(n);
    i === -1 || !hp(n) || (i === 0 ? t.push(n) : r.push({
      documentOrder: o,
      tabIndex: i,
      node: n
    }));
  }), r.sort((n, o) => n.tabIndex === o.tabIndex ? n.documentOrder - o.documentOrder : n.tabIndex - o.tabIndex).map((n) => n.node).concat(t);
}
function gp() {
  return !0;
}
function en(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = vp,
    isEnabled: s = gp,
    open: l
  } = e, c = b.useRef(!1), u = b.useRef(null), f = b.useRef(null), p = b.useRef(null), m = b.useRef(null), x = b.useRef(!1), y = b.useRef(null), h = ut(t.ref, y), v = b.useRef(null);
  b.useEffect(() => {
    !l || !y.current || (x.current = !r);
  }, [r, l]), b.useEffect(() => {
    if (!l || !y.current)
      return;
    const S = Ke(y.current);
    return y.current.contains(S.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), x.current && y.current.focus()), () => {
      o || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
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
      if (S.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!x.current)
        return;
      let oe = [];
      if ((S.activeElement === u.current || S.activeElement === f.current) && (oe = i(y.current)), oe.length > 0) {
        var ie, W;
        const V = !!((ie = v.current) != null && ie.shiftKey && ((W = v.current) == null ? void 0 : W.key) === "Tab"), ee = oe[0], Y = oe[oe.length - 1];
        typeof ee != "string" && typeof Y != "string" && (V ? Y.focus() : ee.focus());
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
    p.current === null && (p.current = S.relatedTarget), x.current = !0, m.current = S.target;
    const w = t.props.onFocus;
    w && w(S);
  }, k = (S) => {
    p.current === null && (p.current = S.relatedTarget), x.current = !0;
  };
  return /* @__PURE__ */ z.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ z.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: k,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ b.cloneElement(t, {
      ref: h,
      onFocus: _
    }), /* @__PURE__ */ z.jsx("div", {
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
process.env.NODE_ENV !== "production" && (en["propTypes"] = Ma(en.propTypes));
function yp(e) {
  return typeof e == "function" ? e() : e;
}
const tn = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = b.useState(null), c = ut(/* @__PURE__ */ b.isValidElement(n) ? n.ref : null, r);
  if (Sr(() => {
    i || l(yp(o) || document.body);
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
    return /* @__PURE__ */ z.jsx(b.Fragment, {
      children: n
    });
  }
  return /* @__PURE__ */ z.jsx(b.Fragment, {
    children: s && /* @__PURE__ */ Os.createPortal(n, s)
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
  container: a.oneOfType([xo, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool
});
process.env.NODE_ENV !== "production" && (tn["propTypes"] = Ma(tn.propTypes));
function bp(e) {
  const t = Ke(e);
  return t.body === e ? tr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function gr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Wi(e) {
  return parseInt(tr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Ep(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function Yi(e, t, r, n, o) {
  const i = [t, r, ...n];
  [].forEach.call(e.children, (s) => {
    const l = i.indexOf(s) === -1, c = !Ep(s);
    l && c && gr(s, o);
  });
}
function zn(e, t) {
  let r = -1;
  return e.some((n, o) => t(n) ? (r = o, !0) : !1), r;
}
function xp(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (bp(n)) {
      const s = Hu(Ke(n));
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
function Tp(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class Sp {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && gr(t.modalRef, !1);
    const o = Tp(r);
    Yi(r, t.mount, t.modalRef, o, !0);
    const i = zn(this.containers, (s) => s.container === r);
    return i !== -1 ? (this.containers[i].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: o
    }), n);
  }
  mount(t, r) {
    const n = zn(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[n];
    o.restore || (o.restore = xp(o, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const o = zn(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[o];
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
function Op(e) {
  return typeof e == "function" ? e() : e;
}
function _p(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Rp = new Sp();
function wp(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: o = Rp,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: f,
    rootRef: p
  } = e, m = b.useRef({}), x = b.useRef(null), y = b.useRef(null), h = ut(y, p), [v, _] = b.useState(!f), k = _p(c);
  let S = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (S = !1);
  const w = () => Ke(x.current), g = () => (m.current.modalRef = y.current, m.current.mount = x.current, m.current), I = () => {
    o.mount(g(), {
      disableScrollLock: n
    }), y.current && (y.current.scrollTop = 0);
  }, C = vt(() => {
    const B = Op(t) || w().body;
    o.add(g(), B), y.current && I();
  }), oe = b.useCallback(() => o.isTopModal(g()), [o]), ie = vt((B) => {
    x.current = B, B && (f && oe() ? I() : y.current && gr(y.current, S));
  }), W = b.useCallback(() => {
    o.remove(g(), S);
  }, [S, o]);
  b.useEffect(() => () => {
    W();
  }, [W]), b.useEffect(() => {
    f ? C() : (!k || !i) && W();
  }, [f, W, k, i, C]);
  const V = (B) => (F) => {
    var A;
    (A = B.onKeyDown) == null || A.call(B, F), !(F.key !== "Escape" || F.which === 229 || // Wait until IME is settled.
    !oe()) && (r || (F.stopPropagation(), u && u(F, "escapeKeyDown")));
  }, ee = (B) => (F) => {
    var A;
    (A = B.onClick) == null || A.call(B, F), F.target === F.currentTarget && u && u(F, "backdropClick");
  };
  return {
    getRootProps: (B = {}) => {
      const F = vr(e);
      delete F.onTransitionEnter, delete F.onTransitionExited;
      const A = E({}, F, B);
      return E({
        role: "presentation"
      }, A, {
        onKeyDown: V(A),
        ref: h
      });
    },
    getBackdropProps: (B = {}) => {
      const F = B;
      return E({
        "aria-hidden": !0
      }, F, {
        onClick: ee(F),
        open: f
      });
    },
    getTransitionProps: () => {
      const B = () => {
        _(!1), s && s();
      }, F = () => {
        _(!0), l && l(), i && W();
      };
      return {
        onEnter: Xn(B, c == null ? void 0 : c.props.onEnter),
        onExited: Xn(F, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: h,
    portalRef: ie,
    isTopModal: oe,
    exited: v,
    hasTransition: k
  };
}
const Cp = 2;
function as(e, t) {
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
function Pp(e, t, r) {
  return (r - t) * e + t;
}
function kp(e) {
  if (Math.abs(e) < 1) {
    const r = e.toExponential().split("e-"), n = r[0].split(".")[1];
    return (n ? n.length : 0) + parseInt(r[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function $p(e, t, r) {
  const n = Math.round((e - r) / t) * t + r;
  return Number(n.toFixed(kp(t)));
}
function Hi({
  values: e,
  newValue: t,
  index: r
}) {
  const n = e.slice();
  return n[r] = t, n.sort(as);
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
  return typeof e == "number" && typeof t == "number" ? e === t : typeof e == "object" && typeof t == "object" ? Ad(e, t) : !1;
}
const Np = {
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
}, jp = (e) => e;
let Lr;
function Ki() {
  return Lr === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? Lr = CSS.supports("touch-action", "none") : Lr = !0), Lr;
}
function Ap(e) {
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
    onChangeCommitted: p,
    orientation: m = "horizontal",
    rootRef: x,
    scale: y = jp,
    step: h = 1,
    shiftStep: v = 10,
    tabIndex: _,
    value: k
  } = e, S = b.useRef(), [w, g] = b.useState(-1), [I, C] = b.useState(-1), [oe, ie] = b.useState(!1), W = b.useRef(0), [V, ee] = Da({
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
  }), L = Array.isArray(V);
  let H = L ? V.slice().sort(as) : [V];
  H = H.map(($) => $ == null ? c : Kt($, c, l));
  const B = s === !0 && h !== null ? [...Array(Math.floor((l - c) / h) + 1)].map(($, T) => ({
    value: c + h * T
  })) : s || [], F = B.map(($) => $.value), {
    isFocusVisibleRef: A,
    onBlur: me,
    onFocus: O,
    ref: M
  } = To(), [te, K] = b.useState(-1), D = b.useRef(), J = ut(M, D), q = ut(x, J), G = ($) => (T) => {
    var U;
    const le = Number(T.currentTarget.getAttribute("data-index"));
    O(T), A.current === !0 && K(le), C(le), $ == null || (U = $.onFocus) == null || U.call($, T);
  }, Z = ($) => (T) => {
    var U;
    me(T), A.current === !1 && K(-1), C(-1), $ == null || (U = $.onBlur) == null || U.call($, T);
  }, X = ($, T) => {
    const U = Number($.currentTarget.getAttribute("data-index")), le = H[U], de = F.indexOf(le);
    let ue = T;
    if (B && h == null) {
      const Ye = F[F.length - 1];
      ue > Ye ? ue = Ye : ue < F[0] ? ue = F[0] : ue = ue < le ? F[de - 1] : F[de + 1];
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
    ee(ue), K(U), Y && !Dr(ue, V) && Y($, ue, U), p && p($, ue);
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
  let pe = m;
  i && m === "horizontal" && (pe += "-reverse");
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
    if (he = Pp(Je, c, l), h)
      he = $p(he, h, c);
    else {
      const Rt = qi(F, he);
      he = F[Rt];
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
    }), ee(U), !oe && W.current > Cp && ie(!0), Y && !Dr(U, V) && Y($, U, le);
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
    g(-1), $.type === "touchend" && C(-1), p && p($, U), S.current = void 0, Fe();
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
      }), ee(de), Y && !Dr(de, V) && Y($, de, ue);
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
      }), ee(ue), Y && !Dr(ue, V) && Y(T, ue, Ye);
    }
    W.current = 0;
    const de = Ke(D.current);
    de.addEventListener("mousemove", fe, {
      passive: !0
    }), de.addEventListener("mouseup", Ce);
  }, ke = rn(L ? H[0] : c, c, l), Xe = rn(H[H.length - 1], c, l) - ke, bt = ($ = {}) => {
    const T = vr($), U = {
      onMouseDown: dt(T || {})
    }, le = E({}, T, U);
    return E({}, $, {
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
    axisProps: Np,
    dragging: oe,
    focusedThumbIndex: te,
    getHiddenInputProps: ($ = {}) => {
      var T;
      const U = vr($), le = {
        onChange: Oe(U || {}),
        onFocus: G(U || {}),
        onBlur: Z(U || {}),
        onKeyDown: re(U || {})
      }, de = E({}, U, le);
      return E({
        tabIndex: _,
        "aria-labelledby": t,
        "aria-orientation": m,
        "aria-valuemax": y(l),
        "aria-valuemin": y(c),
        name: u,
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step === null && e.marks ? "any" : (T = e.step) != null ? T : void 0,
        disabled: n
      }, $, de, {
        style: E({}, Gu, {
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
      return E({}, $, T, U);
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
const Mp = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Ip = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, ss = /* @__PURE__ */ b.forwardRef(function(t, r) {
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
    onEntered: p,
    onEntering: m,
    onExit: x,
    onExited: y,
    onExiting: h,
    style: v,
    timeout: _ = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: k = Za
  } = t, S = Re(t, Mp), w = b.useRef(null), g = ut(w, l.ref, r), I = (L) => (H) => {
    if (L) {
      const B = w.current;
      H === void 0 ? L(B) : L(B, H);
    }
  }, C = I(m), oe = I((L, H) => {
    Qa(L);
    const B = Qr({
      style: v,
      timeout: _,
      easing: c
    }, {
      mode: "enter"
    });
    L.style.webkitTransition = n.transitions.create("opacity", B), L.style.transition = n.transitions.create("opacity", B), f && f(L, H);
  }), ie = I(p), W = I(h), V = I((L) => {
    const H = Qr({
      style: v,
      timeout: _,
      easing: c
    }, {
      mode: "exit"
    });
    L.style.webkitTransition = n.transitions.create("opacity", H), L.style.transition = n.transitions.create("opacity", H), x && x(L);
  }), ee = I(y), Y = (L) => {
    i && i(w.current, L);
  };
  return /* @__PURE__ */ z.jsx(k, E({
    appear: s,
    in: u,
    nodeRef: w,
    onEnter: oe,
    onEntered: ie,
    onEntering: C,
    onExit: V,
    onExited: ee,
    onExiting: W,
    addEndListener: Y,
    timeout: _
  }, S, {
    children: (L, H) => /* @__PURE__ */ b.cloneElement(l, E({
      style: E({
        opacity: 0,
        visibility: L === "exited" && !u ? "hidden" : void 0
      }, Ip[L], v, l.props.style),
      ref: g
    }, H))
  }));
});
process.env.NODE_ENV !== "production" && (ss.propTypes = {
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
const Dp = ss;
function Lp(e) {
  return Ge("MuiBackdrop", e);
}
it("MuiBackdrop", ["root", "invisible"]);
const Vp = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Fp = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return ft({
    root: ["root", r && "invisible"]
  }, Lp, t);
}, zp = Pe("div", {
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
}) => E({
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
})), ls = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o, i;
  const s = at({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: f = {},
    componentsProps: p = {},
    invisible: m = !1,
    open: x,
    slotProps: y = {},
    slots: h = {},
    TransitionComponent: v = Dp,
    transitionDuration: _
  } = s, k = Re(s, Vp), S = E({}, s, {
    component: u,
    invisible: m
  }), w = Fp(S), g = (n = y.root) != null ? n : p.root;
  return /* @__PURE__ */ z.jsx(v, E({
    in: x,
    timeout: _
  }, k, {
    children: /* @__PURE__ */ z.jsx(zp, E({
      "aria-hidden": !0
    }, g, {
      as: (o = (i = h.root) != null ? i : f.Root) != null ? o : u,
      className: ye(w.root, c, g == null ? void 0 : g.className),
      ownerState: E({}, S, g == null ? void 0 : g.ownerState),
      classes: w,
      ref: r,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ls.propTypes = {
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
const Bp = ls;
function Up(e) {
  return Ge("MuiModal", e);
}
it("MuiModal", ["root", "hidden", "backdrop"]);
const Wp = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Yp = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return ft({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, Up, n);
}, qp = Pe("div", {
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
}) => E({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Hp = Pe(Bp, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), cs = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o, i, s, l, c;
  const u = at({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: f = Hp,
    BackdropProps: p,
    className: m,
    closeAfterTransition: x = !1,
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
    onBackdropClick: V,
    open: ee,
    slotProps: Y,
    slots: L
    // eslint-disable-next-line react/prop-types
  } = u, H = Re(u, Wp), B = E({}, u, {
    closeAfterTransition: x,
    disableAutoFocus: S,
    disableEnforceFocus: w,
    disableEscapeKeyDown: g,
    disablePortal: I,
    disableRestoreFocus: C,
    disableScrollLock: oe,
    hideBackdrop: ie,
    keepMounted: W
  }), {
    getRootProps: F,
    getBackdropProps: A,
    getTransitionProps: me,
    portalRef: O,
    isTopModal: M,
    exited: te,
    hasTransition: K
  } = wp(E({}, B, {
    rootRef: r
  })), D = E({}, B, {
    exited: te
  }), J = Yp(D), q = {};
  if (y.props.tabIndex === void 0 && (q.tabIndex = "-1"), K) {
    const {
      onEnter: pe,
      onExited: P
    } = me();
    q.onEnter = pe, q.onExited = P;
  }
  const G = (n = (o = L == null ? void 0 : L.root) != null ? o : _.Root) != null ? n : qp, Z = (i = (s = L == null ? void 0 : L.backdrop) != null ? s : _.Backdrop) != null ? i : f, X = (l = Y == null ? void 0 : Y.root) != null ? l : k.root, re = (c = Y == null ? void 0 : Y.backdrop) != null ? c : k.backdrop, Oe = mt({
    elementType: G,
    externalSlotProps: X,
    externalForwardedProps: H,
    getSlotProps: F,
    additionalProps: {
      ref: r,
      as: v
    },
    ownerState: D,
    className: ye(m, X == null ? void 0 : X.className, J == null ? void 0 : J.root, !D.open && D.exited && (J == null ? void 0 : J.hidden))
  }), N = mt({
    elementType: Z,
    externalSlotProps: re,
    additionalProps: p,
    getSlotProps: (pe) => A(E({}, pe, {
      onClick: (P) => {
        V && V(P), pe != null && pe.onClick && pe.onClick(P);
      }
    })),
    className: ye(re == null ? void 0 : re.className, p == null ? void 0 : p.className, J == null ? void 0 : J.backdrop),
    ownerState: D
  });
  return !W && !ee && (!K || te) ? null : /* @__PURE__ */ z.jsx(tn, {
    ref: O,
    container: h,
    disablePortal: I,
    children: /* @__PURE__ */ z.jsxs(G, E({}, Oe, {
      children: [!ie && f ? /* @__PURE__ */ z.jsx(Z, E({}, N)) : null, /* @__PURE__ */ z.jsx(en, {
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
process.env.NODE_ENV !== "production" && (cs.propTypes = {
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
  container: a.oneOfType([xo, a.func]),
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
const Kp = cs;
function Gp(e) {
  return Ge("MuiDivider", e);
}
it("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
const Xp = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], Jp = (e) => {
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
  }, Gp, n);
}, Zp = Pe("div", {
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
}) => E({
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
}) => E({}, e.children && {
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
}) => E({}, t.children && t.orientation !== "vertical" && {
  "&::before, &::after": {
    width: "100%",
    borderTop: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  theme: e,
  ownerState: t
}) => E({}, t.children && t.orientation === "vertical" && {
  flexDirection: "column",
  "&::before, &::after": {
    height: "100%",
    borderLeft: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  ownerState: e
}) => E({}, e.textAlign === "right" && e.orientation !== "vertical" && {
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
})), Qp = Pe("span", {
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
}) => E({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`
}, t.orientation === "vertical" && {
  paddingTop: `calc(${e.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${e.spacing(1)} * 1.2)`
})), $o = /* @__PURE__ */ b.forwardRef(function(t, r) {
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
    role: p = l !== "hr" ? "separator" : void 0,
    textAlign: m = "center",
    variant: x = "fullWidth"
  } = n, y = Re(n, Xp), h = E({}, n, {
    absolute: o,
    component: l,
    flexItem: c,
    light: u,
    orientation: f,
    role: p,
    textAlign: m,
    variant: x
  }), v = Jp(h);
  return /* @__PURE__ */ z.jsx(Zp, E({
    as: l,
    className: ye(v.root, s),
    role: p,
    ref: r,
    ownerState: h
  }, y, {
    children: i ? /* @__PURE__ */ z.jsx(Qp, {
      className: v.wrapper,
      ownerState: h,
      children: i
    }) : null
  }));
});
$o.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && ($o.propTypes = {
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
const em = $o, tm = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function rm(e, t, r) {
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
function us(e) {
  return typeof e == "function" ? e() : e;
}
function Vr(e, t, r) {
  const n = us(r), o = rm(e, t, n);
  o && (t.style.webkitTransform = o, t.style.transform = o);
}
const fs = /* @__PURE__ */ b.forwardRef(function(t, r) {
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
    easing: p = o,
    in: m,
    onEnter: x,
    onEntered: y,
    onEntering: h,
    onExit: v,
    onExited: _,
    onExiting: k,
    style: S,
    timeout: w = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: g = Za
  } = t, I = Re(t, tm), C = b.useRef(null), oe = ut(c.ref, C, r), ie = (A) => (me) => {
    A && (me === void 0 ? A(C.current) : A(C.current, me));
  }, W = ie((A, me) => {
    Vr(f, A, u), Qa(A), x && x(A, me);
  }), V = ie((A, me) => {
    const O = Qr({
      timeout: w,
      style: S,
      easing: p
    }, {
      mode: "enter"
    });
    A.style.webkitTransition = n.transitions.create("-webkit-transform", E({}, O)), A.style.transition = n.transitions.create("transform", E({}, O)), A.style.webkitTransform = "none", A.style.transform = "none", h && h(A, me);
  }), ee = ie(y), Y = ie(k), L = ie((A) => {
    const me = Qr({
      timeout: w,
      style: S,
      easing: p
    }, {
      mode: "exit"
    });
    A.style.webkitTransition = n.transitions.create("-webkit-transform", me), A.style.transition = n.transitions.create("transform", me), Vr(f, A, u), v && v(A);
  }), H = ie((A) => {
    A.style.webkitTransition = "", A.style.transition = "", _ && _(A);
  }), B = (A) => {
    s && s(C.current, A);
  }, F = b.useCallback(() => {
    C.current && Vr(f, C.current, u);
  }, [f, u]);
  return b.useEffect(() => {
    if (m || f === "down" || f === "right")
      return;
    const A = Ia(() => {
      C.current && Vr(f, C.current, u);
    }), me = tr(C.current);
    return me.addEventListener("resize", A), () => {
      A.clear(), me.removeEventListener("resize", A);
    };
  }, [f, m, u]), b.useEffect(() => {
    m || F();
  }, [m, F]), /* @__PURE__ */ z.jsx(g, E({
    nodeRef: C,
    onEnter: W,
    onEntered: ee,
    onEntering: V,
    onExit: L,
    onExited: H,
    onExiting: Y,
    addEndListener: B,
    appear: l,
    in: m,
    timeout: w
  }, I, {
    children: (A, me) => /* @__PURE__ */ b.cloneElement(c, E({
      ref: oe,
      style: E({
        visibility: A === "exited" && !m ? "hidden" : void 0
      }, S, c.props.style)
    }, me))
  }));
});
process.env.NODE_ENV !== "production" && (fs.propTypes = {
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
  container: Ct(a.oneOfType([xo, a.func]), (e) => {
    if (e.open) {
      const t = us(e.container);
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
const nm = fs;
function om(e) {
  return Ge("MuiDrawer", e);
}
it("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const im = ["BackdropProps"], am = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], ds = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, (r.variant === "permanent" || r.variant === "persistent") && t.docked, t.modal];
}, sm = (e) => {
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
  return ft(o, om, t);
}, lm = Pe(Kp, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: ds
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), Gi = Pe("div", {
  shouldForwardProp: Xa,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: ds
})({
  flex: "0 0 auto"
}), cm = Pe(Nd, {
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
}) => E({
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
})), ps = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function um(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function fm({
  direction: e
}, t) {
  return e === "rtl" && um(t) ? ps[t] : t;
}
const ms = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiDrawer"
  }), o = Sn(), i = za(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    BackdropProps: c,
    children: u,
    className: f,
    elevation: p = 16,
    hideBackdrop: m = !1,
    ModalProps: {
      BackdropProps: x
    } = {},
    onClose: y,
    open: h = !1,
    PaperProps: v = {},
    SlideProps: _,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: k = nm,
    transitionDuration: S = s,
    variant: w = "temporary"
  } = n, g = Re(n.ModalProps, im), I = Re(n, am), C = b.useRef(!1);
  b.useEffect(() => {
    C.current = !0;
  }, []);
  const oe = fm({
    direction: i ? "rtl" : "ltr"
  }, l), W = E({}, n, {
    anchor: l,
    elevation: p,
    open: h,
    variant: w
  }, I), V = sm(W), ee = /* @__PURE__ */ z.jsx(cm, E({
    elevation: w === "temporary" ? p : 0,
    square: !0
  }, v, {
    className: ye(V.paper, v.className),
    ownerState: W,
    children: u
  }));
  if (w === "permanent")
    return /* @__PURE__ */ z.jsx(Gi, E({
      className: ye(V.root, V.docked, f),
      ownerState: W,
      ref: r
    }, I, {
      children: ee
    }));
  const Y = /* @__PURE__ */ z.jsx(k, E({
    in: h,
    direction: ps[oe],
    timeout: S,
    appear: C.current
  }, _, {
    children: ee
  }));
  return w === "persistent" ? /* @__PURE__ */ z.jsx(Gi, E({
    className: ye(V.root, V.docked, f),
    ownerState: W,
    ref: r
  }, I, {
    children: Y
  })) : /* @__PURE__ */ z.jsx(lm, E({
    BackdropProps: E({}, c, x, {
      transitionDuration: S
    }),
    className: ye(V.root, V.modal, f),
    open: h,
    ownerState: W,
    onClose: y,
    hideBackdrop: m,
    ref: r
  }, I, g, {
    children: Y
  }));
});
process.env.NODE_ENV !== "production" && (ms.propTypes = {
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
  elevation: Fa,
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
const dm = ms, pm = (e) => !e || !hr(e), mm = pm;
function hm(e) {
  return Ge("MuiSlider", e);
}
const vm = it("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]), rt = vm, gm = (e) => {
  const {
    open: t
  } = e;
  return {
    offset: ye(t && rt.valueLabelOpen),
    circle: rt.valueLabelCircle,
    label: rt.valueLabelLabel
  };
};
function hs(e) {
  const {
    children: t,
    className: r,
    value: n
  } = e, o = gm(e);
  return t ? /* @__PURE__ */ b.cloneElement(t, {
    className: ye(t.props.className)
  }, /* @__PURE__ */ z.jsxs(b.Fragment, {
    children: [t.props.children, /* @__PURE__ */ z.jsx("span", {
      className: ye(o.offset, r),
      "aria-hidden": !0,
      children: /* @__PURE__ */ z.jsx("span", {
        className: o.circle,
        children: /* @__PURE__ */ z.jsx("span", {
          className: o.label,
          children: n
        })
      })
    })]
  })) : null;
}
process.env.NODE_ENV !== "production" && (hs.propTypes = {
  children: a.element.isRequired,
  className: a.string,
  value: a.node
});
const ym = ["aria-label", "aria-valuetext", "aria-labelledby", "component", "components", "componentsProps", "color", "classes", "className", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "shiftStep", "size", "step", "scale", "slotProps", "slots", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat"], bm = yd();
function Xi(e) {
  return e;
}
const Em = Pe("span", {
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
}), xm = Pe("span", {
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
}), Tm = Pe("span", {
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
      style: E({}, e.vars ? {
        backgroundColor: e.vars.palette.Slider[`${r}Track`],
        borderColor: e.vars.palette.Slider[`${r}Track`]
      } : E({
        backgroundColor: eo(e.palette[r].main, 0.62),
        borderColor: eo(e.palette[r].main, 0.62)
      }, e.applyStyles("dark", {
        backgroundColor: Qn(e.palette[r].main, 0.5)
      }), e.applyStyles("dark", {
        borderColor: Qn(e.palette[r].main, 0.5)
      })))
    }))]
  };
}), Sm = Pe("span", {
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
        [`&:hover, &.${rt.focusVisible}`]: E({}, e.vars ? {
          boxShadow: `0px 0px 0px 8px rgba(${e.vars.palette[r].mainChannel} / 0.16)`
        } : {
          boxShadow: `0px 0px 0px 8px ${It(e.palette[r].main, 0.16)}`
        }, {
          "@media (hover: none)": {
            boxShadow: "none"
          }
        }),
        [`&.${rt.active}`]: E({}, e.vars ? {
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
}), Om = Pe(hs, {
  name: "MuiSlider",
  slot: "ValueLabel",
  overridesResolver: (e, t) => t.valueLabel
})(({
  theme: e
}) => E({
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
})), _m = Pe("span", {
  name: "MuiSlider",
  slot: "Mark",
  shouldForwardProp: (e) => wo(e) && e !== "markActive",
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
})), Rm = Pe("span", {
  name: "MuiSlider",
  slot: "MarkLabel",
  shouldForwardProp: (e) => wo(e) && e !== "markLabelActive",
  overridesResolver: (e, t) => t.markLabel
})(({
  theme: e
}) => E({}, e.typography.body2, {
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
})), wm = (e) => {
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
  return ft(u, hm, s);
}, Cm = ({
  children: e
}) => e, vs = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o, i, s, l, c, u, f, p, m, x, y, h, v, _, k, S, w, g, I, C, oe, ie, W;
  const V = bm({
    props: t,
    name: "MuiSlider"
  }), ee = za(), {
    "aria-label": Y,
    "aria-valuetext": L,
    "aria-labelledby": H,
    // eslint-disable-next-line react/prop-types
    component: B = "span",
    components: F = {},
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
  } = V, dt = Re(V, ym), ke = E({}, V, {
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
  } = Ap(E({}, ke, {
    rootRef: r
  }));
  ke.marked = le.length > 0 && le.some((Q) => Q.label), ke.dragging = U, ke.focusedThumbIndex = $;
  const he = wm(ke), Ue = (n = (o = fe == null ? void 0 : fe.root) != null ? o : F.Root) != null ? n : Em, Rt = (i = (s = fe == null ? void 0 : fe.rail) != null ? s : F.Rail) != null ? i : xm, Lt = (l = (c = fe == null ? void 0 : fe.track) != null ? c : F.Track) != null ? l : Tm, or = (u = (f = fe == null ? void 0 : fe.thumb) != null ? f : F.Thumb) != null ? u : Sm, Et = (p = (m = fe == null ? void 0 : fe.valueLabel) != null ? m : F.ValueLabel) != null ? p : Om, $t = (x = (y = fe == null ? void 0 : fe.mark) != null ? y : F.Mark) != null ? x : _m, Nt = (h = (v = fe == null ? void 0 : fe.markLabel) != null ? v : F.MarkLabel) != null ? h : Rm, ir = (_ = (k = fe == null ? void 0 : fe.input) != null ? k : F.Input) != null ? _ : "input", ar = (S = P == null ? void 0 : P.root) != null ? S : A.root, Pr = (w = P == null ? void 0 : P.rail) != null ? w : A.rail, sr = (g = P == null ? void 0 : P.track) != null ? g : A.track, Vt = (I = P == null ? void 0 : P.thumb) != null ? I : A.thumb, Ft = (C = P == null ? void 0 : P.valueLabel) != null ? C : A.valueLabel, _n = (oe = P == null ? void 0 : P.mark) != null ? oe : A.mark, Rn = (ie = P == null ? void 0 : P.markLabel) != null ? ie : A.markLabel, kr = (W = P == null ? void 0 : P.input) != null ? W : A.input, wn = mt({
    elementType: Ue,
    getSlotProps: bt,
    externalSlotProps: ar,
    externalForwardedProps: dt,
    additionalProps: E({}, mm(Ue) && {
      as: B
    }),
    ownerState: E({}, ke, ar == null ? void 0 : ar.ownerState),
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
      style: E({}, Xe[Be].offset(ue), Xe[Be].leap(Ye))
    },
    ownerState: E({}, ke, sr == null ? void 0 : sr.ownerState),
    className: he.track
  }), lr = mt({
    elementType: or,
    getSlotProps: pt,
    externalSlotProps: Vt,
    ownerState: E({}, ke, Vt == null ? void 0 : Vt.ownerState),
    className: he.thumb
  }), d = mt({
    elementType: Et,
    externalSlotProps: Ft,
    ownerState: E({}, ke, Ft == null ? void 0 : Ft.ownerState),
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
  return /* @__PURE__ */ z.jsxs(Ue, E({}, wn, {
    children: [/* @__PURE__ */ z.jsx(Rt, E({}, Cn)), /* @__PURE__ */ z.jsx(Lt, E({}, Pn)), le.filter((Q) => Q.value >= Z && Q.value <= G).map((Q, ae) => {
      const ce = rn(Q.value, Z, G), se = Xe[Be].offset(ce);
      let _e;
      return Ce === !1 ? _e = de.indexOf(Q.value) !== -1 : _e = Ce === "normal" && (T ? Q.value >= de[0] && Q.value <= de[de.length - 1] : Q.value <= de[0]) || Ce === "inverted" && (T ? Q.value <= de[0] || Q.value >= de[de.length - 1] : Q.value >= de[0]), /* @__PURE__ */ z.jsxs(b.Fragment, {
        children: [/* @__PURE__ */ z.jsx($t, E({
          "data-index": ae
        }, R, !hr($t) && {
          markActive: _e
        }, {
          style: E({}, se, R.style),
          className: ye(R.className, _e && he.markActive)
        })), Q.label != null ? /* @__PURE__ */ z.jsx(Nt, E({
          "aria-hidden": !0,
          "data-index": ae
        }, j, !hr(Nt) && {
          markLabelActive: _e
        }, {
          style: E({}, se, j.style),
          className: ye(he.markLabel, j.className, _e && he.markLabelActive),
          children: Q.label
        })) : null]
      }, ae);
    }), de.map((Q, ae) => {
      const ce = rn(Q, Z, G), se = Xe[Be].offset(ce), _e = Ve === "off" ? Cm : Et;
      return (
        /* TODO v6: Change component structure. It will help in avoiding the complicated React.cloneElement API added in SliderValueLabel component. Should be: Thumb -> Input, ValueLabel. Follow Joy UI's Slider structure. */
        /* @__PURE__ */ z.jsx(_e, E({}, !hr(_e) && {
          valueLabelFormat: Fe,
          valueLabelDisplay: Ve,
          value: typeof Fe == "function" ? Fe(pe(Q), ae) : Fe,
          index: ae,
          open: st === ae || _t === ae || Ve === "on",
          disabled: K
        }, d, {
          children: /* @__PURE__ */ z.jsx(or, E({
            "data-index": ae
          }, lr, {
            className: ye(he.thumb, lr.className, _t === ae && he.active, $ === ae && he.focusVisible),
            style: E({}, se, Je(ae), lr.style),
            children: /* @__PURE__ */ z.jsx(ir, E({
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
process.env.NODE_ENV !== "production" && (vs.propTypes = {
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
const Pm = vs;
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
}) => E({
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
}) => t.variant === "regular" && e.mixins.toolbar), gs = /* @__PURE__ */ b.forwardRef(function(t, r) {
  const n = at({
    props: t,
    name: "MuiToolbar"
  }), {
    className: o,
    component: i = "div",
    disableGutters: s = !1,
    variant: l = "regular"
  } = n, c = Re(n, $m), u = E({}, n, {
    component: i,
    disableGutters: s,
    variant: l
  }), f = Nm(u);
  return /* @__PURE__ */ z.jsx(jm, E({
    as: i,
    className: ye(f.root, o),
    ref: r,
    ownerState: u
  }, c));
});
process.env.NODE_ENV !== "production" && (gs.propTypes = {
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
const Am = gs;
var No = {}, Bn = {};
const Mm = /* @__PURE__ */ St(gd);
var Ji;
function ys() {
  return Ji || (Ji = 1, function(e) {
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
  }(Bn)), Bn;
}
var Im = Tn;
Object.defineProperty(No, "__esModule", {
  value: !0
});
var bs = No.default = void 0, Dm = Im(ys()), Lm = z;
bs = No.default = (0, Dm.default)(/* @__PURE__ */ (0, Lm.jsx)("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu");
var jo = {}, Vm = Tn;
Object.defineProperty(jo, "__esModule", {
  value: !0
});
var Es = jo.default = void 0, Fm = Vm(ys()), zm = z;
Es = jo.default = (0, Fm.default)(/* @__PURE__ */ (0, zm.jsx)("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "ChevronRight");
const Wm = ({ handleNodeSizeChange: e, helios: t }) => {
  const [r, n] = Mo(!1), [o, i] = Mo(50), s = () => {
    n(!0);
  }, l = () => {
    n(!1);
  }, c = (u, f) => {
    if (i(f), e(f, t), console.log("helios instance from drawercomponent", t), t) {
      const p = Math.pow(10, f / 100);
      t.nodesGlobalSizeScale(p), t.render();
    }
  };
  return /* @__PURE__ */ z.jsxs("div", { children: [
    /* @__PURE__ */ z.jsxs(
      dm,
      {
        variant: "persistent",
        anchor: "right",
        open: r,
        children: [
          /* @__PURE__ */ z.jsxs(Am, { sx: { backgroundColor: "primary.main" }, children: [
            /* @__PURE__ */ z.jsx(Ui, { variant: "h6", noWrap: !0, sx: { flexGrow: 1 }, children: "Settings" }),
            /* @__PURE__ */ z.jsx(zi, { onClick: l, children: /* @__PURE__ */ z.jsx(Es, {}) })
          ] }),
          /* @__PURE__ */ z.jsx(em, {}),
          /* @__PURE__ */ z.jsx(Ui, { variant: "body1", children: "Size" }),
          /* @__PURE__ */ z.jsx(
            Pm,
            {
              value: o,
              onChange: c,
              min: 0,
              max: 100,
              "aria-labelledby": "size-slider"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ z.jsx(zi, { onClick: s, size: "large", sx: { position: "absolute", top: 10, right: 10 }, children: /* @__PURE__ */ z.jsx(bs, {}) })
  ] });
};
export {
  Wm as default
};
