(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[8499,7656,849],{60184:function(h,v,e){"use strict";var i;e.r(v),e.d(v,{demos:function(){return b}});var U=e(48305),y=e.n(U),x=e(90228),s=e.n(x),I=e(87999),c=e.n(I),p=e(75271),E=e(10849),$=e(97656),b={"upload-demo-0":{component:p.memo(p.lazy(c()(s()().mark(function d(){var l,r,t,o,u;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(7551).then(e.bind(e,47551));case 6:return t=a.sent,o=t.default,u=function(){var g=function(A,R){console.log("File:",A),console.log("File List:",R)},L=function(A,R){console.log("Upload progress:",A,"%")},m=function(A,R){console.log("Upload success:",R)},C=function(A,R){console.log("Upload error:",A)};return r.createElement(o,{action:"/upload",onChange:g,onProgress:L,onSuccess:m,onError:C})},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"upload-demo-0",refAtomIds:["Upload"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  const handleChange = (file: any, fileList: any[]) => {
    console.log('File:', file);
    console.log('File List:', fileList);
  };

  const handleProgress = (percent: number, file: any) => {
    console.log('Upload progress:', percent, '%');
  };

  const handleSuccess = (response: any, file: any) => {
    console.log('Upload success:', file);
  };

  const handleError = (error: any, file: any) => {
    console.log('Upload error:', error);
  };

  return (
    <Upload
      action="/upload"
      onChange={handleChange}
      onProgress={handleProgress}
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var d=c()(s()().mark(function r(){var t,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"upload-demo-1":{component:p.memo(p.lazy(c()(s()().mark(function d(){var l,r,t,o,u;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(7551).then(e.bind(e,47551));case 6:return t=a.sent,o=t.default,u=function(){return r.createElement(o,{action:"/upload",multiple:!0})},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"upload-demo-1",refAtomIds:["Upload"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  return (
    <Upload
      action="/upload"
      multiple
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var d=c()(s()().mark(function r(){var t,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"upload-demo-2":{component:p.memo(p.lazy(c()(s()().mark(function d(){var l,r,t,o,u,n,a,f,g;return s()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=m.sent,r=l.default,m.next=6,e.e(7551).then(e.bind(e,47551));case 6:return t=m.sent,o=t.default,m.next=10,Promise.resolve().then(e.bind(e,97656));case 10:return u=m.sent,n=u.default,m.next=14,Promise.resolve().then(e.bind(e,10849));case 14:return a=m.sent,f=a.default,g=function(){return r.createElement(o,{action:"/upload"},r.createElement(n,{type:"primary"},r.createElement(f,{name:"upload",size:16,style:{marginRight:"8px"}}),"\u70B9\u51FB\u4E0A\u4F20"))},m.abrupt("return",{default:g});case 18:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"upload-demo-2",refAtomIds:["Upload"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Upload from './index';
import Button from '../Button';
import Icon from '../Icon';

const App: React.FC = () => {
  return (
    <Upload action="/upload">
      <Button type="primary">
        <Icon name="upload" size={16} style={{ marginRight: '8px' }} />
        \u70B9\u51FB\u4E0A\u4F20
      </Button>
    </Upload>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"},"../Icon.tsx":{type:"FILE",value:e(4487).Z},"../Button.tsx":{type:"FILE",value:e(27045).Z}},entry:"index.tsx"},context:{"../Icon.tsx":E,"../Button.tsx":$,react:i||(i=e.t(p,2)),"/Users/hyde/Documents/Workspace/brickd/src/Icon/index.tsx":E,"/Users/hyde/Documents/Workspace/brickd/src/Button/index.tsx":$},renderOpts:{compile:function(){var d=c()(s()().mark(function r(){var t,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"upload-demo-3":{component:p.memo(p.lazy(c()(s()().mark(function d(){var l,r,t,o,u;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(7551).then(e.bind(e,47551));case 6:return t=a.sent,o=t.default,u=function(){return r.createElement("div",null,r.createElement(o,{action:"/upload",accept:".jpg,.jpeg,.png,.gif"},"\u4EC5\u652F\u6301\u56FE\u7247\u6587\u4EF6"),r.createElement("br",null),r.createElement(o,{action:"/upload",accept:".pdf"},"\u4EC5\u652F\u6301 PDF \u6587\u4EF6"),r.createElement("br",null),r.createElement(o,{action:"/upload",accept:".doc,.docx"},"\u4EC5\u652F\u6301 Word \u6587\u4EF6"))},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"upload-demo-3",refAtomIds:["Upload"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  return (
    <div>
      <Upload action="/upload" accept=".jpg,.jpeg,.png,.gif">
        \u4EC5\u652F\u6301\u56FE\u7247\u6587\u4EF6
      </Upload>
      <br />
      <Upload action="/upload" accept=".pdf">
        \u4EC5\u652F\u6301 PDF \u6587\u4EF6
      </Upload>
      <br />
      <Upload action="/upload" accept=".doc,.docx">
        \u4EC5\u652F\u6301 Word \u6587\u4EF6
      </Upload>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var d=c()(s()().mark(function r(){var t,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"upload-demo-4":{component:p.memo(p.lazy(c()(s()().mark(function d(){var l,r,t,o,u;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(7551).then(e.bind(e,47551));case 6:return t=a.sent,o=t.default,u=function(){return r.createElement(o,{action:"/upload",multiple:!0,maxCount:3},"\u6700\u591A\u4E0A\u4F20 3 \u4E2A\u6587\u4EF6")},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"upload-demo-4",refAtomIds:["Upload"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  return (
    <Upload
      action="/upload"
      multiple
      maxCount={3}
    >
      \u6700\u591A\u4E0A\u4F20 3 \u4E2A\u6587\u4EF6
    </Upload>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var d=c()(s()().mark(function r(){var t,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"upload-demo-5":{component:p.memo(p.lazy(c()(s()().mark(function d(){var l,r,t,o,u;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(7551).then(e.bind(e,47551));case 6:return t=a.sent,o=t.default,u=function(){return r.createElement(o,{action:"/upload",disabled:!0},"\u7981\u7528\u4E0A\u4F20")},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"upload-demo-5",refAtomIds:["Upload"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  return (
    <Upload
      action="/upload"
      disabled
    >
      \u7981\u7528\u4E0A\u4F20
    </Upload>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var d=c()(s()().mark(function r(){var t,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"upload-demo-6":{component:p.memo(p.lazy(c()(s()().mark(function d(){var l,r,t,o,u,n;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=f.sent,r=l.default,t=l.useState,f.next=7,e.e(7551).then(e.bind(e,47551));case 7:return o=f.sent,u=o.default,n=function(){var L=t([]),m=y()(L,2),C=m[0],P=m[1],A=function(M,O){P(O),console.log("File:",M),console.log("File List:",O)};return r.createElement("div",null,r.createElement(u,{action:"/upload",fileList:C,onChange:A}),r.createElement("p",null,"\u5DF2\u4E0A\u4F20\u6587\u4EF6\u6570\u91CF: ",C.length))},f.abrupt("return",{default:n});case 11:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"upload-demo-6",refAtomIds:["Upload"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import Upload from './index';

const App: React.FC = () => {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = (file: any, list: any[]) => {
    setFileList(list);
    console.log('File:', file);
    console.log('File List:', list);
  };

  return (
    <div>
      <Upload
        action="/upload"
        fileList={fileList}
        onChange={handleChange}
      />
      <p>\u5DF2\u4E0A\u4F20\u6587\u4EF6\u6570\u91CF: {fileList.length}</p>
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var d=c()(s()().mark(function r(){var t,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"upload-demo-7":{component:p.memo(p.lazy(c()(s()().mark(function d(){var l,r,t,o,u;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(7551).then(e.bind(e,47551));case 6:return t=a.sent,o=t.default,u=function(){var g=[{uid:"1",name:"default-file-1.jpg",status:"done",url:"https://via.placeholder.com/100"},{uid:"2",name:"default-file-2.pdf",status:"done",url:"https://via.placeholder.com/100"}];return r.createElement(o,{action:"/upload",defaultFileList:g})},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"upload-demo-7",refAtomIds:["Upload"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  const defaultFileList = [
    {
      uid: '1',
      name: 'default-file-1.jpg',
      status: 'done',
      url: 'https://via.placeholder.com/100',
    },
    {
      uid: '2',
      name: 'default-file-2.pdf',
      status: 'done',
      url: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <Upload
      action="/upload"
      defaultFileList={defaultFileList}
    />
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var d=c()(s()().mark(function r(){var t,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"upload-demo-8":{component:p.memo(p.lazy(c()(s()().mark(function d(){var l,r,t,o,u;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(7551).then(e.bind(e,47551));case 6:return t=a.sent,o=t.default,u=function(){var g=function(m){var C=m.type==="image/jpeg"||m.type==="image/png";if(!C)return alert("\u53EA\u80FD\u4E0A\u4F20 JPG/PNG \u56FE\u7247!"),!1;var P=m.size/1024/1024<2;return P?!0:(alert("\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!"),!1)};return r.createElement(o,{action:"/upload",beforeUpload:g},"\u4E0A\u4F20\u524D\u6821\u9A8C")},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"upload-demo-8",refAtomIds:["Upload"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      alert('\u53EA\u80FD\u4E0A\u4F20 JPG/PNG \u56FE\u7247!');
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      alert('\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 2MB!');
      return false;
    }
    return true;
  };

  return (
    <Upload
      action="/upload"
      beforeUpload={beforeUpload}
    >
      \u4E0A\u4F20\u524D\u6821\u9A8C
    </Upload>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var d=c()(s()().mark(function r(){var t,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}},"upload-demo-9":{component:p.memo(p.lazy(c()(s()().mark(function d(){var l,r,t,o,u;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return l=a.sent,r=l.default,a.next=6,e.e(7551).then(e.bind(e,47551));case 6:return t=a.sent,o=t.default,u=function(){return r.createElement(o,{action:"/upload",style:{border:"2px dashed #1890ff",borderRadius:"8px",padding:"20px",textAlign:"center",backgroundColor:"#f0f8ff",width:"300px"}},"\u81EA\u5B9A\u4E49\u6837\u5F0F\u4E0A\u4F20")},a.abrupt("return",{default:u});case 10:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"upload-demo-9",refAtomIds:["Upload"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import Upload from './index';

const App: React.FC = () => {
  return (
    <Upload
      action="/upload"
      style={{
        border: '2px dashed #1890ff',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f0f8ff',
        width: '300px',
      }}
    >
      \u81EA\u5B9A\u4E49\u6837\u5F0F\u4E0A\u4F20
    </Upload>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2))},renderOpts:{compile:function(){var d=c()(s()().mark(function r(){var t,o=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,o));case 3:case"end":return n.stop()}},r)}));function l(){return d.apply(this,arguments)}return l}()}}}},97656:function(h,v,e){"use strict";e.r(v),e.d(v,{default:function(){return $}});var i=e(26068),U=e.n(i),y=e(67825),x=e.n(y),s=e(75271),I={button:"AyHMn4pptwgAqTM0zVxe",small:"mtziivfRPkRk_hPU_E8r",default:"CH0d2t1M7c0F2z59aWp3",large:"RH0k6h4jVrUDWtwndzsD",primary:"DPc0H8GPQ0xHQRlthXLJ",disabled:"tsWfJ_Ys0PMwNuyfv9ZE",dashed:"IioY1o_nDcycA39jljNu",text:"uXPLhO_cvecV4slBdUG9",link:"dEu3aIhxJygUwZzIAxyd"},c=e(52676),p=["type","size","disabled","children","onClick","className","style","htmlType"],E=function(d){var l=d.type,r=l===void 0?"default":l,t=d.size,o=t===void 0?"default":t,u=d.disabled,n=u===void 0?!1:u,a=d.children,f=d.onClick,g=d.className,L=g===void 0?"":g,m=d.style,C=m===void 0?{}:m,P=d.htmlType,A=P===void 0?"button":P,R=x()(d,p),M=function(){var F=[I.button];return F.push(I[r]),F.push(I[o]),n&&F.push(I.disabled),L&&F.push(L),F.join(" ")},O=function(){!n&&f&&f()};return(0,c.jsx)("button",U()(U()({type:A==="submit"?"submit":A==="reset"?"reset":"button",className:M(),style:C,disabled:n,onClick:O},R),{},{children:a}))},$=E},10849:function(h,v,e){"use strict";e.r(v),e.d(v,{default:function(){return x}});var i={icon:"Vp2lCjtRG4DLDFDyVAez","icon-home":"ulVgW4QY8wUom5HXWOuz","icon-search":"sAK0iM6ix40xZxS_gR3U","icon-user":"WUYhPdCcKFAxSpKQlO3t","icon-settings":"Ztk4ZKfgYg4J2Nmgcsjn","icon-arrow-right":"cxV9ttCA6QQkztjDqSDh","icon-arrow-left":"p5tsuFDYnk8_NAJ2QcNA","icon-arrow-up":"RL0LhMbJK8b1M0jwLYAY","icon-arrow-down":"DHSDUSNKuAoh1JeJkV0v","icon-plus":"hUkP6eCM8EMNXnxmHzG5","icon-minus":"Gf1qVZt2htU07CuTLi1X","icon-close":"shhoQ5dywb0V4tCsLHMN","icon-check":"vaoqDQYPDA0e9UdawIs_","icon-warning":"lMoCQOuGA0cxWF77Hi3f","icon-error":"Jp3AUMQ0eY_UXDunuEpk","icon-info":"MAuILQQxsPI3jjujx1cX",spin:"CiXqHgtYVPkCVvohw7xq"},U=e(52676),y=function(I){var c=I.type,p=I.size,E=p===void 0?"middle":p,$=I.color,b=I.rotate,d=I.spin,l=I.className,r=function(){if(typeof E=="number")return E;switch(E){case"small":return 16;case"large":return 24;case"middle":default:return 20}},t=r();return(0,U.jsx)("i",{className:`
        `.concat(i.icon,`
        `).concat(i[c]||"",`
        `).concat(d?i.spin:"",`
        `).concat(l||"",`
      `),style:{fontSize:"".concat(t,"px"),color:$,transform:b?"rotate(".concat(b,"deg)"):void 0}})},x=y},97001:function(h,v,e){"use strict";e.r(v),e.d(v,{texts:function(){return i}});const i=[{value:"\u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u4E0A\u4F20\u6587\u4EF6\u5230\u670D\u52A1\u5668\u3002",paraId:0,tocIndex:0},{value:"\u6700\u7B80\u5355\u7684\u6587\u4EF6\u4E0A\u4F20\u4F7F\u7528\u65B9\u5F0F\u3002",paraId:1,tocIndex:1},{value:"\u652F\u6301\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6\u3002",paraId:2,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6309\u94AE\u7684\u5185\u5BB9\u3002",paraId:3,tocIndex:3},{value:"\u9650\u5236\u4E0A\u4F20\u6587\u4EF6\u7684\u7C7B\u578B\u3002",paraId:4,tocIndex:4},{value:"\u9650\u5236\u4E0A\u4F20\u6587\u4EF6\u7684\u6570\u91CF\u3002",paraId:5,tocIndex:5},{value:"\u7981\u7528\u7684\u4E0A\u4F20\u7EC4\u4EF6\u3002",paraId:6,tocIndex:6},{value:"\u901A\u8FC7\u72B6\u6001\u63A7\u5236\u4E0A\u4F20\u6587\u4EF6\u5217\u8868\u3002",paraId:7,tocIndex:7},{value:"\u8BBE\u7F6E\u9ED8\u8BA4\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u3002",paraId:8,tocIndex:8},{value:"\u4E0A\u4F20\u524D\u5BF9\u6587\u4EF6\u8FDB\u884C\u6821\u9A8C\u3002",paraId:9,tocIndex:9},{value:"\u901A\u8FC7 className \u548C style \u5C5E\u6027\u81EA\u5B9A\u4E49\u4E0A\u4F20\u7EC4\u4EF6\u6837\u5F0F\u3002",paraId:10,tocIndex:10},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u7C7B\u578B",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"\u8BF4\u660E",paraId:11,tocIndex:12},{value:"action",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"''",paraId:11,tocIndex:12},{value:"\u4E0A\u4F20\u63A5\u53E3\u5730\u5740",paraId:11,tocIndex:12},{value:"method",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"'post'",paraId:11,tocIndex:12},{value:"\u4E0A\u4F20\u65B9\u6CD5",paraId:11,tocIndex:12},{value:"headers",paraId:11,tocIndex:12},{value:"Record<string, string>",paraId:11,tocIndex:12},{value:"{}",paraId:11,tocIndex:12},{value:"\u4E0A\u4F20\u8BF7\u6C42\u5934",paraId:11,tocIndex:12},{value:"data",paraId:11,tocIndex:12},{value:"Record<string, any>",paraId:11,tocIndex:12},{value:"{}",paraId:11,tocIndex:12},{value:"\u4E0A\u4F20\u989D\u5916\u6570\u636E",paraId:11,tocIndex:12},{value:"name",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"'file'",paraId:11,tocIndex:12},{value:"\u4E0A\u4F20\u6587\u4EF6\u5B57\u6BB5\u540D",paraId:11,tocIndex:12},{value:"withCredentials",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"\u662F\u5426\u643A\u5E26\u51ED\u8BC1",paraId:11,tocIndex:12},{value:"multiple",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"\u662F\u5426\u652F\u6301\u591A\u6587\u4EF6\u4E0A\u4F20",paraId:11,tocIndex:12},{value:"accept",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"'*'",paraId:11,tocIndex:12},{value:"\u63A5\u53D7\u7684\u6587\u4EF6\u7C7B\u578B",paraId:11,tocIndex:12},{value:"maxCount",paraId:11,tocIndex:12},{value:"number",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u6700\u5927\u4E0A\u4F20\u6587\u4EF6\u6570\u91CF",paraId:11,tocIndex:12},{value:"disabled",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:12},{value:"beforeUpload",paraId:11,tocIndex:12},{value:"(file: File) => boolean | Promise",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u4E0A\u4F20\u524D\u6821\u9A8C",paraId:11,tocIndex:12},{value:"onChange",paraId:11,tocIndex:12},{value:"(file: UploadFile, fileList: UploadFile[]) => void",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u6587\u4EF6\u72B6\u6001\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:11,tocIndex:12},{value:"onProgress",paraId:11,tocIndex:12},{value:"(percent: number, file: UploadFile) => void",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u4E0A\u4F20\u8FDB\u5EA6\u56DE\u8C03",paraId:11,tocIndex:12},{value:"onSuccess",paraId:11,tocIndex:12},{value:"(response: any, file: UploadFile) => void",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u4E0A\u4F20\u6210\u529F\u56DE\u8C03",paraId:11,tocIndex:12},{value:"onError",paraId:11,tocIndex:12},{value:"(error: any, file: UploadFile) => void",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u4E0A\u4F20\u5931\u8D25\u56DE\u8C03",paraId:11,tocIndex:12},{value:"onRemove",paraId:11,tocIndex:12},{value:"(file: UploadFile) => void",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u6587\u4EF6\u79FB\u9664\u56DE\u8C03",paraId:11,tocIndex:12},{value:"fileList",paraId:11,tocIndex:12},{value:"UploadFile[]",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u53D7\u63A7\u6A21\u5F0F\u4E0B\u7684\u6587\u4EF6\u5217\u8868",paraId:11,tocIndex:12},{value:"defaultFileList",paraId:11,tocIndex:12},{value:"UploadFile[]",paraId:11,tocIndex:12},{value:"[]",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u6587\u4EF6\u5217\u8868",paraId:11,tocIndex:12},{value:"className",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:11,tocIndex:12},{value:"style",paraId:11,tocIndex:12},{value:"React.CSSProperties",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:11,tocIndex:12},{value:"children",paraId:11,tocIndex:12},{value:"React.ReactNode",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6309\u94AE",paraId:11,tocIndex:12},{value:"\u5C5E\u6027",paraId:12,tocIndex:13},{value:"\u7C7B\u578B",paraId:12,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:13},{value:"\u8BF4\u660E",paraId:12,tocIndex:13},{value:"uid",paraId:12,tocIndex:13},{value:"string",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"\u6587\u4EF6\u552F\u4E00\u6807\u8BC6",paraId:12,tocIndex:13},{value:"name",paraId:12,tocIndex:13},{value:"string",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"\u6587\u4EF6\u540D",paraId:12,tocIndex:13},{value:"status",paraId:12,tocIndex:13},{value:"'uploading' | 'done' | 'error' | 'removed'",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"\u6587\u4EF6\u72B6\u6001",paraId:12,tocIndex:13},{value:"url",paraId:12,tocIndex:13},{value:"string",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"\u6587\u4EF6\u4E0A\u4F20\u540E\u7684 URL",paraId:12,tocIndex:13},{value:"percent",paraId:12,tocIndex:13},{value:"number",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"\u4E0A\u4F20\u8FDB\u5EA6\u767E\u5206\u6BD4",paraId:12,tocIndex:13}]},27045:function(h,v){"use strict";v.Z=`import React from 'react';
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

export default Button;`},4487:function(h,v){"use strict";v.Z=`
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
`},67825:function(h,v,e){var i=e(64382);function U(y,x){if(y==null)return{};var s=i(y,x),I,c;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(y);for(c=0;c<p.length;c++)I=p[c],!(x.indexOf(I)>=0)&&Object.prototype.propertyIsEnumerable.call(y,I)&&(s[I]=y[I])}return s}h.exports=U,h.exports.__esModule=!0,h.exports.default=h.exports},64382:function(h){function v(e,i){if(e==null)return{};var U={},y=Object.keys(e),x,s;for(s=0;s<y.length;s++)x=y[s],!(i.indexOf(x)>=0)&&(U[x]=e[x]);return U}h.exports=v,h.exports.__esModule=!0,h.exports.default=h.exports}}]);
