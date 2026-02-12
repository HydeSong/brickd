(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [4212, 7656],
  {
    42989: function (m, v, e) {
      'use strict';
      var y;
      e.r(v),
        e.d(v, {
          demos: function () {
            return $;
          },
        });
      var g = e(48305),
        I = e.n(g),
        h = e(90228),
        s = e.n(h),
        f = e(87999),
        i = e.n(f),
        l = e(75271),
        B = e(97656),
        $ = {
          'autocomplete-demo-0': {
            component: l.memo(
              l.lazy(
                i()(
                  s()().mark(function d() {
                    var a, r, o;
                    return s()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (o = function () {
                                var c = [
                                  'Apple',
                                  'Banana',
                                  'Cherry',
                                  'Date',
                                  'Elderberry',
                                  'Fig',
                                  'Grape',
                                ];
                                return l.createElement(
                                  'div',
                                  { style: { width: '300px' } },
                                  l.createElement(r, {
                                    options: c,
                                    placeholder:
                                      '\u8BF7\u8F93\u5165\u6C34\u679C\u540D\u79F0',
                                    onChange: function (p) {
                                      return console.log(
                                        '\u8F93\u5165\u503C:',
                                        p,
                                      );
                                    },
                                    onSelect: function (p) {
                                      return console.log(
                                        '\u9009\u4E2D\u9009\u9879:',
                                        p,
                                      );
                                    },
                                  }),
                                );
                              }),
                              (n.next = 3),
                              e.e(2537).then(e.bind(e, 82537))
                            );
                          case 3:
                            return (
                              (a = n.sent),
                              (r = a.default),
                              n.abrupt('return', { default: o })
                            );
                          case 6:
                          case 'end':
                            return n.stop();
                        }
                    }, d);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'autocomplete-demo-0',
              refAtomIds: ['AutoComplete'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import AutoComplete from './index';

function AutoCompleteBasicDemo() {
  const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete
        options={options}
        placeholder="\u8BF7\u8F93\u5165\u6C34\u679C\u540D\u79F0"
        onChange={(value) => console.log('\u8F93\u5165\u503C:', value)}
        onSelect={(option) => console.log('\u9009\u4E2D\u9009\u9879:', option)}
      />
    </div>
  );
}

export default AutoCompleteBasicDemo;`,
                },
              },
              entry: 'index.tsx',
            },
            context: {},
            renderOpts: {
              compile: (function () {
                var d = i()(
                  s()().mark(function r() {
                    var o,
                      u = arguments;
                    return s()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (o = t.sent).default.apply(o, u),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, r);
                  }),
                );
                function a() {
                  return d.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
          'autocomplete-demo-1': {
            component: l.memo(
              l.lazy(
                i()(
                  s()().mark(function d() {
                    var a, r, o;
                    return s()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (o = function () {
                                var c = [
                                  { value: 'apple', label: '\u82F9\u679C' },
                                  { value: 'banana', label: '\u9999\u8549' },
                                  { value: 'cherry', label: '\u6A31\u6843' },
                                  { value: 'date', label: '\u67A3' },
                                  {
                                    value: 'elderberry',
                                    label: '\u63A5\u9AA8\u6728\u8393',
                                  },
                                ];
                                return l.createElement(
                                  'div',
                                  { style: { width: '300px' } },
                                  l.createElement(r, {
                                    options: c,
                                    placeholder:
                                      '\u8BF7\u8F93\u5165\u6C34\u679C\u540D\u79F0',
                                    onChange: function (p) {
                                      return console.log(
                                        '\u8F93\u5165\u503C:',
                                        p,
                                      );
                                    },
                                    onSelect: function (p) {
                                      return console.log(
                                        '\u9009\u4E2D\u9009\u9879:',
                                        p,
                                      );
                                    },
                                  }),
                                );
                              }),
                              (n.next = 3),
                              e.e(2537).then(e.bind(e, 82537))
                            );
                          case 3:
                            return (
                              (a = n.sent),
                              (r = a.default),
                              n.abrupt('return', { default: o })
                            );
                          case 6:
                          case 'end':
                            return n.stop();
                        }
                    }, d);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'autocomplete-demo-1',
              refAtomIds: ['AutoComplete'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import AutoComplete from './index';

function AutoCompleteObjectDemo() {
  const options = [
    { value: 'apple', label: '\u82F9\u679C' },
    { value: 'banana', label: '\u9999\u8549' },
    { value: 'cherry', label: '\u6A31\u6843' },
    { value: 'date', label: '\u67A3' },
    { value: 'elderberry', label: '\u63A5\u9AA8\u6728\u8393' },
  ];

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete
        options={options}
        placeholder="\u8BF7\u8F93\u5165\u6C34\u679C\u540D\u79F0"
        onChange={(value) => console.log('\u8F93\u5165\u503C:', value)}
        onSelect={(option) => console.log('\u9009\u4E2D\u9009\u9879:', option)}
      />
    </div>
  );
}

export default AutoCompleteObjectDemo;`,
                },
              },
              entry: 'index.tsx',
            },
            context: {},
            renderOpts: {
              compile: (function () {
                var d = i()(
                  s()().mark(function r() {
                    var o,
                      u = arguments;
                    return s()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (o = t.sent).default.apply(o, u),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, r);
                  }),
                );
                function a() {
                  return d.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
          'autocomplete-demo-2': {
            component: l.memo(
              l.lazy(
                i()(
                  s()().mark(function d() {
                    var a, r, o;
                    return s()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (o = function () {
                                var c = ['Apple', 'Banana', 'Cherry', 'Date'];
                                return l.createElement(
                                  'div',
                                  {
                                    style: {
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '16px',
                                      width: '300px',
                                    },
                                  },
                                  l.createElement(r, {
                                    options: c,
                                    size: 'small',
                                    placeholder: '\u5C0F\u5C3A\u5BF8',
                                  }),
                                  l.createElement(r, {
                                    options: c,
                                    size: 'default',
                                    placeholder: '\u9ED8\u8BA4\u5C3A\u5BF8',
                                  }),
                                  l.createElement(r, {
                                    options: c,
                                    size: 'large',
                                    placeholder: '\u5927\u5C3A\u5BF8',
                                  }),
                                );
                              }),
                              (n.next = 3),
                              e.e(2537).then(e.bind(e, 82537))
                            );
                          case 3:
                            return (
                              (a = n.sent),
                              (r = a.default),
                              n.abrupt('return', { default: o })
                            );
                          case 6:
                          case 'end':
                            return n.stop();
                        }
                    }, d);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'autocomplete-demo-2',
              refAtomIds: ['AutoComplete'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import AutoComplete from './index';

function AutoCompleteSizeDemo() {
  const options = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <AutoComplete
        options={options}
        size="small"
        placeholder="\u5C0F\u5C3A\u5BF8"
      />
      <AutoComplete
        options={options}
        size="default"
        placeholder="\u9ED8\u8BA4\u5C3A\u5BF8"
      />
      <AutoComplete
        options={options}
        size="large"
        placeholder="\u5927\u5C3A\u5BF8"
      />
    </div>
  );
}

export default AutoCompleteSizeDemo;`,
                },
              },
              entry: 'index.tsx',
            },
            context: {},
            renderOpts: {
              compile: (function () {
                var d = i()(
                  s()().mark(function r() {
                    var o,
                      u = arguments;
                    return s()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (o = t.sent).default.apply(o, u),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, r);
                  }),
                );
                function a() {
                  return d.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
          'autocomplete-demo-3': {
            component: l.memo(
              l.lazy(
                i()(
                  s()().mark(function d() {
                    var a, r, o, u, n, t, c;
                    return s()().wrap(function (p) {
                      for (;;)
                        switch ((p.prev = p.next)) {
                          case 0:
                            return (
                              (c = function () {
                                var b = u(!1),
                                  A = I()(b, 2),
                                  O = A[0],
                                  E = A[1],
                                  L = u(['Apple', 'Banana', 'Cherry']),
                                  P = I()(L, 2),
                                  S = P[0],
                                  z = P[1],
                                  W = function (M) {
                                    M &&
                                      (E(!0),
                                      setTimeout(function () {
                                        var R = [
                                          'Apple',
                                          'Banana',
                                          'Cherry',
                                          'Date',
                                          'Elderberry',
                                        ].filter(function (j) {
                                          return j
                                            .toLowerCase()
                                            .includes(M.toLowerCase());
                                        });
                                        z(R), E(!1);
                                      }, 500));
                                  };
                                return l.createElement(
                                  'div',
                                  { style: { width: '300px' } },
                                  l.createElement(r, {
                                    options: S,
                                    loading: O,
                                    placeholder:
                                      '\u8BF7\u8F93\u5165\u6C34\u679C\u540D\u79F0',
                                    onSearch: W,
                                  }),
                                  l.createElement(
                                    'div',
                                    { style: { marginTop: '16px' } },
                                    l.createElement(
                                      t,
                                      {
                                        onClick: function () {
                                          return E(!O);
                                        },
                                      },
                                      O
                                        ? '\u53D6\u6D88\u52A0\u8F7D'
                                        : '\u6A21\u62DF\u52A0\u8F7D',
                                    ),
                                  ),
                                );
                              }),
                              (p.next = 3),
                              e.e(2537).then(e.bind(e, 82537))
                            );
                          case 3:
                            return (
                              (a = p.sent),
                              (r = a.default),
                              (p.next = 7),
                              Promise.resolve().then(e.t.bind(e, 75271, 19))
                            );
                          case 7:
                            return (
                              (o = p.sent),
                              (u = o.useState),
                              (p.next = 11),
                              Promise.resolve().then(e.bind(e, 97656))
                            );
                          case 11:
                            return (
                              (n = p.sent),
                              (t = n.default),
                              p.abrupt('return', { default: c })
                            );
                          case 14:
                          case 'end':
                            return p.stop();
                        }
                    }, d);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'autocomplete-demo-3',
              refAtomIds: ['AutoComplete'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import AutoComplete from './index';
import { useState } from 'react';
import Button from '../Button';

function AutoCompleteLoadingDemo() {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState(['Apple', 'Banana', 'Cherry']);

  const handleSearch = (value: string) => {
    if (value) {
      setLoading(true);
      // \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42
      setTimeout(() => {
        const filteredOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
          .filter(option => option.toLowerCase().includes(value.toLowerCase()));
        setOptions(filteredOptions);
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete
        options={options}
        loading={loading}
        placeholder="\u8BF7\u8F93\u5165\u6C34\u679C\u540D\u79F0"
        onSearch={handleSearch}
      />
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => setLoading(!loading)}>
          {loading ? '\u53D6\u6D88\u52A0\u8F7D' : '\u6A21\u62DF\u52A0\u8F7D'}
        </Button>
      </div>
    </div>
  );
}

export default AutoCompleteLoadingDemo;`,
                },
                react: { type: 'NPM', value: '18.3.1' },
                '../Button.tsx': { type: 'FILE', value: e(27045).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Button.tsx': B,
              react: y || (y = e.t(l, 2)),
              '/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx': B,
            },
            renderOpts: {
              compile: (function () {
                var d = i()(
                  s()().mark(function r() {
                    var o,
                      u = arguments;
                    return s()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (o = t.sent).default.apply(o, u),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, r);
                  }),
                );
                function a() {
                  return d.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
          'autocomplete-demo-4': {
            component: l.memo(
              l.lazy(
                i()(
                  s()().mark(function d() {
                    var a, r, o;
                    return s()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (o = function () {
                                var c = ['Apple', 'Banana', 'Cherry'];
                                return l.createElement(
                                  'div',
                                  { style: { width: '300px' } },
                                  l.createElement(r, {
                                    options: c,
                                    disabled: !0,
                                    placeholder: '\u7981\u7528\u72B6\u6001',
                                  }),
                                );
                              }),
                              (n.next = 3),
                              e.e(2537).then(e.bind(e, 82537))
                            );
                          case 3:
                            return (
                              (a = n.sent),
                              (r = a.default),
                              n.abrupt('return', { default: o })
                            );
                          case 6:
                          case 'end':
                            return n.stop();
                        }
                    }, d);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'autocomplete-demo-4',
              refAtomIds: ['AutoComplete'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import AutoComplete from './index';

function AutoCompleteDisabledDemo() {
  const options = ['Apple', 'Banana', 'Cherry'];

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete
        options={options}
        disabled
        placeholder="\u7981\u7528\u72B6\u6001"
      />
    </div>
  );
}

export default AutoCompleteDisabledDemo;`,
                },
              },
              entry: 'index.tsx',
            },
            context: {},
            renderOpts: {
              compile: (function () {
                var d = i()(
                  s()().mark(function r() {
                    var o,
                      u = arguments;
                    return s()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (o = t.sent).default.apply(o, u),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, r);
                  }),
                );
                function a() {
                  return d.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
          'autocomplete-demo-5': {
            component: l.memo(
              l.lazy(
                i()(
                  s()().mark(function d() {
                    var a, r, o;
                    return s()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (o = function () {
                                var c = ['Apple', 'Banana', 'Cherry'];
                                return l.createElement(
                                  'div',
                                  { style: { width: '300px' } },
                                  l.createElement(r, {
                                    options: c,
                                    error: !0,
                                    placeholder: '\u9519\u8BEF\u72B6\u6001',
                                  }),
                                );
                              }),
                              (n.next = 3),
                              e.e(2537).then(e.bind(e, 82537))
                            );
                          case 3:
                            return (
                              (a = n.sent),
                              (r = a.default),
                              n.abrupt('return', { default: o })
                            );
                          case 6:
                          case 'end':
                            return n.stop();
                        }
                    }, d);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'autocomplete-demo-5',
              refAtomIds: ['AutoComplete'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import AutoComplete from './index';

function AutoCompleteErrorDemo() {
  const options = ['Apple', 'Banana', 'Cherry'];

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete
        options={options}
        error
        placeholder="\u9519\u8BEF\u72B6\u6001"
      />
    </div>
  );
}

export default AutoCompleteErrorDemo;`,
                },
              },
              entry: 'index.tsx',
            },
            context: {},
            renderOpts: {
              compile: (function () {
                var d = i()(
                  s()().mark(function r() {
                    var o,
                      u = arguments;
                    return s()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (o = t.sent).default.apply(o, u),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, r);
                  }),
                );
                function a() {
                  return d.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
          'autocomplete-demo-6': {
            component: l.memo(
              l.lazy(
                i()(
                  s()().mark(function d() {
                    var a, r, o;
                    return s()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (o = function () {
                                var c = [
                                    'Apple',
                                    'Banana',
                                    'Cherry',
                                    'Date',
                                    'Elderberry',
                                  ],
                                  x = function (C, b) {
                                    if (typeof b == 'string')
                                      return b
                                        .toLowerCase()
                                        .startsWith(C.toLowerCase());
                                    var A;
                                    return (
                                      ((A = b.label) === null || A === void 0
                                        ? void 0
                                        : A.toLowerCase().startsWith(
                                            C.toLowerCase(),
                                          )) ||
                                      b.value
                                        .toLowerCase()
                                        .startsWith(C.toLowerCase())
                                    );
                                  };
                                return l.createElement(
                                  'div',
                                  { style: { width: '300px' } },
                                  l.createElement(r, {
                                    options: c,
                                    filterOption: x,
                                    placeholder:
                                      '\u8BF7\u8F93\u5165\u6C34\u679C\u540D\u79F0\uFF08\u53EA\u5339\u914D\u5F00\u5934\uFF09',
                                  }),
                                );
                              }),
                              (n.next = 3),
                              e.e(2537).then(e.bind(e, 82537))
                            );
                          case 3:
                            return (
                              (a = n.sent),
                              (r = a.default),
                              n.abrupt('return', { default: o })
                            );
                          case 6:
                          case 'end':
                            return n.stop();
                        }
                    }, d);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'autocomplete-demo-6',
              refAtomIds: ['AutoComplete'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import AutoComplete from './index';

function AutoCompleteCustomFilterDemo() {
  const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  // \u81EA\u5B9A\u4E49\u8FC7\u6EE4\u903B\u8F91\uFF1A\u53EA\u5339\u914D\u5F00\u5934\u7684\u5B57\u7B26
  const customFilter = (inputValue: string, option: string | { value: string; label?: string; disabled?: boolean }) => {
    if (typeof option === 'string') {
      return option.toLowerCase().startsWith(inputValue.toLowerCase());
    } else {
      return option.label?.toLowerCase().startsWith(inputValue.toLowerCase()) || 
             option.value.toLowerCase().startsWith(inputValue.toLowerCase());
    }
  };

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete
        options={options}
        filterOption={customFilter}
        placeholder="\u8BF7\u8F93\u5165\u6C34\u679C\u540D\u79F0\uFF08\u53EA\u5339\u914D\u5F00\u5934\uFF09"
      />
    </div>
  );
}

export default AutoCompleteCustomFilterDemo;`,
                },
              },
              entry: 'index.tsx',
            },
            context: {},
            renderOpts: {
              compile: (function () {
                var d = i()(
                  s()().mark(function r() {
                    var o,
                      u = arguments;
                    return s()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (o = t.sent).default.apply(o, u),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, r);
                  }),
                );
                function a() {
                  return d.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
          'autocomplete-demo-7': {
            component: l.memo(
              l.lazy(
                i()(
                  s()().mark(function d() {
                    var a, r, o;
                    return s()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (o = function () {
                                var c = [
                                    {
                                      value: 'apple',
                                      label: '\u82F9\u679C',
                                      color: '#ff6b6b',
                                    },
                                    {
                                      value: 'banana',
                                      label: '\u9999\u8549',
                                      color: '#ffe66d',
                                    },
                                    {
                                      value: 'cherry',
                                      label: '\u6A31\u6843',
                                      color: '#ff8fab',
                                    },
                                    {
                                      value: 'grape',
                                      label: '\u8461\u8404',
                                      color: '#845ec2',
                                    },
                                  ],
                                  x = function (C, b) {
                                    return l.createElement(
                                      'div',
                                      {
                                        style: {
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '8px',
                                        },
                                      },
                                      l.createElement('div', {
                                        style: {
                                          width: '12px',
                                          height: '12px',
                                          borderRadius: '50%',
                                          background: C.color,
                                        },
                                      }),
                                      l.createElement('span', null, C.label),
                                    );
                                  };
                                return l.createElement(
                                  'div',
                                  { style: { width: '300px' } },
                                  l.createElement(r, {
                                    options: c,
                                    renderOption: x,
                                    placeholder:
                                      '\u8BF7\u8F93\u5165\u6C34\u679C\u540D\u79F0',
                                  }),
                                );
                              }),
                              (n.next = 3),
                              e.e(2537).then(e.bind(e, 82537))
                            );
                          case 3:
                            return (
                              (a = n.sent),
                              (r = a.default),
                              n.abrupt('return', { default: o })
                            );
                          case 6:
                          case 'end':
                            return n.stop();
                        }
                    }, d);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'autocomplete-demo-7',
              refAtomIds: ['AutoComplete'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import AutoComplete from './index';

function AutoCompleteCustomRenderDemo() {
  const options = [
    { value: 'apple', label: '\u82F9\u679C', color: '#ff6b6b' },
    { value: 'banana', label: '\u9999\u8549', color: '#ffe66d' },
    { value: 'cherry', label: '\u6A31\u6843', color: '#ff8fab' },
    { value: 'grape', label: '\u8461\u8404', color: '#845ec2' },
  ];

  // \u81EA\u5B9A\u4E49\u9009\u9879\u6E32\u67D3
  const renderOption = (option: any, inputValue: string) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: option.color }} />
        <span>{option.label}</span>
      </div>
    );
  };

  return (
    <div style={{ width: '300px' }}>
      <AutoComplete
        options={options}
        renderOption={renderOption}
        placeholder="\u8BF7\u8F93\u5165\u6C34\u679C\u540D\u79F0"
      />
    </div>
  );
}

export default AutoCompleteCustomRenderDemo;`,
                },
              },
              entry: 'index.tsx',
            },
            context: {},
            renderOpts: {
              compile: (function () {
                var d = i()(
                  s()().mark(function r() {
                    var o,
                      u = arguments;
                    return s()().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.e(3015).then(e.bind(e, 33015))
                            );
                          case 2:
                            return t.abrupt(
                              'return',
                              (o = t.sent).default.apply(o, u),
                            );
                          case 3:
                          case 'end':
                            return t.stop();
                        }
                    }, r);
                  }),
                );
                function a() {
                  return d.apply(this, arguments);
                }
                return a;
              })(),
            },
          },
        };
    },
    97656: function (m, v, e) {
      'use strict';
      e.r(v),
        e.d(v, {
          default: function () {
            return $;
          },
        });
      var y = e(26068),
        g = e.n(y),
        I = e(67825),
        h = e.n(I),
        s = e(75271),
        f = {
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
        i = e(52676),
        l = [
          'type',
          'size',
          'disabled',
          'children',
          'onClick',
          'className',
          'style',
          'htmlType',
        ],
        B = function (a) {
          var r = a.type,
            o = r === void 0 ? 'default' : r,
            u = a.size,
            n = u === void 0 ? 'default' : u,
            t = a.disabled,
            c = t === void 0 ? !1 : t,
            x = a.children,
            p = a.onClick,
            C = a.className,
            b = C === void 0 ? '' : C,
            A = a.style,
            O = A === void 0 ? {} : A,
            E = a.htmlType,
            L = E === void 0 ? 'button' : E,
            P = h()(a, l),
            S = function () {
              var D = [f.button];
              return (
                D.push(f[o]),
                D.push(f[n]),
                c && D.push(f.disabled),
                b && D.push(b),
                D.join(' ')
              );
            },
            z = function () {
              !c && p && p();
            };
          return (0, i.jsx)(
            'button',
            g()(
              g()(
                {
                  type:
                    L === 'submit'
                      ? 'submit'
                      : L === 'reset'
                      ? 'reset'
                      : 'button',
                  className: S(),
                  style: O,
                  disabled: c,
                  onClick: z,
                },
                P,
              ),
              {},
              { children: x },
            ),
          );
        },
        $ = B;
    },
    15295: function (m, v, e) {
      'use strict';
      e.r(v),
        e.d(v, {
          texts: function () {
            return y;
          },
        });
      const y = [
        {
          value:
            '\u81EA\u52A8\u5B8C\u6210\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u8F93\u5165\u6846\u7684\u81EA\u52A8\u8865\u5168\u529F\u80FD\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u9009\u9879\u3001\u8FC7\u6EE4\u903B\u8F91\u548C\u6E32\u67D3\u65B9\u5F0F\u3002',
          paraId: 0,
          tocIndex: 0,
        },
        {
          value:
            '\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u4F7F\u7528\u5B57\u7B26\u4E32\u6570\u7EC4\u4F5C\u4E3A\u9009\u9879\u3002',
          paraId: 1,
          tocIndex: 2,
        },
        {
          value:
            '\u4F7F\u7528\u5BF9\u8C61\u6570\u7EC4\u4F5C\u4E3A\u9009\u9879\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u5305\u542B ',
          paraId: 2,
          tocIndex: 3,
        },
        { value: 'value', paraId: 2, tocIndex: 3 },
        { value: ' \u548C ', paraId: 2, tocIndex: 3 },
        { value: 'label', paraId: 2, tocIndex: 3 },
        { value: ' \u5C5E\u6027\u3002', paraId: 2, tocIndex: 3 },
        { value: '\u901A\u8FC7 ', paraId: 3, tocIndex: 4 },
        { value: 'size', paraId: 3, tocIndex: 4 },
        {
          value:
            ' \u5C5E\u6027\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u5927\u5C0F\uFF0C\u652F\u6301 ',
          paraId: 3,
          tocIndex: 4,
        },
        { value: 'small', paraId: 3, tocIndex: 4 },
        { value: '\u3001', paraId: 3, tocIndex: 4 },
        { value: 'default', paraId: 3, tocIndex: 4 },
        { value: ' \u548C ', paraId: 3, tocIndex: 4 },
        { value: 'large', paraId: 3, tocIndex: 4 },
        { value: ' \u4E09\u79CD\u5C3A\u5BF8\u3002', paraId: 3, tocIndex: 4 },
        { value: '\u901A\u8FC7 ', paraId: 4, tocIndex: 5 },
        { value: 'loading', paraId: 4, tocIndex: 5 },
        {
          value:
            ' \u5C5E\u6027\u8BBE\u7F6E\u52A0\u8F7D\u72B6\u6001\uFF0C\u7528\u4E8E\u5F02\u6B65\u83B7\u53D6\u9009\u9879\u7684\u573A\u666F\u3002',
          paraId: 4,
          tocIndex: 5,
        },
        { value: '\u901A\u8FC7 ', paraId: 5, tocIndex: 6 },
        { value: 'disabled', paraId: 5, tocIndex: 6 },
        {
          value: ' \u5C5E\u6027\u8BBE\u7F6E\u7981\u7528\u72B6\u6001\u3002',
          paraId: 5,
          tocIndex: 6,
        },
        { value: '\u901A\u8FC7 ', paraId: 6, tocIndex: 7 },
        { value: 'error', paraId: 6, tocIndex: 7 },
        {
          value: ' \u5C5E\u6027\u8BBE\u7F6E\u9519\u8BEF\u72B6\u6001\u3002',
          paraId: 6,
          tocIndex: 7,
        },
        { value: '\u901A\u8FC7 ', paraId: 7, tocIndex: 8 },
        { value: 'filterOption', paraId: 7, tocIndex: 8 },
        {
          value:
            ' \u5C5E\u6027\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u903B\u8F91\u3002',
          paraId: 7,
          tocIndex: 8,
        },
        { value: '\u901A\u8FC7 ', paraId: 8, tocIndex: 9 },
        { value: 'renderOption', paraId: 8, tocIndex: 9 },
        {
          value:
            ' \u5C5E\u6027\u81EA\u5B9A\u4E49\u9009\u9879\u7684\u6E32\u67D3\u65B9\u5F0F\u3002',
          paraId: 8,
          tocIndex: 9,
        },
        { value: '\u5C5E\u6027', paraId: 9, tocIndex: 11 },
        { value: '\u8BF4\u660E', paraId: 9, tocIndex: 11 },
        { value: '\u7C7B\u578B', paraId: 9, tocIndex: 11 },
        { value: '\u9ED8\u8BA4\u503C', paraId: 9, tocIndex: 11 },
        { value: 'size', paraId: 9, tocIndex: 11 },
        { value: '\u8F93\u5165\u6846\u5C3A\u5BF8', paraId: 9, tocIndex: 11 },
        { value: "'small' | 'default' | 'large'", paraId: 9, tocIndex: 11 },
        { value: "'default'", paraId: 9, tocIndex: 11 },
        { value: 'disabled', paraId: 9, tocIndex: 11 },
        { value: '\u662F\u5426\u7981\u7528', paraId: 9, tocIndex: 11 },
        { value: 'boolean', paraId: 9, tocIndex: 11 },
        { value: 'false', paraId: 9, tocIndex: 11 },
        { value: 'readOnly', paraId: 9, tocIndex: 11 },
        { value: '\u662F\u5426\u53EA\u8BFB', paraId: 9, tocIndex: 11 },
        { value: 'boolean', paraId: 9, tocIndex: 11 },
        { value: 'false', paraId: 9, tocIndex: 11 },
        { value: 'error', paraId: 9, tocIndex: 11 },
        {
          value: '\u662F\u5426\u9519\u8BEF\u72B6\u6001',
          paraId: 9,
          tocIndex: 11,
        },
        { value: 'boolean', paraId: 9, tocIndex: 11 },
        { value: 'false', paraId: 9, tocIndex: 11 },
        { value: 'options', paraId: 9, tocIndex: 11 },
        { value: '\u9009\u9879\u5217\u8868', paraId: 9, tocIndex: 11 },
        {
          value:
            'Array<{ value: string; label?: string; disabled?: boolean }> | string[]',
          paraId: 9,
          tocIndex: 11,
        },
        { value: '[]', paraId: 9, tocIndex: 11 },
        { value: 'value', paraId: 9, tocIndex: 11 },
        {
          value: '\u8F93\u5165\u503C\uFF08\u53D7\u63A7\uFF09',
          paraId: 9,
          tocIndex: 11,
        },
        { value: 'string', paraId: 9, tocIndex: 11 },
        { value: '-', paraId: 9, tocIndex: 11 },
        { value: 'defaultValue', paraId: 9, tocIndex: 11 },
        {
          value: '\u9ED8\u8BA4\u8F93\u5165\u503C\uFF08\u975E\u53D7\u63A7\uFF09',
          paraId: 9,
          tocIndex: 11,
        },
        { value: 'string', paraId: 9, tocIndex: 11 },
        { value: "''", paraId: 9, tocIndex: 11 },
        { value: 'placeholder', paraId: 9, tocIndex: 11 },
        { value: '\u5360\u4F4D\u7B26', paraId: 9, tocIndex: 11 },
        { value: 'string', paraId: 9, tocIndex: 11 },
        { value: '-', paraId: 9, tocIndex: 11 },
        { value: 'onChange', paraId: 9, tocIndex: 11 },
        {
          value: '\u8F93\u5165\u503C\u53D8\u5316\u65F6\u7684\u56DE\u8C03',
          paraId: 9,
          tocIndex: 11,
        },
        { value: '(value: string) => void', paraId: 9, tocIndex: 11 },
        { value: '-', paraId: 9, tocIndex: 11 },
        { value: 'onSelect', paraId: 9, tocIndex: 11 },
        {
          value: '\u9009\u9879\u9009\u4E2D\u65F6\u7684\u56DE\u8C03',
          paraId: 9,
          tocIndex: 11,
        },
        {
          value:
            '(option: { value: string; label?: string; disabled?: boolean } | string) => void',
          paraId: 9,
          tocIndex: 11,
        },
        { value: '-', paraId: 9, tocIndex: 11 },
        { value: 'onSearch', paraId: 9, tocIndex: 11 },
        {
          value: '\u641C\u7D22\u65F6\u7684\u56DE\u8C03',
          paraId: 9,
          tocIndex: 11,
        },
        { value: '(value: string) => void', paraId: 9, tocIndex: 11 },
        { value: '-', paraId: 9, tocIndex: 11 },
        { value: 'loading', paraId: 9, tocIndex: 11 },
        {
          value: '\u662F\u5426\u52A0\u8F7D\u72B6\u6001',
          paraId: 9,
          tocIndex: 11,
        },
        { value: 'boolean', paraId: 9, tocIndex: 11 },
        { value: 'false', paraId: 9, tocIndex: 11 },
        { value: 'filterOption', paraId: 9, tocIndex: 11 },
        {
          value: '\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u903B\u8F91',
          paraId: 9,
          tocIndex: 11,
        },
        {
          value:
            '(inputValue: string, option: { value: string; label?: string; disabled?: boolean } | string) => boolean',
          paraId: 9,
          tocIndex: 11,
        },
        { value: '-', paraId: 9, tocIndex: 11 },
        { value: 'renderOption', paraId: 9, tocIndex: 11 },
        {
          value: '\u81EA\u5B9A\u4E49\u9009\u9879\u6E32\u67D3',
          paraId: 9,
          tocIndex: 11,
        },
        {
          value:
            '(option: { value: string; label?: string; disabled?: boolean } | string, inputValue: string) => React.ReactNode',
          paraId: 9,
          tocIndex: 11,
        },
        { value: '-', paraId: 9, tocIndex: 11 },
        { value: 'className', paraId: 9, tocIndex: 11 },
        { value: '\u81EA\u5B9A\u4E49\u7C7B\u540D', paraId: 9, tocIndex: 11 },
        { value: 'string', paraId: 9, tocIndex: 11 },
        { value: "''", paraId: 9, tocIndex: 11 },
        { value: 'style', paraId: 9, tocIndex: 11 },
        { value: '\u81EA\u5B9A\u4E49\u6837\u5F0F', paraId: 9, tocIndex: 11 },
        { value: 'React.CSSProperties', paraId: 9, tocIndex: 11 },
        { value: '{}', paraId: 9, tocIndex: 11 },
      ];
    },
    27045: function (m, v) {
      'use strict';
      v.Z = `import React from 'react';
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
    67825: function (m, v, e) {
      var y = e(64382);
      function g(I, h) {
        if (I == null) return {};
        var s = y(I, h),
          f,
          i;
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(I);
          for (i = 0; i < l.length; i++)
            (f = l[i]),
              !(h.indexOf(f) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(I, f) &&
                (s[f] = I[f]);
        }
        return s;
      }
      (m.exports = g),
        (m.exports.__esModule = !0),
        (m.exports.default = m.exports);
    },
    64382: function (m) {
      function v(e, y) {
        if (e == null) return {};
        var g = {},
          I = Object.keys(e),
          h,
          s;
        for (s = 0; s < I.length; s++)
          (h = I[s]), !(y.indexOf(h) >= 0) && (g[h] = e[h]);
        return g;
      }
      (m.exports = v),
        (m.exports.__esModule = !0),
        (m.exports.default = m.exports);
    },
  },
]);
