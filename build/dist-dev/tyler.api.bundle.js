/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _routes_indexRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/indexRouter */ "./src/routes/indexRouter.ts");
/* harmony import */ var _middleware_validateRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middleware/validateRequest */ "./src/middleware/validateRequest.ts");
/* harmony import */ var _routes_loginRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/loginRouter */ "./src/routes/loginRouter.ts");
/* harmony import */ var _routes_userTypeRouter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/userTypeRouter */ "./src/routes/userTypeRouter.ts");
/* harmony import */ var _routes_apiUserRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/apiUserRouter */ "./src/routes/apiUserRouter.ts");
/* harmony import */ var _routes_validClientRouter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/validClientRouter */ "./src/routes/validClientRouter.ts");
/* harmony import */ var _routes_serviceRoute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/serviceRoute */ "./src/routes/serviceRoute.ts");
/* harmony import */ var _routes_durationRouter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/durationRouter */ "./src/routes/durationRouter.ts");
/* harmony import */ var _routes_clientInfoRouters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/clientInfoRouters */ "./src/routes/clientInfoRouters.ts");














var App = /** @class */ (function () {
    function App() {
        process.title = "tyler-cmt-api";
        this.server = express__WEBPACK_IMPORTED_MODULE_0__();
        this.configureMiddleware();
        this.routes();
    }
    App.prototype.configureMiddleware = function () {
        this.server.use(morgan__WEBPACK_IMPORTED_MODULE_2__('dev'));
        this.server.use(body_parser__WEBPACK_IMPORTED_MODULE_3__["urlencoded"]({ extended: false }));
        this.server.use(body_parser__WEBPACK_IMPORTED_MODULE_3__["json"]());
        this.server.use(helmet__WEBPACK_IMPORTED_MODULE_4__());
        this.server.disable('x-powered-by');
        this.server.all('/*', cors__WEBPACK_IMPORTED_MODULE_1__());
        this.server.all('/v1/*', _middleware_validateRequest__WEBPACK_IMPORTED_MODULE_6__["ValidateRequest"].validate);
    };
    App.prototype.routes = function () {
        var router = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
        _routes_clientInfoRouters__WEBPACK_IMPORTED_MODULE_13__["ClientInfoRoute"].map(router);
        _routes_indexRouter__WEBPACK_IMPORTED_MODULE_5__["IndexRoute"].map(router);
        _routes_loginRouter__WEBPACK_IMPORTED_MODULE_7__["LoginRoute"].map(router);
        _routes_apiUserRouter__WEBPACK_IMPORTED_MODULE_9__["ApiUserRoute"].map(router);
        _routes_userTypeRouter__WEBPACK_IMPORTED_MODULE_8__["UserTypeRoute"].map(router);
        _routes_validClientRouter__WEBPACK_IMPORTED_MODULE_10__["ValidClientRoute"].map(router);
        _routes_serviceRoute__WEBPACK_IMPORTED_MODULE_11__["ServiceRoute"].map(router);
        _routes_durationRouter__WEBPACK_IMPORTED_MODULE_12__["DurationRoute"].map(router);
        this.server.use(router);
    };
    App.prototype.run = function (port, host) {
        this.server.listen(port, host, function () {
            console.log("listening on port: " + port);
        });
    };
    return App;
}());

/* harmony default export */ __webpack_exports__["default"] = (new App());

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/config/db.config.json":
/*!***********************************!*\
  !*** ./src/config/db.config.json ***!
  \***********************************/
/*! exports provided: secret, mongoEndpoint, mongoDb, mongoUser, mongoPass, passwordMatchCriteria, basic, admin, transportSecret, default */
/***/ (function(module) {

module.exports = {"secret":"this is a my secret","mongoEndpoint":"mongodb://odin.kulfi.io:17027/admin","mongoDb":"api","mongoUser":"api-writer","mongoPass":"apiwriter","passwordMatchCriteria":"((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{6,20})","basic":"5c57415640fae3156ca785f3","admin":"5c5741c140fae3156ca785f4","transportSecret":"this is a test"};

/***/ }),

/***/ "./src/config/transport.config.json":
/*!******************************************!*\
  !*** ./src/config/transport.config.json ***!
  \******************************************/
/*! exports provided: transportSecret, default */
/***/ (function(module) {

module.exports = {"transportSecret":"this is a test"};

/***/ }),

/***/ "./src/controllers/apiUserController.ts":
/*!**********************************************!*\
  !*** ./src/controllers/apiUserController.ts ***!
  \**********************************************/
/*! exports provided: ApiUserController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUserController", function() { return ApiUserController; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/apiUserSchema */ "./src/db/apiUserSchema.ts");
/* harmony import */ var _models_apiUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/apiUser */ "./src/models/apiUser.ts");
/* harmony import */ var _config_db_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/db.config.json */ "./src/config/db.config.json");
var _config_db_config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/db.config.json */ "./src/config/db.config.json", 1);
/* harmony import */ var _baseController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baseController */ "./src/controllers/baseController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ApiUserController = /** @class */ (function (_super) {
    __extends(ApiUserController, _super);
    function ApiUserController() {
        var _this = _super.call(this) || this;
        _this.getAll = function (req, res) {
            try {
                _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_1__["default"].find({ active: true }, function (err, data) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    alert(data);
                    var _data = _this.mapItems(data);
                    return res.status(200).send(_data);
                }).populate({ path: 'UserTypes', select: 'display' });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        _this.getOne = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send();
                }
                _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findById(req.params.id, function (err, data) {
                    if (err)
                        return res.status(500).send({ message: err.message });
                    var _data = _this.mapItem(data);
                    return res.status(200).send(_data);
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        _this.create = function (req, res) {
            try {
                if (!req.body ||
                    !req.body.email ||
                    !req.body.firstName ||
                    !req.body.lastName ||
                    !req.body.username ||
                    !req.body.password) {
                    return res.status(400).send({ message: "missing data item(s)" });
                }
                _this.email = _this.decryptData(req.body.email);
                _this.firstName = _this.decryptData(req.body.firstName);
                _this.lastName = _this.decryptData(req.body.lastName);
                _this.username = _this.decryptData(req.body.username);
                _this.password = _this.decryptData(req.body.password);
                _this.type = _this.decryptData(req.body.type);
                if (_this.email == '') {
                    return res.status(400).send({ message: 'failed to decrypt' });
                }
                var _model = new _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_1__["default"]({
                    id: uuid__WEBPACK_IMPORTED_MODULE_0__(),
                    email: _this.email,
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    userTypeId: (_this.type).toLowerCase() === 'admin' ? _config_db_config_json__WEBPACK_IMPORTED_MODULE_3__["admin"] : _config_db_config_json__WEBPACK_IMPORTED_MODULE_3__["basic"],
                    username: _this.username
                });
                console.log("model", _model);
                if (!_model.setPassword(_this.password)) {
                    return res
                        .status(400)
                        .send({ message: "password does not match criteria" });
                }
                console.log("password created");
                if (!_model.generateValidationToken()) {
                    return res
                        .status(400)
                        .send({ message: "error occured while generating token" });
                }
                console.log("generated token");
                _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_1__["default"].create(_model, function (err, data) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    var _data = _this.mapItem(data);
                    return res.status(201).send(_data);
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        _this.update = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send({ message: "target id is invalid" });
                }
                if (!req.body ||
                    !req.body.firstName ||
                    !req.body.lastName ||
                    !req.body.username) {
                    return res.status(400).send();
                }
                var _firstName = req.body.firstName ? req.body.firstName : "";
                var _lastName = req.body.lastName ? req.body.lastName : "";
                if (_firstName.length == 0 || _lastName.length == 0) {
                    return res
                        .status(400)
                        .send({ message: "missing and null or empty data" });
                }
                var _model = new _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_1__["default"]({
                    firstName: _firstName,
                    lastName: _lastName
                });
                _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(req.params.id, _model, function (err) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    return res.status(200).send();
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        _this.deactivate = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send();
                }
                _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(req.params.id, { active: false }, function (err) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    return res.status(204).send();
                });
                return;
            }
            catch (err) {
                return res.send(400).send({ message: err.message });
            }
        };
        _this.username = '';
        _this.email = '';
        _this.firstName = '';
        _this.lastName = '';
        _this.password = '';
        _this.type = '';
        return _this;
    }
    ApiUserController.prototype.mapItems = function (model) {
        var _data = [];
        for (var i = 0; i < model.length; i++) {
            _data.push(this.mapItem(model[i]));
        }
        return _data;
    };
    ApiUserController.prototype.mapItem = function (model) {
        var _data = new _models_apiUser__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _data.active = model.active;
        _data.email = model.email;
        _data.firstName = model.firstName;
        _data.id = model.id;
        _data.lastName = model.lastName;
        _data.tokenValidated = model.tokenValidated;
        _data.username = model.username;
        return _data;
    };
    return ApiUserController;
}(_baseController__WEBPACK_IMPORTED_MODULE_4__["BaseController"]));

/* harmony default export */ __webpack_exports__["default"] = (new ApiUserController());


/***/ }),

/***/ "./src/controllers/baseController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/baseController.ts ***!
  \*******************************************/
/*! exports provided: BaseController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseController", function() { return BaseController; });
/* harmony import */ var _config_transport_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/transport.config.json */ "./src/config/transport.config.json");
var _config_transport_config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/transport.config.json */ "./src/config/transport.config.json", 1);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "crypto-js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);


var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    BaseController.prototype.encryptData = function (data) {
        var _data = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(data, _config_transport_config_json__WEBPACK_IMPORTED_MODULE_0__["transportSecret"]);
        return _data.toString();
    };
    BaseController.prototype.decryptData = function (data) {
        var _data = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(data, _config_transport_config_json__WEBPACK_IMPORTED_MODULE_0__["transportSecret"]);
        var _plaintext = _data.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
        return _plaintext;
    };
    return BaseController;
}());

/* harmony default export */ __webpack_exports__["default"] = (new BaseController());


/***/ }),

/***/ "./src/controllers/clientController.ts":
/*!*********************************************!*\
  !*** ./src/controllers/clientController.ts ***!
  \*********************************************/
/*! exports provided: ClientInfoController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientInfoController", function() { return ClientInfoController; });
/* harmony import */ var _models_clientInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/clientInfo */ "./src/models/clientInfo.ts");

var ClientInfoController = /** @class */ (function () {
    function ClientInfoController() {
        this.getAll = function (req, res) {
            var _data = new _models_clientInfo__WEBPACK_IMPORTED_MODULE_0__["default"]();
            _data.hostname = req.hostname;
            _data.ip = req.connection.remoteAddress;
            _data.forwared = req.headers.forwarded ? req.headers.forwarded : "";
            return res.status(200).send(_data);
        };
    }
    return ClientInfoController;
}());

/* harmony default export */ __webpack_exports__["default"] = (new ClientInfoController());


/***/ }),

/***/ "./src/controllers/durationController.ts":
/*!***********************************************!*\
  !*** ./src/controllers/durationController.ts ***!
  \***********************************************/
/*! exports provided: DurationController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationController", function() { return DurationController; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_durationSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/durationSchema */ "./src/db/durationSchema.ts");
/* harmony import */ var _models_duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/duration */ "./src/models/duration.ts");



