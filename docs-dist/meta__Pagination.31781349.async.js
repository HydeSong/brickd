"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[2444],{7271:function($,E,e){var p;e.r(E),e.d(E,{demos:function(){return B}});var R=e(90228),u=e.n(R),M=e(48305),S=e.n(M),L=e(87999),v=e.n(L),l=e(75271),B={"pagination-demo-0":{component:l.memo(l.lazy(v()(u()().mark(function d(){var i,r,t,o,s,n;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=function(){var y=t(1),m=S()(y,2),f=m[0],z=m[1],x=t(10),g=S()(x,2),h=g[0],D=g[1],I=function(P,C){z(P),D(C),console.log("Current page:",P,"Page size:",C)};return r.createElement("div",null,r.createElement(s,{current:f,pageSize:h,total:100,onChange:I}))},a.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return i=a.sent,r=i.default,t=i.useState,a.next=8,e.e(4844).then(e.bind(e,74844));case 8:return o=a.sent,s=o.default,a.abrupt("return",{default:n});case 11:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"pagination-demo-0",refAtomIds:["Pagination"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Pagination from './index';

function PaginationBasicDemo() {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleChange = (page: number, size: number) => {
    setCurrent(page);
    setPageSize(size);
    console.log('Current page:', page, 'Page size:', size);
  };

  return (
    <div>
      <Pagination 
        current={current}
        pageSize={pageSize}
        total={100}
        onChange={handleChange}
      />
    </div>
  );
}

