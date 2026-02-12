"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[625],{12932:function(f,c,e){var m;e.r(c),e.d(c,{demos:function(){return D}});var y=e(48305),x=e.n(y),A=e(90228),o=e.n(A),h=e(87999),p=e.n(h),s=e(75271),D={"alert-demo-0":{component:s.memo(s.lazy(p()(o()().mark(function d(){var l,r,a;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){return s.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},s.createElement(r,{type:"info",message:"\u8FD9\u662F\u4E00\u6761\u4FE1\u606F\u63D0\u793A"}),s.createElement(r,{type:"success",message:"\u8FD9\u662F\u4E00\u6761\u6210\u529F\u63D0\u793A"}),s.createElement(r,{type:"warning",message:"\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A"}),s.createElement(r,{type:"error",message:"\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u63D0\u793A"}))},t.next=3,e.e(697).then(e.bind(e,40697));case 3:return l=t.sent,r=l.default,t.abrupt("return",{default:a});case 6:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"alert-demo-0",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:`import Alert from './index';

function AlertTypeDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert type="info" message="\u8FD9\u662F\u4E00\u6761\u4FE1\u606F\u63D0\u793A" />
      <Alert type="success" message="\u8FD9\u662F\u4E00\u6761\u6210\u529F\u63D0\u793A" />
      <Alert type="warning" message="\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A" />
      <Alert type="error" message="\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u63D0\u793A" />
    </div>
  );
}

