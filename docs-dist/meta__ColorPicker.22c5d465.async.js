"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[7457],{27701:function(y,v,e){var p;e.r(v),e.d(v,{demos:function(){return A}});var h=e(48305),C=e.n(h),P=e(90228),d=e.n(P),E=e(87999),m=e.n(E),i=e(75271),A={"colorpicker-demo-0":{component:i.memo(i.lazy(m()(d()().mark(function s(){var o,t,a,l,u;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=r.sent,t=o.default,r.next=6,e.e(8727).then(e.bind(e,18727));case 6:return a=r.sent,l=a.default,u=function(){return t.createElement("div",null,t.createElement(l,null))},r.abrupt("return",{default:u});case 10:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"colorpicker-demo-0",refAtomIds:["ColorPicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import ColorPicker from '../ColorPicker';

const App: React.FC = () => {
  return (
    <div>
      <ColorPicker />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(i,2))},renderOpts:{compile:function(){var s=m()(d()().mark(function t(){var a,l=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"colorpicker-demo-1":{component:i.memo(i.lazy(m()(d()().mark(function s(){var o,t,a,l,u;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=r.sent,t=o.default,r.next=6,e.e(8727).then(e.bind(e,18727));case 6:return a=r.sent,l=a.default,u=function(){return t.createElement("div",null,t.createElement(l,{size:"small"}),t.createElement(l,{size:"default"}),t.createElement(l,{size:"large"}))},r.abrupt("return",{default:u});case 10:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"colorpicker-demo-1",refAtomIds:["ColorPicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import ColorPicker from '../ColorPicker';

const App: React.FC = () => {
  return (
    <div>
      <ColorPicker size="small" />
      <ColorPicker size="default" />
      <ColorPicker size="large" />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(i,2))},renderOpts:{compile:function(){var s=m()(d()().mark(function t(){var a,l=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"colorpicker-demo-2":{component:i.memo(i.lazy(m()(d()().mark(function s(){var o,t,a,l,u;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=r.sent,t=o.default,r.next=6,e.e(8727).then(e.bind(e,18727));case 6:return a=r.sent,l=a.default,u=function(){return t.createElement("div",null,t.createElement(l,{disabled:!0}))},r.abrupt("return",{default:u});case 10:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"colorpicker-demo-2",refAtomIds:["ColorPicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import ColorPicker from '../ColorPicker';

const App: React.FC = () => {
  return (
    <div>
      <ColorPicker disabled />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(i,2))},renderOpts:{compile:function(){var s=m()(d()().mark(function t(){var a,l=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"colorpicker-demo-3":{component:i.memo(i.lazy(m()(d()().mark(function s(){var o,t,a,l,u,n;return d()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=c.sent,t=o.default,a=o.useState,c.next=7,e.e(8727).then(e.bind(e,18727));case 7:return l=c.sent,u=l.default,n=function(){var g=a("#1890ff"),f=C()(g,2),I=f[0],x=f[1];return t.createElement("div",null,t.createElement(u,{value:I,onChange:x}),t.createElement("p",null,"\u5F53\u524D\u989C\u8272: ",I))},c.abrupt("return",{default:n});case 11:case"end":return c.stop()}},s)})))),asset:{type:"BLOCK",id:"colorpicker-demo-3",refAtomIds:["ColorPicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import ColorPicker from '../ColorPicker';

const App: React.FC = () => {
  const [color, setColor] = useState<string>('#1890ff');

  return (
    <div>
      <ColorPicker value={color} onChange={setColor} />
      <p>\u5F53\u524D\u989C\u8272: {color}</p>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(i,2))},renderOpts:{compile:function(){var s=m()(d()().mark(function t(){var a,l=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"colorpicker-demo-4":{component:i.memo(i.lazy(m()(d()().mark(function s(){var o,t,a,l,u;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=r.sent,t=o.default,r.next=6,e.e(8727).then(e.bind(e,18727));case 6:return a=r.sent,l=a.default,u=function(){return t.createElement("div",null,t.createElement(l,{defaultValue:"#ff4d4f"}))},r.abrupt("return",{default:u});case 10:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"colorpicker-demo-4",refAtomIds:["ColorPicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import ColorPicker from '../ColorPicker';

const App: React.FC = () => {
  return (
    <div>
      <ColorPicker defaultValue="#ff4d4f" />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(i,2))},renderOpts:{compile:function(){var s=m()(d()().mark(function t(){var a,l=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"colorpicker-demo-5":{component:i.memo(i.lazy(m()(d()().mark(function s(){var o,t,a,l,u;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=r.sent,t=o.default,r.next=6,e.e(8727).then(e.bind(e,18727));case 6:return a=r.sent,l=a.default,u=function(){return t.createElement("div",null,t.createElement(l,{style:{width:120,border:"2px solid #ddd",borderRadius:8,padding:4}}))},r.abrupt("return",{default:u});case 10:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"colorpicker-demo-5",refAtomIds:["ColorPicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import ColorPicker from '../ColorPicker';

const App: React.FC = () => {
  return (
    <div>
      <ColorPicker 
        style={{ 
          width: 120, 
          border: '2px solid #ddd', 
          borderRadius: 8, 
          padding: 4 
        }} 
      />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(i,2))},renderOpts:{compile:function(){var s=m()(d()().mark(function t(){var a,l=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}}}},48843:function(y,v,e){e.r(v),e.d(v,{texts:function(){return p}});const p=[{value:"\u7528\u4E8E\u9009\u62E9\u989C\u8272\u7684\u7EC4\u4EF6\uFF0C\u652F\u6301\u9884\u8BBE\u989C\u8272\u548C\u81EA\u5B9A\u4E49\u989C\u8272\u8F93\u5165\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:7},{value:"\u7C7B\u578B",paraId:1,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:7},{value:"\u8BF4\u660E",paraId:1,tocIndex:7},{value:"size",paraId:1,tocIndex:7},{value:"'small' | 'default' | 'large'",paraId:1,tocIndex:7},{value:"'default'",paraId:1,tocIndex:7},{value:"\u989C\u8272\u9009\u62E9\u5668\u5C3A\u5BF8",paraId:1,tocIndex:7},{value:"disabled",paraId:1,tocIndex:7},{value:"boolean",paraId:1,tocIndex:7},{value:"false",paraId:1,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:1,tocIndex:7},{value:"value",paraId:1,tocIndex:7},{value:"string",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"\u5F53\u524D\u989C\u8272\u503C\uFF08\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:1,tocIndex:7},{value:"defaultValue",paraId:1,tocIndex:7},{value:"string",paraId:1,tocIndex:7},{value:"'#1890ff'",paraId:1,tocIndex:7},{value:"\u9ED8\u8BA4\u989C\u8272\u503C\uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:1,tocIndex:7},{value:"onChange",paraId:1,tocIndex:7},{value:"(color: string) => void",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"\u989C\u8272\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:1,tocIndex:7},{value:"onOpenChange",paraId:1,tocIndex:7},{value:"(open: boolean) => void",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"\u9762\u677F\u6253\u5F00/\u5173\u95ED\u72B6\u6001\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:1,tocIndex:7},{value:"className",paraId:1,tocIndex:7},{value:"string",paraId:1,tocIndex:7},{value:"''",paraId:1,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:7},{value:"style",paraId:1,tocIndex:7},{value:"React.CSSProperties",paraId:1,tocIndex:7},{value:"{}",paraId:1,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:7}]}}]);
