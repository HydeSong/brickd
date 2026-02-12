'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [7647],
  {
    7647: function (B, w, e) {
      e.r(w),
        e.d(w, {
          default: function () {
            return $;
          },
        });
      var Y = e(26068),
        h = e.n(Y),
        P = e(31759),
        k = e.n(P),
        V = e(25298),
        S = e.n(V),
        L = e(17069),
        X = e.n(L),
        D = e(82092),
        A = e.n(D),
        U = e(48305),
        W = e.n(U),
        y = e(75271),
        G = e(38751),
        m = {
          notificationContainer: 'U1zbt8Fy6gs0YL14kAXv',
          topRight: 'wEulybPV3YgUenOGvr9R',
          topLeft: '_9m_kdndjIy1y8JD45ap',
          bottomRight: 'AmPb10VQJmw2G3TZYnWM',
          bottomLeft: 'ZL2NE_ccgURwtB0JXbgU',
          notification: 'JKDWWOLVwfY833uW8Yxo',
          visible: 'Cs86ns8wTd4MmvhXe_IZ',
          notificationSuccess: 'ddEcojXvO8EX7iaUqA8n',
          notificationError: 'xBQSjqTwEIRghQHDvKse',
          notificationInfo: 'yRzYxT6cdxk5mduYXZW2',
          notificationWarning: 'f6bK6NyziVEypP2wSI5m',
          notificationClose: 'wSnGKAkvdouGbin5Yky1',
          notificationMessage: 'YrAVd5wlXQY72zY9siiR',
          notificationDescription: 'yPakjoTmscX1vT8BjG1g',
          'slide-in': 'pn9Ig_No42k3c4epvfHM',
          'slide-out': 'wc7ZTE8ppcUTvO53dA4m',
        },
        l = e(52676),
        x = function (i) {
          var t = i.id,
            n = i.message,
            o = i.description,
            c = i.duration,
            r = c === void 0 ? 4500 : c,
            C = i.type,
            g = C === void 0 ? 'info' : C,
            u = i.showClose,
            d = u === void 0 ? !0 : u,
            a = i.onClose,
            v = i.onClick,
            s = i.className,
            p = i.style,
            j = (0, y.useState)(!1),
            N = W()(j, 2),
            z = N[0],
            R = N[1],
            E = (0, y.useRef)(),
            T = function () {
              R(!1),
                setTimeout(function () {
                  a(t);
                }, 300);
            };
          (0, y.useEffect)(
            function () {
              return (
                R(!0),
                r > 0 &&
                  (E.current = setTimeout(function () {
                    T();
                  }, r)),
                function () {
                  E.current && clearTimeout(E.current);
                }
              );
            },
            [r],
          );
          var J = function () {
              E.current && clearTimeout(E.current);
            },
            K = function () {
              r > 0 &&
                (E.current = setTimeout(function () {
                  T();
                }, r));
            },
            O = function () {
              v == null || v();
            };
          return (0, l.jsxs)('div', {
            className: ''
              .concat(m.notification, ' ')
              .concat(
                m[
                  'notification'.concat(g.charAt(0).toUpperCase() + g.slice(1))
                ],
                ' ',
              )
              .concat(s || '', ' ')
              .concat(z ? m.visible : ''),
            style: p,
            onMouseEnter: J,
            onMouseLeave: K,
            onClick: O,
            children: [
              d &&
                (0, l.jsx)('button', {
                  type: 'button',
                  className: m.notificationClose,
                  onClick: function (Q) {
                    Q.stopPropagation(), T();
                  },
                  'aria-label': 'Close',
                  children: '\xD7',
                }),
              n &&
                (0, l.jsx)('div', {
                  className: m.notificationMessage,
                  children: n,
                }),
              o &&
                (0, l.jsx)('div', {
                  className: m.notificationDescription,
                  children: o,
                }),
            ],
          });
        },
        I = (function () {
          function M() {
            S()(this, M),
              A()(this, 'containers', new Map()),
              A()(this, 'roots', new Map()),
              A()(this, 'instances', new Map()),
              A()(this, 'idCounter', 0);
          }
          return (
            X()(M, [
              {
                key: 'createContainer',
                value: function (t) {
                  if (!this.containers.has(t)) {
                    var n = document.createElement('div');
                    (n.className = ''
                      .concat(m.notificationContainer, ' ')
                      .concat(m[t])),
                      document.body.appendChild(n),
                      this.containers.set(t, n);
                    var o = G.createRoot(n);
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
                    c = t.placement || 'topRight';
                  this.createContainer(c);
                  var r = {
                    id: o,
                    config: t,
                    close: function () {
                      n.removeNotification(o);
                    },
                  };
                  this.instances.set(o, r);
                  var C = function () {
                    var u = Array.from(n.instances.values())
                        .filter(function (a) {
                          var v = a.config.placement;
                          return v === c;
                        })
                        .map(function (a) {
                          var v = a.id,
                            s = a.config;
                          return (0, l.jsx)(
                            x,
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
                              onClose: function (j) {
                                var N;
                                (N = s.onClose) === null ||
                                  N === void 0 ||
                                  N.call(s, j),
                                  j && n.removeNotification(j);
                              },
                            },
                            v,
                          );
                        }),
                      d = n.roots.get(c);
                    d && d.render((0, l.jsx)(l.Fragment, { children: u }));
                  };
                  return C(), r;
                },
              },
              {
                key: 'removeNotification',
                value: function (t) {
                  var n = this,
                    o = this.instances.get(t);
                  if (o) {
                    this.instances.delete(t);
                    var c = o.config.placement || 'topRight',
                      r = this.containers.get(c);
                    if (r) {
                      var C = Array.from(this.instances.values())
                          .filter(function (u) {
                            var d = u.config.placement;
                            return d === c;
                          })
                          .map(function (u) {
                            var d = u.id,
                              a = u.config;
                            return (0, l.jsx)(
                              x,
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
                                  var p;
                                  (p = a.onClose) === null ||
                                    p === void 0 ||
                                    p.call(a, s),
                                    s && n.removeNotification(s);
                                },
                              },
                              d,
                            );
                          }),
                        g = this.roots.get(c);
                      g && g.render((0, l.jsx)(l.Fragment, { children: C }));
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
                    var c = Array.from(t.instances.values()).some(function (r) {
                      var C = r.config.placement;
                      return C === o;
                    });
                    c ||
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
            M
          );
        })(),
        f = new I(),
        Z = {
          success: f.success.bind(f),
          error: f.error.bind(f),
          info: f.info.bind(f),
          warning: f.warning.bind(f),
          closeAll: f.closeAll.bind(f),
        },
        $ = Z;
    },
  },
]);
