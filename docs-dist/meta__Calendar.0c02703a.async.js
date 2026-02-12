(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[9148,7656],{70732:function(c,p,e){"use strict";var h;e.r(p),e.d(p,{demos:function(){return O}});var x=e(48305),v=e.n(x),y=e(90228),r=e.n(y),f=e(87999),i=e.n(f),l=e(75271),E=e(97656),O={"calendar-demo-0":{component:l.memo(l.lazy(i()(r()().mark(function o(){var t,s,d;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=function(){return l.createElement("div",{style:{width:"300px"}},l.createElement(s,null))},a.next=3,e.e(7140).then(e.bind(e,17140));case 3:return t=a.sent,s=t.default,a.abrupt("return",{default:d});case 6:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"calendar-demo-0",refAtomIds:["Calendar"],dependencies:{"index.tsx":{type:"FILE",value:`import Calendar from './index';

function CalendarBasicDemo() {
  return (
    <div style={{ width: '300px' }}>
      <Calendar />
    </div>
  );
}

export default CalendarBasicDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var o=i()(r()().mark(function s(){var d,u=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,u));case 3:case"end":return n.stop()}},s)}));function t(){return o.apply(this,arguments)}return t}()}},"calendar-demo-1":{component:l.memo(l.lazy(i()(r()().mark(function o(){var t,s,d,u,a,n,I;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return I=function(){var g=u(new Date),C=v()(g,2),B=C[0],D=C[1],P=function(){D(new Date)};return l.createElement("div",{style:{width:"300px"}},l.createElement("div",{style:{marginBottom:"16px"}},l.createElement("p",null,"\u9009\u4E2D\u65E5\u671F\uFF1A",B.toLocaleDateString()),l.createElement(n,{onClick:P},"\u91CD\u7F6E\u65E5\u671F")),l.createElement(s,{value:B,onChange:function(S){return D(S)}}))},m.next=3,e.e(7140).then(e.bind(e,17140));case 3:return t=m.sent,s=t.default,m.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return d=m.sent,u=d.useState,m.next=11,Promise.resolve().then(e.bind(e,97656));case 11:return a=m.sent,n=a.default,m.abrupt("return",{default:I});case 14:case"end":return m.stop()}},o)})))),asset:{type:"BLOCK",id:"calendar-demo-1",refAtomIds:["Calendar"],dependencies:{"index.tsx":{type:"FILE",value:`import Calendar from './index';
import { useState } from 'react';
import Button from '../Button';

function CalendarControlledDemo() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleReset = () => {
    setSelectedDate(new Date());
  };

  return (
    <div style={{ width: '300px' }}>
      <div style={{ marginBottom: '16px' }}>
        <p>\u9009\u4E2D\u65E5\u671F\uFF1A{selectedDate.toLocaleDateString()}</p>
        <Button onClick={handleReset}>\u91CD\u7F6E\u65E5\u671F</Button>
      </div>
      <Calendar
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
}

export default CalendarControlledDemo;`},react:{type:"NPM",value:"18.3.1"},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Button.tsx":E,react:h||(h=e.t(l,2)),"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":E},renderOpts:{compile:function(){var o=i()(r()().mark(function s(){var d,u=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,u));case 3:case"end":return n.stop()}},s)}));function t(){return o.apply(this,arguments)}return t}()}},"calendar-demo-2":{component:l.memo(l.lazy(i()(r()().mark(function o(){var t,s,d;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=function(){var I=new Date;return I.setDate(I.getDate()+7),l.createElement("div",{style:{width:"300px"}},l.createElement(s,{defaultValue:I}))},a.next=3,e.e(7140).then(e.bind(e,17140));case 3:return t=a.sent,s=t.default,a.abrupt("return",{default:d});case 6:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"calendar-demo-2",refAtomIds:["Calendar"],dependencies:{"index.tsx":{type:"FILE",value:`import Calendar from './index';

function CalendarUncontrolledDemo() {
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 7); // \u9ED8\u8BA4\u9009\u4E2D\u4E00\u5468\u540E\u7684\u65E5\u671F

  return (
    <div style={{ width: '300px' }}>
      <Calendar defaultValue={defaultDate} />
    </div>
  );
}

export default CalendarUncontrolledDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var o=i()(r()().mark(function s(){var d,u=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,u));case 3:case"end":return n.stop()}},s)}));function t(){return o.apply(this,arguments)}return t}()}},"calendar-demo-3":{component:l.memo(l.lazy(i()(r()().mark(function o(){var t,s,d;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=function(){return l.createElement("div",{style:{width:"320px"}},l.createElement(s,{style:{borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.15)",overflow:"hidden"}}))},a.next=3,e.e(7140).then(e.bind(e,17140));case 3:return t=a.sent,s=t.default,a.abrupt("return",{default:d});case 6:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"calendar-demo-3",refAtomIds:["Calendar"],dependencies:{"index.tsx":{type:"FILE",value:`import Calendar from './index';

function CalendarCustomStyleDemo() {
  return (
    <div style={{ width: '320px' }}>
      <Calendar
        style={{
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          overflow: 'hidden'
        }}
      />
    </div>
  );
}

export default CalendarCustomStyleDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var o=i()(r()().mark(function s(){var d,u=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,u));case 3:case"end":return n.stop()}},s)}));function t(){return o.apply(this,arguments)}return t}()}}}},97656:function(c,p,e){"use strict";e.r(p),e.d(p,{default:function(){return O}});var h=e(26068),x=e.n(h),v=e(67825),y=e.n(v),r=e(75271),f={button:"AyHMn4pptwgAqTM0zVxe",small:"mtziivfRPkRk_hPU_E8r",default:"CH0d2t1M7c0F2z59aWp3",large:"RH0k6h4jVrUDWtwndzsD",primary:"DPc0H8GPQ0xHQRlthXLJ",disabled:"tsWfJ_Ys0PMwNuyfv9ZE",dashed:"IioY1o_nDcycA39jljNu",text:"uXPLhO_cvecV4slBdUG9",link:"dEu3aIhxJygUwZzIAxyd"},i=e(52676),l=["type","size","disabled","children","onClick","className","style","htmlType"],E=function(t){var s=t.type,d=s===void 0?"default":s,u=t.size,a=u===void 0?"default":u,n=t.disabled,I=n===void 0?!1:n,U=t.children,m=t.onClick,R=t.className,g=R===void 0?"":R,C=t.style,B=C===void 0?{}:C,D=t.htmlType,P=D===void 0?"button":D,M=y()(t,l),S=function(){var b=[f.button];return b.push(f[d]),b.push(f[a]),I&&b.push(f.disabled),g&&b.push(g),b.join(" ")},W=function(){!I&&m&&m()};return(0,i.jsx)("button",x()(x()({type:P==="submit"?"submit":P==="reset"?"reset":"button",className:S(),style:B,disabled:I,onClick:W},M),{},{children:U}))},O=E},71159:function(c,p,e){"use strict";e.r(p),e.d(p,{texts:function(){return h}});const h=[{value:"\u65E5\u5386\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u9009\u62E9\u65E5\u671F\uFF0C\u652F\u6301\u6708\u4EFD\u5BFC\u822A\u548C\u65E5\u671F\u9009\u62E9\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u65E5\u5386\u7528\u6CD5\uFF0C\u663E\u793A\u5F53\u524D\u6708\u4EFD\u7684\u65E5\u5386\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"value",paraId:2,tocIndex:3},{value:" \u548C ",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u5B9E\u73B0\u53D7\u63A7\u6A21\u5F0F\uFF0C\u5916\u90E8\u53EF\u4EE5\u63A7\u5236\u9009\u4E2D\u7684\u65E5\u671F\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"defaultValue",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u8BBE\u7F6E\u9ED8\u8BA4\u9009\u4E2D\u7684\u65E5\u671F\uFF0C\u7EC4\u4EF6\u5185\u90E8\u7BA1\u7406\u72B6\u6001\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"className",paraId:4,tocIndex:5},{value:" \u548C ",paraId:4,tocIndex:5},{value:"style",paraId:4,tocIndex:5},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u65E5\u5386\u6837\u5F0F\u3002",paraId:4,tocIndex:5},{value:"\u5C5E\u6027",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u7C7B\u578B",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"value",paraId:5,tocIndex:7},{value:"\u9009\u4E2D\u7684\u65E5\u671F\uFF08\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:5,tocIndex:7},{value:"Date",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"defaultValue",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u65E5\u671F\uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09",paraId:5,tocIndex:7},{value:"Date",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"onChange",paraId:5,tocIndex:7},{value:"\u65E5\u671F\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:5,tocIndex:7},{value:"(date: Date) => void",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"className",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"''",paraId:5,tocIndex:7},{value:"style",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:7},{value:"React.CSSProperties",paraId:5,tocIndex:7},{value:"{}",paraId:5,tocIndex:7}]},27045:function(c,p){"use strict";p.Z=`import React from 'react';
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

export default Button;`},67825:function(c,p,e){var h=e(64382);function x(v,y){if(v==null)return{};var r=h(v,y),f,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(v);for(i=0;i<l.length;i++)f=l[i],!(y.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(v,f)&&(r[f]=v[f])}return r}c.exports=x,c.exports.__esModule=!0,c.exports.default=c.exports},64382:function(c){function p(e,h){if(e==null)return{};var x={},v=Object.keys(e),y,r;for(r=0;r<v.length;r++)y=v[r],!(h.indexOf(y)>=0)&&(x[y]=e[y]);return x}c.exports=p,c.exports.__esModule=!0,c.exports.default=c.exports}}]);
