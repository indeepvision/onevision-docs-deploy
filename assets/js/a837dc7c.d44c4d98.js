"use strict";(self.webpackChunk_indeepvision_onevision_docs=self.webpackChunk_indeepvision_onevision_docs||[]).push([[8640],{876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=i,c=u["".concat(p,".").concat(d)]||u[d]||f[d]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(7896),i=(n(2784),n(876));const r={sidebar_position:1},l="Pixel format",o={unversionedId:"programming/vision_elements/image/pixel-format",id:"programming/vision_elements/image/pixel-format",title:"Pixel format",description:"The EPixelFormat enumeration contains the list of all the pixel formats that can be used by Image objects.",source:"@site/docs/programming/4_vision_elements/4_image/1-pixel-format.md",sourceDirName:"programming/4_vision_elements/4_image",slug:"/programming/vision_elements/image/pixel-format",permalink:"/onevision/docs/programming/vision_elements/image/pixel-format",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"programmingSidebar",previous:{title:"Image",permalink:"/onevision/docs/category/image"}},p={},m=[{value:"Main pixel formats",id:"main-pixel-formats",level:2},{value:"Mono8",id:"mono8",level:3},{value:"Mono16",id:"mono16",level:3},{value:"BGR8",id:"bgr8",level:3},{value:"Confidence32f",id:"confidence32f",level:3},{value:"Data32f",id:"data32f",level:3},{value:"Functions",id:"functions",level:2},{value:"<code>pixelformatToString()</code>",id:"pixelformattostring",level:3},{value:"<code>pixelformatFromString()</code>",id:"pixelformatfromstring",level:3},{value:"<code>pixelformatGetDescription()</code>",id:"pixelformatgetdescription",level:3},{value:"<code>pixelformatGetChannelCount()</code>",id:"pixelformatgetchannelcount",level:3},{value:"<code>pixelformatGetBitsPerChannel()</code>",id:"pixelformatgetbitsperchannel",level:3},{value:"<code>pixelformatGetBitsPerPixel()</code>",id:"pixelformatgetbitsperpixel",level:3},{value:"<code>pixelformatGetBytesPerChannel()</code>",id:"pixelformatgetbytesperchannel",level:3},{value:"<code>pixelformatGetBytesPerPixel()</code>",id:"pixelformatgetbytesperpixel",level:3},{value:"<code>pixelformatGetBitsPerChannel()</code>",id:"pixelformatgetbitsperchannel-1",level:3},{value:"<code>pixelformatGetMinValue()</code>",id:"pixelformatgetminvalue",level:3},{value:"<code>pixelformatGetMaxValue()</code>",id:"pixelformatgetmaxvalue",level:3},{value:"<code>pixelformatGetDepth()</code>",id:"pixelformatgetdepth",level:3},{value:"<code>pixelformatIsRangeInfinite()</code>",id:"pixelformatisrangeinfinite",level:3},{value:"<code>pixelDepthMinValue()</code>",id:"pixeldepthminvalue",level:3},{value:"<code>pixelDepthMaxValue()</code>",id:"pixeldepthmaxvalue",level:3},{value:"Types",id:"types",level:2},{value:"<code>EPixelFormat</code>",id:"epixelformat",level:3},{value:"<code>EPixelDepth</code>",id:"epixeldepth",level:3}],s={toc:m},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pixel-format"},"Pixel format"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#epixelformat"},"EPixelFormat")," enumeration contains the list of all the pixel formats that can be used by ",(0,i.kt)("a",{parentName:"p",href:"../elements/image"},"Image")," objects."),(0,i.kt)("p",null,"Each pixel format has an underlying data type, expressed by the ",(0,i.kt)("a",{parentName:"p",href:"#epixeldepth"},"EPixelDepth")," enumeration. The pixel format ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono8")," has a depth of ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint8"),", meaning that each pixel will be represented by a single byte. The pixel format ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono16")," has a depth of ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint16"),", meaning that each pixel will be represented by two bytes."),(0,i.kt)("p",null,"Some ot the pixel formats are equivalent but are used on different situations, and sometimes cannot be used interchangeably. For example, the pixel formats ",(0,i.kt)("inlineCode",{parentName:"p"},"Confidence32f")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Data32f")," are both based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Float32")," data type, but are used in different situations. The pixel format ",(0,i.kt)("inlineCode",{parentName:"p"},"Confidence32f")," is used to express a confidence value between 0 and 1, and some functions will take into account this range. The pixel format ",(0,i.kt)("inlineCode",{parentName:"p"},"Data32f")," can express any ",(0,i.kt)("inlineCode",{parentName:"p"},"Float32")," value, and is used for any data."),(0,i.kt)("h2",{id:"main-pixel-formats"},"Main pixel formats"),(0,i.kt)("p",null,"The following are the most common pixel formats used in OneVision. For a complete list of all pixel formats, see the ",(0,i.kt)("a",{parentName:"p",href:"#epixelformat"},"EPixelFormat")," enumeration."),(0,i.kt)("h3",{id:"mono8"},"Mono8"),(0,i.kt)("p",null,"A single channel image (monochromatic) with 8 bits per pixel. This is the most common pixel format used in OneVision."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Min value")," - 0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max value")," - 255"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pixel depth")," - Uint8")),(0,i.kt)("h3",{id:"mono16"},"Mono16"),(0,i.kt)("p",null,"A single channel image (monochromatic) with 16 bits per pixel. This pixel format is used when higher dynamic range for the image data is needed. For example, it is common to use this pixel format with thermal cameras or 3D cameras to express depth information."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Min value")," - 0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max value")," - 65535"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pixel depth")," - Uint16")),(0,i.kt)("h3",{id:"bgr8"},"BGR8"),(0,i.kt)("p",null,"A three channel image (color) with 8 bits per channel. This pixel format is used to represent color images in the BGR color space.\nThis is the standard color format used in OneVision, instead of RGB8."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Min value")," - 0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max value")," - 255"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pixel depth")," - Uint8"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Number of channels")," - 3")),(0,i.kt)("h3",{id:"confidence32f"},"Confidence32f"),(0,i.kt)("p",null,"A single channel image with a floating-point 32 bits value per pixel. This pixel format is used to represent a confidence value between 0 and 1. This pixel format is widely used as segmentation output of deep learning models in OneVision."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Min value")," - 0.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max value")," - 1.0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pixel depth")," - Float32")),(0,i.kt)("h3",{id:"data32f"},"Data32f"),(0,i.kt)("p",null,"A single channel image with a floating-point 32 bits value per pixel. This pixel format is used to represent any data that can be expressed as a 32 bits floating-point value. This pixel format and its variants are widely used for 3D data manipulation. This pixel format is considered ",(0,i.kt)("strong",{parentName:"p"},"range infinite")," because the limit of the numeric values are the limits of the floating-point representation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Min value")," - -\u221e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max value")," - +\u221e"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pixel depth")," - Float32"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Range infinite")," - Yes")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"pixelformattostring"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelformatToString()")),(0,i.kt)("p",null,"This function returns a string representation of the pixel format. For example, for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono8"),' will return the string "Mono8".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelformatToString(format: EPixelFormat): string;\n")),(0,i.kt)("h3",{id:"pixelformatfromstring"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelformatFromString()")),(0,i.kt)("p",null,'This function returns the pixel format from a string representation. For example, for the string "Mono8" will return the pixel format ',(0,i.kt)("inlineCode",{parentName:"p"},"Mono8"),". If the string is not a valid pixel format, it will throw an error."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function function pixelformatFromString(formatStr: string): EPixelFormat;\n")),(0,i.kt)("h3",{id:"pixelformatgetdescription"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelformatGetDescription()")),(0,i.kt)("p",null,"This function returns a description in english of the pixel format. For example, for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono8"),' will return the string "Monochrome 8-bit".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelformatGetDescription(format: EPixelFormat): string;\n")),(0,i.kt)("h3",{id:"pixelformatgetchannelcount"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelformatGetChannelCount()")),(0,i.kt)("p",null,"This function returns the number of channels of the pixel format. For example, for ",(0,i.kt)("inlineCode",{parentName:"p"},"BGR8")," will return 3, and for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono8")," will return 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelformatGetChannelCount(format: EPixelFormat): number;\n")),(0,i.kt)("h3",{id:"pixelformatgetbitsperchannel"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelformatGetBitsPerChannel()")),(0,i.kt)("p",null,"This function returns the number of bits per channel of the pixel format. For example, for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono8")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BGR8")," will return 8, and for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono16")," will return 16."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelformatGetBitsPerChannel(format: EPixelFormat): number;\n")),(0,i.kt)("h3",{id:"pixelformatgetbitsperpixel"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelformatGetBitsPerPixel()")),(0,i.kt)("p",null,"This function returns the number of bits per pixel of the pixel format. For example, for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono8")," will return 8, and for ",(0,i.kt)("inlineCode",{parentName:"p"},"BGR8")," will return 24."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelformatGetBitsPerPixel(format: EPixelFormat): number;\n")),(0,i.kt)("h3",{id:"pixelformatgetbytesperchannel"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelformatGetBytesPerChannel()")),(0,i.kt)("p",null,"This function returns the number of bytes per channel of the pixel format. For example, for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono8")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BGR8")," will return 1, and for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono16")," will return 2."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelformatGetBytesPerChannel(format: EPixelFormat): number;\n")),(0,i.kt)("h3",{id:"pixelformatgetbytesperpixel"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelformatGetBytesPerPixel()")),(0,i.kt)("p",null,"This function returns the number of bytes per pixel of the pixel format. For example, for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono8")," will return 1, for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono16")," will return 2, and for ",(0,i.kt)("inlineCode",{parentName:"p"},"BGR8")," will return 3."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelformatGetBytesPerPixel(format: EPixelFormat): number;\n")),(0,i.kt)("h3",{id:"pixelformatgetbitsperchannel-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelformatGetBitsPerChannel()")),(0,i.kt)("p",null,"This function returns the number of bits per channel of the pixel format. For example, for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono8")," will return 8, and for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono16")," will return 16."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelformatGetBitsPerChannel(format: EPixelFormat): number;\n")),(0,i.kt)("h3",{id:"pixelformatgetminvalue"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelformatGetMinValue()")),(0,i.kt)("p",null,"This function returns the minimum value that can be represented by the pixel format. For example, for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono8")," will return 0, and for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono16")," will return 0."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelformatGetMinValue(format: EPixelFormat): number;\n")),(0,i.kt)("h3",{id:"pixelformatgetmaxvalue"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelformatGetMaxValue()")),(0,i.kt)("p",null,"This function returns the maximum value that can be represented by the pixel format. For example, for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono8")," will return 255, and for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono16")," will return 65535."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelformatGetMaxValue(format: EPixelFormat): number;\n")),(0,i.kt)("h3",{id:"pixelformatgetdepth"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelformatGetDepth()")),(0,i.kt)("p",null,"This function returns the pixel depth corresponding to the pixel format. The pixel depth represents the underlying data type of the pixel format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelformatGetDepth(format: EPixelFormat): EPixelDepth;\n")),(0,i.kt)("h3",{id:"pixelformatisrangeinfinite"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelformatIsRangeInfinite()")),(0,i.kt)("p",null,"This function returns if the pixel format has an infinite range. For example, for ",(0,i.kt)("inlineCode",{parentName:"p"},"Data32f")," will return true, and for ",(0,i.kt)("inlineCode",{parentName:"p"},"Mono8")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Confidence32f")," will return false."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelformatIsRangeInfinite(format: EPixelFormat): boolean;\n")),(0,i.kt)("h3",{id:"pixeldepthminvalue"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelDepthMinValue()")),(0,i.kt)("p",null,"Returns the minimum value for a pixel depth, possibly different from the pixel format min value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelDepthMinValue(depth: EPixelDepth): number;\n")),(0,i.kt)("h3",{id:"pixeldepthmaxvalue"},(0,i.kt)("inlineCode",{parentName:"h3"},"pixelDepthMaxValue()")),(0,i.kt)("p",null,"Returns the maximum value for a pixel depth, possibly different from the pixel format max value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-onevision"},"function pixelDepthMaxValue(depth: EPixelDepth): number;\n")),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("h3",{id:"epixelformat"},(0,i.kt)("inlineCode",{parentName:"h3"},"EPixelFormat")),(0,i.kt)("p",null,"This is the enumeration of all possible pixel formats. The hexadecimal value (0x) assigned to each pixel format is the convention established by the ",(0,i.kt)("strong",{parentName:"p"},"EMVA")," (European Machine Vision Association) in its ",(0,i.kt)("strong",{parentName:"p"},"PNFC standard")," (Pixel Format Naming Convention)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"InvalidPixelFormat")," - Invalid pixel format, used to represent an unknown pixel format"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mono8")," - Monochrome 8-bit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mono10")," - Monochrome 10-bit unpacked"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mono16")," - Monochrome 16-bit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BGR8")," - Blue-Green-Red 8-bit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BGRa8")," - Blue-Green-Red-alpha 8-bit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RGB8")," - Red-Green-Blue 8-bit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RGBa8")," - Red-Green-Blue-alpha 8-bit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data32f")," - Data 32-bit float"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Coord3D_A32f")," - 3D coordinate A 32-bit floating point"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Coord3D_B32f")," - 3D coordinate B 32-bit floating point"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Coord3D_C32f")," - 3D coordinate C 32-bit floating point"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Coord3D_AC8")," - 3D coordinate A-C 8-bit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Coord3D_ABC32f")," - 3D coordinate A-B-C 32-bit floating point"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Confidence8")," - Confidence 8-bit integer, as a Mono8 ","[0, 255]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Confidence32f")," - Confidence 32-bit float, as Data32f normalized ","[0., 1.]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BayerBG8")," - Bayer Blue-Green 8-bit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BayerGB8")," - Bayer Green-Blue 8-bit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BayerGR8")," - Bayer Green-Red 8-bit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BayerRG8")," - Bayer Red-Green 8-bit")),(0,i.kt)("h3",{id:"epixeldepth"},(0,i.kt)("inlineCode",{parentName:"h3"},"EPixelDepth")),(0,i.kt)("p",null,"This is the enumeration of all possible pixel depths. Pixel depths represent the underlying data type of a pixel format."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"InvalidDataType")," - Invalid data type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Uint8")," - Unsigned 8-bit integer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Uint16")," - Unsigned 16-bit integer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Float32")," - 32-bit floating point")))}f.isMDXComponent=!0}}]);