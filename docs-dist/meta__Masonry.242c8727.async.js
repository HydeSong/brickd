'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [7327, 5324, 6125],
  {
    63020: function (N, f, t) {
      t.r(f),
        t.d(f, {
          demos: function () {
            return v;
          },
        });
      var y = t(90228),
        d = t.n(y),
        b = t(87999),
        x = t.n(b),
        e = t(75271),
        o = t(66125),
        g = t(65324),
        v = {
          'masonry-demo-0': {
            component: e.memo(
              e.lazy(
                x()(
                  d()().mark(function c() {
                    var s, r, i, l, m;
                    return d()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (m = function () {
                                var u = [
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9',
                                    height: 300,
                                  },
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3',
                                    height: 400,
                                  },
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20forest%20with%20trees&image_size=square',
                                    height: 350,
                                  },
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20beach%20with%20ocean&image_size=landscape_4_3',
                                    height: 280,
                                  },
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20mountain%20peak%20with%20snow&image_size=portrait_16_9',
                                    height: 420,
                                  },
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20waterfall%20in%20forest&image_size=square',
                                    height: 320,
                                  },
                                ];
                                return e.createElement(
                                  r,
                                  null,
                                  u.map(function (p, h) {
                                    return e.createElement(
                                      'div',
                                      {
                                        key: h,
                                        style: { marginBottom: '16px' },
                                      },
                                      e.createElement(l, {
                                        src: p.src,
                                        width: '100%',
                                        height: p.height,
                                        style: { borderRadius: '8px' },
                                      }),
                                    );
                                  }),
                                );
                              }),
                              (n.next = 3),
                              t.e(3997).then(t.bind(t, 13997))
                            );
                          case 3:
                            return (
                              (s = n.sent),
                              (r = s.default),
                              (n.next = 7),
                              Promise.resolve().then(t.bind(t, 66125))
                            );
                          case 7:
                            return (
                              (i = n.sent),
                              (l = i.default),
                              n.abrupt('return', { default: m })
                            );
                          case 10:
                          case 'end':
                            return n.stop();
                        }
                    }, c);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'masonry-demo-0',
              refAtomIds: ['Masonry'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import Masonry from './index';
import Image from '../Image';

function MasonryBasicDemo() {
  const images = [
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9",
      height: 300
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3",
      height: 400
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20forest%20with%20trees&image_size=square",
      height: 350
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20beach%20with%20ocean&image_size=landscape_4_3",
      height: 280
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20mountain%20peak%20with%20snow&image_size=portrait_16_9",
      height: 420
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20waterfall%20in%20forest&image_size=square",
      height: 320
    }
  ];

  return (
    <Masonry>
      {images.map((image, index) => (
        <div key={index} style={{ marginBottom: '16px' }}>
          <Image 
            src={image.src} 
            width="100%" 
            height={image.height} 
            style={{ borderRadius: '8px' }}
          />
        </div>
      ))}
    </Masonry>
  );
}

