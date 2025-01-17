"use strict";(self.webpackChunk_indeepvision_onevision_docs=self.webpackChunk_indeepvision_onevision_docs||[]).push([[341],{876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(2784);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=l,v=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(v,i(i({ref:n},p),{},{components:t})):r.createElement(v,i({ref:n},p))}));function v(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2110:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(7896),l=(t(2784),t(876));const a={sidebar_position:13},i="Ellipse2d",o={unversionedId:"programming/vision_elements/elements/ellipse2d",id:"programming/vision_elements/elements/ellipse2d",title:"Ellipse2d",description:"The Ellipse2d class describes an ellipse in a plane. It is derived from the VisionElement base class.",source:"@site/docs/programming/4_vision_elements/2_elements/13-ellipse2d.md",sourceDirName:"programming/4_vision_elements/2_elements",slug:"/programming/vision_elements/elements/ellipse2d",permalink:"/onevision/docs/programming/vision_elements/elements/ellipse2d",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"programmingSidebar",previous:{title:"Boolean",permalink:"/onevision/docs/programming/vision_elements/elements/boolean"},next:{title:"Histogram",permalink:"/onevision/docs/programming/vision_elements/elements/histogram"}},s={},c=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>center()</code>",id:"center",level:3},{value:"<code>isValid()</code>",id:"isvalid",level:3},{value:"Value",id:"value",level:2},{value:"<code>centerX</code>",id:"centerx",level:3},{value:"<code>centerY</code>",id:"centery",level:3},{value:"<code>diameterA</code>",id:"diametera",level:3},{value:"<code>diameterB</code>",id:"diameterb",level:3},{value:"<code>angle</code>",id:"angle",level:3},{value:"Props",id:"props",level:2},{value:"<code>color</code>",id:"color",level:3}],p={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ellipse2d"},"Ellipse2d"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Ellipse2d")," class describes an ellipse in a plane. It is derived from the ",(0,l.kt)("a",{parentName:"p",href:"./vision-element"},"VisionElement")," base class."),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("p",null,"Empty constructor."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-onevision"},"new Ellipse2d(): Ellipse2d;\n")),(0,l.kt)("p",null,"Constructor with the coordinates of the center, the major and minor diameters, and the angle of rotation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-onevision"},"new Ellipse2d(centerX: number, centerY: number, diameterA: number, diameterB: number, angle?: number);\n")),(0,l.kt)("p",null,"Constructor with the center, the major and minor diameters, and the angle of rotation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-onevision"},"new Ellipse2d(center: Point2d, diameterA: number, diameterB: number, angle?: number);\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"center"},(0,l.kt)("inlineCode",{parentName:"h3"},"center()")),(0,l.kt)("p",null,"Returns the center of the ellipse as a new point."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-onevision"},"center(): Point2d;\n")),(0,l.kt)("h3",{id:"isvalid"},(0,l.kt)("inlineCode",{parentName:"h3"},"isValid()")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the ellipse values are valid."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-onevision"},"isValid(): boolean;\n")),(0,l.kt)("h2",{id:"value"},"Value"),(0,l.kt)("h3",{id:"centerx"},(0,l.kt)("inlineCode",{parentName:"h3"},"centerX")),(0,l.kt)("p",null,"The X coordinate of the center of the ellipse."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-onevision"},"centerX: number;\n")),(0,l.kt)("h3",{id:"centery"},(0,l.kt)("inlineCode",{parentName:"h3"},"centerY")),(0,l.kt)("p",null,"The Y coordinate of the center of the ellipse."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-onevision"},"centerY: number;\n")),(0,l.kt)("h3",{id:"diametera"},(0,l.kt)("inlineCode",{parentName:"h3"},"diameterA")),(0,l.kt)("p",null,"The diameter of the major axis."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-onevision"},"diameterA: number;\n")),(0,l.kt)("h3",{id:"diameterb"},(0,l.kt)("inlineCode",{parentName:"h3"},"diameterB")),(0,l.kt)("p",null,"The diameter of the minor axis."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-onevision"},"diameterB: number;\n")),(0,l.kt)("h3",{id:"angle"},(0,l.kt)("inlineCode",{parentName:"h3"},"angle")),(0,l.kt)("p",null,"The angle between the major axis and the X axis."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-onevision"},"angle: number;\n")),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"color"},(0,l.kt)("inlineCode",{parentName:"h3"},"color")),(0,l.kt)("p",null,"The color of the ellipse in hexadecimal format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-onevision"},"color: string;\n")))}m.isMDXComponent=!0}}]);