'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [6833],
  {
    16833: function (X, g, s) {
      s.r(g),
        s.d(g, {
          default: function () {
            return Y;
          },
        });
      var A = s(48305),
        k = s.n(A),
        u = s(75271),
        e = {
          tour: 'xj8eVHHEdQP6XTNxEdg1',
          tourMask: 'bpWZAzmZ8cUgPSV2wCZp',
          tourMaskHole: 'YVkUTL4RcyLx5YtIs1ui',
          tourPopup: 'pb8ibNCrYZooYLW9fPai',
          tourPopupContent: 'YrNBeKy8QkA4z0Wu4CaE',
          tourPopupTitle: 'ENpxrj0JInQChGGAQbUT',
          tourPopupDescription: 'NGmVYIlnl_MV7f3YGS8z',
          tourPopupFooter: 'fJfIYNyAEDMyOfYKke1Y',
          tourPopupControls: 'flqQH6chdcoCgtKQaDoL',
          tourPopupButton: 'LBfA5P8l2tEFORpflgFG',
          tourPopupButtonPrimary: 'QKFAwTTVsMstqScaiNSE',
          tourPopupArrow: 'xWEt48Mn0qF03i0iktqk',
          'tour-popup-arrow-top': 'StbbegJa0atL6ScS3TIj',
          'tour-popup-arrow-bottom': 'NiMi4BHy3KoQcKT2T8cH',
          'tour-popup-arrow-left': 'sNXW31N1uw1h64aU76xc',
          'tour-popup-arrow-right': 'ayfzKYsqIQMTMxAe44xK',
        },
        r = s(52676),
        M = function (a) {
          var P = a.steps,
            i = a.visible,
            c = a.current,
            x = a.onFinish,
            T = a.onCancel,
            m = a.onCurrentChange,
            y = a.mask,
            B = y === void 0 ? !0 : y,
            b = a.maskClosable,
            R = b === void 0 ? !0 : b,
            Q = a.className,
            F = a.style,
            K = (0, u.useState)(0),
            j = k()(K, 2),
            E = j[0],
            N = j[1],
            L = (0, u.useState)(null),
            S = k()(L, 2),
            t = S[0],
            H = S[1],
            z = (0, u.useRef)(null),
            D = (0, u.useRef)(null),
            p = c !== void 0,
            f = p ? c : E,
            n = P[f];
          (0, u.useEffect)(
            function () {
              p && c !== E && N(c);
            },
            [c, p],
          );
          var I = function (o) {
              return typeof o == 'string' ? document.querySelector(o) : o;
            },
            l = function () {
              if (n) {
                var o = I(n.target);
                o && H(o.getBoundingClientRect());
              }
            };
          (0, u.useEffect)(
            function () {
              i && n && l();
            },
            [i, n],
          ),
            (0, u.useEffect)(
              function () {
                if (i && n)
                  return (
                    l(),
                    window.addEventListener('resize', l),
                    function () {
                      window.removeEventListener('resize', l);
                    }
                  );
              },
              [i, n],
            );
          var V = function () {
              var o = f + 1;
              o < P.length
                ? (p || N(o), m && m(o), setTimeout(l, 0))
                : x && x();
            },
            G = function () {
              var o = f - 1;
              o >= 0 && (p || N(o), m && m(o), setTimeout(l, 0));
            },
            w = function () {
              T && T();
            },
            W = function () {
              R && w();
            };
          if (!i || !n) return null;
          var d = n.placement || 'top',
            C = n.offset || 10,
            v = {};
          t &&
            (d === 'top'
              ? (v = {
                  top: t.top - C - 300,
                  left: t.left + t.width / 2,
                  transform: 'translateX(-50%)',
                })
              : d === 'bottom'
              ? (v = {
                  top: t.bottom + C,
                  left: t.left + t.width / 2,
                  transform: 'translateX(-50%)',
                })
              : d === 'left'
              ? (v = {
                  top: t.top + t.height / 2,
                  left: t.left - C - 300,
                  transform: 'translateY(-50%)',
                })
              : d === 'right' &&
                (v = {
                  top: t.top + t.height / 2,
                  left: t.right + C,
                  transform: 'translateY(-50%)',
                }));
          var U = [e.tour, Q].filter(Boolean).join(' ');
          return (0, r.jsxs)('div', {
            className: U,
            style: F,
            ref: z,
            children: [
              B &&
                (0, r.jsx)('div', {
                  className: e.tourMask,
                  ref: D,
                  onClick: W,
                  children:
                    t &&
                    (0, r.jsx)('div', {
                      className: e.tourMaskHole,
                      style: {
                        top: t.top,
                        left: t.left,
                        width: t.width,
                        height: t.height,
                      },
                    }),
                }),
              (0, r.jsxs)('div', {
                className: e.tourPopup,
                style: v,
                children: [
                  (0, r.jsxs)('div', {
                    className: e.tourPopupContent,
                    children: [
                      n.title &&
                        (0, r.jsx)('div', {
                          className: e.tourPopupTitle,
                          children: n.title,
                        }),
                      (0, r.jsx)('div', {
                        className: e.tourPopupDescription,
                        children: n.content,
                      }),
                      (0, r.jsxs)('div', {
                        className: e.tourPopupFooter,
                        children: [
                          (0, r.jsx)('button', {
                            type: 'button',
                            className: e.tourPopupButton,
                            onClick: w,
                            children: '\u53D6\u6D88',
                          }),
                          (0, r.jsxs)('div', {
                            className: e.tourPopupControls,
                            children: [
                              f > 0 &&
                                (0, r.jsx)('button', {
                                  type: 'button',
                                  className: e.tourPopupButton,
                                  onClick: G,
                                  children: '\u4E0A\u4E00\u6B65',
                                }),
                              (0, r.jsx)('button', {
                                type: 'button',
                                className: ''
                                  .concat(e.tourPopupButton, ' ')
                                  .concat(e.tourPopupButtonPrimary),
                                onClick: V,
                                children:
                                  f === P.length - 1
                                    ? '\u5B8C\u6210'
                                    : '\u4E0B\u4E00\u6B65',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)('div', {
                    className: ''
                      .concat(e.tourPopupArrow, ' ')
                      .concat(e['tourPopupArrow-'.concat(d)]),
                  }),
                ],
              }),
            ],
          });
        },
        Y = M;
    },
  },
]);
