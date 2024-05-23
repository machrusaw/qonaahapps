/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 516:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: addRestaurantToFavorites, getRestaurantIdFromHash, isRestaurantFavorited, removeRestaurantFromFavorites

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(452);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css
var main = __webpack_require__(249);
;// CONCATENATED MODULE: ./src/styles/main.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.A, options);




       /* harmony default export */ const styles_main = (main/* default */.A && main/* default */.A.locals ? main/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// CONCATENATED MODULE: ./src/scripts/index.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
 /* for async await transpile */

 // Import diletakkan di bagian paling atas

// import "../public/manifest.json";

var RESTAURANT_API_ENDPOINT = "https://restaurant-api.dicoding.dev";

// Fungsi untuk mengambil daftar restoran dari API
function fetchRestaurantList() {
  return _fetchRestaurantList.apply(this, arguments);
} // Definisikan komponen web kustom untuk menampilkan daftar restoran
function _fetchRestaurantList() {
  _fetchRestaurantList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
    var response, jsonData;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          showLoader(); // Tampilkan loader saat memulai pemuatan
          _context22.prev = 1;
          _context22.next = 4;
          return fetch("".concat(RESTAURANT_API_ENDPOINT, "/list"));
        case 4:
          response = _context22.sent;
          if (response.ok) {
            _context22.next = 7;
            break;
          }
          throw new Error("Gagal mendapatkan data restoran");
        case 7:
          _context22.next = 9;
          return response.json();
        case 9:
          jsonData = _context22.sent;
          return _context22.abrupt("return", jsonData.restaurants);
        case 13:
          _context22.prev = 13;
          _context22.t0 = _context22["catch"](1);
          sweetalert2_all_default().fire({
            icon: "error",
            title: "Terjadi Kesalahan",
            text: "Gagal mendapatkan data restoran. Silakan coba lagi."
          }); // Menampilkan pesan kesalahan
          console.error("Error:", _context22.t0);
          return _context22.abrupt("return", []);
        case 18:
          _context22.prev = 18;
          hideLoader(); // Sembunyikan loader setelah pemuatan selesai
          return _context22.finish(18);
        case 21:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[1, 13, 18, 21]]);
  }));
  return _fetchRestaurantList.apply(this, arguments);
}
var RestaurantList = /*#__PURE__*/function (_HTMLElement) {
  function RestaurantList() {
    _classCallCheck(this, RestaurantList);
    return _callSuper(this, RestaurantList, arguments);
  }
  _inherits(RestaurantList, _HTMLElement);
  return _createClass(RestaurantList, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var restaurantList;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.innerHTML = "<div>Loading...</div>"; // Loading placeholder
              _context.next = 3;
              return fetchRestaurantList();
            case 3:
              restaurantList = _context.sent;
              // Fetch the list of restaurants
              this.renderList(restaurantList);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }
      return connectedCallback;
    }()
  }, {
    key: "renderList",
    value: function renderList(restaurants) {
      // Start the grid container
      this.innerHTML = "<div class=\"restaurant-grid\"></div>";
      var gridContainer = this.querySelector(".restaurant-grid");

      // For each restaurant, create a grid item
      restaurants.forEach(function (restaurant) {
        var restaurantElement = document.createElement("div");
        restaurantElement.classList.add("restaurant-item"); // Add a class for styling

        restaurantElement.innerHTML = "\n      <div class=\"list_item\">\n      <img \n        class=\"list_item_thumb\" \n        src=\"".concat(RESTAURANT_API_ENDPOINT, "/images/medium/").concat(restaurant.pictureId, "\" \n        alt=\"").concat(restaurant.name, "\" \n        loading=\"lazy\"\n      />\n      <div class=\"city\">").concat(restaurant.city, "</div>\n      <div class=\"list_item_content\">\n        <div class=\"list_item_rating\">\n          <span class=\"star-icon\">&#9733;</span> \n          ").concat(restaurant.rating, "\n        </div>\n        <h1 class=\"list_item_title\">\n        <a href=\"#detail-").concat(restaurant.id, "\" data-id=\"").concat(restaurant.id, "\">").concat(restaurant.name, "</a>\n        </h1>\n        <div class=\"list_item_desc\">").concat(restaurant.description.slice(0, 150), "...</div>\n      </div>\n    </div>\n  ");

        // Append each restaurant to the grid container
        gridContainer.appendChild(restaurantElement);
      });
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); // Mendaftarkan elemen kustom
customElements.define("restaurant-list", RestaurantList);

// Fungsi untuk mendapatkan ID restoran dari hash
function getRestaurantIdFromHash() {
  var hash = window.location.hash;
  if (hash.startsWith("#detail-")) {
    return hash.split("-")[1]; // Mengambil ID dari hash
  }
  return null;
}

// Pada saat DOM sudah siap, cek apakah ada ID restoran dari hash
document.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
  var RestaurantList, restaurantId, restaurantListElement, handleHashChange, _handleHashChange;
  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        _handleHashChange = function _handleHashChange3() {
          _handleHashChange = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var hash, restaurantId, restaurantListElement, detailElement, favoriteRestaurantList, favoriteRestaurantListElement, _restaurantId, restaurantDetail, restaurantDetailElement;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  showLoader(); // Tampilkan loader saat berpindah halaman
                  hash = window.location.hash;
                  restaurantId = getRestaurantIdFromHash();
                  restaurantListElement = document.querySelector("#RestaurantList");
                  detailElement = document.querySelector("#restaurantDetail");
                  favoriteRestaurantList = document.querySelector("#favoriteRestaurantList"); // Sembunyikan semua bagian
                  restaurantListElement.style.display = "none";
                  detailElement.style.display = "none";
                  favoriteRestaurantList.style.display = "none";
                  if (!(window.location.hash === "")) {
                    _context3.next = 12;
                    break;
                  }
                  _context3.next = 12;
                  return renderRestaurantList();
                case 12:
                  if (!(hash === "#favorite")) {
                    _context3.next = 22;
                    break;
                  }
                  favoriteRestaurantListElement = document.createElement("favorite-restaurant-list");
                  favoriteRestaurantList.innerHTML = ""; // Kosongkan konten sebelumnya
                  favoriteRestaurantList.appendChild(favoriteRestaurantListElement); // Tambahkan komponen daftar restoran favorit

                  // Sembunyikan elemen yang tidak diperlukan dan tampilkan elemen favorit
                  restaurantListElement.style.display = "none";
                  detailElement.style.display = "none";
                  favoriteRestaurantList.style.display = "grid";
                  hideLoader(); // Sembunyikan loader saat selesai memuat
                  _context3.next = 35;
                  break;
                case 22:
                  if (!hash.startsWith("#detail-")) {
                    _context3.next = 32;
                    break;
                  }
                  _restaurantId = getRestaurantIdFromHash();
                  _context3.next = 26;
                  return fetchRestaurantDetail(_restaurantId);
                case 26:
                  restaurantListElement.style.display = "none";
                  detailElement.style.display = "block";
                  favoriteRestaurantList.style.display = "none"; // Sembunyikan halaman favorit

                  hideLoader(); // Sembunyikan loader saat selesai memuat
                  _context3.next = 35;
                  break;
                case 32:
                  restaurantListElement.style.display = "grid";
                  detailElement.style.display = "none";
                  favoriteRestaurantList.style.display = "none"; // Sembunyikan halaman favorit
                case 35:
                  if (!restaurantId) {
                    _context3.next = 42;
                    break;
                  }
                  _context3.next = 38;
                  return fetchRestaurantDetail(restaurantId);
                case 38:
                  restaurantDetail = _context3.sent;
                  if (restaurantDetail) {
                    detailElement.innerHTML = ""; // Kosongkan detail sebelumnya
                    restaurantDetailElement = document.createElement("restaurant-detail");
                    restaurantDetailElement.setAttribute("restaurant-id", restaurantId);
                    detailElement.appendChild(restaurantDetailElement); // Tambahkan elemen detail
                    detailElement.style.display = "block"; // Pastikan detail terlihat
                    restaurantListElement.style.display = "none"; // Sembunyikan daftar restoran

                    hideLoader(); // Sembunyikan loader saat selesai memuat
                  } else {
                    console.error("Detail restoran tidak ditemukan");
                    window.location.hash = ""; // Jika tidak ada ID, kembali ke daftar restoran
                  }
                  _context3.next = 46;
                  break;
                case 42:
                  restaurantListElement.style.display = "none";
                  favoriteRestaurantList.style.display = "grid";
                  detailElement.style.display = "none"; // Sembunyikan detail

                  hideLoader(); // Sembunyikan loader saat selesai memuat
                case 46:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return _handleHashChange.apply(this, arguments);
        };
        handleHashChange = function _handleHashChange2() {
          return _handleHashChange.apply(this, arguments);
        };
        RestaurantList = document.querySelector("#RestaurantList"); // Pastikan elemen ini ada di HTML
        restaurantId = getRestaurantIdFromHash();
        console.log("RestaurantList Display:", getComputedStyle(RestaurantList).display);
        console.log("Grid Columns:", getComputedStyle(RestaurantList).gridTemplateColumns);
        if (!restaurantId) {
          _context4.next = 11;
          break;
        }
        _context4.next = 9;
        return fetchRestaurantDetail(restaurantId);
      case 9:
        _context4.next = 13;
        break;
      case 11:
        restaurantListElement = document.createElement("restaurant-list"); // Buat elemen kustom untuk daftar restoran
        RestaurantList.appendChild(restaurantListElement); // Tambahkan ke kontainer
      case 13:
        // Pasang event listener untuk hashchange dan DOMContentLoaded
        window.addEventListener("hashchange", handleHashChange);
        document.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                console.log("Page loaded. Current hash:", window.location.hash);
                _context2.next = 3;
                return handleHashChange();
              case 3:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })));
      case 15:
      case "end":
        return _context4.stop();
    }
  }, _callee4);
})));

