"use strict";(self.webpackChunkbrickd=self.webpackChunkbrickd||[]).push([[370,849],{29102:function(v,p,e){e.r(p),e.d(p,{demos:function(){return h}});var I=e(90228),d=e.n(I),g=e(87999),u=e.n(g),a=e(75271),m=e(10849),h={"image-demo-0":{component:a.memo(a.lazy(u()(d()().mark(function s(){var l,i,r;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){return a.createElement("div",null,a.createElement(i,{src:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square",width:300,height:300}))},t.next=3,e.e(6125).then(e.bind(e,66125));case 3:return l=t.sent,i=l.default,t.abrupt("return",{default:r});case 6:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"image-demo-0",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import Image from './index';

function ImageBasicDemo() {
  return (
    <div>
      <Image 
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square" 
        width={300} 
        height={300} 
      />
    </div>
  );
}

export default ImageBasicDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var s=u()(d()().mark(function i(){var r,c=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,c));case 3:case"end":return n.stop()}},i)}));function l(){return s.apply(this,arguments)}return l}()}},"image-demo-1":{component:a.memo(a.lazy(u()(d()().mark(function s(){var l,i,r;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){var o="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square";return a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"}},a.createElement("div",null,a.createElement("p",null,"fill"),a.createElement(i,{src:o,width:200,height:150,fit:"fill"})),a.createElement("div",null,a.createElement("p",null,"contain"),a.createElement(i,{src:o,width:200,height:150,fit:"contain"})),a.createElement("div",null,a.createElement("p",null,"cover"),a.createElement(i,{src:o,width:200,height:150,fit:"cover"})),a.createElement("div",null,a.createElement("p",null,"none"),a.createElement(i,{src:o,width:200,height:150,fit:"none"})),a.createElement("div",null,a.createElement("p",null,"scale-down"),a.createElement(i,{src:o,width:200,height:150,fit:"scale-down"})))},t.next=3,e.e(6125).then(e.bind(e,66125));case 3:return l=t.sent,i=l.default,t.abrupt("return",{default:r});case 6:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"image-demo-1",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import Image from './index';

function ImageFitDemo() {
  const imageSrc = "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square";
  
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
      <div>
        <p>fill</p>
        <Image src={imageSrc} width={200} height={150} fit="fill" />
      </div>
      <div>
        <p>contain</p>
        <Image src={imageSrc} width={200} height={150} fit="contain" />
      </div>
      <div>
        <p>cover</p>
        <Image src={imageSrc} width={200} height={150} fit="cover" />
      </div>
      <div>
        <p>none</p>
        <Image src={imageSrc} width={200} height={150} fit="none" />
      </div>
      <div>
        <p>scale-down</p>
        <Image src={imageSrc} width={200} height={150} fit="scale-down" />
      </div>
    </div>
  );
}

export default ImageFitDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var s=u()(d()().mark(function i(){var r,c=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,c));case 3:case"end":return n.stop()}},i)}));function l(){return s.apply(this,arguments)}return l}()}},"image-demo-2":{component:a.memo(a.lazy(u()(d()().mark(function s(){var l,i,r;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){return a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"100vh"}},a.createElement("div",null,a.createElement("p",null,"\u6EDA\u52A8\u5230\u6B64\u5904\u52A0\u8F7D\u56FE\u7247"),a.createElement(i,{src:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square",width:300,height:300,lazy:!0})),a.createElement("div",null,a.createElement("p",null,"\u6EDA\u52A8\u5230\u6B64\u5904\u52A0\u8F7D\u56FE\u7247"),a.createElement(i,{src:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=square",width:300,height:300,lazy:!0})))},t.next=3,e.e(6125).then(e.bind(e,66125));case 3:return l=t.sent,i=l.default,t.abrupt("return",{default:r});case 6:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"image-demo-2",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import Image from './index';

function ImageLazyDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '100vh' }}>
      <div>
        <p>\u6EDA\u52A8\u5230\u6B64\u5904\u52A0\u8F7D\u56FE\u7247</p>
        <Image 
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square" 
          width={300} 
          height={300} 
          lazy
        />
      </div>
      <div>
        <p>\u6EDA\u52A8\u5230\u6B64\u5904\u52A0\u8F7D\u56FE\u7247</p>
        <Image 
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20city%20skyline%20at%20sunset&image_size=square" 
          width={300} 
          height={300} 
          lazy
        />
      </div>
    </div>
  );
}

export default ImageLazyDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var s=u()(d()().mark(function i(){var r,c=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,c));case 3:case"end":return n.stop()}},i)}));function l(){return s.apply(this,arguments)}return l}()}},"image-demo-3":{component:a.memo(a.lazy(u()(d()().mark(function s(){var l,i,r,c,t;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=function(){return a.createElement("div",null,a.createElement(i,{src:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square",width:300,height:300,placeholder:a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",background:"#f0f0f0"}},a.createElement(c,{type:"loading",spin:!0,size:32}))}))},o.next=3,e.e(6125).then(e.bind(e,66125));case 3:return l=o.sent,i=l.default,o.next=7,Promise.resolve().then(e.bind(e,10849));case 7:return r=o.sent,c=r.default,o.abrupt("return",{default:t});case 10:case"end":return o.stop()}},s)})))),asset:{type:"BLOCK",id:"image-demo-3",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import Image from './index';
import Icon from '../Icon';

function ImagePlaceholderDemo() {
  return (
    <div>
      <Image 
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square" 
        width={300} 
        height={300} 
        placeholder={
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '100%', 
            height: '100%', 
            background: '#f0f0f0' 
          }}>
            <Icon type="loading" spin size={32} />
          </div>
        }
      />
    </div>
  );
}

