(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[6835,7656],{8772:function(M,B,e){"use strict";var v;e.r(B),e.d(B,{demos:function(){return R}});var g=e(90228),o=e.n(g),D=e(48305),h=e.n(D),E=e(87999),y=e.n(E),c=e(75271),x=e(97656),R={"modal-demo-0":{component:c.memo(c.lazy(y()(o()().mark(function u(){var l,a,s,r,i,n,m,p;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=function(){var b=s(!1),f=h()(b,2),C=f[0],d=f[1];return a.createElement("div",null,a.createElement(m,{type:"primary",onClick:function(){return d(!0)}},"\u6253\u5F00\u5BF9\u8BDD\u6846"),a.createElement(i,{visible:C,title:"\u57FA\u672C\u5BF9\u8BDD\u6846",onOk:function(){return d(!1)},onCancel:function(){return d(!1)}},a.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u57FA\u672C\u7684\u5BF9\u8BDD\u6846\u5185\u5BB9\u3002"),a.createElement("p",null,"\u53EF\u4EE5\u5728\u6B64\u6DFB\u52A0\u66F4\u591A\u5185\u5BB9\u3002")))},t.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return l=t.sent,a=l.default,s=l.useState,t.next=8,e.e(4338).then(e.bind(e,4338));case 8:return r=t.sent,i=r.default,t.next=12,Promise.resolve().then(e.bind(e,97656));case 12:return n=t.sent,m=n.default,t.abrupt("return",{default:p});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"modal-demo-0",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalBasicDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u5BF9\u8BDD\u6846
      </Button>
      <Modal
        visible={visible}
        title="\u57FA\u672C\u5BF9\u8BDD\u6846"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>\u8FD9\u662F\u4E00\u4E2A\u57FA\u672C\u7684\u5BF9\u8BDD\u6846\u5185\u5BB9\u3002</p>
        <p>\u53EF\u4EE5\u5728\u6B64\u6DFB\u52A0\u66F4\u591A\u5185\u5BB9\u3002</p>
      </Modal>
    </div>
  );
}

export default ModalBasicDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":x,react:v||(v=e.t(c,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":x},renderOpts:{compile:function(){var u=y()(o()().mark(function a(){var s,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,r));case 3:case"end":return n.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"modal-demo-1":{component:c.memo(c.lazy(y()(o()().mark(function u(){var l,a,s,r,i,n,m,p;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=function(){var b=s(!1),f=h()(b,2),C=f[0],d=f[1];return a.createElement("div",null,a.createElement(m,{type:"primary",onClick:function(){return d(!0)}},"\u6253\u5F00\u5BBD\u5BF9\u8BDD\u6846"),a.createElement(i,{visible:C,title:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6\u5BF9\u8BDD\u6846",width:800,onOk:function(){return d(!1)},onCancel:function(){return d(!1)}},a.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5BBD\u5EA6\u4E3A800px\u7684\u5BF9\u8BDD\u6846\u3002"),a.createElement("p",null,"\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8BBE\u7F6E\u4E0D\u540C\u7684\u5BBD\u5EA6\u503C\u3002")))},t.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return l=t.sent,a=l.default,s=l.useState,t.next=8,e.e(4338).then(e.bind(e,4338));case 8:return r=t.sent,i=r.default,t.next=12,Promise.resolve().then(e.bind(e,97656));case 12:return n=t.sent,m=n.default,t.abrupt("return",{default:p});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"modal-demo-1",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalCustomWidthDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u5BBD\u5BF9\u8BDD\u6846
      </Button>
      <Modal
        visible={visible}
        title="\u81EA\u5B9A\u4E49\u5BBD\u5EA6\u5BF9\u8BDD\u6846"
        width={800}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>\u8FD9\u662F\u4E00\u4E2A\u5BBD\u5EA6\u4E3A800px\u7684\u5BF9\u8BDD\u6846\u3002</p>
        <p>\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8BBE\u7F6E\u4E0D\u540C\u7684\u5BBD\u5EA6\u503C\u3002</p>
      </Modal>
    </div>
  );
}

export default ModalCustomWidthDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":x,react:v||(v=e.t(c,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":x},renderOpts:{compile:function(){var u=y()(o()().mark(function a(){var s,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,r));case 3:case"end":return n.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"modal-demo-2":{component:c.memo(c.lazy(y()(o()().mark(function u(){var l,a,s,r,i,n,m,p;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=function(){var b=s(!1),f=h()(b,2),C=f[0],d=f[1];return a.createElement("div",null,a.createElement(m,{type:"primary",onClick:function(){return d(!0)}},"\u6253\u5F00\u65E0\u906E\u7F69\u5BF9\u8BDD\u6846"),a.createElement(i,{visible:C,title:"\u65E0\u906E\u7F69\u5BF9\u8BDD\u6846",mask:!1,onOk:function(){return d(!1)},onCancel:function(){return d(!1)}},a.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u906E\u7F69\u5C42\u7684\u5BF9\u8BDD\u6846\u3002")))},t.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return l=t.sent,a=l.default,s=l.useState,t.next=8,e.e(4338).then(e.bind(e,4338));case 8:return r=t.sent,i=r.default,t.next=12,Promise.resolve().then(e.bind(e,97656));case 12:return n=t.sent,m=n.default,t.abrupt("return",{default:p});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"modal-demo-2",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalNoMaskDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u65E0\u906E\u7F69\u5BF9\u8BDD\u6846
      </Button>
      <Modal
        visible={visible}
        title="\u65E0\u906E\u7F69\u5BF9\u8BDD\u6846"
        mask={false}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u906E\u7F69\u5C42\u7684\u5BF9\u8BDD\u6846\u3002</p>
      </Modal>
    </div>
  );
}

export default ModalNoMaskDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":x,react:v||(v=e.t(c,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":x},renderOpts:{compile:function(){var u=y()(o()().mark(function a(){var s,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,r));case 3:case"end":return n.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"modal-demo-3":{component:c.memo(c.lazy(y()(o()().mark(function u(){var l,a,s,r,i,n,m,p;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=function(){var b=s(!1),f=h()(b,2),C=f[0],d=f[1];return a.createElement("div",null,a.createElement(m,{type:"primary",onClick:function(){return d(!0)}},"\u6253\u5F00\u906E\u7F69\u4E0D\u53EF\u70B9\u51FB\u5BF9\u8BDD\u6846"),a.createElement(i,{visible:C,title:"\u906E\u7F69\u4E0D\u53EF\u70B9\u51FB\u5BF9\u8BDD\u6846",maskClosable:!1,onOk:function(){return d(!1)},onCancel:function(){return d(!1)}},a.createElement("p",null,"\u70B9\u51FB\u906E\u7F69\u5C42\u4E0D\u4F1A\u5173\u95ED\u6B64\u5BF9\u8BDD\u6846\u3002"),a.createElement("p",null,"\u53EA\u80FD\u901A\u8FC7\u70B9\u51FB\u6309\u94AE\u6216\u5173\u95ED\u56FE\u6807\u5173\u95ED\u3002")))},t.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return l=t.sent,a=l.default,s=l.useState,t.next=8,e.e(4338).then(e.bind(e,4338));case 8:return r=t.sent,i=r.default,t.next=12,Promise.resolve().then(e.bind(e,97656));case 12:return n=t.sent,m=n.default,t.abrupt("return",{default:p});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"modal-demo-3",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalMaskNotClosableDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u906E\u7F69\u4E0D\u53EF\u70B9\u51FB\u5BF9\u8BDD\u6846
      </Button>
      <Modal
        visible={visible}
        title="\u906E\u7F69\u4E0D\u53EF\u70B9\u51FB\u5BF9\u8BDD\u6846"
        maskClosable={false}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>\u70B9\u51FB\u906E\u7F69\u5C42\u4E0D\u4F1A\u5173\u95ED\u6B64\u5BF9\u8BDD\u6846\u3002</p>
        <p>\u53EA\u80FD\u901A\u8FC7\u70B9\u51FB\u6309\u94AE\u6216\u5173\u95ED\u56FE\u6807\u5173\u95ED\u3002</p>
      </Modal>
    </div>
  );
}

export default ModalMaskNotClosableDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":x,react:v||(v=e.t(c,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":x},renderOpts:{compile:function(){var u=y()(o()().mark(function a(){var s,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,r));case 3:case"end":return n.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"modal-demo-4":{component:c.memo(c.lazy(y()(o()().mark(function u(){var l,a,s,r,i,n,m,p;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=function(){var b=s(!1),f=h()(b,2),C=f[0],d=f[1],I=s(!1),$=h()(I,2),V=$[0],L=$[1],P=function(){L(!0),setTimeout(function(){L(!1),d(!1)},2e3)};return a.createElement("div",null,a.createElement(m,{type:"primary",onClick:function(){return d(!0)}},"\u6253\u5F00\u5E26\u52A0\u8F7D\u72B6\u6001\u7684\u5BF9\u8BDD\u6846"),a.createElement(i,{visible:C,title:"\u5E26\u52A0\u8F7D\u72B6\u6001\u7684\u5BF9\u8BDD\u6846",confirmLoading:V,onOk:P,onCancel:function(){return d(!1)}},a.createElement("p",null,"\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u540E\uFF0C\u4F1A\u663E\u793A\u52A0\u8F7D\u72B6\u6001\u3002"),a.createElement("p",null,"\u6A21\u62DF\u5F02\u6B65\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u5BF9\u8BDD\u6846\u4F1A\u5173\u95ED\u3002")))},t.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return l=t.sent,a=l.default,s=l.useState,t.next=8,e.e(4338).then(e.bind(e,4338));case 8:return r=t.sent,i=r.default,t.next=12,Promise.resolve().then(e.bind(e,97656));case 12:return n=t.sent,m=n.default,t.abrupt("return",{default:p});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"modal-demo-4",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalConfirmLoadingDemo() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    // \u6A21\u62DF\u5F02\u6B65\u64CD\u4F5C
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u5E26\u52A0\u8F7D\u72B6\u6001\u7684\u5BF9\u8BDD\u6846
      </Button>
      <Modal
        visible={visible}
        title="\u5E26\u52A0\u8F7D\u72B6\u6001\u7684\u5BF9\u8BDD\u6846"
        confirmLoading={loading}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        <p>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u540E\uFF0C\u4F1A\u663E\u793A\u52A0\u8F7D\u72B6\u6001\u3002</p>
        <p>\u6A21\u62DF\u5F02\u6B65\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u5BF9\u8BDD\u6846\u4F1A\u5173\u95ED\u3002</p>
      </Modal>
    </div>
  );
}

export default ModalConfirmLoadingDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":x,react:v||(v=e.t(c,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":x},renderOpts:{compile:function(){var u=y()(o()().mark(function a(){var s,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,r));case 3:case"end":return n.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"modal-demo-5":{component:c.memo(c.lazy(y()(o()().mark(function u(){var l,a,s,r,i,n,m,p;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=function(){var b=s(!1),f=h()(b,2),C=f[0],d=f[1];return a.createElement("div",null,a.createElement(m,{type:"primary",onClick:function(){return d(!0)}},"\u6253\u5F00\u81EA\u5B9A\u4E49\u5E95\u90E8\u5BF9\u8BDD\u6846"),a.createElement(i,{visible:C,title:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u5BF9\u8BDD\u6846",footer:a.createElement(a.Fragment,null,a.createElement(m,{onClick:function(){return d(!1)}},"\u77E5\u9053\u4E86")),onCancel:function(){return d(!1)}},a.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u53EA\u6709\u4E00\u4E2A\u6309\u94AE\u7684\u5BF9\u8BDD\u6846\u3002")))},t.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return l=t.sent,a=l.default,s=l.useState,t.next=8,e.e(4338).then(e.bind(e,4338));case 8:return r=t.sent,i=r.default,t.next=12,Promise.resolve().then(e.bind(e,97656));case 12:return n=t.sent,m=n.default,t.abrupt("return",{default:p});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"modal-demo-5",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalCustomFooterDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u81EA\u5B9A\u4E49\u5E95\u90E8\u5BF9\u8BDD\u6846
      </Button>
      <Modal
        visible={visible}
        title="\u81EA\u5B9A\u4E49\u5E95\u90E8\u5BF9\u8BDD\u6846"
        footer={
          <>
            <Button onClick={() => setVisible(false)}>
              \u77E5\u9053\u4E86
            </Button>
          </>
        }
        onCancel={() => setVisible(false)}
      >
        <p>\u8FD9\u662F\u4E00\u4E2A\u53EA\u6709\u4E00\u4E2A\u6309\u94AE\u7684\u5BF9\u8BDD\u6846\u3002</p>
      </Modal>
    </div>
  );
}

export default ModalCustomFooterDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":x,react:v||(v=e.t(c,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":x},renderOpts:{compile:function(){var u=y()(o()().mark(function a(){var s,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,r));case 3:case"end":return n.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"modal-demo-6":{component:c.memo(c.lazy(y()(o()().mark(function u(){var l,a,s,r,i,n,m,p;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=function(){var b=s(!1),f=h()(b,2),C=f[0],d=f[1];return a.createElement("div",null,a.createElement(m,{type:"primary",onClick:function(){return d(!0)}},"\u6253\u5F00\u65E0\u6807\u9898\u5BF9\u8BDD\u6846"),a.createElement(i,{visible:C,onOk:function(){return d(!1)},onCancel:function(){return d(!1)}},a.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u6807\u9898\u7684\u5BF9\u8BDD\u6846\u3002")))},t.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return l=t.sent,a=l.default,s=l.useState,t.next=8,e.e(4338).then(e.bind(e,4338));case 8:return r=t.sent,i=r.default,t.next=12,Promise.resolve().then(e.bind(e,97656));case 12:return n=t.sent,m=n.default,t.abrupt("return",{default:p});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"modal-demo-6",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalNoTitleDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u65E0\u6807\u9898\u5BF9\u8BDD\u6846
      </Button>
      <Modal
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u6807\u9898\u7684\u5BF9\u8BDD\u6846\u3002</p>
      </Modal>
    </div>
  );
}

export default ModalNoTitleDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":x,react:v||(v=e.t(c,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":x},renderOpts:{compile:function(){var u=y()(o()().mark(function a(){var s,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,r));case 3:case"end":return n.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"modal-demo-7":{component:c.memo(c.lazy(y()(o()().mark(function u(){var l,a,s,r,i,n,m,p;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=function(){var b=s(!1),f=h()(b,2),C=f[0],d=f[1];return a.createElement("div",null,a.createElement(m,{type:"primary",onClick:function(){return d(!0)}},"\u6253\u5F00\u81EA\u5B9A\u4E49\u6837\u5F0F\u5BF9\u8BDD\u6846"),a.createElement(i,{visible:C,title:"\u81EA\u5B9A\u4E49\u6837\u5F0F\u5BF9\u8BDD\u6846",style:{borderRadius:"12px",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.2)"},onOk:function(){return d(!1)},onCancel:function(){return d(!1)}},a.createElement("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5E26\u6709\u81EA\u5B9A\u4E49\u6837\u5F0F\u7684\u5BF9\u8BDD\u6846\u3002"),a.createElement("p",null,"\u53EF\u4EE5\u901A\u8FC7style\u5C5E\u6027\u8BBE\u7F6E\u5404\u79CD\u6837\u5F0F\u3002")))},t.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return l=t.sent,a=l.default,s=l.useState,t.next=8,e.e(4338).then(e.bind(e,4338));case 8:return r=t.sent,i=r.default,t.next=12,Promise.resolve().then(e.bind(e,97656));case 12:return n=t.sent,m=n.default,t.abrupt("return",{default:p});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"modal-demo-7",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Modal from './index';
import Button from '../Button';

function ModalCustomStyleDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u81EA\u5B9A\u4E49\u6837\u5F0F\u5BF9\u8BDD\u6846
      </Button>
      <Modal
        visible={visible}
        title="\u81EA\u5B9A\u4E49\u6837\u5F0F\u5BF9\u8BDD\u6846"
        style={{
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        }}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>\u8FD9\u662F\u4E00\u4E2A\u5E26\u6709\u81EA\u5B9A\u4E49\u6837\u5F0F\u7684\u5BF9\u8BDD\u6846\u3002</p>
        <p>\u53EF\u4EE5\u901A\u8FC7style\u5C5E\u6027\u8BBE\u7F6E\u5404\u79CD\u6837\u5F0F\u3002</p>
      </Modal>
    </div>
  );
}

export default ModalCustomStyleDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":x,react:v||(v=e.t(c,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":x},renderOpts:{compile:function(){var u=y()(o()().mark(function a(){var s,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,r));case 3:case"end":return n.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}}}},97656:function(M,B,e){"use strict";e.r(B),e.d(B,{default:function(){return R}});var v=e(26068),g=e.n(v),o=e(67825),D=e.n(o),h=e(75271),E={button:"AyHMn4pptwgAqTM0zVxe",small:"mtziivfRPkRk_hPU_E8r",default:"CH0d2t1M7c0F2z59aWp3",large:"RH0k6h4jVrUDWtwndzsD",primary:"DPc0H8GPQ0xHQRlthXLJ",disabled:"tsWfJ_Ys0PMwNuyfv9ZE",dashed:"IioY1o_nDcycA39jljNu",text:"uXPLhO_cvecV4slBdUG9",link:"dEu3aIhxJygUwZzIAxyd"},y=e(52676),c=["type","size","disabled","children","onClick","className","style","htmlType"],x=function(l){var a=l.type,s=a===void 0?"default":a,r=l.size,i=r===void 0?"default":r,n=l.disabled,m=n===void 0?!1:n,p=l.children,O=l.onClick,t=l.className,S=t===void 0?"":t,b=l.style,f=b===void 0?{}:b,C=l.htmlType,d=C===void 0?"button":C,I=D()(l,c),$=function(){var P=[E.button];return P.push(E[s]),P.push(E[i]),m&&P.push(E.disabled),S&&P.push(S),P.join(" ")},V=function(){!m&&O&&O()};return(0,y.jsx)("button",g()(g()({type:d==="submit"?"submit":d==="reset"?"reset":"button",className:$(),style:f,disabled:m,onClick:V},I),{},{children:p}))},R=x},22306:function(M,B,e){"use strict";e.r(B),e.d(B,{texts:function(){return v}});const v=[{value:"\u5BF9\u8BDD\u6846\u7EC4\u4EF6\u7528\u4E8E\u663E\u793A\u91CD\u8981\u7684\u4FE1\u606F\u6216\u9700\u8981\u7528\u6237\u4EA4\u4E92\u7684\u5185\u5BB9\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6807\u9898\u3001\u5185\u5BB9\u3001\u5E95\u90E8\u6309\u94AE\u7B49\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:3},{value:"width",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846\u7684\u5BBD\u5EA6\u3002",paraId:1,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:4},{value:"mask={false}",paraId:2,tocIndex:4},{value:" \u7981\u7528\u906E\u7F69\u5C42\u3002",paraId:2,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:5},{value:"maskClosable={false}",paraId:3,tocIndex:5},{value:" \u8BBE\u7F6E\u906E\u7F69\u5C42\u70B9\u51FB\u4E0D\u5173\u95ED\u5BF9\u8BDD\u6846\u3002",paraId:3,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:6},{value:"confirmLoading",paraId:4,tocIndex:6},{value:" \u5C5E\u6027\u8BBE\u7F6E\u786E\u8BA4\u6309\u94AE\u7684\u52A0\u8F7D\u72B6\u6001\u3002",paraId:4,tocIndex:6},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:7},{value:"footer",paraId:5,tocIndex:7},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846\u7684\u5E95\u90E8\u6309\u94AE\u3002",paraId:5,tocIndex:7},{value:"\u901A\u8FC7\u4E0D\u8BBE\u7F6E ",paraId:6,tocIndex:8},{value:"title",paraId:6,tocIndex:8},{value:" \u5C5E\u6027\u521B\u5EFA\u65E0\u6807\u9898\u7684\u5BF9\u8BDD\u6846\u3002",paraId:6,tocIndex:8},{value:"\u901A\u8FC7 ",paraId:7,tocIndex:9},{value:"className",paraId:7,tocIndex:9},{value:" \u548C ",paraId:7,tocIndex:9},{value:"style",paraId:7,tocIndex:9},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846\u7684\u6837\u5F0F\u3002",paraId:7,tocIndex:9},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u8BF4\u660E",paraId:8,tocIndex:11},{value:"\u7C7B\u578B",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"visible",paraId:8,tocIndex:11},{value:"\u662F\u5426\u53EF\u89C1",paraId:8,tocIndex:11},{value:"boolean",paraId:8,tocIndex:11},{value:"false",paraId:8,tocIndex:11},{value:"onOk",paraId:8,tocIndex:11},{value:"\u786E\u5B9A\u6309\u94AE\u70B9\u51FB\u56DE\u8C03",paraId:8,tocIndex:11},{value:"() => void",paraId:8,tocIndex:11},{value:"-",paraId:8,tocIndex:11},{value:"onCancel",paraId:8,tocIndex:11},{value:"\u53D6\u6D88\u6309\u94AE\u70B9\u51FB\u56DE\u8C03",paraId:8,tocIndex:11},{value:"() => void",paraId:8,tocIndex:11},{value:"-",paraId:8,tocIndex:11},{value:"title",paraId:8,tocIndex:11},{value:"\u5BF9\u8BDD\u6846\u6807\u9898",paraId:8,tocIndex:11},{value:"React.ReactNode",paraId:8,tocIndex:11},{value:"-",paraId:8,tocIndex:11},{value:"children",paraId:8,tocIndex:11},{value:"\u5BF9\u8BDD\u6846\u5185\u5BB9",paraId:8,tocIndex:11},{value:"React.ReactNode",paraId:8,tocIndex:11},{value:"-",paraId:8,tocIndex:11},{value:"footer",paraId:8,tocIndex:11},{value:"\u5E95\u90E8\u6309\u94AE",paraId:8,tocIndex:11},{value:"React.ReactNode",paraId:8,tocIndex:11},{value:"-",paraId:8,tocIndex:11},{value:"mask",paraId:8,tocIndex:11},{value:"\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42",paraId:8,tocIndex:11},{value:"boolean",paraId:8,tocIndex:11},{value:"true",paraId:8,tocIndex:11},{value:"maskClosable",paraId:8,tocIndex:11},{value:"\u70B9\u51FB\u906E\u7F69\u5C42\u662F\u5426\u5173\u95ED",paraId:8,tocIndex:11},{value:"boolean",paraId:8,tocIndex:11},{value:"true",paraId:8,tocIndex:11},{value:"confirmLoading",paraId:8,tocIndex:11},{value:"\u786E\u8BA4\u6309\u94AE\u662F\u5426\u52A0\u8F7D\u4E2D",paraId:8,tocIndex:11},{value:"boolean",paraId:8,tocIndex:11},{value:"false",paraId:8,tocIndex:11},{value:"width",paraId:8,tocIndex:11},{value:"\u5BF9\u8BDD\u6846\u5BBD\u5EA6",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"520",paraId:8,tocIndex:11},{value:"zIndex",paraId:8,tocIndex:11},{value:"\u5BF9\u8BDD\u6846\u5C42\u7EA7",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"1000",paraId:8,tocIndex:11},{value:"className",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"''",paraId:8,tocIndex:11},{value:"style",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:8,tocIndex:11},{value:"React.CSSProperties",paraId:8,tocIndex:11},{value:"{}",paraId:8,tocIndex:11},{value:"keyboard",paraId:8,tocIndex:11},{value:"\u662F\u5426\u652F\u6301\u952E\u76D8ESC\u5173\u95ED",paraId:8,tocIndex:11},{value:"boolean",paraId:8,tocIndex:11},{value:"true",paraId:8,tocIndex:11},{value:"wrapClassName",paraId:8,tocIndex:11},{value:"\u5BF9\u8BDD\u6846\u5305\u88C5\u5668\u7C7B\u540D",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"''",paraId:8,tocIndex:11}]},27045:function(M,B){"use strict";B.Z=`import React from 'react';
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

export default Button;`},67825:function(M,B,e){var v=e(64382);function g(o,D){if(o==null)return{};var h=v(o,D),E,y;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(y=0;y<c.length;y++)E=c[y],!(D.indexOf(E)>=0)&&Object.prototype.propertyIsEnumerable.call(o,E)&&(h[E]=o[E])}return h}M.exports=g,M.exports.__esModule=!0,M.exports.default=M.exports},64382:function(M){function B(e,v){if(e==null)return{};var g={},o=Object.keys(e),D,h;for(h=0;h<o.length;h++)D=o[h],!(v.indexOf(D)>=0)&&(g[D]=e[D]);return g}M.exports=B,M.exports.__esModule=!0,M.exports.default=M.exports}}]);
