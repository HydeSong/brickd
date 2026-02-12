(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [4413],
  {
    44413: function (t, l, n) {
      'use strict';
      n.r(l),
        n.d(l, {
          default: function () {
            return Y;
          },
        });
      var h = n(15558),
        i = n.n(h),
        u = n(48305),
        N = n.n(u),
        f = n(75271),
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
        o = n(52676),
        W = function (a) {
          var $ = a.data,
            E = a.defaultExpandedKeys,
            B = E === void 0 ? [] : E,
            p = a.expandedKeys,
            T = a.defaultSelectedKeys,
            Q = T === void 0 ? [] : T,
            x = a.selectedKeys,
            K = a.onExpand,
            k = a.onSelect,
            j = a.showLine,
            A = j === void 0 ? !1 : j,
            g = a.checkable,
            M = g === void 0 ? !1 : g,
            I = a.className,
            R = I === void 0 ? '' : I,
            L = a.style,
            z = L === void 0 ? {} : L,
            V = (0, f.useState)(p !== void 0 ? p : B),
            w = N()(V, 2),
            S = w[0],
            P = w[1],
            D = (0, f.useState)(x !== void 0 ? x : Q),
            Z = N()(D, 2),
            b = Z[0],
            H = Z[1];
          (0, f.useEffect)(
            function () {
              p !== void 0 && P(p);
            },
            [p],
          ),
            (0, f.useEffect)(
              function () {
                x !== void 0 && H(x);
              },
              [x],
            );
          var J = function (e) {
              var s;
              S.includes(e)
                ? (s = S.filter(function (d) {
                    return d !== e;
                  }))
                : (s = [].concat(i()(S), [e])),
                P(s),
                K && K(s);
            },
            O = function (e, s) {
              var d;
              b.includes(e)
                ? (d = b.filter(function (v) {
                    return v !== e;
                  }))
                : (d = [].concat(i()(b), [e])),
                H(d),
                k && k(d, { node: s, selected: d.includes(e) });
            },
            X = function (e) {
              return S.includes(e);
            },
            F = function (e) {
              return b.includes(e);
            },
            G = function (e) {
              return !!(e.children && e.children.length > 0);
            },
            q = function c(e) {
              var s,
                d =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : 0,
                v = X(e.key),
                U = F(e.key),
                C = G(e);
              return (0, o.jsxs)(
                'div',
                {
                  className: r.treeNode,
                  children: [
                    (0, o.jsxs)('div', {
                      className: ''
                        .concat(r.treeNodeContent, ' ')
                        .concat(U ? r.treeNodeSelected : '', ' ')
                        .concat(e.disabled ? r.treeNodeDisabled : ''),
                      onClick: function () {
                        return !e.disabled && O(e.key, e);
                      },
                      children: [
                        C &&
                          (0, o.jsx)('span', {
                            className: ''
                              .concat(r.treeNodeSwitcher, ' ')
                              .concat(v ? r.treeNodeSwitcherExpanded : ''),
                            onClick: function (m) {
                              m.stopPropagation(), e.disabled || J(e.key);
                            },
                            children: v ? '\u25BC' : '\u25BA',
                          }),
                        !C &&
                          A &&
                          (0, o.jsx)('span', {
                            className: r.treeNodeSwitcherPlaceholder,
                          }),
                        M &&
                          (0, o.jsx)('span', {
                            className: r.treeNodeCheckbox,
                            children: (0, o.jsx)('input', {
                              type: 'checkbox',
                              checked: U,
                              onChange: function () {},
                              onClick: function (m) {
                                return m.stopPropagation();
                              },
                              disabled: e.disabled,
                            }),
                          }),
                        (0, o.jsx)('span', {
                          className: r.treeNodeTitle,
                          children: e.title,
                        }),
                      ],
                    }),
                    C &&
                      v &&
                      (0, o.jsx)('div', {
                        className: r.treeNodeChildren,
                        style: { paddingLeft: ''.concat(d * 20 + 20, 'px') },
                        children:
                          (s = e.children) === null || s === void 0
                            ? void 0
                            : s.map(function (y) {
                                return c(y, d + 1);
                              }),
                      }),
                  ],
                },
                e.key,
              );
            };
          return (0, o.jsx)('div', {
            className: ''
              .concat(r.tree, ' ')
              .concat(A ? r.treeShowLine : '', ' ')
              .concat(R),
            style: z,
            children: $.map(function (c) {
              return q(c);
            }),
          });
        },
        Y = W;
    },
    38498: function (t, l, n) {
      var h = n(78770);
      function i(u) {
        if (Array.isArray(u)) return h(u);
      }
      (t.exports = i),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    20698: function (t) {
      function l(n) {
        if (
          (typeof Symbol != 'undefined' && n[Symbol.iterator] != null) ||
          n['@@iterator'] != null
        )
          return Array.from(n);
      }
      (t.exports = l),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    91162: function (t) {
      function l() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      (t.exports = l),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    15558: function (t, l, n) {
      var h = n(38498),
        i = n(20698),
        u = n(31479),
        N = n(91162);
      function f(r) {
        return h(r) || i(r) || u(r) || N();
      }
      (t.exports = f),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
  },
]);
