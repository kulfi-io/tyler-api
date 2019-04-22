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
/* harmony import */ var _routes_clientInfoRouter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/clientInfoRouter */ "./src/routes/clientInfoRouter.ts");














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
        _routes_clientInfoRouter__WEBPACK_IMPORTED_MODULE_13__["ClientInfoRoute"].map(router);
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
/* harmony import */ var _db_userTypeSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/userTypeSchema */ "./src/db/userTypeSchema.ts");
/* harmony import */ var _models_apiUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/apiUser */ "./src/models/apiUser.ts");
/* harmony import */ var _models_userType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/userType */ "./src/models/userType.ts");
/* harmony import */ var _baseController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./baseController */ "./src/controllers/baseController.ts");
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
                _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_1__["default"].aggregate([
                    { $match: { 'active': true } },
                    { $lookup: {
                            from: 'usertypes',
                            localField: 'userTypeId',
                            foreignField: '_id',
                            as: 'userType'
                        } },
                    { $sort: { 'username': 1 } },
                    { $limit: 200 }
                ])
                    .exec(function (err, data) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    var _data = _this.mapItems(data);
                    return res.status(200).send(_data);
                });
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
                _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_1__["default"].aggregate([
                    { $match: { 'id': req.params.id, 'active': true } },
                    { $lookup: {
                            from: 'usertypes',
                            localField: 'userTypeId',
                            foreignField: '_id',
                            as: 'userType'
                        } },
                    { $limit: 1 }
                ])
                    .exec(function (err, data) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    var _data = _this.mapItems(data);
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
                var _targetType_1 = '';
                _this.email = req.body.email;
                _this.firstName = req.body.firstName;
                _this.lastName = req.body.lastName;
                _this.username = req.body.username;
                _this.password = req.body.password;
                _this.type = req.body.type;
                if (_this.email == '') {
                    return res.status(400).send({ message: 'failed to decrypt' });
                }
                _db_userTypeSchema__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({ active: true, 'display': _this.type }, function (err, data) {
                    if (err)
                        return res.status(400).send({ message: err.message });
                    if (data)
                        _targetType_1 = data._id;
                    return;
                }).then(function () {
                    if (_targetType_1) {
                        var _model = new _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_1__["default"]({
                            id: uuid__WEBPACK_IMPORTED_MODULE_0__(),
                            email: _this.email,
                            firstName: _this.firstName,
                            lastName: _this.lastName,
                            username: _this.username,
                            userTypeId: _targetType_1,
                        });
                        if (!_model.setPassword(_this.password)) {
                            return res
                                .status(400)
                                .send({ message: "password does not match criteria" });
                        }
                        if (!_model.generateValidationToken()) {
                            return res
                                .status(400)
                                .send({ message: "error occured while generating token" });
                        }
                        _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_1__["default"].create(_model, function (err, data) {
                            if (err)
                                return res.status(400).send({ message: err.message });
                            return res.status(201).send({ message: 'created' });
                        });
                    }
                    return;
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
                _db_apiUserSchema__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndUpdate({ 'id': req.params.id }, _model, function (err) {
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
                    return res.status(204).send({ message: 'deactivated' });
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
        var _data = new _models_apiUser__WEBPACK_IMPORTED_MODULE_3__["default"]();
        var _model = JSON.parse(JSON.stringify(model));
        var _type = new _models_userType__WEBPACK_IMPORTED_MODULE_4__["default"]();
        _type.id = this.encryptData(_model.userType[0].id);
        _type.display = this.encryptData(_model.userType[0].display);
        _type.description = this.encryptData(_model.userType[0].description);
        _type.active = _model.userType[0].active;
        _data.active = _model.active;
        _data.email = this.encryptData(_model.email);
        _data.firstName = this.encryptData(_model.firstName);
        _data.id = this.encryptData(_model.id);
        _data.lastName = this.encryptData(_model.lastName);
        _data.tokenValidated = _model.tokenValidated;
        _data.username = this.encryptData(_model.username);
        _data.userType = _type;
        return _data;
    };
    return ApiUserController;
}(_baseController__WEBPACK_IMPORTED_MODULE_5__["BaseController"]));

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
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);



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
    BaseController.prototype.mongoIdObject = function (data) {
        var _id = mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId(data);
        return _id;
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
                console.log('data', data);
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
                    index: true,
                    ref: 'UserTypes',
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

/***/ "./src/routes/clientInfoRouter.ts":
/*!****************************************!*\
  !*** ./src/routes/clientInfoRouter.ts ***!
  \****************************************/
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
        router.get('/v1/admin/usertype', _controllers_userTypeController__WEBPACK_IMPORTED_MODULE_1__["default"].getAll);
        router.get('/v1/admin/usertype/:id', _controllers_userTypeController__WEBPACK_IMPORTED_MODULE_1__["default"].getOne);
        router.post('/v1/admin/usertype', _controllers_userTypeController__WEBPACK_IMPORTED_MODULE_1__["default"].create);
        router.put('/v1/admin/usertype/:id', _controllers_userTypeController__WEBPACK_IMPORTED_MODULE_1__["default"].update);
        router.delete('/v1/admin/usertype/:id', _controllers_userTypeController__WEBPACK_IMPORTED_MODULE_1__["default"].deactivate);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9hcGlVc2VyQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvYmFzZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2NsaWVudENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2R1cmF0aW9uQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvbG9naW5Db250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9zZXJ2aWNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdXNlclR5cGVDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy92YWxpZENsaWVudENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL2FwaVVzZXJTY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL2RhdGFBY2Nlc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL2R1cmF0aW9uU2NoZW1hLnRzIiwid2VicGFjazovLy8uL3NyYy9kYi9zZXJ2aWNlU2NoZW1hLnRzIiwid2VicGFjazovLy8uL3NyYy9kYi91c2VyVHlwZVNjaGVtYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGIvdmFsaWRDbGllbnRTY2hlbWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlL3ZhbGlkYXRlUmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2FwaVVzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9jbGllbnRJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZHVyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvdXNlclR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy92YWxpZENsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2FwaVVzZXJSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9iYXNlUm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvY2xpZW50SW5mb1JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2R1cmF0aW9uUm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaW5kZXhSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9sb2dpblJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3NlcnZpY2VSb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3VzZXJUeXBlUm91dGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvdmFsaWRDbGllbnRSb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2UtdW5pcXVlLXZhbGlkYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtB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LENBQUMsTUFBTSxDQUFDLHdCQUF3QixFQUFFLHVFQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxDQWJrQyxxREFBUyxHQWEzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCd0M7QUFFcUI7QUFFOUQ7SUFBc0Msb0NBQVM7SUFFM0M7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFYSxvQkFBRyxHQUFqQixVQUFrQixNQUFjO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsMEVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLDBFQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSwwRUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsMEVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLDBFQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxDQWJxQyxxREFBUyxHQWE5Qzs7Ozs7Ozs7Ozs7OztBQ2pCRCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJ0eWxlci5hcGkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCAqIGFzIGxvZ2dlciBmcm9tICdtb3JnYW4nO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBoZWxtZXQgZnJvbSAnaGVsbWV0JztcbmltcG9ydCB7IEluZGV4Um91dGUgfSBmcm9tICcuL3JvdXRlcy9pbmRleFJvdXRlcic7XG5pbXBvcnQgeyBWYWxpZGF0ZVJlcXVlc3QgfSBmcm9tICcuL21pZGRsZXdhcmUvdmFsaWRhdGVSZXF1ZXN0JztcbmltcG9ydCB7IExvZ2luUm91dGUgfSBmcm9tICcuL3JvdXRlcy9sb2dpblJvdXRlcic7XG5pbXBvcnQgeyBVc2VyVHlwZVJvdXRlIH0gZnJvbSAnLi9yb3V0ZXMvdXNlclR5cGVSb3V0ZXInO1xuaW1wb3J0IHsgQXBpVXNlclJvdXRlIH0gZnJvbSAnLi9yb3V0ZXMvYXBpVXNlclJvdXRlcic7XG5pbXBvcnQgeyBWYWxpZENsaWVudFJvdXRlIH0gZnJvbSAnLi9yb3V0ZXMvdmFsaWRDbGllbnRSb3V0ZXInO1xuaW1wb3J0IHsgU2VydmljZVJvdXRlIH0gZnJvbSAnLi9yb3V0ZXMvc2VydmljZVJvdXRlJztcbmltcG9ydCB7IER1cmF0aW9uUm91dGUgfSBmcm9tICcuL3JvdXRlcy9kdXJhdGlvblJvdXRlcic7XG5pbXBvcnQgeyBDbGllbnRJbmZvUm91dGUgfSBmcm9tICcuL3JvdXRlcy9jbGllbnRJbmZvUm91dGVyJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHByaXZhdGUgc2VydmVyOiBleHByZXNzLkFwcGxpY2F0aW9uO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgcHJvY2Vzcy50aXRsZSA9IFwidHlsZXItY210LWFwaVwiO1xuICAgIHRoaXMuc2VydmVyID0gZXhwcmVzcygpO1xuICAgIHRoaXMuY29uZmlndXJlTWlkZGxld2FyZSgpO1xuICAgIHRoaXMucm91dGVzKCk7XG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZU1pZGRsZXdhcmUoKSB7XG4gICAgdGhpcy5zZXJ2ZXIudXNlKGxvZ2dlcignZGV2JykpO1xuICAgIHRoaXMuc2VydmVyLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuICAgIHRoaXMuc2VydmVyLnVzZShib2R5UGFyc2VyLmpzb24oKSk7IFxuICAgIHRoaXMuc2VydmVyLnVzZShoZWxtZXQoKSk7XG4gICAgdGhpcy5zZXJ2ZXIuZGlzYWJsZSgneC1wb3dlcmVkLWJ5Jyk7XG4gICAgdGhpcy5zZXJ2ZXIuYWxsKCcvKicsIGNvcnMoKSk7XG4gICAgdGhpcy5zZXJ2ZXIuYWxsKCcvdjEvKicsIFZhbGlkYXRlUmVxdWVzdC52YWxpZGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIHJvdXRlcygpIHtcbiAgICBcbiAgICBjb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4gICAgQ2xpZW50SW5mb1JvdXRlLm1hcChyb3V0ZXIpO1xuICAgIEluZGV4Um91dGUubWFwKHJvdXRlcik7XG4gICAgTG9naW5Sb3V0ZS5tYXAocm91dGVyKTtcbiAgICBBcGlVc2VyUm91dGUubWFwKHJvdXRlcik7XG4gICAgVXNlclR5cGVSb3V0ZS5tYXAocm91dGVyKTtcbiAgICBWYWxpZENsaWVudFJvdXRlLm1hcChyb3V0ZXIpO1xuICAgIFNlcnZpY2VSb3V0ZS5tYXAocm91dGVyKTtcbiAgICBEdXJhdGlvblJvdXRlLm1hcChyb3V0ZXIpO1xuICAgIFxuICAgIHRoaXMuc2VydmVyLnVzZShyb3V0ZXIpO1xuICAgIFxuICB9XG5cbiAgcHVibGljIHJ1bihwb3J0OiBudW1iZXIsIGhvc3Q6IHN0cmluZykge1xuICAgIHRoaXMuc2VydmVyLmxpc3Rlbihwb3J0LCBob3N0LCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uIHBvcnQ6ICR7cG9ydH1gKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcHAoKTsiLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgU2NoZW1hIGZyb20gXCIuLi9kYi9hcGlVc2VyU2NoZW1hXCI7XG5pbXBvcnQgVXNlclR5cGVTY2hlbWEgZnJvbSBcIi4uL2RiL3VzZXJUeXBlU2NoZW1hXCI7XG5pbXBvcnQgeyBJQXBpVXNlciB9IGZyb20gXCIuLi9kYi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vbW9kZWxzL2FwaVVzZXJcIjtcbmltcG9ydCBVc2VyVHlwZSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJUeXBlXCI7XG5pbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuL2Jhc2VDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBBcGlVc2VyQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSB1c2VybmFtZTpzdHJpbmc7XG4gIHByaXZhdGUgZW1haWw6c3RyaW5nO1xuICBwcml2YXRlIGZpcnN0TmFtZTpzdHJpbmc7XG4gIHByaXZhdGUgbGFzdE5hbWU6c3RyaW5nO1xuICBwcml2YXRlIHBhc3N3b3JkOnN0cmluZztcbiAgcHJpdmF0ZSB0eXBlOnN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy51c2VybmFtZT0nJztcbiAgICB0aGlzLmVtYWlsPScnO1xuICAgIHRoaXMuZmlyc3ROYW1lPScnO1xuICAgIHRoaXMubGFzdE5hbWU9Jyc7XG4gICAgdGhpcy5wYXNzd29yZD0nJztcbiAgICB0aGlzLnR5cGU9Jyc7XG4gIH1cblxuXG4gIHByaXZhdGUgbWFwSXRlbXMobW9kZWw6IHt9W10pOiBVc2VyW10ge1xuICAgIGxldCBfZGF0YSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbC5sZW5ndGg7IGkrKykge1xuICAgICAgX2RhdGEucHVzaCh0aGlzLm1hcEl0ZW0obW9kZWxbaV0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2RhdGE7XG4gIH1cblxuICBwcml2YXRlIG1hcEl0ZW0obW9kZWw6IHt9KTogVXNlciB7XG4gICAgY29uc3QgX2RhdGEgPSBuZXcgVXNlcigpO1xuICAgIGNvbnN0IF9tb2RlbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobW9kZWwpKTtcbiAgICBjb25zdCBfdHlwZSA9IG5ldyBVc2VyVHlwZSgpO1xuXG4gICAgX3R5cGUuaWQgPSB0aGlzLmVuY3J5cHREYXRhKF9tb2RlbC51c2VyVHlwZVswXS5pZCk7XG4gICAgX3R5cGUuZGlzcGxheSA9IHRoaXMuZW5jcnlwdERhdGEoX21vZGVsLnVzZXJUeXBlWzBdLmRpc3BsYXkpO1xuICAgIF90eXBlLmRlc2NyaXB0aW9uID0gdGhpcy5lbmNyeXB0RGF0YShfbW9kZWwudXNlclR5cGVbMF0uZGVzY3JpcHRpb24pO1xuICAgIF90eXBlLmFjdGl2ZSA9IF9tb2RlbC51c2VyVHlwZVswXS5hY3RpdmU7XG5cbiAgICBfZGF0YS5hY3RpdmUgPSBfbW9kZWwuYWN0aXZlO1xuICAgIF9kYXRhLmVtYWlsID0gdGhpcy5lbmNyeXB0RGF0YShfbW9kZWwuZW1haWwpO1xuICAgIF9kYXRhLmZpcnN0TmFtZSA9IHRoaXMuZW5jcnlwdERhdGEoX21vZGVsLmZpcnN0TmFtZSk7XG4gICAgX2RhdGEuaWQgPSB0aGlzLmVuY3J5cHREYXRhKF9tb2RlbC5pZCk7XG4gICAgX2RhdGEubGFzdE5hbWUgPSB0aGlzLmVuY3J5cHREYXRhKF9tb2RlbC5sYXN0TmFtZSk7XG4gICAgX2RhdGEudG9rZW5WYWxpZGF0ZWQgPSBfbW9kZWwudG9rZW5WYWxpZGF0ZWQ7XG4gICAgX2RhdGEudXNlcm5hbWUgPSB0aGlzLmVuY3J5cHREYXRhKF9tb2RlbC51c2VybmFtZSk7XG4gICAgX2RhdGEudXNlclR5cGUgPSBfdHlwZTtcblxuICAgIHJldHVybiBfZGF0YTtcbiAgfVxuXG4gIGdldEFsbCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuXG4gICAgICBTY2hlbWEuYWdncmVnYXRlKFtcbiAgICAgICAgeyAkbWF0Y2g6IHsnYWN0aXZlJzogdHJ1ZSB9fSxcbiAgICAgICAgeyAkbG9va3VwOiB7XG4gICAgICAgICAgZnJvbTogJ3VzZXJ0eXBlcycsXG4gICAgICAgICAgbG9jYWxGaWVsZDogJ3VzZXJUeXBlSWQnLFxuICAgICAgICAgIGZvcmVpZ25GaWVsZDogJ19pZCcsXG4gICAgICAgICAgYXMgOiAndXNlclR5cGUnXG4gICAgICAgIH19LFxuICAgICAgICB7ICRzb3J0OiB7J3VzZXJuYW1lJzogMX19LFxuICAgICAgICB7JGxpbWl0OiAyMDB9XG5cbiAgICAgIF0pXG4gICAgICAuZXhlYygoZXJyOiBFcnJvciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW1zKGRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoX2RhdGEpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHJldHVybjtcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGdldE9uZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuXG4gICAgICBpZiAoIXJlcS5wYXJhbXMgfHwgIXJlcS5wYXJhbXMuaWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIFNjaGVtYS5hZ2dyZWdhdGUoW1xuICAgICAgICB7ICRtYXRjaDogeydpZCc6IHJlcS5wYXJhbXMuaWQsICdhY3RpdmUnOiB0cnVlIH19LFxuICAgICAgICB7ICRsb29rdXA6IHtcbiAgICAgICAgICBmcm9tOiAndXNlcnR5cGVzJyxcbiAgICAgICAgICBsb2NhbEZpZWxkOiAndXNlclR5cGVJZCcsXG4gICAgICAgICAgZm9yZWlnbkZpZWxkOiAnX2lkJyxcbiAgICAgICAgICBhcyA6ICd1c2VyVHlwZSdcbiAgICAgICAgfX0sXG4gICAgICAgIHskbGltaXQ6IDF9XG4gICAgICBdKVxuICAgICAgLmV4ZWMoKGVycjogRXJyb3IsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIGNvbnN0IF9kYXRhID0gdGhpcy5tYXBJdGVtcyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKF9kYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgY3JlYXRlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXJlcS5ib2R5IHx8XG4gICAgICAgICFyZXEuYm9keS5lbWFpbCB8fFxuICAgICAgICAhcmVxLmJvZHkuZmlyc3ROYW1lIHx8XG4gICAgICAgICFyZXEuYm9keS5sYXN0TmFtZSB8fFxuICAgICAgICAhcmVxLmJvZHkudXNlcm5hbWUgfHxcbiAgICAgICAgIXJlcS5ib2R5LnBhc3N3b3JkXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogXCJtaXNzaW5nIGRhdGEgaXRlbShzKVwiIH0pO1xuICAgICAgfVxuXG4gICAgICBsZXQgX3RhcmdldFR5cGU9Jyc7XG5cbiAgICAgIHRoaXMuZW1haWwgPSByZXEuYm9keS5lbWFpbDtcbiAgICAgIHRoaXMuZmlyc3ROYW1lID0gcmVxLmJvZHkuZmlyc3ROYW1lO1xuICAgICAgdGhpcy5sYXN0TmFtZSA9IHJlcS5ib2R5Lmxhc3ROYW1lO1xuICAgICAgdGhpcy51c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJuYW1lO1xuICAgICAgdGhpcy5wYXNzd29yZCA9IHJlcS5ib2R5LnBhc3N3b3JkO1xuICAgICAgdGhpcy50eXBlID0gcmVxLmJvZHkudHlwZTtcblxuICAgICAgaWYodGhpcy5lbWFpbCA9PSAnJyl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7bWVzc2FnZTogJ2ZhaWxlZCB0byBkZWNyeXB0J30pO1xuICAgICAgfVxuXG4gICAgICBVc2VyVHlwZVNjaGVtYS5maW5kT25lKHsgYWN0aXZlOiB0cnVlLCAnZGlzcGxheSc6IHRoaXMudHlwZSB9LCAoZXJyLCBkYXRhKSA9PiB7XG5cbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIFxuICAgICAgICBpZihkYXRhKSBfdGFyZ2V0VHlwZSA9IGRhdGEuX2lkO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB9KS50aGVuKCgpID0+IHtcblxuICAgICAgICBpZihfdGFyZ2V0VHlwZSkge1xuXG4gICAgICAgICAgY29uc3QgX21vZGVsID0gbmV3IFNjaGVtYSh7XG4gICAgICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBmaXJzdE5hbWU6IHRoaXMuZmlyc3ROYW1lLFxuICAgICAgICAgICAgbGFzdE5hbWU6IHRoaXMubGFzdE5hbWUsXG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICAgIHVzZXJUeXBlSWQ6IF90YXJnZXRUeXBlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFfbW9kZWwuc2V0UGFzc3dvcmQodGhpcy5wYXNzd29yZCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgICAgICAgIC5zZW5kKHsgbWVzc2FnZTogXCJwYXNzd29yZCBkb2VzIG5vdCBtYXRjaCBjcml0ZXJpYVwiIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghX21vZGVsLmdlbmVyYXRlVmFsaWRhdGlvblRva2VuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgICAgICAgIC5zZW5kKHsgbWVzc2FnZTogXCJlcnJvciBvY2N1cmVkIHdoaWxlIGdlbmVyYXRpbmcgdG9rZW5cIiB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBTY2hlbWEuY3JlYXRlKF9tb2RlbCwgKGVycjogRXJyb3IsIGRhdGE6IElBcGlVc2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZCh7bWVzc2FnZTogJ2NyZWF0ZWQnfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcblxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICAgXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG5cbiAgICAgIGlmICghcmVxLnBhcmFtcyB8fCAhcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBcInRhcmdldCBpZCBpcyBpbnZhbGlkXCIgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXJlcS5ib2R5IHx8XG4gICAgICAgICFyZXEuYm9keS5maXJzdE5hbWUgfHxcbiAgICAgICAgIXJlcS5ib2R5Lmxhc3ROYW1lIHx8XG4gICAgICAgICFyZXEuYm9keS51c2VybmFtZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfZmlyc3ROYW1lID0gcmVxLmJvZHkuZmlyc3ROYW1lID8gcmVxLmJvZHkuZmlyc3ROYW1lIDogXCJcIjtcbiAgICAgIGNvbnN0IF9sYXN0TmFtZSA9IHJlcS5ib2R5Lmxhc3ROYW1lID8gcmVxLmJvZHkubGFzdE5hbWUgOiBcIlwiO1xuXG4gICAgICBpZiAoX2ZpcnN0TmFtZS5sZW5ndGggPT0gMCB8fCBfbGFzdE5hbWUubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAgIC5zZW5kKHsgbWVzc2FnZTogXCJtaXNzaW5nIGFuZCBudWxsIG9yIGVtcHR5IGRhdGFcIiB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgX21vZGVsID0gbmV3IFNjaGVtYSh7XG4gICAgICAgIGZpcnN0TmFtZTogX2ZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWU6IF9sYXN0TmFtZVxuICAgICAgfSk7XG5cbiAgICAgIFNjaGVtYS5maW5kQnlJZEFuZFVwZGF0ZSh7J2lkJzogcmVxLnBhcmFtcy5pZCB9LCBfbW9kZWwsIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcblxuICBkZWFjdGl2YXRlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG5cbiAgICAgIGlmICghcmVxLnBhcmFtcyB8fCAhcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoKTtcbiAgICAgIH1cblxuICAgICAgU2NoZW1hLmZpbmRCeUlkQW5kVXBkYXRlKFxuICAgICAgICByZXEucGFyYW1zLmlkLFxuICAgICAgICB7IGFjdGl2ZTogZmFsc2UgfSxcbiAgICAgICAgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDQpLnNlbmQoe21lc3NhZ2U6ICdkZWFjdGl2YXRlZCd9KTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuO1xuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnNlbmQoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBpVXNlckNvbnRyb2xsZXIoKTtcbiIsImltcG9ydCAqIGFzIHRyYW5zcG9ydENvbmZpZyBmcm9tICcuLi9jb25maWcvdHJhbnNwb3J0LmNvbmZpZy5qc29uJ1xuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0by1qcydcbmltcG9ydCB7VHlwZXN9IGZyb20gXCJtb25nb29zZVwiO1xuXG5cbmV4cG9ydCAgY2xhc3MgQmFzZUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBlbmNyeXB0RGF0YShkYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB2YXIgX2RhdGEgPSBjcnlwdG8uQUVTLmVuY3J5cHQoZGF0YSwgdHJhbnNwb3J0Q29uZmlnLnRyYW5zcG9ydFNlY3JldCk7XG4gICAgICAgIHJldHVybiBfZGF0YS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkZWNyeXB0RGF0YShkYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB2YXIgX2RhdGEgPSBjcnlwdG8uQUVTLmRlY3J5cHQoZGF0YSwgdHJhbnNwb3J0Q29uZmlnLnRyYW5zcG9ydFNlY3JldCk7XG4gICAgICAgIHZhciBfcGxhaW50ZXh0ID0gX2RhdGEudG9TdHJpbmcoY3J5cHRvLmVuYy5VdGY4KTtcbiAgICAgICAgcmV0dXJuIF9wbGFpbnRleHQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1vbmdvSWRPYmplY3QoZGF0YTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBfaWQgPSBUeXBlcy5PYmplY3RJZChkYXRhKTtcbiAgICAgICAgcmV0dXJuIF9pZDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBCYXNlQ29udHJvbGxlcigpOyIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBDbGllbnRJbmZvIGZyb20gXCIuLi9tb2RlbHMvY2xpZW50SW5mb1wiO1xuXG5leHBvcnQgY2xhc3MgQ2xpZW50SW5mb0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0QWxsID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IF9kYXRhID0gbmV3IENsaWVudEluZm8oKTtcbiAgICBfZGF0YS5ob3N0bmFtZSA9IHJlcS5ob3N0bmFtZTtcbiAgICBfZGF0YS5pcCA9IHJlcS5jb25uZWN0aW9uLnJlbW90ZUFkZHJlc3M7XG4gICAgX2RhdGEuZm9yd2FyZWQgPSByZXEuaGVhZGVycy5mb3J3YXJkZWQgPyByZXEuaGVhZGVycy5mb3J3YXJkZWQgOiBcIlwiO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKF9kYXRhKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENsaWVudEluZm9Db250cm9sbGVyKCk7XG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgU2NoZW1hIGZyb20gXCIuLi9kYi9kdXJhdGlvblNjaGVtYVwiO1xuaW1wb3J0IHsgSUR1cmF0aW9uIH0gZnJvbSBcIi4uL2RiL2ludGVyZmFjZXNcIjtcbmltcG9ydCBEdXJhdGlvbiBmcm9tIFwiLi4vbW9kZWxzL2R1cmF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBEdXJhdGlvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHJpdmF0ZSBtYXBJdGVtcyhtb2RlbDogSUR1cmF0aW9uW10pOiBEdXJhdGlvbltdIHtcbiAgICBsZXQgX2RhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfZGF0YS5wdXNoKHRoaXMubWFwSXRlbShtb2RlbFtpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gX2RhdGE7XG4gIH1cblxuICBwcml2YXRlIG1hcEl0ZW0obW9kZWw6IElEdXJhdGlvbik6IER1cmF0aW9uIHtcbiAgICBjb25zdCBfZGF0YSA9IG5ldyBEdXJhdGlvbigpO1xuICAgIF9kYXRhLmFjdGl2ZSA9IG1vZGVsLmFjdGl2ZTtcbiAgICBfZGF0YS5kaXNwbGF5ID0gbW9kZWwuZGlzcGxheTtcbiAgICBfZGF0YS5pZCA9IG1vZGVsLmlkO1xuICAgIF9kYXRhLnByaWNlID0gbW9kZWwucHJpY2U7XG4gICAgcmV0dXJuIF9kYXRhO1xuICB9XG5cbiAgZ2V0QWxsID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIFNjaGVtYS5maW5kKHsgYWN0aXZlOiB0cnVlIH0sIChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW1zKGRhdGEpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKF9kYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRPbmUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghcmVxLnBhcmFtcyB8fCAhcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoKTtcbiAgICAgIH1cblxuICAgICAgU2NoZW1hLmZpbmRCeUlkKHJlcS5wYXJhbXMuaWQsIChlcnIsIGRhdGE6IElEdXJhdGlvbikgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW0oZGF0YSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChfZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNyZWF0ZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFyZXEuYm9keSB8fCAhcmVxLmJvZHkuZGVzY3JpcHRpb24gfHwgIXJlcS5ib2R5LmRpc3BsYXkpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9tb2RlbCA9IG5ldyBEdXJhdGlvbigpO1xuICAgICAgX21vZGVsLmlkID0gdXVpZCgpO1xuICAgICAgX21vZGVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICBfbW9kZWwuZGlzcGxheSA9IHJlcS5ib2R5LmRpc3BsYXk7XG4gICAgICBfbW9kZWwucHJpY2UgPSByZXEuYm9keS5wcmljZTtcblxuICAgICAgU2NoZW1hLmNyZWF0ZShfbW9kZWwsIChlcnI6IEVycm9yLCBkYXRhOiBJRHVyYXRpb24pID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIGNvbnN0IF9kYXRhID0gdGhpcy5tYXBJdGVtKGRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoX2RhdGEpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghcmVxLnBhcmFtcyB8fCAhcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJpY2UgPSByZXEuYm9keS5wcmljZSA/IHJlcS5ib2R5LnByaWNlIDogXCJcIjtcbiAgICAgIGNvbnN0IGRpc3AgPSByZXEuYm9keS5kaXNwbGF5ID8gcmVxLmJvZHkuZGlzcGxheSA6IFwiXCI7XG5cbiAgICAgIGlmIChwcmljZSA+IDAgfHwgZGlzcC5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgICAgLnNlbmQoeyBtZXNzYWdlOiBcImRlc2NyaXB0aW9uIG9yIGRpc3BsYXkgaXMgbnVsbCBvciBlbXB0eVwiIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfbW9kZWwgPSBuZXcgU2NoZW1hKHtcbiAgICAgICAgZGlzcGxheTogZGlzcCxcbiAgICAgICAgcHJpY2U6IHByaWNlXG4gICAgICB9KTtcblxuICAgICAgU2NoZW1hLmZpbmRCeUlkQW5kVXBkYXRlKHJlcS5wYXJhbXMuaWQsIF9tb2RlbCwgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcblxuICBkZWFjdGl2YXRlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlcS5wYXJhbXMgfHwgIXJlcS5wYXJhbXMuaWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIFNjaGVtYS5maW5kQnlJZEFuZFVwZGF0ZShcbiAgICAgICAgcmVxLnBhcmFtcy5pZCxcbiAgICAgICAgeyBhY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjA0KS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IER1cmF0aW9uQ29udHJvbGxlcigpO1xuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCAqIGFzIGNvbmZpZ0luZm8gZnJvbSBcIi4uL2NvbmZpZy9kYi5jb25maWcuanNvblwiO1xuaW1wb3J0IFNjaGVtYSBmcm9tIFwiLi4vZGIvYXBpVXNlclNjaGVtYVwiO1xuaW1wb3J0IHsgSUFwaVVzZXIsIElEZWNvZGVkIH0gZnJvbSBcIi4uL2RiL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IEJhc2VDb250cm9sbGVyIH0gZnJvbSBcIi4vYmFzZUNvbnRyb2xsZXJcIjtcblxuXG5leHBvcnQgY2xhc3MgbG9naW5Db250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXJ7XG4gIHByaXZhdGUgdXNlcm5hbWU6c3RyaW5nO1xuICBwcml2YXRlIHBhc3N3b3JkOnN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2VybmFtZT0nJztcbiAgICB0aGlzLnBhc3N3b3JkPScnO1xuICB9XG5cbiAgbG9naW4gPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgXG4gICAgdHJ5IHtcblxuICAgICAgaWYgKCFyZXEuYm9keS51c2VybmFtZSB8fCAhcmVxLmJvZHkucGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXNlcm5hbWUgPSB0aGlzLmRlY3J5cHREYXRhKHJlcS5ib2R5LnVzZXJuYW1lKTtcbiAgICAgIHRoaXMucGFzc3dvcmQgPSB0aGlzLmRlY3J5cHREYXRhKHJlcS5ib2R5LnBhc3N3b3JkKTtcblxuICAgICAgU2NoZW1hLmZpbmRPbmUoeyB1c2VybmFtZTogdGhpcy51c2VybmFtZSB9KS5leGVjKFxuICAgICAgICAoZXJyOiBFcnJvciwgZGF0YTogSUFwaVVzZXIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcblxuICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoIWRhdGEudmFsaWRQYXNzd29yZCh0aGlzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBtZXNzYWdlOiBcImVpdGhlciB1c2VybmFtZSBvciBwYXNzd29yZCBpbiBpbmNvcnJlY3QhXCIgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZGF0YS50b2tlblZhbGlkYXRlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAgICAgLnN0YXR1cygzMDEpXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBtZXNzYWdlOiBcInBsZWFzZSB2YWxpZGF0ZSB5b3VyIGVtYWlsXCIgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiV2VsY29tZSBiYWNrIVwiIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IFwidXNlciBkb2VzIG5vdCBleGlzdFwiIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVzZXRQYXNzd29yZCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFyZXEuYm9keS51c2VybmFtZSB8fCAhcmVxLmJvZHkucGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIFNjaGVtYS5maW5kT25lKHsgdXNlcm5hbWU6IHJlcS5ib2R5LnVzZXIgfSkuZXhlYyhcbiAgICAgICAgKGVycjogRXJyb3IsIGRhdGE6IElBcGlVc2VyKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG5cbiAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKCFkYXRhLnNldFBhc3N3b3JkKHJlcS5ib2R5LnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgICAgICAgICAgLnNlbmQoXCJlaXRoZXIgdXNlcm5hbWUgb3IgcGFzc3dvcmQgaW4gaW5jb3JyZWN0IVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIFNjaGVtYS5maW5kQnlJZEFuZFVwZGF0ZShcbiAgICAgICAgICAgICAgICBkYXRhLl9pZCxcbiAgICAgICAgICAgICAgICB7IHNhbHQ6IGRhdGEuc2FsdCwgcGFzc3dvcmRfaGFzaDogZGF0YS5wYXNzd29yZF9oYXNoIH0sXG4gICAgICAgICAgICAgICAgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQxNykuc2VuZCgpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFsaWRhdGVFbWFpbFRva2VuID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlcS5wYXJhbXMudG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9kZWNvZGVkID0gPElEZWNvZGVkPihcbiAgICAgICAgand0LnZlcmlmeShyZXEucGFyYW1zLnRva2VuLCBjb25maWdJbmZvLnNlY3JldClcbiAgICAgICk7XG5cbiAgICAgIGlmICghX2RlY29kZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogXCJkZWNvZGluZyBmYWlsdXJlXCIgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX2RlY29kZWQuZXhwID4gRGF0ZS5ub3coKSAvIDEwMDApIHtcbiAgICAgICAgICBTY2hlbWEuZmluZEJ5SWRBbmRVcGRhdGUoXG4gICAgICAgICAgICBfZGVjb2RlZC5pZCxcbiAgICAgICAgICAgIHsgdG9rZW5WYWxpZGF0ZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnIubWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiVG9rZW4gZXhwaXJlZFwiIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgbG9naW5Db250cm9sbGVyKCk7XG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBJU2VydmljZSB9IGZyb20gXCIuLi9kYi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgU2NoZW1hIGZyb20gXCIuLi9kYi9zZXJ2aWNlU2NoZW1hXCI7XG5pbXBvcnQgU2VydmljZSBmcm9tIFwiLi4vbW9kZWxzL3NlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFNlcnZpY2VDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgbWFwSXRlbXMobW9kZWw6IElTZXJ2aWNlW10pOiBTZXJ2aWNlW10ge1xuICAgIGxldCBfZGF0YSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgIF9kYXRhLnB1c2godGhpcy5tYXBJdGVtKG1vZGVsW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBfZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgbWFwSXRlbShtb2RlbDogSVNlcnZpY2UpOiBTZXJ2aWNlIHtcbiAgICBjb25zdCBfZGF0YSA9IG5ldyBTZXJ2aWNlKCk7XG4gICAgX2RhdGEuYWN0aXZlID0gbW9kZWwuYWN0aXZlO1xuICAgIF9kYXRhLmRlc2NyaXB0aW9uID0gbW9kZWwuZGVzY3JpcHRpb247XG4gICAgX2RhdGEuaWQgPSBtb2RlbC5pZDtcbiAgICBfZGF0YS5zaG9ydERlc2NyaXB0aW9uID0gbW9kZWwuc2hvcnREZXNjcmlwdGlvbjtcblxuICAgIHJldHVybiBfZGF0YTtcbiAgfVxuXG4gIGdldEFsbCA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICBTY2hlbWEuZmluZCh7IGFjdGl2ZTogdHJ1ZSB9LCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgIGNvbnN0IF9kYXRhID0gdGhpcy5tYXBJdGVtcyhkYXRhKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChfZGF0YSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0T25lID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlcS5wYXJhbXMgfHwgIXJlcS5wYXJhbXMuaWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIFNjaGVtYS5maW5kQnlJZChyZXEucGFyYW1zLmlkLCAoZXJyLCBkYXRhOiBJU2VydmljZSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW0oZGF0YSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChfZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNyZWF0ZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFyZXEuYm9keSB8fCAhcmVxLmJvZHkuZGVzY3JpcHRpb24gfHwgIXJlcS5ib2R5LnNob3J0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9tb2RlbCA9IG5ldyBTZXJ2aWNlKCk7XG4gICAgICBfbW9kZWwuaWQgPSB1dWlkKCk7XG4gICAgICBfbW9kZWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIF9tb2RlbC5kZXNjcmlwdGlvbiA9IHJlcS5ib2R5LmRlc2NyaXB0aW9uO1xuICAgICAgX21vZGVsLnNob3J0RGVzY3JpcHRpb24gPSByZXEuYm9keS5zaG9ydERlc2NyaXB0aW9uO1xuXG4gICAgICBTY2hlbWEuY3JlYXRlKF9tb2RlbCwgKGVycjogRXJyb3IsIGRhdGE6IElTZXJ2aWNlKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICBjb25zdCBfZGF0YSA9IHRoaXMubWFwSXRlbShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKF9kYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlcS5wYXJhbXMgfHwgIXJlcS5wYXJhbXMuaWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcmVxLmJvZHkuZGVzY3JpcHRpb24gPyByZXEuYm9keS5kZXNjcmlwdGlvbiA6IFwiXCI7XG4gICAgICBjb25zdCBzaG9ydERlc2MgPSByZXEuYm9keS5zaG9ydERlc2NyaXB0aW9uXG4gICAgICAgID8gcmVxLmJvZHkuc2hvcnREZXNjcmlwdGlvblxuICAgICAgICA6IFwiXCI7XG5cbiAgICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPT0gMCB8fCBzaG9ydERlc2MubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAgIC5zZW5kKHsgbWVzc2FnZTogXCJkZXNjcmlwdGlvbiBpcyBudWxsIG9yIGVtcHR5XCIgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9tb2RlbCA9IG5ldyBTY2hlbWEoe1xuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIHNob3J0RGVzYzogc2hvcnREZXNjXG4gICAgICB9KTtcblxuICAgICAgU2NoZW1hLmZpbmRCeUlkQW5kVXBkYXRlKHJlcS5wYXJhbXMuaWQsIF9tb2RlbCwgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcblxuICBkZWFjdGl2YXRlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlcS5wYXJhbXMgfHwgIXJlcS5wYXJhbXMuaWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIFNjaGVtYS5maW5kQnlJZEFuZFVwZGF0ZShcbiAgICAgICAgcmVxLnBhcmFtcy5pZCxcbiAgICAgICAgeyBhY3RpdmU6IGZhbHNlIH0sXG4gICAgICAgIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjA0KS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZpY2VDb250cm9sbGVyKCk7XG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBJVXNlclR5cGUgfSBmcm9tIFwiLi4vZGIvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IFNjaGVtYSBmcm9tIFwiLi4vZGIvdXNlclR5cGVTY2hlbWFcIjtcbmltcG9ydCBVc2VyVHlwZSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJUeXBlXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyVHlwZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHJpdmF0ZSBtYXBJdGVtcyhtb2RlbDogSVVzZXJUeXBlW10pOiBVc2VyVHlwZVtdIHtcbiAgICBsZXQgX2RhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfZGF0YS5wdXNoKHRoaXMubWFwSXRlbShtb2RlbFtpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gX2RhdGE7XG4gIH1cblxuICBwcml2YXRlIG1hcEl0ZW0obW9kZWw6IElVc2VyVHlwZSk6IFVzZXJUeXBlIHtcbiAgICBjb25zb2xlLmxvZyhcInR5cGU6IFwiICsgbW9kZWwuZGlzcGxheSwgbW9kZWwuX2lkKTtcbiAgICBjb25zdCBfZGF0YSA9IG5ldyBVc2VyVHlwZSgpO1xuICAgIF9kYXRhLmFjdGl2ZSA9IG1vZGVsLmFjdGl2ZTtcbiAgICBfZGF0YS5kZXNjcmlwdGlvbiA9IG1vZGVsLmRlc2NyaXB0aW9uO1xuICAgIF9kYXRhLmRpc3BsYXkgPSBtb2RlbC5kaXNwbGF5O1xuICAgIF9kYXRhLmlkID0gbW9kZWwuaWQ7XG5cbiAgICByZXR1cm4gX2RhdGE7XG4gIH1cblxuICBnZXRBbGwgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgU2NoZW1hLmZpbmQoeyBhY3RpdmU6IHRydWUgfSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpO1xuICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW1zKGRhdGEpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKF9kYXRhKTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRPbmUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghcmVxLnBhcmFtcyB8fCAhcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoKTtcbiAgICAgIH1cblxuICAgICAgU2NoZW1hLmZpbmRCeUlkKHJlcS5wYXJhbXMuaWQsIChlcnIsIGRhdGE6IElVc2VyVHlwZSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW0oZGF0YSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChfZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNyZWF0ZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFyZXEuYm9keSB8fCAhcmVxLmJvZHkuZGVzY3JpcHRpb24gfHwgIXJlcS5ib2R5LmRpc3BsYXkpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9tb2RlbCA9IG5ldyBVc2VyVHlwZSgpO1xuICAgICAgX21vZGVsLmlkID0gdXVpZCgpO1xuICAgICAgX21vZGVsLmRlc2NyaXB0aW9uID0gcmVxLmJvZHkuZGVzY3JpcHRpb247XG4gICAgICBfbW9kZWwuZGlzcGxheSA9IHJlcS5ib2R5LmRpc3BsYXk7XG4gICAgICBfbW9kZWwuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgU2NoZW1hLmNyZWF0ZShfbW9kZWwsIChlcnI6IEVycm9yLCBkYXRhOiBJVXNlclR5cGUpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIGNvbnN0IF9kYXRhID0gdGhpcy5tYXBJdGVtKGRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoX2RhdGEpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcblxuICB1cGRhdGUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghcmVxLnBhcmFtcyB8fCAhcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVzYyA9IHJlcS5ib2R5LmRlc2NyaXB0aW9uID8gcmVxLmJvZHkuZGVzY3JpcHRpb24gOiBcIlwiO1xuICAgICAgY29uc3QgZGlzcCA9IHJlcS5ib2R5LmRpc3BsYXkgPyByZXEuYm9keS5kaXNwbGF5IDogXCJcIjtcblxuICAgICAgaWYgKGRlc2MubGVuZ3RoID09IDAgfHwgZGlzcC5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgICAgLnNlbmQoeyBtZXNzYWdlOiBcImRlc2NyaXB0aW9uIG9yIGRpc3BsYXkgaXMgbnVsbCBvciBlbXB0eVwiIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBfdXNlclR5cGUgPSB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjLFxuICAgICAgICBkaXNwbGF5OiBkaXNwXG4gICAgICB9O1xuXG4gICAgICBTY2hlbWEuZmluZEJ5SWRBbmRVcGRhdGUocmVxLnBhcmFtcy5pZCwgX3VzZXJUeXBlLCAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRlYWN0aXZhdGUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghcmVxLnBhcmFtcyB8fCAhcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoKTtcbiAgICAgIH1cblxuICAgICAgU2NoZW1hLmZpbmRCeUlkQW5kVXBkYXRlKFxuICAgICAgICByZXEucGFyYW1zLmlkLFxuICAgICAgICB7IGFjdGl2ZTogZmFsc2UgfSxcbiAgICAgICAgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDQpLnNlbmQoKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlclR5cGVDb250cm9sbGVyKCk7XG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBJVmFsaWRDbGllbnQgfSBmcm9tIFwiLi4vZGIvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IFNjaGVtYSBmcm9tIFwiLi4vZGIvdmFsaWRDbGllbnRTY2hlbWFcIjtcbmltcG9ydCBWYWxpZENsaWVudCBmcm9tIFwiLi4vbW9kZWxzL3ZhbGlkQ2xpZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZENsaWVudENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHJpdmF0ZSBtYXBJdGVtcyhtb2RlbDogSVZhbGlkQ2xpZW50W10pOiBWYWxpZENsaWVudFtdIHtcbiAgICBsZXQgX2RhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfZGF0YS5wdXNoKHRoaXMubWFwSXRlbShtb2RlbFtpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gX2RhdGE7XG4gIH1cblxuICBwcml2YXRlIG1hcEl0ZW0obW9kZWw6IElWYWxpZENsaWVudCk6IFZhbGlkQ2xpZW50IHtcbiAgICBjb25zb2xlLmxvZyhcIl9pZFwiLCBtb2RlbC5faWQpO1xuICAgIGNvbnN0IF9kYXRhID0gbmV3IFZhbGlkQ2xpZW50KCk7XG4gICAgX2RhdGEuYWN0aXZlID0gbW9kZWwuYWN0aXZlO1xuICAgIF9kYXRhLmNvbnRhY3ROYW1lID0gbW9kZWwuY29udGFjdE5hbWU7XG4gICAgX2RhdGEuZGVzY3JpcHRpb24gPSBtb2RlbC5kZXNjcmlwdGlvbjtcbiAgICBfZGF0YS5lbWFpbCA9IG1vZGVsLmVtYWlsO1xuICAgIF9kYXRhLmlkID0gbW9kZWwuaWQ7XG4gICAgX2RhdGEuaXBBZGRyZXNzID0gbW9kZWwuaXBBZGRyZXNzO1xuICAgIF9kYXRhLm5hbWUgPSBtb2RlbC5uYW1lO1xuICAgIF9kYXRhLnBob25lTnVtYmVyID0gbW9kZWwucGhvbmVOdW1iZXI7XG5cbiAgICByZXR1cm4gX2RhdGE7XG4gIH1cblxuICBnZXRBbGwgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgU2NoZW1hLmZpbmQoeyBhY3RpdmU6IHRydWUgfSwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICBjb25zdCBfZGF0YSA9IHRoaXMubWFwSXRlbXMoZGF0YSk7XG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChfZGF0YSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0T25lID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXJlcS5wYXJhbXMgfHwgIXJlcS5wYXJhbXMuaWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCk7XG4gICAgICB9XG5cbiAgICAgIFNjaGVtYS5maW5kQnlJZChyZXEucGFyYW1zLmlkLCAoZXJyLCBkYXRhOiBJVmFsaWRDbGllbnQpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIGNvbnN0IF9kYXRhID0gdGhpcy5tYXBJdGVtKGRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNyZWF0ZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKFxuICAgICAgICAhcmVxLmJvZHkuYWN0aXZlIHx8XG4gICAgICAgICFyZXEuYm9keS5jb250YWN0bmFtZSB8fFxuICAgICAgICAhcmVxLmJvZHkuZGVzY3JpcHRpb24gfHxcbiAgICAgICAgIXJlcS5ib2R5LmVtYWlsIHx8XG4gICAgICAgICFyZXEuYm9keS5pcGFkZHJlc3MgfHxcbiAgICAgICAgIXJlcS5ib2R5Lm5hbWUgfHxcbiAgICAgICAgIXJlcS5ib2R5LnBob25lbnVtYmVyXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogXCJyZXF1aXJlZCBkYXRhIGlzIG1pc3NpbmdcIiB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgX21vZGVsID0gbmV3IFNjaGVtYSh7XG4gICAgICAgIGlkOiB1dWlkKCksXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgY29udGFjdE5hbWU6IHJlcS5ib2R5LmNvbnRhY3RuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogcmVxLmJvZHkuZGVzY3JpcHRpb24sXG4gICAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcbiAgICAgICAgaXBBZGRyZXNzOiByZXEuYm9keS5pcGFkZHJlc3MsXG4gICAgICAgIG5hbWU6IHJlcS5ib2R5Lm5hbWUsXG4gICAgICAgIHBob25lTnVtYmVyOiByZXEuYm9keS5waG9uZW51bWJlclxuICAgICAgfSk7XG5cbiAgICAgIF9tb2RlbC5nZW5lcmF0ZVZhbGlkYXRpb25Ub2tlbigpO1xuXG4gICAgICBTY2hlbWEuY3JlYXRlKF9tb2RlbCwgKGVycjogRXJyb3IsIGRhdGE6IElWYWxpZENsaWVudCkgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgY29uc3QgX2RhdGEgPSB0aGlzLm1hcEl0ZW0oZGF0YSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZChfZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZSA9IChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKFxuICAgICAgICAhcmVxLmJvZHkuY29udGFjdG5hbWUgfHxcbiAgICAgICAgIXJlcS5ib2R5LmRlc2NyaXB0aW9uIHx8XG4gICAgICAgICFyZXEuYm9keS5lbWFpbCB8fFxuICAgICAgICAhcmVxLmJvZHkuZmRucSB8fFxuICAgICAgICAhcmVxLmJvZHkuaXBhZGRyZXNzIHx8XG4gICAgICAgICFyZXEuYm9keS5uYW1lIHx8XG4gICAgICAgICFyZXEuYm9keS5waG9uZW51bWJlclxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IFwicmVxdWlyZWQgZGF0YSBpcyBtaXNzaW5nXCIgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IF9tb2RlbCA9IG5ldyBWYWxpZENsaWVudCgpO1xuICAgICAgX21vZGVsLmNvbnRhY3ROYW1lID0gcmVxLmJvZHkuY29udGFjdG5hbWU7XG4gICAgICBfbW9kZWwuZGVzY3JpcHRpb24gPSByZXEuYm9keS5kZXNjcmlwdGlvbjtcbiAgICAgIF9tb2RlbC5lbWFpbCA9IHJlcS5ib2R5LmVtYWlsO1xuICAgICAgX21vZGVsLmlwQWRkcmVzcyA9IHJlcS5ib2R5LmlwYWRkcmVzcztcbiAgICAgIF9tb2RlbC5uYW1lID0gcmVxLmJvZHkubmFtZTtcbiAgICAgIF9tb2RlbC5waG9uZU51bWJlciA9IHJlcS5ib2R5LnBob25lbnVtYmVyO1xuXG4gICAgICBTY2hlbWEuZmluZEJ5SWRBbmRVcGRhdGUocmVxLnBhcmFtcy5pZCwgX21vZGVsLCAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRlYWN0aXZhdGUgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghcmVxLnBhcmFtcyB8fCAhcmVxLnBhcmFtcy5pZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoKTtcbiAgICAgIH1cblxuICAgICAgU2NoZW1hLmZpbmRCeUlkQW5kVXBkYXRlKFxuICAgICAgICByZXEucGFyYW1zLmlkLFxuICAgICAgICB7IGFjdGl2ZTogZmFsc2UsIHRva2VuOiBcIlwiIH0sXG4gICAgICAgIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjA0KS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZhbGlkQ2xpZW50Q29udHJvbGxlcigpO1xuIiwiaW1wb3J0IHsgSUFwaVVzZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgZGF0YUFjY2VzcyBmcm9tIFwiLi9kYXRhQWNjZXNzXCI7XG5pbXBvcnQgKiBhcyBjb25maWdJbmZvIGZyb20gXCIuLi9jb25maWcvZGIuY29uZmlnLmpzb25cIjtcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0ICogYXMgdmFsaWRhdG9yIGZyb20gXCJtb25nb29zZS11bmlxdWUtdmFsaWRhdG9yXCI7XG5pbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xuaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuZXhwb3J0IGNsYXNzIEFwaVVzZXJTY2hlbWEge1xuICBzYWx0Pzogc3RyaW5nO1xuICBwYXNzd29yZF9oYXNoPzogc3RyaW5nO1xuICBpZD86IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkO1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIGZpcnN0TmFtZT86IHN0cmluZztcbiAgdXNlclR5cGVJZD86IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkO1xuICBsYXN0TmFtZT86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgZW1haWxWYWxpZGF0ZWQ/OiBib29sZWFuO1xuXG4gIHB1YmxpYyBnZXQgc2NoZW1hKCk6IG1vbmdvb3NlLlNjaGVtYSB7XG4gICAgY29uc3QgX3NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gICAgICB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXVxuICAgICAgICB9LFxuICAgICAgICB1c2VybmFtZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBsb3dlcmNhc2U6IHRydWUsXG4gICAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcImlzIHJlcXVpcmVkXCJdLFxuICAgICAgICAgIG1hdGNoOiBbL1thLXpBLVowLTktX117NSwyMH1cXHcrLywgXCJpcyBpbnZhbGlkXCJdLFxuICAgICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgICBpbmRleDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBsb3dlcmNhc2U6IHRydWUsXG4gICAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcImlzIHJlcXVpcmVkXCJdLFxuICAgICAgICAgIG1hdGNoOiBbL1xcUytAXFxTK1xcLlxcUysvLCBcImlzIGludmFsaWRcIl0sXG4gICAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICAgIGluZGV4OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGZpcnN0TmFtZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgICAgaW5kZXg6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbGFzdE5hbWU6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcImlzIHJlcXVpcmVkXCJdLFxuICAgICAgICAgIGluZGV4OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHNhbHQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmRfaGFzaDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBpbmRleDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB1c2VyVHlwZUlkOiB7XG4gICAgICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgICAgIHJlZjogJ1VzZXJUeXBlcycsXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0b2tlblZhbGlkYXRlZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWRhdGlvblRva2VuOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGluZGV4OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuICAgICk7XG5cbiAgICBfc2NoZW1hLnBsdWdpbih2YWxpZGF0b3IsIHsgbWVzc2FnZTogXCJpcyBhbHJlYWR5IHRha2VuXCIgfSk7XG5cbiAgICBfc2NoZW1hLm1ldGhvZHMubWF0Y2hQYXNzd29yZENyaXRlcmlhID0gZnVuY3Rpb24oXG4gICAgICBwYXNzd29yZDogc3RyaW5nXG4gICAgKTogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwge1xuICAgICAgcmV0dXJuIHBhc3N3b3JkLm1hdGNoKGNvbmZpZ0luZm8ucGFzc3dvcmRNYXRjaENyaXRlcmlhKTtcbiAgICB9O1xuXG4gICAgX3NjaGVtYS5tZXRob2RzLmV4cGlyZXNJbiA9IChkYXlzOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgY29uc3QgX2RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpICsgZGF5cyk7XG4gICAgfTtcblxuICAgIF9zY2hlbWEubWV0aG9kcy5zZXRQYXNzd29yZCA9IGZ1bmN0aW9uKHBhc3N3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIGlmIChfc2NoZW1hLm1ldGhvZHMubWF0Y2hQYXNzd29yZENyaXRlcmlhKHBhc3N3b3JkKSkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zYWx0ID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSG1hYygnc2hhNTEyJywgdGhpcy5zYWx0KTtcbiAgICAgICAgaGFzaC51cGRhdGUocGFzc3dvcmQpO1xuICAgICAgICB2YXIgaGFzaFZhbHVlID0gaGFzaC5kaWdlc3QoJ2hleCcpO1xuXG4gICAgICAgIGlmKCFoYXNoVmFsdWUpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLnBhc3N3b3JkX2hhc2ggPSBoYXNoVmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwicGFzc3dvcmRcIiwgXCJkb2VzIG5vdCBtYXRjaCBjcml0ZXJpYVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfc2NoZW1hLm1ldGhvZHMuZ2VuZXJhdGVWYWxpZGF0aW9uVG9rZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IF9leHBpcmVzID0gX3NjaGVtYS5tZXRob2RzLmV4cGlyZXNJbigxKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgX3Rva2VuID0gand0LnNpZ24oXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgICBleHA6IF9leHBpcmVzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb25maWdJbmZvLnNlY3JldFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudG9rZW5WYWxpZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uVG9rZW4gPSBfdG9rZW47XG5cbiAgICAgICAgcmV0dXJuIF90b2tlbjtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3NjaGVtYS5tZXRob2RzLnZhbGlkUGFzc3dvcmQgPSBmdW5jdGlvbihwYXNzd29yZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICBpZiAoIXBhc3N3b3JkKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBoYXNoID0gY3J5cHRvLmNyZWF0ZUhtYWMoJ3NoYTUxMicsIHRoaXMuc2FsdCk7XG4gICAgICBoYXNoLnVwZGF0ZShwYXNzd29yZCk7XG4gICAgICB2YXIgaGFzaFZhbHVlID0gaGFzaC5kaWdlc3QoJ2hleCcpO1xuICAgICAgcmV0dXJuIHRoaXMucGFzc3dvcmRfaGFzaCA9PT0gaGFzaFZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3NjaGVtYTtcbiAgfVxufVxuXG5jb25zdCBtb2RlbCA9IGRhdGFBY2Nlc3MuZGJDb25uZWN0aW9uLm1vZGVsPElBcGlVc2VyPihcbiAgXCJhcGlVc2Vyc1wiLFxuICBuZXcgQXBpVXNlclNjaGVtYSgpLnNjaGVtYVxuKTtcbmV4cG9ydCBkZWZhdWx0IG1vZGVsO1xuIiwiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgKiBhcyBkYkNvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2RiLmNvbmZpZy5qc29uXCI7XG5cbmV4cG9ydCBjbGFzcyBEYXRhQWNjZXNzIHtcbiAgcHVibGljIHN0YXRpYyBkYkNvbm5lY3Rpb246IG1vbmdvb3NlLkNvbm5lY3Rpb247XG4gIHByaXZhdGUgc3RhdGljIGRiSW5zdGFuY2U6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPjtcblxuICBzdGF0aWMgY29ubmVjdCgpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICAgIGF1dG9JbmRleDogZmFsc2UsIC8vIERvbid0IGJ1aWxkIGluZGV4ZXNcbiAgICAgIGF1dG9SZWNvbm5lY3Q6IHRydWUsXG4gICAgICByZWNvbm5lY3RUcmllczogTnVtYmVyLk1BWF9WQUxVRSwgLy8gTmV2ZXIgc3RvcCB0cnlpbmcgdG8gcmVjb25uZWN0XG4gICAgICByZWNvbm5lY3RJbnRlcnZhbDogNTAwLCAvLyBSZWNvbm5lY3QgZXZlcnkgNTAwbXNcbiAgICAgIHBvb2xTaXplOiAxMCwgLy8gTWFpbnRhaW4gdXAgdG8gMTAgc29ja2V0IGNvbm5lY3Rpb25zXG4gICAgICAvLyBJZiBub3QgY29ubmVjdGVkLCByZXR1cm4gZXJyb3JzIGltbWVkaWF0ZWx5IHJhdGhlciB0aGFuIHdhaXRpbmcgZm9yIHJlY29ubmVjdFxuICAgICAgYnVmZmVyTWF4RW50cmllczogMCxcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDEwMDAwLCAvLyBHaXZlIHVwIGluaXRpYWwgY29ubmVjdGlvbiBhZnRlciAxMCBzZWNvbmRzXG4gICAgICBzb2NrZXRUaW1lb3V0TVM6IDQ1MDAwLCAvLyBDbG9zZSBzb2NrZXRzIGFmdGVyIDQ1IHNlY29uZHMgb2YgaW5hY3Rpdml0eVxuICAgICAgZmFtaWx5OiA0LCAvLyBVc2UgSVB2NCwgc2tpcCB0cnlpbmcgSVB2NlxuICAgICAgdXNlcjogZGJDb25maWcubW9uZ29Vc2VyLFxuICAgICAgcGFzczogZGJDb25maWcubW9uZ29QYXNzLFxuICAgICAgZGJOYW1lOiBkYkNvbmZpZy5tb25nb0RiXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBlc3RhYmxpc2ggPSAoaW5zdGFuY2U6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPikgPT4ge1xuICAgICAgICAgIGNvbnN0IF9jb25uID0gbW9uZ29vc2UuY29ubmVjdChkYkNvbmZpZy5tb25nb0VuZHBvaW50LCBvcHRpb25zKTtcblxuICAgICAgICAgIGlmIChfY29ubikge1xuICAgICAgICAgICAgcmVqZWN0KFwiREIgY29ubmVjdGlvbiBmYWlsdXJlXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IF9jb25uO1xuICAgICAgICAgICAgcmVzb2x2ZShcImNvbm5lY3RlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kYkNvbm5lY3Rpb24gPSBtb25nb29zZS5jb25uZWN0aW9uO1xuICAgICAgICB0aGlzLmRiQ29ubmVjdGlvbi5vbmNlKFwib3BlblwiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gbW9uZ29kYlwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kYkNvbm5lY3Rpb24ub24oXCJlcnJvclwiLCBlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgTW9uZ29vZGUgZGVmYXVsdCBjb25uZWN0aW9uIGhhcyBvY2N1cmVkICAke2Vycn0gZXJyb3JgXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbmNlKFwiZGlzY29ubmVjdGVkXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vbmdvb3NlIGRlZmF1bHQgY29ubmVjdGlvbiBkaXNjb25uZWN0ZWRcIik7XG4gICAgICAgICAgZXN0YWJsaXNoKHRoaXMuZGJJbnN0YW5jZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3Rpb24ub25jZShcInJlY29ubmVjdGVkXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vbmdvb3NlIGRlZmF1bHQgY29ubmVjdGlvbiByZWNvbm5lY3RlZFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvY2Vzcy5vbihcIlNJR0lOVFwiLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYkNvbm5lY3Rpb24uY2xvc2UoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYiBjb25uZWN0aW9uXCIsIFwiTW9uZ29vc2UgZGVmYXVsdCBjb25uZWN0aW9uXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBlc3RhYmxpc2godGhpcy5kYkluc3RhbmNlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5kYkluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYkluc3RhbmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25uZWN0aW9uKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmRiSW5zdGFuY2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbkRhdGFBY2Nlc3MuY29ubmVjdCgpO1xuZXhwb3J0IGRlZmF1bHQgRGF0YUFjY2VzcztcbiIsImltcG9ydCB7IElEdXJhdGlvbiB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcbmltcG9ydCBkYXRhQWNjZXNzIGZyb20gXCIuL2RhdGFBY2Nlc3NcIjtcbmltcG9ydCAqIGFzIHZhbGlkYXRvciBmcm9tIFwibW9uZ29vc2UtdW5pcXVlLXZhbGlkYXRvclwiO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBjbGFzcyBEdXJhdGlvblNjaGVtYSB7XG4gIGlkPzogc3RyaW5nO1xuICBkaXNwbGF5Pzogc3RyaW5nO1xuICBwcmljZT86IG51bWJlcjtcbiAgYWN0aXZlPzogYm9vbGVhbjtcblxuICBwdWJsaWMgZ2V0IHNjaGVtYSgpOiBtb25nb29zZS5TY2hlbWEge1xuICAgIGNvbnN0IF9zY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICAgICAge1xuICAgICAgICBpZDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgICAgaW5kZXg6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgICAgbG93ZXJjYXNlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHJlcXVpcmU6IFt0cnVlLCBcImlzIHJlcXVpcmVkXCJdLFxuICAgICAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuICAgICk7XG5cbiAgICBfc2NoZW1hLnBsdWdpbih2YWxpZGF0b3IsIHsgbWVzc2FnZTogXCJpcyBhbHJlYWR5IHRha2VuXCIgfSk7XG5cbiAgICByZXR1cm4gX3NjaGVtYTtcbiAgfVxufVxuXG5jb25zdCBtb2RlbCA9IGRhdGFBY2Nlc3MuZGJDb25uZWN0aW9uLm1vZGVsPElEdXJhdGlvbj4oXG4gIFwiRHVyYXRpb25cIixcbiAgbmV3IER1cmF0aW9uU2NoZW1hKCkuc2NoZW1hXG4pO1xuZXhwb3J0IGRlZmF1bHQgbW9kZWw7XG4iLCJpbXBvcnQgeyBJU2VydmljZSB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcbmltcG9ydCBkYXRhQWNjZXNzIGZyb20gXCIuL2RhdGFBY2Nlc3NcIjtcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY2xhc3MgU2VydmljZVNjaGVtYSB7XG4gIGlkPzogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQ7XG4gIHNlcnZpY2U/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBzaG9ydERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBhY3RpdmU/OiBib29sZWFuO1xuXG4gIHB1YmxpYyBnZXQgc2NoZW1hKCk6IG1vbmdvb3NlLlNjaGVtYSB7XG4gICAgY29uc3QgX3NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gICAgICB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXSxcbiAgICAgICAgICBpbmRleDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl1cbiAgICAgICAgfSxcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvbjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl1cbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICBpbmRleDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIF9zY2hlbWE7XG4gIH1cbn1cblxuY29uc3QgbW9kZWwgPSBkYXRhQWNjZXNzLmRiQ29ubmVjdGlvbi5tb2RlbDxJU2VydmljZT4oXG4gIFwiU2VydmljZXNcIixcbiAgbmV3IFNlcnZpY2VTY2hlbWEoKS5zY2hlbWFcbik7XG5leHBvcnQgZGVmYXVsdCBtb2RlbDtcbiIsImltcG9ydCB7IElVc2VyVHlwZSB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcbmltcG9ydCBkYXRhQWNjZXNzIGZyb20gXCIuL2RhdGFBY2Nlc3NcIjtcbmltcG9ydCAqIGFzIHZhbGlkYXRvciBmcm9tIFwibW9uZ29vc2UtdW5pcXVlLXZhbGlkYXRvclwiO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyVHlwZVNjaGVtYSB7XG4gIGlkPzogc3RyaW5nO1xuICBkaXNwbGF5Pzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcblxuICBwdWJsaWMgZ2V0IHNjaGVtYSgpOiBtb25nb29zZS5TY2hlbWEge1xuICAgIGNvbnN0IF9zY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICAgICAge1xuICAgICAgICBpZDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBpbmRleDogdHJ1ZSxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl1cbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgICAgbG93ZXJjYXNlOiB0cnVlLFxuICAgICAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl1cbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICByZXR1aXJlZDogdHJ1ZSxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4gICAgKTtcblxuICAgIF9zY2hlbWEucGx1Z2luKHZhbGlkYXRvciwgeyBtZXNzYWdlOiBcImlzIGFscmVhZHkgdGFrZW5cIiB9KTtcblxuICAgIHJldHVybiBfc2NoZW1hO1xuICB9XG59XG5cbmNvbnN0IG1vZGVsID0gZGF0YUFjY2Vzcy5kYkNvbm5lY3Rpb24ubW9kZWw8SVVzZXJUeXBlPihcbiAgXCJVc2VyVHlwZXNcIixcbiAgbmV3IFVzZXJUeXBlU2NoZW1hKCkuc2NoZW1hXG4pO1xuZXhwb3J0IGRlZmF1bHQgbW9kZWw7XG4iLCJpbXBvcnQgeyBJVmFsaWRDbGllbnQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgZGF0YUFjY2VzcyBmcm9tIFwiLi9kYXRhQWNjZXNzXCI7XG5pbXBvcnQgKiBhcyBjb25maWdJbmZvIGZyb20gXCIuLi9jb25maWcvZGIuY29uZmlnLmpzb25cIjtcbmltcG9ydCAqIGFzIHZhbGlkYXRvciBmcm9tIFwibW9uZ29vc2UtdW5pcXVlLXZhbGlkYXRvclwiO1xuaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5leHBvcnQgY2xhc3MgVXNlclR5cGVTY2hlbWEge1xuICBpZD86IHN0cmluZztcbiAgaXBBZGRyZXNzPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgY29udGFjdE5hbWU/OiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBwaG9uZU51bWJlcj86IG51bWJlcjtcbiAgdG9rZW4/OiBzdHJpbmc7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG5cbiAgcHVibGljIGdldCBzY2hlbWEoKTogbW9uZ29vc2UuU2NoZW1hIHtcbiAgICBjb25zdCBfc2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAgICAgIHtcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgaW5kZXg6IHRydWUsXG4gICAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcImlzIHJlcXVpcmVkXCJdXG4gICAgICAgIH0sXG4gICAgICAgIGlwQWRkcmVzczoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgICAgdmFsaWRhdGU6IFtcbiAgICAgICAgICAgIC9eKCgyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKXszfSgyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pJC8sXG4gICAgICAgICAgICBcImlzIGludmFsaWRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgaW5kZXg6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgICAgbG93ZXJjYXNlOiB0cnVlLFxuICAgICAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl1cbiAgICAgICAgfSxcbiAgICAgICAgY29udGFjdE5hbWU6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcImlzIHJlcXVpcmVkXCJdXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgIGxvd2VyY2FzZTogdHJ1ZSxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgICAgdmFsaWRhdGU6IFsvXFxTK0BcXFMrXFwuXFxTKy8sIFwiaXMgaW52YWxpZFwiXSxcbiAgICAgICAgICBpbmRleDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwaG9uZU51bWJlcjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiaXMgcmVxdWlyZWRcIl0sXG4gICAgICAgICAgdmFsaWRhdGU6IFtcbiAgICAgICAgICAgIC9eXFwoPyhbMC05XXszfSlcXCk/Wy0uIF0/KFswLTldezN9KVstLiBdPyhbMC05XXs0fSkkLyxcbiAgICAgICAgICAgIFwiaXMgaW52YWxpZFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBpbmRleDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0b2tlbjoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICBpbmRleDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHJldHVpcmVkOiB0cnVlLFxuICAgICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJpcyByZXF1aXJlZFwiXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbiAgICApO1xuXG4gICAgX3NjaGVtYS5wbHVnaW4odmFsaWRhdG9yLCB7IG1lc3NhZ2U6IFwiaXMgYWxyZWFkeSB0YWtlblwiIH0pO1xuXG4gICAgX3NjaGVtYS5tZXRob2RzLmdlbmVyYXRlVmFsaWRhdGlvblRva2VuID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgX2V4cCA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICAgIF9leHAuc2V0RGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpICsgNSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IF90b2tlbiA9IGp3dC5zaWduKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLl9pZCxcbiAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuaXBBZGRyZXNzLFxuICAgICAgICAgICAgZXhwOiBfZXhwLmdldFRpbWUoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29uZmlnSW5mby5zZWNyZXRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnRva2VuID0gX3Rva2VuO1xuXG4gICAgICAgIHJldHVybiBfdG9rZW47XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfc2NoZW1hO1xuICB9XG59XG5cbmNvbnN0IG1vZGVsID0gZGF0YUFjY2Vzcy5kYkNvbm5lY3Rpb24ubW9kZWw8SVZhbGlkQ2xpZW50PihcbiAgXCJWYWxpZENsaWVudHNcIixcbiAgbmV3IFVzZXJUeXBlU2NoZW1hKCkuc2NoZW1hXG4pO1xuZXhwb3J0IGRlZmF1bHQgbW9kZWw7XG4iLCJpbXBvcnQgYXBwIGZyb20gJy4vYXBwJ1xuXG5jb25zdCBwb3J0ID0gMzAwMTtcbmNvbnN0IGhvc3QgPSAnMTI3LjAuMC4xJztcblxuYXBwLnJ1bihwb3J0LCBob3N0KTtcbiIsImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2RiLmNvbmZpZy5qc29uXCI7XG5pbXBvcnQgeyBJRGVjb2RlZCwgSUFwaVVzZXIgfSBmcm9tIFwiLi4vZGIvaW50ZXJmYWNlcy5qc1wiO1xuaW1wb3J0IFNjaGVtYSBmcm9tIFwiLi4vZGIvdmFsaWRDbGllbnRTY2hlbWFcIjtcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRlUmVxdWVzdCB7XG4gIHN0YXRpYyB2YWxpZGF0ZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgIGNvbnN0IHRva2VuID0gKFxuICAgICAgKHJlcS5ib2R5ICYmIHJlcS5ib2R5LmFjY2Vzc190b2tlbikgfHxcbiAgICAgIChyZXEucXVlcnkgJiYgcmVxLnF1ZXJ5LmFjY2Vzc190b2tlbikgfHxcbiAgICAgIHJlcS5oZWFkZXJzW1wieF9hY2Nlc3NfdG9rZW5cIl1cbiAgICApXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnRyaW0oKTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPVxuICAgICAgcmVxLmhlYWRlcnMgJiYgcmVxLmhlYWRlcnMuZm9yd2FyZGVkXG4gICAgICAgID8gcmVxLmhlYWRlcnMuZm9yd2FyZGVkXG4gICAgICAgIDogcmVxLmNvbm5lY3Rpb24ucmVtb3RlQWRkcmVzcztcblxuICAgIGlmICghdG9rZW4gfHwgIWFkZHJlc3MpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiSW52YWxpZCB0b2tlbiBvciBhZGRyZXNzXCIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IF9kZWNvZGVkID0gPElEZWNvZGVkPmp3dC52ZXJpZnkodG9rZW4sIGNvbmZpZy5zZWNyZXQpO1xuICAgICAgICBpZiAoIV9kZWNvZGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogXCJEZWNvZGluZyBlcnJvclwiIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChfZGVjb2RlZC5leHAgPD0gRGF0ZS5ub3coKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogXCJUb2tlbiBFeHBpcmVkXCIgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFkZHJlc3MgIT09IF9kZWNvZGVkLmFkZHJlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkIGFkZHJlc3NcIiB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBTY2hlbWEuZmluZEJ5SWQoX2RlY29kZWQuaWQsIChlcnI6IEVycm9yLCBkYXRhOiBJQXBpVXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVyci5tZXNzYWdlKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQxNykuc2VuZCh7IG1lc3NhZ2U6IFwiSW5hY3RpdmUgdG9rZW5cIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVmFsaWRhdGVSZXF1ZXN0KCk7XG4iLCJpbXBvcnQgVXNlclR5cGUgZnJvbSBcIi4vdXNlclR5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpVXNlciB7XG4gIGlkPzogc3RyaW5nO1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIGZpcnN0TmFtZT86IHN0cmluZztcbiAgbGFzdE5hbWU/OiBzdHJpbmc7XG4gIHVzZXJUeXBlPzogVXNlclR5cGU7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIHRva2VuVmFsaWRhdGVkPzogYm9vbGVhbjtcbiAgdmFsaWRhdGlvblRva2VuPzogc3RyaW5nO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50SW5mbyB7XG4gICAgaG9zdG5hbWU/OiBzdHJpbmc7XG4gICAgaXA/OiBzdHJpbmc7XG4gICAgZm9yd2FyZWQ/OiBzdHJpbmc7XG4gIH1cbiAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVyYXRpb24ge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGRpc3BsYXk/OiBzdHJpbmc7XG4gICAgcHJpY2U/OiBudW1iZXI7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgfVxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlUeXBlIHtcbiAgICBpZD86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBzaG9ydERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gIH1cbiAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclR5cGUge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGRpc3BsYXk/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgfVxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZENsaWVudCB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgaXBBZGRyZXNzPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgY29udGFjdE5hbWU/OiBzdHJpbmc7XG4gICAgZW1haWw/OiBzdHJpbmc7XG4gICAgcGhvbmVOdW1iZXI/OiBudW1iZXI7XG4gICAgdG9rZW4/OiBzdHJpbmc7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgfVxuICAiLCJpbXBvcnQgeyBCYXNlUm91dGUgfSBmcm9tIFwiLi9iYXNlUm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJ9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlcnMvYXBpVXNlckNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGNsYXNzIEFwaVVzZXJSb3V0ZSBleHRlbmRzIEJhc2VSb3V0ZSB7XG4gICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG1hcChyb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICByb3V0ZXIuZ2V0KCcvdjEvYXBpdXNlcicsIGNvbnRyb2xsZXIuZ2V0QWxsKTtcbiAgICAgICAgcm91dGVyLmdldCgnL3YxL2FwaXVzZXIvOmlkJywgY29udHJvbGxlci5nZXRPbmUpO1xuICAgICAgICByb3V0ZXIucG9zdCgnL3YxL2FwaXVzZXInLCBjb250cm9sbGVyLmNyZWF0ZSk7XG4gICAgICAgIHJvdXRlci5wdXQoJy92MS9hcGl1c2VyLzppZCcsIGNvbnRyb2xsZXIudXBkYXRlKTtcbiAgICAgICAgcm91dGVyLmRlbGV0ZSgnL3YxL2FwaXVzZXIvOmlkJywgY29udHJvbGxlci5kZWFjdGl2YXRlKTtcbiAgICB9XG59IiwiaW1wb3J0IHtOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlfSBmcm9tICdleHByZXNzJztcblxuZXhwb3J0IGNsYXNzIEJhc2VSb3V0ZSB7XG4gICAgcHJvdGVjdGVkIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiV2VsY29tZSB0byBUeWxlci1DTVQgQXBpXCI7XG4gICAgfVxuXG4gICBcblxuICAgIHB1YmxpYyByZXNwb25zZURhdGEocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBkYXRhPzogT2JqZWN0KSB7XG4gICAgICAgIHJlcy5sb2NhbHMuQkFTRV9VUkwgPSBcIi9cIjtcbiAgICAgICAgcmVzLmxvY2Fscy50aXRsZSA9IHRoaXMudGl0bGU7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKTtcbiAgICAgICAgcmVzLnNlbmQoZGF0YSk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VSb3V0ZSB9IGZyb20gXCIuL2Jhc2VSb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVycy9jbGllbnRDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBDbGllbnRJbmZvUm91dGUgZXh0ZW5kcyBCYXNlUm91dGUge1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYXAocm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgcm91dGVyLmdldCgnL2NsaWVudGluZm8nLCBjb250cm9sbGVyLmdldEFsbCk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VSb3V0ZSB9IGZyb20gXCIuL2Jhc2VSb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVycy9kdXJhdGlvbkNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGNsYXNzIER1cmF0aW9uUm91dGUgZXh0ZW5kcyBCYXNlUm91dGUge1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYXAocm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgcm91dGVyLmdldCgnL3YxL2FkbWluL2R1cmF0aW9uJywgY29udHJvbGxlci5nZXRBbGwpO1xuICAgICAgICByb3V0ZXIuZ2V0KCcvdjEvYWRtaW4vZHVyYXRpb24vOmlkJywgY29udHJvbGxlci5nZXRPbmUpO1xuICAgICAgICByb3V0ZXIucG9zdCgnL3YxL2FkbWluL2R1cmF0aW9uJywgY29udHJvbGxlci5jcmVhdGUpO1xuICAgICAgICByb3V0ZXIucHV0KCcvdjEvYWRtaW4vZHVyYXRpb24vOmlkJywgY29udHJvbGxlci51cGRhdGUpO1xuICAgICAgICByb3V0ZXIuZGVsZXRlKCcvdjEvYWRtaW4vZHVyYXRpb24vOmlkJywgY29udHJvbGxlci5kZWFjdGl2YXRlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVJvdXRlIH0gZnJvbSBcIi4vYmFzZVJvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSBcImV4cHJlc3NcIjtcblxuZXhwb3J0IGNsYXNzIEluZGV4Um91dGUgZXh0ZW5kcyBCYXNlUm91dGUge1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYXAocm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgcm91dGVyLmdldCgnLycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgbmV3IEluZGV4Um91dGUoKS5pbmRleChyZXEsIHJlcywgbmV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmRleChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgICAgICB0aGlzLnRpdGxlID0gJ0luZGV4IHwgVHlsZXItQ01UJztcblxuICAgICAgICBsZXQgZGF0YTogT2JqZWN0ID0ge1xuICAgICAgICAgICAgXCJtZXNzYWdlXCI6IFwiV2VsY29tZSFcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEocmVxLCByZXMsIGRhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlUm91dGUgfSBmcm9tIFwiLi9iYXNlUm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJ9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlcnMvbG9naW5Db250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dpblJvdXRlIGV4dGVuZHMgQmFzZVJvdXRlIHtcbiAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgbWFwKHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHJvdXRlci5wb3N0KCcvdjEvbG9naW4vOnRva2VuJywgY29udHJvbGxlci52YWxpZGF0ZUVtYWlsVG9rZW4pO1xuICAgICAgICByb3V0ZXIucG9zdCgnL3YxL2xvZ2luJywgY29udHJvbGxlci5sb2dpbik7XG4gICAgICAgIHJvdXRlci5wb3N0KCcvdjEvcmVzZXRwYXNzJywgY29udHJvbGxlci5yZXNldFBhc3N3b3JkKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVJvdXRlIH0gZnJvbSBcIi4vYmFzZVJvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3NlcnZpY2VDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlUm91dGUgZXh0ZW5kcyBCYXNlUm91dGUge1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYXAocm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgcm91dGVyLmdldCgnL3YxL2FkbWluL3NlcnZpY2UnLCBjb250cm9sbGVyLmdldEFsbCk7XG4gICAgICAgIHJvdXRlci5nZXQoJy92MS9hZG1pbi9zZXJ2aWNlLzppZCcsIGNvbnRyb2xsZXIuZ2V0T25lKTtcbiAgICAgICAgcm91dGVyLnBvc3QoJy92MS9hZG1pbi9zZXJ2aWNlJywgY29udHJvbGxlci5jcmVhdGUpO1xuICAgICAgICByb3V0ZXIucHV0KCcvdjEvYWRtaW4vc2VydmljZS86aWQnLCBjb250cm9sbGVyLnVwZGF0ZSk7XG4gICAgICAgIHJvdXRlci5kZWxldGUoJy92MS9hZG1pbi9zZXJ2aWNlLzppZCcsIGNvbnRyb2xsZXIuZGVhY3RpdmF0ZSk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VSb3V0ZSB9IGZyb20gXCIuL2Jhc2VSb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVycy91c2VyVHlwZUNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJUeXBlUm91dGUgZXh0ZW5kcyBCYXNlUm91dGUge1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBtYXAocm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgcm91dGVyLmdldCgnL3YxL2FkbWluL3VzZXJ0eXBlJywgY29udHJvbGxlci5nZXRBbGwpO1xuICAgICAgICByb3V0ZXIuZ2V0KCcvdjEvYWRtaW4vdXNlcnR5cGUvOmlkJywgY29udHJvbGxlci5nZXRPbmUpO1xuICAgICAgICByb3V0ZXIucG9zdCgnL3YxL2FkbWluL3VzZXJ0eXBlJywgY29udHJvbGxlci5jcmVhdGUpO1xuICAgICAgICByb3V0ZXIucHV0KCcvdjEvYWRtaW4vdXNlcnR5cGUvOmlkJywgY29udHJvbGxlci51cGRhdGUpO1xuICAgICAgICByb3V0ZXIuZGVsZXRlKCcvdjEvYWRtaW4vdXNlcnR5cGUvOmlkJywgY29udHJvbGxlci5kZWFjdGl2YXRlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVJvdXRlIH0gZnJvbSBcIi4vYmFzZVJvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3ZhbGlkQ2xpZW50Q29udHJvbGxlclwiO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRDbGllbnRSb3V0ZSBleHRlbmRzIEJhc2VSb3V0ZSB7XG4gICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG1hcChyb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICByb3V0ZXIuZ2V0KCcvdjEvYWRtaW4vY2xpZW50JywgY29udHJvbGxlci5nZXRBbGwpO1xuICAgICAgICByb3V0ZXIuZ2V0KCcvdjEvYWRtaW4vY2xpZW50LzppZCcsIGNvbnRyb2xsZXIuZ2V0T25lKTtcbiAgICAgICAgcm91dGVyLnBvc3QoJy92MS9hZG1pbi9jbGllbnQnLCBjb250cm9sbGVyLmNyZWF0ZSk7XG4gICAgICAgIHJvdXRlci5wdXQoJy92MS9hZG1pbi9jbGllbnQvOmlkJywgY29udHJvbGxlci51cGRhdGUpO1xuICAgICAgICByb3V0ZXIuZGVsZXRlKCcvdjEvYWRtaW4vY2xpZW50LzppZCcsIGNvbnRyb2xsZXIuZGVhY3RpdmF0ZSk7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2UtdW5pcXVlLXZhbGlkYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9