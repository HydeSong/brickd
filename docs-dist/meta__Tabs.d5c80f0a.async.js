"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[8541],{15537:function(f,v,a){var p;a.r(v),a.d(v,{demos:function(){return g}});var T=a(48305),x=a.n(T),E=a(90228),i=a.n(E),h=a(87999),m=a.n(h),c=a(75271),b=a(73440),g={"tabs-demo-0":{component:c.memo(c.lazy(m()(i()().mark(function u(){var s,e,d,r,l;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(a.t.bind(a,75271,19));case 2:return s=t.sent,e=s.default,t.next=6,Promise.resolve().then(a.bind(a,73440));case 6:return d=t.sent,r=d.Tabs,l=r.Tab,t.abrupt("return",{default:function(){return e.createElement("div",null,e.createElement(r,null,e.createElement(l,{key:"1",label:"\u6807\u7B7E1"},e.createElement("div",{style:{padding:"16px"}},"\u6807\u7B7E1\u7684\u5185\u5BB9")),e.createElement(l,{key:"2",label:"\u6807\u7B7E2"},e.createElement("div",{style:{padding:"16px"}},"\u6807\u7B7E2\u7684\u5185\u5BB9")),e.createElement(l,{key:"3",label:"\u6807\u7B7E3"},e.createElement("div",{style:{padding:"16px"}},"\u6807\u7B7E3\u7684\u5185\u5BB9"))))}});case 10:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"tabs-demo-0",refAtomIds:["Tabs"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tabs } from 'brickd';

const { Tab } = Tabs;

