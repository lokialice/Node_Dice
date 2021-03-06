/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _all = __webpack_require__(29);

var _all2 = _interopRequireDefault(_all);

var _development = __webpack_require__(30);

var _development2 = _interopRequireDefault(_development);

var _production = __webpack_require__(31);

var _production2 = _interopRequireDefault(_production);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// default is development environment
//console.log('process.env.socket: ' + process.env.SOCKET);
// process.env.NODE_ENV = JSON.stringify(process.env.NODE_ENV || 'development');
const config =  true ? Object.assign(_all2.default, _production2.default) : Object.assign(_all2.default, _development2.default);

// Load app configuration
exports.default = config;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _winston = __webpack_require__(38);

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_winston2.default.transports.DailyRotateFile = __webpack_require__(39);

exports.default = new _winston2.default.Logger({
    transports: [new _winston2.default.transports.Console({
        level: 'debug',
        colorize: true
    }), new _winston2.default.transports.DailyRotateFile({
        level: 'silly',
        filename: _path2.default.join(_config2.default.serverRoot, '/logs/access-'),
        datePattern: 'yyyy-MM-dd.log',
        maxsize: 5242880 /* 5MB */
    })]
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _mongoose = __webpack_require__(36);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//   ttl = require('mongoose-ttl');
/**
 * Copyright 2014 Node Dice
 *
 * Created by Neo on 2014/11/27.
 */

_mongoose2.default.connect(_config2.default.mongodb.hostaddress + '/' + _config2.default.mongodb.dbname, { config: { autoIndex: "production" === 'development' } }); //connect to the mongodb driver.

//request the config files.
const db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));

