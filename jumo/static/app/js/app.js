/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/jumo/static/app/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "017a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_id_336aed2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6933");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_id_336aed2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_style_index_0_id_336aed2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0221":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_style_index_1_id_3459599e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7398");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_style_index_1_id_3459599e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_style_index_1_id_3459599e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1fb9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e12a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSection_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "258e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomAudioPlayer_vue_vue_type_style_index_0_id_402ead4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a83c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomAudioPlayer_vue_vue_type_style_index_0_id_402ead4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomAudioPlayer_vue_vue_type_style_index_0_id_402ead4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4460":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenu_vue_vue_type_style_index_0_id_56af9bce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("caca");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenu_vue_vue_type_style_index_0_id_56af9bce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenu_vue_vue_type_style_index_0_id_56af9bce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "481a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5007":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"534d8b62-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=3ecac866&scoped=true&
var Appvue_type_template_id_3ecac866_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"jumo-app"}},[_c('article',{staticClass:"main-wrap"},[_c('ProfileSection'),_c('NewsFeed'),_c('Sidebar')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=3ecac866&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"534d8b62-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProfileSection.vue?vue&type=template&id=3459599e&scoped=true&
var ProfileSectionvue_type_template_id_3459599e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"profile"},[_c('header',{staticClass:"profile-top"},[_c('div',{staticClass:"profile-info"},[_c('div',{staticClass:"profile-info__avatar"},[(_vm.partner.id)?_c('img',{attrs:{"src":("/web/image?model=res.partner&id=" + (_vm.partner.id) + "&field=image_1920"),"loading":"lazy","alt":"avatar"}}):_vm._e()]),_c('h2',{staticClass:"profile-info__title"},[_vm._v(_vm._s(_vm.partner.name))]),(_vm.partner.function)?_c('p',{staticClass:"profile-info__subtitle"},[_vm._v(_vm._s(_vm.partner.function))]):_vm._e()]),_c('div',{staticClass:"profile-controls"},[_c('div',{staticClass:"profile-controls__item",on:{"click":_vm.openNotes}},[_c('span',{staticClass:"image edit-note"}),_c('span',{staticClass:"text"},[_vm._v("Notas")])]),_c('div',{staticClass:"profile-controls__item",on:{"click":_vm.sendEmail}},[_c('span',{staticClass:"image add-email"}),_c('span',{staticClass:"text"},[_vm._v("Email")])]),_vm._m(0),_c('div',{staticClass:"profile-controls__item",on:{"click":_vm.scheduleEvent}},[_c('span',{staticClass:"image clock"}),_c('span',{staticClass:"text"},[_vm._v("Actividad")])])])]),_c('main',{staticClass:"profile-content"},[_c('div',{staticClass:"profile-content__item profile-aditional"},[_c('div',{staticClass:"profile-aditional__header"},[_c('span',{staticClass:"icon",class:{toggle: _vm.toggleActive},on:{"click":_vm.toggleContent}},[_c('svg',{attrs:{"width":"21","height":"13","viewBox":"0 0 21 13","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M19.875 1.19375C19.5237 0.844529 19.0485 0.648514 18.5531 0.648514C18.0578 0.648514 17.5825 0.844529 17.2312 1.19375L10.5 7.83125L3.86249 1.19375C3.51119 0.844529 3.03597 0.648514 2.54062 0.648514C2.04527 0.648514 1.57005 0.844529 1.21875 1.19375C1.043 1.36806 0.903515 1.57543 0.808324 1.80392C0.713132 2.0324 0.664124 2.27748 0.664124 2.525C0.664124 2.77252 0.713132 3.0176 0.808324 3.24608C0.903515 3.47457 1.043 3.68194 1.21875 3.85625L9.16874 11.8062C9.34305 11.982 9.55043 12.1215 9.77891 12.2167C10.0074 12.3119 10.2525 12.3609 10.5 12.3609C10.7475 12.3609 10.9926 12.3119 11.2211 12.2167C11.4496 12.1215 11.6569 11.982 11.8312 11.8062L19.875 3.85625C20.0507 3.68194 20.1902 3.47457 20.2854 3.24608C20.3806 3.0176 20.4296 2.77252 20.4296 2.525C20.4296 2.27748 20.3806 2.0324 20.2854 1.80392C20.1902 1.57543 20.0507 1.36806 19.875 1.19375Z","fill":"#805C79"}})])]),_c('span',{staticClass:"text"},[_vm._v("Acerca de este contacto")])]),_c('div',{staticClass:"profile-aditional__content",class:{toggle: _vm.toggleActive}},[(_vm.partner.email)?_c('div',{staticClass:"info-group"},[_c('span',{staticClass:"label"},[_vm._v("Email")]),_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.partner.email))])]):_vm._e(),(_vm.partner.phone)?_c('div',{staticClass:"info-group"},[_c('span',{staticClass:"label"},[_vm._v("Teléfono")]),_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.partner.phone))])]):_vm._e(),_c('div',{staticClass:"info-group"},[_c('span',{staticClass:"label"},[_vm._v("Idioma")]),_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.partner.lang))])]),(_vm.countryName)?_c('div',{staticClass:"info-group"},[_c('span',{staticClass:"label"},[_vm._v("Canal de venta")]),_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.countryName))])]):_vm._e()])])]),(_vm.notesOpen)?_c('Dialog',{attrs:{"title":"Notes"},on:{"close":function($event){_vm.notesOpen = false}},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('div',{staticClass:"notes-content"})]},proxy:true}],null,false,426171035)}):_vm._e()],1)}
var ProfileSectionvue_type_template_id_3459599e_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-controls__item"},[_c('span',{staticClass:"image call"}),_c('span',{staticClass:"text"},[_vm._v("Llamar")])])}]