// Fungsi untuk menampilkan halaman berdasarkan hash
function renderContentBasedOnHash() {
  return _renderContentBasedOnHash.apply(this, arguments);
} // Pasang event listener untuk `hashchange`
function _renderContentBasedOnHash() {
  _renderContentBasedOnHash = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
    var hash, restaurantListElement, detailElement, favoriteRestaurantList, restaurantId, restaurant, restaurantDetailElement, favoriteRestaurantListElement, _restaurantId2;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          showLoader(); // Tampilkan loader saat berpindah halaman
          hash = window.location.hash;
          restaurantListElement = document.querySelector("#RestaurantList");
          detailElement = document.querySelector("#restaurantDetail");
          favoriteRestaurantList = document.querySelector("#favoriteRestaurantList");
          if (!hash.startsWith("#detail-")) {
            _context23.next = 14;
            break;
          }
          restaurantId = getRestaurantIdFromHash();
          if (!restaurantId) {
            _context23.next = 12;
            break;
          }
          _context23.next = 10;
          return fetchRestaurantDetail(restaurantId);
        case 10:
          restaurant = _context23.sent;
          if (restaurant) {
            detailElement.innerHTML = ""; // Kosongkan konten sebelumnya
            restaurantDetailElement = document.createElement("restaurant-detail");
            restaurantDetailElement.setAttribute("restaurant-id", restaurantId);
            detailElement.appendChild(restaurantDetailElement);
            detailElement.style.display = "block";
            restaurantListElement.style.display = "none";
            hideLoader(); // Sembunyikan loader saat selesai memuat
          } else {
            console.error("Detail restoran tidak ditemukan");
          }
        case 12:
          _context23.next = 17;
          break;
        case 14:
          // Default behavior
          restaurantListElement.style.display = "grid";
          detailElement.style.display = "none";
          hideLoader(); // Sembunyikan loader saat selesai memuat
        case 17:
          if (!(hash === "#favorite")) {
            _context23.next = 28;
            break;
          }
          showLoader(); // Tampilkan loader saat berpindah halaman
          // Tampilkan halaman favorit
          favoriteRestaurantListElement = document.createElement("favorite-restaurant-list");
          favoriteRestaurantList.innerHTML = ""; // Kosongkan konten sebelumnya
          favoriteRestaurantList.appendChild(favoriteRestaurantListElement); // Tambahkan komponen daftar restoran favorit

          restaurantListElement.style.display = "none";
          detailElement.style.display = "none";
          favoriteRestaurantList.style.display = "block"; // Tampilkan halaman favorit
          hideLoader(); // Sembunyikan loader saat selesai memuat
          _context23.next = 42;
          break;
        case 28:
          if (!hash.startsWith("#detail-")) {
            _context23.next = 38;
            break;
          }
          _restaurantId2 = getRestaurantIdFromHash();
          _context23.next = 32;
          return fetchRestaurantDetail(_restaurantId2);
        case 32:
          // Ambil detail restoran
          restaurantListElement.style.display = "none";
          detailElement.style.display = "block";
          favoriteRestaurantList.style.display = "none"; // Sembunyikan halaman favorit
          hideLoader(); // Sembunyikan loader saat selesai memuat
          _context23.next = 42;
          break;
        case 38:
          restaurantListElement.style.display = "grid";
          detailElement.style.display = "none";
          favoriteRestaurantList.style.display = "none"; // Sembunyikan halaman favorit
          hideLoader(); // Sembunyikan loader saat selesai memuat
        case 42:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return _renderContentBasedOnHash.apply(this, arguments);
}
window.addEventListener("hashchange", renderContentBasedOnHash);
var renderRestaurantList = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var restaurantListElement, restaurantList, restaurantListComponent;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          restaurantListElement = document.querySelector("#RestaurantList");
          if (!restaurantListElement) {
            _context5.next = 9;
            break;
          }
          _context5.next = 4;
          return fetchRestaurantList();
        case 4:
          restaurantList = _context5.sent;
          // Ambil data daftar restoran
          restaurantListElement.innerHTML = ""; // Kosongkan konten sebelumnya
          restaurantListComponent = document.createElement("restaurant-list");
          restaurantListComponent.renderList(restaurantList); // Memastikan render ulang
          restaurantListElement.appendChild(restaurantListComponent);
        case 9:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function renderRestaurantList() {
    return _ref3.apply(this, arguments);
  };
}();

