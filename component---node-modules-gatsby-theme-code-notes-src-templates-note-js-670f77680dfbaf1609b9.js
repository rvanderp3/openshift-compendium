(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},I5cv:function(t,e,n){var r=n("XKFU"),c=n("Kuth"),o=n("2OiF"),i=n("y3w9"),a=n("0/R4"),u=n("eeVq"),l=n("8MEG"),f=(n("dyZX").Reflect||{}).construct,s=u((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),p=!u((function(){f((function(){}))}));r(r.S+r.F*(s||p),"Reflect",{construct:function(t,e){o(t),i(e);var n=arguments.length<3?t:o(arguments[2]);if(p&&!s)return f(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(l.apply(t,r))}var u=n.prototype,b=c(a(u)?u:Object.prototype),m=Function.apply.call(t,b,e);return a(m)?m:b}})},OGtf:function(t,e,n){var r=n("XKFU"),c=n("eeVq"),o=n("vhPU"),i=/"/g,a=function(t,e,n,r){var c=String(o(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),a+">"+c+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(a),r(r.P+r.F*c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},Ubkt:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return O}));n("tUrg");var r=n("A2+M"),c=n("q1tI"),o=n.n(c),i=n("2A+t"),a=n("izhR"),u=n("WFMo"),l=n("voR5"),f=function(t){var e=t.items;return o.a.createElement("ul",null,e.map((function(t){return o.a.createElement(s,{key:t.url+"-item",item:t})})))},s=function(t){var e=t.item;return o.a.createElement("li",null,o.a.createElement(a.j,{href:e.url},e.title),e.items&&e.items.length&&o.a.createElement(f,{key:e.url+"-list",items:e.items}))},p=function(t){var e=t.toc;return e.items?o.a.createElement(a.b,{as:"details",sx:{my:4}},o.a.createElement("summary",null,"Table of contents"),o.a.createElement(f,{items:e.items,key:"toc-list"})):null},b=n("Gr+A"),m=n("46ic"),O=(e.default=function(t){var e=t.data,n=t.pageContext,o=t.location;if(!e)return null;var f=e.mdx,s=f.frontmatter,O=s.title,y=s.tags,d=s.emoji,h=s.link,j=f.fields,v=j.dateModified,g=j.modifiedTimestamp,w=f.body,x=f.parent.relativePath,E=f.tableOfContents,P=Object(l.a)().gitRepoContentPath,R=!(!h&&!v);return Object(i.c)(b.a,{hasUntagged:n.hasUntagged,basePath:n.basePath,path:o.pathname,title:O},Object(i.c)("article",null,Object(i.c)(a.b,{as:"header",mb:4},d&&Object(i.c)(a.b,{sx:{fontSize:7,lineHeight:1,mb:3}},Object(i.c)("span",{role:"img"},d)),Object(i.c)(a.f,{as:"h1",variant:"noteTitle"},O),R&&Object(i.c)(a.e,{sx:{mb:3,alignItems:"center"}},h&&Object(i.c)(c.Fragment,null,Object(i.c)(u.b,{sx:{color:"input",pointerEvents:"none",mr:2}}),Object(i.c)(a.j,{href:h,sx:{mr:4,fontSize:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},h)),v&&Object(i.c)("time",{dateTime:g,sx:{display:"flex",alignItems:"center"}},Object(i.c)(u.a,{sx:{color:"input",pointerEvents:"none",mr:2}}),Object(i.c)(a.m,{variant:"dateModified"},v))),y&&Object(i.c)(a.e,null,Object(i.c)(u.d,{sx:{color:"input",pointerEvents:"none",mr:2}}),Object(i.c)(m.a,{tags:y}))),Object(i.c)(p,{toc:E}),Object(i.c)(r.MDXRenderer,null,w),Object(i.c)(a.b,{sx:{mt:6,pt:4,borderTop:"2px solid",borderTopColor:"background"}},P&&Object(i.c)(a.j,{href:""+P+x},"Edit this page"))))},"2409387973")},X8hv:function(t,e,n){function r(t,e,n){return(r=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var c=new(Function.bind.apply(t,r));return n&&o(c,n.prototype),c}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("jm62"),n("yt8O"),n("RW0V"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var s=n("q1tI"),p=n("7ljp"),b=p.useMDXComponents,m=p.mdx,O=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,c=t.children,o=function(t,e){if(null==t)return{};var n,r,c={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,["scope","components","children"]),a=b(n),u=O(e),f=s.useMemo((function(){if(!c)return null;var t=l({React:s,mdx:m},u),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(i(e),[""+c])).apply(void 0,[{}].concat(i(n)))}),[c,e]);return s.createElement(f,l({components:a},o))}},tUrg:function(t,e,n){"use strict";n("OGtf")("link",(function(t){return function(e){return t(this,"a","href",e)}}))}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-code-notes-src-templates-note-js-670f77680dfbaf1609b9.js.map