// CONCATENATED MODULE: ./src/components/ProfileSection.vue?vue&type=template&id=3459599e&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"534d8b62-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dialog.vue?vue&type=template&id=336aed2a&scoped=true&
var Dialogvue_type_template_id_336aed2a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"o_dialog jumo-dialog"},[_c('div',{staticClass:"modal o_technical_modal",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.close.apply(null, arguments)}}},[_c('div',{staticClass:"modal-dialog modal-lg"},[_c('div',{staticClass:"modal-content"},[_c('header',{staticClass:"modal-header"},[_c('h4',{staticClass:"modal-title"},[_vm._v(_vm._s(_vm.title))]),_c('button',{staticClass:"close",attrs:{"type":"button","aria-label":"Close","tabindex":"-1"},on:{"click":_vm.close}},[_vm._v("×")])]),_c('main',{staticClass:"modal-body o_act_window"},[_vm._t("content")],2),_c('footer',{staticClass:"modal-footer"},[_vm._t("footer")],2)])])])])}
var Dialogvue_type_template_id_336aed2a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Dialog.vue?vue&type=template&id=336aed2a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Dialogvue_type_script_lang_js_ = ({
  props: {
    title: String,
    isOpen: Boolean
  },
  methods: {
    close: function close() {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./src/components/Dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Dialogvue_type_script_lang_js_ = (Dialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Dialog.vue?vue&type=style&index=0&id=336aed2a&lang=scss&scoped=true&
var Dialogvue_type_style_index_0_id_336aed2a_lang_scss_scoped_true_ = __webpack_require__("017a");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Dialog.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Dialogvue_type_script_lang_js_,
  Dialogvue_type_template_id_336aed2a_scoped_true_render,
  Dialogvue_type_template_id_336aed2a_scoped_true_staticRenderFns,
  false,
  null,
  "336aed2a",
  null
  
)

/* harmony default export */ var Dialog = (component.exports);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProfileSection.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ProfileSectionvue_type_script_lang_js_ = ({
  name: 'ProfileSection',
  components: {
    Dialog: Dialog
  },
  data: function data() {
    return {
      toggleActive: false,
      notesOpen: false
    };
  },
  methods: {
    toggleContent: function toggleContent() {
      this.toggleActive = !this.toggleActive;
    },
    openNotes: function openNotes() {
      this.notesOpen = true;
      window.$('.o_ChatterTopbar_buttonLogNote').click();
    },
    scheduleEvent: function scheduleEvent() {
      window.$('.o_ChatterTopbar_buttonScheduleActivity').click();
    },
    sendEmail: function sendEmail() {
      this.notesOpen = true;
      window.$('.o_ChatterTopbar_buttonSendMessage').click();
    }
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapState */])(['partner', 'notes'])), {}, {
    countryName: function countryName() {
      return this.partner.country_id ? this.partner.country_id[1] : null;
    }
  }),
  watch: {
    notesOpen: function notesOpen(newValue) {
      if (newValue) {
        document.querySelector('#jumo-chatter').style.display = 'block';
      } else {
        document.querySelector('#jumo-chatter').style.display = 'none';
      }
    }
  },
  mounted: function mounted() {
    document.querySelector('#jumo-chatter').style.display = 'none';
  }
});
// CONCATENATED MODULE: ./src/components/ProfileSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProfileSectionvue_type_script_lang_js_ = (ProfileSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ProfileSection.vue?vue&type=style&index=0&lang=scss&
var ProfileSectionvue_type_style_index_0_lang_scss_ = __webpack_require__("1fb9");

// EXTERNAL MODULE: ./src/components/ProfileSection.vue?vue&type=style&index=1&id=3459599e&lang=scss&scoped=true&
var ProfileSectionvue_type_style_index_1_id_3459599e_lang_scss_scoped_true_ = __webpack_require__("0221");

// CONCATENATED MODULE: ./src/components/ProfileSection.vue







/* normalize component */

var ProfileSection_component = Object(componentNormalizer["a" /* default */])(
  components_ProfileSectionvue_type_script_lang_js_,
  ProfileSectionvue_type_template_id_3459599e_scoped_true_render,
  ProfileSectionvue_type_template_id_3459599e_scoped_true_staticRenderFns,
  false,
  null,
  "3459599e",
  null
  
)

/* harmony default export */ var ProfileSection = (ProfileSection_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"534d8b62-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NewsFeed.vue?vue&type=template&id=634c7a98&scoped=true&
var NewsFeedvue_type_template_id_634c7a98_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"newsfeed"},[_c('h1',{staticClass:"newsfeed__title"},[_vm._v("Historico de llamadas")]),_c('div',{staticClass:"cards"},[(_vm.selectedCall)?_c('NewsFeedCard',{staticClass:"cards__item",scopedSlots:_vm._u([{key:"card-header",fn:function(){return [_c('span',{staticClass:"card__title"},[_vm._v("Última llamada")]),_c('div',{staticClass:"card-header__right"},[_vm._v(_vm._s(_vm.selectedCall.start_time))])]},proxy:true},{key:"card-main",fn:function(){return [_c('div',{staticClass:"card-content__contact"},[_c('div',{staticClass:"info-group"},[_c('span',{staticClass:"label"},[_vm._v("Email")]),_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.partner.email))])])]),_c('div',{staticClass:"card-content__table table"},[_c('div',{staticClass:"table__thead"},[_c('div',{staticClass:"table__th table__th_1"},[_vm._v("Al número")]),_c('div',{staticClass:"table__th table__th_2"},[_vm._v("Último estado")]),_c('div',{staticClass:"table__th table__th_3"},[_vm._v("Hora de comienzo")]),_c('div',{staticClass:"table__th table__th_4"},[_vm._v("Hora de finalización")]),_c('div',{staticClass:"table__th table__th_5"},[_vm._v("Duración total")])]),_c('div',{staticClass:"table__tbody"},[_c('div',{staticClass:"table__row"},[_c('div',{staticClass:"table__td table__td_1"},[_vm._v(_vm._s(_vm.selectedCall.to_number))]),_c('div',{staticClass:"table__td table__td_2"},[_vm._v(_vm._s(_vm.selectedCall.last_state))]),_c('div',{staticClass:"table__td table__td_3"},[_vm._v(_vm._s(_vm.selectedCall.start_time))]),_c('div',{staticClass:"table__td table__td_4"},[_vm._v(_vm._s(_vm.selectedCall.end_time))]),_c('div',{staticClass:"table__td table__td_5"},[_vm._v(_vm._s(_vm.selectedCall.total_duration))])])])]),(_vm.selectedCall.record)?_c('div',{staticClass:"card-content__audio"},[_c('CustomAudioPlayer',{attrs:{"record":_vm.selectedCall.record,"duration":_vm.selectedCall.incall_duration}})],1):_vm._e()]},proxy:true}],null,false,21289686)}):_vm._e(),_c('NewsFeedCard',{staticClass:"cards__item",scopedSlots:_vm._u([{key:"card-header",fn:function(){return [_c('span',{staticClass:"card__title"},[_vm._v("Historico de llamadas con cliente")])]},proxy:true},{key:"card-main",fn:function(){return [_c('div',{staticClass:"card-content__table table"},[(!_vm.missingConfig)?_c('div',{staticClass:"table__tbody"},_vm._l((_vm.calls),function(call){return _c('div',{key:call.call_id + call.cdr_id,staticClass:"table__row",class:{ 'table__row_selected': call === _vm.selectedCall },on:{"click":function($event){_vm.selectedCall = call}}},[_c('div',{staticClass:"table__td table__td_2"},[_vm._v(_vm._s(call.last_state))]),_c('div',{staticClass:"table__td table__td_3"},[_vm._v(_vm._s(call.start_time))]),_c('div',{staticClass:"table__td table__td_4"},[_vm._v(_vm._s(call.end_time))]),_c('div',{staticClass:"table__td table__td_5"},[_vm._v(_vm._s(call.total_duration))])])}),0):_c('div',{staticStyle:{"text-align":"center"}},[_c('h3',[_vm._v("Please provide Ringover API token in the general settings page")])])])]},proxy:true}])})],1)])}
var NewsFeedvue_type_template_id_634c7a98_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewsFeed.vue?vue&type=template&id=634c7a98&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"534d8b62-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NewsFeedCard.vue?vue&type=template&id=1af5fb64&scoped=true&
var NewsFeedCardvue_type_template_id_1af5fb64_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('header',{staticClass:"card-header"},[_vm._t("card-header")],2),_c('main',{staticClass:"card-content"},[_vm._t("card-main")],2)])}
var NewsFeedCardvue_type_template_id_1af5fb64_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewsFeedCard.vue?vue&type=template&id=1af5fb64&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NewsFeedCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var NewsFeedCardvue_type_script_lang_js_ = ({
  name: 'NewsFeedCard',
  data: function data() {
    return {
      isDetailsActive: false
    };
  }
});
// CONCATENATED MODULE: ./src/components/NewsFeedCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NewsFeedCardvue_type_script_lang_js_ = (NewsFeedCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NewsFeedCard.vue?vue&type=style&index=0&id=1af5fb64&lang=scss&scoped=true&
var NewsFeedCardvue_type_style_index_0_id_1af5fb64_lang_scss_scoped_true_ = __webpack_require__("a232");

