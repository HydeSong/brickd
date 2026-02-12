'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [5324],
  {
    65324: function (R, N, v) {
      v.r(N),
        v.d(N, {
          default: function () {
            return B;
          },
        });
      var r = {
          card: 'P4wv8mabqC8I8iG8PtLn',
          cardBordered: 'xGx1hqgSw1k3sVZuMKdh',
          cardHoverable: 'URUlRsSlfaYZNMq2x3PN',
          cardHeader: 'OQ74S5ab0kFz5RR6mvfS',
          cardTitle: 'NwoHndx6dTctoMWGSTzH',
          cardExtra: 'tfEcQi3RWaosveWoI8nT',
          cardBody: 'UEHfqKjY6LcMBR8Fbj0h',
          cardFooter: 'XbqEKan1JzYyzBSe5e4r',
          cardSimple: 'ylGToCWu3282NctZBaEc',
          cardOutlined: 'kFc55jbKUqojD2cPVxSv',
          cardElevated: 'PNLoZUOqpasP2txWUSNA',
          cardSmall: 'Wy7zfQ6DlcQuCLeRCMQI',
          cardMedium: 'KXyJcnLQUDgB7aWmlhui',
          cardLarge: 'K07t6u8xSDYT5rNbNcNz',
          cardGrid: 'yNDc3rsmc0ydthopM4ys',
          small: 'qDlnRU3Cqi0G0mCC3zfh',
          medium: 'w8FtyaUbhN0FmcpJiU6n',
          large: 'lTtYKdFuuz8X3QrVco6x',
          cardShadow1: 'LS5DK3l3hlkRr3oZFZ6q',
          cardShadow2: 't_l3tubLfc8J3tjZCg_1',
          cardShadow3: 'djrO5_1a_xIQ1qeFQtRc',
          cardShadow4: 'soLJBhy9zhcseFBvvbB4',
          cardBackgroundDefault: 'MfwNBMAPSW8J1XDsfIBY',
          cardBackgroundLight: 'vtuaARNlpzQZerBLLqwf',
          cardBackgroundDark: 'iuaRzqohV_cVJV6ERACe',
          cardTitleLarge: 'VeAJAAW3lgmq0d1rYU_Q',
          cardTitleMedium: 'TVxVrxVv8u0Obsm7MOJH',
          cardTitleSmall: 'dW_ss3GFuwYXJbySHSS0',
        },
        c = v(52676),
        i = function e(a) {
          var s = a.title,
            d = a.extra,
            l = a.bordered,
            t = l === void 0 ? !0 : l,
            o = a.hoverable,
            S = o === void 0 ? !1 : o,
            y = a.className,
            f = y === void 0 ? '' : y,
            x = a.style,
            C = x === void 0 ? {} : x,
            h = a.children,
            j = function () {
              var u = [r.card];
              return (
                t && u.push(r.cardBordered),
                S && u.push(r.cardHoverable),
                f && u.push(f),
                u.join(' ')
              );
            },
            b = !1,
            m = !1;
          return (
            React.Children.forEach(h, function (n) {
              React.isValidElement(n) &&
                (n.type === e.Header
                  ? (b = !0)
                  : n.type === e.Body && (m = !0));
            }),
            (0, c.jsxs)('div', {
              className: j(),
              style: C,
              children: [
                (s || d) &&
                  !b &&
                  (0, c.jsxs)('div', {
                    className: r.cardHeader,
                    children: [
                      s &&
                        (0, c.jsx)('div', {
                          className: r.cardTitle,
                          children: s,
                        }),
                      d &&
                        (0, c.jsx)('div', {
                          className: r.cardExtra,
                          children: d,
                        }),
                    ],
                  }),
                !m && (0, c.jsx)('div', { className: r.cardBody, children: h }),
                m && h,
              ],
            })
          );
        };
      (i.Header = function (e) {
        var a = e.title,
          s = e.extra,
          d = e.className,
          l = d === void 0 ? '' : d,
          t = e.style,
          o = t === void 0 ? {} : t;
        return (0, c.jsxs)('div', {
          className: ''.concat(r.cardHeader, ' ').concat(l),
          style: o,
          children: [
            a && (0, c.jsx)('div', { className: r.cardTitle, children: a }),
            s && (0, c.jsx)('div', { className: r.cardExtra, children: s }),
          ],
        });
      }),
        (i.Body = function (e) {
          var a = e.className,
            s = a === void 0 ? '' : a,
            d = e.style,
            l = d === void 0 ? {} : d,
            t = e.children;
          return (0, c.jsx)('div', {
            className: ''.concat(r.cardBody, ' ').concat(s),
            style: l,
            children: t,
          });
        }),
        (i.Footer = function (e) {
          var a = e.className,
            s = a === void 0 ? '' : a,
            d = e.style,
            l = d === void 0 ? {} : d,
            t = e.children;
          return (0, c.jsx)('div', {
            className: ''.concat(r.cardFooter, ' ').concat(s),
            style: l,
            children: t,
          });
        });
      var B = i;
    },
  },
]);
