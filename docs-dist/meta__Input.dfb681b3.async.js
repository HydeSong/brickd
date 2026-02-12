"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[1808,849],{52341:function(x,c,e){var m;e.r(c),e.d(c,{demos:function(){return g}});var h=e(48305),y=e.n(h),D=e(90228),o=e.n(D),v=e(87999),s=e.n(v),d=e(75271),f=e(10849),g={"input-demo-0":{component:d.memo(d.lazy(s()(o()().mark(function u(){var l,r,t;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return d.createElement("div",null,d.createElement(r,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}))},a.next=3,e.e(9131).then(e.bind(e,39131));case 3:return l=a.sent,r=l.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"input-demo-0",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:`import Input from './index';

function InputBasicDemo() {
  return (
    <div>
      <Input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </div>
  );
}

export default InputBasicDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var u=s()(o()().mark(function r(){var t,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,p));case 3:case"end":return n.stop()}},r)}));function l(){return u.apply(this,arguments)}return l}()}},"input-demo-1":{component:d.memo(d.lazy(s()(o()().mark(function u(){var l,r,t;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return d.createElement("div",{style:{display:"flex",gap:"16px",flexDirection:"column"}},d.createElement(r,{size:"small",placeholder:"\u5C0F\u5C3A\u5BF8\u8F93\u5165\u6846"}),d.createElement(r,{size:"default",placeholder:"\u9ED8\u8BA4\u5C3A\u5BF8\u8F93\u5165\u6846"}),d.createElement(r,{size:"large",placeholder:"\u5927\u5C3A\u5BF8\u8F93\u5165\u6846"}))},a.next=3,e.e(9131).then(e.bind(e,39131));case 3:return l=a.sent,r=l.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"input-demo-1",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:`import Input from './index';

function InputSizeDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Input size="small" placeholder="\u5C0F\u5C3A\u5BF8\u8F93\u5165\u6846" />
      <Input size="default" placeholder="\u9ED8\u8BA4\u5C3A\u5BF8\u8F93\u5165\u6846" />
      <Input size="large" placeholder="\u5927\u5C3A\u5BF8\u8F93\u5165\u6846" />
    </div>
  );
}

export default InputSizeDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var u=s()(o()().mark(function r(){var t,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,p));case 3:case"end":return n.stop()}},r)}));function l(){return u.apply(this,arguments)}return l}()}},"input-demo-2":{component:d.memo(d.lazy(s()(o()().mark(function u(){var l,r,t;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return d.createElement("div",null,d.createElement(r,{disabled:!0,placeholder:"\u7981\u7528\u7684\u8F93\u5165\u6846"}))},a.next=3,e.e(9131).then(e.bind(e,39131));case 3:return l=a.sent,r=l.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"input-demo-2",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:`import Input from './index';

function InputDisabledDemo() {
  return (
    <div>
      <Input disabled placeholder="\u7981\u7528\u7684\u8F93\u5165\u6846" />
    </div>
  );
}

export default InputDisabledDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var u=s()(o()().mark(function r(){var t,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,p));case 3:case"end":return n.stop()}},r)}));function l(){return u.apply(this,arguments)}return l}()}},"input-demo-3":{component:d.memo(d.lazy(s()(o()().mark(function u(){var l,r,t;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return d.createElement("div",null,d.createElement(r,{readOnly:!0,defaultValue:"\u53EA\u8BFB\u7684\u8F93\u5165\u6846"}))},a.next=3,e.e(9131).then(e.bind(e,39131));case 3:return l=a.sent,r=l.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"input-demo-3",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:`import Input from './index';

function InputReadOnlyDemo() {
  return (
    <div>
      <Input readOnly defaultValue="\u53EA\u8BFB\u7684\u8F93\u5165\u6846" />
    </div>
  );
}

export default InputReadOnlyDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var u=s()(o()().mark(function r(){var t,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,p));case 3:case"end":return n.stop()}},r)}));function l(){return u.apply(this,arguments)}return l}()}},"input-demo-4":{component:d.memo(d.lazy(s()(o()().mark(function u(){var l,r,t;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return d.createElement("div",null,d.createElement(r,{error:!0,placeholder:"\u9519\u8BEF\u72B6\u6001\u7684\u8F93\u5165\u6846"}))},a.next=3,e.e(9131).then(e.bind(e,39131));case 3:return l=a.sent,r=l.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"input-demo-4",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:`import Input from './index';

function InputErrorDemo() {
  return (
    <div>
      <Input error placeholder="\u9519\u8BEF\u72B6\u6001\u7684\u8F93\u5165\u6846" />
    </div>
  );
}

export default InputErrorDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var u=s()(o()().mark(function r(){var t,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,p));case 3:case"end":return n.stop()}},r)}));function l(){return u.apply(this,arguments)}return l}()}},"input-demo-5":{component:d.memo(d.lazy(s()(o()().mark(function u(){var l,r,t,p,a;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=function(){return d.createElement("div",{style:{display:"flex",gap:"16px",flexDirection:"column"}},d.createElement(r,{prefix:d.createElement(p,{type:"search"}),placeholder:"\u5E26\u641C\u7D22\u56FE\u6807\u7684\u8F93\u5165\u6846"}),d.createElement(r,{suffix:d.createElement(p,{type:"clear"}),placeholder:"\u5E26\u6E05\u9664\u56FE\u6807\u7684\u8F93\u5165\u6846"}),d.createElement(r,{prefix:"\uFFE5",suffix:".00",placeholder:"\u5E26\u8D27\u5E01\u7B26\u53F7\u7684\u8F93\u5165\u6846"}))},i.next=3,e.e(9131).then(e.bind(e,39131));case 3:return l=i.sent,r=l.default,i.next=7,Promise.resolve().then(e.bind(e,10849));case 7:return t=i.sent,p=t.default,i.abrupt("return",{default:a});case 10:case"end":return i.stop()}},u)})))),asset:{type:"BLOCK",id:"input-demo-5",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:`import Input from './index';
import Icon from '../Icon';

function InputPrefixSuffixDemo() {
  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Input 
        prefix={<Icon type="search" />} 
        placeholder="\u5E26\u641C\u7D22\u56FE\u6807\u7684\u8F93\u5165\u6846" 
      />
      <Input 
        suffix={<Icon type="clear" />} 
        placeholder="\u5E26\u6E05\u9664\u56FE\u6807\u7684\u8F93\u5165\u6846" 
      />
      <Input 
        prefix="\uFFE5" 
        suffix=".00" 
        placeholder="\u5E26\u8D27\u5E01\u7B26\u53F7\u7684\u8F93\u5165\u6846" 
      />
    </div>
  );
}

export default InputPrefixSuffixDemo;`},"../Icon.tsx":{type:"FILE",value:e(4487).Z}},entry:"index.tsx"},context:{"../Icon.tsx":f,"/Users/hyde/Documents/Workspace/brickd/src/Icon/index.tsx":f},renderOpts:{compile:function(){var u=s()(o()().mark(function r(){var t,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,p));case 3:case"end":return n.stop()}},r)}));function l(){return u.apply(this,arguments)}return l}()}},"input-demo-6":{component:d.memo(d.lazy(s()(o()().mark(function u(){var l,r,t,p,a,n;return o()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return n=function(){var C=t(""),E=y()(C,2),O=E[0],$=E[1];return r.createElement("div",null,r.createElement(a,{value:O,onChange:function(z){return $(z.target.value)},placeholder:"\u53D7\u63A7\u8F93\u5165\u6846"}),r.createElement("p",{style:{marginTop:"8px"}},"\u5F53\u524D\u503C: ",O))},I.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return l=I.sent,r=l.default,t=l.useState,I.next=8,e.e(9131).then(e.bind(e,39131));case 8:return p=I.sent,a=p.default,I.abrupt("return",{default:n});case 11:case"end":return I.stop()}},u)})))),asset:{type:"BLOCK",id:"input-demo-6",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Input from './index';

function InputControlledDemo() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="\u53D7\u63A7\u8F93\u5165\u6846" 
      />
      <p style={{ marginTop: '8px' }}>\u5F53\u524D\u503C: {value}</p>
    </div>
  );
}

