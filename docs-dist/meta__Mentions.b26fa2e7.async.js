"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[2474],{28652:function(g,v,n){var m;n.r(v),n.d(v,{demos:function(){return C}});var b=n(48305),M=n.n(b),D=n(90228),s=n.n(D),E=n(87999),p=n.n(E),r=n(75271),C={"mentions-demo-0":{component:r.memo(r.lazy(p()(s()().mark(function d(){var o,l,t;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){var u=[{value:"zhangsan",label:"\u5F20\u4E09"},{value:"lisi",label:"\u674E\u56DB"},{value:"wangwu",label:"\u738B\u4E94"},{value:"zhaoliu",label:"\u8D75\u516D"},{value:"sunqi",label:"\u5B59\u4E03"}];return r.createElement("div",null,r.createElement(l,{options:u,placeholder:"\u8F93\u5165 @ \u63D0\u53CA\u7528\u6237"}))},a.next=3,n.e(8947).then(n.bind(n,78947));case 3:return o=a.sent,l=o.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"mentions-demo-0",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:`import Mentions from './index';

function MentionsBasicDemo() {
  const options = [
    { value: 'zhangsan', label: '\u5F20\u4E09' },
    { value: 'lisi', label: '\u674E\u56DB' },
    { value: 'wangwu', label: '\u738B\u4E94' },
    { value: 'zhaoliu', label: '\u8D75\u516D' },
    { value: 'sunqi', label: '\u5B59\u4E03' },
  ];

  return (
    <div>
      <Mentions options={options} placeholder="\u8F93\u5165 @ \u63D0\u53CA\u7528\u6237" />
    </div>
  );
}

