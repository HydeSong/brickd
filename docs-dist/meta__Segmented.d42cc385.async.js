"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[7768],{13476:function(y,v,n){var o;n.r(v),n.d(v,{demos:function(){return E}});var b=n(48305),g=n.n(b),h=n(90228),d=n.n(h),O=n(87999),p=n.n(O),u=n(75271),c=n(73440),E={"segmented-demo-0":{component:u.memo(u.lazy(p()(d()().mark(function s(){var l,t,a,r;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=e.sent,t=l.default,e.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return a=e.sent,r=a.Segmented,e.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(r,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]}))}});case 9:case"end":return e.stop()}},s)})))),asset:{type:"BLOCK",id:"segmented-demo-0",refAtomIds:["Segmented"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Segmented } from 'brickd';

export default () => (
  <div>
    <Segmented 
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]} 
    />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=n.t(u,2)),brickd:c},renderOpts:{compile:function(){var s=p()(d()().mark(function t(){var a,r=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},t)}));function l(){return s.apply(this,arguments)}return l}()}},"segmented-demo-1":{component:u.memo(u.lazy(p()(d()().mark(function s(){var l,t,a,r,i;return d()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=m.sent,t=l.default,a=l.useState,m.next=7,Promise.resolve().then(n.bind(n,73440));case 7:return r=m.sent,i=r.Segmented,m.abrupt("return",{default:function(){var P=a("1"),f=g()(P,2),I=f[0],S=f[1];return t.createElement("div",null,t.createElement(i,{value:I,onChange:S,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]}),t.createElement("div",{style:{marginTop:"16px"}},"Selected: ",I))}});case 10:case"end":return m.stop()}},s)})))),asset:{type:"BLOCK",id:"segmented-demo-1",refAtomIds:["Segmented"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Segmented } from 'brickd';

export default () => {
  const [value, setValue] = useState('1');
  
  return (
    <div>
      <Segmented 
        value={value}
        onChange={setValue}
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ]} 
      />
      <div style={{ marginTop: '16px' }}>
        Selected: {value}
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=n.t(u,2)),brickd:c},renderOpts:{compile:function(){var s=p()(d()().mark(function t(){var a,r=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},t)}));function l(){return s.apply(this,arguments)}return l}()}},"segmented-demo-2":{component:u.memo(u.lazy(p()(d()().mark(function s(){var l,t,a,r;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=e.sent,t=l.default,e.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return a=e.sent,r=a.Segmented,e.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(r,{disabled:!0,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}]}))}});case 9:case"end":return e.stop()}},s)})))),asset:{type:"BLOCK",id:"segmented-demo-2",refAtomIds:["Segmented"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Segmented } from 'brickd';

export default () => (
  <div>
    <Segmented 
      disabled
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ]} 
    />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=n.t(u,2)),brickd:c},renderOpts:{compile:function(){var s=p()(d()().mark(function t(){var a,r=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},t)}));function l(){return s.apply(this,arguments)}return l}()}},"segmented-demo-3":{component:u.memo(u.lazy(p()(d()().mark(function s(){var l,t,a,r;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=e.sent,t=l.default,e.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return a=e.sent,r=a.Segmented,e.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(r,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",disabled:!0},{label:"Option 3",value:"3"}]}))}});case 9:case"end":return e.stop()}},s)})))),asset:{type:"BLOCK",id:"segmented-demo-3",refAtomIds:["Segmented"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Segmented } from 'brickd';

export default () => (
  <div>
    <Segmented 
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2', disabled: true },
        { label: 'Option 3', value: '3' },
      ]} 
    />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=n.t(u,2)),brickd:c},renderOpts:{compile:function(){var s=p()(d()().mark(function t(){var a,r=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},t)}));function l(){return s.apply(this,arguments)}return l}()}},"segmented-demo-4":{component:u.memo(u.lazy(p()(d()().mark(function s(){var l,t,a,r;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=e.sent,t=l.default,e.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return a=e.sent,r=a.Segmented,e.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(r,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],style:{borderRadius:"8px",borderColor:"#1890ff"}}),t.createElement(r,{className:"custom-segmented",options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"}],style:{marginTop:"16px",fontSize:"14px",height:"40px"}}))}});case 9:case"end":return e.stop()}},s)})))),asset:{type:"BLOCK",id:"segmented-demo-4",refAtomIds:["Segmented"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Segmented } from 'brickd';

export default () => (
  <div>
    <Segmented 
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]} 
      style={{ 
        borderRadius: '8px',
        borderColor: '#1890ff'
      }} 
    />
    <Segmented 
      className="custom-segmented"
      options={[
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
      ]} 
      style={{ 
        marginTop: '16px',
        fontSize: '14px',
        height: '40px'
      }} 
    />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=n.t(u,2)),brickd:c},renderOpts:{compile:function(){var s=p()(d()().mark(function t(){var a,r=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},t)}));function l(){return s.apply(this,arguments)}return l}()}},"segmented-demo-5":{component:u.memo(u.lazy(p()(d()().mark(function s(){var l,t,a,r;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=e.sent,t=l.default,e.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return a=e.sent,r=a.Segmented,e.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(r,{defaultValue:"2",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]}))}});case 9:case"end":return e.stop()}},s)})))),asset:{type:"BLOCK",id:"segmented-demo-5",refAtomIds:["Segmented"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Segmented } from 'brickd';

export default () => (
  <div>
    <Segmented 
      defaultValue="2"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]} 
    />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=n.t(u,2)),brickd:c},renderOpts:{compile:function(){var s=p()(d()().mark(function t(){var a,r=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},t)}));function l(){return s.apply(this,arguments)}return l}()}}}},14835:function(y,v,n){n.r(v),n.d(v,{texts:function(){return o}});const o=[{value:"\u5206\u6BB5\u63A7\u5236\u5668\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5728\u591A\u4E2A\u9009\u9879\u4E2D\u9009\u62E9\u4E00\u4E2A\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:7},{value:"\u8BF4\u660E",paraId:1,tocIndex:7},{value:"\u7C7B\u578B",paraId:1,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:7},{value:"options",paraId:1,tocIndex:7},{value:"\u9009\u9879\u914D\u7F6E",paraId:1,tocIndex:7},{value:"Array<{ label: React.ReactNode, value: string | number, disabled?: boolean }>",paraId:1,tocIndex:7},{value:"[]",paraId:1,tocIndex:7},{value:"value",paraId:1,tocIndex:7},{value:"\u5F53\u524D\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:1,tocIndex:7},{value:"string | number",paraId:1,tocIndex:7},{value:"undefined",paraId:1,tocIndex:7},{value:"defaultValue",paraId:1,tocIndex:7},{value:"\u9ED8\u8BA4\u9009\u4E2D\u503C\uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:1,tocIndex:7},{value:"string | number",paraId:1,tocIndex:7},{value:"undefined",paraId:1,tocIndex:7},{value:"onChange",paraId:1,tocIndex:7},{value:"\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:7},{value:"(value: string | number) => void",paraId:1,tocIndex:7},{value:"undefined",paraId:1,tocIndex:7},{value:"disabled",paraId:1,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:1,tocIndex:7},{value:"boolean",paraId:1,tocIndex:7},{value:"false",paraId:1,tocIndex:7},{value:"className",paraId:1,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:7},{value:"string",paraId:1,tocIndex:7},{value:"''",paraId:1,tocIndex:7},{value:"style",paraId:1,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:7},{value:"React.CSSProperties",paraId:1,tocIndex:7},{value:"{}",paraId:1,tocIndex:7}]}}]);