// Event listener untuk `DOMContentLoaded` untuk menangani refresh
document.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        console.log("Page loaded. Current hash:", window.location.hash);
        _context6.next = 3;
        return renderContentBasedOnHash();
      case 3:
      case "end":
        return _context6.stop();
    }
  }, _callee6);
})));
document.addEventListener("click", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(event) {
    var favoriteButton, restaurantId, isFavorited, restaurant;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          favoriteButton = event.target.closest("#favoriteButton");
          if (!favoriteButton) {
            _context7.next = 21;
            break;
          }
          restaurantId = favoriteButton.getAttribute("data-id");
          _context7.next = 5;
          return isRestaurantFavorited(restaurantId);
        case 5:
          isFavorited = _context7.sent;
          if (!isFavorited) {
            _context7.next = 13;
            break;
          }
          _context7.next = 9;
          return removeRestaurantFromFavorites(restaurantId);
        case 9:
          // Hapus dari favorit
          favoriteButton.classList.remove("favorited");
          favoriteButton.innerHTML = '<i class="far fa-heart"></i>'; // Ikon hati kosong
          _context7.next = 21;
          break;
        case 13:
          _context7.next = 15;
          return fetchRestaurantDetail(restaurantId);
        case 15:
          restaurant = _context7.sent;
          if (!restaurant) {
            _context7.next = 21;
            break;
          }
          _context7.next = 19;
          return addRestaurantToFavorites(restaurant);
        case 19:
          // Simpan data lengkap ke IndexedDB
          favoriteButton.classList.add("favorited");
          favoriteButton.innerHTML = '<i class="fas fa-heart"></i>'; // Ikon hati penuh
        case 21:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x) {
    return _ref5.apply(this, arguments);
  };
}());
document.addEventListener("click", function (event) {
  var favoriteButton = event.target.closest("#favoriteButton");
  if (favoriteButton) {
    console.log("Tombol favorite diklik:", favoriteButton.getAttribute("data-id")); // Logging untuk memverifikasi
  }
});
var fetchRestaurantDetail = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(restaurantId) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          showLoader(); // Tampilkan loader saat memulai pemuatan
          _context8.prev = 1;
          _context8.next = 4;
          return fetch("".concat(RESTAURANT_API_ENDPOINT, "/detail/").concat(restaurantId));
        case 4:
          response = _context8.sent;
          if (response.ok) {
            _context8.next = 7;
            break;
          }
          throw new Error("Gagal mendapatkan detail restoran");
        case 7:
          _context8.next = 9;
          return response.json();
        case 9:
          data = _context8.sent;
          return _context8.abrupt("return", data.restaurant);
        case 13:
          _context8.prev = 13;
          _context8.t0 = _context8["catch"](1);
          console.error("Gagal mendapatkan detail restoran:", _context8.t0);
          return _context8.abrupt("return", null);
        case 17:
          _context8.prev = 17;
          hideLoader(); // Sembunyikan loader setelah pemuatan selesai
          return _context8.finish(17);
        case 20:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 13, 17, 20]]);
  }));
  return function fetchRestaurantDetail(_x2) {
    return _ref6.apply(this, arguments);
  };
}();
var RestaurantDetail = /*#__PURE__*/function (_HTMLElement2) {
  function RestaurantDetail() {
    var _this;
    _classCallCheck(this, RestaurantDetail);
    _this = _callSuper(this, RestaurantDetail);
    _this.restaurantId = null;
    return _this;
  }
  _inherits(RestaurantDetail, _HTMLElement2);
  return _createClass(RestaurantDetail, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var restaurant;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              this.restaurantId = this.getAttribute("restaurant-id");
              _context9.next = 3;
              return fetchRestaurantDetail(this.restaurantId);
            case 3:
              restaurant = _context9.sent;
              if (!restaurant) {
                _context9.next = 8;
                break;
              }
              console.log("Menampilkan detail restoran:", restaurant); // Logging detail
              _context9.next = 8;
              return this.renderRestaurantDetail(restaurant);
            case 8:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function connectedCallback() {
        return _connectedCallback2.apply(this, arguments);
      }
      return connectedCallback;
    }()
  }, {
    key: "renderRestaurantDetail",
    value: function () {
      var _renderRestaurantDetail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(restaurant) {
        var _this2 = this;
        var categories, foods, drinks, reviewsContent, isFavorited, favoriteButtonIcon, backButton, favoriteButton, reviewForm;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              // Logika untuk menampilkan detail restoran
              console.log("Mengatur konten untuk detail restoran"); // Logging
              categories = restaurant.categories.map(function (category) {
                return category.name;
              }).join(", ");
              foods = restaurant.menus.foods.map(function (food) {
                return food.name;
              }).join(", ");
              drinks = restaurant.menus.drinks.map(function (drink) {
                return drink.name;
              }).join(", ");
              reviewsContent = restaurant.customerReviews.map(function (review) {
                return "\n      <div class=\"customer-review\">\n        <p><strong>".concat(review.name, "</strong> pada ").concat(review.date, "</p>\n        <p>").concat(review.review, "</p>\n      </div>\n    ");
              }).join("");
              _context12.next = 7;
              return isRestaurantFavorited(this.restaurantId);
            case 7:
              isFavorited = _context12.sent;
              favoriteButtonIcon = isFavorited ? "fas fa-heart" : "far fa-heart"; // Hati penuh atau kosong
              // Tombol kembali ke daftar restoran
              backButton = "\n      <button id=\"backButton\" class=\"back-button\" aria-label=\"Kembali ke daftar restoran\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M19 12H5\" stroke=\"#fff\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      <path d=\"M12 19L5 12L12 5\" stroke=\"#fff\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </svg></button>\n    ";
              favoriteButton = "\n      <button class=\"favorite-button\" id=\"favoriteButton\" data-id=\"".concat(this.restaurantId, "\">\n        <i class=\"").concat(favoriteButtonIcon, "\"></i>\n      </button>\n    ");
              reviewForm = "\n      <div id=\"reviewFormContainer\">\n        <h3>Tambahkan Ulasan</h3>\n        <form id=\"reviewForm\">\n          <input type=\"hidden\" name=\"restaurantId\" value=\"".concat(this.restaurantId, "\">\n          <div>\n            <label for=\"reviewName\">Nama:</label>\n            <input type=\"text\" id=\"reviewName\" name=\"name\" required>\n          </div>\n          <div>\n            <label for=\"reviewText\">Ulasan:</label>\n            <textarea id=\"reviewText\" name=\"review\" required></textarea>\n          </div>\n          <button type=\"submit\">Kirim Ulasan</button>\n        </form>\n      </div>\n    "); // Set content untuk detail restoran
              this.innerHTML = "\n      <h1>Detail Restoran</h1>\n      ".concat(backButton, " <!-- Tambahkan tombol kembali -->\n      <img src=\"").concat(RESTAURANT_API_ENDPOINT, "/images/medium/").concat(restaurant.pictureId, "\" alt=\"").concat(restaurant.name, "\">\n      <h2>").concat(restaurant.name, "</h2>\n      <div class=\"detailatas\">\n        <p><strong>Alamat:</strong> ").concat(restaurant.address, "</p>\n        <p><strong>Kota:</strong> ").concat(restaurant.city, "</p>\n        <p><strong>Kategori:</strong> ").concat(categories, "</p>\n        <p><strong>Description:</strong> ").concat(restaurant.description, "</p>\n        <p><strong>Menu Makanan:</strong> ").concat(foods, "</p>\n        <p><strong>Menu Minuman:</strong> ").concat(drinks, "</p>\n        ").concat(favoriteButton, "\n      </div>\n      ").concat(reviewForm, "\n      <div class=\"ulasanresto\">").concat(reviewsContent, "</div>\n    ");

              // Tambahkan event listener untuk tombol kembali
              this.querySelector("#backButton").addEventListener("click", function () {
                window.location.hash = ""; // Kembali ke daftar restoran
                location.reload(); // Menyegarkan ulang halaman
              });

              // Tambahkan event listener untuk tombol favorit
              this.querySelector("#favoriteButton").addEventListener("click", /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(event) {
                  var button, isFavorited;
                  return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                      case 0:
                        button = event.target;
                        _context10.next = 3;
                        return isRestaurantFavorited(_this2.restaurantId);
                      case 3:
                        isFavorited = _context10.sent;
                        if (!isFavorited) {
                          _context10.next = 12;
                          break;
                        }
                        _context10.next = 7;
                        return removeRestaurantFromFavorites(_this2.restaurantId);
                      case 7:
                        button.classList.remove("favorited");
                        button.innerHTML = '<i class="far fa-heart"></i>';
                        sweetalert2_all_default().fire({
                          icon: "warning",
                          title: "Tidak di Favoritkan!!",
                          text: "Restoran telah di hapus dari favorit."
                        }); // Pesan keberhasilan
                        _context10.next = 17;
                        break;
                      case 12:
                        _context10.next = 14;
                        return addRestaurantToFavorites({
                          id: _this2.restaurantId
                        });
                      case 14:
                        button.classList.add("favorited");
                        button.innerHTML = '<i class="fas fa-heart"></i>';
                        sweetalert2_all_default().fire({
                          icon: "success",
                          title: "Di Favoritkan!!",
                          text: "Restoran telah di favoritkan."
                        }); // Pesan keberhasilan
                      case 17:
                      case "end":
                        return _context10.stop();
                    }
                  }, _callee10);
                }));
                return function (_x4) {
                  return _ref7.apply(this, arguments);
                };
              }());

              // Tambahkan event listener untuk formulir ulasan
              this.querySelector("#reviewForm").addEventListener("submit", /*#__PURE__*/function () {
                var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(event) {
                  var formData, reviewData, reviewResponse, responseData, newReview;
                  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                      case 0:
                        event.preventDefault();
                        showLoader(); // Tampilkan loader saat berpindah halaman
                        formData = new FormData(event.target);
                        reviewData = {
                          id: formData.get("restaurantId"),
                          name: formData.get("name"),
                          review: formData.get("review")
                        };
                        _context11.prev = 4;
                        _context11.next = 7;
                        return fetch("".concat(RESTAURANT_API_ENDPOINT, "/review"), {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify(reviewData)
                        });
                      case 7:
                        reviewResponse = _context11.sent;
                        if (!reviewResponse.ok) {
                          _context11.next = 20;
                          break;
                        }
                        _context11.next = 11;
                        return reviewResponse.json();
                      case 11:
                        responseData = _context11.sent;
                        newReview = responseData.customerReviews.at(-1);
                        _this2.querySelector(".ulasanresto").insertAdjacentHTML("beforeend", "\n                <div class=\"customer-review\">\n                  <p><strong>".concat(newReview.name, "</strong> pada ").concat(newReview.date, "</p>\n                  <p>").concat(newReview.review, "</p>\n                </div>\n              ")); // Kosongkan formulir ulasan
                        event.target.reset();
                        sweetalert2_all_default().fire({
                          icon: "success",
                          title: "Ulasan Berhasil",
                          text: "Ulasan Anda telah dikirim."
                        }); // Pesan keberhasilan

                        console.log("Ulasan berhasil dikirim dan ditambahkan ke halaman.");
                        hideLoader(); // Sembunyikan loader saat selesai memuat
                        _context11.next = 21;
                        break;
                      case 20:
                        console.error("Gagal mengirim ulasan.");
                      case 21:
                        _context11.next = 27;
                        break;
                      case 23:
                        _context11.prev = 23;
                        _context11.t0 = _context11["catch"](4);
                        console.error("Error mengirim ulasan:", _context11.t0);
                        hideLoader(); // Sembunyikan loader saat selesai memuat
                      case 27:
                      case "end":
                        return _context11.stop();
                    }
                  }, _callee11, null, [[4, 23]]);
                }));
                return function (_x5) {
                  return _ref8.apply(this, arguments);
                };
              }());
            case 16:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function renderRestaurantDetail(_x3) {
        return _renderRestaurantDetail.apply(this, arguments);
      }
      return renderRestaurantDetail;
    }()
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("restaurant-detail", RestaurantDetail);
var DATABASE_NAME = "restaurantDB";
var OBJECT_STORE_NAME = "favorites";
var openDatabase = function openDatabase() {
  return new Promise(function (resolve, reject) {
    var request = indexedDB.open(DATABASE_NAME, 1);
    request.onupgradeneeded = function (event) {
      var db = event.target.result;
      if (!db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
        db.createObjectStore(OBJECT_STORE_NAME, {
          keyPath: "id"
        });
      }
    };
    request.onsuccess = function (event) {
      resolve(event.target.result); // Database dibuka dengan benar
    };
    request.onerror = function (event) {
      sweetalert2_all_default().fire({
        icon: "error",
        title: "Gagal Membuka Database",
        text: "Terjadi kesalahan saat membuka database. Silakan coba lagi."
      }); // Pesan kesalahan
      reject(event.target.error); // Tangkap kesalahan saat membuka database
    };
  });
};

