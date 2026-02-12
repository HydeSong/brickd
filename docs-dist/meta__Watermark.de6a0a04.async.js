"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[2913,849],{47554:function(y,m,n){var c;n.r(m),n.d(m,{demos:function(){return h}});var x=n(90228),s=n.n(x),g=n(87999),u=n.n(g),i=n(75271),f=n(10849),h={"watermark-demo-0":{component:i.memo(i.lazy(u()(s()().mark(function p(){var d,e,r,l,o;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return d=a.sent,e=d.default,a.next=6,n.e(6998).then(n.bind(n,26998));case 6:return r=a.sent,l=r.default,o=function(){return e.createElement(l,null,e.createElement("div",{style:{padding:"20px"}},e.createElement("h1",null,"\u9875\u9762\u5185\u5BB9"),e.createElement("p",null,"\u8FD9\u662F\u9875\u9762\u7684\u4E3B\u8981\u5185\u5BB9\uFF0C\u6C34\u5370\u4F1A\u663E\u793A\u5728\u5185\u5BB9\u4E0A\u65B9\u3002"),e.createElement("p",null,"\u6C34\u5370\u53EF\u4EE5\u9632\u6B62\u5185\u5BB9\u88AB\u672A\u7ECF\u6388\u6743\u7684\u590D\u5236\u6216\u4F7F\u7528\u3002")))},a.abrupt("return",{default:o});case 10:case"end":return a.stop()}},p)})))),asset:{type:"BLOCK",id:"watermark-demo-0",refAtomIds:["Watermark"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <Watermark>
      <div style={{ padding: '20px' }}>
        <h1>\u9875\u9762\u5185\u5BB9</h1>
        <p>\u8FD9\u662F\u9875\u9762\u7684\u4E3B\u8981\u5185\u5BB9\uFF0C\u6C34\u5370\u4F1A\u663E\u793A\u5728\u5185\u5BB9\u4E0A\u65B9\u3002</p>
        <p>\u6C34\u5370\u53EF\u4EE5\u9632\u6B62\u5185\u5BB9\u88AB\u672A\u7ECF\u6388\u6743\u7684\u590D\u5236\u6216\u4F7F\u7528\u3002</p>
      </div>
    </Watermark>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=n.t(i,2))},renderOpts:{compile:function(){var p=u()(s()().mark(function e(){var r,l=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3015).then(n.bind(n,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,l));case 3:case"end":return t.stop()}},e)}));function d(){return p.apply(this,arguments)}return d}()}},"watermark-demo-1":{component:i.memo(i.lazy(u()(s()().mark(function p(){var d,e,r,l,o,t,a;return s()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return d=v.sent,e=d.default,v.next=6,n.e(6998).then(n.bind(n,26998));case 6:return r=v.sent,l=r.default,v.next=10,Promise.resolve().then(n.bind(n,10849));case 10:return o=v.sent,t=o.default,a=function(){return e.createElement("div",null,e.createElement(l,{content:"\u81EA\u5B9A\u4E49\u6C34\u5370"},e.createElement("div",{style:{padding:"20px"}},e.createElement("h2",null,"\u81EA\u5B9A\u4E49\u6C34\u5370\u5185\u5BB9"),e.createElement("p",null,"\u6C34\u5370\u5185\u5BB9\u53EF\u4EE5\u662F\u4EFB\u610F\u6587\u672C\u3002"))),e.createElement("br",null),e.createElement(l,{content:e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(t,{name:"copyright",size:16,style:{marginRight:"4px"}}),e.createElement("span",null,"\u7248\u6743\u6240\u6709"))},e.createElement("div",{style:{padding:"20px"}},e.createElement("h2",null,"\u5E26\u56FE\u6807\u7684\u6C34\u5370"),e.createElement("p",null,"\u6C34\u5370\u5185\u5BB9\u53EF\u4EE5\u662F\u5305\u542B\u56FE\u6807\u7684\u590D\u6742\u5143\u7D20\u3002"))))},v.abrupt("return",{default:a});case 14:case"end":return v.stop()}},p)})))),asset:{type:"BLOCK",id:"watermark-demo-1",refAtomIds:["Watermark"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Watermark from './index';
import Icon from '../Icon';

const App: React.FC = () => {
  return (
    <div>
      <Watermark content="\u81EA\u5B9A\u4E49\u6C34\u5370">
        <div style={{ padding: '20px' }}>
          <h2>\u81EA\u5B9A\u4E49\u6C34\u5370\u5185\u5BB9</h2>
          <p>\u6C34\u5370\u5185\u5BB9\u53EF\u4EE5\u662F\u4EFB\u610F\u6587\u672C\u3002</p>
        </div>
      </Watermark>
      <br />
      <Watermark content={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="copyright" size={16} style={{ marginRight: '4px' }} />
          <span>\u7248\u6743\u6240\u6709</span>
        </div>
      }>
        <div style={{ padding: '20px' }}>
          <h2>\u5E26\u56FE\u6807\u7684\u6C34\u5370</h2>
          <p>\u6C34\u5370\u5185\u5BB9\u53EF\u4EE5\u662F\u5305\u542B\u56FE\u6807\u7684\u590D\u6742\u5143\u7D20\u3002</p>
        </div>
      </Watermark>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Icon.tsx":{type:"FILE",value:n(4487).Z}},entry:"index.tsx"},context:{"../Icon.tsx":f,react:c||(c=n.t(i,2)),"/Users/hyde/Documents/Workspace/brickd/src/Icon/index.tsx":f},renderOpts:{compile:function(){var p=u()(s()().mark(function e(){var r,l=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3015).then(n.bind(n,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,l));case 3:case"end":return t.stop()}},e)}));function d(){return p.apply(this,arguments)}return d}()}},"watermark-demo-2":{component:i.memo(i.lazy(u()(s()().mark(function p(){var d,e,r,l,o;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return d=a.sent,e=d.default,a.next=6,n.e(6998).then(n.bind(n,26998));case 6:return r=a.sent,l=r.default,o=function(){return e.createElement(l,{content:"\u81EA\u5B9A\u4E49\u6837\u5F0F",width:150,height:80,fontSize:16,fontWeight:600,color:"rgba(128, 128, 128, 0.2)"},e.createElement("div",{style:{padding:"20px"}},e.createElement("h2",null,"\u81EA\u5B9A\u4E49\u6837\u5F0F\u6C34\u5370"),e.createElement("p",null,"\u6C34\u5370\u7684\u5927\u5C0F\u3001\u5B57\u4F53\u3001\u989C\u8272\u7B49\u90FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u3002")))},a.abrupt("return",{default:o});case 10:case"end":return a.stop()}},p)})))),asset:{type:"BLOCK",id:"watermark-demo-2",refAtomIds:["Watermark"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <Watermark
      content="\u81EA\u5B9A\u4E49\u6837\u5F0F"
      width={150}
      height={80}
      fontSize={16}
      fontWeight={600}
      color="rgba(128, 128, 128, 0.2)"
    >
      <div style={{ padding: '20px' }}>
        <h2>\u81EA\u5B9A\u4E49\u6837\u5F0F\u6C34\u5370</h2>
        <p>\u6C34\u5370\u7684\u5927\u5C0F\u3001\u5B57\u4F53\u3001\u989C\u8272\u7B49\u90FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u3002</p>
      </div>
    </Watermark>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=n.t(i,2))},renderOpts:{compile:function(){var p=u()(s()().mark(function e(){var r,l=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3015).then(n.bind(n,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,l));case 3:case"end":return t.stop()}},e)}));function d(){return p.apply(this,arguments)}return d}()}},"watermark-demo-3":{component:i.memo(i.lazy(u()(s()().mark(function p(){var d,e,r,l,o;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return d=a.sent,e=d.default,a.next=6,n.e(6998).then(n.bind(n,26998));case 6:return r=a.sent,l=r.default,o=function(){return e.createElement("div",null,e.createElement(l,{content:"0\u5EA6\u65CB\u8F6C",rotate:0},e.createElement("div",{style:{padding:"20px"}},e.createElement("h2",null,"0\u5EA6\u65CB\u8F6C\u6C34\u5370"),e.createElement("p",null,"\u6C34\u5370\u65CB\u8F6C\u89D2\u5EA6\u4E3A0\u5EA6\uFF0C\u6C34\u5E73\u663E\u793A\u3002"))),e.createElement("br",null),e.createElement(l,{content:"45\u5EA6\u65CB\u8F6C",rotate:45},e.createElement("div",{style:{padding:"20px"}},e.createElement("h2",null,"45\u5EA6\u65CB\u8F6C\u6C34\u5370"),e.createElement("p",null,"\u6C34\u5370\u65CB\u8F6C\u89D2\u5EA6\u4E3A45\u5EA6\uFF0C\u5411\u53F3\u503E\u659C\u3002"))),e.createElement("br",null),e.createElement(l,{content:"-45\u5EA6\u65CB\u8F6C",rotate:-45},e.createElement("div",{style:{padding:"20px"}},e.createElement("h2",null,"-45\u5EA6\u65CB\u8F6C\u6C34\u5370"),e.createElement("p",null,"\u6C34\u5370\u65CB\u8F6C\u89D2\u5EA6\u4E3A-45\u5EA6\uFF0C\u5411\u5DE6\u503E\u659C\u3002"))))},a.abrupt("return",{default:o});case 10:case"end":return a.stop()}},p)})))),asset:{type:"BLOCK",id:"watermark-demo-3",refAtomIds:["Watermark"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <div>
      <Watermark content="0\u5EA6\u65CB\u8F6C" rotate={0}>
        <div style={{ padding: '20px' }}>
          <h2>0\u5EA6\u65CB\u8F6C\u6C34\u5370</h2>
          <p>\u6C34\u5370\u65CB\u8F6C\u89D2\u5EA6\u4E3A0\u5EA6\uFF0C\u6C34\u5E73\u663E\u793A\u3002</p>
        </div>
      </Watermark>
      <br />
      <Watermark content="45\u5EA6\u65CB\u8F6C" rotate={45}>
        <div style={{ padding: '20px' }}>
          <h2>45\u5EA6\u65CB\u8F6C\u6C34\u5370</h2>
          <p>\u6C34\u5370\u65CB\u8F6C\u89D2\u5EA6\u4E3A45\u5EA6\uFF0C\u5411\u53F3\u503E\u659C\u3002</p>
        </div>
      </Watermark>
      <br />
      <Watermark content="-45\u5EA6\u65CB\u8F6C" rotate={-45}>
        <div style={{ padding: '20px' }}>
          <h2>-45\u5EA6\u65CB\u8F6C\u6C34\u5370</h2>
          <p>\u6C34\u5370\u65CB\u8F6C\u89D2\u5EA6\u4E3A-45\u5EA6\uFF0C\u5411\u5DE6\u503E\u659C\u3002</p>
        </div>
      </Watermark>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=n.t(i,2))},renderOpts:{compile:function(){var p=u()(s()().mark(function e(){var r,l=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3015).then(n.bind(n,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,l));case 3:case"end":return t.stop()}},e)}));function d(){return p.apply(this,arguments)}return d}()}},"watermark-demo-4":{component:i.memo(i.lazy(u()(s()().mark(function p(){var d,e,r,l,o;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return d=a.sent,e=d.default,a.next=6,n.e(6998).then(n.bind(n,26998));case 6:return r=a.sent,l=r.default,o=function(){return e.createElement("div",null,e.createElement(l,{content:"\u9AD8\u900F\u660E\u5EA6",opacity:.1},e.createElement("div",{style:{padding:"20px"}},e.createElement("h2",null,"\u9AD8\u900F\u660E\u5EA6\u6C34\u5370"),e.createElement("p",null,"\u6C34\u5370\u900F\u660E\u5EA6\u4E3A0.1\uFF0C\u51E0\u4E4E\u4E0D\u53EF\u89C1\u3002"))),e.createElement("br",null),e.createElement(l,{content:"\u4E2D\u7B49\u900F\u660E\u5EA6",opacity:.3},e.createElement("div",{style:{padding:"20px"}},e.createElement("h2",null,"\u4E2D\u7B49\u900F\u660E\u5EA6\u6C34\u5370"),e.createElement("p",null,"\u6C34\u5370\u900F\u660E\u5EA6\u4E3A0.3\uFF0C\u9690\u7EA6\u53EF\u89C1\u3002"))),e.createElement("br",null),e.createElement(l,{content:"\u4F4E\u900F\u660E\u5EA6",opacity:.6},e.createElement("div",{style:{padding:"20px"}},e.createElement("h2",null,"\u4F4E\u900F\u660E\u5EA6\u6C34\u5370"),e.createElement("p",null,"\u6C34\u5370\u900F\u660E\u5EA6\u4E3A0.6\uFF0C\u6E05\u6670\u53EF\u89C1\u3002"))))},a.abrupt("return",{default:o});case 10:case"end":return a.stop()}},p)})))),asset:{type:"BLOCK",id:"watermark-demo-4",refAtomIds:["Watermark"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <div>
      <Watermark content="\u9AD8\u900F\u660E\u5EA6" opacity={0.1}>
        <div style={{ padding: '20px' }}>
          <h2>\u9AD8\u900F\u660E\u5EA6\u6C34\u5370</h2>
          <p>\u6C34\u5370\u900F\u660E\u5EA6\u4E3A0.1\uFF0C\u51E0\u4E4E\u4E0D\u53EF\u89C1\u3002</p>
        </div>
      </Watermark>
      <br />
      <Watermark content="\u4E2D\u7B49\u900F\u660E\u5EA6" opacity={0.3}>
        <div style={{ padding: '20px' }}>
          <h2>\u4E2D\u7B49\u900F\u660E\u5EA6\u6C34\u5370</h2>
          <p>\u6C34\u5370\u900F\u660E\u5EA6\u4E3A0.3\uFF0C\u9690\u7EA6\u53EF\u89C1\u3002</p>
        </div>
      </Watermark>
      <br />
      <Watermark content="\u4F4E\u900F\u660E\u5EA6" opacity={0.6}>
        <div style={{ padding: '20px' }}>
          <h2>\u4F4E\u900F\u660E\u5EA6\u6C34\u5370</h2>
          <p>\u6C34\u5370\u900F\u660E\u5EA6\u4E3A0.6\uFF0C\u6E05\u6670\u53EF\u89C1\u3002</p>
        </div>
      </Watermark>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=n.t(i,2))},renderOpts:{compile:function(){var p=u()(s()().mark(function e(){var r,l=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3015).then(n.bind(n,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,l));case 3:case"end":return t.stop()}},e)}));function d(){return p.apply(this,arguments)}return d}()}},"watermark-demo-5":{component:i.memo(i.lazy(u()(s()().mark(function p(){var d,e,r,l,o;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return d=a.sent,e=d.default,a.next=6,n.e(6998).then(n.bind(n,26998));case 6:return r=a.sent,l=r.default,o=function(){return e.createElement(l,{content:"\u5BC6\u96C6\u6C34\u5370",gap:[50,50]},e.createElement("div",{style:{padding:"20px"}},e.createElement("h2",null,"\u5BC6\u96C6\u6C34\u5370"),e.createElement("p",null,"\u6C34\u5370\u95F4\u8DDD\u4E3A50x50\u50CF\u7D20\uFF0C\u5206\u5E03\u5BC6\u96C6\u3002")))},a.abrupt("return",{default:o});case 10:case"end":return a.stop()}},p)})))),asset:{type:"BLOCK",id:"watermark-demo-5",refAtomIds:["Watermark"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <Watermark
      content="\u5BC6\u96C6\u6C34\u5370"
      gap={[50, 50]}
    >
      <div style={{ padding: '20px' }}>
        <h2>\u5BC6\u96C6\u6C34\u5370</h2>
        <p>\u6C34\u5370\u95F4\u8DDD\u4E3A50x50\u50CF\u7D20\uFF0C\u5206\u5E03\u5BC6\u96C6\u3002</p>
      </div>
    </Watermark>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=n.t(i,2))},renderOpts:{compile:function(){var p=u()(s()().mark(function e(){var r,l=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3015).then(n.bind(n,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,l));case 3:case"end":return t.stop()}},e)}));function d(){return p.apply(this,arguments)}return d}()}},"watermark-demo-6":{component:i.memo(i.lazy(u()(s()().mark(function p(){var d,e,r,l,o;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return d=a.sent,e=d.default,a.next=6,n.e(6998).then(n.bind(n,26998));case 6:return r=a.sent,l=r.default,o=function(){return e.createElement(l,{content:"\u5E95\u5C42\u6C34\u5370",zIndex:1},e.createElement("div",{style:{padding:"20px",position:"relative"}},e.createElement("h2",null,"\u5E95\u5C42\u6C34\u5370"),e.createElement("p",null,"\u6C34\u5370\u5C42\u7EA7\u4E3A1\uFF0C\u4F4D\u4E8E\u5185\u5BB9\u4E0B\u65B9\u3002"),e.createElement("div",{style:{position:"absolute",top:"50px",right:"20px",background:"white",padding:"10px",border:"1px solid #ddd",zIndex:2}},"\u4E0A\u5C42\u5185\u5BB9\uFF0C\u4F1A\u8986\u76D6\u6C34\u5370")))},a.abrupt("return",{default:o});case 10:case"end":return a.stop()}},p)})))),asset:{type:"BLOCK",id:"watermark-demo-6",refAtomIds:["Watermark"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <Watermark
      content="\u5E95\u5C42\u6C34\u5370"
      zIndex={1}
    >
      <div style={{ padding: '20px', position: 'relative' }}>
        <h2>\u5E95\u5C42\u6C34\u5370</h2>
        <p>\u6C34\u5370\u5C42\u7EA7\u4E3A1\uFF0C\u4F4D\u4E8E\u5185\u5BB9\u4E0B\u65B9\u3002</p>
        <div style={{ 
          position: 'absolute', 
          top: '50px', 
          right: '20px', 
          background: 'white', 
          padding: '10px', 
          border: '1px solid #ddd',
          zIndex: 2
        }}>
          \u4E0A\u5C42\u5185\u5BB9\uFF0C\u4F1A\u8986\u76D6\u6C34\u5370
        </div>
      </div>
    </Watermark>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=n.t(i,2))},renderOpts:{compile:function(){var p=u()(s()().mark(function e(){var r,l=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3015).then(n.bind(n,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,l));case 3:case"end":return t.stop()}},e)}));function d(){return p.apply(this,arguments)}return d}()}},"watermark-demo-7":{component:i.memo(i.lazy(u()(s()().mark(function p(){var d,e,r,l,o;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return d=a.sent,e=d.default,a.next=6,n.e(6998).then(n.bind(n,26998));case 6:return r=a.sent,l=r.default,o=function(){return e.createElement(l,{content:"\u7EFC\u5408\u793A\u4F8B",width:140,height:70,rotate:-30,fontSize:16,fontWeight:500,color:"rgba(100, 100, 100, 0.2)",opacity:.8,gap:[120,120]},e.createElement("div",{style:{padding:"20px"}},e.createElement("h1",null,"\u7EFC\u5408\u793A\u4F8B"),e.createElement("p",null,"\u8FD9\u4E2A\u793A\u4F8B\u5C55\u793A\u4E86\u6C34\u5370\u7684\u5404\u79CD\u5C5E\u6027\u7EC4\u5408\u4F7F\u7528\u3002"),e.createElement("p",null,"\u6C34\u5370\u8BBE\u7F6E\u4E86\u81EA\u5B9A\u4E49\u7684\u5927\u5C0F\u3001\u65CB\u8F6C\u89D2\u5EA6\u3001\u5B57\u4F53\u3001\u989C\u8272\u3001\u900F\u660E\u5EA6\u548C\u95F4\u8DDD\u3002"),e.createElement("p",null,"\u901A\u8FC7\u8C03\u6574\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u53EF\u4EE5\u521B\u5EFA\u9002\u5408\u4E0D\u540C\u573A\u666F\u7684\u6C34\u5370\u6548\u679C\u3002")))},a.abrupt("return",{default:o});case 10:case"end":return a.stop()}},p)})))),asset:{type:"BLOCK",id:"watermark-demo-7",refAtomIds:["Watermark"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Watermark from './index';

const App: React.FC = () => {
  return (
    <Watermark
      content="\u7EFC\u5408\u793A\u4F8B"
      width={140}
      height={70}
      rotate={-30}
      fontSize={16}
      fontWeight={500}
      color="rgba(100, 100, 100, 0.2)"
      opacity={0.8}
      gap={[120, 120]}
    >
      <div style={{ padding: '20px' }}>
        <h1>\u7EFC\u5408\u793A\u4F8B</h1>
        <p>\u8FD9\u4E2A\u793A\u4F8B\u5C55\u793A\u4E86\u6C34\u5370\u7684\u5404\u79CD\u5C5E\u6027\u7EC4\u5408\u4F7F\u7528\u3002</p>
        <p>\u6C34\u5370\u8BBE\u7F6E\u4E86\u81EA\u5B9A\u4E49\u7684\u5927\u5C0F\u3001\u65CB\u8F6C\u89D2\u5EA6\u3001\u5B57\u4F53\u3001\u989C\u8272\u3001\u900F\u660E\u5EA6\u548C\u95F4\u8DDD\u3002</p>
        <p>\u901A\u8FC7\u8C03\u6574\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u53EF\u4EE5\u521B\u5EFA\u9002\u5408\u4E0D\u540C\u573A\u666F\u7684\u6C34\u5370\u6548\u679C\u3002</p>
      </div>
    </Watermark>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=n.t(i,2))},renderOpts:{compile:function(){var p=u()(s()().mark(function e(){var r,l=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3015).then(n.bind(n,33015));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,l));case 3:case"end":return t.stop()}},e)}));function d(){return p.apply(this,arguments)}return d}()}}}},10849:function(y,m,n){n.r(m),n.d(m,{default:function(){return g}});var c={icon:"Vp2lCjtRG4DLDFDyVAez","icon-home":"ulVgW4QY8wUom5HXWOuz","icon-search":"sAK0iM6ix40xZxS_gR3U","icon-user":"WUYhPdCcKFAxSpKQlO3t","icon-settings":"Ztk4ZKfgYg4J2Nmgcsjn","icon-arrow-right":"cxV9ttCA6QQkztjDqSDh","icon-arrow-left":"p5tsuFDYnk8_NAJ2QcNA","icon-arrow-up":"RL0LhMbJK8b1M0jwLYAY","icon-arrow-down":"DHSDUSNKuAoh1JeJkV0v","icon-plus":"hUkP6eCM8EMNXnxmHzG5","icon-minus":"Gf1qVZt2htU07CuTLi1X","icon-close":"shhoQ5dywb0V4tCsLHMN","icon-check":"vaoqDQYPDA0e9UdawIs_","icon-warning":"lMoCQOuGA0cxWF77Hi3f","icon-error":"Jp3AUMQ0eY_UXDunuEpk","icon-info":"MAuILQQxsPI3jjujx1cX",spin:"CiXqHgtYVPkCVvohw7xq"},x=n(52676),s=function(i){var f=i.type,h=i.size,p=h===void 0?"middle":h,d=i.color,e=i.rotate,r=i.spin,l=i.className,o=function(){if(typeof p=="number")return p;switch(p){case"small":return 16;case"large":return 24;case"middle":default:return 20}},t=o();return(0,x.jsx)("i",{className:`
        `.concat(c.icon,`
        `).concat(c[f]||"",`
        `).concat(r?c.spin:"",`
        `).concat(l||"",`
      `),style:{fontSize:"".concat(t,"px"),color:d,transform:e?"rotate(".concat(e,"deg)"):void 0}})},g=s},99605:function(y,m,n){n.r(m),n.d(m,{texts:function(){return c}});const c=[{value:"\u6C34\u5370\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5728\u9875\u9762\u6216\u5BB9\u5668\u4E0A\u6DFB\u52A0\u6C34\u5370\u6548\u679C\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u6C34\u5370\u4F7F\u7528\u65B9\u5F0F\u3002",paraId:1,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u6C34\u5370\u7684\u5185\u5BB9\u3002",paraId:2,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u6C34\u5370\u7684\u6837\u5F0F\u3002",paraId:3,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u6C34\u5370\u7684\u65CB\u8F6C\u89D2\u5EA6\u3002",paraId:4,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u6C34\u5370\u7684\u900F\u660E\u5EA6\u3002",paraId:5,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u6C34\u5370\u7684\u95F4\u8DDD\u3002",paraId:6,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u6C34\u5370\u7684\u5C42\u7EA7\u3002",paraId:7,tocIndex:7},{value:"\u6C34\u5370\u7684\u7EC4\u5408\u4F7F\u7528\u3002",paraId:8,tocIndex:8},{value:"\u5C5E\u6027",paraId:9,tocIndex:10},{value:"\u7C7B\u578B",paraId:9,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:10},{value:"\u8BF4\u660E",paraId:9,tocIndex:10},{value:"content",paraId:9,tocIndex:10},{value:"React.ReactNode",paraId:9,tocIndex:10},{value:"'Watermark'",paraId:9,tocIndex:10},{value:"\u6C34\u5370\u5185\u5BB9",paraId:9,tocIndex:10},{value:"width",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:"120",paraId:9,tocIndex:10},{value:"\u6C34\u5370\u5BBD\u5EA6",paraId:9,tocIndex:10},{value:"height",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:"64",paraId:9,tocIndex:10},{value:"\u6C34\u5370\u9AD8\u5EA6",paraId:9,tocIndex:10},{value:"rotate",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:"-22",paraId:9,tocIndex:10},{value:"\u6C34\u5370\u65CB\u8F6C\u89D2\u5EA6",paraId:9,tocIndex:10},{value:"fontSize",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:"14",paraId:9,tocIndex:10},{value:"\u6C34\u5370\u5B57\u4F53\u5927\u5C0F",paraId:9,tocIndex:10},{value:"fontWeight",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:"400",paraId:9,tocIndex:10},{value:"\u6C34\u5370\u5B57\u4F53\u7C97\u7EC6",paraId:9,tocIndex:10},{value:"color",paraId:9,tocIndex:10},{value:"string",paraId:9,tocIndex:10},{value:"'rgba(0, 0, 0, 0.15)'",paraId:9,tocIndex:10},{value:"\u6C34\u5370\u989C\u8272",paraId:9,tocIndex:10},{value:"opacity",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:"1",paraId:9,tocIndex:10},{value:"\u6C34\u5370\u900F\u660E\u5EA6",paraId:9,tocIndex:10},{value:"gap",paraId:9,tocIndex:10},{value:"[number, number]",paraId:9,tocIndex:10},{value:"[100, 100]",paraId:9,tocIndex:10},{value:"\u6C34\u5370\u95F4\u8DDD",paraId:9,tocIndex:10},{value:"zIndex",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:"9999",paraId:9,tocIndex:10},{value:"\u6C34\u5370\u5C42\u7EA7",paraId:9,tocIndex:10},{value:"className",paraId:9,tocIndex:10},{value:"string",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:9,tocIndex:10},{value:"style",paraId:9,tocIndex:10},{value:"React.CSSProperties",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:9,tocIndex:10},{value:"children",paraId:9,tocIndex:10},{value:"React.ReactNode",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"\u6C34\u5370\u8986\u76D6\u7684\u5185\u5BB9",paraId:9,tocIndex:10}]},4487:function(y,m){m.Z=`
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
