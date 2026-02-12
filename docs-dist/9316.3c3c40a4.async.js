'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [9316],
  {
    49316: function (z, i, a) {
      a.r(i),
        a.d(i, {
          FloatButton: function () {
            return e;
          },
          default: function () {
            return F;
          },
        });
      var B = a(26068),
        n = a.n(B),
        I = a(75271),
        l = {
          floatButton: 'IaI14jj1AVYdXyv__rUa',
          small: 'MAWC9ULf9n0hE7XVgYXx',
          default: 'etXi48MIzcv0TxaZGqsU',
          large: 'L8LksKUrCMkQFAI_o5n_',
          primary: 'xDVUJy4XEsA7ySj6O5gx',
          disabled: 'z3t2lIE64Mx7sBqhJTCY',
          'default-style': 'xM9ZhBi1JkVyX4RMBQFM',
          circle: 'v9rkNBW047kqiFECjXFZ',
          square: 'ZsdJdB5K2tUFXYi1M8WQ',
        },
        C = a(52676),
        e = function (t) {
          var b = t.icon,
            d = t.onClick,
            u = t.position,
            k = u === void 0 ? { bottom: '24px', right: '24px' } : u,
            r = t.size,
            m = r === void 0 ? 'default' : r,
            c = t.type,
            j = c === void 0 ? 'primary' : c,
            v = t.shape,
            x = v === void 0 ? 'circle' : v,
            f = t.className,
            h = f === void 0 ? '' : f,
            p = t.style,
            M = p === void 0 ? {} : p,
            y = t.disabled,
            o = y === void 0 ? !1 : y,
            X = function () {
              var s = [l.floatButton];
              return (
                s.push(l[m]),
                s.push(l[j]),
                s.push(l[x]),
                o && s.push(l.disabled),
                h && s.push(h),
                s.join(' ')
              );
            },
            $ = function () {
              !o && d && d();
            },
            g = n()(n()({}, M), k);
          return (0, C.jsx)('button', {
            type: 'button',
            className: X(),
            style: g,
            onClick: $,
            disabled: o,
            children: b,
          });
        },
        F = e;
    },
  },
]);