export default InputControlledDemo;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:m||(m=e.t(d,2))},renderOpts:{compile:function(){var u=s()(o()().mark(function r(){var t,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,p));case 3:case"end":return n.stop()}},r)}));function l(){return u.apply(this,arguments)}return l}()}},"input-demo-7":{component:d.memo(d.lazy(s()(o()().mark(function u(){var l,r,t;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return d.createElement("div",null,d.createElement(r,{defaultValue:"\u9ED8\u8BA4\u503C",placeholder:"\u975E\u53D7\u63A7\u8F93\u5165\u6846"}))},a.next=3,e.e(9131).then(e.bind(e,39131));case 3:return l=a.sent,r=l.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"input-demo-7",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:`import Input from './index';

function InputUncontrolledDemo() {
  return (
    <div>
      <Input defaultValue="\u9ED8\u8BA4\u503C" placeholder="\u975E\u53D7\u63A7\u8F93\u5165\u6846" />
    </div>
  );
}

export default InputUncontrolledDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var u=s()(o()().mark(function r(){var t,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,p));case 3:case"end":return n.stop()}},r)}));function l(){return u.apply(this,arguments)}return l}()}},"input-demo-8":{component:d.memo(d.lazy(s()(o()().mark(function u(){var l,r,t;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return d.createElement("div",null,d.createElement(r,{placeholder:"\u81EA\u5B9A\u4E49\u6837\u5F0F\u8F93\u5165\u6846",style:{width:300,border:"2px solid #1890ff",borderRadius:"8px",padding:"4px"}}))},a.next=3,e.e(9131).then(e.bind(e,39131));case 3:return l=a.sent,r=l.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"input-demo-8",refAtomIds:["Input"],dependencies:{"index.tsx":{type:"FILE",value:`import Input from './index';

function InputCustomDemo() {
  return (
    <div>
      <Input 
        placeholder="\u81EA\u5B9A\u4E49\u6837\u5F0F\u8F93\u5165\u6846" 
        style={{ 
          width: 300, 
          border: '2px solid #1890ff', 
          borderRadius: '8px', 
          padding: '4px' 
        }} 
      />
    </div>
  );
}

export default InputCustomDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var u=s()(o()().mark(function r(){var t,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,p));case 3:case"end":return n.stop()}},r)}));function l(){return u.apply(this,arguments)}return l}()}}}},10849:function(x,c,e){e.r(c),e.d(c,{default:function(){return D}});var m={icon:"Vp2lCjtRG4DLDFDyVAez","icon-home":"ulVgW4QY8wUom5HXWOuz","icon-search":"sAK0iM6ix40xZxS_gR3U","icon-user":"WUYhPdCcKFAxSpKQlO3t","icon-settings":"Ztk4ZKfgYg4J2Nmgcsjn","icon-arrow-right":"cxV9ttCA6QQkztjDqSDh","icon-arrow-left":"p5tsuFDYnk8_NAJ2QcNA","icon-arrow-up":"RL0LhMbJK8b1M0jwLYAY","icon-arrow-down":"DHSDUSNKuAoh1JeJkV0v","icon-plus":"hUkP6eCM8EMNXnxmHzG5","icon-minus":"Gf1qVZt2htU07CuTLi1X","icon-close":"shhoQ5dywb0V4tCsLHMN","icon-check":"vaoqDQYPDA0e9UdawIs_","icon-warning":"lMoCQOuGA0cxWF77Hi3f","icon-error":"Jp3AUMQ0eY_UXDunuEpk","icon-info":"MAuILQQxsPI3jjujx1cX",spin:"CiXqHgtYVPkCVvohw7xq"},h=e(52676),y=function(v){var s=v.type,d=v.size,f=d===void 0?"middle":d,g=v.color,u=v.rotate,l=v.spin,r=v.className,t=function(){if(typeof f=="number")return f;switch(f){case"small":return 16;case"large":return 24;case"middle":default:return 20}},p=t();return(0,h.jsx)("i",{className:`
        `.concat(m.icon,`
        `).concat(m[s]||"",`
        `).concat(l?m.spin:"",`
        `).concat(r||"",`
      `),style:{fontSize:"".concat(p,"px"),color:g,transform:u?"rotate(".concat(u,"deg)"):void 0}})},D=y},63298:function(x,c,e){e.r(c),e.d(c,{texts:function(){return m}});const m=[{value:"\u8F93\u5165\u6846\u7EC4\u4EF6\u7528\u4E8E\u63A5\u6536\u7528\u6237\u8F93\u5165\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5927\u5C0F\u3001\u7981\u7528\u72B6\u6001\u3001\u53EA\u8BFB\u72B6\u6001\u3001\u9519\u8BEF\u72B6\u6001\u3001\u524D\u7F00\u548C\u540E\u7F00\u7B49\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:3},{value:"size",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u8BBE\u7F6E\u8F93\u5165\u6846\u5C3A\u5BF8\uFF0C\u652F\u6301 ",paraId:1,tocIndex:3},{value:"small",paraId:1,tocIndex:3},{value:"\u3001",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:" \u548C ",paraId:1,tocIndex:3},{value:"large",paraId:1,tocIndex:3},{value:"\u3002",paraId:1,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:4},{value:"disabled",paraId:2,tocIndex:4},{value:" \u5C5E\u6027\u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u7981\u7528\u72B6\u6001\u3002",paraId:2,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:5},{value:"readOnly",paraId:3,tocIndex:5},{value:" \u5C5E\u6027\u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u53EA\u8BFB\u72B6\u6001\u3002",paraId:3,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:6},{value:"error",paraId:4,tocIndex:6},{value:" \u5C5E\u6027\u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u9519\u8BEF\u72B6\u6001\u3002",paraId:4,tocIndex:6},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:7},{value:"prefix",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"suffix",paraId:5,tocIndex:7},{value:" \u5C5E\u6027\u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u524D\u7F00\u548C\u540E\u7F00\u3002",paraId:5,tocIndex:7},{value:"\u901A\u8FC7 ",paraId:6,tocIndex:8},{value:"value",paraId:6,tocIndex:8},{value:" \u548C ",paraId:6,tocIndex:8},{value:"onChange",paraId:6,tocIndex:8},{value:" \u5C5E\u6027\u5B9E\u73B0\u53D7\u63A7\u6A21\u5F0F\u3002",paraId:6,tocIndex:8},{value:"\u901A\u8FC7 ",paraId:7,tocIndex:9},{value:"defaultValue",paraId:7,tocIndex:9},{value:" \u5C5E\u6027\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u5B9E\u73B0\u975E\u53D7\u63A7\u6A21\u5F0F\u3002",paraId:7,tocIndex:9},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:10},{value:"className",paraId:8,tocIndex:10},{value:" \u548C ",paraId:8,tocIndex:10},{value:"style",paraId:8,tocIndex:10},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u6837\u5F0F\u3002",paraId:8,tocIndex:10},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u8BF4\u660E",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"size",paraId:9,tocIndex:12},{value:"\u8F93\u5165\u6846\u5C3A\u5BF8",paraId:9,tocIndex:12},{value:"'small' | 'default' | 'large'",paraId:9,tocIndex:12},{value:"'default'",paraId:9,tocIndex:12},{value:"disabled",paraId:9,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:9,tocIndex:12},{value:"boolean",paraId:9,tocIndex:12},{value:"false",paraId:9,tocIndex:12},{value:"readOnly",paraId:9,tocIndex:12},{value:"\u662F\u5426\u53EA\u8BFB",paraId:9,tocIndex:12},{value:"boolean",paraId:9,tocIndex:12},{value:"false",paraId:9,tocIndex:12},{value:"error",paraId:9,tocIndex:12},{value:"\u662F\u5426\u9519\u8BEF\u72B6\u6001",paraId:9,tocIndex:12},{value:"boolean",paraId:9,tocIndex:12},{value:"false",paraId:9,tocIndex:12},{value:"prefix",paraId:9,tocIndex:12},{value:"\u524D\u7F00\u5185\u5BB9",paraId:9,tocIndex:12},{value:"React.ReactNode",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"suffix",paraId:9,tocIndex:12},{value:"\u540E\u7F00\u5185\u5BB9",paraId:9,tocIndex:12},{value:"React.ReactNode",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"className",paraId:9,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:9,tocIndex:12},{value:"string",paraId:9,tocIndex:12},{value:"''",paraId:9,tocIndex:12},{value:"style",paraId:9,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:9,tocIndex:12},{value:"React.CSSProperties",paraId:9,tocIndex:12},{value:"{}",paraId:9,tocIndex:12},{value:"value",paraId:9,tocIndex:12},{value:"\u5F53\u524D\u503C\uFF08\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:9,tocIndex:12},{value:"string",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"defaultValue",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C\uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:9,tocIndex:12},{value:"string",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"onChange",paraId:9,tocIndex:12},{value:"\u503C\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:9,tocIndex:12},{value:"(e: React.ChangeEvent<HTMLInputElement>) => void",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"placeholder",paraId:9,tocIndex:12},{value:"\u5360\u4F4D\u7B26\u6587\u672C",paraId:9,tocIndex:12},{value:"string",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"type",paraId:9,tocIndex:12},{value:"\u8F93\u5165\u6846\u7C7B\u578B",paraId:9,tocIndex:12},{value:"string",paraId:9,tocIndex:12},{value:"'text'",paraId:9,tocIndex:12},{value:"name",paraId:9,tocIndex:12},{value:"\u8F93\u5165\u6846\u540D\u79F0",paraId:9,tocIndex:12},{value:"string",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"id",paraId:9,tocIndex:12},{value:"\u8F93\u5165\u6846ID",paraId:9,tocIndex:12},{value:"string",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"autoFocus",paraId:9,tocIndex:12},{value:"\u662F\u5426\u81EA\u52A8\u805A\u7126",paraId:9,tocIndex:12},{value:"boolean",paraId:9,tocIndex:12},{value:"false",paraId:9,tocIndex:12},{value:"maxLength",paraId:9,tocIndex:12},{value:"\u6700\u5927\u8F93\u5165\u957F\u5EA6",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"minLength",paraId:9,tocIndex:12},{value:"\u6700\u5C0F\u8F93\u5165\u957F\u5EA6",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"pattern",paraId:9,tocIndex:12},{value:"\u8F93\u5165\u9A8C\u8BC1\u6B63\u5219",paraId:9,tocIndex:12},{value:"string",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"required",paraId:9,tocIndex:12},{value:"\u662F\u5426\u5FC5\u586B",paraId:9,tocIndex:12},{value:"boolean",paraId:9,tocIndex:12},{value:"false",paraId:9,tocIndex:12}]},4487:function(x,c){c.Z=`
import styles from './Icon.module.css';

interface IconProps {
  type: string;
  size?: 'small' | 'middle' | 'large' | number;
  color?: string;
  rotate?: number;
  spin?: boolean;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  type,
  size = 'middle',
  color,
  rotate,
  spin,
  className,
}) => {
  const getSizeValue = () => {
    if (typeof size === 'number') {
      return size;
    }
    switch (size) {
      case 'small':
        return 16;
      case 'large':
        return 24;
      case 'middle':
      default:
        return 20;
    }
  };

  const sizeValue = getSizeValue();

  return (
    <i
      className={\`
        \${styles.icon}
        \${styles[type] || ''}
        \${spin ? styles.spin : ''}
        \${className || ''}
      \`}
      style={{
        fontSize: \`\${sizeValue}px\`,
        color,
        transform: rotate ? \`rotate(\${rotate}deg)\` : undefined,
      }}
    />
  );
};

export default Icon;
`}}]);
