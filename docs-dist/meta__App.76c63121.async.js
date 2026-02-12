(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[9968,7656],{89021:function(d,u,e){"use strict";e.r(u),e.d(u,{demos:function(){return v}});var h=e(90228),r=e.n(h),i=e(87999),o=e.n(i),t=e(75271),l=e(97656),v={"app-demo-0":{component:t.memo(t.lazy(o()(r()().mark(function p(){var m,y,c,s,f;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return f=function(){return t.createElement(y,null,t.createElement("div",{style:{padding:"20px"}},t.createElement("h1",null,"Welcome to Brickd"),t.createElement("p",null,"This is a simple app container."),t.createElement(s,{type:"primary"},"Click Me")))},n.next=3,e.e(5501).then(e.bind(e,25501));case 3:return m=n.sent,y=m.default,n.next=7,Promise.resolve().then(e.bind(e,97656));case 7:return c=n.sent,s=c.default,n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"app-demo-0",refAtomIds:["App"],dependencies:{"index.tsx":{type:"FILE",value:`import App from './index';
import Button from '../Button';

function AppBasicDemo() {
  return (
    <App>
      <div style={{ padding: '20px' }}>
        <h1>Welcome to Brickd</h1>
        <p>This is a simple app container.</p>
        <Button type="primary">Click Me</Button>
      </div>
    </App>
  );
}

export default AppBasicDemo;`},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":l,"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":l},renderOpts:{compile:function(){var p=o()(r()().mark(function y(){var c,s=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(3015).then(e.bind(e,33015));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,s));case 3:case"end":return a.stop()}},y)}));function m(){return p.apply(this,arguments)}return m}()}},"app-demo-1":{component:t.memo(t.lazy(o()(r()().mark(function p(){var m,y,c,s,f;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return f=function(){return t.createElement(y,{style:{maxWidth:"800px",margin:"0 auto",padding:"20px",background:"#f5f5f5",borderRadius:"8px"}},t.createElement("h1",null,"Custom App Container"),t.createElement("p",null,"This app container has custom styles."),t.createElement(s,{type:"primary"},"Click Me"))},n.next=3,e.e(5501).then(e.bind(e,25501));case 3:return m=n.sent,y=m.default,n.next=7,Promise.resolve().then(e.bind(e,97656));case 7:return c=n.sent,s=c.default,n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"app-demo-1",refAtomIds:["App"],dependencies:{"index.tsx":{type:"FILE",value:`import App from './index';
import Button from '../Button';

function AppCustomStyleDemo() {
  return (
    <App style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
      <h1>Custom App Container</h1>
      <p>This app container has custom styles.</p>
      <Button type="primary">Click Me</Button>
    </App>
  );
}

export default AppCustomStyleDemo;`},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":l,"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":l},renderOpts:{compile:function(){var p=o()(r()().mark(function y(){var c,s=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(3015).then(e.bind(e,33015));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,s));case 3:case"end":return a.stop()}},y)}));function m(){return p.apply(this,arguments)}return m}()}}}},97656:function(d,u,e){"use strict";e.r(u),e.d(u,{default:function(){return y}});var h=e(26068),r=e.n(h),i=e(67825),o=e.n(i),t=e(75271),l={button:"AyHMn4pptwgAqTM0zVxe",small:"mtziivfRPkRk_hPU_E8r",default:"CH0d2t1M7c0F2z59aWp3",large:"RH0k6h4jVrUDWtwndzsD",primary:"DPc0H8GPQ0xHQRlthXLJ",disabled:"tsWfJ_Ys0PMwNuyfv9ZE",dashed:"IioY1o_nDcycA39jljNu",text:"uXPLhO_cvecV4slBdUG9",link:"dEu3aIhxJygUwZzIAxyd"},v=e(52676),p=["type","size","disabled","children","onClick","className","style","htmlType"],m=function(s){var f=s.type,a=f===void 0?"default":f,n=s.size,I=n===void 0?"default":n,B=s.disabled,b=B===void 0?!1:B,O=s.children,C=s.onClick,A=s.className,E=A===void 0?"":A,g=s.style,W=g===void 0?{}:g,D=s.htmlType,P=D===void 0?"button":D,k=o()(s,p),j=function(){var x=[l.button];return x.push(l[a]),x.push(l[I]),b&&x.push(l.disabled),E&&x.push(E),x.join(" ")},M=function(){!b&&C&&C()};return(0,v.jsx)("button",r()(r()({type:P==="submit"?"submit":P==="reset"?"reset":"button",className:j(),style:W,disabled:b,onClick:M},k),{},{children:O}))},y=m},97836:function(d,u,e){"use strict";e.r(u),e.d(u,{texts:function(){return h}});const h=[{value:"\u5E94\u7528\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5305\u88F9\u5E94\u7528\u7684\u6839\u5143\u7D20\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u4F5C\u4E3A\u5E94\u7528\u7684\u6839\u5BB9\u5668\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"className",paraId:2,tocIndex:3},{value:" \u548C ",paraId:2,tocIndex:3},{value:"style",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u5BB9\u5668\u6837\u5F0F\u3002",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"children",paraId:3,tocIndex:5},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:5},{value:"React.ReactNode",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"className",paraId:3,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"''",paraId:3,tocIndex:5},{value:"style",paraId:3,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:3,tocIndex:5},{value:"React.CSSProperties",paraId:3,tocIndex:5},{value:"{}",paraId:3,tocIndex:5}]},27045:function(d,u){"use strict";u.Z=`import React from 'react';
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

export default Button;`},67825:function(d,u,e){var h=e(64382);function r(i,o){if(i==null)return{};var t=h(i,o),l,v;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);for(v=0;v<p.length;v++)l=p[v],!(o.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(i,l)&&(t[l]=i[l])}return t}d.exports=r,d.exports.__esModule=!0,d.exports.default=d.exports},64382:function(d){function u(e,h){if(e==null)return{};var r={},i=Object.keys(e),o,t;for(t=0;t<i.length;t++)o=i[t],!(h.indexOf(o)>=0)&&(r[o]=e[o]);return r}d.exports=u,d.exports.__esModule=!0,d.exports.default=d.exports}}]);