// CONCATENATED MODULE: ./src/components/NewsFeedCard.vue






/* normalize component */

var NewsFeedCard_component = Object(componentNormalizer["a" /* default */])(
  components_NewsFeedCardvue_type_script_lang_js_,
  NewsFeedCardvue_type_template_id_1af5fb64_scoped_true_render,
  NewsFeedCardvue_type_template_id_1af5fb64_scoped_true_staticRenderFns,
  false,
  null,
  "1af5fb64",
  null
  
)

/* harmony default export */ var NewsFeedCard = (NewsFeedCard_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"534d8b62-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomAudioPlayer.vue?vue&type=template&id=402ead4e&scoped=true&
var CustomAudioPlayervue_type_template_id_402ead4e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"audio-group"},[_c('audio',{ref:"audio",attrs:{"id":"audio-player","preload":"metadata"}},[_c('source',{attrs:{"src":_vm.record,"type":"audio/mp3"}}),_vm._v(" Your browser does not support tag audio! (Su navegador no es compatible con la etiqueta de audio!) ")]),_c('div',{staticClass:"custom-audio"},[(!_vm.isPlay)?_c('button',{staticClass:"custom-audio__play-control custom-audio__play-control_play",attrs:{"id":"play-icon"},on:{"click":_vm.playAudio}}):_c('button',{staticClass:"custom-audio__play-control custom-audio__play-control_pause",attrs:{"id":"play-icon"},on:{"click":_vm.pauseAudio}}),_c('span',{staticClass:"custom-audio__current-time time",attrs:{"id":"current-time"}},[_vm._v(_vm._s(_vm.calculateTime(_vm.currentTime)))]),_c('Slider',{staticClass:"custom-audio__track",attrs:{"max":_vm.sliderMax,"tooltips":false},on:{"update":_vm.rewindTrack},model:{value:(_vm.rangeValue),callback:function ($$v) {_vm.rangeValue=$$v},expression:"rangeValue"}}),_c('span',{staticClass:"custom-audio__duration time",attrs:{"id":"duration"}},[_vm._v(_vm._s(_vm.formatedDuration))])],1)])}
var CustomAudioPlayervue_type_template_id_402ead4e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CustomAudioPlayer.vue?vue&type=template&id=402ead4e&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__("4795");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/@vueform/slider/dist/slider.vue2.js
var slider_vue2 = __webpack_require__("fb55");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomAudioPlayer.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CustomAudioPlayervue_type_script_lang_js_ = ({
  name: 'CustomAudioPlayer',
  components: {
    Slider: slider_vue2["a" /* default */]
  },
  data: function data() {
    return {
      rangeValue: 0,
      isPlay: false,
      currentTime: 0,
      formatedDuration: 0,
      sliderMax: 100,
      intervalInstance: null
    };
  },
  props: {
    record: String,
    duration: Number
  },
  methods: {
    playAudio: function playAudio() {
      var _this = this;

      this.isPlay = true, this.$refs.audio.play();
      this.intervalInstance = setInterval(function () {
        _this.currentTime = _this.$refs.audio.currentTime;

        if (_this.valueInSec < _this.durationInSec) {
          _this.rangeValue += _this.onePercentOfTrack;
        } else {
          _this.pauseAudio();

          _this.rangeValue = 0;
          _this.$refs.audio.currentTime = 0;
        }
      }, 1000);
    },
    pauseAudio: function pauseAudio() {
      this.isPlay = false, this.$refs.audio.pause();
      clearInterval(this.intervalInstance);
    },
    calculateTime: function calculateTime(secs) {
      var minutes = Math.floor(secs / 60);
      var seconds = Math.floor(secs % 60);
      var returnedSeconds = seconds < 10 ? "0".concat(seconds) : "".concat(seconds);
      return "".concat(minutes, ":").concat(returnedSeconds);
    },
    setDuration: function setDuration() {
      if (!this.$refs.audio) {
        return;
      }

      this.formatedDuration = this.calculateTime(this.$refs.audio.duration);
    },
    rewindTrack: function rewindTrack() {
      this.$refs.audio.currentTime = this.valueInSec;
      this.currentTime = this.$refs.audio.currentTime;
    }
  },
  computed: {
    onePercentOfTrack: function onePercentOfTrack() {
      return this.durationInSec ? 100 / this.durationInSec : 1;
    },
    durationInSec: function durationInSec() {
      return this.duration; //this.$refs.audio.duration
    },
    valueInSec: function valueInSec() {
      return this.rangeValue / this.onePercentOfTrack;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.currentTime = this.$refs.audio.currentTime;

    if (this.$refs.audio.readyState > 0) {
      this.setDuration();
    } else {
      this.$refs.audio.addEventListener('loadedmetadata', function () {
        _this2.setDuration();
      });
    }
  },
  watch: {
    record: function record(newValue) {
      console.log(newValue);
      this.pauseAudio();
      this.$refs.audio.load();
    }
  }
});
// CONCATENATED MODULE: ./src/components/CustomAudioPlayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CustomAudioPlayervue_type_script_lang_js_ = (CustomAudioPlayervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/CustomAudioPlayer.vue?vue&type=style&index=0&id=402ead4e&lang=scss&scoped=true&
var CustomAudioPlayervue_type_style_index_0_id_402ead4e_lang_scss_scoped_true_ = __webpack_require__("258e");

// CONCATENATED MODULE: ./src/components/CustomAudioPlayer.vue






/* normalize component */

var CustomAudioPlayer_component = Object(componentNormalizer["a" /* default */])(
  components_CustomAudioPlayervue_type_script_lang_js_,
  CustomAudioPlayervue_type_template_id_402ead4e_scoped_true_render,
  CustomAudioPlayervue_type_template_id_402ead4e_scoped_true_staticRenderFns,
  false,
  null,
  "402ead4e",
  null
  
)

/* harmony default export */ var CustomAudioPlayer = (CustomAudioPlayer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NewsFeed.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var NewsFeedvue_type_script_lang_js_ = ({
  name: 'NewsFeed',
  components: {
    NewsFeedCard: NewsFeedCard,
    CustomAudioPlayer: CustomAudioPlayer
  },
  data: function data() {
    return {
      selectedCall: null
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapState */])({
    calls: function calls(state) {
      return state.ringover.calls;
    },
    missingConfig: function missingConfig(state) {
      return state.ringover.missingConfig;
    },
    partner: function partner(state) {
      return state.partner;
    }
  })), {}, {
    lastCall: function lastCall() {
      if (this.calls.length) {
        return this.calls[0];
      }

      return null;
    }
  }),
  watch: {
    calls: function calls(newValue) {
      if (newValue.length) {
        this.selectedCall = newValue[0];
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/NewsFeed.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NewsFeedvue_type_script_lang_js_ = (NewsFeedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/NewsFeed.vue?vue&type=style&index=0&id=634c7a98&lang=scss&scoped=true&
var NewsFeedvue_type_style_index_0_id_634c7a98_lang_scss_scoped_true_ = __webpack_require__("9ea9");

// CONCATENATED MODULE: ./src/components/NewsFeed.vue






/* normalize component */

var NewsFeed_component = Object(componentNormalizer["a" /* default */])(
  components_NewsFeedvue_type_script_lang_js_,
  NewsFeedvue_type_template_id_634c7a98_scoped_true_render,
  NewsFeedvue_type_template_id_634c7a98_scoped_true_staticRenderFns,
  false,
  null,
  "634c7a98",
  null
  
)

/* harmony default export */ var NewsFeed = (NewsFeed_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"534d8b62-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Sidebar.vue?vue&type=template&id=533cdd28&scoped=true&
var Sidebarvue_type_template_id_533cdd28_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"sidebar"},[_c('TreeMenu',{attrs:{"label":_vm.treeData.label,"nodes":_vm.treeData.nodes,"depth":0}})],1)}
var Sidebarvue_type_template_id_533cdd28_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Sidebar.vue?vue&type=template&id=533cdd28&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"534d8b62-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TreeMenu.vue?vue&type=template&id=56af9bce&scoped=true&
var TreeMenuvue_type_template_id_56af9bce_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{staticClass:"tree-menu"},[_c('div',{staticClass:"tree-menu__label",class:_vm.labelClasses,style:(_vm.indent),on:{"click":_vm.toggleChildren}},[(_vm.nodes)?_c('span',{staticClass:"tree-menu__arrow",class:_vm.iconClasses},[_c('svg',{attrs:{"width":"21","height":"13","viewBox":"0 0 21 13","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M19.875 1.19375C19.5237 0.844529 19.0485 0.648514 18.5531 0.648514C18.0578 0.648514 17.5825 0.844529 17.2312 1.19375L10.5 7.83125L3.86249 1.19375C3.51119 0.844529 3.03597 0.648514 2.54062 0.648514C2.04527 0.648514 1.57005 0.844529 1.21875 1.19375C1.043 1.36806 0.903515 1.57543 0.808324 1.80392C0.713132 2.0324 0.664124 2.27748 0.664124 2.525C0.664124 2.77252 0.713132 3.0176 0.808324 3.24608C0.903515 3.47457 1.043 3.68194 1.21875 3.85625L9.16874 11.8062C9.34305 11.982 9.55043 12.1215 9.77891 12.2167C10.0074 12.3119 10.2525 12.3609 10.5 12.3609C10.7475 12.3609 10.9926 12.3119 11.2211 12.2167C11.4496 12.1215 11.6569 11.982 11.8312 11.8062L19.875 3.85625C20.0507 3.68194 20.1902 3.47457 20.2854 3.24608C20.3806 3.0176 20.4296 2.77252 20.4296 2.525C20.4296 2.27748 20.3806 2.0324 20.2854 1.80392C20.1902 1.57543 20.0507 1.36806 19.875 1.19375Z"}})])]):_vm._e(),(Array.isArray(_vm.label))?_c('div',{staticClass:"tree-menu__children-text"},_vm._l((_vm.label),function(text,idx){return _c('span',{key:idx},[_vm._v(_vm._s(text))])}),0):_c('span',[_vm._v(_vm._s(_vm.label))])]),_vm._l((_vm.nodes),function(node){return _c('TreeMenu',{directives:[{name:"show",rawName:"v-show",value:(_vm.showChildren),expression:"showChildren"}],key:node.label.id,attrs:{"nodes":node.nodes,"label":node.label,"depth":_vm.depth + 1}})})],2)])}
var TreeMenuvue_type_template_id_56af9bce_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TreeMenu.vue?vue&type=template&id=56af9bce&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TreeMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TreeMenuvue_type_script_lang_js_ = ({
  props: ['label', 'nodes', 'depth'],
  name: 'TreeMenu',
  data: function data() {
    return {
      showChildren: false
    };
  },
  computed: {
    iconClasses: function iconClasses() {
      return {
        'toggle': this.showChildren
      };
    },
    labelClasses: function labelClasses() {
      return {
        'has-children': this.nodes,
        'has-no-children': !this.nodes
      };
    },
    indent: function indent() {
      return {
        transform: "translate(".concat(this.depth * 1, "rem)")
      };
    }
  },
  methods: {
    toggleChildren: function toggleChildren() {
      this.showChildren = !this.showChildren;
    }
  }
});
// CONCATENATED MODULE: ./src/components/TreeMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TreeMenuvue_type_script_lang_js_ = (TreeMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/TreeMenu.vue?vue&type=style&index=0&id=56af9bce&lang=scss&scoped=true&
var TreeMenuvue_type_style_index_0_id_56af9bce_lang_scss_scoped_true_ = __webpack_require__("4460");

