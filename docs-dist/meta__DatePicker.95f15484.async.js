"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[6904],{11386:function(y,v,e){var c;e.r(v),e.d(v,{demos:function(){return A}});var h=e(48305),P=e.n(h),D=e(90228),s=e.n(D),E=e(87999),o=e.n(E),p=e(75271),A={"datepicker-demo-0":{component:p.memo(p.lazy(o()(s()().mark(function u(){var l,a,r,d,i;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=n.sent,a=l.default,n.next=6,e.e(3034).then(e.bind(e,93034));case 6:return r=n.sent,d=r.default,i=function(){return a.createElement("div",null,a.createElement(d,null))},n.abrupt("return",{default:i});case 10:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"datepicker-demo-0",refAtomIds:["DatePicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var u=o()(s()().mark(function a(){var r,d=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3015).then(e.bind(e,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,d));case 3:case"end":return t.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"datepicker-demo-1":{component:p.memo(p.lazy(o()(s()().mark(function u(){var l,a,r,d,i;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=n.sent,a=l.default,n.next=6,e.e(3034).then(e.bind(e,93034));case 6:return r=n.sent,d=r.default,i=function(){return a.createElement("div",null,a.createElement(d,{size:"small"}),a.createElement(d,{size:"default"}),a.createElement(d,{size:"large"}))},n.abrupt("return",{default:i});case 10:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"datepicker-demo-1",refAtomIds:["DatePicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker size="small" />
      <DatePicker size="default" />
      <DatePicker size="large" />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var u=o()(s()().mark(function a(){var r,d=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3015).then(e.bind(e,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,d));case 3:case"end":return t.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"datepicker-demo-2":{component:p.memo(p.lazy(o()(s()().mark(function u(){var l,a,r,d,i;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=n.sent,a=l.default,n.next=6,e.e(3034).then(e.bind(e,93034));case 6:return r=n.sent,d=r.default,i=function(){return a.createElement("div",null,a.createElement(d,{disabled:!0}))},n.abrupt("return",{default:i});case 10:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"datepicker-demo-2",refAtomIds:["DatePicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker disabled />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var u=o()(s()().mark(function a(){var r,d=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3015).then(e.bind(e,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,d));case 3:case"end":return t.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"datepicker-demo-3":{component:p.memo(p.lazy(o()(s()().mark(function u(){var l,a,r,d,i,t;return s()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=m.sent,a=l.default,r=l.useState,m.next=7,e.e(3034).then(e.bind(e,93034));case 7:return d=m.sent,i=d.default,t=function(){var g=r(""),f=P()(g,2),I=f[0],$=f[1];return a.createElement("div",null,a.createElement(i,{value:I,onChange:$}),a.createElement("p",null,"\u5F53\u524D\u9009\u62E9: ",I||"\u672A\u9009\u62E9"))},m.abrupt("return",{default:t});case 11:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"datepicker-demo-3",refAtomIds:["DatePicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  const [date, setDate] = useState<string>('');

  return (
    <div>
      <DatePicker value={date} onChange={setDate} />
      <p>\u5F53\u524D\u9009\u62E9: {date || '\u672A\u9009\u62E9'}</p>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var u=o()(s()().mark(function a(){var r,d=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3015).then(e.bind(e,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,d));case 3:case"end":return t.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"datepicker-demo-4":{component:p.memo(p.lazy(o()(s()().mark(function u(){var l,a,r,d,i;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=n.sent,a=l.default,n.next=6,e.e(3034).then(e.bind(e,93034));case 6:return r=n.sent,d=r.default,i=function(){return a.createElement("div",null,a.createElement(d,{defaultValue:"2024-01-01"}))},n.abrupt("return",{default:i});case 10:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"datepicker-demo-4",refAtomIds:["DatePicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker defaultValue="2024-01-01" />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var u=o()(s()().mark(function a(){var r,d=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3015).then(e.bind(e,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,d));case 3:case"end":return t.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"datepicker-demo-5":{component:p.memo(p.lazy(o()(s()().mark(function u(){var l,a,r,d,i;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=n.sent,a=l.default,n.next=6,e.e(3034).then(e.bind(e,93034));case 6:return r=n.sent,d=r.default,i=function(){return a.createElement("div",null,a.createElement(d,{placeholder:"\u8BF7\u9009\u62E9\u5165\u4F4F\u65E5\u671F"}))},n.abrupt("return",{default:i});case 10:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"datepicker-demo-5",refAtomIds:["DatePicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker placeholder="\u8BF7\u9009\u62E9\u5165\u4F4F\u65E5\u671F" />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var u=o()(s()().mark(function a(){var r,d=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3015).then(e.bind(e,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,d));case 3:case"end":return t.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"datepicker-demo-6":{component:p.memo(p.lazy(o()(s()().mark(function u(){var l,a,r,d,i;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=n.sent,a=l.default,n.next=6,e.e(3034).then(e.bind(e,93034));case 6:return r=n.sent,d=r.default,i=function(){return a.createElement("div",null,a.createElement(d,{format:"YYYY/MM/DD"}))},n.abrupt("return",{default:i});case 10:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"datepicker-demo-6",refAtomIds:["DatePicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker format="YYYY/MM/DD" />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var u=o()(s()().mark(function a(){var r,d=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3015).then(e.bind(e,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,d));case 3:case"end":return t.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}},"datepicker-demo-7":{component:p.memo(p.lazy(o()(s()().mark(function u(){var l,a,r,d,i;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=n.sent,a=l.default,n.next=6,e.e(3034).then(e.bind(e,93034));case 6:return r=n.sent,d=r.default,i=function(){return a.createElement("div",null,a.createElement(d,{style:{width:200,border:"2px solid #ddd",borderRadius:8,padding:8}}))},n.abrupt("return",{default:i});case 10:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"datepicker-demo-7",refAtomIds:["DatePicker"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import DatePicker from '../DatePicker';

const App: React.FC = () => {
  return (
    <div>
      <DatePicker 
        style={{ 
          width: 200, 
          border: '2px solid #ddd', 
          borderRadius: 8, 
          padding: 8 
        }} 
      />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var u=o()(s()().mark(function a(){var r,d=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3015).then(e.bind(e,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,d));case 3:case"end":return t.stop()}},a)}));function l(){return u.apply(this,arguments)}return l}()}}}},23400:function(y,v,e){e.r(v),e.d(v,{texts:function(){return c}});const c=[{value:"\u7528\u4E8E\u9009\u62E9\u65E5\u671F\u7684\u7EC4\u4EF6\uFF0C\u652F\u6301\u591A\u79CD\u914D\u7F6E\u9009\u9879\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:9},{value:"\u7C7B\u578B",paraId:1,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:9},{value:"\u8BF4\u660E",paraId:1,tocIndex:9},{value:"size",paraId:1,tocIndex:9},{value:"'small' | 'default' | 'large'",paraId:1,tocIndex:9},{value:"'default'",paraId:1,tocIndex:9},{value:"\u65E5\u671F\u9009\u62E9\u5668\u5C3A\u5BF8",paraId:1,tocIndex:9},{value:"disabled",paraId:1,tocIndex:9},{value:"boolean",paraId:1,tocIndex:9},{value:"false",paraId:1,tocIndex:9},{value:"\u662F\u5426\u7981\u7528",paraId:1,tocIndex:9},{value:"value",paraId:1,tocIndex:9},{value:"string",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"\u5F53\u524D\u65E5\u671F\u503C\uFF08\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:1,tocIndex:9},{value:"defaultValue",paraId:1,tocIndex:9},{value:"string",paraId:1,tocIndex:9},{value:"''",paraId:1,tocIndex:9},{value:"\u9ED8\u8BA4\u65E5\u671F\u503C\uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:1,tocIndex:9},{value:"onChange",paraId:1,tocIndex:9},{value:"(date: string) => void",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"\u65E5\u671F\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:1,tocIndex:9},{value:"onOpenChange",paraId:1,tocIndex:9},{value:"(open: boolean) => void",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"\u9762\u677F\u6253\u5F00/\u5173\u95ED\u72B6\u6001\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:1,tocIndex:9},{value:"placeholder",paraId:1,tocIndex:9},{value:"string",paraId:1,tocIndex:9},{value:"'\u8BF7\u9009\u62E9\u65E5\u671F'",paraId:1,tocIndex:9},{value:"\u5360\u4F4D\u7B26\u6587\u672C",paraId:1,tocIndex:9},{value:"format",paraId:1,tocIndex:9},{value:"string",paraId:1,tocIndex:9},{value:"'YYYY-MM-DD'",paraId:1,tocIndex:9},{value:"\u65E5\u671F\u683C\u5F0F",paraId:1,tocIndex:9},{value:"className",paraId:1,tocIndex:9},{value:"string",paraId:1,tocIndex:9},{value:"''",paraId:1,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:9},{value:"style",paraId:1,tocIndex:9},{value:"React.CSSProperties",paraId:1,tocIndex:9},{value:"{}",paraId:1,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:9}]}}]);
