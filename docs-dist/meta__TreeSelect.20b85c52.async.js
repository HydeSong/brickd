"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[7418],{41940:function(k,h,e){var p;e.r(h),e.d(h,{demos:function(){return T}});var g=e(48305),A=e.n(g),D=e(90228),i=e.n(D),S=e(87999),o=e.n(S),u=e(75271),T={"treeselect-demo-0":{component:u.memo(u.lazy(o()(i()().mark(function s(){var l,r,a,d,c;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(5302).then(e.bind(e,95302));case 6:return a=t.sent,d=a.default,c=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}],I=function(v){console.log("Selected value:",v)};return r.createElement(d,{data:m,onChange:I})},t.abrupt("return",{default:c});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"treeselect-demo-0",refAtomIds:["TreeSelect"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import TreeSelect from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '\u8282\u70B9 1',
      children: [
        {
          key: '1-1',
          title: '\u8282\u70B9 1-1',
          children: [
            {
              key: '1-1-1',
              title: '\u8282\u70B9 1-1-1',
            },
            {
              key: '1-1-2',
              title: '\u8282\u70B9 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '\u8282\u70B9 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '\u8282\u70B9 2',
      children: [
        {
          key: '2-1',
          title: '\u8282\u70B9 2-1',
        },
      ],
    },
  ];

  const handleChange = (value: string | string[]) => {
    console.log('Selected value:', value);
  };

  return (
    <TreeSelect
      data={treeData}
      onChange={handleChange}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(u,2))},renderOpts:{compile:function(){var s=o()(i()().mark(function r(){var a,d=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return s.apply(this,arguments)}return l}()}},"treeselect-demo-1":{component:u.memo(u.lazy(o()(i()().mark(function s(){var l,r,a,d,c;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(5302).then(e.bind(e,95302));case 6:return a=t.sent,d=a.default,c=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}],I=function(v){console.log("Selected values:",v)};return r.createElement(d,{data:m,multiple:!0,onChange:I})},t.abrupt("return",{default:c});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"treeselect-demo-1",refAtomIds:["TreeSelect"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import TreeSelect from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '\u8282\u70B9 1',
      children: [
        {
          key: '1-1',
          title: '\u8282\u70B9 1-1',
          children: [
            {
              key: '1-1-1',
              title: '\u8282\u70B9 1-1-1',
            },
            {
              key: '1-1-2',
              title: '\u8282\u70B9 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '\u8282\u70B9 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '\u8282\u70B9 2',
      children: [
        {
          key: '2-1',
          title: '\u8282\u70B9 2-1',
        },
      ],
    },
  ];

  const handleChange = (value: string | string[]) => {
    console.log('Selected values:', value);
  };

  return (
    <TreeSelect
      data={treeData}
      multiple
      onChange={handleChange}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(u,2))},renderOpts:{compile:function(){var s=o()(i()().mark(function r(){var a,d=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return s.apply(this,arguments)}return l}()}},"treeselect-demo-2":{component:u.memo(u.lazy(o()(i()().mark(function s(){var l,r,a,d,c;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(5302).then(e.bind(e,95302));case 6:return a=t.sent,d=a.default,c=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}];return r.createElement(d,{data:m,searchable:!0})},t.abrupt("return",{default:c});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"treeselect-demo-2",refAtomIds:["TreeSelect"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import TreeSelect from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '\u8282\u70B9 1',
      children: [
        {
          key: '1-1',
          title: '\u8282\u70B9 1-1',
          children: [
            {
              key: '1-1-1',
              title: '\u8282\u70B9 1-1-1',
            },
            {
              key: '1-1-2',
              title: '\u8282\u70B9 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '\u8282\u70B9 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '\u8282\u70B9 2',
      children: [
        {
          key: '2-1',
          title: '\u8282\u70B9 2-1',
        },
      ],
    },
  ];

  return (
    <TreeSelect
      data={treeData}
      searchable
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(u,2))},renderOpts:{compile:function(){var s=o()(i()().mark(function r(){var a,d=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return s.apply(this,arguments)}return l}()}},"treeselect-demo-3":{component:u.memo(u.lazy(o()(i()().mark(function s(){var l,r,a,d,c;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(5302).then(e.bind(e,95302));case 6:return a=t.sent,d=a.default,c=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}];return r.createElement(d,{data:m,treeCheckable:!0,multiple:!0})},t.abrupt("return",{default:c});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"treeselect-demo-3",refAtomIds:["TreeSelect"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import TreeSelect from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '\u8282\u70B9 1',
      children: [
        {
          key: '1-1',
          title: '\u8282\u70B9 1-1',
          children: [
            {
              key: '1-1-1',
              title: '\u8282\u70B9 1-1-1',
            },
            {
              key: '1-1-2',
              title: '\u8282\u70B9 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '\u8282\u70B9 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '\u8282\u70B9 2',
      children: [
        {
          key: '2-1',
          title: '\u8282\u70B9 2-1',
        },
      ],
    },
  ];

  return (
    <TreeSelect
      data={treeData}
      treeCheckable
      multiple
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(u,2))},renderOpts:{compile:function(){var s=o()(i()().mark(function r(){var a,d=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return s.apply(this,arguments)}return l}()}},"treeselect-demo-4":{component:u.memo(u.lazy(o()(i()().mark(function s(){var l,r,a,d,c,n;return i()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=y.sent,r=l.default,a=l.useState,y.next=7,e.e(5302).then(e.bind(e,95302));case 7:return d=y.sent,c=d.default,n=function(){var I=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}],f=a(""),v=A()(f,2),x=v[0],E=v[1];return r.createElement("div",null,r.createElement(c,{data:I,value:x,onChange:E}),r.createElement("p",null,"Selected value: ",x))},y.abrupt("return",{default:n});case 11:case"end":return y.stop()}},s)})))),asset:{type:"BLOCK",id:"treeselect-demo-4",refAtomIds:["TreeSelect"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import TreeSelect from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '\u8282\u70B9 1',
      children: [
        {
          key: '1-1',
          title: '\u8282\u70B9 1-1',
          children: [
            {
              key: '1-1-1',
              title: '\u8282\u70B9 1-1-1',
            },
            {
              key: '1-1-2',
              title: '\u8282\u70B9 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '\u8282\u70B9 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '\u8282\u70B9 2',
      children: [
        {
          key: '2-1',
          title: '\u8282\u70B9 2-1',
        },
      ],
    },
  ];

  const [value, setValue] = useState<string>('');

  return (
    <div>
      <TreeSelect
        data={treeData}
        value={value}
        onChange={setValue}
      />
      <p>Selected value: {value}</p>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(u,2))},renderOpts:{compile:function(){var s=o()(i()().mark(function r(){var a,d=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return s.apply(this,arguments)}return l}()}},"treeselect-demo-5":{component:u.memo(u.lazy(o()(i()().mark(function s(){var l,r,a,d,c;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(5302).then(e.bind(e,95302));case 6:return a=t.sent,d=a.default,c=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}];return r.createElement(d,{data:m,defaultValue:"1-1-1"})},t.abrupt("return",{default:c});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"treeselect-demo-5",refAtomIds:["TreeSelect"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import TreeSelect from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '\u8282\u70B9 1',
      children: [
        {
          key: '1-1',
          title: '\u8282\u70B9 1-1',
          children: [
            {
              key: '1-1-1',
              title: '\u8282\u70B9 1-1-1',
            },
            {
              key: '1-1-2',
              title: '\u8282\u70B9 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '\u8282\u70B9 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '\u8282\u70B9 2',
      children: [
        {
          key: '2-1',
          title: '\u8282\u70B9 2-1',
        },
      ],
    },
  ];

  return (
    <TreeSelect
      data={treeData}
      defaultValue="1-1-1"
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(u,2))},renderOpts:{compile:function(){var s=o()(i()().mark(function r(){var a,d=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return s.apply(this,arguments)}return l}()}},"treeselect-demo-6":{component:u.memo(u.lazy(o()(i()().mark(function s(){var l,r,a,d,c;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(5302).then(e.bind(e,95302));case 6:return a=t.sent,d=a.default,c=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}];return r.createElement(d,{data:m,placeholder:"\u8BF7\u9009\u62E9\u8282\u70B9"})},t.abrupt("return",{default:c});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"treeselect-demo-6",refAtomIds:["TreeSelect"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import TreeSelect from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '\u8282\u70B9 1',
      children: [
        {
          key: '1-1',
          title: '\u8282\u70B9 1-1',
          children: [
            {
              key: '1-1-1',
              title: '\u8282\u70B9 1-1-1',
            },
            {
              key: '1-1-2',
              title: '\u8282\u70B9 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '\u8282\u70B9 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '\u8282\u70B9 2',
      children: [
        {
          key: '2-1',
          title: '\u8282\u70B9 2-1',
        },
      ],
    },
  ];

  return (
    <TreeSelect
      data={treeData}
      placeholder="\u8BF7\u9009\u62E9\u8282\u70B9"
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(u,2))},renderOpts:{compile:function(){var s=o()(i()().mark(function r(){var a,d=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return s.apply(this,arguments)}return l}()}},"treeselect-demo-7":{component:u.memo(u.lazy(o()(i()().mark(function s(){var l,r,a,d,c;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(5302).then(e.bind(e,95302));case 6:return a=t.sent,d=a.default,c=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}];return r.createElement(d,{data:m,treeDefaultExpandedKeys:["1","1-1"]})},t.abrupt("return",{default:c});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"treeselect-demo-7",refAtomIds:["TreeSelect"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import TreeSelect from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '\u8282\u70B9 1',
      children: [
        {
          key: '1-1',
          title: '\u8282\u70B9 1-1',
          children: [
            {
              key: '1-1-1',
              title: '\u8282\u70B9 1-1-1',
            },
            {
              key: '1-1-2',
              title: '\u8282\u70B9 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '\u8282\u70B9 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '\u8282\u70B9 2',
      children: [
        {
          key: '2-1',
          title: '\u8282\u70B9 2-1',
        },
      ],
    },
  ];

  return (
    <TreeSelect
      data={treeData}
      treeDefaultExpandedKeys={['1', '1-1']}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(u,2))},renderOpts:{compile:function(){var s=o()(i()().mark(function r(){var a,d=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return s.apply(this,arguments)}return l}()}},"treeselect-demo-8":{component:u.memo(u.lazy(o()(i()().mark(function s(){var l,r,a,d,c;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(5302).then(e.bind(e,95302));case 6:return a=t.sent,d=a.default,c=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}];return r.createElement(d,{data:m,style:{width:"300px",border:"1px solid #1890ff",borderRadius:"8px"}})},t.abrupt("return",{default:c});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"treeselect-demo-8",refAtomIds:["TreeSelect"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import TreeSelect from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '\u8282\u70B9 1',
      children: [
        {
          key: '1-1',
          title: '\u8282\u70B9 1-1',
          children: [
            {
              key: '1-1-1',
              title: '\u8282\u70B9 1-1-1',
            },
            {
              key: '1-1-2',
              title: '\u8282\u70B9 1-1-2',
            },
          ],
        },
        {
          key: '1-2',
          title: '\u8282\u70B9 1-2',
        },
      ],
    },
    {
      key: '2',
      title: '\u8282\u70B9 2',
      children: [
        {
          key: '2-1',
          title: '\u8282\u70B9 2-1',
        },
      ],
    },
  ];

  return (
    <TreeSelect
      data={treeData}
      style={{
        width: '300px',
        border: '1px solid #1890ff',
        borderRadius: '8px',
      }}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(u,2))},renderOpts:{compile:function(){var s=o()(i()().mark(function r(){var a,d=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return s.apply(this,arguments)}return l}()}},"treeselect-demo-9":{component:u.memo(u.lazy(o()(i()().mark(function s(){var l,r,a,d,c;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(5302).then(e.bind(e,95302));case 6:return a=t.sent,d=a.default,c=function(){var m=[{key:"department1",title:"\u6280\u672F\u90E8",children:[{key:"team1",title:"\u524D\u7AEF\u56E2\u961F",children:[{key:"person1",title:"\u5F20\u4E09"},{key:"person2",title:"\u674E\u56DB"}]},{key:"team2",title:"\u540E\u7AEF\u56E2\u961F",children:[{key:"person3",title:"\u738B\u4E94"},{key:"person4",title:"\u8D75\u516D"}]}]},{key:"department2",title:"\u4EA7\u54C1\u90E8",children:[{key:"person5",title:"\u94B1\u4E03"},{key:"person6",title:"\u5B59\u516B"}]}];return r.createElement(d,{data:m,placeholder:"\u9009\u62E9\u4EBA\u5458"})},t.abrupt("return",{default:c});case 10:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"treeselect-demo-9",refAtomIds:["TreeSelect"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import TreeSelect from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: 'department1',
      title: '\u6280\u672F\u90E8',
      children: [
        {
          key: 'team1',
          title: '\u524D\u7AEF\u56E2\u961F',
          children: [
            {
              key: 'person1',
              title: '\u5F20\u4E09',
            },
            {
              key: 'person2',
              title: '\u674E\u56DB',
            },
          ],
        },
        {
          key: 'team2',
          title: '\u540E\u7AEF\u56E2\u961F',
          children: [
            {
              key: 'person3',
              title: '\u738B\u4E94',
            },
            {
              key: 'person4',
              title: '\u8D75\u516D',
            },
          ],
        },
      ],
    },
    {
      key: 'department2',
      title: '\u4EA7\u54C1\u90E8',
      children: [
        {
          key: 'person5',
          title: '\u94B1\u4E03',
        },
        {
          key: 'person6',
          title: '\u5B59\u516B',
        },
      ],
    },
  ];

  return (
    <TreeSelect
      data={treeData}
      placeholder="\u9009\u62E9\u4EBA\u5458"
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:p||(p=e.t(u,2))},renderOpts:{compile:function(){var s=o()(i()().mark(function r(){var a,d=arguments;return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return s.apply(this,arguments)}return l}()}}}},50302:function(k,h,e){e.r(h),e.d(h,{texts:function(){return p}});const p=[{value:"\u6811\u5F62\u9009\u62E9\u5668\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5728\u6811\u5F62\u7ED3\u6784\u4E2D\u9009\u62E9\u8282\u70B9\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u6811\u5F62\u9009\u62E9\u5668\u4F7F\u7528\u65B9\u5F0F\u3002",paraId:1,tocIndex:1},{value:"\u652F\u6301\u9009\u62E9\u591A\u4E2A\u8282\u70B9\u7684\u6811\u5F62\u9009\u62E9\u5668\u3002",paraId:2,tocIndex:2},{value:"\u652F\u6301\u641C\u7D22\u7684\u6811\u5F62\u9009\u62E9\u5668\u3002",paraId:3,tocIndex:3},{value:"\u8282\u70B9\u53EF\u52FE\u9009\u7684\u6811\u5F62\u9009\u62E9\u5668\u3002",paraId:4,tocIndex:4},{value:"\u901A\u8FC7\u72B6\u6001\u63A7\u5236\u6811\u5F62\u9009\u62E9\u5668\u7684\u503C\u3002",paraId:5,tocIndex:5},{value:"\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u7684\u6811\u5F62\u9009\u62E9\u5668\u3002",paraId:6,tocIndex:6},{value:"\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u5360\u4F4D\u7B26\u7684\u6811\u5F62\u9009\u62E9\u5668\u3002",paraId:7,tocIndex:7},{value:"\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u8282\u70B9\u7684\u6811\u5F62\u9009\u62E9\u5668\u3002",paraId:8,tocIndex:8},{value:"\u901A\u8FC7 className \u548C style \u5C5E\u6027\u81EA\u5B9A\u4E49\u6811\u5F62\u9009\u62E9\u5668\u6837\u5F0F\u3002",paraId:9,tocIndex:9},{value:"\u6811\u5F62\u9009\u62E9\u5668\u5C55\u793A\u590D\u6742\u6570\u636E\u7ED3\u6784\u3002",paraId:10,tocIndex:10},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u7C7B\u578B",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"\u8BF4\u660E",paraId:11,tocIndex:12},{value:"data",paraId:11,tocIndex:12},{value:"TreeNode[]",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u6811\u5F62\u6570\u636E",paraId:11,tocIndex:12},{value:"value",paraId:11,tocIndex:12},{value:"string | string[]",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u53D7\u63A7\u6A21\u5F0F\u4E0B\u7684\u503C",paraId:11,tocIndex:12},{value:"defaultValue",paraId:11,tocIndex:12},{value:"string | string[]",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u975E\u53D7\u63A7\u6A21\u5F0F\u4E0B\u7684\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"placeholder",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"'\u8BF7\u9009\u62E9'",paraId:11,tocIndex:12},{value:"\u5360\u4F4D\u6587\u672C",paraId:11,tocIndex:12},{value:"onChange",paraId:11,tocIndex:12},{value:"(value: string | string[]) => void",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u503C\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:11,tocIndex:12},{value:"multiple",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"\u662F\u5426\u652F\u6301\u591A\u9009",paraId:11,tocIndex:12},{value:"searchable",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"\u662F\u5426\u652F\u6301\u641C\u7D22",paraId:11,tocIndex:12},{value:"treeExpandedKeys",paraId:11,tocIndex:12},{value:"string[]",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u53D7\u63A7\u6A21\u5F0F\u4E0B\u5C55\u5F00\u7684\u8282\u70B9\u952E\u503C\u6570\u7EC4",paraId:11,tocIndex:12},{value:"treeDefaultExpandedKeys",paraId:11,tocIndex:12},{value:"string[]",paraId:11,tocIndex:12},{value:"[]",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u5C55\u5F00\u7684\u8282\u70B9\u952E\u503C\u6570\u7EC4",paraId:11,tocIndex:12},{value:"treeCheckable",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"\u8282\u70B9\u662F\u5426\u53EF\u52FE\u9009",paraId:11,tocIndex:12},{value:"className",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"''",paraId:11,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:11,tocIndex:12},{value:"style",paraId:11,tocIndex:12},{value:"React.CSSProperties",paraId:11,tocIndex:12},{value:"{}",paraId:11,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:11,tocIndex:12},{value:"\u5C5E\u6027",paraId:12,tocIndex:13},{value:"\u7C7B\u578B",paraId:12,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:13},{value:"\u8BF4\u660E",paraId:12,tocIndex:13},{value:"key",paraId:12,tocIndex:13},{value:"string",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"\u8282\u70B9\u552F\u4E00\u6807\u8BC6",paraId:12,tocIndex:13},{value:"title",paraId:12,tocIndex:13},{value:"React.ReactNode",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"\u8282\u70B9\u6807\u9898",paraId:12,tocIndex:13},{value:"children",paraId:12,tocIndex:13},{value:"TreeNode[]",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"\u5B50\u8282\u70B9",paraId:12,tocIndex:13},{value:"disabled",paraId:12,tocIndex:13},{value:"boolean",paraId:12,tocIndex:13},{value:"false",paraId:12,tocIndex:13},{value:"\u662F\u5426\u7981\u7528",paraId:12,tocIndex:13}]}}]);