// CONCATENATED MODULE: ./src/components/TreeMenu.vue






/* normalize component */

var TreeMenu_component = Object(componentNormalizer["a" /* default */])(
  components_TreeMenuvue_type_script_lang_js_,
  TreeMenuvue_type_template_id_56af9bce_scoped_true_render,
  TreeMenuvue_type_template_id_56af9bce_scoped_true_staticRenderFns,
  false,
  null,
  "56af9bce",
  null
  
)

/* harmony default export */ var TreeMenu = (TreeMenu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Sidebar.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  name: 'Sidebar',
  components: {
    TreeMenu: TreeMenu
  },
  data: function data() {
    return {};
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapState */])(['opportunities'])), {}, {
    treeData: function treeData() {
      var tree = {
        label: 'Oportunidades',
        nodes: []
      };

      if (this.opportunities) {
        tree.nodes = this.opportunities.map(function (item) {
          return {
            id: item.id + '-top',
            label: item.name,
            nodes: [{
              id: item.id + '-sub',
              label: 'Presupuestos',
              nodes: [{
                id: item.id + '-info',
                label: ["Monto: ".concat(item.budget, "\u20AC"), "Estado: ".concat(item.status), item.deadline ? "Cierre: ".concat(item.deadline) : undefined]
              }]
            }]
          };
        });
      }

      return tree;
    }
  })
});
// CONCATENATED MODULE: ./src/components/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Sidebar.vue?vue&type=style&index=0&id=533cdd28&lang=scss&scoped=true&
var Sidebarvue_type_style_index_0_id_533cdd28_lang_scss_scoped_true_ = __webpack_require__("ab09");

