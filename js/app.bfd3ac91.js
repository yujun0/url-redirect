(function(){"use strict";var r={956:function(r,e,t){var n=t(963),i=t(252);function o(r,e){const t=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(t)}var u=t(744);const c={},a=(0,u.Z)(c,[["render",o]]);var l=a,f=t(201),s=t(577);const d=(0,i._)("h1",null,"URL Redirect",-1),p={key:0};function v(r,e,t,o,u,c){return(0,i.wg)(),(0,i.iD)("div",null,[d,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=r=>u.inputUrl=r),placeholder:"輸入網址"},null,512),[[n.nr,u.inputUrl]]),(0,i._)("button",{onClick:e[1]||(e[1]=(...r)=>c.generateRedirectUrl&&c.generateRedirectUrl(...r))},"產生轉址網址"),u.redirectUrl?((0,i.wg)(),(0,i.iD)("p",p,(0,s.zw)(u.redirectUrl),1)):(0,i.kq)("",!0)])}var h={name:"Redirect",data(){return{inputUrl:"",redirectUrl:""}},methods:{generateRedirectUrl(){const r="https://yujun0.github.io/url-redirect/",e=encodeURIComponent(this.inputUrl);this.redirectUrl=`${r}?func=url_redirect&url=${e}`}}};const g=(0,u.Z)(h,[["render",v]]);var b=g;const m=[{path:"/",redirect:{name:"Redirect"}},{path:"/redirect",name:"redirect",component:()=>b}],w=(0,f.p7)({history:(0,f.r5)(),routes:m});var U=w,y=t(907),O=(0,y.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(l).use(O).use(U).mount("#app")}},e={};function t(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return r[n](o,o.exports,t),o.exports}t.m=r,function(){var r=[];t.O=function(e,n,i,o){if(!n){var u=1/0;for(f=0;f<r.length;f++){n=r[f][0],i=r[f][1],o=r[f][2];for(var c=!0,a=0;a<n.length;a++)(!1&o||u>=o)&&Object.keys(t.O).every((function(r){return t.O[r](n[a])}))?n.splice(a--,1):(c=!1,o<u&&(u=o));if(c){r.splice(f--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var f=r.length;f>0&&r[f-1][2]>o;f--)r[f]=r[f-1];r[f]=[n,i,o]}}(),function(){t.d=function(r,e){for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}}(),function(){var r={143:0};t.O.j=function(e){return 0===r[e]};var e=function(e,n){var i,o,u=n[0],c=n[1],a=n[2],l=0;if(u.some((function(e){return 0!==r[e]}))){for(i in c)t.o(c,i)&&(t.m[i]=c[i]);if(a)var f=a(t)}for(e&&e(n);l<u.length;l++)o=u[l],t.o(r,o)&&r[o]&&r[o][0](),r[o]=0;return t.O(f)},n=self["webpackChunkredirect"]=self["webpackChunkredirect"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(956)}));n=t.O(n)})();
//# sourceMappingURL=app.bfd3ac91.js.map