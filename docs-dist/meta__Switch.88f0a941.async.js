"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[2802],{27298:function(I,v,t){var c;t.r(v),t.d(v,{demos:function(){return S}});var y=t(48305),x=t.n(y),E=t(90228),l=t.n(E),g=t(87999),m=t.n(g),i=t(75271),p=t(73440),S={"switch-demo-0":{component:i.memo(i.lazy(m()(l()().mark(function s(){var d,n,a,r;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return d=e.sent,n=d.default,e.next=6,Promise.resolve().then(t.bind(t,73440));case 6:return a=e.sent,r=a.Switch,e.abrupt("return",{default:function(){return n.createElement("div",null,n.createElement(r,null))}});case 9:case"end":return e.stop()}},s)})))),asset:{type:"BLOCK",id:"switch-demo-0",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'brickd';

export default () => (
  <div>
    <Switch />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:c||(c=t.t(i,2)),brickd:p},renderOpts:{compile:function(){var s=m()(l()().mark(function n(){var a,r=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(3015).then(t.bind(t,33015));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},n)}));function d(){return s.apply(this,arguments)}return d}()}},"switch-demo-1":{component:i.memo(i.lazy(m()(l()().mark(function s(){var d,n,a,r;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return d=e.sent,n=d.default,e.next=6,Promise.resolve().then(t.bind(t,73440));case 6:return a=e.sent,r=a.Switch,e.abrupt("return",{default:function(){return n.createElement("div",null,n.createElement(r,{size:"small",style:{marginRight:"20px"}}),n.createElement(r,{size:"default",style:{marginRight:"20px"}}),n.createElement(r,{size:"large"}))}});case 9:case"end":return e.stop()}},s)})))),asset:{type:"BLOCK",id:"switch-demo-1",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'brickd';

export default () => (
  <div>
    <Switch size="small" style={{ marginRight: '20px' }} />
    <Switch size="default" style={{ marginRight: '20px' }} />
    <Switch size="large" />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:c||(c=t.t(i,2)),brickd:p},renderOpts:{compile:function(){var s=m()(l()().mark(function n(){var a,r=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(3015).then(t.bind(t,33015));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},n)}));function d(){return s.apply(this,arguments)}return d}()}},"switch-demo-2":{component:i.memo(i.lazy(m()(l()().mark(function s(){var d,n,a,r;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return d=e.sent,n=d.default,e.next=6,Promise.resolve().then(t.bind(t,73440));case 6:return a=e.sent,r=a.Switch,e.abrupt("return",{default:function(){return n.createElement("div",null,n.createElement(r,{disabled:!0}),n.createElement(r,{disabled:!0,checked:!0,style:{marginLeft:"20px"}}))}});case 9:case"end":return e.stop()}},s)})))),asset:{type:"BLOCK",id:"switch-demo-2",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'brickd';

export default () => (
  <div>
    <Switch disabled />
    <Switch disabled checked style={{ marginLeft: '20px' }} />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:c||(c=t.t(i,2)),brickd:p},renderOpts:{compile:function(){var s=m()(l()().mark(function n(){var a,r=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(3015).then(t.bind(t,33015));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},n)}));function d(){return s.apply(this,arguments)}return d}()}},"switch-demo-3":{component:i.memo(i.lazy(m()(l()().mark(function s(){var d,n,a,r,u;return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return d=o.sent,n=d.default,a=d.useState,o.next=7,Promise.resolve().then(t.bind(t,73440));case 7:return r=o.sent,u=r.Switch,o.abrupt("return",{default:function(){var b=a(!1),h=x()(b,2),f=h[0],P=h[1];return n.createElement("div",null,n.createElement(u,{checked:f,onChange:function(R){return P(R.target.checked)}}),n.createElement("div",{style:{marginTop:"16px"}},"Status: ",f?"On":"Off"))}});case 10:case"end":return o.stop()}},s)})))),asset:{type:"BLOCK",id:"switch-demo-3",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Switch } from 'brickd';

