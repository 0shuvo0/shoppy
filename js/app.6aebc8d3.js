(function(t){function e(e){for(var n,a,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var o=r[a];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({CartItem:"CartItem",Product:"Product",Rating:"Rating",RegisterForm:"RegisterForm",ThemeSelect:"ThemeSelect",TopProducts:"TopProducts",about:"about",error:"error"}[t]||t)+"."+{CartItem:"3ecc29fe",Product:"81c87c5f",Rating:"8835da37",RegisterForm:"72809fb0",ThemeSelect:"70121787",TopProducts:"278c5d8b",about:"d24fcebc",error:"a4d70d2b"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={CartItem:1,Product:1,Rating:1,ThemeSelect:1,TopProducts:1,about:1,error:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({CartItem:"CartItem",Product:"Product",Rating:"Rating",RegisterForm:"RegisterForm",ThemeSelect:"ThemeSelect",TopProducts:"TopProducts",about:"about",error:"error"}[t]||t)+"."+{CartItem:"6288b045",Product:"b4f2e9c7",Rating:"3127306a",RegisterForm:"31d6cfe0",ThemeSelect:"e97d67eb",TopProducts:"6428fdd3",about:"52d963c3",error:"f012bb08"}[t]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],p.parentNode.removeChild(p),r(i)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=s[t]=[e,r]}));e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var r=s[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}s[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/shoppy/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"013b":function(t,e,r){"use strict";var n=r("e9fb"),a=r.n(n);a.a},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"049f":function(t,e,r){"use strict";var n=r("22ca"),a=r.n(n);a.a},"12d7":function(t,e,r){},"1a12":function(t,e,r){},"22ca":function(t,e,r){},"2e05":function(t,e,r){t.exports=r.p+"img/login-banner.7ad9b6ff.jpg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=(r("d3b7"),r("bc3a")),s=r.n(a),i={},o=s.a.create(i);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},n["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-wrapper",attrs:{id:"app"}},[r("Navbar"),r("div",{staticClass:"main mb-2"},[r("div",{staticClass:"container"},[r("transition",{attrs:{name:"page"}},[r("router-view")],1)],1)]),r("Footer")],1)},u=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"navbar container"},[r("span",{staticClass:"brand"},[r("div",{staticClass:"toggle-btn",class:{active:t.showNavbar},on:{click:function(e){t.showNavbar=!0}}},[r("div",{staticClass:"bar a"}),r("div",{staticClass:"bar b"}),r("div",{staticClass:"bar c"})]),r("router-link",{staticClass:"brand",attrs:{to:"/"}},[t._v("Sho"),r("span",[t._v("p")]),r("span",[t._v("p")]),t._v("y")])],1),t._m(0)]),r("div",{staticClass:"side-menu-wrapper",class:{active:t.showNavbar},on:{click:function(e){t.showNavbar=!1}}},[r("div",{staticClass:"side-menu"},[t._m(1),r("ThemeSelect"),t._l(t.links,(function(e,n){return r("router-link",{key:n,staticClass:"menu-item",class:{active:e.path===t.$route.path},attrs:{href:"#",to:e.path}},[r("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),r("span",[t._v(t._s(e.title))])])}))],2)])])},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar-form"},[r("i",{staticClass:"material-icons"},[t._v("search")]),r("input",{attrs:{type:"text",placeholder:"Search..."}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user"},[r("img",{staticClass:"mb-2",attrs:{src:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/dp.jpg",alt:""}}),r("p",[t._v("John Doe")])])}],p={name:"Navbar",components:{ThemeSelect:function(){return r.e("ThemeSelect").then(r.bind(null,"7b1f"))}},data:function(){return{showNavbar:!1,links:[{title:"Home",path:"/",icon:"home"},{title:"Cart",path:"/cart",icon:"shopping_bag"},{title:"Orders",path:"/orders",icon:"shopping_cart"},{title:"About",path:"/about",icon:"info"},{title:"Logout",path:"/auth/login",icon:"logout"}]}}},m=p,h=(r("5dfc"),r("2877")),f=Object(h["a"])(m,l,d,!1,null,null,null),g=f.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[r("path",{attrs:{fill:"#fff","fill-opacity":"1",d:"M0,160L80,181.3C160,203,320,245,480,234.7C640,224,800,160,960,133.3C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"}})]),t._m(0),r("p",{staticClass:"nav"},[t._v("© 2020 - All rights reserved.")])])},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Shoppy Official")]),r("p",{staticClass:"f-info"},[t._v("We are always working on making your experience better. If you've any question feel free to ask us. We will reach you in least possible time.")])])}],_=(r("760c"),{}),C=Object(h["a"])(_,v,b,!1,null,null,null),y=C.exports,w={components:{Navbar:g,Footer:y}},j=w,T=(r("034f"),Object(h["a"])(j,c,u,!1,null,null,null)),x=T.exports,P=r("9483");Object(P["a"])("".concat("/shoppy/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var k=r("8c4f"),E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("TopProducts"),t.loading?r("p",{staticClass:"text-center"},[r("span",{staticClass:"spinner"})]):t._e(),t.products.length>0?r("div",{staticClass:"products-container"},t._l(t.products,(function(t,e){return r("Product",{key:e,attrs:{product:t}})})),1):t._e()],1)},S=[],O={name:"Home",components:{TopProducts:function(){return r.e("TopProducts").then(r.bind(null,"6f6d"))},Product:function(){return r.e("Product").then(r.bind(null,"be6f"))}},data:function(){return{loading:!0,products:[]}},mounted:function(){var t=this;setTimeout((function(){t.products=t.$store.state.products,t.loading=!1}),1e3)}},A=O,$=(r("cccb"),Object(h["a"])(A,E,S,!1,null,null,null)),I=$.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"product-showcase"},[r("div",{staticClass:"imgs"},[r("ImgeSlider",{attrs:{slides:t.product.imgs}})],1),r("div",{staticClass:"details"},[r("h1",[t._v("ASUS Aspire E-15")]),r("p",{staticClass:"info"},[t._v('Intel Core i5 (i5 - 8250U, 1.60 GHz, 6 MB) - 39.6 cm (15.6") LED - 16:9 Full HD - LCD - 4 GB DDR3L SDRAM - 1 TB Serial ATA - DVD - Writer - Colour Obsidian Black - Weight (Approximate) 2.23 kg')]),r("Rating",{attrs:{rating:"5"}}),t._m(0),r("button",{staticClass:"btn",on:{click:t.addToCart}},[t._v("Add to cart "),r("i",{staticClass:"material-icons"},[t._v("shopping_cart")])])],1)]),t._m(1)])},N=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"price"},[r("span",[t._v("$")]),t._v("350.75")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"more-prod-info"},[r("h1",{staticClass:"mb-2"},[t._v("More Info")]),r("ul",[r("li",[t._v("Model: Acer Aspire 3 A315-53 N17C4")]),r("li",[t._v("Intel Celeron Processor 3867U (2M Cache, 1.80 GHz)")]),r("li",[t._v("4GB DDR4 RAM 500GB HDD")]),r("li",[t._v('15.6" HD (1366x768) Display')]),r("li",[t._v("Battery: 2 Cell Li-Ion: 34810 mAh")]),r("li",[t._v("Keyboard: Multi-touch Gesture Touchpad")]),r("li",[t._v("Manufacturing Warranty: 02 Years Warranty (Adapter 1 year)")])])])}],F=r("ed08"),D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider-wrapper"},[r("div",{staticClass:"slider",style:{width:100*t.len+"%",left:-100*t.current+"%"}},t._l(t.slides,(function(e,n){return r("img",{key:n,style:{width:100/t.len+"%"},attrs:{src:e}})})),0),r("div",{staticClass:"slider-nav"},[r("i",{staticClass:"material-icons",on:{click:function(e){return t.prev()}}},[t._v("keyboard_arrow_left")]),r("i",{staticClass:"material-icons",on:{click:function(e){return t.next()}}},[t._v("keyboard_arrow_right")])])])},L=[],M={name:"ImageSlider",props:["slides"],computed:{len:function(){return this.slides.length}},data:function(){return{current:0}},methods:{next:function(){this.current<this.len-1?this.current++:this.current=0},prev:function(){this.current>0?this.current--:this.current=this.len-1}}},B=M,H=(r("e194"),Object(h["a"])(B,D,L,!1,null,null,null)),G=H.exports,W={name:"ProductPage",components:{ImgeSlider:G,Rating:function(){return r.e("Rating").then(r.bind(null,"10f0"))}},data:function(){return{product:{imgs:["https://raw.githubusercontent.com/0shuvo0/prod_images/master/prod-1.jpg","https://raw.githubusercontent.com/0shuvo0/prod_images/master/prod-2.jpg","https://raw.githubusercontent.com/0shuvo0/prod_images/master/prod-3.jpg"]}}},methods:{addToCart:function(){Object(F["a"])("added to cart")}}},q=W,U=(r("6634"),Object(h["a"])(q,R,N,!1,null,null,null)),J=U.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("p",{staticClass:"text-center"},[r("span",{staticClass:"spinner"})]):t.cart.length>0?r("div",{staticClass:"order"},[r("div",{staticClass:"cart"},t._l(t.cart,(function(e,n){return r("CartItem",{key:n,attrs:{item:e},on:{removeFromCart:function(e){return t.removeFromCart(n)}}})})),1),r("div",{staticClass:"form"},[r("h1",[r("b",[t._v("Total:")]),t._v(" "),r("span",[t._v("$")]),t._v(t._s(t.total.toFixed(2)))]),r("h1",[r("b",[t._v("VAT:")]),t._v(" "+t._s(t.vat)+"%")]),r("h1",[r("b",[t._v("Delivery charge:")]),t._v(" "),r("span",[t._v("$")]),t._v(t._s(t.deliveryCharge))]),r("label",{staticClass:"mt-2"},[t._v("Got a coupon?")]),r("input",{staticClass:"input mb-2",attrs:{type:"text",placeholder:"Enter coupon code"}}),r("h1",[r("b",[t._v("Grand total:")]),t._v(" "),r("span",[t._v("$")]),t._v(t._s(t.grandTotal.toFixed(2)))]),r("p",{staticClass:"mt-2"},[r("router-link",{staticClass:"btn",attrs:{to:"/order"}},[t._v("place order")])],1)])]):r("h1",{staticClass:"text-center h1-msg grey-text"},[t._v("Cart is empty!")])])},z=[],K=(r("d81d"),r("a434"),{name:"Cart",components:{CartItem:function(){return r.e("CartItem").then(r.bind(null,"022f"))}},data:function(){return{loading:!0,cart:[],vat:5,deliveryCharge:10}},computed:{total:function(){var t=0;return this.cart.map((function(e){return t+=e.price*e.qty})),t},grandTotal:function(){return this.total+this.total*(this.vat/100)+this.deliveryCharge}},mounted:function(){var t=this;setTimeout((function(){var e=t.$store.state.cart;t.cart=e,t.loading=!1}),350)},methods:{removeFromCart:function(t){this.cart.splice(t,1)}}}),V=K,Y=(r("049f"),Object(h["a"])(V,Z,z,!1,null,null,null)),Q=Y.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{method:"post",action:"/placeorder"},on:{submit:function(e){return e.preventDefault(),t.submitOrder()}}},[t._m(0),r("div",{staticClass:"radio-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.agreeTerms,expression:"agreeTerms"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.agreeTerms)?t._i(t.agreeTerms,null)>-1:t.agreeTerms},on:{change:function(e){var r=t.agreeTerms,n=e.target,a=!!n.checked;if(Array.isArray(r)){var s=null,i=t._i(r,s);n.checked?i<0&&(t.agreeTerms=r.concat([s])):i>-1&&(t.agreeTerms=r.slice(0,i).concat(r.slice(i+1)))}else t.agreeTerms=a}}}),r("label",[t._v("I agree with the terms and conditions.")])]),t._m(1)])},tt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-page"},[r("div",{staticClass:"form mb-2"},[r("h1",{staticClass:"mb-2"},[t._v("Personal Info")]),r("label",[t._v("Address 1")]),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Address 1"}}),r("label",[t._v("Address 2")]),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Address 2"}}),r("label",[t._v("Email")]),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Email address"}}),r("label",[t._v("Zip")]),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Zip code"}})]),r("div",{staticClass:"form card-info"},[r("h1",{staticClass:"mb-2"},[t._v("Card Info")]),r("label",[t._v("Payment method")]),r("div",{staticClass:"radio-input"},[r("input",{attrs:{type:"radio",name:"pmethod",checked:""}}),r("label",[t._v("MasterCard")])]),r("div",{staticClass:"radio-input"},[r("input",{attrs:{type:"radio",name:"pmethod"}}),r("label",[t._v("PayPal")])]),r("label",[t._v("Name")]),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Name on card"}}),r("label",[t._v("Card number")]),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Card number"}}),r("label",[t._v("Expiry date")]),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Expiry date"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-center mt-1"},[r("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("submit order")])])}],et=(r("a15b"),r("fb6a"),r("ac1f"),r("25f0"),r("1276"),{name:"Order",data:function(){return{agreeTerms:!1}},methods:{submitOrder:function(){var t=this.$store.state.cart;if(this.agreeTerms)if(t.length<1)Object(F["a"])("your cart is empty","err");else{for(var e=(new Date).toString().split(" ").slice(0,3).join(" "),r="",n=0;n<8;n++)r+=parseInt(8*Math.random())+1;var a={time:e,orders:t,code:r};this.$store.state.orders.unshift(a),this.$store.state.cart=[],Object(F["a"])("Order completed!"),this.$router.push({path:"/orders"})}else Object(F["a"])("your must agree with our terms and conditions","err")}}}),rt=et,nt=(r("94f0"),Object(h["a"])(rt,X,tt,!1,null,null,null)),at=nt.exports,st=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("p",{staticClass:"text-center"},[r("span",{staticClass:"spinner"})]):t.orders.length>0?r("div",t._l(t.orders,(function(e,n){return r("div",{key:n,staticClass:"mb-4"},[r("h1",{staticClass:"mb-2"},[t._v(t._s(e.time)+" ("+t._s(e.code)+")")]),t._l(e.orders,(function(e,n){return r("CartItem",{key:t.index2,attrs:{item:e,hideNav:!0}})}))],2)})),0):r("h1",{staticClass:"text-center h1-msg grey-text"},[t._v("No order placed yet!")])])},it=[],ot={name:"Orders",components:{CartItem:function(){return r.e("CartItem").then(r.bind(null,"022f"))}},data:function(){return{loading:!0,orders:[]}},mounted:function(){var t=this;setTimeout((function(){t.orders=t.$store.state.orders,t.loading=!1}),350)}},ct=ot,ut=Object(h["a"])(ct,st,it,!1,null,null,null),lt=ut.exports,dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"auth"},[t._m(0),r("div",{staticClass:"form"},[r("transition",{attrs:{name:"form"}},["login"===t.$route.params.id?r("LoginForm"):r("RegisterForm")],1)],1)])},pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img"},[n("img",{attrs:{src:r("2e05"),alt:""}})])}],mt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"auth-form"},[r("h1",{staticClass:"header"},[t._v("Login below")]),r("form",{staticClass:"input-form",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.$router.push({path:"/"})}}},[r("label",[t._v("Username")]),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Enter username"}}),r("label",[t._v("Password")]),r("input",{staticClass:"input",attrs:{type:"password",placeholder:"Enter password"}}),r("button",{staticClass:"btn mt-2",attrs:{type:"submit"}},[t._v("login")]),r("router-link",{attrs:{to:"/auth/register"}},[t._v("don't have an account?")])],1)])},ht=[],ft=(r("013b"),{}),gt=Object(h["a"])(ft,mt,ht,!1,null,null,null),vt=gt.exports,bt={name:"Auth",components:{LoginForm:vt,RegisterForm:function(){return r.e("RegisterForm").then(r.bind(null,"349f"))}}},_t=bt,Ct=(r("7c2d"),Object(h["a"])(_t,dt,pt,!1,null,null,null)),yt=Ct.exports;n["a"].use(k["a"]);var wt=[{path:"/",name:"Home",component:I},{path:"/product/:id",name:"Product",component:J},{path:"/cart",name:"Cart",component:Q},{path:"/order",name:"Order",component:at},{path:"/orders",name:"Orders",component:lt},{path:"/auth/:id",name:"Authentication",component:yt},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"*",name:"NotFound",component:function(){return r.e("error").then(r.bind(null,"dda8"))}}],jt=new k["a"]({base:"/shoppy/",routes:wt}),Tt=jt,xt=r("2f62");n["a"].use(xt["a"]);var Pt=new xt["a"].Store({state:{topProducts:[{id:1,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/6.jpg"},{id:2,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/2.jpg"},{id:3,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/3.jpg"},{id:4,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/4.jpg"},{id:5,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/5.jpg"},{id:6,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/1.jpg"},{id:7,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/7.jpg"},{id:8,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/8.jpg"},{id:9,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/9.jpg"},{id:10,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/10.jpg"}],products:[{name:"Men's T-Shirt",price:15,id:1,rating:4,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/5.jpg"},{name:"ASUS E-15",price:950,id:2,rating:3,badge:"hot deal",img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/4.jpg"},{name:"Butterfly pattern top",price:150,id:3,rating:3,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/11.jpg"},{name:"Redmi Note 4",price:600,id:4,rating:5,badge:"best seller",img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/12.jpg"},{name:"BiDen wristwatch",price:680.75,id:5,rating:3,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/8.jpg"},{name:"Women's T-Shirt",price:82,id:6,rating:5,badge:"trending",img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/6.jpg"},{name:"Grey T-Shiet",price:70,id:7,rating:2,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/14.jpg"},{name:"Red Skirt",price:99.99,id:8,rating:4,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/13.jpg"},{name:"IPhone 9",price:999.89,id:9,rating:5,badge:"10% sale",img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/15.jpg"},{name:"White shirt",price:30.5,badge:"hot deal",id:10,rating:2,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/10.jpg"},{name:"Sports shoe",price:260.95,id:11,rating:3,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/16.jpg"},{name:"Samsung juicer",price:130.5,id:12,rating:1,img:"https://raw.githubusercontent.com/0shuvo0/prod_images/master/17.jpg"}],cart:[],orders:[]}});r("7d05");n["a"].config.productionTip=!1,new n["a"]({router:Tt,store:Pt,render:function(t){return t(x)}}).$mount("#app")},"5ced":function(t,e,r){},"5dfc":function(t,e,r){"use strict";var n=r("1a12"),a=r.n(n);a.a},"636e":function(t,e,r){},6634:function(t,e,r){"use strict";var n=r("636e"),a=r.n(n);a.a},7235:function(t,e,r){},"760c":function(t,e,r){"use strict";var n=r("c3f5"),a=r.n(n);a.a},7936:function(t,e,r){},"7c2d":function(t,e,r){"use strict";var n=r("12d7"),a=r.n(n);a.a},"7d05":function(t,e,r){},"85ec":function(t,e,r){},"94f0":function(t,e,r){"use strict";var n=r("7936"),a=r.n(n);a.a},c3f5:function(t,e,r){},cccb:function(t,e,r){"use strict";var n=r("5ced"),a=r.n(n);a.a},e194:function(t,e,r){"use strict";var n=r("7235"),a=r.n(n);a.a},e9fb:function(t,e,r){},ed08:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=null,a=!1,s=void 0;function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a&&(n&&document.body.removeChild(n),s&&clearTimeout(s),n=null,a=!1),a=!0,n=document.createElement("div"),n.classList.add("toast"),""!==e&&n.classList.add(e),n.innerHTML=t,document.body.appendChild(n),s=setTimeout((function(){document.body.removeChild(n),n=null,a=!1}),3e3)}}});
//# sourceMappingURL=app.6aebc8d3.js.map