export default PaginationBasicDemo;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(l,2))},renderOpts:{compile:function(){var d=v()(u()().mark(function r(){var t,o=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function i(){return d.apply(this,arguments)}return i}()}},"pagination-demo-1":{component:l.memo(l.lazy(v()(u()().mark(function d(){var i,r,t,o,s,n;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=function(){var y=t(1),m=S()(y,2),f=m[0],z=m[1],x=t(20),g=S()(x,2),h=g[0],D=g[1],I=function(P,C){z(P),D(C)};return r.createElement("div",null,r.createElement(s,{current:f,pageSize:h,total:200,pageSizeOptions:[5,10,20,50],onChange:I}))},a.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return i=a.sent,r=i.default,t=i.useState,a.next=8,e.e(4844).then(e.bind(e,74844));case 8:return o=a.sent,s=o.default,a.abrupt("return",{default:n});case 11:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"pagination-demo-1",refAtomIds:["Pagination"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Pagination from './index';

function PaginationCustomPageSizeDemo() {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const handleChange = (page: number, size: number) => {
    setCurrent(page);
    setPageSize(size);
  };

  return (
    <div>
      <Pagination 
        current={current}
        pageSize={pageSize}
        total={200}
        pageSizeOptions={[5, 10, 20, 50]}
        onChange={handleChange}
      />
    </div>
  );
}

export default PaginationCustomPageSizeDemo;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(l,2))},renderOpts:{compile:function(){var d=v()(u()().mark(function r(){var t,o=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function i(){return d.apply(this,arguments)}return i}()}},"pagination-demo-2":{component:l.memo(l.lazy(v()(u()().mark(function d(){var i,r,t,o,s,n;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=function(){var y=t(1),m=S()(y,2),f=m[0],z=m[1],x=t(10),g=S()(x,2),h=g[0],D=g[1],I=function(P,C){z(P),D(C)};return r.createElement("div",{style:{display:"flex",gap:"24px",flexDirection:"column"}},r.createElement(s,{current:f,pageSize:h,total:50,onChange:I}),r.createElement(s,{current:f,pageSize:h,total:150,onChange:I}),r.createElement(s,{current:f,pageSize:h,total:300,onChange:I}))},a.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return i=a.sent,r=i.default,t=i.useState,a.next=8,e.e(4844).then(e.bind(e,74844));case 8:return o=a.sent,s=o.default,a.abrupt("return",{default:n});case 11:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"pagination-demo-2",refAtomIds:["Pagination"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Pagination from './index';

function PaginationDifferentTotalDemo() {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleChange = (page: number, size: number) => {
    setCurrent(page);
    setPageSize(size);
  };

  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
      <Pagination 
        current={current}
        pageSize={pageSize}
        total={50}
        onChange={handleChange}
      />
      <Pagination 
        current={current}
        pageSize={pageSize}
        total={150}
        onChange={handleChange}
      />
      <Pagination 
        current={current}
        pageSize={pageSize}
        total={300}
        onChange={handleChange}
      />
    </div>
  );
}

export default PaginationDifferentTotalDemo;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(l,2))},renderOpts:{compile:function(){var d=v()(u()().mark(function r(){var t,o=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function i(){return d.apply(this,arguments)}return i}()}},"pagination-demo-3":{component:l.memo(l.lazy(v()(u()().mark(function d(){var i,r,t,o,s,n;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=function(){var y=t(1),m=S()(y,2),f=m[0],z=m[1],x=t(10),g=S()(x,2),h=g[0],D=g[1],I=function(P,C){z(P),D(C)};return r.createElement("div",null,r.createElement(s,{current:f,pageSize:h,total:100,onChange:I,style:{backgroundColor:"#f0f2f5",padding:"12px",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"}}))},a.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return i=a.sent,r=i.default,t=i.useState,a.next=8,e.e(4844).then(e.bind(e,74844));case 8:return o=a.sent,s=o.default,a.abrupt("return",{default:n});case 11:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"pagination-demo-3",refAtomIds:["Pagination"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Pagination from './index';

function PaginationCustomStyleDemo() {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleChange = (page: number, size: number) => {
    setCurrent(page);
    setPageSize(size);
  };

  return (
    <div>
      <Pagination 
        current={current}
        pageSize={pageSize}
        total={100}
        onChange={handleChange}
        style={{
          backgroundColor: '#f0f2f5',
          padding: '12px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  );
}

export default PaginationCustomStyleDemo;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(l,2))},renderOpts:{compile:function(){var d=v()(u()().mark(function r(){var t,o=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function i(){return d.apply(this,arguments)}return i}()}},"pagination-demo-4":{component:l.memo(l.lazy(v()(u()().mark(function d(){var i,r,t,o,s;return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return s=function(){return r.createElement("div",null,r.createElement(o,{total:0,onChange:function(){}}))},c.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return i=c.sent,r=i.default,c.next=7,e.e(4844).then(e.bind(e,74844));case 7:return t=c.sent,o=t.default,c.abrupt("return",{default:s});case 10:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"pagination-demo-4",refAtomIds:["Pagination"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Pagination from './index';

function PaginationDisabledDemo() {
  return (
    <div>
      <Pagination 
        total={0}
        onChange={() => {}}
      />
    </div>
  );
}

export default PaginationDisabledDemo;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(l,2))},renderOpts:{compile:function(){var d=v()(u()().mark(function r(){var t,o=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function i(){return d.apply(this,arguments)}return i}()}}}},19044:function($,E,e){e.r(E),e.d(E,{texts:function(){return p}});const p=[{value:"\u5206\u9875\u7EC4\u4EF6\u7528\u4E8E\u663E\u793A\u6570\u636E\u5206\u9875\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6BCF\u9875\u6761\u6570\u3001\u5F53\u524D\u9875\u7801\u3001\u603B\u6761\u6570\u7B49\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:3},{value:"pageSizeOptions",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u6BCF\u9875\u6761\u6570\u9009\u9879\u3002",paraId:1,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:4},{value:"total",paraId:2,tocIndex:4},{value:" \u5C5E\u6027\u8BBE\u7F6E\u4E0D\u540C\u7684\u603B\u6761\u6570\uFF0C\u5206\u9875\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u8BA1\u7B97\u603B\u9875\u6570\u3002",paraId:2,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:5},{value:"className",paraId:3,tocIndex:5},{value:" \u548C ",paraId:3,tocIndex:5},{value:"style",paraId:3,tocIndex:5},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u5206\u9875\u7EC4\u4EF6\u7684\u6837\u5F0F\u3002",paraId:3,tocIndex:5},{value:"\u5F53\u603B\u6761\u6570\u4E3A0\u65F6\uFF0C\u5206\u9875\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u8FDB\u5165\u7981\u7528\u72B6\u6001\u3002",paraId:4,tocIndex:6},{value:"\u5C5E\u6027",paraId:5,tocIndex:8},{value:"\u8BF4\u660E",paraId:5,tocIndex:8},{value:"\u7C7B\u578B",paraId:5,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:8},{value:"current",paraId:5,tocIndex:8},{value:"\u5F53\u524D\u9875\u7801",paraId:5,tocIndex:8},{value:"number",paraId:5,tocIndex:8},{value:"1",paraId:5,tocIndex:8},{value:"pageSize",paraId:5,tocIndex:8},{value:"\u6BCF\u9875\u6761\u6570",paraId:5,tocIndex:8},{value:"number",paraId:5,tocIndex:8},{value:"10",paraId:5,tocIndex:8},{value:"total",paraId:5,tocIndex:8},{value:"\u603B\u6761\u6570",paraId:5,tocIndex:8},{value:"number",paraId:5,tocIndex:8},{value:"0",paraId:5,tocIndex:8},{value:"pageSizeOptions",paraId:5,tocIndex:8},{value:"\u6BCF\u9875\u6761\u6570\u9009\u9879",paraId:5,tocIndex:8},{value:"number[]",paraId:5,tocIndex:8},{value:"[10, 20, 50, 100]",paraId:5,tocIndex:8},{value:"onChange",paraId:5,tocIndex:8},{value:"\u9875\u7801\u6216\u6BCF\u9875\u6761\u6570\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:5,tocIndex:8},{value:"(page: number, pageSize: number) => void",paraId:5,tocIndex:8},{value:"-",paraId:5,tocIndex:8},{value:"className",paraId:5,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:8},{value:"string",paraId:5,tocIndex:8},{value:"''",paraId:5,tocIndex:8},{value:"style",paraId:5,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:8},{value:"React.CSSProperties",paraId:5,tocIndex:8},{value:"{}",paraId:5,tocIndex:8}]}}]);
