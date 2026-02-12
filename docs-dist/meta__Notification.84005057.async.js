(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [4063, 7656],
  {
    10555: function (v, f, n) {
      'use strict';
      var I;
      n.r(f),
        n.d(f, {
          demos: function () {
            return A;
          },
        });
      var g = n(48305),
        y = n.n(g),
        B = n(90228),
        c = n.n(B),
        m = n(87999),
        p = n.n(m),
        a = n(75271),
        h = n(97656),
        N = n(9033),
        A = {
          'notification-demo-0': {
            component: a.memo(
              a.lazy(
                p()(
                  c()().mark(function s() {
                    var l, e, i, o, u, t, d;
                    return c()().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.next = 2), n.e(7647).then(n.bind(n, 7647))
                            );
                          case 2:
                            return (
                              (l = r.sent),
                              (e = l.default),
                              (r.next = 6),
                              Promise.resolve().then(n.bind(n, 97656))
                            );
                          case 6:
                            return (
                              (i = r.sent),
                              (o = i.default),
                              (r.next = 10),
                              Promise.resolve().then(n.bind(n, 9033))
                            );
                          case 10:
                            return (
                              (u = r.sent),
                              (t = u.default),
                              (d = function () {
                                return a.createElement(
                                  t,
                                  null,
                                  a.createElement(
                                    o,
                                    {
                                      onClick: function () {
                                        return e.success(
                                          'Success notification',
                                        );
                                      },
                                    },
                                    'Success',
                                  ),
                                  a.createElement(
                                    o,
                                    {
                                      onClick: function () {
                                        return e.error('Error notification');
                                      },
                                    },
                                    'Error',
                                  ),
                                  a.createElement(
                                    o,
                                    {
                                      onClick: function () {
                                        return e.info('Info notification');
                                      },
                                    },
                                    'Info',
                                  ),
                                  a.createElement(
                                    o,
                                    {
                                      onClick: function () {
                                        return e.warning(
                                          'Warning notification',
                                        );
                                      },
                                    },
                                    'Warning',
                                  ),
                                );
                              }),
                              r.abrupt('return', { default: d })
                            );
                          case 14:
                          case 'end':
                            return r.stop();
                        }
                    }, s);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'notification-demo-0',
              refAtomIds: ['Notification'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import Notification from './index';
import Button from '../Button';
import Space from '../Space';

const App = () => {
  return (
    <Space>
      <Button onClick={() => Notification.success('Success notification')}>
        Success
      </Button>
      <Button onClick={() => Notification.error('Error notification')}>
        Error
      </Button>
      <Button onClick={() => Notification.info('Info notification')}>
        Info
      </Button>
      <Button onClick={() => Notification.warning('Warning notification')}>
        Warning
      </Button>
    </Space>
  );
};

export default App;`,
                },
                '../Button.tsx': { type: 'FILE', value: n(27045).Z },
                '../Space.tsx': { type: 'FILE', value: n(81339).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Button.tsx': h,
              '../Space.tsx': N,
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
              '/Users/hyde/Documents/Workspace/brickd/src/Space/index.tsx': N,
            },
            renderOpts: {
              compile: (function () {
                var s = p()(
                  c()().mark(function e() {
                    var i,
                      o = arguments;
                    return c()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), n.e(3015).then(n.bind(n, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (i = t.sent).default.apply(i, o),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, e);
                  }),
                );
                function l() {
                  return s.apply(this, arguments);
                }
                return l;
              })(),
            },
          },
          'notification-demo-1': {
            component: a.memo(
              a.lazy(
                p()(
                  c()().mark(function s() {
                    var l, e, i, o, u;
                    return c()().wrap(function (d) {
                      for (;;)
                        switch ((d.prev = d.next)) {
                          case 0:
                            return (
                              (d.next = 2), n.e(7647).then(n.bind(n, 7647))
                            );
                          case 2:
                            return (
                              (l = d.sent),
                              (e = l.default),
                              (d.next = 6),
                              Promise.resolve().then(n.bind(n, 97656))
                            );
                          case 6:
                            return (
                              (i = d.sent),
                              (o = i.default),
                              (u = function () {
                                var r = function () {
                                  e.info({
                                    message: 'Notification Title',
                                    description:
                                      'This is the notification description.',
                                    duration: 4500,
                                  });
                                };
                                return a.createElement(
                                  o,
                                  { onClick: r },
                                  'Show Notification',
                                );
                              }),
                              d.abrupt('return', { default: u })
                            );
                          case 10:
                          case 'end':
                            return d.stop();
                        }
                    }, s);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'notification-demo-1',
              refAtomIds: ['Notification'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import Notification from './index';
import Button from '../Button';

const App = () => {
  const showNotification = () => {
    Notification.info({
      message: 'Notification Title',
      description: 'This is the notification description.',
      duration: 4500,
    });
  };

  return <Button onClick={showNotification}>Show Notification</Button>;
};

export default App;`,
                },
                '../Button.tsx': { type: 'FILE', value: n(27045).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Button.tsx': h,
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var s = p()(
                  c()().mark(function e() {
                    var i,
                      o = arguments;
                    return c()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), n.e(3015).then(n.bind(n, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (i = t.sent).default.apply(i, o),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, e);
                  }),
                );
                function l() {
                  return s.apply(this, arguments);
                }
                return l;
              })(),
            },
          },
          'notification-demo-2': {
            component: a.memo(
              a.lazy(
                p()(
                  c()().mark(function s() {
                    var l, e, i, o, u;
                    return c()().wrap(function (d) {
                      for (;;)
                        switch ((d.prev = d.next)) {
                          case 0:
                            return (
                              (d.next = 2), n.e(7647).then(n.bind(n, 7647))
                            );
                          case 2:
                            return (
                              (l = d.sent),
                              (e = l.default),
                              (d.next = 6),
                              Promise.resolve().then(n.bind(n, 97656))
                            );
                          case 6:
                            return (
                              (i = d.sent),
                              (o = i.default),
                              (u = function () {
                                var r = function () {
                                  e.info({
                                    message: 'Custom Notification',
                                    description: 'Click this notification',
                                    onClick: function () {
                                      console.log('Notification clicked');
                                    },
                                    onClose: function () {
                                      console.log('Notification closed');
                                    },
                                    duration: 5e3,
                                    showClose: !0,
                                  });
                                };
                                return a.createElement(
                                  o,
                                  { onClick: r },
                                  'Custom Notification',
                                );
                              }),
                              d.abrupt('return', { default: u })
                            );
                          case 10:
                          case 'end':
                            return d.stop();
                        }
                    }, s);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'notification-demo-2',
              refAtomIds: ['Notification'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import Notification from './index';
import Button from '../Button';

const App = () => {
  const showNotification = () => {
    Notification.info({
      message: 'Custom Notification',
      description: 'Click this notification',
      onClick: () => {
        console.log('Notification clicked');
      },
      onClose: () => {
        console.log('Notification closed');
      },
      duration: 5000,
      showClose: true,
    });
  };

  return <Button onClick={showNotification}>Custom Notification</Button>;
};

export default App;`,
                },
                '../Button.tsx': { type: 'FILE', value: n(27045).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Button.tsx': h,
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var s = p()(
                  c()().mark(function e() {
                    var i,
                      o = arguments;
                    return c()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), n.e(3015).then(n.bind(n, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (i = t.sent).default.apply(i, o),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, e);
                  }),
                );
                function l() {
                  return s.apply(this, arguments);
                }
                return l;
              })(),
            },
          },
          'notification-demo-3': {
            component: a.memo(
              a.lazy(
                p()(
                  c()().mark(function s() {
                    var l, e, i, o, u, t, d;
                    return c()().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.next = 2), n.e(7647).then(n.bind(n, 7647))
                            );
                          case 2:
                            return (
                              (l = r.sent),
                              (e = l.default),
                              (r.next = 6),
                              Promise.resolve().then(n.bind(n, 97656))
                            );
                          case 6:
                            return (
                              (i = r.sent),
                              (o = i.default),
                              (r.next = 10),
                              Promise.resolve().then(n.bind(n, 9033))
                            );
                          case 10:
                            return (
                              (u = r.sent),
                              (t = u.default),
                              (d = function () {
                                return a.createElement(
                                  t,
                                  { direction: 'vertical', size: 12 },
                                  a.createElement(
                                    t,
                                    null,
                                    a.createElement(
                                      o,
                                      {
                                        onClick: function () {
                                          return e.info({
                                            message: 'Top Right',
                                            placement: 'topRight',
                                          });
                                        },
                                      },
                                      'Top Right',
                                    ),
                                    a.createElement(
                                      o,
                                      {
                                        onClick: function () {
                                          return e.info({
                                            message: 'Top Left',
                                            placement: 'topLeft',
                                          });
                                        },
                                      },
                                      'Top Left',
                                    ),
                                  ),
                                  a.createElement(
                                    t,
                                    null,
                                    a.createElement(
                                      o,
                                      {
                                        onClick: function () {
                                          return e.info({
                                            message: 'Bottom Right',
                                            placement: 'bottomRight',
                                          });
                                        },
                                      },
                                      'Bottom Right',
                                    ),
                                    a.createElement(
                                      o,
                                      {
                                        onClick: function () {
                                          return e.info({
                                            message: 'Bottom Left',
                                            placement: 'bottomLeft',
                                          });
                                        },
                                      },
                                      'Bottom Left',
                                    ),
                                  ),
                                );
                              }),
                              r.abrupt('return', { default: d })
                            );
                          case 14:
                          case 'end':
                            return r.stop();
                        }
                    }, s);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'notification-demo-3',
              refAtomIds: ['Notification'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import Notification from './index';
import Button from '../Button';
import Space from '../Space';

const App = () => {
  return (
    <Space direction="vertical" size={12}>
      <Space>
        <Button
          onClick={() =>
            Notification.info({
              message: 'Top Right',
              placement: 'topRight',
            })
          }
        >
          Top Right
        </Button>
        <Button
          onClick={() =>
            Notification.info({
              message: 'Top Left',
              placement: 'topLeft',
            })
          }
        >
          Top Left
        </Button>
      </Space>
      <Space>
        <Button
          onClick={() =>
            Notification.info({
              message: 'Bottom Right',
              placement: 'bottomRight',
            })
          }
        >
          Bottom Right
        </Button>
        <Button
          onClick={() =>
            Notification.info({
              message: 'Bottom Left',
              placement: 'bottomLeft',
            })
          }
        >
          Bottom Left
        </Button>
      </Space>
    </Space>
  );
};

export default App;`,
                },
                '../Space.tsx': { type: 'FILE', value: n(81339).Z },
                '../Button.tsx': { type: 'FILE', value: n(27045).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Space.tsx': N,
              '../Button.tsx': h,
              '/Users/hyde/Documents/Workspace/brickd/src/Space/index.tsx': N,
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var s = p()(
                  c()().mark(function e() {
                    var i,
                      o = arguments;
                    return c()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), n.e(3015).then(n.bind(n, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (i = t.sent).default.apply(i, o),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, e);
                  }),
                );
                function l() {
                  return s.apply(this, arguments);
                }
                return l;
              })(),
            },
          },
          'notification-demo-4': {
            component: a.memo(
              a.lazy(
                p()(
                  c()().mark(function s() {
                    var l, e, i, o, u, t, d, E, r, S;
                    return c()().wrap(function (x) {
                      for (;;)
                        switch ((x.prev = x.next)) {
                          case 0:
                            return (
                              (x.next = 2),
                              Promise.resolve().then(n.t.bind(n, 75271, 19))
                            );
                          case 2:
                            return (
                              (l = x.sent),
                              (e = l.default),
                              (i = l.useState),
                              (x.next = 7),
                              n.e(7647).then(n.bind(n, 7647))
                            );
                          case 7:
                            return (
                              (o = x.sent),
                              (u = o.default),
                              (x.next = 11),
                              Promise.resolve().then(n.bind(n, 97656))
                            );
                          case 11:
                            return (
                              (t = x.sent),
                              (d = t.default),
                              (x.next = 15),
                              Promise.resolve().then(n.bind(n, 9033))
                            );
                          case 15:
                            return (
                              (E = x.sent),
                              (r = E.default),
                              (S = function () {
                                var P = i(null),
                                  L = y()(P, 2),
                                  R = L[0],
                                  $ = L[1],
                                  D = function () {
                                    var T = u.info({
                                      message: 'Persistent Notification',
                                      description:
                                        "This notification won't close automatically",
                                      duration: 0,
                                    });
                                    $(T);
                                  },
                                  b = function () {
                                    R && R.close();
                                  },
                                  W = function () {
                                    u.closeAll();
                                  };
                                return e.createElement(
                                  r,
                                  null,
                                  e.createElement(
                                    d,
                                    { onClick: D },
                                    'Show Notification',
                                  ),
                                  e.createElement(
                                    d,
                                    { onClick: b },
                                    'Close Notification',
                                  ),
                                  e.createElement(
                                    d,
                                    { onClick: W },
                                    'Close All',
                                  ),
                                );
                              }),
                              x.abrupt('return', { default: S })
                            );
                          case 19:
                          case 'end':
                            return x.stop();
                        }
                    }, s);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'notification-demo-4',
              refAtomIds: ['Notification'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useState } from 'react';
import Notification from './index';
import Button from '../Button';
import Space from '../Space';

const App = () => {
  const [notificationInstance, setNotificationInstance] = useState<any>(null);

  const showNotification = () => {
    const instance = Notification.info({
      message: 'Persistent Notification',
      description: 'This notification won\\'t close automatically',
      duration: 0, // 0 \u8868\u793A\u4E0D\u81EA\u52A8\u5173\u95ED
    });
    setNotificationInstance(instance);
  };

  const closeNotification = () => {
    if (notificationInstance) {
      notificationInstance.close();
    }
  };

  const closeAll = () => {
    Notification.closeAll();
  };

  return (
    <Space>
      <Button onClick={showNotification}>Show Notification</Button>
      <Button onClick={closeNotification}>Close Notification</Button>
      <Button onClick={closeAll}>Close All</Button>
    </Space>
  );
};

export default App;`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                '../Space.tsx': { type: 'FILE', value: n(81339).Z },
                '../Button.tsx': { type: 'FILE', value: n(27045).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Space.tsx': N,
              '../Button.tsx': h,
              react: I || (I = n.t(a, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Space/index.tsx': N,
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var s = p()(
                  c()().mark(function e() {
                    var i,
                      o = arguments;
                    return c()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), n.e(3015).then(n.bind(n, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (i = t.sent).default.apply(i, o),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, e);
                  }),
                );
                function l() {
                  return s.apply(this, arguments);
                }
                return l;
              })(),
            },
          },
        };
    },
    97656: function (v, f, n) {
      'use strict';
      n.r(f),
        n.d(f, {
          default: function () {
            return N;
          },
        });
      var I = n(26068),
        g = n.n(I),
        y = n(67825),
        B = n.n(y),
        c = n(75271),
        m = {
          button: 'AyHMn4pptwgAqTM0zVxe',
          small: 'mtziivfRPkRk_hPU_E8r',
          default: 'CH0d2t1M7c0F2z59aWp3',
          large: 'RH0k6h4jVrUDWtwndzsD',
          primary: 'DPc0H8GPQ0xHQRlthXLJ',
          disabled: 'tsWfJ_Ys0PMwNuyfv9ZE',
          dashed: 'IioY1o_nDcycA39jljNu',
          text: 'uXPLhO_cvecV4slBdUG9',
          link: 'dEu3aIhxJygUwZzIAxyd',
          loading: 'TfozD8aSe0EKE01eb9rT',
          iconButton: 'hqj1LeYuMk52ehmDe99J',
          block: 'JCrgrMbkNXINGMdQPDGF',
          fullWidth: 'YcE6VMEyGAGDARKuW2UN',
          buttonGroup: 'M0XSHCsIWBYv7JTr5Qsc',
        },
        p = n(52676),
        a = [
          'type',
          'size',
          'disabled',
          'children',
          'onClick',
          'className',
          'style',
          'htmlType',
        ],
        h = function (s) {
          var l = s.type,
            e = l === void 0 ? 'default' : l,
            i = s.size,
            o = i === void 0 ? 'default' : i,
            u = s.disabled,
            t = u === void 0 ? !1 : u,
            d = s.children,
            E = s.onClick,
            r = s.className,
            S = r === void 0 ? '' : r,
            C = s.style,
            x = C === void 0 ? {} : C,
            z = s.htmlType,
            P = z === void 0 ? 'button' : z,
            L = B()(s, a),
            R = function () {
              var b = [m.button];
              return (
                b.push(m[e]),
                b.push(m[o]),
                t && b.push(m.disabled),
                S && b.push(S),
                b.join(' ')
              );
            },
            $ = function () {
              !t && E && E();
            };
          return (0, p.jsx)(
            'button',
            g()(
              g()(
                {
                  type:
                    P === 'submit'
                      ? 'submit'
                      : P === 'reset'
                      ? 'reset'
                      : 'button',
                  className: R(),
                  style: x,
                  disabled: t,
                  onClick: $,
                },
                L,
              ),
              {},
              { children: d },
            ),
          );
        },
        N = h;
    },
    9033: function (v, f, n) {
      'use strict';
      n.r(f),
        n.d(f, {
          default: function () {
            return B;
          },
        });
      var I = {
          space: 'xzMTV6CIOtYl7ZSsttFu',
          horizontal: 'JNIoeIfmdYah45BlzIab',
          vertical: 'oHesASW9P7Ux2d3EQfP0',
          wrap: 'E1BxJ7Z6K9ASowoc__5X',
        },
        g = n(52676),
        y = function (m) {
          var p = m.direction,
            a = p === void 0 ? 'horizontal' : p,
            h = m.size,
            N = h === void 0 ? 'middle' : h,
            A = m.wrap,
            s = A === void 0 ? !1 : A,
            l = m.className,
            e = m.children,
            i = function () {
              if (typeof N == 'number') return N;
              switch (N) {
                case 'small':
                  return 8;
                case 'large':
                  return 24;
                case 'middle':
                default:
                  return 16;
              }
            },
            o = i();
          return (0, g.jsx)('div', {
            className: `
        `
              .concat(
                I.space,
                `
        `,
              )
              .concat(
                I[a],
                `
        `,
              )
              .concat(
                s ? I.wrap : '',
                `
        `,
              )
              .concat(
                l || '',
                `
      `,
              ),
            style: {
              gap: a === 'horizontal' ? ''.concat(o, 'px') : void 0,
              rowGap: a === 'vertical' ? ''.concat(o, 'px') : void 0,
              columnGap: a === 'vertical' ? void 0 : ''.concat(o, 'px'),
            },
            children: e,
          });
        },
        B = y;
    },
    76490: function (v, f, n) {
      'use strict';
      n.r(f),
        n.d(f, {
          texts: function () {
            return I;
          },
        });
      const I = [
        {
          value:
            '\u901A\u77E5\u63D0\u9192\u6846\uFF0C\u7528\u4E8E\u663E\u793A\u5168\u5C40\u7684\u901A\u77E5\u63D0\u9192\u4FE1\u606F\u3002',
          paraId: 0,
          tocIndex: 0,
        },
        {
          value: `npm install brickd
`,
          paraId: 1,
          tocIndex: 1,
        },
        {
          value: '\u663E\u793A\u6210\u529F\u901A\u77E5',
          paraId: 2,
          tocIndex: 9,
        },
        {
          value: '\u663E\u793A\u9519\u8BEF\u901A\u77E5',
          paraId: 3,
          tocIndex: 10,
        },
        {
          value: '\u663E\u793A\u4FE1\u606F\u901A\u77E5',
          paraId: 4,
          tocIndex: 11,
        },
        {
          value: '\u663E\u793A\u8B66\u544A\u901A\u77E5',
          paraId: 5,
          tocIndex: 12,
        },
        {
          value: '\u5173\u95ED\u6240\u6709\u901A\u77E5',
          paraId: 6,
          tocIndex: 13,
        },
        { value: '\u53C2\u6570', paraId: 7, tocIndex: 14 },
        { value: '\u7C7B\u578B', paraId: 7, tocIndex: 14 },
        { value: '\u9ED8\u8BA4\u503C', paraId: 7, tocIndex: 14 },
        { value: '\u8BF4\u660E', paraId: 7, tocIndex: 14 },
        { value: 'message', paraId: 7, tocIndex: 14 },
        { value: 'React.ReactNode', paraId: 7, tocIndex: 14 },
        { value: '-', paraId: 7, tocIndex: 14 },
        { value: '\u901A\u77E5\u6807\u9898', paraId: 7, tocIndex: 14 },
        { value: 'description', paraId: 7, tocIndex: 14 },
        { value: 'React.ReactNode', paraId: 7, tocIndex: 14 },
        { value: '-', paraId: 7, tocIndex: 14 },
        { value: '\u901A\u77E5\u63CF\u8FF0', paraId: 7, tocIndex: 14 },
        { value: 'duration', paraId: 7, tocIndex: 14 },
        { value: 'number', paraId: 7, tocIndex: 14 },
        { value: '4500', paraId: 7, tocIndex: 14 },
        {
          value:
            '\u81EA\u52A8\u5173\u95ED\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09\uFF0C\u8BBE\u7F6E\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED',
          paraId: 7,
          tocIndex: 14,
        },
        { value: 'type', paraId: 7, tocIndex: 14 },
        {
          value: "'success' | 'error' | 'info' | 'warning'",
          paraId: 7,
          tocIndex: 14,
        },
        { value: "'info'", paraId: 7, tocIndex: 14 },
        { value: '\u901A\u77E5\u7C7B\u578B', paraId: 7, tocIndex: 14 },
        { value: 'showClose', paraId: 7, tocIndex: 14 },
        { value: 'boolean', paraId: 7, tocIndex: 14 },
        { value: 'true', paraId: 7, tocIndex: 14 },
        {
          value: '\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE',
          paraId: 7,
          tocIndex: 14,
        },
        { value: 'onClose', paraId: 7, tocIndex: 14 },
        { value: '() => void', paraId: 7, tocIndex: 14 },
        { value: '-', paraId: 7, tocIndex: 14 },
        {
          value: '\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570',
          paraId: 7,
          tocIndex: 14,
        },
        { value: 'onClick', paraId: 7, tocIndex: 14 },
        { value: '() => void', paraId: 7, tocIndex: 14 },
        { value: '-', paraId: 7, tocIndex: 14 },
        {
          value: '\u70B9\u51FB\u901A\u77E5\u65F6\u7684\u56DE\u8C03\u51FD\u6570',
          paraId: 7,
          tocIndex: 14,
        },
        { value: 'className', paraId: 7, tocIndex: 14 },
        { value: 'string', paraId: 7, tocIndex: 14 },
        { value: '-', paraId: 7, tocIndex: 14 },
        { value: '\u81EA\u5B9A\u4E49\u7C7B\u540D', paraId: 7, tocIndex: 14 },
        { value: 'style', paraId: 7, tocIndex: 14 },
        { value: 'React.CSSProperties', paraId: 7, tocIndex: 14 },
        { value: '-', paraId: 7, tocIndex: 14 },
        { value: '\u81EA\u5B9A\u4E49\u6837\u5F0F', paraId: 7, tocIndex: 14 },
        { value: 'placement', paraId: 7, tocIndex: 14 },
        {
          value: "'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'",
          paraId: 7,
          tocIndex: 14,
        },
        { value: "'topRight'", paraId: 7, tocIndex: 14 },
        { value: '\u901A\u77E5\u4F4D\u7F6E', paraId: 7, tocIndex: 14 },
        { value: '\u5C5E\u6027', paraId: 8, tocIndex: 15 },
        { value: '\u7C7B\u578B', paraId: 8, tocIndex: 15 },
        { value: '\u8BF4\u660E', paraId: 8, tocIndex: 15 },
        { value: 'close', paraId: 8, tocIndex: 15 },
        { value: '() => void', paraId: 8, tocIndex: 15 },
        {
          value: '\u5173\u95ED\u5F53\u524D\u901A\u77E5\u7684\u65B9\u6CD5',
          paraId: 8,
          tocIndex: 15,
        },
      ];
    },
    27045: function (v, f) {
      'use strict';
      f.Z = `import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  htmlType?: 'button' | 'submit' | 'reset';
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'default',
  disabled = false,
  children,
  onClick,
  className = '',
  style = {},
  htmlType = 'button',
  ...rest
}) => {
  const getButtonClass = () => {
    const classes = [styles.button];

    // Add type class
    classes.push(styles[type]);

    // Add size class
    classes.push(styles[size]);

    // Add disabled class
    if (disabled) {
      classes.push(styles.disabled);
    }

    // Add custom class
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      type={htmlType === 'submit' ? 'submit' : htmlType === 'reset' ? 'reset' : 'button'}
      className={getButtonClass()}
      style={style}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;`;
    },
    81339: function (v, f) {
      'use strict';
      f.Z = `
import styles from './Space.module.css';

interface SpaceProps {
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'middle' | 'large' | number;
  wrap?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Space: React.FC<SpaceProps> = ({
  direction = 'horizontal',
  size = 'middle',
  wrap = false,
  className,
  children,
}) => {
  const getSizeValue = () => {
    if (typeof size === 'number') {
      return size;
    }
    switch (size) {
      case 'small':
        return 8;
      case 'large':
        return 24;
      case 'middle':
      default:
        return 16;
    }
  };

  const sizeValue = getSizeValue();

  return (
    <div
      className={\`
        \${styles.space}
        \${styles[direction]}
        \${wrap ? styles.wrap : ''}
        \${className || ''}
      \`}
      style={{
        gap: direction === 'horizontal' ? \`\${sizeValue}px\` : undefined,
        rowGap: direction === 'vertical' ? \`\${sizeValue}px\` : undefined,
        columnGap: direction === 'vertical' ? undefined : \`\${sizeValue}px\`,
      }}
    >
      {children}
    </div>
  );
};

export default Space;
`;
    },
    67825: function (v, f, n) {
      var I = n(64382);
      function g(y, B) {
        if (y == null) return {};
        var c = I(y, B),
          m,
          p;
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(y);
          for (p = 0; p < a.length; p++)
            (m = a[p]),
              !(B.indexOf(m) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(y, m) &&
                (c[m] = y[m]);
        }
        return c;
      }
      (v.exports = g),
        (v.exports.__esModule = !0),
        (v.exports.default = v.exports);
    },
    64382: function (v) {
      function f(n, I) {
        if (n == null) return {};
        var g = {},
          y = Object.keys(n),
          B,
          c;
        for (c = 0; c < y.length; c++)
          (B = y[c]), !(I.indexOf(B) >= 0) && (g[B] = n[B]);
        return g;
      }
      (v.exports = f),
        (v.exports.__esModule = !0),
        (v.exports.default = v.exports);
    },
  },
]);
