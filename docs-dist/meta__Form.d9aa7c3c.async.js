(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [252, 7656],
  {
    83482: function (E, g, e) {
      'use strict';
      var c;
      e.r(g),
        e.d(g, {
          demos: function () {
            return M;
          },
        });
      var $ = e(48305),
        b = e.n($),
        R = e(90228),
        o = e.n(R),
        B = e(87999),
        I = e.n(B),
        u = e(75271),
        h = e(97656),
        M = {
          'form-demo-0': {
            component: u.memo(
              u.lazy(
                I()(
                  o()().mark(function m() {
                    var s, n, l, a, d, t, i;
                    return o()().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (s = r.sent),
                              (n = s.default),
                              (r.next = 6),
                              e.e(8083).then(e.bind(e, 58083))
                            );
                          case 6:
                            return (
                              (l = r.sent),
                              (a = l.default),
                              (r.next = 10),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 10:
                            return (
                              (d = r.sent),
                              (t = d.default),
                              (i = function () {
                                var p = function (F) {
                                    console.log('Form submitted:', F);
                                  },
                                  f = function (F) {
                                    console.log('Form validation failed:', F);
                                  };
                                return n.createElement(
                                  a,
                                  { onFinish: p, onFinishFailed: f },
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u7528\u6237\u540D',
                                      name: 'username',
                                      required: !0,
                                    },
                                    n.createElement('input', null),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u5BC6\u7801',
                                      name: 'password',
                                      required: !0,
                                    },
                                    n.createElement('input', {
                                      type: 'password',
                                    }),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    null,
                                    n.createElement(
                                      t,
                                      { type: 'primary', htmlType: 'submit' },
                                      '\u63D0\u4EA4',
                                    ),
                                  ),
                                );
                              }),
                              r.abrupt('return', { default: i })
                            );
                          case 14:
                          case 'end':
                            return r.stop();
                        }
                    }, m);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'form-demo-0',
              refAtomIds: ['Form'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  const handleFinishFailed = (errors: Record<string, string[]>) => {
    console.log('Form validation failed:', errors);
  };

  return (
    <Form onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
      <Form.Item label="\u7528\u6237\u540D" name="username" required>
        <input />
      </Form.Item>
      <Form.Item label="\u5BC6\u7801" name="password" required>
        <input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">\u63D0\u4EA4</Button>
      </Form.Item>
    </Form>
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
              '../Button.tsx': h,
              react: c || (c = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var m = I()(
                  o()().mark(function n() {
                    var l,
                      a = arguments;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (l = t.sent).default.apply(l, a),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, n);
                  }),
                );
                function s() {
                  return m.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
          'form-demo-1': {
            component: u.memo(
              u.lazy(
                I()(
                  o()().mark(function m() {
                    var s, n, l, a, d, t, i;
                    return o()().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (s = r.sent),
                              (n = s.default),
                              (r.next = 6),
                              e.e(8083).then(e.bind(e, 58083))
                            );
                          case 6:
                            return (
                              (l = r.sent),
                              (a = l.default),
                              (r.next = 10),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 10:
                            return (
                              (d = r.sent),
                              (t = d.default),
                              (i = function () {
                                var p = function (v) {
                                  console.log('Form submitted:', v);
                                };
                                return n.createElement(
                                  'div',
                                  null,
                                  n.createElement(
                                    'h3',
                                    null,
                                    '\u5782\u76F4\u5E03\u5C40\uFF08\u9ED8\u8BA4\uFF09',
                                  ),
                                  n.createElement(
                                    a,
                                    { layout: 'vertical', onFinish: p },
                                    n.createElement(
                                      a.Item,
                                      {
                                        label: '\u7528\u6237\u540D',
                                        name: 'username',
                                        required: !0,
                                      },
                                      n.createElement('input', null),
                                    ),
                                    n.createElement(
                                      a.Item,
                                      {
                                        label: '\u5BC6\u7801',
                                        name: 'password',
                                        required: !0,
                                      },
                                      n.createElement('input', {
                                        type: 'password',
                                      }),
                                    ),
                                    n.createElement(
                                      a.Item,
                                      null,
                                      n.createElement(
                                        t,
                                        { type: 'primary', htmlType: 'submit' },
                                        '\u63D0\u4EA4',
                                      ),
                                    ),
                                  ),
                                  n.createElement(
                                    'h3',
                                    null,
                                    '\u6C34\u5E73\u5E03\u5C40',
                                  ),
                                  n.createElement(
                                    a,
                                    { layout: 'horizontal', onFinish: p },
                                    n.createElement(
                                      a.Item,
                                      {
                                        label: '\u7528\u6237\u540D',
                                        name: 'username',
                                        required: !0,
                                      },
                                      n.createElement('input', null),
                                    ),
                                    n.createElement(
                                      a.Item,
                                      {
                                        label: '\u5BC6\u7801',
                                        name: 'password',
                                        required: !0,
                                      },
                                      n.createElement('input', {
                                        type: 'password',
                                      }),
                                    ),
                                    n.createElement(
                                      a.Item,
                                      null,
                                      n.createElement(
                                        t,
                                        { type: 'primary', htmlType: 'submit' },
                                        '\u63D0\u4EA4',
                                      ),
                                    ),
                                  ),
                                  n.createElement(
                                    'h3',
                                    null,
                                    '\u5185\u8054\u5E03\u5C40',
                                  ),
                                  n.createElement(
                                    a,
                                    { layout: 'inline', onFinish: p },
                                    n.createElement(
                                      a.Item,
                                      {
                                        label: '\u7528\u6237\u540D',
                                        name: 'username',
                                        required: !0,
                                      },
                                      n.createElement('input', null),
                                    ),
                                    n.createElement(
                                      a.Item,
                                      {
                                        label: '\u5BC6\u7801',
                                        name: 'password',
                                        required: !0,
                                      },
                                      n.createElement('input', {
                                        type: 'password',
                                      }),
                                    ),
                                    n.createElement(
                                      a.Item,
                                      null,
                                      n.createElement(
                                        t,
                                        { type: 'primary', htmlType: 'submit' },
                                        '\u63D0\u4EA4',
                                      ),
                                    ),
                                  ),
                                );
                              }),
                              r.abrupt('return', { default: i })
                            );
                          case 14:
                          case 'end':
                            return r.stop();
                        }
                    }, m);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'form-demo-1',
              refAtomIds: ['Form'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  return (
    <div>
      <h3>\u5782\u76F4\u5E03\u5C40\uFF08\u9ED8\u8BA4\uFF09</h3>
      <Form layout="vertical" onFinish={handleFinish}>
        <Form.Item label="\u7528\u6237\u540D" name="username" required>
          <input />
        </Form.Item>
        <Form.Item label="\u5BC6\u7801" name="password" required>
          <input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">\u63D0\u4EA4</Button>
        </Form.Item>
      </Form>

      <h3>\u6C34\u5E73\u5E03\u5C40</h3>
      <Form layout="horizontal" onFinish={handleFinish}>
        <Form.Item label="\u7528\u6237\u540D" name="username" required>
          <input />
        </Form.Item>
        <Form.Item label="\u5BC6\u7801" name="password" required>
          <input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">\u63D0\u4EA4</Button>
        </Form.Item>
      </Form>

      <h3>\u5185\u8054\u5E03\u5C40</h3>
      <Form layout="inline" onFinish={handleFinish}>
        <Form.Item label="\u7528\u6237\u540D" name="username" required>
          <input />
        </Form.Item>
        <Form.Item label="\u5BC6\u7801" name="password" required>
          <input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">\u63D0\u4EA4</Button>
        </Form.Item>
      </Form>
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
              '../Button.tsx': h,
              react: c || (c = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var m = I()(
                  o()().mark(function n() {
                    var l,
                      a = arguments;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (l = t.sent).default.apply(l, a),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, n);
                  }),
                );
                function s() {
                  return m.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
          'form-demo-2': {
            component: u.memo(
              u.lazy(
                I()(
                  o()().mark(function m() {
                    var s, n, l, a, d, t, i;
                    return o()().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (s = r.sent),
                              (n = s.default),
                              (r.next = 6),
                              e.e(8083).then(e.bind(e, 58083))
                            );
                          case 6:
                            return (
                              (l = r.sent),
                              (a = l.default),
                              (r.next = 10),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 10:
                            return (
                              (d = r.sent),
                              (t = d.default),
                              (i = function () {
                                var p = function (v) {
                                  console.log('Form submitted:', v);
                                };
                                return n.createElement(
                                  a,
                                  { onFinish: p },
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u7528\u6237\u540D',
                                      name: 'username',
                                      required: !0,
                                      help: '\u8BF7\u8F93\u5165\u60A8\u7684\u7528\u6237\u540D',
                                    },
                                    n.createElement('input', null),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u90AE\u7BB1',
                                      name: 'email',
                                      required: !0,
                                      validateStatus: 'success',
                                    },
                                    n.createElement('input', { type: 'email' }),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u5BC6\u7801',
                                      name: 'password',
                                      required: !0,
                                      validateStatus: 'error',
                                      help: '\u5BC6\u7801\u957F\u5EA6\u81F3\u5C11\u4E3A6\u4F4D',
                                    },
                                    n.createElement('input', {
                                      type: 'password',
                                    }),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    null,
                                    n.createElement(
                                      t,
                                      { type: 'primary', htmlType: 'submit' },
                                      '\u63D0\u4EA4',
                                    ),
                                  ),
                                );
                              }),
                              r.abrupt('return', { default: i })
                            );
                          case 14:
                          case 'end':
                            return r.stop();
                        }
                    }, m);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'form-demo-2',
              refAtomIds: ['Form'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item 
        label="\u7528\u6237\u540D" 
        name="username" 
        required 
        help="\u8BF7\u8F93\u5165\u60A8\u7684\u7528\u6237\u540D"
      >
        <input />
      </Form.Item>
      <Form.Item 
        label="\u90AE\u7BB1" 
        name="email" 
        required 
        validateStatus="success"
      >
        <input type="email" />
      </Form.Item>
      <Form.Item 
        label="\u5BC6\u7801" 
        name="password" 
        required 
        validateStatus="error"
        help="\u5BC6\u7801\u957F\u5EA6\u81F3\u5C11\u4E3A6\u4F4D"
      >
        <input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">\u63D0\u4EA4</Button>
      </Form.Item>
    </Form>
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
              '../Button.tsx': h,
              react: c || (c = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var m = I()(
                  o()().mark(function n() {
                    var l,
                      a = arguments;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (l = t.sent).default.apply(l, a),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, n);
                  }),
                );
                function s() {
                  return m.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
          'form-demo-3': {
            component: u.memo(
              u.lazy(
                I()(
                  o()().mark(function m() {
                    var s, n, l, a, d, t, i;
                    return o()().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (s = r.sent),
                              (n = s.default),
                              (r.next = 6),
                              e.e(8083).then(e.bind(e, 58083))
                            );
                          case 6:
                            return (
                              (l = r.sent),
                              (a = l.default),
                              (r.next = 10),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 10:
                            return (
                              (d = r.sent),
                              (t = d.default),
                              (i = function () {
                                var p = function (v) {
                                  console.log('Form submitted:', v);
                                };
                                return n.createElement(
                                  a,
                                  { onFinish: p },
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u7528\u6237\u540D',
                                      name: 'username',
                                      required: !0,
                                    },
                                    n.createElement(
                                      a.Control,
                                      { name: 'username' },
                                      n.createElement('input', null),
                                    ),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u5BC6\u7801',
                                      name: 'password',
                                      required: !0,
                                    },
                                    n.createElement(
                                      a.Control,
                                      { name: 'password' },
                                      n.createElement('input', {
                                        type: 'password',
                                      }),
                                    ),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    null,
                                    n.createElement(
                                      t,
                                      { type: 'primary', htmlType: 'submit' },
                                      '\u63D0\u4EA4',
                                    ),
                                  ),
                                );
                              }),
                              r.abrupt('return', { default: i })
                            );
                          case 14:
                          case 'end':
                            return r.stop();
                        }
                    }, m);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'form-demo-3',
              refAtomIds: ['Form'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item label="\u7528\u6237\u540D" name="username" required>
        <Form.Control name="username">
          <input />
        </Form.Control>
      </Form.Item>
      <Form.Item label="\u5BC6\u7801" name="password" required>
        <Form.Control name="password">
          <input type="password" />
        </Form.Control>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">\u63D0\u4EA4</Button>
      </Form.Item>
    </Form>
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
              '../Button.tsx': h,
              react: c || (c = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var m = I()(
                  o()().mark(function n() {
                    var l,
                      a = arguments;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (l = t.sent).default.apply(l, a),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, n);
                  }),
                );
                function s() {
                  return m.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
          'form-demo-4': {
            component: u.memo(
              u.lazy(
                I()(
                  o()().mark(function m() {
                    var s, n, l, a, d, t, i, x, r;
                    return o()().wrap(function (p) {
                      for (;;)
                        switch ((p.prev = p.next)) {
                          case 0:
                            return (
                              (p.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (s = p.sent),
                              (n = s.default),
                              (p.next = 6),
                              e.e(8083).then(e.bind(e, 58083))
                            );
                          case 6:
                            return (
                              (l = p.sent),
                              (a = l.default),
                              (d = l.useForm),
                              (p.next = 11),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 11:
                            return (
                              (t = p.sent),
                              (i = t.default),
                              (x = function (v) {
                                var F = v.name,
                                  C = v.label,
                                  P = d(),
                                  O = n.useState(''),
                                  T = b()(O, 2),
                                  L = T[0],
                                  A = T[1],
                                  U = function (N) {
                                    var W = N.target.value;
                                    A(W), P.setFieldValue(F, W);
                                  },
                                  D = P.getFieldError(F);
                                return n.createElement(
                                  'div',
                                  null,
                                  n.createElement('label', null, C),
                                  n.createElement('input', {
                                    value: L,
                                    onChange: U,
                                  }),
                                  D &&
                                    n.createElement(
                                      'div',
                                      { style: { color: 'red' } },
                                      D,
                                    ),
                                );
                              }),
                              (r = function () {
                                var v = function (C) {
                                  console.log('Form submitted:', C);
                                };
                                return n.createElement(
                                  a,
                                  { onFinish: v },
                                  n.createElement(
                                    a.Item,
                                    { name: 'username', required: !0 },
                                    n.createElement(x, {
                                      name: 'username',
                                      label: '\u7528\u6237\u540D',
                                    }),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    null,
                                    n.createElement(
                                      i,
                                      { type: 'primary', htmlType: 'submit' },
                                      '\u63D0\u4EA4',
                                    ),
                                  ),
                                );
                              }),
                              p.abrupt('return', { default: r })
                            );
                          case 16:
                          case 'end':
                            return p.stop();
                        }
                    }, m);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'form-demo-4',
              refAtomIds: ['Form'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React from 'react';
import Form, { useForm } from '../Form';
import Button from '../Button';

const CustomInput: React.FC<{ name: string; label: string }> = ({ name, label }) => {
  const form = useForm();
  const [value, setValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    form.setFieldValue(name, newValue);
  };

  const error = form.getFieldError(name);

  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={handleChange} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item name="username" required>
        <CustomInput name="username" label="\u7528\u6237\u540D" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">\u63D0\u4EA4</Button>
      </Form.Item>
    </Form>
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
              '../Button.tsx': h,
              react: c || (c = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var m = I()(
                  o()().mark(function n() {
                    var l,
                      a = arguments;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (l = t.sent).default.apply(l, a),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, n);
                  }),
                );
                function s() {
                  return m.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
          'form-demo-5': {
            component: u.memo(
              u.lazy(
                I()(
                  o()().mark(function m() {
                    var s, n, l, a, d, t, i;
                    return o()().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (s = r.sent),
                              (n = s.default),
                              (r.next = 6),
                              e.e(8083).then(e.bind(e, 58083))
                            );
                          case 6:
                            return (
                              (l = r.sent),
                              (a = l.default),
                              (r.next = 10),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 10:
                            return (
                              (d = r.sent),
                              (t = d.default),
                              (i = function () {
                                var p = function (F) {
                                    console.log(
                                      'Form submitted successfully:',
                                      F,
                                    );
                                  },
                                  f = function (F) {
                                    console.log('Form validation failed:', F);
                                  };
                                return n.createElement(
                                  a,
                                  { onFinish: p, onFinishFailed: f },
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u7528\u6237\u540D',
                                      name: 'username',
                                      required: !0,
                                    },
                                    n.createElement('input', null),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u5BC6\u7801',
                                      name: 'password',
                                      required: !0,
                                    },
                                    n.createElement('input', {
                                      type: 'password',
                                    }),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    null,
                                    n.createElement(
                                      t,
                                      { type: 'primary', htmlType: 'submit' },
                                      '\u63D0\u4EA4',
                                    ),
                                  ),
                                );
                              }),
                              r.abrupt('return', { default: i })
                            );
                          case 14:
                          case 'end':
                            return r.stop();
                        }
                    }, m);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'form-demo-5',
              refAtomIds: ['Form'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted successfully:', values);
    // \u5904\u7406\u8868\u5355\u63D0\u4EA4\u903B\u8F91
  };

  const handleFinishFailed = (errors: Record<string, string[]>) => {
    console.log('Form validation failed:', errors);
    // \u5904\u7406\u8868\u5355\u9A8C\u8BC1\u5931\u8D25\u903B\u8F91
  };

  return (
    <Form onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
      <Form.Item label="\u7528\u6237\u540D" name="username" required>
        <input />
      </Form.Item>
      <Form.Item label="\u5BC6\u7801" name="password" required>
        <input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">\u63D0\u4EA4</Button>
      </Form.Item>
    </Form>
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
              '../Button.tsx': h,
              react: c || (c = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var m = I()(
                  o()().mark(function n() {
                    var l,
                      a = arguments;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (l = t.sent).default.apply(l, a),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, n);
                  }),
                );
                function s() {
                  return m.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
          'form-demo-6': {
            component: u.memo(
              u.lazy(
                I()(
                  o()().mark(function m() {
                    var s, n, l, a, d, t, i, x;
                    return o()().wrap(function (y) {
                      for (;;)
                        switch ((y.prev = y.next)) {
                          case 0:
                            return (
                              (y.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (s = y.sent),
                              (n = s.default),
                              (y.next = 6),
                              e.e(8083).then(e.bind(e, 58083))
                            );
                          case 6:
                            return (
                              (l = y.sent),
                              (a = l.default),
                              (d = l.useForm),
                              (y.next = 11),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 11:
                            return (
                              (t = y.sent),
                              (i = t.default),
                              (x = function () {
                                var f = function (C) {
                                    console.log('Form submitted:', C);
                                  },
                                  v = function () {
                                    var C = d();
                                    return n.createElement(
                                      i,
                                      {
                                        onClick: function () {
                                          return C.resetFields();
                                        },
                                      },
                                      '\u91CD\u7F6E',
                                    );
                                  };
                                return n.createElement(
                                  a,
                                  { onFinish: f },
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u7528\u6237\u540D',
                                      name: 'username',
                                      required: !0,
                                    },
                                    n.createElement('input', null),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u5BC6\u7801',
                                      name: 'password',
                                      required: !0,
                                    },
                                    n.createElement('input', {
                                      type: 'password',
                                    }),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    null,
                                    n.createElement(
                                      i,
                                      { type: 'primary', htmlType: 'submit' },
                                      '\u63D0\u4EA4',
                                    ),
                                    n.createElement(v, null),
                                  ),
                                );
                              }),
                              y.abrupt('return', { default: x })
                            );
                          case 15:
                          case 'end':
                            return y.stop();
                        }
                    }, m);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'form-demo-6',
              refAtomIds: ['Form'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React, { useRef } from 'react';
import Form, { useForm } from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  const ResetButton: React.FC = () => {
    const form = useForm();
    return (
      <Button onClick={() => form.resetFields()}>\u91CD\u7F6E</Button>
    );
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item label="\u7528\u6237\u540D" name="username" required>
        <input />
      </Form.Item>
      <Form.Item label="\u5BC6\u7801" name="password" required>
        <input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">\u63D0\u4EA4</Button>
        <ResetButton />
      </Form.Item>
    </Form>
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
              '../Button.tsx': h,
              react: c || (c = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var m = I()(
                  o()().mark(function n() {
                    var l,
                      a = arguments;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (l = t.sent).default.apply(l, a),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, n);
                  }),
                );
                function s() {
                  return m.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
          'form-demo-7': {
            component: u.memo(
              u.lazy(
                I()(
                  o()().mark(function m() {
                    var s, n, l, a, d, t, i;
                    return o()().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (s = r.sent),
                              (n = s.default),
                              (r.next = 6),
                              e.e(8083).then(e.bind(e, 58083))
                            );
                          case 6:
                            return (
                              (l = r.sent),
                              (a = l.default),
                              (r.next = 10),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 10:
                            return (
                              (d = r.sent),
                              (t = d.default),
                              (i = function () {
                                var p = function (F) {
                                    console.log('Form submitted:', F);
                                  },
                                  f = {
                                    required:
                                      '${label} \u4E0D\u80FD\u4E3A\u7A7A',
                                    whitespace:
                                      '${label} \u4E0D\u80FD\u53EA\u5305\u542B\u7A7A\u683C',
                                  };
                                return n.createElement(
                                  a,
                                  { onFinish: p, validateMessages: f },
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u7528\u6237\u540D',
                                      name: 'username',
                                      required: !0,
                                    },
                                    n.createElement('input', null),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u5BC6\u7801',
                                      name: 'password',
                                      required: !0,
                                    },
                                    n.createElement('input', {
                                      type: 'password',
                                    }),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    null,
                                    n.createElement(
                                      t,
                                      { type: 'primary', htmlType: 'submit' },
                                      '\u63D0\u4EA4',
                                    ),
                                  ),
                                );
                              }),
                              r.abrupt('return', { default: i })
                            );
                          case 14:
                          case 'end':
                            return r.stop();
                        }
                    }, m);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'form-demo-7',
              refAtomIds: ['Form'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  const validateMessages = {
    required: '\${label} \u4E0D\u80FD\u4E3A\u7A7A',
    whitespace: '\${label} \u4E0D\u80FD\u53EA\u5305\u542B\u7A7A\u683C',
  };

  return (
    <Form 
      onFinish={handleFinish}
      validateMessages={validateMessages}
    >
      <Form.Item label="\u7528\u6237\u540D" name="username" required>
        <input />
      </Form.Item>
      <Form.Item label="\u5BC6\u7801" name="password" required>
        <input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">\u63D0\u4EA4</Button>
      </Form.Item>
    </Form>
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
              '../Button.tsx': h,
              react: c || (c = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var m = I()(
                  o()().mark(function n() {
                    var l,
                      a = arguments;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (l = t.sent).default.apply(l, a),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, n);
                  }),
                );
                function s() {
                  return m.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
          'form-demo-8': {
            component: u.memo(
              u.lazy(
                I()(
                  o()().mark(function m() {
                    var s, n, l, a, d, t, i;
                    return o()().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (s = r.sent),
                              (n = s.default),
                              (r.next = 6),
                              e.e(8083).then(e.bind(e, 58083))
                            );
                          case 6:
                            return (
                              (l = r.sent),
                              (a = l.default),
                              (r.next = 10),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 10:
                            return (
                              (d = r.sent),
                              (t = d.default),
                              (i = function () {
                                var p = function (v) {
                                  console.log('Form submitted:', v);
                                };
                                return n.createElement(
                                  a,
                                  { onFinish: p, disabled: !0 },
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u7528\u6237\u540D',
                                      name: 'username',
                                      required: !0,
                                    },
                                    n.createElement('input', null),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u5BC6\u7801',
                                      name: 'password',
                                      required: !0,
                                    },
                                    n.createElement('input', {
                                      type: 'password',
                                    }),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    null,
                                    n.createElement(
                                      t,
                                      { type: 'primary', htmlType: 'submit' },
                                      '\u63D0\u4EA4',
                                    ),
                                  ),
                                );
                              }),
                              r.abrupt('return', { default: i })
                            );
                          case 14:
                          case 'end':
                            return r.stop();
                        }
                    }, m);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'form-demo-8',
              refAtomIds: ['Form'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  return (
    <Form onFinish={handleFinish} disabled>
      <Form.Item label="\u7528\u6237\u540D" name="username" required>
        <input />
      </Form.Item>
      <Form.Item label="\u5BC6\u7801" name="password" required>
        <input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">\u63D0\u4EA4</Button>
      </Form.Item>
    </Form>
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
              '../Button.tsx': h,
              react: c || (c = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var m = I()(
                  o()().mark(function n() {
                    var l,
                      a = arguments;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (l = t.sent).default.apply(l, a),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, n);
                  }),
                );
                function s() {
                  return m.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
          'form-demo-9': {
            component: u.memo(
              u.lazy(
                I()(
                  o()().mark(function m() {
                    var s, n, l, a, d, t, i;
                    return o()().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.next = 2),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 2:
                            return (
                              (s = r.sent),
                              (n = s.default),
                              (r.next = 6),
                              e.e(8083).then(e.bind(e, 58083))
                            );
                          case 6:
                            return (
                              (l = r.sent),
                              (a = l.default),
                              (r.next = 10),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 10:
                            return (
                              (d = r.sent),
                              (t = d.default),
                              (i = function () {
                                var p = function (v) {
                                  console.log('Form submitted:', v);
                                };
                                return n.createElement(
                                  a,
                                  {
                                    onFinish: p,
                                    style: {
                                      backgroundColor: '#f5f5f5',
                                      padding: 20,
                                      borderRadius: 8,
                                      maxWidth: 500,
                                    },
                                  },
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u7528\u6237\u540D',
                                      name: 'username',
                                      required: !0,
                                      style: { marginBottom: 16 },
                                    },
                                    n.createElement('input', {
                                      style: {
                                        width: '100%',
                                        padding: 8,
                                        borderRadius: 4,
                                        border: '1px solid #d9d9d9',
                                      },
                                    }),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    {
                                      label: '\u5BC6\u7801',
                                      name: 'password',
                                      required: !0,
                                      style: { marginBottom: 16 },
                                    },
                                    n.createElement('input', {
                                      type: 'password',
                                      style: {
                                        width: '100%',
                                        padding: 8,
                                        borderRadius: 4,
                                        border: '1px solid #d9d9d9',
                                      },
                                    }),
                                  ),
                                  n.createElement(
                                    a.Item,
                                    null,
                                    n.createElement(
                                      t,
                                      {
                                        type: 'primary',
                                        htmlType: 'submit',
                                        style: { width: '100%', padding: 10 },
                                      },
                                      '\u63D0\u4EA4',
                                    ),
                                  ),
                                );
                              }),
                              r.abrupt('return', { default: i })
                            );
                          case 14:
                          case 'end':
                            return r.stop();
                        }
                    }, m);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'form-demo-9',
              refAtomIds: ['Form'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import React from 'react';
import Form from '../Form';
import Button from '../Button';

const App: React.FC = () => {
  const handleFinish = (values: Record<string, any>) => {
    console.log('Form submitted:', values);
  };

  return (
    <Form 
      onFinish={handleFinish}
      style={{ 
        backgroundColor: '#f5f5f5', 
        padding: 20, 
        borderRadius: 8,
        maxWidth: 500
      }}
    >
      <Form.Item 
        label="\u7528\u6237\u540D" 
        name="username" 
        required
        style={{ marginBottom: 16 }}
      >
        <input style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #d9d9d9' }} />
      </Form.Item>
      <Form.Item 
        label="\u5BC6\u7801" 
        name="password" 
        required
        style={{ marginBottom: 16 }}
      >
        <input 
          type="password" 
          style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #d9d9d9' }}
        />
      </Form.Item>
      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit"
          style={{ width: '100%', padding: 10 }}
        >
          \u63D0\u4EA4
        </Button>
      </Form.Item>
    </Form>
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
              '../Button.tsx': h,
              react: c || (c = e.t(u, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': h,
            },
            renderOpts: {
              compile: (function () {
                var m = I()(
                  o()().mark(function n() {
                    var l,
                      a = arguments;
                    return o()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (l = t.sent).default.apply(l, a),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, n);
                  }),
                );
                function s() {
                  return m.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
        };
    },
    97656: function (E, g, e) {
      'use strict';
      e.r(g),
        e.d(g, {
          default: function () {
            return M;
          },
        });
      var c = e(26068),
        $ = e.n(c),
        b = e(67825),
        R = e.n(b),
        o = e(75271),
        B = {
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
        I = e(52676),
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
        h = function (s) {
          var n = s.type,
            l = n === void 0 ? 'default' : n,
            a = s.size,
            d = a === void 0 ? 'default' : a,
            t = s.disabled,
            i = t === void 0 ? !1 : t,
            x = s.children,
            r = s.onClick,
            y = s.className,
            p = y === void 0 ? '' : y,
            f = s.style,
            v = f === void 0 ? {} : f,
            F = s.htmlType,
            C = F === void 0 ? 'button' : F,
            P = R()(s, u),
            O = function () {
              var A = [B.button];
              return (
                A.push(B[l]),
                A.push(B[d]),
                i && A.push(B.disabled),
                p && A.push(p),
                A.join(' ')
              );
            },
            T = function () {
              !i && r && r();
            };
          return (0, I.jsx)(
            'button',
            $()(
              $()(
                {
                  type:
                    C === 'submit'
                      ? 'submit'
                      : C === 'reset'
                      ? 'reset'
                      : 'button',
                  className: O(),
                  style: v,
                  disabled: i,
                  onClick: T,
                },
                P,
              ),
              {},
              { children: x },
            ),
          );
        },
        M = h;
    },
    37971: function (E, g, e) {
      'use strict';
      e.r(g),
        e.d(g, {
          texts: function () {
            return c;
          },
        });
      const c = [
        {
          value:
            '\u7528\u4E8E\u521B\u5EFA\u8868\u5355\u5E76\u5904\u7406\u8868\u5355\u6570\u636E\u548C\u9A8C\u8BC1\u3002',
          paraId: 0,
          tocIndex: 0,
        },
        { value: '\u5C5E\u6027', paraId: 1, tocIndex: 12 },
        { value: '\u7C7B\u578B', paraId: 1, tocIndex: 12 },
        { value: '\u9ED8\u8BA4\u503C', paraId: 1, tocIndex: 12 },
        { value: '\u8BF4\u660E', paraId: 1, tocIndex: 12 },
        { value: 'layout', paraId: 1, tocIndex: 12 },
        {
          value: "'horizontal' | 'vertical' | 'inline'",
          paraId: 1,
          tocIndex: 12,
        },
        { value: "'vertical'", paraId: 1, tocIndex: 12 },
        { value: '\u8868\u5355\u5E03\u5C40', paraId: 1, tocIndex: 12 },
        { value: 'disabled', paraId: 1, tocIndex: 12 },
        { value: 'boolean', paraId: 1, tocIndex: 12 },
        { value: 'false', paraId: 1, tocIndex: 12 },
        {
          value: '\u662F\u5426\u7981\u7528\u8868\u5355',
          paraId: 1,
          tocIndex: 12,
        },
        { value: 'onFinish', paraId: 1, tocIndex: 12 },
        {
          value: '(values: Record<string, any>) => void',
          paraId: 1,
          tocIndex: 12,
        },
        { value: '-', paraId: 1, tocIndex: 12 },
        {
          value: '\u8868\u5355\u63D0\u4EA4\u6210\u529F\u56DE\u8C03',
          paraId: 1,
          tocIndex: 12,
        },
        { value: 'onFinishFailed', paraId: 1, tocIndex: 12 },
        {
          value: '(errors: Record<string, string[]>) => void',
          paraId: 1,
          tocIndex: 12,
        },
        { value: '-', paraId: 1, tocIndex: 12 },
        {
          value: '\u8868\u5355\u63D0\u4EA4\u5931\u8D25\u56DE\u8C03',
          paraId: 1,
          tocIndex: 12,
        },
        { value: 'validateMessages', paraId: 1, tocIndex: 12 },
        { value: 'Record<string, string>', paraId: 1, tocIndex: 12 },
        {
          value:
            "{ required: '${label} is required', whitespace: '${label} cannot be empty' }",
          paraId: 1,
          tocIndex: 12,
        },
        { value: '\u9A8C\u8BC1\u6D88\u606F', paraId: 1, tocIndex: 12 },
        { value: 'className', paraId: 1, tocIndex: 12 },
        { value: 'string', paraId: 1, tocIndex: 12 },
        { value: "''", paraId: 1, tocIndex: 12 },
        { value: '\u81EA\u5B9A\u4E49\u7C7B\u540D', paraId: 1, tocIndex: 12 },
        { value: 'style', paraId: 1, tocIndex: 12 },
        { value: 'React.CSSProperties', paraId: 1, tocIndex: 12 },
        { value: '{}', paraId: 1, tocIndex: 12 },
        { value: '\u81EA\u5B9A\u4E49\u6837\u5F0F', paraId: 1, tocIndex: 12 },
        { value: 'children', paraId: 1, tocIndex: 12 },
        { value: 'ReactNode', paraId: 1, tocIndex: 12 },
        { value: '-', paraId: 1, tocIndex: 12 },
        { value: '\u5B50\u5143\u7D20', paraId: 1, tocIndex: 12 },
        { value: '\u5C5E\u6027', paraId: 2, tocIndex: 13 },
        { value: '\u7C7B\u578B', paraId: 2, tocIndex: 13 },
        { value: '\u9ED8\u8BA4\u503C', paraId: 2, tocIndex: 13 },
        { value: '\u8BF4\u660E', paraId: 2, tocIndex: 13 },
        { value: 'label', paraId: 2, tocIndex: 13 },
        { value: 'string', paraId: 2, tocIndex: 13 },
        { value: '-', paraId: 2, tocIndex: 13 },
        { value: '\u8868\u5355\u9879\u6807\u7B7E', paraId: 2, tocIndex: 13 },
        { value: 'name', paraId: 2, tocIndex: 13 },
        { value: 'string', paraId: 2, tocIndex: 13 },
        { value: '-', paraId: 2, tocIndex: 13 },
        { value: '\u8868\u5355\u9879\u540D\u79F0', paraId: 2, tocIndex: 13 },
        { value: 'required', paraId: 2, tocIndex: 13 },
        { value: 'boolean', paraId: 2, tocIndex: 13 },
        { value: 'false', paraId: 2, tocIndex: 13 },
        { value: '\u662F\u5426\u5FC5\u586B', paraId: 2, tocIndex: 13 },
        { value: 'help', paraId: 2, tocIndex: 13 },
        { value: 'string', paraId: 2, tocIndex: 13 },
        { value: '-', paraId: 2, tocIndex: 13 },
        {
          value: '\u8868\u5355\u9879\u5E2E\u52A9\u4FE1\u606F',
          paraId: 2,
          tocIndex: 13,
        },
        { value: 'validateStatus', paraId: 2, tocIndex: 13 },
        {
          value: "'success' | 'warning' | 'error' | 'validating'",
          paraId: 2,
          tocIndex: 13,
        },
        { value: '-', paraId: 2, tocIndex: 13 },
        {
          value: '\u8868\u5355\u9879\u9A8C\u8BC1\u72B6\u6001',
          paraId: 2,
          tocIndex: 13,
        },
        { value: 'className', paraId: 2, tocIndex: 13 },
        { value: 'string', paraId: 2, tocIndex: 13 },
        { value: "''", paraId: 2, tocIndex: 13 },
        { value: '\u81EA\u5B9A\u4E49\u7C7B\u540D', paraId: 2, tocIndex: 13 },
        { value: 'style', paraId: 2, tocIndex: 13 },
        { value: 'React.CSSProperties', paraId: 2, tocIndex: 13 },
        { value: '{}', paraId: 2, tocIndex: 13 },
        { value: '\u81EA\u5B9A\u4E49\u6837\u5F0F', paraId: 2, tocIndex: 13 },
        { value: 'children', paraId: 2, tocIndex: 13 },
        { value: 'ReactNode', paraId: 2, tocIndex: 13 },
        { value: '-', paraId: 2, tocIndex: 13 },
        { value: '\u5B50\u5143\u7D20', paraId: 2, tocIndex: 13 },
        { value: '\u5C5E\u6027', paraId: 3, tocIndex: 14 },
        { value: '\u7C7B\u578B', paraId: 3, tocIndex: 14 },
        { value: '\u9ED8\u8BA4\u503C', paraId: 3, tocIndex: 14 },
        { value: '\u8BF4\u660E', paraId: 3, tocIndex: 14 },
        { value: 'name', paraId: 3, tocIndex: 14 },
        { value: 'string', paraId: 3, tocIndex: 14 },
        { value: '-', paraId: 3, tocIndex: 14 },
        {
          value: '\u8868\u5355\u63A7\u4EF6\u540D\u79F0',
          paraId: 3,
          tocIndex: 14,
        },
        { value: 'children', paraId: 3, tocIndex: 14 },
        { value: 'React.ReactElement', paraId: 3, tocIndex: 14 },
        { value: '-', paraId: 3, tocIndex: 14 },
        {
          value: '\u8981\u5305\u88C5\u7684\u8F93\u5165\u7EC4\u4EF6',
          paraId: 3,
          tocIndex: 14,
        },
        { value: 'useForm', paraId: 4, tocIndex: 15 },
        {
          value: ' Hook \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u65B9\u6CD5\uFF1A',
          paraId: 4,
          tocIndex: 15,
        },
        { value: '\u65B9\u6CD5', paraId: 5, tocIndex: 15 },
        { value: '\u7C7B\u578B', paraId: 5, tocIndex: 15 },
        { value: '\u8BF4\u660E', paraId: 5, tocIndex: 15 },
        { value: 'layout', paraId: 5, tocIndex: 15 },
        {
          value: "'horizontal' | 'vertical' | 'inline'",
          paraId: 5,
          tocIndex: 15,
        },
        { value: '\u8868\u5355\u5E03\u5C40', paraId: 5, tocIndex: 15 },
        { value: 'disabled', paraId: 5, tocIndex: 15 },
        { value: 'boolean', paraId: 5, tocIndex: 15 },
        {
          value: '\u662F\u5426\u7981\u7528\u8868\u5355',
          paraId: 5,
          tocIndex: 15,
        },
        { value: 'validateMessages', paraId: 5, tocIndex: 15 },
        { value: 'Record<string, string>', paraId: 5, tocIndex: 15 },
        { value: '\u9A8C\u8BC1\u6D88\u606F', paraId: 5, tocIndex: 15 },
        { value: 'registerField', paraId: 5, tocIndex: 15 },
        {
          value: '(name: string, field: FormField) => void',
          paraId: 5,
          tocIndex: 15,
        },
        { value: '\u6CE8\u518C\u5B57\u6BB5', paraId: 5, tocIndex: 15 },
        { value: 'unregisterField', paraId: 5, tocIndex: 15 },
        { value: '(name: string) => void', paraId: 5, tocIndex: 15 },
        {
          value: '\u53D6\u6D88\u6CE8\u518C\u5B57\u6BB5',
          paraId: 5,
          tocIndex: 15,
        },
        { value: 'getFieldValue', paraId: 5, tocIndex: 15 },
        { value: '(name: string) => any', paraId: 5, tocIndex: 15 },
        { value: '\u83B7\u53D6\u5B57\u6BB5\u503C', paraId: 5, tocIndex: 15 },
        { value: 'setFieldValue', paraId: 5, tocIndex: 15 },
        {
          value: '(name: string, value: any) => void',
          paraId: 5,
          tocIndex: 15,
        },
        { value: '\u8BBE\u7F6E\u5B57\u6BB5\u503C', paraId: 5, tocIndex: 15 },
        { value: 'getFieldError', paraId: 5, tocIndex: 15 },
        { value: '(name: string) => string', paraId: 5, tocIndex: 15 },
        {
          value: '\u83B7\u53D6\u5B57\u6BB5\u9519\u8BEF',
          paraId: 5,
          tocIndex: 15,
        },
        { value: 'setFieldError', paraId: 5, tocIndex: 15 },
        {
          value: '(name: string, error: string) => void',
          paraId: 5,
          tocIndex: 15,
        },
        {
          value: '\u8BBE\u7F6E\u5B57\u6BB5\u9519\u8BEF',
          paraId: 5,
          tocIndex: 15,
        },
        { value: 'validateFields', paraId: 5, tocIndex: 15 },
        {
          value: '() => Promise<Record<string, any>>',
          paraId: 5,
          tocIndex: 15,
        },
        {
          value: '\u9A8C\u8BC1\u6240\u6709\u5B57\u6BB5',
          paraId: 5,
          tocIndex: 15,
        },
        { value: 'resetFields', paraId: 5, tocIndex: 15 },
        { value: '() => void', paraId: 5, tocIndex: 15 },
        {
          value: '\u91CD\u7F6E\u6240\u6709\u5B57\u6BB5',
          paraId: 5,
          tocIndex: 15,
        },
      ];
    },
    27045: function (E, g) {
      'use strict';
      g.Z = `import React from 'react';
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
    67825: function (E, g, e) {
      var c = e(64382);
      function $(b, R) {
        if (b == null) return {};
        var o = c(b, R),
          B,
          I;
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(b);
          for (I = 0; I < u.length; I++)
            (B = u[I]),
              !(R.indexOf(B) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(b, B) &&
                (o[B] = b[B]);
        }
        return o;
      }
      (E.exports = $),
        (E.exports.__esModule = !0),
        (E.exports.default = E.exports);
    },
    64382: function (E) {
      function g(e, c) {
        if (e == null) return {};
        var $ = {},
          b = Object.keys(e),
          R,
          o;
        for (o = 0; o < b.length; o++)
          (R = b[o]), !(c.indexOf(R) >= 0) && ($[R] = e[R]);
        return $;
      }
      (E.exports = g),
        (E.exports.__esModule = !0),
        (E.exports.default = E.exports);
    },
  },
]);
