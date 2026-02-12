(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[3656,7656],{29900:function(P,C,e){"use strict";var c;e.r(C),e.d(C,{demos:function(){return R}});var b=e(90228),s=e.n(b),D=e(48305),x=e.n(D),T=e(87999),p=e.n(T),u=e(75271),h=e(97656),R={"popconfirm-demo-0":{component:u.memo(u.lazy(p()(s()().mark(function m(){var o,r,a,l,i,n,d,v;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return v=function(){var B=a(""),I=x()(B,2),g=I[0],E=I[1],y=function(){E("\u60A8\u70B9\u51FB\u4E86\u786E\u5B9A\u6309\u94AE")};return r.createElement("div",null,r.createElement(i,{title:"\u786E\u8BA4\u64CD\u4F5C",description:"\u60A8\u786E\u5B9A\u8981\u6267\u884C\u6B64\u64CD\u4F5C\u5417\uFF1F",onConfirm:y},r.createElement(d,{type:"primary"},"\u70B9\u51FB\u786E\u8BA4")),g&&r.createElement("p",{style:{marginTop:"16px"}},g))},t.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return o=t.sent,r=o.default,a=o.useState,t.next=8,e.e(1037).then(e.bind(e,11037));case 8:return l=t.sent,i=l.default,t.next=12,Promise.resolve().then(e.bind(e,97656));case 12:return n=t.sent,d=n.default,t.abrupt("return",{default:v});case 15:case"end":return t.stop()}},m)})))),asset:{type:"BLOCK",id:"popconfirm-demo-0",refAtomIds:["Popconfirm"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Popconfirm from './index';
import Button from '../Button';

function PopconfirmBasicDemo() {
  const [confirmText, setConfirmText] = useState('');

  const handleConfirm = () => {
    setConfirmText('\u60A8\u70B9\u51FB\u4E86\u786E\u5B9A\u6309\u94AE');
  };

  return (
    <div>
      <Popconfirm 
        title="\u786E\u8BA4\u64CD\u4F5C"
        description="\u60A8\u786E\u5B9A\u8981\u6267\u884C\u6B64\u64CD\u4F5C\u5417\uFF1F"
        onConfirm={handleConfirm}
      >
        <Button type="primary">\u70B9\u51FB\u786E\u8BA4</Button>
      </Popconfirm>
      {confirmText && <p style={{ marginTop: '16px' }}>{confirmText}</p>}
    </div>
  );
}

export default PopconfirmBasicDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":h,react:c||(c=e.t(u,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":h},renderOpts:{compile:function(){var m=p()(s()().mark(function r(){var a,l=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},r)}));function o(){return m.apply(this,arguments)}return o}()}},"popconfirm-demo-1":{component:u.memo(u.lazy(p()(s()().mark(function m(){var o,r,a,l,i,n,d,v;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return v=function(){var B=a(""),I=x()(B,2),g=I[0],E=I[1],y=function(){E("\u60A8\u70B9\u51FB\u4E86\u786E\u5B9A\u6309\u94AE")};return r.createElement("div",{style:{display:"flex",gap:"24px"}},r.createElement(i,{title:"\u786E\u8BA4\u64CD\u4F5C",description:"\u60A8\u786E\u5B9A\u8981\u6267\u884C\u6B64\u64CD\u4F5C\u5417\uFF1F",onConfirm:y,trigger:"click"},r.createElement(d,{type:"primary"},"\u70B9\u51FB\u89E6\u53D1")),r.createElement(i,{title:"\u786E\u8BA4\u64CD\u4F5C",description:"\u60A8\u786E\u5B9A\u8981\u6267\u884C\u6B64\u64CD\u4F5C\u5417\uFF1F",onConfirm:y,trigger:"hover"},r.createElement(d,{type:"default"},"\u60AC\u505C\u89E6\u53D1")))},t.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return o=t.sent,r=o.default,a=o.useState,t.next=8,e.e(1037).then(e.bind(e,11037));case 8:return l=t.sent,i=l.default,t.next=12,Promise.resolve().then(e.bind(e,97656));case 12:return n=t.sent,d=n.default,t.abrupt("return",{default:v});case 15:case"end":return t.stop()}},m)})))),asset:{type:"BLOCK",id:"popconfirm-demo-1",refAtomIds:["Popconfirm"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Popconfirm from './index';
import Button from '../Button';

function PopconfirmDifferentTriggerDemo() {
  const [confirmText, setConfirmText] = useState('');

  const handleConfirm = () => {
    setConfirmText('\u60A8\u70B9\u51FB\u4E86\u786E\u5B9A\u6309\u94AE');
  };

  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Popconfirm 
        title="\u786E\u8BA4\u64CD\u4F5C"
        description="\u60A8\u786E\u5B9A\u8981\u6267\u884C\u6B64\u64CD\u4F5C\u5417\uFF1F"
        onConfirm={handleConfirm}
        trigger="click"
      >
        <Button type="primary">\u70B9\u51FB\u89E6\u53D1</Button>
      </Popconfirm>
      <Popconfirm 
        title="\u786E\u8BA4\u64CD\u4F5C"
        description="\u60A8\u786E\u5B9A\u8981\u6267\u884C\u6B64\u64CD\u4F5C\u5417\uFF1F"
        onConfirm={handleConfirm}
        trigger="hover"
      >
        <Button type="default">\u60AC\u505C\u89E6\u53D1</Button>
      </Popconfirm>
    </div>
  );
}

export default PopconfirmDifferentTriggerDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":h,react:c||(c=e.t(u,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":h},renderOpts:{compile:function(){var m=p()(s()().mark(function r(){var a,l=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},r)}));function o(){return m.apply(this,arguments)}return o}()}},"popconfirm-demo-2":{component:u.memo(u.lazy(p()(s()().mark(function m(){var o,r,a,l,i,n,d,v;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return v=function(){var B=a(""),I=x()(B,2),g=I[0],E=I[1],y=function(){E("\u60A8\u70B9\u51FB\u4E86\u786E\u5B9A\u6309\u94AE")};return r.createElement("div",{style:{display:"flex",gap:"24px",flexDirection:"column"}},r.createElement(i,{title:"\u9876\u90E8\u786E\u8BA4",onConfirm:y,placement:"top"},r.createElement(d,{type:"primary"},"\u9876\u90E8")),r.createElement(i,{title:"\u5E95\u90E8\u786E\u8BA4",onConfirm:y,placement:"bottom"},r.createElement(d,{type:"primary"},"\u5E95\u90E8")),r.createElement("div",{style:{display:"flex",gap:"24px"}},r.createElement(i,{title:"\u5DE6\u4FA7\u786E\u8BA4",onConfirm:y,placement:"left"},r.createElement(d,{type:"primary"},"\u5DE6\u4FA7")),r.createElement(i,{title:"\u53F3\u4FA7\u786E\u8BA4",onConfirm:y,placement:"right"},r.createElement(d,{type:"primary"},"\u53F3\u4FA7"))))},t.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return o=t.sent,r=o.default,a=o.useState,t.next=8,e.e(1037).then(e.bind(e,11037));case 8:return l=t.sent,i=l.default,t.next=12,Promise.resolve().then(e.bind(e,97656));case 12:return n=t.sent,d=n.default,t.abrupt("return",{default:v});case 15:case"end":return t.stop()}},m)})))),asset:{type:"BLOCK",id:"popconfirm-demo-2",refAtomIds:["Popconfirm"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Popconfirm from './index';
import Button from '../Button';

function PopconfirmDifferentPlacementDemo() {
  const [confirmText, setConfirmText] = useState('');

  const handleConfirm = () => {
    setConfirmText('\u60A8\u70B9\u51FB\u4E86\u786E\u5B9A\u6309\u94AE');
  };

  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
      <Popconfirm 
        title="\u9876\u90E8\u786E\u8BA4" 
        onConfirm={handleConfirm}
        placement="top"
      >
        <Button type="primary">\u9876\u90E8</Button>
      </Popconfirm>
      <Popconfirm 
        title="\u5E95\u90E8\u786E\u8BA4" 
        onConfirm={handleConfirm}
        placement="bottom"
      >
        <Button type="primary">\u5E95\u90E8</Button>
      </Popconfirm>
      <div style={{ display: 'flex', gap: '24px' }}>
        <Popconfirm 
          title="\u5DE6\u4FA7\u786E\u8BA4" 
          onConfirm={handleConfirm}
          placement="left"
        >
          <Button type="primary">\u5DE6\u4FA7</Button>
        </Popconfirm>
        <Popconfirm 
          title="\u53F3\u4FA7\u786E\u8BA4" 
          onConfirm={handleConfirm}
          placement="right"
        >
          <Button type="primary">\u53F3\u4FA7</Button>
        </Popconfirm>
      </div>
    </div>
  );
}

export default PopconfirmDifferentPlacementDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":h,react:c||(c=e.t(u,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":h},renderOpts:{compile:function(){var m=p()(s()().mark(function r(){var a,l=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},r)}));function o(){return m.apply(this,arguments)}return o}()}},"popconfirm-demo-3":{component:u.memo(u.lazy(p()(s()().mark(function m(){var o,r,a,l,i,n,d,v;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return v=function(){var B=a(""),I=x()(B,2),g=I[0],E=I[1],y=function(){E("\u60A8\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE")};return r.createElement("div",null,r.createElement(i,{title:"\u786E\u8BA4\u5220\u9664",description:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u5185\u5BB9\u5417\uFF1F",onConfirm:y,okText:"\u5220\u9664",cancelText:"\u53D6\u6D88\u64CD\u4F5C"},r.createElement(d,{type:"danger"},"\u5220\u9664")),g&&r.createElement("p",{style:{marginTop:"16px"}},g))},t.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return o=t.sent,r=o.default,a=o.useState,t.next=8,e.e(1037).then(e.bind(e,11037));case 8:return l=t.sent,i=l.default,t.next=12,Promise.resolve().then(e.bind(e,97656));case 12:return n=t.sent,d=n.default,t.abrupt("return",{default:v});case 15:case"end":return t.stop()}},m)})))),asset:{type:"BLOCK",id:"popconfirm-demo-3",refAtomIds:["Popconfirm"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Popconfirm from './index';
import Button from '../Button';

function PopconfirmCustomButtonTextDemo() {
  const [confirmText, setConfirmText] = useState('');

  const handleConfirm = () => {
    setConfirmText('\u60A8\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE');
  };

  return (
    <div>
      <Popconfirm 
        title="\u786E\u8BA4\u5220\u9664"
        description="\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u5185\u5BB9\u5417\uFF1F"
        onConfirm={handleConfirm}
        okText="\u5220\u9664"
        cancelText="\u53D6\u6D88\u64CD\u4F5C"
      >
        <Button type="danger">\u5220\u9664</Button>
      </Popconfirm>
      {confirmText && <p style={{ marginTop: '16px' }}>{confirmText}</p>}
    </div>
  );
}

export default PopconfirmCustomButtonTextDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":h,react:c||(c=e.t(u,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":h},renderOpts:{compile:function(){var m=p()(s()().mark(function r(){var a,l=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},r)}));function o(){return m.apply(this,arguments)}return o}()}},"popconfirm-demo-4":{component:u.memo(u.lazy(p()(s()().mark(function m(){var o,r,a,l,i,n,d;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return d=function(){var $=function(){console.log("\u786E\u8BA4\u64CD\u4F5C")};return r.createElement("div",null,r.createElement(l,{title:"\u786E\u8BA4\u64CD\u4F5C",description:"\u60A8\u786E\u5B9A\u8981\u6267\u884C\u6B64\u64CD\u4F5C\u5417\uFF1F",onConfirm:$,disabled:!0},r.createElement(n,{type:"primary",disabled:!0},"\u7981\u7528\u786E\u8BA4")))},f.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return o=f.sent,r=o.default,f.next=7,e.e(1037).then(e.bind(e,11037));case 7:return a=f.sent,l=a.default,f.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return i=f.sent,n=i.default,f.abrupt("return",{default:d});case 14:case"end":return f.stop()}},m)})))),asset:{type:"BLOCK",id:"popconfirm-demo-4",refAtomIds:["Popconfirm"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Popconfirm from './index';
import Button from '../Button';

function PopconfirmDisabledDemo() {
  const handleConfirm = () => {
    console.log('\u786E\u8BA4\u64CD\u4F5C');
  };

  return (
    <div>
      <Popconfirm 
        title="\u786E\u8BA4\u64CD\u4F5C"
        description="\u60A8\u786E\u5B9A\u8981\u6267\u884C\u6B64\u64CD\u4F5C\u5417\uFF1F"
        onConfirm={handleConfirm}
        disabled
      >
        <Button type="primary" disabled>\u7981\u7528\u786E\u8BA4</Button>
      </Popconfirm>
    </div>
  );
}

export default PopconfirmDisabledDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":h,react:c||(c=e.t(u,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":h},renderOpts:{compile:function(){var m=p()(s()().mark(function r(){var a,l=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},r)}));function o(){return m.apply(this,arguments)}return o}()}},"popconfirm-demo-5":{component:u.memo(u.lazy(p()(s()().mark(function m(){var o,r,a,l,i,n,d,v;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return v=function(){var B=a(""),I=x()(B,2),g=I[0],E=I[1],y=function(){E("\u60A8\u70B9\u51FB\u4E86\u786E\u5B9A\u6309\u94AE")};return r.createElement("div",null,r.createElement(i,{title:"\u786E\u8BA4\u64CD\u4F5C",description:"\u60A8\u786E\u5B9A\u8981\u6267\u884C\u6B64\u64CD\u4F5C\u5417\uFF1F",onConfirm:y,style:{"--popconfirm-background":"#f0f9ff","--popconfirm-border-color":"#1890ff"}},r.createElement(d,{type:"primary"},"\u81EA\u5B9A\u4E49\u6837\u5F0F")),g&&r.createElement("p",{style:{marginTop:"16px"}},g))},t.next=3,Promise.resolve().then(e.t.bind(e,75271,19));case 3:return o=t.sent,r=o.default,a=o.useState,t.next=8,e.e(1037).then(e.bind(e,11037));case 8:return l=t.sent,i=l.default,t.next=12,Promise.resolve().then(e.bind(e,97656));case 12:return n=t.sent,d=n.default,t.abrupt("return",{default:v});case 15:case"end":return t.stop()}},m)})))),asset:{type:"BLOCK",id:"popconfirm-demo-5",refAtomIds:["Popconfirm"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Popconfirm from './index';
import Button from '../Button';

function PopconfirmCustomStyleDemo() {
  const [confirmText, setConfirmText] = useState('');

  const handleConfirm = () => {
    setConfirmText('\u60A8\u70B9\u51FB\u4E86\u786E\u5B9A\u6309\u94AE');
  };

  return (
    <div>
      <Popconfirm 
        title="\u786E\u8BA4\u64CD\u4F5C"
        description="\u60A8\u786E\u5B9A\u8981\u6267\u884C\u6B64\u64CD\u4F5C\u5417\uFF1F"
        onConfirm={handleConfirm}
        style={{
          '--popconfirm-background': '#f0f9ff',
          '--popconfirm-border-color': '#1890ff',
        }}
      >
        <Button type="primary">\u81EA\u5B9A\u4E49\u6837\u5F0F</Button>
      </Popconfirm>
      {confirmText && <p style={{ marginTop: '16px' }}>{confirmText}</p>}
    </div>
  );
}

export default PopconfirmCustomStyleDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":h,react:c||(c=e.t(u,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":h},renderOpts:{compile:function(){var m=p()(s()().mark(function r(){var a,l=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},r)}));function o(){return m.apply(this,arguments)}return o}()}}}},97656:function(P,C,e){"use strict";e.r(C),e.d(C,{default:function(){return R}});var c=e(26068),b=e.n(c),s=e(67825),D=e.n(s),x=e(75271),T={button:"AyHMn4pptwgAqTM0zVxe",small:"mtziivfRPkRk_hPU_E8r",default:"CH0d2t1M7c0F2z59aWp3",large:"RH0k6h4jVrUDWtwndzsD",primary:"DPc0H8GPQ0xHQRlthXLJ",disabled:"tsWfJ_Ys0PMwNuyfv9ZE",dashed:"IioY1o_nDcycA39jljNu",text:"uXPLhO_cvecV4slBdUG9",link:"dEu3aIhxJygUwZzIAxyd"},p=e(52676),u=["type","size","disabled","children","onClick","className","style","htmlType"],h=function(o){var r=o.type,a=r===void 0?"default":r,l=o.size,i=l===void 0?"default":l,n=o.disabled,d=n===void 0?!1:n,v=o.children,f=o.onClick,t=o.className,$=t===void 0?"":t,B=o.style,I=B===void 0?{}:B,g=o.htmlType,E=g===void 0?"button":g,y=D()(o,u),S=function(){var O=[T.button];return O.push(T[a]),O.push(T[i]),d&&O.push(T.disabled),$&&O.push($),O.join(" ")},L=function(){!d&&f&&f()};return(0,p.jsx)("button",b()(b()({type:E==="submit"?"submit":E==="reset"?"reset":"button",className:S(),style:I,disabled:d,onClick:L},y),{},{children:v}))},R=h},70818:function(P,C,e){"use strict";e.r(C),e.d(C,{texts:function(){return c}});const c=[{value:"\u786E\u8BA4\u6C14\u6CE1\u7EC4\u4EF6\u7528\u4E8E\u5728\u7528\u6237\u6267\u884C\u64CD\u4F5C\u524D\u663E\u793A\u786E\u8BA4\u5BF9\u8BDD\u6846\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6807\u9898\u3001\u63CF\u8FF0\u3001\u6309\u94AE\u6587\u672C\u7B49\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:3},{value:"trigger",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u8BBE\u7F6E\u4E0D\u540C\u7684\u89E6\u53D1\u65B9\u5F0F\uFF0C\u652F\u6301 ",paraId:1,tocIndex:3},{value:"click",paraId:1,tocIndex:3},{value:"\u3001",paraId:1,tocIndex:3},{value:"hover",paraId:1,tocIndex:3},{value:" \u548C ",paraId:1,tocIndex:3},{value:"focus",paraId:1,tocIndex:3},{value:"\u3002",paraId:1,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:4},{value:"placement",paraId:2,tocIndex:4},{value:" \u5C5E\u6027\u8BBE\u7F6E\u6C14\u6CE1\u7684\u4F4D\u7F6E\uFF0C\u652F\u6301 ",paraId:2,tocIndex:4},{value:"top",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"bottom",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"left",paraId:2,tocIndex:4},{value:" \u548C ",paraId:2,tocIndex:4},{value:"right",paraId:2,tocIndex:4},{value:"\u3002",paraId:2,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:5},{value:"okText",paraId:3,tocIndex:5},{value:" \u548C ",paraId:3,tocIndex:5},{value:"cancelText",paraId:3,tocIndex:5},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u786E\u8BA4\u548C\u53D6\u6D88\u6309\u94AE\u7684\u6587\u672C\u3002",paraId:3,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:6},{value:"disabled",paraId:4,tocIndex:6},{value:" \u5C5E\u6027\u7981\u7528\u786E\u8BA4\u6C14\u6CE1\u3002",paraId:4,tocIndex:6},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:7},{value:"className",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"style",paraId:5,tocIndex:7},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u786E\u8BA4\u6C14\u6CE1\u7684\u6837\u5F0F\u3002",paraId:5,tocIndex:7},{value:"\u5C5E\u6027",paraId:6,tocIndex:9},{value:"\u8BF4\u660E",paraId:6,tocIndex:9},{value:"\u7C7B\u578B",paraId:6,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:9},{value:"title",paraId:6,tocIndex:9},{value:"\u786E\u8BA4\u6807\u9898",paraId:6,tocIndex:9},{value:"React.ReactNode",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"description",paraId:6,tocIndex:9},{value:"\u786E\u8BA4\u63CF\u8FF0",paraId:6,tocIndex:9},{value:"React.ReactNode",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"onConfirm",paraId:6,tocIndex:9},{value:"\u786E\u8BA4\u56DE\u8C03",paraId:6,tocIndex:9},{value:"() => void",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"onCancel",paraId:6,tocIndex:9},{value:"\u53D6\u6D88\u56DE\u8C03",paraId:6,tocIndex:9},{value:"() => void",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"okText",paraId:6,tocIndex:9},{value:"\u786E\u8BA4\u6309\u94AE\u6587\u672C",paraId:6,tocIndex:9},{value:"string",paraId:6,tocIndex:9},{value:"'\u786E\u5B9A'",paraId:6,tocIndex:9},{value:"cancelText",paraId:6,tocIndex:9},{value:"\u53D6\u6D88\u6309\u94AE\u6587\u672C",paraId:6,tocIndex:9},{value:"string",paraId:6,tocIndex:9},{value:"'\u53D6\u6D88'",paraId:6,tocIndex:9},{value:"placement",paraId:6,tocIndex:9},{value:"\u6C14\u6CE1\u4F4D\u7F6E",paraId:6,tocIndex:9},{value:"'top' | 'bottom' | 'left' | 'right'",paraId:6,tocIndex:9},{value:"'top'",paraId:6,tocIndex:9},{value:"trigger",paraId:6,tocIndex:9},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:6,tocIndex:9},{value:"'click' | 'hover' | 'focus'",paraId:6,tocIndex:9},{value:"'click'",paraId:6,tocIndex:9},{value:"disabled",paraId:6,tocIndex:9},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:9},{value:"boolean",paraId:6,tocIndex:9},{value:"false",paraId:6,tocIndex:9},{value:"children",paraId:6,tocIndex:9},{value:"\u89E6\u53D1\u5143\u7D20",paraId:6,tocIndex:9},{value:"React.ReactNode",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"className",paraId:6,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:9},{value:"string",paraId:6,tocIndex:9},{value:"''",paraId:6,tocIndex:9},{value:"style",paraId:6,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:9},{value:"React.CSSProperties",paraId:6,tocIndex:9},{value:"{}",paraId:6,tocIndex:9}]},27045:function(P,C){"use strict";C.Z=`import React from 'react';
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

export default Button;`},67825:function(P,C,e){var c=e(64382);function b(s,D){if(s==null)return{};var x=c(s,D),T,p;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(p=0;p<u.length;p++)T=u[p],!(D.indexOf(T)>=0)&&Object.prototype.propertyIsEnumerable.call(s,T)&&(x[T]=s[T])}return x}P.exports=b,P.exports.__esModule=!0,P.exports.default=P.exports},64382:function(P){function C(e,c){if(e==null)return{};var b={},s=Object.keys(e),D,x;for(x=0;x<s.length;x++)D=s[x],!(c.indexOf(D)>=0)&&(b[D]=e[D]);return b}P.exports=C,P.exports.__esModule=!0,P.exports.default=P.exports}}]);
