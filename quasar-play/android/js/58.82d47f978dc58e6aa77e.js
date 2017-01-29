webpackJsonp([58,96],{150:function(e,t,i){var a=i(116)(i(350),i(500),null,null);e.exports=a.exports},350:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{styles:["","bordered","horizontal-delimiter","vertical-delimiter","cell-delimiter","striped-odd","striped-even","highlight","compact","loose","flipped"],bordered:!1,highlight:!1,delimiter:"none",stripe:"none",type:"none",gutter:"none"}},computed:{computedClasses:function(){var e=[];return this.bordered&&e.push("bordered"),this.highlight&&e.push("highlight"),"none"!==this.delimiter&&e.push(this.delimiter+"-delimiter"),"none"!==this.stripe&&e.push("striped-"+this.stripe),"none"!==this.type&&e.push(this.type),"none"!==this.gutter&&e.push(this.gutter),e}}}},500:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"layout-padding"},[i("div",{staticClass:"column group"},[i("label",[i("q-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.bordered,expression:"bordered"}],domProps:{value:e.bordered},on:{input:function(t){e.bordered=t}}}),e._v("\n        Bordered\n      ")],1),e._v(" "),i("label",[i("q-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.highlight,expression:"highlight"}],domProps:{value:e.highlight},on:{input:function(t){e.highlight=t}}}),e._v("\n        Highlight\n      ")],1),e._v(" "),i("div",{staticClass:"column gt-md-row"},[i("label",[i("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.delimiter,expression:"delimiter"}],attrs:{val:"none"},domProps:{value:e.delimiter},on:{input:function(t){e.delimiter=t}}}),e._v("\n          No delimiter\n        ")],1),e._v(" "),i("label",[i("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.delimiter,expression:"delimiter"}],attrs:{val:"horizontal"},domProps:{value:e.delimiter},on:{input:function(t){e.delimiter=t}}}),e._v("\n          Horizontal delimiter\n        ")],1),e._v(" "),i("label",[i("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.delimiter,expression:"delimiter"}],attrs:{val:"vertical"},domProps:{value:e.delimiter},on:{input:function(t){e.delimiter=t}}}),e._v("\n          Vertical delimiter\n        ")],1),e._v(" "),i("label",[i("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.delimiter,expression:"delimiter"}],attrs:{val:"cell"},domProps:{value:e.delimiter},on:{input:function(t){e.delimiter=t}}}),e._v("\n          Cell delimiter\n        ")],1)]),e._v(" "),i("div",{staticClass:"column gt-md-row"},[i("label",[i("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.stripe,expression:"stripe"}],attrs:{val:"none"},domProps:{value:e.stripe},on:{input:function(t){e.stripe=t}}}),e._v("\n          No Stripe\n        ")],1),e._v(" "),i("label",[i("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.stripe,expression:"stripe"}],attrs:{val:"odd"},domProps:{value:e.stripe},on:{input:function(t){e.stripe=t}}}),e._v("\n          Striped Odd\n        ")],1),e._v(" "),i("label",[i("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.stripe,expression:"stripe"}],attrs:{val:"even"},domProps:{value:e.stripe},on:{input:function(t){e.stripe=t}}}),e._v("\n          Striped Even\n        ")],1)]),e._v(" "),i("div",[i("label",[i("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{val:"none"},domProps:{value:e.type},on:{input:function(t){e.type=t}}}),e._v("\n          Normal\n        ")],1),e._v(" "),i("label",[i("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{val:"flipped"},domProps:{value:e.type},on:{input:function(t){e.type=t}}}),e._v("\n          Flipped\n        ")],1),e._v(" "),i("label",[i("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{val:"responsive"},domProps:{value:e.type},on:{input:function(t){e.type=t}}}),e._v("\n          Responsive\n        ")],1)]),e._v(" "),i("div",[i("label",[i("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.gutter,expression:"gutter"}],attrs:{val:"none"},domProps:{value:e.gutter},on:{input:function(t){e.gutter=t}}}),e._v("\n          Normal\n        ")],1),e._v(" "),i("label",[i("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.gutter,expression:"gutter"}],attrs:{val:"compact"},domProps:{value:e.gutter},on:{input:function(t){e.gutter=t}}}),e._v("\n          Compact\n        ")],1),e._v(" "),i("label",[i("q-radio",{directives:[{name:"model",rawName:"v-model",value:e.gutter,expression:"gutter"}],attrs:{val:"loose"},domProps:{value:e.gutter},on:{input:function(t){e.gutter=t}}}),e._v("\n          Loose\n        ")],1)])]),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"bg-secondary text-white",staticStyle:{padding:"5px"}},[e._v("\n      Classes "+e._s(e.computedClasses)+"\n    ")]),e._v(" "),i("table",{staticClass:"q-table",class:e.computedClasses,staticStyle:{"margin-top":"30px"}},[e._m(0),e._v(" "),e._m(1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("tr",[i("th",{staticClass:"text-left"},[e._v("Name")]),e._v(" "),i("th",{staticClass:"text-right"},[e._v("Price")]),e._v(" "),i("th",{staticClass:"text-right"},[e._v("In Stock")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tbody",[i("tr",[i("td",{staticClass:"text-left",attrs:{"data-th":"Name"}},[e._v("Item #1")]),e._v(" "),i("td",{staticClass:"text-right",attrs:{"data-th":"Price"}},[e._v("$10.11")]),e._v(" "),i("td",{staticClass:"text-right",attrs:{"data-th":"In Stock"}},[e._v("101")])]),e._v(" "),i("tr",[i("td",{staticClass:"text-left",attrs:{"data-th":"Name"}},[e._v("Item #2")]),e._v(" "),i("td",{staticClass:"text-right",attrs:{"data-th":"Price"}},[e._v("$8.88")]),e._v(" "),i("td",{staticClass:"text-right",attrs:{"data-th":"In Stock"}},[e._v("34")])]),e._v(" "),i("tr",[i("td",{staticClass:"text-left",attrs:{"data-th":"Name"}},[e._v("Item #3")]),e._v(" "),i("td",{staticClass:"text-right",attrs:{"data-th":"Price"}},[e._v("$0.15")]),e._v(" "),i("td",{staticClass:"text-right",attrs:{"data-th":"In Stock"}},[e._v("1670")])])])}]}}});