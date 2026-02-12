(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [5302, 4413],
  {
    44413: function (n, u, e) {
      'use strict';
      e.r(u),
        e.d(u, {
          default: function () {
            return j;
          },
        });
      var x = e(15558),
        v = e.n(x),
        s = e(48305),
        p = e.n(s),
        a = e(75271),
        r = {
          tree: 'WNRPiev1_6goYQUQUoH5',
          treeNode: 'Pn8U8tUTRs_X1PAzxybf',
          treeNodeContent: 'HkRHrtkVrsBsp27oImE8',
          treeNodeSelected: 'Qxk4gcWhBCU1NlrZBBR8',
          treeNodeDisabled: 'xNpTZUBS23oxWbvhjpZW',
          treeNodeSwitcher: 'CTdYuod8JcctCvAz5VIj',
          treeNodeSwitcherExpanded: 'HayYayBiY0kj6LjKrTZX',
          treeNodeSwitcherPlaceholder: '_KpCm8SlY7oSEJ_LQCYP',
          treeNodeCheckbox: 'sZZkvagtptsIYcUhoZpx',
          treeNodeTitle: 'a3t7TjKOZI1FP1QNt175',
          treeNodeChildren: 'e9r4r9sWobcHLEGZIO7l',
          treeShowLine: 'lm47nQMzpx0qVz3kic_R',
        },
        d = e(52676),
        o = function (c) {
          var l = c.data,
            O = c.defaultExpandedKeys,
            b = O === void 0 ? [] : O,
            T = c.expandedKeys,
            H = c.defaultSelectedKeys,
            L = H === void 0 ? [] : H,
            m = c.selectedKeys,
            $ = c.onExpand,
            I = c.onSelect,
            M = c.showLine,
            Y = M === void 0 ? !1 : M,
            E = c.checkable,
            W = E === void 0 ? !1 : E,
            Z = c.className,
            B = Z === void 0 ? '' : Z,
            z = c.style,
            F = z === void 0 ? {} : z,
            re = (0, a.useState)(T !== void 0 ? T : b),
            P = p()(re, 2),
            k = P[0],
            J = P[1],
            X = (0, a.useState)(m !== void 0 ? m : L),
            f = p()(X, 2),
            C = f[0],
            G = f[1];
          (0, a.useEffect)(
            function () {
              T !== void 0 && J(T);
            },
            [T],
          ),
            (0, a.useEffect)(
              function () {
                m !== void 0 && G(m);
              },
              [m],
            );
          var q = function (t) {
              var i;
              k.includes(t)
                ? (i = k.filter(function (h) {
                    return h !== t;
                  }))
                : (i = [].concat(v()(k), [t])),
                J(i),
                $ && $(i);
            },
            y = function (t, i) {
              var h;
              C.includes(t)
                ? (h = C.filter(function (g) {
                    return g !== t;
                  }))
                : (h = [].concat(v()(C), [t])),
                G(h),
                I && I(h, { node: i, selected: h.includes(t) });
            },
            Q = function (t) {
              return k.includes(t);
            },
            ne = function (t) {
              return C.includes(t);
            },
            _ = function (t) {
              return !!(t.children && t.children.length > 0);
            },
            ae = function S(t) {
              var i,
                h =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : 0,
                g = Q(t.key),
                w = ne(t.key),
                R = _(t);
              return (0, d.jsxs)(
                'div',
                {
                  className: r.treeNode,
                  children: [
                    (0, d.jsxs)('div', {
                      className: ''
                        .concat(r.treeNodeContent, ' ')
                        .concat(w ? r.treeNodeSelected : '', ' ')
                        .concat(t.disabled ? r.treeNodeDisabled : ''),
                      onClick: function () {
                        return !t.disabled && y(t.key, t);
                      },
                      children: [
                        R &&
                          (0, d.jsx)('span', {
                            className: ''
                              .concat(r.treeNodeSwitcher, ' ')
                              .concat(g ? r.treeNodeSwitcherExpanded : ''),
                            onClick: function (U) {
                              U.stopPropagation(), t.disabled || q(t.key);
                            },
                            children: g ? '\u25BC' : '\u25BA',
                          }),
                        !R &&
                          Y &&
                          (0, d.jsx)('span', {
                            className: r.treeNodeSwitcherPlaceholder,
                          }),
                        W &&
                          (0, d.jsx)('span', {
                            className: r.treeNodeCheckbox,
                            children: (0, d.jsx)('input', {
                              type: 'checkbox',
                              checked: w,
                              onChange: function () {},
                              onClick: function (U) {
                                return U.stopPropagation();
                              },
                              disabled: t.disabled,
                            }),
                          }),
                        (0, d.jsx)('span', {
                          className: r.treeNodeTitle,
                          children: t.title,
                        }),
                      ],
                    }),
                    R &&
                      g &&
                      (0, d.jsx)('div', {
                        className: r.treeNodeChildren,
                        style: { paddingLeft: ''.concat(h * 20 + 20, 'px') },
                        children:
                          (i = t.children) === null || i === void 0
                            ? void 0
                            : i.map(function (K) {
                                return S(K, h + 1);
                              }),
                      }),
                  ],
                },
                t.key,
              );
            };
          return (0, d.jsx)('div', {
            className: ''
              .concat(r.tree, ' ')
              .concat(Y ? r.treeShowLine : '', ' ')
              .concat(B),
            style: F,
            children: l.map(function (S) {
              return ae(S);
            }),
          });
        },
        j = o;
    },
    95302: function (n, u, e) {
      'use strict';
      e.r(u),
        e.d(u, {
          default: function () {
            return D;
          },
        });
      var x = e(335),
        v = e.n(x),
        s = e(48305),
        p = e.n(s),
        a = e(75271),
        r = {
          treeSelect: 'CgeNLknR5a4zzZ_NBGsW',
          treeSelectTrigger: 'GbwXR4V3aRs9olJAeQEM',
          treeSelectTriggerOpen: 'QXZShfznyQsQBDWbiogw',
          treeSelectValue: 'VOEQYEg8IcsshoaLTa3_',
          treeSelectArrow: 'xUDzd7wPYYYslAPWJpRs',
          treeSelectArrowOpen: 'x5Hb1KtTyRMkvsY6Ka4r',
          treeSelectDropdown: 'V04u1ddHb_UgV66tWnuw',
          treeSelectSearch: 'cEMUQnbDXI04YP2iUchE',
          treeSelectSearchInput: 'SOhEWDeg2k0TVx9QMVJk',
          treeSelectTree: 'VMqGhP2FeKEaqc4pObTy',
          treeSelectMultiple: 'EIypN4fbyMx6dlfhaZRU',
          treeSelectTag: 'c6wSHn0wEqg0Dr9KaAky',
          treeSelectTagClose: 'NUx66KhfSBcHKgy4lE52',
        },
        d = e(44413),
        o = e(52676),
        j = function (l) {
          var O = l.data,
            b = l.value,
            T = l.defaultValue,
            H = l.placeholder,
            L = H === void 0 ? '\u8BF7\u9009\u62E9' : H,
            m = l.onChange,
            $ = l.multiple,
            I = $ === void 0 ? !1 : $,
            M = l.searchable,
            Y = M === void 0 ? !1 : M,
            E = l.treeExpandedKeys,
            W = l.treeDefaultExpandedKeys,
            Z = W === void 0 ? [] : W,
            B = l.treeCheckable,
            z = B === void 0 ? !1 : B,
            F = l.className,
            re = F === void 0 ? '' : F,
            P = l.style,
            k = P === void 0 ? {} : P,
            J = (0, a.useState)(
              b !== void 0 ? b : T !== void 0 ? T : I ? [] : '',
            ),
            X = p()(J, 2),
            f = X[0],
            C = X[1],
            G = (0, a.useState)(!1),
            q = p()(G, 2),
            y = q[0],
            Q = q[1],
            ne = (0, a.useState)(''),
            _ = p()(ne, 2),
            ae = _[0],
            S = _[1],
            t = (0, a.useState)(E !== void 0 ? E : Z),
            i = p()(t, 2),
            h = i[0],
            g = i[1],
            w = (0, a.useRef)(null);
          (0, a.useEffect)(
            function () {
              b !== void 0 && C(b);
            },
            [b],
          ),
            (0, a.useEffect)(
              function () {
                E !== void 0 && g(E);
              },
              [E],
            ),
            (0, a.useEffect)(
              function () {
                var A = function (V) {
                  w.current && !w.current.contains(V.target) && Q(!1);
                };
                return (
                  y && document.addEventListener('mousedown', A),
                  function () {
                    document.removeEventListener('mousedown', A);
                  }
                );
              },
              [y],
            );
          var R = function () {
              Q(!y);
            },
            K = function (N) {
              var V = I ? N : N[0] || '';
              C(V), m && m(V), I || Q(!1);
            },
            U = function (N) {
              g(N);
            },
            de = function () {
              if (Array.isArray(f))
                return f.length === 0
                  ? L
                  : ''.concat(f.length, ' \u9879\u5DF2\u9009\u62E9');
              if (!f) return L;
              var N = function V(le, oe) {
                var ee = v()(oe),
                  se;
                try {
                  for (ee.s(); !(se = ee.n()).done; ) {
                    var te = se.value;
                    if (te.key === le) return te.title;
                    if (te.children) {
                      var ce = V(le, te.children);
                      if (ce) return ce;
                    }
                  }
                } catch (ie) {
                  ee.e(ie);
                } finally {
                  ee.f();
                }
                return '';
              };
              return N(f, O) || L;
            };
          return (0, o.jsxs)('div', {
            className: ''.concat(r.treeSelect, ' ').concat(re),
            style: k,
            ref: w,
            children: [
              (0, o.jsxs)('div', {
                className: ''
                  .concat(r.treeSelectTrigger, ' ')
                  .concat(y ? r.treeSelectTriggerOpen : ''),
                onClick: R,
                children: [
                  (0, o.jsx)('span', {
                    className: r.treeSelectValue,
                    children: de(),
                  }),
                  (0, o.jsx)('span', {
                    className: ''
                      .concat(r.treeSelectArrow, ' ')
                      .concat(y ? r.treeSelectArrowOpen : ''),
                    children: y ? '\u25BC' : '\u25BA',
                  }),
                ],
              }),
              y &&
                (0, o.jsxs)('div', {
                  className: r.treeSelectDropdown,
                  children: [
                    Y &&
                      (0, o.jsx)('div', {
                        className: r.treeSelectSearch,
                        children: (0, o.jsx)('input', {
                          type: 'text',
                          value: ae,
                          onChange: function (N) {
                            return S(N.target.value);
                          },
                          placeholder: '\u641C\u7D22',
                          className: r.treeSelectSearchInput,
                        }),
                      }),
                    (0, o.jsx)('div', {
                      className: r.treeSelectTree,
                      children: (0, o.jsx)(d.default, {
                        data: O,
                        expandedKeys: h,
                        onExpand: U,
                        selectedKeys: Array.isArray(f) ? f : f ? [f] : [],
                        onSelect: K,
                        checkable: z,
                      }),
                    }),
                  ],
                }),
            ],
          });
        },
        D = j;
    },
    38498: function (n, u, e) {
      var x = e(78770);
      function v(s) {
        if (Array.isArray(s)) return x(s);
      }
      (n.exports = v),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
    335: function (n, u, e) {
      var x = e(31479);
      function v(s, p) {
        var a =
          (typeof Symbol != 'undefined' && s[Symbol.iterator]) ||
          s['@@iterator'];
        if (!a) {
          if (
            Array.isArray(s) ||
            (a = x(s)) ||
            (p && s && typeof s.length == 'number')
          ) {
            a && (s = a);
            var r = 0,
              d = function () {};
            return {
              s: d,
              n: function () {
                return r >= s.length
                  ? { done: !0 }
                  : { done: !1, value: s[r++] };
              },
              e: function (l) {
                throw l;
              },
              f: d,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var o = !0,
          j = !1,
          D;
        return {
          s: function () {
            a = a.call(s);
          },
          n: function () {
            var l = a.next();
            return (o = l.done), l;
          },
          e: function (l) {
            (j = !0), (D = l);
          },
          f: function () {
            try {
              !o && a.return != null && a.return();
            } finally {
              if (j) throw D;
            }
          },
        };
      }
      (n.exports = v),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
    20698: function (n) {
      function u(e) {
        if (
          (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
          e['@@iterator'] != null
        )
          return Array.from(e);
      }
      (n.exports = u),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
    91162: function (n) {
      function u() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      (n.exports = u),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
    15558: function (n, u, e) {
      var x = e(38498),
        v = e(20698),
        s = e(31479),
        p = e(91162);
      function a(r) {
        return x(r) || v(r) || s(r) || p();
      }
      (n.exports = a),
        (n.exports.__esModule = !0),
        (n.exports.default = n.exports);
    },
  },
]);
