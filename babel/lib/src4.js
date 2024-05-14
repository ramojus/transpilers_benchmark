"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "sayHello", {
  enumerable: true,
  get: function get() {
    return _myModule.sayHello;
  }
});
var _myModule = require("./my-module.mjs");
var _obj$prop, _foo, _obj$prop2, _foo2, _obj$prop3, _foo3, _obj$prop4, _foo4, _obj$prop5, _foo5, _obj$prop6, _foo6, _obj$prop7, _foo7, _obj$prop8, _foo8, _obj$prop9, _foo9, _obj$prop10, _foo10, _obj$prop11, _foo11, _obj$prop12, _foo12, _obj$prop13, _foo13, _obj$prop14, _foo14, _obj$prop15, _foo15, _obj$prop16, _foo16, _obj$prop17, _foo17, _obj$prop18, _foo18, _obj$prop19, _foo19, _obj$prop20, _foo20, _obj$prop21, _foo21, _obj$prop22, _foo22, _obj$prop23, _foo23, _obj$prop24, _foo24;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref = [1, 2, 3, 4, 5],
  first = _ref[0],
  third = _ref[2];
var _prop1$prop = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop.prop1,
  prop2 = _prop1$prop.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchData() {
    return _ref2.apply(this, arguments);
  };
}();
(_obj$prop = obj.prop1) === null || _obj$prop === void 0 || _obj$prop.prop2;
var foo = null;
(_foo = foo) !== null && _foo !== void 0 ? _foo : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal2) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal2);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref3 = [1, 2, 3, 4, 5],
  first = _ref3[0],
  third = _ref3[2];
var _prop1$prop2 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop2.prop1,
  prop2 = _prop1$prop2.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function fetchData() {
    return _ref4.apply(this, arguments);
  };
}();
(_obj$prop2 = obj.prop1) === null || _obj$prop2 === void 0 || _obj$prop2.prop2;
var foo = null;
(_foo2 = foo) !== null && _foo2 !== void 0 ? _foo2 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal3) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal3);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref5 = [1, 2, 3, 4, 5],
  first = _ref5[0],
  third = _ref5[2];
var _prop1$prop3 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop3.prop1,
  prop2 = _prop1$prop3.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context3.sent;
          _context3.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function fetchData() {
    return _ref6.apply(this, arguments);
  };
}();
(_obj$prop3 = obj.prop1) === null || _obj$prop3 === void 0 || _obj$prop3.prop2;
var foo = null;
(_foo3 = foo) !== null && _foo3 !== void 0 ? _foo3 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal4) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal4);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref7 = [1, 2, 3, 4, 5],
  first = _ref7[0],
  third = _ref7[2];
var _prop1$prop4 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop4.prop1,
  prop2 = _prop1$prop4.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var response;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context4.sent;
          _context4.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function fetchData() {
    return _ref8.apply(this, arguments);
  };
}();
(_obj$prop4 = obj.prop1) === null || _obj$prop4 === void 0 || _obj$prop4.prop2;
var foo = null;
(_foo4 = foo) !== null && _foo4 !== void 0 ? _foo4 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal5) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal5);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref9 = [1, 2, 3, 4, 5],
  first = _ref9[0],
  third = _ref9[2];
var _prop1$prop5 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop5.prop1,
  prop2 = _prop1$prop5.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var response;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context5.sent;
          _context5.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function fetchData() {
    return _ref10.apply(this, arguments);
  };
}();
(_obj$prop5 = obj.prop1) === null || _obj$prop5 === void 0 || _obj$prop5.prop2;
var foo = null;
(_foo5 = foo) !== null && _foo5 !== void 0 ? _foo5 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal6) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal6);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref11 = [1, 2, 3, 4, 5],
  first = _ref11[0],
  third = _ref11[2];