var DurationController = /** @class */ (function () {
    function DurationController() {
        var _this = this;
        this.getAll = function (req, res) {
            _db_durationSchema__WEBPACK_IMPORTED_MODULE_1__["default"].find({ active: true }, function (err, data) {
                if (err)
                    return res.status(500).send({ message: err.message });
                var _data = _this.mapItems(data);
                return res.status(200).send(_data);
            });
        };
        this.getOne = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send();
                }
                _db_durationSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findById(req.params.id, function (err, data) {
                    if (err)
                        return res.status(500).send({ message: err.message });
                    var _data = _this.mapItem(data);
                    return res.status(200).send(_data);
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        this.create = function (req, res) {
            try {
                if (!req.body || !req.body.description || !req.body.display) {
                    return res.status(400).send();
                }
                var _model = new _models_duration__WEBPACK_IMPORTED_MODULE_2__["default"]();
                _model.id = uuid__WEBPACK_IMPORTED_MODULE_0__();
                _model.active = true;
                _model.display = req.body.display;
                _model.price = req.body.price;
                _db_durationSchema__WEBPACK_IMPORTED_MODULE_1__["default"].create(_model, function (err, data) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    var _data = _this.mapItem(data);
                    return res.status(201).send(_data);
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        this.update = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send();
                }
                var price = req.body.price ? req.body.price : "";
                var disp = req.body.display ? req.body.display : "";
                if (price > 0 || disp.length == 0) {
                    return res
                        .status(400)
                        .send({ message: "description or display is null or empty" });
                }
                var _model = new _db_durationSchema__WEBPACK_IMPORTED_MODULE_1__["default"]({
                    display: disp,
                    price: price
                });
                _db_durationSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(req.params.id, _model, function (err) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    return res.status(200).send();
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        this.deactivate = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send();
                }
                _db_durationSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(req.params.id, { active: false }, function (err) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    return res.status(204).send();
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
    }
    DurationController.prototype.mapItems = function (model) {
        var _data = [];
        for (var i = 0; i < model.length; i++) {
            _data.push(this.mapItem(model[i]));
        }
        return _data;
    };
    DurationController.prototype.mapItem = function (model) {
        var _data = new _models_duration__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _data.active = model.active;
        _data.display = model.display;
        _data.id = model.id;
        _data.price = model.price;
        return _data;
    };
    return DurationController;
}());

/* harmony default export */ __webpack_exports__["default"] = (new DurationController());


/***/ }),

/***/ "./src/controllers/loginController.ts":
/*!********************************************!*\
  !*** ./src/controllers/loginController.ts ***!
  \********************************************/
/*! exports provided: loginController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginController", function() { return loginController; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_db_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/db.config.json */ "./src/config/db.config.json");
var _config_db_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/db.config.json */ "./src/config/db.config.json", 1);
/* harmony import */ var _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/apiUserSchema */ "./src/db/apiUserSchema.ts");
/* harmony import */ var _baseController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseController */ "./src/controllers/baseController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var loginController = /** @class */ (function (_super) {
    __extends(loginController, _super);
    function loginController() {
        var _this = _super.call(this) || this;
        _this.login = function (req, res) {
            try {
                if (!req.body.username || !req.body.password) {
                    return res.status(400).send();
                }
                _this.username = _this.decryptData(req.body.username);
                _this.password = _this.decryptData(req.body.password);
                _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({ username: _this.username }).exec(function (err, data) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    if (data) {
                        if (!data.validPassword(_this.password)) {
                            return res
                                .status(400)
                                .send({ message: "either username or password in incorrect!" });
                        }
                        if (!data.tokenValidated) {
                            return res
                                .status(301)
                                .send({ message: "please validate your email" });
                        }
                        return res.status(200).send({ message: "Welcome back!" });
                    }
                    return res.status(400).send({ message: "user does not exist" });
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        _this.resetPassword = function (req, res) {
            try {
                if (!req.body.username || !req.body.password) {
                    return res.status(400).send();
                }
                _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({ username: req.body.user }).exec(function (err, data) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    if (data) {
                        if (!data.setPassword(req.body.password)) {
                            return res
                                .status(400)
                                .send("either username or password in incorrect!");
                        }
                        else {
                            _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(data._id, { salt: data.salt, password_hash: data.password_hash }, function (err) {
                                if (err)
                                    return res.status(400).send({ message: err.message });
                                return res.status(200).send();
                            });
                        }
                    }
                    return res.status(417).send();
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        _this.validateEmailToken = function (req, res) {
            try {
                if (!req.params.token) {
                    return res.status(400).send();
                }
                var _decoded = (jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__["verify"](req.params.token, _config_db_config_json__WEBPACK_IMPORTED_MODULE_1__["secret"]));
                if (!_decoded) {
                    return res.status(400).send({ message: "decoding failure" });
                }
                else {
                    if (_decoded.exp > Date.now() / 1000) {
                        _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndUpdate(_decoded.id, { tokenValidated: true }, function (err) {
                            if (err)
                                return res.status(400).send(err.message);
                            return res.status(200).send();
                        });
                    }
                    return res.status(400).send({ message: "Token expired" });
                }
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        _this.username = '';
        _this.password = '';
        return _this;
    }
    return loginController;
}(_baseController__WEBPACK_IMPORTED_MODULE_3__["BaseController"]));

/* harmony default export */ __webpack_exports__["default"] = (new loginController());


/***/ }),

/***/ "./src/controllers/serviceController.ts":
/*!**********************************************!*\
  !*** ./src/controllers/serviceController.ts ***!
  \**********************************************/
/*! exports provided: ServiceController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceController", function() { return ServiceController; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_serviceSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/serviceSchema */ "./src/db/serviceSchema.ts");
/* harmony import */ var _models_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/service */ "./src/models/service.ts");



var ServiceController = /** @class */ (function () {
    function ServiceController() {
        var _this = this;
        this.getAll = function (req, res) {
            _db_serviceSchema__WEBPACK_IMPORTED_MODULE_1__["default"].find({ active: true }, function (err, data) {
                if (err)
                    return res.status(500).send({ message: err.message });
                var _data = _this.mapItems(data);
                return res.status(200).send(_data);
            });
        };
        this.getOne = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send();
                }
                _db_serviceSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findById(req.params.id, function (err, data) {
                    if (err)
                        return res.status(500).send({ message: err.message });
                    var _data = _this.mapItem(data);
                    return res.status(200).send(_data);
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        this.create = function (req, res) {
            try {
                if (!req.body || !req.body.description || !req.body.shortDescription) {
                    return res.status(400).send();
                }
                var _model = new _models_service__WEBPACK_IMPORTED_MODULE_2__["default"]();
                _model.id = uuid__WEBPACK_IMPORTED_MODULE_0__();
                _model.active = true;
                _model.description = req.body.description;
                _model.shortDescription = req.body.shortDescription;
                _db_serviceSchema__WEBPACK_IMPORTED_MODULE_1__["default"].create(_model, function (err, data) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    var _data = _this.mapItem(data);
                    return res.status(201).send(_data);
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        this.update = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send();
                }
                var description = req.body.description ? req.body.description : "";
                var shortDesc = req.body.shortDescription
                    ? req.body.shortDescription
                    : "";
                if (description.length == 0 || shortDesc.length == 0) {
                    return res
                        .status(400)
                        .send({ message: "description is null or empty" });
                }
                var _model = new _db_serviceSchema__WEBPACK_IMPORTED_MODULE_1__["default"]({
                    description: description,
                    shortDesc: shortDesc
                });
                _db_serviceSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(req.params.id, _model, function (err) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    return res.status(200).send();
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        this.deactivate = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send();
                }
                _db_serviceSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(req.params.id, { active: false }, function (err) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    return res.status(204).send();
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
    }
    ServiceController.prototype.mapItems = function (model) {
        var _data = [];
        for (var i = 0; i < model.length; i++) {
            _data.push(this.mapItem(model[i]));
        }
        return _data;
    };
    ServiceController.prototype.mapItem = function (model) {
        var _data = new _models_service__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _data.active = model.active;
        _data.description = model.description;
        _data.id = model.id;
        _data.shortDescription = model.shortDescription;
        return _data;
    };
    return ServiceController;
}());

/* harmony default export */ __webpack_exports__["default"] = (new ServiceController());


/***/ }),

/***/ "./src/controllers/userTypeController.ts":
/*!***********************************************!*\
  !*** ./src/controllers/userTypeController.ts ***!
  \***********************************************/
/*! exports provided: UserTypeController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypeController", function() { return UserTypeController; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_userTypeSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/userTypeSchema */ "./src/db/userTypeSchema.ts");
/* harmony import */ var _models_userType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/userType */ "./src/models/userType.ts");



var UserTypeController = /** @class */ (function () {
    function UserTypeController() {
        var _this = this;
        this.getAll = function (req, res) {
            _db_userTypeSchema__WEBPACK_IMPORTED_MODULE_1__["default"].find({ active: true }, function (err, data) {
                if (err)
                    return res.status(500).send({ message: err.message });
                var _data = _this.mapItems(data);
                return res.status(200).send(_data);
            });
        };
        this.getOne = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send();
                }
                _db_userTypeSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findById(req.params.id, function (err, data) {
                    if (err)
                        return res.status(500).send({ message: err.message });
                    var _data = _this.mapItem(data);
                    return res.status(200).send(_data);
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        this.create = function (req, res) {
            try {
                if (!req.body || !req.body.description || !req.body.display) {
                    return res.status(400).send();
                }
                var _model = new _models_userType__WEBPACK_IMPORTED_MODULE_2__["default"]();
                _model.id = uuid__WEBPACK_IMPORTED_MODULE_0__();
                _model.description = req.body.description;
                _model.display = req.body.display;
                _model.active = true;
                _db_userTypeSchema__WEBPACK_IMPORTED_MODULE_1__["default"].create(_model, function (err, data) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    var _data = _this.mapItem(data);
                    return res.status(201).send(_data);
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        this.update = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send();
                }
                var desc = req.body.description ? req.body.description : "";
                var disp = req.body.display ? req.body.display : "";
                if (desc.length == 0 || disp.length == 0) {
                    return res
                        .status(400)
                        .send({ message: "description or display is null or empty" });
                }
                var _userType = {
                    description: desc,
                    display: disp
                };
                _db_userTypeSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(req.params.id, _userType, function (err) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    return res.status(200).send();
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        this.deactivate = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send();
                }
                _db_userTypeSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(req.params.id, { active: false }, function (err) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    return res.status(204).send();
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
    }
    UserTypeController.prototype.mapItems = function (model) {
        var _data = [];
        for (var i = 0; i < model.length; i++) {
            _data.push(this.mapItem(model[i]));
        }
        return _data;
    };
    UserTypeController.prototype.mapItem = function (model) {
        console.log("type: " + model.display, model._id);
        var _data = new _models_userType__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _data.active = model.active;
        _data.description = model.description;
        _data.display = model.display;
        _data.id = model.id;
        return _data;
    };
    return UserTypeController;
}());

/* harmony default export */ __webpack_exports__["default"] = (new UserTypeController());


/***/ }),

/***/ "./src/controllers/validClientController.ts":
/*!**************************************************!*\
  !*** ./src/controllers/validClientController.ts ***!
  \**************************************************/
/*! exports provided: ValidClientController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidClientController", function() { return ValidClientController; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_validClientSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/validClientSchema */ "./src/db/validClientSchema.ts");
/* harmony import */ var _models_validClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/validClient */ "./src/models/validClient.ts");



var ValidClientController = /** @class */ (function () {
    function ValidClientController() {
        var _this = this;
        this.getAll = function (req, res) {
            _db_validClientSchema__WEBPACK_IMPORTED_MODULE_1__["default"].find({ active: true }, function (err, data) {
                if (err)
                    return res.status(500).send({ message: err.message });
                var _data = _this.mapItems(data);
                return res.status(200).send(_data);
            });
        };
        this.getOne = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send();
                }
                _db_validClientSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findById(req.params.id, function (err, data) {
                    if (err)
                        return res.status(500).send({ message: err.message });
                    var _data = _this.mapItem(data);
                    return res.status(200).send(data);
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        this.create = function (req, res) {
            try {
                if (!req.body.active ||
                    !req.body.contactname ||
                    !req.body.description ||
                    !req.body.email ||
                    !req.body.ipaddress ||
                    !req.body.name ||
                    !req.body.phonenumber) {
                    return res.status(400).send({ message: "required data is missing" });
                }
                var _model = new _db_validClientSchema__WEBPACK_IMPORTED_MODULE_1__["default"]({
                    id: uuid__WEBPACK_IMPORTED_MODULE_0__(),
                    active: true,
                    contactName: req.body.contactname,
                    description: req.body.description,
                    email: req.body.email,
                    ipAddress: req.body.ipaddress,
                    name: req.body.name,
                    phoneNumber: req.body.phonenumber
                });
                _model.generateValidationToken();
                _db_validClientSchema__WEBPACK_IMPORTED_MODULE_1__["default"].create(_model, function (err, data) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    var _data = _this.mapItem(data);
                    return res.status(201).send(_data);
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        this.update = function (req, res) {
            try {
                if (!req.body.contactname ||
                    !req.body.description ||
                    !req.body.email ||
                    !req.body.fdnq ||
                    !req.body.ipaddress ||
                    !req.body.name ||
                    !req.body.phonenumber) {
                    return res.status(400).send({ message: "required data is missing" });
                }
                var _model = new _models_validClient__WEBPACK_IMPORTED_MODULE_2__["default"]();
                _model.contactName = req.body.contactname;
                _model.description = req.body.description;
                _model.email = req.body.email;
                _model.ipAddress = req.body.ipaddress;
                _model.name = req.body.name;
                _model.phoneNumber = req.body.phonenumber;
                _db_validClientSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(req.params.id, _model, function (err) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    return res.status(200).send();
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
        this.deactivate = function (req, res) {
            try {
                if (!req.params || !req.params.id) {
                    return res.status(400).send();
                }
                _db_validClientSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate(req.params.id, { active: false, token: "" }, function (err) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    return res.status(204).send();
                });
                return;
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        };
    }
    ValidClientController.prototype.mapItems = function (model) {
        var _data = [];
        for (var i = 0; i < model.length; i++) {
            _data.push(this.mapItem(model[i]));
        }
        return _data;
    };
    ValidClientController.prototype.mapItem = function (model) {
        console.log("_id", model._id);
        var _data = new _models_validClient__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _data.active = model.active;
        _data.contactName = model.contactName;
        _data.description = model.description;
        _data.email = model.email;
        _data.id = model.id;
        _data.ipAddress = model.ipAddress;
        _data.name = model.name;
        _data.phoneNumber = model.phoneNumber;
        return _data;
    };
    return ValidClientController;
}());

/* harmony default export */ __webpack_exports__["default"] = (new ValidClientController());


/***/ }),

/***/ "./src/db/apiUserSchema.ts":
/*!*********************************!*\
  !*** ./src/db/apiUserSchema.ts ***!
  \*********************************/
/*! exports provided: ApiUserSchema, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUserSchema", function() { return ApiUserSchema; });
/* harmony import */ var _dataAccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataAccess */ "./src/db/dataAccess.ts");
/* harmony import */ var _config_db_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/db.config.json */ "./src/config/db.config.json");
var _config_db_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/db.config.json */ "./src/config/db.config.json", 1);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose-unique-validator */ "mongoose-unique-validator");
/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);






var ApiUserSchema = /** @class */ (function () {
    function ApiUserSchema() {
    }
    Object.defineProperty(ApiUserSchema.prototype, "schema", {
        get: function () {
            var _schema = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Schema"]({
                id: {
                    type: String,
                    index: true,
                    required: [true, "is required"]
                },
                username: {
                    type: String,
                    lowercase: true,
                    required: [true, "is required"],
                    match: [/[a-zA-Z0-9-_]{5,20}\w+/, "is invalid"],
                    unique: true,
                    index: true
                },
                email: {
                    type: String,
                    lowercase: true,
                    required: [true, "is required"],
                    match: [/\S+@\S+\.\S+/, "is invalid"],
                    unique: true,
                    index: true
                },
                firstName: {
                    type: String,
                    required: [true, "is required"],
                    index: true
                },
                lastName: {
                    type: String,
                    required: [true, "is required"],
                    index: true
                },
                salt: {
                    type: String
                },
                password_hash: {
                    type: String,
                    index: true
                },
                userTypeId: {
                    type: mongoose__WEBPACK_IMPORTED_MODULE_2__["Schema"].Types.ObjectId,
                    required: true,
                    index: true
                },
                active: {
                    type: Boolean,
                    default: true
                },
                tokenValidated: {
                    type: Boolean,
                    default: false
                },
                validationToken: {
                    type: String,
                    index: true
                }
            }, { timestamps: true });
            _schema.plugin(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_3__, { message: "is already taken" });
            _schema.methods.matchPasswordCriteria = function (password) {
                return password.match(_config_db_config_json__WEBPACK_IMPORTED_MODULE_1__["passwordMatchCriteria"]);
            };
            _schema.methods.expiresIn = function (days) {
                var _date = new Date();
                return _date.setDate(_date.getDate() + days);
            };
            _schema.methods.setPassword = function (password) {
                if (_schema.methods.matchPasswordCriteria(password)) {
                    this.salt = crypto__WEBPACK_IMPORTED_MODULE_4__["randomBytes"](16).toString("hex");
                    var hash = crypto__WEBPACK_IMPORTED_MODULE_4__["createHmac"]('sha512', this.salt);
                    hash.update(password);
                    var hashValue = hash.digest('hex');
                    if (!hashValue)
                        return false;
                    this.password_hash = hashValue;
                    return true;
                }
                else {
                    console.error("password", "does not match criteria");
                    return false;
                }
            };
            _schema.methods.generateValidationToken = function () {
                var _expires = _schema.methods.expiresIn(1);
                try {
                    var _token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__["sign"]({
                        username: this.username,
                        exp: _expires
                    }, _config_db_config_json__WEBPACK_IMPORTED_MODULE_1__["secret"]);
                    this.tokenValidated = false;
                    this.validationToken = _token;
                    return _token;
                }
                catch (_a) {
                    return null;
                }
            };
            _schema.methods.validPassword = function (password) {
                if (!password)
                    return false;
                var hash = crypto__WEBPACK_IMPORTED_MODULE_4__["createHmac"]('sha512', this.salt);
                hash.update(password);
                var hashValue = hash.digest('hex');
                return this.password_hash === hashValue;
            };
            return _schema;
        },
        enumerable: true,
        configurable: true
    });
    return ApiUserSchema;
}());

var model = _dataAccess__WEBPACK_IMPORTED_MODULE_0__["default"].dbConnection.model("apiUsers", new ApiUserSchema().schema);
/* harmony default export */ __webpack_exports__["default"] = (model);


/***/ }),

/***/ "./src/db/dataAccess.ts":
/*!******************************!*\
  !*** ./src/db/dataAccess.ts ***!
  \******************************/
/*! exports provided: DataAccess, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataAccess", function() { return DataAccess; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_db_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/db.config.json */ "./src/config/db.config.json");
var _config_db_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/db.config.json */ "./src/config/db.config.json", 1);


var DataAccess = /** @class */ (function () {
    function DataAccess() {
    }
    DataAccess.connect = function () {
        var _this = this;
        var options = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            autoIndex: false,
            autoReconnect: true,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 10,
            // If not connected, return errors immediately rather than waiting for reconnect
            bufferMaxEntries: 0,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            family: 4,
            user: _config_db_config_json__WEBPACK_IMPORTED_MODULE_1__["mongoUser"],
            pass: _config_db_config_json__WEBPACK_IMPORTED_MODULE_1__["mongoPass"],
            dbName: _config_db_config_json__WEBPACK_IMPORTED_MODULE_1__["mongoDb"]
        };
        var connection = function () {
            return new Promise(function (resolve, reject) {
                var establish = function (instance) {
                    var _conn = mongoose__WEBPACK_IMPORTED_MODULE_0__["connect"](_config_db_config_json__WEBPACK_IMPORTED_MODULE_1__["mongoEndpoint"], options);
                    if (_conn) {
                        reject("DB connection failure");
                    }
                    else {
                        instance = _conn;
                        resolve("connected");
                    }
                };
                _this.dbConnection = mongoose__WEBPACK_IMPORTED_MODULE_0__["connection"];
                _this.dbConnection.once("open", function () {
                    console.log("Connected to mongodb");
                });
                _this.dbConnection.on("error", function (err) {
                    console.error("Mongoode default connection has occured  " + err + " error");
                });
                mongoose__WEBPACK_IMPORTED_MODULE_0__["connection"].once("disconnected", function () {
                    console.log("Mongoose default connection disconnected");
                    establish(_this.dbInstance);
                });
                mongoose__WEBPACK_IMPORTED_MODULE_0__["connection"].once("reconnected", function () {
                    console.log("Mongoose default connection reconnected");
                });
                process.on("SIGINT", function () {
                    _this.dbConnection.close(function () {
                        console.log("db connection", "Mongoose default connection");
                    });
                });
                establish(_this.dbInstance);
            });
        };
        if (this.dbInstance) {
            return this.dbInstance;
        }
        else {
            connection()
                .then(function () {
                return _this.dbInstance;
            })
                .catch(function (err) {
                return err;
            });
        }
        return null;
    };
    return DataAccess;
}());

DataAccess.connect();
/* harmony default export */ __webpack_exports__["default"] = (DataAccess);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/db/durationSchema.ts":
/*!**********************************!*\
  !*** ./src/db/durationSchema.ts ***!
  \**********************************/