export default AlertTypeDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(o()().mark(function r(){var a,u=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,u));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"alert-demo-1":{component:s.memo(s.lazy(p()(o()().mark(function d(){var l,r,a;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){return s.createElement(r,{type:"info",message:"\u8FD9\u662F\u4E00\u6761\u5E26\u6709\u63CF\u8FF0\u4FE1\u606F\u7684\u63D0\u793A",description:"\u8FD9\u91CC\u662F\u8BE6\u7EC6\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5305\u542B\u66F4\u591A\u5185\u5BB9\u3002"})},t.next=3,e.e(697).then(e.bind(e,40697));case 3:return l=t.sent,r=l.default,t.abrupt("return",{default:a});case 6:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"alert-demo-1",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:`import Alert from './index';

function AlertDescriptionDemo() {
  return (
    <Alert
      type="info"
      message="\u8FD9\u662F\u4E00\u6761\u5E26\u6709\u63CF\u8FF0\u4FE1\u606F\u7684\u63D0\u793A"
      description="\u8FD9\u91CC\u662F\u8BE6\u7EC6\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5305\u542B\u66F4\u591A\u5185\u5BB9\u3002"
    />
  );
}

export default AlertDescriptionDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(o()().mark(function r(){var a,u=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,u));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"alert-demo-2":{component:s.memo(s.lazy(p()(o()().mark(function d(){var l,r,a,u,t;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t=function(){var g=u(!0),I=x()(g,2),b=I[0],v=I[1],E=function(){v(!1),console.log("Alert closed")};return b?s.createElement(r,{type:"info",message:"\u8FD9\u662F\u4E00\u6761\u53EF\u5173\u95ED\u7684\u63D0\u793A",closable:!0,onClose:E}):s.createElement("button",{onClick:function(){return v(!0)}},"\u91CD\u65B0\u663E\u793A")},i.next=3,e.e(697).then(e.bind(e,40697));case 3:return l=i.sent,r=l.default,i.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=i.sent,u=a.useState,i.abrupt("return",{default:t});case 10:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"alert-demo-2",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:`import Alert from './index';
import { useState } from 'react';

function AlertClosableDemo() {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    console.log('Alert closed');
  };

  if (!visible) {
    return <button onClick={() => setVisible(true)}>\u91CD\u65B0\u663E\u793A</button>;
  }

  return (
    <Alert
      type="info"
      message="\u8FD9\u662F\u4E00\u6761\u53EF\u5173\u95ED\u7684\u63D0\u793A"
      closable
      onClose={handleClose}
    />
  );
}

export default AlertClosableDemo;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(s,2))},renderOpts:{compile:function(){var d=p()(o()().mark(function r(){var a,u=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,u));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"alert-demo-3":{component:s.memo(s.lazy(p()(o()().mark(function d(){var l,r,a;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){return s.createElement(r,{type:"info",message:"\u8FD9\u662F\u4E00\u6761\u4E0D\u53EF\u5173\u95ED\u7684\u63D0\u793A",closable:!1})},t.next=3,e.e(697).then(e.bind(e,40697));case 3:return l=t.sent,r=l.default,t.abrupt("return",{default:a});case 6:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"alert-demo-3",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:`import Alert from './index';

function AlertNotClosableDemo() {
  return (
    <Alert
      type="info"
      message="\u8FD9\u662F\u4E00\u6761\u4E0D\u53EF\u5173\u95ED\u7684\u63D0\u793A"
      closable={false}
    />
  );
}

export default AlertNotClosableDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(o()().mark(function r(){var a,u=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,u));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"alert-demo-4":{component:s.memo(s.lazy(p()(o()().mark(function d(){var l,r,a;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){return s.createElement(r,{type:"info",message:"\u8FD9\u662F\u4E00\u6761\u81EA\u5B9A\u4E49\u6837\u5F0F\u7684\u63D0\u793A",style:{width:"500px",margin:"0 auto"}})},t.next=3,e.e(697).then(e.bind(e,40697));case 3:return l=t.sent,r=l.default,t.abrupt("return",{default:a});case 6:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"alert-demo-4",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:`import Alert from './index';

function AlertCustomStyleDemo() {
  return (
    <Alert
      type="info"
      message="\u8FD9\u662F\u4E00\u6761\u81EA\u5B9A\u4E49\u6837\u5F0F\u7684\u63D0\u793A"
      style={{ width: '500px', margin: '0 auto' }}
    />
  );
}

export default AlertCustomStyleDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(o()().mark(function r(){var a,u=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,u));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}}}},45804:function(f,c,e){e.r(c),e.d(c,{texts:function(){return m}});const m=[{value:"\u8B66\u544A\u63D0\u793A\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u9875\u9762\u4E2D\u5C55\u793A\u91CD\u8981\u7684\u63D0\u793A\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:"Alert \u652F\u6301\u56DB\u79CD\u7C7B\u578B\uFF1A",paraId:1,tocIndex:2},{value:"info",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"success",paraId:1,tocIndex:2},{value:"\u3001",paraId:1,tocIndex:2},{value:"warning",paraId:1,tocIndex:2},{value:" \u548C ",paraId:1,tocIndex:2},{value:"error",paraId:1,tocIndex:2},{value:"\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"description",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u8BBE\u7F6E\u8BE6\u7EC6\u7684\u63CF\u8FF0\u4FE1\u606F\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"closable",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u8BBE\u7F6E\u63D0\u793A\u662F\u5426\u53EF\u5173\u95ED\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",paraId:3,tocIndex:4},{value:"true",paraId:3,tocIndex:4},{value:"\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"closable={false}",paraId:4,tocIndex:5},{value:" \u8BBE\u7F6E\u63D0\u793A\u4E3A\u4E0D\u53EF\u5173\u95ED\u72B6\u6001\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"className",paraId:5,tocIndex:6},{value:" \u548C ",paraId:5,tocIndex:6},{value:"style",paraId:5,tocIndex:6},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u63D0\u793A\u7684\u6837\u5F0F\u3002",paraId:5,tocIndex:6},{value:"\u5C5E\u6027",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u7C7B\u578B",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"type",paraId:6,tocIndex:8},{value:"\u63D0\u793A\u7C7B\u578B",paraId:6,tocIndex:8},{value:"'info' | 'success' | 'warning' | 'error'",paraId:6,tocIndex:8},{value:"'info'",paraId:6,tocIndex:8},{value:"message",paraId:6,tocIndex:8},{value:"\u63D0\u793A\u6807\u9898",paraId:6,tocIndex:8},{value:"React.ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"description",paraId:6,tocIndex:8},{value:"\u63D0\u793A\u63CF\u8FF0",paraId:6,tocIndex:8},{value:"React.ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"closable",paraId:6,tocIndex:8},{value:"\u662F\u5426\u53EF\u5173\u95ED",paraId:6,tocIndex:8},{value:"boolean",paraId:6,tocIndex:8},{value:"true",paraId:6,tocIndex:8},{value:"onClose",paraId:6,tocIndex:8},{value:"\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:6,tocIndex:8},{value:"() => void",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"className",paraId:6,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"''",paraId:6,tocIndex:8},{value:"style",paraId:6,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:8},{value:"React.CSSProperties",paraId:6,tocIndex:8},{value:"{}",paraId:6,tocIndex:8}]}}]);
