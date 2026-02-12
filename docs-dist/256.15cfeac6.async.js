'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [256],
  {
    80256: function (b, n, l) {
      l.r(n),
        l.d(n, {
          default: function () {
            return N;
          },
        });
      var r = {
          progressLine: 'vX2EmcPa7wknSOm8FLQ8',
          progressTrail: 'prtSLEXOHZIzu0wO1OTS',
          progressBar: 'C2vB3dDgxQBurCSjwgVG',
          progressInfo: 'QLsjtRGp6eg9YD5DlDtR',
          progressCircle: 'txBHiRedic2W9e9STnN8',
          progressCircleContainer: 'HJVLHP32NwQayrW76uFc',
          progressCircleSvg: 'wcM_Fx1uo8F4MXDKawBr',
          progressCircleTrail: 'vBFfDjNgKZYzGUre3ZVA',
          progressCircleBar: 'ShCZbw8abaIq6Z1jSMR3',
          progressCircleInfo: 'iUg96iIBn_cx5F0VTu6R',
          progressSuccess: 'ZsskKjtpjMoS25i6dNto',
          progressException: 'V_a82zzSrX8XcobXdsrk',
          progressActive: 'Txj__V2cN8QvALH9sjt_',
          'progress-active': 'HK9HDyg9TQSf5rW3IO7o',
          progressSmall: 'FLbT2pCSy6AaVJzIKIwP',
          progressLarge: '_w9u1dgHGOMlvpM8dopm',
        },
        s = l(52676),
        j = function (e) {
          var w = e.percent,
            g = e.type,
            I = g === void 0 ? 'line' : g,
            d = e.status,
            p = e.strokeWidth,
            t = p === void 0 ? 8 : p,
            u = e.showInfo,
            v = u === void 0 ? !0 : u,
            c = e.format,
            f = e.className,
            h = f === void 0 ? '' : f,
            C = e.style,
            m = C === void 0 ? {} : C,
            y = e.strokeColor,
            k = e.trailColor,
            o = Math.max(0, Math.min(100, w)),
            x = function () {
              return (
                y ||
                (d === 'success'
                  ? '#52c41a'
                  : d === 'exception'
                  ? '#ff4d4f'
                  : '#1890ff')
              );
            },
            P = function () {
              var a = {
                  width: ''.concat(o, '%'),
                  backgroundColor: x(),
                  height: ''.concat(t, 'px'),
                },
                i = {
                  backgroundColor: k || '#f0f0f0',
                  height: ''.concat(t, 'px'),
                };
              return (0, s.jsxs)('div', {
                className: ''.concat(r.progressLine, ' ').concat(h),
                style: m,
                children: [
                  (0, s.jsx)('div', {
                    className: r.progressTrail,
                    style: i,
                    children: (0, s.jsx)('div', {
                      className: r.progressBar,
                      style: a,
                    }),
                  }),
                  v &&
                    (0, s.jsx)('div', {
                      className: r.progressInfo,
                      children: c ? c(o) : ''.concat(Math.round(o), '%'),
                    }),
                ],
              });
            },
            D = function () {
              var a = 50 - t / 2,
                i = 2 * Math.PI * a,
                L = i,
                M = i * (1 - o / 100),
                B = {
                  stroke: x(),
                  strokeWidth: t,
                  strokeDasharray: L,
                  strokeDashoffset: M,
                  transform: 'rotate(-90deg)',
                  transformOrigin: '50% 50%',
                },
                T = { stroke: k || '#f0f0f0', strokeWidth: t };
              return (0, s.jsx)('div', {
                className: ''.concat(r.progressCircle, ' ').concat(h),
                style: m,
                children: (0, s.jsxs)('div', {
                  className: r.progressCircleContainer,
                  children: [
                    (0, s.jsxs)('svg', {
                      width: '100',
                      height: '100',
                      className: r.progressCircleSvg,
                      children: [
                        (0, s.jsx)('circle', {
                          cx: '50',
                          cy: '50',
                          r: a,
                          className: r.progressCircleTrail,
                          style: T,
                        }),
                        (0, s.jsx)('circle', {
                          cx: '50',
                          cy: '50',
                          r: a,
                          className: r.progressCircleBar,
                          style: B,
                        }),
                      ],
                    }),
                    v &&
                      (0, s.jsx)('div', {
                        className: r.progressCircleInfo,
                        children: c ? c(o) : ''.concat(Math.round(o), '%'),
                      }),
                  ],
                }),
              });
            };
          return I === 'line' ? P() : D();
        },
        N = j;
    },
  },
]);
