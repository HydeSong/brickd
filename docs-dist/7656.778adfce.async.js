(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [7656],
  {
    97656: function (e, u, t) {
      'use strict';
      t.r(u),
        t.d(u, {
          default: function () {
            return C;
          },
        });
      var d = t(26068),
        l = t.n(d),
        n = t(67825),
        o = t.n(n),
        i = t(75271),
        s = {
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
        a = t(52676),
        f = [
          'type',
          'size',
          'disabled',
          'children',
          'onClick',
          'className',
          'style',
          'htmlType',
        ],
        g = function (r) {
          var h = r.type,
            M = h === void 0 ? 'default' : h,
            v = r.size,
            W = v === void 0 ? 'default' : v,
            b = r.disabled,
            p = b === void 0 ? !1 : b,
            z = r.children,
            y = r.onClick,
            j = r.className,
            x = j === void 0 ? '' : j,
            k = r.style,
            N = k === void 0 ? {} : k,
            m = r.htmlType,
            P = m === void 0 ? 'button' : m,
            B = o()(r, f),
            O = function () {
              var c = [s.button];
              return (
                c.push(s[M]),
                c.push(s[W]),
                p && c.push(s.disabled),
                x && c.push(x),
                c.join(' ')
              );
            },
            D = function () {
              !p && y && y();
            };
          return (0, a.jsx)(
            'button',
            l()(
              l()(
                {
                  type:
                    P === 'submit'
                      ? 'submit'
                      : P === 'reset'
                      ? 'reset'
                      : 'button',
                  className: O(),
                  style: N,
                  disabled: p,
                  onClick: D,
                },
                B,
              ),
              {},
              { children: z },
            ),
          );
        },
        C = g;
    },
    67825: function (e, u, t) {
      var d = t(64382);
      function l(n, o) {
        if (n == null) return {};
        var i = d(n, o),
          s,
          a;
        if (Object.getOwnPropertySymbols) {
          var f = Object.getOwnPropertySymbols(n);
          for (a = 0; a < f.length; a++)
            (s = f[a]),
              !(o.indexOf(s) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(n, s) &&
                (i[s] = n[s]);
        }
        return i;
      }
      (e.exports = l),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    64382: function (e) {
      function u(t, d) {
        if (t == null) return {};
        var l = {},
          n = Object.keys(t),
          o,
          i;
        for (i = 0; i < n.length; i++)
          (o = n[i]), !(d.indexOf(o) >= 0) && (l[o] = t[o]);
        return l;
      }
      (e.exports = u),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  },
]);
