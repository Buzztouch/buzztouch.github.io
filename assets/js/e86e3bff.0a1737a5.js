"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={title:"Quickstart",sidebar_position:1,slug:"/control-panel-quickstart"},i=void 0,s={unversionedId:"Control-Panel/control-panel-quickstart",id:"Control-Panel/control-panel-quickstart",title:"Quickstart",description:"The online control panel servers two primary functions. First, it is used to create individual applications. Second, it is used to manage the content associated with those applications. After an application is created, changes made in the control panel are reflected in the apps\xa0configuration data\xa0file.",source:"@site/docs/Control-Panel/control-panel-quickstart.md",sourceDirName:"Control-Panel",slug:"/control-panel-quickstart",permalink:"/control-panel-quickstart",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quickstart",sidebar_position:1,slug:"/control-panel-quickstart"},sidebar:"defaultSidebar",previous:{title:"Getting Started",permalink:"/"},next:{title:"Quickstart",permalink:"/ios-quickstart"}},p={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The online control panel servers two primary functions. First, it is used to create individual applications. Second, it is used to manage the content associated with those applications. After an application is created, changes made in the control panel are reflected in the apps\xa0",(0,a.kt)("a",{parentName:"p",href:"http://buzztouch.com/docs/v1.5/configData.php"},"configuration data"),"\xa0file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Control Panel Options")),(0,a.kt)("p",null,"Several options are available in the control panel and each serves an individual purpose. Most of the time spent using the control panel revolves around adding screens and features to the app then adjusting individual properties for each screen or feature added."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Application Icon")),(0,a.kt)("p",null,"After creating an application you'll need to upload an icon. The icon you upload is used in the control panel to identify the app. It's also included in the project source-code when you download the project."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Core Properties")),(0,a.kt)("p",null,"Core properties allow you to make changes to the main configuration properties of the app. Things like the application's name, where it gets it's data, and how it manages updates are found in the core properties screen. Generally speaking, you'll only adjust the core properties while you're designing and building your application and not after you've distributed it and installed it on any devices."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Layout Options")),(0,a.kt)("p",null,"This control panel screen allows you to adjust how each individual tab in the application (if the app uses tabs) functions and which screens should serve as home-screens in your app."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Global Theme")),(0,a.kt)("p",null,"This control panel screen allows you to make global style changes to the application. Adjustments to the\xa0",(0,a.kt)("a",{parentName:"p",href:"http://buzztouch.com/docs/v1.5/globalTheme.php"},"global theme"),"\xa0are reflected on all other screens within the application. Individual screens may override the\xa0",(0,a.kt)("a",{parentName:"p",href:"http://buzztouch.com/docs/v1.5/globalTheme.php"},"global theme")," settings by adjusting that\xa0",(0,a.kt)("a",{parentName:"p",href:"http://buzztouch.com/docs/v1.5/screens.php"},"screens"),"\xa0Advanced Properties."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Screens and Menus")),(0,a.kt)("p",null,"Most of the time spent using the control panel will be spent on this screen. This control panel screen is used to add or remove\xa0",(0,a.kt)("a",{parentName:"p",href:"http://buzztouch.com/docs/v1.5/screens.php"},"screens and menus"),"\xa0and additional features the app uses."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Manage Users")),(0,a.kt)("p",null,"Managing users is necessary because any\xa0",(0,a.kt)("a",{parentName:"p",href:"http://buzztouch.com/docs/v1.5/screens.php"},"screens or menu"),"\xa0can be password protected. Use this control panel screen to add or remove users that can access password protected features in the app."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Download Source Code")),(0,a.kt)("p",null,"This control panel screen is used to create the actual Xcode or Eclipse project. You do not have to download the source-code for your project everytime you make a change in the control panel."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you have disconnected the application from the control panel, meaning you removed the\xa0",(0,a.kt)("a",{parentName:"p",href:"http://buzztouch.com/docs/v1.5/configData.php"},"Configuration Data URL"),", changes to the control panel will not be reflected in the app.")))}u.isMDXComponent=!0}}]);