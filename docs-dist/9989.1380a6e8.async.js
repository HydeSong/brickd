'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [9989],
  {
    39989: function (X, T, e) {
      e.r(T),
        e.d(T, {
          default: function () {
            return $;
          },
        });
      var R = e(26068),
        h = e.n(R),
        D = e(31759),
        k = e.n(D),
        P = e(25298),
        G = e.n(P),
        L = e(17069),
        Q = e.n(L),
        Y = e(82092),
        A = e.n(Y),
        w = e(48305),
        H = e.n(w),
        y = e(75271),
        I = e(38751),
        C = {
          notificationContainer: 'gqvffY1fKo0APtRlnEmh',
          topRight: 'XyTeE2QgJMUi9YIO6GAG',
          topLeft: 'uGQCODn8xOsb3hr91Itv',
          bottomRight: 'F5H9obKpQE3XJfU9ENG0',
          bottomLeft: 'gCYL5y0xn6kHB9w168Z9',
          notification: 'p5EsK81VmMYut2EvIGVp',
          visible: 'Aycu5cY6CSgrFtnpVklQ',
          notificationSuccess: 'TBadN6ZeuJoUCTWeCtOS',
          notificationError: 'HCQpi7TJwEfB0fC5vl1D',
          notificationInfo: 'crr6e_4Au7s4THuc2UGe',
          notificationWarning: 'bDsym4lU8_QNYCo0S8LA',
          notificationClose: 'YJ8PvgGQmc4tNoSCD0cX',
          notificationMessage: 'S6vdGVCl2sMpZktuRAHR',
          notificationDescription: 'N_L5jJVMfqEVDTKW4anM',
          'slide-in': 'o55uSCrVI70IH6caxrPI',
          'slide-out': 'kxmPBMsRNv0Qh2thwDbm',
        },
        l = e(52676),
        S = function (i) {
          var t = i.id,
            n = i.message,
            o = i.description,
            r = i.duration,
            c = r === void 0 ? 4500 : r,
            m = i.type,
            p = m === void 0 ? 'info' : m,
            u = i.showClose,
            d = u === void 0 ? !0 : u,
            a = i.onClose,
            v = i.onClick,
            s = i.className,
            g = i.style,
            M = (0, y.useState)(!1),
            N = H()(M, 2),
            B = N[0],
            V = N[1],
            E = (0, y.useRef)(),
            x = function () {
              V(!1),
                setTimeout(function () {
                  a(t);
                }, 300);
            };
          (0, y.useEffect)(
            function () {
              return (
                V(!0),
                c > 0 &&
                  (E.current = setTimeout(function () {
                    x();
                  }, c)),
                function () {
                  E.current && clearTimeout(E.current);
                }
              );
            },
            [c],
          );
          var F = function () {
              E.current && clearTimeout(E.current);
            },
            K = function () {
              c > 0 &&
                (E.current = setTimeout(function () {
                  x();
                }, c));
            },
            O = function () {
              v == null || v();
            };
          return (0, l.jsxs)('div', {
            className: ''
              .concat(C.notification, ' ')
              .concat(
                C[
                  'notification'.concat(p.charAt(0).toUpperCase() + p.slice(1))
                ],
                ' ',
              )
              .concat(s || '', ' ')
              .concat(B ? C.visible : ''),
            style: g,
            onMouseEnter: F,
            onMouseLeave: K,
            onClick: O,
            children: [
              d &&
                (0, l.jsx)('button', {
                  type: 'button',
                  className: C.notificationClose,
                  onClick: function (W) {
                    W.stopPropagation(), x();
                  },
                  'aria-label': 'Close',
                  children: '\xD7',
                }),
              n &&
                (0, l.jsx)('div', {
                  className: C.notificationMessage,
                  children: n,
                }),
              o &&
                (0, l.jsx)('div', {
                  className: C.notificationDescription,
                  children: o,
                }),
            ],
          });
        },
        J = (function () {
          function j() {
            G()(this, j),
              A()(this, 'containers', new Map()),
              A()(this, 'roots', new Map()),
              A()(this, 'instances', new Map()),
              A()(this, 'idCounter', 0);
          }
          return (
            Q()(j, [
              {
                key: 'createContainer',
                value: function (t) {
                  if (!this.containers.has(t)) {
                    var n = document.createElement('div');
                    (n.className = ''
                      .concat(C.notificationContainer, ' ')
                      .concat(C[t])),
                      document.body.appendChild(n),
                      this.containers.set(t, n);
                    var o = I.createRoot(n);
                    this.roots.set(t, o);
                  }
                  return this.containers.get(t);
                },
              },
              {
                key: 'generateId',
                value: function () {
                  return 'notification_'
                    .concat(++this.idCounter, '_')
                    .concat(Date.now());
                },
              },
              {
                key: 'addNotification',
                value: function (t) {
                  var n = this,
                    o = this.generateId(),
                    r = t.placement || 'topRight';
                  this.createContainer(r);
                  var c = {
                    id: o,
                    config: t,
                    close: function () {
                      n.removeNotification(o);
                    },
                  };
                  this.instances.set(o, c);
                  var m = function () {
                    var u = Array.from(n.instances.values())
                        .filter(function (a) {
                          var v = a.config.placement;
                          return v === r;
                        })
                        .map(function (a) {
                          var v = a.id,
                            s = a.config;
                          return (0, l.jsx)(
                            S,
                            {
                              id: v,
                              message: s.message,
                              description: s.description,
                              duration: s.duration,
                              type: s.type,
                              showClose: s.showClose,
                              onClick: s.onClick,
                              className: s.className,
                              style: s.style,
                              onClose: function (M) {
                                var N;
                                (N = s.onClose) === null ||
                                  N === void 0 ||
                                  N.call(s, M),
                                  M && n.removeNotification(M);
                              },
                            },
                            v,
                          );
                        }),
                      d = n.roots.get(r);
                    d && d.render((0, l.jsx)(l.Fragment, { children: u }));
                  };
                  return m(), c;
                },
              },
              {
                key: 'removeNotification',
                value: function (t) {
                  var n = this,
                    o = this.instances.get(t);
                  if (o) {
                    this.instances.delete(t);
                    var r = o.config.placement || 'topRight',
                      c = this.containers.get(r);
                    if (c) {
                      var m = Array.from(this.instances.values())
                          .filter(function (u) {
                            var d = u.config.placement;
                            return d === r;
                          })
                          .map(function (u) {
                            var d = u.id,
                              a = u.config;
                            return (0, l.jsx)(
                              S,
                              {
                                id: d,
                                message: a.message,
                                description: a.description,
                                duration: a.duration,
                                type: a.type,
                                showClose: a.showClose,
                                onClick: a.onClick,
                                className: a.className,
                                style: a.style,
                                onClose: function (s) {
                                  var g;
                                  (g = a.onClose) === null ||
                                    g === void 0 ||
                                    g.call(a, s),
                                    s && n.removeNotification(s);
                                },
                              },
                              d,
                            );
                          }),
                        p = this.roots.get(r);
                      p && p.render((0, l.jsx)(l.Fragment, { children: m }));
                    }
                    this.cleanupEmptyContainers();
                  }
                },
              },
              {
                key: 'cleanupEmptyContainers',
                value: function () {
                  var t = this;
                  this.containers.forEach(function (n, o) {
                    var r = Array.from(t.instances.values()).some(function (c) {
                      var m = c.config.placement;
                      return m === o;
                    });
                    r ||
                      (document.body.removeChild(n),
                      t.containers.delete(o),
                      t.roots.delete(o));
                  });
                },
              },
              {
                key: 'success',
                value: function (t) {
                  var n =
                    k()(t) === 'object' && !y.isValidElement(t)
                      ? t
                      : { message: t };
                  return this.addNotification(
                    h()(h()({}, n), {}, { type: 'success' }),
                  );
                },
              },
              {
                key: 'error',
                value: function (t) {
                  var n =
                    k()(t) === 'object' && !y.isValidElement(t)
                      ? t
                      : { message: t };
                  return this.addNotification(
                    h()(h()({}, n), {}, { type: 'error' }),
                  );
                },
              },
              {
                key: 'info',
                value: function (t) {
                  var n =
                    k()(t) === 'object' && !y.isValidElement(t)
                      ? t
                      : { message: t };
                  return this.addNotification(
                    h()(h()({}, n), {}, { type: 'info' }),
                  );
                },
              },
              {
                key: 'warning',
                value: function (t) {
                  var n =
                    k()(t) === 'object' && !y.isValidElement(t)
                      ? t
                      : { message: t };
                  return this.addNotification(
                    h()(h()({}, n), {}, { type: 'warning' }),
                  );
                },
              },
              {
                key: 'closeAll',
                value: function () {
                  var t = this;
                  this.instances.forEach(function (n) {
                    var o = n.id;
                    t.removeNotification(o);
                  });
                },
              },
            ]),
            j
          );
        })(),
        f = new J(),
        U = {
          success: f.success.bind(f),
          error: f.error.bind(f),
          info: f.info.bind(f),
          warning: f.warning.bind(f),
          closeAll: f.closeAll.bind(f),
        },
        $ = U;
    },
  },
]);