export default MentionsBasicDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(s()().mark(function l(){var t,i=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},l)}));function o(){return d.apply(this,arguments)}return o}()}},"mentions-demo-1":{component:r.memo(r.lazy(p()(s()().mark(function d(){var o,l,t;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){var u=[{value:"zhangsan",label:"\u5F20\u4E09"},{value:"lisi",label:"\u674E\u56DB"}];return r.createElement("div",{style:{display:"flex",gap:"16px",flexDirection:"column"}},r.createElement(l,{size:"small",options:u,placeholder:"\u5C0F\u5C3A\u5BF8\u63D0\u53CA\u7EC4\u4EF6"}),r.createElement(l,{size:"default",options:u,placeholder:"\u9ED8\u8BA4\u5C3A\u5BF8\u63D0\u53CA\u7EC4\u4EF6"}),r.createElement(l,{size:"large",options:u,placeholder:"\u5927\u5C3A\u5BF8\u63D0\u53CA\u7EC4\u4EF6"}))},a.next=3,n.e(8947).then(n.bind(n,78947));case 3:return o=a.sent,l=o.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"mentions-demo-1",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:`import Mentions from './index';

function MentionsSizeDemo() {
  const options = [
    { value: 'zhangsan', label: '\u5F20\u4E09' },
    { value: 'lisi', label: '\u674E\u56DB' },
  ];

  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Mentions size="small" options={options} placeholder="\u5C0F\u5C3A\u5BF8\u63D0\u53CA\u7EC4\u4EF6" />
      <Mentions size="default" options={options} placeholder="\u9ED8\u8BA4\u5C3A\u5BF8\u63D0\u53CA\u7EC4\u4EF6" />
      <Mentions size="large" options={options} placeholder="\u5927\u5C3A\u5BF8\u63D0\u53CA\u7EC4\u4EF6" />
    </div>
  );
}

export default MentionsSizeDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(s()().mark(function l(){var t,i=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},l)}));function o(){return d.apply(this,arguments)}return o}()}},"mentions-demo-2":{component:r.memo(r.lazy(p()(s()().mark(function d(){var o,l,t;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){var u=[{value:"zhangsan",label:"\u5F20\u4E09"},{value:"lisi",label:"\u674E\u56DB"}];return r.createElement("div",null,r.createElement(l,{disabled:!0,options:u,placeholder:"\u7981\u7528\u7684\u63D0\u53CA\u7EC4\u4EF6"}))},a.next=3,n.e(8947).then(n.bind(n,78947));case 3:return o=a.sent,l=o.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"mentions-demo-2",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:`import Mentions from './index';

function MentionsDisabledDemo() {
  const options = [
    { value: 'zhangsan', label: '\u5F20\u4E09' },
    { value: 'lisi', label: '\u674E\u56DB' },
  ];

  return (
    <div>
      <Mentions disabled options={options} placeholder="\u7981\u7528\u7684\u63D0\u53CA\u7EC4\u4EF6" />
    </div>
  );
}

export default MentionsDisabledDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(s()().mark(function l(){var t,i=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},l)}));function o(){return d.apply(this,arguments)}return o}()}},"mentions-demo-3":{component:r.memo(r.lazy(p()(s()().mark(function d(){var o,l,t,i,a,e;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=function(){var x=t(""),I=M()(x,2),f=I[0],h=I[1],y=[{value:"zhangsan",label:"\u5F20\u4E09"},{value:"lisi",label:"\u674E\u56DB"}];return l.createElement("div",null,l.createElement(a,{value:f,onChange:h,options:y,placeholder:"\u53D7\u63A7\u6A21\u5F0F\u63D0\u53CA\u7EC4\u4EF6"}),l.createElement("p",{style:{marginTop:"8px"}},"\u5F53\u524D\u503C: ",f))},c.next=3,Promise.resolve().then(n.t.bind(n,75271,19));case 3:return o=c.sent,l=o.default,t=o.useState,c.next=8,n.e(8947).then(n.bind(n,78947));case 8:return i=c.sent,a=i.default,c.abrupt("return",{default:e});case 11:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"mentions-demo-3",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Mentions from './index';

function MentionsControlledDemo() {
  const [value, setValue] = useState('');
  const options = [
    { value: 'zhangsan', label: '\u5F20\u4E09' },
    { value: 'lisi', label: '\u674E\u56DB' },
  ];

  return (
    <div>
      <Mentions 
        value={value} 
        onChange={setValue} 
        options={options} 
        placeholder="\u53D7\u63A7\u6A21\u5F0F\u63D0\u53CA\u7EC4\u4EF6" 
      />
      <p style={{ marginTop: '8px' }}>\u5F53\u524D\u503C: {value}</p>
    </div>
  );
}

export default MentionsControlledDemo;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:m||(m=n.t(r,2))},renderOpts:{compile:function(){var d=p()(s()().mark(function l(){var t,i=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},l)}));function o(){return d.apply(this,arguments)}return o}()}},"mentions-demo-4":{component:r.memo(r.lazy(p()(s()().mark(function d(){var o,l,t;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){var u=[{value:"zhangsan",label:"\u5F20\u4E09"},{value:"lisi",label:"\u674E\u56DB"},{value:"feat",label:"\u65B0\u529F\u80FD"},{value:"bug",label:"bug\u4FEE\u590D"}];return r.createElement("div",{style:{display:"flex",gap:"16px",flexDirection:"column"}},r.createElement(l,{prefix:"#",options:u,placeholder:"\u8F93\u5165 # \u63D0\u53CA\u6807\u7B7E"}),r.createElement(l,{prefix:["@","#"],options:u,placeholder:"\u8F93\u5165 @ \u63D0\u53CA\u7528\u6237\u6216 # \u63D0\u53CA\u6807\u7B7E"}))},a.next=3,n.e(8947).then(n.bind(n,78947));case 3:return o=a.sent,l=o.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"mentions-demo-4",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:`import Mentions from './index';

function MentionsCustomPrefixDemo() {
  const options = [
    { value: 'zhangsan', label: '\u5F20\u4E09' },
    { value: 'lisi', label: '\u674E\u56DB' },
    { value: 'feat', label: '\u65B0\u529F\u80FD' },
    { value: 'bug', label: 'bug\u4FEE\u590D' },
  ];

  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Mentions 
        prefix="#" 
        options={options} 
        placeholder="\u8F93\u5165 # \u63D0\u53CA\u6807\u7B7E" 
      />
      <Mentions 
        prefix={['@', '#']} 
        options={options} 
        placeholder="\u8F93\u5165 @ \u63D0\u53CA\u7528\u6237\u6216 # \u63D0\u53CA\u6807\u7B7E" 
      />
    </div>
  );
}

export default MentionsCustomPrefixDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(s()().mark(function l(){var t,i=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},l)}));function o(){return d.apply(this,arguments)}return o}()}},"mentions-demo-5":{component:r.memo(r.lazy(p()(s()().mark(function d(){var o,l,t;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){var u=[{value:"zhangsan",label:"\u5F20\u4E09"},{value:"lisi",label:"\u674E\u56DB"}];return r.createElement("div",{style:{display:"flex",gap:"16px",flexDirection:"column"}},r.createElement(l,{split:", ",options:u,placeholder:"\u8F93\u5165 @ \u63D0\u53CA\u7528\u6237\uFF0C\u4F7F\u7528\u9017\u53F7\u5206\u9694"}),r.createElement(l,{split:" | ",options:u,placeholder:"\u8F93\u5165 @ \u63D0\u53CA\u7528\u6237\uFF0C\u4F7F\u7528\u7AD6\u7EBF\u5206\u9694"}))},a.next=3,n.e(8947).then(n.bind(n,78947));case 3:return o=a.sent,l=o.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"mentions-demo-5",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:`import Mentions from './index';

function MentionsCustomSplitDemo() {
  const options = [
    { value: 'zhangsan', label: '\u5F20\u4E09' },
    { value: 'lisi', label: '\u674E\u56DB' },
  ];

  return (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Mentions 
        split=", " 
        options={options} 
        placeholder="\u8F93\u5165 @ \u63D0\u53CA\u7528\u6237\uFF0C\u4F7F\u7528\u9017\u53F7\u5206\u9694" 
      />
      <Mentions 
        split=" | " 
        options={options} 
        placeholder="\u8F93\u5165 @ \u63D0\u53CA\u7528\u6237\uFF0C\u4F7F\u7528\u7AD6\u7EBF\u5206\u9694" 
      />
    </div>
  );
}

export default MentionsCustomSplitDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(s()().mark(function l(){var t,i=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},l)}));function o(){return d.apply(this,arguments)}return o}()}},"mentions-demo-6":{component:r.memo(r.lazy(p()(s()().mark(function d(){var o,l,t;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){var u=[{value:"zhangsan",label:"\u5F20\u4E09"},{value:"lisi",label:"\u674E\u56DB",disabled:!0},{value:"wangwu",label:"\u738B\u4E94"}];return r.createElement("div",null,r.createElement(l,{options:u,placeholder:"\u8F93\u5165 @ \u63D0\u53CA\u7528\u6237\uFF0C\u674E\u56DB\u5DF2\u88AB\u7981\u7528"}))},a.next=3,n.e(8947).then(n.bind(n,78947));case 3:return o=a.sent,l=o.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"mentions-demo-6",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:`import Mentions from './index';

function MentionsDisabledOptionsDemo() {
  const options = [
    { value: 'zhangsan', label: '\u5F20\u4E09' },
    { value: 'lisi', label: '\u674E\u56DB', disabled: true },
    { value: 'wangwu', label: '\u738B\u4E94' },
  ];

  return (
    <div>
      <Mentions options={options} placeholder="\u8F93\u5165 @ \u63D0\u53CA\u7528\u6237\uFF0C\u674E\u56DB\u5DF2\u88AB\u7981\u7528" />
    </div>
  );
}

export default MentionsDisabledOptionsDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(s()().mark(function l(){var t,i=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},l)}));function o(){return d.apply(this,arguments)}return o}()}},"mentions-demo-7":{component:r.memo(r.lazy(p()(s()().mark(function d(){var o,l,t,i,a,e;return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=function(){var x=t(""),I=M()(x,2),f=I[0],h=I[1],y=[{value:"zhangsan",label:"\u5F20\u4E09"},{value:"lisi",label:"\u674E\u56DB"}],S=function(O,$){h("\u9009\u62E9\u4E86 ".concat($).concat(O.label))};return l.createElement("div",null,l.createElement(a,{options:y,onSelect:S,placeholder:"\u8F93\u5165 @ \u63D0\u53CA\u7528\u6237"}),f&&l.createElement("p",{style:{marginTop:"8px"}},f))},c.next=3,Promise.resolve().then(n.t.bind(n,75271,19));case 3:return o=c.sent,l=o.default,t=o.useState,c.next=8,n.e(8947).then(n.bind(n,78947));case 8:return i=c.sent,a=i.default,c.abrupt("return",{default:e});case 11:case"end":return c.stop()}},d)})))),asset:{type:"BLOCK",id:"mentions-demo-7",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Mentions from './index';

function MentionsSelectCallbackDemo() {
  const [selected, setSelected] = useState<string>('');
  const options = [
    { value: 'zhangsan', label: '\u5F20\u4E09' },
    { value: 'lisi', label: '\u674E\u56DB' },
  ];

  const handleSelect = (option: any, prefix: string) => {
    setSelected(\`\u9009\u62E9\u4E86 \${prefix}\${option.label}\`);
  };

  return (
    <div>
      <Mentions 
        options={options} 
        onSelect={handleSelect} 
        placeholder="\u8F93\u5165 @ \u63D0\u53CA\u7528\u6237" 
      />
      {selected && <p style={{ marginTop: '8px' }}>{selected}</p>}
    </div>
  );
}

export default MentionsSelectCallbackDemo;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:m||(m=n.t(r,2))},renderOpts:{compile:function(){var d=p()(s()().mark(function l(){var t,i=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},l)}));function o(){return d.apply(this,arguments)}return o}()}},"mentions-demo-8":{component:r.memo(r.lazy(p()(s()().mark(function d(){var o,l,t;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){var u=[{value:"zhangsan",label:"\u5F20\u4E09"},{value:"lisi",label:"\u674E\u56DB"}];return r.createElement("div",null,r.createElement(l,{options:u,placeholder:"\u81EA\u5B9A\u4E49\u6837\u5F0F\u63D0\u53CA\u7EC4\u4EF6",style:{width:"100%",border:"2px solid #1890ff",borderRadius:"8px",padding:"8px",minHeight:"80px"}}))},a.next=3,n.e(8947).then(n.bind(n,78947));case 3:return o=a.sent,l=o.default,a.abrupt("return",{default:t});case 6:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"mentions-demo-8",refAtomIds:["Mentions"],dependencies:{"index.tsx":{type:"FILE",value:`import Mentions from './index';

function MentionsCustomStyleDemo() {
  const options = [
    { value: 'zhangsan', label: '\u5F20\u4E09' },
    { value: 'lisi', label: '\u674E\u56DB' },
  ];

  return (
    <div>
      <Mentions 
        options={options} 
        placeholder="\u81EA\u5B9A\u4E49\u6837\u5F0F\u63D0\u53CA\u7EC4\u4EF6" 
        style={{
          width: '100%',
          border: '2px solid #1890ff',
          borderRadius: '8px',
          padding: '8px',
          minHeight: '80px'
        }}
      />
    </div>
  );
}

export default MentionsCustomStyleDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var d=p()(s()().mark(function l(){var t,i=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(t=e.sent).default.apply(t,i));case 3:case"end":return e.stop()}},l)}));function o(){return d.apply(this,arguments)}return o}()}}}},69252:function(g,v,n){n.r(v),n.d(v,{texts:function(){return m}});const m=[{value:"\u63D0\u53CA\u7EC4\u4EF6\u7528\u4E8E\u5728\u8F93\u5165\u6846\u4E2D\u63D0\u53CA\u7528\u6237\u6216\u5176\u4ED6\u5B9E\u4F53\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u524D\u7F00\u3001\u9009\u9879\u3001\u5927\u5C0F\u7B49\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:3},{value:"size",paraId:1,tocIndex:3},{value:" \u5C5E\u6027\u8BBE\u7F6E\u63D0\u53CA\u7EC4\u4EF6\u5C3A\u5BF8\uFF0C\u652F\u6301 ",paraId:1,tocIndex:3},{value:"small",paraId:1,tocIndex:3},{value:"\u3001",paraId:1,tocIndex:3},{value:"default",paraId:1,tocIndex:3},{value:" \u548C ",paraId:1,tocIndex:3},{value:"large",paraId:1,tocIndex:3},{value:"\u3002",paraId:1,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:4},{value:"disabled",paraId:2,tocIndex:4},{value:" \u5C5E\u6027\u8BBE\u7F6E\u63D0\u53CA\u7EC4\u4EF6\u4E3A\u7981\u7528\u72B6\u6001\u3002",paraId:2,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:5},{value:"value",paraId:3,tocIndex:5},{value:" \u548C ",paraId:3,tocIndex:5},{value:"onChange",paraId:3,tocIndex:5},{value:" \u5C5E\u6027\u5B9E\u73B0\u53D7\u63A7\u6A21\u5F0F\u3002",paraId:3,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:6},{value:"prefix",paraId:4,tocIndex:6},{value:" \u5C5E\u6027\u8BBE\u7F6E\u63D0\u53CA\u7684\u524D\u7F00\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u5B57\u7B26\u4E32\u6570\u7EC4\u3002",paraId:4,tocIndex:6},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:7},{value:"split",paraId:5,tocIndex:7},{value:" \u5C5E\u6027\u8BBE\u7F6E\u63D0\u53CA\u540E\u7684\u5206\u9694\u7B26\u3002",paraId:5,tocIndex:7},{value:"\u5728\u9009\u9879\u4E2D\u8BBE\u7F6E ",paraId:6,tocIndex:8},{value:"disabled",paraId:6,tocIndex:8},{value:" \u5C5E\u6027\u53EF\u4EE5\u7981\u7528\u7279\u5B9A\u9009\u9879\u3002",paraId:6,tocIndex:8},{value:"\u901A\u8FC7 ",paraId:7,tocIndex:9},{value:"onSelect",paraId:7,tocIndex:9},{value:" \u5C5E\u6027\u8BBE\u7F6E\u9009\u62E9\u9009\u9879\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002",paraId:7,tocIndex:9},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:10},{value:"className",paraId:8,tocIndex:10},{value:" \u548C ",paraId:8,tocIndex:10},{value:"style",paraId:8,tocIndex:10},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u63D0\u53CA\u7EC4\u4EF6\u7684\u6837\u5F0F\u3002",paraId:8,tocIndex:10},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u8BF4\u660E",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"size",paraId:9,tocIndex:12},{value:"\u63D0\u53CA\u7EC4\u4EF6\u5C3A\u5BF8",paraId:9,tocIndex:12},{value:"'small' | 'default' | 'large'",paraId:9,tocIndex:12},{value:"'default'",paraId:9,tocIndex:12},{value:"disabled",paraId:9,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:9,tocIndex:12},{value:"boolean",paraId:9,tocIndex:12},{value:"false",paraId:9,tocIndex:12},{value:"value",paraId:9,tocIndex:12},{value:"\u5F53\u524D\u503C\uFF08\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:9,tocIndex:12},{value:"string",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"defaultValue",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C\uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:9,tocIndex:12},{value:"string",paraId:9,tocIndex:12},{value:"''",paraId:9,tocIndex:12},{value:"options",paraId:9,tocIndex:12},{value:"\u9009\u9879\u5217\u8868",paraId:9,tocIndex:12},{value:"MentionsOption[]",paraId:9,tocIndex:12},{value:"[]",paraId:9,tocIndex:12},{value:"onChange",paraId:9,tocIndex:12},{value:"\u503C\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:9,tocIndex:12},{value:"(value: string) => void",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"onSelect",paraId:9,tocIndex:12},{value:"\u9009\u62E9\u9009\u9879\u65F6\u7684\u56DE\u8C03",paraId:9,tocIndex:12},{value:"(option: MentionsOption, prefix: string) => void",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"placeholder",paraId:9,tocIndex:12},{value:"\u5360\u4F4D\u7B26\u6587\u672C",paraId:9,tocIndex:12},{value:"string",paraId:9,tocIndex:12},{value:"'\u8BF7\u8F93\u5165\u5185\u5BB9'",paraId:9,tocIndex:12},{value:"prefix",paraId:9,tocIndex:12},{value:"\u63D0\u53CA\u524D\u7F00",paraId:9,tocIndex:12},{value:"string | string[]",paraId:9,tocIndex:12},{value:"'@'",paraId:9,tocIndex:12},{value:"split",paraId:9,tocIndex:12},{value:"\u63D0\u53CA\u540E\u7684\u5206\u9694\u7B26",paraId:9,tocIndex:12},{value:"string",paraId:9,tocIndex:12},{value:"' '",paraId:9,tocIndex:12},{value:"className",paraId:9,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:9,tocIndex:12},{value:"string",paraId:9,tocIndex:12},{value:"''",paraId:9,tocIndex:12},{value:"style",paraId:9,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:9,tocIndex:12},{value:"React.CSSProperties",paraId:9,tocIndex:12},{value:"{}",paraId:9,tocIndex:12},{value:"\u5C5E\u6027",paraId:10,tocIndex:13},{value:"\u8BF4\u660E",paraId:10,tocIndex:13},{value:"\u7C7B\u578B",paraId:10,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:13},{value:"value",paraId:10,tocIndex:13},{value:"\u9009\u9879\u503C",paraId:10,tocIndex:13},{value:"string",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"label",paraId:10,tocIndex:13},{value:"\u9009\u9879\u6807\u7B7E",paraId:10,tocIndex:13},{value:"React.ReactNode",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"disabled",paraId:10,tocIndex:13},{value:"\u662F\u5426\u7981\u7528",paraId:10,tocIndex:13},{value:"boolean",paraId:10,tocIndex:13},{value:"false",paraId:10,tocIndex:13},{value:"[key: string]",paraId:10,tocIndex:13},{value:"\u5176\u4ED6\u81EA\u5B9A\u4E49\u5C5E\u6027",paraId:10,tocIndex:13},{value:"any",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13}]}}]);
