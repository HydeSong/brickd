'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [1037],
  {
    11037: function (J, x, a) {
      a.r(x),
        a.d(x, {
          default: function () {
            return D;
          },
        });
      var S = a(26068),
        g = a.n(S),
        L = a(48305),
        C = a.n(L),
        r = a(75271),
        n = {
          popconfirm: 'HgS0zlVcYGw7snDybevv',
          trigger: 'b3gKdqj25jEuuAou3emm',
          popover: 'bBrPZQkm2k_qjA7k200o',
          fadeIn: 'QfrYxFpxAd0poNypA1gc',
          content: 'r7C_SAM4U4cZx9XMErBP',
          title: 'j08irXTzs04xsKEDWl46',
          description: 'gNCcAXUI1kcTQO70oB8U',
          buttons: 'SkHDKPHEstQkwcm6IQt1',
          button: 'yOKGWZveDTQwF4S1It9w',
          cancelButton: 'FSYjTndmcwsW2vGVx4_0',
          confirmButton: 'AHcdl79LvOIoIFEyjzn3',
          arrow: 'CIEq83TWIh042ClwZvVd',
          topArrow: 'RWuGciqdCVgb_etCnfc9',
          bottomArrow: 'aqZDbNgQsY4AoDSNtgVw',
          leftArrow: 'f_D_Y5RyPLofjQLa8Zqj',
          rightArrow: 'tetKnNF9WLspmSe6dip1',
          top: 'DC2wxyNcc0zMO7rhHly4',
          'fade-in': 'tLXHSBRHDAErKzMOXm4Z',
          bottom: 'nnzyVyeyHEQi0vled6_4',
          'fade-in-up': 'ZsgHRGWY3UcLjsKLnefZ',
          left: 'UoZwIdVwHRIsECvKbMT2',
          'fade-in-right': 'KNLUesu70xMnN4OyK4Jo',
          right: 'gxhFJ4XMrHcue3ySeADw',
          'fade-in-left': 'gvDTHDkEXe0SkDew4Ckz',
        },
        c = a(52676),
        H = function (t) {
          var b = t.title,
            k = t.description,
            B = t.onConfirm,
            p = t.onCancel,
            j = t.okText,
            I = j === void 0 ? '\u786E\u5B9A' : j,
            w = t.cancelText,
            K = w === void 0 ? '\u53D6\u6D88' : w,
            T = t.placement,
            h = T === void 0 ? 'top' : T,
            N = t.trigger,
            d = N === void 0 ? 'click' : N,
            y = t.disabled,
            m = y === void 0 ? !1 : y,
            Z = t.children,
            z = t.className,
            M = t.style,
            P = (0, r.useState)(!1),
            A = C()(P, 2),
            i = A[0],
            s = A[1],
            Q = (0, r.useState)({}),
            E = C()(Q, 2),
            O = E[0],
            V = E[1],
            u = (0, r.useRef)(null),
            f = (0, r.useRef)(null);
          (0, r.useEffect)(
            function () {
              if (i) {
                var o = function () {
                  if (u.current && f.current) {
                    var e = u.current.getBoundingClientRect(),
                      l = f.current.getBoundingClientRect(),
                      v = {};
                    switch (h) {
                      case 'top':
                        v = {
                          top: ''.concat(e.top - l.height - 8, 'px'),
                          left: ''.concat(
                            e.left + e.width / 2 - l.width / 2,
                            'px',
                          ),
                        };
                        break;
                      case 'bottom':
                        v = {
                          top: ''.concat(e.bottom + 8, 'px'),
                          left: ''.concat(
                            e.left + e.width / 2 - l.width / 2,
                            'px',
                          ),
                        };
                        break;
                      case 'left':
                        v = {
                          top: ''.concat(
                            e.top + e.height / 2 - l.height / 2,
                            'px',
                          ),
                          left: ''.concat(e.left - l.width - 8, 'px'),
                        };
                        break;
                      case 'right':
                        v = {
                          top: ''.concat(
                            e.top + e.height / 2 - l.height / 2,
                            'px',
                          ),
                          left: ''.concat(e.right + 8, 'px'),
                        };
                        break;
                    }
                    V(v);
                  }
                };
                return (
                  o(),
                  window.addEventListener('resize', o),
                  function () {
                    return window.removeEventListener('resize', o);
                  }
                );
              }
            },
            [i, h],
          ),
            (0, r.useEffect)(
              function () {
                var o = function (e) {
                  i &&
                    u.current &&
                    f.current &&
                    !u.current.contains(e.target) &&
                    !f.current.contains(e.target) &&
                    s(!1);
                };
                if (i)
                  return (
                    document.addEventListener('mousedown', o),
                    function () {
                      return document.removeEventListener('mousedown', o);
                    }
                  );
              },
              [i],
            );
          var W = function () {
              m || s(!i);
            },
            X = function () {
              !m && d === 'hover' && s(!0);
            },
            F = function () {
              !m && d === 'hover' && s(!1);
            },
            U = function () {
              B(), s(!1);
            },
            Y = function () {
              p == null || p(), s(!1);
            },
            G = {
              onClick: d === 'click' ? W : void 0,
              onMouseEnter: d === 'hover' ? X : void 0,
              onMouseLeave: d === 'hover' ? F : void 0,
            };
          return (0, c.jsxs)('div', {
            className: ''.concat(n.popconfirm, ' ').concat(z || ''),
            style: M,
            children: [
              (0, c.jsx)(
                'div',
                g()(
                  g()({ ref: u, className: n.trigger }, G),
                  {},
                  { children: Z },
                ),
              ),
              i &&
                !m &&
                (0, c.jsxs)('div', {
                  ref: f,
                  className: ''.concat(n.popover, ' ').concat(n[h]),
                  style: O,
                  children: [
                    (0, c.jsxs)('div', {
                      className: n.content,
                      children: [
                        b &&
                          (0, c.jsx)('div', {
                            className: n.title,
                            children: b,
                          }),
                        k &&
                          (0, c.jsx)('div', {
                            className: n.description,
                            children: k,
                          }),
                      ],
                    }),
                    (0, c.jsxs)('div', {
                      className: n.buttons,
                      children: [
                        (0, c.jsx)('button', {
                          type: 'button',
                          className: ''
                            .concat(n.button, ' ')
                            .concat(n.cancelButton),
                          onClick: Y,
                          children: K,
                        }),
                        (0, c.jsx)('button', {
                          type: 'button',
                          className: ''
                            .concat(n.button, ' ')
                            .concat(n.confirmButton),
                          onClick: U,
                          children: I,
                        }),
                      ],
                    }),
                    (0, c.jsx)('div', {
                      className: ''
                        .concat(n.arrow, ' ')
                        .concat(n[''.concat(h, 'Arrow')]),
                    }),
                  ],
                }),
            ],
          });
        },
        D = H;
    },
  },
]);