export default MasonryBasicDemo;`,
                },
                '../Image.tsx': { type: 'FILE', value: t(60018).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Image.tsx': o,
              '/Users/hyde/Documents/Workspace/brickd/src/Image/index.tsx': o,
            },
            renderOpts: {
              compile: (function () {
                var c = x()(
                  d()().mark(function r() {
                    var i,
                      l = arguments;
                    return d()().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.next = 2), t.e(3015).then(t.bind(t, 33015))
                            );
                          case 2:
                            return a.abrupt(
                              'return',
                              (i = a.sent).default.apply(i, l),
                            );
                          case 3:
                          case 'end':
                            return a.stop();
                        }
                    }, r);
                  }),
                );
                function s() {
                  return c.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
          'masonry-demo-1': {
            component: e.memo(
              e.lazy(
                x()(
                  d()().mark(function c() {
                    var s, r, i, l, m;
                    return d()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (m = function () {
                                var u = [
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9',
                                    height: 300,
                                  },
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3',
                                    height: 400,
                                  },
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20forest%20with%20trees&image_size=square',
                                    height: 350,
                                  },
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20beach%20with%20ocean&image_size=landscape_4_3',
                                    height: 280,
                                  },
                                ];
                                return e.createElement(
                                  'div',
                                  {
                                    style: {
                                      display: 'flex',
                                      gap: '24px',
                                      flexDirection: 'column',
                                    },
                                  },
                                  e.createElement(
                                    'div',
                                    null,
                                    e.createElement(
                                      'h4',
                                      null,
                                      '2\u5217\u5E03\u5C40',
                                    ),
                                    e.createElement(
                                      r,
                                      { columns: 2 },
                                      u.map(function (p, h) {
                                        return e.createElement(
                                          'div',
                                          {
                                            key: h,
                                            style: { marginBottom: '16px' },
                                          },
                                          e.createElement(l, {
                                            src: p.src,
                                            width: '100%',
                                            height: p.height,
                                            style: { borderRadius: '8px' },
                                          }),
                                        );
                                      }),
                                    ),
                                  ),
                                  e.createElement(
                                    'div',
                                    null,
                                    e.createElement(
                                      'h4',
                                      null,
                                      '4\u5217\u5E03\u5C40',
                                    ),
                                    e.createElement(
                                      r,
                                      { columns: 4 },
                                      u.map(function (p, h) {
                                        return e.createElement(
                                          'div',
                                          {
                                            key: h,
                                            style: { marginBottom: '16px' },
                                          },
                                          e.createElement(l, {
                                            src: p.src,
                                            width: '100%',
                                            height: p.height,
                                            style: { borderRadius: '8px' },
                                          }),
                                        );
                                      }),
                                    ),
                                  ),
                                );
                              }),
                              (n.next = 3),
                              t.e(3997).then(t.bind(t, 13997))
                            );
                          case 3:
                            return (
                              (s = n.sent),
                              (r = s.default),
                              (n.next = 7),
                              Promise.resolve().then(t.bind(t, 66125))
                            );
                          case 7:
                            return (
                              (i = n.sent),
                              (l = i.default),
                              n.abrupt('return', { default: m })
                            );
                          case 10:
                          case 'end':
                            return n.stop();
                        }
                    }, c);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'masonry-demo-1',
              refAtomIds: ['Masonry'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import Masonry from './index';
import Image from '../Image';

function MasonryColumnsDemo() {
  const images = [
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9",
      height: 300
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3",
      height: 400
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20forest%20with%20trees&image_size=square",
      height: 350
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20beach%20with%20ocean&image_size=landscape_4_3",
      height: 280
    }
  ];

  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
      <div>
        <h4>2\u5217\u5E03\u5C40</h4>
        <Masonry columns={2}>
          {images.map((image, index) => (
            <div key={index} style={{ marginBottom: '16px' }}>
              <Image 
                src={image.src} 
                width="100%" 
                height={image.height} 
                style={{ borderRadius: '8px' }}
              />
            </div>
          ))}
        </Masonry>
      </div>
      <div>
        <h4>4\u5217\u5E03\u5C40</h4>
        <Masonry columns={4}>
          {images.map((image, index) => (
            <div key={index} style={{ marginBottom: '16px' }}>
              <Image 
                src={image.src} 
                width="100%" 
                height={image.height} 
                style={{ borderRadius: '8px' }}
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default MasonryColumnsDemo;`,
                },
                '../Image.tsx': { type: 'FILE', value: t(60018).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Image.tsx': o,
              '/Users/hyde/Documents/Workspace/brickd/src/Image/index.tsx': o,
            },
            renderOpts: {
              compile: (function () {
                var c = x()(
                  d()().mark(function r() {
                    var i,
                      l = arguments;
                    return d()().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.next = 2), t.e(3015).then(t.bind(t, 33015))
                            );
                          case 2:
                            return a.abrupt(
                              'return',
                              (i = a.sent).default.apply(i, l),
                            );
                          case 3:
                          case 'end':
                            return a.stop();
                        }
                    }, r);
                  }),
                );
                function s() {
                  return c.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
          'masonry-demo-2': {
            component: e.memo(
              e.lazy(
                x()(
                  d()().mark(function c() {
                    var s, r, i, l, m;
                    return d()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (m = function () {
                                var u = [
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9',
                                    height: 300,
                                  },
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3',
                                    height: 400,
                                  },
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20forest%20with%20trees&image_size=square',
                                    height: 350,
                                  },
                                ];
                                return e.createElement(
                                  'div',
                                  {
                                    style: {
                                      display: 'flex',
                                      gap: '24px',
                                      flexDirection: 'column',
                                    },
                                  },
                                  e.createElement(
                                    'div',
                                    null,
                                    e.createElement(
                                      'h4',
                                      null,
                                      '\u5C0F\u95F4\u8DDD',
                                    ),
                                    e.createElement(
                                      r,
                                      { columns: 3, gap: 8 },
                                      u.map(function (p, h) {
                                        return e.createElement(
                                          'div',
                                          {
                                            key: h,
                                            style: { marginBottom: '8px' },
                                          },
                                          e.createElement(l, {
                                            src: p.src,
                                            width: '100%',
                                            height: p.height,
                                            style: { borderRadius: '8px' },
                                          }),
                                        );
                                      }),
                                    ),
                                  ),
                                  e.createElement(
                                    'div',
                                    null,
                                    e.createElement(
                                      'h4',
                                      null,
                                      '\u5927\u95F4\u8DDD',
                                    ),
                                    e.createElement(
                                      r,
                                      { columns: 3, gap: 24 },
                                      u.map(function (p, h) {
                                        return e.createElement(
                                          'div',
                                          {
                                            key: h,
                                            style: { marginBottom: '24px' },
                                          },
                                          e.createElement(l, {
                                            src: p.src,
                                            width: '100%',
                                            height: p.height,
                                            style: { borderRadius: '8px' },
                                          }),
                                        );
                                      }),
                                    ),
                                  ),
                                );
                              }),
                              (n.next = 3),
                              t.e(3997).then(t.bind(t, 13997))
                            );
                          case 3:
                            return (
                              (s = n.sent),
                              (r = s.default),
                              (n.next = 7),
                              Promise.resolve().then(t.bind(t, 66125))
                            );
                          case 7:
                            return (
                              (i = n.sent),
                              (l = i.default),
                              n.abrupt('return', { default: m })
                            );
                          case 10:
                          case 'end':
                            return n.stop();
                        }
                    }, c);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'masonry-demo-2',
              refAtomIds: ['Masonry'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import Masonry from './index';
import Image from '../Image';

function MasonryGapDemo() {
  const images = [
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9",
      height: 300
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3",
      height: 400
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20forest%20with%20trees&image_size=square",
      height: 350
    }
  ];

  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
      <div>
        <h4>\u5C0F\u95F4\u8DDD</h4>
        <Masonry columns={3} gap={8}>
          {images.map((image, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>
              <Image 
                src={image.src} 
                width="100%" 
                height={image.height} 
                style={{ borderRadius: '8px' }}
              />
            </div>
          ))}
        </Masonry>
      </div>
      <div>
        <h4>\u5927\u95F4\u8DDD</h4>
        <Masonry columns={3} gap={24}>
          {images.map((image, index) => (
            <div key={index} style={{ marginBottom: '24px' }}>
              <Image 
                src={image.src} 
                width="100%" 
                height={image.height} 
                style={{ borderRadius: '8px' }}
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default MasonryGapDemo;`,
                },
                '../Image.tsx': { type: 'FILE', value: t(60018).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Image.tsx': o,
              '/Users/hyde/Documents/Workspace/brickd/src/Image/index.tsx': o,
            },
            renderOpts: {
              compile: (function () {
                var c = x()(
                  d()().mark(function r() {
                    var i,
                      l = arguments;
                    return d()().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.next = 2), t.e(3015).then(t.bind(t, 33015))
                            );
                          case 2:
                            return a.abrupt(
                              'return',
                              (i = a.sent).default.apply(i, l),
                            );
                          case 3:
                          case 'end':
                            return a.stop();
                        }
                    }, r);
                  }),
                );
                function s() {
                  return c.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
          'masonry-demo-3': {
            component: e.memo(
              e.lazy(
                x()(
                  d()().mark(function c() {
                    var s, r, i, l, m, a, n;
                    return d()().wrap(function (u) {
                      for (;;)
                        switch ((u.prev = u.next)) {
                          case 0:
                            return (
                              (n = function () {
                                var h = [
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9',
                                    height: 300,
                                  },
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3',
                                    height: 400,
                                  },
                                ];
                                return e.createElement(
                                  r,
                                  { columns: 3, gap: 16 },
                                  e.createElement(
                                    'div',
                                    { style: { marginBottom: '16px' } },
                                    e.createElement(l, {
                                      src: h[0].src,
                                      width: '100%',
                                      height: h[0].height,
                                      style: { borderRadius: '8px' },
                                    }),
                                  ),
                                  e.createElement(
                                    'div',
                                    { style: { marginBottom: '16px' } },
                                    e.createElement(
                                      a,
                                      { style: { height: '200px' } },
                                      e.createElement(
                                        a.Header,
                                        null,
                                        '\u5361\u7247\u6807\u9898',
                                      ),
                                      e.createElement(
                                        a.Body,
                                        null,
                                        e.createElement(
                                          'p',
                                          null,
                                          '\u8FD9\u662F\u4E00\u5F20\u5361\u7247\u5185\u5BB9\uFF0C\u7528\u4E8E\u5C55\u793A\u7011\u5E03\u6D41\u4E2D\u7684\u6DF7\u5408\u5185\u5BB9\u3002',
                                        ),
                                      ),
                                    ),
                                  ),
                                  e.createElement(
                                    'div',
                                    { style: { marginBottom: '16px' } },
                                    e.createElement(l, {
                                      src: h[1].src,
                                      width: '100%',
                                      height: h[1].height,
                                      style: { borderRadius: '8px' },
                                    }),
                                  ),
                                  e.createElement(
                                    'div',
                                    { style: { marginBottom: '16px' } },
                                    e.createElement(
                                      a,
                                      { style: { height: '250px' } },
                                      e.createElement(
                                        a.Header,
                                        null,
                                        '\u5361\u7247\u6807\u9898',
                                      ),
                                      e.createElement(
                                        a.Body,
                                        null,
                                        e.createElement(
                                          'p',
                                          null,
                                          '\u8FD9\u662F\u53E6\u4E00\u5F20\u5361\u7247\u5185\u5BB9\uFF0C\u9AD8\u5EA6\u4E0E\u7B2C\u4E00\u5F20\u4E0D\u540C\uFF0C\u5C55\u793A\u7011\u5E03\u6D41\u7684\u4E0D\u89C4\u5219\u5E03\u5C40\u6548\u679C\u3002',
                                        ),
                                        e.createElement(
                                          'p',
                                          null,
                                          '\u591A\u884C\u6587\u672C\u5185\u5BB9\uFF0C\u589E\u52A0\u5361\u7247\u9AD8\u5EA6\u3002',
                                        ),
                                        e.createElement(
                                          'p',
                                          null,
                                          '\u7EE7\u7EED\u6DFB\u52A0\u6587\u672C\u5185\u5BB9\u3002',
                                        ),
                                      ),
                                    ),
                                  ),
                                  e.createElement(
                                    'div',
                                    { style: { marginBottom: '16px' } },
                                    e.createElement(
                                      'div',
                                      {
                                        style: {
                                          background: '#f0f2f5',
                                          padding: '24px',
                                          borderRadius: '8px',
                                          height: '150px',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        },
                                      },
                                      e.createElement(
                                        'p',
                                        null,
                                        '\u8FD9\u662F\u4E00\u4E2A\u666E\u901A\u7684div\u5143\u7D20\uFF0C\u7528\u4E8E\u5C55\u793A\u7011\u5E03\u6D41\u4E2D\u7684\u6DF7\u5408\u5185\u5BB9\u3002',
                                      ),
                                    ),
                                  ),
                                );
                              }),
                              (u.next = 3),
                              t.e(3997).then(t.bind(t, 13997))
                            );
                          case 3:
                            return (
                              (s = u.sent),
                              (r = s.default),
                              (u.next = 7),
                              Promise.resolve().then(t.bind(t, 66125))
                            );
                          case 7:
                            return (
                              (i = u.sent),
                              (l = i.default),
                              (u.next = 11),
                              Promise.resolve().then(t.bind(t, 65324))
                            );
                          case 11:
                            return (
                              (m = u.sent),
                              (a = m.default),
                              u.abrupt('return', { default: n })
                            );
                          case 14:
                          case 'end':
                            return u.stop();
                        }
                    }, c);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'masonry-demo-3',
              refAtomIds: ['Masonry'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import Masonry from './index';
import Image from '../Image';
import Card from '../Card';

function MasonryMixedContentDemo() {
  const images = [
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9",
      height: 300
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3",
      height: 400
    }
  ];

  return (
    <Masonry columns={3} gap={16}>
      <div style={{ marginBottom: '16px' }}>
        <Image 
          src={images[0].src} 
          width="100%" 
          height={images[0].height} 
          style={{ borderRadius: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Card style={{ height: '200px' }}>
          <Card.Header>\u5361\u7247\u6807\u9898</Card.Header>
          <Card.Body>
            <p>\u8FD9\u662F\u4E00\u5F20\u5361\u7247\u5185\u5BB9\uFF0C\u7528\u4E8E\u5C55\u793A\u7011\u5E03\u6D41\u4E2D\u7684\u6DF7\u5408\u5185\u5BB9\u3002</p>
          </Card.Body>
        </Card>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Image 
          src={images[1].src} 
          width="100%" 
          height={images[1].height} 
          style={{ borderRadius: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Card style={{ height: '250px' }}>
          <Card.Header>\u5361\u7247\u6807\u9898</Card.Header>
          <Card.Body>
            <p>\u8FD9\u662F\u53E6\u4E00\u5F20\u5361\u7247\u5185\u5BB9\uFF0C\u9AD8\u5EA6\u4E0E\u7B2C\u4E00\u5F20\u4E0D\u540C\uFF0C\u5C55\u793A\u7011\u5E03\u6D41\u7684\u4E0D\u89C4\u5219\u5E03\u5C40\u6548\u679C\u3002</p>
            <p>\u591A\u884C\u6587\u672C\u5185\u5BB9\uFF0C\u589E\u52A0\u5361\u7247\u9AD8\u5EA6\u3002</p>
            <p>\u7EE7\u7EED\u6DFB\u52A0\u6587\u672C\u5185\u5BB9\u3002</p>
          </Card.Body>
        </Card>
      </div>
      <div style={{ marginBottom: '16px' }}>
        <div style={{ 
          background: '#f0f2f5', 
          padding: '24px', 
          borderRadius: '8px', 
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <p>\u8FD9\u662F\u4E00\u4E2A\u666E\u901A\u7684div\u5143\u7D20\uFF0C\u7528\u4E8E\u5C55\u793A\u7011\u5E03\u6D41\u4E2D\u7684\u6DF7\u5408\u5185\u5BB9\u3002</p>
        </div>
      </div>
    </Masonry>
  );
}

export default MasonryMixedContentDemo;`,
                },
                '../Card.tsx': { type: 'FILE', value: t(28651).Z },
                '../Image.tsx': { type: 'FILE', value: t(60018).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Card.tsx': g,
              '../Image.tsx': o,
              '/Users/hyde/Documents/Workspace/brickd/src/Card/index.tsx': g,
              '/Users/hyde/Documents/Workspace/brickd/src/Image/index.tsx': o,
            },
            renderOpts: {
              compile: (function () {
                var c = x()(
                  d()().mark(function r() {
                    var i,
                      l = arguments;
                    return d()().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.next = 2), t.e(3015).then(t.bind(t, 33015))
                            );
                          case 2:
                            return a.abrupt(
                              'return',
                              (i = a.sent).default.apply(i, l),
                            );
                          case 3:
                          case 'end':
                            return a.stop();
                        }
                    }, r);
                  }),
                );
                function s() {
                  return c.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
          'masonry-demo-4': {
            component: e.memo(
              e.lazy(
                x()(
                  d()().mark(function c() {
                    var s, r, i, l, m;
                    return d()().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (m = function () {
                                var u = [
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9',
                                    height: 300,
                                  },
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3',
                                    height: 400,
                                  },
                                  {
                                    src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20forest%20with%20trees&image_size=square',
                                    height: 350,
                                  },
                                ];
                                return e.createElement(
                                  r,
                                  {
                                    columns: 3,
                                    gap: 16,
                                    style: {
                                      padding: '24px',
                                      background: '#f9f9f9',
                                      borderRadius: '12px',
                                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                    },
                                  },
                                  u.map(function (p, h) {
                                    return e.createElement(
                                      'div',
                                      {
                                        key: h,
                                        style: { marginBottom: '16px' },
                                      },
                                      e.createElement(l, {
                                        src: p.src,
                                        width: '100%',
                                        height: p.height,
                                        style: {
                                          borderRadius: '8px',
                                          boxShadow:
                                            '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        },
                                      }),
                                    );
                                  }),
                                );
                              }),
                              (n.next = 3),
                              t.e(3997).then(t.bind(t, 13997))
                            );
                          case 3:
                            return (
                              (s = n.sent),
                              (r = s.default),
                              (n.next = 7),
                              Promise.resolve().then(t.bind(t, 66125))
                            );
                          case 7:
                            return (
                              (i = n.sent),
                              (l = i.default),
                              n.abrupt('return', { default: m })
                            );
                          case 10:
                          case 'end':
                            return n.stop();
                        }
                    }, c);
                  }),
                ),
              ),
            ),
            asset: {
              type: 'BLOCK',
              id: 'masonry-demo-4',
              refAtomIds: ['Masonry'],
              dependencies: {
                'index.tsx': {
                  type: 'FILE',
                  value: `import Masonry from './index';
import Image from '../Image';

function MasonryCustomStyleDemo() {
  const images = [
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=landscape_16_9",
      height: 300
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=portrait_4_3",
      height: 400
    },
    {
      src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20forest%20with%20trees&image_size=square",
      height: 350
    }
  ];

  return (
    <Masonry 
      columns={3} 
      gap={16}
      style={{ 
        padding: '24px', 
        background: '#f9f9f9', 
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}
    >
      {images.map((image, index) => (
        <div key={index} style={{ marginBottom: '16px' }}>
          <Image 
            src={image.src} 
            width="100%" 
            height={image.height} 
            style={{ 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      ))}
    </Masonry>
  );
}

export default MasonryCustomStyleDemo;`,
                },
                '../Image.tsx': { type: 'FILE', value: t(60018).Z },
              },
              entry: 'index.tsx',
            },
            context: {
              '../Image.tsx': o,
              '/Users/hyde/Documents/Workspace/brickd/src/Image/index.tsx': o,
            },
            renderOpts: {
              compile: (function () {
                var c = x()(
                  d()().mark(function r() {
                    var i,
                      l = arguments;
                    return d()().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.next = 2), t.e(3015).then(t.bind(t, 33015))
                            );
                          case 2:
                            return a.abrupt(
                              'return',
                              (i = a.sent).default.apply(i, l),
                            );
                          case 3:
                          case 'end':
                            return a.stop();
                        }
                    }, r);
                  }),
                );
                function s() {
                  return c.apply(this, arguments);
                }
                return s;
              })(),
            },
          },
        };
    },
    65324: function (N, f, t) {
      t.r(f),
        t.d(f, {
          default: function () {
            return x;
          },
        });
      var y = {
          card: 'P4wv8mabqC8I8iG8PtLn',
          cardBordered: 'xGx1hqgSw1k3sVZuMKdh',
          cardHoverable: 'URUlRsSlfaYZNMq2x3PN',
          cardHeader: 'OQ74S5ab0kFz5RR6mvfS',
          cardTitle: 'NwoHndx6dTctoMWGSTzH',
          cardExtra: 'tfEcQi3RWaosveWoI8nT',
          cardBody: 'UEHfqKjY6LcMBR8Fbj0h',
          cardFooter: 'XbqEKan1JzYyzBSe5e4r',
          cardSimple: 'ylGToCWu3282NctZBaEc',
          cardOutlined: 'kFc55jbKUqojD2cPVxSv',
          cardElevated: 'PNLoZUOqpasP2txWUSNA',
          cardSmall: 'Wy7zfQ6DlcQuCLeRCMQI',
          cardMedium: 'KXyJcnLQUDgB7aWmlhui',
          cardLarge: 'K07t6u8xSDYT5rNbNcNz',
          cardGrid: 'yNDc3rsmc0ydthopM4ys',
          small: 'qDlnRU3Cqi0G0mCC3zfh',
          medium: 'w8FtyaUbhN0FmcpJiU6n',
          large: 'lTtYKdFuuz8X3QrVco6x',
          cardShadow1: 'LS5DK3l3hlkRr3oZFZ6q',
          cardShadow2: 't_l3tubLfc8J3tjZCg_1',
          cardShadow3: 'djrO5_1a_xIQ1qeFQtRc',
          cardShadow4: 'soLJBhy9zhcseFBvvbB4',
          cardBackgroundDefault: 'MfwNBMAPSW8J1XDsfIBY',
          cardBackgroundLight: 'vtuaARNlpzQZerBLLqwf',
          cardBackgroundDark: 'iuaRzqohV_cVJV6ERACe',
          cardTitleLarge: 'VeAJAAW3lgmq0d1rYU_Q',
          cardTitleMedium: 'TVxVrxVv8u0Obsm7MOJH',
          cardTitleSmall: 'dW_ss3GFuwYXJbySHSS0',
        },
        d = t(52676),
        b = function e(o) {
          var g = o.title,
            v = o.extra,
            c = o.bordered,
            s = c === void 0 ? !0 : c,
            r = o.hoverable,
            i = r === void 0 ? !1 : r,
            l = o.className,
            m = l === void 0 ? '' : l,
            a = o.style,
            n = a === void 0 ? {} : a,
            I = o.children,
            u = function () {
              var C = [y.card];
              return (
                s && C.push(y.cardBordered),
                i && C.push(y.cardHoverable),
                m && C.push(m),
                C.join(' ')
              );
            },
            p = !1,
            h = !1;
          return (
            React.Children.forEach(I, function (E) {
              React.isValidElement(E) &&
                (E.type === e.Header
                  ? (p = !0)
                  : E.type === e.Body && (h = !0));
            }),
            (0, d.jsxs)('div', {
              className: u(),
              style: n,
              children: [
                (g || v) &&
                  !p &&
                  (0, d.jsxs)('div', {
                    className: y.cardHeader,
                    children: [
                      g &&
                        (0, d.jsx)('div', {
                          className: y.cardTitle,
                          children: g,
                        }),
                      v &&
                        (0, d.jsx)('div', {
                          className: y.cardExtra,
                          children: v,
                        }),
                    ],
                  }),
                !h && (0, d.jsx)('div', { className: y.cardBody, children: I }),
                h && I,
              ],
            })
          );
        };
      (b.Header = function (e) {
        var o = e.title,
          g = e.extra,
          v = e.className,
          c = v === void 0 ? '' : v,
          s = e.style,
          r = s === void 0 ? {} : s;
        return (0, d.jsxs)('div', {
          className: ''.concat(y.cardHeader, ' ').concat(c),
          style: r,
          children: [
            o && (0, d.jsx)('div', { className: y.cardTitle, children: o }),
            g && (0, d.jsx)('div', { className: y.cardExtra, children: g }),
          ],
        });
      }),
        (b.Body = function (e) {
          var o = e.className,
            g = o === void 0 ? '' : o,
            v = e.style,
            c = v === void 0 ? {} : v,
            s = e.children;
          return (0, d.jsx)('div', {
            className: ''.concat(y.cardBody, ' ').concat(g),
            style: c,
            children: s,
          });
        }),
        (b.Footer = function (e) {
          var o = e.className,
            g = o === void 0 ? '' : o,
            v = e.style,
            c = v === void 0 ? {} : v,
            s = e.children;
          return (0, d.jsx)('div', {
            className: ''.concat(y.cardFooter, ' ').concat(g),
            style: c,
            children: s,
          });
        });
      var x = b;
    },
    66125: function (N, f, t) {
      t.r(f),
        t.d(f, {
          default: function () {
            return c;
          },
        });
      var y = t(26068),
        d = t.n(y),
        b = t(48305),
        x = t.n(b),
        e = t(75271),
        o = {
          image: 'zLShIm0Xc38gVp8QYW4o',
          imagePlaceholder: 'yoLGZ6fYUUWG_7_iFT40',
          imageFallback: 'V7rsQ1gBjqE690O_Q5aU',
        },
        g = t(52676),
        v = function (r) {
          var i = r.src,
            l = r.alt,
            m = l === void 0 ? '' : l,
            a = r.width,
            n = r.height,
            I = r.fit,
            u = I === void 0 ? 'fill' : I,
            p = r.lazy,
            h = p === void 0 ? !1 : p,
            E = r.placeholder,
            C = r.fallback,
            M = r.className,
            B = M === void 0 ? '' : M,
            R = r.style,
            $ = R === void 0 ? {} : R,
            F = (0, e.useState)(!0),
            D = x()(F, 2),
            P = D[0],
            z = D[1],
            j = (0, e.useState)(!1),
            L = x()(j, 2),
            W = L[0],
            S = L[1],
            H = function () {
              z(!1), S(!1);
            },
            U = function () {
              z(!1), S(!0);
            },
            O = function () {
              return d()({ width: a, height: n, objectFit: u }, $);
            },
            w = (0, g.jsx)('div', {
              className: o.imageFallback,
              style: { width: a, height: n },
              children: (0, g.jsxs)('svg', {
                width: '48',
                height: '48',
                viewBox: '0 0 48 48',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                  (0, g.jsx)('rect', {
                    width: '48',
                    height: '48',
                    rx: '4',
                    fill: '#F5F5F5',
                  }),
                  (0, g.jsx)('path', {
                    d: 'M12 16L24 28L36 16',
                    stroke: '#D9D9D9',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }),
                  (0, g.jsx)('path', {
                    d: 'M12 24H36',
                    stroke: '#D9D9D9',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }),
                ],
              }),
            });
          return i === 'invalid-url' || W
            ? C || w
            : P && E
            ? (0, g.jsx)('div', {
                className: ''.concat(o.imagePlaceholder, ' ').concat(B),
                style: { width: a, height: n },
                children: E,
              })
            : (0, g.jsx)('img', {
                className: ''.concat(o.image, ' ').concat(B),
                src: i,
                alt: m,
                style: O(),
                onLoad: H,
                onError: U,
                loading: h ? 'lazy' : 'eager',
              });
        },
        c = v;
    },
    38526: function (N, f, t) {
      t.r(f),
        t.d(f, {
          texts: function () {
            return y;
          },
        });
      const y = [
        {
          value:
            '\u7011\u5E03\u6D41\u7EC4\u4EF6\u7528\u4E8E\u5B9E\u73B0\u4E0D\u89C4\u5219\u9AD8\u5EA6\u7684\u7F51\u683C\u5E03\u5C40\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5217\u6570\u548C\u95F4\u8DDD\u3002',
          paraId: 0,
          tocIndex: 0,
        },
        { value: '\u901A\u8FC7 ', paraId: 1, tocIndex: 3 },
        { value: 'columns', paraId: 1, tocIndex: 3 },
        {
          value:
            ' \u5C5E\u6027\u8BBE\u7F6E\u7011\u5E03\u6D41\u7684\u5217\u6570\u3002',
          paraId: 1,
          tocIndex: 3,
        },
        { value: '\u901A\u8FC7 ', paraId: 2, tocIndex: 4 },
        { value: 'gap', paraId: 2, tocIndex: 4 },
        {
          value:
            ' \u5C5E\u6027\u8BBE\u7F6E\u7011\u5E03\u6D41\u7684\u95F4\u8DDD\u3002',
          paraId: 2,
          tocIndex: 4,
        },
        {
          value:
            '\u7011\u5E03\u6D41\u7EC4\u4EF6\u53EF\u4EE5\u5305\u542B\u6DF7\u5408\u5185\u5BB9\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u56FE\u7247\u3002',
          paraId: 3,
          tocIndex: 5,
        },
        { value: '\u901A\u8FC7 ', paraId: 4, tocIndex: 6 },
        { value: 'className', paraId: 4, tocIndex: 6 },
        { value: ' \u548C ', paraId: 4, tocIndex: 6 },
        { value: 'style', paraId: 4, tocIndex: 6 },
        {
          value:
            ' \u5C5E\u6027\u81EA\u5B9A\u4E49\u7011\u5E03\u6D41\u7684\u6837\u5F0F\u3002',
          paraId: 4,
          tocIndex: 6,
        },
        { value: '\u5C5E\u6027', paraId: 5, tocIndex: 8 },
        { value: '\u8BF4\u660E', paraId: 5, tocIndex: 8 },
        { value: '\u7C7B\u578B', paraId: 5, tocIndex: 8 },
        { value: '\u9ED8\u8BA4\u503C', paraId: 5, tocIndex: 8 },
        { value: 'columns', paraId: 5, tocIndex: 8 },
        { value: '\u5217\u6570', paraId: 5, tocIndex: 8 },
        { value: 'number', paraId: 5, tocIndex: 8 },
        { value: '3', paraId: 5, tocIndex: 8 },
        { value: 'gap', paraId: 5, tocIndex: 8 },
        {
          value: '\u95F4\u8DDD\uFF08\u50CF\u7D20\uFF09',
          paraId: 5,
          tocIndex: 8,
        },
        { value: 'number', paraId: 5, tocIndex: 8 },
        { value: '16', paraId: 5, tocIndex: 8 },
        { value: 'className', paraId: 5, tocIndex: 8 },
        { value: '\u81EA\u5B9A\u4E49\u7C7B\u540D', paraId: 5, tocIndex: 8 },
        { value: 'string', paraId: 5, tocIndex: 8 },
        { value: "''", paraId: 5, tocIndex: 8 },
        { value: 'style', paraId: 5, tocIndex: 8 },
        { value: '\u81EA\u5B9A\u4E49\u6837\u5F0F', paraId: 5, tocIndex: 8 },
        { value: 'React.CSSProperties', paraId: 5, tocIndex: 8 },
        { value: '{}', paraId: 5, tocIndex: 8 },
        { value: 'children', paraId: 5, tocIndex: 8 },
        { value: '\u5B50\u7EC4\u4EF6', paraId: 5, tocIndex: 8 },
        { value: 'React.ReactNode', paraId: 5, tocIndex: 8 },
        { value: '-', paraId: 5, tocIndex: 8 },
      ];
    },
    28651: function (N, f) {
      f.Z = `import styles from './Card.module.css';

interface CardProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  bordered?: boolean;
  hoverable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface CardHeaderProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface CardBodyProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface CardFooterProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Body: React.FC<CardBodyProps>;
  Footer: React.FC<CardFooterProps>;
} = ({
  title,
  extra,
  bordered = true,
  hoverable = false,
  className = '',
  style = {},
  children,
}) => {
  const getCardClass = () => {
    const classes = [styles.card];
    if (bordered) {
      classes.push(styles.cardBordered);
    }
    if (hoverable) {
      classes.push(styles.cardHoverable);
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  // \u68C0\u67E5\u662F\u5426\u5305\u542B Card.Header \u6216 Card.Body
  let hasHeader = false;
  let hasBody = false;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === Card.Header) {
        hasHeader = true;
      } else if (child.type === Card.Body) {
        hasBody = true;
      }
    }
  });

  return (
    <div className={getCardClass()} style={style}>
      {(title || extra) && !hasHeader && (
        <div className={styles.cardHeader}>
          {title && <div className={styles.cardTitle}>{title}</div>}
          {extra && <div className={styles.cardExtra}>{extra}</div>}
        </div>
      )}
      {!hasBody && <div className={styles.cardBody}>{children}</div>}
      {hasBody && children}
    </div>
  );
};

Card.Header = ({ title, extra, className = '', style = {} }) => {
  return (
    <div className={\`\${styles.cardHeader} \${className}\`} style={style}>
      {title && <div className={styles.cardTitle}>{title}</div>}
      {extra && <div className={styles.cardExtra}>{extra}</div>}
    </div>
  );
};

Card.Body = ({ className = '', style = {}, children }) => {
  return (
    <div className={\`\${styles.cardBody} \${className}\`} style={style}>
      {children}
    </div>
  );
};

Card.Footer = ({ className = '', style = {}, children }) => {
  return (
    <div className={\`\${styles.cardFooter} \${className}\`} style={style}>
      {children}
    </div>
  );
};

export default Card;
`;
    },
    60018: function (N, f) {
      f.Z = `import React, { useState } from 'react';
import styles from './Image.module.css';

interface ImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  lazy?: boolean;
  placeholder?: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt = '', 
  width, 
  height, 
  fit = 'fill', 
  lazy = false, 
  placeholder, 
  fallback, 
  className = '', 
  style = {} 
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  const getImageStyle = () => {
    return {
      width,
      height,
      objectFit: fit,
      ...style
    };
  };

  const defaultFallback = (
    <div className={styles.imageFallback} style={{ width, height }}>
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="4" fill="#F5F5F5"/>
        <path d="M12 16L24 28L36 16" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 24H36" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );

  // \u6A21\u62DF\u9519\u8BEF\u60C5\u51B5\uFF0C\u7528\u4E8E\u6D4B\u8BD5
  if (src === 'invalid-url') {
    return fallback || defaultFallback;
  }

  if (error) {
    return fallback || defaultFallback;
  }

  if (loading && placeholder) {
    return (
      <div className={\`\${styles.imagePlaceholder} \${className}\`} style={{ width, height }}>
        {placeholder}
      </div>
    );
  }

  return (
    <img
      className={\`\${styles.image} \${className}\`}
      src={src}
      alt={alt}
      style={getImageStyle()}
      onLoad={handleLoad}
      onError={handleError}
      loading={lazy ? 'lazy' : 'eager'}
    />
  );
};

export default Image;`;
    },
  },
]);
