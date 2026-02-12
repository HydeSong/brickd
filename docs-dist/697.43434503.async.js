'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [697],
  {
    40697: function (L, r, a) {
      a.r(r),
        a.d(r, {
          default: function () {
            return h;
          },
        });
      var m = a(48305),
        C = a.n(m),
        N = a(75271),
        e = {
          alert: 'cm_ng746lYmerPiBdSFw',
          alertContent: 'iACj7b8fv4HdnXh5JBPg',
          alertIcon: 'SuPSnnB3cMn5IfkTgV6j',
          alertMessage: 'ULLiM_LMskUSLovrQMgx',
          alertTitle: 'D2PbEiwTfoQt9E1DXSjb',
          alertDescription: 'zNr_KJ_6j4k85GLDfU0Y',
          alertClose: 'jEqNgbBe9e0Lv6_NOh7D',
          alertInfo: 'ixZXZTxz4BgbYye7iNco',
          alertSuccess: 'Q7Lvw_KNaCMlFQ0ld6UN',
          alertWarning: 'B9HVcKQcHU4quPQgMEHO',
          alertError: 'zmmoqjY_Kt4JPnL4TEg1',
          alertCompact: 'bF5EZJPSFgM2HLnusxUc',
          alertNoIcon: 'WAVev4qwmYwQ31sChetb',
          alertBanner: 'CsyrDAF43b8Nn5DJyjGk',
        },
        l = a(52676),
        f = function (s) {
          var n = s.type,
            t = n === void 0 ? 'info' : n,
            b = s.message,
            c = s.description,
            i = s.closable,
            g = i === void 0 ? !0 : i,
            o = s.onClose,
            d = s.className,
            j = d === void 0 ? '' : d,
            u = s.style,
            y = u === void 0 ? {} : u,
            x = (0, N.useState)(!0),
            v = C()(x, 2),
            A = v[0],
            S = v[1],
            D = function () {
              S(!1), o && o();
            };
          return A
            ? (0, l.jsx)('div', {
                className: ''
                  .concat(e.alert, ' ')
                  .concat(
                    e['alert'.concat(t.charAt(0).toUpperCase() + t.slice(1))],
                    ' ',
                  )
                  .concat(j),
                style: y,
                children: (0, l.jsxs)('div', {
                  className: e.alertContent,
                  children: [
                    (0, l.jsxs)('div', {
                      className: e.alertIcon,
                      children: [
                        t === 'info' && '\u2139\uFE0F',
                        t === 'success' && '\u2705',
                        t === 'warning' && '\u26A0\uFE0F',
                        t === 'error' && '\u274C',
                      ],
                    }),
                    (0, l.jsxs)('div', {
                      className: e.alertMessage,
                      children: [
                        (0, l.jsx)('div', {
                          className: e.alertTitle,
                          children: b,
                        }),
                        c &&
                          (0, l.jsx)('div', {
                            className: e.alertDescription,
                            children: c,
                          }),
                      ],
                    }),
                    g &&
                      (0, l.jsx)('button', {
                        type: 'button',
                        className: e.alertClose,
                        onClick: D,
                        'aria-label': 'Close',
                        children: '\xD7',
                      }),
                  ],
                }),
              })
            : null;
        },
        h = f;
    },
  },
]);