var _prop1$prop6 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop6.prop1,
  prop2 = _prop1$prop6.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var response;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context6.sent;
          _context6.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function fetchData() {
    return _ref12.apply(this, arguments);
  };
}();
(_obj$prop6 = obj.prop1) === null || _obj$prop6 === void 0 || _obj$prop6.prop2;
var foo = null;
(_foo6 = foo) !== null && _foo6 !== void 0 ? _foo6 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal7) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal7);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref13 = [1, 2, 3, 4, 5],
  first = _ref13[0],
  third = _ref13[2];
var _prop1$prop7 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop7.prop1,
  prop2 = _prop1$prop7.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var response;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context7.sent;
          _context7.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function fetchData() {
    return _ref14.apply(this, arguments);
  };
}();
(_obj$prop7 = obj.prop1) === null || _obj$prop7 === void 0 || _obj$prop7.prop2;
var foo = null;
(_foo7 = foo) !== null && _foo7 !== void 0 ? _foo7 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal8) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal8);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref15 = [1, 2, 3, 4, 5],
  first = _ref15[0],
  third = _ref15[2];
var _prop1$prop8 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop8.prop1,
  prop2 = _prop1$prop8.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    args[_key8] = arguments[_key8];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var response;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context8.sent;
          _context8.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function fetchData() {
    return _ref16.apply(this, arguments);
  };
}();
(_obj$prop8 = obj.prop1) === null || _obj$prop8 === void 0 || _obj$prop8.prop2;
var foo = null;
(_foo8 = foo) !== null && _foo8 !== void 0 ? _foo8 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal9) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal9);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref17 = [1, 2, 3, 4, 5],
  first = _ref17[0],
  third = _ref17[2];
var _prop1$prop9 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop9.prop1,
  prop2 = _prop1$prop9.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var response;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context9.sent;
          _context9.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function fetchData() {
    return _ref18.apply(this, arguments);
  };
}();
(_obj$prop9 = obj.prop1) === null || _obj$prop9 === void 0 || _obj$prop9.prop2;
var foo = null;
(_foo9 = foo) !== null && _foo9 !== void 0 ? _foo9 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal10) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal10);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref19 = [1, 2, 3, 4, 5],
  first = _ref19[0],
  third = _ref19[2];
var _prop1$prop10 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop10.prop1,
  prop2 = _prop1$prop10.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    args[_key10] = arguments[_key10];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var response;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context10.sent;
          _context10.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function fetchData() {
    return _ref20.apply(this, arguments);
  };
}();
(_obj$prop10 = obj.prop1) === null || _obj$prop10 === void 0 || _obj$prop10.prop2;
var foo = null;
(_foo10 = foo) !== null && _foo10 !== void 0 ? _foo10 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal11) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal11);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref21 = [1, 2, 3, 4, 5],
  first = _ref21[0],
  third = _ref21[2];
var _prop1$prop11 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop11.prop1,
  prop2 = _prop1$prop11.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    args[_key11] = arguments[_key11];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    var response;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context11.sent;
          _context11.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function fetchData() {
    return _ref22.apply(this, arguments);
  };
}();
(_obj$prop11 = obj.prop1) === null || _obj$prop11 === void 0 || _obj$prop11.prop2;
var foo = null;
(_foo11 = foo) !== null && _foo11 !== void 0 ? _foo11 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal12) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal12);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref23 = [1, 2, 3, 4, 5],
  first = _ref23[0],
  third = _ref23[2];
var _prop1$prop12 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop12.prop1,
  prop2 = _prop1$prop12.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    args[_key12] = arguments[_key12];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    var response;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context12.sent;
          _context12.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function fetchData() {
    return _ref24.apply(this, arguments);
  };
}();
(_obj$prop12 = obj.prop1) === null || _obj$prop12 === void 0 || _obj$prop12.prop2;
var foo = null;
(_foo12 = foo) !== null && _foo12 !== void 0 ? _foo12 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal13) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal13);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref25 = [1, 2, 3, 4, 5],
  first = _ref25[0],
  third = _ref25[2];