/*! exports provided: DurationSchema, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationSchema", function() { return DurationSchema; });
/* harmony import */ var _dataAccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataAccess */ "./src/db/dataAccess.ts");
/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-unique-validator */ "mongoose-unique-validator");
/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);



var DurationSchema = /** @class */ (function () {
    function DurationSchema() {
    }
    Object.defineProperty(DurationSchema.prototype, "schema", {
        get: function () {
            var _schema = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Schema"]({
                id: {
                    type: String,
                    required: [true, "is required"],
                    index: true
                },
                display: {
                    type: String,
                    require: [true, "is required"],
                    unique: true,
                    lowercase: true
                },
                price: {
                    type: Number,
                    require: [true, "is required"],
                    unique: true
                },
                active: {
                    type: Boolean,
                    required: [true, "is required"],
                    default: true
                }
            }, { timestamps: true });
            _schema.plugin(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__, { message: "is already taken" });
            return _schema;
        },
        enumerable: true,
        configurable: true
    });
    return DurationSchema;
}());

var model = _dataAccess__WEBPACK_IMPORTED_MODULE_0__["default"].dbConnection.model("Duration", new DurationSchema().schema);
/* harmony default export */ __webpack_exports__["default"] = (model);


/***/ }),

/***/ "./src/db/serviceSchema.ts":
/*!*********************************!*\
  !*** ./src/db/serviceSchema.ts ***!
  \*********************************/
/*! exports provided: ServiceSchema, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSchema", function() { return ServiceSchema; });
/* harmony import */ var _dataAccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataAccess */ "./src/db/dataAccess.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);


var ServiceSchema = /** @class */ (function () {
    function ServiceSchema() {
    }
    Object.defineProperty(ServiceSchema.prototype, "schema", {
        get: function () {
            var _schema = new mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"]({
                id: {
                    type: String,
                    required: [true, "is required"],
                    index: true
                },
                description: {
                    type: String,
                    required: [true, "is required"]
                },
                shortDescription: {
                    type: String,
                    required: [true, "is required"]
                },
                active: {
                    type: Boolean,
                    required: [true, "is required"],
                    default: true,
                    index: true
                }
            }, { timestamps: true });
            return _schema;
        },
        enumerable: true,
        configurable: true
    });
    return ServiceSchema;
}());

var model = _dataAccess__WEBPACK_IMPORTED_MODULE_0__["default"].dbConnection.model("Services", new ServiceSchema().schema);
/* harmony default export */ __webpack_exports__["default"] = (model);


/***/ }),

/***/ "./src/db/userTypeSchema.ts":
/*!**********************************!*\
  !*** ./src/db/userTypeSchema.ts ***!
  \**********************************/
/*! exports provided: UserTypeSchema, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypeSchema", function() { return UserTypeSchema; });
/* harmony import */ var _dataAccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataAccess */ "./src/db/dataAccess.ts");
/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-unique-validator */ "mongoose-unique-validator");
/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);



var UserTypeSchema = /** @class */ (function () {
    function UserTypeSchema() {
    }
    Object.defineProperty(UserTypeSchema.prototype, "schema", {
        get: function () {
            var _schema = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Schema"]({
                id: {
                    type: String,
                    index: true,
                    required: [true, "is required"]
                },
                display: {
                    type: String,
                    required: [true, "is required"],
                    lowercase: true,
                    unique: true
                },
                description: {
                    type: String,
                    required: [true, "is required"]
                },
                active: {
                    type: Boolean,
                    retuired: true,
                    required: [true, "is required"]
                }
            }, { timestamps: true });
            _schema.plugin(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__, { message: "is already taken" });
            return _schema;
        },
        enumerable: true,
        configurable: true
    });
    return UserTypeSchema;
}());

var model = _dataAccess__WEBPACK_IMPORTED_MODULE_0__["default"].dbConnection.model("UserTypes", new UserTypeSchema().schema);
/* harmony default export */ __webpack_exports__["default"] = (model);


/***/ }),

/***/ "./src/db/validClientSchema.ts":
/*!*************************************!*\
  !*** ./src/db/validClientSchema.ts ***!
  \*************************************/
/*! exports provided: UserTypeSchema, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypeSchema", function() { return UserTypeSchema; });
/* harmony import */ var _dataAccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataAccess */ "./src/db/dataAccess.ts");
/* harmony import */ var _config_db_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/db.config.json */ "./src/config/db.config.json");
var _config_db_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/db.config.json */ "./src/config/db.config.json", 1);
/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose-unique-validator */ "mongoose-unique-validator");
/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);





var UserTypeSchema = /** @class */ (function () {
    function UserTypeSchema() {
    }
    Object.defineProperty(UserTypeSchema.prototype, "schema", {
        get: function () {
            var _schema = new mongoose__WEBPACK_IMPORTED_MODULE_3__["Schema"]({
                id: {
                    type: String,
                    index: true,
                    required: [true, "is required"]
                },
                ipAddress: {
                    type: String,
                    required: [true, "is required"],
                    validate: [
                        /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                        "is invalid"
                    ],
                    index: true
                },
                name: {
                    type: String,
                    required: [true, "is required"],
                    lowercase: true,
                    unique: true
                },
                description: {
                    type: String,
                    required: [true, "is required"]
                },
                contactName: {
                    type: String,
                    required: [true, "is required"]
                },
                email: {
                    type: String,
                    lowercase: true,
                    required: [true, "is required"],
                    validate: [/\S+@\S+\.\S+/, "is invalid"],
                    index: true
                },
                phoneNumber: {
                    type: String,
                    required: [true, "is required"],
                    validate: [
                        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                        "is invalid"
                    ],
                    index: true
                },
                token: {
                    type: String,
                    index: true
                },
                active: {
                    type: Boolean,
                    retuired: true,
                    required: [true, "is required"]
                }
            }, { timestamps: true });
            _schema.plugin(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_2__, { message: "is already taken" });
            _schema.methods.generateValidationToken = function () {
                var today = new Date();
                var _exp = new Date(today);
                _exp.setDate(today.getFullYear() + 5);
                try {
                    var _token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__["sign"]({
                        id: this._id,
                        address: this.ipAddress,
                        exp: _exp.getTime()
                    }, _config_db_config_json__WEBPACK_IMPORTED_MODULE_1__["secret"]);
                    this.token = _token;
                    return _token;
                }
                catch (_a) {
                    return null;
                }
            };
            return _schema;
        },
        enumerable: true,
        configurable: true
    });
    return UserTypeSchema;
}());

var model = _dataAccess__WEBPACK_IMPORTED_MODULE_0__["default"].dbConnection.model("ValidClients", new UserTypeSchema().schema);
/* harmony default export */ __webpack_exports__["default"] = (model);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");

var port = 3001;
var host = '127.0.0.1';
_app__WEBPACK_IMPORTED_MODULE_0__["default"].run(port, host);


/***/ }),

/***/ "./src/middleware/validateRequest.ts":
/*!*******************************************!*\
  !*** ./src/middleware/validateRequest.ts ***!
  \*******************************************/
/*! exports provided: ValidateRequest, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateRequest", function() { return ValidateRequest; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_db_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/db.config.json */ "./src/config/db.config.json");
var _config_db_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/db.config.json */ "./src/config/db.config.json", 1);
/* harmony import */ var _db_validClientSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/validClientSchema */ "./src/db/validClientSchema.ts");



var ValidateRequest = /** @class */ (function () {
    function ValidateRequest() {
    }
    ValidateRequest.validate = function (req, res, next) {
        var token = ((req.body && req.body.access_token) ||
            (req.query && req.query.access_token) ||
            req.headers["x_access_token"])
            .toString()
            .trim();
        var address = req.headers && req.headers.forwarded
            ? req.headers.forwarded
            : req.connection.remoteAddress;
        if (!token || !address) {
            return res.status(400).send({ message: "Invalid token or address" });
        }
        else {
            try {
                var _decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__["verify"](token, _config_db_config_json__WEBPACK_IMPORTED_MODULE_1__["secret"]);
                if (!_decoded) {
                    return res.status(400).send({ message: "Decoding error" });
                }
                else {
                    if (_decoded.exp <= Date.now()) {
                        return res.status(400).send({ message: "Token Expired" });
                    }
                    if (address !== _decoded.address) {
                        return res.status(400).send({ message: "Unauthorized address" });
                    }
                    _db_validClientSchema__WEBPACK_IMPORTED_MODULE_2__["default"].findById(_decoded.id, function (err, data) {
                        if (err)
                            return res.status(400).send(err.message);
                        if (data && data.active) {
                            return next();
                        }
                        else {
                            return res.status(417).send({ message: "Inactive token" });
                        }
                    });
                    return;
                }
            }
            catch (err) {
                return res.status(400).send({ message: err.message });
            }
        }
    };
    return ValidateRequest;
}());

/* harmony default export */ __webpack_exports__["default"] = (new ValidateRequest());


/***/ }),

/***/ "./src/models/apiUser.ts":
/*!*******************************!*\
  !*** ./src/models/apiUser.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ApiUser = /** @class */ (function () {
    function ApiUser() {
    }
    return ApiUser;
}());
/* harmony default export */ __webpack_exports__["default"] = (ApiUser);


/***/ }),

/***/ "./src/models/clientInfo.ts":
/*!**********************************!*\
  !*** ./src/models/clientInfo.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ClientInfo = /** @class */ (function () {
    function ClientInfo() {
    }
    return ClientInfo;
}());
/* harmony default export */ __webpack_exports__["default"] = (ClientInfo);


/***/ }),

/***/ "./src/models/duration.ts":
/*!********************************!*\
  !*** ./src/models/duration.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Duration = /** @class */ (function () {
    function Duration() {
    }
    return Duration;
}());
/* harmony default export */ __webpack_exports__["default"] = (Duration);


/***/ }),

/***/ "./src/models/service.ts":
/*!*******************************!*\
  !*** ./src/models/service.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ApiType = /** @class */ (function () {
    function ApiType() {
    }
    return ApiType;
}());
/* harmony default export */ __webpack_exports__["default"] = (ApiType);


/***/ }),

/***/ "./src/models/userType.ts":
/*!********************************!*\
  !*** ./src/models/userType.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UserType = /** @class */ (function () {
    function UserType() {
    }
    return UserType;
}());
/* harmony default export */ __webpack_exports__["default"] = (UserType);


/***/ }),

/***/ "./src/models/validClient.ts":
/*!***********************************!*\
  !*** ./src/models/validClient.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ValidClient = /** @class */ (function () {
    function ValidClient() {
    }
    return ValidClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (ValidClient);


/***/ }),

/***/ "./src/routes/apiUserRouter.ts":
/*!*************************************!*\
  !*** ./src/routes/apiUserRouter.ts ***!
  \*************************************/
/*! exports provided: ApiUserRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUserRoute", function() { return ApiUserRoute; });
/* harmony import */ var _baseRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseRouter */ "./src/routes/baseRouter.ts");
/* harmony import */ var _controllers_apiUserController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/apiUserController */ "./src/controllers/apiUserController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ApiUserRoute = /** @class */ (function (_super) {
    __extends(ApiUserRoute, _super);
    function ApiUserRoute() {
        return _super.call(this) || this;
    }
    ApiUserRoute.map = function (router) {
        router.get('/v1/apiuser', _controllers_apiUserController__WEBPACK_IMPORTED_MODULE_1__["default"].getAll);
        router.get('/v1/apiuser/:id', _controllers_apiUserController__WEBPACK_IMPORTED_MODULE_1__["default"].getOne);
        router.post('/v1/apiuser', _controllers_apiUserController__WEBPACK_IMPORTED_MODULE_1__["default"].create);
        router.put('/v1/apiuser/:id', _controllers_apiUserController__WEBPACK_IMPORTED_MODULE_1__["default"].update);
        router.delete('/v1/apiuser/:id', _controllers_apiUserController__WEBPACK_IMPORTED_MODULE_1__["default"].deactivate);
    };
    return ApiUserRoute;
}(_baseRouter__WEBPACK_IMPORTED_MODULE_0__["BaseRoute"]));



/***/ }),

/***/ "./src/routes/baseRouter.ts":
/*!**********************************!*\
  !*** ./src/routes/baseRouter.ts ***!
  \**********************************/
/*! exports provided: BaseRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRoute", function() { return BaseRoute; });
var BaseRoute = /** @class */ (function () {
    function BaseRoute() {
        this.title = "Welcome to Tyler-CMT Api";
    }
    BaseRoute.prototype.responseData = function (req, res, data) {
        res.locals.BASE_URL = "/";
        res.locals.title = this.title;
        res.status(200);
        res.send(data);
    };
    return BaseRoute;
}());



/***/ }),

/***/ "./src/routes/clientInfoRouters.ts":
/*!*****************************************!*\
  !*** ./src/routes/clientInfoRouters.ts ***!
  \*****************************************/
/*! exports provided: ClientInfoRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientInfoRoute", function() { return ClientInfoRoute; });
/* harmony import */ var _baseRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseRouter */ "./src/routes/baseRouter.ts");
/* harmony import */ var _controllers_clientController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/clientController */ "./src/controllers/clientController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ClientInfoRoute = /** @class */ (function (_super) {
    __extends(ClientInfoRoute, _super);
    function ClientInfoRoute() {
        return _super.call(this) || this;
    }
    ClientInfoRoute.map = function (router) {
        router.get('/clientinfo', _controllers_clientController__WEBPACK_IMPORTED_MODULE_1__["default"].getAll);
        ;
    };
    return ClientInfoRoute;
}(_baseRouter__WEBPACK_IMPORTED_MODULE_0__["BaseRoute"]));



/***/ }),

/***/ "./src/routes/durationRouter.ts":
/*!**************************************!*\
  !*** ./src/routes/durationRouter.ts ***!
  \**************************************/
/*! exports provided: DurationRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationRoute", function() { return DurationRoute; });
/* harmony import */ var _baseRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseRouter */ "./src/routes/baseRouter.ts");
/* harmony import */ var _controllers_durationController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/durationController */ "./src/controllers/durationController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DurationRoute = /** @class */ (function (_super) {
    __extends(DurationRoute, _super);
    function DurationRoute() {
        return _super.call(this) || this;
    }
    DurationRoute.map = function (router) {
        router.get('/v1/admin/duration', _controllers_durationController__WEBPACK_IMPORTED_MODULE_1__["default"].getAll);
        router.get('/v1/admin/duration/:id', _controllers_durationController__WEBPACK_IMPORTED_MODULE_1__["default"].getOne);
        router.post('/v1/admin/duration', _controllers_durationController__WEBPACK_IMPORTED_MODULE_1__["default"].create);
        router.put('/v1/admin/duration/:id', _controllers_durationController__WEBPACK_IMPORTED_MODULE_1__["default"].update);
        router.delete('/v1/admin/duration/:id', _controllers_durationController__WEBPACK_IMPORTED_MODULE_1__["default"].deactivate);
    };
    return DurationRoute;
}(_baseRouter__WEBPACK_IMPORTED_MODULE_0__["BaseRoute"]));



/***/ }),

/***/ "./src/routes/indexRouter.ts":
/*!***********************************!*\
  !*** ./src/routes/indexRouter.ts ***!
  \***********************************/
/*! exports provided: IndexRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRoute", function() { return IndexRoute; });
/* harmony import */ var _baseRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseRouter */ "./src/routes/baseRouter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IndexRoute = /** @class */ (function (_super) {
    __extends(IndexRoute, _super);
    function IndexRoute() {
        return _super.call(this) || this;
    }
    IndexRoute.map = function (router) {
        router.get('/', function (req, res, next) {
            new IndexRoute().index(req, res, next);
        });
    };
    IndexRoute.prototype.index = function (req, res, next) {
        this.title = 'Index | Tyler-CMT';
        var data = {
            "message": "Welcome!"
        };
        this.responseData(req, res, data);
    };
    return IndexRoute;
}(_baseRouter__WEBPACK_IMPORTED_MODULE_0__["BaseRoute"]));



/***/ }),

/***/ "./src/routes/loginRouter.ts":
/*!***********************************!*\
  !*** ./src/routes/loginRouter.ts ***!
  \***********************************/