export default ImagePlaceholderDemo;`},"../Icon.tsx":{type:"FILE",value:e(4487).Z}},entry:"index.tsx"},context:{"../Icon.tsx":m,"/Users/hyde/Documents/Workspace/brickd/src/Icon/index.tsx":m},renderOpts:{compile:function(){var s=u()(d()().mark(function i(){var r,c=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,c));case 3:case"end":return n.stop()}},i)}));function l(){return s.apply(this,arguments)}return l}()}},"image-demo-4":{component:a.memo(a.lazy(u()(d()().mark(function s(){var l,i,r,c,t;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=function(){return a.createElement("div",null,a.createElement(i,{src:"invalid-url",width:300,height:300,fallback:a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",background:"#f0f0f0"}},a.createElement(c,{type:"error",size:32,color:"#ff4d4f"}))}))},o.next=3,e.e(6125).then(e.bind(e,66125));case 3:return l=o.sent,i=l.default,o.next=7,Promise.resolve().then(e.bind(e,10849));case 7:return r=o.sent,c=r.default,o.abrupt("return",{default:t});case 10:case"end":return o.stop()}},s)})))),asset:{type:"BLOCK",id:"image-demo-4",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import Image from './index';
import Icon from '../Icon';

function ImageFallbackDemo() {
  return (
    <div>
      <Image 
        src="invalid-url" 
        width={300} 
        height={300} 
        fallback={
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '100%', 
            height: '100%', 
            background: '#f0f0f0' 
          }}>
            <Icon type="error" size={32} color="#ff4d4f" />
          </div>
        }
      />
    </div>
  );
}

export default ImageFallbackDemo;`},"../Icon.tsx":{type:"FILE",value:e(4487).Z}},entry:"index.tsx"},context:{"../Icon.tsx":m,"/Users/hyde/Documents/Workspace/brickd/src/Icon/index.tsx":m},renderOpts:{compile:function(){var s=u()(d()().mark(function i(){var r,c=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,c));case 3:case"end":return n.stop()}},i)}));function l(){return s.apply(this,arguments)}return l}()}},"image-demo-5":{component:a.memo(a.lazy(u()(d()().mark(function s(){var l,i,r;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){return a.createElement("div",null,a.createElement(i,{src:"https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square",width:300,height:300,style:{borderRadius:"16px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",border:"2px solid #ddd"}}))},t.next=3,e.e(6125).then(e.bind(e,66125));case 3:return l=t.sent,i=l.default,t.abrupt("return",{default:r});case 6:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"image-demo-5",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import Image from './index';

function ImageCustomDemo() {
  return (
    <div>
      <Image 
        src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20landscape%20with%20mountains%20and%20lake&image_size=square" 
        width={300} 
        height={300} 
        style={{
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          border: '2px solid #ddd'
        }}
      />
    </div>
  );
}

export default ImageCustomDemo;`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var s=u()(d()().mark(function i(){var r,c=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3015).then(e.bind(e,33015));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,c));case 3:case"end":return n.stop()}},i)}));function l(){return s.apply(this,arguments)}return l}()}}}},10849:function(v,p,e){e.r(p),e.d(p,{default:function(){return u}});var I={icon:"Vp2lCjtRG4DLDFDyVAez","icon-home":"ulVgW4QY8wUom5HXWOuz","icon-search":"sAK0iM6ix40xZxS_gR3U","icon-user":"WUYhPdCcKFAxSpKQlO3t","icon-settings":"Ztk4ZKfgYg4J2Nmgcsjn","icon-arrow-right":"cxV9ttCA6QQkztjDqSDh","icon-arrow-left":"p5tsuFDYnk8_NAJ2QcNA","icon-arrow-up":"RL0LhMbJK8b1M0jwLYAY","icon-arrow-down":"DHSDUSNKuAoh1JeJkV0v","icon-plus":"hUkP6eCM8EMNXnxmHzG5","icon-minus":"Gf1qVZt2htU07CuTLi1X","icon-close":"shhoQ5dywb0V4tCsLHMN","icon-check":"vaoqDQYPDA0e9UdawIs_","icon-warning":"lMoCQOuGA0cxWF77Hi3f","icon-error":"Jp3AUMQ0eY_UXDunuEpk","icon-info":"MAuILQQxsPI3jjujx1cX",spin:"CiXqHgtYVPkCVvohw7xq"},d=e(52676),g=function(m){var h=m.type,s=m.size,l=s===void 0?"middle":s,i=m.color,r=m.rotate,c=m.spin,t=m.className,n=function(){if(typeof l=="number")return l;switch(l){case"small":return 16;case"large":return 24;case"middle":default:return 20}},o=n();return(0,d.jsx)("i",{className:`
        `.concat(I.icon,`
        `).concat(I[h]||"",`
        `).concat(c?I.spin:"",`
        `).concat(t||"",`
      `),style:{fontSize:"".concat(o,"px"),color:i,transform:r?"rotate(".concat(r,"deg)"):void 0}})},u=g},77235:function(v,p,e){e.r(p),e.d(p,{texts:function(){return I}});const I=[{value:"\u56FE\u7247\u7EC4\u4EF6\u7528\u4E8E\u663E\u793A\u56FE\u7247\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u5927\u5C0F\u3001\u9002\u5E94\u6A21\u5F0F\u3001\u61D2\u52A0\u8F7D\u3001\u5360\u4F4D\u7B26\u548C\u9519\u8BEF\u56DE\u9000\u7B49\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"src",paraId:1,tocIndex:2},{value:" \u5C5E\u6027\u8BBE\u7F6E\u56FE\u7247\u6E90\u3002",paraId:1,tocIndex:2},{value:"\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"fit",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u8BBE\u7F6E\u56FE\u7247\u9002\u5E94\u6A21\u5F0F\uFF0C\u652F\u6301 ",paraId:2,tocIndex:3},{value:"fill",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"contain",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"cover",paraId:2,tocIndex:3},{value:"\u3001",paraId:2,tocIndex:3},{value:"none",paraId:2,tocIndex:3},{value:" \u548C ",paraId:2,tocIndex:3},{value:"scale-down",paraId:2,tocIndex:3},{value:"\u3002",paraId:2,tocIndex:3},{value:"\u901A\u8FC7 ",paraId:3,tocIndex:4},{value:"lazy",paraId:3,tocIndex:4},{value:" \u5C5E\u6027\u542F\u7528\u56FE\u7247\u61D2\u52A0\u8F7D\u3002",paraId:3,tocIndex:4},{value:"\u901A\u8FC7 ",paraId:4,tocIndex:5},{value:"placeholder",paraId:4,tocIndex:5},{value:" \u5C5E\u6027\u8BBE\u7F6E\u56FE\u7247\u52A0\u8F7D\u65F6\u7684\u5360\u4F4D\u7B26\u3002",paraId:4,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:5,tocIndex:6},{value:"fallback",paraId:5,tocIndex:6},{value:" \u5C5E\u6027\u8BBE\u7F6E\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\u7684\u56DE\u9000\u5185\u5BB9\u3002",paraId:5,tocIndex:6},{value:"\u901A\u8FC7 ",paraId:6,tocIndex:7},{value:"className",paraId:6,tocIndex:7},{value:" \u548C ",paraId:6,tocIndex:7},{value:"style",paraId:6,tocIndex:7},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u56FE\u7247\u6837\u5F0F\u3002",paraId:6,tocIndex:7},{value:"\u5C5E\u6027",paraId:7,tocIndex:9},{value:"\u8BF4\u660E",paraId:7,tocIndex:9},{value:"\u7C7B\u578B",paraId:7,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:9},{value:"src",paraId:7,tocIndex:9},{value:"\u56FE\u7247\u6E90",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"alt",paraId:7,tocIndex:9},{value:"\u56FE\u7247\u66FF\u4EE3\u6587\u672C",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"''",paraId:7,tocIndex:9},{value:"width",paraId:7,tocIndex:9},{value:"\u56FE\u7247\u5BBD\u5EA6",paraId:7,tocIndex:9},{value:"number | string",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"height",paraId:7,tocIndex:9},{value:"\u56FE\u7247\u9AD8\u5EA6",paraId:7,tocIndex:9},{value:"number | string",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"fit",paraId:7,tocIndex:9},{value:"\u56FE\u7247\u9002\u5E94\u6A21\u5F0F",paraId:7,tocIndex:9},{value:"'fill' | 'contain' | 'cover' | 'none' | 'scale-down'",paraId:7,tocIndex:9},{value:"'fill'",paraId:7,tocIndex:9},{value:"lazy",paraId:7,tocIndex:9},{value:"\u662F\u5426\u61D2\u52A0\u8F7D",paraId:7,tocIndex:9},{value:"boolean",paraId:7,tocIndex:9},{value:"false",paraId:7,tocIndex:9},{value:"placeholder",paraId:7,tocIndex:9},{value:"\u52A0\u8F7D\u5360\u4F4D\u7B26",paraId:7,tocIndex:9},{value:"React.ReactNode",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"fallback",paraId:7,tocIndex:9},{value:"\u9519\u8BEF\u56DE\u9000",paraId:7,tocIndex:9},{value:"React.ReactNode",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"className",paraId:7,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"''",paraId:7,tocIndex:9},{value:"style",paraId:7,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:7,tocIndex:9},{value:"React.CSSProperties",paraId:7,tocIndex:9},{value:"{}",paraId:7,tocIndex:9}]},4487:function(v,p){p.Z=`
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