export default () => (
  <div>
    <Tabs>
      <Tab key="1" label="\u6807\u7B7E1">
        <div style={{ padding: '16px' }}>
          \u6807\u7B7E1\u7684\u5185\u5BB9
        </div>
      </Tab>
      <Tab key="2" label="\u6807\u7B7E2">
        <div style={{ padding: '16px' }}>
          \u6807\u7B7E2\u7684\u5185\u5BB9
        </div>
      </Tab>
      <Tab key="3" label="\u6807\u7B7E3">
        <div style={{ padding: '16px' }}>
          \u6807\u7B7E3\u7684\u5185\u5BB9
        </div>
      </Tab>
    </Tabs>
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:p||(p=a.t(c,2)),brickd:b},renderOpts:{compile:function(){var u=m()(i()().mark(function e(){var d,r=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.e(3015).then(a.bind(a,33015));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,r));case 3:case"end":return n.stop()}},e)}));function s(){return u.apply(this,arguments)}return s}()}},"tabs-demo-1":{component:c.memo(c.lazy(m()(i()().mark(function u(){var s,e,d,r,l,n;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(a.t.bind(a,75271,19));case 2:return s=o.sent,e=s.default,d=s.useState,o.next=7,Promise.resolve().then(a.bind(a,73440));case 7:return r=o.sent,l=r.Tabs,n=l.Tab,o.abrupt("return",{default:function(){var P=d("1"),y=x()(P,2),I=y[0],R=y[1];return e.createElement("div",null,e.createElement(l,{activeKey:I,onChange:R},e.createElement(n,{key:"1",label:"\u6807\u7B7E1"},e.createElement("div",{style:{padding:"16px"}},"\u6807\u7B7E1\u7684\u5185\u5BB9")),e.createElement(n,{key:"2",label:"\u6807\u7B7E2"},e.createElement("div",{style:{padding:"16px"}},"\u6807\u7B7E2\u7684\u5185\u5BB9")),e.createElement(n,{key:"3",label:"\u6807\u7B7E3"},e.createElement("div",{style:{padding:"16px"}},"\u6807\u7B7E3\u7684\u5185\u5BB9"))),e.createElement("div",{style:{marginTop:"16px"}},"Active Tab: ",I))}});case 11:case"end":return o.stop()}},u)})))),asset:{type:"BLOCK",id:"tabs-demo-1",refAtomIds:["Tabs"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Tabs } from 'brickd';

const { Tab } = Tabs;

export default () => {
  const [activeKey, setActiveKey] = useState('1');
  
  return (
    <div>
      <Tabs activeKey={activeKey} onChange={setActiveKey}>
        <Tab key="1" label="\u6807\u7B7E1">
          <div style={{ padding: '16px' }}>
            \u6807\u7B7E1\u7684\u5185\u5BB9
          </div>
        </Tab>
        <Tab key="2" label="\u6807\u7B7E2">
          <div style={{ padding: '16px' }}>
            \u6807\u7B7E2\u7684\u5185\u5BB9
          </div>
        </Tab>
        <Tab key="3" label="\u6807\u7B7E3">
          <div style={{ padding: '16px' }}>
            \u6807\u7B7E3\u7684\u5185\u5BB9
          </div>
        </Tab>
      </Tabs>
      <div style={{ marginTop: '16px' }}>
        Active Tab: {activeKey}
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:p||(p=a.t(c,2)),brickd:b},renderOpts:{compile:function(){var u=m()(i()().mark(function e(){var d,r=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.e(3015).then(a.bind(a,33015));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,r));case 3:case"end":return n.stop()}},e)}));function s(){return u.apply(this,arguments)}return s}()}},"tabs-demo-2":{component:c.memo(c.lazy(m()(i()().mark(function u(){var s,e,d,r,l;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(a.t.bind(a,75271,19));case 2:return s=t.sent,e=s.default,t.next=6,Promise.resolve().then(a.bind(a,73440));case 6:return d=t.sent,r=d.Tabs,l=r.Tab,t.abrupt("return",{default:function(){return e.createElement("div",null,e.createElement(r,{defaultActiveKey:"2"},e.createElement(l,{key:"1",label:"\u6807\u7B7E1"},e.createElement("div",{style:{padding:"16px"}},"\u6807\u7B7E1\u7684\u5185\u5BB9")),e.createElement(l,{key:"2",label:"\u6807\u7B7E2"},e.createElement("div",{style:{padding:"16px"}},"\u6807\u7B7E2\u7684\u5185\u5BB9")),e.createElement(l,{key:"3",label:"\u6807\u7B7E3"},e.createElement("div",{style:{padding:"16px"}},"\u6807\u7B7E3\u7684\u5185\u5BB9"))))}});case 10:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"tabs-demo-2",refAtomIds:["Tabs"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tabs } from 'brickd';

const { Tab } = Tabs;

export default () => (
  <div>
    <Tabs defaultActiveKey="2">
      <Tab key="1" label="\u6807\u7B7E1">
        <div style={{ padding: '16px' }}>
          \u6807\u7B7E1\u7684\u5185\u5BB9
        </div>
      </Tab>
      <Tab key="2" label="\u6807\u7B7E2">
        <div style={{ padding: '16px' }}>
          \u6807\u7B7E2\u7684\u5185\u5BB9
        </div>
      </Tab>
      <Tab key="3" label="\u6807\u7B7E3">
        <div style={{ padding: '16px' }}>
          \u6807\u7B7E3\u7684\u5185\u5BB9
        </div>
      </Tab>
    </Tabs>
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:p||(p=a.t(c,2)),brickd:b},renderOpts:{compile:function(){var u=m()(i()().mark(function e(){var d,r=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.e(3015).then(a.bind(a,33015));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,r));case 3:case"end":return n.stop()}},e)}));function s(){return u.apply(this,arguments)}return s}()}},"tabs-demo-3":{component:c.memo(c.lazy(m()(i()().mark(function u(){var s,e,d,r,l;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(a.t.bind(a,75271,19));case 2:return s=t.sent,e=s.default,t.next=6,Promise.resolve().then(a.bind(a,73440));case 6:return d=t.sent,r=d.Tabs,l=r.Tab,t.abrupt("return",{default:function(){return e.createElement("div",null,e.createElement(r,{className:"custom-tabs",style:{border:"1px solid #d9d9d9",borderRadius:"4px",overflow:"hidden"}},e.createElement(l,{key:"1",label:"\u6807\u7B7E1"},e.createElement("div",{style:{padding:"16px"}},"\u6807\u7B7E1\u7684\u5185\u5BB9")),e.createElement(l,{key:"2",label:"\u6807\u7B7E2"},e.createElement("div",{style:{padding:"16px"}},"\u6807\u7B7E2\u7684\u5185\u5BB9"))))}});case 10:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"tabs-demo-3",refAtomIds:["Tabs"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Tabs } from 'brickd';

const { Tab } = Tabs;

export default () => (
  <div>
    <Tabs 
      className="custom-tabs"
      style={{ 
        border: '1px solid #d9d9d9',
        borderRadius: '4px',
        overflow: 'hidden'
      }}
    >
      <Tab key="1" label="\u6807\u7B7E1">
        <div style={{ padding: '16px' }}>
          \u6807\u7B7E1\u7684\u5185\u5BB9
        </div>
      </Tab>
      <Tab key="2" label="\u6807\u7B7E2">
        <div style={{ padding: '16px' }}>
          \u6807\u7B7E2\u7684\u5185\u5BB9
        </div>
      </Tab>
    </Tabs>
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:p||(p=a.t(c,2)),brickd:b},renderOpts:{compile:function(){var u=m()(i()().mark(function e(){var d,r=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.e(3015).then(a.bind(a,33015));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,r));case 3:case"end":return n.stop()}},e)}));function s(){return u.apply(this,arguments)}return s}()}}}},96934:function(f,v,a){a.r(v),a.d(v,{texts:function(){return p}});const p=[{value:"\u6807\u7B7E\u9875\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5728\u4E0D\u540C\u5185\u5BB9\u4E4B\u95F4\u5207\u6362\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"activeKey",paraId:1,tocIndex:6},{value:"\u5F53\u524D\u6FC0\u6D3B\u6807\u7B7E\u7684 key",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"undefined",paraId:1,tocIndex:6},{value:"defaultActiveKey",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u6FC0\u6D3B\u6807\u7B7E\u7684 key",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"undefined",paraId:1,tocIndex:6},{value:"onChange",paraId:1,tocIndex:6},{value:"\u6807\u7B7E\u5207\u6362\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:6},{value:"(key: string) => void",paraId:1,tocIndex:6},{value:"undefined",paraId:1,tocIndex:6},{value:"className",paraId:1,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"undefined",paraId:1,tocIndex:6},{value:"style",paraId:1,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:6},{value:"React.CSSProperties",paraId:1,tocIndex:6},{value:"undefined",paraId:1,tocIndex:6},{value:"children",paraId:1,tocIndex:6},{value:"\u5B50\u6807\u7B7E",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"undefined",paraId:1,tocIndex:6},{value:"\u5C5E\u6027",paraId:2,tocIndex:7},{value:"\u8BF4\u660E",paraId:2,tocIndex:7},{value:"\u7C7B\u578B",paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:7},{value:"key",paraId:2,tocIndex:7},{value:"\u6807\u7B7E\u7684\u552F\u4E00\u6807\u8BC6",paraId:2,tocIndex:7},{value:"string",paraId:2,tocIndex:7},{value:"undefined",paraId:2,tocIndex:7},{value:"label",paraId:2,tocIndex:7},{value:"\u6807\u7B7E\u6807\u9898",paraId:2,tocIndex:7},{value:"React.ReactNode",paraId:2,tocIndex:7},{value:"undefined",paraId:2,tocIndex:7},{value:"className",paraId:2,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:2,tocIndex:7},{value:"string",paraId:2,tocIndex:7},{value:"undefined",paraId:2,tocIndex:7},{value:"children",paraId:2,tocIndex:7},{value:"\u6807\u7B7E\u5185\u5BB9",paraId:2,tocIndex:7},{value:"React.ReactNode",paraId:2,tocIndex:7},{value:"undefined",paraId:2,tocIndex:7}]}}]);
