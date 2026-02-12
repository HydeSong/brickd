'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [4338],
  {
    4338: function (H, n, d) {
      d.r(n),
        d.d(n, {
          default: function () {
            return C;
          },
        });
      var v = d(26068),
        k = d.n(v),
        o = {
          modal: 'vm3GgDQauY4ZAQz6gqJs',
          modalWrap: 'FCn4SzGsKgASeoPf_LTn',
          mask: 'AHNMbi8VHRUu3_nxZfFN',
          modalHeader: 'NqbqDGyVzs0Ghe9TyO32',
          modalTitle: 'zBFYBKP4T44ax4Y3BaZp',
          modalClose: 'Vy71HV34istdtZrYjmHB',
          modalBody: 'EeYV1juihkQR1VS8Ft6c',
          modalFooter: 'zIfJkfEf0uEioUwr6A38',
          modalButton: 'ifAKd6d72Mnf1oZ83Txl',
          modalButtonPrimary: 's8ZvG6SQkQTpajbjyJC2',
        },
        a = d(52676),
        x = function (l) {
          var j = l.visible,
            s = l.onCancel,
            b = l.onOk,
            N = l.title,
            f = l.children,
            y = l.footer,
            e = l.mask,
            B = e === void 0 ? !0 : e,
            t = l.maskClosable,
            g = t === void 0 ? !0 : t,
            i = l.confirmLoading,
            c = i === void 0 ? !1 : i,
            m = l.width,
            p = m === void 0 ? 520 : m,
            r = l.zIndex,
            u = r === void 0 ? 1e3 : r,
            z = l.className,
            F = l.style,
            M = l.wrapClassName;
          if (!j) return null;
          var T = function (h) {
            g && h.target === h.currentTarget && s();
          };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              B &&
                (0, a.jsx)('div', {
                  className: o.mask,
                  style: { zIndex: u },
                  onClick: T,
                  role: 'presentation',
                }),
              (0, a.jsx)('div', {
                className: ''.concat(o.modal, ' ').concat(z || ''),
                style: k()({ width: p, zIndex: u + 1 }, F),
                children: (0, a.jsxs)('div', {
                  className: ''.concat(o.modalWrap, ' ').concat(M || ''),
                  children: [
                    (0, a.jsxs)('div', {
                      className: o.modalHeader,
                      children: [
                        (0, a.jsx)('div', {
                          className: o.modalTitle,
                          children: N,
                        }),
                        (0, a.jsx)('button', {
                          type: 'button',
                          className: o.modalClose,
                          onClick: s,
                          'aria-label': 'Close',
                          children: '\xD7',
                        }),
                      ],
                    }),
                    (0, a.jsx)('div', { className: o.modalBody, children: f }),
                    (0, a.jsx)('div', {
                      className: o.modalFooter,
                      children:
                        y ||
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)('button', {
                              type: 'button',
                              className: o.modalButton,
                              onClick: s,
                              children: '\u53D6\u6D88',
                            }),
                            (0, a.jsx)('button', {
                              type: 'button',
                              className: ''
                                .concat(o.modalButton, ' ')
                                .concat(o.modalButtonPrimary),
                              onClick: b,
                              disabled: c,
                              children: c
                                ? '\u52A0\u8F7D\u4E2D...'
                                : '\u786E\u5B9A',
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        C = x;
    },
  },
]);