var _prop1$prop13 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop13.prop1,
  prop2 = _prop1$prop13.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    args[_key13] = arguments[_key13];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    var response;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context13.sent;
          _context13.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function fetchData() {
    return _ref26.apply(this, arguments);
  };
}();
(_obj$prop13 = obj.prop1) === null || _obj$prop13 === void 0 || _obj$prop13.prop2;
var foo = null;
(_foo13 = foo) !== null && _foo13 !== void 0 ? _foo13 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal14) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal14);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref27 = [1, 2, 3, 4, 5],
  first = _ref27[0],
  third = _ref27[2];
var _prop1$prop14 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop14.prop1,
  prop2 = _prop1$prop14.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    args[_key14] = arguments[_key14];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    var response;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context14.sent;
          _context14.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function fetchData() {
    return _ref28.apply(this, arguments);
  };
}();
(_obj$prop14 = obj.prop1) === null || _obj$prop14 === void 0 || _obj$prop14.prop2;
var foo = null;
(_foo14 = foo) !== null && _foo14 !== void 0 ? _foo14 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal15) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal15);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref29 = [1, 2, 3, 4, 5],
  first = _ref29[0],
  third = _ref29[2];
var _prop1$prop15 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop15.prop1,
  prop2 = _prop1$prop15.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    args[_key15] = arguments[_key15];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    var response;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context15.sent;
          _context15.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function fetchData() {
    return _ref30.apply(this, arguments);
  };
}();
(_obj$prop15 = obj.prop1) === null || _obj$prop15 === void 0 || _obj$prop15.prop2;
var foo = null;
(_foo15 = foo) !== null && _foo15 !== void 0 ? _foo15 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal16) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal16);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref31 = [1, 2, 3, 4, 5],
  first = _ref31[0],
  third = _ref31[2];
var _prop1$prop16 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop16.prop1,
  prop2 = _prop1$prop16.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    args[_key16] = arguments[_key16];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
    var response;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context16.sent;
          _context16.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function fetchData() {
    return _ref32.apply(this, arguments);
  };
}();
(_obj$prop16 = obj.prop1) === null || _obj$prop16 === void 0 || _obj$prop16.prop2;
var foo = null;
(_foo16 = foo) !== null && _foo16 !== void 0 ? _foo16 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal17) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal17);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref33 = [1, 2, 3, 4, 5],
  first = _ref33[0],
  third = _ref33[2];
var _prop1$prop17 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop17.prop1,
  prop2 = _prop1$prop17.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    args[_key17] = arguments[_key17];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
    var response;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context17.sent;
          _context17.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function fetchData() {
    return _ref34.apply(this, arguments);
  };
}();
(_obj$prop17 = obj.prop1) === null || _obj$prop17 === void 0 || _obj$prop17.prop2;
var foo = null;
(_foo17 = foo) !== null && _foo17 !== void 0 ? _foo17 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal18) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal18);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref35 = [1, 2, 3, 4, 5],
  first = _ref35[0],
  third = _ref35[2];
var _prop1$prop18 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop18.prop1,
  prop2 = _prop1$prop18.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    args[_key18] = arguments[_key18];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
    var response;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context18.sent;
          _context18.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function fetchData() {
    return _ref36.apply(this, arguments);
  };
}();
(_obj$prop18 = obj.prop1) === null || _obj$prop18 === void 0 || _obj$prop18.prop2;
var foo = null;
(_foo18 = foo) !== null && _foo18 !== void 0 ? _foo18 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal19) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal19);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref37 = [1, 2, 3, 4, 5],
  first = _ref37[0],
  third = _ref37[2];
var _prop1$prop19 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop19.prop1,
  prop2 = _prop1$prop19.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    args[_key19] = arguments[_key19];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref38 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
    var response;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context19.sent;
          _context19.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function fetchData() {
    return _ref38.apply(this, arguments);
  };
}();
(_obj$prop19 = obj.prop1) === null || _obj$prop19 === void 0 || _obj$prop19.prop2;
var foo = null;
(_foo19 = foo) !== null && _foo19 !== void 0 ? _foo19 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal20) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal20);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref39 = [1, 2, 3, 4, 5],
  first = _ref39[0],
  third = _ref39[2];
