'use strict';
(self.webpackChunkbrickd = self.webpackChunkbrickd || []).push([
  [154],
  {
    90154: function (G, f, n) {
      n.r(f),
        n.d(f, {
          default: function () {
            return T;
          },
        });
      var v = n(26068),
        i = n.n(v),
        h = n(25298),
        C = n.n(h),
        y = n(17069),
        M = n.n(y),
        p = n(82092),
        u = n.n(p),
        j = n(31759),
        I = n.n(j),
        E = n(75271),
        S = n(38751),
        l = {
          messageContainer: 'juKaKL3bBTUeVLc1F9iE',
          message: 'hqwwBljYzgQ0r6jJ1eUl',
          visible: '_xHy0EDOP0gXEl7V2Phq',
          messageContent: 'IyIn9MsBSvcGcc2LvEJZ',
          messageClose: 'MO6_W8pFp9o5C4sKSTRm',
          messageSuccess: 'MVxP585m6j0GS5LL7dEt',
          messageError: 'zoWSqgIozUnlTRsGc2kS',
          messageInfo: 'Wm0jFT8y5wElX80llb8r',
          messageWarning: 'bCBB0ysUhyENCXdG_IGO',
          'slide-in': 'aG6_snURPkM4yjgSX1dl',
          'slide-out': 'P6gEOSJtLmodkggpTZpw',
        },
        g = n(52676),
        x = function (t) {
          var e = t.messages,
            s = t.onClose;
          return (0, g.jsx)('div', {
            className: l.messageContainer,
            children: e.map(function (a) {
              var o = a.id,
                c = a.config,
                m = c.type || 'info',
                P = 'message'.concat(m.charAt(0).toUpperCase() + m.slice(1));
              return (0, g.jsxs)(
                'div',
                {
                  className: ''
                    .concat(l.message, ' ')
                    .concat(l.visible, ' ')
                    .concat(l[P]),
                  children: [
                    (0, g.jsx)('div', {
                      className: l.messageContent,
                      children: c.content,
                    }),
                    c.showClose !== !1 &&
                      (0, g.jsx)('button', {
                        type: 'button',
                        className: l.messageClose,
                        onClick: function () {
                          return s(o);
                        },
                        'aria-label': 'Close',
                        children: '\xD7',
                      }),
                  ],
                },
                o,
              );
            }),
          });
        };
      function d(r) {
        return (
          I()(r) === 'object' &&
          r !== null &&
          !E.isValidElement(r) &&
          'content' in r
        );
      }
      var k = (function () {
          function r() {
            C()(this, r),
              u()(this, 'messages', []),
              u()(this, 'containerRef', null),
              u()(this, 'root', null),
              u()(this, 'messageInstances', new Map());
          }
          return (
            M()(r, [
              {
                key: 'createContainer',
                value: function () {
                  if (!this.containerRef) {
                    var e = document.createElement('div');
                    document.body.appendChild(e),
                      (this.containerRef = e),
                      (this.root = (0, S.createRoot)(e));
                  }
                  return this.containerRef;
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this;
                  this.createContainer(),
                    this.root &&
                      this.root.render(
                        (0, g.jsx)(x, {
                          messages: this.messages,
                          onClose: function (a) {
                            return e.removeMessage(a);
                          },
                        }),
                      );
                },
              },
              {
                key: 'generateId',
                value: function () {
                  return 'message_'
                    .concat(Date.now(), '_')
                    .concat(Math.random().toString(36).substr(2, 9));
                },
              },
              {
                key: 'addMessage',
                value: function (e) {
                  var s = this,
                    a = this.generateId();
                  if (
                    (this.messages.push({ id: a, config: e }),
                    this.render(),
                    e.duration !== 0)
                  ) {
                    var o = setTimeout(function () {
                      s.removeMessage(a);
                    }, e.duration || 3e3);
                    this.messageInstances.set(a, o);
                  }
                  return {
                    id: a,
                    close: function () {
                      return s.removeMessage(a);
                    },
                  };
                },
              },
              {
                key: 'removeMessage',
                value: function (e) {
                  var s = this.messageInstances.get(e);
                  s && (clearTimeout(s), this.messageInstances.delete(e));
                  var a = this.messages.findIndex(function (c) {
                    return c.id === e;
                  });
                  if (a !== -1) {
                    var o = this.messages[a];
                    this.messages.splice(a, 1),
                      this.render(),
                      o.config.onClose && o.config.onClose();
                  }
                },
              },
              {
                key: 'success',
                value: function (e) {
                  var s = d(e) ? e : { content: e };
                  return this.addMessage(
                    i()(i()({}, s), {}, { type: 'success' }),
                  );
                },
              },
              {
                key: 'error',
                value: function (e) {
                  var s = d(e) ? e : { content: e };
                  return this.addMessage(
                    i()(i()({}, s), {}, { type: 'error' }),
                  );
                },
              },
              {
                key: 'info',
                value: function (e) {
                  var s = d(e) ? e : { content: e };
                  return this.addMessage(i()(i()({}, s), {}, { type: 'info' }));
                },
              },
              {
                key: 'warning',
                value: function (e) {
                  var s = d(e) ? e : { content: e };
                  return this.addMessage(
                    i()(i()({}, s), {}, { type: 'warning' }),
                  );
                },
              },
              {
                key: 'closeAll',
                value: function () {
                  this.messageInstances.forEach(function (e) {
                    return clearTimeout(e);
                  }),
                    this.messageInstances.clear(),
                    (this.messages = []),
                    this.render();
                },
              },
            ]),
            r
          );
        })(),
        R = new k(),
        T = R;
    },
  },
]);