/*! exports provided: LoginRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoute", function() { return LoginRoute; });
/* harmony import */ var _baseRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseRouter */ "./src/routes/baseRouter.ts");
/* harmony import */ var _controllers_loginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/loginController */ "./src/controllers/loginController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LoginRoute = /** @class */ (function (_super) {
    __extends(LoginRoute, _super);
    function LoginRoute() {
        return _super.call(this) || this;
    }
    LoginRoute.map = function (router) {
        router.post('/v1/login/:token', _controllers_loginController__WEBPACK_IMPORTED_MODULE_1__["default"].validateEmailToken);
        router.post('/v1/login', _controllers_loginController__WEBPACK_IMPORTED_MODULE_1__["default"].login);
        router.post('/v1/resetpass', _controllers_loginController__WEBPACK_IMPORTED_MODULE_1__["default"].resetPassword);
    };
    return LoginRoute;
}(_baseRouter__WEBPACK_IMPORTED_MODULE_0__["BaseRoute"]));



/***/ }),

/***/ "./src/routes/serviceRoute.ts":
/*!************************************!*\
  !*** ./src/routes/serviceRoute.ts ***!
  \************************************/
/*! exports provided: ServiceRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRoute", function() { return ServiceRoute; });
/* harmony import */ var _baseRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseRouter */ "./src/routes/baseRouter.ts");
/* harmony import */ var _controllers_serviceController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/serviceController */ "./src/controllers/serviceController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ServiceRoute = /** @class */ (function (_super) {
    __extends(ServiceRoute, _super);
    function ServiceRoute() {
        return _super.call(this) || this;
    }
    ServiceRoute.map = function (router) {
        router.get('/v1/admin/service', _controllers_serviceController__WEBPACK_IMPORTED_MODULE_1__["default"].getAll);
        router.get('/v1/admin/service/:id', _controllers_serviceController__WEBPACK_IMPORTED_MODULE_1__["default"].getOne);
        router.post('/v1/admin/service', _controllers_serviceController__WEBPACK_IMPORTED_MODULE_1__["default"].create);
        router.put('/v1/admin/service/:id', _controllers_serviceController__WEBPACK_IMPORTED_MODULE_1__["default"].update);
        router.delete('/v1/admin/service/:id', _controllers_serviceController__WEBPACK_IMPORTED_MODULE_1__["default"].deactivate);
    };
    return ServiceRoute;
}(_baseRouter__WEBPACK_IMPORTED_MODULE_0__["BaseRoute"]));



/***/ }),

/***/ "./src/routes/userTypeRouter.ts":
/*!**************************************!*\
  !*** ./src/routes/userTypeRouter.ts ***!
  \**************************************/
/*! exports provided: UserTypeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypeRoute", function() { return UserTypeRoute; });
/* harmony import */ var _baseRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseRouter */ "./src/routes/baseRouter.ts");
/* harmony import */ var _controllers_userTypeController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/userTypeController */ "./src/controllers/userTypeController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var UserTypeRoute = /** @class */ (function (_super) {
    __extends(UserTypeRoute, _super);
    function UserTypeRoute() {
        return _super.call(this) || this;
    }
    UserTypeRoute.map = function (router) {
        router.get('/v1/admin/usertypes', _controllers_userTypeController__WEBPACK_IMPORTED_MODULE_1__["default"].getAll);
        router.get('/v1/admin/usertypes/:id', _controllers_userTypeController__WEBPACK_IMPORTED_MODULE_1__["default"].getOne);
        router.post('/v1/admin/usertypes', _controllers_userTypeController__WEBPACK_IMPORTED_MODULE_1__["default"].create);
        router.put('/v1/admin/usertypes/:id', _controllers_userTypeController__WEBPACK_IMPORTED_MODULE_1__["default"].update);
        router.delete('/v1/admin/usertypes/:id', _controllers_userTypeController__WEBPACK_IMPORTED_MODULE_1__["default"].deactivate);
    };
    return UserTypeRoute;
}(_baseRouter__WEBPACK_IMPORTED_MODULE_0__["BaseRoute"]));



/***/ }),

/***/ "./src/routes/validClientRouter.ts":
/*!*****************************************!*\
  !*** ./src/routes/validClientRouter.ts ***!
  \*****************************************/
/*! exports provided: ValidClientRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidClientRoute", function() { return ValidClientRoute; });
/* harmony import */ var _baseRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseRouter */ "./src/routes/baseRouter.ts");
/* harmony import */ var _controllers_validClientController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/validClientController */ "./src/controllers/validClientController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ValidClientRoute = /** @class */ (function (_super) {
    __extends(ValidClientRoute, _super);
    function ValidClientRoute() {
        return _super.call(this) || this;
    }
    ValidClientRoute.map = function (router) {
        router.get('/v1/admin/client', _controllers_validClientController__WEBPACK_IMPORTED_MODULE_1__["default"].getAll);
        router.get('/v1/admin/client/:id', _controllers_validClientController__WEBPACK_IMPORTED_MODULE_1__["default"].getOne);
        router.post('/v1/admin/client', _controllers_validClientController__WEBPACK_IMPORTED_MODULE_1__["default"].create);
        router.put('/v1/admin/client/:id', _controllers_validClientController__WEBPACK_IMPORTED_MODULE_1__["default"].update);
        router.delete('/v1/admin/client/:id', _controllers_validClientController__WEBPACK_IMPORTED_MODULE_1__["default"].deactivate);
    };
    return ValidClientRoute;
}(_baseRouter__WEBPACK_IMPORTED_MODULE_0__["BaseRoute"]));