// Menambahkan restoran ke favorit
var addRestaurantToFavorites = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(restaurant) {
    var db, transaction, objectStore, restaurantData;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return openDatabase();
        case 2:
          db = _context13.sent;
          // Buka database
          transaction = db.transaction(OBJECT_STORE_NAME, "readwrite"); // Transaksi read-write
          objectStore = transaction.objectStore(OBJECT_STORE_NAME);
          _context13.prev = 5;
          // Simpan data lengkap, bukan hanya ID
          restaurantData = {
            id: restaurant.id,
            name: restaurant.name,
            pictureId: restaurant.pictureId,
            city: restaurant.city,
            description: restaurant.description,
            rating: restaurant.rating
          };
          objectStore.put(restaurantData); // Gunakan `put` untuk menghindari duplikasi
          _context13.next = 10;
          return transaction.complete;
        case 10:
          // Selesaikan transaksi
          console.log("Restoran ditambahkan ke favorit:", restaurantData); // Logging
          _context13.next = 16;
          break;
        case 13:
          _context13.prev = 13;
          _context13.t0 = _context13["catch"](5);
          console.error("Error menambahkan restoran ke favorit:", _context13.t0); // Tangkap kesalahan
        case 16:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[5, 13]]);
  }));
  return function addRestaurantToFavorites(_x6) {
    return _ref9.apply(this, arguments);
  };
}();

// Menghapus restoran dari favorit
var removeRestaurantFromFavorites = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(restaurantId) {
    var db, transaction, objectStore;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return openDatabase();
        case 2:
          db = _context14.sent;
          transaction = db.transaction(OBJECT_STORE_NAME, "readwrite");
          objectStore = transaction.objectStore(OBJECT_STORE_NAME);
          objectStore["delete"](restaurantId);
          return _context14.abrupt("return", transaction.complete);
        case 7:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function removeRestaurantFromFavorites(_x7) {
    return _ref10.apply(this, arguments);
  };
}();

// Memeriksa apakah restoran adalah favorit
var isRestaurantFavorited = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(restaurantId) {
    var db, transaction, objectStore;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return openDatabase();
        case 2:
          db = _context15.sent;
          transaction = db.transaction(OBJECT_STORE_NAME, "readonly");
          objectStore = transaction.objectStore(OBJECT_STORE_NAME);
          return _context15.abrupt("return", new Promise(function (resolve, reject) {
            var request = objectStore.get(restaurantId);
            request.onsuccess = function () {
              resolve(request.result !== undefined);
            };
            request.onerror = function () {
              reject(request.error);
            };
          }));
        case 6:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function isRestaurantFavorited(_x8) {
    return _ref11.apply(this, arguments);
  };
}();

// Fungsi untuk mengambil semua restoran favorit dari IndexedDB
var fetchFavoriteRestaurants = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
    var db, transaction, objectStore, request;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return openDatabase();
        case 3:
          db = _context16.sent;
          // Buka database
          transaction = db.transaction(OBJECT_STORE_NAME, "readonly"); // Transaksi read-only
          objectStore = transaction.objectStore(OBJECT_STORE_NAME);
          request = objectStore.getAll(); // Ambil semua data dari Object Store
          return _context16.abrupt("return", new Promise(function (resolve, reject) {
            request.onsuccess = function () {
              resolve(request.result); // Kembalikan data favorit
            };
            request.onerror = function (event) {
              console.error("Error saat mengambil restoran favorit:", event.target.error); // Tangkap kesalahan
              reject(event.target.error);
            };
          }));
        case 10:
          _context16.prev = 10;
          _context16.t0 = _context16["catch"](0);
          console.error("Error saat membuka database:", _context16.t0); // Tangkap kesalahan
          throw _context16.t0;
        case 14:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 10]]);
  }));
  return function fetchFavoriteRestaurants() {
    return _ref12.apply(this, arguments);
  };
}();
// Komponen untuk menampilkan daftar restoran favorit
var FavoriteRestaurantList = /*#__PURE__*/function (_HTMLElement3) {
  function FavoriteRestaurantList() {
    _classCallCheck(this, FavoriteRestaurantList);
    return _callSuper(this, FavoriteRestaurantList, arguments);
  }
  _inherits(FavoriteRestaurantList, _HTMLElement3);
  return _createClass(FavoriteRestaurantList, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        var favoriteRestaurants;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              _context17.prev = 0;
              _context17.next = 3;
              return fetchFavoriteRestaurants();
            case 3:
              favoriteRestaurants = _context17.sent;
              if (favoriteRestaurants && favoriteRestaurants.length > 0) {
                this.renderFavoriteList(favoriteRestaurants);
              } else {
                this.innerHTML = "<p>Anda belum memiliki restoran favorit.</p>"; // Pesan jika tidak ada restoran favorit
              }
              _context17.next = 11;
              break;
            case 7:
              _context17.prev = 7;
              _context17.t0 = _context17["catch"](0);
              this.innerHTML = "<p>Terjadi kesalahan saat mengambil restoran favorit.</p>";
              console.error("Error di FavoriteRestaurantList:", _context17.t0);
            case 11:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this, [[0, 7]]);
      }));
      function connectedCallback() {
        return _connectedCallback3.apply(this, arguments);
      }
      return connectedCallback;
    }()
  }, {
    key: "renderFavoriteList",
    value: function renderFavoriteList(restaurants) {
      // Start the grid container
      this.innerHTML = "<div class=\"favorit-grid\"></div>";
      var gridContainer = this.querySelector(".favorit-grid");

      // Gunakan struktur HTML yang mirip dengan daftar restoran

      restaurants.forEach(function (restaurant) {
        var favElement = document.createElement("div");
        favElement.classList.add("restaurant-item"); // Add a class for styling

        favElement.innerHTML = "\n      <div class=\"list_item\">\n      <img \n        class=\"list_item_thumb\" \n        src=\"".concat(RESTAURANT_API_ENDPOINT, "/images/medium/").concat(restaurant.pictureId, "\" \n        alt=\"").concat(restaurant.name, "\" \n      />\n      <div class=\"city\">").concat(restaurant.city, "</div>\n      <div class=\"list_item_content\">\n        <div class=\"list_item_rating\">\n          <span class=\"star-icon\">&#9733;</span> \n          ").concat(restaurant.rating, "\n        </div>\n        <h1 class=\"list_item_title\">\n        <a href=\"#detail-").concat(restaurant.id, "\" data-id=\"").concat(restaurant.id, "\">").concat(restaurant.name, "</a>\n        </h1>\n        <div class=\"list_item_desc\">").concat(restaurant.description.slice(0, 150), "...</div>\n      </div>\n    </div>\n  ");
        gridContainer.appendChild(favElement);
      });
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); // Daftarkan elemen kustom
customElements.define("favorite-restaurant-list", FavoriteRestaurantList);
document.addEventListener("DOMContentLoaded", function () {
  // Kode untuk menyiapkan event listener menu
  var menu = document.querySelector("#menu");
  menu.addEventListener("click", function (event) {
    var drawer = document.querySelector("#drawer");
    drawer.classList.toggle("open");
    event.stopPropagation();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var skipToContentButton = document.querySelector(".skip-to-content");
  var konten = document.getElementById("konten");

  // Function to handle keydown event
  function handleFirstTab(e) {
    if (e.key === "Tab") {
      // Remove the keydown event listener once it's triggered
      document.removeEventListener("keydown", handleFirstTab);
      // Show the skip-to-content button
      skipToContentButton.style.display = "block";
    }
  }

  // Add event listener for keydown event
  document.addEventListener("keydown", handleFirstTab);

  // Check if there's already a focusable element on the page
  var focusableElements = document.querySelectorAll("a, button, input, select, textarea");
  var firstFocusableElement = focusableElements[0];
  if (firstFocusableElement) {
    // If there's a focusable element, hide the skip-to-content button
    skipToContentButton.style.display = "none";
  } else {
    // If there's no focusable element, show the skip-to-content button
    skipToContentButton.style.display = "block";
  }

  // Add click event listener to skip-to-content button
  skipToContentButton.addEventListener("click", function (event) {
    event.preventDefault();
    konten.scrollIntoView({
      behavior: "smooth"
    });
    // Hide the skip-to-content button after it's clicked
    skipToContentButton.style.display = "none";
  });
});

// // Fetch data JSON
// fetch("./data/REVIEW.json")
//   .then((response) => response.json())
//   .then((jsonData) => {
//     let reviews = jsonData.reviews;
//     let reviewList = "";
//     reviews.forEach(function (review) {
//       let stars = "";
//       // Membuat bintang berdasarkan rating
//       for (let i = 0; i < review.rating; i++) {
//         stars += "★";
//       }
//       // Menambahkan review ke daftar
//       reviewList += `
//       <div class="review1">
//         <div class="review-header">
//           <img src="${review.customerImageUrl}" alt="Customer Image" onerror="this.src='/images/placeholder.png' class="customer-image" title="${review.customerName}'s Profile">
//           <div class="customer-info">
//             <h3 class="customer-name">${review.customerName}</h3>
//             <p class="restaurant-name">${review.restaurantName}</p>
//             <p class="review-date">${review.reviewDate}</p>
//             <p class="review-rating">${stars}</p>
//           </div>
//         </div>
//         <p class="review-text">${review.reviewText}</p>
//       </div>
//     `;
//     });

//     document.querySelector("#reviews").innerHTML = reviewList;
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js") // Pastikan jalurnya benar
  .then(function () {
    console.log("Service worker terdaftar");
  })["catch"](function (err) {
    console.error("Service worker gagal terdaftar:", err);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  var deferredPrompt;
  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault(); // Mencegah prompt otomatis
    deferredPrompt = event; // Simpan event untuk digunakan nanti

    // Tampilkan UI untuk memicu Add to Home Screen
    var installButton = document.querySelector("#installButton"); // Pastikan elemen ini ada di HTML Anda
    installButton.style.display = "none"; // Menampilkan tombol install

    installButton.addEventListener("click", function () {
      deferredPrompt.prompt(); // Tampilkan prompt
      deferredPrompt.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        }
        deferredPrompt = null; // Bersihkan variabel
      });
    });
  });
  var backButton = document.querySelector("#backButton");
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.hash = ""; // Kembali ke daftar restoran
    });
  }
});
self.addEventListener("fetch", function (event) {
  var requestUrl = new URL(event.request.url);

  // Jika permintaan adalah ke RESTAURANT_API_ENDPOINT, gunakan cache dinamis
  if (requestUrl.origin === "https://restaurant-api.dicoding.dev") {
    event.respondWith(caches.open("dynamic-cache").then(function (cache) {
      return fetch(event.request).then(function (response) {
        cache.put(event.request.url, response.clone()); // Simpan data API di cache
        return response;
      })["catch"](function () {
        // Jika offline, kembalikan data yang telah di-cache
        return cache.match(event.request);
      });
    }));
  } else {
    // Untuk sumber daya lain, gunakan cache default
    event.respondWith(caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }));
  }
});
document.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
  var pageTitleElement, updatePageTitle;
  return _regeneratorRuntime().wrap(function _callee18$(_context18) {
    while (1) switch (_context18.prev = _context18.next) {
      case 0:
        pageTitleElement = document.querySelector("#pageTitle"); // Elemen teks yang ingin diubah
        // Fungsi untuk memperbarui judul berdasarkan hash
        updatePageTitle = function updatePageTitle() {
          var hash = window.location.hash;
          if (hash.startsWith("#detail-")) {
            pageTitleElement.style.display = "none"; // Tambahkan kelas untuk memusatkan teks
          } else if (hash === "#favorite") {
            pageTitleElement.textContent = "Restoran Favorit"; // Ubah teks untuk halaman favorit
            pageTitleElement.style.display = "grid"; // Tambahkan kelas untuk memusatkan teks
          } else {
            pageTitleElement.textContent = "Explore Restaurant"; // Ubah teks kembali ke default
          }
        }; // Pasang event listener untuk hash change
        window.addEventListener("hashchange", updatePageTitle);
        console.log("Hash changed!");
        // Jalankan saat aplikasi dimuat untuk menyesuaikan teks pada awal
        updatePageTitle();
      case 5:
      case "end":
        return _context18.stop();
    }
  }, _callee18);
})));
document.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
  var favoriteButton;
  return _regeneratorRuntime().wrap(function _callee21$(_context21) {
    while (1) switch (_context21.prev = _context21.next) {
      case 0:
        favoriteButton = document.querySelector("#favoriteButton");
        if (favoriteButton) {
          favoriteButton.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
            var restaurantId, isFavorited;
            return _regeneratorRuntime().wrap(function _callee20$(_context20) {
              while (1) switch (_context20.prev = _context20.next) {
                case 0:
                  restaurantId = favoriteButton.getAttribute("data-id"); // Periksa apakah restoran adalah favorit di IndexedDB
                  _context20.next = 3;
                  return isRestaurantFavorited(restaurantId);
                case 3:
                  isFavorited = _context20.sent;
                  // Ubah tampilan tombol favorit berdasarkan status favorit
                  if (isFavorited) {
                    favoriteButton.classList.add("favorited");
                    favoriteButton.innerHTML = '<i class="fas fa-heart"></i>'; // Ikon hati penuh
                  } else {
                    favoriteButton.classList.remove("favorited");
                    favoriteButton.innerHTML = '<i class="far fa-heart"></i>'; // Ikon hati kosong
                  }

                  // Tambahkan event listener untuk klik pada tombol favorit
                  favoriteButton.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
                    var isFavorited;
                    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                      while (1) switch (_context19.prev = _context19.next) {
                        case 0:
                          _context19.next = 2;
                          return isRestaurantFavorited(restaurantId);
                        case 2:
                          isFavorited = _context19.sent;
                          if (!isFavorited) {
                            _context19.next = 10;
                            break;
                          }
                          _context19.next = 6;
                          return removeRestaurantFromFavorites(restaurantId);
                        case 6:
                          favoriteButton.classList.remove("favorited");
                          favoriteButton.innerHTML = '<i class="far fa-heart"></i>'; // Ikon hati kosong
                          _context19.next = 14;
                          break;
                        case 10:
                          _context19.next = 12;
                          return addRestaurantToFavorites({
                            id: restaurantId
                          });
                        case 12:
                          favoriteButton.classList.add("favorited");
                          favoriteButton.innerHTML = '<i class="fas fa-heart"></i>'; // Ikon hati penuh
                        case 14:
                        case "end":
                          return _context19.stop();
                      }
                    }, _callee19);
                  })));
                case 6:
                case "end":
                  return _context20.stop();
              }
            }, _callee20);
          })));
        }
      case 2:
      case "end":
        return _context21.stop();
    }
  }, _callee21);
})));
// Fungsi untuk menampilkan loader
function showLoader() {
  var loader = document.querySelector(".loader");
  if (loader) {
    loader.classList.remove("loader--hidden");
  }
}