var _prop1$prop20 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop20.prop1,
  prop2 = _prop1$prop20.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
    args[_key20] = arguments[_key20];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref40 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
    var response;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context20.sent;
          _context20.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function fetchData() {
    return _ref40.apply(this, arguments);
  };
}();
(_obj$prop20 = obj.prop1) === null || _obj$prop20 === void 0 || _obj$prop20.prop2;
var foo = null;
(_foo20 = foo) !== null && _foo20 !== void 0 ? _foo20 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal21) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal21);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref41 = [1, 2, 3, 4, 5],
  first = _ref41[0],
  third = _ref41[2];
var _prop1$prop21 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop21.prop1,
  prop2 = _prop1$prop21.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
    args[_key21] = arguments[_key21];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref42 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
    var response;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context21.sent;
          _context21.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function fetchData() {
    return _ref42.apply(this, arguments);
  };
}();
(_obj$prop21 = obj.prop1) === null || _obj$prop21 === void 0 || _obj$prop21.prop2;
var foo = null;
(_foo21 = foo) !== null && _foo21 !== void 0 ? _foo21 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal22) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal22);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref43 = [1, 2, 3, 4, 5],
  first = _ref43[0],
  third = _ref43[2];
var _prop1$prop22 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop22.prop1,
  prop2 = _prop1$prop22.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
    args[_key22] = arguments[_key22];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref44 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
    var response;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context22.sent;
          _context22.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function fetchData() {
    return _ref44.apply(this, arguments);
  };
}();
(_obj$prop22 = obj.prop1) === null || _obj$prop22 === void 0 || _obj$prop22.prop2;
var foo = null;
(_foo22 = foo) !== null && _foo22 !== void 0 ? _foo22 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal23) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal23);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref45 = [1, 2, 3, 4, 5],
  first = _ref45[0],
  third = _ref45[2];
var _prop1$prop23 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop23.prop1,
  prop2 = _prop1$prop23.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
    args[_key23] = arguments[_key23];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref46 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
    var response;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context23.sent;
          _context23.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function fetchData() {
    return _ref46.apply(this, arguments);
  };
}();
(_obj$prop23 = obj.prop1) === null || _obj$prop23 === void 0 || _obj$prop23.prop2;
var foo = null;
(_foo23 = foo) !== null && _foo23 !== void 0 ? _foo23 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
  }
  return _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " makes a noise.");
    }
  }]);
}();
var Dog = /*#__PURE__*/function (_Animal24) {
  function Dog() {
    _classCallCheck(this, Dog);
    return _callSuper(this, Dog, arguments);
  }
  _inherits(Dog, _Animal24);
  return _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      "".concat(this.name, " barks.");
    }
  }]);
}(Animal);
var name = 'John';
"".concat(name, "!");
var _ref47 = [1, 2, 3, 4, 5],
  first = _ref47[0],
  third = _ref47[2];
var _prop1$prop24 = {
    prop1: 'value1',
    prop2: 'value2'
  },
  prop1 = _prop1$prop24.prop1,
  prop2 = _prop1$prop24.prop2;
var add = function add(a, b) {
  return a + b;
};
var arr2 = [].concat(_toConsumableArray(arr1), [4, 5, 6]);
var sum = function sum() {
  for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    args[_key24] = arguments[_key24];
  }
  return args.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};
var fetchData = /*#__PURE__*/function () {
  var _ref48 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
    var response;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return fetch('https://api.example.com/data');
        case 2:
          response = _context24.sent;
          _context24.next = 5;
          return response.json();
        case 5:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function fetchData() {
    return _ref48.apply(this, arguments);
  };
}();
(_obj$prop24 = obj.prop1) === null || _obj$prop24 === void 0 || _obj$prop24.prop2;
var foo = null;
(_foo24 = foo) !== null && _foo24 !== void 0 ? _foo24 : 'default';
await Promise.resolve().then(function () {
  return _interopRequireWildcard(require('./module.js'));
});
var bigIntValue = 9007199254740991n + 1n;
function sayHello() {}