// CONCATENATED MODULE: ./src/components/Sidebar.vue






/* normalize component */

var Sidebar_component = Object(componentNormalizer["a" /* default */])(
  components_Sidebarvue_type_script_lang_js_,
  Sidebarvue_type_template_id_533cdd28_scoped_true_render,
  Sidebarvue_type_template_id_533cdd28_scoped_true_staticRenderFns,
  false,
  null,
  "533cdd28",
  null
  
)

/* harmony default export */ var Sidebar = (Sidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: '',
  components: {
    ProfileSection: ProfileSection,
    NewsFeed: NewsFeed,
    Sidebar: Sidebar
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.commit('setPartnerId', window.jumoBinding.action.context.active_id);
    this.$store.dispatch('getPartner').then(function () {
      _this.$store.dispatch('ringover/getCalls', {
        phoneNumber: _this.$store.getters.phoneNumber
      });
    });
    this.$store.dispatch('getOpportunities');
    document.documentElement.classList.add('jumo-page');
  },
  beforeDestroy: function beforeDestroy() {
    document.documentElement.classList.remove('jumo-page');
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&id=3ecac866&lang=scss&scoped=true&
var Appvue_type_style_index_0_id_3ecac866_lang_scss_scoped_true_ = __webpack_require__("92f7");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_3ecac866_scoped_true_render,
  staticRenderFns,
  false,
  null,
  "3ecac866",
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// CONCATENATED MODULE: ./src/store/ringover.js






/* harmony default export */ var ringover = ({
  namespaced: true,
  state: {
    token: '',
    endpoint: '',
    calls: [],
    missingConfig: false
  },
  mutations: {
    setCalls: function setCalls(state, calls) {
      state.calls = calls;
    },
    setConfig: function setConfig(state, _ref) {
      var token = _ref.token,
          endpoint = _ref.endpoint;
      state.endpoint = endpoint && endpoint.replace(/\/$/, '');
      state.token = token;

      if (!token) {
        state.missingConfig = true;
      }
    }
  },
  actions: {
    getConfig: function getConfig(_ref2) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var commit, dispatch, response, config;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref2.commit, dispatch = _ref2.dispatch;
                _context.next = 3;
                return dispatch('rpc', {
                  endpoint: '/web/dataset/call_kw/res.config.settings/search_read',
                  params: {
                    "args": [],
                    "model": "res.config.settings",
                    "method": "search_read",
                    "kwargs": {
                      "domain": [],
                      "fields": ["id", "jumo_ringover_token", "jumo_ringover_endpoint"],
                      "order": "id DESC"
                    }
                  }
                }, {
                  root: true
                });

              case 3:
                response = _context.sent;
                config = response.result[0] || {};
                commit('setConfig', {
                  token: config.jumo_ringover_token,
                  endpoint: config.jumo_ringover_endpoint
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCalls: function getCalls(_ref3, _ref4) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var state, commit, dispatch, phoneNumber, response, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                state = _ref3.state, commit = _ref3.commit, dispatch = _ref3.dispatch;
                phoneNumber = _ref4.phoneNumber;

                if (!(!state.token && !state.missingConfig)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return dispatch('getConfig');

              case 5:
                if (state.token) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return");

              case 7:
                _context2.next = 9;
                return fetch(state.endpoint + '/v2/calls', {
                  method: 'GET',
                  headers: {
                    'Authorization': state.token
                  },
                  redirect: 'follow'
                }).catch((error) => {
                  _context2.next = 14;
                  // console.log(error);
                  console.log("Fetch call fail (7).");
                });

              case 9:
                response = _context2.sent;

                if (response.status == 200) {
                  _context2.next = 12;
                  return response.json();
                }
                else {
                  _context2.next = 14;
                  console.log("Fetch call fail (9).");
                  return {};
                }

              case 12:
                result = _context2.sent;
                commit('setCalls', result.call_list.filter(function (item) {
                  return item.contact_number == phoneNumber;
                }));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});
// EXTERNAL MODULE: ./src/store/mocks/notes.json
var notes = __webpack_require__("d5dc");

// CONCATENATED MODULE: ./src/store/index.js










vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
var RPC_ID = 1000000;

/* harmony default export */ var store = (new vuex_esm["a" /* default */].Store({
  state: {
    partnerId: null,
    partner: {},
    opportunities: [],
    notes: notes
  },
  mutations: {
    setPartnerId: function setPartnerId(state, partnerId) {
      state.partnerId = partnerId;
    },
    setPartner: function setPartner(state, partner) {
      state.partner = partner;
    },
    setOpportunities: function setOpportunities(state, opportunities) {
      state.opportunities = opportunities;
    }
  },
  actions: {
    rpc: function rpc(context, _ref) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var endpoint, params, response, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                endpoint = _ref.endpoint, params = _ref.params;
                RPC_ID++;
                _context.next = 4;
                return fetch(endpoint, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    id: RPC_ID,
                    jsonrpc: "2.0",
                    method: "call",
                    params: params
                  })
                });

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getPartner: function getPartner(_ref2, id) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var dispatch, commit, state, action, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch = _ref2.dispatch, commit = _ref2.commit, state = _ref2.state;
                id = id || state.partnerId;
                action = window.jumoBinding.action;
                _context2.next = 5;
                return dispatch('rpc', {
                  endpoint: '/web/dataset/call_kw/res.partner/read',
                  params: {
                    "args": [[id], ["same_vat_partner_id", "partner_gid", "additional_info", "meeting_count", "opportunity_count", "image_128", "image_1920", "__last_update", "is_company", "commercial_partner_id", "active", "country_code", "company_type", "name", "parent_id", "company_name", "type", "street", "street2", "city", "state_id", "zip", "country_id", "vat", "function", "phone_blacklisted", "mobile_blacklisted", "phone", "mobile", "phone_sanitized", "user_ids", "is_blacklisted", "email", "title", "active_lang_count", "lang", "comment", "message_follower_ids", "display_name"]],
                    "model": "res.partner",
                    "method": "read",
                    "kwargs": {
                      "context": {
                        "bin_size": true,
                        "lang": "en_US",
                        "tz": action.context.tz,
                        "uid": action.context.uid,
                        "allowed_company_ids": action.context.allowed_company_ids,
                        "params": {
                          "id": id,
                          "model": "res.partner",
                          "view_type": "form"
                        },
                        "default_is_company": true
                      }
                    }
                  }
                });

              case 5:
                data = _context2.sent;

                // console.log(data)
                if (data.result && data.result.length) {
                  commit('setPartner', data.result[0]);
                } else {
                  console.log('[JUMO] No partner found', data);
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getOpportunities: function getOpportunities(_ref3, partnerId) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var dispatch, commit, state, action, data, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dispatch = _ref3.dispatch, commit = _ref3.commit, state = _ref3.state;
                partnerId = partnerId || state.partnerId;
                action = window.jumoBinding.action;
                _context3.next = 5;
                return dispatch('rpc', {
                  endpoint: '/web/dataset/search_read',
                  params: {
                    "model": "crm.lead",
                    "domain": [["partner_id.id", "=", partnerId]],
                    "fields": ["stage_id", "probability", "color", "priority", "expected_revenue", "kanban_state", "user_email", "user_id", "partner_id", "activity_summary", "active", "company_currency", "activity_state", "activity_ids", "name", "tag_ids", "campaign_id", "date_deadline"],
                    "limit": 3,
                    "sort": "",
                    "context": {
                      "lang": "en_US",
                      "tz": action.context.tz,
                      "uid": action.context.uid,
                      "allowed_company_ids": action.context.allowed_company_ids,
                      "params": {
                        "model": "res.partner",
                        "view_type": "kanban"
                      },
                      "default_partner_id": partnerId,
                      "active_model": "res.partner",
                      "active_id": partnerId,
                      "active_ids": [partnerId],
                      "active_test": false,
                      "bin_size": true
                    }
                  }
                });

              case 5:
                data = _context3.sent;
                result = data.result.records.map(function (item) {
                  return {
                    id: item.id,
                    name: item.name,
                    budget: item.expected_revenue,
                    status: item.stage_id[1],
                    deadline: item.date_deadline
                  };
                });
                console.log(result);
                commit('setOpportunities', result);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  getters: {
    phoneNumber: function phoneNumber(state) {
      return state.partner.phone_sanitized ? state.partner.phone_sanitized.replace(/[^\d]/g, '') : '';
    }
  },
  modules: {
    ringover: ringover
  }
}));
// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
var vue_composition_api = __webpack_require__("ed09");

// EXTERNAL MODULE: ./node_modules/@vueform/slider/themes/default.css
var themes_default = __webpack_require__("a6e4");

// EXTERNAL MODULE: ./src/assets/scss/style.scss
var style = __webpack_require__("78a7");

// CONCATENATED MODULE: ./src/main.js










vue_runtime_esm["a" /* default */].config.productionTip = false;
vue_runtime_esm["a" /* default */].use(vue_composition_api["b" /* default */]);
console.log('Vue is here');

window.startJumo = function startJumo() {
  window.jumoApp = new vue_runtime_esm["a" /* default */]({
    store: store,
    render: function render(h) {
      return h(App);
    }
  }).$mount('#jumo-app');
};

window.removeJumo = function () {
  if (window.jumoApp) {
    window.jumoApp.$destroy();
    window.jumoApp = null;
  }
};

if (!window.jumoApp) {
  window.startJumo();
}

/***/ }),

/***/ "6933":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7398":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "78a7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8442":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "92f7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3ecac866_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5007");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3ecac866_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3ecac866_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9ea9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsFeed_vue_vue_type_style_index_0_id_634c7a98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("da16");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsFeed_vue_vue_type_style_index_0_id_634c7a98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsFeed_vue_vue_type_style_index_0_id_634c7a98_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a232":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsFeedCard_vue_vue_type_style_index_0_id_1af5fb64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("481a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsFeedCard_vue_vue_type_style_index_0_id_1af5fb64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsFeedCard_vue_vue_type_style_index_0_id_1af5fb64_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a83c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ab09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_533cdd28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8442");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_533cdd28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_533cdd28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "caca":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d5dc":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":177,\"body\":\"<p>1111111⛅️</p>\",\"date\":\"2022-01-31 09:06:20\",\"author_id\":[3,\"YourCompany, Mitchell Admin\"],\"email_from\":\"\\\"Mitchell Admin\\\" <admin@email.test>\",\"message_type\":\"comment\",\"subtype_id\":[2,\"Note\"],\"subject\":false,\"model\":\"res.partner\",\"res_id\":18,\"record_name\":\"Deco Addict, Douglas Fletcher\",\"partner_ids\":[],\"starred_partner_ids\":[3],\"notifications\":[],\"attachment_ids\":[{\"checksum\":\"358ccaaa5aa6bf654d901933655d27aeadfed2c0\",\"id\":409,\"filename\":\"mug.png\",\"name\":\"mug.png\",\"mimetype\":\"image/png\",\"res_id\":18,\"res_model\":\"res.partner\",\"is_main\":true}],\"tracking_value_ids\":[],\"messageReactionGroups\":[[\"insert-and-replace\",[]]],\"needaction_partner_ids\":[],\"history_partner_ids\":[],\"is_note\":true,\"is_discussion\":false,\"subtype_description\":false,\"is_notification\":false,\"module_icon\":\"/base/static/description/icon.png\",\"sms_ids\":[]},{\"id\":170,\"body\":\"<p>sdfsdfsdf</p>\",\"date\":\"2022-01-26 04:52:48\",\"author_id\":[3,\"YourCompany, Mitchell Admin\"],\"email_from\":\"\\\"Mitchell Admin\\\" <admin@email.test>\",\"message_type\":\"comment\",\"subtype_id\":[2,\"Note\"],\"subject\":false,\"model\":\"res.partner\",\"res_id\":18,\"record_name\":\"Deco Addict, Douglas Fletcher\",\"partner_ids\":[],\"starred_partner_ids\":[],\"notifications\":[],\"attachment_ids\":[],\"tracking_value_ids\":[],\"messageReactionGroups\":[[\"insert-and-replace\",[{\"messageId\":170,\"content\":\"🍺\",\"count\":1,\"partners\":[[\"insert-and-replace\",[{\"id\":3,\"name\":\"Mitchell Admin\"}]]],\"guests\":[[\"insert-and-replace\",[]]]}]]],\"needaction_partner_ids\":[],\"history_partner_ids\":[],\"is_note\":true,\"is_discussion\":false,\"subtype_description\":false,\"is_notification\":false,\"module_icon\":\"/base/static/description/icon.png\",\"sms_ids\":[]},{\"id\":169,\"body\":\"<p>Piaou</p>\",\"date\":\"2022-01-25 09:44:44\",\"author_id\":[3,\"YourCompany, Mitchell Admin\"],\"email_from\":\"\\\"Mitchell Admin\\\" <admin@email.test>\",\"message_type\":\"comment\",\"subtype_id\":[1,\"Discussions\"],\"subject\":\"Re: Deco Addict, Douglas Fletcher\",\"model\":\"res.partner\",\"res_id\":18,\"record_name\":\"Deco Addict, Douglas Fletcher\",\"partner_ids\":[18],\"starred_partner_ids\":[],\"notifications\":[{\"id\":20,\"notification_type\":\"email\",\"notification_status\":\"exception\",\"failure_type\":\"mail_smtp\",\"res_partner_id\":[18,\"Deco Addict, Douglas Fletcher\"]}],\"attachment_ids\":[],\"tracking_value_ids\":[],\"messageReactionGroups\":[[\"insert-and-replace\",[]]],\"needaction_partner_ids\":[],\"history_partner_ids\":[18],\"is_note\":false,\"is_discussion\":true,\"subtype_description\":false,\"is_notification\":false,\"module_icon\":\"/base/static/description/icon.png\",\"sms_ids\":[]}]");

/***/ }),

/***/ "da16":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e12a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.js.map