(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var r,i=n("q1tI");var s=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),o=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return s.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){s.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=o},"8oxB":function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,l=[],u=!1,h=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&p())}function p(){if(!u){var e=a(f);u=!0;for(var t=l.length;t;){for(c=l,l=[];++h<t;)c&&c[h].run();h=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new d(e,t)),1!==l.length||u||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},MX0m:function(e,t,n){e.exports=n("3niX")},ODXe:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){i=!0,s=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return i}))},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=s(n("9kyW")),i=s(n("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=s,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),s=t+i;return e[s]||(e[s]="jsx-"+(0,r.default)(t+"-"+i)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var s=this.computeId(i,r);return{styleId:s,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},YFqc:function(e,t,n){e.exports=n("cTJO")},YIWb:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("ODXe"),i=n("MX0m"),s=n.n(i),o=n("q1tI"),a=n.n(o),c=n("YFqc"),l=n.n(c),u=a.a.createElement;function h(){var e=a.a.useState(0),t=Object(r.a)(e,2),n=t[0],i=t[1];return a.a.useEffect((function(){i(window.innerWidth)})),u("div",{className:"jsx-841013937"},u("div",{style:{width:n>560?"20vw":"0vw"},className:"jsx-841013937 sidenav"},u("a",{href:"#about",className:"jsx-841013937"},"Conference program schedule"),u("a",{href:"#services",className:"jsx-841013937"},"Tutorial Program"),u("a",{href:"#clients",className:"jsx-841013937"},"Keynote Speakers"),u("a",{href:"#contact",className:"jsx-841013937"},"Accepted Papers"),u("a",{href:"#about",className:"jsx-841013937"},"Presentation Guidelines"),u(l.a,{href:"/sb/cultural"},u("a",{className:"jsx-841013937"},"Cultural program")),u("a",{href:"#clients",className:"jsx-841013937"},"CRC instructions"),u("a",{href:"#contact",className:"jsx-841013937"},"Registration"),u(l.a,{href:"/sb/callfor"},u("a",{className:"jsx-841013937"},"Call for papers")),u("a",{href:"#services",className:"jsx-841013937"},"Important dates"),u(l.a,{href:"/sb/guidelines"},u("a",{className:"jsx-841013937"},"Author guidelines")),u(l.a,{href:"/sb/venue"},u("a",{className:"jsx-841013937"},"Venue")),u(l.a,{href:"/sb/accomodation"},u("a",{className:"jsx-841013937"},"Accomodation")),u(l.a,{href:"/sb/about"},u("a",{className:"jsx-841013937"},"About Us")),u(l.a,{href:"/sb/gallery"},u("a",{className:"jsx-841013937"},"Photo gallery"))),u(s.a,{id:"841013937"},[".sidenav.jsx-841013937{height:100%;box-shadow:1px 1px 20px 5px rgba(1,1,1,0.5);position:fixed;z-index:1000;top:0;left:0;background-color:rgb(178,34,34);overflow-x:hidden;padding-top:20px;}",".sidenav.jsx-841013937 a.jsx-841013937{padding:15px 18px 16px 0px;text-align:center;-webkit-text-decoration:none;text-decoration:none;font-size:17px;color:white;display:block;}",".sidenav.jsx-841013937 a.jsx-841013937:nth-child(1){padding-top:0px;}",".sidenav.jsx-841013937 a.jsx-841013937:hover{color:lightgrey;}"]))}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,n=t.name,s=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?r:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;o(i(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,s,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(s){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(r,n):s.appendChild(r),r},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,s),a&&n(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),i=n("W8MJ"),s=n("7W2i"),o=n("a1gu"),a=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)}}var l=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var h,f=u(n("q1tI")),p=n("QmWs"),d=n("g/15"),m=l(n("nOHt")),v=n("elyg");function x(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,g=window.IntersectionObserver,b={};function _(){return h||(g?h=new g((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(h.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){s(n,e);var t=c(n);function n(e){var i;return r(this,n),(i=t.call(this,e)).p=void 0,i.cleanUpListeners=function(){},i.formatUrls=function(e){var t=null,n=null,r=null;return function(i,s){if(r&&i===t&&s===n)return r;var o=e(i,s);return t=i,n=s,r=o,o}}((function(e,t){return{href:(0,v.addBasePath)(x(e)),as:t?(0,v.addBasePath)(x(t)):t}})),i.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=i.formatUrls(i.props.href,i.props.as),o=s.href,a=s.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var c=window.location.pathname;o=(0,p.resolve)(c,o),a=a?(0,p.resolve)(c,a):o,e.preventDefault();var l=i.props.scroll;null==l&&(l=a.indexOf("#")<0),m.default[i.props.replace?"replace":"push"](o,a,{shallow:i.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},i.p=!1!==e.prefetch,i}return i(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,i=(0,p.resolve)(e,n);return[i,r?(0,p.resolve)(e,r):i]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=_();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var s=f.Children.only(t),o={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(o.href=i||r),f.default.cloneElement(s,o)}}]),n}(f.Component);t.default=w},zYID:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("ODXe"),i=n("MX0m"),s=n.n(i),o=n("q1tI"),a=n.n(o),c=n("YFqc"),l=n.n(c),u=a.a.createElement;function h(){var e=a.a.useState(0),t=Object(r.a)(e,2),n=t[0],i=t[1];return a.a.useEffect((function(){i(window.innerWidth)})),u("div",{style:{width:n>560?"80vw":"100vw",float:"right",position:"fixed",zIndex:999,top:0,marginLeft:"auto",right:0},className:"jsx-1338454150"},u("nav",{className:"jsx-1338454150 navbar"},u("img",{src:"/logo2.png",alt:"logo",className:"jsx-1338454150 logo"}),u("ul",{id:"js-menu",className:"jsx-1338454150 main-nav"},u("li",{className:"jsx-1338454150"},u(l.a,{href:"/"},u("a",{className:"jsx-1338454150 nav-links"},"Home"))),u("li",{className:"jsx-1338454150"},u(l.a,{href:"/nav/committees"},u("a",{className:"jsx-1338454150 nav-links"},"Committees"))),u("li",{className:"jsx-1338454150"},u(l.a,{href:"/nav/contact"},u("a",{className:"jsx-1338454150 nav-links"},n>560?"Contact Us":"Contact"))),u("li",{className:"jsx-1338454150"},u("a",{href:"http://icipbangalore.org/",target:"_blank",className:"jsx-1338454150 nav-links"},"Archives")),u("li",{className:"jsx-1338454150"},u(l.a,{href:"/nav/sponsors"},u("a",{className:"jsx-1338454150 nav-links"},"Sponsors")))),u("div",{style:{position:"absolute",top:0,right:0},className:"jsx-1338454150"},u("div",{className:"jsx-1338454150 menu"}),u("div",{className:"jsx-1338454150 menu"}),u("div",{className:"jsx-1338454150 menu"}))),u(s.a,{id:"1338454150"},[".navbar.jsx-1338454150{font-size:11.5px;background-color:rgba(250,250,250,0.8);color:black;padding-bottom:10px;box-shadow:2px 2px 20px 5px lightgray;height:12vh;border-bottom:2px solid rgb(178,34,34);}",'.main-nav.jsx-1338454150{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:30px;margin-top:-55px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-weight:600;font-family:"Montserrat",sans-serif;}',".nav-links.jsx-1338454150,.logo.jsx-1338454150{-webkit-text-decoration:none;text-decoration:none;color:black;}",".main-nav.jsx-1338454150 li.jsx-1338454150{text-align:center;padding:10px;}",".main-nav.jsx-1338454150 li.jsx-1338454150:nth-child(4){display:none;}",".logo.jsx-1338454150{width:150px;height:130px;margin-top:-35px;}",".navbar-toggle.jsx-1338454150{position:absolute;top:10px;right:20px;cursor:pointer;color:rgba(0,0,0,1);font-size:24px;}",".active.jsx-1338454150{display:block;}",".menu.jsx-1338454150{width:30px;height:4px;background-color:black;margin:6px 10px;}",'@media screen and (min-width:768px){.navbar.jsx-1338454150{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:0;height:10vh;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:18px;}.main-nav.jsx-1338454150{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:30px;margin-top:10px;font-weight:300;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;font-family:"Montserrat",sans-serif;}.main-nav.jsx-1338454150 li.jsx-1338454150{margin:0;padding:0px;}.main-nav.jsx-1338454150 li.jsx-1338454150:nth-child(4){display:block;}.nav-links.jsx-1338454150{margin-left:40px;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}.logo.jsx-1338454150{margin-top:0;width:200px;height:150px;}.navbar-toggle.jsx-1338454150{display:none;}.menu.jsx-1338454150{display:none;}.logo.jsx-1338454150:hover,.nav-links.jsx-1338454150:hover{color:rgba(0,0,0,0.7);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;}}']))}}}]);