webpackJsonp([5],{FesZ:function(t,e){},mqXw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("up24"),r={name:"FastEntries",mounted:function(){var t=this;this.$http.get("/ele/entries").then(function(e){t.swipeData=e.data})},data:function(){return{swipeData:[]}},methods:{getImage:function(t){return Object(a.a)(t,"?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/")}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mt-swipe",{attrs:{auto:0,continuous:!1}},t._l(t.swipeData,function(e){return n("mt-swipe-item",{key:e.group_type},t._l(e.entries,function(e){return n("router-link",{key:e.id,attrs:{to:"/msite/food"}},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:t.getImage(e.image_hash),alt:e.name}})]),t._v(" "),n("span",[t._v(t._s(e.name))])])}))}))},staticRenderFns:[]};var s=n("VU/8")(r,i,!1,function(t){n("FesZ")},"data-v-7e76319e",null);e.default=s.exports}});
//# sourceMappingURL=5.f97a96ceda758acc96e8.js.map