'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [5430],
  {
    65430: function (z, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return f;
          },
        });
      var l = {
          tag: '_4GPPdpOw0hH2d25rYpc',
          'tag-small': 'kPSfhY5A1EhBdBBNamGf',
          'tag-default': 'jPq06cR9tRYByvpN8dr4',
          'tag-large': 'ZQZts5J90wnbsdTBWhNY',
          'tag-filled': 'FzA6mCYVoBkYQMdCQV5o',
          'tag-outlined': 'zMfPKtXPaFsO_jQw5Izn',
          'tag-light': 'pQozI9uO44gBcPop5mfo',
          'tag-disabled': 'iSobquX4vFIWPqgflEpY',
          tagIcon: 'h53D7X6JPjI91iEbIOaU',
          tagContent: 'BxFitZggSJoxcbDNQrow',
          tagClose: 'j3lXNuy_SMsJQJRgHaxV',
          'tag-red': 'I4oxgX2xSzE5VLE4E_ip',
          'tag-orange': 'q2KvBCjf7sZaoR8qWwj8',
          'tag-green': 'Ehbhb_XeHSgJ3TTTiL0R',
          'tag-blue': 'lJWNzKbRcRQ0MV00eRaZ',
          'tag-purple': 'pQEv29Dx7uMKMjZfBzJr',
        },
        t = e(52676),
        b = function (a) {
          var h = a.children,
            o = a.color,
            i = a.icon,
            d = a.closable,
            v = d === void 0 ? !1 : d,
            c = a.onClose,
            g = a.disabled,
            s = g === void 0 ? !1 : g,
            r = a.size,
            p = r === void 0 ? 'default' : r,
            u = a.variant,
            C = u === void 0 ? 'filled' : u,
            m = a.className,
            j = a.style,
            N = function (B) {
              B.stopPropagation(), !s && c && c();
            },
            x = [
              l.tag,
              l['tag-'.concat(p)],
              l['tag-'.concat(C)],
              o ? l['tag-'.concat(o)] : void 0,
              s ? l['tag-disabled'] : void 0,
              m,
            ]
              .filter(Boolean)
              .join(' ');
          return (0, t.jsxs)('span', {
            className: x,
            style: j,
            children: [
              i && (0, t.jsx)('span', { className: l.tagIcon, children: i }),
              (0, t.jsx)('span', { className: l.tagContent, children: h }),
              v &&
                !s &&
                (0, t.jsx)('button', {
                  type: 'button',
                  className: l.tagClose,
                  onClick: N,
                  'aria-label': 'Close',
                  children: '\xD7',
                }),
            ],
          });
        },
        f = b;
    },
  },
]);