// Fungsi untuk menyembunyikan loader
function hideLoader() {
  var loader = document.querySelector(".loader");
  if (loader) {
    loader.classList.add("loader--hidden");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var splashScreen = document.getElementById("splashScreen");
  var mainContent = document.getElementById("mainContent");

  // Periksa apakah aplikasi telah dibuka sebelumnya dalam sesi ini
  if (!sessionStorage.getItem("firstVisit")) {
    // Jika belum, tandai sesi dan tampilkan splash screen
    sessionStorage.setItem("firstVisit", "true");

    // Tampilkan splash screen dan sembunyikan konten utama
    splashScreen.style.display = "flex";
    mainContent.style.display = "none";

    // Setelah beberapa detik, sembunyikan splash screen dan tampilkan konten utama
    setTimeout(function () {
      splashScreen.style.display = "none";
      mainContent.style.display = "block";
    }, 2000); // Tampilkan splash screen selama 2 detik
  } else {
    // Jika sudah dibuka, hanya tampilkan loader
    splashScreen.style.display = "none";
    mainContent.style.display = "block";
  }
});

/***/ }),

/***/ 249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
}
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
body {
  font-size: 12px;
  color: #424242;
  background-color: ivory;
}

a {
  display: inline-block;
  min-width: 44px;
  min-height: 44px;
}

.menu-seluler {
  background-color: #0c356a;
  color: white;
  width: 100%;
  display: flex;
  font-weight: 600;
  font-size: 20px;
  padding: 10px;
  justify-content: space-between;
}
.nav-seluler {
  background-color: #0c356a;
  width: 100%;
  display: flex;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
}
.navlist-seluler {
  width: 60%;
  padding: 0;
  margin: 0;
  text-align: left;
}
.navitems-seluler {
  box-sizing: border-box;
  display: inline-block;
  text-align: right;
  line-height: 24px;
  text-transform: uppercase;
  color: white;
}

.logo-seluler {
  margin-top: 20px;
}
.iconmenu-seluler a {
  text-decoration: none;
  color: white;
  font-size: 49px;
}
.nav-seluler a {
  display: inline-block;
  padding: 1.3em;
  text-decoration: none;
  color: #0c356a;
}
.nav-biasa {
  background-color: #0c356a;
  width: 100%;
  display: flex;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
}
.navlist {
  width: 80%;
  padding: 0;
  margin: 0;
  text-align: right;
}
.logo {
  width: 20%;
  padding: 0;
  margin: 0;
  text-align: left;
  box-sizing: border-box;
  display: inline-block;
  line-height: 24px;
}
.navitems {
  box-sizing: border-box;
  display: inline-block;
  text-align: right;
  line-height: 24px;
  text-transform: uppercase;
}
.navitems:hover a {
  color: #ff5733; /* Ubah warna teks saat hover di sini */
}

.nav-biasa a {
  display: inline-block;
  padding: 1.3em;
  text-decoration: none;
  color: white;
}
.nav-biasa a:hover {
  text-decoration: none;
  color: yellow;
}

.hero {
  position: relative;
  overflow: hidden;
  text-align: center; /* Mengatur teks ke tengah horizontal */
  max-height: 500px;
}

.hero-image {
  width: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Gunakan warna gelap semi-transparan */
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text h1 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.hero-text p {
  font-size: 1rem;
  margin-bottom: 0;
}

main {
  width: 100%;
  margin: 0 auto;
}

.main-grid {
  display: grid;
  grid-template-columns: 3fr; /* Kolom pertama 1 bagian dan kolom kedua 2 bagian */
  gap: 20px; /* Jarak antara kolom */
}

.content {
  margin: 0 20px;
}

.update {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
  text-align: center;
}
.update h1 {
  font-weight: 700;
  font-size: 2em;
  margin-bottom: 50px;
}

.restaurant-grid,
.favorit-grid {
  text-align: justify;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Selalu 3 kolom */
  gap: 24px; /* Jarak antar item yang lebih besar untuk pemisahan yang jelas */
  padding: 24px; /* Padding untuk seluruh grid */
  box-sizing: border-box; /* Pastikan padding termasuk dalam perhitungan ukuran */
}

.list_item {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  /* background-color: white; */
}
.city {
  position: absolute;
  top: 8px;
  left: 16px;
  border-radius: 5px;
  background-color: #df4c2b;
  padding: 5px 10px 5px;
  color: white;
  font-weight: 500;
}

.restaurant-item {
  background: #fff; /* Latar belakang putih untuk kejelasan */
  border: 1px solid #ddd; /* Garis halus untuk pemisahan */
  border-radius: 8px; /* Sudut membulat untuk tampilan modern */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Bayangan halus untuk kedalaman */
  transition: box-shadow 0.3s; /* Transisi untuk efek interaksi */
  overflow: hidden; /* Hindari konten tumpah keluar */
}

.list_item_content {
  padding: 16px; /* Padding yang cukup di dalam konten */
}

.star-icon {
  color: gold; /* Color for star icon (rating) */
}

.restaurant-item:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Bayangan lebih besar saat item dihover */
}

