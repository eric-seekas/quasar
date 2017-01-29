webpackJsonp([3,96],{135:function(t,e,n){var r=n(116)(n(347),n(470),null,null);t.exports=r.exports},333:function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},335:function(t,e,n){t.exports=!n(336)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},336:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},337:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},338:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},339:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},340:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},341:function(t,e,n){var r=n(416),o=n(339);t.exports=function(t){return r(o(t))}},342:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=r(o),a=n(2);e.default={state:a.LocalStorage.get.item("playURLs")||{},set:function(t,e){i.default.set(this.state,t,e),a.LocalStorage.set("playURLs",this.state)},del:function(t){i.default.delete(this.state,t),a.LocalStorage.set("playURLs",this.state)}}},347:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=Math.random().toString(36).substr(2,9);s.default.set(n,{name:t,url:e}),u.Toast.create.positive("URL added")}Object.defineProperty(e,"__esModule",{value:!0});var i=n(402),a=r(i),u=n(2),c=n(342),s=r(c);e.default={data:function(){return{urls:s.default.state}},computed:{hasURLs:function(){return(0,a.default)(this.urls).length>0}},methods:{deleteURL:function(t){u.Dialog.create({title:"Confirm",message:"\n          Are you sure you want to delete the following entry?<br><br>\n          <strong>"+this.urls[t].name+"</strong> - <em>"+this.urls[t].url+"</em>\n        ",buttons:["Cancel",{label:"Delete",handler:function(){s.default.del(t),u.Toast.create.positive("URL removed")}}]})},editURL:function(t){var e=s.default.state[t];u.Dialog.create({title:"Edit URL",message:"",form:{name:{type:"textbox",label:"Name",model:e.name},url:{type:"textbox",label:"URL",model:e.url}},buttons:["Cancel",{label:"Save",preventClose:!0,handler:function(e,n){return e.name.length?e.url.length?(n(),void s.default.set(t,{name:e.name,url:e.url})):void u.Toast.create.warning("Please fill in a URL"):void u.Toast.create.warning("Please fill in a name")}}]})},addURL:function(){u.Dialog.create({title:"Add URL",message:"",form:{name:{type:"textbox",label:"Name",model:""},url:{type:"textbox",label:"URL",model:"http://"}},buttons:["Cancel",{label:"Add",preventClose:!0,handler:function(t,e){return t.name.length?t.url.length&&"http://"!==t.url?(e(),void o(t.name,t.url)):void u.Toast.create.warning("Please fill in a URL"):void u.Toast.create.warning("Please fill in a name")}}]})},play:function(t){this.$router.push({name:"play-url",params:{url:encodeURIComponent(t)}})},scanQR:function(){var t=this.play;cordova.plugins.barcodeScanner.scan(function(e){return e.cancelled?void u.Toast.create("QR code scanning aborted..."):void u.Dialog.create({title:"QR Scanned",message:"\n              What would you like to do with the URL?<br><br>\n              <strong>"+e.text+"</strong>\n            ",buttons:["Cancel",{label:"Save",handler:function(){u.Dialog.create({title:"New URL",message:"Set a name for your URL ("+e.text+"):",form:{name:{type:"textbox",label:"Name"}},buttons:["Cancel",{label:"Add URL",preventClose:!0,handler:function(t,n){return t.name.length?(n(),void o(t.name,e.text)):void u.Toast.create("Please fill in a name")}}]})}},{label:"Play",handler:function(){t(e.text)}}]})},function(t){u.Dialog.create({message:"Failed to scan the QR code: "+t})})}}}},402:function(t,e,n){t.exports={default:n(404),__esModule:!0}},404:function(t,e,n){n(429),t.exports=n(333).Object.keys},405:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},406:function(t,e,n){var r=n(338);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},407:function(t,e,n){var r=n(341),o=n(425),i=n(424);t.exports=function(t){return function(e,n,a){var u,c=r(e),s=o(c.length),l=i(a,s);if(t&&n!=n){for(;s>l;)if(u=c[l++],u!=u)return!0}else for(;s>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},408:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},409:function(t,e,n){var r=n(405);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},410:function(t,e,n){var r=n(338),o=n(337).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},411:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},412:function(t,e,n){var r=n(337),o=n(333),i=n(409),a=n(414),u="prototype",c=function(t,e,n){var s,l,f,d=t&c.F,p=t&c.G,v=t&c.S,m=t&c.P,h=t&c.B,y=t&c.W,b=p?o:o[e]||(o[e]={}),g=b[u],_=p?r:v?r[e]:(r[e]||{})[u];p&&(n=e);for(s in n)l=!d&&_&&void 0!==_[s],l&&s in b||(f=l?_[s]:n[s],b[s]=p&&"function"!=typeof _[s]?n[s]:h&&l?i(f,r):y&&_[s]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(f):m&&"function"==typeof f?i(Function.call,f):f,m&&((b.virtual||(b.virtual={}))[s]=f,t&c.R&&g&&!g[s]&&a(g,s,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},413:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},414:function(t,e,n){var r=n(417),o=n(421);t.exports=n(335)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},415:function(t,e,n){t.exports=!n(335)&&!n(336)(function(){return 7!=Object.defineProperty(n(410)("div"),"a",{get:function(){return 7}}).a})},416:function(t,e,n){var r=n(408);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},417:function(t,e,n){var r=n(406),o=n(415),i=n(427),a=Object.defineProperty;e.f=n(335)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},418:function(t,e,n){var r=n(413),o=n(341),i=n(407)(!1),a=n(422)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),c=0,s=[];for(n in u)n!=a&&r(u,n)&&s.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~i(s,n)||s.push(n));return s}},419:function(t,e,n){var r=n(418),o=n(411);t.exports=Object.keys||function(t){return r(t,o)}},420:function(t,e,n){var r=n(412),o=n(333),i=n(336);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},421:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},422:function(t,e,n){var r=n(423)("keys"),o=n(428);t.exports=function(t){return r[t]||(r[t]=o(t))}},423:function(t,e,n){var r=n(337),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},424:function(t,e,n){var r=n(340),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},425:function(t,e,n){var r=n(340),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},426:function(t,e,n){var r=n(339);t.exports=function(t){return Object(r(t))}},427:function(t,e,n){var r=n(338);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},428:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},429:function(t,e,n){var r=n(426),o=n(419);n(420)("keys",function(){return function(t){return o(r(t))}})},470:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-padding"},[t.hasURLs?n("div",{staticClass:"list no-border"},t._l(t.urls,function(e,r){return n("div",{staticClass:"item two-lines item-delimiter"},[n("i",{staticClass:"item-primary cursor-pointer",on:{click:function(n){t.play(e.url)}}},[t._v("\n        ondemand_video\n      ")]),t._v(" "),n("div",{staticClass:"item-content has-secondary"},[n("div",[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"text-primary cursor-pointer",on:{click:function(n){t.play(e.url)}}},[t._v(t._s(e.url))])]),t._v(" "),n("div",{staticClass:"item-secondary"},[n("i",{ref:"target"+r,refInFor:!0},[t._v("\n          more_vert\n        ")]),t._v(" "),n("q-popover",{ref:"popover"+r,refInFor:!0},[n("div",{staticClass:"list"},[n("div",{staticClass:"item item-link",on:{click:function(e){t.$refs["popover"+r][0].close(),t.editURL(r)}}},[n("i",{staticClass:"item-primary"},[t._v("edit")]),t._v(" "),n("div",{staticClass:"item-content"},[t._v("Edit")])]),t._v(" "),n("div",{staticClass:"item item-link",on:{click:function(e){t.$refs["popover"+r][0].close(),t.deleteURL(r)}}},[n("i",{staticClass:"item-primary"},[t._v("delete")]),t._v(" "),n("div",{staticClass:"item-content"},[t._v("Delete")])])])])],1)])})):n("blockquote",[n("small",[t._v("\n      Register your first URL by tapping on the FAB button on the lower\n      right corner of this screen.\n      You can either scan a QR code ("),n("i",[t._v("phonelink_ring")]),t._v(") or manually add a URL\n      ("),n("i",[t._v("add")]),t._v(").\n    ")])]),t._v(" "),n("q-fab",{staticClass:"cordova-only absolute-bottom-right",attrs:{classNames:"primary",direction:"up"}},[n("q-small-fab",{staticClass:"secondary",attrs:{icon:"phonelink_ring"},nativeOn:{click:function(e){t.scanQR()}}}),t._v(" "),n("q-small-fab",{staticClass:"primary clear",attrs:{icon:"add"},nativeOn:{click:function(e){t.addURL()}}})],1),t._v(" "),n("button",{staticClass:"cordova-hide circular primary absolute-bottom-right",staticStyle:{right:"16px",bottom:"16px"},on:{click:function(e){t.addURL()}}},[n("i",[t._v("add")])])],1)},staticRenderFns:[]}}});