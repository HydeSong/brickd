(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [9131],
  {
    39131: function (r, l, t) {
      'use strict';
      t.r(l),
        t.d(l, {
          Input: function () {
            return v;
          },
          default: function () {
            return P;
          },
        });
      var f = t(26068),
        o = t.n(f),
        n = t(67825),
        a = t.n(n),
        u = t(75271),
        e = {
          inputWrapper: 'aeO8iUqYf2cyb3bfWki5',
          input: 'BakRhePQfjoEVv1geY1v',
          small: 'OHJMg6rMHtgUEGiVSRQR',
          default: 'R64XD51QQI9QVKpW3k40',
          large: 'KpOIrPmc8M0j2HxU8tZ2',
          error: 'gfiIlU_0ZzQeOFb_6UMV',
          success: 'OuLgn9tyUG4TqtunVqy4',
          warning: 'PAEQtGcHz50Sqh2RZw34',
          prefix: 'dUv34UrxtuQfiKc6Uja8',
          suffix: 'hAqrQw26GUxGljAsNmP3',
          inputWithPrefix: 'vR57NaJLN8Y6rA6osFdw',
          inputWithSuffix: 'FBftYT_DockdV6_7vI3W',
          inputWithBoth: 'T0n3GlCETcTuFr8jSRcl',
          inputGroup: 'XRKhf9hYVoEPe3cm_dua',
          searchInput: '_nYLKrncjYsGhtYL90oc',
          searchIcon: 'bLo0nOw2vvohw3ilyFFJ',
          textarea: 'OhxHdvSF1Fc1UBQkFtMA',
          textareaWithCounter: 'LBg7PdtqQgM36X_deIvA',
          counter: 'QErUkaFpTkPfKphg96z9',
          label: 'nEC4Pv8dJBkya_EiUzTn',
          help: 'FzOr_HF0_SYVoUGePvYm',
          fullWidth: 'S7FCrN5wKqoIeZcxm0fU',
          inline: 'JyaazsuD3dIxajZZufnb',
          loading: 'UOEwN6AHewE0YSjJRDAS',
          spin: 'xJIekVk8EqfukvFt3zko',
        },
        i = t(52676),
        p = [
          'size',
          'disabled',
          'readOnly',
          'error',
          'prefix',
          'suffix',
          'className',
          'style',
        ],
        v = function (s) {
          var x = s.size,
            c = x === void 0 ? 'default' : x,
            h = s.disabled,
            U = h === void 0 ? !1 : h,
            j = s.readOnly,
            k = j === void 0 ? !1 : j,
            y = s.error,
            m = y === void 0 ? !1 : y,
            b = s.prefix,
            O = s.suffix,
            g = s.className,
            W = g === void 0 ? '' : g,
            I = s.style,
            E = I === void 0 ? {} : I,
            F = a()(s, p),
            N = function () {
              var d = [e.inputElement];
              return (
                c !== 'default' &&
                  d.push(
                    e[
                      'inputSize'.concat(c.charAt(0).toUpperCase() + c.slice(1))
                    ],
                  ),
                m && d.push(e.inputError),
                d.join(' ')
              );
            };
          return (0, i.jsx)('div', {
            className: ''.concat(e.input, ' ').concat(W),
            style: E,
            children: (0, i.jsxs)('div', {
              className: e.inputWrapper,
              children: [
                b &&
                  (0, i.jsx)('span', { className: e.inputPrefix, children: b }),
                (0, i.jsx)(
                  'input',
                  o()({ className: N(), disabled: U, readOnly: k }, F),
                ),
                O &&
                  (0, i.jsx)('span', { className: e.inputSuffix, children: O }),
              ],
            }),
          });
        },
        P = v;
    },
    67825: function (r, l, t) {
      var f = t(64382);
      function o(n, a) {
        if (n == null) return {};
        var u = f(n, a),
          e,
          i;
        if (Object.getOwnPropertySymbols) {
          var p = Object.getOwnPropertySymbols(n);
          for (i = 0; i < p.length; i++)
            (e = p[i]),
              !(a.indexOf(e) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(n, e) &&
                (u[e] = n[e]);
        }
        return u;
      }
      (r.exports = o),
        (r.exports.__esModule = !0),
        (r.exports.default = r.exports);
    },
    64382: function (r) {
      function l(t, f) {
        if (t == null) return {};
        var o = {},
          n = Object.keys(t),
          a,
          u;
        for (u = 0; u < n.length; u++)
          (a = n[u]), !(f.indexOf(a) >= 0) && (o[a] = t[a]);
        return o;
      }
      (r.exports = l),
        (r.exports.__esModule = !0),
        (r.exports.default = r.exports);
    },
  },
]);
