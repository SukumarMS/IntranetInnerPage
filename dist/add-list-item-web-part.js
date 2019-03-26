define("40c027de-7e35-441d-a789-ca5f8d776ed3_0.0.1", ["jquery","@microsoft/sp-webpart-base","bootstrap","@microsoft/sp-loader","AddListItemWebPartStrings"], function(__WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_47__, __WEBPACK_EXTERNAL_MODULE_83__, __WEBPACK_EXTERNAL_MODULE_84__, __WEBPACK_EXTERNAL_MODULE_107__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var pnplibconfig_1 = __webpack_require__(4);
function extractWebUrl(candidateUrl) {
    if (candidateUrl === null) {
        return "";
    }
    var index = candidateUrl.indexOf("_api/");
    if (index > -1) {
        return candidateUrl.substr(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}
exports.extractWebUrl = extractWebUrl;
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
     * Gets a callback function which will maintain context across async calls.
     * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
     *
     * @param context The object that will be the 'this' value in the callback
     * @param method The method to which we will apply the context and parameters
     * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
     */
    Util.getCtxCallback = function (context, method) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        return function () {
            method.apply(context, params);
        };
    };
    /**
     * Tests if a url param exists
     *
     * @param name The name of the url paramter to check
     */
    Util.urlParamExists = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        return regex.test(location.search);
    };
    /**
     * Gets a url param value by name
     *
     * @param name The name of the paramter for which we want the value
     */
    Util.getUrlParamByName = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    /**
     * Gets a url param by name and attempts to parse a bool value
     *
     * @param name The name of the paramter for which we want the boolean value
     */
    Util.getUrlParamBoolByName = function (name) {
        var p = this.getUrlParamByName(name);
        var isFalse = (p === "" || /false|0/i.test(p));
        return !isFalse;
    };
    /**
     * Inserts the string s into the string target as the index specified by index
     *
     * @param target The string into which we will insert s
     * @param index The location in target to insert s (zero based)
     * @param s The string to insert into target at position index
     */
    Util.stringInsert = function (target, index, s) {
        if (index > 0) {
            return target.substring(0, index) + s + target.substring(index, target.length);
        }
        return s + target;
    };
    /**
     * Adds a value to a date
     *
     * @param date The date to which we will add units, done in local time
     * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
     * @param units The amount to add to date of the given interval
     *
     * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
     */
    Util.dateAdd = function (date, interval, units) {
        var ret = new Date(date); // don't change original date
        switch (interval.toLowerCase()) {
            case "year":
                ret.setFullYear(ret.getFullYear() + units);
                break;
            case "quarter":
                ret.setMonth(ret.getMonth() + 3 * units);
                break;
            case "month":
                ret.setMonth(ret.getMonth() + units);
                break;
            case "week":
                ret.setDate(ret.getDate() + 7 * units);
                break;
            case "day":
                ret.setDate(ret.getDate() + units);
                break;
            case "hour":
                ret.setTime(ret.getTime() + units * 3600000);
                break;
            case "minute":
                ret.setTime(ret.getTime() + units * 60000);
                break;
            case "second":
                ret.setTime(ret.getTime() + units * 1000);
                break;
            default:
                ret = undefined;
                break;
        }
        return ret;
    };
    /**
     * Loads a stylesheet into the current page
     *
     * @param path The url to the stylesheet
     * @param avoidCache If true a value will be appended as a query string to avoid browser caching issues
     */
    Util.loadStylesheet = function (path, avoidCache) {
        if (avoidCache) {
            path += "?" + encodeURIComponent((new Date()).getTime().toString());
        }
        var head = document.getElementsByTagName("head");
        if (head.length > 0) {
            var e = document.createElement("link");
            head[0].appendChild(e);
            e.setAttribute("type", "text/css");
            e.setAttribute("rel", "stylesheet");
            e.setAttribute("href", path);
        }
    };
    /**
     * Combines an arbitrary set of paths ensuring that the slashes are normalized
     *
     * @param paths 0 to n path parts to combine
     */
    Util.combinePaths = function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i] = arguments[_i];
        }
        return paths
            .filter(function (path) { return !Util.stringIsNullOrEmpty(path); })
            .map(function (path) { return path.replace(/^[\\|\/]/, "").replace(/[\\|\/]$/, ""); })
            .join("/")
            .replace(/\\/g, "/");
    };
    /**
     * Gets a random string of chars length
     *
     * @param chars The length of the random string to generate
     */
    Util.getRandomString = function (chars) {
        var text = new Array(chars);
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < chars; i++) {
            text[i] = possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text.join("");
    };
    /**
     * Gets a random GUID value
     *
     * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */
    /* tslint:disable no-bitwise */
    Util.getGUID = function () {
        var d = new Date().getTime();
        var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return guid;
    };
    /* tslint:enable */
    /**
     * Determines if a given value is a function
     *
     * @param candidateFunction The thing to test for being a function
     */
    Util.isFunction = function (candidateFunction) {
        return typeof candidateFunction === "function";
    };
    /**
     * @returns whether the provided parameter is a JavaScript Array or not.
    */
    Util.isArray = function (array) {
        if (Array.isArray) {
            return Array.isArray(array);
        }
        return array && typeof array.length === "number" && array.constructor === Array;
    };
    /**
     * Determines if a string is null or empty or undefined
     *
     * @param s The string to test
     */
    Util.stringIsNullOrEmpty = function (s) {
        return typeof s === "undefined" || s === null || s.length < 1;
    };
    /**
     * Provides functionality to extend the given object by doing a shallow copy
     *
     * @param target The object to which properties will be copied
     * @param source The source object from which properties will be copied
     * @param noOverwrite If true existing properties on the target are not overwritten from the source
     *
     */
    Util.extend = function (target, source, noOverwrite) {
        if (noOverwrite === void 0) { noOverwrite = false; }
        if (source === null || typeof source === "undefined") {
            return target;
        }
        // ensure we don't overwrite things we don't want overwritten
        var check = noOverwrite ? function (o, i) { return !(i in o); } : function () { return true; };
        return Object.getOwnPropertyNames(source)
            .filter(function (v) { return check(target, v); })
            .reduce(function (t, v) {
            t[v] = source[v];
            return t;
        }, target);
    };
    /**
     * Determines if a given url is absolute
     *
     * @param url The url to check to see if it is absolute
     */
    Util.isUrlAbsolute = function (url) {
        return /^https?:\/\/|^\/\//i.test(url);
    };
    /**
     * Ensures that a given url is absolute for the current web based on context
     *
     * @param candidateUrl The url to make absolute
     *
     */
    Util.toAbsoluteUrl = function (candidateUrl) {
        return new Promise(function (resolve) {
            if (Util.isUrlAbsolute(candidateUrl)) {
                // if we are already absolute, then just return the url
                return resolve(candidateUrl);
            }
            if (pnplibconfig_1.RuntimeConfig.spBaseUrl !== null) {
                // base url specified either with baseUrl of spfxContext config property
                return resolve(Util.combinePaths(pnplibconfig_1.RuntimeConfig.spBaseUrl, candidateUrl));
            }
            if (typeof global._spPageContextInfo !== "undefined") {
                // operating in classic pages
                if (global._spPageContextInfo.hasOwnProperty("webAbsoluteUrl")) {
                    return resolve(Util.combinePaths(global._spPageContextInfo.webAbsoluteUrl, candidateUrl));
                }
                else if (global._spPageContextInfo.hasOwnProperty("webServerRelativeUrl")) {
                    return resolve(Util.combinePaths(global._spPageContextInfo.webServerRelativeUrl, candidateUrl));
                }
            }
            // does window.location exist and have a certain path part in it?
            if (typeof global.location !== "undefined") {
                var baseUrl_1 = global.location.toString().toLowerCase();
                ["/_layouts/", "/siteassets/"].forEach(function (s) {
                    var index = baseUrl_1.indexOf(s);
                    if (index > 0) {
                        return resolve(Util.combinePaths(baseUrl_1.substr(0, index), candidateUrl));
                    }
                });
            }
            return resolve(candidateUrl);
        });
    };
    return Util;
}());
exports.Util = Util;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var collections_1 = __webpack_require__(9);
var utils_1 = __webpack_require__(10);
var exceptions_1 = __webpack_require__(2);
var logging_1 = __webpack_require__(5);
var queryable_1 = __webpack_require__(20);
var pipeline_1 = __webpack_require__(21);
var httpclient_1 = __webpack_require__(22);
/**
 * SharePointQueryable Base Class
 *
 */
var SharePointQueryable = /** @class */ (function (_super) {
    __extends(SharePointQueryable, _super);
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param baseUrl A string or SharePointQueryable that should form the base part of the url
     *
     */
    function SharePointQueryable(baseUrl, path) {
        var _this = _super.call(this) || this;
        _this._options = {};
        _this._query = new collections_1.Dictionary();
        _this._batch = null;
        if (typeof baseUrl === "string") {
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            var urlStr = baseUrl;
            if (util_1.Util.isUrlAbsolute(urlStr) || urlStr.lastIndexOf("/") < 0) {
                _this._parentUrl = urlStr;
                _this._url = util_1.Util.combinePaths(urlStr, path);
            }
            else if (urlStr.lastIndexOf("/") > urlStr.lastIndexOf("(")) {
                // .../items(19)/fields
                var index = urlStr.lastIndexOf("/");
                _this._parentUrl = urlStr.slice(0, index);
                path = util_1.Util.combinePaths(urlStr.slice(index), path);
                _this._url = util_1.Util.combinePaths(_this._parentUrl, path);
            }
            else {
                // .../items(19)
                var index = urlStr.lastIndexOf("(");
                _this._parentUrl = urlStr.slice(0, index);
                _this._url = util_1.Util.combinePaths(urlStr, path);
            }
        }
        else {
            var q = baseUrl;
            _this._parentUrl = q._url;
            _this._options = q._options;
            var target = q._query.get("@target");
            if (target !== null) {
                _this._query.add("@target", target);
            }
            _this._url = util_1.Util.combinePaths(_this._parentUrl, path);
        }
        return _this;
    }
    /**
     * Blocks a batch call from occuring, MUST be cleared by calling the returned function
     */
    SharePointQueryable.prototype.addBatchDependency = function () {
        if (this.hasBatch) {
            return this._batch.addDependency();
        }
        return function () { return null; };
    };
    Object.defineProperty(SharePointQueryable.prototype, "hasBatch", {
        /**
         * Indicates if the current query has a batch associated
         *
         */
        get: function () {
            return this._batch !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharePointQueryable.prototype, "batch", {
        /**
         * The batch currently associated with this query or null
         *
         */
        get: function () {
            return this.hasBatch ? this._batch : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new instance of the supplied factory and extends this into that new instance
     *
     * @param factory constructor for the new SharePointQueryable
     */
    SharePointQueryable.prototype.as = function (factory) {
        var o = new factory(this._url, null);
        return util_1.Util.extend(o, this, true);
    };
    /**
     * Adds this query to the supplied batch
     *
     * @example
     * ```
     *
     * let b = pnp.sp.createBatch();
     * pnp.sp.web.inBatch(b).get().then(...);
     * b.execute().then(...)
     * ```
     */
    SharePointQueryable.prototype.inBatch = function (batch) {
        if (this._batch !== null) {
            throw new exceptions_1.AlreadyInBatchException();
        }
        this._batch = batch;
        return this;
    };
    /**
     * Gets the full url with query information
     *
     */
    SharePointQueryable.prototype.toUrlAndQuery = function () {
        var aliasedParams = new collections_1.Dictionary();
        var url = this.toUrl().replace(/'!(@.*?)::(.*?)'/ig, function (match, labelName, value) {
            logging_1.Logger.write("Rewriting aliased parameter from match " + match + " to label: " + labelName + " value: " + value, logging_1.LogLevel.Verbose);
            aliasedParams.add(labelName, "'" + value + "'");
            return labelName;
        });
        // inlude our explicitly set query string params
        aliasedParams.merge(this._query);
        if (aliasedParams.count() > 0) {
            url += "?" + aliasedParams.getKeys().map(function (key) { return key + "=" + aliasedParams.get(key); }).join("&");
        }
        return url;
    };
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    SharePointQueryable.prototype.getParent = function (factory, baseUrl, path, batch) {
        if (baseUrl === void 0) { baseUrl = this.parentUrl; }
        var parent = new factory(baseUrl, path);
        parent.configure(this._options);
        var target = this.query.get("@target");
        if (target !== null) {
            parent.query.add("@target", target);
        }
        if (typeof batch !== "undefined") {
            parent = parent.inBatch(batch);
        }
        return parent;
    };
    /**
     * Clones this SharePointQueryable into a new SharePointQueryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     */
    SharePointQueryable.prototype.clone = function (factory, additionalPath, includeBatch) {
        if (includeBatch === void 0) { includeBatch = true; }
        var clone = new factory(this, additionalPath);
        clone.configure(this._options);
        var target = this.query.get("@target");
        if (target !== null) {
            clone.query.add("@target", target);
        }
        if (includeBatch && this.hasBatch) {
            clone = clone.inBatch(this.batch);
        }
        return clone;
    };
    /**
     * Converts the current instance to a request context
     *
     * @param verb The request verb
     * @param options The set of supplied request options
     * @param parser The supplied ODataParser instance
     * @param pipeline Optional request processing pipeline
     */
    SharePointQueryable.prototype.toRequestContext = function (verb, options, parser, pipeline) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (pipeline === void 0) { pipeline = pipeline_1.PipelineMethods.default; }
        var dependencyDispose = this.hasBatch ? this.addBatchDependency() : function () { return; };
        return util_1.Util.toAbsoluteUrl(this.toUrlAndQuery()).then(function (url) {
            utils_1.mergeOptions(options, _this._options);
            // build our request context
            var context = {
                batch: _this._batch,
                batchDependency: dependencyDispose,
                cachingOptions: _this._cachingOptions,
                clientFactory: function () { return new httpclient_1.HttpClient(); },
                isBatched: _this.hasBatch,
                isCached: _this._useCaching,
                options: options,
                parser: parser,
                pipeline: pipeline,
                requestAbsoluteUrl: url,
                requestId: util_1.Util.getGUID(),
                verb: verb,
            };
            return context;
        });
    };
    return SharePointQueryable;
}(queryable_1.ODataQueryable));
exports.SharePointQueryable = SharePointQueryable;
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
var SharePointQueryableCollection = /** @class */ (function (_super) {
    __extends(SharePointQueryableCollection, _super);
    function SharePointQueryableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    SharePointQueryableCollection.prototype.filter = function (filter) {
        this._query.add("$filter", filter);
        return this;
    };
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    SharePointQueryableCollection.prototype.select = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        if (selects.length > 0) {
            this._query.add("$select", selects.join(","));
        }
        return this;
    };
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    SharePointQueryableCollection.prototype.expand = function () {
        var expands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expands[_i] = arguments[_i];
        }
        if (expands.length > 0) {
            this._query.add("$expand", expands.join(","));
        }
        return this;
    };
    /**
     * Orders based on the supplied fields ascending
     *
     * @param orderby The name of the field to sort on
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    SharePointQueryableCollection.prototype.orderBy = function (orderBy, ascending) {
        if (ascending === void 0) { ascending = true; }
        var keys = this._query.getKeys();
        var query = [];
        var asc = ascending ? " asc" : " desc";
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] === "$orderby") {
                query.push(this._query.get("$orderby"));
                break;
            }
        }
        query.push("" + orderBy + asc);
        this._query.add("$orderby", query.join(","));
        return this;
    };
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    SharePointQueryableCollection.prototype.skip = function (skip) {
        this._query.add("$skip", skip.toString());
        return this;
    };
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    SharePointQueryableCollection.prototype.top = function (top) {
        this._query.add("$top", top.toString());
        return this;
    };
    return SharePointQueryableCollection;
}(SharePointQueryable));
exports.SharePointQueryableCollection = SharePointQueryableCollection;
/**
 * Represents an instance that can be selected
 *
 */
var SharePointQueryableInstance = /** @class */ (function (_super) {
    __extends(SharePointQueryableInstance, _super);
    function SharePointQueryableInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    SharePointQueryableInstance.prototype.select = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        if (selects.length > 0) {
            this._query.add("$select", selects.join(","));
        }
        return this;
    };
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    SharePointQueryableInstance.prototype.expand = function () {
        var expands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expands[_i] = arguments[_i];
        }
        if (expands.length > 0) {
            this._query.add("$expand", expands.join(","));
        }
        return this;
    };
    return SharePointQueryableInstance;
}(SharePointQueryable));
exports.SharePointQueryableInstance = SharePointQueryableInstance;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = __webpack_require__(5);
function defaultLog(error) {
    logging_1.Logger.log({ data: {}, level: logging_1.LogLevel.Error, message: "[" + error.name + "]::" + error.message });
}
/**
 * Represents an exception with an HttpClient request
 *
 */
var ProcessHttpClientResponseException = /** @class */ (function (_super) {
    __extends(ProcessHttpClientResponseException, _super);
    function ProcessHttpClientResponseException(status, statusText, data) {
        var _this = _super.call(this, "Error making HttpClient request in queryable: [" + status + "] " + statusText) || this;
        _this.status = status;
        _this.statusText = statusText;
        _this.data = data;
        _this.name = "ProcessHttpClientResponseException";
        logging_1.Logger.log({ data: _this.data, level: logging_1.LogLevel.Error, message: _this.message });
        return _this;
    }
    return ProcessHttpClientResponseException;
}(Error));
exports.ProcessHttpClientResponseException = ProcessHttpClientResponseException;
var NoCacheAvailableException = /** @class */ (function (_super) {
    __extends(NoCacheAvailableException, _super);
    function NoCacheAvailableException(msg) {
        if (msg === void 0) { msg = "Cannot create a caching configuration provider since cache is not available."; }
        var _this = _super.call(this, msg) || this;
        _this.name = "NoCacheAvailableException";
        defaultLog(_this);
        return _this;
    }
    return NoCacheAvailableException;
}(Error));
exports.NoCacheAvailableException = NoCacheAvailableException;
var APIUrlException = /** @class */ (function (_super) {
    __extends(APIUrlException, _super);
    function APIUrlException(msg) {
        if (msg === void 0) { msg = "Unable to determine API url."; }
        var _this = _super.call(this, msg) || this;
        _this.name = "APIUrlException";
        defaultLog(_this);
        return _this;
    }
    return APIUrlException;
}(Error));
exports.APIUrlException = APIUrlException;
var AuthUrlException = /** @class */ (function (_super) {
    __extends(AuthUrlException, _super);
    function AuthUrlException(data, msg) {
        if (msg === void 0) { msg = "Auth URL Endpoint could not be determined from data. Data logged."; }
        var _this = _super.call(this, msg) || this;
        _this.name = "APIUrlException";
        logging_1.Logger.log({ data: data, level: logging_1.LogLevel.Error, message: _this.message });
        return _this;
    }
    return AuthUrlException;
}(Error));
exports.AuthUrlException = AuthUrlException;
var NodeFetchClientUnsupportedException = /** @class */ (function (_super) {
    __extends(NodeFetchClientUnsupportedException, _super);
    function NodeFetchClientUnsupportedException(msg) {
        if (msg === void 0) { msg = "Using NodeFetchClient in the browser is not supported."; }
        var _this = _super.call(this, msg) || this;
        _this.name = "NodeFetchClientUnsupportedException";
        defaultLog(_this);
        return _this;
    }
    return NodeFetchClientUnsupportedException;
}(Error));
exports.NodeFetchClientUnsupportedException = NodeFetchClientUnsupportedException;
var SPRequestExecutorUndefinedException = /** @class */ (function (_super) {
    __extends(SPRequestExecutorUndefinedException, _super);
    function SPRequestExecutorUndefinedException() {
        var _this = this;
        var msg = [
            "SP.RequestExecutor is undefined. ",
            "Load the SP.RequestExecutor.js library (/_layouts/15/SP.RequestExecutor.js) before loading the PnP JS Core library.",
        ].join(" ");
        _this = _super.call(this, msg) || this;
        _this.name = "SPRequestExecutorUndefinedException";
        defaultLog(_this);
        return _this;
    }
    return SPRequestExecutorUndefinedException;
}(Error));
exports.SPRequestExecutorUndefinedException = SPRequestExecutorUndefinedException;
var MaxCommentLengthException = /** @class */ (function (_super) {
    __extends(MaxCommentLengthException, _super);
    function MaxCommentLengthException(msg) {
        if (msg === void 0) { msg = "The maximum comment length is 1023 characters."; }
        var _this = _super.call(this, msg) || this;
        _this.name = "MaxCommentLengthException";
        defaultLog(_this);
        return _this;
    }
    return MaxCommentLengthException;
}(Error));
exports.MaxCommentLengthException = MaxCommentLengthException;
var NotSupportedInBatchException = /** @class */ (function (_super) {
    __extends(NotSupportedInBatchException, _super);
    function NotSupportedInBatchException(operation) {
        if (operation === void 0) { operation = "This operation"; }
        var _this = _super.call(this, operation + " is not supported as part of a batch.") || this;
        _this.name = "NotSupportedInBatchException";
        defaultLog(_this);
        return _this;
    }
    return NotSupportedInBatchException;
}(Error));
exports.NotSupportedInBatchException = NotSupportedInBatchException;
var ODataIdException = /** @class */ (function (_super) {
    __extends(ODataIdException, _super);
    function ODataIdException(data, msg) {
        if (msg === void 0) { msg = "Could not extract odata id in object, you may be using nometadata. Object data logged to logger."; }
        var _this = _super.call(this, msg) || this;
        _this.name = "ODataIdException";
        logging_1.Logger.log({ data: data, level: logging_1.LogLevel.Error, message: _this.message });
        return _this;
    }
    return ODataIdException;
}(Error));
exports.ODataIdException = ODataIdException;
var BatchParseException = /** @class */ (function (_super) {
    __extends(BatchParseException, _super);
    function BatchParseException(msg) {
        var _this = _super.call(this, msg) || this;
        _this.name = "BatchParseException";
        defaultLog(_this);
        return _this;
    }
    return BatchParseException;
}(Error));
exports.BatchParseException = BatchParseException;
var AlreadyInBatchException = /** @class */ (function (_super) {
    __extends(AlreadyInBatchException, _super);
    function AlreadyInBatchException(msg) {
        if (msg === void 0) { msg = "This query is already part of a batch."; }
        var _this = _super.call(this, msg) || this;
        _this.name = "AlreadyInBatchException";
        defaultLog(_this);
        return _this;
    }
    return AlreadyInBatchException;
}(Error));
exports.AlreadyInBatchException = AlreadyInBatchException;
var FunctionExpectedException = /** @class */ (function (_super) {
    __extends(FunctionExpectedException, _super);
    function FunctionExpectedException(msg) {
        if (msg === void 0) { msg = "This query is already part of a batch."; }
        var _this = _super.call(this, msg) || this;
        _this.name = "FunctionExpectedException";
        defaultLog(_this);
        return _this;
    }
    return FunctionExpectedException;
}(Error));
exports.FunctionExpectedException = FunctionExpectedException;
var UrlException = /** @class */ (function (_super) {
    __extends(UrlException, _super);
    function UrlException(msg) {
        var _this = _super.call(this, msg) || this;
        _this.name = "UrlException";
        defaultLog(_this);
        return _this;
    }
    return UrlException;
}(Error));
exports.UrlException = UrlException;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var logging_1 = __webpack_require__(5);
var exceptions_1 = __webpack_require__(2);
var core_1 = __webpack_require__(14);
function spExtractODataId(candidate) {
    if (candidate.hasOwnProperty("odata.id")) {
        return candidate["odata.id"];
    }
    else if (candidate.hasOwnProperty("__metadata") && candidate.__metadata.hasOwnProperty("id")) {
        return candidate.__metadata.id;
    }
    else {
        throw new exceptions_1.ODataIdException(candidate);
    }
}
exports.spExtractODataId = spExtractODataId;
var SPODataEntityParserImpl = /** @class */ (function (_super) {
    __extends(SPODataEntityParserImpl, _super);
    function SPODataEntityParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            var o = new _this.factory(spGetEntityUrl(d), null);
            return util_1.Util.extend(o, d);
        };
        return _this;
    }
    SPODataEntityParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            var o = new _this.factory(spGetEntityUrl(d), null);
            return util_1.Util.extend(o, d);
        });
    };
    return SPODataEntityParserImpl;
}(core_1.ODataParserBase));
var SPODataEntityArrayParserImpl = /** @class */ (function (_super) {
    __extends(SPODataEntityArrayParserImpl, _super);
    function SPODataEntityArrayParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            return d.map(function (v) {
                var o = new _this.factory(spGetEntityUrl(v), null);
                return util_1.Util.extend(o, v);
            });
        };
        return _this;
    }
    SPODataEntityArrayParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            return d.map(function (v) {
                var o = new _this.factory(spGetEntityUrl(v), null);
                return util_1.Util.extend(o, v);
            });
        });
    };
    return SPODataEntityArrayParserImpl;
}(core_1.ODataParserBase));
function spGetEntityUrl(entity) {
    if (entity.hasOwnProperty("odata.metadata") && entity.hasOwnProperty("odata.editLink")) {
        // we are dealign with minimal metadata (default)
        return util_1.Util.combinePaths(util_1.extractWebUrl(entity["odata.metadata"]), "_api", entity["odata.editLink"]);
    }
    else if (entity.hasOwnProperty("__metadata")) {
        // we are dealing with verbose, which has an absolute uri
        return entity.__metadata.uri;
    }
    else {
        // we are likely dealing with nometadata, so don't error but we won't be able to
        // chain off these objects
        logging_1.Logger.write("No uri information found in ODataEntity parsing, chaining will fail for this object.", logging_1.LogLevel.Warning);
        return "";
    }
}
exports.spGetEntityUrl = spGetEntityUrl;
function spODataEntity(factory) {
    return new SPODataEntityParserImpl(factory);
}
exports.spODataEntity = spODataEntity;
function spODataEntityArray(factory) {
    return new SPODataEntityArrayParserImpl(factory);
}
exports.spODataEntityArray = spODataEntityArray;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fetchclient_1 = __webpack_require__(31);
var RuntimeConfigImpl = /** @class */ (function () {
    function RuntimeConfigImpl() {
        // these are our default values for the library
        this._defaultCachingStore = "session";
        this._defaultCachingTimeoutSeconds = 60;
        this._globalCacheDisable = false;
        this._enableCacheExpiration = false;
        this._cacheExpirationIntervalMilliseconds = 750;
        this._spfxContext = null;
        // sharepoint settings
        this._spFetchClientFactory = function () { return new fetchclient_1.FetchClient(); };
        this._spBaseUrl = null;
        this._spHeaders = null;
        // ms graph settings
        this._graphHeaders = null;
        this._graphFetchClientFactory = function () { return null; };
    }
    RuntimeConfigImpl.prototype.set = function (config) {
        var _this = this;
        if (config.hasOwnProperty("globalCacheDisable")) {
            this._globalCacheDisable = config.globalCacheDisable;
        }
        if (config.hasOwnProperty("defaultCachingStore")) {
            this._defaultCachingStore = config.defaultCachingStore;
        }
        if (config.hasOwnProperty("defaultCachingTimeoutSeconds")) {
            this._defaultCachingTimeoutSeconds = config.defaultCachingTimeoutSeconds;
        }
        if (config.hasOwnProperty("sp")) {
            if (config.sp.hasOwnProperty("fetchClientFactory")) {
                this._spFetchClientFactory = config.sp.fetchClientFactory;
            }
            if (config.sp.hasOwnProperty("baseUrl")) {
                this._spBaseUrl = config.sp.baseUrl;
            }
            if (config.sp.hasOwnProperty("headers")) {
                this._spHeaders = config.sp.headers;
            }
        }
        if (config.hasOwnProperty("spfxContext")) {
            this._spfxContext = config.spfxContext;
            if (typeof this._spfxContext.graphHttpClient !== "undefined") {
                this._graphFetchClientFactory = function () { return _this._spfxContext.graphHttpClient; };
            }
        }
        if (config.hasOwnProperty("graph")) {
            if (config.graph.hasOwnProperty("headers")) {
                this._graphHeaders = config.graph.headers;
            }
            // this comes after the default setting of the _graphFetchClientFactory client so it can be overwritten
            if (config.graph.hasOwnProperty("fetchClientFactory")) {
                this._graphFetchClientFactory = config.graph.fetchClientFactory;
            }
        }
        if (config.hasOwnProperty("enableCacheExpiration")) {
            this._enableCacheExpiration = config.enableCacheExpiration;
        }
        if (config.hasOwnProperty("cacheExpirationIntervalMilliseconds")) {
            // we don't let the interval be less than 300 milliseconds
            var interval = config.cacheExpirationIntervalMilliseconds < 300 ? 300 : config.cacheExpirationIntervalMilliseconds;
            this._cacheExpirationIntervalMilliseconds = interval;
        }
    };
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingStore", {
        get: function () {
            return this._defaultCachingStore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingTimeoutSeconds", {
        get: function () {
            return this._defaultCachingTimeoutSeconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "globalCacheDisable", {
        get: function () {
            return this._globalCacheDisable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "spFetchClientFactory", {
        get: function () {
            return this._spFetchClientFactory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "spBaseUrl", {
        get: function () {
            if (this._spBaseUrl !== null) {
                return this._spBaseUrl;
            }
            else if (this._spfxContext !== null) {
                return this._spfxContext.pageContext.web.absoluteUrl;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "spHeaders", {
        get: function () {
            return this._spHeaders;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "enableCacheExpiration", {
        get: function () {
            return this._enableCacheExpiration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "cacheExpirationIntervalMilliseconds", {
        get: function () {
            return this._cacheExpirationIntervalMilliseconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "spfxContext", {
        get: function () {
            return this._spfxContext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "graphFetchClientFactory", {
        get: function () {
            return this._graphFetchClientFactory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RuntimeConfigImpl.prototype, "graphHeaders", {
        get: function () {
            return this._graphHeaders;
        },
        enumerable: true,
        configurable: true
    });
    return RuntimeConfigImpl;
}());
exports.RuntimeConfigImpl = RuntimeConfigImpl;
var _runtimeConfig = new RuntimeConfigImpl();
exports.RuntimeConfig = _runtimeConfig;
function setRuntimeConfig(config) {
    _runtimeConfig.set(config);
}
exports.setRuntimeConfig = setRuntimeConfig;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A set of logging levels
 *
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["Off"] = 99] = "Off";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
/**
 * Class used to subscribe ILogListener and log messages throughout an application
 *
 */
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Object.defineProperty(Logger, "activeLogLevel", {
        get: function () {
            return Logger.instance.activeLogLevel;
        },
        set: function (value) {
            Logger.instance.activeLogLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger, "instance", {
        get: function () {
            if (typeof Logger._instance === "undefined" || Logger._instance === null) {
                Logger._instance = new LoggerImpl();
            }
            return Logger._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds ILogListener instances to the set of subscribed listeners
     *
     * @param listeners One or more listeners to subscribe to this log
     */
    Logger.subscribe = function () {
        var listeners = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            listeners[_i] = arguments[_i];
        }
        listeners.map(function (listener) { return Logger.instance.subscribe(listener); });
    };
    /**
     * Clears the subscribers collection, returning the collection before modifiction
     */
    Logger.clearSubscribers = function () {
        return Logger.instance.clearSubscribers();
    };
    Object.defineProperty(Logger, "count", {
        /**
         * Gets the current subscriber count
         */
        get: function () {
            return Logger.instance.count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param message The message to write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Verbose)
     */
    Logger.write = function (message, level) {
        if (level === void 0) { level = LogLevel.Verbose; }
        Logger.instance.log({ level: level, message: message });
    };
    /**
     * Writes the supplied string to the subscribed listeners
     *
     * @param json The json object to stringify and write
     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Verbose)
     */
    Logger.writeJSON = function (json, level) {
        if (level === void 0) { level = LogLevel.Verbose; }
        Logger.instance.log({ level: level, message: JSON.stringify(json) });
    };
    /**
     * Logs the supplied entry to the subscribed listeners
     *
     * @param entry The message to log
     */
    Logger.log = function (entry) {
        Logger.instance.log(entry);
    };
    /**
     * Logs performance tracking data for the the execution duration of the supplied function using console.profile
     *
     * @param name The name of this profile boundary
     * @param f The function to execute and track within this performance boundary
     */
    Logger.measure = function (name, f) {
        return Logger.instance.measure(name, f);
    };
    return Logger;
}());
exports.Logger = Logger;
var LoggerImpl = /** @class */ (function () {
    function LoggerImpl(activeLogLevel, subscribers) {
        if (activeLogLevel === void 0) { activeLogLevel = LogLevel.Warning; }
        if (subscribers === void 0) { subscribers = []; }
        this.activeLogLevel = activeLogLevel;
        this.subscribers = subscribers;
    }
    LoggerImpl.prototype.subscribe = function (listener) {
        this.subscribers.push(listener);
    };
    LoggerImpl.prototype.clearSubscribers = function () {
        var s = this.subscribers.slice(0);
        this.subscribers.length = 0;
        return s;
    };
    Object.defineProperty(LoggerImpl.prototype, "count", {
        get: function () {
            return this.subscribers.length;
        },
        enumerable: true,
        configurable: true
    });
    LoggerImpl.prototype.write = function (message, level) {
        if (level === void 0) { level = LogLevel.Verbose; }
        this.log({ level: level, message: message });
    };
    LoggerImpl.prototype.log = function (entry) {
        if (typeof entry === "undefined" || entry.level < this.activeLogLevel) {
            return;
        }
        this.subscribers.map(function (subscriber) { return subscriber.log(entry); });
    };
    LoggerImpl.prototype.measure = function (name, f) {
        console.profile(name);
        try {
            return f();
        }
        finally {
            console.profileEnd();
        }
    };
    return LoggerImpl;
}());
/**
 * Implementation of ILogListener which logs to the browser console
 *
 */
var ConsoleListener = /** @class */ (function () {
    function ConsoleListener() {
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    ConsoleListener.prototype.log = function (entry) {
        var msg = this.format(entry);
        switch (entry.level) {
            case LogLevel.Verbose:
            case LogLevel.Info:
                console.log(msg);
                break;
            case LogLevel.Warning:
                console.warn(msg);
                break;
            case LogLevel.Error:
                console.error(msg);
                break;
        }
    };
    /**
     * Formats the message
     *
     * @param entry The information to format into a string
     */
    ConsoleListener.prototype.format = function (entry) {
        var msg = [];
        msg.push("Message: " + entry.message);
        if (typeof entry.data !== "undefined") {
            msg.push(" Data: " + JSON.stringify(entry.data));
        }
        return msg.join("");
    };
    return ConsoleListener;
}());
exports.ConsoleListener = ConsoleListener;
/**
 * Implementation of ILogListener which logs to the supplied function
 *
 */
var FunctionListener = /** @class */ (function () {
    /**
     * Creates a new instance of the FunctionListener class
     *
     * @constructor
     * @param  method The method to which any logging data will be passed
     */
    function FunctionListener(method) {
        this.method = method;
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    FunctionListener.prototype.log = function (entry) {
        this.method(entry);
    };
    return FunctionListener;
}());
exports.FunctionListener = FunctionListener;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var collections_1 = __webpack_require__(9);
var graphclient_1 = __webpack_require__(44);
var queryable_1 = __webpack_require__(20);
var pipeline_1 = __webpack_require__(21);
/**
 * Queryable Base Class
 *
 */
var GraphQueryable = /** @class */ (function (_super) {
    __extends(GraphQueryable, _super);
    /**
     * Creates a new instance of the Queryable class
     *
     * @constructor
     * @param baseUrl A string or Queryable that should form the base part of the url
     *
     */
    function GraphQueryable(baseUrl, path) {
        var _this = _super.call(this) || this;
        _this._query = new collections_1.Dictionary();
        if (typeof baseUrl === "string") {
            var urlStr = baseUrl;
            _this._parentUrl = urlStr;
            _this._url = util_1.Util.combinePaths(urlStr, path);
        }
        else {
            var q = baseUrl;
            _this._parentUrl = q._url;
            _this._url = util_1.Util.combinePaths(_this._parentUrl, path);
        }
        return _this;
    }
    /**
     * Creates a new instance of the supplied factory and extends this into that new instance
     *
     * @param factory constructor for the new queryable
     */
    GraphQueryable.prototype.as = function (factory) {
        var o = new factory(this._url, null);
        return util_1.Util.extend(o, this, true);
    };
    /**
     * Gets the full url with query information
     *
     */
    GraphQueryable.prototype.toUrlAndQuery = function () {
        var _this = this;
        return this.toUrl() + ("?" + this._query.getKeys().map(function (key) { return key + "=" + _this._query.get(key); }).join("&"));
    };
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    GraphQueryable.prototype.getParent = function (factory, baseUrl, path) {
        if (baseUrl === void 0) { baseUrl = this.parentUrl; }
        return new factory(baseUrl, path);
    };
    /**
     * Clones this queryable into a new queryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     */
    GraphQueryable.prototype.clone = function (factory, additionalPath, includeBatch) {
        if (includeBatch === void 0) { includeBatch = true; }
        // TODO:: include batching info in clone
        if (includeBatch) {
            return new factory(this, additionalPath);
        }
        return new factory(this, additionalPath);
    };
    /**
     * Converts the current instance to a request context
     *
     * @param verb The request verb
     * @param options The set of supplied request options
     * @param parser The supplied ODataParser instance
     * @param pipeline Optional request processing pipeline
     */
    GraphQueryable.prototype.toRequestContext = function (verb, options, parser, pipeline) {
        if (options === void 0) { options = {}; }
        if (pipeline === void 0) { pipeline = pipeline_1.PipelineMethods.default; }
        // TODO:: add batch support
        return Promise.resolve({
            batch: null,
            batchDependency: function () { return void (0); },
            cachingOptions: this._cachingOptions,
            clientFactory: function () { return new graphclient_1.GraphHttpClient(); },
            isBatched: false,
            isCached: this._useCaching,
            options: options,
            parser: parser,
            pipeline: pipeline,
            requestAbsoluteUrl: this.toUrlAndQuery(),
            requestId: util_1.Util.getGUID(),
            verb: verb,
        });
    };
    return GraphQueryable;
}(queryable_1.ODataQueryable));
exports.GraphQueryable = GraphQueryable;
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
var GraphQueryableCollection = /** @class */ (function (_super) {
    __extends(GraphQueryableCollection, _super);
    function GraphQueryableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param filter The string representing the filter query
     */
    GraphQueryableCollection.prototype.filter = function (filter) {
        this._query.add("$filter", filter);
        return this;
    };
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    GraphQueryableCollection.prototype.select = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        if (selects.length > 0) {
            this._query.add("$select", selects.join(","));
        }
        return this;
    };
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    GraphQueryableCollection.prototype.expand = function () {
        var expands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expands[_i] = arguments[_i];
        }
        if (expands.length > 0) {
            this._query.add("$expand", expands.join(","));
        }
        return this;
    };
    /**
     * Orders based on the supplied fields ascending
     *
     * @param orderby The name of the field to sort on
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    GraphQueryableCollection.prototype.orderBy = function (orderBy, ascending) {
        if (ascending === void 0) { ascending = true; }
        var keys = this._query.getKeys();
        var query = [];
        var asc = ascending ? " asc" : " desc";
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] === "$orderby") {
                query.push(this._query.get("$orderby"));
                break;
            }
        }
        query.push("" + orderBy + asc);
        this._query.add("$orderby", query.join(","));
        return this;
    };
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    GraphQueryableCollection.prototype.top = function (top) {
        this._query.add("$top", top.toString());
        return this;
    };
    /**
     * Skips a set number of items in the return set
     *
     * @param num Number of items to skip
     */
    GraphQueryableCollection.prototype.skip = function (num) {
        this._query.add("$top", num.toString());
        return this;
    };
    /**
     * 	To request second and subsequent pages of Graph data
     */
    GraphQueryableCollection.prototype.skipToken = function (token) {
        this._query.add("$skiptoken", token);
        return this;
    };
    Object.defineProperty(GraphQueryableCollection.prototype, "count", {
        /**
         * 	Retrieves the total count of matching resources
         */
        get: function () {
            this._query.add("$count", "true");
            return this;
        },
        enumerable: true,
        configurable: true
    });
    return GraphQueryableCollection;
}(GraphQueryable));
exports.GraphQueryableCollection = GraphQueryableCollection;
var GraphQueryableSearchableCollection = /** @class */ (function (_super) {
    __extends(GraphQueryableSearchableCollection, _super);
    function GraphQueryableSearchableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 	To request second and subsequent pages of Graph data
     */
    GraphQueryableSearchableCollection.prototype.search = function (query) {
        this._query.add("$search", query);
        return this;
    };
    return GraphQueryableSearchableCollection;
}(GraphQueryableCollection));
exports.GraphQueryableSearchableCollection = GraphQueryableSearchableCollection;
/**
 * Represents an instance that can be selected
 *
 */
var GraphQueryableInstance = /** @class */ (function (_super) {
    __extends(GraphQueryableInstance, _super);
    function GraphQueryableInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    GraphQueryableInstance.prototype.select = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        if (selects.length > 0) {
            this._query.add("$select", selects.join(","));
        }
        return this;
    };
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    GraphQueryableInstance.prototype.expand = function () {
        var expands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expands[_i] = arguments[_i];
        }
        if (expands.length > 0) {
            this._query.add("$expand", expands.join(","));
        }
        return this;
    };
    return GraphQueryableInstance;
}(GraphQueryable));
exports.GraphQueryableInstance = GraphQueryableInstance;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(14);
var util_1 = __webpack_require__(0);
var ODataDefaultParser = /** @class */ (function (_super) {
    __extends(ODataDefaultParser, _super);
    function ODataDefaultParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ODataDefaultParser;
}(core_1.ODataParserBase));
exports.ODataDefaultParser = ODataDefaultParser;
var ODataValueParserImpl = /** @class */ (function (_super) {
    __extends(ODataValueParserImpl, _super);
    function ODataValueParserImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ODataValueParserImpl.prototype.parse = function (r) {
        return _super.prototype.parse.call(this, r).then(function (d) { return d; });
    };
    return ODataValueParserImpl;
}(core_1.ODataParserBase));
function ODataValue() {
    return new ODataValueParserImpl();
}
exports.ODataValue = ODataValue;
var ODataRawParserImpl = /** @class */ (function (_super) {
    __extends(ODataRawParserImpl, _super);
    function ODataRawParserImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ODataRawParserImpl.prototype.parseImpl = function (r, resolve) {
        r.json().then(resolve);
    };
    return ODataRawParserImpl;
}(core_1.ODataParserBase));
exports.ODataRawParserImpl = ODataRawParserImpl;
exports.ODataRaw = new ODataRawParserImpl();
var TextFileParser = /** @class */ (function (_super) {
    __extends(TextFileParser, _super);
    function TextFileParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextFileParser.prototype.parseImpl = function (r, resolve) {
        r.text().then(resolve);
    };
    return TextFileParser;
}(core_1.ODataParserBase));
exports.TextFileParser = TextFileParser;
var BlobFileParser = /** @class */ (function (_super) {
    __extends(BlobFileParser, _super);
    function BlobFileParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlobFileParser.prototype.parseImpl = function (r, resolve) {
        r.blob().then(resolve);
    };
    return BlobFileParser;
}(core_1.ODataParserBase));
exports.BlobFileParser = BlobFileParser;
var JSONFileParser = /** @class */ (function (_super) {
    __extends(JSONFileParser, _super);
    function JSONFileParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONFileParser.prototype.parseImpl = function (r, resolve) {
        r.json().then(resolve);
    };
    return JSONFileParser;
}(core_1.ODataParserBase));
exports.JSONFileParser = JSONFileParser;
var BufferFileParser = /** @class */ (function (_super) {
    __extends(BufferFileParser, _super);
    function BufferFileParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BufferFileParser.prototype.parseImpl = function (r, resolve) {
        if (util_1.Util.isFunction(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }
        r.buffer().then(resolve);
    };
    return BufferFileParser;
}(core_1.ODataParserBase));
exports.BufferFileParser = BufferFileParser;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var parsers_1 = __webpack_require__(7);
var util_1 = __webpack_require__(0);
var exceptions_1 = __webpack_require__(2);
var webparts_1 = __webpack_require__(38);
var items_1 = __webpack_require__(12);
var sharepointqueryableshareable_1 = __webpack_require__(16);
var odata_1 = __webpack_require__(3);
/**
 * Describes a collection of File objects
 *
 */
var Files = /** @class */ (function (_super) {
    __extends(Files, _super);
    /**
     * Creates a new instance of the Files class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this fields collection
     */
    function Files(baseUrl, path) {
        if (path === void 0) { path = "files"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a File by filename
     *
     * @param name The name of the file, including extension.
     */
    Files.prototype.getByName = function (name) {
        var f = new File(this);
        f.concat("('" + name + "')");
        return f;
    };
    /**
     * Uploads a file. Not supported for batching
     *
     * @param url The folder-relative url of the file.
     * @param content The file contents blob.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
     * @returns The new File and the raw response.
     */
    Files.prototype.add = function (url, content, shouldOverWrite) {
        var _this = this;
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        return new Files(this, "add(overwrite=" + shouldOverWrite + ",url='" + url + "')")
            .postCore({
            body: content,
        }).then(function (response) {
            return {
                data: response,
                file: _this.getByName(url),
            };
        });
    };
    /**
     * Uploads a file. Not supported for batching
     *
     * @param url The folder-relative url of the file.
     * @param content The Blob file content to add
     * @param progress A callback function which can be used to track the progress of the upload
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     * @returns The new File and the raw response.
     */
    Files.prototype.addChunked = function (url, content, progress, shouldOverWrite, chunkSize) {
        var _this = this;
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        if (chunkSize === void 0) { chunkSize = 10485760; }
        var adder = this.clone(Files, "add(overwrite=" + shouldOverWrite + ",url='" + url + "')", false);
        return adder.postCore()
            .then(function () { return _this.getByName(url); })
            .then(function (file) { return file.setContentChunked(content, progress, chunkSize); });
    };
    /**
     * Adds a ghosted file to an existing list or document library. Not supported for batching.
     *
     * @param fileUrl The server-relative url where you want to save the file.
     * @param templateFileType The type of use to create the file.
     * @returns The template file that was added and the raw response.
     */
    Files.prototype.addTemplateFile = function (fileUrl, templateFileType) {
        var _this = this;
        return this.clone(Files, "addTemplateFile(urloffile='" + fileUrl + "',templatefiletype=" + templateFileType + ")", false)
            .postCore().then(function (response) {
            return {
                data: response,
                file: _this.getByName(fileUrl),
            };
        });
    };
    return Files;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.Files = Files;
/**
 * Describes a single File instance
 *
 */
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(File.prototype, "listItemAllFields", {
        /**
         * Gets a value that specifies the list item field values for the list item corresponding to the file.
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableCollection(this, "listItemAllFields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "versions", {
        /**
         * Gets a collection of versions
         *
         */
        get: function () {
            return new Versions(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Approves the file submitted for content approval with the specified comment.
     * Only documents in lists that are enabled for content approval can be approved.
     *
     * @param comment The comment for the approval.
     */
    File.prototype.approve = function (comment) {
        if (comment === void 0) { comment = ""; }
        return this.clone(File, "approve(comment='" + comment + "')").postCore();
    };
    /**
     * Stops the chunk upload session without saving the uploaded data. Does not support batching.
     * If the file doesn’t already exist in the library, the partially uploaded file will be deleted.
     * Use this in response to user action (as in a request to cancel an upload) or an error or exception.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     */
    File.prototype.cancelUpload = function (uploadId) {
        return this.clone(File, "cancelUpload(uploadId=guid'" + uploadId + "')", false).postCore();
    };
    /**
     * Checks the file in to a document library based on the check-in type.
     *
     * @param comment A comment for the check-in. Its length must be <= 1023.
     * @param checkinType The check-in type for the file.
     */
    File.prototype.checkin = function (comment, checkinType) {
        if (comment === void 0) { comment = ""; }
        if (checkinType === void 0) { checkinType = CheckinType.Major; }
        if (comment.length > 1023) {
            throw new exceptions_1.MaxCommentLengthException();
        }
        return this.clone(File, "checkin(comment='" + comment + "',checkintype=" + checkinType + ")").postCore();
    };
    /**
     * Checks out the file from a document library.
     */
    File.prototype.checkout = function () {
        return this.clone(File, "checkout").postCore();
    };
    /**
     * Copies the file to the destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to copy to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     */
    File.prototype.copyTo = function (url, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        return this.clone(File, "copyTo(strnewurl='" + url + "',boverwrite=" + shouldOverWrite + ")").postCore();
    };
    /**
     * Delete this file.
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    File.prototype.delete = function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return this.clone(File, null).postCore({
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    /**
     * Denies approval for a file that was submitted for content approval.
     * Only documents in lists that are enabled for content approval can be denied.
     *
     * @param comment The comment for the denial.
     */
    File.prototype.deny = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw new exceptions_1.MaxCommentLengthException();
        }
        return this.clone(File, "deny(comment='" + comment + "')").postCore();
    };
    /**
     * Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
     * An exception is thrown if the file is not an ASPX page.
     *
     * @param scope The WebPartsPersonalizationScope view on the Web Parts page.
     */
    File.prototype.getLimitedWebPartManager = function (scope) {
        if (scope === void 0) { scope = WebPartsPersonalizationScope.Shared; }
        return new webparts_1.LimitedWebPartManager(this, "getLimitedWebPartManager(scope=" + scope + ")");
    };
    /**
     * Moves the file to the specified destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to move to.
     * @param moveOperations The bitwise MoveOperations value for how to move the file.
     */
    File.prototype.moveTo = function (url, moveOperations) {
        if (moveOperations === void 0) { moveOperations = MoveOperations.Overwrite; }
        return this.clone(File, "moveTo(newurl='" + url + "',flags=" + moveOperations + ")").postCore();
    };
    /**
     * Submits the file for content approval with the specified comment.
     *
     * @param comment The comment for the published file. Its length must be <= 1023.
     */
    File.prototype.publish = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw new exceptions_1.MaxCommentLengthException();
        }
        return this.clone(File, "publish(comment='" + comment + "')").postCore();
    };
    /**
     * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     *
     * @returns The GUID of the recycled file.
     */
    File.prototype.recycle = function () {
        return this.clone(File, "recycle").postCore();
    };
    /**
     * Reverts an existing checkout for the file.
     *
     */
    File.prototype.undoCheckout = function () {
        return this.clone(File, "undoCheckout").postCore();
    };
    /**
     * Removes the file from content approval or unpublish a major version.
     *
     * @param comment The comment for the unpublish operation. Its length must be <= 1023.
     */
    File.prototype.unpublish = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw new exceptions_1.MaxCommentLengthException();
        }
        return this.clone(File, "unpublish(comment='" + comment + "')").postCore();
    };
    /**
     * Gets the contents of the file as text. Not supported in batching.
     *
     */
    File.prototype.getText = function () {
        return this.clone(File, "$value", false).get(new parsers_1.TextFileParser(), { headers: { "binaryStringResponseBody": "true" } });
    };
    /**
     * Gets the contents of the file as a blob, does not work in Node.js. Not supported in batching.
     *
     */
    File.prototype.getBlob = function () {
        return this.clone(File, "$value", false).get(new parsers_1.BlobFileParser(), { headers: { "binaryStringResponseBody": "true" } });
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    File.prototype.getBuffer = function () {
        return this.clone(File, "$value", false).get(new parsers_1.BufferFileParser(), { headers: { "binaryStringResponseBody": "true" } });
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    File.prototype.getJSON = function () {
        return this.clone(File, "$value", false).get(new parsers_1.JSONFileParser(), { headers: { "binaryStringResponseBody": "true" } });
    };
    /**
     * Sets the content of a file, for large files use setContentChunked. Not supported in batching.
     *
     * @param content The file content
     *
     */
    File.prototype.setContent = function (content) {
        var _this = this;
        return this.clone(File, "$value", false).postCore({
            body: content,
            headers: {
                "X-HTTP-Method": "PUT",
            },
        }).then(function (_) { return new File(_this); });
    };
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    File.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        var q = this.listItemAllFields;
        return q.select.apply(q, selects).get().then(function (d) {
            return util_1.Util.extend(new items_1.Item(odata_1.spGetEntityUrl(d)), d);
        });
    };
    /**
     * Sets the contents of a file using a chunked upload approach. Not supported in batching.
     *
     * @param file The file to upload
     * @param progress A callback function which can be used to track the progress of the upload
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     */
    File.prototype.setContentChunked = function (file, progress, chunkSize) {
        var _this = this;
        if (chunkSize === void 0) { chunkSize = 10485760; }
        if (typeof progress === "undefined") {
            progress = function () { return null; };
        }
        var fileSize = file.size;
        var blockCount = parseInt((file.size / chunkSize).toString(), 10) + ((file.size % chunkSize === 0) ? 1 : 0);
        var uploadId = util_1.Util.getGUID();
        // start the chain with the first fragment
        progress({ uploadId: uploadId, blockNumber: 1, chunkSize: chunkSize, currentPointer: 0, fileSize: fileSize, stage: "starting", totalBlocks: blockCount });
        var chain = this.startUpload(uploadId, file.slice(0, chunkSize));
        var _loop_1 = function (i) {
            chain = chain.then(function (pointer) {
                progress({ uploadId: uploadId, blockNumber: i, chunkSize: chunkSize, currentPointer: pointer, fileSize: fileSize, stage: "continue", totalBlocks: blockCount });
                return _this.continueUpload(uploadId, pointer, file.slice(pointer, pointer + chunkSize));
            });
        };
        // skip the first and last blocks
        for (var i = 2; i < blockCount; i++) {
            _loop_1(i);
        }
        return chain.then(function (pointer) {
            progress({ uploadId: uploadId, blockNumber: blockCount, chunkSize: chunkSize, currentPointer: pointer, fileSize: fileSize, stage: "finishing", totalBlocks: blockCount });
            return _this.finishUpload(uploadId, pointer, file.slice(pointer));
        });
    };
    /**
     * Starts a new chunk upload session and uploads the first fragment.
     * The current file content is not changed when this method completes.
     * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
     * The upload session ends either when you use the CancelUpload method or when you successfully
     * complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
     * The StartUpload and ContinueUpload methods return the size of the running total of uploaded data in bytes,
     * so you can pass those return values to subsequent uses of ContinueUpload and FinishUpload.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fragment The file contents.
     * @returns The size of the total uploaded data in bytes.
     */
    File.prototype.startUpload = function (uploadId, fragment) {
        return this.clone(File, "startUpload(uploadId=guid'" + uploadId + "')", false)
            .postAsCore({ body: fragment })
            .then(function (n) {
            // When OData=verbose the payload has the following shape:
            // { StartUpload: "10485760" }
            if (typeof n === "object") {
                n = n.StartUpload;
            }
            return parseFloat(n);
        });
    };
    /**
     * Continues the chunk upload session with an additional fragment.
     * The current file content is not changed.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fileOffset The size of the offset into the file where the fragment starts.
     * @param fragment The file contents.
     * @returns The size of the total uploaded data in bytes.
     */
    File.prototype.continueUpload = function (uploadId, fileOffset, fragment) {
        return this.clone(File, "continueUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")", false)
            .postAsCore({ body: fragment })
            .then(function (n) {
            // When OData=verbose the payload has the following shape:
            // { ContinueUpload: "20971520" }
            if (typeof n === "object") {
                n = n.ContinueUpload;
            }
            return parseFloat(n);
        });
    };
    /**
     * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fileOffset The size of the offset into the file where the fragment starts.
     * @param fragment The file contents.
     * @returns The newly uploaded file.
     */
    File.prototype.finishUpload = function (uploadId, fileOffset, fragment) {
        return this.clone(File, "finishUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")", false)
            .postAsCore({ body: fragment })
            .then(function (response) {
            return {
                data: response,
                file: new File(response.ServerRelativeUrl),
            };
        });
    };
    return File;
}(sharepointqueryableshareable_1.SharePointQueryableShareableFile));
exports.File = File;
/**
 * Describes a collection of Version objects
 *
 */
var Versions = /** @class */ (function (_super) {
    __extends(Versions, _super);
    /**
     * Creates a new instance of the File class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this fields collection
     */
    function Versions(baseUrl, path) {
        if (path === void 0) { path = "versions"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    Versions.prototype.getById = function (versionId) {
        var v = new Version(this);
        v.concat("(" + versionId + ")");
        return v;
    };
    /**
     * Deletes all the file version objects in the collection.
     *
     */
    Versions.prototype.deleteAll = function () {
        return new Versions(this, "deleteAll").postCore();
    };
    /**
     * Deletes the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    Versions.prototype.deleteById = function (versionId) {
        return this.clone(Versions, "deleteById(vid=" + versionId + ")").postCore();
    };
    /**
     * Recycles the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    Versions.prototype.recycleByID = function (versionId) {
        return this.clone(Versions, "recycleByID(vid=" + versionId + ")").postCore();
    };
    /**
     * Deletes the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    Versions.prototype.deleteByLabel = function (label) {
        return this.clone(Versions, "deleteByLabel(versionlabel='" + label + "')").postCore();
    };
    /**
     * REcycles the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    Versions.prototype.recycleByLabel = function (label) {
        return this.clone(Versions, "recycleByLabel(versionlabel='" + label + "')").postCore();
    };
    /**
     * Creates a new file version from the file specified by the version label.
     *
     * @param label The version label of the file version to restore, for example: 1.2
     */
    Versions.prototype.restoreByLabel = function (label) {
        return this.clone(Versions, "restoreByLabel(versionlabel='" + label + "')").postCore();
    };
    return Versions;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.Versions = Versions;
/**
 * Describes a single Version instance
 *
 */
var Version = /** @class */ (function (_super) {
    __extends(Version, _super);
    function Version() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Delete a specific version of a file.
    *
    * @param eTag Value used in the IF-Match header, by default "*"
    */
    Version.prototype.delete = function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return this.postCore({
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    /**
     * Opens the file as a stream.
     */
    Version.prototype.openBinaryStream = function () {
        return this.clone(Version, "openBinaryStream").postCore();
    };
    return Version;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.Version = Version;
var CheckinType;
(function (CheckinType) {
    CheckinType[CheckinType["Minor"] = 0] = "Minor";
    CheckinType[CheckinType["Major"] = 1] = "Major";
    CheckinType[CheckinType["Overwrite"] = 2] = "Overwrite";
})(CheckinType = exports.CheckinType || (exports.CheckinType = {}));
var WebPartsPersonalizationScope;
(function (WebPartsPersonalizationScope) {
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["User"] = 0] = "User";
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["Shared"] = 1] = "Shared";
})(WebPartsPersonalizationScope = exports.WebPartsPersonalizationScope || (exports.WebPartsPersonalizationScope = {}));
var MoveOperations;
(function (MoveOperations) {
    MoveOperations[MoveOperations["Overwrite"] = 1] = "Overwrite";
    MoveOperations[MoveOperations["AllowBrokenThickets"] = 8] = "AllowBrokenThickets";
})(MoveOperations = exports.MoveOperations || (exports.MoveOperations = {}));
var TemplateFileType;
(function (TemplateFileType) {
    TemplateFileType[TemplateFileType["StandardPage"] = 0] = "StandardPage";
    TemplateFileType[TemplateFileType["WikiPage"] = 1] = "WikiPage";
    TemplateFileType[TemplateFileType["FormPage"] = 2] = "FormPage";
    TemplateFileType[TemplateFileType["ClientSidePage"] = 3] = "ClientSidePage";
})(TemplateFileType = exports.TemplateFileType || (exports.TemplateFileType = {}));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generic dictionary
 */
var Dictionary = /** @class */ (function () {
    /**
     * Creates a new instance of the Dictionary<T> class
     *
     * @constructor
     */
    function Dictionary(keys, values) {
        if (keys === void 0) { keys = []; }
        if (values === void 0) { values = []; }
        this.keys = keys;
        this.values = values;
    }
    /**
     * Gets a value from the collection using the specified key
     *
     * @param key The key whose value we want to return, returns null if the key does not exist
     */
    Dictionary.prototype.get = function (key) {
        var index = this.keys.indexOf(key);
        if (index < 0) {
            return null;
        }
        return this.values[index];
    };
    /**
     * Adds the supplied key and value to the dictionary
     *
     * @param key The key to add
     * @param o The value to add
     */
    Dictionary.prototype.add = function (key, o) {
        var index = this.keys.indexOf(key);
        if (index > -1) {
            this.values[index] = o;
        }
        else {
            this.keys.push(key);
            this.values.push(o);
        }
    };
    /**
     * Merges the supplied typed hash into this dictionary instance. Existing values are updated and new ones are created as appropriate.
     */
    Dictionary.prototype.merge = function (source) {
        var _this = this;
        if ("getKeys" in source) {
            var sourceAsDictionary_1 = source;
            sourceAsDictionary_1.getKeys().map(function (key) {
                _this.add(key, sourceAsDictionary_1.get(key));
            });
        }
        else {
            var sourceAsHash = source;
            for (var key in sourceAsHash) {
                if (sourceAsHash.hasOwnProperty(key)) {
                    this.add(key, sourceAsHash[key]);
                }
            }
        }
    };
    /**
     * Removes a value from the dictionary
     *
     * @param key The key of the key/value pair to remove. Returns null if the key was not found.
     */
    Dictionary.prototype.remove = function (key) {
        var index = this.keys.indexOf(key);
        if (index < 0) {
            return null;
        }
        var val = this.values[index];
        this.keys.splice(index, 1);
        this.values.splice(index, 1);
        return val;
    };
    /**
     * Returns all the keys currently in the dictionary as an array
     */
    Dictionary.prototype.getKeys = function () {
        return this.keys;
    };
    /**
     * Returns all the values currently in the dictionary as an array
     */
    Dictionary.prototype.getValues = function () {
        return this.values;
    };
    /**
     * Clears the current dictionary
     */
    Dictionary.prototype.clear = function () {
        this.keys = [];
        this.values = [];
    };
    /**
     * Gets a count of the items currently in the dictionary
     */
    Dictionary.prototype.count = function () {
        return this.keys.length;
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
function mergeOptions(target, source) {
    target.headers = target.headers || {};
    var headers = util_1.Util.extend(target.headers, source.headers);
    target = util_1.Util.extend(target, source);
    target.headers = headers;
}
exports.mergeOptions = mergeOptions;
function mergeHeaders(target, source) {
    if (typeof source !== "undefined" && source !== null) {
        var temp = new Request("", { headers: source });
        temp.headers.forEach(function (value, name) {
            target.append(name, value);
        });
    }
}
exports.mergeHeaders = mergeHeaders;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var lists_1 = __webpack_require__(15);
var fields_1 = __webpack_require__(26);
var navigation_1 = __webpack_require__(28);
var sitegroups_1 = __webpack_require__(24);
var contenttypes_1 = __webpack_require__(25);
var regionalsettings_1 = __webpack_require__(55);
var folders_1 = __webpack_require__(18);
var roles_1 = __webpack_require__(23);
var files_1 = __webpack_require__(8);
var util_1 = __webpack_require__(0);
var lists_2 = __webpack_require__(15);
var siteusers_1 = __webpack_require__(37);
var usercustomactions_1 = __webpack_require__(27);
var odata_1 = __webpack_require__(3);
var batch_1 = __webpack_require__(29);
var features_1 = __webpack_require__(39);
var sharepointqueryableshareable_1 = __webpack_require__(16);
var relateditems_1 = __webpack_require__(56);
var appcatalog_1 = __webpack_require__(40);
var clientsidepages_1 = __webpack_require__(41);
/**
 * Describes a collection of webs
 *
 */
var Webs = /** @class */ (function (_super) {
    __extends(Webs, _super);
    /**
     * Creates a new instance of the Webs class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this web collection
     */
    function Webs(baseUrl, webPath) {
        if (webPath === void 0) { webPath = "webs"; }
        return _super.call(this, baseUrl, webPath) || this;
    }
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    Webs.prototype.add = function (title, url, description, template, language, inheritPermissions) {
        if (description === void 0) { description = ""; }
        if (template === void 0) { template = "STS"; }
        if (language === void 0) { language = 1033; }
        if (inheritPermissions === void 0) { inheritPermissions = true; }
        var props = {
            Description: description,
            Language: language,
            Title: title,
            Url: url,
            UseSamePermissionsAsParentSite: inheritPermissions,
            WebTemplate: template,
        };
        var postBody = JSON.stringify({
            "parameters": util_1.Util.extend({
                "__metadata": { "type": "SP.WebCreationInformation" },
            }, props),
        });
        return this.clone(Webs, "add").postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                web: new Web(odata_1.spExtractODataId(data).replace(/_api\/web\/?/i, "")),
            };
        });
    };
    return Webs;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.Webs = Webs;
/**
 * Describes a collection of web infos
 *
 */
var WebInfos = /** @class */ (function (_super) {
    __extends(WebInfos, _super);
    /**
     * Creates a new instance of the WebInfos class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this web infos collection
     */
    function WebInfos(baseUrl, webPath) {
        if (webPath === void 0) { webPath = "webinfos"; }
        return _super.call(this, baseUrl, webPath) || this;
    }
    return WebInfos;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.WebInfos = WebInfos;
/**
 * Describes a web
 *
 */
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    /**
     * Creates a new instance of the Web class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this web
     */
    function Web(baseUrl, path) {
        if (path === void 0) { path = "_api/web"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Creates a new web instance from the given url by indexing the location of the /_api/
     * segment. If this is not found the method creates a new web with the entire string as
     * supplied.
     *
     * @param url
     */
    Web.fromUrl = function (url, path) {
        return new Web(util_1.extractWebUrl(url), path);
    };
    Object.defineProperty(Web.prototype, "webs", {
        /**
         * Gets this web's subwebs
         *
         */
        get: function () {
            return new Webs(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    Web.prototype.getSubwebsFilteredForCurrentUser = function (nWebTemplateFilter, nConfigurationFilter) {
        if (nWebTemplateFilter === void 0) { nWebTemplateFilter = -1; }
        if (nConfigurationFilter === void 0) { nConfigurationFilter = -1; }
        return this.clone(Webs, "getSubwebsFilteredForCurrentUser(nWebTemplateFilter=" + nWebTemplateFilter + ",nConfigurationFilter=" + nConfigurationFilter + ")");
    };
    Object.defineProperty(Web.prototype, "allProperties", {
        /**
         * Gets the set of all web properties from the read-only collection.
         */
        get: function () {
            return this.clone(sharepointqueryable_1.SharePointQueryableCollection, "allproperties");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "webinfos", {
        /**
         * Gets a collection of WebInfos for this web's subwebs
         *
         */
        get: function () {
            return new WebInfos(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "contentTypes", {
        /**
         * Gets the content types available in this web
         *
         */
        get: function () {
            return new contenttypes_1.ContentTypes(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "lists", {
        /**
         * Gets the lists in this web
         *
         */
        get: function () {
            return new lists_1.Lists(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "fields", {
        /**
         * Gets the fields in this web
         *
         */
        get: function () {
            return new fields_1.Fields(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "features", {
        /**
         * Gets the active features for this web
         *
         */
        get: function () {
            return new features_1.Features(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "availablefields", {
        /**
         * Gets the available fields in this web
         *
         */
        get: function () {
            return new fields_1.Fields(this, "availablefields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "navigation", {
        /**
         * Gets the navigation options in this web
         *
         */
        get: function () {
            return new navigation_1.Navigation(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "siteUsers", {
        /**
         * Gets the site users
         *
         */
        get: function () {
            return new siteusers_1.SiteUsers(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "siteGroups", {
        /**
         * Gets the site groups
         *
         */
        get: function () {
            return new sitegroups_1.SiteGroups(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "siteUserInfoList", {
        /**
         * Gets site user info list
         *
         */
        get: function () {
            return new lists_2.List(this, "siteuserinfolist");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "regionalSettings", {
        /**
         * Gets regional settings
         *
         */
        get: function () {
            return new regionalsettings_1.RegionalSettings(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "currentUser", {
        /**
         * Gets the current user
         */
        get: function () {
            return new siteusers_1.CurrentUser(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "folders", {
        /**
         * Gets the top-level folders in this web
         *
         */
        get: function () {
            return new folders_1.Folders(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "userCustomActions", {
        /**
         * Gets all user custom actions for this web
         *
         */
        get: function () {
            return new usercustomactions_1.UserCustomActions(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions of this web
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryable(this, "effectivebasepermissions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "roleDefinitions", {
        /**
         * Gets the collection of RoleDefinition resources
         *
         */
        get: function () {
            return new roles_1.RoleDefinitions(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "relatedItems", {
        /**
         * Provides an interface to manage related items
         *
         */
        get: function () {
            return relateditems_1.RelatedItemManagerImpl.FromUrl(this.toUrl());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new batch for requests within the context of this web
     *
     */
    Web.prototype.createBatch = function () {
        return new batch_1.ODataBatch(this.parentUrl);
    };
    Object.defineProperty(Web.prototype, "rootFolder", {
        /**
         * Gets the root folder of this web
         *
         */
        get: function () {
            return new folders_1.Folder(this, "rootFolder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "associatedOwnerGroup", {
        /**
         * Gets the associated owner group for this web
         *
         */
        get: function () {
            return new sitegroups_1.SiteGroup(this, "associatedownergroup");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "associatedMemberGroup", {
        /**
         * Gets the associated member group for this web
         *
         */
        get: function () {
            return new sitegroups_1.SiteGroup(this, "associatedmembergroup");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Web.prototype, "associatedVisitorGroup", {
        /**
         * Gets the associated visitor group for this web
         *
         */
        get: function () {
            return new sitegroups_1.SiteGroup(this, "associatedvisitorgroup");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a folder by server relative url
     *
     * @param folderRelativeUrl The server relative path to the folder (including /sites/ if applicable)
     */
    Web.prototype.getFolderByServerRelativeUrl = function (folderRelativeUrl) {
        return new folders_1.Folder(this, "getFolderByServerRelativeUrl('" + folderRelativeUrl + "')");
    };
    /**
     * Gets a folder by server relative relative path if your folder name contains # and % characters
     * you need to first encode the file name using encodeURIComponent() and then pass the url
     * let url = "/sites/test/Shared Documents/" + encodeURIComponent("%123");
     * This works only in SharePoint online.
     *
     * @param folderRelativeUrl The server relative path to the folder (including /sites/ if applicable)
     */
    Web.prototype.getFolderByServerRelativePath = function (folderRelativeUrl) {
        return new folders_1.Folder(this, "getFolderByServerRelativePath(decodedUrl='" + folderRelativeUrl + "')");
    };
    /**
     * Gets a file by server relative url
     *
     * @param fileRelativeUrl The server relative path to the file (including /sites/ if applicable)
     */
    Web.prototype.getFileByServerRelativeUrl = function (fileRelativeUrl) {
        return new files_1.File(this, "getFileByServerRelativeUrl('" + fileRelativeUrl + "')");
    };
    /**
     * Gets a file by server relative url if your file name contains # and % characters
     * you need to first encode the file name using encodeURIComponent() and then pass the url
     * let url = "/sites/test/Shared Documents/" + encodeURIComponent("%123.docx");
     *
     * @param fileRelativeUrl The server relative path to the file (including /sites/ if applicable)
     */
    Web.prototype.getFileByServerRelativePath = function (fileRelativeUrl) {
        return new files_1.File(this, "getFileByServerRelativePath(decodedUrl='" + fileRelativeUrl + "')");
    };
    /**
     * Gets a list by server relative url (list's root folder)
     *
     * @param listRelativeUrl The server relative path to the list's root folder (including /sites/ if applicable)
     */
    Web.prototype.getList = function (listRelativeUrl) {
        return new lists_2.List(this, "getList('" + listRelativeUrl + "')");
    };
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    Web.prototype.update = function (properties) {
        var _this = this;
        var postBody = JSON.stringify(util_1.Util.extend({
            "__metadata": { "type": "SP.Web" },
        }, properties));
        return this.postCore({
            body: postBody,
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (data) {
            return {
                data: data,
                web: _this,
            };
        });
    };
    /**
     * Deletes this web
     *
     */
    Web.prototype.delete = function () {
        return _super.prototype.deleteCore.call(this);
    };
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    Web.prototype.applyTheme = function (colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        var postBody = JSON.stringify({
            backgroundImageUrl: backgroundImageUrl,
            colorPaletteUrl: colorPaletteUrl,
            fontSchemeUrl: fontSchemeUrl,
            shareGenerated: shareGenerated,
        });
        return this.clone(Web, "applytheme").postCore({ body: postBody });
    };
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    Web.prototype.applyWebTemplate = function (template) {
        var q = this.clone(Web, "applywebtemplate");
        q.concat("(@t)");
        q.query.add("@t", template);
        return q.postCore();
    };
    /**
     * Checks whether the specified login name belongs to a valid user in the web. If the user doesn't exist, adds the user to the web.
     *
     * @param loginName The login name of the user (ex: i:0#.f|membership|user@domain.onmicrosoft.com)
     */
    Web.prototype.ensureUser = function (loginName) {
        var postBody = JSON.stringify({
            logonName: loginName,
        });
        return this.clone(Web, "ensureuser").postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                user: new siteusers_1.SiteUser(odata_1.spExtractODataId(data)),
            };
        });
    };
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    Web.prototype.availableWebTemplates = function (language, includeCrossLanugage) {
        if (language === void 0) { language = 1033; }
        if (includeCrossLanugage === void 0) { includeCrossLanugage = true; }
        return new sharepointqueryable_1.SharePointQueryableCollection(this, "getavailablewebtemplates(lcid=" + language + ", doincludecrosslanguage=" + includeCrossLanugage + ")");
    };
    /**
     * Returns the list gallery on the site
     *
     * @param type The gallery type - WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114,
     * MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125
     */
    Web.prototype.getCatalog = function (type) {
        return this.clone(Web, "getcatalog(" + type + ")").select("Id").get().then(function (data) {
            return new lists_2.List(odata_1.spExtractODataId(data));
        });
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    Web.prototype.getChanges = function (query) {
        var postBody = JSON.stringify({ "query": util_1.Util.extend({ "__metadata": { "type": "SP.ChangeQuery" } }, query) });
        return this.clone(Web, "getchanges").postCore({ body: postBody });
    };
    Object.defineProperty(Web.prototype, "customListTemplate", {
        /**
         * Gets the custom list templates for the site
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableCollection(this, "getcustomlisttemplates");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the user corresponding to the specified member identifier for the current site
     *
     * @param id The id of the user
     */
    Web.prototype.getUserById = function (id) {
        return new siteusers_1.SiteUser(this, "getUserById(" + id + ")");
    };
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    Web.prototype.mapToIcon = function (filename, size, progId) {
        if (size === void 0) { size = 0; }
        if (progId === void 0) { progId = ""; }
        return this.clone(Web, "maptoicon(filename='" + filename + "', progid='" + progId + "', size=" + size + ")").get();
    };
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key
     */
    Web.prototype.getStorageEntity = function (key) {
        return this.clone(Web, "getStorageEntity('" + key + "')").get();
    };
    /**
     * Gets the app catalog for this web
     *
     * @param url Optional url or web containing the app catalog (default: current web)
     */
    Web.prototype.getAppCatalog = function (url) {
        return new appcatalog_1.AppCatalog(url || this);
    };
    /**
     * Gets the collection of available client side web parts for this web instance
     */
    Web.prototype.getClientSideWebParts = function () {
        return this.clone(sharepointqueryable_1.SharePointQueryableCollection, "GetClientSideWebParts").get();
    };
    /**
     * Creates a new client side page
     *
     * @param pageName Name of the new page
     * @param title Display title of the new page
     * @param libraryTitle Title of the library in which to create the new page. Default: "Site Pages"
     */
    Web.prototype.addClientSidePage = function (pageName, title, libraryTitle) {
        if (title === void 0) { title = pageName.replace(/\.[^/.]+$/, ""); }
        if (libraryTitle === void 0) { libraryTitle = "Site Pages"; }
        return clientsidepages_1.ClientSidePage.create(this.lists.getByTitle(libraryTitle), pageName, title);
    };
    /**
     * Creates a new client side page using the library path
     *
     * @param pageName Name of the new page
     * @param listRelativePath The server relative path to the list's root folder (including /sites/ if applicable)
     * @param title Display title of the new page
     */
    Web.prototype.addClientSidePageByPath = function (pageName, listRelativePath, title) {
        if (title === void 0) { title = pageName.replace(/\.[^/.]+$/, ""); }
        return clientsidepages_1.ClientSidePage.create(this.getList(listRelativePath), pageName, title);
    };
    return Web;
}(sharepointqueryableshareable_1.SharePointQueryableShareableWeb));
exports.Web = Web;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var sharepointqueryableshareable_1 = __webpack_require__(16);
var folders_1 = __webpack_require__(18);
var files_1 = __webpack_require__(8);
var contenttypes_1 = __webpack_require__(25);
var util_1 = __webpack_require__(0);
var core_1 = __webpack_require__(14);
var attachmentfiles_1 = __webpack_require__(51);
var lists_1 = __webpack_require__(15);
var pnp_1 = __webpack_require__(19);
/**
 * Describes a collection of Item objects
 *
 */
var Items = /** @class */ (function (_super) {
    __extends(Items, _super);
    /**
     * Creates a new instance of the Items class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this fields collection
     */
    function Items(baseUrl, path) {
        if (path === void 0) { path = "items"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets an Item by id
     *
     * @param id The integer id of the item to retrieve
     */
    Items.prototype.getById = function (id) {
        var i = new Item(this);
        i.concat("(" + id + ")");
        return i;
    };
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    Items.prototype.getItemByStringId = function (stringId) {
        var i = new Item(this);
        i.concat("/../getItemByStringId('" + stringId + "')");
        return i;
    };
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     * @param reverse It true the PagedPrev=true parameter is added allowing backwards navigation in the collection
     */
    Items.prototype.skip = function (skip, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (reverse) {
            this._query.add("$skiptoken", encodeURIComponent("Paged=TRUE&PagedPrev=TRUE&p_ID=" + skip));
        }
        else {
            this._query.add("$skiptoken", encodeURIComponent("Paged=TRUE&p_ID=" + skip));
        }
        return this;
    };
    /**
     * Gets a collection designed to aid in paging through data
     *
     */
    Items.prototype.getPaged = function () {
        return this.getAs(new PagedItemCollectionParser());
    };
    /**
     * Gets all the items in a list, regardless of count. Does not support batching or caching
     *
     *  @param requestSize Number of items to return in each request (Default: 2000)
     */
    Items.prototype.getAll = function (requestSize) {
        var _this = this;
        if (requestSize === void 0) { requestSize = 2000; }
        pnp_1.Logger.write("Calling items.getAll should be done sparingly. Ensure this is the correct choice. If you are unsure, it is not.", pnp_1.LogLevel.Warning);
        // this will be used for the actual query
        // and we set no metadata here to try and reduce traffic
        var items = new Items(this, "").top(requestSize).configure({
            headers: {
                "Accept": "application/json;odata=nometadata",
            },
        });
        // let's copy over the odata query params that can be applied
        // $top - allow setting the page size this way (override what we did above)
        // $select - allow picking the return fields (good behavior)
        // $filter - allow setting a filter, though this may fail for large lists
        this.query.getKeys()
            .filter(function (k) { return /^\$select$|^\$filter$|^\$top$|^\$expand$/.test(k.toLowerCase()); })
            .reduce(function (i, k) {
            i.query.add(k, _this.query.get(k));
            return i;
        }, items);
        // give back the promise
        return new Promise(function (resolve, reject) {
            // this will eventually hold the items we return
            var itemsCollector = [];
            // action that will gather up our results recursively
            var gatherer = function (last) {
                // collect that set of results
                [].push.apply(itemsCollector, last.results);
                // if we have more, repeat - otherwise resolve with the collected items
                if (last.hasNext) {
                    last.getNext().then(gatherer).catch(reject);
                }
                else {
                    resolve(itemsCollector);
                }
            };
            // start the cycle
            items.getPaged().then(gatherer).catch(reject);
        });
    };
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     */
    Items.prototype.add = function (properties, listItemEntityTypeFullName) {
        var _this = this;
        if (properties === void 0) { properties = {}; }
        if (listItemEntityTypeFullName === void 0) { listItemEntityTypeFullName = null; }
        var removeDependency = this.addBatchDependency();
        return this.ensureListItemEntityTypeName(listItemEntityTypeFullName).then(function (listItemEntityType) {
            var postBody = JSON.stringify(util_1.Util.extend({
                "__metadata": { "type": listItemEntityType },
            }, properties));
            var promise = _this.clone(Items, null).postAsCore({ body: postBody }).then(function (data) {
                return {
                    data: data,
                    item: _this.getById(data.Id),
                };
            });
            removeDependency();
            return promise;
        });
    };
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    Items.prototype.ensureListItemEntityTypeName = function (candidatelistItemEntityTypeFullName) {
        return candidatelistItemEntityTypeFullName ?
            Promise.resolve(candidatelistItemEntityTypeFullName) :
            this.getParent(lists_1.List).getListItemEntityTypeFullName();
    };
    return Items;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.Items = Items;
/**
 * Descrines a single Item instance
 *
 */
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Item.prototype, "attachmentFiles", {
        /**
         * Gets the set of attachments for this item
         *
         */
        get: function () {
            return new attachmentfiles_1.AttachmentFiles(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "contentType", {
        /**
         * Gets the content type for this item
         *
         */
        get: function () {
            return new contenttypes_1.ContentType(this, "ContentType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions for the item
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryable(this, "EffectiveBasePermissions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "effectiveBasePermissionsForUI", {
        /**
         * Gets the effective base permissions for the item in a UI context
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryable(this, "EffectiveBasePermissionsForUI");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "fieldValuesAsHTML", {
        /**
         * Gets the field values for this list item in their HTML representation
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableInstance(this, "FieldValuesAsHTML");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "fieldValuesAsText", {
        /**
         * Gets the field values for this list item in their text representation
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableInstance(this, "FieldValuesAsText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "fieldValuesForEdit", {
        /**
         * Gets the field values for this list item for use in editing controls
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableInstance(this, "FieldValuesForEdit");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "folder", {
        /**
         * Gets the folder associated with this list item (if this item represents a folder)
         *
         */
        get: function () {
            return new folders_1.Folder(this, "folder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "file", {
        /**
         * Gets the folder associated with this list item (if this item represents a folder)
         *
         */
        get: function () {
            return new files_1.File(this, "file");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "versions", {
        /**
         * Gets the collection of versions associated with this item
         */
        get: function () {
            return new ItemVersions(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    Item.prototype.update = function (properties, eTag, listItemEntityTypeFullName) {
        var _this = this;
        if (eTag === void 0) { eTag = "*"; }
        if (listItemEntityTypeFullName === void 0) { listItemEntityTypeFullName = null; }
        return new Promise(function (resolve, reject) {
            var removeDependency = _this.addBatchDependency();
            return _this.ensureListItemEntityTypeName(listItemEntityTypeFullName).then(function (listItemEntityType) {
                var postBody = JSON.stringify(util_1.Util.extend({
                    "__metadata": { "type": listItemEntityType },
                }, properties));
                removeDependency();
                return _this.postCore({
                    body: postBody,
                    headers: {
                        "IF-Match": eTag,
                        "X-HTTP-Method": "MERGE",
                    },
                }, new ItemUpdatedParser()).then(function (data) {
                    resolve({
                        data: data,
                        item: _this,
                    });
                });
            }).catch(function (e) { return reject(e); });
        });
    };
    /**
     * Delete this item
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    Item.prototype.delete = function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return this.postCore({
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    Item.prototype.recycle = function () {
        return this.clone(Item, "recycle").postCore();
    };
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    Item.prototype.getWopiFrameUrl = function (action) {
        if (action === void 0) { action = 0; }
        var i = this.clone(Item, "getWOPIFrameUrl(@action)");
        i._query.add("@action", action);
        return i.postCore().then(function (data) {
            // handle verbose mode
            if (data.hasOwnProperty("GetWOPIFrameUrl")) {
                return data.GetWOPIFrameUrl;
            }
            return data;
        });
    };
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param newDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    Item.prototype.validateUpdateListItem = function (formValues, newDocumentUpdate) {
        if (newDocumentUpdate === void 0) { newDocumentUpdate = false; }
        return this.clone(Item, "validateupdatelistitem").postCore({
            body: JSON.stringify({ "formValues": formValues, bNewDocumentUpdate: newDocumentUpdate }),
        });
    };
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    Item.prototype.ensureListItemEntityTypeName = function (candidatelistItemEntityTypeFullName) {
        return candidatelistItemEntityTypeFullName ?
            Promise.resolve(candidatelistItemEntityTypeFullName) :
            this.getParent(lists_1.List, this.parentUrl.substr(0, this.parentUrl.lastIndexOf("/"))).getListItemEntityTypeFullName();
    };
    return Item;
}(sharepointqueryableshareable_1.SharePointQueryableShareableItem));
exports.Item = Item;
/**
 * Provides paging functionality for list items
 */
var PagedItemCollection = /** @class */ (function () {
    function PagedItemCollection(nextUrl, results) {
        this.nextUrl = nextUrl;
        this.results = results;
    }
    Object.defineProperty(PagedItemCollection.prototype, "hasNext", {
        /**
         * If true there are more results available in the set, otherwise there are not
         */
        get: function () {
            return typeof this.nextUrl === "string" && this.nextUrl.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the next set of results, or resolves to null if no results are available
     */
    PagedItemCollection.prototype.getNext = function () {
        if (this.hasNext) {
            var items = new Items(this.nextUrl, null);
            return items.getPaged();
        }
        return new Promise(function (r) { return r(null); });
    };
    return PagedItemCollection;
}());
exports.PagedItemCollection = PagedItemCollection;
/**
 * Describes a collection of Version objects
 *
 */
var ItemVersions = /** @class */ (function (_super) {
    __extends(ItemVersions, _super);
    /**
     * Creates a new instance of the File class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this fields collection
     */
    function ItemVersions(baseUrl, path) {
        if (path === void 0) { path = "versions"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    ItemVersions.prototype.getById = function (versionId) {
        var v = new ItemVersion(this);
        v.concat("(" + versionId + ")");
        return v;
    };
    return ItemVersions;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.ItemVersions = ItemVersions;
/**
 * Describes a single Version instance
 *
 */
var ItemVersion = /** @class */ (function (_super) {
    __extends(ItemVersion, _super);
    function ItemVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Delete a specific version of a file.
    *
    * @param eTag Value used in the IF-Match header, by default "*"
    */
    ItemVersion.prototype.delete = function () {
        return this.postCore({
            headers: {
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    return ItemVersion;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.ItemVersion = ItemVersion;
var PagedItemCollectionParser = /** @class */ (function (_super) {
    __extends(PagedItemCollectionParser, _super);
    function PagedItemCollectionParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PagedItemCollectionParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                r.json().then(function (json) {
                    var nextUrl = json.hasOwnProperty("d") && json.d.hasOwnProperty("__next") ? json.d.__next : json["odata.nextLink"];
                    resolve(new PagedItemCollection(nextUrl, _this.parseODataJSON(json)));
                });
            }
        });
    };
    return PagedItemCollectionParser;
}(core_1.ODataParserBase));
var ItemUpdatedParser = /** @class */ (function (_super) {
    __extends(ItemUpdatedParser, _super);
    function ItemUpdatedParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemUpdatedParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                resolve({
                    "odata.etag": r.headers.get("etag"),
                });
            }
        });
    };
    return ItemUpdatedParser;
}(core_1.ODataParserBase));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var collections_1 = __webpack_require__(9);
var pnplibconfig_1 = __webpack_require__(4);
var logging_1 = __webpack_require__(5);
/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
var PnPClientStorageWrapper = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    function PnPClientStorageWrapper(store, defaultTimeoutMinutes) {
        this.store = store;
        this.defaultTimeoutMinutes = defaultTimeoutMinutes;
        this.defaultTimeoutMinutes = (defaultTimeoutMinutes === void 0) ? -1 : defaultTimeoutMinutes;
        this.enabled = this.test();
        // if the cache timeout is enabled call the handler
        // this will clear any expired items and set the timeout function
        if (pnplibconfig_1.RuntimeConfig.enableCacheExpiration) {
            logging_1.Logger.write("Enabling cache expiration.", logging_1.LogLevel.Info);
            this.cacheExpirationHandler();
        }
    }
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    PnPClientStorageWrapper.prototype.get = function (key) {
        if (!this.enabled) {
            return null;
        }
        var o = this.store.getItem(key);
        if (o == null) {
            return null;
        }
        var persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            logging_1.Logger.write("Removing item with key '" + key + "' from cache due to expiration.", logging_1.LogLevel.Info);
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    };
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.put = function (key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    };
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    PnPClientStorageWrapper.prototype.delete = function (key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    };
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.getOrPut = function (key, getter, expire) {
        var _this = this;
        if (!this.enabled) {
            return getter();
        }
        return new Promise(function (resolve) {
            var o = _this.get(key);
            if (o == null) {
                getter().then(function (d) {
                    _this.put(key, d, expire);
                    resolve(d);
                });
            }
            else {
                resolve(o);
            }
        });
    };
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    PnPClientStorageWrapper.prototype.deleteExpired = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.enabled) {
                resolve();
            }
            try {
                for (var i = 0; i < _this.store.length; i++) {
                    var key = _this.store.key(i);
                    // test the stored item to see if we stored it
                    if (/["|']?pnp["|']? ?: ?1/i.test(_this.store.getItem(key))) {
                        // get those items as get will delete from cache if they are expired
                        _this.get(key);
                    }
                }
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Used to determine if the wrapped storage is available currently
     */
    PnPClientStorageWrapper.prototype.test = function () {
        var str = "test";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * Creates the persistable to store
     */
    PnPClientStorageWrapper.prototype.createPersistable = function (o, expire) {
        if (typeof expire === "undefined") {
            // ensure we are by default inline with the global library setting
            var defaultTimeout = pnplibconfig_1.RuntimeConfig.defaultCachingTimeoutSeconds;
            if (this.defaultTimeoutMinutes > 0) {
                defaultTimeout = this.defaultTimeoutMinutes * 60;
            }
            expire = util_1.Util.dateAdd(new Date(), "second", defaultTimeout);
        }
        return JSON.stringify({ pnp: 1, expiration: expire, value: o });
    };
    /**
     * Deletes expired items added by this library in this.store and sets a timeout to call itself
     */
    PnPClientStorageWrapper.prototype.cacheExpirationHandler = function () {
        var _this = this;
        logging_1.Logger.write("Called cache expiration handler.", logging_1.LogLevel.Verbose);
        this.deleteExpired().then(function (_) {
            // call ourself in the future
            setTimeout(util_1.Util.getCtxCallback(_this, _this.cacheExpirationHandler), pnplibconfig_1.RuntimeConfig.cacheExpirationIntervalMilliseconds);
        }).catch(function (e) {
            // we've got some error - so just stop the loop and report the error
            logging_1.Logger.log({
                data: e,
                level: logging_1.LogLevel.Error,
                message: "Error deleting expired cache entries, see data for details. Timeout not reset.",
            });
        });
    };
    return PnPClientStorageWrapper;
}());
exports.PnPClientStorageWrapper = PnPClientStorageWrapper;
/**
 * A thin implementation of in-memory storage for use in nodejs
 */
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage(_store) {
        if (_store === void 0) { _store = new collections_1.Dictionary(); }
        this._store = _store;
    }
    Object.defineProperty(MemoryStorage.prototype, "length", {
        get: function () {
            return this._store.count();
        },
        enumerable: true,
        configurable: true
    });
    MemoryStorage.prototype.clear = function () {
        this._store.clear();
    };
    MemoryStorage.prototype.getItem = function (key) {
        return this._store.get(key);
    };
    MemoryStorage.prototype.key = function (index) {
        return this._store.getKeys()[index];
    };
    MemoryStorage.prototype.removeItem = function (key) {
        this._store.remove(key);
    };
    MemoryStorage.prototype.setItem = function (key, data) {
        this._store.add(key, data);
    };
    return MemoryStorage;
}());
/**
 * A class that will establish wrappers for both local and session storage
 */
var PnPClientStorage = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    function PnPClientStorage(_local, _session) {
        if (_local === void 0) { _local = null; }
        if (_session === void 0) { _session = null; }
        this._local = _local;
        this._session = _session;
    }
    Object.defineProperty(PnPClientStorage.prototype, "local", {
        /**
         * Provides access to the local storage of the browser
         */
        get: function () {
            if (this._local === null) {
                this._local = typeof localStorage !== "undefined" ? new PnPClientStorageWrapper(localStorage) : new PnPClientStorageWrapper(new MemoryStorage());
            }
            return this._local;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PnPClientStorage.prototype, "session", {
        /**
         * Provides access to the session storage of the browser
         */
        get: function () {
            if (this._session === null) {
                this._session = typeof sessionStorage !== "undefined" ? new PnPClientStorageWrapper(sessionStorage) : new PnPClientStorageWrapper(new MemoryStorage());
            }
            return this._session;
        },
        enumerable: true,
        configurable: true
    });
    return PnPClientStorage;
}());
exports.PnPClientStorage = PnPClientStorage;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = __webpack_require__(2);
var logging_1 = __webpack_require__(5);
var ODataParserBase = /** @class */ (function () {
    function ODataParserBase() {
    }
    ODataParserBase.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                _this.parseImpl(r, resolve, reject);
            }
        });
    };
    ODataParserBase.prototype.parseImpl = function (r, resolve, reject) {
        var _this = this;
        if ((r.headers.has("Content-Length") && parseFloat(r.headers.get("Content-Length")) === 0) || r.status === 204) {
            resolve({});
        }
        else {
            // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
            r.text()
                .then(function (txt) { return txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {}; })
                .then(function (json) { return resolve(_this.parseODataJSON(json)); })
                .catch(function (e) { return reject(e); });
        }
    };
    ODataParserBase.prototype.handleError = function (r, reject) {
        if (!r.ok) {
            r.json().then(function (json) {
                // include the headers as they contain diagnostic information
                var data = {
                    responseBody: json,
                    responseHeaders: r.headers,
                };
                reject(new exceptions_1.ProcessHttpClientResponseException(r.status, r.statusText, data));
            }).catch(function (e) {
                // we failed to read the body - possibly it is empty. Let's report the original status that caused
                // the request to fail and log the error with parsing the body if anyone needs it for debugging
                logging_1.Logger.log({
                    data: e,
                    level: logging_1.LogLevel.Warning,
                    message: "There was an error parsing the error response body. See data for details.",
                });
                // include the headers as they contain diagnostic information
                var data = {
                    responseBody: "[[body not available]]",
                    responseHeaders: r.headers,
                };
                reject(new exceptions_1.ProcessHttpClientResponseException(r.status, r.statusText, data));
            });
        }
        return r.ok;
    };
    ODataParserBase.prototype.parseODataJSON = function (json) {
        var result = json;
        if (json.hasOwnProperty("d")) {
            if (json.d.hasOwnProperty("results")) {
                result = json.d.results;
            }
            else {
                result = json.d;
            }
        }
        else if (json.hasOwnProperty("value")) {
            result = json.value;
        }
        return result;
    };
    return ODataParserBase;
}());
exports.ODataParserBase = ODataParserBase;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var items_1 = __webpack_require__(12);
var views_1 = __webpack_require__(52);
var contenttypes_1 = __webpack_require__(25);
var fields_1 = __webpack_require__(26);
var forms_1 = __webpack_require__(53);
var subscriptions_1 = __webpack_require__(54);
var sharepointqueryable_1 = __webpack_require__(1);
var sharepointqueryablesecurable_1 = __webpack_require__(36);
var util_1 = __webpack_require__(0);
var usercustomactions_1 = __webpack_require__(27);
var odata_1 = __webpack_require__(3);
var exceptions_1 = __webpack_require__(2);
var folders_1 = __webpack_require__(18);
/**
 * Describes a collection of List objects
 *
 */
var Lists = /** @class */ (function (_super) {
    __extends(Lists, _super);
    /**
     * Creates a new instance of the Lists class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this fields collection
     */
    function Lists(baseUrl, path) {
        if (path === void 0) { path = "lists"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    Lists.prototype.getByTitle = function (title) {
        return new List(this, "getByTitle('" + title + "')");
    };
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    Lists.prototype.getById = function (id) {
        var list = new List(this);
        list.concat("('" + id + "')");
        return list;
    };
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    Lists.prototype.add = function (title, description, template, enableContentTypes, additionalSettings) {
        var _this = this;
        if (description === void 0) { description = ""; }
        if (template === void 0) { template = 100; }
        if (enableContentTypes === void 0) { enableContentTypes = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        var addSettings = util_1.Util.extend({
            "AllowContentTypes": enableContentTypes,
            "BaseTemplate": template,
            "ContentTypesEnabled": enableContentTypes,
            "Description": description,
            "Title": title,
            "__metadata": { "type": "SP.List" },
        }, additionalSettings);
        return this.postCore({ body: JSON.stringify(addSettings) }).then(function (data) {
            return { data: data, list: _this.getByTitle(addSettings.Title) };
        });
    };
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    Lists.prototype.ensure = function (title, description, template, enableContentTypes, additionalSettings) {
        var _this = this;
        if (description === void 0) { description = ""; }
        if (template === void 0) { template = 100; }
        if (enableContentTypes === void 0) { enableContentTypes = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        if (this.hasBatch) {
            throw new exceptions_1.NotSupportedInBatchException("The ensure list method");
        }
        return new Promise(function (resolve, reject) {
            var addOrUpdateSettings = util_1.Util.extend(additionalSettings, { Title: title, Description: description, ContentTypesEnabled: enableContentTypes }, true);
            var list = _this.getByTitle(addOrUpdateSettings.Title);
            list.get().then(function (_) {
                list.update(addOrUpdateSettings).then(function (d) {
                    resolve({ created: false, data: d, list: _this.getByTitle(addOrUpdateSettings.Title) });
                }).catch(function (e) { return reject(e); });
            }).catch(function (_) {
                _this.add(title, description, template, enableContentTypes, addOrUpdateSettings).then(function (r) {
                    resolve({ created: true, data: r.data, list: _this.getByTitle(addOrUpdateSettings.Title) });
                }).catch(function (e) { return reject(e); });
            });
        });
    };
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    Lists.prototype.ensureSiteAssetsLibrary = function () {
        return this.clone(Lists, "ensuresiteassetslibrary").postCore().then(function (json) {
            return new List(odata_1.spExtractODataId(json));
        });
    };
    /**
     * Gets a list that is the default location for wiki pages.
     */
    Lists.prototype.ensureSitePagesLibrary = function () {
        return this.clone(Lists, "ensuresitepageslibrary").postCore().then(function (json) {
            return new List(odata_1.spExtractODataId(json));
        });
    };
    return Lists;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.Lists = Lists;
/**
 * Describes a single List instance
 *
 */
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(List.prototype, "contentTypes", {
        /**
         * Gets the content types in this list
         *
         */
        get: function () {
            return new contenttypes_1.ContentTypes(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "items", {
        /**
         * Gets the items in this list
         *
         */
        get: function () {
            return new items_1.Items(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "views", {
        /**
         * Gets the views in this list
         *
         */
        get: function () {
            return new views_1.Views(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "fields", {
        /**
         * Gets the fields in this list
         *
         */
        get: function () {
            return new fields_1.Fields(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "forms", {
        /**
         * Gets the forms in this list
         *
         */
        get: function () {
            return new forms_1.Forms(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "defaultView", {
        /**
         * Gets the default view of this list
         *
         */
        get: function () {
            return new views_1.View(this, "DefaultView");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "userCustomActions", {
        /**
         * Get all custom actions on a site collection
         *
         */
        get: function () {
            return new usercustomactions_1.UserCustomActions(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions of this list
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryable(this, "EffectiveBasePermissions");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "eventReceivers", {
        /**
         * Gets the event receivers attached to this list
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableCollection(this, "EventReceivers");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "relatedFields", {
        /**
         * Gets the related fields of this list
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryable(this, "getRelatedFields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "informationRightsManagementSettings", {
        /**
         * Gets the IRM settings for this list
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryable(this, "InformationRightsManagementSettings");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "subscriptions", {
        /**
         * Gets the webhook subscriptions of this list
         *
         */
        get: function () {
            return new subscriptions_1.Subscriptions(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(List.prototype, "rootFolder", {
        /**
         * The root folder of the list
         */
        get: function () {
            return new folders_1.Folder(this, "rootFolder");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a view by view guid id
     *
     */
    List.prototype.getView = function (viewId) {
        return new views_1.View(this, "getView('" + viewId + "')");
    };
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    /* tslint:disable no-string-literal */
    List.prototype.update = function (properties, eTag) {
        var _this = this;
        if (eTag === void 0) { eTag = "*"; }
        var postBody = JSON.stringify(util_1.Util.extend({
            "__metadata": { "type": "SP.List" },
        }, properties));
        return this.postCore({
            body: postBody,
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (data) {
            var retList = _this;
            if (properties.hasOwnProperty("Title")) {
                retList = _this.getParent(List, _this.parentUrl, "getByTitle('" + properties["Title"] + "')");
            }
            return {
                data: data,
                list: retList,
            };
        });
    };
    /* tslint:enable */
    /**
     * Delete this list
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    List.prototype.delete = function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return this.postCore({
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     */
    List.prototype.getChanges = function (query) {
        return this.clone(List, "getchanges").postCore({
            body: JSON.stringify({ "query": util_1.Util.extend({ "__metadata": { "type": "SP.ChangeQuery" } }, query) }),
        });
    };
    /**
     * Returns a collection of items from the list based on the specified query.
     *
     * @param CamlQuery The Query schema of Collaborative Application Markup
     * Language (CAML) is used in various ways within the context of Microsoft SharePoint Foundation
     * to define queries against list data.
     * see:
     *
     * https://msdn.microsoft.com/en-us/library/office/ms467521.aspx
     *
     * @param expands A URI with a $expand System Query Option indicates that Entries associated with
     * the Entry or Collection of Entries identified by the Resource Path
     * section of the URI must be represented inline (i.e. eagerly loaded).
     * see:
     *
     * https://msdn.microsoft.com/en-us/library/office/fp142385.aspx
     *
     * http://www.odata.org/documentation/odata-version-2-0/uri-conventions/#ExpandSystemQueryOption
     */
    List.prototype.getItemsByCAMLQuery = function (query) {
        var expands = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            expands[_i - 1] = arguments[_i];
        }
        var q = this.clone(List, "getitems");
        return q.expand.apply(q, expands).postCore({
            body: JSON.stringify({ "query": util_1.Util.extend({ "__metadata": { "type": "SP.CamlQuery" } }, query) }),
        });
    };
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     */
    List.prototype.getListItemChangesSinceToken = function (query) {
        return this.clone(List, "getlistitemchangessincetoken").postCore({
            body: JSON.stringify({ "query": util_1.Util.extend({ "__metadata": { "type": "SP.ChangeLogItemQuery" } }, query) }),
        }, { parse: function (r) { return r.text(); } });
    };
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    List.prototype.recycle = function () {
        return this.clone(List, "recycle").postCore().then(function (data) {
            if (data.hasOwnProperty("Recycle")) {
                return data.Recycle;
            }
            else {
                return data;
            }
        });
    };
    /**
     * Renders list data based on the view xml provided
     */
    List.prototype.renderListData = function (viewXml) {
        var q = this.clone(List, "renderlistdata(@viewXml)");
        q.query.add("@viewXml", "'" + viewXml + "'");
        return q.postCore().then(function (data) {
            if (data.hasOwnProperty("RenderListData")) {
                return JSON.parse(data.RenderListData);
            }
            return JSON.parse(data);
        });
    };
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParameters The parameters that are used to override and extend the regular SPRenderListDataParameters.
     */
    List.prototype.renderListDataAsStream = function (parameters, overrideParameters) {
        if (overrideParameters === void 0) { overrideParameters = null; }
        var postBody = {
            overrideParameters: util_1.Util.extend({
                "__metadata": { "type": "SP.RenderListDataOverrideParameters" },
            }, overrideParameters),
            parameters: util_1.Util.extend({
                "__metadata": { "type": "SP.RenderListDataParameters" },
            }, parameters),
        };
        return this.clone(List, "RenderListDataAsStream", true).postCore({
            body: JSON.stringify(postBody),
        });
    };
    /**
     * Gets the field values and field schema attributes for a list item.
     */
    List.prototype.renderListFormData = function (itemId, formId, mode) {
        return this.clone(List, "renderlistformdata(itemid=" + itemId + ", formid='" + formId + "', mode='" + mode + "')").postCore().then(function (data) {
            // data will be a string, so we parse it again
            data = JSON.parse(data);
            if (data.hasOwnProperty("ListData")) {
                return data.ListData;
            }
            else {
                return data;
            }
        });
    };
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    List.prototype.reserveListItemId = function () {
        return this.clone(List, "reservelistitemid").postCore().then(function (data) {
            if (data.hasOwnProperty("ReserveListItemId")) {
                return data.ReserveListItemId;
            }
            else {
                return data;
            }
        });
    };
    /**
     * Returns the ListItemEntityTypeFullName for this list, used when adding/updating list items. Does not support batching.
     *
     */
    List.prototype.getListItemEntityTypeFullName = function () {
        return this.clone(List, null, false).select("ListItemEntityTypeFullName").getAs().then(function (o) { return o.ListItemEntityTypeFullName; });
    };
    return List;
}(sharepointqueryablesecurable_1.SharePointQueryableSecurable));
exports.List = List;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var webs_1 = __webpack_require__(11);
var odata_1 = __webpack_require__(3);
var sharepointqueryable_1 = __webpack_require__(1);
var sharepointqueryablesecurable_1 = __webpack_require__(36);
var types_1 = __webpack_require__(17);
/**
 * Internal helper class used to augment classes to include sharing functionality
 */
var SharePointQueryableShareable = /** @class */ (function (_super) {
    __extends(SharePointQueryableShareable, _super);
    function SharePointQueryableShareable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a sharing link for the supplied
     *
     * @param kind The kind of link to share
     * @param expiration The optional expiration for this link
     */
    SharePointQueryableShareable.prototype.getShareLink = function (kind, expiration) {
        if (expiration === void 0) { expiration = null; }
        // date needs to be an ISO string or null
        var expString = expiration !== null ? expiration.toISOString() : null;
        // clone using the factory and send the request
        return this.clone(SharePointQueryableShareable, "shareLink").postAsCore({
            body: JSON.stringify({
                request: {
                    createLink: true,
                    emailData: null,
                    settings: {
                        expiration: expString,
                        linkKind: kind,
                    },
                },
            }),
        });
    };
    /**
     * Shares this instance with the supplied users
     *
     * @param loginNames Resolved login names to share
     * @param role The role
     * @param requireSignin True to require the user is authenticated, otherwise false
     * @param propagateAcl True to apply this share to all children
     * @param emailData If supplied an email will be sent with the indicated properties
     */
    SharePointQueryableShareable.prototype.shareWith = function (loginNames, role, requireSignin, propagateAcl, emailData) {
        var _this = this;
        if (requireSignin === void 0) { requireSignin = false; }
        if (propagateAcl === void 0) { propagateAcl = false; }
        // handle the multiple input types
        if (!Array.isArray(loginNames)) {
            loginNames = [loginNames];
        }
        var userStr = JSON.stringify(loginNames.map(function (login) { return { Key: login }; }));
        var roleFilter = role === types_1.SharingRole.Edit ? types_1.RoleType.Contributor : types_1.RoleType.Reader;
        // start by looking up the role definition id we need to set the roleValue
        return webs_1.Web.fromUrl(this.toUrl()).roleDefinitions.select("Id").filter("RoleTypeKind eq " + roleFilter).get().then(function (def) {
            if (!Array.isArray(def) || def.length < 1) {
                throw new Error("Could not locate a role defintion with RoleTypeKind " + roleFilter);
            }
            var postBody = {
                includeAnonymousLinkInEmail: requireSignin,
                peoplePickerInput: userStr,
                propagateAcl: propagateAcl,
                roleValue: "role:" + def[0].Id,
                useSimplifiedRoles: true,
            };
            if (typeof emailData !== "undefined") {
                postBody = util_1.Util.extend(postBody, {
                    emailBody: emailData.body,
                    emailSubject: typeof emailData.subject !== "undefined" ? emailData.subject : "",
                    sendEmail: true,
                });
            }
            return _this.clone(SharePointQueryableShareable, "shareObject").postAsCore({
                body: JSON.stringify(postBody),
            });
        });
    };
    /**
     * Shares an object based on the supplied options
     *
     * @param options The set of options to send to the ShareObject method
     * @param bypass If true any processing is skipped and the options are sent directly to the ShareObject method
     */
    SharePointQueryableShareable.prototype.shareObject = function (options, bypass) {
        var _this = this;
        if (bypass === void 0) { bypass = false; }
        if (bypass) {
            // if the bypass flag is set send the supplied parameters directly to the service
            return this.sendShareObjectRequest(options);
        }
        // extend our options with some defaults
        options = util_1.Util.extend(options, {
            group: null,
            includeAnonymousLinkInEmail: false,
            propagateAcl: false,
            useSimplifiedRoles: true,
        }, true);
        return this.getRoleValue(options.role, options.group).then(function (roleValue) {
            // handle the multiple input types
            if (!Array.isArray(options.loginNames)) {
                options.loginNames = [options.loginNames];
            }
            var userStr = JSON.stringify(options.loginNames.map(function (login) { return { Key: login }; }));
            var postBody = {
                peoplePickerInput: userStr,
                roleValue: roleValue,
                url: options.url,
            };
            if (typeof options.emailData !== "undefined" && options.emailData !== null) {
                postBody = util_1.Util.extend(postBody, {
                    emailBody: options.emailData.body,
                    emailSubject: typeof options.emailData.subject !== "undefined" ? options.emailData.subject : "Shared with you.",
                    sendEmail: true,
                });
            }
            return _this.sendShareObjectRequest(postBody);
        });
    };
    /**
     * Calls the web's UnshareObject method
     *
     * @param url The url of the object to unshare
     */
    SharePointQueryableShareable.prototype.unshareObjectWeb = function (url) {
        return this.clone(SharePointQueryableShareable, "unshareObject").postAsCore({
            body: JSON.stringify({
                url: url,
            }),
        });
    };
    /**
     * Checks Permissions on the list of Users and returns back role the users have on the Item.
     *
     * @param recipients The array of Entities for which Permissions need to be checked.
     */
    SharePointQueryableShareable.prototype.checkPermissions = function (recipients) {
        return this.clone(SharePointQueryableShareable, "checkPermissions").postAsCore({
            body: JSON.stringify({
                recipients: recipients,
            }),
        });
    };
    /**
     * Get Sharing Information.
     *
     * @param request The SharingInformationRequest Object.
     */
    SharePointQueryableShareable.prototype.getSharingInformation = function (request) {
        if (request === void 0) { request = null; }
        return this.clone(SharePointQueryableShareable, "getSharingInformation").postAsCore({
            body: JSON.stringify({
                request: request,
            }),
        });
    };
    /**
     * Gets the sharing settings of an item.
     *
     * @param useSimplifiedRoles Determines whether to use simplified roles.
     */
    SharePointQueryableShareable.prototype.getObjectSharingSettings = function (useSimplifiedRoles) {
        if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
        return this.clone(SharePointQueryableShareable, "getObjectSharingSettings").postAsCore({
            body: JSON.stringify({
                useSimplifiedRoles: useSimplifiedRoles,
            }),
        });
    };
    /**
     * Unshares this object
     */
    SharePointQueryableShareable.prototype.unshareObject = function () {
        return this.clone(SharePointQueryableShareable, "unshareObject").postAsCore();
    };
    /**
     * Deletes a link by type
     *
     * @param kind Deletes a sharing link by the kind of link
     */
    SharePointQueryableShareable.prototype.deleteLinkByKind = function (kind) {
        return this.clone(SharePointQueryableShareable, "deleteLinkByKind").postCore({
            body: JSON.stringify({ linkKind: kind }),
        });
    };
    /**
     * Removes the specified link to the item.
     *
     * @param kind The kind of link to be deleted.
     * @param shareId
     */
    SharePointQueryableShareable.prototype.unshareLink = function (kind, shareId) {
        if (shareId === void 0) { shareId = "00000000-0000-0000-0000-000000000000"; }
        return this.clone(SharePointQueryableShareable, "unshareLink").postCore({
            body: JSON.stringify({ linkKind: kind, shareId: shareId }),
        });
    };
    /**
     * Calculates the roleValue string used in the sharing query
     *
     * @param role The Sharing Role
     * @param group The Group type
     */
    SharePointQueryableShareable.prototype.getRoleValue = function (role, group) {
        // we will give group precedence, because we had to make a choice
        if (typeof group !== "undefined" && group !== null) {
            switch (group) {
                case types_1.RoleType.Contributor:
                    return webs_1.Web.fromUrl(this.toUrl()).associatedMemberGroup.select("Id").getAs().then(function (g) { return "group: " + g.Id; });
                case types_1.RoleType.Reader:
                case types_1.RoleType.Guest:
                    return webs_1.Web.fromUrl(this.toUrl()).associatedVisitorGroup.select("Id").getAs().then(function (g) { return "group: " + g.Id; });
                default:
                    throw new Error("Could not determine role value for supplied value. Contributor, Reader, and Guest are supported");
            }
        }
        else {
            var roleFilter = role === types_1.SharingRole.Edit ? types_1.RoleType.Contributor : types_1.RoleType.Reader;
            return webs_1.Web.fromUrl(this.toUrl()).roleDefinitions.select("Id").top(1).filter("RoleTypeKind eq " + roleFilter).getAs().then(function (def) {
                if (def.length < 1) {
                    throw new Error("Could not locate associated role definition for supplied role. Edit and View are supported");
                }
                return "role: " + def[0].Id;
            });
        }
    };
    SharePointQueryableShareable.prototype.getShareObjectWeb = function (candidate) {
        return Promise.resolve(webs_1.Web.fromUrl(candidate, "/_api/SP.Web.ShareObject"));
    };
    SharePointQueryableShareable.prototype.sendShareObjectRequest = function (options) {
        return this.getShareObjectWeb(this.toUrl()).then(function (web) {
            return web.expand("UsersWithAccessRequests", "GroupsSharedWith").as(SharePointQueryableShareable).postCore({
                body: JSON.stringify(options),
            });
        });
    };
    return SharePointQueryableShareable;
}(sharepointqueryable_1.SharePointQueryable));
exports.SharePointQueryableShareable = SharePointQueryableShareable;
var SharePointQueryableShareableWeb = /** @class */ (function (_super) {
    __extends(SharePointQueryableShareableWeb, _super);
    function SharePointQueryableShareableWeb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shares this web with the supplied users
     * @param loginNames The resolved login names to share
     * @param role The role to share this web
     * @param emailData Optional email data
     */
    SharePointQueryableShareableWeb.prototype.shareWith = function (loginNames, role, emailData) {
        var _this = this;
        if (role === void 0) { role = types_1.SharingRole.View; }
        var dependency = this.addBatchDependency();
        return webs_1.Web.fromUrl(this.toUrl(), "/_api/web/url").get().then(function (url) {
            dependency();
            return _this.shareObject(util_1.Util.combinePaths(url, "/_layouts/15/aclinv.aspx?forSharing=1&mbypass=1"), loginNames, role, emailData);
        });
    };
    /**
     * Provides direct access to the static web.ShareObject method
     *
     * @param url The url to share
     * @param loginNames Resolved loginnames string[] of a single login name string
     * @param roleValue Role value
     * @param emailData Optional email data
     * @param groupId Optional group id
     * @param propagateAcl
     * @param includeAnonymousLinkInEmail
     * @param useSimplifiedRoles
     */
    SharePointQueryableShareableWeb.prototype.shareObject = function (url, loginNames, role, emailData, group, propagateAcl, includeAnonymousLinkInEmail, useSimplifiedRoles) {
        if (propagateAcl === void 0) { propagateAcl = false; }
        if (includeAnonymousLinkInEmail === void 0) { includeAnonymousLinkInEmail = false; }
        if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
        return this.clone(SharePointQueryableShareable, null).shareObject({
            emailData: emailData,
            group: group,
            includeAnonymousLinkInEmail: includeAnonymousLinkInEmail,
            loginNames: loginNames,
            propagateAcl: propagateAcl,
            role: role,
            url: url,
            useSimplifiedRoles: useSimplifiedRoles,
        });
    };
    /**
     * Supplies a method to pass any set of arguments to ShareObject
     *
     * @param options The set of options to send to ShareObject
     */
    SharePointQueryableShareableWeb.prototype.shareObjectRaw = function (options) {
        return this.clone(SharePointQueryableShareable, null).shareObject(options, true);
    };
    /**
     * Unshares the object
     *
     * @param url The url of the object to stop sharing
     */
    SharePointQueryableShareableWeb.prototype.unshareObject = function (url) {
        return this.clone(SharePointQueryableShareable, null).unshareObjectWeb(url);
    };
    return SharePointQueryableShareableWeb;
}(sharepointqueryablesecurable_1.SharePointQueryableSecurable));
exports.SharePointQueryableShareableWeb = SharePointQueryableShareableWeb;
var SharePointQueryableShareableItem = /** @class */ (function (_super) {
    __extends(SharePointQueryableShareableItem, _super);
    function SharePointQueryableShareableItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a link suitable for sharing for this item
     *
     * @param kind The type of link to share
     * @param expiration The optional expiration date
     */
    SharePointQueryableShareableItem.prototype.getShareLink = function (kind, expiration) {
        if (kind === void 0) { kind = types_1.SharingLinkKind.OrganizationView; }
        if (expiration === void 0) { expiration = null; }
        return this.clone(SharePointQueryableShareable, null).getShareLink(kind, expiration);
    };
    /**
     * Shares this item with one or more users
     *
     * @param loginNames string or string[] of resolved login names to which this item will be shared
     * @param role The role (View | Edit) applied to the share
     * @param emailData Optional, if inlucded an email will be sent. Note subject currently has no effect.
     */
    SharePointQueryableShareableItem.prototype.shareWith = function (loginNames, role, requireSignin, emailData) {
        if (role === void 0) { role = types_1.SharingRole.View; }
        if (requireSignin === void 0) { requireSignin = false; }
        return this.clone(SharePointQueryableShareable, null).shareWith(loginNames, role, requireSignin, false, emailData);
    };
    /**
     * Checks Permissions on the list of Users and returns back role the users have on the Item.
     *
     * @param recipients The array of Entities for which Permissions need to be checked.
     */
    SharePointQueryableShareableItem.prototype.checkSharingPermissions = function (recipients) {
        return this.clone(SharePointQueryableShareable, null).checkPermissions(recipients);
    };
    /**
     * Get Sharing Information.
     *
     * @param request The SharingInformationRequest Object.
     */
    SharePointQueryableShareableItem.prototype.getSharingInformation = function (request) {
        if (request === void 0) { request = null; }
        return this.clone(SharePointQueryableShareable, null).getSharingInformation(request);
    };
    /**
     * Gets the sharing settings of an item.
     *
     * @param useSimplifiedRoles Determines whether to use simplified roles.
     */
    SharePointQueryableShareableItem.prototype.getObjectSharingSettings = function (useSimplifiedRoles) {
        if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
        return this.clone(SharePointQueryableShareable, null).getObjectSharingSettings(useSimplifiedRoles);
    };
    /**
     * Unshare this item
     */
    SharePointQueryableShareableItem.prototype.unshare = function () {
        return this.clone(SharePointQueryableShareable, null).unshareObject();
    };
    /**
     * Deletes a sharing link by kind
     *
     * @param kind Deletes a sharing link by the kind of link
     */
    SharePointQueryableShareableItem.prototype.deleteSharingLinkByKind = function (kind) {
        return this.clone(SharePointQueryableShareable, null).deleteLinkByKind(kind);
    };
    /**
     * Removes the specified link to the item.
     *
     * @param kind The kind of link to be deleted.
     * @param shareId
     */
    SharePointQueryableShareableItem.prototype.unshareLink = function (kind, shareId) {
        return this.clone(SharePointQueryableShareable, null).unshareLink(kind, shareId);
    };
    return SharePointQueryableShareableItem;
}(sharepointqueryablesecurable_1.SharePointQueryableSecurable));
exports.SharePointQueryableShareableItem = SharePointQueryableShareableItem;
var FileFolderShared = /** @class */ (function (_super) {
    __extends(FileFolderShared, _super);
    function FileFolderShared() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a link suitable for sharing
     *
     * @param kind The kind of link to get
     * @param expiration Optional, an expiration for this link
     */
    FileFolderShared.prototype.getShareLink = function (kind, expiration) {
        if (kind === void 0) { kind = types_1.SharingLinkKind.OrganizationView; }
        if (expiration === void 0) { expiration = null; }
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.getShareLink(kind, expiration);
        });
    };
    /**
         * Checks Permissions on the list of Users and returns back role the users have on the Item.
         *
         * @param recipients The array of Entities for which Permissions need to be checked.
         */
    FileFolderShared.prototype.checkSharingPermissions = function (recipients) {
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.checkPermissions(recipients);
        });
    };
    /**
     * Get Sharing Information.
     *
     * @param request The SharingInformationRequest Object.
     */
    FileFolderShared.prototype.getSharingInformation = function (request) {
        if (request === void 0) { request = null; }
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.getSharingInformation(request);
        });
    };
    /**
     * Gets the sharing settings of an item.
     *
     * @param useSimplifiedRoles Determines whether to use simplified roles.
     */
    FileFolderShared.prototype.getObjectSharingSettings = function (useSimplifiedRoles) {
        if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.getObjectSharingSettings(useSimplifiedRoles);
        });
    };
    /**
     * Unshare this item
     */
    FileFolderShared.prototype.unshare = function () {
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.unshareObject();
        });
    };
    /**
     * Deletes a sharing link by the kind of link
     *
     * @param kind The kind of link to be deleted.
     */
    FileFolderShared.prototype.deleteSharingLinkByKind = function (kind) {
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.deleteLinkByKind(kind);
        });
    };
    /**
     * Removes the specified link to the item.
     *
     * @param kind The kind of link to be deleted.
     * @param shareId The share id to delete
     */
    FileFolderShared.prototype.unshareLink = function (kind, shareId) {
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.unshareLink(kind, shareId);
        });
    };
    /**
     * For files and folders we need to use the associated item end point
     */
    FileFolderShared.prototype.getShareable = function () {
        var _this = this;
        // sharing only works on the item end point, not the file one - so we create a folder instance with the item url internally
        return this.clone(SharePointQueryableShareableFile, "listItemAllFields", false).select("odata.editlink").get().then(function (d) {
            var shareable = new SharePointQueryableShareable(odata_1.spGetEntityUrl(d));
            // we need to handle batching
            if (_this.hasBatch) {
                shareable = shareable.inBatch(_this.batch);
            }
            return shareable;
        });
    };
    return FileFolderShared;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.FileFolderShared = FileFolderShared;
var SharePointQueryableShareableFile = /** @class */ (function (_super) {
    __extends(SharePointQueryableShareableFile, _super);
    function SharePointQueryableShareableFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shares this item with one or more users
     *
     * @param loginNames string or string[] of resolved login names to which this item will be shared
     * @param role The role (View | Edit) applied to the share
     * @param shareEverything Share everything in this folder, even items with unique permissions.
     * @param requireSignin If true the user must signin to view link, otherwise anyone with the link can access the resource
     * @param emailData Optional, if inlucded an email will be sent. Note subject currently has no effect.
     */
    SharePointQueryableShareableFile.prototype.shareWith = function (loginNames, role, requireSignin, emailData) {
        if (role === void 0) { role = types_1.SharingRole.View; }
        if (requireSignin === void 0) { requireSignin = false; }
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.shareWith(loginNames, role, requireSignin, false, emailData);
        });
    };
    return SharePointQueryableShareableFile;
}(FileFolderShared));
exports.SharePointQueryableShareableFile = SharePointQueryableShareableFile;
var SharePointQueryableShareableFolder = /** @class */ (function (_super) {
    __extends(SharePointQueryableShareableFolder, _super);
    function SharePointQueryableShareableFolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shares this item with one or more users
     *
     * @param loginNames string or string[] of resolved login names to which this item will be shared
     * @param role The role (View | Edit) applied to the share
     * @param shareEverything Share everything in this folder, even items with unique permissions.
     * @param requireSignin If true the user must signin to view link, otherwise anyone with the link can access the resource
     * @param emailData Optional, if inlucded an email will be sent. Note subject currently has no effect.
     */
    SharePointQueryableShareableFolder.prototype.shareWith = function (loginNames, role, requireSignin, shareEverything, emailData) {
        if (role === void 0) { role = types_1.SharingRole.View; }
        if (requireSignin === void 0) { requireSignin = false; }
        if (shareEverything === void 0) { shareEverything = false; }
        var dependency = this.addBatchDependency();
        return this.getShareable().then(function (shareable) {
            dependency();
            return shareable.shareWith(loginNames, role, requireSignin, shareEverything, emailData);
        });
    };
    return SharePointQueryableShareableFolder;
}(FileFolderShared));
exports.SharePointQueryableShareableFolder = SharePointQueryableShareableFolder;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines the display mode of the given control or view
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Display"] = 1] = "Display";
    ControlMode[ControlMode["Edit"] = 2] = "Edit";
    ControlMode[ControlMode["New"] = 3] = "New";
})(ControlMode = exports.ControlMode || (exports.ControlMode = {}));
/**
 * Specifies the type of the field.
 */
var FieldTypes;
(function (FieldTypes) {
    FieldTypes[FieldTypes["Invalid"] = 0] = "Invalid";
    FieldTypes[FieldTypes["Integer"] = 1] = "Integer";
    FieldTypes[FieldTypes["Text"] = 2] = "Text";
    FieldTypes[FieldTypes["Note"] = 3] = "Note";
    FieldTypes[FieldTypes["DateTime"] = 4] = "DateTime";
    FieldTypes[FieldTypes["Counter"] = 5] = "Counter";
    FieldTypes[FieldTypes["Choice"] = 6] = "Choice";
    FieldTypes[FieldTypes["Lookup"] = 7] = "Lookup";
    FieldTypes[FieldTypes["Boolean"] = 8] = "Boolean";
    FieldTypes[FieldTypes["Number"] = 9] = "Number";
    FieldTypes[FieldTypes["Currency"] = 10] = "Currency";
    FieldTypes[FieldTypes["URL"] = 11] = "URL";
    FieldTypes[FieldTypes["Computed"] = 12] = "Computed";
    FieldTypes[FieldTypes["Threading"] = 13] = "Threading";
    FieldTypes[FieldTypes["Guid"] = 14] = "Guid";
    FieldTypes[FieldTypes["MultiChoice"] = 15] = "MultiChoice";
    FieldTypes[FieldTypes["GridChoice"] = 16] = "GridChoice";
    FieldTypes[FieldTypes["Calculated"] = 17] = "Calculated";
    FieldTypes[FieldTypes["File"] = 18] = "File";
    FieldTypes[FieldTypes["Attachments"] = 19] = "Attachments";
    FieldTypes[FieldTypes["User"] = 20] = "User";
    FieldTypes[FieldTypes["Recurrence"] = 21] = "Recurrence";
    FieldTypes[FieldTypes["CrossProjectLink"] = 22] = "CrossProjectLink";
    FieldTypes[FieldTypes["ModStat"] = 23] = "ModStat";
    FieldTypes[FieldTypes["Error"] = 24] = "Error";
    FieldTypes[FieldTypes["ContentTypeId"] = 25] = "ContentTypeId";
    FieldTypes[FieldTypes["PageSeparator"] = 26] = "PageSeparator";
    FieldTypes[FieldTypes["ThreadIndex"] = 27] = "ThreadIndex";
    FieldTypes[FieldTypes["WorkflowStatus"] = 28] = "WorkflowStatus";
    FieldTypes[FieldTypes["AllDayEvent"] = 29] = "AllDayEvent";
    FieldTypes[FieldTypes["WorkflowEventType"] = 30] = "WorkflowEventType";
})(FieldTypes = exports.FieldTypes || (exports.FieldTypes = {}));
var DateTimeFieldFormatType;
(function (DateTimeFieldFormatType) {
    DateTimeFieldFormatType[DateTimeFieldFormatType["DateOnly"] = 0] = "DateOnly";
    DateTimeFieldFormatType[DateTimeFieldFormatType["DateTime"] = 1] = "DateTime";
})(DateTimeFieldFormatType = exports.DateTimeFieldFormatType || (exports.DateTimeFieldFormatType = {}));
/**
 * Specifies the control settings while adding a field.
 */
var AddFieldOptions;
(function (AddFieldOptions) {
    /**
     *  Specify that a new field added to the list must also be added to the default content type in the site collection
     */
    AddFieldOptions[AddFieldOptions["DefaultValue"] = 0] = "DefaultValue";
    /**
     * Specify that a new field added to the list must also be added to the default content type in the site collection.
     */
    AddFieldOptions[AddFieldOptions["AddToDefaultContentType"] = 1] = "AddToDefaultContentType";
    /**
     * Specify that a new field must not be added to any other content type
     */
    AddFieldOptions[AddFieldOptions["AddToNoContentType"] = 2] = "AddToNoContentType";
    /**
     *  Specify that a new field that is added to the specified list must also be added to all content types in the site collection
     */
    AddFieldOptions[AddFieldOptions["AddToAllContentTypes"] = 4] = "AddToAllContentTypes";
    /**
     * Specify adding an internal field name hint for the purpose of avoiding possible database locking or field renaming operations
     */
    AddFieldOptions[AddFieldOptions["AddFieldInternalNameHint"] = 8] = "AddFieldInternalNameHint";
    /**
     * Specify that a new field that is added to the specified list must also be added to the default list view
     */
    AddFieldOptions[AddFieldOptions["AddFieldToDefaultView"] = 16] = "AddFieldToDefaultView";
    /**
     * Specify to confirm that no other field has the same display name
     */
    AddFieldOptions[AddFieldOptions["AddFieldCheckDisplayName"] = 32] = "AddFieldCheckDisplayName";
})(AddFieldOptions = exports.AddFieldOptions || (exports.AddFieldOptions = {}));
var CalendarType;
(function (CalendarType) {
    CalendarType[CalendarType["Gregorian"] = 1] = "Gregorian";
    CalendarType[CalendarType["Japan"] = 3] = "Japan";
    CalendarType[CalendarType["Taiwan"] = 4] = "Taiwan";
    CalendarType[CalendarType["Korea"] = 5] = "Korea";
    CalendarType[CalendarType["Hijri"] = 6] = "Hijri";
    CalendarType[CalendarType["Thai"] = 7] = "Thai";
    CalendarType[CalendarType["Hebrew"] = 8] = "Hebrew";
    CalendarType[CalendarType["GregorianMEFrench"] = 9] = "GregorianMEFrench";
    CalendarType[CalendarType["GregorianArabic"] = 10] = "GregorianArabic";
    CalendarType[CalendarType["GregorianXLITEnglish"] = 11] = "GregorianXLITEnglish";
    CalendarType[CalendarType["GregorianXLITFrench"] = 12] = "GregorianXLITFrench";
    CalendarType[CalendarType["KoreaJapanLunar"] = 14] = "KoreaJapanLunar";
    CalendarType[CalendarType["ChineseLunar"] = 15] = "ChineseLunar";
    CalendarType[CalendarType["SakaEra"] = 16] = "SakaEra";
    CalendarType[CalendarType["UmAlQura"] = 23] = "UmAlQura";
})(CalendarType = exports.CalendarType || (exports.CalendarType = {}));
var UrlFieldFormatType;
(function (UrlFieldFormatType) {
    UrlFieldFormatType[UrlFieldFormatType["Hyperlink"] = 0] = "Hyperlink";
    UrlFieldFormatType[UrlFieldFormatType["Image"] = 1] = "Image";
})(UrlFieldFormatType = exports.UrlFieldFormatType || (exports.UrlFieldFormatType = {}));
var ChoiceFieldFormatType;
(function (ChoiceFieldFormatType) {
    ChoiceFieldFormatType[ChoiceFieldFormatType["Dropdown"] = 0] = "Dropdown";
    ChoiceFieldFormatType[ChoiceFieldFormatType["RadioButtons"] = 1] = "RadioButtons";
})(ChoiceFieldFormatType = exports.ChoiceFieldFormatType || (exports.ChoiceFieldFormatType = {}));
var PermissionKind;
(function (PermissionKind) {
    /**
     * Has no permissions on the Site. Not available through the user interface.
     */
    PermissionKind[PermissionKind["EmptyMask"] = 0] = "EmptyMask";
    /**
     * View items in lists, documents in document libraries, and Web discussion comments.
     */
    PermissionKind[PermissionKind["ViewListItems"] = 1] = "ViewListItems";
    /**
     * Add items to lists, documents to document libraries, and Web discussion comments.
     */
    PermissionKind[PermissionKind["AddListItems"] = 2] = "AddListItems";
    /**
     * Edit items in lists, edit documents in document libraries, edit Web discussion comments
     * in documents, and customize Web Part Pages in document libraries.
     */
    PermissionKind[PermissionKind["EditListItems"] = 3] = "EditListItems";
    /**
     * Delete items from a list, documents from a document library, and Web discussion
     * comments in documents.
     */
    PermissionKind[PermissionKind["DeleteListItems"] = 4] = "DeleteListItems";
    /**
     * Approve a minor version of a list item or document.
     */
    PermissionKind[PermissionKind["ApproveItems"] = 5] = "ApproveItems";
    /**
     * View the source of documents with server-side file handlers.
     */
    PermissionKind[PermissionKind["OpenItems"] = 6] = "OpenItems";
    /**
     * View past versions of a list item or document.
     */
    PermissionKind[PermissionKind["ViewVersions"] = 7] = "ViewVersions";
    /**
     * Delete past versions of a list item or document.
     */
    PermissionKind[PermissionKind["DeleteVersions"] = 8] = "DeleteVersions";
    /**
     * Discard or check in a document which is checked out to another user.
     */
    PermissionKind[PermissionKind["CancelCheckout"] = 9] = "CancelCheckout";
    /**
     * Create, change, and delete personal views of lists.
     */
    PermissionKind[PermissionKind["ManagePersonalViews"] = 10] = "ManagePersonalViews";
    /**
     * Create and delete lists, add or remove columns in a list, and add or remove public views of a list.
     */
    PermissionKind[PermissionKind["ManageLists"] = 12] = "ManageLists";
    /**
     * View forms, views, and application pages, and enumerate lists.
     */
    PermissionKind[PermissionKind["ViewFormPages"] = 13] = "ViewFormPages";
    /**
     * Make content of a list or document library retrieveable for anonymous users through SharePoint search.
     * The list permissions in the site do not change.
     */
    PermissionKind[PermissionKind["AnonymousSearchAccessList"] = 14] = "AnonymousSearchAccessList";
    /**
     * Allow users to open a Site, list, or folder to access items inside that container.
     */
    PermissionKind[PermissionKind["Open"] = 17] = "Open";
    /**
     * View pages in a Site.
     */
    PermissionKind[PermissionKind["ViewPages"] = 18] = "ViewPages";
    /**
     * Add, change, or delete HTML pages or Web Part Pages, and edit the Site using
     * a Windows SharePoint Services compatible editor.
     */
    PermissionKind[PermissionKind["AddAndCustomizePages"] = 19] = "AddAndCustomizePages";
    /**
     * Apply a theme or borders to the entire Site.
     */
    PermissionKind[PermissionKind["ApplyThemeAndBorder"] = 20] = "ApplyThemeAndBorder";
    /**
     * Apply a style sheet (.css file) to the Site.
     */
    PermissionKind[PermissionKind["ApplyStyleSheets"] = 21] = "ApplyStyleSheets";
    /**
     * View reports on Site usage.
     */
    PermissionKind[PermissionKind["ViewUsageData"] = 22] = "ViewUsageData";
    /**
     * Create a Site using Self-Service Site Creation.
     */
    PermissionKind[PermissionKind["CreateSSCSite"] = 23] = "CreateSSCSite";
    /**
     * Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.
     */
    PermissionKind[PermissionKind["ManageSubwebs"] = 24] = "ManageSubwebs";
    /**
     * Create a group of users that can be used anywhere within the site collection.
     */
    PermissionKind[PermissionKind["CreateGroups"] = 25] = "CreateGroups";
    /**
     * Create and change permission levels on the Site and assign permissions to users
     * and groups.
     */
    PermissionKind[PermissionKind["ManagePermissions"] = 26] = "ManagePermissions";
    /**
     * Enumerate files and folders in a Site using Microsoft Office SharePoint Designer
     * and WebDAV interfaces.
     */
    PermissionKind[PermissionKind["BrowseDirectories"] = 27] = "BrowseDirectories";
    /**
     * View information about users of the Site.
     */
    PermissionKind[PermissionKind["BrowseUserInfo"] = 28] = "BrowseUserInfo";
    /**
     * Add or remove personal Web Parts on a Web Part Page.
     */
    PermissionKind[PermissionKind["AddDelPrivateWebParts"] = 29] = "AddDelPrivateWebParts";
    /**
     * Update Web Parts to display personalized information.
     */
    PermissionKind[PermissionKind["UpdatePersonalWebParts"] = 30] = "UpdatePersonalWebParts";
    /**
     * Grant the ability to perform all administration tasks for the Site as well as
     * manage content, activate, deactivate, or edit properties of Site scoped Features
     * through the object model or through the user interface (UI). When granted on the
     * root Site of a Site Collection, activate, deactivate, or edit properties of
     * site collection scoped Features through the object model. To browse to the Site
     * Collection Features page and activate or deactivate Site Collection scoped Features
     * through the UI, you must be a Site Collection administrator.
     */
    PermissionKind[PermissionKind["ManageWeb"] = 31] = "ManageWeb";
    /**
     * Content of lists and document libraries in the Web site will be retrieveable for anonymous users through
     * SharePoint search if the list or document library has AnonymousSearchAccessList set.
     */
    PermissionKind[PermissionKind["AnonymousSearchAccessWebLists"] = 32] = "AnonymousSearchAccessWebLists";
    /**
     * Use features that launch client applications. Otherwise, users must work on documents
     * locally and upload changes.
     */
    PermissionKind[PermissionKind["UseClientIntegration"] = 37] = "UseClientIntegration";
    /**
     * Use SOAP, WebDAV, or Microsoft Office SharePoint Designer interfaces to access the Site.
     */
    PermissionKind[PermissionKind["UseRemoteAPIs"] = 38] = "UseRemoteAPIs";
    /**
     * Manage alerts for all users of the Site.
     */
    PermissionKind[PermissionKind["ManageAlerts"] = 39] = "ManageAlerts";
    /**
     * Create e-mail alerts.
     */
    PermissionKind[PermissionKind["CreateAlerts"] = 40] = "CreateAlerts";
    /**
     * Allows a user to change his or her user information, such as adding a picture.
     */
    PermissionKind[PermissionKind["EditMyUserInfo"] = 41] = "EditMyUserInfo";
    /**
     * Enumerate permissions on Site, list, folder, document, or list item.
     */
    PermissionKind[PermissionKind["EnumeratePermissions"] = 63] = "EnumeratePermissions";
    /**
     * Has all permissions on the Site. Not available through the user interface.
     */
    PermissionKind[PermissionKind["FullMask"] = 65] = "FullMask";
})(PermissionKind = exports.PermissionKind || (exports.PermissionKind = {}));
/* tslint:enable:no-bitwise */
var RoleType;
(function (RoleType) {
    RoleType[RoleType["None"] = 0] = "None";
    RoleType[RoleType["Guest"] = 1] = "Guest";
    RoleType[RoleType["Reader"] = 2] = "Reader";
    RoleType[RoleType["Contributor"] = 3] = "Contributor";
    RoleType[RoleType["WebDesigner"] = 4] = "WebDesigner";
    RoleType[RoleType["Administrator"] = 5] = "Administrator";
})(RoleType = exports.RoleType || (exports.RoleType = {}));
var PageType;
(function (PageType) {
    PageType[PageType["Invalid"] = -1] = "Invalid";
    PageType[PageType["DefaultView"] = 0] = "DefaultView";
    PageType[PageType["NormalView"] = 1] = "NormalView";
    PageType[PageType["DialogView"] = 2] = "DialogView";
    PageType[PageType["View"] = 3] = "View";
    PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
    PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
    PageType[PageType["EditForm"] = 6] = "EditForm";
    PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
    PageType[PageType["NewForm"] = 8] = "NewForm";
    PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
    PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
    PageType[PageType["PAGE_MAXITEMS"] = 11] = "PAGE_MAXITEMS";
})(PageType = exports.PageType || (exports.PageType = {}));
var SharingLinkKind;
(function (SharingLinkKind) {
    /**
     * Uninitialized link
     */
    SharingLinkKind[SharingLinkKind["Uninitialized"] = 0] = "Uninitialized";
    /**
     * Direct link to the object being shared
     */
    SharingLinkKind[SharingLinkKind["Direct"] = 1] = "Direct";
    /**
     * Organization-shareable link to the object being shared with view permissions
     */
    SharingLinkKind[SharingLinkKind["OrganizationView"] = 2] = "OrganizationView";
    /**
     * Organization-shareable link to the object being shared with edit permissions
     */
    SharingLinkKind[SharingLinkKind["OrganizationEdit"] = 3] = "OrganizationEdit";
    /**
     * View only anonymous link
     */
    SharingLinkKind[SharingLinkKind["AnonymousView"] = 4] = "AnonymousView";
    /**
     * Read/Write anonymous link
     */
    SharingLinkKind[SharingLinkKind["AnonymousEdit"] = 5] = "AnonymousEdit";
    /**
     * Flexible sharing Link where properties can change without affecting link URL
     */
    SharingLinkKind[SharingLinkKind["Flexible"] = 6] = "Flexible";
})(SharingLinkKind = exports.SharingLinkKind || (exports.SharingLinkKind = {}));
/**
 * Indicates the role of the sharing link
 */
var SharingRole;
(function (SharingRole) {
    SharingRole[SharingRole["None"] = 0] = "None";
    SharingRole[SharingRole["View"] = 1] = "View";
    SharingRole[SharingRole["Edit"] = 2] = "Edit";
    SharingRole[SharingRole["Owner"] = 3] = "Owner";
})(SharingRole = exports.SharingRole || (exports.SharingRole = {}));
var SharingOperationStatusCode;
(function (SharingOperationStatusCode) {
    /**
     * The share operation completed without errors.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CompletedSuccessfully"] = 0] = "CompletedSuccessfully";
    /**
     * The share operation completed and generated requests for access.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["AccessRequestsQueued"] = 1] = "AccessRequestsQueued";
    /**
     * The share operation failed as there were no resolved users.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["NoResolvedUsers"] = -1] = "NoResolvedUsers";
    /**
     * The share operation failed due to insufficient permissions.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["AccessDenied"] = -2] = "AccessDenied";
    /**
     * The share operation failed when attempting a cross site share, which is not supported.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CrossSiteRequestNotSupported"] = -3] = "CrossSiteRequestNotSupported";
    /**
     * The sharing operation failed due to an unknown error.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["UnknowError"] = -4] = "UnknowError";
    /**
     * The text you typed is too long. Please shorten it.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["EmailBodyTooLong"] = -5] = "EmailBodyTooLong";
    /**
     * The maximum number of unique scopes in the list has been exceeded.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["ListUniqueScopesExceeded"] = -6] = "ListUniqueScopesExceeded";
    /**
     * The share operation failed because a sharing capability is disabled in the site.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CapabilityDisabled"] = -7] = "CapabilityDisabled";
    /**
     * The specified object for the share operation is not supported.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["ObjectNotSupported"] = -8] = "ObjectNotSupported";
    /**
     * A SharePoint group cannot contain another SharePoint group.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["NestedGroupsNotSupported"] = -9] = "NestedGroupsNotSupported";
})(SharingOperationStatusCode = exports.SharingOperationStatusCode || (exports.SharingOperationStatusCode = {}));
var SPSharedObjectType;
(function (SPSharedObjectType) {
    SPSharedObjectType[SPSharedObjectType["Unknown"] = 0] = "Unknown";
    SPSharedObjectType[SPSharedObjectType["File"] = 1] = "File";
    SPSharedObjectType[SPSharedObjectType["Folder"] = 2] = "Folder";
    SPSharedObjectType[SPSharedObjectType["Item"] = 3] = "Item";
    SPSharedObjectType[SPSharedObjectType["List"] = 4] = "List";
    SPSharedObjectType[SPSharedObjectType["Web"] = 5] = "Web";
    SPSharedObjectType[SPSharedObjectType["Max"] = 6] = "Max";
})(SPSharedObjectType = exports.SPSharedObjectType || (exports.SPSharedObjectType = {}));
var SharingDomainRestrictionMode;
(function (SharingDomainRestrictionMode) {
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["None"] = 0] = "None";
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["AllowList"] = 1] = "AllowList";
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["BlockList"] = 2] = "BlockList";
})(SharingDomainRestrictionMode = exports.SharingDomainRestrictionMode || (exports.SharingDomainRestrictionMode = {}));
var RenderListDataOptions;
(function (RenderListDataOptions) {
    RenderListDataOptions[RenderListDataOptions["None"] = 0] = "None";
    RenderListDataOptions[RenderListDataOptions["ContextInfo"] = 1] = "ContextInfo";
    RenderListDataOptions[RenderListDataOptions["ListData"] = 2] = "ListData";
    RenderListDataOptions[RenderListDataOptions["ListSchema"] = 4] = "ListSchema";
    RenderListDataOptions[RenderListDataOptions["MenuView"] = 8] = "MenuView";
    RenderListDataOptions[RenderListDataOptions["ListContentType"] = 16] = "ListContentType";
    RenderListDataOptions[RenderListDataOptions["FileSystemItemId"] = 32] = "FileSystemItemId";
    RenderListDataOptions[RenderListDataOptions["ClientFormSchema"] = 64] = "ClientFormSchema";
    RenderListDataOptions[RenderListDataOptions["QuickLaunch"] = 128] = "QuickLaunch";
    RenderListDataOptions[RenderListDataOptions["Spotlight"] = 256] = "Spotlight";
    RenderListDataOptions[RenderListDataOptions["Visualization"] = 512] = "Visualization";
    RenderListDataOptions[RenderListDataOptions["ViewMetadata"] = 1024] = "ViewMetadata";
    RenderListDataOptions[RenderListDataOptions["DisableAutoHyperlink"] = 2048] = "DisableAutoHyperlink";
    RenderListDataOptions[RenderListDataOptions["EnableMediaTAUrls"] = 4096] = "EnableMediaTAUrls";
    RenderListDataOptions[RenderListDataOptions["ParentInfo"] = 8192] = "ParentInfo";
    RenderListDataOptions[RenderListDataOptions["PageContextInfo"] = 16384] = "PageContextInfo";
    RenderListDataOptions[RenderListDataOptions["ClientSideComponentManifest"] = 32768] = "ClientSideComponentManifest";
})(RenderListDataOptions = exports.RenderListDataOptions || (exports.RenderListDataOptions = {}));
var FieldUserSelectionMode;
(function (FieldUserSelectionMode) {
    FieldUserSelectionMode[FieldUserSelectionMode["PeopleAndGroups"] = 1] = "PeopleAndGroups";
    FieldUserSelectionMode[FieldUserSelectionMode["PeopleOnly"] = 0] = "PeopleOnly";
})(FieldUserSelectionMode = exports.FieldUserSelectionMode || (exports.FieldUserSelectionMode = {}));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var sharepointqueryableshareable_1 = __webpack_require__(16);
var files_1 = __webpack_require__(8);
var util_1 = __webpack_require__(0);
var odata_1 = __webpack_require__(3);
var items_1 = __webpack_require__(12);
/**
 * Describes a collection of Folder objects
 *
 */
var Folders = /** @class */ (function (_super) {
    __extends(Folders, _super);
    /**
     * Creates a new instance of the Folders class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this fields collection
     */
    function Folders(baseUrl, path) {
        if (path === void 0) { path = "folders"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a folder by folder name
     *
     */
    Folders.prototype.getByName = function (name) {
        var f = new Folder(this);
        f.concat("('" + name + "')");
        return f;
    };
    /**
     * Adds a new folder to the current folder (relative) or any folder (absolute)
     *
     * @param url The relative or absolute url where the new folder will be created. Urls starting with a forward slash are absolute.
     * @returns The new Folder and the raw response.
     */
    Folders.prototype.add = function (url) {
        var _this = this;
        return this.clone(Folders, "add('" + url + "')").postCore().then(function (response) {
            return {
                data: response,
                folder: _this.getByName(url),
            };
        });
    };
    return Folders;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.Folders = Folders;
/**
 * Describes a single Folder instance
 *
 */
var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Folder.prototype, "contentTypeOrder", {
        /**
         * Specifies the sequence in which content types are displayed.
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableCollection(this, "contentTypeOrder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "files", {
        /**
         * Gets this folder's files
         *
         */
        get: function () {
            return new files_1.Files(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "folders", {
        /**
         * Gets this folder's sub folders
         *
         */
        get: function () {
            return new Folders(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "listItemAllFields", {
        /**
         * Gets this folder's list item field values
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableCollection(this, "listItemAllFields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "parentFolder", {
        /**
         * Gets the parent folder, if available
         *
         */
        get: function () {
            return new Folder(this, "parentFolder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "properties", {
        /**
         * Gets this folder's properties
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableInstance(this, "properties");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "serverRelativeUrl", {
        /**
         * Gets this folder's server relative url
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryable(this, "serverRelativeUrl");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Folder.prototype, "uniqueContentTypeOrder", {
        /**
         * Gets a value that specifies the content type order.
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableCollection(this, "uniqueContentTypeOrder");
        },
        enumerable: true,
        configurable: true
    });
    Folder.prototype.update = function (properties) {
        var _this = this;
        var postBody = JSON.stringify(util_1.Util.extend({
            "__metadata": { "type": "SP.Folder" },
        }, properties));
        return this.postCore({
            body: postBody,
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (data) {
            return {
                data: data,
                folder: _this,
            };
        });
    };
    /**
    * Delete this folder
    *
    * @param eTag Value used in the IF-Match header, by default "*"
    */
    Folder.prototype.delete = function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return this.clone(Folder, null).postCore({
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    Folder.prototype.recycle = function () {
        return this.clone(Folder, "recycle").postCore();
    };
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    Folder.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        var q = this.listItemAllFields;
        return q.select.apply(q, selects).get().then(function (d) {
            return util_1.Util.extend(new items_1.Item(odata_1.spGetEntityUrl(d)), d);
        });
    };
    return Folder;
}(sharepointqueryableshareable_1.SharePointQueryableShareableFolder));
exports.Folder = Folder;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var storage_1 = __webpack_require__(13);
var configuration_1 = __webpack_require__(48);
var logging_1 = __webpack_require__(5);
var rest_1 = __webpack_require__(49);
var pnplibconfig_1 = __webpack_require__(4);
var rest_2 = __webpack_require__(59);
/**
 * Root class of the Patterns and Practices namespace, provides an entry point to the library
 */
/**
 * Utility methods
 */
exports.util = util_1.Util;
/**
 * Provides access to the SharePoint REST interface
 */
exports.sp = new rest_1.SPRest();
/**
 * Provides access to the Microsoft Graph REST interface
 */
exports.graph = new rest_2.GraphRest();
/**
 * Provides access to local and session storage
 */
exports.storage = new storage_1.PnPClientStorage();
/**
 * Global configuration instance to which providers can be added
 */
exports.config = new configuration_1.Settings();
/**
 * Global logging instance to which subscribers can be registered and messages written
 */
exports.log = logging_1.Logger;
/**
 * Allows for the configuration of the library
 */
exports.setup = pnplibconfig_1.setRuntimeConfig;
/**
 * Export everything back to the top level so it can be properly bundled
 */
__export(__webpack_require__(68));
__export(__webpack_require__(71));
__export(__webpack_require__(73));
__export(__webpack_require__(76));
__export(__webpack_require__(77));
// /**
//  * Expose a subset of classes from the library for public consumption
//  */
// creating this class instead of directly assigning to default fixes issue #116
var Def = {
    /**
     * Global configuration instance to which providers can be added
     */
    config: exports.config,
    /**
     * Provides access to the Microsoft Graph REST interface
     */
    graph: exports.graph,
    /**
     * Global logging instance to which subscribers can be registered and messages written
     */
    log: exports.log,
    /**
     * Provides access to local and session storage
     */
    setup: exports.setup,
    /**
     * Provides access to the REST interface
     */
    sp: exports.sp,
    /**
     * Provides access to local and session storage
     */
    storage: exports.storage,
    /**
     * Utility methods
     */
    util: exports.util,
};
/**
 * Enables use of the import pnp from syntax
 */
exports.default = Def;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(10);
var parsers_1 = __webpack_require__(7);
var pnplibconfig_1 = __webpack_require__(4);
var pipeline_1 = __webpack_require__(21);
var ODataQueryable = /** @class */ (function () {
    function ODataQueryable() {
    }
    /**
     * Directly concatonates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatonate to the url
     */
    ODataQueryable.prototype.concat = function (pathPart) {
        this._url += pathPart;
        return this;
    };
    /**
     * Appends the given string and normalizes "/" chars
     *
     * @param pathPart The string to append
     */
    ODataQueryable.prototype.append = function (pathPart) {
        this._url = util_1.Util.combinePaths(this._url, pathPart);
    };
    Object.defineProperty(ODataQueryable.prototype, "parentUrl", {
        /**
         * Gets the parent url used when creating this instance
         *
         */
        get: function () {
            return this._parentUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ODataQueryable.prototype, "query", {
        /**
         * Provides access to the query builder for this url
         *
         */
        get: function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets custom options for current object and all derived objects accessible via chaining
     *
     * @param options custom options
     */
    ODataQueryable.prototype.configure = function (options) {
        utils_1.mergeOptions(this._options, options);
        return this;
    };
    /**
     * Enables caching for this request
     *
     * @param options Defines the options used when caching this request
     */
    ODataQueryable.prototype.usingCaching = function (options) {
        if (!pnplibconfig_1.RuntimeConfig.globalCacheDisable) {
            this._useCaching = true;
            this._cachingOptions = options;
        }
        return this;
    };
    /**
     * Gets the currentl url, made absolute based on the availability of the _spPageContextInfo object
     *
     */
    ODataQueryable.prototype.toUrl = function () {
        return this._url;
    };
    /**
     * Executes the currently built request
     *
     * @param parser Allows you to specify a parser to handle the result
     * @param getOptions The options used for this request
     */
    ODataQueryable.prototype.get = function (parser, options) {
        if (parser === void 0) { parser = new parsers_1.ODataDefaultParser(); }
        if (options === void 0) { options = {}; }
        return this.toRequestContext("GET", options, parser, pipeline_1.PipelineMethods.default).then(function (context) { return pipeline_1.pipe(context); });
    };
    ODataQueryable.prototype.getAs = function (parser, options) {
        if (parser === void 0) { parser = new parsers_1.ODataDefaultParser(); }
        if (options === void 0) { options = {}; }
        return this.toRequestContext("GET", options, parser, pipeline_1.PipelineMethods.default).then(function (context) { return pipeline_1.pipe(context); });
    };
    ODataQueryable.prototype.postCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new parsers_1.ODataDefaultParser(); }
        return this.toRequestContext("POST", options, parser, pipeline_1.PipelineMethods.default).then(function (context) { return pipeline_1.pipe(context); });
    };
    ODataQueryable.prototype.postAsCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new parsers_1.ODataDefaultParser(); }
        return this.toRequestContext("POST", options, parser, pipeline_1.PipelineMethods.default).then(function (context) { return pipeline_1.pipe(context); });
    };
    ODataQueryable.prototype.patchCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new parsers_1.ODataDefaultParser(); }
        return this.toRequestContext("PATCH", options, parser, pipeline_1.PipelineMethods.default).then(function (context) { return pipeline_1.pipe(context); });
    };
    ODataQueryable.prototype.deleteCore = function (options, parser) {
        if (options === void 0) { options = {}; }
        if (parser === void 0) { parser = new parsers_1.ODataDefaultParser(); }
        return this.toRequestContext("DELETE", options, parser, pipeline_1.PipelineMethods.default).then(function (context) { return pipeline_1.pipe(context); });
    };
    return ODataQueryable;
}());
exports.ODataQueryable = ODataQueryable;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var caching_1 = __webpack_require__(33);
var logging_1 = __webpack_require__(5);
var util_1 = __webpack_require__(0);
/**
 * Resolves the context's result value
 *
 * @param context The current context
 */
function returnResult(context) {
    logging_1.Logger.log({
        data: context.result,
        level: logging_1.LogLevel.Verbose,
        message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Returning result, see data property for value.",
    });
    return Promise.resolve(context.result);
}
/**
 * Sets the result on the context
 */
function setResult(context, value) {
    return new Promise(function (resolve) {
        context.result = value;
        context.hasResult = true;
        resolve(context);
    });
}
exports.setResult = setResult;
/**
 * Invokes the next method in the provided context's pipeline
 *
 * @param c The current request context
 */
function next(c) {
    if (c.pipeline.length < 1) {
        return Promise.resolve(c);
    }
    return c.pipeline.shift()(c);
}
/**
 * Executes the current request context's pipeline
 *
 * @param context Current context
 */
function pipe(context) {
    return next(context)
        .then(function (ctx) { return returnResult(ctx); })
        .catch(function (e) {
        logging_1.Logger.log({
            data: e,
            level: logging_1.LogLevel.Error,
            message: "Error in request pipeline: " + e.message,
        });
        throw e;
    });
}
exports.pipe = pipe;
/**
 * decorator factory applied to methods in the pipeline to control behavior
 */
function requestPipelineMethod(alwaysRun) {
    if (alwaysRun === void 0) { alwaysRun = false; }
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // if we have a result already in the pipeline, pass it along and don't call the tagged method
            if (!alwaysRun && args.length > 0 && args[0].hasOwnProperty("hasResult") && args[0].hasResult) {
                logging_1.Logger.write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Skipping request pipeline method " + propertyKey + ", existing result in pipeline.", logging_1.LogLevel.Verbose);
                return Promise.resolve(args[0]);
            }
            // apply the tagged method
            logging_1.Logger.write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Calling request pipeline method " + propertyKey + ".", logging_1.LogLevel.Verbose);
            // then chain the next method in the context's pipeline - allows for dynamic pipeline
            return method.apply(target, args).then(function (ctx) { return next(ctx); });
        };
    };
}
exports.requestPipelineMethod = requestPipelineMethod;
/**
 * Contains the methods used within the request pipeline
 */
var PipelineMethods = /** @class */ (function () {
    function PipelineMethods() {
    }
    /**
     * Logs the start of the request
     */
    PipelineMethods.logStart = function (context) {
        return new Promise(function (resolve) {
            logging_1.Logger.log({
                data: logging_1.Logger.activeLogLevel === logging_1.LogLevel.Info ? {} : context,
                level: logging_1.LogLevel.Info,
                message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Beginning " + context.verb + " request (" + context.requestAbsoluteUrl + ")",
            });
            resolve(context);
        });
    };
    /**
     * Handles caching of the request
     */
    PipelineMethods.caching = function (context) {
        return new Promise(function (resolve) {
            // handle caching, if applicable
            if (context.verb === "GET" && context.isCached) {
                logging_1.Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Caching is enabled for request, checking cache...", logging_1.LogLevel.Info);
                var cacheOptions = new caching_1.CachingOptions(context.requestAbsoluteUrl.toLowerCase());
                if (typeof context.cachingOptions !== "undefined") {
                    cacheOptions = util_1.Util.extend(cacheOptions, context.cachingOptions);
                }
                // we may not have a valid store
                if (cacheOptions.store !== null) {
                    // check if we have the data in cache and if so resolve the promise and return
                    var data = cacheOptions.store.get(cacheOptions.key);
                    if (data !== null) {
                        // ensure we clear any help batch dependency we are resolving from the cache
                        logging_1.Logger.log({
                            data: logging_1.Logger.activeLogLevel === logging_1.LogLevel.Info ? {} : data,
                            level: logging_1.LogLevel.Info,
                            message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Value returned from cache.",
                        });
                        context.batchDependency();
                        // handle the case where a parser needs to take special actions with a cached result (such as getAs)
                        if (context.parser.hasOwnProperty("hydrate")) {
                            data = context.parser.hydrate(data);
                        }
                        return setResult(context, data).then(function (ctx) { return resolve(ctx); });
                    }
                }
                logging_1.Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Value not found in cache.", logging_1.LogLevel.Info);
                // if we don't then wrap the supplied parser in the caching parser wrapper
                // and send things on their way
                context.parser = new caching_1.CachingParserWrapper(context.parser, cacheOptions);
            }
            return resolve(context);
        });
    };
    /**
     * Sends the request
     */
    PipelineMethods.send = function (context) {
        return new Promise(function (resolve, reject) {
            // send or batch the request
            if (context.isBatched) {
                // we are in a batch, so add to batch, remove dependency, and resolve with the batch's promise
                var p = context.batch.add(context.requestAbsoluteUrl, context.verb, context.options, context.parser);
                // we release the dependency here to ensure the batch does not execute until the request is added to the batch
                context.batchDependency();
                logging_1.Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Batching request in batch " + context.batch.batchId + ".", logging_1.LogLevel.Info);
                // we set the result as the promise which will be resolved by the batch's execution
                resolve(setResult(context, p));
            }
            else {
                logging_1.Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Sending request.", logging_1.LogLevel.Info);
                // we are not part of a batch, so proceed as normal
                var client = context.clientFactory();
                var opts = util_1.Util.extend(context.options || {}, { method: context.verb });
                client.fetch(context.requestAbsoluteUrl, opts)
                    .then(function (response) { return context.parser.parse(response); })
                    .then(function (result) { return setResult(context, result); })
                    .then(function (ctx) { return resolve(ctx); })
                    .catch(function (e) { return reject(e); });
            }
        });
    };
    /**
     * Logs the end of the request
     */
    PipelineMethods.logEnd = function (context) {
        return new Promise(function (resolve) {
            if (context.isBatched) {
                logging_1.Logger.log({
                    data: logging_1.Logger.activeLogLevel === logging_1.LogLevel.Info ? {} : context,
                    level: logging_1.LogLevel.Info,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") " + context.verb + " request will complete in batch " + context.batch.batchId + ".",
                });
            }
            else {
                logging_1.Logger.log({
                    data: logging_1.Logger.activeLogLevel === logging_1.LogLevel.Info ? {} : context,
                    level: logging_1.LogLevel.Info,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Completing " + context.verb + " request.",
                });
            }
            resolve(context);
        });
    };
    Object.defineProperty(PipelineMethods, "default", {
        get: function () {
            return [
                PipelineMethods.logStart,
                PipelineMethods.caching,
                PipelineMethods.send,
                PipelineMethods.logEnd,
            ];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        requestPipelineMethod(true)
    ], PipelineMethods, "logStart", null);
    __decorate([
        requestPipelineMethod()
    ], PipelineMethods, "caching", null);
    __decorate([
        requestPipelineMethod()
    ], PipelineMethods, "send", null);
    __decorate([
        requestPipelineMethod(true)
    ], PipelineMethods, "logEnd", null);
    return PipelineMethods;
}());
exports.PipelineMethods = PipelineMethods;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var digestcache_1 = __webpack_require__(50);
var util_1 = __webpack_require__(0);
var pnplibconfig_1 = __webpack_require__(4);
var exceptions_1 = __webpack_require__(2);
var utils_1 = __webpack_require__(10);
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        this._impl = pnplibconfig_1.RuntimeConfig.spFetchClientFactory();
        this._digestCache = new digestcache_1.DigestCache(this);
    }
    HttpClient.prototype.fetch = function (url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var opts = util_1.Util.extend(options, { cache: "no-cache", credentials: "same-origin" }, true);
        var headers = new Headers();
        // first we add the global headers so they can be overwritten by any passed in locally to this call
        utils_1.mergeHeaders(headers, pnplibconfig_1.RuntimeConfig.spHeaders);
        // second we add the local options so we can overwrite the globals
        utils_1.mergeHeaders(headers, options.headers);
        // lastly we apply any default headers we need that may not exist
        if (!headers.has("Accept")) {
            headers.append("Accept", "application/json");
        }
        if (!headers.has("Content-Type")) {
            headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
        }
        if (!headers.has("X-ClientService-ClientTag")) {
            headers.append("X-ClientService-ClientTag", "PnPCoreJS:3.0.10");
        }
        if (!headers.has("User-Agent")) {
            // this marks the requests for understanding by the service
            headers.append("User-Agent", "NONISV|SharePointPnP|PnPCoreJS/3.0.10");
        }
        opts = util_1.Util.extend(opts, { headers: headers });
        if (opts.method && opts.method.toUpperCase() !== "GET") {
            // if we have either a request digest or an authorization header we don't need a digest
            if (!headers.has("X-RequestDigest") && !headers.has("Authorization")) {
                var index = url.indexOf("_api/");
                if (index < 0) {
                    throw new exceptions_1.APIUrlException();
                }
                var webUrl = url.substr(0, index);
                return this._digestCache.getDigest(webUrl)
                    .then(function (digest) {
                    headers.append("X-RequestDigest", digest);
                    return _this.fetchRaw(url, opts);
                });
            }
        }
        return this.fetchRaw(url, opts);
    };
    HttpClient.prototype.fetchRaw = function (url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // here we need to normalize the headers
        var rawHeaders = new Headers();
        utils_1.mergeHeaders(rawHeaders, options.headers);
        options = util_1.Util.extend(options, { headers: rawHeaders });
        var retry = function (ctx) {
            _this._impl.fetch(url, options).then(function (response) { return ctx.resolve(response); }).catch(function (response) {
                // Check if request was throttled - http status code 429
                // Check if request failed due to server unavailable - http status code 503
                if (response.status !== 429 && response.status !== 503) {
                    ctx.reject(response);
                }
                // grab our current delay
                var delay = ctx.delay;
                // Increment our counters.
                ctx.delay *= 2;
                ctx.attempts++;
                // If we have exceeded the retry count, reject.
                if (ctx.retryCount <= ctx.attempts) {
                    ctx.reject(response);
                }
                // Set our retry timeout for {delay} milliseconds.
                setTimeout(util_1.Util.getCtxCallback(_this, retry, ctx), delay);
            });
        };
        return new Promise(function (resolve, reject) {
            var retryContext = {
                attempts: 0,
                delay: 100,
                reject: reject,
                resolve: resolve,
                retryCount: 7,
            };
            retry.call(_this, retryContext);
        });
    };
    HttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_1.Util.extend(options, { method: "GET" });
        return this.fetch(url, opts);
    };
    HttpClient.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_1.Util.extend(options, { method: "POST" });
        return this.fetch(url, opts);
    };
    HttpClient.prototype.patch = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_1.Util.extend(options, { method: "PATCH" });
        return this.fetch(url, opts);
    };
    HttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_1.Util.extend(options, { method: "DELETE" });
        return this.fetch(url, opts);
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var sitegroups_1 = __webpack_require__(24);
var util_1 = __webpack_require__(0);
/**
 * Describes a set of role assignments for the current scope
 *
 */
var RoleAssignments = /** @class */ (function (_super) {
    __extends(RoleAssignments, _super);
    /**
     * Creates a new instance of the RoleAssignments class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this role assignments collection
     */
    function RoleAssignments(baseUrl, path) {
        if (path === void 0) { path = "roleassignments"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Adds a new role assignment with the specified principal and role definitions to the collection
     *
     * @param principalId The id of the user or group to assign permissions to
     * @param roleDefId The id of the role definition that defines the permissions to assign
     *
     */
    RoleAssignments.prototype.add = function (principalId, roleDefId) {
        return this.clone(RoleAssignments, "addroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")").postCore();
    };
    /**
     * Removes the role assignment with the specified principal and role definition from the collection
     *
     * @param principalId The id of the user or group in the role assignment
     * @param roleDefId The id of the role definition in the role assignment
     *
     */
    RoleAssignments.prototype.remove = function (principalId, roleDefId) {
        return this.clone(RoleAssignments, "removeroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")").postCore();
    };
    /**
     * Gets the role assignment associated with the specified principal id from the collection.
     *
     * @param id The id of the role assignment
     */
    RoleAssignments.prototype.getById = function (id) {
        var ra = new RoleAssignment(this);
        ra.concat("(" + id + ")");
        return ra;
    };
    return RoleAssignments;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.RoleAssignments = RoleAssignments;
/**
 * Describes a role assignment
 *
 */
var RoleAssignment = /** @class */ (function (_super) {
    __extends(RoleAssignment, _super);
    function RoleAssignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RoleAssignment.prototype, "groups", {
        /**
         * Gets the groups that directly belong to the access control list (ACL) for this securable object
         *
         */
        get: function () {
            return new sitegroups_1.SiteGroups(this, "groups");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleAssignment.prototype, "bindings", {
        /**
         * Gets the role definition bindings for this role assignment
         *
         */
        get: function () {
            return new RoleDefinitionBindings(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Deletes this role assignment
     *
     */
    RoleAssignment.prototype.delete = function () {
        return this.postCore({
            headers: {
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    return RoleAssignment;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.RoleAssignment = RoleAssignment;
/**
 * Describes a collection of role definitions
 *
 */
var RoleDefinitions = /** @class */ (function (_super) {
    __extends(RoleDefinitions, _super);
    /**
     * Creates a new instance of the RoleDefinitions class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this role definitions collection
     *
     */
    function RoleDefinitions(baseUrl, path) {
        if (path === void 0) { path = "roledefinitions"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets the role definition with the specified id from the collection
     *
     * @param id The id of the role definition
     *
     */
    RoleDefinitions.prototype.getById = function (id) {
        return new RoleDefinition(this, "getById(" + id + ")");
    };
    /**
     * Gets the role definition with the specified name
     *
     * @param name The name of the role definition
     *
     */
    RoleDefinitions.prototype.getByName = function (name) {
        return new RoleDefinition(this, "getbyname('" + name + "')");
    };
    /**
     * Gets the role definition with the specified role type
     *
     * @param roleTypeKind The roletypekind of the role definition (None=0, Guest=1, Reader=2, Contributor=3, WebDesigner=4, Administrator=5, Editor=6, System=7)
     *
     */
    RoleDefinitions.prototype.getByType = function (roleTypeKind) {
        return new RoleDefinition(this, "getbytype(" + roleTypeKind + ")");
    };
    /**
     * Creates a role definition
     *
     * @param name The new role definition's name
     * @param description The new role definition's description
     * @param order The order in which the role definition appears
     * @param basePermissions The permissions mask for this role definition
     *
     */
    RoleDefinitions.prototype.add = function (name, description, order, basePermissions) {
        var _this = this;
        var postBody = JSON.stringify({
            BasePermissions: util_1.Util.extend({ __metadata: { type: "SP.BasePermissions" } }, basePermissions),
            Description: description,
            Name: name,
            Order: order,
            __metadata: { "type": "SP.RoleDefinition" },
        });
        return this.postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                definition: _this.getById(data.Id),
            };
        });
    };
    return RoleDefinitions;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.RoleDefinitions = RoleDefinitions;
/**
 * Describes a role definition
 *
 */
var RoleDefinition = /** @class */ (function (_super) {
    __extends(RoleDefinition, _super);
    function RoleDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Updates this role definition with the supplied properties
     *
     * @param properties A plain object hash of values to update for the role definition
     */
    /* tslint:disable no-string-literal */
    RoleDefinition.prototype.update = function (properties) {
        var _this = this;
        if (typeof properties.hasOwnProperty("BasePermissions") !== "undefined") {
            properties["BasePermissions"] = util_1.Util.extend({ __metadata: { type: "SP.BasePermissions" } }, properties["BasePermissions"]);
        }
        var postBody = JSON.stringify(util_1.Util.extend({
            "__metadata": { "type": "SP.RoleDefinition" },
        }, properties));
        return this.postCore({
            body: postBody,
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (data) {
            var retDef = _this;
            if (properties.hasOwnProperty("Name")) {
                var parent_1 = _this.getParent(RoleDefinitions, _this.parentUrl, "");
                retDef = parent_1.getByName(properties["Name"]);
            }
            return {
                data: data,
                definition: retDef,
            };
        });
    };
    /* tslint:enable */
    /**
     * Deletes this role definition
     *
     */
    RoleDefinition.prototype.delete = function () {
        return this.postCore({
            headers: {
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    return RoleDefinition;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.RoleDefinition = RoleDefinition;
/**
 * Describes the role definitons bound to a role assignment object
 *
 */
var RoleDefinitionBindings = /** @class */ (function (_super) {
    __extends(RoleDefinitionBindings, _super);
    /**
     * Creates a new instance of the RoleDefinitionBindings class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this role definition bindings collection
     */
    function RoleDefinitionBindings(baseUrl, path) {
        if (path === void 0) { path = "roledefinitionbindings"; }
        return _super.call(this, baseUrl, path) || this;
    }
    return RoleDefinitionBindings;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.RoleDefinitionBindings = RoleDefinitionBindings;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var siteusers_1 = __webpack_require__(37);
var util_1 = __webpack_require__(0);
/**
 * Principal Type enum
 *
 */
var PrincipalType;
(function (PrincipalType) {
    PrincipalType[PrincipalType["None"] = 0] = "None";
    PrincipalType[PrincipalType["User"] = 1] = "User";
    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
    PrincipalType[PrincipalType["All"] = 15] = "All";
})(PrincipalType = exports.PrincipalType || (exports.PrincipalType = {}));
/**
 * Describes a collection of site groups
 *
 */
var SiteGroups = /** @class */ (function (_super) {
    __extends(SiteGroups, _super);
    /**
     * Creates a new instance of the SiteGroups class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this group collection
     */
    function SiteGroups(baseUrl, path) {
        if (path === void 0) { path = "sitegroups"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Adds a new group to the site collection
     *
     * @param props The group properties object of property names and values to be set for the group
     */
    SiteGroups.prototype.add = function (properties) {
        var _this = this;
        var postBody = JSON.stringify(util_1.Util.extend({ "__metadata": { "type": "SP.Group" } }, properties));
        return this.postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                group: _this.getById(data.Id),
            };
        });
    };
    /**
     * Gets a group from the collection by name
     *
     * @param groupName The name of the group to retrieve
     */
    SiteGroups.prototype.getByName = function (groupName) {
        return new SiteGroup(this, "getByName('" + groupName + "')");
    };
    /**
     * Gets a group from the collection by id
     *
     * @param id The id of the group to retrieve
     */
    SiteGroups.prototype.getById = function (id) {
        var sg = new SiteGroup(this);
        sg.concat("(" + id + ")");
        return sg;
    };
    /**
     * Removes the group with the specified member id from the collection
     *
     * @param id The id of the group to remove
     */
    SiteGroups.prototype.removeById = function (id) {
        return this.clone(SiteGroups, "removeById('" + id + "')").postCore();
    };
    /**
     * Removes the cross-site group with the specified name from the collection
     *
     * @param loginName The name of the group to remove
     */
    SiteGroups.prototype.removeByLoginName = function (loginName) {
        return this.clone(SiteGroups, "removeByLoginName('" + loginName + "')").postCore();
    };
    return SiteGroups;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.SiteGroups = SiteGroups;
/**
 * Describes a single group
 *
 */
var SiteGroup = /** @class */ (function (_super) {
    __extends(SiteGroup, _super);
    function SiteGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SiteGroup.prototype, "users", {
        /**
         * Gets the users for this group
         *
         */
        get: function () {
            return new siteusers_1.SiteUsers(this, "users");
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Updates this group instance with the supplied properties
    *
    * @param properties A GroupWriteableProperties object of property names and values to update for the group
    */
    /* tslint:disable no-string-literal */
    SiteGroup.prototype.update = function (properties) {
        var _this = this;
        var postBody = util_1.Util.extend({ "__metadata": { "type": "SP.Group" } }, properties);
        return this.postCore({
            body: JSON.stringify(postBody),
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (data) {
            var retGroup = _this;
            if (properties.hasOwnProperty("Title")) {
                retGroup = _this.getParent(SiteGroup, _this.parentUrl, "getByName('" + properties["Title"] + "')");
            }
            return {
                data: data,
                group: retGroup,
            };
        });
    };
    return SiteGroup;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.SiteGroup = SiteGroup;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var sharepointqueryable_1 = __webpack_require__(1);
/**
 * Describes a collection of content types
 *
 */
var ContentTypes = /** @class */ (function (_super) {
    __extends(ContentTypes, _super);
    /**
     * Creates a new instance of the ContentTypes class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this content types collection
     */
    function ContentTypes(baseUrl, path) {
        if (path === void 0) { path = "contenttypes"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a ContentType by content type id
     */
    ContentTypes.prototype.getById = function (id) {
        var ct = new ContentType(this);
        ct.concat("('" + id + "')");
        return ct;
    };
    /**
     * Adds an existing contenttype to a content type collection
     *
     * @param contentTypeId in the following format, for example: 0x010102
     */
    ContentTypes.prototype.addAvailableContentType = function (contentTypeId) {
        var _this = this;
        var postBody = JSON.stringify({
            "contentTypeId": contentTypeId,
        });
        return this.clone(ContentTypes, "addAvailableContentType").postAsCore({ body: postBody }).then(function (data) {
            return {
                contentType: _this.getById(data.id),
                data: data,
            };
        });
    };
    /**
     * Adds a new content type to the collection
     *
     * @param id The desired content type id for the new content type (also determines the parent content type)
     * @param name The name of the content type
     * @param description The description of the content type
     * @param group The group in which to add the content type
     * @param additionalSettings Any additional settings to provide when creating the content type
     *
     */
    ContentTypes.prototype.add = function (id, name, description, group, additionalSettings) {
        var _this = this;
        if (description === void 0) { description = ""; }
        if (group === void 0) { group = "Custom Content Types"; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        var postBody = JSON.stringify(util_1.Util.extend({
            "Description": description,
            "Group": group,
            "Id": { "StringValue": id },
            "Name": name,
            "__metadata": { "type": "SP.ContentType" },
        }, additionalSettings));
        return this.postCore({ body: postBody }).then(function (data) {
            return { contentType: _this.getById(data.id), data: data };
        });
    };
    return ContentTypes;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.ContentTypes = ContentTypes;
/**
 * Describes a single ContentType instance
 *
 */
var ContentType = /** @class */ (function (_super) {
    __extends(ContentType, _super);
    function ContentType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ContentType.prototype, "fieldLinks", {
        /**
         * Gets the column (also known as field) references in the content type.
        */
        get: function () {
            return new FieldLinks(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentType.prototype, "fields", {
        /**
         * Gets a value that specifies the collection of fields for the content type.
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableCollection(this, "fields");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentType.prototype, "parent", {
        /**
         * Gets the parent content type of the content type.
         */
        get: function () {
            return new ContentType(this, "parent");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentType.prototype, "workflowAssociations", {
        /**
         * Gets a value that specifies the collection of workflow associations for the content type.
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableCollection(this, "workflowAssociations");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Delete this content type
     */
    ContentType.prototype.delete = function () {
        return this.postCore({
            headers: {
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    return ContentType;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.ContentType = ContentType;
/**
 * Represents a collection of field link instances
 */
var FieldLinks = /** @class */ (function (_super) {
    __extends(FieldLinks, _super);
    /**
     * Creates a new instance of the ContentType class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this content type instance
     */
    function FieldLinks(baseUrl, path) {
        if (path === void 0) { path = "fieldlinks"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a FieldLink by GUID id
     *
     * @param id The GUID id of the field link
     */
    FieldLinks.prototype.getById = function (id) {
        var fl = new FieldLink(this);
        fl.concat("(guid'" + id + "')");
        return fl;
    };
    return FieldLinks;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.FieldLinks = FieldLinks;
/**
 * Represents a field link instance
 */
var FieldLink = /** @class */ (function (_super) {
    __extends(FieldLink, _super);
    function FieldLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FieldLink;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.FieldLink = FieldLink;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var util_1 = __webpack_require__(0);
var types_1 = __webpack_require__(17);
/**
 * Describes a collection of Field objects
 *
 */
var Fields = /** @class */ (function (_super) {
    __extends(Fields, _super);
    /**
     * Creates a new instance of the Fields class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this fields collection
     */
    function Fields(baseUrl, path) {
        if (path === void 0) { path = "fields"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a field from the collection by title
     *
     * @param title The case-sensitive title of the field
     */
    Fields.prototype.getByTitle = function (title) {
        return new Field(this, "getByTitle('" + title + "')");
    };
    /**
     * Gets a field from the collection by using internal name or title
     *
     * @param name The case-sensitive internal name or title of the field
     */
    Fields.prototype.getByInternalNameOrTitle = function (name) {
        return new Field(this, "getByInternalNameOrTitle('" + name + "')");
    };
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list
     */
    Fields.prototype.getById = function (id) {
        var f = new Field(this);
        f.concat("('" + id + "')");
        return f;
    };
    /**
     * Creates a field based on the specified schema
     */
    Fields.prototype.createFieldAsXml = function (xml) {
        var _this = this;
        var info;
        if (typeof xml === "string") {
            info = { SchemaXml: xml };
        }
        else {
            info = xml;
        }
        var postBody = JSON.stringify({
            "parameters": util_1.Util.extend({
                "__metadata": {
                    "type": "SP.XmlSchemaFieldCreationInformation",
                },
            }, info),
        });
        return this.clone(Fields, "createfieldasxml").postAsCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                field: _this.getById(data.Id),
            };
        });
    };
    /**
     * Adds a new field to the collection
     *
     * @param title The new field's title
     * @param fieldType The new field's type (ex: SP.FieldText)
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.add = function (title, fieldType, properties) {
        var _this = this;
        var postBody = JSON.stringify(util_1.Util.extend({
            "Title": title,
            "__metadata": { "type": fieldType },
        }, properties));
        return this.clone(Fields, null).postAsCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                field: _this.getById(data.Id),
            };
        });
    };
    /**
     * Adds a new SP.FieldText to the collection
     *
     * @param title The field title
     * @param maxLength The maximum number of characters allowed in the value of the field.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addText = function (title, maxLength, properties) {
        if (maxLength === void 0) { maxLength = 255; }
        var props = {
            FieldTypeKind: 2,
            MaxLength: maxLength,
        };
        return this.add(title, "SP.FieldText", util_1.Util.extend(props, properties));
    };
    /**
     * Adds a new SP.FieldCalculated to the collection
     *
     * @param title The field title.
     * @param formula The formula for the field.
     * @param dateFormat The date and time format that is displayed in the field.
     * @param outputType Specifies the output format for the field. Represents a FieldType value.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addCalculated = function (title, formula, dateFormat, outputType, properties) {
        if (outputType === void 0) { outputType = types_1.FieldTypes.Text; }
        var props = {
            DateFormat: dateFormat,
            FieldTypeKind: 17,
            Formula: formula,
            OutputType: outputType,
        };
        return this.add(title, "SP.FieldCalculated", util_1.Util.extend(props, properties));
    };
    /**
     * Adds a new SP.FieldDateTime to the collection
     *
     * @param title The field title
     * @param displayFormat The format of the date and time that is displayed in the field.
     * @param calendarType Specifies the calendar type of the field.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addDateTime = function (title, displayFormat, calendarType, friendlyDisplayFormat, properties) {
        if (displayFormat === void 0) { displayFormat = types_1.DateTimeFieldFormatType.DateOnly; }
        if (calendarType === void 0) { calendarType = types_1.CalendarType.Gregorian; }
        if (friendlyDisplayFormat === void 0) { friendlyDisplayFormat = 0; }
        var props = {
            DateTimeCalendarType: calendarType,
            DisplayFormat: displayFormat,
            FieldTypeKind: 4,
            FriendlyDisplayFormat: friendlyDisplayFormat,
        };
        return this.add(title, "SP.FieldDateTime", util_1.Util.extend(props, properties));
    };
    /**
     * Adds a new SP.FieldNumber to the collection
     *
     * @param title The field title
     * @param minValue The field's minimum value
     * @param maxValue The field's maximum value
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addNumber = function (title, minValue, maxValue, properties) {
        var props = { FieldTypeKind: 9 };
        if (typeof minValue !== "undefined") {
            props = util_1.Util.extend({ MinimumValue: minValue }, props);
        }
        if (typeof maxValue !== "undefined") {
            props = util_1.Util.extend({ MaximumValue: maxValue }, props);
        }
        return this.add(title, "SP.FieldNumber", util_1.Util.extend(props, properties));
    };
    /**
     * Adds a new SP.FieldCurrency to the collection
     *
     * @param title The field title
     * @param minValue The field's minimum value
     * @param maxValue The field's maximum value
     * @param currencyLocalId Specifies the language code identifier (LCID) used to format the value of the field
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addCurrency = function (title, minValue, maxValue, currencyLocalId, properties) {
        if (currencyLocalId === void 0) { currencyLocalId = 1033; }
        var props = {
            CurrencyLocaleId: currencyLocalId,
            FieldTypeKind: 10,
        };
        if (typeof minValue !== "undefined") {
            props = util_1.Util.extend({ MinimumValue: minValue }, props);
        }
        if (typeof maxValue !== "undefined") {
            props = util_1.Util.extend({ MaximumValue: maxValue }, props);
        }
        return this.add(title, "SP.FieldCurrency", util_1.Util.extend(props, properties));
    };
    /**
     * Adds a new SP.FieldMultiLineText to the collection
     *
     * @param title The field title
     * @param numberOfLines Specifies the number of lines of text to display for the field.
     * @param richText Specifies whether the field supports rich formatting.
     * @param restrictedMode Specifies whether the field supports a subset of rich formatting.
     * @param appendOnly Specifies whether all changes to the value of the field are displayed in list forms.
     * @param allowHyperlink Specifies whether a hyperlink is allowed as a value of the field.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     *
     */
    Fields.prototype.addMultilineText = function (title, numberOfLines, richText, restrictedMode, appendOnly, allowHyperlink, properties) {
        if (numberOfLines === void 0) { numberOfLines = 6; }
        if (richText === void 0) { richText = true; }
        if (restrictedMode === void 0) { restrictedMode = false; }
        if (appendOnly === void 0) { appendOnly = false; }
        if (allowHyperlink === void 0) { allowHyperlink = true; }
        var props = {
            AllowHyperlink: allowHyperlink,
            AppendOnly: appendOnly,
            FieldTypeKind: 3,
            NumberOfLines: numberOfLines,
            RestrictedMode: restrictedMode,
            RichText: richText,
        };
        return this.add(title, "SP.FieldMultiLineText", util_1.Util.extend(props, properties));
    };
    /**
     * Adds a new SP.FieldUrl to the collection
     *
     * @param title The field title
     */
    Fields.prototype.addUrl = function (title, displayFormat, properties) {
        if (displayFormat === void 0) { displayFormat = types_1.UrlFieldFormatType.Hyperlink; }
        var props = {
            DisplayFormat: displayFormat,
            FieldTypeKind: 11,
        };
        return this.add(title, "SP.FieldUrl", util_1.Util.extend(props, properties));
    };
    /**
     * Adds a user field to the colleciton
     *
     * @param title The new field's title
     * @param selectionMode The selection mode of the field
     * @param selectionGroup Value that specifies the identifier of the SharePoint group whose members can be selected as values of the field
     * @param properties
     */
    Fields.prototype.addUser = function (title, selectionMode, properties) {
        var props = {
            FieldTypeKind: 20,
            SelectionMode: selectionMode,
        };
        return this.add(title, "SP.FieldUser", util_1.Util.extend(props, properties));
    };
    /**
     * Adds a SP.FieldLookup to the collection
     *
     * @param title The new field's title
     * @param lookupListId The guid id of the list where the source of the lookup is found
     * @param lookupFieldName The internal name of the field in the source list
     * @param properties Set of additional properties to set on the new field
     */
    Fields.prototype.addLookup = function (title, lookupListId, lookupFieldName, properties) {
        var _this = this;
        var postBody = JSON.stringify({
            parameters: util_1.Util.extend({
                FieldTypeKind: 7,
                LookupFieldName: lookupFieldName,
                LookupListId: lookupListId,
                Title: title,
                "__metadata": { "type": "SP.FieldCreationInformation" },
            }, properties),
        });
        return this.clone(Fields, "addfield").postAsCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                field: _this.getById(data.Id),
            };
        });
    };
    /**
     * Adds a new SP.FieldChoice to the collection
     *
     * @param title The field title.
     * @param choices The choices for the field.
     * @param format The display format of the available options for the field.
     * @param fillIn Specifies whether the field allows fill-in values.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addChoice = function (title, choices, format, fillIn, properties) {
        if (format === void 0) { format = types_1.ChoiceFieldFormatType.Dropdown; }
        var props = {
            Choices: {
                results: choices,
            },
            EditFormat: format,
            FieldTypeKind: 6,
            FillInChoice: fillIn,
        };
        return this.add(title, "SP.FieldChoice", util_1.Util.extend(props, properties));
    };
    /**
     * Adds a new SP.FieldMultiChoice to the collection
     *
     * @param title The field title.
     * @param choices The choices for the field.
     * @param fillIn Specifies whether the field allows fill-in values.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addMultiChoice = function (title, choices, fillIn, properties) {
        var props = {
            Choices: {
                results: choices,
            },
            FieldTypeKind: 15,
            FillInChoice: fillIn,
        };
        return this.add(title, "SP.FieldMultiChoice", util_1.Util.extend(props, properties));
    };
    /**
     * Adds a new SP.FieldBoolean to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    Fields.prototype.addBoolean = function (title, properties) {
        var props = {
            FieldTypeKind: 8,
        };
        return this.add(title, "SP.Field", util_1.Util.extend(props, properties));
    };
    return Fields;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.Fields = Fields;
/**
 * Describes a single of Field instance
 *
 */
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Updates this field intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param fieldType The type value, required to update child field type properties
     */
    Field.prototype.update = function (properties, fieldType) {
        var _this = this;
        if (fieldType === void 0) { fieldType = "SP.Field"; }
        var postBody = JSON.stringify(util_1.Util.extend({
            "__metadata": { "type": fieldType },
        }, properties));
        return this.postCore({
            body: postBody,
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (data) {
            return {
                data: data,
                field: _this,
            };
        });
    };
    /**
     * Delete this fields
     *
     */
    Field.prototype.delete = function () {
        return this.postCore({
            headers: {
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    /**
     * Sets the value of the ShowInDisplayForm property for this field.
     */
    Field.prototype.setShowInDisplayForm = function (show) {
        return this.clone(Field, "setshowindisplayform(" + show + ")").postCore();
    };
    /**
     * Sets the value of the ShowInEditForm property for this field.
     */
    Field.prototype.setShowInEditForm = function (show) {
        return this.clone(Field, "setshowineditform(" + show + ")").postCore();
    };
    /**
     * Sets the value of the ShowInNewForm property for this field.
     */
    Field.prototype.setShowInNewForm = function (show) {
        return this.clone(Field, "setshowinnewform(" + show + ")").postCore();
    };
    return Field;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.Field = Field;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var util_1 = __webpack_require__(0);
/**
 * Describes a collection of user custom actions
 *
 */
var UserCustomActions = /** @class */ (function (_super) {
    __extends(UserCustomActions, _super);
    /**
     * Creates a new instance of the UserCustomActions class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this user custom actions collection
     */
    function UserCustomActions(baseUrl, path) {
        if (path === void 0) { path = "usercustomactions"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Returns the user custom action with the specified id
     *
     * @param id The GUID id of the user custom action to retrieve
     */
    UserCustomActions.prototype.getById = function (id) {
        var uca = new UserCustomAction(this);
        uca.concat("('" + id + "')");
        return uca;
    };
    /**
     * Creates a user custom action
     *
     * @param properties The information object of property names and values which define the new user custom action
     *
     */
    UserCustomActions.prototype.add = function (properties) {
        var _this = this;
        var postBody = JSON.stringify(util_1.Util.extend({ __metadata: { "type": "SP.UserCustomAction" } }, properties));
        return this.postCore({ body: postBody }).then(function (data) {
            return {
                action: _this.getById(data.Id),
                data: data,
            };
        });
    };
    /**
     * Deletes all user custom actions in the collection
     *
     */
    UserCustomActions.prototype.clear = function () {
        return this.clone(UserCustomActions, "clear").postCore();
    };
    return UserCustomActions;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.UserCustomActions = UserCustomActions;
/**
 * Describes a single user custom action
 *
 */
var UserCustomAction = /** @class */ (function (_super) {
    __extends(UserCustomAction, _super);
    function UserCustomAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Updates this user custom action with the supplied properties
    *
    * @param properties An information object of property names and values to update for this user custom action
    */
    UserCustomAction.prototype.update = function (properties) {
        var _this = this;
        var postBody = JSON.stringify(util_1.Util.extend({
            "__metadata": { "type": "SP.UserCustomAction" },
        }, properties));
        return this.postCore({
            body: postBody,
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (data) {
            return {
                action: _this,
                data: data,
            };
        });
    };
    /**
    * Removes this user custom action
    *
    */
    UserCustomAction.prototype.delete = function () {
        return _super.prototype.deleteCore.call(this);
    };
    return UserCustomAction;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.UserCustomAction = UserCustomAction;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
/**
 * Represents a collection of navigation nodes
 *
 */
var NavigationNodes = /** @class */ (function (_super) {
    __extends(NavigationNodes, _super);
    function NavigationNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a navigation node by id
     *
     * @param id The id of the node
     */
    NavigationNodes.prototype.getById = function (id) {
        var node = new NavigationNode(this);
        node.concat("(" + id + ")");
        return node;
    };
    /**
     * Adds a new node to the collection
     *
     * @param title Display name of the node
     * @param url The url of the node
     * @param visible If true the node is visible, otherwise it is hidden (default: true)
     */
    NavigationNodes.prototype.add = function (title, url, visible) {
        var _this = this;
        if (visible === void 0) { visible = true; }
        var postBody = JSON.stringify({
            IsVisible: visible,
            Title: title,
            Url: url,
            "__metadata": { "type": "SP.NavigationNode" },
        });
        return this.clone(NavigationNodes, null).postCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                node: _this.getById(data.Id),
            };
        });
    };
    /**
     * Moves a node to be after another node in the navigation
     *
     * @param nodeId Id of the node to move
     * @param previousNodeId Id of the node after which we move the node specified by nodeId
     */
    NavigationNodes.prototype.moveAfter = function (nodeId, previousNodeId) {
        var postBody = JSON.stringify({
            nodeId: nodeId,
            previousNodeId: previousNodeId,
        });
        return this.clone(NavigationNodes, "MoveAfter").postCore({ body: postBody });
    };
    return NavigationNodes;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.NavigationNodes = NavigationNodes;
/**
 * Represents an instance of a navigation node
 *
 */
var NavigationNode = /** @class */ (function (_super) {
    __extends(NavigationNode, _super);
    function NavigationNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NavigationNode.prototype, "children", {
        /**
         * Represents the child nodes of this node
         */
        get: function () {
            return new NavigationNodes(this, "Children");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Deletes this node and any child nodes
     */
    NavigationNode.prototype.delete = function () {
        return _super.prototype.deleteCore.call(this);
    };
    return NavigationNode;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.NavigationNode = NavigationNode;
/**
 * Exposes the navigation components
 *
 */
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    /**
     * Creates a new instance of the Navigation class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of these navigation components
     */
    function Navigation(baseUrl, path) {
        if (path === void 0) { path = "navigation"; }
        return _super.call(this, baseUrl, path) || this;
    }
    Object.defineProperty(Navigation.prototype, "quicklaunch", {
        /**
         * Gets the quicklaunch navigation nodes for the current context
         *
         */
        get: function () {
            return new NavigationNodes(this, "quicklaunch");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Navigation.prototype, "topNavigationBar", {
        /**
         * Gets the top bar navigation nodes for the current context
         *
         */
        get: function () {
            return new NavigationNodes(this, "topnavigationbar");
        },
        enumerable: true,
        configurable: true
    });
    return Navigation;
}(sharepointqueryable_1.SharePointQueryable));
exports.Navigation = Navigation;
/**
 * Represents the top level navigation service
 */
var NavigationService = /** @class */ (function (_super) {
    __extends(NavigationService, _super);
    function NavigationService(path) {
        if (path === void 0) { path = null; }
        return _super.call(this, "_api/navigation", path) || this;
    }
    /**
     * The MenuState service operation returns a Menu-State (dump) of a SiteMapProvider on a site.
     *
     * @param menuNodeKey MenuNode.Key of the start node within the SiteMapProvider If no key is provided the SiteMapProvider.RootNode will be the root of the menu state.
     * @param depth Depth of the dump. If no value is provided a dump with the depth of 10 is returned
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     * @param customProperties comma seperated list of custom properties to be returned.
     */
    NavigationService.prototype.getMenuState = function (menuNodeKey, depth, mapProviderName, customProperties) {
        if (menuNodeKey === void 0) { menuNodeKey = null; }
        if (depth === void 0) { depth = 10; }
        if (mapProviderName === void 0) { mapProviderName = null; }
        if (customProperties === void 0) { customProperties = null; }
        return (new NavigationService("MenuState")).postCore({
            body: JSON.stringify({
                customProperties: customProperties,
                depth: depth,
                mapProviderName: mapProviderName,
                menuNodeKey: menuNodeKey,
            }),
        });
    };
    /**
     * Tries to get a SiteMapNode.Key for a given URL within a site collection.
     *
     * @param currentUrl A url representing the SiteMapNode
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     */
    NavigationService.prototype.getMenuNodeKey = function (currentUrl, mapProviderName) {
        if (mapProviderName === void 0) { mapProviderName = null; }
        return (new NavigationService("MenuNodeKey")).postCore({
            body: JSON.stringify({
                currentUrl: currentUrl,
                mapProviderName: mapProviderName,
            }),
        });
    };
    return NavigationService;
}(sharepointqueryable_1.SharePointQueryable));
exports.NavigationService = NavigationService;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var logging_1 = __webpack_require__(5);
var httpclient_1 = __webpack_require__(22);
var utils_1 = __webpack_require__(10);
var pnplibconfig_1 = __webpack_require__(4);
var exceptions_1 = __webpack_require__(2);
/**
 * Manages a batch of OData operations
 */
var ODataBatch = /** @class */ (function () {
    function ODataBatch(baseUrl, _batchId) {
        if (_batchId === void 0) { _batchId = util_1.Util.getGUID(); }
        this.baseUrl = baseUrl;
        this._batchId = _batchId;
        this._requests = [];
        this._dependencies = [];
    }
    /**
     * Parses the response from a batch request into an array of Response instances
     *
     * @param body Text body of the response from the batch request
     */
    ODataBatch.ParseResponse = function (body) {
        return new Promise(function (resolve, reject) {
            var responses = [];
            var header = "--batchresponse_";
            // Ex. "HTTP/1.1 500 Internal Server Error"
            var statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
            var lines = body.split("\n");
            var state = "batch";
            var status;
            var statusText;
            for (var i = 0; i < lines.length; ++i) {
                var line = lines[i];
                switch (state) {
                    case "batch":
                        if (line.substr(0, header.length) === header) {
                            state = "batchHeaders";
                        }
                        else {
                            if (line.trim() !== "") {
                                throw new exceptions_1.BatchParseException("Invalid response, line " + i);
                            }
                        }
                        break;
                    case "batchHeaders":
                        if (line.trim() === "") {
                            state = "status";
                        }
                        break;
                    case "status":
                        var parts = statusRegExp.exec(line);
                        if (parts.length !== 3) {
                            throw new exceptions_1.BatchParseException("Invalid status, line " + i);
                        }
                        status = parseInt(parts[1], 10);
                        statusText = parts[2];
                        state = "statusHeaders";
                        break;
                    case "statusHeaders":
                        if (line.trim() === "") {
                            state = "body";
                        }
                        break;
                    case "body":
                        responses.push((status === 204) ? new Response() : new Response(line, { status: status, statusText: statusText }));
                        state = "batch";
                        break;
                }
            }
            if (state !== "status") {
                reject(new exceptions_1.BatchParseException("Unexpected end of input"));
            }
            resolve(responses);
        });
    };
    Object.defineProperty(ODataBatch.prototype, "batchId", {
        get: function () {
            return this._batchId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a request to a batch (not designed for public use)
     *
     * @param url The full url of the request
     * @param method The http method GET, POST, etc
     * @param options Any options to include in the request
     * @param parser The parser that will hadle the results of the request
     */
    ODataBatch.prototype.add = function (url, method, options, parser) {
        var info = {
            method: method.toUpperCase(),
            options: options,
            parser: parser,
            reject: null,
            resolve: null,
            url: url,
        };
        var p = new Promise(function (resolve, reject) {
            info.resolve = resolve;
            info.reject = reject;
        });
        this._requests.push(info);
        return p;
    };
    /**
     * Adds a dependency insuring that some set of actions will occur before a batch is processed.
     * MUST be cleared using the returned resolve delegate to allow batches to run
     */
    ODataBatch.prototype.addDependency = function () {
        var resolver;
        var promise = new Promise(function (resolve) {
            resolver = resolve;
        });
        this._dependencies.push(promise);
        return resolver;
    };
    /**
     * Execute the current batch and resolve the associated promises
     *
     * @returns A promise which will be resolved once all of the batch's child promises have resolved
     */
    ODataBatch.prototype.execute = function () {
        var _this = this;
        // we need to check the dependencies twice due to how different engines handle things.
        // We can get a second set of promises added after the first set resolve
        return Promise.all(this._dependencies).then(function () { return Promise.all(_this._dependencies); }).then(function () { return _this.executeImpl(); });
    };
    ODataBatch.prototype.executeImpl = function () {
        var _this = this;
        logging_1.Logger.write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Executing batch with " + this._requests.length + " requests.", logging_1.LogLevel.Info);
        // if we don't have any requests, don't bother sending anything
        // this could be due to caching further upstream, or just an empty batch
        if (this._requests.length < 1) {
            logging_1.Logger.write("Resolving empty batch.", logging_1.LogLevel.Info);
            return Promise.resolve();
        }
        // creating the client here allows the url to be populated for nodejs client as well as potentially
        // any other hacks needed for other types of clients. Essentially allows the absoluteRequestUrl
        // below to be correct
        var client = new httpclient_1.HttpClient();
        // due to timing we need to get the absolute url here so we can use it for all the individual requests
        // and for sending the entire batch
        return util_1.Util.toAbsoluteUrl(this.baseUrl).then(function (absoluteRequestUrl) {
            // build all the requests, send them, pipe results in order to parsers
            var batchBody = [];
            var currentChangeSetId = "";
            for (var i = 0; i < _this._requests.length; i++) {
                var reqInfo = _this._requests[i];
                if (reqInfo.method === "GET") {
                    if (currentChangeSetId.length > 0) {
                        // end an existing change set
                        batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
                        currentChangeSetId = "";
                    }
                    batchBody.push("--batch_" + _this._batchId + "\n");
                }
                else {
                    if (currentChangeSetId.length < 1) {
                        // start new change set
                        currentChangeSetId = util_1.Util.getGUID();
                        batchBody.push("--batch_" + _this._batchId + "\n");
                        batchBody.push("Content-Type: multipart/mixed; boundary=\"changeset_" + currentChangeSetId + "\"\n\n");
                    }
                    batchBody.push("--changeset_" + currentChangeSetId + "\n");
                }
                // common batch part prefix
                batchBody.push("Content-Type: application/http\n");
                batchBody.push("Content-Transfer-Encoding: binary\n\n");
                var headers = new Headers();
                // this is the url of the individual request within the batch
                var url = util_1.Util.isUrlAbsolute(reqInfo.url) ? reqInfo.url : util_1.Util.combinePaths(absoluteRequestUrl, reqInfo.url);
                logging_1.Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Adding request " + reqInfo.method + " " + url + " to batch.", logging_1.LogLevel.Verbose);
                if (reqInfo.method !== "GET") {
                    var method = reqInfo.method;
                    if (reqInfo.hasOwnProperty("options") && reqInfo.options.hasOwnProperty("headers") && typeof reqInfo.options.headers["X-HTTP-Method"] !== "undefined") {
                        method = reqInfo.options.headers["X-HTTP-Method"];
                        delete reqInfo.options.headers["X-HTTP-Method"];
                    }
                    batchBody.push(method + " " + url + " HTTP/1.1\n");
                    headers.set("Content-Type", "application/json;odata=verbose;charset=utf-8");
                }
                else {
                    batchBody.push(reqInfo.method + " " + url + " HTTP/1.1\n");
                }
                // merge global config headers
                utils_1.mergeHeaders(headers, pnplibconfig_1.RuntimeConfig.spHeaders);
                // merge per-request headers
                if (reqInfo.options) {
                    utils_1.mergeHeaders(headers, reqInfo.options.headers);
                }
                // lastly we apply any default headers we need that may not exist
                if (!headers.has("Accept")) {
                    headers.append("Accept", "application/json");
                }
                if (!headers.has("Content-Type")) {
                    headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                }
                if (!headers.has("X-ClientService-ClientTag")) {
                    headers.append("X-ClientService-ClientTag", "PnPCoreJS:3.0.10");
                }
                // write headers into batch body
                headers.forEach(function (value, name) {
                    batchBody.push(name + ": " + value + "\n");
                });
                batchBody.push("\n");
                if (reqInfo.options.body) {
                    batchBody.push(reqInfo.options.body + "\n\n");
                }
            }
            if (currentChangeSetId.length > 0) {
                // Close the changeset
                batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
                currentChangeSetId = "";
            }
            batchBody.push("--batch_" + _this._batchId + "--\n");
            var batchHeaders = {
                "Content-Type": "multipart/mixed; boundary=batch_" + _this._batchId,
            };
            var batchOptions = {
                "body": batchBody.join(""),
                "headers": batchHeaders,
                "method": "POST",
            };
            logging_1.Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Sending batch request.", logging_1.LogLevel.Info);
            return client.fetch(util_1.Util.combinePaths(absoluteRequestUrl, "/_api/$batch"), batchOptions)
                .then(function (r) { return r.text(); })
                .then(ODataBatch.ParseResponse)
                .then(function (responses) {
                if (responses.length !== _this._requests.length) {
                    throw new exceptions_1.BatchParseException("Could not properly parse responses to match requests in batch.");
                }
                logging_1.Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched requests.", logging_1.LogLevel.Info);
                return responses.reduce(function (chain, response, index) {
                    var request = _this._requests[index];
                    logging_1.Logger.write("[" + _this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched request " + request.method + " " + request.url + ".", logging_1.LogLevel.Verbose);
                    return chain.then(function (_) { return request.parser.parse(response).then(request.resolve).catch(request.reject); });
                }, Promise.resolve());
            });
        });
    };
    return ODataBatch;
}());
exports.ODataBatch = ODataBatch;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Makes requests using the fetch API
 */
var FetchClient = /** @class */ (function () {
    function FetchClient() {
    }
    FetchClient.prototype.fetch = function (url, options) {
        return global.fetch(url, options);
    };
    return FetchClient;
}());
exports.FetchClient = FetchClient;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var util_1 = __webpack_require__(0);
/**
 * Allows for the fluent construction of search queries
 */
var SearchQueryBuilder = /** @class */ (function () {
    function SearchQueryBuilder(queryText, _query) {
        if (queryText === void 0) { queryText = ""; }
        if (_query === void 0) { _query = {}; }
        this._query = _query;
        if (typeof queryText === "string" && queryText.length > 0) {
            this.extendQuery({ Querytext: queryText });
        }
    }
    SearchQueryBuilder.create = function (queryText, queryTemplate) {
        if (queryText === void 0) { queryText = ""; }
        if (queryTemplate === void 0) { queryTemplate = {}; }
        return new SearchQueryBuilder(queryText, queryTemplate);
    };
    SearchQueryBuilder.prototype.text = function (queryText) {
        return this.extendQuery({ Querytext: queryText });
    };
    SearchQueryBuilder.prototype.template = function (template) {
        return this.extendQuery({ QueryTemplate: template });
    };
    SearchQueryBuilder.prototype.sourceId = function (id) {
        return this.extendQuery({ SourceId: id });
    };
    Object.defineProperty(SearchQueryBuilder.prototype, "enableInterleaving", {
        get: function () {
            return this.extendQuery({ EnableInterleaving: true });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchQueryBuilder.prototype, "enableStemming", {
        get: function () {
            return this.extendQuery({ EnableStemming: true });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchQueryBuilder.prototype, "trimDuplicates", {
        get: function () {
            return this.extendQuery({ TrimDuplicates: true });
        },
        enumerable: true,
        configurable: true
    });
    SearchQueryBuilder.prototype.trimDuplicatesIncludeId = function (n) {
        return this.extendQuery({ TrimDuplicatesIncludeId: n });
    };
    Object.defineProperty(SearchQueryBuilder.prototype, "enableNicknames", {
        get: function () {
            return this.extendQuery({ EnableNicknames: true });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchQueryBuilder.prototype, "enableFql", {
        get: function () {
            return this.extendQuery({ EnableFQL: true });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchQueryBuilder.prototype, "enablePhonetic", {
        get: function () {
            return this.extendQuery({ EnablePhonetic: true });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchQueryBuilder.prototype, "bypassResultTypes", {
        get: function () {
            return this.extendQuery({ BypassResultTypes: true });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchQueryBuilder.prototype, "processBestBets", {
        get: function () {
            return this.extendQuery({ ProcessBestBets: true });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchQueryBuilder.prototype, "enableQueryRules", {
        get: function () {
            return this.extendQuery({ EnableQueryRules: true });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchQueryBuilder.prototype, "enableSorting", {
        get: function () {
            return this.extendQuery({ EnableSorting: true });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchQueryBuilder.prototype, "generateBlockRankLog", {
        get: function () {
            return this.extendQuery({ GenerateBlockRankLog: true });
        },
        enumerable: true,
        configurable: true
    });
    SearchQueryBuilder.prototype.rankingModelId = function (id) {
        return this.extendQuery({ RankingModelId: id });
    };
    SearchQueryBuilder.prototype.startRow = function (n) {
        return this.extendQuery({ StartRow: n });
    };
    SearchQueryBuilder.prototype.rowLimit = function (n) {
        return this.extendQuery({ RowLimit: n });
    };
    SearchQueryBuilder.prototype.rowsPerPage = function (n) {
        return this.extendQuery({ RowsPerPage: n });
    };
    SearchQueryBuilder.prototype.selectProperties = function () {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        return this.extendQuery({ SelectProperties: properties });
    };
    SearchQueryBuilder.prototype.culture = function (culture) {
        return this.extendQuery({ Culture: culture });
    };
    SearchQueryBuilder.prototype.timeZoneId = function (id) {
        return this.extendQuery({ TimeZoneId: id });
    };
    SearchQueryBuilder.prototype.refinementFilters = function () {
        var filters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            filters[_i] = arguments[_i];
        }
        return this.extendQuery({ RefinementFilters: filters });
    };
    SearchQueryBuilder.prototype.refiners = function (refiners) {
        return this.extendQuery({ Refiners: refiners });
    };
    SearchQueryBuilder.prototype.hiddenConstraints = function (constraints) {
        return this.extendQuery({ HiddenConstraints: constraints });
    };
    SearchQueryBuilder.prototype.sortList = function () {
        var sorts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sorts[_i] = arguments[_i];
        }
        return this.extendQuery({ SortList: sorts });
    };
    SearchQueryBuilder.prototype.timeout = function (milliseconds) {
        return this.extendQuery({ Timeout: milliseconds });
    };
    SearchQueryBuilder.prototype.hithighlightedProperties = function () {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        return this.extendQuery({ HitHighlightedProperties: properties });
    };
    SearchQueryBuilder.prototype.clientType = function (clientType) {
        return this.extendQuery({ ClientType: clientType });
    };
    SearchQueryBuilder.prototype.personalizationData = function (data) {
        return this.extendQuery({ PersonalizationData: data });
    };
    SearchQueryBuilder.prototype.resultsURL = function (url) {
        return this.extendQuery({ ResultsUrl: url });
    };
    SearchQueryBuilder.prototype.queryTag = function () {
        var tags = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tags[_i] = arguments[_i];
        }
        return this.extendQuery({ QueryTag: tags });
    };
    SearchQueryBuilder.prototype.properties = function () {
        var properties = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            properties[_i] = arguments[_i];
        }
        return this.extendQuery({ Properties: properties });
    };
    Object.defineProperty(SearchQueryBuilder.prototype, "processPersonalFavorites", {
        get: function () {
            return this.extendQuery({ ProcessPersonalFavorites: true });
        },
        enumerable: true,
        configurable: true
    });
    SearchQueryBuilder.prototype.queryTemplatePropertiesUrl = function (url) {
        return this.extendQuery({ QueryTemplatePropertiesUrl: url });
    };
    SearchQueryBuilder.prototype.reorderingRules = function () {
        var rules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rules[_i] = arguments[_i];
        }
        return this.extendQuery({ ReorderingRules: rules });
    };
    SearchQueryBuilder.prototype.hitHighlightedMultivaluePropertyLimit = function (limit) {
        return this.extendQuery({ HitHighlightedMultivaluePropertyLimit: limit });
    };
    Object.defineProperty(SearchQueryBuilder.prototype, "enableOrderingHitHighlightedProperty", {
        get: function () {
            return this.extendQuery({ EnableOrderingHitHighlightedProperty: true });
        },
        enumerable: true,
        configurable: true
    });
    SearchQueryBuilder.prototype.collapseSpecification = function (spec) {
        return this.extendQuery({ CollapseSpecification: spec });
    };
    SearchQueryBuilder.prototype.uiLanguage = function (lang) {
        return this.extendQuery({ UILanguage: lang });
    };
    SearchQueryBuilder.prototype.desiredSnippetLength = function (len) {
        return this.extendQuery({ DesiredSnippetLength: len });
    };
    SearchQueryBuilder.prototype.maxSnippetLength = function (len) {
        return this.extendQuery({ MaxSnippetLength: len });
    };
    SearchQueryBuilder.prototype.summaryLength = function (len) {
        return this.extendQuery({ SummaryLength: len });
    };
    SearchQueryBuilder.prototype.toSearchQuery = function () {
        return this._query;
    };
    SearchQueryBuilder.prototype.extendQuery = function (part) {
        this._query = util_1.Util.extend(this._query, part);
        return this;
    };
    return SearchQueryBuilder;
}());
exports.SearchQueryBuilder = SearchQueryBuilder;
/**
 * Describes the search API
 *
 */
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    /**
     * Creates a new instance of the Search class
     *
     * @param baseUrl The url for the search context
     * @param query The SearchQuery object to execute
     */
    function Search(baseUrl, path) {
        if (path === void 0) { path = "_api/search/postquery"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * .......
     * @returns Promise
     */
    Search.prototype.execute = function (query) {
        var _this = this;
        var formattedBody;
        formattedBody = query;
        if (formattedBody.SelectProperties) {
            formattedBody.SelectProperties = this.fixupProp(query.SelectProperties);
        }
        if (formattedBody.RefinementFilters) {
            formattedBody.RefinementFilters = this.fixupProp(query.RefinementFilters);
        }
        if (formattedBody.SortList) {
            formattedBody.SortList = this.fixupProp(query.SortList);
        }
        if (formattedBody.HithighlightedProperties) {
            formattedBody.HithighlightedProperties = this.fixupProp(query.HitHighlightedProperties);
        }
        if (formattedBody.ReorderingRules) {
            formattedBody.ReorderingRules = this.fixupProp(query.ReorderingRules);
        }
        if (formattedBody.Properties) {
            formattedBody.Properties = this.fixupProp(query.Properties);
        }
        var postBody = JSON.stringify({
            request: util_1.Util.extend({
                "__metadata": { "type": "Microsoft.Office.Server.Search.REST.SearchRequest" },
            }, formattedBody),
        });
        return this.postCore({ body: postBody }).then(function (data) { return new SearchResults(data, _this.toUrl(), query); });
    };
    /**
     * Fixes up properties that expect to consist of a "results" collection when needed
     *
     * @param prop property to fixup for container struct
     */
    Search.prototype.fixupProp = function (prop) {
        if (prop.hasOwnProperty("results")) {
            return prop;
        }
        return { results: prop };
    };
    return Search;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.Search = Search;
/**
 * Describes the SearchResults class, which returns the formatted and raw version of the query response
 */
var SearchResults = /** @class */ (function () {
    /**
     * Creates a new instance of the SearchResult class
     *
     */
    function SearchResults(rawResponse, _url, _query, _raw, _primary) {
        if (_raw === void 0) { _raw = null; }
        if (_primary === void 0) { _primary = null; }
        this._url = _url;
        this._query = _query;
        this._raw = _raw;
        this._primary = _primary;
        this._raw = rawResponse.postquery ? rawResponse.postquery : rawResponse;
    }
    Object.defineProperty(SearchResults.prototype, "ElapsedTime", {
        get: function () {
            return this.RawSearchResults.ElapsedTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "RowCount", {
        get: function () {
            return this.RawSearchResults.PrimaryQueryResult.RelevantResults.RowCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "TotalRows", {
        get: function () {
            return this.RawSearchResults.PrimaryQueryResult.RelevantResults.TotalRows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "TotalRowsIncludingDuplicates", {
        get: function () {
            return this.RawSearchResults.PrimaryQueryResult.RelevantResults.TotalRowsIncludingDuplicates;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "RawSearchResults", {
        get: function () {
            return this._raw;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "PrimarySearchResults", {
        get: function () {
            if (this._primary === null) {
                this._primary = this.formatSearchResults(this._raw.PrimaryQueryResult.RelevantResults.Table.Rows);
            }
            return this._primary;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a page of results
     *
     * @param pageNumber Index of the page to return. Used to determine StartRow
     * @param pageSize Optional, items per page (default = 10)
     */
    SearchResults.prototype.getPage = function (pageNumber, pageSize) {
        // if we got all the available rows we don't have another page
        if (this.TotalRows < this.RowCount) {
            return Promise.resolve(null);
        }
        // if pageSize is supplied, then we use that regardless of any previous values
        // otherwise get the previous RowLimit or default to 10
        var rows = typeof pageSize !== "undefined" ? pageSize : this._query.hasOwnProperty("RowLimit") ? this._query.RowLimit : 10;
        var query = util_1.Util.extend(this._query, {
            RowLimit: rows,
            StartRow: rows * (pageNumber - 1),
        });
        // we have reached the end
        if (query.StartRow > this.TotalRows) {
            return Promise.resolve(null);
        }
        var search = new Search(this._url, null);
        return search.execute(query);
    };
    /**
     * Formats a search results array
     *
     * @param rawResults The array to process
     */
    SearchResults.prototype.formatSearchResults = function (rawResults) {
        var results = new Array();
        var tempResults = rawResults.results ? rawResults.results : rawResults;
        for (var _i = 0, tempResults_1 = tempResults; _i < tempResults_1.length; _i++) {
            var tempResult = tempResults_1[_i];
            var cells = tempResult.Cells.results ? tempResult.Cells.results : tempResult.Cells;
            results.push(cells.reduce(function (res, cell) {
                Object.defineProperty(res, cell.Key, {
                    configurable: false,
                    enumerable: false,
                    value: cell.Value,
                    writable: false,
                });
                return res;
            }, {}));
        }
        return results;
    };
    return SearchResults;
}());
exports.SearchResults = SearchResults;
/**
 * defines the SortDirection enum
 */
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["Ascending"] = 0] = "Ascending";
    SortDirection[SortDirection["Descending"] = 1] = "Descending";
    SortDirection[SortDirection["FQLFormula"] = 2] = "FQLFormula";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
/**
 * defines the ReorderingRuleMatchType  enum
 */
var ReorderingRuleMatchType;
(function (ReorderingRuleMatchType) {
    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultContainsKeyword"] = 0] = "ResultContainsKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleContainsKeyword"] = 1] = "TitleContainsKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleMatchesKeyword"] = 2] = "TitleMatchesKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlStartsWith"] = 3] = "UrlStartsWith";
    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlExactlyMatches"] = 4] = "UrlExactlyMatches";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ContentTypeIs"] = 5] = "ContentTypeIs";
    ReorderingRuleMatchType[ReorderingRuleMatchType["FileExtensionMatches"] = 6] = "FileExtensionMatches";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultHasTag"] = 7] = "ResultHasTag";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ManualCondition"] = 8] = "ManualCondition";
})(ReorderingRuleMatchType = exports.ReorderingRuleMatchType || (exports.ReorderingRuleMatchType = {}));
/**
 * Specifies the type value for the property
 */
var QueryPropertyValueType;
(function (QueryPropertyValueType) {
    QueryPropertyValueType[QueryPropertyValueType["None"] = 0] = "None";
    QueryPropertyValueType[QueryPropertyValueType["StringType"] = 1] = "StringType";
    QueryPropertyValueType[QueryPropertyValueType["Int32Type"] = 2] = "Int32Type";
    QueryPropertyValueType[QueryPropertyValueType["BooleanType"] = 3] = "BooleanType";
    QueryPropertyValueType[QueryPropertyValueType["StringArrayType"] = 4] = "StringArrayType";
    QueryPropertyValueType[QueryPropertyValueType["UnSupportedType"] = 5] = "UnSupportedType";
})(QueryPropertyValueType = exports.QueryPropertyValueType || (exports.QueryPropertyValueType = {}));
var SearchBuiltInSourceId = /** @class */ (function () {
    function SearchBuiltInSourceId() {
    }
    SearchBuiltInSourceId.Documents = "e7ec8cee-ded8-43c9-beb5-436b54b31e84";
    SearchBuiltInSourceId.ItemsMatchingContentType = "5dc9f503-801e-4ced-8a2c-5d1237132419";
    SearchBuiltInSourceId.ItemsMatchingTag = "e1327b9c-2b8c-4b23-99c9-3730cb29c3f7";
    SearchBuiltInSourceId.ItemsRelatedToCurrentUser = "48fec42e-4a92-48ce-8363-c2703a40e67d";
    SearchBuiltInSourceId.ItemsWithSameKeywordAsThisItem = "5c069288-1d17-454a-8ac6-9c642a065f48";
    SearchBuiltInSourceId.LocalPeopleResults = "b09a7990-05ea-4af9-81ef-edfab16c4e31";
    SearchBuiltInSourceId.LocalReportsAndDataResults = "203fba36-2763-4060-9931-911ac8c0583b";
    SearchBuiltInSourceId.LocalSharePointResults = "8413cd39-2156-4e00-b54d-11efd9abdb89";
    SearchBuiltInSourceId.LocalVideoResults = "78b793ce-7956-4669-aa3b-451fc5defebf";
    SearchBuiltInSourceId.Pages = "5e34578e-4d08-4edc-8bf3-002acf3cdbcc";
    SearchBuiltInSourceId.Pictures = "38403c8c-3975-41a8-826e-717f2d41568a";
    SearchBuiltInSourceId.Popular = "97c71db1-58ce-4891-8b64-585bc2326c12";
    SearchBuiltInSourceId.RecentlyChangedItems = "ba63bbae-fa9c-42c0-b027-9a878f16557c";
    SearchBuiltInSourceId.RecommendedItems = "ec675252-14fa-4fbe-84dd-8d098ed74181";
    SearchBuiltInSourceId.Wiki = "9479bf85-e257-4318-b5a8-81a180f5faa1";
    return SearchBuiltInSourceId;
}());
exports.SearchBuiltInSourceId = SearchBuiltInSourceId;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = __webpack_require__(13);
var util_1 = __webpack_require__(0);
var pnplibconfig_1 = __webpack_require__(4);
var CachingOptions = /** @class */ (function () {
    function CachingOptions(key) {
        this.key = key;
        this.expiration = util_1.Util.dateAdd(new Date(), "second", pnplibconfig_1.RuntimeConfig.defaultCachingTimeoutSeconds);
        this.storeName = pnplibconfig_1.RuntimeConfig.defaultCachingStore;
    }
    Object.defineProperty(CachingOptions.prototype, "store", {
        get: function () {
            if (this.storeName === "local") {
                return CachingOptions.storage.local;
            }
            else {
                return CachingOptions.storage.session;
            }
        },
        enumerable: true,
        configurable: true
    });
    CachingOptions.storage = new storage_1.PnPClientStorage();
    return CachingOptions;
}());
exports.CachingOptions = CachingOptions;
var CachingParserWrapper = /** @class */ (function () {
    function CachingParserWrapper(_parser, _cacheOptions) {
        this._parser = _parser;
        this._cacheOptions = _cacheOptions;
    }
    CachingParserWrapper.prototype.parse = function (response) {
        var _this = this;
        // add this to the cache based on the options
        return this._parser.parse(response).then(function (data) {
            if (_this._cacheOptions.store !== null) {
                _this._cacheOptions.store.put(_this._cacheOptions.key, data, _this._cacheOptions.expiration);
            }
            return data;
        });
    };
    return CachingParserWrapper;
}());
exports.CachingParserWrapper = CachingParserWrapper;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var SearchSuggest = /** @class */ (function (_super) {
    __extends(SearchSuggest, _super);
    function SearchSuggest(baseUrl, path) {
        if (path === void 0) { path = "_api/search/suggest"; }
        return _super.call(this, baseUrl, path) || this;
    }
    SearchSuggest.prototype.execute = function (query) {
        this.mapQueryToQueryString(query);
        return this.get().then(function (response) { return new SearchSuggestResult(response); });
    };
    SearchSuggest.prototype.mapQueryToQueryString = function (query) {
        this.query.add("querytext", "'" + query.querytext + "'");
        if (query.hasOwnProperty("count")) {
            this.query.add("inumberofquerysuggestions", query.count.toString());
        }
        if (query.hasOwnProperty("personalCount")) {
            this.query.add("inumberofresultsuggestions", query.personalCount.toString());
        }
        if (query.hasOwnProperty("preQuery")) {
            this.query.add("fprequerysuggestions", query.preQuery.toString());
        }
        if (query.hasOwnProperty("hitHighlighting")) {
            this.query.add("fhithighlighting", query.hitHighlighting.toString());
        }
        if (query.hasOwnProperty("capitalize")) {
            this.query.add("fcapitalizefirstletters", query.capitalize.toString());
        }
        if (query.hasOwnProperty("culture")) {
            this.query.add("culture", query.culture.toString());
        }
        if (query.hasOwnProperty("stemming")) {
            this.query.add("enablestemming", query.stemming.toString());
        }
        if (query.hasOwnProperty("includePeople")) {
            this.query.add("showpeoplenamesuggestions", query.includePeople.toString());
        }
        if (query.hasOwnProperty("queryRules")) {
            this.query.add("enablequeryrules", query.queryRules.toString());
        }
        if (query.hasOwnProperty("prefixMatch")) {
            this.query.add("fprefixmatchallterms", query.prefixMatch.toString());
        }
    };
    return SearchSuggest;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.SearchSuggest = SearchSuggest;
var SearchSuggestResult = /** @class */ (function () {
    function SearchSuggestResult(json) {
        if (json.hasOwnProperty("suggest")) {
            // verbose
            this.PeopleNames = json.suggest.PeopleNames.results;
            this.PersonalResults = json.suggest.PersonalResults.results;
            this.Queries = json.suggest.Queries.results;
        }
        else {
            this.PeopleNames = json.PeopleNames;
            this.PersonalResults = json.PersonalResults;
            this.Queries = json.Queries;
        }
    }
    return SearchSuggestResult;
}());
exports.SearchSuggestResult = SearchSuggestResult;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var webs_1 = __webpack_require__(11);
var usercustomactions_1 = __webpack_require__(27);
var odata_1 = __webpack_require__(3);
var batch_1 = __webpack_require__(29);
var features_1 = __webpack_require__(39);
/**
 * Describes a site collection
 *
 */
var Site = /** @class */ (function (_super) {
    __extends(Site, _super);
    /**
     * Creates a new instance of the Site class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this site collection
     */
    function Site(baseUrl, path) {
        if (path === void 0) { path = "_api/site"; }
        return _super.call(this, baseUrl, path) || this;
    }
    Object.defineProperty(Site.prototype, "rootWeb", {
        /**
         * Gets the root web of the site collection
         *
         */
        get: function () {
            return new webs_1.Web(this, "rootweb");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Site.prototype, "features", {
        /**
         * Gets the active features for this site collection
         *
         */
        get: function () {
            return new features_1.Features(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Site.prototype, "userCustomActions", {
        /**
         * Gets all custom actions for this site collection
         *
         */
        get: function () {
            return new usercustomactions_1.UserCustomActions(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a Web instance representing the root web of the site collection
     * correctly setup for chaining within the library
     */
    Site.prototype.getRootWeb = function () {
        return this.rootWeb.select("Url").get().then(function (web) { return new webs_1.Web(web.Url); });
    };
    /**
     * Gets the context information for this site collection
     */
    Site.prototype.getContextInfo = function () {
        var q = new Site(this.parentUrl, "_api/contextinfo");
        return q.postCore().then(function (data) {
            if (data.hasOwnProperty("GetContextWebInformation")) {
                var info = data.GetContextWebInformation;
                info.SupportedSchemaVersions = info.SupportedSchemaVersions.results;
                return info;
            }
            else {
                return data;
            }
        });
    };
    /**
     * Gets the document libraries on a site. Static method. (SharePoint Online only)
     *
     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
     */
    Site.prototype.getDocumentLibraries = function (absoluteWebUrl) {
        var q = new sharepointqueryable_1.SharePointQueryable("", "_api/sp.web.getdocumentlibraries(@v)");
        q.query.add("@v", "'" + absoluteWebUrl + "'");
        return q.get().then(function (data) {
            if (data.hasOwnProperty("GetDocumentLibraries")) {
                return data.GetDocumentLibraries;
            }
            else {
                return data;
            }
        });
    };
    /**
     * Gets the site url from a page url
     *
     * @param absolutePageUrl The absolute url of the page
     */
    Site.prototype.getWebUrlFromPageUrl = function (absolutePageUrl) {
        var q = new sharepointqueryable_1.SharePointQueryable("", "_api/sp.web.getweburlfrompageurl(@v)");
        q.query.add("@v", "'" + absolutePageUrl + "'");
        return q.get().then(function (data) {
            if (data.hasOwnProperty("GetWebUrlFromPageUrl")) {
                return data.GetWebUrlFromPageUrl;
            }
            else {
                return data;
            }
        });
    };
    /**
     * Creates a new batch for requests within the context of this site collection
     *
     */
    Site.prototype.createBatch = function () {
        return new batch_1.ODataBatch(this.parentUrl);
    };
    /**
     * Opens a web by id (using POST)
     *
     * @param webId The GUID id of the web to open
     */
    Site.prototype.openWebById = function (webId) {
        return this.clone(Site, "openWebById('" + webId + "')").postCore().then(function (d) {
            return {
                data: d,
                web: webs_1.Web.fromUrl(odata_1.spExtractODataId(d)),
            };
        });
    };
    return Site;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.Site = Site;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var webs_1 = __webpack_require__(11);
var roles_1 = __webpack_require__(23);
var types_1 = __webpack_require__(17);
var sharepointqueryable_1 = __webpack_require__(1);
var SharePointQueryableSecurable = /** @class */ (function (_super) {
    __extends(SharePointQueryableSecurable, _super);
    function SharePointQueryableSecurable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SharePointQueryableSecurable.prototype, "roleAssignments", {
        /**
         * Gets the set of role assignments for this item
         *
         */
        get: function () {
            return new roles_1.RoleAssignments(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharePointQueryableSecurable.prototype, "firstUniqueAncestorSecurableObject", {
        /**
         * Gets the closest securable up the security hierarchy whose permissions are applied to this list item
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableInstance(this, "FirstUniqueAncestorSecurableObject");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the effective permissions for the user supplied
     *
     * @param loginName The claims username for the user (ex: i:0#.f|membership|user@domain.com)
     */
    SharePointQueryableSecurable.prototype.getUserEffectivePermissions = function (loginName) {
        var q = this.clone(sharepointqueryable_1.SharePointQueryable, "getUserEffectivePermissions(@user)");
        q.query.add("@user", "'" + encodeURIComponent(loginName) + "'");
        return q.get().then(function (r) {
            // handle verbose mode
            return r.hasOwnProperty("GetUserEffectivePermissions") ? r.GetUserEffectivePermissions : r;
        });
    };
    /**
     * Gets the effective permissions for the current user
     */
    SharePointQueryableSecurable.prototype.getCurrentUserEffectivePermissions = function () {
        var _this = this;
        var w = webs_1.Web.fromUrl(this.toUrl());
        return w.currentUser.select("LoginName").getAs().then(function (user) {
            return _this.getUserEffectivePermissions(user.LoginName);
        });
    };
    /**
     * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
     *
     * @param copyRoleAssignments If true the permissions are copied from the current parent scope
     * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
     */
    SharePointQueryableSecurable.prototype.breakRoleInheritance = function (copyRoleAssignments, clearSubscopes) {
        if (copyRoleAssignments === void 0) { copyRoleAssignments = false; }
        if (clearSubscopes === void 0) { clearSubscopes = false; }
        return this.clone(SharePointQueryableSecurable, "breakroleinheritance(copyroleassignments=" + copyRoleAssignments + ", clearsubscopes=" + clearSubscopes + ")").postCore();
    };
    /**
     * Removes the local role assignments so that it re-inherit role assignments from the parent object.
     *
     */
    SharePointQueryableSecurable.prototype.resetRoleInheritance = function () {
        return this.clone(SharePointQueryableSecurable, "resetroleinheritance").postCore();
    };
    /**
     * Determines if a given user has the appropriate permissions
     *
     * @param loginName The user to check
     * @param permission The permission being checked
     */
    SharePointQueryableSecurable.prototype.userHasPermissions = function (loginName, permission) {
        var _this = this;
        return this.getUserEffectivePermissions(loginName).then(function (perms) {
            return _this.hasPermissions(perms, permission);
        });
    };
    /**
     * Determines if the current user has the requested permissions
     *
     * @param permission The permission we wish to check
     */
    SharePointQueryableSecurable.prototype.currentUserHasPermissions = function (permission) {
        var _this = this;
        return this.getCurrentUserEffectivePermissions().then(function (perms) {
            return _this.hasPermissions(perms, permission);
        });
    };
    /**
     * Taken from sp.js, checks the supplied permissions against the mask
     *
     * @param value The security principal's permissions on the given object
     * @param perm The permission checked against the value
     */
    /* tslint:disable:no-bitwise */
    SharePointQueryableSecurable.prototype.hasPermissions = function (value, perm) {
        if (!perm) {
            return true;
        }
        var low = parseFloat(value.Low);
        var high = parseFloat(value.High);
        if (perm === types_1.PermissionKind.FullMask) {
            return (high & 32767) === 32767 && low === 65535;
        }
        perm = perm - 1;
        var num = 1;
        if (perm >= 0 && perm < 32) {
            num = num << perm;
            return 0 !== (low & num);
        }
        else if (perm >= 32 && perm < 64) {
            num = num << perm - 32;
            return 0 !== (high & num);
        }
        return false;
    };
    return SharePointQueryableSecurable;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.SharePointQueryableSecurable = SharePointQueryableSecurable;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var sitegroups_1 = __webpack_require__(24);
var util_1 = __webpack_require__(0);
/**
 * Describes a collection of all site collection users
 *
 */
var SiteUsers = /** @class */ (function (_super) {
    __extends(SiteUsers, _super);
    /**
     * Creates a new instance of the SiteUsers class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this user collection
     */
    function SiteUsers(baseUrl, path) {
        if (path === void 0) { path = "siteusers"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a user from the collection by email
     *
     * @param email The email address of the user to retrieve
     */
    SiteUsers.prototype.getByEmail = function (email) {
        return new SiteUser(this, "getByEmail('" + email + "')");
    };
    /**
     * Gets a user from the collection by id
     *
     * @param id The id of the user to retrieve
     */
    SiteUsers.prototype.getById = function (id) {
        return new SiteUser(this, "getById(" + id + ")");
    };
    /**
     * Gets a user from the collection by login name
     *
     * @param loginName The login name of the user to retrieve
     */
    SiteUsers.prototype.getByLoginName = function (loginName) {
        var su = new SiteUser(this);
        su.concat("('!@v::" + encodeURIComponent(loginName) + "')");
        return su;
    };
    /**
     * Removes a user from the collection by id
     *
     * @param id The id of the user to remove
     */
    SiteUsers.prototype.removeById = function (id) {
        return this.clone(SiteUsers, "removeById(" + id + ")").postCore();
    };
    /**
     * Removes a user from the collection by login name
     *
     * @param loginName The login name of the user to remove
     */
    SiteUsers.prototype.removeByLoginName = function (loginName) {
        var o = this.clone(SiteUsers, "removeByLoginName(@v)");
        o.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
        return o.postCore();
    };
    /**
     * Adds a user to a group
     *
     * @param loginName The login name of the user to add to the group
     *
     */
    SiteUsers.prototype.add = function (loginName) {
        var _this = this;
        return this.clone(SiteUsers, null).postCore({
            body: JSON.stringify({ "__metadata": { "type": "SP.User" }, LoginName: loginName }),
        }).then(function () { return _this.getByLoginName(loginName); });
    };
    return SiteUsers;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.SiteUsers = SiteUsers;
/**
 * Describes a single user
 *
 */
var SiteUser = /** @class */ (function (_super) {
    __extends(SiteUser, _super);
    function SiteUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SiteUser.prototype, "groups", {
        /**
         * Gets the groups for this user
         *
         */
        get: function () {
            return new sitegroups_1.SiteGroups(this, "groups");
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Updates this user instance with the supplied properties
    *
    * @param properties A plain object of property names and values to update for the user
    */
    SiteUser.prototype.update = function (properties) {
        var _this = this;
        var postBody = util_1.Util.extend({ "__metadata": { "type": "SP.User" } }, properties);
        return this.postCore({
            body: JSON.stringify(postBody),
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (data) {
            return {
                data: data,
                user: _this,
            };
        });
    };
    /**
     * Delete this user
     *
     */
    SiteUser.prototype.delete = function () {
        return this.postCore({
            headers: {
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    return SiteUser;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.SiteUser = SiteUser;
/**
 * Represents the current user
 */
var CurrentUser = /** @class */ (function (_super) {
    __extends(CurrentUser, _super);
    function CurrentUser(baseUrl, path) {
        if (path === void 0) { path = "currentuser"; }
        return _super.call(this, baseUrl, path) || this;
    }
    return CurrentUser;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.CurrentUser = CurrentUser;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var LimitedWebPartManager = /** @class */ (function (_super) {
    __extends(LimitedWebPartManager, _super);
    function LimitedWebPartManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LimitedWebPartManager.prototype, "webparts", {
        /**
         * Gets the set of web part definitions contained by this web part manager
         *
         */
        get: function () {
            return new WebPartDefinitions(this, "webparts");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Exports a webpart definition
     *
     * @param id the GUID id of the definition to export
     */
    LimitedWebPartManager.prototype.export = function (id) {
        return this.clone(LimitedWebPartManager, "ExportWebPart").postCore({
            body: JSON.stringify({ webPartId: id }),
        });
    };
    /**
     * Imports a webpart
     *
     * @param xml webpart definition which must be valid XML in the .dwp or .webpart format
     */
    LimitedWebPartManager.prototype.import = function (xml) {
        return this.clone(LimitedWebPartManager, "ImportWebPart").postCore({
            body: JSON.stringify({ webPartXml: xml }),
        });
    };
    return LimitedWebPartManager;
}(sharepointqueryable_1.SharePointQueryable));
exports.LimitedWebPartManager = LimitedWebPartManager;
var WebPartDefinitions = /** @class */ (function (_super) {
    __extends(WebPartDefinitions, _super);
    function WebPartDefinitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a web part definition from the collection by id
     *
     * @param id The storage ID of the SPWebPartDefinition to retrieve
     */
    WebPartDefinitions.prototype.getById = function (id) {
        return new WebPartDefinition(this, "getbyid('" + id + "')");
    };
    /**
     * Gets a web part definition from the collection by storage id
     *
     * @param id The WebPart.ID of the SPWebPartDefinition to retrieve
     */
    WebPartDefinitions.prototype.getByControlId = function (id) {
        return new WebPartDefinition(this, "getByControlId('" + id + "')");
    };
    return WebPartDefinitions;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.WebPartDefinitions = WebPartDefinitions;
var WebPartDefinition = /** @class */ (function (_super) {
    __extends(WebPartDefinition, _super);
    function WebPartDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WebPartDefinition.prototype, "webpart", {
        /**
         * Gets the webpart information associated with this definition
         */
        get: function () {
            return new WebPart(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Saves changes to the Web Part made using other properties and methods on the SPWebPartDefinition object
     */
    WebPartDefinition.prototype.saveChanges = function () {
        return this.clone(WebPartDefinition, "SaveWebPartChanges").postCore();
    };
    /**
     * Moves the Web Part to a different location on a Web Part Page
     *
     * @param zoneId The ID of the Web Part Zone to which to move the Web Part
     * @param zoneIndex A Web Part zone index that specifies the position at which the Web Part is to be moved within the destination Web Part zone
     */
    WebPartDefinition.prototype.moveTo = function (zoneId, zoneIndex) {
        return this.clone(WebPartDefinition, "MoveWebPartTo(zoneID='" + zoneId + "', zoneIndex=" + zoneIndex + ")").postCore();
    };
    /**
     * Closes the Web Part. If the Web Part is already closed, this method does nothing
     */
    WebPartDefinition.prototype.close = function () {
        return this.clone(WebPartDefinition, "CloseWebPart").postCore();
    };
    /**
     * Opens the Web Part. If the Web Part is already closed, this method does nothing
     */
    WebPartDefinition.prototype.open = function () {
        return this.clone(WebPartDefinition, "OpenWebPart").postCore();
    };
    /**
     * Removes a webpart from a page, all settings will be lost
     */
    WebPartDefinition.prototype.delete = function () {
        return this.clone(WebPartDefinition, "DeleteWebPart").postCore();
    };
    return WebPartDefinition;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.WebPartDefinition = WebPartDefinition;
var WebPart = /** @class */ (function (_super) {
    __extends(WebPart, _super);
    /**
     * Creates a new instance of the WebPart class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this fields collection
     * @param path Optional, if supplied will be appended to the supplied baseUrl
     */
    function WebPart(baseUrl, path) {
        if (path === void 0) { path = "webpart"; }
        return _super.call(this, baseUrl, path) || this;
    }
    return WebPart;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.WebPart = WebPart;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
/**
 * Describes a collection of List objects
 *
 */
var Features = /** @class */ (function (_super) {
    __extends(Features, _super);
    /**
     * Creates a new instance of the Lists class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this fields collection
     */
    function Features(baseUrl, path) {
        if (path === void 0) { path = "features"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the feature (GUID)
     */
    Features.prototype.getById = function (id) {
        var feature = new Feature(this);
        feature.concat("('" + id + "')");
        return feature;
    };
    /**
     * Adds a new list to the collection
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature activation will be forced
     */
    Features.prototype.add = function (id, force) {
        var _this = this;
        if (force === void 0) { force = false; }
        return this.clone(Features, "add").postCore({
            body: JSON.stringify({
                featdefScope: 0,
                featureId: id,
                force: force,
            }),
        }).then(function (data) {
            return {
                data: data,
                feature: _this.getById(id),
            };
        });
    };
    /**
     * Removes (deactivates) a feature from the collection
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature deactivation will be forced
     */
    Features.prototype.remove = function (id, force) {
        if (force === void 0) { force = false; }
        return this.clone(Features, "remove").postCore({
            body: JSON.stringify({
                featureId: id,
                force: force,
            }),
        });
    };
    return Features;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.Features = Features;
var Feature = /** @class */ (function (_super) {
    __extends(Feature, _super);
    function Feature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Removes (deactivates) a feature from the collection
     *
     * @param force If true the feature deactivation will be forced
     */
    Feature.prototype.deactivate = function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        var removeDependency = this.addBatchDependency();
        var idGet = new Feature(this).select("DefinitionId");
        return idGet.getAs().then(function (feature) {
            var promise = _this.getParent(Features, _this.parentUrl, "", _this.batch).remove(feature.DefinitionId, force);
            removeDependency();
            return promise;
        });
    };
    return Feature;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.Feature = Feature;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var files_1 = __webpack_require__(8);
var odata_1 = __webpack_require__(3);
var util_1 = __webpack_require__(0);
/**
 * Represents an app catalog
 */
var AppCatalog = /** @class */ (function (_super) {
    __extends(AppCatalog, _super);
    function AppCatalog(baseUrl, path) {
        if (path === void 0) { path = "_api/web/tenantappcatalog/AvailableApps"; }
        var _this = this;
        // we need to handle the case of getting created from something that already has "_api/..." or does not
        var candidateUrl = "";
        if (typeof baseUrl === "string") {
            candidateUrl = baseUrl;
        }
        else if (typeof baseUrl !== "undefined") {
            candidateUrl = baseUrl.toUrl();
        }
        _this = _super.call(this, util_1.extractWebUrl(candidateUrl), path) || this;
        return _this;
    }
    /**
     * Get details of specific app from the app catalog
     * @param id - Specify the guid of the app
     */
    AppCatalog.prototype.getAppById = function (id) {
        return new App(this, "getById('" + id + "')");
    };
    /**
     * Uploads an app package. Not supported for batching
     *
     * @param filename Filename to create.
     * @param content app package data (eg: the .app or .sppkg file).
     * @param shouldOverWrite Should an app with the same name in the same location be overwritten? (default: true)
     * @returns Promise<AppAddResult>
     */
    AppCatalog.prototype.add = function (filename, content, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        // you don't add to the availableapps collection
        var adder = new AppCatalog(util_1.extractWebUrl(this.toUrl()), "_api/web/tenantappcatalog/add(overwrite=" + shouldOverWrite + ",url='" + filename + "')");
        return adder.postCore({
            body: content,
        }).then(function (r) {
            return {
                data: r,
                file: new files_1.File(odata_1.spExtractODataId(r)),
            };
        });
    };
    return AppCatalog;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.AppCatalog = AppCatalog;
/**
 * Represents the actions you can preform on a given app within the catalog
 */
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method deploys an app on the app catalog.  It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    App.prototype.deploy = function () {
        return this.clone(App, "Deploy").postCore();
    };
    /**
     * This method retracts a deployed app on the app catalog.  It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    App.prototype.retract = function () {
        return this.clone(App, "Retract").postCore();
    };
    /**
     * This method allows an app which is already deployed to be installed on a web
     */
    App.prototype.install = function () {
        return this.clone(App, "Install").postCore();
    };
    /**
     * This method allows an app which is already insatlled to be uninstalled on a web
     */
    App.prototype.uninstall = function () {
        return this.clone(App, "Uninstall").postCore();
    };
    /**
     * This method allows an app which is already insatlled to be upgraded on a web
     */
    App.prototype.upgrade = function () {
        return this.clone(App, "Upgrade").postCore();
    };
    /**
     * This method removes an app from the app catalog.  It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    App.prototype.remove = function () {
        return this.clone(App, "Remove").postCore();
    };
    return App;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.App = App;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var files_1 = __webpack_require__(8);
var items_1 = __webpack_require__(12);
var util_1 = __webpack_require__(0);
/**
 * Gets the next order value 1 based for the provided collection
 *
 * @param collection Collection of orderable things
 */
function getNextOrder(collection) {
    if (collection.length < 1) {
        return 1;
    }
    return Math.max.apply(null, collection.map(function (i) { return i.order; })) + 1;
}
/**
 * After https://stackoverflow.com/questions/273789/is-there-a-version-of-javascripts-string-indexof-that-allows-for-regular-expr/274094#274094
 *
 * @param this Types the called context this to a string in which the search will be conducted
 * @param regex A regex or string to match
 * @param startpos A starting position from which the search will begin
 */
function regexIndexOf(regex, startpos) {
    if (startpos === void 0) { startpos = 0; }
    var indexOf = this.substring(startpos).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos)) : indexOf;
}
/**
 * Gets an attribute value from an html string block
 *
 * @param html HTML to search
 * @param attrName The name of the attribute to find
 */
function getAttrValueFromString(html, attrName) {
    var reg = new RegExp(attrName + "=\"([^\"]*?)\"", "i");
    var match = reg.exec(html);
    return match.length > 0 ? match[1] : null;
}
/**
 * Finds bounded blocks of markup bounded by divs, ensuring to match the ending div even with nested divs in the interstitial markup
 *
 * @param html HTML to search
 * @param boundaryStartPattern The starting pattern to find, typically a div with attribute
 * @param collector A func to take the found block and provide a way to form it into a useful return that is added into the return array
 */
function getBoundedDivMarkup(html, boundaryStartPattern, collector) {
    var blocks = [];
    if (typeof html === "undefined" || html === null) {
        return blocks;
    }
    // remove some extra whitespace if present
    var cleanedHtml = html.replace(/[\t\r\n]/g, "");
    // find the first div
    var startIndex = regexIndexOf.call(cleanedHtml, boundaryStartPattern);
    if (startIndex < 0) {
        // we found no blocks in the supplied html
        return blocks;
    }
    // this loop finds each of the blocks
    while (startIndex > -1) {
        // we have one open div counting from the one found above using boundaryStartPattern so we need to ensure we find it's close
        var openCounter = 1;
        var searchIndex = startIndex + 1;
        var nextDivOpen = -1;
        var nextCloseDiv = -1;
        // this loop finds the </div> tag that matches the opening of the control
        while (true) {
            // find both the next opening and closing div tags from our current searching index
            nextDivOpen = regexIndexOf.call(cleanedHtml, /<div[^>]*>/i, searchIndex);
            nextCloseDiv = regexIndexOf.call(cleanedHtml, /<\/div>/i, searchIndex);
            if (nextDivOpen < 0) {
                // we have no more opening divs, just set this to simplify checks below
                nextDivOpen = cleanedHtml.length + 1;
            }
            // determine which we found first, then increment or decrement our counter
            // and set the location to begin searching again
            if (nextDivOpen < nextCloseDiv) {
                openCounter++;
                searchIndex = nextDivOpen + 1;
            }
            else if (nextCloseDiv < nextDivOpen) {
                openCounter--;
                searchIndex = nextCloseDiv + 1;
            }
            // once we have no open divs back to the level of the opening control div
            // meaning we have all of the markup we intended to find
            if (openCounter === 0) {
                // get the bounded markup, +6 is the size of the ending </div> tag
                var markup = cleanedHtml.substring(startIndex, nextCloseDiv + 6).trim();
                // save the control data we found to the array
                blocks.push(collector(markup));
                // get out of our while loop
                break;
            }
            if (openCounter > 1000 || openCounter < 0) {
                // this is an arbitrary cut-off but likely we will not have 1000 nested divs
                // something has gone wrong above and we are probably stuck in our while loop
                // let's get out of our while loop and not hang everything
                throw new Error("getBoundedDivMarkup exceeded depth parameters.");
            }
        }
        // get the start of the next control
        startIndex = regexIndexOf.call(cleanedHtml, boundaryStartPattern, nextCloseDiv);
    }
    return blocks;
}
/**
 * Normalizes the order value for all the sections, columns, and controls to be 1 based and stepped (1, 2, 3...)
 *
 * @param collection The collection to normalize
 */
function reindex(collection) {
    for (var i = 0; i < collection.length; i++) {
        collection[i].order = i + 1;
        if (collection[i].hasOwnProperty("columns")) {
            reindex(collection[i].columns);
        }
        else if (collection[i].hasOwnProperty("controls")) {
            reindex(collection[i].controls);
        }
    }
}
/**
 * Represents the data and methods associated with client side "modern" pages
 */
var ClientSidePage = /** @class */ (function (_super) {
    __extends(ClientSidePage, _super);
    /**
     * Creates a new instance of the ClientSidePage class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this web collection
     * @param commentsDisabled Indicates if comments are disabled, not valid until load is called
     */
    function ClientSidePage(file, sections, commentsDisabled) {
        if (sections === void 0) { sections = []; }
        if (commentsDisabled === void 0) { commentsDisabled = false; }
        var _this = _super.call(this, file) || this;
        _this.sections = sections;
        _this.commentsDisabled = commentsDisabled;
        return _this;
    }
    /**
     * Creates a new blank page within the supplied library
     *
     * @param library The library in which to create the page
     * @param pageName Filename of the page, such as "page.aspx"
     * @param title The display title of the page
     * @param pageLayoutType Layout type of the page to use
     */
    ClientSidePage.create = function (library, pageName, title, pageLayoutType) {
        if (pageLayoutType === void 0) { pageLayoutType = "Article"; }
        // see if file exists, if not create it
        return library.rootFolder.files.select("Name").filter("Name eq '" + pageName + "'").get().then(function (fs) {
            if (fs.length > 0) {
                throw new Error("A file with the name '" + pageName + "' already exists in the library '" + library.toUrl() + "'.");
            }
            // get our server relative path
            return library.rootFolder.select("ServerRelativePath").get().then(function (path) {
                var pageServerRelPath = util_1.Util.combinePaths("/", path.ServerRelativePath.DecodedUrl, pageName);
                // add the template file
                return library.rootFolder.files.addTemplateFile(pageServerRelPath, files_1.TemplateFileType.ClientSidePage).then(function (far) {
                    // get the item associated with the file
                    return far.file.getItem().then(function (i) {
                        // update the item to have the correct values to create the client side page
                        return i.update({
                            BannerImageUrl: {
                                Url: "/_layouts/15/images/sitepagethumbnail.png",
                            },
                            CanvasContent1: "",
                            ClientSideApplicationId: "b6917cb1-93a0-4b97-a84d-7cf49975d4ec",
                            ContentTypeId: "0x0101009D1CB255DA76424F860D91F20E6C4118",
                            PageLayoutType: pageLayoutType,
                            PromotedState: 0 /* NotPromoted */,
                            Title: title,
                        }).then(function (iar) { return new ClientSidePage(iar.item.file, iar.item.CommentsDisabled); });
                    });
                });
            });
        });
    };
    /**
     * Creates a new ClientSidePage instance from the provided html content string
     *
     * @param html HTML markup representing the page
     */
    ClientSidePage.fromFile = function (file) {
        var page = new ClientSidePage(file);
        return page.load().then(function (_) { return page; });
    };
    /**
     * Converts a json object to an escaped string appropriate for use in attributes when storing client-side controls
     *
     * @param json The json object to encode into a string
     */
    ClientSidePage.jsonToEscapedString = function (json) {
        return JSON.stringify(json)
            .replace(/"/g, "&quot;")
            .replace(/:/g, "&#58;")
            .replace(/{/g, "&#123;")
            .replace(/}/g, "&#125;");
    };
    /**
     * Converts an escaped string from a client-side control attribute to a json object
     *
     * @param escapedString
     */
    ClientSidePage.escapedStringToJson = function (escapedString) {
        return JSON.parse(escapedString
            .replace(/&quot;/g, "\"")
            .replace(/&#58;/g, ":")
            .replace(/&#123;/g, "{")
            .replace(/&#125;/g, "}"));
    };
    /**
     * Add a section to this page
     */
    ClientSidePage.prototype.addSection = function () {
        var section = new CanvasSection(this, getNextOrder(this.sections));
        this.sections.push(section);
        return section;
    };
    /**
     * Converts this page's content to html markup
     */
    ClientSidePage.prototype.toHtml = function () {
        // trigger reindex of the entire tree
        reindex(this.sections);
        var html = [];
        html.push("<div>");
        for (var i = 0; i < this.sections.length; i++) {
            html.push(this.sections[i].toHtml());
        }
        html.push("</div>");
        return html.join("");
    };
    /**
     * Loads this page instance's content from the supplied html
     *
     * @param html html string representing the page's content
     */
    ClientSidePage.prototype.fromHtml = function (html) {
        var _this = this;
        // reset sections
        this.sections = [];
        // gather our controls from the supplied html
        getBoundedDivMarkup(html, /<div\b[^>]*data-sp-canvascontrol[^>]*?>/i, function (markup) {
            // get the control type
            var ct = /controlType&quot;&#58;(\d*?),/i.exec(markup);
            // if no control type is present this is a column which we give type 0 to let us process it
            var controlType = ct == null || ct.length < 2 ? 0 : parseInt(ct[1], 10);
            var control = null;
            switch (controlType) {
                case 0:
                    // empty canvas column
                    control = new CanvasColumn(null, 0);
                    control.fromHtml(markup);
                    _this.mergeColumnToTree(control);
                    break;
                case 3:
                    // client side webpart
                    control = new ClientSideWebpart("");
                    control.fromHtml(markup);
                    _this.mergeControlToTree(control);
                    break;
                case 4:
                    // client side text
                    control = new ClientSideText();
                    control.fromHtml(markup);
                    _this.mergeControlToTree(control);
                    break;
            }
        });
        reindex(this.sections);
        return this;
    };
    /**
     * Loads this page's content from the server
     */
    ClientSidePage.prototype.load = function () {
        var _this = this;
        return this.getItem("CanvasContent1", "CommentsDisabled").then(function (item) {
            _this.fromHtml(item.CanvasContent1);
            _this.commentsDisabled = item.CommentsDisabled;
        });
    };
    /**
     * Persists the content changes (sections, columns, and controls)
     */
    ClientSidePage.prototype.save = function () {
        return this.updateProperties({ CanvasContent1: this.toHtml() });
    };
    /**
     * Enables comments on this page
     */
    ClientSidePage.prototype.enableComments = function () {
        var _this = this;
        return this.setCommentsOn(true).then(function (r) {
            _this.commentsDisabled = false;
            return r;
        });
    };
    /**
     * Disables comments on this page
     */
    ClientSidePage.prototype.disableComments = function () {
        var _this = this;
        return this.setCommentsOn(false).then(function (r) {
            _this.commentsDisabled = true;
            return r;
        });
    };
    /**
     * Finds a control by the specified instance id
     *
     * @param id Instance id of the control to find
     */
    ClientSidePage.prototype.findControlById = function (id) {
        return this.findControl(function (c) { return c.id === id; });
    };
    /**
     * Finds a control within this page's control tree using the supplied predicate
     *
     * @param predicate Takes a control and returns true or false, if true that control is returned by findControl
     */
    ClientSidePage.prototype.findControl = function (predicate) {
        // check all sections
        for (var i = 0; i < this.sections.length; i++) {
            // check all columns
            for (var j = 0; j < this.sections[i].columns.length; j++) {
                // check all controls
                for (var k = 0; k < this.sections[i].columns[j].controls.length; k++) {
                    // check to see if the predicate likes this control
                    if (predicate(this.sections[i].columns[j].controls[k])) {
                        return this.sections[i].columns[j].controls[k];
                    }
                }
            }
        }
        // we found nothing so give nothing back
        return null;
    };
    /**
     * Sets the comments flag for a page
     *
     * @param on If true comments are enabled, false they are disabled
     */
    ClientSidePage.prototype.setCommentsOn = function (on) {
        return this.getItem().then(function (i) {
            var updater = new items_1.Item(i, "SetCommentsDisabled(" + !on + ")");
            return updater.update({});
        });
    };
    /**
     * Merges the control into the tree of sections and columns for this page
     *
     * @param control The control to merge
     */
    ClientSidePage.prototype.mergeControlToTree = function (control) {
        var section = null;
        var column = null;
        var sections = this.sections.filter(function (s) { return s.order === control.controlData.position.zoneIndex; });
        if (sections.length < 1) {
            section = new CanvasSection(this, control.controlData.position.zoneIndex);
            this.sections.push(section);
        }
        else {
            section = sections[0];
        }
        var columns = section.columns.filter(function (c) { return c.order === control.controlData.position.sectionIndex; });
        if (columns.length < 1) {
            column = new CanvasColumn(section, control.controlData.position.sectionIndex, control.controlData.position.sectionFactor);
            section.columns.push(column);
        }
        else {
            column = columns[0];
        }
        control.column = column;
        column.addControl(control);
    };
    /**
     * Merges the supplied column into the tree
     *
     * @param column Column to merge
     * @param position The position data for the column
     */
    ClientSidePage.prototype.mergeColumnToTree = function (column) {
        var section = null;
        var sections = this.sections.filter(function (s) { return s.order === column.controlData.position.zoneIndex; });
        if (sections.length < 1) {
            section = new CanvasSection(this, column.controlData.position.zoneIndex);
            this.sections.push(section);
        }
        else {
            section = sections[0];
        }
        column.section = section;
        section.columns.push(column);
    };
    /**
     * Updates the properties of the underlying ListItem associated with this ClientSidePage
     *
     * @param properties Set of properties to update
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    ClientSidePage.prototype.updateProperties = function (properties, eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return this.getItem().then(function (i) { return i.update(properties, eTag); });
    };
    return ClientSidePage;
}(files_1.File));
exports.ClientSidePage = ClientSidePage;
var CanvasSection = /** @class */ (function () {
    function CanvasSection(page, order, columns) {
        if (columns === void 0) { columns = []; }
        this.page = page;
        this.order = order;
        this.columns = columns;
    }
    Object.defineProperty(CanvasSection.prototype, "defaultColumn", {
        /**
         * Default column (this.columns[0]) for this section
         */
        get: function () {
            if (this.columns.length < 1) {
                this.addColumn(12);
            }
            return this.columns[0];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a new column to this section
     */
    CanvasSection.prototype.addColumn = function (factor) {
        var column = new CanvasColumn(this, getNextOrder(this.columns), factor);
        this.columns.push(column);
        return column;
    };
    /**
     * Adds a control to the default column for this section
     *
     * @param control Control to add to the default column
     */
    CanvasSection.prototype.addControl = function (control) {
        this.defaultColumn.addControl(control);
        return this;
    };
    CanvasSection.prototype.toHtml = function () {
        var html = [];
        for (var i = 0; i < this.columns.length; i++) {
            html.push(this.columns[i].toHtml());
        }
        return html.join("");
    };
    return CanvasSection;
}());
exports.CanvasSection = CanvasSection;
var CanvasControl = /** @class */ (function () {
    function CanvasControl(controlType, dataVersion, column, order, id, controlData) {
        if (column === void 0) { column = null; }
        if (order === void 0) { order = 1; }
        if (id === void 0) { id = util_1.Util.getGUID(); }
        if (controlData === void 0) { controlData = null; }
        this.controlType = controlType;
        this.dataVersion = dataVersion;
        this.column = column;
        this.order = order;
        this.id = id;
        this.controlData = controlData;
    }
    Object.defineProperty(CanvasControl.prototype, "jsonData", {
        /**
         * Value of the control's "data-sp-controldata" attribute
         */
        get: function () {
            return ClientSidePage.jsonToEscapedString(this.getControlData());
        },
        enumerable: true,
        configurable: true
    });
    CanvasControl.prototype.fromHtml = function (html) {
        this.controlData = ClientSidePage.escapedStringToJson(getAttrValueFromString(html, "data-sp-controldata"));
        this.dataVersion = getAttrValueFromString(html, "data-sp-canvasdataversion");
        this.controlType = this.controlData.controlType;
        this.id = this.controlData.id;
    };
    return CanvasControl;
}());
exports.CanvasControl = CanvasControl;
var CanvasColumn = /** @class */ (function (_super) {
    __extends(CanvasColumn, _super);
    function CanvasColumn(section, order, factor, controls, dataVersion) {
        if (factor === void 0) { factor = 12; }
        if (controls === void 0) { controls = []; }
        if (dataVersion === void 0) { dataVersion = "1.0"; }
        var _this = _super.call(this, 0, dataVersion) || this;
        _this.section = section;
        _this.order = order;
        _this.factor = factor;
        _this.controls = controls;
        return _this;
    }
    CanvasColumn.prototype.addControl = function (control) {
        control.column = this;
        this.controls.push(control);
        return this;
    };
    CanvasColumn.prototype.getControl = function (index) {
        return this.controls[index];
    };
    CanvasColumn.prototype.toHtml = function () {
        var html = [];
        if (this.controls.length < 1) {
            html.push("<div data-sp-canvascontrol=\"\" data-sp-canvasdataversion=\"" + this.dataVersion + "\" data-sp-controldata=\"" + this.jsonData + "\"></div>");
        }
        else {
            for (var i = 0; i < this.controls.length; i++) {
                html.push(this.controls[i].toHtml(i + 1));
            }
        }
        return html.join("");
    };
    CanvasColumn.prototype.fromHtml = function (html) {
        _super.prototype.fromHtml.call(this, html);
        this.controlData = ClientSidePage.escapedStringToJson(getAttrValueFromString(html, "data-sp-controldata"));
        this.factor = this.controlData.position.sectionFactor;
        this.order = this.controlData.position.sectionIndex;
    };
    CanvasColumn.prototype.getControlData = function () {
        return {
            displayMode: 2,
            position: {
                sectionFactor: this.factor,
                sectionIndex: this.order,
                zoneIndex: this.section.order,
            },
        };
    };
    return CanvasColumn;
}(CanvasControl));
exports.CanvasColumn = CanvasColumn;
var ClientSideText = /** @class */ (function (_super) {
    __extends(ClientSideText, _super);
    function ClientSideText(text) {
        if (text === void 0) { text = ""; }
        var _this = _super.call(this, 4, "1.0") || this;
        _this.text = text;
        return _this;
    }
    Object.defineProperty(ClientSideText.prototype, "text", {
        /**
         * The text markup of this control
         */
        get: function () {
            return this._text;
        },
        set: function (text) {
            if (!text.startsWith("<p>")) {
                text = "<p>" + text + "</p>";
            }
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    ClientSideText.prototype.getControlData = function () {
        return {
            controlType: this.controlType,
            editorType: "CKEditor",
            id: this.id,
            position: {
                controlIndex: this.order,
                sectionFactor: this.column.factor,
                sectionIndex: this.column.order,
                zoneIndex: this.column.section.order,
            },
        };
    };
    ClientSideText.prototype.toHtml = function (index) {
        // set our order to the value passed in
        this.order = index;
        var html = [];
        html.push("<div data-sp-canvascontrol=\"\" data-sp-canvasdataversion=\"" + this.dataVersion + "\" data-sp-controldata=\"" + this.jsonData + "\">");
        html.push("<div data-sp-rte=\"\">");
        html.push("" + this.text);
        html.push("</div>");
        html.push("</div>");
        return html.join("");
    };
    ClientSideText.prototype.fromHtml = function (html) {
        _super.prototype.fromHtml.call(this, html);
        var match = /<div[^>]*data-sp-rte[^>]*>(.*?)<\/div>$/i.exec(html);
        this.text = match.length > 1 ? match[1] : "";
    };
    return ClientSideText;
}(CanvasControl));
exports.ClientSideText = ClientSideText;
var ClientSideWebpart = /** @class */ (function (_super) {
    __extends(ClientSideWebpart, _super);
    function ClientSideWebpart(title, description, propertieJson, webPartId, htmlProperties, serverProcessedContent) {
        if (description === void 0) { description = ""; }
        if (propertieJson === void 0) { propertieJson = {}; }
        if (webPartId === void 0) { webPartId = ""; }
        if (htmlProperties === void 0) { htmlProperties = ""; }
        if (serverProcessedContent === void 0) { serverProcessedContent = null; }
        var _this = _super.call(this, 3, "1.0") || this;
        _this.title = title;
        _this.description = description;
        _this.propertieJson = propertieJson;
        _this.webPartId = webPartId;
        _this.htmlProperties = htmlProperties;
        _this.serverProcessedContent = serverProcessedContent;
        return _this;
    }
    ClientSideWebpart.fromComponentDef = function (definition) {
        var part = new ClientSideWebpart("");
        part.import(definition);
        return part;
    };
    ClientSideWebpart.prototype.import = function (component) {
        this.webPartId = component.Id.replace(/^\{|\}$/g, "");
        var manifest = JSON.parse(component.Manifest);
        this.title = manifest.preconfiguredEntries[0].title.default;
        this.description = manifest.preconfiguredEntries[0].description.default;
        this.propertieJson = this.parseJsonProperties(manifest.preconfiguredEntries[0].properties);
    };
    ClientSideWebpart.prototype.setProperties = function (properties) {
        this.propertieJson = properties;
        return this;
    };
    ClientSideWebpart.prototype.getProperties = function () {
        return this.propertieJson;
    };
    ClientSideWebpart.prototype.toHtml = function (index) {
        // set our order to the value passed in
        this.order = index;
        // will form the value of the data-sp-webpartdata attribute
        var data = {
            dataVersion: this.dataVersion,
            description: this.description,
            id: this.webPartId,
            instanceId: this.id,
            properties: this.propertieJson,
            title: this.title,
        };
        var html = [];
        html.push("<div data-sp-canvascontrol=\"\" data-sp-canvasdataversion=\"" + this.dataVersion + "\" data-sp-controldata=\"" + this.jsonData + "\">");
        html.push("<div data-sp-webpart=\"\" data-sp-canvasdataversion=\"" + this.dataVersion + "\" data-sp-webpartdata=\"" + ClientSidePage.jsonToEscapedString(data) + "\">");
        html.push("<div data-sp-componentid>");
        html.push(this.webPartId);
        html.push("</div>");
        html.push("<div data-sp-htmlproperties=\"\">");
        html.push(this.renderHtmlProperties());
        html.push("</div>");
        html.push("</div>");
        html.push("</div>");
        return html.join("");
    };
    ClientSideWebpart.prototype.fromHtml = function (html) {
        _super.prototype.fromHtml.call(this, html);
        var webPartData = ClientSidePage.escapedStringToJson(getAttrValueFromString(html, "data-sp-webpartdata"));
        this.title = webPartData.title;
        this.description = webPartData.description;
        this.webPartId = webPartData.id;
        this.setProperties(webPartData.properties);
        if (typeof webPartData.serverProcessedContent !== "undefined") {
            this.serverProcessedContent = webPartData.serverProcessedContent;
        }
        // get our html properties
        var htmlProps = getBoundedDivMarkup(html, /<div\b[^>]*data-sp-htmlproperties[^>]*?>/i, function (markup) {
            return markup.replace(/^<div\b[^>]*data-sp-htmlproperties[^>]*?>/i, "").replace(/<\/div>$/i, "");
        });
        this.htmlProperties = htmlProps.length > 0 ? htmlProps[0] : "";
    };
    ClientSideWebpart.prototype.getControlData = function () {
        return {
            controlType: this.controlType,
            id: this.id,
            position: {
                controlIndex: this.order,
                sectionFactor: this.column.factor,
                sectionIndex: this.column.order,
                zoneIndex: this.column.section.order,
            },
            webPartId: this.webPartId,
        };
    };
    ClientSideWebpart.prototype.renderHtmlProperties = function () {
        var html = [];
        if (typeof this.serverProcessedContent === "undefined" || this.serverProcessedContent === null) {
            html.push(this.htmlProperties);
        }
        else if (typeof this.serverProcessedContent !== "undefined") {
            if (typeof this.serverProcessedContent.searchablePlainTexts !== "undefined") {
                for (var i = 0; i < this.serverProcessedContent.searchablePlainTexts.length; i++) {
                    var prop = this.serverProcessedContent.searchablePlainTexts[i];
                    html.push("<div data-sp-prop-name=\"" + prop.Name + "\" data-sp-searchableplaintext=\"true\">");
                    html.push(prop.Value);
                    html.push("</div>");
                }
            }
            if (typeof this.serverProcessedContent.imageSources !== "undefined") {
                for (var i = 0; i < this.serverProcessedContent.imageSources.length; i++) {
                    var prop = this.serverProcessedContent.imageSources[i];
                    html.push("<img data-sp-prop-name=\"" + prop.Name + "\" src=\"" + prop.Value + "\" />");
                }
            }
            if (typeof this.serverProcessedContent.links !== "undefined") {
                for (var i = 0; i < this.serverProcessedContent.links.length; i++) {
                    var prop = this.serverProcessedContent.links[i];
                    html.push("<a data-sp-prop-name=\"" + prop.Name + "\" href=\"" + prop.Value + "\"></a>");
                }
            }
        }
        return html.join("");
    };
    ClientSideWebpart.prototype.parseJsonProperties = function (props) {
        // If the web part has the serverProcessedContent property then keep this one as it might be needed as input to render the web part HTML later on
        if (typeof props.webPartData !== "undefined" && typeof props.webPartData.serverProcessedContent !== "undefined") {
            this.serverProcessedContent = props.webPartData.serverProcessedContent;
        }
        else if (typeof props.serverProcessedContent !== "undefined") {
            this.serverProcessedContent = props.serverProcessedContent;
        }
        else {
            this.serverProcessedContent = null;
        }
        if (typeof props.webPartData !== "undefined" && typeof props.webPartData.properties !== "undefined") {
            return props.webPartData.properties;
        }
        else if (typeof props.properties !== "undefined") {
            return props.properties;
        }
        else {
            return props;
        }
    };
    return ClientSideWebpart;
}(CanvasControl));
exports.ClientSideWebpart = ClientSideWebpart;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var util_1 = __webpack_require__(0);
/**
 * Exposes social following methods
 */
var SocialQuery = /** @class */ (function (_super) {
    __extends(SocialQuery, _super);
    /**
     * Creates a new instance of the SocialQuery class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this social query
     */
    function SocialQuery(baseUrl, path) {
        if (path === void 0) { path = "_api/social.following"; }
        return _super.call(this, baseUrl, path) || this;
    }
    Object.defineProperty(SocialQuery.prototype, "my", {
        get: function () {
            return new MySocialQuery(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a URI to a site that lists the current user's followed sites.
     */
    SocialQuery.prototype.getFollowedSitesUri = function () {
        return this.clone(SocialQuery, "FollowedSitesUri").get().then(function (r) {
            return r.FollowedSitesUri || r;
        });
    };
    /**
     * Gets a URI to a site that lists the current user's followed documents.
     */
    SocialQuery.prototype.getFollowedDocumentsUri = function () {
        return this.clone(SocialQuery, "FollowedDocumentsUri").get().then(function (r) {
            return r.FollowedDocumentsUri || r;
        });
    };
    /**
     * Makes the current user start following a user, document, site, or tag
     *
     * @param actorInfo The actor to start following
     */
    SocialQuery.prototype.follow = function (actorInfo) {
        return this.clone(SocialQuery, "follow").postCore({ body: this.createSocialActorInfoRequestBody(actorInfo) });
    };
    /**
     * Indicates whether the current user is following a specified user, document, site, or tag
     *
     * @param actorInfo The actor to find the following status for
     */
    SocialQuery.prototype.isFollowed = function (actorInfo) {
        return this.clone(SocialQuery, "isfollowed").postCore({ body: this.createSocialActorInfoRequestBody(actorInfo) });
    };
    /**
     * Makes the current user stop following a user, document, site, or tag
     *
     * @param actorInfo The actor to stop following
     */
    SocialQuery.prototype.stopFollowing = function (actorInfo) {
        return this.clone(SocialQuery, "stopfollowing").postCore({ body: this.createSocialActorInfoRequestBody(actorInfo) });
    };
    /**
     * Creates SocialActorInfo request body
     *
     * @param actorInfo The actor to create request body
     */
    SocialQuery.prototype.createSocialActorInfoRequestBody = function (actorInfo) {
        return JSON.stringify({
            "actor": util_1.Util.extend({
                Id: null,
                "__metadata": { "type": "SP.Social.SocialActorInfo" },
            }, actorInfo),
        });
    };
    return SocialQuery;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.SocialQuery = SocialQuery;
var MySocialQuery = /** @class */ (function (_super) {
    __extends(MySocialQuery, _super);
    /**
     * Creates a new instance of the SocialQuery class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this social query
     */
    function MySocialQuery(baseUrl, path) {
        if (path === void 0) { path = "my"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets users, documents, sites, and tags that the current user is following.
     *
     * @param types Bitwise set of SocialActorTypes to retrieve
     */
    MySocialQuery.prototype.followed = function (types) {
        return this.clone(MySocialQuery, "followed(types=" + types + ")").get().then(function (r) {
            return r.hasOwnProperty("Followed") ? r.Followed.results : r;
        });
    };
    /**
     * Gets the count of users, documents, sites, and tags that the current user is following.
     *
     * @param types Bitwise set of SocialActorTypes to retrieve
     */
    MySocialQuery.prototype.followedCount = function (types) {
        return this.clone(MySocialQuery, "followedcount(types=" + types + ")").get().then(function (r) {
            return r.FollowedCount || r;
        });
    };
    /**
     * Gets the users who are following the current user.
     */
    MySocialQuery.prototype.followers = function () {
        return this.clone(MySocialQuery, "followers").get().then(function (r) {
            return r.hasOwnProperty("Followers") ? r.Followers.results : r;
        });
    };
    /**
     * Gets users who the current user might want to follow.
     */
    MySocialQuery.prototype.suggestions = function () {
        return this.clone(MySocialQuery, "suggestions").get().then(function (r) {
            return r.hasOwnProperty("Suggestions") ? r.Suggestions.results : r;
        });
    };
    return MySocialQuery;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.MySocialQuery = MySocialQuery;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var util_1 = __webpack_require__(0);
var files_1 = __webpack_require__(8);
var odata_1 = __webpack_require__(3);
/**
 * Allows for calling of the static SP.Utilities.Utility methods by supplying the method name
 */
var UtilityMethod = /** @class */ (function (_super) {
    __extends(UtilityMethod, _super);
    /**
     * Creates a new instance of the Utility method class
     *
     * @param baseUrl The parent url provider
     * @param methodName The static method name to call on the utility class
     */
    function UtilityMethod(baseUrl, methodName) {
        return _super.call(this, UtilityMethod.getBaseUrl(baseUrl), "_api/SP.Utilities.Utility." + methodName) || this;
    }
    UtilityMethod.getBaseUrl = function (candidate) {
        if (typeof candidate === "string") {
            return candidate;
        }
        var c = candidate;
        var url = c.toUrl();
        var index = url.indexOf("_api/");
        if (index < 0) {
            return url;
        }
        return url.substr(0, index);
    };
    UtilityMethod.prototype.excute = function (props) {
        return this.postAsCore({
            body: JSON.stringify(props),
        });
    };
    /**
     * Sends an email based on the supplied properties
     *
     * @param props The properties of the email to send
     */
    UtilityMethod.prototype.sendEmail = function (props) {
        var params = {
            properties: {
                Body: props.Body,
                From: props.From,
                Subject: props.Subject,
                "__metadata": { "type": "SP.Utilities.EmailProperties" },
            },
        };
        if (props.To && props.To.length > 0) {
            params.properties = util_1.Util.extend(params.properties, {
                To: { results: props.To },
            });
        }
        if (props.CC && props.CC.length > 0) {
            params.properties = util_1.Util.extend(params.properties, {
                CC: { results: props.CC },
            });
        }
        if (props.BCC && props.BCC.length > 0) {
            params.properties = util_1.Util.extend(params.properties, {
                BCC: { results: props.BCC },
            });
        }
        if (props.AdditionalHeaders) {
            params.properties = util_1.Util.extend(params.properties, {
                AdditionalHeaders: props.AdditionalHeaders,
            });
        }
        return this.clone(UtilityMethod, "SendEmail", true).excute(params);
    };
    UtilityMethod.prototype.getCurrentUserEmailAddresses = function () {
        return this.clone(UtilityMethod, "GetCurrentUserEmailAddresses", true).excute({});
    };
    UtilityMethod.prototype.resolvePrincipal = function (input, scopes, sources, inputIsEmailOnly, addToUserInfoList, matchUserInfoList) {
        if (matchUserInfoList === void 0) { matchUserInfoList = false; }
        var params = {
            addToUserInfoList: addToUserInfoList,
            input: input,
            inputIsEmailOnly: inputIsEmailOnly,
            matchUserInfoList: matchUserInfoList,
            scopes: scopes,
            sources: sources,
        };
        return this.clone(UtilityMethod, "ResolvePrincipalInCurrentContext", true).excute(params);
    };
    UtilityMethod.prototype.searchPrincipals = function (input, scopes, sources, groupName, maxCount) {
        var params = {
            groupName: groupName,
            input: input,
            maxCount: maxCount,
            scopes: scopes,
            sources: sources,
        };
        return this.clone(UtilityMethod, "SearchPrincipalsUsingContextWeb", true).excute(params);
    };
    UtilityMethod.prototype.createEmailBodyForInvitation = function (pageAddress) {
        var params = {
            pageAddress: pageAddress,
        };
        return this.clone(UtilityMethod, "CreateEmailBodyForInvitation", true).excute(params);
    };
    UtilityMethod.prototype.expandGroupsToPrincipals = function (inputs, maxCount) {
        if (maxCount === void 0) { maxCount = 30; }
        var params = {
            inputs: inputs,
            maxCount: maxCount,
        };
        return this.clone(UtilityMethod, "ExpandGroupsToPrincipals", true).excute(params);
    };
    UtilityMethod.prototype.createWikiPage = function (info) {
        return this.clone(UtilityMethod, "CreateWikiPageInContextWeb", true).excute({
            parameters: info,
        }).then(function (r) {
            return {
                data: r,
                file: new files_1.File(odata_1.spExtractODataId(r)),
            };
        });
    };
    return UtilityMethod;
}(sharepointqueryable_1.SharePointQueryable));
exports.UtilityMethod = UtilityMethod;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var pnplibconfig_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(10);
// import { APIUrlException } from "../utils/exceptions";
var GraphHttpClient = /** @class */ (function () {
    function GraphHttpClient() {
        this._impl = pnplibconfig_1.RuntimeConfig.graphFetchClientFactory();
    }
    GraphHttpClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        var headers = new Headers();
        // first we add the global headers so they can be overwritten by any passed in locally to this call
        utils_1.mergeHeaders(headers, pnplibconfig_1.RuntimeConfig.graphHeaders);
        // second we add the local options so we can overwrite the globals
        utils_1.mergeHeaders(headers, options.headers);
        var opts = util_1.Util.extend(options, { headers: headers });
        // TODO: we could process auth here
        return this.fetchRaw(url, opts);
    };
    GraphHttpClient.prototype.fetchRaw = function (url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // here we need to normalize the headers
        var rawHeaders = new Headers();
        utils_1.mergeHeaders(rawHeaders, options.headers);
        options = util_1.Util.extend(options, { headers: rawHeaders });
        var retry = function (ctx) {
            _this._impl.fetch(url, {}, options).then(function (response) { return ctx.resolve(response); }).catch(function (response) {
                // Check if request was throttled - http status code 429
                // Check if request failed due to server unavailable - http status code 503
                if (response.status !== 429 && response.status !== 503) {
                    ctx.reject(response);
                }
                // grab our current delay
                var delay = ctx.delay;
                // Increment our counters.
                ctx.delay *= 2;
                ctx.attempts++;
                // If we have exceeded the retry count, reject.
                if (ctx.retryCount <= ctx.attempts) {
                    ctx.reject(response);
                }
                // Set our retry timeout for {delay} milliseconds.
                setTimeout(util_1.Util.getCtxCallback(_this, retry, ctx), delay);
            });
        };
        return new Promise(function (resolve, reject) {
            var retryContext = {
                attempts: 0,
                delay: 100,
                reject: reject,
                resolve: resolve,
                retryCount: 7,
            };
            retry.call(_this, retryContext);
        });
    };
    GraphHttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_1.Util.extend(options, { method: "GET" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_1.Util.extend(options, { method: "POST" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.patch = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_1.Util.extend(options, { method: "PATCH" });
        return this.fetch(url, opts);
    };
    GraphHttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_1.Util.extend(options, { method: "DELETE" });
        return this.fetch(url, opts);
    };
    return GraphHttpClient;
}());
exports.GraphHttpClient = GraphHttpClient;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var storage = __webpack_require__(13);
var exceptions_1 = __webpack_require__(2);
/**
 * A caching provider which can wrap other non-caching providers
 *
 */
var CachingConfigurationProvider = /** @class */ (function () {
    /**
     * Creates a new caching configuration provider
     * @constructor
     * @param {IConfigurationProvider} wrappedProvider Provider which will be used to fetch the configuration
     * @param {string} cacheKey Key that will be used to store cached items to the cache
     * @param {IPnPClientStore} cacheStore OPTIONAL storage, which will be used to store cached settings.
     */
    function CachingConfigurationProvider(wrappedProvider, cacheKey, cacheStore) {
        this.wrappedProvider = wrappedProvider;
        this.store = (cacheStore) ? cacheStore : this.selectPnPCache();
        this.cacheKey = "_configcache_" + cacheKey;
    }
    /**
     * Gets the wrapped configuration providers
     *
     * @return {IConfigurationProvider} Wrapped configuration provider
     */
    CachingConfigurationProvider.prototype.getWrappedProvider = function () {
        return this.wrappedProvider;
    };
    /**
     * Loads the configuration values either from the cache or from the wrapped provider
     *
     * @return {Promise<TypedHash<string>>} Promise of loaded configuration values
     */
    CachingConfigurationProvider.prototype.getConfiguration = function () {
        var _this = this;
        // Cache not available, pass control to  the wrapped provider
        if ((!this.store) || (!this.store.enabled)) {
            return this.wrappedProvider.getConfiguration();
        }
        // Value is found in cache, return it directly
        var cachedConfig = this.store.get(this.cacheKey);
        if (cachedConfig) {
            return new Promise(function (resolve) {
                resolve(cachedConfig);
            });
        }
        // Get and cache value from the wrapped provider
        var providerPromise = this.wrappedProvider.getConfiguration();
        providerPromise.then(function (providedConfig) {
            _this.store.put(_this.cacheKey, providedConfig);
        });
        return providerPromise;
    };
    CachingConfigurationProvider.prototype.selectPnPCache = function () {
        var pnpCache = new storage.PnPClientStorage();
        if ((pnpCache.local) && (pnpCache.local.enabled)) {
            return pnpCache.local;
        }
        if ((pnpCache.session) && (pnpCache.session.enabled)) {
            return pnpCache.session;
        }
        throw new exceptions_1.NoCacheAvailableException();
    };
    return CachingConfigurationProvider;
}());
exports.default = CachingConfigurationProvider;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_47__;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var collections_1 = __webpack_require__(9);
/**
 * Class used to manage the current application settings
 *
 */
var Settings = /** @class */ (function () {
    /**
     * Creates a new instance of the settings class
     *
     * @constructor
     */
    function Settings() {
        this._settings = new collections_1.Dictionary();
    }
    /**
     * Adds a new single setting, or overwrites a previous setting with the same key
     *
     * @param {string} key The key used to store this setting
     * @param {string} value The setting value to store
     */
    Settings.prototype.add = function (key, value) {
        this._settings.add(key, value);
    };
    /**
     * Adds a JSON value to the collection as a string, you must use getJSON to rehydrate the object when read
     *
     * @param {string} key The key used to store this setting
     * @param {any} value The setting value to store
     */
    Settings.prototype.addJSON = function (key, value) {
        this._settings.add(key, JSON.stringify(value));
    };
    /**
     * Applies the supplied hash to the setting collection overwriting any existing value, or created new values
     *
     * @param {TypedHash<any>} hash The set of values to add
     */
    Settings.prototype.apply = function (hash) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this._settings.merge(hash);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Loads configuration settings into the collection from the supplied provider and returns a Promise
     *
     * @param {IConfigurationProvider} provider The provider from which we will load the settings
     */
    Settings.prototype.load = function (provider) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            provider.getConfiguration().then(function (value) {
                _this._settings.merge(value);
                resolve();
            }).catch(function (reason) {
                reject(reason);
            });
        });
    };
    /**
     * Gets a value from the configuration
     *
     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
     * @return {string} string value from the configuration
     */
    Settings.prototype.get = function (key) {
        return this._settings.get(key);
    };
    /**
     * Gets a JSON value, rehydrating the stored string to the original object
     *
     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
     * @return {any} object from the configuration
     */
    Settings.prototype.getJSON = function (key) {
        var o = this.get(key);
        if (typeof o === "undefined" || o === null) {
            return o;
        }
        return JSON.parse(o);
    };
    return Settings;
}());
exports.Settings = Settings;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var search_1 = __webpack_require__(32);
var searchsuggest_1 = __webpack_require__(34);
var site_1 = __webpack_require__(35);
var webs_1 = __webpack_require__(11);
var util_1 = __webpack_require__(0);
var userprofiles_1 = __webpack_require__(57);
var social_1 = __webpack_require__(42);
var navigation_1 = __webpack_require__(28);
var exceptions_1 = __webpack_require__(2);
var utilities_1 = __webpack_require__(43);
/**
 * Root of the SharePoint REST module
 */
var SPRest = /** @class */ (function () {
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    function SPRest(options, baseUrl) {
        if (options === void 0) { options = {}; }
        if (baseUrl === void 0) { baseUrl = ""; }
        this._options = options;
        this._baseUrl = baseUrl;
    }
    /**
     * Configures instance with additional options and baseUrl.
     * Provided configuration used by other objects in a chain
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    SPRest.prototype.configure = function (options, baseUrl) {
        if (baseUrl === void 0) { baseUrl = ""; }
        return new SPRest(options, baseUrl);
    };
    /**
     * Executes a search against this web context
     *
     * @param query The SearchQuery definition
     */
    SPRest.prototype.searchSuggest = function (query) {
        var finalQuery;
        if (typeof query === "string") {
            finalQuery = { querytext: query };
        }
        else {
            finalQuery = query;
        }
        return new searchsuggest_1.SearchSuggest(this._baseUrl).configure(this._options).execute(finalQuery);
    };
    /**
     * Executes a search against this web context
     *
     * @param query The SearchQuery definition
     */
    SPRest.prototype.search = function (query) {
        var finalQuery;
        if (typeof query === "string") {
            finalQuery = { Querytext: query };
        }
        else if (query instanceof search_1.SearchQueryBuilder) {
            finalQuery = query.toSearchQuery();
        }
        else {
            finalQuery = query;
        }
        return new search_1.Search(this._baseUrl).configure(this._options).execute(finalQuery);
    };
    Object.defineProperty(SPRest.prototype, "site", {
        /**
         * Begins a site collection scoped REST request
         *
         */
        get: function () {
            return new site_1.Site(this._baseUrl).configure(this._options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRest.prototype, "web", {
        /**
         * Begins a web scoped REST request
         *
         */
        get: function () {
            return new webs_1.Web(this._baseUrl).configure(this._options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRest.prototype, "profiles", {
        /**
         * Access to user profile methods
         */
        get: function () {
            return new userprofiles_1.UserProfileQuery(this._baseUrl).configure(this._options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRest.prototype, "social", {
        /**
         * Access to social methods
         */
        get: function () {
            return new social_1.SocialQuery(this._baseUrl).configure(this._options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPRest.prototype, "navigation", {
        /**
         * Access to the site collection level navigation service
         */
        get: function () {
            return new navigation_1.NavigationService();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new batch object for use with the SharePointQueryable.addToBatch method
     *
     */
    SPRest.prototype.createBatch = function () {
        return this.web.createBatch();
    };
    Object.defineProperty(SPRest.prototype, "utility", {
        /**
         * Static utilities methods from SP.Utilities.Utility
         */
        get: function () {
            return new utilities_1.UtilityMethod(this._baseUrl, "").configure(this._options);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Begins a cross-domain, host site scoped REST request, for use in add-in webs
     *
     * @param addInWebUrl The absolute url of the add-in web
     * @param hostWebUrl The absolute url of the host web
     */
    SPRest.prototype.crossDomainSite = function (addInWebUrl, hostWebUrl) {
        return this._cdImpl(site_1.Site, addInWebUrl, hostWebUrl, "site");
    };
    /**
     * Begins a cross-domain, host web scoped REST request, for use in add-in webs
     *
     * @param addInWebUrl The absolute url of the add-in web
     * @param hostWebUrl The absolute url of the host web
     */
    SPRest.prototype.crossDomainWeb = function (addInWebUrl, hostWebUrl) {
        return this._cdImpl(webs_1.Web, addInWebUrl, hostWebUrl, "web");
    };
    /**
     * Implements the creation of cross domain REST urls
     *
     * @param factory The constructor of the object to create Site | Web
     * @param addInWebUrl The absolute url of the add-in web
     * @param hostWebUrl The absolute url of the host web
     * @param urlPart String part to append to the url "site" | "web"
     */
    SPRest.prototype._cdImpl = function (factory, addInWebUrl, hostWebUrl, urlPart) {
        if (!util_1.Util.isUrlAbsolute(addInWebUrl)) {
            throw new exceptions_1.UrlException("The addInWebUrl parameter must be an absolute url.");
        }
        if (!util_1.Util.isUrlAbsolute(hostWebUrl)) {
            throw new exceptions_1.UrlException("The hostWebUrl parameter must be an absolute url.");
        }
        var url = util_1.Util.combinePaths(addInWebUrl, "_api/SP.AppContextSite(@target)");
        var instance = new factory(url, urlPart);
        instance.query.add("@target", "'" + encodeURIComponent(hostWebUrl) + "'");
        return instance.configure(this._options);
    };
    return SPRest;
}());
exports.SPRest = SPRest;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var collections_1 = __webpack_require__(9);
var util_1 = __webpack_require__(0);
var parsers_1 = __webpack_require__(7);
var pnplibconfig_1 = __webpack_require__(4);
var CachedDigest = /** @class */ (function () {
    function CachedDigest() {
    }
    return CachedDigest;
}());
exports.CachedDigest = CachedDigest;
// allows for the caching of digests across all HttpClient's which each have their own DigestCache wrapper.
var digests = new collections_1.Dictionary();
var DigestCache = /** @class */ (function () {
    function DigestCache(_httpClient, _digests) {
        if (_digests === void 0) { _digests = digests; }
        this._httpClient = _httpClient;
        this._digests = _digests;
    }
    DigestCache.prototype.getDigest = function (webUrl) {
        var _this = this;
        var cachedDigest = this._digests.get(webUrl);
        if (cachedDigest !== null) {
            var now = new Date();
            if (now < cachedDigest.expiration) {
                return Promise.resolve(cachedDigest.value);
            }
        }
        var url = util_1.Util.combinePaths(webUrl, "/_api/contextinfo");
        var headers = {
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json;odata=verbose;charset=utf-8",
        };
        return this._httpClient.fetchRaw(url, {
            cache: "no-cache",
            credentials: "same-origin",
            headers: util_1.Util.extend(headers, pnplibconfig_1.RuntimeConfig.spHeaders, true),
            method: "POST",
        }).then(function (response) {
            var parser = new parsers_1.ODataDefaultParser();
            return parser.parse(response).then(function (d) { return d.GetContextWebInformation; });
        }).then(function (data) {
            var newCachedDigest = new CachedDigest();
            newCachedDigest.value = data.FormDigestValue;
            var seconds = data.FormDigestTimeoutSeconds;
            var expiration = new Date();
            expiration.setTime(expiration.getTime() + 1000 * seconds);
            newCachedDigest.expiration = expiration;
            _this._digests.add(webUrl, newCachedDigest);
            return newCachedDigest.value;
        });
    };
    DigestCache.prototype.clear = function () {
        this._digests.clear();
    };
    return DigestCache;
}());
exports.DigestCache = DigestCache;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var parsers_1 = __webpack_require__(7);
/**
 * Describes a collection of Item objects
 *
 */
var AttachmentFiles = /** @class */ (function (_super) {
    __extends(AttachmentFiles, _super);
    /**
     * Creates a new instance of the AttachmentFiles class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this attachments collection
     */
    function AttachmentFiles(baseUrl, path) {
        if (path === void 0) { path = "AttachmentFiles"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a Attachment File by filename
     *
     * @param name The name of the file, including extension.
     */
    AttachmentFiles.prototype.getByName = function (name) {
        var f = new AttachmentFile(this);
        f.concat("('" + name + "')");
        return f;
    };
    /**
     * Adds a new attachment to the collection. Not supported for batching.
     *
     * @param name The name of the file, including extension.
     * @param content The Base64 file content.
     */
    AttachmentFiles.prototype.add = function (name, content) {
        var _this = this;
        return this.clone(AttachmentFiles, "add(FileName='" + name + "')", false).postCore({
            body: content,
        }).then(function (response) {
            return {
                data: response,
                file: _this.getByName(name),
            };
        });
    };
    /**
     * Adds multiple new attachment to the collection. Not supported for batching.
     *
     * @files name The collection of files to add
     */
    AttachmentFiles.prototype.addMultiple = function (files) {
        var _this = this;
        // add the files in series so we don't get update conflicts
        return files.reduce(function (chain, file) { return chain.then(function () { return _this.clone(AttachmentFiles, "add(FileName='" + file.name + "')", false).postCore({
            body: file.content,
        }); }); }, Promise.resolve());
    };
    /**
     * Delete multiple attachments from the collection. Not supported for batching.
     *
     * @files name The collection of files to delete
     */
    AttachmentFiles.prototype.deleteMultiple = function () {
        var _this = this;
        var files = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            files[_i] = arguments[_i];
        }
        return files.reduce(function (chain, file) { return chain.then(function () { return _this.getByName(file).delete(); }); }, Promise.resolve());
    };
    /**
     * Delete multiple attachments from the collection and sends it to recycle bin. Not supported for batching.
     *
     * @files name The collection of files to delete
     */
    AttachmentFiles.prototype.recycleMultiple = function () {
        var _this = this;
        var files = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            files[_i] = arguments[_i];
        }
        return files.reduce(function (chain, file) { return chain.then(function () { return _this.getByName(file).recycle(); }); }, Promise.resolve());
    };
    return AttachmentFiles;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.AttachmentFiles = AttachmentFiles;
/**
 * Describes a single attachment file instance
 *
 */
var AttachmentFile = /** @class */ (function (_super) {
    __extends(AttachmentFile, _super);
    function AttachmentFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the contents of the file as text
     *
     */
    AttachmentFile.prototype.getText = function () {
        return this.clone(AttachmentFile, "$value", false).get(new parsers_1.TextFileParser());
    };
    /**
     * Gets the contents of the file as a blob, does not work in Node.js
     *
     */
    AttachmentFile.prototype.getBlob = function () {
        return this.clone(AttachmentFile, "$value", false).get(new parsers_1.BlobFileParser());
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    AttachmentFile.prototype.getBuffer = function () {
        return this.clone(AttachmentFile, "$value", false).get(new parsers_1.BufferFileParser());
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    AttachmentFile.prototype.getJSON = function () {
        return this.clone(AttachmentFile, "$value", false).get(new parsers_1.JSONFileParser());
    };
    /**
     * Sets the content of a file. Not supported for batching
     *
     * @param content The value to set for the file contents
     */
    AttachmentFile.prototype.setContent = function (content) {
        var _this = this;
        return this.clone(AttachmentFile, "$value", false).postCore({
            body: content,
            headers: {
                "X-HTTP-Method": "PUT",
            },
        }).then(function (_) { return new AttachmentFile(_this); });
    };
    /**
     * Delete this attachment file
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    AttachmentFile.prototype.delete = function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return this.postCore({
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    /**
     * Delete this attachment file and send it to Recycle Bin
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    AttachmentFile.prototype.recycle = function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return this.clone(AttachmentFile, "recycleObject").postCore({
            headers: {
                "IF-Match": eTag,
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    return AttachmentFile;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.AttachmentFile = AttachmentFile;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var util_1 = __webpack_require__(0);
/**
 * Describes the views available in the current context
 *
 */
var Views = /** @class */ (function (_super) {
    __extends(Views, _super);
    /**
     * Creates a new instance of the Views class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this fields collection
     */
    function Views(baseUrl, path) {
        if (path === void 0) { path = "views"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a view by guid id
     *
     * @param id The GUID id of the view
     */
    Views.prototype.getById = function (id) {
        var v = new View(this);
        v.concat("('" + id + "')");
        return v;
    };
    /**
     * Gets a view by title (case-sensitive)
     *
     * @param title The case-sensitive title of the view
     */
    Views.prototype.getByTitle = function (title) {
        return new View(this, "getByTitle('" + title + "')");
    };
    /**
     * Adds a new view to the collection
     *
     * @param title The new views's title
     * @param personalView True if this is a personal view, otherwise false, default = false
     * @param additionalSettings Will be passed as part of the view creation body
     */
    Views.prototype.add = function (title, personalView, additionalSettings) {
        var _this = this;
        if (personalView === void 0) { personalView = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        var postBody = JSON.stringify(util_1.Util.extend({
            "PersonalView": personalView,
            "Title": title,
            "__metadata": { "type": "SP.View" },
        }, additionalSettings));
        return this.clone(Views, null).postAsCore({ body: postBody }).then(function (data) {
            return {
                data: data,
                view: _this.getById(data.Id),
            };
        });
    };
    return Views;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.Views = Views;
/**
 * Describes a single View instance
 *
 */
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(View.prototype, "fields", {
        get: function () {
            return new ViewFields(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates this view intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the view
     */
    View.prototype.update = function (properties) {
        var _this = this;
        var postBody = JSON.stringify(util_1.Util.extend({
            "__metadata": { "type": "SP.View" },
        }, properties));
        return this.postCore({
            body: postBody,
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (data) {
            return {
                data: data,
                view: _this,
            };
        });
    };
    /**
     * Delete this view
     *
     */
    View.prototype.delete = function () {
        return this.postCore({
            headers: {
                "X-HTTP-Method": "DELETE",
            },
        });
    };
    /**
     * Returns the list view as HTML.
     *
     */
    View.prototype.renderAsHtml = function () {
        return this.clone(sharepointqueryable_1.SharePointQueryable, "renderashtml").get();
    };
    return View;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.View = View;
var ViewFields = /** @class */ (function (_super) {
    __extends(ViewFields, _super);
    function ViewFields(baseUrl, path) {
        if (path === void 0) { path = "viewfields"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a value that specifies the XML schema that represents the collection.
     */
    ViewFields.prototype.getSchemaXml = function () {
        return this.clone(sharepointqueryable_1.SharePointQueryable, "schemaxml").get();
    };
    /**
     * Adds the field with the specified field internal name or display name to the collection.
     *
     * @param fieldTitleOrInternalName The case-sensitive internal name or display name of the field to add.
     */
    ViewFields.prototype.add = function (fieldTitleOrInternalName) {
        return this.clone(ViewFields, "addviewfield('" + fieldTitleOrInternalName + "')").postCore();
    };
    /**
     * Moves the field with the specified field internal name to the specified position in the collection.
     *
     * @param fieldInternalName The case-sensitive internal name of the field to move.
     * @param index The zero-based index of the new position for the field.
     */
    ViewFields.prototype.move = function (fieldInternalName, index) {
        return this.clone(ViewFields, "moveviewfieldto").postCore({
            body: JSON.stringify({ "field": fieldInternalName, "index": index }),
        });
    };
    /**
     * Removes all the fields from the collection.
     */
    ViewFields.prototype.removeAll = function () {
        return this.clone(ViewFields, "removeallviewfields").postCore();
    };
    /**
     * Removes the field with the specified field internal name from the collection.
     *
     * @param fieldInternalName The case-sensitive internal name of the field to remove from the view.
     */
    ViewFields.prototype.remove = function (fieldInternalName) {
        return this.clone(ViewFields, "removeviewfield('" + fieldInternalName + "')").postCore();
    };
    return ViewFields;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.ViewFields = ViewFields;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
/**
 * Describes a collection of Field objects
 *
 */
var Forms = /** @class */ (function (_super) {
    __extends(Forms, _super);
    /**
     * Creates a new instance of the Fields class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this fields collection
     */
    function Forms(baseUrl, path) {
        if (path === void 0) { path = "forms"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a form by id
     *
     * @param id The guid id of the item to retrieve
     */
    Forms.prototype.getById = function (id) {
        var i = new Form(this);
        i.concat("('" + id + "')");
        return i;
    };
    return Forms;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.Forms = Forms;
/**
 * Describes a single of Form instance
 *
 */
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Form;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.Form = Form;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
/**
 * Describes a collection of webhook subscriptions
 *
 */
var Subscriptions = /** @class */ (function (_super) {
    __extends(Subscriptions, _super);
    /**
     * Creates a new instance of the Subscriptions class
     *
     * @param baseUrl - The url or SharePointQueryable which forms the parent of this webhook subscriptions collection
     */
    function Subscriptions(baseUrl, path) {
        if (path === void 0) { path = "subscriptions"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Returns all the webhook subscriptions or the specified webhook subscription
     *
     * @param subscriptionId The id of a specific webhook subscription to retrieve, omit to retrieve all the webhook subscriptions
     */
    Subscriptions.prototype.getById = function (subscriptionId) {
        var subscription = new Subscription(this);
        subscription.concat("('" + subscriptionId + "')");
        return subscription;
    };
    /**
     * Creates a new webhook subscription
     *
     * @param notificationUrl The url to receive the notifications
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
     * @param clientState A client specific string (defaults to pnp-js-core-subscription when omitted)
     */
    Subscriptions.prototype.add = function (notificationUrl, expirationDate, clientState) {
        var _this = this;
        var postBody = JSON.stringify({
            "clientState": clientState || "pnp-js-core-subscription",
            "expirationDateTime": expirationDate,
            "notificationUrl": notificationUrl,
            "resource": this.toUrl(),
        });
        return this.postCore({ body: postBody, headers: { "Content-Type": "application/json" } }).then(function (result) {
            return { data: result, subscription: _this.getById(result.id) };
        });
    };
    return Subscriptions;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.Subscriptions = Subscriptions;
/**
 * Describes a single webhook subscription instance
 *
 */
var Subscription = /** @class */ (function (_super) {
    __extends(Subscription, _super);
    function Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renews this webhook subscription
     *
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
     */
    Subscription.prototype.update = function (expirationDate) {
        var _this = this;
        var postBody = JSON.stringify({
            "expirationDateTime": expirationDate,
        });
        return this.patchCore({ body: postBody, headers: { "Content-Type": "application/json" } }).then(function (data) {
            return { data: data, subscription: _this };
        });
    };
    /**
     * Removes this webhook subscription
     *
     */
    Subscription.prototype.delete = function () {
        return _super.prototype.deleteCore.call(this);
    };
    return Subscription;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.Subscription = Subscription;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var odata_1 = __webpack_require__(3);
var util_1 = __webpack_require__(0);
/**
 * Describes regional settings ODada object
 */
var RegionalSettings = /** @class */ (function (_super) {
    __extends(RegionalSettings, _super);
    /**
     * Creates a new instance of the RegionalSettings class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this regional settings collection
     */
    function RegionalSettings(baseUrl, path) {
        if (path === void 0) { path = "regionalsettings"; }
        return _super.call(this, baseUrl, path) || this;
    }
    Object.defineProperty(RegionalSettings.prototype, "installedLanguages", {
        /**
         * Gets the collection of languages used in a server farm.
         */
        get: function () {
            return new InstalledLanguages(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionalSettings.prototype, "globalInstalledLanguages", {
        /**
         * Gets the collection of language packs that are installed on the server.
         */
        get: function () {
            return new InstalledLanguages(this, "globalinstalledlanguages");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionalSettings.prototype, "timeZone", {
        /**
         * Gets time zone
         */
        get: function () {
            return new TimeZone(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegionalSettings.prototype, "timeZones", {
        /**
         * Gets time zones
         */
        get: function () {
            return new TimeZones(this);
        },
        enumerable: true,
        configurable: true
    });
    return RegionalSettings;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.RegionalSettings = RegionalSettings;
/**
 * Describes installed languages ODada queriable collection
 */
var InstalledLanguages = /** @class */ (function (_super) {
    __extends(InstalledLanguages, _super);
    function InstalledLanguages(baseUrl, path) {
        if (path === void 0) { path = "installedlanguages"; }
        return _super.call(this, baseUrl, path) || this;
    }
    return InstalledLanguages;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.InstalledLanguages = InstalledLanguages;
/**
 * Describes TimeZone ODada object
 */
var TimeZone = /** @class */ (function (_super) {
    __extends(TimeZone, _super);
    function TimeZone(baseUrl, path) {
        if (path === void 0) { path = "timezone"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets an Local Time by UTC Time
     *
     * @param utcTime UTC Time as Date or ISO String
     */
    TimeZone.prototype.utcToLocalTime = function (utcTime) {
        var dateIsoString;
        if (typeof utcTime === "string") {
            dateIsoString = utcTime;
        }
        else {
            dateIsoString = utcTime.toISOString();
        }
        return this.clone(TimeZone, "utctolocaltime('" + dateIsoString + "')")
            .postCore()
            .then(function (res) { return res.hasOwnProperty("UTCToLocalTime") ? res.UTCToLocalTime : res; });
    };
    /**
     * Gets an UTC Time by Local Time
     *
     * @param localTime Local Time as Date or ISO String
     */
    TimeZone.prototype.localTimeToUTC = function (localTime) {
        var dateIsoString;
        if (typeof localTime === "string") {
            dateIsoString = localTime;
        }
        else {
            dateIsoString = util_1.Util.dateAdd(localTime, "minute", localTime.getTimezoneOffset() * -1).toISOString();
        }
        return this.clone(TimeZone, "localtimetoutc('" + dateIsoString + "')")
            .postCore()
            .then(function (res) { return res.hasOwnProperty("LocalTimeToUTC") ? res.LocalTimeToUTC : res; });
    };
    return TimeZone;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.TimeZone = TimeZone;
/**
 * Describes time zones queriable collection
 */
var TimeZones = /** @class */ (function (_super) {
    __extends(TimeZones, _super);
    function TimeZones(baseUrl, path) {
        if (path === void 0) { path = "timezones"; }
        return _super.call(this, baseUrl, path) || this;
    }
    // https://msdn.microsoft.com/en-us/library/office/jj247008.aspx - timezones ids
    /**
     * Gets an TimeZone by id
     *
     * @param id The integer id of the timezone to retrieve
     */
    TimeZones.prototype.getById = function (id) {
        // do the post and merge the result into a TimeZone instance so the data and methods are available
        return this.clone(TimeZones, "GetById(" + id + ")").postAsCore({}, odata_1.spODataEntity(TimeZone));
    };
    return TimeZones;
}(sharepointqueryable_1.SharePointQueryableCollection));
exports.TimeZones = TimeZones;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var RelatedItemManagerImpl = /** @class */ (function (_super) {
    __extends(RelatedItemManagerImpl, _super);
    function RelatedItemManagerImpl(baseUrl, path) {
        if (path === void 0) { path = "_api/SP.RelatedItemManager"; }
        return _super.call(this, baseUrl, path) || this;
    }
    RelatedItemManagerImpl.FromUrl = function (url) {
        if (url === null) {
            return new RelatedItemManagerImpl("");
        }
        var index = url.indexOf("_api/");
        if (index > -1) {
            return new RelatedItemManagerImpl(url.substr(0, index));
        }
        return new RelatedItemManagerImpl(url);
    };
    RelatedItemManagerImpl.prototype.getRelatedItems = function (sourceListName, sourceItemId) {
        var query = this.clone(RelatedItemManagerImpl, null);
        query.concat(".GetRelatedItems");
        return query.postCore({
            body: JSON.stringify({
                SourceItemID: sourceItemId,
                SourceListName: sourceListName,
            }),
        });
    };
    RelatedItemManagerImpl.prototype.getPageOneRelatedItems = function (sourceListName, sourceItemId) {
        var query = this.clone(RelatedItemManagerImpl, null);
        query.concat(".GetPageOneRelatedItems");
        return query.postCore({
            body: JSON.stringify({
                SourceItemID: sourceItemId,
                SourceListName: sourceListName,
            }),
        });
    };
    RelatedItemManagerImpl.prototype.addSingleLink = function (sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemID, targetWebUrl, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(RelatedItemManagerImpl, null);
        query.concat(".AddSingleLink");
        return query.postCore({
            body: JSON.stringify({
                SourceItemID: sourceItemId,
                SourceListName: sourceListName,
                SourceWebUrl: sourceWebUrl,
                TargetItemID: targetItemID,
                TargetListName: targetListName,
                TargetWebUrl: targetWebUrl,
                TryAddReverseLink: tryAddReverseLink,
            }),
        });
    };
    /**
     * Adds a related item link from an item specified by list name and item id, to an item specified by url
     *
     * @param sourceListName The source list name or list id
     * @param sourceItemId The source item id
     * @param targetItemUrl The target item url
     * @param tryAddReverseLink If set to true try to add the reverse link (will not return error if it fails)
     */
    RelatedItemManagerImpl.prototype.addSingleLinkToUrl = function (sourceListName, sourceItemId, targetItemUrl, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(RelatedItemManagerImpl, null);
        query.concat(".AddSingleLinkToUrl");
        return query.postCore({
            body: JSON.stringify({
                SourceItemID: sourceItemId,
                SourceListName: sourceListName,
                TargetItemUrl: targetItemUrl,
                TryAddReverseLink: tryAddReverseLink,
            }),
        });
    };
    /**
     * Adds a related item link from an item specified by url, to an item specified by list name and item id
     *
     * @param sourceItemUrl The source item url
     * @param targetListName The target list name or list id
     * @param targetItemId The target item id
     * @param tryAddReverseLink If set to true try to add the reverse link (will not return error if it fails)
     */
    RelatedItemManagerImpl.prototype.addSingleLinkFromUrl = function (sourceItemUrl, targetListName, targetItemId, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(RelatedItemManagerImpl, null);
        query.concat(".AddSingleLinkFromUrl");
        return query.postCore({
            body: JSON.stringify({
                SourceItemUrl: sourceItemUrl,
                TargetItemID: targetItemId,
                TargetListName: targetListName,
                TryAddReverseLink: tryAddReverseLink,
            }),
        });
    };
    RelatedItemManagerImpl.prototype.deleteSingleLink = function (sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemId, targetWebUrl, tryDeleteReverseLink) {
        if (tryDeleteReverseLink === void 0) { tryDeleteReverseLink = false; }
        var query = this.clone(RelatedItemManagerImpl, null);
        query.concat(".DeleteSingleLink");
        return query.postCore({
            body: JSON.stringify({
                SourceItemID: sourceItemId,
                SourceListName: sourceListName,
                SourceWebUrl: sourceWebUrl,
                TargetItemID: targetItemId,
                TargetListName: targetListName,
                TargetWebUrl: targetWebUrl,
                TryDeleteReverseLink: tryDeleteReverseLink,
            }),
        });
    };
    return RelatedItemManagerImpl;
}(sharepointqueryable_1.SharePointQueryable));
exports.RelatedItemManagerImpl = RelatedItemManagerImpl;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sharepointqueryable_1 = __webpack_require__(1);
var files_1 = __webpack_require__(58);
var util_1 = __webpack_require__(0);
var parsers_1 = __webpack_require__(7);
var UserProfileQuery = /** @class */ (function (_super) {
    __extends(UserProfileQuery, _super);
    /**
     * Creates a new instance of the UserProfileQuery class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this user profile query
     */
    function UserProfileQuery(baseUrl, path) {
        if (path === void 0) { path = "_api/sp.userprofiles.peoplemanager"; }
        var _this = _super.call(this, baseUrl, path) || this;
        _this.clientPeoplePickerQuery = new ClientPeoplePickerQuery(baseUrl);
        _this.profileLoader = new ProfileLoader(baseUrl);
        return _this;
    }
    Object.defineProperty(UserProfileQuery.prototype, "editProfileLink", {
        /**
         * The url of the edit profile page for the current user
         */
        get: function () {
            return this.clone(UserProfileQuery, "EditProfileLink").getAs(parsers_1.ODataValue());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProfileQuery.prototype, "isMyPeopleListPublic", {
        /**
         * A boolean value that indicates whether the current user's "People I'm Following" list is public
         */
        get: function () {
            return this.clone(UserProfileQuery, "IsMyPeopleListPublic").getAs(parsers_1.ODataValue());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A boolean value that indicates whether the current user is being followed by the specified user
     *
     * @param loginName The account name of the user
     */
    UserProfileQuery.prototype.amIFollowedBy = function (loginName) {
        var q = this.clone(UserProfileQuery, "amifollowedby(@v)");
        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * A boolean value that indicates whether the current user is following the specified user
     *
     * @param loginName The account name of the user
     */
    UserProfileQuery.prototype.amIFollowing = function (loginName) {
        var q = this.clone(UserProfileQuery, "amifollowing(@v)");
        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Gets tags that the current user is following
     *
     * @param maxCount The maximum number of tags to retrieve (default is 20)
     */
    UserProfileQuery.prototype.getFollowedTags = function (maxCount) {
        if (maxCount === void 0) { maxCount = 20; }
        return this.clone(UserProfileQuery, "getfollowedtags(" + maxCount + ")").get();
    };
    /**
     * Gets the people who are following the specified user
     *
     * @param loginName The account name of the user
     */
    UserProfileQuery.prototype.getFollowersFor = function (loginName) {
        var q = this.clone(UserProfileQuery, "getfollowersfor(@v)");
        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    Object.defineProperty(UserProfileQuery.prototype, "myFollowers", {
        /**
         * Gets the people who are following the current user
         *
         */
        get: function () {
            return new sharepointqueryable_1.SharePointQueryableCollection(this, "getmyfollowers");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProfileQuery.prototype, "myProperties", {
        /**
         * Gets user properties for the current user
         *
         */
        get: function () {
            return new UserProfileQuery(this, "getmyproperties");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the people who the specified user is following
     *
     * @param loginName The account name of the user.
     */
    UserProfileQuery.prototype.getPeopleFollowedBy = function (loginName) {
        var q = this.clone(UserProfileQuery, "getpeoplefollowedby(@v)");
        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Gets user properties for the specified user.
     *
     * @param loginName The account name of the user.
     */
    UserProfileQuery.prototype.getPropertiesFor = function (loginName) {
        var q = this.clone(UserProfileQuery, "getpropertiesfor(@v)");
        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    Object.defineProperty(UserProfileQuery.prototype, "trendingTags", {
        /**
         * Gets the 20 most popular hash tags over the past week, sorted so that the most popular tag appears first
         *
         */
        get: function () {
            var q = this.clone(UserProfileQuery, null);
            q.concat(".gettrendingtags");
            return q.get();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the specified user profile property for the specified user
     *
     * @param loginName The account name of the user
     * @param propertyName The case-sensitive name of the property to get
     */
    UserProfileQuery.prototype.getUserProfilePropertyFor = function (loginName, propertyName) {
        var q = this.clone(UserProfileQuery, "getuserprofilepropertyfor(accountname=@v, propertyname='" + propertyName + "')");
        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Removes the specified user from the user's list of suggested people to follow
     *
     * @param loginName The account name of the user
     */
    UserProfileQuery.prototype.hideSuggestion = function (loginName) {
        var q = this.clone(UserProfileQuery, "hidesuggestion(@v)");
        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.postCore();
    };
    /**
     * A boolean values that indicates whether the first user is following the second user
     *
     * @param follower The account name of the user who might be following the followee
     * @param followee The account name of the user who might be followed by the follower
     */
    UserProfileQuery.prototype.isFollowing = function (follower, followee) {
        var q = this.clone(UserProfileQuery, null);
        q.concat(".isfollowing(possiblefolloweraccountname=@v, possiblefolloweeaccountname=@y)");
        q.query.add("@v", "'" + encodeURIComponent(follower) + "'");
        q.query.add("@y", "'" + encodeURIComponent(followee) + "'");
        return q.get();
    };
    /**
     * Uploads and sets the user profile picture (Users can upload a picture to their own profile only). Not supported for batching.
     *
     * @param profilePicSource Blob data representing the user's picture in BMP, JPEG, or PNG format of up to 4.76MB
     */
    UserProfileQuery.prototype.setMyProfilePic = function (profilePicSource) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            files_1.readBlobAsArrayBuffer(profilePicSource).then(function (buffer) {
                var request = new UserProfileQuery(_this, "setmyprofilepicture");
                request.postCore({
                    body: String.fromCharCode.apply(null, new Uint16Array(buffer)),
                }).then(function (_) { return resolve(); });
            }).catch(function (e) { return reject(e); });
        });
    };
    /**
     * Sets single value User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValue Property value
     */
    UserProfileQuery.prototype.setSingleValueProfileProperty = function (accountName, propertyName, propertyValue) {
        var postBody = JSON.stringify({
            accountName: accountName,
            propertyName: propertyName,
            propertyValue: propertyValue,
        });
        return this.clone(UserProfileQuery, "SetSingleValueProfileProperty")
            .postCore({ body: postBody });
    };
    /**
     * Sets multi valued User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValues Property values
     */
    UserProfileQuery.prototype.setMultiValuedProfileProperty = function (accountName, propertyName, propertyValues) {
        var postBody = JSON.stringify({
            accountName: accountName,
            propertyName: propertyName,
            propertyValues: propertyValues,
        });
        return this.clone(UserProfileQuery, "SetMultiValuedProfileProperty")
            .postCore({ body: postBody });
    };
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
     *
     * @param emails The email addresses of the users to provision sites for
     */
    UserProfileQuery.prototype.createPersonalSiteEnqueueBulk = function () {
        var emails = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            emails[_i] = arguments[_i];
        }
        return this.profileLoader.createPersonalSiteEnqueueBulk(emails);
    };
    Object.defineProperty(UserProfileQuery.prototype, "ownerUserProfile", {
        /**
         * Gets the user profile of the site owner
         *
         */
        get: function () {
            return this.profileLoader.ownerUserProfile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserProfileQuery.prototype, "userProfile", {
        /**
         * Gets the user profile for the current user
         */
        get: function () {
            return this.profileLoader.userProfile;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    UserProfileQuery.prototype.createPersonalSite = function (interactiveRequest) {
        if (interactiveRequest === void 0) { interactiveRequest = false; }
        return this.profileLoader.createPersonalSite(interactiveRequest);
    };
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private
     */
    UserProfileQuery.prototype.shareAllSocialData = function (share) {
        return this.profileLoader.shareAllSocialData(share);
    };
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    UserProfileQuery.prototype.clientPeoplePickerResolveUser = function (queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerResolveUser(queryParams);
    };
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    UserProfileQuery.prototype.clientPeoplePickerSearchUser = function (queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerSearchUser(queryParams);
    };
    return UserProfileQuery;
}(sharepointqueryable_1.SharePointQueryableInstance));
exports.UserProfileQuery = UserProfileQuery;
var ProfileLoader = /** @class */ (function (_super) {
    __extends(ProfileLoader, _super);
    /**
   * Creates a new instance of the ProfileLoader class
   *
   * @param baseUrl The url or SharePointQueryable which forms the parent of this profile loader
   */
    function ProfileLoader(baseUrl, path) {
        if (path === void 0) { path = "_api/sp.userprofiles.profileloader.getprofileloader"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only) Doesn't support batching
     *
     * @param emails The email addresses of the users to provision sites for
     */
    ProfileLoader.prototype.createPersonalSiteEnqueueBulk = function (emails) {
        return this.clone(ProfileLoader, "createpersonalsiteenqueuebulk", false).postCore({
            body: JSON.stringify({ "emailIDs": emails }),
        });
    };
    Object.defineProperty(ProfileLoader.prototype, "ownerUserProfile", {
        /**
         * Gets the user profile of the site owner.
         *
         */
        get: function () {
            var q = this.getParent(ProfileLoader, this.parentUrl, "_api/sp.userprofiles.profileloader.getowneruserprofile");
            if (this.hasBatch) {
                q = q.inBatch(this.batch);
            }
            return q.postAsCore();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileLoader.prototype, "userProfile", {
        /**
         * Gets the user profile of the current user.
         *
         */
        get: function () {
            return this.clone(ProfileLoader, "getuserprofile").postAsCore();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    ProfileLoader.prototype.createPersonalSite = function (interactiveRequest) {
        if (interactiveRequest === void 0) { interactiveRequest = false; }
        return this.clone(ProfileLoader, "getuserprofile/createpersonalsiteenque(" + interactiveRequest + ")").postCore();
    };
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private.
     */
    ProfileLoader.prototype.shareAllSocialData = function (share) {
        return this.clone(ProfileLoader, "getuserprofile/shareallsocialdata(" + share + ")").postCore();
    };
    return ProfileLoader;
}(sharepointqueryable_1.SharePointQueryable));
var ClientPeoplePickerQuery = /** @class */ (function (_super) {
    __extends(ClientPeoplePickerQuery, _super);
    /**
     * Creates a new instance of the PeoplePickerQuery class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this people picker query
     */
    function ClientPeoplePickerQuery(baseUrl, path) {
        if (path === void 0) { path = "_api/sp.ui.applicationpages.clientpeoplepickerwebserviceinterface"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    ClientPeoplePickerQuery.prototype.clientPeoplePickerResolveUser = function (queryParams) {
        var q = this.clone(ClientPeoplePickerQuery, null);
        q.concat(".clientpeoplepickerresolveuser");
        return q.postAsCore({
            body: this.createClientPeoplePickerQueryParametersRequestBody(queryParams),
        }).then(function (json) { return JSON.parse(json); });
    };
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    ClientPeoplePickerQuery.prototype.clientPeoplePickerSearchUser = function (queryParams) {
        var q = this.clone(ClientPeoplePickerQuery, null);
        q.concat(".clientpeoplepickersearchuser");
        return q.postAsCore({
            body: this.createClientPeoplePickerQueryParametersRequestBody(queryParams),
        }).then(function (json) { return JSON.parse(json); });
    };
    /**
     * Creates ClientPeoplePickerQueryParameters request body
     *
     * @param queryParams The query parameters to create request body
     */
    ClientPeoplePickerQuery.prototype.createClientPeoplePickerQueryParametersRequestBody = function (queryParams) {
        return JSON.stringify({
            "queryParams": util_1.Util.extend({
                "__metadata": { "type": "SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters" },
            }, queryParams),
        });
    };
    return ClientPeoplePickerQuery;
}(sharepointqueryable_1.SharePointQueryable));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Reads a blob as text
 *
 * @param blob The data to read
 */
function readBlobAsText(blob) {
    return readBlobAs(blob, "string");
}
exports.readBlobAsText = readBlobAsText;
/**
 * Reads a blob into an array buffer
 *
 * @param blob The data to read
 */
function readBlobAsArrayBuffer(blob) {
    return readBlobAs(blob, "buffer");
}
exports.readBlobAsArrayBuffer = readBlobAsArrayBuffer;
/**
 * Generic method to read blob's content
 *
 * @param blob The data to read
 * @param mode The read mode
 */
function readBlobAs(blob, mode) {
    return new Promise(function (resolve, reject) {
        try {
            var reader = new FileReader();
            reader.onload = function (e) {
                resolve(e.target.result);
            };
            switch (mode) {
                case "string":
                    reader.readAsText(blob);
                    break;
                case "buffer":
                    reader.readAsArrayBuffer(blob);
                    break;
            }
        }
        catch (e) {
            reject(e);
        }
    });
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var v1_1 = __webpack_require__(60);
var GraphRest = /** @class */ (function () {
    function GraphRest() {
    }
    Object.defineProperty(GraphRest.prototype, "v1", {
        get: function () {
            return new v1_1.V1("");
        },
        enumerable: true,
        configurable: true
    });
    return GraphRest;
}());
exports.GraphRest = GraphRest;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var graphqueryable_1 = __webpack_require__(6);
var groups_1 = __webpack_require__(61);
// import { Me } from "./me";
/**
 * Root object wrapping v1 functionality for MS Graph
 *
 */
var V1 = /** @class */ (function (_super) {
    __extends(V1, _super);
    /**
     * Creates a new instance of the V1 class
     *
     * @param baseUrl The url or Queryable which forms the parent of this fields collection
     * @param path Optional additional path
     */
    function V1(baseUrl, path) {
        if (path === void 0) { path = "v1.0"; }
        return _super.call(this, baseUrl, path) || this;
    }
    Object.defineProperty(V1.prototype, "groups", {
        get: function () {
            return new groups_1.Groups(this);
        },
        enumerable: true,
        configurable: true
    });
    return V1;
}(graphqueryable_1.GraphQueryable));
exports.V1 = V1;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var graphqueryable_1 = __webpack_require__(6);
var members_1 = __webpack_require__(62);
var util_1 = __webpack_require__(0);
var calendars_1 = __webpack_require__(63);
var conversations_1 = __webpack_require__(64);
var plans_1 = __webpack_require__(66);
var photos_1 = __webpack_require__(67);
var GroupType;
(function (GroupType) {
    /**
     * Office 365 (aka unified group)
     */
    GroupType[GroupType["Office365"] = 0] = "Office365";
    /**
     * Dynamic membership
     */
    GroupType[GroupType["Dynamic"] = 1] = "Dynamic";
    /**
     * Security
     */
    GroupType[GroupType["Security"] = 2] = "Security";
})(GroupType = exports.GroupType || (exports.GroupType = {}));
/**
 * Describes a collection of Field objects
 *
 */
var Groups = /** @class */ (function (_super) {
    __extends(Groups, _super);
    function Groups(baseUrl, path) {
        if (path === void 0) { path = "groups"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a group from the collection using the specified id
     *
     * @param id Id of the group to get from this collection
     */
    Groups.prototype.getById = function (id) {
        return new Group(this, id);
    };
    /**
     * Create a new group as specified in the request body.
     *
     * @param name Name to display in the address book for the group
     * @param mailNickname Mail alias for the group
     * @param groupType Type of group being created
     * @param additionalProperties A plain object collection of additional properties you want to set on the new group
     */
    Groups.prototype.add = function (name, mailNickname, groupType, additionalProperties) {
        var _this = this;
        if (additionalProperties === void 0) { additionalProperties = {}; }
        var postBody = util_1.Util.extend({
            displayName: name,
            mailEnabled: groupType === GroupType.Office365,
            mailNickname: mailNickname,
            securityEnabled: groupType !== GroupType.Office365,
        }, additionalProperties);
        // include a group type if required
        if (groupType !== GroupType.Security) {
            postBody = util_1.Util.extend(postBody, {
                groupTypes: [groupType === GroupType.Office365 ? "Unified" : "DynamicMembership"],
            });
        }
        return this.postCore({
            body: JSON.stringify(postBody),
        }).then(function (r) {
            return {
                data: r,
                group: _this.getById(r.id),
            };
        });
    };
    return Groups;
}(graphqueryable_1.GraphQueryableCollection));
exports.Groups = Groups;
/**
 * Represents a group entity
 */
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Group.prototype, "caldendar", {
        /**
         * The calendar associated with this group
         */
        get: function () {
            return new calendars_1.Calendar(this, "calendar");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "events", {
        /**
         * Retrieve a list of event objects
         */
        get: function () {
            return new calendars_1.Events(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "owners", {
        /**
         * Gets the collection of owners for this group
         */
        get: function () {
            return new members_1.Owners(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "plans", {
        /**
         * The collection of plans for this group
         */
        get: function () {
            return new plans_1.Plans(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "members", {
        /**
         * Gets the collection of members for this group
         */
        get: function () {
            return new members_1.Members(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "conversations", {
        /**
         * Gets the conversations collection for this group
         */
        get: function () {
            return new conversations_1.Conversations(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "acceptedSenders", {
        /**
         * Gets the collection of accepted senders for this group
         */
        get: function () {
            return new conversations_1.Senders(this, "acceptedsenders");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "rejectedSenders", {
        /**
         * Gets the collection of rejected senders for this group
         */
        get: function () {
            return new conversations_1.Senders(this, "rejectedsenders");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "photo", {
        /**
         * The photo associated with the group
         */
        get: function () {
            return new photos_1.Photo(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add the group to the list of the current user's favorite groups. Supported for only Office 365 groups
     */
    Group.prototype.addFavorite = function () {
        return this.clone(Group, "addFavorite").postCore();
    };
    /**
     * Return all the groups that the specified group is a member of. The check is transitive
     *
     * @param securityEnabledOnly
     */
    Group.prototype.getMemberGroups = function (securityEnabledOnly) {
        if (securityEnabledOnly === void 0) { securityEnabledOnly = false; }
        return this.clone(Group, "getMemberGroups").postCore({
            body: JSON.stringify({
                securityEnabledOnly: securityEnabledOnly,
            }),
        });
    };
    /**
     * Deletes this group
     */
    Group.prototype.delete = function () {
        return this.deleteCore();
    };
    /**
     * Update the properties of a group object
     *
     * @param properties Set of properties of this group to update
     */
    Group.prototype.update = function (properties) {
        return this.patchCore({
            body: JSON.stringify(properties),
        });
    };
    /**
     * Remove the group from the list of the current user's favorite groups. Supported for only Office 365 groups
     */
    Group.prototype.removeFavorite = function () {
        return this.clone(Group, "removeFavorite").postCore();
    };
    /**
     * Reset the unseenCount of all the posts that the current user has not seen since their last visit
     */
    Group.prototype.resetUnseenCount = function () {
        return this.clone(Group, "resetUnseenCount").postCore();
    };
    /**
     * Calling this method will enable the current user to receive email notifications for this group,
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    Group.prototype.subscribeByMail = function () {
        return this.clone(Group, "subscribeByMail").postCore();
    };
    /**
     * Calling this method will prevent the current user from receiving email notifications for this group
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    Group.prototype.unsubscribeByMail = function () {
        return this.clone(Group, "unsubscribeByMail").postCore();
    };
    /**
     * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range, from the default calendar of a group
     *
     * @param start Start date and time of the time range
     * @param end End date and time of the time range
     */
    Group.prototype.getCalendarView = function (start, end) {
        var view = this.clone(Group, "calendarView");
        view.query.add("startDateTime", start.toISOString());
        view.query.add("endDateTime", end.toISOString());
        return view.get();
    };
    return Group;
}(graphqueryable_1.GraphQueryableInstance));
exports.Group = Group;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var graphqueryable_1 = __webpack_require__(6);
var Members = /** @class */ (function (_super) {
    __extends(Members, _super);
    function Members(baseUrl, path) {
        if (path === void 0) { path = "members"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Use this API to add a member to an Office 365 group, a security group or a mail-enabled security group through
     * the members navigation property. You can add users or other groups.
     * Important: You can add only users to Office 365 groups.
     *
     * @param id Full @odata.id of the directoryObject, user, or group object you want to add (ex: https://graph.microsoft.com/v1.0/directoryObjects/${id})
     */
    Members.prototype.add = function (id) {
        return this.clone(Members, "$ref").postCore({
            body: JSON.stringify({
                "@odata.id": id,
            }),
        });
    };
    /**
     * Gets a member of the group by id
     *
     * @param id Group member's id
     */
    Members.prototype.getById = function (id) {
        return new Member(this, id);
    };
    return Members;
}(graphqueryable_1.GraphQueryableCollection));
exports.Members = Members;
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Member;
}(graphqueryable_1.GraphQueryableInstance));
exports.Member = Member;
var Owners = /** @class */ (function (_super) {
    __extends(Owners, _super);
    function Owners(baseUrl, path) {
        if (path === void 0) { path = "owners"; }
        return _super.call(this, baseUrl, path) || this;
    }
    return Owners;
}(Members));
exports.Owners = Owners;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var graphqueryable_1 = __webpack_require__(6);
// import { Attachments } from "./attachments";
var Calendars = /** @class */ (function (_super) {
    __extends(Calendars, _super);
    function Calendars(baseUrl, path) {
        if (path === void 0) { path = "calendars"; }
        return _super.call(this, baseUrl, path) || this;
    }
    return Calendars;
}(graphqueryable_1.GraphQueryableCollection));
exports.Calendars = Calendars;
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Calendar.prototype, "events", {
        get: function () {
            return new Events(this);
        },
        enumerable: true,
        configurable: true
    });
    return Calendar;
}(graphqueryable_1.GraphQueryableInstance));
exports.Calendar = Calendar;
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(baseUrl, path) {
        if (path === void 0) { path = "events"; }
        return _super.call(this, baseUrl, path) || this;
    }
    Events.prototype.getById = function (id) {
        return new Event(this, id);
    };
    /**
     * Adds a new event to the collection
     *
     * @param properties The set of properties used to create the event
     */
    Events.prototype.add = function (properties) {
        var _this = this;
        return this.postCore({
            body: JSON.stringify(properties),
        }).then(function (r) {
            return {
                data: r,
                event: _this.getById(r.id),
            };
        });
    };
    return Events;
}(graphqueryable_1.GraphQueryableCollection));
exports.Events = Events;
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // TODO:: when supported
    // /**
    //  * Gets the collection of attachments for this event
    //  */
    // public get attachments(): Attachments {
    //     return new Attachments(this);
    // }
    /**
     * Update the properties of an event object
     *
     * @param properties Set of properties of this event to update
     */
    Event.prototype.update = function (properties) {
        return this.patchCore({
            body: JSON.stringify(properties),
        });
    };
    /**
     * Deletes this event
     */
    Event.prototype.delete = function () {
        return this.deleteCore();
    };
    return Event;
}(graphqueryable_1.GraphQueryableInstance));
exports.Event = Event;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var graphqueryable_1 = __webpack_require__(6);
var attachments_1 = __webpack_require__(65);
var Conversations = /** @class */ (function (_super) {
    __extends(Conversations, _super);
    function Conversations(baseUrl, path) {
        if (path === void 0) { path = "conversations"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Create a new conversation by including a thread and a post.
     *
     * @param properties Properties used to create the new conversation
     */
    Conversations.prototype.add = function (properties) {
        return this.postCore({
            body: JSON.stringify(properties),
        });
    };
    /**
     * Gets a conversation from this collection by id
     *
     * @param id Group member's id
     */
    Conversations.prototype.getById = function (id) {
        return new Conversation(this, id);
    };
    return Conversations;
}(graphqueryable_1.GraphQueryableCollection));
exports.Conversations = Conversations;
var Threads = /** @class */ (function (_super) {
    __extends(Threads, _super);
    function Threads(baseUrl, path) {
        if (path === void 0) { path = "threads"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a thread from this collection by id
     *
     * @param id Group member's id
     */
    Threads.prototype.getById = function (id) {
        return new Thread(this, id);
    };
    /**
     * Adds a new thread to this collection
     *
     * @param properties properties used to create the new thread
     * @returns Id of the new thread
     */
    Threads.prototype.add = function (properties) {
        return this.postCore({
            body: JSON.stringify(properties),
        });
    };
    return Threads;
}(graphqueryable_1.GraphQueryableCollection));
exports.Threads = Threads;
var Posts = /** @class */ (function (_super) {
    __extends(Posts, _super);
    function Posts(baseUrl, path) {
        if (path === void 0) { path = "posts"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a thread from this collection by id
     *
     * @param id Group member's id
     */
    Posts.prototype.getById = function (id) {
        return new Post(this, id);
    };
    /**
     * Adds a new thread to this collection
     *
     * @param properties properties used to create the new thread
     * @returns Id of the new thread
     */
    Posts.prototype.add = function (properties) {
        return this.postCore({
            body: JSON.stringify(properties),
        });
    };
    return Posts;
}(graphqueryable_1.GraphQueryableCollection));
exports.Posts = Posts;
var Conversation = /** @class */ (function (_super) {
    __extends(Conversation, _super);
    function Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Conversation.prototype, "threads", {
        /**
         * Get all the threads in a group conversation.
         */
        get: function () {
            return new Threads(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates this conversation
     */
    Conversation.prototype.update = function (properties) {
        return this.patchCore({
            body: JSON.stringify(properties),
        });
    };
    /**
     * Deletes this member from the group
     */
    Conversation.prototype.delete = function () {
        return this.deleteCore();
    };
    return Conversation;
}(graphqueryable_1.GraphQueryableInstance));
exports.Conversation = Conversation;
var Thread = /** @class */ (function (_super) {
    __extends(Thread, _super);
    function Thread() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Thread.prototype, "posts", {
        /**
         * Get all the threads in a group conversation.
         */
        get: function () {
            return new Posts(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    Thread.prototype.reply = function (post) {
        return this.clone(Thread, "reply").postCore({
            body: JSON.stringify({
                post: post,
            }),
        });
    };
    /**
     * Deletes this member from the group
     */
    Thread.prototype.delete = function () {
        return this.deleteCore();
    };
    return Thread;
}(graphqueryable_1.GraphQueryableInstance));
exports.Thread = Thread;
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Post.prototype, "attachments", {
        get: function () {
            return new attachments_1.Attachments(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Deletes this post
     */
    Post.prototype.delete = function () {
        return this.deleteCore();
    };
    /**
     * Forward a post to a recipient
     */
    Post.prototype.forward = function (info) {
        return this.clone(Post, "forward").postCore({
            body: JSON.stringify(info),
        });
    };
    /**
     * Reply to a thread in a group conversation and add a new post to it
     *
     * @param post Contents of the post
     */
    Post.prototype.reply = function (post) {
        return this.clone(Post, "reply").postCore({
            body: JSON.stringify({
                post: post,
            }),
        });
    };
    return Post;
}(graphqueryable_1.GraphQueryableInstance));
exports.Post = Post;
var Senders = /** @class */ (function (_super) {
    __extends(Senders, _super);
    function Senders(baseUrl, path) {
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Add a new user or group to this senders collection
     * @param id The full @odata.id value to add (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    Senders.prototype.add = function (id) {
        return this.clone(Senders, "$ref").postCore({
            body: JSON.stringify({
                "@odata.id": id,
            }),
        });
    };
    /**
     * Removes the entity from the collection
     *
     * @param id The full @odata.id value to remove (ex: https://graph.microsoft.com/v1.0/users/user@contoso.com)
     */
    Senders.prototype.remove = function (id) {
        var remover = this.clone(Senders, "$ref");
        remover.query.add("$id", id);
        return remover.deleteCore();
    };
    return Senders;
}(graphqueryable_1.GraphQueryableCollection));
exports.Senders = Senders;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var graphqueryable_1 = __webpack_require__(6);
var Attachments = /** @class */ (function (_super) {
    __extends(Attachments, _super);
    function Attachments(baseUrl, path) {
        if (path === void 0) { path = "attachments"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a member of the group by id
     *
     * @param id Attachment id
     */
    Attachments.prototype.getById = function (id) {
        return new Attachment(this, id);
    };
    /**
     * Add attachment to this collection
     *
     * @param name Name given to the attachment file
     * @param bytes File content
     */
    Attachments.prototype.addFile = function (name, bytes) {
        return this.postCore({
            body: JSON.stringify({
                "@odata.type": "#microsoft.graph.fileAttachment",
                contentBytes: bytes,
                name: name,
            }),
        });
    };
    return Attachments;
}(graphqueryable_1.GraphQueryableCollection));
exports.Attachments = Attachments;
var Attachment = /** @class */ (function (_super) {
    __extends(Attachment, _super);
    function Attachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Attachment;
}(graphqueryable_1.GraphQueryableInstance));
exports.Attachment = Attachment;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var graphqueryable_1 = __webpack_require__(6);
var Plans = /** @class */ (function (_super) {
    __extends(Plans, _super);
    function Plans(baseUrl, path) {
        if (path === void 0) { path = "planner/plans"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets a plan from this collection by id
     *
     * @param id Plan's id
     */
    Plans.prototype.getById = function (id) {
        return new Plan(this, id);
    };
    return Plans;
}(graphqueryable_1.GraphQueryableCollection));
exports.Plans = Plans;
var Plan = /** @class */ (function (_super) {
    __extends(Plan, _super);
    function Plan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Plan;
}(graphqueryable_1.GraphQueryableInstance));
exports.Plan = Plan;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var graphqueryable_1 = __webpack_require__(6);
var parsers_1 = __webpack_require__(7);
var Photo = /** @class */ (function (_super) {
    __extends(Photo, _super);
    function Photo(baseUrl, path) {
        if (path === void 0) { path = "photo"; }
        return _super.call(this, baseUrl, path) || this;
    }
    /**
     * Gets the image bytes as a blob (browser)
     */
    Photo.prototype.getBlob = function () {
        return this.clone(Photo, "$value", false).get(new parsers_1.BlobFileParser());
    };
    /**
     * Gets the image file byets as a Buffer (node.js)
     */
    Photo.prototype.getBuffer = function () {
        return this.clone(Photo, "$value", false).get(new parsers_1.BufferFileParser());
    };
    /**
     * Sets the file bytes
     *
     * @param content Image file contents, max 4 MB
     */
    Photo.prototype.setContent = function (content) {
        return this.clone(Photo, "$value", false).patchCore({
            body: content,
        });
    };
    return Photo;
}(graphqueryable_1.GraphQueryableInstance));
exports.Photo = Photo;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(69));
var collections_1 = __webpack_require__(9);
exports.Dictionary = collections_1.Dictionary;
var util_1 = __webpack_require__(0);
exports.Util = util_1.Util;
__export(__webpack_require__(5));
__export(__webpack_require__(2));
__export(__webpack_require__(13));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cachingConfigurationProvider_1 = __webpack_require__(45);
exports.CachingConfigurationProvider = cachingConfigurationProvider_1.default;
var spListConfigurationProvider_1 = __webpack_require__(70);
exports.SPListConfigurationProvider = spListConfigurationProvider_1.default;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cachingConfigurationProvider_1 = __webpack_require__(45);
/**
 * A configuration provider which loads configuration values from a SharePoint list
 *
 */
var SPListConfigurationProvider = /** @class */ (function () {
    /**
     * Creates a new SharePoint list based configuration provider
     * @constructor
     * @param {string} webUrl Url of the SharePoint site, where the configuration list is located
     * @param {string} listTitle Title of the SharePoint list, which contains the configuration settings (optional, default = "config")
     */
    function SPListConfigurationProvider(sourceWeb, sourceListTitle) {
        if (sourceListTitle === void 0) { sourceListTitle = "config"; }
        this.sourceWeb = sourceWeb;
        this.sourceListTitle = sourceListTitle;
    }
    Object.defineProperty(SPListConfigurationProvider.prototype, "web", {
        /**
         * Gets the url of the SharePoint site, where the configuration list is located
         *
         * @return {string} Url address of the site
         */
        get: function () {
            return this.sourceWeb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SPListConfigurationProvider.prototype, "listTitle", {
        /**
         * Gets the title of the SharePoint list, which contains the configuration settings
         *
         * @return {string} List title
         */
        get: function () {
            return this.sourceListTitle;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Loads the configuration values from the SharePoint list
     *
     * @return {Promise<TypedHash<string>>} Promise of loaded configuration values
     */
    SPListConfigurationProvider.prototype.getConfiguration = function () {
        return this.web.lists.getByTitle(this.listTitle).items.select("Title", "Value")
            .getAs().then(function (data) {
            return data.reduce(function (configuration, item) {
                return Object.defineProperty(configuration, item.Title, {
                    configurable: false,
                    enumerable: false,
                    value: item.Value,
                    writable: false,
                });
            }, {});
        });
    };
    /**
     * Wraps the current provider in a cache enabled provider
     *
     * @return {CachingConfigurationProvider} Caching providers which wraps the current provider
     */
    SPListConfigurationProvider.prototype.asCaching = function () {
        var cacheKey = "splist_" + this.web.toUrl() + "+" + this.listTitle;
        return new cachingConfigurationProvider_1.default(this, cacheKey);
    };
    return SPListConfigurationProvider;
}());
exports.default = SPListConfigurationProvider;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(72));


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphqueryable_1 = __webpack_require__(6);
exports.GraphQueryable = graphqueryable_1.GraphQueryable;
exports.GraphQueryableCollection = graphqueryable_1.GraphQueryableCollection;
exports.GraphQueryableInstance = graphqueryable_1.GraphQueryableInstance;
exports.GraphQueryableSearchableCollection = graphqueryable_1.GraphQueryableSearchableCollection;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var httpclient_1 = __webpack_require__(22);
exports.HttpClient = httpclient_1.HttpClient;
var sprequestexecutorclient_1 = __webpack_require__(74);
exports.SPRequestExecutorClient = sprequestexecutorclient_1.SPRequestExecutorClient;
var nodefetchclient_1 = __webpack_require__(75);
exports.NodeFetchClient = nodefetchclient_1.NodeFetchClient;
var fetchclient_1 = __webpack_require__(31);
exports.FetchClient = fetchclient_1.FetchClient;
var graphclient_1 = __webpack_require__(44);
exports.GraphHttpClient = graphclient_1.GraphHttpClient;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(0);
var exceptions_1 = __webpack_require__(2);
/**
 * Makes requests using the SP.RequestExecutor library.
 */
var SPRequestExecutorClient = /** @class */ (function () {
    function SPRequestExecutorClient() {
        /**
         * Converts a SharePoint REST API response to a fetch API response.
         */
        this.convertToResponse = function (spResponse) {
            var responseHeaders = new Headers();
            for (var h in spResponse.headers) {
                if (spResponse.headers[h]) {
                    responseHeaders.append(h, spResponse.headers[h]);
                }
            }
            // issue #256, Cannot have an empty string body when creating a Response with status 204
            var body = spResponse.statusCode === 204 ? null : spResponse.body;
            return new Response(body, {
                headers: responseHeaders,
                status: spResponse.statusCode,
                statusText: spResponse.statusText,
            });
        };
    }
    /**
     * Fetches a URL using the SP.RequestExecutor library.
     */
    SPRequestExecutorClient.prototype.fetch = function (url, options) {
        var _this = this;
        if (typeof SP === "undefined" || typeof SP.RequestExecutor === "undefined") {
            throw new exceptions_1.SPRequestExecutorUndefinedException();
        }
        var addinWebUrl = url.substring(0, url.indexOf("/_api")), executor = new SP.RequestExecutor(addinWebUrl);
        var headers = {}, iterator, temp;
        if (options.headers && options.headers instanceof Headers) {
            iterator = options.headers.entries();
            temp = iterator.next();
            while (!temp.done) {
                headers[temp.value[0]] = temp.value[1];
                temp = iterator.next();
            }
        }
        else {
            headers = options.headers;
        }
        // this is a way to determine if we need to set the binaryStringRequestBody by testing what method we are calling
        // and if they would normally have a binary body. This addresses issue #565.
        var paths = [
            "files\/add",
            "files\/addTemplateFile",
            "file\/startUpload",
            "file\/continueUpload",
            "file\/finishUpload",
            "attachmentfiles\/add",
        ];
        var isBinaryRequest = (new RegExp(paths.join("|"), "i")).test(url);
        return new Promise(function (resolve, reject) {
            var requestOptions = {
                error: function (error) {
                    reject(_this.convertToResponse(error));
                },
                headers: headers,
                method: options.method,
                success: function (response) {
                    resolve(_this.convertToResponse(response));
                },
                url: url,
            };
            if (options.body) {
                requestOptions = util_1.Util.extend(requestOptions, { body: options.body });
                if (isBinaryRequest) {
                    requestOptions = util_1.Util.extend(requestOptions, { binaryStringRequestBody: true });
                }
            }
            executor.executeAsync(requestOptions);
        });
    };
    return SPRequestExecutorClient;
}());
exports.SPRequestExecutorClient = SPRequestExecutorClient;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = __webpack_require__(2);
/**
 * This module is substituted for the NodeFetchClient.ts during the packaging process. This helps to reduce the pnp.js file size by
 * not including all of the node dependencies
 */
var NodeFetchClient = /** @class */ (function () {
    function NodeFetchClient() {
    }
    /**
     * Always throws an error that NodeFetchClient is not supported for use in the browser
     */
    NodeFetchClient.prototype.fetch = function () {
        throw new exceptions_1.NodeFetchClientUnsupportedException();
    };
    return NodeFetchClient;
}());
exports.NodeFetchClient = NodeFetchClient;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(14));
__export(__webpack_require__(7));
__export(__webpack_require__(33));
__export(__webpack_require__(20));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(78));


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var appcatalog_1 = __webpack_require__(40);
exports.AppCatalog = appcatalog_1.AppCatalog;
exports.App = appcatalog_1.App;
__export(__webpack_require__(41));
var batch_1 = __webpack_require__(29);
exports.ODataBatch = batch_1.ODataBatch;
var fields_1 = __webpack_require__(26);
exports.Field = fields_1.Field;
exports.Fields = fields_1.Fields;
var files_1 = __webpack_require__(8);
exports.CheckinType = files_1.CheckinType;
exports.WebPartsPersonalizationScope = files_1.WebPartsPersonalizationScope;
exports.MoveOperations = files_1.MoveOperations;
exports.TemplateFileType = files_1.TemplateFileType;
exports.File = files_1.File;
exports.Files = files_1.Files;
var folders_1 = __webpack_require__(18);
exports.Folder = folders_1.Folder;
exports.Folders = folders_1.Folders;
var items_1 = __webpack_require__(12);
exports.Item = items_1.Item;
exports.Items = items_1.Items;
exports.ItemVersion = items_1.ItemVersion;
exports.ItemVersions = items_1.ItemVersions;
exports.PagedItemCollection = items_1.PagedItemCollection;
var navigation_1 = __webpack_require__(28);
exports.NavigationNodes = navigation_1.NavigationNodes;
exports.NavigationNode = navigation_1.NavigationNode;
var lists_1 = __webpack_require__(15);
exports.List = lists_1.List;
exports.Lists = lists_1.Lists;
var odata_1 = __webpack_require__(3);
exports.spExtractODataId = odata_1.spExtractODataId;
exports.spODataEntity = odata_1.spODataEntity;
exports.spODataEntityArray = odata_1.spODataEntityArray;
var sharepointqueryable_1 = __webpack_require__(1);
exports.SharePointQueryable = sharepointqueryable_1.SharePointQueryable;
exports.SharePointQueryableInstance = sharepointqueryable_1.SharePointQueryableInstance;
exports.SharePointQueryableCollection = sharepointqueryable_1.SharePointQueryableCollection;
var roles_1 = __webpack_require__(23);
exports.RoleDefinitionBindings = roles_1.RoleDefinitionBindings;
var search_1 = __webpack_require__(32);
exports.Search = search_1.Search;
exports.SearchQueryBuilder = search_1.SearchQueryBuilder;
exports.SearchResults = search_1.SearchResults;
exports.SortDirection = search_1.SortDirection;
exports.ReorderingRuleMatchType = search_1.ReorderingRuleMatchType;
exports.QueryPropertyValueType = search_1.QueryPropertyValueType;
exports.SearchBuiltInSourceId = search_1.SearchBuiltInSourceId;
var searchsuggest_1 = __webpack_require__(34);
exports.SearchSuggest = searchsuggest_1.SearchSuggest;
exports.SearchSuggestResult = searchsuggest_1.SearchSuggestResult;
var site_1 = __webpack_require__(35);
exports.Site = site_1.Site;
__export(__webpack_require__(42));
__export(__webpack_require__(17));
var utilities_1 = __webpack_require__(43);
exports.UtilityMethod = utilities_1.UtilityMethod;
var webparts_1 = __webpack_require__(38);
exports.WebPartDefinitions = webparts_1.WebPartDefinitions;
exports.WebPartDefinition = webparts_1.WebPartDefinition;
exports.WebPart = webparts_1.WebPart;
var webs_1 = __webpack_require__(11);
exports.Web = webs_1.Web;


/***/ }),
/* 79 */,
/* 80 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),
/* 82 */,
/* 83 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_83__;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_84__;

/***/ }),
/* 85 */
/***/ (function(module, exports) {

(function ( $ ) {
 
    $.fn.richText = function( options ) {

        // set default options
        // and merge them with the parameter options
        var settings = $.extend({
            
            // text formatting
            bold: true,
            italic: true,
            underline: true,

            // text alignment
            leftAlign: true,
            centerAlign: true,
            rightAlign: true,
            justify: true,

            // lists
            ol: true,
            ul: true,

            // title
            heading: true,

            // fonts
            fonts: true,
            fontList: ["Arial", 
                    "Arial Black", 
                    "Comic Sans MS", 
                    "Courier New", 
                    "Geneva", 
                    "Georgia", 
                    "Helvetica", 
                    "Impact", 
                    "Lucida Console", 
                    "Tahoma", 
                    "Times New Roman",
                    "Verdana"
                    ],
            fontColor: true,
            fontSize: true,

            // uploads
            imageUpload: true,
            fileUpload: true,

            // media
            videoEmbed: true,

            // link
            urls: true,

            // tables
            table: true,

            // code
            removeStyles: true,
            code: true,

            // colors
            colors: [],

            // dropdowns
            fileHTML: '',
            imageHTML: '',

            // translations
            translations: {
                'title': 'Title',
                'white': 'White',
                'black': 'Black',
                'brown': 'Brown',
                'beige': 'Beige',
                'darkBlue': 'Dark Blue',
                'blue': 'Blue',
                'lightBlue': 'Light Blue',
                'darkRed': 'Dark Red',
                'red': 'Red',
                'darkGreen': 'Dark Green',
                'green': 'Green',
                'purple': 'Purple',
                'darkTurquois': 'Dark Turquois',
                'turquois': 'Turquois',
                'darkOrange': 'Dark Orange',
                'orange': 'Orange',
                'yellow': 'Yellow',
                'imageURL': 'Image URL',
                'fileURL': 'File URL',
                'linkText': 'Link text',
                'url': 'URL',
                'size': 'Size',
                'responsive': 'Responsive',
                'text': 'Text',
                'openIn': 'Open in',
                'sameTab': 'Same tab',
                'newTab': 'New tab',
                'align': 'Align',
                'left': 'Left',
                'justify': 'Justify',
                'center': 'Center',
                'right': 'Right',
                'rows': 'Rows',
                'columns': 'Columns',
                'add': 'Add',
                'pleaseEnterURL': 'Please enter an URL',
                'videoURLnotSupported': 'Video URL not supported',
                'pleaseSelectImage': 'Please select an image',
                'pleaseSelectFile': 'Please select a file',
                'bold': 'Bold',
                'italic': 'Italic',
                'underline': 'Underline',
                'alignLeft': 'Align left',
                'alignCenter': 'Align centered',
                'alignRight': 'Align right',
                'addOrderedList': 'Add ordered list',
                'addUnorderedList': 'Add unordered list',
                'addHeading': 'Add Heading/title',
                'addFont': 'Add font',
                'addFontColor': 'Add font color',
                'addFontSize' : 'Add font size',
                //'addImage': 'Add image',
                //'addVideo': 'Add video',
               // 'addFile': 'Add file',
               // 'addURL': 'Add URL',
               // 'addTable': 'Add table',
              //  'removeStyles': 'Remove styles',
              //  'code': 'Show HTML code',
                'undo': 'Undo',
                'redo': 'Redo',
                'close': 'Close'
            },

            // privacy
            youtubeCookies: false,

            // dev settings
            useSingleQuotes: false,
            height: 0,
            heightPercentage: 0,
            id: "",
            class: "",
            useParagraph: false

        }, options );


        /* prepare toolbar */
        var $inputElement = $(this);
        $inputElement.addClass("richText-initial");
        var $editor,
            $toolbarList = $('<ul />'),
            $toolbarElement = $('<li />'),
            $btnBold = $('<a />', {class: "richText-btn", "data-command": "bold", "title": settings.translations.bold, html: '<span class="fa fa-bold"></span>'}), // bold
            $btnItalic = $('<a />', {class: "richText-btn", "data-command": "italic", "title": settings.translations.italic, html: '<span class="fa fa-italic"></span>'}), // italic
            $btnUnderline = $('<a />', {class: "richText-btn", "data-command": "underline", "title": settings.translations.underline, html: '<span class="fa fa-underline"></span>'}), // underline
            $btnJustify = $('<a />', {class: "richText-btn", "data-command": "justifyFull", "title": settings.translations.justify, html: '<span class="fa fa-align-justify"></span>'}), // left align
            $btnLeftAlign = $('<a />', {class: "richText-btn", "data-command": "justifyLeft", "title": settings.translations.alignLeft, html: '<span class="fa fa-align-left"></span>'}), // left align
            $btnCenterAlign = $('<a />', {class: "richText-btn", "data-command": "justifyCenter", "title": settings.translations.alignCenter, html: '<span class="fa fa-align-center"></span>'}), // centered
            $btnRightAlign = $('<a />', {class: "richText-btn", "data-command": "justifyRight", "title": settings.translations.alignRight, html: '<span class="fa fa-align-right"></span>'}), // right align
            $btnOL = $('<a />', {class: "richText-btn", "data-command": "insertOrderedList", "title": settings.translations.addOrderedList, html: '<span class="fa fa-list-ol"></span>'}), // ordered list
            $btnUL = $('<a />', {class: "richText-btn", "data-command": "insertUnorderedList", "title": settings.translations.addUnorderedList, html: '<span class="fa fa-list"></span>'}), // unordered list
            $btnHeading = $('<a />', {class: "richText-btn", "title": settings.translations.addHeading, html: '<span class="fa fa-header fa-heading"></span>'}), // title/header
            $btnFont = $('<a />', {class: "richText-btn", "title": settings.translations.addFont, html: '<span class="fa fa-font"></span>'}), // font color
            $btnFontColor = $('<a />', {class: "richText-btn", "title": settings.translations.addFontColor, html: '<span class="fa fa-paint-brush"></span>'}), // font color
            $btnFontSize = $('<a />', {class: "richText-btn", "title": settings.translations.addFontSize, html: '<span class="fa fa-text-height"></span>'}); // font color
            $btnImageUpload = $('<a />', {class: "richText-btn", "title": settings.translations.addImage, html: '<span class="fa fa-image" style="display:none"></span>'}), // image
            $btnVideoEmbed = $('<a />', {class: "richText-btn", "title": settings.translations.addVideo, html: '<span class="fa fa-video-camera fa-video" style="display:none"></span>'}), // video
            $btnFileUpload = $('<a />', {class: "richText-btn", "title": settings.translations.addFile, html: '<span class="fa fa-file-text-o far fa-file-alt" style="display:none"></span>'}), // file
            $btnURLs = $('<a />', {class: "richText-btn", "title": settings.translations.addURL, html: '<span class="fa fa-link" style="display:none"></span>'}), // urls/links
            $btnTable = $('<a />', {class: "richText-btn", "title": settings.translations.addTable, html: '<span class="fa fa-table" style="display:none"></span>'}), // table
          	$btnRemoveStyles = $('<a />', {class: "richText-btn", "data-command": "removeFormat", "title": settings.translations.removeStyles, html: '<span class="fa fa-recycle" style="display:none"></span>'}), // clean up styles
            $btnCode = $('<a />', {class: "richText-btn", "data-command": "toggleCode", "title": settings.translations.code, html: '<span class="fa fa-code" style="display:none"></span>'}); // code

        
        /* prepare toolbar dropdowns */
        var $dropdownOuter = $('<div />', {class: "richText-dropdown-outer"});
        var $dropdownClose = $('<span />', {class: "richText-dropdown-close", html: '<span title="' + settings.translations.close + '"><span class="fa fa-times"></span></span>'});
        var $dropdownList = $('<ul />', {class: "richText-dropdown"}), // dropdown lists
            $dropdownBox = $('<div />', {class: "richText-dropdown"}), // dropdown boxes / custom dropdowns
            $form = $('<div />', {class: "richText-form"}), // symbolic form
            $formItem = $('<div />', {class: 'richText-form-item'}), // form item
            $formLabel = $('<label />'), // form label
            $formInput = $('<input />', {type: "text"}), //form input field
            $formInputFile = $('<input />', {type: "file"}), // form file input field
            $formInputSelect = $('<select />'),
            $formButton = $('<button />', {text: settings.translations.add, class: "btn"}); // button

        /* internal settings */
        var savedSelection; // caret position/selection
        var editorID = "richText-" + Math.random().toString(36).substring(7);
        var ignoreSave = false, $resizeImage = null;

        /* prepare editor history */
        var history = [];
        history[editorID] = [];
        var historyPosition = [];
        historyPosition[editorID] = 0;

        /* list dropdown for titles */
        var $titles = $dropdownList.clone();
        $titles.append($('<li />', {html: '<a data-command="formatBlock" data-option="h1">' + settings.translations.title + ' #1</a>'}));
        $titles.append($('<li />', {html: '<a data-command="formatBlock" data-option="h2">' + settings.translations.title + ' #2</a>'}));
        $titles.append($('<li />', {html: '<a data-command="formatBlock" data-option="h3">' + settings.translations.title + ' #3</a>'}));
        $titles.append($('<li />', {html: '<a data-command="formatBlock" data-option="h4">' + settings.translations.title + ' #4</a>'}));
        $btnHeading.append($dropdownOuter.clone().append($titles.prepend($dropdownClose.clone())));

        /* list dropdown for fonts */
        var fonts = settings.fontList;
        var $fonts = $dropdownList.clone();
        for(var i = 0; i < fonts.length; i++) {
            $fonts.append($('<li />', {html: '<a style="font-family:' + fonts[i] + ';" data-command="fontName" data-option="' + fonts[i] + '">' + fonts[i] + '</a>'}));
        }
        $btnFont.append($dropdownOuter.clone().append($fonts.prepend($dropdownClose.clone())));

        /* list dropdown for font sizes */
        var fontSizes = [24,18,16,14,12];
        var $fontSizes = $dropdownList.clone();
        for(var i = 0; i < fontSizes.length; i++) {
            $fontSizes.append($('<li />', {html: '<a style="font-size:' + fontSizes[i] + 'px;" data-command="fontSize" data-option="' + fontSizes[i] + '">Text '  + fontSizes[i] + 'px</a>'}));
        }
        $btnFontSize.append($dropdownOuter.clone().append($fontSizes.prepend($dropdownClose.clone())));

        /* font colors */
        var $fontColors = $dropdownList.clone();
        $fontColors.html(loadColors("forecolor"));
        $btnFontColor.append($dropdownOuter.clone().append($fontColors.prepend($dropdownClose.clone())));


        /* background colors */
        //var $bgColors = $dropdownList.clone();
        //$bgColors.html(loadColors("hiliteColor"));
        //$btnBGColor.append($dropdownOuter.clone().append($bgColors));

        /* box dropdown for links */
        var $linksDropdown = $dropdownBox.clone();
        var $linksForm = $form.clone().attr("id", "richText-URL").attr("data-editor", editorID);
        $linksForm.append(
            $formItem.clone()
                .append($formLabel.clone().text(settings.translations.url).attr("for", "url"))
                .append($formInput.clone().attr("id", "url"))
               );
        $linksForm.append(
            $formItem.clone()
                .append($formLabel.clone().text(settings.translations.text).attr("for", "urlText"))
                .append($formInput.clone().attr("id", "urlText"))
               );
        $linksForm.append(
            $formItem.clone()
                .append($formLabel.clone().text(settings.translations.openIn).attr("for", "openIn"))
                .append(
                    $formInputSelect
                        .clone().attr("id", "openIn")
                        .append($("<option />", {value: '_self', text: settings.translations.sameTab}))
                        .append($("<option />", {value: '_blank', text: settings.translations.newTab}))
                    )
               );
        $linksForm.append( $formItem.clone().append($formButton.clone()) );
        $linksDropdown.append($linksForm);
        $btnURLs.append($dropdownOuter.clone().append($linksDropdown.prepend($dropdownClose.clone())));

        /* box dropdown for video embedding */
        var $videoDropdown = $dropdownBox.clone();
        var $videoForm = $form.clone().attr("id", "richText-Video").attr("data-editor", editorID);
        $videoForm.append(
            $formItem.clone()
                .append($formLabel.clone().text(settings.translations.url).attr("for", "videoURL"))
                .append($formInput.clone().attr("id", "videoURL"))
            );
        $videoForm.append(
            $formItem.clone()
                .append($formLabel.clone().text(settings.translations.size).attr("for", "size"))
                .append(
                        $formInputSelect
                            .clone().attr("id", "size")
                            .append($("<option />", {value: 'responsive', text: settings.translations.responsive}))
                            .append($("<option />", {value: '640x360', text: '640x360'}))
                            .append($("<option />", {value: '560x315', text: '560x315'}))
                            .append($("<option />", {value: '480x270', text: '480x270'}))
                            .append($("<option />", {value: '320x180', text: '320x180'}))
                        )
                   );
        $videoForm.append( $formItem.clone().append($formButton.clone()) );
        $videoDropdown.append($videoForm);
        $btnVideoEmbed.append($dropdownOuter.clone().append($videoDropdown.prepend($dropdownClose.clone())));

        /* box dropdown for image upload/image selection */
        var $imageDropdown = $dropdownBox.clone();
        var $imageForm = $form.clone().attr("id", "richText-Image").attr("data-editor", editorID);

        if(settings.imageHTML 
            && ($(settings.imageHTML).find('#imageURL').length > 0 || $(settings.imageHTML).attr("id") === "imageURL")) {
            // custom image form
            $imageForm.html(settings.imageHTML);
        } else {
            // default image form
            $imageForm.append(
                $formItem.clone()
                    .append($formLabel.clone().text(settings.translations.imageURL).attr("for", "imageURL"))
                    .append($formInput.clone().attr("id", "imageURL"))
                   );
            $imageForm.append(
                $formItem.clone()
                    .append($formLabel.clone().text(settings.translations.align).attr("for", "align"))
                    .append(
                        $formInputSelect
                            .clone().attr("id", "align")
                            .append($("<option />", {value: 'left', text: settings.translations.left}))
                            .append($("<option />", {value: 'center', text: settings.translations.center}))
                            .append($("<option />", {value: 'right', text: settings.translations.right}))
                        )
                   );
        }
        $imageForm.append( $formItem.clone().append($formButton.clone()) );
        $imageDropdown.append($imageForm);
        $btnImageUpload.append($dropdownOuter.clone().append($imageDropdown.prepend($dropdownClose.clone())));

        /* box dropdown for file upload/file selection */
        var $fileDropdown = $dropdownBox.clone();
        var $fileForm = $form.clone().attr("id", "richText-File").attr("data-editor", editorID);

        if(settings.fileHTML 
            && ($(settings.fileHTML).find('#fileURL').length > 0 || $(settings.fileHTML).attr("id") === "fileURL")) {
            // custom file form
            $fileForm.html(settings.fileHTML);
        } else {
            // default file form
            $fileForm.append(
                $formItem.clone()
                    .append($formLabel.clone().text(settings.translations.fileURL).attr("for", "fileURL"))
                    .append($formInput.clone().attr("id", "fileURL"))
                );
            $fileForm.append(
                $formItem.clone()
                    .append($formLabel.clone().text(settings.translations.linkText).attr("for", "fileText"))
                    .append($formInput.clone().attr("id", "fileText"))
                );
        }
        $fileForm.append( $formItem.clone().append($formButton.clone()) );
        $fileDropdown.append($fileForm);
        $btnFileUpload.append($dropdownOuter.clone().append($fileDropdown.prepend($dropdownClose.clone())));

        /* box dropdown for tables */
        var $tableDropdown = $dropdownBox.clone();
        var $tableForm = $form.clone().attr("id", "richText-Table").attr("data-editor", editorID);
        $tableForm.append(
            $formItem.clone()
                .append($formLabel.clone().text(settings.translations.rows).attr("for", "tableRows"))
                .append($formInput.clone().attr("id", "tableRows").attr("type", "number"))
            );
        $tableForm.append(
            $formItem.clone()
                .append($formLabel.clone().text(settings.translations.columns).attr("for", "tableColumns"))
                .append($formInput.clone().attr("id", "tableColumns").attr("type", "number"))
            );
        $tableForm.append( $formItem.clone().append($formButton.clone()) );
        $tableDropdown.append($tableForm);
        $btnTable.append($dropdownOuter.clone().append($tableDropdown.prepend($dropdownClose.clone())));


        /* initizalize editor */
        function init() {
            var value, attributes, attributes_html = '';

            if(settings.useParagraph !== false) {
                // set default tag when pressing ENTER to <p> instead of <div>
                document.execCommand("DefaultParagraphSeparator", false, 'p');
            }


            // reformat $inputElement to textarea
            if($inputElement.prop("tagName") === "TEXTAREA") {
                // everything perfect
            } else if($inputElement.val()) {
                value = $inputElement.val();
                attributes = $inputElement.prop("attributes");
                // loop through <select> attributes and apply them on <div>
                $.each(attributes, function() {
                    if(this.name) {
                        attributes_html += ' ' + this.name + '="' + this.value + '"';
                    }
                });
                $inputElement.replaceWith($('<textarea' + attributes_html + ' data-richtext="init">' + value + '</textarea>'));
                $inputElement = $('[data-richtext="init"]');
                $inputElement.removeAttr("data-richtext");
            } else if($inputElement.html()) {
                value = $inputElement.html();
                attributes = $inputElement.prop("attributes");
                // loop through <select> attributes and apply them on <div>
                $.each(attributes, function() {
                    if(this.name) {
                        attributes_html += ' ' + this.name + '="' + this.value + '"';
                    }
                });
                $inputElement.replaceWith($('<textarea' + attributes_html + ' data-richtext="init">' + value + '</textarea>'));
                $inputElement = $('[data-richtext="init"]');
                $inputElement.removeAttr("data-richtext");
            } else {
                attributes = $inputElement.prop("attributes");
                // loop through <select> attributes and apply them on <div>
                $.each(attributes, function() {
                    if(this.name) {
                        attributes_html += ' ' + this.name + '="' + this.value + '"';
                    }
                });
                $inputElement.replaceWith($('<textarea' + attributes_html + ' data-richtext="init"></textarea>'));
                $inputElement = $('[data-richtext="init"]');
                $inputElement.removeAttr("data-richtext");
            }

            $editor = $('<div />', {class: "richText"});
            var $toolbar = $('<div />', {class: "richText-toolbar"});
            var $editorView = $('<div />', {class: "richText-editor", id: editorID, contenteditable: true});
            $toolbar.append($toolbarList);

            /* text formatting */
            if(settings.bold === true) {
                $toolbarList.append($toolbarElement.clone().append($btnBold));
            }
            if(settings.italic === true) {
                $toolbarList.append($toolbarElement.clone().append($btnItalic));
            }
            if(settings.underline === true) {
                $toolbarList.append($toolbarElement.clone().append($btnUnderline));
            }

            /* align */
            if(settings.leftAlign === true) {
                $toolbarList.append($toolbarElement.clone().append($btnLeftAlign));
            }
            if(settings.centerAlign === true) {
                $toolbarList.append($toolbarElement.clone().append($btnCenterAlign));
            }
            if(settings.rightAlign === true) {
                $toolbarList.append($toolbarElement.clone().append($btnRightAlign));
            }
            if(settings.justify === true) {
                $toolbarList.append($toolbarElement.clone().append($btnJustify));
            }

            /* lists */
            if(settings.ol === true) {
                $toolbarList.append($toolbarElement.clone().append($btnOL));
            }
            if(settings.ul === true) {
                $toolbarList.append($toolbarElement.clone().append($btnUL));
            }

            /* fonts */
            if(settings.fonts === true && settings.fontList.length > 0) {
                $toolbarList.append($toolbarElement.clone().append($btnFont));
            }
            if(settings.fontSize === true) {
                $toolbarList.append($toolbarElement.clone().append($btnFontSize));
            }

            /* heading */
            if(settings.heading === true) {
                $toolbarList.append($toolbarElement.clone().append($btnHeading));
            }

            /* colors */
            if(settings.fontColor === true) {
                $toolbarList.append($toolbarElement.clone().append($btnFontColor));
            }

            /* uploads */
            if(settings.imageUpload === true) {
                $toolbarList.append($toolbarElement.clone().append($btnImageUpload));
            }
            if(settings.fileUpload === true) {
                $toolbarList.append($toolbarElement.clone().append($btnFileUpload));
            }

            /* media */
            if(settings.videoEmbed === true) {
                $toolbarList.append($toolbarElement.clone().append($btnVideoEmbed));
            }

            /* urls */
            if(settings.urls === true) {
                $toolbarList.append($toolbarElement.clone().append($btnURLs));
            }

            if(settings.table === true) {
                $toolbarList.append($toolbarElement.clone().append($btnTable));
            }

            /* code */
            if(settings.removeStyles === true) {
                $toolbarList.append($toolbarElement.clone().append($btnRemoveStyles));
            }
            if(settings.code === true) {
                $toolbarList.append($toolbarElement.clone().append($btnCode));
            }

            // set current textarea value to editor
            $editorView.html($inputElement.val());

            $editor.append($toolbar);
            $editor.append($editorView);
            $editor.append($inputElement.clone().hide());
            $inputElement.replaceWith($editor);

            // append bottom toolbar
            $editor.append(
                $('<div />', {class: 'richText-toolbar'})
                    .append($('<a />', {class: 'richText-undo is-disabled', html: '<span class="fa fa-undo" style="display:none"></span>', 'title': settings.translations.undo}))
                    .append($('<a />', {class: 'richText-redo is-disabled', html: '<span class="fa fa-repeat fa-redo" style="display:none"></span>', 'title': settings.translations.redo}))
                    .append($('<a />', {class: 'richText-help', html: '<span class="fa fa-question-circle"></span>'}))
            );

            if(settings.height && settings.height > 0) {
                // set custom editor height
                $editor.children(".richText-editor, .richText-initial").css({'min-height' : settings.height + 'px', 'height' : settings.height + 'px'});
            } else if(settings.heightPercentage && settings.heightPercentage > 0) {
                // set custom editor height in percentage
                var parentHeight = $editor.parent().innerHeight(); // get editor parent height
                var height = (settings.heightPercentage/100) * parentHeight; // calculate pixel value from percentage
                height -= $toolbar.outerHeight()*2; // remove toolbar size
                height -= parseInt($editor.css("margin-top")); // remove margins
                height -= parseInt($editor.css("margin-bottom")); // remove margins
                height -= parseInt($editor.find(".richText-editor").css("padding-top")); // remove paddings
                height -= parseInt($editor.find(".richText-editor").css("padding-bottom")); // remove paddings
                $editor.children(".richText-editor, .richText-initial").css({'min-height' : height + 'px', 'height' : height + 'px'});
            }

            // add custom class
            if(settings.class) {
                $editor.addClass(settings.class);
            }
            if(settings.id) {
                $editor.attr("id", settings.id);
            }

            // fix the first line
            fixFirstLine();

            // save history
            history[editorID].push($editor.find("textarea").val());
        }

        // initialize editor
        init();


        /** EVENT HANDLERS */

        // Help popup
        $editor.find(".richText-help").on("click", function() {
            var $editor = $(this).parents(".richText");
            if($editor) {
                var $outer = $('<div />', {class: 'richText-help-popup', style: 'position:absolute;top:0;right:0;bottom:0;left:0;background-color: rgba(0,0,0,0.3);'});
                var $inner = $('<div />', {style: 'position:relative;margin:60px auto;padding:20px;background-color:#FAFAFA;width:70%;font-family:Calibri,Verdana,Helvetica,sans-serif;font-size:small;'});
                var $content = $('<div />', {html: '<span id="closeHelp" style="display:block;position:absolute;top:0;right:0;padding:10px;cursor:pointer;" title="' + settings.translations.close + '"><span class="fa fa-times"></span></span>'});
                $content.append('<h3 style="margin:0;">RichText</h3>');
                $content.append('<hr><br>Powered by <a href="https://github.com/webfashionist/RichText" target="_blank">webfashionist/RichText</a> (Github) <br>License: <a href="https://github.com/webfashionist/RichText/blob/master/LICENSE" target="_blank">AGPL-3.0</a>');

                $outer.append($inner.append($content));
                $editor.append($outer);

                $outer.on("click", "#closeHelp", function() {
                    $(this).parents('.richText-help-popup').remove();
                });
            }
        });

        // undo / redo
        $(document).on("click", ".richText-undo, .richText-redo", function(e) {
             var $this = $(this);
             var $editor = $this.parents('.richText');
             if($this.hasClass("richText-undo") && !$this.hasClass("is-disabled")) {
                 undo($editor);
             } else if($this.hasClass("richText-redo") && !$this.hasClass("is-disabled")) {
                 redo($editor);
             }
        });


        // Saving changes from editor to textarea
        $(document).on("input change blur keydown keyup", ".richText-editor", function(e) {
            if((e.keyCode === 9 || e.keyCode === "9") && e.type === "keydown") {
                // tab through table cells
                e.preventDefault();
                tabifyEditableTable(window, e);
                return false;
            }
            fixFirstLine();
            updateTextarea();
            doSave($(this).attr("id"));
        });


        // add context menu to several Node elements
        $(document).on('contextmenu', '.richText-editor', function(e) {

            var $list = $('<ul />', {'class': 'list-rightclick richText-list'});
            var $li = $('<li />');
            // remove Node selection
            $('.richText-editor').find('.richText-editNode').removeClass('richText-editNode');

            var $target = $(e.target);
            var $richText = $target.parents('.richText');
            var $toolbar = $richText.find('.richText-toolbar');

            var positionX = e.pageX - $richText.offset().left;
            var positionY = e.pageY - $richText.offset().top;

            $list.css({
                'top': positionY,
                'left': positionX
            });


            if($target.prop("tagName") === "A") {
                // edit URL
                e.preventDefault();

                $list.append($li.clone().html('<span class="fa fa-link"></span>'));
                $target.parents('.richText').append($list);
                $list.find('.fa-link').on('click', function() {
                    $('.list-rightclick.richText-list').remove();
                    $target.addClass('richText-editNode');
                    var $popup = $toolbar.find('#richText-URL');
                    $popup.find('input#url').val($target.attr('href'));
                    $popup.find('input#urlText').val($target.text());
                    $popup.find('select#openIn').val($target.attr('target'));
                    $toolbar.find('.richText-btn').children('.fa-link').parents('li').addClass('is-selected');
                });

                return false;
            } else if($target.prop("tagName") === "IMG") {
                // edit image
                e.preventDefault();

                $list.append($li.clone().html('<span class="fa fa-image"></span>'));
                $target.parents('.richText').append($list);
                $list.find('.fa-image').on('click', function() {
                    var align;
                    if($target.parent('div').length > 0 && $target.parent('div').attr('style') === 'text-align:center;') {
                        align = 'center';
                    } else {
                        align = $target.attr('align');
                    }
                    $('.list-rightclick.richText-list').remove();
                    $target.addClass('richText-editNode');
                    var $popup = $toolbar.find('#richText-Image');
                    $popup.find('input#imageURL').val($target.attr('src'));
                    $popup.find('select#align').val(align);
                    $toolbar.find('.richText-btn').children('.fa-image').parents('li').addClass('is-selected');
                });

                return false;
            }

        });

        // Saving changes from textarea to editor
        $(document).on("input change blur", ".richText-initial", function() {
            if(settings.useSingleQuotes === true) {
                $(this).val(changeAttributeQuotes($(this).val()));
            }
            var editorID = $(this).siblings('.richText-editor').attr("id");
            updateEditor(editorID);
            doSave(editorID);
        });

        // Save selection seperately (mainly needed for Safari)
        $(document).on("dblclick mouseup", ".richText-editor", function() {
            var editorID = $(this).attr("id");
            doSave(editorID);
        });

        // embedding video
        $(document).on("click", "#richText-Video button.btn", function(event) {
            event.preventDefault();
            var $button = $(this);
            var $form = $button.parent('.richText-form-item').parent('.richText-form');
            if($form.attr("data-editor") === editorID) {
                // only for the currently selected editor
                var url = $form.find('input#videoURL').val();
                var size = $form.find('select#size').val();

                if(!url) {
                    // no url set
                    $form.prepend($('<div />', {style: 'color:red;display:none;', class: 'form-item is-error', text: settings.translations.pleaseEnterURL}));
                    $form.children('.form-item.is-error').slideDown();
                    setTimeout(function() {
                        $form.children('.form-item.is-error').slideUp(function () {
                            $(this).remove();
                        });
                    }, 5000);
                } else {
                    // write html in editor
                    var html = '';
                    html = getVideoCode(url, size);
                    if(!html) {
                        $form.prepend($('<div />', {style: 'color:red;display:none;', class: 'form-item is-error', text: settings.translations.videoURLnotSupported}));
                        $form.children('.form-item.is-error').slideDown();
                        setTimeout(function() {
                            $form.children('.form-item.is-error').slideUp(function () {
                                $(this).remove();
                            });
                        }, 5000);
                    } else {
                        if(settings.useSingleQuotes === true) {

                        } else {

                        }
                        restoreSelection(editorID, true);
                        pasteHTMLAtCaret(html);
                        updateTextarea();
                        // reset input values
                        $form.find('input#videoURL').val('');
                        $('.richText-toolbar li.is-selected').removeClass("is-selected");
                    }
                }
            }
        });

        // Resize images
        $(document).on('mousedown', function(e) {
            var $target = $(e.target);
            if(!$target.hasClass('richText-list') && $target.parents('.richText-list').length === 0) {
                // remove context menu
                $('.richText-list.list-rightclick').remove();
                if(!$target.hasClass('richText-form') && $target.parents('.richText-form').length === 0) {
                    $('.richText-editNode').each(function () {
                        var $this = $(this);
                        $this.removeClass('richText-editNode');
                        if ($this.attr('class') === '') {
                            $this.removeAttr('class');
                        }
                    });
                }
            }
            if($target.prop("tagName") === "IMG" && $target.parents("#" + editorID)) {
                startX = e.pageX;
                startY = e.pageY;
                startW = $target.innerWidth();
                startH = $target.innerHeight();

                var left = $target.offset().left;
                var right = $target.offset().left + $target.innerWidth();
                var bottom = $target.offset().top + $target.innerHeight();
                var top = $target.offset().top;
                var resize = false;
                $target.css({'cursor' : 'default'});

                if(startY <= bottom && startY >= bottom-20 && startX >= right-20 && startX <= right) {
                    // bottom right corner
                    $resizeImage = $target;
                    $resizeImage.css({'cursor' : 'nwse-resize'});
                    resize = true;
                }

                if((resize === true || $resizeImage) && !$resizeImage.data("width")) {
                    // set initial image size and prevent dragging image while resizing
                    $resizeImage.data("width", $target.parents("#" + editorID).innerWidth());
                    $resizeImage.data("height", $target.parents("#" + editorID).innerHeight()*3);
                    e.preventDefault();
                } else if(resize === true || $resizeImage) {
                    // resizing active, prevent other events
                    e.preventDefault();
                } else {
                    // resizing disabled, allow dragging image
                    $resizeImage = null;
                }
                
            }
        });
        $(document)
            .mouseup(function(){
                if($resizeImage) {
                    $resizeImage.css({'cursor' : 'default'});
                }
                $resizeImage = null;
            })
            .mousemove(function(e){
                if($resizeImage!==null){
                    var maxWidth = $resizeImage.data('width');
                    var currentWidth = $resizeImage.width();
                    var maxHeight = $resizeImage.data('height');
                    var currentHeight = $resizeImage.height();
                    if((startW + e.pageX-startX) <= maxWidth && (startH + e.pageY-startY) <= maxHeight) {
                        // only resize if new size is smaller than the original image size
                        $resizeImage.innerWidth (startW + e.pageX-startX); // only resize width to adapt height proportionally
                        // $box.innerHeight(startH + e.pageY-startY);
                        updateTextarea();
                    } else if((startW + e.pageX-startX) <= currentWidth && (startH + e.pageY-startY) <= currentHeight) {
                        // only resize if new size is smaller than the previous size
                        $resizeImage.innerWidth (startW + e.pageX-startX); // only resize width to adapt height proportionally
                        updateTextarea();
                    }
                }
            });

        // adding URL
        $(document).on("click", "#richText-URL button.btn", function(event) {
            event.preventDefault();
            var $button = $(this);
            var $form = $button.parent('.richText-form-item').parent('.richText-form');
            if($form.attr("data-editor") === editorID) {
                // only for currently selected editor
                var url = $form.find('input#url').val();
                var text = $form.find('input#urlText').val();
                var target = $form.find('#openIn').val();

                // set default values
                if(!target) {
                    target = '_self';
                }
                if(!text) {
                    text = url;
                }
                if(!url) {
                    // no url set
                    $form.prepend($('<div />', {style: 'color:red;display:none;', class: 'form-item is-error', text: settings.translations.pleaseEnterURL}));
                    $form.children('.form-item.is-error').slideDown();
                    setTimeout(function() {
                        $form.children('.form-item.is-error').slideUp(function () {
                            $(this).remove();
                        });
                    }, 5000);
                } else {
                    // write html in editor
                    var html = '';
                    if(settings.useSingleQuotes === true) {
                        html = "<a href='" + url + "' target='" + target + "'>" + text + "</a>";
                    } else {
                        html = '<a href="' + url + '" target="' + target + '">' + text + '</a>';
                    }
                    restoreSelection(editorID, false, true);

                    var $editNode = $('.richText-editNode');
                    if($editNode.length > 0 && $editNode.prop("tagName") === "A") {
                        $editNode.attr("href", url);
                        $editNode.attr("target", target);
                        $editNode.text(text);
                        $editNode.removeClass('richText-editNode');
                        if($editNode.attr('class') === '') {
                            $editNode.removeAttr('class');
                        }
                    } else {
                        pasteHTMLAtCaret(html);
                    }
                    // reset input values
                    $form.find('input#url').val('');
                    $form.find('input#urlText').val('');
                    $('.richText-toolbar li.is-selected').removeClass("is-selected");
                }
            }
        });

        // adding image
        $(document).on("click", "#richText-Image button.btn", function(event) {
            event.preventDefault();
            var $button = $(this);
            var $form = $button.parent('.richText-form-item').parent('.richText-form');
            if($form.attr("data-editor") === editorID) {
                // only for currently selected editor
                var url = $form.find('#imageURL').val();
                var align = $form.find('select#align').val();

                // set default values
                if(!align) {
                    align = 'center';
                }
                if(!url) {
                    // no url set
                    $form.prepend($('<div />', {style: 'color:red;display:none;', class: 'form-item is-error', text: settings.translations.pleaseSelectImage}));
                    $form.children('.form-item.is-error').slideDown();
                    setTimeout(function() {
                        $form.children('.form-item.is-error').slideUp(function () {
                            $(this).remove();
                        });
                    }, 5000);
                } else {
                    // write html in editor
                    var html = '';
                    if(settings.useSingleQuotes === true) {
                        if(align === "center") {
                            html = "<div style='text-align:center;'><img src='" + url + "'></div>";
                        } else {
                            html = "<img src='" + url + "' align='" + align + "'>";
                        }
                    } else {
                        if(align === "center") {
                            html = '<div style="text-align:center;"><img src="' + url + '"></div>';
                        } else {
                            html = '<img src="' + url + '" align="' + align + '">';
                        }
                    }
                    restoreSelection(editorID, true);
                    var $editNode = $('.richText-editNode');
                    if($editNode.length > 0 && $editNode.prop("tagName") === "IMG") {
                        $editNode.attr("src", url);
                        if($editNode.parent('div').length > 0 && $editNode.parent('div').attr('style') === 'text-align:center;' && align !== 'center') {
                            $editNode.unwrap('div');
                            $editNode.attr('align', align);
                        } else if(($editNode.parent('div').length === 0 || $editNode.parent('div').attr('style') !== 'text-align:center;') && align === 'center' ) {
                            $editNode.wrap('<div style="text-align:center;"></div>');
                            $editNode.removeAttr('align');
                        } else {
                            $editNode.attr('align', align);
                        }
                        $editNode.removeClass('richText-editNode');
                        if($editNode.attr('class') === '') {
                            $editNode.removeAttr('class');
                        }
                    } else {
                        pasteHTMLAtCaret(html);
                    }
                    // reset input values
                    $form.find('input#imageURL').val('');
                    $('.richText-toolbar li.is-selected').removeClass("is-selected");
                }
            }
        });

        // adding file
        $(document).on("click", "#richText-File button.btn", function(event) {
            event.preventDefault();
            var $button = $(this);
            var $form = $button.parent('.richText-form-item').parent('.richText-form');
            if($form.attr("data-editor") === editorID) {
                // only for currently selected editor
                var url = $form.find('#fileURL').val();
                var text = $form.find('#fileText').val();

                // set default values
                if(!text) {
                    text = url;
                }
                if(!url) {
                    // no url set
                    $form.prepend($('<div />', {style: 'color:red;display:none;', class: 'form-item is-error', text: settings.translations.pleaseSelectFile}));
                    $form.children('.form-item.is-error').slideDown();
                    setTimeout(function() {
                        $form.children('.form-item.is-error').slideUp(function () {
                            $(this).remove();
                        });
                    }, 5000);
                } else {
                    // write html in editor
                    var html = '';
                    if(settings.useSingleQuotes === true) {
                        html = "<a href='" + url + "' target='_blank'>" + text + "</a>";
                    } else {
                        html = '<a href="' + url + '" target="_blank">' + text + '</a>';
                    }
                    restoreSelection(editorID, true);
                    pasteHTMLAtCaret(html);
                    // reset input values
                    $form.find('input#fileURL').val('');
                    $form.find('input#fileText').val('');
                    $('.richText-toolbar li.is-selected').removeClass("is-selected");
                }
            }
        });


        // adding table
        $(document).on("click", "#richText-Table button.btn", function(event) {
            event.preventDefault();
            var $button = $(this);
            var $form = $button.parent('.richText-form-item').parent('.richText-form');
            if($form.attr("data-editor") === editorID) {
                // only for currently selected editor
                var rows = $form.find('input#tableRows').val();
                var columns = $form.find('input#tableColumns').val();

                // set default values
                if(!rows || rows <= 0) {
                    rows = 2;
                }
                if(!columns || columns <= 0) {
                    columns = 2;
                }
                
                // generate table
                var html = '';
                if(settings.useSingleQuotes === true) {
                    html = "<table class='table-1'><tbody>";
                } else {
                    html = '<table class="table-1"><tbody>';
                }
                for(var i = 1; i <= rows; i++) {
                    // start new row
                    html += '<tr>';
                    for(var n = 1; n <= columns; n++) {
                        // start new column in row
                        html += '<td> </td>';
                    }
                    html += '</tr>';
                }
                html += '</tbody></table>';

                // write html in editor
                restoreSelection(editorID, true);
                pasteHTMLAtCaret(html);
                // reset input values
                $form.find('input#tableColumns').val('');
                $form.find('input#tableRows').val('');
                $('.richText-toolbar li.is-selected').removeClass("is-selected");
            }
        });

        // opening / closing toolbar dropdown
        $(document).on("click", function(event) {
            var $clickedElement = $(event.target);

            if($clickedElement.parents('.richText-toolbar').length === 0) {
                // element not in toolbar
                // ignore
            } else if($clickedElement.hasClass("richText-dropdown-outer")) {
                // closing dropdown by clicking inside the editor
                $clickedElement.parent('a').parent('li').removeClass("is-selected");
            } else if($clickedElement.find(".richText").length > 0) {
                // closing dropdown by clicking outside of the editor
                $('.richText-toolbar li').removeClass("is-selected");
            } else if($clickedElement.parent().hasClass("richText-dropdown-close")) {
                // closing dropdown by clicking on the close button
                $('.richText-toolbar li').removeClass("is-selected");
            } else if($clickedElement.hasClass("richText-btn") && $(event.target).children('.richText-dropdown-outer').length > 0) {
                // opening dropdown by clicking on toolbar button
                $clickedElement.parent('li').addClass("is-selected");

                if($clickedElement.children('.fa,svg').hasClass("fa-link")) {
                    // put currently selected text in URL form to replace it
                    restoreSelection(editorID, false, true);
                    var selectedText = getSelectedText();
                    $clickedElement.find("input#urlText").val('');
                    $clickedElement.find("input#url").val('');
                    if(selectedText) {
                        $clickedElement.find("input#urlText").val(selectedText);
                    }
                } else if($clickedElement.hasClass("fa-image")) {
                    // image
                }
            }
        });

        // Executing editor commands
        $(document).on("click", ".richText-toolbar a[data-command]", function(event) {
            var $button = $(this);
            var $toolbar = $button.closest('.richText-toolbar');
            var $editor = $toolbar.siblings('.richText-editor');
            var id = $editor.attr("id");
            if($editor.length > 0 && id === editorID && (!$button.parent("li").attr('data-disable') || $button.parent("li").attr('data-disable') === "false")) {
                event.preventDefault();
                var command = $(this).data("command");

                if(command === "toggleCode") {
                    toggleCode($editor.attr("id"));
                } else {
                    var option = null;
                    if ($(this).data('option')) {
                        option = $(this).data('option').toString();
                        if (option.match(/^h[1-6]$/)) {
                            command = "heading";
                        }
                    }

                    formatText(command, option, id);
                    if (command === "removeFormat") {
                        // remove HTML/CSS formatting
                        $editor.find('*').each(function() {
                            // remove all, but very few, attributes from the nodes
                            var keepAttributes = [
                                "id", "class",
                                "name", "action", "method",
                                "src", "align", "alt", "title",
                                "style", "webkitallowfullscreen", "mozallowfullscreen", "allowfullscreen",
                                "width", "height", "frameborder"
                            ];
                            var element = $(this);
                            var attributes = $.map(this.attributes, function(item) {
                                return item.name;
                            });
                            $.each(attributes, function(i, item) {
                                if(keepAttributes.indexOf(item) < 0 && item.substr(0, 5) !== 'data-') {
                                    element.removeAttr(item);
                                }
                            });
                            if(element.prop('tagName') === "A") {
                                // remove empty URL tags
                                element.replaceWith(function() {
                                    return $('<span />', {html: $(this).html()});
                                });
                            }
                        });
                        formatText('formatBlock', 'div', id);
                    }
                    // clean up empty tags, which can be created while replacing formatting or when copy-pasting from other tools
                    $editor.find('div:empty,p:empty,li:empty,h1:empty,h2:empty,h3:empty,h4:empty,h5:empty,h6:empty').remove();
                    $editor.find('h1,h2,h3,h4,h5,h6').unwrap('h1,h2,h3,h4,h5,h6');
                }
            }
            // close dropdown after click
            $button.parents('li.is-selected').removeClass('is-selected');
        });



        /** INTERNAL METHODS **/

        /**
         * Format text in editor
         * @param {string} command
         * @param {string|null} option
         * @param {string} editorID
         * @private
         */
        function formatText(command, option, editorID) {
            if (typeof option === "undefined") {
                option = null;
            }
            // restore selection from before clicking on any button
            doRestore(editorID);
            // Temporarily enable designMode so that
            // document.execCommand() will work
            // document.designMode = "ON";
            // Execute the command
            if(command === "heading" && getSelectedText()) {
                // IE workaround
                pasteHTMLAtCaret('<' + option + '>' + getSelectedText() + '</' + option + '>');
            } else if(command === "fontSize" && parseInt(option) > 0) {
                var selection = getSelectedText();
                selection = (selection + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
                var html = (settings.useSingleQuotes ? "<span style='font-size:" + option + "px;'>" + selection + "</span>" : '<span style="font-size:' + option + 'px;">' + selection + '</span>');
                pasteHTMLAtCaret(html);
            } else {
                document.execCommand(command, false, option);
            }
            // Disable designMode
            // document.designMode = "OFF";
        }


        /**
         * Update textarea when updating editor
         * @private
         */
        function updateTextarea() {
            var $editor = $('#' + editorID);
            var content = $editor.html();
            if(settings.useSingleQuotes === true) {
                content = changeAttributeQuotes(content);
            }
            $editor.siblings('.richText-initial').val(content);
        }


        /**
         * Update editor when updating textarea
         * @private
         */
        function updateEditor(editorID) {
            var $editor = $('#' + editorID);
            var content = $editor.siblings('.richText-initial').val();
            $editor.html(content);
        }


        /**
         * Save caret position and selection
         * @return object
         **/
        function saveSelection(editorID) {
            var containerEl = document.getElementById(editorID);
            var range, start, end, type;
            if(window.getSelection && document.createRange) {
                var sel = window.getSelection && window.getSelection();
                if (sel && sel.rangeCount > 0 && $(sel.anchorNode).parents('#' + editorID).length > 0) {
                    range = window.getSelection().getRangeAt(0);
                    var preSelectionRange = range.cloneRange();
                    preSelectionRange.selectNodeContents(containerEl);
                    preSelectionRange.setEnd(range.startContainer, range.startOffset);
                    
                    start = preSelectionRange.toString().length;
                    end = (start + range.toString().length);

                    type = (start === end ? 'caret' : 'selection');
                    anchor = sel.anchorNode; //(type === "caret" && sel.anchorNode.tagName ? sel.anchorNode : false);
                    start = (type === 'caret' && anchor !== false ? 0 : preSelectionRange.toString().length);
                    end = (type === 'caret' && anchor !== false ? 0 : (start + range.toString().length));

                    return {
                        start: start,
                        end: end,
                        type: type,
                        anchor: anchor,
                        editorID: editorID
                    }
                }
            }
            return (savedSelection ? savedSelection : {
                        start: 0,
                        end: 0
                    });
        }


        /**
         * Restore selection
         **/
        function restoreSelection(editorID, media, url) {
            var containerEl = document.getElementById(editorID);
            var savedSel = savedSelection;
            if(!savedSel) {
                // fix selection if editor has not been focused
                savedSel = {
                    'start': 0,
                    'end': 0,
                    'type': 'caret',
                    'editorID': editorID,
                    'anchor': $('#' + editorID).children('div')[0]
                };
            }

            if(savedSel.editorID !== editorID) {
                return false;
            } else if(media === true) {
                containerEl = (savedSel.anchor ? savedSel.anchor : containerEl); // fix selection issue
            } else if(url === true) {
                if(savedSel.start === 0 && savedSel.end === 0) {
                    containerEl = (savedSel.anchor ? savedSel.anchor : containerEl); // fix selection issue
                }
            }

            if (window.getSelection && document.createRange) {
                var charIndex = 0, range = document.createRange();
                if(!range || !containerEl) { window.getSelection().removeAllRanges(); return true; }
                range.setStart(containerEl, 0);
                range.collapse(true);
                var nodeStack = [containerEl], node, foundStart = false, stop = false;

                while (!stop && (node = nodeStack.pop())) {
                    if (node.nodeType === 3) {
                        var nextCharIndex = charIndex + node.length;
                        if (!foundStart && savedSel.start >= charIndex && savedSel.start <= nextCharIndex) {
                            range.setStart(node, savedSel.start - charIndex);
                            foundStart = true;
                        }
                        if (foundStart && savedSel.end >= charIndex && savedSel.end <= nextCharIndex) {
                            range.setEnd(node, savedSel.end - charIndex);
                            stop = true;
                        }
                        charIndex = nextCharIndex;
                    } else {
                        var i = node.childNodes.length;
                        while (i--) {
                            nodeStack.push(node.childNodes[i]);
                        }
                    }
                }
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }



        /**
         * Save caret position and selection
         * @return object
         **/
         /*
        function saveSelection(editorID) {
            var containerEl = document.getElementById(editorID);
            var start;
            if (window.getSelection && document.createRange) {
                var sel = window.getSelection && window.getSelection();
                if (sel && sel.rangeCount > 0) {
                    var range = window.getSelection().getRangeAt(0);
                    var preSelectionRange = range.cloneRange();
                    preSelectionRange.selectNodeContents(containerEl);
                    preSelectionRange.setEnd(range.startContainer, range.startOffset);
                    start = preSelectionRange.toString().length;

                    return {
                        start: start,
                        end: start + range.toString().length,
                        editorID: editorID
                    }
                } else {
                    return (savedSelection ? savedSelection : {
                        start: 0,
                        end: 0
                    });
                }
            } else if (document.selection && document.body.createTextRange) {
                var selectedTextRange = document.selection.createRange();
                var preSelectionTextRange = document.body.createTextRange();
                preSelectionTextRange.moveToElementText(containerEl);
                preSelectionTextRange.setEndPoint("EndToStart", selectedTextRange);
                start = preSelectionTextRange.text.length;

                return {
                    start: start,
                    end: start + selectedTextRange.text.length,
                    editorID: editorID
                };
            }
        }
        */

        /**
         * Restore selection
         **/
         /*
        function restoreSelection(editorID) {
            var containerEl = document.getElementById(editorID);
            var savedSel = savedSelection;
            if(savedSel.editorID !== editorID) {
                return false;
            }
            if (window.getSelection && document.createRange) {
                var charIndex = 0, range = document.createRange();
                range.setStart(containerEl, 0);
                range.collapse(true);
                var nodeStack = [containerEl], node, foundStart = false, stop = false;

                while (!stop && (node = nodeStack.pop())) {
                    if (node.nodeType === 3) {
                        var nextCharIndex = charIndex + node.length;
                        if (!foundStart && savedSel.start >= charIndex && savedSel.start <= nextCharIndex) {
                            range.setStart(node, savedSel.start - charIndex);
                            foundStart = true;
                        }
                        if (foundStart && savedSel.end >= charIndex && savedSel.end <= nextCharIndex) {
                            range.setEnd(node, savedSel.end - charIndex);
                            stop = true;
                        }
                        charIndex = nextCharIndex;
                    } else {
                        var i = node.childNodes.length;
                        while (i--) {
                            nodeStack.push(node.childNodes[i]);
                        }
                    }
                }
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (document.selection && document.body.createTextRange) {
                var textRange = document.body.createTextRange();
                textRange.moveToElementText(containerEl);
                textRange.collapse(true);
                textRange.moveEnd("character", savedSel.end);
                textRange.moveStart("character", savedSel.start);
                textRange.select();
            }
        }
        */

        /**
         * Enables tabbing/shift-tabbing between contentEditable table cells
         * @param {Window} win - Active window context.
         * @param {Event} e - jQuery Event object for the keydown that fired.
         */
        function tabifyEditableTable(win, e) {

            if (e.keyCode !== 9) {
                return false;
            }

            var sel;
            if (win.getSelection) {
                sel = win.getSelection();
                if (sel.rangeCount > 0) {

                    var textNode = null,
                        direction = null;

                    if (!e.shiftKey) {
                        direction = "next";
                        textNode = (sel.focusNode.nodeName === "TD") 
                            ? (sel.focusNode.nextSibling != null) 
                                ? sel.focusNode.nextSibling 
                                : (sel.focusNode.parentNode.nextSibling != null) 
                                    ? sel.focusNode.parentNode.nextSibling.childNodes[0] 
                                    : null 
                                : (sel.focusNode.parentNode.nextSibling != null) 
                                ? sel.focusNode.parentNode.nextSibling 
                                : (sel.focusNode.parentNode.parentNode.nextSibling != null) 
                            ? sel.focusNode.parentNode.parentNode.nextSibling.childNodes[0] 
                            : null;
                    } else {
                        direction = "previous";
                        textNode = (sel.focusNode.nodeName === "TD") 
                            ? (sel.focusNode.previousSibling != null) 
                                ? sel.focusNode.previousSibling 
                                : (sel.focusNode.parentNode.previousSibling != null) 
                                    ? sel.focusNode.parentNode.previousSibling.childNodes[sel.focusNode.parentNode.previousSibling.childNodes.length - 1] 
                                    : null 
                                : (sel.focusNode.parentNode.previousSibling != null) 
                            ? sel.focusNode.parentNode.previousSibling 
                            : (sel.focusNode.parentNode.parentNode.previousSibling != null) 
                        ? sel.focusNode.parentNode.parentNode.previousSibling.childNodes[sel.focusNode.parentNode.parentNode.previousSibling.childNodes.length - 1] 
                        : null;
                    }

                    if (textNode != null) {
                        sel.collapse(textNode, Math.min(textNode.length, sel.focusOffset + 1));
                        if (textNode.textContent != null) {
                            sel.selectAllChildren(textNode);
                        }
                        e.preventDefault();
                        return true;
                    } else if(textNode === null && direction === "next" && sel.focusNode.nodeName === "TD") {
                        // add new row on TAB if arrived at the end of the row
                        var $table = $(sel.focusNode).parents("table");
                        var cellsPerLine = $table.find("tr").first().children("td").length;
                        var $tr = $("<tr />");
                        var $td = $("<td />");
                        for(var i = 1; i <= cellsPerLine; i++) {
                            $tr.append($td.clone());
                        }
                        $table.append($tr);
                        // simulate tabing through table
                        tabifyEditableTable(window, {keyCode: 9, shiftKey: false, preventDefault: function(){}});
                    }
                }
            }
            return false;
        }

        /**
         * Returns the text from the current selection
         * @private
         * @return {string|boolean}
         */
        function getSelectedText() {
            var range;
            if (window.getSelection) {  // all browsers, except IE before version 9
                range = window.getSelection();
                return range.toString() ? range.toString() : range.focusNode.nodeValue;
            } else  if (document.selection.createRange) { // Internet Explorer
                range = document.selection.createRange();
                return range.text;
            }
            return false;
        }

        /**
         * Save selection
         */
        function doSave(editorID) {
            var $textarea = $('.richText-editor#' + editorID).siblings('.richText-initial');
            addHistory($textarea.val(), editorID);
            savedSelection = saveSelection(editorID);
        }

        /**
         * Add to history
         * @param val Editor content
         * @param id Editor ID
         */
        function addHistory(val, id) {
            if(!history[id]) {
                return false;
            }
            if(history[id].length-1 > historyPosition[id]) {
                history[id].length = historyPosition[id] + 1;
            }

            if(history[id][history[id].length-1] !== val) {
                history[id].push(val);
            }

            historyPosition[id] = history[id].length-1;
            setHistoryButtons(id);
        }

        function setHistoryButtons(id) {
            if(historyPosition[id] <= 0) {
                $editor.find(".richText-undo").addClass("is-disabled");
            } else {
                $editor.find(".richText-undo").removeClass("is-disabled");
            }

            if(historyPosition[id] >= history[id].length-1 || history[id].length === 0) {
                $editor.find(".richText-redo").addClass("is-disabled");
            } else {
                $editor.find(".richText-redo").removeClass("is-disabled");
            }
        }

        /**
         * Undo
         * @param $editor
         */
        function undo($editor) {
            var id = $editor.children('.richText-editor').attr('id');
            historyPosition[id]--;
            if(!historyPosition[id] && historyPosition[id] !== 0) {
                return false;
            }
            var value = history[id][historyPosition[id]];
            $editor.find('textarea').val(value);
            $editor.find('.richText-editor').html(value);
            setHistoryButtons(id);
        }

        /**
         * Undo
         * @param $editor
         */
        function redo($editor) {
            var id = $editor.children('.richText-editor').attr('id');
            historyPosition[id]++;
            if(!historyPosition[id] && historyPosition[id] !== 0) {
                return false;
            }
            var value = history[id][historyPosition[id]];
            $editor.find('textarea').val(value);
            $editor.find('.richText-editor').html(value);
            setHistoryButtons(id);
        }

        /**
         * Restore selection
         */
        function doRestore(id) {
            if(savedSelection) {
                restoreSelection((id ? id : savedSelection.editorID));
            }
        }

        /**
         * Paste HTML at caret position
         * @param {string} html HTML code
         * @private
         */
        function pasteHTMLAtCaret(html) {
            // add HTML code for Internet Explorer
            var sel, range;
            if (window.getSelection) {
                // IE9 and non-IE
                sel = window.getSelection();
                if (sel.getRangeAt && sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    range.deleteContents();

                    // Range.createContextualFragment() would be useful here but is
                    // only relatively recently standardized and is not supported in
                    // some browsers (IE9, for one)
                    var el = document.createElement("div");
                    el.innerHTML = html;
                    var frag = document.createDocumentFragment(), node, lastNode;
                    while ( (node = el.firstChild) ) {
                        lastNode = frag.appendChild(node);
                    }
                    range.insertNode(frag);

                    // Preserve the selection
                    if (lastNode) {
                        range = range.cloneRange();
                        range.setStartAfter(lastNode);
                        range.collapse(true);
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                }
            } else if (document.selection && document.selection.type !== "Control") {
                // IE < 9
                document.selection.createRange().pasteHTML(html);
            }
        }


        /**
         * Change quotes around HTML attributes
         * @param  {string} string
         * @return {string}
         */
        function changeAttributeQuotes(string) {
            if(!string) {
                return '';
            }

            var regex;
            var rstring;
            if(settings.useSingleQuotes === true) {
                regex = /\s+(\w+\s*=\s*(["][^"]*["])|(['][^']*[']))+/g;
                rstring = string.replace(regex, function($0,$1,$2){
                    if(!$2) {return $0;}
                    return $0.replace($2, $2.replace(/\"/g, "'"));
                });
            } else {
                regex = /\s+(\w+\s*=\s*(['][^']*['])|(["][^"]*["]))+/g;
                rstring = string.replace(regex, function($0,$1,$2){
                    if(!$2) {return $0;}
                    return $0.replace($2, $2.replace(/'/g, '"'));
                });
            }
            return rstring;
        }


        /**
         * Load colors for font or background
         * @param {string} command Command
         * @returns {string}
         * @private
         */
        function loadColors(command) {
            var colors = [];
            var result = '';

            colors["#FFFFFF"] = settings.translations.white;
            colors["#000000"] = settings.translations.black;
            colors["#7F6000"] = settings.translations.brown;
            colors["#938953"] = settings.translations.beige;
            colors["#1F497D"] = settings.translations.darkBlue;
            colors["blue"] = settings.translations.blue;
            colors["#4F81BD"] = settings.translations.lightBlue;
            colors["#953734"] = settings.translations.darkRed;
            colors["red"] = settings.translations.red;
            colors["#4F6128"] = settings.translations.darkGreen;
            colors["green"] = settings.translations.green;
            colors["#3F3151"] = settings.translations.purple;
            colors["#31859B"] = settings.translations.darkTurquois;
            colors["#4BACC6"] = settings.translations.turquois;
            colors["#E36C09"] = settings.translations.darkOrange;
            colors["#F79646"] = settings.translations.orange;
            colors["#FFFF00"] = settings.translations.yellow;

            if(settings.colors && settings.colors.length > 0) {
                colors = settings.colors;
            }

            for (var i in colors) {
                result += '<li class="inline"><a data-command="' + command + '" data-option="' + i + '" style="text-align:left;" title="' + colors[i] + '"><span class="box-color" style="background-color:' + i + '"></span></a></li>';
            }
            return result;
        }


        /**
         * Toggle (show/hide) code or editor
         * @private
         */
        function toggleCode(editorID) {
            doRestore(editorID);
            if($editor.find('.richText-editor').is(":visible")) {
                // show code
                $editor.find('.richText-initial').show();
                $editor.find('.richText-editor').hide(); 
                // disable non working buttons
                $('.richText-toolbar').find('.richText-btn').each(function() {
                    if($(this).children('.fa-code').length === 0) {
                        $(this).parent('li').attr("data-disable", "true");
                    }
                });
                convertCaretPosition(editorID, savedSelection);
            } else {
                // show editor
                $editor.find('.richText-initial').hide();
                $editor.find('.richText-editor').show();
                convertCaretPosition(editorID, savedSelection, true);
                // enable all buttons again
                $('.richText-toolbar').find('li').removeAttr("data-disable");
            }
        }


        /**
         * Convert caret position from editor to code view (or in reverse)
         * @param {string} editorID
         * @param {object} selection
         * @param {boolean} reverse
         **/ 
        function convertCaretPosition(editorID, selection, reverse) {
            var $editor = $('#' + editorID);
            var $textarea = $editor.siblings(".richText-initial");

            var code = $textarea.val();
            if(!selection || !code) {
                return {start: 0, end: 0};
            }

            if(reverse === true) {
                savedSelection = {start: $editor.text().length, end: $editor.text().length, editorID: editorID};
                restoreSelection(editorID);
                return true;
            }
            selection.node = $textarea[0];
            var states = {start: false, end: false, tag: false, isTag: false, tagsCount: 0, isHighlight: (selection.start !== selection.end)};
            for(var i = 0; i < code.length; i++) {
                if(code[i] === "<") {
                    // HTML tag starts
                    states.isTag = true;
                    states.tag = false;
                    states.tagsCount++;
                } else if(states.isTag === true && code[i] !== ">") {
                    states.tagsCount++;
                } else if(states.isTag === true && code[i] === ">") {
                    states.isTag = false;
                    states.tag = true;
                    states.tagsCount++;
                } else if(states.tag === true) {
                    states.tag = false;
                }

                if(!reverse) {
                    if((selection.start + states.tagsCount) <= i && states.isHighlight &&  !states.isTag && !states.tag && !states.start) {
                        selection.start = i;
                        states.start = true;
                    } else if((selection.start + states.tagsCount) <= i+1 && !states.isHighlight &&  !states.isTag && !states.tag && !states.start) {
                        selection.start = i+1;
                        states.start = true;
                    }
                    if((selection.end + states.tagsCount) <= i+1 && !states.isTag && !states.tag && !states.end) {
                        selection.end = i+1;
                        states.end = true;
                    }
                }

            }
            createSelection(selection.node, selection.start, selection.end);
            return selection;
        }

        /**
         * Create selection on node element
         * @param {Node} field
         * @param {int} start
         * @param {int} end
         **/ 
        function createSelection(field, start, end) {
            if( field.createTextRange ) {
                var selRange = field.createTextRange();
                selRange.collapse(true);
                selRange.moveStart('character', start);
                selRange.moveEnd('character', end);
                selRange.select();
                field.focus();
            } else if( field.setSelectionRange ) {
                field.focus();
                field.setSelectionRange(start, end);
            } else if( typeof field.selectionStart != 'undefined' ) {
                field.selectionStart = start;
                field.selectionEnd = end;
                field.focus();
            }
        }


        /**
         * Get video embed code from URL
         * @param {string} url Video URL
         * @param {string} size Size in the form of widthxheight
         * @return {string|boolean}
         * @private
         **/
        function getVideoCode(url, size) {
            var video = getVideoID(url);
            var responsive = false, success = false;

            if(!video) {
                // video URL not supported
                return false;
            }

            if(!size) {
                size = "640x360";
                size = size.split("x");
            } else if(size !== "responsive") {
                size = size.split("x");
            } else {
                responsive = true;
                size = "640x360";
                size = size.split("x");
            }

            var html = '<br><br>';
            if(responsive === true) {
                html += '<div class="videoEmbed" style="position:relative;height:0;padding-bottom:56.25%">';
            }
            var allowfullscreen = 'webkitallowfullscreen mozallowfullscreen allowfullscreen';

            if(video.platform === "YouTube") {
                var youtubeDomain = (settings.youtubeCookies ? 'www.youtube.com' : 'www.youtube-nocookie.com');
                html += '<iframe src="https://' + youtubeDomain + '/embed/' + video.id + '?ecver=2" width="' + size[0] + '" height="' + size[1] + '" frameborder="0"' + (responsive === true ? ' style="position:absolute;width:100%;height:100%;left:0"' : '') + ' ' + allowfullscreen + '></iframe>';
                success = true;
            } else if(video.platform === "Vimeo") {
                html += '<iframe src="https://player.vimeo.com/video/' + video.id + '" width="' + size[0] + '" height="' + size[1] + '" frameborder="0"' + (responsive === true ? ' style="position:absolute;width:100%;height:100%;left:0"' : '') + ' ' + allowfullscreen + '></iframe>';
                success = true;
            } else if(video.platform === "Facebook") {
                html += '<iframe src="https://www.facebook.com/plugins/video.php?href=' + encodeURI(url) + '&show_text=0&width=' + size[0] + '" width="' + size[0] + '" height="' + size[1] + '" style="' + (responsive === true ? 'position:absolute;width:100%;height:100%;left:0;border:none;overflow:hidden"' : 'border:none;overflow:hidden') + '" scrolling="no" frameborder="0" allowTransparency="true" ' + allowfullscreen + '></iframe>';
                success = true;
            } else if(video.platform === "Dailymotion") {
                html += '<iframe frameborder="0" width="' + size[0] + '" height="' + size[1] + '" src="//www.dailymotion.com/embed/video/' + video.id + '"' + (responsive === true ? ' style="position:absolute;width:100%;height:100%;left:0"' : '') + ' ' + allowfullscreen + '></iframe>';
                success = true;
            }

            if(responsive === true) {
                html += '</div>';
            }
            html += '<br><br>';

            if(success) {
                return html;
            }
            return false;
        }

        /**
         * Returns the unique video ID
         * @param {string} url
         * return {object|boolean}
         **/
        function getVideoID(url) {
            var vimeoRegExp = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/;
            var youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var facebookRegExp = /(?:http?s?:\/\/)?(?:www\.)?(?:facebook\.com)\/.*\/videos\/[0-9]+/;
            var dailymotionRegExp = /(?:http?s?:\/\/)?(?:www\.)?(?:dailymotion\.com)\/video\/([a-zA-Z0-9]+)/;
            var youtubeMatch = url.match(youtubeRegExp);
            var vimeoMatch = url.match(vimeoRegExp);
            var facebookMatch = url.match(facebookRegExp);
            var dailymotionMatch = url.match(dailymotionRegExp);

            if (youtubeMatch && youtubeMatch[2].length === 11) {
                return {
                    "platform": "YouTube", 
                    "id": youtubeMatch[2]
                };
            } else if(vimeoMatch && vimeoMatch[1]) {
                return {
                    "platform": "Vimeo",
                    "id": vimeoMatch[1]
                };
            } else if(facebookMatch && facebookMatch[0]) {
                return {
                    "platform": "Facebook",
                    "id" : facebookMatch[0]
                };
            } else if(dailymotionMatch && dailymotionMatch[1]) {
                return {
                    "platform": "Dailymotion",
                    "id" : dailymotionMatch[1]
                };
            }

            return false;
        }


        /**
         * Fix the first line as by default the first line has no tag container
         */
        function fixFirstLine() {
            if($editor && !$editor.find(".richText-editor").html()) {
                // set first line with the right tags
                if(settings.useParagraph !== false) {
                    $editor.find(".richText-editor").html('<p><br></p>');
                } else {
                    $editor.find(".richText-editor").html('<div><br></div>');
                }
            } else {
                // replace tags, to force <div> or <p> tags and fix issues
                if(settings.useParagraph !== false) {
                    $editor.find(".richText-editor").find('div:not(.videoEmbed)').replaceWith(function() {
                        return $('<p />', {html: $(this).html()});
                    });
                } else {
                    $editor.find(".richText-editor").find('p').replaceWith(function() {
                        return $('<div />', {html: $(this).html()});
                    });
                }
            }
            updateTextarea();
        }

        return $(this);
    };

    $.fn.unRichText = function( options ) {

        // set default options
        // and merge them with the parameter options
        var settings = $.extend({
            delay: 0 // delay in ms
        }, options);

        var $editor, $textarea, $main;
        var $el = $(this);

        /**
         * Initialize undoing RichText and call remove() method
         */
        function init() {

            if($el.hasClass('richText')) {
                $main = $el;
            } else if($el.hasClass('richText-initial') || $el.hasClass('richText-editor')) {
                $main = $el.parents('.richText');
            }

            if(!$main) {
                // node element does not correspond to RichText elements
                return false;
            }

            $editor = $main.find('.richText-editor');
            $textarea = $main.find('.richText-initial');

            if(parseInt(settings.delay) > 0) {
                // a delay has been set
                setTimeout(remove, parseInt(settings.delay));
            } else {
                remove();
            }
        }
        init();

        /**
         * Remove RichText elements
         */
        function remove() {
            $main.find('.richText-toolbar').remove();
            $main.find('.richText-editor').remove();
            $textarea
                .unwrap('.richText')
                .data('editor', 'richText')
                .removeClass('richText-initial')
                .show();
        }

    };
 
}( jQuery ));

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(92);
var loader = __webpack_require__(81);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(95);
var loader = __webpack_require__(81);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

$(function () {

  'use strict';

  var console = window.console || { log: function () {} };
  var $image = $('#image');
  var $download = $('#download');
  var $dataX = $('#dataX');
  var $dataY = $('#dataY');
  var $dataHeight = $('#dataHeight');
  var $dataWidth = $('#dataWidth');
  var $dataRotate = $('#dataRotate');
  var $dataScaleX = $('#dataScaleX');
  var $dataScaleY = $('#dataScaleY');
  var options = {
        aspectRatio: 16 / 9,
        preview: '.img-preview',
        strict: false,
        cropBoxResizable: false,
        crop: function (e) {
          $dataX.val(Math.round(e.x));
          $dataY.val(Math.round(e.y));
          $dataHeight.val(Math.round(e.height));
          $dataWidth.val(Math.round(e.width));
          $dataRotate.val(e.rotate);
          $dataScaleX.val(e.scaleX);
          $dataScaleY.val(e.scaleY);
        },
        built: function () {
          var container = $(this).cropper('getContainerData');
          var cropBoxWidth = 668;
          var cropBoxHeight = 226;
      
          $(this).cropper('setCropBoxData', {
            width: cropBoxWidth,
            height: cropBoxHeight,
            left: (container.width - cropBoxWidth) / 2,
            top: (container.height - cropBoxHeight) / 2
          });
        }
      };


  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();


  // Cropper
  $image.on({
    'build.cropper': function (e) {
      console.log(e.type);
    },
    'built.cropper': function (e) {
      console.log(e.type);
    },
    'cropstart.cropper': function (e) {
      console.log(e.type, e.action);
    },
    'cropmove.cropper': function (e) {
      console.log(e.type, e.action);
    },
    'cropend.cropper': function (e) {
      console.log(e.type, e.action);
    },
    'crop.cropper': function (e) {
      console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
    },
    'zoom.cropper': function (e) {
      console.log(e.type, e.ratio);
    }
  }).cropper(options);


  // Buttons
  if (!$.isFunction(document.createElement('canvas').getContext)) {
    $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
  }

  if (typeof document.createElement('cropper').style.transition === 'undefined') {
    $('button[data-method="rotate"]').prop('disabled', true);
    $('button[data-method="scale"]').prop('disabled', true);
  }


  // Download
  if (typeof $download[0].download === 'undefined') {
    $download.addClass('disabled');
  }


  // Options
  $('.docs-toggles').on('change', 'input', function () {
    var $this = $(this);
    var name = $this.attr('name');
    var type = $this.prop('type');
    var cropBoxData;
    var canvasData;

    if (!$image.data('cropper')) {
      return;
    }

    if (type === 'checkbox') {
      options[name] = $this.prop('checked');
      cropBoxData = $image.cropper('getCropBoxData');
      canvasData = $image.cropper('getCanvasData');

      options.built = function () {
        $image.cropper('setCropBoxData', cropBoxData);
        $image.cropper('setCanvasData', canvasData);
      };
    } else if (type === 'radio') {
      options[name] = $this.val();
    }

    $image.cropper('destroy').cropper(options);
  });


  // Methods
  $('.docs-buttons').on('click', '[data-method]', function () {
    var $this = $(this);
    var data = $this.data();
    var $target;
    var result;

    if ($this.prop('disabled') || $this.hasClass('disabled')) {
      return;
    }

    if ($image.data('cropper') && data.method) {
      data = $.extend({}, data); // Clone a new one

      if (typeof data.target !== 'undefined') {
        $target = $(data.target);

        if (typeof data.option === 'undefined') {
          try {
            data.option = JSON.parse($target.val());
          } catch (e) {
            console.log(e.message);
          }
        }
      }

      if (data.method === 'rotate') {
        $image.cropper('clear');
      }

      result = $image.cropper(data.method, data.option, data.secondOption);

      if (data.method === 'rotate') {
        $image.cropper('crop');
      }

      switch (data.method) {
        case 'scaleX':
        case 'scaleY':
          $(this).data('option', -data.option);
          break;

        case 'getCroppedCanvas':
          if (result) {

            // Bootstrap's Modal
            $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);

            if (!$download.hasClass('disabled')) {
              $download.attr('href', result.toDataURL('image/jpeg'));
            }
          }

          break;
      }

      if ($.isPlainObject(result) && $target) {
        try {
          $target.val(JSON.stringify(result));
        } catch (e) {
          console.log(e.message);
        }
      }

    }
  });


  // Keyboard
  $(document.body).on('keydown', function (e) {

    if (!$image.data('cropper') || this.scrollTop > 300) {
      return;
    }

    switch (e.which) {
      case 37:
        e.preventDefault();
        $image.cropper('move', -1, 0);
        break;

      case 38:
        e.preventDefault();
        $image.cropper('move', 0, -1);
        break;

      case 39:
        e.preventDefault();
        $image.cropper('move', 1, 0);
        break;

      case 40:
        e.preventDefault();
        $image.cropper('move', 0, 1);
        break;
    }

  });


  // Import image
  var $inputImage = $('#inputImage');
  var URL = window.URL || window.webkitURL;
  var blobURL;

  if (URL) {
    $inputImage.change(function () {
      var files = this.files;
      var file;

      if (!$image.data('cropper')) {
        return;
      }

      if (files && files.length) {
        file = files[0];

        if (/^image\/\w+$/.test(file.type)) {
          blobURL = URL.createObjectURL(file);
          $('.logo-cropsec').show();
          $('.themelogo-upload').hide();
          $image.one('built.cropper', function () {

            // Revoke when load complete
            URL.revokeObjectURL(blobURL);
          }).cropper('reset').cropper('replace', blobURL);
          $inputImage.val('');
        } else {
          window.alert('Please choose an image file.');
        }
      }
    });
  } else {
    $inputImage.prop('disabled', true).parent().addClass('disabled');
  }
  $('.crop-cancel').click(function(){
      $('.logo-cropsec').hide();
      $('.themelogo-upload').show();
  });

});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Cropper v2.3.4
 * https://github.com/fengyuanchen/cropper
 *
 * Copyright (c) 2014-2016 Fengyuan Chen and contributors
 * Released under the MIT license
 *
 * Date: 2016-09-03T05:50:45.412Z
 */
!function(t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(46)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){"use strict";function i(t){return"number"==typeof t&&!isNaN(t)}function e(t){return"undefined"==typeof t}function s(t,e){var s=[];return i(e)&&s.push(e),s.slice.apply(t,s)}function a(t,i){var e=s(arguments,2);return function(){return t.apply(i,e.concat(s(arguments)))}}function o(t){var i=t.match(/^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i);return i&&(i[1]!==C.protocol||i[2]!==C.hostname||i[3]!==C.port)}function h(t){var i="timestamp="+(new Date).getTime();return t+(t.indexOf("?")===-1?"?":"&")+i}function n(t){return t?' crossOrigin="'+t+'"':""}function r(t,i){var e;return t.naturalWidth&&!mt?i(t.naturalWidth,t.naturalHeight):(e=document.createElement("img"),e.onload=function(){i(this.width,this.height)},void(e.src=t.src))}function p(t){var e=[],s=t.rotate,a=t.scaleX,o=t.scaleY;return i(s)&&0!==s&&e.push("rotate("+s+"deg)"),i(a)&&1!==a&&e.push("scaleX("+a+")"),i(o)&&1!==o&&e.push("scaleY("+o+")"),e.length?e.join(" "):"none"}function l(t,i){var e,s,a=Ct(t.degree)%180,o=(a>90?180-a:a)*Math.PI/180,h=bt(o),n=Bt(o),r=t.width,p=t.height,l=t.aspectRatio;return i?(e=r/(n+h/l),s=e/l):(e=r*n+p*h,s=r*h+p*n),{width:e,height:s}}function c(e,s){var a,o,h,n=t("<canvas>")[0],r=n.getContext("2d"),p=0,c=0,d=s.naturalWidth,g=s.naturalHeight,u=s.rotate,f=s.scaleX,m=s.scaleY,v=i(f)&&i(m)&&(1!==f||1!==m),w=i(u)&&0!==u,x=w||v,C=d*Ct(f||1),b=g*Ct(m||1);return v&&(a=C/2,o=b/2),w&&(h=l({width:C,height:b,degree:u}),C=h.width,b=h.height,a=C/2,o=b/2),n.width=C,n.height=b,x&&(p=-d/2,c=-g/2,r.save(),r.translate(a,o)),w&&r.rotate(u*Math.PI/180),v&&r.scale(f,m),r.drawImage(e,$t(p),$t(c),$t(d),$t(g)),x&&r.restore(),n}function d(i){var e=i.length,s=0,a=0;return e&&(t.each(i,function(t,i){s+=i.pageX,a+=i.pageY}),s/=e,a/=e),{pageX:s,pageY:a}}function g(t,i,e){var s,a="";for(s=i,e+=i;s<e;s++)a+=Lt(t.getUint8(s));return a}function u(t){var i,e,s,a,o,h,n,r,p,l,c=new D(t),d=c.byteLength;if(255===c.getUint8(0)&&216===c.getUint8(1))for(p=2;p<d;){if(255===c.getUint8(p)&&225===c.getUint8(p+1)){n=p;break}p++}if(n&&(e=n+4,s=n+10,"Exif"===g(c,e,4)&&(h=c.getUint16(s),o=18761===h,(o||19789===h)&&42===c.getUint16(s+2,o)&&(a=c.getUint32(s+4,o),a>=8&&(r=s+a)))),r)for(d=c.getUint16(r,o),l=0;l<d;l++)if(p=r+12*l+2,274===c.getUint16(p,o)){p+=8,i=c.getUint16(p,o),mt&&c.setUint16(p,1,o);break}return i}function f(t){var i,e=t.replace(G,""),s=atob(e),a=s.length,o=new B(a),h=new y(o);for(i=0;i<a;i++)h[i]=s.charCodeAt(i);return o}function m(t){var i,e=new y(t),s=e.length,a="";for(i=0;i<s;i++)a+=Lt(e[i]);return"data:image/jpeg;base64,"+$(a)}function v(i,e){this.$element=t(i),this.options=t.extend({},v.DEFAULTS,t.isPlainObject(e)&&e),this.isLoaded=!1,this.isBuilt=!1,this.isCompleted=!1,this.isRotated=!1,this.isCropped=!1,this.isDisabled=!1,this.isReplaced=!1,this.isLimited=!1,this.wheeling=!1,this.isImg=!1,this.originalUrl="",this.canvas=null,this.cropBox=null,this.init()}var w=t(window),x=t(document),C=window.location,b=window.navigator,B=window.ArrayBuffer,y=window.Uint8Array,D=window.DataView,$=window.btoa,L="cropper",T="cropper-modal",X="cropper-hide",Y="cropper-hidden",k="cropper-invisible",M="cropper-move",W="cropper-crop",H="cropper-disabled",R="cropper-bg",z="mousedown touchstart pointerdown MSPointerDown",O="mousemove touchmove pointermove MSPointerMove",P="mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel",E="wheel mousewheel DOMMouseScroll",U="dblclick",I="load."+L,F="error."+L,j="resize."+L,A="build."+L,S="built."+L,N="cropstart."+L,_="cropmove."+L,q="cropend."+L,K="crop."+L,Z="zoom."+L,Q=/^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,V=/^data:/,G=/^data:([^;]+);base64,/,J=/^data:image\/jpeg.*;base64,/,tt="preview",it="action",et="e",st="w",at="s",ot="n",ht="se",nt="sw",rt="ne",pt="nw",lt="all",ct="crop",dt="move",gt="zoom",ut="none",ft=t.isFunction(t("<canvas>")[0].getContext),mt=b&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(b.userAgent),vt=Number,wt=Math.min,xt=Math.max,Ct=Math.abs,bt=Math.sin,Bt=Math.cos,yt=Math.sqrt,Dt=Math.round,$t=Math.floor,Lt=String.fromCharCode;v.prototype={constructor:v,init:function(){var t,i=this.$element;if(i.is("img")){if(this.isImg=!0,this.originalUrl=t=i.attr("src"),!t)return;t=i.prop("src")}else i.is("canvas")&&ft&&(t=i[0].toDataURL());this.load(t)},trigger:function(i,e){var s=t.Event(i,e);return this.$element.trigger(s),s},load:function(i){var e,s,a=this.options,n=this.$element;if(i&&(n.one(A,a.build),!this.trigger(A).isDefaultPrevented())){if(this.url=i,this.image={},!a.checkOrientation||!B)return this.clone();if(e=t.proxy(this.read,this),V.test(i))return J.test(i)?e(f(i)):this.clone();s=new XMLHttpRequest,s.onerror=s.onabort=t.proxy(function(){this.clone()},this),s.onload=function(){e(this.response)},a.checkCrossOrigin&&o(i)&&n.prop("crossOrigin")&&(i=h(i)),s.open("get",i),s.responseType="arraybuffer",s.send()}},read:function(t){var i=this.options,e=u(t),s=this.image,a=0,o=1,h=1;if(e>1)switch(this.url=m(t),e){case 2:o=-1;break;case 3:a=-180;break;case 4:h=-1;break;case 5:a=90,h=-1;break;case 6:a=90;break;case 7:a=90,o=-1;break;case 8:a=-90}i.rotatable&&(s.rotate=a),i.scalable&&(s.scaleX=o,s.scaleY=h),this.clone()},clone:function(){var i,e,s=this.options,a=this.$element,r=this.url,p="";s.checkCrossOrigin&&o(r)&&(p=a.prop("crossOrigin"),p?i=r:(p="anonymous",i=h(r))),this.crossOrigin=p,this.crossOriginUrl=i,this.$clone=e=t("<img"+n(p)+' src="'+(i||r)+'">'),this.isImg?a[0].complete?this.start():a.one(I,t.proxy(this.start,this)):e.one(I,t.proxy(this.start,this)).one(F,t.proxy(this.stop,this)).addClass(X).insertAfter(a)},start:function(){var i=this.$element,e=this.$clone;this.isImg||(e.off(F,this.stop),i=e),r(i[0],t.proxy(function(i,e){t.extend(this.image,{naturalWidth:i,naturalHeight:e,aspectRatio:i/e}),this.isLoaded=!0,this.build()},this))},stop:function(){this.$clone.remove(),this.$clone=null},build:function(){var i,e,s,a=this.options,o=this.$element,h=this.$clone;this.isLoaded&&(this.isBuilt&&this.unbuild(),this.$container=o.parent(),this.$cropper=i=t(v.TEMPLATE),this.$canvas=i.find(".cropper-canvas").append(h),this.$dragBox=i.find(".cropper-drag-box"),this.$cropBox=e=i.find(".cropper-crop-box"),this.$viewBox=i.find(".cropper-view-box"),this.$face=s=e.find(".cropper-face"),o.addClass(Y).after(i),this.isImg||h.removeClass(X),this.initPreview(),this.bind(),a.aspectRatio=xt(0,a.aspectRatio)||NaN,a.viewMode=xt(0,wt(3,Dt(a.viewMode)))||0,a.autoCrop?(this.isCropped=!0,a.modal&&this.$dragBox.addClass(T)):e.addClass(Y),a.guides||e.find(".cropper-dashed").addClass(Y),a.center||e.find(".cropper-center").addClass(Y),a.cropBoxMovable&&s.addClass(M).data(it,lt),a.highlight||s.addClass(k),a.background&&i.addClass(R),a.cropBoxResizable||e.find(".cropper-line, .cropper-point").addClass(Y),this.setDragMode(a.dragMode),this.render(),this.isBuilt=!0,this.setData(a.data),o.one(S,a.built),this.completing=setTimeout(t.proxy(function(){this.trigger(S),this.trigger(K,this.getData()),this.isCompleted=!0},this),0))},unbuild:function(){this.isBuilt&&(this.isCompleted||clearTimeout(this.completing),this.isBuilt=!1,this.isCompleted=!1,this.initialImage=null,this.initialCanvas=null,this.initialCropBox=null,this.container=null,this.canvas=null,this.cropBox=null,this.unbind(),this.resetPreview(),this.$preview=null,this.$viewBox=null,this.$cropBox=null,this.$dragBox=null,this.$canvas=null,this.$container=null,this.$cropper.remove(),this.$cropper=null)},render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.isCropped&&this.renderCropBox()},initContainer:function(){var t=this.options,i=this.$element,e=this.$container,s=this.$cropper;s.addClass(Y),i.removeClass(Y),s.css(this.container={width:xt(e.width(),vt(t.minContainerWidth)||200),height:xt(e.height(),vt(t.minContainerHeight)||100)}),i.addClass(Y),s.removeClass(Y)},initCanvas:function(){var i,e=this.options.viewMode,s=this.container,a=s.width,o=s.height,h=this.image,n=h.naturalWidth,r=h.naturalHeight,p=90===Ct(h.rotate),l=p?r:n,c=p?n:r,d=l/c,g=a,u=o;o*d>a?3===e?g=o*d:u=a/d:3===e?u=a/d:g=o*d,i={naturalWidth:l,naturalHeight:c,aspectRatio:d,width:g,height:u},i.oldLeft=i.left=(a-g)/2,i.oldTop=i.top=(o-u)/2,this.canvas=i,this.isLimited=1===e||2===e,this.limitCanvas(!0,!0),this.initialImage=t.extend({},h),this.initialCanvas=t.extend({},i)},limitCanvas:function(t,i){var e,s,a,o,h=this.options,n=h.viewMode,r=this.container,p=r.width,l=r.height,c=this.canvas,d=c.aspectRatio,g=this.cropBox,u=this.isCropped&&g;t&&(e=vt(h.minCanvasWidth)||0,s=vt(h.minCanvasHeight)||0,n&&(n>1?(e=xt(e,p),s=xt(s,l),3===n&&(s*d>e?e=s*d:s=e/d)):e?e=xt(e,u?g.width:0):s?s=xt(s,u?g.height:0):u&&(e=g.width,s=g.height,s*d>e?e=s*d:s=e/d)),e&&s?s*d>e?s=e/d:e=s*d:e?s=e/d:s&&(e=s*d),c.minWidth=e,c.minHeight=s,c.maxWidth=1/0,c.maxHeight=1/0),i&&(n?(a=p-c.width,o=l-c.height,c.minLeft=wt(0,a),c.minTop=wt(0,o),c.maxLeft=xt(0,a),c.maxTop=xt(0,o),u&&this.isLimited&&(c.minLeft=wt(g.left,g.left+g.width-c.width),c.minTop=wt(g.top,g.top+g.height-c.height),c.maxLeft=g.left,c.maxTop=g.top,2===n&&(c.width>=p&&(c.minLeft=wt(0,a),c.maxLeft=xt(0,a)),c.height>=l&&(c.minTop=wt(0,o),c.maxTop=xt(0,o))))):(c.minLeft=-c.width,c.minTop=-c.height,c.maxLeft=p,c.maxTop=l))},renderCanvas:function(t){var i,e,s=this.canvas,a=this.image,o=a.rotate,h=a.naturalWidth,n=a.naturalHeight;this.isRotated&&(this.isRotated=!1,e=l({width:a.width,height:a.height,degree:o}),i=e.width/e.height,i!==s.aspectRatio&&(s.left-=(e.width-s.width)/2,s.top-=(e.height-s.height)/2,s.width=e.width,s.height=e.height,s.aspectRatio=i,s.naturalWidth=h,s.naturalHeight=n,o%180&&(e=l({width:h,height:n,degree:o}),s.naturalWidth=e.width,s.naturalHeight=e.height),this.limitCanvas(!0,!1))),(s.width>s.maxWidth||s.width<s.minWidth)&&(s.left=s.oldLeft),(s.height>s.maxHeight||s.height<s.minHeight)&&(s.top=s.oldTop),s.width=wt(xt(s.width,s.minWidth),s.maxWidth),s.height=wt(xt(s.height,s.minHeight),s.maxHeight),this.limitCanvas(!1,!0),s.oldLeft=s.left=wt(xt(s.left,s.minLeft),s.maxLeft),s.oldTop=s.top=wt(xt(s.top,s.minTop),s.maxTop),this.$canvas.css({width:s.width,height:s.height,left:s.left,top:s.top}),this.renderImage(),this.isCropped&&this.isLimited&&this.limitCropBox(!0,!0),t&&this.output()},renderImage:function(i){var e,s=this.canvas,a=this.image;a.rotate&&(e=l({width:s.width,height:s.height,degree:a.rotate,aspectRatio:a.aspectRatio},!0)),t.extend(a,e?{width:e.width,height:e.height,left:(s.width-e.width)/2,top:(s.height-e.height)/2}:{width:s.width,height:s.height,left:0,top:0}),this.$clone.css({width:a.width,height:a.height,marginLeft:a.left,marginTop:a.top,transform:p(a)}),i&&this.output()},initCropBox:function(){var i=this.options,e=this.canvas,s=i.aspectRatio,a=vt(i.autoCropArea)||.8,o={width:e.width,height:e.height};s&&(e.height*s>e.width?o.height=o.width/s:o.width=o.height*s),this.cropBox=o,this.limitCropBox(!0,!0),o.width=wt(xt(o.width,o.minWidth),o.maxWidth),o.height=wt(xt(o.height,o.minHeight),o.maxHeight),o.width=xt(o.minWidth,o.width*a),o.height=xt(o.minHeight,o.height*a),o.oldLeft=o.left=e.left+(e.width-o.width)/2,o.oldTop=o.top=e.top+(e.height-o.height)/2,this.initialCropBox=t.extend({},o)},limitCropBox:function(t,i){var e,s,a,o,h=this.options,n=h.aspectRatio,r=this.container,p=r.width,l=r.height,c=this.canvas,d=this.cropBox,g=this.isLimited;t&&(e=vt(h.minCropBoxWidth)||0,s=vt(h.minCropBoxHeight)||0,e=wt(e,p),s=wt(s,l),a=wt(p,g?c.width:p),o=wt(l,g?c.height:l),n&&(e&&s?s*n>e?s=e/n:e=s*n:e?s=e/n:s&&(e=s*n),o*n>a?o=a/n:a=o*n),d.minWidth=wt(e,a),d.minHeight=wt(s,o),d.maxWidth=a,d.maxHeight=o),i&&(g?(d.minLeft=xt(0,c.left),d.minTop=xt(0,c.top),d.maxLeft=wt(p,c.left+c.width)-d.width,d.maxTop=wt(l,c.top+c.height)-d.height):(d.minLeft=0,d.minTop=0,d.maxLeft=p-d.width,d.maxTop=l-d.height))},renderCropBox:function(){var t=this.options,i=this.container,e=i.width,s=i.height,a=this.cropBox;(a.width>a.maxWidth||a.width<a.minWidth)&&(a.left=a.oldLeft),(a.height>a.maxHeight||a.height<a.minHeight)&&(a.top=a.oldTop),a.width=wt(xt(a.width,a.minWidth),a.maxWidth),a.height=wt(xt(a.height,a.minHeight),a.maxHeight),this.limitCropBox(!1,!0),a.oldLeft=a.left=wt(xt(a.left,a.minLeft),a.maxLeft),a.oldTop=a.top=wt(xt(a.top,a.minTop),a.maxTop),t.movable&&t.cropBoxMovable&&this.$face.data(it,a.width===e&&a.height===s?dt:lt),this.$cropBox.css({width:a.width,height:a.height,left:a.left,top:a.top}),this.isCropped&&this.isLimited&&this.limitCanvas(!0,!0),this.isDisabled||this.output()},output:function(){this.preview(),this.isCompleted&&this.trigger(K,this.getData())},initPreview:function(){var i,e=n(this.crossOrigin),s=e?this.crossOriginUrl:this.url;this.$preview=t(this.options.preview),this.$clone2=i=t("<img"+e+' src="'+s+'">'),this.$viewBox.html(i),this.$preview.each(function(){var i=t(this);i.data(tt,{width:i.width(),height:i.height(),html:i.html()}),i.html("<img"+e+' src="'+s+'" style="display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;">')})},resetPreview:function(){this.$preview.each(function(){var i=t(this),e=i.data(tt);i.css({width:e.width,height:e.height}).html(e.html).removeData(tt)})},preview:function(){var i=this.image,e=this.canvas,s=this.cropBox,a=s.width,o=s.height,h=i.width,n=i.height,r=s.left-e.left-i.left,l=s.top-e.top-i.top;this.isCropped&&!this.isDisabled&&(this.$clone2.css({width:h,height:n,marginLeft:-r,marginTop:-l,transform:p(i)}),this.$preview.each(function(){var e=t(this),s=e.data(tt),c=s.width,d=s.height,g=c,u=d,f=1;a&&(f=c/a,u=o*f),o&&u>d&&(f=d/o,g=a*f,u=d),e.css({width:g,height:u}).find("img").css({width:h*f,height:n*f,marginLeft:-r*f,marginTop:-l*f,transform:p(i)})}))},bind:function(){var i=this.options,e=this.$element,s=this.$cropper;t.isFunction(i.cropstart)&&e.on(N,i.cropstart),t.isFunction(i.cropmove)&&e.on(_,i.cropmove),t.isFunction(i.cropend)&&e.on(q,i.cropend),t.isFunction(i.crop)&&e.on(K,i.crop),t.isFunction(i.zoom)&&e.on(Z,i.zoom),s.on(z,t.proxy(this.cropStart,this)),i.zoomable&&i.zoomOnWheel&&s.on(E,t.proxy(this.wheel,this)),i.toggleDragModeOnDblclick&&s.on(U,t.proxy(this.dblclick,this)),x.on(O,this._cropMove=a(this.cropMove,this)).on(P,this._cropEnd=a(this.cropEnd,this)),i.responsive&&w.on(j,this._resize=a(this.resize,this))},unbind:function(){var i=this.options,e=this.$element,s=this.$cropper;t.isFunction(i.cropstart)&&e.off(N,i.cropstart),t.isFunction(i.cropmove)&&e.off(_,i.cropmove),t.isFunction(i.cropend)&&e.off(q,i.cropend),t.isFunction(i.crop)&&e.off(K,i.crop),t.isFunction(i.zoom)&&e.off(Z,i.zoom),s.off(z,this.cropStart),i.zoomable&&i.zoomOnWheel&&s.off(E,this.wheel),i.toggleDragModeOnDblclick&&s.off(U,this.dblclick),x.off(O,this._cropMove).off(P,this._cropEnd),i.responsive&&w.off(j,this._resize)},resize:function(){var i,e,s,a=this.options.restore,o=this.$container,h=this.container;!this.isDisabled&&h&&(s=o.width()/h.width,1===s&&o.height()===h.height||(a&&(i=this.getCanvasData(),e=this.getCropBoxData()),this.render(),a&&(this.setCanvasData(t.each(i,function(t,e){i[t]=e*s})),this.setCropBoxData(t.each(e,function(t,i){e[t]=i*s})))))},dblclick:function(){this.isDisabled||(this.$dragBox.hasClass(W)?this.setDragMode(dt):this.setDragMode(ct))},wheel:function(i){var e=i.originalEvent||i,s=vt(this.options.wheelZoomRatio)||.1,a=1;this.isDisabled||(i.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(t.proxy(function(){this.wheeling=!1},this),50),e.deltaY?a=e.deltaY>0?1:-1:e.wheelDelta?a=-e.wheelDelta/120:e.detail&&(a=e.detail>0?1:-1),this.zoom(-a*s,i)))},cropStart:function(i){var e,s,a=this.options,o=i.originalEvent,h=o&&o.touches,n=i;if(!this.isDisabled){if(h){if(e=h.length,e>1){if(!a.zoomable||!a.zoomOnTouch||2!==e)return;n=h[1],this.startX2=n.pageX,this.startY2=n.pageY,s=gt}n=h[0]}if(s=s||t(n.target).data(it),Q.test(s)){if(this.trigger(N,{originalEvent:o,action:s}).isDefaultPrevented())return;i.preventDefault(),this.action=s,this.cropping=!1,this.startX=n.pageX||o&&o.pageX,this.startY=n.pageY||o&&o.pageY,s===ct&&(this.cropping=!0,this.$dragBox.addClass(T))}}},cropMove:function(t){var i,e=this.options,s=t.originalEvent,a=s&&s.touches,o=t,h=this.action;if(!this.isDisabled){if(a){if(i=a.length,i>1){if(!e.zoomable||!e.zoomOnTouch||2!==i)return;o=a[1],this.endX2=o.pageX,this.endY2=o.pageY}o=a[0]}if(h){if(this.trigger(_,{originalEvent:s,action:h}).isDefaultPrevented())return;t.preventDefault(),this.endX=o.pageX||s&&s.pageX,this.endY=o.pageY||s&&s.pageY,this.change(o.shiftKey,h===gt?t:null)}}},cropEnd:function(t){var i=t.originalEvent,e=this.action;this.isDisabled||e&&(t.preventDefault(),this.cropping&&(this.cropping=!1,this.$dragBox.toggleClass(T,this.isCropped&&this.options.modal)),this.action="",this.trigger(q,{originalEvent:i,action:e}))},change:function(t,i){var e,s,a=this.options,o=a.aspectRatio,h=this.action,n=this.container,r=this.canvas,p=this.cropBox,l=p.width,c=p.height,d=p.left,g=p.top,u=d+l,f=g+c,m=0,v=0,w=n.width,x=n.height,C=!0;switch(!o&&t&&(o=l&&c?l/c:1),this.isLimited&&(m=p.minLeft,v=p.minTop,w=m+wt(n.width,r.width,r.left+r.width),x=v+wt(n.height,r.height,r.top+r.height)),s={x:this.endX-this.startX,y:this.endY-this.startY},o&&(s.X=s.y*o,s.Y=s.x/o),h){case lt:d+=s.x,g+=s.y;break;case et:if(s.x>=0&&(u>=w||o&&(g<=v||f>=x))){C=!1;break}l+=s.x,o&&(c=l/o,g-=s.Y/2),l<0&&(h=st,l=0);break;case ot:if(s.y<=0&&(g<=v||o&&(d<=m||u>=w))){C=!1;break}c-=s.y,g+=s.y,o&&(l=c*o,d+=s.X/2),c<0&&(h=at,c=0);break;case st:if(s.x<=0&&(d<=m||o&&(g<=v||f>=x))){C=!1;break}l-=s.x,d+=s.x,o&&(c=l/o,g+=s.Y/2),l<0&&(h=et,l=0);break;case at:if(s.y>=0&&(f>=x||o&&(d<=m||u>=w))){C=!1;break}c+=s.y,o&&(l=c*o,d-=s.X/2),c<0&&(h=ot,c=0);break;case rt:if(o){if(s.y<=0&&(g<=v||u>=w)){C=!1;break}c-=s.y,g+=s.y,l=c*o}else s.x>=0?u<w?l+=s.x:s.y<=0&&g<=v&&(C=!1):l+=s.x,s.y<=0?g>v&&(c-=s.y,g+=s.y):(c-=s.y,g+=s.y);l<0&&c<0?(h=nt,c=0,l=0):l<0?(h=pt,l=0):c<0&&(h=ht,c=0);break;case pt:if(o){if(s.y<=0&&(g<=v||d<=m)){C=!1;break}c-=s.y,g+=s.y,l=c*o,d+=s.X}else s.x<=0?d>m?(l-=s.x,d+=s.x):s.y<=0&&g<=v&&(C=!1):(l-=s.x,d+=s.x),s.y<=0?g>v&&(c-=s.y,g+=s.y):(c-=s.y,g+=s.y);l<0&&c<0?(h=ht,c=0,l=0):l<0?(h=rt,l=0):c<0&&(h=nt,c=0);break;case nt:if(o){if(s.x<=0&&(d<=m||f>=x)){C=!1;break}l-=s.x,d+=s.x,c=l/o}else s.x<=0?d>m?(l-=s.x,d+=s.x):s.y>=0&&f>=x&&(C=!1):(l-=s.x,d+=s.x),s.y>=0?f<x&&(c+=s.y):c+=s.y;l<0&&c<0?(h=rt,c=0,l=0):l<0?(h=ht,l=0):c<0&&(h=pt,c=0);break;case ht:if(o){if(s.x>=0&&(u>=w||f>=x)){C=!1;break}l+=s.x,c=l/o}else s.x>=0?u<w?l+=s.x:s.y>=0&&f>=x&&(C=!1):l+=s.x,s.y>=0?f<x&&(c+=s.y):c+=s.y;l<0&&c<0?(h=pt,c=0,l=0):l<0?(h=nt,l=0):c<0&&(h=rt,c=0);break;case dt:this.move(s.x,s.y),C=!1;break;case gt:this.zoom(function(t,i,e,s){var a=yt(t*t+i*i),o=yt(e*e+s*s);return(o-a)/a}(Ct(this.startX-this.startX2),Ct(this.startY-this.startY2),Ct(this.endX-this.endX2),Ct(this.endY-this.endY2)),i),this.startX2=this.endX2,this.startY2=this.endY2,C=!1;break;case ct:if(!s.x||!s.y){C=!1;break}e=this.$cropper.offset(),d=this.startX-e.left,g=this.startY-e.top,l=p.minWidth,c=p.minHeight,s.x>0?h=s.y>0?ht:rt:s.x<0&&(d-=l,h=s.y>0?nt:pt),s.y<0&&(g-=c),this.isCropped||(this.$cropBox.removeClass(Y),this.isCropped=!0,this.isLimited&&this.limitCropBox(!0,!0))}C&&(p.width=l,p.height=c,p.left=d,p.top=g,this.action=h,this.renderCropBox()),this.startX=this.endX,this.startY=this.endY},crop:function(){this.isBuilt&&!this.isDisabled&&(this.isCropped||(this.isCropped=!0,this.limitCropBox(!0,!0),this.options.modal&&this.$dragBox.addClass(T),this.$cropBox.removeClass(Y)),this.setCropBoxData(this.initialCropBox))},reset:function(){this.isBuilt&&!this.isDisabled&&(this.image=t.extend({},this.initialImage),this.canvas=t.extend({},this.initialCanvas),this.cropBox=t.extend({},this.initialCropBox),this.renderCanvas(),this.isCropped&&this.renderCropBox())},clear:function(){this.isCropped&&!this.isDisabled&&(t.extend(this.cropBox,{left:0,top:0,width:0,height:0}),this.isCropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),this.$dragBox.removeClass(T),this.$cropBox.addClass(Y))},replace:function(t,i){!this.isDisabled&&t&&(this.isImg&&this.$element.attr("src",t),i?(this.url=t,this.$clone.attr("src",t),this.isBuilt&&this.$preview.find("img").add(this.$clone2).attr("src",t)):(this.isImg&&(this.isReplaced=!0),this.options.data=null,this.load(t)))},enable:function(){this.isBuilt&&(this.isDisabled=!1,this.$cropper.removeClass(H))},disable:function(){this.isBuilt&&(this.isDisabled=!0,this.$cropper.addClass(H))},destroy:function(){var t=this.$element;this.isLoaded?(this.isImg&&this.isReplaced&&t.attr("src",this.originalUrl),this.unbuild(),t.removeClass(Y)):this.isImg?t.off(I,this.start):this.$clone&&this.$clone.remove(),t.removeData(L)},move:function(t,i){var s=this.canvas;this.moveTo(e(t)?t:s.left+vt(t),e(i)?i:s.top+vt(i))},moveTo:function(t,s){var a=this.canvas,o=!1;e(s)&&(s=t),t=vt(t),s=vt(s),this.isBuilt&&!this.isDisabled&&this.options.movable&&(i(t)&&(a.left=t,o=!0),i(s)&&(a.top=s,o=!0),o&&this.renderCanvas(!0))},zoom:function(t,i){var e=this.canvas;t=vt(t),t=t<0?1/(1-t):1+t,this.zoomTo(e.width*t/e.naturalWidth,i)},zoomTo:function(t,i){var e,s,a,o,h,n=this.options,r=this.canvas,p=r.width,l=r.height,c=r.naturalWidth,g=r.naturalHeight;if(t=vt(t),t>=0&&this.isBuilt&&!this.isDisabled&&n.zoomable){if(s=c*t,a=g*t,i&&(e=i.originalEvent),this.trigger(Z,{originalEvent:e,oldRatio:p/c,ratio:s/c}).isDefaultPrevented())return;e?(o=this.$cropper.offset(),h=e.touches?d(e.touches):{pageX:i.pageX||e.pageX||0,pageY:i.pageY||e.pageY||0},r.left-=(s-p)*((h.pageX-o.left-r.left)/p),r.top-=(a-l)*((h.pageY-o.top-r.top)/l)):(r.left-=(s-p)/2,r.top-=(a-l)/2),r.width=s,r.height=a,this.renderCanvas(!0)}},rotate:function(t){this.rotateTo((this.image.rotate||0)+vt(t))},rotateTo:function(t){t=vt(t),i(t)&&this.isBuilt&&!this.isDisabled&&this.options.rotatable&&(this.image.rotate=t%360,this.isRotated=!0,this.renderCanvas(!0))},scale:function(t,s){var a=this.image,o=!1;e(s)&&(s=t),t=vt(t),s=vt(s),this.isBuilt&&!this.isDisabled&&this.options.scalable&&(i(t)&&(a.scaleX=t,o=!0),i(s)&&(a.scaleY=s,o=!0),o&&this.renderImage(!0))},scaleX:function(t){var e=this.image.scaleY;this.scale(t,i(e)?e:1)},scaleY:function(t){var e=this.image.scaleX;this.scale(i(e)?e:1,t)},getData:function(i){var e,s,a=this.options,o=this.image,h=this.canvas,n=this.cropBox;return this.isBuilt&&this.isCropped?(s={x:n.left-h.left,y:n.top-h.top,width:n.width,height:n.height},e=o.width/o.naturalWidth,t.each(s,function(t,a){a/=e,s[t]=i?Dt(a):a})):s={x:0,y:0,width:0,height:0},a.rotatable&&(s.rotate=o.rotate||0),a.scalable&&(s.scaleX=o.scaleX||1,s.scaleY=o.scaleY||1),s},setData:function(e){var s,a,o,h=this.options,n=this.image,r=this.canvas,p={};t.isFunction(e)&&(e=e.call(this.element)),this.isBuilt&&!this.isDisabled&&t.isPlainObject(e)&&(h.rotatable&&i(e.rotate)&&e.rotate!==n.rotate&&(n.rotate=e.rotate,this.isRotated=s=!0),h.scalable&&(i(e.scaleX)&&e.scaleX!==n.scaleX&&(n.scaleX=e.scaleX,a=!0),i(e.scaleY)&&e.scaleY!==n.scaleY&&(n.scaleY=e.scaleY,a=!0)),s?this.renderCanvas():a&&this.renderImage(),o=n.width/n.naturalWidth,i(e.x)&&(p.left=e.x*o+r.left),i(e.y)&&(p.top=e.y*o+r.top),i(e.width)&&(p.width=e.width*o),i(e.height)&&(p.height=e.height*o),this.setCropBoxData(p))},getContainerData:function(){return this.isBuilt?this.container:{}},getImageData:function(){return this.isLoaded?this.image:{}},getCanvasData:function(){var i=this.canvas,e={};return this.isBuilt&&t.each(["left","top","width","height","naturalWidth","naturalHeight"],function(t,s){e[s]=i[s]}),e},setCanvasData:function(e){var s=this.canvas,a=s.aspectRatio;t.isFunction(e)&&(e=e.call(this.$element)),this.isBuilt&&!this.isDisabled&&t.isPlainObject(e)&&(i(e.left)&&(s.left=e.left),i(e.top)&&(s.top=e.top),i(e.width)?(s.width=e.width,s.height=e.width/a):i(e.height)&&(s.height=e.height,s.width=e.height*a),this.renderCanvas(!0))},getCropBoxData:function(){var t,i=this.cropBox;return this.isBuilt&&this.isCropped&&(t={left:i.left,top:i.top,width:i.width,height:i.height}),t||{}},setCropBoxData:function(e){var s,a,o=this.cropBox,h=this.options.aspectRatio;t.isFunction(e)&&(e=e.call(this.$element)),this.isBuilt&&this.isCropped&&!this.isDisabled&&t.isPlainObject(e)&&(i(e.left)&&(o.left=e.left),i(e.top)&&(o.top=e.top),i(e.width)&&(s=!0,o.width=e.width),i(e.height)&&(a=!0,o.height=e.height),h&&(s?o.height=o.width/h:a&&(o.width=o.height*h)),this.renderCropBox())},getCroppedCanvas:function(i){var e,s,a,o,h,n,r,p,l,d,g;if(this.isBuilt&&ft)return this.isCropped?(t.isPlainObject(i)||(i={}),g=this.getData(),e=g.width,s=g.height,p=e/s,t.isPlainObject(i)&&(h=i.width,n=i.height,h?(n=h/p,r=h/e):n&&(h=n*p,r=n/s)),a=$t(h||e),o=$t(n||s),l=t("<canvas>")[0],l.width=a,l.height=o,d=l.getContext("2d"),i.fillColor&&(d.fillStyle=i.fillColor,d.fillRect(0,0,a,o)),d.drawImage.apply(d,function(){var t,i,a,o,h,n,p=c(this.$clone[0],this.image),l=p.width,d=p.height,u=this.canvas,f=[p],m=g.x+u.naturalWidth*(Ct(g.scaleX||1)-1)/2,v=g.y+u.naturalHeight*(Ct(g.scaleY||1)-1)/2;return m<=-e||m>l?m=t=a=h=0:m<=0?(a=-m,m=0,t=h=wt(l,e+m)):m<=l&&(a=0,t=h=wt(e,l-m)),t<=0||v<=-s||v>d?v=i=o=n=0:v<=0?(o=-v,v=0,i=n=wt(d,s+v)):v<=d&&(o=0,i=n=wt(s,d-v)),f.push($t(m),$t(v),$t(t),$t(i)),r&&(a*=r,o*=r,h*=r,n*=r),h>0&&n>0&&f.push($t(a),$t(o),$t(h),$t(n)),f}.call(this)),l):c(this.$clone[0],this.image)},setAspectRatio:function(t){var i=this.options;this.isDisabled||e(t)||(i.aspectRatio=xt(0,t)||NaN,this.isBuilt&&(this.initCropBox(),this.isCropped&&this.renderCropBox()))},setDragMode:function(t){var i,e,s=this.options;this.isLoaded&&!this.isDisabled&&(i=t===ct,e=s.movable&&t===dt,t=i||e?t:ut,this.$dragBox.data(it,t).toggleClass(W,i).toggleClass(M,e),s.cropBoxMovable||this.$face.data(it,t).toggleClass(W,i).toggleClass(M,e))}},v.DEFAULTS={viewMode:0,dragMode:"crop",aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,build:null,built:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},v.setDefaults=function(i){t.extend(v.DEFAULTS,i)},v.TEMPLATE='<div class="cropper-container"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>',v.other=t.fn.cropper,t.fn.cropper=function(i){var a,o=s(arguments,1);return this.each(function(){var e,s,h=t(this),n=h.data(L);if(!n){if(/destroy/.test(i))return;e=t.extend({},h.data(),t.isPlainObject(i)&&i),h.data(L,n=new v(this,e))}"string"==typeof i&&t.isFunction(s=n[i])&&(a=s.apply(n,o))}),e(a)?this:a},t.fn.cropper.Constructor=v,t.fn.cropper.setDefaults=v.setDefaults,t.fn.cropper.noConflict=function(){return t.fn.cropper=v.other,this}});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(96);
var loader = __webpack_require__(81);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Datepicker for Bootstrap v1.6.4 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(46)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):a("object"==typeof exports?require("jquery"):jQuery)}(function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(a){return function(){return this[a].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,function(a,b){b in d&&(c[b]=d[b])}),c}}var j=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;d>c;c++)if(this[c].valueOf()===b)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),k=function(b,c){a(b).data("datepicker",this),this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.hasInput=this.component&&this.inputField.length,this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=a(r.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(a,b){return parseInt(b)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};k.prototype={constructor:k,_resolveViewName:function(a,c){return 0===a||"days"===a||"month"===a?0:1===a||"months"===a||"year"===a?1:2===a||"years"===a||"decade"===a?2:3===a||"decades"===a||"century"===a?3:4===a||"centuries"===a||"millennium"===a?4:c===b?!1:c},_check_template:function(c){try{if(c===b||""===c)return!1;if((c.match(/[<>]/g)||[]).length<=0)return!0;var d=a(c);return d.length>0}catch(e){return!1}},_process_options:function(b){this._o=a.extend({},this._o,b);var e=this.o=a.extend({},this._o),f=e.language;q[f]||(f=f.split("-")[0],q[f]||(f=o.language)),e.language=f,e.startView=this._resolveViewName(e.startView,0),e.minViewMode=this._resolveViewName(e.minViewMode,0),e.maxViewMode=this._resolveViewName(e.maxViewMode,4),e.startView=Math.min(e.startView,e.maxViewMode),e.startView=Math.max(e.startView,e.minViewMode),e.multidate!==!0&&(e.multidate=Number(e.multidate)||!1,e.multidate!==!1&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var g=r.parseFormat(e.format);e.startDate!==-(1/0)&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=r.parseDate(e.startDate,g,e.language,e.assumeNearbyYear):e.startDate=-(1/0)),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=r.parseDate(e.endDate,g,e.language,e.assumeNearbyYear):e.endDate=1/0),e.daysOfWeekDisabled=e.daysOfWeekDisabled||[],a.isArray(e.daysOfWeekDisabled)||(e.daysOfWeekDisabled=e.daysOfWeekDisabled.split(/[,\s]*/)),e.daysOfWeekDisabled=a.map(e.daysOfWeekDisabled,function(a){return parseInt(a,10)}),e.daysOfWeekHighlighted=e.daysOfWeekHighlighted||[],a.isArray(e.daysOfWeekHighlighted)||(e.daysOfWeekHighlighted=e.daysOfWeekHighlighted.split(/[,\s]*/)),e.daysOfWeekHighlighted=a.map(e.daysOfWeekHighlighted,function(a){return parseInt(a,10)}),e.datesDisabled=e.datesDisabled||[],a.isArray(e.datesDisabled)||(e.datesDisabled=[e.datesDisabled]),e.datesDisabled=a.map(e.datesDisabled,function(a){return r.parseDate(a,g,e.language,e.assumeNearbyYear)});var h=String(e.orientation).toLowerCase().split(/\s+/g),i=e.orientation.toLowerCase();if(h=a.grep(h,function(a){return/^auto|left|right|top|bottom$/.test(a)}),e.orientation={x:"auto",y:"auto"},i&&"auto"!==i)if(1===h.length)switch(h[0]){case"top":case"bottom":e.orientation.y=h[0];break;case"left":case"right":e.orientation.x=h[0]}else i=a.grep(h,function(a){return/^left|right$/.test(a)}),e.orientation.x=i[0]||"auto",i=a.grep(h,function(a){return/^top|bottom$/.test(a)}),e.orientation.y=i[0]||"auto";else;if(e.defaultViewDate){var j=e.defaultViewDate.year||(new Date).getFullYear(),k=e.defaultViewDate.month||0,l=e.defaultViewDate.day||1;e.defaultViewDate=c(j,k,l)}else e.defaultViewDate=d()},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};this.o.showOnFocus===!0&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.hasInput?this._events=[[this.inputField,b],[this.component,{click:a.proxy(this.show,this)}]]:this._events=[[this.element,{click:a.proxy(this.show,this),keydown:a.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy(function(a){this.update(a.date)},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{mousedown:a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)},this)})},show:function(){return this.inputField.prop("disabled")||this.inputField.prop("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this)},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&-1!==a.inArray("text/plain",b.originalEvent.clipboardData.types))c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){return a&&new Date(a.getTime()+6e4*a.getTimezoneOffset())},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()))},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return"undefined"!=typeof a?new Date(a):null},clearDates:function(){this.inputField&&this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,a.map(b,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),remove:f("destroy"),setValue:function(){var a=this.getFormattedDate();return this.inputField.val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return r.formatDate(a,c,d)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){this._process_options({datesDisabled:a}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=10,e=a(this.o.container),f=e.width(),g="body"===this.o.container?a(document).scrollTop():e.scrollTop(),h=e.offset(),i=[];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==b&&i.push(parseInt(b))});var j=Math.max.apply(Math,i)+this.o.zIndexOffset,k=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),m=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),n=k.left-h.left,o=k.top-h.top;"body"!==this.o.container&&(o+=g),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(n-=b-m)):k.left<0?(this.picker.addClass("datepicker-orient-left"),n-=k.left-d):n+b>f?(this.picker.addClass("datepicker-orient-right"),n+=m-b):this.picker.addClass("datepicker-orient-left");var p,q=this.o.orientation.y;if("auto"===q&&(p=-g+o-c,q=0>p?"bottom":"top"),this.picker.addClass("datepicker-orient-"+q),"top"===q?o-=c+parseInt(this.picker.css("padding-top")):o+=l,this.o.rtl){var r=f-(n+m);this.picker.css({top:o,right:r,zIndex:j})}else this.picker.css({top:o,left:n,zIndex:j});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return r.parseDate(a,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),c=a.grep(c,a.proxy(function(a){return!this.dateWithinRange(a)||!a},this),!0),this.dates.replace(c),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate,d?this.setValue():c.length&&String(b)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&b.length&&this._trigger("clearDate"),this.fill(),this.element.change(),this},fillDow:function(){var b=this.o.weekStart,c="<tr>";for(this.o.calendarWeeks&&(this.picker.find(".datepicker-days .datepicker-switch").attr("colspan",function(a,b){return parseInt(b)+1}),c+='<th class="cw">&#160;</th>');b<this.o.weekStart+7;)c+='<th class="dow',a.inArray(b,this.o.daysOfWeekDisabled)>-1&&(c+=" disabled"),c+='">'+q[this.o.language].daysMin[b++%7]+"</th>";c+="</tr>",this.picker.find(".datepicker-days thead").append(c)},fillMonths:function(){for(var a=this._utc_to_local(this.viewDate),b="",c=0;12>c;){var d=a&&a.getMonth()===c?" focused":"";b+='<span class="month'+d+'">'+q[this.o.language].monthsShort[c++]+"</span>"}this.picker.find(".datepicker-months td").html(b)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),f=new Date;return b.getUTCFullYear()<d||b.getUTCFullYear()===d&&b.getUTCMonth()<e?c.push("old"):(b.getUTCFullYear()>d||b.getUTCFullYear()===d&&b.getUTCMonth()>e)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&b.getUTCFullYear()===f.getFullYear()&&b.getUTCMonth()===f.getMonth()&&b.getUTCDate()===f.getDate()&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),this.dateWithinRange(b)||c.push("disabled"),this.dateIsDisabled(b)&&c.push("disabled","disabled-date"),-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)&&c.push("highlighted"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},_fill_yearsView:function(c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;for(k="",l=this.picker.find(c),m=parseInt(g/e,10)*e,o=parseInt(h/f,10)*f,p=parseInt(i/f,10)*f,n=a.map(this.dates,function(a){return parseInt(a.getUTCFullYear()/f,10)*f}),l.find(".datepicker-switch").text(m+"-"+(m+9*f)),q=m-f,r=-1;11>r;r+=1)s=[d],t=null,-1===r?s.push("old"):10===r&&s.push("new"),-1!==a.inArray(q,n)&&s.push("active"),(o>q||q>p)&&s.push("disabled"),q===this.viewDate.getFullYear()&&s.push("focused"),j!==a.noop&&(u=j(new Date(q,0,1)),u===b?u={}:"boolean"==typeof u?u={enabled:u}:"string"==typeof u&&(u={classes:u}),u.enabled===!1&&s.push("disabled"),u.classes&&(s=s.concat(u.classes.split(/\s+/))),u.tooltip&&(t=u.tooltip)),k+='<span class="'+s.join(" ")+'"'+(t?' title="'+t+'"':"")+">"+q+"</span>",q+=f;l.find("td").html(k)},fill:function(){var d,e,f=new Date(this.viewDate),g=f.getUTCFullYear(),h=f.getUTCMonth(),i=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),j=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),k=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,m=q[this.o.language].today||q.en.today||"",n=q[this.o.language].clear||q.en.clear||"",o=q[this.o.language].titleFormat||q.en.titleFormat;if(!isNaN(g)&&!isNaN(h)){this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f,o,this.o.language)),this.picker.find("tfoot .today").text(m).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(n).toggle(this.o.clearBtn!==!1),this.picker.find("thead .datepicker-title").text(this.o.title).toggle(""!==this.o.title),this.updateNavArrows(),this.fillMonths();var p=c(g,h-1,28),s=r.getDaysInMonth(p.getUTCFullYear(),p.getUTCMonth());p.setUTCDate(s),p.setUTCDate(s-(p.getUTCDay()-this.o.weekStart+7)%7);var t=new Date(p);p.getUTCFullYear()<100&&t.setUTCFullYear(p.getUTCFullYear()),t.setUTCDate(t.getUTCDate()+42),t=t.valueOf();for(var u,v=[];p.valueOf()<t;){if(p.getUTCDay()===this.o.weekStart&&(v.push("<tr>"),this.o.calendarWeeks)){var w=new Date(+p+(this.o.weekStart-p.getUTCDay()-7)%7*864e5),x=new Date(Number(w)+(11-w.getUTCDay())%7*864e5),y=new Date(Number(y=c(x.getUTCFullYear(),0,1))+(11-y.getUTCDay())%7*864e5),z=(x-y)/864e5/7+1;v.push('<td class="cw">'+z+"</td>")}u=this.getClassNames(p),u.push("day"),this.o.beforeShowDay!==a.noop&&(e=this.o.beforeShowDay(this._utc_to_local(p)),e===b?e={}:"boolean"==typeof e?e={enabled:e}:"string"==typeof e&&(e={classes:e}),e.enabled===!1&&u.push("disabled"),e.classes&&(u=u.concat(e.classes.split(/\s+/))),e.tooltip&&(d=e.tooltip)),u=a.isFunction(a.uniqueSort)?a.uniqueSort(u):a.unique(u),v.push('<td class="'+u.join(" ")+'"'+(d?' title="'+d+'"':"")+">"+p.getUTCDate()+"</td>"),d=null,p.getUTCDay()===this.o.weekEnd&&v.push("</tr>"),p.setUTCDate(p.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(v.join(""));var A=q[this.o.language].monthsTitle||q.en.monthsTitle||"Months",B=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?A:g).end().find("span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===g&&B.eq(b.getUTCMonth()).addClass("active")}),(i>g||g>k)&&B.addClass("disabled"),g===i&&B.slice(0,j).addClass("disabled"),g===k&&B.slice(l+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var C=this;a.each(B,function(c,d){var e=new Date(g,c,1),f=C.o.beforeShowMonth(e);f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),f.enabled!==!1||a(d).hasClass("disabled")||a(d).addClass("disabled"),f.classes&&a(d).addClass(f.classes),f.tooltip&&a(d).prop("title",f.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,1,g,i,k,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,10,g,i,k,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,100,g,i,k,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()&&c<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()&&c>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:case 3:case 4:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(b){b.preventDefault(),b.stopPropagation();var e,f,g,h,i,j,k;e=a(b.target),e.hasClass("datepicker-switch")&&this.showMode(1);var l=e.closest(".prev, .next");l.length>0&&(f=r.modes[this.viewMode].navStep*(l.hasClass("prev")?-1:1),0===this.viewMode?(this.viewDate=this.moveMonth(this.viewDate,f),this._trigger("changeMonth",this.viewDate)):(this.viewDate=this.moveYear(this.viewDate,f),1===this.viewMode&&this._trigger("changeYear",this.viewDate)),this.fill()),e.hasClass("today")&&!e.hasClass("day")&&(this.showMode(-2),this._setDate(d(),"linked"===this.o.todayBtn?null:"view")),e.hasClass("clear")&&this.clearDates(),e.hasClass("disabled")||(e.hasClass("day")&&(g=parseInt(e.text(),10)||1,h=this.viewDate.getUTCFullYear(),i=this.viewDate.getUTCMonth(),e.hasClass("old")&&(0===i?(i=11,h-=1,j=!0,k=!0):(i-=1,j=!0)),e.hasClass("new")&&(11===i?(i=0,h+=1,j=!0,k=!0):(i+=1,j=!0)),this._setDate(c(h,i,g)),k&&this._trigger("changeYear",this.viewDate),j&&this._trigger("changeMonth",this.viewDate)),e.hasClass("month")&&(this.viewDate.setUTCDate(1),g=1,i=e.parent().find("span").index(e),h=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(i),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode?(this._setDate(c(h,i,g)),this.showMode()):this.showMode(-1),this.fill()),(e.hasClass("year")||e.hasClass("decade")||e.hasClass("century"))&&(this.viewDate.setUTCDate(1),g=1,i=0,h=parseInt(e.text(),10)||0,this.viewDate.setUTCFullYear(h),e.hasClass("year")&&(this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(c(h,i,g))),e.hasClass("decade")&&(this._trigger("changeDecade",this.viewDate),3===this.o.minViewMode&&this._setDate(c(h,i,g))),e.hasClass("century")&&(this._trigger("changeCentury",this.viewDate),4===this.o.minViewMode&&this._setDate(c(h,i,g))),this.showMode(-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&a(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):this.o.multidate===!1?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),b&&"view"!==b||(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate"),this.inputField&&this.inputField.change(),!this.o.autoclose||b&&"date"!==b||this.hide()},moveDay:function(a,b){var c=new Date(a);return c.setUTCDate(a.getUTCDate()+b),c},moveWeek:function(a,b){return this.moveDay(a,7*b)},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=-1===b?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),(0>c||c>11)&&(c=(c+12)%12);else{for(var j=0;i>j;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},moveAvailableDate:function(a,b,c){do{if(a=this[c](a,b),!this.dateWithinRange(a))return!1;c="moveDay"}while(this.dateIsDisabled(a));return a},weekOfDateIsDisabled:function(b){return-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(b){return this.weekOfDateIsDisabled(b)||a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void((40===a.keyCode||27===a.keyCode)&&(this.show(),a.stopPropagation()));var b,c,d=!1,e=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;b=37===a.keyCode||38===a.keyCode?-1:1,0===this.viewMode?a.ctrlKey?(c=this.moveAvailableDate(e,b,"moveYear"),c&&this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveAvailableDate(e,b,"moveMonth"),c&&this._trigger("changeMonth",this.viewDate)):37===a.keyCode||39===a.keyCode?c=this.moveAvailableDate(e,b,"moveDay"):this.weekOfDateIsDisabled(e)||(c=this.moveAvailableDate(e,b,"moveWeek")):1===this.viewMode?((38===a.keyCode||40===a.keyCode)&&(b=4*b),c=this.moveAvailableDate(e,b,"moveMonth")):2===this.viewMode&&((38===a.keyCode||40===a.keyCode)&&(b=4*b),c=this.moveAvailableDate(e,b,"moveYear")),c&&(this.focusDate=this.viewDate=c,this.setValue(),this.fill(),a.preventDefault());break;case 13:if(!this.o.forceParse)break;e=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(e),d=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),a.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}d&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField&&this.inputField.change())},showMode:function(a){a&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,this.viewMode+a))),this.picker.children("div").hide().filter(".datepicker-"+r.modes[this.viewMode].clsName).show(),this.updateNavArrows()}};var l=function(b,c){a(b).data("datepicker",this),this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a(b).data("datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(b){if(!this.updating){this.updating=!0;var c=a(b.target).data("datepicker");if("undefined"!=typeof c){var d=c.getUTCDate(),e=a.inArray(b.target,this.inputs),f=e-1,g=e+1,h=this.inputs.length;if(-1!==e){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b.setUTCDate(d)}),d<this.dates[f])for(;f>=0&&d<this.dates[f];)this.pickers[f--].setUTCDate(d);else if(d>this.dates[g])for(;h>g&&d>this.dates[g];)this.pickers[g++].setUTCDate(d);this.updateDates(),delete this.updating}}}},remove:function(){a.map(this.pickers,function(a){a.remove()}),delete this.element.data().datepicker}};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each(function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);b.hasClass("input-daterange")||p.inputs?(a.extend(p,{inputs:p.inputs||b.find("input").toArray()}),f=new l(this,p)):f=new k(this,p),b.data("datepicker",f)}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))}),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,beforeShowDecade:a.noop,beforeShowCentury:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&laquo;",rightArrow:"&raquo;"}},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10},{clsName:"decades",navFnc:"FullDecade",navStep:100},{clsName:"centuries",navFnc:"FullCentury",navStep:1e3}],isLeapYear:function(a){return a%4===0&&a%100!==0||a%400===0},getDaysInMonth:function(a,b){return[31,r.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\x00").split("\x00"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(e,f,g,h){function i(a,b){return b===!0&&(b=10),100>a&&(a+=2e3,a>(new Date).getFullYear()+b&&(a-=100)),a}function j(){var a=this.slice(0,s[n].length),b=s[n].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!e)return b;if(e instanceof Date)return e;if("string"==typeof f&&(f=r.parseFormat(f)),f.toValue)return f.toValue(e,f,g);var l,m,n,o,p=/([\-+]\d+)([dmwy])/,s=e.match(/([\-+]\d+)([dmwy])/g),t={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},u={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)){for(e=new Date,n=0;n<s.length;n++)l=p.exec(s[n]),m=parseInt(l[1]),o=t[l[2]],e=k.prototype[o](e,m);return c(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}if("undefined"!=typeof u[e]&&(e=u[e],s=e.match(/([\-+]\d+)([dmwy])/g),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e))){for(e=new Date,n=0;n<s.length;n++)l=p.exec(s[n]),m=parseInt(l[1]),o=t[l[2]],e=k.prototype[o](e,m);return c(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}s=e&&e.match(this.nonpunctuation)||[],e=new Date;var v,w,x={},y=["yyyy","yy","M","MM","m","mm","d","dd"],z={yyyy:function(a,b){return a.setUTCFullYear(h?i(b,h):b)},yy:function(a,b){return a.setUTCFullYear(h?i(b,h):b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};z.M=z.MM=z.mm=z.m,z.dd=z.d,e=d();var A=f.parts.slice();if(s.length!==A.length&&(A=a(A).filter(function(b,c){return-1!==a.inArray(c,y)}).toArray()),s.length===A.length){var B;for(n=0,B=A.length;B>n;n++){if(v=parseInt(s[n],10),l=A[n],isNaN(v))switch(l){case"MM":w=a(q[g].months).filter(j),v=a.inArray(w[0],q[g].months)+1;break;case"M":w=a(q[g].monthsShort).filter(j),v=a.inArray(w[0],q[g].monthsShort)+1}x[l]=v}var C,D;for(n=0;n<y.length;n++)D=y[n],D in x&&!isNaN(x[D])&&(C=new Date(e),z[D](C,x[D]),isNaN(C)||(e=C))}return e},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),
c.toDisplay)return c.toDisplay(b,c,d);var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.6.4",a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))}),a(function(){n.call(a('[data-provide="datepicker-inline"]'))})});

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Cropper v2.3.4\r\n * https://github.com/fengyuanchen/cropper\r\n *\r\n * Copyright (c) 2014-2016 Fengyuan Chen and contributors\r\n * Released under the MIT license\r\n *\r\n * Date: 2016-09-03T05:50:45.412Z\r\n */.cropper-container{font-size:0;line-height:0;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;direction:ltr!important}.cropper-container img{display:block;width:100%;min-width:0!important;max-width:none!important;height:100%;min-height:0!important;max-height:none!important;image-orientation:0deg!important}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{position:absolute;top:0;right:0;bottom:0;left:0}.cropper-wrap-box{overflow:hidden}.cropper-drag-box{opacity:0;background-color:#fff;filter:alpha(opacity=0)}.cropper-dashed,.cropper-modal{opacity:.5;filter:alpha(opacity=50)}.cropper-modal{background-color:#000}.cropper-view-box{display:block;overflow:hidden;width:100%;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75)}.cropper-dashed{position:absolute;display:block;border:0 dashed #eee}.cropper-dashed.dashed-h{top:33.33333%;left:0;width:100%;height:33.33333%;border-top-width:1px;border-bottom-width:1px}.cropper-dashed.dashed-v{top:0;left:33.33333%;width:33.33333%;height:100%;border-right-width:1px;border-left-width:1px}.cropper-center{position:absolute;top:50%;left:50%;display:block;width:0;height:0;opacity:.75;filter:alpha(opacity=75)}.cropper-center:after,.cropper-center:before{position:absolute;display:block;content:\" \";background-color:#eee}.cropper-center:before{top:0;left:-3px;width:7px;height:1px}.cropper-center:after{top:-3px;left:0;width:1px;height:7px}.cropper-face,.cropper-line,.cropper-point{position:absolute;display:block;width:100%;height:100%;opacity:.1;filter:alpha(opacity=10)}.cropper-face{top:0;left:0;background-color:#fff}.cropper-line,.cropper-point{background-color:#39f}.cropper-line.line-e{top:0;right:-3px;width:5px;cursor:e-resize}.cropper-line.line-n{top:-3px;left:0;height:5px;cursor:n-resize}.cropper-line.line-w{top:0;left:-3px;width:5px;cursor:w-resize}.cropper-line.line-s{bottom:-3px;left:0;height:5px;cursor:s-resize}.cropper-point{width:5px;height:5px;opacity:.75;filter:alpha(opacity=75)}.cropper-point.point-e{top:50%;right:-3px;margin-top:-3px;cursor:e-resize}.cropper-point.point-n{top:-3px;left:50%;margin-left:-3px;cursor:n-resize}.cropper-point.point-w{top:50%;left:-3px;margin-top:-3px;cursor:w-resize}.cropper-point.point-s{bottom:-3px;left:50%;margin-left:-3px;cursor:s-resize}.cropper-point.point-ne{top:-3px;right:-3px;cursor:ne-resize}.cropper-point.point-nw{top:-3px;left:-3px;cursor:nw-resize}.cropper-point.point-sw{bottom:-3px;left:-3px;cursor:sw-resize}.cropper-point.point-se{right:-3px;bottom:-3px;width:20px;height:20px;cursor:se-resize;opacity:1;filter:alpha(opacity=100)}.cropper-point.point-se:before{position:absolute;right:-50%;bottom:-50%;display:block;width:200%;height:200%;content:\" \";opacity:0;background-color:#39f;filter:alpha(opacity=0)}@media (min-width:768px){.cropper-point.point-se{width:15px;height:15px}}@media (min-width:992px){.cropper-point.point-se{width:10px;height:10px}}@media (min-width:1200px){.cropper-point.point-se{width:5px;height:5px;opacity:.75;filter:alpha(opacity=75)}}.cropper-invisible{opacity:0;filter:alpha(opacity=0)}.cropper-bg{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC)}.cropper-hide{position:absolute;display:block;width:0;height:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}", ""]);

// exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(94);
var loader = __webpack_require__(81);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)(false);
// imports


// module
exports.push([module.i, ".img-container,.img-preview{background-color:#fff;border:1px dashed #e5e5e5;width:100%;text-align:center}.img-container{min-height:200px;max-height:300px;margin-bottom:20px}.cropper-bg{background:none}.cropper-modal{background:#fff}@media (min-width:768px){.img-container{min-height:300px}}.img-container>img{max-width:100%}.docs-preview{margin-right:-15px}.img-preview{float:left;margin-right:10px;margin-bottom:10px;overflow:hidden}.img-preview>img{max-width:100%}.preview-lg{width:263px;height:148px}.preview-md{width:139px;height:78px}.preview-sm{width:69px;height:39px}.preview-xs{width:35px;height:20px;margin-right:0}.docs-data>.input-group{margin-bottom:10px}.docs-data>.input-group>label{min-width:80px}.docs-data>.input-group>span{min-width:50px}.docs-buttons>.btn,.docs-buttons>.btn-group,.docs-buttons>.form-control{margin-right:5px;margin-bottom:10px}.docs-toggles>.btn,.docs-toggles>.btn-group,.docs-toggles>.dropdown{margin-bottom:10px}.docs-tooltip{display:block;margin:-6px -12px;padding:6px 12px}.docs-tooltip>.icon{margin:0 -3px;vertical-align:top}.tooltip-inner{white-space:normal}.btn-toggle .tooltip-inner,.btn-upload .tooltip-inner{white-space:nowrap}.btn-toggle{padding:6px}.btn-toggle>.docs-tooltip{margin:-6px;padding:6px}@media (max-width:400px){.btn-group-crop{margin-right:-15px!important}.btn-group-crop .docs-tooltip,.btn-group-crop>.btn{padding-left:5px;padding-right:5px}.btn-group-crop .docs-tooltip{margin-left:-5px;margin-right:-5px}}.docs-options .dropdown-menu{width:100%}.docs-options .dropdown-menu>li{padding:3px 20px}.docs-options .dropdown-menu>li:hover{background-color:#f7f7f7}.docs-options .dropdown-menu>li>label{display:block}.docs-cropped .modal-body{text-align:center}.docs-cropped .modal-body>canvas,.docs-cropped .modal-body>img{max-width:100%}.docs-diagram .modal-dialog{max-width:352px}.cropppercustomcut{height:1003px!important;width:317px!important}", ""]);

// exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)(false);
// imports


// module
exports.push([module.i, ".richText i{font-style:italic;position:static;font-size:inherit;color:inherit}.richText u{text-decoration:underline}.richText li{display:list-item}.richText ol{list-style-type:decimal}.richText ul{list-style-type:disc}.content{background-color:#fafafa;border:1px solid #efefef;color:#333;height:150px;width:100%}.richText{margin:10px 0 20px;-webkit-box-shadow:0 0 20px 0 #999;-moz-box-shadow:0 0 20px 0 #999;box-shadow:0 0 20px 0 #999;position:relative;background-color:#fafafa;border:1px solid #efefef;color:#333;width:100%}.richText .richText-form{font-family:Calibri,Verdana,Helvetica,sans-serif}.richText .richText-form label{display:block;padding:10px 15px}.richText .richText-form input[type=file],.richText .richText-form input[type=number],.richText .richText-form input[type=text],.richText .richText-form select{padding:10px 15px;border:1px solid #999;min-width:200px;width:100%}.richText .richText-form select{cursor:pointer}.richText .richText-form button{margin:10px 0;padding:10px 15px;background-color:#3498db;border:none;color:#fafafa;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.richText .richText-toolbar{min-height:20px;border-bottom:1px solid #efefef}.richText .richText-toolbar ul li{float:left;display:block;list-style:none}.richText .richText-toolbar ul li a{display:block;color:#333;padding:10px 12px;cursor:pointer;-webkit-transition:background-color .4s;-moz-transition:background-color .4s;transition:background-color .4s}.richText .richText-toolbar ul li a .fa,.richText .richText-toolbar ul li a .far,.richText .richText-toolbar ul li a .fas,.richText .richText-toolbar ul li a svg{pointer-events:none}.richText .richText-toolbar ul li a .richText-dropdown-outer{display:none;position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.3);cursor:default}.richText .richText-toolbar ul{margin:0}.richText .richText-toolbar ul li a .richText-dropdown-outer .richText-dropdown{position:relative;display:block;margin:3% auto 0;background-color:#fafafa;border:1px solid #efefef;min-width:100px;width:300px;max-width:90%;-webkit-box-shadow:0 0 5px 0 #333;-moz-box-shadow:0 0 5px 0 #333;box-shadow:0 0 5px 0 #333}.richText .richText-toolbar ul li a .richText-dropdown-outer .richText-dropdown .richText-dropdown-close{position:absolute;top:0;right:-23px;background:#fff;color:#333;cursor:pointer;font-size:20px;text-align:center;width:20px}.richText .richText-toolbar ul li a .richText-dropdown-outer ul.richText-dropdown{list-style:none}.richText .richText-toolbar ul li a .richText-dropdown-outer ul.richText-dropdown li{display:block;float:none;font-family:Calibri,Verdana,Helvetica,sans-serif}.richText .richText-toolbar ul li a .richText-dropdown-outer ul.richText-dropdown li a{display:block;padding:10px 15px;border-bottom:1px solid #efefef}.richText .richText-toolbar ul li a .richText-dropdown-outer ul.richText-dropdown li a:hover{background-color:#fff}.richText .richText-toolbar ul li a .richText-dropdown-outer ul.richText-dropdown li.inline{margin:10px 6px;float:left}.richText .richText-toolbar ul li a .richText-dropdown-outer ul.richText-dropdown li.inline a{display:block;padding:0;margin:0;border:none;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-box-shadow:0 0 10px 0 #999;-moz-box-shadow:0 0 10px 0 #999;box-shadow:0 0 10px 0 #999}.richText .richText-toolbar ul li a .richText-dropdown-outer ul.richText-dropdown li.inline a span{display:block;height:30px;width:30px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.richText .richText-toolbar ul li a .richText-dropdown-outer div.richText-dropdown{padding:10px 15px}.richText .richText-toolbar ul li a:hover{background-color:#fff}.richText .richText-toolbar ul li[data-disable=true]{opacity:.1}.richText .richText-toolbar ul li[data-disable=true] a{cursor:default}.richText .richText-toolbar ul li:not([data-disable=true]).is-selected .richText-dropdown-outer{display:block}.richText .richText-toolbar ul:after{display:block;content:\"\";clear:both}.richText .richText-toolbar:last-child{font-size:12px}.richText .richText-toolbar:after{display:block;clear:both;content:\"\"}.richText .richText-editor{padding:20px;background-color:#fff;border-left:2px solid #fff;font-family:Calibri,Verdana,Helvetica,sans-serif;height:300px;outline:none;overflow-y:scroll;overflow-x:auto}.richText .richText-editor ol,.richText .richText-editor ul{margin:10px 25px}.richText .richText-editor table{margin:10px 0;border-spacing:0;width:100%}.richText .richText-editor table td,.richText .richText-editor table th{padding:10px;border:1px solid #efefef}.richText .richText-editor:focus{border-left:2px solid #3498db}.richText .richText-initial{margin-bottom:-4px;padding:10px;background-color:#282828;border:none;color:#3f3;font-family:Monospace,Calibri,Verdana,Helvetica,sans-serif;max-width:100%;min-width:100%;width:100%;min-height:400px;height:400px}.richText .richText-help{float:right;display:block;color:#333;padding:10px 15px;cursor:pointer}.richText .richText-redo,.richText .richText-undo{float:left;color:#333;display:block;padding:10px 15px;border-right:1px solid #efefef;cursor:pointer}.richText .richText-redo.is-disabled,.richText .richText-undo.is-disabled{opacity:.4}.richText .richText-help-popup a{color:#3498db;text-decoration:underline}.richText .richText-help-popup hr{margin:10px auto 5px;border:none;border-top:1px solid #efefef}.richText .richText-list.list-rightclick{position:absolute;background-color:#fafafa;border-right:1px solid #efefef;border-bottom:1px solid #efefef}.richText .richText-list.list-rightclick li{padding:5px 7px;cursor:pointer;list-style:none}@media only screen and (max-width:960px){.page-wrapper{width:100%;max-width:100%}}", ""]);

// exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)(false);
// imports


// module
exports.push([module.i, "/*! * Datepicker for Bootstrap v1.6.4 (https://github.com/eternicode/bootstrap-datepicker) * * Copyright 2012 Stefan Petre * Improvements by Andrew Rowls * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0) */.datepicker{padding:4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;direction:ltr}.datepicker-inline{width:220px}.datepicker.datepicker-rtl{direction:rtl}.datepicker.datepicker-rtl table tr td span{float:right}.datepicker-dropdown{top:0;left:0}.datepicker-dropdown:before{content:\"\";display:inline-block;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #999;border-top:0;border-bottom-color:rgba(0,0,0,.2);position:absolute}.datepicker-dropdown:after{content:\"\";display:inline-block;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;border-top:0;position:absolute}.datepicker-dropdown.datepicker-orient-left:before{left:6px}.datepicker-dropdown.datepicker-orient-left:after{left:7px}.datepicker-dropdown.datepicker-orient-right:before{right:6px}.datepicker-dropdown.datepicker-orient-right:after{right:7px}.datepicker-dropdown.datepicker-orient-bottom:before{top:-7px}.datepicker-dropdown.datepicker-orient-bottom:after{top:-6px}.datepicker-dropdown.datepicker-orient-top:before{bottom:-7px;border-bottom:0;border-top:7px solid #999}.datepicker-dropdown.datepicker-orient-top:after{bottom:-6px;border-bottom:0;border-top:6px solid #fff}.datepicker table{margin:0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.datepicker td,.datepicker th{text-align:center;width:20px;height:20px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:none}.table-striped .datepicker table tr td,.table-striped .datepicker table tr th{background-color:transparent}.datepicker table tr td.day.focused,.datepicker table tr td.day:hover{background:#eee;cursor:pointer}.datepicker table tr td.new,.datepicker table tr td.old{color:#999}.datepicker table tr td.disabled,.datepicker table tr td.disabled:hover{background:0 0;color:#999;cursor:default}.datepicker table tr td.highlighted{background:#d9edf7;border-radius:0}.datepicker table tr td.today,.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled:hover,.datepicker table tr td.today:hover{background-color:#fde19a;background-image:-moz-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-ms-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-webkit-gradient(linear,0 0,0 100%,from(#fdd49a),to(#fdf59a));background-image:-webkit-linear-gradient(180deg,#fdd49a,#fdf59a);background-image:-o-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:linear-gradient(180deg,#fdd49a,#fdf59a);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#fdd49a\",endColorstr=\"#fdf59a\",GradientType=0);border-color:#fdf59a #fdf59a #fbed50;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#000}.datepicker table tr td.today.active,.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled.active,.datepicker table tr td.today.disabled.disabled,.datepicker table tr td.today.disabled:active,.datepicker table tr td.today.disabled:hover,.datepicker table tr td.today.disabled:hover.active,.datepicker table tr td.today.disabled:hover.disabled,.datepicker table tr td.today.disabled:hover:active,.datepicker table tr td.today.disabled:hover:hover,.datepicker table tr td.today.disabled:hover[disabled],.datepicker table tr td.today.disabled[disabled],.datepicker table tr td.today:active,.datepicker table tr td.today:hover,.datepicker table tr td.today:hover.active,.datepicker table tr td.today:hover.disabled,.datepicker table tr td.today:hover:active,.datepicker table tr td.today:hover:hover,.datepicker table tr td.today:hover[disabled],.datepicker table tr td.today[disabled]{background-color:#fdf59a}.datepicker table tr td.today.active,.datepicker table tr td.today.disabled.active,.datepicker table tr td.today.disabled:active,.datepicker table tr td.today.disabled:hover.active,.datepicker table tr td.today.disabled:hover:active,.datepicker table tr td.today:active,.datepicker table tr td.today:hover.active,.datepicker table tr td.today:hover:active{background-color:#fbf069\\9}.datepicker table tr td.today:hover:hover{color:#000}.datepicker table tr td.today.active:hover{color:#fff}.datepicker table tr td.range,.datepicker table tr td.range.disabled,.datepicker table tr td.range.disabled:hover,.datepicker table tr td.range:hover{background:#eee;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.datepicker table tr td.range.today,.datepicker table tr td.range.today.disabled,.datepicker table tr td.range.today.disabled:hover,.datepicker table tr td.range.today:hover{background-color:#f3d17a;background-image:-moz-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-ms-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-webkit-gradient(linear,0 0,0 100%,from(#f3c17a),to(#f3e97a));background-image:-webkit-linear-gradient(180deg,#f3c17a,#f3e97a);background-image:-o-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:linear-gradient(180deg,#f3c17a,#f3e97a);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#f3c17a\",endColorstr=\"#f3e97a\",GradientType=0);border-color:#f3e97a #f3e97a #edde34;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.datepicker table tr td.range.today.active,.datepicker table tr td.range.today.disabled,.datepicker table tr td.range.today.disabled.active,.datepicker table tr td.range.today.disabled.disabled,.datepicker table tr td.range.today.disabled:active,.datepicker table tr td.range.today.disabled:hover,.datepicker table tr td.range.today.disabled:hover.active,.datepicker table tr td.range.today.disabled:hover.disabled,.datepicker table tr td.range.today.disabled:hover:active,.datepicker table tr td.range.today.disabled:hover:hover,.datepicker table tr td.range.today.disabled:hover[disabled],.datepicker table tr td.range.today.disabled[disabled],.datepicker table tr td.range.today:active,.datepicker table tr td.range.today:hover,.datepicker table tr td.range.today:hover.active,.datepicker table tr td.range.today:hover.disabled,.datepicker table tr td.range.today:hover:active,.datepicker table tr td.range.today:hover:hover,.datepicker table tr td.range.today:hover[disabled],.datepicker table tr td.range.today[disabled]{background-color:#f3e97a}.datepicker table tr td.range.today.active,.datepicker table tr td.range.today.disabled.active,.datepicker table tr td.range.today.disabled:active,.datepicker table tr td.range.today.disabled:hover.active,.datepicker table tr td.range.today.disabled:hover:active,.datepicker table tr td.range.today:active,.datepicker table tr td.range.today:hover.active,.datepicker table tr td.range.today:hover:active{background-color:#efe24b\\9}.datepicker table tr td.selected,.datepicker table tr td.selected.disabled,.datepicker table tr td.selected.disabled:hover,.datepicker table tr td.selected:hover{background-color:#9e9e9e;background-image:-moz-linear-gradient(to bottom,#b3b3b3,grey);background-image:-ms-linear-gradient(to bottom,#b3b3b3,grey);background-image:-webkit-gradient(linear,0 0,0 100%,from(#b3b3b3),to(grey));background-image:-webkit-linear-gradient(180deg,#b3b3b3,grey);background-image:-o-linear-gradient(to bottom,#b3b3b3,grey);background-image:linear-gradient(180deg,#b3b3b3,grey);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#b3b3b3\",endColorstr=\"#808080\",GradientType=0);border-color:grey grey #595959;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td.selected.active,.datepicker table tr td.selected.disabled,.datepicker table tr td.selected.disabled.active,.datepicker table tr td.selected.disabled.disabled,.datepicker table tr td.selected.disabled:active,.datepicker table tr td.selected.disabled:hover,.datepicker table tr td.selected.disabled:hover.active,.datepicker table tr td.selected.disabled:hover.disabled,.datepicker table tr td.selected.disabled:hover:active,.datepicker table tr td.selected.disabled:hover:hover,.datepicker table tr td.selected.disabled:hover[disabled],.datepicker table tr td.selected.disabled[disabled],.datepicker table tr td.selected:active,.datepicker table tr td.selected:hover,.datepicker table tr td.selected:hover.active,.datepicker table tr td.selected:hover.disabled,.datepicker table tr td.selected:hover:active,.datepicker table tr td.selected:hover:hover,.datepicker table tr td.selected:hover[disabled],.datepicker table tr td.selected[disabled]{background-color:grey}.datepicker table tr td.selected.active,.datepicker table tr td.selected.disabled.active,.datepicker table tr td.selected.disabled:active,.datepicker table tr td.selected.disabled:hover.active,.datepicker table tr td.selected.disabled:hover:active,.datepicker table tr td.selected:active,.datepicker table tr td.selected:hover.active,.datepicker table tr td.selected:hover:active{background-color:#666\\9}.datepicker table tr td.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active:hover{background-color:#ee3224;background-image:-moz-linear-gradient(to bottom,#ee3224,#ee3224);background-image:-ms-linear-gradient(to bottom,#ee3224,#ee3224);background-image:-webkit-gradient(linear,0 0,0 100%,from(#ee3224),to(#ee3224));background-image:-webkit-linear-gradient(180deg,#ee3224,#ee3224);background-image:-o-linear-gradient(to bottom,#ee3224,#ee3224);background-image:linear-gradient(180deg,#ee3224,#ee3224);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#EE3224\",endColorstr=\"#EE3224\",GradientType=0);border-color:#ee3224;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td.active.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled.disabled,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active.disabled:hover.active,.datepicker table tr td.active.disabled:hover.disabled,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active.disabled:hover:hover,.datepicker table tr td.active.disabled:hover[disabled],.datepicker table tr td.active.disabled[disabled],.datepicker table tr td.active:active,.datepicker table tr td.active:hover,.datepicker table tr td.active:hover.active,.datepicker table tr td.active:hover.disabled,.datepicker table tr td.active:hover:active,.datepicker table tr td.active:hover:hover,.datepicker table tr td.active:hover[disabled],.datepicker table tr td.active[disabled]{background-color:#ee3224}.datepicker table tr td.active.active,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled:hover.active,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active:active,.datepicker table tr td.active:hover.active,.datepicker table tr td.active:hover:active{background-color:#039\\9}.datepicker table tr td span{display:block;width:23%;height:54px;line-height:54px;float:left;margin:1%;cursor:pointer;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.datepicker table tr td span.focused,.datepicker table tr td span:hover{background:#eee}.datepicker table tr td span.disabled,.datepicker table tr td span.disabled:hover{background:0 0;color:#999;cursor:default}.datepicker table tr td span.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active:hover{background-color:#ee3224;background-image:-moz-linear-gradient(to bottom,#ee3224,#ee3224);background-image:-ms-linear-gradient(to bottom,#ee3224,#ee3224);background-image:-webkit-gradient(linear,0 0,0 100%,from(#ee3224),to(#ee3224));background-image:-webkit-linear-gradient(180deg,#ee3224,#ee3224);background-image:-o-linear-gradient(to bottom,#ee3224,#ee3224);background-image:linear-gradient(180deg,#ee3224,#ee3224);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#08c\",endColorstr=\"#0044cc\",GradientType=0);border-color:#ee3224 #04EE3224c;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td span.active.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled.active,.datepicker table tr td span.active.disabled.disabled,.datepicker table tr td span.active.disabled:active,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active.disabled:hover.active,.datepicker table tr td span.active.disabled:hover.disabled,.datepicker table tr td span.active.disabled:hover:active,.datepicker table tr td span.active.disabled:hover:hover,.datepicker table tr td span.active.disabled:hover[disabled],.datepicker table tr td span.active.disabled[disabled],.datepicker table tr td span.active:active,.datepicker table tr td span.active:hover,.datepicker table tr td span.active:hover.active,.datepicker table tr td span.active:hover.disabled,.datepicker table tr td span.active:hover:active,.datepicker table tr td span.active:hover:hover,.datepicker table tr td span.active:hover[disabled],.datepicker table tr td span.active[disabled]{background-color:#ee3224}.datepicker table tr td span.active.active,.datepicker table tr td span.active.disabled.active,.datepicker table tr td span.active.disabled:active,.datepicker table tr td span.active.disabled:hover.active,.datepicker table tr td span.active.disabled:hover:active,.datepicker table tr td span.active:active,.datepicker table tr td span.active:hover.active,.datepicker table tr td span.active:hover:active{background-color:#039\\9}.datepicker table tr td span.new,.datepicker table tr td span.old{color:#999}.datepicker .datepicker-switch{width:145px}.datepicker .datepicker-switch,.datepicker .next,.datepicker .prev,.datepicker tfoot tr th{cursor:pointer}.datepicker .datepicker-switch:hover,.datepicker .next:hover,.datepicker .prev:hover,.datepicker tfoot tr th:hover{background:#eee}.datepicker .cw{font-size:10px;width:12px;padding:0 2px 0 5px;vertical-align:middle}.input-append.date .add-on,.input-prepend.date .add-on{cursor:pointer}.input-append.date .add-on i,.input-prepend.date .add-on i{margin-top:3px}.input-daterange input{text-align:center}.input-daterange input:first-child{-webkit-border-radius:3px 0 0 3px;-moz-border-radius:3px 0 0 3px;border-radius:3px 0 0 3px}.input-daterange input:last-child{-webkit-border-radius:0 3px 3px 0;-moz-border-radius:0 3px 3px 0;border-radius:0 3px 3px 0}.input-daterange .add-on{display:inline-block;width:auto;min-width:16px;height:18px;padding:4px 5px;font-weight:400;line-height:18px;text-align:center;text-shadow:0 1px 0 #fff;vertical-align:middle;background-color:#eee;border:1px solid #ccc;margin-left:-5px;margin-right:-5px}", ""]);

// exports


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return readItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return base64ToArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return additemsimage; });
/* unused harmony export additemsattachment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateitems; });
/* unused harmony export batchDelete */
/* unused harmony export formString */
/* unused harmony export formatDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return checkUserinGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetQueryStringParams; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sp_pnp_js__);

function readItems(listName, listColumns, topCount, orderBy, filterKey, filterValue) {
    var matchColumns = formString(listColumns);
    if (filterKey == undefined) {
        return __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js___default.a.sp.web.lists.getByTitle(listName).items.select(matchColumns).top(topCount).orderBy(orderBy).get();
    }
    else {
        return __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js___default.a.sp.web.lists.getByTitle(listName).items.select(matchColumns).filter("" + filterKey + " eq '" + filterValue + "'").top(topCount).orderBy(orderBy).get();
    }
}
function addItems(listName, listColumns, callback) {
    return __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js___default.a.sp.web.lists.getByTitle(listName).items.add(listColumns).then(function (r) { return callback(r); });
}
function additemsattachment(listName, file, listColumns, callback) {
    return __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js___default.a.sp.web.getFolderByServerRelativeUrl(listName).files.add(file.name, file, true)
        .then(function (result) {
        result.file.listItemAllFields.get().then(function (listItemAllFields) {
            return __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js___default.a.sp.web.lists.getByTitle(listName).items.getById(listItemAllFields.Id).update(listColumns).then(function (r) { return callback(r); });
        });
    });
}
function additemsimage(listName, filename, file, listColumns, callback) {
    return __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js___default.a.sp.web.getFolderByServerRelativeUrl(listName).files.add(filename, file, true)
        .then(function (result) {
        result.file.listItemAllFields.get().then(function (listItemAllFields) {
            return __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js___default.a.sp.web.lists.getByTitle(listName).items.getById(listItemAllFields.Id).update(listColumns).then(function (r) { return callback(r); });
        });
    });
}
function updateitems(listName, id, listColumns, callback) {
    return __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js___default.a.sp.web.lists.getByTitle(listName).items.getById(id).update(listColumns).then(function (r) { return callback(r); });
}
var batch;
function batchDelete(listName, selectedArray, callback) {
    batch = __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js___default.a.sp.createBatch();
    for (var i = 0; i < selectedArray.length; i++) {
        __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js___default.a.sp.web.lists.getByTitle(listName).items.getById(selectedArray[i]).inBatch(batch).delete().then(function (r) {
            console.log(r);
        });
    }
    callback(batch);
}
function formString(listColumns) {
    var formattedString = "";
    for (var i = 0; i < listColumns.length; i++) {
        formattedString += listColumns[i] + ',';
    }
    return formattedString.slice(0, -1);
}
function formatDate(dateVal) {
    var date = new Date(dateVal);
    var year = date.getFullYear();
    var locale = "en-us";
    var month = date.toLocaleString(locale, { month: "long" });
    var dt = date.getDate();
    var dateString;
    if (dt < 10) {
        dateString = "0" + dt;
    }
    else
        dateString = dt.toString();
    return dateString + ' ' + month.substr(0, 3) + ',' + year;
}
function checkUserinGroup(Componentname, email, callback) {
    var myitems;
    __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js___default.a.sp.web.siteUsers
        .getByEmail(email)
        .groups.get()
        .then(function (items) {
        var currentComponent = Componentname;
        myitems = $.grep(items, function (obj, index) {
            if (obj.Title.indexOf(currentComponent) != -1) {
                return true;
            }
        });
        callback(myitems.length);
    });
}
function GetQueryStringParams(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
function base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}




/***/ }),
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*************************
 * Croppie
 * Copyright 2018
 * Foliotek
 * Version: 2.6.3
 *************************/
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        root.Croppie = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    /* Polyfills */
    if (typeof Promise !== 'function') {
        /*! promise-polyfill 3.1.0 */
        !function(a){function b(a,b){return function(){a.apply(b,arguments)}}function c(a){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],i(a,b(e,this),b(f,this))}function d(a){var b=this;return null===this._state?void this._deferreds.push(a):void k(function(){var c=b._state?a.onFulfilled:a.onRejected;if(null===c)return void(b._state?a.resolve:a.reject)(b._value);var d;try{d=c(b._value)}catch(e){return void a.reject(e)}a.resolve(d)})}function e(a){try{if(a===this)throw new TypeError("A promise cannot be resolved with itself.");if(a&&("object"===typeof a||"function"===typeof a)){var c=a.then;if("function"===typeof c)return void i(b(c,a),b(e,this),b(f,this))}this._state=!0,this._value=a,g.call(this)}catch(d){f.call(this,d)}}function f(a){this._state=!1,this._value=a,g.call(this)}function g(){for(var a=0,b=this._deferreds.length;b>a;a++)d.call(this,this._deferreds[a]);this._deferreds=null}function h(a,b,c,d){this.onFulfilled="function"===typeof a?a:null,this.onRejected="function"===typeof b?b:null,this.resolve=c,this.reject=d}function i(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(e){if(d)return;d=!0,c(e)}}var j=setTimeout,k="function"===typeof setImmediate&&setImmediate||function(a){j(a,1)},l=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};c.prototype["catch"]=function(a){return this.then(null,a)},c.prototype.then=function(a,b){var e=this;return new c(function(c,f){d.call(e,new h(a,b,c,f))})},c.all=function(){var a=Array.prototype.slice.call(1===arguments.length&&l(arguments[0])?arguments[0]:arguments);return new c(function(b,c){function d(f,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var h=g.then;if("function"===typeof h)return void h.call(g,function(a){d(f,a)},c)}a[f]=g,0===--e&&b(a)}catch(i){c(i)}}if(0===a.length)return b([]);for(var e=a.length,f=0;f<a.length;f++)d(f,a[f])})},c.resolve=function(a){return a&&"object"===typeof a&&a.constructor===c?a:new c(function(b){b(a)})},c.reject=function(a){return new c(function(b,c){c(a)})},c.race=function(a){return new c(function(b,c){for(var d=0,e=a.length;e>d;d++)a[d].then(b,c)})},c._setImmediateFn=function(a){k=a},"undefined"!==typeof module&&module.exports?module.exports=c:a.Promise||(a.Promise=c)}(this);
    }

    if ( typeof window.CustomEvent !== "function" ) {
        (function(){
            function CustomEvent ( event, params ) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                var evt = document.createEvent( 'CustomEvent' );
                evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        }());
    }

    if (!HTMLCanvasElement.prototype.toBlob) {
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function (callback, type, quality) {
                var binStr = atob( this.toDataURL(type, quality).split(',')[1] ),
                len = binStr.length,
                arr = new Uint8Array(len);

                for (var i=0; i<len; i++ ) {
                    arr[i] = binStr.charCodeAt(i);
                }

                callback( new Blob( [arr], {type: type || 'image/png'} ) );
            }
        });
    }
    /* End Polyfills */

    var cssPrefixes = ['Webkit', 'Moz', 'ms'],
        emptyStyles = document.createElement('div').style,
        EXIF_NORM = [1,8,3,6],
        EXIF_FLIP = [2,7,4,5],
        CSS_TRANS_ORG,
        CSS_TRANSFORM,
        CSS_USERSELECT;

    function vendorPrefix(prop) {
        if (prop in emptyStyles) {
            return prop;
        }

        var capProp = prop[0].toUpperCase() + prop.slice(1),
            i = cssPrefixes.length;

        while (i--) {
            prop = cssPrefixes[i] + capProp;
            if (prop in emptyStyles) {
                return prop;
            }
        }
    }

    CSS_TRANSFORM = vendorPrefix('transform');
    CSS_TRANS_ORG = vendorPrefix('transformOrigin');
    CSS_USERSELECT = vendorPrefix('userSelect');

    function getExifOffset(ornt, rotate) {
        var arr = EXIF_NORM.indexOf(ornt) > -1 ? EXIF_NORM : EXIF_FLIP,
            index = arr.indexOf(ornt),
            offset = (rotate / 90) % arr.length;// 180 = 2%4 = 2 shift exif by 2 indexes

        return arr[(arr.length + index + (offset % arr.length)) % arr.length];
    }

    // Credits to : Andrew Dupont - http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    function deepExtend(destination, source) {
        destination = destination || {};
        for (var property in source) {
            if (source[property] && source[property].constructor && source[property].constructor === Object) {
                destination[property] = destination[property] || {};
                deepExtend(destination[property], source[property]);
            } else {
                destination[property] = source[property];
            }
        }
        return destination;
    }

    function clone(object) {
        return deepExtend({}, object);
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function dispatchChange(element) {
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            element.dispatchEvent(evt);
        }
        else {
            element.fireEvent("onchange");
        }
    }

    //http://jsperf.com/vanilla-css
    function css(el, styles, val) {
        if (typeof (styles) === 'string') {
            var tmp = styles;
            styles = {};
            styles[tmp] = val;
        }

        for (var prop in styles) {
            el.style[prop] = styles[prop];
        }
    }

    function addClass(el, c) {
        if (el.classList) {
            el.classList.add(c);
        }
        else {
            el.className += ' ' + c;
        }
    }

    function removeClass(el, c) {
        if (el.classList) {
            el.classList.remove(c);
        }
        else {
            el.className = el.className.replace(c, '');
        }
    }

    function setAttributes(el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    function num(v) {
        return parseInt(v, 10);
    }

    /* Utilities */
    function loadImage(src, doExif) {
        var img = new Image();
        img.style.opacity = '0';
        return new Promise(function (resolve, reject) {
            function _resolve() {
                img.style.opacity = '1';
                setTimeout(function () {
                    resolve(img);
                }, 1);
            }

            img.removeAttribute('crossOrigin');
            if (src.match(/^https?:\/\/|^\/\//)) {
                img.setAttribute('crossOrigin', 'anonymous');
            }

            img.onload = function () {
                if (doExif) {
                    EXIF.getData(img, function () {
                        _resolve();
                    });
                }
                else {
                    _resolve();
                }
            };
            img.onerror = function (ev) {
                img.style.opacity = 1;
                setTimeout(function () {
                    reject(ev);
                }, 1);
            };
            img.src = src;
        });
    }

    function naturalImageDimensions(img, ornt) {
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        var orient = ornt || getExifOrientation(img);
        if (orient && orient >= 5) {
            var x= w;
            w = h;
            h = x;
        }
        return { width: w, height: h };
    }

    /* CSS Transform Prototype */
    var TRANSLATE_OPTS = {
        'translate3d': {
            suffix: ', 0px'
        },
        'translate': {
            suffix: ''
        }
    };
    var Transform = function (x, y, scale) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.scale = parseFloat(scale);
    };

    Transform.parse = function (v) {
        if (v.style) {
            return Transform.parse(v.style[CSS_TRANSFORM]);
        }
        else if (v.indexOf('matrix') > -1 || v.indexOf('none') > -1) {
            return Transform.fromMatrix(v);
        }
        else {
            return Transform.fromString(v);
        }
    };

    Transform.fromMatrix = function (v) {
        var vals = v.substring(7).split(',');
        if (!vals.length || v === 'none') {
            vals = [1, 0, 0, 1, 0, 0];
        }

        return new Transform(num(vals[4]), num(vals[5]), parseFloat(vals[0]));
    };

    Transform.fromString = function (v) {
        var values = v.split(') '),
            translate = values[0].substring(Croppie.globals.translate.length + 1).split(','),
            scale = values.length > 1 ? values[1].substring(6) : 1,
            x = translate.length > 1 ? translate[0] : 0,
            y = translate.length > 1 ? translate[1] : 0;

        return new Transform(x, y, scale);
    };

    Transform.prototype.toString = function () {
        var suffix = TRANSLATE_OPTS[Croppie.globals.translate].suffix || '';
        return Croppie.globals.translate + '(' + this.x + 'px, ' + this.y + 'px' + suffix + ') scale(' + this.scale + ')';
    };

    var TransformOrigin = function (el) {
        if (!el || !el.style[CSS_TRANS_ORG]) {
            this.x = 0;
            this.y = 0;
            return;
        }
        var css = el.style[CSS_TRANS_ORG].split(' ');
        this.x = parseFloat(css[0]);
        this.y = parseFloat(css[1]);
    };

    TransformOrigin.prototype.toString = function () {
        return this.x + 'px ' + this.y + 'px';
    };

    function getExifOrientation (img) {
        return img.exifdata && img.exifdata.Orientation ? num(img.exifdata.Orientation) : 1;
    }

    function drawCanvas(canvas, img, orientation) {
        var width = img.width,
            height = img.height,
            ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.save();
        switch (orientation) {
          case 2:
             ctx.translate(width, 0);
             ctx.scale(-1, 1);
             break;

          case 3:
              ctx.translate(width, height);
              ctx.rotate(180*Math.PI/180);
              break;

          case 4:
              ctx.translate(0, height);
              ctx.scale(1, -1);
              break;

          case 5:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90*Math.PI/180);
              ctx.scale(1, -1);
              break;

          case 6:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90*Math.PI/180);
              ctx.translate(0, -height);
              break;

          case 7:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(-90*Math.PI/180);
              ctx.translate(-width, height);
              ctx.scale(1, -1);
              break;

          case 8:
              canvas.width = height;
              canvas.height = width;
              ctx.translate(0, width);
              ctx.rotate(-90*Math.PI/180);
              break;
        }
        ctx.drawImage(img, 0,0, width, height);
        ctx.restore();
    }

    /* Private Methods */
    function _create() {
        var self = this,
            contClass = 'croppie-container',
            customViewportClass = self.options.viewport.type ? 'cr-vp-' + self.options.viewport.type : null,
            boundary, img, viewport, overlay, bw, bh;

        self.options.useCanvas = self.options.enableOrientation || _hasExif.call(self);
        // Properties on class
        self.data = {};
        self.elements = {};

        boundary = self.elements.boundary = document.createElement('div');
        viewport = self.elements.viewport = document.createElement('div');
        img = self.elements.img = document.createElement('img');
        overlay = self.elements.overlay = document.createElement('div');

        if (self.options.useCanvas) {
            self.elements.canvas = document.createElement('canvas');
            self.elements.preview = self.elements.canvas;
        }
        else {
            self.elements.preview = img;
        }

        addClass(boundary, 'cr-boundary');
        boundary.setAttribute('aria-dropeffect', 'none');
        bw = self.options.boundary.width;
        bh = self.options.boundary.height;
        css(boundary, {
            width: (bw + (isNaN(bw) ? '' : 'px')),
            height: (bh + (isNaN(bh) ? '' : 'px'))
        });

        addClass(viewport, 'cr-viewport');
        if (customViewportClass) {
            addClass(viewport, customViewportClass);
        }
        css(viewport, {
            width: self.options.viewport.width + 'px',
            height: self.options.viewport.height + 'px'
        });
        viewport.setAttribute('tabindex', 0);

        addClass(self.elements.preview, 'cr-image');
        setAttributes(self.elements.preview, { 'alt': 'preview', 'aria-grabbed': 'false' });
        addClass(overlay, 'cr-overlay');

        self.element.appendChild(boundary);
        boundary.appendChild(self.elements.preview);
        boundary.appendChild(viewport);
        boundary.appendChild(overlay);

        addClass(self.element, contClass);
        if (self.options.customClass) {
            addClass(self.element, self.options.customClass);
        }

        _initDraggable.call(this);

        if (self.options.enableZoom) {
            _initializeZoom.call(self);
        }

        // if (self.options.enableOrientation) {
        //     _initRotationControls.call(self);
        // }

        if (self.options.enableResize) {
            _initializeResize.call(self);
        }
    }

    // function _initRotationControls () {
    //     var self = this,
    //         wrap, btnLeft, btnRight, iLeft, iRight;

    //     wrap = document.createElement('div');
    //     self.elements.orientationBtnLeft = btnLeft = document.createElement('button');
    //     self.elements.orientationBtnRight = btnRight = document.createElement('button');

    //     wrap.appendChild(btnLeft);
    //     wrap.appendChild(btnRight);

    //     iLeft = document.createElement('i');
    //     iRight = document.createElement('i');
    //     btnLeft.appendChild(iLeft);
    //     btnRight.appendChild(iRight);

    //     addClass(wrap, 'cr-rotate-controls');
    //     addClass(btnLeft, 'cr-rotate-l');
    //     addClass(btnRight, 'cr-rotate-r');

    //     self.elements.boundary.appendChild(wrap);

    //     btnLeft.addEventListener('click', function () {
    //         self.rotate(-90);
    //     });
    //     btnRight.addEventListener('click', function () {
    //         self.rotate(90);
    //     });
    // }

    function _hasExif() {
        return this.options.enableExif && window.EXIF;
    }

    function _initializeResize () {
        var self = this;
        var wrap = document.createElement('div');
        var isDragging = false;
        var direction;
        var originalX;
        var originalY;
        var minSize = 50;
        var maxWidth;
        var maxHeight;
        var vr;
        var hr;

        addClass(wrap, 'cr-resizer');
        css(wrap, {
            width: this.options.viewport.width + 'px',
            height: this.options.viewport.height + 'px'
        });

        if (this.options.resizeControls.height) {
            vr = document.createElement('div');
            addClass(vr, 'cr-resizer-vertical');
            wrap.appendChild(vr);
        }

        if (this.options.resizeControls.width) {
            hr = document.createElement('div');
            addClass(hr, 'cr-resizer-horisontal');
            wrap.appendChild(hr);
        }

        function mouseDown(ev) {
            if (ev.button !== undefined && ev.button !== 0) return;

            ev.preventDefault();
            if (isDragging) {
                return;
            }

            var overlayRect = self.elements.overlay.getBoundingClientRect();

            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;
            direction = ev.currentTarget.className.indexOf('vertical') !== -1 ? 'v' : 'h';
            maxWidth = overlayRect.width;
            maxHeight = overlayRect.height;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }

            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
        }

        function mouseMove(ev) {
            var pageX = ev.pageX;
            var pageY = ev.pageY;

            ev.preventDefault();

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX;
            var deltaY = pageY - originalY;
            var newHeight = self.options.viewport.height + deltaY;
            var newWidth = self.options.viewport.width + deltaX;

            if (direction === 'v' && newHeight >= minSize && newHeight <= maxHeight) {
                css(wrap, {
                    height: newHeight + 'px'
                });

                self.options.boundary.height += deltaY;
                css(self.elements.boundary, {
                    height: self.options.boundary.height + 'px'
                });

                self.options.viewport.height += deltaY;
                css(self.elements.viewport, {
                    height: self.options.viewport.height + 'px'
                });
            }
            else if (direction === 'h' && newWidth >= minSize && newWidth <= maxWidth) {
                css(wrap, {
                    width: newWidth + 'px'
                });

                self.options.boundary.width += deltaX;
                css(self.elements.boundary, {
                    width: self.options.boundary.width + 'px'
                });

                self.options.viewport.width += deltaX;
                css(self.elements.viewport, {
                    width: self.options.viewport.width + 'px'
                });
            }

            _updateOverlay.call(self);
            _updateZoomLimits.call(self);
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
        }

        if (vr) {
            vr.addEventListener('mousedown', mouseDown);
            vr.addEventListener('touchstart', mouseDown);
        }

        if (hr) {
            hr.addEventListener('mousedown', mouseDown);
            hr.addEventListener('touchstart', mouseDown);
        }

        this.elements.boundary.appendChild(wrap);
    }

    function _setZoomerVal(v) {
        if (this.options.enableZoom) {
            var z = this.elements.zoomer,
                val = fix(v, 4);

            z.value = Math.max(parseFloat(z.min), Math.min(parseFloat(z.max), val)).toString();
        }
    }

    function _initializeZoom() {
        var self = this,
            wrap = self.elements.zoomerWrap = document.createElement('div'),
            zoomer = self.elements.zoomer = document.createElement('input');

        addClass(wrap, 'cr-slider-wrap');
        addClass(zoomer, 'cr-slider');
        zoomer.type = 'range';
        zoomer.step = '0.0001';
        zoomer.value = '1';
        zoomer.style.display = self.options.showZoomer ? '' : 'none';
        zoomer.setAttribute('aria-label', 'zoom');

        self.element.appendChild(wrap);
        wrap.appendChild(zoomer);

        self._currentZoom = 1;

        function change() {
            _onZoom.call(self, {
                value: parseFloat(zoomer.value),
                origin: new TransformOrigin(self.elements.preview),
                viewportRect: self.elements.viewport.getBoundingClientRect(),
                transform: Transform.parse(self.elements.preview)
            });
        }

        function scroll(ev) {
            var delta, targetZoom;

            if(self.options.mouseWheelZoom === 'ctrl' && ev.ctrlKey !== true){
              return 0; 
            } else if (ev.wheelDelta) {
                delta = ev.wheelDelta / 1200; //wheelDelta min: -120 max: 120 // max x 10 x 2
            } else if (ev.deltaY) {
                delta = ev.deltaY / 1060; //deltaY min: -53 max: 53 // max x 10 x 2
            } else if (ev.detail) {
                delta = ev.detail / -60; //delta min: -3 max: 3 // max x 10 x 2
            } else {
                delta = 0;
            }

            targetZoom = self._currentZoom + (delta * self._currentZoom);

            ev.preventDefault();
            _setZoomerVal.call(self, targetZoom);
            change.call(self);
        }

        self.elements.zoomer.addEventListener('input', change);// this is being fired twice on keypress
        self.elements.zoomer.addEventListener('change', change);

        if (self.options.mouseWheelZoom) {
            self.elements.boundary.addEventListener('mousewheel', scroll);
            self.elements.boundary.addEventListener('DOMMouseScroll', scroll);
        }
    }

    function _onZoom(ui) {
        var self = this,
            transform = ui ? ui.transform : Transform.parse(self.elements.preview),
            vpRect = ui ? ui.viewportRect : self.elements.viewport.getBoundingClientRect(),
            origin = ui ? ui.origin : new TransformOrigin(self.elements.preview);

        function applyCss() {
            var transCss = {};
            transCss[CSS_TRANSFORM] = transform.toString();
            transCss[CSS_TRANS_ORG] = origin.toString();
            css(self.elements.preview, transCss);
        }

        self._currentZoom = ui ? ui.value : self._currentZoom;
        transform.scale = self._currentZoom;
        self.elements.zoomer.setAttribute('aria-valuenow', self._currentZoom);
        applyCss();

        if (self.options.enforceBoundary) {
            var boundaries = _getVirtualBoundaries.call(self, vpRect),
                transBoundaries = boundaries.translate,
                oBoundaries = boundaries.origin;

            if (transform.x >= transBoundaries.maxX) {
                origin.x = oBoundaries.minX;
                transform.x = transBoundaries.maxX;
            }

            if (transform.x <= transBoundaries.minX) {
                origin.x = oBoundaries.maxX;
                transform.x = transBoundaries.minX;
            }

            if (transform.y >= transBoundaries.maxY) {
                origin.y = oBoundaries.minY;
                transform.y = transBoundaries.maxY;
            }

            if (transform.y <= transBoundaries.minY) {
                origin.y = oBoundaries.maxY;
                transform.y = transBoundaries.minY;
            }
        }
        applyCss();
        _debouncedOverlay.call(self);
        _triggerUpdate.call(self);
    }

    function _getVirtualBoundaries(viewport) {
        var self = this,
            scale = self._currentZoom,
            vpWidth = viewport.width,
            vpHeight = viewport.height,
            centerFromBoundaryX = self.elements.boundary.clientWidth / 2,
            centerFromBoundaryY = self.elements.boundary.clientHeight / 2,
            imgRect = self.elements.preview.getBoundingClientRect(),
            curImgWidth = imgRect.width,
            curImgHeight = imgRect.height,
            halfWidth = vpWidth / 2,
            halfHeight = vpHeight / 2;

        var maxX = ((halfWidth / scale) - centerFromBoundaryX) * -1;
        var minX = maxX - ((curImgWidth * (1 / scale)) - (vpWidth * (1 / scale)));

        var maxY = ((halfHeight / scale) - centerFromBoundaryY) * -1;
        var minY = maxY - ((curImgHeight * (1 / scale)) - (vpHeight * (1 / scale)));

        var originMinX = (1 / scale) * halfWidth;
        var originMaxX = (curImgWidth * (1 / scale)) - originMinX;

        var originMinY = (1 / scale) * halfHeight;
        var originMaxY = (curImgHeight * (1 / scale)) - originMinY;

        return {
            translate: {
                maxX: maxX,
                minX: minX,
                maxY: maxY,
                minY: minY
            },
            origin: {
                maxX: originMaxX,
                minX: originMinX,
                maxY: originMaxY,
                minY: originMinY
            }
        };
    }

    function _updateCenterPoint(rotate) {
        var self = this,
            scale = self._currentZoom,
            data = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            transform = Transform.parse(self.elements.preview.style[CSS_TRANSFORM]),
            pc = new TransformOrigin(self.elements.preview),
            top = (vpData.top - data.top) + (vpData.height / 2),
            left = (vpData.left - data.left) + (vpData.width / 2),
            center = {},
            adj = {};

        if (rotate) {
            var cx = pc.x;
            var cy = pc.y;
            var tx = transform.x;
            var ty = transform.y;

            center.y = cx;
            center.x = cy;
            transform.y = tx;
            transform.x = ty;
        }
        else {
            center.y = top / scale;
            center.x = left / scale;

            adj.y = (center.y - pc.y) * (1 - scale);
            adj.x = (center.x - pc.x) * (1 - scale);

            transform.x -= adj.x;
            transform.y -= adj.y;
        }

        var newCss = {};
        newCss[CSS_TRANS_ORG] = center.x + 'px ' + center.y + 'px';
        newCss[CSS_TRANSFORM] = transform.toString();
        css(self.elements.preview, newCss);
    }

    function _initDraggable() {
        var self = this,
            isDragging = false,
            originalX,
            originalY,
            originalDistance,
            vpRect,
            transform;

        function assignTransformCoordinates(deltaX, deltaY) {
            var imgRect = self.elements.preview.getBoundingClientRect(),
                top = transform.y + deltaY,
                left = transform.x + deltaX;

            if (self.options.enforceBoundary) {
                if (vpRect.top > imgRect.top + deltaY && vpRect.bottom < imgRect.bottom + deltaY) {
                    transform.y = top;
                }

                if (vpRect.left > imgRect.left + deltaX && vpRect.right < imgRect.right + deltaX) {
                    transform.x = left;
                }
            }
            else {
                transform.y = top;
                transform.x = left;
            }
        }

        function toggleGrabState(isDragging) {
          self.elements.preview.setAttribute('aria-grabbed', isDragging);
          self.elements.boundary.setAttribute('aria-dropeffect', isDragging? 'move': 'none');
        }

        function keyDown(ev) {
            var LEFT_ARROW  = 37,
                UP_ARROW    = 38,
                RIGHT_ARROW = 39,
                DOWN_ARROW  = 40;

            if (ev.shiftKey && (ev.keyCode === UP_ARROW || ev.keyCode === DOWN_ARROW)) {
                var zoom;
                if (ev.keyCode === UP_ARROW) {
                    zoom = parseFloat(self.elements.zoomer.value) + parseFloat(self.elements.zoomer.step)
                }
                else {
                    zoom = parseFloat(self.elements.zoomer.value) - parseFloat(self.elements.zoomer.step)
                }
                self.setZoom(zoom);
            }
            else if (self.options.enableKeyMovement && (ev.keyCode >= 37 && ev.keyCode <= 40)) {
                ev.preventDefault();
                var movement = parseKeyDown(ev.keyCode);

                transform = Transform.parse(self.elements.preview);
                document.body.style[CSS_USERSELECT] = 'none';
                vpRect = self.elements.viewport.getBoundingClientRect();
                keyMove(movement);
            }

            function parseKeyDown(key) {
                switch (key) {
                    case LEFT_ARROW:
                        return [1, 0];
                    case UP_ARROW:
                        return [0, 1];
                    case RIGHT_ARROW:
                        return [-1, 0];
                    case DOWN_ARROW:
                        return [0, -1];
                }
            }
        }

        function keyMove(movement) {
            var deltaX = movement[0],
                deltaY = movement[1],
                newCss = {};

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        function mouseDown(ev) {
            if (ev.button !== undefined && ev.button !== 0) return;

            ev.preventDefault();
            if (isDragging) return;
            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }
            toggleGrabState(isDragging);
            transform = Transform.parse(self.elements.preview);
            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
            vpRect = self.elements.viewport.getBoundingClientRect();
        }

        function mouseMove(ev) {
            ev.preventDefault();
            var pageX = ev.pageX,
                pageY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX,
                deltaY = pageY - originalY,
                newCss = {};

            if (ev.type === 'touchmove') {
                if (ev.touches.length > 1) {
                    var touch1 = ev.touches[0];
                    var touch2 = ev.touches[1];
                    var dist = Math.sqrt((touch1.pageX - touch2.pageX) * (touch1.pageX - touch2.pageX) + (touch1.pageY - touch2.pageY) * (touch1.pageY - touch2.pageY));

                    if (!originalDistance) {
                        originalDistance = dist / self._currentZoom;
                    }

                    var scale = dist / originalDistance;

                    _setZoomerVal.call(self, scale);
                    dispatchChange(self.elements.zoomer);
                    return;
                }
            }

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            toggleGrabState(isDragging);
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        self.elements.overlay.addEventListener('mousedown', mouseDown);
        self.elements.viewport.addEventListener('keydown', keyDown);
        self.elements.overlay.addEventListener('touchstart', mouseDown);
    }

    function _updateOverlay() {
        if (!this.elements) return; // since this is debounced, it can be fired after destroy
        var self = this,
            boundRect = self.elements.boundary.getBoundingClientRect(),
            imgData = self.elements.preview.getBoundingClientRect();

        css(self.elements.overlay, {
            width: imgData.width + 'px',
            height: imgData.height + 'px',
            top: (imgData.top - boundRect.top) + 'px',
            left: (imgData.left - boundRect.left) + 'px'
        });
    }
    var _debouncedOverlay = debounce(_updateOverlay, 500);

    function _triggerUpdate() {
        var self = this,
            data = self.get();

        if (!_isVisible.call(self)) {
            return;
        }

        self.options.update.call(self, data);
        if (self.$ && typeof Prototype === 'undefined') {
            self.$(self.element).trigger('update.croppie', data);
        }
        else {
            var ev;
            if (window.CustomEvent) {
                ev = new CustomEvent('update', { detail: data });
            } else {
                ev = document.createEvent('CustomEvent');
                ev.initCustomEvent('update', true, true, data);
            }

            self.element.dispatchEvent(ev);
        }
    }

    function _isVisible() {
        return this.elements.preview.offsetHeight > 0 && this.elements.preview.offsetWidth > 0;
    }

    function _updatePropertiesFromImage() {
        var self = this,
            initialZoom = 1,
            cssReset = {},
            img = self.elements.preview,
            imgData,
            transformReset = new Transform(0, 0, initialZoom),
            originReset = new TransformOrigin(),
            isVisible = _isVisible.call(self);

        if (!isVisible || self.data.bound) {// if the croppie isn't visible or it doesn't need binding
            return;
        }

        self.data.bound = true;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        cssReset[CSS_TRANS_ORG] = originReset.toString();
        cssReset['opacity'] = 1;
        css(img, cssReset);

        imgData = self.elements.preview.getBoundingClientRect();

        self._originalImageWidth = imgData.width;
        self._originalImageHeight = imgData.height;
        self.data.orientation = getExifOrientation(self.elements.img);

        if (self.options.enableZoom) {
            _updateZoomLimits.call(self, true);
        }
        else {
            self._currentZoom = initialZoom;
        }

        transformReset.scale = self._currentZoom;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        css(img, cssReset);

        if (self.data.points.length) {
            _bindPoints.call(self, self.data.points);
        }
        else {
            _centerImage.call(self);
        }

        _updateCenterPoint.call(self);
        _updateOverlay.call(self);
    }

    function _updateZoomLimits (initial) {
        var self = this,
            minZoom = Math.max(self.options.minZoom, 0) || 0,
            maxZoom = self.options.maxZoom || 1.5,
            initialZoom,
            defaultInitialZoom,
            zoomer = self.elements.zoomer,
            scale = parseFloat(zoomer.value),
            boundaryData = self.elements.boundary.getBoundingClientRect(),
            imgData = naturalImageDimensions(self.elements.img, self.data.orientation),
            vpData = self.elements.viewport.getBoundingClientRect(),
            minW,
            minH;
        if (self.options.enforceBoundary) {
            minW = vpData.width / imgData.width;
            minH = vpData.height / imgData.height;
            minZoom = Math.max(minW, minH);
        }

        if (minZoom >= maxZoom) {
            maxZoom = minZoom + 1;
        }

        zoomer.min = fix(minZoom, 4);
        zoomer.max = fix(maxZoom, 4);
        
        if (!initial && (scale < zoomer.min || scale > zoomer.max)) {
            _setZoomerVal.call(self, scale < zoomer.min ? zoomer.min : zoomer.max);
        }
        else if (initial) {
            defaultInitialZoom = Math.max((boundaryData.width / imgData.width), (boundaryData.height / imgData.height));
            initialZoom = self.data.boundZoom !== null ? self.data.boundZoom : defaultInitialZoom;
            _setZoomerVal.call(self, initialZoom);
        }

        dispatchChange(zoomer);
    }

    function _bindPoints(points) {
        if (points.length !== 4) {
            throw "Croppie - Invalid number of points supplied: " + points;
        }
        var self = this,
            pointsWidth = points[2] - points[0],
            // pointsHeight = points[3] - points[1],
            vpData = self.elements.viewport.getBoundingClientRect(),
            boundRect = self.elements.boundary.getBoundingClientRect(),
            vpOffset = {
                left: vpData.left - boundRect.left,
                top: vpData.top - boundRect.top
            },
            scale = vpData.width / pointsWidth,
            originTop = points[1],
            originLeft = points[0],
            transformTop = (-1 * points[1]) + vpOffset.top,
            transformLeft = (-1 * points[0]) + vpOffset.left,
            newCss = {};

        newCss[CSS_TRANS_ORG] = originLeft + 'px ' + originTop + 'px';
        newCss[CSS_TRANSFORM] = new Transform(transformLeft, transformTop, scale).toString();
        css(self.elements.preview, newCss);

        _setZoomerVal.call(self, scale);
        self._currentZoom = scale;
    }

    function _centerImage() {
        var self = this,
            imgDim = self.elements.preview.getBoundingClientRect(),
            vpDim = self.elements.viewport.getBoundingClientRect(),
            boundDim = self.elements.boundary.getBoundingClientRect(),
            vpLeft = vpDim.left - boundDim.left,
            vpTop = vpDim.top - boundDim.top,
            w = vpLeft - ((imgDim.width - vpDim.width) / 2),
            h = vpTop - ((imgDim.height - vpDim.height) / 2),
            transform = new Transform(w, h, self._currentZoom);

        css(self.elements.preview, CSS_TRANSFORM, transform.toString());
    }

    function _transferImageToCanvas(customOrientation) {
        var self = this,
            canvas = self.elements.canvas,
            img = self.elements.img,
            ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = img.width;
        canvas.height = img.height;

        var orientation = self.options.enableOrientation && customOrientation || getExifOrientation(img);
        drawCanvas(canvas, img, orientation);
    }

    function _getCanvas(data) {
        var self = this,
            points = data.points,
            left = num(points[0]),
            top = num(points[1]),
            right = num(points[2]),
            bottom = num(points[3]),
            width = right-left,
            height = bottom-top,
            circle = data.circle,
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            startX = 0,
            startY = 0,
            canvasWidth = data.outputWidth || width,
            canvasHeight = data.outputHeight || height;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        if (data.backgroundColor) {
            ctx.fillStyle = data.backgroundColor;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        }

        // By default assume we're going to draw the entire
        // source image onto the destination canvas.
        sx = left;
        sy = top;
        sWidth = width;
        sHeight = height;
        dx = 0;
        dy = 0;
        dWidth = canvasWidth;
        dHeight = canvasHeight;

        //
        // Do not go outside of the original image's bounds along the x-axis.
        // Handle translations when projecting onto the destination canvas.
        //

        // The smallest possible source x-position is 0.
        if (left < 0) {
            sx = 0;
            dx = (Math.abs(left) / width) * canvasWidth;
        }

        // The largest possible source width is the original image's width.
        if (sWidth + sx > self._originalImageWidth) {
            sWidth = self._originalImageWidth - sx;
            dWidth =  (sWidth / width) * canvasWidth;
        }

        //
        // Do not go outside of the original image's bounds along the y-axis.
        //

        // The smallest possible source y-position is 0.
        if (top < 0) {
            sy = 0;
            dy = (Math.abs(top) / height) * canvasHeight;
        }

        // The largest possible source height is the original image's height.
        if (sHeight + sy > self._originalImageHeight) {
            sHeight = self._originalImageHeight - sy;
            dHeight = (sHeight / height) * canvasHeight;
        }

        // console.table({ left, right, top, bottom, canvasWidth, canvasHeight, width, height, startX, startY, circle, sx, sy, dx, dy, sWidth, sHeight, dWidth, dHeight });

        ctx.drawImage(this.elements.preview, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        if (circle) {
            ctx.fillStyle = '#fff';
            ctx.globalCompositeOperation = 'destination-in';
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }
        return canvas;
    }

    function _getHtmlResult(data) {
        var points = data.points,
            div = document.createElement('div'),
            img = document.createElement('img'),
            width = points[2] - points[0],
            height = points[3] - points[1];

        addClass(div, 'croppie-result');
        div.appendChild(img);
        css(img, {
            left: (-1 * points[0]) + 'px',
            top: (-1 * points[1]) + 'px'
        });
        img.src = data.url;
        css(div, {
            width: width + 'px',
            height: height + 'px'
        });

        return div;
    }

    function _getBase64Result(data) {
        return _getCanvas.call(this, data).toDataURL(data.format, data.quality);
    }

    function _getBlobResult(data) {
        var self = this;
        return new Promise(function (resolve) {
            _getCanvas.call(self, data).toBlob(function (blob) {
                resolve(blob);
            }, data.format, data.quality);
        });
    }

    function _replaceImage(img) {
        if (this.elements.img.parentNode) {
            Array.prototype.forEach.call(this.elements.img.classList, function(c) { img.classList.add(c); });
            this.elements.img.parentNode.replaceChild(img, this.elements.img);
            this.elements.preview = img; // if the img is attached to the DOM, they're not using the canvas
        }
        this.elements.img = img;
    }

    function _bind(options, cb) {
        var self = this,
            url,
            points = [],
            zoom = null,
            hasExif = _hasExif.call(self);

        if (typeof (options) === 'string') {
            url = options;
            options = {};
        }
        else if (Array.isArray(options)) {
            points = options.slice();
        }
        else if (typeof (options) === 'undefined' && self.data.url) { //refreshing
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            return null;
        }
        else {
            url = options.url;
            points = options.points || [];
            zoom = typeof(options.zoom) === 'undefined' ? null : options.zoom;
        }

        self.data.bound = false;
        self.data.url = url || self.data.url;
        self.data.boundZoom = zoom;

        return loadImage(url, hasExif).then(function (img) {
            _replaceImage.call(self, img);
            if (!points.length) {
                var natDim = naturalImageDimensions(img);
                var rect = self.elements.viewport.getBoundingClientRect();
                var aspectRatio = rect.width / rect.height;
                var imgAspectRatio = natDim.width / natDim.height;
                var width, height;

                if (imgAspectRatio > aspectRatio) {
                    height = natDim.height;
                    width = height * aspectRatio;
                }
                else {
                    width = natDim.width;
                    height = natDim.height / aspectRatio;
                }

                var x0 = (natDim.width - width) / 2;
                var y0 = (natDim.height - height) / 2;
                var x1 = x0 + width;
                var y1 = y0 + height;
                self.data.points = [x0, y0, x1, y1];
            }
            else if (self.options.relative) {
                points = [
                    points[0] * img.naturalWidth / 100,
                    points[1] * img.naturalHeight / 100,
                    points[2] * img.naturalWidth / 100,
                    points[3] * img.naturalHeight / 100
                ];
            }

            self.data.points = points.map(function (p) {
                return parseFloat(p);
            });
            if (self.options.useCanvas) {
                _transferImageToCanvas.call(self, options.orientation);
            }
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            cb && cb();
        });
    }

    function fix(v, decimalPoints) {
        return parseFloat(v).toFixed(decimalPoints || 0);
    }

    function _get() {
        var self = this,
            imgData = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            x1 = vpData.left - imgData.left,
            y1 = vpData.top - imgData.top,
            widthDiff = (vpData.width - self.elements.viewport.offsetWidth) / 2, //border
            heightDiff = (vpData.height - self.elements.viewport.offsetHeight) / 2,
            x2 = x1 + self.elements.viewport.offsetWidth + widthDiff,
            y2 = y1 + self.elements.viewport.offsetHeight + heightDiff,
            scale = self._currentZoom;

        if (scale === Infinity || isNaN(scale)) {
            scale = 1;
        }

        var max = self.options.enforceBoundary ? 0 : Number.NEGATIVE_INFINITY;
        x1 = Math.max(max, x1 / scale);
        y1 = Math.max(max, y1 / scale);
        x2 = Math.max(max, x2 / scale);
        y2 = Math.max(max, y2 / scale);

        return {
            points: [fix(x1), fix(y1), fix(x2), fix(y2)],
            zoom: scale,
            orientation: self.data.orientation
        };
    }

    var RESULT_DEFAULTS = {
            type: 'canvas',
            format: 'png',
            quality: 1
        },
        RESULT_FORMATS = ['jpeg', 'webp', 'png'];

    function _result(options) {
        var self = this,
            data = _get.call(self),
            opts = deepExtend(clone(RESULT_DEFAULTS), clone(options)),
            resultType = (typeof (options) === 'string' ? options : (opts.type || 'base64')),
            size = opts.size || 'viewport',
            format = opts.format,
            quality = opts.quality,
            backgroundColor = opts.backgroundColor,
            circle = typeof opts.circle === 'boolean' ? opts.circle : (self.options.viewport.type === 'circle'),
            vpRect = self.elements.viewport.getBoundingClientRect(),
            ratio = vpRect.width / vpRect.height,
            prom;

        if (size === 'viewport') {
            data.outputWidth = vpRect.width;
            data.outputHeight = vpRect.height;
        } else if (typeof size === 'object') {
            if (size.width && size.height) {
                data.outputWidth = size.width;
                data.outputHeight = size.height;
            } else if (size.width) {
                data.outputWidth = size.width;
                data.outputHeight = size.width / ratio;
            } else if (size.height) {
                data.outputWidth = size.height * ratio;
                data.outputHeight = size.height;
            }
        }

        if (RESULT_FORMATS.indexOf(format) > -1) {
            data.format = 'image/' + format;
            data.quality = quality;
        }

        data.circle = circle;
        data.url = self.data.url;
        data.backgroundColor = backgroundColor;

        prom = new Promise(function (resolve) {
            switch(resultType.toLowerCase())
            {
                case 'rawcanvas':
                    resolve(_getCanvas.call(self, data));
                    break;
                case 'canvas':
                case 'base64':
                    resolve(_getBase64Result.call(self, data));
                    break;
                case 'blob':
                    _getBlobResult.call(self, data).then(resolve);
                    break;
                default:
                    resolve(_getHtmlResult.call(self, data));
                    break;
            }
        });
        return prom;
    }

    function _refresh() {
        _updatePropertiesFromImage.call(this);
    }

    function _rotate(deg) {
        if (!this.options.useCanvas || !this.options.enableOrientation) {
            throw 'Croppie: Cannot rotate without enableOrientation && EXIF.js included';
        }

        var self = this,
            canvas = self.elements.canvas;

        self.data.orientation = getExifOffset(self.data.orientation, deg);
        drawCanvas(canvas, self.elements.img, self.data.orientation);
        _updateCenterPoint.call(self, true);
        _updateZoomLimits.call(self);
    }

    function _destroy() {
        var self = this;
        self.element.removeChild(self.elements.boundary);
        removeClass(self.element, 'croppie-container');
        if (self.options.enableZoom) {
            self.element.removeChild(self.elements.zoomerWrap);
        }
        delete self.elements;
    }

    if (window.jQuery) {
        var $ = window.jQuery;
        $.fn.croppie = function (opts) {
            var ot = typeof opts;

            if (ot === 'string') {
                var args = Array.prototype.slice.call(arguments, 1);
                var singleInst = $(this).data('croppie');

                if (opts === 'get') {
                    return singleInst.get();
                }
                else if (opts === 'result') {
                    return singleInst.result.apply(singleInst, args);
                }
                else if (opts === 'bind') {
                    return singleInst.bind.apply(singleInst, args);
                }

                return this.each(function () {
                    var i = $(this).data('croppie');
                    if (!i) return;

                    var method = i[opts];
                    if ($.isFunction(method)) {
                        method.apply(i, args);
                        if (opts === 'destroy') {
                            $(this).removeData('croppie');
                        }
                    }
                    else {
                        throw 'Croppie ' + opts + ' method not found';
                    }
                });
            }
            else {
                return this.each(function () {
                    var i = new Croppie(this, opts);
                    i.$ = $;
                    $(this).data('croppie', i);
                });
            }
        };
    }

    function Croppie(element, opts) {
        if (element.className.indexOf('croppie-container') > -1) {
            throw new Error("Croppie: Can't initialize croppie more than once");
        }
        this.element = element;
        this.options = deepExtend(clone(Croppie.defaults), opts);

        if (this.element.tagName.toLowerCase() === 'img') {
            var origImage = this.element;
            addClass(origImage, 'cr-original-image');
            setAttributes(origImage, {'aria-hidden' : 'true', 'alt' : '' });
            var replacementDiv = document.createElement('div');
            this.element.parentNode.appendChild(replacementDiv);
            replacementDiv.appendChild(origImage);
            this.element = replacementDiv;
            this.options.url = this.options.url || origImage.src;
        }

        _create.call(this);
        if (this.options.url) {
            var bindOpts = {
                url: this.options.url,
                points: this.options.points
            };
            delete this.options['url'];
            delete this.options['points'];
            _bind.call(this, bindOpts);
        }
    }

    Croppie.defaults = {
        viewport: {
            width: 100,
            height: 100,
            type: 'square'
        },
        boundary: { },
        orientationControls: {
            enabled: true,
            leftClass: '',
            rightClass: ''
        },
        resizeControls: {
            width: true,
            height: true
        },
        customClass: '',
        showZoomer: true,
        enableZoom: true,
        enableResize: false,
        mouseWheelZoom: true,
        enableExif: false,
        enforceBoundary: true,
        enableOrientation: false,
        enableKeyMovement: true,
        update: function () { }
    };

    Croppie.globals = {
        translate: 'translate3d'
    };

    deepExtend(Croppie.prototype, {
        bind: function (options, cb) {
            return _bind.call(this, options, cb);
        },
        get: function () {
            var data = _get.call(this);
            var points = data.points;
            if (this.options.relative) {
                points[0] /= this.elements.img.naturalWidth / 100;
                points[1] /= this.elements.img.naturalHeight / 100;
                points[2] /= this.elements.img.naturalWidth / 100;
                points[3] /= this.elements.img.naturalHeight / 100;
            }
            return data;
        },
        result: function (type) {
            return _result.call(this, type);
        },
        refresh: function () {
            return _refresh.call(this);
        },
        setZoom: function (v) {
            _setZoomerVal.call(this, v);
            dispatchChange(this.elements.zoomer);
        },
        rotate: function (deg) {
            _rotate.call(this, deg);
        },
        destroy: function () {
            return _destroy.call(this);
        }
    });
    return Croppie;
}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(103).setImmediate))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(104);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30), __webpack_require__(105)))

/***/ }),
/* 105 */
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
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_webpart_base__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_sp_webpart_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_webpart_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_croppie__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_croppie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_croppie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_AddListItemWebPartStrings__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_AddListItemWebPartStrings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_AddListItemWebPartStrings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sp_pnp_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ExternalRef_css_cropper_min_css__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ExternalRef_css_cropper_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ExternalRef_css_cropper_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ExternalRef_css_cropper_css__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ExternalRef_css_cropper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ExternalRef_css_cropper_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ExternalRef_css_richtext_min_css__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ExternalRef_css_richtext_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ExternalRef_css_richtext_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ExternalRef_js_cropper_main_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ExternalRef_js_cropper_main_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ExternalRef_js_cropper_main_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ExternalRef_js_cropper_min_js__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ExternalRef_js_cropper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ExternalRef_js_cropper_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ExternalRef_css_bootstrap_datepicker_min_css__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ExternalRef_css_bootstrap_datepicker_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__ExternalRef_css_bootstrap_datepicker_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__commonService__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ExternalRef_css_alertify_min_css__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ExternalRef_css_alertify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__ExternalRef_css_alertify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__microsoft_sp_loader__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__microsoft_sp_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__microsoft_sp_loader__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



//import styles from './AddListItemWebPart.module.scss';

__webpack_require__(83);
__webpack_require__(85);







__webpack_require__(91);

__webpack_require__(108);
__webpack_require__(85);



__webpack_require__(91);

__webpack_require__(88);
__webpack_require__(89);

//var _that = this;
var AddListItemWebPart = (function (_super) {
    __extends(AddListItemWebPart, _super);
    function AddListItemWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddListItemWebPart.prototype.render = function () {
        var IsAnonymous = false;
        __WEBPACK_IMPORTED_MODULE_13__microsoft_sp_loader__["SPComponentLoader"].loadCss('https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.3/croppie.css');
        //Remove these once master page is applied
        // SPComponentLoader.loadScript("https://code.jquery.com/ui/1.12.1/jquery-ui.min.js");
        //  SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css");
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["e" /* checkUserinGroup */])("Admin", this.context.pageContext.user.email, function (result) {
            if (result == 1) {
                _this.loadComponent(IsAnonymous);
            }
            else {
                alertify.alert('Access Denied', 'Sorry You dont have access to this page', function () {
                    history.go(-1);
                }).set('closable', false);
            }
        });
    };
    AddListItemWebPart.prototype.loadComponent = function (IsAnonymous) {
        var _this = this;
        var siteURL = this.context.pageContext.web.absoluteUrl;
        var strLocalStorage = Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["a" /* GetQueryStringParams */])("CName");
        strLocalStorage = strLocalStorage.split("%20").join(' ');
        this.domElement.innerHTML =
            "<div class='breadcrumb'>" +
                "<ol>" +
                "<li><a href='" + siteURL + "/Pages/Home.aspx' title='Home'>Home</a></li>" +
                "<li><a class='pointer' id='breadTilte' title='" + strLocalStorage + "'>" + strLocalStorage + " List View</a></li>" +
                "<li><span>Add " + strLocalStorage + "</span></li>" +
                "</ol>" +
                "</div>" +
                "<div class='title-section'>" +
                "<div class='button-field save-button'>" +
                "<a  title='Save' class='addbutton pointer' id='AddItem'><i class='commonicon-save addbutton'></i>Save</a>" +
                "<a class='delete-icon close-icon pointer deletebutton' class='closebutton' title='Close' id='DelItem'><i class='commonicon-close deletebutton'></i>Close</a>" +
                "</div>" +
                "<h2 id='ComponentName'>Announcements</h2>" +
                "</div>" +
                "<div  class='form-section required'>" +
                "</div>" +
                "<div class='modal'><!-- Place at bottom of page --></div>";
        $('#my-image,#getcroppie,#cancel').hide();
        document.title = 'Add' + strLocalStorage;
        document.getElementById("ComponentName").innerHTML = Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["a" /* GetQueryStringParams */])("CName").split('%20').join(" ");
        this.AddListItems();
        //For Radio Button
        $("input[name='selectionradio']").click(function () {
            var radioValue = $("input[name='selectionradio']:checked").val();
            if (radioValue == "Holiday") {
                $('.themelogo-upload').hide();
                $('#cropped-img').attr("src", siteURL + '/_catalogs/masterpage/BloomHomepage/images/prof-img.jpg');
                $('#rrdescription').hide();
                $("#txtTitle,#txtEndDate,#txtrequiredDescription,#inputImage").val("");
                $('#txtStartDate').datepicker({
                    Format: 'yy/dd/mm'
                }).datepicker('setDate', 'new Date()');
            }
            else {
                $('.themelogo-upload').show();
                $('#rrdescription').show();
            }
        });
        $("input[name='selectionradioImage']").click(function () {
            var radioValue = $("input[name='selectionradioImage']:checked").val();
            if (radioValue == "Upload") {
                $('#divHyperLink').hide();
                $('.banner-upload').show();
            }
            else {
                $('.banner-upload').hide();
                $('#divHyperLink').show();
            }
        });
        $("#anonymous").click(function () {
            IsAnonymous = $('#anonymous').prop('checked'); //$('#test').is(':checked'));
        });
        if (strLocalStorage == "Holiday") {
            $("#radio-2").attr('checked', 'checked');
            $('.themelogo-upload').hide();
            $('#cropped-img').attr("src", siteURL + '/_catalogs/masterpage/BloomHomepage/images/prof-img.jpg');
            $('#rrdescription').hide();
            $("#txtTitle,#txtEndDate,#txtrequiredDescription,#inputImage").val("");
            $('#txtStartDate').datepicker({
                Format: 'yy/dd/mm'
            }).datepicker('setDate', 'new Date()');
        }
        else {
            $("#radio-1").attr('checked', 'checked');
            $('.themelogo-upload').show();
            $('#rrdescription').show();
        }
        $("#radio-3").attr('checked', 'checked');
        //For Save
        var Addevent = document.getElementById('AddItem');
        //for (let i = 0; i < Addevent.length; i++) {
        Addevent.addEventListener("click", function (e) { return _this.AddItem(siteURL, e, IsAnonymous); });
        //}
        var breadTilte = document.getElementById('breadTilte');
        //for (let i = 0; i < Addevent.length; i++) {
        breadTilte.addEventListener("click", function (e) { return _this.pageBack(); });
        var Closeevent = document.getElementById('DelItem');
        // Addevent.addEventListener("click", (e: Event) => this.UpdateItem(siteURL, strComponentId));
        //for (let i = 0; i < Closeevent.length; i++) {
        Closeevent.addEventListener("click", function (e) { return _this.pageBack(); });
        // }
        this.datepickerkeyTypeBlocker();
        //$("#txtExpires").datepicker("setDate", '12/12/2018');
        var changeEvent = document.getElementById('uploadImageFile');
        if (changeEvent) {
            changeEvent.addEventListener("change", function (e) { return _this.validateFileType(); });
        }
        var videochangeEvent = document.getElementById('uploadVideoFile');
        if (videochangeEvent) {
            videochangeEvent.addEventListener("change", function (e) { return _this.validateVideoFileType(); });
        }
        $('#txtFolderName').keyup(function () {
            var array = [];
            $.ajax({
                url: siteURL + "/_api/Web/Lists/GetByTitle('" + strLocalStorage + "')/Items?$expand=ContentType&$select=LinkFilename,FileSystemObjectType",
                type: "GET",
                headers: {
                    "accept": "application/json;odata=verbose",
                },
                success: function (data) {
                    var ItemLength = data.d.results.length;
                    for (var i = 0; i < ItemLength; i++) {
                        if (data.d.results[i].FileSystemObjectType == 1) {
                            array.push(data.d.results[i].LinkFilename);
                        }
                    }
                    $('#txtFolderName').autocomplete({ source: array });
                },
                error: function (data) {
                    console.log(data);
                },
            });
        });
        function readURL(input, width, height) {
            if (input.files && input.files[0] && input.files.length == 1) {
                $('.icon-camera').css("pointer-events", "none");
                $('#inputImage').css("pointer-events", "none");
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#my-image').attr('src', e.target.result);
                    var resize = new __WEBPACK_IMPORTED_MODULE_2_croppie__($('#my-image')[0], {
                        //enableExif: true,
                        viewport: { width: width, height: 265 },
                        // boundary: { width: width + 200, height: height + 200 },
                        boundary: {
                            width: width + 100,
                            height: 300
                        },
                        showZoomer: false,
                        enableResize: true,
                        enforceBoundary: false,
                        enableOrientation: true
                    });
                    $('#getcroppie').fadeIn();
                    $('#cancel').fadeIn();
                    // $('#bannernote').fadeIn();
                    $('#getcroppie').on('click', function () {
                        resize.result({ type: 'base64' }).then(function (dataImg) {
                            var data = [{ image: dataImg }];
                            $('.cr-boundary').hide();
                            $('#cropped-img').attr('src', dataImg);
                            $('#getcroppie,#cancel').hide();
                            $('.icon-camera').css("pointer-events", "");
                            $('#inputImage').css("pointer-events", "");
                        });
                    });
                    $('#cancel').on('click', function () {
                        $('.croppie-container').hide();
                        $('.cr-boundary').hide();
                        $('#getcroppie,#cancel').hide();
                        $('.icon-camera').css("pointer-events", "");
                        $('#inputImage').css("pointer-events", "");
                        $("#inputImage").val("");
                    });
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#inputImage").change(function (e) {
            if ($('.cr-boundary')[0]) {
                $('.cr-boundary')[0].remove();
            }
            if ($('#inputImage').length > 0) {
                $('.croppie-container').show();
                $('.custom-upload').css('pointer-events: none');
                var docname = $(this).val().split('.');
                docname = docname[docname.length - 1].toLowerCase();
                if ($.inArray(docname, ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff']) == -1) {
                    $("#inputImage").val("");
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error("Invalid file type! Please select an image file.");
                }
                else {
                    var _URL = window.URL;
                    var file, img;
                    if ((file = this.files[0])) {
                        img = new Image();
                        img.onload = function () {
                            readURL($('#inputImage')[0], this.width, this.height);
                        };
                        img.src = _URL.createObjectURL(file);
                    }
                }
            }
        });
    };
    AddListItemWebPart.prototype.datepickerkeyTypeBlocker = function () {
        $("#txtExpires,#txtStartDate,#txtEndDate,#txtEvDate,#txtEEDate").keypress(function (event) {
            event.preventDefault();
        });
    };
    AddListItemWebPart.prototype.pageBack = function () {
        window.history.back();
    };
    AddListItemWebPart.prototype.AddItem = function (siteURL, e, IsAnonymous) {
        var _this = this;
        var $body = $('body');
        if ($('.ajs-message').length > 0) {
            $('.ajs-message').remove();
        }
        e.preventDefault();
        $(this).prop('disabled', true);
        var dropOptionValue = $("input[name='selectionradio']:checked").val();
        var dropOptionImageValue = $("input[name='selectionradio']:checked").val();
        var $body = $("body");
        var strLocalStorage = Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["a" /* GetQueryStringParams */])("CName");
        strLocalStorage = strLocalStorage.split("%20").join(' ');
        var isAllfield = true;
        var siteweburl = this.context.pageContext.web.serverRelativeUrl;
        //Add Announcements Part
        if (strLocalStorage == "Announcements") {
            var files = document.getElementById("inputImage");
            var file = files.files[0];
            if ($('#cropped-img')[0].src == siteURL + '/_catalogs/masterpage/BloomHomepage/images/prof-img.jpg') {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Upload the Image File");
                isAllfield = false;
            }
            else if (!$('#txtExpires').val().trim()) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Select the Date");
                isAllfield = false;
            }
            else if (!$('#txtTitle').val().trim()) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter the Title");
                isAllfield = false;
            }
            else if (!$('.richText-editor').text().trim()) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter the Description");
                isAllfield = false;
            }
            else if ($('#canvasdisplay').css('display') == 'block') {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Save Cropped Image");
                isAllfield = false;
            }
            if (isAllfield) {
                $body.addClass("loading");
                if ($("#inputImage").val() == undefined || $("#inputImage").val() == null || $("#inputImage").val() == '') {
                    $.ajax({
                        url: siteURL + "/_api/web/getfilebyserverrelativeurl('" + siteweburl + "/_catalogs/masterpage/Bloom/images/logo.png')/openbinarystream",
                        type: "GET",
                        success: function (data) {
                            var name = Math.random().toString(36).substr(2, 9) + ".png";
                            __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.getFolderByServerRelativeUrl("Announcements").files.add(name, data, true)
                                .then(function (result) {
                                result.file.listItemAllFields.get().then(function (listItemAllFields) {
                                    __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.lists.getByTitle("Announcements").items.getById(listItemAllFields.Id).update({
                                        Title: $("#txtTitle").val().trim(),
                                        Expires: new Date($('#txtExpires').val()),
                                        Explanation: $('.richText-editor').html(),
                                        ExplanationText: $('.richText-editor').text(),
                                        Image: {
                                            "__metadata": {
                                                "type": "SP.FieldUrlValue"
                                            },
                                            Url: siteURL + "/_catalogs/masterpage/Bloom/images/logo.png"
                                        }
                                    }).then(function (r) {
                                        $body.removeClass("loading");
                                        $('.addbutton').prop('disabled', true);
                                        //this.pageBack();
                                        window.history.back();
                                        //window.location.href = "" + siteURL + "/Pages/ListView.aspx?CName=" + strLocalStorage + "";
                                        console.log(name + " properties updated successfully!");
                                    });
                                });
                            });
                        },
                        error: function (data) {
                            $body.removeClass("loading");
                            console.log(data);
                        },
                    });
                }
                else {
                    var uniquename = Math.random().toString(36).substr(2, 9) + ".png";
                    //  var file1 = $('#cropped-img').attr('src').split("base64,");   $('#croppieImge').attr('src', dataImg);
                    var file1 = $('#cropped-img').attr('src').split("base64,");
                    var blob = Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["d" /* base64ToArrayBuffer */])(file1[1]);
                    var myobjQl = {
                        Title: $('#txtTitle').val().trim(),
                        Expires: new Date($('#txtExpires').val()),
                        Explanation: $('.richText-editor').html(),
                        ExplanationText: $('.richText-editor').text(),
                        Image: {
                            "__metadata": {
                                "type": "SP.FieldUrlValue"
                            },
                            Url: siteURL + "/" + strLocalStorage + "/" + uniquename
                        }
                    };
                    Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["c" /* additemsimage */])(strLocalStorage, uniquename, blob, myobjQl, function (e) {
                        $body.addClass("loading");
                        if (e.data) {
                            $body.removeClass("loading");
                            $('.addbutton').prop('disabled', true);
                            window.history.back();
                            //   window.location.href = "" + siteURL + "/Pages/ListView.aspx?CName=" + strLocalStorage + "";
                        }
                        else {
                            $body.removeClass("loading");
                            console.log(e);
                        }
                    });
                }
            }
        } //Add Holiday Part
        else if (dropOptionValue == "Holiday") {
            if (!$('#txtTitle').val().trim()) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter Title");
                isAllfield = false;
            }
            else if (!$('#txtStartDate').val().trim()) {
                //$('#txtEvDate').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter txtStartDate");
                isAllfield = false;
            }
            else if (Date.parse($("#txtStartDate").val().trim()) > Date.parse($("#txtEndDate").val().trim())) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Start date must be less than End date");
                return false;
            }
            var myobjHol = {
                Title: $("#txtTitle").val().trim(),
                EventDate: new Date($("#txtStartDate").val()),
                EndEventDate: new Date($("#txtEndDate").val()),
            };
            if (isAllfield) {
                $body.addClass("loading");
                Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["b" /* addItems */])("Holiday", myobjHol, function (e) {
                    $body.addClass("loading");
                    if (e.data) {
                        $body.removeClass("loading");
                        $('.addbutton').prop('disabled', true);
                        // this.pageBack();
                        window.history.back();
                        // window.location.href = "" + siteURL + "/Pages/ListView.aspx?CName=" + strLocalStorage + "";
                    }
                    else {
                        $body.removeClass("loading");
                        console.log(e);
                    }
                });
            }
        } //Add QuickLinks Part
        else if (strLocalStorage == "Quick Links") {
            var regexp = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
            if (!$('#txtTitle').val().trim()) {
                //$('#txtTitle').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter Title");
                isAllfield = false;
            }
            else if (!$('#txtHyper').val().trim()) {
                //$('#txtHyper').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter Link URL");
                isAllfield = false;
            }
            else if (!regexp.test($('#txtHyper').val().trim())) {
                //$('#txtHyper').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter Link URL Correctly");
                isAllfield = false;
            }
            var myobjQl = {
                Title: $("#txtTitle").val().trim(),
                LinkURL: {
                    "__metadata": {
                        "type": "SP.FieldUrlValue"
                    },
                    Url: $('#txtHyper').val().trim(),
                }
                // ,Display: true
            };
            if (isAllfield) {
                $body.addClass("loading");
                Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["b" /* addItems */])("Quick Links", myobjQl, function (e) {
                    $body.addClass("loading");
                    if (e.data) {
                        $body.removeClass("loading");
                        $('.addbutton').prop('disabled', true);
                        // this.pageBack();
                        window.history.back();
                        // window.location.href = "" + siteURL + "/Pages/ListView.aspx?CName=" + strLocalStorage + "";
                    }
                    else {
                        $body.removeClass("loading");
                        console.log(e);
                    }
                });
            }
        } //Add News Part
        else if (strLocalStorage == "News") {
            var files = document.getElementById("inputImage");
            var file = files.files[0];
            if (!$('#inputImage').val().trim()) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Select the Image");
                isAllfield = false;
            }
            else if (!$('#txtExpires').val().trim()) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Select the Date");
                isAllfield = false;
            }
            else if (!$('#txtTitle').val().trim()) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter Title");
                isAllfield = false;
            }
            else if (!$('#txtrequiredDescription').val().trim()) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter Description");
                isAllfield = false;
            }
            else if ($('#canvasdisplay').css('display') == 'block') {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Save Cropped Image");
                isAllfield = false;
            }
            if (isAllfield) {
                $body.addClass("loading");
                var uniquename = Math.random().toString(36).substr(2, 9) + ".png";
                var file1 = $('#cropped-img').attr('src').split("base64,");
                var blob = Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["d" /* base64ToArrayBuffer */])(file1[1]);
                var myobjQl = {
                    Title: $("#txtTitle").val().trim(),
                    Date: new Date($("#txtExpires").val()),
                    Explanation: $("#txtrequiredDescription").val(),
                    Image: {
                        "__metadata": {
                            "type": "SP.FieldUrlValue"
                        },
                        Url: siteURL + "/" + strLocalStorage + "/" + uniquename
                    }
                };
                Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["c" /* additemsimage */])(strLocalStorage, uniquename, blob, myobjQl, function (e) {
                    if (e.data) {
                        $body.removeClass("loading");
                        $('.addbutton').prop('disabled', true);
                        // this.pageBack();
                        window.history.back();
                        //  window.location.href = "" + siteURL + "/Pages/ListView.aspx?CName=" + strLocalStorage + "";
                    }
                    else {
                        console.log(e);
                    }
                });
            }
        } //Add QuickReads Part
        else if (strLocalStorage == "Employee Corner") {
            var files = document.getElementById("uploadFile");
            var file = files.files[0];
            // var uniquename = Math.random().toString(36).substr(2, 9) + "." + file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length);
            if (!$('#txtTitle').val().trim()) {
                // $('#txtTitle').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter Title");
                isAllfield = false;
            }
            else if (!$('#uploadFile').val().trim()) {
                //$('#uploadFile').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Select Document File");
                isAllfield = false;
            }
            var myobjQl = {
                Title: $("#txtTitle").val().trim(),
                DocumentFile: {
                    "__metadata": {
                        "type": "SP.FieldUrlValue"
                    },
                    Url: siteURL + "/" + strLocalStorage + "/" + file.name
                }
                //,Display: true
            };
            if (isAllfield) {
                $body.addClass("loading");
                Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["c" /* additemsimage */])(strLocalStorage, file.name, file, myobjQl, function (e) {
                    if (e.data) {
                        $body.removeClass("loading");
                        $('.addbutton').prop('disabled', true);
                        // this.pageBack();
                        window.history.back();
                        // window.location.href = "" + siteURL + "/Pages/ListView.aspx?CName=" + strLocalStorage + "";
                    }
                    else {
                        console.log(e);
                    }
                });
            }
        } ////Add Banners Part
        else if (strLocalStorage == "Banners") {
            var regexp = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
            var files = document.getElementById("inputImage");
            var file = files.files[0];
            var siteImageURL = window.location.origin;
            if ($('#cropped-img')[0].src == siteURL + '/_catalogs/masterpage/BloomHomepage/images/prof-img.jpg') {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Select the Image");
                isAllfield = false;
            }
            else if (!$('#txtTitle').val().trim()) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter the Title");
                isAllfield = false;
            }
            else if (!$('.richText-editor').text().trim()) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter the Description");
                isAllfield = false;
            }
            else if ($('#txtHyper').val() && !regexp.test($('#txtHyper').val().trim())) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please give a valid Link URL");
                isAllfield = false;
            }
            else if ($('#canvasdisplay').css('display') == 'block') {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Save Cropped Image");
                isAllfield = false;
            }
            var uniquename = Math.random().toString(36).substr(2, 9) + ".png";
            var file1 = $('#cropped-img').attr('src').split("base64,");
            var blob = Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["d" /* base64ToArrayBuffer */])(file1[1]);
            var myobjQl = {
                Title: $("#txtTitle").val().trim(),
                // BannerContent: $("#txtrequiredDescription").val(),
                BannerContent: $('.richText-editor').html(),
                Image: {
                    "__metadata": {
                        "type": "SP.FieldUrlValue"
                    },
                    Url: siteURL + "/" + strLocalStorage + "/" + uniquename
                },
                LinkURL: {
                    "__metadata": {
                        "type": "SP.FieldUrlValue"
                    },
                    Url: $('#txtHyper').val(),
                }
            };
            if (isAllfield) {
                $body.addClass("loading");
                Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["c" /* additemsimage */])(strLocalStorage, uniquename, blob, myobjQl, function (e) {
                    if (e.data) {
                        $body.removeClass("loading");
                        $('.addbutton').prop('disabled', true);
                        //   this.pageBack();
                        window.history.back();
                    }
                    else {
                        console.log(e);
                    }
                });
            }
        } ////Add New ImageGallery Part
        else if (strLocalStorage == "Image Gallery") {
            var regexp = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
            var files = document.getElementById("uploadImageFile");
            var file_1 = files.files[0];
            if (!$('#txtFolderName').val().trim()) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter the Folder Name");
                isAllfield = false;
            }
            else if (!$('#uploadImageFile').val().trim()) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Select the Image");
                isAllfield = false;
            }
            if (isAllfield) {
                $body.addClass("loading");
                __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.lists.getByTitle("Image Gallery").rootFolder.folders.add($('#txtFolderName').val())
                    .then(function (data) {
                    __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.getFolderByServerRelativeUrl("Image Gallery" + "/" + $('#txtFolderName').val()).files.add(file_1.name, file_1, true)
                        .then(function (result) {
                        $body.removeClass("loading");
                        window.history.back();
                    });
                });
            }
        }
        else if (strLocalStorage == "Video Gallery") {
            var regexp = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
            var files = document.getElementById("uploadVideoFile");
            var file_2 = files.files[0];
            var filename = $("#uploadVideoFile").val().split(String.fromCharCode(92));
            $("#browsedVideofile").val(filename[filename.length - 1]);
            var radioValue = $("input[name='selectionradioImage']:checked").val();
            if (radioValue == "Upload") {
                if (!$('#txtFolderName').val().trim()) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error("Please enter the Folder name");
                    isAllfield = false;
                }
                else if (!$('#txtTitle').val().trim()) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error("Please enter the Title");
                    isAllfield = false;
                }
                if (!$('#uploadVideoFile').val().trim()) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error("Please Select the video File");
                    isAllfield = false;
                }
            }
            if (radioValue == "Stream") {
                if (!$('#txtFolderName').val().trim()) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error("Please enter the Folder name");
                    isAllfield = false;
                }
                else if (!$('#txtTitle').val().trim()) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error("Please enter the Title");
                    isAllfield = false;
                }
                else if (!$('#txtHyper').val().trim()) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error("Please Enter the URL");
                    isAllfield = false;
                }
            }
            if (isAllfield) {
                $body.addClass("loading");
                __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.lists.getByTitle("Video Gallery").rootFolder.folders.add($('#txtFolderName').val())
                    .then(function (data) {
                    if (radioValue == "Upload") {
                        var VideoTitle = { Title: $('#txtTitle').val().trim() };
                        __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.getFolderByServerRelativeUrl("Video Gallery" + "/" + $('#txtFolderName').val()).files.add(file_2.name, file_2, true)
                            .then(function (_a) {
                            var file = _a.file;
                            return file.getItem();
                        })
                            .then(function (item) { return item.update(VideoTitle); })
                            .then(function (result) {
                            $body.removeClass("loading");
                            window.history.back();
                        });
                    }
                    else {
                        var Videojson = {
                            Title: $("#txtTitle").val(),
                            LinkURL: {
                                "__metadata": { "type": "SP.FieldUrlValue" },
                                Url: $('#txtHyper').val().trim()
                            }
                        };
                        if ($("#uploadImageFile").val() == undefined || $("#uploadImageFile").val() == null || $("#uploadImageFile").val() == '') {
                            $.ajax({
                                url: _this.context.pageContext.site.absoluteUrl + "/_api/web/getfilebyserverrelativeurl('/sites/spuat/_catalogs/masterpage/Bloom/images/logo.png')/openbinarystream",
                                type: "GET",
                                success: function (data) {
                                    var name = $("#txtTitle").val().trim() + '.jpg';
                                    __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.getFolderByServerRelativeUrl("Video Gallery" + "/" + $('#txtFolderName').val()).files.add(name, data, true)
                                        .then(function (_a) {
                                        var file = _a.file;
                                        return file.getItem();
                                    })
                                        .then(function (item) { return item.update(Videojson); })
                                        .then(function (result) {
                                        $body.removeClass("loading");
                                        window.history.back();
                                    });
                                },
                                error: function (data) {
                                    console.log(data);
                                },
                            });
                        }
                    }
                });
            }
        }
        else if (strLocalStorage == "Organizational Policies") {
            var files = document.getElementById("uploadFile");
            var file = files.files[0];
            if (!$('#txtTitle').val().trim()) {
                // $('#txtTitle').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter the Title");
                isAllfield = false;
            }
            else if ($('#ddlDepartment').val() == "Select") {
                //$('#uploadFile').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Select the Department");
                isAllfield = false;
            }
            else if (!$('.richText-editor').text().trim()) {
                //$('#txtDepartment').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter the Department Name");
                isAllfield = false;
            }
            else if (!$('#uploadFile').val().trim()) {
                //$('#uploadFile').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Select File");
                isAllfield = false;
            }
            var myobjQl = {
                Title: $("#txtTitle").val(),
                Departments: $("#txtDepartment").val(),
                Explanation: $('.richText-editor').html(),
                DocumentFile: {
                    "__metadata": {
                        "type": "SP.FieldUrlValue"
                    },
                    Url: siteURL + "/" + strLocalStorage + "/" + file.name
                }
            };
            if (isAllfield) {
                $body.addClass("loading");
                var _thiss = this;
                Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["c" /* additemsimage */])(strLocalStorage, file.name, file, myobjQl, function (e) {
                    if (e.data) {
                        $body.removeClass("loading");
                        $('.addbutton').prop('disabled', true);
                        // this.pageBack();
                        if ($('#ddlDepartment').val() == "Others") {
                            _thiss.AddDepartments();
                        }
                        else {
                            window.history.back();
                        }
                    }
                    else {
                        console.log(e);
                    }
                });
            }
        } //Add Corporate Discounts Part
        else if (strLocalStorage == "Corporate Discounts") {
            var docfiles = document.getElementById("uploadFile");
            var docfile_1 = docfiles.files[0];
            var files = document.getElementById("inputImage");
            var file = files.files[0];
            var regexp = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
            if (!$('#txtTitle').val().trim()) {
                //$('#txtTitle').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter Title");
                isAllfield = false;
            }
            else if (!$('#txtsitelink').val().trim()) {
                //$('#txtsitelink').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter SiteLink");
                isAllfield = false;
            }
            else if (!regexp.test($('#txtsitelink').val().trim())) {
                //$('#txtsitelink').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter SiteLink Correctly");
                isAllfield = false;
            }
            else if ($('#canvasdisplay').css('display') == 'block') {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Save Cropped Image");
                isAllfield = false;
            }
            if (isAllfield) {
                var fileURL = window.location.origin;
                $body.addClass("loading");
                if (files.files.length == 0 && docfiles.files.length > 0) {
                    var name = Math.random().toString(36).substr(2, 9) + ".png";
                    __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.getFolderByServerRelativeUrl("Shared Documents").files.add(docfile_1.name, docfile_1, true)
                        .then(function (datefile) {
                        var CorDocOnly = {
                            Title: $("#txtTitle").val().trim(),
                            SiteLink: {
                                "__metadata": {
                                    "type": "SP.FieldUrlValue"
                                },
                                Url: $('#txtsitelink').val().trim(),
                            },
                            VendorLogo: {
                                "__metadata": {
                                    "type": "SP.FieldUrlValue"
                                },
                                Url: siteURL + "/_catalogs/masterpage/Bloom/images/logo.png"
                            },
                            DocumentFile: {
                                "__metadata": {
                                    "type": "SP.FieldUrlValue"
                                },
                                Url: fileURL + datefile.data.ServerRelativeUrl
                            }
                        };
                        $body.addClass("loading");
                        Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["c" /* additemsimage */])(strLocalStorage, name, docfile_1, CorDocOnly, function (e) {
                            if (e.data) {
                                $body.removeClass("loading");
                                $('.addbutton').prop('disabled', true);
                                window.history.back();
                            }
                            else {
                                console.log(e);
                            }
                        });
                    });
                }
                else if (docfiles.files.length == 0 && files.files.length > 0) {
                    var file1 = $('#cropped-img').attr('src').split("base64,");
                    var blob = Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["d" /* base64ToArrayBuffer */])(file1[1]);
                    var uniquename = Math.random().toString(36).substr(2, 9) + ".png";
                    var myobjQl = {
                        Title: $("#txtTitle").val().trim(),
                        SiteLink: {
                            "__metadata": {
                                "type": "SP.FieldUrlValue"
                            },
                            Url: $('#txtsitelink').val().trim(),
                        },
                        VendorLogo: {
                            "__metadata": {
                                "type": "SP.FieldUrlValue"
                            },
                            Url: siteURL + "/" + strLocalStorage + "/" + uniquename
                        },
                    };
                    $body.addClass("loading");
                    Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["c" /* additemsimage */])(strLocalStorage, uniquename, blob, myobjQl, function (e) {
                        if (e.data) {
                            $body.removeClass("loading");
                            $('.addbutton').prop('disabled', true);
                            window.history.back();
                        }
                        else {
                            console.log(e);
                        }
                    });
                }
                else if (files.files.length == 0 && docfiles.files.length == 0) {
                    var myobjQl = {
                        Title: $("#txtTitle").val().trim(),
                        SiteLink: {
                            "__metadata": {
                                "type": "SP.FieldUrlValue"
                            },
                            Url: $('#txtsitelink').val().trim(),
                        },
                        VendorLogo: {
                            "__metadata": {
                                "type": "SP.FieldUrlValue"
                            },
                            Url: siteURL + "/_catalogs/masterpage/Bloom/images/logo.png"
                        },
                    };
                    $body.addClass("loading");
                    Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["c" /* additemsimage */])(strLocalStorage, uniquename, blob, myobjQl, function (e) {
                        if (e.data) {
                            $body.removeClass("loading");
                            $('.addbutton').prop('disabled', true);
                            window.history.back();
                        }
                        else {
                            console.log(e);
                        }
                    });
                }
                else {
                    var file1 = $('#cropped-img').attr('src').split("base64,");
                    var blob = Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["d" /* base64ToArrayBuffer */])(file1[1]);
                    //var filename = $('#inputImage').val().replace(/C:\\fakepath\\/i, '');
                    var uniquename = Math.random().toString(36).substr(2, 9) + ".png";
                    __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.getFolderByServerRelativeUrl("Corporate Discounts").files.add(uniquename, blob, true)
                        .then(function (result) {
                        result.file.listItemAllFields.get().then(function (listItemAllFields) {
                            __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.getFolderByServerRelativeUrl("Shared Documents").files.add(docfile_1.name, docfile_1, true)
                                .then(function (datefile) {
                                __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.lists.getByTitle("Corporate Discounts").items.getById(listItemAllFields.Id).update({
                                    Title: $("#txtTitle").val().trim(),
                                    SiteLink: {
                                        "__metadata": {
                                            "type": "SP.FieldUrlValue"
                                        },
                                        Url: $('#txtsitelink').val().trim(),
                                    },
                                    VendorLogo: {
                                        "__metadata": {
                                            "type": "SP.FieldUrlValue"
                                        },
                                        Url: fileURL + result.data.ServerRelativeUrl
                                    },
                                    DocumentFile: {
                                        "__metadata": {
                                            "type": "SP.FieldUrlValue"
                                        },
                                        Url: fileURL + datefile.data.ServerRelativeUrl
                                    },
                                }).then(function (r) {
                                    $body.removeClass("loading");
                                    $('.addbutton').prop('disabled', true);
                                    window.history.back();
                                });
                            });
                        });
                    });
                }
            }
        } //Add Events Part
        else if (dropOptionValue == "Events") {
            var files = document.getElementById("inputImage");
            var file = files.files[0];
            if ($('#inputImage').length > 0 && $('#cropped-img')[0].src == siteURL + "/_catalogs/masterpage/BloomHomepage/images/prof-img.jpg") {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Crop the Image First");
                isAllfield = false;
            }
            if (!$('#txtTitle').val().trim()) {
                //$('#txtTitle').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter Title");
                isAllfield = false;
            }
            else if (!$('#txtStartDate').val().trim()) {
                // $('#txtStartDate').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Select StartDate");
                isAllfield = false;
            }
            else if (Date.parse($("#txtStartDate").val().trim()) > Date.parse($("#txtEndDate").val().trim())) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Start date must be less than End date");
                return false;
            }
            else if ($('#canvasdisplay').css('display') == 'block') {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Save Cropped Image");
                isAllfield = false;
            }
            if (isAllfield) {
                var fileURL = window.location.origin;
                $body.addClass("loading");
                if (files.files.length > 0) {
                    var name = Math.random().toString(36).substr(2, 9) + ".png";
                    var file1 = $('#cropped-img').attr('src').split("base64,");
                    var blob = Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["d" /* base64ToArrayBuffer */])(file1[1]);
                    __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.getFolderByServerRelativeUrl("Events").files.add(name, blob, true)
                        .then(function (result) {
                        result.file.listItemAllFields.get().then(function (listItemAllFields) {
                            __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.lists.getByTitle("Events").items.getById(listItemAllFields.Id).update({
                                Title: $("#txtTitle").val().trim(),
                                StartDate: new Date($('#txtStartDate').val()),
                                EndDate: new Date($('#txtEndDate').val()),
                                Explanation: $('.richText-editor').html(),
                                ExplanationText: $('.richText-editor').text(),
                                Image: {
                                    "__metadata": {
                                        "type": "SP.FieldUrlValue"
                                    },
                                    Url: siteURL + "/" + "Events" + "/" + name
                                }
                            }).then(function (r) {
                                $body.removeClass("loading");
                                $('.addbutton').prop('disabled', true);
                                // this.pageBack();
                                window.history.back();
                                //   window.location.href = "" + siteURL + "/Pages/ListView.aspx?CName=" + strLocalStorage + "";
                                //console.log(name + " properties updated successfully!");
                            });
                        });
                    });
                }
                else {
                    if ($("#inputImage").val() == undefined || $("#inputImage").val() == null || $("#inputImage").val() == '') {
                        $.ajax({
                            url: siteURL + "/_api/web/getfilebyserverrelativeurl('" + siteweburl + "/_catalogs/masterpage/Bloom/images/logo.png')/openbinarystream",
                            type: "GET",
                            success: function (data) {
                                var name = Math.random().toString(36).substr(2, 9) + ".png";
                                __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.getFolderByServerRelativeUrl("Events").files.add(name, data, true)
                                    .then(function (result) {
                                    result.file.listItemAllFields.get().then(function (listItemAllFields) {
                                        __WEBPACK_IMPORTED_MODULE_4_sp_pnp_js___default.a.sp.web.lists.getByTitle("Events").items.getById(listItemAllFields.Id).update({
                                            Title: $("#txtTitle").val().trim(),
                                            StartDate: new Date($('#txtStartDate').val()),
                                            EndDate: new Date($('#txtEndDate').val()),
                                            Explanation: $('.richText-editor').html(),
                                            ExplanationText: $('.richText-editor').text(),
                                            Image: {
                                                "__metadata": {
                                                    "type": "SP.FieldUrlValue"
                                                },
                                                Url: siteURL + "/_catalogs/masterpage/Bloom/images/logo.png"
                                            }
                                        }).then(function (r) {
                                            $body.removeClass("loading");
                                            $('.addbutton').prop('disabled', true);
                                            window.history.back();
                                        });
                                    });
                                });
                            },
                            error: function (data) {
                                $body.removeClass("loading");
                                console.log(data);
                            },
                        });
                    }
                }
            }
        } //Add Polls Part
        else if (strLocalStorage == "Polls") {
            var optionseperate = $('#txtOptions').val();
            var resultarray = optionseperate.split(";");
            var newArray = resultarray.filter(function (v) {
                return v !== '' && v !== ' ';
            });
            if (!$('#txtQuestion').val().trim()) {
                //$('#txtQuestion').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter Question");
                isAllfield = false;
            }
            else if (!$('#txtOptions').val().trim() || newArray.length < 2) {
                // $('#txtOptions').focus();
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Minimum Two options needed");
                isAllfield = false;
            }
            else if (!$('#txtOptions').val().trim() || newArray.length > 4) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Maximum Four Answers only Allowed");
                return false;
            }
            var myobjPols = {
                Question: $("#txtQuestion").val().trim(),
                Options: $("#txtOptions").val().trim(),
                IsVisibles: IsAnonymous
            };
            if (isAllfield) {
                $body.addClass("loading");
                Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["b" /* addItems */])("Polls", myobjPols, function (e) {
                    $body.addClass("loading");
                    if (e.data) {
                        $body.removeClass("loading");
                        $('.addbutton').prop('disabled', true);
                        // this.pageBack();
                        window.history.back();
                        // window.location.href = "" + siteURL + "/Pages/ListView.aspx?CName=" + strLocalStorage + "";
                    }
                    else {
                        $body.removeClass("loading");
                        console.log(e);
                    }
                });
            }
        }
    };
    AddListItemWebPart.prototype.AddDepartments = function () {
        return __awaiter(this, void 0, void 0, function () {
            var myobjPols;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myobjPols = {
                            Departments: $("#txtDepartment").val().trim()
                        };
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["b" /* addItems */])("Departments", myobjPols, function (e) {
                                if (e.data) {
                                    window.history.back();
                                }
                                else {
                                    console.log(e);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //// Bind Organizational Policies Data to Dropdown
    AddListItemWebPart.prototype.bindorgDept = function () {
        var objResults = Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["f" /* readItems */])("Departments", ["ID", "Departments"], 1000, "Modified", "Display", 1);
        objResults.then(function (items) {
            var arrayname = [];
            var DeptHTML = "";
            DeptHTML += "<option id='0' disabled selected>Select</option>";
            for (var i = 0; i < items.length; i++) {
                arrayname.push({
                    "dept": items[i].Departments,
                    "id": items[i].ID
                });
                DeptHTML += "<option id='" + items[i].ID + "'>" + items[i].Departments + "</option>";
            }
            DeptHTML += "<option id='" + i + 1 + "'>Others</option>";
            $("#ddlDepartment").append(DeptHTML);
        });
        $("#DivDepartment").hide();
        $('#ddlDepartment').change(function () {
            $("#txtDepartment").val($(this).val());
            if ($(this).val() == "Others") {
                $("#DivDepartment").show();
                $("#txtDepartment").val("");
            }
            else {
                $("#DivDepartment").hide();
            }
        });
    };
    //// Bind ImageGallery folder name to autocomplete
    AddListItemWebPart.prototype.bindgalleryImage = function () {
        var isSearch = true;
        var siteURL = this.context.pageContext.web.absoluteUrl;
        var _that = this;
        $("#txtTitle").keyup(function (event) {
            var get = $('#txtTitle').val();
            if (!get) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Enter the Topic");
                isSearch = false;
            }
            if (isSearch) {
                _that.bindSearchTitle(siteURL, isSearch);
            }
        });
    };
    AddListItemWebPart.prototype.bindSearchTitle = function (siteURL, isSearch) {
        return __awaiter(this, void 0, void 0, function () {
            var columnArray, picItems_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!isSearch) return [3 /*break*/, 2];
                        columnArray = ["ID", "FileLeafRef", "FileSystemObjectType", "FileDirRef"];
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["f" /* readItems */])("Image Gallery", columnArray, 5000, "ID")];
                    case 1:
                        picItems_1 = _a.sent();
                        picItems_1.then(function (items) {
                            var itemLength = picItems_1.length;
                            for (var i = 0; i < itemLength; i++) {
                                if (picItems_1[i].FileSystemObjectType == 1) {
                                }
                            }
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AddListItemWebPart.prototype.validateVideoFileType = function () {
        var fileName = $("#uploadVideoFile").val();
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile == "mp4" || extFile == "x-m4v" || extFile == "m4a" || extFile == "f4v" || extFile == "m4b" || extFile == "mov" || extFile == "f4b" || extFile == "flv") {
            var filename = $("#uploadVideoFile").val().split(String.fromCharCode(92));
            $("#browsedfileName").val(filename[filename.length - 1]);
        }
        else {
            $("#uploadVideoFile").val(null);
            $("#browsedfileName").val('');
        }
        var filename = $("#uploadVideoFile").val().split(String.fromCharCode(92));
        $("#browsedVideofile").val(filename[filename.length - 1]);
    };
    AddListItemWebPart.prototype.validateFileType = function () {
        var fileName = $("#uploadImageFile").val();
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile == "jpg" || extFile == "jpeg" || extFile == "png" || extFile == "gif" || extFile == "bmp" || extFile == "tiff") {
            var filename = $("#uploadImageFile").val().split(String.fromCharCode(92));
            $("#browsedfileName").val(filename[filename.length - 1]);
            //TO DO
        }
        else {
            $("#uploadImageFile").val(null);
            $("#browsedfileName").val('');
        }
    };
    ////Add Items in to List
    AddListItemWebPart.prototype.AddListItems = function () {
        var strLocalStorage = Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["a" /* GetQueryStringParams */])("CName");
        strLocalStorage = strLocalStorage.split("%20").join(' ');
        var renderUploadImagefile = "";
        var renderUploadVideofile = "";
        var rendertext = "";
        var renderFoldertext = "";
        var renderdate = "";
        var renderHyperlink = "";
        var renderHyperSitelink = "";
        var renderUploadfile = "";
        var renderSiteLink = "";
        var renderStartEndDate = "";
        var renderhtmlImageBanners = "";
        var renderQuestion = "";
        var renderAnswers = "";
        var renderDepartment = "";
        var renderRequiredDescription = "";
        var requirednewrichTextEditor = "";
        var newrichTextEditor = "";
        var renderCorpUploadfile = "";
        var renderOptionImageGallery = "";
        var renderOption = "";
        var renderDepartmentddl = "";
        var renderhtmlCheckBox = "";
        var strLocalStorage = Object(__WEBPACK_IMPORTED_MODULE_11__commonService__["a" /* GetQueryStringParams */])("CName");
        strLocalStorage = strLocalStorage.split("%20").join(' ');
        var radioValue = $("input[name='selectionradio']:checked").val();
        if (radioValue == "Holiday") {
            strLocalStorage = "Holiday";
        }
        else if (radioValue == "Events") {
            strLocalStorage = "Events";
        }
        var siteURL = this.context.pageContext.web.absoluteUrl;
        renderOption += "<div class='radio-btn appendOption'>" +
            "<div class='col-md-12 form-group'>" +
            "<label>Choose Component</label>" +
            "<div class='radio col-md-6'>" +
            "<input id='radio-1' name='selectionradio' type='radio' value='Events'>" +
            "<label for='radio-1' class='radio-label'>Events</label>" +
            "</div>" +
            "<div class='radio col-md-6'>" +
            "<input id='radio-2' name='selectionradio' type='radio' value='Holiday'>" +
            "<label for='radio-2' class='radio-label'>Holidays</label>" +
            "</div>" +
            "</div>" +
            "</div>";
        renderOptionImageGallery += "<div class='radio-btn appendOptionImage'>" +
            "<div class='col-md-12 form-group'>" +
            "<label>Choose Component</label>" +
            "<div class='radio col-md-6'>" +
            "<input id='radio-3' name='selectionradioImage' type='radio' value='Upload'>" +
            "<label for='radio-3' class='radio-label'>Upload</label>" +
            "</div>" +
            "<div class='radio col-md-6'>" +
            "<input id='radio-4' name='selectionradioImage' type='radio' value='Stream'>" +
            "<label for='radio-4' class='radio-label'>Stream</label>" +
            "</div>" +
            "</div>" +
            "</div>";
        renderhtmlImageBanners += "<div class='form-imgsec'>" +
            "<div class='themelogo-upload'>" +
            "<label id='imageLabel' class='control-label'>Image</label>" +
            "<img id='cropped-img' src=" + siteURL + "/_catalogs/masterpage/BloomHomepage/images/prof-img.jpg>" +
            "<div class='image-upload' id='imagerestrict'>" +
            "<div class='custom-upload'>" +
            "<input type='file' id='inputImage' name='file' accept='.jpg,.jpeg,.png,.gif,.bmp,.tiff' multiple='' class='file' />" +
            "<button class='btn btn-primary' type='button'><i class='icon-camera'></i></button>" +
            "<img id='result' src=''>" +
            "</div>" +
            "<a href='#' title='Delete' id='image-delete'>" +
            "<i class='icon-delete'></i></a>" +
            "</div>" +
            "<img id='my-image' src='#' />" +
            "</div>" +
            "<div class='crop-button col-md-12'>" +
            "<button id='getcroppie' type='button'>Crop Image</button>" +
            "<button id='cancel' type='button'>Cancel</button>" +
            "</div>" +
            "</div>";
        renderhtmlCheckBox += "<div class='check-box anonymous'>" +
            "<input id='anonymous' type='checkbox' name='' value=''>" +
            "<label>Is Anonymous</label>" +
            "</div>";
        rendertext += "<div class='input text'>" +
            "<label class='control-label'>Title</label>" +
            "<input class='form-control' type='text' value=''  id='txtTitle' /></div>";
        renderFoldertext += "<div id='foldername' class='input text'>" +
            "<label class='control-label'>Folder Name</label>" +
            "<input class='form-control' type='text' value='' id='txtFolderName' /></div>";
        renderdate += "<div class='input date'>" + "<i class='icon-calenter'></i>" +
            "<label class='control-label'>Date</label>" +
            "<input class='form-control date-selector' type='text' value='' id='txtExpires' /></div>";
        newrichTextEditor += "<div class='textarea input'>" +
            "<label>Description</label>" +
            "<textarea id='txtDescription' class='form-control content'></textarea>" +
            "</div>";
        renderHyperlink += "<div class='input text' id='divHyperLink'>" +
            "<label class='control-label'>Link URL</label>" +
            "<input class='form-control' type='text' value='' id='txtHyper' />" +
            "<span>Please enter the Link URL in the following format : https://www.bloomholding.com</span>" +
            "</div>";
        renderHyperSitelink += "<div class='input text'>" +
            "<label>Link URL</label>" +
            "<input class='form-control' type='text' value='' id='txtHyper' />" +
            "<label>Please given valid Announcements or Events URL</label>" +
            "</div>";
        renderUploadfile += "<div class='form-imgsec'>" +
            "<div class='themelogo-upload' style='display: block;'>" +
            "<div class='custom-upload banner-upload'>" +
            "<label class='control-label'>Document File</label>" +
            "<input type='file' id='uploadFile' name='file' accept='.doc,.docx,.xls,.ppt,.pdf' multiple='' class='file'>" +
            "<div class='input-group'>" +
            "<span class='input-group-btn input-group-sm'>" +
            "<button type='button' class='btn btn-fab btn-fab-mini'>Browse</button>" +
            "</span>" +
            "<input type='text' readonly='' class='form-control' placeholder='Upload Files'>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        renderUploadImagefile += "<div class='form-imgsec'>" +
            "<div class='themelogo-upload' style='display: block;'>" +
            "<div class='custom-upload banner-upload'>" +
            "<label class='control-label'>Upload Image File</label>" +
            "<input type='file' id='uploadImageFile' name='image' accept='.jpg,.jpeg,.png,.gif,.bmp,.tiff' multiple=''   class='file'>" +
            "<div class='input-group'>" +
            "<span class='input-group-btn input-group-sm'>" +
            "<button type='button' class='btn btn-fab btn-fab-mini'>Browse</button>" +
            "</span>" +
            "<input type='text' id='browsedfileName' readonly='' class='form-control' placeholder='Upload Files'>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        renderUploadVideofile += "<div class='form-imgsec'>" +
            "<div class='themelogo-upload' style='display: block;'>" +
            "<div class='custom-upload banner-upload'>" +
            "<label class='control-label'>Upload Video File</label>" +
            "<input type='file' id='uploadVideoFile' name='file' accept='video/mp4,video/x-m4v,video/*' multiple='' class='file'>" +
            "<div class='input-group'>" +
            "<span class='input-group-btn input-group-sm'>" +
            "<button type='button' class='btn btn-fab btn-fab-mini'>Browse</button>" +
            "</span>" +
            "<input type='text' id='browsedVideofile' readonly='' class='form-control' placeholder='Upload Files'>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>";
        renderSiteLink += "<div id='siteLink' class='input text'>" +
            "<i class=''></i>" +
            "<label class='control-label'>Site Link</label>" +
            "<input class='form-control' type='text' value='' id='txtsitelink'/>" +
            "<span>Please enter the Site Link in the following format : https://www.bloomholding.com</span>" +
            "</div>";
        renderStartEndDate += "<div class='input date'>" +
            "<i class='icon-calenter'></i>" +
            "<label class='control-label'>Start Date</label>" +
            "<input class='form-control date-selector' type='text' value='' id='txtStartDate' />" +
            "</div>" +
            "<div class='input date'>" +
            "<i class='icon-calenter'></i>" +
            "<label>End Date</label>" +
            "<input class='form-control date-selector' type='text' value='' id='txtEndDate' />" + "</div>";
        renderQuestion += "<div class='input textarea'>" +
            "<label class='control-label'>Question</label>" +
            "<textarea class='form-control' id='txtQuestion'></textarea>" +
            "</div>";
        renderAnswers += "<div id='answers' class='input text'>" +
            "<i class=''></i>" +
            "<label class='control-label'>Options</label>" +
            "<input class='form-control' type='text' value='' id='txtOptions'/>" +
            "<span>Please Enter more than one Options with semicolon ( ; ) Maximun four options</span>" +
            "</div>";
        renderDepartment += "<div class='input text' id='DivDepartment'>" +
            "<i class=''></i>" +
            "<label class='control-label'>New Department</label>" +
            "<input class='form-control' type='text' value='' id='txtDepartment' autocomplete='off'/>" +
            "</div>";
        renderDepartmentddl += '<div class="input text">' +
            '<label class="control-label">Department</label>' +
            '<select id="ddlDepartment" class="form-control">' +
            '</select>' +
            '</div>';
        requirednewrichTextEditor += "<div class='textarea input'>" +
            "<label class='control-label'>Description</label>" +
            "<textarea id='txtrequiredDescription' class='form-control content'></textarea>" +
            "</div>";
        renderRequiredDescription += "<div id='rrdescription' class='input textarea'><label class='control-label'>Description</label><textarea class='form-control' id='txtrequiredDescription'></textarea></div>";
        var date = new Date();
        var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        if (strLocalStorage == 'Announcements') {
            $('.form-section').append(renderhtmlImageBanners);
            $('#my-image,#getcroppie,#cancel').hide();
            $('.form-imgsec').after(renderdate);
            $('.date').after(rendertext);
            $('.text').after(requirednewrichTextEditor);
            $('#txtExpires').datepicker({
                format: "mm/dd/yyyy",
                startDate: today
            }).datepicker('setDate', 'new Date()');
        }
        else if (strLocalStorage == 'Holiday') {
            $('.form-section').append(renderOption);
            $('.appendOption').after(renderhtmlImageBanners);
            $('#my-image,#getcroppie,#cancel').hide();
            $('.form-imgsec').after(rendertext);
            $('.text').after(renderRequiredDescription);
            $('.textarea').after(renderStartEndDate);
            $('#txtStartDate').datepicker({
                Format: 'yy/dd/mm',
                startDate: today
            }).datepicker('setDate', 'new Date()');
            $('#txtEndDate').datepicker({
                Format: 'yy/dd/mm',
                startDate: today
            });
        }
        else if (strLocalStorage == 'Quick Links') {
            $('.form-section').append(rendertext);
            $('.text').after(renderHyperlink);
        }
        else if (strLocalStorage == 'Employee Corner') {
            $('.form-section').append(rendertext);
            $('.text').after(renderUploadfile);
        }
        else if (strLocalStorage == 'Image Gallery') {
            $('.form-section').append(renderFoldertext);
            $('.text').after(renderUploadImagefile);
            this.bindgalleryImage();
        }
        else if (strLocalStorage == 'Video Gallery') {
            $('.form-section').append(renderOptionImageGallery + renderFoldertext + rendertext + renderUploadVideofile + renderHyperlink);
            $('.banner-upload').show();
            $('#divHyperLink').hide();
        }
        else if (strLocalStorage == 'Organizational Policies') {
            $('.form-section').append(rendertext);
            $('.text').after(renderDepartmentddl + renderDepartment + renderUploadfile + newrichTextEditor);
            this.bindorgDept();
        }
        else if (strLocalStorage == 'Banners') {
            $('.form-section').append(renderhtmlImageBanners);
            $('#my-image,#getcroppie,#cancel').hide();
            $('.form-imgsec').after(rendertext);
            $('.text').after(requirednewrichTextEditor);
            $('.textarea').after(renderHyperSitelink);
        }
        else if (strLocalStorage == 'Corporate Discounts') {
            $('.form-section').append(renderhtmlImageBanners);
            $('#my-image,#getcroppie,#cancel').hide();
            $('.form-imgsec').after(rendertext);
            $('.text').after(renderSiteLink);
            $('#siteLink').after(renderCorpUploadfile);
        }
        else if (strLocalStorage == 'Events') {
            $('.form-section').append(renderOption);
            $('.appendOption').after(renderhtmlImageBanners);
            $('#my-image,#getcroppie,#cancel').hide();
            $('#imageLabel').removeClass('control-label');
            $('.form-imgsec').after(rendertext);
            $('.text').after(newrichTextEditor);
            $('.textarea').after(renderStartEndDate);
            $('#txtStartDate').datepicker({
                Format: 'yy/dd/mm',
                startDate: today
            }).datepicker('setDate', 'new Date()');
            $('#txtEndDate').datepicker({
                Format: 'yy/dd/mm',
                startDate: today
            });
        }
        else if (strLocalStorage == 'Polls') {
            $('.form-section').append(renderQuestion);
            $('.textarea').after(renderAnswers);
            $('#answers').after(renderhtmlCheckBox);
        }
        $('.content').richText();
        $('.date-selector').on('changeDate', function (ev) {
            $(this).datepicker('hide');
        });
        if ($('#uploadFile').length > 0) {
            $(document).on('change', '#uploadFile', function () {
                var docname = $(this).val().split('.');
                docname = docname[docname.length - 1].toLowerCase();
                if ($.inArray(docname, ['doc', 'docx', 'xls', 'csv', 'ppt', 'pdf']) == -1) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error("Please Select Valid File Format");
                    $("#uploadFile").val("");
                }
                else {
                    $(this).parent('.custom-upload').find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
                }
            });
        }
        $('#image-delete').click(function () {
            var siteImageURL = window.location.origin;
            ;
            if ($('#cropped-img')[0].src == siteURL + '/_catalogs/masterpage/BloomHomepage/images/prof-img.jpg') {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error("Please Upload the Image File");
            }
            else {
                $('#cropped-img')[0].src = siteURL + '/_catalogs/masterpage/BloomHomepage/images/prof-img.jpg';
                $('#inputImage').val("");
            }
        });
    };
    AddListItemWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [{
                    header: {
                        description: __WEBPACK_IMPORTED_MODULE_3_AddListItemWebPartStrings__["PropertyPaneDescription"]
                    },
                    groups: [{
                            groupName: __WEBPACK_IMPORTED_MODULE_3_AddListItemWebPartStrings__["BasicGroupName"],
                            groupFields: [
                                Object(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_webpart_base__["PropertyPaneTextField"])('description', {
                                    label: __WEBPACK_IMPORTED_MODULE_3_AddListItemWebPartStrings__["DescriptionFieldLabel"]
                                })
                            ]
                        }]
                }]
        };
    };
    return AddListItemWebPart;
}(__WEBPACK_IMPORTED_MODULE_0__microsoft_sp_webpart_base__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (AddListItemWebPart);



/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_107__;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! alertifyjs - v1.11.1 - Mohammad Younes <Mohammad@alertifyjs.com> (http://alertifyjs.com) */
!function(a){"use strict";function b(a,b){a.className+=" "+b}function c(a,b){for(var c=a.className.split(" "),d=b.split(" "),e=0;e<d.length;e+=1){var f=c.indexOf(d[e]);f>-1&&c.splice(f,1)}a.className=c.join(" ")}function d(){return"rtl"===a.getComputedStyle(document.body).direction}function e(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function f(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function g(a){for(;a.lastChild;)a.removeChild(a.lastChild)}function h(a){if(null===a)return a;var b;if(Array.isArray(a)){b=[];for(var c=0;c<a.length;c+=1)b.push(h(a[c]));return b}if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp)return b=new RegExp(a.source),b.global=a.global,b.ignoreCase=a.ignoreCase,b.multiline=a.multiline,b.lastIndex=a.lastIndex,b;if("object"==typeof a){b={};for(var d in a)a.hasOwnProperty(d)&&(b[d]=h(a[d]));return b}return a}function i(a,b){var c=a.elements.root;c.parentNode.removeChild(c),delete a.elements,a.settings=h(a.__settings),a.__init=b,delete a.__internal}function j(a,b){return function(){if(arguments.length>0){for(var c=[],d=0;d<arguments.length;d+=1)c.push(arguments[d]);return c.push(a),b.apply(a,c)}return b.apply(a,[null,a])}}function k(a,b){return{index:a,button:b,cancel:!1}}function l(a,b){if("function"==typeof b.get(a))return b.get(a).call(b)}function m(){function a(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function b(a){var b=d[a].dialog;return b&&"function"==typeof b.__init&&b.__init(b),b}function c(b,c,e,f){var g={dialog:null,factory:c};return void 0!==f&&(g.factory=function(){return a(new d[f].factory,new c)}),e||(g.dialog=a(new g.factory,t)),d[b]=g}var d={};return{defaults:o,dialog:function(d,e,f,g){if("function"!=typeof e)return b(d);if(this.hasOwnProperty(d))throw new Error("alertify.dialog: name already exists");var h=c(d,e,f,g);this[d]=f?function(){if(0===arguments.length)return h.dialog;var b=a(new h.factory,t);return b&&"function"==typeof b.__init&&b.__init(b),b.main.apply(b,arguments),b.show.apply(b)}:function(){if(h.dialog&&"function"==typeof h.dialog.__init&&h.dialog.__init(h.dialog),0===arguments.length)return h.dialog;var a=h.dialog;return a.main.apply(h.dialog,arguments),a.show.apply(h.dialog)}},closeAll:function(a){for(var b=p.slice(0),c=0;c<b.length;c+=1){var d=b[c];void 0!==a&&a===d||d.close()}},setting:function(a,c,d){if("notifier"===a)return u.setting(c,d);var e=b(a);return e?e.setting(c,d):void 0},set:function(a,b,c){return this.setting(a,b,c)},get:function(a,b){return this.setting(a,b)},notify:function(a,b,c,d){return u.create(b,d).push(a,c)},message:function(a,b,c){return u.create(null,c).push(a,b)},success:function(a,b,c){return u.create("success",c).push(a,b)},error:function(a,b,c){return u.create("error",c).push(a,b)},warning:function(a,b,c){return u.create("warning",c).push(a,b)},dismissAll:function(){u.dismissAll()}}}var n={ENTER:13,ESC:27,F1:112,F12:123,LEFT:37,RIGHT:39},o={autoReset:!0,basic:!1,closable:!0,closableByDimmer:!0,frameless:!1,maintainFocus:!0,maximizable:!0,modal:!0,movable:!0,moveBounded:!1,overflow:!0,padding:!0,pinnable:!0,pinned:!0,preventBodyShift:!1,resizable:!0,startMaximized:!1,transition:"pulse",notifier:{delay:5,position:"bottom-right",closeButton:!1},glossary:{title:"AlertifyJS",ok:"OK",cancel:"Cancel",acccpt:"Accept",deny:"Deny",confirm:"Confirm",decline:"Decline",close:"Close",maximize:"Maximize",restore:"Restore"},theme:{input:"ajs-input",ok:"ajs-ok",cancel:"ajs-cancel"}},p=[],q=function(){return document.addEventListener?function(a,b,c,d){a.addEventListener(b,c,!0===d)}:document.attachEvent?function(a,b,c){a.attachEvent("on"+b,c)}:void 0}(),r=function(){return document.removeEventListener?function(a,b,c,d){a.removeEventListener(b,c,!0===d)}:document.detachEvent?function(a,b,c){a.detachEvent("on"+b,c)}:void 0}(),s=function(){var a,b,c=!1,d={animation:"animationend",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(a in d)if(void 0!==document.documentElement.style[a]){b=d[a],c=!0;break}return{type:b,supported:c}}(),t=function(){function m(a){if(!a.__internal){delete a.__init,a.__settings||(a.__settings=h(a.settings));var c;"function"==typeof a.setup?(c=a.setup(),c.options=c.options||{},c.focus=c.focus||{}):c={buttons:[],focus:{element:null,select:!1},options:{}},"object"!=typeof a.hooks&&(a.hooks={});var d=[];if(Array.isArray(c.buttons))for(var e=0;e<c.buttons.length;e+=1){var f=c.buttons[e],g={};for(var i in f)f.hasOwnProperty(i)&&(g[i]=f[i]);d.push(g)}var k=a.__internal={isOpen:!1,activeElement:document.body,timerIn:void 0,timerOut:void 0,buttons:d,focus:c.focus,options:{title:void 0,modal:void 0,basic:void 0,frameless:void 0,pinned:void 0,movable:void 0,moveBounded:void 0,resizable:void 0,autoReset:void 0,closable:void 0,closableByDimmer:void 0,maximizable:void 0,startMaximized:void 0,pinnable:void 0,transition:void 0,padding:void 0,overflow:void 0,onshow:void 0,onclosing:void 0,onclose:void 0,onfocus:void 0,onmove:void 0,onmoved:void 0,onresize:void 0,onresized:void 0,onmaximize:void 0,onmaximized:void 0,onrestore:void 0,onrestored:void 0},resetHandler:void 0,beginMoveHandler:void 0,beginResizeHandler:void 0,bringToFrontHandler:void 0,modalClickHandler:void 0,buttonsClickHandler:void 0,commandsClickHandler:void 0,transitionInHandler:void 0,transitionOutHandler:void 0,destroy:void 0},l={};l.root=document.createElement("div"),l.root.className=Da.base+" "+Da.hidden+" ",l.root.innerHTML=Ca.dimmer+Ca.modal,l.dimmer=l.root.firstChild,l.modal=l.root.lastChild,l.modal.innerHTML=Ca.dialog,l.dialog=l.modal.firstChild,l.dialog.innerHTML=Ca.reset+Ca.commands+Ca.header+Ca.body+Ca.footer+Ca.resizeHandle+Ca.reset,l.reset=[],l.reset.push(l.dialog.firstChild),l.reset.push(l.dialog.lastChild),l.commands={},l.commands.container=l.reset[0].nextSibling,l.commands.pin=l.commands.container.firstChild,l.commands.maximize=l.commands.pin.nextSibling,l.commands.close=l.commands.maximize.nextSibling,l.header=l.commands.container.nextSibling,l.body=l.header.nextSibling,l.body.innerHTML=Ca.content,l.content=l.body.firstChild,l.footer=l.body.nextSibling,l.footer.innerHTML=Ca.buttons.auxiliary+Ca.buttons.primary,l.resizeHandle=l.footer.nextSibling,l.buttons={},l.buttons.auxiliary=l.footer.firstChild,l.buttons.primary=l.buttons.auxiliary.nextSibling,l.buttons.primary.innerHTML=Ca.button,l.buttonTemplate=l.buttons.primary.firstChild,l.buttons.primary.removeChild(l.buttonTemplate);for(var m=0;m<a.__internal.buttons.length;m+=1){var n=a.__internal.buttons[m];ya.indexOf(n.key)<0&&ya.push(n.key),n.element=l.buttonTemplate.cloneNode(),n.element.innerHTML=n.text,"string"==typeof n.className&&""!==n.className&&b(n.element,n.className);for(var o in n.attrs)"className"!==o&&n.attrs.hasOwnProperty(o)&&n.element.setAttribute(o,n.attrs[o]);"auxiliary"===n.scope?l.buttons.auxiliary.appendChild(n.element):l.buttons.primary.appendChild(n.element)}a.elements=l,k.resetHandler=j(a,X),k.beginMoveHandler=j(a,aa),k.beginResizeHandler=j(a,ga),k.bringToFrontHandler=j(a,B),k.modalClickHandler=j(a,R),k.buttonsClickHandler=j(a,T),k.commandsClickHandler=j(a,F),k.transitionInHandler=j(a,Y),k.transitionOutHandler=j(a,Z);for(var p in k.options)void 0!==c.options[p]?a.set(p,c.options[p]):v.defaults.hasOwnProperty(p)?a.set(p,v.defaults[p]):"title"===p&&a.set(p,v.defaults.glossary[p]);"function"==typeof a.build&&a.build()}document.body.appendChild(a.elements.root)}function o(){wa=f(),xa=e()}function t(){a.scrollTo(wa,xa)}function u(){for(var a=0,d=0;d<p.length;d+=1){var e=p[d];(e.isModal()||e.isMaximized())&&(a+=1)}0===a&&document.body.className.indexOf(Da.noOverflow)>=0?(c(document.body,Da.noOverflow),w(!1)):a>0&&document.body.className.indexOf(Da.noOverflow)<0&&(w(!0),b(document.body,Da.noOverflow))}function w(d){v.defaults.preventBodyShift&&document.documentElement.scrollHeight>document.documentElement.clientHeight&&(d?(Fa=xa,Ea=a.getComputedStyle(document.body).top,b(document.body,Da.fixed),document.body.style.top=-xa+"px"):(xa=Fa,document.body.style.top=Ea,c(document.body,Da.fixed),t()))}function x(a,d,e){"string"==typeof e&&c(a.elements.root,Da.prefix+e),b(a.elements.root,Da.prefix+d),za=a.elements.root.offsetWidth}function y(a){a.get("modal")?(c(a.elements.root,Da.modeless),a.isOpen()&&(pa(a),N(a),u())):(b(a.elements.root,Da.modeless),a.isOpen()&&(oa(a),N(a),u()))}function z(a){a.get("basic")?b(a.elements.root,Da.basic):c(a.elements.root,Da.basic)}function A(a){a.get("frameless")?b(a.elements.root,Da.frameless):c(a.elements.root,Da.frameless)}function B(a,b){for(var c=p.indexOf(b),d=c+1;d<p.length;d+=1)if(p[d].isModal())return;return document.body.lastChild!==b.elements.root&&(document.body.appendChild(b.elements.root),p.splice(p.indexOf(b),1),p.push(b),W(b)),!1}function C(a,d,e,f){switch(d){case"title":a.setHeader(f);break;case"modal":y(a);break;case"basic":z(a);break;case"frameless":A(a);break;case"pinned":O(a);break;case"closable":Q(a);break;case"maximizable":P(a);break;case"pinnable":K(a);break;case"movable":ea(a);break;case"resizable":ka(a);break;case"padding":f?c(a.elements.root,Da.noPadding):a.elements.root.className.indexOf(Da.noPadding)<0&&b(a.elements.root,Da.noPadding);break;case"overflow":f?c(a.elements.root,Da.noOverflow):a.elements.root.className.indexOf(Da.noOverflow)<0&&b(a.elements.root,Da.noOverflow);break;case"transition":x(a,f,e)}"function"==typeof a.hooks.onupdate&&a.hooks.onupdate.call(a,d,e,f)}function D(a,b,c,d,e){var f={op:void 0,items:[]};if(void 0===e&&"string"==typeof d)f.op="get",b.hasOwnProperty(d)?(f.found=!0,f.value=b[d]):(f.found=!1,f.value=void 0);else{var g;if(f.op="set","object"==typeof d){var h=d;for(var i in h)b.hasOwnProperty(i)?(b[i]!==h[i]&&(g=b[i],b[i]=h[i],c.call(a,i,g,h[i])),f.items.push({key:i,value:h[i],found:!0})):f.items.push({key:i,value:h[i],found:!1})}else{if("string"!=typeof d)throw new Error("args must be a string or object");b.hasOwnProperty(d)?(b[d]!==e&&(g=b[d],b[d]=e,c.call(a,d,g,e)),f.items.push({key:d,value:e,found:!0})):f.items.push({key:d,value:e,found:!1})}}return f}function E(a){var b;S(a,function(a){return b=!0===a.invokeOnClose}),!b&&a.isOpen()&&a.close()}function F(a,b){switch(a.srcElement||a.target){case b.elements.commands.pin:b.isPinned()?H(b):G(b);break;case b.elements.commands.maximize:b.isMaximized()?J(b):I(b);break;case b.elements.commands.close:E(b)}return!1}function G(a){a.set("pinned",!0)}function H(a){a.set("pinned",!1)}function I(a){l("onmaximize",a),b(a.elements.root,Da.maximized),a.isOpen()&&u(),l("onmaximized",a)}function J(a){l("onrestore",a),c(a.elements.root,Da.maximized),a.isOpen()&&u(),l("onrestored",a)}function K(a){a.get("pinnable")?b(a.elements.root,Da.pinnable):c(a.elements.root,Da.pinnable)}function L(a){var b=f();a.elements.modal.style.marginTop=e()+"px",a.elements.modal.style.marginLeft=b+"px",a.elements.modal.style.marginRight=-b+"px"}function M(a){var b=parseInt(a.elements.modal.style.marginTop,10),c=parseInt(a.elements.modal.style.marginLeft,10);if(a.elements.modal.style.marginTop="",a.elements.modal.style.marginLeft="",a.elements.modal.style.marginRight="",a.isOpen()){var d=0,g=0;""!==a.elements.dialog.style.top&&(d=parseInt(a.elements.dialog.style.top,10)),a.elements.dialog.style.top=d+(b-e())+"px",""!==a.elements.dialog.style.left&&(g=parseInt(a.elements.dialog.style.left,10)),a.elements.dialog.style.left=g+(c-f())+"px"}}function N(a){a.get("modal")||a.get("pinned")?M(a):L(a)}function O(a){a.get("pinned")?(c(a.elements.root,Da.unpinned),a.isOpen()&&M(a)):(b(a.elements.root,Da.unpinned),a.isOpen()&&!a.isModal()&&L(a))}function P(a){a.get("maximizable")?b(a.elements.root,Da.maximizable):c(a.elements.root,Da.maximizable)}function Q(a){a.get("closable")?(b(a.elements.root,Da.closable),ua(a)):(c(a.elements.root,Da.closable),va(a))}function R(a,b){var c=a.srcElement||a.target;return Ga||c!==b.elements.modal||!0!==b.get("closableByDimmer")||E(b),Ga=!1,!1}function S(a,b){for(var c=0;c<a.__internal.buttons.length;c+=1){var d=a.__internal.buttons[c];if(!d.element.disabled&&b(d)){var e=k(c,d);"function"==typeof a.callback&&a.callback.apply(a,[e]),!1===e.cancel&&a.close();break}}}function T(a,b){var c=a.srcElement||a.target;S(b,function(a){return a.element===c&&(Ha=!0)})}function U(a){if(Ha)return void(Ha=!1);var b=p[p.length-1],c=a.keyCode;return 0===b.__internal.buttons.length&&c===n.ESC&&!0===b.get("closable")?(E(b),!1):ya.indexOf(c)>-1?(S(b,function(a){return a.key===c}),!1):void 0}function V(a){var b=p[p.length-1],c=a.keyCode;if(c===n.LEFT||c===n.RIGHT){for(var d=b.__internal.buttons,e=0;e<d.length;e+=1)if(document.activeElement===d[e].element)switch(c){case n.LEFT:return void d[(e||d.length)-1].element.focus();case n.RIGHT:return void d[(e+1)%d.length].element.focus()}}else if(c<n.F12+1&&c>n.F1-1&&ya.indexOf(c)>-1)return a.preventDefault(),a.stopPropagation(),S(b,function(a){return a.key===c}),!1}function W(a,b){if(b)b.focus();else{var c=a.__internal.focus,d=c.element;switch(typeof c.element){case"number":a.__internal.buttons.length>c.element&&(d=!0===a.get("basic")?a.elements.reset[0]:a.__internal.buttons[c.element].element);break;case"string":d=a.elements.body.querySelector(c.element);break;case"function":d=c.element.call(a)}void 0!==d&&null!==d||0!==a.__internal.buttons.length||(d=a.elements.reset[0]),d&&d.focus&&(d.focus(),c.select&&d.select&&d.select())}}function X(a,b){if(!b)for(var c=p.length-1;c>-1;c-=1)if(p[c].isModal()){b=p[c];break}if(b&&b.isModal()){var d,e=a.srcElement||a.target,f=e===b.elements.reset[1]||0===b.__internal.buttons.length&&e===document.body;f&&(b.get("maximizable")?d=b.elements.commands.maximize:b.get("closable")&&(d=b.elements.commands.close)),void 0===d&&("number"==typeof b.__internal.focus.element?e===b.elements.reset[0]?d=b.elements.buttons.auxiliary.firstChild||b.elements.buttons.primary.firstChild:f&&(d=b.elements.reset[0]):e===b.elements.reset[0]&&(d=b.elements.buttons.primary.lastChild||b.elements.buttons.auxiliary.lastChild)),W(b,d)}}function Y(a,b){clearTimeout(b.__internal.timerIn),W(b),t(),Ha=!1,l("onfocus",b),r(b.elements.dialog,s.type,b.__internal.transitionInHandler),c(b.elements.root,Da.animationIn)}function Z(a,b){clearTimeout(b.__internal.timerOut),r(b.elements.dialog,s.type,b.__internal.transitionOutHandler),da(b),ja(b),b.isMaximized()&&!b.get("startMaximized")&&J(b),v.defaults.maintainFocus&&b.__internal.activeElement&&(b.__internal.activeElement.focus(),b.__internal.activeElement=null),"function"==typeof b.__internal.destroy&&b.__internal.destroy.apply(b)}function $(a,b){var c=a[La]-Ja,d=a[Ma]-Ka;Oa&&(d-=document.body.scrollTop),b.style.left=c+"px",b.style.top=d+"px"}function _(a,b){var c=a[La]-Ja,d=a[Ma]-Ka;Oa&&(d-=document.body.scrollTop),b.style.left=Math.min(Na.maxLeft,Math.max(Na.minLeft,c))+"px",b.style.top=Oa?Math.min(Na.maxTop,Math.max(Na.minTop,d))+"px":Math.max(Na.minTop,d)+"px"}function aa(a,c){if(null===Qa&&!c.isMaximized()&&c.get("movable")){var d,e=0,f=0;if("touchstart"===a.type?(a.preventDefault(),d=a.targetTouches[0],La="clientX",Ma="clientY"):0===a.button&&(d=a),d){var g=c.elements.dialog;if(b(g,Da.capture),g.style.left&&(e=parseInt(g.style.left,10)),g.style.top&&(f=parseInt(g.style.top,10)),Ja=d[La]-e,Ka=d[Ma]-f,c.isModal()?Ka+=c.elements.modal.scrollTop:c.isPinned()&&(Ka-=document.body.scrollTop),c.get("moveBounded")){var h=g,i=-e,j=-f;do{i+=h.offsetLeft,j+=h.offsetTop}while(h=h.offsetParent);Na={maxLeft:i,minLeft:-i,maxTop:document.documentElement.clientHeight-g.clientHeight-j,minTop:-j},Pa=_}else Na=null,Pa=$;return l("onmove",c),Oa=!c.isModal()&&c.isPinned(),Ia=c,Pa(d,g),b(document.body,Da.noSelection),!1}}}function ba(a){if(Ia){var b;"touchmove"===a.type?(a.preventDefault(),b=a.targetTouches[0]):0===a.button&&(b=a),b&&Pa(b,Ia.elements.dialog)}}function ca(){if(Ia){var a=Ia;Ia=Na=null,c(document.body,Da.noSelection),c(a.elements.dialog,Da.capture),l("onmoved",a)}}function da(a){Ia=null;var b=a.elements.dialog;b.style.left=b.style.top=""}function ea(a){a.get("movable")?(b(a.elements.root,Da.movable),a.isOpen()&&qa(a)):(da(a),c(a.elements.root,Da.movable),a.isOpen()&&ra(a))}function fa(a,b,c){var e=b,f=0,g=0;do{f+=e.offsetLeft,g+=e.offsetTop}while(e=e.offsetParent);var h,i;!0===c?(h=a.pageX,i=a.pageY):(h=a.clientX,i=a.clientY);var j=d();if(j&&(h=document.body.offsetWidth-h,isNaN(Ra)||(f=document.body.offsetWidth-f-b.offsetWidth)),b.style.height=i-g+Ua+"px",b.style.width=h-f+Ua+"px",!isNaN(Ra)){var k=.5*Math.abs(b.offsetWidth-Sa);j&&(k*=-1),b.offsetWidth>Sa?b.style.left=Ra+k+"px":b.offsetWidth>=Ta&&(b.style.left=Ra-k+"px")}}function ga(a,c){if(!c.isMaximized()){var d;if("touchstart"===a.type?(a.preventDefault(),d=a.targetTouches[0]):0===a.button&&(d=a),d){l("onresize",c),Qa=c,Ua=c.elements.resizeHandle.offsetHeight/2;var e=c.elements.dialog;return b(e,Da.capture),Ra=parseInt(e.style.left,10),e.style.height=e.offsetHeight+"px",e.style.minHeight=c.elements.header.offsetHeight+c.elements.footer.offsetHeight+"px",e.style.width=(Sa=e.offsetWidth)+"px","none"!==e.style.maxWidth&&(e.style.minWidth=(Ta=e.offsetWidth)+"px"),e.style.maxWidth="none",b(document.body,Da.noSelection),!1}}}function ha(a){if(Qa){var b;"touchmove"===a.type?(a.preventDefault(),b=a.targetTouches[0]):0===a.button&&(b=a),b&&fa(b,Qa.elements.dialog,!Qa.get("modal")&&!Qa.get("pinned"))}}function ia(){if(Qa){var a=Qa;Qa=null,c(document.body,Da.noSelection),c(a.elements.dialog,Da.capture),Ga=!0,l("onresized",a)}}function ja(a){Qa=null;var b=a.elements.dialog;"none"===b.style.maxWidth&&(b.style.maxWidth=b.style.minWidth=b.style.width=b.style.height=b.style.minHeight=b.style.left="",Ra=Number.Nan,Sa=Ta=Ua=0)}function ka(a){a.get("resizable")?(b(a.elements.root,Da.resizable),a.isOpen()&&sa(a)):(ja(a),c(a.elements.root,Da.resizable),a.isOpen()&&ta(a))}function la(){for(var a=0;a<p.length;a+=1){var b=p[a];b.get("autoReset")&&(da(b),ja(b))}}function ma(b){1===p.length&&(q(a,"resize",la),q(document.body,"keyup",U),q(document.body,"keydown",V),q(document.body,"focus",X),q(document.documentElement,"mousemove",ba),q(document.documentElement,"touchmove",ba),q(document.documentElement,"mouseup",ca),q(document.documentElement,"touchend",ca),q(document.documentElement,"mousemove",ha),q(document.documentElement,"touchmove",ha),q(document.documentElement,"mouseup",ia),q(document.documentElement,"touchend",ia)),q(b.elements.commands.container,"click",b.__internal.commandsClickHandler),q(b.elements.footer,"click",b.__internal.buttonsClickHandler),q(b.elements.reset[0],"focus",b.__internal.resetHandler),q(b.elements.reset[1],"focus",b.__internal.resetHandler),Ha=!0,q(b.elements.dialog,s.type,b.__internal.transitionInHandler),b.get("modal")||oa(b),b.get("resizable")&&sa(b),b.get("movable")&&qa(b)}function na(b){1===p.length&&(r(a,"resize",la),r(document.body,"keyup",U),r(document.body,"keydown",V),r(document.body,"focus",X),r(document.documentElement,"mousemove",ba),r(document.documentElement,"mouseup",ca),r(document.documentElement,"mousemove",ha),r(document.documentElement,"mouseup",ia)),r(b.elements.commands.container,"click",b.__internal.commandsClickHandler),r(b.elements.footer,"click",b.__internal.buttonsClickHandler),r(b.elements.reset[0],"focus",b.__internal.resetHandler),r(b.elements.reset[1],"focus",b.__internal.resetHandler),q(b.elements.dialog,s.type,b.__internal.transitionOutHandler),b.get("modal")||pa(b),b.get("movable")&&ra(b),b.get("resizable")&&ta(b)}function oa(a){q(a.elements.dialog,"focus",a.__internal.bringToFrontHandler,!0)}function pa(a){r(a.elements.dialog,"focus",a.__internal.bringToFrontHandler,!0)}function qa(a){q(a.elements.header,"mousedown",a.__internal.beginMoveHandler),q(a.elements.header,"touchstart",a.__internal.beginMoveHandler)}function ra(a){r(a.elements.header,"mousedown",a.__internal.beginMoveHandler),r(a.elements.header,"touchstart",a.__internal.beginMoveHandler)}function sa(a){q(a.elements.resizeHandle,"mousedown",a.__internal.beginResizeHandler),q(a.elements.resizeHandle,"touchstart",a.__internal.beginResizeHandler)}function ta(a){r(a.elements.resizeHandle,"mousedown",a.__internal.beginResizeHandler),r(a.elements.resizeHandle,"touchstart",a.__internal.beginResizeHandler)}function ua(a){q(a.elements.modal,"click",a.__internal.modalClickHandler)}function va(a){r(a.elements.modal,"click",a.__internal.modalClickHandler)}var wa,xa,ya=[],za=null,Aa=!1,Ba=a.navigator.userAgent.indexOf("Safari")>-1&&a.navigator.userAgent.indexOf("Chrome")<0,Ca={dimmer:'<div class="ajs-dimmer"></div>',modal:'<div class="ajs-modal" tabindex="0"></div>',dialog:'<div class="ajs-dialog" tabindex="0"></div>',reset:'<button class="ajs-reset"></button>',commands:'<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',header:'<div class="ajs-header"></div>',body:'<div class="ajs-body"></div>',content:'<div class="ajs-content"></div>',footer:'<div class="ajs-footer"></div>',buttons:{primary:'<div class="ajs-primary ajs-buttons"></div>',auxiliary:'<div class="ajs-auxiliary ajs-buttons"></div>'},button:'<button class="ajs-button"></button>',resizeHandle:'<div class="ajs-handle"></div>'},Da={animationIn:"ajs-in",animationOut:"ajs-out",base:"alertify",basic:"ajs-basic",capture:"ajs-capture",closable:"ajs-closable",fixed:"ajs-fixed",frameless:"ajs-frameless",hidden:"ajs-hidden",maximize:"ajs-maximize",maximized:"ajs-maximized",maximizable:"ajs-maximizable",modeless:"ajs-modeless",movable:"ajs-movable",noSelection:"ajs-no-selection",noOverflow:"ajs-no-overflow",noPadding:"ajs-no-padding",pin:"ajs-pin",pinnable:"ajs-pinnable",prefix:"ajs-",resizable:"ajs-resizable",restore:"ajs-restore",shake:"ajs-shake",unpinned:"ajs-unpinned"},Ea="",Fa=0,Ga=!1,Ha=!1,Ia=null,Ja=0,Ka=0,La="pageX",Ma="pageY",Na=null,Oa=!1,Pa=null,Qa=null,Ra=Number.Nan,Sa=0,Ta=0,Ua=0;return{__init:m,isOpen:function(){return this.__internal.isOpen},isModal:function(){return this.elements.root.className.indexOf(Da.modeless)<0},isMaximized:function(){return this.elements.root.className.indexOf(Da.maximized)>-1},isPinned:function(){return this.elements.root.className.indexOf(Da.unpinned)<0},maximize:function(){return this.isMaximized()||I(this),this},restore:function(){return this.isMaximized()&&J(this),this},pin:function(){return this.isPinned()||G(this),this},unpin:function(){return this.isPinned()&&H(this),this},bringToFront:function(){return B(null,this),this},moveTo:function(a,b){if(!isNaN(a)&&!isNaN(b)){l("onmove",this);var c=this.elements.dialog,e=c,f=0,g=0;c.style.left&&(f-=parseInt(c.style.left,10)),c.style.top&&(g-=parseInt(c.style.top,10));do{f+=e.offsetLeft,g+=e.offsetTop}while(e=e.offsetParent);var h=a-f,i=b-g;d()&&(h*=-1),c.style.left=h+"px",c.style.top=i+"px",l("onmoved",this)}return this},resizeTo:function(a,b){var c=parseFloat(a),d=parseFloat(b),e=/(\d*\.\d+|\d+)%/;if(!isNaN(c)&&!isNaN(d)&&!0===this.get("resizable")){l("onresize",this),(""+a).match(e)&&(c=c/100*document.documentElement.clientWidth),(""+b).match(e)&&(d=d/100*document.documentElement.clientHeight);var f=this.elements.dialog;"none"!==f.style.maxWidth&&(f.style.minWidth=(Ta=f.offsetWidth)+"px"),f.style.maxWidth="none",f.style.minHeight=this.elements.header.offsetHeight+this.elements.footer.offsetHeight+"px",f.style.width=c+"px",f.style.height=d+"px",l("onresized",this)}return this},setting:function(a,b){var c=this,d=D(this,this.__internal.options,function(a,b,d){C(c,a,b,d)},a,b);if("get"===d.op)return d.found?d.value:void 0!==this.settings?D(this,this.settings,this.settingUpdated||function(){},a,b).value:void 0;if("set"===d.op){if(d.items.length>0)for(var e=this.settingUpdated||function(){},f=0;f<d.items.length;f+=1){var g=d.items[f];g.found||void 0===this.settings||D(this,this.settings,e,g.key,g.value)}return this}},set:function(a,b){return this.setting(a,b),this},get:function(a){return this.setting(a)},setHeader:function(b){return"string"==typeof b?(g(this.elements.header),this.elements.header.innerHTML=b):b instanceof a.HTMLElement&&this.elements.header.firstChild!==b&&(g(this.elements.header),this.elements.header.appendChild(b)),this},setContent:function(b){return"string"==typeof b?(g(this.elements.content),this.elements.content.innerHTML=b):b instanceof a.HTMLElement&&this.elements.content.firstChild!==b&&(g(this.elements.content),this.elements.content.appendChild(b)),this},showModal:function(a){return this.show(!0,a)},show:function(a,d){if(m(this),this.__internal.isOpen){da(this),ja(this),b(this.elements.dialog,Da.shake);var e=this;setTimeout(function(){c(e.elements.dialog,Da.shake)},200)}else{if(this.__internal.isOpen=!0,p.push(this),v.defaults.maintainFocus&&(this.__internal.activeElement=document.activeElement),document.body.hasAttribute("tabindex")||document.body.setAttribute("tabindex",Aa="0"),"function"==typeof this.prepare&&this.prepare(),ma(this),void 0!==a&&this.set("modal",a),o(),u(),"string"==typeof d&&""!==d&&(this.__internal.className=d,b(this.elements.root,d)),this.get("startMaximized")?this.maximize():this.isMaximized()&&J(this),N(this),c(this.elements.root,Da.animationOut),b(this.elements.root,Da.animationIn),clearTimeout(this.__internal.timerIn),this.__internal.timerIn=setTimeout(this.__internal.transitionInHandler,s.supported?1e3:100),Ba){var f=this.elements.root;f.style.display="none",setTimeout(function(){f.style.display="block"},0)}za=this.elements.root.offsetWidth,c(this.elements.root,Da.hidden),"function"==typeof this.hooks.onshow&&this.hooks.onshow.call(this),l("onshow",this)}return this},close:function(){return this.__internal.isOpen&&!1!==l("onclosing",this)&&(na(this),c(this.elements.root,Da.animationIn),b(this.elements.root,Da.animationOut),clearTimeout(this.__internal.timerOut),this.__internal.timerOut=setTimeout(this.__internal.transitionOutHandler,s.supported?1e3:100),b(this.elements.root,Da.hidden),za=this.elements.modal.offsetWidth,void 0!==this.__internal.className&&""!==this.__internal.className&&c(this.elements.root,this.__internal.className),"function"==typeof this.hooks.onclose&&this.hooks.onclose.call(this),l("onclose",this),p.splice(p.indexOf(this),1),this.__internal.isOpen=!1,u()),p.length||"0"!==Aa||document.body.removeAttribute("tabindex"),this},closeOthers:function(){return v.closeAll(this),this},destroy:function(){return this.__internal.isOpen?(this.__internal.destroy=function(){i(this,m)},this.close()):i(this,m),this}}}(),u=function(){function d(a){a.__internal||(a.__internal={position:v.defaults.notifier.position,delay:v.defaults.notifier.delay},l=document.createElement("DIV"),h(a)),l.parentNode!==document.body&&document.body.appendChild(l)}function e(a){a.__internal.pushed=!0,m.push(a)}function f(a){m.splice(m.indexOf(a),1),a.__internal.pushed=!1}function h(a){switch(l.className=n.base,a.__internal.position){case"top-right":b(l,n.top+" "+n.right);break;case"top-left":b(l,n.top+" "+n.left);break;case"top-center":b(l,n.top+" "+n.center);break;case"bottom-left":b(l,n.bottom+" "+n.left);break;case"bottom-center":b(l,n.bottom+" "+n.center);break;default:case"bottom-right":b(l,n.bottom+" "+n.right)}}function i(d,h){function i(a,b){b.__internal.closeButton&&"true"!==a.target.getAttribute("data-close")||b.dismiss(!0)}function m(a,b){r(b.element,s.type,m),l.removeChild(b.element)}function o(a){return a.__internal||(a.__internal={pushed:!1,delay:void 0,timer:void 0,clickHandler:void 0,transitionEndHandler:void 0,transitionTimeout:void 0},a.__internal.clickHandler=j(a,i),a.__internal.transitionEndHandler=j(a,m)),a}function p(a){clearTimeout(a.__internal.timer),clearTimeout(a.__internal.transitionTimeout)}return o({element:d,push:function(a,c){if(!this.__internal.pushed){e(this),p(this);var d,f;switch(arguments.length){case 0:f=this.__internal.delay;break;case 1:"number"==typeof a?f=a:(d=a,f=this.__internal.delay);break;case 2:d=a,f=c}return this.__internal.closeButton=v.defaults.notifier.closeButton,void 0!==d&&this.setContent(d),u.__internal.position.indexOf("top")<0?l.appendChild(this.element):l.insertBefore(this.element,l.firstChild),k=this.element.offsetWidth,b(this.element,n.visible),q(this.element,"click",this.__internal.clickHandler),this.delay(f)}return this},ondismiss:function(){},callback:h,dismiss:function(a){return this.__internal.pushed&&(p(this),"function"==typeof this.ondismiss&&!1===this.ondismiss.call(this)||(r(this.element,"click",this.__internal.clickHandler),void 0!==this.element&&this.element.parentNode===l&&(this.__internal.transitionTimeout=setTimeout(this.__internal.transitionEndHandler,s.supported?1e3:100),c(this.element,n.visible),"function"==typeof this.callback&&this.callback.call(this,a)),f(this))),this},delay:function(a){if(p(this),this.__internal.delay=void 0===a||isNaN(+a)?u.__internal.delay:+a,this.__internal.delay>0){var b=this;this.__internal.timer=setTimeout(function(){b.dismiss()},1e3*this.__internal.delay)}return this},setContent:function(c){if("string"==typeof c?(g(this.element),this.element.innerHTML=c):c instanceof a.HTMLElement&&this.element.firstChild!==c&&(g(this.element),this.element.appendChild(c)),this.__internal.closeButton){var d=document.createElement("span");b(d,n.close),d.setAttribute("data-close",!0),this.element.appendChild(d)}return this},dismissOthers:function(){return u.dismissAll(this),this}})}var k,l,m=[],n={base:"alertify-notifier",message:"ajs-message",top:"ajs-top",right:"ajs-right",bottom:"ajs-bottom",left:"ajs-left",center:"ajs-center",visible:"ajs-visible",hidden:"ajs-hidden",close:"ajs-close"};return{setting:function(a,b){if(d(this),void 0===b)return this.__internal[a];switch(a){case"position":this.__internal.position=b,h(this);break;case"delay":this.__internal.delay=b}return this},set:function(a,b){return this.setting(a,b),this},get:function(a){return this.setting(a)},create:function(a,b){d(this);var c=document.createElement("div");return c.className=n.message+("string"==typeof a&&""!==a?" ajs-"+a:""),i(c,b)},dismissAll:function(a){for(var b=m.slice(0),c=0;c<b.length;c+=1){var d=b[c];void 0!==a&&a===d||d.dismiss()}}}}(),v=new m;v.dialog("alert",function(){return{main:function(a,b,c){var d,e,f;switch(arguments.length){case 1:e=a;break;case 2:"function"==typeof b?(e=a,f=b):(d=a,e=b);break;case 3:d=a,e=b,f=c}return this.set("title",d),this.set("message",e),this.set("onok",f),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:n.ESC,invokeOnClose:!0,className:v.defaults.theme.ok}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(a){this.setContent(a)},settings:{message:void 0,onok:void 0,label:void 0},settingUpdated:function(a,b,c){switch(a){case"message":this.setMessage(c);break;case"label":this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=c)}},callback:function(a){if("function"==typeof this.get("onok")){var b=this.get("onok").call(this,a);void 0!==b&&(a.cancel=!b)}}}}),v.dialog("confirm",function(){function a(a){null!==c.timer&&(clearInterval(c.timer),c.timer=null,a.__internal.buttons[c.index].element.innerHTML=c.text)}function b(b,d,e){a(b),c.duration=e,c.index=d,c.text=b.__internal.buttons[d].element.innerHTML,c.timer=setInterval(j(b,c.task),1e3),c.task(null,b)}var c={timer:null,index:null,text:null,duration:null,task:function(b,d){if(d.isOpen()){if(d.__internal.buttons[c.index].element.innerHTML=c.text+" (&#8207;"+c.duration+"&#8207;) ",c.duration-=1,-1===c.duration){a(d);var e=d.__internal.buttons[c.index],f=k(c.index,e);"function"==typeof d.callback&&d.callback.apply(d,[f]),!1!==f.close&&d.close()}}else a(d)}};return{main:function(a,b,c,d){var e,f,g,h;switch(arguments.length){case 1:f=a;break;case 2:f=a,g=b;break;case 3:f=a,g=b,h=c;break;case 4:e=a,f=b,g=c,h=d}return this.set("title",e),this.set("message",f),this.set("onok",g),this.set("oncancel",h),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:n.ENTER,className:v.defaults.theme.ok},{
text:v.defaults.glossary.cancel,key:n.ESC,invokeOnClose:!0,className:v.defaults.theme.cancel}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(a){this.setContent(a)},settings:{message:null,labels:null,onok:null,oncancel:null,defaultFocus:null,reverseButtons:null},settingUpdated:function(a,b,c){switch(a){case"message":this.setMessage(c);break;case"labels":"ok"in c&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].text=c.ok,this.__internal.buttons[0].element.innerHTML=c.ok),"cancel"in c&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].text=c.cancel,this.__internal.buttons[1].element.innerHTML=c.cancel);break;case"reverseButtons":!0===c?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);break;case"defaultFocus":this.__internal.focus.element="ok"===c?0:1}},callback:function(b){a(this);var c;switch(b.index){case 0:"function"==typeof this.get("onok")&&void 0!==(c=this.get("onok").call(this,b))&&(b.cancel=!c);break;case 1:"function"==typeof this.get("oncancel")&&void 0!==(c=this.get("oncancel").call(this,b))&&(b.cancel=!c)}},autoOk:function(a){return b(this,0,a),this},autoCancel:function(a){return b(this,1,a),this}}}),v.dialog("prompt",function(){var b=document.createElement("INPUT"),c=document.createElement("P");return{main:function(a,b,c,d,e){var f,g,h,i,j;switch(arguments.length){case 1:g=a;break;case 2:g=a,h=b;break;case 3:g=a,h=b,i=c;break;case 4:g=a,h=b,i=c,j=d;break;case 5:f=a,g=b,h=c,i=d,j=e}return this.set("title",f),this.set("message",g),this.set("value",h),this.set("onok",i),this.set("oncancel",j),this},setup:function(){return{buttons:[{text:v.defaults.glossary.ok,key:n.ENTER,className:v.defaults.theme.ok},{text:v.defaults.glossary.cancel,key:n.ESC,invokeOnClose:!0,className:v.defaults.theme.cancel}],focus:{element:b,select:!0},options:{maximizable:!1,resizable:!1}}},build:function(){b.className=v.defaults.theme.input,b.setAttribute("type","text"),b.value=this.get("value"),this.elements.content.appendChild(c),this.elements.content.appendChild(b)},prepare:function(){},setMessage:function(b){"string"==typeof b?(g(c),c.innerHTML=b):b instanceof a.HTMLElement&&c.firstChild!==b&&(g(c),c.appendChild(b))},settings:{message:void 0,labels:void 0,onok:void 0,oncancel:void 0,value:"",type:"text",reverseButtons:void 0},settingUpdated:function(a,c,d){switch(a){case"message":this.setMessage(d);break;case"value":b.value=d;break;case"type":switch(d){case"text":case"color":case"date":case"datetime-local":case"email":case"month":case"number":case"password":case"search":case"tel":case"time":case"week":b.type=d;break;default:b.type="text"}break;case"labels":d.ok&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=d.ok),d.cancel&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].element.innerHTML=d.cancel);break;case"reverseButtons":!0===d?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)}},callback:function(a){var c;switch(a.index){case 0:this.settings.value=b.value,"function"==typeof this.get("onok")&&void 0!==(c=this.get("onok").call(this,a,this.settings.value))&&(a.cancel=!c);break;case 1:"function"==typeof this.get("oncancel")&&void 0!==(c=this.get("oncancel").call(this,a))&&(a.cancel=!c),a.cancel||(b.value=this.settings.value)}}}}),"object"==typeof module&&"object"==typeof module.exports?module.exports=v: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return v}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):a.alertify||(a.alertify=v)}("undefined"!=typeof window?window:this);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(110);
var loader = __webpack_require__(81);

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)(false);
// imports


// module
exports.push([module.i, ".alertify .ajs-dimmer{margin:0;background-color:#252525;opacity:.5}.alertify .ajs-dimmer,.alertify .ajs-modal{position:fixed;z-index:1981;top:0;right:0;bottom:0;left:0;padding:0}.alertify .ajs-modal{overflow-y:auto}.alertify .ajs-dialog{position:relative;margin:5% auto;min-height:110px;max-width:500px;padding:24px 24px 0;outline:0;background-color:#fff}.alertify .ajs-dialog.ajs-capture:before{content:\"\";position:absolute;top:0;right:0;bottom:0;left:0;display:block;z-index:1}.alertify .ajs-reset{position:absolute!important;display:inline!important;width:0!important;height:0!important;opacity:0!important}.alertify .ajs-commands{position:absolute;right:4px;margin:-14px 24px 0 0;z-index:2}.alertify .ajs-commands button{display:none;width:10px;height:10px;margin-left:10px;padding:10px;border:0;background-color:transparent;background-repeat:no-repeat;background-position:50%;cursor:pointer}.alertify .ajs-commands button.ajs-close{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAh0lEQVQYlY2QsQ0EIQwEB9cBAR1CJUaI/gigDnwR6NBL/7/xWLNrZ2b8EwGotVpr7eOitWa1VjugiNB7R1UPrKrWe0dEAHBbXUqxMQbeewDmnHjvyTm7C3zDwAUd9c63YQdUVdu6EAJzzquz7HXvTiklt+H9DQFYaxFjvDqllFyMkbXWvfpXHjJrWFgdBq/hAAAAAElFTkSuQmCC)}.alertify .ajs-commands button.ajs-maximize{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAOUlEQVQYlWP8//8/AzGAhYGBgaG4uBiv6t7eXkYmooxjYGAgWiELsvHYFMCcRX2rSXcjoSBiJDbAAeD+EGu+8BZcAAAAAElFTkSuQmCC)}.alertify .ajs-header{margin:-24px;margin-bottom:0;padding:16px 24px;background-color:#fff}.alertify .ajs-body{min-height:56px}.alertify .ajs-body .ajs-content{padding:16px 24px 16px 16px}.alertify .ajs-footer{padding:4px;margin-left:-24px;margin-right:-24px;min-height:43px;background-color:#fff}.alertify .ajs-footer .ajs-buttons.ajs-primary{text-align:right}.alertify .ajs-footer .ajs-buttons.ajs-primary .ajs-button{margin:4px}.alertify .ajs-footer .ajs-buttons.ajs-auxiliary{float:left;clear:none;text-align:left}.alertify .ajs-footer .ajs-buttons.ajs-auxiliary .ajs-button{margin:4px}.alertify .ajs-footer .ajs-buttons .ajs-button{min-width:88px;min-height:35px}.alertify .ajs-handle{position:absolute;display:none;width:10px;height:10px;right:0;bottom:0;z-index:1;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMS8xNEDQYmMAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAQ0lEQVQYlaXNMQoAIAxD0dT7H657l0KX3iJuUlBUNOsPPCGJm7VDp6ryeMxMuDsAQH7owW3pyn3RS26iKxERMLN3ugOaAkaL3sWVigAAAABJRU5ErkJggg==);-webkit-transform:scaleX(1);transform:scaleX(1);cursor:se-resize}.alertify.ajs-no-overflow .ajs-body .ajs-content{overflow:hidden!important}.alertify.ajs-no-padding.ajs-maximized .ajs-body .ajs-content{left:0;right:0;padding:0}.alertify.ajs-no-padding:not(.ajs-maximized) .ajs-body{margin-left:-24px;margin-right:-24px}.alertify.ajs-no-padding:not(.ajs-maximized) .ajs-body .ajs-content{padding:0}.alertify.ajs-no-padding.ajs-resizable .ajs-body .ajs-content{left:0;right:0}.alertify.ajs-closable .ajs-commands button.ajs-close,.alertify.ajs-maximizable .ajs-commands button.ajs-maximize,.alertify.ajs-maximizable .ajs-commands button.ajs-restore{display:inline-block}.alertify.ajs-maximized .ajs-dialog{width:100%!important;height:100%!important;max-width:none!important;margin:0 auto!important;top:0!important;left:0!important}.alertify.ajs-maximized.ajs-modeless .ajs-modal{position:fixed!important;min-height:100%!important;max-height:none!important;margin:0!important}.alertify.ajs-maximized .ajs-commands button.ajs-maximize{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAASklEQVQYlZWQ0QkAMQhDtXRincOZX78KVtrDCwgqJNEoIB3MPLj7lRUROlpyVXGzby6zWuY+kz6tj5sBMTMAyVV3/595RbOh3cAXsww1raeiOcoAAAAASUVORK5CYII=)}.alertify.ajs-maximized .ajs-dialog,.alertify.ajs-resizable .ajs-dialog{padding:0}.alertify.ajs-maximized .ajs-commands,.alertify.ajs-resizable .ajs-commands{margin:14px 24px 0 0}.alertify.ajs-maximized .ajs-header,.alertify.ajs-resizable .ajs-header{position:absolute;top:0;left:0;right:0;margin:0;padding:16px 24px}.alertify.ajs-maximized .ajs-body,.alertify.ajs-resizable .ajs-body{min-height:224px;display:inline-block}.alertify.ajs-maximized .ajs-body .ajs-content,.alertify.ajs-resizable .ajs-body .ajs-content{position:absolute;top:50px;right:24px;bottom:50px;left:24px;overflow:auto}.alertify.ajs-maximized .ajs-footer,.alertify.ajs-resizable .ajs-footer{position:absolute;left:0;right:0;bottom:0;margin:0}.alertify.ajs-resizable:not(.ajs-maximized) .ajs-dialog{min-width:548px}.alertify.ajs-resizable:not(.ajs-maximized) .ajs-handle{display:block}.alertify.ajs-movable:not(.ajs-maximized) .ajs-header{cursor:move}.alertify.ajs-modeless .ajs-dimmer,.alertify.ajs-modeless .ajs-reset{display:none}.alertify.ajs-modeless .ajs-modal{overflow:visible;max-width:none;max-height:0}.alertify.ajs-modeless.ajs-pinnable .ajs-commands button.ajs-pin{display:inline-block;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAQklEQVQYlcWPMQ4AIAwCqU9u38GbcbHRWN1MvKQDhQFMEpKImGJA0gCgnYw0V0rwxseg5erT4oSkQVI5d9f+e9+xA0NbLpWfitPXAAAAAElFTkSuQmCC)}.alertify.ajs-modeless.ajs-unpinned .ajs-modal{position:absolute}.alertify.ajs-modeless.ajs-unpinned .ajs-commands button.ajs-pin{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwNy8xMy8xNOrZqugAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAO0lEQVQYlWP8//8/AzGAiShV6AqLi4txGs+CLoBLMYbC3t5eRmyaWfBZhwwYkX2NTxPRvibKjRhW4wMAhxkYGbLu3pEAAAAASUVORK5CYII=)}.alertify.ajs-modeless:not(.ajs-unpinned) .ajs-body{max-height:500px;overflow:auto}.alertify.ajs-basic .ajs-header{opacity:0}.alertify.ajs-basic .ajs-footer{visibility:hidden}.alertify.ajs-frameless .ajs-header{position:absolute;top:0;left:0;right:0;min-height:60px;margin:0;padding:0;opacity:0;z-index:1}.alertify.ajs-frameless .ajs-footer{display:none}.alertify.ajs-frameless .ajs-body .ajs-content{position:absolute;top:0;right:0;bottom:0;left:0}.alertify.ajs-frameless:not(.ajs-resizable) .ajs-dialog{padding-top:0}.alertify.ajs-frameless:not(.ajs-resizable) .ajs-dialog .ajs-commands{margin-top:0}.ajs-no-overflow{overflow:hidden!important;outline:0}.ajs-no-overflow.ajs-fixed{position:fixed;top:0;right:0;bottom:0;left:0;overflow-y:scroll!important}.ajs-no-selection,.ajs-no-selection *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (max-width:568px){.alertify .ajs-dialog{min-width:150px}.alertify:not(.ajs-maximized) .ajs-modal{padding:0 5%}.alertify:not(.ajs-maximized).ajs-resizable .ajs-dialog{min-width:0;min-width:auto}}@-moz-document url-prefix(){.alertify button:focus{outline:1px dotted #3593d2}}.alertify .ajs-dimmer,.alertify .ajs-modal{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-property:opacity,visibility;transition-property:opacity,visibility;-webkit-transition-timing-function:linear;transition-timing-function:linear;-webkit-transition-duration:.25s;transition-duration:.25s}.alertify.ajs-hidden .ajs-dimmer,.alertify.ajs-hidden .ajs-modal{visibility:hidden;opacity:0}.alertify.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-duration:.5s;animation-duration:.5s}.alertify.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-duration:.25s;animation-duration:.25s}.alertify .ajs-dialog.ajs-shake{-webkit-animation-name:ajs-shake;animation-name:ajs-shake;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes ajs-shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@keyframes ajs-shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}.alertify.ajs-slide.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-name:ajs-slideIn;animation-name:ajs-slideIn;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1.275);animation-timing-function:cubic-bezier(.175,.885,.32,1.275)}.alertify.ajs-slide.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-name:ajs-slideOut;animation-name:ajs-slideOut;-webkit-animation-timing-function:cubic-bezier(.6,-.28,.735,.045);animation-timing-function:cubic-bezier(.6,-.28,.735,.045)}.alertify.ajs-zoom.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-name:ajs-zoomIn;animation-name:ajs-zoomIn}.alertify.ajs-zoom.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-name:ajs-zoomOut;animation-name:ajs-zoomOut}.alertify.ajs-fade.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-name:ajs-fadeIn;animation-name:ajs-fadeIn}.alertify.ajs-fade.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-name:ajs-fadeOut;animation-name:ajs-fadeOut}.alertify.ajs-pulse.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-name:ajs-pulseIn;animation-name:ajs-pulseIn}.alertify.ajs-pulse.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-name:ajs-pulseOut;animation-name:ajs-pulseOut}.alertify.ajs-flipx.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-name:ajs-flipInX;animation-name:ajs-flipInX}.alertify.ajs-flipx.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-name:ajs-flipOutX;animation-name:ajs-flipOutX}.alertify.ajs-flipy.ajs-in:not(.ajs-hidden) .ajs-dialog{-webkit-animation-name:ajs-flipInY;animation-name:ajs-flipInY}.alertify.ajs-flipy.ajs-out.ajs-hidden .ajs-dialog{-webkit-animation-name:ajs-flipOutY;animation-name:ajs-flipOutY}@-webkit-keyframes ajs-pulseIn{0%,20%,40%,60%,80%,to{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes ajs-pulseIn{0%,20%,40%,60%,80%,to{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes ajs-pulseOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes ajs-pulseOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@-webkit-keyframes ajs-zoomIn{0%{opacity:0;-webkit-transform:scale3d(.25,.25,.25);transform:scale3d(.25,.25,.25)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes ajs-zoomIn{0%{opacity:0;-webkit-transform:scale3d(.25,.25,.25);transform:scale3d(.25,.25,.25)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes ajs-zoomOut{0%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}to{opacity:0;-webkit-transform:scale3d(.25,.25,.25);transform:scale3d(.25,.25,.25)}}@keyframes ajs-zoomOut{0%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}to{opacity:0;-webkit-transform:scale3d(.25,.25,.25);transform:scale3d(.25,.25,.25)}}@-webkit-keyframes ajs-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes ajs-fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes ajs-fadeOut{0%{opacity:1}to{opacity:0}}@keyframes ajs-fadeOut{0%{opacity:1}to{opacity:0}}@-webkit-keyframes ajs-flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes ajs-flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@-webkit-keyframes ajs-flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}@keyframes ajs-flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}@-webkit-keyframes ajs-flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes ajs-flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg);-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@-webkit-keyframes ajs-flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}@keyframes ajs-flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}@-webkit-keyframes ajs-slideIn{0%{margin-top:-100%}to{margin-top:5%}}@keyframes ajs-slideIn{0%{margin-top:-100%}to{margin-top:5%}}@-webkit-keyframes ajs-slideOut{0%{margin-top:5%}to{margin-top:-100%}}@keyframes ajs-slideOut{0%{margin-top:5%}to{margin-top:-100%}}.alertify-notifier{position:fixed;width:0;overflow:visible;z-index:1982}.alertify-notifier,.alertify-notifier .ajs-message{-webkit-transform:translateZ(0);transform:translateZ(0)}.alertify-notifier .ajs-message{position:relative;width:260px;max-height:0;padding:0;opacity:0;margin:0;-webkit-transition-duration:.25s;transition-duration:.25s;-webkit-transition-timing-function:linear;transition-timing-function:linear}.alertify-notifier .ajs-message.ajs-visible{-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:cubic-bezier(.175,.885,.32,1.275);transition-timing-function:cubic-bezier(.175,.885,.32,1.275);opacity:1;max-height:100%;padding:15px;margin-top:10px}.alertify-notifier .ajs-message.ajs-success{background:rgba(91,189,114,.95)}.alertify-notifier .ajs-message.ajs-error{background:rgba(217,92,92,.95)}.alertify-notifier .ajs-message.ajs-warning{background:hsla(54,86%,92%,.95)}.alertify-notifier .ajs-message .ajs-close{position:absolute;top:0;right:0;width:16px;height:16px;cursor:pointer;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABGdBTUEAALGPC/xhBQAAAFBJREFUGBl1j0EKADEIA+ve/P9f9bh1hEihNBfjVCO1v7RKVqJK4h8gM5cAPR42AkQEpSXPwMTyoi13n5N9YqJehm3Fnr7nL1D0ZEbD5OubGyC7a9gx+9eNAAAAAElFTkSuQmCC);background-repeat:no-repeat;background-position:50%;background-color:rgba(0,0,0,.5);border-top-right-radius:2px}.alertify-notifier.ajs-top{top:10px}.alertify-notifier.ajs-bottom{bottom:10px}.alertify-notifier.ajs-right{right:10px}.alertify-notifier.ajs-right .ajs-message{right:-320px}.alertify-notifier.ajs-right .ajs-message.ajs-visible{right:290px}.alertify-notifier.ajs-left{left:10px}.alertify-notifier.ajs-left .ajs-message{left:-300px}.alertify-notifier.ajs-left .ajs-message.ajs-visible{left:0}.alertify-notifier.ajs-center{left:50%}.alertify-notifier.ajs-center .ajs-message{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.alertify-notifier.ajs-center .ajs-message.ajs-visible{left:50%;-webkit-transition-timing-function:cubic-bezier(.57,.43,.1,.65);transition-timing-function:cubic-bezier(.57,.43,.1,.65)}.alertify-notifier.ajs-center.ajs-top .ajs-message{top:-300px}.alertify-notifier.ajs-center.ajs-top .ajs-message.ajs-visible{top:0}.alertify-notifier.ajs-center.ajs-bottom .ajs-message{bottom:-300px}.alertify-notifier.ajs-center.ajs-bottom .ajs-message.ajs-visible{bottom:0}", ""]);

// exports


/***/ })
/******/ ])});;
//# sourceMappingURL=add-list-item-web-part.js.map