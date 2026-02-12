(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[9895,7656],{17426:function(v,y,e){"use strict";var f;e.r(y),e.d(y,{demos:function(){return $}});var x=e(48305),h=e.n(x),P=e(90228),o=e.n(P),g=e(87999),m=e.n(g),u=e(75271),C=e(97656),$={"configprovider-demo-0":{component:u.memo(u.lazy(m()(o()().mark(function p(){var t,r,a,l,i,n,c;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return t=s.sent,r=t.default,s.next=6,e.e(9189).then(e.bind(e,29189));case 6:return a=s.sent,l=a.default,s.next=10,Promise.resolve().then(e.bind(e,97656));case 10:return i=s.sent,n=i.default,c=function(){return r.createElement(l,null,r.createElement(n,{type:"primary"},"\u6309\u94AE"))},s.abrupt("return",{default:c});case 14:case"end":return s.stop()}},p)})))),asset:{type:"BLOCK",id:"configprovider-demo-0",refAtomIds:["ConfigProvider"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import ConfigProvider from '../ConfigProvider';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <Button type="primary">\u6309\u94AE</Button>
    </ConfigProvider>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":C,react:f||(f=e.t(u,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":C},renderOpts:{compile:function(){var p=m()(o()().mark(function r(){var a,l=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},r)}));function t(){return p.apply(this,arguments)}return t}()}},"configprovider-demo-1":{component:u.memo(u.lazy(m()(o()().mark(function p(){var t,r,a,l,i,n,c;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return t=s.sent,r=t.default,s.next=6,e.e(9189).then(e.bind(e,29189));case 6:return a=s.sent,l=a.default,s.next=10,Promise.resolve().then(e.bind(e,97656));case 10:return i=s.sent,n=i.default,c=function(){return r.createElement(l,{prefixCls:"custom"},r.createElement(n,{type:"primary"},"\u81EA\u5B9A\u4E49\u524D\u7F00\u7C7B\u540D"))},s.abrupt("return",{default:c});case 14:case"end":return s.stop()}},p)})))),asset:{type:"BLOCK",id:"configprovider-demo-1",refAtomIds:["ConfigProvider"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import ConfigProvider from '../ConfigProvider';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <ConfigProvider prefixCls="custom">
      <Button type="primary">\u81EA\u5B9A\u4E49\u524D\u7F00\u7C7B\u540D</Button>
    </ConfigProvider>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":C,react:f||(f=e.t(u,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":C},renderOpts:{compile:function(){var p=m()(o()().mark(function r(){var a,l=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},r)}));function t(){return p.apply(this,arguments)}return t}()}},"configprovider-demo-2":{component:u.memo(u.lazy(m()(o()().mark(function p(){var t,r,a,l,i,n,c,I;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return t=d.sent,r=t.default,a=t.useState,d.next=7,e.e(9189).then(e.bind(e,29189));case 7:return l=d.sent,i=l.default,d.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return n=d.sent,c=n.default,I=function(){var b=a("light"),O=h()(b,2),B=O[0],R=O[1];return r.createElement(i,{theme:B},r.createElement("div",null,r.createElement(c,{type:"primary",onClick:function(){return R(B==="light"?"dark":"light")}},"\u5207\u6362\u5230",B==="light"?"\u6DF1\u8272":"\u6D45\u8272","\u4E3B\u9898"),r.createElement("p",null,"\u5F53\u524D\u4E3B\u9898: ",B)))},d.abrupt("return",{default:I});case 15:case"end":return d.stop()}},p)})))),asset:{type:"BLOCK",id:"configprovider-demo-2",refAtomIds:["ConfigProvider"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import ConfigProvider from '../ConfigProvider';
import Button from '../Button';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ConfigProvider theme={theme}>
      <div>
        <Button 
          type="primary" 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          \u5207\u6362\u5230{theme === 'light' ? '\u6DF1\u8272' : '\u6D45\u8272'}\u4E3B\u9898
        </Button>
        <p>\u5F53\u524D\u4E3B\u9898: {theme}</p>
      </div>
    </ConfigProvider>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":C,react:f||(f=e.t(u,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":C},renderOpts:{compile:function(){var p=m()(o()().mark(function r(){var a,l=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},r)}));function t(){return p.apply(this,arguments)}return t}()}},"configprovider-demo-3":{component:u.memo(u.lazy(m()(o()().mark(function p(){var t,r,a,l,i,n,c,I;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return t=d.sent,r=t.default,d.next=6,e.e(9189).then(e.bind(e,29189));case 6:return a=d.sent,l=a.default,d.next=10,Promise.resolve().then(e.bind(e,97656));case 10:return i=d.sent,n=i.default,c={ok:"\u786E\u5B9A",cancel:"\u53D6\u6D88"},I=function(){return r.createElement(l,{locale:c},r.createElement(n,{type:"primary"},"\u56FD\u9645\u5316\u914D\u7F6E"))},d.abrupt("return",{default:I});case 15:case"end":return d.stop()}},p)})))),asset:{type:"BLOCK",id:"configprovider-demo-3",refAtomIds:["ConfigProvider"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import ConfigProvider from '../ConfigProvider';
import Button from '../Button';

const zhCN = {
  ok: '\u786E\u5B9A',
  cancel: '\u53D6\u6D88',
  // \u5176\u4ED6\u56FD\u9645\u5316\u914D\u7F6E
};

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Button type="primary">\u56FD\u9645\u5316\u914D\u7F6E</Button>
    </ConfigProvider>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":C,react:f||(f=e.t(u,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":C},renderOpts:{compile:function(){var p=m()(o()().mark(function r(){var a,l=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},r)}));function t(){return p.apply(this,arguments)}return t}()}},"configprovider-demo-4":{component:u.memo(u.lazy(m()(o()().mark(function p(){var t,r,a,l,i,n,c;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return t=s.sent,r=t.default,s.next=6,e.e(9189).then(e.bind(e,29189));case 6:return a=s.sent,l=a.default,s.next=10,Promise.resolve().then(e.bind(e,97656));case 10:return i=s.sent,n=i.default,c=function(){return r.createElement(l,{style:{padding:20,backgroundColor:"#f5f5f5",borderRadius:8}},r.createElement(n,{type:"primary"},"\u81EA\u5B9A\u4E49\u6837\u5F0F"))},s.abrupt("return",{default:c});case 14:case"end":return s.stop()}},p)})))),asset:{type:"BLOCK",id:"configprovider-demo-4",refAtomIds:["ConfigProvider"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import ConfigProvider from '../ConfigProvider';
import Button from '../Button';

const App: React.FC = () => {
  return (
    <ConfigProvider 
      style={{ 
        padding: 20, 
        backgroundColor: '#f5f5f5',
        borderRadius: 8 
      }} 
    >
      <Button type="primary">\u81EA\u5B9A\u4E49\u6837\u5F0F</Button>
    </ConfigProvider>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":C,react:f||(f=e.t(u,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":C},renderOpts:{compile:function(){var p=m()(o()().mark(function r(){var a,l=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},r)}));function t(){return p.apply(this,arguments)}return t}()}},"configprovider-demo-5":{component:u.memo(u.lazy(m()(o()().mark(function p(){var t,r,a;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(9189).then(e.bind(e,29189));case 2:t=i.sent,r=t.useConfig,a=function(){var c=r(),I=c.prefixCls,s=c.theme,d=c.locale;return u.createElement("div",null,u.createElement("p",null,"\u524D\u7F00\u7C7B\u540D: ",I),u.createElement("p",null,"\u4E3B\u9898: ",s),u.createElement("p",null,"\u56FD\u9645\u5316: ",JSON.stringify(d)))};case 5:case"end":return i.stop()}},p)})))),asset:{type:"BLOCK",id:"configprovider-demo-5",refAtomIds:["ConfigProvider"],dependencies:{"index.tsx":{type:"FILE",value:`import { useConfig } from '../ConfigProvider';

const MyComponent: React.FC = () => {
  const { prefixCls, theme, locale } = useConfig();
  
  return (
    <div>
      <p>\u524D\u7F00\u7C7B\u540D: {prefixCls}</p>
      <p>\u4E3B\u9898: {theme}</p>
      <p>\u56FD\u9645\u5316: {JSON.stringify(locale)}</p>
    </div>
  );
};`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var p=m()(o()().mark(function r(){var a,l=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,l));case 3:case"end":return n.stop()}},r)}));function t(){return p.apply(this,arguments)}return t}()}}}},97656:function(v,y,e){"use strict";e.r(y),e.d(y,{default:function(){return $}});var f=e(26068),x=e.n(f),h=e(67825),P=e.n(h),o=e(75271),g={button:"AyHMn4pptwgAqTM0zVxe",small:"mtziivfRPkRk_hPU_E8r",default:"CH0d2t1M7c0F2z59aWp3",large:"RH0k6h4jVrUDWtwndzsD",primary:"DPc0H8GPQ0xHQRlthXLJ",disabled:"tsWfJ_Ys0PMwNuyfv9ZE",dashed:"IioY1o_nDcycA39jljNu",text:"uXPLhO_cvecV4slBdUG9",link:"dEu3aIhxJygUwZzIAxyd"},m=e(52676),u=["type","size","disabled","children","onClick","className","style","htmlType"],C=function(t){var r=t.type,a=r===void 0?"default":r,l=t.size,i=l===void 0?"default":l,n=t.disabled,c=n===void 0?!1:n,I=t.children,s=t.onClick,d=t.className,A=d===void 0?"":d,b=t.style,O=b===void 0?{}:b,B=t.htmlType,R=B===void 0?"button":B,D=P()(t,u),M=function(){var E=[g.button];return E.push(g[a]),E.push(g[i]),c&&E.push(g.disabled),A&&E.push(A),E.join(" ")},L=function(){!c&&s&&s()};return(0,m.jsx)("button",x()(x()({type:R==="submit"?"submit":R==="reset"?"reset":"button",className:M(),style:O,disabled:c,onClick:L},D),{},{children:I}))},$=C},85157:function(v,y,e){"use strict";e.r(y),e.d(y,{texts:function(){return f}});const f=[{value:"\u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u5E93\u7684\u884C\u4E3A\u548C\u6837\u5F0F\u3002",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"prefixCls",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"'brickd'",paraId:1,tocIndex:6},{value:"\u7EC4\u4EF6\u524D\u7F00\u7C7B\u540D",paraId:1,tocIndex:6},{value:"theme",paraId:1,tocIndex:6},{value:"'light' | 'dark'",paraId:1,tocIndex:6},{value:"'light'",paraId:1,tocIndex:6},{value:"\u4E3B\u9898\u6A21\u5F0F",paraId:1,tocIndex:6},{value:"locale",paraId:1,tocIndex:6},{value:"any",paraId:1,tocIndex:6},{value:"{}",paraId:1,tocIndex:6},{value:"\u56FD\u9645\u5316\u914D\u7F6E",paraId:1,tocIndex:6},{value:"children",paraId:1,tocIndex:6},{value:"ReactNode",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"\u5B50\u5143\u7D20",paraId:1,tocIndex:6},{value:"className",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"''",paraId:1,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:6},{value:"style",paraId:1,tocIndex:6},{value:"React.CSSProperties",paraId:1,tocIndex:6},{value:"{}",paraId:1,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:1,tocIndex:6},{value:"ConfigProvider",paraId:2,tocIndex:7},{value:" \u63D0\u4F9B\u4E86 ",paraId:2,tocIndex:7},{value:"useConfig",paraId:2,tocIndex:7},{value:" Hook\uFF0C\u7528\u4E8E\u5728\u5B50\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u914D\u7F6E\u4FE1\u606F\uFF1A",paraId:2,tocIndex:7}]},27045:function(v,y){"use strict";y.Z=`import React from 'react';
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

export default Button;`},67825:function(v,y,e){var f=e(64382);function x(h,P){if(h==null)return{};var o=f(h,P),g,m;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);for(m=0;m<u.length;m++)g=u[m],!(P.indexOf(g)>=0)&&Object.prototype.propertyIsEnumerable.call(h,g)&&(o[g]=h[g])}return o}v.exports=x,v.exports.__esModule=!0,v.exports.default=v.exports},64382:function(v){function y(e,f){if(e==null)return{};var x={},h=Object.keys(e),P,o;for(o=0;o<h.length;o++)P=h[o],!(f.indexOf(P)>=0)&&(x[P]=e[P]);return x}v.exports=y,v.exports.__esModule=!0,v.exports.default=v.exports}}]);