exports.default = {
  db,
  mongoose: _mongoose2.default
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbConnect = __webpack_require__(2);

var _dbConnect2 = _interopRequireDefault(_dbConnect);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _uuid = __webpack_require__(7);

var _uuid2 = _interopRequireDefault(_uuid);

var _coinsConfig = __webpack_require__(5);

var _coinsConfig2 = _interopRequireDefault(_coinsConfig);

var _crypto = __webpack_require__(4);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright 2017 Node Dice
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by Neo on 2017/01/19.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

// import logger from '../helper/logger';
const mongoose = _dbConnect2.default.mongoose;
mongoose.Promise = global.Promise;
/*view models*/
/*user schema*/
const userSchema = new mongoose.Schema({
    userName: { type: String, index: { unique: true } },
    password: { type: String },
    clientSalt: String,
    serverSalt: String,
    nonce: Number,
    createTime: { type: Date },
    funds: [{
        coinName: String,
        depositAmount: Number,
        depositAddress: String,
        withdrawAddress: String,
        withdrawAmount: Number,
        profit: Number
    }]
}, { autoIndex: _config2.default.mongodb.autoIndex });
//Instance methods
userSchema.methods.getFund = function (coinName) {
    for (let i in this.funds) {
        let fund = this.funds[i];
        if (fund.coinName == coinName) return fund;
    }
    return null;
};

userSchema.methods.getBalance = function (coinName) {

    let fund = this.getFund(coinName);
    if (fund) return fund.depositAmount - fund.withdrawAmount + fund.profit;

    return 0;
};

userSchema.methods.addProfit = function (coinName, profit) {

    let fund = this.getFund(coinName);
    if (fund) {
        fund.profit += profit;
        return fund;
    }
};

userSchema.methods.setDeposit = function (coinName, amount) {

    let fund = this.getFund(coinName);
    if (fund && amount) {
        fund.depositAmount = amount;
    }

    return fund;
};

userSchema.methods.getDepositAddr = (() => {
    var _ref = _asyncToGenerator(function* (coinName) {
        let helper = _coinsConfig2.default[coinName];
        const addr = yield helper.GetNewAddress(this._id, coinName);

        this.setDepositAddr(coinName, addr);
        return addr;
    });

    return function (_x) {
        return _ref.apply(this, arguments);
    };
})();

userSchema.methods.setDepositAddr = function (coinName, addr) {

    let fund = this.getFund(coinName);
    if (fund) {
        fund.depositAddress = addr;
        return fund;
    }
};

//Static methods
userSchema.statics = {
    CreateNewUser: (() => {
        var _ref2 = _asyncToGenerator(function* (userName, password) {
            password = _crypto2.default.createHash('sha512').update(password).digest('hex');
            let user = new userModel({
                userName: userName,
                password: password,
                serverSalt: _uuid2.default.v4(),
                clientSalt: _uuid2.default.v4(),
                nonce: 0,
                createTime: new Date(),
                funds: [{
                    coinName: 'BTC',
                    depositAddress: '', depositAmount: 0,
                    withdrawAddress: '', withdrawAmount: 0,
                    profit: 0
                }, {
                    coinName: 'NXT',
                    depositAddress: '', depositAmount: 0,
                    withdrawAddress: '', withdrawAmount: 0,
                    profit: 0
                }]
            });

            return yield user.save();
        });

        return function CreateNewUser(_x2, _x3) {
            return _ref2.apply(this, arguments);
        };
    })(),
    GetUserById: (() => {
        var _ref3 = _asyncToGenerator(function* (userid, fields) {
            return yield userModel.findOne({ _id: userid }, fields);
        });

        return function GetUserById(_x4, _x5) {
            return _ref3.apply(this, arguments);
        };
    })(),
    SaveClientSalt: (() => {
        var _ref4 = _asyncToGenerator(function* (userid, clientSalt) {

            let u = yield userModel.findOne({ _id: userid }, "clientSalt serverSalt");
            let _clientSalt, _serverSalt;
            _clientSalt = u.clientSalt;
            _serverSalt = u.serverSalt;

            u.clientSalt = clientSalt;
            u.serverSalt = _uuid2.default.v4();
            u.nonce = 0;
            yield u.save();
            return { clientSalt: _clientSalt, serverSalt: _serverSalt };
        });

        return function SaveClientSalt(_x6, _x7) {
            return _ref4.apply(this, arguments);
        };
    })(),
    GetNewAddress: (() => {
        var _ref5 = _asyncToGenerator(function* (userid, coinName) {

            let u = yield userModel.findOne({ _id: userid }, "funds");
            const addr = u.getDepositAddr(coinName);
            yield u.save();
            return addr;
        });

        return function GetNewAddress(_x8, _x9) {
            return _ref5.apply(this, arguments);
        };
    })(),
    GetBalance: (() => {
        var _ref6 = _asyncToGenerator(function* (userid) {

            const u = yield userModel.findOne({ _id: userid }, "funds");
            return u.funds;
        });

        return function GetBalance(_x10) {
            return _ref6.apply(this, arguments);
        };
    })(),
    LoginUser: (() => {
        var _ref7 = _asyncToGenerator(function* (userName, password) {
            password = _crypto2.default.createHash('sha512').update(password).digest('hex');
            return yield userModel.findOne({ userName, password }, "_id userName serverSalt clientSalt nonce funds");
        });

        return function LoginUser(_x11, _x12) {
            return _ref7.apply(this, arguments);
        };
    })()
};

const userModel = mongoose.model('User', userSchema);

/*exports models*/
exports.default = userModel;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bitcoinHelper = __webpack_require__(21);

var _bitcoinHelper2 = _interopRequireDefault(_bitcoinHelper);

var _nxtHelper = __webpack_require__(23);

var _nxtHelper2 = _interopRequireDefault(_nxtHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    'BTC': _bitcoinHelper2.default,
    'NXT': _nxtHelper2.default,
    getCoinNames: function () {
        return [{ coinName: 'BTC', min: 0.00000001, max: 1 }, { coinName: 'NXT', min: 1, max: 1000 }];
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Faucet = __webpack_require__(17);

var _Faucet2 = _interopRequireDefault(_Faucet);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import config from '../config';
//import path from 'path';
/**
 * Copyright 2014 Node Dice.
 *
 * Created by Neo on 03/20/2017
 */

exports.default = app => {

    //  const seo_title = 'bit coin btc nxt altcoin dice game';
    app.use((req, res, next) => {
        _logger2.default.info(new Date() + ' Request: ', req.originalUrl);
        next();
    });

    // default page
    app.get('/', (req, res) => {
        res.send('hello node dice');
    });

    // app.get('/Roll_Over_Or_Under', (req, res) => {

    //     res.render('./games/Roll_Over_Or_Under',
    //         { page_title: 'Over or Under? ' + seo_title });
    // });

    // app.get('/Investment', (req, res) => {
    //     res.render('./games/Investment', { page_title: 'Investment ' + seo_title });
    // });

    // app.get('/Verification', (req, res) => {
    //     res.render('./http/Verification', {page_title: 'Verification ' + seo_title});
    // });

    // app.get('/Support', (req, res) => {
    //     res.render('./http/Support', { page_title: 'Support' + seo_title });
    // });

    // app.get('/faq', (req, res) => {
    //     res.render('./http/faq', { page_title: 'Faq ' + seo_title });
    // });

    //verify the response and return new balance if succeeded.
    app.post('/reCaptCha', (req, res) => {
        _Faucet2.default.VerifyResponse(req.session.userid, req.body.g_recaptcha_response, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
            res.end();
        });
    });
    //error handler
    // app.use(require('./views/http/index').http500);
    // app.use(require('./views/http/index').http404);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _middleware = __webpack_require__(28);

var _middleware2 = _interopRequireDefault(_middleware);

var _auth = __webpack_require__(24);

var _auth2 = _interopRequireDefault(_auth);

var _common = __webpack_require__(26);

var _common2 = _interopRequireDefault(_common);

var _dice = __webpack_require__(27);

var _dice2 = _interopRequireDefault(_dice);

var _chat = __webpack_require__(25);

var _chat2 = _interopRequireDefault(_chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = io => {
    (0, _middleware2.default)(io);
    (0, _auth2.default)(io);
    (0, _common2.default)(io);
    (0, _dice2.default)(io);
    (0, _chat2.default)(io);
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _expressValidator = __webpack_require__(13);

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _compression = __webpack_require__(11);

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = __webpack_require__(10);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _http = __webpack_require__(14);

var _http2 = _interopRequireDefault(_http);

var _socket = __webpack_require__(15);

var _socket2 = _interopRequireDefault(_socket);

var _routes = __webpack_require__(8);

var _routes2 = _interopRequireDefault(_routes);

var _sockets = __webpack_require__(9);

var _sockets2 = _interopRequireDefault(_sockets);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright 2017 Node Dice
 *
 * Created by Neo on 2017/02/08
 */

//import newrelic from 'newrelic';
//import cluster from 'cluster');
const app = (0, _express2.default)();

/*require socket.io*/

// import cookieParser from 'cookie-parser';
// import session from 'express-session';
// import MongoConnect from 'connect-mongo';
// import socketHandshake from 'socket.io-handshake';

//favicon from 'serve-favicon'),
const server = _http2.default.createServer(app);

const io = (0, _socket2.default)(server, { cookie: 'dSession', cookiePath: '/', cookieHttpOnly: true });
//config express in all environments
app.disable('x-powered-by');

//Add express's middlewares
//app.use(favicon(config.clientRoot + '/favicon.ico'));
//Only used in development. In production, use nginx to serve static files
if (false) {
    app.use(_express2.default.static(_config2.default.clientRoot));
    app.use((0, _compression2.default)({ threshold: 512 }));
}
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _expressValidator2.default)([]));

//map routes for pages
(0, _routes2.default)(app);
//socket communication for games
(0, _sockets2.default)(io);

server.listen(_config2.default.port, function () {
    _logger2.default.info('Server running on port ' + _config2.default.port);
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _request = __webpack_require__(37);

var _request2 = _interopRequireDefault(_request);

var _faucetModel = __webpack_require__(20);

var _faucetModel2 = _interopRequireDefault(_faucetModel);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    VerifyResponse: function (userid, response, callback) {

        _request2.default.post({
            url: 'https://www.google.com/recaptcha/api/siteverify',
            form: {
                'secret': '6LeD4QMTAAAAAEWzJqieM9nJIhlIDygbrx0IOyUk',
                'response': response
            },
            method: 'POST',
            proxy: _config2.default.faucet.proxy
        }, (err, httpResponse, body) => {
            let re = JSON.parse(body);
            if (re.success) {
                _faucetModel2.default.GetPay(userid, function (err, result) {
                    callback(err, result);
                });
            } else {
                callback(null, { code: -1 }); //verify failed. no bitcoin;
            }
        });
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbConnect = __webpack_require__(2);

var _dbConnect2 = _interopRequireDefault(_dbConnect);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright 2017 Node Dice
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by Neo on 2017/02/24.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

const mongoose = _dbConnect2.default.mongoose;
//const db = dbConnect.db;
/*bet schema*/
const betSchema = new mongoose.Schema({
    userid: String,
    userName: String,
    clientSalt: String,
    serverSalt: String,
    nonce: Number,
    amount: Number,
    selNum: Number,
    unit: String,
    betTime: { type: Date, expires: 60 * 60 * 24 * 30, index: true },
    rollNum: Number,
    profit: Number,
    payout: Number
}, { autoIndex: _config2.default.mongodb.autoIndex });
//Static methods
betSchema.statics = {
    getBetsByUser: (() => {
        var _ref = _asyncToGenerator(function* (userid) {
            return yield betModel.find({ userid }, 'userid userName rollNum nonce betTime selNum amount unit profit payout').sort({ betTime: -1 }).limit(100);
        });

        return function getBetsByUser(_x) {
            return _ref.apply(this, arguments);
        };
    })(),
    getAllBets: (() => {
        var _ref2 = _asyncToGenerator(function* () {
            return yield betModel.find({}, '_id userid userName rollNum nonce betTime selNum amount unit profit payout').sort({ betTime: -1 }).limit(100);
        });

        return function getAllBets() {
            return _ref2.apply(this, arguments);
        };
    })(),
    getPayout: function (selNum) {
        return selNum <= 49.5 ? 99 / selNum : 99 / (99.99 - selNum);
    }

};

const betModel = mongoose.model('Bet', betSchema);

exports.default = betModel;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbConnect = __webpack_require__(2);

var _dbConnect2 = _interopRequireDefault(_dbConnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const mongoose = _dbConnect2.default.mongoose;
mongoose.Promise = global.Promise;
/*chat schema*/
const chatSchema = new mongoose.Schema({
    userName: String,
    timeStamp: { type: Date, expires: 60 * 60 * 24 * 7 }, //msg expired in a week
    message: String
});

const chatModel = mongoose.model('Chat', chatSchema);

exports.default = {
    Chat: chatModel,
    GetChats: (() => {
        var _ref = _asyncToGenerator(function* () {
            return yield chatModel.find({}, 'userName timeStamp message').sort({ timeStamp: -1 }).limit(100);
        });

        return function GetChats() {
            return _ref.apply(this, arguments);
        };
    })(),
    AddChat: (() => {
        var _ref2 = _asyncToGenerator(function* (chat) {
            const c = new chatModel({
                userName: chat.userName,
                timeStamp: chat.timeStamp,
                message: chat.message
            });

            yield c.save();
        });

        return function AddChat(_x) {
            return _ref2.apply(this, arguments);
        };
    })()
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbConnect = __webpack_require__(2);

var _dbConnect2 = _interopRequireDefault(_dbConnect);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _userModel = __webpack_require__(3);

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongoose = _dbConnect2.default.mongoose;

const faucetSchema = new mongoose.Schema({
    lastTime: Date,
    userid: String
});
/*Static methods*/
faucetSchema.statics = {
    GetPay: (userid, callback) => {
        _userModel2.default.GetUserById(userid, 'funds', (err, u) => {
            if (err) {
                callback(err, null);
            } else {
                faucetModel.findOne({ userid: userid }, 'lastTime', (err, fa) => {
                    let now = new Date();
                    if (!fa) {
                        fa = new faucetModel({
                            userid: userid,
                            lastTime: now
                        });
                    }

                    if (now == fa.lastTime || now - fa.lastTime >= _config2.default.faucet.interval) {
                        //send out bitcoin every 15 minutes

                        fa.lastTime = now;
                        fa.save();

                        let amount = randomIntInc(_config2.default.faucet.min, _config2.default.faucet.max);
                        u.addProfit('BTC', amount * 0.00000001);
                        u.save();

                        callback(null, { code: 0, faucet: amount, balance: u.getBalance('BTC') });
                    } else {
                        callback(null, { code: -2, lastTime: fa.lastTime }); //too soon
                    }
                });
            }
        });
    }
};
/*functions*/
const randomIntInc = (low, high) => {
    return Math.floor(Math.random() * (high - low + 1) + low);
};
const faucetModel = mongoose.model('Faucet', faucetSchema);

exports.default = faucetModel;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bitcoin = __webpack_require__(33);

var _bitcoin2 = _interopRequireDefault(_bitcoin);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const client = new _bitcoin2.default.Client(_config2.default.bitcoin);
exports.default = {
    GetNewAddress: userid => {
        return new Promise((resovle, reject) => {
            client.getNewAddress(userid, resovle, reject);
        });
    },
    GetBalance:
    //(userid) => {
    () => {
        //mini confirmation is 2, BTC only
        //Altcoin may need bigger confirmations.

        // if (process.env.NODE_ENV == "development")
        //     //In development, return 10 BTC for testing.
        return 10;
        // else
        //     client.getReceivedByAccount(userid, 2, callback);
    },
    WithdrawFunds: (userid, unit) => {
        //dummy code for lint rules
        userid = '';
        unit = 'BTC';

        return unit;
    }

};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _crypto = __webpack_require__(4);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (key, text) => {

    //create HMAC using server seed as key and client seed as message
    let hash = _crypto2.default.createHmac('sha512', key).update(text).digest('hex');

    let index = 0;

    let lucky = parseInt(hash.substring(index * 5, index * 5 + 5), 16);

    //keep grabbing characters from the hash while greater than 
    while (lucky >= Math.pow(10, 6)) {
        index++;
        lucky = parseInt(hash.substring(index * 5, index * 5 + 5), 16);

        //if we reach the end of the hash, just default to highest number
        if (index * 5 + 5 > 128) {
            lucky = 99.99;
            break;
        }
    }

    lucky %= Math.pow(10, 4);
    lucky /= Math.pow(10, 2);

    return lucky;
}; //the seed pair itself
//var clientSeed = "your client seed"; //dont forget to exclude the dash and the nonce!
//var serverSeed = "your server seed";

//bet made with seed pair (excluding current bet)
//var nonce = 0;

//crypto lib for hmac function

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = __webpack_require__(7);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    GetNewAddress: (userid, callback) => {
        callback(null, _uuid2.default.v4());
    },
    GetBalance: // (userid) => {
    () => {
        //mini confirmation is 2, BTC only
        //Altcoin may need bigger confirmations.

        // if (process.env.NODE_ENV == "development")
        //     //In development, return 10 BTC for testing.
        return 1000000;
        // else
        //     callback(null, 0);
    },
    WithdrawFunds: (userid, unit) => {
        //dummy code for lint rules
        userid = '';
        unit = 'NXT';

        return unit;
    }

};
// import config from '../../config';

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _userModel = __webpack_require__(3);

var _userModel2 = _interopRequireDefault(_userModel);

var _crypto = __webpack_require__(4);

var _crypto2 = _interopRequireDefault(_crypto);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _jsonwebtoken = __webpack_require__(34);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = io => {

    io.on('connection', socket => {

        socket.on('AUTHENTICATE', (() => {
            var _ref = _asyncToGenerator(function* ({ user }) {
                try {
                    let loggedUser = yield _userModel2.default.LoginUser(user.userName, user.password);

                    if (!loggedUser) {
                        socket.emit('action', { type: 'ERROR', message: 'Wrong user name and password combination.' });
                        return;
                    }
                    loggedUser = {
                        userid: loggedUser._id,
                        userName: loggedUser.userName,
                        clientSalt: loggedUser.clientSalt,
                        funds: loggedUser.funds,
                        nonce: loggedUser.nonce,
                        hashedServerSalt: _crypto2.default.createHash('sha512').update(loggedUser.serverSalt).digest('hex')
                    };
                    socket.user = { userid: loggedUser.userid, userName: loggedUser.userName, loginTime: new Date().toUTCString() };
                    const token = _jsonwebtoken2.default.sign(socket.user, _config2.default.jwtSecret, { algorithm: 'HS256', expiresIn: 60 });
                    socket.emit('action', { socket: 'broadcast', type: 'LOGGED_USER', user: loggedUser, token });
                } catch (err) {
                    _logger2.default.error(err);
                    socket.emit('action', { type: 'ERROR', message: 'Internal error. Try later.' });
                }
            });

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        })());
    });
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _chatModel = __webpack_require__(19);

var _chatModel2 = _interopRequireDefault(_chatModel);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const chat = io => {
    io.on('connection', socket => {
        socket.on('GET_CHATS', _asyncToGenerator(function* () {
            try {
                const messages = yield _chatModel2.default.GetChats();
                socket.emit('action', { type: 'RECV_MESSAGES', messages });
            } catch (err) {
                _logger2.default.error(err);
            }
        }));

        socket.on('SEND_MESSAGE', (() => {
            var _ref2 = _asyncToGenerator(function* (chat) {
                if (socket.user) {
                    chat.userName = socket.user.userName;
                    chat.timeStamp = new Date();
                    try {
                        yield _chatModel2.default.AddChat(chat);
                        io.emit('action', {
                            type: 'RECV_MESSAGE', message: {
                                userName: chat.userName,
                                timeStamp: chat.timeStamp,
                                message: chat.message
                            }
                        });
                    } catch (err) {
                        _logger2.default.error(err);
                    }
                }
            });

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        })());
    });
};

exports.default = chat;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _userModel = __webpack_require__(3);

var _userModel2 = _interopRequireDefault(_userModel);

var _coinsConfig = __webpack_require__(5);

var _coinsConfig2 = _interopRequireDefault(_coinsConfig);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright 2017 Node Dice
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by Neo on 2017/01/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


exports.default = io => {

    //socket.io events
    io.on('connection', socket => {

        socket.on('GET_COINNAMES', () => socket.emit('action', { type: 'SET_COINNAMES', coins: _coinsConfig2.default.getCoinNames() }));

        //return a new user
        socket.on('SIGNUP_USER', (() => {
            var _ref = _asyncToGenerator(function* (u) {

                try {
                    const user = yield _userModel2.default.CreateNewUser(u.userName, u.password);
                    const newUser = {
                        userid: user._id,
                        userName: user.userName,
                        clientSalt: user.clientSalt,
                        funds: user.funds,
                        nonce: 0,
                        hashedServerSalt: crypto.createHash('sha512').update(user.serverSalt).digest('hex')
                    };
                    socket.user = { userid: newUser.userid, userName: newUser.userName };
                    socket.emit('action', { type: 'NEW_USER', user: newUser });
                } catch (err) {
                    if (err.code == 11000) socket.emit('action', { type: 'ERROR', errorCode: 11000 });else {
                        _logger2.default.error(err);
                        socket.emit('action', { type: 'ERROR', message: 'Internal error. Try later.' });
                    }
                }
            });

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        })());

        //return an existing user
        // socket.on('existingUser', async () => {
        //     try {
        //         const u = await userModel.GetUserById(socket.user.userid, "clientSalt serverSalt _id userName funds nonce");

        //         if (u) {
        //             socket.emit('existingUser', {
        //                 userid: u._id,
        //                 userName: u.userName,
        //                 clientSalt: u.clientSalt,
        //                 funds: u.funds,
        //                 nonce: u.nonce,
        //                 hashedServerSalt: crypto.createHash('sha512').update(u.serverSalt).digest('hex')
        //             });
        //         }
        //         else {
        //             socket.emit('existingUser', { clientSalt: '', error: 'session expired' });
        //         }
        //     }
        //     catch (err) {
        //         logger.error(err);
        //         socket.emit('action', {type: 'ERROR', message: err });
        //     }
        // });


        //get new bitcion address
        socket.on('NEW_COINADDR', (() => {
            var _ref2 = _asyncToGenerator(function* (coinName) {

                try {
                    const addr = yield _userModel2.default.GetNewAddress(socket.user.userid, coinName);
                    socket.emit('NEW_COINADDR', addr);
                } catch (err) {
                    _logger2.default.error(err);
                    socket.emit('action', { type: 'ERROR', message: err });
                }
            });

            return function (_x2) {
                return _ref2.apply(this, arguments);
            };
        })());

        //get user balance
        socket.on('REFRESH_BALANCE', _asyncToGenerator(function* () {

            try {
                const funds = yield _userModel2.default.GetBalance(socket.user.userid);
                socket.emit('action', { type: 'REFRESH_BALANCE', funds });
            } catch (err) {
                _logger2.default.info(err);
                socket.emit('action', { type: 'ERROR', message: 'Internal error. Try later.' });
            }
        }));
    });
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _userModel = __webpack_require__(3);

var _userModel2 = _interopRequireDefault(_userModel);

var _betModel = __webpack_require__(18);

var _betModel2 = _interopRequireDefault(_betModel);

var _cryptoroll = __webpack_require__(22);

var _cryptoroll2 = _interopRequireDefault(_cryptoroll);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _lodash = __webpack_require__(35);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright 2017 Node Dice
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by Neo on 2017/03/27.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

//import config from '../../config';


const dice = io => {

    io.on('connection', socket => {
        const gameName = 'dice';
        socket.join(gameName);

        //return a 
        socket.on('ROLL', (() => {
            var _ref = _asyncToGenerator(function* (action) {
                const clientBet = action.bet;
                try {
                    let u = yield _userModel2.default.GetUserById(socket.user.userid, "clientSalt serverSalt nonce funds");
                    //validate input
                    if (!_lodash2.default.isNumber(clientBet.w - 0)) {
                        socket.emit('action', { type: 'ERROR', errorCode: -3 });
                        return;
                    }

                    if (clientBet.w <= 0) {
                        socket.emit('action', { type: 'ERROR', errorCode: -2 });
                        return;
                    }
                    if (u.getBalance(clientBet.coinName) < clientBet.w) {
                        // not enough fund
                        socket.emit('action', { type: 'ERROR', errorCode: -1 });
                        return;
                    }

                    //increase nonce
                    u.nonce++;

                    //get lucky number
                    let rollNum = (0, _cryptoroll2.default)(u.serverSalt, u.clientSalt + '-' + u.nonce);
                    const payout = _betModel2.default.getPayout(clientBet.sn);
                    const profit = GetProfit(rollNum, clientBet.sn, clientBet.w, payout);
                    let bet = new _betModel2.default({
                        userid: socket.user.userid,
                        userName: socket.user.userName,
                        clientSalt: u.clientSalt,
                        serverSalt: u.serverSalt,
                        nonce: u.nonce,
                        amount: clientBet.w,
                        selNum: clientBet.sn,
                        coinName: clientBet.coinName,
                        betTime: new Date(),
                        rollNum,
                        profit,
                        payout
                    });
                    try {
                        bet = yield bet.save();
                    } catch (err) {
                        _logger2.default.error('Saving bet error:' + err);
                        socket.emit('action', { type: 'ERROR', errorCode: -4 });
                        return;
                    }

                    //Todo: process bet's result here
                    u.addProfit(clientBet.coinName, profit);
                    try {

                        yield u.save();
                    } catch (err) {
                        _logger2.default.error('Saving user profit error:' + err);
                        socket.emit('action', { type: 'ERROR', errorCode: -5 });
                        return;
                    }

                    //Every bet is sent to everyone who is in over/under game. 
                    const result = {
                        userid: socket.user.userid,
                        userName: socket.user.userName,
                        rollNum,
                        nonce: u.nonce,
                        betid: bet._id,
                        betTime: bet.betTime,
                        selNum: bet.selNum,
                        amount: bet.amount,
                        coinName: clientBet.coinName,
                        profit,
                        payout
                    };

                    io.volatile.to(gameName).emit('action', { type: 'ROLLED', bet: result });
                } catch (err) {
                    _logger2.default.error(err);
                    socket.emit('action', { type: 'ERROR', errorCode: -6 });
                }
            });

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        })());

        socket.on('GET_MYBETS', _asyncToGenerator(function* () {

            try {
                const bets = yield _betModel2.default.getBetsByUser(socket.user.userid);
                socket.emit('getMyBets', bets);
            } catch (err) {
                _logger2.default.error('GetBetsByUser error:' + err);
            }
        }));

        socket.on('GET_ALLBETS', _asyncToGenerator(function* () {
            try {
                const bets = yield _betModel2.default.getAllBets();
                socket.emit('action', { type: 'RECV_ALLBETS', bets });
            } catch (err) {
                _logger2.default.error('getAllBets error:' + err);
            }
        }));

        //update client salt
        socket.on('SAVE_CLIENTSALT', (() => {
            var _ref4 = _asyncToGenerator(function* (clientSalt) {

                try {
                    const oldSalt = yield _userModel2.default.SaveClientSalt(socket.user.userid, clientSalt);

                    socket.emit('action', { type: 'CLIENT_SALT', salt: oldSalt });
                } catch (err) {
                    socket.emit('action', { type: 'ERROR', message: err });
                }
            });

            return function (_x2) {
                return _ref4.apply(this, arguments);
            };
        })());

        //functions
        const GetProfit = (rollNum, selNum, amount, payout) => {

            if (selNum * 1 <= 49.5 && rollNum * 1 <= selNum * 1 || selNum * 1 >= 50.49 && rollNum * 1 >= selNum * 1) {
                return amount * (payout - 1);
            } else {
                return -1 * amount;
            }
        };
    });
};

exports.default = dice;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = io => {
    //Add all events that need user to be authenticated
    const authEvents = [
    //user profile
    'SAVE_CLIENTSALT', 'NEW_COINADDR', 'REFRESH_BALANCE',
    //chat
    'SEND_MESSAGE',
    //dice
    'ROLL', 'GET_MYBETS'];
    _logger2.default.info("Web socket is enabled for following domain1(s): " + _config2.default.origins);
    io.origins(_config2.default.origins);

    io.on('connection', socket => {
        //authenticate users for specified events
        socket.use(function (packet, next) {
            if (authEvents.indexOf(packet[0]) > -1 && (!socket.user || !socket.user.userid)) {
                socket.emit('INVALID_USER');
                return;
            }
            next();
        });

        //throttle control
        socket.use(function (packet, next) {

            next();
        });
    });
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _package = __webpack_require__(32);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rootPath = _path2.default.resolve('.');
const config = {
    root: rootPath,
    serverRoot: rootPath + '/',
    clientRoot: rootPath + '/html/',
    jwtSecret: 'node_DICE',
    port: process.env.PORT || 3000,
    app: {
        name:  true ? _package2.default.name + ' (' + _package2.default.version + ')' : _package2.default.name + ' [' + _package2.default.version + ']',
        version: _package2.default.version,
        description: _package2.default.description
    },
    mail: {
        enable: true,
        transport: 'SMTP',
        fromaddress: '',
        options: {
            host: "smtp.gmail.com",
            port: 465,
            secureConnection: true,
            requiresAuth: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        }
    },
    session: {
        timeout: 30 * 24 * 60 * 60 * 1000
    },
    support: '',
    projectName: '',
    copyrightName: ''
};

exports.default = config;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

const config = {
    mongodb: {
        hostaddress: 'mongodb://localhost',
        port: 27017,
        dbname: 'node_dice'
    },
    // mongoStore: {
    //     url: 'mongodb://localhost/node_dice',
    //     autoRemove: 'interval',
    //     autoRemoveInterval: 10 // In minutes. Default 
    // },
    bitcoin: {
        host: 'rpc.blockchain.info',
        port: 443,
        ssl: true,
        user: process.env.bitcoinUser,
        pass: process.env.bitcoinPwd
    },
    faucet: {
        interval: 15 * 60 * 1000,
        min: 100,
        max: 500,
        proxy: null //try to use proxy to connect to google if blocked
    },
    origins: "*:*"
};

exports.default = config;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
const config = {
    mongodb: {
        hostaddress: 'mongodb://mongo',
        port: 27017,
        dbname: 'node_dice',
        autoIndex: false
    },
    // mongoStore: {
    //     url: 'mongodb://localhost/node_dice',
    //     autoRemove: 'interval',
    //     autoRemoveInterval: 10 // In minutes. Default 
    // },
    port: 3000,
    origins: "*:*", //For security, it's better to set origins in prod
    bitcoin: {
        host: 'rpc.blockchain.info',
        port: 443,
        ssl: true,
        user: process.env.bitcoinUser,
        pass: process.env.bitcoinPwd
    },
    faucet: {
        interval: 15 * 60 * 1000,
        min: 100,
        max: 500,
        proxy: null //try to use proxy to connect to google if blocked
    }

};

exports.default = config;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
	"name": "nodedice_server",
	"description": "An open source dice game faucet built on node.js for BTC/NXT",
	"version": "2.0.3",
	"keywords": [
		"open source",
		"node.js",
		"nodejs dice bitcoin btc faucet"
	],
	"homepage": "https://github.com/popmanhe/node_dice",
	"author": "Neo He",
	"repository": {
		"type": "git",
		"url": "https://github.com/popmanhe/node_dice"
	},
	"scripts": {
		"start": "npm-run-all --parallel open:src run:dev lint:watch",
		"build": "npm-run-all open:dist run:prod",
		"prod": "npm-run-all open:dist",
		"open:src": "babel-node tools/srcServer.js",
		"open:dist": "babel-node tools/distServer.js",
		"run:dev": "nodemon dev/nodeDiceServer.js --watch dev",
		"run:prod": "pm2 start dist/nodeDiceServer.js",
		"lint": "esw src --color",
		"lint:watch": "npm run lint -- --watch"
	},
	"config": {
		"unsafe-perm": true
	},
	"bugs": {
		"url": "https://github.com/popmanhe/node_dice/issues",
		"email": "popman.he@gmail.com"
	},
	"license": "MIT BSD",
	"dependencies": {
		"bitcoin": "^3.0.1",
		"blockchain.info": "^2.6.0",
		"body-parser": "^1.16.0",
		"bson": "^1.0.4",
		"compression": "^1.6.2",
		"connect-mongo": "^1.3.2",
		"cookie-parser": "^1.3.3",
		"cookieparser": "^0.1.0",
		"debug": "^2.6.0",
		"errorhandler": "^1.5.0",
		"express": "^4.15.2",
		"express-session": "^1.15.0",
		"express-validator": "^3.1.2",
		"jsonwebtoken": "^7.4.0",
		"lodash": "^4.17.4",
		"lru-cache": "^4.0.2",
		"method-override": "^2.3.8",
		"mongodb": "^2.2.26",
		"mongoose": "^4.9.5",
		"morgan": "^1.8.1",
		"nodemailer": "4.0.1",
		"request": "^2.81.0",
		"serve-favicon": "^2.4.2",
		"should": "^11.2.1",
		"socket.io": "^1.7.3",
		"uuid": "^3.0.1",
		"winston": "^2.3.1",
		"winston-daily-rotate-file": "^1.4.6"
	},
	"devDependencies": {
		"babel-cli": "^6.24.1",
		"babel-eslint": "^7.2.2",
		"babel-loader": "^7.0.0",
		"babel-preset-env": "^1.3.3",
		"debug": "2.6.3",
		"eslint": "3.19.0",
		"eslint-plugin-import": "2.2.0",
		"eslint-plugin-node": "4.2.2",
		"eslint-watch": "3.1.0",
		"nodemon": "^1.11.0",
		"npm-run-all": "4.0.2",
		"webpack": "2.3.3",
		"webpack-bundle-analyzer": "2.4.0",
		"webpack-dev-middleware": "1.10.1",
		"webpack-hot-middleware": "2.18.0",
		"webpack-md5-hash": "0.0.5"
	}
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("bitcoin");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("winston-daily-rotate-file");

/***/ })
/******/ ]);