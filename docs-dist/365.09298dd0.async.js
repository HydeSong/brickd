'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [365],
  {
    30365: function (V, N, c) {
      c.r(N),
        c.d(N, {
          default: function () {
            return w;
          },
        });
      var R = c(48305),
        x = c.n(R),
        n = c(75271),
        a = {
          carousel: 'MD1gFImFx2ApIXuvaKd8',
          carouselContainer: 'B03v3L9pt50iajCNqVC7',
          carouselTrack: 'TMlyPJlmRFwpPS8bNhsI',
          carouselItem: 'YdQEH1fldUAVNptaN0gZ',
          carouselArrow: 'UADR5FcW3G4UwLwWZvzD',
          carouselArrowPrev: 'CwuVXaSxRQJtBM0fL1HK',
          carouselArrowNext: 'Zu3GTmqXLEagI9uFYfWL',
          carouselDots: 'aClrAkTRnYMc_d9hxAXv',
          carouselDot: 'm5Tn4Gzw81EzPs7fWom0',
          carouselDotActive: 'iYWdcWKRV9sNXsYIe7jR',
        },
        r = c(52676),
        T = function (e) {
          var u = e.className,
            f = u === void 0 ? '' : u,
            i = e.style,
            m = i === void 0 ? {} : i,
            h = e.children;
          return (0, r.jsx)('div', {
            className: ''.concat(a.carouselItem, ' ').concat(f),
            style: m,
            children: h,
          });
        },
        A = function (e) {
          var u = e.autoplay,
            f = u === void 0 ? !0 : u,
            i = e.autoplaySpeed,
            m = i === void 0 ? 3e3 : i,
            h = e.defaultActiveIndex,
            $ = h === void 0 ? 0 : h,
            d = e.activeIndex,
            l = e.onChange,
            p = e.className,
            b = p === void 0 ? '' : p,
            S = e.style,
            E = S === void 0 ? {} : S,
            j = e.children,
            F = (0, n.useState)(d !== void 0 ? d : $),
            D = x()(F, 2),
            v = D[0],
            y = D[1],
            W = (0, n.useState)(0),
            g = x()(W, 2),
            s = g[0],
            X = g[1],
            C = (0, n.useRef)(null),
            I = (0, n.useRef)(null),
            k = function () {
              var t = (v + 1) % s;
              y(t), l && l(t);
            },
            L = function () {
              var t = (v - 1 + s) % s;
              y(t), l && l(t);
            },
            Y = function (t) {
              y(t), l && l(t);
            };
          (0, n.useEffect)(
            function () {
              d !== void 0 && y(d);
            },
            [d],
          ),
            (0, n.useEffect)(
              function () {
                if (I.current) {
                  var o = I.current.querySelectorAll('.carouselItem');
                  X(o.length);
                }
              },
              [j],
            ),
            (0, n.useEffect)(
              function () {
                return (
                  f &&
                    (C.current = setInterval(function () {
                      k();
                    }, m)),
                  function () {
                    C.current && clearInterval(C.current);
                  }
                );
              },
              [f, m, v, s],
            );
          var M = function () {
            return { transform: 'translateX(-'.concat(v * 100, '%)') };
          };
          return (0, r.jsxs)('div', {
            className: ''.concat(a.carousel, ' ').concat(b),
            style: E,
            children: [
              (0, r.jsx)('div', {
                className: a.carouselContainer,
                ref: I,
                children: (0, r.jsx)('div', {
                  className: a.carouselTrack,
                  style: M(),
                  children: j,
                }),
              }),
              s > 1 &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)('button', {
                      type: 'button',
                      className: ''
                        .concat(a.carouselArrow, ' ')
                        .concat(a.carouselArrowPrev),
                      onClick: L,
                      children: '<',
                    }),
                    (0, r.jsx)('button', {
                      type: 'button',
                      className: ''
                        .concat(a.carouselArrow, ' ')
                        .concat(a.carouselArrowNext),
                      onClick: k,
                      children: '>',
                    }),
                    (0, r.jsx)('div', {
                      className: a.carouselDots,
                      children: Array.from({ length: s }).map(function (o, t) {
                        return (0, r.jsx)(
                          'button',
                          {
                            type: 'button',
                            className: ''
                              .concat(a.carouselDot, ' ')
                              .concat(v === t ? a.carouselDotActive : ''),
                            onClick: function () {
                              return Y(t);
                            },
                          },
                          t,
                        );
                      }),
                    }),
                  ],
                }),
            ],
          });
        };
      A.Item = T;
      var w = A;
    },
  },
]);
