'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [8011],
  {
    8011: function (se, f, a) {
      a.r(f),
        a.d(f, {
          default: function () {
            return M;
          },
        });
      var O = a(82092),
        $ = a.n(O),
        A = a(26068),
        t = a.n(A),
        R = a(48305),
        L = a.n(R),
        P = a(67825),
        B = a.n(P),
        r = a(75271),
        l = {
          drawer: 'xUdd3AwVr4Be81MkmKVl',
          drawerTop: 'pJitxaDRA4oXkFMEBXNZ',
          'drawer-slide-down': 'OyfPatD2aDsRfALnCeoP',
          drawerRight: 'P2Mo5X9VqCoVxa93JeVw',
          'drawer-slide-left': 'HSO4XJJKA4USaF0CRwgT',
          drawerBottom: 'x8djwHpDIYEt0me6v9mu',
          'drawer-slide-up': 'ItdzfdJfiucBQ_aIysDQ',
          drawerLeft: 'XCf1isLDLcYp4PUO44hL',
          'drawer-slide-right': 'q5QefmOlrQEChHo7jzAb',
          drawerMask: 'IwfNE40S0Q25Gt3V2X2n',
          'drawer-mask-fade-in': 'UwtVE3xONI1rpizPdtd_',
          drawerHeader: 'EA19ffU1RxEyRBNzmUnC',
          drawerTitle: 'pfQ9Pa_JtIwthYYo5ORT',
          drawerClose: 'dwOWBdyQqf4xEl5lFVgu',
          drawerBody: 'zjfaCcKbLoc0OfgsmiJA',
          drawerFooter: '_BlVhzkY9w5hudXg413Z',
          drawerHidden: 'KHgLNLwcW3AbGy4uhkjO',
        },
        d = a(52676),
        H = [
          'title',
          'placement',
          'visible',
          'defaultVisible',
          'onVisibleChange',
          'width',
          'height',
          'mask',
          'maskClosable',
          'className',
          'style',
          'bodyStyle',
          'children',
          'footer',
          'closable',
          'destroyOnClose',
          'zIndex',
        ],
        J = function (e) {
          var u = e.title,
            h = e.placement,
            s = h === void 0 ? 'right' : h,
            i = e.visible,
            v = e.defaultVisible,
            Q = v === void 0 ? !1 : v,
            w = e.onVisibleChange,
            m = e.width,
            T = m === void 0 ? 300 : m,
            y = e.height,
            U = y === void 0 ? 300 : y,
            b = e.mask,
            X = b === void 0 ? !0 : b,
            C = e.maskClosable,
            F = C === void 0 ? !0 : C,
            x = e.className,
            K = x === void 0 ? '' : x,
            k = e.style,
            Y = k === void 0 ? {} : k,
            g = e.bodyStyle,
            W = g === void 0 ? {} : g,
            j = e.children,
            V = e.footer,
            N = e.closable,
            G = N === void 0 ? !0 : N,
            S = e.destroyOnClose,
            p = S === void 0 ? !1 : S,
            z = e.zIndex,
            D = z === void 0 ? 1050 : z,
            Z = B()(e, H),
            q = (0, r.useState)(i !== void 0 ? i : Q),
            E = L()(q, 2),
            n = E[0],
            I = E[1],
            _ = (0, r.useRef)(null),
            ee = (0, r.useRef)(null),
            c = function () {
              I(!1), w && w(!1);
            },
            ae = function () {
              F && c();
            };
          if (
            ((0, r.useEffect)(
              function () {
                i !== void 0 && I(i);
              },
              [i],
            ),
            (0, r.useEffect)(
              function () {
                var o = function (re) {
                  re.key === 'Escape' && n && c();
                };
                return (
                  n &&
                    (document.addEventListener('keydown', o),
                    (document.body.style.overflow = 'hidden')),
                  function () {
                    document.removeEventListener('keydown', o),
                      (document.body.style.overflow = '');
                  }
                );
              },
              [n],
            ),
            !n && p)
          )
            return null;
          if (!n && !p)
            return (0, d.jsx)('div', {
              className: l.drawerHidden,
              children: j,
            });
          var de = t()({ zIndex: D }, Y),
            le = $()({}, s, 0),
            te = {
              width: ['left', 'right'].includes(s) ? T : void 0,
              height: ['top', 'bottom'].includes(s) ? U : void 0,
            };
          return (0, d.jsxs)(d.Fragment, {
            children: [
              X &&
                (0, d.jsx)('div', {
                  ref: ee,
                  className: l.drawerMask,
                  style: { zIndex: D },
                  onClick: ae,
                }),
              (0, d.jsxs)(
                'div',
                t()(
                  t()(
                    {
                      ref: _,
                      className: ''
                        .concat(l.drawer, ' ')
                        .concat(
                          l[
                            'drawer'.concat(
                              s.charAt(0).toUpperCase() + s.slice(1),
                            )
                          ],
                          ' ',
                        )
                        .concat(K),
                      style: t()(t()(t()({}, de), le), te),
                    },
                    Z,
                  ),
                  {},
                  {
                    children: [
                      (0, d.jsxs)('div', {
                        className: l.drawerHeader,
                        children: [
                          u &&
                            (0, d.jsx)('div', {
                              className: l.drawerTitle,
                              children: u,
                            }),
                          G &&
                            (0, d.jsx)('button', {
                              type: 'button',
                              className: l.drawerClose,
                              onClick: c,
                              'aria-label': 'Close',
                              children: '\xD7',
                            }),
                        ],
                      }),
                      (0, d.jsx)('div', {
                        className: l.drawerBody,
                        style: W,
                        children: j,
                      }),
                      V &&
                        (0, d.jsx)('div', {
                          className: l.drawerFooter,
                          children: V,
                        }),
                    ],
                  },
                ),
              ),
            ],
          });
        },
        M = J;
    },
  },
]);
