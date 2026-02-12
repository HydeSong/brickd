(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[7413,7656],{85307:function(f,y,e){"use strict";var c;e.r(y),e.d(y,{demos:function(){return C}});var I=e(90228),s=e.n(I),v=e(87999),m=e.n(v),o=e(75271),h=e(97656),C={"empty-demo-0":{component:o.memo(o.lazy(m()(s()().mark(function u(){var i,r,n,l,p;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return i=a.sent,r=i.default,a.next=6,e.e(1516).then(e.bind(e,51516));case 6:return n=a.sent,l=n.default,p=function(){return r.createElement("div",null,r.createElement(l,null))},a.abrupt("return",{default:p});case 10:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"empty-demo-0",refAtomIds:["Empty"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Empty from '../Empty';

const App: React.FC = () => {
  return (
    <div>
      <Empty />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(o,2))},renderOpts:{compile:function(){var u=m()(s()().mark(function r(){var n,l=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3015).then(e.bind(e,33015));case 2:return t.abrupt("return",(n=t.sent).default.apply(n,l));case 3:case"end":return t.stop()}},r)}));function i(){return u.apply(this,arguments)}return i}()}},"empty-demo-1":{component:o.memo(o.lazy(m()(s()().mark(function u(){var i,r,n,l,p;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return i=a.sent,r=i.default,a.next=6,e.e(1516).then(e.bind(e,51516));case 6:return n=a.sent,l=n.default,p=function(){return r.createElement("div",null,r.createElement(l,{description:"\u6682\u65E0\u6570\u636E"}))},a.abrupt("return",{default:p});case 10:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"empty-demo-1",refAtomIds:["Empty"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Empty from '../Empty';

const App: React.FC = () => {
  return (
    <div>
      <Empty description="\u6682\u65E0\u6570\u636E" />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(o,2))},renderOpts:{compile:function(){var u=m()(s()().mark(function r(){var n,l=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3015).then(e.bind(e,33015));case 2:return t.abrupt("return",(n=t.sent).default.apply(n,l));case 3:case"end":return t.stop()}},r)}));function i(){return u.apply(this,arguments)}return i}()}},"empty-demo-2":{component:o.memo(o.lazy(m()(s()().mark(function u(){var i,r,n,l,p;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return i=a.sent,r=i.default,a.next=6,e.e(1516).then(e.bind(e,51516));case 6:return n=a.sent,l=n.default,p=function(){var d=r.createElement("svg",{width:"128",height:"128",viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("rect",{width:"128",height:"128",rx:"8",fill:"#f0f5ff"}),r.createElement("path",{d:"M64 32C50.7452 32 40 42.7452 40 56C40 69.2548 50.7452 80 64 80C77.2548 80 88 69.2548 88 56C88 42.7452 77.2548 32 64 32ZM64 72C55.1634 72 48 64.8366 48 56C48 47.1634 55.1634 40 64 40C72.8366 40 80 47.1634 80 56C80 64.8366 72.8366 72 64 72Z",fill:"#adc6ff"}),r.createElement("path",{d:"M64 96C60.6863 96 58 93.3137 58 90H70C70 93.3137 67.3137 96 64 96Z",fill:"#adc6ff"}));return r.createElement("div",null,r.createElement(l,{image:d,description:"\u6682\u65E0\u6570\u636E"}))},a.abrupt("return",{default:p});case 10:case"end":return a.stop()}},u)})))),asset:{type:"BLOCK",id:"empty-demo-2",refAtomIds:["Empty"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Empty from '../Empty';

const App: React.FC = () => {
  const customImage = (
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="8" fill="#f0f5ff"/>
      <path d="M64 32C50.7452 32 40 42.7452 40 56C40 69.2548 50.7452 80 64 80C77.2548 80 88 69.2548 88 56C88 42.7452 77.2548 32 64 32ZM64 72C55.1634 72 48 64.8366 48 56C48 47.1634 55.1634 40 64 40C72.8366 40 80 47.1634 80 56C80 64.8366 72.8366 72 64 72Z" fill="#adc6ff"/>
      <path d="M64 96C60.6863 96 58 93.3137 58 90H70C70 93.3137 67.3137 96 64 96Z" fill="#adc6ff"/>
    </svg>
  );

  return (
    <div>
      <Empty image={customImage} description="\u6682\u65E0\u6570\u636E" />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:c||(c=e.t(o,2))},renderOpts:{compile:function(){var u=m()(s()().mark(function r(){var n,l=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3015).then(e.bind(e,33015));case 2:return t.abrupt("return",(n=t.sent).default.apply(n,l));case 3:case"end":return t.stop()}},r)}));function i(){return u.apply(this,arguments)}return i}()}},"empty-demo-3":{component:o.memo(o.lazy(m()(s()().mark(function u(){var i,r,n,l,p,t,a;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return i=d.sent,r=i.default,d.next=6,e.e(1516).then(e.bind(e,51516));case 6:return n=d.sent,l=n.default,d.next=10,Promise.resolve().then(e.bind(e,97656));case 10:return p=d.sent,t=p.default,a=function(){return r.createElement("div",null,r.createElement(l,{description:"\u6682\u65E0\u6570\u636E"},r.createElement(t,{type:"primary"},"\u5237\u65B0")))},d.abrupt("return",{default:a});case 14:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"empty-demo-3",refAtomIds:["Empty"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Empty from '../Empty';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <div>
      <Empty description="\u6682\u65E0\u6570\u636E">
        <Button type="primary">\u5237\u65B0</Button>
      </Empty>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":h,react:c||(c=e.t(o,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":h},renderOpts:{compile:function(){var u=m()(s()().mark(function r(){var n,l=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3015).then(e.bind(e,33015));case 2:return t.abrupt("return",(n=t.sent).default.apply(n,l));case 3:case"end":return t.stop()}},r)}));function i(){return u.apply(this,arguments)}return i}()}},"empty-demo-4":{component:o.memo(o.lazy(m()(s()().mark(function u(){var i,r,n,l,p,t,a;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return i=d.sent,r=i.default,d.next=6,e.e(1516).then(e.bind(e,51516));case 6:return n=d.sent,l=n.default,d.next=10,Promise.resolve().then(e.bind(e,97656));case 10:return p=d.sent,t=p.default,a=function(){return r.createElement("div",null,r.createElement(l,{description:"\u6682\u65E0\u6570\u636E",style:{backgroundColor:"#f9f0ff",padding:40,borderRadius:8}},r.createElement(t,{type:"primary",style:{backgroundColor:"#722ed1"}},"\u91CD\u65B0\u52A0\u8F7D")))},d.abrupt("return",{default:a});case 14:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"empty-demo-4",refAtomIds:["Empty"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Empty from '../Empty';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <div>
      <Empty 
        description="\u6682\u65E0\u6570\u636E"
        style={{ 
          backgroundColor: '#f9f0ff', 
          padding: 40, 
          borderRadius: 8 
        }}
      >
        <Button type="primary" style={{ backgroundColor: '#722ed1' }}>
          \u91CD\u65B0\u52A0\u8F7D
        </Button>
      </Empty>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":h,react:c||(c=e.t(o,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":h},renderOpts:{compile:function(){var u=m()(s()().mark(function r(){var n,l=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3015).then(e.bind(e,33015));case 2:return t.abrupt("return",(n=t.sent).default.apply(n,l));case 3:case"end":return t.stop()}},r)}));function i(){return u.apply(this,arguments)}return i}()}}}},97656:function(f,y,e){"use strict";e.r(y),e.d(y,{default:function(){return i}});var c=e(26068),I=e.n(c),s=e(67825),v=e.n(s),m=e(75271),o={button:"AyHMn4pptwgAqTM0zVxe",small:"mtziivfRPkRk_hPU_E8r",default:"CH0d2t1M7c0F2z59aWp3",large:"RH0k6h4jVrUDWtwndzsD",primary:"DPc0H8GPQ0xHQRlthXLJ",disabled:"tsWfJ_Ys0PMwNuyfv9ZE",dashed:"IioY1o_nDcycA39jljNu",text:"uXPLhO_cvecV4slBdUG9",link:"dEu3aIhxJygUwZzIAxyd"},h=e(52676),C=["type","size","disabled","children","onClick","className","style","htmlType"],u=function(n){var l=n.type,p=l===void 0?"default":l,t=n.size,a=t===void 0?"default":t,E=n.disabled,d=E===void 0?!1:E,x=n.children,B=n.onClick,P=n.className,R=P===void 0?"":P,b=n.style,$=b===void 0?{}:b,A=n.htmlType,O=A===void 0?"button":A,M=v()(n,C),D=function(){var g=[o.button];return g.push(o[p]),g.push(o[a]),d&&g.push(o.disabled),R&&g.push(R),g.join(" ")},L=function(){!d&&B&&B()};return(0,h.jsx)("button",I()(I()({type:O==="submit"?"submit":O==="reset"?"reset":"button",className:D(),style:$,disabled:d,onClick:L},M),{},{children:x}))},i=u},29816:function(f,y,e){"use strict";e.r(y),e.d(y,{texts:function(){return c}});const c=[{value:"\u7528\u4E8E\u5C55\u793A\u7A7A\u72B6\u6001\uFF0C\u5982\u7A7A\u6570\u636E\u3001\u65E0\u7ED3\u679C\u7B49\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"description",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"\u63CF\u8FF0\u6587\u672C",paraId:1,tocIndex:6},{value:"image",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u56FE\u7247",paraId:1,tocIndex:6},{value:"className",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"''",paraId:1,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:6},{value:"style",paraId:1,tocIndex:6},{value:"React.CSSProperties",paraId:1,tocIndex:6},{value:"{}",paraId:1,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:6},{value:"children",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"\u64CD\u4F5C\u6309\u94AE\u7B49\u5B50\u5143\u7D20",paraId:1,tocIndex:6}]},27045:function(f,y){"use strict";y.Z=`import React from 'react';
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

export default Button;`},67825:function(f,y,e){var c=e(64382);function I(s,v){if(s==null)return{};var m=c(s,v),o,h;if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(s);for(h=0;h<C.length;h++)o=C[h],!(v.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(m[o]=s[o])}return m}f.exports=I,f.exports.__esModule=!0,f.exports.default=f.exports},64382:function(f){function y(e,c){if(e==null)return{};var I={},s=Object.keys(e),v,m;for(m=0;m<s.length;m++)v=s[m],!(c.indexOf(v)>=0)&&(I[v]=e[v]);return I}f.exports=y,f.exports.__esModule=!0,f.exports.default=f.exports}}]);
