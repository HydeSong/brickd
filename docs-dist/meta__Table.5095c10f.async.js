"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[7151],{84446:function(f,v,n){var m;n.r(v),n.d(v,{demos:function(){return b}});var x=n(90228),u=n.n(x),g=n(87999),p=n.n(g),o=n(75271),I=n(73440),b={"table-demo-0":{component:o.memo(o.lazy(p()(u()().mark(function i(){var l,t,r,d,s,e;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=a.sent,t=l.default,a.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return r=a.sent,d=r.Table,s=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u6027\u522B",dataIndex:"gender",key:"gender"},{title:"\u57CE\u5E02",dataIndex:"city",key:"city"}],e=[{key:"1",name:"\u5F20\u4E09",age:18,gender:"\u7537",city:"\u5317\u4EAC"},{key:"2",name:"\u674E\u56DB",age:20,gender:"\u5973",city:"\u4E0A\u6D77"},{key:"3",name:"\u738B\u4E94",age:22,gender:"\u7537",city:"\u5E7F\u5DDE"}],a.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(d,{columns:s,dataSource:e}))}});case 11:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"table-demo-0",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '\u6027\u522B',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: '\u57CE\u5E02',
    dataIndex: 'city',
    key: 'city',
  },
];

const data = [
  {
    key: '1',
    name: '\u5F20\u4E09',
    age: 18,
    gender: '\u7537',
    city: '\u5317\u4EAC',
  },
  {
    key: '2',
    name: '\u674E\u56DB',
    age: 20,
    gender: '\u5973',
    city: '\u4E0A\u6D77',
  },
  {
    key: '3',
    name: '\u738B\u4E94',
    age: 22,
    gender: '\u7537',
    city: '\u5E7F\u5DDE',
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:m||(m=n.t(o,2)),brickd:I},renderOpts:{compile:function(){var i=p()(u()().mark(function t(){var r,d=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},t)}));function l(){return i.apply(this,arguments)}return l}()}},"table-demo-1":{component:o.memo(o.lazy(p()(u()().mark(function i(){var l,t,r,d,s,e;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=a.sent,t=l.default,a.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return r=a.sent,d=r.Table,s=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u57CE\u5E02",dataIndex:"city",key:"city"}],e=[{key:"1",name:"\u5F20\u4E09",age:18,city:"\u5317\u4EAC"},{key:"2",name:"\u674E\u56DB",age:20,city:"\u4E0A\u6D77"}],a.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(d,{columns:s,dataSource:e,bordered:!0}))}});case 11:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"table-demo-1",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '\u57CE\u5E02',
    dataIndex: 'city',
    key: 'city',
  },
];

const data = [
  {
    key: '1',
    name: '\u5F20\u4E09',
    age: 18,
    city: '\u5317\u4EAC',
  },
  {
    key: '2',
    name: '\u674E\u56DB',
    age: 20,
    city: '\u4E0A\u6D77',
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} bordered />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:m||(m=n.t(o,2)),brickd:I},renderOpts:{compile:function(){var i=p()(u()().mark(function t(){var r,d=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},t)}));function l(){return i.apply(this,arguments)}return l}()}},"table-demo-2":{component:o.memo(o.lazy(p()(u()().mark(function i(){var l,t,r,d,s,e;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=a.sent,t=l.default,a.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return r=a.sent,d=r.Table,s=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u57CE\u5E02",dataIndex:"city",key:"city"}],e=[{key:"1",name:"\u5F20\u4E09",age:18,city:"\u5317\u4EAC"},{key:"2",name:"\u674E\u56DB",age:20,city:"\u4E0A\u6D77"},{key:"3",name:"\u738B\u4E94",age:22,city:"\u5E7F\u5DDE"}],a.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(d,{columns:s,dataSource:e,striped:!0}))}});case 11:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"table-demo-2",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '\u57CE\u5E02',
    dataIndex: 'city',
    key: 'city',
  },
];

const data = [
  {
    key: '1',
    name: '\u5F20\u4E09',
    age: 18,
    city: '\u5317\u4EAC',
  },
  {
    key: '2',
    name: '\u674E\u56DB',
    age: 20,
    city: '\u4E0A\u6D77',
  },
  {
    key: '3',
    name: '\u738B\u4E94',
    age: 22,
    city: '\u5E7F\u5DDE',
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} striped />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:m||(m=n.t(o,2)),brickd:I},renderOpts:{compile:function(){var i=p()(u()().mark(function t(){var r,d=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},t)}));function l(){return i.apply(this,arguments)}return l}()}},"table-demo-3":{component:o.memo(o.lazy(p()(u()().mark(function i(){var l,t,r,d,s,e;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=a.sent,t=l.default,a.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return r=a.sent,d=r.Table,s=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u57CE\u5E02",dataIndex:"city",key:"city"}],e=[{key:"1",name:"\u5F20\u4E09",age:18,city:"\u5317\u4EAC"},{key:"2",name:"\u674E\u56DB",age:20,city:"\u4E0A\u6D77"}],a.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(d,{columns:s,dataSource:e,hoverable:!0}))}});case 11:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"table-demo-3",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '\u57CE\u5E02',
    dataIndex: 'city',
    key: 'city',
  },
];

const data = [
  {
    key: '1',
    name: '\u5F20\u4E09',
    age: 18,
    city: '\u5317\u4EAC',
  },
  {
    key: '2',
    name: '\u674E\u56DB',
    age: 20,
    city: '\u4E0A\u6D77',
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} hoverable />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:m||(m=n.t(o,2)),brickd:I},renderOpts:{compile:function(){var i=p()(u()().mark(function t(){var r,d=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},t)}));function l(){return i.apply(this,arguments)}return l}()}},"table-demo-4":{component:o.memo(o.lazy(p()(u()().mark(function i(){var l,t,r,d,s,e;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=a.sent,t=l.default,a.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return r=a.sent,d=r.Table,s=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"}],e=[{key:"1",name:"\u5F20\u4E09",age:18},{key:"2",name:"\u674E\u56DB",age:20}],a.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(d,{columns:s,dataSource:e,size:"small",style:{marginBottom:"20px"}}),t.createElement(d,{columns:s,dataSource:e,size:"middle",style:{marginBottom:"20px"}}),t.createElement(d,{columns:s,dataSource:e,size:"large"}))}});case 11:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"table-demo-4",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
    key: 'age',
  },
];

const data = [
  {
    key: '1',
    name: '\u5F20\u4E09',
    age: 18,
  },
  {
    key: '2',
    name: '\u674E\u56DB',
    age: 20,
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} size="small" style={{ marginBottom: '20px' }} />
    <Table columns={columns} dataSource={data} size="middle" style={{ marginBottom: '20px' }} />
    <Table columns={columns} dataSource={data} size="large" />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:m||(m=n.t(o,2)),brickd:I},renderOpts:{compile:function(){var i=p()(u()().mark(function t(){var r,d=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},t)}));function l(){return i.apply(this,arguments)}return l}()}},"table-demo-5":{component:o.memo(o.lazy(p()(u()().mark(function i(){var l,t,r,d,s;return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=c.sent,t=l.default,c.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return r=c.sent,d=r.Table,s=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"}],c.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(d,{columns:s,dataSource:[],loading:!0}))}});case 10:case"end":return c.stop()}},i)})))),asset:{type:"BLOCK",id:"table-demo-5",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
    key: 'age',
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={[]} loading />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:m||(m=n.t(o,2)),brickd:I},renderOpts:{compile:function(){var i=p()(u()().mark(function t(){var r,d=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},t)}));function l(){return i.apply(this,arguments)}return l}()}},"table-demo-6":{component:o.memo(o.lazy(p()(u()().mark(function i(){var l,t,r,d,s;return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=c.sent,t=l.default,c.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return r=c.sent,d=r.Table,s=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"}],c.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(d,{columns:s,dataSource:[]}))}});case 10:case"end":return c.stop()}},i)})))),asset:{type:"BLOCK",id:"table-demo-6",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
    key: 'age',
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={[]} />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:m||(m=n.t(o,2)),brickd:I},renderOpts:{compile:function(){var i=p()(u()().mark(function t(){var r,d=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},t)}));function l(){return i.apply(this,arguments)}return l}()}},"table-demo-7":{component:o.memo(o.lazy(p()(u()().mark(function i(){var l,t,r,d,s,e;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=a.sent,t=l.default,a.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return r=a.sent,d=r.Table,s=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"}],e=[{key:"1",name:"\u5F20\u4E09",age:18},{key:"2",name:"\u674E\u56DB",age:20}],a.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(d,{columns:s,dataSource:e,pagination:!0}))}});case 11:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"table-demo-7",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
    key: 'age',
  },
];

const data = [
  {
    key: '1',
    name: '\u5F20\u4E09',
    age: 18,
  },
  {
    key: '2',
    name: '\u674E\u56DB',
    age: 20,
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} pagination />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:m||(m=n.t(o,2)),brickd:I},renderOpts:{compile:function(){var i=p()(u()().mark(function t(){var r,d=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},t)}));function l(){return i.apply(this,arguments)}return l}()}},"table-demo-8":{component:o.memo(o.lazy(p()(u()().mark(function i(){var l,t,r,d,s,e,c;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=y.sent,t=l.default,y.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return r=y.sent,d=r.Table,s=r.Button,e=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u64CD\u4F5C",key:"action",render:function(k,T){return t.createElement(s,{size:"small"},"\u7F16\u8F91")}}],c=[{key:"1",name:"\u5F20\u4E09",age:18},{key:"2",name:"\u674E\u56DB",age:20}],y.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(d,{columns:e,dataSource:c}))}});case 12:case"end":return y.stop()}},i)})))),asset:{type:"BLOCK",id:"table-demo-8",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Table, Button } from 'brickd';

const columns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '\u64CD\u4F5C',
    key: 'action',
    render: (text, record) => (
      <Button size="small">\u7F16\u8F91</Button>
    ),
  },
];

const data = [
  {
    key: '1',
    name: '\u5F20\u4E09',
    age: 18,
  },
  {
    key: '2',
    name: '\u674E\u56DB',
    age: 20,
  },
];

export default () => (
  <div>
    <Table columns={columns} dataSource={data} />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:m||(m=n.t(o,2)),brickd:I},renderOpts:{compile:function(){var i=p()(u()().mark(function t(){var r,d=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},t)}));function l(){return i.apply(this,arguments)}return l}()}},"table-demo-9":{component:o.memo(o.lazy(p()(u()().mark(function i(){var l,t,r,d,s,e;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,75271,19));case 2:return l=a.sent,t=l.default,a.next=6,Promise.resolve().then(n.bind(n,73440));case 6:return r=a.sent,d=r.Table,s=[{title:"\u59D3\u540D",dataIndex:"name",key:"name",width:100},{title:"\u5E74\u9F84",dataIndex:"age",key:"age",width:100},{title:"\u57CE\u5E02",dataIndex:"city",key:"city",width:100},{title:"\u5730\u5740",dataIndex:"address",key:"address",width:300},{title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",width:200}],e=[{key:"1",name:"\u5F20\u4E09",age:18,city:"\u5317\u4EAC",address:"\u5317\u4EAC\u5E02\u671D\u9633\u533A",remark:"\u5907\u6CE81"},{key:"2",name:"\u674E\u56DB",age:20,city:"\u4E0A\u6D77",address:"\u4E0A\u6D77\u5E02\u6D66\u4E1C\u65B0\u533A",remark:"\u5907\u6CE82"},{key:"3",name:"\u738B\u4E94",age:22,city:"\u5E7F\u5DDE",address:"\u5E7F\u5DDE\u5E02\u5929\u6CB3\u533A",remark:"\u5907\u6CE83"}],a.abrupt("return",{default:function(){return t.createElement("div",null,t.createElement(d,{columns:s,dataSource:e,scroll:{x:800,y:200}}))}});case 11:case"end":return a.stop()}},i)})))),asset:{type:"BLOCK",id:"table-demo-9",refAtomIds:["Table"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Table } from 'brickd';

const columns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    key: 'name',
    width: 100,
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: '\u57CE\u5E02',
    dataIndex: 'city',
    key: 'city',
    width: 100,
  },
  {
    title: '\u5730\u5740',
    dataIndex: 'address',
    key: 'address',
    width: 300,
  },
  {
    title: '\u5907\u6CE8',
    dataIndex: 'remark',
    key: 'remark',
    width: 200,
  },
];

const data = [
  {
    key: '1',
    name: '\u5F20\u4E09',
    age: 18,
    city: '\u5317\u4EAC',
    address: '\u5317\u4EAC\u5E02\u671D\u9633\u533A',
    remark: '\u5907\u6CE81',
  },
  {
    key: '2',
    name: '\u674E\u56DB',
    age: 20,
    city: '\u4E0A\u6D77',
    address: '\u4E0A\u6D77\u5E02\u6D66\u4E1C\u65B0\u533A',
    remark: '\u5907\u6CE82',
  },
  {
    key: '3',
    name: '\u738B\u4E94',
    age: 22,
    city: '\u5E7F\u5DDE',
    address: '\u5E7F\u5DDE\u5E02\u5929\u6CB3\u533A',
    remark: '\u5907\u6CE83',
  },
];

export default () => (
  <div>
    <Table 
      columns={columns} 
      dataSource={data} 
      scroll={{ x: 800, y: 200 }} 
    />
  </div>
);`},react:{type:"NPM",value:"18.3.1"},brickd:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:m||(m=n.t(o,2)),brickd:I},renderOpts:{compile:function(){var i=p()(u()().mark(function t(){var r,d=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3015).then(n.bind(n,33015));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,d));case 3:case"end":return e.stop()}},t)}));function l(){return i.apply(this,arguments)}return l}()}}}},75102:function(f,v,n){n.r(v),n.d(v,{texts:function(){return m}});const m=[{value:"\u8868\u683C\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u7ED3\u6784\u5316\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:11},{value:"\u8BF4\u660E",paraId:1,tocIndex:11},{value:"\u7C7B\u578B",paraId:1,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:11},{value:"columns",paraId:1,tocIndex:11},{value:"\u5217\u914D\u7F6E",paraId:1,tocIndex:11},{value:"TableColumn[]",paraId:1,tocIndex:11},{value:"-",paraId:1,tocIndex:11},{value:"dataSource",paraId:1,tocIndex:11},{value:"\u6570\u636E\u6E90",paraId:1,tocIndex:11},{value:"any[]",paraId:1,tocIndex:11},{value:"-",paraId:1,tocIndex:11},{value:"rowKey",paraId:1,tocIndex:11},{value:"\u884C\u952E",paraId:1,tocIndex:11},{value:"string | (record: any) => string",paraId:1,tocIndex:11},{value:"'key'",paraId:1,tocIndex:11},{value:"loading",paraId:1,tocIndex:11},{value:"\u52A0\u8F7D\u72B6\u6001",paraId:1,tocIndex:11},{value:"boolean",paraId:1,tocIndex:11},{value:"false",paraId:1,tocIndex:11},{value:"pagination",paraId:1,tocIndex:11},{value:"\u5206\u9875",paraId:1,tocIndex:11},{value:"boolean | any",paraId:1,tocIndex:11},{value:"false",paraId:1,tocIndex:11},{value:"size",paraId:1,tocIndex:11},{value:"\u8868\u683C\u5927\u5C0F",paraId:1,tocIndex:11},{value:"'small' | 'middle' | 'large'",paraId:1,tocIndex:11},{value:"'middle'",paraId:1,tocIndex:11},{value:"bordered",paraId:1,tocIndex:11},{value:"\u662F\u5426\u5E26\u8FB9\u6846",paraId:1,tocIndex:11},{value:"boolean",paraId:1,tocIndex:11},{value:"false",paraId:1,tocIndex:11},{value:"striped",paraId:1,tocIndex:11},{value:"\u662F\u5426\u4E3A\u6761\u7EB9\u8868\u683C",paraId:1,tocIndex:11},{value:"boolean",paraId:1,tocIndex:11},{value:"false",paraId:1,tocIndex:11},{value:"hoverable",paraId:1,tocIndex:11},{value:"\u662F\u5426\u652F\u6301\u884C\u60AC\u505C",paraId:1,tocIndex:11},{value:"boolean",paraId:1,tocIndex:11},{value:"false",paraId:1,tocIndex:11},{value:"scroll",paraId:1,tocIndex:11},{value:"\u6EDA\u52A8\u914D\u7F6E",paraId:1,tocIndex:11},{value:"{ x?: number | string; y?: number | string }",paraId:1,tocIndex:11},{value:"undefined",paraId:1,tocIndex:11},{value:"className",paraId:1,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:11},{value:"string",paraId:1,tocIndex:11},{value:"undefined",paraId:1,tocIndex:11},{value:"style",paraId:1,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:11},{value:"React.CSSProperties",paraId:1,tocIndex:11},{value:"undefined",paraId:1,tocIndex:11},{value:"\u5C5E\u6027",paraId:2,tocIndex:12},{value:"\u8BF4\u660E",paraId:2,tocIndex:12},{value:"\u7C7B\u578B",paraId:2,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:12},{value:"title",paraId:2,tocIndex:12},{value:"\u5217\u6807\u9898",paraId:2,tocIndex:12},{value:"React.ReactNode",paraId:2,tocIndex:12},{value:"-",paraId:2,tocIndex:12},{value:"dataIndex",paraId:2,tocIndex:12},{value:"\u6570\u636E\u7D22\u5F15",paraId:2,tocIndex:12},{value:"string",paraId:2,tocIndex:12},{value:"-",paraId:2,tocIndex:12},{value:"key",paraId:2,tocIndex:12},{value:"\u5217\u952E",paraId:2,tocIndex:12},{value:"string",paraId:2,tocIndex:12},{value:"undefined",paraId:2,tocIndex:12},{value:"width",paraId:2,tocIndex:12},{value:"\u5217\u5BBD\u5EA6",paraId:2,tocIndex:12},{value:"string | number",paraId:2,tocIndex:12},{value:"undefined",paraId:2,tocIndex:12},{value:"render",paraId:2,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FD\u6570",paraId:2,tocIndex:12},{value:"(text: any, record: any, index: number) => React.ReactNode",paraId:2,tocIndex:12},{value:"undefined",paraId:2,tocIndex:12},{value:"sorter",paraId:2,tocIndex:12},{value:"\u6392\u5E8F\u51FD\u6570",paraId:2,tocIndex:12},{value:"boolean | ((a: any, b: any) => number)",paraId:2,tocIndex:12},{value:"undefined",paraId:2,tocIndex:12},{value:"defaultSortOrder",paraId:2,tocIndex:12},{value:"\u9ED8\u8BA4\u6392\u5E8F\u987A\u5E8F",paraId:2,tocIndex:12},{value:"'ascend' | 'descend'",paraId:2,tocIndex:12},{value:"undefined",paraId:2,tocIndex:12},{value:"className",paraId:2,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:2,tocIndex:12},{value:"string",paraId:2,tocIndex:12},{value:"undefined",paraId:2,tocIndex:12},{value:"style",paraId:2,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:2,tocIndex:12},{value:"React.CSSProperties",paraId:2,tocIndex:12},{value:"undefined",paraId:2,tocIndex:12}]}}]);
