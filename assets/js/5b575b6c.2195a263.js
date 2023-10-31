"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,f=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return n?o.createElement(f,r(r({ref:t},l),{},{components:n})):o.createElement(f,r({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const i={title:"Design Considerations",sidebar_position:8,slug:"/e31d45f6-a24b-4edd-8a8c-52fe43f99c29"},r=void 0,s={unversionedId:"Developers/Design-Considerations",id:"Developers/Design-Considerations",title:"Design Considerations",description:"There are lots of things to consider when designing a mobile app. Audience, supported devices, connected and disconnected environments, cost, complexity, distribution options, and other important topics need thoughtful evalution.",source:"@site/docs/Developers/Design-Considerations.md",sourceDirName:"Developers",slug:"/e31d45f6-a24b-4edd-8a8c-52fe43f99c29",permalink:"/e31d45f6-a24b-4edd-8a8c-52fe43f99c29",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Design Considerations",sidebar_position:8,slug:"/e31d45f6-a24b-4edd-8a8c-52fe43f99c29"},sidebar:"defaultSidebar",previous:{title:"Global Theme",permalink:"/global-theme"},next:{title:"About Child Items",permalink:"/5a828db1-d8c4-4f93-8e67-561c02c8ac2a"}},p={},d=[{value:"<strong>Audience</strong>",id:"8339b7ad6c044c52990468f2e23464d5",level:2},{value:"<strong>Supported Devices</strong>",id:"a33a8b504564470b806e851e606ac82c",level:2},{value:"<strong>Online vs. Offline Access</strong>",id:"de87202bb1864c728d7ee7dc0e5514e8",level:2},{value:"<strong>Cost</strong>",id:"17b4ea4c18b344b68d01e648762de3be",level:2},{value:"<strong>Complexity</strong>",id:"d934aee71fed46338ba9660703fd186a",level:2},{value:"<strong>Distribution Options</strong>",id:"0ee27bdbb23741a3b15abe0dc7d82197",level:2}],l={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are lots of things to consider when designing a mobile app. Audience, supported devices, connected and disconnected environments, cost, complexity, distribution options, and other important topics need thoughtful evalution."),(0,a.kt)("h2",{id:"8339b7ad6c044c52990468f2e23464d5"},(0,a.kt)("strong",{parentName:"h2"},"Audience")),(0,a.kt)("p",null,"Who is the intended audience? Many thousands of apps exist and each has an ideal audience or end-user. When you're doing design work, think carefully about the user, try to imagine how they interact with the app. Media-centric apps should contain rich graphics and feel fun, entertaining, hip. Enterprise apps, or apps with a more rigid audience are best designed to accomplish a set of specific tasks, provide important documents or information. These types of apps are most successful when the designer makes it as fast and easy as possible to get the task done and access the important information your application provides.\xa0",(0,a.kt)("a",{parentName:"p",href:"http://mashable.com/2011/01/26/mobile-app-design-trends/"},"See this great article"),"\xa0highlighting some recent trends in mobile app design."),(0,a.kt)("h2",{id:"a33a8b504564470b806e851e606ac82c"},(0,a.kt)("strong",{parentName:"h2"},"Supported Devices")),(0,a.kt)("p",null,"How many different types of devices does your app need to support? If your audience is broad, you'll need to consider lots of different screen sizes, operating systems, and environments where the app will be used. App's that need to support a large number of devices are more complicated and take longer to develop. Contrast this with an app that is designed specifically for one type of device. App's that target one device are easier to create because you don't need to consider multiple layouts, screen sizes, operating system and other variables.\xa0\xa0",(0,a.kt)("a",{parentName:"p",href:"http://mobiforge.com/designing/story/effective-design-multiple-screen-sizes"},"This article addresses some interesting facts"),"\xa0and figures about many different devices."),(0,a.kt)("h2",{id:"de87202bb1864c728d7ee7dc0e5514e8"},(0,a.kt)("strong",{parentName:"h2"},"Online vs. Offline Access")),(0,a.kt)("p",null,"Does your application need to function when no internet connection is available? If your application must work offline, you'll need to provide it's core content within the software itself. This means the application will take longer to download (because it contains content and media within it) and will function without an internet connection. However, this also means that the app will be more difficult to update and modify. The best applications find a reasonable balance between these competing ideas. Although\xa0",(0,a.kt)("a",{parentName:"p",href:"http://www.readwriteweb.com/archives/offline_webapps_online_desktop_counterpoint.php"},"this article deals primarily with desktop software"),", mobile developers are well served reading it."),(0,a.kt)("h2",{id:"17b4ea4c18b344b68d01e648762de3be"},(0,a.kt)("strong",{parentName:"h2"},"Cost")),(0,a.kt)("p",null,'Cost can be measured in a literal sense (dollars and cents) or a time sense. Designing and creating an application yourself (DIY) may or may not "save you" anything. For some, it\'s best to work with a skilled developer, while others enjoy doing things themselves and exploring the technical aspects of mobile software. There are lots and lots of examples of successful apps created by non-programmers. However, there are tens of thousands apps that are poorly constructed because the creator lacked the necessary design skills and experience. Hiring a developer is not always a bad idea.\xa0',(0,a.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/209170/how-much-does-it-cost-to-develop-an-iphone-application"},"Consider the points in this discussion"),"\xa0before deciding if DYI or hiring a professional is best."),(0,a.kt)("h2",{id:"d934aee71fed46338ba9660703fd186a"},(0,a.kt)("strong",{parentName:"h2"},"Complexity")),(0,a.kt)("p",null,'More complexity and more features does not necessarily mean a "better" app. Some of the best apps are very very simple. Consider the Alarm Clock app on your device. It accomplishes a simple task efficiently and reliably and doesn\'t try to do too much. Mobile apps filled with hundreds of features and screens are usually a bad idea. Keep your ideas simple and if all-else-fails, make another app instead of extending or adding to an existing app. See this\xa0',(0,a.kt)("a",{parentName:"p",href:"http://leapfactor.posterous.com/removing-complexity-to-make-better-mobile-app"},'great argument about "thin" mobile apps'),"."),(0,a.kt)("h2",{id:"0ee27bdbb23741a3b15abe0dc7d82197"},(0,a.kt)("strong",{parentName:"h2"},"Distribution Options")),(0,a.kt)("p",null,"How are end users going to get your mobile app? Apple created a new market when they announced their App Store in 2008. Since then, millions of users have downloaded billions of apps, new competing \"app stores\" are emerging and the simplicity of Apple's original idea has turned into a complex problem for end-users and developers. Where do I get an app and how do I distribute an app is a complicated question. Each distribution channel (Apple's App Store, Google Play, Cydia, Amazon, etc) has a unique set of rules and regulations and supporting them all is challenging. For most developers, it's unproductive to work with more than a few. Consider how you plan to distribute your software and what the pros and cons are before submitting to any of them.\xa0",(0,a.kt)("a",{parentName:"p",href:"http://www.readwriteweb.com/mobile/2010/11/10-distribution-channels-for-mobile-apps.php"},"10 Distribution Channels for Mobile Applications"),"\xa0is a must read."))}c.isMDXComponent=!0}}]);