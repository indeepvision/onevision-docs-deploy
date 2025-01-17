"use strict";(self.webpackChunk_indeepvision_onevision_docs=self.webpackChunk_indeepvision_onevision_docs||[]).push([[4066],{876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(2784);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(a),c=l,g=m["".concat(u,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=a(7896),l=(a(2784),a(876));const r={sidebar_position:6},i="MES",s={unversionedId:"programming/libraries/mes",id:"programming/libraries/mes",title:"MES",description:"The MES module provides functions to interact with the MES (Manufacturing Execution System) service. These functions facilitate operations such as adding, checking, retrieving, and removing units from the MES service.",source:"@site/docs/programming/3_libraries/5-mes.md",sourceDirName:"programming/3_libraries",slug:"/programming/libraries/mes",permalink:"/onevision/docs/programming/libraries/mes",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"programmingSidebar",previous:{title:"Visualization",permalink:"/onevision/docs/programming/libraries/visualization"},next:{title:"FS",permalink:"/onevision/docs/programming/libraries/fs"}},u={},o=[{value:"addUnit()",id:"addunit",level:3},{value:"hasUnit()",id:"hasunit",level:3},{value:"getUnit()",id:"getunit",level:3},{value:"removeUnit()",id:"removeunit",level:3},{value:"Unit",id:"unit",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:2},{value:"setSerial()",id:"setserial",level:3},{value:"getSerial()",id:"getserial",level:3},{value:"setModel()",id:"setmodel",level:3},{value:"getModel()",id:"getmodel",level:3},{value:"setBatch()",id:"setbatch",level:3},{value:"getBatch()",id:"getbatch",level:3},{value:"getProject()",id:"getproject",level:3},{value:"setUserId()",id:"setuserid",level:3},{value:"getUserId()",id:"getuserid",level:3},{value:"getCreationDate()",id:"getcreationdate",level:3},{value:"getModificationDate()",id:"getmodificationdate",level:3},{value:"Static Methods",id:"static-methods",level:2},{value:"Unit.createAutoSerial()",id:"unitcreateautoserial",level:3},{value:"Result Methods",id:"result-methods",level:2},{value:"addResult()",id:"addresult",level:3},{value:"getResult()",id:"getresult",level:3},{value:"hasResult()",id:"hasresult",level:3},{value:"removeResult()",id:"removeresult",level:3},{value:"listResults()",id:"listresults",level:3},{value:"Capture Methods",id:"capture-methods",level:2},{value:"addCapture()",id:"addcapture",level:3},{value:"getCapture()",id:"getcapture",level:3},{value:"hasCapture()",id:"hascapture",level:3},{value:"removeCapture()",id:"removecapture",level:3},{value:"listCaptures()",id:"listcaptures",level:3},{value:"Capture",id:"capture",level:2},{value:"Constructors",id:"constructors-1",level:3},{value:"Methods",id:"methods-1",level:2},{value:"setName()",id:"setname",level:3},{value:"getName()",id:"getname",level:3},{value:"setImage()",id:"setimage",level:3},{value:"getImage()",id:"getimage",level:3},{value:"addVisionElement()",id:"addvisionelement",level:3},{value:"hasVisionElement()",id:"hasvisionelement",level:3},{value:"removeVisionElement()",id:"removevisionelement",level:3},{value:"hasLabel()",id:"haslabel",level:3},{value:"removeLabel()",id:"removelabel",level:3},{value:"getLabel()",id:"getlabel",level:3},{value:"setAcquisitionTime()",id:"setacquisitiontime",level:3},{value:"getAcquisitionTime()",id:"getacquisitiontime",level:3},{value:"setComputationTime()",id:"setcomputationtime",level:3},{value:"getComputationTime()",id:"getcomputationtime",level:3},{value:"setLatency()",id:"setlatency",level:3},{value:"getLatency()",id:"getlatency",level:3},{value:"setCycleTime()",id:"setcycletime",level:3},{value:"getCycleTime()",id:"getcycletime",level:3},{value:"setCaptureResult()",id:"setcaptureresult",level:3},{value:"setCaptureColor()",id:"setcapturecolor",level:3},{value:"addProperty()",id:"addproperty",level:3},{value:"hasProperty()",id:"hasproperty",level:3},{value:"getProperty()",id:"getproperty",level:3},{value:"removeProperty()",id:"removeproperty",level:3}],p={toc:o},m="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mes"},"MES"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"MES")," module provides functions to interact with the MES (Manufacturing Execution System) service. These functions facilitate operations such as adding, checking, retrieving, and removing units from the MES service."),(0,l.kt)("h3",{id:"addunit"},"addUnit()"),(0,l.kt)("p",null,"Adds a unit to the MES service and returns the unit ID."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"addUnit(unit: string): Promise<string>;\n")),(0,l.kt)("h3",{id:"hasunit"},"hasUnit()"),(0,l.kt)("p",null,"Checks if the MES service has a unit with the given unit ID."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"hasUnit(unitId: string): Promise<boolean>;\n")),(0,l.kt)("h3",{id:"getunit"},"getUnit()"),(0,l.kt)("p",null,"Retrieves a unit from the MES service based on its unit ID."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getUnit(unitId: string): Promise<any>;\n")),(0,l.kt)("h3",{id:"removeunit"},"removeUnit()"),(0,l.kt)("p",null,"Removes a unit from the MES service given its unit ID."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"removeUnit(unitId: string): Promise<void>;\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"unit"},"Unit"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Unit")," object represents a unit in the MES service. It defines various methods for interacting with unit properties, results, and captures."),(0,l.kt)("h3",{id:"constructors"},"Constructors"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Unit(): Unit;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Unit(serial: string): Unit;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Unit(capture: Capture): Unit;\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"setserial"},"setSerial()"),(0,l.kt)("p",null,"Sets the serial number of the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setSerial(serial: string): void;\n")),(0,l.kt)("h3",{id:"getserial"},"getSerial()"),(0,l.kt)("p",null,"Gets the serial number of the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getSerial(): string;\n")),(0,l.kt)("h3",{id:"setmodel"},"setModel()"),(0,l.kt)("p",null,"Sets the model of the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setModel(model: string): void;\n")),(0,l.kt)("h3",{id:"getmodel"},"getModel()"),(0,l.kt)("p",null,"Gets the model of the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getModel(): string;\n")),(0,l.kt)("h3",{id:"setbatch"},"setBatch()"),(0,l.kt)("p",null,"Sets the batch of the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setBatch(batch: string): void;\n")),(0,l.kt)("h3",{id:"getbatch"},"getBatch()"),(0,l.kt)("p",null,"Gets the batch of the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getBatch(): string;\n")),(0,l.kt)("h3",{id:"getproject"},"getProject()"),(0,l.kt)("p",null,"Gets the project of the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getProject(): string;\n")),(0,l.kt)("h3",{id:"setuserid"},"setUserId()"),(0,l.kt)("p",null,"Sets the user ID of the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setUserId(userId: string): void;\n")),(0,l.kt)("h3",{id:"getuserid"},"getUserId()"),(0,l.kt)("p",null,"Gets the user ID of the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getUserId(): string;\n")),(0,l.kt)("h3",{id:"getcreationdate"},"getCreationDate()"),(0,l.kt)("p",null,"Gets the creation date of the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getCreationDate(): number;\n")),(0,l.kt)("h3",{id:"getmodificationdate"},"getModificationDate()"),(0,l.kt)("p",null,"Gets the last modification date of the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getModificationDate(): number;\n")),(0,l.kt)("h2",{id:"static-methods"},"Static Methods"),(0,l.kt)("h3",{id:"unitcreateautoserial"},"Unit.createAutoSerial()"),(0,l.kt)("p",null,"Creates a new serial number for a unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Unit.createAutoSerial(): string;\n")),(0,l.kt)("h2",{id:"result-methods"},"Result Methods"),(0,l.kt)("h3",{id:"addresult"},"addResult()"),(0,l.kt)("p",null,"Adds a result to the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"addResult(resultName: string, value: any): void;\n")),(0,l.kt)("h3",{id:"getresult"},"getResult()"),(0,l.kt)("p",null,"Gets the value of a result from the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getResult(resultName: string): any;\n")),(0,l.kt)("h3",{id:"hasresult"},"hasResult()"),(0,l.kt)("p",null,"Checks if the unit has a specific result."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"hasResult(resultName: string): boolean;\n")),(0,l.kt)("h3",{id:"removeresult"},"removeResult()"),(0,l.kt)("p",null,"Removes a result from the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"removeResult(resultName: string): void;\n")),(0,l.kt)("h3",{id:"listresults"},"listResults()"),(0,l.kt)("p",null,"Lists all results of the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"listResults(): string[];\n")),(0,l.kt)("h2",{id:"capture-methods"},"Capture Methods"),(0,l.kt)("h3",{id:"addcapture"},"addCapture()"),(0,l.kt)("p",null,"Adds a capture to the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"addCapture(capture: Capture): void;\n")),(0,l.kt)("h3",{id:"getcapture"},"getCapture()"),(0,l.kt)("p",null,"Gets a capture from the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getCapture(captureName: string): Capture;\n")),(0,l.kt)("h3",{id:"hascapture"},"hasCapture()"),(0,l.kt)("p",null,"Checks if the unit has a specific capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"hasCapture(captureName: string): boolean;\n")),(0,l.kt)("h3",{id:"removecapture"},"removeCapture()"),(0,l.kt)("p",null,"Removes a capture from the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"removeCapture(captureName: string): void;\n")),(0,l.kt)("h3",{id:"listcaptures"},"listCaptures()"),(0,l.kt)("p",null,"Lists all captures of the unit."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"listCaptures(): string[];\n")),(0,l.kt)("h2",{id:"capture"},"Capture"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Capture")," object represents a captured image with associated information. It defines methods for managing properties, vision elements, and time-related data."),(0,l.kt)("h3",{id:"constructors-1"},"Constructors"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Capture(image: Image, name: string): captureInstance;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Capture(image: Image): captureInstance;\n")),(0,l.kt)("h2",{id:"methods-1"},"Methods"),(0,l.kt)("h3",{id:"setname"},"setName()"),(0,l.kt)("p",null,"Sets the name of the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setName(name: string): void;\n")),(0,l.kt)("h3",{id:"getname"},"getName()"),(0,l.kt)("p",null,"Returns the name of the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getName(): string;\n")),(0,l.kt)("h3",{id:"setimage"},"setImage()"),(0,l.kt)("p",null,"Sets the image of the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setImage(image: Image): void;\n")),(0,l.kt)("h3",{id:"getimage"},"getImage()"),(0,l.kt)("p",null,"Returns the image of the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getImage(): Image;\n")),(0,l.kt)("h3",{id:"addvisionelement"},"addVisionElement()"),(0,l.kt)("p",null,"Adds a vision element to the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"addVisionElement(visionElement: VisionElement, label: string): void;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"addVisionElement(visionElement: VisionElement): void;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"addVisionElement(visionElement: VisionElement[], label: string): void;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"addVisionElement(visionElement: VisionElement[]): void;\n")),(0,l.kt)("h3",{id:"hasvisionelement"},"hasVisionElement()"),(0,l.kt)("p",null,"Checks if the capture has the provided vision element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"hasVisionElement(visionElement: VisionElement): boolean;\n")),(0,l.kt)("h3",{id:"removevisionelement"},"removeVisionElement()"),(0,l.kt)("p",null,"Removes the provided vision element from the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"removeVisionElement(visionElement: VisionElement): void;\n")),(0,l.kt)("h3",{id:"haslabel"},"hasLabel()"),(0,l.kt)("p",null,"Checks if the capture has the provided label in its dictionary."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"hasLabel(label: string): boolean;\n")),(0,l.kt)("h3",{id:"removelabel"},"removeLabel()"),(0,l.kt)("p",null,"Removes the provided label from the capture's dictionary."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"removeLabel(label: string): void;\n")),(0,l.kt)("h3",{id:"getlabel"},"getLabel()"),(0,l.kt)("p",null,"Returns the vision elements associated with the provided label."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getLabel(label: string): VisionElement[];\n")),(0,l.kt)("h3",{id:"setacquisitiontime"},"setAcquisitionTime()"),(0,l.kt)("p",null,"Sets the acquisition time for the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setAcquisitionTime(time: number): void;\n")),(0,l.kt)("h3",{id:"getacquisitiontime"},"getAcquisitionTime()"),(0,l.kt)("p",null,"Returns the acquisition time of the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getAcquisitionTime(): number;\n")),(0,l.kt)("h3",{id:"setcomputationtime"},"setComputationTime()"),(0,l.kt)("p",null,"Sets the computation time for the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setComputationTime(time: number): void;\n")),(0,l.kt)("h3",{id:"getcomputationtime"},"getComputationTime()"),(0,l.kt)("p",null,"Returns the computation time of the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getComputationTime(): number;\n")),(0,l.kt)("h3",{id:"setlatency"},"setLatency()"),(0,l.kt)("p",null,"Sets the latency time for the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setLatency(time: number): void;\n")),(0,l.kt)("h3",{id:"getlatency"},"getLatency()"),(0,l.kt)("p",null,"Returns the latency time of the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getLatency(): number;\n")),(0,l.kt)("h3",{id:"setcycletime"},"setCycleTime()"),(0,l.kt)("p",null,"Sets the cycle time for the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setCycleTime(time: number): void;\n")),(0,l.kt)("h3",{id:"getcycletime"},"getCycleTime()"),(0,l.kt)("p",null,"Returns the cycle time of the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getCycleTime(): number;\n")),(0,l.kt)("h3",{id:"setcaptureresult"},"setCaptureResult()"),(0,l.kt)("p",null,"Sets the result for the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setCaptureResult(result: string): void;\n")),(0,l.kt)("h3",{id:"setcapturecolor"},"setCaptureColor()"),(0,l.kt)("p",null,"Sets the color for the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"setCaptureColor(color: string): void;\n")),(0,l.kt)("h3",{id:"addproperty"},"addProperty()"),(0,l.kt)("p",null,"Sets a property to the capture."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"addProperty(name: string, value: string): void;\n")),(0,l.kt)("h3",{id:"hasproperty"},"hasProperty()"),(0,l.kt)("p",null,"Checks if the capture has a property with the given name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"hasProperty(name: string): boolean;\n")),(0,l.kt)("h3",{id:"getproperty"},"getProperty()"),(0,l.kt)("p",null,"Returns the value of the property with the given name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getProperty(name: string): string;\n")),(0,l.kt)("h3",{id:"removeproperty"},"removeProperty()"),(0,l.kt)("p",null,"Removes the property with the given name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"removeProperty(name: string): void;\n")))}d.isMDXComponent=!0}}]);