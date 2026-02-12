(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[5051,7656],{47103:function(v,c,e){"use strict";var I;e.r(c),e.d(c,{demos:function(){return P}});var C=e(48305),h=e.n(C),g=e(90228),r=e.n(g),u=e(87999),m=e.n(u),s=e(75271),M=e(9033),x=e(97656),P={"message-demo-0":{component:s.memo(s.lazy(m()(r()().mark(function a(){var d,t,l,o,f,n,i;return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(5233).then(e.bind(e,45233));case 2:return d=p.sent,t=d.default,p.next=6,Promise.resolve().then(e.bind(e,97656));case 6:return l=p.sent,o=l.default,p.next=10,Promise.resolve().then(e.bind(e,9033));case 10:return f=p.sent,n=f.default,i=function(){return s.createElement(n,null,s.createElement(o,{onClick:function(){return t.success("Success message")}},"Success"),s.createElement(o,{onClick:function(){return t.error("Error message")}},"Error"),s.createElement(o,{onClick:function(){return t.info("Info message")}},"Info"),s.createElement(o,{onClick:function(){return t.warning("Warning message")}},"Warning"))},p.abrupt("return",{default:i});case 14:case"end":return p.stop()}},a)})))),asset:{type:"BLOCK",id:"message-demo-0",refAtomIds:["Message"],dependencies:{"index.tsx":{type:"FILE",value:`import Message from './index';
import Button from '../Button';
import Space from '../Space';

const App = () => {
  return (
    <Space>
      <Button onClick={() => Message.success('Success message')}>
        Success
      </Button>
      <Button onClick={() => Message.error('Error message')}>
        Error
      </Button>
      <Button onClick={() => Message.info('Info message')}>
        Info
      </Button>
      <Button onClick={() => Message.warning('Warning message')}>
        Warning
      </Button>
    </Space>
  );
};

export default App;`},"../Space.tsx":{type:"FILE",value:e(81339).Z},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Space.tsx":M,"../Button.tsx":x,"/Users/hyde/Documents/Workspace/brickd/src/Space/index.tsx":M,"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":x},renderOpts:{compile:function(){var a=m()(r()().mark(function t(){var l,o=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,o));case 3:case"end":return n.stop()}},t)}));function d(){return a.apply(this,arguments)}return d}()}},"message-demo-1":{component:s.memo(s.lazy(m()(r()().mark(function a(){var d,t,l,o,f;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(5233).then(e.bind(e,45233));case 2:return d=i.sent,t=d.default,i.next=6,Promise.resolve().then(e.bind(e,97656));case 6:return l=i.sent,o=l.default,f=function(){var p=function(){t.info({content:"Custom message",duration:5e3,showClose:!0,onClose:function(){console.log("Message closed")}})};return s.createElement(o,{onClick:p},"Custom Message")},i.abrupt("return",{default:f});case 10:case"end":return i.stop()}},a)})))),asset:{type:"BLOCK",id:"message-demo-1",refAtomIds:["Message"],dependencies:{"index.tsx":{type:"FILE",value:`import Message from './index';
import Button from '../Button';

const App = () => {
  const showMessage = () => {
    Message.info({
      content: 'Custom message',
      duration: 5000,
      showClose: true,
      onClose: () => {
        console.log('Message closed');
      },
    });
  };

  return <Button onClick={showMessage}>Custom Message</Button>;
};

export default App;`},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":x,"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":x},renderOpts:{compile:function(){var a=m()(r()().mark(function t(){var l,o=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,o));case 3:case"end":return n.stop()}},t)}));function d(){return a.apply(this,arguments)}return d}()}},"message-demo-2":{component:s.memo(s.lazy(m()(r()().mark(function a(){var d,t,l,o,f,n,i,b,p,E;return r()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return d=y.sent,t=d.default,l=d.useState,y.next=7,e.e(5233).then(e.bind(e,45233));case 7:return o=y.sent,f=o.default,y.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return n=y.sent,i=n.default,y.next=15,Promise.resolve().then(e.bind(e,9033));case 15:return b=y.sent,p=b.default,E=function(){var A=l(null),z=h()(A,2),D=z[0],W=z[1],$=function(){var U=f.info({content:"Message that can be closed manually",duration:0});W(U)},S=function(){D&&D.close()},k=function(){f.closeAll()};return t.createElement(p,null,t.createElement(i,{onClick:$},"Show Message"),t.createElement(i,{onClick:S},"Close Message"),t.createElement(i,{onClick:k},"Close All"))},y.abrupt("return",{default:E});case 19:case"end":return y.stop()}},a)})))),asset:{type:"BLOCK",id:"message-demo-2",refAtomIds:["Message"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Message from './index';
import Button from '../Button';
import Space from '../Space';

const App = () => {
  const [messageInstance, setMessageInstance] = useState<any>(null);

  const showMessage = () => {
    const instance = Message.info({
      content: 'Message that can be closed manually',
      duration: 0, // 0 \u8868\u793A\u4E0D\u81EA\u52A8\u5173\u95ED
    });
    setMessageInstance(instance);
  };

  const closeMessage = () => {
    if (messageInstance) {
      messageInstance.close();
    }
  };

  const closeAll = () => {
    Message.closeAll();
  };

  return (
    <Space>
      <Button onClick={showMessage}>Show Message</Button>
      <Button onClick={closeMessage}>Close Message</Button>
      <Button onClick={closeAll}>Close All</Button>
    </Space>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Space.tsx":{type:"FILE",value:e(81339).Z},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Space.tsx":M,"../Button.tsx":x,react:I||(I=e.t(s,2)),"/Users/hyde/Documents/Workspace/brickd/src/Space/index.tsx":M,"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":x},renderOpts:{compile:function(){var a=m()(r()().mark(function t(){var l,o=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,o));case 3:case"end":return n.stop()}},t)}));function d(){return a.apply(this,arguments)}return d}()}}}},97656:function(v,c,e){"use strict";e.r(c),e.d(c,{default:function(){return x}});var I=e(26068),C=e.n(I),h=e(67825),g=e.n(h),r=e(75271),u={button:"AyHMn4pptwgAqTM0zVxe",small:"mtziivfRPkRk_hPU_E8r",default:"CH0d2t1M7c0F2z59aWp3",large:"RH0k6h4jVrUDWtwndzsD",primary:"DPc0H8GPQ0xHQRlthXLJ",disabled:"tsWfJ_Ys0PMwNuyfv9ZE",dashed:"IioY1o_nDcycA39jljNu",text:"uXPLhO_cvecV4slBdUG9",link:"dEu3aIhxJygUwZzIAxyd"},m=e(52676),s=["type","size","disabled","children","onClick","className","style","htmlType"],M=function(a){var d=a.type,t=d===void 0?"default":d,l=a.size,o=l===void 0?"default":l,f=a.disabled,n=f===void 0?!1:f,i=a.children,b=a.onClick,p=a.className,E=p===void 0?"":p,B=a.style,y=B===void 0?{}:B,O=a.htmlType,A=O===void 0?"button":O,z=g()(a,s),D=function(){var S=[u.button];return S.push(u[t]),S.push(u[o]),n&&S.push(u.disabled),E&&S.push(E),S.join(" ")},W=function(){!n&&b&&b()};return(0,m.jsx)("button",C()(C()({type:A==="submit"?"submit":A==="reset"?"reset":"button",className:D(),style:y,disabled:n,onClick:W},z),{},{children:i}))},x=M},9033:function(v,c,e){"use strict";e.r(c),e.d(c,{default:function(){return g}});var I={space:"xzMTV6CIOtYl7ZSsttFu",horizontal:"JNIoeIfmdYah45BlzIab",vertical:"oHesASW9P7Ux2d3EQfP0",wrap:"E1BxJ7Z6K9ASowoc__5X"},C=e(52676),h=function(u){var m=u.direction,s=m===void 0?"horizontal":m,M=u.size,x=M===void 0?"middle":M,P=u.wrap,a=P===void 0?!1:P,d=u.className,t=u.children,l=function(){if(typeof x=="number")return x;switch(x){case"small":return 8;case"large":return 24;case"middle":default:return 16}},o=l();return(0,C.jsx)("div",{className:`
        `.concat(I.space,`
        `).concat(I[s],`
        `).concat(a?I.wrap:"",`
        `).concat(d||"",`
      `),style:{gap:s==="horizontal"?"".concat(o,"px"):void 0,rowGap:s==="vertical"?"".concat(o,"px"):void 0,columnGap:s==="vertical"?void 0:"".concat(o,"px")},children:t})},g=h},13130:function(v,c,e){"use strict";e.r(c),e.d(c,{texts:function(){return I}});const I=[{value:"\u5168\u5C40\u63D0\u793A\uFF0C\u7528\u4E8E\u663E\u793A\u64CD\u4F5C\u53CD\u9988\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:`npm install brickd
`,paraId:1,tocIndex:1},{value:"\u663E\u793A\u6210\u529F\u63D0\u793A",paraId:2,tocIndex:7},{value:"\u663E\u793A\u9519\u8BEF\u63D0\u793A",paraId:3,tocIndex:8},{value:"\u663E\u793A\u4FE1\u606F\u63D0\u793A",paraId:4,tocIndex:9},{value:"\u663E\u793A\u8B66\u544A\u63D0\u793A",paraId:5,tocIndex:10},{value:"\u5173\u95ED\u6240\u6709\u63D0\u793A",paraId:6,tocIndex:11},{value:"\u53C2\u6570",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"\u8BF4\u660E",paraId:7,tocIndex:12},{value:"content",paraId:7,tocIndex:12},{value:"React.ReactNode",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"\u63D0\u793A\u5185\u5BB9",paraId:7,tocIndex:12},{value:"duration",paraId:7,tocIndex:12},{value:"number",paraId:7,tocIndex:12},{value:"3000",paraId:7,tocIndex:12},{value:"\u81EA\u52A8\u5173\u95ED\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09\uFF0C\u8BBE\u7F6E\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED",paraId:7,tocIndex:12},{value:"showClose",paraId:7,tocIndex:12},{value:"boolean",paraId:7,tocIndex:12},{value:"true",paraId:7,tocIndex:12},{value:"\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE",paraId:7,tocIndex:12},{value:"onClose",paraId:7,tocIndex:12},{value:"() => void",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:7,tocIndex:12},{value:"className",paraId:7,tocIndex:12},{value:"string",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:7,tocIndex:12},{value:"style",paraId:7,tocIndex:12},{value:"React.CSSProperties",paraId:7,tocIndex:12},{value:"-",paraId:7,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:7,tocIndex:12},{value:"\u5C5E\u6027",paraId:8,tocIndex:13},{value:"\u7C7B\u578B",paraId:8,tocIndex:13},{value:"\u8BF4\u660E",paraId:8,tocIndex:13},{value:"close",paraId:8,tocIndex:13},{value:"() => void",paraId:8,tocIndex:13},{value:"\u5173\u95ED\u5F53\u524D\u63D0\u793A\u7684\u65B9\u6CD5",paraId:8,tocIndex:13}]},27045:function(v,c){"use strict";c.Z=`import React from 'react';
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

export default Button;`},81339:function(v,c){"use strict";c.Z=`
import styles from './Space.module.css';

interface SpaceProps {
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'middle' | 'large' | number;
  wrap?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Space: React.FC<SpaceProps> = ({
  direction = 'horizontal',
  size = 'middle',
  wrap = false,
  className,
  children,
}) => {
  const getSizeValue = () => {
    if (typeof size === 'number') {
      return size;
    }
    switch (size) {
      case 'small':
        return 8;
      case 'large':
        return 24;
      case 'middle':
      default:
        return 16;
    }
  };

  const sizeValue = getSizeValue();

  return (
    <div
      className={\`
        \${styles.space}
        \${styles[direction]}
        \${wrap ? styles.wrap : ''}
        \${className || ''}
      \`}
      style={{
        gap: direction === 'horizontal' ? \`\${sizeValue}px\` : undefined,
        rowGap: direction === 'vertical' ? \`\${sizeValue}px\` : undefined,
        columnGap: direction === 'vertical' ? undefined : \`\${sizeValue}px\`,
      }}
    >
      {children}
    </div>
  );
};

export default Space;
`},67825:function(v,c,e){var I=e(64382);function C(h,g){if(h==null)return{};var r=I(h,g),u,m;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(h);for(m=0;m<s.length;m++)u=s[m],!(g.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(h,u)&&(r[u]=h[u])}return r}v.exports=C,v.exports.__esModule=!0,v.exports.default=v.exports},64382:function(v){function c(e,I){if(e==null)return{};var C={},h=Object.keys(e),g,r;for(r=0;r<h.length;r++)g=h[r],!(I.indexOf(g)>=0)&&(C[g]=e[g]);return C}v.exports=c,v.exports.__esModule=!0,v.exports.default=v.exports}}]);
