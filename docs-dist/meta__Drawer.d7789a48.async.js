(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[1524,7656],{83455:function(E,D,e){"use strict";var f;e.r(D),e.d(D,{demos:function(){return O}});var P=e(90228),i=e.n(P),S=e(48305),B=e.n(S),A=e(87999),y=e.n(A),p=e(75271),I=e(97656),O={"drawer-demo-0":{component:p.memo(p.lazy(y()(i()().mark(function u(){var a,r,s,l,o,n,d,m;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return a=t.sent,r=a.default,s=a.useState,t.next=7,e.e(8011).then(e.bind(e,8011));case 7:return l=t.sent,o=l.default,t.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return n=t.sent,d=n.default,m=function(){var h=s(!1),v=B()(h,2),C=v[0],c=v[1];return r.createElement("div",null,r.createElement(d,{type:"primary",onClick:function(){return c(!0)}},"\u6253\u5F00\u62BD\u5C49"),r.createElement(o,{title:"\u57FA\u672C\u62BD\u5C49",visible:C,onVisibleChange:c},r.createElement("p",null,"\u62BD\u5C49\u5185\u5BB9"),r.createElement("p",null,"\u66F4\u591A\u5185\u5BB9"),r.createElement("p",null,"\u53EF\u4EE5\u653E\u7F6E\u4EFB\u4F55\u7EC4\u4EF6")))},t.abrupt("return",{default:m});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"drawer-demo-0",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u62BD\u5C49
      </Button>
      <Drawer
        title="\u57FA\u672C\u62BD\u5C49"
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>\u62BD\u5C49\u5185\u5BB9</p>
        <p>\u66F4\u591A\u5185\u5BB9</p>
        <p>\u53EF\u4EE5\u653E\u7F6E\u4EFB\u4F55\u7EC4\u4EF6</p>
      </Drawer>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":I,react:f||(f=e.t(p,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":I},renderOpts:{compile:function(){var u=y()(i()().mark(function r(){var s,l=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},r)}));function a(){return u.apply(this,arguments)}return a}()}},"drawer-demo-1":{component:p.memo(p.lazy(y()(i()().mark(function u(){var a,r,s,l,o,n,d,m;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return a=t.sent,r=a.default,s=a.useState,t.next=7,e.e(8011).then(e.bind(e,8011));case 7:return l=t.sent,o=l.default,t.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return n=t.sent,d=n.default,m=function(){var h=s(!1),v=B()(h,2),C=v[0],c=v[1],x=s("right"),V=B()(x,2),R=V[0],w=V[1],$=function(F){w(F),c(!0)};return r.createElement("div",null,r.createElement("div",{style:{marginBottom:10}},r.createElement(d,{onClick:function(){return $("top")}},"\u4ECE\u4E0A\u5F39\u51FA"),r.createElement(d,{style:{marginLeft:10},onClick:function(){return $("right")}},"\u4ECE\u53F3\u5F39\u51FA"),r.createElement(d,{style:{marginLeft:10},onClick:function(){return $("bottom")}},"\u4ECE\u4E0B\u5F39\u51FA"),r.createElement(d,{style:{marginLeft:10},onClick:function(){return $("left")}},"\u4ECE\u5DE6\u5F39\u51FA")),r.createElement(o,{title:"\u4ECE".concat({top:"\u4E0A",right:"\u53F3",bottom:"\u4E0B",left:"\u5DE6"}[R],"\u5F39\u51FA"),placement:R,visible:C,onVisibleChange:c},r.createElement("p",null,"\u62BD\u5C49\u5185\u5BB9")))},t.abrupt("return",{default:m});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"drawer-demo-1",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<'top' | 'right' | 'bottom' | 'left'>('right');

  const showDrawer = (direction: 'top' | 'right' | 'bottom' | 'left') => {
    setPlacement(direction);
    setVisible(true);
  };

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Button onClick={() => showDrawer('top')}>\u4ECE\u4E0A\u5F39\u51FA</Button>
        <Button style={{ marginLeft: 10 }} onClick={() => showDrawer('right')}>\u4ECE\u53F3\u5F39\u51FA</Button>
        <Button style={{ marginLeft: 10 }} onClick={() => showDrawer('bottom')}>\u4ECE\u4E0B\u5F39\u51FA</Button>
        <Button style={{ marginLeft: 10 }} onClick={() => showDrawer('left')}>\u4ECE\u5DE6\u5F39\u51FA</Button>
      </div>
      <Drawer
        title={\`\u4ECE\${{ top: '\u4E0A', right: '\u53F3', bottom: '\u4E0B', left: '\u5DE6' }[placement]}\u5F39\u51FA\`}
        placement={placement}
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>\u62BD\u5C49\u5185\u5BB9</p>
      </Drawer>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":I,react:f||(f=e.t(p,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":I},renderOpts:{compile:function(){var u=y()(i()().mark(function r(){var s,l=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},r)}));function a(){return u.apply(this,arguments)}return a}()}},"drawer-demo-2":{component:p.memo(p.lazy(y()(i()().mark(function u(){var a,r,s,l,o,n,d,m;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return a=t.sent,r=a.default,s=a.useState,t.next=7,e.e(8011).then(e.bind(e,8011));case 7:return l=t.sent,o=l.default,t.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return n=t.sent,d=n.default,m=function(){var h=s(!1),v=B()(h,2),C=v[0],c=v[1];return r.createElement("div",null,r.createElement(d,{type:"primary",onClick:function(){return c(!0)}},"\u6253\u5F00\u62BD\u5C49"),r.createElement(o,{title:"\u53D7\u63A7\u62BD\u5C49",visible:C,onVisibleChange:c},r.createElement("p",null,"\u62BD\u5C49\u5185\u5BB9"),r.createElement(d,{onClick:function(){return c(!1)}},"\u5173\u95ED\u62BD\u5C49")))},t.abrupt("return",{default:m});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"drawer-demo-2",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u62BD\u5C49
      </Button>
      <Drawer
        title="\u53D7\u63A7\u62BD\u5C49"
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>\u62BD\u5C49\u5185\u5BB9</p>
        <Button onClick={() => setVisible(false)}>\u5173\u95ED\u62BD\u5C49</Button>
      </Drawer>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":I,react:f||(f=e.t(p,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":I},renderOpts:{compile:function(){var u=y()(i()().mark(function r(){var s,l=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},r)}));function a(){return u.apply(this,arguments)}return a}()}},"drawer-demo-3":{component:p.memo(p.lazy(y()(i()().mark(function u(){var a,r,s,l,o,n,d;return i()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return a=b.sent,r=a.default,b.next=6,e.e(8011).then(e.bind(e,8011));case 6:return s=b.sent,l=s.default,b.next=10,Promise.resolve().then(e.bind(e,97656));case 10:return o=b.sent,n=o.default,d=function(){return r.createElement("div",null,r.createElement(l,{title:"\u975E\u53D7\u63A7\u62BD\u5C49",defaultVisible:!1},r.createElement("p",null,"\u62BD\u5C49\u5185\u5BB9")),r.createElement(n,{type:"primary",onClick:function(){var h=document.querySelector(".brickd-drawer");h&&(h.style.display="block")}},"\u6253\u5F00\u62BD\u5C49"))},b.abrupt("return",{default:d});case 14:case"end":return b.stop()}},u)})))),asset:{type:"BLOCK",id:"drawer-demo-3",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <div>
      <Drawer
        title="\u975E\u53D7\u63A7\u62BD\u5C49"
        defaultVisible={false}
      >
        <p>\u62BD\u5C49\u5185\u5BB9</p>
      </Drawer>
      <Button
        type="primary"
        onClick={() => {
          const drawer = document.querySelector('.brickd-drawer') as any;
          if (drawer) {
            drawer.style.display = 'block';
          }
        }}
      >
        \u6253\u5F00\u62BD\u5C49
      </Button>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":I,react:f||(f=e.t(p,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":I},renderOpts:{compile:function(){var u=y()(i()().mark(function r(){var s,l=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},r)}));function a(){return u.apply(this,arguments)}return a}()}},"drawer-demo-4":{component:p.memo(p.lazy(y()(i()().mark(function u(){var a,r,s,l,o,n,d,m;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return a=t.sent,r=a.default,s=a.useState,t.next=7,e.e(8011).then(e.bind(e,8011));case 7:return l=t.sent,o=l.default,t.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return n=t.sent,d=n.default,m=function(){var h=s(!1),v=B()(h,2),C=v[0],c=v[1];return r.createElement("div",null,r.createElement(d,{type:"primary",onClick:function(){return c(!0)}},"\u6253\u5F00\u5BBD\u62BD\u5C49"),r.createElement(o,{title:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6\u62BD\u5C49",width:500,visible:C,onVisibleChange:c},r.createElement("p",null,"\u5BBD\u5EA6\u4E3A500px\u7684\u62BD\u5C49")))},t.abrupt("return",{default:m});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"drawer-demo-4",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u5BBD\u62BD\u5C49
      </Button>
      <Drawer
        title="\u81EA\u5B9A\u4E49\u5BBD\u5EA6\u62BD\u5C49"
        width={500}
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>\u5BBD\u5EA6\u4E3A500px\u7684\u62BD\u5C49</p>
      </Drawer>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":I,react:f||(f=e.t(p,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":I},renderOpts:{compile:function(){var u=y()(i()().mark(function r(){var s,l=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},r)}));function a(){return u.apply(this,arguments)}return a}()}},"drawer-demo-5":{component:p.memo(p.lazy(y()(i()().mark(function u(){var a,r,s,l,o,n,d,m;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return a=t.sent,r=a.default,s=a.useState,t.next=7,e.e(8011).then(e.bind(e,8011));case 7:return l=t.sent,o=l.default,t.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return n=t.sent,d=n.default,m=function(){var h=s(!1),v=B()(h,2),C=v[0],c=v[1];return r.createElement("div",null,r.createElement(d,{type:"primary",onClick:function(){return c(!0)}},"\u6253\u5F00\u65E0\u906E\u7F69\u62BD\u5C49"),r.createElement(o,{title:"\u65E0\u906E\u7F69\u62BD\u5C49",mask:!1,visible:C,onVisibleChange:c},r.createElement("p",null,"\u6CA1\u6709\u906E\u7F69\u7684\u62BD\u5C49")))},t.abrupt("return",{default:m});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"drawer-demo-5",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u65E0\u906E\u7F69\u62BD\u5C49
      </Button>
      <Drawer
        title="\u65E0\u906E\u7F69\u62BD\u5C49"
        mask={false}
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>\u6CA1\u6709\u906E\u7F69\u7684\u62BD\u5C49</p>
      </Drawer>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":I,react:f||(f=e.t(p,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":I},renderOpts:{compile:function(){var u=y()(i()().mark(function r(){var s,l=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},r)}));function a(){return u.apply(this,arguments)}return a}()}},"drawer-demo-6":{component:p.memo(p.lazy(y()(i()().mark(function u(){var a,r,s,l,o,n,d,m;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return a=t.sent,r=a.default,s=a.useState,t.next=7,e.e(8011).then(e.bind(e,8011));case 7:return l=t.sent,o=l.default,t.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return n=t.sent,d=n.default,m=function(){var h=s(!1),v=B()(h,2),C=v[0],c=v[1];return r.createElement("div",null,r.createElement(d,{type:"primary",onClick:function(){return c(!0)}},"\u6253\u5F00\u62BD\u5C49"),r.createElement(o,{title:"\u70B9\u51FB\u906E\u7F69\u4E0D\u53EF\u5173\u95ED",maskClosable:!1,visible:C,onVisibleChange:c},r.createElement("p",null,"\u70B9\u51FB\u906E\u7F69\u4E0D\u4F1A\u5173\u95ED\u62BD\u5C49"),r.createElement(d,{onClick:function(){return c(!1)}},"\u70B9\u51FB\u5173\u95ED")))},t.abrupt("return",{default:m});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"drawer-demo-6",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u62BD\u5C49
      </Button>
      <Drawer
        title="\u70B9\u51FB\u906E\u7F69\u4E0D\u53EF\u5173\u95ED"
        maskClosable={false}
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>\u70B9\u51FB\u906E\u7F69\u4E0D\u4F1A\u5173\u95ED\u62BD\u5C49</p>
        <Button onClick={() => setVisible(false)}>\u70B9\u51FB\u5173\u95ED</Button>
      </Drawer>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":I,react:f||(f=e.t(p,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":I},renderOpts:{compile:function(){var u=y()(i()().mark(function r(){var s,l=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},r)}));function a(){return u.apply(this,arguments)}return a}()}},"drawer-demo-7":{component:p.memo(p.lazy(y()(i()().mark(function u(){var a,r,s,l,o,n,d,m;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return a=t.sent,r=a.default,s=a.useState,t.next=7,e.e(8011).then(e.bind(e,8011));case 7:return l=t.sent,o=l.default,t.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return n=t.sent,d=n.default,m=function(){var h=s(!1),v=B()(h,2),C=v[0],c=v[1];return r.createElement("div",null,r.createElement(d,{type:"primary",onClick:function(){return c(!0)}},"\u6253\u5F00\u62BD\u5C49"),r.createElement(o,{title:r.createElement("div",{style:{color:"#1890ff"}},"\u81EA\u5B9A\u4E49\u6807\u9898"),visible:C,onVisibleChange:c,footer:r.createElement("div",{style:{textAlign:"right"}},r.createElement(d,{onClick:function(){return c(!1)}},"\u53D6\u6D88"),r.createElement(d,{type:"primary",style:{marginLeft:8},onClick:function(){return c(!1)}},"\u786E\u5B9A"))},r.createElement("p",null,"\u5E26\u81EA\u5B9A\u4E49\u5E95\u90E8\u7684\u62BD\u5C49")))},t.abrupt("return",{default:m});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"drawer-demo-7",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u62BD\u5C49
      </Button>
      <Drawer
        title={<div style={{ color: '#1890ff' }}>\u81EA\u5B9A\u4E49\u6807\u9898</div>}
        visible={visible}
        onVisibleChange={setVisible}
        footer={
          <div style={{ textAlign: 'right' }}>
            <Button onClick={() => setVisible(false)}>\u53D6\u6D88</Button>
            <Button type="primary" style={{ marginLeft: 8 }} onClick={() => setVisible(false)}>
              \u786E\u5B9A
            </Button>
          </div>
        }
      >
        <p>\u5E26\u81EA\u5B9A\u4E49\u5E95\u90E8\u7684\u62BD\u5C49</p>
      </Drawer>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":I,react:f||(f=e.t(p,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":I},renderOpts:{compile:function(){var u=y()(i()().mark(function r(){var s,l=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},r)}));function a(){return u.apply(this,arguments)}return a}()}},"drawer-demo-8":{component:p.memo(p.lazy(y()(i()().mark(function u(){var a,r,s,l,o,n,d,m;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return a=t.sent,r=a.default,s=a.useState,t.next=7,e.e(8011).then(e.bind(e,8011));case 7:return l=t.sent,o=l.default,t.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return n=t.sent,d=n.default,m=function(){var h=s(!1),v=B()(h,2),C=v[0],c=v[1];return r.createElement("div",null,r.createElement(d,{type:"primary",onClick:function(){return c(!0)}},"\u6253\u5F00\u62BD\u5C49"),r.createElement(o,{title:"\u65E0\u5173\u95ED\u6309\u94AE",closable:!1,visible:C,onVisibleChange:c},r.createElement("p",null,"\u6CA1\u6709\u5173\u95ED\u6309\u94AE\u7684\u62BD\u5C49"),r.createElement(d,{onClick:function(){return c(!1)}},"\u70B9\u51FB\u5173\u95ED")))},t.abrupt("return",{default:m});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"drawer-demo-8",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u62BD\u5C49
      </Button>
      <Drawer
        title="\u65E0\u5173\u95ED\u6309\u94AE"
        closable={false}
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>\u6CA1\u6709\u5173\u95ED\u6309\u94AE\u7684\u62BD\u5C49</p>
        <Button onClick={() => setVisible(false)}>\u70B9\u51FB\u5173\u95ED</Button>
      </Drawer>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":I,react:f||(f=e.t(p,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":I},renderOpts:{compile:function(){var u=y()(i()().mark(function r(){var s,l=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},r)}));function a(){return u.apply(this,arguments)}return a}()}},"drawer-demo-9":{component:p.memo(p.lazy(y()(i()().mark(function u(){var a,r,s,l,o,n,d,m;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return a=t.sent,r=a.default,s=a.useState,t.next=7,e.e(8011).then(e.bind(e,8011));case 7:return l=t.sent,o=l.default,t.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return n=t.sent,d=n.default,m=function(){var h=s(!1),v=B()(h,2),C=v[0],c=v[1];return r.createElement("div",null,r.createElement(d,{type:"primary",onClick:function(){return c(!0)}},"\u6253\u5F00\u62BD\u5C49"),r.createElement(o,{title:"\u5173\u95ED\u65F6\u9500\u6BC1\u5185\u5BB9",destroyOnClose:!0,visible:C,onVisibleChange:c},r.createElement("p",null,"\u5173\u95ED\u540E\u5185\u5BB9\u4F1A\u88AB\u9500\u6BC1"),r.createElement("p",null,"\u91CD\u65B0\u6253\u5F00\u65F6\u4F1A\u91CD\u65B0\u6E32\u67D3")))},t.abrupt("return",{default:m});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"drawer-demo-9",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u62BD\u5C49
      </Button>
      <Drawer
        title="\u5173\u95ED\u65F6\u9500\u6BC1\u5185\u5BB9"
        destroyOnClose
        visible={visible}
        onVisibleChange={setVisible}
      >
        <p>\u5173\u95ED\u540E\u5185\u5BB9\u4F1A\u88AB\u9500\u6BC1</p>
        <p>\u91CD\u65B0\u6253\u5F00\u65F6\u4F1A\u91CD\u65B0\u6E32\u67D3</p>
      </Drawer>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":I,react:f||(f=e.t(p,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":I},renderOpts:{compile:function(){var u=y()(i()().mark(function r(){var s,l=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},r)}));function a(){return u.apply(this,arguments)}return a}()}},"drawer-demo-10":{component:p.memo(p.lazy(y()(i()().mark(function u(){var a,r,s,l,o,n,d,m;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return a=t.sent,r=a.default,s=a.useState,t.next=7,e.e(8011).then(e.bind(e,8011));case 7:return l=t.sent,o=l.default,t.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return n=t.sent,d=n.default,m=function(){var h=s(!1),v=B()(h,2),C=v[0],c=v[1];return r.createElement("div",null,r.createElement(d,{type:"primary",onClick:function(){return c(!0)}},"\u6253\u5F00\u62BD\u5C49"),r.createElement(o,{title:"\u81EA\u5B9A\u4E49\u6837\u5F0F\u62BD\u5C49",visible:C,onVisibleChange:c,style:{backgroundColor:"#f5f5f5"},bodyStyle:{padding:20}},r.createElement("p",null,"\u81EA\u5B9A\u4E49\u6837\u5F0F\u7684\u62BD\u5C49\u5185\u5BB9"),r.createElement("p",null,"\u53EF\u4EE5\u8BBE\u7F6E\u80CC\u666F\u8272\u3001\u5185\u8FB9\u8DDD\u7B49")))},t.abrupt("return",{default:m});case 15:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"drawer-demo-10",refAtomIds:["Drawer"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Drawer from '../Drawer';
import Button from '../Button';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        \u6253\u5F00\u62BD\u5C49
      </Button>
      <Drawer
        title="\u81EA\u5B9A\u4E49\u6837\u5F0F\u62BD\u5C49"
        visible={visible}
        onVisibleChange={setVisible}
        style={{ backgroundColor: '#f5f5f5' }}
        bodyStyle={{ padding: 20 }}
      >
        <p>\u81EA\u5B9A\u4E49\u6837\u5F0F\u7684\u62BD\u5C49\u5185\u5BB9</p>
        <p>\u53EF\u4EE5\u8BBE\u7F6E\u80CC\u666F\u8272\u3001\u5185\u8FB9\u8DDD\u7B49</p>
      </Drawer>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":I,react:f||(f=e.t(p,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":I},renderOpts:{compile:function(){var u=y()(i()().mark(function r(){var s,l=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},r)}));function a(){return u.apply(this,arguments)}return a}()}}}},97656:function(E,D,e){"use strict";e.r(D),e.d(D,{default:function(){return O}});var f=e(26068),P=e.n(f),i=e(67825),S=e.n(i),B=e(75271),A={button:"AyHMn4pptwgAqTM0zVxe",small:"mtziivfRPkRk_hPU_E8r",default:"CH0d2t1M7c0F2z59aWp3",large:"RH0k6h4jVrUDWtwndzsD",primary:"DPc0H8GPQ0xHQRlthXLJ",disabled:"tsWfJ_Ys0PMwNuyfv9ZE",dashed:"IioY1o_nDcycA39jljNu",text:"uXPLhO_cvecV4slBdUG9",link:"dEu3aIhxJygUwZzIAxyd"},y=e(52676),p=["type","size","disabled","children","onClick","className","style","htmlType"],I=function(a){var r=a.type,s=r===void 0?"default":r,l=a.size,o=l===void 0?"default":l,n=a.disabled,d=n===void 0?!1:n,m=a.children,b=a.onClick,t=a.className,g=t===void 0?"":t,h=a.style,v=h===void 0?{}:h,C=a.htmlType,c=C===void 0?"button":C,x=S()(a,p),V=function(){var $=[A.button];return $.push(A[s]),$.push(A[o]),d&&$.push(A.disabled),g&&$.push(g),$.join(" ")},R=function(){!d&&b&&b()};return(0,y.jsx)("button",P()(P()({type:c==="submit"?"submit":c==="reset"?"reset":"button",className:V(),style:v,disabled:d,onClick:R},x),{},{children:m}))},O=I},65370:function(E,D,e){"use strict";e.r(D),e.d(D,{texts:function(){return f}});const f=[{value:"\u7528\u4E8E\u4ECE\u5C4F\u5E55\u8FB9\u7F18\u6ED1\u51FA\u7684\u9762\u677F\uFF0C\u627F\u8F7D\u4E34\u65F6\u7684\u64CD\u4F5C\u6216\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:12},{value:"\u7C7B\u578B",paraId:1,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:12},{value:"\u8BF4\u660E",paraId:1,tocIndex:12},{value:"title",paraId:1,tocIndex:12},{value:"React.ReactNode",paraId:1,tocIndex:12},{value:"-",paraId:1,tocIndex:12},{value:"\u62BD\u5C49\u6807\u9898",paraId:1,tocIndex:12},{value:"placement",paraId:1,tocIndex:12},{value:"'top' | 'right' | 'bottom' | 'left'",paraId:1,tocIndex:12},{value:"'right'",paraId:1,tocIndex:12},{value:"\u62BD\u5C49\u5F39\u51FA\u65B9\u5411",paraId:1,tocIndex:12},{value:"visible",paraId:1,tocIndex:12},{value:"boolean",paraId:1,tocIndex:12},{value:"-",paraId:1,tocIndex:12},{value:"\u53D7\u63A7\u6A21\u5F0F\u4E0B\u7684\u53EF\u89C1\u72B6\u6001",paraId:1,tocIndex:12},{value:"defaultVisible",paraId:1,tocIndex:12},{value:"boolean",paraId:1,tocIndex:12},{value:"false",paraId:1,tocIndex:12},{value:"\u975E\u53D7\u63A7\u6A21\u5F0F\u4E0B\u7684\u9ED8\u8BA4\u53EF\u89C1\u72B6\u6001",paraId:1,tocIndex:12},{value:"onVisibleChange",paraId:1,tocIndex:12},{value:"(visible: boolean) => void",paraId:1,tocIndex:12},{value:"-",paraId:1,tocIndex:12},{value:"\u53EF\u89C1\u72B6\u6001\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:1,tocIndex:12},{value:"width",paraId:1,tocIndex:12},{value:"number | string",paraId:1,tocIndex:12},{value:"300",paraId:1,tocIndex:12},{value:"\u5BBD\u5EA6\uFF08\u5DE6\u53F3\u65B9\u5411\u65F6\u6709\u6548\uFF09",paraId:1,tocIndex:12},{value:"height",paraId:1,tocIndex:12},{value:"number | string",paraId:1,tocIndex:12},{value:"300",paraId:1,tocIndex:12},{value:"\u9AD8\u5EA6\uFF08\u4E0A\u4E0B\u65B9\u5411\u65F6\u6709\u6548\uFF09",paraId:1,tocIndex:12},{value:"mask",paraId:1,tocIndex:12},{value:"boolean",paraId:1,tocIndex:12},{value:"true",paraId:1,tocIndex:12},{value:"\u662F\u5426\u663E\u793A\u906E\u7F69",paraId:1,tocIndex:12},{value:"maskClosable",paraId:1,tocIndex:12},{value:"boolean",paraId:1,tocIndex:12},{value:"true",paraId:1,tocIndex:12},{value:"\u70B9\u51FB\u906E\u7F69\u662F\u5426\u53EF\u5173\u95ED",paraId:1,tocIndex:12},{value:"className",paraId:1,tocIndex:12},{value:"string",paraId:1,tocIndex:12},{value:"''",paraId:1,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:12},{value:"style",paraId:1,tocIndex:12},{value:"React.CSSProperties",paraId:1,tocIndex:12},{value:"{}",paraId:1,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:12},{value:"bodyStyle",paraId:1,tocIndex:12},{value:"React.CSSProperties",paraId:1,tocIndex:12},{value:"{}",paraId:1,tocIndex:12},{value:"\u5185\u5BB9\u533A\u57DF\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:12},{value:"children",paraId:1,tocIndex:12},{value:"React.ReactNode",paraId:1,tocIndex:12},{value:"-",paraId:1,tocIndex:12},{value:"\u5B50\u5143\u7D20",paraId:1,tocIndex:12},{value:"footer",paraId:1,tocIndex:12},{value:"React.ReactNode",paraId:1,tocIndex:12},{value:"-",paraId:1,tocIndex:12},{value:"\u5E95\u90E8\u5185\u5BB9",paraId:1,tocIndex:12},{value:"closable",paraId:1,tocIndex:12},{value:"boolean",paraId:1,tocIndex:12},{value:"true",paraId:1,tocIndex:12},{value:"\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE",paraId:1,tocIndex:12},{value:"destroyOnClose",paraId:1,tocIndex:12},{value:"boolean",paraId:1,tocIndex:12},{value:"false",paraId:1,tocIndex:12},{value:"\u5173\u95ED\u65F6\u662F\u5426\u9500\u6BC1\u5185\u5BB9",paraId:1,tocIndex:12},{value:"zIndex",paraId:1,tocIndex:12},{value:"number",paraId:1,tocIndex:12},{value:"1050",paraId:1,tocIndex:12},{value:"\u5C42\u7EA7",paraId:1,tocIndex:12}]},27045:function(E,D){"use strict";D.Z=`import React from 'react';
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

export default Button;`},67825:function(E,D,e){var f=e(64382);function P(i,S){if(i==null)return{};var B=f(i,S),A,y;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);for(y=0;y<p.length;y++)A=p[y],!(S.indexOf(A)>=0)&&Object.prototype.propertyIsEnumerable.call(i,A)&&(B[A]=i[A])}return B}E.exports=P,E.exports.__esModule=!0,E.exports.default=E.exports},64382:function(E){function D(e,f){if(e==null)return{};var P={},i=Object.keys(e),S,B;for(B=0;B<i.length;B++)S=i[B],!(f.indexOf(S)>=0)&&(P[S]=e[S]);return P}E.exports=D,E.exports.__esModule=!0,E.exports.default=E.exports}}]);
