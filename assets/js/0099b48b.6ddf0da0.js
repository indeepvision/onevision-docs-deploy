"use strict";(self.webpackChunk_indeepvision_onevision_docs=self.webpackChunk_indeepvision_onevision_docs||[]).push([[297],{876:(e,n,i)=>{i.d(n,{Zo:()=>u,kt:()=>m});var t=i(2784);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(i),g=a,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||r;return i?t.createElement(m,s(s({ref:n},u),{},{components:i})):t.createElement(m,s({ref:n},u))}));function m(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=i[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},2074:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(7896),a=(i(2784),i(876));const r={sidebar_position:3},s="Dictionaries",o={unversionedId:"programming/language_basics/dictionaries",id:"programming/language_basics/dictionaries",title:"Dictionaries",description:"Just like in TypeScript, dictionaries are objects used to store collections of key-value pairs. They allow you to define and manage data where the keys are not necessarily numerical indices, but rather unique identifiers like strings or particular numbers. This is useful for associating values with specific keys, much like a dictionary associates definitions with words.",source:"@site/docs/programming/2_language_basics/3-dictionaries.md",sourceDirName:"programming/2_language_basics",slug:"/programming/language_basics/dictionaries",permalink:"/onevision/docs/programming/language_basics/dictionaries",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"programmingSidebar",previous:{title:"Arrays",permalink:"/onevision/docs/programming/language_basics/arrays"},next:{title:"Flow control",permalink:"/onevision/docs/programming/language_basics/flow-control"}},c={},l=[{value:"Defining a Dictionary",id:"defining-a-dictionary",level:3},{value:"Initializing dictionaries on creation",id:"initializing-dictionaries-on-creation",level:3},{value:"Accessing and Modifying Dictionary Values",id:"accessing-and-modifying-dictionary-values",level:3},{value:"Creating static dictionaries",id:"creating-static-dictionaries",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Iterating Over Dictionaries",id:"iterating-over-dictionaries",level:3}],u={toc:l},p="wrapper";function d(e){let{components:n,...i}=e;return(0,a.kt)(p,(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dictionaries"},"Dictionaries"),(0,a.kt)("p",null,"Just like in TypeScript, dictionaries are objects used to store collections of key-value pairs. They allow you to define and manage data where the keys are not necessarily numerical indices, but rather unique identifiers like strings or particular numbers. This is useful for associating values with specific keys, much like a dictionary associates definitions with words."),(0,a.kt)("h3",{id:"defining-a-dictionary"},"Defining a Dictionary"),(0,a.kt)("p",null,"You can define a dictionary in OneVision using an object type where the keys are of a specific type (",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") and the values can be of any type. You can easily define a dictionary with a key-value definition using the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"Record"),". For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Defining a dictionary with the keys being strings and the values arrays of numbers. \nvar dict1: Record<string, number[]> = {}\n")),(0,a.kt)("p",null,"You can index a dictionary just like with arrays: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'dict1["element1"] = [1,2,3,4];  \ndict1["element2"] = [5];  \ndict1["element25"] = [8,9,10];  \n')),(0,a.kt)("h3",{id:"initializing-dictionaries-on-creation"},"Initializing dictionaries on creation"),(0,a.kt)("p",null,"Dictionaries can be created by initializing an object with key-value pairs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'var dict2: Record<number, string> = {\n    1: "element1", \n    20: "element20"\n}; \n\ndict2[22] = "element22"; \n')),(0,a.kt)("h3",{id:"accessing-and-modifying-dictionary-values"},"Accessing and Modifying Dictionary Values"),(0,a.kt)("p",null,"You can access and modify dictionary values using the key. Adding new key-value pairs can be done by simply accessing an inexistent key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'var userAges: Record<string, number> = {\n    "Winston Churchill": 90,\n    "Anthony Eden": 79,\n    "Harold Macmillan": 92\n};\n\n// Accessing values\nuserAges["Winston Churchill"]; // Outputs: 30\n\n// Modifying values\nuserAges["Winston Churchill"] = 20;\nuserAges["Winston Churchill"]; // Outputs: 20\n\n// Adding new key-value pairs\nuserAges["Alec Douglas-Home"] = 92;\nuserAges["Alec Douglas-Home"]; // Outputs: 92\n\n// Deleting key-value pairs\nuserAges["Charlie"]; // Outputs: undefined\n')),(0,a.kt)("h3",{id:"creating-static-dictionaries"},"Creating static dictionaries"),(0,a.kt)("p",null,"In OneVision, you can also create static dictionaries. This can have any key-value pair and they can be accessed as properties of the object: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'var obj = {\n    item1: 1, \n    item2: 22\n}; \nvar itemNumber = obj.item1; // itemNumber = 1\n\n// Alternatively\nvar obj = {\n    "item1": 1, \n    "item2": 22\n}; \n\nvar itemNumber = obj["item2"]; // itemNumber = 22\n\n')),(0,a.kt)("p",null,"This statically typed objects are useful to create complex datatypes to share data between multiple sequences. Using static dictionaries, you can create objects with different types: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'var obj = {\n    "item1": 1, \n    "item2": 22, \n    "item32": "asd"\n}; \nvar itemNumber = obj.item1; // itemNumber = 1\nvar itemString = obj.item32; // itemString = "asd"\n\n// Correct modification\nobj.item1 = 321; // Value of obj.item1 changed to 321\n\n// Error changing type\n// obj.item32 = 321; // Cannot cast number to string\n\n')),(0,a.kt)("p",null,"Note the type is inferred by OneVision, so the dictionary definition cannot be changed. "),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("p",null,"Interfaces in OneVision are a way to define a static shape of a dictionary object, describing what properties the object should have. They provide a way to enforce the structure of objects and ensure type safety. In other words, interfaces are a way to define the interface of static dictionaries. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface User{\n    name: string; \n    age: number; \n}\n\nvar user: User = {\n    name: "Pau", \n    age: 34\n};\n\n// Accessing user details\nconsole.log(user.name); // Output: Pau\nconsole.log(user.age); // Output: 34\n\n// Modifying user details\nuser.name = "Jordi"; \nuser.age = 35; \n')),(0,a.kt)("p",null,"With interfaces you can define arrays of dictionaries enforcing certain structure. For example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface User{\n    name: string; \n    age: number; \n}\n\nvar users: User[] = []; \nusers.push({\n    name: "Pau", \n    age: 34\n});\nusers.push({\n    name: "Jordi", \n    age: 35\n});\n\nconsole.log(users[0].name); // Output: Pau \nconsole.log(users[1].name); // Output: Jordi\n\n')),(0,a.kt)("h3",{id:"iterating-over-dictionaries"},"Iterating Over Dictionaries"),(0,a.kt)("p",null,"You can iterate over the keys of a dictionary using ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.keys()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'var userScores: Dictionary<number> = {\n    "player1": 100,\n    "player2": 150,\n    "player3": 200\n};\n\n// Using Object.keys()\nvar keys = Object.keys(userScores); \nvar sumScores = 0; \nfor(var i=0; i<keys.length; i++){\n    sumScores = userScores[keys[i]]; \n} \n\n// Using Object.values()\nvar values = Object.values(userScores); \nvar sumScores = 0; \nfor(var i=0; i<values.length; i++){\n    sumScores = values[i]; \n} \n')))}d.isMDXComponent=!0}}]);