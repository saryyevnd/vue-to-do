(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de8a60f6"],{"0b42":function(t,e,r){var n=r("da84"),o=r("e8b5"),i=r("68ee"),a=r("861d"),c=r("b622"),u=c("species"),s=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,i(e)&&(e===s||o(e.prototype))?e=void 0:a(e)&&(e=e[u],null===e&&(e=void 0))),void 0===e?s:e}},1989:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Todo application")]),r("hr"),r("AddTodo",{on:{"add-todo":t.addTodo,"filter-todos":t.filterTodos}}),t.loaded&&t.todos.length?r("TodoList",{attrs:{todos:t.todos},on:{"remove-todo":t.removeTodo}}):t._e(),t.loaded&&!t.todos.length?r("p",{staticClass:"text-center"},[t._v("No todos yet!")]):t._e(),t.loaded?t._e():r("div",{staticClass:"text-center"},[r("b-spinner",{attrs:{variant:"warning"}})],1)],1)},o=[];r("d3b7");function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}r("96cf"),r("4de4");var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-list-group",t._l(t.todos,(function(e,n){return r("TodoItem",{key:n,attrs:{todo:e,index:n},on:{"remove-todo":t.removeTodo}})})),1)],1)},u=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-list-group-item",[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"p-1 flex-grow-1 d-flex align-items-center",class:{del:t.todo.completed}},[t._v(" "+t._s(t.index+1)+") "),r("span",{staticClass:"ps-1 text-capitalize"},[t._v(t._s(t.todo.title))])]),r("div",{staticClass:"p-1 d-flex align-items-center"},[r("b-form-checkbox",{attrs:{size:"lg"},on:{change:function(e){t.todo.completed=!t.todo.completed}},model:{value:t.completed,callback:function(e){t.completed=e},expression:"completed"}})],1),r("div",{staticClass:"p-1"},[r("b-button",{staticClass:"fw-bold fs-4",attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.$emit("remove-todo",t.todo.id)}}},[t._v("×")])],1)])])},l=[],f=(r("a9e3"),{data:function(){return{completed:this.todo.completed}},watch:{todo:function(t){this.completed=t.completed}},props:{index:Number,todo:{type:Object,required:!0}},name:"TodoItem"}),d=f,h=(r("3e37"),r("2877")),p=Object(h["a"])(d,s,l,!1,null,"f1b1feb0",null),v=p.exports,m={name:"TodoList",props:["todos"],components:{TodoItem:v},methods:{removeTodo:function(t){this.$emit("remove-todo",t)}}},y=m,g=Object(h["a"])(y,c,u,!1,null,null,null),b=g.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",{staticClass:"mb-3",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[r("b-input-group",[r("b-form-input",{staticClass:"rounded-0 rounded-start",attrs:{type:"text",placeholder:"Enter todo..."},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),r("b-input-group-append",[r("b-button",{staticClass:"rounded-0 rounded-end",attrs:{variant:"primary",type:"submit"}},[t._v("Create")])],1)],1),r("b-form-select",{staticClass:"mt-3 form-select",attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)},x=[],E=(r("498a"),{data:function(){return{title:"",selected:"all",options:[{value:"all",text:"All"},{value:"completed",text:"Completed"},{value:"not-completed",text:"Not completed"}]}},watch:{selected:function(t){this.$emit("filter-todos",t)}},methods:{onSubmit:function(){this.title.trim()&&this.$emit("add-todo",{id:this.$uuid.v4(),title:this.title,completed:!1}),this.title=""}}}),_=E,T=Object(h["a"])(_,w,x,!1,null,null,null),L=T.exports,N={name:"App",mounted:function(){var t=this;return a(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=function(t){return new Promise((function(e){return setTimeout(e,t)}))},e.next=3,fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");case 3:return n=e.sent,e.next=6,n.json();case 6:return o=e.sent,e.next=9,r(1e3);case 9:t.todos=o,t.defaultTodos=o,t.loaded=!0;case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{defaultTodos:[],todos:[],loaded:!1}},components:{TodoList:b,AddTodo:L},methods:{filterTodos:function(t){switch(t){case"completed":return void(this.todos=this.defaultTodos.filter((function(t){return t.completed})));case"not-completed":return void(this.todos=this.defaultTodos.filter((function(t){return!t.completed})));default:this.todos=this.defaultTodos}},addTodo:function(t){this.todos.push(t)},removeTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))}}},I=N,O=Object(h["a"])(I,n,o,!1,null,null,null);e["default"]=O.exports},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3e37":function(t,e,r){"use strict";r("c051")},"408a":function(t,e,r){var n=r("e330");t.exports=n(1..valueOf)},"498a":function(t,e,r){"use strict";var n=r("23e7"),o=r("58a8").trim,i=r("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return o(this)}})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),a=i("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("e330"),o=r("1d80"),i=r("577e"),a=r("5899"),c=n("".replace),u="["+a+"]",s=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),f=function(t){return function(e){var r=i(o(e));return 1&t&&(r=c(r,s,"")),2&t&&(r=c(r,l,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},7156:function(t,e,r){var n=r("1626"),o=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var a,c;return i&&n(a=e.constructor)&&a!==r&&o(c=a.prototype)&&c!==r.prototype&&i(t,c),t}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=L(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function m(){}function y(){}function g(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(k([])));x&&x!==r&&n.call(x,i)&&(b=x);var E=g.prototype=m.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function L(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return A()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=N(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return y.prototype=g,u(E,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},_(T.prototype),u(T.prototype,a,(function(){return this})),t.AsyncIterator=T,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new T(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(E),u(E,c,"Generator"),u(E,i,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},a9e3:function(t,e,r){"use strict";var n=r("83ab"),o=r("da84"),i=r("e330"),a=r("94ca"),c=r("6eeb"),u=r("1a2d"),s=r("7156"),l=r("3a9b"),f=r("d9b5"),d=r("c04e"),h=r("d039"),p=r("241c").f,v=r("06cf").f,m=r("9bf2").f,y=r("408a"),g=r("58a8").trim,b="Number",w=o[b],x=w.prototype,E=o.TypeError,_=i("".slice),T=i("".charCodeAt),L=function(t){var e=d(t,"number");return"bigint"==typeof e?e:N(e)},N=function(t){var e,r,n,o,i,a,c,u,s=d(t,"number");if(f(s))throw E("Cannot convert a Symbol value to a number");if("string"==typeof s&&s.length>2)if(s=g(s),e=T(s,0),43===e||45===e){if(r=T(s,2),88===r||120===r)return NaN}else if(48===e){switch(T(s,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+s}for(i=_(s,2),a=i.length,c=0;c<a;c++)if(u=T(i,c),u<48||u>o)return NaN;return parseInt(i,n)}return+s};if(a(b,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var I,O=function(t){var e=arguments.length<1?0:w(L(t)),r=this;return l(x,r)&&h((function(){y(r)}))?s(Object(e),r,O):e},j=n?p(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;j.length>k;k++)u(w,I=j[k])&&!u(O,I)&&m(O,I,v(w,I));O.prototype=x,x.constructor=O,c(o,b,O)}},b727:function(t,e,r){var n=r("0366"),o=r("e330"),i=r("44ad"),a=r("7b0b"),c=r("07fa"),u=r("65f0"),s=o([].push),l=function(t){var e=1==t,r=2==t,o=3==t,l=4==t,f=6==t,d=7==t,h=5==t||f;return function(p,v,m,y){for(var g,b,w=a(p),x=i(w),E=n(v,m),_=c(x),T=0,L=y||u,N=e?L(p,_):r||d?L(p,0):void 0;_>T;T++)if((h||T in x)&&(g=x[T],b=E(g,T,w),t))if(e)N[T]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return T;case 2:s(N,g)}else switch(t){case 4:return!1;case 7:s(N,g)}return f?-1:o||l?l:N}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c051:function(t,e,r){},c8d2:function(t,e,r){var n=r("5e77").PROPER,o=r("d039"),i=r("5899"),a="​᠎";t.exports=function(t){return o((function(){return!!i[t]()||a[t]()!==a||n&&i[t].name!==t}))}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-de8a60f6.03faf594.js.map