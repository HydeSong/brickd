'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [6821],
  {
    36821: function (j, l, s) {
      s.r(l),
        s.d(l, {
          default: function () {
            return h;
          },
        });
      var i = s(75271),
        r = {
          breadcrumb: 'G5cSIbyRa4HsYZxCY9SX',
          list: 'CCxqTTn3OISqXw1gUHOt',
          item: 'l36u52QX80U6qIcomfAn',
          link: 'rXzYnz9a8Qs0tuFLEF08',
          active: 'LgnPYuviWLce8doGvsGp',
          separator: 'HVoawHf8vlsWyzJkF_Rs',
        },
        c = s(52676),
        o = function (a) {
          var n = a.href,
            t = a.className,
            e = a.children;
          return n
            ? (0, c.jsx)('li', {
                className: ''.concat(r.item, ' ').concat(t || ''),
                children: (0, c.jsx)('a', {
                  href: n,
                  className: r.link,
                  children: e,
                }),
              })
            : (0, c.jsx)('li', {
                className: ''
                  .concat(r.item, ' ')
                  .concat(r.active, ' ')
                  .concat(t || ''),
                children: e,
              });
        },
        m = function (a) {
          var n = a.className,
            t = a.style,
            e = a.separator,
            b = e === void 0 ? '/' : e,
            f = a.children,
            d = i.Children.toArray(f);
          return (0, c.jsx)('nav', {
            className: ''.concat(r.breadcrumb, ' ').concat(n || ''),
            style: t,
            children: (0, c.jsx)('ol', {
              className: r.list,
              children: d.map(function (N, u) {
                return (0,
                c.jsxs)(i.Fragment, { children: [N, u < d.length - 1 && (0, c.jsx)('li', { className: r.separator, children: b })] }, u);
              }),
            }),
          });
        };
      m.Item = o;
      var h = m;
    },
  },
]);