export default () => {
  const [checked, setChecked] = useState(false);
  
  return (
    <div>
      <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      <div style={{ marginTop: '16px' }}>
        Status: {checked ? 'On' : 'Off'}
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:c||(c=t.t(i,2)),brickd:p},renderOpts:{compile:function(){var s=m()(l()().mark(function n(){var a,r=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(3015).then(t.bind(t,33015));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},n)}));function d(){return s.apply(this,arguments)}return d}()}},"switch-demo-4":{component:i.memo(i.lazy(m()(l()().mark(function s(){var d,n,a,r;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return d=e.sent,n=d.default,e.next=6,Promise.resolve().then(t.bind(t,73440));case 6:return a=e.sent,r=a.Switch,e.abrupt("return",{default:function(){return n.createElement("div",null,n.createElement(r,{label:"\u5F00\u5173\u6807\u7B7E"}))}});case 9:case"end":return e.stop()}},s)})))),asset:{type:"BLOCK",id:"switch-demo-4",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'brickd';

export default () => (
  <div>
    <Switch label="\u5F00\u5173\u6807\u7B7E" />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:c||(c=t.t(i,2)),brickd:p},renderOpts:{compile:function(){var s=m()(l()().mark(function n(){var a,r=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(3015).then(t.bind(t,33015));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},n)}));function d(){return s.apply(this,arguments)}return d}()}},"switch-demo-5":{component:i.memo(i.lazy(m()(l()().mark(function s(){var d,n,a,r;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.t.bind(t,75271,19));case 2:return d=e.sent,n=d.default,e.next=6,Promise.resolve().then(t.bind(t,73440));case 6:return a=e.sent,r=a.Switch,e.abrupt("return",{default:function(){return n.createElement("div",null,n.createElement(r,{className:"custom-switch",style:{marginRight:"20px",fontSize:"16px"}}),n.createElement(r,{style:{marginTop:"16px",padding:"8px",border:"1px solid #d9d9d9",borderRadius:"4px"},label:"\u5E26\u8FB9\u6846\u7684\u5F00\u5173"}))}});case 9:case"end":return e.stop()}},s)})))),asset:{type:"BLOCK",id:"switch-demo-5",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Switch } from 'brickd';

export default () => (
  <div>
    <Switch 
      className="custom-switch"
      style={{ 
        marginRight: '20px',
        fontSize: '16px'
      }} 
    />
    <Switch 
      style={{ 
        marginTop: '16px',
        padding: '8px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px'
      }}
      label="\u5E26\u8FB9\u6846\u7684\u5F00\u5173"
    />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:c||(c=t.t(i,2)),brickd:p},renderOpts:{compile:function(){var s=m()(l()().mark(function n(){var a,r=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(3015).then(t.bind(t,33015));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},n)}));function d(){return s.apply(this,arguments)}return d}()}}}},6516:function(I,v,t){t.r(v),t.d(v,{texts:function(){return c}});const c=[{value:"\u5F00\u5173\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5728\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u5207\u6362\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:7},{value:"\u8BF4\u660E",paraId:1,tocIndex:7},{value:"\u7C7B\u578B",paraId:1,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:7},{value:"size",paraId:1,tocIndex:7},{value:"\u5F00\u5173\u5927\u5C0F",paraId:1,tocIndex:7},{value:"'small' | 'default' | 'large'",paraId:1,tocIndex:7},{value:"'default'",paraId:1,tocIndex:7},{value:"disabled",paraId:1,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:1,tocIndex:7},{value:"boolean",paraId:1,tocIndex:7},{value:"false",paraId:1,tocIndex:7},{value:"checked",paraId:1,tocIndex:7},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:1,tocIndex:7},{value:"boolean",paraId:1,tocIndex:7},{value:"undefined",paraId:1,tocIndex:7},{value:"defaultChecked",paraId:1,tocIndex:7},{value:"\u9ED8\u8BA4\u662F\u5426\u9009\u4E2D\uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:1,tocIndex:7},{value:"boolean",paraId:1,tocIndex:7},{value:"false",paraId:1,tocIndex:7},{value:"onChange",paraId:1,tocIndex:7},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:7},{value:"(e: React.ChangeEvent<HTMLInputElement>) => void",paraId:1,tocIndex:7},{value:"undefined",paraId:1,tocIndex:7},{value:"onCheck",paraId:1,tocIndex:7},{value:"\u9009\u4E2D\u72B6\u6001\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:7},{value:"(checked: boolean) => void",paraId:1,tocIndex:7},{value:"undefined",paraId:1,tocIndex:7},{value:"label",paraId:1,tocIndex:7},{value:"\u5F00\u5173\u6807\u7B7E",paraId:1,tocIndex:7},{value:"React.ReactNode",paraId:1,tocIndex:7},{value:"undefined",paraId:1,tocIndex:7},{value:"className",paraId:1,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:7},{value:"string",paraId:1,tocIndex:7},{value:"''",paraId:1,tocIndex:7},{value:"style",paraId:1,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:7},{value:"React.CSSProperties",paraId:1,tocIndex:7},{value:"{}",paraId:1,tocIndex:7}]}}]);
