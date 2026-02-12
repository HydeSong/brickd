'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [7551],
  {
    47551: function (ae, b, r) {
      r.r(b),
        r.d(b, {
          default: function () {
            return X;
          },
        });
      var z = r(90228),
        x = r.n(z),
        A = r(87999),
        B = r.n(A),
        D = r(26068),
        v = r.n(D),
        K = r(48305),
        Z = r.n(K),
        C = r(75271),
        s = {
          upload: 'LQUoMYNUoLsPQLNxjTgJ',
          uploadInput: 'nZQ1ynCo0ZgeQMXrXzM9',
          uploadTrigger: 'NK5VCx1lgfgBQoHnJWMc',
          disabled: 'QUSQ5r43364C0mAshgXb',
          uploadIcon: 'lf8AlLBPe6oLi0QVz90t',
          uploadList: 'nz5Kr01X3BQo3RjfDgm8',
          uploadListItem: 'NrKJoZgy6AR07bZmhYdj',
          uploadListItemInfo: 'uPDez2Tx8RD4jqvy2bAw',
          uploadListItemName: 'mgUN54OMQeIT5_MjcZGz',
          uploadListItemProgress: 'rDQZZGOuzfIwbRqlzQXg',
          uploadListItemProgressBar: 'KKrvtk6h8UrsdKEAU5T9',
          uploadListItemError: 'UBCgMfD0i4Ya3by6rmNT',
          uploadListItemRemove: 'fkVtMIaKHkf2JvNayfoo',
        },
        e = r(52676),
        $ = function (n) {
          var y = n.multiple,
            G = y === void 0 ? !1 : y,
            U = n.accept,
            J = U === void 0 ? '*' : U,
            R = n.maxCount,
            k = n.disabled,
            m = k === void 0 ? !1 : k,
            Q = n.beforeUpload,
            c = n.onChange,
            L = n.onProgress,
            j = n.onSuccess,
            I = n.onRemove,
            f = n.fileList,
            F = n.defaultFileList,
            w = F === void 0 ? [] : F,
            E = n.className,
            H = n.style,
            O = n.children,
            V = (0, C.useState)(w),
            T = Z()(V, 2),
            Y = T[0],
            M = T[1],
            h = (0, C.useRef)(null),
            g = f !== void 0 ? f : Y,
            W = function () {
              var a;
              m || (a = h.current) === null || a === void 0 || a.click();
            },
            P = function (a) {
              var d = g.map(function (t) {
                return t.uid === a.uid ? a : t;
              });
              f === void 0 && M(d), c == null || c(a, d);
            },
            q = function (a, d) {
              var t = 0,
                p = setInterval(function () {
                  if (((t += 10), t > 100)) {
                    clearInterval(p);
                    var o = v()(
                      v()({}, d),
                      {},
                      {
                        status: 'done',
                        percent: 100,
                        url: URL.createObjectURL(a),
                      },
                    );
                    P(o), j == null || j({}, o);
                    return;
                  }
                  var u = v()(v()({}, d), {}, { percent: t });
                  P(u), L == null || L(t, u);
                }, 200);
            },
            _ = (function () {
              var i = B()(
                x()().mark(function a(d) {
                  var t, p, o, u, N, S;
                  return x()().wrap(function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          if (((t = d.target.files), t)) {
                            l.next = 3;
                            break;
                          }
                          return l.abrupt('return');
                        case 3:
                          (p = []), (o = 0);
                        case 5:
                          if (!(o < t.length)) {
                            l.next = 21;
                            break;
                          }
                          if (
                            ((u = t[o]),
                            (N = {
                              uid: ''.concat(Date.now(), '_').concat(o),
                              name: u.name,
                              status: 'uploading',
                              percent: 0,
                            }),
                            !Q)
                          ) {
                            l.next = 14;
                            break;
                          }
                          return (l.next = 11), Q(u);
                        case 11:
                          if (((S = l.sent), S)) {
                            l.next = 14;
                            break;
                          }
                          return l.abrupt('continue', 18);
                        case 14:
                          if (!(R && g.length + p.length >= R)) {
                            l.next = 16;
                            break;
                          }
                          return l.abrupt('break', 21);
                        case 16:
                          p.push(N), q(u, N);
                        case 18:
                          o++, (l.next = 5);
                          break;
                        case 21:
                          h.current && (h.current.value = '');
                        case 22:
                        case 'end':
                          return l.stop();
                      }
                  }, a);
                }),
              );
              return function (d) {
                return i.apply(this, arguments);
              };
            })(),
            ee = function (a) {
              I == null || I(a);
              var d = g.filter(function (t) {
                return t.uid !== a.uid;
              });
              f === void 0 && M(d), c == null || c(a, d);
            };
          return (0, e.jsxs)('div', {
            className: ''.concat(s.upload, ' ').concat(E || ''),
            style: H,
            children: [
              (0, e.jsx)('input', {
                ref: h,
                type: 'file',
                className: s.uploadInput,
                multiple: G,
                accept: J,
                onChange: _,
                disabled: m,
                'data-testid': 'upload-input',
              }),
              (0, e.jsx)('div', {
                className: ''
                  .concat(s.uploadTrigger, ' ')
                  .concat(m ? s.disabled : ''),
                onClick: W,
                children:
                  O ||
                  (0, e.jsxs)('div', {
                    className: s.uploadIcon,
                    children: [
                      (0, e.jsxs)('svg', {
                        width: '24',
                        height: '24',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        stroke: 'currentColor',
                        strokeWidth: '2',
                        children: [
                          (0, e.jsx)('path', {
                            d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4',
                          }),
                          (0, e.jsx)('polyline', {
                            points: '7 10 12 15 17 10',
                          }),
                          (0, e.jsx)('line', {
                            x1: '12',
                            y1: '15',
                            x2: '12',
                            y2: '3',
                          }),
                        ],
                      }),
                      (0, e.jsx)('span', { children: 'Click to Upload' }),
                    ],
                  }),
              }),
              (0, e.jsx)('div', {
                className: s.uploadList,
                children: g.map(function (i) {
                  return (0, e.jsxs)(
                    'div',
                    {
                      className: s.uploadListItem,
                      children: [
                        (0, e.jsxs)('div', {
                          className: s.uploadListItemInfo,
                          children: [
                            (0, e.jsx)('span', {
                              className: s.uploadListItemName,
                              children: i.name,
                            }),
                            i.status === 'uploading' &&
                              (0, e.jsx)('div', {
                                className: s.uploadListItemProgress,
                                children: (0, e.jsx)('div', {
                                  className: s.uploadListItemProgressBar,
                                  style: {
                                    width: ''.concat(i.percent || 0, '%'),
                                  },
                                }),
                              }),
                            i.status === 'error' &&
                              (0, e.jsx)('span', {
                                className: s.uploadListItemError,
                                children: 'Upload failed',
                              }),
                          ],
                        }),
                        (0, e.jsx)('button', {
                          type: 'button',
                          className: s.uploadListItemRemove,
                          onClick: function () {
                            return ee(i);
                          },
                          disabled: m,
                          children: '\xD7',
                        }),
                      ],
                    },
                    i.uid,
                  );
                }),
              }),
            ],
          });
        },
        X = $;
    },
  },
]);