.list_item_thumb {
  width: 100%;
  max-height: 150px;
}
.list_item_rating {
  font-size: 22px;
  text-transform: uppercase;
  color: #999;
  background-color: #0c356a;
  width: 79px;
  font-weight: 500;
  border-radius: 5px;
}
.star-icon {
  color: #ffc400; /* Warna ikon bintang */
  font-size: 25px; /* Ukuran ikon bintang */
  margin-left: 5px;
}
.list_item_rating_value {
  color: #ebe8ff;
  font-weight: bolder;
  text-decoration: none;
  text-align: left;
  padding-top: 5px;
}
.list_item_rating_value a {
  padding-top: 5px;
}
.list_item_title {
  font-weight: 500;
  font-size: 16px;
  margin-top: -10px;
  transition: 0.3s opacity;
}
.list_item_title:hover {
  opacity: 0.5;
}
.list_item_title a {
  text-decoration: none;
  color: inherit;
  padding: 0.8rem 0;
}
#RestaurantList .list_item_desc {
  margin-top: -50px;
  font-size: 12px;
  line-height: 1.5em;
}

#favoriteRestaurantList .list_item_desc {
  font-size: 12px;
  line-height: 1.5em;
}

/* Tampilan untuk halaman detail restoran */
#restaurantDetail {
  padding: 20px;
  background-color: #f8f8f8; /* Warna latar belakang yang lembut */
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Efek bayangan */
  /* margin: 0px auto 20px;  */
  margin-top: -30px;
  margin-bottom: 30px;
  margin-left: 40px;
  margin-right: 40px;
  max-width: 100%; /* Batas maksimum lebar */
  font-size: 16px; /* Ukuran font yang lebih besar */
}

#restaurantDetail h1 {
  text-align: center;
  font-size: 40px;
  background-color: #0c356a;
  color: #fff;
  border-radius: 30px;
  margin-bottom: 20px;
}

/* Gambar restoran di bagian detail */
#restaurantDetail img {
  width: 70%; /* Lebar penuh */
  border-radius: 8px; /* Sudut membulat */
  margin-bottom: 20px; /* Jarak bawah */
  display: block;
  margin-left: auto; /* Agar margin kiri otomatis */
  margin-right: auto; /* Agar margin kanan otomatis */
}

/* Judul restoran */
#restaurantDetail h2 {
  color: #333; /* Warna teks gelap */
  font-size: 40px; /* Ukuran font lebih besar */
  margin-bottom: 10px; /* Jarak bawah */
  margin-left: 40px;
  font-weight: 900;
}
.back-button {
  background-color: #df4c2b;
  color: #fff;
  border: none;
  width: 70px;
  height: 70px;
  min-width: 44px;
  min-height: 44px;
  /* padding: 10px 20px; */
  cursor: pointer;
  border-radius: 50%;
  /* font-size: 16px; */
  margin-left: 40px;
}
.back-button svg {
  min-width: 44px;
  min-height: 44px;
}

.back-button:hover {
  background-color: #008c9e;
}

.detailatas,
.ulasanresto {
  background-color: #ebebeb;
  padding: 15px;
  margin: 20px 40px;
  border-radius: 8px;
}
/* Informasi umum restoran */
#restaurantDetail p {
  color: #666; /* Warna teks lebih ringan */
  margin-bottom: 10px;
  text-align: justify;
}

/* Tombol favorit dasar */
.favorite-button {
  text-align: right;
  background: none; /* Tidak ada latar belakang */
  border: none; /* Tanpa border */
  cursor: pointer; /* Ganti kursor ke pointer */
  color: #ff0000; /* Warna dasar merah */
  font-size: 50px; /* Ukuran lebih besar */
  transition: color 0.3s; /* Efek transisi saat warna berubah */
}

/* Tombol favorit saat dihover */
.favorite-button:hover {
  color: #ff6666; /* Warna saat dihover */
}

/* Tombol favorit ketika restoran ditambahkan ke favorit */
.favorite-button.favorited {
  color: #ff0000; /* Warna merah untuk status favorited */
}

.favorite-button.favorited:hover {
  color: #b80000; /* Warna merah untuk status favorited */
}

.favorite-button.favorited .fa-heart {
  font-weight: bold; /* Ikon tebal */
}

/* Form untuk menambahkan ulasan */
#reviewFormContainer {
  margin: 20px 40px; /* Jarak atas */
  background-color: #ebebeb;
  padding: 15px;
  border-radius: 8px;
}

#reviewFormContainer h3 {
  color: rgb(255, 255, 255); /* Warna teks gelap */
  font-size: 1.5em; /* Ukuran font */
  margin-bottom: 10px; /* Jarak bawah */
  text-align: center;
  background-color: #df4c2b;
  border-radius: 8px;
  padding: 5px 0;
}

/* Elemen input pada formulir ulasan */
#reviewForm input,
#reviewForm textarea {
  width: 100%; /* Lebar penuh */
  padding: 10px; /* Ruang dalam */
  border: 1px solid #ccc; /* Warna border */
  border-radius: 5px; /* Sudut membulat */
  font-size: 1em; /* Ukuran font */
  margin-bottom: 10px; /* Jarak bawah */
}

/* Tombol untuk mengirim ulasan */
#reviewForm button {
  padding: 10px 20px; /* Ruang dalam */
  min-width: 44px;
  min-height: 44px;
  background-color: #0c356a; /* Warna tombol */
  color: #fff; /* Warna teks */
  border: none; /* Tanpa border */
  border-radius: 5px; /* Sudut membulat */
  font-weight: bold; /* Teks tebal */
  cursor: pointer; /* Tampilkan kursor pointer */
  transition: background-color 0.3s; /* Transisi untuk hover */
}

#reviewForm button:hover {
  background-color: #0a2a53; /* Warna saat hover */
}

.ulasanresto h3 {
  color: rgb(255, 255, 255); /* Warna teks gelap */
  font-size: 1.5em; /* Ukuran font */
  margin-bottom: 10px; /* Jarak bawah */
  text-align: center;
  background-color: #df4c2b;
  border-radius: 8px;
  padding: 5px 0;
}

/* Tampilan untuk ulasan pelanggan */
.customer-review {
  padding: 10px; /* Ruang dalam */
  background-color: #fff; /* Warna latar belakang */
  border: 1px solid #ddd; /* Warna border */
  border-radius: 5px; /* Sudut membulat */
  margin-top: 10px; /* Jarak atas */
}

.customer-review p {
  margin: 5px 0; /* Margin atas dan bawah */
  line-height: 1.5; /* Tinggi garis */
}

.customer-review strong {
  color: #333; /* Warna teks gelap */
}

.reviews {
  grid-column: 1; /* Menempatkan ulasan di kolom pertama */
  margin-top: 74px;
  margin-left: 20px;
}

.review {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #0c356a;
}

.review1 {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
}

.reviews h1 {
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 2px;
  text-align: center;
  background-color: rgb(255, 196, 0);
  padding: 5px;
  border-radius: 5px;
}

.review1 img {
  border-radius: 50%;
  margin: 0 5px 0px 0;
}

.review-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.customer-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.customer-name {
  margin: 0;
}

.review-date {
  margin: 0;
  color: #888;
  font-size: 14px;
}
.review-rating {
  color: #ffc400;
  font-size: 20px;
}
.review-text {
  margin-top: 10px;
  line-height: 1.5;
}

.skip-link {
  position: absolute;
  top: -100px;
  background-color: #ebe8ff;
  color: #0c356a;
  margin-left: 10px;
  padding: 10px;
  font-size: 20px;
  z-index: 100;
  text-decoration: none;
}
.skip-link:focus {
  top: 100px;
}

#backToHome {
  display: block; /* Pastikan tombol terlihat */
}

footer {
  background-color: #0c356a;
  padding: 15px;
  text-align: center;
  color: rgba(255, 255, 255, 0.664);
}

#splashScreen {
  position: fixed;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #204e8a; /* Warna splash screen */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Pastikan berada di atas konten utama */
}

.splash-logo {
  width: 100px; /* Ukuran logo */
}

#mainContent {
  display: none; /* Sembunyikan konten utama hingga splash screen hilang */
}

.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  z-index: 9999; /* Z-index yang tinggi untuk menutupi semua elemen lainnya */
  transition: opacity 0.75s, visibility 0.75s;
}

.loader--hidden {
  opacity: 0;
  visibility: hidden;
}

.loader::after {
  content: "";
  width: 75px;
  height: 75px;
  border: 15px solid #dddddd;
  border-top-color: #0c356a;
  border-radius: 50%;
  animation: loading 0.75s ease infinite;
}

