(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[7225,7656],{89846:function(v,m,e){"use strict";var b;e.r(m),e.d(m,{demos:function(){return $}});var y=e(48305),h=e.n(y),f=e(90228),s=e.n(f),I=e(87999),c=e.n(I),r=e(75271),E=e(97656),$={"cascader-demo-0":{component:r.memo(r.lazy(c()(s()().mark(function o(){var l,d,t;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){var i=[{value:"1",label:"\u5317\u4EAC\u5E02",children:[{value:"11",label:"\u6D77\u6DC0\u533A",children:[{value:"111",label:"\u4E2D\u5173\u6751"},{value:"112",label:"\u4E0A\u5730"}]},{value:"12",label:"\u671D\u9633\u533A",children:[{value:"121",label:"CBD"},{value:"122",label:"\u671B\u4EAC"}]}]},{value:"2",label:"\u4E0A\u6D77\u5E02",children:[{value:"21",label:"\u6D66\u4E1C\u65B0\u533A",children:[{value:"211",label:"\u9646\u5BB6\u5634"},{value:"212",label:"\u5F20\u6C5F"}]},{value:"22",label:"\u9759\u5B89\u533A",children:[{value:"221",label:"\u5357\u4EAC\u897F\u8DEF"},{value:"222",label:"\u9759\u5B89\u5BFA"}]}]}],B=function(x){console.log("Selected:",x)};return r.createElement("div",{style:{width:"300px"}},r.createElement(d,{options:i,placeholder:"\u8BF7\u9009\u62E9\u5730\u533A",onChange:B}))},a.next=3,e.e(9312).then(e.bind(e,79312));case 3:return l=a.sent,d=l.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"cascader-demo-0",refAtomIds:["Cascader"],dependencies:{"index.tsx":{type:"FILE",value:`import Cascader from './index';

function CascaderBasicDemo() {
  const options = [
    {
      value: '1',
      label: '\u5317\u4EAC\u5E02',
      children: [
        {
          value: '11',
          label: '\u6D77\u6DC0\u533A',
          children: [
            { value: '111', label: '\u4E2D\u5173\u6751' },
            { value: '112', label: '\u4E0A\u5730' },
          ],
        },
        {
          value: '12',
          label: '\u671D\u9633\u533A',
          children: [
            { value: '121', label: 'CBD' },
            { value: '122', label: '\u671B\u4EAC' },
          ],
        },
      ],
    },
    {
      value: '2',
      label: '\u4E0A\u6D77\u5E02',
      children: [
        {
          value: '21',
          label: '\u6D66\u4E1C\u65B0\u533A',
          children: [
            { value: '211', label: '\u9646\u5BB6\u5634' },
            { value: '212', label: '\u5F20\u6C5F' },
          ],
        },
        {
          value: '22',
          label: '\u9759\u5B89\u533A',
          children: [
            { value: '221', label: '\u5357\u4EAC\u897F\u8DEF' },
            { value: '222', label: '\u9759\u5B89\u5BFA' },
          ],
        },
      ],
    },
  ];

  const handleChange = (value) => {
    console.log('Selected:', value);
  };

  return (
    <div style={{ width: '300px' }}>
      <Cascader
        options={options}
        placeholder="\u8BF7\u9009\u62E9\u5730\u533A"
        onChange={handleChange}
      />
    </div>
  );
}

export default CascaderBasicDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var o=c()(s()().mark(function d(){var t,u=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,u));case 3:case"end":return n.stop()}},d)}));function l(){return o.apply(this,arguments)}return l}()}},"cascader-demo-1":{component:r.memo(r.lazy(c()(s()().mark(function o(){var l,d,t;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){var i=[{value:"1",label:"\u5317\u4EAC\u5E02",children:[{value:"11",label:"\u6D77\u6DC0\u533A",children:[{value:"111",label:"\u4E2D\u5173\u6751"},{value:"112",label:"\u4E0A\u5730"}]}]}];return r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"}},r.createElement(d,{options:i,size:"small",placeholder:"\u5C0F\u5C3A\u5BF8"}),r.createElement(d,{options:i,size:"default",placeholder:"\u9ED8\u8BA4\u5C3A\u5BF8"}),r.createElement(d,{options:i,size:"large",placeholder:"\u5927\u5C3A\u5BF8"}))},a.next=3,e.e(9312).then(e.bind(e,79312));case 3:return l=a.sent,d=l.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"cascader-demo-1",refAtomIds:["Cascader"],dependencies:{"index.tsx":{type:"FILE",value:`import Cascader from './index';

function CascaderSizeDemo() {
  const options = [
    {
      value: '1',
      label: '\u5317\u4EAC\u5E02',
      children: [
        {
          value: '11',
          label: '\u6D77\u6DC0\u533A',
          children: [
            { value: '111', label: '\u4E2D\u5173\u6751' },
            { value: '112', label: '\u4E0A\u5730' },
          ],
        },
      ],
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Cascader
        options={options}
        size="small"
        placeholder="\u5C0F\u5C3A\u5BF8"
      />
      <Cascader
        options={options}
        size="default"
        placeholder="\u9ED8\u8BA4\u5C3A\u5BF8"
      />
      <Cascader
        options={options}
        size="large"
        placeholder="\u5927\u5C3A\u5BF8"
      />
    </div>
  );
}

export default CascaderSizeDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var o=c()(s()().mark(function d(){var t,u=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,u));case 3:case"end":return n.stop()}},d)}));function l(){return o.apply(this,arguments)}return l}()}},"cascader-demo-2":{component:r.memo(r.lazy(c()(s()().mark(function o(){var l,d,t;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){var i=[{value:"1",label:"\u5317\u4EAC\u5E02",children:[{value:"11",label:"\u6D77\u6DC0\u533A",children:[{value:"111",label:"\u4E2D\u5173\u6751"}]}]}];return r.createElement("div",{style:{width:"300px"}},r.createElement(d,{options:i,disabled:!0,placeholder:"\u7981\u7528\u72B6\u6001"}))},a.next=3,e.e(9312).then(e.bind(e,79312));case 3:return l=a.sent,d=l.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"cascader-demo-2",refAtomIds:["Cascader"],dependencies:{"index.tsx":{type:"FILE",value:`import Cascader from './index';

function CascaderDisabledDemo() {
  const options = [
    {
      value: '1',
      label: '\u5317\u4EAC\u5E02',
      children: [
        {
          value: '11',
          label: '\u6D77\u6DC0\u533A',
          children: [
            { value: '111', label: '\u4E2D\u5173\u6751' },
          ],
        },
      ],
    },
  ];

  return (
    <div style={{ width: '300px' }}>
      <Cascader
        options={options}
        disabled
        placeholder="\u7981\u7528\u72B6\u6001"
      />
    </div>
  );
}

export default CascaderDisabledDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var o=c()(s()().mark(function d(){var t,u=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,u));case 3:case"end":return n.stop()}},d)}));function l(){return o.apply(this,arguments)}return l}()}},"cascader-demo-3":{component:r.memo(r.lazy(c()(s()().mark(function o(){var l,d,t,u,a,n,i;return s()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return i=function(){var O=u([]),C=h()(O,2),P=C[0],g=C[1],A=[{value:"1",label:"\u5317\u4EAC\u5E02",children:[{value:"11",label:"\u6D77\u6DC0\u533A",children:[{value:"111",label:"\u4E2D\u5173\u6751"},{value:"112",label:"\u4E0A\u5730"}]}]}],z=function(){g([])};return r.createElement("div",{style:{width:"300px"}},r.createElement("div",{style:{marginBottom:"16px"}},r.createElement("p",null,"\u9009\u4E2D\u503C\uFF1A",JSON.stringify(P)),r.createElement(n,{onClick:z},"\u91CD\u7F6E")),r.createElement(d,{options:A,value:P,onChange:function(L){return g(L)},placeholder:"\u8BF7\u9009\u62E9\u5730\u533A"}))},p.next=3,e.e(9312).then(e.bind(e,79312));case 3:return l=p.sent,d=l.default,p.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=p.sent,u=t.useState,p.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return a=p.sent,n=a.default,p.abrupt("return",{default:i});case 14:case"end":return p.stop()}},o)})))),asset:{type:"BLOCK",id:"cascader-demo-3",refAtomIds:["Cascader"],dependencies:{"index.tsx":{type:"FILE",value:`import Cascader from './index';
import { useState } from 'react';
import Button from '../Button';

function CascaderControlledDemo() {
  const [selectedValue, setSelectedValue] = useState([]);
  
  const options = [
    {
      value: '1',
      label: '\u5317\u4EAC\u5E02',
      children: [
        {
          value: '11',
          label: '\u6D77\u6DC0\u533A',
          children: [
            { value: '111', label: '\u4E2D\u5173\u6751' },
            { value: '112', label: '\u4E0A\u5730' },
          ],
        },
      ],
    },
  ];

  const handleReset = () => {
    setSelectedValue([]);
  };

  return (
    <div style={{ width: '300px' }}>
      <div style={{ marginBottom: '16px' }}>
        <p>\u9009\u4E2D\u503C\uFF1A{JSON.stringify(selectedValue)}</p>
        <Button onClick={handleReset}>\u91CD\u7F6E</Button>
      </div>
      <Cascader
        options={options}
        value={selectedValue}
        onChange={(value) => setSelectedValue(value)}
        placeholder="\u8BF7\u9009\u62E9\u5730\u533A"
      />
    </div>
  );
}

export default CascaderControlledDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":E,react:b||(b=e.t(r,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":E},renderOpts:{compile:function(){var o=c()(s()().mark(function d(){var t,u=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,u));case 3:case"end":return n.stop()}},d)}));function l(){return o.apply(this,arguments)}return l}()}},"cascader-demo-4":{component:r.memo(r.lazy(c()(s()().mark(function o(){var l,d,t;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){var i=[{value:"1",label:"\u5317\u4EAC\u5E02",children:[{value:"11",label:"\u6D77\u6DC0\u533A",children:[{value:"111",label:"\u4E2D\u5173\u6751"},{value:"112",label:"\u4E0A\u5730"}]}]}];return r.createElement("div",{style:{width:"300px"}},r.createElement(d,{options:i,defaultValue:["1","11","111"],placeholder:"\u8BF7\u9009\u62E9\u5730\u533A"}))},a.next=3,e.e(9312).then(e.bind(e,79312));case 3:return l=a.sent,d=l.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"cascader-demo-4",refAtomIds:["Cascader"],dependencies:{"index.tsx":{type:"FILE",value:`import Cascader from './index';

function CascaderUncontrolledDemo() {
  const options = [
    {
      value: '1',
      label: '\u5317\u4EAC\u5E02',
      children: [
        {
          value: '11',
          label: '\u6D77\u6DC0\u533A',
          children: [
            { value: '111', label: '\u4E2D\u5173\u6751' },
            { value: '112', label: '\u4E0A\u5730' },
          ],
        },
      ],
    },
  ];

  return (
    <div style={{ width: '300px' }}>
      <Cascader
        options={options}
        defaultValue={['1', '11', '111']}
        placeholder="\u8BF7\u9009\u62E9\u5730\u533A"
      />
    </div>
  );
}

export default CascaderUncontrolledDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var o=c()(s()().mark(function d(){var t,u=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,u));case 3:case"end":return n.stop()}},d)}));function l(){return o.apply(this,arguments)}return l}()}},"cascader-demo-5":{component:r.memo(r.lazy(c()(s()().mark(function o(){var l,d,t;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){var i=[{value:"1",label:"\u5317\u4EAC\u5E02",children:[{value:"11",label:"\u6D77\u6DC0\u533A",disabled:!0,children:[{value:"111",label:"\u4E2D\u5173\u6751"}]},{value:"12",label:"\u671D\u9633\u533A",children:[{value:"121",label:"CBD"},{value:"122",label:"\u671B\u4EAC"}]}]}];return r.createElement("div",{style:{width:"300px"}},r.createElement(d,{options:i,placeholder:"\u8BF7\u9009\u62E9\u5730\u533A"}))},a.next=3,e.e(9312).then(e.bind(e,79312));case 3:return l=a.sent,d=l.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"cascader-demo-5",refAtomIds:["Cascader"],dependencies:{"index.tsx":{type:"FILE",value:`import Cascader from './index';

function CascaderDisabledOptionDemo() {
  const options = [
    {
      value: '1',
      label: '\u5317\u4EAC\u5E02',
      children: [
        {
          value: '11',
          label: '\u6D77\u6DC0\u533A',
          disabled: true,
          children: [
            { value: '111', label: '\u4E2D\u5173\u6751' },
          ],
        },
        {
          value: '12',
          label: '\u671D\u9633\u533A',
          children: [
            { value: '121', label: 'CBD' },
            { value: '122', label: '\u671B\u4EAC' },
          ],
        },
      ],
    },
  ];

  return (
    <div style={{ width: '300px' }}>
      <Cascader
        options={options}
        placeholder="\u8BF7\u9009\u62E9\u5730\u533A"
      />
    </div>
  );
}

export default CascaderDisabledOptionDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var o=c()(s()().mark(function d(){var t,u=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,u));case 3:case"end":return n.stop()}},d)}));function l(){return o.apply(this,arguments)}return l}()}}}},97656:function(v,m,e){"use strict";e.r(m),e.d(m,{default:function(){return $}});var b=e(26068),y=e.n(b),h=e(67825),f=e.n(h),s=e(75271),I={button:"AyHMn4pptwgAqTM0zVxe",small:"mtziivfRPkRk_hPU_E8r",default:"CH0d2t1M7c0F2z59aWp3",large:"RH0k6h4jVrUDWtwndzsD",primary:"DPc0H8GPQ0xHQRlthXLJ",disabled:"tsWfJ_Ys0PMwNuyfv9ZE",dashed:"IioY1o_nDcycA39jljNu",text:"uXPLhO_cvecV4slBdUG9",link:"dEu3aIhxJygUwZzIAxyd"},c=e(52676),r=["type","size","disabled","children","onClick","className","style","htmlType"],E=function(l){var d=l.type,t=d===void 0?"default":d,u=l.size,a=u===void 0?"default":u,n=l.disabled,i=n===void 0?!1:n,B=l.children,p=l.onClick,x=l.className,O=x===void 0?"":x,C=l.style,P=C===void 0?{}:C,g=l.htmlType,A=g===void 0?"button":g,z=f()(l,r),R=function(){var D=[I.button];return D.push(I[t]),D.push(I[a]),i&&D.push(I.disabled),O&&D.push(O),D.join(" ")},L=function(){!i&&p&&p()};return(0,c.jsx)("button",y()(y()({type:A==="submit"?"submit":A==="reset"?"reset":"button",className:R(),style:P,disabled:i,onClick:L},z),{},{children:B}))},$=E},14331:function(v,m,e){"use strict";e.r(m),e.d(m,{texts:function(){return b}});const b=[{value:"\u7EA7\u8054\u9009\u62E9\u5668\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u9009\u62E9\u591A\u5C42\u7EA7\u7684\u6570\u636E\uFF0C\u5982\u7701\u5E02\u533A\u3001\u5206\u7C7B\u7B49\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u7EA7\u8054\u9009\u62E9\u5668\u7528\u6CD5\uFF0C\u4F7F\u7528 ",paraId:1,tocIndex:2},{value:"options",paraId:1,tocIndex:2},{value:" \u5C5E\u6027\u63D0\u4F9B\u5C42\u7EA7\u6570\u636E\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u8BBE\u7F6E\u7EA7\u8054\u9009\u62E9\u5668\u7684\u5C3A\u5BF8\uFF0C\u652F\u6301 ",paraId:2,tocIndex:3},{value:"small",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"default",paraId:2,tocIndex:3},{value:" \u548C ",paraId:2,tocIndex:3},{value:"large",paraId:2,tocIndex:3},{value:" \u4E09\u79CD\u5C3A\u5BF8\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"disabled",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u8BBE\u7F6E\u7EA7\u8054\u9009\u62E9\u5668\u4E3A\u7981\u7528\u72B6\u6001\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"value",paraId:4,tocIndex:5},{value:" \u548C ",paraId:4,tocIndex:5},{value:"onChange",paraId:4,tocIndex:5},{value:" \u5C5E\u6027\u5B9E\u73B0\u53D7\u63A7\u6A21\u5F0F\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"defaultValue",paraId:5,tocIndex:6},{value:" \u5C5E\u6027\u8BBE\u7F6E\u9ED8\u8BA4\u9009\u4E2D\u503C\uFF0C\u7EC4\u4EF6\u5185\u90E8\u7BA1\u7406\u72B6\u6001\u3002",paraId:5,tocIndex:6},{value:"\u5728 ",paraId:6,tocIndex:7},{value:"options",paraId:6,tocIndex:7},{value:" \u6570\u636E\u4E2D\u8BBE\u7F6E ",paraId:6,tocIndex:7},{value:"disabled: true",paraId:6,tocIndex:7},{value:" \u53EF\u4EE5\u7981\u7528\u7279\u5B9A\u9009\u9879\u3002",paraId:6,tocIndex:7},{value:"\u5C5E\u6027",paraId:7,tocIndex:9},{value:"\u8BF4\u660E",paraId:7,tocIndex:9},{value:"\u7C7B\u578B",paraId:7,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:9},{value:"size",paraId:7,tocIndex:9},{value:"\u9009\u62E9\u5668\u5C3A\u5BF8",paraId:7,tocIndex:9},{value:"'small' | 'default' | 'large'",paraId:7,tocIndex:9},{value:"'default'",paraId:7,tocIndex:9},{value:"disabled",paraId:7,tocIndex:9},{value:"\u662F\u5426\u7981\u7528",paraId:7,tocIndex:9},{value:"boolean",paraId:7,tocIndex:9},{value:"false",paraId:7,tocIndex:9},{value:"options",paraId:7,tocIndex:9},{value:"\u7EA7\u8054\u6570\u636E",paraId:7,tocIndex:9},{value:"Array<{ value: string | number; label: React.ReactNode; disabled?: boolean; children?: Array<{ value: string | number; label: React.ReactNode; disabled?: boolean; children?: ... }> }>",paraId:7,tocIndex:9},{value:"[]",paraId:7,tocIndex:9},{value:"value",paraId:7,tocIndex:9},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:7,tocIndex:9},{value:"Array<string | number>",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"defaultValue",paraId:7,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u503C\uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:7,tocIndex:9},{value:"Array<string | number>",paraId:7,tocIndex:9},{value:"[]",paraId:7,tocIndex:9},{value:"placeholder",paraId:7,tocIndex:9},{value:"\u5360\u4F4D\u7B26",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"'\u8BF7\u9009\u62E9'",paraId:7,tocIndex:9},{value:"onChange",paraId:7,tocIndex:9},{value:"\u503C\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:7,tocIndex:9},{value:"(value: Array<string | number>) => void",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"onSelect",paraId:7,tocIndex:9},{value:"\u9009\u62E9\u65F6\u7684\u56DE\u8C03",paraId:7,tocIndex:9},{value:"(value: Array<string | number>, option: { value: string | number; label: React.ReactNode; disabled?: boolean; children?: Array<...> }) => void",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"className",paraId:7,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"''",paraId:7,tocIndex:9},{value:"style",paraId:7,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:7,tocIndex:9},{value:"React.CSSProperties",paraId:7,tocIndex:9},{value:"{}",paraId:7,tocIndex:9}]},27045:function(v,m){"use strict";m.Z=`import React from 'react';
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

export default Button;`},67825:function(v,m,e){var b=e(64382);function y(h,f){if(h==null)return{};var s=b(h,f),I,c;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(h);for(c=0;c<r.length;c++)I=r[c],!(f.indexOf(I)>=0)&&Object.prototype.propertyIsEnumerable.call(h,I)&&(s[I]=h[I])}return s}v.exports=y,v.exports.__esModule=!0,v.exports.default=v.exports},64382:function(v){function m(e,b){if(e==null)return{};var y={},h=Object.keys(e),f,s;for(s=0;s<h.length;s++)f=h[s],!(b.indexOf(f)>=0)&&(y[f]=e[f]);return y}v.exports=m,v.exports.__esModule=!0,v.exports.default=v.exports}}]);
