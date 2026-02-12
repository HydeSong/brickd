"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[1540],{61091:function(f,i,n){n.r(i),n.d(i,{demos:function(){return v}});var c=n(90228),d=n.n(c),I=n(87999),u=n.n(I),s=n(75271),v={"progress-demo-0":{component:s.memo(s.lazy(u()(d()().mark(function l(){var o,t,a;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return s.createElement("div",{style:{display:"flex",gap:"24px",flexDirection:"column",width:"100%",maxWidth:400}},s.createElement(t,{percent:30}),s.createElement(t,{percent:60}),s.createElement(t,{percent:90}))},e.next=3,n.e(256).then(n.bind(n,80256));case 3:return o=e.sent,t=o.default,e.abrupt("return",{default:a});case 6:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"progress-demo-0",refAtomIds:["Progress"],dependencies:{"index.tsx":{type:"FILE",value:`import Progress from './index';

function ProgressBasicDemo() {
  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column', width: '100%', maxWidth: 400 }}>
      <Progress percent={30} />
      <Progress percent={60} />
      <Progress percent={90} />
    </div>
  );
}

export default ProgressBasicDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var l=u()(d()().mark(function t(){var a,p=arguments;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(3015).then(n.bind(n,33015));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,p));case 3:case"end":return r.stop()}},t)}));function o(){return l.apply(this,arguments)}return o}()}},"progress-demo-1":{component:s.memo(s.lazy(u()(d()().mark(function l(){var o,t,a;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return s.createElement("div",{style:{display:"flex",gap:"48px",alignItems:"center"}},s.createElement("div",{style:{width:"100%",maxWidth:400}},s.createElement(t,{percent:70,type:"line"})),s.createElement(t,{percent:70,type:"circle"}))},e.next=3,n.e(256).then(n.bind(n,80256));case 3:return o=e.sent,t=o.default,e.abrupt("return",{default:a});case 6:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"progress-demo-1",refAtomIds:["Progress"],dependencies:{"index.tsx":{type:"FILE",value:`import Progress from './index';

function ProgressDifferentTypeDemo() {
  return (
    <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        <Progress percent={70} type="line" />
      </div>
      <Progress percent={70} type="circle" />
    </div>
  );
}

export default ProgressDifferentTypeDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var l=u()(d()().mark(function t(){var a,p=arguments;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(3015).then(n.bind(n,33015));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,p));case 3:case"end":return r.stop()}},t)}));function o(){return l.apply(this,arguments)}return o}()}},"progress-demo-2":{component:s.memo(s.lazy(u()(d()().mark(function l(){var o,t,a;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return s.createElement("div",{style:{display:"flex",gap:"24px",flexDirection:"column",width:"100%",maxWidth:400}},s.createElement(t,{percent:60,status:"active"}),s.createElement(t,{percent:100,status:"success"}),s.createElement(t,{percent:60,status:"exception"}))},e.next=3,n.e(256).then(n.bind(n,80256));case 3:return o=e.sent,t=o.default,e.abrupt("return",{default:a});case 6:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"progress-demo-2",refAtomIds:["Progress"],dependencies:{"index.tsx":{type:"FILE",value:`import Progress from './index';

function ProgressDifferentStatusDemo() {
  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column', width: '100%', maxWidth: 400 }}>
      <Progress percent={60} status="active" />
      <Progress percent={100} status="success" />
      <Progress percent={60} status="exception" />
    </div>
  );
}

export default ProgressDifferentStatusDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var l=u()(d()().mark(function t(){var a,p=arguments;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(3015).then(n.bind(n,33015));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,p));case 3:case"end":return r.stop()}},t)}));function o(){return l.apply(this,arguments)}return o}()}},"progress-demo-3":{component:s.memo(s.lazy(u()(d()().mark(function l(){var o,t,a;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return s.createElement("div",{style:{display:"flex",gap:"24px",flexDirection:"column",width:"100%",maxWidth:400}},s.createElement(t,{percent:60,strokeWidth:4}),s.createElement(t,{percent:60,strokeWidth:8}),s.createElement(t,{percent:60,strokeWidth:12}))},e.next=3,n.e(256).then(n.bind(n,80256));case 3:return o=e.sent,t=o.default,e.abrupt("return",{default:a});case 6:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"progress-demo-3",refAtomIds:["Progress"],dependencies:{"index.tsx":{type:"FILE",value:`import Progress from './index';

function ProgressDifferentStrokeWidthDemo() {
  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column', width: '100%', maxWidth: 400 }}>
      <Progress percent={60} strokeWidth={4} />
      <Progress percent={60} strokeWidth={8} />
      <Progress percent={60} strokeWidth={12} />
    </div>
  );
}

export default ProgressDifferentStrokeWidthDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var l=u()(d()().mark(function t(){var a,p=arguments;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(3015).then(n.bind(n,33015));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,p));case 3:case"end":return r.stop()}},t)}));function o(){return l.apply(this,arguments)}return o}()}},"progress-demo-4":{component:s.memo(s.lazy(u()(d()().mark(function l(){var o,t,a;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return s.createElement("div",{style:{width:"100%",maxWidth:400}},s.createElement(t,{percent:60,showInfo:!1}))},e.next=3,n.e(256).then(n.bind(n,80256));case 3:return o=e.sent,t=o.default,e.abrupt("return",{default:a});case 6:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"progress-demo-4",refAtomIds:["Progress"],dependencies:{"index.tsx":{type:"FILE",value:`import Progress from './index';

function ProgressHideInfoDemo() {
  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <Progress percent={60} showInfo={false} />
    </div>
  );
}

export default ProgressHideInfoDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var l=u()(d()().mark(function t(){var a,p=arguments;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(3015).then(n.bind(n,33015));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,p));case 3:case"end":return r.stop()}},t)}));function o(){return l.apply(this,arguments)}return o}()}},"progress-demo-5":{component:s.memo(s.lazy(u()(d()().mark(function l(){var o,t,a;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return s.createElement("div",{style:{display:"flex",gap:"48px",alignItems:"center"}},s.createElement("div",{style:{width:"100%",maxWidth:400}},s.createElement(t,{percent:60,format:function(m){return"".concat(m.toFixed(1),"% \u5B8C\u6210")}})),s.createElement(t,{percent:60,type:"circle",format:function(m){return"".concat(Math.round(m),"%")}}))},e.next=3,n.e(256).then(n.bind(n,80256));case 3:return o=e.sent,t=o.default,e.abrupt("return",{default:a});case 6:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"progress-demo-5",refAtomIds:["Progress"],dependencies:{"index.tsx":{type:"FILE",value:`import Progress from './index';

function ProgressCustomFormatDemo() {
  return (
    <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        <Progress 
          percent={60} 
          format={(percent) => \`\${percent.toFixed(1)}% \u5B8C\u6210\`} 
        />
      </div>
      <Progress 
        percent={60} 
        type="circle"
        format={(percent) => \`\${Math.round(percent)}%\`} 
      />
    </div>
  );
}

export default ProgressCustomFormatDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var l=u()(d()().mark(function t(){var a,p=arguments;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(3015).then(n.bind(n,33015));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,p));case 3:case"end":return r.stop()}},t)}));function o(){return l.apply(this,arguments)}return o}()}},"progress-demo-6":{component:s.memo(s.lazy(u()(d()().mark(function l(){var o,t,a;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return s.createElement("div",{style:{display:"flex",gap:"24px",flexDirection:"column",width:"100%",maxWidth:400}},s.createElement(t,{percent:60,strokeColor:"#52c41a"}),s.createElement(t,{percent:60,strokeColor:"#faad14",trailColor:"#fff2f0"}),s.createElement(t,{percent:60,strokeColor:"#13c2c2",trailColor:"#e6f7ff"}))},e.next=3,n.e(256).then(n.bind(n,80256));case 3:return o=e.sent,t=o.default,e.abrupt("return",{default:a});case 6:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"progress-demo-6",refAtomIds:["Progress"],dependencies:{"index.tsx":{type:"FILE",value:`import Progress from './index';

function ProgressCustomColorDemo() {
  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column', width: '100%', maxWidth: 400 }}>
      <Progress percent={60} strokeColor="#52c41a" />
      <Progress percent={60} strokeColor="#faad14" trailColor="#fff2f0" />
      <Progress percent={60} strokeColor="#13c2c2" trailColor="#e6f7ff" />
    </div>
  );
}

export default ProgressCustomColorDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var l=u()(d()().mark(function t(){var a,p=arguments;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(3015).then(n.bind(n,33015));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,p));case 3:case"end":return r.stop()}},t)}));function o(){return l.apply(this,arguments)}return o}()}},"progress-demo-7":{component:s.memo(s.lazy(u()(d()().mark(function l(){var o,t,a;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return s.createElement("div",{style:{display:"flex",gap:"24px",flexDirection:"column",width:"100%",maxWidth:400}},s.createElement(t,{percent:60,style:{borderRadius:"4px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.15)"}}),s.createElement(t,{percent:60,type:"circle",style:{transform:"scale(1.2)",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.15)"}}))},e.next=3,n.e(256).then(n.bind(n,80256));case 3:return o=e.sent,t=o.default,e.abrupt("return",{default:a});case 6:case"end":return e.stop()}},l)})))),asset:{type:"BLOCK",id:"progress-demo-7",refAtomIds:["Progress"],dependencies:{"index.tsx":{type:"FILE",value:`import Progress from './index';

function ProgressCustomStyleDemo() {
  return (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column', width: '100%', maxWidth: 400 }}>
      <Progress 
        percent={60} 
        style={{ 
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
        }} 
      />
      <Progress 
        percent={60} 
        type="circle"
        style={{ 
          transform: 'scale(1.2)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
        }} 
      />
    </div>
  );
}

export default ProgressCustomStyleDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var l=u()(d()().mark(function t(){var a,p=arguments;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(3015).then(n.bind(n,33015));case 2:return r.abrupt("return",(a=r.sent).default.apply(a,p));case 3:case"end":return r.stop()}},t)}));function o(){return l.apply(this,arguments)}return o}()}}}},4684:function(f,i,n){n.r(i),n.d(i,{texts:function(){return c}});const c=[{value:"\u8FDB\u5EA6\u6761\u7EC4\u4EF6\u7528\u4E8E\u663E\u793A\u4EFB\u52A1\u7684\u5B8C\u6210\u8FDB\u5EA6\uFF0C\u652F\u6301\u7EBF\u6027\u548C\u5706\u5F62\u4E24\u79CD\u7C7B\u578B\uFF0C\u4EE5\u53CA\u81EA\u5B9A\u4E49\u72B6\u6001\u3001\u989C\u8272\u7B49\u5C5E\u6027\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"percent",paraId:1,tocIndex:2},{value:" \u5C5E\u6027\u8BBE\u7F6E\u8FDB\u5EA6\u767E\u5206\u6BD4\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"type",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u7C7B\u578B\uFF0C\u652F\u6301 ",paraId:2,tocIndex:3},{value:"line",paraId:2,tocIndex:3},{value:" \u548C ",paraId:2,tocIndex:3},{value:"circle",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"status",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u72B6\u6001\uFF0C\u652F\u6301 ",paraId:3,tocIndex:4},{value:"success",paraId:3,tocIndex:4},{value:"\u3001",paraId:3,tocIndex:4},{value:"active",paraId:3,tocIndex:4},{value:" \u548C ",paraId:3,tocIndex:4},{value:"exception",paraId:3,tocIndex:4},{value:"\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"strokeWidth",paraId:4,tocIndex:5},{value:" \u5C5E\u6027\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u7684\u7EBF\u6761\u5BBD\u5EA6\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"showInfo={false}",paraId:5,tocIndex:6},{value:" \u9690\u85CF\u8FDB\u5EA6\u4FE1\u606F\u3002",paraId:5,tocIndex:6},{value:"\u901A\u8FC7 ",paraId:6,tocIndex:7},{value:"format",paraId:6,tocIndex:7},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u4FE1\u606F\u7684\u663E\u793A\u683C\u5F0F\u3002",paraId:6,tocIndex:7},{value:"\u901A\u8FC7 ",paraId:7,tocIndex:8},{value:"strokeColor",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u7684\u989C\u8272\uFF0C\u901A\u8FC7 ",paraId:7,tocIndex:8},{value:"trailColor",paraId:7,tocIndex:8},{value:" \u5C5E\u6027\u8BBE\u7F6E\u8F68\u9053\u7684\u989C\u8272\u3002",paraId:7,tocIndex:8},{value:"\u901A\u8FC7 ",paraId:8,tocIndex:9},{value:"className",paraId:8,tocIndex:9},{value:" \u548C ",paraId:8,tocIndex:9},{value:"style",paraId:8,tocIndex:9},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u7684\u6837\u5F0F\u3002",paraId:8,tocIndex:9},{value:"\u5C5E\u6027",paraId:9,tocIndex:11},{value:"\u8BF4\u660E",paraId:9,tocIndex:11},{value:"\u7C7B\u578B",paraId:9,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:11},{value:"percent",paraId:9,tocIndex:11},{value:"\u8FDB\u5EA6\u767E\u5206\u6BD4",paraId:9,tocIndex:11},{value:"number",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"type",paraId:9,tocIndex:11},{value:"\u8FDB\u5EA6\u6761\u7C7B\u578B",paraId:9,tocIndex:11},{value:"'line' | 'circle'",paraId:9,tocIndex:11},{value:"'line'",paraId:9,tocIndex:11},{value:"status",paraId:9,tocIndex:11},{value:"\u8FDB\u5EA6\u6761\u72B6\u6001",paraId:9,tocIndex:11},{value:"'success' | 'active' | 'exception'",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"strokeWidth",paraId:9,tocIndex:11},{value:"\u7EBF\u6761\u5BBD\u5EA6",paraId:9,tocIndex:11},{value:"number",paraId:9,tocIndex:11},{value:"8",paraId:9,tocIndex:11},{value:"showInfo",paraId:9,tocIndex:11},{value:"\u662F\u5426\u663E\u793A\u8FDB\u5EA6\u4FE1\u606F",paraId:9,tocIndex:11},{value:"boolean",paraId:9,tocIndex:11},{value:"true",paraId:9,tocIndex:11},{value:"format",paraId:9,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u4FE1\u606F\u683C\u5F0F",paraId:9,tocIndex:11},{value:"(percent: number) => React.ReactNode",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"className",paraId:9,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:9,tocIndex:11},{value:"string",paraId:9,tocIndex:11},{value:"''",paraId:9,tocIndex:11},{value:"style",paraId:9,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:9,tocIndex:11},{value:"React.CSSProperties",paraId:9,tocIndex:11},{value:"{}",paraId:9,tocIndex:11},{value:"strokeColor",paraId:9,tocIndex:11},{value:"\u8FDB\u5EA6\u6761\u989C\u8272",paraId:9,tocIndex:11},{value:"string",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"trailColor",paraId:9,tocIndex:11},{value:"\u8F68\u9053\u989C\u8272",paraId:9,tocIndex:11},{value:"string",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11}]}}]);
