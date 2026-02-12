(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [8606, 7656, 849],
  {
    59324: function (S, x, e) {
      'use strict';
      var d;
      e.r(x),
        e.d(x, {
          demos: function () {
            return R;
          },
        });
      var D = e(90228),
        r = e.n(D),
        A = e(48305),
        E = e.n(A),
        h = e(87999),
        f = e.n(h),
        u = e(75271),
        g = e(97656),
        $ = e(10849),
        R = {
          'tour-demo-0': {
            component: u.memo(
              u.lazy(
                f()(
                  r()().mark(function o() {
                    var a, t, l, i, c, n, m, y, T;
                    return r()().wrap(function (b) {
                      for (;;)
                        switch ((b.prev = b.next)) {
                          case 0:
                            return (
                              (b.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (a = b.sent),
                              (t = a.default),
                              (l = a.useState),
                              (i = a.useEffect),
                              (b.next = 8),
                              e.e(6833).then(e.bind(e, 16833))
                            );
                          case 8:
                            return (
                              (c = b.sent),
                              (n = c.default),
                              (b.next = 12),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 12:
                            return (
                              (m = b.sent),
                              (y = m.default),
                              (T = function () {
                                var C = l(!1),
                                  N = E()(C, 2),
                                  v = N[0],
                                  B = N[1];
                                i(function () {
                                  var V = setTimeout(function () {
                                    B(!0);
                                  }, 500);
                                  return function () {
                                    return clearTimeout(V);
                                  };
                                }, []);
                                var I = [
                                  {
                                    title: '\u6B22\u8FCE\u4F7F\u7528',
                                    content:
                                      '\u8FD9\u662F\u4E00\u4E2A\u4EA7\u54C1\u5BFC\u89C8\u793A\u4F8B\uFF0C\u5C06\u5F15\u5BFC\u60A8\u4E86\u89E3\u4E3B\u8981\u529F\u80FD',
                                    target: '.tour-target-1',
                                    placement: 'bottom',
                                  },
                                  {
                                    title: '\u6309\u94AE\u529F\u80FD',
                                    content:
                                      '\u70B9\u51FB\u6B64\u6309\u94AE\u53EF\u4EE5\u89E6\u53D1\u64CD\u4F5C',
                                    target: '.tour-target-2',
                                    placement: 'right',
                                  },
                                  {
                                    title: '\u5B8C\u6210\u5BFC\u89C8',
                                    content:
                                      '\u5BFC\u89C8\u5DF2\u5B8C\u6210\uFF0C\u60A8\u53EF\u4EE5\u5F00\u59CB\u4F7F\u7528\u4EA7\u54C1\u4E86',
                                    target: '.tour-target-3',
                                    placement: 'left',
                                  },
                                ];
                                return t.createElement(
                                  'div',
                                  { style: { padding: '20px' } },
                                  t.createElement(
                                    'h1',
                                    { className: 'tour-target-1' },
                                    '\u4EA7\u54C1\u6807\u9898',
                                  ),
                                  t.createElement(
                                    'p',
                                    null,
                                    '\u4EA7\u54C1\u4ECB\u7ECD\u5185\u5BB9...',
                                  ),
                                  t.createElement(
                                    y,
                                    {
                                      className: 'tour-target-2',
                                      type: 'primary',
                                      style: { margin: '10px 0' },
                                    },
                                    '\u4E3B\u8981\u6309\u94AE',
                                  ),
                                  t.createElement(
                                    'div',
                                    {
                                      className: 'tour-target-3',
                                      style: { marginTop: '20px' },
                                    },
                                    t.createElement(
                                      'h3',
                                      null,
                                      '\u5176\u4ED6\u529F\u80FD\u533A\u57DF',
                                    ),
                                    t.createElement(
                                      'p',
                                      null,
                                      '\u8FD9\u91CC\u662F\u5176\u4ED6\u529F\u80FD\u7684\u8BF4\u660E...',
                                    ),
                                  ),
                                  t.createElement(n, {
                                    visible: v,
                                    steps: I,
                                    onFinish: function () {
                                      return B(!1);
                                    },
                                    onCancel: function () {
                                      return B(!1);
                                    },
                                  }),
                                  t.createElement(
                                    y,
                                    {
                                      onClick: function () {
                                        return B(!0);
                                      },
                                      style: { marginTop: '20px' },
                                    },
                                    '\u91CD\u65B0\u5F00\u59CB\u5BFC\u89C8',
                                  ),
                                );
                              }),
                              b.abrupt('return', { default: T })
                            );
                          case 16:
                          case 'end':
                            return b.stop();
                        }
                    }, o);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'tour-demo-0',
              refAtomIds: ['Tour'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useState, useEffect } from 'react';
import Tour from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // \u6A21\u62DF\u9875\u9762\u52A0\u8F7D\u540E\u663E\u793A\u5F15\u5BFC
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      title: '\u6B22\u8FCE\u4F7F\u7528',
      content: '\u8FD9\u662F\u4E00\u4E2A\u4EA7\u54C1\u5BFC\u89C8\u793A\u4F8B\uFF0C\u5C06\u5F15\u5BFC\u60A8\u4E86\u89E3\u4E3B\u8981\u529F\u80FD',
      target: '.tour-target-1',
      placement: 'bottom',
    },
    {
      title: '\u6309\u94AE\u529F\u80FD',
      content: '\u70B9\u51FB\u6B64\u6309\u94AE\u53EF\u4EE5\u89E6\u53D1\u64CD\u4F5C',
      target: '.tour-target-2',
      placement: 'right',
    },
    {
      title: '\u5B8C\u6210\u5BFC\u89C8',
      content: '\u5BFC\u89C8\u5DF2\u5B8C\u6210\uFF0C\u60A8\u53EF\u4EE5\u5F00\u59CB\u4F7F\u7528\u4EA7\u54C1\u4E86',
      target: '.tour-target-3',
      placement: 'left',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="tour-target-1">\u4EA7\u54C1\u6807\u9898</h1>
      <p>\u4EA7\u54C1\u4ECB\u7ECD\u5185\u5BB9...</p>
      <Button className="tour-target-2" type="primary" style={{ margin: '10px 0' }}>
        \u4E3B\u8981\u6309\u94AE
      </Button>
      <div className="tour-target-3" style={{ marginTop: '20px' }}>
        <h3>\u5176\u4ED6\u529F\u80FD\u533A\u57DF</h3>
        <p>\u8FD9\u91CC\u662F\u5176\u4ED6\u529F\u80FD\u7684\u8BF4\u660E...</p>
      </div>

      <Tour
        visible={visible}
        steps={steps}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      />

      <Button onClick={() => setVisible(true)} style={{ marginTop: '20px' }}>
        \u91CD\u65B0\u5F00\u59CB\u5BFC\u89C8
      </Button>
    </div>
  );
};

export default App;`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                '../Button.tsx': { type: 'FILE', value: e(27045).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Button.tsx': g,
              react: d || (d = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': g,
            },
            renderOpts: {
              compile: (function () {
                var o = f()(
                  r()().mark(function t() {
                    var l,
                      i = arguments;
                    return r()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return n.abrupt(
                              'return',
                              (l = n.sent).default.apply(l, i),
                            );
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, t);
                  }),
                );
                function a() {
                  return o.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
          'tour-demo-1': {
            component: u.memo(
              u.lazy(
                f()(
                  r()().mark(function o() {
                    var a, t, l, i, c, n, m, y, T, s;
                    return r()().wrap(function (p) {
                      for (;;)
                        switch ((p.prev = p.next)) {
                          case 0:
                            return (
                              (p.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (a = p.sent),
                              (t = a.default),
                              (l = a.useState),
                              (p.next = 7),
                              e.e(6833).then(e.bind(e, 16833))
                            );
                          case 7:
                            return (
                              (i = p.sent),
                              (c = i.default),
                              (p.next = 11),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 11:
                            return (
                              (n = p.sent),
                              (m = n.default),
                              (p.next = 15),
                              Promise.resolve().then(e.bind(e, 10849))
                            );
                          case 15:
                            return (
                              (y = p.sent),
                              (T = y.default),
                              (s = function () {
                                var N = l(!1),
                                  v = E()(N, 2),
                                  B = v[0],
                                  I = v[1],
                                  V = [
                                    {
                                      title: '\u7B2C\u4E00\u6B65',
                                      content: t.createElement(
                                        'div',
                                        null,
                                        t.createElement(
                                          'p',
                                          null,
                                          '\u8FD9\u662F\u7B2C\u4E00\u6B65\u7684\u8BE6\u7EC6\u8BF4\u660E',
                                        ),
                                        t.createElement(
                                          'p',
                                          null,
                                          '\u53EF\u4EE5\u5305\u542B\u591A\u884C\u6587\u672C\u548C\u5176\u4ED6\u5143\u7D20',
                                        ),
                                      ),
                                      target: '.step-1',
                                      placement: 'top',
                                    },
                                    {
                                      title: '\u7B2C\u4E8C\u6B65',
                                      content: t.createElement(
                                        'div',
                                        null,
                                        t.createElement(
                                          'p',
                                          null,
                                          '\u8FD9\u662F\u7B2C\u4E8C\u6B65\u7684\u8BE6\u7EC6\u8BF4\u660E',
                                        ),
                                        t.createElement(
                                          'p',
                                          null,
                                          '\u5305\u542B\u56FE\u6807\uFF1A',
                                          t.createElement(T, { name: 'info' }),
                                        ),
                                      ),
                                      target: '.step-2',
                                      placement: 'bottom',
                                    },
                                    {
                                      title: '\u7B2C\u4E09\u6B65',
                                      content: t.createElement(
                                        'div',
                                        null,
                                        t.createElement(
                                          'p',
                                          null,
                                          '\u8FD9\u662F\u7B2C\u4E09\u6B65\u7684\u8BE6\u7EC6\u8BF4\u660E',
                                        ),
                                        t.createElement(
                                          'p',
                                          null,
                                          '\u5BFC\u89C8\u5373\u5C06\u5B8C\u6210',
                                        ),
                                      ),
                                      target: '.step-3',
                                      placement: 'right',
                                    },
                                  ];
                                return t.createElement(
                                  'div',
                                  { style: { padding: '20px' } },
                                  t.createElement(
                                    'div',
                                    {
                                      className: 'step-1',
                                      style: { margin: '20px 0' },
                                    },
                                    t.createElement(
                                      'h3',
                                      null,
                                      '\u529F\u80FD\u533A\u57DF 1',
                                    ),
                                    t.createElement(
                                      'p',
                                      null,
                                      '\u8FD9\u91CC\u662F\u529F\u80FD\u533A\u57DF 1 \u7684\u5185\u5BB9',
                                    ),
                                  ),
                                  t.createElement(
                                    'div',
                                    {
                                      className: 'step-2',
                                      style: { margin: '40px 0' },
                                    },
                                    t.createElement(
                                      'h3',
                                      null,
                                      '\u529F\u80FD\u533A\u57DF 2',
                                    ),
                                    t.createElement(
                                      'p',
                                      null,
                                      '\u8FD9\u91CC\u662F\u529F\u80FD\u533A\u57DF 2 \u7684\u5185\u5BB9',
                                    ),
                                  ),
                                  t.createElement(
                                    'div',
                                    {
                                      className: 'step-3',
                                      style: { margin: '40px 0' },
                                    },
                                    t.createElement(
                                      'h3',
                                      null,
                                      '\u529F\u80FD\u533A\u57DF 3',
                                    ),
                                    t.createElement(
                                      'p',
                                      null,
                                      '\u8FD9\u91CC\u662F\u529F\u80FD\u533A\u57DF 3 \u7684\u5185\u5BB9',
                                    ),
                                  ),
                                  t.createElement(
                                    m,
                                    {
                                      onClick: function () {
                                        return I(!0);
                                      },
                                    },
                                    '\u5F00\u59CB\u5BFC\u89C8',
                                  ),
                                  t.createElement(c, {
                                    visible: B,
                                    steps: V,
                                    onFinish: function () {
                                      return I(!1);
                                    },
                                    onCancel: function () {
                                      return I(!1);
                                    },
                                  }),
                                );
                              }),
                              p.abrupt('return', { default: s })
                            );
                          case 19:
                          case 'end':
                            return p.stop();
                        }
                    }, o);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'tour-demo-1',
              refAtomIds: ['Tour'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useState } from 'react';
import Tour from './index';
import Button from '../Button';
import Icon from '../Icon';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      title: '\u7B2C\u4E00\u6B65',
      content: (
        <div>
          <p>\u8FD9\u662F\u7B2C\u4E00\u6B65\u7684\u8BE6\u7EC6\u8BF4\u660E</p>
          <p>\u53EF\u4EE5\u5305\u542B\u591A\u884C\u6587\u672C\u548C\u5176\u4ED6\u5143\u7D20</p>
        </div>
      ),
      target: '.step-1',
      placement: 'top',
    },
    {
      title: '\u7B2C\u4E8C\u6B65',
      content: (
        <div>
          <p>\u8FD9\u662F\u7B2C\u4E8C\u6B65\u7684\u8BE6\u7EC6\u8BF4\u660E</p>
          <p>\u5305\u542B\u56FE\u6807\uFF1A<Icon name="info" /></p>
        </div>
      ),
      target: '.step-2',
      placement: 'bottom',
    },
    {
      title: '\u7B2C\u4E09\u6B65',
      content: (
        <div>
          <p>\u8FD9\u662F\u7B2C\u4E09\u6B65\u7684\u8BE6\u7EC6\u8BF4\u660E</p>
          <p>\u5BFC\u89C8\u5373\u5C06\u5B8C\u6210</p>
        </div>
      ),
      target: '.step-3',
      placement: 'right',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div className="step-1" style={{ margin: '20px 0' }}>
        <h3>\u529F\u80FD\u533A\u57DF 1</h3>
        <p>\u8FD9\u91CC\u662F\u529F\u80FD\u533A\u57DF 1 \u7684\u5185\u5BB9</p>
      </div>

      <div className="step-2" style={{ margin: '40px 0' }}>
        <h3>\u529F\u80FD\u533A\u57DF 2</h3>
        <p>\u8FD9\u91CC\u662F\u529F\u80FD\u533A\u57DF 2 \u7684\u5185\u5BB9</p>
      </div>

      <div className="step-3" style={{ margin: '40px 0' }}>
        <h3>\u529F\u80FD\u533A\u57DF 3</h3>
        <p>\u8FD9\u91CC\u662F\u529F\u80FD\u533A\u57DF 3 \u7684\u5185\u5BB9</p>
      </div>

      <Button onClick={() => setVisible(true)}>\u5F00\u59CB\u5BFC\u89C8</Button>

      <Tour
        visible={visible}
        steps={steps}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

export default App;`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                '../Icon.tsx': { type: 'FILE', value: e(4487).Z },
                '../Button.tsx': { type: 'FILE', value: e(27045).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Icon.tsx': $,
              '../Button.tsx': g,
              react: d || (d = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Icon/index.tsx': $,
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': g,
            },
            renderOpts: {
              compile: (function () {
                var o = f()(
                  r()().mark(function t() {
                    var l,
                      i = arguments;
                    return r()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return n.abrupt(
                              'return',
                              (l = n.sent).default.apply(l, i),
                            );
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, t);
                  }),
                );
                function a() {
                  return o.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
          'tour-demo-2': {
            component: u.memo(
              u.lazy(
                f()(
                  r()().mark(function o() {
                    var a, t, l, i, c, n, m, y;
                    return r()().wrap(function (s) {
                      for (;;)
                        switch ((s.prev = s.next)) {
                          case 0:
                            return (
                              (s.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (a = s.sent),
                              (t = a.default),
                              (l = a.useState),
                              (s.next = 7),
                              e.e(6833).then(e.bind(e, 16833))
                            );
                          case 7:
                            return (
                              (i = s.sent),
                              (c = i.default),
                              (s.next = 11),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 11:
                            return (
                              (n = s.sent),
                              (m = n.default),
                              (y = function () {
                                var p = l(!1),
                                  C = E()(p, 2),
                                  N = C[0],
                                  v = C[1],
                                  B = l(0),
                                  I = E()(B, 2),
                                  V = I[0],
                                  P = I[1],
                                  M = [
                                    {
                                      title: '\u6B65\u9AA4 1',
                                      content:
                                        '\u8FD9\u662F\u6B65\u9AA4 1 \u7684\u8BF4\u660E',
                                      target: '.controlled-step-1',
                                      placement: 'top',
                                    },
                                    {
                                      title: '\u6B65\u9AA4 2',
                                      content:
                                        '\u8FD9\u662F\u6B65\u9AA4 2 \u7684\u8BF4\u660E',
                                      target: '.controlled-step-2',
                                      placement: 'bottom',
                                    },
                                    {
                                      title: '\u6B65\u9AA4 3',
                                      content:
                                        '\u8FD9\u662F\u6B65\u9AA4 3 \u7684\u8BF4\u660E',
                                      target: '.controlled-step-3',
                                      placement: 'right',
                                    },
                                  ];
                                return t.createElement(
                                  'div',
                                  { style: { padding: '20px' } },
                                  t.createElement(
                                    'div',
                                    {
                                      className: 'controlled-step-1',
                                      style: { margin: '20px 0' },
                                    },
                                    t.createElement(
                                      'h3',
                                      null,
                                      '\u53D7\u63A7\u6B65\u9AA4 1',
                                    ),
                                    t.createElement(
                                      'p',
                                      null,
                                      '\u5185\u5BB9 1',
                                    ),
                                  ),
                                  t.createElement(
                                    'div',
                                    {
                                      className: 'controlled-step-2',
                                      style: { margin: '40px 0' },
                                    },
                                    t.createElement(
                                      'h3',
                                      null,
                                      '\u53D7\u63A7\u6B65\u9AA4 2',
                                    ),
                                    t.createElement(
                                      'p',
                                      null,
                                      '\u5185\u5BB9 2',
                                    ),
                                  ),
                                  t.createElement(
                                    'div',
                                    {
                                      className: 'controlled-step-3',
                                      style: { margin: '40px 0' },
                                    },
                                    t.createElement(
                                      'h3',
                                      null,
                                      '\u53D7\u63A7\u6B65\u9AA4 3',
                                    ),
                                    t.createElement(
                                      'p',
                                      null,
                                      '\u5185\u5BB9 3',
                                    ),
                                  ),
                                  t.createElement(
                                    'div',
                                    { style: { margin: '20px 0' } },
                                    t.createElement(
                                      m,
                                      {
                                        onClick: function () {
                                          return v(!0);
                                        },
                                      },
                                      '\u5F00\u59CB\u5BFC\u89C8',
                                    ),
                                    t.createElement(
                                      m,
                                      {
                                        onClick: function () {
                                          return P(0);
                                        },
                                        style: { marginLeft: '10px' },
                                      },
                                      '\u56DE\u5230\u7B2C\u4E00\u6B65',
                                    ),
                                    t.createElement(
                                      m,
                                      {
                                        onClick: function () {
                                          return P(1);
                                        },
                                        style: { marginLeft: '10px' },
                                      },
                                      '\u56DE\u5230\u7B2C\u4E8C\u6B65',
                                    ),
                                    t.createElement(
                                      m,
                                      {
                                        onClick: function () {
                                          return P(2);
                                        },
                                        style: { marginLeft: '10px' },
                                      },
                                      '\u56DE\u5230\u7B2C\u4E09\u6B65',
                                    ),
                                  ),
                                  t.createElement(c, {
                                    visible: N,
                                    current: V,
                                    onCurrentChange: P,
                                    steps: M,
                                    onFinish: function () {
                                      return v(!1);
                                    },
                                    onCancel: function () {
                                      return v(!1);
                                    },
                                  }),
                                  t.createElement(
                                    'p',
                                    null,
                                    '\u5F53\u524D\u6B65\u9AA4\uFF1A',
                                    V + 1,
                                    '/',
                                    M.length,
                                  ),
                                );
                              }),
                              s.abrupt('return', { default: y })
                            );
                          case 15:
                          case 'end':
                            return s.stop();
                        }
                    }, o);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'tour-demo-2',
              refAtomIds: ['Tour'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useState } from 'react';
import Tour from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: '\u6B65\u9AA4 1',
      content: '\u8FD9\u662F\u6B65\u9AA4 1 \u7684\u8BF4\u660E',
      target: '.controlled-step-1',
      placement: 'top',
    },
    {
      title: '\u6B65\u9AA4 2',
      content: '\u8FD9\u662F\u6B65\u9AA4 2 \u7684\u8BF4\u660E',
      target: '.controlled-step-2',
      placement: 'bottom',
    },
    {
      title: '\u6B65\u9AA4 3',
      content: '\u8FD9\u662F\u6B65\u9AA4 3 \u7684\u8BF4\u660E',
      target: '.controlled-step-3',
      placement: 'right',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div className="controlled-step-1" style={{ margin: '20px 0' }}>
        <h3>\u53D7\u63A7\u6B65\u9AA4 1</h3>
        <p>\u5185\u5BB9 1</p>
      </div>

      <div className="controlled-step-2" style={{ margin: '40px 0' }}>
        <h3>\u53D7\u63A7\u6B65\u9AA4 2</h3>
        <p>\u5185\u5BB9 2</p>
      </div>

      <div className="controlled-step-3" style={{ margin: '40px 0' }}>
        <h3>\u53D7\u63A7\u6B65\u9AA4 3</h3>
        <p>\u5185\u5BB9 3</p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <Button onClick={() => setVisible(true)}>\u5F00\u59CB\u5BFC\u89C8</Button>
        <Button onClick={() => setCurrentStep(0)} style={{ marginLeft: '10px' }}>
          \u56DE\u5230\u7B2C\u4E00\u6B65
        </Button>
        <Button onClick={() => setCurrentStep(1)} style={{ marginLeft: '10px' }}>
          \u56DE\u5230\u7B2C\u4E8C\u6B65
        </Button>
        <Button onClick={() => setCurrentStep(2)} style={{ marginLeft: '10px' }}>
          \u56DE\u5230\u7B2C\u4E09\u6B65
        </Button>
      </div>

      <Tour
        visible={visible}
        current={currentStep}
        onCurrentChange={setCurrentStep}
        steps={steps}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      />

      <p>\u5F53\u524D\u6B65\u9AA4\uFF1A{currentStep + 1}/{steps.length}</p>
    </div>
  );
};

export default App;`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                '../Button.tsx': { type: 'FILE', value: e(27045).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Button.tsx': g,
              react: d || (d = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': g,
            },
            renderOpts: {
              compile: (function () {
                var o = f()(
                  r()().mark(function t() {
                    var l,
                      i = arguments;
                    return r()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return n.abrupt(
                              'return',
                              (l = n.sent).default.apply(l, i),
                            );
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, t);
                  }),
                );
                function a() {
                  return o.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
          'tour-demo-3': {
            component: u.memo(
              u.lazy(
                f()(
                  r()().mark(function o() {
                    var a, t, l, i, c, n, m, y;
                    return r()().wrap(function (s) {
                      for (;;)
                        switch ((s.prev = s.next)) {
                          case 0:
                            return (
                              (s.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (a = s.sent),
                              (t = a.default),
                              (l = a.useState),
                              (s.next = 7),
                              e.e(6833).then(e.bind(e, 16833))
                            );
                          case 7:
                            return (
                              (i = s.sent),
                              (c = i.default),
                              (s.next = 11),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 11:
                            return (
                              (n = s.sent),
                              (m = n.default),
                              (y = function () {
                                var p = l(!1),
                                  C = E()(p, 2),
                                  N = C[0],
                                  v = C[1],
                                  B = [
                                    {
                                      title: '\u65E0\u906E\u7F69\u5BFC\u89C8',
                                      content:
                                        '\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u906E\u7F69\u5C42\u7684\u5BFC\u89C8\u793A\u4F8B',
                                      target: '.no-mask-step-1',
                                      placement: 'top',
                                    },
                                    {
                                      title: '\u7B2C\u4E8C\u6B65',
                                      content:
                                        '\u53EF\u4EE5\u6E05\u6670\u770B\u5230\u9875\u9762\u5185\u5BB9',
                                      target: '.no-mask-step-2',
                                      placement: 'bottom',
                                    },
                                  ];
                                return t.createElement(
                                  'div',
                                  { style: { padding: '20px' } },
                                  t.createElement(
                                    'div',
                                    {
                                      className: 'no-mask-step-1',
                                      style: { margin: '20px 0' },
                                    },
                                    t.createElement(
                                      'h3',
                                      null,
                                      '\u529F\u80FD\u533A\u57DF',
                                    ),
                                    t.createElement(
                                      'p',
                                      null,
                                      '\u8FD9\u91CC\u662F\u529F\u80FD\u533A\u57DF\u7684\u5185\u5BB9',
                                    ),
                                  ),
                                  t.createElement(
                                    'div',
                                    {
                                      className: 'no-mask-step-2',
                                      style: { margin: '40px 0' },
                                    },
                                    t.createElement(
                                      'h3',
                                      null,
                                      '\u53E6\u4E00\u4E2A\u529F\u80FD\u533A\u57DF',
                                    ),
                                    t.createElement(
                                      'p',
                                      null,
                                      '\u8FD9\u91CC\u662F\u53E6\u4E00\u4E2A\u529F\u80FD\u533A\u57DF\u7684\u5185\u5BB9',
                                    ),
                                  ),
                                  t.createElement(
                                    m,
                                    {
                                      onClick: function () {
                                        return v(!0);
                                      },
                                    },
                                    '\u5F00\u59CB\u65E0\u906E\u7F69\u5BFC\u89C8',
                                  ),
                                  t.createElement(c, {
                                    visible: N,
                                    steps: B,
                                    onFinish: function () {
                                      return v(!1);
                                    },
                                    onCancel: function () {
                                      return v(!1);
                                    },
                                    mask: !1,
                                  }),
                                );
                              }),
                              s.abrupt('return', { default: y })
                            );
                          case 15:
                          case 'end':
                            return s.stop();
                        }
                    }, o);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'tour-demo-3',
              refAtomIds: ['Tour'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useState } from 'react';
import Tour from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      title: '\u65E0\u906E\u7F69\u5BFC\u89C8',
      content: '\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u906E\u7F69\u5C42\u7684\u5BFC\u89C8\u793A\u4F8B',
      target: '.no-mask-step-1',
      placement: 'top',
    },
    {
      title: '\u7B2C\u4E8C\u6B65',
      content: '\u53EF\u4EE5\u6E05\u6670\u770B\u5230\u9875\u9762\u5185\u5BB9',
      target: '.no-mask-step-2',
      placement: 'bottom',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div className="no-mask-step-1" style={{ margin: '20px 0' }}>
        <h3>\u529F\u80FD\u533A\u57DF</h3>
        <p>\u8FD9\u91CC\u662F\u529F\u80FD\u533A\u57DF\u7684\u5185\u5BB9</p>
      </div>

      <div className="no-mask-step-2" style={{ margin: '40px 0' }}>
        <h3>\u53E6\u4E00\u4E2A\u529F\u80FD\u533A\u57DF</h3>
        <p>\u8FD9\u91CC\u662F\u53E6\u4E00\u4E2A\u529F\u80FD\u533A\u57DF\u7684\u5185\u5BB9</p>
      </div>

      <Button onClick={() => setVisible(true)}>\u5F00\u59CB\u65E0\u906E\u7F69\u5BFC\u89C8</Button>

      <Tour
        visible={visible}
        steps={steps}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        mask={false}
      />
    </div>
  );
};

export default App;`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                '../Button.tsx': { type: 'FILE', value: e(27045).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Button.tsx': g,
              react: d || (d = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': g,
            },
            renderOpts: {
              compile: (function () {
                var o = f()(
                  r()().mark(function t() {
                    var l,
                      i = arguments;
                    return r()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return n.abrupt(
                              'return',
                              (l = n.sent).default.apply(l, i),
                            );
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, t);
                  }),
                );
                function a() {
                  return o.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
          'tour-demo-4': {
            component: u.memo(
              u.lazy(
                f()(
                  r()().mark(function o() {
                    var a, t, l, i, c, n, m, y;
                    return r()().wrap(function (s) {
                      for (;;)
                        switch ((s.prev = s.next)) {
                          case 0:
                            return (
                              (s.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (a = s.sent),
                              (t = a.default),
                              (l = a.useState),
                              (s.next = 7),
                              e.e(6833).then(e.bind(e, 16833))
                            );
                          case 7:
                            return (
                              (i = s.sent),
                              (c = i.default),
                              (s.next = 11),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 11:
                            return (
                              (n = s.sent),
                              (m = n.default),
                              (y = function () {
                                var p = l(!1),
                                  C = E()(p, 2),
                                  N = C[0],
                                  v = C[1],
                                  B = [
                                    {
                                      title:
                                        '\u4E0D\u53EF\u70B9\u51FB\u906E\u7F69',
                                      content:
                                        '\u70B9\u51FB\u906E\u7F69\u5C42\u4E0D\u4F1A\u5173\u95ED\u5BFC\u89C8\uFF0C\u53EA\u80FD\u901A\u8FC7\u6309\u94AE\u5173\u95ED',
                                      target: '.mask-closable-step-1',
                                      placement: 'top',
                                    },
                                  ];
                                return t.createElement(
                                  'div',
                                  { style: { padding: '20px' } },
                                  t.createElement(
                                    'div',
                                    {
                                      className: 'mask-closable-step-1',
                                      style: { margin: '20px 0' },
                                    },
                                    t.createElement(
                                      'h3',
                                      null,
                                      '\u529F\u80FD\u533A\u57DF',
                                    ),
                                    t.createElement(
                                      'p',
                                      null,
                                      '\u8FD9\u91CC\u662F\u529F\u80FD\u533A\u57DF\u7684\u5185\u5BB9',
                                    ),
                                  ),
                                  t.createElement(
                                    m,
                                    {
                                      onClick: function () {
                                        return v(!0);
                                      },
                                    },
                                    '\u5F00\u59CB\u5BFC\u89C8',
                                  ),
                                  t.createElement(c, {
                                    visible: N,
                                    steps: B,
                                    onFinish: function () {
                                      return v(!1);
                                    },
                                    onCancel: function () {
                                      return v(!1);
                                    },
                                    maskClosable: !1,
                                  }),
                                );
                              }),
                              s.abrupt('return', { default: y })
                            );
                          case 15:
                          case 'end':
                            return s.stop();
                        }
                    }, o);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'tour-demo-4',
              refAtomIds: ['Tour'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useState } from 'react';
import Tour from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      title: '\u4E0D\u53EF\u70B9\u51FB\u906E\u7F69',
      content: '\u70B9\u51FB\u906E\u7F69\u5C42\u4E0D\u4F1A\u5173\u95ED\u5BFC\u89C8\uFF0C\u53EA\u80FD\u901A\u8FC7\u6309\u94AE\u5173\u95ED',
      target: '.mask-closable-step-1',
      placement: 'top',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div className="mask-closable-step-1" style={{ margin: '20px 0' }}>
        <h3>\u529F\u80FD\u533A\u57DF</h3>
        <p>\u8FD9\u91CC\u662F\u529F\u80FD\u533A\u57DF\u7684\u5185\u5BB9</p>
      </div>

      <Button onClick={() => setVisible(true)}>\u5F00\u59CB\u5BFC\u89C8</Button>

      <Tour
        visible={visible}
        steps={steps}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        maskClosable={false}
      />
    </div>
  );
};

export default App;`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                '../Button.tsx': { type: 'FILE', value: e(27045).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Button.tsx': g,
              react: d || (d = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': g,
            },
            renderOpts: {
              compile: (function () {
                var o = f()(
                  r()().mark(function t() {
                    var l,
                      i = arguments;
                    return r()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return n.abrupt(
                              'return',
                              (l = n.sent).default.apply(l, i),
                            );
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, t);
                  }),
                );
                function a() {
                  return o.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
          'tour-demo-5': {
            component: u.memo(
              u.lazy(
                f()(
                  r()().mark(function o() {
                    var a, t, l, i, c, n, m, y;
                    return r()().wrap(function (s) {
                      for (;;)
                        switch ((s.prev = s.next)) {
                          case 0:
                            return (
                              (s.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (a = s.sent),
                              (t = a.default),
                              (l = a.useState),
                              (s.next = 7),
                              e.e(6833).then(e.bind(e, 16833))
                            );
                          case 7:
                            return (
                              (i = s.sent),
                              (c = i.default),
                              (s.next = 11),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 11:
                            return (
                              (n = s.sent),
                              (m = n.default),
                              (y = function () {
                                var p = l(!1),
                                  C = E()(p, 2),
                                  N = C[0],
                                  v = C[1],
                                  B = [
                                    {
                                      title:
                                        '\u81EA\u5B9A\u4E49\u6837\u5F0F\u5BFC\u89C8',
                                      content:
                                        '\u8FD9\u662F\u4E00\u4E2A\u4F7F\u7528\u81EA\u5B9A\u4E49\u6837\u5F0F\u7684\u5BFC\u89C8\u793A\u4F8B',
                                      target: '.custom-style-step-1',
                                      placement: 'top',
                                    },
                                  ];
                                return t.createElement(
                                  'div',
                                  { style: { padding: '20px' } },
                                  t.createElement(
                                    'div',
                                    {
                                      className: 'custom-style-step-1',
                                      style: { margin: '20px 0' },
                                    },
                                    t.createElement(
                                      'h3',
                                      null,
                                      '\u529F\u80FD\u533A\u57DF',
                                    ),
                                    t.createElement(
                                      'p',
                                      null,
                                      '\u8FD9\u91CC\u662F\u529F\u80FD\u533A\u57DF\u7684\u5185\u5BB9',
                                    ),
                                  ),
                                  t.createElement(
                                    m,
                                    {
                                      onClick: function () {
                                        return v(!0);
                                      },
                                    },
                                    '\u5F00\u59CB\u81EA\u5B9A\u4E49\u6837\u5F0F\u5BFC\u89C8',
                                  ),
                                  t.createElement(c, {
                                    visible: N,
                                    steps: B,
                                    onFinish: function () {
                                      return v(!1);
                                    },
                                    onCancel: function () {
                                      return v(!1);
                                    },
                                    style: {},
                                  }),
                                );
                              }),
                              s.abrupt('return', { default: y })
                            );
                          case 15:
                          case 'end':
                            return s.stop();
                        }
                    }, o);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'tour-demo-5',
              refAtomIds: ['Tour'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useState } from 'react';
import Tour from './index';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      title: '\u81EA\u5B9A\u4E49\u6837\u5F0F\u5BFC\u89C8',
      content: '\u8FD9\u662F\u4E00\u4E2A\u4F7F\u7528\u81EA\u5B9A\u4E49\u6837\u5F0F\u7684\u5BFC\u89C8\u793A\u4F8B',
      target: '.custom-style-step-1',
      placement: 'top',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div className="custom-style-step-1" style={{ margin: '20px 0' }}>
        <h3>\u529F\u80FD\u533A\u57DF</h3>
        <p>\u8FD9\u91CC\u662F\u529F\u80FD\u533A\u57DF\u7684\u5185\u5BB9</p>
      </div>

      <Button onClick={() => setVisible(true)}>\u5F00\u59CB\u81EA\u5B9A\u4E49\u6837\u5F0F\u5BFC\u89C8</Button>

      <Tour
        visible={visible}
        steps={steps}
        onFinish={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        style={{
          // \u81EA\u5B9A\u4E49\u6837\u5F0F
        }}
      />
    </div>
  );
};

export default App;`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                '../Button.tsx': { type: 'FILE', value: e(27045).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Button.tsx': g,
              react: d || (d = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': g,
            },
            renderOpts: {
              compile: (function () {
                var o = f()(
                  r()().mark(function t() {
                    var l,
                      i = arguments;
                    return r()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return n.abrupt(
                              'return',
                              (l = n.sent).default.apply(l, i),
                            );
                          case 3:
                          case 'end':
                            return n.stop();
                        }
                    }, t);
                  }),
                );
                function a() {
                  return o.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
        };
    },
    97656: function (S, x, e) {
      'use strict';
      e.r(x),
        e.d(x, {
          default: function () {
            return $;
          },
        });
      var d = e(26068),
        D = e.n(d),
        r = e(67825),
        A = e.n(r),
        E = e(75271),
        h = {
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
        f = e(52676),
        u = [
          'type',
          'size',
          'disabled',
          'children',
          'onClick',
          'className',
          'style',
          'htmlType',
        ],
        g = function (o) {
          var a = o.type,
            t = a === void 0 ? 'default' : a,
            l = o.size,
            i = l === void 0 ? 'default' : l,
            c = o.disabled,
            n = c === void 0 ? !1 : c,
            m = o.children,
            y = o.onClick,
            T = o.className,
            s = T === void 0 ? '' : T,
            b = o.style,
            p = b === void 0 ? {} : b,
            C = o.htmlType,
            N = C === void 0 ? 'button' : C,
            v = A()(o, u),
            B = function () {
              var P = [h.button];
              return (
                P.push(h[t]),
                P.push(h[i]),
                n && P.push(h.disabled),
                s && P.push(s),
                P.join(' ')
              );
            },
            I = function () {
              !n && y && y();
            };
          return (0, f.jsx)(
            'button',
            D()(
              D()(
                {
                  type:
                    N === 'submit'
                      ? 'submit'
                      : N === 'reset'
                      ? 'reset'
                      : 'button',
                  className: B(),
                  style: p,
                  disabled: n,
                  onClick: I,
                },
                v,
              ),
              {},
              { children: m },
            ),
          );
        },
        $ = g;
    },
    10849: function (S, x, e) {
      'use strict';
      e.r(x),
        e.d(x, {
          default: function () {
            return A;
          },
        });
      var d = {
          icon: 'Vp2lCjtRG4DLDFDyVAez',
          'icon-home': 'ulVgW4QY8wUom5HXWOuz',
          'icon-search': 'sAK0iM6ix40xZxS_gR3U',
          'icon-user': 'WUYhPdCcKFAxSpKQlO3t',
          'icon-settings': 'Ztk4ZKfgYg4J2Nmgcsjn',
          'icon-arrow-right': 'cxV9ttCA6QQkztjDqSDh',
          'icon-arrow-left': 'p5tsuFDYnk8_NAJ2QcNA',
          'icon-arrow-up': 'RL0LhMbJK8b1M0jwLYAY',
          'icon-arrow-down': 'DHSDUSNKuAoh1JeJkV0v',
          'icon-plus': 'hUkP6eCM8EMNXnxmHzG5',
          'icon-minus': 'Gf1qVZt2htU07CuTLi1X',
          'icon-close': 'shhoQ5dywb0V4tCsLHMN',
          'icon-check': 'vaoqDQYPDA0e9UdawIs_',
          'icon-warning': 'lMoCQOuGA0cxWF77Hi3f',
          'icon-error': 'Jp3AUMQ0eY_UXDunuEpk',
          'icon-info': 'MAuILQQxsPI3jjujx1cX',
          spin: 'CiXqHgtYVPkCVvohw7xq',
        },
        D = e(52676),
        r = function (h) {
          var f = h.type,
            u = h.size,
            g = u === void 0 ? 'middle' : u,
            $ = h.color,
            R = h.rotate,
            o = h.spin,
            a = h.className,
            t = function () {
              if (typeof g == 'number') return g;
              switch (g) {
                case 'small':
                  return 16;
                case 'large':
                  return 24;
                case 'middle':
                default:
                  return 20;
              }
            },
            l = t();
          return (0, D.jsx)('i', {
            className: `
        `
              .concat(
                d.icon,
                `
        `,
              )
              .concat(
                d[f] || '',
                `
        `,
              )
              .concat(
                o ? d.spin : '',
                `
        `,
              )
              .concat(
                a || '',
                `
      `,
              ),
            style: {
              fontSize: ''.concat(l, 'px'),
              color: $,
              transform: R ? 'rotate('.concat(R, 'deg)') : void 0,
            },
          });
        },
        A = r;
    },
    55511: function (S, x, e) {
      'use strict';
      e.r(x),
        e.d(x, {
          texts: function () {
            return d;
          },
        });
      const d = [
        {
          value:
            '\u5F15\u5BFC\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u521B\u5EFA\u4EA7\u54C1\u529F\u80FD\u5BFC\u89C8\uFF0C\u5F15\u5BFC\u7528\u6237\u4E86\u89E3\u4EA7\u54C1\u7684\u4E3B\u8981\u529F\u80FD\u3002',
          paraId: 0,
          tocIndex: 0,
        },
        {
          value: '\u6700\u7B80\u5355\u7684\u5F15\u5BFC\u6D41\u7A0B\u3002',
          paraId: 1,
          tocIndex: 1,
        },
        {
          value:
            '\u81EA\u5B9A\u4E49\u5F15\u5BFC\u6B65\u9AA4\u7684\u5185\u5BB9\u548C\u4F4D\u7F6E\u3002',
          paraId: 2,
          tocIndex: 2,
        },
        {
          value:
            '\u901A\u8FC7\u72B6\u6001\u63A7\u5236\u5F15\u5BFC\u6B65\u9AA4\u3002',
          paraId: 3,
          tocIndex: 3,
        },
        {
          value: '\u4E0D\u663E\u793A\u906E\u7F69\u5C42\u7684\u5F15\u5BFC\u3002',
          paraId: 4,
          tocIndex: 4,
        },
        {
          value:
            '\u8BBE\u7F6E\u906E\u7F69\u5C42\u4E0D\u53EF\u70B9\u51FB\u5173\u95ED\u3002',
          paraId: 5,
          tocIndex: 5,
        },
        {
          value:
            '\u901A\u8FC7 className \u548C style \u5C5E\u6027\u81EA\u5B9A\u4E49\u5F15\u5BFC\u6837\u5F0F\u3002',
          paraId: 6,
          tocIndex: 6,
        },
        { value: '\u5C5E\u6027', paraId: 7, tocIndex: 8 },
        { value: '\u7C7B\u578B', paraId: 7, tocIndex: 8 },
        { value: '\u9ED8\u8BA4\u503C', paraId: 7, tocIndex: 8 },
        { value: '\u8BF4\u660E', paraId: 7, tocIndex: 8 },
        { value: 'steps', paraId: 7, tocIndex: 8 },
        { value: 'TourStep[]', paraId: 7, tocIndex: 8 },
        { value: '-', paraId: 7, tocIndex: 8 },
        {
          value: '\u5BFC\u89C8\u6B65\u9AA4\u6570\u7EC4',
          paraId: 7,
          tocIndex: 8,
        },
        { value: 'visible', paraId: 7, tocIndex: 8 },
        { value: 'boolean', paraId: 7, tocIndex: 8 },
        { value: '-', paraId: 7, tocIndex: 8 },
        {
          value: '\u662F\u5426\u663E\u793A\u5BFC\u89C8',
          paraId: 7,
          tocIndex: 8,
        },
        { value: 'current', paraId: 7, tocIndex: 8 },
        { value: 'number', paraId: 7, tocIndex: 8 },
        { value: '-', paraId: 7, tocIndex: 8 },
        {
          value:
            '\u5F53\u524D\u6B65\u9AA4\u7D22\u5F15\uFF08\u53D7\u63A7\u6A21\u5F0F\uFF09',
          paraId: 7,
          tocIndex: 8,
        },
        { value: 'onFinish', paraId: 7, tocIndex: 8 },
        { value: '() => void', paraId: 7, tocIndex: 8 },
        { value: '-', paraId: 7, tocIndex: 8 },
        {
          value: '\u5B8C\u6210\u5BFC\u89C8\u65F6\u7684\u56DE\u8C03\u51FD\u6570',
          paraId: 7,
          tocIndex: 8,
        },
        { value: 'onCancel', paraId: 7, tocIndex: 8 },
        { value: '() => void', paraId: 7, tocIndex: 8 },
        { value: '-', paraId: 7, tocIndex: 8 },
        {
          value: '\u53D6\u6D88\u5BFC\u89C8\u65F6\u7684\u56DE\u8C03\u51FD\u6570',
          paraId: 7,
          tocIndex: 8,
        },
        { value: 'onCurrentChange', paraId: 7, tocIndex: 8 },
        { value: '(current: number) => void', paraId: 7, tocIndex: 8 },
        { value: '-', paraId: 7, tocIndex: 8 },
        {
          value: '\u6B65\u9AA4\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570',
          paraId: 7,
          tocIndex: 8,
        },
        { value: 'mask', paraId: 7, tocIndex: 8 },
        { value: 'boolean', paraId: 7, tocIndex: 8 },
        { value: 'true', paraId: 7, tocIndex: 8 },
        {
          value: '\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42',
          paraId: 7,
          tocIndex: 8,
        },
        { value: 'maskClosable', paraId: 7, tocIndex: 8 },
        { value: 'boolean', paraId: 7, tocIndex: 8 },
        { value: 'true', paraId: 7, tocIndex: 8 },
        {
          value:
            '\u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u53EF\u5173\u95ED\u5BFC\u89C8',
          paraId: 7,
          tocIndex: 8,
        },
        { value: 'className', paraId: 7, tocIndex: 8 },
        { value: 'string', paraId: 7, tocIndex: 8 },
        { value: '-', paraId: 7, tocIndex: 8 },
        { value: '\u81EA\u5B9A\u4E49\u7C7B\u540D', paraId: 7, tocIndex: 8 },
        { value: 'style', paraId: 7, tocIndex: 8 },
        { value: 'React.CSSProperties', paraId: 7, tocIndex: 8 },
        { value: '-', paraId: 7, tocIndex: 8 },
        { value: '\u81EA\u5B9A\u4E49\u6837\u5F0F', paraId: 7, tocIndex: 8 },
        { value: '\u5C5E\u6027', paraId: 8, tocIndex: 9 },
        { value: '\u7C7B\u578B', paraId: 8, tocIndex: 9 },
        { value: '\u9ED8\u8BA4\u503C', paraId: 8, tocIndex: 9 },
        { value: '\u8BF4\u660E', paraId: 8, tocIndex: 9 },
        { value: 'title', paraId: 8, tocIndex: 9 },
        { value: 'React.ReactNode', paraId: 8, tocIndex: 9 },
        { value: '-', paraId: 8, tocIndex: 9 },
        { value: '\u6B65\u9AA4\u6807\u9898', paraId: 8, tocIndex: 9 },
        { value: 'content', paraId: 8, tocIndex: 9 },
        { value: 'React.ReactNode', paraId: 8, tocIndex: 9 },
        { value: '-', paraId: 8, tocIndex: 9 },
        { value: '\u6B65\u9AA4\u5185\u5BB9', paraId: 8, tocIndex: 9 },
        { value: 'target', paraId: 8, tocIndex: 9 },
        { value: 'string | HTMLElement', paraId: 8, tocIndex: 9 },
        { value: '-', paraId: 8, tocIndex: 9 },
        {
          value:
            '\u76EE\u6807\u5143\u7D20\u9009\u62E9\u5668\u6216\u5143\u7D20\u5F15\u7528',
          paraId: 8,
          tocIndex: 9,
        },
        { value: 'placement', paraId: 8, tocIndex: 9 },
        {
          value: "'top' | 'bottom' | 'left' | 'right'",
          paraId: 8,
          tocIndex: 9,
        },
        { value: "'top'", paraId: 8, tocIndex: 9 },
        { value: '\u63D0\u793A\u6846\u4F4D\u7F6E', paraId: 8, tocIndex: 9 },
        { value: 'offset', paraId: 8, tocIndex: 9 },
        { value: 'number', paraId: 8, tocIndex: 9 },
        { value: '10', paraId: 8, tocIndex: 9 },
        {
          value:
            '\u63D0\u793A\u6846\u4E0E\u76EE\u6807\u5143\u7D20\u7684\u504F\u79FB\u91CF',
          paraId: 8,
          tocIndex: 9,
        },
      ];
    },
    27045: function (S, x) {
      'use strict';
      x.Z = `import React from 'react';
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
    4487: function (S, x) {
      'use strict';
      x.Z = `
import styles from './Icon.module.css';

interface IconProps {
  type: string;
  size?: 'small' | 'middle' | 'large' | number;
  color?: string;
  rotate?: number;
  spin?: boolean;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  type,
  size = 'middle',
  color,
  rotate,
  spin,
  className,
}) => {
  const getSizeValue = () => {
    if (typeof size === 'number') {
      return size;
    }
    switch (size) {
      case 'small':
        return 16;
      case 'large':
        return 24;
      case 'middle':
      default:
        return 20;
    }
  };

  const sizeValue = getSizeValue();

  return (
    <i
      className={\`
        \${styles.icon}
        \${styles[type] || ''}
        \${spin ? styles.spin : ''}
        \${className || ''}
      \`}
      style={{
        fontSize: \`\${sizeValue}px\`,
        color,
        transform: rotate ? \`rotate(\${rotate}deg)\` : undefined,
      }}
    />
  );
};

export default Icon;
`;
    },
    67825: function (S, x, e) {
      var d = e(64382);
      function D(r, A) {
        if (r == null) return {};
        var E = d(r, A),
          h,
          f;
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(r);
          for (f = 0; f < u.length; f++)
            (h = u[f]),
              !(A.indexOf(h) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(r, h) &&
                (E[h] = r[h]);
        }
        return E;
      }
      (S.exports = D),
        (S.exports.__esModule = !0),
        (S.exports.default = S.exports);
    },
    64382: function (S) {
      function x(e, d) {
        if (e == null) return {};
        var D = {},
          r = Object.keys(e),
          A,
          E;
        for (E = 0; E < r.length; E++)
          (A = r[E]), !(d.indexOf(A) >= 0) && (D[A] = e[A]);
        return D;
      }
      (S.exports = x),
        (S.exports.__esModule = !0),
        (S.exports.default = S.exports);
    },
  },
]);
