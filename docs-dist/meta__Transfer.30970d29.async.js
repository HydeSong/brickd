"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[4239,849],{35978:function(A,f,e){var p;e.r(f),e.d(f,{demos:function(){return K}});var T=e(48305),C=e.n(T),k=e(90228),o=e.n(k),v=e(87999),m=e.n(v),c=e(75271),g=e(10849),K={"transfer-demo-0":{component:c.memo(c.lazy(m()(o()().mark(function d(){var l,r,t,s,u;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(651).then(e.bind(e,40651));case 6:return t=a.sent,s=t.default,u=function(){var i=[{key:1,label:"\u9009\u9879 1"},{key:2,label:"\u9009\u9879 2"},{key:3,label:"\u9009\u9879 3"},{key:4,label:"\u9009\u9879 4"},{key:5,label:"\u9009\u9879 5"}],b=function(I,h,x){console.log("Target Keys:",I),console.log("Direction:",h),console.log("Move Keys:",x)};return r.createElement(s,{dataSource:i,onChange:b})},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"transfer-demo-0",refAtomIds:["Transfer"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '\u9009\u9879 1' },
    { key: 2, label: '\u9009\u9879 2' },
    { key: 3, label: '\u9009\u9879 3' },
    { key: 4, label: '\u9009\u9879 4' },
    { key: 5, label: '\u9009\u9879 5' },
  ];

  const handleChange = (targetKeys: (string | number)[], direction: 'left' | 'right', moveKeys: (string | number)[]) => {
    console.log('Target Keys:', targetKeys);
    console.log('Direction:', direction);
    console.log('Move Keys:', moveKeys);
  };

  return (
    <Transfer
      dataSource={dataSource}
      onChange={handleChange}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(c,2))},renderOpts:{compile:function(){var d=m()(o()().mark(function r(){var t,s=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,s));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"transfer-demo-1":{component:c.memo(c.lazy(m()(o()().mark(function d(){var l,r,t,s,u;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(651).then(e.bind(e,40651));case 6:return t=a.sent,s=t.default,u=function(){var i=[{key:1,label:"\u9009\u9879 1"},{key:2,label:"\u9009\u9879 2"},{key:3,label:"\u9009\u9879 3"},{key:4,label:"\u9009\u9879 4"},{key:5,label:"\u9009\u9879 5"}];return r.createElement(s,{dataSource:i,titles:["\u5F85\u9009\u62E9","\u5DF2\u9009\u62E9"]})},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"transfer-demo-1",refAtomIds:["Transfer"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '\u9009\u9879 1' },
    { key: 2, label: '\u9009\u9879 2' },
    { key: 3, label: '\u9009\u9879 3' },
    { key: 4, label: '\u9009\u9879 4' },
    { key: 5, label: '\u9009\u9879 5' },
  ];

  return (
    <Transfer
      dataSource={dataSource}
      titles={['\u5F85\u9009\u62E9', '\u5DF2\u9009\u62E9']}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(c,2))},renderOpts:{compile:function(){var d=m()(o()().mark(function r(){var t,s=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,s));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"transfer-demo-2":{component:c.memo(c.lazy(m()(o()().mark(function d(){var l,r,t,s,u,n,a;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=i.sent,r=l.default,i.next=6,e.e(651).then(e.bind(e,40651));case 6:return t=i.sent,s=t.default,i.next=10,Promise.resolve().then(e.bind(e,10849));case 10:return u=i.sent,n=u.default,a=function(){var S=[{key:1,label:"\u9009\u9879 1",description:"\u8FD9\u662F\u9009\u9879 1 \u7684\u63CF\u8FF0"},{key:2,label:"\u9009\u9879 2",description:"\u8FD9\u662F\u9009\u9879 2 \u7684\u63CF\u8FF0"},{key:3,label:"\u9009\u9879 3",description:"\u8FD9\u662F\u9009\u9879 3 \u7684\u63CF\u8FF0"},{key:4,label:"\u9009\u9879 4",description:"\u8FD9\u662F\u9009\u9879 4 \u7684\u63CF\u8FF0"},{key:5,label:"\u9009\u9879 5",description:"\u8FD9\u662F\u9009\u9879 5 \u7684\u63CF\u8FF0"}],I=function(x){return r.createElement("div",null,r.createElement("div",{style:{display:"flex",alignItems:"center"}},r.createElement(n,{name:"check-circle",size:16,style:{marginRight:"8px",color:"#52c41a"}}),r.createElement("span",null,x.label)),r.createElement("div",{style:{fontSize:"12px",color:"#999",marginTop:"4px"}},x.description))};return r.createElement(s,{dataSource:S,render:I})},i.abrupt("return",{default:a});case 14:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"transfer-demo-2",refAtomIds:["Transfer"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Transfer from './index';
import Icon from '../Icon';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '\u9009\u9879 1', description: '\u8FD9\u662F\u9009\u9879 1 \u7684\u63CF\u8FF0' },
    { key: 2, label: '\u9009\u9879 2', description: '\u8FD9\u662F\u9009\u9879 2 \u7684\u63CF\u8FF0' },
    { key: 3, label: '\u9009\u9879 3', description: '\u8FD9\u662F\u9009\u9879 3 \u7684\u63CF\u8FF0' },
    { key: 4, label: '\u9009\u9879 4', description: '\u8FD9\u662F\u9009\u9879 4 \u7684\u63CF\u8FF0' },
    { key: 5, label: '\u9009\u9879 5', description: '\u8FD9\u662F\u9009\u9879 5 \u7684\u63CF\u8FF0' },
  ];

  const renderItem = (item: any) => {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="check-circle" size={16} style={{ marginRight: '8px', color: '#52c41a' }} />
          <span>{item.label}</span>
        </div>
        <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
          {item.description}
        </div>
      </div>
    );
  };

  return (
    <Transfer
      dataSource={dataSource}
      render={renderItem}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Icon.tsx":{type:"FILE",value:e(4487).Z}},entry:"index.tsx"},context:{"../Icon.tsx":g,react:p||(p=e.t(c,2)),"/Users/hyde/Documents/Workspace/brickd/src/Icon/index.tsx":g},renderOpts:{compile:function(){var d=m()(o()().mark(function r(){var t,s=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,s));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"transfer-demo-3":{component:c.memo(c.lazy(m()(o()().mark(function d(){var l,r,t,s,u;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(651).then(e.bind(e,40651));case 6:return t=a.sent,s=t.default,u=function(){var i=[{key:1,label:"\u9009\u9879 1"},{key:2,label:"\u9009\u9879 2"},{key:3,label:"\u9009\u9879 3"},{key:4,label:"\u9009\u9879 4"},{key:5,label:"\u9009\u9879 5"}];return r.createElement(s,{dataSource:i,disabled:!0})},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"transfer-demo-3",refAtomIds:["Transfer"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '\u9009\u9879 1' },
    { key: 2, label: '\u9009\u9879 2' },
    { key: 3, label: '\u9009\u9879 3' },
    { key: 4, label: '\u9009\u9879 4' },
    { key: 5, label: '\u9009\u9879 5' },
  ];

  return (
    <Transfer
      dataSource={dataSource}
      disabled
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(c,2))},renderOpts:{compile:function(){var d=m()(o()().mark(function r(){var t,s=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,s));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"transfer-demo-4":{component:c.memo(c.lazy(m()(o()().mark(function d(){var l,r,t,s,u;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(651).then(e.bind(e,40651));case 6:return t=a.sent,s=t.default,u=function(){var i=[{key:1,label:"\u9009\u9879 1"},{key:2,label:"\u9009\u9879 2",disabled:!0},{key:3,label:"\u9009\u9879 3"},{key:4,label:"\u9009\u9879 4",disabled:!0},{key:5,label:"\u9009\u9879 5"}];return r.createElement(s,{dataSource:i})},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"transfer-demo-4",refAtomIds:["Transfer"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '\u9009\u9879 1' },
    { key: 2, label: '\u9009\u9879 2', disabled: true },
    { key: 3, label: '\u9009\u9879 3' },
    { key: 4, label: '\u9009\u9879 4', disabled: true },
    { key: 5, label: '\u9009\u9879 5' },
  ];

  return (
    <Transfer
      dataSource={dataSource}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(c,2))},renderOpts:{compile:function(){var d=m()(o()().mark(function r(){var t,s=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,s));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"transfer-demo-5":{component:c.memo(c.lazy(m()(o()().mark(function d(){var l,r,t,s,u,n;return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=y.sent,r=l.default,t=l.useState,y.next=7,e.e(651).then(e.bind(e,40651));case 7:return s=y.sent,u=s.default,n=function(){var b=[{key:1,label:"\u9009\u9879 1"},{key:2,label:"\u9009\u9879 2"},{key:3,label:"\u9009\u9879 3"},{key:4,label:"\u9009\u9879 4"},{key:5,label:"\u9009\u9879 5"}],S=t([2,4]),I=C()(S,2),h=I[0],x=I[1],$=function(E,R,P){x(E),console.log("Direction:",R),console.log("Move Keys:",P)};return r.createElement("div",null,r.createElement(u,{dataSource:b,value:h,onChange:$}),r.createElement("p",null,"\u5DF2\u9009\u62E9\u7684\u9009\u9879: ",h.join(", ")))},y.abrupt("return",{default:n});case 11:case"end":return y.stop()}},d)})))),asset:{type:"BLOCK",id:"transfer-demo-5",refAtomIds:["Transfer"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '\u9009\u9879 1' },
    { key: 2, label: '\u9009\u9879 2' },
    { key: 3, label: '\u9009\u9879 3' },
    { key: 4, label: '\u9009\u9879 4' },
    { key: 5, label: '\u9009\u9879 5' },
  ];

  const [targetKeys, setTargetKeys] = useState<(string | number)[]>([2, 4]);

  const handleChange = (newTargetKeys: (string | number)[], direction: 'left' | 'right', moveKeys: (string | number)[]) => {
    setTargetKeys(newTargetKeys);
    console.log('Direction:', direction);
    console.log('Move Keys:', moveKeys);
  };

  return (
    <div>
      <Transfer
        dataSource={dataSource}
        value={targetKeys}
        onChange={handleChange}
      />
      <p>\u5DF2\u9009\u62E9\u7684\u9009\u9879: {targetKeys.join(', ')}</p>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(c,2))},renderOpts:{compile:function(){var d=m()(o()().mark(function r(){var t,s=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,s));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"transfer-demo-6":{component:c.memo(c.lazy(m()(o()().mark(function d(){var l,r,t,s,u;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(651).then(e.bind(e,40651));case 6:return t=a.sent,s=t.default,u=function(){var i=[{key:1,label:"\u9009\u9879 1"},{key:2,label:"\u9009\u9879 2"},{key:3,label:"\u9009\u9879 3"},{key:4,label:"\u9009\u9879 4"},{key:5,label:"\u9009\u9879 5"}];return r.createElement(s,{dataSource:i,defaultValue:[1,3,5]})},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"transfer-demo-6",refAtomIds:["Transfer"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '\u9009\u9879 1' },
    { key: 2, label: '\u9009\u9879 2' },
    { key: 3, label: '\u9009\u9879 3' },
    { key: 4, label: '\u9009\u9879 4' },
    { key: 5, label: '\u9009\u9879 5' },
  ];

  return (
    <Transfer
      dataSource={dataSource}
      defaultValue={[1, 3, 5]}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(c,2))},renderOpts:{compile:function(){var d=m()(o()().mark(function r(){var t,s=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,s));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"transfer-demo-7":{component:c.memo(c.lazy(m()(o()().mark(function d(){var l,r,t,s,u;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(651).then(e.bind(e,40651));case 6:return t=a.sent,s=t.default,u=function(){var i=[{key:1,label:"\u9009\u9879 1"},{key:2,label:"\u9009\u9879 2"},{key:3,label:"\u9009\u9879 3"},{key:4,label:"\u9009\u9879 4"},{key:5,label:"\u9009\u9879 5"}];return r.createElement(s,{dataSource:i,listStyle:[{width:300,height:300},{width:300,height:300}],style:{border:"1px solid #e8e8e8",borderRadius:"8px",padding:"16px",backgroundColor:"#f9f9f9"}})},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"transfer-demo-7",refAtomIds:["Transfer"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '\u9009\u9879 1' },
    { key: 2, label: '\u9009\u9879 2' },
    { key: 3, label: '\u9009\u9879 3' },
    { key: 4, label: '\u9009\u9879 4' },
    { key: 5, label: '\u9009\u9879 5' },
  ];

  return (
    <Transfer
      dataSource={dataSource}
      listStyle={[
        { width: 300, height: 300 },
        { width: 300, height: 300 }
      ]}
      style={{
        border: '1px solid #e8e8e8',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#f9f9f9',
      }}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(c,2))},renderOpts:{compile:function(){var d=m()(o()().mark(function r(){var t,s=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,s));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"transfer-demo-8":{component:c.memo(c.lazy(m()(o()().mark(function d(){var l,r,t,s,u;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(651).then(e.bind(e,40651));case 6:return t=a.sent,s=t.default,u=function(){var i=[{key:1,label:"\u9009\u9879 1"},{key:2,label:"\u9009\u9879 2"},{key:3,label:"\u9009\u9879 3"},{key:4,label:"\u9009\u9879 4"},{key:5,label:"\u9009\u9879 5"}],b=function(I,h){console.log("Source Selected Keys:",I),console.log("Target Selected Keys:",h)};return r.createElement(s,{dataSource:i,onSelectChange:b})},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"transfer-demo-8",refAtomIds:["Transfer"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '\u9009\u9879 1' },
    { key: 2, label: '\u9009\u9879 2' },
    { key: 3, label: '\u9009\u9879 3' },
    { key: 4, label: '\u9009\u9879 4' },
    { key: 5, label: '\u9009\u9879 5' },
  ];

  const handleSelectChange = (sourceSelectedKeys: (string | number)[], targetSelectedKeys: (string | number)[]) => {
    console.log('Source Selected Keys:', sourceSelectedKeys);
    console.log('Target Selected Keys:', targetSelectedKeys);
  };

  return (
    <Transfer
      dataSource={dataSource}
      onSelectChange={handleSelectChange}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(c,2))},renderOpts:{compile:function(){var d=m()(o()().mark(function r(){var t,s=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,s));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"transfer-demo-9":{component:c.memo(c.lazy(m()(o()().mark(function d(){var l,r,t,s,u;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(651).then(e.bind(e,40651));case 6:return t=a.sent,s=t.default,u=function(){var i=[{key:1,label:"\u82F9\u679C"},{key:2,label:"\u9999\u8549"},{key:3,label:"\u6A59\u5B50"},{key:4,label:"\u8349\u8393"},{key:5,label:"\u897F\u74DC"},{key:6,label:"\u8461\u8404"},{key:7,label:"\u68A8"},{key:8,label:"\u6843"}];return r.createElement(s,{dataSource:i,titles:["\u6C34\u679C\u5217\u8868","\u5DF2\u9009\u62E9\u6C34\u679C"]})},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"transfer-demo-9",refAtomIds:["Transfer"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Transfer from './index';

const App: React.FC = () => {
  const dataSource = [
    { key: 1, label: '\u82F9\u679C' },
    { key: 2, label: '\u9999\u8549' },
    { key: 3, label: '\u6A59\u5B50' },
    { key: 4, label: '\u8349\u8393' },
    { key: 5, label: '\u897F\u74DC' },
    { key: 6, label: '\u8461\u8404' },
    { key: 7, label: '\u68A8' },
    { key: 8, label: '\u6843' },
  ];

  return (
    <Transfer
      dataSource={dataSource}
      titles={['\u6C34\u679C\u5217\u8868', '\u5DF2\u9009\u62E9\u6C34\u679C']}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(c,2))},renderOpts:{compile:function(){var d=m()(o()().mark(function r(){var t,s=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,s));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}}}},10849:function(A,f,e){e.r(f),e.d(f,{default:function(){return k}});var p={icon:"Vp2lCjtRG4DLDFDyVAez","icon-home":"ulVgW4QY8wUom5HXWOuz","icon-search":"sAK0iM6ix40xZxS_gR3U","icon-user":"WUYhPdCcKFAxSpKQlO3t","icon-settings":"Ztk4ZKfgYg4J2Nmgcsjn","icon-arrow-right":"cxV9ttCA6QQkztjDqSDh","icon-arrow-left":"p5tsuFDYnk8_NAJ2QcNA","icon-arrow-up":"RL0LhMbJK8b1M0jwLYAY","icon-arrow-down":"DHSDUSNKuAoh1JeJkV0v","icon-plus":"hUkP6eCM8EMNXnxmHzG5","icon-minus":"Gf1qVZt2htU07CuTLi1X","icon-close":"shhoQ5dywb0V4tCsLHMN","icon-check":"vaoqDQYPDA0e9UdawIs_","icon-warning":"lMoCQOuGA0cxWF77Hi3f","icon-error":"Jp3AUMQ0eY_UXDunuEpk","icon-info":"MAuILQQxsPI3jjujx1cX",spin:"CiXqHgtYVPkCVvohw7xq"},T=e(52676),C=function(v){var m=v.type,c=v.size,g=c===void 0?"middle":c,K=v.color,d=v.rotate,l=v.spin,r=v.className,t=function(){if(typeof g=="number")return g;switch(g){case"small":return 16;case"large":return 24;case"middle":default:return 20}},s=t();return(0,T.jsx)("i",{className:`
        `.concat(p.icon,`
        `).concat(p[m]||"",`
        `).concat(l?p.spin:"",`
        `).concat(r||"",`
      `),style:{fontSize:"".concat(s,"px"),color:K,transform:d?"rotate(".concat(d,"deg)"):void 0}})},k=C},36391:function(A,f,e){e.r(f),e.d(f,{texts:function(){return p}});const p=[{value:"\u7A7F\u68AD\u6846\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5728\u4E24\u4E2A\u5217\u8868\u4E4B\u95F4\u8F6C\u79FB\u9879\u76EE\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u7A7F\u68AD\u6846\u4F7F\u7528\u65B9\u5F0F\u3002",paraId:1,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u6E90\u5217\u8868\u548C\u76EE\u6807\u5217\u8868\u7684\u6807\u9898\u3002",paraId:2,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u5217\u8868\u9879\u7684\u6E32\u67D3\u65B9\u5F0F\u3002",paraId:3,tocIndex:3},{value:"\u7981\u7528\u7684\u7A7F\u68AD\u6846\u3002",paraId:4,tocIndex:4},{value:"\u90E8\u5206\u9009\u9879\u7981\u7528\u7684\u7A7F\u68AD\u6846\u3002",paraId:5,tocIndex:5},{value:"\u901A\u8FC7\u72B6\u6001\u63A7\u5236\u7A7F\u68AD\u6846\u7684\u503C\u3002",paraId:6,tocIndex:6},{value:"\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u7684\u7A7F\u68AD\u6846\u3002",paraId:7,tocIndex:7},{value:"\u901A\u8FC7 className \u548C style \u5C5E\u6027\u81EA\u5B9A\u4E49\u7A7F\u68AD\u6846\u6837\u5F0F\u3002",paraId:8,tocIndex:8},{value:"\u76D1\u542C\u9009\u62E9\u53D8\u5316\u7684\u56DE\u8C03\u51FD\u6570\u3002",paraId:9,tocIndex:9},{value:"\u7A7F\u68AD\u6846\u5185\u7F6E\u641C\u7D22\u529F\u80FD\u3002",paraId:10,tocIndex:10},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u7C7B\u578B",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"\u8BF4\u660E",paraId:11,tocIndex:12},{value:"disabled",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:12},{value:"value",paraId:11,tocIndex:12},{value:"(string | number)[]",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u53D7\u63A7\u6A21\u5F0F\u4E0B\u7684\u76EE\u6807\u5217\u8868\u503C",paraId:11,tocIndex:12},{value:"defaultValue",paraId:11,tocIndex:12},{value:"(string | number)[]",paraId:11,tocIndex:12},{value:"[]",paraId:11,tocIndex:12},{value:"\u975E\u53D7\u63A7\u6A21\u5F0F\u4E0B\u7684\u9ED8\u8BA4\u76EE\u6807\u5217\u8868\u503C",paraId:11,tocIndex:12},{value:"onChange",paraId:11,tocIndex:12},{value:"(targetKeys: (string | number)[], direction: 'left' | 'right', moveKeys: (string | number)[]) => void",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u6570\u636E\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:11,tocIndex:12},{value:"onSelectChange",paraId:11,tocIndex:12},{value:"(sourceSelectedKeys: (string | number)[], targetSelectedKeys: (string | number)[]) => void",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u9009\u62E9\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:11,tocIndex:12},{value:"dataSource",paraId:11,tocIndex:12},{value:"TransferItem[]",paraId:11,tocIndex:12},{value:"[]",paraId:11,tocIndex:12},{value:"\u6570\u636E\u6E90",paraId:11,tocIndex:12},{value:"titles",paraId:11,tocIndex:12},{value:"[string, string]",paraId:11,tocIndex:12},{value:"['\u6E90\u5217\u8868', '\u76EE\u6807\u5217\u8868']",paraId:11,tocIndex:12},{value:"\u6E90\u5217\u8868\u548C\u76EE\u6807\u5217\u8868\u7684\u6807\u9898",paraId:11,tocIndex:12},{value:"render",paraId:11,tocIndex:12},{value:"(item: TransferItem) => React.ReactNode",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u5217\u8868\u9879\u6E32\u67D3\u51FD\u6570",paraId:11,tocIndex:12},{value:"listStyle",paraId:11,tocIndex:12},{value:"React.CSSProperties[]",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u4E24\u4E2A\u5217\u8868\u7684\u6837\u5F0F",paraId:11,tocIndex:12},{value:"className",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"''",paraId:11,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:11,tocIndex:12},{value:"style",paraId:11,tocIndex:12},{value:"React.CSSProperties",paraId:11,tocIndex:12},{value:"{}",paraId:11,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:11,tocIndex:12},{value:"\u5C5E\u6027",paraId:12,tocIndex:13},{value:"\u7C7B\u578B",paraId:12,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:13},{value:"\u8BF4\u660E",paraId:12,tocIndex:13},{value:"key",paraId:12,tocIndex:13},{value:"string | number",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"\u552F\u4E00\u6807\u8BC6",paraId:12,tocIndex:13},{value:"label",paraId:12,tocIndex:13},{value:"React.ReactNode",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"\u663E\u793A\u6587\u672C",paraId:12,tocIndex:13},{value:"disabled",paraId:12,tocIndex:13},{value:"boolean",paraId:12,tocIndex:13},{value:"false",paraId:12,tocIndex:13},{value:"\u662F\u5426\u7981\u7528",paraId:12,tocIndex:13},{value:"[key: string]",paraId:12,tocIndex:13},{value:"any",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u5C5E\u6027",paraId:12,tocIndex:13}]},4487:function(A,f){f.Z=`
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