/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto-js");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose-unique-validator");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9hcGlVc2VyQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvYmFzZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2NsaWVudENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2R1cmF0aW9uQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvbG9naW5Db250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9zZXJ2aWNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlclR5cGVDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy92YWxpZENsaWVudENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL2FwaVVzZXJTY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL2RhdGFBY2Nlc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL2R1cmF0aW9uU2NoZW1hLnRzIiwid2VicGFjazovLy8uL3NyYy9kYi9zZXJ2aWNlU2NoZW1hLnRzIiwid2VicGFjazovLy8uL3NyYy9kYi91c2VyVHlwZVNjaGVtYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGIvdmFsaWRDbGllbnRTY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlL3ZhbGlkYXRlUmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2FwaVVzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jbGllbnRJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZHVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvdXNlclR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy92YWxpZENsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2FwaVVzZXJSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9iYXNlUm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvY2xpZW50SW5mb1JvdXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9kdXJhdGlvblJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4Um91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvbG9naW5Sb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9zZXJ2aWNlUm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy91c2VyVHlwZVJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3ZhbGlkQ2xpZW50Um91dGVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0by1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlLXVuaXF1ZS12YWxpZGF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUN2THRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQztBQUNMO0FBQ0k7QUFDUztBQUNUO0FBQ2lCO0FBQ2E7QUFDYjtBQUNNO0FBQ0Y7QUFDUTtBQUNUO0FBQ0c7QUFDSztBQUU3RDtJQUdFO1FBQ0UsT0FBTyxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxv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RSwwRUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsMEVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLDBFQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxDQWJxQyxxREFBUyxHQWE5Qzs7Ozs7Ozs7Ozs7OztBQ2pCRCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJ0eWxlci5hcGkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCAqIGFzIGxvZ2dlciBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBoZWxtZXQgZnJvbSAnaGVsbWV0JztcbmltcG9ydCB7IEluZGV4Um91dGUgfSBmcm9tICcuL3JvdXRlcy9pbmRleFJvdXRlcic7XG5pbXBvcnQgeyBWYWxpZGF0ZVJlcXVlc3QgfSBmcm9tICcuL21pZGRsZXdhcmUvdmFsaWRhdGVSZXF1ZXN0JztcbmltcG9ydCB7IExvZ2luUm91dGUgfSBmcm9tICcuL3JvdXRlcy9sb2dpblJvdXRlcic7XG5pbXBvcnQgeyBVc2VyVHlwZVJvdXRlIH0gZnJvbSAnLi9yb3V0ZXMvdXNlclR5cGVSb3V0ZXInO1xuaW1wb3J0IHsgQXBpVXNlclJvdXRlIH0gZnJvbSAnLi9yb3V0ZXMvYXBpVXNlclJvdXRlcic7XG5pbXBvcnQgeyBWYWxpZENsaWVudFJvdXRlIH0gZnJvbSAnLi9yb3V0ZXMvdmFsaWRDbGllbnRSb3V0ZXInO1xuaW1wb3J0IHsgU2VydmljZVJvdXRlIH0gZnJvbSAnLi9yb3V0ZXMvc2VydmljZVJvdXRlJztcbmltcG9ydCB7IER1cmF0aW9uUm91dGUgfSBmcm9tICcuL3JvdXRlcy9kdXJhdGlvblJvdXRlcic7XG5pbXBvcnQgeyBDbGllbnRJbmZvUm91dGUgfSBmcm9tICcuL3JvdXRlcy9jbGllbnRJbmZvUm91dGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICBwcml2YXRlIHNlcnZlcjogZXhwcmVzcy5BcHBsaWNhdGlvbjtcbiAgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHByb2Nlc3MudGl0bGUgPSBcInR5bGVyLWNtdC1hcGlcIjtcbiAgICB0aGlzLnNlcnZlciA9IGV4cHJlc3MoKTtcbiAgICB0aGlzLmNvbmZpZ3VyZU1pZGRsZXdhcmUoKTtcbiAgICB0aGlzLnJvdXRlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVNaWRkbGV3YXJlKCkge1xuICAgIHRoaXMuc2VydmVyLnVzZShsb2dnZXIoJ2RldicpKTtcbiAgICB0aGlzLnNlcnZlci51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcbiAgICB0aGlzLnNlcnZlci51c2UoYm9keVBhcnNlci5qc29uKCkpOyBcbiAgICB0aGlzLnNlcnZlci51c2UoaGVsbWV0KCkpO1xuICAgIHRoaXMuc2VydmVyLmRpc2FibGUoJ3gtcG93ZXJlZC1ieScpO1xuICAgIHRoaXMuc2VydmVyLmFsbCgnLyonLCBjb3JzKCkpO1xuICAgIHRoaXMuc2VydmVyLmFsbCgnL3YxLyonLCBWYWxpZGF0ZVJlcXVlc3QudmFsaWRhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSByb3V0ZXMoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuICAgIENsaWVudEluZm9Sb3V0ZS5tYXAocm91dGVyKTtcbiAgICBJbmRleFJvdXRlLm1hcChyb3V0ZXIpO1xuICAgIExvZ2luUm91dGUubWFwKHJvdXRlcik7XG4gICAgQXBpVXNlclJvdXRlLm1hcChyb3V0ZXIpO1xuICAgIFVzZXJUeXBlUm91dGUubWFwKHJvdXRlcik7XG4gICAgVmFsaWRDbGllbnRSb3V0ZS5tYXAocm91dGVyKTtcbiAgICBTZXJ2aWNlUm91dGUubWFwKHJvdXRlcik7XG4gICAgRHVyYXRpb25Sb3V0ZS5tYXAocm91dGVyKTtcbiAgICBcbiAgICB0aGlzLnNlcnZlci51c2Uocm91dGVyKTtcbiAgICBcbiAgfVxuXG4gIHB1YmxpYyBydW4ocG9ydDogbnVtYmVyLCBob3N0OiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlcnZlci5saXN0ZW4ocG9ydCwgaG9zdCwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYGxpc3RlbmluZyBvbiBwb3J0OiAke3BvcnR9YCk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwKCk7IiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgdXVpZCBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IFNjaGVtYSBmcm9tIFwiLi4vZGIvYXBpVXNlclNjaGVtYVwiO1xuaW1wb3J0IHsgSUFwaVVzZXIgfSBmcm9tIFwiLi4vZGIvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL21vZGVscy9hcGlVc2VyXCI7XG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4uL2NvbmZpZy9kYi5jb25maWcuanNvblwiO1xuaW1wb3J0IHsgQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9iYXNlQ29udHJvbGxlclwiO1xuXG5leHBvcnQgY2xhc3MgQXBpVXNlckNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgdXNlcm5hbWU6c3RyaW5nO1xuICBwcml2YXRlIGVtYWlsOnN0cmluZztcbiAgcHJpdmF0ZSBmaXJzdE5hbWU6c3RyaW5nO1xuICBwcml2YXRlIGxhc3ROYW1lOnN0cmluZztcbiAgcHJpdmF0ZSBwYXNzd29yZDpzdHJpbmc7XG4gIHByaXZhdGUgdHlwZTpzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudXNlcm5hbWU9Jyc7XG4gICAgdGhpcy5lbWFpbD0nJztcbiAgICB0aGlzLmZpcnN0TmFtZT0nJztcbiAgICB0aGlzLmxhc3ROYW1lPScnO1xuICAgIHRoaXMucGFzc3dvcmQ9Jyc7XG4gICAgdGhpcy50eXBlPScnO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXBJdGVtcyhtb2RlbDogSUFwaVVzZXJbXSk6IFVzZXJbXSB7XG4gICAgbGV0IF9kYXRhID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbC5sZW5ndGg7IGkrKykge1xuICAgICAgX2RhdGEucHVzaCh0aGlzLm1hcEl0ZW0obW9kZWxbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIF9kYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXBJdGVtKG1vZGVsOiBJQXBpVXNlcik6IFVzZXIge1xuICAgIGNvbnN0IF9kYXRhID0gbmV3IFVzZXIoKTtcbiAgICBfZGF0YS5hY3RpdmUgPSBtb2RlbC5hY3RpdmU7XG4gICAgX2RhdGEuZW1haWwgPSBtb2RlbC5lbWFpbDtcbiAgICBfZGF0YS5maXJzdE5hbWUgPSBtb2RlbC5maXJzdE5hbWU7XG4gICAgX2RhdGEuaWQgPSBtb2RlbC5pZDtcbiAgICBfZGF0YS5sYXN0TmFtZSA9IG1vZGVsLmxhc3ROYW1lO1xuICAgIF9kYXRhLnRva2VuVmFsaWRhdGVkID0gbW9kZWwudG9rZW5WYWxpZGF0ZWQ7XG4gICAgX2RhdGEudXNlcm5hbWUgPSBtb2RlbC51c2VybmFtZTtcblxuICAgIHJldHVybiBfZGF0YTtcbiAgfVxuXG4gIGdldEFsbCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuXG4gICAgICBTY2hlbWEuZmluZCh7IGFjdGl2ZTogdHJ1ZSB9LCAoZXJyOiBFcnJvciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcblxuICAgICAgIFxuICAgICAgICBhbGVydChkYXRhKTtcbiAgICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW1zKGRhdGEpO1xuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChfZGF0YSk7XG4gICAgICB9KS5wb3B1bGF0ZSh7cGF0aDogJ1VzZXJUeXBlcycsIHNlbGVjdDogJ2Rpc3BsYXknfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcblxuICBnZXRPbmUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghcmVxLnBhcmFtcyB8fCAhcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoKTtcbiAgICAgIH1cblxuICAgICAgU2NoZW1hLmZpbmRCeUlkKHJlcS5wYXJhbXMuaWQsIChlcnI6IEVycm9yLCBkYXRhOiBJQXBpVXNlcikgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW0oZGF0YSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChfZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNyZWF0ZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKFxuICAgICAgICAhcmVxLmJvZHkgfHxcbiAgICAgICAgIXJlcS5ib2R5LmVtYWlsIHx8XG4gICAgICAgICFyZXEuYm9keS5maXJzdE5hbWUgfHxcbiAgICAgICAgIXJlcS5ib2R5Lmxhc3ROYW1lIHx8XG4gICAgICAgICFyZXEuYm9keS51c2VybmFtZSB8fFxuICAgICAgICAhcmVxLmJvZHkucGFzc3dvcmRcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBcIm1pc3NpbmcgZGF0YSBpdGVtKHMpXCIgfSk7XG4gICAgICB9XG5cblxuICAgICAgdGhpcy5lbWFpbCA9IHRoaXMuZGVjcnlwdERhdGEocmVxLmJvZHkuZW1haWwpO1xuICAgICAgdGhpcy5maXJzdE5hbWUgPSB0aGlzLmRlY3J5cHREYXRhKHJlcS5ib2R5LmZpcnN0TmFtZSk7XG4gICAgICB0aGlzLmxhc3ROYW1lID0gdGhpcy5kZWNyeXB0RGF0YShyZXEuYm9keS5sYXN0TmFtZSk7XG4gICAgICB0aGlzLnVzZXJuYW1lID0gdGhpcy5kZWNyeXB0RGF0YShyZXEuYm9keS51c2VybmFtZSk7XG4gICAgICB0aGlzLnBhc3N3b3JkID0gdGhpcy5kZWNyeXB0RGF0YShyZXEuYm9keS5wYXNzd29yZCk7XG4gICAgICB0aGlzLnR5cGUgPSB0aGlzLmRlY3J5cHREYXRhKHJlcS5ib2R5LnR5cGUpO1xuXG5cbiAgICAgIGlmKHRoaXMuZW1haWwgPT0gJycpe1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7bWVzc2FnZTogJ2ZhaWxlZCB0byBkZWNyeXB0J30pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfbW9kZWwgPSBuZXcgU2NoZW1hKHtcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgIGZpcnN0TmFtZTogdGhpcy5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiB0aGlzLmxhc3ROYW1lLFxuICAgICAgICB1c2VyVHlwZUlkOiA8c3RyaW5nPih0aGlzLnR5cGUpLnRvTG93ZXJDYXNlKCkgPT09ICdhZG1pbicgID8gY29uZmlnLmFkbWluIDogY29uZmlnLmJhc2ljLFxuICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwibW9kZWxcIiwgX21vZGVsKTtcblxuICAgICAgaWYgKCFfbW9kZWwuc2V0UGFzc3dvcmQodGhpcy5wYXNzd29yZCkpIHtcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAgIC5zZW5kKHsgbWVzc2FnZTogXCJwYXNzd29yZCBkb2VzIG5vdCBtYXRjaCBjcml0ZXJpYVwiIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIGNyZWF0ZWRcIik7XG5cbiAgICAgIGlmICghX21vZGVsLmdlbmVyYXRlVmFsaWRhdGlvblRva2VuKCkpIHtcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAgIC5zZW5kKHsgbWVzc2FnZTogXCJlcnJvciBvY2N1cmVkIHdoaWxlIGdlbmVyYXRpbmcgdG9rZW5cIiB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coXCJnZW5lcmF0ZWQgdG9rZW5cIik7XG5cbiAgICAgIFNjaGVtYS5jcmVhdGUoX21vZGVsLCAoZXJyOiBFcnJvciwgZGF0YTogSUFwaVVzZXIpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIGNvbnN0IF9kYXRhID0gdGhpcy5tYXBJdGVtKGRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoX2RhdGEpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghcmVxLnBhcmFtcyB8fCAhcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBcInRhcmdldCBpZCBpcyBpbnZhbGlkXCIgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXJlcS5ib2R5IHx8XG4gICAgICAgICFyZXEuYm9keS5maXJzdE5hbWUgfHxcbiAgICAgICAgIXJlcS5ib2R5Lmxhc3ROYW1lIHx8XG4gICAgICAgICFyZXEuYm9keS51c2VybmFtZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfZmlyc3ROYW1lID0gcmVxLmJvZHkuZmlyc3ROYW1lID8gcmVxLmJvZHkuZmlyc3ROYW1lIDogXCJcIjtcbiAgICAgIGNvbnN0IF9sYXN0TmFtZSA9IHJlcS5ib2R5Lmxhc3ROYW1lID8gcmVxLmJvZHkubGFzdE5hbWUgOiBcIlwiO1xuXG4gICAgICBpZiAoX2ZpcnN0TmFtZS5sZW5ndGggPT0gMCB8fCBfbGFzdE5hbWUubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAgIC5zZW5kKHsgbWVzc2FnZTogXCJtaXNzaW5nIGFuZCBudWxsIG9yIGVtcHR5IGRhdGFcIiB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgX21vZGVsID0gbmV3IFNjaGVtYSh7XG4gICAgICAgIGZpcnN0TmFtZTogX2ZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IF9sYXN0TmFtZVxuICAgICAgfSk7XG5cbiAgICAgIFNjaGVtYS5maW5kQnlJZEFuZFVwZGF0ZShyZXEucGFyYW1zLmlkLCBfbW9kZWwsIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVhY3RpdmF0ZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFyZXEucGFyYW1zIHx8ICFyZXEucGFyYW1zLmlkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgpO1xuICAgICAgfVxuXG4gICAgICBTY2hlbWEuZmluZEJ5SWRBbmRVcGRhdGUoXG4gICAgICAgIHJlcS5wYXJhbXMuaWQsXG4gICAgICAgIHsgYWN0aXZlOiBmYWxzZSB9LFxuICAgICAgICAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwNCkuc2VuZCgpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnNlbmQoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpVXNlckNvbnRyb2xsZXIoKTtcbiIsImltcG9ydCAqIGFzIHRyYW5zcG9ydENvbmZpZyBmcm9tICcuLi9jb25maWcvdHJhbnNwb3J0LmNvbmZpZy5qc29uJ1xuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0by1qcydcblxuZXhwb3J0ICBjbGFzcyBCYXNlQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGVuY3J5cHREYXRhKGRhdGE6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHZhciBfZGF0YSA9IGNyeXB0by5BRVMuZW5jcnlwdChkYXRhLCB0cmFuc3BvcnRDb25maWcudHJhbnNwb3J0U2VjcmV0KTtcbiAgICAgICAgcmV0dXJuIF9kYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRlY3J5cHREYXRhKGRhdGE6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHZhciBfZGF0YSA9IGNyeXB0by5BRVMuZGVjcnlwdChkYXRhLCB0cmFuc3BvcnRDb25maWcudHJhbnNwb3J0U2VjcmV0KTtcbiAgICAgICAgdmFyIF9wbGFpbnRleHQgPSBfZGF0YS50b1N0cmluZyhjcnlwdG8uZW5jLlV0ZjgpO1xuICAgICAgICByZXR1cm4gX3BsYWludGV4dDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBCYXNlQ29udHJvbGxlcigpOyIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBDbGllbnRJbmZvIGZyb20gXCIuLi9tb2RlbHMvY2xpZW50SW5mb1wiO1xuXG5leHBvcnQgY2xhc3MgQ2xpZW50SW5mb0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0QWxsID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IF9kYXRhID0gbmV3IENsaWVudEluZm8oKTtcbiAgICBfZGF0YS5ob3N0bmFtZSA9IHJlcS5ob3N0bmFtZTtcbiAgICBfZGF0YS5pcCA9IHJlcS5jb25uZWN0aW9uLnJlbW90ZUFkZHJlc3M7XG4gICAgX2RhdGEuZm9yd2FyZWQgPSByZXEuaGVhZGVycy5mb3J3YXJkZWQgPyByZXEuaGVhZGVycy5mb3J3YXJkZWQgOiBcIlwiO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKF9kYXRhKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENsaWVudEluZm9Db250cm9sbGVyKCk7XG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgU2NoZW1hIGZyb20gXCIuLi9kYi9kdXJhdGlvblNjaGVtYVwiO1xuaW1wb3J0IHsgSUR1cmF0aW9uIH0gZnJvbSBcIi4uL2RiL2ludGVyZmFjZXNcIjtcbmltcG9ydCBEdXJhdGlvbiBmcm9tIFwiLi4vbW9kZWxzL2R1cmF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBEdXJhdGlvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHJpdmF0ZSBtYXBJdGVtcyhtb2RlbDogSUR1cmF0aW9uW10pOiBEdXJhdGlvbltdIHtcbiAgICBsZXQgX2RhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfZGF0YS5wdXNoKHRoaXMubWFwSXRlbShtb2RlbFtpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gX2RhdGE7XG4gIH1cblxuICBwcml2YXRlIG1hcEl0ZW0obW9kZWw6IElEdXJhdGlvbik6IER1cmF0aW9uIHtcbiAgICBjb25zdCBfZGF0YSA9IG5ldyBEdXJhdGlvbigpO1xuICAgIF9kYXRhLmFjdGl2ZSA9IG1vZGVsLmFjdGl2ZTtcbiAgICBfZGF0YS5kaXNwbGF5ID0gbW9kZWwuZGlzcGxheTtcbiAgICBfZGF0YS5pZCA9IG1vZGVsLmlkO1xuICAgIF9kYXRhLnByaWNlID0gbW9kZWwucHJpY2U7XG4gICAgcmV0dXJuIF9kYXRhO1xuICB9XG5cbiAgZ2V0QWxsID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIFNjaGVtYS5maW5kKHsgYWN0aXZlOiB0cnVlIH0sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW1zKGRhdGEpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKF9kYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRPbmUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghcmVxLnBhcmFtcyB8fCAhcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoKTtcbiAgICAgIH1cblxuICAgICAgU2NoZW1hLmZpbmRCeUlkKHJlcS5wYXJhbXMuaWQsIChlcnIsIGRhdGE6IElEdXJhdGlvbikgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW0oZGF0YSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChfZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNyZWF0ZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFyZXEuYm9keSB8fCAhcmVxLmJvZHkuZGVzY3JpcHRpb24gfHwgIXJlcS5ib2R5LmRpc3BsYXkpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9tb2RlbCA9IG5ldyBEdXJhdGlvbigpO1xuICAgICAgX21vZGVsLmlkID0gdXVpZCgpO1xuICAgICAgX21vZGVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICBfbW9kZWwuZGlzcGxheSA9IHJlcS5ib2R5LmRpc3BsYXk7XG4gICAgICBfbW9kZWwucHJpY2UgPSByZXEuYm9keS5wcmljZTtcblxuICAgICAgU2NoZW1hLmNyZWF0ZShfbW9kZWwsIChlcnI6IEVycm9yLCBkYXRhOiBJRHVyYXRpb24pID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIGNvbnN0IF9kYXRhID0gdGhpcy5tYXBJdGVtKGRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoX2RhdGEpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghcmVxLnBhcmFtcyB8fCAhcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJpY2UgPSByZXEuYm9keS5wcmljZSA/IHJlcS5ib2R5LnByaWNlIDogXCJcIjtcbiAgICAgIGNvbnN0IGRpc3AgPSByZXEuYm9keS5kaXNwbGF5ID8gcmVxLmJvZHkuZGlzcGxheSA6IFwiXCI7XG5cbiAgICAgIGlmIChwcmljZSA+IDAgfHwgZGlzcC5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgICAgLnNlbmQoeyBtZXNzYWdlOiBcImRlc2NyaXB0aW9uIG9yIGRpc3BsYXkgaXMgbnVsbCBvciBlbXB0eVwiIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfbW9kZWwgPSBuZXcgU2NoZW1hKHtcbiAgICAgICAgZGlzcGxheTogZGlzcCxcbiAgICAgICAgcHJpY2U6IHByaWNlXG4gICAgICB9KTtcblxuICAgICAgU2NoZW1hLmZpbmRCeUlkQW5kVXBkYXRlKHJlcS5wYXJhbXMuaWQsIF9tb2RlbCwgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcblxuICBkZWFjdGl2YXRlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlcS5wYXJhbXMgfHwgIXJlcS5wYXJhbXMuaWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIFNjaGVtYS5maW5kQnlJZEFuZFVwZGF0ZShcbiAgICAgICAgcmVxLnBhcmFtcy5pZCxcbiAgICAgICAgeyBhY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjA0KS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IER1cmF0aW9uQ29udHJvbGxlcigpO1xuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCAqIGFzIGNvbmZpZ0luZm8gZnJvbSBcIi4uL2NvbmZpZy9kYi5jb25maWcuanNvblwiO1xuaW1wb3J0IFNjaGVtYSBmcm9tIFwiLi4vZGIvYXBpVXNlclNjaGVtYVwiO1xuaW1wb3J0IHsgSUFwaVVzZXIsIElEZWNvZGVkIH0gZnJvbSBcIi4uL2RiL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSBcIi4vYmFzZUNvbnRyb2xsZXJcIjtcblxuXG5leHBvcnQgY2xhc3MgbG9naW5Db250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXJ7XG4gIHByaXZhdGUgdXNlcm5hbWU6c3RyaW5nO1xuICBwcml2YXRlIHBhc3N3b3JkOnN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2VybmFtZT0nJztcbiAgICB0aGlzLnBhc3N3b3JkPScnO1xuICB9XG5cbiAgbG9naW4gPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgXG4gICAgdHJ5IHtcblxuICAgICAgaWYgKCFyZXEuYm9keS51c2VybmFtZSB8fCAhcmVxLmJvZHkucGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXNlcm5hbWUgPSB0aGlzLmRlY3J5cHREYXRhKHJlcS5ib2R5LnVzZXJuYW1lKTtcbiAgICAgIHRoaXMucGFzc3dvcmQgPSB0aGlzLmRlY3J5cHREYXRhKHJlcS5ib2R5LnBhc3N3b3JkKTtcblxuICAgICAgU2NoZW1hLmZpbmRPbmUoeyB1c2VybmFtZTogdGhpcy51c2VybmFtZSB9KS5leGVjKFxuICAgICAgICAoZXJyOiBFcnJvciwgZGF0YTogSUFwaVVzZXIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcblxuICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoIWRhdGEudmFsaWRQYXNzd29yZCh0aGlzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBtZXNzYWdlOiBcImVpdGhlciB1c2VybmFtZSBvciBwYXNzd29yZCBpbiBpbmNvcnJlY3QhXCIgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZGF0YS50b2tlblZhbGlkYXRlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAgICAgLnN0YXR1cygzMDEpXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBtZXNzYWdlOiBcInBsZWFzZSB2YWxpZGF0ZSB5b3VyIGVtYWlsXCIgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiV2VsY29tZSBiYWNrIVwiIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IFwidXNlciBkb2VzIG5vdCBleGlzdFwiIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVzZXRQYXNzd29yZCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFyZXEuYm9keS51c2VybmFtZSB8fCAhcmVxLmJvZHkucGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIFNjaGVtYS5maW5kT25lKHsgdXNlcm5hbWU6IHJlcS5ib2R5LnVzZXIgfSkuZXhlYyhcbiAgICAgICAgKGVycjogRXJyb3IsIGRhdGE6IElBcGlVc2VyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG5cbiAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKCFkYXRhLnNldFBhc3N3b3JkKHJlcS5ib2R5LnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgICAgICAgICAgLnNlbmQoXCJlaXRoZXIgdXNlcm5hbWUgb3IgcGFzc3dvcmQgaW4gaW5jb3JyZWN0IVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIFNjaGVtYS5maW5kQnlJZEFuZFVwZGF0ZShcbiAgICAgICAgICAgICAgICBkYXRhLl9pZCxcbiAgICAgICAgICAgICAgICB7IHNhbHQ6IGRhdGEuc2FsdCwgcGFzc3dvcmRfaGFzaDogZGF0YS5wYXNzd29yZF9oYXNoIH0sXG4gICAgICAgICAgICAgICAgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQxNykuc2VuZCgpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFsaWRhdGVFbWFpbFRva2VuID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlcS5wYXJhbXMudG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9kZWNvZGVkID0gPElEZWNvZGVkPihcbiAgICAgICAgand0LnZlcmlmeShyZXEucGFyYW1zLnRva2VuLCBjb25maWdJbmZvLnNlY3JldClcbiAgICAgICk7XG5cbiAgICAgIGlmICghX2RlY29kZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogXCJkZWNvZGluZyBmYWlsdXJlXCIgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX2RlY29kZWQuZXhwID4gRGF0ZS5ub3coKSAvIDEwMDApIHtcbiAgICAgICAgICBTY2hlbWEuZmluZEJ5SWRBbmRVcGRhdGUoXG4gICAgICAgICAgICBfZGVjb2RlZC5pZCxcbiAgICAgICAgICAgIHsgdG9rZW5WYWxpZGF0ZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnIubWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiVG9rZW4gZXhwaXJlZFwiIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgbG9naW5Db250cm9sbGVyKCk7XG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBJU2VydmljZSB9IGZyb20gXCIuLi9kYi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgU2NoZW1hIGZyb20gXCIuLi9kYi9zZXJ2aWNlU2NoZW1hXCI7XG5pbXBvcnQgU2VydmljZSBmcm9tIFwiLi4vbW9kZWxzL3NlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFNlcnZpY2VDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgbWFwSXRlbXMobW9kZWw6IElTZXJ2aWNlW10pOiBTZXJ2aWNlW10ge1xuICAgIGxldCBfZGF0YSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgIF9kYXRhLnB1c2godGhpcy5tYXBJdGVtKG1vZGVsW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBfZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgbWFwSXRlbShtb2RlbDogSVNlcnZpY2UpOiBTZXJ2aWNlIHtcbiAgICBjb25zdCBfZGF0YSA9IG5ldyBTZXJ2aWNlKCk7XG4gICAgX2RhdGEuYWN0aXZlID0gbW9kZWwuYWN0aXZlO1xuICAgIF9kYXRhLmRlc2NyaXB0aW9uID0gbW9kZWwuZGVzY3JpcHRpb247XG4gICAgX2RhdGEuaWQgPSBtb2RlbC5pZDtcbiAgICBfZGF0YS5zaG9ydERlc2NyaXB0aW9uID0gbW9kZWwuc2hvcnREZXNjcmlwdGlvbjtcblxuICAgIHJldHVybiBfZGF0YTtcbiAgfVxuXG4gIGdldEFsbCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICBTY2hlbWEuZmluZCh7IGFjdGl2ZTogdHJ1ZSB9LCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgIGNvbnN0IF9kYXRhID0gdGhpcy5tYXBJdGVtcyhkYXRhKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChfZGF0YSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0T25lID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlcS5wYXJhbXMgfHwgIXJlcS5wYXJhbXMuaWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIFNjaGVtYS5maW5kQnlJZChyZXEucGFyYW1zLmlkLCAoZXJyLCBkYXRhOiBJU2VydmljZSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW0oZGF0YSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChfZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNyZWF0ZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFyZXEuYm9keSB8fCAhcmVxLmJvZHkuZGVzY3JpcHRpb24gfHwgIXJlcS5ib2R5LnNob3J0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9tb2RlbCA9IG5ldyBTZXJ2aWNlKCk7XG4gICAgICBfbW9kZWwuaWQgPSB1dWlkKCk7XG4gICAgICBfbW9kZWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIF9tb2RlbC5kZXNjcmlwdGlvbiA9IHJlcS5ib2R5LmRlc2NyaXB0aW9uO1xuICAgICAgX21vZGVsLnNob3J0RGVzY3JpcHRpb24gPSByZXEuYm9keS5zaG9ydERlc2NyaXB0aW9uO1xuXG4gICAgICBTY2hlbWEuY3JlYXRlKF9tb2RlbCwgKGVycjogRXJyb3IsIGRhdGE6IElTZXJ2aWNlKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICBjb25zdCBfZGF0YSA9IHRoaXMubWFwSXRlbShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKF9kYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlcS5wYXJhbXMgfHwgIXJlcS5wYXJhbXMuaWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcmVxLmJvZHkuZGVzY3JpcHRpb24gPyByZXEuYm9keS5kZXNjcmlwdGlvbiA6IFwiXCI7XG4gICAgICBjb25zdCBzaG9ydERlc2MgPSByZXEuYm9keS5zaG9ydERlc2NyaXB0aW9uXG4gICAgICAgID8gcmVxLmJvZHkuc2hvcnREZXNjcmlwdGlvblxuICAgICAgICA6IFwiXCI7XG5cbiAgICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPT0gMCB8fCBzaG9ydERlc2MubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAgIC5zZW5kKHsgbWVzc2FnZTogXCJkZXNjcmlwdGlvbiBpcyBudWxsIG9yIGVtcHR5XCIgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9tb2RlbCA9IG5ldyBTY2hlbWEoe1xuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIHNob3J0RGVzYzogc2hvcnREZXNjXG4gICAgICB9KTtcblxuICAgICAgU2NoZW1hLmZpbmRCeUlkQW5kVXBkYXRlKHJlcS5wYXJhbXMuaWQsIF9tb2RlbCwgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcblxuICBkZWFjdGl2YXRlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlcS5wYXJhbXMgfHwgIXJlcS5wYXJhbXMuaWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIFNjaGVtYS5maW5kQnlJZEFuZFVwZGF0ZShcbiAgICAgICAgcmVxLnBhcmFtcy5pZCxcbiAgICAgICAgeyBhY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjA0KS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZpY2VDb250cm9sbGVyKCk7XG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBJVXNlclR5cGUgfSBmcm9tIFwiLi4vZGIvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IFNjaGVtYSBmcm9tIFwiLi4vZGIvdXNlclR5cGVTY2hlbWFcIjtcbmltcG9ydCBVc2VyVHlwZSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJUeXBlXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyVHlwZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHJpdmF0ZSBtYXBJdGVtcyhtb2RlbDogSVVzZXJUeXBlW10pOiBVc2VyVHlwZVtdIHtcbiAgICBsZXQgX2RhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfZGF0YS5wdXNoKHRoaXMubWFwSXRlbShtb2RlbFtpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gX2RhdGE7XG4gIH1cblxuICBwcml2YXRlIG1hcEl0ZW0obW9kZWw6IElVc2VyVHlwZSk6IFVzZXJUeXBlIHtcbiAgICBjb25zb2xlLmxvZyhcInR5cGU6IFwiICsgbW9kZWwuZGlzcGxheSwgbW9kZWwuX2lkKTtcbiAgICBjb25zdCBfZGF0YSA9IG5ldyBVc2VyVHlwZSgpO1xuICAgIF9kYXRhLmFjdGl2ZSA9IG1vZGVsLmFjdGl2ZTtcbiAgICBfZGF0YS5kZXNjcmlwdGlvbiA9IG1vZGVsLmRlc2NyaXB0aW9uO1xuICAgIF9kYXRhLmRpc3BsYXkgPSBtb2RlbC5kaXNwbGF5O1xuICAgIF9kYXRhLmlkID0gbW9kZWwuaWQ7XG5cbiAgICByZXR1cm4gX2RhdGE7XG4gIH1cblxuICBnZXRBbGwgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgU2NoZW1hLmZpbmQoeyBhY3RpdmU6IHRydWUgfSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICBjb25zdCBfZGF0YSA9IHRoaXMubWFwSXRlbXMoZGF0YSk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoX2RhdGEpO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldE9uZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFyZXEucGFyYW1zIHx8ICFyZXEucGFyYW1zLmlkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgpO1xuICAgICAgfVxuXG4gICAgICBTY2hlbWEuZmluZEJ5SWQocmVxLnBhcmFtcy5pZCwgKGVyciwgZGF0YTogSVVzZXJUeXBlKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICBjb25zdCBfZGF0YSA9IHRoaXMubWFwSXRlbShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKF9kYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgY3JlYXRlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlcS5ib2R5IHx8ICFyZXEuYm9keS5kZXNjcmlwdGlvbiB8fCAhcmVxLmJvZHkuZGlzcGxheSkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgX21vZGVsID0gbmV3IFVzZXJUeXBlKCk7XG4gICAgICBfbW9kZWwuaWQgPSB1dWlkKCk7XG4gICAgICBfbW9kZWwuZGVzY3JpcHRpb24gPSByZXEuYm9keS5kZXNjcmlwdGlvbjtcbiAgICAgIF9tb2RlbC5kaXNwbGF5ID0gcmVxLmJvZHkuZGlzcGxheTtcbiAgICAgIF9tb2RlbC5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICBTY2hlbWEuY3JlYXRlKF9tb2RlbCwgKGVycjogRXJyb3IsIGRhdGE6IElVc2VyVHlwZSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW0oZGF0YSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZChfZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFyZXEucGFyYW1zIHx8ICFyZXEucGFyYW1zLmlkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXNjID0gcmVxLmJvZHkuZGVzY3JpcHRpb24gPyByZXEuYm9keS5kZXNjcmlwdGlvbiA6IFwiXCI7XG4gICAgICBjb25zdCBkaXNwID0gcmVxLmJvZHkuZGlzcGxheSA/IHJlcS5ib2R5LmRpc3BsYXkgOiBcIlwiO1xuXG4gICAgICBpZiAoZGVzYy5sZW5ndGggPT0gMCB8fCBkaXNwLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAuc3RhdHVzKDQwMClcbiAgICAgICAgICAuc2VuZCh7IG1lc3NhZ2U6IFwiZGVzY3JpcHRpb24gb3IgZGlzcGxheSBpcyBudWxsIG9yIGVtcHR5XCIgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF91c2VyVHlwZSA9IHtcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2MsXG4gICAgICAgIGRpc3BsYXk6IGRpc3BcbiAgICAgIH07XG5cbiAgICAgIFNjaGVtYS5maW5kQnlJZEFuZFVwZGF0ZShyZXEucGFyYW1zLmlkLCBfdXNlclR5cGUsIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVhY3RpdmF0ZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFyZXEucGFyYW1zIHx8ICFyZXEucGFyYW1zLmlkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgpO1xuICAgICAgfVxuXG4gICAgICBTY2hlbWEuZmluZEJ5SWRBbmRVcGRhdGUoXG4gICAgICAgIHJlcS5wYXJhbXMuaWQsXG4gICAgICAgIHsgYWN0aXZlOiBmYWxzZSB9LFxuICAgICAgICAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwNCkuc2VuZCgpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyVHlwZUNvbnRyb2xsZXIoKTtcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCAqIGFzIHV1aWQgZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IElWYWxpZENsaWVudCB9IGZyb20gXCIuLi9kYi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgU2NoZW1hIGZyb20gXCIuLi9kYi92YWxpZENsaWVudFNjaGVtYVwiO1xuaW1wb3J0IFZhbGlkQ2xpZW50IGZyb20gXCIuLi9tb2RlbHMvdmFsaWRDbGllbnRcIjtcblxuZXhwb3J0IGNsYXNzIFZhbGlkQ2xpZW50Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwcml2YXRlIG1hcEl0ZW1zKG1vZGVsOiBJVmFsaWRDbGllbnRbXSk6IFZhbGlkQ2xpZW50W10ge1xuICAgIGxldCBfZGF0YSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgIF9kYXRhLnB1c2godGhpcy5tYXBJdGVtKG1vZGVsW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBfZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgbWFwSXRlbShtb2RlbDogSVZhbGlkQ2xpZW50KTogVmFsaWRDbGllbnQge1xuICAgIGNvbnNvbGUubG9nKFwiX2lkXCIsIG1vZGVsLl9pZCk7XG4gICAgY29uc3QgX2RhdGEgPSBuZXcgVmFsaWRDbGllbnQoKTtcbiAgICBfZGF0YS5hY3RpdmUgPSBtb2RlbC5hY3RpdmU7XG4gICAgX2RhdGEuY29udGFjdE5hbWUgPSBtb2RlbC5jb250YWN0TmFtZTtcbiAgICBfZGF0YS5kZXNjcmlwdGlvbiA9IG1vZGVsLmRlc2NyaXB0aW9uO1xuICAgIF9kYXRhLmVtYWlsID0gbW9kZWwuZW1haWw7XG4gICAgX2RhdGEuaWQgPSBtb2RlbC5pZDtcbiAgICBfZGF0YS5pcEFkZHJlc3MgPSBtb2RlbC5pcEFkZHJlc3M7XG4gICAgX2RhdGEubmFtZSA9IG1vZGVsLm5hbWU7XG4gICAgX2RhdGEucGhvbmVOdW1iZXIgPSBtb2RlbC5waG9uZU51bWJlcjtcblxuICAgIHJldHVybiBfZGF0YTtcbiAgfVxuXG4gIGdldEFsbCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICBTY2hlbWEuZmluZCh7IGFjdGl2ZTogdHJ1ZSB9LCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgIGNvbnN0IF9kYXRhID0gdGhpcy5tYXBJdGVtcyhkYXRhKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKF9kYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRPbmUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghcmVxLnBhcmFtcyB8fCAhcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoKTtcbiAgICAgIH1cblxuICAgICAgU2NoZW1hLmZpbmRCeUlkKHJlcS5wYXJhbXMuaWQsIChlcnIsIGRhdGE6IElWYWxpZENsaWVudCkgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW0oZGF0YSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgY3JlYXRlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoXG4gICAgICAgICFyZXEuYm9keS5hY3RpdmUgfHxcbiAgICAgICAgIXJlcS5ib2R5LmNvbnRhY3RuYW1lIHx8XG4gICAgICAgICFyZXEuYm9keS5kZXNjcmlwdGlvbiB8fFxuICAgICAgICAhcmVxLmJvZHkuZW1haWwgfHxcbiAgICAgICAgIXJlcS5ib2R5LmlwYWRkcmVzcyB8fFxuICAgICAgICAhcmVxLmJvZHkubmFtZSB8fFxuICAgICAgICAhcmVxLmJvZHkucGhvbmVudW1iZXJcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBcInJlcXVpcmVkIGRhdGEgaXMgbWlzc2luZ1wiIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfbW9kZWwgPSBuZXcgU2NoZW1hKHtcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICBjb250YWN0TmFtZTogcmVxLmJvZHkuY29udGFjdG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiByZXEuYm9keS5kZXNjcmlwdGlvbixcbiAgICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxuICAgICAgICBpcEFkZHJlc3M6IHJlcS5ib2R5LmlwYWRkcmVzcyxcbiAgICAgICAgbmFtZTogcmVxLmJvZHkubmFtZSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IHJlcS5ib2R5LnBob25lbnVtYmVyXG4gICAgICB9KTtcblxuICAgICAgX21vZGVsLmdlbmVyYXRlVmFsaWRhdGlvblRva2VuKCk7XG5cbiAgICAgIFNjaGVtYS5jcmVhdGUoX21vZGVsLCAoZXJyOiBFcnJvciwgZGF0YTogSVZhbGlkQ2xpZW50KSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICBjb25zdCBfZGF0YSA9IHRoaXMubWFwSXRlbShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKF9kYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoXG4gICAgICAgICFyZXEuYm9keS5jb250YWN0bmFtZSB8fFxuICAgICAgICAhcmVxLmJvZHkuZGVzY3JpcHRpb24gfHxcbiAgICAgICAgIXJlcS5ib2R5LmVtYWlsIHx8XG4gICAgICAgICFyZXEuYm9keS5mZG5xIHx8XG4gICAgICAgICFyZXEuYm9keS5pcGFkZHJlc3MgfHxcbiAgICAgICAgIXJlcS5ib2R5Lm5hbWUgfHxcbiAgICAgICAgIXJlcS5ib2R5LnBob25lbnVtYmVyXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogXCJyZXF1aXJlZCBkYXRhIGlzIG1pc3NpbmdcIiB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgX21vZGVsID0gbmV3IFZhbGlkQ2xpZW50KCk7XG4gICAgICBfbW9kZWwuY29udGFjdE5hbWUgPSByZXEuYm9keS5jb250YWN0bmFtZTtcbiAgICAgIF9tb2RlbC5kZXNjcmlwdGlvbiA9IHJlcS5ib2R5LmRlc2NyaXB0aW9uO1xuICAgICAgX21vZGVsLmVtYWlsID0gcmVxLmJvZHkuZW1haWw7XG4gICAgICBfbW9kZWwuaXBBZGRyZXNzID0gcmVxLmJvZHkuaXBhZGRyZXNzO1xuICAgICAgX21vZGVsLm5hbWUgPSByZXEuYm9keS5uYW1lO1xuICAgICAgX21vZGVsLnBob25lTnVtYmVyID0gcmVxLmJvZHkucGhvbmVudW1iZXI7XG5cbiAgICAgIFNjaGVtYS5maW5kQnlJZEFuZFVwZGF0ZShyZXEucGFyYW1zLmlkLCBfbW9kZWwsIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVhY3RpdmF0ZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFyZXEucGFyYW1zIHx8ICFyZXEucGFyYW1zLmlkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgpO1xuICAgICAgfVxuXG4gICAgICBTY2hlbWEuZmluZEJ5SWRBbmRVcGRhdGUoXG4gICAgICAgIHJlcS5wYXJhbXMuaWQsXG4gICAgICAgIHsgYWN0aXZlOiBmYWxzZSwgdG9rZW46IFwiXCIgfSxcbiAgICAgICAgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDQpLnNlbmQoKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVmFsaWRDbGllbnRDb250cm9sbGVyKCk7XG4iLCJpbXBvcnQgeyBJQXBpVXNlciB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcbmltcG9ydCBkYXRhQWNjZXNzIGZyb20gXCIuL2RhdGFBY2Nlc3NcIjtcbmltcG9ydCAqIGFzIGNvbmZpZ0luZm8gZnJvbSBcIi4uL2NvbmZpZy9kYi5jb25maWcuanNvblwiO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgKiBhcyB2YWxpZGF0b3IgZnJvbSBcIm1vbmdvb3NlLXVuaXF1ZS12YWxpZGF0b3JcIjtcbmltcG9ydCAqIGFzIGNyeXB0byBmcm9tIFwiY3J5cHRvXCI7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5leHBvcnQgY2xhc3MgQXBpVXNlclNjaGVtYSB7XG4gIHNhbHQ/OiBzdHJpbmc7XG4gIHBhc3N3b3JkX2hhc2g/OiBzdHJpbmc7XG4gIGlkPzogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQ7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgZmlyc3ROYW1lPzogc3RyaW5nO1xuICB1c2VyVHlwZUlkPzogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQ7XG4gIGxhc3ROYW1lPzogc3RyaW5nO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBlbWFpbFZhbGlkYXRlZD86IGJvb2xlYW47XG5cbiAgcHVibGljIGdldCBzY2hlbWEoKTogbW9uZ29vc2UuU2NoZW1hIHtcbiAgICBjb25zdCBfc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAgICAgIHtcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgaW5kZXg6IHRydWUsXG4gICAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcImlzIHJlcXVpcmVkXCJdXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJuYW1lOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGxvd2VyY2FzZTogdHJ1ZSxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgICAgbWF0Y2g6IFsvW2EtekEtWjAtOS1fXXs1LDIwfVxcdysvLCBcImlzIGludmFsaWRcIl0sXG4gICAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICAgIGluZGV4OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGxvd2VyY2FzZTogdHJ1ZSxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgICAgbWF0Y2g6IFsvXFxTK0BcXFMrXFwuXFxTKy8sIFwiaXMgaW52YWxpZFwiXSxcbiAgICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgICAgaW5kZXg6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZmlyc3ROYW1lOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgICBpbmRleDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBsYXN0TmFtZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgICAgaW5kZXg6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc2FsdDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZF9oYXNoOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGluZGV4OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJUeXBlSWQ6IHtcbiAgICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgaW5kZXg6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRva2VuVmFsaWRhdGVkOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0aW9uVG9rZW46IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgaW5kZXg6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4gICAgKTtcblxuICAgIF9zY2hlbWEucGx1Z2luKHZhbGlkYXRvciwgeyBtZXNzYWdlOiBcImlzIGFscmVhZHkgdGFrZW5cIiB9KTtcblxuICAgIF9zY2hlbWEubWV0aG9kcy5tYXRjaFBhc3N3b3JkQ3JpdGVyaWEgPSBmdW5jdGlvbihcbiAgICAgIHBhc3N3b3JkOiBzdHJpbmdcbiAgICApOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCB7XG4gICAgICByZXR1cm4gcGFzc3dvcmQubWF0Y2goY29uZmlnSW5mby5wYXNzd29yZE1hdGNoQ3JpdGVyaWEpO1xuICAgIH07XG5cbiAgICBfc2NoZW1hLm1ldGhvZHMuZXhwaXJlc0luID0gKGRheXM6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgICBjb25zdCBfZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgKyBkYXlzKTtcbiAgICB9O1xuXG4gICAgX3NjaGVtYS5tZXRob2RzLnNldFBhc3N3b3JkID0gZnVuY3Rpb24ocGFzc3dvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgaWYgKF9zY2hlbWEubWV0aG9kcy5tYXRjaFBhc3N3b3JkQ3JpdGVyaWEocGFzc3dvcmQpKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNhbHQgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaGFzaCA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGE1MTInLCB0aGlzLnNhbHQpO1xuICAgICAgICBoYXNoLnVwZGF0ZShwYXNzd29yZCk7XG4gICAgICAgIHZhciBoYXNoVmFsdWUgPSBoYXNoLmRpZ2VzdCgnaGV4Jyk7XG5cbiAgICAgICAgaWYoIWhhc2hWYWx1ZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMucGFzc3dvcmRfaGFzaCA9IGhhc2hWYWx1ZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJwYXNzd29yZFwiLCBcImRvZXMgbm90IG1hdGNoIGNyaXRlcmlhXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9zY2hlbWEubWV0aG9kcy5nZW5lcmF0ZVZhbGlkYXRpb25Ub2tlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgX2V4cGlyZXMgPSBfc2NoZW1hLm1ldGhvZHMuZXhwaXJlc0luKDEpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBfdG9rZW4gPSBqd3Quc2lnbihcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICAgIGV4cDogX2V4cGlyZXNcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmZpZ0luZm8uc2VjcmV0XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy50b2tlblZhbGlkYXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25Ub2tlbiA9IF90b2tlbjtcblxuICAgICAgICByZXR1cm4gX3Rva2VuO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfc2NoZW1hLm1ldGhvZHMudmFsaWRQYXNzd29yZCA9IGZ1bmN0aW9uKHBhc3N3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIGlmICghcGFzc3dvcmQpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSG1hYygnc2hhNTEyJywgdGhpcy5zYWx0KTtcbiAgICAgIGhhc2gudXBkYXRlKHBhc3N3b3JkKTtcbiAgICAgIHZhciBoYXNoVmFsdWUgPSBoYXNoLmRpZ2VzdCgnaGV4Jyk7XG4gICAgICByZXR1cm4gdGhpcy5wYXNzd29yZF9oYXNoID09PSBoYXNoVmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiBfc2NoZW1hO1xuICB9XG59XG5cbmNvbnN0IG1vZGVsID0gZGF0YUFjY2Vzcy5kYkNvbm5lY3Rpb24ubW9kZWw8SUFwaVVzZXI+KFxuICBcImFwaVVzZXJzXCIsXG4gIG5ldyBBcGlVc2VyU2NoZW1hKCkuc2NoZW1hXG4pO1xuZXhwb3J0IGRlZmF1bHQgbW9kZWw7XG4iLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCAqIGFzIGRiQ29uZmlnIGZyb20gXCIuLi9jb25maWcvZGIuY29uZmlnLmpzb25cIjtcblxuZXhwb3J0IGNsYXNzIERhdGFBY2Nlc3Mge1xuICBwdWJsaWMgc3RhdGljIGRiQ29ubmVjdGlvbjogbW9uZ29vc2UuQ29ubmVjdGlvbjtcbiAgcHJpdmF0ZSBzdGF0aWMgZGJJbnN0YW5jZTogUHJvbWlzZTx0eXBlb2YgbW9uZ29vc2U+O1xuXG4gIHN0YXRpYyBjb25uZWN0KCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgICAgYXV0b0luZGV4OiBmYWxzZSwgLy8gRG9uJ3QgYnVpbGQgaW5kZXhlc1xuICAgICAgYXV0b1JlY29ubmVjdDogdHJ1ZSxcbiAgICAgIHJlY29ubmVjdFRyaWVzOiBOdW1iZXIuTUFYX1ZBTFVFLCAvLyBOZXZlciBzdG9wIHRyeWluZyB0byByZWNvbm5lY3RcbiAgICAgIHJlY29ubmVjdEludGVydmFsOiA1MDAsIC8vIFJlY29ubmVjdCBldmVyeSA1MDBtc1xuICAgICAgcG9vbFNpemU6IDEwLCAvLyBNYWludGFpbiB1cCB0byAxMCBzb2NrZXQgY29ubmVjdGlvbnNcbiAgICAgIC8vIElmIG5vdCBjb25uZWN0ZWQsIHJldHVybiBlcnJvcnMgaW1tZWRpYXRlbHkgcmF0aGVyIHRoYW4gd2FpdGluZyBmb3IgcmVjb25uZWN0XG4gICAgICBidWZmZXJNYXhFbnRyaWVzOiAwLFxuICAgICAgY29ubmVjdFRpbWVvdXRNUzogMTAwMDAsIC8vIEdpdmUgdXAgaW5pdGlhbCBjb25uZWN0aW9uIGFmdGVyIDEwIHNlY29uZHNcbiAgICAgIHNvY2tldFRpbWVvdXRNUzogNDUwMDAsIC8vIENsb3NlIHNvY2tldHMgYWZ0ZXIgNDUgc2Vjb25kcyBvZiBpbmFjdGl2aXR5XG4gICAgICBmYW1pbHk6IDQsIC8vIFVzZSBJUHY0LCBza2lwIHRyeWluZyBJUHY2XG4gICAgICB1c2VyOiBkYkNvbmZpZy5tb25nb1VzZXIsXG4gICAgICBwYXNzOiBkYkNvbmZpZy5tb25nb1Bhc3MsXG4gICAgICBkYk5hbWU6IGRiQ29uZmlnLm1vbmdvRGJcbiAgICB9O1xuXG4gICAgY29uc3QgY29ubmVjdGlvbiA9ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGVzdGFibGlzaCA9IChpbnN0YW5jZTogUHJvbWlzZTx0eXBlb2YgbW9uZ29vc2U+KSA9PiB7XG4gICAgICAgICAgY29uc3QgX2Nvbm4gPSBtb25nb29zZS5jb25uZWN0KGRiQ29uZmlnLm1vbmdvRW5kcG9pbnQsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgaWYgKF9jb25uKSB7XG4gICAgICAgICAgICByZWplY3QoXCJEQiBjb25uZWN0aW9uIGZhaWx1cmVcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gX2Nvbm47XG4gICAgICAgICAgICByZXNvbHZlKFwiY29ubmVjdGVkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRiQ29ubmVjdGlvbiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG4gICAgICAgIHRoaXMuZGJDb25uZWN0aW9uLm9uY2UoXCJvcGVuXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBtb25nb2RiXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRiQ29ubmVjdGlvbi5vbihcImVycm9yXCIsIGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIGBNb25nb29kZSBkZWZhdWx0IGNvbm5lY3Rpb24gaGFzIG9jY3VyZWQgICR7ZXJyfSBlcnJvcmBcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBtb25nb29zZS5jb25uZWN0aW9uLm9uY2UoXCJkaXNjb25uZWN0ZWRcIiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9uZ29vc2UgZGVmYXVsdCBjb25uZWN0aW9uIGRpc2Nvbm5lY3RlZFwiKTtcbiAgICAgICAgICBlc3RhYmxpc2godGhpcy5kYkluc3RhbmNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbmNlKFwicmVjb25uZWN0ZWRcIiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9uZ29vc2UgZGVmYXVsdCBjb25uZWN0aW9uIHJlY29ubmVjdGVkXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9jZXNzLm9uKFwiU0lHSU5UXCIsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRiQ29ubmVjdGlvbi5jbG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRiIGNvbm5lY3Rpb25cIiwgXCJNb25nb29zZSBkZWZhdWx0IGNvbm5lY3Rpb25cIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVzdGFibGlzaCh0aGlzLmRiSW5zdGFuY2UpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmRiSW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmRiSW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbm5lY3Rpb24oKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGJJbnN0YW5jZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuRGF0YUFjY2Vzcy5jb25uZWN0KCk7XG5leHBvcnQgZGVmYXVsdCBEYXRhQWNjZXNzO1xuIiwiaW1wb3J0IHsgSUR1cmF0aW9uIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IGRhdGFBY2Nlc3MgZnJvbSBcIi4vZGF0YUFjY2Vzc1wiO1xuaW1wb3J0ICogYXMgdmFsaWRhdG9yIGZyb20gXCJtb25nb29zZS11bmlxdWUtdmFsaWRhdG9yXCI7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGNsYXNzIER1cmF0aW9uU2NoZW1hIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIGRpc3BsYXk/OiBzdHJpbmc7XG4gIHByaWNlPzogbnVtYmVyO1xuICBhY3RpdmU/OiBib29sZWFuO1xuXG4gIHB1YmxpYyBnZXQgc2NoZW1hKCk6IG1vbmdvb3NlLlNjaGVtYSB7XG4gICAgY29uc3QgX3NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gICAgICB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgICBpbmRleDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkaXNwbGF5OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHJlcXVpcmU6IFt0cnVlLCBcImlzIHJlcXVpcmVkXCJdLFxuICAgICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgICBsb3dlcmNhc2U6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2U6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgcmVxdWlyZTogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcImlzIHJlcXVpcmVkXCJdLFxuICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4gICAgKTtcblxuICAgIF9zY2hlbWEucGx1Z2luKHZhbGlkYXRvciwgeyBtZXNzYWdlOiBcImlzIGFscmVhZHkgdGFrZW5cIiB9KTtcblxuICAgIHJldHVybiBfc2NoZW1hO1xuICB9XG59XG5cbmNvbnN0IG1vZGVsID0gZGF0YUFjY2Vzcy5kYkNvbm5lY3Rpb24ubW9kZWw8SUR1cmF0aW9uPihcbiAgXCJEdXJhdGlvblwiLFxuICBuZXcgRHVyYXRpb25TY2hlbWEoKS5zY2hlbWFcbik7XG5leHBvcnQgZGVmYXVsdCBtb2RlbDtcbiIsImltcG9ydCB7IElTZXJ2aWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IGRhdGFBY2Nlc3MgZnJvbSBcIi4vZGF0YUFjY2Vzc1wiO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlU2NoZW1hIHtcbiAgaWQ/OiBtb25nb29zZS5UeXBlcy5PYmplY3RJZDtcbiAgc2VydmljZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHNob3J0RGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG5cbiAgcHVibGljIGdldCBzY2hlbWEoKTogbW9uZ29vc2UuU2NoZW1hIHtcbiAgICBjb25zdCBfc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAgICAgIHtcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcImlzIHJlcXVpcmVkXCJdLFxuICAgICAgICAgIGluZGV4OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXVxuICAgICAgICB9LFxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXVxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICAgIGluZGV4OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuICAgICk7XG5cbiAgICByZXR1cm4gX3NjaGVtYTtcbiAgfVxufVxuXG5jb25zdCBtb2RlbCA9IGRhdGFBY2Nlc3MuZGJDb25uZWN0aW9uLm1vZGVsPElTZXJ2aWNlPihcbiAgXCJTZXJ2aWNlc1wiLFxuICBuZXcgU2VydmljZVNjaGVtYSgpLnNjaGVtYVxuKTtcbmV4cG9ydCBkZWZhdWx0IG1vZGVsO1xuIiwiaW1wb3J0IHsgSVVzZXJUeXBlIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IGRhdGFBY2Nlc3MgZnJvbSBcIi4vZGF0YUFjY2Vzc1wiO1xuaW1wb3J0ICogYXMgdmFsaWRhdG9yIGZyb20gXCJtb25nb29zZS11bmlxdWUtdmFsaWRhdG9yXCI7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJUeXBlU2NoZW1hIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIGRpc3BsYXk/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBhY3RpdmU/OiBib29sZWFuO1xuXG4gIHB1YmxpYyBnZXQgc2NoZW1hKCk6IG1vbmdvb3NlLlNjaGVtYSB7XG4gICAgY29uc3QgX3NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gICAgICB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXVxuICAgICAgICB9LFxuICAgICAgICBkaXNwbGF5OiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgICBsb3dlcmNhc2U6IHRydWUsXG4gICAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXVxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHJldHVpcmVkOiB0cnVlLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbiAgICApO1xuXG4gICAgX3NjaGVtYS5wbHVnaW4odmFsaWRhdG9yLCB7IG1lc3NhZ2U6IFwiaXMgYWxyZWFkeSB0YWtlblwiIH0pO1xuXG4gICAgcmV0dXJuIF9zY2hlbWE7XG4gIH1cbn1cblxuY29uc3QgbW9kZWwgPSBkYXRhQWNjZXNzLmRiQ29ubmVjdGlvbi5tb2RlbDxJVXNlclR5cGU+KFxuICBcIlVzZXJUeXBlc1wiLFxuICBuZXcgVXNlclR5cGVTY2hlbWEoKS5zY2hlbWFcbik7XG5leHBvcnQgZGVmYXVsdCBtb2RlbDtcbiIsImltcG9ydCB7IElWYWxpZENsaWVudCB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcbmltcG9ydCBkYXRhQWNjZXNzIGZyb20gXCIuL2RhdGFBY2Nlc3NcIjtcbmltcG9ydCAqIGFzIGNvbmZpZ0luZm8gZnJvbSBcIi4uL2NvbmZpZy9kYi5jb25maWcuanNvblwiO1xuaW1wb3J0ICogYXMgdmFsaWRhdG9yIGZyb20gXCJtb25nb29zZS11bmlxdWUtdmFsaWRhdG9yXCI7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyVHlwZVNjaGVtYSB7XG4gIGlkPzogc3RyaW5nO1xuICBpcEFkZHJlc3M/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBjb250YWN0TmFtZT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBob25lTnVtYmVyPzogbnVtYmVyO1xuICB0b2tlbj86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcblxuICBwdWJsaWMgZ2V0IHNjaGVtYSgpOiBtb25nb29zZS5TY2hlbWEge1xuICAgIGNvbnN0IF9zY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICAgICAge1xuICAgICAgICBpZDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBpbmRleDogdHJ1ZSxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl1cbiAgICAgICAgfSxcbiAgICAgICAgaXBBZGRyZXNzOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgICB2YWxpZGF0ZTogW1xuICAgICAgICAgICAgL14oKDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4pezN9KDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykkLyxcbiAgICAgICAgICAgIFwiaXMgaW52YWxpZFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBpbmRleDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgICBsb3dlcmNhc2U6IHRydWUsXG4gICAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXVxuICAgICAgICB9LFxuICAgICAgICBjb250YWN0TmFtZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl1cbiAgICAgICAgfSxcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgbG93ZXJjYXNlOiB0cnVlLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgICB2YWxpZGF0ZTogWy9cXFMrQFxcUytcXC5cXFMrLywgXCJpcyBpbnZhbGlkXCJdLFxuICAgICAgICAgIGluZGV4OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHBob25lTnVtYmVyOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgICB2YWxpZGF0ZTogW1xuICAgICAgICAgICAgL15cXCg/KFswLTldezN9KVxcKT9bLS4gXT8oWzAtOV17M30pWy0uIF0/KFswLTldezR9KSQvLFxuICAgICAgICAgICAgXCJpcyBpbnZhbGlkXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIGluZGV4OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRva2VuOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGluZGV4OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgcmV0dWlyZWQ6IHRydWUsXG4gICAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcImlzIHJlcXVpcmVkXCJdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuICAgICk7XG5cbiAgICBfc2NoZW1hLnBsdWdpbih2YWxpZGF0b3IsIHsgbWVzc2FnZTogXCJpcyBhbHJlYWR5IHRha2VuXCIgfSk7XG5cbiAgICBfc2NoZW1hLm1ldGhvZHMuZ2VuZXJhdGVWYWxpZGF0aW9uVG9rZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCBfZXhwID0gbmV3IERhdGUodG9kYXkpO1xuICAgICAgX2V4cC5zZXREYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCkgKyA1KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgX3Rva2VuID0gand0LnNpZ24oXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgICAgICAgYWRkcmVzczogdGhpcy5pcEFkZHJlc3MsXG4gICAgICAgICAgICBleHA6IF9leHAuZ2V0VGltZSgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb25maWdJbmZvLnNlY3JldFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudG9rZW4gPSBfdG9rZW47XG5cbiAgICAgICAgcmV0dXJuIF90b2tlbjtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF9zY2hlbWE7XG4gIH1cbn1cblxuY29uc3QgbW9kZWwgPSBkYXRhQWNjZXNzLmRiQ29ubmVjdGlvbi5tb2RlbDxJVmFsaWRDbGllbnQ+KFxuICBcIlZhbGlkQ2xpZW50c1wiLFxuICBuZXcgVXNlclR5cGVTY2hlbWEoKS5zY2hlbWFcbik7XG5leHBvcnQgZGVmYXVsdCBtb2RlbDtcbiIsImltcG9ydCBhcHAgZnJvbSAnLi9hcHAnXG5cbmNvbnN0IHBvcnQgPSAzMDAxO1xuY29uc3QgaG9zdCA9ICcxMjcuMC4wLjEnO1xuXG5hcHAucnVuKHBvcnQsIGhvc3QpO1xuIiwiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuLi9jb25maWcvZGIuY29uZmlnLmpzb25cIjtcbmltcG9ydCB7IElEZWNvZGVkLCBJQXBpVXNlciB9IGZyb20gXCIuLi9kYi9pbnRlcmZhY2VzLmpzXCI7XG5pbXBvcnQgU2NoZW1hIGZyb20gXCIuLi9kYi92YWxpZENsaWVudFNjaGVtYVwiO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRhdGVSZXF1ZXN0IHtcbiAgc3RhdGljIHZhbGlkYXRlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgdG9rZW4gPSAoXG4gICAgICAocmVxLmJvZHkgJiYgcmVxLmJvZHkuYWNjZXNzX3Rva2VuKSB8fFxuICAgICAgKHJlcS5xdWVyeSAmJiByZXEucXVlcnkuYWNjZXNzX3Rva2VuKSB8fFxuICAgICAgcmVxLmhlYWRlcnNbXCJ4X2FjY2Vzc190b2tlblwiXVxuICAgIClcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAudHJpbSgpO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9XG4gICAgICByZXEuaGVhZGVycyAmJiByZXEuaGVhZGVycy5mb3J3YXJkZWRcbiAgICAgICAgPyByZXEuaGVhZGVycy5mb3J3YXJkZWRcbiAgICAgICAgOiByZXEuY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzO1xuXG4gICAgaWYgKCF0b2tlbiB8fCAhYWRkcmVzcykge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogXCJJbnZhbGlkIHRva2VuIG9yIGFkZHJlc3NcIiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgX2RlY29kZWQgPSA8SURlY29kZWQ+and0LnZlcmlmeSh0b2tlbiwgY29uZmlnLnNlY3JldCk7XG4gICAgICAgIGlmICghX2RlY29kZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBcIkRlY29kaW5nIGVycm9yXCIgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKF9kZWNvZGVkLmV4cCA8PSBEYXRlLm5vdygpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBcIlRva2VuIEV4cGlyZWRcIiB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYWRkcmVzcyAhPT0gX2RlY29kZWQuYWRkcmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWQgYWRkcmVzc1wiIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIFNjaGVtYS5maW5kQnlJZChfZGVjb2RlZC5pZCwgKGVycjogRXJyb3IsIGRhdGE6IElBcGlVc2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmFjdGl2ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDE3KS5zZW5kKHsgbWVzc2FnZTogXCJJbmFjdGl2ZSB0b2tlblwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWYWxpZGF0ZVJlcXVlc3QoKTtcbiIsImltcG9ydCBVc2VyVHlwZSBmcm9tIFwiLi91c2VyVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlVc2VyIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgZmlyc3ROYW1lPzogc3RyaW5nO1xuICBsYXN0TmFtZT86IHN0cmluZztcbiAgdXNlclR5cGVJZD86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgdG9rZW5WYWxpZGF0ZWQ/OiBib29sZWFuO1xuICB2YWxpZGF0aW9uVG9rZW4/OiBzdHJpbmc7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnRJbmZvIHtcbiAgICBob3N0bmFtZT86IHN0cmluZztcbiAgICBpcD86IHN0cmluZztcbiAgICBmb3J3YXJlZD86IHN0cmluZztcbiAgfVxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEdXJhdGlvbiB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgZGlzcGxheT86IHN0cmluZztcbiAgICBwcmljZT86IG51bWJlcjtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICB9XG4gICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaVR5cGUge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHNob3J0RGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgfVxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyVHlwZSB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgZGlzcGxheT86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICB9XG4gICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkQ2xpZW50IHtcbiAgICBpZD86IHN0cmluZztcbiAgICBpcEFkZHJlc3M/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBjb250YWN0TmFtZT86IHN0cmluZztcbiAgICBlbWFpbD86IHN0cmluZztcbiAgICBwaG9uZU51bWJlcj86IG51bWJlcjtcbiAgICB0b2tlbj86IHN0cmluZztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICB9XG4gICIsImltcG9ydCB7IEJhc2VSb3V0ZSB9IGZyb20gXCIuL2Jhc2VSb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVycy9hcGlVc2VyQ29udHJvbGxlclwiO1xuXG5leHBvcnQgY2xhc3MgQXBpVXNlclJvdXRlIGV4dGVuZHMgQmFzZVJvdXRlIHtcbiAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgbWFwKHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHJvdXRlci5nZXQoJy92MS9hcGl1c2VyJywgY29udHJvbGxlci5nZXRBbGwpO1xuICAgICAgICByb3V0ZXIuZ2V0KCcvdjEvYXBpdXNlci86aWQnLCBjb250cm9sbGVyLmdldE9uZSk7XG4gICAgICAgIHJvdXRlci5wb3N0KCcvdjEvYXBpdXNlcicsIGNvbnRyb2xsZXIuY3JlYXRlKTtcbiAgICAgICAgcm91dGVyLnB1dCgnL3YxL2FwaXVzZXIvOmlkJywgY29udHJvbGxlci51cGRhdGUpO1xuICAgICAgICByb3V0ZXIuZGVsZXRlKCcvdjEvYXBpdXNlci86aWQnLCBjb250cm9sbGVyLmRlYWN0aXZhdGUpO1xuICAgIH1cbn0iLCJpbXBvcnQge05leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2V9IGZyb20gJ2V4cHJlc3MnO1xuXG5leHBvcnQgY2xhc3MgQmFzZVJvdXRlIHtcbiAgICBwcm90ZWN0ZWQgdGl0bGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gXCJXZWxjb21lIHRvIFR5bGVyLUNNVCBBcGlcIjtcbiAgICB9XG5cbiAgIFxuXG4gICAgcHVibGljIHJlc3BvbnNlRGF0YShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIGRhdGE/OiBPYmplY3QpIHtcbiAgICAgICAgcmVzLmxvY2Fscy5CQVNFX1VSTCA9IFwiL1wiO1xuICAgICAgICByZXMubG9jYWxzLnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApO1xuICAgICAgICByZXMuc2VuZChkYXRhKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVJvdXRlIH0gZnJvbSBcIi4vYmFzZVJvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2NsaWVudENvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGNsYXNzIENsaWVudEluZm9Sb3V0ZSBleHRlbmRzIEJhc2VSb3V0ZSB7XG4gICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG1hcChyb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICByb3V0ZXIuZ2V0KCcvY2xpZW50aW5mbycsIGNvbnRyb2xsZXIuZ2V0QWxsKTtcbiAgICAgICA7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VSb3V0ZSB9IGZyb20gXCIuL2Jhc2VSb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVycy9kdXJhdGlvbkNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGNsYXNzIER1cmF0aW9uUm91dGUgZXh0ZW5kcyBCYXNlUm91dGUge1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYXAocm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgcm91dGVyLmdldCgnL3YxL2FkbWluL2R1cmF0aW9uJywgY29udHJvbGxlci5nZXRBbGwpO1xuICAgICAgICByb3V0ZXIuZ2V0KCcvdjEvYWRtaW4vZHVyYXRpb24vOmlkJywgY29udHJvbGxlci5nZXRPbmUpO1xuICAgICAgICByb3V0ZXIucG9zdCgnL3YxL2FkbWluL2R1cmF0aW9uJywgY29udHJvbGxlci5jcmVhdGUpO1xuICAgICAgICByb3V0ZXIucHV0KCcvdjEvYWRtaW4vZHVyYXRpb24vOmlkJywgY29udHJvbGxlci51cGRhdGUpO1xuICAgICAgICByb3V0ZXIuZGVsZXRlKCcvdjEvYWRtaW4vZHVyYXRpb24vOmlkJywgY29udHJvbGxlci5kZWFjdGl2YXRlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVJvdXRlIH0gZnJvbSBcIi4vYmFzZVJvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSBcImV4cHJlc3NcIjtcblxuZXhwb3J0IGNsYXNzIEluZGV4Um91dGUgZXh0ZW5kcyBCYXNlUm91dGUge1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYXAocm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgcm91dGVyLmdldCgnLycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgbmV3IEluZGV4Um91dGUoKS5pbmRleChyZXEsIHJlcywgbmV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmRleChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgICAgICB0aGlzLnRpdGxlID0gJ0luZGV4IHwgVHlsZXItQ01UJztcblxuICAgICAgICBsZXQgZGF0YTogT2JqZWN0ID0ge1xuICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiV2VsY29tZSFcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEocmVxLCByZXMsIGRhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlUm91dGUgfSBmcm9tIFwiLi9iYXNlUm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJ9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlcnMvbG9naW5Db250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dpblJvdXRlIGV4dGVuZHMgQmFzZVJvdXRlIHtcbiAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgbWFwKHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHJvdXRlci5wb3N0KCcvdjEvbG9naW4vOnRva2VuJywgY29udHJvbGxlci52YWxpZGF0ZUVtYWlsVG9rZW4pO1xuICAgICAgICByb3V0ZXIucG9zdCgnL3YxL2xvZ2luJywgY29udHJvbGxlci5sb2dpbik7XG4gICAgICAgIHJvdXRlci5wb3N0KCcvdjEvcmVzZXRwYXNzJywgY29udHJvbGxlci5yZXNldFBhc3N3b3JkKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVJvdXRlIH0gZnJvbSBcIi4vYmFzZVJvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3NlcnZpY2VDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlUm91dGUgZXh0ZW5kcyBCYXNlUm91dGUge1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYXAocm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgcm91dGVyLmdldCgnL3YxL2FkbWluL3NlcnZpY2UnLCBjb250cm9sbGVyLmdldEFsbCk7XG4gICAgICAgIHJvdXRlci5nZXQoJy92MS9hZG1pbi9zZXJ2aWNlLzppZCcsIGNvbnRyb2xsZXIuZ2V0T25lKTtcbiAgICAgICAgcm91dGVyLnBvc3QoJy92MS9hZG1pbi9zZXJ2aWNlJywgY29udHJvbGxlci5jcmVhdGUpO1xuICAgICAgICByb3V0ZXIucHV0KCcvdjEvYWRtaW4vc2VydmljZS86aWQnLCBjb250cm9sbGVyLnVwZGF0ZSk7XG4gICAgICAgIHJvdXRlci5kZWxldGUoJy92MS9hZG1pbi9zZXJ2aWNlLzppZCcsIGNvbnRyb2xsZXIuZGVhY3RpdmF0ZSk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VSb3V0ZSB9IGZyb20gXCIuL2Jhc2VSb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVycy91c2VyVHlwZUNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJUeXBlUm91dGUgZXh0ZW5kcyBCYXNlUm91dGUge1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYXAocm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgcm91dGVyLmdldCgnL3YxL2FkbWluL3VzZXJ0eXBlcycsIGNvbnRyb2xsZXIuZ2V0QWxsKTtcbiAgICAgICAgcm91dGVyLmdldCgnL3YxL2FkbWluL3VzZXJ0eXBlcy86aWQnLCBjb250cm9sbGVyLmdldE9uZSk7XG4gICAgICAgIHJvdXRlci5wb3N0KCcvdjEvYWRtaW4vdXNlcnR5cGVzJywgY29udHJvbGxlci5jcmVhdGUpO1xuICAgICAgICByb3V0ZXIucHV0KCcvdjEvYWRtaW4vdXNlcnR5cGVzLzppZCcsIGNvbnRyb2xsZXIudXBkYXRlKTtcbiAgICAgICAgcm91dGVyLmRlbGV0ZSgnL3YxL2FkbWluL3VzZXJ0eXBlcy86aWQnLCBjb250cm9sbGVyLmRlYWN0aXZhdGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlUm91dGUgfSBmcm9tIFwiLi9iYXNlUm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJ9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlcnMvdmFsaWRDbGllbnRDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZENsaWVudFJvdXRlIGV4dGVuZHMgQmFzZVJvdXRlIHtcbiAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgbWFwKHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHJvdXRlci5nZXQoJy92MS9hZG1pbi9jbGllbnQnLCBjb250cm9sbGVyLmdldEFsbCk7XG4gICAgICAgIHJvdXRlci5nZXQoJy92MS9hZG1pbi9jbGllbnQvOmlkJywgY29udHJvbGxlci5nZXRPbmUpO1xuICAgICAgICByb3V0ZXIucG9zdCgnL3YxL2FkbWluL2NsaWVudCcsIGNvbnRyb2xsZXIuY3JlYXRlKTtcbiAgICAgICAgcm91dGVyLnB1dCgnL3YxL2FkbWluL2NsaWVudC86aWQnLCBjb250cm9sbGVyLnVwZGF0ZSk7XG4gICAgICAgIHJvdXRlci5kZWxldGUoJy92MS9hZG1pbi9jbGllbnQvOmlkJywgY29udHJvbGxlci5kZWFjdGl2YXRlKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZS11bmlxdWUtdmFsaWRhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=