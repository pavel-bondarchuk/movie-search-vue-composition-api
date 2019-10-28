(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/movie-search-vue-composition-api/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("750b"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("Header",{attrs:{title:"Composition API"}}),n("Search",{attrs:{search:e.state.search},on:{search:e.handleSearch}}),n("p",{staticClass:"intro"},[e._v("Sharing a few of our favourite movies")]),n("div",{staticClass:"movies"},e._l(e.state.movies,(function(e){return n("Movie",{key:e.imdbID,attrs:{movie:e}})})),1)],1)},i=[],c=(n("ac1f"),n("841c"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"App-header"},[n("h2",[e._v(e._s(e.title))])])}),u=[],s={name:"Header",props:["title"],setup:function(){}},l=s,p=n("2877"),f=Object(p["a"])(l,c,u,!1,null,null,null),v=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"search"},[n("input",{attrs:{type:"text"},domProps:{value:e.movieTitle},on:{keyup:e.handleChange}}),n("input",{attrs:{type:"submit",value:"SEARCH"},on:{click:e.handleSubmit}})])},h=[],m={name:"Search",props:["search"],setup:function(e,t){var n=e.search,r=t.emit,o=Object(a["d"])(n);return{movieTitle:o,handleSubmit:function(e){e.preventDefault(),r("search",o.value)},handleChange:function(e){o.value=e.target.value}}}},b=m,y=Object(p["a"])(b,d,h,!1,null,null,null),_=y.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"movie"},[n("h2",[e._v(e._s(e.movie.Title))]),n("div",[n("img",{attrs:{width:"200",alt:e.altText,src:e.movie.Poster}})]),n("p",[e._v(e._s(e.movie.Year))])])},O=[],j={name:"Movie",props:["movie"],setup:function(e){var t=e.movie,n=Object(a["a"])((function(){return"The movie titled: ".concat(t.Title)}));return{altText:n}}},w=j,S=Object(p["a"])(w,g,O,!1,null,null,null),x=S.exports,C=(n("99af"),n("d3b7"),"a5549d08"),P=function(){var e=Object(a["c"])({search:"Joker",loading:!0,movies:[]});return Object(a["e"])((function(){var t="https://www.omdbapi.com/?s=".concat(e.search,"&apikey=").concat(C);fetch(t).then((function(e){return e.json()})).then((function(t){e.movies=t.Search,e.loading=!1}))})),e},T={name:"app",components:{Header:v,Search:_,Movie:x},setup:function(){var e=P();return{state:e,handleSearch:function(t){e.loading=!0,e.search=t}}}},k=T,M=(n("9993"),Object(p["a"])(k,o,i,!1,null,null,null)),E=M.exports;r["a"].config.productionTip=!1,r["a"].use(a["b"]),new r["a"]({render:function(e){return e(E)}}).$mount("#app")},"7dad":function(e,t,n){},9993:function(e,t,n){"use strict";var r=n("7dad"),a=n.n(r);a.a}});
//# sourceMappingURL=app.eca76246.js.map