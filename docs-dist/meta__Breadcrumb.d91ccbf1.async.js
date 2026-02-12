"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[1348],{62256:function(p,s,r){r.r(s),r.d(s,{demos:function(){return b}});var I=r(90228),m=r.n(I),i=r(87999),o=r.n(i),a=r(75271),b={"breadcrumb-demo-0":{component:a.memo(a.lazy(o()(m()().mark(function l(){var u,e,d;return m()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return d=function(){return a.createElement(e,null,a.createElement(e.Item,null,"\u9996\u9875"),a.createElement(e.Item,null,"\u7EC4\u4EF6"),a.createElement(e.Item,null,"\u9762\u5305\u5C51"))},n.next=3,r.e(6821).then(r.bind(r,36821));case 3:return u=n.sent,e=u.default,n.abrupt("return",{default:d});case 6:case"end":return n.stop()}},l)})))),asset:{type:"BLOCK",id:"breadcrumb-demo-0",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:`import Breadcrumb from './index';

function BreadcrumbBasicDemo() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>\u9996\u9875</Breadcrumb.Item>
      <Breadcrumb.Item>\u7EC4\u4EF6</Breadcrumb.Item>
      <Breadcrumb.Item>\u9762\u5305\u5C51</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbBasicDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var l=o()(m()().mark(function e(){var d,c=arguments;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(3015).then(r.bind(r,33015));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,c));case 3:case"end":return t.stop()}},e)}));function u(){return l.apply(this,arguments)}return u}()}},"breadcrumb-demo-1":{component:a.memo(a.lazy(o()(m()().mark(function l(){var u,e,d;return m()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return d=function(){return a.createElement(e,null,a.createElement(e.Item,{href:"/"},"\u9996\u9875"),a.createElement(e.Item,{href:"/components"},"\u7EC4\u4EF6"),a.createElement(e.Item,null,"\u9762\u5305\u5C51"))},n.next=3,r.e(6821).then(r.bind(r,36821));case 3:return u=n.sent,e=u.default,n.abrupt("return",{default:d});case 6:case"end":return n.stop()}},l)})))),asset:{type:"BLOCK",id:"breadcrumb-demo-1",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:`import Breadcrumb from './index';

function BreadcrumbWithLinkDemo() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">\u9996\u9875</Breadcrumb.Item>
      <Breadcrumb.Item href="/components">\u7EC4\u4EF6</Breadcrumb.Item>
      <Breadcrumb.Item>\u9762\u5305\u5C51</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbWithLinkDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var l=o()(m()().mark(function e(){var d,c=arguments;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(3015).then(r.bind(r,33015));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,c));case 3:case"end":return t.stop()}},e)}));function u(){return l.apply(this,arguments)}return u}()}},"breadcrumb-demo-2":{component:a.memo(a.lazy(o()(m()().mark(function l(){var u,e,d;return m()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return d=function(){return a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},a.createElement(e,null,a.createElement(e.Item,null,"\u9996\u9875"),a.createElement(e.Item,null,"\u7EC4\u4EF6"),a.createElement(e.Item,null,"\u9762\u5305\u5C51")),a.createElement(e,{separator:">"},a.createElement(e.Item,null,"\u9996\u9875"),a.createElement(e.Item,null,"\u7EC4\u4EF6"),a.createElement(e.Item,null,"\u9762\u5305\u5C51")),a.createElement(e,{separator:"/>"},a.createElement(e.Item,null,"\u9996\u9875"),a.createElement(e.Item,null,"\u7EC4\u4EF6"),a.createElement(e.Item,null,"\u9762\u5305\u5C51")))},n.next=3,r.e(6821).then(r.bind(r,36821));case 3:return u=n.sent,e=u.default,n.abrupt("return",{default:d});case 6:case"end":return n.stop()}},l)})))),asset:{type:"BLOCK",id:"breadcrumb-demo-2",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:`import Breadcrumb from './index';

function BreadcrumbCustomSeparatorDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Breadcrumb>
        <Breadcrumb.Item>\u9996\u9875</Breadcrumb.Item>
        <Breadcrumb.Item>\u7EC4\u4EF6</Breadcrumb.Item>
        <Breadcrumb.Item>\u9762\u5305\u5C51</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>\u9996\u9875</Breadcrumb.Item>
        <Breadcrumb.Item>\u7EC4\u4EF6</Breadcrumb.Item>
        <Breadcrumb.Item>\u9762\u5305\u5C51</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb separator="/>">
        <Breadcrumb.Item>\u9996\u9875</Breadcrumb.Item>
        <Breadcrumb.Item>\u7EC4\u4EF6</Breadcrumb.Item>
        <Breadcrumb.Item>\u9762\u5305\u5C51</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbCustomSeparatorDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var l=o()(m()().mark(function e(){var d,c=arguments;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(3015).then(r.bind(r,33015));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,c));case 3:case"end":return t.stop()}},e)}));function u(){return l.apply(this,arguments)}return u}()}},"breadcrumb-demo-3":{component:a.memo(a.lazy(o()(m()().mark(function l(){var u,e,d;return m()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return d=function(){return a.createElement(e,{style:{fontSize:"16px",color:"#1890ff"}},a.createElement(e.Item,null,"\u9996\u9875"),a.createElement(e.Item,null,"\u7EC4\u4EF6"),a.createElement(e.Item,null,"\u9762\u5305\u5C51"))},n.next=3,r.e(6821).then(r.bind(r,36821));case 3:return u=n.sent,e=u.default,n.abrupt("return",{default:d});case 6:case"end":return n.stop()}},l)})))),asset:{type:"BLOCK",id:"breadcrumb-demo-3",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:`import Breadcrumb from './index';

function BreadcrumbCustomStyleDemo() {
  return (
    <Breadcrumb style={{ fontSize: '16px', color: '#1890ff' }}>
      <Breadcrumb.Item>\u9996\u9875</Breadcrumb.Item>
      <Breadcrumb.Item>\u7EC4\u4EF6</Breadcrumb.Item>
      <Breadcrumb.Item>\u9762\u5305\u5C51</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbCustomStyleDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var l=o()(m()().mark(function e(){var d,c=arguments;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(3015).then(r.bind(r,33015));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,c));case 3:case"end":return t.stop()}},e)}));function u(){return l.apply(this,arguments)}return u}()}}}},78975:function(p,s,r){r.r(s),r.d(s,{texts:function(){return I}});const I=[{value:"\u9762\u5305\u5C51\u5BFC\u822A\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u663E\u793A\u5F53\u524D\u9875\u9762\u7684\u8DEF\u5F84\uFF0C\u5E2E\u52A9\u7528\u6237\u4E86\u89E3\u81EA\u5DF1\u7684\u4F4D\u7F6E\u5E76\u5FEB\u901F\u8FD4\u56DE\u4E0A\u4E00\u7EA7\u9875\u9762\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u9762\u5305\u5C51\u7528\u6CD5\uFF0C\u663E\u793A\u5C42\u7EA7\u8DEF\u5F84\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"href",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u8BBE\u7F6E\u9762\u5305\u5C51\u9879\u7684\u94FE\u63A5\uFF0C\u70B9\u51FB\u53EF\u4EE5\u8DF3\u8F6C\u5230\u5BF9\u5E94\u9875\u9762\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"separator",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u9762\u5305\u5C51\u9879\u4E4B\u95F4\u7684\u5206\u9694\u7B26\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"className",paraId:4,tocIndex:5},{value:" \u548C ",paraId:4,tocIndex:5},{value:"style",paraId:4,tocIndex:5},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u9762\u5305\u5C51\u6837\u5F0F\u3002",paraId:4,tocIndex:5},{value:"\u5C5E\u6027",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"className",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"''",paraId:5,tocIndex:7},{value:"style",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:7},{value:"React.CSSProperties",paraId:5,tocIndex:7},{value:"{}",paraId:5,tocIndex:7},{value:"separator",paraId:5,tocIndex:7},{value:"\u5206\u9694\u7B26",paraId:5,tocIndex:7},{value:"React.ReactNode",paraId:5,tocIndex:7},{value:"'/'",paraId:5,tocIndex:7},{value:"children",paraId:5,tocIndex:7},{value:"\u5B50\u5143\u7D20\uFF0C\u901A\u5E38\u662F Breadcrumb.Item \u7EC4\u4EF6",paraId:5,tocIndex:7},{value:"React.ReactNode",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"\u5C5E\u6027",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u7C7B\u578B",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"href",paraId:6,tocIndex:8},{value:"\u94FE\u63A5\u5730\u5740",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"className",paraId:6,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"''",paraId:6,tocIndex:8},{value:"children",paraId:6,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:6,tocIndex:8},{value:"React.ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8}]}}]);