.responsive-hero {
  width: 100%; /* Membuat gambar mengambil lebar penuh kontainernya */
  height: auto; /* Membuat tinggi gambar menyesuaikan secara proporsional */
  max-width: 100%; /* Membuat gambar tidak melebihi ukuran kontainernya */
}

@keyframes loading {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}

@media screen and (min-width: 500px) {
  .menu-seluler {
    display: none;
  }
  .nav-seluler {
    display: none;
  }
}
@media screen and (max-width: 499px) {
  .restaurant-grid,
  .favorit-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
    width: 80%;
    margin-left: 10%;
  }
  .list_item_thumb {
    max-height: 200px; /* Tinggi gambar lebih besar untuk layar kecil */
  }

  .content {
    margin-left: 10px;
    margin-right: 10px;
  }
  .main-grid {
    display: flex;
    flex-direction: column-reverse;
  }
  picture {
    height: 37%;
  }
  .reviews {
    margin-top: 20px; /* Ubah margin sesuai kebutuhan */
    margin-bottom: 20px; /* Ubah margin sesuai kebutuhan */
    margin-left: auto;
    margin-right: auto;
  }
  .reviews h1 {
    text-align: center;
  }

  .content {
    margin-top: 20px; /* Ubah margin sesuai kebutuhan */
    margin-bottom: 20px; /* Ubah margin sesuai kebutuhan */
    margin-left: 10px;
    margin-right: 10px;
    grid-column: initial; /* Hapus aturan grid-column */
  }
  .nav-biasa {
    display: none;
  }
  .nav-seluler {
    z-index: 10;
    background-color: #fff;
    width: 100%;
    position: absolute;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
    transition: transform 0.3s ease;
  }
  .open {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  .navitems-seluler {
    display: list-item;
    color: black;
    width: 100%;
    text-align: left;
  }
  .list {
    grid-template-columns: 1fr; /* Mengatur satu kolom untuk layar kecil */
  }
}

