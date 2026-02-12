"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[923],{42095:function(T,I,e){var c;e.r(I),e.d(I,{demos:function(){return S}});var D=e(48305),g=e.n(D),$=e(90228),s=e.n($),R=e(87999),u=e.n(R),p=e(75271),S={"tree-demo-0":{component:p.memo(p.lazy(u()(s()().mark(function i(){var l,r,a,d,o;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(4413).then(e.bind(e,44413));case 6:return a=t.sent,d=a.default,o=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}],x=function(v,f){console.log("Selected Keys:",v),console.log("Selected Node:",f.node),console.log("Selected:",f.selected)},k=function(v){console.log("Expanded Keys:",v)};return r.createElement(d,{data:m,onSelect:x,onExpand:k})},t.abrupt("return",{default:o});case 10:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"tree-demo-0",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Tree from './index';

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

  const handleSelect = (selectedKeys: string[], event: { node: any; selected: boolean }) => {
    console.log('Selected Keys:', selectedKeys);
    console.log('Selected Node:', event.node);
    console.log('Selected:', event.selected);
  };

  const handleExpand = (expandedKeys: string[]) => {
    console.log('Expanded Keys:', expandedKeys);
  };

  return (
    <Tree
      data={treeData}
      onSelect={handleSelect}
      onExpand={handleExpand}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var i=u()(s()().mark(function r(){var a,d=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return i.apply(this,arguments)}return l}()}},"tree-demo-1":{component:p.memo(p.lazy(u()(s()().mark(function i(){var l,r,a,d,o;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(4413).then(e.bind(e,44413));case 6:return a=t.sent,d=a.default,o=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}];return r.createElement(d,{data:m,defaultExpandedKeys:["1","1-1"],defaultSelectedKeys:["1-1-1","2-1"]})},t.abrupt("return",{default:o});case 10:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"tree-demo-1",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Tree from './index';

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
    <Tree
      data={treeData}
      defaultExpandedKeys={['1', '1-1']}
      defaultSelectedKeys={['1-1-1', '2-1']}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var i=u()(s()().mark(function r(){var a,d=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return i.apply(this,arguments)}return l}()}},"tree-demo-2":{component:p.memo(p.lazy(u()(s()().mark(function i(){var l,r,a,d,o,n;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=y.sent,r=l.default,a=l.useState,y.next=7,e.e(4413).then(e.bind(e,44413));case 7:return d=y.sent,o=d.default,n=function(){var x=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}],k=a(["1"]),h=g()(k,2),v=h[0],f=h[1],P=a(["1-1"]),K=g()(P,2),A=K[0],O=K[1],C=function(E){f(E)},L=function(E,B){O(E)};return r.createElement("div",null,r.createElement(o,{data:x,expandedKeys:v,selectedKeys:A,onExpand:C,onSelect:L}),r.createElement("div",{style:{marginTop:"16px"}},r.createElement("p",null,"\u5C55\u5F00\u7684\u8282\u70B9: ",v.join(", ")),r.createElement("p",null,"\u9009\u4E2D\u7684\u8282\u70B9: ",A.join(", "))))},y.abrupt("return",{default:n});case 11:case"end":return y.stop()}},i)})))),asset:{type:"BLOCK",id:"tree-demo-2",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Tree from './index';

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

  const [expandedKeys, setExpandedKeys] = useState<string[]>(['1']);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['1-1']);

  const handleExpand = (keys: string[]) => {
    setExpandedKeys(keys);
  };

  const handleSelect = (keys: string[], event: { node: any; selected: boolean }) => {
    setSelectedKeys(keys);
  };

  return (
    <div>
      <Tree
        data={treeData}
        expandedKeys={expandedKeys}
        selectedKeys={selectedKeys}
        onExpand={handleExpand}
        onSelect={handleSelect}
      />
      <div style={{ marginTop: '16px' }}>
        <p>\u5C55\u5F00\u7684\u8282\u70B9: {expandedKeys.join(', ')}</p>
        <p>\u9009\u4E2D\u7684\u8282\u70B9: {selectedKeys.join(', ')}</p>
      </div>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var i=u()(s()().mark(function r(){var a,d=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return i.apply(this,arguments)}return l}()}},"tree-demo-3":{component:p.memo(p.lazy(u()(s()().mark(function i(){var l,r,a,d,o;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(4413).then(e.bind(e,44413));case 6:return a=t.sent,d=a.default,o=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}];return r.createElement(d,{data:m,showLine:!0})},t.abrupt("return",{default:o});case 10:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"tree-demo-3",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Tree from './index';

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
    <Tree
      data={treeData}
      showLine
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var i=u()(s()().mark(function r(){var a,d=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return i.apply(this,arguments)}return l}()}},"tree-demo-4":{component:p.memo(p.lazy(u()(s()().mark(function i(){var l,r,a,d,o;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(4413).then(e.bind(e,44413));case 6:return a=t.sent,d=a.default,o=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}];return r.createElement(d,{data:m,checkable:!0})},t.abrupt("return",{default:o});case 10:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"tree-demo-4",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Tree from './index';

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
    <Tree
      data={treeData}
      checkable
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var i=u()(s()().mark(function r(){var a,d=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return i.apply(this,arguments)}return l}()}},"tree-demo-5":{component:p.memo(p.lazy(u()(s()().mark(function i(){var l,r,a,d,o;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(4413).then(e.bind(e,44413));case 6:return a=t.sent,d=a.default,o=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1 (\u7981\u7528)",disabled:!0,children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2 (\u7981\u7528)",disabled:!0,children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}];return r.createElement(d,{data:m})},t.abrupt("return",{default:o});case 10:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"tree-demo-5",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Tree from './index';

const App: React.FC = () => {
  const treeData = [
    {
      key: '1',
      title: '\u8282\u70B9 1',
      children: [
        {
          key: '1-1',
          title: '\u8282\u70B9 1-1 (\u7981\u7528)',
          disabled: true,
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
      title: '\u8282\u70B9 2 (\u7981\u7528)',
      disabled: true,
      children: [
        {
          key: '2-1',
          title: '\u8282\u70B9 2-1',
        },
      ],
    },
  ];

  return (
    <Tree
      data={treeData}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var i=u()(s()().mark(function r(){var a,d=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return i.apply(this,arguments)}return l}()}},"tree-demo-6":{component:p.memo(p.lazy(u()(s()().mark(function i(){var l,r,a,d,o;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(4413).then(e.bind(e,44413));case 6:return a=t.sent,d=a.default,o=function(){var m=[{key:"1",title:"\u8282\u70B9 1",children:[{key:"1-1",title:"\u8282\u70B9 1-1",children:[{key:"1-1-1",title:"\u8282\u70B9 1-1-1"},{key:"1-1-2",title:"\u8282\u70B9 1-1-2"}]},{key:"1-2",title:"\u8282\u70B9 1-2"}]},{key:"2",title:"\u8282\u70B9 2",children:[{key:"2-1",title:"\u8282\u70B9 2-1"}]}];return r.createElement(d,{data:m,style:{border:"1px solid #e8e8e8",borderRadius:"8px",padding:"8px",width:"300px",backgroundColor:"#f9f9f9"}})},t.abrupt("return",{default:o});case 10:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"tree-demo-6",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Tree from './index';

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
    <Tree
      data={treeData}
      style={{
        border: '1px solid #e8e8e8',
        borderRadius: '8px',
        padding: '8px',
        width: '300px',
        backgroundColor: '#f9f9f9',
      }}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var i=u()(s()().mark(function r(){var a,d=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return i.apply(this,arguments)}return l}()}},"tree-demo-7":{component:p.memo(p.lazy(u()(s()().mark(function i(){var l,r,a,d,o;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=t.sent,r=l.default,t.next=6,e.e(4413).then(e.bind(e,44413));case 6:return a=t.sent,d=a.default,o=function(){var m=[{key:"department1",title:"\u6280\u672F\u90E8",children:[{key:"team1",title:"\u524D\u7AEF\u56E2\u961F",children:[{key:"person1",title:"\u5F20\u4E09"},{key:"person2",title:"\u674E\u56DB"}]},{key:"team2",title:"\u540E\u7AEF\u56E2\u961F",children:[{key:"person3",title:"\u738B\u4E94"},{key:"person4",title:"\u8D75\u516D"}]}]},{key:"department2",title:"\u4EA7\u54C1\u90E8",children:[{key:"person5",title:"\u94B1\u4E03"},{key:"person6",title:"\u5B59\u516B"}]}];return r.createElement(d,{data:m,showLine:!0})},t.abrupt("return",{default:o});case 10:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"tree-demo-7",refAtomIds:["Tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Tree from './index';

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
    <Tree
      data={treeData}
      showLine
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(p,2))},renderOpts:{compile:function(){var i=u()(s()().mark(function r(){var a,d=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,d));case 3:case"end":return n.stop()}},r)}));function l(){return i.apply(this,arguments)}return l}()}}}},63694:function(T,I,e){e.r(I),e.d(I,{texts:function(){return c}});const c=[{value:"\u6811\u5F62\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u548C\u64CD\u4F5C\u6811\u5F62\u7ED3\u6784\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u6811\u5F62\u7EC4\u4EF6\u4F7F\u7528\u65B9\u5F0F\u3002",paraId:1,tocIndex:1},{value:"\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00\u548C\u9009\u4E2D\u7684\u8282\u70B9\u3002",paraId:2,tocIndex:2},{value:"\u901A\u8FC7\u72B6\u6001\u63A7\u5236\u5C55\u5F00\u548C\u9009\u4E2D\u7684\u8282\u70B9\u3002",paraId:3,tocIndex:3},{value:"\u663E\u793A\u8282\u70B9\u4E4B\u95F4\u7684\u8FDE\u63A5\u7EBF\u3002",paraId:4,tocIndex:4},{value:"\u8282\u70B9\u53EF\u52FE\u9009\u7684\u6811\u5F62\u7EC4\u4EF6\u3002",paraId:5,tocIndex:5},{value:"\u90E8\u5206\u8282\u70B9\u7981\u7528\u7684\u6811\u5F62\u7EC4\u4EF6\u3002",paraId:6,tocIndex:6},{value:"\u901A\u8FC7 className \u548C style \u5C5E\u6027\u81EA\u5B9A\u4E49\u6811\u5F62\u7EC4\u4EF6\u6837\u5F0F\u3002",paraId:7,tocIndex:7},{value:"\u6811\u5F62\u7EC4\u4EF6\u5C55\u793A\u590D\u6742\u6570\u636E\u7ED3\u6784\u3002",paraId:8,tocIndex:8},{value:"\u5C5E\u6027",paraId:9,tocIndex:10},{value:"\u7C7B\u578B",paraId:9,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:10},{value:"\u8BF4\u660E",paraId:9,tocIndex:10},{value:"data",paraId:9,tocIndex:10},{value:"TreeNode[]",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"\u6811\u5F62\u6570\u636E",paraId:9,tocIndex:10},{value:"defaultExpandedKeys",paraId:9,tocIndex:10},{value:"string[]",paraId:9,tocIndex:10},{value:"[]",paraId:9,tocIndex:10},{value:"\u9ED8\u8BA4\u5C55\u5F00\u7684\u8282\u70B9\u952E\u503C\u6570\u7EC4",paraId:9,tocIndex:10},{value:"expandedKeys",paraId:9,tocIndex:10},{value:"string[]",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"\u53D7\u63A7\u6A21\u5F0F\u4E0B\u5C55\u5F00\u7684\u8282\u70B9\u952E\u503C\u6570\u7EC4",paraId:9,tocIndex:10},{value:"defaultSelectedKeys",paraId:9,tocIndex:10},{value:"string[]",paraId:9,tocIndex:10},{value:"[]",paraId:9,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u8282\u70B9\u952E\u503C\u6570\u7EC4",paraId:9,tocIndex:10},{value:"selectedKeys",paraId:9,tocIndex:10},{value:"string[]",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"\u53D7\u63A7\u6A21\u5F0F\u4E0B\u9009\u4E2D\u7684\u8282\u70B9\u952E\u503C\u6570\u7EC4",paraId:9,tocIndex:10},{value:"onExpand",paraId:9,tocIndex:10},{value:"(expandedKeys: string[]) => void",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"\u5C55\u5F00/\u6536\u8D77\u8282\u70B9\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:9,tocIndex:10},{value:"onSelect",paraId:9,tocIndex:10},{value:"(selectedKeys: string[], event: { node: TreeNode; selected: boolean }) => void",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"\u9009\u62E9\u8282\u70B9\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:9,tocIndex:10},{value:"showLine",paraId:9,tocIndex:10},{value:"boolean",paraId:9,tocIndex:10},{value:"false",paraId:9,tocIndex:10},{value:"\u662F\u5426\u663E\u793A\u8282\u70B9\u95F4\u7684\u8FDE\u63A5\u7EBF",paraId:9,tocIndex:10},{value:"checkable",paraId:9,tocIndex:10},{value:"boolean",paraId:9,tocIndex:10},{value:"false",paraId:9,tocIndex:10},{value:"\u662F\u5426\u53EF\u52FE\u9009",paraId:9,tocIndex:10},{value:"className",paraId:9,tocIndex:10},{value:"string",paraId:9,tocIndex:10},{value:"''",paraId:9,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:9,tocIndex:10},{value:"style",paraId:9,tocIndex:10},{value:"React.CSSProperties",paraId:9,tocIndex:10},{value:"{}",paraId:9,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:11},{value:"\u7C7B\u578B",paraId:10,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:11},{value:"\u8BF4\u660E",paraId:10,tocIndex:11},{value:"key",paraId:10,tocIndex:11},{value:"string",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"\u8282\u70B9\u552F\u4E00\u6807\u8BC6",paraId:10,tocIndex:11},{value:"title",paraId:10,tocIndex:11},{value:"React.ReactNode",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"\u8282\u70B9\u6807\u9898",paraId:10,tocIndex:11},{value:"children",paraId:10,tocIndex:11},{value:"TreeNode[]",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"\u5B50\u8282\u70B9",paraId:10,tocIndex:11},{value:"disabled",paraId:10,tocIndex:11},{value:"boolean",paraId:10,tocIndex:11},{value:"false",paraId:10,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:10,tocIndex:11}]}}]);
