(window.webpackJsonp=window.webpackJsonp||[]).push([[283,472,473],{1825:function(t,r,i){"use strict";function unit_is_editable(t){if(t.is_route_fixed)return!1;if(!t.route_params)return!0;var r=t.route_params.unit_id;if(!r&&t.route_params.step_id){var i=t.state.models.steps[t.route_params.step_id];r=i&&i.unit_id}var a=(t.state.models.units||{})[r];return!a||!a.is_non_editable}i.d(r,"a",(function(){return unit_is_editable}))},2023:function(t,r,i){"use strict";i(11),i(7),i(12);var a=i(872),o={name:"video-frame",props:{video:{type:a.a,required:!0},mounted_href:{required:!1}},computed:{video_href:function video_href(){return this.mounted_href||this.video.href}}},d=i(3),u=Object(d.a)(o,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",[r("div",{staticClass:"panel-background clearfix no-padding"},[r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item",attrs:{type:"text/html",src:this.video_href,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])])])}),[],!1,null,null,null).exports,c=(i(883),i(53),i(82),i(765),i(96),i(43),i(68),i(31),i(223),i(70),i(41),i(88),i(29),i(36),i(116),i(117),i(18));function _createForOfIteratorHelper(t,r){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function _unsupportedIterableToArray(t,r){if(!t)return;if("string"==typeof t)return _arrayLikeToArray(t,r);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return _arrayLikeToArray(t,r)}(t))||r&&t&&"number"==typeof t.length){i&&(t=i);var a=0,o=function F(){};return{s:o,n:function n(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function e(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,u=!0,c=!1;return{s:function s(){i=i.call(t)},n:function n(){var t=i.next();return u=t.done,t},e:function e(t){c=!0,d=t},f:function f(){try{u||null==i.return||i.return()}finally{if(c)throw d}}}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,a=new Array(r);i<r;i++)a[i]=t[i];return a}function create_timecode_href(t,r){var i=t.split(":").map((function(t){return Number(t)})).reverse(),a=i[0]+60*i[1];return a+=i[2]?60*i[2]*60:0,'<a href="https://www.youtube.com/watch?v='.concat(r.values.code,"&t=").concat(a,'s">').concat(t,"</a>")}var l={name:"video-detail",components:{VideoFrame:u},props:{video:{type:a.a,required:!0}},data:function data(){return{mounted_href:void 0}},computed:{rendered_video_description:function rendered_video_description(){return function add_timecode_hrefs_to_description(t,r){if("youtube"===r.type){var i=t,a=new RegExp(/([0-9]:)?([0-5][0-9]|[0-9]):([0-5][0-9])/g),o=(t=t||"").match(a);if(o){var d,u=_createForOfIteratorHelper(o);try{for(u.s();!(d=u.n()).done;){var c=d.value;i=i.replace(c,create_timecode_href(c,r))}}catch(t){u.e(t)}finally{u.f()}}return i}}(this.video.values.user_description||this.video.values.displayed_description,this.video)}},methods:{get_link_click:function get_link_click(t){if("A"===t.target.tagName){var r=function get_embedded_video_href(t,r){if("www.youtube.com"===t.hostname){var i=Object(c.g)("v",t.search);if(r.values.code===i){var a=Object(c.g)("t",t.search);return"".concat(r.href,"?start=").concat(a.replace("s",""),"&autoplay=1")}}}(t.target,this.video);if(!r)return;this.mounted_href=r,t.preventDefault()}}}},p=Object(d.a)(l,(function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",[i("div",{staticClass:"panel panel-default step-element"},[i("video-frame",{key:t.mounted_href,attrs:{video:t.video,mounted_href:t.mounted_href}}),t._v(" "),t.rendered_video_description?i("div",{staticClass:"panel-body"},[i("div",{ref:"description",staticClass:"cell video__description",domProps:{innerHTML:t._s(t.rendered_video_description)},on:{click:t.get_link_click}})]):t._e()],1)])}),[],!1,null,null,null);r.a=p.exports},2733:function(t,r,i){"use strict";i.r(r);var a=i(872),o=i(2023),d=i(1845),u=i(839),c={name:"video-client-root",components:{StepElementHeading:d.a,VideoDetail:o.a},props:{video:{required:!0,type:a.a},step_element:{required:!0,type:u.a}}},l=i(3),p=Object(l.a)(c,(function(){var t=this.$createElement,r=this._self._c||t;return this.video?r("div",[r("div",{staticClass:"m-b-xl"},[r("step-element-heading",{attrs:{step_element:this.step_element}},[r("template",{slot:"name_prefix"},[this._t("name_prefix")],2)],2),this._v(" "),r("video-detail",{attrs:{video:this.video}})],1)]):this._e()}),[],!1,null,null,null);r.default=p.exports}}]);
//# sourceMappingURL=283.283.42a626ef9f6e89da219e.js.map