@media screen and (min-width: 1200px) {
  .hero-image {
    min-width: 1000px;
    /* height: 100%; */
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AACA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,sCAAsC;AACxC;AACA;;EAEE,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,UAAU;EACV,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,UAAU;EACV,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;AACA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;EACE,cAAc,EAAE,uCAAuC;AACzD;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,qBAAqB;EACrB,YAAY;AACd;AACA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB,EAAE,uCAAuC;EAC3D,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap\");\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Nunito Sans\", sans-serif;\n}\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\nbody {\n  font-size: 12px;\n  color: #424242;\n  background-color: ivory;\n}\n\na {\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.menu-seluler {\n  background-color: #0c356a;\n  color: white;\n  width: 100%;\n  display: flex;\n  font-weight: 600;\n  font-size: 20px;\n  padding: 10px;\n  justify-content: space-between;\n}\n.nav-seluler {\n  background-color: #0c356a;\n  width: 100%;\n  display: flex;\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.navlist-seluler {\n  width: 60%;\n  padding: 0;\n  margin: 0;\n  text-align: left;\n}\n.navitems-seluler {\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: right;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: white;\n}\n\n.logo-seluler {\n  margin-top: 20px;\n}\n.iconmenu-seluler a {\n  text-decoration: none;\n  color: white;\n  font-size: 49px;\n}\n.nav-seluler a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: #0c356a;\n}\n.nav-biasa {\n  background-color: #0c356a;\n  width: 100%;\n  display: flex;\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.navlist {\n  width: 80%;\n  padding: 0;\n  margin: 0;\n  text-align: right;\n}\n.logo {\n  width: 20%;\n  padding: 0;\n  margin: 0;\n  text-align: left;\n  box-sizing: border-box;\n  display: inline-block;\n  line-height: 24px;\n}\n.navitems {\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: right;\n  line-height: 24px;\n  text-transform: uppercase;\n}\n.navitems:hover a {\n  color: #ff5733; /* Ubah warna teks saat hover di sini */\n}\n\n.nav-biasa a {\n  display: inline-block;\n  padding: 1.3em;\n  text-decoration: none;\n  color: white;\n}\n.nav-biasa a:hover {\n  text-decoration: none;\n  color: yellow;\n}\n\n.hero {\n  position: relative;\n  overflow: hidden;\n  text-align: center; /* Mengatur teks ke tengah horizontal */\n  max-height: 500px;\n}\n\n.hero-image {\n  width: 100%;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(\n    0,\n    0,\n    0,\n    0.5\n  ); /* Gunakan warna gelap semi-transparan */\n}\n\n.hero-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n\n.hero-text h1 {\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n}\n\n.hero-text p {\n  font-size: 1rem;\n  margin-bottom: 0;\n}\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.main-grid {\n  display: grid;\n  grid-template-columns: 3fr; /* Kolom pertama 1 bagian dan kolom kedua 2 bagian */\n  gap: 20px; /* Jarak antara kolom */\n}\n\n.content {\n  margin: 0 20px;\n}\n\n.update {\n  width: 100%;\n  margin-top: 30px;\n  margin-bottom: 50px;\n  text-align: center;\n}\n.update h1 {\n  font-weight: 700;\n  font-size: 2em;\n  margin-bottom: 50px;\n}\n\n.restaurant-grid,\n.favorit-grid {\n  text-align: justify;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr); /* Selalu 3 kolom */\n  gap: 24px; /* Jarak antar item yang lebih besar untuk pemisahan yang jelas */\n  padding: 24px; /* Padding untuk seluruh grid */\n  box-sizing: border-box; /* Pastikan padding termasuk dalam perhitungan ukuran */\n}\n\n.list_item {\n  width: 100%;\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  /* background-color: white; */\n}\n.city {\n  position: absolute;\n  top: 8px;\n  left: 16px;\n  border-radius: 5px;\n  background-color: #df4c2b;\n  padding: 5px 10px 5px;\n  color: white;\n  font-weight: 500;\n}\n\n.restaurant-item {\n  background: #fff; /* Latar belakang putih untuk kejelasan */\n  border: 1px solid #ddd; /* Garis halus untuk pemisahan */\n  border-radius: 8px; /* Sudut membulat untuk tampilan modern */\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Bayangan halus untuk kedalaman */\n  transition: box-shadow 0.3s; /* Transisi untuk efek interaksi */\n  overflow: hidden; /* Hindari konten tumpah keluar */\n}\n\n.list_item_content {\n  padding: 16px; /* Padding yang cukup di dalam konten */\n}\n\n.star-icon {\n  color: gold; /* Color for star icon (rating) */\n}\n\n.restaurant-item:hover {\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Bayangan lebih besar saat item dihover */\n}\n\n.list_item_thumb {\n  width: 100%;\n  max-height: 150px;\n}\n.list_item_rating {\n  font-size: 22px;\n  text-transform: uppercase;\n  color: #999;\n  background-color: #0c356a;\n  width: 79px;\n  font-weight: 500;\n  border-radius: 5px;\n}\n.star-icon {\n  color: #ffc400; /* Warna ikon bintang */\n  font-size: 25px; /* Ukuran ikon bintang */\n  margin-left: 5px;\n}\n.list_item_rating_value {\n  color: #ebe8ff;\n  font-weight: bolder;\n  text-decoration: none;\n  text-align: left;\n  padding-top: 5px;\n}\n.list_item_rating_value a {\n  padding-top: 5px;\n}\n.list_item_title {\n  font-weight: 500;\n  font-size: 16px;\n  margin-top: -10px;\n  transition: 0.3s opacity;\n}\n.list_item_title:hover {\n  opacity: 0.5;\n}\n.list_item_title a {\n  text-decoration: none;\n  color: inherit;\n  padding: 0.8rem 0;\n}\n#RestaurantList .list_item_desc {\n  margin-top: -50px;\n  font-size: 12px;\n  line-height: 1.5em;\n}\n\n#favoriteRestaurantList .list_item_desc {\n  font-size: 12px;\n  line-height: 1.5em;\n}\n\n/* Tampilan untuk halaman detail restoran */\n#restaurantDetail {\n  padding: 20px;\n  background-color: #f8f8f8; /* Warna latar belakang yang lembut */\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Efek bayangan */\n  /* margin: 0px auto 20px;  */\n  margin-top: -30px;\n  margin-bottom: 30px;\n  margin-left: 40px;\n  margin-right: 40px;\n  max-width: 100%; /* Batas maksimum lebar */\n  font-size: 16px; /* Ukuran font yang lebih besar */\n}\n\n#restaurantDetail h1 {\n  text-align: center;\n  font-size: 40px;\n  background-color: #0c356a;\n  color: #fff;\n  border-radius: 30px;\n  margin-bottom: 20px;\n}\n\n/* Gambar restoran di bagian detail */\n#restaurantDetail img {\n  width: 70%; /* Lebar penuh */\n  border-radius: 8px; /* Sudut membulat */\n  margin-bottom: 20px; /* Jarak bawah */\n  display: block;\n  margin-left: auto; /* Agar margin kiri otomatis */\n  margin-right: auto; /* Agar margin kanan otomatis */\n}\n\n/* Judul restoran */\n#restaurantDetail h2 {\n  color: #333; /* Warna teks gelap */\n  font-size: 40px; /* Ukuran font lebih besar */\n  margin-bottom: 10px; /* Jarak bawah */\n  margin-left: 40px;\n  font-weight: 900;\n}\n.back-button {\n  background-color: #df4c2b;\n  color: #fff;\n  border: none;\n  width: 70px;\n  height: 70px;\n  min-width: 44px;\n  min-height: 44px;\n  /* padding: 10px 20px; */\n  cursor: pointer;\n  border-radius: 50%;\n  /* font-size: 16px; */\n  margin-left: 40px;\n}\n.back-button svg {\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.back-button:hover {\n  background-color: #008c9e;\n}\n\n.detailatas,\n.ulasanresto {\n  background-color: #ebebeb;\n  padding: 15px;\n  margin: 20px 40px;\n  border-radius: 8px;\n}\n/* Informasi umum restoran */\n#restaurantDetail p {\n  color: #666; /* Warna teks lebih ringan */\n  margin-bottom: 10px;\n  text-align: justify;\n}\n\n/* Tombol favorit dasar */\n.favorite-button {\n  text-align: right;\n  background: none; /* Tidak ada latar belakang */\n  border: none; /* Tanpa border */\n  cursor: pointer; /* Ganti kursor ke pointer */\n  color: #ff0000; /* Warna dasar merah */\n  font-size: 50px; /* Ukuran lebih besar */\n  transition: color 0.3s; /* Efek transisi saat warna berubah */\n}\n\n/* Tombol favorit saat dihover */\n.favorite-button:hover {\n  color: #ff6666; /* Warna saat dihover */\n}\n\n/* Tombol favorit ketika restoran ditambahkan ke favorit */\n.favorite-button.favorited {\n  color: #ff0000; /* Warna merah untuk status favorited */\n}\n\n.favorite-button.favorited:hover {\n  color: #b80000; /* Warna merah untuk status favorited */\n}\n\n.favorite-button.favorited .fa-heart {\n  font-weight: bold; /* Ikon tebal */\n}\n\n/* Form untuk menambahkan ulasan */\n#reviewFormContainer {\n  margin: 20px 40px; /* Jarak atas */\n  background-color: #ebebeb;\n  padding: 15px;\n  border-radius: 8px;\n}\n\n#reviewFormContainer h3 {\n  color: rgb(255, 255, 255); /* Warna teks gelap */\n  font-size: 1.5em; /* Ukuran font */\n  margin-bottom: 10px; /* Jarak bawah */\n  text-align: center;\n  background-color: #df4c2b;\n  border-radius: 8px;\n  padding: 5px 0;\n}\n\n/* Elemen input pada formulir ulasan */\n#reviewForm input,\n#reviewForm textarea {\n  width: 100%; /* Lebar penuh */\n  padding: 10px; /* Ruang dalam */\n  border: 1px solid #ccc; /* Warna border */\n  border-radius: 5px; /* Sudut membulat */\n  font-size: 1em; /* Ukuran font */\n  margin-bottom: 10px; /* Jarak bawah */\n}\n\n/* Tombol untuk mengirim ulasan */\n#reviewForm button {\n  padding: 10px 20px; /* Ruang dalam */\n  min-width: 44px;\n  min-height: 44px;\n  background-color: #0c356a; /* Warna tombol */\n  color: #fff; /* Warna teks */\n  border: none; /* Tanpa border */\n  border-radius: 5px; /* Sudut membulat */\n  font-weight: bold; /* Teks tebal */\n  cursor: pointer; /* Tampilkan kursor pointer */\n  transition: background-color 0.3s; /* Transisi untuk hover */\n}\n\n#reviewForm button:hover {\n  background-color: #0a2a53; /* Warna saat hover */\n}\n\n.ulasanresto h3 {\n  color: rgb(255, 255, 255); /* Warna teks gelap */\n  font-size: 1.5em; /* Ukuran font */\n  margin-bottom: 10px; /* Jarak bawah */\n  text-align: center;\n  background-color: #df4c2b;\n  border-radius: 8px;\n  padding: 5px 0;\n}\n\n/* Tampilan untuk ulasan pelanggan */\n.customer-review {\n  padding: 10px; /* Ruang dalam */\n  background-color: #fff; /* Warna latar belakang */\n  border: 1px solid #ddd; /* Warna border */\n  border-radius: 5px; /* Sudut membulat */\n  margin-top: 10px; /* Jarak atas */\n}\n\n.customer-review p {\n  margin: 5px 0; /* Margin atas dan bawah */\n  line-height: 1.5; /* Tinggi garis */\n}\n\n.customer-review strong {\n  color: #333; /* Warna teks gelap */\n}\n\n.reviews {\n  grid-column: 1; /* Menempatkan ulasan di kolom pertama */\n  margin-top: 74px;\n  margin-left: 20px;\n}\n\n.review {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 20px;\n  margin-bottom: 20px;\n  background-color: #0c356a;\n}\n\n.review1 {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 20px;\n  margin-bottom: 20px;\n  background-color: #ffffff;\n}\n\n.reviews h1 {\n  font-weight: 700;\n  font-size: 20px;\n  margin-bottom: 2px;\n  text-align: center;\n  background-color: rgb(255, 196, 0);\n  padding: 5px;\n  border-radius: 5px;\n}\n\n.review1 img {\n  border-radius: 50%;\n  margin: 0 5px 0px 0;\n}\n\n.review-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.customer-image {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.customer-name {\n  margin: 0;\n}\n\n.review-date {\n  margin: 0;\n  color: #888;\n  font-size: 14px;\n}\n.review-rating {\n  color: #ffc400;\n  font-size: 20px;\n}\n.review-text {\n  margin-top: 10px;\n  line-height: 1.5;\n}\n\n.skip-link {\n  position: absolute;\n  top: -100px;\n  background-color: #ebe8ff;\n  color: #0c356a;\n  margin-left: 10px;\n  padding: 10px;\n  font-size: 20px;\n  z-index: 100;\n  text-decoration: none;\n}\n.skip-link:focus {\n  top: 100px;\n}\n\n#backToHome {\n  display: block; /* Pastikan tombol terlihat */\n}\n\nfooter {\n  background-color: #0c356a;\n  padding: 15px;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.664);\n}\n\n#splashScreen {\n  position: fixed;\n  color: #fff;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #204e8a; /* Warna splash screen */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000; /* Pastikan berada di atas konten utama */\n}\n\n.splash-logo {\n  width: 100px; /* Ukuran logo */\n}\n\n#mainContent {\n  display: none; /* Sembunyikan konten utama hingga splash screen hilang */\n}\n\n.loader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  backdrop-filter: blur(50px);\n  -webkit-backdrop-filter: blur(50px);\n  z-index: 9999; /* Z-index yang tinggi untuk menutupi semua elemen lainnya */\n  transition: opacity 0.75s, visibility 0.75s;\n}\n\n.loader--hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.loader::after {\n  content: \"\";\n  width: 75px;\n  height: 75px;\n  border: 15px solid #dddddd;\n  border-top-color: #0c356a;\n  border-radius: 50%;\n  animation: loading 0.75s ease infinite;\n}\n\n.responsive-hero {\n  width: 100%; /* Membuat gambar mengambil lebar penuh kontainernya */\n  height: auto; /* Membuat tinggi gambar menyesuaikan secara proporsional */\n  max-width: 100%; /* Membuat gambar tidak melebihi ukuran kontainernya */\n}\n\n@keyframes loading {\n  from {\n    transform: rotate(0turn);\n  }\n  to {\n    transform: rotate(1turn);\n  }\n}\n\n@media screen and (min-width: 500px) {\n  .menu-seluler {\n    display: none;\n  }\n  .nav-seluler {\n    display: none;\n  }\n}\n@media screen and (max-width: 499px) {\n  .restaurant-grid,\n  .favorit-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n    padding: 16px;\n    width: 80%;\n    margin-left: 10%;\n  }\n  .list_item_thumb {\n    max-height: 200px; /* Tinggi gambar lebih besar untuk layar kecil */\n  }\n\n  .content {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n  .main-grid {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n  picture {\n    height: 37%;\n  }\n  .reviews {\n    margin-top: 20px; /* Ubah margin sesuai kebutuhan */\n    margin-bottom: 20px; /* Ubah margin sesuai kebutuhan */\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .reviews h1 {\n    text-align: center;\n  }\n\n  .content {\n    margin-top: 20px; /* Ubah margin sesuai kebutuhan */\n    margin-bottom: 20px; /* Ubah margin sesuai kebutuhan */\n    margin-left: 10px;\n    margin-right: 10px;\n    grid-column: initial; /* Hapus aturan grid-column */\n  }\n  .nav-biasa {\n    display: none;\n  }\n  .nav-seluler {\n    z-index: 10;\n    background-color: #fff;\n    width: 100%;\n    position: absolute;\n    -webkit-transform: translate(-100%, 0);\n    transform: translate(-100%, 0);\n    transition: transform 0.3s ease;\n  }\n  .open {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n  .navitems-seluler {\n    display: list-item;\n    color: black;\n    width: 100%;\n    text-align: left;\n  }\n  .list {\n    grid-template-columns: 1fr; /* Mengatur satu kolom untuk layar kecil */\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .hero-image {\n    min-width: 1000px;\n    /* height: 100%; */\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			524: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [121], () => (__webpack_require__(516)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map