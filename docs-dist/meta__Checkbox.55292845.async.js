"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[4059],{81902:function(E,I,e){var i;e.r(I),e.d(I,{demos:function(){return R}});var A=e(48305),b=e.n(A),g=e(90228),o=e.n(g),$=e(87999),m=e.n($),p=e(75271),R={"checkbox-demo-0":{component:p.memo(p.lazy(m()(o()().mark(function s(){var d,a,l,r,u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=t.sent,a=d.default,t.next=6,e.e(3621).then(e.bind(e,73621));case 6:return l=t.sent,r=l.default,u=function(){return a.createElement("div",null,a.createElement(r,{label:"\u9009\u98791"}),a.createElement(r,{label:"\u9009\u98792"}),a.createElement(r,{label:"\u9009\u98793"}))},t.abrupt("return",{default:u});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"checkbox-demo-0",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <div>
      <Checkbox label="\u9009\u98791" />
      <Checkbox label="\u9009\u98792" />
      <Checkbox label="\u9009\u98793" />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var s=m()(o()().mark(function a(){var l,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},a)}));function d(){return s.apply(this,arguments)}return d}()}},"checkbox-demo-1":{component:p.memo(p.lazy(m()(o()().mark(function s(){var d,a,l,r,u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=t.sent,a=d.default,t.next=6,e.e(3621).then(e.bind(e,73621));case 6:return l=t.sent,r=l.default,u=function(){return a.createElement("div",null,a.createElement(r,{label:"\u7981\u7528\u9009\u9879",disabled:!0}),a.createElement(r,{label:"\u7981\u7528\u4E14\u9009\u4E2D",disabled:!0,checked:!0}))},t.abrupt("return",{default:u});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"checkbox-demo-1",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <div>
      <Checkbox label="\u7981\u7528\u9009\u9879" disabled />
      <Checkbox label="\u7981\u7528\u4E14\u9009\u4E2D" disabled checked />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var s=m()(o()().mark(function a(){var l,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},a)}));function d(){return s.apply(this,arguments)}return d}()}},"checkbox-demo-2":{component:p.memo(p.lazy(m()(o()().mark(function s(){var d,a,l,r,u,n;return o()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=c.sent,a=d.default,l=d.useState,c.next=7,e.e(3621).then(e.bind(e,73621));case 7:return r=c.sent,u=r.default,n=function(){var f=l(!1),h=b()(f,2),v=h[0],x=h[1];return a.createElement("div",null,a.createElement(u,{label:"\u53D7\u63A7\u590D\u9009\u6846",checked:v,onChange:function(){return x(!v)}}),a.createElement("p",null,"\u5F53\u524D\u72B6\u6001: ",v?"\u9009\u4E2D":"\u672A\u9009\u4E2D"))},c.abrupt("return",{default:n});case 11:case"end":return c.stop()}},s)})))),asset:{type:"BLOCK",id:"checkbox-demo-2",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div>
      <Checkbox 
        label="\u53D7\u63A7\u590D\u9009\u6846"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <p>\u5F53\u524D\u72B6\u6001: {checked ? '\u9009\u4E2D' : '\u672A\u9009\u4E2D'}</p>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var s=m()(o()().mark(function a(){var l,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},a)}));function d(){return s.apply(this,arguments)}return d}()}},"checkbox-demo-3":{component:p.memo(p.lazy(m()(o()().mark(function s(){var d,a,l,r,u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=t.sent,a=d.default,t.next=6,e.e(3621).then(e.bind(e,73621));case 6:return l=t.sent,r=l.default,u=function(){return a.createElement("div",null,a.createElement(r,{label:"\u9ED8\u8BA4\u9009\u4E2D",defaultChecked:!0}),a.createElement(r,{label:"\u9ED8\u8BA4\u672A\u9009\u4E2D"}))},t.abrupt("return",{default:u});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"checkbox-demo-3",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <div>
      <Checkbox label="\u9ED8\u8BA4\u9009\u4E2D" defaultChecked />
      <Checkbox label="\u9ED8\u8BA4\u672A\u9009\u4E2D" />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var s=m()(o()().mark(function a(){var l,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},a)}));function d(){return s.apply(this,arguments)}return d}()}},"checkbox-demo-4":{component:p.memo(p.lazy(m()(o()().mark(function s(){var d,a,l,r,u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=t.sent,a=d.default,t.next=6,e.e(3621).then(e.bind(e,73621));case 6:return l=t.sent,r=l.default,u=function(){return a.createElement("div",null,a.createElement(r,{size:"small",label:"\u5C0F\u5C3A\u5BF8"}),a.createElement(r,{size:"default",label:"\u9ED8\u8BA4\u5C3A\u5BF8"}),a.createElement(r,{size:"large",label:"\u5927\u5C3A\u5BF8"}))},t.abrupt("return",{default:u});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"checkbox-demo-4",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <div>
      <Checkbox size="small" label="\u5C0F\u5C3A\u5BF8" />
      <Checkbox size="default" label="\u9ED8\u8BA4\u5C3A\u5BF8" />
      <Checkbox size="large" label="\u5927\u5C3A\u5BF8" />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var s=m()(o()().mark(function a(){var l,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},a)}));function d(){return s.apply(this,arguments)}return d}()}},"checkbox-demo-5":{component:p.memo(p.lazy(m()(o()().mark(function s(){var d,a,l,r,u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=t.sent,a=d.default,t.next=6,e.e(3621).then(e.bind(e,73621));case 6:return l=t.sent,r=l.default,u=function(){return a.createElement(r.Group,{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"}]})},t.abrupt("return",{default:u});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"checkbox-demo-5",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <Checkbox.Group
      options={[
        { label: '\u9009\u98791', value: '1' },
        { label: '\u9009\u98792', value: '2' },
        { label: '\u9009\u98793', value: '3' },
      ]}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var s=m()(o()().mark(function a(){var l,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},a)}));function d(){return s.apply(this,arguments)}return d}()}},"checkbox-demo-6":{component:p.memo(p.lazy(m()(o()().mark(function s(){var d,a,l,r,u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=t.sent,a=d.default,t.next=6,e.e(3621).then(e.bind(e,73621));case 6:return l=t.sent,r=l.default,u=function(){return a.createElement(r.Group,{direction:"vertical",options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"}]})},t.abrupt("return",{default:u});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"checkbox-demo-6",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <Checkbox.Group
      direction="vertical"
      options={[
        { label: '\u9009\u98791', value: '1' },
        { label: '\u9009\u98792', value: '2' },
        { label: '\u9009\u98793', value: '3' },
      ]}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var s=m()(o()().mark(function a(){var l,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},a)}));function d(){return s.apply(this,arguments)}return d}()}},"checkbox-demo-7":{component:p.memo(p.lazy(m()(o()().mark(function s(){var d,a,l,r,u,n;return o()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=c.sent,a=d.default,l=d.useState,c.next=7,e.e(3621).then(e.bind(e,73621));case 7:return r=c.sent,u=r.default,n=function(){var f=l(["1"]),h=b()(f,2),v=h[0],x=h[1];return a.createElement("div",null,a.createElement(u.Group,{value:v,onChange:x,options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"}]}),a.createElement("p",null,"\u5F53\u524D\u9009\u4E2D: ",v.join(", ")))},c.abrupt("return",{default:n});case 11:case"end":return c.stop()}},s)})))),asset:{type:"BLOCK",id:"checkbox-demo-7",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  const [values, setValues] = useState<string[]>(['1']);

  return (
    <div>
      <Checkbox.Group
        value={values}
        onChange={setValues}
        options={[
          { label: '\u9009\u98791', value: '1' },
          { label: '\u9009\u98792', value: '2' },
          { label: '\u9009\u98793', value: '3' },
        ]}
      />
      <p>\u5F53\u524D\u9009\u4E2D: {values.join(', ')}</p>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var s=m()(o()().mark(function a(){var l,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},a)}));function d(){return s.apply(this,arguments)}return d}()}},"checkbox-demo-8":{component:p.memo(p.lazy(m()(o()().mark(function s(){var d,a,l,r,u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=t.sent,a=d.default,t.next=6,e.e(3621).then(e.bind(e,73621));case 6:return l=t.sent,r=l.default,u=function(){return a.createElement("div",null,a.createElement(r.Group,{disabled:!0,options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"},{label:"\u9009\u98793",value:"3"}]}),a.createElement("br",null),a.createElement(r.Group,{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2",disabled:!0},{label:"\u9009\u98793",value:"3"}]}))},t.abrupt("return",{default:u});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"checkbox-demo-8",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  return (
    <div>
      <Checkbox.Group
        disabled
        options={[
          { label: '\u9009\u98791', value: '1' },
          { label: '\u9009\u98792', value: '2' },
          { label: '\u9009\u98793', value: '3' },
        ]}
      />
      <br />
      <Checkbox.Group
        options={[
          { label: '\u9009\u98791', value: '1' },
          { label: '\u9009\u98792', value: '2', disabled: true },
          { label: '\u9009\u98793', value: '3' },
        ]}
      />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var s=m()(o()().mark(function a(){var l,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},a)}));function d(){return s.apply(this,arguments)}return d}()}},"checkbox-demo-9":{component:p.memo(p.lazy(m()(o()().mark(function s(){var d,a,l,r,u,n;return o()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=c.sent,a=d.default,l=d.useState,c.next=7,e.e(3621).then(e.bind(e,73621));case 7:return r=c.sent,u=r.default,n=function(){var f=l(["1"]),h=b()(f,2),v=h[0],x=h[1],y=function(k){x(k)};return a.createElement("div",null,a.createElement(u.Group,{value:v,onChange:y},a.createElement(u,{label:"\u9009\u98791",value:"1"}),a.createElement(u,{label:"\u9009\u98792",value:"2"}),a.createElement(u,{label:"\u9009\u98793",value:"3"})),a.createElement("p",null,"\u5F53\u524D\u9009\u4E2D: ",v.join(", ")))},c.abrupt("return",{default:n});case 11:case"end":return c.stop()}},s)})))),asset:{type:"BLOCK",id:"checkbox-demo-9",refAtomIds:["Checkbox"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Checkbox from '../Checkbox';

const App: React.FC = () => {
  const [values, setValues] = useState<string[]>(['1']);

  const handleChange = (newValues: string[]) => {
    setValues(newValues);
  };

  return (
    <div>
      <Checkbox.Group value={values} onChange={handleChange}>
        <Checkbox label="\u9009\u98791" value="1" />
        <Checkbox label="\u9009\u98792" value="2" />
        <Checkbox label="\u9009\u98793" value="3" />
      </Checkbox.Group>
      <p>\u5F53\u524D\u9009\u4E2D: {values.join(', ')}</p>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var s=m()(o()().mark(function a(){var l,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,r));case 3:case"end":return n.stop()}},a)}));function d(){return s.apply(this,arguments)}return d}()}}}},38715:function(E,I,e){e.r(I),e.d(I,{texts:function(){return i}});const i=[{value:"\u7528\u4E8E\u5728\u591A\u4E2A\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:12},{value:"\u7C7B\u578B",paraId:1,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:12},{value:"\u8BF4\u660E",paraId:1,tocIndex:12},{value:"size",paraId:1,tocIndex:12},{value:"'small' | 'default' | 'large'",paraId:1,tocIndex:12},{value:"'default'",paraId:1,tocIndex:12},{value:"\u590D\u9009\u6846\u5C3A\u5BF8",paraId:1,tocIndex:12},{value:"disabled",paraId:1,tocIndex:12},{value:"boolean",paraId:1,tocIndex:12},{value:"false",paraId:1,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:1,tocIndex:12},{value:"checked",paraId:1,tocIndex:12},{value:"boolean",paraId:1,tocIndex:12},{value:"-",paraId:1,tocIndex:12},{value:"\u9009\u4E2D\u72B6\u6001\uFF08\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:1,tocIndex:12},{value:"defaultChecked",paraId:1,tocIndex:12},{value:"boolean",paraId:1,tocIndex:12},{value:"false",paraId:1,tocIndex:12},{value:"\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001\uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:1,tocIndex:12},{value:"onChange",paraId:1,tocIndex:12},{value:"(e: React.ChangeEvent<HTMLInputElement>) => void",paraId:1,tocIndex:12},{value:"-",paraId:1,tocIndex:12},{value:"\u53D8\u5316\u65F6\u56DE\u8C03",paraId:1,tocIndex:12},{value:"onCheck",paraId:1,tocIndex:12},{value:"(checked: boolean) => void",paraId:1,tocIndex:12},{value:"-",paraId:1,tocIndex:12},{value:"\u9009\u4E2D\u72B6\u6001\u53D8\u5316\u65F6\u56DE\u8C03",paraId:1,tocIndex:12},{value:"label",paraId:1,tocIndex:12},{value:"React.ReactNode",paraId:1,tocIndex:12},{value:"-",paraId:1,tocIndex:12},{value:"\u6807\u7B7E\u6587\u672C",paraId:1,tocIndex:12},{value:"className",paraId:1,tocIndex:12},{value:"string",paraId:1,tocIndex:12},{value:"''",paraId:1,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:12},{value:"style",paraId:1,tocIndex:12},{value:"React.CSSProperties",paraId:1,tocIndex:12},{value:"{}",paraId:1,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:12},{value:"\u5C5E\u6027",paraId:2,tocIndex:13},{value:"\u7C7B\u578B",paraId:2,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:13},{value:"\u8BF4\u660E",paraId:2,tocIndex:13},{value:"size",paraId:2,tocIndex:13},{value:"'small' | 'default' | 'large'",paraId:2,tocIndex:13},{value:"'default'",paraId:2,tocIndex:13},{value:"\u5B50\u590D\u9009\u6846\u5C3A\u5BF8",paraId:2,tocIndex:13},{value:"disabled",paraId:2,tocIndex:13},{value:"boolean",paraId:2,tocIndex:13},{value:"false",paraId:2,tocIndex:13},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5B50\u590D\u9009\u6846",paraId:2,tocIndex:13},{value:"direction",paraId:2,tocIndex:13},{value:"'horizontal' | 'vertical'",paraId:2,tocIndex:13},{value:"'horizontal'",paraId:2,tocIndex:13},{value:"\u6392\u5217\u65B9\u5411",paraId:2,tocIndex:13},{value:"options",paraId:2,tocIndex:13},{value:"Array<{ label: React.ReactNode; value: string | number | boolean; disabled?: boolean }>",paraId:2,tocIndex:13},{value:"[]",paraId:2,tocIndex:13},{value:"\u9009\u9879\u5217\u8868",paraId:2,tocIndex:13},{value:"value",paraId:2,tocIndex:13},{value:"(string | number | boolean)[]",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:2,tocIndex:13},{value:"defaultValue",paraId:2,tocIndex:13},{value:"(string | number | boolean)[]",paraId:2,tocIndex:13},{value:"[]",paraId:2,tocIndex:13},{value:"\u9ED8\u8BA4\u9009\u4E2D\u503C\uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:2,tocIndex:13},{value:"onChange",paraId:2,tocIndex:13},{value:"(values: (string | number | boolean)[]) => void",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"\u53D8\u5316\u65F6\u56DE\u8C03",paraId:2,tocIndex:13},{value:"className",paraId:2,tocIndex:13},{value:"string",paraId:2,tocIndex:13},{value:"''",paraId:2,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:2,tocIndex:13},{value:"style",paraId:2,tocIndex:13},{value:"React.CSSProperties",paraId:2,tocIndex:13},{value:"{}",paraId:2,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:2,tocIndex:13},{value:"children",paraId:2,tocIndex:13},{value:"React.ReactNode",paraId:2,tocIndex:13},{value:"-",paraId:2,tocIndex:13},{value:"\u5B50\u590D\u9009\u6846",paraId:2,tocIndex:13}]}}]);
